export type Platform = 'android' | 'ios';

export const CONFIG_URL = 'https://raw.githubusercontent.com/muhammedalitunc1412-hue/hakikat-yolu-config/main/app-config.json';

export type UpdateState =
  | { kind: 'none' }
  | { kind: 'optional'; storeUrl: string }
  | { kind: 'required'; storeUrl: string; message?: Record<string, string> };

const playUrl = (androidPackage: string) => `https://play.google.com/store/apps/details?id=${androidPackage}`;
const appleUrl = /^https:\/\/apps\.apple\.com\/(?:[a-z]{2}\/)?app\/(?:[a-z0-9-]+\/)?id\d+$/i;

const code = (value: unknown) => (typeof value === 'number' && Number.isInteger(value) && value >= 0 ? value : null);

// Native build number string ("1", "42") -> integer; anything else is unknown.
export function buildNumber(value: unknown): number | null {
  if (typeof value === 'number') return code(value);
  return typeof value === 'string' && /^\d{1,9}$/.test(value) ? Number(value) : null;
}

function messages(value: unknown): Record<string, string> | undefined {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return undefined;
  const out: Record<string, string> = {};
  for (const [lang, text] of Object.entries(value)) {
    if (typeof text === 'string' && text.trim() && text.length <= 400) out[lang] = text.trim();
  }
  return Object.keys(out).length ? out : undefined;
}

// Decides what the installed build has to do. Unknown or malformed data never blocks the app.
export function evaluateUpdate(config: unknown, platform: Platform, installed: unknown, androidPackage: string): UpdateState {
  const none: UpdateState = { kind: 'none' };
  if (!config || typeof config !== 'object' || Array.isArray(config)) return none;
  const rule = (config as Record<string, unknown>)[platform];
  if (!rule || typeof rule !== 'object') return none;
  const versions = versionCodes(rule);
  // A string, negative, fractional, or missing code is not a rule. Never invent a lock from it.
  if (!versions) return none;
  const current = buildNumber(installed);
  if (current == null) return none;
  const { min, latest } = versions;
  const { storeUrl } = rule as Record<string, unknown>;

  // Android always uses this app's own Play listing; iOS needs a valid App Store link from the config.
  const url = platform === 'android' ? playUrl(androidPackage)
    : typeof storeUrl === 'string' && appleUrl.test(storeUrl) ? storeUrl : null;
  if (!url) return none;

  if (current < min) return { kind: 'required', storeUrl: url, message: messages((config as Record<string, unknown>).message) };
  if (current < latest) return { kind: 'optional', storeUrl: url };
  return none;
}

// Cache-busting query + caller-provided abort signal.
// 404/403, a deleted or private repo, a network error, or a body that is not a JSON object
// all return undefined. Callers must keep the stored rule and must not create a new lock.
export async function fetchAppConfig(url: string, signal: AbortSignal, now: number = Date.now()): Promise<unknown | undefined> {
  if (!url.startsWith('https://')) return undefined;
  try {
    const response = await fetch(`${url}${url.includes('?') ? '&' : '?'}t=${now}`, {
      signal,
      headers: { 'Cache-Control': 'no-cache' },
    });
    if (!response.ok) return undefined;
    const config: unknown = await response.json();
    return config && typeof config === 'object' && !Array.isArray(config) ? config : undefined;
  } catch {
    return undefined;
  }
}

export const marketUrl = (androidPackage: string) => `market://details?id=${androidPackage}`;

// ---- Local persistence -------------------------------------------------------------------
// The last successfully fetched rule is kept on the device so a required update still blocks offline.
export const STORED_KEY = 'hakikat-yolu:update-policy';

export type Storage = {
  getItem(key: string): Promise<string | null>;
  setItem(key: string, value: string): Promise<unknown>;
  removeItem(key: string): Promise<unknown>;
};

type Snapshot = { platform: Platform; minVersionCode: number; latestVersionCode: number; message?: Record<string, string> };

function versionCodes(rule: unknown): { min: number; latest: number } | null {
  if (!rule || typeof rule !== 'object' || Array.isArray(rule)) return null;
  const { minVersionCode, latestVersionCode } = rule as Record<string, unknown>;
  const min = code(minVersionCode);
  const latest = code(latestVersionCode);
  if (min == null || latest == null) return null;
  return { min, latest: Math.max(latest, min) };
}

function snapshotOf(config: unknown, platform: Platform): Snapshot | null {
  if (!config || typeof config !== 'object' || Array.isArray(config)) return null;
  const versions = versionCodes((config as Record<string, unknown>)[platform]);
  if (!versions) return null;
  return { platform, minVersionCode: versions.min, latestVersionCode: versions.latest, message: messages((config as Record<string, unknown>).message) };
}

// Stored rule -> blocking state only. A stored "latest" never nags offline; only fresh data can.
export async function readStoredState(storage: Storage, platform: Platform, installed: unknown, androidPackage: string): Promise<UpdateState> {
  try {
    const raw = await storage.getItem(STORED_KEY);
    if (!raw) return { kind: 'none' };
    const snap: unknown = JSON.parse(raw);
    if (!snap || typeof snap !== 'object' || (snap as Snapshot).platform !== platform) return { kind: 'none' };
    const { minVersionCode, message } = snap as Snapshot;
    const state = evaluateUpdate({
      [platform]: { minVersionCode, latestVersionCode: minVersionCode, storeUrl: '' }, message,
    }, platform, installed, androidPackage);
    return state.kind === 'required' ? state : { kind: 'none' };
  } catch {
    return { kind: 'none' };
  }
}

// Only a well-formed rule overwrites storage (so lowering min remotely unblocks users who are online).
// Anything else leaves the previous rule untouched and cannot create a new lock.
export async function applyFreshConfig(storage: Storage, config: unknown, platform: Platform, installed: unknown, androidPackage: string): Promise<UpdateState> {
  const snap = snapshotOf(config, platform);
  if (!snap) return readStoredState(storage, platform, installed, androidPackage);
  try {
    await storage.setItem(STORED_KEY, JSON.stringify(snap));
  } catch {
    // Storage trouble must not break the live decision.
  }
  return evaluateUpdate(config, platform, installed, androidPackage);
}

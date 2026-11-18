export type Platform = 'android' | 'ios';

export const CONFIG_URL = 'https://raw.githubusercontent.com/muhammedalitunc1412-hue/hakikat-yolu/main/config/app-config.json';

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
  const current = buildNumber(installed);
  const { minVersionCode, latestVersionCode, storeUrl } = rule as Record<string, unknown>;
  if (current == null) return none;
  const min = code(minVersionCode) ?? 0;
  const latest = Math.max(code(latestVersionCode) ?? 0, min);

  // Android always uses this app's own Play listing; iOS needs a valid App Store link from the config.
  const url = platform === 'android' ? playUrl(androidPackage)
    : typeof storeUrl === 'string' && appleUrl.test(storeUrl) ? storeUrl : null;
  if (!url) return none;

  if (current < min) return { kind: 'required', storeUrl: url, message: messages((config as Record<string, unknown>).message) };
  if (current < latest) return { kind: 'optional', storeUrl: url };
  return none;
}

// Cache-busting query + caller-provided abort signal. Returns undefined on any server/format problem.
export async function fetchAppConfig(url: string, signal: AbortSignal, now: number = Date.now()): Promise<unknown | undefined> {
  if (!url.startsWith('https://')) return undefined;
  const response = await fetch(`${url}${url.includes('?') ? '&' : '?'}t=${now}`, {
    signal,
    headers: { 'Cache-Control': 'no-cache' },
  });
  if (!response.ok) return undefined;
  const config: unknown = await response.json();
  return config && typeof config === 'object' && !Array.isArray(config) ? config : undefined;
}

export const marketUrl = (androidPackage: string) => `market://details?id=${androidPackage}`;

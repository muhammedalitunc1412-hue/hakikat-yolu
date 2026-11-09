type Platform = 'android' | 'ios';

function versionParts(value: unknown) {
  return typeof value === 'string' && /^\d{1,6}\.\d{1,6}\.\d{1,6}$/.test(value)
    ? value.split('.').map(Number) : null;
}

export function requiredStoreUrl(policy: unknown, platform: Platform, installed: string, androidPackage: string): string | null {
  if (!policy || typeof policy !== 'object') return null;
  const rule = (policy as Record<string, unknown>)[platform];
  if (!rule || typeof rule !== 'object') return null;
  const { minimumVersion, storeUrl } = rule as Record<string, unknown>;
  const minimum = versionParts(minimumVersion);
  const current = versionParts(installed);
  if (!minimum || !current || typeof storeUrl !== 'string') return null;
  const difference = minimum.map((part, index) => part - current[index]).find(part => part !== 0);
  if (difference == null || difference <= 0) return null;
  if (platform === 'android') {
    return storeUrl === `https://play.google.com/store/apps/details?id=${androidPackage}` ? storeUrl : null;
  }
  return /^https:\/\/apps\.apple\.com\/(?:[a-z]{2}\/)?app\/(?:[a-z0-9-]+\/)?id\d+$/i.test(storeUrl) ? storeUrl : null;
}

export async function checkUpdate(url: string, platform: Platform, installed: string, androidPackage: string, signal: AbortSignal) {
  if (!url.startsWith('https://')) return undefined;
  const response = await fetch(url, { signal, headers: { 'Cache-Control': 'no-cache' } });
  if (!response.ok) return undefined;
  const policy: unknown = await response.json();
  if (!policy || typeof policy !== 'object' || Array.isArray(policy)) return undefined;
  return requiredStoreUrl(policy, platform, installed, androidPackage);
}

// Çeviri katmanı için ortak yardımcılar (uygulama ve tools/i18n.cjs aynı kodu kullanır).
// Bir "L" düğümü, tr alanı metin olan nesnedir. Yol, olay içindeki konumdur (örn. scenes.3.text).
export const textHash = (s: string): string => {
  let h = 0x811c9dc5;
  for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 0x01000193); }
  return (h >>> 0).toString(36);
};

export type LNode = { tr: string } & Record<string, string | undefined>;

const isL = (v: unknown): v is LNode =>
  !!v && typeof v === 'object' && typeof (v as { tr?: unknown }).tr === 'string';

export function walkL(node: unknown, cb: (path: string, l: LNode) => void, path = ''): void {
  if (isL(node)) { cb(path, node); return; }
  if (Array.isArray(node)) { node.forEach((v, i) => walkL(v, cb, path ? path + '.' + i : String(i))); return; }
  if (node && typeof node === 'object') {
    for (const [k, v] of Object.entries(node)) walkL(v, cb, path ? path + '.' + k : k);
  }
}

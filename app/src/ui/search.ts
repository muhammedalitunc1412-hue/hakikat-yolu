import { EVENTS } from '../data/events';
import { getLang, tx } from '../i18n';
import type { Lang } from '../types';
import { fold } from './searchFold';

// Uygulama içi arama: hikâye başlıkları, giriş cümleleri ve sahne metinleri, seçili dilde.
// Büyük/küçük harf ve aksan (â, î, é, harekeler) fark etmez; sonuç parçası asıl metinden kesilir.

export type Hit = { eventId: string; scene: number; story: string; snippet: string; mark: [number, number] | null; kind: 'title' | 'scene' };

export const plain = (s: string) => s.replace(/\*\*/g, '').replace(/\s+/g, ' ').trim();

function snippetAround(src: string, start: number, end: number, radius = 70): { snippet: string; mark: [number, number] } {
  let a = Math.max(0, start - radius);
  let b = Math.min(src.length, end + radius);
  if (a > 0) { const sp = src.indexOf(' ', a); if (sp >= 0 && sp < start) a = sp + 1; }
  if (b < src.length) { const sp = src.lastIndexOf(' ', b); if (sp > end) b = sp; }
  const pre = a > 0 ? '…' : '';
  const post = b < src.length ? '…' : '';
  return { snippet: pre + src.slice(a, b) + post, mark: [pre.length + start - a, pre.length + end - a] };
}

function find(src: string, q: string, lang: Lang): [number, number] | null {
  const f = fold(src, lang);
  const at = f.text.indexOf(q);
  if (at < 0) return null;
  const start = f.map[at];
  const last = f.map[at + q.length - 1];
  return [start, last + 1];
}

export function search(query: string, limit = 80, lang: Lang = getLang()): Hit[] {
  const q = fold(query.trim(), lang).text;
  if (q.length < 2) return [];
  const hits: Hit[] = [];
  for (const ev of EVENTS) {
    const story = plain(tx(ev.title));
    const head = find(story, q, lang) ?? find(plain(tx(ev.hook)), q, lang);
    if (head) {
      const hook = plain(tx(ev.hook));
      const inTitle = !!find(story, q, lang);
      const around = inTitle ? null : snippetAround(hook, head[0], head[1]);
      hits.push({ eventId: ev.id, scene: 0, story, snippet: around ? around.snippet : hook, mark: around ? around.mark : null, kind: 'title' });
    }
    ev.scenes.forEach((sc, n) => {
      const text = plain(tx(sc.text));
      const m = find(text, q, lang);
      if (!m) return;
      const sn = snippetAround(text, m[0], m[1]);
      hits.push({ eventId: ev.id, scene: n, story, snippet: sn.snippet, mark: sn.mark, kind: 'scene' });
    });
    if (hits.length >= limit) break;
  }
  return hits.slice(0, limit);
}

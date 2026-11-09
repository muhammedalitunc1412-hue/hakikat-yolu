import type { Lang } from '../types';
import { CATEGORIES, EVENTS } from '../data/events';
import { CATEGORY_TEXT } from './categories';
import { LOCALES } from './index';
import { textHash, walkL } from './walk';

// Türkçe asıl kategori metinleri (dil Türkçeye dönünce geri yüklenir)
const CATEGORY_TR = new Map(CATEGORIES.map(c => [c.id, { title: c.title, sub: c.sub }]));

// Seçilen dilin çevirilerini olay metinlerine işler (bir kez). Türkçe metin değişmişse (karma uyuşmazsa)
// eski çeviri kullanılmaz; o metin İngilizceye, o da yoksa Türkçeye düşer.
const done = new Set<Lang>();
export function applyLocale(lang: Lang) {
  for (const c of CATEGORIES) {
    const text = lang === 'tr' ? undefined : CATEGORY_TEXT[lang]?.[c.id] ?? CATEGORY_TEXT.en?.[c.id];
    const tr = CATEGORY_TR.get(c.id)!;
    c.title = text?.title ?? tr.title;
    c.sub = text?.sub ?? tr.sub;
  }
  if (lang === 'tr' || done.has(lang)) return;
  done.add(lang);
  const pack = LOCALES[lang];
  if (!pack) return;
  for (const ev of EVENTS) {
    const entries = pack[ev.id];
    if (!entries) continue;
    walkL(ev, (path, l) => {
      const e = entries[path];
      if (e && e[0] === textHash(l.tr)) l[lang] = e[1];
    });
  }
}

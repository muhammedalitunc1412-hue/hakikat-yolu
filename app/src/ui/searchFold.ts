import type { Lang } from '../types';

// Arama için metin katlama (saf; node testiyle denetlenir).
const ARABIC_FOLD: Record<string, string> = { 'ي': 'ی', 'ى': 'ی', 'ك': 'ک', 'ة': 'ه', 'أ': 'ا', 'إ': 'ا', 'آ': 'ا', 'ـ': '' };

function foldChar(c: string, locale: string): string {
  if (c === '\u200c' || c === '\u200d') return '';
  if (ARABIC_FOLD[c] !== undefined) return ARABIC_FOLD[c];
  const lower = c.toLocaleLowerCase(locale);
  return lower.normalize('NFD').replace(/\p{M}/gu, '').replace(/ı/g, 'i');
}

// Katlanmış metin + her katlanmış karakterin asıl metindeki konumu.
export function fold(s: string, lang: Lang): { text: string; map: number[] } {
  const locale = lang === 'tr' || lang === 'az' ? 'tr' : lang;
  let text = '';
  const map: number[] = [];
  let i = 0;
  for (const ch of s) {
    const f = foldChar(ch, locale);
    for (let k = 0; k < f.length; k++) map.push(i);
    text += f;
    i += ch.length;
  }
  return { text, map };
}


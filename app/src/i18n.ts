import type { L, Lang } from './types';

let cur: Lang = 'tr';
export const setLang = (l: Lang) => { cur = l; };
export const getLang = (): Lang => cur;
export const isRtl = (l: Lang = cur) => l === 'ar' || l === 'fa' || l === 'ur';

// İçerik metni: seçili dil → İngilizce → Türkçe
export function tx(v: L | string | undefined): string {
  if (!v) return '';
  if (typeof v === 'string') return v;
  return v[cur as keyof L] ?? v.en ?? v.tr;
}

const UI: Record<string, L> = {
  appName: { tr: 'HAKİKAT YOLU', en: 'PATH OF TRUTH' },
  tagline: { tr: 'İslam tarihinin kırılma anları, kaynaklarıyla', en: 'The turning points of Islamic history, with their sources' },
  events: { tr: 'Olaylar', en: 'Events' },
  method: { tr: 'Kaynaklar ve yöntem', en: 'Sources & method' },
  back: { tr: 'Geri', en: 'Back' },
  sunniSources: { tr: 'Sünni kaynaklarında', en: 'In Sunni sources' },
  shiaSources: { tr: 'Şii kaynaklarında', en: 'In Shia sources' },
  disputes: { tr: 'Ayrılıklar', en: 'Points of disagreement' },
  sunniView: { tr: 'Sünni yorum', en: 'Sunni view' },
  shiaView: { tr: 'Şii yorum', en: 'Shia view' },
  think: { tr: 'Düşünelim', en: 'Let us reflect' },
  story: { tr: 'Hikâye', en: 'Story' },
  verified: { tr: 'Doğrulandı', en: 'Verified' },
  check: { tr: 'Kontrol edilmeli', en: 'To be checked' },
  grade: { tr: 'Sıhhat', en: 'Grading' },
  summary: { tr: 'Özet', en: 'Summary' },
  notes: { tr: 'Özet notlar', en: 'Key notes' },
  video: { tr: 'Olay videosu', en: 'Event video' },
  videoHint: { tr: 'Oynat düğmesine bas; tam ekran düğmesiyle videoyu yan çevirip izleyebilirsin.', en: 'Press play; use the fullscreen button to watch it in landscape.' },
  next: { tr: 'Kaydır', en: 'Swipe' },
  duas: { tr: 'Dualar ve Ziyaretler', en: 'Prayers & Ziyarat' },
  duasSub: { tr: 'Ayetü\'l-Kürsî, Cevşen, Ziyâret-i Âşûrâ, İmam-ı Zaman duası ve daha fazlası: Arapça, okunuş ve anlam', en: 'Arabic, transliteration and meaning' },
  maps: { tr: 'Haritalar', en: 'Maps' },
  mapsSub: { tr: 'Olayların geçtiği yerler, kuş bakışı', en: 'Where the events happened, from above' },
  seeMap: { tr: 'Haritada gör', en: 'See on the map' },
  openEvent: { tr: 'Olayı oku', en: 'Read the event' },
  distances: { tr: 'Mesafeler', en: 'Distances' },
  roadNote: { tr: 'Yol notu', en: 'Route note' },
  search: { tr: 'Olay, yer veya kişi ara', en: 'Search an event, place or name' },
  noResult: { tr: 'Bu aramayla eşleşen olay yok.', en: 'No event matches this search.' },
  scene: { tr: 'Sahne', en: 'Scene' },
  prev: { tr: 'Önceki', en: 'Previous' },
  nextScene: { tr: 'Sonraki', en: 'Next' },
  kicker: { tr: 'EHL-İ BEYT', en: 'AHL AL-BAYT' },
  arabic: { tr: 'Arapça', en: 'Arabic' },
  okunus: { tr: 'Okunuş', en: 'Transliteration' },
  meal: { tr: 'Anlam (meal)', en: 'Meaning' },
  duaSource: { tr: 'Arapça metnin kaynağı', en: 'Source of the Arabic text' },
  acceptBoth: { tr: 'Kabul eden: Sünni ve Şii', en: 'Accepted by: Sunni and Shia' },
  acceptShia: { tr: 'Kabul eden: Şii', en: 'Accepted by: Shia' },
  acceptSunni: { tr: 'Kabul eden: Sünni', en: 'Accepted by: Sunni' },
  none: { tr: 'Bu olay için bu kaynak grubunda kayıt yok.', en: 'No entry in this group of sources.' },
};
export const ui = (k: keyof typeof UI) => tx(UI[k]);

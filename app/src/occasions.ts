// Özel günler: Hicri takvime göre tarih hesabı ve bildirim metinleri. Saf hesap, ağ ya da konum gerektirmez.
//
// Hicri tarih "tablolu" (aritmetik) takvimle bulunur. Gerçek günler hilal gözlemine göre bir iki gün kayabilir;
// bu yüzden bildirimler "yaklaşık" tarihlidir ve ayarlar ekranında bu uyarı yazar.
import type { L } from './types';

export type Open = { kind: 'event' | 'dua' | 'imam'; id: string };

export type Occasion = {
  id: string;
  month: number; // 1 = Muharrem ... 12 = Zilhicce
  day: number;
  eve?: boolean; // gece anılan günler: bir önceki akşam 19.00'da hatırlat
  title: L;
  body: L;
  open?: Open;
};

const t = (tr: string, en: string): L => ({ tr, en });

export const OCCASIONS: Occasion[] = [
  {
    id: 'muharrem-1', month: 1, day: 1,
    title: t('Muharrem ayı başladı', 'Muharram has begun'),
    body: t('Kerbela\'yı anma günleri başlıyor. Kerbela olayını baştan okuyabilirsin.', 'The days of remembering Karbala begin. You can read the story of Karbala from the start.'),
    open: { kind: 'event', id: 'kerbela' },
  },
  {
    id: 'tasua', month: 1, day: 9,
    title: t('Tasua günü', 'Tasua'),
    body: t('Kerbela\'da Hz. Hüseyin ve ailesinin son gecesi öncesi. Kerbela olayını hatırlayalım.', 'The day before Ashura at Karbala. Let us remember the story.'),
    open: { kind: 'event', id: 'kerbela' },
  },
  {
    id: 'asure', month: 1, day: 10,
    title: t('Aşure Günü', 'The Day of Ashura'),
    body: t('Bugün 10 Muharrem, Hz. Hüseyin\'in Kerbela\'da şehit edildiği gün. Ziyaret-i Aşura\'yı okuyabilirsin.', 'Today is 10 Muharram, the day Imam Husayn was martyred at Karbala. You can read Ziyarat Ashura.'),
    open: { kind: 'dua', id: 'ziyaret-asura' },
  },
  {
    id: 'erbain', month: 2, day: 20,
    title: t('Erbain', 'Arbaeen'),
    body: t('Kerbela şehitlerinin kırkıncı günü. Kerbela olayını ve Hz. Zeynep\'in sözlerini hatırlayalım.', 'The fortieth day after Karbala. Let us remember the story and the words of Lady Zaynab.'),
    open: { kind: 'event', id: 'kerbela' },
  },
  {
    id: 'safer-28', month: 2, day: 28,
    title: t('28 Safer', '28 Safar'),
    body: t('Şii kaynaklarına göre Hz. Peygamber\'in vefatı ve Hz. Hasan\'ın şehadeti anılır.', 'In Shia sources, the passing of the Prophet and the martyrdom of Imam Hasan are remembered.'),
    open: { kind: 'event', id: 'hasan' },
  },
  {
    id: 'mevlid-12', month: 3, day: 12,
    title: t('Mevlid günü (12 Rebiülevvel)', 'Mawlid (12 Rabi\' al-awwal)'),
    body: t('Sünni kaynaklarına göre Hz. Peygamber\'in doğum günü. Salavat getirelim.', 'The Prophet\'s birthday according to Sunni sources. Let us send blessings upon him.'),
    open: { kind: 'dua', id: 'salavat' },
  },
  {
    id: 'mevlid-17', month: 3, day: 17,
    title: t('17 Rebiülevvel', '17 Rabi\' al-awwal'),
    body: t('Şii kaynaklarına göre Hz. Peygamber\'in ve Hz. Cafer-i Sâdık\'ın doğum günü. Salavat getirelim.', 'The birthday of the Prophet and of Imam Ja\'far al-Sadiq according to Shia sources. Let us send blessings.'),
    open: { kind: 'dua', id: 'salavat' },
  },
  {
    id: 'zeynep-dogum', month: 5, day: 5,
    title: t('Hz. Zeynep\'in doğum günü', 'Birthday of Lady Zaynab'),
    body: t('5 Cemaziyelevvel, Hz. Zeynep\'in doğum günü (Şii kaynaklarına göre). Kerbela\'daki sabrını ve duruşunu okuyabilirsin.', '5 Jumada al-awwal, the birthday of Lady Zaynab according to Shia sources. You can read about her patience and stand at Karbala.'),
    open: { kind: 'event', id: 'kerbela' },
  },
  {
    id: 'fatimiyye-baslangic', month: 5, day: 13,
    title: t('Eyyâm-ı Fâtımiyye başlıyor', 'The Fatimid days begin'),
    body: t('Hz. Fatıma\'nın vefatını anma günleri. Tesbih-i Fatıma\'yı okuyabilir, olayı baştan dinleyebilirsin.', 'The days of remembering the passing of Lady Fatima. You can recite her tasbih or read the story.'),
    open: { kind: 'event', id: 'fatima-vefat' },
  },
  {
    id: 'fatima-sehadet', month: 6, day: 3,
    title: t('Hz. Fatıma\'nın vefat günü', 'The day Lady Fatima passed'),
    body: t('Eyyâm-ı Fâtımiyye\'nin son günü (95 günlük görüşe göre). Olayı okuyalım.', 'The last of the Fatimid days (according to the 95-day view). Let us read the story.'),
    open: { kind: 'event', id: 'fatima-vefat' },
  },
  {
    id: 'fatima-dogum', month: 6, day: 20,
    title: t('Hz. Fatıma\'nın doğum günü', 'Birthday of Lady Fatima'),
    body: t('Şii kaynaklarına göre Hz. Fatıma\'nın doğum günü. Tesbih-i Fatıma\'yı okuyalım.', 'Lady Fatima\'s birthday according to Shia sources. Let us recite her tasbih.'),
    open: { kind: 'dua', id: 'tesbih-fatima' },
  },
  {
    id: 'ali-dogum', month: 7, day: 13,
    title: t('Hz. Ali\'nin doğum günü', 'Birthday of Imam Ali'),
    body: t('13 Recep, Hz. Ali\'nin doğum günü. Hayatını baştan okuyabilirsin.', '13 Rajab, the birthday of Imam Ali. You can read his life story.'),
    open: { kind: 'event', id: 'ali-kimdir' },
  },
  {
    id: 'huseyin-dogum', month: 8, day: 3,
    title: t('Hz. Hüseyin\'in doğum günü', 'Birthday of Imam Husayn'),
    body: t('3 Şaban, Hz. Hüseyin\'in doğum günü. Hayatını okuyabilirsin.', '3 Sha\'ban, the birthday of Imam Husayn. You can read about his life.'),
    open: { kind: 'imam', id: 'huseyin' },
  },
  {
    id: 'saban-15', month: 8, day: 15, eve: true,
    title: t('Şaban\'ın 15. gecesi', 'The night of 15 Sha\'ban'),
    body: t('Berat gecesi; Şii kaynaklarına göre Hz. Mehdi\'nin doğum günü. Dua-i Kumeyl ve Dua-i Ferec okunabilir.', 'A night of forgiveness; the birthday of Imam Mahdi in Shia sources. Dua Kumayl and Dua Faraj can be recited.'),
    open: { kind: 'dua', id: 'dua-kumeyl' },
  },
  {
    id: 'hasan-dogum', month: 9, day: 15,
    title: t('Hz. Hasan\'ın doğum günü', 'Birthday of Imam Hasan'),
    body: t('15 Ramazan, Hz. Hasan\'ın doğum günü. Hayatını ve barış anlaşmasını okuyabilirsin.', '15 Ramadan, the birthday of Imam Hasan. You can read about his life and the peace treaty.'),
    open: { kind: 'imam', id: 'hasan' },
  },
  {
    id: 'ramazan-19', month: 9, day: 19, eve: true,
    title: t('Kadir gecelerinden ilki', 'The first of the Nights of Qadr'),
    body: t('Ramazan\'ın 19. gecesi. Hz. Ali bu sabah yaralandı. Cevşen-i Kebir okunabilir.', 'The 19th night of Ramadan. Imam Ali was struck at this dawn. Jawshan Kabir can be recited.'),
    open: { kind: 'dua', id: 'cevsen-kebir' },
  },
  {
    id: 'ramazan-21-gece', month: 9, day: 21, eve: true,
    title: t('Kadir gecesi: 21. gece', 'Night of Qadr: the 21st'),
    body: t('Ramazan\'ın 21. gecesi. Cevşen-i Kebir okunabilir.', 'The 21st night of Ramadan. Jawshan Kabir can be recited.'),
    open: { kind: 'dua', id: 'cevsen-kebir' },
  },
  {
    id: 'ramazan-21', month: 9, day: 21,
    title: t('Hz. Ali\'nin şehadet günü', 'The day Imam Ali was martyred'),
    body: t('21 Ramazan, Hz. Ali\'nin şehadeti. Hayatını ve hatıralarını okuyabilirsin.', '21 Ramadan, the martyrdom of Imam Ali. You can read his life story.'),
    open: { kind: 'event', id: 'ali-kimdir' },
  },
  {
    id: 'ramazan-23', month: 9, day: 23, eve: true,
    title: t('Kadir gecesi: 23. gece', 'Night of Qadr: the 23rd'),
    body: t('Ramazan\'ın 23. gecesi, Kadir\'in en çok beklenen gecelerinden. Cevşen-i Kebir okunabilir.', 'The 23rd night of Ramadan, one of the most awaited nights of Qadr. Jawshan Kabir can be recited.'),
    open: { kind: 'dua', id: 'cevsen-kebir' },
  },
  {
    id: 'gadir', month: 12, day: 18,
    title: t('Gadir-i Hum günü', 'The Day of Ghadir Khumm'),
    body: t('18 Zilhicce. Hz. Peygamber\'in Gadir-i Hum\'da "Ben kimin mevlâsıysam Ali de onun mevlâsıdır" dediği gün. Olayı okuyalım.', '18 Dhu al-Hijjah, the day of Ghadir Khumm. Let us read the story.'),
    open: { kind: 'event', id: 'gadir' },
  },
  {
    id: 'mubahele', month: 12, day: 24,
    title: t('Mübahele günü', 'The Day of Mubahala'),
    body: t('24 Zilhicce. Mübahele olayını ve Ehl-i Beyt\'in emanetini okuyalım.', '24 Dhu al-Hijjah. Let us read about the Mubahala and the legacy of the Ahl al-Bayt.'),
    open: { kind: 'event', id: 'ehlibeyt' },
  },
];

// --- Hicri takvim (tablolu, "civil" kural) ---
const ISLAMIC_EPOCH = 1948439.5;

export function hijriToJd(y: number, m: number, d: number): number {
  return d + Math.ceil(29.5 * (m - 1)) + (y - 1) * 354 + Math.floor((3 + 11 * y) / 30) + ISLAMIC_EPOCH - 1;
}

function jdToGregorian(jd: number): { y: number; m: number; d: number } {
  // jd yarım sayıdır (gece yarısı); yerel takvim günü olarak UTC bileşenleri kullanılır.
  const dt = new Date(Math.round((jd - 2440587.5) * 86400000));
  return { y: dt.getUTCFullYear(), m: dt.getUTCMonth(), d: dt.getUTCDate() };
}

export function gregorianToHijri(date: Date): { y: number; m: number; d: number } {
  const jd = Math.floor(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) / 86400000 + 2440587.5) + 0.5;
  const y = Math.floor((30 * (jd - ISLAMIC_EPOCH) + 10646) / 10631);
  const m = Math.min(12, Math.ceil((jd - (29 + hijriToJd(y, 1, 1))) / 29.5) + 1);
  const d = jd - hijriToJd(y, m, 1) + 1;
  return { y, m, d };
}

export type Planned = { occasion: Occasion; at: Date; day: Date };

// Verilen andan sonraki özel günler (yaklaşık bir yıl kadar ileriye), tarihe göre sıralı.
export function upcoming(now: Date, horizonDays = 400): Planned[] {
  const out: Planned[] = [];
  const hy = gregorianToHijri(now).y;
  const limit = now.getTime() + horizonDays * 86400000;
  for (const occasion of OCCASIONS) {
    for (let y = hy - 1; y <= hy + 2; y++) {
      const g = jdToGregorian(hijriToJd(y, occasion.month, occasion.day));
      const day = new Date(g.y, g.m, g.d);
      const at = occasion.eve ? new Date(g.y, g.m, g.d - 1, 19, 0) : new Date(g.y, g.m, g.d, 8, 30);
      if (at.getTime() > now.getTime() && at.getTime() <= limit) out.push({ occasion, at, day });
    }
  }
  return out.sort((a, b) => a.at.getTime() - b.at.getTime());
}

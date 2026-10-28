import type { HistEvent } from '../types';
import { ehlibeyt } from './ehlibeyt';
import { penceAba } from './pence-aba';
import { hayber } from './hayber';
import { muaviyeKimdir } from './muaviye-kimdir';
import { muaviyeAli } from './muaviye-ali';
import { muaviyeHasan } from './muaviye-hasan';
import { muaviyeIktidar } from './muaviye-iktidar';
import { menzile } from './menzile';
import { gadir } from './gadir';
import { NOTES } from './notes';
import { raziyye } from './raziyye';
import { sakife } from './sakife';
import { fedek } from './fedek';
import { fatimaVefat } from './fatima-vefat';
import { istihlaf } from './istihlaf';
import { osman } from './osman';
import { cemel } from './cemel';
import { siffin } from './siffin';
import { hasan } from './hasan';
import { kerbela } from './kerbela';
import { imamlar } from './imamlar';
import { aliKimdir } from './ali-kimdir';
import { sebb } from './sebb';
import { mezhepler } from './mezhepler';
import { sadik } from './sadik';
import { muta } from './muta';
import { abdest } from './abdest';
import { ibadetFarklari } from './ibadet-farklari';

const KEYS: Record<string, string> = {
  "pence-aba": "Pence-i Âl-i Aba: örtünün altındaki beş nur",
  "ehlibeyt": "Mübahele: Peygamber yanında yalnızca Ehl-i Beyt'i getirdi",
  "ali-kimdir": "Hz. Ali: Peygamber'in kardeşi, vasisi ve ilk imam",
  "muaviye-kimdir": "Uhud'da Hz. Hamza ve fetihle Müslüman olan aile",
  "muaviye-ali": "Biat etmeyen vali: Sıffin, mushaflar ve Hakem",
  "muaviye-hasan": "Sulhun şartları ve Hz. Hasan'ın zehirlenmesi",
  "muaviye-iktidar": "Hilafetten krallığa: Hucr, Ziyâd ve Yezid'in veliahtlığı",
  "hayber": "Sancak, Allah ve Resulü'nü seven Hz. Ali'ye verildi",
  "menzile": "«Harun Musa'ya nasılsa sen de bana öylesin»",
  "gadir": "Hz. Ali'nin velayet hakkı: «Ben kimin mevlâsıysam Ali de onun mevlâsıdır»",
  "raziyye": "Peygamber'in yazdırmak istediği son vasiyet",
  "sakife": "Cenaze hazırlanırken alınan biat",
  "istihlaf": "Atamayla gelen halifelik, daraltılmış şura",
  "osman": "Üçüncü halife dönemi ve büyüyen huzursuzluk",
  "fedek": "Hz. Fatıma'nın hakkı: Fedek",
  "fatima-vefat": "Eyyâm-ı Fâtımiyye: kapı, Muhsin ve gizli kabir",
  "cemel": "Hz. Ali'ye karşı ilk iç savaş",
  "siffin": "Sıffin, mushaflar ve hakem",
  "sebb": "Minberlerde Hz. Ali'ye sövme",
  "hasan": "Hz. Hasan'ın barışı ve şehadeti",
  "kerbela": "Yezid'e biat yok: eman reddedildi, Kerbela'nın on günü",
  "imamlar": "Kerbela'dan sonra imamet zinciri",
  "mezhepler": "Sakife'den Kerbela'ya mekteplerin doğuşu",
  "sadik": "İmam Sâdık ve ilim mektebi",
  "muta": "Mut'a: Peygamber döneminde vardı",
  "abdest": "Ayakları yıkamak mı, meshetmek mi?",
  "ibadet-farklari": "Ezan, namaz ve secde farkları"
};

export const EVENTS: HistEvent[] = [penceAba, ehlibeyt, aliKimdir, hayber, menzile, gadir, raziyye, sakife, fedek, fatimaVefat, istihlaf, osman, cemel, siffin, sebb, muaviyeKimdir, muaviyeAli, muaviyeHasan, muaviyeIktidar, hasan, kerbela, imamlar, mezhepler, sadik, muta, abdest, ibadetFarklari].map(ev => ({ ...ev, key: { tr: KEYS[ev.id] }, notes: (NOTES[ev.id] ?? []).map(tr => ({ tr })) }));

// Öğretici sayfalar roman gibi sahnelenmez. Kısa not, kaynak ve vurgu yeter.
export const TEACHING_IDS = new Set(['mezhepler', 'sadik', 'muta', 'abdest', 'ibadet-farklari']);
export const isStory = (id: string) => !TEACHING_IDS.has(id);
export function nextStory(id: string): HistEvent | undefined {
  const i = EVENTS.findIndex(e => e.id === id);
  for (let j = i + 1; j < EVENTS.length; j++) if (isStory(EVENTS[j].id)) return EVENTS[j];
  return undefined;
}

// Ana ekranda gösterilen kategoriler (olay kimliklerine göre)
export const CATEGORIES: { id: string; title: string; sub: string; ids: string[] }[] = [
  { id: 'ehlibeyt', title: 'Ehl-i Beyt ve Gadir', sub: 'Pence-i Âl-i Aba, Mübahele, Hz. Ali kimdir, Hayber, Tebük, Gadir Hum', ids: ['pence-aba', 'ehlibeyt', 'ali-kimdir', 'hayber', 'menzile', 'gadir'] },
  { id: 'hilafet', title: 'Peygamber\'den Sonra: Hilafet', sub: 'Kırtas, Sakife, istihlaf ve Şura, Halife Osman dönemi', ids: ['raziyye', 'sakife', 'istihlaf', 'osman'] },
  { id: 'fatima', title: 'Hz. Fatıma', sub: 'Fedek hakkı, Eyyâm-ı Fâtımiyye, gece defin ve gizli kabir', ids: ['fedek', 'fatima-vefat'] },
  { id: 'ali', title: 'Hz. Ali Dönemi', sub: 'Cemel, Sıffin, Hakem, Nehrevan, minberlerde sövme', ids: ['cemel', 'siffin', 'sebb'] },
  { id: 'muaviye', title: 'Muaviye Kimdir?', sub: "Ailesi, Hz. Ali'ye karşı Sıffin, Hz. Hasan ile sulhu ve iktidarı", ids: ['muaviye-kimdir', 'muaviye-ali', 'muaviye-hasan', 'muaviye-iktidar'] },
  { id: 'imamlar', title: 'İmamlar ve Kerbela', sub: 'Hz. Hasan, Hz. Hüseyin, Kerbela, imamlar', ids: ['hasan', 'kerbela', 'imamlar'] },
  { id: 'mezhep', title: 'Mezhepler ve İbadet Farkları', sub: 'Mezheplerin doğuşu, İmam Sâdık, mut\'a, abdest, ezan ve diğer farklar', ids: ['mezhepler', 'sadik', 'muta', 'abdest', 'ibadet-farklari'] },
];

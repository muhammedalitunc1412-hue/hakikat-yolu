import type { HistEvent } from '../types';
import { ehlibeyt } from './ehlibeyt';
import { penceAba } from './pence-aba';
import { hayber } from './hayber';
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
  "ali-kimdir": "Hz. Ali (a.s.): Peygamber'in kardeşi, vasisi ve ilk imam",
  "hayber": "Sancak, Allah ve Resulü'nü seven Hz. Ali'ye verildi",
  "menzile": "«Harun Musa'ya nasılsa sen de bana öylesin»",
  "gadir": "Hz. Ali'nin velayet hakkı: «Ben kimin mevlâsıysam Ali de onun mevlâsıdır»",
  "raziyye": "Peygamber'in yazdırmak istediği son vasiyet",
  "sakife": "Hz. Ali yokken yapılan biat",
  "istihlaf": "Atamayla gelen halifelik, daraltılmış şura",
  "osman": "Üçüncü halife dönemi ve büyüyen huzursuzluk",
  "fedek": "Hz. Fatıma'nın hakkı: Fedek",
  "fatima-vefat": "Hz. Fatıma'nın küskün vedası ve gizli defni",
  "cemel": "Hz. Ali'ye karşı ilk iç savaş",
  "siffin": "Hakem oyunu ve ümmetin bölünmesi",
  "sebb": "Minberlerde Hz. Ali'ye sövme",
  "hasan": "Hz. Hasan'ın barışı ve şehadeti",
  "kerbela": "Hz. Hüseyin: zulme biat etmeyen",
  "imamlar": "Kerbela'dan sonra imamet zinciri",
  "mezhepler": "Siyasetten doğan mezhep ayrılıkları",
  "sadik": "İmam Sâdık ve ilim mektebi",
  "muta": "Mut'a nikâhı: kim yasakladı?",
  "abdest": "Ayakları yıkamak mı, meshetmek mi?",
  "ibadet-farklari": "Ezan, namaz ve secde farkları"
};

export const EVENTS: HistEvent[] = [penceAba, ehlibeyt, aliKimdir, hayber, menzile, gadir, raziyye, sakife, fedek, fatimaVefat, istihlaf, osman, cemel, siffin, sebb, hasan, kerbela, imamlar, mezhepler, sadik, muta, abdest, ibadetFarklari].map(ev => ({ ...ev, key: { tr: KEYS[ev.id] }, notes: (NOTES[ev.id] ?? []).map(tr => ({ tr })) }));

// Ana ekranda gösterilen kategoriler (olay kimliklerine göre)
export const CATEGORIES: { id: string; title: string; sub: string; ids: string[] }[] = [
  { id: 'ehlibeyt', title: 'Ehl-i Beyt ve Gadir', sub: 'Pence-i Âl-i Aba, Mübahele, Hz. Ali kimdir, Hayber, Tebük, Gadir Hum', ids: ['pence-aba', 'ehlibeyt', 'ali-kimdir', 'hayber', 'menzile', 'gadir'] },
  { id: 'hilafet', title: 'Peygamber\'den Sonra: Hilafet', sub: 'Kırtas, Sakife, istihlaf ve Şura, Osman dönemi', ids: ['raziyye', 'sakife', 'istihlaf', 'osman'] },
  { id: 'fatima', title: 'Hz. Fatıma', sub: 'Fedek, evine gelme, vasiyeti ve vefatı', ids: ['fedek', 'fatima-vefat'] },
  { id: 'ali', title: 'Hz. Ali Dönemi', sub: 'Cemel, Sıffin, Hakem, Nehrevan, minberlerde sövme', ids: ['cemel', 'siffin', 'sebb'] },
  { id: 'imamlar', title: 'İmamlar ve Kerbela', sub: 'Hz. Hasan, Hz. Hüseyin, Kerbela, imamlar', ids: ['hasan', 'kerbela', 'imamlar'] },
  { id: 'mezhep', title: 'Mezhepler ve İbadet Farkları', sub: 'Mezheplerin doğuşu, İmam Sâdık, mut\'a, abdest, ezan ve diğer farklar', ids: ['mezhepler', 'sadik', 'muta', 'abdest', 'ibadet-farklari'] },
];

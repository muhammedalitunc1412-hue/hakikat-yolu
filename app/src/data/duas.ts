import type { Dua } from '../types';
import { ayetelKursi } from './duas/ayetel-kursi';
import { cevsenKebir } from './duas/cevsen-kebir';
import { ziyaretAsura } from './duas/ziyaret-asura';
import { duaFaraj } from './duas/dua-faraj';
import { duaKumeyl } from './duas/dua-kumeyl';
import { duaNudbe } from './duas/dua-nudbe';
import { tesbihFatima } from './duas/tesbih-fatima';
import { salavat } from './duas/salavat';

const NOTE = 'Türkçe okunuş ve anlam hazırlama metnidir; yayın öncesinde bir uzman tarafından kontrol edilmelidir.';

// Kaynağı Vikipedi olanlar (Tesbih, Salavat) güvenilir dua sitesinden teyit edilene kadar "kontrol edilmeli" gösterilir.
const base: Dua[] = [
  ayetelKursi, cevsenKebir, ziyaretAsura, duaFaraj, duaKumeyl, duaNudbe,
  { ...tesbihFatima, status: 'check' }, { ...salavat, status: 'check' },
];

export const DUAS: Dua[] = base.map(d => ({ ...d, note: [d.note, NOTE].filter(Boolean).join(' ') }));

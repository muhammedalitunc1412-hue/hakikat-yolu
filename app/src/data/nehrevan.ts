import type { HistEvent } from '../types';

// Hakem sonrası ayrılık, Sıffin metninde de durur. Yeni sayfa numarası uydurulmadı.
export const nehrevan: HistEvent = {
  id: 'nehrevan',
  date: { tr: '38 H (658), Hakem\'den sonra', en: '38 AH (658), after the arbitration' },
  title: { tr: 'Nehrevan', en: 'Nahrawan' },
  hook: { tr: 'Hakemden sonra bir grup Hz. Ali\'nin yanından ayrıldı. Çatışma Nehrevan\'da oldu.', en: 'After the arbitration a group left Ali. The fight was at Nahrawan.' },
  scenes: [
    {
      text: { tr: 'Sıffin\'de mushaflar mızrağa asılınca hakem konuşuldu. **Hz. Ali**\'nin ordusundan bir grup bunu reddetti. "Hüküm yalnız Allah\'ındır" dediler. Bunlara Haricîler denir. Hz. Ali, "Söz haktır, ama onunla batıl kastediliyor" dedi. Bu cümle, Sıffin anlatısında da durur.' },
      image: 'nehrevan-1',
      art: { bg: 'dune-day', props: ['flags'], actors: [{ kind: 'ali', x: 62, label: { tr: 'Hz. Ali' } }, { kind: 'crowd', x: 30, scale: 6 }] },
      by: 'both',
    },
    {
      text: { tr: 'Haricîler Abdullah b. Habbâb\'ı ve hamile karısını öldürdü. **Hz. Ali** orduyu Muaviye seferinden Nehrevan\'a çevirdi. Önce konuşuldu. Sonra çatışıldı. Ölü sayısı bu turda kilitlenmedi. Mızraktaki hile, Hz. Ali\'nin kendi safını da bölmüştü. Nehrevan, Sıffin\'den sonraki adımdır.' },
      image: 'nehrevan-2',
      art: { bg: 'battle', props: ['flags', 'swords'], actors: [{ kind: 'ali', x: 40, label: { tr: 'Hz. Ali' } }, { kind: 'crowd', x: 70, scale: 6 }] },
      by: 'both',
    },
  ],
  sunni: [
    { book: 'Taberî, Târîh', ref: 'Hakem sonrası ve Nehrevan (sayfa bu turda kilitlenmedi)', says: { tr: 'Haricîlerin ayrılışı ve Nehrevan çatışması, Sıffin\'le birlikte anılır. Bu turda yeni sayfa açılmadı.' }, status: 'check' },
  ],
  shia: [
    { book: 'Sıffin metnindeki ortak zemin', ref: 'Nehrevan (sayfa kilitlenmedi)', says: { tr: 'Hz. Ali\'nin "söz haktır, batıl kastediliyor" dediği ve ardından Nehrevan\'da çatışıldığı, uygulamadaki Sıffin sahnesinde de yazılıdır. Ayrı sayfa açılmadı.' }, status: 'check' },
  ],
  questions: [
    { tr: 'Hakem, Hz. Ali\'nin safını nasıl böldü? Nehrevan bu bölünmenin neresinde durur?' },
  ],
  summary: { tr: 'Hakemden sonra Haricîler ayrıldı. Nehrevan\'da çatışıldı. Ayrıntı sayfası bu turda kilitlenmedi. Olay, Sıffin\'in ardından okunur.' },
};

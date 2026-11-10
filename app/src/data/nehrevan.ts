import type { HistEvent } from '../types';

// Hakem sonrası ayrılık, Sıffin metninde de durur. Yeni sayfa numarası uydurulmadı.
export const nehrevan: HistEvent = {
  id: 'nehrevan',
  date: { tr: '38 H (658), Hakem\'den sonra', en: '38 AH (658), after the arbitration' },
  title: { tr: 'Nehrevan', en: 'Nahrawan' },
  hook: { tr: 'Hakemden sonra bir grup Hz. Ali\'nin yanından ayrıldı. Çatışma Nehrevan\'da oldu.', en: 'After the arbitration a group left Ali. The fight was at Nahrawan.' },
  scenes: [
    {
      text: { tr: '**Sıffin**\'de mushaflar mızrağa kalkınca iki taraf hakemi kabul etti. **Hz. Ali**\'nin ordusundan bir grup buna karşı çıktı ve hükmün yalnız Allah\'a ait olduğunu söyledi. Hz. Ali, sözün kendisini doğru buldu, bu anlaşmazlıkta ise yanlış bir amaçla kullanıldığını söyledi. "Söz haktır, ama onunla batıl kastediliyor" dedi. Ayrılanlar sonra **Haricîler** adıyla anıldı.' },
      image: 'nehrevan-1',
      art: { bg: 'dune-day', props: ['flags'], actors: [{ kind: 'ali', x: 62, label: { tr: 'Hz. Ali' } }, { kind: 'crowd', x: 30, scale: 6 }] },
      by: 'both',
    },
    {
      text: { tr: 'Haricîler, **Abdullah b. Habbâb** ile hamile eşini öldürünce **Hz. Ali**, Şam\'a karşı hazırladığı orduyu **Nehrevan**\'a çevirdi. Önce konuştu, uzlaşma olmadı. Sonra iki taraf savaştı. Ölü sayısı rivayetlerde ayrılır, kesin bir sayım yoktur. Yolun başı Sıffin\'deki hakem kararı, sonu bir hamile kadının kanıydı.' },
      image: 'nehrevan-2',
      art: { bg: 'battle', props: ['flags', 'swords'], actors: [{ kind: 'ali', x: 40, label: { tr: 'Hz. Ali' } }, { kind: 'crowd', x: 70, scale: 6 }] },
      by: 'both',
    },
  ],
  sunni: [
    { book: 'Taberî, Târîh', ref: 'Hakem sonrası ve Nehrevan (sayfa numarası ayrıca verilmedi)', says: { tr: 'Haricîlerin ayrılışı ve Nehrevan çatışması, Sıffin\'le birlikte anılır. Bu turda yeni sayfa açılmadı.' }, status: 'check' },
  ],
  shia: [
    { book: 'Sıffin metnindeki ortak zemin', ref: 'Nehrevan (sayfa numarası ayrıca verilmedi)', says: { tr: 'Hz. Ali\'nin "söz haktır, batıl kastediliyor" dediği ve ardından Nehrevan\'da çatışıldığı, uygulamadaki Sıffin sahnesinde de yazılıdır. Ayrı sayfa açılmadı.' }, status: 'check' },
  ],
  questions: [
    { tr: 'Hakem, Hz. Ali\'nin safını nasıl böldü? Nehrevan bu bölünmenin neresinde durur?' },
  ],
  summary: { tr: 'Hakemden sonra Haricîler ayrıldı. Abdullah b. Habbâb ile hamile karısını öldürdüler. Hz. Ali orduyu Nehrevan\'a çevirdi. Olay, Sıffin\'in ardından okunur.' },
};

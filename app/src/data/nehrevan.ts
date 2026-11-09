import type { HistEvent } from '../types';

// Hakem sonrası ayrılık, Sıffin metninde de durur. Yeni sayfa numarası uydurulmadı.
export const nehrevan: HistEvent = {
  id: 'nehrevan',
  date: { tr: '38 H (658), Hakem\'den sonra', en: '38 AH (658), after the arbitration' },
  title: { tr: 'Nehrevan', en: 'Nahrawan' },
  hook: { tr: 'Hakemden sonra bir grup Hz. Ali\'nin yanından ayrıldı. Çatışma Nehrevan\'da oldu.', en: 'After the arbitration a group left Ali. The fight was at Nahrawan.' },
  scenes: [
    {
      text: { tr: '**Sıffin**\'de mushafların mızraklara kaldırılmasının ardından iki taraf hakem görüşmesini kabul etti. Ancak **Hz. Ali**\'nin ordusundan bir grup, bu karara karşı çıkarak hükmün yalnız Allah\'a ait olduğunu söyledi. Hz. Ali, sözün kendisini doğru bulduğunu, fakat bu anlaşmazlıkta yanlış bir amaçla kullanıldığını belirtti. Ordudan ayrılan bu grup daha sonra **Haricîler** adıyla anıldı.' },
      image: 'nehrevan-1',
      art: { bg: 'dune-day', props: ['flags'], actors: [{ kind: 'ali', x: 62, label: { tr: 'Hz. Ali' } }, { kind: 'crowd', x: 30, scale: 6 }] },
      by: 'both',
    },
    {
      text: { tr: 'Haricîler Abdullah b. Habbâb\'ı ve hamile karısını öldürdü. **Hz. Ali** orduyu Muaviye seferinden Nehrevan\'a çevirdi. Önce konuşuldu. Sonra çatışıldı. Ölü sayısı rivayetlere göre değişir. Mızraktaki hile, Hz. Ali\'nin kendi safını da bölmüştü. Nehrevan, Sıffin\'den sonraki adımdır.' },
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

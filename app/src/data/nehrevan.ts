import type { HistEvent } from '../types';

// Hakem sonrası ayrılık, Sıffin metninde de durur. Yeni sayfa numarası uydurulmadı.
export const nehrevan: HistEvent = {
  id: 'nehrevan',
  date: { tr: '38 H (658), Hakem\'den sonra', en: '38 AH (658), after the arbitration' },
  title: { tr: 'Nehrevan', en: 'Nahrawan' },
  hook: { tr: 'Hakemden sonra bir grup Hz. Ali\'nin yanından ayrıldı. Çatışma Nehrevan\'da oldu.', en: 'After the arbitration a group left Ali. The fight was at Nahrawan.' },
  scenes: [
    {
      text: { tr: 'Sıffin\'de mushaflar mızraklara asılıp savaş durdurulunca iki taraf hakemliği kabul etti. Ama **Hz. Ali**\'nin ordusundan bir grup buna şiddetle karşı çıktı. "Hüküm yalnızca Allah\'ındır" diyerek Hz. Ali\'yi suçladılar ve onun yanından ayrıldılar. Oysa savaşın durması için Hz. Ali\'yi en çok zorlayanların arasında onlar da vardı. Hz. Ali, söyledikleri sözün kendisinin doğru olduğunu kabul etti, ama bu sözün yanlış bir amaç için kullanıldığını söyledi: "Söz haktır, ama onunla batıl kastediliyor." Bu ayrılanlar sonradan **Haricîler**, yani ayrılanlar adıyla anıldı. Hz. Ali onlarla kılıçla değil, önce sözle konuşmayı seçti.' },
      image: 'nehrevan-1',
      art: { bg: 'dune-day', props: ['flags'], actors: [{ kind: 'ali', x: 62, label: { tr: 'Hz. Ali' } }, { kind: 'crowd', x: 30, scale: 6 }] },
      by: 'both',
    },
    {
      text: { tr: 'Haricîler zamanla daha da sertleşti ve kendileri gibi düşünmeyenlere kılıç çekmeye başladı. Sonunda **Abdullah b. Habbâb**\'ı ve hamile eşini öldürdüler. Bu haber Hz. Ali\'ye ulaşınca durum değişti. **Hz. Ali**, Şam\'a karşı hazırladığı orduyu **Nehrevan**\'a çevirdi. Savaştan önce onlarla yeniden konuştu ve onları geri dönmeye çağırdı. Ama bir uzlaşma sağlanamadı ve iki taraf arasında savaş başladı. Ölenlerin sayısını rivayetler farklı verir, kesin bir sayım yoktur. Sıffin\'deki mızraklara asılmış mushaflarla başlayan yol, Nehrevan\'da masum bir kadının ve doğmamış bebeğinin kanına varmış, oradan da bir savaşa dönüşmüştü.' },
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

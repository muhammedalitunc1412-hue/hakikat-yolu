import type { HistEvent } from '../types';

// Kaynak: research/01-gadir-raziyye-usame.md (bölüm 2.3), ali-kimdir.ts ve gadir.ts'teki doğrulamalar.
// status 'verified' = metin/numara okundu; 'check' = yayın öncesi birincil kaynaktan kontrol edilmeli.
export const hayber: HistEvent = {
  id: 'hayber',
  date: { tr: 'Hayber Gazvesi, Hicretin 7. yılı (628)', en: 'The battle of Khaybar, 7 AH (628)' },
  title: { tr: 'Hayber ve sancak: "Allah ve Resulü\'nü seven birine vereceğim"', en: 'Khaybar and the banner: "I will give it to one who loves God and His Messenger"' },
  hook: { tr: 'Hayber\'de kale günlerce durdu. Peygamber sancağı kime verdi? Bu söz Hz. Ali\'nin yerini nasıl gösterir?', en: 'When the fortress of Khaybar resisted for days, to whom did the Prophet give the banner?' },
  scenes: [
    {
      by: 'both',
      text: { tr: 'Hicretin 7. yılında Peygamber, Medine\'nin kuzeyindeki Hayber\'e yürüdü. Hayber, Yahudi kabilelerinin yan yana birçok kalesinden oluşan bir vahaydı. Müslüman ordusu kaleleri birer birer kuşattı.' },
      art: { bg: 'dune-day', props: ['sun'], actors: [{ kind: 'crowd', x: 34, scale: 8 }, { kind: 'prophet', x: 68, label: { tr: 'Hz. Peygamber' } }] },
    },
    {
      by: 'both',
      text: { tr: 'Kalelerden biri günlerce alınamadı. Sünni kaynaklarında bir rivayet daha vardır (Hâkim, el-Müstedrek; Ahmed b. Hanbel, Müsned). Önce Ebu Bekir, sonra Ömer sancakla gider. İkisi de fethi tamamlamadan döner. Rivayetin sıhhati ve ayrıntısı ayrıca kontrol edilmelidir.' },
      art: { bg: 'dune-dusk', actors: [{ kind: 'crowd', x: 50, scale: 6 }] },
    },
    {
      by: 'both',
      text: { tr: 'Peygamber şöyle buyurdu: "Yarın sancağı, Allah\'ı ve Resulü\'nü seven, Allah\'ın ve Resulü\'nün de sevdiği bir kişiye vereceğim. Allah onun eliyle fethettirecek." Bu söz Sünni kaynaklarında da geçmektedir (Buhari, Sahih, no. 2942; Müslim, Sahih, no. 2406). O gece insanlar, sancağın kime verileceğini konuşa konuşa sabahladı.' },
      art: { bg: 'night', props: ['stars'], actors: [{ kind: 'prophet', x: 46, label: { tr: 'Hz. Peygamber' } }, { kind: 'crowd', x: 74, scale: 5 }] },
    },
    {
      by: 'both',
      text: { tr: 'Sabah herkes sancağın kendisine verilmesini umdu. Peygamber "Ali nerede?" diye sordu. "Gözleri ağrıyor" dediler. Hz. Ali getirildi. Peygamber mübarek tükürüğünü gözlerine sürdü. Gözleri bir anda iyileşti. Sancağı ona verdi. Bu, Sehl b. Sa\'d rivayetinde Sünni kaynaklarında da geçmektedir (Buhari, Sahih, no. 2942). Peygamber ona şunu da söyledi: Bir kişinin onun eliyle hidayete ermesi, kızıl develerden daha hayırlıdır.' },
      art: { bg: 'dawn', props: ['sun'], actors: [{ kind: 'prophet', x: 42, label: { tr: 'Hz. Peygamber' } }, { kind: 'ali', x: 62, label: { tr: 'Hz. Ali' } }] },
    },
    {
      by: 'both',
      text: { tr: 'Bu sahne Sünni kaynaklarında da geçmektedir (Müslim, Sahih, no. 2406). Seleme b. Ekva anlatır. Hz. Ali kaleye yürür. Hayber\'in ünlü savaşçısı Merhab ile karşılaşır, onu öldürür ve kale fethedilir. Bazı siyer rivayetlerinde Merhab\'ı Muhammed b. Mesleme\'nin öldürdüğü de aktarılır.' },
      art: { bg: 'dune-day', actors: [{ kind: 'ali', x: 40, label: { tr: 'Hz. Ali' } }, { kind: 'crowd', x: 74, scale: 3 }] },
    },
    {
      by: 'shia',
      text: { tr: 'Şii kaynaklarında ve bazı siyer rivayetlerinde Hz. Ali\'nin Hayber kapısını yerinden söküp kalkan gibi kullandığı anlatılır. Bu rivayetin senedi tartışmalıdır. Kapının ağırlığı da kaynaklarda farklı yazılır.' },
      art: { bg: 'dune-day', props: ['sun'], actors: [{ kind: 'ali', x: 50, label: { tr: 'Hz. Ali' } }] },
    },
    {
      by: 'shia',
      text: { tr: 'Şia\'da bu söz, Hz. Ali\'nin "Allah ve Resulü\'nü seven ve onlarca sevilen" kişi olduğunu gösterir. Sancak ona verilmiştir. Bu, onun ayrıcalıklı yerinin delilidir. Bazı rivayetlerde Peygamber "Kaçıcı değil, saldırgandır" da der. Bu cümle, bir gün önce sancakla dönenlerle karşılaştırılarak anlaşılır.' },
      art: { bg: 'night', props: ['stars', 'scroll'], actors: [{ kind: 'ali', x: 50, label: { tr: 'Hz. Ali' } }] },
    },
    {
      by: 'both',
      text: { tr: 'Hayber fethedilince halk, toprağı işleyip ürünün yarısını vermek üzere yerinde kaldı. Fedek halkı savaşmadan anlaştı. Fedek, Peygamber\'in tasarrufuna girdi. Onun vefatından sonra Fedek, Hz. Fatıma ile Halife Ebu Bekir arasında bir tartışma konusu olur.' },
      art: { bg: 'river', props: ['palms'], actors: [{ kind: 'crowd', x: 50, scale: 5 }] },
    },
  ],
  sunni: [
    { book: 'Buhari, Sahih', ref: 'No. 2942 (Cihâd; Sehl b. Sa\'d)', says: { tr: 'Hayber\'de sancak Allah ve Resulü\'nü seven, onlarca sevilen kişiye verilir; Hz. Ali çağrılır, gözleri iyileşir.' }, grade: { tr: 'Müttefekun aleyh (Buhari-Müslim)' }, url: 'https://hadithunlocked.com/bukhari:2942', status: 'verified' },
    { book: 'Buhari, Sahih', ref: 'No. 3009 (Cihâd; numara kontrol edilecek)', says: { tr: 'Hayber sancağı rivayetinin paralel biçimi.' }, grade: { tr: 'Sahih' }, status: 'check' },
    { book: 'Müslim, Sahih', ref: 'No. 2406 (sitede 1807a; Seleme b. Ekva)', says: { tr: 'Aynı olay; Hz. Ali Merhab\'ı öldürür.' }, grade: { tr: 'Sahih' }, url: 'https://hadithunlocked.com/muslim:2406', status: 'verified' },
    { book: 'Hâkim, el-Müstedrek; Ahmed b. Hanbel, Müsned', ref: 'Büreyde rivayeti: sancakla önce Ebu Bekir sonra Ömer gönderilir (numara kontrol edilecek)', says: { tr: 'Önceki iki denemeden sonra sancağın Hz. Ali\'ye verildiği anlatılır.' }, grade: { tr: 'Sıhhati tartışmalı' }, status: 'check' },
  ],
  shia: [
    { book: 'WikiShia, Battle of Khaybar (ikincil)', ref: 'Hayber Savaşı maddesi', says: { tr: 'Hayber\'de sancağın Hz. Ali\'ye verilmesi, kapı rivayeti ve olayın Şii kaynaklardaki anlatımı.' }, url: 'https://en.wikishia.net/view/Battle_of_Khaybar', status: 'check' },
  ],
  disputes: [
    {
      title: { tr: 'Sancak sözü neyi gösterir?' },
      shia: { tr: 'Peygamber Hayber sancağını, Allah\'ı ve Resulü\'nü seven ve onlarca sevilen kişiye vereceğini söyledi; o kişi Hz. Ali oldu. Şia\'da sözün ona özel oluşu, Peygamber katındaki yerini ve liyakatini gösterir; önceki iki denemenin sonuçsuz kalması bu farkı belli eder.' },
      sunni: { tr: 'Peygamber Hayber sancağını, Allah\'ı ve Resulü\'nü seven ve onlarca sevilen kişiye vereceğini söyledi; o kişi Hz. Ali oldu. Sünni okumada bu büyük bir fazilettir; başka sahabiler için de benzer övgüler vardır ve söz hilafet delili sayılmaz.' },
    },
    {
      title: { tr: 'Ebu Bekir ve Ömer rivayeti' },
      shia: { tr: 'Sancağın önce Ebu Bekir\'e, sonra Ömer\'e verildiği bir rivayet Hâkim, el-Müstedrek ve Ahmed b. Hanbel, Müsned\'de anılır. Şia bu rivayeti, sancağın ardından Hz. Ali\'ye verilmesinin yanında önemli bir delil olarak anar.' },
      sunni: { tr: 'Sancağın önce Ebu Bekir\'e, sonra Ömer\'e verildiği bir rivayet Hâkim, el-Müstedrek ve Ahmed b. Hanbel, Müsned\'de anılır. Sünni okumada bu rivayetin sıhhati tartışmalıdır; Buhari ve Müslim\'in rivayetlerinde bu ayrıntı yoktur.' },
    },
    {
      title: { tr: 'Kapı rivayeti' },
      shia: { tr: 'Hz. Ali\'nin Hayber kapısını yerinden söküp kullandığı anlatılır. Şia\'da bu, onun olağanüstü gücünün göstergesidir.' },
      sunni: { tr: 'Hz. Ali\'nin Hayber kapısını yerinden söküp kullandığı anlatılır. Sünni hadisçiler bu rivayetin senedini zayıf sayar; sahih kaynaklarda bulunmaz.' },
    },
  ],
  questions: [
    { tr: 'Peygamber sancağı, Allah\'ı ve Resulü\'nü seven ve onlarca sevilen Hz. Ali\'ye verdi. Bu söz, ona olan sevginizi nasıl besliyor?' },
    { tr: 'Buhari ve Müslim sancağın Hz. Ali\'ye verildiğini anlatır. Bu ortak sahneyi okuyunca içinizde ne uyanıyor?' },
    { tr: '"Allah ve Resulü\'nü seven" sözü Hz. Ali için söylenmiştir. Bu sevgi, onun Peygamber\'in yanındaki yerini size nasıl anlatıyor?' },
  ],
  summary: { tr: 'Hayber\'de Peygamber sancağı, Allah\'ı ve Resulü\'nü seven ve onlarca sevilen kişiye vereceğini söyledi. O kişi Hz. Ali oldu. Bu söz Sünni kaynaklarında da geçer (Buhari, Sahih, no. 2942; Müslim, Sahih, no. 2406). Şia bunu, Hz. Ali\'nin Peygamber\'in yanındaki yerinin delili sayar.' },
};

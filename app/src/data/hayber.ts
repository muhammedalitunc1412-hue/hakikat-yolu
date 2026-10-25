import type { HistEvent } from '../types';

// Kaynak: research/01-gadir-raziyye-usame.md (bölüm 2.3), ali-kimdir.ts ve gadir.ts'teki doğrulamalar.
// status 'verified' = metin/numara okundu; 'check' = yayın öncesi birincil kaynaktan kontrol edilmeli.
export const hayber: HistEvent = {
  id: 'hayber',
  date: { tr: 'Hayber Gazvesi, Hicretin 7. yılı (628)', en: 'The battle of Khaybar, 7 AH (628)' },
  title: { tr: 'Hayber ve sancak: "Allah ve Resulü\'nü seven birine vereceğim"', en: 'Khaybar and the banner: "I will give it to one who loves God and His Messenger"' },
  hook: { tr: 'Hayber\'de kale günlerce alınamayınca Peygamber sancağı kime verdi ve bu söz Hz. Ali hakkında neyi gösterir?', en: 'When the fortress of Khaybar resisted for days, to whom did the Prophet give the banner?' },
  scenes: [
    {
      by: 'both',
      text: { tr: 'Hicretin 7. yılında Peygamber, Medine\'nin kuzeyindeki Hayber\'e yürüdü. Hayber, Yahudi kabilelerinin birbirine yakın birçok kalesinden oluşan bir vahaydı. Müslüman ordusu kaleleri tek tek kuşattı.' },
      art: { bg: 'dune-day', props: ['sun'], actors: [{ kind: 'crowd', x: 34, scale: 8 }, { kind: 'prophet', x: 68, label: { tr: 'Hz. Peygamber' } }] },
    },
    {
      by: 'both',
      text: { tr: 'Kalelerden biri günlerce alınamadı. Bazı Sünni kaynaklarında (Hâkim, Ahmed; Büreyde rivayeti) önce Ebu Bekir\'in, sonra Ömer\'in sancakla gönderildiği, ikisinin de fethi tamamlamadan döndüğü anlatılır. Bu rivayetin sıhhati ve ayrıntıları kaynaklardan ayrıca kontrol edilmelidir.' },
      art: { bg: 'dune-dusk', actors: [{ kind: 'crowd', x: 50, scale: 6 }] },
    },
    {
      by: 'both',
      text: { tr: 'Peygamber şöyle buyurdu: "Yarın sancağı, Allah\'ı ve Resulü\'nü seven, Allah\'ın ve Resulü\'nün de sevdiği ve Allah\'ın kendi eliyle fethettireceği bir kişiye vereceğim." Bu söz Buhari 2942 ve Müslim 2406\'da geçer. O gece insanlar sancağın kime verileceğini konuşarak sabahladı.' },
      art: { bg: 'night', props: ['stars'], actors: [{ kind: 'prophet', x: 46, label: { tr: 'Hz. Peygamber' } }, { kind: 'crowd', x: 74, scale: 5 }] },
    },
    {
      by: 'both',
      text: { tr: 'Sabah herkes sancağın kendisine verilmesini umdu. Peygamber "Ali nerede?" diye sordu; "Gözleri ağrıyor" dediler. Getirildi, Peygamber mübarek tükürüğünü gözlerine sürdü, gözleri bir anda iyileşti ve sancağı ona verdi (Buhari 2942, Sehl b. Sa\'d). Peygamber ona, bir kişinin onun eliyle hidayet bulmasının kızıl develerden hayırlı olduğunu da söyledi.' },
      art: { bg: 'dawn', props: ['sun'], actors: [{ kind: 'prophet', x: 42, label: { tr: 'Hz. Peygamber' } }, { kind: 'ali', x: 62, label: { tr: 'Hz. Ali' } }] },
    },
    {
      by: 'both',
      text: { tr: 'Müslim\'de Seleme b. Ekva\'dan aktarılan rivayette Hz. Ali kaleye yürür, Hayber\'in ünlü savaşçısı Merhab ile karşılaşır ve onu öldürür; kale fethedilir. Bazı siyer rivayetlerinde Merhab\'ı Muhammed b. Mesleme\'nin öldürdüğü de aktarılır.' },
      art: { bg: 'dune-day', actors: [{ kind: 'ali', x: 40, label: { tr: 'Hz. Ali' } }, { kind: 'crowd', x: 74, scale: 3 }] },
    },
    {
      by: 'shia',
      text: { tr: 'Şii kaynaklarında ve bazı siyer rivayetlerinde Hz. Ali\'nin Hayber kalesinin kapısını yerinden söküp kalkan olarak kullandığı anlatılır. Bu rivayetin senedi tartışmalıdır; kaynaklarda kapının ağırlığına dair ayrıntılar farklıdır.' },
      art: { bg: 'dune-day', props: ['sun'], actors: [{ kind: 'ali', x: 50, label: { tr: 'Hz. Ali' } }] },
    },
    {
      by: 'shia',
      text: { tr: 'Şii kaynaklarında bu söz, sancağın Hz. Ali\'ye verilmesiyle onun "Allah ve Resulü\'nü seven ve onlarca sevilen" biri olarak ayrıcalıklı konumunun delili sayılır. Bazı rivayetlerde Peygamber\'in "kaçıcı değil, saldırgan biridir" dediği de aktarılır; bu ifade önceki gün sancakla dönenlerle karşılaştırılarak anlaşılır.' },
      art: { bg: 'night', props: ['stars', 'scroll'], actors: [{ kind: 'ali', x: 50, label: { tr: 'Hz. Ali' } }] },
    },
    {
      by: 'both',
      text: { tr: 'Hayber fethedilince bölgenin halkı, toprağı işleyip ürünün yarısını vermek şartıyla yerlerinde bırakıldı. Fedek halkı ise savaşmadan anlaşmıştı; bu yüzden Fedek Peygamber\'in tasarrufuna girdi. Fedek meselesi, Peygamber\'in vefatından sonra Hz. Fatıma ile Halife Ebu Bekir arasında tartışma konusu olacaktır.' },
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
      shia: { tr: 'Sözün Hz. Ali\'ye özel oluşu, onun Peygamber katındaki eşsiz konumunu ve liyakatini gösterir; önceki iki denemenin sonuçsuz kalması bu farkı belirginleştirir.' },
      sunni: { tr: 'Söz büyük bir faziletle ilgilidir ve Hz. Ali\'nin Allah\'ın ve Resulü\'nün sevgisini kazandığını bildirir; ancak başka sahabeler için de benzer övgü sözleri vardır ve söz hilafet delili sayılmaz.' },
    },
    {
      title: { tr: 'Ebu Bekir ve Ömer rivayeti' },
      shia: { tr: 'Önceki gün sancakla gönderilenlerin dönmesi rivayeti Hâkim ve Ahmed gibi Sünni kaynaklarda da geçtiği için Şii kaynaklarında önemli bir delil olarak anılır.' },
      sunni: { tr: 'Bu rivayetin sıhhati tartışmalıdır; Buhari ve Müslim\'in rivayetlerinde bu ayrıntı bulunmaz.' },
    },
    {
      title: { tr: 'Kapı rivayeti' },
      shia: { tr: 'Hz. Ali\'nin kapıyı söküp kullanması olağanüstü gücünün göstergesidir.' },
      sunni: { tr: 'Rivayetin senedi zayıf sayılmıştır ve sahih kaynaklarda bulunmaz.' },
    },
  ],
  questions: [
    { tr: 'Aynı sancak önce başka sahabilere verilip sonuç alınamadıysa, Peygamber\'in sözü sancağın kime verileceğine dair ne anlatıyor sizce?' },
    { tr: 'Buhari ve Müslim\'de olmayan ama Hâkim ve Ahmed\'de geçen bir rivayeti, olayı anlatırken ne ölçüde kullanmak doğrudur sizce?' },
    { tr: 'Peygamber\'in "Allah ve Resulü\'nü seven" sözü bir fazilet ise, bunun hilafet konusuyla bağlantısı nasıl kurulabilir ya da kurulamaz?' },
  ],
  summary: { tr: 'Hayber sancağı sözü Buhari 2942 ve Müslim 2406 gibi Sünni kaynaklarında, Şii kaynaklarında olduğu gibi geçer. Şii kaynaklarında bu söz, Hz. Ali\'nin Peygamber katındaki eşsiz konumunun delili olarak anlatılır.' },
};

import type { HistEvent } from '../types';

// Kaynak: research/01-gadir-raziyye-usame.md (bölüm 2.3), ali-kimdir.ts ve gadir.ts'teki doğrulamalar.
// status 'verified' = metin/numara okundu; 'check' = yayın öncesi birincil kaynaktan kontrol edilmeli.
export const hayber: HistEvent = {
  id: 'hayber',
  date: { tr: 'Hayber Gazvesi, Hicretin 7. yılı (628)', en: 'The battle of Khaybar, 7 AH (628)' },
  title: { tr: 'Hayber ve sancak: "Allah ve Resulü\'nü seven birine vereceğim"', en: 'Khaybar and the banner: "I will give it to one who loves God and His Messenger"' },
  hook: { tr: 'Kale günlerce direnince Hz. Peygamber (s.a.v.) sancağı kime verdi? «Allah\'ı ve Resulü\'nü seven» sözü Hz. Ali (a.s.) hakkında ne söyler?', en: 'When the fortress of Khaybar resisted for days, to whom did the Prophet give the banner?' },
  scenes: [
    {
      by: 'both',
      text: { tr: 'Hicretin 7. yılında Hz. Peygamber (s.a.v.), Medine\'nin kuzeyindeki Hayber\'e yürüdü. Hayber, hurmalıklar ve birbirine yakın kalelerden oluşan bir Yahudi vahasıydı. Ordu kaleleri bir bir kuşattı.' },
      art: { bg: 'dune-day', props: ['sun'], actors: [{ kind: 'crowd', x: 34, scale: 8 }, { kind: 'prophet', x: 68, label: { tr: 'Hz. Peygamber' } }] },
    },
    {
      by: 'both',
      text: { tr: 'Kalelerden biri günlerce alınamadı. Hâkim ve Ahmed\'de, Büreyde\'den gelen bir rivayete göre önce Ebû Bekir, sonra Ömer sancakla gönderildi; ikisi de fethi tamamlamadan döndü. Buhari ve Müslim\'in metninde bu ayrıntı yoktur. Sıhhati tartışmalıdır. Anlatılırken «rivayete göre» denmesi gerekir.' },
      art: { bg: 'dune-dusk', actors: [{ kind: 'crowd', x: 50, scale: 6 }] },
    },
    {
      by: 'both',
      text: { tr: 'Hz. Peygamber o gece şu müjdeyi verdi: «Yarın sancağı, Allah\'ı ve Resulü\'nü seven, Allah\'ın ve Resulü\'nün de sevdiği bir kişiye vereceğim. Allah fetih onun eliyle verecek.» Söz Buhari 2942 ve Müslim 2406\'da sahihtir. Çadırlarda herkes, sabah sancağın kime uzanacağını konuşarak bekledi.' },
      art: { bg: 'night', props: ['stars'], actors: [{ kind: 'prophet', x: 46, label: { tr: 'Hz. Peygamber' } }, { kind: 'crowd', x: 74, scale: 5 }] },
    },
    {
      by: 'both',
      text: { tr: 'Sabah herkes sancağı umdu. Hz. Peygamber «Ali nerede?» diye sordu. «Gözleri ağrıyor» dediler. Getirdiler. Peygamber mübarek tükürüğünü gözlerine sürdü, ağrı geçti, sancak onun eline verildi. Bunu Sehl b. Sa\'d, Buhari 2942\'de anlatır. Peygamber bir de şunu söyledi: bir kişinin onun eliyle hidayet bulması, kızıl develerden hayırlıdır.' },
      art: { bg: 'dawn', props: ['sun'], actors: [{ kind: 'prophet', x: 42, label: { tr: 'Hz. Peygamber' } }, { kind: 'ali', x: 62, label: { tr: 'Hz. Ali' } }] },
    },
    {
      by: 'both',
      text: { tr: 'Müslim 1807, Seleme b. Ekva\'nın uzun rivayetidir. Hayber bölümünde Hz. Ali kaleye yürür, Merhab ile karşılaşır ve onu öldürür; kale fethedilir. Rivayetin baş tarafı Hudeybiye\'dir. Merhab, aynı hadisin devamındadır. Bazı siyer haberlerinde Merhab\'ı Muhammed b. Mesleme\'nin öldürdüğü de söylenir. Sancağın kime verildiği ise bu ihtilaftan bağımsız, sahihtir.' },
      art: { bg: 'dune-day', actors: [{ kind: 'ali', x: 40, label: { tr: 'Hz. Ali' } }, { kind: 'crowd', x: 74, scale: 3 }] },
    },
    {
      by: 'shia',
      text: { tr: 'Ca\'ferî anlatılarda ve bazı siyer rivayetlerinde Hz. Ali, Hayber kapısını yerinden söküp kalkan gibi kullanır. Bu, sevenlerin dilindeki bir güç alametidir. Senedi tartışmalıdır. Kapının ağırlığı da kaynaktan kaynağa değişir. Fazilet, kapı haberine muhtaç değildir. Sancak sözü zaten sahihtir.' },
      art: { bg: 'dune-day', props: ['sun'], actors: [{ kind: 'ali', x: 50, label: { tr: 'Hz. Ali' } }] },
    },
    {
      by: 'shia',
      text: { tr: 'Ca\'ferî yolda bu söz, Hz. Ali\'nin Allah ve Resulü katındaki yerinin adıdır. Seven ve sevilen odur. Bazı rivayetlerde Peygamber «kaçıcı değil, saldırgandır» da der. Bu cümle, önceki gün sancakla dönenlerle karşılaştırılarak okunur. O rivayetin sıhhati ayrıca tartışılır. Sevgi hükmü ise Buhari ve Müslim\'in metnindedir.' },
      art: { bg: 'night', props: ['stars', 'scroll'], actors: [{ kind: 'ali', x: 50, label: { tr: 'Hz. Ali' } }] },
    },
    {
      by: 'both',
      text: { tr: 'Hayber düşünce halk, toprağı işleyip ürünün yarısını vermek üzere yerinde bırakıldı. Fedek ise savaşmadan anlaşmıştı. Bu yüzden Fedek, Hz. Peygamber\'in tasarrufuna girdi. Vefatından sonra bu hurmalık, kızı Hz. Fatıma ile Ebû Bekir arasında bir hak davasına dönecektir.' },
      art: { bg: 'river', props: ['palms'], actors: [{ kind: 'crowd', x: 50, scale: 5 }] },
    },
  ],
  sunni: [
    { book: 'Buhari, Sahih', ref: 'No. 2942 (Cihâd; Sehl b. Sa\'d)', says: { tr: 'Hayber\'de sancak Allah ve Resulü\'nü seven, onlarca sevilen kişiye verilir; Hz. Ali çağrılır, gözleri iyileşir.' }, grade: { tr: 'Müttefekun aleyh (Buhari-Müslim)' }, url: 'https://hadithunlocked.com/bukhari:2942', status: 'verified' },
    { book: 'Müslim, Sahih', ref: 'No. 2406 (Fezâil; sancak)', says: { tr: 'Sancak Hz. Ali\'ye verilir, gözleri iyileşir.' }, grade: { tr: 'Sahih' }, url: 'https://sunnah.com/muslim:2406', status: 'verified' },
    { book: 'Müslim, Sahih', ref: 'No. 1807 (Cihâd; Seleme b. Ekva\'nın uzun rivayeti)', says: { tr: 'Hayber bölümünde Hz. Ali Merhab\'ı öldürür ve kale fethedilir. 1807a Hudeybiye kısmıdır; Merhab orada değildir. Eski "2406 = 1807a" eşlemesi yanlıştır.' }, grade: { tr: 'Sahih' }, url: 'https://sunnah.com/muslim:1807a', status: 'verified' },
    { book: 'Hâkim, el-Müstedrek; Ahmed b. Hanbel, Müsned', ref: 'Büreyde rivayeti: sancakla önce Ebu Bekir sonra Ömer gönderilir (numara kontrol edilecek)', says: { tr: 'Önceki iki denemeden sonra sancağın Hz. Ali\'ye verildiği anlatılır.' }, grade: { tr: 'Sıhhati tartışmalı' }, status: 'check' },
  ],
  shia: [
    { book: 'Şeyh Müfid, el-İrşâd', ref: 'Hayber bölümü (sayfa baskıya göre değişir)', says: { tr: 'Sancağın Hz. Ali\'ye verilmesi ve Hayber fethi. Kapı rivayeti ayrıca tartışmalıdır.' }, url: 'https://al-islam.org/kitab-al-irshad-book-shaykh-al-mufid', status: 'check' },
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
  summary: { tr: 'Hayber sancağı, Buhari 2942 ve Müslim 2406\'da, Allah\'ı ve Resulü\'nü seven ve onlarca sevilen kişiye, yani Hz. Ali\'ye (a.s.) verilir. Ca\'ferî yolda bu, onun Peygamber katındaki yerinin açık delilidir. Önceki iki deneme ve kapı haberi ise sıhhati tartışılan rivayetlerdir.' },
};

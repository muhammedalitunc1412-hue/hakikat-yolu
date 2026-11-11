import type { HistEvent } from '../types';

// Kaynak: research/01-gadir-raziyye-usame.md (bölüm 2.3), ali-kimdir.ts ve gadir.ts'teki doğrulamalar.
// status 'verified' = metin/numara okundu; 'check' = yayın öncesi birincil kaynaktan kontrol edilmeli.
export const hayber: HistEvent = {
  id: 'hayber',
  date: { tr: 'Hayber Gazvesi, Hicretin 7. yılı (628)', en: 'The battle of Khaybar, 7 AH (628)' },
  title: { tr: 'Hayber ve sancak: "Allah ve Resulü\'nü seven birine vereceğim"', en: 'Khaybar and the banner: "I will give it to one who loves God and His Messenger"' },
  hook: { tr: 'Hayber günlerce durdu. Peygamber sancağı, Allah\'ın ve Resulünün sevdiği Hz. Ali\'ye verdi.', en: 'When the fortress of Khaybar resisted for days, to whom did the Prophet give the banner?' },
  scenes: [
    {
      by: 'both',
      text: { tr: 'Hicretin yedinci yılında **Hz. Peygamber**, ordusuyla Medine\'nin kuzeyindeki **Hayber**\'e yürüdü. Hayber, verimli hurmalıkların ortasına kurulmuş, yan yana sıralanmış sağlam kalelerden oluşan bir yerleşimdi. Kalelerin her biri yüksek duvarlarla ve ağır kapılarla korunuyordu. Müslüman ordusu kaleleri birer birer kuşattı. Günler geçti, çölün sıcağı ve kuşatmanın yorgunluğu askerlerin üzerine çöktü. Bazı kaleler düştü, ama en güçlü olanlar direnmeye devam ediyordu. Bu kuşatma, Peygamber\'in en zor işi kime emanet edeceğini herkese gösterecekti.' },
      art: { bg: 'dune-day', props: ['sun'], actors: [{ kind: 'crowd', x: 34, scale: 8 }, { kind: 'prophet', x: 68, label: { tr: 'Hz. Peygamber' } }] },
    },
    {
      by: 'both',
      text: { tr: 'Kalelerden biri günlerce alınamadı. Anlatıldığına göre önce **Ebu Bekir** sancağı alıp kaleye yürüdü, ama fethi tamamlayamadan geri döndü. Ertesi gün **Ömer** sancağı aldı. O da kalenin kapısını açamadan döndü. Ordugâhta bir sıkıntı başladı. Askerler kalenin duvarlarına bakıyor, bu direnişin nasıl kırılacağını konuşuyordu. **Hz. Ali** ise o günlerde gözlerindeki şiddetli bir ağrı yüzünden çadırında yatıyordu ve savaşa katılamıyordu. Peygamber her şeyi sessizce izliyordu. Sancağı kimin taşıyacağı konusundaki asıl sözünü henüz söylememişti.' },
      art: { bg: 'dune-dusk', actors: [{ kind: 'crowd', x: 50, scale: 6 }] },
    },
    {
      by: 'both',
      text: { tr: 'O akşam Peygamber ashabını topladı ve şöyle dedi: "Yarın sancağı, Allah\'ı ve Resulünü seven, Allah\'ın ve Resulünün de sevdiği birine vereceğim. Allah fethi onun eliyle nasip edecek." Peygamber bir isim söylememişti. O gece çadırlarda bu sözden başka bir şey konuşulmadı. Ashabın her biri sancağın kendisine verilmesini umarak uyudu, çünkü bu söz, sancağı alacak kişinin Allah\'ın ve Resulünün sevgisini kazandığını müjdeliyordu. Bu sözü Buhari ve Müslim de aktarır. Gece boyunca ordugâhta herkes sabahı bekledi.' },
      art: { bg: 'night', props: ['stars'], actors: [{ kind: 'prophet', x: 46, label: { tr: 'Hz. Peygamber' } }, { kind: 'crowd', x: 74, scale: 5 }] },
    },
    {
      by: 'both',
      text: { tr: 'Sabah olunca herkes Peygamber\'in çadırının önünde toplandı. Peygamber kalabalığa baktı ve "Ali nerede?" diye sordu. "Gözleri ağrıyor" dediler. Onu çağırttı. **Hz. Ali** getirildiğinde Peygamber mübarek tükürüğünü onun gözlerine sürdü ve gözler o anda iyileşti. Sonra sancağı Hz. Ali\'nin eline verdi. Hz. Ali sordu: "Ya Resulallah, onlar bizim gibi Müslüman olana kadar mı savaşayım?" Peygamber şöyle cevap verdi: "Acele etmeden git. Önce onları İslam\'a davet et ve Allah\'ın haklarını bildir. Allah\'a yemin olsun ki Allah\'ın senin vasıtanla tek bir kişiyi hidayete erdirmesi, senin için kızıl develere sahip olmaktan daha hayırlıdır."' },
      cites: [{ side: 'sunni', i: 0 }, { side: 'sunni', i: 1 }, { side: 'sunni', i: 2 }],
      art: { bg: 'dawn', props: ['sun'], actors: [{ kind: 'prophet', x: 42, label: { tr: 'Hz. Peygamber' } }, { kind: 'ali', x: 62, label: { tr: 'Hz. Ali' } }] },
    },
    {
      by: 'both',
      text: { tr: 'Hz. Ali sancakla kalenin önüne geldiğinde kapı açıldı ve Hayber\'in en ünlü savaşçısı **Merhab** meydana çıktı. Başında miğfer, üzerinde zırh vardı. Kılıcını sallayarak şiir okudu ve Hayber\'in kendisini tanıdığını, silahının keskin olduğunu söyledi. **Hz. Ali** onun karşısına geçti ve o da şiirle cevap verdi: "Ben, annemin Haydar adını verdiği kişiyim." Haydar, aslan demektir. Ehl-i Beyt rivayetlerine göre Hz. Ali, kılıcı Zülfikar\'ı tek bir kez indirdi ve bu darbe Merhab\'ı yere yıktı. Hayber\'in en güçlü savaşçısının düşmesiyle kaleyi savunanların cesareti kırıldı ve kale kısa süre içinde fethedildi.' },
      cites: [{ side: 'sunni', i: 4 }, { side: 'shia', i: 1 }, { side: 'shia', i: 2 }],
      art: { bg: 'dune-day', actors: [{ kind: 'ali', x: 40, label: { tr: 'Hz. Ali' } }, { kind: 'crowd', x: 74, scale: 3 }] },
    },
    {
      by: 'partial',
      cites: [{ side: 'sunni', i: 5 }],
      text: { tr: 'Ehl-i Beyt rivayetlerinde o günden bir sahne daha anlatılır. Savaşın en kızgın anında **Hz. Ali**, Hayber kalesinin ağır kapısını yerinden söktü ve onu bir kalkan gibi önünde tutarak savaştı. Okları ve darbeleri bu kapıyla karşıladı. Arkadaşları bu gücü yıllarca anlata anlata andı. Rivayetler kapının ağırlığı için kesin bir ölçü vermez, ama hepsi bu gücü Hayber\'in fethine bağlar. Şiiler bu sahneyi anlatırken Peygamber\'in akşam söylediği sözü hatırlar: Allah fethi onun eliyle nasip edecekti.' },
      art: { bg: 'dune-day', props: ['sun'], actors: [{ kind: 'ali', x: 50, label: { tr: 'Hz. Ali' } }] },
    },
    {
      by: 'partial',
      cites: [{ side: 'sunni', i: 0 }, { side: 'sunni', i: 2 }, { side: 'sunni', i: 3 }],
      text: { tr: 'Sancak, Peygamber\'in sözüyle, Allah\'ı ve Resulünü seven ve onlar tarafından sevilen kişiye verilmişti. O kişi **Hz. Ali**\'ydi. Rivayetlere göre Peygamber onu, savaştan kaçmayan ve hep ileri atılan biri olarak da tanıtmıştı. Önceki günlerde kaleyi alamadan dönenler vardı. Savaşta geri dönmek kimse için bir ayıp sayılmazdı. Ama Peygamber\'in, ordunun en zor gününde kimi öne çağırdığı herkesin gözü önündeydi. Bu seçim, Allah\'ın ve Resulünün sevgisine dayanıyordu. Sahabe Sa\'d b. Ebi Vakkas yıllar sonra Hz. Ali\'nin faziletlerini sayarken Hayber sancağını da anacaktı.' },
      art: { bg: 'night', props: ['stars', 'scroll'], actors: [{ kind: 'ali', x: 50, label: { tr: 'Hz. Ali' } }] },
    },
    {
      by: 'both',
      text: { tr: 'Hayber düştükten sonra kalelerin halkı, ürünlerinin yarısını vermek şartıyla topraklarında kalmaya razı oldu. Yakınlardaki **Fedek** halkı ise savaşmadan, kılıç çekilmeden anlaşma yaptı. Savaşsız alınan bu toprak doğrudan Peygamber\'e ait oldu. Peygamber de Fedek\'in hurmalıklarını kızı **Hz. Fatıma**\'ya hibe etti ve ona miras olarak bıraktı. Hibe, karşılıksız bağış demektir. Fedek, Hz. Fatıma\'nın evine helal bir geçim kaynağı oldu. Ancak Peygamber\'in vefatından sonra bu bahçe Hz. Fatıma\'nın elinden alınacak ve Fedek, Ehl-i Beyt\'in gasp edilen hakkının adı olacaktı.' },
      art: { bg: 'river', props: ['palms'], actors: [{ kind: 'crowd', x: 50, scale: 5 }] },
    },
  ],
  sunni: [
    { book: 'Buhari, Sahih', ref: 'No. 2942 (Cihâd; Sehl b. Sa\'d)', says: { tr: 'Hayber\'de sancak Allah ve Resulü\'nü seven kişiye verilir. Hz. Ali\'nin gözleri açılır. Hz. Ali "Onlar bizim gibi olana kadar mı savaşayım?" der. Peygamber yavaş gitmesini, İslam\'a davet etmesini söyler ve bir kişiyi hidayete erdirmenin kızıl develerden hayırlı olduğunu bildirir.' }, grade: { tr: 'Sahih' }, url: 'https://hadithunlocked.com/bukhari:2942', status: 'verified' },
    { book: 'Buhari, Sahih', ref: 'Megâzî, Hayber gazvesi, No. 4210 (aynı metin Cihâd\'da No. 3009)', says: { tr: 'Sancak Hz. Ali\'ye verilir. Hz. Ali "Onlar bizim gibi Müslüman olana kadar mı savaşayım?" diye sorar. Peygamber: yavaşça git, yurtlarına varınca İslam\'a davet et, Allah\'ın haklarını bildir. "Allah\'ın senin vasıtanla bir kişiyi hidayete erdirmesi, kızıl develerden hayırlıdır." Metin No. 3009\'da okundu; Megâzî numarası 4210 olarak anılır.' }, grade: { tr: 'Sahih' }, url: 'https://sunnah.com/bukhari:3009', status: 'verified' },
    { book: 'Müslim, Sahih', ref: 'No. 2406 (Fedâilü\'s-Sahâbe, Hz. Ali\'nin faziletleri; Sehl b. Sa\'d)', says: { tr: 'Aynı sancak diyaloğu. Hz. Ali "Ya Resulallah, onlar bizim gibi olana kadar mı savaşayım?" der. Peygamber yavaşça varıp İslam\'a davet etmesini ve Allah\'ın haklarını bildirmesini söyler. Bir kişiyi hidayete erdirmek, kızıl develere sahip olmaktan hayırlıdır.' }, grade: { tr: 'Sahih' }, url: 'https://sunnah.com/muslim:2406', status: 'verified' },
    { book: 'Hâkim, el-Müstedrek; Ahmed b. Hanbel, Müsned', ref: 'Büreyde rivayeti: sancakla önce Ebu Bekir sonra Ömer gönderilir (numara kontrol edilecek)', says: { tr: 'Önceki iki denemeden sonra sancağın Hz. Ali\'ye verildiği anlatılır.' }, grade: { tr: 'Sıhhati tartışmalı' }, status: 'check' },
    { book: 'Müslim, Sahih', ref: 'No. 1807a (Kitâbü\'l-Cihâd ve\'s-Siyer, Hayber; Seleme b. el-Ekva)', says: { tr: 'Merhab zırhlı olarak "Hayber bilir ki ben Merhab\'ım" diye meydana çıkar. Hz. Ali "Ben annemin Haydar adını verdiği kişiyim" diye karşılık verir, başına vurur ve onu öldürür. Fetih onun eliyle olur. Miğferi tepeden ikiye yarma, yara almama ve cehenneme gitme bu metinde yoktur.' }, grade: { tr: 'Sahih' }, url: 'https://sunnah.com/muslim:1807a', status: 'verified' },
    { book: 'İbn Hişâm, es-Sîre (İbn İshak); Taberî, Târîh', ref: 'Hayber gazvesi, Ebû Râfi\' rivayeti (sayfa kontrol edilecek)', says: { tr: 'Ebû Râfi\': Hz. Ali kalenin yanındaki bir kapıyı alıp kalkan gibi kullandı ve fetih olana kadar elinde tuttu. Sonra sekiz kişi o kapıyı çevirmeye çalıştı ama çeviremedi.' }, grade: { tr: 'Sünni hadis âlimleri kapı rivayetlerinin bazı uzun şekillerini zayıf ya da münker sayar.' }, status: 'check' },
  ],
  shia: [
    { book: 'WikiShia, Battle of Khaybar (ikincil)', ref: 'Hayber Savaşı maddesi', says: { tr: 'Hayber\'de sancağın Hz. Ali\'ye verilmesi, kapı rivayeti ve olayın Şii kaynaklardaki anlatımı.' }, url: 'https://en.wikishia.net/view/Battle_of_Khaybar', status: 'check' },
    { book: 'Şeyh Müfid, el-İrşâd', ref: 'Hayber ve Merhab bölümü (sayfa numarası ayrıca verilmedi)', says: { tr: 'Hz. Ali\'nin Hayber\'de Merhab\'ı öldürmesi. Tek darbede miğfer ve başın ikiye ayrılması ayrı bir sayfaya bağlanmadı. Sahnede Ehl-i Beyt rivayeti diye ayrıldı. Sayfa numarası ayrıca verilmedi.' }, status: 'check' },
    { book: 'Meclisî, Bihârü\'l-Envâr', ref: 'Hayber, Merhab (cilt ve sayfa numarası ayrıca verilmedi)', says: { tr: 'Merhab\'ın recezi, Hz. Ali\'nin Haydar recezi ve Merhab\'ın öldürülmesi. Sayfa numarası ayrıca verilmedi.' }, status: 'check' },
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

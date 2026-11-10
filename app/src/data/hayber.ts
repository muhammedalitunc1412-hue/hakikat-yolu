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
      text: { tr: 'Hicretin 7. yılıydı. Peygamber, Medine\'nin kuzeyindeki **Hayber**\'e yürüdü. Hurma kaleleri yan yanaydı. Her biri bir kapıydı. Her kapı bir direnişti. Ordu onları birer birer kuşattı. Toz günlerce inmedi. Bu sefer bir ganimet yürüyüşü değildi. Peygamber\'in davasını kimin koruduğunu gösterecekti. O kişi **Hz. Ali**\'ydi. Sancak, kalelerin önünde ona verilecekti. Medine geride kaldı. Hayber\'in duvarları önde duruyordu.' },
      art: { bg: 'dune-day', props: ['sun'], actors: [{ kind: 'crowd', x: 34, scale: 8 }, { kind: 'prophet', x: 68, label: { tr: 'Hz. Peygamber' } }] },
    },
    {
      by: 'both',
      text: { tr: 'Kalelerden biri günlerce alınamadı. Anlatılan o ki önce Ebu Bekir sancakla gitti. Fethi tamamlamadan döndü. Sonra Ömer gitti. O da döndü. Kale yerinde duruyordu. Ordugâhta bir sıkıntı vardı. Sancak eldeydi. Kapı açılmamıştı. Peygamber, kaleyi alacak kişiyi henüz söylememişti. Gece o ismin üzerine kapandı. Sabah ismi bekliyordu. Dönüşler bir başarısızlık listesi değildi. Sancağın neden bekletildiğini gösteriyordu.' },
      art: { bg: 'dune-dusk', actors: [{ kind: 'crowd', x: 50, scale: 6 }] },
    },
    {
      by: 'both',
      text: { tr: 'Peygamber o akşam buyurdu. "Yarın sancağı, Allah\'ı ve Resulü\'nü seven, Allah\'ın ve Resulü\'nün de sevdiği bir kişiye vereceğim. Allah onun eliyle fethettirecek." Cümle bir isim söylemiyordu. Yine de çadırlar o gece susmadı. Herkes sancağın kime gideceğini konuştu. Kimisi umdu. Kimisi bekledi. Sevgi burada bir iltifat değildi. Fetihin şartıydı. Gece, sabah verilecek emanetin üstüne kapandı. Askerler uykuya dalamadı.' },
      art: { bg: 'night', props: ['stars'], actors: [{ kind: 'prophet', x: 46, label: { tr: 'Hz. Peygamber' } }, { kind: 'crowd', x: 74, scale: 5 }] },
    },
    {
      by: 'both',
      text: { tr: 'Sabah Hayber\'in önünde herkes sancağa baktı. Peygamber "Hz. Ali nerede?" diye sordu. **Hz. Ali**\'nin gözleri ağrıyordu. Onu getirdiler. Peygamber tükürüğünü gözlerine sürdü. Gözler açıldı. Sancak o anda Hz. Ali\'nin eline geçti. Hz. Ali sordu. "Ya Resulallah, onlar bizim gibi Müslüman olana kadar mı savaşayım?" Peygamber "Yavaşça git" dedi. "Önce onları İslam\'a davet et. Allah\'ın haklarını bildir." Sonra yemin etti. Allah\'ın onun vasıtasıyla tek bir kişiyi hidayete erdirmesi, kızıl develere sahip olmaktan daha hayırlıydı. Savaş, davetten önce gelmiyordu.' },
      cites: [{ side: 'sunni', i: 0 }, { side: 'sunni', i: 1 }, { side: 'sunni', i: 2 }],
      art: { bg: 'dawn', props: ['sun'], actors: [{ kind: 'prophet', x: 42, label: { tr: 'Hz. Peygamber' } }, { kind: 'ali', x: 62, label: { tr: 'Hz. Ali' } }] },
    },
    {
      by: 'both',
      text: { tr: 'Hayber\'in kapısı açılınca **Merhab** meydana çıktı. Miğferi başındaydı. Zırhı üzerindeydi. Kılıcını sallayarak recez okudu. Hayber\'in kendisini tanıdığını ve silahının tam olduğunu söyledi. **Hz. Ali** karşısına geçti. O da recezle cevap verdi. Annesinin ona Haydar dediğini söyledi. Haydar, aslan demektir. Ehl-i Beyt rivayetinde Hz. Ali tek bir yara almadan Zülfikar\'ı indirdi. Zülfikar, tek ve hafif eğri bir kılıçtır. Boyu yaklaşık yüz yirmi santimdir. Rivayete göre tek darbe Merhab\'ı yere yıktı. Kale bu darbeden sonra fethedildi. Kapı, o vuruşun ardından açıldı.' },
      cites: [{ side: 'sunni', i: 4 }, { side: 'shia', i: 1 }, { side: 'shia', i: 2 }],
      art: { bg: 'dune-day', actors: [{ kind: 'ali', x: 40, label: { tr: 'Hz. Ali' } }, { kind: 'crowd', x: 74, scale: 3 }] },
    },
    {
      by: 'shia',
      text: { tr: 'Ehl-i Beyt rivayetinde **Hz. Ali**, Hayber\'in kapısını yerinden söktü. Kapıyı kalkan gibi önünde tuttu. Kapı o gün bir siper oldu. Arkadaşları bu gücü sonradan anlata anlata andı. Rivayet, ölçüyü tek bir sayıya bağlamaz. Gücü Hayber\'in fethine bağlar. Sancağı alan kişi, kalenin önünde yalnız kılıçla değil kapıyla da durmuştu. Bu güç, Peygamber\'in "onun eliyle fethettirecek" dediği elin gücüdür.' },
      art: { bg: 'dune-day', props: ['sun'], actors: [{ kind: 'ali', x: 50, label: { tr: 'Hz. Ali' } }] },
    },
    {
      by: 'shia',
      text: { tr: 'Sancak, Allah\'ı ve Resulünü seven kişiye verilmişti. Allah ve Resulü de onu seviyordu. O kişi **Hz. Ali**\'ydi. Peygamber\'in "kaçıcı değil, saldırgandır" dediği de anlatılır. Bir gün önce fethi tamamlamadan dönenlerin yanında bu söz, Hz. Ali\'nin yerini açıkça gösterdi. Dönmek ayıp değildi. Sancağın kime emanet edildiği ayrı bir şeydi. Peygamber fetih günü kimi öne çağırdığını bu cümleyle söyledi. Çağrı sevgiden ve güvenden gelmişti.' },
      art: { bg: 'night', props: ['stars', 'scroll'], actors: [{ kind: 'ali', x: 50, label: { tr: 'Hz. Ali' } }] },
    },
    {
      by: 'both',
      text: { tr: 'Hayber düşünce halk, ürünün yarısını vermek üzere yerinde kaldı. **Fedek** halkı kılıç çekmeden anlaştı. Toprak Peygamber\'in eline geçti. Peygamber bu hurmalığı kızı **Hz. Fatıma**\'ya hibe etti. Hibe, bağış demektir. Bahçe o gün bir sevinçti. Kızın elinde helal bir geçimdi. Aynı bahçe, Peygamber\'in vefatından sonra Hz. Fatıma\'nın elinden alınacaktı. Fedek gasp edilecekti. Hayber\'de verilen sancağın sahibi, az sonra kızının hakkının da sorulduğunu görecekti.' },
      art: { bg: 'river', props: ['palms'], actors: [{ kind: 'crowd', x: 50, scale: 5 }] },
    },
  ],
  sunni: [
    { book: 'Buhari, Sahih', ref: 'No. 2942 (Cihâd; Sehl b. Sa\'d)', says: { tr: 'Hayber\'de sancak Allah ve Resulü\'nü seven kişiye verilir. Hz. Ali\'nin gözleri açılır. Hz. Ali "Onlar bizim gibi olana kadar mı savaşayım?" der. Peygamber yavaş gitmesini, İslam\'a davet etmesini söyler ve bir kişiyi hidayete erdirmenin kızıl develerden hayırlı olduğunu bildirir.' }, grade: { tr: 'Sahih' }, url: 'https://hadithunlocked.com/bukhari:2942', status: 'verified' },
    { book: 'Buhari, Sahih', ref: 'Megâzî, Hayber gazvesi, No. 4210 (aynı metin Cihâd\'da No. 3009)', says: { tr: 'Sancak Hz. Ali\'ye verilir. Hz. Ali "Onlar bizim gibi Müslüman olana kadar mı savaşayım?" diye sorar. Peygamber: yavaşça git, yurtlarına varınca İslam\'a davet et, Allah\'ın haklarını bildir. "Allah\'ın senin vasıtanla bir kişiyi hidayete erdirmesi, kızıl develerden hayırlıdır." Metin No. 3009\'da okundu; Megâzî numarası 4210 olarak anılır.' }, grade: { tr: 'Sahih' }, url: 'https://sunnah.com/bukhari:3009', status: 'verified' },
    { book: 'Müslim, Sahih', ref: 'No. 2406 (Fedâilü\'s-Sahâbe, Hz. Ali\'nin faziletleri; Sehl b. Sa\'d)', says: { tr: 'Aynı sancak diyaloğu. Hz. Ali "Ya Resulallah, onlar bizim gibi olana kadar mı savaşayım?" der. Peygamber yavaşça varıp İslam\'a davet etmesini ve Allah\'ın haklarını bildirmesini söyler. Bir kişiyi hidayete erdirmek, kızıl develere sahip olmaktan hayırlıdır.' }, grade: { tr: 'Sahih' }, url: 'https://sunnah.com/muslim:2406', status: 'verified' },
    { book: 'Hâkim, el-Müstedrek; Ahmed b. Hanbel, Müsned', ref: 'Büreyde rivayeti: sancakla önce Ebu Bekir sonra Ömer gönderilir (numara kontrol edilecek)', says: { tr: 'Önceki iki denemeden sonra sancağın Hz. Ali\'ye verildiği anlatılır.' }, grade: { tr: 'Sıhhati tartışmalı' }, status: 'check' },
    { book: 'Müslim, Sahih', ref: 'No. 1807a (Kitâbü\'l-Cihâd ve\'s-Siyer, Hayber; Seleme b. el-Ekva)', says: { tr: 'Merhab zırhlı olarak "Hayber bilir ki ben Merhab\'ım" diye meydana çıkar. Hz. Ali "Ben annemin Haydar adını verdiği kişiyim" diye karşılık verir, başına vurur ve onu öldürür. Fetih onun eliyle olur. Miğferi tepeden ikiye yarma, yara almama ve cehenneme gitme bu metinde yoktur.' }, grade: { tr: 'Sahih' }, url: 'https://sunnah.com/muslim:1807a', status: 'verified' },
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

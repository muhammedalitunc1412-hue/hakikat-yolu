import type { HistEvent } from '../types';

// Kapı yangını: Süleym, c. 1, s. 387. Sıkışma ve Muhsin: Bihâr, c. 30, s. 294.
// Çivi ve duvar-kapı arası: Mü'temeru ulemâi Bağdâd, s. 135 (geç kaynak).
// Ortak zemin: Buhari 4240; Şehristânî, el-Milel, c. 1, s. 57.
export const fatimaVefat: HistEvent = {
  id: 'fatima-vefat',
  date: { tr: '11 H (632), Eyyâm-ı Fâtımiyye', en: '11 AH (632), the days of Fatima' },
  title: { tr: 'Eyyâm-ı Fâtımiyye', en: 'The days of Fatima' },
  hook: { tr: 'Fedek elinden alındı. Kapının önünde ateş yemini edildi. O, suskun öldü ve kabri gizlendi.', en: 'Fadak was taken. A fire was sworn at her door. She died without speaking, and her grave was hidden.' },
  scenes: [
    {
      text: { tr: 'Sakife\'den sonra **Hz. Fatıma** ile yeni yönetim arasında **Fedek** konusunda anlaşmazlık yaşandı. Hz. Fatıma, bahçelerin babası tarafından kendisine sağlığında bağışlandığını söyledi. Yönetim ise Peygamber\'in miras bırakmadığına dair rivayeti gerekçe göstererek Fedek\'i ona vermedi. Hz. Fatıma\'nın bağış iddiasıyla yönetimin miras gerekçesi iki ayrı meseleye dayanıyordu. Bu anlaşmazlık, ailenin Hz. Peygamber\'in vefatından sonra yaşadığı ilk gerilimlerden biriydi.' },
      art: { bg: 'city', props: ['sun'], actors: [{ kind: 'fatima', x: 36, label: { tr: 'Hz. Fatıma' } }, { kind: 'crowd', x: 68, scale: 4 }] },
      by: 'both',
      cites: [{ side: 'sunni', i: 0 }, { side: 'shia', i: 3 }],
    },
    {
      text: { tr: 'Sakife\'deki biatin ardından bazı kişiler **Hz. Ali**\'nin evinde toplandı. Rivayetlerde **Ömer**\'in kapıya gelerek içeridekilerden dışarı çıkmalarını istediği ve aksi hâlde evi yakmakla tehdit ettiği aktarılır. İçeride **Hz. Fatıma** bulunduğu kendisine hatırlatıldı. Kapıya gelenlerin bundan sonra ne yaptığı farklı anlatılır. Ehl-i Beyt hafızasında bu kapı, biat baskısının aileye kadar ulaştığı yer olarak anılır.' },
      art: { bg: 'city', props: ['flags'], actors: [{ kind: 'man', x: 28, pose: 'raise', label: { tr: 'Ömer' } }, { kind: 'fatima', x: 68, label: { tr: 'Hz. Fatıma' } }] },
      by: 'shia',
      cites: [{ side: 'sunni', i: 1 }, { side: 'sunni', i: 2 }, { side: 'sunni', i: 4 }, { side: 'shia', i: 6 }],
    },
    {
      text: { tr: 'Ehl-i Beyt\'ten nakledilen anlatılarda evin kapısının zorlandığı ve **Hz. Fatıma**\'nın kapıyla duvar arasında kalarak yaralandığı aktarılır. Bu rivayetlerde Hz. Fatıma\'nın, doğmadan önce **Muhsin** adını taşıyan çocuğunu da bu olayın ardından kaybettiği anlatılır. Kapının nasıl açıldığı ve yaralanmanın ayrıntıları farklı biçimlerde nakledilir. Anlatının merkezinde, Hz. Peygamber\'in vefatından kısa süre sonra ailesinin kendi evinde uğradığı acı vardır.' },
      art: { bg: 'interior', actors: [{ kind: 'fatima', x: 48, pose: 'sit', label: { tr: 'Hz. Fatıma' } }, { kind: 'ali', x: 74, label: { tr: 'Hz. Ali' } }] },
      by: 'shia',
      cites: [{ side: 'shia', i: 6 }, { side: 'shia', i: 7 }, { side: 'shia', i: 8 }, { side: 'shia', i: 9 }, { side: 'shia', i: 0 }, { side: 'sunni', i: 2 }],
    },
    {
      text: { tr: '**Hz. Fatıma**\'nın Fedek konusunda **Ebû Bekir**\'e kırıldığı ve vefatına kadar onunla konuşmadığı aktarılır. Babasının ardından ne kadar yaşadığı konusunda farklı tarihler verilir. Ailenin bu döneme ilişkin hatırasında Fedek\'teki hak arayışı ve evin kapısına kadar gelen baskı yan yana durur.' },
      art: { bg: 'interior', props: ['moon'], actors: [{ kind: 'fatima', x: 50, pose: 'sit', label: { tr: 'Hz. Fatıma' } }] },
      by: 'both',
      cites: [{ side: 'sunni', i: 0 }, { side: 'sunni', i: 5 }],
    },
    {
      text: { tr: '**Hz. Fatıma**\'nın hayatının son günleri, onu ananlar için **Eyyâm-ı Fâtımiyye** adıyla ayrı bir anlam taşır. Rivayetler **Hz. Ali**\'yi onun başucunda, **Hz. Hasan** ile **Hz. Hüseyin**\'i de annelerinin yanında anlatır. Medine\'deki evde yaşanan ayrılık, daha sonra bu ailenin hayatını anlatan pek çok hatıraya eşlik edecekti.' },
      art: { bg: 'interior', actors: [{ kind: 'fatima', x: 40, pose: 'sit', label: { tr: 'Hz. Fatıma' } }, { kind: 'ali', x: 58, label: { tr: 'Hz. Ali' } }, { kind: 'hasan', x: 72, scale: 0.7 }, { kind: 'husayn', x: 82, scale: 0.65 }] },
      by: 'shia',
      cites: [{ side: 'shia', i: 0 }],
    },
    {
      text: { tr: 'Rivayete göre **Hz. Fatıma**, son günlerinde **Hz. Ali**\'ye cenazesinin gece defnedilmesini istediğini bildirdi. Kendisine haksızlık ettiğini düşündüğü kişilerin cenazesine katılmasını istemiyordu. Hz. Ali onun isteğini yerine getirdi. Bu vasiyet, Hz. Fatıma\'nın hayattayken dile getirdiği itirazla birlikte hatırlandı.' },
      art: { bg: 'interior', props: ['scroll'], actors: [{ kind: 'fatima', x: 36, pose: 'sit', label: { tr: 'Hz. Fatıma' } }, { kind: 'ali', x: 66, label: { tr: 'Hz. Ali' } }] },
      by: 'shia',
      cites: [{ side: 'shia', i: 4 }],
    },
    {
      text: { tr: '**Hz. Fatıma** vefat ettiğinde **Hz. Ali** cenazeyi gece hazırladı, namazını kıldırdı ve onu defnetti. Ebû Bekir\'e haber verilmediği aktarılır. Medine\'de sabah olduğunda cenaze çoktan toprağa verilmişti. Ailenin bu vedası, Hz. Fatıma\'nın son isteğini gözeterek gerçekleşti.' },
      art: { bg: 'night', props: ['stars', 'moon'], actors: [{ kind: 'ali', x: 42, label: { tr: 'Hz. Ali' } }, { kind: 'hasan', x: 58, scale: 0.7 }, { kind: 'husayn', x: 68, scale: 0.65 }] },
      by: 'both',
      cites: [{ side: 'sunni', i: 0 }, { side: 'shia', i: 1 }],
    },
    {
      text: { tr: 'Bazı rivayetlerde **Hz. Ali**\'nin, **Hz. Fatıma**\'nın kabrinin bulunmaması için Bakî\'de birden fazla mezar yeri hazırladığı anlatılır. Kabrin nerede olduğuna dair evini, Bakî\'yi ve Hz. Peygamber\'in kabriyle minberi arasındaki bölgeyi işaret eden görüşler vardır. Yeri kesin olarak bilinmeyen kabir, gece defninin en çok hatırlanan ayrıntısı oldu.' },
      art: { bg: 'dawn', props: ['palms'], actors: [{ kind: 'ali', x: 50, pose: 'sit', label: { tr: 'Hz. Ali' } }] },
      by: 'shia',
      cites: [{ side: 'sunni', i: 6 }, { side: 'shia', i: 5 }, { side: 'shia', i: 1 }],
    },
    {
      text: { tr: 'Gece defin sonrasına ilişkin bir rivayette **Ömer**\'in kabrin bulunmasını istediği, **Hz. Ali**\'nin ise buna karşı çıktığı aktarılır. Rivayet, **Ebû Bekir**\'in araya girmesinden sonra mezarların açılmadığını anlatır. Ayrıntıları farklı biçimlerde nakledilen bu sahne, Hz. Ali\'nin Hz. Fatıma\'nın son isteğini koruma kararlılığıyla hatırlanır.' },
      art: { bg: 'dawn', props: ['swords'], actors: [{ kind: 'ali', x: 38, pose: 'raise', label: { tr: 'Hz. Ali' } }, { kind: 'man', x: 68, label: { tr: 'Ömer' } }] },
      by: 'shia',
      cites: [{ side: 'shia', i: 1 }, { side: 'shia', i: 2 }],
    },
  ],
  sunni: [
    { book: 'Buhari, Sahih', ref: 'No. 4240 (Meğâzî, Gazvetü Hayber)', says: { tr: 'Hz. Fatıma, Medine\'deki fey\'i, Fedek\'i ve Hayber humusundan kalanı ister. "Bize miras kalmaz, bıraktığımız sadakadır" denir. O, darılır, vefat edene kadar konuşmaz. Altı ay yaşar. Hz. Ali onu gece defneder, Ebu Bekir\'e haber vermez ve namazını kılar.' }, grade: { tr: 'Sahih' }, url: 'https://hadits.net/ar/bukhari:4240', status: 'verified' },
    { book: 'İbn Ebî Şeybe, el-Musannef', ref: 'Kitâbü\'l-Meğâzî; bir baskıda cilt 8, s. 571 (başka baskıda cilt 13, s. 469 da anılır)', says: { tr: 'Zeyd b. Eslem\'in babasından: Hz. Ali ve Zübeyr, Fatıma\'nın yanında toplanır. Ömer, yine toplanırlarsa evi üzerlerine yaktırmaya yemin ettiğini söyler. Fatıma bunu içeri bildirin ve dağılın der.' }, grade: { tr: 'Metin yaygın aktarılır; sayfa baskıya göre değişir, bu yüzden kontrol edilmeli.' }, status: 'check' },
    { book: 'Şehristânî, el-Milel ve\'n-Nihal', ref: 'cilt 1, s. 57 (en-Nazzâmiyye; eş-Şâmile)', says: { tr: 'Şehristânî, Mu\'tezile\'den Nazzâm\'ın sözünü aktarır: Ömer biat günü Fatıma\'nın karnına vurdu, o cenini düşürdü; "Evi içindekilerle yakın" diye bağırıyordu; evde Hz. Ali, Fatıma, Hz. Hasan ve Hz. Hüseyin vardı. Şehristânî bunu Nazzâm\'ın iftirası diye anar.' }, status: 'verified' },
    { book: 'Belâzurî, Ensâbü\'l-Eşrâf', ref: 'cilt 1, s. 586 (VikîŞia atfı)', says: { tr: 'Evde toplananlara yönelik yakma tehdidi.' }, grade: { tr: 'Sayfa bu çalışmada baskıdan okunmadı.' }, status: 'check' },
    { book: 'İbn Kuteybe\'ye atfedilen el-İmâme ve\'s-Siyâse', ref: 'cilt 1, s. 30-31 (VikîŞia atfı)', says: { tr: 'Odun getirilip "Çıkın, yoksa içindekilerle yakarım" denmesi ve "İçinde Fatıma var" denince "Olsa da" cevabı.' }, grade: { tr: 'Eserin İbn Kuteybe\'ye aidiyeti tartışmalıdır. Sayfa bu çalışmada okunmadı.' }, status: 'check' },
    { book: 'Müslim, Sahih', ref: 'No. 1759 (Cihâd ve siyer)', says: { tr: 'Fedek ve Hayber\'in miras talebi ile "peygamberler miras bırakmaz" sözü. Buhari 4240 ile aynı haberin paralelidir.' }, grade: { tr: 'Numara yaygın atıftır; bu turda sayfa açılmadı.' }, status: 'check' },
    { book: 'İbn Sa\'d, et-Tabakâtü\'l-Kübrâ', ref: 'cilt 8, s. 29 (VikîŞia atfı)', says: { tr: 'Hz. Fatıma gece defnedildi; kabrin yeri kesin bilinmez.' }, grade: { tr: 'Sayfa bu çalışmada okunmadı.' }, status: 'check' },
  ],
  shia: [
    { book: 'Süleym b. Kays, Kitâb', ref: 'cilt 1, s. 151', says: { tr: 'Künfuz\'un Hz. Fatıma\'yı kamçıyla vurduğu ve izinin kolunda kaldığı. Sayfadaki el-İhticâc farkında kapı sövesine itildiği, kaburgasının kırıldığı ve cenini düşürdüğü de yazılır. Kitabın bugünkü nüshasının aidiyeti Şii ricalde de tartışılır.' }, url: 'https://lib.eshia.ir/70632/1/151', status: 'verified' },
    { book: 'Taberî (İmâmî), Delâilü\'l-İmâme', ref: 'cilt 1, s. 137 (Müessesetü\'l-Bi\'se)', says: { tr: 'Gece definden sonra kabir karıştırılmak istenir. Hz. Ali yakayı tutar, yere bırakır ve kabirden taş oynatılırsa kan döküleceğini söyler. Ebu Bekir araya girer, dağılırlar. Bakî\'de birkaç mezar şekli, Ömer\'in kazma emri ve "kanınızla sulanır" sözü bu naklin anlatısındadır. Yeni sayfa numarası verilmedi. Dipnot haberi Bihârü\'l-Envâr 43/171\'e bağlar.' }, url: 'https://lib.eshia.ir/15165/1/137', status: 'verified' },
    { book: 'Meclisî, Bihârü\'l-Envâr', ref: 'cilt 43, s. 171 (Delâil dipnotu)', says: { tr: 'Delâilü\'l-İmâme s. 137\'deki kabir sahnesinin derlendiği yer olarak anılır. Birkaç mezar, Ömer\'in emri, Zülfikar, yakaya yapışma ve Ebu\'l-Hasan diye bırakma sözü bu nakildedir. Bihâr cildi ayrıca açılmadı. Yeni sayfa numarası verilmedi.' }, grade: { tr: 'Sayfa, Delâil baskısının dipnotundan alındı.' }, status: 'check' },
    { book: 'Ahmed b. Ebî Tâhir, Belâğatü\'n-Nisâ', ref: 'Fedek hutbesi (sayfa bu turda açılmadı)', says: { tr: 'Hz. Fatıma\'nın mescidde Fedek için söylediği hutbe bu eserde aktarılır.' }, status: 'check' },
    { book: 'İbn Şehraşûb, Menâkıb Âl-i Ebî Tâlib', ref: 'cilt 3, s. 137 (VikîŞia atfı)', says: { tr: 'Haksızlık edenlerin cenazede bulunmaması ve gizli defin vasiyeti.' }, grade: { tr: 'Sayfa bu çalışmada okunmadı.' }, status: 'check' },
    { book: 'Şeyh Sadûk, Men lâ yahduruhu\'l-fakîh', ref: 'kabir ihtimalleri (ev, Bakî, kabr ile minber arası)', says: { tr: 'Kabrin yeri hakkında üç görüş. Kesin yer bildirilmez.' }, grade: { tr: 'Sayfa bu turda açılmadı.' }, status: 'check' },
    { book: 'Süleym b. Kays, Kitâb', ref: 'cilt 1, s. 387', says: { tr: 'Ömer ateş istedi, kapıya verdi ve kapıyı yaktı, sonra kapıyı itti. Hz. Fatıma karşıladı. Kınındaki kılıç böğrüne, kamçı koluna vuruldu. "Olsa da" sözü el-İmâme ve\'s-Siyâse naklindedir. Yeni sayfa numarası verilmedi.' }, url: 'https://lib.eshia.ir/70632/1/387', status: 'verified' },
    { book: 'Tabersî, el-İhticâc', ref: 'cilt 1, s. 212 (Ca\'fer Murtazâ aktarımı)', says: { tr: 'Künfuz kamçıladı, Hz. Fatıma kapı sövesine sıkıştırıldı, itildi, kaburgası kırıldı ve ceninini düşürdü.' }, grade: { tr: 'Sayfa bu turda kitabın kendi baskısından açılmadı; cümle bu sayfayla aktarılır.' }, status: 'check' },
    { book: 'Meclisî, Bihârü\'l-Envâr', ref: 'cilt 30, s. 294 (Müessesetü\'l-Vefâ)', says: { tr: 'Kapı tekmelenir. Hz. Fatıma gövdesini kapıya dayamıştır. Sonra duvara yaslanır, karnındakinin öldüğünü söyler. Düşen çocuğa Hz. Ali Muhsin adını verir.' }, url: 'https://lib.eshia.ir/11008/30/294', status: 'verified' },
    { book: 'Mü\'temeru ulemâi Bağdâd (Şiblüddevle Mukâtil b. Atıyye\'ye nispet)', ref: 's. 135', says: { tr: 'Geç bir kitap. Ömer\'in Hz. Fatıma\'yı duvar ile kapı arasında sıktığı, cenini düşürdüğü ve kapı çivisinin göğsüne battığı burada anlatılır.' }, grade: { tr: 'Geç kaynak. Sayfa, Ca\'fer Murtazâ el-Âmilî\'nin Maa\'sâtü\'z-Zehrâ aktarımıyladır.' }, status: 'check' },
  ],
  disputes: [
    {
      title: { tr: 'Ateş yemini ve kapı' },
      sunni: { tr: 'Evi yakma yemini İbn Ebî Şeybe\'de ve başka tarih kitaplarında anlatılır. Şehristânî, Nazzâm\'ın vurma ve düşük sözünü de kaydeder; bunu Nazzâm\'ın iftirası sayar.' },
      shia: { tr: 'Yakma yemini iki tarafta da yazılıdır. Kapının yakılması Süleym cilt 1, s. 387\'dedir. Kapı ile duvar arasında sıkışma, çivi ve Muhsin, Bihâr cilt 30, s. 294 ve Mü\'temeru ulemâi Bağdâd s. 135 ile anılır. Bunlar Ehl-i Beyt rivayetidir.' },
    },
    {
      title: { tr: 'Suskunluk ve gece defin' },
      sunni: { tr: 'Buhari 4240, vefata kadar konuşmadığını ve Hz. Ali\'nin onu gece defnedip Ebu Bekir\'e haber vermediğini yazar.' },
      shia: { tr: 'Aynı cümle Buhari\'de de durur. Şii okumada bu, vasiyet ve protestodur. Kabri bu yüzden gizlenmiştir.' },
    },
  ],
  questions: [
    { tr: 'Peygamber "Fatıma benden bir parçadır" demişti. Onun suskunluğu, Ehl-i Beyt sevgisini nerede tutar?' },
    { tr: 'Kapının önündeki yemin iki kitabın tarihinde de yazılı. O eşiği düşünürken sabır size ne söyler?' },
    { tr: 'Kabri bilinmiyor. Aranan ve bulunamayan bir kabir, protestoyu nasıl diri tutar?' },
    { tr: 'Hz. Ali kabri korurken kendi hakkını yere bırakmıştı. Bu sabır, onun faziletini size nasıl anlatır?' },
  ],
  summary: { tr: 'Fedek reddedildi. Ehl-i Beyt rivayetinde Ömer kapıyı yaktı ve tekmeledi. Hz. Fatıma kapı ile duvar arasında kaldı, kaburgası kırıldı ve Muhsin düştü. Gece defnedildi. Sabah Ömer mezarları kazdırmak istedi. Hz. Ali Zülfikar ile durdurdu. Kabri bugün de gizlidir.' },
};

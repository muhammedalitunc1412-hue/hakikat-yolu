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
      text: { tr: 'Medine\'de, Sakife\'nin ardından **Fedek** acısı geldi. İki söz vardı. Hibe, bağış demektir. **Hz. Fatıma**, Peygamber\'in bahçeyi kendisine hibe ettiğini söyledi. Karşı söz mirastı. Miras, ölenin malından varise düşen paydır. Karşılık kısaydı: "Biz peygamberler miras bırakmayız." Bahçe ona verilmedi. Hak yine onundu. Bu acı mescitte bitmedi. Ardından evinin kapısında sürdü. Eyyâm, vefattan önceki bu acı günlerin adıdır.' },
      art: { bg: 'city', props: ['sun'], actors: [{ kind: 'fatima', x: 36, label: { tr: 'Hz. Fatıma' } }, { kind: 'crowd', x: 68, scale: 4 }] },
      by: 'both',
      cites: [{ side: 'sunni', i: 0 }, { side: 'shia', i: 3 }],
    },
    {
      text: { tr: 'Medine\'de, biat günü, bir grup **Hz. Ali**\'nin evinde toplanmıştı. Kapıya **Ömer** geldi. Odun ve ateş getirtmişti. "Çıkın, yoksa evi içindekilerle yakarım" dedi. "İçeride Fatıma var" denince **Ömer** "Olsa da!" dedi. Ehl-i Beyt rivayetinde kapıyı yakanlardan biri oydu. Ev, **Hz. Ali**\'nin eviydi. Peygamber Gadir\'de onun elini tutmuştu. Aynı kapı ateşle tehdit edildi. Rivayet, ateşi kapının eşiğine kadar getirir.' },
      art: { bg: 'city', props: ['flags'], actors: [{ kind: 'man', x: 28, pose: 'raise', label: { tr: 'Ömer' } }, { kind: 'fatima', x: 68, label: { tr: 'Hz. Fatıma' } }] },
      by: 'shia',
      cites: [{ side: 'sunni', i: 1 }, { side: 'sunni', i: 2 }, { side: 'sunni', i: 4 }, { side: 'shia', i: 6 }],
    },
    {
      text: { tr: 'Ehl-i Beyt rivayetine göre kapıyı tekmeleyip zorla iterek açan **Ömer**\'di. Kapı yandı. **Hz. Fatıma** kapı ile duvar arasında kaldı. Kaburgası kırıldı. Göğsüne çivi battı. Karnındaki **Muhsin** düştü. "Babacığım" diye seslendi. **Hz. Ali** yetişti. Onu tuttu. Sabretti. Bu, **Hz. Ali**\'nin velayetinin bulunduğu evin kapısında oldu. Rivayetlere göre çivi, o kapının tahtasına saplandı.' },
      art: { bg: 'interior', actors: [{ kind: 'fatima', x: 48, pose: 'sit', label: { tr: 'Hz. Fatıma' } }, { kind: 'ali', x: 74, label: { tr: 'Hz. Ali' } }] },
      by: 'shia',
      cites: [{ side: 'shia', i: 6 }, { side: 'shia', i: 7 }, { side: 'shia', i: 8 }, { side: 'shia', i: 9 }, { side: 'shia', i: 0 }, { side: 'sunni', i: 2 }],
    },
    {
      text: { tr: 'Bundan sonra Medine\'de **Hz. Fatıma**, Halife Ebu Bekir\'le konuşmadı. Vefatına kadar sustu. Ona küstü. Peygamber\'den sonra altı ay yaşadı. Fedek elinden alınmıştı. Kapı kırılmıştı. Suskunluğu bu iki acıdan geldi. Fâtıma, hakkını ve evinin acısını birden taşıdı.' },
      art: { bg: 'interior', props: ['moon'], actors: [{ kind: 'fatima', x: 50, pose: 'sit', label: { tr: 'Hz. Fatıma' } }] },
      by: 'both',
      cites: [{ side: 'sunni', i: 0 }, { side: 'sunni', i: 5 }],
    },
    {
      text: { tr: 'Medine\'deki evde **Hz. Fatıma**\'nın hastalık günleri uzadı. Bu günlere **Eyyâm-ı Fâtımiyye** denir. **Hz. Ali** başucundan ayrılmadı. Küçük **Hz. Hasan** ve **Hz. Hüseyin** annelerinin yanında durdu. **Hz. Fatıma** acısını evin içinde tuttu. **Hz. Hasan** ile **Hz. Hüseyin**\'in ileride taşıyacağı matem, bu yatakta başladı. İki torun, annelerinin yatağında ağladı.' },
      art: { bg: 'interior', actors: [{ kind: 'fatima', x: 40, pose: 'sit', label: { tr: 'Hz. Fatıma' } }, { kind: 'ali', x: 58, label: { tr: 'Hz. Ali' } }, { kind: 'hasan', x: 72, scale: 0.7 }, { kind: 'husayn', x: 82, scale: 0.65 }] },
      by: 'shia',
      cites: [{ side: 'shia', i: 0 }],
    },
    {
      text: { tr: 'Son nefesinden önce, Medine\'deki evde **Hz. Fatıma**, **Hz. Ali**\'ye vasiyet etti. Kendisine haksızlık edenler cenazesine gelmesin. Namazına durmasın. Gece defnedilsin. Kabri bilinmesin. Bu vasiyetle protestosunu kabre kadar sürdürdü. **Hz. Ali** bu vasiyeti bozmadı. Gece defin, bu vasiyetin sonucudur.' },
      art: { bg: 'interior', props: ['scroll'], actors: [{ kind: 'fatima', x: 36, pose: 'sit', label: { tr: 'Hz. Fatıma' } }, { kind: 'ali', x: 66, label: { tr: 'Hz. Ali' } }] },
      by: 'shia',
      cites: [{ side: 'shia', i: 4 }],
    },
    {
      text: { tr: '**Hz. Fatıma** vefat edince **Hz. Ali** onu Medine\'de gece yıkadı. Namazını kendisi kıldı. Onu karanlıkta defnetti. Halife Ebu Bekir\'e haber vermedi. Yanında evin ehli ve birkaç yakın vardı. Sabah olduğunda cenaze toprağa verilmişti. Sakife\'de bu ev yalnız kalmıştı. Vedada da kalabalık yoktu. Rivayetlere göre Ebu Bekir o namazda yoktu.' },
      art: { bg: 'night', props: ['stars', 'moon'], actors: [{ kind: 'ali', x: 42, label: { tr: 'Hz. Ali' } }, { kind: 'hasan', x: 58, scale: 0.7 }, { kind: 'husayn', x: 68, scale: 0.65 }] },
      by: 'both',
      cites: [{ side: 'sunni', i: 0 }, { side: 'shia', i: 1 }],
    },
    {
      text: { tr: 'Gece defin bitince **Hz. Ali** Bakî\'ye geldi. **Hz. Fatıma**\'nın mezarının yeri belli olmasın diye birkaç yeni mezar şekli yaptı. Sabah Medine halkı bu yeni mezarları gördü. Ev, Bakî ve Peygamber\'in kabri ile minberi arası da ihtimal diye anılır. Kesin yer yoktur. Ziyaretçi, bugün de o kabir için tek bir yer gösteremez.' },
      art: { bg: 'dawn', props: ['palms'], actors: [{ kind: 'ali', x: 50, pose: 'sit', label: { tr: 'Hz. Ali' } }] },
      by: 'shia',
      cites: [{ side: 'sunni', i: 6 }, { side: 'shia', i: 5 }, { side: 'shia', i: 1 }],
    },
    {
      text: { tr: 'Sabah **Ömer** ve Ebu Bekir Bakî\'ye geldi. **Ömer** emretti: "Mezarları kazın. Fatıma\'yı bulup namazını kılalım." Haber **Hz. Ali**\'ye ulaştı. Öfkeyle geldi. Elinde Zülfikar vardı. "Onun mezarından bir taş bile oynatırsanız bu topraklar sizin kanınızla sulanır" dedi. **Ömer** karşılık verince **Hz. Ali** onun yakasına yapıştı. Onu sarsıp yere vurdu. Ebu Bekir araya girdi: "Ey Ebu\'l-Hasan, Resûlullah\'ın hakkı için onu bırak. Hoşuna gitmeyen hiçbir şey yapmayacağız." **Hz. Ali** bırakınca mezarı aramaktan vazgeçtiler. **Hz. Fatıma**\'nın mezarı bu yüzden bugün hâlâ gizlidir. Gizli kabir, o vasiyetin bugüne kalan izidir.' },
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

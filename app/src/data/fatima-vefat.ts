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
      text: { tr: 'Sakife\'deki biatın ardından Peygamber\'in kızı için zor günler başladı. **Hz. Fatıma**, babasının kendisine hibe ettiği ve miras olarak bıraktığı **Fedek** bahçesini geri istedi. Hibe, bir malı karşılıksız bağışlamak demektir. Karşısındakiler ise meseleyi mirasa çevirdi ve "Biz peygamberler miras bırakmayız" sözünü öne sürdü. Miras, ölen birinin malından varislerine düşen paydır. Bahçe ona verilmedi. Ama Hz. Fatıma\'nın acısı yalnızca bir bahçeyle sınırlı kalmadı. Kısa süre sonra bu acı, kendi evinin kapısına kadar geldi. Peygamber\'in vefatından Hz. Fatıma\'nın vefatına kadar geçen bu acı günlere Şiiler **Eyyâm-ı Fâtımiyye**, yani Fatıma günleri der ve her yıl yasla anar.' },
      art: { bg: 'city', props: ['sun'], actors: [{ kind: 'fatima', x: 36, label: { tr: 'Hz. Fatıma' } }, { kind: 'crowd', x: 68, scale: 4 }] },
      by: 'both',
      cites: [{ side: 'sunni', i: 0 }, { side: 'shia', i: 3 }],
    },
    {
      text: { tr: 'Biat günlerinde, Sakife\'deki seçimi kabul etmeyen bir grup **Hz. Ali**\'nin evinde toplanmıştı. **Ömer** yanındakilerle birlikte o evin kapısına geldi. Odun ve ateş getirtmişti. Kapının önünde yüksek sesle bağırdı: "Çıkın, yoksa evi içindekilerle birlikte yakarım!" Birisi ona, "Ama içeride Fatıma var" dedi. Ömer\'in cevabı kısa oldu: "Olsa da!" Bu ev, Peygamber\'in kızının ve Gadir\'de eli kaldırılan Hz. Ali\'nin eviydi. İçeride Hz. Hasan ile Hz. Hüseyin de vardı. Şimdi bu evin kapısının önüne odunlar yığılıyor ve içindekiler ateşle tehdit ediliyordu.' },
      art: { bg: 'city', props: ['flags'], actors: [{ kind: 'man', x: 28, pose: 'raise', label: { tr: 'Ömer' } }, { kind: 'fatima', x: 68, label: { tr: 'Hz. Fatıma' } }] },
      by: 'shia',
      cites: [{ side: 'sunni', i: 1 }, { side: 'sunni', i: 2 }, { side: 'sunni', i: 4 }, { side: 'shia', i: 6 }],
    },
    {
      text: { tr: 'Ehl-i Beyt rivayetlerine göre bu tehdit sözde kalmadı. Kapı ateşe verildi ve **Ömer** onu zorla iterek açtı. Kapının arkasında duran **Hz. Fatıma**, kapı ile duvarın arasında sıkıştı. Rivayetlere göre kapının çivisi göğsüne saplandı ve kaburgası kırıldı. O sırada karnında taşıdığı **Muhsin** adındaki bebeğini kaybetti. Acıyla "Babacığım!" diye seslendi. **Hz. Ali** koşup eşini yerden kaldırdı. Öfkesine hâkim oldu ve ümmet bölünmesin diye sabretti. Dünyaya gelemeyen Muhsin, Şiilerin yüreğinde Ehl-i Beyt\'in ilk şehit çocuğu olarak yaşar. Bu yaralar, Hz. Fatıma\'nın kısa ömrünün geri kalanını bir hastalık yatağına çevirdi.' },
      art: { bg: 'interior', actors: [{ kind: 'fatima', x: 48, pose: 'sit', label: { tr: 'Hz. Fatıma' } }, { kind: 'ali', x: 74, label: { tr: 'Hz. Ali' } }] },
      by: 'shia',
      cites: [{ side: 'shia', i: 6 }, { side: 'shia', i: 7 }, { side: 'shia', i: 8 }, { side: 'shia', i: 9 }, { side: 'shia', i: 0 }, { side: 'sunni', i: 2 }],
    },
    {
      text: { tr: 'Bu olaylardan sonra **Hz. Fatıma**, **Halife Ebu Bekir** ile bir daha konuşmadı. Ona küstü ve vefatına kadar bu küskünlüğü sürdürdü. Bu bilgi Sünni kaynaklarda da yer alır. Peygamber\'den sonra yalnızca altı ay yaşadı. O altı ay içinde babasının kendisine bıraktığı bahçe elinden alınmış, kendi evinin kapısı kırılmıştı. Biri onun hakkına, diğeri onun canına dokunmuştu. Peygamber, "Fatıma benden bir parçadır, onu kızdıran beni kızdırmış olur" demişti. Hz. Fatıma\'nın bu kırgınlığı, Şiilere göre Peygamber\'in de kırgınlığıydı. Peygamber\'in tek kızı, kendisini incitenlere son nefesine kadar selam vermedi.' },
      art: { bg: 'interior', props: ['moon'], actors: [{ kind: 'fatima', x: 50, pose: 'sit', label: { tr: 'Hz. Fatıma' } }] },
      by: 'both',
      cites: [{ side: 'sunni', i: 0 }, { side: 'sunni', i: 5 }],
    },
    {
      text: { tr: 'Medine\'deki küçük evde **Hz. Fatıma**\'nın hastalığı günden güne ağırlaştı. Yaraları iyileşmiyordu ve yatağından kalkmakta zorlanıyordu. **Hz. Ali** onun başucundan ayrılmadı. Eşinin acısını kimseye belli etmeden yüreğinde taşıdı. Küçük **Hz. Hasan** ve **Hz. Hüseyin** annelerinin yatağının yanında oturuyor, onun nefes alışını dinliyordu. Hz. Fatıma acısını sokağa taşımadı, şikâyetini Allah\'a bıraktı. Bu çocuklar, ileride biri zehirlenerek, öbürü Kerbelâ\'da susuz bırakılarak şehit edilecekti. Annelerinin yatağının başında öğrendikleri sabır, bütün hayatları boyunca onlara yol gösterdi.' },
      art: { bg: 'interior', actors: [{ kind: 'fatima', x: 40, pose: 'sit', label: { tr: 'Hz. Fatıma' } }, { kind: 'ali', x: 58, label: { tr: 'Hz. Ali' } }, { kind: 'hasan', x: 72, scale: 0.7 }, { kind: 'husayn', x: 82, scale: 0.65 }] },
      by: 'shia',
      cites: [{ side: 'shia', i: 0 }],
    },
    {
      text: { tr: 'Vefatından kısa süre önce **Hz. Fatıma**, eşi **Hz. Ali**\'yi yanına çağırdı ve ona vasiyetini söyledi. Kendisine haksızlık edenlerin cenazesine katılmasını istemiyordu. Onların namazına durmasını da istemiyordu. Gece yıkanmasını ve gece defnedilmesini, kabrinin de kimse tarafından bilinmemesini istedi. Bu vasiyet bir korkudan değil, bir duruştan doğuyordu. Peygamber\'in kızı, kendisine yapılan haksızlığı ümmete en açık şekilde göstermek istiyordu. Kabrini gizlemek, bu haksızlığa karşı söylenmiş son ve en uzun süren sözüydü. Hz. Ali gözyaşları içinde vasiyetin her kelimesini dinledi ve yerine getireceğine söz verdi.' },
      art: { bg: 'interior', props: ['scroll'], actors: [{ kind: 'fatima', x: 36, pose: 'sit', label: { tr: 'Hz. Fatıma' } }, { kind: 'ali', x: 66, label: { tr: 'Hz. Ali' } }] },
      by: 'shia',
      cites: [{ side: 'shia', i: 4 }],
    },
    {
      text: { tr: '**Hz. Fatıma** vefat ettiğinde **Hz. Ali**, verdiği sözü tuttu. Eşini gece, karanlıkta yıkadı. Ehl-i Beyt\'ten ve en yakın dostlardan birkaç kişiyle namazını kıldırdı. Ardından onu Medine\'nin karanlığında, kimsenin bilmediği bir yere defnetti. Halife Ebu Bekir\'e haber verilmedi ve o namazda bulunmadı. Peygamber\'in tek kızının cenazesi, kalabalıklar olmadan, bir avuç insanla uğurlandı. Hz. Hasan ile Hz. Hüseyin, babalarının yanında annelerinin toprağa verilişini izledi. Sabah olduğunda Medine halkı, Peygamber\'in kızının çoktan toprağa verildiğini öğrendi.' },
      art: { bg: 'night', props: ['stars', 'moon'], actors: [{ kind: 'ali', x: 42, label: { tr: 'Hz. Ali' } }, { kind: 'hasan', x: 58, scale: 0.7 }, { kind: 'husayn', x: 68, scale: 0.65 }] },
      by: 'both',
      cites: [{ side: 'sunni', i: 0 }, { side: 'shia', i: 1 }],
    },
    {
      text: { tr: 'Defin bittikten sonra **Hz. Ali**, kabrin yerinin anlaşılmaması için yakınlarda birkaç yeni mezar şekli yaptı. Sabah Medine halkı bu yeni toprak yığınlarını gördü, ama hangisinin **Hz. Fatıma**\'nın kabri olduğunu ayırt edemedi. Bugün de kabrin yeri kesin olarak bilinmez. Bazı rivayetler onun kendi evinde, bazıları Bakî mezarlığında, bazıları da Peygamber\'in kabri ile minberi arasında defnedildiğini söyler. Peygamber\'in kabrine her yıl milyonlarca insan gelir. Ama onun kızının kabri için kimse tek bir taş gösteremez. Şiiler bu belirsizliği, Hz. Fatıma\'nın vasiyetinin yüzyıllardır yerine getirilmesi olarak görür.' },
      art: { bg: 'dawn', props: ['palms'], actors: [{ kind: 'ali', x: 50, pose: 'sit', label: { tr: 'Hz. Ali' } }] },
      by: 'shia',
      cites: [{ side: 'sunni', i: 6 }, { side: 'shia', i: 5 }, { side: 'shia', i: 1 }],
    },
    {
      text: { tr: 'Sabah olunca **Ömer** ve Ebu Bekir, Bakî mezarlığına geldi. Ömer, yeni mezarların kazılmasını ve Hz. Fatıma\'nın naaşı bulunup cenaze namazının kılınmasını istedi. Haber kısa sürede **Hz. Ali**\'ye ulaştı. Hz. Ali öfkeyle oraya geldi. Elinde Zülfikar vardı. "Onun mezarından tek bir taş bile oynatırsanız, bu toprakları kanınızla sularım" dedi. Ömer karşılık verince Hz. Ali onun yakasına yapıştı, onu sarsıp yere vurdu. Ebu Bekir araya girdi ve Resulullah\'ın hakkı için onu bırakmasını istedi. Hz. Ali\'nin hoşlanmayacağı bir şey yapmayacaklarını söyledi. Hz. Ali bırakınca mezarı aramaktan vazgeçtiler. Bu yüzden **Hz. Fatıma**\'nın kabri bugün de gizlidir.' },
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

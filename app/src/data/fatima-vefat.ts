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
      text: { tr: 'Fedek, savaşsız anlaşılmış bir topraktı. Peygamber\'in vefatından sonra **Hz. Fatıma** babasının mirasını ve Fedek\'teki hakkını istedi. Mescidde ayağa kalktı. Bu konuşma Hutbe-i Fedekiyye diye anılır. Karşılık kısaydı: "Biz peygamberler miras bırakmayız; bıraktığımız sadakadır." Hakkı elinde kaldı. O günün acısı, sonraki hikâyenin kapısını açar.' },
      art: { bg: 'city', props: ['sun'], actors: [{ kind: 'fatima', x: 36, label: { tr: 'Hz. Fatıma' } }, { kind: 'crowd', x: 68, scale: 4 }] },
      by: 'both',
      cites: [{ side: 'sunni', i: 0 }, { side: 'shia', i: 3 }],
    },
    {
      text: { tr: 'Bir grup Hz. Ali\'nin evinde toplanmıştı. **Hz. Fatıma** kapıya geldi. Gelen, odun ve ateş yeminiyle konuştu: o neler bir daha toplanırsa evi içindekiyle yakacağını söyledi. İçeride Peygamber\'in kızı vardı. Bu yemin Sünni kitaplarda da yazılıdır. Şehristânî, Nazzâm\'ın "İçindekilerle birlikte yakın" diye bağırdığını aktardığını da kaydeder.' },
      art: { bg: 'city', props: ['flags'], actors: [{ kind: 'man', x: 28, pose: 'raise', label: { tr: 'Ömer' } }, { kind: 'fatima', x: 68, label: { tr: 'Hz. Fatıma' } }] },
      by: 'both',
      cites: [{ side: 'sunni', i: 1 }, { side: 'sunni', i: 2 }, { side: 'sunni', i: 3 }, { side: 'sunni', i: 4 }],
    },
    {
      text: { tr: 'Ehl-i Beyt rivayetlerine göre ateş kapıya verildi. Kapı yandı, sonra itilip zorlandı. **Hz. Fatıma** kapının ardında durmuştu. Kapı ile duvar arasında sıkıştı. Göğsüne kapının çivisi battı. Karnındaki **Muhsin** düştü. "Babacığım" diye seslendi. **Hz. Ali** yetişti, onu tuttu ve sabretti. Yakma yemini Sünni kitaplarda da yazılıdır. Kapının yanması, sıkışma, çivi ve Muhsin ise bu Şii rivayetlerin anlattığı sahnedir.' },
      art: { bg: 'interior', actors: [{ kind: 'fatima', x: 48, pose: 'sit', label: { tr: 'Hz. Fatıma' } }, { kind: 'ali', x: 74, label: { tr: 'Hz. Ali' } }] },
      by: 'shia',
      cites: [{ side: 'shia', i: 6 }, { side: 'shia', i: 7 }, { side: 'shia', i: 8 }, { side: 'shia', i: 9 }, { side: 'shia', i: 0 }, { side: 'sunni', i: 2 }],
    },
    {
      text: { tr: 'Bundan sonra **Hz. Fatıma** Halife Ebu Bekir\'le konuşmadı. Vefatına kadar sustu. Bu cümle Sünni kaynaklarında da durur: "Ona küstü ve vefat edene kadar onunla konuşmadı." Peygamber\'den sonra altı ay yaşadı. Suskunluğu, kırılan hakkın sesi oldu.' },
      art: { bg: 'interior', props: ['moon'], actors: [{ kind: 'fatima', x: 50, pose: 'sit', label: { tr: 'Hz. Fatıma' } }] },
      by: 'both',
      cites: [{ side: 'sunni', i: 0 }, { side: 'sunni', i: 5 }],
    },
    {
      text: { tr: 'Hastalık günleri uzadı. Buna Eyyâm-ı Fâtımiyye denir. **Hz. Ali** başucundan ayrılmadı. Hz. Hasan ve Hz. Hüseyin küçük elleriyle annelerinin yanında durdu. O, acısını evin içine hapsetti. Sabrı, bağıranların gürültüsünden daha ağırdı.' },
      art: { bg: 'interior', actors: [{ kind: 'fatima', x: 40, pose: 'sit', label: { tr: 'Hz. Fatıma' } }, { kind: 'ali', x: 58, label: { tr: 'Hz. Ali' } }, { kind: 'hasan', x: 72, scale: 0.7 }, { kind: 'husayn', x: 82, scale: 0.65 }] },
      by: 'shia',
      cites: [{ side: 'shia', i: 0 }],
    },
    {
      text: { tr: 'Son nefesinden önce **Hz. Fatıma** Hz. Ali\'ye vasiyet etti. Kendisine haksızlık edenler cenazesine gelmesin. Namazına durmasın. Gece defnedilsin. Kabri bilinmesin. O, protestosunu mezarına kadar taşıdı. Ali, bu vasiyeti boğazda düğüm gibi tuttu.' },
      art: { bg: 'interior', props: ['scroll'], actors: [{ kind: 'fatima', x: 36, pose: 'sit', label: { tr: 'Hz. Fatıma' } }, { kind: 'ali', x: 66, label: { tr: 'Hz. Ali' } }] },
      by: 'shia',
      cites: [{ side: 'shia', i: 4 }],
    },
    {
      text: { tr: 'Vefat edince **Hz. Ali** onu gece yıkadı, namazını kendisi kıldı ve karanlıkta defnetti. Halife Ebu Bekir\'e haber vermedi. Bu gece defin Sünni kaynaklarında da yazılıdır. Yanında evin ehli ve birkaç yakın vardı. Sabah olduğunda cenaze çoktan toprağa verilmişti.' },
      art: { bg: 'night', props: ['stars', 'moon'], actors: [{ kind: 'ali', x: 42, label: { tr: 'Hz. Ali' } }, { kind: 'hasan', x: 58, scale: 0.7 }, { kind: 'husayn', x: 68, scale: 0.65 }] },
      by: 'both',
      cites: [{ side: 'sunni', i: 0 }, { side: 'shia', i: 1 }],
    },
    {
      text: { tr: 'Kabri bilinmez kaldı. Ev, Bakî ve Peygamber\'in kabri ile minberi arası ihtimal diye anılır. Kesin yer yoktur. **Hz. Fatıma**\'nın gizli kabri, suskunluğunun taşlaşmış hâlidir. Sevenler bugün de o yeri arar ve bulamayınca onun üzüntüsünü hatırlar.' },
      art: { bg: 'dawn', props: ['palms'], actors: [{ kind: 'ali', x: 50, pose: 'sit', label: { tr: 'Hz. Ali' } }] },
      by: 'both',
      cites: [{ side: 'sunni', i: 6 }, { side: 'shia', i: 5 }],
    },
    {
      text: { tr: 'Ertesi sabah kabirler karıştırılmak istendi. **Hz. Ali** kılıcını kuşanıp çıktı. Yakayı tuttu, yere bıraktı ve uyardı: bu kabirden bir taş oynatılırsa iş burada bitmez. Karşı taraf geri durdu. İnsanlar dağıldı. Ali, hakkını o gün de sabırla yere bırakmış, kızının kabrini bırakmamıştı.' },
      art: { bg: 'dawn', props: ['swords'], actors: [{ kind: 'ali', x: 38, pose: 'raise', label: { tr: 'Hz. Ali' } }, { kind: 'man', x: 68, label: { tr: 'Ömer' } }] },
      by: 'shia',
      cites: [{ side: 'shia', i: 1 }, { side: 'shia', i: 2 }],
    },
  ],
  sunni: [
    { book: 'Buhari, Sahih', ref: 'No. 4240 (Meğâzî, Gazvetü Hayber)', says: { tr: 'Hz. Fatıma, Medine\'deki fey\'i, Fedek\'i ve Hayber humusundan kalanı ister. "Bize miras kalmaz, bıraktığımız sadakadır" denir. O, darılır, vefat edene kadar konuşmaz. Altı ay yaşar. Hz. Ali onu gece defneder, Ebu Bekir\'e haber vermez ve namazını kılar.' }, grade: { tr: 'Sahih' }, url: 'https://hadits.net/ar/bukhari:4240', status: 'verified' },
    { book: 'İbn Ebî Şeybe, el-Musannef', ref: 'Kitâbü\'l-Meğâzî; bir baskıda cilt 8, s. 571 (başka baskıda cilt 13, s. 469 da anılır)', says: { tr: 'Zeyd b. Eslem\'in babasından: Ali ve Zübeyr, Fatıma\'nın yanında toplanır. Ömer, yine toplanırlarsa evi üzerlerine yaktırmaya yemin ettiğini söyler. Fatıma bunu içeri bildirin ve dağılın der.' }, grade: { tr: 'Metin yaygın aktarılır; sayfa baskıya göre değişir, bu yüzden kontrol edilmeli.' }, status: 'check' },
    { book: 'Şehristânî, el-Milel ve\'n-Nihal', ref: 'cilt 1, s. 57 (en-Nazzâmiyye; eş-Şâmile)', says: { tr: 'Şehristânî, Mu\'tezile\'den Nazzâm\'ın sözünü aktarır: Ömer biat günü Fatıma\'nın karnına vurdu, o cenini düşürdü; "Evi içindekilerle yakın" diye bağırıyordu; evde Ali, Fatıma, Hasan ve Hüseyin vardı. Şehristânî bunu Nazzâm\'ın iftirası diye anar.' }, status: 'verified' },
    { book: 'Belâzurî, Ensâbü\'l-Eşrâf', ref: 'cilt 1, s. 586 (VikîŞia atfı)', says: { tr: 'Evde toplananlara yönelik yakma tehdidi.' }, grade: { tr: 'Sayfa bu çalışmada baskıdan okunmadı.' }, status: 'check' },
    { book: 'İbn Kuteybe\'ye atfedilen el-İmâme ve\'s-Siyâse', ref: 'cilt 1, s. 30-31 (VikîŞia atfı)', says: { tr: 'Odun getirilip "Çıkın, yoksa içindekilerle yakarım" denmesi ve "İçinde Fatıma var" denince "Olsa da" cevabı.' }, grade: { tr: 'Eserin İbn Kuteybe\'ye aidiyeti tartışmalıdır. Sayfa bu çalışmada okunmadı.' }, status: 'check' },
    { book: 'Müslim, Sahih', ref: 'No. 1759 (Cihâd ve siyer)', says: { tr: 'Fedek ve Hayber\'in miras talebi ile "peygamberler miras bırakmaz" sözü. Buhari 4240 ile aynı haberin paralelidir.' }, grade: { tr: 'Numara yaygın atıftır; bu turda sayfa açılmadı.' }, status: 'check' },
    { book: 'İbn Sa\'d, et-Tabakâtü\'l-Kübrâ', ref: 'cilt 8, s. 29 (VikîŞia atfı)', says: { tr: 'Hz. Fatıma gece defnedildi; kabrin yeri kesin bilinmez.' }, grade: { tr: 'Sayfa bu çalışmada okunmadı.' }, status: 'check' },
  ],
  shia: [
    { book: 'Süleym b. Kays, Kitâb', ref: 'cilt 1, s. 151', says: { tr: 'Künfuz\'un Hz. Fatıma\'yı kamçıyla vurduğu ve izinin kolunda kaldığı. Sayfadaki el-İhticâc farkında kapı sövesine itildiği, kaburgasının kırıldığı ve cenini düşürdüğü de yazılır. Kitabın bugünkü nüshasının aidiyeti Şii ricalde de tartışılır.' }, url: 'https://lib.eshia.ir/70632/1/151', status: 'verified' },
    { book: 'Taberî (İmâmî), Delâilü\'l-İmâme', ref: 'cilt 1, s. 137 (Müessesetü\'l-Bi\'se)', says: { tr: 'Gece definden sonra kabir karıştırılmak istenir. Hz. Ali yakayı tutar, yere bırakır ve kabirden taş oynatılırsa kan döküleceğini söyler. Ebu Bekir araya girer, dağılırlar. Dipnot haberi Bihârü\'l-Envâr 43/171\'e bağlar.' }, url: 'https://lib.eshia.ir/15165/1/137', status: 'verified' },
    { book: 'Meclisî, Bihârü\'l-Envâr', ref: 'cilt 43, s. 171 (Delâil dipnotu)', says: { tr: 'Delâilü\'l-İmâme s. 137\'deki kabir sahnesinin derlendiği yer olarak anılır.' }, grade: { tr: 'Sayfa, Delâil baskısının dipnotundan alındı; Bihâr cildi bu turda ayrıca açılmadı.' }, status: 'check' },
    { book: 'Ahmed b. Ebî Tâhir, Belâğatü\'n-Nisâ', ref: 'Fedek hutbesi (sayfa bu turda açılmadı)', says: { tr: 'Hz. Fatıma\'nın mescidde Fedek için söylediği hutbe bu eserde aktarılır.' }, status: 'check' },
    { book: 'İbn Şehraşûb, Menâkıb Âl-i Ebî Tâlib', ref: 'cilt 3, s. 137 (VikîŞia atfı)', says: { tr: 'Haksızlık edenlerin cenazede bulunmaması ve gizli defin vasiyeti.' }, grade: { tr: 'Sayfa bu çalışmada okunmadı.' }, status: 'check' },
    { book: 'Şeyh Sadûk, Men lâ yahduruhu\'l-fakîh', ref: 'kabir ihtimalleri (ev, Bakî, kabr ile minber arası)', says: { tr: 'Kabrin yeri hakkında üç görüş. Kesin yer bildirilmez.' }, grade: { tr: 'Sayfa bu turda açılmadı.' }, status: 'check' },
    { book: 'Süleym b. Kays, Kitâb', ref: 'cilt 1, s. 387', says: { tr: 'Ömer ateş istedi, kapıya verdi ve kapıyı yaktı, sonra kapıyı itti. Hz. Fatıma karşıladı. Kınındaki kılıç böğrüne, kamçı koluna vuruldu.' }, url: 'https://lib.eshia.ir/70632/1/387', status: 'verified' },
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
  summary: { tr: 'Fedek reddedildi. Ehl-i Beyt rivayetlerine göre kapı yakıldı, zorlandı; Hz. Fatıma kapı ile duvar arasında sıkıştı, göğsüne çivi battı ve Muhsin düştü. Vefata kadar konuşmaması ve gece defin Buhari 4240\'ta da durur. Kabri gizlidir.' },
};

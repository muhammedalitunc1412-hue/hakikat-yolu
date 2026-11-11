import type { HistEvent } from '../types';

// Kaynak: TDV İslâm Ansiklopedisi maddeleri (islamansiklopedisi.org.tr) okunarak yazıldı; Şii/Sünni birincil kaynak cilt-sayfaları okunmadığı için 'check'.
// Nurlu figür türü yalnız Hz. Peygamber, Ali, Fatıma, Hasan, Hüseyin içindir; sonraki imamlar 'man' + label ile gösterilir.
export const imamlar: HistEvent = {
  id: 'imamlar',
  date: { tr: '61-260 H (680-874); gaybet 260-329 H (874-941)', en: '61-260 AH (680-874)' },
  title: { tr: 'Kerbela\'dan sonra imamlar: Hz. Zeynelâbidîn\'den Hz. Mehdî\'ye', en: 'The imams after Karbala: from Zayn al-Abidin to the Mahdi' },
  hook: { tr: 'Kerbela\'dan sağ çıkan genç bir imam, ilim ve sabırla yürüyen bir rehberlik zincirini nasıl başlattı?', en: 'How did a sick young survivor of Karbala begin a line of learning and patience?' },
  scenes: [
    {
      text: { tr: 'Kerbelâ\'da **Hz. Hüseyin** şehit edildiğinde imamet, yani Ehl-i Beyt\'in önderliği, onun hasta oğlu **Hz. Zeynelâbidîn**\'e geçti. Asıl adı Ali\'ydi. Hastalığı yüzünden meydana çıkamamış, halası Hz. Zeynep\'in kendini siper etmesiyle çadırda sağ kalmıştı. Kûfe\'nin ve Şam\'ın esaret yollarından geçtikten sonra ailesinin kalanlarıyla birlikte Medine\'ye döndü. Kılıçla susturulmak istenen önderlik, bu genç imamın ellerinde yeni bir şekil aldı. Hz. Zeynelâbidîn, babasının mesajını kılıçla değil, gözyaşı, dua ve sabırla ümmete taşıdı.' },
      art: { bg: 'dune-dusk', props: ['tents'], actors: [] },
      by: 'both',
    },
    {
      text: { tr: 'Medine\'ye dönen **Hz. Zeynelâbidîn**, hayatını ibadete ve duaya adadı. Çok secde ettiği için ona Seccâd, yani çok secde eden de denirdi. Duaları **Sahife-i Seccâdiyye** adlı eserde toplandı. Şiiler bu kitaba "Âl-i Muhammed\'in Zeburu" der. İnsanın Allah\'la, kendisiyle ve başkalarıyla olan haklarını anlatan **Risâletü\'l-Hukûk** da ona nispet edilir. Ehl-i Beyt rivayetlerine göre hicretin 94. yılı civarında zehirlenerek şehit edildi ve Bakî\'de amcası **Hz. Hasan**\'ın yanına defnedildi.' },
      art: { bg: 'interior', props: ['scroll'], actors: [{ kind: 'man', x: 50, pose: 'sit', label: { tr: 'Hz. Zeynelâbidîn' } }] },
      by: 'shia',
    },
    {
      text: { tr: 'Hz. Zeynelâbidîn\'in oğlu **Hz. Muhammed Bâkır**, Bâkır lakabıyla anılır. Bu ad, ilmi yarıp derinliklerine inen demektir. Hz. Bâkır, Medine\'de büyük bir ders halkası kurdu. Çevresinde yalnızca Ehl-i Beyt\'in dostları değil, farklı görüşlerden âlimler de toplanıyordu. Bu halkada oğlu **Hz. Ca\'fer**\'in yanında Katâde, Zührî ve Evzâî gibi tanınmış isimler de bulundu. Emevi baskısının en ağır olduğu yıllarda Hz. Bâkır, Peygamber\'den gelen ilmi sessizce, ama kararlılıkla yaydı. Hicretin 114. yılında Emevi halifesi **Hişam b. Abdülmelik**\'in emriyle zehirlenerek şehit edildi ve Bakî\'de defnedildi.' },
      art: { bg: 'interior', props: ['scroll'], actors: [{ kind: 'man', x: 36, pose: 'sit', label: { tr: 'Hz. Muhammed Bâkır' } }, { kind: 'crowd', x: 68, scale: 4 }] },
      by: 'both',
    },
    {
      text: { tr: 'Babasının yerine geçen **Hz. Ca\'fer-i Sâdık**, Emevilerin yıkılıp Abbasilerin iktidara geldiği karışık bir dönemde yaşadı. Çevresinde pek çok isyan çıktı, ama Hz. Sâdık bu isyanlara karışmadı ve bütün gücünü ilme verdi. Medine\'deki ders halkası, pek çok talebenin yetiştiği büyük bir okula dönüştü. Fıkıhtan tefsire, ahlaktan kelama kadar pek çok alanda ders verdi. Bugün Şiilerin takip ettiği fıkıh, onun adıyla **Câferî fıkıh** diye anılır. Abdestin nasıl alınacağından imamın kim olduğuna kadar pek çok mesele, onun anlattıklarıyla açıklık kazandı. Hicretin 148. yılında Medine\'de, Abbasi halifesi **Mansur**\'un emriyle zehirlenerek şehit edildi.' },
      art: { bg: 'interior', props: ['scroll'], actors: [{ kind: 'man', x: 40, pose: 'sit', label: { tr: 'Hz. Ca\'fer-i Sâdık' } }, { kind: 'crowd', x: 70, scale: 5 }] },
      by: 'both',
    },
    {
      text: { tr: 'Hz. Ca\'fer-i Sâdık\'ın ders halkası yalnızca Şiilere açık değildi. Sünni mezheplerin kurucularından **Ebû Hanîfe** ve **Mâlik** de ondan faydalananlar arasında anılır. Ebû Hanîfe\'ye, "O iki yıl olmasaydı Nu\'mân helak olurdu" sözü atfedilir. Nu\'mân, Ebû Hanîfe\'nin kendi adıdır ve bu söz, Hz. Sâdık\'ın yanında geçirdiği yılları anlatır. Mâlik\'in de ondan hadis dinlediği aktarılır. Hz. Sâdık\'ın oğlu **Hz. Musa el-Kâzım** da bu halkanın içinde, babasının yanında büyüdü. Ehl-i Beyt\'in kapısı, ilim arayan herkese açık kalmıştı.' },
      art: { bg: 'interior', props: ['scroll'], actors: [{ kind: 'man', x: 30, label: { tr: 'Ebû Hanîfe' } }, { kind: 'man', x: 52, pose: 'sit', label: { tr: 'Hz. Ca\'fer-i Sâdık' } }, { kind: 'man', x: 76, label: { tr: 'Mâlik b. Enes' } }] },
      by: 'partial',
      cites: [{ side: 'sunni', i: 0 }],
    },
    {
      text: { tr: '**Hz. Musa Kâzım**, Medine\'de ilmi, cömertliği ve sabrıyla tanındı. Kâzım, öfkesini yutan demektir. Abbasi halifesi **Hârûnürreşîd**, onun halk üzerindeki etkisinden korktu ve onu Medine\'den Bağdat\'a getirtti. Hz. Musa Kâzım hayatının son dört yılını zindanlarda ve sıkı bir gözetim altında geçirdi. Zindandan zindana nakledildi, ama sabrını ve ibadetini hiç bırakmadı. Hicretin 183. yılında Bağdat\'ta, Abbasi halifesi **Hârûn Reşîd**\'in zindanında, onun emriyle zehirlenerek şehit edildi. Ölümünün Bermekîlerin emriyle gerçekleştiği aktarılır. Kabri bugün Bağdat\'taki **Kâzımeyn**\'dedir ve her yıl milyonlarca ziyaretçiyi ağırlar.' },
      art: { bg: 'city', props: ['flags'], actors: [{ kind: 'man', x: 34, label: { tr: 'Hz. Musa Kâzım' } }, { kind: 'man', x: 70, label: { tr: 'Hârûnürreşîd' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Abbasi halifesi **Me\'mun**, Hz. Musa Kâzım\'ın oğlu **Hz. Ali Rızâ**\'yı Medine\'den Horasan\'daki Merv şehrine çağırdı. Önce ona halifeliği bırakmayı teklif etti. İmam bu teklifi kabul etmedi. Bunun üzerine Me\'mun, ona veliahtlığı dayattı. Hz. Rızâ iki ay boyunca direndi, ama sonunda baskı altında veliahtlık belgesini imzalamak zorunda kaldı. Ehl-i Beyt rivayetlerine göre bu belge, yönetimi meşru kılmayan, baskıyla imzalatılmış bir kâğıttı. Hz. Rızâ, hicretin 203. yılında Tûs yakınlarında, Abbasi halifesi **Me\'mûn**\'un emriyle zehirlenerek şehit edildi. Kabrinin bulunduğu yer bugün **Meşhed** adıyla anılır.' },
      art: { bg: 'caravan', props: ['camels', 'scroll'], actors: [{ kind: 'man', x: 30, label: { tr: 'Hz. Ali Rızâ' } }, { kind: 'man', x: 66, label: { tr: 'Me\'mun' } }] },
      by: 'both',
    },
    {
      text: { tr: '**Hz. Muhammed Takî**, babası Hz. Rızâ\'yı yedi yaşında kaybetti ve bu küçük yaşta imamet ona geçti. Abbasiler onu da Bağdat\'a götürüp gözetim altında tuttu. Hicretin 220. yılında orada, Abbasi halifesi **Mu\'tasım**\'ın emriyle zehirlenerek şehit edildi. Oğlu **Hz. Ali Nakî**, Abbasi halifesi **Mütevekkil** tarafından Samarra\'ya getirildi ve şehirden çıkması yasaklandı. Onun oğlu **Hz. Hasan Askerî** de bütün hayatını Samarra\'da, bir askerî ordugâhın içinde geçirdi. Askerî lakabı, ordugâhta tutulan anlamına gelir. Hicretin 260. yılında Abbasi halifesi **Mu\'temid**\'in emriyle zehirlenerek şehit edildi. Ehl-i Beyt rivayetlerine göre bu son iki imam da zehirlenerek şehit edildi.' },
      art: { bg: 'city', props: ['flags'], actors: [{ kind: 'man', x: 26, label: { tr: 'Hz. Ali Nakî' } }, { kind: 'man', x: 56, label: { tr: 'Hz. Hasan Askerî' } }, { kind: 'crowd', x: 82, scale: 3 }] },
      by: 'partial',
      cites: [{ side: 'sunni', i: 5 }, { side: 'sunni', i: 6 }],
    },
    {
      text: { tr: '**Hz. Hasan Askerî**\'nin vefatından önce Samarra\'da bir oğlu dünyaya geldi. Bu çocuk, On İkinci İmam **Hz. Mehdî**\'ydi. Abbasiler imamın evini sürekli gözetim altında tutuyordu. Bu baskı yüzünden çocuğun doğumu gizli tutuldu. Babasının vefatından sonra Hz. Mehdî gaybete, yani gizlenme dönemine girdi. Önce küçük gaybet başladı. Bu dönemde dört nâib, yani vekil, imam ile halk arasında aracılık yaptı. Ardından büyük gaybet başladı ve bugüne kadar sürdü. Hz. Mehdî ölmemiştir, Allah\'ın izniyle gizlidir.' },
      art: { bg: 'dawn', props: ['sun'], actors: [{ kind: 'crowd', x: 50, scale: 5 }] },
      by: 'partial',
      cites: [{ side: 'sunni', i: 9 }],
    },
    {
      text: { tr: '**Hz. Mehdî**, Peygamber\'in soyundan, Hz. Fatıma\'nın evlatlarındandır. Şii inancına göre o doğmuş ve Allah\'ın izniyle gizlenmiştir. Ahir zamanda, yeryüzü zulümle dolduğunda ortaya çıkacak ve dünyayı adaletle dolduracaktır. Hz. Mehdî\'ye dair rivayetler bazı Sünni kaynaklarda da yer alır. Şiiler onun gelişini sabırla ve umutla bekler. Bu bekleyişe intizar denir. Kerbelâ\'da suyu kesilen ailenin son imamı, bir gün mazlumların hakkını alacak ve yeryüzüne adaleti getirecektir. Hz. Ali ile başlayan on iki imamlık zincir, onunla tamamlanır.' },
      art: { bg: 'dawn', props: ['sun', 'scroll'], actors: [] },
      by: 'sunni',
    },
  ],
  sunni: [
    { book: 'TDV İslâm Ansiklopedisi, "Ca\'fer es-Sâdık"', ref: 'islamansiklopedisi.org.tr/cafer-es-sadik; bibliyografya: Zehebî, A\'lâmü\'n-nübelâ VI, 255-270; Zehebî, Tezkiretü\'l-huffâz I, 166-167; İbn Hallikân, Vefeyât I, 322-328', says: { tr: 'Sünnî âlimlerin onu hadiste güvenilir, fıkıhta müctehid saydığı; Mâlik\'in ondan hadis dinlediği; Ebû Hanîfe ile ilmî tartışmalar yaptığı; vefatının 148/765 olduğu. Madde "Ebû Hanîfe ders aldı" demez.' }, grade: { tr: 'İKİNCİL (ansiklopedi; Zehebî ve İbn Hallikân kitapları doğrudan okunmadı)' }, url: 'https://islamansiklopedisi.org.tr/cafer-es-sadik', status: 'check' },
    { book: 'TDV İslâm Ansiklopedisi, "Muhammed el-Bâkır"', ref: 'islamansiklopedisi.org.tr/muhammed-el-bakir', says: { tr: 'Hz. Muhammed Bâkır lakabı, Bakî\'de defni, 114/733 vefatı; Sünnî kaynakların onu güvenilir ve muhafazakâr bir ravi saydığı; öğrencileri arasında Katâde, Zührî, Evzâî.' }, grade: { tr: 'İKİNCİL (TDV vefat yılını "[?]" ile verir)' }, url: 'https://islamansiklopedisi.org.tr/muhammed-el-bakir', status: 'verified' },
    { book: 'TDV İslâm Ansiklopedisi, "Zeynelâbidîn"', ref: 'islamansiklopedisi.org.tr/zeynelabidin; bibliyografya: İbn Sa\'d, Tabakât V, 211-222; Zehebî, A\'lâmü\'n-nübelâ IV, 386-400', says: { tr: 'Kerbela\'da hastalığı, Şimr\'in öldürmek istemesi ve Ömer b. Sa\'d\'ın engellemesi; 94/712 vefatı ve Bakî\'de defni; Zührî\'nin başlıca öğrencisi olması. Zührî\'nin övgü sözü maddede doğrulanmadı.' }, grade: { tr: 'İKİNCİL' }, url: 'https://islamansiklopedisi.org.tr/zeynelabidin', status: 'verified' },
    { book: 'TDV İslâm Ansiklopedisi, "Ali er-Rızâ"', ref: 'islamansiklopedisi.org.tr/ali-er-riza; bibliyografya: Yakûbî, Târîh II, 448-449, 453; Taberî VIII, 554-557, 568; İbnü\'l-Esîr, el-Kâmil VI, 326, 351; İbn Hallikân, Vefeyât III, 269-271; İbn Kesîr, el-Bidâye X, 249', says: { tr: 'Me\'mun\'un 817\'de veliaht ilanı, İmam\'ın iki ay direnmesi, Tûs\'ta 29 Safer 203\'te (5 Eylül 818) vefat, Me\'mun\'un cenaze namazı ve Hârûn\'un yanına defni, Meşhed adı. Bibliyografya cümle bazında eşleştirilmemiştir.' }, grade: { tr: 'İKİNCİL' }, url: 'https://islamansiklopedisi.org.tr/ali-er-riza', status: 'verified' },
    { book: 'TDV İslâm Ansiklopedisi, "Mûsâ el-Kâzım"', ref: 'islamansiklopedisi.org.tr/musa-el-kazim; Taberî, Târîh VIII, 271; İbnü\'l-Esîr, el-Kâmil VI, 164', says: { tr: 'Hârûnürreşîd\'in Medine\'den Bağdat\'a götürmesi, yaklaşık dört yıl gözetim ve hapis, Recep 183\'te (Ağustos 799) vefat; Taberî tarihi kayıt eder. Yahyâ el-Bermekî ve Sindî b. Şâhek\'in rolü "aktarılır" diye verilir.' }, grade: { tr: 'İKİNCİL' }, url: 'https://islamansiklopedisi.org.tr/musa-el-kazim', status: 'verified' },
    { book: 'TDV İslâm Ansiklopedisi, "Muhammed el-Cevâd" ve "Ali el-Hâdî"', ref: 'islamansiklopedisi.org.tr/muhammed-el-cevad; /ali-el-hadi', says: { tr: 'Hz. Muhammed Takî: Me\'mun\'un kızı Ümmü\'l-Fazl ile evliliği, 220/835 Bağdat\'ta vefat; zehirlenme haberlerinin "güvenilir olmadığı" notu. Hz. Ali Nakî: 848\'de Mütevekkil\'in Samarra\'ya getirmesi, 254/868 vefat; zehirlenme yalnız Şii iddiası.' }, grade: { tr: 'İKİNCİL' }, url: 'https://islamansiklopedisi.org.tr/ali-el-hadi', status: 'verified' },
    { book: 'TDV İslâm Ansiklopedisi, "Hasan el-Askerî" (Hamid Algar, C. 16, s. 289)', ref: 'islamansiklopedisi.org.tr/hasan-el-askeri-hasan-b-ali', says: { tr: 'Samarra\'da ikamete mecbur edilip ayrılmasına izin verilmemesi, 8 Rebîülevvel 260 (1 Ocak 874) vefatı. Madde ağırlıklı olarak Şii kaynaklara dayanır, Sünni kaynak bilgisi içermez.' }, grade: { tr: 'İKİNCİL' }, url: 'https://islamansiklopedisi.org.tr/hasan-el-askeri-hasan-b-ali', status: 'verified' },
    { book: 'TDV İslâm Ansiklopedisi, "Mehdî" (Yusuf Şevki Yavuz)', ref: 'islamansiklopedisi.org.tr/mehdi', says: { tr: 'Hz. Mehdî rivayetlerinin Mâlik, Buhârî, Müslim\'de bulunmadığı; Ahmed b. Hanbel, Ebû Dâvûd, Tirmizî\'de bulunduğu; Sünni anlayışta Hz. Hasan veya Hz. Hüseyin soyundan ahir zamanda gelecek biri; İbn Haldûn ve Kādî Abdülcebbâr\'ın reddi. Hadis numaraları okunmadı.' }, grade: { tr: 'İKİNCİL; hadis sıhhati tartışmalı' }, url: 'https://islamansiklopedisi.org.tr/mehdi', status: 'check' },
    { book: 'TDV İslâm Ansiklopedisi, "Mehdî el-Muntazar" (Mustafa Öz, 2003)', ref: 'islamansiklopedisi.org.tr/mehdi-el-muntazar', says: { tr: 'İbn Teymiye gibi bazı âlimlerin On İkinci İmam\'ı hayali bir şahıs saydığı eleştirisi.' }, grade: { tr: 'İKİNCİL' }, url: 'https://islamansiklopedisi.org.tr/mehdi-el-muntazar', status: 'verified' },
    { book: 'İbn Hallikân, Vefeyâtü\'l-a\'yân', ref: 'Ebü\'l-Kâsım Muhammed b. el-Hasan el-Askerî maddesi (cilt/sayfa kontrol edilecek)', says: { tr: 'On İkinci İmam\'ın 255 yılında Hz. Hasan Askerî\'nin oğlu olarak doğduğu ve Şiilerin onu beklenen Mehdî saydığı aktarılır.' }, status: 'check' },
  ],
  shia: [
    { book: 'Şeyh Müfid, el-İrşâd', ref: 'imamlar bölümleri; Hz. Musa Kâzım için s. 298-302, Hz. Hasan Askerî için s. 335-345 (TDV dipnotlarındaki sayfalar; kitap okunmadı)', says: { tr: 'Her imamın doğumu, ilmi, imametine nass ve vefatı. Şii inancın temel kaynaklarından.' }, grade: { tr: 'Şii birincil kaynak; doğrudan okunmadı (al-islam.org 403 verdi). DOĞRULANMADI' }, url: 'https://al-islam.org/kitab-al-irshad-book-shaykh-al-mufid', status: 'check' },
    { book: 'Kuleynî, el-Kâfî', ref: 'Hüccet kitabı (hadis numarası kontrol edilecek)', says: { tr: 'İmamlar hakkındaki rivayetler ve nass bölümleri; Hz. Mehdî\'nin doğumu ve gaybeti için de başvurulur.' }, grade: { tr: 'Şii birincil kaynak; DOĞRULANMADI' }, status: 'check' },
    { book: 'Nu\'mânî, el-Gaybe; Şeyh Sadûk, Kemâlü\'d-dîn; Şeyh Tûsî, el-Gaybe', ref: 'cilt/sayfa kontrol edilecek (TDV maddesi bu eserleri Hz. Mehdî literatürü olarak sayar)', says: { tr: 'Gaybet-i suğra, dört nâib ve gaybet-i kübra anlatısı.' }, grade: { tr: 'Şii birincil kaynak; DOĞRULANMADI' }, status: 'check' },
    { book: 'Şeyh Sadûk, Uyûnü Ahbâri\'r-Rızâ', ref: 'cilt/sayfa kontrol edilecek (Wikishia\'da anılır)', says: { tr: 'Hz. Ali Rızâ\'nın Me\'mun ile ilişkisi, Nişabur\'daki "Silsiletü\'z-zeheb" hadisi.' }, grade: { tr: 'Şii birincil kaynak; İKİNCİL aktarımla biliniyor' }, url: 'https://en.wikishia.net/view/%27Uyun_akhbar_al-Rida_(book)', status: 'check' },
    { book: 'Wikishia, "Imam al-Rida\'s (a) Succession of al-Ma\'mun"', ref: 'en.wikishia.net/view/Imam_al-Rida%27s_(a)_Succession_of_al-Ma%27mun', says: { tr: 'Me\'mun\'un önce hilafeti bırakmayı, İmam\'ın reddi üzerine veliahtlığı teklif etmesi; Müfid\'e göre Me\'mun\'un görevlisinin Celûdî olması; İmam\'ın yönetimi meşrulaştırmayan şartlar koyması.' }, grade: { tr: 'İKİNCİL (ansiklopedik site)' }, url: 'https://en.wikishia.net/view/Imam_al-Rida%27s_(a)_Succession_of_al-Ma%27mun', status: 'check' },
    { book: 'Nevbahtî, Fıraku\'ş-Şîa s. 78-94; Sa\'d b. Abdullah el-Kummî, el-Makâlât ve\'l-fırak s. 101-116; Tabersî, İ\'lâmü\'l-verâ s. 349-360', ref: 'TDV Hz. Hasan Askerî maddesi dipnotları; kitaplar okunmadı', says: { tr: 'Hz. Hasan Askerî\'nin ölümünden sonra İmâmîlerin on dört-on beş fırkaya bölündüğü; oğul haberinin "resmî İmâmî görüş" olması.' }, grade: { tr: 'İKİNCİL aktarım; DOĞRULANMADI' }, status: 'check' },
    { book: 'Şeyh Sadûk, Risâletü\'l-Hukûk (Hısâl ve Mektebetü\'l-İmâm)', ref: 'TDV: Sadûk ve İbn Şu\'be eserlerinde; Chittick 1988, s. 279-292', says: { tr: 'Hz. Zeynelâbidîn\'e nispet edilen hak ve görevler risalesi.' }, grade: { tr: 'İKİNCİL; nispet tartışmalıdır' }, status: 'check' },
  ],
  disputes: [
    {
      title: { tr: 'Ebû Hanîfe ve Mâlik, Hz. Ca\'fer-i Sâdık\'ın öğrencisi miydi?' },
      sunni: { tr: 'Mâlik\'in hadis dinlemesi ve Ebû Hanîfe ile ilmî konuşmalar iki kaynakta da anılır. Sünni aktarımda bu ilişki saygı ve görüşmedir; öğrencilik rivayeti ikincil kaynaklara dayanır. TDV, Buhârî\'nin Sahîh\'inde ondan rivayet almamasını adına yanlış sözler isnat edilmesine bağlar.' },
      shia: { tr: 'Mâlik\'in hadis dinlemesi ve Ebû Hanîfe ile ilmî konuşmalar iki kaynakta da anılır. Şii anlatıda ikisi de Hz. Ca\'fer-i Sâdık\'ın ilim halkasından yararlanmıştır; "o iki yıl" sözü Ebû Hanîfe\'ye atfedilir, numarası doğrulanmamıştır.' },
    },
    {
      title: { tr: 'İmamların vefatı: zehir haberi ve tarih kaydı' },
      sunni: { tr: 'İmamların vefat yılları tarih kitaplarında kayıtlıdır. TDV, Hz. Muhammed Takî için zehir haberlerini güvenilir bulmaz; Hz. Ali Nakî ve Hz. Hasan Askerî için bunu Şii rivayeti olarak aktarır. Hz. Musa Kâzım\'da Bermekî emri de rivayet diye anılır.' },
      shia: { tr: 'İmamların vefat yılları tarih kitaplarında kayıtlıdır. Şii inancında on iki imam kılıç veya zehirle şehit edilmiştir; bu anlatı Müfid ve Kuleynî rivayetlerine dayanır.' },
    },
    {
      title: { tr: 'Hz. Ali Rızâ\'nın veliahtlığı' },
      sunni: { tr: 'Me\'mun\'un 817\'de onu veliaht ilan ettiği tarihçilerce aktarılır. Abbasi hanedanının tepkisi ve Bağdat ayaklanması da bu dönemin içinde anlatılır.' },
      shia: { tr: 'Me\'mun\'un 817\'de onu veliaht ilan ettiği tarihçilerce aktarılır. Şii anlatıda teklif baskıyla kabul edilmiş, yönetimi meşrulaştırmayacak şartlarla sınırlanmıştır; İmam hilafeti istememiştir.' },
    },
    {
      title: { tr: 'On İkinci İmam ve Hz. Mehdî' },
      sunni: { tr: 'Hz. Mehdî\'ye dair rivayetler bazı Sünni kitaplarda da vardır (Ahmed b. Hanbel, Ebû Dâvûd, Tirmizî). Doğmuş ve gizlenmiş bir imam görüşü kabul edilmez; İbn Teymiye varlığını reddeder, İbn Haldûn rivayetleri zayıf bulur.' },
      shia: { tr: 'Hz. Mehdî\'ye dair rivayetler bazı Sünni kitaplarda da vardır. Şii inancında Hz. Mehdî 255 H.\'de doğmuş, 260\'ta gaybete girmiştir; küçük gaybette dört nâib vardır, 329\'dan sonra büyük gaybet başlar ve dönüş için tarih belirlemek yasaktır.' },
    },
  ],
  questions: [
    { tr: 'Hz. Zeynelâbidîn Kerbela\'dan hasta olarak sağ çıktı ve sonraki imamlar ilim ile duayı öne aldı. Bu çizgi, zor bir dönemde rehberliğin nasıl sürdüğünü nasıl anlatır?' },
    { tr: 'Hz. Ca\'fer-i Sâdık\'ın ders halkasında hem Ehl-i Beyt talebeleri hem Katâde ve Zührî gibi isimler anılır. Ortak bir ilim sofrası, mezhepleri birbirine nasıl yaklaştırır?' },
    { tr: 'Hz. Musa Kâzım ve Hz. Ali Nakî yıllarca gözetim altında yaşadı. Baskı altında ilim halkasını sürdürmek, imamların rehberliğini nasıl gösterir?' },
    { tr: 'Hz. Ali Rızâ veliahtlığı iki ay direndikten sonra kabul etti. Güç karşısında ilkeyi korumak ile fitneyi önlemek arasında nasıl bir denge görüyorsunuz?' },
    { tr: 'Hz. Mehdî rivayetleri bazı Sünni kitaplarda da vardır; doğmuş ve gizlenmiş imam inancı ise Şii kaynaklarına özgüdür. İki anlatının paylaştığı adalet umudu size ne söyler?' },
  ],
  summary: { tr: 'Kerbela\'dan sonra Hz. Zeynelâbidîn\'den Hz. Hasan Askerî\'ye imamlar, çoğu zaman gözetim altında ilim, dua ve sabır çizgisini sürdürdü. On İkinci İmam\'ın gaybeti Şii inancının temelidir. Hz. Mehdî rivayetleri bazı Sünni kaynaklarında da yer alır.' },
};

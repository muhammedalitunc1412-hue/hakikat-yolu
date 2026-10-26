import type { HistEvent } from '../types';

// Kaynak: TDV İslâm Ansiklopedisi maddeleri (islamansiklopedisi.org.tr) okunarak yazıldı; Şii/Sünni birincil kaynak cilt-sayfaları okunmadığı için 'check'.
// Nurlu figür türü yalnız Hz. Peygamber, Ali, Fatıma, Hasan, Hüseyin içindir; sonraki imamlar 'man' + label ile gösterilir.
export const imamlar: HistEvent = {
  id: 'imamlar',
  date: { tr: '61-260 H (680-874); gaybet 260-329 H (874-941)', en: '61-260 AH (680-874)' },
  title: { tr: 'Kerbela\'dan sonra imamlar: Zeynelâbidîn\'den Mehdi\'ye', en: 'The imams after Karbala: from Zayn al-Abidin to the Mahdi' },
  hook: { tr: 'Kerbela\'dan sağ çıkan genç bir imam, ilim ve sabırla yürüyen bir rehberlik zincirini nasıl başlattı?', en: 'How did a sick young survivor of Karbala begin a line of learning and patience?' },
  scenes: [
    {
      text: { tr: 'Hz. Hüseyin\'den sonra imamet, Şii kaynaklarına göre oğlu Ali\'ye geçti. Hastalığı yüzünden Kerbela\'da savaşamayan İmam Zeynelâbidîn, ailenin sağ kalan tek erkek çocuğuydu. Esirlik yolculuğundan sonra Medine\'ye döndü. Bu rivayet Sünni kaynaklarında da geçmektedir (TDV İslâm Ansiklopedisi, "Zeynelâbidîn").' },
      art: { bg: 'dune-dusk', props: ['tents'], actors: [] },
      by: 'both',
    },
    {
      text: { tr: 'İmam Zeynelâbidîn, Seccâd, Medine\'de siyasetten uzak, ibadet ve dua ile yaşadı. Duaları Sahife-i Seccâdiyye\'de toplandı. Şii kaynakları bu esere "Âl-i Muhammed\'in Zebûru" der. Hak ve görevleri anlatan Risâletü\'l-Hukûk da ona nispet edilir. Sünni kaynaklar onu saygın bir tabiî olarak anar. 94 H. (712) civarında vefat etti ve Bakî\'de amcası Hz. Hasan\'ın yanına defnedildi. Zehirlendiği haberi Şii kaynaklarında geçer; TDV bunu yalnız bu kaynaklara atfeder.' },
      art: { bg: 'interior', props: ['scroll'], actors: [{ kind: 'man', x: 50, pose: 'sit', label: { tr: 'İmam Zeynelâbidîn' } }] },
      by: 'shia',
    },
    {
      text: { tr: 'Oğlu İmam Muhammed el-Bâkır, "ilmi yarıp derinliğine inen" anlamındaki lakabıyla anılır. Medine\'de bir ders halkası kurdu. Öğrencileri arasında oğlu Câfer, Katâde, Zührî ve Evzâî sayılır. Sünni kaynaklar onu güvenilir bir ravi olarak anar. Bu rivayet Sünni kaynaklarında da geçmektedir (TDV İslâm Ansiklopedisi, "Muhammed el-Bâkır"). 114 H. (733) civarında vefat etti ve Bakî\'de defnedildi.' },
      art: { bg: 'interior', props: ['scroll'], actors: [{ kind: 'man', x: 36, pose: 'sit', label: { tr: 'İmam Muhammed el-Bâkır' } }, { kind: 'crowd', x: 68, scale: 4 }] },
      by: 'both',
    },
    {
      text: { tr: 'İmam Câfer es-Sâdık, Emevilerin son ve Abbasilerin ilk yıllarında yaşadı. Siyasi isyanlara girmeden ilme yöneldi. Şii fıkhı onun adıyla Câferî mezhebi diye anılır. Hadiste güvenilir ve fıkıhta müctehid sayıldığı da anılır. Bu rivayet Sünni kaynaklarında da geçmektedir (TDV İslâm Ansiklopedisi, "Ca\'fer es-Sâdık"). 148 H. (765) yılında Medine\'de vefat etti.' },
      art: { bg: 'interior', props: ['scroll'], actors: [{ kind: 'man', x: 40, pose: 'sit', label: { tr: 'İmam Câfer es-Sâdık' } }, { kind: 'crowd', x: 70, scale: 5 }] },
      by: 'both',
    },
    {
      text: { tr: 'Şii kaynaklarında Ebû Hanîfe ve Mâlik, İmam Sâdık\'ın ders halkasından yararlananlar arasında anılır. "O iki yıl olmasaydı Nu\'mân helak olurdu" sözü Ebû Hanîfe\'ye atfedilir. Mâlik\'in ondan hadis dinlediği ve Ebû Hanîfe ile ilmî konuşmalar yaptığı da aktarılır. Bu rivayet Sünni kaynaklarında da geçmektedir (TDV İslâm Ansiklopedisi, "Ca\'fer es-Sâdık"). Öğrencilik rivayeti ikincil kaynaklara dayanır.' },
      art: { bg: 'interior', props: ['scroll'], actors: [{ kind: 'man', x: 30, label: { tr: 'Ebû Hanîfe' } }, { kind: 'man', x: 52, pose: 'sit', label: { tr: 'İmam Câfer es-Sâdık' } }, { kind: 'man', x: 76, label: { tr: 'Mâlik b. Enes' } }] },
      by: 'shia',
    },
    {
      text: { tr: 'İmam Mûsâ el-Kâzım Medine\'de ilmi ve sabrıyla tanındı. Halife Hârûnürreşîd onu Medine\'den Bağdat\'a götürttü. Son dört yılı kâh ev hapsinde, kâh Basra ve Bağdat\'ta gözetim altında geçti. 183 H. (799) yılında Bağdat\'ta vefat etti; kabri bugün Kâzımeyn\'dedir. Ölümünün Yahyâ el-Bermekî\'nin emriyle olduğu aktarılır. Bu rivayet Sünni kaynaklarında da geçmektedir (TDV İslâm Ansiklopedisi, "Mûsâ el-Kâzım").' },
      art: { bg: 'city', props: ['flags'], actors: [{ kind: 'man', x: 34, label: { tr: 'İmam Mûsâ el-Kâzım' } }, { kind: 'man', x: 70, label: { tr: 'Hârûnürreşîd' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Halife Me\'mun, İmam Ali er-Rızâ\'yı Merv\'e çağırdı. Önce hilafeti bırakmayı önerdi. İmam kabul etmeyince veliahtlığı teklif etti. TDV\'ye göre İmam iki ay direndi, sonra ahidnameyi imzalamak zorunda kaldı. Şii kaynaklarında bu, baskı altında kabul edilmiş ve yönetimi meşrulaştırmayan bir veliahtlıktır. Me\'mun, Bağdat ayaklanması üzerine yola çıkınca İmam Tûs yakınlarında hastalanıp 203 H. (818) yılında vefat etti. Me\'mun cenaze namazını kıldırdı ve onu babası Hârûn\'un yanına defnetti. Kabrin yeri Meşhed adını aldı. Bu rivayet Sünni kaynaklarında da geçmektedir (TDV İslâm Ansiklopedisi, "Ali er-Rızâ").' },
      art: { bg: 'caravan', props: ['camels', 'scroll'], actors: [{ kind: 'man', x: 30, label: { tr: 'İmam Ali er-Rızâ' } }, { kind: 'man', x: 66, label: { tr: 'Me\'mun' } }] },
      by: 'both',
    },
    {
      text: { tr: 'İmam Muhammed el-Cevâd babasını yedi yaşında kaybetti. Me\'mun onu Bağdat\'a getirip kızı Ümmü\'l-Fazl ile evlendirdi. 220 H. (835) yılında Bağdat\'ta vefat etti. Oğlu İmam Ali el-Hâdî, Halife Mütevekkil tarafından 848\'de Samarra\'ya getirildi ve 254 H. (868) vefatına dek gözetimde yaşadı. Oğlu İmam Hasan el-Askerî, Samarra\'dan ayrılmasına izin verilmediği için Askerî diye anıldı. 8 Rebîülevvel 260\'ta (874) vefat etti. İkisinin zehirlendiği Şii rivayetlerde anlatılır; TDV bunu yalnız bu rivayetlere atfeder. Gözetim yılları ve vefat tarihleri de kayda geçmiştir. Bu rivayet Sünni kaynaklarında da geçmektedir (TDV İslâm Ansiklopedisi, "Muhammed el-Cevâd" ve "Ali el-Hâdî").' },
      art: { bg: 'city', props: ['flags'], actors: [{ kind: 'man', x: 26, label: { tr: 'İmam Ali el-Hâdî' } }, { kind: 'man', x: 56, label: { tr: 'İmam Hasan el-Askerî' } }, { kind: 'crowd', x: 82, scale: 3 }] },
      by: 'shia',
    },
    {
      text: { tr: 'İmâmî Şiîlerin çoğuna göre İmam Askerî\'nin vefatından kısa süre önce Samarra\'da bir oğlu doğdu: On İkinci İmam Muhammed el-Mehdî. Doğumu Abbasi baskısı yüzünden gizli tutuldu. 260-329 H. (874-941) arasındaki küçük gaybette dört nâib, onunla Şiîler arasında aracılık etti. Ardından büyük gaybet başladı. Şii kaynaklarına göre adaleti yeryüzüne hâkim kılmak için dönecektir.' },
      art: { bg: 'dawn', props: ['sun'], actors: [{ kind: 'crowd', x: 50, scale: 5 }] },
      by: 'shia',
    },
    {
      text: { tr: 'Peygamber soyundan gelecek bir Mehdi\'ye dair rivayetler bazı Sünni kitaplarda da vardır. Bu rivayet Sünni kaynaklarında da geçmektedir (TDV İslâm Ansiklopedisi, "Mehdî"). Ahmed b. Hanbel, Ebû Dâvûd ve Tirmizî\'de bulunur; Buhârî ve Müslim\'de yoktur. Sünni kaynaklarda Mehdi, ahir zamanda doğacak biri olarak anlatılır. İbn Haldûn ve bazı âlimler rivayetleri zayıf bulur.' },
      art: { bg: 'dawn', props: ['sun', 'scroll'], actors: [] },
      by: 'sunni',
    },
  ],
  sunni: [
    { book: 'TDV İslâm Ansiklopedisi, "Ca\'fer es-Sâdık"', ref: 'islamansiklopedisi.org.tr/cafer-es-sadik; bibliyografya: Zehebî, A\'lâmü\'n-nübelâ VI, 255-270; Zehebî, Tezkiretü\'l-huffâz I, 166-167; İbn Hallikân, Vefeyât I, 322-328', says: { tr: 'Sünnî âlimlerin onu hadiste güvenilir, fıkıhta müctehid saydığı; Mâlik\'in ondan hadis dinlediği; Ebû Hanîfe ile ilmî tartışmalar yaptığı; vefatının 148/765 olduğu. Madde "Ebû Hanîfe ders aldı" demez.' }, grade: { tr: 'İKİNCİL (ansiklopedi; Zehebî ve İbn Hallikân kitapları doğrudan okunmadı)' }, url: 'https://islamansiklopedisi.org.tr/cafer-es-sadik', status: 'check' },
    { book: 'TDV İslâm Ansiklopedisi, "Muhammed el-Bâkır"', ref: 'islamansiklopedisi.org.tr/muhammed-el-bakir', says: { tr: 'Bâkır lakabı, Bakî\'de defni, 114/733 vefatı; Sünnî kaynakların onu güvenilir ve muhafazakâr bir ravi saydığı; öğrencileri arasında Katâde, Zührî, Evzâî.' }, grade: { tr: 'İKİNCİL (TDV vefat yılını "[?]" ile verir)' }, url: 'https://islamansiklopedisi.org.tr/muhammed-el-bakir', status: 'verified' },
    { book: 'TDV İslâm Ansiklopedisi, "Zeynelâbidîn"', ref: 'islamansiklopedisi.org.tr/zeynelabidin; bibliyografya: İbn Sa\'d, Tabakât V, 211-222; Zehebî, A\'lâmü\'n-nübelâ IV, 386-400', says: { tr: 'Kerbela\'da hastalığı, Şimr\'in öldürmek istemesi ve Ömer b. Sa\'d\'ın engellemesi; 94/712 vefatı ve Bakî\'de defni; Zührî\'nin başlıca öğrencisi olması. Zührî\'nin övgü sözü maddede doğrulanmadı.' }, grade: { tr: 'İKİNCİL' }, url: 'https://islamansiklopedisi.org.tr/zeynelabidin', status: 'verified' },
    { book: 'TDV İslâm Ansiklopedisi, "Ali er-Rızâ"', ref: 'islamansiklopedisi.org.tr/ali-er-riza; bibliyografya: Yakûbî, Târîh II, 448-449, 453; Taberî VIII, 554-557, 568; İbnü\'l-Esîr, el-Kâmil VI, 326, 351; İbn Hallikân, Vefeyât III, 269-271; İbn Kesîr, el-Bidâye X, 249', says: { tr: 'Me\'mun\'un 817\'de veliaht ilanı, İmam\'ın iki ay direnmesi, Tûs\'ta 29 Safer 203\'te (5 Eylül 818) vefat, Me\'mun\'un cenaze namazı ve Hârûn\'un yanına defni, Meşhed adı. Bibliyografya cümle bazında eşleştirilmemiştir.' }, grade: { tr: 'İKİNCİL' }, url: 'https://islamansiklopedisi.org.tr/ali-er-riza', status: 'verified' },
    { book: 'TDV İslâm Ansiklopedisi, "Mûsâ el-Kâzım"', ref: 'islamansiklopedisi.org.tr/musa-el-kazim; Taberî, Târîh VIII, 271; İbnü\'l-Esîr, el-Kâmil VI, 164', says: { tr: 'Hârûnürreşîd\'in Medine\'den Bağdat\'a götürmesi, yaklaşık dört yıl gözetim ve hapis, Recep 183\'te (Ağustos 799) vefat; Taberî tarihi kayıt eder. Yahyâ el-Bermekî ve Sindî b. Şâhek\'in rolü "aktarılır" diye verilir.' }, grade: { tr: 'İKİNCİL' }, url: 'https://islamansiklopedisi.org.tr/musa-el-kazim', status: 'verified' },
    { book: 'TDV İslâm Ansiklopedisi, "Muhammed el-Cevâd" ve "Ali el-Hâdî"', ref: 'islamansiklopedisi.org.tr/muhammed-el-cevad; /ali-el-hadi', says: { tr: 'Cevâd: Me\'mun\'un kızı Ümmü\'l-Fazl ile evliliği, 220/835 Bağdat\'ta vefat; zehirlenme haberlerinin "güvenilir olmadığı" notu. Hâdî: 848\'de Mütevekkil\'in Samarra\'ya getirmesi, 254/868 vefat; zehirlenme yalnız Şii iddiası.' }, grade: { tr: 'İKİNCİL' }, url: 'https://islamansiklopedisi.org.tr/ali-el-hadi', status: 'verified' },
    { book: 'TDV İslâm Ansiklopedisi, "Hasan el-Askerî" (Hamid Algar, C. 16, s. 289)', ref: 'islamansiklopedisi.org.tr/hasan-el-askeri-hasan-b-ali', says: { tr: 'Samarra\'da ikamete mecbur edilip ayrılmasına izin verilmemesi, 8 Rebîülevvel 260 (1 Ocak 874) vefatı. Madde ağırlıklı olarak Şii kaynaklara dayanır, Sünni kaynak bilgisi içermez.' }, grade: { tr: 'İKİNCİL' }, url: 'https://islamansiklopedisi.org.tr/hasan-el-askeri-hasan-b-ali', status: 'verified' },
    { book: 'TDV İslâm Ansiklopedisi, "Mehdî" (Yusuf Şevki Yavuz)', ref: 'islamansiklopedisi.org.tr/mehdi', says: { tr: 'Mehdi rivayetlerinin Mâlik, Buhârî, Müslim\'de bulunmadığı; Ahmed b. Hanbel, Ebû Dâvûd, Tirmizî\'de bulunduğu; Sünni anlayışta Hasan veya Hüseyin soyundan ahir zamanda gelecek biri; İbn Haldûn ve Kādî Abdülcebbâr\'ın reddi. Hadis numaraları okunmadı.' }, grade: { tr: 'İKİNCİL; hadis sıhhati tartışmalı' }, url: 'https://islamansiklopedisi.org.tr/mehdi', status: 'check' },
    { book: 'TDV İslâm Ansiklopedisi, "Mehdî el-Muntazar" (Mustafa Öz, 2003)', ref: 'islamansiklopedisi.org.tr/mehdi-el-muntazar', says: { tr: 'İbn Teymiye gibi bazı âlimlerin On İkinci İmam\'ı hayali bir şahıs saydığı eleştirisi.' }, grade: { tr: 'İKİNCİL' }, url: 'https://islamansiklopedisi.org.tr/mehdi-el-muntazar', status: 'verified' },
  ],
  shia: [
    { book: 'Şeyh Müfid, el-İrşâd', ref: 'imamlar bölümleri; Mûsâ el-Kâzım için s. 298-302, Hasan el-Askerî için s. 335-345 (TDV dipnotlarındaki sayfalar; kitap okunmadı)', says: { tr: 'Her imamın doğumu, ilmi, imametine nass ve vefatı. Şii inancın temel kaynaklarından.' }, grade: { tr: 'Şii birincil kaynak; doğrudan okunmadı (al-islam.org 403 verdi). DOĞRULANMADI' }, url: 'https://al-islam.org/kitab-al-irshad-book-shaykh-al-mufid', status: 'check' },
    { book: 'Kuleynî, el-Kâfî', ref: 'Hüccet kitabı (hadis numarası kontrol edilecek)', says: { tr: 'İmamlar hakkındaki rivayetler ve nass bölümleri; Mehdi\'nin doğumu ve gaybeti için de başvurulur.' }, grade: { tr: 'Şii birincil kaynak; DOĞRULANMADI' }, status: 'check' },
    { book: 'Nu\'mânî, el-Gaybe; Şeyh Sadûk, Kemâlü\'d-dîn; Şeyh Tûsî, el-Gaybe', ref: 'cilt/sayfa kontrol edilecek (TDV maddesi bu eserleri Mehdi literatürü olarak sayar)', says: { tr: 'Gaybet-i suğra, dört nâib ve gaybet-i kübra anlatısı.' }, grade: { tr: 'Şii birincil kaynak; DOĞRULANMADI' }, status: 'check' },
    { book: 'Şeyh Sadûk, Uyûnü Ahbâri\'r-Rızâ', ref: 'cilt/sayfa kontrol edilecek (Wikishia\'da anılır)', says: { tr: 'İmam Rızâ\'nın Me\'mun ile ilişkisi, Nişabur\'daki "Silsiletü\'z-zeheb" hadisi.' }, grade: { tr: 'Şii birincil kaynak; İKİNCİL aktarımla biliniyor' }, url: 'https://en.wikishia.net/view/%27Uyun_akhbar_al-Rida_(book)', status: 'check' },
    { book: 'Wikishia, "Imam al-Rida\'s (a) Succession of al-Ma\'mun"', ref: 'en.wikishia.net/view/Imam_al-Rida%27s_(a)_Succession_of_al-Ma%27mun', says: { tr: 'Me\'mun\'un önce hilafeti bırakmayı, İmam\'ın reddi üzerine veliahtlığı teklif etmesi; Müfid\'e göre Me\'mun\'un görevlisinin Celûdî olması; İmam\'ın yönetimi meşrulaştırmayan şartlar koyması.' }, grade: { tr: 'İKİNCİL (ansiklopedik site)' }, url: 'https://en.wikishia.net/view/Imam_al-Rida%27s_(a)_Succession_of_al-Ma%27mun', status: 'check' },
    { book: 'Nevbahtî, Fıraku\'ş-Şîa s. 78-94; Sa\'d b. Abdullah el-Kummî, el-Makâlât ve\'l-fırak s. 101-116; Tabersî, İ\'lâmü\'l-verâ s. 349-360', ref: 'TDV Hasan el-Askerî maddesi dipnotları; kitaplar okunmadı', says: { tr: 'İmam Askerî\'nin ölümünden sonra İmâmîlerin on dört-on beş fırkaya bölündüğü; oğul haberinin "resmî İmâmî görüş" olması.' }, grade: { tr: 'İKİNCİL aktarım; DOĞRULANMADI' }, status: 'check' },
    { book: 'Şeyh Sadûk, Risâletü\'l-Hukûk (Hısâl ve Mektebetü\'l-İmâm)', ref: 'TDV: Sadûk ve İbn Şu\'be eserlerinde; Chittick 1988, s. 279-292', says: { tr: 'Zeynelâbidîn\'e nispet edilen hak ve görevler risalesi.' }, grade: { tr: 'İKİNCİL; nispet tartışmalıdır' }, status: 'check' },
  ],
  disputes: [
    {
      title: { tr: 'Ebû Hanîfe ve Mâlik, İmam Sâdık\'ın öğrencisi miydi?' },
      sunni: { tr: 'Mâlik\'in hadis dinlemesi ve Ebû Hanîfe ile ilmî konuşmalar iki kaynakta da anılır. Sünni aktarımda bu ilişki saygı ve görüşmedir; öğrencilik rivayeti ikincil kaynaklara dayanır. TDV, Buhârî\'nin Sahîh\'inde ondan rivayet almamasını adına yanlış sözler isnat edilmesine bağlar.' },
      shia: { tr: 'Mâlik\'in hadis dinlemesi ve Ebû Hanîfe ile ilmî konuşmalar iki kaynakta da anılır. Şii anlatıda ikisi de Sâdık\'ın ilim halkasından yararlanmıştır; "o iki yıl" sözü Ebû Hanîfe\'ye atfedilir, numarası doğrulanmamıştır.' },
    },
    {
      title: { tr: 'İmamların vefatı: zehir haberi ve tarih kaydı' },
      sunni: { tr: 'İmamların vefat yılları tarih kitaplarında kayıtlıdır. TDV, Cevâd için zehir haberlerini güvenilir bulmaz; Hâdî ve Askerî için bunu Şii rivayeti olarak aktarır. Kâzım\'da Bermekî emri de rivayet diye anılır.' },
      shia: { tr: 'İmamların vefat yılları tarih kitaplarında kayıtlıdır. Şii inancında on iki imam kılıç veya zehirle şehit edilmiştir; bu anlatı Müfid ve Kuleynî rivayetlerine dayanır.' },
    },
    {
      title: { tr: 'Ali er-Rızâ\'nın veliahtlığı' },
      sunni: { tr: 'Me\'mun\'un 817\'de onu veliaht ilan ettiği tarihçilerce aktarılır. Abbasi hanedanının tepkisi ve Bağdat ayaklanması da bu dönemin içinde anlatılır.' },
      shia: { tr: 'Me\'mun\'un 817\'de onu veliaht ilan ettiği tarihçilerce aktarılır. Şii anlatıda teklif baskıyla kabul edilmiş, yönetimi meşrulaştırmayacak şartlarla sınırlanmıştır; İmam hilafeti istememiştir.' },
    },
    {
      title: { tr: 'On İkinci İmam ve Mehdi' },
      sunni: { tr: 'Mehdi\'ye dair rivayetler bazı Sünni kitaplarda da vardır (Ahmed b. Hanbel, Ebû Dâvûd, Tirmizî). Doğmuş ve gizlenmiş bir imam görüşü kabul edilmez; İbn Teymiye varlığını reddeder, İbn Haldûn rivayetleri zayıf bulur.' },
      shia: { tr: 'Mehdi\'ye dair rivayetler bazı Sünni kitaplarda da vardır. Şii inancında Muhammed b. Hasan 255 H.\'de doğmuş, 260\'ta gaybete girmiştir; küçük gaybette dört nâib vardır, 329\'dan sonra büyük gaybet başlar ve dönüş için tarih belirlemek yasaktır.' },
    },
  ],
  questions: [
    { tr: 'İmam Zeynelâbidîn Kerbela\'dan hasta olarak sağ çıktı ve sonraki imamlar ilim ile duayı öne aldı. Bu çizgi, zor bir dönemde rehberliğin nasıl sürdüğünü nasıl anlatır?' },
    { tr: 'İmam Sâdık\'ın ders halkasında hem Ehl-i Beyt talebeleri hem Katâde ve Zührî gibi isimler anılır. Ortak bir ilim sofrası, mezhepleri birbirine nasıl yaklaştırır?' },
    { tr: 'Mûsâ el-Kâzım ve Ali el-Hâdî yıllarca gözetim altında yaşadı. Baskı altında ilim halkasını sürdürmek, imamların rehberliğini nasıl gösterir?' },
    { tr: 'İmam Rızâ veliahtlığı iki ay direndikten sonra kabul etti. Güç karşısında ilkeyi korumak ile fitneyi önlemek arasında nasıl bir denge görüyorsunuz?' },
    { tr: 'Mehdi rivayetleri bazı Sünni kitaplarda da vardır; doğmuş ve gizlenmiş imam inancı ise Şii kaynaklarına özgüdür. İki anlatının paylaştığı adalet umudu size ne söyler?' },
  ],
  summary: { tr: 'Kerbela\'dan sonra Zeynelâbidîn\'den Hasan el-Askerî\'ye imamlar, çoğu zaman gözetim altında ilim, dua ve sabır çizgisini sürdürdü. On İkinci İmam\'ın gaybeti Şii inancının temelidir. Mehdi rivayetleri bazı Sünni kaynaklarında da yer alır.' },
};

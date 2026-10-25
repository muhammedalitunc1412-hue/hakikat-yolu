import type { HistEvent } from '../types';

// Kaynak: research/04-cemel-siffin-nehrevan.md. status 'verified' = metin/numara okunup doğrulandı; 'check' = yayın öncesi birincil kaynaktan kontrol edilmeli.
export const siffin: HistEvent = {
  id: 'siffin',
  date: { tr: 'Safer 37 - Ramazan 40 H (657-661)', en: 'Safar 37 - Ramadan 40 AH (657-661)' },
  title: { tr: 'Sıffin, Hakem ve Şehadet', en: 'Siffin, Arbitration and Martyrdom' },
  hook: { tr: 'Mızraklara asılan mushaflar ve bir sabah namazında biten hilafet. Ammar kimin safındaydı?', en: 'Qurans raised on spears, and a caliphate that ended at dawn prayer.' },
  scenes: [
    {
      text: { tr: 'Hz. Ali (a.s.) Kûfe\'yi merkez edinip Şam yönüne ilerledi. Fırat kıyısındaki Sıffin\'de Muaviye\'nin ordusuyla karşılaşıldı. Anlatıldığına göre çatışmayı kendisi başlatmaktan kaçındı. Kapı, son ana kadar konuşmaya açıktı.' },
      art: { bg: 'river', props: ['tents', 'flags'], actors: [{ kind: 'crowd', x: 22, scale: 7 }, { kind: 'ali', x: 52, label: { tr: 'Hz. Ali' } }, { kind: 'man', x: 82, label: { tr: 'Muaviye' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Yıllar önce, Medine\'de mescit yapılırken Hz. Peygamber (s.a.v.) çalışan Ammar b. Yasir\'e bakıp şöyle buyurmuştu: «Yazık Ammar\'a, onu azgın bir grup öldürecek.» Buhari 447\'de bir ziyade daha vardır: «Onları cennete çağırır, onlar onu ateşe çağırır.» Sahabe bu sözü duymuştu.' },
      art: { bg: 'city', props: ['palms', 'sun'], actors: [{ kind: 'prophet', x: 64, label: { tr: 'Hz. Peygamber' } }, { kind: 'man', x: 30, pose: 'raise', label: { tr: 'Ammar b. Yasir' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Yaşlı sahabi Ammar, Sıffin\'de Hz. Ali\'nin safında şehit oldu. Buhari ve Müslim, onu öldürecek grubu «azgın» diye anar. Hadis o gün kimin yanında durulacağını da konuşulur kıldı. Ammar\'ın yeri, Hz. Ali\'nin safıydı.' },
      art: { bg: 'battle', props: ['flags'], actors: [{ kind: 'man', x: 26, label: { tr: 'Ammar b. Yasir' } }, { kind: 'ali', x: 70, label: { tr: 'Hz. Ali' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Rivayete göre Amr b. el-As, «Ammar\'ı öldürdük» diyerek hadisi Muaviye\'ye hatırlattı. Muaviye «Onu biz mi öldürdük? Onu getirenler öldürdü» diye karşılık verdi. Söz biliniyordu; yorumla karşılandı. Bu cevap, kaynaklarda aktarılır, hadisin hükmünü değiştirmez.' },
      art: { bg: 'interior', props: ['scroll'], actors: [{ kind: 'man', x: 30, label: { tr: 'Amr b. el-As' } }, { kind: 'man', x: 66, label: { tr: 'Muaviye' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Savaş Hz. Ali\'nin lehine dönerken Şamlılar mushaf sayfalarını mızraklara bağlayıp «Allah\'ın kitabı aramızda hakem olsun» dedi. O, bunun bir hile olduğunu söyledi. Ordusunun çoğunluğu, özellikle Kuran okuyucuları, kabul etmesi için baskı yaptı. Kitap, kılıcın önüne siper edilmişti.' },
      art: { bg: 'battle', props: ['flags', 'scroll', 'sun'], actors: [{ kind: 'crowd', x: 26, scale: 8 }, { kind: 'ali', x: 72, label: { tr: 'Hz. Ali' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Anlaşma yazıldı. Hz. Ali adına Ebu Musa el-Eş\'arî, Muaviye adına Amr b. el-As hakem seçildi. Onun başka isimler istediği ve metinden «emîrü\'l-müminîn» unvanının çıkarıldığı anlatılır. Hakem, otoritesini zayıflattı. Ca\'ferî okuyuşta bu, hakkı değil hileyi kayda geçirmekti.' },
      art: { bg: 'dune-day', props: ['tents', 'scroll'], actors: [{ kind: 'man', x: 24, label: { tr: 'Ebu Musa el-Eşari' } }, { kind: 'ali', x: 52, label: { tr: 'Hz. Ali' } }, { kind: 'man', x: 80, label: { tr: 'Amr b. el-As' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Hakemi reddeden bir grup «Hüküm yalnız Allah\'ındır» diyerek ayrıldı; bunlar Haricîler diye anılır. Hz. Ali «Söz haktır, ama onunla batıl kastediliyor» dedi. Önce görüşmeler yapıldı, sonra Nehrevan\'da çatışma oldu. O, sözün hakkını da batıla alet edilişini de ayırmıştı.' },
      art: { bg: 'river', props: ['flags'], actors: [{ kind: 'crowd', x: 28, scale: 7 }, { kind: 'ali', x: 74, pose: 'raise', label: { tr: 'Hz. Ali' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Müslim 1066\'da Hz. Ali, Peygamber\'den Haricîler hakkında bir haber aktarır ve «söz haktır, ama onunla batıl kastedilir» der. Müslim 1064 ise ayrılan topluluğu, iki taraftan hakka daha yakın olanın öldüreceğini söyler. Şârihlerin çoğu bunu onun safı olarak anlar. Hadis, tarafı isim vermeden de hakka yaklaştırır.' },
      art: { bg: 'dawn', props: ['scroll'], actors: [{ kind: 'ali', x: 44, label: { tr: 'Hz. Ali' } }, { kind: 'crowd', x: 78, scale: 5 }] },
      by: 'sunni',
    },
    {
      text: { tr: 'Emevî döneminde Hz. Ali\'ye sövme yayıldı. Müslim 2404\'te Muaviye, Sa\'d b. Ebî Vakkâs\'a neden sövmediğini sorar. Sa\'d, Peygamber\'in üç sözünü sayar: menzile, Hayber sancağı ve mübâhele. Ömer b. Abdülaziz bu uygulamayı kaldırdı. Sevenin dili, minberden önce hadislerde vardı.' },
      art: { bg: 'interior', props: ['minbar', 'scroll'], actors: [{ kind: 'man', x: 28, label: { tr: 'Sa\'d b. Ebi Vakkas' } }, { kind: 'man', x: 62, label: { tr: 'Muaviye' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Haricîlerden İbn Mülcem, Ramazan 40\'ta Kûfe Ulu Camii\'nde sabah namazında Hz. Ali\'yi zehirli kılıçla yaraladı. O, yaklaşık iki gün sonra şehit oldu. Oğlu Hz. Hasan\'a (a.s.) vasiyet etti. Hilafet, bir secdenin içinde kapanmıştı.' },
      art: { bg: 'dawn', props: ['moon'], actors: [{ kind: 'ali', x: 42, pose: 'sit', label: { tr: 'Hz. Ali' } }, { kind: 'hasan', x: 66, label: { tr: 'Hz. Hasan' } }, { kind: 'crowd', x: 86, scale: 4 }] },
      by: 'both',
    },
  ],
  sunni: [
    { book: 'Buhari, Sahih', ref: 'No. 447 (Salât) ve 2812 (Cihâd)', says: { tr: 'Mescit inşası sırasında Peygamber Ammar için "onu azgın bir grup öldürecek" der. 447\'de "onları cennete çağırır, onlar onu ateşe çağırır" ziyadesi de vardır.' }, grade: { tr: 'Sahih' }, url: 'https://sunnah.com/bukhari:447', status: 'verified' },
    { book: 'Müslim, Sahih', ref: 'No. 2915 (Ebu Said el-Hudri) ve 2916 (Ümmü Seleme)', says: { tr: 'Ammar hakkında "onu azgın bir grup öldürecek" hadisi.' }, grade: { tr: 'Sahih; Buhari ve Müslim\'de geçtiği için müttefekun aleyh düzeyinde' }, url: 'https://dev.ihadis.com/en/muslim/hadith/2916a', status: 'verified' },
    { book: 'Ahmed b. Hanbel, Müsned', ref: 'No. 11166 (Dar es-Selam notu)', says: { tr: 'Ammar hadisinin Müsned\'deki rivayeti; Dar es-Selam notunda sahih olduğu ve Müslim 2915 ile örtüştüğü belirtilir.' }, grade: { tr: 'Sahih (Dar es-Selam notu)' }, url: 'https://en.tohed.com/hadith/musnad-ahmad/11166/', status: 'verified' },
    { book: 'Ahmed b. Hanbel, Müsned; İbn Kesir, el-Bidâye', ref: 'Ammar hadisinin yorumu (eski cilt-sayfa kaydı bu çalışmada doğrulanmadığı için kaldırıldı)', says: { tr: 'Amr b. el-As\'ın Muaviye\'ye hadisi hatırlatması ve Muaviye\'nin "Onu getirenler öldürdü" cevabı. Rivayet tarih kitaplarında yaygındır; sayfa baskıya göre değişir.' }, status: 'check' },
    { book: 'Müslim, Sahih', ref: 'No. 1066 d, f, g (Zekât, Haricîler)', says: { tr: 'Hz. Ali, Peygamber\'den Harici topluluğuyla ilgili haberi nakleder; Kuranlarını okurlar ve bu aleyhlerine delildir; Hz. Ali "söz haktır, ama onunla batıl kastedilir" der.' }, grade: { tr: 'Sahih' }, url: 'https://ihadis.com/en/muslim/hadith/1066g', status: 'verified' },
    { book: 'Müslim, Sahih', ref: 'No. 1064 (Ebu Saîd; harfli bölümler)', says: { tr: 'Ayrılan topluluğu iki taraftan hakka daha yakın olanın öldüreceği haberi. Bir bölüm iki tarafı da anar. Nevevî gibi şârihler bunu Hz. Ali\'nin safı olarak okur.' }, grade: { tr: 'Sahih' }, url: 'https://sunnah.com/muslim:1064', status: 'verified' },
    { book: 'Müslim, Sahih', ref: 'No. 2404 (Fezâilü\'s-sahâbe)', says: { tr: 'Muaviye, Sa\'d b. Ebi Vakkas\'a "Neden Ebu Turab\'a sövmüyorsun?" der. Sa\'d, Peygamber\'in Hz. Ali hakkındaki üç sözünü (Menzile, Hayber sancağı, Mübahele) sayarak buna razı olmayacağını söyler. Lafız "neden sövmüyorsun" ve "seni ne engelledi" biçiminde iki okumaya açıktır.' }, grade: { tr: 'Sahih' }, url: 'https://en.tohed.com/hadith/muslim/6220', status: 'verified' },
    { book: 'Hâkim, el-Müstedrek', ref: 'No. 4678 (Tohed baskısı)', says: { tr: '"Hz. Ali Kuran\'la, Kuran Hz. Ali iledir" rivayeti (Ümmü Seleme). Hakim isnadı sahih der; Adil Mürşid baskısında Ebu Said et-Teymi ve Ebu Sabit nedeniyle "çok zayıf" notu düşülmüştür.' }, grade: { tr: 'İhtilaflı: Hakim sahih der, bazı muhaddisler zayıf bulur' }, url: 'https://en.tohed.com/hadith/mustadrak-hakim/4678/', status: 'verified' },
    { book: 'Taberi, Tarihu\'r-Rusul ve\'l-Mulûk', ref: '37-40. yıl olayları (Leiden; sayfa kontrol edilecek)', says: { tr: 'Sıffin, mushafların mızraklara asılması, Hakem, Nehrevan, İbn Mülcem ve Emevi dönemindeki sövme geleneği (Muğire b. Şu\'be dönemi, Hucr b. Adî olayı).' }, status: 'check' },
    { book: 'İbnü\'l-Esîr, el-Kâmil fi\'t-Târîh', ref: '37-40. yıl (sayfa kontrol edilecek)', says: { tr: 'Olayların seyri ve Hz. Ali\'ye sövme uygulaması.' }, status: 'check' },
    { book: 'İbn Kesir, el-Bidâye ve\'n-Nihâye; Suyuti, Târîhu\'l-Hulefâ', ref: 'Ömer b. Abdülaziz bölümü (sayfalar kontrol edilecek)', says: { tr: 'Ömer b. Abdülaziz\'in Hz. Ali\'ye lanet geleneğini kaldırdığı; hutbelerde Nahl 90. ayetinin okutulduğu yaygın anlatım olarak aktarılır.' }, status: 'check' },
    { book: 'İbn Sa\'d, et-Tabakâtü\'l-Kübrâ', ref: 'Cilt/sayfa kontrol edilecek', says: { tr: 'Peygamber\'in Hz. Ali\'ye, sonrakilerin en şakisinin onu öldüreceğini söylediği rivayeti.' }, status: 'check' },
    { book: 'Nevevî, Şerhu Sahîh-i Müslim; İbn Hacer, Fethü\'l-Bârî; İbn Teymiyye (Mecmû\'u\'l-Fetâvâ, Minhâcü\'s-Sünne)', ref: 'Fiten/Salat bölümleri (cilt/sayfa kontrol edilecek)', says: { tr: 'Ehl-i Sünnet âlimlerinin çoğu Hz. Ali\'yi hakka daha yakın bulur; Ammar hadisinin Muaviye grubuna işaret ettiğini kabul edip onları ictihad hatası içinde sayar. İbn Teymiyye, Hz. Ali\'yi haksız demez ama savaşın emredilmediğini düşünür. Bu aktarımların hiçbiri birincil metinden doğrulanmamıştır.' }, status: 'check' },
    { book: 'Gazali, İhyâu Ulûmi\'d-Dîn; el-İktisâd', ref: 'Sayfa kontrol edilecek', says: { tr: 'Hz. Ali\'nin imametinin hak olduğu görüşü ona nispet edilir. Doğrulanmamış aktarım.' }, status: 'check' },
  ],
  shia: [
    { book: 'Nasr b. Müzahim, Vak\'atü Sıffîn', ref: 'Ammar bölümleri ve anlaşma metni (sayfa kontrol edilecek)', says: { tr: 'Sıffin\'in seyri, Ammar\'ın şehadeti, anlaşma metni ve hakem seçimi tartışmaları. Sünni ricâl eleştirisinde Nasr "aşırı Şii" sayılır, ancak malzeme açısından erken bir kaynaktır.' }, status: 'check' },
    { book: 'Nehcü\'l-Belâğa (Seyyid Razî)', ref: 'Hutbe numaraları kontrol edilecek', says: { tr: 'Hz. Ali\'nin Sıffin ve Haricilerle ilgili konuşmaları. Hutbelerin nisbeti konusunda tartışma vardır.' }, status: 'check' },
    { book: 'Şeyh Müfîd, el-İrşâd', ref: 'Şehadet ve vasiyetler bölümü (cilt/sayfa kontrol edilecek)', says: { tr: 'Hz. Ali\'nin şehadeti ve vasiyetlerinin ayrıntılı anlatımı.' }, url: 'https://al-islam.org/kitab-al-irshad-book-shaykh-al-mufid', status: 'check' },
    { book: 'Mes\'ûdî, Mürûcü\'z-Zeheb', ref: 'Sayfa kontrol edilecek', says: { tr: 'Olayların genel seyri. Şii eğilimli bir tarihçi olarak kabul edilir.' }, status: 'check' },
    { book: 'WikiShia, Cursing Imam Ali (ikincil Şii yayın)', ref: 'Madde', says: { tr: 'Sebb geleneğinin yaklaşık altmış yıl sürdüğü iddiası ve İbn Haldun\'a atfen Ömer b. Abdülaziz\'in yasaklaması. İkincil kaynaktır. Eski adresteki "Cursing_Imam_Hz. Ali" yazımı hatalıydı.' }, url: 'https://en.wikishia.net/view/Cursing_Imam_Ali', status: 'verified' },
  ],
  disputes: [
    {
      title: { tr: '"Azgın grup" kim?' },
      sunni: { tr: 'Çoğunluk, Ammar hadisini Muaviye grubuna işaret sayar; ancak bu grubu tek tek günahkâr değil, "ictihad hatası" yapmış kabul eder (Nevevi, İbn Hacer çizgisi).' },
      shia: { tr: 'Muaviye grubu doğrudan haksız ve günahkâr sayılır.' },
    },
    {
      title: { tr: 'Müslim 2404: sövme emri mi, soru mu?' },
      sunni: { tr: 'Bazı şârihler Muaviye\'nin sövmeyi emretmediğini, sadece neden sövmediğini sorduğunu söyler. Lafız iki okumaya da açıktır.' },
      shia: { tr: 'Aynı hadis, Hz. Ali\'ye sövmenin o dönemde yaygın olduğuna delil olarak alınır.' },
    },
    {
      title: { tr: 'Hakem olayında Amr\'ın Eşari\'yi aldatması' },
      sunni: { tr: 'Modern tarihçiler bu sahnenin ayrıntılarını (Wellhausen gibi) sorgular; "rivayet edilir" dili uygundur.' },
      shia: { tr: 'Klasik anlatımlar sahneyi ayrıntılı aktarır, ancak hakem kararının kendisi iki gelenekte de tartışmalıdır.' },
    },
    {
      title: { tr: 'İbn Mülcem anlatısı ve ölüm günü' },
      sunni: { tr: 'Mekke\'de üç suikast planı anlatısı şüpheyle karşılanır; ölüm günü 17, 19 veya 21 Ramazan olarak farklı rivayet edilir.' },
      shia: { tr: 'Şii gelenekte 21 Ramazan anılır.' },
    },
  ],
  questions: [
    { tr: 'Peygamber, Ammar\'ı "azgın bir grup öldürecek" diye haber verdiyse, Sıffin\'de Ammar kimin safındaydı? Bu haber bize hangi tarafı gösteriyor sizce?' },
    { tr: 'Amr b. el-As hadisi Muaviye\'ye hatırlattığında, cevap "Onu getirenler öldürdü" oldu. Hadis herkesçe biliniyorsa, yorum ile hadis arasındaki mesafeyi nasıl ölçeriz?' },
    { tr: 'Müslim 2404\'e göre Muaviye, Sa\'d\'a Hz. Ali\'ye neden sövmediğini sordu; Sa\'d Peygamber\'in Hz. Ali hakkındaki sözlerini sıraladı. Peygamber o sözleri neden söylemiş olabilir?' },
    { tr: 'Ömer b. Abdülaziz\'in Hz. Ali\'ye lanet geleneğini kaldırmasından, bu uygulamanın sonradan yanlış görüldüğü sonucu çıkar mı sizce?' },
    { tr: 'Peygamber, Hariciler için "iki fırkadan hakka yakın olan onları öldürecek" dediyse ve Hz. Ali onlarla savaştıysa, hakka yakın olan fırkanın hangisi olduğu sizce açık değil mi?' },
  ],
  summary: { tr: 'Sıffin\'de Ammar hadisi, mızraklardaki mushaflar, Hakem ve Nehrevan, Hz. Ali\'nin hakka daha yakın bulunduğunu Sünni kaynaklarda da gösteren olaylar zinciridir; İbn Mülcem\'in suikastıyla hilafeti sona erdi.' },
};

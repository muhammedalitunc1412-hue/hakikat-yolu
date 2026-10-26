import type { HistEvent } from '../types';

// Kaynak: research/04-cemel-siffin-nehrevan.md. status 'verified' = metin/numara okunup doğrulandı; 'check' = yayın öncesi birincil kaynaktan kontrol edilmeli.
export const siffin: HistEvent = {
  id: 'siffin',
  date: { tr: 'Safer 37 - Ramazan 40 H (657-661)', en: 'Safar 37 - Ramadan 40 AH (657-661)' },
  title: { tr: 'Sıffin, Hakem ve Şehadet', en: 'Siffin, Arbitration and Martyrdom' },
  hook: { tr: 'Sıffin\'de mushaflar mızraklara asıldı; Hz. Ali sabırla hakkı söyledi, hilafeti bir sabah namazında şehadetle bitti.', en: 'Qurans raised on spears, and a caliphate that ended at dawn prayer.' },
  scenes: [
    {
      text: { tr: 'Hz. Ali Kufe\'yi merkez edindi ve Şam yönüne yürüdü. Fırat kıyısındaki Sıffin\'de Muaviye\'nin ordusuyla karşılaşıldı. Hz. Ali çatışmayı kendisi başlatmaktan kaçındı.' },
      art: { bg: 'river', props: ['tents', 'flags'], actors: [{ kind: 'crowd', x: 22, scale: 7 }, { kind: 'ali', x: 52, label: { tr: 'Hz. Ali' } }, { kind: 'man', x: 82, label: { tr: 'Muaviye' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Yıllar önce Medine\'de mescit yapılırken Peygamber, Ammar b. Yasir\'e bakıp "Yazık Ammar\'a, onu azgın bir grup öldürecek" buyurmuştu. Sahabe bu sözü duymuştu.' },
      art: { bg: 'city', props: ['palms', 'sun'], actors: [{ kind: 'prophet', x: 64, label: { tr: 'Hz. Peygamber' } }, { kind: 'man', x: 30, pose: 'raise', label: { tr: 'Ammar b. Yasir' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Yaşlı sahabi Ammar, Sıffin\'de Hz. Ali\'nin safında şehit oldu. Hadis, onu öldürecek grubu azgın diye anar. Ammar\'ın hangi safta düştüğü o günden beri konuşulur. Bu olay Sünni kaynaklarında da geçmektedir (Müslim, No. 2915 ve 2916; Ahmed b. Hanbel, Müsned, No. 11166; Buhari, Sahih).' },
      art: { bg: 'battle', props: ['flags'], actors: [{ kind: 'man', x: 26, label: { tr: 'Ammar b. Yasir' } }, { kind: 'ali', x: 70, label: { tr: 'Hz. Ali' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Rivayete göre Amr b. el-As, "Ammar\'ı öldürdük" diyerek hadisi Muaviye\'ye hatırlattı. Muaviye "Onu biz mi öldürdük? Onu getirenler öldürdü" diye karşılık verdi. Hadis biliniyor, yorumla karşılanıyordu. Bu olay Sünni kaynaklarında da geçmektedir (Ahmed b. Hanbel, Müsned; İbn Kesir, el-Bidâye).' },
      art: { bg: 'interior', props: ['scroll'], actors: [{ kind: 'man', x: 30, label: { tr: 'Amr b. el-As' } }, { kind: 'man', x: 66, label: { tr: 'Muaviye' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Savaş Hz. Ali\'nin lehine dönerken Şamlılar mushaf sayfalarını mızraklara bağladı. "Allah\'ın kitabı aramızda hakem olsun" dediler. Hz. Ali bunun bir hile olduğunu söyledi. Ordusunun çoğu, özellikle Kuran okuyanlar, kabul etmesi için ısrar etti.' },
      art: { bg: 'battle', props: ['flags', 'scroll', 'sun'], actors: [{ kind: 'crowd', x: 26, scale: 8 }, { kind: 'ali', x: 72, label: { tr: 'Hz. Ali' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Anlaşma yazıldı. Hz. Ali adına Ebu Musa el-Eşari, Muaviye adına Amr b. el-As hakem seçildi. Hz. Ali başka isimler istemişti; metinden "Emirü\'l-müminin" unvanı da çıkarıldı. Hakem, onun otoritesini zayıflattı.' },
      art: { bg: 'dune-day', props: ['tents', 'scroll'], actors: [{ kind: 'man', x: 24, label: { tr: 'Ebu Musa el-Eşari' } }, { kind: 'ali', x: 52, label: { tr: 'Hz. Ali' } }, { kind: 'man', x: 80, label: { tr: 'Amr b. el-As' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Hakemi reddeden bir grup "Hüküm yalnız Allah\'ındır" diyerek Hz. Ali\'nin yanından ayrıldı. Bunlara Haricîler denir. Hz. Ali "Söz haktır, ama onunla batıl kastediliyor" dedi. Önce konuşuldu, sonra Nehrevan\'da çatışıldı. Bu olay Sünni kaynaklarında da geçmektedir (Müslim, No. 1066).' },
      art: { bg: 'river', props: ['flags'], actors: [{ kind: 'crowd', x: 28, scale: 7 }, { kind: 'ali', x: 74, pose: 'raise', label: { tr: 'Hz. Ali' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Hz. Ali, Peygamber\'den Haricîler hakkında bir haber aktarır: onları öldürenlere Allah katında sevap vardır. Bu olay Sünni kaynaklarında da geçmektedir (Müslim, No. 1066). Hakka daha yakın tarafın onlarla savaşacağı da Müslim\'de anılır ve Hz. Ali\'nin safını gösterir.' },
      art: { bg: 'dawn', props: ['scroll'], actors: [{ kind: 'ali', x: 44, label: { tr: 'Hz. Ali' } }, { kind: 'crowd', x: 78, scale: 5 }] },
      by: 'sunni',
    },
    {
      text: { tr: 'Emevi döneminde minberlerde Hz. Ali\'ye sövmek yayıldı. Bu, Ehl-i Beyt\'e yapılmış ağır bir haksızlıktı. Muaviye, Sa\'d b. Ebi Vakkas\'a Hz. Ali\'ye neden sövmediğini sordu; Sa\'d, Peygamber\'in onun hakkındaki üç sözünü saydı. Bu olay Sünni kaynaklarında da geçmektedir (Müslim, No. 2404). Ömer b. Abdülaziz bu uygulamayı kaldırdı.' },
      art: { bg: 'interior', props: ['minbar', 'scroll'], actors: [{ kind: 'man', x: 28, label: { tr: 'Sa\'d b. Ebi Vakkas' } }, { kind: 'man', x: 62, label: { tr: 'Muaviye' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Haricilerden İbn Mülcem, Ramazan 40\'ta Kufe Ulu Camii\'nde sabah namazında Hz. Ali\'yi zehirli kılıçla yaraladı. Hz. Ali yaklaşık iki gün sonra vefat etti. Oğlu Hz. Hasan\'a vasiyette bulundu. Hz. Hasan da kan dökülmesin diye hilafeti Muaviye\'ye bıraktı.' },
      art: { bg: 'dawn', props: ['moon'], actors: [{ kind: 'ali', x: 42, pose: 'sit', label: { tr: 'Hz. Ali' } }, { kind: 'hasan', x: 66, label: { tr: 'Hz. Hasan' } }, { kind: 'crowd', x: 86, scale: 4 }] },
      by: 'both',
    },
  ],
  sunni: [
    { book: 'Buhari, Sahih', ref: 'No. 447 ve 2812 (Ammar hadisi; numaralar kontrol edilecek)', says: { tr: 'Mescit inşası sırasında Peygamber Ammar için "onu azgın bir grup öldürecek" der. Bazı nüshalarda "onlar onu ateşe çağırır" ziyadesi yoktur; bu konuda Humeydi ve İbn Hacer\'in notu vardır.' }, grade: { tr: 'Sahih' }, status: 'check' },
    { book: 'Müslim, Sahih', ref: 'No. 2915 (Ebu Said el-Hudri) ve 2916 (Ümmü Seleme)', says: { tr: 'Ammar hakkında "onu azgın bir grup öldürecek" hadisi.' }, grade: { tr: 'Sahih; Buhari ve Müslim\'de geçtiği için müttefekun aleyh düzeyinde' }, url: 'https://dev.ihadis.com/en/muslim/hadith/2916a', status: 'verified' },
    { book: 'Ahmed b. Hanbel, Müsned', ref: 'No. 11166 (Dar es-Selam notu)', says: { tr: 'Ammar hadisinin Müsned\'deki rivayeti; Dar es-Selam notunda sahih olduğu ve Müslim 2915 ile örtüştüğü belirtilir.' }, grade: { tr: 'Sahih (Dar es-Selam notu)' }, url: 'https://en.tohed.com/hadith/musnad-ahmad/11166/', status: 'verified' },
    { book: 'Ahmed b. Hanbel, Müsned; İbn Kesir, el-Bidâye', ref: 'Müsned c.2 s.164 ve 206 civarı; Bidâye c.7 s.267 civarı (sayfalar kontrol edilecek)', says: { tr: 'Amr b. el-As\'ın Muaviye\'ye hadisi hatırlatması ve Muaviye\'nin "Onu getirenler öldürdü" cevabı.' }, status: 'check' },
    { book: 'Müslim, Sahih', ref: 'No. 1066 d, f, g (Zekât, Haricîler)', says: { tr: 'Hz. Ali, Peygamber\'den Harici topluluğuyla ilgili haberi nakleder; Kuranlarını okurlar ve bu aleyhlerine delildir; Hz. Ali "söz haktır, ama onunla batıl kastedilir" der.' }, grade: { tr: 'Sahih' }, url: 'https://ihadis.com/en/muslim/hadith/1066g', status: 'verified' },
    { book: 'Müslim, Sahih', ref: 'No. 1064 (Ebu Said; "hakka yakın fırka" ifadesi, numara/lafız kontrol edilecek)', says: { tr: 'Dinden fırlayacak topluluğu iki fırkadan hakka daha yakın olanın öldüreceği haberi. Nevevi gibi şârihler bu ifadeyi Hz. Ali tarafı olarak anlar (ayrıntı kontrol edilecek).' }, grade: { tr: 'Sahih' }, status: 'check' },
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
    { book: 'WikiShia, Cursing Imam Ali (ikincil Şii yayın)', ref: 'Madde', says: { tr: 'Sebb geleneğinin yaklaşık altmış yıl sürdüğü iddiası ve İbn Haldun\'a atfen Ömer b. Abdülaziz\'in yasaklaması. İkincil kaynaktır.' }, url: 'https://en.wikishia.net/view/Cursing_Imam_Hz. Ali', status: 'verified' },
  ],
  disputes: [
    {
      title: { tr: 'Azgın grup kime işaret eder?' },
      sunni: { tr: 'Ammar\'ın Sıffin\'de Hz. Ali\'nin safında şehit olduğu kaynaklarda ortaktır. Sünni çoğunluk hadisi Muaviye grubuna işaret sayar ve bunu bir ictihad hatası olarak anlar.' },
      shia: { tr: 'Ammar\'ın Sıffin\'de Hz. Ali\'nin safında şehit olduğu kaynaklarda ortaktır. Şii anlatıda bu, Muaviye tarafının haksız olduğunu gösterir.' },
    },
    {
      title: { tr: 'Müslim 2404 emir mi, soru mu?' },
      sunni: { tr: 'Müslim\'de Muaviye\'nin Sa\'d\'a Hz. Ali hakkında bir soru sorduğu yazılıdır. Bazı şârihler bunu bir emir değil, bir soru olarak okur.' },
      shia: { tr: 'Müslim\'de Muaviye\'nin Sa\'d\'a Hz. Ali hakkında bir soru sorduğu yazılıdır. Şii anlatıda bu, o dönemde sövmenin yaygın olduğuna delil sayılır.' },
    },
    {
      title: { tr: 'Hakem\'de Ebu Musa aldatıldı mı?' },
      sunni: { tr: 'Hakem toplantısı iki gelenekte de anlatılır. Modern tarihçiler, Amr\'ın Ebu Musa\'yı aldattığı sahnenin ayrıntılarına ihtiyatla bakar.' },
      shia: { tr: 'Hakem toplantısı iki gelenekte de anlatılır. Klasik anlatımlar Amr\'ın Ebu Musa\'yı aldattığını aktarır; kararın kendisi de tartışmalıdır.' },
    },
    {
      title: { tr: 'İbn Mülcem ve vefat günü' },
      sunni: { tr: 'İbn Mülcem\'in Hz. Ali\'yi sabah namazında yaraladığı anlatılır. Ölüm günü 17, 19 veya 21 Ramazan diye rivayet edilir; üç suikast planı ihtiyatla karşılanır.' },
      shia: { tr: 'İbn Mülcem\'in Hz. Ali\'yi sabah namazında yaraladığı anlatılır. Şii gelenekte vefat günü 21 Ramazan olarak anılır.' },
    },
  ],
  questions: [
    { tr: 'Peygamber, Ammar\'ı azgın bir grubun öldüreceğini haber vermişti. Sıffin\'de Ammar Hz. Ali\'nin yanındaydı. Bu haber, Ehl-i Beyt\'in yanında durmayı size nasıl düşündürüyor?' },
    { tr: 'Ammar şehit olunca hadis hatırlatıldı ve "Onu getirenler öldürdü" diye karşılandı. Bir haber ile onun yorumu arasındaki mesafe size ne söylüyor?' },
    { tr: 'Sa\'d, soru üzerine Peygamber\'in Hz. Ali hakkındaki üç sözünü saydı. Bu sözler, ona duyulan sevgiyi size nasıl anlatıyor?' },
    { tr: 'Ömer b. Abdülaziz, minberlerde Hz. Ali\'ye sövme uygulamasını kaldırdı. Bu adım, o sözlerin ağırlığını size nasıl gösteriyor?' },
    { tr: 'Peygamber, Haricîler hakkında hakka daha yakın tarafın onlarla savaşacağını haber vermişti. Hz. Ali onlarla karşılaştı. Bu haber, onun yerini size nasıl okutuyor?' },
  ],
  summary: { tr: 'Sıffin\'de Ammar, Hz. Ali\'nin safında şehit oldu. Bu olay Sünni kaynaklarında da geçmektedir (Müslim, No. 2915 ve 2916; Buhari, Sahih). Mushaflar mızraklara asıldı; Hakem ve Nehrevan geldi. Hz. Ali sabırla hakkını korudu ve bir sabah namazında şehit edildi.' },
};

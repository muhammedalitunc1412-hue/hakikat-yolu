import type { HistEvent } from '../types';

// Kaynak durumu: status 'verified' = hadithunlocked.com üzerinden metin/numara okundu (DOĞRULANDI);
// status 'check' = ikincil kaynaktan (al-islam.org vb.) alındı ya da birincil metin görülmedi (İKİNCİL / DOĞRULANMADI).
export const muta: HistEvent = {
  id: 'muta',
  date: { tr: 'Peygamber dönemi ve sonrası', en: 'The Prophet\'s era and after' },
  title: { tr: 'Mut\'a nikâhı (geçici evlilik) konusundaki ayrılık', en: 'The disagreement over mut\'a (temporary marriage)' },
  hook: { tr: 'Bir ayet kelimesi ve Peygamber dönemindeki bir uygulama, iki fıkıh okuyuşuna nasıl açıldı?', en: 'One word in a verse, a caliph\'s ban, and two legal traditions that still differ today.' },
  scenes: [
    {
      text: { tr: 'Nisâ Suresi\'nin 24. ayeti, evlenilmesi helal olan kadınları sayar ve ardından şöyle der: Onlardan faydalandığınız kadınlara mehirlerini bir farz olarak verin. Ayette geçen "istemte\'tum" kelimesi, "faydalandınız" demektir ve mut\'a kelimesiyle aynı kökten gelir. Câferî okuyuşa göre bu kelime, süresi belli nikâhı, yani mut\'ayı anlatır. Aynı kelime, Sünni okuyuşta olağan nikâh ve mehir olarak anlaşılmıştır. Ayetin dili iki okunuşa da açıktır. Câferî mektep ise kelimenin kökündeki bu anlamı ve ayetin "mehir" vurgusunu, süresi belli nikâhın Kur\'an\'daki dayanağı olarak görür.' },
      art: { bg: 'interior', props: ['scroll'], actors: [{ kind: 'man', x: 40 }, { kind: 'crowd', x: 66, scale: 5 }] },
      by: 'both',
    },
    {
      text: { tr: 'Taberî tefsirinde, İbn Abbas, Übey b. Kâ\'b ve İbn Mes\'ud gibi bazı sahabelerin bu ayeti "belirli bir süreye kadar" ibaresini ekleyerek okudukları aktarılır. Bu ek Kur\'an metninden sayılmaz, ama bu sahabelerin ayeti nasıl anladığını gösterir. Câferî mektep de Nisâ 24\'ü süresi belli nikâh olarak okumayı sürdürür. Bu nikâhın üç şartı vardır: süre, mehir ve iddet. Süre başta açıkça belirlenir, mehir kararlaştırılır. Süre bitince nikâh kendiliğinden sona erer ve kadın iddet bekler. Yani mut\'a gizli bir ilişki değil, kuralları belli bir nikâhtır.' },
      art: { bg: 'interior', props: ['scroll'], actors: [{ kind: 'man', x: 36 }, { kind: 'man', x: 64 }] },
      by: 'both',
    },
    {
      text: { tr: 'Mut\'a, Peygamber döneminde özellikle seferlerde uygulanmıştı. Sahabe **Câbir b. Abdillah**\'ın anlattığına göre bir gün Peygamber\'in sözcüsü gelip insanlara bu nikâha izin verildiğini duyurdu. Câbir, uygulamanın Peygamber\'den sonra Ebû Bekir\'in halifeliği boyunca ve Ömer\'in halifeliğinin ilk zamanlarında da sürdüğünü anlatır. Câferî mektep, bu erken uygulamayı esas alır ve süresi belli nikâhı aynı şekilde sürdürür. Câbir\'in sözü önemlidir, çünkü izin Peygamber\'in gününde verilmişti. Yasak ise ancak sonra konuşulmaya başlandı.' },
      art: { bg: 'caravan', props: ['camels', 'tents'], actors: [{ kind: 'crowd', x: 40, scale: 7 }, { kind: 'man', x: 74 }] },
      by: 'both',
    },
    {
      text: { tr: 'Yasakla ilgili rivayetler birbirini tutmaz. Bir rivayette Hz. Ali, İbn Abbas\'a Peygamber\'in Hayber gününde mut\'ayı ve evcil eşek etini yasakladığını söyler. Müslim 1406\'daki rivayete göre ise Mekke\'nin fethi yılında mut\'aya izin verildi, sonra "Allah bunu kıyamete kadar haram kıldı" denildi. Başka rivayetler yasağı Evtâs savaşına ya da Veda Haccı\'na bağlar. Yani yasağın tarihi konusunda rivayetler arasında açık bir uyumsuzluk vardır. Câferî mektep, bu dağınıklık karşısında Peygamber döneminde verilen izni esas alır ve süresi belli nikâhı sürdürür.' },
      art: { bg: 'battle', props: ['flags'], actors: [{ kind: 'prophet', x: 66, label: { tr: 'Hz. Peygamber' } }, { kind: 'crowd', x: 32, scale: 6 }] },
      by: 'sunni',
    },
    {
      text: { tr: 'Kaynaklarda Halife **Ömer**\'in bir konuşması aktarılır. Ömer bu konuşmada iki mut\'ayı yasakladığını ve yapanı cezalandıracağını söyler. Bunlardan biri hacda temettü, diğeri kadınlarla yapılan mut\'a nikâhıdır. Rivayetin bazı benzerlerinde "İkisi de Peygamber döneminde vardı" cümlesi de geçer. Câferî mektep, kadınlarla mut\'ayı bu konuşmadan önceki Peygamber uygulamasına göre sürdürür. Ona göre yasak bir halifenin sözüdür, izin ise Peygamber\'in kendi günlerine aittir. Halifenin sözü, Peygamber\'in verdiği izni kaldıramaz.' },
      art: { bg: 'city', props: ['minbar'], actors: [{ kind: 'man', x: 66, label: { tr: 'Halife Ömer' } }, { kind: 'crowd', x: 30, scale: 7 }] },
      by: 'both',
    },
    {
      text: { tr: '**Hz. Ali**\'ye şu söz nispet edilir: "Ömer yasaklamasaydı, zinaya ancak bedbaht bir kişi başvururdu." Benzer bir ifade, İbn Abbas ve Atâ üzerinden Abdürrezzâk\'ın Musannef\'inde ve Taberî tefsirinde de geçer. Sözün Hz. Ali\'ye mi yoksa İbn Abbas\'a mı ait olduğu ve sıhhati tartışmalıdır. Ama söz, mut\'anın insanları haramdan koruyan meşru bir yol olarak görüldüğünü anlatır. Câferî mektep, mut\'ayı Peygamber dönemindeki izin üzere sürdürür. Bu nikâhı helal sayanlar süreyi ve mehri şart koşar. Bu şartlar olmadan iki erişkin bu nikâha giremez.' },
      art: { bg: 'interior', props: ['scroll'], actors: [{ kind: 'ali', x: 62, label: { tr: 'Hz. Ali' } }, { kind: 'man', x: 32 }] },
      by: 'shia',
    },
    {
      text: { tr: 'İbn Abbas\'ın mut\'aya izin verdiği bildirilir. Bu fetvayı zorunluluk ve kadın azlığı gibi şartlara bağladığı da aktarılır. Onun sonradan bu görüşten tamamen vazgeçtiği haberi ise zayıf senetlerle gelir. İbn Hacer, Fethu\'l-Bârî\'de bunu anar. Kısaca mut\'a, süresi ve mehri belli olarak iki erişkin arasında kurulan geçici bir nikâhtır. Boşanma gerekmez, süre bitince nikâh sona erer ve kadın iddet bekler. Kaynaklar onu gizli bir aldatmaca olarak anlatmaz. Câferî okuyuş Nisâ 24\'ü süresi belli nikâh olarak, Sünni okuyuş ise olağan nikâh ve mehir olarak okur. Müslim 1405d\'de Câbir, uygulamanın Peygamber ve Ebû Bekir döneminde sürdüğünü, Ömer\'in yasakladığını söyler. Müslim 1406a\'da Sebre, izin verildiğini, sonra bırakmalarının söylendiğini anlatır. Buhari 4216\'da Hz. Ali, Hayber günündeki yasağı İbn Abbas\'a bildirir. Yasağın kimden ve hangi günden geldiği rivayetlere göre değişir. Nevevî bu konuda icmâ olduğunu söyler, ama Câferî mektep bu icmâyı kabul etmez. Sünni mezheplerin çoğu bugün mut\'ayı helal saymaz. Câferî mektep ise süre, mehir ve iddet şartıyla onu sürdürür.' },
      art: { bg: 'dawn', props: ['scroll'], actors: [{ kind: 'man', x: 34 }, { kind: 'woman', x: 52 }, { kind: 'crowd', x: 76, scale: 5 }] },
      by: 'both',
    },
  ],
  sunni: [
    { book: 'Buhari, Sahih', ref: 'No. 5115 (Nikâh)', says: { tr: 'Hayber savaşında Peygamber mut\'ayı ve evcil eşek etini yasakladı; Hz. Ali, İbn Abbas\'a bunu bildirir.' }, grade: { tr: 'Sahih (Buhari)' }, url: 'https://hadithunlocked.com/bukhari:5115', status: 'verified' },
    { book: 'Buhari, Sahih', ref: 'No. 5116 (İbn Abbas, zorunluluk fetvası)', says: { tr: 'İbn Abbas mut\'aya izin verir; talebesi bunun kadın azlığı gibi zor şartlara bağlı olduğunu söyler. İkincil aktarım; birincil metin bu çalışmada okunmadı.' }, grade: { tr: 'İKİNCİL: tohed.com özeti' }, url: 'https://en.tohed.com/hadith/bukhari/5116', status: 'check' },
    { book: 'Müslim, Sahih', ref: 'No. 1406c-d (Nikâh)', says: { tr: 'Fetih yılı izin verilir; sonra "Allah bunu kıyamete kadar haram kıldı" denir. Sebre b. Ma\'bed\'in rivayeti. 1406a: izin verilen mut\'ada Peygamber\'in "elinde böyle bir kadın olan onu bıraksın" demesi.' }, grade: { tr: 'Sahih' }, url: 'https://hadithunlocked.com/muslim:1406c', status: 'verified' },
    { book: 'Müslim, Sahih', ref: 'No. 1405a (Cabir b. Abdillah, Seleme b. Ekva\')', says: { tr: 'Peygamber\'in sözcüsü gelip faydalanma izni verildiğini duyurur.' }, grade: { tr: 'Sahih' }, url: 'https://hadithunlocked.com/muslim:1405a', status: 'verified' },
    { book: 'Müslim, Sahih', ref: 'No. 1217a (Cabir; Halife Ömer\'in konuşması)', says: { tr: 'Hac mut\'ası ve kadın mut\'ası; Halife Ömer ikisini yasakladığını ve cezalandıracağını söyler. Metin hadithunlocked üzerinde okundu; "iki mut\'a Peygamber döneminde vardı" cümlesi bu rivayetin paralellerinde geçer, tam lafız ayrıca kontrol edilmeli.' }, grade: { tr: 'Sahih' }, url: 'https://hadithunlocked.com/muslim:1217a', status: 'verified' },
    { book: 'Tirmizi, el-Câmi\'', ref: 'No. 1122 (İbn Abbas)', says: { tr: '"Mut\'a İslam\'ın başında idi" diyen rivayet; ayet 23:6 ile haram olduğu söylenir.' }, grade: { tr: 'Hz. Ali Za\'i: zayıf; İbn Hacer: zayıf ve şâz, zincir kopuk' }, url: 'https://hadithunlocked.com/tirmidhi:1122', status: 'verified' },
    { book: 'İbn Hacer, Fethu\'l-Bârî', ref: 'C. 9, s. 148 (tahminî; kontrol edilecek)', says: { tr: 'Mut\'a rivayetlerinin ve İbn Abbas\'ın vazgeçme rivayetlerinin değerlendirmesi.' }, grade: { tr: 'İKİNCİL: tohed.com aktarımı' }, status: 'check' },
    { book: 'Nevevî, Şerhu Müslim; Taberî, Câmiu\'l-Beyân', ref: 'Nisâ 4:24 ve Müslim 1406 şerhi', says: { tr: 'Nevevî mut\'anın izinden sonra yasaklandığını ve icmâ ile haram olduğunu belirtir; Taberî ayeti tefsir eder. Sayfa/numara kontrol edilecek.' }, grade: { tr: 'DOĞRULANMADI' }, status: 'check' },
  ],
  shia: [
    { book: 'Kuleynî, el-Kâfî', ref: 'C. 5, Kitâbü\'n-Nikâh, Bâbü\'l-Mut\'a (hadis no kontrol edilecek)', says: { tr: 'Mut\'anın şartları: belli süre, belli mehir; kadının iddeti.' }, grade: { tr: 'DOĞRULANMADI (al-islam.org ikincil atfı: C. 5, s. 453)' }, status: 'check' },
    { book: 'Tûsî, et-Tehzîb', ref: 'C. 7, Mut\'a bölümü (no kontrol edilecek)', says: { tr: 'Mut\'a hükümleri ve rivayetleri.' }, grade: { tr: 'DOĞRULANMADI' }, status: 'check' },
    { book: 'Hürr el-Âmilî, Vesâilü\'ş-Şîa', ref: 'C. 14, Ebvâbü\'l-Mut\'a', says: { tr: 'Başlıklarının tümünde "mut\'a" terimi geçen, Şii rivayetleri bir araya getiren derleme.' }, grade: { tr: 'İKİNCİL: al-islam.org atfı (C. 14, s. 452)' }, url: 'https://www.al-islam.org/shiite-encyclopedia/temporary-marriage-islam-part-6-similarities-and-differences-muta-and-regular', status: 'check' },
    { book: 'Şerîf Murtazâ, el-İntisâr', ref: 'Mut\'a mes\'elesi (sayfa kontrol edilecek)', says: { tr: 'Mut\'anın cevazına dair İmâmiyye icmâ iddiası ve delilleri.' }, grade: { tr: 'DOĞRULANMADI' }, status: 'check' },
    { book: 'Taberî, Câmiu\'l-Beyân (Şii aktarımıyla)', ref: 'C. 5, s. 18 (al-islam.org atfı)', says: { tr: '4:24\'te "ilâ ecelin müsemmâ" okuyuşunun İbn Abbas, Übey, İbn Mes\'ud ve başkalarından rivayeti.' }, grade: { tr: 'İKİNCİL: partizan makaleden; birincil metin görülmedi' }, url: 'https://al-islam.org/node/39099', status: 'check' },
  ],
  disputes: [
    {
      title: { tr: '"İstemte\'tum" ve Nisâ 4:24 ne anlama gelir?' },
      shia: { tr: 'Nisâ 4:24\'teki "istemte\'tum" kelimesi iki gelenekte de mehirle birlikte okunur. Câferî okuyuş bunu süresi belli nikâh sayar; "belirli süre" okuyuşu da bu anlama dayanak yapılır.' },
      sunni: { tr: 'Nisâ 4:24\'teki "istemte\'tum" kelimesi iki gelenekte de mehirle birlikte okunur. Sünni okuyuşta kelime olağan nikâhtan faydalanmadır; ek okuyuşlar Kur\'an metni sayılmaz, 23:6 de sınırı nikâh ve cariye olarak anılır.' },
    },
    {
      title: { tr: 'İzin kaldırıldı mı?' },
      shia: { tr: 'Peygamber döneminde mut\'a izninin verildiği iki kaynakta da anılır. Câferî mektep, yasağı Halife Ömer\'in sözüne bağlar ve ayet ile Peygamber izninin bununla kalktığını kabul etmez.' },
      sunni: { tr: 'Peygamber döneminde mut\'a izninin verildiği iki kaynakta da anılır. Sünni aktarımda izin Hayber, Fetih, Evtâs ve Veda Haccı rivayetleriyle neshedilmiş sayılır (Buhari 5115, Müslim 1406); tarihte fark vardır, sonuçta haram hükmü benimsenir.' },
    },
    {
      title: { tr: 'Halife Ömer\'in yasağı kime atfedilir?' },
      shia: { tr: 'Halife Ömer\'in iki mut\'ayı yasakladığı konuşması Müslim\'de de geçer. Câferî okuyuş, yasağı onun kendi sözüne bağlar ve Peygamber dönemindeki izni esas alır.' },
      sunni: { tr: 'Halife Ömer\'in iki mut\'ayı yasakladığı konuşması Müslim\'de de geçer. Sünni aktarımda o, Peygamber\'in koyduğu yasağı hatırlatmış ve uygulamıştır; bazı rivayetlerde yasağa dair bilgi ona sonradan ulaşmıştır.' },
    },
  ],
  questions: [
    { tr: 'Müslim 1217 Halife Ömer\'in iki mut\'ayı yasakladığını anlatır. "Peygamber döneminde vardı" cümlesi rivayetin paralellerinde geçer. Bu anlatı, yasağın hangi döneme bağlandığını nasıl düşündürür?' },
    { tr: 'Yasağın tarihi Hayber, Fetih, Evtâs ve Veda Haccı olarak farklı anlatılır. Bu tarih farkı, nesih rivayetlerini okurken nelere dikkat ettirir?' },
    { tr: 'Cabir, uygulamanın Halife Ebû Bekir ve Halife Ömer\'in ilk dönemine kadar sürdüğünü anlatır (Müslim 1405). Erken uygulamanın bu kadar sürmesi, fıkıh tarihini nasıl okutur?' },
    { tr: 'İbn Abbas\'ın fetvasını zora bağlayan rivayet ile vazgeçti diyen rivayet yan yana duruyor. Bir sahabi fetvasının son şeklini anlamak için senetlere nasıl bakılır?' },
    { tr: '"Halife Ömer yasaklamasaydı" sözünün sahibi ve zinciri tartışmalıdır. Zinciri netleşmeyen bir söz, mut\'a bahsinde hangi ağırlıkta durur?' },
  ],
  summary: { tr: 'Mut\'a, Peygamber döneminde uygulanmış bir nikâh olarak Sünni kitaplarda da anılır. Câferî fıkıh bunu belli süre, mehir ve iddet şartıyla sürdürür. Sünni mezheplerde ise sonraki yasak rivayetleriyle haram sayılır.' },
};

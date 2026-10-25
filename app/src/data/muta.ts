import type { HistEvent } from '../types';

// Kaynak durumu: status 'verified' = hadithunlocked.com üzerinden metin/numara okundu (DOĞRULANDI);
// status 'check' = ikincil kaynaktan (al-islam.org vb.) alındı ya da birincil metin görülmedi (İKİNCİL / DOĞRULANMADI).
export const muta: HistEvent = {
  id: 'muta',
  date: { tr: 'Peygamber dönemi ve sonrası', en: 'The Prophet\'s era and after' },
  title: { tr: 'Mut\'a nikâhı (geçici evlilik) konusundaki ayrılık', en: 'The disagreement over mut\'a (temporary marriage)' },
  hook: { tr: 'Bir ayetin kelimesi, Hz. Peygamber (s.a.v.) dönemindeki bir izin ve Ömer\'in yasağı. İki fıkıh bugün de ayrılır.', en: 'One word in a verse, a caliph\'s ban, and two legal traditions that still differ today.' },
  scenes: [
    {
      text: { tr: 'Nisâ suresi 4:24, evlenilmesi helal olan kadınlardan söz ederken şöyle der: "Onlardan faydalandığınız (istemte\'tum) kadınlara, mehirlerini farz olarak verin." Ayrılığın başladığı yer bu "istemte\'tum" kelimesidir: bu, olağan nikâhtan faydalanmak mıdır, yoksa süreli nikâh (mut\'a) mıdır?' },
      art: { bg: 'interior', props: ['scroll'], actors: [{ kind: 'man', x: 40 }, { kind: 'crowd', x: 66, scale: 5 }] },
      by: 'both',
    },
    {
      text: { tr: 'Nisâ 24. ayet Şii kaynaklarında mut\'ayı kasteder. Taberî tefsirinde aktarıldığına göre (ikincil aktarımla) İbn Abbas, Übey b. Kâ\'b ve İbn Mes\'ud gibi bazı sahabeden ayete "belirli bir süreye kadar" (ilâ ecelin müsemmâ) ibaresinin eklendiği okuyuş rivayet edilir. Bu ek okuyuş Kur\'an metni sayılmaz; kelime olağan nikâh ve mehir olarak da yorumlanır.' },
      art: { bg: 'interior', props: ['scroll'], actors: [{ kind: 'man', x: 36 }, { kind: 'man', x: 64 }] },
      by: 'both',
    },
    {
      text: { tr: 'Mut\'anın Peygamber döneminde, özellikle seferlerde uygulandığı Şii kaynaklarında olduğu gibi Sünni kaynaklarında da yer alır. Cabir b. Abdillah\'tan: Peygamber\'in sözcüsü gelip "Size faydalanma izni verdi" diye duyurmuştur (Müslim 1405). Cabir ayrıca bu uygulamanın Ebu Bekir döneminde ve Ömer\'in ilk zamanlarında da sürdüğünü anlatır.' },
      art: { bg: 'caravan', props: ['camels', 'tents'], actors: [{ kind: 'crowd', x: 40, scale: 7 }, { kind: 'man', x: 74 }] },
      by: 'both',
    },
    {
      text: { tr: 'Sünni kaynaklarda bu iznin sonradan kaldırıldığı aktarılır. Buhari 5115\'te Hayber günü Peygamber\'in mut\'ayı ve evcil eşek etini yasakladığı geçer; bu, Hz. Ali\'nin İbn Abbas\'a söylediği bir rivayet olarak aktarılır. Müslim 1406\'da Mekke\'nin fethi yılı izin verildiği, sonra "Allah bunu kıyamete kadar haram kıldı" denildiği anlatılır. Bazı rivayetler yasağı Evtâs veya Veda Haccı\'na yerleştirir; yasağın tarihi konusunda rivayetler birbirini tutmaz.' },
      art: { bg: 'battle', props: ['flags'], actors: [{ kind: 'prophet', x: 66, label: { tr: 'Hz. Peygamber' } }, { kind: 'crowd', x: 32, scale: 6 }] },
      by: 'sunni',
    },
    {
      text: { tr: 'Ömer halife olunca konuşmasında şöyle demiştir: "Allah Resulü\'nün döneminde iki mut\'a vardı; ikisini de ben yasaklıyorum ve bunu yapana ceza veririm" (Müslim 1217). Bu iki mut\'a, hac (temettü) ve kadınlarla mut\'adır. Bu rivayette Ömer yasağı kendisine bağlar ve yasaklanan şeyin Peygamber döneminde bulunduğunu da kendisi söyler.' },
      art: { bg: 'city', props: ['minbar'], actors: [{ kind: 'man', x: 66, label: { tr: 'Halife Ömer' } }, { kind: 'crowd', x: 30, scale: 7 }] },
      by: 'both',
    },
    {
      text: { tr: 'Şii kaynaklarına göre Hz. Ali, "Ömer yasaklamasaydı zinaya ancak bedbaht (şakî) bir kişi başvururdu" demiştir. Benzer ifade bazı Sünni kaynaklarında İbn Abbas ve Ata üzerinden geçer (Abdürrezzak, Musannef; Taberî tefsiri); sözün Hz. Ali\'ye mi İbn Abbas\'a mı ait olduğu, zincir ve sıhhat tartışmalıdır. Bu çalışmada birincil metin görülemediği için kesin bir sıhhat hükmü verilmemiştir.' },
      art: { bg: 'interior', props: ['scroll'], actors: [{ kind: 'ali', x: 62, label: { tr: 'Hz. Ali' } }, { kind: 'man', x: 32 }] },
      by: 'shia',
    },
    {
      text: { tr: 'İbn Abbas\'ın izin verdiği bildirilir. Buhari 5116\'ya göre bu fetva zorunluluk ve kadın azlığı koşullarına bağlanmıştır; İbn Abbas\'ın sonradan tamamen vazgeçtiği rivayeti ise zayıf zincirlerle gelir (İbn Hacer, Fethu\'l-Bârî). Şii fıkhında İmâmiyye, mut\'anın şartlarını sayar: süre belli olacak, mehir belirlenecek, bitişte kadın iddet bekleyecektir. Bugün Şii fıkhında mut\'a bu şartlarla geçerlidir.' },
      art: { bg: 'dawn', props: ['scroll'], actors: [{ kind: 'man', x: 34 }, { kind: 'woman', x: 52 }, { kind: 'crowd', x: 76, scale: 5 }] },
      by: 'both',
    },
  ],
  sunni: [
    { book: 'Buhari, Sahih', ref: 'No. 5115 (Nikâh)', says: { tr: 'Hayber savaşında Peygamber mut\'ayı ve evcil eşek etini yasakladı; Hz. Ali, İbn Abbas\'a bunu bildirir.' }, grade: { tr: 'Sahih (Buhari)' }, url: 'https://hadithunlocked.com/bukhari:5115', status: 'verified' },
    { book: 'Buhari, Sahih', ref: 'No. 5116 (İbn Abbas, zorunluluk fetvası)', says: { tr: 'İbn Abbas mut\'aya izin verir; talebesi bunun kadın azlığı gibi zor şartlara bağlı olduğunu söyler. İkincil aktarım; birincil metin bu çalışmada okunmadı.' }, grade: { tr: 'İKİNCİL: tohed.com özeti' }, url: 'https://en.tohed.com/hadith/bukhari/5116', status: 'check' },
    { book: 'Müslim, Sahih', ref: 'No. 1406c-d (Nikâh)', says: { tr: 'Fetih yılı izin verilir; sonra "Allah bunu kıyamete kadar haram kıldı" denir. Sebre b. Ma\'bed\'in rivayeti. 1406a: izin verilen mut\'ada Peygamber\'in "elinde böyle bir kadın olan onu bıraksın" demesi.' }, grade: { tr: 'Sahih' }, url: 'https://hadithunlocked.com/muslim:1406c', status: 'verified' },
    { book: 'Müslim, Sahih', ref: 'No. 1405a (Cabir b. Abdillah, Seleme b. Ekva\')', says: { tr: 'Peygamber\'in sözcüsü gelip faydalanma izni verildiğini duyurur.' }, grade: { tr: 'Sahih' }, url: 'https://hadithunlocked.com/muslim:1405a', status: 'verified' },
    { book: 'Müslim, Sahih', ref: 'No. 1217a (Cabir; Ömer\'in konuşması)', says: { tr: 'Hac mut\'ası ve kadın mut\'ası; Ömer ikisini yasakladığını ve cezalandıracağını söyler. Metin hadithunlocked üzerinde okundu; "iki mut\'a Peygamber döneminde vardı" cümlesi bu rivayetin paralellerinde geçer, tam lafız ayrıca kontrol edilmeli.' }, grade: { tr: 'Sahih' }, url: 'https://hadithunlocked.com/muslim:1217a', status: 'verified' },
    { book: 'Tirmizi, el-Câmi\'', ref: 'No. 1122 (İbn Abbas)', says: { tr: '"Mut\'a İslam\'ın başında idi" diyen rivayet; ayet 23:6 ile haram olduğu söylenir.' }, grade: { tr: 'Ali Za\'i: zayıf; İbn Hacer: zayıf ve şâz, zincir kopuk' }, url: 'https://hadithunlocked.com/tirmidhi:1122', status: 'verified' },
    { book: 'İbn Hacer, Fethu\'l-Bârî', ref: 'mut\'a bölümü (tahminî sayfa kaldırıldı)', says: { tr: 'Mut\'a rivayetlerinin ve İbn Abbas\'ın vazgeçme rivayetlerinin değerlendirmesi.' }, grade: { tr: 'İKİNCİL: tohed.com aktarımı' }, status: 'check' },
    { book: 'Nevevî, Şerhu Müslim; Taberî, Câmiu\'l-Beyân', ref: 'Nisâ 4:24 ve Müslim 1406 şerhi', says: { tr: 'Nevevî mut\'anın izinden sonra yasaklandığını ve icmâ ile haram olduğunu belirtir; Taberî ayeti tefsir eder. Sayfa/numara kontrol edilecek.' }, grade: { tr: 'DOĞRULANMADI' }, status: 'check' },
  ],
  shia: [
    { book: 'Kuleynî, el-Kâfî', ref: 'C. 5, Kitâbü\'n-Nikâh, Bâbü\'l-Mut\'a (hadis no kontrol edilecek)', says: { tr: 'Mut\'anın şartları: belli süre, belli mehir; kadının iddeti.' }, grade: { tr: 'DOĞRULANMADI (al-islam.org ikincil atfı; sayfa kaldırıldı)' }, status: 'check' },
    { book: 'Tûsî, et-Tehzîb', ref: 'C. 7, Mut\'a bölümü (no kontrol edilecek)', says: { tr: 'Mut\'a hükümleri ve rivayetleri.' }, grade: { tr: 'DOĞRULANMADI' }, status: 'check' },
    { book: 'Hürr el-Âmilî, Vesâilü\'ş-Şîa', ref: 'C. 14, Ebvâbü\'l-Mut\'a', says: { tr: 'Başlıklarının tümünde "mut\'a" terimi geçen, Şii rivayetleri bir araya getiren derleme.' }, grade: { tr: 'İKİNCİL: al-islam.org atfı (sayfa kaldırıldı)' }, url: 'https://www.al-islam.org/shiite-encyclopedia/temporary-marriage-islam-part-6-similarities-and-differences-muta-and-regular', status: 'check' },
    { book: 'Şerîf Murtazâ, el-İntisâr', ref: 'Mut\'a mes\'elesi (sayfa kontrol edilecek)', says: { tr: 'Mut\'anın cevazına dair İmâmiyye icmâ iddiası ve delilleri.' }, grade: { tr: 'DOĞRULANMADI' }, status: 'check' },
    { book: 'Taberî, Câmiu\'l-Beyân (Şii aktarımıyla)', ref: 'Nisâ 4:24 (al-islam.org atfı; sayfa doğrulanmadı)', says: { tr: '4:24\'te "ilâ ecelin müsemmâ" okuyuşunun İbn Abbas, Übey, İbn Mes\'ud ve başkalarından rivayeti.' }, grade: { tr: 'İKİNCİL: partizan makaleden; birincil metin görülmedi' }, url: 'https://al-islam.org/node/39099', status: 'check' },
  ],
  disputes: [
    {
      title: { tr: '"İstemte\'tum" ve Nisâ 4:24 ne anlama gelir?' },
      shia: { tr: 'Ayet mut\'ayı kapsar; "mehirlerini verin" ifadesi ve "belirli süre" okuyuşu bunu destekler. İbn Abbas gibi sahabeden aktarılan okuyuşlar buna dayanak yapılır.' },
      sunni: { tr: 'Kelime olağan nikâhtan faydalanma ve mehir anlamındadır. Ek okuyuşlar Kur\'an metni sayılmaz; 23:6 ve Nisâ\'nın diğer hükümleri nikâh ve cariyeyi sınır olarak koyar.' },
    },
    {
      title: { tr: 'İzin kaldırıldı mı (nesih)?' },
      shia: { tr: 'Peygamber\'in mut\'ayı yasakladığına dair kesin delil yoktur; yasak Ömer\'e aittir. Ömer\'in kendi sözü ("ben yasaklıyorum") bunu gösterir. Ayet ve Peygamber izni Ömer\'in yasağıyla kalkmaz.' },
      sunni: { tr: 'Hayber, Fetih, Evtâs ve Veda Haccı rivayetleriyle izin neshedildi (Buhari 5115, Müslim 1406). Yasağın tarihinde rivayet farkı vardır, fakat sonuçta mut\'a haram kalmıştır.' },
    },
    {
      title: { tr: 'Ömer\'in yasağı kime atfedilir?' },
      shia: { tr: 'Ömer yasağı kendi adına koymuştur; "iki mut\'a Peygamber döneminde vardı" sözü yasağın Peygamber\'den gelmediğini gösterir.' },
      sunni: { tr: 'Ömer, Peygamber\'in sonradan koyduğu yasağı hatırlatmış ve uygulamıştır; bazı rivayetlerde yasağa dair bilgi ona sonradan ulaşmıştır.' },
    },
  ],
  questions: [
    { tr: 'Müslim 1217\'de Ömer "iki mut\'a Peygamber döneminde vardı, ben yasaklıyorum" der. Yasağı kime atfetmiştir ve bu cümle yasağın kaynağı hakkında ne düşündürür?' },
    { tr: 'Yasağın tarihi Hayber, Fetih, Evtâs ve Veda Haccı olarak farklı rivayet edilir. Bu farklılık nesih iddiasını nasıl etkiler?' },
    { tr: 'Cabir b. Abdillah, uygulamanın Ebu Bekir ve Ömer\'in ilk dönemine kadar sürdüğünü anlatır (Müslim 1405). Yasak Peygamber\'den gelseydi, bu uygulama neden sürmüş olabilir?' },
    { tr: 'İbn Abbas\'ın fetvasını zorunluluk şartına bağlayan ve vazgeçti diyen rivayetlerin sıhhatini nasıl değerlendiririz?' },
    { tr: '"Ömer yasaklamasaydı..." sözünün sahibi (Hz. Ali mi, İbn Abbas mı) ve zinciri tartışmalıyken, bu söz delil olarak ne ağırlıktadır?' },
  ],
  summary: { tr: 'Mut\'a, Peygamber döneminde uygulanmış ve Sünni kaynaklarda sonradan yasaklandığı aktarılmıştır; Şii kaynaklarında yasak Peygamber\'den değil Ömer\'den gelir. Bugün Şii fıkhında şartlarla (süre, mehir, iddet) geçerlidir.' },
};

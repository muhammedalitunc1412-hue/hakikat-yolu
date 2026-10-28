import type { HistEvent } from '../types';

// Açılan sayfalar: el-İrşâd 2/78, 2/89, 2/93, 2/99, 2/109, 2/112, 2/113;
// el-Lühûf s. 148-150 ve s. 169; Taberî 5/416 ve 5/455; Bihâr 45/134.
// Eman kâğıdını yırtmak, mızrakta gezdirmek ve Zeynep'in hasta oğlun üzerine kapanması
// mektel anlatısıdır; bu turda o üçü için ayrı bir sayfa kilitlenmedi.
// Kollar, kırba, göz ve küpeler de mekteldedir.
export const kerbela: HistEvent = {
  id: 'kerbela',
  date: { tr: '10 Muharrem 61 H (10 Ekim 680)', en: '10 Muharram 61 AH (680)' },
  title: { tr: 'Kerbela', en: 'Karbala' },
  hook: { tr: 'Yezid\'e biat yoktu. Su kesildi. On Muharrem\'de Ehl-i Beyt şehit edildi.', en: 'No bay\'ah to Yazid. The water was cut. The Ahl al-Bayt were killed on the tenth of Muharram.' },
  scenes: [
    {
      text: { tr: 'Peygamber, Hz. Hasan ile **Hz. Hüseyin** için "cennet gençlerinin efendileridir" demişti. **Muaviye** ölünce tahtı oğlu **Yezid**\'e bıraktı. Hilafet bir saltanat olmuştu. Şii anlatıda Yezid\'in bu işe ne ilmi ne takvası vardı; içkiyle anılır, İslam\'ın ölçüsüyle ilgisi yoktu. Medine\'de biat istendi. Hz. Hüseyin eğmedi.' },
      art: { bg: 'city', props: ['flags'], actors: [{ kind: 'husayn', x: 70, label: { tr: 'Hz. Hüseyin' } }, { kind: 'man', x: 28, label: { tr: 'Yezid' } }, { kind: 'man', x: 48, label: { tr: 'Vali' } }] },
      by: 'both',
      cites: [{ side: 'sunni', i: 0 }, { side: 'shia', i: 5 }],
    },
    {
      text: { tr: 'Hz. Hüseyin Medine\'den Mekke\'ye geçti. Kûfe\'den davet mektupları yağdı. O, hemen ordu sürmedi. Amcaoğlu **Müslim b. Akîl**\'i önden gönderdi. Müslim\'in biat aldığı günler kısaydı. Vali İbn Ziyâd gelince halk dağıldı. Müslim şehit edildi. Haber kafileye geç ulaştı. Yol çoktan Kûfe\'ye dönmüştü. Bu davet, **Yezid**\'in valisinin tuzağına dönüştü.' },
      art: { bg: 'caravan', props: ['camels', 'scroll'], actors: [{ kind: 'man', x: 30, label: { tr: 'Müslim' } }, { kind: 'husayn', x: 72, label: { tr: 'Hz. Hüseyin' } }] },
      by: 'both',
      cites: [{ side: 'shia', i: 5 }],
    },
    {
      text: { tr: 'Yolda **Hürr b. Yezid er-Riyâhî** bin atlıyla kafileyi durdurdu. Öğle sıcağıydı. Hz. Hüseyin, kendisini tutmaya gelen adamlara ve atlarına su verdirdi. Düşmanı susuz bırakmadı. Hürr, kafileyi Kerbela ovasına çevirdi. 2 Muharrem konaklandı. **Ömer b. Sa\'d**, **Yezid**\'in valisi adına orduyla geldi.' },
      art: { bg: 'dune-day', props: ['sun', 'tents'], actors: [{ kind: 'man', x: 26, label: { tr: 'Hürr' } }, { kind: 'husayn', x: 62, label: { tr: 'Hz. Hüseyin' } }] },
      by: 'both',
      cites: [{ side: 'shia', i: 0 }],
    },
    {
      text: { tr: 'Fırat\'ın suyu kesildi. Tarih anlatısında bu, şehadetten üç gün öncedir. Çadırdaki hâne henüz vakurdu. Giysiler temizdi, duruşları ağırdı. Çocuklar güzeldi. Kadınlar susadı. **Hz. Hüseyin** susadı. Su, gökyüzü gibi yakındı ve yasaktı. Bu yasak, **Yezid**\'in Kûfe\'deki emrinden iniyordu. **Muaviye**\'nin kurduğu saltanat, torunun çocuklarına bir yudum suyu çok gördü.' },
      art: { bg: 'river', props: ['tents', 'flags'], actors: [{ kind: 'husayn', x: 70, label: { tr: 'Hz. Hüseyin' } }, { kind: 'woman', x: 40, label: { tr: 'Zeynep' } }, { kind: 'crowd', x: 22, scale: 4 }] },
      by: 'both',
      cites: [{ side: 'sunni', i: 3 }, { side: 'shia', i: 5 }],
    },
    {
      text: { tr: 'Aşûrâ\'dan bir gün önce, 9 Muharrem akşamıydı. Perşembe. **Şimr b. Zi\'l-Cevşen** kafilenin önüne geldi. "Kız kardeşimin oğulları nerede?" diye seslendi. Anaları **Ümmü\'l-Benîn**\'di. Şimr bu akrabalıkla **Hz. Abbas**\'ı, Cafer\'i ve Osman\'ı çağırdı. Eman, güvenlik sözüydü. **Yezid**\'in valisi Ubeydullah b. Ziyâd\'ın ordusundan, **Yezid**\'in tarafı adına geliyordu. el-Lühûf\'ta Şimr açık söyler: kardeşiniz Hüseyin\'le ölmeyin, **Yezid b. Muaviye**\'ye itaat edin. Gençler, el-İrşâd ve Taberî\'de şöyle karşılık verir: "Allah seni de emanını da lanetlesin. Resûlullah\'ın oğluna eman yokken bize mi eman veriyorsun?" **Hz. Abbas** el-Lühûf\'ta bunu kendi sesiyle bağlar: "Ellerin kurusun. Getirdiğin eman lanetli olsun, ey Allah\'ın düşmanı. Kardeşimiz ve efendimiz, Fatıma\'nın oğlu Hüseyin\'i bırakıp lanetlilerin itaatine mi girelim?" Şimr öfkeyle döner. Mektel anlatısında bu eman bir kâğıttır. Abbas onu yırtar, atar. Aynı akşam çadırın içinde **Ali b. Hüseyin** hastaydı. Sonradan Zeynelâbidîn ve Seccâd diye anılır. Teyzesi **Hz. Zeynep** başında bekliyordu. el-İrşâd\'da o geceyi kendi ağzından anlatır. Sadakat, eman kâğıdında değil, bu çadırdaydı.' },
      art: { bg: 'dune-dusk', props: ['tents', 'scroll'], actors: [{ kind: 'man', x: 28, label: { tr: 'Şimr' } }, { kind: 'man', x: 55, pose: 'raise', label: { tr: 'Abbas' } }, { kind: 'woman', x: 78, label: { tr: 'Zeynep' } }] },
      by: 'both',
      cites: [{ side: 'shia', i: 6 }, { side: 'sunni', i: 4 }, { side: 'shia', i: 7 }, { side: 'shia', i: 8 }, { side: 'shia', i: 5 }],
    },
    {
      text: { tr: 'Aşûrâ sabahı **Hürr** titredi. Cennet ile ateş arasında kaldığını söyledi. Atını sürdü, Hz. Hüseyin\'in yanına geldi, özür diledi. "Seni yolda tutan bendim" dedi. Affedildi. Saf değiştirdi. Aynı sabah şehit oldu. Tövbesi, **Yezid**\'in ordusunun içinden bir vicdanın kopmasıydı.' },
      art: { bg: 'dawn', props: ['sun', 'flags'], actors: [{ kind: 'man', x: 32, pose: 'raise', label: { tr: 'Hürr' } }, { kind: 'husayn', x: 68, label: { tr: 'Hz. Hüseyin' } }] },
      by: 'shia',
      cites: [{ side: 'shia', i: 1 }],
    },
    {
      text: { tr: '**Hz. Abbas**, Ebu\'l-Fazl, sancağın sahibiydi. Mektel onu Alemdar diye anar, Benî Hâşim\'in en güçlü kolu diye anlatır. el-Lühûf\'un bu baskısının notu ona Kamer-i Benî Hâşim der: uzun boylu, yakışıklı; **Hz. Hüseyin**\'in sancağı öldüğü gün ondaydı, su da onunla anılır. Ehl-i Beyt mektel rivayetlerine göre düşmanı yarıp Fırat\'a vardı. Kırbayı doldurdu. Suyu ağzına götürdü, içmedi. Çadırdaki çocukların susuzluğunu hatırladı. Bu yüzden vefalı denir. Dönüşte kolları bir bir kesildi. Kırbaya ok değdi, su döküldü. Gözüne ok saplandı. el-İrşâd\'da aynı gün kardeşleri önüne geçer, şehit olur. Sonra Hz. Hüseyin Fırat\'a yönelir, Abbas önündedir. Ordu onu koparır. Tek başına vuruşur, ırmağın kenarında şehit düşer. Su yine **Yezid**\'in ordusunun elinde kaldı.' },
      art: { bg: 'river', props: ['flags', 'swords'], actors: [{ kind: 'man', x: 36, pose: 'raise', label: { tr: 'Abbas' } }, { kind: 'crowd', x: 72, scale: 5 }] },
      by: 'shia',
      cites: [{ side: 'shia', i: 2 }, { side: 'shia', i: 7 }, { side: 'shia', i: 5 }],
    },
    {
      text: { tr: 'Gençler bir bir çıktı. Güzel delikanlılardı. **Ali Ekber**, Hz. Hüseyin\'in oğlu, Peygamber\'e benzetilen delikanlıydı. **Kasım**, Hasan\'ın oğluydu. Ehl-i Beyt rivayetlerinde ikisi de amcaları ve kardeşleriyle şehit oldu. Her dönüşte çadır biraz daha sessizleşti. İçeride hasta kardeşleri Ali duruyordu. Dışarıda aile vakurdu, esarete kadar o duruş bozulmadı. Her şehit, **Muaviye**\'nin kurduğu saltanatın ve **Yezid**\'in biatının bedeliydi.' },
      art: { bg: 'battle', props: ['flags', 'swords'], actors: [{ kind: 'man', x: 30, label: { tr: 'Ali Ekber' } }, { kind: 'husayn', x: 68, label: { tr: 'Hz. Hüseyin' } }] },
      by: 'shia',
      cites: [{ side: 'shia', i: 5 }],
    },
    {
      text: { tr: 'Ehl-i Beyt rivayetlerine göre **Hz. Zeynep**, üç gündür su yüzü görmeyen bebeği çıkardı. **Ali Asgar**\'dı. Küçük yüzü güzeldi, boğazı susuzdu. Hz. Hüseyin onu ordunun önüne kaldırdı, bir yudum su istedi. **Harmala b. Kâhil**\'in oku boğazına saplandı. Bebek babasının kucağında kanadı. el-Lühûf bu oku Harmala\'ya bağlar. Bir yudum su, **Yezid**\'in ordusuna çok görüldü.' },
      art: { bg: 'battle', props: ['sun', 'flags'], actors: [{ kind: 'husayn', x: 40, pose: 'raise', label: { tr: 'Hz. Hüseyin' } }, { kind: 'woman', x: 68, label: { tr: 'Zeynep' } }] },
      by: 'shia',
      cites: [{ side: 'shia', i: 3 }],
    },
    {
      text: { tr: 'Öğleden sonra meydan **Hz. Hüseyin**\'e kaldı. el-İrşâd\'da Sinân b. Enes mızrağı saplar, Havlî başı kesmek için iner ve titrer. **Şimr** iner, boğazlar, başı Havlî\'ye verir. Hasta oğlu **Ali b. Hüseyin** çadırda, döşeğindeydi. Meydanda değildi, çünkü hastalığı ağırdı. Şimr, **Yezid**\'in valisi İbn Ziyâd\'ın adamıydı. Emir zinciri Şam\'a, **Muaviye**\'nin oğluna çıkar.' },
      art: { bg: 'battle', props: ['swords', 'flags'], actors: [{ kind: 'husayn', x: 40, label: { tr: 'Hz. Hüseyin' } }, { kind: 'man', x: 70, pose: 'raise', label: { tr: 'Şimr' } }] },
      by: 'both',
      cites: [{ side: 'shia', i: 9 }, { side: 'shia', i: 8 }],
    },
    {
      text: { tr: '**Ömer b. Sa\'d** bağırdı: Hüseyin\'in göğsünü atına çiğnetecek kim var? On kişi çıktı. Atlar göğsü ve sırtı ezdiler. Bu cümle Taberî\'de durur. el-İrşâd da aynı çağrıyı ve on atlıyı yazar. Cesede yapılan bu iş, ölümden sonra da **Yezid**\'in ordusunun kinidir.' },
      art: { bg: 'dune-dusk', props: ['flags'], actors: [{ kind: 'crowd', x: 40, scale: 6 }, { kind: 'man', x: 74, label: { tr: 'Ömer b. Sa\'d' } }] },
      by: 'both',
      cites: [{ side: 'sunni', i: 1 }, { side: 'shia', i: 10 }],
    },
    {
      text: { tr: 'Çadırlara girildi. Eşya yağmalandı. el-İrşâd\'da kadınların örtüsü sırtından çekilip alınır. Bir gün önce temiz ve vakur giyinen hâne, esaretin eşiğinde soyuldu. Ehl-i Beyt mektel rivayetlerinde küçük kızların küpeleri çekilerek kulaklarından alındı. İçerde **Ali b. Hüseyin** yatıyordu, hastalığı ağırdı. Bu yüzden meydanda savaşmamıştı. Yaya askerler Şimr\'e "şu hastayı öldürelim mi?" dediler. Humeyd b. Müslim onları geri çevirdi. Ömer b. Sa\'d da hasta çocuğa dokunulmasın dedi. Ehl-i Beyt mektel rivayetlerinde **Hz. Zeynep** yeğeninin üzerine kapanır, onu kendi bedeniyle örter. Böylece Zeynelâbidîn, Seccâd, sağ kaldı. Taberî, kızların ve hasta Ali\'nin Kûfe\'ye sürüldüğünü yazar. Yağma da **Yezid**\'in zaferinin parçası sayıldı.' },
      art: { bg: 'dune-dusk', props: ['tents'], actors: [{ kind: 'woman', x: 36, label: { tr: 'Zeynep' } }, { kind: 'man', x: 58, label: { tr: 'Zeynelâbidîn' } }, { kind: 'crowd', x: 78, scale: 4 }] },
      by: 'both',
      cites: [{ side: 'sunni', i: 1 }, { side: 'shia', i: 9 }, { side: 'shia', i: 10 }, { side: 'shia', i: 5 }],
    },
    {
      text: { tr: 'Aşûrâ\'nın aynı günü **Ömer b. Sa\'d**, **Hz. Hüseyin**\'in mübarek başını Havlî b. Yezid el-Asbahî ve Humeyd b. Müslim ile Kûfe\'ye, **Yezid**\'in valisi Ubeydullah b. Ziyâd\'a gönderdi. Diğer şehitlerin başları temizlendi. el-İrşâd sayıyı yetmiş iki diye yazar. Onları Şimr, Kays b. el-Eş\'as ve Amr b. el-Haccâc götürdü. Ehl-i Beyt mektel rivayetlerinde başlar mızraklara takılır, Kûfe\'de gezdirilir. Yol burada bitmez. Baş, Şam\'a, **Muaviye**\'nin oğlu **Yezid**\'in meclisine götürülür.' },
      art: { bg: 'caravan', props: ['flags', 'camels'], actors: [{ kind: 'crowd', x: 36, scale: 5 }, { kind: 'man', x: 72, label: { tr: 'Şimr' } }] },
      by: 'both',
      cites: [{ side: 'shia', i: 10 }, { side: 'shia', i: 5 }, { side: 'shia', i: 4 }],
    },
    {
      text: { tr: 'Esir kafilesi Kûfe\'den Şam\'a, **Yezid**\'in kapısına gitti. Baş, meclisin önüne kondu. Ehl-i Beyt rivayetlerinde Yezid bir çubukla **Hz. Hüseyin**\'in dudağına vurur. **Hz. Zeynep** ayağa kalkar, sesi meclisi titretir. Taberî\'nin bir baskısında da çubuk ve Ebu Berze\'nin "Resulullah bu dudağı öperken gördüm" itirazı yazılıdır. **Muaviye**\'nin bıraktığı saltanat, Peygamber\'in torununun başı önünde eğlendi.' },
      art: { bg: 'city', props: ['flags'], actors: [{ kind: 'woman', x: 34, pose: 'raise', label: { tr: 'Zeynep' } }, { kind: 'man', x: 70, label: { tr: 'Yezid' } }] },
      by: 'both',
      cites: [{ side: 'shia', i: 4 }, { side: 'sunni', i: 2 }],
    },
  ],
  sunni: [
    { book: 'Tirmizi, el-Câmi\'', ref: 'No. 3768 (Menâkıb)', says: { tr: 'Hz. Hasan ve Hz. Hüseyin cennet gençlerinin efendileridir.' }, status: 'verified' },
    { book: 'Taberî, Târîhu\'l-Ümem ve\'l-Mülûk', ref: 'cilt 5, s. 455', says: { tr: 'Ömer b. Sa\'d\'ın çağrısıyla on kişi Hz. Hüseyin\'i atlarla çiğner, göğsü ve sırtı ezilir. Kızlar, kız kardeşler ve hasta Ali b. Hüseyin Kûfe\'ye götürülür.' }, url: 'https://lib.eshia.ir/86659/5/455', status: 'verified' },
    { book: 'Taberî, Târîh', ref: 'çubuk sahnesi; bir baskıda cilt 3, s. 341, başka baskıda cilt 5, s. 460-461', says: { tr: 'Yezid\'in elinde çubuk vardır, Hz. Hüseyin\'in dişlerine vurur. Ebu Berze itiraz eder. Sayfa baskıya göre değişir.' }, grade: { tr: 'Cümle tarih kitaplarında aktarılır; bu turda Taberî\'nin o sayfası ayrıca açılmadı.' }, status: 'check' },
    { book: 'İbnü\'l-Esîr, el-Kâmil; İbn Kesîr, el-Bidâye', ref: 'Hicrî 61, Kerbela (sayfa bu turda kilitlenmedi)', says: { tr: 'Suyun kesilmesi, katl ve esir kafilesi bu tarihlerde de anlatılır.' }, status: 'check' },
    { book: 'Taberî, Târîhu\'l-Ümem ve\'l-Mülûk', ref: 'cilt 5, s. 416', says: { tr: '9 Muharrem perşembe akşamı Şimr, Abbas, Cafer ve Osman\'ı "kız kardeşimin oğulları" diye çağırır, eman verir. Gençler "Allah seni de emanını da lanetlesin" der. Resûlullah\'ın oğluna eman yoktur.' }, url: 'https://lib.eshia.ir/86659/5/416', status: 'verified' },
  ],
  shia: [
    { book: 'Şeyh Müfid, el-İrşâd', ref: 'cilt 2, s. 78', says: { tr: 'Hürr bin atlıyla kafileyi durdurur. Hz. Hüseyin onları ve atlarını sulatır.' }, url: 'https://lib.eshia.ir/27035/2/78', status: 'verified' },
    { book: 'Şeyh Müfid, el-İrşâd', ref: 'cilt 2, s. 99', says: { tr: 'Aşûrâ sabahı Hürr cenneti seçer, Hz. Hüseyin\'in yanına gelir ve yolda onu tuttuğu için özür diler.' }, url: 'https://lib.eshia.ir/27035/2/99', status: 'verified' },
    { book: 'Şeyh Müfid, el-İrşâd', ref: 'cilt 2, s. 109', says: { tr: 'Abbas, anneleri bir olan kardeşlerini öne sürer. Onlar şehit olur. Hz. Hüseyin Fırat\'a yönelir, Abbas önündedir. Ordu Abbas\'ı koparır. O tek başına vuruşur ve öldürülür.' }, url: 'https://lib.eshia.ir/27035/2/109', grade: { tr: 'Kolların kesilmesi, kırba ve göz bu sayfada yoktur. Onlar mektel rivayetidir.' }, status: 'verified' },
    { book: 'İbn Tâvûs, el-Lühûf', ref: 's. 169', says: { tr: 'Harmala b. el-Kâhil\'in oku bebeğin boğazına saplanır. Zeynep su ister. Başka yolda bebek üç gündür susuzdur ve Hz. Hüseyin orduya bir yudum su diye seslenir.' }, url: 'https://lib.eshia.ir/27196/1/169', status: 'verified' },
    { book: 'Meclisî, Bihârü\'l-Envâr', ref: 'cilt 45, s. 134', says: { tr: 'Şam meclisinde Yezid çubukla Hz. Hüseyin\'in dişlerine vurur. Zeynep ayağa kalkar, sesi meclisi inletir. Baş, Yezid\'in önündedir.' }, url: 'https://najafdesertlibrary.com/book/%D8%A8%D8%AD%D8%A7%D8%B1-%D8%A7%D9%84%D8%A3%D9%86%D9%88%D8%A7%D8%B1/v/45/p/134', status: 'verified' },
    { book: 'Mektel kitapları (el-Lühûf, el-Hârizmî, Bihâr cilt 44-45)', ref: 'eman kâğıdının yırtılması, mızraklar, Zeynep\'in kapanması, Abbas\'ın kolları (ayrı sayfa bu turda kilitlenmedi)', says: { tr: 'Abbas\'ın eman kâğıdını yırtıp atması, başların mızraklara takılıp gezdirilmesi ve Zeynep\'in hasta Ali\'nin üzerine kapanması bu mektellerde anlatılır. Abbas\'ın suyu içmemesi, kollarının kesilmesi, kırbanın ve gözün oku; gençlerin şehadeti; kızların küpelerinin çekilmesi de buradadır. Alemdar ve en güçlü kol portresi mektelin adlandırmasıdır.' }, grade: { tr: 'Ehl-i Beyt mektel rivayetidir. Sayfa uydurulmadı. el-İrşâd 2/113\'te Zeynep\'in üzerine kapanması yoktur. Orada Humeyd askerleri geri çevirir.' }, status: 'check' },
    { book: 'Şeyh Müfid, el-İrşâd', ref: 'cilt 2, s. 89', says: { tr: '9 Muharrem perşembe akşamı Şimr, Abbas, Cafer ve Osman\'a "siz emandasınız" der. Gençler emanı lanetler. Resûlullah\'ın oğluna eman yoktur.' }, url: 'https://lib.eshia.ir/27035/2/89', grade: { tr: 'Bu sayfada kâğıdın yırtılması yoktur. Yırtma mektel anlatısıdır.' }, status: 'verified' },
    { book: 'İbn Tâvûs, el-Lühûf (el-Melehüf)', ref: 's. 148-150', says: { tr: 'Şimr, Ümmü\'l-Benîn\'in oğullarını çağırır ve Yezid b. Muaviye\'ye itaati söyler. Abbas, Fatıma\'nın oğlu Hüseyin\'i bırakmayı reddeder, getirilen emanı lanetler. Baskı notu Abbas\'ı Kamer-i Benî Hâşim diye anar ve sancağın onda olduğunu yazar.' }, url: 'https://lib.eshia.ir/27196/1/150', grade: { tr: 'Kamer-i Benî Hâşim, sancak ve Ümmü\'l-Benîn adı s. 148\'deki baskı notundadır. Not, Makâtilü\'t-Tâlibiyyîn\'e gönderir. İbn Tâvûs\'un kendi cümlesi değildir.' }, status: 'verified' },
    { book: 'Şeyh Müfid, el-İrşâd', ref: 'cilt 2, s. 93', says: { tr: 'Ali b. Hüseyin, babasının öldürüleceği sabahın akşamında hasta oturduğunu ve teyzesi Zeynep\'in kendisine baktığını söyler.' }, url: 'https://lib.eshia.ir/27035/2/93', status: 'verified' },
    { book: 'Şeyh Müfid, el-İrşâd', ref: 'cilt 2, s. 112', says: { tr: 'Sinân mızrağı saplar. Havlî titrer. Şimr Hz. Hüseyin\'i boğazlar, başı Havlî\'ye verir. Kadınların örtüsü sırtından çekilip alınır. Sayfa, döşeğindeki Ali b. Hüseyin\'de kesilir.' }, url: 'https://lib.eshia.ir/27035/2/112', status: 'verified' },
    { book: 'Şeyh Müfid, el-İrşâd', ref: 'cilt 2, s. 113', says: { tr: 'Ali b. Hüseyin ağır hastadır. "Şu hastayı öldürelim mi?" denir. Humeyd onları geri çevirir. Ömer b. Sa\'d hasta çocuğa dokunulmasın der. Sonra on kişi cesedi atla ezer. Aynı gün baş, Havlî ve Humeyd ile İbn Ziyâd\'a gönderilir. Diğer yetmiş iki baş Şimr, Kays ve Amr ile yollanır.' }, url: 'https://lib.eshia.ir/27035/2/113', grade: { tr: 'Mızrağa takıp gezdirmek bu sayfada yoktur. O, mektel anlatısıdır.' }, status: 'verified' },
  ],
  disputes: [
    {
      title: { tr: 'Biat neden reddedildi?' },
      sunni: { tr: 'Hz. Hüseyin\'in Yezid\'e biat etmediği tarihlerde yazılıdır. Kimisi çıkışı bir içtihat sayar. Şehitliği inkâr edilmez.' },
      shia: { tr: 'Ret, Yezid\'in liyakatsizliğinedir. Muaviye hilafeti saltanat yapmış, içkiyle anılan oğlunu zorla başa koymuştu. Hz. Hüseyin bu biatı eğmedi. Abbas da emanı, Yezid\'e itaat diye geri çevirdi.' },
    },
    {
      title: { tr: 'Çubuk, atlar ve başlar' },
      sunni: { tr: 'Atların cesedi çiğnemesi Taberî cilt 5, s. 455\'tedir. Başın Kûfe\'ye gönderilmesi el-İrşâd cilt 2, s. 113\'tedir. Çubuk sahnesi de Taberî\'de anılır; bazı âlimler başın Şam\'a gidişini zayıf sayar.' },
      shia: { tr: 'Atlar, mızraktaki başlar ve çubuk, Yezid\'in meclisinin ayıbı diye okunur. Zeynep\'in hutbesi bu mecliste söylenir (Bihâr, cilt 45, s. 134).' },
    },
  ],
  questions: [
    { tr: 'Hz. Hüseyin, saltanat olan bir biatı neden eğmedi? Bu ret, bugün hakkı söylemek için size ne söyler?' },
    { tr: 'Abbas\'a eman uzatıldı. Kardeşi açıkta kalırken güvenlik neden bir nimet değildir?' },
    { tr: 'Hürr, tuttuğu kafilenin safına geçti. Geç kalmış bir tövbe, insanı nasıl değiştirir?' },
    { tr: 'Abbas suyu gördü ve içmedi. Vefa, susuzlukta neye benzer?' },
    { tr: 'Ali Asgar bir yudum su için kaldırıldı. O ok, Ehl-i Beyt sevgisini nerede tutar?' },
    { tr: 'Zeynep, başın önünde ayağa kalktı. Zulmü adlandırmak size hangi cesareti hatırlatır?' },
  ],
  summary: { tr: 'Muaviye\'nin oğlu Yezid\'e biat edilmedi. 9 Muharrem akşamı Abbas emanı lanetledi. Su kesildi. Alemdar Abbas, Ali Ekber, Kasım ve Ali Asgar şehit oldu. Hasta Ali b. Hüseyin çadırda kaldı. Şimr son darbeyi vurdu. Atlar cesedi çiğnedi. Başlar Kûfe\'de İbn Ziyâd\'a, oradan Şam\'da Yezid\'e gitti. Ortak cümleler Taberî 5/416, Taberî 5/455 ve Tirmizi 3768\'dedir. Ayrıntı Ehl-i Beyt mektelindedir.' },
};

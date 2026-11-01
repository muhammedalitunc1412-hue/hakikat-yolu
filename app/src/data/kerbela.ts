import type { HistEvent } from '../types';

// Açılan sayfalar: el-İrşâd 2/78, 2/89, 2/93, 2/99, 2/109, 2/112, 2/113;
// el-Lühûf s. 148-150 ve s. 169; Taberî 5/416 ve 5/455; Bihâr 45/134.
// Eman kâğıdını yırtmak, mızrakta gezdirmek ve Zeynep'in hasta oğlun üzerine kapanması
// mektel anlatısıdır; bu turda o üçü için ayrı bir sayfa kilitlenmedi.
// Hz. Rukayye: Nefesü'l-Mehmûm 1/416 ve Müntehâ'l-Âmâl tercümesi 1/778 açıldı.
// Kâmil-i Bahâî'nin kendi sayfası açılmadı. Ad ve Şam harabesi o iki sayfada yoktur.
// Öğle namazı: Taberî 5/441, el-Lühûf s. 165, Bihâr 45/21 açıldı.
// "Oklayın, namaz kılmasın", kalkan, omuz ve bacak bu sayfalarda yoktur.
// Kollar, kırba, göz ve küpeler de mekteldedir.
export const kerbela: HistEvent = {
  id: 'kerbela',
  date: { tr: '10 Muharrem 61 H (10 Ekim 680)', en: '10 Muharram 61 AH (680)' },
  title: { tr: 'Kerbela', en: 'Karbala' },
  hook: { tr: 'Yezid\'e biat yoktu. Su kesildi. On Muharrem\'de Ehl-i Beyt şehit edildi.', en: 'No bay\'ah to Yazid. The water was cut. The Ahl al-Bayt were killed on the tenth of Muharram.' },
  scenes: [
    {
      text: { tr: '**Hz. Hüseyin**, Gadir\'de eli kaldırılan hakkın torunuydu. Peygamber, onu ve **Hz. Hasan**\'ı cennet gençlerinin efendisi diye anmıştı. Hasan, kan dökülmesin diye sulh yapmıştı. Sonra zehirlendi. **Muaviye** ölünce tahtı oğlu **Yezid**\'e bıraktı. Hilafet bir saltanattı. Yezid\'in bu işe ne ilmi ne takvası vardı. Medine\'de biat istendi. Biat, bağlılık sözüdür. Hüseyin bu biatı vermedi.' },
      art: { bg: 'city', props: ['flags'], actors: [{ kind: 'husayn', x: 70, label: { tr: 'Hz. Hüseyin' } }, { kind: 'man', x: 28, label: { tr: 'Yezid' } }, { kind: 'man', x: 48, label: { tr: 'Vali' } }] },
      by: 'both',
      cites: [{ side: 'sunni', i: 0 }, { side: 'shia', i: 5 }],
    },
    {
      text: { tr: 'Hz. Hüseyin Medine\'den Mekke\'ye geçti. Kûfe\'den davet mektupları peş peşe geldi. O, hemen ordu sürmedi. Amcaoğlu **Müslim b. Akîl**\'i önden gönderdi. Müslim\'in biat aldığı günler kısa sürdü. Vali İbn Ziyâd gelince halk dağıldı. Müslim şehit edildi. Haber kafileye geç ulaştı. Kafile çoktan Kûfe yoluna dönmüştü. Bu davet, **Yezid**\'in valisinin tuzağına dönüştü.' },
      art: { bg: 'caravan', props: ['camels', 'scroll'], actors: [{ kind: 'man', x: 30, label: { tr: 'Müslim' } }, { kind: 'husayn', x: 72, label: { tr: 'Hz. Hüseyin' } }] },
      by: 'both',
      cites: [{ side: 'shia', i: 5 }],
    },
    {
      text: { tr: 'Yolda **Hürr b. Yezid er-Riyâhî**, bin atlıyla kafileyi durdurdu. Öğle sıcağıydı. Hz. Hüseyin, kendisini tutmaya gelen adamlara ve atlarına su verdirdi. Düşmanı susuz bırakmadı. Hürr, kafileyi Kerbela ovasına çevirdi. 2 Muharrem\'de konaklandı. **Ömer b. Sa\'d**, **Yezid**\'in valisi adına orduyla geldi.' },
      art: { bg: 'dune-day', props: ['sun', 'tents'], actors: [{ kind: 'man', x: 26, label: { tr: 'Hürr' } }, { kind: 'husayn', x: 62, label: { tr: 'Hz. Hüseyin' } }] },
      by: 'both',
      cites: [{ side: 'shia', i: 0 }],
    },
    {
      text: { tr: 'Fırat\'ın suyu kesildi. Bu, şehadetten üç gün önceydi. Çadırdaki hâne henüz vakarını koruyordu. Giysiler temizdi. Duruşları ağırbaşlıydı. Çocuklar güzeldi. Kadınlar susadı. **Hz. Hüseyin** de susadı. Fırat, çadırın yanındaydı. Ama **Yezid**\'in ordusu su içmeyi yasaklamıştı. Bu yasak, **Yezid**\'in Kûfe\'deki emrinden geliyordu. **Muaviye**\'nin kurduğu saltanat, torunun çocuklarına bir yudum suyu bile çok gördü.' },
      art: { bg: 'river', props: ['tents', 'flags'], actors: [{ kind: 'husayn', x: 70, label: { tr: 'Hz. Hüseyin' } }, { kind: 'woman', x: 40, label: { tr: 'Zeynep' } }, { kind: 'crowd', x: 22, scale: 4 }] },
      by: 'both',
      cites: [{ side: 'sunni', i: 3 }, { side: 'shia', i: 5 }],
    },
    {
      text: { tr: '9 Muharrem akşamıydı. Gün perşembeydi. Bu, Aşûrâ\'dan bir gün önceydi. Aşûrâ, 10 Muharrem\'dir. Kerbela\'nın şehadet günüdür. **Şimr b. Zi\'l-Cevşen** kafilenin önüne geldi. "Kız kardeşimin oğulları nerede?" diye seslendi. Anaları **Ümmü\'l-Benîn**\'di. Şimr bu akrabalıkla **Hz. Abbas**\'ı, Cafer\'i ve Osman\'ı çağırdı. Eman, can güvenliği sözüydü. Bu söz, **Yezid**\'in valisi Ubeydullah b. Ziyâd\'ın ordusundan geliyordu. Bu söz, **Yezid**\'in tarafı adına söylenmişti. Şimr açık söyledi: kardeşiniz Hüseyin\'le ölmeyin, **Yezid b. Muaviye**\'ye itaat edin. Gençler şöyle karşılık verdi: "Allah seni de emanını da lanetlesin. Resûlullah\'ın oğluna eman yokken bize mi eman veriyorsun?" **Hz. Abbas** kendi sesiyle tamamladı: "Ellerin kurusun. Getirdiğin eman lanetli olsun, ey Allah\'ın düşmanı. Kardeşimiz ve efendimiz, Fatıma\'nın oğlu Hüseyin\'i bırakıp lanetlilerin itaatine mi girelim?" Şimr öfkeyle döndü. Eman bir kâğıttı. Abbas onu yırttı ve attı. Aynı akşam çadırın içinde **Ali b. Hüseyin** hastaydı. Sonradan Zeynelâbidîn ve Seccâd diye anılır. Teyzesi **Hz. Zeynep** başında bekliyordu. **Ali b. Hüseyin**, el-İrşâd\'da o geceyi kendi ağzından anlatır. Sadakat eman kâğıdında değildi. Bu çadırdaydı.' },
      art: { bg: 'dune-dusk', props: ['tents', 'scroll'], actors: [{ kind: 'man', x: 28, label: { tr: 'Şimr' } }, { kind: 'man', x: 55, pose: 'raise', label: { tr: 'Abbas' } }, { kind: 'woman', x: 78, label: { tr: 'Zeynep' } }] },
      by: 'both',
      cites: [{ side: 'shia', i: 6 }, { side: 'sunni', i: 4 }, { side: 'shia', i: 7 }, { side: 'shia', i: 8 }, { side: 'shia', i: 5 }],
    },
    {
      text: { tr: 'Aşûrâ sabahı **Hürr** titredi. Cennet ile ateş arasında kaldığını söyledi. Atını sürdü. Hz. Hüseyin\'in yanına geldi. Özür diledi. "Seni yolda tutan bendim" dedi. Affedildi. Saf değiştirdi. Aynı sabah şehit oldu. Bu tövbe, **Yezid**\'in ordusundan bir vicdanın ayrılmasıydı.' },
      art: { bg: 'dawn', props: ['sun', 'flags'], actors: [{ kind: 'man', x: 32, pose: 'raise', label: { tr: 'Hürr' } }, { kind: 'husayn', x: 68, label: { tr: 'Hz. Hüseyin' } }] },
      by: 'shia',
      cites: [{ side: 'shia', i: 1 }],
    },
    {
      text: { tr: 'Aşûrâ öğlesiydi. Sabahın şehitleri yerdeydi. **Hürr** gitmişti. Ashab bir bir düşüyordu. Henüz **Hz. Abbas** ve **Ali Ekber** meydana çıkmamıştı. **Yezid**\'in ordusu bu savaşı dine yamamıştı. **Muaviye**\'nin bıraktığı saltanat, biat etmeyeni halifeye baş kaldırmış diye gösteriyordu. Bu, sahte bir din görüntüsüydü. **Ebû Sümâme** yaklaştı. Canı imama feda olsun, diyordu. Bu namazı kılmış olarak Allah\'a varmak istiyordu. **Hz. Hüseyin** göğe baktı. "Namazı hatırlattın. Allah seni namaz kılanlardan etsin. Evet, ilk vakti bu." Düşmana haber salındı: namaz bitene kadar durun. **Husayn b. Nümeyr** bağırdı: "O namaz kabul olmaz." **Habîb b. Muzâhir** karşılık verdi: "Resûlullah\'ın oğlunun namazı kabul olmaz da seninki mi olur?" Yalan şöyle kurulmuştu: Hüseyin dinden çıkmıştır. Asker onun secdesini görürse yalan dağılırdı. Komutanlar seslendi: gidin, oklayın, namaz kılmasın. **Hz. Hüseyin**, **Züheyr b. Kayn** ile **Saîd b. Abdullah el-Hanefî**\'ye dedi: önüme geçin, öğleyi kılayım. Kalan ashabın yarısıyla öne geçtiler. Korku namazı kılındı. Bir ok **Hz. Hüseyin**\'e değdi. **Saîd** bedeniyle siper oldu. İmam sağa dönünce Saîd sağa durdu. Sola dönünce Saîd sola durdu. Kımıldamadı. Adım atmadı. Ashab kalkanlarıyla ve bedenleriyle imama ve cemaate kapandı. Kiminin omzu, kiminin bacağı okla delindi. Namaz bozulmasın diye yerlerinden oynamadılar. Namaz bitti. **Saîd** yere düştü. Bedeninde on üç ok vardı. Kılıç ve mızrak yaraları da vardı. "Allah onları Âd ve Semûd gibi lanetlesin. Peygamber\'e selamımı ilet. Bu yaraların acısını ona bildir. Ben sevabımı, Peygamber\'inin soyuna vefada aradım" dedi ve şehit oldu. Öğle namazı, susuz bir ovada, **Yezid**\'in sahte dininin karşısında kılınmıştı. **Muaviye**\'nin saltanatı namazı bile suç saymıştı.' },
      art: { bg: 'battle', props: ['sun', 'flags'], actors: [{ kind: 'husayn', x: 48, pose: 'raise', label: { tr: 'Hz. Hüseyin' } }, { kind: 'man', x: 28, label: { tr: 'Saîd' } }, { kind: 'man', x: 70, label: { tr: 'Züheyr' } }] },
      by: 'both',
      cites: [{ side: 'sunni', i: 5 }, { side: 'shia', i: 14 }, { side: 'shia', i: 15 }, { side: 'shia', i: 16 }],
    },
    {
      text: { tr: '**Hz. Abbas**\'ın bir adı Ebu\'l-Fazl\'dı. Sancağın sahibiydi. Ona Alemdar derler. Benî Hâşim\'in en güçlü koluydu. Kamer-i Benî Hâşim diye anılırdı. Uzun boyluydu. Yakışıklıydı. **Hz. Hüseyin**\'in sancağı, öldüğü gün ondaydı. Su da onunla anılır. Düşmanı yarıp Fırat\'a vardı. Kırbayı doldurdu. Suyu ağzına götürdü. İçmedi. Çadırdaki çocukların susuzluğunu hatırladı. Bu yüzden vefalı denir. Dönüşte kolları bir bir kesildi. Kırbaya ok değdi. Su döküldü. Gözüne ok saplandı. Aynı gün kardeşleri onun önüne geçti ve şehit oldu. Sonra Hz. Hüseyin Fırat\'a yöneldi. Abbas önündeydi. Ordu onu kopardı. Tek başına vuruştu. Irmağın kenarında şehit düştü. Su yine **Yezid**\'in ordusunun elinde kaldı.' },
      art: { bg: 'river', props: ['flags', 'swords'], actors: [{ kind: 'man', x: 36, pose: 'raise', label: { tr: 'Abbas' } }, { kind: 'crowd', x: 72, scale: 5 }] },
      by: 'shia',
      cites: [{ side: 'shia', i: 2 }, { side: 'shia', i: 7 }, { side: 'shia', i: 5 }],
    },
    {
      text: { tr: 'Gençler bir bir meydana çıktı. Güzel delikanlılardı. **Ali Ekber**, Hz. Hüseyin\'in oğluydu. Peygamber\'e benzetilen delikanlıydı. **Kasım**, Hasan\'ın oğluydu. İkisi de amcaları ve kardeşleriyle şehit oldu. Her dönüşte çadır biraz daha sessizleşti. İçeride hasta kardeşleri Ali duruyordu. Dışarıda ailenin duruşu ağırbaşlıydı. Esarete kadar bu duruş bozulmadı. Her şehit, **Muaviye**\'nin kurduğu saltanatın ve **Yezid**\'e biatın bedeliydi.' },
      art: { bg: 'battle', props: ['flags', 'swords'], actors: [{ kind: 'man', x: 30, label: { tr: 'Ali Ekber' } }, { kind: 'husayn', x: 68, label: { tr: 'Hz. Hüseyin' } }] },
      by: 'shia',
      cites: [{ side: 'shia', i: 5 }],
    },
    {
      text: { tr: '**Hz. Zeynep**, üç gündür su yüzü görmeyen bebeği çıkardı. Bebeğin adı **Ali Asgar**\'dı. Küçük yüzü güzeldi. Boğazı susuzdu. Hz. Hüseyin onu ordunun önüne kaldırdı. Bir yudum su istedi. **Harmala b. Kâhil**\'in oku boğazına saplandı. Bebek babasının kucağında kanamaya başladı. **Yezid**\'in ordusu bir yudum suyu bile çok gördü.' },
      art: { bg: 'battle', props: ['sun', 'flags'], actors: [{ kind: 'husayn', x: 40, pose: 'raise', label: { tr: 'Hz. Hüseyin' } }, { kind: 'woman', x: 68, label: { tr: 'Zeynep' } }] },
      by: 'shia',
      cites: [{ side: 'shia', i: 3 }],
    },
    {
      text: { tr: 'Öğleden sonra meydan **Hz. Hüseyin**\'e kaldı. Sinân b. Enes mızrağı sapladı. Havlî başı kesmek için indi ve titredi. **Şimr** indi. Onu boğazladı. Başı Havlî\'ye verdi. Hasta oğlu **Ali b. Hüseyin** çadırda, döşeğindeydi. Meydanda değildi. Hastalığı ağırdı. Şimr, **Yezid**\'in valisi İbn Ziyâd\'ın adamıydı. Emir zinciri Şam\'a, **Muaviye**\'nin oğluna çıkıyordu.' },
      art: { bg: 'battle', props: ['swords', 'flags'], actors: [{ kind: 'husayn', x: 40, label: { tr: 'Hz. Hüseyin' } }, { kind: 'man', x: 70, pose: 'raise', label: { tr: 'Şimr' } }] },
      by: 'both',
      cites: [{ side: 'shia', i: 9 }, { side: 'shia', i: 8 }],
    },
    {
      text: { tr: '**Ömer b. Sa\'d** bağırdı: Hüseyin\'in göğsünü atına çiğnetecek kim var? On kişi çıktı. Atlar göğsü ve sırtı ezdiler. Ölümden sonra cesede yapılan bu iş, **Yezid**\'in ordusunun kiniydi.' },
      art: { bg: 'dune-dusk', props: ['flags'], actors: [{ kind: 'crowd', x: 40, scale: 6 }, { kind: 'man', x: 74, label: { tr: 'Ömer b. Sa\'d' } }] },
      by: 'both',
      cites: [{ side: 'sunni', i: 1 }, { side: 'shia', i: 10 }],
    },
    {
      text: { tr: 'Çadırlara girildi. Eşya yağmalandı. Kadınların örtüsü sırtından çekilip alındı. Bir gün önce temiz ve ağırbaşlı giyinen hâne, esaretin eşiğinde soyuldu. Küçük kızların küpeleri çekilerek kulaklarından alındı. İçerde **Ali b. Hüseyin** yatıyordu. Hastalığı ağırdı. Bu yüzden meydanda savaşmamıştı. Yaya askerler Şimr\'e "şu hastayı öldürelim mi?" dediler. Humeyd b. Müslim onları geri çevirdi. Ömer b. Sa\'d da hasta çocuğa dokunulmasın dedi. **Hz. Zeynep** yeğeninin üzerine kapandı. Onu kendi bedeniyle örttü. Böylece Zeynelâbidîn, Seccâd, sağ kaldı. Kızlar ve hasta Ali Kûfe\'ye sürüldü. Yağma da **Yezid**\'in zaferinin parçası sayıldı.' },
      art: { bg: 'dune-dusk', props: ['tents'], actors: [{ kind: 'woman', x: 36, label: { tr: 'Zeynep' } }, { kind: 'man', x: 58, label: { tr: 'Zeynelâbidîn' } }, { kind: 'crowd', x: 78, scale: 4 }] },
      by: 'both',
      cites: [{ side: 'sunni', i: 1 }, { side: 'shia', i: 9 }, { side: 'shia', i: 10 }, { side: 'shia', i: 5 }],
    },
    {
      text: { tr: 'Aşûrâ\'nın aynı günü **Ömer b. Sa\'d**, **Hz. Hüseyin**\'in mübarek başını Havlî b. Yezid el-Asbahî ve Humeyd b. Müslim ile Kûfe\'ye, **Yezid**\'in valisi Ubeydullah b. Ziyâd\'a gönderdi. Diğer şehitlerin başları temizlendi. Sayı yetmiş ikiydi. Onları Şimr, Kays b. el-Eş\'as ve Amr b. el-Haccâc götürdü. Başlar mızraklara takıldı. Kûfe\'de gezdirildi. Yol burada bitmedi. Baş, Şam\'a, **Muaviye**\'nin oğlu **Yezid**\'in meclisine götürüldü.' },
      art: { bg: 'caravan', props: ['flags', 'camels'], actors: [{ kind: 'crowd', x: 36, scale: 5 }, { kind: 'man', x: 72, label: { tr: 'Şimr' } }] },
      by: 'both',
      cites: [{ side: 'shia', i: 10 }, { side: 'shia', i: 5 }, { side: 'shia', i: 4 }],
    },
    {
      text: { tr: 'Esir kafilesi Kûfe\'den çıktı. Şam\'da **Yezid**\'in kapısına vardı. Baş, meclisin önüne kondu. Yezid bir çubukla **Hz. Hüseyin**\'in dudağına vurdu. **Hz. Zeynep** ayağa kalktı. Sesi meclisi titretti. Ebu Berze, "Resulullah bu dudağı öperken gördüm" diye itiraz etti. **Muaviye**\'nin bıraktığı saltanat, Peygamber\'in torununun başı önünde eğlendi.' },
      art: { bg: 'city', props: ['flags'], actors: [{ kind: 'woman', x: 34, pose: 'raise', label: { tr: 'Zeynep' } }, { kind: 'man', x: 70, label: { tr: 'Yezid' } }] },
      by: 'both',
      cites: [{ side: 'shia', i: 4 }, { side: 'sunni', i: 2 }],
    },
    {
      text: { tr: 'Meclisten sonra Şam harabesinde gece oldu. **Yezid** esir hâneyi sarayının dibindeki viraneye kapatmıştı. **Muaviye**\'nin oğlu, Peygamber\'in torunlarına bir yıkıntıyı layık görmüştü. Duvarlar ıslaktı. Hasır inceydi. İçerde **Hz. Rukayye** vardı. **Hz. Hüseyin**\'in küçük kızıydı. Dört yaşındaydı. Güzeldi. Babasının dizini, sesini ve sakalının kokusunu soruyordu. "Babam nerede?" diye ağlıyordu. Teyzesi **Hz. Zeynep** onu bağrına basıyordu. Babası yolculukta, diyordu. Ağlamak dinmiyordu. Bir ara uyudu. Rüyasında babasını gördü. Uyanınca feryadı daha da büyüdü. "Babamı istiyorum." Sesi harabeden çıkıp saraya vardı. **Yezid** uyandı. Ne bu feryat, diye sordu. Küçük kızın babasını istediğini söylediler. O zaman emir verdi. Babanın mübarek başı bir tepsiye konacaktı. Örtülecekti. Yanına gönderilecekti. Getirdiler. Tepsinin üstünde bir örtü vardı. Altında bir ağırlık vardı. **Hz. Rukayye** örtüyü açtı. Babasının yüzünü gördü. Başı tepsinin içinden kaldırdı. Bağrına bastı. "Babacığım, seni kim kana boyadı? Şahdamarını kim kesti? Küçük yaşımda beni kim yetim bıraktı? Senden sonra kime güveneceğim? Bu yetime kim büyüyecek?" diye dertleşti. Dudağını babasının dudağına koydu. Kahır göğsünü doldurdu. Orada, o harabede, **Yezid**\'in zulmünün içinde ruhunu teslim etti. Şehadeti kılıçla olmadı. Babasının başını bir tepside önüne koyan saltanatla oldu.' },
      art: { bg: 'night', props: ['moon'], actors: [{ kind: 'woman', x: 40, scale: 0.72, label: { tr: 'Rukayye' } }, { kind: 'woman', x: 68, label: { tr: 'Zeynep' } }] },
      by: 'shia',
      cites: [{ side: 'shia', i: 11 }, { side: 'shia', i: 12 }, { side: 'shia', i: 13 }],
    },
  ],
  sunni: [
    { book: 'Tirmizi, el-Câmi\'', ref: 'No. 3768 (Menâkıb)', says: { tr: 'Hz. Hasan ve Hz. Hüseyin cennet gençlerinin efendileridir.' }, status: 'verified' },
    { book: 'Taberî, Târîhu\'l-Ümem ve\'l-Mülûk', ref: 'cilt 5, s. 455', says: { tr: 'Ömer b. Sa\'d\'ın çağrısıyla on kişi Hz. Hüseyin\'i atlarla çiğner, göğsü ve sırtı ezilir. Kızlar, kız kardeşler ve hasta Ali b. Hüseyin Kûfe\'ye götürülür.' }, url: 'https://lib.eshia.ir/86659/5/455', status: 'verified' },
    { book: 'Taberî, Târîh', ref: 'çubuk sahnesi; bir baskıda cilt 3, s. 341, başka baskıda cilt 5, s. 460-461', says: { tr: 'Yezid\'in elinde çubuk vardır, Hz. Hüseyin\'in dişlerine vurur. Ebu Berze itiraz eder. Sayfa baskıya göre değişir.' }, grade: { tr: 'Cümle tarih kitaplarında aktarılır; bu turda Taberî\'nin o sayfası ayrıca açılmadı.' }, status: 'check' },
    { book: 'İbnü\'l-Esîr, el-Kâmil; İbn Kesîr, el-Bidâye', ref: 'Hicrî 61, Kerbela (sayfa bu turda kilitlenmedi)', says: { tr: 'Suyun kesilmesi, katl ve esir kafilesi bu tarihlerde de anlatılır.' }, status: 'check' },
    { book: 'Taberî, Târîhu\'l-Ümem ve\'l-Mülûk', ref: 'cilt 5, s. 416', says: { tr: '9 Muharrem perşembe akşamı Şimr, Abbas, Cafer ve Osman\'ı "kız kardeşimin oğulları" diye çağırır, eman verir. Gençler "Allah seni de emanını da lanetlesin" der. Resûlullah\'ın oğluna eman yoktur.' }, url: 'https://lib.eshia.ir/86659/5/416', status: 'verified' },
    { book: 'Taberî, Târîhu\'l-Ümem ve\'l-Mülûk', ref: 'cilt 5, s. 441', says: { tr: 'Öğleyi kılarlar. Hz. Hüseyin korku namazı kıldırır. Öğleden sonra savaş kızışır, ordu ona ulaşır. Hanefî öne çıkar, sağa sola ok yağar, düşünceye kadar ayakta durur. Züheyr de yanında vuruşur.' }, url: 'https://lib.eshia.ir/86659/5/441', grade: { tr: 'Bu sayfada "oklayın, namaz kılmasın" emri, kalkan, omuz ve bacak yoktur.' }, status: 'verified' },
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
    { book: 'Abbas Kummî, Nefesü\'l-Mehmûm', ref: 'cilt 1, s. 416', says: { tr: 'Hüseyin\'in dört yaşındaki kızı rüyada babasını görür, ağlar. Yezid başı ona gönderir. Kısa rivayette kız hastalanır, birkaç gün içinde Şam\'da vefat eder. Aynı sayfadaki geniş rivayette baş bir mendille örtülüdür, leğene konmuştur. Örtü açılır. Kız başı bağrına alır, "babacığım, seni kim kana boyadı" diye dertleşir, dudağını babasının dudağına kor ve orada ruhunu teslim eder.' }, url: 'https://lib.eshia.ir/86936/1/416', grade: { tr: 'Ehl-i Beyt mektel rivayetidir. Bu sayfada kızın adı ve Şam harabesi geçmez. Mektel onu Hz. Rukayye diye, yeri harabe diye anar. Not, rivayeti Kâmil-i Bahâî cilt 2, s. 178-179\'a bağlar.' }, status: 'verified' },
    { book: 'Abbas Kummî, Müntehâ\'l-Âmâl', ref: 'Arapça tercüme (Hâşim Mîlânî), cilt 1, s. 778', says: { tr: 'Kâmil-i Bahâî\'den aktarır. Çocuklara babaları yolculukta denir. Yezid onları evine alır. Dört yaşındaki kız rüyada babasını görür. Yezid başı kucağına gönderir. Kız hastalanır, birkaç gün içinde Şam\'da vefat eder.' }, url: 'https://lib.eshia.ir/86690/1/778', grade: { tr: 'Ehl-i Beyt mektel rivayetidir. Bu sayfada ad Rukayye değildir. Harabe, tepsi ve orada dertleşerek vefat yoktur. Onlar Nefesü\'l-Mehmûm\'daki geniş rivayettedir.' }, status: 'verified' },
    { book: 'İmâdüddîn Taberî, Kâmil-i Bahâî', ref: 'eser adı (kendi sayfası bu turda açılmadı)', says: { tr: 'Nefesü\'l-Mehmûm ve Müntehâ\'l-Âmâl bu küçük kızın rivayetini Kâmil-i Bahâî\'ye bağlar. Nefes\'in notu cilt 2, s. 178-179 diye gösterir.' }, grade: { tr: 'Ehl-i Beyt mektel rivayetidir. Kâmil\'in kendi baskısı açılmadı. Sayfa uydurulmadı. Notta görülen numara, Kâmil\'in sayfası diye kilitlenmedi.' }, status: 'check' },
    { book: 'İbn Tâvûs, el-Lühûf (el-Melehüf)', ref: 's. 165', says: { tr: 'Öğle olunca Hz. Hüseyin, Züheyr ile Saîd\'i kalan ashabın yarısıyla önüne geçirir ve korku namazı kılar. Bir ok Hüseyin\'e değer. Saîd bedeniyle örter, kımıldamadan düşer. Bedeninde on üç ok, ayrıca kılıç ve mızrak yarası vardır.' }, url: 'https://lib.eshia.ir/27196/1/165', grade: { tr: 'Omuz, bacak ve kalkan bu sayfada yoktur. "Oklayın" emri de yoktur.' }, status: 'verified' },
    { book: 'Meclisî, Bihârü\'l-Envâr', ref: 'cilt 45, s. 21', says: { tr: 'Ebû Sümâme namazı hatırlatır. Hz. Hüseyin ilk vakit der, düşmandan namaz için durmalarını ister. Husayn b. Nümeyr "kabul olmaz" der. Habîb karşılık verir. Züheyr ile Saîd öne geçer. Saîd ok hedefi olur, on üç okla şehit düşer.' }, url: 'https://lib.eshia.ir/11008/45/21', grade: { tr: '"Dinden çıkmış" sözü ve "oklayın, namaz kılmasın" emri bu sayfada yoktur. Sayfadaki cümle, namazın kabul olmayacağıdır.' }, status: 'verified' },
    { book: 'Ehl-i Beyt mektel rivayeti', ref: 'öğle namazında ok emri, kalkan, omuz ve bacak (sayfa bu turda kilitlenmedi)', says: { tr: 'Komutanlar askere oklayın, namaz kılmasın diye seslenir. Ashab kalkan ve bedenle siper olur. Omuz ve bacaktan ok yer, namaz bozulmasın diye kımıldamaz. Hüseyin dinden çıkmış diye gösterilir.' }, grade: { tr: 'Ehl-i Beyt mektel rivayetidir. Sayfa uydurulmadı. Taberî 5/441, el-Lühûf s. 165 ve Bihâr 45/21 bu üç ayrıntıyı yazmaz.' }, status: 'check' },
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
      shia: { tr: 'Atlar, mızraktaki başlar ve çubuk, Yezid\'in meclisinin ayıbı diye okunur. Zeynep\'in hutbesi bu mecliste söylenir (Bihâr, cilt 45, s. 134). Mektel, aynı zulmü Hz. Rukayye\'nin harabedeki şehadetine de bağlar (Nefesü\'l-Mehmûm, cilt 1, s. 416).' },
    },
  ],
  questions: [
    { tr: 'Hz. Hüseyin, saltanat olan bir biatı neden eğmedi? Bu ret, bugün hakkı söylemek için size ne söyler?' },
    { tr: 'Abbas\'a eman uzatıldı. Kardeşi açıkta kalırken güvenlik neden bir nimet değildir?' },
    { tr: 'Hürr, tuttuğu kafilenin safına geçti. Geç kalmış bir tövbe, insanı nasıl değiştirir?' },
    { tr: 'Öğle namazı okların altında kılındı. Saîd kımıldamadı. Namaz, zulmün ortasında size ne söyler?' },
    { tr: 'Abbas suyu gördü ve içmedi. Vefa, susuzlukta neye benzer?' },
    { tr: 'Ali Asgar bir yudum su için kaldırıldı. O ok, Ehl-i Beyt sevgisini nerede tutar?' },
    { tr: 'Zeynep, başın önünde ayağa kalktı. Zulmü adlandırmak size hangi cesareti hatırlatır?' },
    { tr: 'Rukayye babasının başını bağrına aldı. Bir çocuğun kahırdan gitmesi, Yezid\'in zulmünü nerede tutar?' },
  ],
  summary: { tr: 'Muaviye\'nin oğlu Yezid\'e biat edilmedi. 9 Muharrem akşamı Abbas emanı lanetledi. Su kesildi. Aşûrâ öğlesinde korku namazı kılındı. Saîd bedeniyle siper olup on üç okla şehit oldu. Alemdar Abbas, Ali Ekber, Kasım ve Ali Asgar şehit oldu. Hasta Ali b. Hüseyin çadırda kaldı. Şimr son darbeyi vurdu. Atlar cesedi çiğnedi. Başlar Kûfe\'de İbn Ziyâd\'a, oradan Şam\'da Yezid\'e gitti. Mektelde Hz. Rukayye harabede babasının başına sarılıp orada şehit olur. Ortak cümleler Taberî 5/416, Taberî 5/441, Taberî 5/455 ve Tirmizi 3768\'dedir. Ayrıntı Ehl-i Beyt mektelindedir.' },
};

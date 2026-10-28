import type { HistEvent } from '../types';

// Açılan sayfalar: el-İrşâd 2/78 ve 2/99; el-Lühûf s. 169; Taberî, Târîh 5/455; Bihâr 45/134.
// Abbas'ın kolları, kırba ve gözü ile küpeler mektel rivayetidir; bu turda ayrı bir sayfa kilitlenmedi.
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
      text: { tr: 'Fırat\'ın suyu kesildi. Tarih anlatısında bu, şehadetten üç gün öncedir. Çocuklar susadı. Kadınlar susadı. **Hz. Hüseyin** susadı. Su, gökyüzü gibi yakındı ve yasaktı. Bu yasak, **Yezid**\'in Kûfe\'deki emrinden iniyordu.' },
      art: { bg: 'river', props: ['tents', 'flags'], actors: [{ kind: 'husayn', x: 70, label: { tr: 'Hz. Hüseyin' } }, { kind: 'woman', x: 40, label: { tr: 'Zeynep' } }, { kind: 'crowd', x: 22, scale: 4 }] },
      by: 'both',
      cites: [{ side: 'sunni', i: 3 }, { side: 'shia', i: 5 }],
    },
    {
      text: { tr: 'Aşûrâ sabahı **Hürr** titredi. Cennet ile ateş arasında kaldığını söyledi. Atını sürdü, Hz. Hüseyin\'in yanına geldi, özür diledi. "Seni yolda tutan bendim" dedi. Affedildi. Saf değiştirdi. Aynı sabah şehit oldu. Tövbesi, **Yezid**\'in ordusunun içinden bir vicdanın kopmasıydı.' },
      art: { bg: 'dawn', props: ['sun', 'flags'], actors: [{ kind: 'man', x: 32, pose: 'raise', label: { tr: 'Hürr' } }, { kind: 'husayn', x: 68, label: { tr: 'Hz. Hüseyin' } }] },
      by: 'shia',
      cites: [{ side: 'shia', i: 1 }],
    },
    {
      text: { tr: 'Ehl-i Beyt mektel rivayetlerine göre **Hz. Abbas**, Ebu\'l-Fazl, düşmanı yarıp Fırat\'a vardı. Kırbayı doldurdu. Suyu ağzına götürdü, içmedi. Çadırdaki çocukların susuzluğunu hatırladı. Bu yüzden vefalı denir. Dönüşte kolları bir bir kesildi. Kırbaya ok değdi, su döküldü. Gözüne ok saplandı. Irmağın kenarında şehit düştü. el-İrşâd, onu Fırat önünde ordudan koparılıp öldürülen kardeş diye anar. Su yine **Yezid**\'in ordusunun elinde kaldı.' },
      art: { bg: 'river', props: ['flags', 'swords'], actors: [{ kind: 'man', x: 36, pose: 'raise', label: { tr: 'Abbas' } }, { kind: 'crowd', x: 72, scale: 5 }] },
      by: 'shia',
      cites: [{ side: 'shia', i: 2 }, { side: 'shia', i: 5 }],
    },
    {
      text: { tr: 'Gençler bir bir çıktı. **Ali Ekber**, Hz. Hüseyin\'in oğlu, Peygamber\'e benzetilen delikanlıydı. **Kasım**, Hasan\'ın oğluydu. Ehl-i Beyt rivayetlerinde ikisi de amcaları ve kardeşleriyle şehit oldu. Her dönüşte çadır biraz daha sessizleşti. Her şehit, **Muaviye**\'nin kurduğu saltanatın ve **Yezid**\'in biatının bedeliydi.' },
      art: { bg: 'battle', props: ['flags', 'swords'], actors: [{ kind: 'man', x: 30, label: { tr: 'Ali Ekber' } }, { kind: 'husayn', x: 68, label: { tr: 'Hz. Hüseyin' } }] },
      by: 'shia',
      cites: [{ side: 'shia', i: 5 }],
    },
    {
      text: { tr: 'Ehl-i Beyt rivayetlerine göre **Hz. Zeynep**, üç gündür su yüzü görmeyen bebeği çıkardı. **Ali Asgar**\'dı. Hz. Hüseyin onu ordunun önüne kaldırdı, bir yudum su istedi. **Harmala b. Kâhil**\'in oku boğazına saplandı. Bebek babasının kucağında kanadı. el-Lühûf bu oku Harmala\'ya bağlar. Bir yudum su, **Yezid**\'in ordusuna çok görüldü.' },
      art: { bg: 'battle', props: ['sun', 'flags'], actors: [{ kind: 'husayn', x: 40, pose: 'raise', label: { tr: 'Hz. Hüseyin' } }, { kind: 'woman', x: 68, label: { tr: 'Zeynep' } }] },
      by: 'shia',
      cites: [{ side: 'shia', i: 3 }],
    },
    {
      text: { tr: 'Öğleden sonra meydan **Hz. Hüseyin**\'e kaldı. Ehl-i Beyt rivayetlerinde ve tarih anlatısında son darbeyi **Şimr** vurur. Baş bedenden ayrıldı. Hasta oğlu Ali, sonradan Zeynelâbidîn, çadırda sağ kaldı. Şimr, **Yezid**\'in valisi İbn Ziyâd\'ın adamıydı. Emir zinciri Şam\'a çıkar.' },
      art: { bg: 'battle', props: ['swords', 'flags'], actors: [{ kind: 'husayn', x: 40, label: { tr: 'Hz. Hüseyin' } }, { kind: 'man', x: 70, pose: 'raise', label: { tr: 'Şimr' } }] },
      by: 'both',
      cites: [{ side: 'shia', i: 5 }],
    },
    {
      text: { tr: '**Ömer b. Sa\'d** bağırdı: Hüseyin\'in göğsünü atına çiğnetecek kim var? On kişi çıktı. Atlar göğsü ve sırtı ezdiler. Bu cümle Taberî\'de durur. Cesede yapılan bu iş, ölümden sonra da **Yezid**\'in ordusunun kinidir.' },
      art: { bg: 'dune-dusk', props: ['flags'], actors: [{ kind: 'crowd', x: 40, scale: 6 }, { kind: 'man', x: 74, label: { tr: 'Ömer b. Sa\'d' } }] },
      by: 'both',
      cites: [{ side: 'sunni', i: 1 }],
    },
    {
      text: { tr: 'Çadırlara girildi. Eşya yağmalandı. Kadınlar itilip kakıldı. Ehl-i Beyt mektel rivayetlerinde küçük kızların küpeleri çekilerek kulaklarından alındı. Taberî, kızların ve hasta Ali\'nin Kûfe\'ye sürüldüğünü yazar. Yağma da **Yezid**\'in zaferinin parçası sayıldı.' },
      art: { bg: 'dune-dusk', props: ['tents'], actors: [{ kind: 'woman', x: 36, label: { tr: 'Zeynep' } }, { kind: 'crowd', x: 70, scale: 4 }] },
      by: 'both',
      cites: [{ side: 'sunni', i: 1 }, { side: 'shia', i: 5 }],
    },
    {
      text: { tr: 'Esir kafilesi Kûfe\'den Şam\'a, **Yezid**\'in kapısına gitti. Baş, meclisin önüne kondu. Ehl-i Beyt rivayetlerinde Yezid bir çubukla **Hz. Hüseyin**\'in dudağına vurur. **Hz. Zeynep** ayağa kalkar, sesi meclisi titretir. Taberî\'nin bir baskısında da çubuk ve Ebu Berze\'nin "Resulullah bu dudağı öperken gördüm" itirazı yazılıdır. Saltanat, Peygamber\'in torununun başı önünde eğlendi.' },
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
  ],
  shia: [
    { book: 'Şeyh Müfid, el-İrşâd', ref: 'cilt 2, s. 78', says: { tr: 'Hürr bin atlıyla kafileyi durdurur. Hz. Hüseyin onları ve atlarını sulatır.' }, url: 'https://lib.eshia.ir/27035/2/78', status: 'verified' },
    { book: 'Şeyh Müfid, el-İrşâd', ref: 'cilt 2, s. 99', says: { tr: 'Aşûrâ sabahı Hürr cenneti seçer, Hz. Hüseyin\'in yanına gelir ve yolda onu tuttuğu için özür diler.' }, url: 'https://lib.eshia.ir/27035/2/99', status: 'verified' },
    { book: 'Şeyh Müfid, el-İrşâd', ref: 'cilt 2, s. 109-110', says: { tr: 'Hz. Hüseyin Fırat\'a yönelir. Abbas önündedir. Abbas ordudan koparılır ve şehit edilir.' }, grade: { tr: 'Sayfa, el-İrşâd\'dan yapılan aktarımla verildi; bu turda o baskı ayrıca açılmadı.' }, status: 'check' },
    { book: 'İbn Tâvûs, el-Lühûf', ref: 's. 169', says: { tr: 'Harmala b. el-Kâhil\'in oku bebeğin boğazına saplanır. Zeynep su ister. Başka yolda bebek üç gündür susuzdur ve Hz. Hüseyin orduya bir yudum su diye seslenir.' }, url: 'https://lib.eshia.ir/27196/1/169', status: 'verified' },
    { book: 'Meclisî, Bihârü\'l-Envâr', ref: 'cilt 45, s. 134', says: { tr: 'Şam meclisinde Yezid çubukla Hz. Hüseyin\'in dişlerine vurur. Zeynep ayağa kalkar, sesi meclisi inletir.' }, url: 'https://najafdesertlibrary.com/book/%D8%A8%D8%AD%D8%A7%D8%B1-%D8%A7%D9%84%D8%A3%D9%86%D9%88%D8%A7%D8%B1/v/45/p/134', status: 'verified' },
    { book: 'Mektel kitapları (el-Lühûf, el-Hârizmî, Bihâr cilt 44-45)', ref: 'Abbas, Ali Ekber, Kasım ve küpeler (ayrı sayfa bu turda kilitlenmedi)', says: { tr: 'Abbas\'ın suyu içmemesi, kollarının kesilmesi, kırbanın ve gözün oku; gençlerin şehadeti; kızların küpelerinin çekilmesi bu mektellerde anlatılır.' }, grade: { tr: 'Ehl-i Beyt mektel rivayetidir. Sayfa uydurulmadı.' }, status: 'check' },
  ],
  disputes: [
    {
      title: { tr: 'Biat neden reddedildi?' },
      sunni: { tr: 'Hz. Hüseyin\'in Yezid\'e biat etmediği tarihlerde yazılıdır. Kimisi çıkışı bir içtihat sayar. Şehitliği inkâr edilmez.' },
      shia: { tr: 'Ret, Yezid\'in liyakatsizliğinedir. Muaviye hilafeti saltanat yapmış, içkiyle anılan oğlunu zorla başa koymuştu. Hz. Hüseyin bu biatı eğmedi.' },
    },
    {
      title: { tr: 'Çubuk ve atlar' },
      sunni: { tr: 'Atların cesedi çiğnemesi Taberî cilt 5, s. 455\'tedir. Çubuk sahnesi de Taberî\'de anılır; bazı âlimler başın Şam\'a gidişini zayıf sayar.' },
      shia: { tr: 'Atlar ve çubuk, Yezid\'in meclisinin ayıbı diye okunur. Zeynep\'in hutbesi bu mecliste söylenir (Bihâr, cilt 45, s. 134).' },
    },
  ],
  questions: [
    { tr: 'Hz. Hüseyin, saltanat olan bir biatı neden eğmedi? Bu ret, bugün hakkı söylemek için size ne söyler?' },
    { tr: 'Hürr, tuttuğu kafilenin safına geçti. Geç kalmış bir tövbe, insanı nasıl değiştirir?' },
    { tr: 'Abbas suyu gördü ve içmedi. Vefa, susuzlukta neye benzer?' },
    { tr: 'Ali Asgar bir yudum su için kaldırıldı. O ok, Ehl-i Beyt sevgisini nerede tutar?' },
    { tr: 'Zeynep, başın önünde ayağa kalktı. Zulmü adlandırmak size hangi cesareti hatırlatır?' },
  ],
  summary: { tr: 'Muaviye\'nin oğlu Yezid\'e biat edilmedi. Su kesildi. Abbas, Ali Ekber, Kasım ve Ali Asgar şehit oldu. Şimr son darbeyi vurdu. Atlar cesedi çiğnedi. Esirler Şam\'da Yezid\'in çubuğunun önüne geldi. Ortak cümleler Taberî 5/455 ve Tirmizi 3768\'dedir. Ayrıntı Ehl-i Beyt mektelindedir.' },
};

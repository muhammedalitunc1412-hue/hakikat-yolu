import type { HistEvent } from '../types';

// Keşşî, Ricâl; Şeyh Müfid, el-İrşâd; Meclisî, Bihârü'l-Envâr.
// Bu turda cilt/sayfa kilitlenmedi. Sayfa numarası ayrıca verilmedi.
export const meysem: HistEvent = {
  id: 'meysem',
  date: { tr: '60 H (680), Kûfe', en: '60 AH (680), Kufa' },
  title: { tr: 'Meysem et-Temmâr', en: 'Maytham al-Tammar' },
  hook: { tr: 'Hz. Ali, hurma satan dostuna asılacağı ağacı önceden gösterdi. O ağaç, hicri 60\'ta dar ağacı oldu.', en: 'Hz. Ali showed his friend the palm on which he would be hanged. In 60 AH that tree became the gallows.' },
  scenes: [
    {
      text: { tr: '**Meysem et-Temmâr**, Kûfe çarşısında hurma satardı. Azatlı bir köleydi. Dilenci değildi. Kendi tezgâhının sahibiydi. **Hz. Ali**\'ye yakınlığıyla tanınırdı. Ondan öğrendiğini, hurmanın başında anlatırdı. Çarşı, onun için bir ders yeri oldu. Yıllar sonra İbn Ziyâd Kûfe\'ye vali olunca bu bağlılık, başına geleceklerin sebebi olacaktı. Seven, tezgâhı bir geçim diye okumaz. Ehl-i Beyt\'in kapısının, bir hurma sergisinde de açık durduğunu görür.' },
      art: { bg: 'city', props: ['palms', 'sun'], actors: [{ kind: 'man', x: 42, label: { tr: 'Meysem' } }, { kind: 'ali', x: 70, label: { tr: 'Hz. Ali' } }] },
      by: 'shia',
      cites: [{ side: 'shia', i: 0 }, { side: 'shia', i: 1 }],
    },
    {
      text: { tr: 'Rivayete göre **Hz. Ali**, bir gün **Meysem**\'e Ehl-i Beyt\'e bağlılığı yüzünden öldürüleceğini söyledi. Asılacağı hurma ağacını gösterdi. Meysem sonradan o ağacın yanına uğradı. Orada namaz kıldı. Kökünü suladı. Kûfe\'de herkesin geçtiği bir ağaç, onun için bir haber oldu. Korkuyla kaçmadı. Ağacı besledi. Seven, sulamayı bir alışkanlık diye okumaz. Ölümünü önceden bilen birinin, o yere neden sevgiyle döndüğünü görür.' },
      art: { bg: 'oasis', props: ['palms', 'sun'], actors: [{ kind: 'ali', x: 36, label: { tr: 'Hz. Ali' } }, { kind: 'man', x: 64, pose: 'sit', label: { tr: 'Meysem' } }] },
      by: 'shia',
      cites: [{ side: 'shia', i: 0 }, { side: 'shia', i: 2 }],
    },
    {
      text: { tr: '**Hz. Ali**\'nin şehadetinden sonra bazı beldelerde hutbelerde ona sövüldü. Bu uygulamaya karşı çıkan **Hucr b. Adî** ile arkadaşları öldürüldü. Kûfe\'de Hz. Ali\'yi açıkça savunmanın bedeli ağırlaştı. **Meysem** yine de çarşıda Ehl-i Beyt\'i anlatmayı sürdürdü. Hurma tezgâhı, bir korku kürsüsü olmadı. Seven, suskun şehri bir mecburiyet diye okumaz. Tezgâhın başında duran adamın, minberin istediği laneti neden söylemediğini görür.' },
      art: { bg: 'city', props: ['minbar'], actors: [{ kind: 'man', x: 30, pose: 'raise', label: { tr: 'Meysem' } }, { kind: 'crowd', x: 68, scale: 6 }] },
      by: 'shia',
      cites: [{ side: 'shia', i: 1 }],
    },
    {
      text: { tr: 'Hicrî 60 yılında **Yezid**\'in Kûfe valisi **Ubeydullah b. Ziyâd**, **Meysem**\'i yakalattı. Ondan **Hz. Ali** ile bağını reddetmesi istendi. Bu söz, canını kurtarabilirdi. Meysem söylemedi. Hz. Ali\'nin adını inkâr etmedi. Çarşıda yıllarca anlattığı bağlılık, bu kez valinin huzurunda da durdu. Zindan, bir hurma tezgâhının sahibine dar geldi. Seven, reddi bir inat diye okumaz. Canı kurtaran cümleyi, neden söylemediğini görür.' },
      art: { bg: 'interior', actors: [{ kind: 'man', x: 36, label: { tr: 'Meysem' } }, { kind: 'man', x: 70, label: { tr: 'İbn Ziyâd' } }] },
      by: 'shia',
      cites: [{ side: 'shia', i: 0 }, { side: 'shia', i: 1 }],
    },
    {
      text: { tr: 'Rivayete göre **Meysem**, **Hz. Ali**\'nin yıllar önce gösterdiği hurma ağacına asıldı. Oradan kendisini görmeye gelenlere seslendi. **Ehl-i Beyt**\'in faziletlerini anlattı. İbn Ziyâd, konuşmanın sürdüğünü duyunca dilinin kesilmesini emretti. Meysem orada öldürüldü. Yıllarca suladığı ağaç, son sözlerinin yeri oldu. Hz. Ali\'nin haber verdiği gibi oldu. Seven, asılmayı bir ceza dosyası diye okumaz. Dil kesilinceye kadar neden Ehl-i Beyt\'i andığını görür.' },
      art: { bg: 'dawn', props: ['palms'], actors: [{ kind: 'man', x: 48, label: { tr: 'Meysem' } }, { kind: 'crowd', x: 74, scale: 5 }] },
      by: 'shia',
      cites: [{ side: 'shia', i: 0 }, { side: 'shia', i: 1 }, { side: 'shia', i: 2 }],
    },
    {
      text: { tr: '**Meysem**\'in öldürüldüğü Kûfe, kısa süre sonra **Hz. Hüseyin**\'i mektuplarla davet eden şehirdi. Vali **İbn Ziyâd**, davetin arkasındaki desteği dağıttı. Çarşıda bir hurma satıcısına yapılan baskı, **Müslim b. Akîl** şehre gelince daha geniş bir çevreyi kuşattı. Hurma ağacının altında biten söz, Fırat\'ın kıyısında sürecekti. Kûfe, bir yıl sonra Kerbelâ ordusunu da çıkardı. Seven, Meysem\'i Kerbelâ\'dan ayrı bir adam diye okumaz. Aynı şehrin, aynı valinin, aynı suskunluğun ilk kurbanını görür.' },
      art: { bg: 'dune-dusk', props: ['palms', 'flags'], actors: [{ kind: 'crowd', x: 30, scale: 5 }, { kind: 'husayn', x: 72, label: { tr: 'Hz. Hüseyin' } }] },
      by: 'shia',
      cites: [{ side: 'shia', i: 1 }],
    },
  ],
  sunni: [],
  shia: [
    { book: 'Keşşî, Ricâl', ref: 'Meysem et-Temmâr maddesi (sayfa numarası ayrıca verilmedi)', says: { tr: 'Hz. Ali\'nin Meysem\'e asılacağını, dilinin kesileceğini ve hurma ağacını haber vermesi. Meysem\'in o ağacın yanında namaz kılıp su vermesi. Hicri 60\'ta İbn Ziyâd\'ın onu astırması. Sayfa numarası ayrıca verilmedi.' }, status: 'check' },
    { book: 'Şeyh Müfid, el-İrşâd', ref: 'Meysem bölümü (sayfa numarası ayrıca verilmedi)', says: { tr: 'Meysem\'in Kûfe\'de hurma sattığı, Hz. Ali\'nin dostu olduğu, teberriyi reddettiği ve asıldığı. Sayfa numarası ayrıca verilmedi.' }, url: 'https://al-islam.org/kitab-al-irshad-book-shaykh-al-mufid', status: 'check' },
    { book: 'Meclisî, Bihârü\'l-Envâr', ref: 'Meysem et-Temmâr (cilt ve sayfa numarası ayrıca verilmedi)', says: { tr: 'Kehanet, ağaç, asılma, gem ve dilin kesilmesi bu derlemede nakledilir. Sayfa numarası ayrıca verilmedi.' }, status: 'check' },
  ],
  questions: [
    { tr: 'Meysem, asılacağı ağacı yıllar önce biliyordu. Yine de o ağacın köküne su verdi. Bu bekleyiş size ne söyler?' },
    { tr: 'Minberlerde Hz. Ali\'ye lanet okunurken Meysem susmadı. Ehl-i Beyt sevgisini yüksek sesle söylemek size ne öğretir?' },
    { tr: 'Dar ağacında bile faziletini anlattı. Dilini kestiler. Hz. Ali\'nin sözü harfiyen çıktı. Bu sahne, Kerbela\'dan önce size ne haber verir?' },
  ],
  summary: { tr: 'Meysem et-Temmâr, Kûfe\'de hurma satan, Hz. Ali\'nin dostuydu. Hz. Ali ona asılacağını, dilinin kesileceğini ve ağacı haber verdi. Hicri 60\'ta İbn Ziyâd teberri istedi. Meysem reddetti. Haber verilen ağaçta şehit edildi.' },
};

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
      text: { tr: 'Kûfe\'de bir hurma satıcısı vardı. Adı **Meysem et-Temmâr**\'dı. Azatlı bir köleydi. **Hz. Ali**\'nin en yakın dostlarındandı. İlmini ondan almıştı. Çarşıda hurma dizer, Hz. Ali\'nin adını sevgiyle anardı. Ehl-i Beyt\'in kapısı, bu tezgâhın önünde de açıktı.' },
      art: { bg: 'city', props: ['palms', 'sun'], actors: [{ kind: 'man', x: 42, label: { tr: 'Meysem' } }, { kind: 'ali', x: 70, label: { tr: 'Hz. Ali' } }] },
      by: 'shia',
      cites: [{ side: 'shia', i: 0 }, { side: 'shia', i: 1 }],
    },
    {
      text: { tr: 'Bir gün **Hz. Ali**, **Meysem**\'i çağırdı. Ehl-i Beyt rivayetinde ona sonrasını haber verdi. "Benden sonra Ehl-i Beyt sevgisi yüzünden asılacaksın. Dilin kesilecek." Asılacağı hurma ağacını da gösterdi. Meysem o ağacın yanına gider, namaz kılar, köküne su verirdi. Ağaç, henüz gölgeydi. O, gölgesinde bekleyen ölümü biliyordu.' },
      art: { bg: 'oasis', props: ['palms', 'sun'], actors: [{ kind: 'ali', x: 36, label: { tr: 'Hz. Ali' } }, { kind: 'man', x: 64, pose: 'sit', label: { tr: 'Meysem' } }] },
      by: 'shia',
      cites: [{ side: 'shia', i: 0 }, { side: 'shia', i: 2 }],
    },
    {
      text: { tr: '**Hz. Ali** şehit olunca **Muaviye** minberlerden ona lanet ettirdi. Cuma hutbesi sövgüyle açıldı. Bu zulme dayanamayan **Hucr b. Adî** ve arkadaşları öldürüldü. Hz. Ali dostları Kûfe\'de susmaya zorlandı. **Meysem** susmadı. **Hz. Ali**\'nin hakkını savunmaktan vazgeçmedi. ==Ehl-i Beyt==\'in faziletini anlatmayı bırakmadı.' },
      art: { bg: 'city', props: ['minbar'], actors: [{ kind: 'man', x: 30, pose: 'raise', label: { tr: 'Meysem' } }, { kind: 'crowd', x: 68, scale: 6 }] },
      by: 'shia',
      cites: [{ side: 'shia', i: 1 }],
    },
    {
      text: { tr: 'Hicri 60\'tı. **Muaviye** ölmüş, kurduğu zulüm düzeni ayaktaydı. **Yezid**\'in Kûfe valisi **Ubeydullah b. Ziyâd**, **Meysem**\'i yakalattı. Ondan teberri istedi. Teberri, **Hz. Ali**\'den beri olduğunu söylemektir. Meysem reddetti. Hz. Ali\'nin adını inkâr etmedi. Zindan, bir hurma tezgâhının sahibine dar geldi.' },
      art: { bg: 'interior', actors: [{ kind: 'man', x: 36, label: { tr: 'Meysem' } }, { kind: 'man', x: 70, label: { tr: 'İbn Ziyâd' } }] },
      by: 'shia',
      cites: [{ side: 'shia', i: 0 }, { side: 'shia', i: 1 }],
    },
    {
      text: { tr: '**Meysem**, **Hz. Ali**\'nin yıllar önce gösterdiği hurma ağacına asıldı. Dar ağacında bile halka ==Ehl-i Beyt==\'in faziletini anlattı. Emevilerin zulmünü saydı. **İbn Ziyâd** bunu duyunca ağzına gem vurdurdu. Dilini kestirdi. Meysem orada şehit edildi. Hz. Ali\'nin haber verdiği gibi oldu. Asılma, dil ve ağaç, söylediği yerdeydi.' },
      art: { bg: 'dawn', props: ['palms'], actors: [{ kind: 'man', x: 48, label: { tr: 'Meysem' } }, { kind: 'crowd', x: 74, scale: 5 }] },
      by: 'shia',
      cites: [{ side: 'shia', i: 0 }, { side: 'shia', i: 1 }, { side: 'shia', i: 2 }],
    },
    {
      text: { tr: 'Aynı düzen, bir yıl sonra Kerbela\'da suyu kesecekti. **Hz. Hüseyin**, **Yezid**\'e biat etmedi. **Meysem**\'in asıldığı Kûfe, o orduyu da çıkaran şehirdi. Hurma ağacının altında biten söz, Fırat\'ın kıyısında sürecekti.' },
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

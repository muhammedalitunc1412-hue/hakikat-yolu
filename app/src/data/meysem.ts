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
      text: { tr: '**Meysem et-Temmâr**, Kûfe çarşısında hurma satarak geçimini sağlayan azatlı bir köleydi. **Hz. Ali**\'ye yakınlığıyla tanınır, ondan öğrendiklerini çevresindekilere aktarırdı. Yıllar sonra İbn Ziyâd Kûfe\'ye vali olduğunda, Meysem\'in bu bağlılığı başına geleceklerin sebebi olacaktı.' },
      art: { bg: 'city', props: ['palms', 'sun'], actors: [{ kind: 'man', x: 42, label: { tr: 'Meysem' } }, { kind: 'ali', x: 70, label: { tr: 'Hz. Ali' } }] },
      by: 'shia',
      cites: [{ side: 'shia', i: 0 }, { side: 'shia', i: 1 }],
    },
    {
      text: { tr: 'Rivayete göre **Hz. Ali**, bir gün **Meysem**\'e Ehl-i Beyt\'e bağlılığı yüzünden öldürüleceğini söyledi ve asılacağı hurma ağacını gösterdi. Meysem sonradan o ağacın yanına uğrar, orada namaz kılar ve kökünü sulardı. Kûfe\'de her gün yanından geçilen bir hurma ağacı, onun için artık nasıl bir sınavla karşılaşacağını hatırlatan bir yerdi.' },
      art: { bg: 'oasis', props: ['palms', 'sun'], actors: [{ kind: 'ali', x: 36, label: { tr: 'Hz. Ali' } }, { kind: 'man', x: 64, pose: 'sit', label: { tr: 'Meysem' } }] },
      by: 'shia',
      cites: [{ side: 'shia', i: 0 }, { side: 'shia', i: 2 }],
    },
    {
      text: { tr: '**Hz. Ali**\'nin şehadetinden sonra bazı beldelerde hutbelerde ona sövülmeye başlandı. Bu uygulamaya karşı çıkan **Hucr b. Adî** ile arkadaşları öldürüldü. Kûfe\'de Hz. Ali\'yi açıkça savunmanın bedeli ağırlaşırken **Meysem**, çarşıda ve çevresinde Ehl-i Beyt\'i anlatmayı sürdürdü.' },
      art: { bg: 'city', props: ['minbar'], actors: [{ kind: 'man', x: 30, pose: 'raise', label: { tr: 'Meysem' } }, { kind: 'crowd', x: 68, scale: 6 }] },
      by: 'shia',
      cites: [{ side: 'shia', i: 1 }],
    },
    {
      text: { tr: 'Hicrî 60 yılında **Yezid**\'in Kûfe valisi **Ubeydullah b. Ziyâd**, **Meysem**\'i yakalattı. Meysem\'den **Hz. Ali** ile bağını reddettiğini söylemesi istendi. Bu sözle canını kurtarabilirdi, fakat kendisinden isteneni söylemedi. Çarşıda yıllarca açıkça anlattığı bağlılığı, bu kez valinin huzurunda savunmak zorunda kaldı.' },
      art: { bg: 'interior', actors: [{ kind: 'man', x: 36, label: { tr: 'Meysem' } }, { kind: 'man', x: 70, label: { tr: 'İbn Ziyâd' } }] },
      by: 'shia',
      cites: [{ side: 'shia', i: 0 }, { side: 'shia', i: 1 }],
    },
    {
      text: { tr: 'Rivayete göre **Meysem**, **Hz. Ali**\'nin yıllar önce gösterdiği hurma ağacına asıldı. Oradan kendisini görmeye gelenlere seslenerek **Ehl-i Beyt**\'in faziletlerinden söz etti. Meysem\'in konuşmayı sürdürdüğünü öğrenen **İbn Ziyâd**, onu susturmak için dilinin kesilmesini emretti. Meysem orada öldürüldü. Yıllarca kökünü suladığı ağaç, onun son sözlerinin duyulduğu yer olarak hatırlandı.' },
      art: { bg: 'dawn', props: ['palms'], actors: [{ kind: 'man', x: 48, label: { tr: 'Meysem' } }, { kind: 'crowd', x: 74, scale: 5 }] },
      by: 'shia',
      cites: [{ side: 'shia', i: 0 }, { side: 'shia', i: 1 }, { side: 'shia', i: 2 }],
    },
    {
      text: { tr: '**Meysem**\'in öldürüldüğü Kûfe, kısa süre sonra **Hz. Hüseyin**\'i mektuplarla davet eden şehirdi. Ancak vali **İbn Ziyâd**, davetin arkasındaki desteği dağıtmak için harekete geçti. Kûfe çarşısında bir hurma satıcısının karşılaştığı baskı, Hz. Hüseyin\'in elçisi **Müslim b. Akîl** şehre geldiğinde daha geniş bir çevreyi kuşatacaktı.' },
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

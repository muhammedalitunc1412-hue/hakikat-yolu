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
      text: { tr: '**Meysem et-Temmâr**, Kûfe çarşısında hurma satan bir adamdı. Temmâr, hurmacı demektir. Önceden köleydi, ama sonra azat edilmişti. Dilenci değildi. Kendi tezgâhının sahibiydi ve alnının teriyle geçimini sağlıyordu. **Hz. Ali**\'ye olan yakınlığıyla tanınırdı. Meysem de ondan öğrendiklerini, hurma satarken müşterilerine anlatırdı. Çarşının ortasındaki bu küçük tezgâh, Ehl-i Beyt\'in sözlerinin duyulduğu bir ders yerine dönüşmüştü. Yıllar sonra bu bağlılık, onun canına mal olacaktı.' },
      art: { bg: 'city', props: ['palms', 'sun'], actors: [{ kind: 'man', x: 42, label: { tr: 'Meysem' } }, { kind: 'ali', x: 70, label: { tr: 'Hz. Ali' } }] },
      by: 'partial',
      cites: [{ side: 'shia', i: 0 }, { side: 'shia', i: 1 }, { side: 'sunni', i: 0 }],
    },
    {
      text: { tr: 'Rivayete göre bir gün **Hz. Ali**, **Meysem**\'e Ehl-i Beyt\'e olan bağlılığı yüzünden öldürüleceğini haber verdi. Ona asılacağı hurma ağacını gösterdi ve dilinin kesileceğini de söyledi. Meysem bu haberden korkmadı. Kaçmak yerine, o günden sonra sık sık o ağacın yanına gitti. Ağacın dibinde namaz kıldı ve kökünü suladı. Kûfe\'de herkesin önünden geçip gittiği sıradan bir hurma ağacı, Meysem için ölümünü ve imamına olan sadakatini hatırlatan bir yer oldu. Ölümünü önceden bilen bu adam, o ağaca sevgiyle bakıyordu.' },
      art: { bg: 'oasis', props: ['palms', 'sun'], actors: [{ kind: 'ali', x: 36, label: { tr: 'Hz. Ali' } }, { kind: 'man', x: 64, pose: 'sit', label: { tr: 'Meysem' } }] },
      by: 'partial',
      cites: [{ side: 'shia', i: 0 }, { side: 'shia', i: 2 }, { side: 'sunni', i: 0 }],
    },
    {
      text: { tr: '**Hz. Ali**\'nin şehadetinden sonra Kûfe\'de zor günler başladı. Emevi valileri minberlerde Hz. Ali\'ye sövdürüyordu. Bu laneti kabul etmeyen **Hucr b. Adî** ve arkadaşları öldürülmüştü. Kûfe\'de Hz. Ali\'yi açıkça savunmanın bedeli artık ölüm olabilirdi. Birçok kişi korkudan sustu. Ama **Meysem**, çarşıdaki tezgâhının başında Ehl-i Beyt\'in faziletlerini anlatmayı bırakmadı. Hurmalarını satarken Hz. Ali\'nin sözlerini aktarmaya devam etti. Minberler lanet okurken çarşının ortasında küçük bir tezgâh, Hz. Ali\'nin adını sevgiyle anmayı sürdürdü.' },
      art: { bg: 'city', props: ['minbar'], actors: [{ kind: 'man', x: 30, pose: 'raise', label: { tr: 'Meysem' } }, { kind: 'crowd', x: 68, scale: 6 }] },
      by: 'shia',
      cites: [{ side: 'shia', i: 1 }],
    },
    {
      text: { tr: 'Hicretin 60. yılında, **Yezid**\'in Kûfe\'ye vali olarak atadığı **Ubeydullah b. Ziyâd**, **Meysem**\'i yakalattı. Huzuruna getirilen Meysem\'den, **Hz. Ali**\'den uzaklaştığını söylemesini ve ondan teberri etmesini istedi. Teberri, birinden uzak durduğunu ilan etmektir. Bu söz Meysem\'in canını kurtarabilirdi. Ama Meysem bunu söylemedi. Hz. Ali\'nin adını inkâr etmedi ve ona olan sevgisini açıkça dile getirdi. Yıllarca çarşıda anlattığı bağlılık, şimdi valinin huzurunda ölüm tehdidi karşısında da sarsılmadı.' },
      art: { bg: 'interior', actors: [{ kind: 'man', x: 36, label: { tr: 'Meysem' } }, { kind: 'man', x: 70, label: { tr: 'İbn Ziyâd' } }] },
      by: 'partial',
      cites: [{ side: 'shia', i: 0 }, { side: 'shia', i: 1 }, { side: 'sunni', i: 0 }],
    },
    {
      text: { tr: 'Rivayete göre **Meysem**, **Hz. Ali**\'nin yıllar önce gösterdiği o hurma ağacına asıldı. Darağacında bile susmadı. Kendisini görmeye gelen kalabalığa seslendi ve Ehl-i Beyt\'in faziletlerini anlatmaya devam etti. Halk etrafında toplanıp onu dinliyordu. İbn Ziyâd, Meysem\'in asıldığı yerden konuşmaya devam ettiğini duyunca öfkelendi ve dilinin kesilmesini emretti. Meysem orada şehit edildi. Yıllarca kökünü suladığı ağaç, onun son sözlerine şahit oldu. Hz. Ali\'nin yıllar önce haber verdiği her şey, bir bir gerçekleşmişti.' },
      art: { bg: 'dawn', props: ['palms'], actors: [{ kind: 'man', x: 48, label: { tr: 'Meysem' } }, { kind: 'crowd', x: 74, scale: 5 }] },
      by: 'partial',
      cites: [{ side: 'shia', i: 0 }, { side: 'shia', i: 1 }, { side: 'shia', i: 2 }, { side: 'sunni', i: 0 }],
    },
    {
      text: { tr: 'Meysem\'in şehit edildiği Kûfe, çok geçmeden **Hz. Hüseyin**\'e mektuplar yazıp onu davet eden şehir olacaktı. Vali **İbn Ziyâd**, bu davetin arkasındaki desteği zorla dağıttı. Çarşıdaki bir hurma satıcısına yapılan baskı, **Müslim b. Akîl** Kûfe\'ye geldiğinde bütün şehri saran bir korkuya dönüştü. Ardından bu şehirden çıkan bir ordu, Hz. Hüseyin\'i Kerbelâ\'da kuşatacaktı. Meysem, o zulmün ilk kurbanlarından biri olarak tarihe geçti.' },
      art: { bg: 'dune-dusk', props: ['palms', 'flags'], actors: [{ kind: 'crowd', x: 30, scale: 5 }, { kind: 'husayn', x: 72, label: { tr: 'Hz. Hüseyin' } }] },
      by: 'shia',
      cites: [{ side: 'shia', i: 1 }],
    },
  ],
  sunni: [
    { book: 'İbn Hacer el-Askalânî, el-İsâbe fî temyîzi\'s-sahâbe', ref: 'No. 8493, "Meysem et-Temmâr el-Esedî" (Dârü\'l-Kütübi\'l-İlmiyye, cilt 6, s. 249-250; eş-Şâmile)', says: { tr: 'Meysem\'in Benî Esed\'den bir kadının kölesi iken Hz. Ali tarafından satın alınıp azat edildiği; Hz. Ali\'nin ona asılacağını haber verip hurma ağacını gösterdiği; Meysem\'in o ağacın yanında namaz kıldığı; İbn Ziyâd\'ın onu yakalatıp Amr b. Hureys\'in kapısında astırdığı; asılıyken Hâşimoğullarının faziletlerini anlattığı için ağzının bağlatıldığı anlatılır.' }, grade: { tr: 'İbn Hacer bu haberi Şii müellif el-Müeyyed b. en-Nu\'mân\'ın Menâkıb\'ından nakleder ve kendisi hüküm vermez. Yani haber Sünni bir kaynakta geçer, ama Sünni ana akım onu kendi rivayeti saymaz.' }, url: 'https://shamela.ws/book/9767/3214', status: 'verified' },
  ],
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

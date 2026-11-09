import type { HistEvent } from '../types';

// Kaynak: research/04-cemel-siffin-nehrevan.md. status 'verified' = metin/numara okunup doğrulandı; 'check' = yayın öncesi birincil kaynaktan kontrol edilmeli.
export const cemel: HistEvent = {
  id: 'cemel',
  date: { tr: 'Zilhicce 35 - 15 Cemaziyelevvel 36 H (656)', en: 'Dhu al-Hijjah 35 - 15 Jumada al-Awwal 36 AH (656)' },
  title: { tr: 'Biat ve Cemel', en: 'The Pledge and the Battle of the Camel' },
  hook: { tr: 'Halk Hz. Ali\'ye koşunca o, ağır hilafeti bilinçle üstlendi. Adalet kararlılığı Cemel\'i doğurdu.', en: 'When the people came to him, Hz. Ali took up the caliphate knowingly. His justice led to the Camel.' },
  scenes: [
    {
      text: { tr: '**Osman**\'ın Medine\'de öldürülmesinin ardından şehirde kimin yönetimi üstleneceği belirsizdi. Muhacir ve ensardan kişiler **Hz. Ali**\'ye bağlılık sözü verince Hz. Ali halife oldu. Önünde, valilerin tutumu ve kamu mallarının dağıtımı üzerine birikmiş şikâyetler vardı. Hz. Ali bazı valileri değiştirdi ve haksız dağıtıldığını düşündüğü malları ortak hazineye geri almayı amaçladı. Bu kararlar, eski düzenden yararlananlarla arasındaki gerilimi artırdı.' },
      art: { bg: 'city', props: ['minbar', 'palms'], actors: [{ kind: 'crowd', x: 28, scale: 8 }, { kind: 'ali', x: 66, label: { tr: 'Hz. Ali' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Medine\'de Talha ve Zübeyr de **Hz. Ali**\'ye biat etti. Hz. Ali, Halife Osman\'ın valilerini değiştirmeye ve haksız dağıtılan malları beytülmale çekmeye başladı. Şam\'da **Muaviye** yerinde duruyordu. Biat edenlerin bir kısmı bu sözü gönülden vermemişti. İtirazlarını, valilerin azline ve malın geri alınmasına dayandıracaklardı. Bu itiraz Cemel\'de orduya, Sıffin\'de **Muaviye**\'nin direnişine dönecekti.' },
      art: { bg: 'interior', props: ['scroll'], actors: [{ kind: 'man', x: 24, label: { tr: 'Talha' } }, { kind: 'man', x: 46, label: { tr: 'Zübeyr' } }, { kind: 'ali', x: 74, label: { tr: 'Hz. Ali' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Şam valisi **Muaviye**, Halife Osman\'ın kanı yerini bulmadan **Hz. Ali**\'ye biat etmeyeceğini bildirdi. Osman\'ın kanı onun için bir gerekçeydi. Asıl istediği iktidardı. **Hz. Ali** ise önce düzeni kurmak, sonra davayı mahkemeye bırakmak istedi. O, acele intikam peşinde değildi.' },
      art: { bg: 'city', props: ['flags'], actors: [{ kind: 'man', x: 34, label: { tr: 'Muaviye' } }, { kind: 'crowd', x: 70, scale: 7 }] },
      by: 'both',
    },
    {
      text: { tr: 'Mekke\'de umre için bulunan Aişe, Talha ve Zübeyr, Halife Osman\'ın kanını gerekçe gösterdiler. Basra\'ya çıktılar. Biat ettikleri **Hz. Ali**\'ye karşı ordu yürüttüler. Onun daha yeni kabul edilen hakkını yeniden tartışmaya açtılar.' },
      art: { bg: 'dune-day', props: ['sun', 'camels'], actors: [{ kind: 'woman', x: 24, label: { tr: 'Aişe' } }, { kind: 'man', x: 50, label: { tr: 'Talha' } }, { kind: 'man', x: 74, label: { tr: 'Zübeyr' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Mekke\'den Basra\'ya giden ordu gece Hav\'eb suyuna vardı. Hav\'eb, Basra yolundaki bir suyun adıdır. Köpekler havladı. Aişe "Bu hangi su?" diye sordu. "Hav\'eb" dediler. Peygamber\'in eşlerine söylediği uyarıyı hatırladı: "Biriniz için Hav\'eb köpekleri ona havladığında haliniz nasıl olacak?" Geri dönmek istedi. Talha ve Zübeyr\'in yanındakiler onu yola devam ettirdi. Rivayete göre yalancı şahitler getirildi ve "Burası Hav\'eb değil" dedirildi. Aişe yine de yürütüldü. Basra\'da vali Osman b. Huneyf ile çatışma çıktı.' },
      art: { bg: 'night', props: ['moon', 'stars', 'well'], actors: [{ kind: 'woman', x: 40, label: { tr: 'Aişe' } }, { kind: 'crowd', x: 72, scale: 6 }] },
      by: 'both',
      cites: [{ side: 'sunni', i: 4 }, { side: 'shia', i: 1 }],
    },
    {
      text: { tr: '**Hz. Ali** Kûfe\'den yola çıktı. Savaşı önlemek için elçi gönderdi. Savaş başlamadan önce Zübeyr\'i çağırdı. Yıllar önce Peygamber, ikisini birlikte görünce Zübeyr\'e sormuştu: "Onu seviyor musun?" Zübeyr "Evet. Sevmemem için ne sebep var?" demişti. Peygamber de "Ama sen bir gün ona karşı çıkacak ve ona zulmederek savaşacaksın" buyurmuştu. Hz. Ali bu sözü tek tek hatırlattı. Zübeyr "Unutmuştum" dedi. Savaşa girmeyeceğini söyledi. Atını sürdü. Safları yarıp savaş alanından ayrıldı. Ayrıldıktan sonra öldürüldü.' },
      art: { bg: 'dune-dusk', props: ['tents'], actors: [{ kind: 'ali', x: 34, pose: 'raise', label: { tr: 'Hz. Ali' } }, { kind: 'man', x: 68, label: { tr: 'Zübeyr' } }] },
      by: 'both',
      cites: [{ side: 'sunni', i: 5 }, { side: 'sunni', i: 0 }, { side: 'shia', i: 1 }],
    },
    {
      text: { tr: 'Barış yetmeyince iki ordu karşılaştı. Karşı taraf **Hz. Ali**\'ye savaş açmıştı. Aişe\'nin bindiği deve, karşı tarafın toplandığı yerdi. Savaş o devenin çevresinde sürdü. Deve çökünce toplanacak yer kalmadı. TDV\'nin Cemel maddesi, devenin Hz. Ali\'nin emriyle kesildiğini ve hevdecin çevresinde yaklaşık yetmiş kişinin öldüğünü yazar. Ordu dağıldı. Savaş bu yüzden bitti. Talha savaşta öldürüldü. Zübeyr ise alandan ayrıldıktan sonra öldürülmüştü. **Hz. Ali** kan dökülmesini istememişti. Yine de kan döküldü.' },
      art: { bg: 'battle', props: ['flags'], actors: [{ kind: 'crowd', x: 24, scale: 7 }, { kind: 'woman', x: 56, label: { tr: 'Aişe' } }, { kind: 'ali', x: 84, label: { tr: 'Hz. Ali' } }] },
      by: 'both',
    },
    {
      text: { tr: '**Hz. Ali** savaştan sonra esirleri serbest bıraktı. Mal, kadın ve çocuk üzerinde ganimet hükmü uygulamadı. Aişe\'yi saygıyla ağırladı. Onu kardeşi Muhammed b. Ebi Bekir ile Medine\'ye uğurladı. Galip geldiği halde intikam almadı.' },
      art: { bg: 'dawn', props: ['camels'], actors: [{ kind: 'ali', x: 26, label: { tr: 'Hz. Ali' } }, { kind: 'woman', x: 54, label: { tr: 'Aişe' } }, { kind: 'man', x: 80, label: { tr: 'Muhammed b. Ebi Bekir' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Cemel\'den sonra Aişe\'nin üzüldüğü anlatılır. **Cemel**, **Hz. Ali**\'nin hakka daha yakın durduğu gündür. O, biat sözünü bozanlara karşı sabrı seçti. Yine de hakkı bırakmadı. Sıra, Şam\'da bekleyen **Muaviye**\'ye gelecekti.' },
      art: { bg: 'interior', props: ['scroll'], actors: [{ kind: 'woman', x: 36, pose: 'sit', label: { tr: 'Aişe' } }, { kind: 'crowd', x: 72, scale: 5 }] },
      by: 'sunni',
    },
  ],
  sunni: [
    { book: 'Taberi, Tarihu\'r-Rusul ve\'l-Mulûk', ref: '35-36. yıl olayları (Leiden; sayfa kontrol edilecek)', says: { tr: 'Hz. Ali\'ye biat, Muaviye\'nin tutumu, Basra\'ya çıkış, Cemel savaşı ve sonrası; Zübeyr\'e hatırlatma rivayeti de aktarılır.' }, status: 'check' },
    { book: 'İbn Kesir, el-Bidâye ve\'n-Nihâye', ref: 'c.7 (Hz. Ali\'nin hilafeti bölümü; sayfa kontrol edilecek)', says: { tr: 'Biatin alınışı ve Cemel\'e giden sürecin anlatımı.' }, status: 'check' },
    { book: 'İbnü\'l-Esîr, el-Kâmil fi\'t-Târîh', ref: '36. yıl (sayfa kontrol edilecek)', says: { tr: 'Cemel savaşının seyri.' }, status: 'check' },
    { book: 'İbn Sa\'d, et-Tabakâtü\'l-Kübrâ', ref: 'Aişe maddesi, c.8; c.3/1 (cilt/sayfa kontrol edilecek)', says: { tr: 'Aişe ve olaylar hakkında rivayetler; Aişe\'nin pişman olduğunu anlatan rivayetler bu kaynak ve İbn Ebi Şeybe, Zehebi, Hakim gibi eserlerde aktarılır.' }, status: 'check' },
    { book: 'Ahmed b. Hanbel, Müsned', ref: 'No. 24254 ve 24654', says: { tr: 'Aişe gece Benî Âmir sularına varır. Köpekler havlar. Suyun adını sorar. Hav\'eb denince geri dönmek ister. Yanındakiler, Zübeyr de aralarında, yürümesini söyler. O, Peygamber\'in "Biriniz için Hav\'eb köpekleri ona havladığında haliniz nasıl olacak?" sözünü hatırlar.' }, grade: { tr: 'Metin Müsned\'de bu numaralarla okundu' }, url: 'https://hadits.net/ahmad:24254', status: 'verified' },
    { book: 'Hâkim, el-Müstedrek', ref: 'No. 5573, 5574 ve 5575 (Zübeyr\'in öldürülmesi bölümü; baskıya göre numara kayabilir)', says: { tr: 'No. 5573: Hz. Ali, Zübeyr\'e Ensar\'ın bir gölgeliğinde birlikteyken Peygamber\'in "Onu seviyor musun?" diye sorduğunu, Zübeyr\'in evet dediğini ve "Ona karşı çıkıp zulmederek savaşacaksın" buyurduğunu hatırlatır. Zübeyr döner. No. 5574: "Ona karşı savaşacaksın ve ona zulmeden sen olacaksın." Zübeyr unuttuğunu söyler ve ayrılır. Hâkim bu rivayete sahih der. No. 5575: Zübeyr oğlu Abdullah\'a hadisi anlatır, safları yararak ayrılır.' }, url: 'https://hadits.net/hakim:5574', status: 'check' },
    { book: 'İbn Hazm, el-Fisal fi\'l-Milel ve\'n-Nihal', ref: 'İmamet bölümü (cilt/sayfa kontrol edilecek)', says: { tr: 'Hz. Ali\'nin Cemel\'de haklı olduğunu söyler; Talha, Zübeyr ve Aişe için ictihad hatası der. Bu aktarım literatürden alınmıştır, birincil metinden doğrulanmamıştır.' }, status: 'check' },
    { book: 'Ebu Hanife (Cessas, Ahkâmü\'l-Kur\'an; İbn Âbidîn, Haşiye)', ref: 'Bağî bölümü (sayfa kontrol edilecek)', says: { tr: 'Hz. Ali\'nin Cemel\'de haklı olduğu ve karşı tarafın hata ettiği görüşü ona nispet edilir; isyancılarla savaş kuralları Hz. Ali\'nin Cemel uygulamasından çıkarılır. Doğrulanmamış aktarım.' }, status: 'check' },
    { book: 'İmam Şafii, el-Ümm', ref: 'Kıtâlü\'l-Bağî bölümü (cilt kontrol edilecek)', says: { tr: 'İsyancılarla savaş hükümleri (yaralıyı öldürmeme, kaçanı kovalamama, malı ganimet saymama) Hz. Ali\'nin Cemel ve Sıffin\'deki davranışından türetilir. Doğrulanmamış aktarım.' }, status: 'check' },
  ],
  shia: [
    { book: 'Nehcü\'l-Belâğa (Seyyid Razî)', ref: 'Şıkşıkıyye (Hutbe 3) ve biat hutbesi (numarası kontrol edilecek)', says: { tr: 'Hz. Ali\'nin hilafeti kabul ediş şartları ve biat ısrarı üzerine hutbesi. Hutbelerin nisbeti konusunda tartışma vardır.' }, status: 'check' },
    { book: 'Şeyh Müfîd, el-Cemel', ref: 'Hav\'eb ve Zübeyr bölümleri (sayfa numarası ayrıca verilmedi)', says: { tr: 'Aişe\'nin Hav\'eb\'de geri dönmek istemesi, yalancı şahitlerle "Burası Hav\'eb değil" denmesi ve Zübeyr\'e Peygamber\'in sözünün hatırlatılıp onun savaş alanından ayrılması. Sayfa numarası ayrıca verilmedi.' }, status: 'check' },
    { book: 'Nasr b. Müzahim, Vak\'atü Sıffîn', ref: 'Baştaki yazışmalar (sayfa kontrol edilecek)', says: { tr: 'Hz. Ali ile Muaviye arasındaki ilk yazışmalar. Sünni ricâl eleştirisinde Nasr "aşırı Şii" sayılır, ancak malzeme açısından erken bir kaynaktır.' }, status: 'check' },
    { book: 'Mes\'ûdî, Mürûcü\'z-Zeheb', ref: 'Sayfa kontrol edilecek', says: { tr: 'Olayların genel seyri. Şii eğilimli bir tarihçi olarak kabul edilir.' }, status: 'check' },
  ],
  disputes: [
    {
      title: { tr: 'Halife Osman\'ın kanı: önce düzen mi, önce kısas mı?' },
      sunni: { tr: 'Halife Osman\'ın kanı iki tarafta da konuşulmuştur. Sünni görüş, Hz. Ali\'nin gerekçesini de karşı tarafın tutumunu da bir ictihad olarak anlar.' },
      shia: { tr: 'Halife Osman\'ın kanı iki tarafta da konuşulmuştur. Şii anlatıda Hz. Ali önce düzeni kurup davayı yargıya bırakmak istemiş, buna karşı çıkış meşru görülmemiştir.' },
    },
    {
      title: { tr: 'Talha ve Zübeyr\'in biatı gönülden miydi?' },
      sunni: { tr: 'Talha ve Zübeyr\'in biat ettiği kaynaklarda ortaktır. Bu biatın gönüllü mü, baskı altında mı verildiği ayrıca rivayet edilir.' },
      shia: { tr: 'Talha ve Zübeyr\'in biat ettiği kaynaklarda ortaktır. Hz. Ali bu biatın gönülden verildiğini savunmuş, sonradan zorla verildiğinin söylenmesini kabul etmemiştir.' },
    },
    {
      title: { tr: 'Aişe\'nin üzüntüsü neye dair?' },
      sunni: { tr: 'Aişe\'nin üzüldüğünü anlatan rivayetler kaynaklarda yer alır. Her rivayetin senedi ve üzüntünün konusu ayrıca tartışılır.' },
      shia: { tr: 'Aişe\'nin üzüldüğünü anlatan rivayetler kaynaklarda yer alır. Şii anlatıda onun Hz. Ali\'ye karşı çıkışı yanlış bir adım olarak görülür.' },
    },
  ],
  questions: [
    { tr: 'Hz. Ali hilafeti bilinçle üstlendi. Haksız malları geri alması ve bozuk valileri azletmesi, Cemel ile Sıffin\'deki karşı duruşu size nasıl anlatıyor?' },
    { tr: 'Hz. Ali, Zübeyr\'e Peygamber\'in "Onu seviyor musun?" sorusunu ve "ona zulmederek savaşacaksın" sözünü hatırlatınca Zübeyr saftan ayrıldı. Bu sahne, Hz. Ali\'nin yanında durmanın anlamı hakkında size ne söylüyor?' },
    { tr: 'Hz. Ali savaştan sonra esirleri bıraktı ve Aişe\'yi saygıyla Medine\'ye uğurladı. Bu incelik, onun niyeti hakkında size ne düşündürüyor?' },
    { tr: 'Birçok Sünni âlim, Cemel\'de Hz. Ali\'yi hakka daha yakın bulur. Bu ortak bakış, onu daha yakından tanımak için size bir kapı açıyor mu?' },
  ],
  summary: { tr: 'Halife Osman\'ın öldürülmesinden sonra Hz. Ali hilafeti bilinçle üstlendi. Hav\'eb\'de Aişe geri dönmek istedi, yine de yürütüldü. Hz. Ali, Zübeyr\'e Peygamber\'in sözünü hatırlattı. Zübeyr saftan ayrıldı ve sonra öldürüldü. Hz. Ali esirleri bağışladı ve Aişe\'yi saygıyla Medine\'ye uğurladı.' },
};

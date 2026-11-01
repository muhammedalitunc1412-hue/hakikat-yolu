import type { HistEvent } from '../types';

// Kaynak: research/04-cemel-siffin-nehrevan.md. status 'verified' = metin/numara okunup doğrulandı; 'check' = yayın öncesi birincil kaynaktan kontrol edilmeli.
export const cemel: HistEvent = {
  id: 'cemel',
  date: { tr: 'Zilhicce 35 - 15 Cemaziyelevvel 36 H (656)', en: 'Dhu al-Hijjah 35 - 15 Jumada al-Awwal 36 AH (656)' },
  title: { tr: 'Biat ve Cemel', en: 'The Pledge and the Battle of the Camel' },
  hook: { tr: 'Hz. Ali hilafeti istemeden kabul etti. Cemel\'de kan dökülmesin diye sabretti, hakkı da bırakmadı.', en: 'The first day Muslims stood in battle lines against Muslims.' },
  scenes: [
    {
      text: { tr: 'Halife Osman şehit olunca Medine karıştı. Ensar ve Muhacirler **Hz. Ali**\'ye geldi. Gadir\'de ilan edilen hak, yıllar sonra kapıya dayanmıştı. O önce çekindi. Israr üzerine Mescid-i Nebevî\'de biat alındı. Hak, istemeden de olsa yerine oturuyordu.' },
      art: { bg: 'city', props: ['minbar', 'palms'], actors: [{ kind: 'crowd', x: 28, scale: 8 }, { kind: 'ali', x: 66, label: { tr: 'Hz. Ali' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Talha ve Zübeyr de biat etti. **Hz. Ali**, Halife Osman\'ın valilerini değiştirdi. Şam\'da **Muaviye** duruyordu. Biat edenlerin bir kısmının gönlü, biatın dışında kaldı. İtiraz, bu değişikliğin üstüne kurulacaktı.' },
      art: { bg: 'interior', props: ['scroll'], actors: [{ kind: 'man', x: 24, label: { tr: 'Talha' } }, { kind: 'man', x: 46, label: { tr: 'Zübeyr' } }, { kind: 'ali', x: 74, label: { tr: 'Hz. Ali' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Şam valisi **Muaviye**, Halife Osman\'ın kanı yerini bulmadan biat etmeyeceğini bildirdi. Kan, bir gerekçeydi. İktidar, asıl istenendi. **Hz. Ali** önce düzen, sonra mahkeme istedi. Hak, acele bir intikam değildi.' },
      art: { bg: 'city', props: ['flags'], actors: [{ kind: 'man', x: 34, label: { tr: 'Muaviye' } }, { kind: 'crowd', x: 70, scale: 7 }] },
      by: 'both',
    },
    {
      text: { tr: 'Umre için Mekke\'de bulunan Aişe, Talha ve Zübeyr, Halife Osman\'ın kanını gerekçe gösterip Basra\'ya çıktı. Biat ettikleri adama karşı ordu yürüdü. **Hz. Ali**\'nin hakkı, daha yeni yerine oturmuşken yeniden tartışmaya açıldı.' },
      art: { bg: 'dune-day', props: ['sun', 'camels'], actors: [{ kind: 'woman', x: 24, label: { tr: 'Aişe' } }, { kind: 'man', x: 50, label: { tr: 'Talha' } }, { kind: 'man', x: 74, label: { tr: 'Zübeyr' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Yolda Havab suyunda köpek sesleri duyulunca, Peygamber\'in bir hanımına söylediği uyarı hatırlandı. Basra\'da vali Osman b. Huneyf ile çatışma çıktı. Uyarı duyulmuştu. Yol yine de sürdü.' },
      art: { bg: 'night', props: ['moon', 'stars', 'well'], actors: [{ kind: 'woman', x: 40, label: { tr: 'Aişe' } }, { kind: 'crowd', x: 72, scale: 6 }] },
      by: 'both',
    },
    {
      text: { tr: '**Hz. Ali** Kûfe\'den yürüdü. Savaşı önlemek için elçi gönderdi. Zübeyr\'e, Peygamber\'in "Sen Hz. Ali ile haksızlıkla savaşacaksın" sözünü hatırlattı. Zübeyr saftan ayrıldı. Hatırlatılan söz, bir kılıçtan önce gelmişti.' },
      art: { bg: 'dune-dusk', props: ['tents'], actors: [{ kind: 'ali', x: 34, pose: 'raise', label: { tr: 'Hz. Ali' } }, { kind: 'man', x: 68, label: { tr: 'Zübeyr' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Barış yetmeyince iki ordu karşılaştı. Aişe\'nin bindiği devenin çevresi sabahtan akşama çatışmanın merkezi oldu. Deve durunca savaş bitti. Talha ve Zübeyr bu süreçte hayatını kaybetti. **Hz. Ali** kanı istememişti. Kan yine döküldü.' },
      art: { bg: 'battle', props: ['flags'], actors: [{ kind: 'crowd', x: 24, scale: 7 }, { kind: 'woman', x: 56, label: { tr: 'Aişe' } }, { kind: 'ali', x: 84, label: { tr: 'Hz. Ali' } }] },
      by: 'both',
    },
    {
      text: { tr: '**Hz. Ali** esirleri serbest bıraktı. Mal, kadın ve çocuk üzerinde ganimet hükmü uygulamadı. Aişe\'yi saygıyla ağırladı, kardeşi Muhammed b. Ebi Bekir ile Medine\'ye uğurladı. Galip, intikam almadı. Hakkın ahlakı buydu.' },
      art: { bg: 'dawn', props: ['camels'], actors: [{ kind: 'ali', x: 26, label: { tr: 'Hz. Ali' } }, { kind: 'woman', x: 54, label: { tr: 'Aişe' } }, { kind: 'man', x: 80, label: { tr: 'Muhammed b. Ebi Bekir' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Aişe\'nin sonradan üzüldüğü anlatılır. **Cemel**, **Hz. Ali**\'nin hakka daha yakın durduğu gündür. O, biatı çiğneyenlere karşı sabrı seçmiş, yine de hakkı bırakmamıştı. Sıra, Şam\'da bekleyen **Muaviye**\'ye gelecekti.' },
      art: { bg: 'interior', props: ['scroll'], actors: [{ kind: 'woman', x: 36, pose: 'sit', label: { tr: 'Aişe' } }, { kind: 'crowd', x: 72, scale: 5 }] },
      by: 'sunni',
    },
  ],
  sunni: [
    { book: 'Taberi, Tarihu\'r-Rusul ve\'l-Mulûk', ref: '35-36. yıl olayları (Leiden; sayfa kontrol edilecek)', says: { tr: 'Hz. Ali\'ye biat, Muaviye\'nin tutumu, Basra\'ya çıkış, Cemel savaşı ve sonrası; Zübeyr\'e hatırlatma rivayeti de aktarılır.' }, status: 'check' },
    { book: 'İbn Kesir, el-Bidâye ve\'n-Nihâye', ref: 'c.7 (Hz. Ali\'nin hilafeti bölümü; sayfa kontrol edilecek)', says: { tr: 'Biatin alınışı ve Cemel\'e giden sürecin anlatımı.' }, status: 'check' },
    { book: 'İbnü\'l-Esîr, el-Kâmil fi\'t-Târîh', ref: '36. yıl (sayfa kontrol edilecek)', says: { tr: 'Cemel savaşının seyri.' }, status: 'check' },
    { book: 'İbn Sa\'d, et-Tabakâtü\'l-Kübrâ', ref: 'Aişe maddesi, c.8; c.3/1 (cilt/sayfa kontrol edilecek)', says: { tr: 'Aişe ve olaylar hakkında rivayetler; Aişe\'nin pişman olduğunu anlatan rivayetler bu kaynak ve İbn Ebi Şeybe, Zehebi, Hakim gibi eserlerde aktarılır.' }, status: 'check' },
    { book: 'Ahmed b. Hanbel, Müsned', ref: 'c.6, s.52 civarı (Havab köpekleri; tam numara kontrol edilecek)', says: { tr: 'Peygamber\'in hanımlarından birinin Havab suyunda köpek havlamasıyla karşılaşacağına dair uyarısı. İbn Hibban, Hakim, İbn Hacer, Elbani gibi bazı muhaddisler sahih görmüştür.' }, status: 'check' },
    { book: 'Hâkim, el-Müstedrek', ref: 'Zübeyr rivayeti (numara kontrol edilecek)', says: { tr: 'Hz. Ali\'nin Zübeyr\'e Peygamber\'in "Sen Hz. Ali ile haksızlıkla savaşacaksın" sözünü hatırlattığı ve Zübeyr\'in saftan ayrıldığı anlatılır.' }, status: 'check' },
    { book: 'İbn Hazm, el-Fisal fi\'l-Milel ve\'n-Nihal', ref: 'İmamet bölümü (cilt/sayfa kontrol edilecek)', says: { tr: 'Hz. Ali\'nin Cemel\'de haklı olduğunu söyler; Talha, Zübeyr ve Aişe için ictihad hatası der. Bu aktarım literatürden alınmıştır, birincil metinden doğrulanmamıştır.' }, status: 'check' },
    { book: 'Ebu Hanife (Cessas, Ahkâmü\'l-Kur\'an; İbn Âbidîn, Haşiye)', ref: 'Bağî bölümü (sayfa kontrol edilecek)', says: { tr: 'Hz. Ali\'nin Cemel\'de haklı olduğu ve karşı tarafın hata ettiği görüşü ona nispet edilir; isyancılarla savaş kuralları Hz. Ali\'nin Cemel uygulamasından çıkarılır. Doğrulanmamış aktarım.' }, status: 'check' },
    { book: 'İmam Şafii, el-Ümm', ref: 'Kıtâlü\'l-Bağî bölümü (cilt kontrol edilecek)', says: { tr: 'İsyancılarla savaş hükümleri (yaralıyı öldürmeme, kaçanı kovalamama, malı ganimet saymama) Hz. Ali\'nin Cemel ve Sıffin\'deki davranışından türetilir. Doğrulanmamış aktarım.' }, status: 'check' },
  ],
  shia: [
    { book: 'Nehcü\'l-Belâğa (Seyyid Razî)', ref: 'Şıkşıkıyye (Hutbe 3) ve biat hutbesi (numarası kontrol edilecek)', says: { tr: 'Hz. Ali\'nin hilafeti kabul ediş şartları ve biat ısrarı üzerine hutbesi. Hutbelerin nisbeti konusunda tartışma vardır.' }, status: 'check' },
    { book: 'Şeyh Müfîd, el-Cemel', ref: 'Sayfa kontrol edilecek', says: { tr: 'Cemel olayının anlatımı; Havab köpekleri rivayeti de burada geçer.' }, status: 'check' },
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
    { tr: 'Hz. Ali hilafeti önce istemedi, ısrar üzerine kabul etti. Sorumluluğu aramadan yüklenen birinin sonraki sabrı size ne düşündürüyor?' },
    { tr: 'Hz. Ali, Zübeyr\'e Peygamber\'in bir uyarısını hatırlatınca Zübeyr saftan ayrıldı. Bu sahne, Hz. Ali\'nin yanında durmanın anlamı hakkında size ne söylüyor?' },
    { tr: 'Hz. Ali savaştan sonra esirleri bıraktı ve Aişe\'yi saygıyla Medine\'ye uğurladı. Bu incelik, onun niyeti hakkında size ne düşündürüyor?' },
    { tr: 'Birçok Sünni âlim, Cemel\'de Hz. Ali\'yi hakka daha yakın bulur. Bu ortak bakış, onu daha yakından tanımak için size bir kapı açıyor mu?' },
  ],
  summary: { tr: 'Halife Osman\'ın şehadetinden sonra Hz. Ali\'ye biat edildi. Aişe, Talha ve Zübeyr\'in Basra\'ya çıkışı Cemel\'e vardı. Hz. Ali sonuna kadar barışı aradı; sonra esirleri bağışladı ve Aişe\'yi saygıyla Medine\'ye uğurladı.' },
};

import type { HistEvent } from '../types';

// Kaynak: research/04-cemel-siffin-nehrevan.md. status 'verified' = metin/numara okunup doğrulandı; 'check' = yayın öncesi birincil kaynaktan kontrol edilmeli.
export const cemel: HistEvent = {
  id: 'cemel',
  date: { tr: 'Zilhicce 35 - 15 Cemaziyelevvel 36 H (656)', en: 'Dhu al-Hijjah 35 - 15 Jumada al-Awwal 36 AH (656)' },
  title: { tr: 'Biat ve Cemel', en: 'The Pledge and the Battle of the Camel' },
  hook: { tr: 'Halk Hz. Ali\'ye koşunca o, ağır hilafeti bilinçle üstlendi. Adalet kararlılığı Cemel\'i doğurdu.', en: 'When the people came to him, Hz. Ali took up the caliphate knowingly. His justice led to the Camel.' },
  scenes: [
    {
      text: { tr: 'Biatın ardından **Hz. Ali** hemen işe koyuldu. Devraldığı düzen yıllardır bozulmuştu. Akraba kayırmacılığı, haksız yere dağıtılmış mallar ve halkı ezen valiler ortadaydı. Hz. Ali önce haksız yere verilmiş malları beytülmale, yani ümmetin ortak hazinesine geri aldı. Ardından halkın şikâyet ettiği valileri görevden aldı. Bu kararlar, Osman döneminde zenginleşen ve güç kazanan kişileri rahatsız etti. Hz. Ali\'nin adaleti, kısa süre içinde ona karşı kılıç çekecek düşmanlar doğurdu. Önce Basra\'da, sonra Sıffin\'de bu adaletin bedeli ödenecekti.' },
      art: { bg: 'city', props: ['minbar', 'palms'], actors: [{ kind: 'crowd', x: 28, scale: 8 }, { kind: 'ali', x: 66, label: { tr: 'Hz. Ali' } }] },
      by: 'both',
    },
    {
      text: { tr: '**Talha** ile **Zübeyr** de Medine\'de **Hz. Ali**\'ye biat etmişti. Ama verdikleri söz dillerinde kaldı, gönüllerine yerleşmedi. Rivayetlere göre ikisi de Hz. Ali\'den devlette yüksek bir makam istedi ve Basra ile Kûfe valiliklerine göz dikti. Hz. Ali, adam kayırmayı doğru bulmadığı için bu isteği geri çevirdi. Osman\'ın valilerini değiştirirken de onlara beklediklerini vermedi. Haksız malları beytülmale geri aldı ve kimseye ayrıcalık tanımadı. Şam\'da ise **Muaviye** valilik koltuğunu bırakmayı reddetti. Kaybedilen makamlar ve geri alınan mallar, itirazın asıl sebebiydi. Ama itiraz edenler, Osman\'ın kanını gerekçe olarak öne sürdü. Osman\'ın kanı, menfaatleri zarar gören herkes için bir bahane haline geldi.' },
      art: { bg: 'interior', props: ['scroll'], actors: [{ kind: 'man', x: 24, label: { tr: 'Talha' } }, { kind: 'man', x: 46, label: { tr: 'Zübeyr' } }, { kind: 'ali', x: 74, label: { tr: 'Hz. Ali' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Şam valisi **Muaviye**, Osman\'ın katilleri cezalandırılmadan **Hz. Ali**\'ye biat etmeyeceğini bildirdi. Osman\'ın kanı onun için bir gerekçeydi. Asıl istediği, elindeki gücü korumak ve iktidara uzanmaktı. Hz. Ali ise önce düzeni kurmak, ardından davayı adaletle görmek istiyordu. Acele intikamın yeni bir karışıklık doğuracağını biliyordu. Önce mektuplar yazdı, elçiler gönderdi. Kılıcı her zaman en son çare olarak gördü.' },
      art: { bg: 'city', props: ['flags'], actors: [{ kind: 'man', x: 34, label: { tr: 'Muaviye' } }, { kind: 'crowd', x: 70, scale: 7 }] },
      by: 'both',
    },
    {
      text: { tr: 'Bu sırada Mekke\'de umre için bulunan **Aişe**, Talha ve Zübeyr ile bir araya geldi. Üçü de Osman\'ın kanını gerekçe göstererek Basra\'ya doğru yola çıktı. Yanlarına toplanan kalabalıkla birlikte, biat ettikleri **Hz. Ali**\'ye karşı bir ordu kurdular. Böylece daha yeni kabul edilen halifeliği yeniden tartışmaya açtılar. Basra yolunda Gadir\'deki ilan değil, Osman\'ın kanı anılıyordu. Peygamber\'in vefatından yaklaşık çeyrek asır sonra Müslümanlar ilk kez kendi aralarında büyük bir savaşa doğru sürükleniyordu.' },
      art: { bg: 'dune-day', props: ['sun', 'camels'], actors: [{ kind: 'woman', x: 24, label: { tr: 'Aişe' } }, { kind: 'man', x: 50, label: { tr: 'Talha' } }, { kind: 'man', x: 74, label: { tr: 'Zübeyr' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Mekke\'den Basra\'ya ilerleyen ordu bir gece **Hav\'eb** denen bir suyun başına vardı. Karanlıkta köpekler havlamaya başladı. Aişe, "Bu hangi su?" diye sordu. "Hav\'eb" dediler. Aişe birden durdu, çünkü Peygamber\'in eşlerine söylediği bir sözü hatırlamıştı: "Hav\'eb köpekleri biriniz için havladığında haliniz nice olur?" Hemen geri dönmek istedi. Ama Talha ile Zübeyr\'in yanındakiler onu yola devam etmeye ikna etti. Ehl-i Beyt rivayetlerine göre yalancı şahitler getirildi ve onlara "Burası Hav\'eb değil" diye yemin ettirildi. Ordu Basra\'ya ulaştığında Hz. Ali\'nin valisi **Osman b. Huneyf** ile çatışma çıktı ve ilk kan orada döküldü.' },
      art: { bg: 'night', props: ['moon', 'stars', 'well'], actors: [{ kind: 'woman', x: 40, label: { tr: 'Aişe' } }, { kind: 'crowd', x: 72, scale: 6 }] },
      by: 'both',
      cites: [{ side: 'sunni', i: 4 }, { side: 'shia', i: 1 }],
    },
    {
      text: { tr: '**Hz. Ali** ordusuyla Basra\'ya doğru yola çıktı. Savaşı önlemek için defalarca elçi gönderdi. İki ordu karşı karşıya geldiğinde Zübeyr\'i saflarının arasına çağırdı ve ona yıllar önceki bir günü hatırlattı. Peygamber, ikisini birlikte görünce Zübeyr\'e, "Onu seviyor musun?" diye sormuştu. Zübeyr, "Evet, onu neden sevmeyeyim?" demişti. Peygamber de, "Ama bir gün ona karşı çıkacak ve ona haksızlık ederek savaşacaksın" buyurmuştu. Zübeyr bu sözü duyunca başını önüne eğdi ve "Unutmuştum" dedi. Savaşmayacağını söyledi, atını çevirip savaş alanından ayrıldı. Ama ayrıldıktan sonra yolda öldürüldü.' },
      art: { bg: 'dune-dusk', props: ['tents'], actors: [{ kind: 'ali', x: 34, pose: 'raise', label: { tr: 'Hz. Ali' } }, { kind: 'man', x: 68, label: { tr: 'Zübeyr' } }] },
      by: 'both',
      cites: [{ side: 'sunni', i: 5 }, { side: 'sunni', i: 0 }, { side: 'shia', i: 1 }],
    },
    {
      text: { tr: 'Barış için yapılan bütün çabalar sonuçsuz kalınca iki ordu karşılaştı. Savaşın merkezinde Aişe\'nin bindiği deve duruyordu. Karşı tarafın askerleri devenin çevresinde toplanıyordu. Deve ayakta durdukça savaş da sürüyordu. Rivayete göre Hz. Ali, kan dökülmesini durdurmak için devenin kesilmesini emretti. Devenin çevresinde, sırtındaki hevdeci koruyanlardan yaklaşık yetmiş kişi can verdi. Deve yere çöktüğünde karşı taraf toplanacak bir yer bulamadı ve ordu dağıldı. **Talha** da bu savaşta öldürüldü. Bu savaşa, devenin adından dolayı **Cemel**, yani Deve Savaşı denir.' },
      art: { bg: 'battle', props: ['flags'], actors: [{ kind: 'crowd', x: 24, scale: 7 }, { kind: 'woman', x: 56, label: { tr: 'Aişe' } }, { kind: 'ali', x: 84, label: { tr: 'Hz. Ali' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Savaş bittiğinde **Hz. Ali** galip gelmişti, ama hiçbir zaferin keyfini çıkarmadı. Esirleri serbest bıraktı. Yenilen tarafın malları, kadınları ve çocukları üzerinde ganimet hükmünü uygulamadı. Kimsenin evine girilmesine, kimsenin malına el sürülmesine izin vermedi. **Aişe**\'ye Peygamber\'in eşi olarak saygı gösterdi. Onu kardeşi **Muhammed b. Ebi Bekir**\'in yanında, onurlu bir şekilde Medine\'ye uğurladı. Kendisine kılıç çekenlere bile adaletle davranan Hz. Ali, Peygamber\'in ahlakını savaş meydanının ortasında da korudu.' },
      art: { bg: 'dawn', props: ['camels'], actors: [{ kind: 'ali', x: 26, label: { tr: 'Hz. Ali' } }, { kind: 'woman', x: 54, label: { tr: 'Aişe' } }, { kind: 'man', x: 80, label: { tr: 'Muhammed b. Ebi Bekir' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Anlatıldığına göre Aişe, Cemel\'den sonra bu savaşa katıldığı için derin bir üzüntü duydu. Hz. Ali ise biat sözünü bozanlara karşı hem sabrı hem de hakkı birlikte korumuştu. Basra\'da yaşanan bu kanlı gün sona ermişti, ama Hz. Ali\'nin önünde daha büyük bir sınav duruyordu. Şam\'da **Muaviye** hâlâ biat etmiyor ve Osman\'ın kanını bahane ederek büyük bir ordu topluyordu. Hz. Ali, Basra\'dan sonra Kûfe\'ye geçti ve orayı halifeliğinin merkezi yaptı. Kısa süre sonra Fırat\'ın kıyısında, Sıffin\'de, Muaviye\'nin ordusuyla karşı karşıya gelecekti.' },
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

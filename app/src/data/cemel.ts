import type { HistEvent } from '../types';

// Kaynak: research/04-cemel-siffin-nehrevan.md. status 'verified' = metin/numara okunup doğrulandı; 'check' = yayın öncesi birincil kaynaktan kontrol edilmeli.
export const cemel: HistEvent = {
  id: 'cemel',
  date: { tr: 'Zilhicce 35 - 15 Cemaziyelevvel 36 H (656)', en: 'Dhu al-Hijjah 35 - 15 Jumada al-Awwal 36 AH (656)' },
  title: { tr: 'Biat ve Cemel', en: 'The Pledge and the Battle of the Camel' },
  hook: { tr: 'Hz. Ali (a.s.) biati istemeden aldı. Müslümanlar ilk kez Müslümanlara karşı neden saf tuttu?', en: 'The first day Muslims stood in battle lines against Muslims.' },
  scenes: [
    {
      text: { tr: 'Osman\'ın şehadetinden sonra Medine karışıktı. Ensar ve Muhacirin\'in önde gelenleri Hz. Ali\'ye (a.s.) gelip hilafeti kabul etmesini istedi. O önce çekindi. Israr üzerine Mescid-i Nebevî\'de biat alındı. İsteyen o değildi; istenen oydu.' },
      art: { bg: 'city', props: ['minbar', 'palms'], actors: [{ kind: 'crowd', x: 28, scale: 8 }, { kind: 'ali', x: 66, label: { tr: 'Hz. Ali' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Talha ve Zübeyr de biat etti. Bu biatın gönüllü mü, baskı altında mı olduğu tartışılır. Hz. Ali işe Osman\'ın valilerini değiştirmekle başladı. Sonraki itirazların zemini bu kararda aranır; o ise düzeni, akrabalığa değil emanete göre kurmak istiyordu.' },
      art: { bg: 'interior', props: ['scroll'], actors: [{ kind: 'man', x: 24, label: { tr: 'Talha' } }, { kind: 'man', x: 46, label: { tr: 'Zübeyr' } }, { kind: 'ali', x: 74, label: { tr: 'Hz. Ali' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Şam valisi Muaviye, Osman\'ın kanı yerini bulmadan biat etmeyeceğini bildirdi. Hz. Ali\'ye göre önce düzen kurulmalı, sonra dava yoluyla hesap sorulmalıydı. Muaviye\'ye göre önce kısas gerekiyordu. İki gerekçe, iki orduyu karşı karşıya getirecekti.' },
      art: { bg: 'city', props: ['flags'], actors: [{ kind: 'man', x: 34, label: { tr: 'Muaviye' } }, { kind: 'crowd', x: 70, scale: 7 }] },
      by: 'both',
    },
    {
      text: { tr: 'Umre için Mekke\'de bulunan Hz. Aişe, Talha ve Zübeyr, Osman\'ın kanını gerekçe göstererek Basra\'ya yöneldi. Amaçları, kendi anlayışlarına göre durumu düzeltmekti. Müslümanlar ilk kez Müslümanlara karşı saf tutmaya bu yoldan geldi.' },
      art: { bg: 'dune-day', props: ['sun', 'camels'], actors: [{ kind: 'woman', x: 24, label: { tr: 'Aişe' } }, { kind: 'man', x: 50, label: { tr: 'Talha' } }, { kind: 'man', x: 74, label: { tr: 'Zübeyr' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Yolda Havab suyunda köpek sesleri duyulunca, Hz. Peygamber\'in (s.a.v.) bir hanımına söylediği uyarı anılır. Rivayet Müsned\'de geçer; bazı muhaddisler onu sahih bulmuştur. Basra\'da vali Osman b. Huneyf ile çatışma çıktı. Uyarı hatırlanmış, yol yine de sürmüştür.' },
      art: { bg: 'night', props: ['moon', 'stars', 'well'], actors: [{ kind: 'woman', x: 40, label: { tr: 'Aişe' } }, { kind: 'crowd', x: 72, scale: 6 }] },
      by: 'both',
    },
    {
      text: { tr: 'Hz. Ali Kûfe\'den destek toplayıp Basra\'ya yürüdü ve savaşı önlemek için elçiler gönderdi. Anlatıldığına göre Zübeyr\'e, Peygamber\'in «Sen Hz. Ali ile haksızlıkla savaşacaksın» sözünü hatırlattı. Zübeyr saftan ayrıldı. Barış kapısı son ana kadar açık tutulmuştu.' },
      art: { bg: 'dune-dusk', props: ['tents'], actors: [{ kind: 'ali', x: 34, pose: 'raise', label: { tr: 'Hz. Ali' } }, { kind: 'man', x: 68, label: { tr: 'Zübeyr' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Barış çabaları sonuçsuz kalınca iki ordu karşılaştı. Hz. Aişe\'nin bindiği devenin çevresi sabahtan akşama savaşın merkezi oldu. Deve durdurulunca savaş bitti. Talha ve Zübeyr bu süreçte hayatını kaybetti. Ümmetin ilk iç savaşı, bir devenin çevresinde kapanmıştı.' },
      art: { bg: 'battle', props: ['flags'], actors: [{ kind: 'crowd', x: 24, scale: 7 }, { kind: 'woman', x: 56, label: { tr: 'Aişe' } }, { kind: 'ali', x: 84, label: { tr: 'Hz. Ali' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Hz. Ali savaştan sonra esirleri bıraktı; malı, kadınları ve çocukları ganimet saymadı. Hz. Aişe saygıyla ağırlandı ve kardeşi Muhammed b. Ebi Bekir ile Medine\'ye uğurlandı. Sünnî fıkıh, bağîlerle savaş kurallarının çoğunu bu uygulamadan çıkarır.' },
      art: { bg: 'dawn', props: ['camels'], actors: [{ kind: 'ali', x: 26, label: { tr: 'Hz. Ali' } }, { kind: 'woman', x: 54, label: { tr: 'Aişe' } }, { kind: 'man', x: 80, label: { tr: 'Muhammed b. Ebi Bekir' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Hz. Aişe\'nin sonradan üzüldüğünü gösteren rivayetler Sünnî kaynaklarda da vardır. Senedi ve neye üzüldüğü ayrıca tartışılır. Birçok Sünnî kaynak Hz. Ali\'yi hakka daha yakın taraf sayar. Ca\'ferî yolda bu, onun adaletinin savaşın içindeki delilidir.' },
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
      title: { tr: 'Osman\'ın kanı: önce kısas mı, önce düzen mi?' },
      sunni: { tr: 'Sünni görüş çoğunlukla Hz. Ali\'nin gerekçesini ictihad sayar; karşı tarafın da ictihad ettiğini söyler.' },
      shia: { tr: 'Hz. Ali\'nin tutumu, dağınık bir ortamda önce otoriteyi sağlamak ve sonra davayı yargı yoluyla görmekti; karşı çıkış bu gerekçeyle meşru görülmez.' },
    },
    {
      title: { tr: 'Talha ve Zübeyr\'in biatı' },
      sunni: { tr: 'Sünni kaynaklarda da hem gönüllü hem baskı altında verildiğine dair rivayet vardır.' },
      shia: { tr: 'Hz. Ali biatın gönüllü verildiğini savunmuştur; sonradan "zorla verdik" denmesi bu görüşün karşısında durur.' },
    },
    {
      title: { tr: 'Aişe\'nin pişmanlığı' },
      sunni: { tr: 'Pişmanlık rivayetleri vardır, ancak her birinin senedi ve neye pişman olduğu ayrıca tartışılır. Madelung\'a göre bir rivayet Osman\'a karşı isyanı kışkırtmasına dairdir.' },
      shia: { tr: 'Aynı rivayetlere atıf yapılır; Aişe\'nin Hz. Ali\'ye karşı çıkışı yanlış bir adım olarak değerlendirilir.' },
    },
  ],
  questions: [
    { tr: 'Hz. Ali biatı önce kabul etmek istemedi, ısrar üzerine kabul etti. Hilafeti kendisi aramayan birinin, sonra savaşa zorlanması size ne düşündürüyor?' },
    { tr: 'Anlatılana göre Hz. Ali, Zübeyr\'e Peygamber\'in "Sen Hz. Ali ile haksızlıkla savaşacaksın" sözünü hatırlattı ve Zübeyr saftan ayrıldı. Bu söz Peygamber\'den gelmişse, Hz. Ali\'nin yanında durmanın anlamı sizce nedir?' },
    { tr: 'Hz. Ali, savaştan sonra esirleri bıraktı ve Aişe\'yi saygıyla Medine\'ye gönderdi. Böyle bir davranış, onun savaşa girme nedeni hakkında ne söyler sizce?' },
    { tr: 'Ehl-i Sünnet\'in çoğunluğu Cemel\'de Hz. Ali\'yi hakka daha yakın bulur ve isyancılarla savaş kurallarını onun uygulamasından çıkarır. Bir hukuk kuralının kaynağı olan kişiye, başka konularda da danışmak gerekmez mi sizce?' },
  ],
  summary: { tr: 'Osman\'ın şehadetinden sonra Hz. Ali\'ye (a.s.) biat edildi. Talha, Zübeyr ve Hz. Aişe\'nin Basra\'ya çıkışı Cemel\'e yol açtı. O, savaşı önlemeye çalıştı; bitince esirleri bıraktı ve Hz. Aişe\'yi saygıyla Medine\'ye uğurladı.' },
};

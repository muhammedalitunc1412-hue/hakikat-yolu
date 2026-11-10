import type { HistEvent } from '../types';

// Taberî, Nasr b. Muzâhim (Vak'atü Sıffîn), İbn Kesîr ve Sahih hadis kitaplarının genel anlatımından özetlenmiştir.
// Ebû Mihnef ve Nasr b. Muzâhim rivayetleri Sünni hadisçiler tarafından zayıf sayıldığı için ilgili ayrıntılar 'check'tir.
const art = { bg: 'dune-day' as const, props: ['sun' as const], actors: [{ kind: 'crowd' as const, x: 50, scale: 6 }] };

export const muaviyeAli: HistEvent = {
  id: 'muaviye-ali',
  date: { tr: '36-40 H (656-661)', en: '36-40 AH (656-661)' },
  title: { tr: "Muaviye ve Hz. Ali: biatı reddetmek, Sıffin ve Hakem", en: 'Muawiya and Hz. Ali: refusing allegiance, Siffin and the arbitration' },
  hook: { tr: "Hz. Ali'nin hakkı ortadayken Muaviye biat etmedi. Sıffin'de Kur'an'ı mızrağa taktı.", en: "Why did Muawiya refuse to pledge to Hz. Ali, and what happened from Siffin to the arbitration?" },
  scenes: [
    {
      by: 'both',
      text: { tr: 'Şam\'da **Muaviye** yirmi yıldır bir ordu besliyordu. **Ömer** onu Şam\'a vali bırakmış, **Osman** vilayeti büyütmüştü. İlk tayin Osman\'ın değildir. **Hz. Ali** halife olunca valileri adalet için değiştirdi ve Muaviye\'yi de azletmek istedi. Muaviye azli de biatı da reddetti. Şam, Medine\'nin biatını tanımadı.' },
      art,
      cites: [{ side: 'shia', i: 1 }],
    },
    {
      by: 'both',
      text: { tr: 'Şam camisinde **Muaviye**, **Hz. Osman**\'ın kanlı gömleğini halka gösterdi. Kanı gerekçe yaptı. Hesap istiyorum dediği yerde asıl istediği Şam\'ın tahtıydı. **Hz. Ali**\'nin hakkı ortadayken gömleği öne sürerek biatı vermedi.' },
      art,
      cites: [{ side: 'sunni', i: 3 }],
    },
    {
      by: 'both',
      text: { tr: '**Hz. Ali** Şam\'a mektup yazdı ve elçi gönderdi. Önce biat, sonra mahkeme, dedi. Kanın hesabı ümmet parçalanmadan sorulsun, istedi. **Muaviye** kabul etmedi. İki ordu 37 yılında Fırat kıyısında, **Sıffin**\'de karşı karşıya geldi. İstenen önce biatti. Karşı taraf savaşı seçti.' },
      art,
      cites: [{ side: 'shia', i: 1 }, { side: 'sunni', i: 3 }],
    },
    {
      by: 'both',
      text: { tr: '**Sıffin**\'de **Muaviye**\'nin adamları Fırat\'ın suyunu kesti. **Hz. Ali** suyu alınca Şamlıları susuz bırakmadı, düşmanına su verdi. Kerbelâ\'da aynı zulüm Peygamber\'in evladına yapılacaktı. Sıffin\'de suyu kesenler, o susuzluğun öncüsüydü.' },
      art,
      cites: [{ side: 'shia', i: 0 }],
    },
    {
      by: 'both',
      text: { tr: 'Sıffin\'de yaşlı **Ammâr b. Yâsir**, **Hz. Ali**\'nin safında şehit oldu. Peygamber, onu ==bâği bir grubun== öldüreceğini haber vermişti. Bâği, meşru imama karşı savaşandır. O grup **Muaviye**\'nin ordusuydu. **Amr b. el-As** hadisi hatırlatınca Muaviye, "Onu getirenler öldürdü" diye sözü büktü. Düşen adam Hz. Ali\'nin safındaydı.' },
      art,
      cites: [{ side: 'sunni', i: 0 }, { side: 'sunni', i: 1 }, { side: 'sunni', i: 2 }],
    },
    {
      by: 'both',
      text: { tr: 'Savaş **Hz. Ali**\'nin lehine dönerken **Amr b. el-As**\'ın önerisiyle Kur\'an sayfaları mızraklara takıldı. "Allah\'ın kitabı aramızda hakem olsun" dediler. Bu ibadet değil, ==bir hileydi.== Hz. Ali hileyi o anda söyledi. Ordusundaki bir grup mushafları bahane edip onu durdurdu. Hak, Kur\'an mızrağa asılınca yarıda kaldı.' },
      art,
      cites: [{ side: 'sunni', i: 3 }, { side: 'shia', i: 0 }],
    },
    {
      by: 'both',
      text: { tr: 'Hakem toplantısında **Ebu Musa** ile **Amr b. el-As** oturdu. Yaygın anlatıda Ebu Musa yüzüğü çıkarır. Çıkarmak, Hz. Ali halife değildir demektir. Amr yüzüğü takar. Takmak, Muaviye halifedir demektir. Bu anlatının güveni tartışmalıdır. Tam cümle rivayetten rivayete değişir. **Hz. Ali** bu sonucu kabul etmedi.' },
      art,
      cites: [{ side: 'sunni', i: 3 }, { side: 'shia', i: 2 }],
    },
    {
      by: 'both',
      text: { tr: 'Hakemden sonra **Hz. Ali**\'nin safı bölündü. **Mâlik el-Eşter**, Hz. Ali\'nin sadık komutanıydı. Savaşta öncü, yönetimde güvenilen biri diye anılır. Hz. Ali onu Mısır valiliğine gönderdi. Rivayetlere göre yolda, Kulzüm\'de zehirlendi. Anlatılan o ki bir görevliye rüşvet verildi. Zehir, çoğu rivayette bala karıştırıldı. Şam\'da sevinenler oldu. Muaviye\'nin şu sözü de anlatılır: Hz. Ali\'nin iki kolundan biri Sıffin\'de Ammâr\'la, öbürü şimdi kesildi. **Muaviye** Mısır\'a uzandı. Vali Muhammed b. Ebi Bekir öldürüldü. Busr b. Ertât Hicaz\'da ve Yemen\'de kan döktü. **Hz. Ali** 40 yılında, Kûfe\'de bir sabah namazında şehit edildi.' },
      art,
      cites: [{ side: 'sunni', i: 3 }, { side: 'shia', i: 0 }],
    },
  ],
  sunni: [
    { book: 'Buhari, Sahih', ref: 'No. 447 (Salât; Ammar hadisi; numara kontrol edilecek)', says: { tr: "Peygamber'in Ammar için «seni azgın bir grup öldürecek» demesi." }, grade: { tr: 'Sahih' }, status: 'check' },
    { book: 'Müslim, Sahih', ref: 'No. 2915 (Fiten; Ammar hadisi; numara kontrol edilecek)', says: { tr: "Aynı hadis; Ammar'ı öldürecek grup." }, grade: { tr: 'Sahih' }, status: 'check' },
    { book: 'Ahmed b. Hanbel, Müsned', ref: "Ammar hadisi ve Muaviye'nin cevabı (numara kontrol edilecek)", says: { tr: "Amr b. el-As'ın Muaviye'ye hadisi hatırlatması; «onu getirenler öldürdü» cevabı." }, status: 'check' },
    { book: 'Taberî, Târîhu\'r-Rusül ve\'l-Mülûk', ref: 'Sıffin ve Hakem bölümleri (cilt/sayfa kontrol edilecek)', says: { tr: "Fırat kıyısı, mushafların kaldırılması, Hakem ve sonraki olaylar." }, status: 'check' },
    { book: 'İbn Kesîr, el-Bidâye ve\'n-Nihâye', ref: 'Sıffin bölümü (cilt/sayfa kontrol edilecek)', says: { tr: "Sıffin'i ve Hakem'i ayrıntılı anlatır; Hz. Ali'nin hakka daha yakın olduğunu da belirtir." }, status: 'check' },
  ],
  shia: [
    { book: 'Nasr b. Muzâhim, Vak\'atü Sıffîn', ref: 'Fırat, Ammar ve mushaf bölümleri (sayfa kontrol edilecek)', says: { tr: "Sıffin'in ayrıntılı anlatımı; Fırat'ın ele geçirilmesi ve mushafların mızraklara bağlanması." }, status: 'check' },
    { book: 'Nehcü\'l-Belâğa', ref: 'Muaviye\'ye mektuplar (numara kontrol edilecek)', says: { tr: "Hz. Ali'nin Muaviye'ye yazdığı mektuplar ve Sıffin'e dair hutbeleri." }, status: 'check' },
    { book: 'WikiShia, Muawiya b. Abi Sufyan (ikincil)', ref: 'Madde', says: { tr: "Muaviye'nin Hz. Ali'ye karşı tutumu ve Sıffin'deki rolü." }, url: 'https://en.wikishia.net/view/Mu%27awiya_b._Abi_Sufyan', status: 'check' },
  ],
  disputes: [
    {
      title: { tr: "Biat neden verilmedi?" },
      sunni: { tr: "Muaviye'nin biat etmediği iki gelenekte de anlatılır. Sünni çoğunluk gerekçesini Halife Osman'ın kanı diye anlar, bunu bir ictihad hatası sayar ve Hz. Ali'yi hakka daha yakın bulur." },
      shia: { tr: "Muaviye'nin biat etmediği iki gelenekte de anlatılır. Şii anlatıda amaç iktidardır; Ammar'ın şehadeti de Hz. Ali'nin yanında durmayı gösterir." },
    },
    {
      title: { tr: "Hakem toplantısında bir hile var mı?" },
      sunni: { tr: "Hakem toplantısı iki gelenekte de anlatılır. Amr'ın hilesi Ebû Mihnef kanalıyla gelir ve birçok Sünni âlim ayrıntıya ihtiyatla bakar." },
      shia: { tr: "Hakem toplantısı iki gelenekte de anlatılır. Şii anlatıda Hz. Ali baştan buna karşıydı ve mushafların bir hile olduğunu söylemişti." },
    },
  ],
  questions: [
    { tr: "Hz. Ali önce düzen, sonra dava diyordu. Bu yol, ümmetin kanını korumak bakımından size ne düşündürüyor?" },
    { tr: "Ammar Hz. Ali'nin safında şehit oldu; Peygamber bunu önceden haber vermişti. Bu haber, Ehl-i Beyt'in yanında durmayı size nasıl düşündürüyor?" },
    { tr: "Mushaflar mızraklara asılınca savaş yarıda kaldı. Bu an, Hz. Ali'nin sabrı ve ümmetin sonraki yolu hakkında size ne söylüyor?" },
  ],
  summary: { tr: "Muaviye biatı reddetti. Sıffin'de Ammar Hz. Ali'nin yanında şehit oldu. Mushaflar mızraklara asıldı ve Hakem orduyu böldü. Sonra Mısır alındı, Muhammed b. Ebi Bekir öldürüldü, Mâlik el-Eşter yolda zehirlendi. Hz. Ali 40 H'de şehit edildi." },
};

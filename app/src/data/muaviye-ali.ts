import type { HistEvent } from '../types';

// Taberî, Nasr b. Muzâhim (Vak'atü Sıffîn), İbn Kesîr ve Sahih hadis kitaplarının genel anlatımından özetlenmiştir.
// Ebû Mihnef ve Nasr b. Muzâhim rivayetleri Sünni hadisçiler tarafından zayıf sayıldığı için ilgili ayrıntılar 'check'tir.
const art = { bg: 'dune-day' as const, props: ['sun' as const], actors: [{ kind: 'crowd' as const, x: 50, scale: 6 }] };

export const muaviyeAli: HistEvent = {
  id: 'muaviye-ali',
  date: { tr: '36-40 H (656-661)', en: '36-40 AH (656-661)' },
  title: { tr: "Muaviye ve Hz. Ali: biatı reddetmek, Sıffin ve Hakem", en: 'Muawiya and Ali: refusing allegiance, Siffin and the arbitration' },
  hook: { tr: "Hz. Ali'nin hakkı ortadayken Muaviye biat etmedi. Sıffin'de Kur'an'ı mızrağa taktı.", en: "Why did Muawiya refuse to pledge to Ali, and what happened from Siffin to the arbitration?" },
  scenes: [
    {
      by: 'both',
      text: { tr: "**Hz. Ali** halife olunca hakkı yerini bulmuştu. Valileri değiştirirken **Muaviye**'yi Şam'dan azletti. O, azli de biatı da reddetti. Yirmi yıldır Şam'da bir ordu beslemişti. İktidar, Peygamber'in vasisinin önünde eğilmedi." },
      art,
      cites: [{ side: 'shia', i: 1 }],
    },
    {
      by: 'both',
      text: { tr: "**Muaviye**, **Hz. Osman**'ın kanını bayrak yaptı. Şam camisinde kanlı gömlek halka gösterildi. Gerekçe adalet değil, biatı geciktirmekti. Hesap istiyorum dediği yerde, asıl istediği Şam'ın tahtıydı. **Hz. Ali**'nin hakkı, bir gömleğin ardına saklandı." },
      art,
      cites: [{ side: 'sunni', i: 3 }],
    },
    {
      by: 'both',
      text: { tr: "**Hz. Ali** mektup yazdı, elçi gönderdi. Önce biat, sonra mahkeme, dedi. Kanın hesabı, ümmet parçalanmadan sorulsun, istedi. **Muaviye** eğilmedi. İki ordu 37 H'de Fırat kıyısında, **Sıffin**'de karşı karşıya geldi. Hak, bir mektupta duruyordu. Karşı taraf kılıçta duruyordu." },
      art,
      cites: [{ side: 'shia', i: 1 }, { side: 'sunni', i: 3 }],
    },
    {
      by: 'both',
      text: { tr: "**Sıffin**'de **Muaviye**'nin adamları Fırat'ın suyunu kesti. Susuzluk, sonra Kerbela'da da aynı zulmün adıdır. **Hz. Ali** suyu alınca Şamlıları susuz bırakmadı. Düşmanına su verdi. Onlar, Peygamber'in evladının suyunu kesenlerin babasıydı." },
      art,
      cites: [{ side: 'shia', i: 0 }],
    },
    {
      by: 'both',
      text: { tr: "Yaşlı **Ammar b. Yasir**, **Hz. Ali**'nin safında şehit oldu. Peygamber, onu ==bâği bir grubun== öldüreceğini haber vermişti. O grup, **Muaviye**'nin ordusuydu. **Amr b. el-As** hadisi hatırlatınca Muaviye, \"Onu getirenler öldürdü\" diye sözü büktü. Peygamber'in haberi meydandaydı. Karşı taraf, haberi inkâr etmek için dili büktü." },
      art,
      cites: [{ side: 'sunni', i: 0 }, { side: 'sunni', i: 1 }, { side: 'sunni', i: 2 }],
    },
    {
      by: 'both',
      text: { tr: "Savaş **Hz. Ali**'nin lehine dönerken **Amr b. el-As**'ın önerisiyle Kur'an sayfaları mızraklara takıldı. \"Allah'ın kitabı aramızda hakem olsun\" dediler. Bu, ibadet değil, ==bir hileydi.== **Hz. Ali** hileyi o anda söyledi. Ordusundaki bir grup, mushafın gölgesinde onu durdurdu. Hak, Kur'an'ın mızrağa asılmasıyla yarım kaldı." },
      art,
      cites: [{ side: 'sunni', i: 3 }, { side: 'shia', i: 0 }],
    },
    {
      by: 'both',
      text: { tr: "Hakem diye **Ebu Musa** ile **Amr b. el-As** oturdu. Anlatılan o ki Amr, Ebu Musa'yı aldattı. Önce ikisi de azledilmiş gibi konuşuldu. Sonra **Muaviye** başa kondu. **Hz. Ali**'nin emirliği, bir söz oyununda çalındı. Hile, mızraktan meclise geçmişti." },
      art,
      cites: [{ side: 'sunni', i: 3 }, { side: 'shia', i: 2 }],
    },
    {
      by: 'both',
      text: { tr: "Hakem **Hz. Ali**'nin safını böldü. **Muaviye**'nin eli Mısır'a uzandı. Vali Muhammed b. Ebi Bekir öldürüldü. **Mâlik el-Eşter** yolda zehirlendi. Busr b. Ertât Hicaz ve Yemen'i kana boyadı. Hakem masasında başlayan oyun, evlerin kapısında bitti. **Hz. Ali** 40 H'de, bir sabah namazında şehit edildi." },
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

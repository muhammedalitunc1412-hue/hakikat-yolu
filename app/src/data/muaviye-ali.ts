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
      text: { tr: '**Muaviye**, Şam\'da yaklaşık yirmi yıldır valilik yapıyor ve kendisine bağlı bir ordu besliyordu. Onu Şam\'a ilk kez **Ömer** vali olarak atamış, **Osman** ise yetki alanını genişletmişti. **Hz. Ali** halife olunca, halkın şikâyet ettiği valileri adaleti sağlamak için birer birer görevden aldı. Muaviye\'yi de Şam valiliğinden azletmek istedi. Bu karar kişisel bir hesap değil, ümmetin yönetimini düzeltmek için atılmış bir adımdı. Ama Muaviye hem azli hem de biatı reddetti. Biat, bağlılık sözüdür. Peygamber\'in vasisi Hz. Ali\'ye boyun eğmedi ve elindeki iktidarı bırakmadı. Şam, Medine\'de verilen biatı tanımadı.' },
      art,
      cites: [{ side: 'shia', i: 1 }],
    },
    {
      by: 'both',
      text: { tr: 'Muaviye, halkı Hz. Ali\'ye karşı kışkırtmak için Şam camisinde **Osman**\'ın kanlı gömleğini halka gösterdi. Muaviye, Osman\'ın kanını bir gerekçe olarak kullanıyordu. Ama asıl amacı adalet değil, biatı geciktirmek ve Şam\'daki iktidarını korumaktı. **Hz. Ali**\'nin halifeliği Medine\'de kabul edilmişken o, kanlı bir gömleği öne sürerek biat etmekten kaçındı. O gömlek bir yasın değil, bir siyasetin kalkanına dönüşmüştü.' },
      art,
      cites: [{ side: 'sunni', i: 3 }],
    },
    {
      by: 'both',
      text: { tr: '**Hz. Ali**, Şam\'daki **Muaviye**\'ye mektuplar yazdı ve elçiler gönderdi. Ondan önce biat etmesini, ardından Osman\'ın kanının hesabının mahkemede adaletle sorulmasını istedi. Ümmet parçalanmadan, düzen içinde bir yargılama yapılmasını önerdi. Ama Muaviye bu teklifi kabul etmedi. Biat etmeden önce Osman\'ın katillerinin kendisine teslim edilmesini şart koştu. Sonunda iki ordu, hicretin 37. yılında, Fırat\'ın kıyısındaki **Sıffin** ovasında karşı karşıya geldi. Hz. Ali kılıçtan önce kalemi, savaştan önce sözü denemişti. Savaşı seçen taraf Muaviye oldu.' },
      art,
      cites: [{ side: 'shia', i: 1 }, { side: 'sunni', i: 3 }],
    },
    {
      by: 'both',
      text: { tr: '**Sıffin**\'e ilk ulaşan Muaviye\'nin ordusu, Fırat\'ın kıyısını tuttu ve Hz. Ali\'nin askerlerine suyu kesti. Sonunda Hz. Ali\'nin askerleri nehrin kıyısını ele geçirdi. Bu kez su Hz. Ali\'nin elindeydi. Ama **Hz. Ali** misilleme yapmadı ve Şamlıların da nehirden su almasına müsaade etti. Düşmanına bile su verdi. Yıllar sonra aynı Fırat\'ın kıyısında, Muaviye\'nin oğlu Yezid\'in ordusu, Hz. Ali\'nin oğlu Hz. Hüseyin\'in çocuklarına bir yudum suyu bile çok görecekti.' },
      art,
      cites: [{ side: 'shia', i: 0 }],
    },
    {
      by: 'both',
      text: { tr: 'Sıffin\'de, Hz. Ali\'nin safında savaşan yaşlı sahabe **Ammâr b. Yâsir** şehit oldu. Peygamber yıllar önce onun ==bâği bir grup== tarafından öldürüleceğini haber vermişti. Bâği, meşru imama karşı ayaklanan taraf demektir. Ammâr\'ı öldüren grup, **Muaviye**\'nin ordusuydu. Bu hadis Buhari\'de ve Müslim\'de geçer. Ammâr\'ın ölümü Şam ordusunda büyük bir tedirginlik yarattı. **Amr b. el-As** hadisi Muaviye\'ye hatırlattığında Muaviye, "Onu biz mi öldürdük? Onu buraya getirenler öldürdü" diyerek suçu Hz. Ali\'ye yüklemeye çalıştı. Ama Peygamber\'in sözü açıktı ve Ammâr, Hz. Ali\'nin safında can vermişti.' },
      art,
      cites: [{ side: 'sunni', i: 0 }, { side: 'sunni', i: 1 }, { side: 'sunni', i: 2 }],
    },
    {
      by: 'both',
      text: { tr: 'Savaş **Hz. Ali**\'nin lehine dönmüş ve Şam ordusu yenilmek üzereyken, **Amr b. el-As**\'ın önerisiyle Şam askerleri Kur\'an sayfalarını mızraklarının ucuna taktı. "Allah\'ın Kitabı aramızda hakem olsun" diye bağırdılar. Bu bir ibadet değil, ==bir hileydi.== Hz. Ali bunun bir aldatmaca olduğunu hemen söyledi ve ordusunu savaşa devam etmeye çağırdı. Ama ordusundaki bir grup, mushafları bahane ederek savaşmayı reddetti ve Hz. Ali\'yi savaşı durdurmaya zorladı. Zafer, Kur\'an mızrakların ucuna asılınca elden kaçtı. Yenilmek üzere olan taraf, Allah\'ın kitabını kendisine kalkan yapmıştı.' },
      art,
      cites: [{ side: 'sunni', i: 3 }, { side: 'shia', i: 0 }],
    },
    {
      by: 'both',
      text: { tr: 'Hakem toplantısında Hz. Ali\'nin tarafını **Ebu Musa el-Eş\'arî**, Muaviye\'nin tarafını ise **Amr b. el-As** temsil etti. Yaygın anlatıya göre iki hakem halkın önüne çıktı. Önce Ebu Musa parmağındaki yüzüğü çıkardı. Yüzüğü çıkarmak, Hz. Ali\'nin artık halife olmadığını ilan etmek demekti. Ardından Amr b. el-As kalktı ve yüzüğünü parmağına taktı. Yüzüğü takmak, Muaviye\'nin halife olduğunu ilan etmek demekti. Bu anlatının güvenilirliği tartışmalıdır ve söylenen cümleler rivayetten rivayete değişir. **Hz. Ali** bu sonucu kabul etmedi, çünkü mızraklardaki hile hakem meclisinde de sürmüştü.' },
      art,
      cites: [{ side: 'sunni', i: 3 }, { side: 'shia', i: 2 }],
    },
    {
      by: 'both',
      text: { tr: 'Hakemden sonra **Hz. Ali**\'nin safı bölündü ve Muaviye saldırılarını artırdı. Bu dönemde Hz. Ali\'nin en güvendiği insanlardan biri **Mâlik el-Eşter**\'di. Mâlik, Hz. Ali\'nin en sadık komutanıydı. Savaşta ordunun önünde savaşır, yönetimde ise güvenilir bir devlet adamı olarak bilinirdi. Hz. Ali onu Mısır\'a vali olarak gönderdi. Rivayetlere göre Mâlik yolda, Kulzüm\'de zehirlendi. Anlatılana göre bir görevliye rüşvet verilmiş ve zehir bala karıştırılmıştı. Haber Şam\'a ulaşınca sevinenler oldu. Muaviye\'nin, Hz. Ali\'nin iki kolundan birinin Sıffin\'de Ammâr\'la, diğerinin de şimdi kesildiğini söylediği anlatılır. Ardından Muaviye Mısır\'ı ele geçirdi ve vali **Muhammed b. Ebi Bekir** öldürüldü. **Busr b. Ertât** Hicaz\'da ve Yemen\'de kan döktü. Hicretin 40. yılında **Hz. Ali**, Kûfe\'de bir sabah namazında şehit edildi.' },
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

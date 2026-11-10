import type { HistEvent } from '../types';

// Kaynaklar genel anlatımlardan (İbn İshak/Vâkıdî siyeri, Buhari, Müslim, Taberî) özetlenmiştir; numaralar ve ayrıntılar
// 'check' olarak işaretlidir ve yayın öncesinde birincil kaynaklardan kontrol edilmelidir.
const art = { bg: 'city' as const, props: ['sun' as const], actors: [{ kind: 'crowd' as const, x: 50, scale: 5 }] };

export const muaviyeKimdir: HistEvent = {
  id: 'muaviye-kimdir',
  date: { tr: 'Mekke, yaklaşık 602 — Mekke\'nin fethi, 8 H (630)', en: 'Mecca, c. 602 — the conquest of Mecca, 8 AH' },
  title: { tr: "Muaviye kimdir? Ailesi, Ebu Süfyan, Hind ve Hz. Hamza", en: 'Who is Muawiya? His family, Abu Sufyan, Hind and Hamza' },
  hook: { tr: "Muaviye, Peygamber'e kılıç çekmiş bir evin oğludur. Uhud'da Hz. Hamza'nın ciğeri o evde çiğnendi.", en: "How did Muawiya's parents stand toward Islam, and when did he himself accept it?" },
  scenes: [
    {
      by: 'both',
      text: { tr: '**Muaviye**, Mekke\'de, Kureyş kabilesinin Ümeyyeoğulları koluna mensup bir ailede dünyaya geldi. Babası **Ebu Süfyan**, annesi **Hind bint Utbe**\'ydi. Bu aile Mekke\'nin en zengin ve en nüfuzlu ailelerinden biriydi. Peygamber İslam\'a davet etmeye başladığında, ona en sert karşı çıkan evlerin başında bu ev geliyordu. Yıllar sonra ==Ehl-i Beyt==\'in karşısına dikilecek olan Emevi hanedanı, Peygamber\'e karşı savaş açmış bu evin içinden çıkacaktı.' },
      art,
      cites: [{ side: 'shia', i: 0 }],
    },
    {
      by: 'both',
      text: { tr: 'Peygamber Medine\'ye hicret ettikten sonra Mekke müşrikleri Müslümanlara karşı ardı ardına savaşlar açtı. **Ebu Süfyan**, Bedir\'den sonra müşrik ordularının başına geçti. **Uhud**\'da ve **Hendek**\'te Mekke ordusunu Peygamber\'in üzerine o sürdü. Yıllarca Kureyş\'in bütün gücünü İslam\'ı yok etmek için seferber etti ve kabileleri Medine\'ye karşı kışkırttı. Bu düşmanlık, Mekke fethedilinceye kadar hiç durmadı. Bedir\'den fethe kadar geçen yıllar boyunca Müslümanlara karşı kaldırılan kılıçların başında bu evin reisi duruyordu.' },
      art,
      cites: [{ side: 'shia', i: 0 }, { side: 'sunni', i: 3 }],
    },
    {
      by: 'both',
      text: { tr: 'Bedir Savaşı\'nda **Hind**\'in babası Utbe, kardeşi ve amcası öldürülmüştü. Hind bu acıyı derin bir kine dönüştürdü ve intikam için Uhud\'u bekledi. Peygamber\'in amcası **Hz. Hamza**\'yı öldürmesi için **Vahşi** adındaki bir köleye özgürlük ve ödül vaat etti. Uhud günü Vahşi, fırsatını bulunca mızrağını fırlatarak Hz. Hamza\'yı şehit etti. Bu olay Buhari\'de Vahşi\'nin kendi anlatımıyla geçer. Peygamber\'in en sevdiği amcalarından biri, Hind\'in kiniyle ve bir ödül hesabıyla şehit düşmüştü.' },
      art,
      cites: [{ side: 'sunni', i: 0 }],
    },
    {
      by: 'both',
      text: { tr: 'Savaş bittikten sonra **Hind**, **Hz. Hamza**\'nın cesedinin başına geldi. Siyer kaynaklarına göre cesedi parçaladı, ==ciğerini çıkarıp ağzına aldı== ve çiğnedi. Ardından onun kulağından ve burnundan kendisine kolye yaptı. Peygamber, amcasının bu halde yatan bedenini görünce derin bir acıya büründü ve ağladı. Müslümanlar bu manzara karşısında sarsıldı. Hz. Hamza\'ya yapılan bu vahşet, Muaviye\'nin doğup büyüdüğü evin İslam\'a ve Peygamber\'in ailesine nasıl baktığını açıkça gösteriyordu.' },
      art,
      cites: [{ side: 'sunni', i: 3 }, { side: 'shia', i: 0 }],
    },
    {
      by: 'both',
      text: { tr: 'Hicretin sekizinci yılında Peygamber, büyük bir orduyla Mekke\'ye girdi ve şehir kan dökülmeden fethedildi. Peygamber, "Kim Ebu Süfyan\'ın evine girerse güvendedir" diyerek eski düşmanına bile aman verdi. Bu söz Müslim\'de geçer. Artık savaşacak gücü kalmayan **Ebu Süfyan** ve eşi **Hind** o gün Müslüman olduklarını söylediler. Şii okuyuşuna göre bu, gönülden bir teslimiyet değil, fethin getirdiği zorunlu bir boyun eğiştir. Yıllarca Peygamber\'e karşı savaş açan bir aile, mağlup olduğu gün Müslümanlığı kabul etmişti.' },
      art,
      cites: [{ side: 'sunni', i: 1 }, { side: 'shia', i: 0 }],
    },
    {
      by: 'both',
      text: { tr: '**Muaviye** de fetih yılında, babasıyla birlikte Müslüman oldu. Fetihten kısa süre sonra yapılan Huneyn Savaşı\'nın ganimetleri dağıtılırken Peygamber, Ebu Süfyan\'a ve Muaviye\'ye de pay verdi. Bu pay, kalpleri İslam\'a ısındırılmak istenen yeni Müslümanlara verilen bir yardımdı. Kur\'an bu insanlara müellefe-i kulûb, yani gönülleri kazanılacaklar der. Peygamber onlara cömert davrandı. Ama bu cömertlik, bu ailenin yıllar içinde Ehl-i Beyt\'e karşı duyduğu düşmanlığı ortadan kaldırmadı.' },
      art,
      cites: [{ side: 'shia', i: 0 }],
    },
    {
      by: 'both',
      text: { tr: 'Kaynaklarda Peygamber\'in **Muaviye** hakkında söylediği bir söz de geçer. Peygamber onu bir iş için çağırmış, Muaviye yemek yediğini söyleyerek gelmemişti. Bu birkaç kez tekrarlanınca Peygamber, "Allah karnını doyurmasın" dedi. Bu söz Müslim\'de yer alır. Sünni şârihler bu sözü farklı şekillerde yorumlar. Şii okuyuşu ise onu bir iltifat değil, bir uyarı olarak görür. Muaviye\'nin Peygamber\'in kâtiplerinden olduğu da söylenir. Ama Peygamber\'in yanında kalem tuttuğu söylenen bu kişi, yıllar sonra minberlerde **Hz. Ali**\'ye lanet okutacaktı.' },
      art,
      cites: [{ side: 'sunni', i: 2 }, { side: 'shia', i: 0 }],
    },
    {
      by: 'both',
      text: { tr: 'Mekke\'de Peygamber\'e karşı ordu süren bu aile, fetihle birlikte Müslüman oldu ve kısa sürede ümmetin en güçlü hanedanına dönüştü. Muaviye\'nin döneminde **Hz. Ali** minberlerde lanetlendi. **Hz. Hasan** ile yapılan sulhun şartları çiğnendi. Muaviye ölmeden önce yerine oğlu **Yezid**\'i bıraktı. Peygamber\'in torunu **Hz. Hüseyin**, Yezid\'in emriyle Kerbelâ\'da susuz bırakılarak şehit edildi. Uhud\'da Peygamber\'in amcası Hz. Hamza\'ya düşmanlık eden ev, Kerbelâ\'da da Peygamber\'in torununa kılıç çekmişti.' },
      art,
      cites: [{ side: 'shia', i: 0 }],
    },
  ],
  sunni: [
    { book: 'Buhari, Sahih', ref: 'No. 4072 (Megâzî, Uhud; Vahşi\'nin anlatımı; numara kontrol edilecek)', says: { tr: "Vahşi'nin Hz. Hamza'yı Uhud'da mızrakla öldürmesi." }, grade: { tr: 'Sahih' }, status: 'check' },
    { book: 'Müslim, Sahih', ref: 'No. 1780 (Cihâd ve Siyer; Mekke\'nin fethi; numara kontrol edilecek)', says: { tr: "Peygamber'in Ebu Süfyan'ın evine giren herkese aman vermesi." }, grade: { tr: 'Sahih' }, status: 'check' },
    { book: 'Müslim, Sahih', ref: 'No. 2604 (Birr ve Sıla; Muaviye rivayeti; numara kontrol edilecek)', says: { tr: "Peygamber'in Muaviye için «Allah karnını doyurmasın» demesi ve şarihlerin yorumu." }, grade: { tr: 'Sahih' }, status: 'check' },
    { book: 'İbn İshak/İbn Hişam, es-Sîre; Vâkıdî, el-Meğâzî', ref: 'Uhud bölümü (sayfa kontrol edilecek)', says: { tr: "Hind'in Hz. Hamza'nın cesedine yaptıkları ve Uhud'dan sonraki durum." }, status: 'check' },
  ],
  shia: [
    { book: "Şii siyer ve ricâl kaynakları (genel)", ref: 'Muaviye ve ailesi (bâb ve sayfa kontrol edilecek)', says: { tr: "Ebu Süfyan'ın düşmanlığı, Hind'in Uhud'daki rolü ve Muaviye'nin kâtiplik nitelendirmesinin tartışılması." }, status: 'check' },
  ],
  disputes: [
    {
      title: { tr: "Müslüman oluşu ve kâtiplik" },
      sunni: { tr: "Muaviye'nin fetihle birlikte Müslüman olduğu kaynaklarda anlatılır. Sünni okumada o bir sahabidir ve Peygamber'in kâtiplerindendir; önceki aile geçmişi sonraki hükmünü değiştirmez." },
      shia: { tr: "Muaviye'nin fetihle birlikte Müslüman olduğu kaynaklarda anlatılır. Şii anlatıda o, hayatı tehlikedeyken iman edenler arasında anılır; samimiyet sonraki tutumuyla birlikte değerlendirilir." },
    },
    {
      title: { tr: "Hz. Hamza ve Hind" },
      sunni: { tr: "Hz. Hamza'nın Uhud'da şehit edildiği iki gelenekte de anlatılır. Sünni okumada Hind sonra Müslüman olmuş ve Peygamber onu affetmiştir." },
      shia: { tr: "Hz. Hamza'nın Uhud'da şehit edildiği iki gelenekte de anlatılır. Şii anlatıda bu acı, ailenin Peygamber'e karşı eski tutumunun bir parçası olarak hatırlanır." },
    },
  ],
  questions: [
    { tr: "Muaviye'nin ailesi Peygamber'e karşı savaşmışken, sonra yönetimde yer alması size ne düşündürüyor?" },
    { tr: "Bir insanın Müslüman olmadan önceki aile geçmişi, sonraki yolunu anlamakta size ne kadar yardımcı olur?" },
    { tr: "Müslim'de Muaviye hakkında geçen söz, farklı gönüllerde farklı duyulabiliyor. Bir metni okurken sevgi ve ihtiyat size ne söylüyor?" },
  ],
  summary: { tr: "Muaviye, Mekke'de İslam'a karşı duran Ebu Süfyan ile Hind'in oğludur. Uhud'da Hz. Hamza'nın şehit edilmesi bu ailenin Peygamber'le geçmişinin bir parçasıdır. Aile fetihle Müslüman oldu. Onun kâtip sayılması Sünni kitaplarda yer alır; Şii anlatıda tartışılır." },
};

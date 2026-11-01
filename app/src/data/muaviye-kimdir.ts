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
      text: { tr: "**Muaviye**, Mekke'de Kureyş'in Emevî kolunda doğdu. Babası **Ebu Süfyan**, annesi **Hind bint Utbe**'dir. Bu ev, Peygamber'in davetine en sert kapanan kapılardan biriydi. ==Ehl-i Beyt=='in sonraki yıllarda karşısında bulacağı hanedan, bu kapıdan çıktı." },
      art,
      cites: [{ side: 'shia', i: 0 }],
    },
    {
      by: 'both',
      text: { tr: "**Ebu Süfyan**, İslam'a düşmanlığın başındaydı. **Bedir**'de, **Uhud**'da ve **Hendek**'te müşrik ordusunu Peygamber'in üzerine sürdü. Yıllarca kılıç, vahye karşı çekildi. Mekke düşünceye kadar o ordu dağılmadı." },
      art,
      cites: [{ side: 'shia', i: 0 }, { side: 'sunni', i: 3 }],
    },
    {
      by: 'both',
      text: { tr: "**Bedir**'de **Hind**'in babası, kardeşi ve amcası öldü. Kinini **Uhud**'a taşıdı. **Hz. Hamza**'yı öldürmesi için Vahşi'ye özgürlük ve ödül vaat etti. Vahşi, Peygamber'in amcasını mızrakla şehit etti. O gün Mekke'nin intikamı, ==Ehl-i Beyt=='in aslanına saplandı." },
      art,
      cites: [{ side: 'sunni', i: 0 }],
    },
    {
      by: 'both',
      text: { tr: "**Hind**, **Hz. Hamza**'nın cesedini parçaladı. ==Ciğerini çiğnedi.== Kulak ve burnundan kolye yaptı. Peygamber amcasını bu halde görünce yüreği yarıldı. Bu vahşet, **Muaviye**'nin doğduğu evin İslam'a bakışıdır. Sevenler o günü, Peygamber'in gözyaşıyla anar." },
      art,
      cites: [{ side: 'sunni', i: 3 }, { side: 'shia', i: 0 }],
    },
    {
      by: 'both',
      text: { tr: "Mekke düşünce **Ebu Süfyan**'ın kılıcı bitti. Peygamber, \"Kim Ebu Süfyan'ın evine girerse güvendedir\" diyerek aman verdi. O da, **Hind** de o gün Müslüman göründü. Şii okuyuşta bu, gönülden bir teslim değil, fethin zorladığı bir görüntüydü. Yıllarca ordu süren adam, canı ve evi tehlikeye düşünce kelimeyi söyledi." },
      art,
      cites: [{ side: 'sunni', i: 1 }, { side: 'shia', i: 0 }],
    },
    {
      by: 'both',
      text: { tr: "**Muaviye**'nin Müslümanlığı da fetih yılına, 8 H'ye bağlanır. Huneyn ganimetinde babasıyla birlikte, gönülleri ısındırılacaklar arasına kondu. İman, bir sevgi olarak değil, bir pay olarak duruyordu. Bu ev, Peygamber'in sofrasından pay aldıktan sonra da ==Ehl-i Beyt=='e kılıcını indirmeyecekti." },
      art,
      cites: [{ side: 'shia', i: 0 }],
    },
    {
      by: 'both',
      text: { tr: "Peygamber'in **Muaviye** için \"Allah karnını doyurmasın\" dediği geçer. Şii okuyuşta bu, bir iltifat değil, bir uyarıdır. Kâtiplik iddiası da bu sözün yanında hafif kalır. Kalem tuttuğu söylenen el, sonra minberlerde **Hz. Ali**'ye lanet yazdıracaktı." },
      art,
      cites: [{ side: 'sunni', i: 2 }, { side: 'shia', i: 0 }],
    },
    {
      by: 'both',
      text: { tr: "Peygamber'e karşı ordu süren ev, fetihle birlikte Müslüman göründü. Sonra en güçlü hanedan oldu. **Hz. Ali** minberlerde lanetlendi. **Hz. Hasan**'ın sulhu çiğnendi. **Hz. Hüseyin**'in yolu **Yezid**'e çıktı. Uhud'daki ciğer, Kerbela'daki susuzlukla aynı kapının ardındadır." },
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

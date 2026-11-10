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
      text: { tr: 'Mekke\'de, Kureyş\'in Emevî kolunda **Muaviye** doğdu. Babası **Ebu Süfyan**, annesi **Hind bint Utbe**\'dir. Bu aile, Peygamber\'in davetine en sert karşı çıkan evlerdendi. Sonraki yıllarda ==Ehl-i Beyt==\'in karşısına çıkan hanedan, bu evden çıktı.' },
      art,
      cites: [{ side: 'shia', i: 0 }],
    },
    {
      by: 'both',
      text: { tr: '**Bedir**\'de, **Uhud**\'da ve **Hendek**\'te **Ebu Süfyan** müşrik ordusunun başındaydı. Orduyu Peygamber\'in üzerine sürdü. Mekke fethedilene kadar bu savaş durmadı.' },
      art,
      cites: [{ side: 'shia', i: 0 }, { side: 'sunni', i: 3 }],
    },
    {
      by: 'both',
      text: { tr: '**Bedir**\'de **Hind**\'in babası, kardeşi ve amcası öldü. Bu kini **Uhud**\'a taşıdı. **Hz. Hamza**\'yı öldürsün diye Vahşi\'ye özgürlük ve ödül vaat etti. Vahşi, Peygamber\'in amcasını mızrakla şehit etti.' },
      art,
      cites: [{ side: 'sunni', i: 0 }],
    },
    {
      by: 'both',
      text: { tr: 'Uhud\'da **Hind**, **Hz. Hamza**\'nın cesedini parçaladı, ==ciğerini çiğnedi==, kulak ve burnundan kolye yaptı. Peygamber amcasını bu halde görünce derin acı duydu. Bu, **Muaviye**\'nin doğduğu evin o günkü haliydi.' },
      art,
      cites: [{ side: 'sunni', i: 3 }, { side: 'shia', i: 0 }],
    },
    {
      by: 'both',
      text: { tr: 'Mekke fethedilince Peygamber, "Kim Ebu Süfyan\'ın evine girerse güvendedir" diyerek aman verdi. **Ebu Süfyan** da **Hind** de o gün Müslüman göründü. Şii okuyuşta bu, gönülden bir teslim değil, fethin zorladığı bir görüntüdür. Müslümanım demek, o güne kadarki savaşı silmedi.' },
      art,
      cites: [{ side: 'sunni', i: 1 }, { side: 'shia', i: 0 }],
    },
    {
      by: 'both',
      text: { tr: 'Fetih yılı 8\'dir. **Muaviye** de o yıl Müslüman göründü. Huneyn ganimetinde babasıyla birlikte, gönlü ısındırılacaklar arasına kondu. Bu pay sevgi diye değil, yeni katılanlara verilen ganimet diye anılır. Ev, o payı aldıktan sonra da ==Ehl-i Beyt==\'e karşı durmayı bırakmadı.' },
      art,
      cites: [{ side: 'shia', i: 0 }],
    },
    {
      by: 'both',
      text: { tr: 'Peygamber\'in **Muaviye** için "Allah karnını doyurmasın" dediği bir söz geçer. Şii okuyuşta bu bir iltifat değil, bir uyarıdır. Kalem tuttuğu söylenen kişi, sonra minberlerde **Hz. Ali**\'ye lanet ettirecekti.' },
      art,
      cites: [{ side: 'sunni', i: 2 }, { side: 'shia', i: 0 }],
    },
    {
      by: 'both',
      text: { tr: 'Fetihle birlikte Müslüman görünen bu ev, sonra en güçlü hanedan oldu. **Hz. Ali** minberlerde lanetlendi, **Hz. Hasan**\'ın sulhu çiğnendi, **Hz. Hüseyin**\'in yolu **Yezid**\'e çıktı. Uhud\'da **Hz. Hamza**\'ya yapılan, Kerbelâ\'da susuzluk olarak geri döndü.' },
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

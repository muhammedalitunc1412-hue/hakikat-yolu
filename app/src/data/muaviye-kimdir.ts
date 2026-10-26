import type { HistEvent } from '../types';

// Kaynaklar genel anlatımlardan (İbn İshak/Vâkıdî siyeri, Buhari, Müslim, Taberî) özetlenmiştir; numaralar ve ayrıntılar
// 'check' olarak işaretlidir ve yayın öncesinde birincil kaynaklardan kontrol edilmelidir.
const art = { bg: 'city' as const, props: ['sun' as const], actors: [{ kind: 'crowd' as const, x: 50, scale: 5 }] };

export const muaviyeKimdir: HistEvent = {
  id: 'muaviye-kimdir',
  date: { tr: 'Mekke, yaklaşık 602 — Mekke\'nin fethi, 8 H (630)', en: 'Mecca, c. 602 — the conquest of Mecca, 8 AH' },
  title: { tr: "Muaviye kimdir? Ailesi, Ebu Süfyan, Hind ve Hz. Hamza", en: 'Who is Muawiya? His family, Abu Sufyan, Hind and Hamza' },
  hook: { tr: "Muaviye, Peygamber'e karşı savaşmış bir ailenin çocuğuydu; Müslümanlığı ne zaman öne çıktı?", en: "How did Muawiya's parents stand toward Islam, and when did he himself accept it?" },
  scenes: [
    {
      by: 'both',
      text: { tr: "Muaviye b. Ebi Süfyan, Mekke'de Kureyş'in Emevî kolunda, güçlü bir evde doğdu. Babası Ebu Süfyan b. Harb, annesi Hind bint Utbe'dir. Bu ev, Mekke'nin önde gelen evlerindendi." },
      art,
    },
    {
      by: 'both',
      text: { tr: "Ebu Süfyan, Mekke'de İslam'a karşı direnişin önde gelen isimlerindendi. Bedir'den sonra Kureyş'in önderliğini üstlendi. Uhud ve Hendek'te müşrik ordusunun başındaydı ve Mekke'nin fethine kadar Peygamber'e karşı savaştı." },
      art,
    },
    {
      by: 'both',
      text: { tr: "Bedir'de Hind'in babası Utbe, kardeşi ve amcası öldürüldü. Uhud'da Hind, Hz. Hamza'yı öldürmesi için Vahşi'ye özgürlük ve ödül vaat etti. Vahşi onu mızrakla şehit etti. Bu olay Sünni kaynaklarında da geçmektedir (Buhari, Sahih)." },
      art,
    },
    {
      by: 'both',
      text: { tr: "Siyer kaynakları, Hind'in Hz. Hamza'nın cesedini parçalayıp ciğerini çiğnediğini, kulak ve burnundan kolye yaptığını aktarır. Peygamber amcasını bu halde görünce derin bir üzüntü duydu. Ayrıntılar kitaplara göre değişir. Bu olay Sünni kaynaklarında da geçmektedir (İbn İshak/İbn Hişam, es-Sîre; Vâkıdî, el-Meğâzî)." },
      art,
    },
    {
      by: 'both',
      text: { tr: "Mekke'nin fethinde (8 H, Ramazan) Ebu Süfyan Müslüman oldu. Peygamber, \"Kim Ebu Süfyan'ın evine girerse güvendedir\" diyerek ona ve Mekkelilere aman verdi. Hind de Müslüman oldu; Peygamber onu bağışladı. Bu olay Sünni kaynaklarında da geçmektedir (Müslim, Sahih)." },
      art,
    },
    {
      by: 'both',
      text: { tr: "Muaviye'nin Müslümanlığı çoğu kaynakta fetih yılına, 8 H'ye bağlanır. Bazı rivayetler daha önce gizlice iman ettiğini söyler. Hunayn ganimetinde, gönülleri ısındırılacaklar arasında Ebu Süfyan ve oğullarına pay verildiği anlatılır." },
      art,
    },
    {
      by: 'both',
      text: { tr: "Muaviye, Sünni kaynaklarda Peygamber'in kâtiplerinden sayılır. Müslim'de Peygamber'in ona \"Allah karnını doyurmasın\" dediği geçer. Bu olay Sünni kaynaklarında da geçmektedir (Müslim, Sahih). Şii anlatıda kâtiplik tartışılır ve bu söz bir uyarı olarak anılır." },
      art,
    },
    {
      by: 'both',
      text: { tr: "Muaviye, Mekke'de Peygamber'e karşı savaşmış bir ailenin çocuğuydu. Müslümanlığı fetihle birlikte öne çıktı. Bu geçmiş, sonraki yönetimde sıkça hatırlanır; aynı ev, Peygamber'den sonra en güçlü hanedana dönüştü." },
      art,
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
  summary: { tr: "Muaviye, Mekke'de İslam'a karşı duran Ebu Süfyan ile Hind'in oğludur. Uhud'da Hz. Hamza'nın şehit edilmesi bu ailenin Peygamber'le geçmişinin bir parçasıdır. Bu olay Sünni kaynaklarında da geçmektedir (Buhari, Sahih; İbn İshak/İbn Hişam, es-Sîre; Vâkıdî, el-Meğâzî). Aile fetihle Müslüman oldu. Onun kâtip sayılması Sünni kitaplarda yer alır; Şii anlatıda tartışılır." },
};

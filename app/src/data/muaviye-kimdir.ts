import type { HistEvent } from '../types';

// Kaynaklar genel anlatımlardan (İbn İshak/Vâkıdî siyeri, Buhari, Müslim, Taberî) özetlenmiştir; numaralar ve ayrıntılar
// 'check' olarak işaretlidir ve yayın öncesinde birincil kaynaklardan kontrol edilmelidir.
const art = { bg: 'city' as const, props: ['sun' as const], actors: [{ kind: 'crowd' as const, x: 50, scale: 5 }] };

export const muaviyeKimdir: HistEvent = {
  id: 'muaviye-kimdir',
  date: { tr: 'Mekke, yaklaşık 602 — Mekke\'nin fethi, 8 H (630)', en: 'Mecca, c. 602 — the conquest of Mecca, 8 AH' },
  title: { tr: "Muaviye kimdir? Ailesi, Ebu Süfyan, Hind ve Hz. Hamza", en: 'Who is Muawiya? His family, Abu Sufyan, Hind and Hamza' },
  hook: { tr: "Muaviye'nin babası ve annesi İslam'a karşı nasıl bir yol tuttu; kendisi Müslümanlığı ne zaman kabul etti?", en: "How did Muawiya's parents stand toward Islam, and when did he himself accept it?" },
  scenes: [
    {
      by: 'both',
      text: { tr: "Muaviye b. Ebi Süfyan, Mekke'de Kureyş'in Emevî koluna mensup, güçlü bir ailede doğdu. Babası Ebu Süfyan b. Harb, annesi Hind bint Utbe'dir. Ailenin evi Mekke'nin önde gelen evlerindendi." },
      art,
    },
    {
      by: 'both',
      text: { tr: "Ebu Süfyan, Mekke'de İslam'a karşı direnişin önde gelen isimlerindendi. Bedir'den sonra Kureyş'in önderliğini üstlendi; Uhud ve Hendek'te müşrik ordusunun başındaydı. Mekke'nin fethine kadar Peygamber'e karşı savaştı." },
      art,
    },
    {
      by: 'both',
      text: { tr: "Bedir'de Hind'in babası Utbe, kardeşi ve amcası öldürüldü. Uhud'da (3 H) Hind, Hz. Hamza'yı öldürmesi için Vahşi adlı kölesine azat ve ödül vaat etti. Vahşi, Hz. Hamza'yı mızrakla öldürdü; Buhari 4072'de bu olay Vahşi'nin kendi ağzından anlatılır." },
      art,
    },
    {
      by: 'both',
      text: { tr: "Siyer kaynakları (İbn İshak, Vâkıdî) ve Ahmed b. Hanbel gibi bazı hadis kitapları, Hind'in Hz. Hamza'nın cesedini parçalayıp ciğerini çiğnediğini, kulak ve burunlarından kolye yaptığını aktarır. Peygamber, Hz. Hamza'nın cesedini bu halde görünce çok üzüldü. Ayrıntılar kaynaklara göre farklılık gösterir." },
      art,
    },
    {
      by: 'both',
      text: { tr: "Mekke'nin fethinde (8 H, Ramazan) Ebu Süfyan Müslüman oldu. Peygamber \"Kim Ebu Süfyan'ın evine girerse güvendedir\" diyerek ona ve Mekkelilere aman verdi (Müslim 1780). Hind de bu sırada Müslüman oldu ve Peygamber tarafından affedildi." },
      art,
    },
    {
      by: 'both',
      text: { tr: "Muaviye'nin Müslümanlığı çoğu kaynakta fetih yılına (8 H) bağlanır. Bazı rivayetler daha önce, gizlice Müslüman olduğunu söyler. Hunayn ganimetinde gönülleri İslam'a ısındırılmak istenenler (müellefe-i kulûb) arasında Ebu Süfyan ve oğullarına pay verildiği anlatılır." },
      art,
    },
    {
      by: 'both',
      text: { tr: "Muaviye, Sünni kaynaklarda Peygamber'in kâtiplerinden sayılır; bu nitelendirme Şii kaynaklarında tartışmalıdır. Müslim 2604'te Peygamber'in Muaviye için \"Allah karnını doyurmasın\" dediği rivayet edilir. Sünni şarihler bunu lanet değil, bir âdet sözü olarak yorumlar; Şii kaynaklarında ise bir eleştiri olarak anılır." },
      art,
    },
    {
      by: 'both',
      text: { tr: "Özetle Muaviye, Mekke'de Peygamber'e karşı savaşan bir ailenin çocuğuydu ve Müslümanlığı Mekke'nin fethiyle birlikte öne çıktı. Bu aile geçmişi, sonraki olaylardaki rolü tartışılırken sıkça anılır; çünkü aynı aile, Peygamber'den sonra yönetimde en güçlü hanedana dönüştü." },
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
      title: { tr: "Muaviye'nin Müslümanlığı ve kâtipliği" },
      sunni: { tr: "Muaviye sahabidir ve Peygamber'in kâtiplerinden biridir. Sahabilerin hataları ictihad kapsamında değerlendirilir; Müslüman olmadan önceki aile geçmişi, Müslüman olduktan sonraki hükmünü değiştirmez." },
      shia: { tr: "Fetihte, hayatı tehlikede kalınca Müslüman olanlar (tulekâ) arasında yer alır. Kâtiplik rivayeti zayıf kalır ve samimiyeti, sonraki davranışlarıyla birlikte değerlendirilmelidir." },
    },
    {
      title: { tr: "Hz. Hamza ve Hind olayı" },
      sunni: { tr: "Hind sonradan Müslüman oldu ve Peygamber onu affetti; İslam öncesi işlediği şeyler Müslüman olmakla bağışlanır." },
      shia: { tr: "Olay Muaviye ailesinin Peygamber'e ve Ehl-i Beyt'e karşı eski düşmanlığının bir göstergesidir; bu düşmanlığın sonraki yönetimde de sürdüğü iddia edilir." },
    },
  ],
  questions: [
    { tr: "Muaviye'nin babası ve annesi Peygamber'e karşı savaşmışken, onun Peygamber'den sonra yönetimin en önemli makamlarından birine gelmesi sizce nasıl açıklanabilir?" },
    { tr: "Bir kişinin Müslüman olmadan önceki aile geçmişi, onun sonraki davranışlarını değerlendirirken ne kadar belirleyici olmalıdır sizce?" },
    { tr: "Müslim 2604'teki rivayet hem Sünni hem Şii kaynaklarında geçiyorsa, bunun yorumunu belirleyen şey metin mi yoksa okuyanın önceki kanaati mi sizce?" },
  ],
  summary: { tr: "Muaviye, Mekke'de İslam'a karşı savaşan Ebu Süfyan ve Hind'in oğludur; Uhud'da Hz. Hamza'nın şehit edilmesi ve cesedine yapılanlar bu ailenin Peygamber'le geçmişinin bir parçasıdır. Aile, Mekke'nin fethinde Müslüman oldu; Muaviye'nin sahabi ve kâtip sayılması Sünni kaynaklarında yer alır, Şii kaynaklarında tartışılır." },
};

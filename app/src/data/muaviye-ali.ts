import type { HistEvent } from '../types';

// Taberî, Nasr b. Muzâhim (Vak'atü Sıffîn), İbn Kesîr ve Sahih hadis kitaplarının genel anlatımından özetlenmiştir.
// Ebû Mihnef ve Nasr b. Muzâhim rivayetleri Sünni hadisçiler tarafından zayıf sayıldığı için ilgili ayrıntılar 'check'tir.
const art = { bg: 'dune-day' as const, props: ['sun' as const], actors: [{ kind: 'crowd' as const, x: 50, scale: 6 }] };

export const muaviyeAli: HistEvent = {
  id: 'muaviye-ali',
  date: { tr: '36-40 H (656-661)', en: '36-40 AH (656-661)' },
  title: { tr: "Muaviye ve Hz. Ali: biatı reddetmek, Sıffin ve Hakem", en: 'Muawiya and Ali: refusing allegiance, Siffin and the arbitration' },
  hook: { tr: "Şam valisi Muaviye, Hz. Ali'ye neden biat etmedi ve Sıffin'den Hakem'e giden süreçte neler oldu?", en: "Why did Muawiya refuse to pledge to Ali, and what happened from Siffin to the arbitration?" },
  scenes: [
    {
      by: 'both',
      text: { tr: "Halife Osman'ın şehadetinden sonra Hz. Ali, valileri değiştirirken Muaviye'yi de Şam valiliğinden azletti. Muaviye azli kabul etmedi ve Hz. Ali'ye biat etmedi. Muaviye 20 yıla yakın Şam'ı yönetmişti ve orada güçlü bir ordu ve yönetim kurmuştu." },
      art,
    },
    {
      by: 'both',
      text: { tr: "Muaviye, Halife Osman'ın kanını gerekçe gösterdi: kanın hesabı sorulmadan biat etmeyeceğini söyledi. Taberî'ye göre Şam camisinde Halife Osman'ın kanlı gömleğini ve eşi Naile'nin kopmuş parmaklarını sergileterek halkı duygusal olarak birleştirdi. Bu anlatımın ayrıntıları kaynaklardan ayrıca kontrol edilmelidir." },
      art,
    },
    {
      by: 'both',
      text: { tr: "Hz. Ali, Muaviye'ye mektuplar yazıp elçiler gönderdi; önce biatın gerekli olduğunu, Halife Osman'ın katillerinin hesabının ise düzen kurulduktan sonra mahkemede sorulacağını bildirdi. Muaviye bu teklifi reddetti. Böylece iki ordu 37 H'de Fırat kıyısında, Sıffin'de karşılaştı." },
      art,
    },
    {
      by: 'both',
      text: { tr: "Nasr b. Muzâhim ve Taberî'ye göre Sıffin'de Muaviye'nin adamları ilk olarak suya (Fırat'a) erişimi kesti. Hz. Ali'nin ordusu suyu ele geçirince Şamlıların da su almasına engel olmadı. Bu ayrıntı, sonraki yüzyıllarda Hz. Ali'nin savaşta gösterdiği ahlaka örnek olarak anılır." },
      art,
    },
    {
      by: 'both',
      text: { tr: "Yaşlı sahabi Ammar b. Yasir Hz. Ali'nin safında şehit oldu. Peygamber'in \"Ammar'ı azgın bir grup öldürecek\" sözü Buhari 447 ve Müslim 2915'te geçer. Ahmed b. Hanbel'in Müsned'inde Amr b. el-As'ın bunu Muaviye'ye hatırlattığı, Muaviye'nin ise \"Onu getirenler öldürdü\" dediği aktarılır." },
      art,
    },
    {
      by: 'both',
      text: { tr: "Savaş Hz. Ali'nin lehine dönerken, Amr b. el-As'ın önerisiyle Şamlılar mushafları mızraklara bağlayıp \"Allah'ın kitabı aramızda hakem olsun\" dedi. Hz. Ali bunun bir hile olduğunu, \"hak söz, ama onunla batıl kastediliyor\" dediğini söyledi; fakat ordusundaki büyük bir grup, özellikle Kuran okuyucuları, kitabı kabul etmesi için baskı yaptı." },
      art,
    },
    {
      by: 'both',
      text: { tr: "Hakem olarak Hz. Ali adına Ebu Musa el-Eşari, Muaviye adına Amr b. el-As seçildi. Taberî'nin (Ebû Mihnef kanalıyla) aktardığına göre Dûmetü'l-Cendel'de Amr, Ebu Musa'yı aldattı: Ebu Musa Hz. Ali'yi ve Muaviye'yi azletti, ardından Amr Muaviye'yi onayladı. Bu rivayetin sıhhati Sünni hadisçiler arasında tartışmalıdır." },
      art,
    },
    {
      by: 'both',
      text: { tr: "Hakem'den sonra Hz. Ali'nin saflarında bölünme yaşandı; ayrılanlar Haricîler diye anıldı. Muaviye'nin güçleri Amr b. el-As komutasında Mısır'ı aldı; valisi Muhammed b. Ebi Bekir öldürüldü. Mâlik el-Eşter, Mısır'a giderken yolda zehirlendi. Busr b. Ertât Hicaz ve Yemen'e akın yaptı. Bu ayrıntılar Taberî ve diğer tarih kitaplarında geçer; sayıları ve niteliği tartışılır." },
      art,
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
      title: { tr: "Muaviye neden biat etmedi?" },
      sunni: { tr: "Muaviye, Halife Osman'ın kanı yerini bulmadan biat etmeyeceğini söyledi; bu bir ictihad hatasıdır. Çoğunluk Hz. Ali'yi hakka daha yakın bulur, Muaviye tarafını ictihad hatası yapmış sayar." },
      shia: { tr: "Muaviye'nin amacı kan davası değil iktidardı. Hz. Ali'nin meşru halife olduğu Peygamber'in sözleriyle ortadayken biat etmemek isyandır; Ammar hadisi bunu gösterir." },
    },
    {
      title: { tr: "Hakem'de Amr'ın hilesi" },
      sunni: { tr: "Bu anlatım Ebû Mihnef kanalıyla gelir ve zayıf kabul edilir; İbnü'l-Arabî ve İbn Haldun gibi âlimler ayrıntıların doğruluğuna şüpheyle bakar." },
      shia: { tr: "Rivayet Hakem'in neden Hz. Ali'nin aleyhine sonuçlandığını açıklar; Hz. Ali baştan hakemliğe karşıydı ve mushafların bir hile olduğunu söylemişti." },
    },
  ],
  questions: [
    { tr: "Muaviye Halife Osman'ın kanını gerekçe gösterip biat etmediyse, Hz. Ali'nin önce düzen sonra dava yöntemi sizce daha mantıklı değil midir?" },
    { tr: "Peygamber'in «Ammar'ı azgın grup öldürecek» sözü sahihse, hangi tarafın azgın olduğu konusunda sizce başka bir yorum mümkün müdür?" },
    { tr: "Mushafların mızraklara bağlanması bir hile ise, savaşın kazanılmak üzere olduğu anda bırakılması sizce ümmetin hangi sonuçlarına yol açtı?" },
  ],
  summary: { tr: "Muaviye, Hz. Ali'nin azlini ve biatını reddetti; Halife Osman'ın kanını gerekçe gösterdi. Sıffin'de Ammar'ın şehadeti Peygamber'in sözünü hatırlatırken, mushafların kaldırılması ve Hakem Hz. Ali'nin ordusunda bölünmeye yol açtı. Sonrasında Mısır alındı, Muhammed b. Ebi Bekir ve Mâlik el-Eşter ortadan kalktı; Hz. Ali 40 H'de şehit edildi." },
};

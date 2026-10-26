import type { HistEvent } from '../types';

// Taberî, Nasr b. Muzâhim (Vak'atü Sıffîn), İbn Kesîr ve Sahih hadis kitaplarının genel anlatımından özetlenmiştir.
// Ebû Mihnef ve Nasr b. Muzâhim rivayetleri Sünni hadisçiler tarafından zayıf sayıldığı için ilgili ayrıntılar 'check'tir.
const art = { bg: 'dune-day' as const, props: ['sun' as const], actors: [{ kind: 'crowd' as const, x: 50, scale: 6 }] };

export const muaviyeAli: HistEvent = {
  id: 'muaviye-ali',
  date: { tr: '36-40 H (656-661)', en: '36-40 AH (656-661)' },
  title: { tr: "Muaviye ve Hz. Ali: biatı reddetmek, Sıffin ve Hakem", en: 'Muawiya and Ali: refusing allegiance, Siffin and the arbitration' },
  hook: { tr: "Hz. Ali halife olunca Muaviye biat etmedi; Sıffin'de mushaflar mızraklara asıldı.", en: "Why did Muawiya refuse to pledge to Ali, and what happened from Siffin to the arbitration?" },
  scenes: [
    {
      by: 'both',
      text: { tr: "Halife Osman'ın şehadetinden sonra Hz. Ali, valileri değiştirirken Muaviye'yi Şam'dan azletti. Muaviye azli kabul etmedi ve biat etmedi. Yaklaşık yirmi yıldır Şam'da güçlü bir ordu ve yönetim kurmuştu." },
      art,
    },
    {
      by: 'both',
      text: { tr: "Muaviye, Halife Osman'ın kanını gerekçe gösterdi ve hesap sorulmadan biat etmeyeceğini söyledi. Taberî'ye göre Şam camisinde Halife Osman'ın kanlı gömleği ve eşi Naile'nin parmakları halka gösterildi. Bu ayrıntı ayrıca kontrol edilmelidir." },
      art,
    },
    {
      by: 'both',
      text: { tr: "Hz. Ali mektuplar yazıp elçiler gönderdi. Önce biat gerektiğini, katillerin hesabının düzen kurulunca mahkemede sorulacağını bildirdi. Muaviye bunu kabul etmedi. İki ordu 37 H'de Fırat kıyısında, Sıffin'de karşılaştı." },
      art,
    },
    {
      by: 'both',
      text: { tr: "Sıffin'de önce Muaviye'nin adamları Fırat suyunu kesti. Hz. Ali'nin ordusu suyu alınca Şamlıların su almasına engel olmadı. Bu incelik, onun savaştaki ahlakını gösterir. Bu olay Sünni kaynaklarında da geçmektedir (Taberî, Târîhu'r-Rusül ve'l-Mülûk)." },
      art,
    },
    {
      by: 'both',
      text: { tr: "Yaşlı sahabi Ammar b. Yasir, Hz. Ali'nin safında şehit oldu. Peygamber, onu azgın bir grubun öldüreceğini haber vermişti. Amr b. el-As bunu Muaviye'ye hatırlatınca Muaviye \"Onu getirenler öldürdü\" dedi. Bu olay Sünni kaynaklarında da geçmektedir (Buhari, Sahih; Müslim, Sahih; Ahmed b. Hanbel, Müsned)." },
      art,
    },
    {
      by: 'both',
      text: { tr: "Savaş Hz. Ali'nin lehine dönerken, Amr b. el-As'ın önerisiyle Şamlılar mushafları mızraklara bağladı. \"Allah'ın kitabı aramızda hakem olsun\" dediler. Hz. Ali bunun bir hile olduğunu söyledi. Ordusundaki büyük bir grup, özellikle Kuran okuyanlar, kabul etmesi için baskı yaptı." },
      art,
    },
    {
      by: 'both',
      text: { tr: "Hakem olarak Hz. Ali adına Ebu Musa el-Eşari, Muaviye adına Amr b. el-As seçildi. Taberî'de Dûmetü'l-Cendel'de Amr'ın Ebu Musa'yı aldattığı aktarılır: önce ikisi de azledilmiş, sonra Muaviye onaylanmıştır. Bu rivayetin sıhhati tartışmalıdır." },
      art,
    },
    {
      by: 'both',
      text: { tr: "Hakem'den sonra Hz. Ali'nin safları bölündü; ayrılanlara Haricîler denir. Muaviye'nin güçleri Amr b. el-As ile Mısır'ı aldı; vali Muhammed b. Ebi Bekir öldürüldü. Mâlik el-Eşter yolda zehirlendi. Busr b. Ertât Hicaz ve Yemen'e akın yaptı. Sayılar ve bazı ayrıntılar tartışılır." },
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
  summary: { tr: "Muaviye biatı reddetti. Sıffin'de Ammar Hz. Ali'nin yanında şehit oldu. Bu olay Sünni kaynaklarında da geçmektedir (Buhari, Sahih; Müslim, Sahih). Mushaflar mızraklara asıldı ve Hakem orduyu böldü. Sonra Mısır alındı, Muhammed b. Ebi Bekir öldürüldü, Mâlik el-Eşter yolda zehirlendi. Hz. Ali 40 H'de şehit edildi." },
};

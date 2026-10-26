import type { HistEvent } from '../types';

// Taberî, İbn Abdilber (el-İstîâb), Zehebî, Tirmizî ve Ebû Dâvûd'un genel anlatımından özetlenmiştir; numaralar 'check'tir.
const art = { bg: 'city' as const, props: ['sun' as const, 'minbar' as const], actors: [{ kind: 'crowd' as const, x: 50, scale: 6 }] };

export const muaviyeIktidar: HistEvent = {
  id: 'muaviye-iktidar',
  date: { tr: '41-60 H (661-680)', en: '41-60 AH (661-680)' },
  title: { tr: "Muaviye'nin iktidarı: mülk, Ziyâd, Hucr ve Yezid'in veliahtlığı", en: "Muawiya's rule: kingship, Ziyad, Hujr and the succession of Yazid" },
  hook: { tr: "Muaviye'nin yıllarında hilafet mülke döndü; Hz. Ali'ye sövüldü ve Yezid veliaht oldu.", en: "How did Muawiya turn the caliphate into a monarchy in twenty years, and how did he prepare the road to Karbala?" },
  scenes: [
    {
      by: 'both',
      text: { tr: "Peygamber'den şöyle bir hadis aktarılır: \"Hilafet benden sonra otuz yıl sürecek, sonra ısırıcı krallık (mülk) olacak.\" Bu olay Sünni kaynaklarında da geçmektedir (Tirmizi, el-Câmi'; Ebû Dâvûd, Sünen). Muaviye'nin \"ben kralların ilkiyim\" dediği de rivayet edilir. Emevî yönetimi bu çizgide kuruldu." },
      art,
    },
    {
      by: 'both',
      text: { tr: "Muaviye, Ziyâd b. Ebîh'i Ebu Süfyan'ın oğlu sayıp kardeşi ilan etti. Buna istilhak denir (44 H). Birçok Sünni âlim bunu, Peygamber'in \"çocuk, yatak sahibinindir\" sözüne aykırı bularak eleştirdi. Ziyâd, Kûfe ve Basra'da Hz. Ali'yi sevenlere karşı sert davrandı. Bu olay Sünni kaynaklarında da geçmektedir (Taberî, Târîhu'r-Rusül ve'l-Mülûk; İbn Abdilber, el-İstîâb)." },
      art,
    },
    {
      by: 'both',
      text: { tr: "Muaviye döneminde Cuma hutbelerinde Hz. Ali'ye sövüldü. Bu, Ehl-i Beyt sevgisine ağır bir haksızlıktı. Müslim'de o, Sa'd b. Ebi Vakkas'a neden sövmediğini sorar. Bu olay Sünni kaynaklarında da geçmektedir (Müslim, No. 2404). Valilere emir yazıldığı Şii kitaplarda anlatılır; uygulama Ömer b. Abdülaziz'e kadar sürdü." },
      art,
    },
    {
      by: 'both',
      text: { tr: "Sövmeyi reddeden Hucr b. Adî, Hz. Ali'nin yiğit komutanıydı. Ziyâd onu on iki kadar arkadaşıyla Şam'a gönderdi; 51 H'de Mercü Azra'da öldürüldüler. Hz. Aişe bu öldürmeyi yadırgadı; Muaviye kendini savundu. Sahabiden Amr b. Hamk el-Huzâî de öldürüldü ve başının şehirler arasında taşındığı aktarılır. Bu olay Sünni kaynaklarında da geçmektedir (Taberî, Târîhu'r-Rusül ve'l-Mülûk; İbn Abdilber, el-İstîâb)." },
      art,
    },
    {
      by: 'both',
      text: { tr: "Muaviye oğlu Yezid'i veliaht ilan etti (yaklaşık 56 H). Bu, babadan oğula geçen ilk veliahtlık sayılır. Medine'de Hz. Hüseyin, Abdullah b. Ömer ve Abdullah b. Zübeyr buna razı olmadı. Abdurrahman b. Ebi Bekir de itiraz etti. Bu olay Sünni kaynaklarında da geçmektedir (Buhari, Sahih)." },
      art,
    },
    {
      by: 'shia',
      text: { tr: "Yezid'in veliahtlığı, babadan oğula geçişin kapısını açtı. Şii kaynaklarda bu, Hz. Hasan ile yapılan sulhun halife tayin etmeme şartının çiğnenmesi sayılır. Şartın bu biçimde durduğu Sünni kitaplarda tartışmalıdır." },
      art,
    },
    {
      by: 'both',
      text: { tr: "Muaviye Receb 60'ta öldü; yönetim Yezid'e geçti. Medine valisi Hz. Hüseyin'den biat istedi. Hz. Hüseyin biat etmedi ve yola çıktı. Onun duruşu, hakkı bir saltanat için eğmemekti. Kerbela, bu düzenin ardından gelen büyük imtihan olarak anılır." },
      art,
    },
    {
      by: 'both',
      text: { tr: "Sünni kaynaklarda Muaviye; sahabi, kâtip, Şam'ı uzun yıllar yöneten, Kıbrıs'ı fetheden ve ilk donanmayı kuran biri olarak anılır. İbn Abbas'ın \"Muaviye fakihtir\" dediği de geçer. Bu olay Sünni kaynaklarında da geçmektedir (Buhari, Sahih). Sövme, Hucr'un öldürülmesi ve Yezid'in veliahtlığı ise ayrıca sorulması gereken ağır konulardır." },
      art,
    },
  ],
  sunni: [
    { book: 'Tirmizi, el-Câmi\'', ref: 'No. 2226 (Fiten; hilafet otuz yıl; numara kontrol edilecek)', says: { tr: "«Hilafet otuz yıldır, sonra mülk olacak» hadisi." }, status: 'check' },
    { book: 'Ebû Dâvûd, Sünen', ref: 'No. 4646 (Sünnet; numara kontrol edilecek)', says: { tr: "Aynı hadisin başka rivayeti." }, status: 'check' },
    { book: 'Müslim, Sahih', ref: 'No. 2404 (Fezâilü\'s-sahâbe)', says: { tr: "Muaviye'nin Sa'd b. Ebi Vakkas'a Hz. Ali'ye neden sövmediğini sorması." }, grade: { tr: 'Sahih' }, url: 'https://hadithunlocked.com/muslim:2404a', status: 'verified' },
    { book: 'Buhari, Sahih', ref: 'No. 4827 (Tefsir, Ahkâf; Abdurrahman b. Ebi Bekir; numara kontrol edilecek)', says: { tr: "Abdurrahman b. Ebi Bekir'in Yezid'in biatına itirazı." }, grade: { tr: 'Sahih' }, status: 'check' },
    { book: 'Buhari, Sahih', ref: 'No. 3764-3765 (Menâkıb; Muaviye; numara kontrol edilecek)', says: { tr: "İbn Abbas'ın Muaviye hakkındaki «fakihtir» sözü." }, grade: { tr: 'Sahih' }, status: 'check' },
    { book: 'Taberî, Târîhu\'r-Rusül ve\'l-Mülûk; İbn Abdilber, el-İstîâb', ref: 'Hucr, Amr b. Hamk ve Ziyâd istilhakı (cilt/sayfa kontrol edilecek)', says: { tr: "51 H olayları, Ziyâd'ın Muaviye'nin kardeşi ilan edilmesi ve Yezid'in veliahtlığı." }, status: 'check' },
  ],
  shia: [
    { book: 'İbn Ebi\'l-Hadîd, Şerhu Nehci\'l-Belâğa', ref: 'Muaviye ve sövme genelgeleri (cilt/sayfa kontrol edilecek)', says: { tr: "Muaviye'nin valilerine Hz. Ali'ye sövülmesini emretmesi; Medâinî'den aktarım." }, status: 'check' },
    { book: 'WikiShia, Muawiya b. Abi Sufyan (ikincil)', ref: 'Madde', says: { tr: "Muaviye'nin iktidarı, Hucr b. Adî ve Yezid'in veliahtlığı." }, url: 'https://en.wikishia.net/view/Mu%27awiya_b._Abi_Sufyan', status: 'check' },
  ],
  disputes: [
    {
      title: { tr: "Hilafet mülke mi döndü?" },
      sunni: { tr: "Muaviye'nin 41 H'den sonra yönetime geçtiği ortaktır. Sünni okumada o halifedir; yönetimi bir ictihad ve barış sayılır." },
      shia: { tr: "Muaviye'nin 41 H'den sonra yönetime geçtiği ortaktır. Şii anlatıda veliahtlık, istilhak ve sövme, hilafetin mirasa ve zora döndüğünü gösterir." },
    },
    {
      title: { tr: "Hucr'un öldürülmesinde sorumluluk" },
      sunni: { tr: "Hucr'un Mercü Azra'da öldürüldüğü kaynaklarda anlatılır. Emrin kimde olduğu tartışılır; pek çok Sünni âlim bu öldürmeyi hata sayar." },
      shia: { tr: "Hucr'un Mercü Azra'da öldürüldüğü kaynaklarda anlatılır. Şii anlatıda bu, Hz. Ali'ye sövmeyi reddettiği için verilen bir cezadır." },
    },
  ],
  questions: [
    { tr: "Hilafetin otuz yıl süreceği haberi ve ardından gelen veliahtlık, bu yönetimi size hangi adla düşündürüyor?" },
    { tr: "Minberde Hz. Ali'ye sövülmesi ve bunu reddedenlerin öldürülmesi, Ehl-i Beyt sevgisi bakımından size ne söylüyor?" },
    { tr: "Hz. Hüseyin ve Abdurrahman b. Ebi Bekir, Yezid'in veliahtlığına razı olmadı. Onların duruşu, biatı zorlayan bir düzen karşısında size ne öğretiyor?" },
  ],
  summary: { tr: "Muaviye 41 H'den sonra Şam merkezli bir yönetim kurdu. Ziyâd'ı kardeşi ilan etti. Hutbelerde Hz. Ali'ye sövüldü. Bu olay Sünni kaynaklarında da geçmektedir (Müslim, No. 2404). Hucr b. Adî öldürüldü ve oğlu Yezid veliaht oldu. Sünni kitaplarda Muaviye, sahabi ve yönetici olarak da anılır. Şii anlatıda bu yıllar, Kerbela'ya giden yolu hazırlamıştır." },
};

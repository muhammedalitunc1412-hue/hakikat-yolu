import type { HistEvent } from '../types';

// Taberî, İbn Abdilber (el-İstîâb), Zehebî, Tirmizî ve Ebû Dâvûd'un genel anlatımından özetlenmiştir; numaralar 'check'tir.
const art = { bg: 'city' as const, props: ['sun' as const, 'minbar' as const], actors: [{ kind: 'crowd' as const, x: 50, scale: 6 }] };

export const muaviyeIktidar: HistEvent = {
  id: 'muaviye-iktidar',
  date: { tr: '41-60 H (661-680)', en: '41-60 AH (661-680)' },
  title: { tr: "Muaviye'nin iktidarı: mülk, Ziyâd, Hucr ve Yezid'in veliahtlığı", en: "Muawiya's rule: kingship, Ziyad, Hujr and the succession of Yazid" },
  hook: { tr: "Muaviye 20 yıllık yönetiminde hilafeti nasıl bir krallığa çevirdi ve Kerbela'ya giden yolu nasıl hazırladı?", en: "How did Muawiya turn the caliphate into a monarchy in twenty years, and how did he prepare the road to Karbala?" },
  scenes: [
    {
      by: 'both',
      text: { tr: "Peygamber'den \"Hilafet benden sonra otuz yıl sürecek, sonra ısırıcı krallık (mülk) olacak\" diye bir hadis aktarılır (Tirmizi 2226, Ebû Dâvûd 4646). Muaviye'nin kendisinin de «ben krallarının ilkiyim» dediği rivayet edilir; Emevî yönetimi bu anlayışla kuruldu." },
      art,
    },
    {
      by: 'both',
      text: { tr: "Muaviye, Ziyâd b. Ebîh'i babası Ebu Süfyan'ın oğlu sayarak kardeşi ilan etti (istilhak, 44 H). Bu, Peygamber'in «çocuk, yatak sahibinindir» hadisine aykırı bulunduğu için birçok Sünni âlimce eleştirildi. Ziyâd, Kûfe ve Basra'da Hz. Ali taraftarlarına karşı sert uygulamalar yaptı." },
      art,
    },
    {
      by: 'both',
      text: { tr: "Hz. Ali'ye sövme, Muaviye'nin yönetiminde Cuma hutbelerinde yerleşik bir uygulama oldu. Muaviye'nin bunu valilerine emrettiği Şii kaynaklarında anlatılır; Müslim 2404'te ise Muaviye'nin Sa'd b. Ebi Vakkas'a «Ebu Turab'a neden sövmüyorsun?» diye sorduğu geçer. Bu uygulama Ömer b. Abdülaziz'e kadar sürdü." },
      art,
    },
    {
      by: 'both',
      text: { tr: "Sövmeyi reddeden Hucr b. Adî, Hz. Ali'nin yiğit komutanıydı. Ziyâd onu on iki kadar arkadaşıyla birlikte Şam'a gönderdi; 51 H'de Mercü Azra'da öldürüldüler. Hz. Aişe'nin bu öldürmeyi Muaviye'ye yadırgattığı anlatılır; Muaviye kendini savunmuştur. Peygamber'in sahabilerinden Amr b. Hamk el-Huzâî de öldürüldü ve başının şehirler arasında taşındığı aktarılır." },
      art,
    },
    {
      by: 'both',
      text: { tr: "Muaviye, kendi oğlu Yezid'i veliaht ilan etti (yaklaşık 56 H). Bu, İslam tarihinde babadan oğula ilk veliahtlık sayılır. Medine'de Hz. Hüseyin, Abdullah b. Ömer, Abdullah b. Zübeyr ve Abdurrahman b. Ebi Bekir buna razı olmadı; Buhari 4827'de Abdurrahman'ın itirazı geçer." },
      art,
    },
    {
      by: 'shia',
      text: { tr: "Şii kaynaklarına göre Yezid'in veliahtlığı, Hz. Hasan ile yapılan sulhun \"kendinden sonrasına halife tayin etmeme\" şartının çiğnenmesiydi. Bu yüzden Hz. Hasan'ın zehirlenmesi, veliahtlığı kolaylaştırmak için aktarılır. Sünni kaynaklarında şartın bu biçimde var olduğu tartışmalıdır." },
      art,
    },
    {
      by: 'both',
      text: { tr: "Muaviye Receb 60'ta (680) öldü ve yönetim Yezid'e geçti. Medine valisi Hz. Hüseyin'den Yezid için biat istedi; Hz. Hüseyin biat etmeyip yola çıktı. Kerbela, Muaviye'nin kurduğu bu düzenin doğrudan sonucu olarak anılır." },
      art,
    },
    {
      by: 'both',
      text: { tr: "Sünni kaynaklarında Muaviye; sahabi, kâtip, Şam'ı uzun yıllar başarıyla yöneten, Kıbrıs'ı fetheden ve ilk donanmayı kuran biri olarak anılır. Buhari 3764-3765'te İbn Abbas'ın «Muaviye fakihtir» dediği geçer. Eleştiriler ise sövme, Hucr ve Yezid'in veliahtlığı gibi uygulamalar üzerinedir." },
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
      title: { tr: "Muaviye hilafeti krallığa mı çevirdi?" },
      sunni: { tr: "Muaviye halifedir; yönetimi bir ictihaddır ve Müslümanlar arasında barışı sağlamıştır. «Mülk» hadisi bir haber verişidir, Muaviye'yi ayrıca eleştirmez." },
      shia: { tr: "Veliahtlık, istilhak ve sövme, Peygamber'in belirlediği ölçülerden saptığını gösterir; hilafet şûra ya da nass ile değil, miras ve zorla el değiştirmeye dönüşmüştür." },
    },
    {
      title: { tr: "Hucr b. Adî'nin öldürülmesi" },
      sunni: { tr: "Muaviye'nin emri ve sorumluluğu kaynaklarda farklı aktarılır; Ziyâd'ın yazışması ve Muaviye'nin bunun üzerine verdiği karar tartışmalıdır. Pek çok Sünni âlim bu öldürmeyi hata sayar." },
      shia: { tr: "Hucr'un Hz. Ali'ye sövmeyi reddettiği için öldürülmesi, Muaviye'nin siyasetinin doğrudan bir sonucudur." },
    },
  ],
  questions: [
    { tr: "Peygamber hilafetin otuz yıl süreceğini haber verdiyse, Muaviye'nin yönetimini sizce hangi kavramla (hilafet mi, mülk mü) adlandırmak daha doğrudur?" },
    { tr: "Bir sahabinin Hz. Ali'ye sövdürmesi ve sövmeyi reddedenleri öldürtmesi, kendisinin «sahabi» olmasıyla nasıl bağdaştırılabilir sizce?" },
    { tr: "Yezid'in veliahtlığına Abdurrahman b. Ebi Bekir ve Hz. Hüseyin gibi isimler itiraz ettiyse, biatı zorlayan bir yönetimin meşruluğu hakkında ne söylenebilir sizce?" },
  ],
  summary: { tr: "Muaviye, 41 H'den sonra Şam merkezli bir yönetim kurdu. Ziyâd'ı istilhak etti, kürsülerde Hz. Ali'ye sövmeyi yaygınlaştırdı, Hucr b. Adî gibi sövmeyi reddedenleri öldürttü ve oğlu Yezid'i veliaht ilan etti. Sünni kaynaklarında sahabi ve başarılı bir yönetici olarak anılır; Şii kaynaklarında ise Kerbela'ya giden yolun hazırlayıcısıdır." },
};

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
      text: { tr: 'Rivayete göre **Hz. Peygamber**, hilafetin otuz yıl süreceğini ve ardından yönetimin krallığa dönüşeceğini haber verdi. **Muaviye**\'ye ise kendisini ilk kral olarak niteleyen bir söz nispet edilir. Muaviye döneminde yönetimin niteliğine ilişkin tartışma, daha sonra oğlu Yezid için bağlılık sözü alınmaya başlanınca yeni bir aşamaya girdi.' },
      art,
      cites: [{ side: 'sunni', i: 0 }, { side: 'sunni', i: 1 }],
    },
    {
      by: 'shia',
      text: { tr: '**Muaviye** Şam\'da Yeşil Saray\'ı, Hadrâ\'yı yaptırdı. **Ebuzer el-Gifârî** ona dedi: "Bu Allah\'ın malındansa hıyanet, kendi malınsa israftır." Belâzurî\'nin Ensâbü\'l-Eşrâf\'ında bu söz okundu. Muaviye sustu. Sonra Ebuzer şikâyet edildi. Şam\'dan sürüldü. Rebeze\'de yalnız öldü. O, dilenci değildi. Hakkı söyleyen bir sahabiydi.' },
      art,
      cites: [{ side: 'shia', i: 2 }],
    },
    {
      by: 'both',
      text: { tr: '**Muaviye**, **Ziyâd**\'ı Ebu Süfyan\'ın oğlu diye kardeş edindi. Buna istilhak denir. Peygamber\'in "çocuk, yatak sahibinindir" sözü çiğnendi. Bu soyu iktidar için uydurdu. **Ziyâd**, Kûfe ve Basra\'da **Hz. Ali**\'yi sevenlerin üzerine salındı. Bu kardeşlik, o zulme alet edildi.' },
      art,
      cites: [{ side: 'sunni', i: 5 }],
    },
    {
      by: 'both',
      text: { tr: 'Cuma hutbelerinde, minberde **Hz. Ali**\'ye ==lanet== okutuldu. Orada Peygamber\'in kardeşine sövüldü. **Muaviye**, Sa\'d\'a neden sövmediğini sordu. Valilere, sövmeyi ve sevenleri cezalandırmayı yazdığı anlatılır. Bu zulüm, Ömer b. Abdülaziz\'e kadar sürdü. ==Ehl-i Beyt== sevgisi, o yıllarda bir suç sayıldı.' },
      art,
      cites: [{ side: 'sunni', i: 2 }, { side: 'shia', i: 0 }],
    },
    {
      by: 'both',
      text: { tr: '**Hucr b. Adî**, **Hz. Ali**\'nin yiğit komutanıydı. Laneti reddetti. **Ziyâd** onu on iki kadar arkadaşıyla Şam\'a gönderdi. 51 H\'de ==Mercü Azra\'da katledildiler.== Hucr iki rekât namaz kıldı, kendini şehit bildi. **Muaviye** bu kanı savundu. Amr b. Hamk\'ın başı şehirler arasında taşındı. Minberdeki lanet, bu öldürmelere vardı.' },
      art,
      cites: [{ side: 'sunni', i: 5 }, { side: 'shia', i: 0 }],
    },
    {
      by: 'both',
      text: { tr: '**Muaviye**, oğlu **Yezid**\'i zorla veliaht yaptı. Veliaht, kendinden sonra hükümdar olacak oğuldur. Hilafet, babadan oğula geçen bir mülk oldu. **Hz. Hasan** ile verilen "kendimden sonra halife dikmem" sözü de çiğnendi. Medine\'de **Hz. Hüseyin** bu zulme boyun eğmedi. Abdullah b. Ömer, İbn Zübeyr ve Abdurrahman b. Ebi Bekir de razı olmadı. Tahtı bir oğul için ümmete zorla yükledi.' },
      art,
      cites: [{ side: 'sunni', i: 3 }, { side: 'sunni', i: 5 }],
    },
    {
      by: 'shia',
      text: { tr: '**Yezid**, şarap içmekle, av köpekleri ve maymunlarla eğlenmekle, fısk ve ahlaksızlıkla anılır. Medinelilerin bu suçlaması tarihlerde aktarılır. **Hz. Hüseyin** bu biatı vermedi. Biat etmek, yönetime bağlılık sözü vermek demekti. Bu biatı vermek, Peygamber\'in torununu o saltanata boyun eğdirmek demekti. Kerbela, bu veliahtlığın sonucudur.' },
      art,
      cites: [{ side: 'shia', i: 1 }],
    },
    {
      by: 'both',
      text: { tr: 'Receb 60\'ta **Muaviye** öldü. Taht **Yezid**\'e kaldı. Medine valisi **Hz. Hüseyin**\'den biat istedi. O bu biatı vermedi. Yola çıktı. Hakkı, bir sarhoş saltanat için satmadı. Kerbela, bu yolun ucundaki şehadettir. Bu düzeni baba kurmuştu. Oğul, orada suyu kesti.' },
      art,
      cites: [{ side: 'shia', i: 1 }],
    },
    {
      by: 'both',
      text: { tr: 'O yıllarda onu sahabi ve fakih diye ananlar da oldu. Minber ise **Hz. Ali**\'ye lanet okuyordu. **Hucr**\'un kanı Mercü Azra\'daydı. **Ziyâd** kardeş diye çağrılmıştı. **Yezid** veliaht yapılmıştı. Şii okuyuş, bu yılları bir fazilet değil, Kerbela\'ya giden zulüm diye okur.' },
      art,
      cites: [{ side: 'sunni', i: 4 }, { side: 'shia', i: 0 }],
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
    { book: 'Belâzurî, Ensâbü\'l-Eşrâf', ref: 'cilt 5, s. 542', says: { tr: 'Muaviye Şam\'da Hadrâ\'yı yaptırır. Ebuzer, Allah\'ın malındansa hıyanet, kendi malınsa israf der. Muaviye susar.' }, url: 'https://lib.eshia.ir/40503/5/542', status: 'verified' },
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
  summary: { tr: "Muaviye 41 H'den sonra Şam merkezli bir yönetim kurdu. Ziyâd'ı kardeşi ilan etti. Hutbelerde Hz. Ali'ye sövüldü. Hucr b. Adî öldürüldü ve oğlu Yezid veliaht oldu. Sünni kitaplarda Muaviye, sahabi ve yönetici olarak da anılır. Şii anlatıda bu yıllar, Kerbela'ya giden yolu hazırlamıştır." },
};

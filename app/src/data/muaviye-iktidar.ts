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
      text: { tr: 'Peygamber, kendisinden sonra hilafetin otuz yıl süreceğini, ardından ısırıcı bir krallığa dönüşeceğini haber vermişti. Hz. Hasan\'ın sulhuyla birlikte bu otuz yıl doldu. Rivayetlere göre **Muaviye** bir gün, "Ben kralların ilkiyim" dedi. Hilafet, ümmetin işlerini Allah\'ın rızasına göre yürütmek için verilmiş bir emanetti. Muaviye ise bu emaneti kendi ailesinin mülküne çevirdi. Şam\'daki saray her geçen yıl daha da büyüdü. Ümmetin ortak hazinesi bir ailenin kesesine aktı. O sarayda ==Ehl-i Beyt==\'in hakkı tanınmadı, minberlerde ise onlara lanet okundu.' },
      art,
      cites: [{ side: 'sunni', i: 0 }, { side: 'sunni', i: 1 }],
    },
    {
      by: 'shia',
      text: { tr: 'Muaviye, Şam\'da Yeşil Saray anlamına gelen **Hadrâ**\'yı yaptırdı. Sarayın parlaklığı uzaktan göze çarpıyordu. Peygamber\'in yakın sahabelerinden **Ebuzer el-Gifârî** bir gün Muaviye\'nin karşısına dikildi ve ona şöyle dedi: "Bu sarayı Allah\'ın malından yaptırdıysan hıyanettir, kendi malından yaptırdıysan israftır." Bu söz Belâzurî\'nin Ensâbü\'l-Eşrâf adlı eserinde aktarılır. Muaviye cevap veremedi, ama Ebuzer\'i halifeye şikâyet etti. Ebuzer Şam\'dan sürüldü ve sonunda Rebeze çölünde yalnızlık içinde vefat etti. Ebuzer bir dilenci değildi. Saray karşısında hakkı söylemekten korkmayan, Peygamber\'in sevdiği bir sahabeydi.' },
      art,
      cites: [{ side: 'shia', i: 2 }],
    },
    {
      by: 'both',
      text: { tr: '**Muaviye**, **Ziyâd** adındaki adamı, babası Ebu Süfyan\'ın oğlu ilan ederek kendisine kardeş edindi. Bu işe istilhak, yani soya katma denir. Oysa Peygamber, "Çocuk, yatağın sahibine aittir" buyurmuştu. Muaviye, kendi iktidarını güçlendirmek için Peygamber\'in bu açık hükmünü çiğnedi. Kardeş ilan edilen Ziyâd, Kûfe ve Basra\'ya vali yapıldı. Bu şehirlerde **Hz. Ali**\'yi sevenlerin üzerine acımasızca yürüdü. Sahte bir soy bağı, Ehl-i Beyt dostlarını ezmek için kullanılan bir kırbaca dönüşmüştü.' },
      art,
      cites: [{ side: 'sunni', i: 5 }],
    },
    {
      by: 'both',
      text: { tr: 'Muaviye\'nin emriyle Cuma hutbelerinde, minberlerden **Hz. Ali**\'ye ==lanet== okutuldu. Haftanın en mübarek günü, Peygamber\'in kardeşine ve damadına sövülen bir güne dönüştü. Muaviye, sahabe **Sa\'d b. Ebi Vakkas**\'a da neden Hz. Ali\'ye sövmediğini sordu. Rivayetlere göre valilerine mektuplar yazarak Hz. Ali\'ye sövülmesini ve onu sevenlerin cezalandırılmasını emretti. Bu zulüm, yıllar sonra Emevi halifesi **Ömer b. Abdülaziz** onu yasaklayıncaya kadar sürdü. O yıllarda ==Ehl-i Beyt==\'i sevmek, Emevi topraklarında bir suç sayılıyordu.' },
      art,
      cites: [{ side: 'sunni', i: 2 }, { side: 'shia', i: 0 }],
    },
    {
      by: 'both',
      text: { tr: 'Kûfe\'de **Hucr b. Adî**, Hz. Ali\'nin yiğit dostlarından ve komutanlarındandı. Minberden okunan laneti kabul etmedi ve buna açıkça karşı çıktı. Kûfe valisi **Ziyâd** onu yakalattı ve on iki kadar arkadaşıyla birlikte Şam\'a gönderdi. Hicretin 51. yılında, Şam yakınlarındaki ==Mercü Azra\'da katledildiler.== Hucr, öldürülmeden önce iki rekât namaz kıldı ve şehit olacağını bildiğini söyledi. **Muaviye**, kendisine itiraz edenlere karşı bu kanı savundu. Hz. Ali\'nin dostlarından **Amr b. Hamk**\'ın başı ise kesilip şehirden şehre dolaştırıldı. Minberdeki lanet, böylece kana dönüşmüştü.' },
      art,
      cites: [{ side: 'sunni', i: 5 }, { side: 'shia', i: 0 }],
    },
    {
      by: 'both',
      text: { tr: 'Muaviye ömrünün son yıllarında oğlu **Yezid**\'i zorla veliaht ilan etti. Veliaht, hükümdarın ölümünden sonra tahta geçecek olan kişidir. Böylece hilafet, babadan oğula geçen bir saltanata dönüştü. Muaviye, Hz. Hasan\'a verdiği "Kendimden sonra yerime halife tayin etmeyeceğim" sözünü de çiğnemiş oldu. Medine\'de **Hz. Hüseyin** bu veliahtlığa boyun eğmedi. Abdullah b. Ömer, Abdullah b. Zübeyr ve Abdurrahman b. Ebi Bekir de buna razı olmadı.' },
      art,
      cites: [{ side: 'sunni', i: 3 }, { side: 'sunni', i: 5 }],
    },
    {
      by: 'shia',
      text: { tr: '**Yezid**, şarap içmesi, av köpekleri ve maymunlarla eğlenmesi, günahları açıkça işlemesiyle tanınırdı. Medine halkının ona yönelttiği bu suçlamalar tarih kitaplarında aktarılır. Böyle birine biat etmek, onun yaptıklarını meşru saymak demekti. **Hz. Hüseyin** bu biatı vermeyi reddetti. Biat, bağlılık sözüdür. Peygamber\'in torunu, dedesinin dinini açıkça çiğneyen birine bağlılık sözü vermeyecekti. Hz. Hüseyin Medine valisine şöyle diyecekti: "Benim gibisi onun gibisine biat etmez." Kerbelâ, Muaviye\'nin bu veliahtlık kararının acı bir sonucu oldu.' },
      art,
      cites: [{ side: 'shia', i: 1 }],
    },
    {
      by: 'both',
      text: { tr: 'Hicretin 60. yılında, Receb ayında **Muaviye** öldü ve taht **Yezid**\'e kaldı. Yezid tahta oturur oturmaz Medine valisine bir emir gönderdi: Hz. Hüseyin\'den hemen biat alınacaktı. Vali, **Hz. Hüseyin**\'i çağırıp bu emri bildirdi. Hz. Hüseyin biat etmedi ve kısa süre sonra ailesiyle birlikte Medine\'den Mekke\'ye doğru yola çıktı. Dedesinin dinini, şarap içen bir hükümdarın saltanatına teslim etmedi. Bu yolun sonu Kerbelâ\'daki şehadet olacaktı. Saltanatın düzenini baba kurmuştu. Oğul ise Fırat\'ın suyunu Peygamber\'in torununa kesecekti.' },
      art,
      cites: [{ side: 'shia', i: 1 }],
    },
    {
      by: 'both',
      text: { tr: 'Muaviye\'yi sahabe ve fakih olarak ananlar da vardır. Sünni okumada o, Peygamber\'in kâtiplerinden bir sahabedir. Ama onun yönetimindeki yıllar, Şiilerin hafızasında çok farklı izler bıraktı. O yıllarda minberlerden **Hz. Ali**\'ye lanet okunuyordu. **Hucr b. Adî**\'nin kanı Mercü Azra\'da dökülmüştü. **Ziyâd**, Peygamber\'in hükmüne rağmen kardeş ilan edilmişti. Ebuzer çölde yalnız ölmüştü. **Yezid** ise ümmetin başına zorla veliaht yapılmıştı. Şii okuyuşu bu yılları bir fazilet dönemi olarak değil, Kerbelâ\'ya doğru adım adım ilerleyen bir zulüm dönemi olarak görür.' },
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

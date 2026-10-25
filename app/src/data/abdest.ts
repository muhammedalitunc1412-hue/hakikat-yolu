import type { HistEvent } from '../types';

// Bu oturumda okunanlar: ihadis.com Buhari 165, WikiShia (Vudû ayeti, mest üzerine mesh), IslamQA 316320, İbn Mace 458 için arama özeti, Musannef İbn Ebi Şeybe özeti (arama sonucu), Malang dergisi özeti.
// Diğer kaynaklar 'check'. Arapça ibare verilmedi.
export const abdest: HistEvent = {
  id: 'abdest',
  date: { tr: 'Peygamber dönemi ve sonrası' },
  title: { tr: 'Abdestte ayak: mesh mi, yıkama mı?' },
  hook: { tr: 'Aynı ayetin iki okunuşu var; biri ayağı başa, diğeri ele benzetir. Müslümanlar abdestte ayağa neden farklı davranıyor?' },
  scenes: [
    {
      by: 'both',
      text: { tr: 'Mâide suresi 6. ayet abdestin uzuvlarını sayar: yüz, dirseklere kadar eller, baştan bir kısmına mesh ve topuklara kadar ayaklar. Ayetin son kısmında "ayaklarınız" kelimesi iki farklı harekeyle okunmuştur; her iki okunuş da kıraat geleneğinde bilinir.' },
      art: { bg: 'dawn', props: ['scroll'], actors: [{ kind: 'prophet', x: 50, label: { tr: 'Hz. Peygamber' } }] },
    },
    {
      by: 'both',
      text: { tr: 'Üstün (nasb) okunuşta kelime, yıkanan uzuvlara; esre (cer) okunuşunda ise yanındaki "başlarınız" kelimesine bağlanıyor gibi görünür. Yani birinci okunuş ayağın yıkanmasına, ikincisi meshine daha yakın düşer. Bu iki okunuşu Sünni kaynaklar da kabul eder; İslamQA\'nın aktardığına göre iki okunuş da yedi kıraat içindedir.' },
      art: { bg: 'interior', props: ['scroll'], actors: [{ kind: 'man', x: 35, label: { tr: 'Okuyucu' } }, { kind: 'man', x: 65, label: { tr: 'Dilbilgisi âlimi' } }] },
    },
    {
      by: 'shia',
      text: { tr: 'Şii kaynaklarına göre ayet, ayakları başa atfederek ayaklara da mesh emreder. Ehl-i Beyt imamlarından gelen rivayetlere göre mesh ayağın üst kısmına, parmak uçlarından topuğa (ayak üstündeki çıkıntıya) kadar yapılır; ayak yıkanmaz. Tûsî\'nin Tehzîb\'indeki rivayet WikiShia\'da kaynak olarak gösterilir, Kuleynî\'nin el-Kâfî\'si de bu görüşün temel kaynaklarındandır. Bu oturumda metinleri açılamadı.' },
      art: { bg: 'interior', actors: [{ kind: 'ali', x: 40, pose: 'sit', label: { tr: 'Hz. Ali' } }, { kind: 'man', x: 66, pose: 'sit', label: { tr: 'Öğrenci' } }] },
    },
    {
      by: 'sunni',
      text: { tr: 'Sünni kaynaklarda ayak yıkama hadislerle desteklenir. Buhari 165\'te Ebu Hureyre, Peygamber\'in "Topuklara ateşten vay" dediğini aktarır; Müslim 241 de aynı uyarıyı Abdullah b. Amr\'dan nakleder. Halife Osman\'ın Peygamber gibi abdest aldığını anlatan rivayette ayakların yıkandığı geçer (Buhari 159, Müslim 226). Bu yüzden Sünni mezheplerin çoğunluğu ayakların yıkanmasını farz sayar; Nevevî bu konuda âlimlerin ittifakını aktarır.' },
      art: { bg: 'oasis', props: ['well', 'palms'], actors: [{ kind: 'man', x: 40, pose: 'sit', label: { tr: 'Abdest alan' } }, { kind: 'prophet', x: 66, label: { tr: 'Hz. Peygamber' } }] },
    },
    {
      by: 'sunni',
      text: { tr: 'Yine de bazı Sünni kaynaklarında meshi savunan veya ruhsat veren nakiller de vardır. İbn Mace 458\'e göre Rubeyyi\' bint Muavviz Peygamber\'in ayaklarını yıkadığını anlatınca İbn Abbas, insanların yıkamakta ısrar ettiğini, kendisinin ise Allah\'ın kitabında yalnızca mesh bulduğunu söyler. Rivayetin senedi zayıf sayılmış, bu söz Elbânî tarafından münker bulunmuştur. Mesh görüşü Hz. Ali, Enes, Hasan Basrî, İkrime, Şa\'bî ve Ebü\'l-Âliye\'ye nispet edilir; Taberî için mesh ile yıkama arasında muhayyerlik, Cübbâî için mesh görüşü aktarılır. İslamQA bu nakillerden yalnız Ali, İbn Abbas ve Enes\'inkini ele alır.' },
      art: { bg: 'city', actors: [{ kind: 'woman', x: 32, label: { tr: 'Rubeyyi\'' } }, { kind: 'man', x: 66, label: { tr: 'İbn Abbas' } }] },
    },
    {
      by: 'shia',
      text: { tr: 'Şii kaynaklarında cer okunuşu ayetin akışına en uygun okunuş olarak anlatılır; Tabâtabâî ve Mekârim Şîrâzî de bu okunuşu tercih eder. "Ayetteki cer, yanındaki kelimenin etkisidir (cerr-i civâr)" itirazına karşılık, aralarında "ve" edatı bulunan bir atıfta komşuluk etkisinin dil açısından zayıf olduğu ve Kur\'an\'ın belağatına uymadığı söylenir. "Mesh yıkamayı da kapsar" itirazına karşılık ise yıkama ile meshin iki ayrı fiil olduğu, aksi hâlde baş için de yıkamanın yeteceği belirtilir.' },
      art: { bg: 'interior', props: ['scroll'], actors: [{ kind: 'man', x: 30, label: { tr: 'Müfessir' } }, { kind: 'man', x: 70, label: { tr: 'Dilbilgisi âlimi' } }] },
    },
    {
      by: 'both',
      text: { tr: 'Mest (deri çorap) üzerine mesh konusu da ayrışır. Sünni kaynaklarda mest üzerine mesh olağan durumda da caiz görülür. Şii kaynaklarında ise mesh çıplak ayağa yapılır; mest üzerine mesh yalnızca takiyye veya zorunlu durumda caizdir. Tabâtabâî bazı rivayetlere dayanarak, Peygamber\'in önceki mest üstü meshini bu ayetin neshettiğini savunur (WikiShia).' },
      art: { bg: 'caravan', props: ['camels'], actors: [{ kind: 'man', x: 40, pose: 'sit', label: { tr: 'Yolcu' } }, { kind: 'man', x: 68, label: { tr: 'Fakih' } }] },
    },
    {
      by: 'both',
      text: { tr: 'Bugün Sünni mezhepler abdestte ayakları yıkar; Caferî fıkhı ayakların üstüne mesh yapar. Her iki uygulama da ayetten ve rivayetlerden delil getirir; fark, ayetin okunuşu, rivayetlerin değerlendirilmesi ve dilbilgisi tercihlerinden kaynaklanır.' },
      art: { bg: 'dune-day', props: ['sun'], actors: [{ kind: 'crowd', x: 36, scale: 0.7 }, { kind: 'crowd', x: 66, scale: 0.7 }] },
    },
  ],
  sunni: [
    { book: 'Buhari, Sahih', ref: 'No. 165 (ihadis numarası; USC-MSA 166), Abdest, "Topukların yıkanması" bölümü', says: { tr: 'Ebu Hureyre, abdesti tam almalarını söyler ve Peygamber\'in "Topuklara ateşten vay" dediğini aktarır.' }, grade: { tr: 'Sahih' }, url: 'https://ihadis.com/en/bukhari/hadith/165', status: 'verified' },
    { book: 'Müslim, Sahih', ref: 'No. 241 (Abdullah b. Amr), 242 (Ebu Hureyre)', says: { tr: 'Topuklara ateşten vay uyarısı (numaralar IslamQA aktarımından; metne bu oturumda ulaşılamadı).' }, url: 'https://islamqa.info/en/answers/316320', status: 'check' },
    { book: 'Buhari, Sahih; Müslim, Sahih', ref: 'Buhari 159, Müslim 226 (Halife Osman\'ın abdest tarifi)', says: { tr: 'Halife Osman\'ın Peygamber\'in abdestini tarif edişinde ayakların yıkanması geçer. Metne bu oturumda ulaşılamadı.' }, status: 'check' },
    { book: 'İbn Mace, Sünen', ref: 'No. 458 (Rubeyyi\' bint Muavviz)', says: { tr: 'Peygamber\'in ayaklarını yıkadığı anlatılır; İbn Abbas insanların yıkamakta ısrar ettiğini, kendisinin Allah\'ın kitabında meshi bulduğunu söyler.' }, grade: { tr: 'Zayıf; Elbânî İbn Abbas\'ın sözünü münker bulur (arama sonucu özetinden)' }, url: 'https://sunnah.com/ibnmajah:458', status: 'check' },
    { book: 'İbn Kesîr, Tefsîr (Mâide 6)', ref: 'Sayfa DOĞRULANMADI', says: { tr: 'Quran.com\'daki metin ayetin ayakların yıkanmasını gerektirdiğini söyler; İbn Abbas\'ın ve Enes\'in yıkama rivayetlerini ve İkrime\'yi yıkama diyenler arasında anar. Metin okunuş farkına değinmez.' }, url: 'https://quran.com/5:6/tafsirs/en-tafisr-ibn-kathir', status: 'verified' },
    { book: 'İbn Ebi Şeybe, el-Musannef', ref: 'Şa\'bî ve Enes nakilleri; numara DOĞRULANMADI', says: { tr: 'Şa\'bî\'den mesh caizdir görüşü ve Cebrail\'in mesh getirdiği sözü; Enes\'in meshederken ayaklarını ıslattığı rivayeti.' }, url: 'https://en.tohed.com/hadith/musannaf-ibn-abi-shaybah/chapter/1429/sub/42745/', status: 'check' },
    { book: 'Nevevî, el-Minhâc; İslamQA özeti', ref: 'Cilt/sayfa DOĞRULANMADI', says: { tr: 'Nevevî\'ye göre âlimler yıkamanın farz olduğunda ittifak etmiştir; Taberî\'ye muhayyerlik, Cübbâî\'ye mesh nispet edilir; cer okunuşuna dört cevap (komşuluk, hadisler, mest-çıplak ayak ayrımı, hafif yıkama).' }, url: 'https://islamqa.info/en/answers/316320', status: 'check' },
    { book: 'Taberî, Câmi\'u\'l-Beyân; Kurtubî; Fahreddin Râzî, Mefâtîhu\'l-Gayb', ref: 'Mâide 6; DOĞRULANMADI', says: { tr: 'Bu oturumda açılamadı; Râzî\'ye atıf WikiShia dipnotundan (c. 11, s. 306).' }, status: 'check' },
  ],
  shia: [
    { book: 'WikiShia, Al-Wudu\' Verse', ref: 'İkincil kaynak', says: { tr: 'Şiiler eli aşağı doğru yıkar, ayağın üst kısmına mesh yapar; okunuş ve iki görüşün delillerini özetler.' }, url: 'https://en.wikishia.net/view/Al-Wudu%27_Verse', status: 'verified' },
    { book: 'Tûsî, Tehzîbü\'l-Ahkâm', ref: 'c. 1, s. 62, h. 20 (WikiShia dipnotu)', says: { tr: 'Abdest ayetiyle ilgili Ehl-i Beyt rivayeti olarak anılır. Metni bu oturumda okunmadı.' }, url: 'https://en.wikishia.net/view/Al-Wudu%27_Verse', status: 'check' },
    { book: 'Hurr el-Âmilî, Vesâilü\'ş-Şîa', ref: 'c. 1, s. 387, 418 (WikiShia dipnotu)', says: { tr: 'Ehl-i Beyt\'ten ayak meshi rivayetlerinin derlemesi. Metin açılmadı.' }, status: 'check' },
    { book: 'Tabâtabâî, el-Mîzân', ref: 'c. 5, s. 363, 387 (WikiShia dipnotu)', says: { tr: 'Cer okunuşunu tercih eder; Malang dergisi özetine göre Şîrâzî ile birlikte çoğunluk Şii görüşünü yansıtır. Metin açılmadı.' }, url: 'https://ejournal.uin-malang.ac.id/index.php/ululalbab/article/view/32133', status: 'check' },
    { book: 'Kuleynî, el-Kâfî; Tabersî, Mecmeu\'l-Beyân', ref: 'DOĞRULANMADI', says: { tr: 'Abdest bahsi ve Mâide 6 tefsiri; bu oturumda okunamadı.' }, status: 'check' },
    { book: 'WikiShia, Wiping over khuffayn', ref: 'İkincil kaynak', says: { tr: 'Şii görüş: meshin çıplak ayağa yapılması, takiyye ve zorunluluk dışında mest üstüne mesh yapılmaması.' }, url: 'https://en.wikishia.net/view/Wiping_over_khuffayn', status: 'verified' },
  ],
  disputes: [
    {
      title: { tr: 'Erculekum: nasb mı cer mi?' },
      shia: { tr: 'Cer okunuşu ayaklara da mesh emreder; nasb okunuşunda da kelime "başlarınızın mahalline" bağlanabilir, böylece iki okunuş da meshe götürür.' },
      sunni: { tr: 'Nasb okunuşu yıkamaya işaret eder; cer okunuşu komşuluk etkisi, hadisler veya hafif yıkama anlamıyla yıkamaya yorumlanır.' },
    },
    {
      title: { tr: 'Cerr-i civâr dilbilgisi yorumu' },
      shia: { tr: 'Araya "ve" girdiğinde komşuluk esresi zayıftır; ayet yıkama ister olsaydı farklı bir yapıyla gelirdi.' },
      sunni: { tr: 'Esre, yanındaki "başlarınız" kelimesinden gelen dilbilgisel bir uyumdur; anlam yıkamadır.' },
    },
    {
      title: { tr: 'Topuklara ateşten vay ve Halife Osman\'ın abdesti' },
      shia: { tr: 'Bu hadisler, ayakları iyi temizlemek veya yıkamayı ihmal edenlerin uyarılması anlamında okunabilir; Ehl-i Beyt rivayetleri ayet doğrultusunda meshi bildirir.' },
      sunni: { tr: 'Hadisler Peygamber\'in ayaklarını yıkadığını gösterir; ayete bu uygulamayla uyulur.' },
    },
    {
      title: { tr: 'Mest üzerine mesh' },
      shia: { tr: 'Mest ayak sayılmaz; mesh çıplak ayağa yapılır. Ayet önceki mest meshini neshetmiştir.' },
      sunni: { tr: 'Mest üzerine mesh sünnet olarak caizdir.' },
    },
  ],
  questions: [
    { tr: 'Aynı ayetin kıraatlerinden biri meshe, diğeri yıkamaya daha yakın görünüyorsa, bu iki okunuşu uzlaştırmak için hangi ölçüleri kullanmak gerekir?' },
    { tr: 'İbn Abbas\'a nispet edilen "insanlar yıkamakta ısrar ediyor, ben Allah\'ın kitabında mesh buluyorum" sözünün senedi zayıf bulunduysa, bu söz yine de tartışmanın tarihi için ne ifade eder?' },
    { tr: 'Cerr-i civâr yorumunda "ve" edatının aradaki etkisi dilbilgisi açısından nasıl değerlendirilir sizce?' },
    { tr: 'Topuklara ateşten vay hadisi yıkamayı mı, yoksa ayağın bütün yerinin temiz olmasını mı vurgular? Rivayetin bağlamı hangisini destekler?' },
  ],
  summary: { tr: 'Mâide 6\'nın iki kıraati, ayakların meshine (Şii kaynakları) ve yıkanmasına (Sünni mezheplerin çoğunluğu) götürülmüştür; iki uygulama da ayet ve rivayetlerden delil getirir, bazı Sünni nakiller mesh görüşünü de aktarır.' },
};

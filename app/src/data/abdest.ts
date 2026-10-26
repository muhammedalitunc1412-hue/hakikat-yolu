import type { HistEvent } from '../types';

// Bu oturumda okunanlar: ihadis.com Buhari 165, WikiShia (Vudû ayeti, mest üzerine mesh), IslamQA 316320, İbn Mace 458 için arama özeti, Musannef İbn Ebi Şeybe özeti (arama sonucu), Malang dergisi özeti.
// Diğer kaynaklar 'check'. Arapça ibare verilmedi.
export const abdest: HistEvent = {
  id: 'abdest',
  date: { tr: 'Peygamber dönemi ve sonrası' },
  title: { tr: 'Abdestte ayak: mesh mi, yıkama mı?' },
  hook: { tr: 'Mâide 6\'nın iki okunuşu, abdestte ayağı mesh ve yıkama olarak nasıl açar?' },
  scenes: [
    {
      by: 'both',
      text: { tr: 'Mâide 6, abdestin uzuvlarını sayar: yüz, dirseklere kadar eller, baştan bir kısma mesh ve topuklara kadar ayaklar. "Ayaklarınız" kelimesi iki farklı harekeyle okunmuştur. İki okunuş da kıraat geleneğinde bilinir. Câferî mektep, bu ayeti ayaklara mesh olarak okur.' },
      art: { bg: 'dawn', props: ['scroll'], actors: [{ kind: 'prophet', x: 50, label: { tr: 'Hz. Peygamber' } }] },
    },
    {
      by: 'both',
      text: { tr: 'Üstün okunuşta kelime yıkanan uzuvlara, esre okunuşunda yanındaki "başlarınız" kelimesine bağlanır gibi durur. Birinci okunuş yıkamaya, ikincisi meshe daha yakındır. İki okunuşun da yedi kıraat içinde olduğu aktarılır. Bu rivayet Sünni kaynaklarında da geçmektedir (Nevevî, el-Minhâc; İslamQA özeti). Câferî mektep, esre okunuşu ayaklara mesh emri olarak sürdürür.' },
      art: { bg: 'interior', props: ['scroll'], actors: [{ kind: 'man', x: 35, label: { tr: 'Okuyucu' } }, { kind: 'man', x: 65, label: { tr: 'Dilbilgisi âlimi' } }] },
    },
    {
      by: 'shia',
      text: { tr: 'Ehl-i Beyt imamlarından gelen rivayetlerde mesh, ayağın üstüne, parmak uçlarından topuğa kadar yapılır; ayak yıkanmaz. Tûsî\'nin Tehzîb\'i ve Kuleynî\'nin el-Kâfî\'si bu görüşün kaynakları arasında anılır. Metinler bu çalışmada açılamadı. Câferî mektep, Mâide 6\'yı bu rivayetlerle ayak meshi olarak uygular.' },
      art: { bg: 'interior', actors: [{ kind: 'ali', x: 40, pose: 'sit', label: { tr: 'Hz. Ali' } }, { kind: 'man', x: 66, pose: 'sit', label: { tr: 'Öğrenci' } }] },
    },
    {
      by: 'sunni',
      text: { tr: 'Ebu Hureyre, Peygamber\'in "Topuklara ateşten vay" dediğini aktarır. Bu rivayet Sünni kaynaklarında da geçmektedir (Buhari, Sahih, No. 165). Aynı uyarı Abdullah b. Amr üzerinden de gelir (Müslim, Sahih). Halife Osman\'ın abdest tarifinde ayakların yıkandığı geçer (Buhari, Sahih; Müslim, Sahih). Çoğunluk Sünni mezhep yıkamayı farz sayar; Nevevî âlimlerin ittifakını aktarır. Câferî mektep, Mâide 6\'yı ayak meshi olarak okumayı sürdürür.' },
      art: { bg: 'oasis', props: ['well', 'palms'], actors: [{ kind: 'man', x: 40, pose: 'sit', label: { tr: 'Abdest alan' } }, { kind: 'prophet', x: 66, label: { tr: 'Hz. Peygamber' } }] },
    },
    {
      by: 'sunni',
      text: { tr: 'İbn Mace\'de Rubeyyi\' bint Muavviz, Peygamber\'in ayaklarını yıkadığını anlatınca İbn Abbas, insanların yıkamakta ısrar ettiğini, kendisinin ise Allah\'ın kitabında yalnızca mesh bulduğunu söyler. Bu rivayet Sünni kaynaklarında da geçmektedir (İbn Mace, Sünen). Rivayetin senedi zayıf sayılmış, İbn Abbas\'ın sözü Elbânî tarafından münker bulunmuştur. Mesh görüşü Hz. Ali, Enes, Hasan Basrî, İkrime, Şa\'bî ve Ebü\'l-Âliye\'ye de nispet edilir. Taberî için mesh ile yıkama arasında muhayyerlik, Cübbâî için mesh görüşü aktarılır. İslamQA bu nakillerden yalnız Ali, İbn Abbas ve Enes\'inkini ele alır. Câferî mektep, ayak meshi uygulamasını bu erken okuyuşla sürdürür.' },
      art: { bg: 'city', actors: [{ kind: 'woman', x: 32, label: { tr: 'Rubeyyi\'' } }, { kind: 'man', x: 66, label: { tr: 'İbn Abbas' } }] },
    },
    {
      by: 'shia',
      text: { tr: 'Câferî tefsirde esre okunuşu, ayetin akışına en uygun okunuş sayılır. Tabâtabâî ve Mekârim Şîrâzî de bu okunuşu tercih eder. Yanındaki kelimenin esre vermesi, cerr-i civâr, açıklamasına göre arada "ve" varken komşuluk etkisi dil açısından zayıf görülür. Mesh ile yıkama iki ayrı fiildir. Mesh yıkamayı içine alsaydı baş için de yıkama yeterli olurdu. Câferî mektep bu ayrımı ayak meshi olarak uygular.' },
      art: { bg: 'interior', props: ['scroll'], actors: [{ kind: 'man', x: 30, label: { tr: 'Müfessir' } }, { kind: 'man', x: 70, label: { tr: 'Dilbilgisi âlimi' } }] },
    },
    {
      by: 'both',
      text: { tr: 'Sünni kaynaklarda mest üzerine mesh, olağan durumda da caiz görülür. Câferî fıkıhta mesh çıplak ayağa yapılır; mest üzerine mesh yalnızca takiyye veya zorunlu durumda caizdir. Tabâtabâî, bazı rivayetlere dayanarak Peygamber\'in önceki mest üstü meshini Mâide 6\'nın neshettiğini yazar.' },
      art: { bg: 'caravan', props: ['camels'], actors: [{ kind: 'man', x: 40, pose: 'sit', label: { tr: 'Yolcu' } }, { kind: 'man', x: 68, label: { tr: 'Fakih' } }] },
    },
    {
      by: 'both',
      text: { tr: 'Abdestte ayak, iki okunuşa göre iki uygulamaya açılır. Câferî fıkıh ayağın üstüne mesh yapar ve bunu ayetin ve Ehl-i Beyt rivayetlerinin okunuşu sayar. Sünni mezheplerin çoğunluğu ayakları yıkar. İkisi de ayet ve rivayetlerden delil getirir. Fark, okunuş, rivayet değerlendirmesi ve dil tercihindedir.' },
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
      title: { tr: 'Ayaklarınız: üstün mü, esre mi?' },
      shia: { tr: 'Mâide 6\'da "ayaklarınız" iki harekeyle de okunur. Câferî okuyuşta esre, ayaklara mesh emridir; üstün okunuş da başın yerine bağlanarak meshe götürülebilir.' },
      sunni: { tr: 'Mâide 6\'da "ayaklarınız" iki harekeyle de okunur. Sünni okuyuşta üstün yıkamaya işaret eder; esre, komşuluk, hadisler veya hafif yıkama ile yıkamaya yorumlanır.' },
    },
    {
      title: { tr: 'Cerr-i civâr dilbilgisi yorumu' },
      shia: { tr: 'Esre okunuşu iki dil açıklamasına da konu olur. Câferî dil tercihinde araya "ve" girince komşuluk esresi zayıftır.' },
      sunni: { tr: 'Esre okunuşu iki dil açıklamasına da konu olur. Sünni açıklamada esre, yanındaki "başlarınız" ile uyumdur; anlam yıkamadır.' },
    },
    {
      title: { tr: 'Topuklara ateşten vay ve Halife Osman\'ın abdesti' },
      shia: { tr: '"Topuklara ateşten vay" uyarısı ve Halife Osman\'ın abdesti Sünni kitaplarda da geçer. Câferî okuyuş, bu hadisleri ayağın iyi temizlenmesi uyarısı sayar; Ehl-i Beyt rivayetleri meshi bildirir.' },
      sunni: { tr: '"Topuklara ateşten vay" uyarısı ve Halife Osman\'ın abdesti Sünni kitaplarda da geçer. Bu aktarımda hadisler Peygamber\'in ayaklarını yıkadığını gösterir ve ayet bu uygulamayla okunur.' },
    },
    {
      title: { tr: 'Mest üzerine mesh' },
      shia: { tr: 'Mest üzerine mesh iki fıkıhta da anılır. Câferî uygulamada mesh çıplak ayağa yapılır; ayetin önceki mest meshini neshettiği kabul edilir.' },
      sunni: { tr: 'Mest üzerine mesh iki fıkıhta da anılır. Sünni mezheplerde bu mesh, olağan durumda da caiz bir sünnet sayılır.' },
    },
  ],
  questions: [
    { tr: 'Mâide 6\'nın iki kıraati varken, bir okunuşu diğerine bağlamak için ayetin akışı ve Peygamber\'in uygulaması nasıl birlikte okunur?' },
    { tr: 'İbn Abbas\'a nispet edilen "Allah\'ın kitabında mesh buluyorum" sözünün senedi zayıf bulunmuştur. Zayıf bir söz, tartışmanın tarihi için yine de ne anlatır?' },
    { tr: 'Cerr-i civâr açıklamasında aradaki "ve" edatı, esrenin komşuluktan geldiği görüşünü nasıl etkiler?' },
    { tr: '"Topuklara ateşten vay" hadisi, ayağın hangi yerinin ihmale uğramaması gerektiğini vurgular? Rivayetin bağlamı size ne söyler?' },
  ],
  summary: { tr: 'Mâide 6\'nın iki kıraati, ayakların meshine ve yıkanmasına kapı açar. Câferî fıkıh ayağın üstüne mesh yapar. Sünni mezheplerin çoğunluğu yıkamayı farz sayar. Bazı Sünni nakiller mesh görüşünü de aktarır.' },
};

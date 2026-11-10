import type { HistEvent } from '../types';

// Kaynak: research/01-gadir-raziyye-usame.md. status 'verified' = metin/numara okunup doğrulandı.
export const gadir: HistEvent = {
  id: 'gadir',
  date: { tr: '18 Zilhicce 10 H (632)', en: '18 Dhu al-Hijjah 10 AH (632)' },
  title: { tr: 'Gadir Hum', en: 'Ghadir Khumm' },
  hook: { tr: 'Çölün ortasında kafile durdu. Bir el havaya kalktı. O gün Hz. Ali\'nin velayeti ilan edildi.', en: 'A caravan halted in the desert, and a raised hand.' },
  scenes: [
    {
      text: { tr: 'Veda Haccı sona ermişti. **Hz. Peygamber**, kendisiyle birlikte hac yapan kalabalık bir toplulukla Mekke\'den Medine\'ye dönüyordu. Yemen\'den gelip hacda ona katılan **Hz. Ali** de kafiledeydi. Develer sıcak çölde ağır ağır ilerliyor, insanlar hac günlerinin heyecanını birbirlerine anlatıyordu. Birçoğu artık evine dönmenin hesabını yapıyordu. Peygamber ise bu dönüş yolunda ümmetine önemli bir şey söyleyecekti. Rivayetlere göre yolda Maide Suresi\'nin "Rabbinden sana indirileni tebliğ et" diye başlayan ayeti indi. Kafile, Cuhfe yakınlarında **Gadir Hum** denen su başına geldiğinde Peygamber durma emri verdi.' },
      art: { bg: 'dune-day', props: ['sun', 'camels'], actors: [{ kind: 'crowd', x: 40, scale: 8 }, { kind: 'prophet', x: 74, label: { tr: 'Hz. Peygamber' } }, { kind: 'ali', x: 88, label: { tr: 'Hz. Ali' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Hum, çölün ortasında küçük bir su gölüydü ve çevresinde birkaç ağaç vardı. Mekke\'den dönenlerin yolları burada ayrılırdı. Kimi Medine\'ye, kimi Irak\'a, kimi Yemen\'e giderdi. **Hz. Peygamber** önden gidenlerin geri çağrılmasını, geride kalanların beklenmesini istedi. Öğle sıcağı yakıcıydı ve insanlar ağaçların gölgesine sığınmaya çalışıyordu. Rivayetler orada toplananların sayısını farklı verir, ama hepsi büyük bir kalabalıktan söz eder. Kalabalık toplanınca Peygamber hutbeye başladı ve herkes onun sesini duymak için sustu.' },
      art: { bg: 'oasis', props: ['sun', 'palms', 'well'], actors: [{ kind: 'crowd', x: 36, scale: 9 }, { kind: 'prophet', x: 70, label: { tr: 'Hz. Peygamber' } }] },
      by: 'both',
    },
    {
      text: { tr: '**Hz. Peygamber** konuşmasına bir soruyla başladı: "Ben müminlere kendi canlarından daha yakın değil miyim?" Kalabalık hep bir ağızdan cevap verdi: "Evet, ya Resulallah." Bu soru sıradan bir giriş değildi. Peygamber önce herkesin önünde kendi konumunu ve insanların üzerindeki hakkını teyit ettiriyordu. Müminlerin işlerinde onların kendilerinden daha çok söz sahibi olduğunu, binlerce kişiye yüksek sesle kabul ettirdi. Şii okuyuş bu sıraya özellikle dikkat çeker. Çünkü hemen ardından gelecek söz, bu yakınlığın ve bu yetkinin kimde devam edeceğini açıklayacaktı. Kalabalık, Peygamber\'in bir sonraki sözünü bekledi.' },
      art: { bg: 'dune-day', props: ['sun', 'minbar'], actors: [{ kind: 'crowd', x: 32, scale: 9 }, { kind: 'prophet', x: 72, label: { tr: 'Hz. Peygamber' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Sonra **Hz. Peygamber**, yanında duran **Hz. Ali**\'nin elinden tuttu ve onu herkesin görebileceği şekilde havaya kaldırdı. Binlerce göz o iki ele çevrildi. Peygamber şöyle dedi: "Ben kimin mevlâsıysam, Ali de onun mevlâsıdır." Bazı rivayetlerde ardından şu dua gelir: "Allah\'ım, onu seveni sev, ona düşman olana düşman ol." **Mevlâ** kelimesi farklı şekillerde anlaşılmıştır. Kimisi onu dost diye anlamış, kimisi sahip ve önder diye. Şii okuyuşu kelimeyi Peygamber\'in az önce sorduğu soruyla birlikte okur. Peygamber önce kendi yakınlığını ve yetkisini insanlara kabul ettirmiş, sonra aynı yakınlığı ve yetkiyi Hz. Ali\'ye vermiştir. Şiiler bu ilana velayet, yani Hz. Ali\'nin önderliği der.' },
      art: { bg: 'dune-day', props: ['sun'], actors: [{ kind: 'crowd', x: 28, scale: 8 }, { kind: 'prophet', x: 62, label: { tr: 'Hz. Peygamber' } }, { kind: 'ali', x: 78, pose: 'raise', label: { tr: 'Hz. Ali' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Aynı konuşmada **Hz. Peygamber** ümmetine iki ağır emanet bıraktığını söyledi. Bunlardan biri **Allah\'ın Kitabı**, diğeri de **Ehl-i Beyt**\'iydi. "Bu ikisi Havz\'da bana gelinceye kadar birbirinden ayrılmaz" dedi. Havz, kıyamet günündeki havuzdur. Peygamber bu uyarıyı bir kez söylemekle yetinmedi, birkaç kez tekrar etti. Hadiste geçen itret kelimesi Peygamber\'in yakın ailesi demektir. Yani Kur\'an\'ı doğru anlamak isteyen, onu Peygamber\'in ailesinden ayırmamalıydı. Bu sözler, kendi yurtlarına dağılacak olan hacıların hafızasına yazıldı. Onlar da bunu gittikleri şehirlere, köylere ve çadırlara taşıdı.' },
      art: { bg: 'dune-dusk', props: ['scroll'], actors: [{ kind: 'crowd', x: 28, scale: 8 }, { kind: 'prophet', x: 66, label: { tr: 'Hz. Peygamber' } }, { kind: 'ali', x: 82, label: { tr: 'Hz. Ali' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Konuşma bitince insanlar **Hz. Ali**\'yi tebrik etmek için onun yanına geldi. Rivayetlere göre tebrik edenler arasında **Ömer** de vardı. Ömer, Hz. Ali\'ye "Tebrikler ey Ebu Talib\'in oğlu, bütün mümin erkeklerin ve kadınların mevlâsı oldun" dedi. Kalabalık uzun bir süre Hz. Ali\'nin elini sıktı. Ardından kafileler yeniden yola koyuldu ve hacılar Hum\'dan kendi yurtlarına dağıldı. Bu olaydan yaklaşık iki buçuk ay sonra Peygamber vefat etti. Gadir\'de Hz. Ali\'yi tebrik edenlerin bir kısmı, Peygamber\'in cenazesi daha yıkanmadan Sakife\'de toplandı. Orada Hz. Ali\'nin adı anılmadı.' },
      art: { bg: 'dune-dusk', props: ['sun', 'tents'], actors: [{ kind: 'crowd', x: 30, scale: 6 }, { kind: 'man', x: 56 }, { kind: 'ali', x: 74, label: { tr: 'Hz. Ali' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Gadir Hum, Peygamber\'in Hz. Ali\'yle ilgili tek sözü değildi. **Hayber**\'de sancağı ona vermiş ve onu Allah\'ı ve Resulünü seven, onlar tarafından da sevilen kişi diye tanıtmıştı. **Tebük** seferine çıkarken Hz. Ali\'yi Medine\'de bırakmış ve ona "Harun Musa\'ya nasıl ise sen de bana öylesin" demişti. **Gadir Hum**\'da ise hacdan dönen kalabalığın önünde onun elini kaldırmıştı. Bu üç olay farklı yıllarda yaşandı, ama hepsi aynı kişiyi işaret ediyordu. Yıllar sonra sahabe **Sa\'d b. Ebi Vakkas**, Muaviye ona Hz. Ali\'ye neden sövmediğini sorduğunda tam da bu üç faziletini sayarak cevap verecekti.' },
      art: { bg: 'battle', props: ['flags'], actors: [{ kind: 'ali', x: 50, pose: 'raise', label: { tr: 'Hz. Ali' } }, { kind: 'crowd', x: 22, scale: 5 }] },
      by: 'both',
    },
  ],
  sunni: [
    { book: 'Tirmizi, el-Câmi\'', ref: 'No. 3713 (Menâkıb)', says: { tr: 'Zeyd b. Erkam\'dan: "Ben kimin mevlâsıysam Hz. Ali de onun mevlâsıdır."' }, grade: { tr: 'Tirmizi: hasen garib' }, url: 'https://hadithunlocked.com/tirmidhi:3713', status: 'verified' },
    { book: 'İbn Mace, Sünen', ref: 'No. 121 (Fazl-ı Hz. Ali)', says: { tr: 'Sa\'d b. Ebi Vakkas, Muaviye\'ye Hz. Ali\'nin üç faziletini hatırlatır: mevlâ sözü, Menzile ve Hayber sancağı.' }, grade: { tr: 'Hz. Ali Za\'i: sahih' }, url: 'https://hadithunlocked.com/ibnmajah:121', status: 'verified' },
    { book: 'Ahmed b. Hanbel, Müsned', ref: 'No. 18479 (Berâ b. Âzib)', says: { tr: 'Gadir Hum\'u adıyla anan rivayet; hutbe ve Hz. Ali\'nin elinin tutulması; Ömer\'in tebriki de bu rivayette geçer.' }, grade: { tr: 'Arnaût: sahih li-ğayrihi; zincirde Ali b. Zeyd zayıf' }, url: 'https://hadithunlocked.com/ahmad:18479', status: 'verified' },
    { book: 'Müslim, Sahih', ref: 'No. 2408 (Zeyd b. Erkam)', says: { tr: 'Hum denen su başında hutbe: "İki ağır emanet bırakıyorum: Allah\'ın Kitabı ve Ehl-i Beytim."' }, grade: { tr: 'Sahih' }, url: 'https://hadithunlocked.com/muslim:2408a', status: 'verified' },
    { book: 'Tirmizi, el-Câmi\'', ref: 'No. 3788', says: { tr: 'Kitap ve itret (Ehl-i Beyt) Havz\'da Peygamber\'e varıncaya kadar ayrılmaz.' }, grade: { tr: 'Tirmizi: hasen garib; Albani: sahih' }, url: 'https://hadithunlocked.com/tirmidhi:3788', status: 'verified' },
    { book: 'Buhari, Sahih', ref: 'No. 3706 (Sa\'d)', says: { tr: 'Menzile hadisi: "Harun Musa\'ya nasıl ise sen bana öylesin."' }, grade: { tr: 'Sahih' }, url: 'https://hadithunlocked.com/bukhari:3706', status: 'verified' },
    { book: 'Müslim, Sahih', ref: 'No. 2404', says: { tr: 'Menzile hadisi; Muaviye Sa\'d\'a "Hz. Ali\'ye neden sövmüyorsun?" der, Sa\'d Hz. Ali\'nin üç faziletini sayar.' }, grade: { tr: 'Sahih' }, url: 'https://hadithunlocked.com/muslim:2404a', status: 'verified' },
    { book: 'Buhari, Sahih', ref: 'No. 2942 (Sehl b. Sa\'d)', says: { tr: 'Hayber\'de sancak Allah ve Resulünü seven, onlarca sevilen kişiye verilir; Hz. Ali çağrılır, gözü iyileşir.' }, grade: { tr: 'Müttefekun aleyh' }, url: 'https://hadithunlocked.com/bukhari:2942', status: 'verified' },
    { book: 'Hâkim, el-Müstedrek', ref: 'Gadir rivayetleri (numaralar kontrol edilecek)', says: { tr: 'Gadir hadisinin birçok tariki Müstedrek\'te yer alır.' }, status: 'check' },
  ],
  shia: [
    { book: 'Kuleynî, el-Kâfî', ref: 'Kitâbü\'l-Hüccet (cilt/sayfa kontrol edilecek)', says: { tr: 'Gadir olayı ve Hz. Ali\'nin velâyetine dair rivayetler.' }, status: 'check' },
    { book: 'Şeyh Müfid, el-İrşâd', ref: 'Gadir bölümü (sayfa kontrol edilecek)', says: { tr: 'Olayın anlatımı; Ömer\'in tebriki de aktarılır.' }, url: 'https://al-islam.org/kitab-al-irshad-book-shaykh-al-mufid', status: 'check' },
    { book: 'Allâme Emînî, el-Gadîr', ref: 'Çok ciltli derleme', says: { tr: 'Gadir hadisinin sahabî, tâbiî ve âlim râvilerini ve edebiyatını derleyen eser.' }, url: 'https://al-islam.org/ghadir/', status: 'verified' },
    { book: 'Tûsî, et-Tibyân; Tabersî, Mecme\'u\'l-Beyân', ref: 'Mâide 67 tefsiri', says: { tr: '"Rabbinden sana indirileni tebliğ et" ayetinin Gadir\'de Hz. Ali hakkında indiğini aktarırlar.' }, status: 'check' },
  ],
  disputes: [
    {
      title: { tr: '"Mevlâ" ne demek?' },
      sunni: { tr: 'Peygamber Gadir Hum\'da Hz. Ali\'nin elini kaldırıp "Ben kimin mevlâsıysam, Hz. Ali de onun mevlâsıdır" dedi. Sünni okumada mevlâ dost, yardımcı ve destekçi demektir; hutbe, Hz. Ali hakkındaki şikâyetlerden sonra onu yüceltir ve halifeliği açıkça söylemez.' },
      shia: { tr: 'Peygamber Gadir Hum\'da Hz. Ali\'nin elini kaldırıp "Ben kimin mevlâsıysam, Hz. Ali de onun mevlâsıdır" dedi. Şia\'da mevlâ, "Ben müminlere kendi canlarından evlâ değil miyim?" sorusuna bağlanır ve önderlik demektir; kafilenin çölde durması da ilanın ağırlığını gösterir.' },
    },
    {
      title: { tr: 'Mâide 3 ve 67 ne zaman indi?' },
      sunni: { tr: '"Bugün dininizi tamamladım" ayeti Mâide 3\'tedir. Sünni okumada Buhari, Sahih\'te Ömer\'den gelen rivayete göre ayet Arafat\'ta, Cuma günü inmiştir.' },
      shia: { tr: '"Bugün dininizi tamamladım" ayeti Mâide 3\'tedir. Şia\'da aynı ayet Gadir\'de, Hz. Ali\'nin velayetinin ilanıyla inmiştir.' },
    },
  ],
  questions: [
    { tr: 'Peygamber sıcak çölde binlerce kişiyi durdurup Hz. Ali\'nin elini kaldırdı. Bu özen, velayet ilanının ağırlığını size nasıl hissettiriyor?' },
    { tr: 'Hutbe "Ben müminlere kendi canlarından daha yakın değil miyim?" diye açıldı, sonra mevlâ dendi. Bu iki söz yan yana gelince, Hz. Ali\'nin velayeti size ne söylüyor?' },
    { tr: 'Aynı konuşmada Kitap ve Ehl-i Beyt birlikte emanet edildi. Bu emanet, Ehl-i Beyt sevgisini hayatınızda nereye koyuyor?' },
    { tr: 'Sa\'d b. Ebi Vakkas, Hz. Ali\'nin faziletlerini saydı. Bu sözler, ona olan sevginizi nasıl derinleştiriyor?' },
  ],
  summary: { tr: 'Gadir Hum\'da Peygamber, Hz. Ali\'nin elini kaldırıp "Ben kimin mevlâsıysam, Hz. Ali de onun mevlâsıdır" dedi; bu, onun velayetinin ilanıydı.' },
};

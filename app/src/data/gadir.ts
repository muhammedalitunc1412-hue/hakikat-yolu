import type { HistEvent } from '../types';

// Kaynak: research/01-gadir-raziyye-usame.md. status 'verified' = metin/numara okunup doğrulandı.
export const gadir: HistEvent = {
  id: 'gadir',
  date: { tr: '18 Zilhicce 10 H (632)', en: '18 Dhu al-Hijjah 10 AH (632)' },
  title: { tr: 'Gadir Hum', en: 'Ghadir Khumm' },
  hook: { tr: 'Çölün ortasında kafile durdu. Bir el havaya kalktı. O gün Hz. Ali\'nin velayeti ilan edildi.', en: 'A caravan halted in the desert, and a raised hand.' },
  scenes: [
    {
      text: { tr: 'Veda Haccı bitmişti. **Hz. Peygamber**, hacılarla birlikte Mekke\'den Medine\'ye dönüyordu. Yemen\'den gelip hacda ona katılan **Hz. Ali** de kafiledeydi. Yol uzundu. İnsanlar evlerine dağılmak üzereydi. Hayber\'de sancağı Hz. Ali\'ye veren, Tebük\'te onu Hz. Hârûn\'a benzeten Peygamber, bu dönüşte bir şey daha söyleyecekti. Kafile **Gadir Hum**\'a varınca durdu. Su başı, yolların ayrıldığı yerdi. Seven, molayı bir dinlenme diye okumaz. Peygamber\'in, kalabalık dağılmadan önce kimi göstereceğini burada bekler.' },
      art: { bg: 'dune-day', props: ['sun', 'camels'], actors: [{ kind: 'crowd', x: 40, scale: 8 }, { kind: 'prophet', x: 74, label: { tr: 'Hz. Peygamber' } }, { kind: 'ali', x: 88, label: { tr: 'Hz. Ali' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Hum\'un suyu, çölün ortasında bir duraktı. Mekke\'den dönenlerin yolları burada ayrılacaktı. Kimisi Medine\'ye, kimisi kendi yurduna sapacaktı. **Hz. Peygamber** kafileyi geri çağırdı. Önden gidenler durdu. Geriden gelenler yetişti. Rivayetler, dinleyenlerin sayısını farklı verir. Sayı kilitli değildir. Kilitli olan, dağılmadan önceki bu toplanıştır. İnsanlar, öğle sıcağında Peygamber\'in söyleyeceğini duymak için bir araya geldi. Seven, kalabalığı bir karşılama diye okumaz. Bir ilanın şahitleri diye okur.' },
      art: { bg: 'oasis', props: ['sun', 'palms', 'well'], actors: [{ kind: 'crowd', x: 36, scale: 9 }, { kind: 'prophet', x: 70, label: { tr: 'Hz. Peygamber' } }] },
      by: 'both',
    },
    {
      text: { tr: '**Hz. Peygamber** önce bir soru sordu. Kendisinin müminlere, onların kendi canlarından daha yakın olup olmadığını sordu. Kalabalık kabul etti. Bu kabul, bir nezaket değildi. Peygamber\'in onlar üzerindeki hakkını yüksek sesle söylemekti. Ardından gelecek söz **Hz. Ali** hakkındaydı. Peygamber, Ali\'nin adını anmadan önce kendi bağını hatırlattı. Şii okuyuş, bu sırayı boşuna saymaz. Önce "ben size kendinizden yakınım" denir. Sonra o yakınlığın kime geçtiği söylenir. Seven, soruyu bir giriş cümlesi diye geçmez. İlanın eşiği diye tutar.' },
      art: { bg: 'dune-day', props: ['sun', 'minbar'], actors: [{ kind: 'crowd', x: 32, scale: 9 }, { kind: 'prophet', x: 72, label: { tr: 'Hz. Peygamber' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Sonra **Hz. Peygamber**, **Hz. Ali**\'nin elini kaldırdı. El, kalabalığın üzerinde durdu. Peygamber dedi: "Ben kimin mevlâsıysam, Ali de onun mevlâsıdır." Bazı rivayetlerde ardından dua da gelir. Ali\'ye dost olana Allah dost olsun. Ali\'ye düşman olana Allah düşman olsun. **Mevlâ** kelimesi farklı okunmuştur. Kimisi dost der. Kimisi sahip ve önder der. Şii okuyuş, kelimeyi bir önceki soruyla birlikte tutar. Peygamber önce kendi yakınlığını söyletmiş, sonra aynı yakınlığı Hz. Ali\'ye vermiştir. Velayet, yani önderlik, bu elin adıdır. Seven, kaldırılan eli bir sevgi işareti diye küçültmez. Çölün ortasında yapılmış bir ilan diye görür.' },
      art: { bg: 'dune-day', props: ['sun'], actors: [{ kind: 'crowd', x: 28, scale: 8 }, { kind: 'prophet', x: 62, label: { tr: 'Hz. Peygamber' } }, { kind: 'ali', x: 78, pose: 'raise', label: { tr: 'Hz. Ali' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Aynı durakta **Hz. Peygamber** iki emanet daha hatırlattı. Biri **Allah\'ın Kitabı**\'ydı. Öbürü **Ehl-i Beyt**\'ti. "Bu ikisi Havz\'a varıncaya dek ayrılmaz" dedi. Havz, kıyametteki havuzdur. Uyarıyı bir kez söylemedi. Tekrarladı. Hacılar sonra kendi yollarına dağıldı. Söz, onların heybesinde kaldı. İtret, Ehl-i Beyt demektir. Kitap, onlarsız bırakılmasın diye söylendi. Seven, emaneti bir veda öğüdü diye inceltmez. Kur\'an\'ın yanına konmuş bir aileyi görür. O aile, örtünün altındaki beşten başlar.' },
      art: { bg: 'dune-dusk', props: ['scroll'], actors: [{ kind: 'crowd', x: 28, scale: 8 }, { kind: 'prophet', x: 66, label: { tr: 'Hz. Peygamber' } }, { kind: 'ali', x: 82, label: { tr: 'Hz. Ali' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Rivayetlere göre konuşma bitince **Hz. Ali**\'yi tebrik edenler oldu. Bu anlatılardan birinde **Ömer**, Hz. Ali\'yi mümin erkeklerin ve kadınların mevlâsı diye kutladı. Tebrik, Gadir\'de bitti. Çok geçmeden Peygamber vefat etti. Aynı insanlar, birkaç gün sonra Sakife\'nin gölgeliğine girdi. Orada Hz. Ali\'nin adı sorulmadı. Hum\'da kaldırılan el, o gölgelikte bekletildi. Seven, tebriği bir hatıra diye bırakmaz. Sözün, daha cenaze yıkanmadan nasıl unutulduğunu görür.' },
      art: { bg: 'dune-dusk', props: ['sun', 'tents'], actors: [{ kind: 'crowd', x: 30, scale: 6 }, { kind: 'man', x: 56 }, { kind: 'ali', x: 74, label: { tr: 'Hz. Ali' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Üç durak bir çizgi çizer. **Hayber**\'de Peygamber sancağı **Hz. Ali**\'ye verdi. Güven oradaydı. **Tebük** yolunda onu Hz. Hârûn\'a benzetti. Yakınlık oradaydı. **Gadir Hum**\'da elini, hacdan dönenlerin önünde kaldırdı. Önderlik oradaydı. Üçü ayrı günlerdir. Üçü aynı kişiyi gösterir. Peygamber vefat edince bu çizgi sınanacaktı. Sakife, ilanı bozmaya çalışacaktı. Seven, Gadir\'i tek başına bir hutbe diye okumaz. Hayber\'den Tebük\'e, Tebük\'ten Hum\'a gelen bir seçimin son cümlesi diye okur.' },
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

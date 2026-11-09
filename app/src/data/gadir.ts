import type { HistEvent } from '../types';

// Kaynak: research/01-gadir-raziyye-usame.md. status 'verified' = metin/numara okunup doğrulandı.
export const gadir: HistEvent = {
  id: 'gadir',
  date: { tr: '18 Zilhicce 10 H (632)', en: '18 Dhu al-Hijjah 10 AH (632)' },
  title: { tr: 'Gadir Hum', en: 'Ghadir Khumm' },
  hook: { tr: 'Çölün ortasında kafile durdu. Bir el havaya kalktı. O gün Hz. Ali\'nin velayeti ilan edildi.', en: 'A caravan halted in the desert, and a raised hand.' },
  scenes: [
    {
      text: { tr: 'Veda Haccı\'nın ardından **Hz. Peygamber**, hacılarla birlikte Mekke\'den Medine\'ye dönüyordu. Yemen\'den gelerek hacda ona katılan **Hz. Ali** de kafiledeydi. Hayber\'de sancağı ona veren, Tebük\'te ise onu Hz. Hârûn\'a benzeten Peygamber, dönüş yolunda **Gadir Hum**\'da hacılara seslenmek için durdu.' },
      art: { bg: 'dune-day', props: ['sun', 'camels'], actors: [{ kind: 'crowd', x: 40, scale: 8 }, { kind: 'prophet', x: 74, label: { tr: 'Hz. Peygamber' } }, { kind: 'ali', x: 88, label: { tr: 'Hz. Ali' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Mekke\'den dönen hacıların yolları **Hum** yakınlarında ayrılacaktı. **Hz. Peygamber** burada durdu ve kafileyi bir araya topladı. Rivayetlerde dinleyenlerin sayısı farklı verilir. Anlatının merkezinde ise uzun yolun ortasında verilen bu mola vardır. İnsanlar ayrı yönlere dağılmadan önce Peygamber\'in kendilerine söyleyeceklerini dinlemek için toplandılar.' },
      art: { bg: 'oasis', props: ['sun', 'palms', 'well'], actors: [{ kind: 'crowd', x: 36, scale: 9 }, { kind: 'prophet', x: 70, label: { tr: 'Hz. Peygamber' } }] },
      by: 'both',
    },
    {
      text: { tr: '**Hz. Peygamber**, topluluğa seslenirken önce kendisinin müminlere, onların kendi canlarından daha yakın olup olmadığını sordu. Dinleyenler bunu kabul ettiklerini söylediler. Ardından gelen söz, **Hz. Ali**\'yle ilgiliydi. Gadir\'i önderliğin ilanı olarak okuyanlar için bu ilk soru önemlidir. Peygamber, Hz. Ali\'nin adını anmadan hemen önce kendisiyle müminler arasındaki bağı hatırlatmıştı.' },
      art: { bg: 'dune-day', props: ['sun', 'minbar'], actors: [{ kind: 'crowd', x: 32, scale: 9 }, { kind: 'prophet', x: 72, label: { tr: 'Hz. Peygamber' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Ardından **Hz. Peygamber**, **Hz. Ali**\'nin elini kaldırdı ve kendisi kimin mevlâsıysa Ali\'nin de onun mevlâsı olduğunu söyledi. Bazı rivayetlerde bu sözün ardından Ali\'ye dost olanlara Allah\'ın dost olması için dua ettiği aktarılır. **Mevlâ** kelimesi farklı biçimlerde yorumlanmıştır. Gadir\'i velayetin ilanı olarak anlayanlar, kelimeyi bir önceki soruyla birlikte okur ve burada Hz. Ali\'nin önderliğine işaret edildiğini görür.' },
      art: { bg: 'dune-day', props: ['sun'], actors: [{ kind: 'crowd', x: 28, scale: 8 }, { kind: 'prophet', x: 62, label: { tr: 'Hz. Peygamber' } }, { kind: 'ali', x: 78, pose: 'raise', label: { tr: 'Hz. Ali' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Hum\'daki konuşmaya ilişkin bir başka rivayette **Hz. Peygamber**, geride bıraktığı iki emaneti hatırlattı. Bunlar **Allah\'ın Kitabı** ve **Ehl-i Beyt** idi. Dinleyenlere ailesine karşı sorumluluklarını unutmamalarını söyledi ve bu uyarıyı tekrarladı. Hacılar daha sonra kendi yollarına giderken bu söz de onların beraberinde taşıdığı bir emanet oldu.' },
      art: { bg: 'dune-dusk', props: ['scroll'], actors: [{ kind: 'crowd', x: 28, scale: 8 }, { kind: 'prophet', x: 66, label: { tr: 'Hz. Peygamber' } }, { kind: 'ali', x: 82, label: { tr: 'Hz. Ali' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Bazı rivayetlere göre konuşmanın ardından **Hz. Ali**\'yi tebrik edenler oldu. Bu anlatılardan birinde **Ömer**, Hz. Ali\'yi mümin erkek ve kadınların mevlâsı olarak kutladı. Çok geçmeden Hz. Peygamber vefat etti. Hum\'da söylenen sözlerin yönetim ve önderlik açısından ne anlama geldiği, Sakife\'de başlayan gelişmelerle yeniden önem kazandı.' },
      art: { bg: 'dune-dusk', props: ['sun', 'tents'], actors: [{ kind: 'crowd', x: 30, scale: 6 }, { kind: 'man', x: 56 }, { kind: 'ali', x: 74, label: { tr: 'Hz. Ali' } }] },
      by: 'both',
    },
    {
      text: { tr: '**Hayber**\'de Hz. Peygamber sancağı **Hz. Ali**\'ye vermişti. **Tebük** yolunda onun kendisine yakınlığını Hz. Hârûn üzerinden anlatmıştı. **Gadir Hum**\'da ise Hz. Ali\'nin elini, hacdan dönen topluluğun önünde kaldırdı. Bu üç hatıra birlikte okunduğunda güven, yakınlık ve önderlik arasında kurulan bağ daha belirgin hâle gelir. Hz. Peygamber\'in vefatından sonra yaşanacakları anlamak için Gadir\'de söylenen sözleri de akılda tutmak gerekir.' },
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

import type { HistEvent } from '../types';

// Kaynak: research/01-gadir-raziyye-usame.md. status 'verified' = metin/numara okunup doğrulandı.
export const gadir: HistEvent = {
  id: 'gadir',
  date: { tr: '18 Zilhicce 10 H (632)', en: '18 Dhu al-Hijjah 10 AH (632)' },
  title: { tr: 'Gadir Hum', en: 'Ghadir Khumm' },
  hook: { tr: 'Çölün ortasında durdurulan kafile ve göğe kaldırılan bir el: Hz. Ali (a.s.).', en: 'A caravan halted in the desert, and a raised hand.' },
  scenes: [
    {
      text: { tr: 'Veda Haccı bitmişti. Hz. Peygamber (s.a.v.) binlerce Müslümanla Mekke\'den Medine\'ye dönüyordu. Hz. Ali de Yemen\'den gelmiş, hacda ona katılmıştı. Yol, ayrılmadan önce bir su başına uğrayacaktı.' },
      art: { bg: 'dune-day', props: ['sun', 'camels'], actors: [{ kind: 'crowd', x: 40, scale: 8 }, { kind: 'prophet', x: 74, label: { tr: 'Hz. Peygamber' } }, { kind: 'ali', x: 88, label: { tr: 'Hz. Ali' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Yolların ayrıldığı Hum denen su başına gelindi. Peygamber kafileyi durdurdu. İleri gidenler geri çağrıldı, geride kalanlar beklendi. Güneş tepedeydi. Kaynaklarda Veda Haccı\'na katılanların sayısı yüz binin üzerinde aktarılır (bazı rivayetlerde 114 bin ve 124 bin); Gadir Hum, Veda Haccı\'ndan sonra Peygamber\'in yanında toplanan en büyük ikinci topluluk olarak anılır.' },
      art: { bg: 'oasis', props: ['sun', 'palms', 'well'], actors: [{ kind: 'crowd', x: 36, scale: 9 }, { kind: 'prophet', x: 70, label: { tr: 'Hz. Peygamber' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Peygamber hutbeye başladı: "Ben müminlere kendi canlarından daha yakın (evlâ) değil miyim?" Kalabalık "Evet" dedi.' },
      art: { bg: 'dune-day', props: ['sun', 'minbar'], actors: [{ kind: 'crowd', x: 32, scale: 9 }, { kind: 'prophet', x: 72, label: { tr: 'Hz. Peygamber' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Sonra Hz. Ali\'nin elinden tutup yukarı kaldırdı: «Ben kimin mevlâsıysam, Ali de onun mevlâsıdır. Allah\'ım, onu dost edineni dost edin, ona düşman olana düşman ol.» Çölün sıcağında, yollar dağılmadan söylenen bu cümle, Ca\'ferî yolda velayetin ilanıdır. Tirmizi 3713 ve İbn Mâce 121 gibi Sünni kaynaklar da sözün kendisini aktarır.' },
      art: { bg: 'dune-day', props: ['sun'], actors: [{ kind: 'crowd', x: 28, scale: 8 }, { kind: 'prophet', x: 62, label: { tr: 'Hz. Peygamber' } }, { kind: 'ali', x: 78, pose: 'raise', label: { tr: 'Hz. Ali' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Aynı hutbede iki ağır emanetten söz etti: Allah\'ın Kitabı ve Ehl-i Beyti. "Ehl-i Beytim hakkında Allah\'ı hatırlatırım" dedi, bunu üç kez tekrarladı.' },
      art: { bg: 'dune-dusk', props: ['scroll'], actors: [{ kind: 'crowd', x: 28, scale: 8 }, { kind: 'prophet', x: 66, label: { tr: 'Hz. Peygamber' } }, { kind: 'ali', x: 82, label: { tr: 'Hz. Ali' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Bazı rivayetlere göre kalabalıktan insanlar Hz. Ali\'yi tebrik etti; bu rivayetlerde Ömer\'in "Tebrikler ey Ebu Talib\'in oğlu, her mümin erkek ve kadının mevlâsı oldun" dediği geçer. Bu cümlenin rivayet zinciri tartışmalıdır.' },
      art: { bg: 'dune-dusk', props: ['sun', 'tents'], actors: [{ kind: 'crowd', x: 30, scale: 6 }, { kind: 'man', x: 56 }, { kind: 'ali', x: 74, label: { tr: 'Hz. Ali' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Hz. Ali\'nin Peygamber katındaki yeri başka sözlerle de belliydi: Tebük\'e giderken "Harun Musa\'ya nasıl ise sen bana öylesin" demişti; Hayber\'de sancağı "Allah ve Resulünü seven, onlarca sevilen birine" vereceğini söyleyip Hz. Ali\'yi çağırmıştı.' },
      art: { bg: 'battle', props: ['flags'], actors: [{ kind: 'ali', x: 50, pose: 'raise', label: { tr: 'Hz. Ali' } }, { kind: 'crowd', x: 22, scale: 5 }] },
      by: 'both',
    },
  ],
  sunni: [
    { book: 'Tirmizi, el-Câmi\'', ref: 'No. 3713 (Menâkıb)', says: { tr: 'Zeyd b. Erkam\'dan: "Ben kimin mevlâsıysam Hz. Ali de onun mevlâsıdır."' }, grade: { tr: 'Tirmizi: hasen garib' }, url: 'https://hadithunlocked.com/tirmidhi:3713', status: 'verified' },
    { book: 'İbn Mace, Sünen', ref: 'No. 121 (Fazl-ı Ali)', says: { tr: 'Sa\'d b. Ebi Vakkas, Muaviye\'ye Hz. Ali\'nin üç faziletini hatırlatır: mevlâ sözü, Menzile ve Hayber sancağı.' }, grade: { tr: 'Ali Za\'i: sahih' }, url: 'https://hadithunlocked.com/ibnmajah:121', status: 'verified' },
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
      sunni: { tr: 'Mevlâ; dost, yardımcı, destekçi anlamındadır. Hutbe, Hz. Ali hakkında yapılan şikâyetler sonrası onun yüceltilmesidir. Halifelikle ilgili açık bir ifade yoktur.' },
      shia: { tr: 'Hutbe, "Ben müminlere kendi canlarından evlâ değil miyim?" sorusuyla başlar; "mevlâ" bu soruya bağlanır ve otorite/önderlik anlamı taşır. Kafilenin çölde durdurulması da olayın önemini gösterir.' },
    },
    {
      title: { tr: 'Mâide 3 ve 67 ne zaman indi?' },
      sunni: { tr: 'Buhari 45\'te Ömer\'den: "Bugün dininizi tamamladım" ayeti Arafat\'ta, Cuma günü indi.' },
      shia: { tr: 'Aynı ayetin Gadir\'de, Hz. Ali\'nin velâyetinin ilanıyla indiği rivayet edilir.' },
    },
  ],
  questions: [
    { tr: 'Peygamber, dönüş yolunda sıcak çölde binlerce kişiyi durdurup bekletti. Bu kadar emek, sadece "Hz. Ali\'yi sevin" demek için mi olurdu?' },
    { tr: 'Hutbeye "Ben müminlere kendi canlarından daha yakın değil miyim?" diye sorarak başladı, sonra "mevlâ" dedi. Bu soruyla "mevlâ" kelimesi arasında bir bağ olmaz mı?' },
    { tr: 'Aynı konuşmada Kitap ve Ehl-i Beyt\'i birlikte emanet etti ve "ayrılmazlar" dedi. Ehl-i Beyt\'in rolünü bu söz nasıl belirler?' },
    { tr: 'Müslim 2404\'e göre Muaviye, Sa\'d\'dan Hz. Ali\'ye sövmesini istedi. Sa\'d da bu faziletleri sayarak karşı çıktı. İnsanlar neden Hz. Ali\'ye sövmeye zorlanıyordu?' },
  ],
  summary: { tr: 'Gadir Hum\'da Hz. Peygamber (s.a.v.), Hz. Ali\'nin (a.s.) elini kaldırıp «Ben kimin mevlâsıysam Ali de onun mevlâsıdır» dedi. Söz Tirmizi, İbn Mâce ve Ahmed\'de de, Ca\'ferî kitaplarda da vardır. Ca\'ferî yolda «mevlâ», hutbenin başındaki «evlâ» sorusuna bağlı bir önderliktir. Sünni okuma ise dostluk ve yakınlık der.' },
};

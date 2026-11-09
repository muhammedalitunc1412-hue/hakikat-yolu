import type { HistEvent } from '../types';

// Taberî, Ebü'l-Ferec el-İsfahânî (Mekâtilü't-Tâlibiyyîn), İbn Ebi'l-Hadîd ve Şii kaynaklardan özetlenmiştir.
// Hz. Hasan'ın zehirlenmesinde Muaviye'nin rolü Şii kaynaklarında anlatılır; İbn Teymiye ve İbn Kesîr bunu sabit görmez.
const art = { bg: 'interior' as const, actors: [{ kind: 'crowd' as const, x: 50, scale: 4 }] };

export const muaviyeHasan: HistEvent = {
  id: 'muaviye-hasan',
  date: { tr: '40-50 H (661-670)', en: '40-50 AH (661-670)' },
  title: { tr: "Muaviye ve Hz. Hasan: sulh, ihlal ve zehirlenme iddiası", en: 'Muawiya and Hz. Hasan: the treaty, its breach and the poisoning claim' },
  hook: { tr: "Hz. Hasan kan dökülmesin diye sulh yaptı. Muaviye şartı ayağının altına aldı ve onu zehirletti.", en: "Why did Hz. Hasan make peace with Muawiya, what became of the terms, and what role did Muawiya play in his poisoning?" },
  scenes: [
    {
      by: 'both',
      text: { tr: 'Kûfe\'de **Hz. Ali** şehit olunca halk **Hz. Hasan**\'a biat etti. Biat, bağlılık sözüdür. Peygamber\'in seyyid dediği Hz. Hasan yönetimi üstlendi. Babası vasiyetinde yönetimi **Muaviye**\'ye devret dememişti. **Muaviye** Şam\'daki ticaret yollarını elinde tutuyordu. Çok zengindi. Büyük bir orduyla yürüdü. Hile, alış ve rüşvetle komutanları satın aldı. **Ubeydullah b. Abbas** gece **Muaviye**\'nin yanına geçti. Ordu içten çürüdü. **Hz. Hasan** güçsüz kaldı.' },
      art,
      cites: [{ side: 'shia', i: 1 }, { side: 'shia', i: 3 }],
    },
    {
      by: 'both',
      text: { tr: 'Kûfe\'de **Hz. Hasan**, kan dökülmesin ve ==Ehl-i Beyt== dostları kırılmasın diye savaşı bitirdi. Yönetim **Muaviye**\'ye geçti. Peygamber, "Bu oğlum seyyiddir. Allah onunla iki büyük grubu barıştıracak" demişti. Bu sulh zayıflık değildi. Satın alınmış bir ordunun içinde kanı durdurmaktı.' },
      art,
      cites: [{ side: 'sunni', i: 0 }, { side: 'shia', i: 3 }],
    },
    {
      by: 'shia',
      text: { tr: 'Kûfe\'de yapılan sulhte şart açıktı. **Muaviye** Allah\'ın kitabı ve Peygamber\'in sünnetiyle yürüyecek, kimseye sövdürmeyecek, kendinden sonra halife dikmeyecekti. **Hz. Hasan**, ==Ehl-i Beyt==\'in ırzını ve minberi bu sözle korumak istedi. Şartlar yazıya geçti. **Muaviye** bu antlaşmanın şartlarını sonra ==çiğnedi==.' },
      art,
      cites: [{ side: 'shia', i: 1 }, { side: 'shia', i: 3 }],
    },
    {
      by: 'shia',
      text: { tr: 'Kûfe\'de, Nuhayle\'de **Muaviye** açık konuştu. "Ben sizinle namaz ya da oruç için savaşmadım. Size hükmetmek için savaştım." Sulh şartlarını ==ayaklarının altında== saydı. **Hz. Hasan**\'ın kan dökmemek için verdiği sözü orada çiğnedi.' },
      art,
      cites: [{ side: 'shia', i: 1 }, { side: 'shia', i: 2 }],
    },
    {
      by: 'both',
      text: { tr: 'Sulhten hemen sonra minberlerde **Hz. Ali**\'ye lanet okundu. Bunu reddeden **Hucr b. Adî** ve arkadaşları öldürüldü. **Hz. Hasan** Medine\'de on yıl yaşadı. Sulh bozulmuştu. 50 H civarında zehirlendi. Anlaşmayı bozan Muaviye, bu zehirlenmede de rol aldı.' },
      art,
      cites: [{ side: 'shia', i: 2 }, { side: 'shia', i: 0 }],
    },
    {
      by: 'shia',
      text: { tr: 'Medine\'de **Muaviye**, **Hz. Hasan**\'ın karısı **Cüde bint Eş\'as**\'a oğlu **Yezid**\'le evlendirme vaadi ve yüz bin dirhem verdi. Zehir bu pazarlıkla içirildi. Amaç, tahtın oğula kalmasıydı. **Muaviye** vaadini tutmadı. Ne evlilik oldu ne para tamamlandı. Peygamber\'in seyyidi, babasının katilinin kurduğu düzende şehit oldu. Bu yol, Kerbela\'da **Yezid**\'in biatına çıkar.' },
      art,
      cites: [{ side: 'shia', i: 0 }, { side: 'shia', i: 1 }],
    },
    {
      by: 'both',
      text: { tr: 'Medine\'de **Hz. Hasan**\'ın zehirlendiği nakledilir. "Ciğeri eridi" bir hekim sözü değildir. Acının dilidir. Katâde, ciğerinin parçalandığını söylediğini aktarır. Bu, kelimesi kelimesine bir çeviri değildir. İbn Abdilberr, bir grubun zehri Muaviye\'ye bağladığını nakleder ve kendisi hükmetmez. Sevenleri onu şehit bildi. Taht, bir oğul için boşaltıldı. ==Ehl-i Beyt==\'in büyüğü, sulh masasında kandırılmış, evinde zehirlenmişti. Bu, Kerbela\'dan önceki ilk büyük matemdir.' },
      art,
      cites: [{ side: 'shia', i: 0 }],
    },
    {
      by: 'both',
      text: { tr: 'Medine\'de **Hz. Hüseyin**, kardeşi **Hz. Hasan**\'ı dedesi Resûlullah\'ın yanına defnetmek için götürdü. Hz. Hasan, "Cenazemde bir damla kan dökülmesin" diye vasiyet etmişti. Kan dökülecekse Bakî\'de, annesinin yanında gömülmesini istemişti. **Aişe** bir katıra binip **Mervan** ve Ümeyyeoğullarıyla geldi. Tabutun Peygamber\'in yanına gömülmesini bizzat engelledi. "Evime sevmediğim birini sokamazsınız" dedi. Tabuta ok atılması emrini de verdi. Mervan\'ın adamları bu emirle okladı. Oklar tabuta saplandı. **İbn Abbas** ona "Bir gün deveye, bir gün katıra" dedi. Cemel\'de deve, o gün katır vardı. **Hz. Hüseyin** kılıcını çekmedi. Kardeşinin vasiyeti vardı. Hz. Hasan Bakî\'de defnedildi.' },
      art,
      cites: [{ side: 'shia', i: 1 }],
    },
  ],
  sunni: [
    { book: 'Buhari, Sahih', ref: 'No. 2704 (Sulh; Hz. Hasan hadisi)', says: { tr: "Peygamber'in Hz. Hasan için «seyyid» demesi ve «iki büyük grubu barıştıracak» sözü." }, grade: { tr: 'Sahih' }, url: 'https://hadithunlocked.com/bukhari:2704', status: 'check' },
    { book: 'İbn Teymiye, Minhâcü\'s-Sünne; İbn Kesîr, el-Bidâye ve\'n-Nihâye', ref: 'Hz. Hasan\'ın zehirlenmesi (cilt/sayfa kontrol edilecek)', says: { tr: "Muaviye'nin Cü'de'ye vaat ettiği rivayetini sabit görmezler; zehirlenmeyi bir olay olarak aktarırlar." }, status: 'check' },
    { book: 'Taberî, Târîhu\'r-Rusül ve\'l-Mülûk', ref: '41 H olayları (sulh ve Âmü\'l-Cemâa; cilt/sayfa kontrol edilecek)', says: { tr: "Sulhun şartları, Muaviye'nin Kûfe'ye girişi ve birlik yılı." }, status: 'check' },
  ],
  shia: [
    { book: 'Şeyh Müfid, el-İrşâd', ref: 'Hz. Hasan bölümü (sayfa kontrol edilecek)', says: { tr: "Zehirlenme, Cü'de ve Muaviye'nin vaadi." }, status: 'check' },
    { book: 'Ebü\'l-Ferec el-İsfahânî, Mekâtilü\'t-Tâlibiyyîn', ref: 'Hz. Hasan bölümü (sayfa kontrol edilecek)', says: { tr: "Sulh şartları, Muaviye'nin Nuhayle konuşması ve zehirlenme." }, status: 'check' },
    { book: 'İbn Ebi\'l-Hadîd, Şerhu Nehci\'l-Belâğa', ref: 'Sulh bölümü (cilt/sayfa kontrol edilecek)', says: { tr: "Muaviye'nin şartlara bakışı ve Hz. Hasan'ın sulhunun gerekçeleri." }, status: 'check' },
    { book: 'Şeyh Müfid, el-İrşâd; Meclisî, Bihârü\'l-Envâr', ref: 'Hz. Hasan\'ın cenazesi (sayfa numarası ayrıca verilmedi)', says: { tr: 'Aişe\'nin tabutun Peygamber\'in yanına gömülmesini bizzat engellediği ve ok emrini verdiği, Mervan\'ın adamlarının bu emirle okladığı, İbn Abbas\'ın deve ve katır sözü ve Hz. Hüseyin\'in kılıç çekmeden Bakî\'ye defnettiği nakledilir. Sayfa numarası ayrıca verilmedi.' }, status: 'check' },
    { book: 'Taberî, Târîh; Şeyh Müfid, el-İrşâd', ref: '41 H, Ubeydullah b. Abbas (sayfa numarası ayrıca verilmedi)', says: { tr: 'Hz. Hasan\'ın komutanı Ubeydullah b. Abbas\'ın gece Muaviye\'nin yanına geçtiği anlatılır. Sayfa numarası ayrıca verilmedi.' }, status: 'check' },
    { book: 'WikiShia, Peace treaty of Imam al-Hasan (ikincil)', ref: 'Madde', says: { tr: "Sulh şartları ve Muaviye'nin bunlara uymaması." }, url: 'https://en.wikishia.net/view/Peace_Treaty_of_Imam_al-Hasan_(a)', status: 'check' },
  ],
  disputes: [
    {
      title: { tr: "Hz. Hasan'ı kim zehirledi?" },
      sunni: { tr: "Hz. Hasan'ın zehirlendiğinin anlatıldığı birçok kaynak vardır. Sünni âlimlerin bir kısmı Muaviye'nin emrini sabit görmez; vefatın hastalık da olabileceği söylenir." },
      shia: { tr: "Hz. Hasan'ın zehirlendiğinin anlatıldığı birçok kaynak vardır. Şii kitaplarda Müfid, Kuleynî ve Tabersî, Muaviye'nin Cü'de'yi buna ikna ettiğini aktarır." },
    },
    {
      title: { tr: "Sulh şartları tutuldu mu?" },
      sunni: { tr: "Hz. Hasan'ın kan dökülmesin diye yönetimi bıraktığı ortaktır. Şartların metni değişir; sövme gibi uygulamalar sulhun ruhunu zedelemiş sayılabilir." },
      shia: { tr: "Hz. Hasan'ın kan dökülmesin diye yönetimi bıraktığı ortaktır. Şii anlatıda Muaviye şartları baştan çiğnemeyi düşünerek kabul etmiştir." },
    },
  ],
  questions: [
    { tr: "Hz. Hasan'ın ordusu dağılırken o, kanı durdurmayı seçti. Bu sulh size nasıl bir fedakârlık gibi görünüyor?" },
    { tr: "Sulhun ardından minberlerde sövme yayıldı ve veliahtlık gündeme geldi. Hz. Hasan'ın niyeti ile sonraki uygulamalar arasındaki fark size ne söylüyor?" },
    { tr: "Bir olay birçok kitapta geçiyor, fail ise ihtilaflı kalıyor. Böyle bir yerde nasıl sakin düşünürsünüz?" },
  ],
  summary: { tr: "Muaviye Şam'ın ticaret yollarıyla zengindi. Ubeydullah b. Abbas'ı ve komutanları satın aldı. Hz. Hasan kan dökülmesin diye savaşı bitirdi. Muaviye sulhun şartlarını çiğnedi. Hz. Hasan 50 H civarında zehirlenerek vefat etti." },
};

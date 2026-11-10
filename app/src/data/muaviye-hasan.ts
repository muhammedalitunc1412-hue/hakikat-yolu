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
      text: { tr: 'Kûfe\'de **Hz. Ali** şehit edildiğinde halk, onun oğlu **Hz. Hasan**\'a biat etti. Biat, bağlılık sözüdür. Peygamber\'in "seyyid" dediği torun, böylece ümmetin yönetimini üstlendi. Hz. Ali vasiyetinde yönetimi oğluna bırakmıştı. Muaviye\'ye devredilmesine dair tek bir söz söylememişti. Ama **Muaviye**, Şam\'daki ticaret yollarının getirdiği zenginliğe ve yıllardır beslediği orduya güveniyordu. Hz. Hasan\'ı tanımadı ve ordusuyla Kûfe\'nin üzerine yürüdü. Kûfe ordusu ise kısa sürede satın alınan komutanlar yüzünden bölünmeye başladı.' },
      art,
      cites: [{ side: 'shia', i: 1 }, { side: 'shia', i: 3 }],
    },
    {
      by: 'both',
      text: { tr: 'Kûfe ordusunun içinde ihanetler birbirini izledi. Hz. Hasan\'ın komutanlarından **Ubeydullah b. Abbas**, bir gece ordudan ayrılıp gizlice Muaviye\'nin yanına geçti. Komutanlar altınla satın alınıyor, askerler gece karanlığında dağılıyordu. **Hz. Hasan**, Ehl-i Beyt\'in sadık dostlarının böyle bir orduda boşuna kırılacağını gördü. Kan dökülmesin diye savaşı durdurdu ve yönetimi **Muaviye**\'ye bıraktı. Peygamber, "Bu oğlum seyyiddir. Allah onun aracılığıyla Müslümanların iki büyük grubunu barıştıracak" demişti. Bu sulh bir zayıflık değil, satın alınmış bir ordunun içinde ümmetin kanını durdurmaktı.' },
      art,
      cites: [{ side: 'sunni', i: 0 }, { side: 'shia', i: 3 }],
    },
    {
      by: 'shia',
      text: { tr: 'Sulh anlaşmasında **Hz. Hasan**\'ın koyduğu şartlar açıktı. **Muaviye** Allah\'ın Kitabı ve Peygamber\'in sünnetiyle hükmedecekti. Kimseye Hz. Ali\'yi kötületmeyecek ve minberlerde ona sövdürmeyecekti. Kendisinden sonra yerine bir halife tayin etmeyecekti. Hz. Hasan bu şartlarla ==Ehl-i Beyt==\'in onurunu, dostlarının canını ve minberin temizliğini korumak istiyordu. Muaviye bu şartların hepsini kabul etti ve anlaşma imzalandı. Kûfe halkı bir süre rahat bir nefes aldı. Ama imzalanan kâğıdın ömrü, Muaviye\'nin sözüne bağlıydı.' },
      art,
      cites: [{ side: 'shia', i: 1 }, { side: 'shia', i: 3 }],
    },
    {
      by: 'shia',
      text: { tr: 'Sulhtan kısa süre sonra **Muaviye**, Kûfe yakınlarındaki **Nuhayle**\'de halka bir konuşma yaptı. Bu konuşmada niyetini hiç saklamadı: "Ben sizinle namaz kılasınız ya da oruç tutasınız diye savaşmadım. Size hükmetmek için savaştım." Ardından Hz. Hasan\'a verdiği sözleri ==ayaklarının altında== saydığını söyledi. Peygamber\'in torununun kan dökülmesin diye yaptığı sulh, daha mürekkebi kurumadan açıkça çiğnenmişti. Muaviye\'nin asıl amacı, ümmetin dinini korumak değil, ümmetin üzerinde hüküm sürmekti. Oğlu Yezid\'i veliaht yapması da bu sözün devamı olacaktı.' },
      art,
      cites: [{ side: 'shia', i: 1 }, { side: 'shia', i: 2 }],
    },
    {
      by: 'both',
      text: { tr: 'Sulhten hemen sonra Emevi valileri, Muaviye\'nin emriyle minberlerde **Hz. Ali**\'ye lanet okutmaya başladı. Kûfe\'de Hz. Ali\'nin dostlarından **Hucr b. Adî** ve arkadaşları buna karşı çıktı. Hucr, Hz. Ali\'ye olan sevgisiyle tanınırdı. Bu sevginin bedelini, arkadaşlarıyla birlikte öldürülerek ödedi. **Hz. Hasan** ise sulhtan sonra Medine\'ye çekilmişti. Bütün bu olanları dedesinin şehrinde sabırla izledi. Sulhun şartları birer birer çiğnenirken Medine\'deki sessiz yıllar, bir zehirle son bulacaktı.' },
      art,
      cites: [{ side: 'shia', i: 2 }, { side: 'shia', i: 0 }],
    },
    {
      by: 'shia',
      text: { tr: 'Rivayetlere göre **Muaviye**, oğlu **Yezid**\'i kendisinden sonra halife yapmak istiyordu. Bunun önündeki en büyük engel, sulh şartlarını bilen ve halkın sevgisini taşıyan Hz. Hasan\'dı. Muaviye, Hz. Hasan\'ın eşi **Ca\'de bint Eş\'as**\'a gizlice haber gönderdi. Ona, Hz. Hasan\'ı zehirlerse oğlu Yezid\'le evlendireceğini ve yüz bin dirhem vereceğini vaat etti. Ca\'de bu vaade kandı. Hz. Hasan şehit olduktan sonra Muaviye vaadini tutmadı. Ca\'de ne Yezid\'le evlendi ne de paranın tamamını aldı.' },
      art,
      cites: [{ side: 'shia', i: 0 }, { side: 'shia', i: 1 }],
    },
    {
      by: 'both',
      text: { tr: 'Medine\'de **Hz. Hasan**\'ın zehirlendiği ve kırk gün kadar acı çektiği nakledilir. Rivayetlerde ciğerinin parçalandığı anlatılır. Bu bir hekim raporu değil, acının dile getirilişidir. Katâde, Hz. Hasan\'ın kendisi için ciğerinin parçalandığını söylediğini aktarır. Sünni âlim İbn Abdilberr, bir grup insanın zehri Muaviye\'ye bağladığını nakleder, ama kendisi kesin bir hüküm vermez. Şii kaynaklarında ise zehrin arkasında Muaviye\'nin olduğu açıkça yazılır. Peygamber\'in cennet gençlerinin efendisi dediği torun, Medine\'de, kendi evinde zehirle şehit edildi.' },
      art,
      cites: [{ side: 'shia', i: 0 }],
    },
    {
      by: 'both',
      text: { tr: '**Hz. Hüseyin**, kardeşi **Hz. Hasan**\'ın naaşını dedesi Resûlullah\'ın yanına defnetmek için götürdü. Ama Aişe ve Mervan yolu kesti, tabut oklandı. Hz. Hasan ölmeden önce, "Cenazemde bir damla kan dökülmesin" diye vasiyet etmişti. Engel çıkarsa kendisini Bakî\'ye gömmelerini istemişti. Hz. Hüseyin kılıç çekmedi ve tabutu Bakî\'ye çevirdi. **Hz. Hasan**, Bakî mezarlığında ninesi **Fatıma bint Esed**\'in yanına defnedildi. Kardeşinin vasiyeti sayesinde o gün kan dökülmedi. Ama Medine, Peygamber\'in torununun cenazesine ok atıldığını hiç unutmadı.' },
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

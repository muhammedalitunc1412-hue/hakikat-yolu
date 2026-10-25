import type { HistEvent } from '../types';

// Taberî, Ebü'l-Ferec el-İsfahânî (Mekâtilü't-Tâlibiyyîn), İbn Ebi'l-Hadîd ve Şii kaynaklardan özetlenmiştir.
// Hz. Hasan'ın zehirlenmesinde Muaviye'nin rolü Şii kaynaklarında anlatılır; İbn Teymiye ve İbn Kesîr bunu sabit görmez.
const art = { bg: 'interior' as const, actors: [{ kind: 'crowd' as const, x: 50, scale: 4 }] };

export const muaviyeHasan: HistEvent = {
  id: 'muaviye-hasan',
  date: { tr: '40-50 H (661-670)', en: '40-50 AH (661-670)' },
  title: { tr: "Muaviye ve Hz. Hasan: sulh, ihlal ve zehirlenme iddiası", en: 'Muawiya and Hasan: the treaty, its breach and the poisoning claim' },
  hook: { tr: "Hz. Hasan neden Muaviye ile sulh yaptı, sulhun şartlarına ne oldu ve zehirlenmesinde Muaviye'nin rolü nedir?", en: "Why did Hasan make peace with Muawiya, what became of the terms, and what role did Muawiya play in his poisoning?" },
  scenes: [
    {
      by: 'both',
      text: { tr: "Hz. Ali'nin şehadetinden sonra Kûfe'de Hz. Hasan'a biat edildi. Muaviye ise Şam'dan büyük bir orduyla Irak'a yürüdü. Hz. Hasan'ın ordusunda ayrılıklar vardı; kumandanlar ve kabile reisleri Muaviye ile gizli yazışıyordu." },
      art,
    },
    {
      by: 'both',
      text: { tr: "Kan dökülmesin diye Hz. Hasan, Muaviye ile anlaşma yaptı ve yönetimi ona bıraktı (41 H). Bu yıl «birlik yılı» (Âmü'l-Cemâa) diye anıldı. Peygamber'in Buhari 2704'te geçen «bu oğlum seyyiddir, Allah onunla iki büyük grubu barıştıracak» sözü bu sulha işaret edilerek anılır." },
      art,
    },
    {
      by: 'shia',
      text: { tr: "Şii ve bazı tarih kaynaklarında sulhun şartları arasında şunlar sayılır: Muaviye Allah'ın kitabına ve Peygamber'in sünnetine göre yönetecek, kimseye sövdürmeyecek ve kendinden sonrası için halife tayin etmeyecekti. Şartların tam metni kaynaklarda farklıdır." },
      art,
    },
    {
      by: 'shia',
      text: { tr: "Ebü'l-Ferec el-İsfahânî ve İbn Ebi'l-Hadîd'in aktardığına göre Muaviye Kûfe'de, Nuhayle'de yaptığı konuşmada \"Ben sizinle namaz kılmanız ya da oruç tutmanız için savaşmadım; size hükmetmek için savaştım\" dedi ve sulh şartlarını \"ayaklarımın altındadır\" diye niteledi. Bu sözün sıhhati ve tam ifadesi kaynaklardan ayrıca kontrol edilmelidir." },
      art,
    },
    {
      by: 'both',
      text: { tr: "Sulhtan sonra Hz. Ali'ye sövme uygulaması kürsülerde yaygınlaştı; Hucr b. Adî gibi sövmeyi reddedenler öldürüldü. Hz. Hasan Medine'ye çekilip yaklaşık on yıl sessiz bir hayat sürdü ve 50 H civarında zehirlenerek vefat etti. Erken kaynakların çoğu zehirlenmeyi aktarır." },
      art,
    },
    {
      by: 'shia',
      text: { tr: "Şii kaynaklarına (Müfid, Kuleynî, Tabersî) göre Muaviye, Hz. Hasan'ın eşi Cü'de bint el-Eş'as'a yüz bin dirhem ve Yezid ile evlilik vaat ederek zehirletti. Burada Cü'de'ye vaat edilen şey Yezid ile evlenmesidir; Hz. Hasan ile bir evlilik söz konusu değildir. Rivayete göre Muaviye parayı gönderdi, ancak Yezid ile evlilik vaadini yerine getirmedi; bu ayrıntı kaynaklardan ayrıca kontrol edilmelidir." },
      art,
    },
    {
      by: 'both',
      text: { tr: "İbn Teymiye ve İbn Kesîr gibi bazı Sünni âlimler, Muaviye'nin bu zehirlenmedeki rolünü sabit görmez; \"Muaviye'nin Cü'de'ye vaadi rivayetini bence sahih değil\" gibi sözler bu görüşü yansıtır. Zehirlenmenin olduğunu kabul edenler arasında bile failin kim olduğu konusunda görüş birliği yoktur." },
      art,
    },
    {
      by: 'both',
      text: { tr: "Hz. Hasan vasiyetinde kendisinin Peygamber'in yanına defnedilmesini, kan dökülecekse annesinin yanında (Bakî'de) defnedilmesini istedi. Mervan ve bazı Emevîler buna karşı çıktı; cenaze silahlı gerginliğe sahne oldu. Hz. Hüseyin kan dökülmesin diye vasiyete uydu. Ardından Muaviye'nin oğlu Yezid'in veliahtlığı gündeme geldi." },
      art,
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
    { book: 'WikiShia, Peace treaty of Imam al-Hasan (ikincil)', ref: 'Madde', says: { tr: "Sulh şartları ve Muaviye'nin bunlara uymaması." }, url: 'https://en.wikishia.net/view/Peace_Treaty_of_Imam_al-Hasan_(a)', status: 'check' },
  ],
  disputes: [
    {
      title: { tr: "Hz. Hasan'ı Muaviye mi zehirletti?" },
      sunni: { tr: "Zehirlenme olayı kabul edilse de Muaviye'nin buna emir verdiği sabit değildir; rivayetler Şii kaynaklarında yoğunlaşır ve senetleri zayıftır. Hz. Hasan'ın vefatı bir cinayet değil hastalık da olabilir." },
      shia: { tr: "Müfid, Kuleynî ve Tabersî Muaviye'nin Cü'de'yi zehir için ikna ettiğini aktarır. Muaviye'nin Yezid'in veliahtlığı için Hz. Hasan'ı ortadan kaldırması gerekiyordu; sulhun «kendinden sonrasına halife tayin etmeme» şartı bu amacı engelliyordu." },
    },
    {
      title: { tr: "Sulhun şartları" },
      sunni: { tr: "Şartlar kaynaklarda farklı aktarılır; Muaviye'nin sövme gibi uygulamaları sonradan başlayan bir yanlıştır, sulhun ruhunu zedelemiş olabilir ama sulhun kendisi ümmetin birliğini sağlamıştır." },
      shia: { tr: "Muaviye şartları baştan çiğnemeyi düşünerek kabul etti; sövme, sürgün ve Hz. Ali taraftarlarının öldürülmesi sulhun ihlalidir." },
    },
  ],
  questions: [
    { tr: "Hz. Hasan'ın ordusunun dağılmış olması göz önüne alındığında, sulh sizce bir zayıflık mıydı yoksa kan dökülmesini önleyen bir fedakârlık mı?" },
    { tr: "Muaviye'nin Yezid'in veliahtlığını sulh şartlarıyla çelişerek isteyeceğini bilseydi, Hz. Hasan sizce farklı mı davranırdı?" },
    { tr: "Bir rivayeti kabul etmek için tek bir mezhebin kaynaklarında bulunması yeterli midir, yoksa farklı kaynaklarda teyit aramak mı gerekir sizce?" },
  ],
  summary: { tr: "Hz. Hasan, kan dökülmesin diye yönetimi Muaviye'ye bıraktı. Sulhun şartları (kimseye sövdürmeme ve halife tayin etmeme gibi) kaynaklara göre sonradan çiğnendi; Muaviye'nin Nuhayle'de «size hükmetmek için savaştım» dediği aktarılır. Hz. Hasan 50 H civarında zehirlenerek vefat etti. Şii kaynakları bunu Muaviye'nin Cü'de'ye verdiği vaatle açıklar; İbn Teymiye ve İbn Kesîr gibi bazı Sünni âlimler Muaviye'nin rolünü sabit görmez." },
};

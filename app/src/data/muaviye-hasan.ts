import type { HistEvent } from '../types';

// Taberî, Ebü'l-Ferec el-İsfahânî (Mekâtilü't-Tâlibiyyîn), İbn Ebi'l-Hadîd ve Şii kaynaklardan özetlenmiştir.
// Hz. Hasan'ın zehirlenmesinde Muaviye'nin rolü Şii kaynaklarında anlatılır; İbn Teymiye ve İbn Kesîr bunu sabit görmez.
const art = { bg: 'interior' as const, actors: [{ kind: 'crowd' as const, x: 50, scale: 4 }] };

export const muaviyeHasan: HistEvent = {
  id: 'muaviye-hasan',
  date: { tr: '40-50 H (661-670)', en: '40-50 AH (661-670)' },
  title: { tr: "Muaviye ve Hz. Hasan: sulh, ihlal ve zehirlenme iddiası", en: 'Muawiya and Hasan: the treaty, its breach and the poisoning claim' },
  hook: { tr: "Hz. Hasan, kan dökülmesin diye sulh yaptı; sonra şartlara ve vefatına ne oldu?", en: "Why did Hasan make peace with Muawiya, what became of the terms, and what role did Muawiya play in his poisoning?" },
  scenes: [
    {
      by: 'both',
      text: { tr: "Hz. Ali şehit olunca Kûfe'de Hz. Hasan'a biat edildi. Muaviye Şam'dan büyük bir orduyla Irak'a yürüdü. Hz. Hasan'ın ordusunda ayrılıklar vardı; bazı kumandanlar Muaviye ile gizlice yazışıyordu." },
      art,
    },
    {
      by: 'both',
      text: { tr: "Kan dökülmesin diye Hz. Hasan, Muaviye ile anlaştı ve yönetimi ona bıraktı. Bu yıla birlik yılı, Âmü'l-Cemâa denir. Peygamber, \"Bu oğlum seyyiddir; Allah onunla iki büyük grubu barıştıracak\" buyurmuştu. Bu olay Sünni kaynaklarında da geçmektedir (Buhari, Sahih)." },
      art,
    },
    {
      by: 'shia',
      text: { tr: "Şii ve bazı tarih kaynaklarında sulhun şartları şöyle anılır: Muaviye Allah'ın kitabı ve Peygamber'in sünnetiyle yönetecek, kimseye sövdürmeyecek ve kendinden sonrası için halife tayin etmeyecekti. Şartların tam metni kitaplara göre değişir." },
      art,
    },
    {
      by: 'shia',
      text: { tr: "Ebü'l-Ferec ve İbn Ebi'l-Hadîd'e göre Muaviye, Kûfe'de Nuhayle'de şöyle dedi: \"Ben sizinle namaz ya da oruç için savaşmadım; size hükmetmek için savaştım.\" Sulh şartlarını da \"ayaklarımın altındadır\" diye andı. Sözün sıhhati ayrıca kontrol edilmelidir." },
      art,
    },
    {
      by: 'both',
      text: { tr: "Sulhtan sonra minberlerde Hz. Ali'ye sövme yayıldı; bunu reddeden Hucr b. Adî öldürüldü. Hz. Hasan Medine'de yaklaşık on yıl sessiz yaşadı ve 50 H civarında zehirlenerek vefat etti. Erken kaynakların çoğu zehirlenmeyi aktarır. Bu olay Sünni kaynaklarında da geçmektedir (İbn Teymiye, Minhâcü's-Sünne; İbn Kesîr, el-Bidâye ve'n-Nihâye)." },
      art,
    },
    {
      by: 'shia',
      text: { tr: "Hz. Hasan'ın zehirlenerek vefat ettiği birçok kaynakta geçer. Şii kitaplarda Muaviye'nin, eşi Cü'de bint el-Eş'as'a yüz bin dirhem ve Yezid ile evlilik vaat ettiği aktarılır. Vaad, Cü'de'nin Yezid ile evlenmesiydi. Rivayete göre para gönderilmiş, evlilik tutulmamıştır; bu ayrıntı kontrol edilmelidir." },
      art,
    },
    {
      by: 'both',
      text: { tr: "Hz. Hasan'ın zehirlendiği birçok kaynakta anlatılır. İbn Teymiye ve İbn Kesîr, Muaviye'nin rolünü sabit görmez; fail konusunda da görüş birliği yoktur." },
      art,
    },
    {
      by: 'both',
      text: { tr: "Hz. Hasan, Peygamber'in yanına defnedilmesini istedi. Kan dökülecekse annesinin yanında, Bakî'de gömülmesini vasiyet etti. Mervan ve bazı Emevîler buna karşı çıktı; cenaze silahlı bir gerginliğe döndü. Hz. Hüseyin, kan dökülmesin diye vasiyete uydu. Ardından Yezid'in veliahtlığı gündeme geldi." },
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
  summary: { tr: "Hz. Hasan, kan dökülmesin diye yönetimi Muaviye'ye bıraktı. Peygamber'in onu seyyid diye anması bu sulha işaret edilerek okunur. Bu olay Sünni kaynaklarında da geçmektedir (Buhari, Sahih). Hz. Hasan 50 H civarında zehirlenerek vefat etti. Şii kaynaklar bunu Muaviye ve Cü'de ile anlatır; İbn Teymiye ve İbn Kesîr, Muaviye'nin rolünü sabit görmez." },
};

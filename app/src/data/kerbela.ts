import type { HistEvent } from '../types';

// Kaynak: research/05-hasan-kerbela-ve-kaynak-rehberi.md (Parça A2-A6). Ayrıntılar çoğunlukla Ebu Mihnef kanalıyla gelir; sayfa numaraları doğrulanmadığı için 'check'.
export const kerbela: HistEvent = {
  id: 'kerbela',
  date: { tr: '10 Muharrem 61 H (10 Ekim 680)', en: '10 Muharram 61 AH (680)' },
  title: { tr: 'Kerbela', en: 'Karbala' },
  hook: { tr: 'Hz. Peygamber\'in (s.a.v.) torunu Hz. Hüseyin (a.s.) zulme biat etmedi. Kerbela\'da neye katlandı?', en: 'The Prophet\'s grandson refused allegiance; what happened at Karbala?' },
  scenes: [
    {
      text: { tr: 'Hz. Peygamber (s.a.v.) torunları Hz. Hasan ve Hz. Hüseyin\'i bağrına basardı. Onlar için «cennet gençlerinin efendileridir» demişti. Tirmizi 3768 bu sözü Ebu Saîd\'den aktarır. Kerbela\'yı okumadan önce bu cümle hatırlanır.' },
      art: { bg: 'city', props: ['sun'], actors: [{ kind: 'prophet', x: 40, label: { tr: 'Hz. Peygamber' } }, { kind: 'hasan', x: 62, scale: 0.7, label: { tr: 'Hz. Hasan' } }, { kind: 'husayn', x: 78, scale: 0.7, label: { tr: 'Hz. Hüseyin' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Muaviye 60\'ta (680) ölünce yönetim oğlu Yezid\'e geçti. Medine valisi Hz. Hüseyin\'den (a.s.) biat istedi. O biat etmedi; önce Medine\'den, sonra Mekke\'den ayrıldı. Boyun eğmemek, yolun ilk adımıydı.' },
      art: { bg: 'city', props: ['flags'], actors: [{ kind: 'man', x: 28, label: { tr: 'Yezid' } }, { kind: 'man', x: 48, label: { tr: 'Medine valisi' } }, { kind: 'husayn', x: 76, label: { tr: 'Hz. Hüseyin' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Kûfelilerden çok sayıda davet mektubu geldiği anlatılır. Hz. Hüseyin önce amcaoğlu Müslim b. Akîl\'i elçi gönderdi. Davete koşmadan önce, sözün doğru olup olmadığını öğrenmek istedi.' },
      art: { bg: 'caravan', props: ['camels', 'scroll'], actors: [{ kind: 'man', x: 28, label: { tr: 'Müslim b. Akîl' } }, { kind: 'crowd', x: 60, scale: 5 }] },
      by: 'both',
    },
    {
      text: { tr: 'Vali İbn Ziyâd Kûfe\'ye gelince halk dağıldı, Müslim öldürüldü. Hz. Hüseyin bu haberi henüz almamıştı. Ailesi ve arkadaşlarıyla yola çıkmıştı. Yanında Hz. Zeynep ve Ehl-i Beyt\'in küçükleri de vardı.' },
      art: { bg: 'dune-dusk', props: ['camels', 'tents'], actors: [{ kind: 'husayn', x: 40, label: { tr: 'Hz. Hüseyin' } }, { kind: 'woman', x: 58, label: { tr: 'Zeynep' } }, { kind: 'crowd', x: 78, scale: 4 }] },
      by: 'both',
    },
    {
      text: { tr: 'Hürr b. Yezid\'in atlıları kafileyi durdurdu ve Kerbela\'ya yönlendirdi. Hz. Hüseyin 2 Muharrem 61\'de burada konakladı. Ömer b. Sa\'d\'ın ordusu da geldi. Çöl, bir torunun etrafında kapandı.' },
      art: { bg: 'dune-day', props: ['sun', 'tents', 'flags'], actors: [{ kind: 'man', x: 24, label: { tr: 'Hürr' } }, { kind: 'husayn', x: 54, label: { tr: 'Hz. Hüseyin' } }, { kind: 'crowd', x: 82, scale: 4 }] },
      by: 'both',
    },
    {
      text: { tr: 'Yedi Muharrem civarında Fırat\'a erişimin kesildiği anlatılır. Çocuklar ve kadınlar susuzlukla sınandı. Su, bir silah gibi kullanıldı. Bu ayrıntı erken tarih anlatılarında geçer.' },
      art: { bg: 'river', props: ['tents', 'flags'], actors: [{ kind: 'crowd', x: 28, scale: 5 }, { kind: 'woman', x: 52, label: { tr: 'Zeynep' } }, { kind: 'husayn', x: 76, label: { tr: 'Hz. Hüseyin' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Aşûrâ arifesinde Hz. Hüseyin arkadaşlarına, dilerlerse ayrılabileceklerini söyledi. Rivayete göre onlar kaldı. Anlatı Ebu Mihnef kanalıyla gelir. Kalanlar, bir imamın yanında ölümü seçmişti.' },
      art: { bg: 'night', props: ['stars', 'moon', 'tents'], actors: [{ kind: 'husayn', x: 34, pose: 'raise', label: { tr: 'Hz. Hüseyin' } }, { kind: 'crowd', x: 66, scale: 5 }] },
      by: 'both',
    },
    {
      text: { tr: '10 Muharrem sabahı çatışma başladı. Hz. Hüseyin, erkek yakınları ve arkadaşları şehit edildi. Hasta olduğu için savaşa çıkamayan oğlu Ali, Zeynelâbidîn, sağ kaldı. Ca\'ferî yolda bu gün, zulme boyun eğmemenin adıdır. Sünni tarihçilerin çoğu da öldürülmesini büyük bir musibet sayar.' },
      art: { bg: 'battle', props: ['flags', 'swords'], actors: [{ kind: 'crowd', x: 24, scale: 5 }, { kind: 'husayn', x: 54, pose: 'raise', label: { tr: 'Hz. Hüseyin' } }, { kind: 'crowd', x: 82, scale: 5 }] },
      by: 'both',
    },
    {
      text: { tr: 'Ehl-i Beyt\'in kadınları ve çocukları esir alınıp önce Kûfe\'ye, sonra Şam\'a götürüldü. Hz. Zeynep\'in ve hasta oğul Ali Zeynelâbidîn\'in (a.s.) konuşmaları Şiî kaynaklarda ve bazı tarihlerde yer alır. Yezid\'in tavrı kaynaklarda farklı aktarılır. Esaret, matem edebiyatının da kapısı oldu.' },
      art: { bg: 'caravan', props: ['camels'], actors: [{ kind: 'woman', x: 26, label: { tr: 'Zeynep' } }, { kind: 'crowd', x: 48, scale: 3 }, { kind: 'man', x: 76, label: { tr: 'Yezid' } }] },
      by: 'both',
    },
  ],
  sunni: [
    { book: 'Tirmizi, el-Câmi\'', ref: 'No. 3768 (Menâkıb)', says: { tr: 'Ebu Said el-Hudri\'den: Hz. Hasan ve Hz. Hüseyin cennet gençlerinin efendileridir.' }, status: 'verified' },
    { book: 'Hâkim, el-Müstedrek', ref: 'Ümmü Seleme rivayeti (hadithunlocked.com: hakim:8202; Müstedrek cilt/sayfa kontrol edilecek)', says: { tr: 'Peygamber elinde kırmızı toprakla uyanır ve Cebrail\'in bunun Hz. Hüseyin\'in Irak\'ta öldürüleceği toprak olduğunu bildirdiğini söyler.' }, grade: { tr: 'Hâkim: Şeyhayn şartına göre sahih; Zehebî de katılır. Hâkim\'in derecelendirmesi Sünni hadis ilminde gevşek bulunur.' }, url: 'https://hadithunlocked.com/hakim:8202', status: 'verified' },
    { book: 'Hâkim, el-Müstedrek', ref: 'Ümmü Fadl rivayeti (hadithunlocked.com: hakim:4824)', says: { tr: 'Cebrail Peygamber\'e ümmetinin Hz. Hüseyin\'i öldüreceğini bildirir.' }, grade: { tr: 'Zehebî Telhîs\'te rivayeti zayıflığı sebebiyle çıkarmıştır.' }, status: 'check' },
    { book: 'Taberi, Târîhu\'r-Rusül ve\'l-Mülûk', ref: 'Hicri 60-61 olayları (cilt/sayfa kontrol edilecek)', says: { tr: 'Kerbela anlatısı; önemli kısmı Ebu Mihnef\'e dayanır. Sünni ricâl eleştirmenleri Ebu Mihnef\'i zayıf sayar, bu yüzden yalnızca ona dayanan ayrıntılar tek kaynaklı rivayettir.' }, status: 'check' },
    { book: 'İbn Esir, el-Kâmil fi\'t-Târîh', ref: 'Hicri 61 olayları (cilt/sayfa kontrol edilecek)', says: { tr: 'Taberi\'ye dayanan genel Kerbela anlatımı.' }, status: 'check' },
    { book: 'İbn Kesir, el-Bidâye ve\'n-Nihâye', ref: 'Hz. Hüseyin\'in katli bölümü (Arapça aslından kontrol edilecek)', says: { tr: 'Hz. Hüseyin\'in katlini büyük bir musibet olarak anlatır; Aşûrâ\'da yas ritüellerini ise eleştirir.' }, status: 'check' },
    { book: 'İbn Teymiyye, Minhâcü\'s-Sünne', ref: 'cilt 4, s. 528-530, 543; Mecmû\' el-Fetâvâ 3/409 (Nebil Hz. Hüseyin, Leiden Arabic Humanities Blog, 2023 aktarımıyla)', says: { tr: 'Yezid\'in küfür ve Hz. Hüseyin\'in katlini emretme suçlamalarını reddeder, Hz. Hüseyin\'in haksız öldürüldüğünü ve şehit olduğunu kabul eder; çıkışını ise hatalı içtihat sayar. Yezid\'in katilleri cezalandırmadığını da kabul eder.' }, status: 'verified' },
    { book: 'IslamQA (islamqa.info)', ref: 'Cevap no. 241102', says: { tr: 'Yezid\'in Hz. Hüseyin\'in katlini emretmediği görüşünü savunur, İbn Ziyad\'ı lanetler, Zeynep-Yezid konuşması rivayetini Ebu Mihnef gerekçesiyle reddeder; Yezid\'in Hz. Hüseyin\'e karşı direnilmesini emrettiğini ve katilleri cezalandırmadığı için eleştirildiğini yazar.' }, url: 'https://islamqa.info/en/answers/241102', status: 'verified' },
  ],
  shia: [
    { book: 'Şeyh Müfid, el-İrşâd', ref: 'Hz. Hüseyin bölümü (sayfa kontrol edilecek)', says: { tr: 'Hz. Hüseyin\'in Medine\'den ayrılışı, Kûfe daveti, Kerbela olayları ve esirlik anlatılır.' }, url: 'https://al-islam.org/kitab-al-irshad-book-shaykh-al-mufid', status: 'check' },
    { book: 'Seyyid İbn Tâvûs, el-Lühûf', ref: 'Kerbela bölümü (sayfa ve çeviri kontrol edilecek)', says: { tr: 'Geç dönem Şii kaynak; Hz. Hüseyin\'in Kerbela\'daki şehadetini anlatır.' }, status: 'check' },
    { book: 'Allâme Meclisî, Biharü\'l-Envâr', ref: 'cilt 44-45 (kontrol edilecek)', says: { tr: 'Ümmü Seleme ve toprağın kana dönmesi anlatılarıyla Hz. Hüseyin\'in öldürüleceği haberi.' }, status: 'check' },
  ],
  disputes: [
    {
      title: { tr: 'Hz. Hüseyin\'in çıkışı nasıl yorumlanır?' },
      sunni: { tr: 'Hz. Hüseyin haksız öldürülmüş bir şehittir. İbn Teymiyye gibi bazı âlimler çıkışını hatalı bir içtihat sayıp fayda getirmediğini söyler; bu, Hz. Hüseyin\'in saygınlığını inkâr etmez.' },
      shia: { tr: 'Hz. Hüseyin imamdır ve Yezid gibi birine biat etmemesi hakkın korunması için bilinçli bir duruştur. Kerbela, zulme karşı direnişin simgesidir.' },
    },
    {
      title: { tr: 'Yezid\'in sorumluluğu ve lanet' },
      sunni: { tr: 'Sünni âlimler ikiye ayrılır. Gazali ve İbnü\'s-Salâh belirli bir kişiye lanetin caiz olmadığını söyler, sorumluluğu çoğunlukla İbn Ziyad\'a yükler. İbnü\'l-Cevzî ve Teftâzânî Yezid\'e lanetin caiz olduğunu savunur; Nevevî ve İbn Hacer el-Heytemî lanet etmez. Hiçbir görüş "bütün Sünniler" adına sunulamaz.' },
      shia: { tr: 'Yezid\'in Hz. Hüseyin\'in katlinden doğrudan sorumlu olduğu ve bu nedenle lanete layık olduğu savunulur.' },
    },
    {
      title: { tr: 'Esirlik ve Şam meclisi' },
      sunni: { tr: 'Yezid\'in Ehl-i Beyt\'i Medine\'ye gönderdiği anlatılır; Zeynep\'in meclis konuşması Ebu Mihnef\'e dayandığı için bazı Sünni âlimlerce kabul edilmez.' },
      shia: { tr: 'Zeynep ve Ali b. Hz. Hüseyin\'in Kûfe ve Şam\'daki konuşmaları, Ehl-i Beyt\'in mazlumiyetini duyuran sahneler olarak aktarılır.' },
    },
  ],
  questions: [
    { tr: 'Peygamber "Hz. Hasan ve Hz. Hüseyin cennet gençlerinin efendileridir" demişti (Tirmizi 3768). Onun torununa Kerbela\'da bu ümmetin içinden gelenler ne yaptı sizce?' },
    { tr: 'Hâkim\'in Müstedrek\'indeki Ümmü Seleme rivayetine göre Peygamber, Hz. Hüseyin\'in Irak\'ta öldürüleceği toprağı kederle önceden gösterdi. Torununun bu akıbeti ümmete bu kadar önceden haber verilmişken, olanlar nasıl anlaşılmalı?' },
    { tr: 'Gazali ve İbn Teymiyye gibi Sünni âlimler bile Hz. Hüseyin\'in haksız öldürüldüğünü kabul etti. Bu ortak kabul, onun duruşu hakkında bize ne söyler?' },
    { tr: 'Katillerin cezalandırılmaması, İbn Teymiyye ve IslamQA gibi Sünni kaynaklarda da eleştiri konusu. Peygamber\'in ailesi için adalet neden sağlanamadı?' },
    { tr: 'Hz. Hüseyin, biat etmeyerek yönetimin babadan oğula geçmesine karşı durdu. Bu duruş, "hakkı söylemek" konusunda bugün bize ne öğretir?' },
  ],
  summary: { tr: 'Hz. Hüseyin, Yezid\'e biat etmeyip Kûfe davetine çıktı ve 10 Muharrem 61\'de Kerbela\'da ailesi ve arkadaşlarıyla şehit edildi, Ehl-i Beyt esir götürüldü; haksız öldürüldüğü Şii kaynaklarında ve Sünni kaynaklarında ortak anlatılır. Yezid\'in sorumluluğu ve çıkışın yorumu kaynaklarda ayrıca ele alınır.' },
};

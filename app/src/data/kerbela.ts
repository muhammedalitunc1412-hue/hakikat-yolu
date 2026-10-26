import type { HistEvent } from '../types';

// Kaynak: research/05-hasan-kerbela-ve-kaynak-rehberi.md (Parça A2-A6). Ayrıntılar çoğunlukla Ebu Mihnef kanalıyla gelir; sayfa numaraları doğrulanmadığı için 'check'.
export const kerbela: HistEvent = {
  id: 'kerbela',
  date: { tr: '10 Muharrem 61 H (10 Ekim 680)', en: '10 Muharram 61 AH (680)' },
  title: { tr: 'Kerbela', en: 'Karbala' },
  hook: { tr: 'Peygamber\'in torunu Yezid\'e biat etmedi; Kerbela, adalet için bir duruş oldu.', en: 'The Prophet\'s grandson refused allegiance; what happened at Karbala?' },
  scenes: [
    {
      text: { tr: 'Peygamber, torunları Hz. Hasan ve Hz. Hüseyin\'i çok severdi. Onlar için "cennet gençlerinin efendileridir" demişti. Bu olay Sünni kaynaklarında da geçmektedir (Tirmizi, No. 3768).' },
      art: { bg: 'city', props: ['sun'], actors: [{ kind: 'prophet', x: 40, label: { tr: 'Hz. Peygamber' } }, { kind: 'hasan', x: 62, scale: 0.7, label: { tr: 'Hz. Hasan' } }, { kind: 'husayn', x: 78, scale: 0.7, label: { tr: 'Hz. Hüseyin' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Muaviye 60\'ta ölünce yönetim oğlu Yezid\'e geçti. Medine valisi Hz. Hüseyin\'den biat istedi. Hz. Hüseyin biat etmedi; önce Medine\'den, sonra Mekke\'den ayrıldı. O, hakkı bir saltanat için eğmedi.' },
      art: { bg: 'city', props: ['flags'], actors: [{ kind: 'man', x: 28, label: { tr: 'Yezid' } }, { kind: 'man', x: 48, label: { tr: 'Medine valisi' } }, { kind: 'husayn', x: 76, label: { tr: 'Hz. Hüseyin' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Kûfe\'den Hz. Hüseyin\'e çok sayıda davet mektubu geldiği anlatılır. O, hemen yola çıkmadan amcaoğlu Müslim b. Akîl\'i elçi olarak önden gönderdi.' },
      art: { bg: 'caravan', props: ['camels', 'scroll'], actors: [{ kind: 'man', x: 28, label: { tr: 'Müslim b. Akîl' } }, { kind: 'crowd', x: 60, scale: 5 }] },
      by: 'both',
    },
    {
      text: { tr: 'Vali İbn Ziyâd Kûfe\'ye gelince halk dağıldı ve Müslim öldürüldü. Hz. Hüseyin bu haberi henüz bilmiyordu. Ailesi ve arkadaşlarıyla Kûfe yoluna çıkmıştı.' },
      art: { bg: 'dune-dusk', props: ['camels', 'tents'], actors: [{ kind: 'husayn', x: 40, label: { tr: 'Hz. Hüseyin' } }, { kind: 'woman', x: 58, label: { tr: 'Zeynep' } }, { kind: 'crowd', x: 78, scale: 4 }] },
      by: 'both',
    },
    {
      text: { tr: 'Hürr b. Yezid\'in atlıları kafileyi durdurdu ve Kerbela\'ya yönlendirdi. Hz. Hüseyin 2 Muharrem 61\'de burada konakladı. Ömer b. Sa\'d komutasındaki ordu da geldi.' },
      art: { bg: 'dune-day', props: ['sun', 'tents', 'flags'], actors: [{ kind: 'man', x: 24, label: { tr: 'Hürr' } }, { kind: 'husayn', x: 54, label: { tr: 'Hz. Hüseyin' } }, { kind: 'crowd', x: 82, scale: 4 }] },
      by: 'both',
    },
    {
      text: { tr: 'Yedi Muharrem civarında Fırat\'a erişim engellendi. Çocuklar ve kadınlar susuzlukla imtihan oldu. Peygamber\'in ev halkına bu, ağır bir haksızlıktı.' },
      art: { bg: 'river', props: ['tents', 'flags'], actors: [{ kind: 'crowd', x: 28, scale: 5 }, { kind: 'woman', x: 52, label: { tr: 'Zeynep' } }, { kind: 'husayn', x: 76, label: { tr: 'Hz. Hüseyin' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Aşûrâ arifesinde Hz. Hüseyin, arkadaşlarına dilerlerse ayrılabileceklerini söyledi. Onlar kalmayı seçti. Bu anlatı Ebu Mihnef kanalıyla gelir. Kalanlar, Ehl-i Beyt\'in yanında durmanın ne demek olduğunu gösterdi.' },
      art: { bg: 'night', props: ['stars', 'moon', 'tents'], actors: [{ kind: 'husayn', x: 34, pose: 'raise', label: { tr: 'Hz. Hüseyin' } }, { kind: 'crowd', x: 66, scale: 5 }] },
      by: 'both',
    },
    {
      text: { tr: '10 Muharrem sabahı çatışma başladı. Hz. Hüseyin, erkek yakınları ve arkadaşları şehit edildi. Hasta olan oğlu Ali b. Hz. Hüseyin (Zeynelâbidîn) sağ kaldı. Kerbela, zulme karşı adalet için bir duruştur. Bu olay Sünni kaynaklarında da geçmektedir (Taberi, Târîhu\'r-Rusül ve\'l-Mülûk; İbn Esir, el-Kâmil fi\'t-Târîh; İbn Kesir, el-Bidâye ve\'n-Nihâye).' },
      art: { bg: 'battle', props: ['flags', 'swords'], actors: [{ kind: 'crowd', x: 24, scale: 5 }, { kind: 'husayn', x: 54, pose: 'raise', label: { tr: 'Hz. Hüseyin' } }, { kind: 'crowd', x: 82, scale: 5 }] },
      by: 'both',
    },
    {
      text: { tr: 'Ehl-i Beyt\'in kadınları ve çocukları esir alındı; önce Kûfe\'ye, sonra Şam\'a götürüldü. Hz. Zeynep ve Ali b. Hz. Hüseyin\'in konuşmaları Şii kaynaklarda ve bazı tarih eserlerinde anılır. Yezid\'in tavrı kitaplarda farklı aktarılır.' },
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
      title: { tr: 'Hz. Hüseyin\'in çıkışı nasıl okunur?' },
      sunni: { tr: 'Hz. Hüseyin\'in Kerbela\'da haksız öldürüldüğü tarih kitaplarında da anlatılır (Taberi, Târîhu\'r-Rusül ve\'l-Mülûk; İbn Kesir, el-Bidâye ve\'n-Nihâye). Bazı âlimler çıkışını bir içtihat olarak değerlendirir; bu, şehadetini değiştirmez.' },
      shia: { tr: 'Hz. Hüseyin\'in Kerbela\'da haksız öldürüldüğü tarih kitaplarında da anlatılır (Taberi, Târîhu\'r-Rusül ve\'l-Mülûk; İbn Kesir, el-Bidâye ve\'n-Nihâye). Caferi anlatıda o imamdır; Yezid\'e biat etmemesi, hakkı korumak için bilinçli bir duruştur.' },
    },
    {
      title: { tr: 'Yezid\'in sorumluluğu' },
      sunni: { tr: 'Hz. Hüseyin\'in haksız öldürüldüğü kabul edilir. Anlatılarda İbn Ziyad öne çıkar; Yezid\'in payı ayrıca değerlendirilir.' },
      shia: { tr: 'Hz. Hüseyin\'in haksız öldürüldüğü kabul edilir. Caferi anlatıda emir Yezid\'den gelmiştir; bu acı, Ehl-i Beyt sevgisiyle anılır.' },
    },
    {
      title: { tr: 'Esir kafilesi ve Şam meclisi' },
      sunni: { tr: 'Ehl-i Beyt\'in esir götürüldüğü anlatılır. Zeynep\'in meclis sözü Ebu Mihnef kanalıyla gelir.' },
      shia: { tr: 'Ehl-i Beyt\'in esir götürüldüğü anlatılır. Caferi anlatıda Zeynep ve Ali b. Hz. Hüseyin\'in Kûfe ve Şam sözleri, bu mazlumiyeti duyuran sahnelerdir.' },
    },
  ],
  questions: [
    { tr: 'Peygamber, Hz. Hasan ve Hz. Hüseyin için cennet gençlerinin efendileri demişti. Bu olay Sünni kaynaklarında da geçmektedir (Tirmizi, No. 3768). Onun torununun Kerbela\'daki hâli, sevginizi nasıl etkiliyor?' },
    { tr: 'Ümmü Seleme rivayetinde Peygamber, Hz. Hüseyin\'in Irak\'ta öldürüleceği toprağı önceden kederle görür. Bu olay Sünni kaynaklarında da geçmektedir (Hâkim, el-Müstedrek, Ümmü Seleme rivayeti). Bu önceden duyulan acı size ne söylüyor?' },
    { tr: 'Hz. Hüseyin\'in haksız öldürüldüğü, tarih kitaplarında da anlatılır (Taberi, Târîhu\'r-Rusül ve\'l-Mülûk; İbn Kesir, el-Bidâye ve\'n-Nihâye). Bu ortak söz, onun duruşunu size nasıl okutuyor?' },
    { tr: 'Katillerin cezalandırılmadığı da kaynaklarda eleştirilir. Peygamber\'in ailesi için adaletin eksik kalması size ne düşündürüyor?' },
    { tr: 'Hz. Hüseyin, Yezid\'e biat etmeyerek babadan oğula geçen yönetime karşı durdu. Onun duruşu, hakkı söylemek konusunda size ne öğretiyor?' },
  ],
  summary: { tr: 'Hz. Hüseyin Yezid\'e biat etmedi. Kûfe davetine çıktı ve 10 Muharrem 61\'de Kerbela\'da ailesi ve arkadaşlarıyla şehit edildi; Ehl-i Beyt esir götürüldü. Bu, zulme karşı adalet için bir duruştu. O ve Hz. Hasan, cennet gençlerinin efendileridir; bu söz Sünni kaynaklarında da geçmektedir (Tirmizi, No. 3768). Haksız şehit edilişi de tarih kitaplarında anlatılır (Taberi, Târîhu\'r-Rusül ve\'l-Mülûk; İbn Kesir, el-Bidâye ve\'n-Nihâye).' },
};

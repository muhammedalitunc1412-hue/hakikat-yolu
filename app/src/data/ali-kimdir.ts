import type { HistEvent } from '../types';

// Araştırma notu: sunnah.com bu oturumda 403 verdi; hadis metinleri doğrudan okunamadı. Yalnızca WikiShia (Laylet'ül-Mebît, İlim Şehri hadisi) ve Wikipedia sayfaları okundu (ikincil). Bu yüzden kaynakların büyük bölümü 'check' durumundadır; numaralar görevde verilen/yaygın atıflardır, yayın öncesi birincil kaynaktan kontrol edilmelidir.
export const aliKimdir: HistEvent = {
  id: 'ali-kimdir',
  date: { tr: '600 (Mekke) - 11 H (632)', en: 'c. 600 (Mecca) - 11 AH (632)' },
  title: { tr: 'Hz. Ali kimdir?', en: 'Who is Imam Ali?' },
  hook: { tr: 'Kâbe\'nin içinde doğdu. Peygamber\'in yatağına yattı. İlim şehrinin kapısı odur.', en: 'Who is the man said to be born in the Kaaba, who lay in the Prophet\'s bed and is called the "gate of knowledge"?' },
  scenes: [
    {
      text: { tr: 'Fatıma bint Esed\'in sancısı Kâbe\'nin dibinde tuttu. Allah\'ın evine sığındı. Duvar ona yol verdi, içeri girdi. **Hz. Ali** orada, Beytullah\'ın içinde dünyaya geldi. Bu doğum Sünni kitaplarda da, Şii kitaplarda da anlatılır. Ondan önce de sonra da Kâbe\'de doğan başka bir çocuk bilinmez. Bu, yalnız ona verilen bir ikramdır.' },
      art: { bg: 'dune-dusk', props: ['sun'], actors: [{ kind: 'woman', x: 30, label: { tr: 'Fatıma bint Esed' } }, { kind: 'ali', x: 66, scale: 0.6, label: { tr: 'Hz. Ali' } }] },
      by: 'both',
      cites: [
        { side: 'sunni', i: 0 },
        { side: 'sunni', i: 1 },
        { side: 'shia', i: 0 },
        { side: 'shia', i: 1 },
        { side: 'shia', i: 2 },
      ],
    },
    {
      text: { tr: 'Mekke\'de kıtlık vardı. Peygamber, amcası Ebu Talib\'in yükünü hafifletmek için küçük Ali\'yi yanına aldı. Hz. Ali çocukluğunu onun evinde, onun terbiyesiyle geçirdi. Bu çocukluk, Sünni ve Şii anlatılarda birlikte durur.' },
      art: { bg: 'interior', actors: [{ kind: 'prophet', x: 40, pose: 'sit', label: { tr: 'Hz. Peygamber' } }, { kind: 'ali', x: 64, scale: 0.6, label: { tr: 'Hz. Ali' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Vahiy geldiğinde Hz. Ali henüz çocuktu. Peygamber\'e iman etti. Şia\'da İslam\'ı kabul eden ilk kişi odur. Onun ilk Müslümanlardan olduğu Sünni kaynaklarında da geçmektedir (Tirmizi, el-Câmi\'). İlk iman edenlerin sırası kaynaklarda farklı anlatılır.' },
      art: { bg: 'night', props: ['stars'], actors: [{ kind: 'prophet', x: 40, label: { tr: 'Hz. Peygamber' } }, { kind: 'ali', x: 64, scale: 0.7, label: { tr: 'Hz. Ali' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Hicret gecesi müşrikler Peygamber\'in evini kuşattı. Hz. Ali duraksamadan onun yatağına yattı ve yeşil örtüsüne büründü. Canını ona feda etti. Bu geceye Leyletü\'l-Mebît denir. Bu fedakârlık Sünni kaynaklarında da geçmektedir (İbn Hişâm, es-Sîre; Halebî, es-Sîre). Bakara 207\'nin ("İnsanlardan öylesi vardır ki Allah\'ın rızasını kazanmak için kendini satar") bu olay üzerine indiği de aktarılır (Hâkim, el-Müstedrek). Ayetin iniş sebebi için başka rivayetler de vardır.' },
      art: { bg: 'night', props: ['moon', 'stars', 'swords'], actors: [{ kind: 'crowd', x: 22, scale: 5 }, { kind: 'ali', x: 64, pose: 'sit', label: { tr: 'Hz. Ali' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Medine\'de Peygamber ashab arasında kardeşlik kurdurdu. Buna mü\'ahât denir. Hz. Ali\'ye "Sen dünyada da ahirette de benim kardeşimsin" buyurdu. Bu söz Sünni kaynaklarında da geçmektedir (Tirmizi, el-Câmi\'). Şia bunu, Hz. Ali\'nin ona en yakın kişi oluşunun delili sayar.' },
      art: { bg: 'city', props: ['palms'], actors: [{ kind: 'prophet', x: 40, label: { tr: 'Hz. Peygamber' } }, { kind: 'ali', x: 62, label: { tr: 'Hz. Ali' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Bedir\'de, Uhud\'da ve Hendek\'te Hz. Ali sancağı taşıdı, en önde savaştı. Hayber\'de kale uzayınca Peygamber "Sancağı, Allah ve Resulü\'nü seven, Allah ve Resulü\'nün de sevdiği bir adama vereceğim" dedi. O kişi Hz. Ali oldu. Bu söz Sünni kaynaklarında da geçmektedir (Buhari, Sahih). Zülfikar kılıcı ve "lâ fetâ illâ Alî, lâ seyfe illâ Zülfikâr" sözü çok anılır. Bu söz hadis ilminde zayıf ve ihtilaflı sayılır. Sağlam bir hadis olarak sunulmaz.' },
      art: { bg: 'battle', props: ['flags', 'swords'], actors: [{ kind: 'crowd', x: 22, scale: 6 }, { kind: 'ali', x: 62, pose: 'raise', label: { tr: 'Hz. Ali' } }] },
      by: 'both',
    },
    {
      text: { tr: '"Ben ilmin şehriyim, Ali de onun kapısıdır." Bu söz Sünni kaynaklarında da geçmektedir (Tirmizi, el-Câmi\'; Hâkim, el-Müstedrek). Şia bunu, Hz. Ali\'nin ilimdeki yerinin delili sayar. Sıhhati konuşulur. Kimi sahih ya da hasen der, kimi zayıf, hatta uydurma sayar.' },
      art: { bg: 'interior', props: ['scroll'], actors: [{ kind: 'prophet', x: 38, pose: 'raise', label: { tr: 'Hz. Peygamber' } }, { kind: 'ali', x: 64, label: { tr: 'Hz. Ali' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Şûrâ 23. ayet, Mevedde ayetidir: "De ki: Ben sizden bunun karşılığında yakınlarıma sevgiden başka bir şey istemiyorum." Şia\'da yakınlar Hz. Ali, Hz. Fatıma, Hz. Hasan ve Hz. Hüseyin\'dir. Bu yorumun geçtiği Sünni tefsirler de vardır.' },
      art: { bg: 'dawn', props: ['sun'], actors: [{ kind: 'ali', x: 24, scale: 0.9, label: { tr: 'Hz. Ali' } }, { kind: 'fatima', x: 42, scale: 0.9, label: { tr: 'Hz. Fatıma' } }, { kind: 'hasan', x: 60, scale: 0.7, label: { tr: 'Hz. Hasan' } }, { kind: 'husayn', x: 76, scale: 0.7, label: { tr: 'Hz. Hüseyin' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Medine\'de Hz. Ali, Peygamber\'in kızı Hz. Fatıma ile evlendi. Mehir olarak zırhının satılmasından gelen bedel anılır. Şia\'ya göre bu nikâh gökte kıyılmıştır. Peygamber\'in soyu bu evlilikten Hz. Hasan ve Hz. Hüseyin ile yürüdü.' },
      art: { bg: 'city', props: ['palms'], actors: [{ kind: 'ali', x: 36, label: { tr: 'Hz. Ali' } }, { kind: 'fatima', x: 60, label: { tr: 'Hz. Fatıma' } }, { kind: 'prophet', x: 80, scale: 0.9, label: { tr: 'Hz. Peygamber' } }] },
      by: 'shia',
    },
    {
      text: { tr: 'Peygamber vefat edince Hz. Ali onu yıkadı ve defin işinde başta durdu. Bu, Sünni kaynaklarında da geçmektedir (İbn Mâce, es-Sünen). Şia\'ya göre Peygamber yıkanması için Hz. Ali\'yi vasiyet etmişti. Gözlerini o bağladı. Vefat anında başı Hz. Ali\'nin göğsündeydi.' },
      art: { bg: 'interior', actors: [{ kind: 'ali', x: 40, pose: 'sit', label: { tr: 'Hz. Ali' } }, { kind: 'prophet', x: 64, pose: 'sit', label: { tr: 'Hz. Peygamber' } }] },
      by: 'both',
    },
  ],
  sunni: [
    { book: 'Hâkim en-Nîsâbûrî, el-Müstedrek ale\'s-Sahîhayn', ref: 'cilt 3, s. 483 (Dârü\'l-Ma\'rife baskısı)', says: { tr: 'Hâkim, Mus\'ab ez-Zübeyrî\'nin "Kâbe\'de ondan önce de sonra da kimse doğmadı" sözünü düzeltir ve "Haberler tevatür etmiştir: Fatıma bint Esed, Emîrü\'l-Mü\'minîn Ali b. Ebî Tâlib\'i Kâbe\'nin içinde doğurdu" der. İbnü\'l-Mülakkın, el-Bedrü\'l-Münîr, cilt 6, s. 489\'da bu cümlenin el-Müstedrek\'te Ali\'nin tercümesinde geçtiğini kaydeder.' }, grade: { tr: 'Hâkim\'in kendi hükmü; tevatür burada onun ifadesidir' }, status: 'verified' },
    { book: 'Mes\'ûdî, Mürûcü\'z-Zeheb ve Meâdinü\'l-Cevher', ref: 'cilt 2, s. 349 (Dârü\'l-Endelüs, Beyrut)', says: { tr: 'Ali b. Ebî Tâlib\'in hilâfeti anlatılırken "Doğumu Kâbe\'de idi" denir.' }, status: 'verified' },
    { book: 'Tirmizi, el-Câmi\'', ref: 'No. 3734-3735 (Menâkıb; metin okunamadı, sunnah.com 403)', says: { tr: 'Hz. Ali\'nin erken müslümanlığı ile ilgili rivayetler; ilk müslüman sırası konusunda ihtilaf vardır.' }, status: 'check' },
    { book: 'Tirmizi, el-Câmi\'', ref: 'No. 3720 (Menâkıb; mü\'ahât)', says: { tr: 'Peygamber\'in Hz. Ali\'ye "dünyada ve ahirette kardeşimsin" demesi.' }, url: 'https://sunnah.com/tirmidhi:3720', status: 'check' },
    { book: 'Buhari, Sahih', ref: 'No. 2942 (Cihâd; Hayber sancağı)', says: { tr: 'Peygamber\'in Hayber\'de sancağı Allah ve Resulü\'nü seven ve onlar tarafından sevilen birine vereceğini söylemesi; kişi Hz. Ali olur.' }, grade: { tr: 'Buhari (sahih kitap)' }, url: 'https://sunnah.com/bukhari:2942', status: 'check' },
    { book: 'Tirmizi, el-Câmi\'', ref: 'No. 3723 (Menâkıb; ilim şehri); Hâkim, el-Müstedrek 3/126 (WikiShia atfı)', says: { tr: '"Ben ilmin şehriyim, Ali de onun kapısıdır."' }, grade: { tr: 'Sıhhati tartışmalı: Tirmizi/Hâkim rivayet etmiştir; bazı hadisçiler zayıf ya da uydurma sayar. İbn Hacer\'in zayıflatılmaması gerektiği görüşü WikiShia aracılığıyla aktarıldı.' }, url: 'https://en.wikishia.net/view/Hadith_of_the_City_of_Knowledge', status: 'check' },
    { book: 'Tirmizi, el-Câmi\'', ref: 'Cihâd bölümü, Zülfikar hadisi (numara kontrol edilecek)', says: { tr: 'Peygamber\'in Zülfikar adlı kılıcına dair rivayet; "lâ fetâ illâ Alî" sözü bu rivayetin parçası değildir.' }, grade: { tr: '"Lâ fetâ illâ Alî" sözü genellikle zayıf/ihtilaflı sayılır' }, status: 'check' },
    { book: 'Buhari, Sahih (Tefsir)', ref: 'Şûrâ 23 ile ilgili İbn Abbas rivayeti (numara kontrol edilecek)', says: { tr: '"Yakınlar" ifadesinin Kureyş\'le akrabalığa işaret ettiği yorumu.' }, status: 'check' },
    { book: 'İbn Mâce, es-Sünen', ref: 'Cenâiz bölümü, Peygamber\'in yıkanması (numara kontrol edilecek)', says: { tr: 'Hz. Ali\'nin Peygamber\'i yıkamada yer aldığı rivayeti.' }, status: 'check' },
    { book: 'İbn Hişâm, es-Sîre; Halebî, es-Sîre', ref: 'Hicret bölümü (WikiShia atfı; kitaplar okunmadı)', says: { tr: 'Hz. Ali\'nin hicret gecesi Peygamber\'in yatağında yatması.' }, status: 'check' },
  ],
  shia: [
    { book: 'Şeyh Müfid, el-İrşâd', ref: 'cilt 1, s. 5 (Müessesetü Âli\'l-Beyt)', says: { tr: 'Hz. Ali Cuma günü, 13 Receb, Fil yılından otuz yıl sonra Mekke\'de Beytullah\'ta doğdu. Ondan önce de sonra da Allah\'ın evinde doğan olmadı; bu, Allah\'ın ona ikramıdır. Annesi Fatıma bint Esed\'dir.' }, url: 'https://lib.eshia.ir/27035/1/5', status: 'verified' },
    { book: 'Şeyh Sadûk, İlelü\'ş-Şerâi\'', ref: 'cilt 1, s. 135, hadis 3', says: { tr: 'Yezîd b. Ka\'neb\'den: Fatıma bint Esed sancılanınca Kâbe\'nin yanında dua etti. Evin arkası açıldı, içeri girdi, duvar kapandı.' }, url: 'https://lib.eshia.ir/10107/1/135', status: 'verified' },
    { book: 'Şeyh Sadûk, el-Emâlî', ref: 's. 195 (Müessesetü\'l-Bi\'se; rivayet bir önceki sayfadan sürer)', says: { tr: 'Yezîd b. Ka\'neb: Kâbe\'nin arkası açıldı, Fatıma bint Esed girdi. Dördüncü gün Hz. Ali elinde çıktı. Sayfadaki dipnot aynı haberi İlelü\'ş-Şerâi\' 135/3 ile bağlar.' }, url: 'https://lib.eshia.ir/15033/1/195', status: 'verified' },
    { book: 'Tûsî, el-Emâlî', ref: 'sayfa 298, 466, 467 (WikiShia atfı; kitap okunmadı)', says: { tr: 'Leyletü\'l-Mebît ve Hz. Ali\'nin Peygamber\'in yatağına yatması.' }, url: 'https://en.wikishia.net/view/Laylat_al-Mabit', status: 'check' },
    { book: 'Meclisî, Bihârü\'l-Envâr', ref: 'cilt 19, sayfa 60, 92 (WikiShia atfı; kitap okunmadı)', says: { tr: 'Hicret gecesi olayı ve Bakara 207 rivayeti.' }, status: 'check' },
    { book: 'Tabâtabâî, el-Mîzân', ref: 'cilt 2 (Bakara 207; WikiShia atfı)', says: { tr: 'Bakara 207\'nin Hz. Ali hakkında indiği görüşü.' }, status: 'check' },
    { book: 'Emînî, el-Gadîr', ref: 'İlim şehri hadisi bölümü (WikiShia atfı)', says: { tr: 'İlim şehri hadisinin birçok Sünni ravisinin sahih saydığı aktarılır; Şia\'ya göre mütevatirdir.' }, status: 'check' },
    { book: 'Kuleynî, el-Kâfî; Şeyh Müfid, el-İrşâd', ref: 'Peygamber\'in yıkanması ve defni bölümü (cilt/sayfa kontrol edilecek)', says: { tr: 'Peygamber\'in vefatı, Hz. Ali\'nin yıkaması ve defni.' }, status: 'check' },
    { book: 'Şii tefsirleri ve hadis kitapları', ref: 'Şûrâ 23 (Mevedde) - Hz. Ali, Fatıma, Hasan, Hüseyin (kitap/numara kontrol edilecek)', says: { tr: '"Yakınlar" ifadesinin Ehl-i Beyt\'i kastettiği görüşü.' }, status: 'check' },
  ],
  disputes: [
    {
      title: { tr: 'Kâbe\'de doğum' },
      shia: { tr: 'Hz. Ali\'nin Kâbe\'de doğduğu hem Şii hem Sünni kitaplarda anlatılır. Şeyh Müfid el-İrşâd 1/5\'te, Şeyh Sadûk İlelü\'ş-Şerâi\' 1/135 ve el-Emâlî s. 195\'te bu doğumu onun fazileti olarak yazar.' },
      sunni: { tr: 'Hz. Ali\'nin Kâbe\'de doğduğu hem Sünni hem Şii kitaplarda anlatılır. Hâkim el-Müstedrek 3/483\'te haberlerin tevatür ettiğini söyler. Mes\'ûdî Mürûcü\'z-Zeheb 2/349\'da "doğumu Kâbe\'de idi" der. İbnü\'l-Mülakkın (el-Bedrü\'l-Münîr 6/489) Hâkim\'in bu hükmünü zayıf sayar; cümle el-Müstedrek\'te durur.' },
    },
    {
      title: { tr: 'İlk müslüman kimdir?' },
      shia: { tr: 'Hz. Ali küçük yaşta Peygamber\'e iman etti ve ilk Müslümanlar arasında anılır. Şia\'da Peygamber\'e ilk iman eden kişi odur.' },
      sunni: { tr: 'Hz. Ali küçük yaşta Peygamber\'e iman etti ve ilk Müslümanlar arasında anılır. Sünni okumada Hz. Hatice ilk kadın, Ebu Bekir ilk yetişkin erkek, Hz. Ali ilk çocuk diye ayrılır; sırada ihtilaf vardır.' },
    },
    {
      title: { tr: 'Bakara 207 kimin hakkında indi?' },
      shia: { tr: 'Hicret gecesi Hz. Ali Peygamber\'in yatağına yattı; Bakara 207 bu fedakârlıkla da anlatılır. Şia\'da ayet, o gece onun canını feda etmesi üzerine inmiştir.' },
      sunni: { tr: 'Hicret gecesi Hz. Ali Peygamber\'in yatağına yattı; Bakara 207 bu fedakârlıkla da anlatılır. Sünni tefsir ve hadis kitaplarının bir kısmı aynı rivayeti aktarır; bir kısmı ayeti Suheyb gibi başka kişilerle de ilişkilendirir.' },
    },
    {
      title: { tr: '"Lâ fetâ illâ Alî, lâ seyfe illâ Zülfikâr"' },
      shia: { tr: '"Lâ fetâ illâ Alî, lâ seyfe illâ Zülfikâr" sözü Hz. Ali\'nin kahramanlığıyla anılır. Şii kaynaklarda bu söz yaygın geçer; kaynak ve isnad ayrıca kontrol edilmelidir.' },
      sunni: { tr: '"Lâ fetâ illâ Alî, lâ seyfe illâ Zülfikâr" sözü Hz. Ali\'nin kahramanlığıyla anılır. Hadisçiler bu sözü genellikle zayıf ya da asılsız sayar; Zülfikar\'ın Peygamber\'e ait bir kılıç olduğu rivayeti ayrı bir meseledir.' },
    },
    {
      title: { tr: 'İlim şehri hadisinin sıhhati' },
      shia: { tr: '"Ben ilmin şehriyim, Ali de onun kapısıdır" sözü Tirmizi, el-Câmi\' ve Hâkim, el-Müstedrek\'te geçer. Şia\'da söz, Hz. Ali\'nin ilimdeki üstünlüğünü gösterir ve çeşitli yollarla rivayet edilmiştir.' },
      sunni: { tr: '"Ben ilmin şehriyim, Ali de onun kapısıdır" sözü Tirmizi, el-Câmi\' ve Hâkim, el-Müstedrek\'te geçer. Sıhhati tartışmalıdır; sahih ya da hasen diyen de vardır, zayıf ya da uydurma diyen de vardır.' },
    },
    {
      title: { tr: 'Mevedde ayetinde "yakınlar" kimdir?' },
      shia: { tr: 'Şûrâ 23 yakınlara sevgi ister; Hz. Ali, Hz. Fatıma, Hz. Hasan ve Hz. Hüseyin diye açıklayan tefsirler vardır. Şia\'da bu dört kişi kastedilir ve sevgileri risaletin karşılığıdır.' },
      sunni: { tr: 'Şûrâ 23 yakınlara sevgi ister; Hz. Ali, Hz. Fatıma, Hz. Hasan ve Hz. Hüseyin diye açıklayan tefsirler vardır. Buhari, Sahih\'teki İbn Abbas rivayeti ise yakınları Kureyş akrabalığı olarak anlar.' },
    },
  ],
  questions: [
    { tr: 'Hz. Ali çocuk yaşta Peygamber\'e iman etti ve hayatı boyunca yanında kaldı. Onun terbiyesinde büyüyen bu yakınlık, içinizde nasıl bir sevgi uyandırıyor?' },
    { tr: 'Hicret gecesi Hz. Ali, kılıçlı kalabalığın sardığı evde Peygamber\'in yatağına yattı. Bu fedakârlık, ona olan sevginize ne katıyor?' },
    { tr: 'Peygamber ona "Dünyada da ahirette de kardeşimsin" dedi. Bu kardeşlik, Hz. Ali\'nin onun yanındaki yerini size nasıl anlatıyor?' },
    { tr: 'İlim şehri sözünün sıhhati konuşulsa da Hz. Ali\'nin ilmi övülür. Sahabenin ona danışması, size onun ilmi hakkında ne söylüyor?' },
    { tr: 'Peygamber\'i yıkayan ve defneden kişi Hz. Ali\'dir. Son vedada yanında olmak, Ehl-i Beyt sevgisine ne katıyor?' },
  ],
  summary: { tr: 'Hz. Ali, Peygamber\'in yanında büyüdü; ilk iman edenlerdendir, hicret gecesi canını ortaya koydu, savaşlarda sancak taşıdı, Hz. Fatıma ile evlendi ve Peygamber\'i yıkayıp defnetti. Bu faziletlerin çoğu Sünni kaynaklarında da geçmektedir (Tirmizi, el-Câmi\'; Buhari, Sahih; İbn Mâce, es-Sünen; Hâkim, el-Müstedrek).' },
};

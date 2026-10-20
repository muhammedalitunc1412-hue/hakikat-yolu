import type { HistEvent } from '../types';

// Araştırma notu: sunnah.com bu oturumda 403 verdi; hadis metinleri doğrudan okunamadı. Yalnızca WikiShia (Laylet'ül-Mebît, İlim Şehri hadisi) ve Wikipedia sayfaları okundu (ikincil). Bu yüzden kaynakların büyük bölümü 'check' durumundadır; numaralar görevde verilen/yaygın atıflardır, yayın öncesi birincil kaynaktan kontrol edilmelidir.
export const aliKimdir: HistEvent = {
  id: 'ali-kimdir',
  date: { tr: '600 (Mekke) - 11 H (632)', en: 'c. 600 (Mecca) - 11 AH (632)' },
  title: { tr: 'Hz. Ali kimdir?', en: 'Who is Imam Ali?' },
  hook: { tr: 'Kâbe\'de doğduğu söylenen, Peygamber\'in yatağına yatan, "ilmin kapısı" diye anılan kişi kimdir?', en: 'Who is the man said to be born in the Kaaba, who lay in the Prophet\'s bed and is called the "gate of knowledge"?' },
  scenes: [
    {
      text: { tr: 'Şii kaynaklarına göre Hz. Ali, Mekke\'de Kâbe\'nin içinde doğdu; annesi Fatıma bint Esed doğum sancısıyla Kâbe\'ye sığınmıştı. Bu rivayet Şii kaynaklarında çok güçlü biçimde işlenir, bazı Sünni kaynaklarında da geçer.' },
      art: { bg: 'dune-dusk', props: ['sun'], actors: [{ kind: 'woman', x: 30, label: { tr: 'Fatıma bint Esed' } }, { kind: 'ali', x: 66, scale: 0.6, label: { tr: 'Hz. Ali' } }] },
      by: 'shia',
    },
    {
      text: { tr: 'Mekke\'de kıtlık yıllarında Peygamber, amcası Ebu Talib\'in yükünü hafifletmek için küçük Ali\'yi yanına aldı. Hz. Ali çocukluğunu Peygamber\'in evinde, onun terbiyesi altında geçirdi.' },
      art: { bg: 'interior', actors: [{ kind: 'prophet', x: 40, pose: 'sit', label: { tr: 'Hz. Peygamber' } }, { kind: 'ali', x: 64, scale: 0.6, label: { tr: 'Hz. Ali' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Vahiy geldiğinde Hz. Ali henüz çocuk yaştaydı ve Peygamber\'e iman etti. Şii kaynaklarında İslam\'ı kabul eden ilk kişi odur. Tirmizi\'de (3734-3735) de Hz. Ali\'nin ilk Müslümanlardan olduğuna dair rivayetler yer alır; ilk iman edenlerin sırası kaynaklarda farklı anlatılır.' },
      art: { bg: 'night', props: ['stars'], actors: [{ kind: 'prophet', x: 40, label: { tr: 'Hz. Peygamber' } }, { kind: 'ali', x: 64, scale: 0.7, label: { tr: 'Hz. Ali' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Hicret gecesi müşrikler Peygamber\'in evini kuşattı. Hz. Ali hiç tereddüt etmeden Peygamber\'in yatağına yattı ve onun yeşil örtüsüne büründü; canını ona feda etti. Bu geceye "Leyletü\'l-Mebît" denir. Şii kaynaklarında ve birçok Sünni tefsir kaynağında Bakara 207\'nin ("İnsanlardan öylesi vardır ki Allah\'ın rızasını kazanmak için kendini satar") bu olay üzerine indiği aktarılır; ayetin iniş sebebi konusunda başka rivayetler de vardır.' },
      art: { bg: 'night', props: ['moon', 'stars', 'swords'], actors: [{ kind: 'crowd', x: 22, scale: 5 }, { kind: 'ali', x: 64, pose: 'sit', label: { tr: 'Hz. Ali' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Medine\'de Peygamber ashabı arasında kardeşlik (mü\'ahât) kurdurdu. Rivayete göre Hz. Ali\'ye "Sen dünyada da ahirette de benim kardeşimsin" buyurdu. Bu rivayet Tirmizi\'de (3720) yer alır; Şii kaynaklarında Hz. Ali\'nin Peygamber\'e en yakın kişi oluşunun delili olarak anılır.' },
      art: { bg: 'city', props: ['palms'], actors: [{ kind: 'prophet', x: 40, label: { tr: 'Hz. Peygamber' } }, { kind: 'ali', x: 62, label: { tr: 'Hz. Ali' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Bedir\'de, Uhud\'da, Hendek\'te Hz. Ali sancağı taşıyan ve en önde savaşan kahramanlardandı. Hayber\'de kale uzun süre alınamayınca Peygamber "Sancağı, Allah ve Resulü\'nü seven, Allah ve Resulü\'nün de sevdiği bir adama vereceğim" dedi ve o kişi Hz. Ali oldu; Buhari\'de (2942) bu rivayet geçer. Hz. Ali\'nin Zülfikar kılıcı ve "lâ fetâ illâ Alî, lâ seyfe illâ Zülfikâr" sözü ise çok anılır; ancak bu söz hadis ilminde zayıf/ihtilaflı sayılır, bu yüzden sağlam bir hadis olarak sunulmamalıdır.' },
      art: { bg: 'battle', props: ['flags', 'swords'], actors: [{ kind: 'crowd', x: 22, scale: 6 }, { kind: 'ali', x: 62, pose: 'raise', label: { tr: 'Hz. Ali' } }] },
      by: 'both',
    },
    {
      text: { tr: '"Ben ilmin şehriyim, Ali de onun kapısıdır" hadisi Tirmizi\'de (3723) ve Hâkim\'in el-Müstedrek\'inde geçer. Şii kaynaklarında Hz. Ali\'nin ilimdeki üstünlüğünün delili olarak anılır. Rivayetin sıhhati hadis âlimleri arasında tartışmalıdır: bazıları sahih/hasen sayar, bazıları ise zayıf ve hatta uydurma sayar.' },
      art: { bg: 'interior', props: ['scroll'], actors: [{ kind: 'prophet', x: 38, pose: 'raise', label: { tr: 'Hz. Peygamber' } }, { kind: 'ali', x: 64, label: { tr: 'Hz. Ali' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Şûrâ 23. ayet (Mevedde): "De ki: Ben sizden bunun karşılığında yakınlarıma sevgiden başka bir şey istemiyorum." Şii kaynaklarına göre "yakınlar" Hz. Ali, Hz. Fatıma, Hz. Hasan ve Hz. Hüseyin\'dir; bu yorum bazı Sünni tefsir kaynaklarında da aktarılır.' },
      art: { bg: 'dawn', props: ['sun'], actors: [{ kind: 'ali', x: 24, scale: 0.9, label: { tr: 'Hz. Ali' } }, { kind: 'fatima', x: 42, scale: 0.9, label: { tr: 'Hz. Fatıma' } }, { kind: 'hasan', x: 60, scale: 0.7, label: { tr: 'Hz. Hasan' } }, { kind: 'husayn', x: 76, scale: 0.7, label: { tr: 'Hz. Hüseyin' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Medine\'de Hz. Ali, Peygamber\'in kızı Hz. Fatıma ile evlendi. Mehir olarak zırhının satılmasından elde edilen bedel anılır. Şii kaynaklarına göre bu evlilik gökte kıyılmış bir nikâhtır; Peygamber\'in soyu bu evlilikten Hz. Hasan ve Hz. Hüseyin ile devam etti.' },
      art: { bg: 'city', props: ['palms'], actors: [{ kind: 'ali', x: 36, label: { tr: 'Hz. Ali' } }, { kind: 'fatima', x: 60, label: { tr: 'Hz. Fatıma' } }, { kind: 'prophet', x: 80, scale: 0.9, label: { tr: 'Hz. Peygamber' } }] },
      by: 'shia',
    },
    {
      text: { tr: 'Peygamber vefat ettiğinde Hz. Ali onu yıkadı ve defin işlerinde başta yer aldı; bunu Şii kaynaklarının yanı sıra Sünni kaynaklar da aktarır. Şii kaynaklarına göre Peygamber, yıkanması için Hz. Ali\'yi vasiyet etmişti, gözlerini Hz. Ali bağlamış ve vefat sırasında başı onun göğsündeydi.' },
      art: { bg: 'interior', actors: [{ kind: 'ali', x: 40, pose: 'sit', label: { tr: 'Hz. Ali' } }, { kind: 'prophet', x: 64, pose: 'sit', label: { tr: 'Hz. Peygamber' } }] },
      by: 'both',
    },
  ],
  sunni: [
    { book: 'Hâkim, el-Müstedrek', ref: 'cilt 3 (Hz. Ali\'nin doğumu, Bakara 207 nüzulü; hadis numarası kontrol edilecek)', says: { tr: 'Hz. Ali\'nin Kâbe\'de doğduğu rivayeti ve Bakara 207\'nin Hz. Ali\'nin feda edişi hakkında indiği rivayeti (WikiShia Laylet\'ül-Mebît maddesinin atfı; kitap okunmadı).' }, grade: { tr: 'Kâbe\'de doğum konusunda Sünni âlimler arasında ihtilaf var' }, url: 'https://en.wikishia.net/view/Laylat_al-Mabit', status: 'check' },
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
    { book: 'Şeyh Müfid, el-İrşâd', ref: 'Hz. Ali bölümü (cilt/sayfa kontrol edilecek)', says: { tr: 'Hz. Ali\'nin Kâbe\'de doğumu, Peygamber\'in himayesi ve faziletleri.' }, url: 'https://al-islam.org/kitab-al-irshad-book-shaykh-al-mufid', status: 'check' },
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
      shia: { tr: 'Hz. Ali\'nin Kâbe\'nin içinde doğduğu Şii kaynaklarda yaygın kabul görür ve onun faziletidir.' },
      sunni: { tr: 'Bazı Sünni kaynaklar (Hâkim\'e atfedilir) bunu aktarır; ancak Sünni âlimler arasında kesin kabul görmez, bazıları bunu Hakîm b. Hizâm\'a özgü sayar.' },
    },
    {
      title: { tr: 'İlk müslüman kimdir?' },
      shia: { tr: 'Hz. Ali, Peygamber\'e ilk iman eden kişidir.' },
      sunni: { tr: 'Hz. Hatice (ilk kadın), Ebu Bekir (ilk yetişkin erkek), Hz. Ali (ilk çocuk) şeklinde bir ayrım yapılır; sıra konusunda ihtilaf vardır.' },
    },
    {
      title: { tr: 'Bakara 207 kimin hakkında indi?' },
      shia: { tr: 'Ayet, hicret gecesi Hz. Ali\'nin canını feda etmesi üzerine indi.' },
      sunni: { tr: 'Bazı Sünni tefsir ve hadis kitapları aynı rivayeti aktarır; bazı tefsirler ayeti Suheyb gibi başka kişilerle de ilişkilendirir.' },
    },
    {
      title: { tr: '"Lâ fetâ illâ Alî, lâ seyfe illâ Zülfikâr"' },
      shia: { tr: 'Şii kaynaklarda Hz. Ali\'nin kahramanlığını anlatan bir söz olarak geçer ve yaygın anılır; kaynak ve isnad ayrıca kontrol edilmelidir.' },
      sunni: { tr: 'Hadisçiler genellikle bu sözü zayıf ya da asılsız sayar; Zülfikar\'ın Peygamber\'e ait bir kılıç olduğu rivayeti ise ayrı bir meseledir.' },
    },
    {
      title: { tr: 'İlim şehri hadisinin sıhhati' },
      shia: { tr: 'Hadis, Hz. Ali\'nin ilimdeki üstünlüğünü gösterir ve çeşitli yollarla rivayet edilmiştir.' },
      sunni: { tr: 'Tirmizi ve Hâkim rivayet etmiştir; sıhhati hadisçiler arasında tartışmalıdır (sahih/hasen diyenler de, zayıf/uydurma diyenler de vardır).' },
    },
    {
      title: { tr: 'Mevedde ayetinde "yakınlar" kimdir?' },
      shia: { tr: 'Hz. Ali, Hz. Fatıma, Hz. Hasan ve Hz. Hüseyin; sevgileri risaletin karşılığıdır.' },
      sunni: { tr: 'Bazı Sünni tefsirler aynı yorumu aktarır; Buhari\'deki İbn Abbas rivayeti ise Kureyş akrabalığını anlar.' },
    },
  ],
  questions: [
    { tr: 'Hz. Ali henüz çocuk yaşta Peygamber\'e iman etti ve hayatı boyunca ondan ayrılmadı. Peygamber\'in terbiyesinde yetişen birinin, ona en yakın kişi olması sizce şaşırtıcı mıdır?' },
    { tr: 'Hicret gecesi kılıçlı müşriklerin kuşattığı evde Peygamber\'in yatağına yatmak, canını ortaya koymak demektir. Bu fedakârlık, kaynakların işaret ettiği diğer faziletlerle birlikte düşünüldüğünde Hz. Ali hakkında ne söyler sizce?' },
    { tr: 'Peygamber, ashabın arasında kardeşlik kurdururken Hz. Ali\'ye "dünyada ve ahirette kardeşimsin" demiş (Tirmizi 3720). Peygamber\'in kendisine bu kadar yakın gördüğü birini, onun ardından kimlerin yönetmesi gerektiği sorusunda nasıl değerlendirirsiniz?' },
    { tr: 'İlim şehri hadisinin sıhhati tartışılsa bile, Hz. Ali\'nin ilmi her iki mezhepte de ayrı ayrı övülüyor. Sahabe içinde en çok ona danışılması neyi gösterir sizce?' },
    { tr: 'Peygamber\'i yıkayan ve defneden kişi Hz. Ali\'dir; kaynaklar bu konuda birleşiyor. Peygamber\'in en son vedasında yanında olan kişinin kim olduğu, ondan sonraki olaylar bakımından sizce neden önemlidir?' },
  ],
  summary: { tr: 'Hz. Ali; Peygamber\'in himayesinde büyüyen, ilk iman edenlerden olan, hicret gecesi canını ortaya koyan, savaşlarda sancak taşıyan, Hz. Fatıma ile evlenen ve Peygamber\'i yıkayıp defneden kişidir; bu faziletlerin birçoğu Şii kaynaklarında ve birçok Sünni kaynağında ortak anlatılır.' },
};

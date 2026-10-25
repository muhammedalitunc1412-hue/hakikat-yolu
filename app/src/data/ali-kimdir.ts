import type { HistEvent } from '../types';

// Araştırma notu: sunnah.com bu oturumda 403 verdi; hadis metinleri doğrudan okunamadı. Yalnızca WikiShia (Laylet'ül-Mebît, İlim Şehri hadisi) ve Wikipedia sayfaları okundu (ikincil). Bu yüzden kaynakların büyük bölümü 'check' durumundadır; numaralar görevde verilen/yaygın atıflardır, yayın öncesi birincil kaynaktan kontrol edilmelidir.
export const aliKimdir: HistEvent = {
  id: 'ali-kimdir',
  date: { tr: 'Doğumu yaklaşık 600; bu bölüm Peygamber dönemini anlatır. Şehadeti 40 H (661)', en: 'Born c. 600; this chapter covers the Prophet\'s era. Martyred 40 AH (661)' },
  title: { tr: 'Hz. Ali kimdir?', en: 'Who is Imam Ali?' },
  hook: { tr: 'Kâbe\'de doğduğu rivayet edilen, Hz. Peygamber\'in (s.a.v.) yatağına yatan ve ilmin kapısı diye anılan kişi kimdir?', en: 'Who is the man said to be born in the Kaaba, who lay in the Prophet\'s bed and is called the "gate of knowledge"?' },
  scenes: [
    {
      text: { tr: 'Rivayete göre Hz. Ali (a.s.) Mekke\'de, Kâbe\'nin içinde doğdu. Annesi Fâtıma bint Esed doğum sancısıyla Kâbe\'ye sığınmıştı. Ca\'ferî kitaplar bunu onun nurunun ilk alâmeti diye güçlü biçimde anlatır. Bazı Sünni eserler de aynı haberi aktarır. Başka bir rivayet Kâbe\'de doğumu Hakîm b. Hizâm\'a özgü sayar. Doğum yeri tartışılır; çocukluğunun Peygamber evinde geçtiği ise ortaktır.' },
      art: { bg: 'dune-dusk', props: ['sun'], actors: [{ kind: 'woman', x: 30, label: { tr: 'Fatıma bint Esed' } }, { kind: 'ali', x: 66, scale: 0.6, label: { tr: 'Hz. Ali' } }] },
      by: 'shia',
    },
    {
      text: { tr: 'Mekke\'nin kıtlık yıllarında Hz. Peygamber (s.a.v.), amcası Ebû Tâlib\'in yükünü hafifletmek için küçük Ali\'yi yanına aldı. Hz. Ali çocukluğunu onun evinde, onun terbiyesinde geçirdi. Vahiy gelmeden önce de gölgesi, Peygamber\'in gölgesiydi.' },
      art: { bg: 'interior', actors: [{ kind: 'prophet', x: 40, pose: 'sit', label: { tr: 'Hz. Peygamber' } }, { kind: 'ali', x: 64, scale: 0.6, label: { tr: 'Hz. Ali' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Vahiy geldiğinde Hz. Ali henüz çocuktu ve hiç tereddüt etmeden iman etti. Ca\'ferî yolda İslam\'ı kabul eden ilk kişi odur. Tirmizi 3735\'te Zeyd b. Erkam «İlk Müslüman Ali\'dir» der; Tirmizi haberi hasen sahih sayar, İbrâhim en-Nehaî ise ilk erkeğin Ebû Bekir olduğunu söyler. 3734, «İlk namaz kılan Ali\'dir» lafzını taşır ve Tirmizi onu garib bulur. Sıra tartışılır. Çocuk yaşta iman edip ömrünce ayrılmadığı ise iki yolun da bildiği bir fazilettir.' },
      art: { bg: 'night', props: ['stars'], actors: [{ kind: 'prophet', x: 40, label: { tr: 'Hz. Peygamber' } }, { kind: 'ali', x: 64, scale: 0.7, label: { tr: 'Hz. Ali' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Hicret gecesi müşrikler Hz. Peygamber\'in evini kuşattı. Hz. Ali tereddüt etmeden onun yatağına yattı, yeşil örtüsüne büründü ve canını ortaya koydu. Bu geceye «Leyletü\'l-Mebît» denir. Ca\'ferî tefsirler ve birçok Sünni tefsir, Bakara 207\'yi («Allah\'ın rızasını kazanmak için canını verenler vardır») bu geceye bağlar. Başka iniş sebepleri de rivayet edilir. Fedakârlığın kendisi, sebep tartışmasından önce durur.' },
      art: { bg: 'night', props: ['moon', 'stars', 'swords'], actors: [{ kind: 'crowd', x: 22, scale: 5 }, { kind: 'ali', x: 64, pose: 'sit', label: { tr: 'Hz. Ali' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Medine\'de Hz. Peygamber ashabı kardeş edindi. Hz. Ali, kendisine kardeş seçilmediğini sanıp gözleri dolarak geldi. Rivayete göre Peygamber «Sen dünyada da ahirette de benim kardeşimsin» dedi. Bu haber Tirmizi 3720\'dedir. Tirmizi onu hasen garib sayar; senedindeki bazı râviler yüzünden sonraki muhaddisler zayıf da bulmuştur. Kardeşlik makamının daha sağlam dayanağı, Buhari ve Müslim\'deki Menzile hadisidir: «Harun Musa\'ya nasılsa sen de bana öylesin.»' },
      art: { bg: 'city', props: ['palms'], actors: [{ kind: 'prophet', x: 40, label: { tr: 'Hz. Peygamber' } }, { kind: 'ali', x: 62, label: { tr: 'Hz. Ali' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Bedir\'de, Uhud\'da, Hendek\'te Hz. Ali sancağı taşıyan ve en önde duran kahramanlardandı. Hayber\'de kale günlerce alınamayınca Hz. Peygamber «Sancağı, Allah\'ı ve Resulü\'nü seven, Allah\'ın ve Resulü\'nün de sevdiği birine vereceğim» dedi. O kişi Hz. Ali oldu. Söz Buhari 2942\'de sahihtir. «Lâ fetâ illâ Alî, lâ seyfe illâ Zülfikâr» cümlesi ise çok sevilir. Hadisçilerin çoğunluğu onu zayıf veya tartışmalı sayar. Bu yüzden burada sahih bir hadis gibi sunulmaz. Kahramanlığı, sancağın sahih haberinde zaten açıktır.' },
      art: { bg: 'battle', props: ['flags', 'swords'], actors: [{ kind: 'crowd', x: 22, scale: 6 }, { kind: 'ali', x: 62, pose: 'raise', label: { tr: 'Hz. Ali' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Hz. Ali\'nin ilmi, iki ayrı lafızla anılır. Tirmizi 3723\'ün metni şudur: «Ben hikmetin eviyim, Ali onun kapısıdır.» Tirmizi bu haberi garib ve münker sayar. Halk arasında daha çok duyulan «Ben ilmin şehriyim, Ali onun kapısıdır» cümlesi ise başka rivayetlerdedir; Hâkim\'in el-Müstedrek\'i bunlardandır. Ca\'ferî yol bunu ilimdeki üstünlüğün delili sayar ve mana bakımından mütevatir görür. Sünni hadisçilerin bir kısmı sahih veya hasen der, bir kısmı zayıf hatta uydurma bulur. İlimdeki yeri, bu tek cümleden önce, sahabenin ona danışmasında da görünür.' },
      art: { bg: 'interior', props: ['scroll'], actors: [{ kind: 'prophet', x: 38, pose: 'raise', label: { tr: 'Hz. Peygamber' } }, { kind: 'ali', x: 64, label: { tr: 'Hz. Ali' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Şûrâ 23, risaletin karşılığını sevgiye bağlar: «De ki: Ben sizden buna karşı yakınlarıma sevgiden başka bir ücret istemem.» Ca\'ferî tefsirde «yakınlar» Hz. Ali, Hz. Fatıma, Hz. Hasan ve Hz. Hüseyin\'dir. Aynı yorum bazı Sünni tefsirlerde de aktarılır. Buhari\'deki bir İbn Abbas rivayeti ise Kureyş akrabalığını anlar. Ayet, muhabbeti bir süs değil, Peygamber\'in istediği ücret diye okuyanlar için Ehl-i Beyt sevgisinin kapısıdır.' },
      art: { bg: 'dawn', props: ['sun'], actors: [{ kind: 'ali', x: 24, scale: 0.9, label: { tr: 'Hz. Ali' } }, { kind: 'fatima', x: 42, scale: 0.9, label: { tr: 'Hz. Fatıma' } }, { kind: 'hasan', x: 60, scale: 0.7, label: { tr: 'Hz. Hasan' } }, { kind: 'husayn', x: 76, scale: 0.7, label: { tr: 'Hz. Hüseyin' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Medine\'de Hz. Ali, Hz. Peygamber\'in kızı Hz. Fatıma ile evlendi. Mehir olarak zırhının bedeli anılır. Ca\'ferî rivayetlerde bu nikâh gökte kıyılmıştır. Peygamber\'in soyu bu evlilikten Hz. Hasan ve Hz. Hüseyin ile yürüdü. Ehl-i Beyt sevgisi, bu kapıdan girer.' },
      art: { bg: 'city', props: ['palms'], actors: [{ kind: 'ali', x: 36, label: { tr: 'Hz. Ali' } }, { kind: 'fatima', x: 60, label: { tr: 'Hz. Fatıma' } }, { kind: 'prophet', x: 80, scale: 0.9, label: { tr: 'Hz. Peygamber' } }] },
      by: 'shia',
    },
    {
      text: { tr: 'Hz. Peygamber vefat ettiğinde onu yıkayan ve defin işinin başında duran kişi Hz. Ali\'ydi. Bunu Sünni siyer ve hadis kitapları da aktarır. Ca\'ferî rivayetler bir adım daha gider: Peygamber yıkanmasını Ali\'ye vasiyet etmiş, gözlerini Ali bağlamış, son nefeste başı onun göğsündeymiş. Vedanın kimin koynunda tamamlandığı, sonraki günlerin de anahtarıdır.' },
      art: { bg: 'interior', actors: [{ kind: 'ali', x: 40, pose: 'sit', label: { tr: 'Hz. Ali' } }, { kind: 'prophet', x: 64, pose: 'sit', label: { tr: 'Hz. Peygamber' } }] },
      by: 'both',
    },
  ],
  sunni: [
    { book: 'Hâkim, el-Müstedrek', ref: 'cilt 3 (Hz. Ali\'nin doğumu, Bakara 207 nüzulü; hadis numarası kontrol edilecek)', says: { tr: 'Hz. Ali\'nin Kâbe\'de doğduğu rivayeti ve Bakara 207\'nin Hz. Ali\'nin feda edişi hakkında indiği rivayeti (WikiShia Laylet\'ül-Mebît maddesinin atfı; kitap okunmadı).' }, grade: { tr: 'Kâbe\'de doğum konusunda Sünni âlimler arasında ihtilaf var' }, url: 'https://en.wikishia.net/view/Laylat_al-Mabit', status: 'check' },
    { book: 'Tirmizi, el-Câmi\'', ref: 'No. 3734 ve 3735 (Menâkıb)', says: { tr: '3734: İbn Abbas\'tan "ilk namaz kılan Ali\'dir"; Tirmizi garib der. 3735: Zeyd b. Erkam "ilk Müslüman Ali\'dir" der, İbrâhim en-Nehaî bunu reddeder; Tirmizi hasen sahih der. İkisi de sahabe sözüdür, Peygamber hadisi değildir.' }, grade: { tr: '3734 garib; 3735 Tirmizi\'ye göre hasen sahih, fakat ihtilaflı' }, url: 'https://sunnah.com/tirmidhi:3735', status: 'verified' },
    { book: 'Tirmizi, el-Câmi\'', ref: 'No. 3720 (Menâkıb; müâhât)', says: { tr: 'İbn Ömer\'den: Peygamber Hz. Ali\'ye "dünyada ve ahirette kardeşimsin" der.' }, grade: { tr: 'Tirmizi: hasen garib. Elbânî senedi zayıf sayar (Hakîm b. Cübeyr, Cümey\' b. Umeyr).' }, url: 'https://sunnah.com/tirmidhi:3720', status: 'verified' },
    { book: 'Buhari, Sahih', ref: 'No. 2942 (Cihâd; Hayber sancağı)', says: { tr: 'Peygamber Hayber sancağını Allah\'ı ve Resulü\'nü seven, onlarca sevilen kişiye vereceğini söyler; kişi Hz. Ali olur.' }, grade: { tr: 'Sahih' }, url: 'https://sunnah.com/bukhari:2942', status: 'verified' },
    { book: 'Tirmizi, el-Câmi\'', ref: 'No. 3723 (Menâkıb)', says: { tr: 'Lafız "Ben hikmetin eviyim, Ali onun kapısıdır" şeklindedir. "İlmin şehri" cümlesi bu numarada yoktur.' }, grade: { tr: 'Tirmizi: garib münker' }, url: 'https://sunnah.com/tirmidhi:3723', status: 'verified' },
    { book: 'Hâkim, el-Müstedrek', ref: '"İlmin şehri" lafzı (cilt ve sayfa baskıya göre değişir; eski 3/126 kaydı bu çalışmada birincil nüshadan doğrulanamadı)', says: { tr: '"Ben ilmin şehriyim, Ali onun kapısıdır." Hâkim sahih hükmü verir; birçok muhaddis zayıf veya uydurma sayar.' }, grade: { tr: 'Sıhhati tartışmalı' }, url: 'https://en.wikishia.net/view/Hadith_of_the_City_of_Knowledge', status: 'check' },
    { book: 'Buhari, Sahih (Tefsir)', ref: 'Şûrâ 23 ile ilgili İbn Abbas rivayeti (numara kontrol edilecek)', says: { tr: '"Yakınlar" ifadesinin Kureyş\'le akrabalığa işaret ettiği yorumu.' }, status: 'check' },
    { book: 'İbn Mâce, es-Sünen', ref: 'Cenâiz bölümü, Peygamber\'in yıkanması (numara kontrol edilecek)', says: { tr: 'Hz. Ali\'nin Peygamber\'i yıkamada yer aldığı rivayeti.' }, status: 'check' },
    { book: 'İbn Hişâm, es-Sîre; Halebî, es-Sîre', ref: 'Hicret bölümü (WikiShia atfı; kitaplar okunmadı)', says: { tr: 'Hz. Ali\'nin hicret gecesi Peygamber\'in yatağında yatması.' }, status: 'check' },
  ],
  shia: [
    { book: 'Şeyh Müfid, el-İrşâd', ref: 'Hz. Ali bölümü (cilt/sayfa kontrol edilecek)', says: { tr: 'Hz. Ali\'nin Kâbe\'de doğumu, Peygamber\'in himayesi ve faziletleri.' }, url: 'https://al-islam.org/kitab-al-irshad-book-shaykh-al-mufid', status: 'check' },
    { book: 'Tûsî, el-Emâlî', ref: 'Leyletü\'l-Mebît rivayetleri (WikiShia sayfa aktarımı doğrulanamadığı için sayfa kaldırıldı)', says: { tr: 'Hz. Ali\'nin hicret gecesi Peygamber\'in yatağına yatması.' }, url: 'https://en.wikishia.net/view/Laylat_al-Mabit', status: 'check' },
    { book: 'Meclisî, Bihârü\'l-Envâr', ref: 'Hicret cildi (eski "cilt 19, sayfa 60 ve 92" kaydı birincil nüshadan doğrulanamadığı için kaldırıldı)', says: { tr: 'Hicret gecesi olayı ve Bakara 207 rivayeti.' }, status: 'check' },
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
      title: { tr: 'Hikmet evi ve ilim şehri' },
      shia: { tr: 'İki lafız da Hz. Ali\'nin ilimdeki yerini gösterir. Ca\'ferî yol, manayı çok yoldan geldiği için kesin sayar.' },
      sunni: { tr: 'Tirmizi 3723 "hikmetin evi" der ve garib münker bulur. "İlmin şehri" başka tarîklerdedir. Sahih veya hasen diyen de vardır, zayıf ya da uydurma diyen de.' },
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
  summary: { tr: 'Hz. Ali (a.s.), Hz. Peygamber\'in (s.a.v.) evinde büyüdü, çocuk yaşta iman etti, hicret gecesi canını ortaya koydu, Hayber sancağını taşıdı, Hz. Fatıma ile evlendi ve Peygamber\'i yıkayıp defnetti. Bu faziletlerin birçoğu Ca\'ferî kitaplarla Sünni sahihlerde ortaktır.' },
};

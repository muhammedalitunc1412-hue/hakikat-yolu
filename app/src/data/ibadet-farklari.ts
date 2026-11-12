import type { HistEvent } from '../types';

// Doğrulama durumu: Buhari 2010, 6585 ve 335 ihadis.com'dan bu oturumda okundu ('verified').
// Diğer kaynaklar bilinen atıflardır; sayfa/numara birincil kaynaktan kontrol edilmeli ('check').
export const ibadetFarklari: HistEvent = {
  id: 'ibadet-farklari',
  date: { tr: 'Çeşitli', en: 'Various' },
  title: { tr: 'İbadet ve inanç farkları', en: 'Differences in worship and belief' },
  hook: { tr: 'Aynı Kur\'an, aynı Peygamber: ezan, namaz ve secdedeki Câferî uygulama hangi okuyuşa dayanır?', en: 'Same Quran, same Prophet; where do the differences in the call to prayer and worship come from?' },
  scenes: [
    {
      by: 'both',
      text: { tr: 'Ezan, Peygamber döneminde **Bilâl**\'in yüksek bir yerden okuduğu namaz çağrısıdır. Bazı rivayetlere göre o dönemde ezanda zaman zaman "Hayye alâ hayri\'l-amel", yani "Haydi amellerin en hayırlısına" ifadesi de okunurdu. Bu rivayetlerin sıhhati tartışmalıdır ve uygulamanın sonradan terk edildiği aktarılır. Bazı rivayetler, bu ifadeyi ezandan Halife Ömer\'in kaldırdığını söyler. Câferî mektep ise bu ifadeyi ezanın asli bir parçası olarak korudu. Bugün Şii ezanında, namaza ve felaha çağrıdan sonra bu cümle de okunur ve müminleri en hayırlı amele davet eder.' },
      art: { bg: 'dawn', props: ['moon'], actors: [{ kind: 'man', x: 50, pose: 'raise', label: { tr: 'Bilal' } }] },
    },
    {
      by: 'partial',
      cites: [{ side: 'sunni', i: 5 }],
      text: { tr: 'Câferî fıkıhta "Hayye alâ hayri\'l-amel" ezanın bir cüzü sayılır. Rivayete göre Halife Ömer bu ifadeyi, insanlar namazı cihattan üstün görüp savaş ruhu zayıflar diye kaldırmıştı. Şii ezanında okunan "Eşhedü enne Aliyyen veliyyullah", yani "Şahitlik ederim ki Ali Allah\'ın velisidir" cümlesi ise bugünkü Şii ulemaya göre ezanın şartı değildir. Müstehap bir şiar olarak okunur. Öte yandan "Es-salâtü hayrun mine\'n-nevm", yani "Namaz uykudan hayırlıdır" cümlesi Câferî ezanında yer almaz. Sünni kaynaklarda ise bu cümle sabah ezanında sabit bir sünnet olarak anılır.' },
      art: { bg: 'city', props: ['minbar'], actors: [{ kind: 'man', x: 40, pose: 'raise', label: { tr: 'Müezzin' } }, { kind: 'crowd', x: 72, scale: 0.7 }] },
    },
    {
      by: 'both',
      text: { tr: 'Namazda ellerin nerede duracağı da mezheplere göre farklıdır. Sünni mezheplerin çoğunda namaz kılan kişi ayaktayken ellerini göğsünün ya da göbeğinin üstünde bağlar ve bu sünnet sayılır. Mâlikî mezhebinde ise ellerin yanlara sarkıtılması bir görüş olarak nakledilir. Câferî fıkıhta eller yanlarda bırakılır ve ellerin bağlanması namazı bozan bir şey olarak görülür. Şiiler bu sarkıtma uygulamasını Peygamber\'in ve Ehl-i Beyt\'in namazı olarak sürdürür. Bu yüzden bir camide yan yana namaz kılan bir Şii ile bir Sünni\'yi elleri birbirinden ayırır.' },
      art: { bg: 'interior', actors: [{ kind: 'man', x: 40, label: { tr: 'Namaz kılan' } }, { kind: 'man', x: 66, label: { tr: 'Namaz kılan' } }] },
    },
    {
      by: 'both',
      text: { tr: 'Câbir b. Abdillah\'tan gelen bir rivayette Peygamber şöyle der: "Yeryüzü bana ve ümmetime mescit ve teyemmüm vasıtası kılındı." Câferî fıkıh bu hadise dayanarak secdenin toprağa ya da yerden biten, yenmeyen ve giyilmeyen bir şeye yapılmasını şart koşar. Halı ya da kumaş gibi şeyler bu şartı karşılamaz. Bu yüzden birçok Şii yanında "mühür" denen küçük bir secde taşı taşır ve namazda alnını onun üstüne koyar. Bu taş için özellikle Kerbelâ toprağı tercih edilir. Sünni mezheplerde ise secde yeri daha geniştir. Halı, hasır ya da toprak üzerine secde edilebilir.' },
      art: { bg: 'interior', actors: [{ kind: 'man', x: 50, pose: 'sit', label: { tr: 'Secdede' } }] },
    },
    {
      by: 'shia',
      text: { tr: 'Kerbelâ toprağına duyulan sevgi, orasının **Hz. Hüseyin**\'in şehit olduğu yer olmasından gelir. Bazı rivayetler bu toprağa şifa ve sevap bağlar, ama bu rivayetlerin senet değeri Şii âlimler arasında da tartışılır. Şii fıkhında toprağa secde etmek sünnettir, Kerbelâ toprağından yapılmış mührü kullanmak ise müstehap sayılır. Secde taşı kullanmak Sünni mezheplerde de yasak değildir. Câferî mektep için mühür, Peygamber\'in toprağa yaptığı secdenin bir devamıdır. Kerbelâ toprağını seçmek ise o toprağa düşen kanın hatırasıdır.' },
      art: { bg: 'dune-dusk', props: ['sun'], actors: [{ kind: 'husayn', x: 50, label: { tr: 'Hz. Hüseyin' } }] },
    },
    {
      by: 'both',
      text: { tr: 'İbn Abbas\'ın anlattığına göre Peygamber, Medine\'de korku, yağmur ya da yolculuk gibi bir sebep olmadan öğle ile ikindiyi, akşam ile yatsıyı birleştirerek kıldı. Bunun sebebi sorulduğunda İbn Abbas, Peygamber\'in ümmetini zora sokmak istemediğini söyledi. Câferî fıkıh bu hadise dayanarak namazların mazeretsiz birleştirilmesine, yani cem\'e izin verir. Ona göre öğle ve ikindinin vakti öğleden akşama, akşam ve yatsının vakti de güneş batımından gece yarısına kadar ortaktır. Yine de namazları ayrı vakitlerde kılmak daha faziletlidir. Sünni mezheplerde aynı hadis çoğunlukla özel bir mazeretle açıklanır. Hanefiler ise yolculuk ve arefe gibi dar durumlar dışında cem\'i kabul etmez.' },
      art: { bg: 'dune-day', props: ['sun'], actors: [{ kind: 'prophet', x: 50, label: { tr: 'Hz. Peygamber' } }] },
    },
    {
      by: 'both',
      text: { tr: 'Bir Ramazan gecesi Halife **Ömer** mescide girdi ve insanların gece namazını dağınık gruplar halinde kıldığını gördü. Onları Übey b. Kâ\'b\'ın arkasında tek bir cemaat olarak topladı ve "Ne güzel bid\'at bu" dedi. Sünni mezheplerde teravih sünnettir ve bu toplama sahabenin kabulüyle meşru sayılır. Câferî fıkıhta ise Ramazan gecelerinin nafile namazı bireysel olarak kılınır. Cemaatle kılınan teravih Peygamber\'in sünneti sayılmaz, Halife Ömer\'in uygulaması olarak görülür. Ömer\'in kendi ağzından çıkan "bid\'at" kelimesi de bu okuyuşta özellikle hatırlanır.' },
      art: { bg: 'night', props: ['moon', 'stars'], actors: [{ kind: 'man', x: 34, label: { tr: 'Ömer' } }, { kind: 'crowd', x: 68, scale: 0.7 }] },
    },
    {
      by: 'both',
      text: { tr: 'Enfâl Suresi\'nin 41. ayeti, ganimet olarak elde edilen şeyin beşte birinin Allah\'a, Peygamber\'e, yakınlarına, yetimlere, yoksullara ve yolculara ait olduğunu söyler. Câferî fıkıh ayetteki "ganimet" kelimesini geniş anlar ve kişinin yıllık kazancından artan kısmın beşte birini, yani humusu verir. Humus iki eşit parçaya ayrılır. Birincisi imam hissesidir. İkincisi seyyidlerin, yani Hâşimoğullarından yetim, yoksul ve yolcuların hissesidir. Gaybet döneminde imam hissesi müçtehidin gözetiminde harcanır. Sünni mezheplerde ise ayet yalnızca savaş ganimeti için geçerli sayılır ve kazançtan humus alınmaz. Câferî okuyuşta Ehl-i Beyt, ayette anılan yakınların içindedir.' },
      art: { bg: 'city', actors: [{ kind: 'man', x: 40, label: { tr: 'Tüccar' } }, { kind: 'man', x: 66, label: { tr: 'Müçtehid' } }] },
    },
    {
      by: 'both',
      text: { tr: 'Âl-i İmrân Suresi\'nin 28. ayeti, müminlerin kâfirleri dost edinmemesini söyler, ama "onlardan sakınmanız hariç" diye bir istisna koyar. Nahl Suresi\'nin 106. ayeti de "kalbi imanla dolu olduğu halde zorlanan" kişiyi ayrı tutar. **Ammâr b. Yâsir**\'in işkence altında diliyle inkâr sözü söylediği ve Peygamber\'in ona "Tekrar ederlerse sen de yine söyle" dediği rivayet bilinir. Câferî fıkıhta takiyye, can, mal ve namus tehlikesinde ve mezhebin korunması gerektiğinde caizdir, bazen de gereklidir. Tarih boyunca Şiiler baskı altında yaşadığı için bu hüküm fıkıhta önemli bir yer buldu. Sünni kaynaklar da aynı ayetleri bu ruhsatın dayanağı olarak gösterir.' },
      art: { bg: 'mountain', actors: [{ kind: 'man', x: 50, label: { tr: 'Ammar b. Yasir' } }] },
    },
    {
      by: 'both',
      text: { tr: 'Bazı günler ve hadisler de iki mektepte farklı anlam taşır. Peygamber\'in "Ben kimin mevlâsı isem Ali de onun mevlâsıdır" dediği Gadir hadisi, Sünni kitaplarda da yer alır. Ama "mevlâ" kelimesinin yönetici mi yoksa dost mu anlamına geldiği tartışılır. Âşûrâ günü Sünni kaynaklarda bir oruç günüdür ve Hz. Musa\'nın Firavun\'dan kurtuluşuyla anılır. Bu günde **Hz. Hüseyin**\'in şehadeti de hatırlanır. Câferî gelenekte ise Muharrem\'in ilk on günü ve Âşûrâ, Kerbelâ için tutulan matemin günleridir. Zilhicce\'nin 18\'i de Gadir bayramı olarak kutlanır, çünkü o gün Peygamber Hz. Ali\'nin elini kaldırmıştı.' },
      art: { bg: 'dune-dusk', props: ['flags'], actors: [{ kind: 'husayn', x: 34, label: { tr: 'Hz. Hüseyin' } }, { kind: 'ali', x: 66, label: { tr: 'Hz. Ali' } }] },
    },
    {
      by: 'both',
      text: { tr: 'Ahzâb Suresi\'nin 33. ayeti şöyle der: "Ey Ehl-i Beyt, Allah sizden kiri gidermek ve sizi tertemiz yapmak ister." Müslim\'deki Kisâ hadisine göre Peygamber, **Hz. Ali**, **Hz. Fatıma**, **Hz. Hasan** ve **Hz. Hüseyin**\'i abasının altına aldı ve bu ayeti okudu. Buhari 6585\'te ise Peygamber, kıyamet günü havuzun başında bazı arkadaşlarının ondan uzaklaştırılacağını haber verir. Câferî okuyuş, Tathir ayetini Ehl-i Beyt\'in masumiyetine delil sayar. Sahabeyi ise her birinin davranışı ve ilmiyle değerlendirir. Sünni kaynaklarda da Ehl-i Beyt sevilir, ama masumiyet peygamberlere özgü sayılır. Havuz hadisi de dinden dönenlere ya da münafıklara bağlanır. Câferî okuyuşta ise ayetin muhatabı, abanın altına alınan o beş kişidir.' },
      art: { bg: 'interior', props: ['scroll'], actors: [{ kind: 'prophet', x: 36, label: { tr: 'Hz. Peygamber' } }, { kind: 'ali', x: 60, label: { tr: 'Hz. Ali' } }] },
    },
  ],
  sunni: [
    { book: 'Buhari, Sahih', ref: 'No. 2010 (Salâtü\'t-Terâvih)', says: { tr: 'Halife Ömer Ramazan gecesi insanları Ubey b. Ka\'b arkasında toplar ve "Ne güzel bid\'at bu" der; gecenin son kısmında kılınan namazın daha faziletli olduğunu da söyler.' }, grade: { tr: 'Sahih' }, url: 'https://ihadis.com/en/bukhari/hadith/2010', status: 'verified' },
    { book: 'Buhari, Sahih', ref: 'No. 6585 (Rikak, Havz bölümü)', says: { tr: 'Peygamber, arkadaşlarından bazılarının havz başında uzaklaştırılacağını söyler; "Onların senden sonra neler ihdas ettiklerini bilmezsin" cevabı verilir.' }, grade: { tr: 'Sahih' }, url: 'https://ihadis.com/en/bukhari/hadith/6585', status: 'verified' },
    { book: 'Buhari, Sahih', ref: 'No. 335 (Teyemmüm)', says: { tr: 'Cabir\'den: "Yeryüzü bana ve ümmetime mescit ve teyemmüm vasıtası kılındı." Sünni kaynaklarda toprağın secde yeri olduğuna delil gösterilir.' }, grade: { tr: 'Sahih' }, url: 'https://ihadis.com/en/bukhari/hadith/335', status: 'verified' },
    { book: 'Müslim, Sahih', ref: 'No. 705 (Cem hadisi, İbn Abbas) — numara DOĞRULANMADI; site erişilemedi', says: { tr: 'İbn Abbas, Peygamber\'in korku ve yağmur olmaksızın Medine\'de öğle-ikindi ve akşam-yatsıyı birleştirdiğini, gerekçenin ümmetini zora sokmamak olduğunu söyler.' }, status: 'check' },
    { book: 'Müslim, Sahih', ref: 'Fedâilü\'s-Sahâbe, Kisâ (Âişe) hadisi; numara DOĞRULANMADI', says: { tr: 'Peygamber, Hz. Ali, Fatıma, Hz. Hasan ve Hz. Hüseyin\'i abasının altına alır ve Ahzâb 33:33 ayetini okur.' }, status: 'check' },
    { book: 'Beyhakî, es-Sünenü\'l-Kübrâ; Ebu Davud, Sünen (Ezan bölümü)', ref: 'DOĞRULANMADI (ezan ifadeleri, İbn Halife Ömer ve Ebu Mahzure rivayetleri)', says: { tr: 'Ezan sözlerinin rivayet farkları; İbn Halife Ömer\'in "hayye alâ hayri\'l-amel" dediğine dair rivayet ikincil kaynaklardan bilinir, sıhhati tartışmalıdır.' }, status: 'check' },
    { book: 'Mâlik, Muvatta\'; el-Müdevvene', ref: 'DOĞRULANMADI', says: { tr: 'Maliki mezhebinde namazda elleri sarkıtma (sadl) görüşünün aktarılması; Ramazan kıyamı ile ilgili Halife Ömer rivayeti.' }, status: 'check' },
    { book: 'Tirmizî, Sünen', ref: 'Menâkıb, Hz. Ali bölümü, "men kuntu mevlâ" hadisi; numara DOĞRULANMADI', says: { tr: 'Gadir hadisi Sünni hadis kitaplarında da yer alır.' }, status: 'check' },
  ],
  shia: [
    { book: 'Kuleynî, el-Kâfî', ref: 'Ezan, humus, takiyye ve Gadir bölümleri; cilt/numara DOĞRULANMADI', says: { tr: 'İmamlardan ezan, humus ve takiyyeye dair rivayetler ve Gadir\'in anlamı.' }, status: 'check' },
    { book: 'Şeyh Tûsî, et-Tehzîb; Şeyh Sadûk, Men Lâ Yahzuruhu\'l-Fakîh', ref: 'Salât ve ezan bölümleri; numara DOĞRULANMADI', says: { tr: '"Hayye alâ hayri\'l-amel"in ezanda yeri, ellerin sarkıtılması, namazların cemi ve secde yeri hakkında Şii fıkhının dayandığı rivayetler.' }, status: 'check' },
    { book: 'Hürr el-Âmilî, Vesâilü\'ş-Şîa', ref: 'Ebvâbü\'s-Sücûd ve Ebvâbü\'l-Humus bölümleri; numara DOĞRULANMADI', says: { tr: 'Secdenin yerden biten şeye yapılması, Kerbela toprağı üzerine secde ve humusun taksimi hakkında rivayetler.' }, status: 'check' },
    { book: 'WikiShia, Fiqh makaleleri (Adhan, Khums, Taqiyya)', ref: 'İkincil özet; okunmadı', says: { tr: 'Şii görüşün özeti ve ulema ayrıntıları.' }, url: 'https://en.wikishia.net', status: 'check' },
  ],
  disputes: [
    {
      title: { tr: 'Ezan ifadeleri' },
      shia: { tr: '"Hayye alâ hayri\'l-amel" ifadesi bazı erken rivayetlerde anılır. Câferî fıkıhta o, ezanın parçasıdır; Hz. Ali\'ye şahitlik şart değil, müstehap bir şiardır. "Es-salâtü hayrun mine\'n-nevm" ise Câferî ezanında okunmaz.' },
      sunni: { tr: '"Hayye alâ hayri\'l-amel" ifadesi bazı erken rivayetlerde anılır. Sünni ezanda bu söz okunmaz; "es-salâtü hayrun mine\'n-nevm" sabah ezanının sünnetidir. İbn Halife Ömer\'e dair rivayetler de vardır.' },
    },
    {
      title: { tr: 'Kolların durumu' },
      shia: { tr: 'Namazda elin duruşu iki fıkıhta da konuşulur. Câferî uygulamada eller sarkıtılır; bağlamak namazı bozar diye görülür.' },
      sunni: { tr: 'Namazda elin duruşu iki fıkıhta da konuşulur. Çoğunlukta eller bağlanır; Mâlikî mezhebinde sarkıtma görüşü de nakledilmiştir.' },
    },
    {
      title: { tr: 'Secde taşı (mühür)' },
      shia: { tr: 'Toprağa secde iki gelenekte de delillidir. Câferî fıkıhta secde yerden biten şeye yapılır; Kerbela toprağı müstehaptır.' },
      sunni: { tr: 'Toprağa secde iki gelenekte de delillidir. Sünni mezheplerde secde yeri serbesttir; Buhari 335 yeryüzünün mescit kılındığını bildirir.' },
    },
    {
      title: { tr: 'Namazları birleştirme' },
      shia: { tr: 'Peygamber\'in Medine\'de namazları birleştirdiği hadis iki kaynakta da anılır. Câferî fıkıhta mazeretsiz cem caizdir; ayrı kılmak daha faziletlidir.' },
      sunni: { tr: 'Peygamber\'in Medine\'de namazları birleştirdiği hadis iki kaynakta da anılır. Sünni mezhepler bu cemi çoğunlukla mazerete bağlar (Müslim, Sahih).' },
    },
    {
      title: { tr: 'Teravih' },
      shia: { tr: 'Halife Ömer\'in Ramazan gecesi cemaati topladığı Buhari 2010\'da da geçer. Câferî fıkıhta cemaatle teravih sünnet değildir; nafile bireysel kılınır.' },
      sunni: { tr: 'Halife Ömer\'in Ramazan gecesi cemaati topladığı Buhari 2010\'da da geçer. Sünni mezheplerde teravih sünnettir ve sahabenin kabulüyle meşru sayılır.' },
    },
    {
      title: { tr: 'Humus' },
      shia: { tr: 'Enfâl 8:41\'in beşte bir hükmü iki mezhepte de kabul edilir. Câferî fıkıhta yıllık kazançtan humus verilir; imam ve seyyid hisseleri vardır.' },
      sunni: { tr: 'Enfâl 8:41\'in beşte bir hükmü iki mezhepte de kabul edilir. Sünni mezheplerde ayet savaş ganimetine özgüdür; kazançtan humus alınmaz.' },
    },
    {
      title: { tr: 'Takiyye' },
      shia: { tr: 'Zor altında söz söyleme ruhsatı, Ammar olayı ve ilgili ayetlerle iki kaynakta da anılır. Câferî fıkıhta takiyye can, mal ve ırz tehlikesinde caizdir, bazen gereklidir.' },
      sunni: { tr: 'Zor altında söz söyleme ruhsatı, Ammar olayı ve ilgili ayetlerle iki kaynakta da anılır. Sünni fıkıhta takiyye, zorlama anında bir ruhsattır; sürekli bir ilke sayılmaz.' },
    },
    {
      title: { tr: 'Âşûrâ ve Gadir' },
      shia: { tr: 'Âşûrâ günü ve Gadir hadisi iki gelenekte de bilinir. Câferî takvimde Âşûrâ matem, 18 Zilhicce Gadir bayramıdır.' },
      sunni: { tr: 'Âşûrâ günü ve Gadir hadisi iki gelenekte de bilinir. Sünni uygulamada Âşûrâ oruç günüdür; "mevla" kelimesi dostluk olarak yorumlanır.' },
    },
    {
      title: { tr: 'İsmet ve sahabe adaleti' },
      shia: { tr: 'Tahir ayeti ve Kisâ hadisi iki kaynakta da Ehl-i Beyt\'i anar. Câferî inançta Ehl-i Beyt bu ayetle ma\'sumdur; sahabe adaleti ölçüye bağlıdır.' },
      sunni: { tr: 'Tahir ayeti ve Kisâ hadisi iki kaynakta da Ehl-i Beyt\'i anar. Sünni inançta bütün sahabe adildir; ismet peygamberlere özgüdür. Havz hadisi irtidat edenlere veya münafıklara bağlanır.' },
    },
  ],
  questions: [
    { tr: 'Müslim\'de Peygamber\'in cemi "ümmetini zora sokmamak" diye anlatılırsa, bu gerekçe namaz vakitlerini anlamaya nasıl yardım eder?' },
    { tr: 'Yeryüzünün mescit kılındığı hadisi iki kaynakta da varsa, secde yerindeki fark toprak şartı ile serbestlik arasında mı durur?' },
    { tr: 'Halife Ömer\'in teravih için "güzel bid\'at" demesi, bir ibadetin sünnet sayılıp sayılmamasında kendi sözünü nasıl öne çıkarır?' },
    { tr: 'Ammar b. Yasir\'in zor altındaki sözü, takiyyenin can ve inanç sınırını nasıl gösterir?' },
    { tr: 'Havz hadisi (Buhari 6585), sahabe sevgisi ile davranışın ölçülmesi yan yana nasıl durur?' },
  ],
  summary: { tr: 'Ezan, el duruşu, secde yeri, cem, teravih, humus ve takiyye gibi farklar, aynı ayet ve hadislerin iki okunuşundan doğar. Câferî mektep bunları Kur\'an ve Peygamber uygulamasının bir devamı olarak açıklar. Sünni mezhepler de aynı metinlerden kendi uygulamalarını çıkarır.' },
};

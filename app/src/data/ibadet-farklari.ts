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
      text: { tr: 'Ezan, Peygamber döneminde Bilal\'in okuduğu çağrıdır. "Hayye alâ hayri\'l-amel" ifadesini İbn Halife Ömer\'in ve Ebû Mahzûre\'nin zaman zaman kullandığına dair rivayetler vardır. Bu rivayet Sünni kaynaklarında da geçmektedir (Beyhakî, es-Sünenü\'l-Kübrâ; Ebu Davud, Sünen). Sıhhati tartışmalıdır; uygulama sonradan terk edilmiş olarak aktarılır. Câferî mektep, bu ifadeyi ezanın asli bir parçası olarak sürdürür. Halife Ömer\'in kaldırdığı da rivayet edilir.' },
      art: { bg: 'dawn', props: ['moon'], actors: [{ kind: 'man', x: 50, pose: 'raise', label: { tr: 'Bilal' } }] },
    },
    {
      by: 'shia',
      text: { tr: 'Câferî fıkıhta "Hayye alâ hayri\'l-amel" ezanın bir cüzüdür. Halife Ömer\'in bunu, savaş ruhunu zayıflatır diye kaldırdığı rivayet edilir. "Eşhedü enne Aliyyen veliyyullah" bugünkü Şii ulema görüşüne göre ezanın şartı değildir; müstehap bir şiar olarak okunur. "Es-salâtü hayrun mine\'n-nevm" Câferî ezanında okunmaz. Sünni kaynaklarda bu son ifade sabah ezanında sabit bir sünnet olarak anılır.' },
      art: { bg: 'city', props: ['minbar'], actors: [{ kind: 'man', x: 40, pose: 'raise', label: { tr: 'Müezzin' } }, { kind: 'crowd', x: 72, scale: 0.7 }] },
    },
    {
      by: 'both',
      text: { tr: 'Mâlikî mezhebinde namazda ellerin sarkıtılması bir görüş olarak nakledilir. Bu rivayet Sünni kaynaklarında da geçmektedir (Mâlik, Muvatta; el-Müdevvene). Diğer Sünni mezheplerin çoğunda ayakta eller bağlanır ve bu sünnet sayılır. Câferî fıkıhta eller yanlarda bırakılır; bağlamak namazı bozar diye görülür. Sarkıtma, Peygamber\'in ve Ehl-i Beyt\'in uygulaması olarak sürdürülür.' },
      art: { bg: 'interior', actors: [{ kind: 'man', x: 40, label: { tr: 'Namaz kılan' } }, { kind: 'man', x: 66, label: { tr: 'Namaz kılan' } }] },
    },
    {
      by: 'both',
      text: { tr: 'Cabir\'den gelen rivayette "Yeryüzü bana ve ümmetime mescit ve teyemmüm vasıtası kılındı" denir. Bu rivayet Sünni kaynaklarında da geçmektedir (Buhari, Sahih, No. 335). Câferî fıkıh, secdeyi yerden biten, yenmeyen ve giyilmeyen bir şeye ve toprağa yapar; toprağa secdeyi şart sayar. Bu yüzden birçok Şii yanında bir secde taşı, türbe, taşır. Kerbela toprağı özellikle tercih edilir. Sünni mezheplerde secde yeri halı, hasır veya toprak olabilir.' },
      art: { bg: 'interior', actors: [{ kind: 'man', x: 50, pose: 'sit', label: { tr: 'Secdede' } }] },
    },
    {
      by: 'shia',
      text: { tr: 'Kerbela toprağının sevilmesi, İmam Hüseyin\'in şehit olduğu yer olmasıyla ilgilidir. Bazı rivayetlerde bu toprağa şifa ve sevap bağlanır. Bu rivayetlerin senet değeri Şii âlimler arasında da tartışılır. Şii fıkhında toprak secdesi sünnet, Kerbela toprağı ise müstehap sayılır. Secde taşı kullanmak Sünni mezheplerde yasak değildir. Câferî mektep, yerden biten şeye secdeyi Peygamber\'in secde uygulamasının devamı sayar.' },
      art: { bg: 'dune-dusk', props: ['sun'], actors: [{ kind: 'husayn', x: 50, label: { tr: 'Hz. Hüseyin' } }] },
    },
    {
      by: 'both',
      text: { tr: 'İbn Abbas, Peygamber\'in korku, yağmur veya yolculuk olmadan Medine\'de öğle-ikindi ve akşam-yatsıyı birleştirdiğini anlatır. Gerekçe, ümmetini zora koşmamaktır. Bu rivayet Sünni kaynaklarında da geçmektedir (Müslim, Sahih). Câferî fıkıh, bu uygulamayı mazeretsiz cem olarak sürdürür. Vakitler öğleden akşama ve güneş batımından gece yarısına kadar ortaktır; ayrı kılmak daha faziletlidir. Sünni mezheplerde aynı hadis çoğunlukla özel bir mazeret diye yorumlanır. Hanefiler yolculuk ve arefe gibi dar durumlar dışında cem\'i kabul etmez.' },
      art: { bg: 'dune-day', props: ['sun'], actors: [{ kind: 'prophet', x: 50, label: { tr: 'Hz. Peygamber' } }] },
    },
    {
      by: 'both',
      text: { tr: 'Halife Ömer, Ramazan gecesi insanları dağınık görünce onları Ubey b. Kâ\'b\'ın arkasında topladı ve "Ne güzel bid\'at bu" dedi. Bu rivayet Sünni kaynaklarında da geçmektedir (Buhari, Sahih, No. 2010). Sünni mezheplerde teravih sünnettir; bu toplama, sahabenin kabulüyle meşru sayılır. Câferî fıkıhta Ramazan gecesi nafilesi bireysel kılınır. Cemaatle teravih Peygamber sünneti sayılmaz; bu toplama Halife Ömer\'in uygulamasıdır. Onun "bid\'at" sözü de bu okuyuşta hatırlanır.' },
      art: { bg: 'night', props: ['moon', 'stars'], actors: [{ kind: 'man', x: 34, label: { tr: 'Ömer' } }, { kind: 'crowd', x: 68, scale: 0.7 }] },
    },
    {
      by: 'both',
      text: { tr: 'Enfâl 8:41, ganimet olarak alınan şeyin beşte birinin Allah\'a, Peygamber\'e, yakınlara, yetimlere, yoksullara ve yolculara ait olduğunu söyler. Câferî fıkıh "ganimet"i geniş okur; yıllık kazancın fazlasından beşte bir verilir. Humus iki eşit parçadır: imam hissesi ve seyyidlere, yani Haşimoğullarından yetim, yoksul ve yolculara ait hisse. Gaybet döneminde imam hissesi müçtehidin nezaretinde harcanır. Sünni mezheplerde ayet savaş ganimeti için geçerli sayılır ve kazançtan humus alınmaz. Ayetin kabulü ortaktır; fark kapsamdadır.' },
      art: { bg: 'city', actors: [{ kind: 'man', x: 40, label: { tr: 'Tüccar' } }, { kind: 'man', x: 66, label: { tr: 'Müçtehid' } }] },
    },
    {
      by: 'both',
      text: { tr: 'Âl-i İmrân 3:28 ("Onlardan sakınmanız hariç") ve Nahl 16:106 ("kalbi imanla dolu olduğu halde zorlanan hariç") bu ruhsatın ayetleridir. Ammar b. Yasir\'in işkence altında dil ile inkâr sözü söylediği ve Peygamber\'in ona "tekrar edersen yine söyle" dediği rivayet bilinir. Câferî fıkıhta takiyye, can, mal ve ırz tehlikesinde ve mezhebin korunması gerektiğinde caizdir, bazen de gereklidir. Tarihte Şiiler baskı altında yaşadığı için bu hüküm fıkıhta yer bulmuştur. Sünni kaynaklarda da aynı ayetler dayanak gösterilir; takiyye, can tehlikesi gibi zorda bir ruhsat olarak anılır.' },
      art: { bg: 'mountain', actors: [{ kind: 'man', x: 50, label: { tr: 'Ammar b. Yasir' } }] },
    },
    {
      by: 'both',
      text: { tr: 'Gadir hadisi, "Ben kimin mevlası isem Ali de onun mevlasıdır", Sünni kitaplarda da yer alır. Bu rivayet Sünni kaynaklarında da geçmektedir (Tirmizî, Sünen). "Mevla" kelimesinin yönetim mi dostluk mu olduğu ayrıca konuşulur. Âşûrâ, Sünni kaynaklarda Buhari\'de geçen bir oruç günüdür; Hz. Musa\'nın kurtuluşu anılır, Hüseyin\'in şehadeti de hatırlanır. Câferî gelenekte Muharrem\'in ilk on günü ve Âşûrâ, Kerbela matemidir. 18 Zilhicce ise Gadir bayramı sayılır.' },
      art: { bg: 'dune-dusk', props: ['flags'], actors: [{ kind: 'husayn', x: 34, label: { tr: 'Hz. Hüseyin' } }, { kind: 'ali', x: 66, label: { tr: 'Hz. Ali' } }] },
    },
    {
      by: 'both',
      text: { tr: 'Ahzâb 33:33, "Allah sizden kirleri gidermek ve sizi tertemiz yapmak ister, ey Ehl-i Beyt" der. Müslim\'deki Kisâ hadisinde Peygamber, Hz. Ali, Fatıma, Hasan ve Hüseyin\'i abasının altına alır ve bu ayeti okur. Bu rivayet Sünni kaynaklarında da geçmektedir (Müslim, Sahih). Buhari 6585\'te Peygamber, havz başında bazı arkadaşlarının uzaklaştırılacağını söyler. Bu rivayet Sünni kaynaklarında da geçmektedir (Buhari, Sahih, No. 6585). Câferî okuyuş, Tahir ayetini Ehl-i Beyt\'in ismetine delil sayar; sahabe adaletini ise kişinin davranışı ve ilmiyle ölçer. Sünni kaynaklarda Ehl-i Beyt sevilir, ismet peygamberlere özgü sayılır. Havz hadisi irtidat edenlere veya münafıklara bağlanır.' },
      art: { bg: 'interior', props: ['scroll'], actors: [{ kind: 'prophet', x: 36, label: { tr: 'Hz. Peygamber' } }, { kind: 'ali', x: 60, label: { tr: 'Hz. Ali' } }] },
    },
  ],
  sunni: [
    { book: 'Buhari, Sahih', ref: 'No. 2010 (Salâtü\'t-Terâvih)', says: { tr: 'Halife Ömer Ramazan gecesi insanları Ubey b. Ka\'b arkasında toplar ve "Ne güzel bid\'at bu" der; gecenin son kısmında kılınan namazın daha faziletli olduğunu da söyler.' }, grade: { tr: 'Sahih' }, url: 'https://ihadis.com/en/bukhari/hadith/2010', status: 'verified' },
    { book: 'Buhari, Sahih', ref: 'No. 6585 (Rikak, Havz bölümü)', says: { tr: 'Peygamber, arkadaşlarından bazılarının havz başında uzaklaştırılacağını söyler; "Onların senden sonra neler ihdas ettiklerini bilmezsin" cevabı verilir.' }, grade: { tr: 'Sahih' }, url: 'https://ihadis.com/en/bukhari/hadith/6585', status: 'verified' },
    { book: 'Buhari, Sahih', ref: 'No. 335 (Teyemmüm)', says: { tr: 'Cabir\'den: "Yeryüzü bana ve ümmetime mescit ve teyemmüm vasıtası kılındı." Sünni kaynaklarda toprağın secde yeri olduğuna delil gösterilir.' }, grade: { tr: 'Sahih' }, url: 'https://ihadis.com/en/bukhari/hadith/335', status: 'verified' },
    { book: 'Müslim, Sahih', ref: 'No. 705 (Cem hadisi, İbn Abbas) — numara DOĞRULANMADI; site erişilemedi', says: { tr: 'İbn Abbas, Peygamber\'in korku ve yağmur olmaksızın Medine\'de öğle-ikindi ve akşam-yatsıyı birleştirdiğini, gerekçenin ümmetini zora sokmamak olduğunu söyler.' }, status: 'check' },
    { book: 'Müslim, Sahih', ref: 'Fedâilü\'s-Sahâbe, Kisâ (Âişe) hadisi; numara DOĞRULANMADI', says: { tr: 'Peygamber, Ali, Fatıma, Hasan ve Hüseyin\'i abasının altına alır ve Ahzâb 33:33 ayetini okur.' }, status: 'check' },
    { book: 'Beyhakî, es-Sünenü\'l-Kübrâ; Ebu Davud, Sünen (Ezan bölümü)', ref: 'DOĞRULANMADI (ezan ifadeleri, İbn Halife Ömer ve Ebu Mahzure rivayetleri)', says: { tr: 'Ezan sözlerinin rivayet farkları; İbn Halife Ömer\'in "hayye alâ hayri\'l-amel" dediğine dair rivayet ikincil kaynaklardan bilinir, sıhhati tartışmalıdır.' }, status: 'check' },
    { book: 'Mâlik, Muvatta\'; el-Müdevvene', ref: 'DOĞRULANMADI', says: { tr: 'Maliki mezhebinde namazda elleri sarkıtma (sadl) görüşünün aktarılması; Ramazan kıyamı ile ilgili Halife Ömer rivayeti.' }, status: 'check' },
    { book: 'Tirmizî, Sünen', ref: 'Menâkıb, Ali bölümü, "men kuntu mevlâ" hadisi; numara DOĞRULANMADI', says: { tr: 'Gadir hadisi Sünni hadis kitaplarında da yer alır.' }, status: 'check' },
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
      shia: { tr: '"Hayye alâ hayri\'l-amel" ifadesi bazı erken rivayetlerde anılır. Câferî fıkıhta o, ezanın parçasıdır; Ali\'ye şahitlik şart değil, müstehap bir şiardır. "Es-salâtü hayrun mine\'n-nevm" ise Câferî ezanında okunmaz.' },
      sunni: { tr: '"Hayye alâ hayri\'l-amel" ifadesi bazı erken rivayetlerde anılır. Sünni ezanda bu söz okunmaz; "es-salâtü hayrun mine\'n-nevm" sabah ezanının sünnetidir. İbn Halife Ömer\'e dair rivayetler de vardır.' },
    },
    {
      title: { tr: 'Kolların durumu' },
      shia: { tr: 'Namazda elin duruşu iki fıkıhta da konuşulur. Câferî uygulamada eller sarkıtılır; bağlamak namazı bozar diye görülür.' },
      sunni: { tr: 'Namazda elin duruşu iki fıkıhta da konuşulur. Çoğunlukta eller bağlanır; Mâlikî mezhebinde sarkıtma görüşü de nakledilmiştir.' },
    },
    {
      title: { tr: 'Secde taşı (türbe)' },
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

import type { HistEvent } from '../types';

// Doğrulama durumu: Buhari 2010, 6585 ve 335 ihadis.com'dan bu oturumda okundu ('verified').
// Diğer kaynaklar bilinen atıflardır; sayfa/numara birincil kaynaktan kontrol edilmeli ('check').
export const ibadetFarklari: HistEvent = {
  id: 'ibadet-farklari',
  date: { tr: 'Çeşitli', en: 'Various' },
  title: { tr: 'İbadet ve inanç farkları', en: 'Differences in worship and belief' },
  hook: { tr: 'Aynı Kur\'an, aynı Peygamber; peki ezanda, namazda ve ibadetlerde farklar nereden doğdu ve her iki tarafın delili nedir?', en: 'Same Quran, same Prophet; where do the differences in the call to prayer and worship come from?' },
  scenes: [
    {
      by: 'both',
      text: { tr: 'Ezan. Ezan, Peygamber döneminde Bilal\'in okuduğu çağrıdır ve Şii kaynaklarında olduğu gibi Sünni kaynaklarında da bu şekilde anlatılır. Fark üç ifadededir. Şii kaynaklarında "Hayye alâ hayri\'l-amel" ezanın aslındadır; Halife Ömer\'in bunu kaldırdığı rivayet edilir. Bazı Sünni kaynaklarında da İbn Halife Ömer\'in ve Ebu Mahzure\'nin bu ifadeyi zaman zaman kullandığına dair rivayetler bulunur; bu uygulama sonradan terk edilmiş olarak aktarılır.' },
      art: { bg: 'dawn', props: ['moon'], actors: [{ kind: 'man', x: 50, pose: 'raise', label: { tr: 'Bilal' } }] },
    },
    {
      by: 'shia',
      text: { tr: 'Şii kaynaklarına göre Halife Ömer, savaş ruhunu zayıflatır diye "Hayye alâ hayri\'l-amel"i kaldırdı; Şii fakihler onu ezanın cüzü sayar. "Eşhedü enne Aliyyen veliyyullah" ise mevcut Şii ulema görüşüne göre ezanın şartı değil; müstehap, bir şiar olarak okunur. "Es-salâtü hayrun mine\'n-nevm" Şii fıkhında ezanda okunmaz; Sünni kaynaklarda ise sabah ezanında okunur ve sabit sünnet olarak anılır.' },
      art: { bg: 'city', props: ['minbar'], actors: [{ kind: 'man', x: 40, pose: 'raise', label: { tr: 'Müezzin' } }, { kind: 'crowd', x: 72, scale: 0.7 }] },
    },
    {
      by: 'both',
      text: { tr: 'Namazda eller. Şii fıkhında eller yanlarda sarkıtılır; bağlamak namazı bozar diye görülür ve Peygamber\'in ve Ehl-i Beyt\'in uygulaması olarak sarkıtma anlatılır. İmam Mâlik\'ten de ellerin sarkıtılması görüşü nakledilir; Maliki mezhebinde bu bir görüş olarak yaşamıştır. Diğer Sünni mezheplerin çoğunda ise ayakta eller bağlanır ve bu sünnet sayılır.' },
      art: { bg: 'interior', actors: [{ kind: 'man', x: 40, label: { tr: 'Namaz kılan' } }, { kind: 'man', x: 66, label: { tr: 'Namaz kılan' } }] },
    },
    {
      by: 'both',
      text: { tr: 'Secde yeri. Şii fıkhında secde yerden biten (yenmeyen ve giyilmeyen) bir şeye ve toprağa yapılır; bu yüzden pek çok Şii yanında bir secde taşı (türbe) taşır, Kerbela toprağı ise özellikle tercih edilir. Sünni kaynaklarında da toprağa secde ve "yeryüzü bana mescit ve temiz kılındı" hadisi vardır (Buhari 335). Şii kaynaklarında toprağa secde şart sayılır; Sünni mezheplerde secde yeri halı, hasır veya toprak olarak serbesttir.' },
      art: { bg: 'interior', actors: [{ kind: 'man', x: 50, pose: 'sit', label: { tr: 'Secdede' } }] },
    },
    {
      by: 'shia',
      text: { tr: 'Şiilerin Kerbela toprağını sevmesi, İmam Hüseyin\'in şehit olduğu toprak olması ve bazı rivayetlerde ona şifa ve sevap bağlanmasıyla ilgilidir. Bu rivayetlerin senet değeri Şii âlimler arasında da tartışılır. Şii fıkhında toprak secdesi sünnet, Kerbela toprağı ise müstehap sayılır. Secde taşı kullanmak Sünni mezheplerde yasak değildir.' },
      art: { bg: 'dune-dusk', props: ['sun'], actors: [{ kind: 'husayn', x: 50, label: { tr: 'Hz. Hüseyin' } }] },
    },
    {
      by: 'both',
      text: { tr: 'Namazları birleştirme. Şii fıkhı, öğle-ikindi ve akşam-yatsı namazlarının mazeretsiz de birleştirilmesini (cem) caiz görür; vakitler öğleden akşama kadar ve güneş batımından gece yarısına kadar ortaktır, ayrı kılmak ise daha faziletlidir. Sünni kaynaklarda Müslim 705\'teki İbn Abbas hadisi, Peygamber\'in korku, yağmur veya yolculuk olmadan Medine\'de cem yaptığını anlatır, "ümmetini zora koşmamak için" diye gerekçe verir. Bu hadis, Şii kaynaklarında mazeretsiz cemin açık delili olarak anılır; Sünni mezheplerde ise özel bir mazeret olarak yorumlanır, Hanefiler yolculuk ve arefe gibi dar durumlar dışında cem yapılmasını kabul etmez.' },
      art: { bg: 'dune-day', props: ['sun'], actors: [{ kind: 'prophet', x: 50, label: { tr: 'Hz. Peygamber' } }] },
    },
    {
      by: 'both',
      text: { tr: 'Teravih. Buhari 2010\'a göre Halife Ömer, Ramazan gecesi insanları dağınık görüp Ubey b. Ka\'b arkasında topladı ve "Ne güzel bid\'at bu" dedi. Şii fıkhında teravih cemaatle farz veya sünnet değildir, Ramazan gecelerinde bireysel nafile namaz kılınır; cemaatle kılmak Halife Ömer\'in uygulaması olduğu için sünnet kabul edilmez. Sünni mezheplerde ise teravih sünnettir ve Halife Ömer\'in cemaate toplaması sahabenin kabulüyle meşru sayılır. Buradaki tartışma, Halife Ömer\'in kendi sözündeki "bid\'at" nitelemesinin sonradan nasıl yorumlandığıdır.' },
      art: { bg: 'night', props: ['moon', 'stars'], actors: [{ kind: 'man', x: 34, label: { tr: 'Ömer' } }, { kind: 'crowd', x: 68, scale: 0.7 }] },
    },
    {
      by: 'both',
      text: { tr: 'Humus. Enfâl 8:41 "ganimet olarak aldığınız şeyin beşte biri Allah\'a, Peygamber\'e, yakınlara, yetimlere, yoksullara ve yolculara aittir" der. Şii fıkhında "ganimet" kelimesi geniş anlamlıdır; yıllık kazancın fazlasından beşte bir verilir. Şii uygulamasında humus iki eşit parçaya bölünür: imam hissesi ve seyyidlere (Haşimoğullarına mensup yetim, yoksul ve yolculara) ait hisse. Gaybet döneminde imam hissesi müçtehid\'in nezaretinde harcanır. Sünni mezheplerde ayet savaş ganimeti için geçerli sayılır ve kazançtan humus alınmaz; ayeti kabulde ortak, fark kapsamdadır.' },
      art: { bg: 'city', actors: [{ kind: 'man', x: 40, label: { tr: 'Tüccar' } }, { kind: 'man', x: 66, label: { tr: 'Müçtehid' } }] },
    },
    {
      by: 'both',
      text: { tr: 'Takiyye. Âl-i İmrân 3:28 ("Onlardan sakınmanız hariç") ve Nahl 16:106 ("kalbi imanla dolu olduğu halde zorlanan hariç") ayetleri, Ammar b. Yasir\'in işkence altında dil ile inkâr sözü söylemesi ve Peygamber\'in ona "tekrar edersen yine söyle" dediği rivayetiyle bilinir. Şii fıkhında takiyye can, mal ve ırz tehlikesinde ve mezhebin korunması gereken durumlarda caizdir, hatta bazen gereklidir; tarihsel olarak Şiiler baskı altında yaşadığı için fıkıhta yer bulmuştur. Sünni kaynaklarda da aynı ayetler dayanak gösterilir ve takiyye can tehlikesi gibi zorda bir ruhsat olarak anılır.' },
      art: { bg: 'mountain', actors: [{ kind: 'man', x: 50, label: { tr: 'Ammar b. Yasir' } }] },
    },
    {
      by: 'both',
      text: { tr: 'Âşûrâ ve Gadir. Şii kaynaklarında Muharrem\'in ilk on günü ve Âşûrâ, İmam Hüseyin\'in Kerbela\'da şehit edilmesi dolayısıyla matem (azadari) günleridir; Gadir-i Hum ise 18 Zilhicce\'de bayram sayılır. Âşûrâ, Sünni kaynaklarda da Buhari\'de geçen oruç günüdür (Musa\'nın kurtuluşu); Hüseyin\'in şehadeti de anılır. Gadir hadisi ("Ben kimin mevlası isem Ali de onun mevlasıdır") Şii kaynaklarında olduğu gibi Sünni kaynaklarında da geçer; "mevla" kelimesinin yönetimsel mi, dostluk anlamında mı olduğu ayrıca tartışılır.' },
      art: { bg: 'dune-dusk', props: ['flags'], actors: [{ kind: 'husayn', x: 34, label: { tr: 'Hz. Hüseyin' } }, { kind: 'ali', x: 66, label: { tr: 'Hz. Ali' } }] },
    },
    {
      by: 'both',
      text: { tr: 'İsmet ve sahabe adaleti. Ahzâb 33:33 (Tahir ayeti) "Allah sizden kirleri gidermek ve sizi tertemiz yapmak ister, ey Ehl-i Beyt" der; Müslim\'deki Kisâ hadisi Hz. Ali, Fatıma, Hasan ve Hüseyin\'in bu ayet kapsamında anıldığını anlatır. Şii kaynaklarında bu ayet Ehl-i Beyt\'in ismetine delildir; sahabe için ise adalet, kişinin davranışı ve ilmiyle ölçülür. Sünni kaynaklarda Ehl-i Beyt sevilir ve saygı görür, ismet ise peygamberlere özgü sayılır. Buhari 6585\'te Peygamber, havz başında bazı arkadaşlarının uzaklaştırılacağını söyler; Şii kaynaklarında bu hadis adalet ölçüsünün gerekliliğine delil olarak anılır, Sünni kaynaklarda ise irtidat edenlere veya münafıklara bağlanır.' },
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
      shia: { tr: '"Hayye alâ hayri\'l-amel" ezanın bir parçasıdır, Halife Ömer kaldırmıştır; "Eşhedü enne Aliyyen veliyyullah" şart değil, müstehap bir şiardır; "es-salâtü hayrun mine\'n-nevm" ezanda yoktur.' },
      sunni: { tr: 'İlk ifade ezanda okunmaz, ancak İbn Halife Ömer\'e dair bazı rivayetler vardır; üçüncüsü sabah ezanının sünnetidir.' },
    },
    {
      title: { tr: 'Kolların durumu' },
      shia: { tr: 'Eller sarkıtılır; bağlamak yasaklanmıştır.' },
      sunni: { tr: 'Eller bağlanır; Maliki mezhebinde sarkıtma görüşü de nakledilmiştir.' },
    },
    {
      title: { tr: 'Secde taşı (türbe)' },
      shia: { tr: 'Secde yerden biten şeye yapılır; Kerbela toprağı müstehaptır.' },
      sunni: { tr: 'Secde yeri serbesttir; Buhari 335 toprağın mescit kılındığını bildirir.' },
    },
    {
      title: { tr: 'Namazları birleştirme' },
      shia: { tr: 'Mazeret olmadan da cem caizdir; ayrı kılmak daha faziletlidir.' },
      sunni: { tr: 'Müslim 705\'teki hadise rağmen mezhepler cemi çoğunlukla mazerete bağlar.' },
    },
    {
      title: { tr: 'Teravih' },
      shia: { tr: 'Cemaatle teravih sünnet değildir; Ramazan gecelerinde bireysel nafile kılınır.' },
      sunni: { tr: 'Teravih sünnettir; Halife Ömer\'in uygulaması sahabece kabul görmüştür (Buhari 2010).' },
    },
    {
      title: { tr: 'Humus' },
      shia: { tr: 'Yıllık kazançtan humus verilir; imam ve seyyid hisseleri vardır.' },
      sunni: { tr: 'Ayet savaş ganimetine özgüdür; kazançtan humus alınmaz.' },
    },
    {
      title: { tr: 'Takiyye' },
      shia: { tr: 'Can, mal ve ırz tehlikesinde caizdir, bazen gereklidir.' },
      sunni: { tr: 'Zorlama durumunda ruhsattır; düzenli bir ilke değildir.' },
    },
    {
      title: { tr: 'Âşûrâ ve Gadir' },
      shia: { tr: 'Âşûrâ matem günüdür, 18 Zilhicce Gadir bayramıdır.' },
      sunni: { tr: 'Âşûrâ oruç günüdür; Gadir hadisinin "mevla" kelimesi dostluk olarak yorumlanır.' },
    },
    {
      title: { tr: 'İsmet ve sahabe adaleti' },
      shia: { tr: 'Ehl-i Beyt Tahir ayeti gereği ma\'sumdur; sahabe adaleti ölçüye bağlıdır.' },
      sunni: { tr: 'Bütün sahabe adildir; havz hadisi irtidat edenlere veya münafıklara bağlanır.' },
    },
  ],
  questions: [
    { tr: 'Müslim 705\'te Peygamber\'in cemi "ümmetini zora sokmamak" diye anlatılıyorsa, bu gerekçe cem hükmünü genişletir mi daraltır mı?' },
    { tr: 'Her iki mezhepte de toprağa secde delili varsa, fark "toprak şart mı, tercih mi" noktasında mı toplanır?' },
    { tr: 'Halife Ömer\'in teravih uygulamasına "güzel bid\'at" demesi, ibadette yenilik ve sünnet ilişkisini nasıl düşündürür?' },
    { tr: 'Ammar b. Yasir olayı takiyyenin kapsamı hakkında hangi sınırları gösterir?' },
    { tr: 'Havz hadisi (Buhari 6585) sahabe adaletini genel bir ilke olarak mı, istisnalı bir ilke olarak mı düşündürür?' },
  ],
  summary: { tr: 'Ezan, el konumu, secde yeri, cem, humus ve takiyye gibi ibadet farkları, ayet ve hadislerin değerlendirilmesinden doğar; Şii kaynaklarında ve Sünni kaynaklarında aynı ayetler ve hadisler dayanak olarak anılır.' },
};

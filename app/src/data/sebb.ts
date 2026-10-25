import type { HistEvent } from '../types';

// Araştırma notu: Bu oturumda doğrudan okunabilen: Müslim 2404 (tohed), TDV "Hucr b. Adî" ve "Ömer b. Abdülaziz" maddeleri, WikiShia "Cursing Imam Ali" (dipnotları). Birincil kitaplar (Taberî, İbn Esîr, Bidâye, Iqd) okunmadı; ilgili kayıtlar status:'check' olarak işaretlidir.
export const sebb: HistEvent = {
  id: 'sebb',
  date: { tr: '41 H sonrası - 99-101 H (yaklaşık 661-720)', en: 'After 41 AH - 99-101 AH (c. 661-720)' },
  title: { tr: 'Minberlerde Hz. Ali\'ye sövme geleneği (sebb) ve Hucr b. Adî', en: 'The practice of cursing Imam Ali from the pulpits (sabb) and Hujr b. Adi' },
  hook: { tr: 'Hz. Peygamber (s.a.v.) Ali\'yi seveni kendine bağlamıştı. Yıllarca Cuma minberlerinde neden ona sövüldü?', en: 'The Prophet had said that loving Ali is loving him; why was Ali cursed from Friday pulpits for years, and why were objectors killed?' },
  scenes: [
    {
      text: { tr: 'Hz. Hasan\'ın (a.s.) sulhünden sonra, 41 H\'de yönetim Muaviye\'de toplandı. Şiî kaynaklarda ve birçok Sünnî kaynakta aktarıldığına göre Emevî döneminde Cuma hutbelerinde Hz. Ali\'ye (a.s.) sövmek yerleşik bir uygulama oldu. Sevenin dili minberde susturulmak istendi.' },
      art: { bg: 'city', props: ['minbar', 'flags'], actors: [{ kind: 'crowd', x: 28, scale: 7 }, { kind: 'man', x: 70, label: { tr: 'Muaviye' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Taberî\'ye göre Muaviye, Kûfe valisi Muğîre b. Şu\'be\'ye Hz. Ali\'yi kötülemesini ve Hz. Osman\'ı övmesini tavsiye etti. Muğîre hutbelerinde buna uydu. Ondan sonra Kûfe ve Basra\'yı yöneten Ziyâd b. Ebîh de aynı yolu izledi. Sayfa baskıya göre değişir; olayın kendisi erken tarihlerde anılır.' },
      art: { bg: 'city', props: ['minbar'], actors: [{ kind: 'man', x: 34, pose: 'raise', label: { tr: 'Muğîre' } }, { kind: 'crowd', x: 68, scale: 6 }] },
      by: 'both',
    },
    {
      text: { tr: 'Müslim 2404\'te Muaviye, Sa\'d b. Ebî Vakkâs\'a Hz. Ali\'ye neden sövmediğini sorar. Sa\'d üç sözü sayar: «Hârûn Mûsâ\'ya nasılsa», Hayber sancağı ve mübâhele. Şârihlerin bir kısmı bunu emir değil soru okur; lafız iki yoruma açıktır. Sa\'d\'ın cevabı ise açıktır: o üç söz, sövmeye engeldir.' },
      art: { bg: 'interior', props: ['scroll'], actors: [{ kind: 'man', x: 28, label: { tr: 'Sa\'d b. Ebî Vakkâs' } }, { kind: 'man', x: 64, label: { tr: 'Muaviye' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Şiî kaynaklara göre Muaviye valilerine genelgeler göndererek Hz. Ali\'ye sövülmesini ve onu övenlerin cezalandırılmasını istedi. Bu, İbn Ebi\'l-Hadîd\'in Medâinî\'den aktardığı rivayetlerdedir; sayfa bu çalışmada doğrulanmadı. Uygulamanın varlığı daha geniş kabul görür, emrin kapsamı ise rivayete bağlıdır.' },
      art: { bg: 'interior', props: ['scroll'], actors: [{ kind: 'man', x: 40, pose: 'sit', label: { tr: 'Muaviye' } }, { kind: 'crowd', x: 72, scale: 4 }] },
      by: 'shia',
    },
    {
      text: { tr: 'Bazı derlemelerde Hz. Ümmü Seleme\'nin Muaviye\'ye yazdığı bir mektup anılır: minberde Hz. Ali\'ye sövmek, Hz. Peygamber\'e (s.a.v.) sövmektir. Muaviye\'nin aldırmadığı da eklenir. Mektubun sayfası ve lafzı bu çalışmada doğrulanamadı; «Ali\'ye söven bana sövmüştür» anlamındaki rivayet ise ayrıca zikredilir, numarası da sabitlenmemiştir.' },
      art: { bg: 'interior', props: ['scroll'], actors: [{ kind: 'woman', x: 36, pose: 'sit', label: { tr: 'Ümmü Seleme' } }, { kind: 'man', x: 68, label: { tr: 'Muaviye' } }] },
      by: 'shia',
    },
    {
      text: { tr: 'Kûfe\'de Hucr b. Adî, Hz. Ali\'nin Cemel ve Sıffin\'deki komutanlarındandı. Muğîre\'nin hutbelerine açıkça karşı çıktı ve «Hz. Ali\'nin faziletleri daha üstündür» dedi. Ziyâd döneminde tutuklandı; on iki kadar arkadaşıyla Şam\'a gönderildi. Sevgiyi yüksek sesle söylemenin bedeli başlamıştı.' },
      art: { bg: 'city', props: ['minbar'], actors: [{ kind: 'man', x: 30, pose: 'raise', label: { tr: 'Hucr b. Adî' } }, { kind: 'crowd', x: 66, scale: 6 }] },
      by: 'both',
    },
    {
      text: { tr: 'TDV\'ye göre sövmeyi reddeden Hucr ve arkadaşları 51\'de (671) Mercü Azrâ\'da idam edildi; bazıları bırakıldı. Hucr\'un önce iki rekât namaz kıldığı ve yıkanmak istemediği, kendini şehit saydığı aktarılır. Hz. Âişe\'nin bu öldürmeyi Muaviye\'ye yadırgattığı da anlatılır. O, kendini savunmuştur.' },
      art: { bg: 'dune-dusk', props: ['swords'], actors: [{ kind: 'man', x: 34, label: { tr: 'Hucr b. Adî' } }, { kind: 'crowd', x: 70, scale: 5 }] },
      by: 'both',
    },
    {
      text: { tr: 'Şiî kaynaklar bu geleneğin yaklaşık altmış yıl sürdüğünü söyler; süre Ömer b. Abdülaziz\'in hilafetine (99-101 H) kadar uzanır. Uygulamanın varlığı ve onun döneminde kaldırılması Sünnî kaynaklarda da kabul edilir. «Altmış yıl» kesin bir sayı değil, yaklaşık bir ifadedir.' },
      art: { bg: 'city', props: ['minbar', 'sun'], actors: [{ kind: 'crowd', x: 30, scale: 7 }, { kind: 'man', x: 70, label: { tr: 'Hatip' } }] },
      by: 'shia',
    },
    {
      text: { tr: 'Ömer b. Abdülaziz halife olunca uygulamayı kaldırdı. İbn Haldun\'a göre beldelere yazıp durdurulmasını emretti. Yaygın anlatıma göre sövmenin yerine hutbelerde adaleti emreden Nahl 90 okutuldu. Bu ayet değişiminin metni, bu çalışmada o iki kitaptan satır satır doğrulanamadı.' },
      art: { bg: 'dawn', props: ['minbar', 'sun'], actors: [{ kind: 'man', x: 40, pose: 'raise', label: { tr: 'Ömer b. Abdülaziz' } }, { kind: 'crowd', x: 72, scale: 6 }] },
      by: 'both',
    },
  ],
  sunni: [
    { book: 'Müslim, Sahih', ref: 'No. 2404 (Fezâilü\'s-sahâbe, Hz. Ali\'nin faziletleri); Şâmile no. 6220', says: { tr: 'Âmir b. Sa\'d\'ın babası Sa\'d b. Ebî Vakkâs\'tan: Muaviye, Sa\'d\'a Ebû Turab\'a (Hz. Ali) neden sövmediğini sordu; Sa\'d, Peygamber\'in Hz. Ali hakkındaki üç sözünü sayarak sövmeyeceğini belirtti. Hz. Ali hakkında "Menzile" lafzı bu rivayette de geçer.' }, grade: { tr: 'Sahih' }, url: 'https://en.tohed.com/hadith/muslim/6220', status: 'verified' },
    { book: 'TDV İslâm Ansiklopedisi, "Hucr b. Adî" (Nebi Bozkurt)', ref: 'Madde (ikincil Sünni/akademik)', says: { tr: 'Muğîre b. Şu\'be\'nin Muaviye\'nin tavsiyesine uyarak cuma hutbelerinde Hz. Ali ve taraftarlarına sövmesi; Hucr\'un tepkisi; Ziyâd\'ın tutuklaması; Hz. Ali\'ye sövmeyi reddedenlerin Merc Azra\'da idamı (ö. 51/671); Âişe\'nin yadırgaması.' }, url: 'https://islamansiklopedisi.org.tr/hucr-b-adi', status: 'verified' },
    { book: 'TDV İslâm Ansiklopedisi, "Ömer b. Abdülazîz" (İsmail Yiğit)', ref: 'Madde (ikincil)', says: { tr: 'Ömer b. Abdülaziz hutbelerde Hz. Ali\'ye sövme uygulamasına son verdi; Fedek\'i Ehl-i Beyt\'e iade etti. Nahl 90 ayetinden söz etmez.' }, url: 'https://islamansiklopedisi.org.tr/omer-b-abdulaziz', status: 'verified' },
    { book: 'Taberî, Târîhu\'r-Rusül ve\'l-Mülûk', ref: 'Hucr ve sövme bölümü, 51. yıl (WikiShia dipnotundaki sayfa doğrulanmadı)', says: { tr: 'Muaviye\'nin Muğîre\'ye Hz. Ali\'yi kötülemesi ve Hz. Osman\'ı övmesi yönündeki tavsiyesi; Hucr b. Adî olayı.' }, status: 'check' },
    { book: 'İbnü\'l-Esîr, el-Kâmil fi\'t-Târîh', ref: '41-51. yıl olayları (cilt/sayfa kontrol edilecek)', says: { tr: 'Muğîre ve Ziyâd dönemindeki sövme ve Hucr b. Adî\'nin öldürülmesi anlatımı beklenir; okunmadı.' }, status: 'check' },
    { book: 'Zehebî, Târîhu\'l-İslâm', ref: 'Mervân dönemi (WikiShia dipnotundaki sayfa doğrulanmadı)', says: { tr: 'Mervân\'ın Medine valiliği sırasında Hz. Ali\'ye sövmesi ile ilgili aktarım (WikiShia\'nın Sünni tarihçi olarak andığı kaynak). Doğrudan okunmadı.' }, status: 'check' },
    { book: 'Ahmed b. Hanbel, Müsned; Hâkim, el-Müstedrek', ref: 'Ümmü Seleme rivayeti: "Kim Ali\'ye söverse bana sövmüştür" (hadis numarası/cilt kontrol edilecek)', says: { tr: 'Ümmü Seleme\'den, Hz. Ali\'ye sövmenin Peygamber\'e sövmek sayıldığı rivayeti. WikiShia bunu İbn Asâkir (Târîhu Dımaşk 42/533) ile verir; Müsned ve Müstedrek numaraları kontrol edilmedi.' }, status: 'check' },
    { book: 'İbn Abdirabbih, el-Ikdü\'l-Ferîd', ref: 'Ümmü Seleme mektubu iddiası (ikincil dipnot; sayfa ve lafız doğrulanmadı)', says: { tr: 'Ümmü Seleme\'nin Muaviye\'ye yazdığı iddia edilen mektup: "Minberlerinizde Allah\'a ve Resulüne sövüyorsunuz." DOĞRULANMADI: sayfa ve lafız kitaptan teyit edilmedi.' }, status: 'check' },
    { book: 'İbn Haldun, Târîh', ref: 'Ömer b. Abdülaziz bölümü (WikiShia dipnotundaki sayfa doğrulanmadı)', says: { tr: 'Ömer b. Abdülaziz\'in bütün İslam beldelerine yazarak lanetin durdurulmasını emrettiği.' }, status: 'check' },
    { book: 'İbn Kesîr, el-Bidâye ve\'n-Nihâye; Suyûtî, Târîhu\'l-Hulefâ', ref: 'Ömer b. Abdülaziz bölümü (cilt/sayfa kontrol edilecek)', says: { tr: 'Sövmenin yerine Nahl 90\'ın okutulması yaygın anlatımdır, ancak bu oturumda metin bu iki kitaptan doğrulanamadı: DOĞRULANMADI.' }, status: 'check' },
    { book: 'İbn Hacer, Fethü\'l-Bârî ve İsâbe', ref: 'cilt/sayfa kontrol edilecek (İsâbe c.6 Hucr maddesi)', says: { tr: 'Sövmenin minberlerde alışkanlık olduğu ve Hucr\'un konumu hakkında aktarımlar; ikincil aktarımla bilinir, okunmadı.' }, status: 'check' },
  ],
  shia: [
    { book: 'İbn Ebi\'l-Hadîd, Şerhu Nehci\'l-Belâğa (Medâinî\'den)', ref: 'valilere yazıldığı iddia edilen genelgeler (sayfa doğrulanmadı)', says: { tr: 'Muaviye\'nin valilerine yazdığı genelgeler: Hz. Ali\'nin faziletlerini anlatanların cezalandırılması, hutbelerde ona sövülmesi. Okunmadı; sayfa belirsiz.' }, status: 'check' },
    { book: 'WikiShia, Cursing Imam Ali', ref: 'Madde, dipnot 9-13, 16 (ikincil Şii yayın)', says: { tr: 'Uygulamanın yaklaşık altmış yıl sürdüğü (dipnotsuz cümle), Ömer b. Abdülaziz\'in yasaklaması (İbn Haldun c.3 s.94), Muğîre\'nin dokuz yıl valilik boyunca sövmesi (Belâzurî, Ensâb c.5 s.243), Ümmü Seleme hadisi (İbn Tâvûs; İbn Asâkir 42/533), Mecliskî Biharü\'l-Envâr 39/311-330.' }, url: 'https://en.wikishia.net/view/Cursing_Imam_Ali', status: 'verified' },
    { book: 'Dîneverî, el-Ahbârü\'t-Tıvâl', ref: 'Sıffin bölümü (WikiShia dipnotundaki sayfa doğrulanmadı)', says: { tr: 'Sıffin\'de Hucr ve Amr b. Hamık Şam halkına sövünce Hz. Ali\'nin "sövmenizi sevmem" diyerek yasakladığı; Hz. Ali sövmeyi kendi tarafında da hoş görmezdi.' }, status: 'check' },
    { book: 'Ebü\'l-Ferec el-İsfahânî, Makâtilü\'t-Tâlibiyyîn; Şeyh Müfîd, el-İrşâd; Mes\'ûdî, Mürûcü\'z-Zeheb', ref: 'Hucr b. Adî ve sövme bölümleri (cilt/sayfa kontrol edilecek)', says: { tr: 'Bu kaynakların Hucr olayını ve sövmeyi anlattığı beklenir; bu oturumda okunmadı.' }, status: 'check' },
  ],
  disputes: [
    {
      title: { tr: 'Sövme Muaviye\'nin bizzat emri miydi?' },
      shia: { tr: 'Şii kaynaklar sövmeyi Muaviye\'nin valilerine yazdığı genelgelere dayandırır; Muğîre\'nin ve sonraki valilerin uygulaması bu emrin sonucudur.' },
      sunni: { tr: 'Taberî\'ye göre Muaviye Muğîre\'ye "tavsiye" etmiştir; bazı şârihler Müslim 2404\'ü "emir değil soru" olarak yorumlar. Muaviye\'nin kesin ve yazılı bir emir verdiğinin sahih zincirle sabit olmadığı, bunun valilerin kendi uygulaması olduğu savunulur. Bu görüşün tek tek şârih adları kontrol edilmedi.' },
    },
    {
      title: { tr: 'Gelenek tam olarak kaç yıl sürdü?' },
      shia: { tr: '"Yaklaşık altmış yıl" ifadesi Şii yayınlarda (WikiShia) geçer; bu cümle dipnotsuzdur. Başlangıç 41 H, bitiş Ömer b. Abdülaziz\'in 99-101 H arası hilafeti alınırsa süre 58-60 yıla denk gelir.' },
      sunni: { tr: 'Sünni kaynaklar uygulamanın Ömer b. Abdülaziz\'e kadar sürdüğünü genelde kabul eder; "altmış" sayısını ise belirli bir klasik Sünni kaynaktan doğrulayamadık. Uygulamanın her yerde ve her Cuma yapılıp yapılmadığı da tartışmalıdır.' },
    },
    {
      title: { tr: 'Sövmenin kapsamı' },
      shia: { tr: 'Şii anlatıda sövme Şam, Kûfe, Basra ve Medine\'yi kapsayan yaygın bir minber uygulamasıdır ve itiraz edenler cezalandırılmıştır (Hucr, Amr b. Hamık).' },
      sunni: { tr: 'Sünni anlatımda örnekler çoğunlukla Kûfe valileri (Muğîre, Ziyâd) ve Mervân\'ın Medine valiliği üzerinden verilir; Hicaz ve Mısır\'da uygulamanın aynı ölçüde olup olmadığı belirsizdir.' },
    },
    {
      title: { tr: 'Hucr b. Adî\'nin öldürülmesi' },
      shia: { tr: 'Hucr, Hz. Ali\'ye sövmeyi reddettiği için şehit edilmiştir; mezarı ziyaret edilen bir türbe olmuştur.' },
      sunni: { tr: 'Taberî ve diğer tarihçiler Hucr\'un Ziyâd\'a başkaldırı sayılan davranışlarını da anar; Muaviye "toplum yararı ve şahitler" diye kendini savunmuş, Âişe ve bazı sahabiler yine de bu öldürmeyi eleştirmiştir. Hucr\'un sahabi olup olmadığı da ihtilaflıdır (İbn Sa\'d tabiîn, Zehebî sahabî).' },
    },
    {
      title: { tr: 'Ömer b. Abdülaziz\'in yerine koyduğu ayet' },
      shia: { tr: 'Şii anlatılarda Nahl 90 sövmenin yerine okutulan ayet olarak geçer; WikiShia ise yalnız yasaklamayı İbn Haldun\'a dayandırır.' },
      sunni: { tr: 'Nahl 90\'ın hutbede okutulması yaygın anlatımdır; bazı aktarımlarda başka ayetlerin (örneğin Haşr suresi) de anıldığı söylenir. Hangi ayetin ilk kez ne zaman okutulduğu bu çalışmada birincil metinden doğrulanmadı.' },
    },
  ],
  questions: [
    { tr: 'Peygamber "Ali\'yi seven beni sever" demişken, yaklaşık altmış yıl boyunca minberlerde ona sövülmesi sizce neyi gösterir?' },
    { tr: 'Müslim 2404\'te Sa\'d, Muaviye\'ye Peygamber\'in Hz. Ali hakkındaki üç sözünü sayıyor. Böyle bir söz sahibi sahabinin tavrı, o dönemde başkalarına örnek olabilir miydi sizce?' },
    { tr: 'Hz. Ali, Sıffin\'de bile kendi askerlerinin karşı tarafa sövmesini yasakladı (Dîneverî). Buna rağmen onun adına minberlerde sövülmesi sizce nasıl açıklanır?' },
    { tr: 'Hucr b. Adî ve arkadaşları sövmeyi reddettikleri için öldürüldü. Bir ibadet mekânında haksızlığa karşı çıkan birini cezalandırmak, toplumun adalet anlayışına ne yapar sizce?' },
    { tr: 'Ömer b. Abdülaziz sövmeyi kaldırıp adaleti ve iyiliği emreden Nahl 90\'ı okuttu. Uygulamanın bir halife tarafından kaldırılması, onun doğru olmadığının kabulü sayılır mı sizce?' },
  ],
  summary: { tr: 'Müslim 2404 ve TDV gibi Sünni kaynaklar da Emevi döneminde Hz. Ali\'ye sövme uygulamasını ve Hucr b. Adî\'nin Merc Azra\'da (51 H) öldürülmesini kaydeder; Şii kaynaklarında bu, Muaviye\'nin emriyle yaklaşık altmış yıl süren bir gelenek olarak anlatılır, Ömer b. Abdülaziz ise onu kaldırmıştır.' },
};

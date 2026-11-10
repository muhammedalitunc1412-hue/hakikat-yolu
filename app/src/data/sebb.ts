import type { HistEvent } from '../types';

// Araştırma notu: Bu oturumda doğrudan okunabilen: Müslim 2404 (tohed), TDV "Hucr b. Adî" ve "Ömer b. Abdülaziz" maddeleri, WikiShia "Cursing Imam Ali" (dipnotları). Birincil kitaplar (Taberî, İbn Esîr, Bidâye, Iqd) okunmadı; ilgili kayıtlar status:'check' olarak işaretlidir.
export const sebb: HistEvent = {
  id: 'sebb',
  date: { tr: '41 H sonrası - 99-101 H (yaklaşık 661-720)', en: 'After 41 AH - 99-101 AH (c. 661-720)' },
  title: { tr: 'Minberlerde Hz. Ali\'ye sövme geleneği (sebb) ve Hucr b. Adî', en: 'The practice of cursing Hz. Ali from the pulpits (sabb) and Hujr b. Adi' },
  hook: { tr: 'Minberlerde Hz. Ali\'ye sövüldü; sövmeyi reddeden Hucr b. Adî öldürüldü.', en: 'The Prophet had said that loving Hz. Ali is loving him; why was Hz. Ali cursed from Friday pulpits for years, and why were objectors killed?' },
  scenes: [
    {
      text: { tr: '**Hz. Hasan**\'ın sulhundan sonra, hicretin 41. yılından itibaren, Emevi topraklarındaki minberlerde **Hz. Ali**\'ye ==lanet== okunmaya başlandı. Cuma hutbeleri, Peygamber\'in amcasının oğluna ve damadına sövülerek açılıyordu. Bu uygulama, şehirlerin en büyük camilerinde, kalabalık cemaatlerin önünde yapılıyordu. Peygamber, "Ali\'yi seven beni sevmiş, Ali\'ye buğzeden bana buğzetmiş olur" demişti. Ama Emevi yönetimi, ==Ehl-i Beyt==\'e duyulan sevgiyi suç saymaya başlamıştı. Hz. Ali\'yi sevenler her cuma, en sevdikleri insana edilen hakaretleri sessizce dinlemek zorunda kaldı.' },
      cites: [{ side: 'shia', i: 1 }, { side: 'sunni', i: 1 }],
      art: { bg: 'city', props: ['minbar', 'flags'], actors: [{ kind: 'crowd', x: 28, scale: 7 }, { kind: 'man', x: 70, label: { tr: 'Muaviye' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Kûfe, Hz. Ali\'nin halifelik yıllarındaki başkentiydi ve onu sevenlerin en kalabalık olduğu şehirdi. **Muaviye**, Kûfe valisi **Muğîre b. Şu\'be**\'ye Hz. Ali\'yi kötülemeyi sürdürmesini emretti. Muğîre de hutbelerinde hem Hz. Ali\'ye hem de onu sevenlere sövdürdü. Muğîre\'den sonra Kûfe\'ye vali olan **Ziyâd** aynı zulmü daha da sert bir şekilde devam ettirdi. Valiler, bu laneti minberlerden bütün ümmete duyurdu. Cuma namazına gelen cemaat, amin diyeceği yerde Peygamber\'in en yakınına okunan bir laneti duyuyordu.' },
      cites: [{ side: 'sunni', i: 3 }, { side: 'shia', i: 0 }],
      art: { bg: 'city', props: ['minbar'], actors: [{ kind: 'man', x: 34, pose: 'raise', label: { tr: 'Muğîre' } }, { kind: 'crowd', x: 68, scale: 6 }] },
      by: 'both',
    },
    {
      text: { tr: 'Bir gün **Muaviye**, sahabe **Sa\'d b. Ebi Vakkas**\'a sordu: "Seni Ebu Turab\'a sövmekten alıkoyan nedir?" Ebu Turab, Peygamber\'in Hz. Ali\'ye verdiği sevimli bir lakaptı. Sa\'d, Peygamber\'in Hz. Ali hakkında söylediği üç sözü hatırlattı. Birincisi, Tebük\'te söylenen Menzile hadisiydi. İkincisi, Hayber\'de sancağın Allah\'ı ve Resulünü seven kişiye verilmesiydi. Üçüncüsü ise Mübahele günü Peygamber\'in Hz. Ali\'yi ve ailesini yanına almasıydı. Sa\'d, bu sözleri duyduğu için Hz. Ali\'ye asla sövmeyeceğini söyledi. Bu konuşma Müslim\'de geçer.' },
      art: { bg: 'interior', props: ['scroll'], actors: [{ kind: 'man', x: 28, label: { tr: 'Sa\'d b. Ebî Vakkâs' } }, { kind: 'man', x: 64, label: { tr: 'Muaviye' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Rivayetlere göre **Muaviye**, bütün valilerine bir genelge gönderdi. Genelge, valilere yazılan resmî emirdir. Bu emirde Hz. Ali\'ye sövülmesini, onu öven ve sevenlerin cezalandırılmasını istedi. Hz. Ali\'nin faziletlerini anlatanlar devletin düşmanı ilan edildi. Ehl-i Beyt\'i sevenler, sevgilerini gizlemek zorunda kaldı. Evlerde bile Hz. Ali\'nin adı fısıltıyla anılır oldu. Peygamber\'in ailesine duyulan sevgi, Emevi topraklarında can pahasına taşınan bir sırra dönüştü.' },
      cites: [{ side: 'shia', i: 0 }],
      art: { bg: 'interior', props: ['scroll'], actors: [{ kind: 'man', x: 40, pose: 'sit', label: { tr: 'Muaviye' } }, { kind: 'crowd', x: 72, scale: 4 }] },
      by: 'shia',
    },
    {
      text: { tr: 'Ehl-i Beyt rivayetlerine göre Peygamber\'in eşi **Ümmü Seleme**, bu laneti duyunca Muaviye\'ye ve valilerine bir mektup yazdı. Mektubunda Peygamber\'in şu sözünü hatırlattı: "Ali\'ye söven bana sövmüş olur." Yani minberlerde Hz. Ali\'ye okunan lanet, aslında Peygamber\'in kendisine dokunuyordu. Ümmü Seleme, Peygamber\'in hanımlarından biri olarak bu konuda konuşmayı görev bildi. Ama Muaviye bu uyarıya aldırmadı. Mektup okundu, ama hutbelerdeki lanet değişmedi.' },
      art: { bg: 'interior', props: ['scroll'], actors: [{ kind: 'woman', x: 36, pose: 'sit', label: { tr: 'Ümmü Seleme' } }, { kind: 'man', x: 68, label: { tr: 'Muaviye' } }] },
      by: 'shia',
    },
    {
      text: { tr: 'Kûfe\'de **Hucr b. Adî**, Cemel ve Sıffin\'de Hz. Ali\'nin safında savaşmış yiğit bir komutandı. Bir cuma günü vali Muğîre hutbede **Hz. Ali**\'yi kötülerken Hucr dayanamadı ve ayağa kalktı. Hz. Ali\'nin faziletinin, onu kötüleyenlerden çok daha üstün olduğunu yüksek sesle söyledi. Muğîre\'den sonra Kûfe\'ye vali olan **Ziyâd**, Hucr\'u yakalattı. Hucr, on iki kadar arkadaşıyla birlikte Şam yoluna çıkarıldı. Tek suçları, minberden okunan laneti kabul etmemekti.' },
      art: { bg: 'city', props: ['minbar'], actors: [{ kind: 'man', x: 30, pose: 'raise', label: { tr: 'Hucr b. Adî' } }, { kind: 'crowd', x: 66, scale: 6 }] },
      by: 'both',
    },
    {
      text: { tr: 'Şam\'a götürülen **Hucr** ve arkadaşlarından, Hz. Ali\'ye sövmeleri ve ondan uzaklaştıklarını söylemeleri istendi. Hucr ve onunla birlikte direnenler bunu reddetti. Hicretin 51. yılında, Şam yolundaki **Mercü Azra** denen yerde ==katledildiler.== Hucr öldürülmeden önce izin isteyip iki rekât namaz kıldı. Namazdan sonra şehit olacağını bildiğini söyledi. **Muaviye**, kendisine bu katliamdan dolayı itiraz edenlere karşı bu kanı savundu. Hucr ve arkadaşları, Hz. Ali\'ye lanet etmeyi reddettikleri için öldürülmüştü. Hucr\'un son ibadeti, bu iki rekât namaz oldu.' },
      cites: [{ side: 'sunni', i: 1 }],
      art: { bg: 'dune-dusk', props: ['swords'], actors: [{ kind: 'man', x: 34, label: { tr: 'Hucr b. Adî' } }, { kind: 'crowd', x: 70, scale: 5 }] },
      by: 'both',
    },
    {
      text: { tr: 'Ehl-i Beyt rivayetlerine göre minberlerdeki bu lanet yaklaşık altmış yıl sürdü. Hicretin 41. yılında başlayan uygulama, 99-101 yıllarına kadar devam etti. Bu süre kesin bir sayı olarak değil, yaklaşık bir hesap olarak verilir. Ömer b. Abdülaziz bu uygulamayı kaldırana kadar her cuma, **Hz. Ali**\'nin adı minberlerde bir hakaret gibi anıldı. Bu yıllarda doğup büyüyen çocuklar, Peygamber\'in en yakınına okunan laneti cuma namazlarında dinleyerek yetişti. Bir nesil, Hz. Ali\'yi bu laneti işiterek tanıdı.' },
      art: { bg: 'city', props: ['minbar', 'sun'], actors: [{ kind: 'crowd', x: 30, scale: 7 }, { kind: 'man', x: 70, label: { tr: 'Hatip' } }] },
      by: 'shia',
    },
    {
      text: { tr: '**Ömer b. Abdülaziz** halife olunca bu laneti kaldırdı. Rivayetlere göre bütün beldelere yazı gönderip uygulamanın durdurulmasını emretti. Hutbelerde lanetin yerine Nahl Suresi\'nin 90. ayeti okunmaya başlandı: "Allah adaleti, iyiliği ve yakınlara yardım etmeyi emreder. Hayâsızlığı, kötülüğü ve zulmü yasaklar." Altmış yıla yakın süren bu zulüm böylece sona erdi. Minberlerde artık Hz. Ali\'ye lanet okunmuyordu. Ama yılların açtığı yara kolayca kapanmadı ve Ehl-i Beyt\'i sevenler o yılları hiçbir zaman unutmadı.' },
      art: { bg: 'dawn', props: ['minbar', 'sun'], actors: [{ kind: 'man', x: 40, pose: 'raise', label: { tr: 'Ömer b. Abdülaziz' } }, { kind: 'crowd', x: 72, scale: 6 }] },
      by: 'both',
    },
  ],
  sunni: [
    { book: 'Müslim, Sahih', ref: 'No. 2404 (Fezâilü\'s-sahâbe, Hz. Ali\'nin faziletleri); Şâmile no. 6220', says: { tr: 'Âmir b. Sa\'d\'ın babası Sa\'d b. Ebî Vakkâs\'tan: Muaviye, Sa\'d\'a Ebû Turab\'a (Hz. Ali) neden sövmediğini sordu; Sa\'d, Peygamber\'in Hz. Ali hakkındaki üç sözünü sayarak sövmeyeceğini belirtti. Hz. Ali hakkında "Menzile" lafzı bu rivayette de geçer.' }, grade: { tr: 'Sahih' }, url: 'https://en.tohed.com/hadith/muslim/6220', status: 'verified' },
    { book: 'TDV İslâm Ansiklopedisi, "Hucr b. Adî" (Nebi Bozkurt)', ref: 'Madde (ikincil Sünni/akademik)', says: { tr: 'Muğîre b. Şu\'be\'nin Muaviye\'nin tavsiyesine uyarak cuma hutbelerinde Hz. Ali ve taraftarlarına sövmesi; Hucr\'un tepkisi; Ziyâd\'ın tutuklaması; Hz. Ali\'ye sövmeyi reddedenlerin Merc Azra\'da idamı (ö. 51/671); Âişe\'nin yadırgaması.' }, url: 'https://islamansiklopedisi.org.tr/hucr-b-adi', status: 'verified' },
    { book: 'TDV İslâm Ansiklopedisi, "Ömer b. Abdülazîz" (İsmail Yiğit)', ref: 'Madde (ikincil)', says: { tr: 'Ömer b. Abdülaziz hutbelerde Hz. Ali\'ye sövme uygulamasına son verdi; Fedek\'i Ehl-i Beyt\'e iade etti. Nahl 90 ayetinden söz etmez.' }, url: 'https://islamansiklopedisi.org.tr/omer-b-abdulaziz', status: 'verified' },
    { book: 'Taberî, Târîhu\'r-Rusül ve\'l-Mülûk', ref: 'cilt 5, s. 253 (WikiShia dipnotu 12-13); Hucr olayı 51. yıl (Leiden baskısı; kitap okunmadı)', says: { tr: 'Muaviye\'nin Muğîre\'ye Hz. Ali\'yi kötülemesi ve Hz. Osman\'ı övmesi yönündeki tavsiyesi; Hucr b. Adî olayı.' }, status: 'check' },
    { book: 'İbnü\'l-Esîr, el-Kâmil fi\'t-Târîh', ref: '41-51. yıl olayları (cilt/sayfa kontrol edilecek)', says: { tr: 'Muğîre ve Ziyâd dönemindeki sövme ve Hucr b. Adî\'nin öldürülmesi anlatımı beklenir; okunmadı.' }, status: 'check' },
    { book: 'Zehebî, Târîhu\'l-İslâm', ref: 'cilt 5, s. 231 (WikiShia dipnotu)', says: { tr: 'Mervân\'ın Medine valiliği sırasında Hz. Ali\'ye sövmesi ile ilgili aktarım (WikiShia\'nın Sünni tarihçi olarak andığı kaynak). Doğrudan okunmadı.' }, status: 'check' },
    { book: 'Ahmed b. Hanbel, Müsned; Hâkim, el-Müstedrek', ref: 'Ümmü Seleme rivayeti: "Kim Hz. Ali\'ye söverse bana sövmüştür" (hadis numarası/cilt kontrol edilecek)', says: { tr: 'Ümmü Seleme\'den, Hz. Ali\'ye sövmenin Peygamber\'e sövmek sayıldığı rivayeti. WikiShia bunu İbn Asâkir (Târîhu Dımaşk 42/533) ile verir; Müsned ve Müstedrek numaraları kontrol edilmedi.' }, status: 'check' },
    { book: 'İbn Abdirabbih, el-Ikdü\'l-Ferîd', ref: 'cilt 3, s. 300 (yalnız bir Şii savunma sitesinin dipnotu; kitap okunmadı)', says: { tr: 'Ümmü Seleme\'nin Muaviye\'ye yazdığı iddia edilen mektup: "Minberlerinizde Allah\'a ve Resulüne sövüyorsunuz." DOĞRULANMADI: sayfa ve lafız kitaptan teyit edilmedi.' }, status: 'check' },
    { book: 'İbn Haldun, Târîh', ref: 'cilt 3, s. 94 (WikiShia dipnotu 9; ikincil aktarım)', says: { tr: 'Ömer b. Abdülaziz\'in bütün İslam beldelerine yazarak lanetin durdurulmasını emrettiği.' }, status: 'check' },
    { book: 'İbn Kesîr, el-Bidâye ve\'n-Nihâye; Suyûtî, Târîhu\'l-Hulefâ', ref: 'Ömer b. Abdülaziz bölümü (cilt/sayfa kontrol edilecek)', says: { tr: 'Sövmenin yerine Nahl 90\'ın okutulması yaygın anlatımdır, ancak bu oturumda metin bu iki kitaptan doğrulanamadı: DOĞRULANMADI.' }, status: 'check' },
    { book: 'İbn Hacer, Fethü\'l-Bârî ve İsâbe', ref: 'cilt/sayfa kontrol edilecek (İsâbe c.6 Hucr maddesi)', says: { tr: 'Sövmenin minberlerde alışkanlık olduğu ve Hucr\'un konumu hakkında aktarımlar; ikincil aktarımla bilinir, okunmadı.' }, status: 'check' },
  ],
  shia: [
    { book: 'İbn Ebi\'l-Hadîd, Şerhu Nehci\'l-Belâğa (Medâinî\'den)', ref: 'cilt 4, s. 56-57 civarı (sayı kontrol edilecek)', says: { tr: 'Muaviye\'nin valilerine yazdığı genelgeler: Hz. Ali\'nin faziletlerini anlatanların cezalandırılması, hutbelerde ona sövülmesi. Okunmadı; sayfa belirsiz.' }, status: 'check' },
    { book: 'WikiShia, Cursing Imam Ali', ref: 'Madde, dipnot 9-13, 16 (ikincil Şii yayın)', says: { tr: 'Uygulamanın yaklaşık altmış yıl sürdüğü (dipnotsuz cümle), Ömer b. Abdülaziz\'in yasaklaması (İbn Haldun c.3 s.94), Muğîre\'nin dokuz yıl valilik boyunca sövmesi (Belâzurî, Ensâb c.5 s.243), Ümmü Seleme hadisi (İbn Tâvûs; İbn Asâkir 42/533), Mecliskî Biharü\'l-Envâr 39/311-330.' }, url: 'https://en.wikishia.net/view/Cursing_Imam_Ali', status: 'verified' },
    { book: 'Dîneverî, el-Ahbârü\'t-Tıvâl', ref: 's. 165 (WikiShia dipnotu 22)', says: { tr: 'Sıffin\'de Hucr ve Amr b. Hamık Şam halkına sövünce Hz. Ali\'nin "sövmenizi sevmem" diyerek yasakladığı; Hz. Ali sövmeyi kendi tarafında da hoş görmezdi.' }, status: 'check' },
    { book: 'Ebü\'l-Ferec el-İsfahânî, Makâtilü\'t-Tâlibiyyîn; Şeyh Müfîd, el-İrşâd; Mes\'ûdî, Mürûcü\'z-Zeheb', ref: 'Hucr b. Adî ve sövme bölümleri (cilt/sayfa kontrol edilecek)', says: { tr: 'Bu kaynakların Hucr olayını ve sövmeyi anlattığı beklenir; bu oturumda okunmadı.' }, status: 'check' },
  ],
  disputes: [
    {
      title: { tr: 'Sövme doğrudan bir emir miydi?' },
      shia: { tr: 'Minberlerde Hz. Ali\'ye sövüldüğü iki gelenekte de anlatılır. Şii kaynaklar bunu Muaviye\'nin valilerine yazdığı genelgelere bağlar.' },
      sunni: { tr: 'Minberlerde Hz. Ali\'ye sövüldüğü iki gelenekte de anlatılır. Taberî bunu Muğîre\'ye bir tavsiye olarak anar; bazı şârihler Müslim 2404\'ü emir değil soru diye okur.' },
    },
    {
      title: { tr: 'Gelenek kaç yıl sürdü?' },
      shia: { tr: 'Uygulamanın Ömer b. Abdülaziz\'e kadar sürdüğü kabul edilir. "Yaklaşık altmış yıl" ifadesi Şii yayınlarda geçer ve dipnotsuzdur.' },
      sunni: { tr: 'Uygulamanın Ömer b. Abdülaziz\'e kadar sürdüğü kabul edilir. "Altmış" sayısı klasik bir Sünni metinden doğrulanamamıştır; her Cuma her yerde yapıldığı da tartışılır.' },
    },
    {
      title: { tr: 'Sövme hangi şehirlere yayıldı?' },
      shia: { tr: 'Sövmenin Kûfe\'de uygulandığı ortaktır. Şii anlatıda bu, Şam, Basra ve Medine\'yi de kapsar; itiraz edenler cezalandırılmıştır.' },
      sunni: { tr: 'Sövmenin Kûfe\'de uygulandığı ortaktır. Sünni örnekler daha çok Muğîre, Ziyâd ve Mervân üzerinden verilir; Hicaz ve Mısır\'da aynı ölçüde olduğu belirsizdir.' },
    },
    {
      title: { tr: 'Hucr neden öldürüldü?' },
      shia: { tr: 'Hucr\'un Mercü Azra\'da öldürüldüğü kaynaklarda ortaktır. Şii anlatıda o, Hz. Ali\'ye sövmeyi reddettiği için şehittir.' },
      sunni: { tr: 'Hucr\'un Mercü Azra\'da öldürüldüğü kaynaklarda ortaktır. Tarihçiler onun Ziyâd\'a başkaldırı sayılan davranışlarını da anar; Âişe bu öldürmeyi eleştirmiştir.' },
    },
    {
      title: { tr: 'Ömer b. Abdülaziz\'in okuttuğu ayet' },
      shia: { tr: 'Ömer b. Abdülaziz\'in sövmeyi kaldırdığı iki gelenekte de anlatılır. Nahl 90, Şii anlatılarda bunun yerine okutulan ayet diye geçer.' },
      sunni: { tr: 'Ömer b. Abdülaziz\'in sövmeyi kaldırdığı iki gelenekte de anlatılır. Nahl 90\'ın okutulması yaygın bir anlatımdır; hangi ayetin ilk ne zaman okunduğu birincil metinden doğrulanmamıştır.' },
    },
  ],
  questions: [
    { tr: 'Hz. Ali\'ye sövmenin Peygamber\'e dokunduğu rivayet edilir. Yıllarca minberlerde ona sövülmesi, Ehl-i Beyt sevgisi hakkında size ne düşündürüyor?' },
    { tr: 'Sa\'d, soru karşısında Peygamber\'in Hz. Ali hakkındaki üç sözünü saydı. Onun bu sözleri hatırlatması size ne söylüyor?' },
    { tr: 'Hz. Ali, Sıffin\'de kendi askerlerinin karşı tarafa sövmesini yasaklamıştı. Buna rağmen onun adına minberlerde sövülmesi size ne düşündürüyor?' },
    { tr: 'Hucr ve arkadaşları sövmeyi reddettikleri için öldürüldü. Hutbede haksızlığa karşı duran bir insanın hâli size ne söylüyor?' },
    { tr: 'Ömer b. Abdülaziz sövmeyi kaldırıp hutbede adalet ayetini okuttu. Bu değişiklik, o sözlerin ağırlığını size nasıl gösteriyor?' },
  ],
  summary: { tr: 'Emevi döneminde Cuma hutbelerinde Hz. Ali\'ye sövüldü. Sövmeyi reddeden Hucr b. Adî, 51 H\'de Mercü Azra\'da öldürüldü. Ömer b. Abdülaziz uygulamayı kaldırdı. Şii anlatıda bu, yaklaşık altmış yıl süren ağır bir haksızlıktır.' },
};

import type { HistEvent } from '../types';

// Kaynak: TDV İslâm Ansiklopedisi (Şîa, Zeydiyye, İsmâiliyye, Hâricîler, Mürcie, Ehl-i Sünnet) ve WikiShia sayfaları bu oturumda okundu ('verified' = sayfa okundu, birincil kitap cilt/sayfası değil).
// Birincil kitaplar (Süyûtî, İbn Asâkir, Kuleynî, Müfid vb.) doğrudan okunmadı; 'check'. Nurlu figür yalnız Hz. Peygamber, Ali, Fatıma, Hasan, Hüseyin; diğerleri 'man'/'crowd' + label.
export const mezhepler: HistEvent = {
  id: 'mezhepler',
  date: { tr: '11-329 H (632-941); mezheplerin teşekkülü 1.-4. yüzyıl H.', en: '11-329 AH (632-941)' },
  title: { tr: 'Mezheplerin ortaya çıkışı', en: 'The emergence of the sects and schools' },
  hook: { tr: 'Tek ümmet, siyasi ayrılıklardan ilim halkalarına ve fıkıh ekollerine nasıl yürüdü?', en: 'How did one community branch into different schools, from political disputes to law and theology?' },
  scenes: [
    {
      text: { tr: 'Şii kaynaklarına göre "Şîatü Alî", yani Hz. Ali\'nin taraftarları, daha Peygamber\'in hayattayken ortaya çıkmıştı. Bu kaynaklar, Hz. Ali\'ye duyulan bu bağlılığın Peygamber\'in kendi yönlendirmesiyle oluştuğunu söyler ve onu Gadir Hum gibi olaylarla ilişkilendirir. Arapçada "Şîa" kelimesi taraftar, bir kişinin yanında duranlar demektir. Zamanla bu kelime bir terime dönüştü. Peygamber\'den sonra ümmetin önderliğinin Hz. Ali\'ye ve onun soyundan gelen imamlara ait olduğunu savunanlara Şia denmeye başlandı. Yani Şia, en başından beri bir kişinin, Hz. Ali\'nin etrafında toplanan insanların adıdır.' },
      art: { bg: 'dune-day', props: ['sun'], actors: [{ kind: 'prophet', x: 38, label: { tr: 'Hz. Peygamber' } }, { kind: 'ali', x: 62, label: { tr: 'Hz. Ali' } }] },
      by: 'partial',
      cites: [{ side: 'sunni', i: 3 }],
    },
    {
      text: { tr: 'Beyyine Suresi\'nin 7. ayeti, iman edip salih amel işleyenlerin yaratılmışların en hayırlısı olduğunu söyler. Bir rivayete göre bu ayet indiğinde Peygamber, Hz. Ali\'ye dönüp şöyle dedi: "Bu, sen ve senin Şian\'dır." Şii kaynakları bu rivayeti, "Şia" kelimesinin daha Peygamber döneminde Hz. Ali\'nin taraftarları için kullanıldığının bir delili olarak görür. Rivayetin sıhhati âlimler arasında tartışmalıdır. Ama Şiiler için bu söz, Peygamber\'in Hz. Ali\'yi sevenleri kendi ağzıyla müjdelediği, gönüllerine en yakın hadislerden biridir.' },
      art: { bg: 'interior', props: ['scroll'], actors: [{ kind: 'prophet', x: 36, label: { tr: 'Hz. Peygamber' } }, { kind: 'ali', x: 64, label: { tr: 'Hz. Ali' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Peygamber\'in vefatından sonra Sakife\'de Ebû Bekir halife seçildi. **Hz. Ali** ise biat etmeyi geciktirdi. Bu zor günlerde bazı sahabeler Hz. Ali\'nin yanından ayrılmadı. **Selmân-ı Fârisî**, **Ebû Zer**, **Mikdâd** ve **Ammâr**, Hz. Ali\'nin taraftarları arasında anılan ilk isimlerdir. Bazı tarihçiler onların bu tutumunu siyasi bir tercih olarak yorumlar. Şii anlatısı ise bu sahabeleri, Peygamber\'in imamet konusundaki vasiyetine sadık kalanlar olarak görür. Onlar, Sakife\'de verilen karara değil, Gadir\'de duydukları söze bağlı kaldılar.' },
      art: { bg: 'city', actors: [{ kind: 'man', x: 28, label: { tr: 'Selman' } }, { kind: 'man', x: 46, label: { tr: 'Ebu Zer' } }, { kind: 'man', x: 62, label: { tr: 'Mikdad' } }, { kind: 'man', x: 78, label: { tr: 'Ammar' } }, { kind: 'ali', x: 12, label: { tr: 'Hz. Ali' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Cemel ve Sıffin savaşları, ümmetin siyasi birliğini derinden böldü. Sıffin\'de Muâviye\'nin ordusu Kur\'an sayfalarını mızraklara takıp hakem istedi. Hz. Ali\'nin ordusundan bir grup, onun itirazına rağmen hakemliği kabul etti. Ama sonra aynı grup, "Hüküm ancak Allah\'ındır" diyerek Hz. Ali\'den ayrıldı ve Harûrâ denen yere çekildi. Bunlar ilk Hâricîlerdi ve Muhakkime adıyla da anıldılar. Hz. Ali, 658 yılında Nehrevan\'da onlarla savaştı. Hâricîler, büyük günah işleyen herkesi kâfir sayıyordu. Buna tepki olarak, insanların akıbetini Allah\'a bırakan Mürcie fırkası doğdu. Bu karışık yıllarda Hz. Ali\'ye bağlı kalanlar ise Şia\'nın çekirdeğini oluşturdu.' },
      art: { bg: 'battle', props: ['swords', 'flags'], actors: [{ kind: 'ali', x: 30, label: { tr: 'Hz. Ali' } }, { kind: 'crowd', x: 62, scale: 5, label: { tr: 'Hakem karşıtı grup' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Kerbelâ\'da Hz. Hüseyin\'in şehadeti, Şiileri derinden sarstı ve onları daha da birbirine bağladı. Kûfe\'de **Muhtâr es-Sekafî**, Kerbelâ şehitlerinin intikamını almak için hicretin 66. yılında, yani 685\'te ayaklandı. Yaklaşık on sekiz ay Kûfe\'yi yönetti ve bu sürede Kerbelâ\'da Hz. Hüseyin\'e kılıç çekenlerin birçoğunu cezalandırdı. 67 yılında öldürüldü. Muhtâr\'ın, Hz. Ali\'nin oğlu Muhammed b. el-Hanefiyye adına çağrı yaptığı anlatılır ve bu çağrı Keysâniyye fırkasının doğuşuna bağlanır. Şii kaynaklarında Muhtâr\'a bakış farklıdır. Çoğu onu olumlu anar, bazıları ise susmayı tercih eder.' },
      art: { bg: 'city', props: ['swords', 'flags'], actors: [{ kind: 'man', x: 34, label: { tr: 'Muhtâr es-Sekafî' } }, { kind: 'crowd', x: 68, scale: 5 }] },
      by: 'both',
    },
    {
      text: { tr: 'Hz. Hüseyin\'in torunu **Zeyd b. Ali**, hicretin 122. yılında, yani 740\'ta, Emevi halifesi Hişâm\'a karşı Kûfe\'de ayaklandı ve şehit edildi. Zeyd\'e göre imamet, Hz. Ali\'nin soyundan gelen en faziletli ve zulme karşı kılıç çeken kişiye aitti. Ebû Bekir ile Ömer\'in halifeliğini de meşru sayıyordu. Onun yolundan gidenler Zeydiyye adıyla ayrı bir kol oluşturdu ve sonraki yüzyıllarda Taberistan\'da ve Yemen\'de devletler kurdu. İmâmî Şia ise imametin ayaklanmayla değil, nass ile, yani Allah\'ın ve önceki imamın açık bildirimiyle belirlendiğine inanır. İki kol bu noktada birbirinden ayrıldı.' },
      art: { bg: 'dune-dusk', props: ['swords', 'flags'], actors: [{ kind: 'man', x: 36, label: { tr: 'Zeyd b. Ali' } }, { kind: 'crowd', x: 68, scale: 5 }] },
      by: 'both',
    },
    {
      text: { tr: 'Emevi iktidarı zayıflarken ve Abbasiler henüz gücünü tam kurmamışken, **Hz. Muhammed Bâkır** ve oğlu **Hz. Ca\'fer-i Sâdık** Medine\'de geniş bir ilim halkası kurdu. Şeyh Tûsî\'nin Ricâl adlı eserinde Hz. Sâdık\'tan rivayet eden yaklaşık 3200 kişinin adı geçer. Şeyh Müfid ise bu sayıyı yaklaşık 4000 olarak verir. Bugün Şiilerin takip ettiği Câferî fıkhı, büyük ölçüde onun rivayetlerine dayanır. Dört Yüz Usûl denen ilk hadis derlemeleri de onun öğrencilerine bağlanır. Şii kaynaklarında Mâlik\'in ondan hadis aldığı ve Ebû Hanîfe\'nin onu çağının en bilgin insanı saydığı anlatılır. Sünni anlatım ise bu ilişkiyi hadis alışverişi ve ilmî bir saygı olarak görür.' },
      art: { bg: 'interior', props: ['scroll'], actors: [{ kind: 'man', x: 36, pose: 'sit', label: { tr: 'Hz. Ca\'fer-i Sâdık' } }, { kind: 'crowd', x: 70, scale: 5 }] },
      by: 'partial',
      cites: [{ side: 'sunni', i: 4 }],
    },
    {
      text: { tr: 'Aynı yüzyıllarda Sünni fıkıh ve kelam ekolleri de şekillenmeye başladı. Mezheplerin kurucuları olan Ebû Hanîfe 150\'de, Mâlik 179\'da, Şâfiî 204\'te, Ahmed b. Hanbel ise 241\'de vefat etti. "Ehl-i Sünnet" terimi ancak üçüncü yüzyılda yerleşti. Kelam alanında Eş\'arî ve Mâtürîdî ekolleri doğdu. Akla geniş yer veren Mutezile ile Şia arasında bazı kelam yakınlıkları vardır. Zeydiyye\'nin de Mutezile\'ye yakın olduğu söylenir. Bütün bu ekoller arasındaki temel ayrılık noktaları imamet, halifelik ve hangi hadis kaynaklarına güvenileceği meseleleridir. En derin ayrılık ise Peygamber\'den sonra ümmetin önderinin kim olacağı sorusundadır.' },
      art: { bg: 'city', props: ['scroll'], actors: [{ kind: 'man', x: 22, label: { tr: 'Ebû Hanîfe' } }, { kind: 'man', x: 40, label: { tr: 'Mâlik' } }, { kind: 'man', x: 58, label: { tr: 'Şâfiî' } }, { kind: 'man', x: 76, label: { tr: 'Ahmed b. Hanbel' } }] },
      by: 'sunni',
    },
    {
      text: { tr: 'Hz. Ca\'fer-i Sâdık\'ın büyük oğlu **İsmâil** babasından önce vefat edince, ya da bazılarına göre vefat ettiği sanılınca, imamet konusunda bir ayrılık çıktı. İsmâil\'in imametini savunanlar İsmâiliyye\'yi kurdu ve imameti onun oğlu Muhammed b. İsmâil ile sürdürdü. Sonraki yüzyıllarda Mısır\'da kurulan Fâtımî devleti bu koldan çıktı. Şiilerin çoğunluğu ise **Hz. Musa Kâzım**\'a bağlandı ve bu kol On İki İmam Şiası adını aldı. Hz. Musa Kâzım, Hârûnürreşîd\'in baskısıyla Bağdat\'ta hapsedildi ve 183\'te vefat etti. Şii kaynaklarına göre On İkinci İmam\'ın gaybeti 260\'ta başladı. Küçük gaybet 329\'a kadar sürdü, ardından büyük gaybet başladı. Gaybet ölüm değil, Allah\'ın izniyle bir gizlenmedir.' },
      art: { bg: 'city', props: ['flags'], actors: [{ kind: 'man', x: 30, label: { tr: 'Hz. Musa Kâzım' } }, { kind: 'man', x: 66, label: { tr: 'Hârûnürreşîd' } }] },
      by: 'partial',
      cites: [{ side: 'sunni', i: 5 }],
    },
  ],
  sunni: [
    { book: 'TDV İslâm Ansiklopedisi, "Ehl-i Sünnet"', ref: 'islamansiklopedisi.org.tr/ehl-i-sunnet', says: { tr: 'Terimin 3./9. yüzyılda yerleşmesi; Eş\'arî (ö. 324) ve Mâtürîdî (ö. 333) ekolleri; Hanbelî-selefî hadis çizgisi; Ebû Hanîfe, Mâlik, Şâfiî, Ahmed b. Hanbel.' }, grade: { tr: 'İKİNCİL (ansiklopedi)' }, url: 'https://islamansiklopedisi.org.tr/ehl-i-sunnet', status: 'verified' },
    { book: 'TDV İslâm Ansiklopedisi, "Hâricîler"', ref: 'islamansiklopedisi.org.tr/hariciler', says: { tr: 'Sıffîn hakem olayı, Harûrâ\'ya çekilen Muhakkime, Nehrevan (658).' }, grade: { tr: 'İKİNCİL' }, url: 'https://islamansiklopedisi.org.tr/hariciler', status: 'verified' },
    { book: 'TDV İslâm Ansiklopedisi, "Mürcie"', ref: 'islamansiklopedisi.org.tr/murcie', says: { tr: 'Mürcie\'nin Hâricîlerin tekfirine karşı ortaya çıkışı (yaklaşık 680-694), iman anlayışı, Ebû Hanîfe ile ilişkisi.' }, grade: { tr: 'İKİNCİL' }, url: 'https://islamansiklopedisi.org.tr/murcie', status: 'verified' },
    { book: 'Süyûtî, ed-Dürrü\'l-Mensûr (Beyyine 98:7); İbn Asâkir, Târîhu Dimaşk', ref: 'Beyyine 98:7 tefsiri; cilt/sayfa kontrol edilecek (Ehlulbeyt Kütüphanesi\'ndeki derleme ed-Dürrü\'l-Mensûr II, 259\'u anar)', says: { tr: 'Hz. Ali ve şiasının "hayrü\'l-beriyye" olduğu rivayeti.' }, grade: { tr: 'Sıhhati tartışmalı; kitaplar doğrudan okunmadı. DOĞRULANMADI' }, url: 'https://al-islam.org/ghadir/chains792b.html', status: 'check' },
    { book: 'Zehebî, Siyeru a\'lâmi\'n-nübelâ ve Tezkiretü\'l-huffâz', ref: 'Ca\'fer es-Sâdık maddesi (Siyer cilt 6; sayfa kontrol edilecek)', says: { tr: 'Ebû Hanîfe\'nin "Ca\'fer b. Muhammed\'den daha fakih birini görmedim" dediği aktarılır.' }, status: 'check' },
    { book: 'Şehristânî, el-Milel ve\'n-Nihal', ref: 'İmâmiyye ve İsmâiliyye bölümleri (cilt/sayfa kontrol edilecek)', says: { tr: 'Hz. Ca\'fer-i Sâdık\'tan sonra İsmâil ve Hz. Musa Kâzım etrafındaki ayrılık, İsmâiliyye ve İmâmiyye kolları ile On İkinci İmam\'ın gaybeti inancı aktarılır.' }, status: 'check' },
  ],
  shia: [
    { book: 'TDV İslâm Ansiklopedisi, "Şîa" (Mustafa Öz, İlyas Üzüm, C. 39, s. 111-121)', ref: 'islamansiklopedisi.org.tr/sia', says: { tr: 'Şîa kavramı; Selman, Ebû Zer, Mikdâd, Ammâr; Sakîfe; Cemel, Sıffîn, Kerbelâ; Muhtâr ve Keysâniyye; Zeydiyye, İsmâiliyye, On İki İmam.' }, grade: { tr: 'İKİNCİL (maddenin ilk 100.000 karakteri okundu; Beyyine rivayeti bu bölümde görünmedi)' }, url: 'https://islamansiklopedisi.org.tr/sia', status: 'verified' },
    { book: 'TDV İslâm Ansiklopedisi, "Zeydiyye"', ref: 'islamansiklopedisi.org.tr/zeydiyye', says: { tr: 'Zeyd b. Ali\'nin 122/740 ayaklanması, Halife Ebû Bekir ve Halife Ömer\'in hilafetini meşru sayması, Kasım er-Ressî (ö. 246/860), Taberistan ve Yemen devletleri.' }, grade: { tr: 'İKİNCİL' }, url: 'https://islamansiklopedisi.org.tr/zeydiyye', status: 'verified' },
    { book: 'TDV İslâm Ansiklopedisi, "İsmâiliyye"', ref: 'islamansiklopedisi.org.tr/ismailiyye', says: { tr: 'İsmâil\'in babasından önce ölmesi ve ayrılığın nedenleri; Muhammed b. İsmâil; Fâtımî devleti (909-1171).' }, grade: { tr: 'İKİNCİL' }, url: 'https://islamansiklopedisi.org.tr/ismailiyye', status: 'verified' },
    { book: 'WikiShia, "Al-Mukhtar al-Thaqafi"', ref: 'en.wikishia.net/view/Al-Mukhtar_al-Thaqafi', says: { tr: 'Muhtâr\'ın 14 Rebîülevvel 66 (685) ayaklanması, 14 Ramazan 67\'de (687) ölümü; Keysâniyye bağlantısının tartışmalı olması; Şii âlimlerin farklı tutumları.' }, grade: { tr: 'İKİNCİL (ansiklopedik site)' }, url: 'https://en.wikishia.net/view/Al-Mukhtar_al-Thaqafi', status: 'verified' },
    { book: 'WikiShia, "Imam al-Sadiq (a)"', ref: 'en.wikishia.net/view/Imam_al-Sadiq_(a)', says: { tr: 'Tûsî Ricâl\'inde yaklaşık 3200, Müfid\'e göre 4000 ravi; Dört Yüz Usûl; Câferî mezhebi; Mâlik ve Ebû Hanîfe ile ilişki; Abbasi baskısı; vefat 148/765.' }, grade: { tr: 'İKİNCİL; ravi sayıları Şii kaynaklara dayanır' }, url: 'https://en.wikishia.net/view/Imam_al-Sadiq_(a)', status: 'verified' },
    { book: 'Nevbahtî, Fıraku\'ş-Şîa; Sa\'d b. Abdullah el-Kummî, el-Makâlât ve\'l-fırak; Şeyh Müfid, el-İrşâd', ref: 'TDV Şîa maddesi bibliyografyası; kitaplar okunmadı', says: { tr: 'Şia fırkalarının ayrışması, imamet nassı, İsmâil/Mûsâ meselesi.' }, grade: { tr: 'Şii birincil kaynak; DOĞRULANMADI' }, status: 'check' },
  ],
  disputes: [
    {
      title: { tr: 'Şia ne zaman doğdu?' },
      shia: { tr: 'Hz. Ali\'ye bağlılık her iki anlatıda da sahabe dönemine uzanır. Şii kaynaklarda Şîatü Alî Peygamber döneminde vardır ve Beyyine 98:7 rivayeti buna delil sayılır.' },
      sunni: { tr: 'Hz. Ali\'ye bağlılık her iki anlatıda da sahabe dönemine uzanır. Sünni aktarımda terim Sakîfe sonrasında siyasi bir taraftarlık olarak yerleşir; Beyyine rivayetinin sıhhati tartışmalıdır.' },
    },
    {
      title: { tr: 'İmamet: nass mı, seçim mi?' },
      shia: { tr: 'Halifelik ve imamet, her iki geleneğin de cevap aradığı sorudur. Şii inancında bu görev Hz. Ali ve soyundan on iki imama nasla verilmiştir; Zeydiyye ise ayaklanan en faziletli Hz. Ali evladını imam sayar.' },
      sunni: { tr: 'Halifelik ve imamet, her iki geleneğin de cevap aradığı sorudur. Ehl-i Sünnet\'te halife Sakîfe\'de ve sonra şûra ile biatla belirlenir, sahabenin tercihine dayandırılır.' },
    },
    {
      title: { tr: 'Câferî mezhebi ile Sünni mezheplerin ilişkisi' },
      shia: { tr: 'Mâlik ve Ebû Hanîfe\'nin Hz. Ca\'fer-i Sâdık ile ilmî ilişkisi iki kaynakta da anılır. Şii anlatıda ikisi ders halkasından yararlanmıştır; Câferî fıkıh imam rivayetlerine dayanır.' },
      sunni: { tr: 'Mâlik ve Ebû Hanîfe\'nin Hz. Ca\'fer-i Sâdık ile ilmî ilişkisi iki kaynakta da anılır. Sünni aktarımda Mâlik\'in hadis alması ve saygısı kabul edilir; öğrencilik rivayeti ikincil kaynaklara dayanır ve Hz. Ca\'fer-i Sâdık hadiste güvenilir sayılır.' },
    },
    {
      title: { tr: 'İsmâil neden imam olmadı?' },
      shia: { tr: 'İsmâil\'in babasından önce ölmesi, ayrılığın ortak anlatılan başlangıcıdır. İmâmî Şiîler, Hz. Ca\'fer-i Sâdık\'ın Hz. Musa Kâzım\'ı seçtiğini kabul eder.' },
      sunni: { tr: 'İsmâil\'in babasından önce ölmesi, ayrılığın ortak anlatılan başlangıcıdır. Sünni kaynaklar bunu Şii içi bir ayrılık olarak aktarır; TDV ölüm, sağ görüldüğü ve içki iddiasını ayrı rivayetler olarak verir.' },
    },
  ],
  questions: [
    { tr: 'Hz. Ali taraftarlığı hem Peygamber dönemi hem Sakîfe sonrası için anlatılır. Bir kavramın tarihini anlamak için hangi kaynakları yan yana okumak gerekir?' },
    { tr: 'Hâricîler büyük günahı tekfirle, Mürcie ise akıbeti Allah\'a bırakarak cevapladı. Aynı krize iki farklı cevap, topluluğun dengesini nasıl etkiler?' },
    { tr: 'Zeyd b. Ali ayaklanmayı, Hz. Ca\'fer-i Sâdık ilim halkasını seçti. Ehl-i Beyt içindeki bu iki yol, amacı ve yöntemi nasıl ayırır?' },
    { tr: 'Hz. Ca\'fer-i Sâdık\'ın ders halkası hem Şii hem Sünni âlimlerin andığı bir kapıdır. Ortak ilim mirası, sonraki mezhep sınırlarını nasıl yumuşatabilir?' },
    { tr: 'Mezhepler siyasi ayrılıkla başlayıp fıkıh ve kelam ekollerine döndü. Bu yolculukta ilim, topluluğu bir arada tutmaya nasıl yardım etti?' },
  ],
  summary: { tr: 'Ümmetin yolları Sakîfe, Cemel, Sıffîn ve Kerbelâ ile ayrıştı. Ehl-i Beyt çevresinde Zeydiyye, İsmâiliyye ve On İki İmam Şiası oluştu. Diğer çevrede dört fıkıh mezhebi ile Eş\'arî ve Mâtürîdî kelam ekolleri doğdu.' },
};

import type { HistEvent } from '../types';

// Kaynak: TDV İslâm Ansiklopedisi (Şîa, Zeydiyye, İsmâiliyye, Hâricîler, Mürcie, Ehl-i Sünnet) ve WikiShia sayfaları bu oturumda okundu ('verified' = sayfa okundu, birincil kitap cilt/sayfası değil).
// Birincil kitaplar (Süyûtî, İbn Asâkir, Kuleynî, Müfid vb.) doğrudan okunmadı; 'check'. Nurlu figür yalnız Hz. Peygamber, Ali, Fatıma, Hasan, Hüseyin; diğerleri 'man'/'crowd' + label.
export const mezhepler: HistEvent = {
  id: 'mezhepler',
  date: { tr: '11-329 H (632-941); mezheplerin teşekkülü 1.-4. yüzyıl H.', en: '11-329 AH (632-941)' },
  title: { tr: 'Mezheplerin ortaya çıkışı', en: 'The emergence of the sects and schools' },
  hook: { tr: 'Tek ümmet, Sakife\'den Sıffin\'e, oradan ilim halkalarına nasıl ayrıldı? Ca\'ferî çizgi bu yolda nerede durur?', en: 'How did one community branch into different schools, from political disputes to law and theology?' },
  scenes: [
    {
      text: { tr: '«Şîatü Alî», Ali\'nin taraftarları demektir. Şiî kaynaklara göre bu bağlılık daha Hz. Peygamber (s.a.v.) döneminde, onun yönlendirmesiyle oluştu; Gadir-i Hum bu çizgiye bağlanır. TDV, sözcüğün «taraftar» demek olduğunu, terim olarak ise Peygamber\'den sonra başkanlığın Hz. Ali (a.s.) ve soyuna ait olduğunu savunanları anlattığını yazar.' },
      art: { bg: 'dune-day', props: ['sun'], actors: [{ kind: 'prophet', x: 38, label: { tr: 'Hz. Peygamber' } }, { kind: 'ali', x: 62, label: { tr: 'Hz. Ali' } }] },
      by: 'shia',
    },
    {
      text: { tr: 'Hz. Ali\'yi öven bir rivayet Sünni kaynaklarında da geçer: Beyyine 98:7 ("yaratıkların en hayırlısı") ayeti için Peygamber\'in "Bu, sen ve şiandır" dediği aktarılır. Şii kaynaklarında bu, Peygamber döneminde "Şia" teriminin kullanıldığına delil olarak anılır. Rivayetin Süyûtî\'nin ed-Dürrü\'l-Mensûr\'unda ve İbn Asâkir\'de geçtiği belirtilir; ancak rivayetin sıhhati hadis âlimleri arasında tartışmalıdır. Ayet-rivayet ilişkisi ve senetler kitaplardan ayrıca kontrol edilmelidir.' },
      art: { bg: 'interior', props: ['scroll'], actors: [{ kind: 'prophet', x: 36, label: { tr: 'Hz. Peygamber' } }, { kind: 'ali', x: 64, label: { tr: 'Hz. Ali' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Peygamber\'in vefatından sonra Sakîfe\'de Ebû Bekir seçildi, Ali\'nin biati gecikti. TDV, Selmân-ı Fârisî, Ebû Zer, Mikdâd ve Ammâr gibi sahabilerin Ali taraftarları arasında anıldığını belirtir ve Ali taraftarlığının bu siyasi tercihten doğduğunu söyler. Şii kaynaklarında bu sahabiler, imamet konusundaki Peygamber vasiyetine bağlı kalanlar olarak anılır.' },
      art: { bg: 'city', actors: [{ kind: 'man', x: 28, label: { tr: 'Selman' } }, { kind: 'man', x: 46, label: { tr: 'Ebu Zer' } }, { kind: 'man', x: 62, label: { tr: 'Mikdad' } }, { kind: 'man', x: 78, label: { tr: 'Ammar' } }, { kind: 'ali', x: 12, label: { tr: 'Hz. Ali' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Cemel ve Sıffîn savaşları ümmetin siyasi birliğini böldü. Sıffîn\'de Muâviye\'nin ordusu Kur\'an sayfalarını mızraklara bağlayıp hakemliğe çağırınca Ali\'nin ordusundan bir grup, Ali\'nin itirazına rağmen hakemi kabul etti. Sonra "hüküm ancak Allah\'ındır" diyerek ayrılıp Harûrâ\'ya çekildi: ilk Hâricîler (Muhakkime). Ali onlarla Nehrevan\'da (658) savaştı. Hâricîler, büyük günah işleyeni kâfir sayarak karşı çıktı; bunun karşısında kişilerin akıbetini Allah\'a bırakan Mürcie ortaya çıktı (yaklaşık 680-694). Ali\'ye bağlı kalanlar Şia\'yı oluşturdu.' },
      art: { bg: 'battle', props: ['swords', 'flags'], actors: [{ kind: 'ali', x: 30, label: { tr: 'Hz. Ali' } }, { kind: 'crowd', x: 62, scale: 5, label: { tr: 'Hakem karşıtı grup' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Kerbelâ\'da Hz. Hüseyin\'in şehit edilmesi Şia\'yı derinden etkiledi. Kûfe\'de Muhtâr es-Sekafî, Hüseyin\'in katillerinden intikam almak için 66 H.\'de (685) ayaklandı ve yaklaşık 18 ay Kûfe\'yi yönetti; 67\'de öldürüldü. Muhtâr\'ın Muhammed b. el-Hanefiyye adına çağrı yaptığı rivayeti, Keysâniyye adlı grubun doğmasına bağlanır. Şii kaynaklarında Muhtâr\'ın değerlendirmesi farklıdır: çoğu olumlu bakar, bazı âlimler (Meclisî) susmayı tercih eder. Keysâniyye\'nin Muhtâr\'dan mı yoksa onun ölümünden sonra mı doğduğu da tartışmalıdır.' },
      art: { bg: 'city', props: ['swords', 'flags'], actors: [{ kind: 'man', x: 34, label: { tr: 'Muhtâr es-Sekafî' } }, { kind: 'crowd', x: 68, scale: 5 }] },
      by: 'both',
    },
    {
      text: { tr: 'Hz. Hüseyin\'in torunu Zeyd b. Ali, Emevi halifesi Hişâm\'a karşı 122 H.\'de (740) Kûfe\'de ayaklandı ve öldürüldü. Zeyd, imametin Ali soyundan en faziletli ve ayaklanan kişiye ait olduğunu savundu, Ebû Bekir ve Ömer\'in hilafetini de meşru saydı. Bu çizgi Zeydiyye adıyla ayrı bir kol oldu; Taberistan ve Yemen\'de devletler kurdu (TDV: ılımlı bir Şii fırka). İmâmî Şia kaynaklarında ise imametin nasla belirlendiği anlatılır.' },
      art: { bg: 'dune-dusk', props: ['swords', 'flags'], actors: [{ kind: 'man', x: 36, label: { tr: 'Zeyd b. Ali' } }, { kind: 'crowd', x: 68, scale: 5 }] },
      by: 'both',
    },
    {
      text: { tr: 'Emevi iktidarının zayıfladığı, Abbasi iktidarının henüz oturmadığı yıllarda İmam Muhammed el-Bâkır ve İmam Câfer es-Sâdık Medine\'de geniş bir ilim halkası kurdu. Şii kaynaklarına göre Sâdık\'tan Şeyh Tûsî\'nin Ricâl\'inde yaklaşık 3200, Müfid\'e göre yaklaşık 4000 ravi nakleder. Câferî fıkhı büyük ölçüde onun rivayetlerinden oluşur ve Dört Yüz Usûl denen derlemeler öğrencilerine bağlanır. Mâlik\'in ondan hadis aldığı, Ebû Hanîfe\'nin onu çağının en bilgin kişisi saydığı Şii kaynaklarında geçer; Sünni kaynaklarda bu ilişki hadis alışverişi ve ilmî saygı olarak anlatılır.' },
      art: { bg: 'interior', props: ['scroll'], actors: [{ kind: 'man', x: 36, pose: 'sit', label: { tr: 'İmam Câfer es-Sâdık' } }, { kind: 'crowd', x: 70, scale: 5 }] },
      by: 'shia',
    },
    {
      text: { tr: 'Aynı yüzyıllarda Sünni fıkıh ve kelam ekolleri de şekillendi: Ebû Hanîfe (ö. 150), Mâlik (ö. 179), Şâfiî (ö. 204), Ahmed b. Hanbel (ö. 241). "Ehl-i Sünnet" terimi TDV\'ye göre 3./9. yüzyılda yerleşti; kelamda Eş\'arî (ö. 324) ve Mâtürîdî (ö. 333) ekolleri doğdu. Akla geniş yer veren Mutezile ile Şia arasında bazı kelam yakınlıkları vardır (TDV: Zeydiyye Mutezile\'ye yakındır). Mezheplerin temel ayrışması imamet/halifelik ve hadis kaynakları konusundadır.' },
      art: { bg: 'city', props: ['scroll'], actors: [{ kind: 'man', x: 22, label: { tr: 'Ebû Hanîfe' } }, { kind: 'man', x: 40, label: { tr: 'Mâlik' } }, { kind: 'man', x: 58, label: { tr: 'Şâfiî' } }, { kind: 'man', x: 76, label: { tr: 'Ahmed b. Hanbel' } }] },
      by: 'sunni',
    },
    {
      text: { tr: 'İmam Sâdık\'ın büyük oğlu İsmâil\'in babasından önce ölmesi (veya öldü sanılması) üzerine imamet konusu ayrıştı. İsmâil\'in imametini sürdürenler İsmâiliyye\'yi oluşturdu; oğlu Muhammed b. İsmâil ile devam ettiler ve sonraki Fâtımî devleti (909-1171) bu koldan çıktı. Çoğunluk ise İmam Mûsâ el-Kâzım\'a bağlandı: On İki İmam Şiası. İmam Kâzım Hârûnürreşîd\'in baskısıyla Bağdat\'ta tutuklandı, 183\'te (799) öldü. On İkinci İmam\'ın gaybeti Şii kaynaklarına göre 260\'ta başladı (küçük gaybet 260-329; sonra büyük gaybet); bununla On İki İmam Şiası tamamlandı.' },
      art: { bg: 'city', props: ['flags'], actors: [{ kind: 'man', x: 30, label: { tr: 'İmam Mûsâ el-Kâzım' } }, { kind: 'man', x: 66, label: { tr: 'Hârûnürreşîd' } }] },
      by: 'shia',
    },
  ],
  sunni: [
    { book: 'TDV İslâm Ansiklopedisi, "Ehl-i Sünnet"', ref: 'islamansiklopedisi.org.tr/ehl-i-sunnet', says: { tr: 'Terimin 3./9. yüzyılda yerleşmesi; Eş\'arî (ö. 324) ve Mâtürîdî (ö. 333) ekolleri; Hanbelî-selefî hadis çizgisi; Ebû Hanîfe, Mâlik, Şâfiî, Ahmed b. Hanbel.' }, grade: { tr: 'İKİNCİL (ansiklopedi)' }, url: 'https://islamansiklopedisi.org.tr/ehl-i-sunnet', status: 'verified' },
    { book: 'TDV İslâm Ansiklopedisi, "Hâricîler"', ref: 'islamansiklopedisi.org.tr/hariciler', says: { tr: 'Sıffîn hakem olayı, Harûrâ\'ya çekilen Muhakkime, Nehrevan (658).' }, grade: { tr: 'İKİNCİL' }, url: 'https://islamansiklopedisi.org.tr/hariciler', status: 'verified' },
    { book: 'TDV İslâm Ansiklopedisi, "Mürcie"', ref: 'islamansiklopedisi.org.tr/murcie', says: { tr: 'Mürcie\'nin Hâricîlerin tekfirine karşı ortaya çıkışı (yaklaşık 680-694), iman anlayışı, Ebû Hanîfe ile ilişkisi.' }, grade: { tr: 'İKİNCİL' }, url: 'https://islamansiklopedisi.org.tr/murcie', status: 'verified' },
    { book: 'Süyûtî, ed-Dürrü\'l-Mensûr (Beyyine 98:7); İbn Asâkir, Târîhu Dimaşk', ref: 'Beyyine 98:7 tefsiri; cilt/sayfa kontrol edilecek (Ehlulbeyt Kütüphanesi\'ndeki derleme ed-Dürrü\'l-Mensûr II, 259\'u anar)', says: { tr: 'Ali ve şiasının "hayrü\'l-beriyye" olduğu rivayeti.' }, grade: { tr: 'Sıhhati tartışmalı; kitaplar doğrudan okunmadı. DOĞRULANMADI' }, url: 'https://al-islam.org/ghadir/chains792b.html', status: 'check' },
  ],
  shia: [
    { book: 'TDV İslâm Ansiklopedisi, "Şîa" (Mustafa Öz, İlyas Üzüm, C. 39, s. 111-121)', ref: 'islamansiklopedisi.org.tr/sia', says: { tr: 'Şîa kavramı; Selman, Ebû Zer, Mikdâd, Ammâr; Sakîfe; Cemel, Sıffîn, Kerbelâ; Muhtâr ve Keysâniyye; Zeydiyye, İsmâiliyye, On İki İmam.' }, grade: { tr: 'İKİNCİL (maddenin ilk 100.000 karakteri okundu; Beyyine rivayeti bu bölümde görünmedi)' }, url: 'https://islamansiklopedisi.org.tr/sia', status: 'verified' },
    { book: 'TDV İslâm Ansiklopedisi, "Zeydiyye"', ref: 'islamansiklopedisi.org.tr/zeydiyye', says: { tr: 'Zeyd b. Ali\'nin 122/740 ayaklanması, Ebû Bekir ve Ömer\'in hilafetini meşru sayması, Kasım er-Ressî (ö. 246/860), Taberistan ve Yemen devletleri.' }, grade: { tr: 'İKİNCİL' }, url: 'https://islamansiklopedisi.org.tr/zeydiyye', status: 'verified' },
    { book: 'TDV İslâm Ansiklopedisi, "İsmâiliyye"', ref: 'islamansiklopedisi.org.tr/ismailiyye', says: { tr: 'İsmâil\'in babasından önce ölmesi ve ayrılığın nedenleri; Muhammed b. İsmâil; Fâtımî devleti (909-1171).' }, grade: { tr: 'İKİNCİL' }, url: 'https://islamansiklopedisi.org.tr/ismailiyye', status: 'verified' },
    { book: 'WikiShia, "Al-Mukhtar al-Thaqafi"', ref: 'en.wikishia.net/view/Al-Mukhtar_al-Thaqafi', says: { tr: 'Muhtâr\'ın 14 Rebîülevvel 66 (685) ayaklanması, 14 Ramazan 67\'de (687) ölümü; Keysâniyye bağlantısının tartışmalı olması; Şii âlimlerin farklı tutumları.' }, grade: { tr: 'İKİNCİL (ansiklopedik site)' }, url: 'https://en.wikishia.net/view/Al-Mukhtar_al-Thaqafi', status: 'verified' },
    { book: 'WikiShia, "Imam al-Sadiq (a)"', ref: 'en.wikishia.net/view/Imam_al-Sadiq_(a)', says: { tr: 'Tûsî Ricâl\'inde yaklaşık 3200, Müfid\'e göre 4000 ravi; Dört Yüz Usûl; Câferî mezhebi; Mâlik ve Ebû Hanîfe ile ilişki; Abbasi baskısı; vefat 148/765.' }, grade: { tr: 'İKİNCİL; ravi sayıları Şii kaynaklara dayanır' }, url: 'https://en.wikishia.net/view/Imam_al-Sadiq_(a)', status: 'verified' },
    { book: 'Nevbahtî, Fıraku\'ş-Şîa; Sa\'d b. Abdullah el-Kummî, el-Makâlât ve\'l-fırak; Şeyh Müfid, el-İrşâd', ref: 'TDV Şîa maddesi bibliyografyası; kitaplar okunmadı', says: { tr: 'Şia fırkalarının ayrışması, imamet nassı, İsmâil/Mûsâ meselesi.' }, grade: { tr: 'Şii birincil kaynak; DOĞRULANMADI' }, status: 'check' },
  ],
  disputes: [
    {
      title: { tr: 'Şia ne zaman doğdu?' },
      shia: { tr: 'Şîatü Alî Peygamber döneminde vardı; Ali taraftarlığı Peygamber\'in işaretlerine dayanır. Sünni kaynaklardaki Beyyine 98:7 rivayeti de buna delil sayılır.' },
      sunni: { tr: 'Terim siyasi bir taraftar anlamında Ali dönemi ve Sakîfe sonrasında yerleşti; Cemel, Sıffîn ve Kerbelâ ile ayrı bir kimlik oldu. Beyyine rivayetinin sıhhati tartışmalıdır.' },
    },
    {
      title: { tr: 'İmamet: nass mı, seçim mi?' },
      shia: { tr: 'İmametin Ali ve soyundan gelen on iki imama Peygamber tarafından nasla belirlendiği kabul edilir; Zeydiyye ise ayaklanan en faziletli Ali evladını imam sayar.' },
      sunni: { tr: 'Halifelik, Sakîfe\'de ve sonra şûra/biat ile belirlenmiştir. Ehl-i Sünnet halifeleri sahabenin tercihine dayandırır.' },
    },
    {
      title: { tr: 'Câferî mezhebi ile Sünni mezheplerin ilişkisi' },
      shia: { tr: 'Mâlik ve Ebû Hanîfe\'nin Sâdık\'ın ders halkasından yararlandığı anlatılır; Câferî fıkhı imam rivayetlerine dayanır.' },
      sunni: { tr: 'Mâlik\'in Sâdık\'tan hadis aldığı ve saygıyla andığı kabul edilir; ancak öğrencilik rivayeti ikincil kaynaklara dayanır. Sâdık hadiste güvenilir sayılır.' },
    },
    {
      title: { tr: 'İsmâil neden imam olmadı?' },
      shia: { tr: 'İmâmî Şiîler Sâdık\'ın Mûsâ el-Kâzım\'ı seçtiğini kabul eder; İsmâil babasından önce ölmüştür.' },
      sunni: { tr: 'Sünni kaynaklar konuyu Şii içi bir ayrılık olarak aktarır; TDV, İsmâil\'in ölümü, sağ görüldüğü rivayeti ve içki iddiasını ayrı rivayetler olarak verir.' },
    },
  ],
  questions: [
    { tr: 'Ali taraftarlığının hem Peygamber döneminde hem Sakîfe sonrasında farklı biçimlerde anlatılması, bir kavramın tarihini incelerken hangi kaynakların birlikte okunmasını gerektirir?' },
    { tr: 'Hâricîlik ve Mürcie, aynı siyasi krize karşı zıt cevaplar vermiştir. Bir toplum büyük bir siyasi ayrılıkta nasıl denge kurabilir?' },
    { tr: 'Zeyd b. Ali ayaklanmayı, Sâdık ise ilim yolunu seçti. İki Ehl-i Beyt çizgisinin hedefleri ve yöntemleri sizce nasıl farklıydı?' },
    { tr: 'Sâdık\'ın hem Şii hem Sünni kaynaklarda saygı görmesi, mezhepler arasındaki ortak ilim mirası hakkında ne düşündürür?' },
    { tr: 'Mezheplerin çoğu siyasi ayrılıkla başlayıp fıkıh ve kelam ekollerine dönüştü. Bu dönüşümde ilim ve iktidar ilişkisi nasıl rol oynadı?' },
  ],
  summary: { tr: 'Ümmetin mezhepleri siyasi ayrılıklarla (Sakîfe, Cemel, Sıffîn, Kerbelâ) başlayıp Ehl-i Beyt çevresinde Zeydiyye, İsmâiliyye ve On İki İmam Şiası, diğer çevrede ise dört fıkıh mezhebi ile Eş\'arî ve Mâtürîdî kelam ekollerine dönüştü.' },
};

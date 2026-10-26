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
      text: { tr: 'Şii kaynaklarına göre "Şîatü Alî", Ali\'nin taraftarları, daha Peygamber döneminde vardı. Bu bağlılık Peygamber\'in yönlendirmesiyle oluştu. Şii kaynakları bunu Gadir-i Hum ve benzeri olaylarla ilişkilendirir. TDV, "Şîa" sözcüğünün "taraftar" demek olduğunu yazar. Terim olarak ise Peygamber\'den sonra başkanlığın Ali ve soyuna ait olduğunu savunan grupları anlatır.' },
      art: { bg: 'dune-day', props: ['sun'], actors: [{ kind: 'prophet', x: 38, label: { tr: 'Hz. Peygamber' } }, { kind: 'ali', x: 62, label: { tr: 'Hz. Ali' } }] },
      by: 'shia',
    },
    {
      text: { tr: 'Beyyine 98:7 için Peygamber\'in Ali\'ye "Bu, sen ve şiandır" dediği bir rivayet aktarılır. Bu rivayet Sünni kaynaklarında da geçmektedir (Süyûtî, ed-Dürrü\'l-Mensûr; İbn Asâkir, Târîhu Dimaşk). Şii kaynakları bunu, "Şia" sözünün Peygamber döneminde kullanıldığına bir delil sayar. Rivayetin sıhhati hadis âlimleri arasında tartışmalıdır. Ayetle ilişkisi ve senetler kitaplardan ayrıca kontrol edilmelidir.' },
      art: { bg: 'interior', props: ['scroll'], actors: [{ kind: 'prophet', x: 36, label: { tr: 'Hz. Peygamber' } }, { kind: 'ali', x: 64, label: { tr: 'Hz. Ali' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Peygamber\'in vefatından sonra Sakîfe\'de Ebû Bekir seçildi, Ali\'nin biati gecikti. TDV, Selmân-ı Fârisî, Ebû Zer, Mikdâd ve Ammâr\'ı Ali taraftarları arasında anar ve bu bağlılığın siyasi bir tercihten doğduğunu yazar. Şii kaynaklarında aynı sahabiler, imamet konusundaki Peygamber vasiyetine bağlı kalanlar olarak anılır.' },
      art: { bg: 'city', actors: [{ kind: 'man', x: 28, label: { tr: 'Selman' } }, { kind: 'man', x: 46, label: { tr: 'Ebu Zer' } }, { kind: 'man', x: 62, label: { tr: 'Mikdad' } }, { kind: 'man', x: 78, label: { tr: 'Ammar' } }, { kind: 'ali', x: 12, label: { tr: 'Hz. Ali' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Cemel ve Sıffîn, ümmetin siyasi birliğini böldü. Sıffîn\'de Muâviye\'nin ordusu Kur\'an sayfalarını mızraklara takıp hakem istedi. Ali\'nin ordusundan bir grup, onun itirazına rağmen hakemi kabul etti. Sonra "hüküm ancak Allah\'ındır" diyerek ayrılıp Harûrâ\'ya çekildiler. Bunlar ilk Hâricîler, Muhakkime\'dir. Ali onlarla Nehrevan\'da (658) savaştı. Hâricîler büyük günah işleyeni kâfir saydı. Buna karşı, kişilerin akıbetini Allah\'a bırakan Mürcie doğdu (yaklaşık 680-694). Ali\'ye bağlı kalanlar Şia\'yı oluşturdu. Bu olaylar Sünni kaynaklarında da geçmektedir (TDV İslâm Ansiklopedisi, "Hâricîler"; "Mürcie").' },
      art: { bg: 'battle', props: ['swords', 'flags'], actors: [{ kind: 'ali', x: 30, label: { tr: 'Hz. Ali' } }, { kind: 'crowd', x: 62, scale: 5, label: { tr: 'Hakem karşıtı grup' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Kerbelâ\'da Hz. Hüseyin\'in şehadeti Şia\'yı derinden etkiledi. Kûfe\'de Muhtâr es-Sekafî, şehitlerin hesabını sormak için 66 H. (685) yılında ayaklandı ve yaklaşık 18 ay Kûfe\'yi yönetti. 67\'de öldürüldü. Muhammed b. el-Hanefiyye adına çağrı yaptığı rivayeti, Keysâniyye\'nin doğuşuna bağlanır. Şii kaynaklarında Muhtâr\'a bakış farklıdır. Çoğu onu olumlu anar. Meclisî gibi bazı âlimler susmayı tercih eder. Keysâniyye\'nin Muhtâr\'dan mı, yoksa ölümünden sonra mı çıktığı da tartışmalıdır.' },
      art: { bg: 'city', props: ['swords', 'flags'], actors: [{ kind: 'man', x: 34, label: { tr: 'Muhtâr es-Sekafî' } }, { kind: 'crowd', x: 68, scale: 5 }] },
      by: 'both',
    },
    {
      text: { tr: 'Hz. Hüseyin\'in torunu Zeyd b. Ali, Emevi halifesi Hişâm\'a karşı 122 H. (740) yılında Kûfe\'de ayaklandı ve öldürüldü. Zeyd, imameti Ali soyundan en faziletli ve ayaklanan kişiye verdi. Halife Ebû Bekir ile Halife Ömer\'in hilafetini de meşru saydı. Bu çizgi Zeydiyye adıyla ayrı bir kol oldu. Taberistan ve Yemen\'de devletler kurdu. TDV onu ılımlı bir Şii fırka olarak anar. İmâmî Şia kaynaklarında ise imamet nasla, yani açık belirlemeyle anlatılır.' },
      art: { bg: 'dune-dusk', props: ['swords', 'flags'], actors: [{ kind: 'man', x: 36, label: { tr: 'Zeyd b. Ali' } }, { kind: 'crowd', x: 68, scale: 5 }] },
      by: 'both',
    },
    {
      text: { tr: 'Emevi iktidarı zayıflarken ve Abbasi iktidarı henüz oturmamışken İmam Muhammed el-Bâkır ile İmam Câfer es-Sâdık Medine\'de geniş bir ilim halkası kurdu. Şii kaynaklarına göre Şeyh Tûsî\'nin Ricâl\'inde yaklaşık 3200, Müfid\'e göre yaklaşık 4000 ravi ondan nakleder. Câferî fıkhı büyük ölçüde onun rivayetlerinden oluşur. Dört Yüz Usûl denen derlemeler öğrencilerine bağlanır. Mâlik\'in ondan hadis aldığı ve Ebû Hanîfe\'nin onu çağının en bilgin kişisi saydığı Şii kaynaklarında geçer. Sünni anlatımda bu ilişki, hadis alışverişi ve ilmî saygı olarak anılır.' },
      art: { bg: 'interior', props: ['scroll'], actors: [{ kind: 'man', x: 36, pose: 'sit', label: { tr: 'İmam Câfer es-Sâdık' } }, { kind: 'crowd', x: 70, scale: 5 }] },
      by: 'shia',
    },
    {
      text: { tr: 'Aynı yüzyıllarda Sünni fıkıh ve kelam ekolleri de şekillendi: Ebû Hanîfe (ö. 150), Mâlik (ö. 179), Şâfiî (ö. 204) ve Ahmed b. Hanbel (ö. 241). "Ehl-i Sünnet" terimi, TDV\'ye göre 3./9. yüzyılda yerleşti. Kelamda Eş\'arî (ö. 324) ve Mâtürîdî (ö. 333) ekolleri doğdu. Akla geniş yer veren Mutezile ile Şia arasında bazı kelam yakınlıkları vardır. TDV, Zeydiyye\'nin Mutezile\'ye yakın olduğunu yazar. Ekollerin temel ayrışması imamet, halifelik ve hadis kaynakları konusundadır.' },
      art: { bg: 'city', props: ['scroll'], actors: [{ kind: 'man', x: 22, label: { tr: 'Ebû Hanîfe' } }, { kind: 'man', x: 40, label: { tr: 'Mâlik' } }, { kind: 'man', x: 58, label: { tr: 'Şâfiî' } }, { kind: 'man', x: 76, label: { tr: 'Ahmed b. Hanbel' } }] },
      by: 'sunni',
    },
    {
      text: { tr: 'İmam Sâdık\'ın büyük oğlu İsmâil babasından önce ölünce, ya da öldü sanılınca, imamet konusunda ayrılık çıktı. İsmâil\'in imametini sürdürenler İsmâiliyye\'yi kurdu ve oğlu Muhammed b. İsmâil ile devam ettiler. Sonraki Fâtımî devleti (909-1171) bu koldan çıktı. Çoğunluk ise İmam Mûsâ el-Kâzım\'a bağlandı. Bu kol On İki İmam Şiası\'dır. İmam Kâzım, Hârûnürreşîd\'in baskısıyla Bağdat\'ta tutuklandı ve 183\'te (799) vefat etti. On İkinci İmam\'ın gaybeti, Şii kaynaklarına göre 260\'ta başladı. Küçük gaybet 260-329 sürer, ardından büyük gaybet gelir. Böylece On İki İmam Şiası tamamlandı.' },
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
    { book: 'TDV İslâm Ansiklopedisi, "Zeydiyye"', ref: 'islamansiklopedisi.org.tr/zeydiyye', says: { tr: 'Zeyd b. Ali\'nin 122/740 ayaklanması, Halife Ebû Bekir ve Halife Ömer\'in hilafetini meşru sayması, Kasım er-Ressî (ö. 246/860), Taberistan ve Yemen devletleri.' }, grade: { tr: 'İKİNCİL' }, url: 'https://islamansiklopedisi.org.tr/zeydiyye', status: 'verified' },
    { book: 'TDV İslâm Ansiklopedisi, "İsmâiliyye"', ref: 'islamansiklopedisi.org.tr/ismailiyye', says: { tr: 'İsmâil\'in babasından önce ölmesi ve ayrılığın nedenleri; Muhammed b. İsmâil; Fâtımî devleti (909-1171).' }, grade: { tr: 'İKİNCİL' }, url: 'https://islamansiklopedisi.org.tr/ismailiyye', status: 'verified' },
    { book: 'WikiShia, "Al-Mukhtar al-Thaqafi"', ref: 'en.wikishia.net/view/Al-Mukhtar_al-Thaqafi', says: { tr: 'Muhtâr\'ın 14 Rebîülevvel 66 (685) ayaklanması, 14 Ramazan 67\'de (687) ölümü; Keysâniyye bağlantısının tartışmalı olması; Şii âlimlerin farklı tutumları.' }, grade: { tr: 'İKİNCİL (ansiklopedik site)' }, url: 'https://en.wikishia.net/view/Al-Mukhtar_al-Thaqafi', status: 'verified' },
    { book: 'WikiShia, "Imam al-Sadiq (a)"', ref: 'en.wikishia.net/view/Imam_al-Sadiq_(a)', says: { tr: 'Tûsî Ricâl\'inde yaklaşık 3200, Müfid\'e göre 4000 ravi; Dört Yüz Usûl; Câferî mezhebi; Mâlik ve Ebû Hanîfe ile ilişki; Abbasi baskısı; vefat 148/765.' }, grade: { tr: 'İKİNCİL; ravi sayıları Şii kaynaklara dayanır' }, url: 'https://en.wikishia.net/view/Imam_al-Sadiq_(a)', status: 'verified' },
    { book: 'Nevbahtî, Fıraku\'ş-Şîa; Sa\'d b. Abdullah el-Kummî, el-Makâlât ve\'l-fırak; Şeyh Müfid, el-İrşâd', ref: 'TDV Şîa maddesi bibliyografyası; kitaplar okunmadı', says: { tr: 'Şia fırkalarının ayrışması, imamet nassı, İsmâil/Mûsâ meselesi.' }, grade: { tr: 'Şii birincil kaynak; DOĞRULANMADI' }, status: 'check' },
  ],
  disputes: [
    {
      title: { tr: 'Şia ne zaman doğdu?' },
      shia: { tr: 'Ali\'ye bağlılık her iki anlatıda da sahabe dönemine uzanır. Şii kaynaklarda Şîatü Alî Peygamber döneminde vardır ve Beyyine 98:7 rivayeti buna delil sayılır.' },
      sunni: { tr: 'Ali\'ye bağlılık her iki anlatıda da sahabe dönemine uzanır. Sünni aktarımda terim Sakîfe sonrasında siyasi bir taraftarlık olarak yerleşir; Beyyine rivayetinin sıhhati tartışmalıdır.' },
    },
    {
      title: { tr: 'İmamet: nass mı, seçim mi?' },
      shia: { tr: 'Halifelik ve imamet, her iki geleneğin de cevap aradığı sorudur. Şii inancında bu görev Ali ve soyundan on iki imama nasla verilmiştir; Zeydiyye ise ayaklanan en faziletli Ali evladını imam sayar.' },
      sunni: { tr: 'Halifelik ve imamet, her iki geleneğin de cevap aradığı sorudur. Ehl-i Sünnet\'te halife Sakîfe\'de ve sonra şûra ile biatla belirlenir, sahabenin tercihine dayandırılır.' },
    },
    {
      title: { tr: 'Câferî mezhebi ile Sünni mezheplerin ilişkisi' },
      shia: { tr: 'Mâlik ve Ebû Hanîfe\'nin Sâdık ile ilmî ilişkisi iki kaynakta da anılır. Şii anlatıda ikisi ders halkasından yararlanmıştır; Câferî fıkıh imam rivayetlerine dayanır.' },
      sunni: { tr: 'Mâlik ve Ebû Hanîfe\'nin Sâdık ile ilmî ilişkisi iki kaynakta da anılır. Sünni aktarımda Mâlik\'in hadis alması ve saygısı kabul edilir; öğrencilik rivayeti ikincil kaynaklara dayanır ve Sâdık hadiste güvenilir sayılır.' },
    },
    {
      title: { tr: 'İsmâil neden imam olmadı?' },
      shia: { tr: 'İsmâil\'in babasından önce ölmesi, ayrılığın ortak anlatılan başlangıcıdır. İmâmî Şiîler, Sâdık\'ın Mûsâ el-Kâzım\'ı seçtiğini kabul eder.' },
      sunni: { tr: 'İsmâil\'in babasından önce ölmesi, ayrılığın ortak anlatılan başlangıcıdır. Sünni kaynaklar bunu Şii içi bir ayrılık olarak aktarır; TDV ölüm, sağ görüldüğü ve içki iddiasını ayrı rivayetler olarak verir.' },
    },
  ],
  questions: [
    { tr: 'Ali taraftarlığı hem Peygamber dönemi hem Sakîfe sonrası için anlatılır. Bir kavramın tarihini anlamak için hangi kaynakları yan yana okumak gerekir?' },
    { tr: 'Hâricîler büyük günahı tekfirle, Mürcie ise akıbeti Allah\'a bırakarak cevapladı. Aynı krize iki farklı cevap, topluluğun dengesini nasıl etkiler?' },
    { tr: 'Zeyd b. Ali ayaklanmayı, İmam Sâdık ilim halkasını seçti. Ehl-i Beyt içindeki bu iki yol, amacı ve yöntemi nasıl ayırır?' },
    { tr: 'Sâdık\'ın ders halkası hem Şii hem Sünni âlimlerin andığı bir kapıdır. Ortak ilim mirası, sonraki mezhep sınırlarını nasıl yumuşatabilir?' },
    { tr: 'Mezhepler siyasi ayrılıkla başlayıp fıkıh ve kelam ekollerine döndü. Bu yolculukta ilim, topluluğu bir arada tutmaya nasıl yardım etti?' },
  ],
  summary: { tr: 'Ümmetin yolları Sakîfe, Cemel, Sıffîn ve Kerbelâ ile ayrıştı. Ehl-i Beyt çevresinde Zeydiyye, İsmâiliyye ve On İki İmam Şiası oluştu. Diğer çevrede dört fıkıh mezhebi ile Eş\'arî ve Mâtürîdî kelam ekolleri doğdu.' },
};

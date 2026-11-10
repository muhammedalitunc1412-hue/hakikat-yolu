import type { HistEvent } from '../types';

// Kaynak notu: TDV (Câfer es-Sâdık, Ebû Hanîfe, Mâlik b. Enes maddeleri), Wikipedia ve WikiShia sayfaları bu oturumda okundu.
// Muvatta/Zehebî/Mekkî/Hârezmî'nin birincil metinleri okunmadı; bunlar ikincil aktarıma dayanır ve 'check' işaretlidir.
export const sadik: HistEvent = {
  id: 'sadik',
  date: { tr: '80/83 H (699/702) - 148 H (765), Medine', en: '80/83 AH (699/702) - 148 AH (765), Medina' },
  title: { tr: 'Hz. Ca\'fer-i Sâdık ve öğrencileri: Ebû Hanîfe ve Mâlik', en: 'Imam Ja\'far al-Sadiq and his students: Abu Hanifa and Malik' },
  hook: { tr: 'Medine\'de bir ilim kapısı açıldı: Hz. Ca\'fer-i Sâdık ve halkasına uğrayan âlimler.', en: 'A circle of learning in Medina, open to the founders of two schools.' },
  scenes: [
    {
      text: { tr: '**Hz. Ca\'fer-i Sâdık**, hicretin 80. ya da 83. yılında, yani 699 ya da 702\'de, Medine\'de dünyaya geldi. Kaynakların çoğu 83 yılını esas alır. Babası Beşinci İmam **Hz. Muhammed Bâkır**\'dır ve soyu Hz. Ali ile Hz. Fatıma\'ya uzanır. Annesi Ümmü Ferve, Kâsım b. Muhammed\'in kızıdır. Kâsım ise Ebû Bekir\'in torunudur. Şii kaynaklarında o Altıncı İmam\'dır. Sünni kaynaklarında da büyük bir âlim ve Ehl-i Beyt\'in saygın bir mensubu olarak anılır. "es-Sâdık" lakabı, doğru sözlü demektir. Medine halkı bu lakabı, onun dürüstlüğüne ve ilim meclisine duyduğu güvenle verdi.' },
      art: { bg: 'city', props: ['palms'], actors: [{ kind: 'man', x: 50, label: { tr: 'Hz. Ca\'fer-i Sâdık' } }, { kind: 'crowd', x: 22, scale: 4 }] },
      by: 'both',
    },
    {
      text: { tr: '**Hz. Ca\'fer-i Sâdık**\'ın gençlik yılları, Emevi hanedanının çözülmeye başladığı karışık bir döneme denk geldi. Kısa süre sonra iktidar Abbasilerin eline geçti. Bu yıllarda birçok isyan çıktı ve pek çok kişi iktidar mücadelesine atıldı. Ama Hz. Sâdık bu isyanlara katılmadı. Bütün gücünü Medine\'de ilme, öğretmeye ve öğrenci yetiştirmeye verdi. Peygamber\'den gelen ilmi korumanın ve yaymanın, kılıçtan daha kalıcı bir yol olduğunu biliyordu. Şii kaynaklarına göre Abbasi halifesi **Mansûr**, onun halk üzerindeki etkisinden rahatsız oldu ve sonunda onu zehirletti.' },
      art: { bg: 'night', props: ['moon', 'stars'], actors: [{ kind: 'man', x: 40, pose: 'sit', label: { tr: 'Hz. Ca\'fer-i Sâdık' } }, { kind: 'man', x: 76, label: { tr: 'Halife Mansûr' } }] },
      by: 'shia',
    },
    {
      text: { tr: 'Medine\'de, Peygamber\'in mescidinin çevresinde Hz. Ca\'fer-i Sâdık\'ın ders halkaları kuruldu. Şii kaynaklarına göre ondan hadis dinleyenlerin sayısı dört bine kadar ulaşır. Şeyh Müfid el-İrşâd adlı eserinde, İbn Ukde de öğrencilerini sayan kitabında dört bin kişiden söz eder. Şeyh Tûsî\'nin Ricâl\'inde ise yaklaşık 3200 isim geçer. Sayılar kaynaktan kaynağa değişir, ama hepsi Medine\'de çok büyük bir ilim meclisinin kurulduğunu gösterir. Farklı şehirlerden, farklı görüşlerden insanlar onu dinlemek için Medine\'ye geliyordu.' },
      art: { bg: 'interior', props: ['scroll'], actors: [{ kind: 'man', x: 52, pose: 'sit', label: { tr: 'Hz. Ca\'fer-i Sâdık' } }, { kind: 'crowd', x: 24, scale: 7 }] },
      by: 'shia',
    },
    {
      text: { tr: 'Hz. Ca\'fer-i Sâdık\'ın ilmi özellikle hadis, fıkıh ve kelam alanlarında anılır. Şiilerin fıkhı büyük ölçüde onun ve babasının rivayetlerine dayandığı için bu mezhebe **Câferî mezhebi** denir. Şii kaynaklarına göre imamların ilmi, Peygamber\'den babadan oğula aktarılan bir emanettir. Ona kimya ve tıp gibi alanlarda eserler de nispet edilir, ama bu nispetler sağlam değildir. Câbir b. Hayyân\'a bilgi aktardığına dair rivayet çok şüpheli sayılır. Kimya ve cefr alanındaki eserlerin çoğu sonraki dönemlerin ürünü olabilir. Onun asıl mirası, ders halkasında öğrettiği fıkıh ve hadistir.' },
      art: { bg: 'interior', props: ['scroll'], actors: [{ kind: 'man', x: 40, pose: 'sit', label: { tr: 'Hz. Ca\'fer-i Sâdık' } }, { kind: 'crowd', x: 72, scale: 4 }] },
      by: 'both',
    },
    {
      text: { tr: 'Hanefi mezhebinin kurucusu **Ebû Hanîfe** ile Hz. Ca\'fer-i Sâdık arasındaki ilişki, iki âlimin ilmî karşılaşması olarak anlatılır. Kaynaklarda Hz. Sâdık\'ın onunla hem Medine\'de hem de Irak\'ta görüştüğü aktarılır. Ebû Hanîfe\'nin Ehl-i Beyt âlimleriyle görüşüp özellikle akaid konularında onlardan faydalandığı söylenir. Sünni kaynaklarda Ebû Hanîfe\'nin hocalarının silsilesi ise Hammâd b. Ebû Süleyman, İbrahim en-Nehaî ve Şa\'bî üzerinden gider. Şii kaynakları ise Ebû Hanîfe\'yi Hz. Ca\'fer-i Sâdık\'ın öğrencisi olarak anar. Sünni anlatım bu ilişkiyi bir saygı, Şii anlatım ise bir talebelik olarak görür.' },
      art: { bg: 'interior', props: ['scroll'], actors: [{ kind: 'man', x: 30, label: { tr: 'Ebû Hanîfe' } }, { kind: 'man', x: 62, pose: 'sit', label: { tr: 'Hz. Ca\'fer-i Sâdık' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Şii kaynaklarına göre Ebû Hanîfe, Hz. Ca\'fer-i Sâdık\'tan iki yıl boyunca ders aldı ve bu yılları anlatırken şöyle dedi: "O iki yıl olmasaydı Nu\'mân helak olurdu." Nu\'mân, Ebû Hanîfe\'nin kendi adıdır. Bu sözün ne kadar eski olduğu ve gerçekten Ebû Hanîfe\'ye ait olup olmadığı tartışılır. Bazıları sözü başka bir hocaya bağlar. Câferî okuyuşu ise bu iki yılı Hz. Ca\'fer-i Sâdık\'ın halkasına yerleştirir. Hangi fıkıh metninin ona ait olduğu da tartışmalıdır. Ama bütün bu tartışmalar, Medine\'deki o halkanın büyüklüğünü ve açıklığını değiştirmez.' },
      art: { bg: 'dawn', props: ['scroll'], actors: [{ kind: 'man', x: 40, label: { tr: 'Ebû Hanîfe' } }, { kind: 'man', x: 66, pose: 'sit', label: { tr: 'Hz. Ca\'fer-i Sâdık' } }] },
      by: 'shia',
    },
    {
      text: { tr: 'Maliki mezhebinin kurucusu ve Medine\'nin büyük âlimi **Mâlik b. Enes**, Hz. Ca\'fer-i Sâdık\'tan hadis dinleyenler arasında anılır. Şeyh Sadûk\'un el-Hısâl adlı eserinde, Mâlik\'in imamın yanına giderek ondan hadis dinlediği aktarılır. Bazı Sünni tabakat kitaplarında ise bu ilişkiden söz edilmez. Ama bir kitapta adın geçmemesi, Medine\'de herkesin bildiği o halkayı silmez. Mâlik de Medine\'nin âlimlerinden biri olarak, aynı şehirde ders veren Ehl-i Beyt imamının meclisinden faydalananlar arasında yer alır.' },
      art: { bg: 'city', props: ['minbar'], actors: [{ kind: 'man', x: 34, label: { tr: 'Mâlik b. Enes' } }, { kind: 'man', x: 66, pose: 'sit', label: { tr: 'Hz. Ca\'fer-i Sâdık' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Birçok Sünni âlim de **Hz. Ca\'fer-i Sâdık**\'ı övgüyle anmıştır. Zehebî onu büyük âlimler arasında sayar. Onun rivayetleri Sünnilerin en güvendiği altı hadis kitabı olan Kütüb-i Sitte\'de de yer alır. Buhari\'nin Sahih\'inde ondan rivayet almamasının sebebi, onu zayıf görmesi değildir. Asıl sebep, onun meclisine girip ona uydurma hadisler isnat eden kişilerin bulunmasıdır. Yani mesele imamın kendisinde değil, onun adını kullanarak yalan söyleyenlerdedir. Doğru sözlü anlamına gelen "es-Sâdık" lakabı da bu yalanlara karşı onun dürüstlüğünü hatırlatır.' },
      art: { bg: 'interior', props: ['scroll'], actors: [{ kind: 'man', x: 50, pose: 'sit', label: { tr: 'Hz. Ca\'fer-i Sâdık' } }, { kind: 'crowd', x: 22, scale: 5 }] },
      by: 'sunni',
    },
    {
      text: { tr: '**Hz. Ca\'fer-i Sâdık**, hicretin 148. yılında, yani 765\'te, Medine\'de vefat etti ve babası ile dedesinin yanına, Cennetü\'l-Bakî\'ye defnedildi. Şii kaynaklarında o, Ehl-i Beyt mektebinin ve Câferî mezhebinin kurucusu olarak anılır. Kurduğu ilim halkası, bu mektebin temel dayanağı olmuştur. Sünni kaynaklarda da Medine ilminin en saygın halkalarından biri olarak yer alır. Böylece Şii ve Sünni gelenekler, Hz. Sâdık\'ın kapısında buluşur. Medine\'de açtığı ilim kapısı, yüzyıllar boyunca hiç kapanmadı.' },
      art: { bg: 'dune-dusk', props: ['palms'], actors: [{ kind: 'crowd', x: 40, scale: 6 }, { kind: 'man', x: 74, label: { tr: 'Hz. Ca\'fer-i Sâdık' } }] },
      by: 'both',
    },
  ],
  sunni: [
    { book: 'TDV İslâm Ansiklopedisi, "Câfer es-Sâdık"', ref: 'Hayatı, ilmî kişiliği ve rivayetleri', says: { tr: 'Doğum 80/83, vefat 148 H, Medine. Annesi Ümmü Ferve (Kâsım b. Muhammed\'in kızı). Mâlik ondan hadis dinledi, Ebû Hanîfe ile ilmî münakaşaları oldu. Rivayetleri Kütüb-i Sitte\'de var, Buhârî\'nin Sahîh\'inde yok. Kimya nisbeti çok şüpheli.' }, grade: { tr: 'DOĞRULANDI (sayfa bu oturumda okundu)' }, url: 'https://islamansiklopedisi.org.tr/cafer-es-sadik', status: 'verified' },
    { book: 'TDV İslâm Ansiklopedisi, "Ebû Hanîfe"', ref: 'Hocaları ve ilişkileri', says: { tr: 'Ebû Hanîfe Hz. Ca\'fer-i Sâdık dahil Ehl-i Beyt âlimleriyle görüştü, akaidde yararlandı; Hz. Ca\'fer-i Sâdık açıkça hocası sayılmaz. "İki yıl" sözü tasavvuf bağlamında anılıp reddedilir.' }, grade: { tr: 'DOĞRULANDI (sayfanın ilk 100.000 karakteri okundu)' }, url: 'https://islamansiklopedisi.org.tr/ebu-hanife', status: 'verified' },
    { book: 'TDV İslâm Ansiklopedisi, "Mâlik b. Enes"', ref: 'Hocaları, Muvatta', says: { tr: 'Hocaları arasında Zührî, Nâfi\', Yahyâ b. Saîd sayılır; sayfada Hz. Ca\'fer-i Sâdık geçmez. Muvatta hadis ve fıkhı birlikte düzenler.' }, grade: { tr: 'DOĞRULANDI (bu maddede Hz. Ca\'fer-i Sâdık\'tan söz yoktur)' }, url: 'https://islamansiklopedisi.org.tr/malik-b-enes', status: 'verified' },
    { book: 'Mâlik b. Enes, el-Muvatta\'', ref: 'Hz. Ca\'fer-i Sâdık\'tan nakiller (numara bulunamadı)', says: { tr: 'Mâlik\'in Hz. Ca\'fer-i Sâdık\'den nakli bildirilir.' }, grade: { tr: 'DOĞRULANMADI (ikincil aktarım)' }, status: 'check' },
    { book: 'Zehebî, Tezkiretü\'l-huffâz ve Siyeru a\'lâmi\'n-nübelâ', ref: 'Hz. Ca\'fer-i Sâdık maddesi', says: { tr: 'Hz. Ca\'fer-i Sâdık\'ı büyük âlimler arasında anar. TDV de bu iki eseri kaynakçada verir.' }, grade: { tr: 'İKİNCİL (WikiShia ve Wikipedia aktarımı; metin okunmadı)' }, status: 'check' },
    { book: 'İbn Hacer el-Heytemî, es-Savâiku\'l-muhrika', ref: 'c. 2, s. 586 (WikiShia aktarımı)', says: { tr: 'Ebû Hanîfe ve Mâlik\'in Hz. Ca\'fer-i Sâdık\'tan rivayet edenler arasında olduğu belirtilir.' }, grade: { tr: 'İKİNCİL (WikiShia\'dan)' }, url: 'https://en.wikishia.net/view/Ja%27far_b._Muhammad_al-Sadiq_(a)', status: 'check' },
  ],
  shia: [
    { book: 'WikiShia, "Ja\'far b. Muhammad al-Sadiq (a)"', ref: 'Doğum, öğrenciler, övgüler', says: { tr: '17 Rebîülevvel 83 (702) Medine; bazı tarihçilere göre 80. Ümmü Ferve. Mâlik\'in imama hadis dinlemeye gittiği (Saduk, el-Hısâl s. 168). Rivayetçi sayısı: Tûsî ~3.200, Müfîd 4.000 (el-İrşâd c. 2 s. 254), İbn Uknde 4.000.' }, grade: { tr: 'DOĞRULANDI (WikiShia sayfası okundu; alıntılanan kitaplar okunmadı)' }, url: 'https://en.wikishia.net/view/Ja%27far_b._Muhammad_al-Sadiq_(a)', status: 'verified' },
    { book: 'WikiShia, "Abu Hanifa"', ref: 'Hz. Muhammed Bâkır ve Hz. Ca\'fer-i Sâdık ile ilişkisi', says: { tr: 'İbn Ebi\'l-Hadîd Ebû Hanîfe\'yi açıkça Hz. Ca\'fer-i Sâdık\'ın öğrencisi sayar. "Lev lâ\'s-seneteni" sözünün erken kaynaklarda bulunmadığı, ilk kez Tuhfe-i İsnâ Aşeriyye\'de anıldığı ve "iki yıl"ın Zeyd b. Ali\'ye de işaret edebileceği belirtilir.' }, grade: { tr: 'DOĞRULANDI (sayfa okundu; sayfada sayfa numaraları yok)' }, url: 'https://en.wikishia.net/view/Abu_Hanifa', status: 'verified' },
    { book: 'Şeyh Müfîd, el-İrşâd', ref: 'c. 2, s. 254 (WikiShia aktarımı)', says: { tr: 'Hz. Ca\'fer-i Sâdık\'tan rivayet edenlerin sayısı 4.000.' }, grade: { tr: 'İKİNCİL (WikiShia\'dan)' }, url: 'https://al-islam.org/kitab-al-irshad-book-shaykh-al-mufid', status: 'check' },
    { book: 'Şeyh Saduk, el-Hısâl', ref: 's. 168 (WikiShia aktarımı)', says: { tr: 'Mâlik b. Enes\'in imamdan hadis dinlediği nakli.' }, grade: { tr: 'İKİNCİL (WikiShia\'dan)' }, status: 'check' },
    { book: 'Kâşân Üniversitesi, Ebû Hanîfe\'nin "Lev lâ\'s-seneteni" sözü üzerine inceleme', ref: 'Hadis araştırması makalesi', says: { tr: 'Sözün 13. yüzyıl H. bir eserde ortaya çıktığı ve Zeyd b. Ali\'ye işaret edebileceği ileri sürülür.' }, grade: { tr: 'İKİNCİL (yalnız arama sonucu özeti görüldü)' }, url: 'https://s-hadith.kashanu.ac.ir/article_111029.html', status: 'check' },
  ],
  disputes: [
    {
      title: { tr: 'Ebû Hanîfe Hz. Ca\'fer-i Sâdık\'ın öğrencisi miydi?' },
      shia: { tr: 'Ebû Hanîfe ile Hz. Ca\'fer-i Sâdık\'ın ilmî ilişkisi iki kaynakta da anılır. Şii anlatıda Ebû Hanîfe onun öğrencisidir; İbn Ebi\'l-Hadîd de onu öğrenci sayar. "İki yıl" sözünün erken kaynağı bulunamamıştır.' },
      sunni: { tr: 'Ebû Hanîfe ile Hz. Ca\'fer-i Sâdık\'ın ilmî ilişkisi iki kaynakta da anılır. TDV bunu görüşme ve akaidden yararlanma olarak yazar, öğrenci diye nitelemez; "iki yıl" sözü erken kaynaklarda yoktur.' },
    },
    {
      title: { tr: 'Mâlik, Hz. Ca\'fer-i Sâdık\'tan rivayet etti mi?' },
      shia: { tr: 'Mâlik\'in Hz. Ca\'fer-i Sâdık\'tan hadis dinlediği iki kaynakta da anılır. Şii aktarımda bu, Saduk\'un el-Hısâl\'indeki gidiş rivayetine dayanır.' },
      sunni: { tr: 'Mâlik\'in Hz. Ca\'fer-i Sâdık\'tan hadis dinlediği iki kaynakta da anılır. TDV bunu açıkça yazar; Muvatta\'daki yer ve numaralar bu çalışmada doğrulanamadı.' },
    },
    {
      title: { tr: 'Kimya ve tıp ilmi Hz. Ca\'fer-i Sâdık\'a mı aittir?' },
      shia: { tr: 'Bazı eserlerin Hz. Ca\'fer-i Sâdık\'a nispeti iki tarafta da tartışılır. Sonraki Şii-Bâtınî çevrelerde kimi kitaplar ona bağlanır; Câbir b. Hayyân\'ın bazı eserleri kendini onun öğretisinin açıklaması olarak sunar.' },
      sunni: { tr: 'Bazı eserlerin Hz. Ca\'fer-i Sâdık\'a nispeti iki tarafta da tartışılır. TDV, Câbir\'e bilgi aktardığı rivayeti çok şüpheli sayar; Ruska ve Kraus asılsız bulur. Yalnız İhtilâcü\'l-a\'zâ adlı tıp eseri ona nispet edilir.' },
    },
  ],
  questions: [
    { tr: 'Buhârî\'nin Sahîh\'inde Hz. Ca\'fer-i Sâdık\'tan rivayet olmamasını TDV, zayıflığa değil, adına uydurma hadis isnat edilmesine bağlar. Geniş bir ilim halkasında ismin korunması neden zorlaşır?' },
    { tr: 'Dört bin rakamı Müfîd ve İbn Uknde\'de, yaklaşık 3.200 ise Tûsî\'de geçer. Büyük ravi sayıları bir ilim halkasının genişliğini nasıl okutur?' },
    { tr: '"İki yıl" sözü erken kaynaklarda bulunamıyor. Güzel bir sözün meşhur olması, onun tarihî kaydını neden tek başına göstermez?' },
    { tr: 'Hz. Ca\'fer-i Sâdık, Emevilerin çözülüşünde ve Abbasilerin yükselişinde isyana girmeden öğretmeyi seçti. İlim halkasını açık tutmak, o yıllarda nasıl bir rehberlikti?' },
    { tr: 'Mâlik ve Hz. Ca\'fer-i Sâdık aynı Medine ilminde yetişti. Mezhep sınırları çizilirken ortak hocalar ve ortak rivayetler nasıl hatırlanabilir?' },
  ],
  summary: { tr: 'Hz. Ca\'fer-i Sâdık (ö. 148 H) Medine\'de açık bir ilim halkası kurdu. Mâlik\'in ondan hadis dinlediği TDV\'de de geçer. Ebû Hanîfe ile ilişkisi Şii kaynaklarında öğrencilik, TDV\'de ilmî görüşme olarak anılır. Câferî mezhep, bu halkanın rivayetleriyle oluştu.' },
};

import type { HistEvent } from '../types';

// Kaynak notu: TDV (Câfer es-Sâdık, Ebû Hanîfe, Mâlik b. Enes maddeleri), Wikipedia ve WikiShia sayfaları bu oturumda okundu.
// Muvatta/Zehebî/Mekkî/Hârezmî'nin birincil metinleri okunmadı; bunlar ikincil aktarıma dayanır ve 'check' işaretlidir.
export const sadik: HistEvent = {
  id: 'sadik',
  date: { tr: '80/83 H (699/702) - 148 H (765), Medine', en: '80/83 AH (699/702) - 148 AH (765), Medina' },
  title: { tr: 'İmam Câfer es-Sâdık ve öğrencileri: Ebû Hanîfe ve Mâlik', en: 'Imam Ja\'far al-Sadiq and his students: Abu Hanifa and Malik' },
  hook: { tr: 'Medine\'de bir ilim halkası: iki mezhebin kurucusu ve bir imamın açık kapısı.', en: 'A circle of learning in Medina, open to the founders of two schools.' },
  scenes: [
    {
      text: { tr: 'Câfer b. Muhammed, 80 (699) veya 83 (702) yılında Medine\'de doğdu; çoğu kaynak 83\'ü esas alır. Babası İmam Muhammed el-Bâkır, soyu Hz. Ali ve Hz. Fatıma\'ya uzanır. Annesi Ümmü Ferve, Kâsım b. Muhammed\'in kızıdır; Kâsım Hz. Ebû Bekir\'in torunudur. Şii kaynaklarında Altıncı İmam, Sünni kaynaklarında da büyük bir âlim ve Ehl-i Beyt mensubu olarak anılır; "es-Sâdık" (doğru sözlü) lakabıyla tanınır.' },
      art: { bg: 'city', props: ['palms'], actors: [{ kind: 'man', x: 50, label: { tr: 'İmam Câfer es-Sâdık' } }, { kind: 'crowd', x: 22, scale: 4 }] },
      by: 'both',
    },
    {
      text: { tr: 'Gençliği Emevi hanedanının çöküş yıllarına denk geldi. Sonra iktidar Abbasilere geçti. Sâdık, isyanlara katılmadı; Medine\'de ilme ve öğretmeye yöneldi. Şii kaynaklarına göre Halife Mansûr onu zehirletti. Bu zehirleme Şii rivayetlerde geçer; TDV de onu Şii rivayeti olarak aktarır.' },
      art: { bg: 'night', props: ['moon', 'stars'], actors: [{ kind: 'man', x: 40, pose: 'sit', label: { tr: 'İmam Câfer es-Sâdık' } }, { kind: 'man', x: 76, label: { tr: 'Halife Mansûr' } }] },
      by: 'shia',
    },
    {
      text: { tr: 'Medine\'de Mescid-i Nebevi çevresinde ders halkaları kuruldu. Kaynaklarda kendisinden hadis dinleyenlerin sayısı dört bine kadar çıkarılır. Bu sayı Şii kaynaklarına dayanır: Şeyh Müfîd el-İrşâd\'da, İbn Uknde ise öğrencilerini anan eserinde dört bin kişi saymıştır (WikiShia aktarımı); Şeyh Tûsî\'nin Ricâl\'inde ise yaklaşık 3.200 isim geçer. Yani rakam kesin değil, kaynaktan kaynağa değişir. TDV de sayıyı "Şia kaynaklarına göre" verir.' },
      art: { bg: 'interior', props: ['scroll'], actors: [{ kind: 'man', x: 52, pose: 'sit', label: { tr: 'İmam Câfer es-Sâdık' } }, { kind: 'crowd', x: 24, scale: 7 }] },
      by: 'shia',
    },
    {
      text: { tr: 'Sâdık\'ın ilmi hadis, fıkıh ve kelamla anılır. Şii fıkhı onun ve babasının rivayetlerine dayandığı için "Câferî mezhebi" adını taşır. Şii kaynaklarında imamların ilmi Peygamber\'den gelen bir miras olarak anlatılır; TDV ise onu masum olmayan ama saygın bir müctehid olarak anar. Kimya ve tıp nisbeti ise sağlam değildir: Câbir b. Hayyân\'a bilgi aktardığı rivayeti TDV\'de çok şüpheli sayılır, Ruska ve Kraus gibi araştırmacılar asılsız bulur. Tıpla ilgili İhtilâcü\'l-a\'zâ adlı eser ona nisbet edilir, kimya ve cefr eserlerinin çoğu sonraki Şii-Bâtıni çevrelerin ürünü olabilir.' },
      art: { bg: 'interior', props: ['scroll'], actors: [{ kind: 'man', x: 40, pose: 'sit', label: { tr: 'İmam Câfer es-Sâdık' } }, { kind: 'crowd', x: 72, scale: 4 }] },
      by: 'both',
    },
    {
      text: { tr: 'Ebû Hanîfe ile ilişkisi: TDV, Sâdık\'ın Ebû Hanîfe ile Medine\'de ve Irak\'ta ilmî münakaşalar yaptığını yazar. TDV\'nin Ebû Hanîfe maddesi ise onun Sâdık\'ı da içeren Ehl-i Beyt âlimleriyle görüşüp özellikle akaid konularında yararlandığını söyler, fakat Sâdık\'ı açıkça "hocası" saymaz; asıl ilim silsilesi Hammâd b. Ebû Süleyman, İbrahim en-Nehaî ve Şa\'bî üzerinden gider. Şii kaynaklarında ise Ebû Hanîfe, Sâdık\'ın öğrencisi olarak anılır.' },
      art: { bg: 'interior', props: ['scroll'], actors: [{ kind: 'man', x: 30, label: { tr: 'Ebû Hanîfe' } }, { kind: 'man', x: 62, pose: 'sit', label: { tr: 'İmam Câfer es-Sâdık' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Şii kaynaklarına göre Ebû Hanîfe imamdan "iki yıl" ders aldı ve "Lev lâ\'s-seneteni lehelek en-Nu\'mân" (o iki yıl olmasaydı Nu\'mân helak olurdu) dedi. Bu sözün erken bir kaynağı bulunamadı. WikiShia sözün erken kaynaklarda yer almadığını belirtir; Kâşân Üniversitesi\'nde yayımlanan bir makale ise ilk kez 13. yüzyıl H. tarihli bir eserde (Tuhfe-i İsnâ Aşeriyye) göründüğünü ve "iki yıl"ın Zeyd b. Ali\'ye işaret ediyor olabileceğini ileri sürer. TDV de bu sözü başka bir bağlamda, tasavvufla ilgili bir iddia olarak anıp reddeder. Kısacası sözün Sâdık\'a ait olup olmadığı tartışmalıdır ve sağlam bir kaynağa dayandırılamadı.' },
      art: { bg: 'dawn', props: ['scroll'], actors: [{ kind: 'man', x: 40, label: { tr: 'Ebû Hanîfe' } }, { kind: 'man', x: 66, pose: 'sit', label: { tr: 'İmam Câfer es-Sâdık' } }] },
      by: 'shia',
    },
    {
      text: { tr: 'Mâlik b. Enes (ö. 179/795) Medine\'nin imamıydı. TDV, Mâlik\'in Sâdık\'tan hadis dinleyenler arasında olduğunu yazar. Şii kaynaklarında (Saduk, el-Hısâl) Mâlik\'in imama giderek hadis dinlediği aktarılır; Vikipedi de Mâlik\'in "güvenilir Câfer b. Muhammed bana şöyle anlattı" biçiminde nakilde bulunduğunu söyler. Bu nakillerin Muvatta\'daki yerini ve Mâlik\'in övgü sözlerini birincil metinden doğrulayamadım; TDV\'nin Mâlik maddesinde Sâdık hiç geçmez.' },
      art: { bg: 'city', props: ['minbar'], actors: [{ kind: 'man', x: 34, label: { tr: 'Mâlik b. Enes' } }, { kind: 'man', x: 66, pose: 'sit', label: { tr: 'İmam Câfer es-Sâdık' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Birçok Sünni âlim Sâdık\'ı övdü. Zehebî ona büyük bir yer verir; Şii kaynakları Zehebî\'nin Tezkiretü\'l-huffâz\'da onu en bilgin kişilerden saydığını aktarır (birincil metin burada okunmadı). Câhiz\'e atfedilen söz de ilmi ve fıkhıyla dünyayı doldurduğu yönündedir. Rivayetleri Kütüb-i Sitte\'de bulunur; TDV\'ye göre Buhârî Sahîh\'inde ondan rivayet almamıştır, sebep Sâdık\'ın zayıf görülmesi değil, meclisine girenlerin ona uydurma hadis isnat etmesidir.' },
      art: { bg: 'interior', props: ['scroll'], actors: [{ kind: 'man', x: 50, pose: 'sit', label: { tr: 'İmam Câfer es-Sâdık' } }, { kind: 'crowd', x: 22, scale: 5 }] },
      by: 'sunni',
    },
    {
      text: { tr: 'İmam Câfer es-Sâdık 148 H. (765) yılında Medine\'de vefat etti ve Cennetü\'l-Bakî\'ye defnedildi. Şii kaynaklarında o, Ehl-i Beyt mektebinin ve Câferî mezhebinin kurucusu, ilim halkası da bu mektebin dayanağı olarak anılır; Sünni kaynaklarında da Medine ilminin saygın bir halkası olarak yer alır. Medine\'deki bu ilim halkası, iki gelenekte de ortak anılan bir noktadır.' },
      art: { bg: 'dune-dusk', props: ['palms'], actors: [{ kind: 'crowd', x: 40, scale: 6 }, { kind: 'man', x: 74, label: { tr: 'İmam Câfer es-Sâdık' } }] },
      by: 'both',
    },
  ],
  sunni: [
    { book: 'TDV İslâm Ansiklopedisi, "Câfer es-Sâdık"', ref: 'Hayatı, ilmî kişiliği ve rivayetleri', says: { tr: 'Doğum 80/83, vefat 148 H, Medine. Annesi Ümmü Ferve (Kâsım b. Muhammed\'in kızı). Mâlik ondan hadis dinledi, Ebû Hanîfe ile ilmî münakaşaları oldu. Rivayetleri Kütüb-i Sitte\'de var, Buhârî\'nin Sahîh\'inde yok. Kimya nisbeti çok şüpheli.' }, grade: { tr: 'DOĞRULANDI (sayfa bu oturumda okundu)' }, url: 'https://islamansiklopedisi.org.tr/cafer-es-sadik', status: 'verified' },
    { book: 'TDV İslâm Ansiklopedisi, "Ebû Hanîfe"', ref: 'Hocaları ve ilişkileri', says: { tr: 'Ebû Hanîfe Sâdık dahil Ehl-i Beyt âlimleriyle görüştü, akaidde yararlandı; Sâdık açıkça hocası sayılmaz. "İki yıl" sözü tasavvuf bağlamında anılıp reddedilir.' }, grade: { tr: 'DOĞRULANDI (sayfanın ilk 100.000 karakteri okundu)' }, url: 'https://islamansiklopedisi.org.tr/ebu-hanife', status: 'verified' },
    { book: 'TDV İslâm Ansiklopedisi, "Mâlik b. Enes"', ref: 'Hocaları, Muvatta', says: { tr: 'Hocaları arasında Zührî, Nâfi\', Yahyâ b. Saîd sayılır; sayfada Sâdık geçmez. Muvatta hadis ve fıkhı birlikte düzenler.' }, grade: { tr: 'DOĞRULANDI (bu maddede Sâdık\'tan söz yoktur)' }, url: 'https://islamansiklopedisi.org.tr/malik-b-enes', status: 'verified' },
    { book: 'Mâlik b. Enes, el-Muvatta\'', ref: 'Sâdık\'tan nakiller (numara bulunamadı)', says: { tr: 'Mâlik\'in Câfer b. Muhammed\'den nakli bildirilir.' }, grade: { tr: 'DOĞRULANMADI (ikincil aktarım)' }, status: 'check' },
    { book: 'Zehebî, Tezkiretü\'l-huffâz ve Siyeru a\'lâmi\'n-nübelâ', ref: 'Câfer es-Sâdık maddesi', says: { tr: 'Sâdık\'ı büyük âlimler arasında anar. TDV de bu iki eseri kaynakçada verir.' }, grade: { tr: 'İKİNCİL (WikiShia ve Wikipedia aktarımı; metin okunmadı)' }, status: 'check' },
    { book: 'İbn Hacer el-Heytemî, es-Savâiku\'l-muhrika', ref: 'c. 2, s. 586 (WikiShia aktarımı)', says: { tr: 'Ebû Hanîfe ve Mâlik\'in Sâdık\'tan rivayet edenler arasında olduğu belirtilir.' }, grade: { tr: 'İKİNCİL (WikiShia\'dan)' }, url: 'https://en.wikishia.net/view/Ja%27far_b._Muhammad_al-Sadiq_(a)', status: 'check' },
  ],
  shia: [
    { book: 'WikiShia, "Ja\'far b. Muhammad al-Sadiq (a)"', ref: 'Doğum, öğrenciler, övgüler', says: { tr: '17 Rebîülevvel 83 (702) Medine; bazı tarihçilere göre 80. Ümmü Ferve. Mâlik\'in imama hadis dinlemeye gittiği (Saduk, el-Hısâl s. 168). Rivayetçi sayısı: Tûsî ~3.200, Müfîd 4.000 (el-İrşâd c. 2 s. 254), İbn Uknde 4.000.' }, grade: { tr: 'DOĞRULANDI (WikiShia sayfası okundu; alıntılanan kitaplar okunmadı)' }, url: 'https://en.wikishia.net/view/Ja%27far_b._Muhammad_al-Sadiq_(a)', status: 'verified' },
    { book: 'WikiShia, "Abu Hanifa"', ref: 'İmam Bâkır ve Sâdık ile ilişkisi', says: { tr: 'İbn Ebi\'l-Hadîd Ebû Hanîfe\'yi açıkça Sâdık\'ın öğrencisi sayar. "Lev lâ\'s-seneteni" sözünün erken kaynaklarda bulunmadığı, ilk kez Tuhfe-i İsnâ Aşeriyye\'de anıldığı ve "iki yıl"ın Zeyd b. Ali\'ye de işaret edebileceği belirtilir.' }, grade: { tr: 'DOĞRULANDI (sayfa okundu; sayfada sayfa numaraları yok)' }, url: 'https://en.wikishia.net/view/Abu_Hanifa', status: 'verified' },
    { book: 'Şeyh Müfîd, el-İrşâd', ref: 'c. 2, s. 254 (WikiShia aktarımı)', says: { tr: 'Sâdık\'tan rivayet edenlerin sayısı 4.000.' }, grade: { tr: 'İKİNCİL (WikiShia\'dan)' }, url: 'https://al-islam.org/kitab-al-irshad-book-shaykh-al-mufid', status: 'check' },
    { book: 'Şeyh Saduk, el-Hısâl', ref: 's. 168 (WikiShia aktarımı)', says: { tr: 'Mâlik b. Enes\'in imamdan hadis dinlediği nakli.' }, grade: { tr: 'İKİNCİL (WikiShia\'dan)' }, status: 'check' },
    { book: 'Kâşân Üniversitesi, Ebû Hanîfe\'nin "Lev lâ\'s-seneteni" sözü üzerine inceleme', ref: 'Hadis araştırması makalesi', says: { tr: 'Sözün 13. yüzyıl H. bir eserde ortaya çıktığı ve Zeyd b. Ali\'ye işaret edebileceği ileri sürülür.' }, grade: { tr: 'İKİNCİL (yalnız arama sonucu özeti görüldü)' }, url: 'https://s-hadith.kashanu.ac.ir/article_111029.html', status: 'check' },
  ],
  disputes: [
    {
      title: { tr: 'Ebû Hanîfe Sâdık\'ın öğrencisi miydi?' },
      shia: { tr: 'Şii anlatıda Ebû Hanîfe iki yıl Sâdık\'tan ders aldı ve "o iki yıl olmasaydı Nu\'mân helak olurdu" dedi. İbn Ebi\'l-Hadîd gibi Mu\'tezili bir âlim de onu Sâdık\'ın öğrencisi sayar.' },
      sunni: { tr: 'TDV, ikisinin ilmî münakaşalar yaptığını ve Ebû Hanîfe\'nin Ehl-i Beyt âlimlerinden yararlandığını yazar, ama onu Sâdık\'ın öğrencisi diye nitelemez. "İki yıl" sözü erken kaynaklarda yoktur ve doğrulanamamıştır.' },
    },
    {
      title: { tr: 'Mâlik, Sâdık\'tan rivayet etti mi?' },
      shia: { tr: 'Şii kaynaklara göre Mâlik imama giderek hadis dinledi (Saduk, el-Hısâl).' },
      sunni: { tr: 'TDV, Mâlik\'in Sâdık\'tan hadis dinleyenler arasında olduğunu yazar. Muvatta\'daki yer ve numaraları bu çalışmada doğrulanamadı.' },
    },
    {
      title: { tr: 'Kimya ve tıp ilmi Sâdık\'a mı aittir?' },
      shia: { tr: 'Sonraki Şii-Bâtıni çevrelerde bazı eserler ona nisbet edilir; Câbir b. Hayyân\'ın bazı eserleri kendini onun öğretisinin açıklaması olarak sunar.' },
      sunni: { tr: 'TDV\'ye göre Câbir\'e bilgi aktardığı rivayeti çok şüphelidir; Ruska ve Kraus asılsız bulur. Yalnız İhtilâcü\'l-a\'zâ adlı tıp eseri ona nisbet edilir.' },
    },
  ],
  questions: [
    { tr: 'TDV, Sâdık\'ın rivayetlerinin Buhârî\'de olmamasını onun zayıflığına değil, adına uydurma hadis söylenmesine bağlıyor. Bir ilim adamının adının kötüye kullanılması ne anlama gelebilir?' },
    { tr: 'Dört bin rivayetçi sayısı Müfîd ve İbn Uknde\'de geçerken Tûsî yaklaşık 3.200 sayıyor. Böyle büyük sayılar tarihte nasıl değerlendirilmeli?' },
    { tr: '"Lev lâ\'s-seneteni" sözü erken kaynaklarda bulunamıyor. Bir sözün güzel veya bilindik olması, onun tarihsel olarak doğru olduğunu gösterir mi?' },
    { tr: 'Sâdık, Emevilerin çöküşünde ve Abbasilerin yükselişinde isyana girmeyip öğretmeyi seçti. Bu tutum, ilim ile siyaset arasında nasıl bir denge gösterir?' },
    { tr: 'Mâlik Sünni, Sâdık Şii gelenekte imam sayılıyor, ama ikisi de Medine\'de aynı ilim ortamında yetişti. Mezhepleri ayıran şeyler ile ortak ilim mirası arasında nasıl bir denge kurulabilir?' },
  ],
  summary: { tr: 'İmam Câfer es-Sâdık (ö. 148 H) Medine\'de siyasetten uzak bir ilim halkası kurdu; Mâlik\'in ondan hadis dinlediği TDV\'de de geçer, Ebû Hanîfe ile ilişkisi ise Şii kaynaklarında "öğrencilik", TDV\'de "ilmî görüşme" olarak aktarılır.' },
};

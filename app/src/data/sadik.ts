import type { HistEvent } from '../types';

// Kaynak notu: TDV (Câfer es-Sâdık, Ebû Hanîfe, Mâlik b. Enes maddeleri), Wikipedia ve WikiShia sayfaları bu oturumda okundu.
// Muvatta/Zehebî/Mekkî/Hârezmî'nin birincil metinleri okunmadı; bunlar ikincil aktarıma dayanır ve 'check' işaretlidir.
export const sadik: HistEvent = {
  id: 'sadik',
  date: { tr: '80/83 H (699/702) - 148 H (765), Medine', en: '80/83 AH (699/702) - 148 AH (765), Medina' },
  title: { tr: 'İmam Câfer es-Sâdık ve öğrencileri: Ebû Hanîfe ve Mâlik', en: 'Imam Ja\'far al-Sadiq and his students: Abu Hanifa and Malik' },
  hook: { tr: 'Medine\'de bir ilim kapısı açıldı: İmam Câfer es-Sâdık ve halkasına uğrayan âlimler.', en: 'A circle of learning in Medina, open to the founders of two schools.' },
  scenes: [
    {
      text: { tr: 'Câfer b. Muhammed 80 (699) veya 83 (702) yılında Medine\'de doğdu; çoğu kaynak 83\'ü esas alır. Babası İmam Muhammed el-Bâkır\'dır, soyu Hz. Ali ve Hz. Fatıma\'ya uzanır. Annesi Ümmü Ferve, Kâsım b. Muhammed\'in kızıdır; Kâsım, Hz. Ebû Bekir\'in torunudur. Şii kaynaklarında Altıncı İmam, Sünni kaynaklarında da büyük bir âlim ve Ehl-i Beyt mensubu olarak anılır. "es-Sâdık", doğru sözlü lakabıyla tanınır. Bu rivayet Sünni kaynaklarında da geçmektedir (TDV İslâm Ansiklopedisi, "Câfer es-Sâdık").' },
      art: { bg: 'city', props: ['palms'], actors: [{ kind: 'man', x: 50, label: { tr: 'İmam Câfer es-Sâdık' } }, { kind: 'crowd', x: 22, scale: 4 }] },
      by: 'both',
    },
    {
      text: { tr: 'Gençliği Emevi hanedanının çözüldüğü yıllara denk geldi. Sonra iktidar Abbasilere geçti. Sâdık isyanlara katılmadı; Medine\'de ilme ve öğretmeye yöneldi. Şii kaynaklarına göre Halife Mansûr onu zehirletti. TDV bu haberi Şii rivayeti olarak aktarır.' },
      art: { bg: 'night', props: ['moon', 'stars'], actors: [{ kind: 'man', x: 40, pose: 'sit', label: { tr: 'İmam Câfer es-Sâdık' } }, { kind: 'man', x: 76, label: { tr: 'Halife Mansûr' } }] },
      by: 'shia',
    },
    {
      text: { tr: 'Medine\'de Mescid-i Nebevi çevresinde ders halkaları kuruldu. Ondan hadis dinleyenlerin sayısı dört bine kadar çıkarılır. Bu sayı Şii kaynaklarına dayanır. Şeyh Müfîd el-İrşâd\'da, İbn Uknde ise öğrencilerini sayan eserinde dört bin kişi anmıştır. Şeyh Tûsî\'nin Ricâl\'inde yaklaşık 3.200 isim geçer. Rakam kaynaktan kaynağa değişir. TDV de sayıyı "Şia kaynaklarına göre" diye verir.' },
      art: { bg: 'interior', props: ['scroll'], actors: [{ kind: 'man', x: 52, pose: 'sit', label: { tr: 'İmam Câfer es-Sâdık' } }, { kind: 'crowd', x: 24, scale: 7 }] },
      by: 'shia',
    },
    {
      text: { tr: 'Sâdık\'ın ilmi hadis, fıkıh ve kelamla anılır. Şii fıkhı onun ve babasının rivayetlerine dayandığı için Câferî mezhebi adını taşır. Şii kaynaklarında imamların ilmi, Peygamber\'den gelen bir emanet olarak anlatılır. TDV onu, masum saymadan, saygın bir müctehid olarak anar. Kimya ve tıp nispeti sağlam değildir. Câbir b. Hayyân\'a bilgi aktardığı rivayeti TDV çok şüpheli sayar; Ruska ve Kraus gibi araştırmacılar asılsız bulur. Tıpla ilgili İhtilâcü\'l-a\'zâ ona nispet edilir. Kimya ve cefr eserlerinin çoğu, sonraki Şii-Bâtınî çevrelerin ürünü olabilir.' },
      art: { bg: 'interior', props: ['scroll'], actors: [{ kind: 'man', x: 40, pose: 'sit', label: { tr: 'İmam Câfer es-Sâdık' } }, { kind: 'crowd', x: 72, scale: 4 }] },
      by: 'both',
    },
    {
      text: { tr: 'Ebû Hanîfe ile ilişkisi ilmî bir karşılaşmadır. TDV, Sâdık\'ın onunla Medine\'de ve Irak\'ta konuşmalar yaptığını yazar. Ebû Hanîfe maddesi, onun Sâdık\'ı da içeren Ehl-i Beyt âlimleriyle görüşüp özellikle akaidde yararlandığını söyler; Sâdık\'ı açıkça hocası saymaz. Asıl silsile Hammâd b. Ebû Süleyman, İbrahim en-Nehaî ve Şa\'bî üzerinden gider. Şii kaynaklarında ise Ebû Hanîfe, Sâdık\'ın öğrencisi olarak anılır. Bu rivayet Sünni kaynaklarında da geçmektedir (TDV İslâm Ansiklopedisi, "Câfer es-Sâdık"; "Ebû Hanîfe").' },
      art: { bg: 'interior', props: ['scroll'], actors: [{ kind: 'man', x: 30, label: { tr: 'Ebû Hanîfe' } }, { kind: 'man', x: 62, pose: 'sit', label: { tr: 'İmam Câfer es-Sâdık' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Şii kaynaklarına göre Ebû Hanîfe imamdan iki yıl ders aldı ve "O iki yıl olmasaydı Nu\'mân helak olurdu" dedi. Bu sözün erken bir kaynağı bulunamadı. WikiShia, sözün erken kaynaklarda yer almadığını belirtir. Kâşân Üniversitesi\'ndeki bir inceleme, sözün ilk kez 13. yüzyıl H. tarihli Tuhfe-i İsnâ Aşeriyye\'de göründüğünü ve "iki yıl"ın Zeyd b. Ali\'ye işaret edebileceğini ileri sürer. TDV ise sözü tasavvufla ilgili bir iddia olarak anıp reddeder. Sözün Sâdık\'a ait olup olmadığı tartışmalıdır.' },
      art: { bg: 'dawn', props: ['scroll'], actors: [{ kind: 'man', x: 40, label: { tr: 'Ebû Hanîfe' } }, { kind: 'man', x: 66, pose: 'sit', label: { tr: 'İmam Câfer es-Sâdık' } }] },
      by: 'shia',
    },
    {
      text: { tr: 'Medine\'nin imamı Mâlik b. Enes (ö. 179/795), Sâdık\'tan hadis dinleyenler arasında anılır. Bu rivayet Sünni kaynaklarında da geçmektedir (TDV İslâm Ansiklopedisi, "Câfer es-Sâdık"). Şii kaynaklarında Şeyh Saduk\'un el-Hısâl\'inde Mâlik\'in imama giderek hadis dinlediği aktarılır. Muvatta\'daki yeri ve Mâlik\'in övgü sözleri birincil metinden doğrulanamadı. TDV\'nin Mâlik maddesinde Sâdık\'ın adı geçmez.' },
      art: { bg: 'city', props: ['minbar'], actors: [{ kind: 'man', x: 34, label: { tr: 'Mâlik b. Enes' } }, { kind: 'man', x: 66, pose: 'sit', label: { tr: 'İmam Câfer es-Sâdık' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Birçok Sünni âlim Sâdık\'ı övdü. Zehebî onu büyük âlimler arasında anar. Şii kaynakları, Tezkiretü\'l-huffâz\'da onu en bilgin kişilerden saydığını aktarır. Bu metin burada okunmadı. Câhiz\'e atfedilen söz, ilmi ve fıkhıyla dünyayı doldurduğu yönündedir. Rivayetleri Kütüb-i Sitte\'de bulunur. Bu rivayet Sünni kaynaklarında da geçmektedir (TDV İslâm Ansiklopedisi, "Câfer es-Sâdık"). TDV\'ye göre Buhârî Sahîh\'inde ondan rivayet almamıştır. Sebep, Sâdık\'ın zayıf görülmesi değil, meclisine girenlerin ona uydurma hadis isnat etmesidir.' },
      art: { bg: 'interior', props: ['scroll'], actors: [{ kind: 'man', x: 50, pose: 'sit', label: { tr: 'İmam Câfer es-Sâdık' } }, { kind: 'crowd', x: 22, scale: 5 }] },
      by: 'sunni',
    },
    {
      text: { tr: 'İmam Câfer es-Sâdık 148 H. (765) yılında Medine\'de vefat etti ve Cennetü\'l-Bakî\'ye defnedildi. Şii kaynaklarında o, Ehl-i Beyt mektebinin ve Câferî mezhebinin kurucusudur; ilim halkası bu mektebin dayanağı sayılır. Sünni kaynaklarında da Medine ilminin saygın bir halkası olarak anılır. Bu halka, iki geleneğin ortak andığı bir kapıdır. Bu rivayet Sünni kaynaklarında da geçmektedir (TDV İslâm Ansiklopedisi, "Câfer es-Sâdık").' },
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
      shia: { tr: 'Ebû Hanîfe ile Sâdık\'ın ilmî ilişkisi iki kaynakta da anılır. Şii anlatıda Ebû Hanîfe onun öğrencisidir; İbn Ebi\'l-Hadîd de onu öğrenci sayar. "İki yıl" sözünün erken kaynağı bulunamamıştır.' },
      sunni: { tr: 'Ebû Hanîfe ile Sâdık\'ın ilmî ilişkisi iki kaynakta da anılır. TDV bunu görüşme ve akaidden yararlanma olarak yazar, öğrenci diye nitelemez; "iki yıl" sözü erken kaynaklarda yoktur.' },
    },
    {
      title: { tr: 'Mâlik, Sâdık\'tan rivayet etti mi?' },
      shia: { tr: 'Mâlik\'in Sâdık\'tan hadis dinlediği iki kaynakta da anılır. Şii aktarımda bu, Saduk\'un el-Hısâl\'indeki gidiş rivayetine dayanır.' },
      sunni: { tr: 'Mâlik\'in Sâdık\'tan hadis dinlediği iki kaynakta da anılır. TDV bunu açıkça yazar; Muvatta\'daki yer ve numaralar bu çalışmada doğrulanamadı.' },
    },
    {
      title: { tr: 'Kimya ve tıp ilmi Sâdık\'a mı aittir?' },
      shia: { tr: 'Bazı eserlerin Sâdık\'a nispeti iki tarafta da tartışılır. Sonraki Şii-Bâtınî çevrelerde kimi kitaplar ona bağlanır; Câbir b. Hayyân\'ın bazı eserleri kendini onun öğretisinin açıklaması olarak sunar.' },
      sunni: { tr: 'Bazı eserlerin Sâdık\'a nispeti iki tarafta da tartışılır. TDV, Câbir\'e bilgi aktardığı rivayeti çok şüpheli sayar; Ruska ve Kraus asılsız bulur. Yalnız İhtilâcü\'l-a\'zâ adlı tıp eseri ona nispet edilir.' },
    },
  ],
  questions: [
    { tr: 'Buhârî\'nin Sahîh\'inde Sâdık\'tan rivayet olmamasını TDV, zayıflığa değil, adına uydurma hadis isnat edilmesine bağlar. Geniş bir ilim halkasında ismin korunması neden zorlaşır?' },
    { tr: 'Dört bin rakamı Müfîd ve İbn Uknde\'de, yaklaşık 3.200 ise Tûsî\'de geçer. Büyük ravi sayıları bir ilim halkasının genişliğini nasıl okutur?' },
    { tr: '"İki yıl" sözü erken kaynaklarda bulunamıyor. Güzel bir sözün meşhur olması, onun tarihî kaydını neden tek başına göstermez?' },
    { tr: 'Sâdık, Emevilerin çözülüşünde ve Abbasilerin yükselişinde isyana girmeden öğretmeyi seçti. İlim halkasını açık tutmak, o yıllarda nasıl bir rehberlikti?' },
    { tr: 'Mâlik ve Sâdık aynı Medine ilminde yetişti. Mezhep sınırları çizilirken ortak hocalar ve ortak rivayetler nasıl hatırlanabilir?' },
  ],
  summary: { tr: 'İmam Câfer es-Sâdık (ö. 148 H) Medine\'de açık bir ilim halkası kurdu. Mâlik\'in ondan hadis dinlediği TDV\'de de geçer. Ebû Hanîfe ile ilişkisi Şii kaynaklarında öğrencilik, TDV\'de ilmî görüşme olarak anılır. Câferî mezhep, bu halkanın rivayetleriyle oluştu.' },
};

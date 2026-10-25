// On İki İmam: künye, lakaplar, tarihler ve karakteristik özellikler.
// Bilgiler Şii biyografi geleneği ve TDV İslâm Ansiklopedisi'ndeki genel anlatımlardan özetlenmiştir; tarih ve künye
// ayrıntılarında kaynaklar arasında küçük farklar vardır. Yayın öncesinde birincil kaynaklardan kontrol edilmelidir.

export type Student = { name: string; years?: string; group: 'sunni' | 'shia'; note: string };

export type Imam = {
  id: string;
  no: number;
  name: string; // ekranda görünen ad
  kunya: string;
  lakaplar: { ad: string; anlam?: string }[];
  born: string;
  died: string;
  buried: string;
  parents: string;
  period?: string;
  traits: string[];
  bio: string;
  eventId?: string; // ilgili olay
  students?: Student[];
  studentsIntro?: string;
  studentsNote?: string;
};

export const IMAMS: Imam[] = [
  {
    id: 'ali', no: 1, name: 'Hz. Ali', kunya: "Ebü'l-Hasan, Ebû Türâb",
    lakaplar: [
      { ad: "Emîrü'l-Mü'minîn", anlam: 'müminlerin emiri' },
      { ad: 'el-Murtazâ', anlam: 'Allah\'ın razı olduğu' },
      { ad: 'Esedullah', anlam: "Allah'ın aslanı" },
      { ad: 'Haydar', anlam: 'aslan' },
      { ad: 'Kerrâr', anlam: 'tekrar tekrar saldıran' },
      { ad: 'el-Vasî', anlam: 'Peygamber\'in vasisi (Şii kaynaklarında)' },
      { ad: "Bâbü'l-İlm", anlam: 'ilmin kapısı' },
    ],
    born: '13 Receb, yaklaşık 600 — Mekke (Şii kaynaklarında Kâbe\'nin içinde)',
    died: '21 Ramazan 40 H (661) — Kûfe; İbn Mülcem\'in saldırısı',
    buried: 'Necef',
    parents: "Babası Ebû Tâlib, annesi Fâtıma bint Esed",
    period: 'Şii inancında 11–40 H arası imam',
    traits: ['Cesaret ve fedakârlık: hicret gecesi Peygamber\'in yatağında yattı', 'Derin ilim: «ilmin kapısı» diye anılır', 'Adalet ve sade yaşam (zühd)', 'Peygamber\'e çocukluğundan itibaren yakınlık'],
    bio: "Peygamber'in amcaoğlu ve damadıdır. Çocuk yaşta iman edenlerden biri olarak anılır; Bedir, Uhud, Hendek ve Hayber'de önde savaştı. Şii inancında Gadir Hum'da velayeti ilan edilen ilk imamdır; Sünni kaynaklarında dördüncü halife olarak anılır. Nehcü'l-Belağa hutbe ve sözlerinin derlemesidir.",
    eventId: 'ali-kimdir',
  },
  {
    id: 'hasan', no: 2, name: 'Hz. Hasan', kunya: 'Ebû Muhammed',
    lakaplar: [
      { ad: 'el-Müctebâ', anlam: 'seçilmiş' },
      { ad: 'Seyyid', anlam: 'efendi' },
      { ad: 'Zekî', anlam: 'temiz' },
      { ad: 'es-Sıbt', anlam: 'Peygamber\'in torunu' },
    ],
    born: '15 Ramazan 3 H (625) — Medine',
    died: "49–51 H arası (çoğunlukla 50 H / 670) — Medine; zehirlenme rivayeti",
    buried: "Bakî' Mezarlığı, Medine",
    parents: 'Babası Hz. Ali, annesi Hz. Fatıma',
    period: 'Yaklaşık 40–50 H arası',
    traits: ['Halimlik ve yumuşak huy', 'Cömertlik', 'Kan dökülmesin diye sulhu seçmesi', 'Peygamber\'in «cennet gençlerinin efendisi» dediği iki torundan biri'],
    bio: "Peygamber'in en sevdiği torunlardandır. Babasının şehadetinden sonra Kûfe'de biat edildi; Muaviye ile anlaşıp yönetimi bırakarak iç savaşı önledi. Buhari 2704'teki «oğlum seyyiddir, Allah onunla iki büyük grubu barıştıracak» sözü bu sulha işaret edilerek anılır.",
    eventId: 'hasan',
  },
  {
    id: 'huseyin', no: 3, name: 'Hz. Hüseyin', kunya: 'Ebû Abdillâh',
    lakaplar: [
      { ad: "Seyyidü'ş-Şüheda", anlam: 'şehitlerin efendisi' },
      { ad: 'eş-Şehîd', anlam: 'şehit' },
      { ad: 'el-Mazlûm', anlam: 'zulme uğrayan' },
      { ad: 'es-Sıbt', anlam: 'Peygamber\'in torunu' },
    ],
    born: '3 Şaban 4 H (626) — Medine',
    died: '10 Muharrem 61 H (680) — Kerbela; şehit edildi',
    buried: 'Kerbela',
    parents: 'Babası Hz. Ali, annesi Hz. Fatıma',
    period: 'Yaklaşık 50–61 H arası',
    traits: ['Zulme biat etmeyen onurlu duruş', 'Fedakârlık', 'İbadete ve Kur\'an\'a düşkünlük', 'Kerbela\'da ailesi ve arkadaşlarıyla direniş'],
    bio: "Yezid'e biat etmeyerek Mekke'den Kûfe'ye yola çıktı; Kerbela'da 10 Muharrem 61'de ailesi ve arkadaşlarıyla birlikte şehit edildi. Âşûrâ günü Şii dünyasında yasla anılır. Hz. Hasan ve Hz. Hüseyin, Peygamber'in «cennet gençlerinin efendileri» olarak anıldığı iki torundur.",
    eventId: 'kerbela',
  },
  {
    id: 'zeynelabidin', no: 4, name: 'İmam Ali Zeynelâbidîn', kunya: 'Ebû Muhammed, Ebü\'l-Hasan',
    lakaplar: [
      { ad: 'Zeynelâbidîn', anlam: 'ibadet edenlerin süsü' },
      { ad: 'es-Seccâd', anlam: 'çok secde eden' },
      { ad: "Seyyidü's-Sâcidîn", anlam: 'secde edenlerin efendisi' },
    ],
    born: '5 Şaban 38 H (658) — Medine (bazı kaynaklarda 36 H)',
    died: '94 veya 95 H (712-713) — Medine; zehirlenme rivayeti',
    buried: "Bakî' Mezarlığı, Medine",
    parents: 'Babası Hz. Hüseyin, annesi Şehrbânû (Şii kaynaklarında)',
    period: 'Yaklaşık 61–95 H arası',
    traits: ['Çok ibadet ve dua', 'Siyasetten uzak, ilim ve ibadetle geçen bir hayat', 'Kerbela\'dan sağ kalan tek erkek evlat', 'Sahife-i Seccâdiyye\'nin sahibi olarak anılır'],
    bio: "Hastalığı yüzünden Kerbela'da savaşa katılamadı ve ailenin sağ kalan tek erkek çocuğuydu. Esirlik yolculuğundan sonra Medine'ye döndü. Duaları Sahife-i Seccâdiyye'de toplanmıştır; hak ve görevleri anlatan Risâletü'l-Hukûk da ona nispet edilir. Sünni kaynaklarında da saygın bir tabiî olarak anılır.",
    eventId: 'imamlar',
  },
  {
    id: 'bakir', no: 5, name: 'İmam Muhammed el-Bâkır', kunya: 'Ebû Ca\'fer',
    lakaplar: [
      { ad: 'el-Bâkır', anlam: 'ilmi yarıp derinliğine ulaşan' },
      { ad: "Bâkırü'l-İlm", anlam: 'ilmi yaran' },
      { ad: 'eş-Şâkir', anlam: 'şükreden' },
    ],
    born: '1 Receb 57 H (677) — Medine',
    died: '114 H (732) — Medine (bazı kaynaklarda 117 H)',
    buried: "Bakî' Mezarlığı, Medine",
    parents: 'Babası Zeynelâbidîn, annesi Fâtıma bint Hasan',
    period: 'Yaklaşık 95–114 H arası',
    traits: ['Geniş ilim ve ders halkası', 'Fıkıh, tefsir ve hadis rivayetleri', 'Hem Hz. Hasan hem Hz. Hüseyin soyundan gelen ilk imam (annesi Hz. Hasan\'ın kızı)', 'Öğrencileri arasında Câfer, Katâde, Zührî ve Evzâî sayılır'],
    bio: "Medine'de kurduğu ilim halkasıyla tanınır; Emevilerin zayıfladığı bir dönemde Şii fıkhının temel rivayetleri onun ve oğlu Sâdık'ın etrafında şekillendi. Sünni kaynaklarında da güvenilir bir ravi sayılır.",
    eventId: 'imamlar',
  },
  {
    id: 'sadik', no: 6, name: 'İmam Câfer es-Sâdık', kunya: 'Ebû Abdillâh',
    lakaplar: [
      { ad: 'es-Sâdık', anlam: 'doğru sözlü' },
      { ad: 'es-Sâbir', anlam: 'sabırlı' },
      { ad: 'el-Fâzıl', anlam: 'erdemli' },
      { ad: 'et-Tâhir', anlam: 'temiz' },
    ],
    born: '17 Rebîülevvel 83 H (702) — Medine (bazı kaynaklarda 80 H / 699)',
    died: '25 Şevval 148 H (765) — Medine; Şii kaynaklarında Mansûr\'un zehirletmesi',
    buried: "Bakî' Mezarlığı, Medine",
    parents: 'Babası Muhammed el-Bâkır, annesi Ümmü Ferve (Kâsım b. Muhammed\'in kızı)',
    period: 'Yaklaşık 114–148 H arası',
    traits: ['Çok geniş ilim: hadis, fıkıh, kelam, tefsir', 'Siyasi isyanlara girmeden ilme yöneldi', 'Binlerce öğrenciye ders verdiği anlatılır', 'Câferî mezhebi onun adıyla anılır'],
    bio: "Emevilerin son, Abbasilerin ilk yıllarında Medine'de ilim halkası kurdu. Şii fıkhı onun ve babasının rivayetlerine dayandığı için «Câferî mezhebi» diye anılır. Hem Şii hem Sünni kaynaklarında saygın bir âlim olarak geçer.",
    eventId: 'sadik',
    studentsIntro: "Sâdık'ın ilim halkasından hem Şii hem Sünni hadis kaynaklarında rivayet eden birçok kişi anılır. Sünni mezhep kurucularıyla ilişkisi ise kaynaklarda şöyle aktarılır:",
    students: [
      {
        name: 'Ebû Hanîfe', years: 'ö. 150 H', group: 'sunni',
        note: "Sâdık'ın çağdaşıdır. TDV, Medine ve Irak'ta ilmî görüşmeler yaptıklarını yazar; ancak onu açıkça «hocası» saymaz (Ebû Hanîfe'nin asıl hocaları Hammâd b. Ebû Süleyman ve İbrahim en-Nehaî çizgisindendir). Şii kaynaklarında öğrencisi olarak anılır; «o iki yıl olmasaydı Nu'mân helak olurdu» sözü ise erken kaynaklarda bulunamadı.",
      },
      {
        name: 'Mâlik b. Enes', years: 'ö. 179 H', group: 'sunni',
        note: "TDV, Mâlik'in Sâdık'tan hadis dinleyenler arasında olduğunu yazar. Şii kaynaklarında (Saduk, el-Hısâl) imama giderek hadis dinlediği aktarılır. Muvatta'daki yeri birincil metinden doğrulanmadı.",
      },
      {
        name: 'Şâfiî', years: '150–204 H', group: 'sunni',
        note: "Sâdık 148 H'de vefat etti; Şâfiî ise 150 H'de doğdu. Bu yüzden Sâdık'ın öğrencisi olamaz. Hocaları arasında Mâlik b. Enes ve Müslim b. Hâlid ez-Zencî anılır; yani Sâdık'la ilişkisi dolaylıdır.",
      },
      {
        name: 'Süfyân es-Sevrî, İbn Cüreyc, Süfyân b. Uyeyne, Yahyâ b. Saîd el-Ensârî', group: 'sunni',
        note: "Sünni hadis ricâl kitaplarında Sâdık'tan rivayet eden râviler arasında sayılırlar (ayrıntılar kaynaklardan kontrol edilmelidir).",
      },
      {
        name: 'Zürâre b. A\'yen, Muhammed b. Müslim, Hişâm b. el-Hakem, Ebân b. Teğlib', group: 'shia',
        note: "Şii ricâl kaynaklarında Sâdık'ın yakın talebeleri ve rivayet zincirinin önde gelen isimleri arasında anılırlar. Dört Yüz Usûl denen derlemeler öğrencilerine bağlanır.",
      },
      {
        name: 'Câbir b. Hayyân', group: 'shia',
        note: "Sâdık'a bilgi aktardığı rivayeti TDV'de çok şüpheli sayılır; Ruska ve Kraus gibi araştırmacılar asılsız bulur. Kimya ve cefr eserleri sonraki dönemlere ait olabilir.",
      },
    ],
    studentsNote: "Özet: Ebû Hanîfe ve Mâlik, Sâdık'la ilmî görüşme yapan ya da ondan hadis alan çağdaş âlimlerdir. Her biri kendi fıkıh yöntemini kurmuştur: Ebû Hanîfe re'y ve kıyas, Mâlik Medine ameli, Câferî mezhebi ise Bâkır ve Sâdık'ın rivayetleri üzerine şekillenmiştir. Ebû Hanîfe ve Şâfiî'nin «Sâdık'ın öğrencisi olup mezhebini onun öğrettikleriyle kurdukları» anlatımı erken kaynaklarla doğrulanamaz; Şâfiî için kronoloji bunu mümkün kılmaz.",
  },
  {
    id: 'kazim', no: 7, name: 'İmam Mûsâ el-Kâzım', kunya: "Ebü'l-Hasan",
    lakaplar: [
      { ad: 'el-Kâzım', anlam: 'öfkesini yutan' },
      { ad: "el-Abdü's-Sâlih", anlam: 'salih kul' },
      { ad: "Bâbü'l-Havâic", anlam: 'ihtiyaçların kapısı' },
    ],
    born: '7 Safer 128 H (745) — Ebvâ (Mekke-Medine arası)',
    died: '25 Receb 183 H (799) — Bağdat; hapiste',
    buried: 'Kâzımeyn, Bağdat',
    parents: 'Babası Câfer es-Sâdık, annesi Hamîde',
    period: 'Yaklaşık 148–183 H arası',
    traits: ['Sabır ve hilm: öfkesini yutmasıyla anılır', 'Cömertlik', 'Hârûnürreşîd\'in baskısıyla Bağdat\'a götürüldü ve son yıllarını gözetim altında geçirdi', 'İlmi ve ibadeti zindanda da sürdürdü'],
    bio: "Medine'de ilim ve sabırla tanındı. Halife Hârûnürreşîd Medine'ye gelince onu Bağdat'a götürttü; son yıllarını ev hapsi ve zindan arasında gözetim altında geçirdi. Kabri etrafında Kâzımiyye (Kâzımeyn) semti oluştu.",
    eventId: 'imamlar',
  },
  {
    id: 'riza', no: 8, name: 'İmam Ali er-Rızâ', kunya: "Ebü'l-Hasan",
    lakaplar: [
      { ad: 'er-Rızâ', anlam: 'razı olunan' },
      { ad: 'Garîbü\'l-Gurabâ', anlam: 'gariplerin gariplisi' },
    ],
    born: '11 Zilkade 148 H (765) — Medine',
    died: "203 H (818) — Tûs; Me'mun döneminde",
    buried: 'Meşhed (Horasan)',
    parents: 'Babası Mûsâ el-Kâzım, annesi Necme (Şii kaynaklarında)',
    period: 'Yaklaşık 183–203 H arası',
    traits: ['Geniş ilim ve münazaralar', 'Me\'mun\'un veliahtlık teklifini zorunlu olarak kabul etti', 'Tevazu', 'Kabri bir ilim ve ziyaret merkezi oldu'],
    bio: "Halife Me'mun onu Merv'e çağırdı, önce hilafeti bırakmayı, kabul etmeyince veliahtlığı önerdi. TDV'ye göre iki ay direndikten sonra ahidnameyi imzalamak zorunda kaldı. Tûs yakınlarında vefat etti; Meşhed şehri onun kabri etrafında gelişti.",
    eventId: 'imamlar',
  },
  {
    id: 'cevad', no: 9, name: 'İmam Muhammed el-Cevâd', kunya: "Ebû Ca'fer (ikinci)",
    lakaplar: [
      { ad: 'el-Cevâd', anlam: 'cömert' },
      { ad: 'et-Takî', anlam: 'takva sahibi' },
      { ad: "İbnü'r-Rızâ", anlam: "Rızâ'nın oğlu" },
    ],
    born: '10 Receb 195 H (811) — Medine',
    died: '220 H (835) — Bağdat (yaklaşık 25 yaşında)',
    buried: 'Kâzımeyn, Bağdat',
    parents: 'Babası Ali er-Rızâ, annesi Sebîke (Şii kaynaklarında)',
    period: 'Yaklaşık 203–220 H arası',
    traits: ['Çok genç yaşta imamlık: babasını yedi-sekiz yaşında kaybetti', 'Cömertlik', 'Me\'mun\'un kızı Ümmü\'l-Fazl ile evlendirildi', 'Gençliğine rağmen ilmiyle tanındı'],
    bio: "Babasını yedi yaşında kaybetti; Me'mun onu Bağdat'a getirip kızıyla evlendirdi. 220 H'de Bağdat'ta vefat etti. Şii kaynaklarında zehirlendiği rivayet edilir; TDV bunu yalnız bu rivayetlere atfeder.",
    eventId: 'imamlar',
  },
  {
    id: 'hadi', no: 10, name: 'İmam Ali el-Hâdî', kunya: "Ebü'l-Hasan (üçüncü)",
    lakaplar: [
      { ad: 'el-Hâdî', anlam: 'yol gösteren' },
      { ad: 'en-Nakî', anlam: 'temiz' },
      { ad: 'el-Askerî', anlam: 'Samarra askerî şehri' },
    ],
    born: '15 Zilhicce 212 H (828) — Sarya (Medine yakını)',
    died: '3 Receb 254 H (868) — Samarra',
    buried: 'Samarra (Askeriyye)',
    parents: 'Babası Muhammed el-Cevâd, annesi Semâne (Şii kaynaklarında)',
    period: 'Yaklaşık 220–254 H arası',
    traits: ['Mütevekkil tarafından 848\'de Samarra\'ya getirildi ve vefatına dek gözetimde yaşadı', 'Ziyâret-i Câmia-i Kebîre ona nispet edilir', 'İlmi ve ibadetiyle tanındı', 'Şii cemaatini gizli yollarla yönetti'],
    bio: "Halife Mütevekkil tarafından Samarra'ya getirildi ve 254 H'de vefatına dek gözetim altında yaşadı. Şii kaynaklarında zehirlendiği rivayet edilir; TDV bunu yalnız bu rivayetlere atfeder.",
    eventId: 'imamlar',
  },
  {
    id: 'askeri', no: 11, name: 'İmam Hasan el-Askerî', kunya: 'Ebû Muhammed',
    lakaplar: [
      { ad: 'el-Askerî', anlam: 'Samarra askerî şehri' },
      { ad: 'ez-Zekî', anlam: 'temiz' },
      { ad: 'el-Hâlis', anlam: 'halis' },
    ],
    born: '8 Rebîülâhir 232 H (846)',
    died: '8 Rebîülevvel 260 H (874) — Samarra',
    buried: 'Samarra (Askeriyye)',
    parents: "Babası Ali el-Hâdî; annesi kaynaklarda farklı adlarla anılır",
    period: 'Yaklaşık 254–260 H arası',
    traits: ['Samarra\'da sıkı gözetim: şehirden ayrılmasına izin verilmedi', 'Vekil (nâib) teşkilatını kurdu', 'Kısa bir imamlık dönemi', 'Vefatıyla gaybet dönemine geçildi'],
    bio: "Samarra'dan ayrılmasına izin verilmeyen bir imam olarak «Askerî» diye anıldı. Şii kaynaklarında zehirlendiği rivayet edilir; TDV bunu yalnız bu rivayetlere atfeder. İmâmî Şiîlerin çoğuna göre ölümünden kısa süre önce oğlu Muhammed el-Mehdî doğdu.",
    eventId: 'imamlar',
  },
  {
    id: 'mehdi', no: 12, name: 'İmam Muhammed el-Mehdî', kunya: "Ebü'l-Kâsım",
    lakaplar: [
      { ad: 'el-Mehdî', anlam: 'hidayete eren, yol gösterilen' },
      { ad: 'el-Kâim', anlam: 'kalkacak olan' },
      { ad: 'el-Hüccet', anlam: 'delil' },
      { ad: "Sâhibü'z-Zamân", anlam: 'zamanın sahibi' },
      { ad: 'el-Muntazar', anlam: 'beklenen' },
    ],
    born: '15 Şaban 255 H (869) — Samarra (Şii inancına göre)',
    died: 'Vefat etmedi, gaybette (gizlilikte) olduğuna inanılır',
    buried: 'Yok (gaybette)',
    parents: 'Babası Hasan el-Askerî; annesi Şii kaynaklarında çeşitli adlarla anılır',
    period: 'Küçük gaybet 260–329 H; ardından büyük gaybet',
    traits: ['On ikinci imam: gaybette olduğuna inanılır', 'Dört nâib küçük gaybet döneminde onunla Şiîler arasında aracılık etti', 'Adaleti yeryüzüne hâkim kılmak üzere ortaya çıkacağına inanılır', 'Sünni kaynaklarında «Mehdi» rivayetleri farklı bir anlayışla yer alır'],
    bio: "İmâmî Şiîlerin çoğuna göre Hasan el-Askerî'nin oğludur. Doğumu Abbasi baskısı yüzünden gizli tutuldu. 260–329 H arasındaki «küçük gaybet»te dört nâibi aracılık etti; ardından «büyük gaybet» başladı. Ahmed b. Hanbel, Ebû Dâvûd ve Tirmizî gibi bazı Sünni kaynaklarında da Peygamber soyundan gelecek bir «Mehdi» rivayeti vardır; Buhârî ve Müslim'de bulunmaz.",
    eventId: 'imamlar',
  },
];

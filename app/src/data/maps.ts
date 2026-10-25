import { formatKm, kmBetween, PLACES, type PlaceId } from './geo';

export type MapRegion = 'hicaz' | 'irak';

export type MapEntry = {
  id: string;
  title: string;
  subtitle: string;
  region: MapRegion;
  focus: PlaceId;
  eventId: string;
  also: string[];
  show: PlaceId[];
  lines: [PlaceId, PlaceId][];
  /** Tabloda görünsün, haritada çizgi olarak çizilmesin. */
  extra?: [PlaceId, PlaceId][];
  paragraphs: string[];
  roadNotes: string[];
  placeNote?: string;
};

export const MAP_FOOT =
  'Çizgiler haritada iki noktayı birleştirir. Sayılar, koordinattan hesaplanan kuş uçuşu (büyük daire) mesafedir. Kara yolu ve eski kervan, dağ ve su başı yüzünden daha uzun olur.';

const MM: [PlaceId, PlaceId] = ['mekke', 'medine'];

export const MAPS: MapEntry[] = [
  {
    id: 'mekke',
    title: 'Mekke ve Kâbe',
    subtitle: 'Kâbe ve Mescid-i Haram. Hz. Ali\'nin doğduğu rivayet edilen şehir.',
    region: 'hicaz',
    focus: 'mekke',
    eventId: 'ali-kimdir',
    also: [],
    show: ['mekke', 'medine'],
    lines: [MM],
    paragraphs: [
      'Mekke, Kâbe\'nin ve Mescid-i Haram\'ın şehridir. Şii kaynakları Hz. Ali\'nin Kâbe\'nin içinde doğduğunu güçlü biçimde anlatır; annesi Fâtıma bint Esed\'in doğum sancısıyla Kâbe\'ye sığındığı rivayeti bazı Sünni kitaplarında da geçer. Peygamber burada doğdu, ilk vahiy burada geldi, Veda Haccı burada yapıldı.',
      'Haritadaki nokta Kâbe\'nin yeridir. Gadir Hum, hac dönüşünde Medine yolunun üzerinde, bu şehrin kuzeyindedir. Çizgi iki harem arasındaki kuş uçuşunu gösterir.',
    ],
    roadNotes: [
      'Mekke ile Medine arasındaki bugünkü kara yolu ve Haremeyn demiryolu yaklaşık 450 km\'dir. Kuş uçuşu tablodadır; fark, dağ ve kıyı yolundan gelir.',
    ],
  },
  {
    id: 'medine',
    title: 'Medine: Sakîfe ve Mescid',
    subtitle: 'Mescid-i Nebevî, Sakîfe ve Ehl-i Beyt\'in evi.',
    region: 'hicaz',
    focus: 'medine',
    eventId: 'sakife',
    also: ['fatima-vefat', 'pence-aba', 'raziyye', 'istihlaf', 'osman', 'sadik'],
    show: ['medine', 'mekke'],
    lines: [MM],
    paragraphs: [
      'Medine, hicretten sonra Peygamber\'in şehri ve Mescid-i Nebevî\'nin yeridir. Sakîfe-i Benî Sâide, mescidin yanındaki Benî Sâide gölgeliğidir. Peygamber\'in cenazesi hazırlanırken biat burada konuşuldu. Hz. Fatıma\'nın evi mescidin bitişiğindeydi; Fedek talebi, hastalığı ve gece defni bu şehirde geçer. Kırtas rivayeti de Peygamber\'in hastalığı sırasında Medine\'dedir. Pence-i Âl-i Aba anlatısı aynı eve bağlanır.',
      'Bu ölçekte mahalleler ayrılmaz: Sakîfe, mescid ve ev aynı yerleşimin içindedir. Çizgi, Kâbe ile Mescid-i Nebevî arasını gösterir. Hz. Hasan\'ın kabri Bakî\'dedir. İmam Sâdık da derslerini Medine\'de verdi. Nokta, Mescid-i Nebevî\'nin koordinatıdır.',
    ],
    roadNotes: [
      'Mekke ile Medine arasındaki bugünkü kara yolu ve Haremeyn demiryolu yaklaşık 450 km\'dir.',
    ],
  },
  {
    id: 'gadir',
    title: 'Gadir Hum',
    subtitle: 'Veda Haccı dönüşünde kafilenin durduğu su başı.',
    region: 'hicaz',
    focus: 'gadir',
    eventId: 'gadir',
    also: [],
    show: ['gadir', 'mekke', 'medine'],
    lines: [['gadir', 'mekke'], ['gadir', 'medine'], MM],
    paragraphs: [
      'Gadir Hum, Mekke ile Medine arasında, Kızıldeniz kıyısındaki Cuhfe mîkatının hemen yanında bir su başıdır. Veda Haccı\'ndan dönen kafile burada durdurulmuştu: yollar Medine, Mısır ve Irak yönlerine ayrılıyordu. 18 Zilhicce 10 (632) günü Peygamber, Hz. Ali\'nin elini kaldırarak «Ben kimin mevlâsıysam Ali de onun mevlâsıdır» dedi.',
      'Düz çizgi iki şehri birleştirir. Eski kervan ise su ve geçit yüzünden kıyıyı izler, Cuhfe\'ye uğrardı. Bu yüzden Gadir, Mekke–Medine çizgisinin biraz batısında, denize daha yakın durur. Nokta, su başının bilinen koordinatıdır.',
    ],
    roadNotes: [
      'Cuhfe mîkatı fıkıh kitaplarında Mekke\'ye yaklaşık 187 km\'lik yol diye geçer. Gadir bu mîkatın hemen yanındadır; kuş uçuşu biraz daha kısadır, çünkü kervan kıyı boyunca dolanırdı.',
      'Mekke ile Medine arasındaki bugünkü kara yolu yaklaşık 450 km\'dir.',
    ],
  },
  {
    id: 'hayber',
    title: 'Hayber',
    subtitle: 'Medine\'nin kuzeyindeki vaha ve kaleler.',
    region: 'hicaz',
    focus: 'hayber',
    eventId: 'hayber',
    also: [],
    show: ['hayber', 'fedek', 'medine', 'mekke'],
    lines: [['hayber', 'medine'], ['hayber', 'mekke'], ['hayber', 'fedek'], MM],
    paragraphs: [
      'Hayber, Medine\'nin kuzeyinde, hurmalıklar ve birbirine yakın kalelerden oluşan bir vahadır. Hicretin 7. yılında (628) Peygamber burayı kuşattı. Kaleler günlerce direnince sancak, «Allah\'ı ve Resulü\'nü seven» kişi diye andığı Hz. Ali\'ye verildi.',
      'Fedek, Hayber\'in kuzeydoğusunda ayrı bir yerleşimdi; halkı savaşmadan anlaşmıştı. Haritada her iki vaha da işaretlidir. Seçili nokta Hayber\'dir.',
    ],
    roadNotes: [
      'Hayber sık sık Medine\'nin yaklaşık 150 km kuzeyi diye anılır. Tablodaki kuş uçuşu biraz daha kısadır; vaha yolları düz gitmez.',
    ],
  },
  {
    id: 'fedek',
    title: 'Fedek',
    subtitle: 'Hayber yakınında, Hz. Fatıma\'nın hakkı diye anılan hurmalık.',
    region: 'hicaz',
    focus: 'fedek',
    eventId: 'fedek',
    also: [],
    show: ['fedek', 'hayber', 'medine', 'mekke'],
    lines: [['fedek', 'medine'], ['fedek', 'mekke'], ['fedek', 'hayber'], MM],
    paragraphs: [
      'Fedek, Hayber yakınlarında hurmalıklarıyla bilinen bir köydü. Halkı savaşmadan anlaştığı için toprak ganimet sayılmadı; Peygamber\'in tasarrufunda kaldı. Vefatından sonra Hz. Fatıma bu hakkı istedi. Talebin kabul edilmemesi, küskünlüğünün anlatıldığı yerdir.',
      'Bugün Fedek çoğu araştırmacı tarafından Medine\'nin kuzeyindeki el-Hâit ile özdeşleştirilir. Haritadaki nokta bu özdeşleştirmedir. Hayber, karşılaştırma için aynı haritada durur.',
    ],
    roadNotes: [
      'Klasik kaynaklar Fedek\'i Medine\'ye iki-üç günlük yol diye anlatır. Bazı modern ölçüler 150–160 km der. Tablodaki kuş uçuşu, el-Hâit koordinatına göredir. Köyün tam yeri tartışmalıdır.',
    ],
    placeNote: 'Nokta, Fedek\'in el-Hâit ile özdeşleştirildiği yerdir.',
  },
  {
    id: 'tebuk',
    title: 'Tebük ve Medine',
    subtitle: 'Hicaz\'ın kuzeyinde, Menzile hadisinin seferi.',
    region: 'hicaz',
    focus: 'tebuk',
    eventId: 'menzile',
    also: [],
    show: ['tebuk', 'medine', 'mekke'],
    lines: [['tebuk', 'medine'], ['tebuk', 'mekke'], MM],
    paragraphs: [
      'Tebük, Hicaz\'ın kuzeyinde, Bizans sınırına giden yol üzerindeki bir vahadır. Hicretin 9. yılında (630) Peygamber «Zorluk Ordusu» ile buraya yürüdü ve Hz. Ali\'yi Medine\'de bıraktı. Ayrılık sırasında «Harun Musa\'ya nasılsa sen de bana öylesin» sözü söylendi.',
      'Sözün söylendiği yer Medine\'dir; Tebük, ordunun vardığı sınır vahasıdır. Nokta bugünkü şehirdir. Seferin konakladığı kaynak bu çevrededir.',
    ],
    roadNotes: [
      'Ordu bu yolu günlerce yürüdü. Tablo kuş uçuşunu gösterir; kervan ve asker yolu vadileri izlediği için daha uzundur.',
    ],
  },
  {
    id: 'necran',
    title: 'Necran ve Mübahele',
    subtitle: 'Heyetin yurdu Necran\'dır; buluşma Medine\'de oldu.',
    region: 'hicaz',
    focus: 'necran',
    eventId: 'ehlibeyt',
    also: [],
    show: ['necran', 'mekke', 'medine'],
    lines: [['necran', 'mekke'], ['necran', 'medine'], MM],
    paragraphs: [
      'Necran, Arabistan\'ın güneyinde, bugünkü Necran şehrinin bulunduğu vadidir. Hicretin son yıllarında Necran Hristiyanlarından bir heyet Medine\'ye geldi. Tartışma uzayınca Âl-i İmrân 61. ayetteki mübahele, iki tarafın karşılıklı beddua etmesi, gündeme geldi.',
      'Kaynaklar, Peygamber\'in bu çağrıya Hz. Ali, Hz. Fatıma, Hz. Hasan ve Hz. Hüseyin\'i yanında götürdüğünü aktarır. Buluşma Medine\'deydi. Heyet bedduaya girmeyip anlaşmayı kabul etti. Harita, heyetin yurdunu ve buluşmanın şehrini birlikte gösterir.',
    ],
    roadNotes: [
      'Heyet Necran\'dan Medine\'ye geldi. Tablodaki iki mesafe kuş uçuşudur; kervan yolu daha uzun sürerdi.',
    ],
  },
  {
    id: 'kufe',
    title: 'Kûfe',
    subtitle: 'Hz. Ali\'nin hilafet merkezi ve şehadet yeri.',
    region: 'irak',
    focus: 'kufe',
    eventId: 'hasan',
    also: [],
    show: ['kufe', 'kerbela', 'sam', 'mekke', 'medine'],
    lines: [['kufe', 'mekke'], ['kufe', 'medine'], ['kufe', 'sam'], ['kufe', 'kerbela']],
    paragraphs: [
      'Kûfe, Fırat kıyısında, Hz. Ali\'nin hilafet merkezi yaptığı şehirdir. Cemel ve Sıffin için ordu buradan çıktı. Hz. Ali, Kûfe Ulu Camii\'nde sabah namazında yaralandı ve burada şehit oldu. Hz. Hasan biatı Kûfe\'de aldı; iç savaşı durdurmak için yönetimi Muaviye\'ye bıraktı, sonra Medine\'ye döndü.',
      'Şehir bugünkü Necef\'in hemen yanındadır. Nokta Ulu Cami\'dir. Kerbela, Fırat\'ın batısında, bir günlük yoldadır. Şam, Muaviye\'nin merkezidir.',
    ],
    roadNotes: [
      'Kûfe ile Kerbela arası kuş uçuşu, kaynaklarda geçen yaklaşık bir günlük yola denktir.',
    ],
  },
  {
    id: 'cemel',
    title: 'Cemel ve Basra',
    subtitle: 'Basra dışında, Müslümanların ilk iç savaşı.',
    region: 'irak',
    focus: 'basra',
    eventId: 'cemel',
    also: [],
    show: ['basra', 'kufe', 'mekke', 'medine'],
    lines: [['basra', 'mekke'], ['basra', 'medine'], ['basra', 'kufe']],
    paragraphs: [
      'Cemel, 36 yılında (656) Basra dışında yapıldı. Hz. Ali biati Medine\'de, Mescid-i Nebevî\'de almış, ardından Irak\'a yönelmişti. Karşı taraf Mekke\'den Basra\'ya gelmişti. Hz. Ali\'nin ordusunun toplandığı merkez Kûfe\'ydi.',
      'Çarpışma bugünkü Basra\'nın yerinde, eski şehrin hemen yakınında aranır. Nokta bu konum kaydıdır. Eski Basra yerleşimi biraz daha güneybatıdadır; bu ölçekte aynı noktadır.',
    ],
    roadNotes: [],
  },
  {
    id: 'siffin',
    title: 'Sıffin ve Nehrevan',
    subtitle: 'Fırat kıyısında hakem olayı. Nehrevan da bu haritadadır.',
    region: 'irak',
    focus: 'siffin',
    eventId: 'siffin',
    also: [],
    show: ['siffin', 'kufe', 'sam', 'nehrevan', 'mekke', 'medine'],
    lines: [['siffin', 'mekke'], ['siffin', 'medine'], ['siffin', 'kufe'], ['siffin', 'sam'], ['nehrevan', 'kufe']],
    extra: [['nehrevan', 'mekke'], ['nehrevan', 'medine']],
    paragraphs: [
      'Sıffin, Fırat\'ın kıyısında, bugünkü Rakka çevresinde aranan ovadır. 37 yılında (657) Hz. Ali\'nin Kûfe\'den çıkan ordusu ile Muaviye\'nin Şam ordusu burada karşılaştı. Mushafların mızraklara takılması ve hakem olayı bu seferin sonunda anlatılır.',
      'Hakemi reddeden Haricîlerle çatışma, Bağdat\'ın hemen doğusunda Nehrevan kanalı kıyısında oldu. Nehrevan noktası, savaşı Bağdat yakınına koyan kayıttır. Kanalın daha kuzeyini gösteren kayıtlar da vardır; o takdirde Kûfe\'ye mesafe belirgin uzar. Hz. Ali\'nin şehadeti ise Kûfe Ulu Camii\'ndedir.',
    ],
    roadNotes: [
      'Sıffin noktası Rakka yakınındaki konum kaydıdır. Alanı yaklaşık 55 km batıdaki Ebu Hureyre höyüğüyle özdeşleştiren görüşte Mekke ve Medine mesafesi yalnızca birkaç kilometre değişir.',
    ],
    placeNote: 'Fırat kıyısı, Rakka yakını. Konum kayıtları arasında yaklaşık 55 km\'lik bir fark vardır.',
  },
  {
    id: 'kerbela',
    title: 'Kerbela',
    subtitle: 'Fırat\'ın batısında, Kûfe\'ye bir günlük ova.',
    region: 'irak',
    focus: 'kerbela',
    eventId: 'kerbela',
    also: [],
    show: ['kerbela', 'kufe', 'sam', 'mekke', 'medine'],
    lines: [['kerbela', 'mekke'], ['kerbela', 'medine'], ['kerbela', 'kufe'], ['kerbela', 'sam']],
    paragraphs: [
      'Kerbela, Fırat\'ın batısında, Kûfe\'ye yaklaşık bir günlük mesafedeki ovadır. Hz. Hüseyin biat etmeyerek Medine\'den Mekke\'ye geçti, oradan Kûfe\'ye çağrıldığı için yola çıktı. 10 Muharrem 61 (10 Ekim 680) günü kafile Kûfe\'ye varmadan bu ovada durduruldu.',
      'Şehitlerin türbesi bugün şehrin merkezindedir. Esirler önce Kûfe\'ye, oradan Şam\'a götürüldü. Haritadaki nokta Hz. Hüseyin türbesinin koordinatıdır. Yakın planda Kûfe ile Kerbela\'nın Fırat\'ın iki yakasındaki duruşu görünür.',
    ],
    roadNotes: [
      'Kûfe\'ye kuş uçuşu, kaynaklarda anılan bir günlük yola denktir. Esir kafilesinin yolu Kûfe üzerinden Şam\'a vardı; düz çizgiden uzundur.',
    ],
  },
  {
    id: 'sam',
    title: 'Şam',
    subtitle: 'Emevîlerin merkezi. Esir kafilesinin götürüldüğü şehir.',
    region: 'irak',
    focus: 'sam',
    eventId: 'sebb',
    also: [],
    show: ['sam', 'kufe', 'kerbela', 'siffin', 'mekke', 'medine'],
    lines: [['sam', 'mekke'], ['sam', 'medine'], ['sam', 'kufe'], ['sam', 'kerbela'], ['sam', 'siffin']],
    paragraphs: [
      'Şam, Emevîlerin merkezidir. Muaviye buradan Hz. Ali\'ye biat etmedi; Sıffin\'de Şam ordusu onun bayrağı altındaydı. Hz. Hasan\'ın sulhünden sonra yönetim Şam\'da toplandı. Cuma minberlerinde Hz. Ali\'ye sövme uygulaması bu dönemde yayıldı; Ömer b. Abdülaziz bunu kaldırdı.',
      'Kerbela\'dan sonra Ehl-i Beyt esirleri Yezid\'in meclisine Şam\'a getirildi. Nokta, Emevî Camii çevresindeki eski şehirdir.',
    ],
    roadNotes: [],
  },
];

export function mapsForEvent(eventId: string): MapEntry[] {
  const primary = MAPS.filter(m => m.eventId === eventId);
  const related = MAPS.filter(m => m.also.includes(eventId));
  return [...primary, ...related];
}

export function lineTitle(a: PlaceId, b: PlaceId, focus: PlaceId): string {
  const mm = (a === 'mekke' && b === 'medine') || (a === 'medine' && b === 'mekke');
  if (mm && focus !== 'mekke' && focus !== 'medine') return 'Mekke ↔ Medine';
  if (a !== focus && b !== focus) return `${PLACES[a].name} ↔ ${PLACES[b].name}`;
  const other = a === focus ? b : a;
  return PLACES[other].dative;
}

export type DistanceRow = {
  key: string;
  label: string;
  km: number;
  context: boolean;
  approx: boolean;
};

export function distanceRows(map: MapEntry): DistanceRow[] {
  const pairs: { pair: [PlaceId, PlaceId]; drawn: boolean }[] = [
    ...map.lines.map(pair => ({ pair, drawn: true })),
    ...(map.extra ?? []).map(pair => ({ pair, drawn: false })),
  ];
  const hasMM = pairs.some(({ pair: [a, b] }) => (a === 'mekke' && b === 'medine') || (a === 'medine' && b === 'mekke'));
  if (!hasMM) pairs.push({ pair: ['mekke', 'medine'], drawn: false });

  const rows = pairs.map(({ pair: [a, b] }) => {
    const mm = (a === 'mekke' && b === 'medine') || (a === 'medine' && b === 'mekke');
    const context = mm && map.focus !== 'mekke' && map.focus !== 'medine';
    return {
      key: [a, b].sort().join('-'),
      label: lineTitle(a, b, map.focus),
      km: kmBetween(a, b),
      context,
      approx: !!(PLACES[a].approx || PLACES[b].approx),
    };
  });

  const rank = (r: DistanceRow) => {
    if (r.label === 'Mekke\'ye') return 0;
    if (r.label === 'Medine\'ye') return 1;
    if (r.context) return 5;
    if (r.label.includes('↔')) return 4;
    return 3;
  };
  rows.sort((a, b) => rank(a) - rank(b) || a.label.localeCompare(b.label, 'tr'));
  const seen = new Set<string>();
  return rows.filter(r => {
    if (seen.has(r.key)) return false;
    seen.add(r.key);
    return true;
  });
}

export function meccaMedinaSummary(focus: PlaceId): string {
  const bits: string[] = [];
  if (focus !== 'mekke') bits.push(`Mekke ${formatKm(kmBetween(focus, 'mekke'))}`);
  if (focus !== 'medine') bits.push(`Medine ${formatKm(kmBetween(focus, 'medine'))}`);
  return bits.join(' · ');
}

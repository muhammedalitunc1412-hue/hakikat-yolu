import type { PlaceId } from './geo';

// 7. yüzyıl kervan temposu. Kuş uçuşu değil, tarihî yol uzunluğu kullanılır.
// Deve kervanı günde 30–40 km, hızlı atlı ulak günde 60–80 km.
// Gün aralığı, yol km bölü bu temponun uçları, yarıma yukarı yuvarlanır.
// Kaynakta açık bir süre varsa deve aralığı onunla değiştirilir; tempo dipnotta kalır.
//
// Sabit yollar:
//   Mekke–Medine kervanı ~450 km (kuş uçuşu 339 km)
//   Cuhfe / Gadir ~190 km; kalan Medine payı ~260 km
//   Hayber ~150 km (Medine'nin kuzeyi)
//   Fedek ~155 km; klasik anlatım iki-üç gün
//   Tebük sefer yolu ~700 km
//   Necran, dağlık güney, kuş uçuşunun ~1,35 katı
//   Darb-ı Zübeyde (Mekke–Kûfe) ~1.400 km
//   Medine–Kûfe, Necid üzerinden ~1.100 km
//   Şam–Medine hac yolu ~1.300 km

export type DaySpan = readonly [number, number];

export type TravelLeg = {
  from: 'mekke' | 'medine';
  roadKm: number;
  camel: DaySpan;
  rider: DaySpan;
};

export type TravelInfo = {
  legs: TravelLeg[];
  /** Bu yere özgü, kaynağa dayanan kısa not. */
  anchor?: string;
};

const leg = (
  from: 'mekke' | 'medine',
  roadKm: number,
  camel: DaySpan,
  rider: DaySpan,
): TravelLeg => ({ from, roadKm, camel, rider });

export const TRAVEL: Record<PlaceId, TravelInfo> = {
  mekke: {
    legs: [leg('medine', 450, [8, 12], [6, 8])],
    anchor:
      'Hicret kafilesi bu 450 km\'lik yolu yaklaşık 8–12 günde aldı. Ağır bir ticaret kervanı, günde 30–40 km ile aynı yolu yaklaşık 11–15 günde yürürdü.',
  },
  medine: {
    legs: [leg('mekke', 450, [8, 12], [6, 8])],
    anchor:
      'Hicret kafilesi bu 450 km\'lik yolu yaklaşık 8–12 günde aldı. Ağır bir ticaret kervanı, günde 30–40 km ile aynı yolu yaklaşık 11–15 günde yürürdü.',
  },
  gadir: {
    legs: [
      leg('mekke', 190, [5, 6], [2, 3]),
      leg('medine', 260, [7, 9], [3, 4]),
    ],
    anchor:
      'Cuhfe mîkatı Mekke\'ye yaklaşık 187 km\'dir; Gadir bu mîkatın yanındadır. Medine payı, 450 km\'lik kervan yolundan düşülerek yaklaşık 260 km alınmıştır.',
  },
  hayber: {
    legs: [
      leg('mekke', 600, [15, 20], [8, 10]),
      leg('medine', 150, [4, 5], [2, 3]),
    ],
    anchor:
      'Hayber, kaynaklarda Medine\'nin yaklaşık 150 km kuzeyi diye anılır. Mekke süresi, Hicaz kervan yoluna bu vaha etabının eklenmesidir.',
  },
  fedek: {
    legs: [
      leg('mekke', 605, [15, 20], [8, 10]),
      leg('medine', 155, [2, 3], [2, 3]),
    ],
    anchor:
      'Klasik kaynaklar Fedek\'i Medine\'ye iki-üç günlük yol diye yazar; deve süresi budur. 150–160 km\'lik ölçü, ağır kervan temposunda yaklaşık 4–5 gün de tutar.',
  },
  tebuk: {
    legs: [
      leg('mekke', 1150, [29, 38], [14, 19]),
      leg('medine', 700, [18, 23], [9, 12]),
    ],
    anchor:
      'Tebük seferinin yolu Medine\'den yaklaşık 700 km kuzeye gider. Kaynaklar ordunun Tebük\'te on ila yirmi gece kaldığını yazar; gidişin günü kervan temposundan hesaplanmıştır.',
  },
  necran: {
    legs: [
      leg('mekke', 850, [21, 28], [11, 14]),
      leg('medine', 1300, [33, 43], [16, 22]),
    ],
    anchor:
      'Güney yolu dağlıktır; Mekke\'den kuş uçuşunun yaklaşık 1,35 katı alınmıştır. Medine süresi, Hicaz kervan yolunun üzerine eklenir.',
  },
  kufe: {
    legs: [
      leg('mekke', 1400, [35, 47], [18, 23]),
      leg('medine', 1100, [28, 37], [14, 18]),
    ],
    anchor:
      'Mekke\'den Darb-ı Zübeyde yaklaşık 1.400 km, Medine\'den Necid üzerinden yaklaşık 1.100 km alınmıştır. Kûfe ile Kerbela arası kaynaklarda bir günlük yoldur.',
  },
  kerbela: {
    legs: [
      leg('mekke', 1450, [22, 26], [18, 24]),
      leg('medine', 1180, [30, 39], [15, 20]),
    ],
    anchor:
      'Hz. Hüseyin\'in kafilesi 8 Zilhicce\'de Mekke\'den çıkıp 2 Muharrem\'de Kerbela\'ya vardı; deve süresi bu yaklaşık üç haftalık gidiştir. Ağır bir ticaret kervanı aynı yolda, günde 30–40 km ile yaklaşık 36–48 gün sürerdi. Kûfe bir gün ötededir. Medine süresi Necid kervanının temposudur.',
  },
  basra: {
    legs: [
      leg('mekke', 1570, [39, 52], [20, 26]),
      leg('medine', 1260, [32, 42], [16, 21]),
    ],
    anchor:
      'Basra yolu Necid ve Yamâme üzerinden hesaplanmıştır; uzunluk, kuş uçuşunun yaklaşık 1,2 katıdır.',
  },
  siffin: {
    legs: [
      leg('mekke', 2020, [51, 67], [25, 34]),
      leg('medine', 1640, [41, 55], [21, 27]),
    ],
    anchor:
      'Sıffin\'e giden yol Fırat kıyısını izler ve kuş uçuşundan belirgin uzundur. Kûfe ordusu bu vadiden yürüdü.',
  },
  nehrevan: {
    legs: [
      leg('mekke', 1570, [39, 52], [20, 26]),
      leg('medine', 1270, [32, 42], [16, 21]),
    ],
    anchor:
      'Süre, Mekke–Kûfe ve Medine–Kûfe kervanına Bağdat yakınına sapılan kısa etabın eklenmesiyle hesaplanmıştır. Nokta yaklaşıktır.',
  },
  sam: {
    legs: [
      leg('mekke', 1750, [44, 58], [22, 29]),
      leg('medine', 1300, [33, 43], [16, 22]),
    ],
    anchor:
      'Şam–Medine hac yolu yaklaşık 1.300 km\'dir. Mekke süresi, bu yola Hicaz kervanının eklenmesidir.',
  },
};

export function travelFor(id: PlaceId): TravelInfo {
  return TRAVEL[id];
}

export function formatDays(span: DaySpan): string {
  const [a, b] = span;
  if (a === b) return `${a} gün`;
  return `${a}–${b} gün`;
}

export const TRAVEL_NOTE =
  'Tahmin. Kuş uçuşu değil, kervan yolu esas alınır: Mekke–Medine arası yaklaşık 450 km\'dir. Başka yerlerde yol, bilinen güzergâh ya da kuş uçuşunun yaklaşık 1,15–1,35 katıdır. Deve kervanı günde 30–40 km, atlı ulak günde 60–80 km kabul edilir; su ve dinlenme molaları aralığa dahildir. Kaynakta açık bir gün sayısı varsa o yazılır.';

export const TRAVEL_METHOD =
  'Haritadaki «O dönem şartlarında yolculuk» süreleri tahmindir. Mekke–Medine kervan yolu yaklaşık 450 km (kuş uçuşu 339 km) alınır. Diğer yerlerde mesafe, bilinen tarihî güzergâh ya da kuş uçuşunun araziye göre yaklaşık 1,15–1,35 katıdır. Deve kervanı günde 30–40 km, hızlı atlı ulak günde 60–80 km yürür kabul edilir; su ve dinlenme molaları süre aralığına dahildir. Hicret (8–12 gün), Fedek\'in iki-üç günlük yolu, Tebük seferi, Kûfe–Kerbela arasındaki bir gün ve Mekke\'den Kerbela\'ya giden kafilenin yaklaşık üç haftası gibi iyi bilinen süreler, kervan temposundan farklıysa kartta ayrıca belirtilir.';

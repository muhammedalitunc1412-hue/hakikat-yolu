// Kuş uçuşu mesafeler WGS84 koordinatlarından büyük daire (haversine) ile hesaplanır.
// Yarıçap: ortalama yer yarıçapı 6371,0088 km.
//
// Koordinat kaynakları (yayınlanmış konum kayıtları):
// Mekke / Kâbe 21,4225°K 39,8262°D
// Medine / Mescid-i Nebevî 24,4672°K 39,6111°D
// Gadir Hum 22,825°K 39,075°D (Cuhfe yakını)
// Hayber 25,69861°K 39,29250°D
// Fedek 25,99278°K 40,46667°D (el-Hâit ile özdeşleştirme)
// Tebük 28,3972°K 36,5789°D
// Necran 17,49167°K 44,13222°D
// Kûfe Ulu Camii 32,02861°K 44,40083°D
// Kerbela, Hz. Hüseyin türbesi 32,61639°K 44,03250°D
// Cemel / Basra 30,5000°K 47,8167°D
// Sıffin 35,953611°K 39,016111°D (Rakka yakını). Ebu Hureyre höyüğü 35,866°K 38,400°D, yaklaşık 56 km batıdadır.
// Nehrevan 33,333°K 44,383°D (Bağdat'ın hemen doğusu). Kanalın kuzeyini gösteren başka bir kayıt 34,521°K 43,784°D'dir.
// Şam, Emevî Camii çevresi 33,5117°K 36,3064°D

export type PlaceId =
  | 'mekke' | 'medine' | 'gadir' | 'hayber' | 'fedek' | 'tebuk' | 'necran'
  | 'kufe' | 'kerbela' | 'basra' | 'siffin' | 'nehrevan' | 'sam';

export type Place = {
  id: PlaceId;
  name: string;
  dative: string;
  lat: number;
  lon: number;
  kind: 'holy' | 'city' | 'site';
  approx?: boolean;
};

export const PLACES: Record<PlaceId, Place> = {
  mekke: { id: 'mekke', name: 'Mekke', dative: 'Mekke\'ye', lat: 21.4225, lon: 39.8262, kind: 'holy' },
  medine: { id: 'medine', name: 'Medine', dative: 'Medine\'ye', lat: 24.4672, lon: 39.6111, kind: 'holy' },
  gadir: { id: 'gadir', name: 'Gadir Hum', dative: 'Gadir Hum\'a', lat: 22.825, lon: 39.075, kind: 'site' },
  hayber: { id: 'hayber', name: 'Hayber', dative: 'Hayber\'e', lat: 25.69861, lon: 39.2925, kind: 'site' },
  fedek: { id: 'fedek', name: 'Fedek', dative: 'Fedek\'e', lat: 25.99278, lon: 40.46667, kind: 'site' },
  tebuk: { id: 'tebuk', name: 'Tebük', dative: 'Tebük\'e', lat: 28.3972, lon: 36.5789, kind: 'city' },
  necran: { id: 'necran', name: 'Necran', dative: 'Necran\'a', lat: 17.49167, lon: 44.13222, kind: 'city' },
  kufe: { id: 'kufe', name: 'Kûfe', dative: 'Kûfe\'ye', lat: 32.02861, lon: 44.40083, kind: 'city' },
  kerbela: { id: 'kerbela', name: 'Kerbela', dative: 'Kerbela\'ya', lat: 32.61639, lon: 44.0325, kind: 'site' },
  basra: { id: 'basra', name: 'Basra', dative: 'Basra\'ya', lat: 30.5, lon: 47.8167, kind: 'site' },
  siffin: { id: 'siffin', name: 'Sıffin', dative: 'Sıffin\'e', lat: 35.953611, lon: 39.016111, kind: 'site' },
  nehrevan: { id: 'nehrevan', name: 'Nehrevan', dative: 'Nehrevan\'a', lat: 33.333, lon: 44.383, kind: 'site', approx: true },
  sam: { id: 'sam', name: 'Şam', dative: 'Şam\'a', lat: 33.5117, lon: 36.3064, kind: 'city' },
};

const R = 6371.0088;

export function distanceKm(a: { lat: number; lon: number }, b: { lat: number; lon: number }): number {
  const rad = (d: number) => d * Math.PI / 180;
  const dLat = rad(b.lat - a.lat);
  const dLon = rad(b.lon - a.lon);
  const lat1 = rad(a.lat);
  const lat2 = rad(b.lat);
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) ** 2;
  return 2 * R * Math.asin(Math.min(1, Math.sqrt(h)));
}

export function kmBetween(a: PlaceId, b: PlaceId): number {
  return distanceKm(PLACES[a], PLACES[b]);
}

export function formatKm(km: number): string {
  const v = Math.round(km);
  const s = String(v).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  return s + ' km';
}

export function formatCoord(lat: number, lon: number): string {
  const num = (n: number) => Math.abs(n).toFixed(2).replace('.', ',');
  return `${num(lat)}°${lat >= 0 ? 'K' : 'G'}  ${num(lon)}°${lon >= 0 ? 'D' : 'B'}`;
}

// [enlem, boylam]. Kıyı sadeleştirilmiştir; şehir noktaları gerçek koordinattadır.
export const LAND: [number, number][] = [
  [42.0, 35.9],
  [36.8, 36.0],
  [36.0, 35.85],
  [35.2, 35.75],
  [34.4, 35.85],
  [33.6, 35.4],
  [32.8, 35.0],
  [32.0, 34.6],
  [31.3, 34.25],
  [30.4, 34.2],
  [29.8, 33.2],
  [29.4, 32.7],
  [29.55, 34.55],
  [28.6, 34.85],
  [27.3, 35.5],
  [26.2, 36.45],
  [25.0, 37.2],
  [24.0, 37.95],
  [23.0, 38.95],
  [22.0, 39.15],
  [21.2, 39.3],
  [20.0, 40.05],
  [18.6, 41.15],
  [17.2, 42.15],
  [16.0, 42.7],
  [14.5, 42.9],
  [12.0, 43.2],
  [12.0, 52.0],
  [25.5, 52.0],
  [26.6, 50.2],
  [27.6, 49.4],
  [28.5, 48.6],
  [29.4, 48.25],
  [29.9, 48.1],
  [30.25, 48.7],
  [30.6, 52.0],
  [42.0, 52.0],
];

export const EUPHRATES: [number, number][] = [
  [37.5, 38.35],
  [35.95, 38.55],
  [35.95, 39.02],
  [35.15, 40.15],
  [34.2, 41.15],
  [33.4, 42.7],
  [33.05, 43.55],
  [32.7, 44.15],
  [32.15, 44.42],
  [31.4, 45.6],
  [30.9, 46.6],
  [30.55, 47.55],
  [30.45, 47.85],
];

export const TIGRIS: [number, number][] = [
  [37.4, 42.4],
  [36.35, 43.15],
  [35.1, 43.55],
  [34.0, 44.05],
  [33.3, 44.4],
  [32.4, 45.05],
  [31.6, 46.4],
  [31.0, 47.35],
  [30.55, 47.75],
  [30.45, 47.85],
];

export const HIJAZ_RIDGE: [number, number][] = [
  [28.2, 35.8],
  [26.4, 37.0],
  [24.6, 38.5],
  [22.8, 39.7],
  [20.8, 40.9],
  [18.4, 42.6],
];

/** Water names drawn on the wide plate, in viewBox-friendly anchors that sit on water. */
export const WATERS: { t: string; lon: number; lat: number }[] = [
  { t: 'Kızıldeniz', lon: 38.15, lat: 22.0 },
  { t: 'Akdeniz', lon: 31.2, lat: 34.2 },
  { t: 'Basra Körfezi', lon: 50.6, lat: 27.15 },
  { t: 'Hürmüz Boğazı', lon: 56.5, lat: 26.55 },
  { t: 'Umman Körfezi', lon: 58.6, lat: 24.7 },
  { t: 'Arap Denizi', lon: 59.8, lat: 16.8 },
  { t: 'Aden Körfezi', lon: 48.6, lat: 12.7 },
  { t: "Babu'l-Mendeb", lon: 43.55, lat: 12.7 },
  { t: 'Süveyş Körfezi', lon: 32.9, lat: 28.95 },
  { t: 'Akabe Körfezi', lon: 34.85, lat: 28.7 },
  { t: 'Karadeniz', lon: 40.2, lat: 43.35 },
  { t: 'Hazar Denizi', lon: 50.8, lat: 42.4 },
];

export const REGIONS: { t: string; lat: number; lon: number; sea?: boolean }[] = [
  { t: 'HİCAZ', lat: 23.4, lon: 41.3 },
  { t: 'NECID', lat: 25.2, lon: 45.2 },
  { t: 'IRAK', lat: 33.6, lon: 42.3 },
  { t: 'ŞAM', lat: 34.8, lon: 37.6 },
  { t: 'KIZILDENİZ', lat: 22.2, lon: 37.4, sea: true },
  { t: 'AKDENİZ', lat: 34.6, lon: 33.8, sea: true },
  { t: 'BASRA KÖRFEZİ', lat: 27.6, lon: 49.6, sea: true },
];

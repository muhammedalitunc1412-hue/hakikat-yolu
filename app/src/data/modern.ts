import type { PlaceId } from './geo';

/** Bugünkü yerleşim. Ayrıntı kartında «Bugün: …» satırı. */
export const MODERN_WHERE: Record<PlaceId, string> = {
  mekke: 'Mekke, Suudi Arabistan',
  medine: 'Medine, Suudi Arabistan',
  gadir: 'Gadir Hum, Rabigh yakınları, Suudi Arabistan',
  hayber: 'Hayber, Suudi Arabistan',
  fedek: 'el-Hâit yakınları, Suudi Arabistan',
  tebuk: 'Tebük, Suudi Arabistan',
  necran: 'Necran, Suudi Arabistan',
  kufe: 'Necef yakınları, Irak',
  kerbela: 'Kerbela, Irak',
  basra: 'Basra, Irak',
  siffin: 'Rakka yakınları, Suriye',
  nehrevan: 'Bağdat\'ın doğusu, Irak',
  sam: 'Şam, Suriye',
};

export type ModernCity = {
  name: string;
  lon: number;
  lat: number;
  /** Minimum camera band. 1 is the whole Middle East; towns appear as you zoom in. */
  tier: number;
};

export type Capital = {
  name: string;
  lon: number;
  lat: number;
  /** Preferred label offset in viewBox pixels at zoom 1, so the name clears the star. */
  dx?: number;
  dy?: number;
};

// Present-day capitals. Shown whenever the modern overlay is on and the city is in view.
// Kudüs is the label asked for on the İsrail/Filistin sheet. Mogadişu is south of the plate.
export const CAPITALS: Capital[] = [
  { name: 'Kahire', lon: 31.236, lat: 30.044 },
  { name: 'Hartum', lon: 32.560, lat: 15.501 },
  { name: 'Asmara', lon: 38.932, lat: 15.323 },
  { name: 'Cibuti', lon: 43.146, lat: 11.572, dx: -22, dy: 14 },
  { name: 'Lefkoşa', lon: 33.382, lat: 35.186, dx: -36, dy: -14 },
  { name: 'Şam', lon: 36.291, lat: 33.514, dx: 30, dy: -16 },
  { name: 'Beyrut', lon: 35.502, lat: 33.894, dx: -38, dy: 8 },
  { name: 'Kudüs', lon: 35.214, lat: 31.768, dx: -24, dy: 22 },
  { name: 'Amman', lon: 35.911, lat: 31.954, dx: 32, dy: 14 },
  { name: 'Bağdat', lon: 44.366, lat: 33.315, dx: 20, dy: -8 },
  { name: 'Tahran', lon: 51.389, lat: 35.689 },
  { name: 'Kuveyt', lon: 47.977, lat: 29.376, dx: 8, dy: -16 },
  { name: 'Riyad', lon: 46.675, lat: 24.714, dy: -16 },
  { name: 'Manama', lon: 50.586, lat: 26.229, dx: -24, dy: -10 },
  { name: 'Doha', lon: 51.531, lat: 25.285, dx: 24, dy: 12 },
  { name: 'Ebu Dabi', lon: 54.377, lat: 24.454, dx: 18, dy: 14 },
  { name: 'Maskat', lon: 58.406, lat: 23.588, dx: 20, dy: -10 },
  { name: "San'a", lon: 44.191, lat: 15.369 },
  { name: 'Ankara', lon: 32.860, lat: 39.933, dx: 18, dy: 14 },
  { name: 'Addis Ababa', lon: 38.747, lat: 9.025 },
  { name: 'Tiflis', lon: 44.793, lat: 41.715, dx: -28, dy: 16 },
  { name: 'Erivan', lon: 44.515, lat: 40.187, dx: 26, dy: 8 },
  { name: 'Bakü', lon: 49.867, lat: 40.409, dx: 8, dy: -16 },
  { name: 'Aşkabat', lon: 58.326, lat: 37.960, dx: -8, dy: 16 },
  { name: 'Hargeysa', lon: 44.065, lat: 9.560, dx: 24, dy: -6 },
];

// Coordinates are the modern city, not the 7th-century marker.
// Cities that sit on a historical marker are hidden by the map when they overlap.
export const MODERN_CITIES: ModernCity[] = [
  { name: 'Cidde', lon: 39.173, lat: 21.543, tier: 1.65 },
  { name: 'Medine', lon: 39.611, lat: 24.467, tier: 1.65 },
  { name: 'Mekke', lon: 39.826, lat: 21.423, tier: 1.65 },
  { name: 'Basra', lon: 47.780, lat: 30.509, tier: 1.65 },
  { name: 'Halep', lon: 37.161, lat: 36.202, tier: 1.65 },
  { name: 'Musul', lon: 43.119, lat: 36.335, tier: 1.65 },
  { name: 'Ahvaz', lon: 48.684, lat: 31.318, tier: 1.65 },
  { name: 'İsfahan', lon: 51.668, lat: 32.655, tier: 1.65 },
  { name: 'Şiraz', lon: 52.531, lat: 29.592, tier: 1.65 },
  { name: 'Dammam', lon: 50.103, lat: 26.421, tier: 2.5 },
  { name: 'Necef', lon: 44.329, lat: 31.999, tier: 2.5 },
  { name: 'Tâif', lon: 40.416, lat: 21.270, tier: 2.5 },
  { name: 'Tebük', lon: 36.566, lat: 28.399, tier: 2.5 },
  { name: 'Necran', lon: 44.132, lat: 17.492, tier: 2.5 },
  { name: 'Kerbela', lon: 44.033, lat: 32.616, tier: 2.5 },
  { name: 'Humus', lon: 36.723, lat: 34.732, tier: 2.5 },
  { name: 'Erbil', lon: 44.009, lat: 36.191, tier: 2.5 },
  { name: 'Yenbu', lon: 38.062, lat: 24.090, tier: 4 },
  { name: 'Hâil', lon: 41.690, lat: 27.522, tier: 4 },
  { name: 'Rakka', lon: 39.020, lat: 35.950, tier: 4 },
  { name: 'Abha', lon: 42.505, lat: 18.216, tier: 4 },
  { name: 'Akabe', lon: 35.006, lat: 29.532, tier: 4 },
  { name: 'Cizan', lon: 42.551, lat: 16.889, tier: 4 },
  { name: 'Burayde', lon: 43.975, lat: 26.326, tier: 4 },
  { name: 'Râbiğ', lon: 39.035, lat: 22.799, tier: 6.5 },
  { name: 'Hayber', lon: 39.293, lat: 25.699, tier: 6.5 },
  { name: 'el-Hâit', lon: 40.467, lat: 25.993, tier: 6.5 },
];

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
  /** Minimum zoom band. Larger bands reveal more towns. */
  tier: number;
};

// Coordinates are the modern city, not the 7th-century marker.
// Cities that sit on a historical marker are hidden by the map when they overlap.
export const MODERN_CITIES: ModernCity[] = [
  { name: 'Riyad', lon: 46.675, lat: 24.714, tier: 1 },
  { name: 'Bağdat', lon: 44.366, lat: 33.315, tier: 1 },
  { name: 'Şam', lon: 36.277, lat: 33.514, tier: 1 },
  { name: 'Kahire', lon: 31.236, lat: 30.044, tier: 1 },
  { name: 'San\'a', lon: 44.191, lat: 15.369, tier: 1 },
  { name: 'Tahran', lon: 51.389, lat: 35.689, tier: 1 },
  { name: 'Ankara', lon: 32.860, lat: 39.933, tier: 1.45 },
  { name: 'Amman', lon: 35.911, lat: 31.954, tier: 1.45 },
  { name: 'Cidde', lon: 39.173, lat: 21.543, tier: 1.45 },
  { name: 'Medine', lon: 39.611, lat: 24.467, tier: 1.45 },
  { name: 'Mekke', lon: 39.826, lat: 21.423, tier: 1.45 },
  { name: 'Basra', lon: 47.780, lat: 30.509, tier: 1.45 },
  { name: 'Halep', lon: 37.161, lat: 36.202, tier: 1.45 },
  { name: 'Musul', lon: 43.119, lat: 36.335, tier: 1.45 },
  { name: 'Ahvaz', lon: 48.684, lat: 31.318, tier: 1.8 },
  { name: 'İsfahan', lon: 51.668, lat: 32.655, tier: 1.8 },
  { name: 'Şiraz', lon: 52.531, lat: 29.592, tier: 1.8 },
  { name: 'Dammam', lon: 50.103, lat: 26.421, tier: 1.8 },
  { name: 'Kuveyt', lon: 47.977, lat: 29.376, tier: 1.8 },
  { name: 'Beyrut', lon: 35.502, lat: 33.894, tier: 1.8 },
  { name: 'Kudüs', lon: 35.214, lat: 31.768, tier: 1.8 },
  { name: 'Necef', lon: 44.329, lat: 31.999, tier: 1.8 },
  { name: 'Tâif', lon: 40.416, lat: 21.270, tier: 1.8 },
  { name: 'Tebük', lon: 36.566, lat: 28.399, tier: 1.8 },
  { name: 'Necran', lon: 44.132, lat: 17.492, tier: 1.8 },
  { name: 'Kerbela', lon: 44.033, lat: 32.616, tier: 1.8 },
  { name: 'Doha', lon: 51.531, lat: 25.285, tier: 2.3 },
  { name: 'Yenbu', lon: 38.062, lat: 24.090, tier: 2.3 },
  { name: 'Hâil', lon: 41.690, lat: 27.522, tier: 2.3 },
  { name: 'Rakka', lon: 39.020, lat: 35.950, tier: 2.3 },
  { name: 'Humus', lon: 36.723, lat: 34.732, tier: 2.3 },
  { name: 'Erbil', lon: 44.009, lat: 36.191, tier: 2.3 },
  { name: 'Abha', lon: 42.505, lat: 18.216, tier: 2.3 },
  { name: 'Akabe', lon: 35.006, lat: 29.532, tier: 2.3 },
  { name: 'Cizan', lon: 42.551, lat: 16.889, tier: 2.3 },
  { name: 'Burayde', lon: 43.975, lat: 26.326, tier: 2.3 },
  { name: 'Manama', lon: 50.586, lat: 26.229, tier: 2.9 },
  { name: 'Râbiğ', lon: 39.035, lat: 22.799, tier: 2.9 },
  { name: 'Hayber', lon: 39.293, lat: 25.699, tier: 2.9 },
  { name: 'el-Hâit', lon: 40.467, lat: 25.993, tier: 2.9 },
];

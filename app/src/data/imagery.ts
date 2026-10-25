import type { ImageSourcePropType } from 'react-native';

// Equirectangular crops: longitude and latitude both map linearly to pixels.
// Baked offline from NASA GIBS (no API key at runtime).
//   Color:  Blue Marble Next Generation, shaded relief and bathymetry (public domain)
//   Relief: ASTER GDEM greyscale hillshade (METI / NASA), blended on land only
// Edges of each bitmap are the bounds below.

export type Imagery = {
  id: string;
  west: number;
  east: number;
  south: number;
  north: number;
  width: number;
  height: number;
  source: ImageSourcePropType;
};

export const IMAGERY: Imagery[] = [
  {
    id: 'mesopotamia',
    west: 42.6,
    east: 46.3,
    south: 30.5,
    north: 35.1,
    width: 1480,
    height: 1840,
    source: require('../../assets/maps/mesopotamia.webp'),
  },
  {
    id: 'hijaz',
    west: 33.6,
    east: 43.1,
    south: 18.2,
    north: 30.3,
    width: 2560,
    height: 3261,
    source: require('../../assets/maps/hijaz.webp'),
  },
  {
    id: 'arabia',
    west: 30.6,
    east: 53.5,
    south: 13.3,
    north: 40.1,
    width: 3200,
    height: 3745,
    source: require('../../assets/maps/arabia.webp'),
  },
];

export const IMAGERY_CREDIT_SHORT = 'NASA Blue Marble';

export const IMAGERY_CREDIT =
  'Harita zemini NASA Blue Marble Next Generation görüntüsüdür (gölgeli rölyef ve batimetri, kamu malı). Dağların okunması için üzerine METI ve NASA ASTER GDEM kabartması işlenmiştir. Görüntü bölgeye kırpılıp sıkıştırılmıştır; uygulama çevrimdışı çalışır.';

type Window = { minLat: number; maxLat: number; minLon: number; maxLon: number };

export function imageryFor(bounds: Window): Imagery {
  const eps = 1e-6;
  let best: Imagery | null = null;
  let bestRes = -1;
  for (const img of IMAGERY) {
    const covers =
      img.west <= bounds.minLon + eps &&
      img.east >= bounds.maxLon - eps &&
      img.south <= bounds.minLat + eps &&
      img.north >= bounds.maxLat - eps;
    if (!covers) continue;
    const res = img.width / (img.east - img.west);
    if (res > bestRes) {
      best = img;
      bestRes = res;
    }
  }
  return best ?? IMAGERY[IMAGERY.length - 1];
}

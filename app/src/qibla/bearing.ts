// Kâbe'ye büyük daire (başlangıç kerterizi) ve manyetik sapma.
// Kerteriz gerçek kuzeyden saat yönünde derecedir.

export const KAABA = { lat: 21.4225, lon: 39.8262 };

const rad = (d: number) => (d * Math.PI) / 180;
const deg = (r: number) => (r * 180) / Math.PI;

export const norm360 = (d: number) => ((d % 360) + 360) % 360;

/** İki açı arasındaki en kısa fark, -180 ile 180 arası. */
export const angleDiff = (a: number, b: number) => ((a - b + 540) % 360) - 180;

export function smoothAngle(prev: number | null, next: number, alpha = 0.22): number {
  if (prev == null || !Number.isFinite(next)) return next;
  return norm360(prev + angleDiff(next, prev) * alpha);
}

/** Konumdan Kâbe'ye başlangıç yönü (gerçek kuzey) ve mesafe (km). */
export function qiblaFrom(lat: number, lon: number) {
  const p1 = rad(lat);
  const p2 = rad(KAABA.lat);
  const dl = rad(KAABA.lon - lon);
  const y = Math.sin(dl) * Math.cos(p2);
  const x = Math.cos(p1) * Math.sin(p2) - Math.sin(p1) * Math.cos(p2) * Math.cos(dl);
  const bearing = norm360(deg(Math.atan2(y, x)));
  const a = Math.sin((p2 - p1) / 2) ** 2 + Math.cos(p1) * Math.cos(p2) * Math.sin(dl / 2) ** 2;
  const km = 2 * 6371 * Math.asin(Math.min(1, Math.sqrt(a)));
  return { bearing, km };
}

type GeoModel = { point: (ll: number[]) => { decl: number } };
type GeoLib = { model: (date?: Date) => GeoModel };

function geo(): GeoLib {
  return require('geomagnetism') as GeoLib;
}

/**
 * Manyetik sapma, derece. Doğu pozitiftir.
 * Dünya Manyetik Modeli (WMM2025). Gerçek kerteriz = manyetik kerteriz + sapma.
 */
export function magneticDeclination(lat: number, lon: number, when = new Date()): number {
  const info = geo().model(when).point([lat, lon, 0]);
  return info.decl;
}

export function trueHeadingFromMagnetic(magHeading: number, declination: number): number {
  return norm360(magHeading + declination);
}

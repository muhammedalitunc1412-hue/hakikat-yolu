// Kâbe'ye büyük daire (başlangıç kerterizi) ve manyetik sapma.
// Kerteriz gerçek kuzeyden saat yönünde derecedir.

/** Kâbe (Mescid-i Haram), derece. */
export const KAABA = { lat: 21.422487, lon: 39.826206 };

/** Kıblede sayılmak için izin verilen sapma, derece. */
export const QIBLA_ALIGN_DEG = 3;

const rad = (d: number) => (d * Math.PI) / 180;
const deg = (r: number) => (r * 180) / Math.PI;

export const norm360 = (d: number) => ((d % 360) + 360) % 360;

/** İki açı arasındaki en kısa fark, -180 ile 180 arası. */
export const angleDiff = (a: number, b: number) => norm360(a - b + 180) - 180;

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

/**
 * Gerçek kuzey kerterizi.
 * trueHeading 0 ve üstüyse olduğu gibi kullanılır (sapma ikinci kez eklenmez).
 * trueHeading yoksa veya -1 ise manyetik kerterize sapma eklenir.
 */
export function pickTrueHeading(
  magHeading: number | null,
  trueHeading: number | null,
  declination: number,
): number | null {
  if (trueHeading != null && Number.isFinite(trueHeading) && trueHeading >= 0) return norm360(trueHeading);
  if (magHeading != null && Number.isFinite(magHeading) && magHeading >= 0) {
    return trueHeadingFromMagnetic(magHeading, declination);
  }
  return null;
}

export function isFacingQibla(qibla: number, heading: number, tolerance = QIBLA_ALIGN_DEG): boolean {
  return Math.abs(angleDiff(qibla, heading)) <= tolerance;
}

/** Kadranın saat yönü dönüşü. RN/CSS pozitif açısı saat yönüdür; kerteriz artınca kadran ters döner. */
export function dialRotationDeg(heading: number): number {
  return -heading;
}

/** Kıble işaretinin ekrandaki açısı. 0, üstteki okun tam altıdır. */
export function qiblaOnScreen(bearing: number, heading: number): number {
  return norm360(bearing + dialRotationDeg(heading));
}

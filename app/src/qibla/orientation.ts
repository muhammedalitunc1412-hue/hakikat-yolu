// Telefonun tutuluşuna göre yatay kerteriz.
// Cihaz eksenleri: X sağ, Y üst kenar, Z ekrandan kullanıcıya.
// İvmeölçer dururken "yukarı"yı gösterir (Android / expo-sensors ile aynı).

export type Vec3 = { x: number; y: number; z: number };

/** Cihaz vektörünü dünya doğu/kuzey/yukarı eksenine çeviren matris. Satır öncelikli 9 sayı. */
export function rotationMatrix(gravity: Vec3, mag: Vec3): number[] | null {
  let Ax = gravity.x;
  let Ay = gravity.y;
  let Az = gravity.z;
  const Ex = mag.x;
  const Ey = mag.y;
  const Ez = mag.z;
  let Hx = Ey * Az - Ez * Ay;
  let Hy = Ez * Ax - Ex * Az;
  let Hz = Ex * Ay - Ey * Ax;
  const normH = Math.hypot(Hx, Hy, Hz);
  if (normH < 0.1) return null;
  const invH = 1 / normH;
  Hx *= invH;
  Hy *= invH;
  Hz *= invH;
  const normA = Math.hypot(Ax, Ay, Az);
  if (normA < 0.1) return null;
  const invA = 1 / normA;
  Ax *= invA;
  Ay *= invA;
  Az *= invA;
  const Mx = Ay * Hz - Az * Hy;
  const My = Az * Hx - Ax * Hz;
  const Mz = Ax * Hy - Ay * Hx;
  return [Hx, Hy, Hz, Mx, My, Mz, Ax, Ay, Az];
}

/**
 * Manyetik kuzeyden kerteriz.
 * Telefon yatayken üst kenarın baktığı yön; dik tutulunca kullanıcının baktığı yön
 * (ekranın arkası, yani cihazın -Z ekseni).
 */
export function headingFromSensors(gravity: Vec3, mag: Vec3): number | null {
  const R = rotationMatrix(gravity, mag);
  if (!R) return null;
  const pitch = Math.asin(Math.max(-1, Math.min(1, -R[7])));
  const upright = Math.abs(pitch) > 0.7;
  const east = upright ? -R[2] : R[1];
  const north = upright ? -R[5] : R[4];
  if (Math.hypot(east, north) < 0.05) return null;
  return ((Math.atan2(east, north) * 180) / Math.PI + 360) % 360;
}

/** Dünya alanının dışında kalan şiddet, kalibrasyon ister. µT. */
export function fieldLooksOff(microtesla: number): boolean {
  return !(microtesla >= 22 && microtesla <= 70);
}

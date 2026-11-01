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
 * İleri yön, telefon yatayken üst kenar (+Y), dik tutulunca ekranın arkası (−Z).
 * İkisi eğime göre kesintisiz karışır: (0, yukarı·Z, −yukarı·Y).
 * Sert bir eşikte eksen değiştirmek, telefon hafif yan yatıkken iğneyi zıplatır.
 */
export function headingFromSensors(gravity: Vec3, mag: Vec3): number | null {
  const R = rotationMatrix(gravity, mag);
  if (!R) return null;
  // R satırları cihaz ekseninde doğu, kuzey, yukarı.
  const east = R[8] * R[1] - R[7] * R[2];
  const north = R[8] * R[4] - R[7] * R[5];
  if (Math.hypot(east, north) < 0.05) return null;
  return ((Math.atan2(east, north) * 180) / Math.PI + 360) % 360;
}

/**
 * expo-sensors ivmeölçeri Android'de ekran yukarı bakınca +Z verir.
 * iOS CoreMotion aynı duruşta −Z verir; işaret çevrilmezse doğu ile batı yer değiştirir.
 */
export function deviceGravity(reading: Vec3, os: string): Vec3 {
  if (os === 'ios') return { x: -reading.x, y: -reading.y, z: -reading.z };
  return reading;
}

/**
 * expo-location kerteriz doğruluğu: 3 yüksek, 2 orta, 1 düşük, 0 yok.
 * Android'de bu değer ivmeölçer ile manyetometre arasında paylaşılır; ivmeölçer çoğu
 * zaman 0 yazar. Sensör birleşimi açıkken bu eşiğe bakılmaz.
 */
export function headingAccuracyIsPoor(accuracy: number): boolean {
  return accuracy <= 1;
}

/** Dünya alanının dışında kalan şiddet, kalibrasyon ister. µT. */
export function fieldLooksOff(microtesla: number): boolean {
  return !(microtesla >= 22 && microtesla <= 70);
}

import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import test from 'node:test';
import {
  angleDiff,
  isFacingQibla,
  pickTrueHeading,
  qiblaFrom,
  qiblaOnScreen,
  smoothAngle,
  trueHeadingFromMagnetic,
} from './bearing.ts';
import { deviceGravity, fieldLooksOff, headingAccuracyIsPoor, headingFromSensors, type Vec3 } from './orientation.ts';

const geo = createRequire(import.meta.url)('geomagnetism') as {
  model: (date?: Date) => { point: (ll: number[]) => { decl: number } };
};

const near = (actual: number, expected: number, tol = 1) => {
  const d = Math.abs(angleDiff(actual, expected));
  assert.ok(d <= tol, `expected ${expected} ±${tol}, got ${actual.toFixed(3)} (off ${d.toFixed(3)})`);
};

// Büyük daire başlangıç açısı. Aynı sayılar Aladhan qibla API'si ve bağımsız
// ECEF teğet hesabıyla doğrulandı (2026-11-01). Ankara şehir merkezi 160.2°'dir;
// yaklaşık 158° bandı bu koordinatta tutmuyor.
const CITIES: Array<[string, number, number, number]> = [
  ['İstanbul', 41.0082, 28.9784, 151.621],
  ['Ankara', 39.9334, 32.8597, 160.168],
  ['Tahran', 35.6892, 51.389, 218.401],
  ['Necef', 31.9959, 44.3146, 201.817],
  ['Kerbela', 32.6164, 44.0324, 199.503],
  ['Londra', 51.5074, -0.1278, 118.987],
  ['New York', 40.7128, -74.006, 58.482],
  ['Cakarta', -6.2088, 106.8456, 295.152],
];

test('kıble kerterizi referans şehirlerde ±1°', () => {
  for (const [name, lat, lon, expected] of CITIES) {
    const bearing = qiblaFrom(lat, lon).bearing;
    near(bearing, expected, 1);
    assert.ok(qiblaFrom(lat, lon).km > 0, name);
  }
});

test('manyetik sapma doğuda pozitif, batıda negatif; gerçek kerterize bir kez eklenir', () => {
  const when = new Date('2026-10-28T00:00:00Z');
  const ist = geo.model(when).point([41.0082, 28.9784, 0]).decl;
  const nyc = geo.model(when).point([40.7128, -74.006, 0]).decl;
  assert.ok(ist > 4 && ist < 8, `İstanbul sapması ${ist}`);
  assert.ok(nyc < -8 && nyc > -16, `New York sapması ${nyc}`);
  assert.equal(trueHeadingFromMagnetic(10, ist), (10 + ist + 360) % 360);
  assert.equal(trueHeadingFromMagnetic(350, 20), 10);
  assert.equal(pickTrueHeading(10, -1, 6), 16);
  assert.equal(pickTrueHeading(350, -1, 20), 10);
  assert.equal(pickTrueHeading(10, 20, 6), 20);
  assert.equal(pickTrueHeading(null, null, 6), null);
});

test('yumuşatma 359° ile 0° arasında kısa yoldan geçer', () => {
  assert.equal(angleDiff(-350, 350), 20);
  assert.equal(angleDiff(350, -350), -20);
  const up = smoothAngle(359, 1, 0.5);
  assert.ok(up === 0, String(up));
  const down = smoothAngle(1, 359, 0.5);
  assert.ok(down === 0, String(down));
  let s = 350;
  for (const n of [358, 2, 8]) s = smoothAngle(s, n, 0.5);
  assert.ok(s < 20 || s > 340, String(s));
});

test('ekrandaki kıble işareti, kerteriz eksi bakış yönüdür', () => {
  assert.equal(qiblaOnScreen(151.6, 151.6), 0);
  near(qiblaOnScreen(160, 150), 10, 0.01);
  assert.equal(isFacingQibla(10, 12.9), true);
  assert.equal(isFacingQibla(10, 13.2), false);
  assert.equal(isFacingQibla(1, 359), true);
  assert.equal(isFacingQibla(1, 350), false);
});

test('telefon yatay ve üstü kuzeye bakınca kerteriz 0', () => {
  const h = headingFromSensors({ x: 0, y: 0, z: 9.8 }, { x: 0, y: 25, z: -40 });
  assert.ok(h != null && Math.abs(h) < 1, String(h));
});

test('telefon dik ve kullanıcı kuzeye bakınca kerteriz 0', () => {
  const h = headingFromSensors({ x: 0, y: 9.8, z: 0 }, { x: 0, y: 0, z: -45 });
  assert.ok(h != null && (h < 1 || h > 359), String(h));
});

test('iOS ivme işareti çevrilince Android ile aynı kerterizi verir', () => {
  const north = pose(0, 0, 0);
  const iosNorth = { x: -north.g.x, y: -north.g.y, z: -north.g.z };
  const android = headingFromSensors(north.g, north.m);
  const iosRaw = headingFromSensors(iosNorth, north.m);
  const iosFixed = headingFromSensors(deviceGravity(iosNorth, 'ios'), north.m);
  assert.ok(android != null && Math.abs(angleDiff(android, 0)) < 1, String(android));
  // İşaret çevrilmezse kuzey güney olur.
  assert.ok(iosRaw != null && Math.abs(angleDiff(iosRaw, 180)) < 1, String(iosRaw));
  assert.ok(iosFixed != null && android != null && Math.abs(angleDiff(iosFixed, android)) < 0.01, String(iosFixed));

  const se = pose(151, 50, 10);
  const iosSe = { x: -se.g.x, y: -se.g.y, z: -se.g.z };
  const a2 = headingFromSensors(se.g, se.m);
  const raw2 = headingFromSensors(iosSe, se.m);
  const fix2 = headingFromSensors(deviceGravity(iosSe, 'ios'), se.m);
  assert.ok(a2 != null && fix2 != null && Math.abs(angleDiff(fix2, a2)) < 0.01, `${a2} vs ${fix2}`);
  assert.ok(raw2 != null && a2 != null && Math.abs(angleDiff(raw2, a2)) > 20, String(raw2));
  assert.deepEqual(deviceGravity({ x: 1, y: 2, z: 3 }, 'android'), { x: 1, y: 2, z: 3 });
});

function pose(headingDeg: number, pitchDeg: number, rollDeg: number): { g: Vec3; m: Vec3 } {
  const rad = (d: number) => (d * Math.PI) / 180;
  const h = rad(headingDeg);
  const p = rad(pitchDeg);
  const r = rad(rollDeg);
  let X = [Math.cos(h), -Math.sin(h), 0];
  let Y = [Math.sin(h), Math.cos(h), 0];
  let Z = [0, 0, 1];
  const Y2 = [Y[0] * Math.cos(p) + Z[0] * Math.sin(p), Y[1] * Math.cos(p) + Z[1] * Math.sin(p), Y[2] * Math.cos(p) + Z[2] * Math.sin(p)];
  const Z2 = [-Y[0] * Math.sin(p) + Z[0] * Math.cos(p), -Y[1] * Math.sin(p) + Z[1] * Math.cos(p), -Y[2] * Math.sin(p) + Z[2] * Math.cos(p)];
  Y = Y2;
  Z = Z2;
  const X3 = [X[0] * Math.cos(r) - Z[0] * Math.sin(r), X[1] * Math.cos(r) - Z[1] * Math.sin(r), X[2] * Math.cos(r) - Z[2] * Math.sin(r)];
  const Z3 = [X[0] * Math.sin(r) + Z[0] * Math.cos(r), X[1] * Math.sin(r) + Z[1] * Math.cos(r), X[2] * Math.sin(r) + Z[2] * Math.cos(r)];
  X = X3;
  Z = Z3;
  const dot = (a: number[], b: number[]) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
  const up = [0, 0, 1];
  const incl = rad(58);
  const mw = [0, 48 * Math.cos(incl), -48 * Math.sin(incl)];
  return {
    g: { x: dot(X, up), y: dot(Y, up), z: dot(Z, up) },
    m: { x: dot(X, mw), y: dot(Y, mw), z: dot(Z, mw) },
  };
}

test('eğim artarken yan yatık telefonda kerteriz zıplamaz', () => {
  let prev: number | null = null;
  for (const pitch of [0, 15, 30, 40, 45, 55, 70, 90]) {
    const { g, m } = pose(90, pitch, 25);
    const h = headingFromSensors(g, m);
    assert.ok(h != null, `pitch ${pitch}`);
    if (prev != null) assert.ok(Math.abs(angleDiff(h, prev)) < 12, `${prev} → ${h} at pitch ${pitch}`);
    prev = h;
  }
  const flat = headingFromSensors(pose(90, 0, 0).g, pose(90, 0, 0).m);
  const up = headingFromSensors(pose(90, 90, 0).g, pose(90, 90, 0).m);
  assert.ok(flat != null && Math.abs(angleDiff(flat, 90)) < 1, String(flat));
  assert.ok(up != null && Math.abs(angleDiff(up, 90)) < 1, String(up));
});

test('alan şiddeti ve düşük doğruluk kalibrasyon ister', () => {
  assert.equal(fieldLooksOff(45), false);
  assert.equal(fieldLooksOff(10), true);
  assert.equal(fieldLooksOff(90), true);
  assert.equal(headingAccuracyIsPoor(0), true);
  assert.equal(headingAccuracyIsPoor(1), true);
  assert.equal(headingAccuracyIsPoor(2), false);
  assert.equal(headingAccuracyIsPoor(3), false);
});

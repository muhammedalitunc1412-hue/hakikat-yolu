import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import test from 'node:test';
import { qiblaFrom, trueHeadingFromMagnetic } from './bearing.ts';
import { headingFromSensors } from './orientation.ts';

const geo = createRequire(import.meta.url)('geomagnetism') as {
  model: (date?: Date) => { point: (ll: number[]) => { decl: number } };
};

test('kıble kerterizi bilinen şehirlerde', () => {
  const istanbul = qiblaFrom(41.0082, 28.9784).bearing;
  const ankara = qiblaFrom(39.9334, 32.8597).bearing;
  const london = qiblaFrom(51.5074, -0.1278).bearing;
  assert.ok(Math.abs(istanbul - 151) < 1, `İstanbul ${istanbul}`);
  assert.ok(Math.abs(ankara - 160) < 1, `Ankara ${ankara}`);
  assert.ok(Math.abs(london - 119) < 1, `Londra ${london}`);
});

test('manyetik sapma doğuda pozitif ve gerçek kerterize eklenir', () => {
  const when = new Date('2026-10-28T00:00:00Z');
  const ist = geo.model(when).point([41.0082, 28.9784, 0]).decl;
  assert.ok(ist > 4 && ist < 8, `İstanbul sapması ${ist}`);
  assert.equal(trueHeadingFromMagnetic(10, ist), (10 + ist + 360) % 360);
  assert.equal(trueHeadingFromMagnetic(350, 20), 10);
});

test('telefon yatay ve üstü kuzeye bakınca kerteriz 0', () => {
  const h = headingFromSensors({ x: 0, y: 0, z: 9.8 }, { x: 0, y: 25, z: -40 });
  assert.ok(h != null && Math.abs(h) < 1, String(h));
});

test('telefon dik ve kullanıcı kuzeye bakınca kerteriz 0', () => {
  const h = headingFromSensors({ x: 0, y: 9.8, z: 0 }, { x: 0, y: 0, z: -45 });
  assert.ok(h != null && (h < 1 || h > 359), String(h));
});

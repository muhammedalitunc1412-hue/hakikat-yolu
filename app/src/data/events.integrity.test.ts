import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

const read = (p: string) => readFileSync(new URL(p, import.meta.url), 'utf8');

test('olay sırası ve Nehrevan Sıffin\'in ardında', () => {
  const src = read('./events.ts');
  const m = src.match(/export const EVENTS: HistEvent\[\] = \[([^\]]+)\]/);
  assert.ok(m);
  const ids = [...m[1].matchAll(/\b([a-zA-Z][a-zA-Z0-9]*)\b/g)].map(x => x[1]);
  const names = ids.filter(id => !['penceAba', 'map'].includes(id) || true);
  assert.equal(new Set(names).size, names.length);
  assert.equal(names.indexOf('nehrevan'), names.indexOf('siffin') + 1);
  assert.match(src, /"nehrevan":/);
  assert.match(src, /'nehrevan'/);
});

test('Sakîfe resimleri kaymaz, kuyu ayrı anahtardadır', () => {
  const src = read('./sakife.ts');
  const imgs = [...src.matchAll(/image: '([^']+)'/g)].map(m => m[1]);
  for (let i = 1; i <= 8; i++) assert.ok(imgs.includes('sakife-' + i));
  assert.equal(imgs.filter(x => x === 'ali-kuyu-1').length, 1);
  const kuyu = imgs.indexOf('ali-kuyu-1');
  assert.ok(imgs.indexOf('sakife-7') < kuyu && kuyu < imgs.indexOf('sakife-8'));
  assert.match(read('./sceneImages.ts'), /'ali-kuyu-1':/);
  assert.match(read('./sceneImages.ts'), /'sakife-8':/);
});

test('on iki imam ve Mehdî\'de vefat yaşı yok', () => {
  const src = read('./imams.ts');
  assert.equal([...src.matchAll(/no: (\d+)/g)].map(m => Number(m[1])).join(','), '1,2,3,4,5,6,7,8,9,10,11,12');
  assert.match(src, /id: 'mehdi'/);
  assert.match(src, /Vefat yaşı yoktur\. Gaybettedir/);
  assert.doesNotMatch(src.slice(src.indexOf("mehdi:")), /\d+ kamerî yıl/);
});

test('Kasım cesedi baş diye değiştirilmedi', () => {
  const src = read('./kerbela.ts');
  const i = src.indexOf("image: 'kerbela-23'");
  const chunk = src.slice(i - 900, i);
  assert.match(chunk, /cesedini/);
  assert.doesNotMatch(chunk, /mübarek başı/);
});

test('yeni resimler kayıtlı, sakife-8 ayrı', () => {
  const img = read('./sceneImages.ts');
  for (const id of ['ali-kuyu-1', 'muaviye-iktidar-2', 'muaviye-iktidar-7', 'sakife-8', 'nehrevan-1', 'nehrevan-2', 'kerbela-zeynep-1']) {
    assert.match(img, new RegExp("'" + id + "': require\\('../../assets/scenes/" + id + "\\.jpg'\\)"));
  }
  const sakife = read('./sakife.ts');
  assert.match(sakife, /image: 'sakife-8'/);
  assert.match(sakife, /image: 'ali-kuyu-1'/);
  assert.match(read('./nehrevan.ts'), /image: 'nehrevan-1'/);
  assert.match(read('./nehrevan.ts'), /image: 'nehrevan-2'/);
  assert.match(read('./kerbela.ts'), /image: 'kerbela-zeynep-1'/);
});

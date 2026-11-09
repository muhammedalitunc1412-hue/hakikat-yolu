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
  assert.equal(imgs.filter(x => x === 'sakife-yalnizlik-1').length, 1);
  const kuyu = imgs.indexOf('ali-kuyu-1');
  const yalniz = imgs.indexOf('sakife-yalnizlik-1');
  assert.ok(imgs.indexOf('sakife-7') < yalniz && yalniz < kuyu && kuyu < imgs.indexOf('sakife-8'));
  assert.match(src, /insanların Hz\. Ali\\'ye karşı tavrı değişti/);
  assert.match(src, /Buhari 4240/);
  assert.match(src, /biat ettiğini de yazar/);
  assert.match(src, /Rivayetlere göre \*\*Hz\. Ali\*\* sokakta selam verirdi/);
  assert.match(src, /İnsanlar selamını almazdı/);
  assert.doesNotMatch(src, /Buhari 4240[^.]*selam/);
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
  assert.match(chunk, /mübarek başı yarıldı/);
  assert.match(chunk, /Naaşını/);
  assert.doesNotMatch(chunk, /başını taşı/);
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

test('genişleme sahnelerinin görseli kayıtlı, yer tutucu kalmaz', () => {
  const img = read('./sceneImages.ts');
  const fresh = [
    'sakife-yalnizlik-1',
    'kerbela-muslim-su',
    'kerbela-susuzluk',
    'kerbela-seccad-1',
    'kerbela-cadir-sabah',
    'kerbela-sukut',
    'kerbela-esir-yol',
    'kerbela-kufe-pencere',
    'kerbela-erbain',
  ];
  for (const id of fresh) {
    assert.match(img, new RegExp("'" + id + "': require\\('../../assets/scenes/" + id + "\\.jpg'\\)"));
  }
  const bound = (file: string, expected: number) => {
    const src = read(file);
    const block = src.slice(src.indexOf('scenes: ['), src.indexOf('\n  sunni:'));
    const texts = [...block.matchAll(/text: \{ tr:/g)];
    const keys = [...block.matchAll(/image: '([^']+)'/g)].map(m => m[1]);
    assert.equal(texts.length, expected);
    assert.equal(keys.length, texts.length);
    assert.equal(new Set(keys).size, keys.length);
    const pending = new Set(['kerbela-egersiz']);
    for (const id of keys) {
      if (pending.has(id)) {
        assert.doesNotMatch(img, new RegExp("'" + id + "':"));
        continue;
      }
      assert.match(img, new RegExp("'" + id + "': require\\('../../assets/scenes/" + id + "\\.jpg'\\)"));
    }
  };
  bound('./kerbela.ts', 37);
  assert.match(read('./kerbela.ts'), /image: 'kerbela-egersiz'/);
  assert.match(read('./kerbela.ts'), /eğersiz develere bindirildi/);
  bound('./sakife.ts', 10);
  const events = read('./events.ts');
  assert.match(events, /export function nextStory/);
  assert.match(events, /TEACHING_IDS = new Set\(\['mezhepler', 'sadik', 'muta', 'abdest', 'ibadet-farklari'\]\)/);
});

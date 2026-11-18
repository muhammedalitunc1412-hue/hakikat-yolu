import assert from 'node:assert/strict';
import { readdirSync, readFileSync } from 'node:fs';
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
  assert.match(src, /başka rivayetlerde daha açık anlatılır\. \*\*Hz\. Ali\*\* sokakta selam verirdi/);
  assert.doesNotMatch(src, /Rivayetlere göre \*\*Hz\. Ali\*\* sokakta/);
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
    const textOnly = [...block.matchAll(/textOnly: true/g)];
    assert.equal(texts.length, expected);
    assert.equal(keys.length + textOnly.length, texts.length);
    assert.equal(new Set(keys).size, keys.length);
    const pending = new Set([] as string[]);
    for (const id of keys) {
      if (pending.has(id)) {
        assert.doesNotMatch(img, new RegExp("'" + id + "':"));
        continue;
      }
      assert.match(img, new RegExp("'" + id + "': require\\('../../assets/scenes/" + id + "\\.jpg'\\)"));
    }
  };
  const events = read('./events.ts');
  bound('./kerbela.ts', 37);
  assert.doesNotMatch(read('./kerbela.ts'), /Harre|mancınık/);
  bound('./harre.ts', 5);
  assert.match(read('./harre.ts'), /image: 'harre-1'/);
  assert.match(read('./harre.ts'), /image: 'harre-2'/);
  assert.match(events, /, kerbela, harre, imamlar,/);
  assert.match(events, /id: 'harre', title: 'Harre Vakası'/);
  assert.match(read('./kerbela.ts'), /image: 'kerbela-egersiz'/);
  assert.match(read('./kerbela.ts'), /eğersiz develere bindirildi/);
  bound('./sakife.ts', 10);
  assert.match(events, /export function nextStory/);
  assert.match(events, /TEACHING_IDS = new Set\(\['mezhepler', 'sadik', 'muta', 'abdest', 'ibadet-farklari'\]\)/);
});

test('hikâye olaylarındaki her kaynak en az bir sahnede atıflıdır', async () => {
  const dir = new URL('./', import.meta.url);
  const teaching = new Set(['mezhepler', 'sadik', 'muta', 'abdest', 'ibadet-farklari']);
  const files = readdirSync(dir).filter((f: string) => f.endsWith('.ts') && !f.includes('.test.') && /: HistEvent = \{/.test(read('./' + f)));
  assert.ok(files.length >= 25);
  const problems: string[] = [];
  let checked = 0;
  for (const f of files) {
    const mod: any = await import(new URL(f, dir).href);
    const ev: any = Object.values(mod).find((v: any) => v && typeof v === 'object' && Array.isArray(v.scenes) && v.id);
    if (!ev || teaching.has(ev.id)) continue;
    checked++;
    const cited = new Set<string>();
    for (const sc of ev.scenes) for (const c of sc.cites ?? []) {
      assert.ok(c.side === 'shia' || c.side === 'sunni', `${ev.id}: geçersiz taraf ${c.side}`);
      assert.ok(Number.isInteger(c.i) && c.i >= 0 && c.i < ev[c.side].length, `${ev.id}: ${c.side}[${c.i}] yok`);
      cited.add(c.side + ':' + c.i);
    }
    for (const side of ['shia', 'sunni']) ev[side].forEach((s: any, i: number) => {
      if (!cited.has(side + ':' + i)) problems.push(`${ev.id} ${side}[${i}] ${s.book}`);
    });
  }
  assert.ok(checked >= 20);
  assert.deepEqual(problems, []);
});

test('hikâye olaylarının sahne metinlerinde "Rivayete/Rivayetlere göre" çekincesi yok', async () => {
  const teaching = new Set(['mezhepler', 'sadik', 'muta', 'abdest', 'ibadet-farklari']);
  const hits: string[] = [];
  for (const f of readdirSync(new URL('./', import.meta.url))) {
    if (!f.endsWith('.ts') || f.includes('.test.') || teaching.has(f.slice(0, -3))) continue;
    const src = read('./' + f);
    if (!/: HistEvent = \{/.test(src)) continue;
    src.split('\n').forEach((line: string, n: number) => {
      if (/^\s*text:/.test(line) && /(^|[.!?:'] |[,'] |\bve )[Rr]ivayet(e|lere) göre /.test(line.replace(/^\s*text: \{ tr: /, ''))) hits.push(f + ':' + (n + 1));
    });
  }
  assert.deepEqual(hits, []);
});

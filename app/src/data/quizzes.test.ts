import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import type { QUIZZES as Q } from './quizzes';

const { QUIZZES } = (await import(new URL('./quizzes.ts', import.meta.url).href)) as { QUIZZES: typeof Q };
const read = (p: string) => readFileSync(new URL(p, import.meta.url), 'utf8');
const TEACHING = ['mezhepler', 'sadik', 'muta', 'abdest', 'ibadet-farklari'];

test('her hikâyenin 3-5 sorusu var; sorular tr+en, 4 seçenekli ve var olan bir sahneye bağlı', () => {
  const ids = [...read('./events.ts').matchAll(/^import \{ \w+ \} from '\.\/([a-z-]+)';/gm)].map(m => m[1]).filter(id => !TEACHING.includes(id));
  const stories = ids.filter(id => read(`./${id}.ts`).includes(`id: '${id}'`));
  assert.equal(stories.length, 25);
  for (const id of stories) assert.ok(QUIZZES[id], `${id} için test yok`);
  for (const [id, qs] of Object.entries(QUIZZES)) {
    assert.ok(!TEACHING.includes(id), `${id} hikâye değil`);
    assert.ok(qs.length >= 3 && qs.length <= 5, `${id}: soru sayısı`);
    const scenes = (read(`./${id}.ts`).match(/^ {6}text: \{/gm) ?? []).length;
    for (const q of qs) {
      assert.ok(q.q.tr && q.q.en, `${id}: soru çevirisi`);
      assert.equal(q.options.length, 4, `${id}: seçenek sayısı`);
      for (const o of q.options) assert.ok(o.tr && o.en, `${id}: seçenek çevirisi`);
      assert.equal(new Set(q.options.map(o => o.tr)).size, 4, `${id}: tekrar eden seçenek`);
      assert.ok(q.scene >= 0 && q.scene < scenes, `${id}: sahne ${q.scene} / ${scenes}`);
    }
  }
  assert.ok(Object.keys(QUIZZES).length >= 25);
});

test('yazım: Zeyneb (Zeynep değil)', () => {
  assert.ok(!/Zeynep/.test(read('./quizzes.ts')));
});

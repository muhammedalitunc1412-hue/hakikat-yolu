import assert from 'node:assert/strict';
import test from 'node:test';
import type { fold as Fold } from './searchFold';

const { fold } = (await import(new URL('./searchFold.ts', import.meta.url).href)) as { fold: typeof Fold };

test('Türkçe aksan ve büyük harf fark etmez, konum asıl metne döner', () => {
  const s = 'Kerbelâ\'da İmam Hüseyin';
  const f = fold(s, 'tr');
  assert.equal(f.text, "kerbela'da imam huseyin");
  const at = f.text.indexOf('kerbela');
  assert.equal(s.slice(f.map[at], f.map[at + 6] + 1), 'Kerbelâ');
});

test('Arapça/Farsça harf biçimleri ve harekeler katlanır', () => {
  assert.equal(fold('عَلِيّ', 'ar').text, fold('علی', 'fa').text);
});

test('İngilizcede büyük I küçük i olur', () => {
  assert.equal(fold('Imam', 'en').text, 'imam');
});

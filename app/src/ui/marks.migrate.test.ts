import assert from 'node:assert/strict';
import test from 'node:test';
import type { parseStored as Parse } from './marksData';

// Node doğrudan .ts dosyasını yükler (--experimental-strip-types); tsc uzantı kuralına takılmasın diye URL ile.
const { parseStored } = (await import(new URL('./marksData.ts', import.meta.url).href)) as { parseStored: typeof Parse };

test('1.0.2 çoklu yer imleri favorilere taşınır, otomatik "son" işarete dönüşmez', () => {
  const old = JSON.stringify({
    notes: [{ eventId: 'gadir', scene: 2, text: 'not', updatedAt: 1 }, { eventId: 'x', scene: 0, text: '  ', updatedAt: 1 }],
    bookmarks: [{ eventId: 'gadir', scene: 1, savedAt: 5 }, { eventId: 'kerbela', scene: 4, savedAt: 6 }, { eventId: 'gadir', scene: 1, savedAt: 7 }],
    last: { eventId: 'kerbela', scene: 9, at: 1 },
    recents: { kerbela: 9 },
  });
  const s = parseStored(old);
  assert.equal(s.marker, null);
  assert.deepEqual(s.favorites.map(f => f.eventId + ':' + f.scene), ['gadir:1', 'kerbela:4']);
  assert.equal(s.notes.length, 1);
});

test('yeni biçim korunur; bozuk kayıt boş döner', () => {
  const s = parseStored(JSON.stringify({ v: 2, marker: { eventId: 'hasan', scene: 3, savedAt: 1 }, favorites: [], notes: [], quizBest: { hasan: 3 } }));
  assert.deepEqual(s.marker && [s.marker.eventId, s.marker.scene], ['hasan', 3]);
  assert.equal(s.quizBest.hasan, 3);
  assert.deepEqual(parseStored('{oops'), { marker: null, favorites: [], notes: [], quizBest: {} });
});

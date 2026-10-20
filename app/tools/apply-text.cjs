// Kullanım: node tools/apply-text.cjs <json>  — json: { dosya: { "1": "yeni metin", "S": "yeni özet" } }
// Sahne metni = dosyada 6 boşluklu `text: { tr: '...' },` satırlarının n'incisi; "S" = summary.tr
const fs = require('fs');
const B = String.fromCharCode(92);
const esc = t => t.split(B).join(B + B).split("'").join(B + "'");
const patch = JSON.parse(fs.readFileSync(process.argv[2], 'utf8').replace(/^﻿/, ''));
for (const [f, items] of Object.entries(patch)) {
  const P = 'src/data/' + f + '.ts';
  const L = fs.readFileSync(P, 'utf8').split('\n');
  let n = 0, done = 0;
  for (let i = 0; i < L.length; i++) {
    const m = L[i].match(/^(      text: \{ tr: ')(.*)(' \},)$/);
    if (m) { n++; if (items[String(n)] !== undefined) { L[i] = m[1] + esc(items[String(n)]) + m[3]; done++; } continue; }
    const s = L[i].match(/^(  summary: \{ tr: ')(.*)(' \},)$/);
    if (s && items.S !== undefined) { L[i] = s[1] + esc(items.S) + s[3]; done++; }
  }
  fs.writeFileSync(P, L.join('\n'));
  console.log(f, 'değişen:', done, '/', Object.keys(items).length);
}

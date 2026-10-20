// Sahne metni ve özet satırlarında "Şii kaynaklar..." kalıplarını anlatıcı sesine ("bizim kitaplarımız") çevirir.
const fs = require('fs');
const R = [
  ['Şii kaynaklarına göre', 'bizim kitaplarımıza göre'], ['Şii kaynaklara göre', 'bizim kitaplarımıza göre'],
  ['Şii kaynaklarında', 'bizim kitaplarımızda'], ['Şii kaynaklarının', 'bizim kitaplarımızın'], ['Şii kaynaklarda', 'bizim kitaplarımızda'],
  ['Şii kaynakları', 'bizim kitaplarımız'], ['Şii kaynaklar', 'bizim kitaplarımız'],
  ['Şii fıkhında', 'bizim fıkhımızda'], ['Şii fıkhı', 'bizim fıkhımız'],
  ['Şii rivayetlerde', 'bizim rivayetlerimizde'], ['Şii rivayetler', 'bizim rivayetlerimiz'], ['Şii rivayeti', 'bizim rivayetimiz'],
  ['Şii âlimler', 'âlimlerimiz'], ['Şii anlatıya göre', 'bizim anlatımıza göre'],
];
for (const f of process.argv.slice(2)) {
  const P = 'src/data/' + f + '.ts';
  const L = fs.readFileSync(P, 'utf8').split('\n');
  let n = 0;
  for (let i = 0; i < L.length; i++) {
    if (!/^(      text: \{ tr: '|  summary: \{ tr: ')/.test(L[i])) continue;
    let s = L[i];
    for (const [a, b] of R) {
      let idx;
      while ((idx = s.indexOf(a)) >= 0) {
        const start = idx === 0 || /(?:'|\. |: |" |\(|\? )$/.test(s.slice(Math.max(0, idx - 3), idx)) || /tr: '$/.test(s.slice(0, idx));
        const rep = start ? b[0].toUpperCase() + b.slice(1) : b;
        s = s.slice(0, idx) + rep + s.slice(idx + a.length); n++;
      }
    }
    L[i] = s;
  }
  fs.writeFileSync(P, L.join('\n'));
  console.log(f, n);
}

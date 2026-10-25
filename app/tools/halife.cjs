// Ebu Bekir, Ömer ve Osman adlarının önüne "Halife" ünvanını ekler (kullanıcı isteği).
// Eklenmeyenler: "Ömer b. ..." / "Osman b. ..." gibi başka kişiler, zaten "Halife"/"Hz." önekli olanlar,
// tek kelimelik aktör etiketleri ve henüz halife olmadıkları anlatımlar (aşağıdaki SKIP_*).
// Kullanım: node tools/halife.cjs [--dry]
const fs = require('fs');
const path = require('path');
const dry = process.argv.includes('--dry');
const dataDir = path.join(__dirname, '..', 'src', 'data');

// Dosya düzeyinde tamamen atlananlar (halife olmadan önceki olaylar / alıntılar / ilgisiz)
const SKIP_FILES = new Set(['raziyye.ts', 'verses.ts', 'imams.ts', 'sceneImages.ts', 'sceneVideos.ts', 'geo.ts', 'maps.ts']);
// Dosya içinde belirli satırlar (henüz halife değil: Gadir tebriki, Hayber sancağı, Sakife'ye gidiş, alıntı vb.)
const SKIP_LINES = {
  'gadir.ts': [36, 49, 59, 71],
  'hayber.ts': [18, 56, 68],
  'sakife.ts': [21, 22, 31, 32, 55, 57],
  'ali-kimdir.ts': [90],
  'hasan.ts': [56, 83],
  'mezhepler.ts': [22],
  'notes.ts': [56],
};
// Dosya içinde yalnızca belirli adlar atlanır
const SKIP_NAMES = {
  'istihlaf.ts': ['Osman'], // şura adayı iken halife değil
  'fatima-vefat.ts': ['Ömer'], // evde toplananlara tehdit anında halife değil
  'fedek.ts': ['Ömer'],
  'notes.ts': ['Osman@64', 'Osman@65'],
};

const NAME = /(Ebu Bekir|Ebû Bekir|Ömer|Osman)/g;
const LET = 'A-Za-zÇĞİÖŞÜçğıöşüÂÎÛâîû';
let total = 0;
for (const f of fs.readdirSync(dataDir).filter(x => x.endsWith('.ts'))) {
  if (SKIP_FILES.has(f)) continue;
  const P = path.join(dataDir, f);
  const L = fs.readFileSync(P, 'utf8').split('\n');
  let n = 0;
  for (let i = 0; i < L.length; i++) {
    const ln = i + 1;
    if ((SKIP_LINES[f] || []).includes(ln)) continue;
    const skipNames = (SKIP_NAMES[f] || []);
    L[i] = L[i].replace(NAME, (m, name, off, str) => {
      const before = str.slice(Math.max(0, off - 8), off);
      const after = str.slice(off + m.length, off + m.length + 5);
      if (/Halife $/.test(before) || /Hz\. $/.test(before)) return m; // zaten ünvanlı
      if (new RegExp('[' + LET + ']$').test(before.slice(-1))) return m; // başka sözcüğün parçası
      if (/^\s+b\./.test(after) || /^\s+bint/.test(after)) return m; // Ömer b. Abdülaziz, Osman b. Huneyf...
      if (/'\s*$/.test(before) && /^'\s*\}/.test(after + '')) return m; // etiket: { tr: 'Ömer' }
      if (/\{ tr: '$/.test(str.slice(Math.max(0, off - 7), off)) && /^'/.test(str.slice(off + m.length))) return m; // tek kelimelik aktör etiketi
      if (skipNames.includes(name) || skipNames.includes(name + '@' + ln)) return m;
      n++;
      return 'Halife ' + m;
    });
  }
  if (n) { total += n; console.log(f, n); if (!dry) fs.writeFileSync(P, L.join('\n')); }
}
console.log('toplam eklenen:', total, dry ? '(deneme)' : '');

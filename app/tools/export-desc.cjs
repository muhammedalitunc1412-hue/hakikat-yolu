// desc/*.txt (olay başına sahne betimlemeleri) dosyalarını tek bir TXT'de birleştirir.
// Kullanım: node tools/export-desc.cjs "C:\Users\tuncm\Desktop\Hakikat-Yolu-Sahne-Betimlemeleri.txt"
const fs = require('fs');
const path = require('path');
const ts = require('typescript');

const dataDir = path.join(__dirname, '..', 'src', 'data');
const descDir = path.join(__dirname, '..', '..', 'desc');
const cache = {};
function load(name) {
  if (cache[name]) return cache[name].exports;
  const out = ts.transpileModule(fs.readFileSync(path.join(dataDir, name + '.ts'), 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 } }).outputText;
  const m = { exports: {} }; cache[name] = m;
  new Function('require', 'module', 'exports', out)(p => (p.startsWith('./') ? load(p.slice(2)) : require(p)), m, m.exports);
  return m.exports;
}
const { EVENTS, CATEGORIES } = load('events');
const strip = s => s.replace(/^\uFEFF/, '');

const L = [];
const rule = (c = '=') => L.push(c.repeat(78));
rule();
L.push('HAKİKAT YOLU - SAHNE BETİMLEMELERİ VE VİDEO BETİMLEMELERİ');
L.push('Her sahne için ayrıntılı görsel betimleme; her olayın sonunda 6 saniyelik video betimlemesi.');
L.push('Görseli "Dosya adı" satırındaki adla assets\\scenes klasörüne koyun (örn. gadir-1.jpg).');
L.push('Hz. Peygamber, Hz. Ali, Hz. Fatıma, Hz. Hasan ve Hz. Hüseyin yüzsüz, nur (ışık) olarak betimlenmiştir.');
rule();
L.push('');
L.push('İÇİNDEKİLER');
let total = 0;
for (const c of CATEGORIES) {
  L.push('');
  L.push(c.title.toUpperCase());
  for (const id of c.ids) {
    const e = EVENTS.find(x => x.id === id);
    L.push(`  - ${e.title.tr}  (${e.scenes.length} sahne + video)  [${id}-1 ... ${id}-${e.scenes.length}, ${id}-video]`);
    total += e.scenes.length;
  }
}
L.push('');
L.push(`TOPLAM: ${EVENTS.length} olay, ${total} sahne, ${EVENTS.length} video`);
L.push('');

const missing = [];
for (const c of CATEGORIES) {
  L.push('');
  rule('#');
  L.push('KATEGORİ: ' + c.title.toUpperCase());
  rule('#');
  for (const id of c.ids) {
    const f = path.join(descDir, id + '.txt');
    if (!fs.existsSync(f)) { missing.push(id); continue; }
    L.push('');
    rule('=');
    L.push(strip(fs.readFileSync(f, 'utf8')).replace(/\r\n/g, '\n').trim());
    L.push('');
  }
}
const out = process.argv[2] || path.join(process.env.USERPROFILE, 'Desktop', 'Hakikat-Yolu-Sahne-Betimlemeleri.txt');
fs.writeFileSync(out, '\uFEFF' + L.join('\r\n'), 'utf8');
console.log('yazıldı:', out, '| satır:', L.length, '| eksik olay:', missing.join(',') || 'yok');

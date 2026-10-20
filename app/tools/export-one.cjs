// Kullanım: node tools/export-one.cjs <olay-id> <çıktı.txt>  -> tek olayı düz metin olarak yazar
const fs = require('fs'), path = require('path'), ts = require('typescript');
const dataDir = path.join(__dirname, '..', 'src', 'data'); const cache = {};
function load(name) {
  if (cache[name]) return cache[name].exports;
  const out = ts.transpileModule(fs.readFileSync(path.join(dataDir, name + '.ts'), 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 } }).outputText;
  const m = { exports: {} }; cache[name] = m;
  new Function('require', 'module', 'exports', out)(p => (p.startsWith('./') ? load(p.slice(2)) : require(p)), m, m.exports);
  return m.exports;
}
const e = load('events').EVENTS.find(x => x.id === process.argv[2]);
const t = v => (v && v.tr) || '';
const A = { both: 'Kabul eden: Sünni ve Şii', shia: 'Kabul eden: Şii', sunni: 'Kabul eden: Sünni' };
const L = [t(e.title), t(e.key), t(e.date), '', t(e.hook), '', 'SAHNELER'];
e.scenes.forEach((s, i) => { L.push('', (i + 1) + '. ' + t(s.text), '   (' + (A[s.by] || '') + ')'); });
L.push('', 'Şİİ KAYNAKLARI');
e.shia.forEach(s => L.push('- ' + s.book + ' | ' + s.ref + ': ' + t(s.says) + (s.status === 'check' ? ' [Kontrol edilmeli]' : '')));
L.push('', 'SÜNNİ KAYNAKLARI');
e.sunni.forEach(s => L.push('- ' + s.book + ' | ' + s.ref + ': ' + t(s.says) + (s.status === 'check' ? ' [Kontrol edilmeli]' : '')));
L.push('', 'AYRILIKLAR');
(e.disputes || []).forEach(d => L.push('- ' + t(d.title), '  Şii: ' + t(d.shia), '  Sünni: ' + t(d.sunni)));
L.push('', 'DÜŞÜNELİM'); e.questions.forEach(q => L.push('- ' + t(q)));
L.push('', 'ÖZET', t(e.summary), '', 'ÖZET NOTLAR'); (e.notes || []).forEach(n => L.push('- ' + t(n)));
fs.writeFileSync(process.argv[3], '\uFEFF' + L.join('\r\n'), 'utf8');
console.log(L.join('\n'));

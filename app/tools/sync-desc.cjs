// desc/<id>.txt içindeki "Sahne metni:" satırlarını src/data'daki güncel metinle eşitler.
const fs = require('fs'), path = require('path'), ts = require('typescript');
const dataDir = path.join(__dirname, '..', 'src', 'data'), descDir = path.join(__dirname, '..', '..', 'desc');
const cache = {};
function load(name) {
  if (cache[name]) return cache[name].exports;
  const out = ts.transpileModule(fs.readFileSync(path.join(dataDir, name + '.ts'), 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 } }).outputText;
  const m = { exports: {} }; cache[name] = m;
  new Function('require', 'module', 'exports', out)(p => (p.startsWith('./') ? load(p.slice(2)) : require(p)), m, m.exports);
  return m.exports;
}
const { EVENTS } = load('events');
for (const e of EVENTS) {
  const f = path.join(descDir, e.id + '.txt');
  if (!fs.existsSync(f)) continue;
  const L = fs.readFileSync(f, 'utf8').split('\n');
  let n = 0, ch = 0;
  for (let i = 0; i < L.length; i++) {
    if (/^SAHNE \d+/.test(L[i])) n = Number(L[i].match(/^SAHNE (\d+)/)[1]);
    if (n && L[i].startsWith('Sahne metni:')) {
      const t = 'Sahne metni: ' + e.scenes[n - 1].text.tr;
      if (L[i].replace(/\r$/, '') !== t) { L[i] = t; ch++; }
    }
  }
  fs.writeFileSync(f, L.join('\n'));
  console.log(e.id, 'güncellenen sahne metni:', ch);
}

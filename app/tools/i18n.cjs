// Hikâye çevirileri için iş akışı aracı.
//   node tools/i18n.cjs extract <dil> [olay-id ...]  -> ../i18n-work/<dil>/in/<olay>.json (yol -> Türkçe metin), yalnızca eksik/eskimiş olanlar
//   node tools/i18n.cjs merge <dil>                  -> ../i18n-work/<dil>/out/<olay>.json dosyalarını src/locales/<dil>/ içine işler
//   node tools/i18n.cjs status                       -> dil/olay kapsama tablosu
// Çeviri dosyası biçimi: { "yol": "çeviri" }. Anahtarlar in/ dosyasındakilerle birebir aynı olmalıdır.
const fs = require('fs');
const path = require('path');
const ts = require('typescript');

const src = path.join(__dirname, '..', 'src');
const work = path.join(__dirname, '..', '..', 'i18n-work');
const LANGS = ['en', 'ar', 'az', 'fa', 'es', 'fr', 'de'];

const cache = {};
function load(rel) {
  if (cache[rel]) return cache[rel].exports;
  const file = path.join(src, rel + '.ts');
  const out = ts.transpileModule(fs.readFileSync(file, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 } }).outputText;
  const m = { exports: {} }; cache[rel] = m;
  const dir = path.posix.dirname(rel);
  new Function('require', 'module', 'exports', out)((p) => (p.startsWith('.') ? load(path.posix.normalize(path.posix.join(dir, p))) : require(p)), m, m.exports);
  return m.exports;
}
const { EVENTS } = load('data/events');
const { textHash, walkL } = load('locales/walk');

const readJson = (f, d) => { try { return JSON.parse(fs.readFileSync(f, 'utf8')); } catch { return d; } };
const writeJson = (f, o) => { fs.mkdirSync(path.dirname(f), { recursive: true }); fs.writeFileSync(f, JSON.stringify(o, null, 1) + '\n'); };
const localeFile = (lang, id) => path.join(src, 'locales', lang, id + '.json');

function entriesOf(ev) {
  const all = {};
  walkL(ev, (p, l) => { all[p] = l.tr; });
  return all;
}

function regenIndex() {
  const lines = [
    '// Otomatik üretilir: node tools/i18n.cjs merge <dil>',
    "import type { Lang } from '../types';",
    '',
    'export type Entries = Record<string, [string, string]>; // yol -> [Türkçe metnin karması, çeviri]',
    'export const LOCALES: Partial<Record<Lang, Record<string, Entries>>> = {',
  ];
  for (const lang of LANGS) {
    const dir = path.join(src, 'locales', lang);
    if (!fs.existsSync(dir)) continue;
    const ids = fs.readdirSync(dir).filter(f => f.endsWith('.json')).map(f => f.slice(0, -5)).sort();
    if (!ids.length) continue;
    lines.push(`  ${lang}: {`);
    for (const id of ids) lines.push(`    '${id}': require('./${lang}/${id}.json'),`);
    lines.push('  },');
  }
  lines.push('};', '');
  fs.writeFileSync(path.join(src, 'locales', 'index.ts'), lines.join('\n'));
}

const [cmd, lang, ...ids] = process.argv.slice(2);
if (cmd === 'extract') {
  let events = 0, items = 0, chars = 0;
  for (const ev of EVENTS) {
    if (ids.length && !ids.includes(ev.id)) continue;
    const have = readJson(localeFile(lang, ev.id), {});
    const todo = {};
    for (const [p, tr] of Object.entries(entriesOf(ev))) {
      if (!tr.trim()) continue;
      const e = have[p];
      if (!e || e[0] !== textHash(tr)) todo[p] = tr;
    }
    const n = Object.keys(todo).length;
    if (!n) continue;
    writeJson(path.join(work, lang, 'in', ev.id + '.json'), todo);
    events++; items += n; chars += Object.values(todo).join('').length;
  }
  console.log(`${lang}: ${events} olay, ${items} metin, ${chars} karakter -> ${path.join(work, lang, 'in')}`);
} else if (cmd === 'merge') {
  const outDir = path.join(work, lang, 'out');
  let merged = 0;
  for (const ev of EVENTS) {
    const f = path.join(outDir, ev.id + '.json');
    if (!fs.existsSync(f)) continue;
    const out = readJson(f, null);
    if (!out) { console.log('BOZUK JSON:', ev.id); continue; }
    const src0 = entriesOf(ev);
    const have = readJson(localeFile(lang, ev.id), {});
    let n = 0;
    for (const [p, t] of Object.entries(out)) {
      if (!(p in src0)) { console.log('bilinmeyen yol, atlandı:', ev.id, p); continue; }
      if (typeof t !== 'string' || !t.trim()) { console.log('boş çeviri, atlandı:', ev.id, p); continue; }
      have[p] = [textHash(src0[p]), t]; n++;
    }
    if (n) { writeJson(localeFile(lang, ev.id), have); merged += n; console.log(ev.id, n); }
  }
  regenIndex();
  console.log(`${lang}: ${merged} metin işlendi`);
} else if (cmd === 'check') {
  // Çevirilerin yapısal denetimi: biçim işaretleri, ayet göndermeleri, rakamlar, alfabe.
  const VERSE = /(Bakara|Âl-i İmrân|Nisâ|Mâide|Enfâl|Nahl|Ahzâb|Şûrâ|Beyyine|A'râf|Tâhâ)(?: suresi)?\s+(?:\d{1,3}:)?\d{1,3}(?![\d:])/g;
  const count = (s, re) => (s.match(re) || []).length;
  const arabicScript = lang === 'ar' || lang === 'fa';
  let bad = 0;
  for (const ev of EVENTS) {
    const have = readJson(localeFile(lang, ev.id), {});
    const srcs = entriesOf(ev);
    for (const [p, [h, t]] of Object.entries(have)) {
      const tr = srcs[p];
      if (tr === undefined || h !== textHash(tr)) continue;
      const issues = [];
      if (count(tr, /\*\*/g) !== count(t, /\*\*/g)) issues.push('** sayısı');
      if (count(tr, /==/g) !== count(t, /==/g)) issues.push('== sayısı');
      if (count(tr, /\n/g) !== count(t, /\n/g)) issues.push('satır sayısı');
      const v1 = (tr.match(VERSE) || []).join('|'), v2 = (t.match(VERSE) || []).join('|');
      if (v1 !== v2) issues.push('ayet gönderme: ' + v1 + ' => ' + v2);
      if (/[Ѐ-ӿ]/.test(t)) issues.push('Kiril harf');
      if (!arabicScript && /[؀-ۿ]/.test(t) && !/[؀-ۿ]/.test(tr)) issues.push('Arap harfi');
      if (arabicScript && /[ğşıİçöüĞŞÇÖÜ]{2}/.test(t.replace(/[A-Za-z\s]/g, '')) ) issues.push('Türkçe artık');
      if (!arabicScript) {
        const d1 = (tr.match(/\d+/g) || []).sort().join(','), d2 = (t.match(/\d+/g) || []).sort().join(',');
        if (d1 !== d2) issues.push('rakamlar: ' + d1 + ' => ' + d2);
      }
      if (t.trim() === tr.trim() && tr.length > 25) issues.push('çevrilmemiş');
      if (issues.length) { bad++; console.log(ev.id, p, '|', issues.join('; ')); }
    }
  }
  console.log(`${lang}: ${bad} sorunlu metin`);
} else if (cmd === 'status') {
  const rows = [];
  for (const L of LANGS) {
    let total = 0, ok = 0;
    for (const ev of EVENTS) {
      const have = readJson(localeFile(L, ev.id), {});
      for (const [p, tr] of Object.entries(entriesOf(ev))) {
        if (!tr.trim()) continue;
        total++;
        const e = have[p];
        if (e && e[0] === textHash(tr)) ok++;
      }
    }
    rows.push(`${L}: ${ok}/${total} (%${Math.round(100 * ok / total)})`);
  }
  console.log(rows.join('\n'));
} else {
  console.log('Kullanım: extract <dil> [id...] | merge <dil> | status');
}

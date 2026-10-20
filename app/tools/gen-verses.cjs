// verses.json (fetch-verses.cjs çıktısı) -> src/data/verses.ts
// Kullanım: node tools/gen-verses.cjs <verses.json>
const fs = require('fs');
const v = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));
const NAMES = { 2: 'Bakara', 3: 'Âl-i İmrân', 4: 'Nisâ', 5: 'Mâide', 8: 'Enfâl', 16: 'Nahl', 33: 'Ahzâb', 42: 'Şûrâ', 98: 'Beyyine', 7: "A'râf", 20: 'Tâhâ' };
const out = {};
for (const k of Object.keys(v)) {
  const [s, a] = k.split(':');
  out[k] = { sure: NAMES[s], ayah: Number(a), ar: v[k].ar, meal: v[k].meal };
}
const body = "import type { Verse } from '../types';\n\n// Arapça: Kur'an (Osmanî imla), api.alquran.cloud; meal: Diyanet İşleri Başkanlığı.\n// Üretici: tools/gen-verses.cjs\nexport const VERSES: Record<string, Verse> = " + JSON.stringify(out, null, 2) + ';\n';
fs.writeFileSync('src/data/verses.ts', body, 'utf8');
console.log('yazıldı:', Object.keys(out).length, 'ayet');

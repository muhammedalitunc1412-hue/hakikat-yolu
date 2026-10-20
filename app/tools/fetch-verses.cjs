// Ayet metinleri: Arapça (quran-uthmani) ve Diyanet meali, api.alquran.cloud'dan çekilir.
const fs = require('fs');
const REFS = ['33:33','3:61','42:23','2:207','5:6','4:24','98:7','16:106','3:28','8:41','16:90','5:67','5:3','7:142','20:29'];
(async () => {
  const out = {};
  for (const r of REFS) {
    const res = await fetch('https://api.alquran.cloud/v1/ayah/' + r + '/editions/quran-uthmani,tr.diyanet');
    const j = await res.json();
    const ar = j.data.find(d => d.edition.identifier === 'quran-uthmani');
    const tr = j.data.find(d => d.edition.identifier === 'tr.diyanet');
    out[r] = { sure: ar.surah.name, sureTr: ar.surah.englishName, ar: ar.text, meal: tr.text };
    console.log(r, ar.surah.englishName, '|', tr.text.slice(0, 80));
  }
  fs.writeFileSync(process.argv[2], JSON.stringify(out, null, 1), 'utf8');
})();

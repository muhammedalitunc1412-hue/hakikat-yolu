// Uygulamadaki tüm içeriği (olaylar, kaynaklar, ayrılıklar, sorular) tek bir TXT dosyasına döker.
// Kullanım: node tools/export-txt.cjs "C:\Users\tuncm\Desktop\Hakikat-Yolu-Icerik.txt"
const fs = require('fs');
const path = require('path');
const ts = require('typescript');

const root = path.join(__dirname, '..', 'src', 'data');
const cache = {};
function load(name) {
  if (cache[name]) return cache[name].exports;
  const file = path.join(root, name + '.ts');
  const out = ts.transpileModule(fs.readFileSync(file, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 } }).outputText;
  const m = { exports: {} }; cache[name] = m;
  new Function('require', 'module', 'exports', out)((p) => (p.startsWith('./') ? load(p.slice(2)) : require(p)), m, m.exports);
  return m.exports;
}
const { EVENTS } = load('events');
const { CREDITS } = load('credits');
const t = v => (typeof v === 'string' ? v : v ? v.tr : '');

const L = [];
const line = (s = '') => L.push(s);
const rule = (c = '=') => line(c.repeat(78));

rule();
line('HAKİKAT YOLU - UYGULAMA İÇERİĞİ');
line('İslam tarihinin kırılma anları, Sünni ve Şii kaynaklarıyla');
line('Hazırlanma tarihi: ' + new Date().toLocaleDateString('tr-TR'));
rule();
line();
line('NOT: "Doğrulandı" = kaynak metni ve numarası okunup teyit edildi.');
line('     "Kontrol edilmeli" = yayından önce birincil kaynaktan teyit edilecek.');
line();
line('OLAY LİSTESİ');
EVENTS.forEach((e, i) => line(`  ${i + 1}. ${t(e.title)}  (${t(e.date)})`));
line();

EVENTS.forEach((e, i) => {
  line();
  rule();
  line(`OLAY ${i + 1}: ${t(e.title).toUpperCase()}`);
  line(`Tarih: ${t(e.date)}`);
  line(`Kanca: ${t(e.hook)}`);
  rule();
  line();
  line('--- HİKÂYE (SAHNELER) ---');
  e.scenes.forEach((s, k) => {
    const by = s.by === 'shia' ? 'Kabul eden: Şii' : s.by === 'sunni' ? 'Kabul eden: Sünni' : s.by === 'both' ? 'Kabul eden: Sünni ve Şii' : '';
    line(`Sahne ${k + 1}: ${t(s.text)}${by ? '  [' + by + ']' : ''}`);
    const who = s.art.actors.filter(a => a.label).map(a => t(a.label)).join(', ');
    if (who) line(`   (Sahnedekiler: ${who})`);
    line();
  });
  const src = (title, arr) => {
    line(`--- ${title} ---`);
    if (!arr.length) line('(kayıt yok)');
    arr.forEach((s, k) => {
      line(`${k + 1}) ${s.book} - ${s.ref}`);
      line(`   Ne anlatır: ${t(s.says)}`);
      if (s.grade) line(`   Sıhhat/güvenirlik: ${t(s.grade)}`);
      if (s.url) line(`   Bağlantı: ${s.url}`);
      line(`   Durum: ${s.status === 'verified' ? 'Doğrulandı' : 'Kontrol edilmeli'}`);
    });
    line();
  };
  src('SÜNNİ KAYNAKLARINDA', e.sunni);
  src('Şİİ KAYNAKLARINDA', e.shia);
  if (e.disputes && e.disputes.length) {
    line('--- AYRILIKLAR ---');
    e.disputes.forEach(d => {
      line(`* ${t(d.title)}`);
      line(`   Sünni yorum: ${t(d.sunni)}`);
      line(`   Şii yorum:   ${t(d.shia)}`);
    });
    line();
  }
  line('--- DÜŞÜNELİM ---');
  e.questions.forEach((q, k) => line(`${k + 1}. ${t(q)}`));
  line();
  line('--- ÖZET ---');
  line(t(e.summary));
  line();
});

rule();
line('KAYNAKLAR VE YÖNTEM');
rule();
[
  'Bu uygulamadaki her olay, önce hikâye olarak anlatılır; sonra Sünni kaynaklarında geçenler ve Şii kaynaklarında geçenler ayrı başlıklarda verilir.',
  'Her kaynak kartında kitabın adı, numarası ve ne anlattığı yazar. Sünni kaynaklar için kitabın sıhhat değerlendirmesi de belirtilir.',
  'Doğrulandı: Metin ve numara kaynağından okunmuştur. Kontrol edilmeli: Numara ya da sayfa, yayın öncesinde birincil kaynaktan teyit edilecektir.',
  '"Ayrılıklar" bölümü, iki geleneğin aynı olayı nasıl yorumladığını ya da bir rivayeti hangi kaynakların kabul edip etmediğini gösterir.',
  '"Düşünelim" bölümündeki sorular, kaynaklarda yazılanlardan hareketle okuyucuyu kendi sonucunu kurmaya davet eder.',
  'Uygulamada kimseye hakaret, lanet ya da nefret söylemi yoktur. Hz. Peygamber, Ehl-i Beyt ve sahabeye saygı esastır.',
].forEach(p => { line('- ' + p); });
line();
line('GÖRSEL KAYNAKLARI (kamu malı / CC0, Wikimedia Commons)');
CREDITS.forEach(c => line(`- ${c.title} - ${c.artist}, ${c.year} (${c.license})  ${c.url}`));

const out = process.argv[2] || path.join(process.env.USERPROFILE, 'Desktop', 'Hakikat-Yolu-Icerik.txt');
fs.writeFileSync(out, '\uFEFF' + L.join('\r\n'), 'utf8');
console.log('yazıldı:', out, '(' + L.length + ' satır)');

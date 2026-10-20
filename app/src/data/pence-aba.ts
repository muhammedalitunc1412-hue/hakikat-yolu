import type { HistEvent } from '../types';

// Kaynak: research/01-gadir-raziyye-usame.md (bölüm 2.3) ve ehlibeyt.ts'teki doğrulamalar.
// status 'verified' = metin/numara okundu; 'check' = yayın öncesi birincil kaynaktan kontrol edilmeli.
export const penceAba: HistEvent = {
  id: 'pence-aba',
  date: { tr: 'Medine, Peygamber dönemi', en: 'Medina, the Prophet\'s era' },
  title: { tr: 'Pence-i Âl-i Aba (Kisa Olayı): Ehl-i Beyt kimdir?', en: 'The Five of the Cloak (Hadith al-Kisa): who are the Ahl al-Bayt?' },
  hook: { tr: 'Peygamber bir örtünün altına kimleri aldı ve "Ehl-i Beytim" derken kimleri kastetti?', en: 'Whom did the Prophet gather under the cloak, and whom did he mean by "my Ahl al-Bayt"?' },
  scenes: [
    {
      by: 'both',
      text: { tr: 'Aişe anlatır: Peygamber bir sabah siyah yünlü bir örtüyle çıktı. Önce Hz. Hasan geldi, onu örtünün altına aldı; sonra Hz. Hüseyin, Hz. Fatıma ve Hz. Ali geldi, hepsini örtünün altına aldı. Sonra "Ey Ehl-i Beyt, Allah sizden kiri gidermek ve sizi tertemiz yapmak ister" ayetini (Ahzâb 33:33) okudu. Müslim 2424 bunu aktarır.' },
      art: { bg: 'interior', actors: [{ kind: 'prophet', x: 38, label: { tr: 'Hz. Peygamber' } }, { kind: 'ali', x: 52, label: { tr: 'Hz. Ali' } }, { kind: 'fatima', x: 62, label: { tr: 'Hz. Fatıma' } }, { kind: 'hasan', x: 72, scale: 0.7, label: { tr: 'Hz. Hasan' } }, { kind: 'husayn', x: 80, scale: 0.65, label: { tr: 'Hz. Hüseyin' } }] },
    },
    {
      by: 'both',
      text: { tr: 'Tirmizi\'nin aktardığı rivayetlerde Peygamber örtünün altındakiler için "Allah\'ım, bunlar Ehl-i Beytimdir; onlardan kiri uzaklaştır, onları tertemiz yap" diye dua eder. Ümmü Seleme "Ben de onlarla birlikte miyim?" diye sorar; Peygamber ona "Sen hayır üzerindesin" der. Rivayetin lafızları ve numarası kaynaklara göre farklılık gösterir.' },
      art: { bg: 'interior', actors: [{ kind: 'prophet', x: 38, label: { tr: 'Hz. Peygamber' } }, { kind: 'woman', x: 70 }] },
    },
    {
      by: 'shia',
      text: { tr: 'Ayet-i Tathir\'deki "ehl" kelimesi, örtünün altına alınan beş kişiyi anlatır; Müslim 2424\'e göre Peygamber bu ayeti onların üzerine okudu. Şii kaynaklarında ayetteki "arındırma", onların günahtan korunmuşluğu (ismet) olarak anlaşılır.' },
      art: { bg: 'interior', props: ['scroll'], actors: [{ kind: 'prophet', x: 40, label: { tr: 'Hz. Peygamber' } }, { kind: 'woman', x: 66 }] },
    },
    {
      by: 'both',
      text: { tr: 'Müslim 2408\'deki rivayette Zeyd b. Erkam\'a Ehl-i Beyt\'in kimler olduğu sorulur. Önce hanımlarının bu kapsama girmediğini, zekât yasaklanan Ali, Akîl, Cafer ve Abbas ailelerinin kastedildiğini söyler. Böylece bu rivayette Ehl-i Beyt, Peygamber\'in yakın akrabası olan Haşimoğulları ailelerine dayandırılır.' },
      art: { bg: 'dune-dusk', props: ['scroll'], actors: [{ kind: 'crowd', x: 28, scale: 8 }, { kind: 'prophet', x: 66, label: { tr: 'Hz. Peygamber' } }] },
    },
    {
      by: 'shia',
      text: { tr: 'Örtünün altındaki bu beş kişiye "Pence-i Âl-i Aba" (örtü ehlinin beşi) denir. Pence, Farsça\'da beş demektir. Hz. Peygamber, Hz. Ali, Hz. Fatıma, Hz. Hasan ve Hz. Hüseyin Şii kaynaklarında ismet sahibi kabul edilir. Bazı Şii geleneklerde alemlerin üstündeki açık el biçimi bu beşi simgeler.' },
      art: { bg: 'night', props: ['stars'], actors: [{ kind: 'prophet', x: 20, label: { tr: 'Hz. Peygamber' } }, { kind: 'ali', x: 36, label: { tr: 'Hz. Ali' } }, { kind: 'fatima', x: 50, label: { tr: 'Hz. Fatıma' } }, { kind: 'hasan', x: 64, scale: 0.8, label: { tr: 'Hz. Hasan' } }, { kind: 'husayn', x: 76, scale: 0.8, label: { tr: 'Hz. Hüseyin' } }] },
    },
    {
      by: 'shia',
      text: { tr: 'Şii kaynaklarında Hz. Fatıma\'dan aktarılan ve "Hadis-i Kisa" diye okunan daha uzun bir rivayet vardır. Bu uzun biçimde örtünün altında Cebrail\'in ve Allah\'ın hitabı da anlatılır. Müslim ve Tirmizi\'deki kısa rivayetlerin ayrıntılı bir anlatımı olarak Şii kaynaklarında yer alan bu lafzın senedi, Şii âlimler arasında da tartışılmıştır.' },
      art: { bg: 'interior', props: ['scroll', 'stars'], actors: [{ kind: 'fatima', x: 50, label: { tr: 'Hz. Fatıma' } }] },
    },
    {
      by: 'shia',
      text: { tr: 'Kisa olayı, Ehl-i Beyt\'in çekirdeğinin Allah tarafından belirlendiğini gösterir. Sonraki imamlar bu beşin soyundan geldiği için Şii kaynaklarında imamet çizgisi bu kapsama dayandırılır. Peygamber\'in bu beş kişiyi örtüsünün altına alması, Şii kaynaklarında olduğu gibi Müslim ve Tirmizi gibi Sünni kaynaklarında da büyük bir fazilet olarak anlatılır.' },
      art: { bg: 'dawn', props: ['sun'], actors: [{ kind: 'ali', x: 40, label: { tr: 'Hz. Ali' } }, { kind: 'hasan', x: 56, scale: 0.8, label: { tr: 'Hz. Hasan' } }, { kind: 'husayn', x: 68, scale: 0.8, label: { tr: 'Hz. Hüseyin' } }] },
    },
  ],
  sunni: [
    { book: 'Müslim, Sahih', ref: 'No. 2424 (Fezâil)', says: { tr: 'Aişe: Peygamber siyah örtü altına Hasan, Hüseyin, Fatıma ve Ali\'yi alır, Ahzâb 33:33\'ü okur.' }, grade: { tr: 'Sahih' }, url: 'https://hadithunlocked.com/muslim:2424', status: 'verified' },
    { book: 'Tirmizi, el-Câmi\'', ref: 'Tefsir ve Menâkıb bâbları (Ahzâb 33:33; Ümmü Seleme rivayeti; numara kontrol edilecek)', says: { tr: 'Peygamber örtünün altındakiler için "bunlar Ehl-i Beytimdir" diye dua eder; Ümmü Seleme "ben de mi" diye sorar.' }, grade: { tr: 'Tirmizi: hasen/sahih (rivayete göre)' }, status: 'check' },
    { book: 'Müslim, Sahih', ref: 'No. 2408a (Zeyd b. Erkam)', says: { tr: 'Ehl-i Beyt\'in kapsamı: zekât yasaklanan aileler; hanımlar bu kapsam tartışmasında.' }, grade: { tr: 'Sahih' }, url: 'https://hadithunlocked.com/muslim:2408a', status: 'verified' },
  ],
  shia: [
    { book: 'WikiShia, Hadith al-Kisa (ikincil)', ref: 'Hadith al-Kisa maddesi', says: { tr: 'Kisa olayının Şii ve Sünni kaynaklardaki yolları; uzun Hadis-i Kisa\'nın aktarımı.' }, url: 'https://en.wikishia.net/view/Hadith_al-Kisa', status: 'check' },
    { book: 'WikiShia, Verse of Purification (ikincil)', ref: 'Ayet-i Tathir maddesi', says: { tr: 'Ahzâb 33:33\'ün ismet yorumu ve Ehl-i Beyt\'in kapsamı.' }, url: 'https://en.wikishia.net/view/Verse_of_Purification', status: 'check' },
  ],
  disputes: [
    {
      title: { tr: 'Ehl-i Beyt\'in kapsamı' },
      sunni: { tr: 'Kapsam geniştir: Peygamber\'in hanımları ve Haşimoğulları da girer; Kisa halkı bunun çekirdeğidir. Ahzâb 33:33 hanımlara hitap eden ayetlerin içinde gelir.' },
      shia: { tr: 'Ayet-i Tathir ve Kisa hadisi, ismet sahibi Ehl-i Beyt\'i Peygamber, Ali, Fatıma, Hasan ve Hüseyin ile sınırlar; imamlar bunların soyundandır.' },
    },
    {
      title: { tr: 'Ümmü Seleme neden örtünün altında değil?' },
      sunni: { tr: '"Sen hayır üzerindesin" sözü onu dışlamaz, iyilik üzerinde olduğunu bildirir; hanımların Ehl-i Beyt\'e dahil olduğu görüşünü çürütmez.' },
      shia: { tr: 'Peygamber onu örtüye almayıp ayrı tutmuştur; bu, ayetin ismet sahibi beş kişiyi özel olarak kastettiğini gösterir.' },
    },
  ],
  questions: [
    { tr: 'Peygamber beş kişiyi tek örtünün altına alıp ayeti okuduğuna göre, "Ehl-i Beyt" ifadesinin çekirdeğini sizce kimler oluşturur?' },
    { tr: 'Zeyd b. Erkam hanımları saymıyorsa, Sünni kaynaklardaki farklı görüşlerin hangisi metne daha yakındır sizce?' },
    { tr: 'Tathir ayetindeki "kiri gidermek" ifadesi, günahtan korunmuşluğu mu yoksa manevi arınmayı mı anlatır sizce?' },
  ],
  summary: { tr: 'Müslim\'deki Kisa rivayeti, Peygamber\'in Ali, Fatıma, Hasan ve Hüseyin\'i örtünün altına aldığını bildirir. Şii kaynaklarında bu beş kişi (Pence-i Âl-i Aba), ismet sahibi Ehl-i Beyt\'in çekirdeği olarak anılır; olay Müslim ve Tirmizi gibi Sünni kaynaklarında da büyük bir fazilet olarak yer alır.' },
};

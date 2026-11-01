import type { HistEvent } from '../types';

// Kaynak: research/01-gadir-raziyye-usame.md (bölüm 2.3), research/05 (kaynak rehberi) ve gadir.ts/sebb.ts'teki doğrulamalar.
// status 'verified' = metin/numara okundu; 'check' = yayın öncesi birincil kaynaktan kontrol edilmeli.
export const menzile: HistEvent = {
  id: 'menzile',
  date: { tr: 'Tebük Seferi, Hicretin 9. yılı (630)', en: 'The Tabuk expedition, 9 AH (630)' },
  title: { tr: 'Hadis-i Menzile: Tebük\'te "Harun Musa\'ya nasılsa sen de bana öylesin"', en: 'The Hadith of the Position: at Tabuk, "as Aaron was to Moses"' },
  hook: { tr: 'Tebük\'te Peygamber, Hz. Ali\'ye "Harun Musa\'ya nasılsa sen de bana öylesin" dedi.', en: 'The Prophet left Ali in Medina when he marched to Tabuk. What did he say to him, and what does it mean?' },
  scenes: [
    {
      by: 'both',
      text: { tr: 'Hicretin 9. yılında Bizans sınırda asker topluyordu. Yaz sıcaktı, kıtlık vardı, yol uzundu. Peygamber yine de **Tebük**\'e çıktı. Ordu "Zorluk Ordusu" diye anıldı. Bu sefer, **Hz. Ali**\'nin yerini bir cümleyle mühürleyecekti.' },
      art: { bg: 'dune-day', props: ['sun', 'tents'], actors: [{ kind: 'crowd', x: 30, scale: 8 }, { kind: 'prophet', x: 68, label: { tr: 'Hz. Peygamber' } }] },
    },
    {
      by: 'both',
      text: { tr: 'Peygamber, Medine\'yi ve ailesini koruması için **Hz. Ali**\'yi yerine vekil bıraktı. Şehri, en güvendiği ele emanet etti. Vekâlet, bir kenara itmek değildi.' },
      art: { bg: 'city', props: ['sun'], actors: [{ kind: 'prophet', x: 40, label: { tr: 'Hz. Peygamber' } }, { kind: 'ali', x: 62, label: { tr: 'Hz. Ali' } }] },
    },
    {
      by: 'both',
      text: { tr: 'Medine\'de münafıklar fısıldadı: "Onu yük gördüğü için bıraktı." **Hz. Ali** silahını kuşandı, orduya yetişti. Yüreği incinmişti. Peygamber\'in cevabı, o incinmenin üstüne bir makam koyacaktı.' },
      art: { bg: 'dune-dusk', actors: [{ kind: 'ali', x: 40, label: { tr: 'Hz. Ali' } }, { kind: 'crowd', x: 72, scale: 5 }] },
    },
    {
      by: 'both',
      text: { tr: '**Hz. Ali** sordu: "Beni çocuklarla ve kadınlarla mı bırakıyorsun?" Peygamber buyurdu: "Harun\'un Musa nezdindeki yeri gibi, benim nezdimde yerinin olmasına razı değil misin? Ancak benden sonra peygamber yoktur." Kardeş, vezir, halife. Yalnız peygamberlik ayrıldı.' },
      art: { bg: 'dune-dusk', actors: [{ kind: 'prophet', x: 42, label: { tr: 'Hz. Peygamber' } }, { kind: 'ali', x: 64, label: { tr: 'Hz. Ali' } }] },
    },
    {
      by: 'both',
      text: { tr: 'Kur\'an\'da Musa, Tur\'a çıkarken Harun\'a "Kavmim içinde benim yerime geç" der (A\'râf 7:142). "Ailemden bana bir yardımcı ver" diye de dilemişti (Tâhâ 20:29). **Menzile**, o yeri **Hz. Ali**\'ye koyar. Gadir, bu benzetmenin çölde ilanıdır.' },
      art: { bg: 'river', props: ['palms'], actors: [{ kind: 'crowd', x: 40, scale: 4 }] },
    },
    {
      by: 'shia',
      text: { tr: '**Hz. Ali**, Peygamber\'in kardeşi, veziri ve halifesidir. "Benden sonra peygamber yoktur" cümlesi yalnız nübüvveti ayırır. Geri kalan yer onundur. Bu söz, Sakife\'de unutulacak, Gadir\'de ise herkesin önünde tekrarlanacaktır.' },
      art: { bg: 'night', props: ['stars', 'scroll'], actors: [{ kind: 'ali', x: 50, label: { tr: 'Hz. Ali' } }] },
    },
    {
      by: 'both',
      text: { tr: 'Yıllar sonra **Muaviye**, Sa\'d\'a **Hz. Ali**\'ye neden sövmediğini soracaktı. Sa\'d üç sözü sayacaktı: **Menzile**, Hayber sancağı ve Mübahele. Minber lanet isterken, bu üç söz hâlâ ayaktaydı.' },
      art: { bg: 'interior', props: ['scroll'], actors: [{ kind: 'crowd', x: 36, scale: 3 }] },
    },
    {
      by: 'both',
      text: { tr: 'Tebük\'te savaş çıkmadı. Peygamber anlaşmalar yapıp Medine\'ye döndü. **Hz. Ali** yolda ona yetişmiş, o sözü duymuştu. Şehir, vekiline emanet kalmıştı. Velayet, bir seferde de boş bırakılmamıştı.' },
      art: { bg: 'dawn', props: ['sun'], actors: [{ kind: 'prophet', x: 44, label: { tr: 'Hz. Peygamber' } }, { kind: 'crowd', x: 72, scale: 6 }] },
    },
  ],
  sunni: [
    { book: 'Buhari, Sahih', ref: 'No. 3706 (Menâkıb; Sa\'d b. Ebi Vakkas)', says: { tr: '"Harun Musa\'ya nasıl ise sen bana öylesin" hadisi.' }, grade: { tr: 'Sahih' }, url: 'https://hadithunlocked.com/bukhari:3706', status: 'verified' },
    { book: 'Buhari, Sahih', ref: 'No. 4416 (Megāzī; Tebük gazvesi; numara kontrol edilecek)', says: { tr: 'Peygamber Tebük\'e çıkarken Hz. Ali\'yi Medine\'de vekil bırakır; Menzile sözü.' }, grade: { tr: 'Sahih' }, status: 'check' },
    { book: 'Müslim, Sahih', ref: 'No. 2404 (Fezâilü\'s-sahâbe; sitede 2404a-c)', says: { tr: 'Menzile hadisi "benden sonra nebi yok" kaydıyla (Tebük); Muaviye-Sa\'d konuşması.' }, grade: { tr: 'Sahih' }, url: 'https://hadithunlocked.com/muslim:2404a', status: 'verified' },
    { book: 'İbn Mace, Sünen', ref: 'No. 121 (Fazl-ı Ali)', says: { tr: 'Sa\'d b. Ebi Vakkas, Muaviye\'ye üç sözü hatırlatır: mevlâ, Menzile, Hayber sancağı.' }, grade: { tr: 'Albani: sahih' }, url: 'https://hadithunlocked.com/ibnmajah:121', status: 'verified' },
  ],
  shia: [
    { book: 'WikiShia, Hadith al-Manzila (ikincil)', ref: 'Hadith al-Manzila maddesi', says: { tr: 'Menzile hadisinin Şii ve Sünni kaynaklardaki yolları ve imamete delil oluşunun açıklaması.' }, url: 'https://en.wikishia.net/view/Hadith_al-Manzila', status: 'check' },
  ],
  disputes: [
    {
      title: { tr: 'Tebük\'teki vekâlet mi, halefiyet mi?' },
      sunni: { tr: 'Peygamber Tebük\'te Hz. Ali\'yi Medine\'de yerine bıraktı ve Harun benzetmesini söyledi. Sünni okumada vekillik sefer boyunca geçicidir; başka seferlerde de vekil bırakılmıştır, Harun Musa\'dan önce vefat ettiği için söz hilafet delili sayılmaz, yine de büyük bir fazilettir.' },
      shia: { tr: 'Peygamber Tebük\'te Hz. Ali\'yi Medine\'de yerine bıraktı ve Harun benzetmesini söyledi. Şia\'da Harun, Musa\'nın kardeşi, veziri ve halifesidir; "nübüvvet hariç" kaydı geri kalan makamların Hz. Ali\'ye verildiğini gösterir.' },
    },
    {
      title: { tr: 'Söz Tebük\'e mi özel, genel mi?' },
      sunni: { tr: 'Peygamber bu sözü Tebük\'te, Hz. Ali üzülmesin diye söyledi. Sünni okumada söz o olayla sınırlıdır.' },
      shia: { tr: 'Peygamber bu sözü Tebük\'te, Hz. Ali üzülmesin diye söyledi. Şia\'da "menzile" genel bir konumdur; sözü tek olaya sıkıştırmak lafzına uymaz.' },
    },
  ],
  questions: [
    { tr: 'Peygamber "Benden sonra peygamber yoktur" dedi. Harun\'un kalan yeri, Hz. Ali\'de size ne gösteriyor?' },
    { tr: 'Peygamber başka seferlerde de vekil bırakmıştı. Harun sözünü ise Hz. Ali\'ye söyledi. Bu yakınlık, kalbinizde nasıl duruyor?' },
    { tr: 'Sa\'d b. Ebi Vakkas, Menzile\'yi Hz. Ali\'nin faziletleri arasında saydı. Bu sözü duyunca ona olan sevginiz nereye uzanıyor?' },
  ],
  summary: { tr: 'Tebük\'te Peygamber, Hz. Ali\'ye "Harun Musa\'ya nasılsa, sen de bana öylesin" dedi. "Benden sonra peygamber yoktur" diye de ekledi. Bu söz Sünni kaynaklarında da geçer (Buhari, Sahih, no. 3706; Müslim, Sahih, no. 2404). Şia bunu, Hz. Ali\'nin Peygamber\'in kardeşi, veziri ve halifesi olduğunun delili sayar.' },
};

import type { HistEvent } from '../types';

// Kaynak: research/01-gadir-raziyye-usame.md (bölüm 2.3), research/05 (kaynak rehberi) ve gadir.ts/sebb.ts'teki doğrulamalar.
// status 'verified' = metin/numara okundu; 'check' = yayın öncesi birincil kaynaktan kontrol edilmeli.
export const menzile: HistEvent = {
  id: 'menzile',
  date: { tr: 'Tebük Seferi, Hicretin 9. yılı (630)', en: 'The Tabuk expedition, 9 AH (630)' },
  title: { tr: 'Hadis-i Menzile: Tebük\'te "Harun Musa\'ya nasılsa sen de bana öylesin"', en: 'The Hadith of the Position: at Tabuk, "as Aaron was to Moses"' },
  hook: { tr: 'Peygamber Tebük\'e giderken Hz. Ali\'yi Medine\'de bıraktı; ardından ona hangi sözü söyledi ve bu söz ne anlama geliyor?', en: 'The Prophet left Ali in Medina when he marched to Tabuk. What did he say to him, and what does it mean?' },
  scenes: [
    {
      by: 'both',
      text: { tr: 'Hicretin 9. yılında Bizans\'ın Arap sınırında asker topladığı haberi Medine\'ye ulaştı. Yaz sıcağı, kıtlık ve uzun yola rağmen Peygamber Tebük seferine çıkmaya karar verdi; ordu bu zorluk yüzünden "Zorluk Ordusu" diye anıldı.' },
      art: { bg: 'dune-day', props: ['sun', 'tents'], actors: [{ kind: 'crowd', x: 30, scale: 8 }, { kind: 'prophet', x: 68, label: { tr: 'Hz. Peygamber' } }] },
    },
    {
      by: 'both',
      text: { tr: 'Peygamber, Medine\'yi ve ailesini korumak üzere Hz. Ali\'yi yerine vekil bıraktı. Buhari 4416\'da Sa\'d b. Ebi Vakkas bunu anlatır: Peygamber Tebük\'e çıkarken Hz. Ali\'yi Medine\'de bıraktı.' },
      art: { bg: 'city', props: ['sun'], actors: [{ kind: 'prophet', x: 40, label: { tr: 'Hz. Peygamber' } }, { kind: 'ali', x: 62, label: { tr: 'Hz. Ali' } }] },
    },
    {
      by: 'both',
      text: { tr: 'Siyer kaynaklarında, Medine\'de bırakılan Hz. Ali için münafıkların "Onu yük gördüğü ve ondan kurtulmak istediği için bıraktı" diye dedikodu çıkardığı anlatılır. Hz. Ali silahını kuşanıp Peygamber\'in peşinden yola çıktı ve ordu konaklarken ona yetişti. Bu ayrıntının numarası ve sıhhati kaynaklardan ayrıca kontrol edilmelidir.' },
      art: { bg: 'dune-dusk', actors: [{ kind: 'ali', x: 40, label: { tr: 'Hz. Ali' } }, { kind: 'crowd', x: 72, scale: 5 }] },
    },
    {
      by: 'both',
      text: { tr: 'Hz. Ali "Ey Allah\'ın Resulü, beni çocuklar ve kadınlarla mı bırakıyorsun?" diye sorunca Peygamber şöyle buyurdu: "Harun\'un Musa nezdindeki yeri gibi benim nezdimde yerinin olmasına razı değil misin? Ancak benden sonra peygamber yoktur." Bu söz Buhari 3706 ve 4416\'da, Müslim 2404\'te geçer.' },
      art: { bg: 'dune-dusk', actors: [{ kind: 'prophet', x: 42, label: { tr: 'Hz. Peygamber' } }, { kind: 'ali', x: 64, label: { tr: 'Hz. Ali' } }] },
    },
    {
      by: 'both',
      text: { tr: 'Kur\'an\'da Hz. Musa Tur\'a giderken kardeşi Harun\'a "Kavmim içinde benim yerime geç, ıslah et" der (A\'râf 7:142). Hz. Musa ayrıca Allah\'tan "ailemden bana bir yardımcı (vezir) ver" diye dilemişti (Tâhâ 20:29). Menzile hadisi, Harun\'un Musa nezdindeki bu konumunu Hz. Ali\'nin Peygamber nezdindeki konumuna benzetir.' },
      art: { bg: 'river', props: ['palms'], actors: [{ kind: 'crowd', x: 40, scale: 4 }] },
    },
    {
      by: 'shia',
      text: { tr: 'Şii kaynaklarında bu söz, Hz. Ali\'nin Peygamber\'in kardeşi, veziri ve halifesi olduğunun açık delili sayılır. "Ancak benden sonra peygamber yoktur" kaydı, Harun\'a ait nübüvvet dışındaki bütün makamların Hz. Ali\'ye verildiği anlamında anlaşılır. Şii kaynaklarında hadisin çok sayıda yolla geldiği belirtilir.' },
      art: { bg: 'night', props: ['stars', 'scroll'], actors: [{ kind: 'ali', x: 50, label: { tr: 'Hz. Ali' } }] },
    },
    {
      by: 'both',
      text: { tr: 'Hadis, Müslim 2404\'te Sa\'d b. Ebi Vakkas\'ın anlattığı üç sözün biridir. Muaviye Sa\'d\'a Hz. Ali\'ye neden sövmediğini sorunca Sa\'d, Peygamber\'in Hz. Ali hakkındaki üç sözünü sayar: Menzile, Hayber sancağı ve Mübahele. İbn Mace 121\'de de aynı üç söz geçer.' },
      art: { bg: 'interior', props: ['scroll'], actors: [{ kind: 'crowd', x: 36, scale: 3 }] },
    },
    {
      by: 'both',
      text: { tr: 'Tebük\'te savaş olmadı; Bizans güçleri geri çekildi. Peygamber bölge halklarıyla (Eyle, Cerbâ ve Ezruh) anlaşmalar yaptı ve Medine\'ye döndü. Hz. Ali Medine\'de vekil olarak kalmış, Peygamber\'e ordu yolunda yetiştiğinde bu sözü duymuştur.' },
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
      sunni: { tr: 'Hz. Ali\'nin vekilliği Tebük seferi boyunca geçici bir görevdir; Peygamber başka seferlerde de Medine\'de başkalarını vekil bırakmıştır. Hadis büyük bir fazilettir, ancak Harun Musa\'dan önce vefat ettiği için hilafet delili sayılmaz.' },
      shia: { tr: 'Peygamber vekilliği Harun benzetmesiyle ilan etmiştir; Harun Musa\'nın kardeşi, veziri ve halifesidir. "Nübüvvet hariç" kaydı, geriye kalan bütün makamları kapsar.' },
    },
    {
      title: { tr: 'Söz Tebük\'e mi özel, genel mi?' },
      sunni: { tr: 'Söz belirli bir olay üzerine, Hz. Ali\'yi üzüntüden kurtarmak için söylenmiştir; kapsamı o olayla sınırlıdır.' },
      shia: { tr: 'Peygamber "menzile" (konum) kelimesini genel bir ifade olarak kullanmıştır; özel bir olayla sınırlanması sözün lafzına aykırıdır.' },
    },
  ],
  questions: [
    { tr: 'Peygamber sözü "Ancak benden sonra peygamber yoktur" diye bitirmişse, Harun\'un nübüvvet dışındaki makamlarının Hz. Ali\'ye verilmesi sizce nasıl anlaşılmalıdır?' },
    { tr: 'Peygamber başka seferlerde başkalarını da vekil bıraktığına göre, bu söz neden yalnız Hz. Ali için ayrıca söylenmiştir sizce?' },
    { tr: 'Müslim 2404\'te Sa\'d üç sözü sayarken Menzile\'yi de anıyorsa, bu sözün önemi hakkında ne söylenebilir?' },
  ],
  summary: { tr: 'Menzile hadisi Buhari 3706 ve Müslim 2404 gibi Sünni kaynaklarında, Şii kaynaklarında olduğu gibi yer alır. Şii kaynaklarında Hz. Ali\'nin Peygamber\'in kardeşi, veziri ve halifesi olduğunun delili olarak anlatılır.' },
};

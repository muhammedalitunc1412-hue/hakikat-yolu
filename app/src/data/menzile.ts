import type { HistEvent } from '../types';

// Kaynak: research/01-gadir-raziyye-usame.md (bölüm 2.3), research/05 (kaynak rehberi) ve gadir.ts/sebb.ts'teki doğrulamalar.
// status 'verified' = metin/numara okundu; 'check' = yayın öncesi birincil kaynaktan kontrol edilmeli.
export const menzile: HistEvent = {
  id: 'menzile',
  date: { tr: 'Tebük Seferi, Hicretin 9. yılı (630)', en: 'The Tabuk expedition, 9 AH (630)' },
  title: { tr: 'Hadis-i Menzile: Tebük\'te "Harun Musa\'ya nasılsa sen de bana öylesin"', en: 'The Hadith of the Position: at Tabuk, "as Aaron was to Moses"' },
  hook: { tr: 'Tebük\'te Peygamber, Hz. Ali\'ye "Harun Musa\'ya nasılsa sen de bana öylesin" dedi.', en: 'The Prophet left Hz. Ali in Medina when he marched to Tabuk. What did he say to him, and what does it mean?' },
  scenes: [
    {
      by: 'both',
      text: { tr: 'Hicretin dokuzuncu yılında **Hz. Peygamber**, kuzeye doğru **Tebük** seferine hazırlandı. Sıcak, kıtlık ve yolun uzunluğu yüzünden hazırlıklar güçlükle yürüdü. Bu nedenle sefere katılan birlik Zorluk Ordusu adıyla anıldı. Ordu yola çıkarken Peygamber, **Hz. Ali**\'ye Medine\'de kalma görevi verdi.' },
      art: { bg: 'dune-day', props: ['sun', 'tents'], actors: [{ kind: 'crowd', x: 30, scale: 8 }, { kind: 'prophet', x: 68, label: { tr: 'Hz. Peygamber' } }] },
    },
    {
      by: 'both',
      text: { tr: 'Ordu Tebük\'e hazırlanırken **Hz. Peygamber**, Medine\'de kalma görevini **Hz. Ali**\'ye verdi. Bu görev, Peygamber seferdeyken geride kalanları ve ailesini gözetmeyi gerektiriyordu. Ordu şehirden uzaklaştığında Hz. Ali, Peygamber\'in kendisine emanet ettiği sorumluluğu üstlendi.' },
      art: { bg: 'city', props: ['sun'], actors: [{ kind: 'prophet', x: 40, label: { tr: 'Hz. Peygamber' } }, { kind: 'ali', x: 62, label: { tr: 'Hz. Ali' } }] },
    },
    {
      by: 'both',
      text: { tr: 'Ordu yola çıktıktan sonra Medine\'de **Hz. Ali**\'nin neden geride bırakıldığı konuşulmaya başladı. Bazıları Peygamber\'in onu sefere götürmek istemediğini ileri sürdü. Bu sözler Hz. Ali\'ye ulaşınca atına binip orduya yetişti. Geride kalmasının sebebini doğrudan Peygamber\'den öğrenmek istiyordu.' },
      art: { bg: 'dune-dusk', actors: [{ kind: 'ali', x: 40, label: { tr: 'Hz. Ali' } }, { kind: 'crowd', x: 72, scale: 5 }] },
    },
    {
      by: 'both',
      text: { tr: '**Hz. Ali**, orduya yetiştiğinde **Hz. Peygamber**\'e kendisini kadınların ve çocukların yanında mı bırakacağını sordu. Peygamber, Hz. Ali\'nin kendisine yakınlığını **Hz. Hârûn**\'un **Hz. Mûsâ**\'ya yakınlığıyla anlattı. Ardından kendisinden sonra peygamber gelmeyeceğini belirtti. Hz. Ali, Medine\'deki görevinin ne anlama geldiğini bu cevapla öğrendi.' },
      art: { bg: 'dune-dusk', actors: [{ kind: 'prophet', x: 42, label: { tr: 'Hz. Peygamber' } }, { kind: 'ali', x: 64, label: { tr: 'Hz. Ali' } }] },
    },
    {
      by: 'both',
      text: { tr: 'Bu benzetmenin arka planında Kur\'an\'daki **Hz. Mûsâ** ve **Hz. Hârûn** anlatısı vardır. Mûsâ, Allah\'tan ailesinden bir yardımcı ister (Tâhâ 20:29–32). Tûr\'a giderken de Hârûn\'a halkının arasında kendi yerine geçmesini söyler (A\'râf 7:142). Tebük yolunda söylenen ve **Menzile Hadisi** diye anılan söz, Hz. Ali\'nin üstlendiği görevi bu örnekle açıklar.' },
      art: { bg: 'river', props: ['palms'], actors: [{ kind: 'crowd', x: 40, scale: 4 }] },
    },
    {
      by: 'shia',
      text: { tr: 'Menzile Hadisi\'nde Peygamber, **Hz. Ali** ile arasındaki yakınlığı anlatırken peygamberliği açıkça ayrı tutar. Hârûn örneğinde öne çıkan bağ, kardeşlik, yardım ve vekâlettir. Bu benzetme, Hz. Ali\'nin daha sonraki önderliğini anlamlandıranların da başvurduğu sözlerden biri olmuştur.' },
      art: { bg: 'night', props: ['stars', 'scroll'], actors: [{ kind: 'ali', x: 50, label: { tr: 'Hz. Ali' } }] },
    },
    {
      by: 'both',
      text: { tr: 'Yıllar sonra **Muaviye**, **Sa\'d b. Ebû Vakkās**\'a Hz. Ali\'ye neden sövmediğini sordu. Sa\'d, Hz. Peygamber\'den duyduğu üç hatırayı andı. Bunlar Tebük yolundaki Hârûn benzetmesi, Hayber\'de sancağın Hz. Ali\'ye verilmesi ve Mübahele günü Peygamber\'in onu yanına almasıydı. Sa\'d\'ın cevabında, bir kişiyi kötülemesi istenirken Peygamber\'in o kişi için söylediği sözler yeniden duyuldu.' },
      art: { bg: 'interior', props: ['scroll'], actors: [{ kind: 'crowd', x: 36, scale: 3 }] },
    },
    {
      by: 'both',
      text: { tr: 'Tebük\'te savaş olmadı. **Hz. Peygamber**, bölgede anlaşmalar yaptıktan sonra Medine\'ye döndü. Bu seferden geriye kalan en çok anılan hatıralardan biri, savaş meydanından değil, ordunun yola çıktığı günlerden geldi. **Hz. Ali**\'nin Medine\'de kalma görevine Peygamber\'in verdiği anlam, Hârûn benzetmesiyle hatırlandı.' },
      art: { bg: 'dawn', props: ['sun'], actors: [{ kind: 'prophet', x: 44, label: { tr: 'Hz. Peygamber' } }, { kind: 'crowd', x: 72, scale: 6 }] },
    },
  ],
  sunni: [
    { book: 'Buhari, Sahih', ref: 'No. 3706 (Menâkıb; Sa\'d b. Ebi Vakkas)', says: { tr: '"Harun Musa\'ya nasıl ise sen bana öylesin" hadisi.' }, grade: { tr: 'Sahih' }, url: 'https://hadithunlocked.com/bukhari:3706', status: 'verified' },
    { book: 'Buhari, Sahih', ref: 'No. 4416 (Megāzī; Tebük gazvesi; numara kontrol edilecek)', says: { tr: 'Peygamber Tebük\'e çıkarken Hz. Ali\'yi Medine\'de vekil bırakır; Menzile sözü.' }, grade: { tr: 'Sahih' }, status: 'check' },
    { book: 'Müslim, Sahih', ref: 'No. 2404 (Fezâilü\'s-sahâbe; sitede 2404a-c)', says: { tr: 'Menzile hadisi "benden sonra nebi yok" kaydıyla (Tebük); Muaviye-Sa\'d konuşması.' }, grade: { tr: 'Sahih' }, url: 'https://hadithunlocked.com/muslim:2404a', status: 'verified' },
    { book: 'İbn Mace, Sünen', ref: 'No. 121 (Fazl-ı Hz. Ali)', says: { tr: 'Sa\'d b. Ebi Vakkas, Muaviye\'ye üç sözü hatırlatır: mevlâ, Menzile, Hayber sancağı.' }, grade: { tr: 'Albani: sahih' }, url: 'https://hadithunlocked.com/ibnmajah:121', status: 'verified' },
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

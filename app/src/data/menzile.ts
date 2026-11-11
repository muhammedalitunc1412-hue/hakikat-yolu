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
      text: { tr: 'Hicretin dokuzuncu yılında **Hz. Peygamber**, kuzeydeki **Tebük**\'e doğru büyük bir sefer hazırladı. Yaz sıcağı kavuruyordu, yol çok uzundu ve erzak kıttı. Bu yüzden bu orduya Zorluk Ordusu dendi. Medine\'de hazırlıklar sürerken Peygamber, **Hz. Ali**\'yi yanına çağırdı ve ondan bu seferde şehirde kalmasını istedi. Hz. Ali\'nin bütün savaşlarda Peygamber\'in yanında olduğunu bilenler için bu şaşırtıcı bir karardı.' },
      image: 'menzile-1',
      art: { bg: 'dune-day', props: ['sun', 'tents'], actors: [{ kind: 'crowd', x: 30, scale: 8 }, { kind: 'prophet', x: 68, label: { tr: 'Hz. Peygamber' } }] },
    },
    {
      by: 'both',
      text: { tr: 'Ordu yola çıkmadan önce **Hz. Peygamber**, Medine\'yi ve kendi ailesini **Hz. Ali**\'ye emanet etti. Şehirde kadınlar, çocuklar ve yaşlılar kalıyordu. Peygamber uzaktayken şehri ve ailesini koruyacak kişinin, en çok güvendiği biri olması gerekiyordu. Hz. Ali, ordunun peşinden gitmedi ve emri kabul ederek Medine\'de kaldı. Geride kalmak, ona duyulan güvenin bir işaretiydi. Peygamber, en değerli emanetini en güvendiği kişiye bırakmıştı.' },
      image: 'menzile-2',
      art: { bg: 'city', props: ['sun'], actors: [{ kind: 'prophet', x: 40, label: { tr: 'Hz. Peygamber' } }, { kind: 'ali', x: 62, label: { tr: 'Hz. Ali' } }] },
    },
    {
      by: 'both',
      text: { tr: 'Ordu Medine\'den uzaklaşınca şehirde fısıltılar başladı. Bazıları, Peygamber\'in **Hz. Ali**\'yi sefere layık görmediğini, onu bir yük gibi geride bıraktığını söylemeye başladılar. Bu sözler Hz. Ali\'nin kulağına kadar geldi ve içini bir sızı kapladı. Bu dedikoduların gerçek olmadığını biliyordu, ama sebebini Peygamber\'in kendi ağzından duymak istedi. Atına bindi ve ordunun bıraktığı izleri takip ederek çölün sıcağında yola koyuldu.' },
      image: 'menzile-3',
      art: { bg: 'dune-dusk', actors: [{ kind: 'ali', x: 40, label: { tr: 'Hz. Ali' } }, { kind: 'crowd', x: 72, scale: 5 }] },
    },
    {
      by: 'both',
      text: { tr: '**Hz. Ali**, Medine\'den biraz uzaklaşmış olan orduya yetişti ve **Hz. Peygamber**\'in yanına vardı. Sesinde bir sitem vardı: "Ya Resulallah, beni kadınların ve çocukların yanında mı bırakıyorsun?" Peygamber onu azarlamadı. Sevgiyle ona baktı ve şöyle dedi: "Harun\'un Musa\'nın yanındaki yeri neyse, senin de benim yanımdaki yerin odur. Ancak benden sonra peygamber yoktur. Buna razı değil misin?" Bu söz Buhari ve Müslim\'de de geçer. Hz. Ali\'nin yüzündeki gölge kayboldu. Peygamber onu bir kenara itmemiş, kendi yanında Hz. **Hârûn**\'un Hz. **Mûsâ**\'nın yanındaki yerine koymuştu.' },
      image: 'menzile-4',
      art: { bg: 'dune-dusk', actors: [{ kind: 'prophet', x: 42, label: { tr: 'Hz. Peygamber' } }, { kind: 'ali', x: 64, label: { tr: 'Hz. Ali' } }] },
    },
    {
      text: { tr: '**Hz. Ali** bu sözü alınca atını çevirip Medine\'ye döndü. Yüzü ve elbisesi hâlâ yolun tozuyla kaplıydı, ama içindeki sızı dinmişti. Şehre girdiğinde dedikodular hâlâ sürüyordu. Ama artık o sözlerin Hz. Ali için bir önemi yoktu. Peygamber\'in kendisi, onun yerini Hz. Musa\'nın kardeşi Hz. Harun\'un yerine benzetmişti. Medine\'de kalan aileleri gözetmek, şehrin güvenliğini sağlamak ve Peygamber\'in evini korumak, şimdi Hz. Ali\'nin gözünde bambaşka bir anlam taşıyordu. Ordu Tebük\'e doğru ilerlerken, Hz. Ali Medine\'de Peygamber\'in vekili olarak görevine devam etti.' },
      image: 'menzile-2',
      art: { bg: 'city', props: ['sun'], actors: [{ kind: 'ali', x: 50, label: { tr: 'Hz. Ali' } }] },
      by: 'both',
    },
    {
      by: 'both',
      text: { tr: 'Bu benzetmenin kökü Kur\'an\'dadır. Tâhâ Suresi\'nin 29-32. ayetlerinde Hz. Musa, Allah\'tan ailesinden bir yardımcı ister: "Bana ailemden bir vezir ver, kardeşim Harun\'u. Onunla gücümü artır ve onu işime ortak et." A\'râf Suresi\'nin 142. ayetinde ise Hz. Musa Tûr Dağı\'na giderken Hz. Harun\'a, "Kavmimin içinde benim yerime geç" der. Tebük yolunda söylenen bu söze **Menzile Hadisi** denir. Menzile, yer ve konum demektir. Peygamber, Hz. Ali\'nin kendi yanındaki yerini anlatmak için Kur\'an\'daki bu iki örneği seçmişti. Hz. Harun, Hz. Musa\'nın kardeşi, yardımcısı ve yokluğunda vekiliydi.' },
      image: 'menzile-5',
      art: { bg: 'river', props: ['palms'], actors: [{ kind: 'crowd', x: 40, scale: 4 }] },
    },
    {
      by: 'shia',
      text: { tr: 'Menzile Hadisi\'nde peygamberlik açıkça ayrılır, çünkü Peygamber\'den sonra başka bir peygamber gelmeyecektir. Ama geriye kalan bağlar çok büyüktür. Hz. Harun, Hz. Musa\'nın kardeşi, yardımcısı ve vekiliydi. Peygamber de **Hz. Ali**\'yi bu bağlarla kendisine bağladı. Şii okuyuşuna göre bu söz, Hz. Ali\'nin Peygamber\'den sonra ümmetin önderi olacağının açık bir işaretidir. Çünkü Hz. Harun, Hz. Musa yokken halkın başında duruyordu. Birkaç ay sonra Gadir Hum\'da Peygamber, bu yakınlığı binlerce hacının önünde, Hz. Ali\'nin elini kaldırarak ilan edecekti.' },
      image: 'menzile-6',
      art: { bg: 'night', props: ['stars', 'scroll'], actors: [{ kind: 'ali', x: 50, label: { tr: 'Hz. Ali' } }] },
    },
    {
      by: 'both',
      text: { tr: 'Yıllar sonra **Muaviye**, sahabe **Sa\'d b. Ebû Vakkās**\'a neden Hz. Ali\'ye sövmediğini sordu. O günlerde Emevi minberlerinde Hz. Ali\'ye lanet okunması isteniyordu. Sa\'d, Peygamber\'den duyduğu üç hatırayı saydı. Birincisi, Tebük yolundaki Harun benzetmesiydi. İkincisi, Hayber\'de sancağın Hz. Ali\'ye verilmesiydi. Üçüncüsü ise Mübahele günü Peygamber\'in Hz. Ali\'yi ve ailesini yanına almasıydı. Muaviye\'nin istediği lanet, Peygamber\'in Hz. Ali için söylediği sözler karşısında cevapsız kaldı.' },
      image: 'menzile-7',
      art: { bg: 'interior', props: ['scroll'], actors: [{ kind: 'crowd', x: 36, scale: 3 }] },
    },
    {
      by: 'both',
      text: { tr: 'Tebük\'te kılıç çekilmedi. **Hz. Peygamber** bölgedeki kabilelerle anlaşmalar yaptıktan sonra ordusuyla Medine\'ye döndü. Şehirde bıraktığı emanet, **Hz. Ali**\'nin gözetiminde korunmuştu. Seferin hafızalarda kalan en önemli olayı bir savaş değil, Peygamber\'in Medine\'de bıraktığı kardeşine söylediği o cümle oldu. Bu söz nesilden nesile aktarıldı ve Hz. Ali\'nin yerini göstermek için en çok anılan hadislerden biri haline geldi.' },
      image: 'menzile-8',
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

import type { HistEvent } from '../types';

// Kaynak: research/01-gadir-raziyye-usame.md (bölüm 2.3) ve bu oturumdaki doğrulamalar.
// status 'verified' = metin/numara okundu; 'check' = yayın öncesi birincil kaynaktan kontrol edilmeli.
export const ehlibeyt: HistEvent = {
  id: 'ehlibeyt',
  date: { tr: 'Peygamber dönemi ve sonrası', en: 'The Prophet\'s era and after' },
  title: { tr: 'Mübahele Olayı ve Ehl-i Beyt\'in emaneti', en: 'The Mubahala and the legacy of the Ahl al-Bayt' },
  hook: { tr: 'Necran\'ın karşısına yalnız dört canla çıkan Hz. Peygamber (s.a.v.), geride hangi iki emaneti ve hangi on iki ismi bıraktı?', en: 'Whom did the Prophet mean by "my family", and why does the number twelve matter?' },
  scenes: [
    {
      by: 'both',
      text: { tr: 'Necran Hristiyanlarıyla tartışma sürerken Âl-i İmrân 61. ayet indi: «Oğullarımızı ve oğullarınızı, kadınlarımızı ve kadınlarınızı, kendimizi ve kendinizi çağıralım.» Hz. Peygamber (s.a.v.) bu çağrıya Hz. Ali, Hz. Fatıma, Hz. Hasan ve Hz. Hüseyin\'i yanında götürdü. Müslim 2404d\'de Sa\'d b. Ebî Vakkâs, ayet inince Peygamber\'in onları çağırıp «Allah\'ım, bunlar ehlimdir» dediğini anlatır. Aynı dörtlü, Taberî ve Râzî gibi Sünni tefsirlerde de anılır. Necranlılar bu manzara karşısında lanetleşmekten çekinip anlaşmayı kabul etti.' },
      art: { bg: 'dune-day', props: ['sun', 'tents'], actors: [{ kind: 'prophet', x: 44, label: { tr: 'Hz. Peygamber' } }, { kind: 'ali', x: 58, label: { tr: 'Hz. Ali' } }, { kind: 'fatima', x: 70, label: { tr: 'Hz. Fatıma' } }, { kind: 'hasan', x: 80, scale: 0.7, label: { tr: 'Hz. Hasan' } }, { kind: 'husayn', x: 88, scale: 0.65, label: { tr: 'Hz. Hüseyin' } }] },
    },
    {
      by: 'shia',
      text: { tr: 'Ayetteki «kendimiz» sözü, Ca\'ferî okumada Hz. Ali\'nin (a.s.) adıdır. Hz. Peygamber mübaheleye kendi nefsi olarak onu getirdi. Bu, Ali\'nin ona en yakın can olduğunun açık bir delilidir. Dörtlünün meydana çıkarılması, birçok Sünni tefsirde de eşsiz bir fazilet diye durur. Hilafet hükmü o ayetten ayrıca çıkarılır; fazilet ise iki yolun da metnindedir.' },
      art: { bg: 'dune-day', props: ['sun'], actors: [{ kind: 'prophet', x: 44, label: { tr: 'Hz. Peygamber' } }, { kind: 'ali', x: 58, label: { tr: 'Hz. Ali' } }] },
    },
    {
      by: 'both',
      text: { tr: 'Veda Haccı dönüşünde, Hum suyu başında Hz. Peygamber iki ağır emanet bıraktığını söyledi: Allah\'ın Kitabı ve itreti, yani Ehl-i Beyt. «Ehl-i Beytim hakkında size Allah\'ı hatırlatırım» dedi. Müslim 2408 ve Tirmizi 3788 bunu aktarır. Tirmizi\'nin lafzında ikisi, Havz\'da ona varıncaya dek ayrılmaz. Ca\'ferî yolda bu, Kur\'an\'la birlikte Ehl-i Beyt\'in de dinde ölçü olduğunun sahih delilidir. Zeyd b. Erkam\'ın kapsam sözü aynı Müslim rivayetindedir; o, hanımları değil Ali, Akîl, Ca\'fer ve Abbas evlerini anar.' },
      art: { bg: 'dune-dusk', props: ['scroll'], actors: [{ kind: 'crowd', x: 28, scale: 8 }, { kind: 'prophet', x: 66, label: { tr: 'Hz. Peygamber' } }, { kind: 'ali', x: 82, label: { tr: 'Hz. Ali' } }] },
    },
    {
      by: 'both',
      text: { tr: 'Bir başka söz, gönlü Nuh\'un gemisine çağırır: «Ehl-i Beytimin örneği Nuh\'un gemisi gibidir. Ona binen kurtulur, geri kalan boğulur.» Hâkim bu Safine haberini Ebu Zer\'den el-Müstedrek\'te aktarır ve Müslim\'in şartına göre sahih der. Şii kitaplar da çok sayıda yolla getirir. Zincirin gücü hadisçiler arasında tartışılmıştır. Mana, Sakaleyn\'le aynı kapıya çıkar: kurtuluş, Kitap\'la birlikte Ehl-i Beyt\'e tutunmaktadır.' },
      art: { bg: 'river', props: ['palms'], actors: [{ kind: 'crowd', x: 40, scale: 5 }] },
    },
    {
      by: 'both',
      text: { tr: 'Câbir b. Semüre anlatır: Hz. Peygamber «Bu iş, on iki halife gelinceye kadar sürecek» dedi. Ardından bir şey daha söyledi, Câbir duyamadı. Babası, «Hepsi Kureyş\'tendir» dediğini bildirdi. Buhari 7222 «on iki emir», Müslim 1821 «on iki halife» der. Sayı, Ca\'ferî kitaplarda olduğu gibi iki sahihte de vardır. İsimler ise bu iki rivayette sayılmaz.' },
      art: { bg: 'city', props: ['sun', 'minbar'], actors: [{ kind: 'prophet', x: 60, label: { tr: 'Hz. Peygamber' } }, { kind: 'crowd', x: 28, scale: 6 }] },
    },
    {
      by: 'shia',
      text: { tr: 'Ca\'ferî yolda bu on iki, Allah\'ın nass ile belirlediği On İki İmam\'dır. Kuleynî\'nin el-Kâfî\'sinde, Numânî\'nin el-Gaybe\'sinde ve Sadûk\'un Kemâlüddîn\'inde isimler de anılır. Câbir\'in, Hz. Fatıma\'nın elinde gördüğü ve imamların adlarının yazılı olduğu levha rivayeti bunlardandır. Levhanın senedini Berkî gibi bazı Şii âlimler de eleştirmiştir. Sayı sahihtedir; isim listesi Şii rivayet külliyatına dayanır.' },
      art: { bg: 'night', props: ['stars', 'scroll'], actors: [{ kind: 'fatima', x: 50, label: { tr: 'Hz. Fatıma' } }] },
    },
    {
      by: 'shia',
      text: { tr: 'Ca\'ferî inançta imamet, seçimle değil nass ile gelir. İmam ismet sahibidir, ilimde ümmetin önündedir ve yeryüzü hüccetsiz kalmaz. Her imam kendinden sonrakini bildirir. Bu, bir soy övüncü değil, hidayetin kopmayan ipidir.' },
      art: { bg: 'interior', props: ['scroll'], actors: [{ kind: 'ali', x: 42, label: { tr: 'Hz. Ali' } }, { kind: 'hasan', x: 62, scale: 0.8, label: { tr: 'Hz. Hasan' } }, { kind: 'husayn', x: 74, scale: 0.75, label: { tr: 'Hz. Hüseyin' } }] },
    },
    {
      by: 'shia',
      text: { tr: 'On İki İmam sırasıyla şunlardır: Hz. Ali, Hz. Hasan, Hz. Hüseyin, Ali Zeynelâbidîn, Muhammed el-Bâkır, Ca\'fer es-Sâdık, Mûsâ el-Kâzım, Ali er-Rızâ, Muhammed el-Cevâd, Ali el-Hâdî, Hasan el-Askerî ve Muhammed el-Mehdî. Ca\'ferî inanca göre on ikinci imam gizlenmiştir. Zamanı gelince adaletle ortaya çıkacaktır. Gaybet, Şii itikadıdır; Mehdi\'nin geleceğine dair bazı Sünni rivayetler de vardır, anlayışları ayrıdır.' },
      art: { bg: 'dawn', props: ['sun'], actors: [{ kind: 'ali', x: 30, label: { tr: 'Hz. Ali' } }, { kind: 'hasan', x: 46, scale: 0.8, label: { tr: 'Hz. Hasan' } }, { kind: 'husayn', x: 60, scale: 0.8, label: { tr: 'Hz. Hüseyin' } }] },
    },
  ],
  sunni: [
    { book: 'Müslim, Sahih', ref: 'No. 2404d (Sa\'d b. Ebî Vakkâs; Muaviye konuşmasının mübahele kısmı)', says: { tr: 'Mübahele ayeti inince Peygamber Ali, Fatıma, Hasan ve Hüseyin\'i çağırıp "Allah\'ım, bunlar ehlimdir" der. Aynı hadiste Menzile ve Hayber sancağı da sayılır.' }, grade: { tr: 'Sahih' }, url: 'https://sunnah.com/muslim:2404d', status: 'verified' },
    { book: 'Müslim, Sahih', ref: 'No. 2408a (Zeyd b. Erkam)', says: { tr: 'Hum suyu başında iki ağır emanet: Allah\'ın Kitabı ve Ehl-i Beyt; kapsam tartışması.' }, grade: { tr: 'Sahih' }, url: 'https://hadithunlocked.com/muslim:2408a', status: 'verified' },
    { book: 'Tirmizi, el-Câmi\'', ref: 'No. 3788', says: { tr: 'Kitap ve itret Havz\'da Peygamber\'e varıncaya dek ayrılmaz.' }, grade: { tr: 'Tirmizi: hasen garib; Albani: sahih' }, url: 'https://hadithunlocked.com/tirmidhi:3788', status: 'verified' },
    { book: 'Hâkim, el-Müstedrek', ref: 'Ebu Zer\'den Safine hadisi (cilt ve sayfa baskıya göre değişir; bir ikincil aktarım 2/273 der. Eski "cilt 3, s. 151" kaydı bu çalışmada doğrulanamadığı için kaldırıldı)', says: { tr: 'Ehl-i Beyt\'in Nuh\'un gemisi gibi olduğu. Hâkim, Müslim\'in şartına göre sahih der. Zehebî\'nin Telhîs\'teki hükmü bu çalışmada birincil nüshadan okunmadı.' }, grade: { tr: 'Hâkim: sahih; bazı muhaddisler zinciri zayıf sayar' }, url: 'https://en.wikishia.net/view/Hadith_of_Safina', status: 'check' },
    { book: 'Buhari, Sahih', ref: 'No. 7222 (Ahkâm)', says: { tr: 'Câbir b. Semüre: "On iki emir olacak"; babası "hepsi Kureyş\'tendir" der.' }, grade: { tr: 'Sahih' }, url: 'https://hadithunlocked.com/bukhari:7222', status: 'verified' },
    { book: 'Müslim, Sahih', ref: 'No. 1821a (İmâre)', says: { tr: 'Câbir b. Semüre: "Bu hilafet on iki halife gelinceye kadar sürecek"; hepsi Kureyş\'tendir.' }, grade: { tr: 'Sahih' }, url: 'https://hadithunlocked.com/muslim:1821a', status: 'verified' },
  ],
  shia: [
    { book: 'Kuleynî, el-Kâfî', ref: 'Kitâbü\'l-Hüccet (imamet ve on iki isim bâbları; cilt/sayfa kontrol edilecek)', says: { tr: 'İmametin nass ile olduğu, hüccetin eksik olmayacağı ve Câbir\'in Hz. Fatıma\'da gördüğü levha rivayeti.' }, status: 'check' },
    { book: 'Numânî, el-Gaybe', ref: 'Kitap içinde on iki imam rivayetleri (bâb ve sayfa kontrol edilecek)', says: { tr: 'On iki imamın adlarını bildiren rivayetler ve gaybet.' }, status: 'check' },
    { book: 'Şeyh Saduk, Kemâlüddîn ve Temâmü\'n-Ni\'me', ref: 'On iki imam ve gaybet bâbları (numara kontrol edilecek)', says: { tr: 'Peygamber\'den on iki halife/imam rivayetleri; on ikinci imamın gaybeti.' }, status: 'check' },
    { book: 'WikiShia, Hadith of Safina (ikincil)', ref: 'Hadith al-Safina maddesi', says: { tr: 'Safine hadisinin Şii ve Sünni kaynaklardaki yolları ve Hâkim\'in sıhhat hükmü.' }, url: 'https://en.wikishia.net/view/Hadith_of_Safina', status: 'check' },
    { book: 'WikiShia, Hadith al-Lawh (ikincil)', ref: 'Hadith al-Lawh maddesi', says: { tr: 'Levha hadisinin el-Kâfî, Kemâlüddîn ve Numânî\'nin el-Gaybe\'sindeki geçişi; Berkî\'nin eleştirisi.' }, url: 'https://en.wikishia.net/view/Hadith_of_Lawh', status: 'check' },
  ],
  disputes: [
    {
      title: { tr: 'Mübahelede "kendimiz" kimdir?' },
      sunni: { tr: 'Dörtlünün mübaheleye çıkarılması büyük bir fazilettir; ancak ayet halifelik konusunda hüküm vermez.' },
      shia: { tr: '"Enfüsenâ" (kendimiz) sözü Hz. Ali\'yi Peygamber\'in nefsi yapar; bu, ona verilen eşsiz konumun delilidir.' },
    },
    {
      title: { tr: 'Sakaleyn: "itretî" mi "sünnetî" mi?' },
      sunni: { tr: '"Kitabullah ve sünnetim" lafzı da rivayet edilir; Ehl-i Beyt\'e saygı ve sevgi anlamındadır, imametin delili değildir.' },
      shia: { tr: '"Kitap ve itret" lafzı Müslim ve Tirmizi\'de sahihtir; Kur\'an\'la birlikte ayrılmamaları, Ehl-i Beyt\'in dinde ölçü olduğunu gösterir.' },
    },
    {
      title: { tr: 'Safine hadisinin sıhhati' },
      sunni: { tr: 'Hâkim sahih dese de bazı muhaddisler zincirlerini zayıf bulur.' },
      shia: { tr: 'Çok sayıda yolla geldiği için mana bakımından kesin rivayet sayılır.' },
    },
    {
      title: { tr: '"On iki halife" kimdir?' },
      sunni: { tr: 'Hadis isimleri belirtmez; ilk halifeler, Emevi halifeleri veya gelecekteki adil yöneticiler gibi farklı yorumlar yapılmıştır. İsimlerle on iki imam eşleşmesi Sünni kaynaklarda yoktur.' },
      shia: { tr: 'Sayı On İki İmam\'a uyar; el-Kâfî, el-Gaybe ve Kemâlüddîn\'deki rivayetler isimleri de bildirir. Levha rivayetini Berkî gibi bazı Şii âlimler de metin ve senet bakımından eleştirmiştir.' },
    },
  ],
  questions: [
    { tr: 'Peygamber Necran heyetinin karşısına yanında yalnızca Hz. Ali, Hz. Fatıma, Hz. Hasan ve Hz. Hüseyin\'le çıktığına göre, bu seçim size ne söylüyor?' },
    { tr: 'Peygamber Kitap\'la birlikte Ehl-i Beyt\'i de emanet bıraktıysa, günlük dinî hayatta Ehl-i Beyt\'ten gelen bilgiye ne kadar yer verilmesi gerekir sizce?' },
    { tr: 'Buhari ve Müslim\'de "on iki emir/halife" hadisi varken, Sünni tarih bu sayıyı net olarak karşılayan on iki isim sayabilmiş midir? Şii yorumun isimleri bildirmesi bu soruya cevap sayılır mı sizce?' },
    { tr: 'Safine hadisinin sıhhati tartışmalıysa, bir hadisin güvenilirliğini değerlendirirken zinciri mi, çok yoldan gelmesini mi, yoksa metnin diğer sahih rivayetlerle uyumunu mu esas almak daha doğrudur sizce?' },
  ],
  summary: { tr: 'Mübahele, Sakaleyn ve on iki halife haberleri hem Ca\'ferî kitaplarda hem Müslim, Tirmizi ve Buhari\'de durur. Ca\'ferî yolda bunlar, Hz. Ali ve soyundan gelen On İki İmam\'ın ilahî tayinine delildir. Ortak olan fazilettir; imamet hükmü ise bu metinlerin Şii okunuşudur.' },
};

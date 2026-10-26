import type { HistEvent } from '../types';

// Kaynak: research/01-gadir-raziyye-usame.md (bölüm 2.3) ve bu oturumdaki doğrulamalar.
// status 'verified' = metin/numara okundu; 'check' = yayın öncesi birincil kaynaktan kontrol edilmeli.
export const ehlibeyt: HistEvent = {
  id: 'ehlibeyt',
  date: { tr: 'Peygamber dönemi ve sonrası', en: 'The Prophet\'s era and after' },
  title: { tr: 'Mübahele Olayı ve Ehl-i Beyt\'in emaneti', en: 'The Mubahala and the legacy of the Ahl al-Bayt' },
  hook: { tr: 'Peygamber Necran heyetine kimleri getirdi? Geride hangi iki emaneti bıraktı? "On iki" sayısı neyi gösterir?', en: 'Whom did the Prophet mean by "my family", and why does the number twelve matter?' },
  scenes: [
    {
      by: 'both',
      text: { tr: 'Necran Hristiyanlarıyla konuşma sürerken Âl-i İmrân 3:61 indi: "Bizim oğullarımızı, sizin oğullarınızı, kadınlarımızı, kadınlarınızı, kendimizi ve kendinizi çağıralım." Peygamber mübahele için Hz. Ali, Hz. Fatıma, Hz. Hasan ve Hz. Hüseyin\'i yanına aldı. Bu olay Sünni kaynaklarında da geçmektedir (Müslim, Sahih). Sa\'d b. Ebi Vakkas rivayetinde Peygamber "Allah\'ım, bunlar ehlimdir" der. Tefsirlerde Necranlıların bu manzara karşısında mübaheleden çekinip anlaşmayı kabul ettiği anlatılır.' },
      art: { bg: 'dune-day', props: ['sun', 'tents'], actors: [{ kind: 'prophet', x: 44, label: { tr: 'Hz. Peygamber' } }, { kind: 'ali', x: 58, label: { tr: 'Hz. Ali' } }, { kind: 'fatima', x: 70, label: { tr: 'Hz. Fatıma' } }, { kind: 'hasan', x: 80, scale: 0.7, label: { tr: 'Hz. Hasan' } }, { kind: 'husayn', x: 88, scale: 0.65, label: { tr: 'Hz. Hüseyin' } }] },
    },
    {
      by: 'shia',
      text: { tr: 'Ayetteki "kendimizi" sözü, Şia\'da Hz. Ali\'yi de kapsar. Peygamber mübaheleye kendi nefsi olarak onu getirdi. Bu, onun Peygamber\'e en yakın kişi olduğunun delilidir. Aynı çıkış Sünni kaynaklarında da büyük bir fazilet olarak geçer (Müslim, Sahih).' },
      art: { bg: 'dune-day', props: ['sun'], actors: [{ kind: 'prophet', x: 44, label: { tr: 'Hz. Peygamber' } }, { kind: 'ali', x: 58, label: { tr: 'Hz. Ali' } }] },
    },
    {
      by: 'both',
      text: { tr: 'Veda Haccı dönüşünde, Hum suyu başında Peygamber iki ağır emanet bıraktığını söyledi: Allah\'ın Kitabı ve itreti, yani Ehl-i Beyt. "Ehl-i Beytim hakkında Allah\'ı hatırlatırım" dedi. Bu söz Sünni kaynaklarında da geçmektedir (Müslim, Sahih, no. 2408; Tirmizi, el-Câmi\', no. 3788). Tirmizi rivayetinde ikisi, Havz\'da Peygamber\'e varıncaya dek ayrılmaz. Müslim\'deki rivayette Zeyd b. Erkam\'a Ehl-i Beyt sorulunca, önce hanımların bu kapsama girmediğini söyledi. Zekâtın yasaklandığı Ali, Akîl, Cafer ve Abbas ailelerini andı.' },
      art: { bg: 'dune-dusk', props: ['scroll'], actors: [{ kind: 'crowd', x: 28, scale: 8 }, { kind: 'prophet', x: 66, label: { tr: 'Hz. Peygamber' } }, { kind: 'ali', x: 82, label: { tr: 'Hz. Ali' } }] },
    },
    {
      by: 'both',
      text: { tr: 'Bir başka söz şöyledir: "Ehl-i Beytimin örneği Nuh\'un gemisi gibidir. Ona binen kurtulur, geri kalan boğulur." Buna Safine hadisi denir. Sünni kaynaklarında da geçmektedir (Hâkim, el-Müstedrek). Hâkim bunu Ebu Zer\'den aktarır. Şii kaynakları hadisin çok sayıda yolla geldiğini söyler. Rivayet zincirlerinin sıhhati hadis âlimleri arasında konuşulmuştur.' },
      art: { bg: 'river', props: ['palms'], actors: [{ kind: 'crowd', x: 40, scale: 5 }] },
    },
    {
      by: 'both',
      text: { tr: 'Câbir b. Semüre anlatır. Peygamber "Bu iş (hilafet), içlerinden on iki halife gelinceye kadar sürecek" dedi. Sonra bir şey daha söyledi. Câbir onu duyamadı. Babası "Hepsi Kureyş\'tendir" dediğini bildirdi. Bu sayı Sünni kaynaklarında da geçmektedir (Buhari, Sahih, no. 7222; Müslim, Sahih, no. 1821). Buhari "on iki emir", Müslim "on iki halife" der.' },
      art: { bg: 'city', props: ['sun', 'minbar'], actors: [{ kind: 'prophet', x: 60, label: { tr: 'Hz. Peygamber' } }, { kind: 'crowd', x: 28, scale: 6 }] },
    },
    {
      by: 'shia',
      text: { tr: 'Bu on iki kişi, Şia\'da Allah\'ın belirlediği On İki İmam\'dır. Kuleynî\'nin el-Kâfî\'sinde, Kitâbü\'l-Hüccet bölümünde, bu isimleri anlatan rivayetler vardır. Numânî\'nin el-Gaybe\'sinde ve Şeyh Saduk\'un Kemâlüddîn\'inde de vardır. Câbir\'in Hz. Fatıma\'nın elinde gördüğü levha bunlardandır. Levhada imamların adları yazılıdır.' },
      art: { bg: 'night', props: ['stars', 'scroll'], actors: [{ kind: 'fatima', x: 50, label: { tr: 'Hz. Fatıma' } }] },
    },
    {
      by: 'shia',
      text: { tr: 'Şia\'da imamet, Allah\'ın nass ile belirlediği bir önderliktir. İmam günahtan korunmuştur ve ilimde üstündür. Yeryüzünden hüccet hiç eksik olmaz. Her imam kendinden sonrakini bildirir.' },
      art: { bg: 'interior', props: ['scroll'], actors: [{ kind: 'ali', x: 42, label: { tr: 'Hz. Ali' } }, { kind: 'hasan', x: 62, scale: 0.8, label: { tr: 'Hz. Hasan' } }, { kind: 'husayn', x: 74, scale: 0.75, label: { tr: 'Hz. Hüseyin' } }] },
    },
    {
      by: 'shia',
      text: { tr: 'On İki İmam sırayla şunlardır: Hz. Ali, Hz. Hasan, Hz. Hüseyin, Ali Zeynelabidin, Muhammed el-Bâkır, Cafer es-Sâdık, Musa el-Kâzım, Ali er-Rızâ, Muhammed el-Cevâd, Ali el-Hâdî, Hasan el-Askerî ve Muhammed el-Mehdi. On ikinci imam gizlenmiştir. Buna gaybet denir. Zamanı gelince ortaya çıkacaktır.' },
      art: { bg: 'dawn', props: ['sun'], actors: [{ kind: 'ali', x: 30, label: { tr: 'Hz. Ali' } }, { kind: 'hasan', x: 46, scale: 0.8, label: { tr: 'Hz. Hasan' } }, { kind: 'husayn', x: 60, scale: 0.8, label: { tr: 'Hz. Hüseyin' } }] },
    },
  ],
  sunni: [
    { book: 'Müslim, Sahih', ref: 'No. 2404 (Sa\'d b. Ebi Vakkas; mübahele kısmının alt numarası kontrol edilecek)', says: { tr: 'Mübahele ayeti inince Peygamber Ali, Fatıma, Hasan ve Hüseyin\'i çağırıp "Allah\'ım bunlar ehlimdir" der.' }, grade: { tr: 'Sahih' }, url: 'https://hadithunlocked.com/muslim:2404a', status: 'check' },
    { book: 'Müslim, Sahih', ref: 'No. 2408a (Zeyd b. Erkam)', says: { tr: 'Hum suyu başında iki ağır emanet: Allah\'ın Kitabı ve Ehl-i Beyt; kapsam tartışması.' }, grade: { tr: 'Sahih' }, url: 'https://hadithunlocked.com/muslim:2408a', status: 'verified' },
    { book: 'Tirmizi, el-Câmi\'', ref: 'No. 3788', says: { tr: 'Kitap ve itret Havz\'da Peygamber\'e varıncaya dek ayrılmaz.' }, grade: { tr: 'Tirmizi: hasen garib; Albani: sahih' }, url: 'https://hadithunlocked.com/tirmidhi:3788', status: 'verified' },
    { book: 'Hâkim, el-Müstedrek', ref: 'cilt 3, s. 151 (Safine hadisi, Ebu Zer; numara kontrol edilecek)', says: { tr: 'Ehl-i Beyt\'in Nuh\'un gemisi gibi olduğu; Hâkim sıhhat hükmü verir. Zehebî\'nin Telhîs\'teki hükmü bu oturumda doğrulanamadı.' }, grade: { tr: 'Hâkim: sahih; bazı muhaddisler zayıf sayar (tartışmalı)' }, url: 'https://en.wikishia.net/view/Hadith_of_Safina', status: 'check' },
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
      sunni: { tr: 'Peygamber mübaheleye Hz. Ali, Hz. Fatıma, Hz. Hasan ve Hz. Hüseyin\'i çıkardı; bu büyük bir fazilettir. Sünni okumada ayet, halifelik hakkında bir hüküm vermez.' },
      shia: { tr: 'Peygamber mübaheleye Hz. Ali, Hz. Fatıma, Hz. Hasan ve Hz. Hüseyin\'i çıkardı; bu büyük bir fazilettir. Şia\'da "enfüsenâ" (kendimiz) sözü Hz. Ali\'yi Peygamber\'in nefsi yapar ve onun eşsiz yerini gösterir.' },
    },
    {
      title: { tr: 'Sakaleyn: "itretî" mi "sünnetî" mi?' },
      sunni: { tr: 'Müslim ve Tirmizi\'de Peygamber "Kitap ve itret" emanetini bırakır. Sünni okumada "Kitap ve sünnetim" lafzı da rivayet edilir; söz Ehl-i Beyt\'e sevgi ve saygı anlamındadır, imametin delili sayılmaz.' },
      shia: { tr: 'Müslim ve Tirmizi\'de Peygamber "Kitap ve itret" emanetini bırakır. Şia\'da bu lafız sahihtir; Kur\'an\'la ayrılmamaları, Ehl-i Beyt\'in dinde ölçü olduğunu gösterir.' },
    },
    {
      title: { tr: 'Safine hadisinin sıhhati' },
      sunni: { tr: 'Safine hadisini Hâkim, el-Müstedrek\'te Ebu Zer\'den aktarır. Hâkim sahih dese de bazı muhaddisler zincirlerini zayıf bulur.' },
      shia: { tr: 'Safine hadisini Hâkim, el-Müstedrek\'te Ebu Zer\'den aktarır. Şia\'da çok sayıda yolla geldiği için mana bakımından kesin bir rivayet sayılır.' },
    },
    {
      title: { tr: '"On iki halife" kimdir?' },
      sunni: { tr: 'Buhari ve Müslim\'de on iki emir ya da on iki halife geçer; hepsi Kureyş\'tendir ve hadis isim saymaz. Sünni okumada bu sayı ilk halifeler, Emevi halifeleri ya da gelecekteki adil yöneticilerle açıklanır; isimlerle on iki imam eşleşmesi bu kaynaklarda yoktur.' },
      shia: { tr: 'Buhari ve Müslim\'de on iki emir ya da on iki halife geçer; hepsi Kureyş\'tendir ve hadis isim saymaz. Şia\'da sayı On İki İmam\'a uyar; el-Kâfî, el-Gaybe ve Kemâlüddîn isimleri bildirir, levha rivayetini ise Berkî gibi bazı Şii âlimler metin ve senet bakımından eleştirmiştir.' },
    },
  ],
  questions: [
    { tr: 'Peygamber Necran heyetinin karşısına Hz. Ali, Hz. Fatıma, Hz. Hasan ve Hz. Hüseyin ile çıktı. Bu seçim, Ehl-i Beyt sevgisini içinizde nasıl büyütüyor?' },
    { tr: 'Peygamber Kitap ile birlikte Ehl-i Beyt\'i de emanet bıraktı. Günlük hayatınızda bu emanete nasıl yer açabilirsiniz?' },
    { tr: 'Buhari ve Müslim\'de "on iki" sayısı duruyor. Şia bu sayıyı On İki İmam\'ın adlarıyla karşılar. Bu isimleri öğrenmek size ne hissettiriyor?' },
    { tr: 'Safine hadisi Ehl-i Beyt\'i Nuh\'un gemisine benzetir. Zinciri konuşulsa da bu benzetme, onlara tutunmanın size ne anlattığını düşündürüyor mu?' },
  ],
  summary: { tr: 'Mübahele, iki emanet ve on iki halife sözleri Ehl-i Beyt\'in yerini gösterir. Bunlar Sünni kaynaklarında da geçer (Müslim, Sahih; Tirmizi, el-Câmi\', no. 3788; Buhari, Sahih, no. 7222; Müslim, Sahih, no. 1821). Şia bunları, Hz. Ali ve soyundan gelen On İki İmam\'ın ilahi tayinine delil sayar.' },
};

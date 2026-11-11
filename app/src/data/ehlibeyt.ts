import type { HistEvent } from '../types';

// Kaynak: research/01-gadir-raziyye-usame.md (bölüm 2.3) ve bu oturumdaki doğrulamalar.
// status 'verified' = metin/numara okundu; 'check' = yayın öncesi birincil kaynaktan kontrol edilmeli.
export const ehlibeyt: HistEvent = {
  id: 'ehlibeyt',
  date: { tr: 'Peygamber dönemi ve sonrası', en: 'The Prophet\'s era and after' },
  title: { tr: 'Mübahele Olayı ve Ehl-i Beyt\'in emaneti', en: 'The Mubahala and the legacy of the Ahl al-Bayt' },
  hook: { tr: 'Peygamber mübaheleye Ehl-i Beyt\'i çıkardı. Kitap ile itreti, ayrılmasınlar diye emanet bıraktı.', en: 'Whom did the Prophet mean by "my family", and why does the number twelve matter?' },
  scenes: [
    {
      by: 'both',
      text: { tr: 'Bir sabah Peygamber, Necran\'dan gelen Hristiyan heyetinin karşısına çıkmak için evinden yola çıktı. Necranlılar, Hz. İsa\'nın Allah\'ın oğlu olduğunu savunuyordu. Peygamber ise onun Allah\'ın kulu ve peygamberi olduğunu söylemiş, ama tartışma bir sonuca varmamıştı. O zaman Âl-i İmrân Suresi\'nin 61. ayeti indi ve iki tarafı mübaheleye çağırdı. Mübahele, iki tarafın Allah\'a yönelip yalancı olana lanet dilemesidir. Ayet, her iki tarafın oğullarını, kadınlarını ve kendilerini getirmesini istiyordu. Peygamber bu çağrıya bir orduyla gelmedi. Yanında yalnızca **Hz. Ali**, kızı **Hz. Fatıma** ve torunları **Hz. Hasan** ile **Hz. Hüseyin** vardı. Necranlılar bu beş kişinin yüzlerine bakınca lanetleşmeye cesaret edemedi ve anlaşma yapmayı kabul etti.' },
      art: { bg: 'dune-day', props: ['sun', 'tents'], actors: [{ kind: 'prophet', x: 44, label: { tr: 'Hz. Peygamber' } }, { kind: 'ali', x: 58, label: { tr: 'Hz. Ali' } }, { kind: 'fatima', x: 70, label: { tr: 'Hz. Fatıma' } }, { kind: 'hasan', x: 80, scale: 0.7, label: { tr: 'Hz. Hasan' } }, { kind: 'husayn', x: 88, scale: 0.65, label: { tr: 'Hz. Hüseyin' } }] },
    },
    {
      by: 'partial',
      cites: [{ side: 'sunni', i: 0 }],
      text: { tr: 'Mübahele ayetinde Peygamber\'e, oğullarını, kadınlarını ve kendisini getirmesi emredilmişti. Peygamber oğullar yerine Hz. Hasan ile Hz. Hüseyin\'i, kadınlar yerine Hz. Fatıma\'yı getirdi. "Kendimizi" sözünün karşılığı olarak ise yanında **Hz. Ali** vardı. Yani Peygamber, Hz. Ali\'yi kendi nefsi, kendi canı yerine koymuştu. Bu, onu yalnızca bir amca oğlu ya da damat olarak yanına almak değildi. Necranlılar o gün iki ayrı insan gördü, ama ayet onları tek bir nefis olarak tanıttı. Tebük\'te Peygamber Hz. Ali\'yi Harun\'a benzetmişti. Mübahele\'de ise onu kendi canı saymıştı. Şiiler, Hz. Ali\'nin velayetini bu yakınlığa dayandırır.' },
      art: { bg: 'dune-day', props: ['sun'], actors: [{ kind: 'prophet', x: 44, label: { tr: 'Hz. Peygamber' } }, { kind: 'ali', x: 58, label: { tr: 'Hz. Ali' } }] },
    },
    {
      by: 'both',
      text: { tr: 'Veda Haccı\'ndan dönerken kafile, Mekke ile Medine arasındaki Hum suyunun başında durdu. Peygamber orada ümmetine iki ağır emanet bıraktığını söyledi: Allah\'ın Kitabı ve itreti, yani ==Ehl-i Beyt==\'i. "Ehl-i Beytim hakkında size Allah\'ı hatırlatırım" sözünü tekrar tekrar söyledi. Bu iki emanetin, Havz\'da Peygamber\'e kavuşuncaya kadar birbirinden ayrılmayacağını söyledi. Havz, kıyamet günündeki havuzdur. Yıllar sonra sahabe **Zeyd b. Erkam**\'a Ehl-i Beyt\'in kim olduğu soruldu. Zeyd, Peygamber\'in hanımlarını bu yakın halkanın dışında tuttu ve Hz. Ali\'nin, Akîl\'in, Cafer\'in ve Abbas\'ın ailelerini saydı. Peygamber, Kur\'an\'ın doğru anlaşılması için onun yanına kendi ailesini koymuştu.' },
      art: { bg: 'dune-dusk', props: ['scroll'], actors: [{ kind: 'crowd', x: 28, scale: 8 }, { kind: 'prophet', x: 66, label: { tr: 'Hz. Peygamber' } }, { kind: 'ali', x: 82, label: { tr: 'Hz. Ali' } }] },
    },
    {
      by: 'both',
      text: { tr: 'Peygamber, Ehl-i Beyt\'in yerini anlatmak için bir benzetme daha yaptı: "Ehl-i Beytimin örneği Nuh\'un gemisi gibidir. Ona binen kurtulur, ondan geri kalan boğulur." Bu söze **Safine hadisi** denir. Safine, gemi demektir. Nuh\'un zamanında tufan, yeryüzünü kaplayan suydu ve yalnızca gemiye binenler kurtulmuştu. Bu hadiste tufan, Peygamber\'den sonra ümmetin içine düşeceği ayrılıklar ve karışıklıklardır. O fırtınada kurtuluşun gemisi ise Ehl-i Beyt\'tir. Şiiler, Peygamber\'den sonra yönünü kaybetmemek için bu gemiye tutunmak gerektiğine inanır.' },
      art: { bg: 'river', props: ['palms'], actors: [{ kind: 'crowd', x: 40, scale: 5 }] },
    },
    {
      by: 'both',
      text: { tr: 'Sahabe **Câbir b. Semüre** bir gün Peygamber\'in yanındaydı. Peygamber şöyle dedi: "Bu din, içinizden on iki halife gelinceye kadar güçlü kalacak." Sonra sesini alçalttı ve Câbir bir cümleyi duyamadı. Babasına Peygamber\'in ne dediğini sordu. Babası, "Hepsi Kureyş\'tendir" dediğini söyledi. Bu hadis Buhari\'de ve Müslim\'de geçer. Sünni âlimler bu on iki kişinin kimler olduğu konusunda farklı listeler verir. Şii okuyuşu ise bu sayıyı Ehl-i Beyt\'in on iki imamıyla doldurur. Peygamber\'in verdiği sayı, Hz. Ali ile başlayıp Hz. Mehdî ile tamamlanan on iki imamla tam olarak örtüşür.' },
      art: { bg: 'city', props: ['sun', 'minbar'], actors: [{ kind: 'prophet', x: 60, label: { tr: 'Hz. Peygamber' } }, { kind: 'crowd', x: 28, scale: 6 }] },
    },
    {
      by: 'shia',
      text: { tr: 'Ehl-i Beyt rivayetlerinde Câbir b. Abdullah\'ın yaşadığı bir olay da anlatılır. Câbir, **Hz. Fatıma**\'nın yanında bir levha gördü. Levhada, Peygamber\'den sonra gelecek imamların adları tek tek yazılıydı. Levhadaki ilk isim **Hz. Ali**\'ydi. Ardından Hz. Fatıma\'nın oğulları **Hz. Hasan** ve **Hz. Hüseyin** geliyordu. Son isim ise ahir zamanda ortaya çıkacak olan **Hz. Mehdî**\'ydi. Bu rivayete göre imamların isimleri, onlar daha dünyaya gelmeden önce belirlenmişti.' },
      art: { bg: 'night', props: ['stars', 'scroll'], actors: [{ kind: 'fatima', x: 50, label: { tr: 'Hz. Fatıma' } }] },
    },
    {
      by: 'shia',
      text: { tr: '==İmamet==, Şii inancında Allah\'ın açık bir bildirimle belirlediği önderliktir. Bu açık bildirime **nass** denir. İmam, Allah\'ın koruması altında günahtan uzak tutulmuştur ve ilimde de herkesten üstündür. Şiilere göre yeryüzü hiçbir zaman Allah\'ın hücceti, yani insanlara yol gösteren delili olan bir imamdan boş kalmaz. Her imam, kendisinden sonra gelecek olanı açıkça bildirir. Bu sıra, insanların oyuna ya da seçimine bırakılmaz. Gadir Hum\'da Peygamber, bu sıranın ilk halkasını, Hz. Ali\'yi, herkesin önünde göstermişti. Sakife\'de bu seçim bir kenara bırakıldı, ama imamların sırası hiç kopmadı.' },
      art: { bg: 'interior', props: ['scroll'], actors: [{ kind: 'ali', x: 42, label: { tr: 'Hz. Ali' } }, { kind: 'hasan', x: 62, scale: 0.8, label: { tr: 'Hz. Hasan' } }, { kind: 'husayn', x: 74, scale: 0.75, label: { tr: 'Hz. Hüseyin' } }] },
    },
    {
      by: 'shia',
      text: { tr: 'Şiilerin On İki İmamı sırasıyla şunlardır: **Hz. Ali**, **Hz. Hasan**, **Hz. Hüseyin**, **Hz. Zeynelâbidîn**, **Hz. Muhammed Bâkır**, **Hz. Ca\'fer-i Sâdık**, **Hz. Musa Kâzım**, **Hz. Ali Rızâ**, **Hz. Muhammed Takî**, **Hz. Ali Nakî**, **Hz. Hasan Askerî** ve **Hz. Mehdî**. Bu zincir, Kerbelâ\'da Hz. Hüseyin şehit edildiğinde bile kopmadı. Hasta oğlu Hz. Zeynelâbidîn sağ kaldı ve imamet onunla sürdü. Sonraki imamlar Medine\'de ders halkalarında, Bağdat\'ta ve Samarra\'da zindanlarda ve gözetim altında yaşadı. On İkinci İmam Hz. Mehdî ise gaybettedir. Gaybet ölüm değil, gizlenmedir. Şiiler, zamanı geldiğinde onun adaletle ortaya çıkacağına inanır.' },
      art: { bg: 'dawn', props: ['sun'], actors: [{ kind: 'ali', x: 30, label: { tr: 'Hz. Ali' } }, { kind: 'hasan', x: 46, scale: 0.8, label: { tr: 'Hz. Hasan' } }, { kind: 'husayn', x: 60, scale: 0.8, label: { tr: 'Hz. Hüseyin' } }] },
    },
  ],
  sunni: [
    { book: 'Müslim, Sahih', ref: 'No. 2404 (Sa\'d b. Ebi Vakkas; mübahele kısmının alt numarası kontrol edilecek)', says: { tr: 'Mübahele ayeti inince Peygamber Hz. Ali, Fatıma, Hz. Hasan ve Hz. Hüseyin\'i çağırıp "Allah\'ım bunlar ehlimdir" der.' }, grade: { tr: 'Sahih' }, url: 'https://hadithunlocked.com/muslim:2404a', status: 'check' },
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

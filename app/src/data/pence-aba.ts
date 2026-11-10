import type { HistEvent } from '../types';

// Kaynak: research/01-gadir-raziyye-usame.md (bölüm 2.3) ve ehlibeyt.ts'teki doğrulamalar.
// status 'verified' = metin/numara okundu; 'check' = yayın öncesi birincil kaynaktan kontrol edilmeli.
export const penceAba: HistEvent = {
  id: 'pence-aba',
  date: { tr: 'Medine, Peygamber dönemi', en: 'Medina, the Prophet\'s era' },
  title: { tr: 'Pence-i Âl-i Aba (Kisa Olayı): Ehl-i Beyt kimdir?', en: 'The Five of the Cloak (Hadith al-Kisa): who are the Ahl al-Bayt?' },
  hook: { tr: 'Rivayetlere göre Medine\'de bir sabah Peygamber evinden çıktı ve beş kişiyi bir örtünün altında topladı. Onlara "Ehl-i Beytim" diyor. Bu beş kim?', en: 'Whom did the Prophet gather under the cloak, and whom did he mean by "my Ahl al-Bayt"?' },
  scenes: [
    {
      by: 'both',
      text: { tr: 'Rivayetlere göre bir sabah **Hz. Peygamber**, omzunda siyah yünden dokunmuş bir örtüyle evinden çıktı ve Ehl-i Beyt\'ini yanına çağırdı. Bir rivayete göre bu buluşma, Peygamber\'in eşi Ümmü Seleme\'nin evinde oldu. İlk gelen torunu **Hz. Hasan**\'dı. Peygamber onu örtünün altına aldı. Ardından küçük kardeşi **Hz. Hüseyin** geldi ve o da dedesinin yanına sokuldu. Sonra Peygamber\'in kızı **Hz. Fatıma** geldi. En son **Hz. Ali** geldi. Peygamber dördünü de örtünün altına aldı ve onu üzerlerine kapattı. Beşi aynı örtünün altında bir araya geldiğinde Peygamber Ahzâb 33:33\'ü okudu: "Ey Ehl-i Beyt, Allah sizden kiri gidermek ve sizi tertemiz yapmak ister."' },
      art: { bg: 'interior', actors: [{ kind: 'prophet', x: 38, label: { tr: 'Hz. Peygamber' } }, { kind: 'ali', x: 52, label: { tr: 'Hz. Ali' } }, { kind: 'fatima', x: 62, label: { tr: 'Hz. Fatıma' } }, { kind: 'hasan', x: 72, scale: 0.7, label: { tr: 'Hz. Hasan' } }, { kind: 'husayn', x: 80, scale: 0.65, label: { tr: 'Hz. Hüseyin' } }] },
    },
    {
      by: 'both',
      text: { tr: 'Örtünün altındakiler için Peygamber ellerini kaldırıp dua etti: "Allah\'ım, bunlar benim Ehl-i Beyt\'imdir. Onlardan kiri uzaklaştır ve onları tertemiz yap." **Ümmü Seleme** o sırada evdeydi ve bu duayı duydu. Kendisi de bu şerefe ortak olmak istedi ve örtüye doğru yaklaşarak sordu: "Ya Resulallah, ben de onlarla birlikte miyim?" Peygamber onu kırmadı ve "Sen hayır üzeresin" dedi. Ama örtüyü onun için açmadı. Ümmü Seleme, Peygamber\'in değerli bir eşiydi ve hayır üzere olduğu Peygamber\'in kendi sözüyle sabitti. Yine de o sabah örtünün altında yalnızca Peygamber, **Hz. Ali**, **Hz. Fatıma**, **Hz. Hasan** ve **Hz. Hüseyin** vardı.' },
      art: { bg: 'interior', actors: [{ kind: 'prophet', x: 38, label: { tr: 'Hz. Peygamber' } }, { kind: 'woman', x: 70 }] },
    },
    {
      by: 'shia',
      text: { tr: 'Bu ayete Ayet-i Tathir denir. Tathir, kirden arındırmak demektir. Ayette geçen "ehl" kelimesi ev halkı anlamına gelir. Peygamber bu ayeti rastgele bir topluluğun üzerine okumadı. Kendi elleriyle örtünün altına aldığı beş kişinin üzerine okudu ve onlar için dua etti. Şii okuyuşunda bu arındırma, onların günahtan ve hatadan korunmuş olmaları anlamına gelir. Buna ==ismet== denir. İmamet, yani Allah\'ın bildirdiği önderlik, bu temizliğe dayanır. Çünkü insanlara yol gösterecek olanın, Allah\'ın tertemiz kıldığı biri olması gerekir. Sonraki imamların hepsi de bu örtünün altındaki ailenin soyundan gelir.' },
      art: { bg: 'interior', props: ['scroll'], actors: [{ kind: 'prophet', x: 40, label: { tr: 'Hz. Peygamber' } }, { kind: 'woman', x: 66 }] },
    },
    {
      by: 'both',
      text: { tr: 'Peygamber\'in vefatından yıllar sonra sahabe **Zeyd b. Erkam**\'a Ehl-i Beyt\'in kimler olduğu soruldu. Zeyd, Peygamber\'in hanımlarını bu yakın halkanın dışında tuttu. Ardından zekât almaları yasak olan aileleri saydı: **Hz. Ali**\'nin, **Akîl**\'in, **Cafer**\'in ve **Abbas**\'ın aileleri. Bu, Peygamber\'in geniş akrabalarını kapsayan uzun bir listeydi. Ama listenin tam merkezinde, o sabah örtünün altında toplanan beş kişi duruyordu. Zeyd\'in cevabı, Ehl-i Beyt sözünün Peygamber\'in kan bağıyla bağlı ailesine işaret ettiğini gösteriyordu. Şii okuyuşunda bu geniş halkanın kalbi, örtünün altındaki beş kişidir.' },
      art: { bg: 'dune-dusk', props: ['scroll'], actors: [{ kind: 'crowd', x: 28, scale: 8 }, { kind: 'prophet', x: 66, label: { tr: 'Hz. Peygamber' } }] },
    },
    {
      by: 'shia',
      text: { tr: 'Şiiler bu beş kişiye **Pence-i Âl-i Aba** der. Pence, Farsçada beş demektir. Âl-i Aba ise örtünün ailesi anlamına gelir. Bu beş kişi Peygamber, **Hz. Ali**, **Hz. Fatıma**, **Hz. Hasan** ve **Hz. Hüseyin**\'dir. Şii evlerinde, matem bayraklarında ve türbe kapılarında görülen açık el işareti bu beş kişiyi temsil eder. Her parmak bir ismi hatırlatır. Bir çocuk bu eli ilk gördüğünde yalnızca bir şekil görür. Annesi ya da babası ona beş ismi tek tek öğretir. Zamanla o el, çocuğun gözünde hem bir sevginin hem de Kerbelâ\'da dökülen gözyaşlarının işareti olur.' },
      art: { bg: 'night', props: ['stars'], actors: [{ kind: 'prophet', x: 20, label: { tr: 'Hz. Peygamber' } }, { kind: 'ali', x: 36, label: { tr: 'Hz. Ali' } }, { kind: 'fatima', x: 50, label: { tr: 'Hz. Fatıma' } }, { kind: 'hasan', x: 64, scale: 0.8, label: { tr: 'Hz. Hasan' } }, { kind: 'husayn', x: 76, scale: 0.8, label: { tr: 'Hz. Hüseyin' } }] },
    },
    {
      by: 'shia',
      text: { tr: 'Ehl-i Beyt rivayetlerinde bu olay, **Hz. Fatıma**\'nın ağzından daha uzun bir şekilde anlatılır. Bu anlatının adı Hadis-i Kisa\'dır. Kisa, Arapçada örtü demektir. Bu rivayete göre örtünün altında beş kişi toplandığında Allah, meleklerine bu beş kişiyi tanıtır. Cebrail de yeryüzüne inip örtünün altına girmek için izin ister. Hadis-i Kisa, Şii evlerinde özellikle dilek ve dua meclislerinde okunur. Okunurken insanlar başlarını eğer, ellerini açar ve bu beş kişinin hatırına dua eder. Şiiler, bu meclislerde dileklerin kabul olacağına inanır.' },
      art: { bg: 'interior', props: ['scroll', 'stars'], actors: [{ kind: 'fatima', x: 50, label: { tr: 'Hz. Fatıma' } }] },
    },
    {
      by: 'shia',
      text: { tr: 'Hadis-i Kisa, ==Ehl-i Beyt==\'in çekirdeğini gösterir. Bu çekirdek, örtünün altındaki beş kişidir. Hz. Ali\'den sonraki on bir imamın hepsi, **Hz. Hasan** ve **Hz. Hüseyin** başta olmak üzere, Hz. Ali ile Hz. Fatıma\'nın soyundandır. Medine\'deki o sabah, bir evin içinde, birkaç kişinin şahit olduğu sessiz bir andı. Gadir Hum\'da ise binlerce hacının önünde Peygamber, bu beş kişiden biri olan **Hz. Ali**\'nin elini kaldıracaktı. Örtü, ailenin kim olduğunu göstermişti. Gadir ise o aileden kimin önder olacağını herkese duyuracaktı.' },
      art: { bg: 'dawn', props: ['sun'], actors: [{ kind: 'ali', x: 40, label: { tr: 'Hz. Ali' } }, { kind: 'hasan', x: 56, scale: 0.8, label: { tr: 'Hz. Hasan' } }, { kind: 'husayn', x: 68, scale: 0.8, label: { tr: 'Hz. Hüseyin' } }] },
    },
  ],
  sunni: [
    { book: 'Müslim, Sahih', ref: 'No. 2424 (Fezâil)', says: { tr: 'Aişe: Peygamber siyah örtü altına Hz. Hasan, Hz. Hüseyin, Fatıma ve Hz. Ali\'yi alır, Ahzâb 33:33\'ü okur.' }, grade: { tr: 'Sahih' }, url: 'https://hadithunlocked.com/muslim:2424', status: 'verified' },
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
      sunni: { tr: 'Peygamber, Hz. Ali, Hz. Fatıma, Hz. Hasan ve Hz. Hüseyin\'i örtünün altına alıp Ahzâb 33:33\'ü okudu. Sünni okumada kapsam daha geniştir; hanımlar ve Haşimoğulları da Ehl-i Beyt\'e girer, Kisa halkı çekirdektir ve ayet hanımlara seslenen ayetlerin arasındadır.' },
      shia: { tr: 'Peygamber, Hz. Ali, Hz. Fatıma, Hz. Hasan ve Hz. Hüseyin\'i örtünün altına alıp Ahzâb 33:33\'ü okudu. Şia\'da Ayet-i Tathir ve Kisa hadisi, ismet sahibi Ehl-i Beyt\'i Peygamber, Hz. Ali, Hz. Fatıma, Hz. Hasan ve Hz. Hüseyin ile sınırlar; imamlar onların soyundandır.' },
    },
    {
      title: { tr: 'Ümmü Seleme ve örtü' },
      sunni: { tr: 'Peygamber Ümmü Seleme\'yi örtünün altına almadı ve ona "Sen hayır üzerindesin" dedi. Sünni okumada bu söz onu dışlamaz; iyilik üzerinde olduğunu bildirir ve hanımların Ehl-i Beyt içinde sayıldığı görüşünü ortadan kaldırmaz.' },
      shia: { tr: 'Peygamber Ümmü Seleme\'yi örtünün altına almadı ve ona "Sen hayır üzerindesin" dedi. Şia\'da onu örtüye almayıp ayrı tutması, ayetin ismet sahibi beş kişiyi özel olarak kastettiğini gösterir.' },
    },
  ],
  questions: [
    { tr: 'Peygamber beş kişiyi bir örtünün altında topladı. Bu tablo, Ehl-i Beyt sevgisini içinizde nasıl büyütüyor?' },
    { tr: 'Zeyd b. Erkam, Ehl-i Beyt\'i Peygamber\'in yakın ailesi diye anlattı. Bu söz, o aileye olan sevginize ne katıyor?' },
    { tr: 'Tathir ayeti "sizi tertemiz yapmak ister" der. Şia bunu günahtan korunmuşluk diye okur. Bu temizlik, onlara duyduğunuz güveni nasıl besliyor?' },
  ],
  summary: { tr: 'Peygamber, Hz. Ali, Hz. Fatıma, Hz. Hasan ve Hz. Hüseyin\'i örtünün altına alıp onları Ehl-i Beyt diye andı. Bu beş, Pence-i Âl-i Aba\'dır ve Şia\'da ismet sahibi Ehl-i Beyt\'in çekirdeğidir.' },
};

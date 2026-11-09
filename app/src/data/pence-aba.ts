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
      text: { tr: 'Medine\'nin sabahı henüz serindi. Rivayetlere göre Peygamber, siyah yünlü bir örtüyle evinden çıktı. Bir rivayet, bu evin Ümmü Seleme\'nin evi olduğunu söyler. Önce **Hz. Hasan** geldi. Peygamber onu örtünün altına aldı. Ardından **Hz. Hüseyin** geldi. Peygamber onu da yanına çekti. Sonra kızı **Hz. Fatıma** geldi. En sonra **Hz. Ali** geldi. Beş kişi aynı örtünün altında toplandı. Peygamber o anda Ahzâb 33:33\'ü okudu: "Ey Ehl-i Beyt, Allah sizden kiri gidermek ve sizi tertemiz yapmak ister." Ayet, kalabalık bir meydana değil, bu eşiğe indi. Seven, Ehl-i Beyt adının o sabah kime bağlandığını burada görür.' },
      art: { bg: 'interior', actors: [{ kind: 'prophet', x: 38, label: { tr: 'Hz. Peygamber' } }, { kind: 'ali', x: 52, label: { tr: 'Hz. Ali' } }, { kind: 'fatima', x: 62, label: { tr: 'Hz. Fatıma' } }, { kind: 'hasan', x: 72, scale: 0.7, label: { tr: 'Hz. Hasan' } }, { kind: 'husayn', x: 80, scale: 0.65, label: { tr: 'Hz. Hüseyin' } }] },
    },
    {
      by: 'both',
      text: { tr: 'Örtü kapanınca Peygamber dua etti. "Allah\'ım, bunlar benim Ehl-i Beyt\'imdir. Onlardan kiri uzaklaştır ve onları tertemiz yap." Ümmü Seleme o evdeydi. Örtünün dışında durdu. İçindeki soru dayanılmaz oldu. "Ya Resulallah, ben de onlarla birlikte miyim?" diye sordu. Peygamber onu küçültmedi. "Sen hayır üzeresin" dedi. Yine de örtüyü onun için açmadı. Örtünün altında yalnız Peygamber, **Hz. Ali**, **Hz. Fatıma**, **Hz. Hasan** ve **Hz. Hüseyin** kaldı. Hayır üzere olmak başka şeydi. O sabahki seçim başka şeydi. Ehl-i Beyt adı, bu beş kişiyle görülür oldu.' },
      art: { bg: 'interior', actors: [{ kind: 'prophet', x: 38, label: { tr: 'Hz. Peygamber' } }, { kind: 'woman', x: 70 }] },
    },
    {
      by: 'shia',
      text: { tr: 'Bu ayete Ayet-i Tathir denir. Tathir, kirden arındırmak demektir. Ayetteki ehl, ev halkı demektir. Peygamber Ahzâb 33:33\'ü rastgele bir topluluğa okumadı. Örtünün altına aldığı beş kişinin üzerine okudu. Şii okuyuşta bu arındırma, onların günahtan korunmuş olmasıdır. Buna ==ismet== denir. İmamet, yani Allah\'ın bildirdiği önderlik, bu temizliğe dayanır. Seven burada sıcak bir aile resmi görmez. Peygamber\'in kendi eliyle ayırdığı bir çekirdek görür. Güven, o seçimden doğar. Sonraki imamlar da bu çekirdeğin soyundan gelir.' },
      art: { bg: 'interior', props: ['scroll'], actors: [{ kind: 'prophet', x: 40, label: { tr: 'Hz. Peygamber' } }, { kind: 'woman', x: 66 }] },
    },
    {
      by: 'both',
      text: { tr: 'Yıllar sonra bir soru Zeyd b. Erkam\'ın önüne geldi. Ehl-i Beyt kimdi? Zeyd, Peygamber\'in hanımlarını bu yakın halkanın dışında tuttu. **Hz. Ali**\'nin, Akîl\'in, Cafer\'in ve Abbas\'ın ailelerini andı. Liste uzundu. Ortası ise örtünün altındaki beş kişiydi. Soru, bir soy kütüğü için sorulmamıştı. Peygamber\'in sevgiyi ve emaneti kime bağladığını göstermek içindi. Zeyd\'in cevabı, o sabahki örtüyü yıllar sonra da açık tuttu. Seven, isimlerin arasında kaybolmaz. Çekirdeği görür.' },
      art: { bg: 'dune-dusk', props: ['scroll'], actors: [{ kind: 'crowd', x: 28, scale: 8 }, { kind: 'prophet', x: 66, label: { tr: 'Hz. Peygamber' } }] },
    },
    {
      by: 'shia',
      text: { tr: 'Sevenler bu beş kişiye **Pence-i Âl-i Aba** der. Pence, beş demektir. Âl-i Aba, örtü ailesi demektir. Onlar Peygamber, **Hz. Ali**, **Hz. Fatıma**, **Hz. Hasan** ve **Hz. Hüseyin**\'dir. Bayraklardaki açık el, bu beş kişiyi göğüste taşır. El bir süs değildir. O sabah örtünün altında duranları hatırlatır. Bir çocuk bu eli görünce önce bir şekil görür. Sonra beş isim öğrenir. İsimler öğrenilince el, bir matem ve bir sevgi işareti olur. Şiinin göğsündeki el, Medine\'deki o örtünün uzaktan gelen gölgesidir.' },
      art: { bg: 'night', props: ['stars'], actors: [{ kind: 'prophet', x: 20, label: { tr: 'Hz. Peygamber' } }, { kind: 'ali', x: 36, label: { tr: 'Hz. Ali' } }, { kind: 'fatima', x: 50, label: { tr: 'Hz. Fatıma' } }, { kind: 'hasan', x: 64, scale: 0.8, label: { tr: 'Hz. Hasan' } }, { kind: 'husayn', x: 76, scale: 0.8, label: { tr: 'Hz. Hüseyin' } }] },
    },
    {
      by: 'shia',
      text: { tr: 'Ehl-i Beyt rivayetinde **Hz. Fatıma**\'dan gelen daha uzun bir anlatı vardır. Adı Hadis-i Kisa\'dır. Kisa, örtü demektir. Bu anlatıda örtünün altında Cebrail\'in ve Allah\'ın hitabı da duyulur. Rivayet, beş kişiyi yalnız bir evin halkı diye bırakmaz. Hitap, onları Ehl-i Beyt diye anar. Ev sıcaklığı gerçektir. Seçim de gerçektir. Seven, örtüyü bir aile yorganı diye okursa eksik kalır. Onu bir seçim diye okursa, Peygamber\'in kimi bağrına çektiğini anlar. Bu yüzden Hadis-i Kisa, Şii evinde bir ninniden çok bir kimlik sahnesidir.' },
      art: { bg: 'interior', props: ['scroll', 'stars'], actors: [{ kind: 'fatima', x: 50, label: { tr: 'Hz. Fatıma' } }] },
    },
    {
      by: 'shia',
      text: { tr: 'Hadis-i Kisa, ==Ehl-i Beyt==\'in çekirdeğini gösterir. Çekirdek, örtünün altındaki beş kişidir. Sonraki imamlar bu beşin soyundan gelir. İmamet bu beş kişiye dayanır. Gadir\'de Peygamber, bu beşin içinden **Hz. Ali**\'nin elini herkesin önünde kaldıracaktır. Örtü, o elin ilk işaretidir. Medine\'deki sabah gizlidir. Gadir\'deki öğle ise kalabalıktır. İkisi aynı seçimi söyler. Biri evin eşiğinde, biri çölün ortasında. Seven bu iki sahneyi ayırmaz. Örtüyü gören, biraz sonra kaldırılan eli de bekler.' },
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

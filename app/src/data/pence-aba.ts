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
      text: { tr: 'Medine\'de, Peygamber döneminde bir sabah. Rivayetlere göre Peygamber, siyah yünlü bir örtüyle evinden çıktı. Bir rivayet bunu Ümmü Seleme\'nin evi diye anar. Önce **Hz. Hasan** geldi. Peygamber onu örtünün altına aldı. Sonra **Hz. Hüseyin**, **Hz. Fatıma** ve **Hz. Ali** geldi. Beşini aynı örtünün altında topladı. "Ey Ehl-i Beyt, Allah sizden kiri gidermek ve sizi tertemiz yapmak ister." Bu söz, Ahzâb 33:33\'tür. Ayet, örtünün üstüne, bu beş kişi için indi.' },
      art: { bg: 'interior', actors: [{ kind: 'prophet', x: 38, label: { tr: 'Hz. Peygamber' } }, { kind: 'ali', x: 52, label: { tr: 'Hz. Ali' } }, { kind: 'fatima', x: 62, label: { tr: 'Hz. Fatıma' } }, { kind: 'hasan', x: 72, scale: 0.7, label: { tr: 'Hz. Hasan' } }, { kind: 'husayn', x: 80, scale: 0.65, label: { tr: 'Hz. Hüseyin' } }] },
    },
    {
      by: 'both',
      text: { tr: 'Aynı sabah Peygamber, örtünün altındaki beş kişi için dua etti. "Allah\'ım, bunlar Ehl-i Beytimdir. Onlardan kiri uzaklaştır, onları tertemiz yap." Ümmü Seleme oradaydı. "Ben de onlarla birlikte miyim?" diye sordu. Peygamber, "Sen hayır üzerindesin" dedi. Onu örtünün altına almadı. Örtünün altında yalnız Peygamber, **Hz. Ali**, **Hz. Fatıma**, **Hz. Hasan** ve **Hz. Hüseyin** kaldı. O sabah Ehl-i Beyt adı, bu beş kişiyle görülür oldu.' },
      art: { bg: 'interior', actors: [{ kind: 'prophet', x: 38, label: { tr: 'Hz. Peygamber' } }, { kind: 'woman', x: 70 }] },
    },
    {
      by: 'shia',
      text: { tr: 'Ayet-i Tathir, örtünün altına alınan bu beş kişiyi anlatır. Tathir, kirden arındırma demektir. Ayetteki ehl, ev halkı demektir. Peygamber, Ahzâb 33:33\'ü onların üzerine okudu. Şii okuyuşta bu arındırma, onların günahtan korunmuş olmasıdır. Buna ==ismet== denir. İmamet, yani Allah\'ın bildirdiği önderlik, bu temizliğe dayanır. Seven, bu beş kişiye güvenir. Çünkü Peygamber onları kendi eli ile örtünün altına almıştır.' },
      art: { bg: 'interior', props: ['scroll'], actors: [{ kind: 'prophet', x: 40, label: { tr: 'Hz. Peygamber' } }, { kind: 'woman', x: 66 }] },
    },
    {
      by: 'both',
      text: { tr: 'Yıllar sonra Zeyd b. Erkam\'a Ehl-i Beyt\'in kim olduğu soruldu. O, Peygamber\'in hanımlarını bu yakın halkanın dışında tuttu. **Hz. Ali**\'nin, Akîl\'in, Cafer\'in ve Abbas\'ın ailelerini andı. Örtünün altındaki beş kişi, bu akraba halkasının ortasında durur. Soru, bir isim listesi için değildi. Peygamber\'in sevgiyi kime bağladığını göstermek içindi.' },
      art: { bg: 'dune-dusk', props: ['scroll'], actors: [{ kind: 'crowd', x: 28, scale: 8 }, { kind: 'prophet', x: 66, label: { tr: 'Hz. Peygamber' } }] },
    },
    {
      by: 'shia',
      text: { tr: 'Sevenler bu beş kişiye **Pence-i Âl-i Aba** der. Pence, beş demektir. Âl-i Aba, örtü ailesi demektir. Onlar Peygamber, **Hz. Ali**, **Hz. Fatıma**, **Hz. Hasan** ve **Hz. Hüseyin**\'dir. Bayraklardaki açık el, sevenlerin bu beş kişiyi göğsünde taşıdığını gösterir. El, bir süs değildir. O sabah örtünün altında duranları hatırlatır.' },
      art: { bg: 'night', props: ['stars'], actors: [{ kind: 'prophet', x: 20, label: { tr: 'Hz. Peygamber' } }, { kind: 'ali', x: 36, label: { tr: 'Hz. Ali' } }, { kind: 'fatima', x: 50, label: { tr: 'Hz. Fatıma' } }, { kind: 'hasan', x: 64, scale: 0.8, label: { tr: 'Hz. Hasan' } }, { kind: 'husayn', x: 76, scale: 0.8, label: { tr: 'Hz. Hüseyin' } }] },
    },
    {
      by: 'shia',
      text: { tr: 'Ehl-i Beyt rivayetinde **Hz. Fatıma**\'dan gelen daha uzun bir anlatı vardır. Adı Hadis-i Kisa\'dır. Kisa, örtü demektir. Bu anlatıda örtünün altında Cebrail\'in ve Allah\'ın hitabı da duyulur. Rivayet, bu beş kişiyi yalnız bir evin halkı diye bırakmaz. Hitap, onları Ehl-i Beyt diye anar. Bu yüzden seven, o örtüyü bir aile yorganı değil, bir seçim görür.' },
      art: { bg: 'interior', props: ['scroll', 'stars'], actors: [{ kind: 'fatima', x: 50, label: { tr: 'Hz. Fatıma' } }] },
    },
    {
      by: 'shia',
      text: { tr: 'Hadis-i Kisa, ==Ehl-i Beyt==\'in çekirdeğini gösterir. Çekirdek, örtünün altındaki beş kişidir. Sonraki imamlar bu beşin soyundan gelir. İmamet bu beş kişiye dayanır. Gadir\'de Peygamber, bu beşin içinden **Hz. Ali**\'nin elini herkesin önünde kaldıracaktır. Örtü, o elin ilk işaretidir.' },
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

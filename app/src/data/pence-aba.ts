import type { HistEvent } from '../types';

// Kaynak: research/01-gadir-raziyye-usame.md (bölüm 2.3) ve ehlibeyt.ts'teki doğrulamalar.
// status 'verified' = metin/numara okundu; 'check' = yayın öncesi birincil kaynaktan kontrol edilmeli.
export const penceAba: HistEvent = {
  id: 'pence-aba',
  date: { tr: 'Medine, Peygamber dönemi', en: 'Medina, the Prophet\'s era' },
  title: { tr: 'Pence-i Âl-i Aba (Kisa Olayı): Ehl-i Beyt kimdir?', en: 'The Five of the Cloak (Hadith al-Kisa): who are the Ahl al-Bayt?' },
  hook: { tr: 'Bir örtünün altında beş nur. Hz. Peygamber (s.a.v.) "Ehl-i Beytim" derken kimi bağrına bastı?', en: 'Whom did the Prophet gather under the cloak, and whom did he mean by "my Ahl al-Bayt"?' },
  scenes: [
    {
      by: 'both',
      text: { tr: 'Hz. Aişe anlatır: Hz. Peygamber (s.a.v.) bir sabah siyah, yünlü bir örtüyle çıktı. Önce Hz. Hasan geldi, onu örtünün altına aldı. Sonra Hz. Hüseyin, Hz. Fatıma (s.a.) ve Hz. Ali (a.s.) de girdi. Beşi birden o örtünün altında toplanınca Peygamber Ahzâb 33. ayeti okudu: «Allah sizden kiri gidermek ve sizi tertemiz kılmak ister.» Bu sahne Müslim 2424\'te sahih olarak geçer.' },
      art: { bg: 'interior', actors: [{ kind: 'prophet', x: 38, label: { tr: 'Hz. Peygamber' } }, { kind: 'ali', x: 52, label: { tr: 'Hz. Ali' } }, { kind: 'fatima', x: 62, label: { tr: 'Hz. Fatıma' } }, { kind: 'hasan', x: 72, scale: 0.7, label: { tr: 'Hz. Hasan' } }, { kind: 'husayn', x: 80, scale: 0.65, label: { tr: 'Hz. Hüseyin' } }] },
    },
    {
      by: 'both',
      text: { tr: 'Tirmizi 3787\'de ayet, Ümmü Seleme\'nin evinde inince Hz. Peygamber (s.a.v.) Hz. Fatıma, Hz. Hasan, Hz. Hüseyin ve Hz. Ali\'yi örtüye alır. Duası şudur: «Allah\'ım, bunlar Ehl-i Beytimdir; onlardan kiri gider, onları tertemiz kıl.» Ümmü Seleme «Ben de onlarla mıyım?» diye sorar. Cevap, «Sen yerindesin ve benim nezdimde hayırdasın» mealindedir. Tirmizi bu tarîki garib sayar; sonraki bazı muhaddisler sahih bulur. Örtünün altı yine o beşle sınırlı kalır.' },
      art: { bg: 'interior', actors: [{ kind: 'prophet', x: 38, label: { tr: 'Hz. Peygamber' } }, { kind: 'woman', x: 70 }] },
    },
    {
      by: 'shia',
      text: { tr: 'Ayetin öncesi Peygamber\'in hanımlarına seslenir; «sizden kiri gidermek» cümlesinde hitap ise çoğul erkeğe döner. Ca\'ferî anlayışta bu geçiş boşuna değildir: ismet sahibi Ehl-i Beyt, örtünün altına alınan beş kişidir. Arındırma, onların günahtan korunmuşluğu diye okunur. Beşlinin fazileti Müslim ve Tirmizi\'de de ortaktır. İsmet hükmü, Şii kelamının bu ortak metinden çıkardığı sonuçtur.' },
      art: { bg: 'interior', props: ['scroll'], actors: [{ kind: 'prophet', x: 40, label: { tr: 'Hz. Peygamber' } }, { kind: 'woman', x: 66 }] },
    },
    {
      by: 'both',
      text: { tr: 'Müslim 2408\'de Zeyd b. Erkam\'a Ehl-i Beyt\'in kim olduğu sorulur. O, bu sözle hanımları değil, zekâtın haram olduğu evleri anladığını söyler: Ali, Akîl, Ca\'fer ve Abbas\'ın aileleri. Rivayet kapsamı beşten geniş tutar. Ca\'ferî okuma ise ayetin ve örtünün gösterdiği çekirdeği, bu geniş akraba dairesinden ayırır. İki haber de sahihtir; soru, hangisinin ayetin maksadına daha yakın durduğudur.' },
      art: { bg: 'dune-dusk', props: ['scroll'], actors: [{ kind: 'crowd', x: 28, scale: 8 }, { kind: 'prophet', x: 66, label: { tr: 'Hz. Peygamber' } }] },
    },
    {
      by: 'shia',
      text: { tr: 'Örtünün altındaki bu beş nura «Pence-i Âl-i Abâ» denir. Pence, Farsçada beş demektir: Hz. Peygamber, Hz. Ali, Hz. Fatıma, Hz. Hasan ve Hz. Hüseyin. Ca\'ferî yolda sevgi buradan başlar. Onlar ismet sahibidir; sonraki imamlar da onların soyundandır. Bazı geleneklerde alemlerin üstündeki açık el, bu beşi hatırlatır.' },
      art: { bg: 'night', props: ['stars'], actors: [{ kind: 'prophet', x: 20, label: { tr: 'Hz. Peygamber' } }, { kind: 'ali', x: 36, label: { tr: 'Hz. Ali' } }, { kind: 'fatima', x: 50, label: { tr: 'Hz. Fatıma' } }, { kind: 'hasan', x: 64, scale: 0.8, label: { tr: 'Hz. Hasan' } }, { kind: 'husayn', x: 76, scale: 0.8, label: { tr: 'Hz. Hüseyin' } }] },
    },
    {
      by: 'shia',
      text: { tr: 'Meclislerde «Hadis-i Kisa» adıyla okunan daha uzun bir rivayet de vardır. Rivayete göre örtünün altında Cebrail\'in ve Allah\'ın hitabı da anlatılır. Bu uzun lafız, gönüllerde Müslim ve Tirmizi\'deki kısa sahnenin bir açılımı gibi sevilir. Senedi ise Şii âlimler arasında da tartışılmıştır. Muhabbet, uzun metne değil, iki yolun da aktardığı o kısa ve sahih sahneye dayanır.' },
      art: { bg: 'interior', props: ['scroll', 'stars'], actors: [{ kind: 'fatima', x: 50, label: { tr: 'Hz. Fatıma' } }] },
    },
    {
      by: 'shia',
      text: { tr: 'Kisa, Ehl-i Beyt\'in çekirdeğini bir ayet ve bir duayla gösterir. Hz. Peygamber bu beşi kendi örtüsünün altına aldı. Sonraki imamlar onların soyundan geldiği için Ca\'ferî yol, imameti bu nura bağlar. Aynı sahne Sünni sahihlerde de Ehl-i Beyt\'in en parlak fazileti olarak durur. Sevgi burada tartışmadan önce, örtünün altındaki isimlerde başlar.' },
      art: { bg: 'dawn', props: ['sun'], actors: [{ kind: 'ali', x: 40, label: { tr: 'Hz. Ali' } }, { kind: 'hasan', x: 56, scale: 0.8, label: { tr: 'Hz. Hasan' } }, { kind: 'husayn', x: 68, scale: 0.8, label: { tr: 'Hz. Hüseyin' } }] },
    },
  ],
  sunni: [
    { book: 'Müslim, Sahih', ref: 'No. 2424 (Fezâil)', says: { tr: 'Aişe: Peygamber siyah örtü altına Hasan, Hüseyin, Fatıma ve Ali\'yi alır, Ahzâb 33:33\'ü okur.' }, grade: { tr: 'Sahih' }, url: 'https://hadithunlocked.com/muslim:2424', status: 'verified' },
    { book: 'Tirmizi, el-Câmi\'', ref: 'No. 3787 (Menâkıb; Ömer b. Ebî Seleme, Ümmü Seleme\'nin evinde). Bazı dizinlerde aynı haber 3205 diye de anılır.', says: { tr: 'Peygamber Fatıma, Hasan, Hüseyin ve Ali\'yi örtüye alıp "bunlar Ehl-i Beytimdir" diye dua eder. Ümmü Seleme "ben de mi" diye sorunca "Sen yerindesin, benim nezdimde hayırdasın" mealinde cevap alır.' }, grade: { tr: 'Tirmizi bu tarîki garib sayar; Elbânî ve Ahmed Şâkir sahih bulur' }, url: 'https://sunnah.com/tirmidhi:3787', status: 'verified' },
    { book: 'Müslim, Sahih', ref: 'No. 2408a (Zeyd b. Erkam)', says: { tr: 'Ehl-i Beyt\'in kapsamı: zekât yasaklanan aileler; hanımlar bu kapsam tartışmasında.' }, grade: { tr: 'Sahih' }, url: 'https://hadithunlocked.com/muslim:2408a', status: 'verified' },
  ],
  shia: [
    { book: 'Şeyh Müfid, el-İrşâd; Tûsî, et-Tibyân; Tabersî, Mecmau\'l-Beyân', ref: 'Ahzâb 33 ve Ehl-i Beyt bahsi (cilt ve sayfa baskıya göre değişir; bu çalışmada sayfa uydurulmamıştır)', says: { tr: 'Örtü ehlinin Ali, Fatıma, Hasan ve Hüseyin olduğu ve tathir ayetinin onlara bağlandığı Şii anlatımı.' }, status: 'check' },
    { book: 'WikiShia, Hadith al-Kisa (ikincil)', ref: 'Hadith al-Kisa maddesi', says: { tr: 'Kısa Kisa haberinin iki yoldaki geçişi ve uzun Hadis-i Kisa\'nın sened tartışması.' }, url: 'https://en.wikishia.net/view/Hadith_al-Kisa', status: 'check' },
  ],
  disputes: [
    {
      title: { tr: 'Ehl-i Beyt\'in kapsamı' },
      sunni: { tr: 'Kapsam geniştir: Peygamber\'in hanımları ve Haşimoğulları da girer; Kisa halkı bunun çekirdeğidir. Ahzâb 33:33 hanımlara hitap eden ayetlerin içinde gelir.' },
      shia: { tr: 'Ayet-i Tathir ve Kisa hadisi, ismet sahibi Ehl-i Beyt\'i Peygamber, Ali, Fatıma, Hasan ve Hüseyin ile sınırlar; imamlar bunların soyundandır.' },
    },
    {
      title: { tr: 'Ümmü Seleme neden örtünün altında değil?' },
      sunni: { tr: '"Sen hayır üzerindesin" sözü onu dışlamaz, iyilik üzerinde olduğunu bildirir; hanımların Ehl-i Beyt\'e dahil olduğu görüşünü çürütmez.' },
      shia: { tr: 'Peygamber onu örtüye almayıp ayrı tutmuştur; bu, ayetin ismet sahibi beş kişiyi özel olarak kastettiğini gösterir.' },
    },
  ],
  questions: [
    { tr: 'Peygamber beş kişiyi tek örtünün altına alıp ayeti okuduğuna göre, "Ehl-i Beyt" ifadesinin çekirdeğini sizce kimler oluşturur?' },
    { tr: 'Zeyd b. Erkam hanımları saymıyorsa, Sünni kaynaklardaki farklı görüşlerin hangisi metne daha yakındır sizce?' },
    { tr: 'Tathir ayetindeki "kiri gidermek" ifadesi, günahtan korunmuşluğu mu yoksa manevi arınmayı mı anlatır sizce?' },
  ],
  summary: { tr: 'Müslim 2424 ve Tirmizi 3787, Hz. Peygamber\'in (s.a.v.) Hz. Ali, Hz. Fatıma, Hz. Hasan ve Hz. Hüseyin\'i örtünün altına alıp onları Ehl-i Beyt diye andığını bildirir. Ca\'ferî yolda bu beş nur, ismet sahibi Ehl-i Beyt\'in çekirdeğidir. Aynı sahne Sünni sahihlerde de onların en parlak fazileti olarak durur.' },
};

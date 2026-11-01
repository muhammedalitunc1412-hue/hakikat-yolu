import type { HistEvent } from '../types';

// Kaynak: research/03-fedek-fatima.md. Yeni sayfa uydurulmadı.
// Hibe ve şahitler el-Kâfî 1/543 kaydında 'check' olarak durur. Hutbe Belâğatü'n-Nisâ'dadır, sayfa kilitlenmedi.
// Küskünlük ve gece defin Buhari 4240 ile ortaktır.
export const fedek: HistEvent = {
  id: 'fedek',
  date: { tr: '11 H (632)', en: '11 AH (632)' },
  title: { tr: 'Fedek ve Hz. Fatıma\'nın küskünlüğü', en: 'Fadak and Fatima\'s estrangement' },
  hook: { tr: 'Peygamber\'in kızına bağışladığı Fedek elinden alındı. O, hakkını ayetle söyledi ve küs vefat etti.', en: 'Why did the Prophet\'s daughter never speak to the caliph again?' },
  scenes: [
    {
      text: { tr: '**Fedek**, Medine\'nin kuzeyinde, Hayber\'e yakın bir köydü. Halkı kılıç çekmeden Peygamber ile anlaşmıştı. Toprak onun elindeydi. O da bu bağı kızına, **Hz. Fatıma**\'ya hibe etti. Bir babanın evladına verdiği helal bir haktı. ==Ehl-i Beyt==\'in geçimi, o hurma bahçesinin gölgesinde duruyordu.' },
      art: { bg: 'oasis', props: ['sun', 'palms', 'well'], actors: [{ kind: 'prophet', x: 36, label: { tr: 'Hz. Peygamber' } }, { kind: 'fatima', x: 64, label: { tr: 'Hz. Fatıma' } }] },
      by: 'shia',
      cites: [{ side: 'shia', i: 0 }],
    },
    {
      text: { tr: 'Peygamber\'in vefatının acısı daha dinmemişti. **Halife Ebu Bekir**, **Hz. Fatıma**\'nın elindeki **Fedek**\'e el koydu. Şii okuyuşta bunun bir sebebi vardır. ==Ehl-i Beyt== bu bağla ve bu mirasla ayakta kalırsa, **Hz. Ali** hilafetindeki hakkını daha güçlü savunur diye korkuldu. Hak, bir bahçe yüzünden değil, o bahçenin taşıdığı güç yüzünden alındı. Peygamber\'in kızı, babasının hediyesini kapıda beklerken eli boş kaldı.' },
      art: { bg: 'city', props: ['sun'], actors: [{ kind: 'fatima', x: 34, label: { tr: 'Hz. Fatıma' } }, { kind: 'man', x: 66, label: { tr: 'Ebu Bekir' } }] },
      by: 'shia',
      cites: [{ side: 'shia', i: 0 }, { side: 'sunni', i: 0 }],
    },
    {
      text: { tr: '**Hz. Fatıma** mescide çıktı. Sesi titremiyordu, hakkı titriyordu. **Fedek** hutbesini okudu. Karşısına konan söz şuydu: "Biz peygamberler miras bırakmayız. Bıraktığımız sadakadır." O, bu sözü Kur\'an\'ın önüne koydu. **Süleyman**, **Davud**\'a varis olmuştu. **Yahya**, **Zekeriyya**\'ya varis olmuştu. Neml 16 ve Meryem 6, peygamber çocuklarının mirasını inkâr etmiyordu. Babasının kızı, ayetin durduğu yerde durdu. Mescit, o gün bir babanın emaneti için ağlayan bir kızın sesiyle doldu.' },
      art: { bg: 'city', props: ['minbar'], actors: [{ kind: 'fatima', x: 40, pose: 'raise', label: { tr: 'Hz. Fatıma' } }, { kind: 'crowd', x: 72, scale: 5 }] },
      by: 'shia',
      cites: [{ side: 'shia', i: 1 }, { side: 'sunni', i: 0 }, { side: 'sunni', i: 1 }],
    },
    {
      text: { tr: 'Şahit getirdi. Biri eşi **Hz. Ali**\'ydi. Biri **Ümmü Eymen**\'di. Peygamber\'in evinde büyümüş, onun sevgisini görmüş kadındı. İkisi de **Fedek**\'in **Hz. Fatıma**\'ya hibe edildiğini söyledi. Şahitlik kabul edilmedi. Hakkı elinde olan kadından belge istendi. Belgeyi getirenlerin sözü yere bırakıldı. ==Ehl-i Beyt==, kendi evinin eşiğinde yabancı sayıldı.' },
      art: { bg: 'city', props: ['scroll'], actors: [{ kind: 'fatima', x: 28, label: { tr: 'Hz. Fatıma' } }, { kind: 'ali', x: 48, label: { tr: 'Hz. Ali' } }, { kind: 'woman', x: 68, label: { tr: 'Ümmü Eymen' } }] },
      by: 'shia',
      cites: [{ side: 'shia', i: 0 }],
    },
    {
      text: { tr: 'Aynı Peygamber, kızı için "Fatıma benden bir parçadır. Onu kızdıran beni kızdırmıştır" demişti. O parça kırıldı. **Hz. Fatıma** **Halife Ebu Bekir**\'e küstü. Ondan uzak durdu. Vefatına kadar onunla konuşmadı. Bu suskunluk bir kapris değildi. Babasının hediyesi, ayetin mirası ve şahitlerin sözü birden reddedilince, Peygamber\'in kızı hakkını mezara kadar taşıdı.' },
      art: { bg: 'interior', actors: [{ kind: 'fatima', x: 50, pose: 'sit', label: { tr: 'Hz. Fatıma' } }] },
      by: 'both',
      cites: [{ side: 'sunni', i: 0 }, { side: 'sunni', i: 3 }],
    },
    {
      text: { tr: 'Küskünlük burada bitmedi. Kapının önü, hastalık günleri, gece defin ve gizli kabir sonraki hikâyededir: **Eyyâm-ı Fâtımiyye**. **Hz. Ali** onu gece yıkadı, namazını kendisi kıldı ve karanlıkta defnetti. **Halife Ebu Bekir**\'e haber vermedi. Bir koca, karısının kırgınlığını kabrine kadar korudu.' },
      art: { bg: 'night', props: ['stars', 'moon'], actors: [{ kind: 'ali', x: 40, label: { tr: 'Hz. Ali' } }, { kind: 'hasan', x: 54, scale: 0.7 }, { kind: 'husayn', x: 62, scale: 0.65 }] },
      by: 'both',
      cites: [{ side: 'sunni', i: 0 }],
    },
    {
      text: { tr: 'Yüzyıllar sonra **Ömer b. Abdülaziz** **Fedek**\'i **Hz. Fatıma**\'nın soyuna iade etti. Sonraki halife yine geri aldı. Bir bahçe el değiştirdi. Kızın acısı el değiştirmedi. ==Ehl-i Beyt==\'in hakkı, verildiği gün de alındığı gün de aynı bahçeydi. Sevenler o hurmalığı, bir babanın kızına bıraktığı son helal diye anar.' },
      art: { bg: 'dawn', props: ['sun', 'palms'], actors: [{ kind: 'man', x: 40, label: { tr: 'Ömer b. Abdülaziz' } }, { kind: 'crowd', x: 70, scale: 4 }] },
      by: 'both',
      cites: [{ side: 'sunni', i: 4 }],
    },
  ],
  sunni: [
    { book: 'Buhari, Sahih', ref: 'No. 4240 (Meğâzî)', says: { tr: 'Hz. Fatıma, Halife Ebu Bekir\'den mirasını ister; reddedilir; Hz. Fatıma kızar, ölünceye kadar küs kalır; Hz. Ali geceleyin defneder, Halife Ebu Bekir\'e haber vermez; Hz. Ali sonradan biat eder.' }, grade: { tr: 'Sahih' }, url: 'https://ihadis.com/en/bukhari/hadith/4240', status: 'verified' },
    { book: 'Buhari, Sahih', ref: 'No. 3093 ve 6725', says: { tr: 'Aynı olayın paralel rivayetleri: miras talebi ve "peygamberler miras bırakmaz" cevabı.' }, grade: { tr: 'Sahih' }, status: 'check' },
    { book: 'Müslim, Sahih', ref: 'No. 1759', says: { tr: 'Peygamber mirası hakkında Halife Ebu Bekir\'in rivayeti ve Hz. Fatıma\'nın talebi.' }, grade: { tr: 'Sahih' }, status: 'check' },
    { book: 'Buhari, Sahih', ref: 'No. 3714 ve 3767; Müslim No. 2449', says: { tr: '"Hz. Fatıma benden bir parçadır; onu kızdıran beni kızdırmıştır."' }, grade: { tr: 'Sahih' }, status: 'check' },
    { book: 'Belâzurî, Fütûhu\'l-Büldân', ref: 'cilt 1, sayfa 37-41', says: { tr: 'Ömer b. Abdülaziz\'in ve Me\'mun\'un Fedek\'i Hz. Fatıma\'nın soyuna iadesi.' }, status: 'check' },
  ],
  shia: [
    { book: 'Kuleynî, el-Kâfî', ref: 'cilt 1, sayfa 543', says: { tr: 'Fedek\'in Hz. Fatıma\'ya hibe edilmesi ve şahitler.' }, grade: { tr: 'Sayfa bu turda yeniden açılmadı. El koyuşun hilafet korkusuyla okunması, Şii mektebin bu gaspı yorumudur. Ayrı bir sayfa uydurulmadı.' }, status: 'check' },
    { book: 'Ahmed b. Ebi Tâhir, Belâğatü\'n-Nisâ', ref: 'Fedek hutbesi (sayfa bu turda kilitlenmedi)', says: { tr: 'Hz. Fatıma\'nın mescitte okuduğu Fedek hutbesi. Neml 16 ve Meryem 6, peygamber çocuklarının mirasına verilen cevap olarak bu hutbenin Şii okunuşundadır.' }, status: 'check' },
    { book: 'Şeyh Müfid, el-İhtisâs', ref: 'sayfa 186', says: { tr: 'Biat sürecindeki gerginlikler.' }, status: 'check' },
  ],
  disputes: [
    {
      title: { tr: 'Fedek kime aitti?' },
      sunni: { tr: 'Fedek savaşsız alınan bir topraktı ve Peygamber\'in tasarrufundaydı. Sünni okumada o, Peygamber\'den sonra devletin sadakasıdır.' },
      shia: { tr: 'Fedek savaşsız alınan bir topraktı. Şii okumada Peygamber onu Hz. Fatıma\'ya hibe etmişti. El koyuş, Ehl-i Beyt\'i ekonomik olarak zayıf bırakmak ve Hz. Ali\'nin hilafet hakkını savunacak gücü kesmek diye okunur.' },
    },
    {
      title: { tr: '"Peygamberler miras bırakmaz"' },
      sunni: { tr: '"Peygamberler miras bırakmaz" sözü Buhari\'de Halife Ebu Bekir\'in rivayeti olarak geçer. Sünni okumada hadis sahihtir. Kur\'an\'daki miras ayetleri ilim ve peygamberlik mirası sayılır.' },
      shia: { tr: 'Hz. Fatıma bu sözün karşısına Neml 16\'yı ve Meryem 6\'yı koyar: Süleyman Davud\'a, Yahya Zekeriyya\'ya varis olmuştur. Şahit olarak Hz. Ali ve Ümmü Eymen getirilmiş, sözleri kabul edilmemiştir.' },
    },
    {
      title: { tr: 'Hz. Fatıma\'nın küskünlüğü' },
      sunni: { tr: 'Buhari 4240, Hz. Fatıma\'nın ölünceye kadar küs kaldığını ve gece defnedildiğini aktarır.' },
      shia: { tr: 'Bu küskünlük, hibe edilen Fedek\'in alınması, hutbenin ve şahitliğin reddi ile birleşir. "Onu kızdıran beni kızdırmıştır" sözü, bu acıyı Peygamber\'in acısı yapar.' },
    },
  ],
  questions: [
    { tr: 'Peygamber "Fatıma benden bir parçadır" demişti. Onun Fedek için mescitte durması, Ehl-i Beyt sevgisini nerede tutar?' },
    { tr: 'Hz. Ali ve Ümmü Eymen şahit oldu, sözleri alınmadı. Hakkı elinde olan bir kadına belge sormak size ne hissettirir?' },
    { tr: 'Hz. Fatıma küs vefat etti. Bu suskunluk, bir hakkın mezara kadar taşınması olarak size ne söyler?' },
  ],
  summary: { tr: 'Peygamber Fedek\'i Hz. Fatıma\'ya hibe etmişti. Halife Ebu Bekir buna el koydu. Hz. Fatıma mescitte Neml 16 ve Meryem 6 ile cevap verdi. Hz. Ali ile Ümmü Eymen\'in şahitliği kabul edilmedi. O, küs vefat etti. Buhari 4240 küskünlüğü ve gece defni yazar. Hibe ve şahitler el-Kâfî 1/543 kaydındadır. Hutbe Belâğatü\'n-Nisâ\'dadır. Sayfa bu turda yeniden kilitlenmedi.' },
};

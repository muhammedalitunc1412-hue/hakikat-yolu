import type { HistEvent } from '../types';

// Kaynak: research/03-fedek-fatima.md. Yeni sayfa numarası verilmedi.
// Hibe ve şahitler el-Kâfî 1/543 kaydında 'check' olarak durur. Hutbe Belâğatü'n-Nisâ'dadır, sayfa kilitlenmedi.
// Küskünlük ve gece defin Buhari 4240 ile ortaktır.
export const fedek: HistEvent = {
  id: 'fedek',
  date: { tr: '11 H (632)', en: '11 AH (632)' },
  title: { tr: 'Fedek ve Hz. Fatıma\'nın küskünlüğü', en: 'Fadak and Fatima\'s estrangement' },
  hook: { tr: 'Peygamber\'in kızına bağışladığı Fedek elinden alındı. O, hakkını ayetle söyledi ve küs vefat etti.', en: 'Why did the Prophet\'s daughter never speak to the caliph again?' },
  scenes: [
    {
      text: { tr: 'Sakife\'de biat alınırken **Hz. Ali** Medine\'de, Peygamber\'in cenazesinin başındaydı. Biat, bağlılık sözüdür. Ardından **Fedek** meselesi geldi. **Fedek**, Medine\'nin kuzeyinde, Hayber\'e yakın bir köydü. Halkı kılıç çekmeden anlaşmıştı. Peygamber bu hurma bahçesini kızına, **Hz. Fatıma**\'ya hibe etmişti. Hibe, bağış demektir. **Fedek**\'in geliri, ==Ehl-i Beyt==\'in geçiminin büyük bir kısmını karşılıyordu.' },
      art: { bg: 'oasis', props: ['sun', 'palms', 'well'], actors: [{ kind: 'prophet', x: 36, label: { tr: 'Hz. Peygamber' } }, { kind: 'fatima', x: 64, label: { tr: 'Hz. Fatıma' } }] },
      by: 'shia',
      cites: [{ side: 'shia', i: 0 }],
    },
    {
      text: { tr: 'Medine\'de Peygamber yeni vefat etmişti. Acı henüz dinmemişti. **Halife Ebu Bekir**, **Hz. Fatıma**\'nın elindeki **Fedek**\'e el koydu. Şii okuyuşta bahçe, ==Ehl-i Beyt== geliriyle güçlü kalmasın ve **Hz. Ali** hakkını bununla savunamasın diye alındı. **Hz. Fatıma** babasının bağışını elinde tutamadı.' },
      art: { bg: 'city', props: ['sun'], actors: [{ kind: 'fatima', x: 34, label: { tr: 'Hz. Fatıma' } }, { kind: 'man', x: 66, label: { tr: 'Ebu Bekir' } }] },
      by: 'shia',
      cites: [{ side: 'shia', i: 0 }, { side: 'sunni', i: 0 }],
    },
    {
      text: { tr: 'El koyuşun ardından **Hz. Fatıma** Medine mescidine çıktı. **Fedek** hutbesini okudu. Babasının bağışı elinden alındığı için üzgündü. Hakkını açık söyledi. Cemaat onu duydu. Karşısına konan söz şuydu: "Biz peygamberler miras bırakmayız. Bıraktığımız sadakadır." **Hz. Fatıma** bu söze Kur\'an ile cevap verdi. **Süleyman**, **Davud**\'a varis olmuştu. **Yahya**, **Zekeriyya**\'ya varis olmuştu. Neml 16 ve Meryem 6, peygamber çocuklarının mirasını inkâr etmiyordu. **Hz. Fatıma** hakkını bu ayetlerle savundu.' },
      art: { bg: 'city', props: ['minbar'], actors: [{ kind: 'fatima', x: 40, pose: 'raise', label: { tr: 'Hz. Fatıma' } }, { kind: 'crowd', x: 72, scale: 5 }] },
      by: 'shia',
      cites: [{ side: 'shia', i: 1 }, { side: 'sunni', i: 0 }, { side: 'sunni', i: 1 }],
    },
    {
      text: { tr: 'Hutbeden sonra **Hz. Fatıma** Medine\'de şahit getirdi. Biri eşi **Hz. Ali**\'ydi. Biri **Ümmü Eymen**\'di. **Ümmü Eymen**, Peygamber\'in evinde büyümüş, onun sevgisini yakından bilen bir kadındı. İkisi de **Fedek**\'in **Hz. Fatıma**\'ya hibe edildiğini söyledi. Şahitlik kabul edilmedi. Hakkı elinde olan **Hz. Fatıma**\'dan belge istendi. **Hz. Ali** ile **Ümmü Eymen**\'in sözü reddedildi. ==Ehl-i Beyt== kendi evinin işinde sözü dinlenmedi.' },
      art: { bg: 'city', props: ['scroll'], actors: [{ kind: 'fatima', x: 28, label: { tr: 'Hz. Fatıma' } }, { kind: 'ali', x: 48, label: { tr: 'Hz. Ali' } }, { kind: 'woman', x: 68, label: { tr: 'Ümmü Eymen' } }] },
      by: 'shia',
      cites: [{ side: 'shia', i: 0 }],
    },
    {
      text: { tr: 'Peygamber, kızı **Hz. Fatıma** için şöyle demişti: "Fatıma benden bir parçadır. Onu kızdıran beni kızdırmıştır." Şahitler reddedilince **Hz. Fatıma**, Medine\'de **Halife Ebu Bekir**\'e küstü. Ondan uzak durdu. Vefatına kadar onunla konuşmadı. Bu suskunluk bir kapris değildi. Babasının bağışı, ayetle savunduğu miras ve şahitlerin sözü birden reddedilmişti. **Hz. Fatıma** bu kırgınlığı ölünceye kadar sürdürdü.' },
      art: { bg: 'interior', actors: [{ kind: 'fatima', x: 50, pose: 'sit', label: { tr: 'Hz. Fatıma' } }] },
      by: 'both',
      cites: [{ side: 'sunni', i: 0 }, { side: 'sunni', i: 3 }],
    },
    {
      text: { tr: 'Medine\'de **Hz. Fatıma** küs vefat etti. Küskünlük burada bitmedi. **Hz. Ali** onu gece yıkadı. Namazını kendisi kıldı. Onu karanlıkta defnetti. **Halife Ebu Bekir**\'e haber vermedi. **Hz. Ali**, karısının kırgınlığını defin gününe kadar korudu. Kapının önü, hastalık günleri, gece defin ve gizli kabir sonraki hikâyededir: **Eyyâm-ı Fâtımiyye**.' },
      art: { bg: 'night', props: ['stars', 'moon'], actors: [{ kind: 'ali', x: 40, label: { tr: 'Hz. Ali' } }, { kind: 'hasan', x: 54, scale: 0.7 }, { kind: 'husayn', x: 62, scale: 0.65 }] },
      by: 'both',
      cites: [{ side: 'sunni', i: 0 }],
    },
    {
      text: { tr: 'Yüzyıllar sonra **Ömer b. Abdülaziz** **Fedek**\'i **Hz. Fatıma**\'nın soyuna iade etti. Sonraki halife aynı bahçeyi yine geri aldı. **Hz. Fatıma**\'nın acısı geçmedi. ==Ehl-i Beyt==\'in hakkı, bağışlandığı gün de el konduğu gün de aynı hurma bahçesiydi. Sevenler bu hurmalığı, Peygamber\'in kızına bıraktığı son helal mal diye anar.' },
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
    { book: 'Kuleynî, el-Kâfî', ref: 'cilt 1, sayfa 543', says: { tr: 'Fedek\'in Hz. Fatıma\'ya hibe edilmesi ve şahitler.' }, grade: { tr: 'Sayfa bu turda yeniden açılmadı. El koyuşun hilafet korkusuyla okunması, Şii mektebin bu gaspı yorumudur. Ayrı bir sayfa numarası verilmedi.' }, status: 'check' },
    { book: 'Ahmed b. Ebi Tâhir, Belâğatü\'n-Nisâ', ref: 'Fedek hutbesi (sayfa numarası ayrıca verilmedi)', says: { tr: 'Hz. Fatıma\'nın mescitte okuduğu Fedek hutbesi. Neml 16 ve Meryem 6, peygamber çocuklarının mirasına verilen cevap olarak bu hutbenin Şii okunuşundadır.' }, status: 'check' },
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
  summary: { tr: 'Peygamber Fedek\'i Hz. Fatıma\'ya hibe etmişti. Halife Ebu Bekir buna el koydu. Hz. Fatıma mescitte Neml 16 ve Meryem 6 ile cevap verdi. Hz. Ali ile Ümmü Eymen\'in şahitliği kabul edilmedi. O, küs vefat etti. Buhari 4240 küskünlüğü ve gece defni yazar. Hibe ve şahitler el-Kâfî 1/543 kaydındadır. Hutbe Belâğatü\'n-Nisâ\'dadır. Sayfa numarası ayrıca verilmedi.' },
};

import type { HistEvent } from '../types';

// Kaynak: research/03-fedek-fatima.md
export const fedek: HistEvent = {
  id: 'fedek',
  date: { tr: '11 H (632)', en: '11 AH (632)' },
  title: { tr: 'Fedek ve Hz. Fatıma\'nın küskünlüğü', en: 'Fadak and Fatima\'s estrangement' },
  hook: { tr: 'Hz. Fatıma babasının mirasını ve Fedek\'teki hakkını istedi. Küskünlüğü Buhari\'de de anlatılır.', en: 'Why did the Prophet\'s daughter never speak to the caliph again?' },
  scenes: [
    {
      text: { tr: 'Fedek, Medine\'nin kuzeyinde, Hayber yakınında bir köydü. Halkı savaşmadan Peygamber ile anlaşmıştı; bu yüzden toprak Peygamber\'in tasarrufundaydı.' },
      art: { bg: 'oasis', props: ['sun', 'palms', 'well'], actors: [{ kind: 'crowd', x: 28, scale: 4 }] },
      by: 'both',
    },
    {
      text: { tr: 'Peygamber\'in vefatından sonra Hz. Fatıma, babasından kalan malı ve Fedek üzerindeki hakkını Halife Ebu Bekir\'den istedi. Bu olay Sünni kaynaklarında da geçmektedir (Buhari, Sahih, no. 4240; Müslim, Sahih).' },
      art: { bg: 'city', props: ['sun'], actors: [{ kind: 'fatima', x: 34, label: { tr: 'Hz. Fatıma' } }, { kind: 'man', x: 66, label: { tr: 'Ebu Bekir' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Halife Ebu Bekir şöyle cevap verdi: "Resulullah\'ı şöyle derken işittim: Biz peygamberler miras bırakmayız; bıraktığımız sadakadır." Bu olay Sünni kaynaklarında da geçmektedir (Buhari, Sahih, no. 4240). Şii kaynaklarda bu hadisin tek başına rivayet edilmesi de anılır.' },
      art: { bg: 'city', props: ['sun'], actors: [{ kind: 'fatima', x: 30, label: { tr: 'Hz. Fatıma' } }, { kind: 'man', x: 66, pose: 'raise', label: { tr: 'Ebu Bekir' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Buhari\'nin rivayetine göre Hz. Fatıma buna küstü, Halife Ebu Bekir\'den uzak durdu ve vefat edene kadar onunla konuşmadı. Bu olay Sünni kaynaklarında da geçmektedir (Buhari, Sahih, no. 4240).' },
      art: { bg: 'interior', actors: [{ kind: 'fatima', x: 50, pose: 'sit', label: { tr: 'Hz. Fatıma' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Aynı Peygamber, kızı için "Hz. Fatıma benden bir parçadır; onu kızdıran beni kızdırmıştır" demişti. Bu olay Sünni kaynaklarında da geçmektedir (Buhari, Sahih; Müslim, Sahih).' },
      art: { bg: 'city', props: ['sun'], actors: [{ kind: 'prophet', x: 36, label: { tr: 'Hz. Peygamber' } }, { kind: 'fatima', x: 62, label: { tr: 'Hz. Fatıma' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Hz. Fatıma, Peygamber\'den yaklaşık altı ay sonra vefat etti. Hz. Ali onu geceleyin defnetti, cenaze namazını kendisi kıldı; Halife Ebu Bekir\'e haber verilmedi. Bu olay Sünni kaynaklarında da geçmektedir (Buhari, Sahih, no. 4240).' },
      art: { bg: 'night', props: ['stars', 'moon'], actors: [{ kind: 'ali', x: 40, label: { tr: 'Hz. Ali' } }, { kind: 'hasan', x: 54, scale: 0.7 }, { kind: 'husayn', x: 62, scale: 0.65 }] },
      by: 'both',
    },
    {
      text: { tr: 'Hz. Fatıma\'nın vefatından sonra Hz. Ali, Halife Ebu Bekir\'e biat etti. Bu olay Sünni kaynaklarında da geçmektedir (Buhari, Sahih, no. 4240). Yüzyıllar sonra Ömer b. Abdülaziz Fedek\'i Hz. Fatıma\'nın soyuna iade etti. Bu olay Sünni kaynaklarında da geçmektedir (Belâzurî, Fütûhu\'l-Büldân). Sonraki halife geri aldı.' },
      art: { bg: 'dawn', props: ['sun'], actors: [{ kind: 'ali', x: 38, label: { tr: 'Hz. Ali' } }, { kind: 'man', x: 64, label: { tr: 'Ebu Bekir' } }] },
      by: 'both',
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
    { book: 'Kuleynî, el-Kâfî', ref: 'cilt 1, sayfa 543', says: { tr: 'Fedek\'in Hz. Fatıma\'ya verilmesi ve şahitler.' }, status: 'check' },
    { book: 'Ahmed b. Ebi Tâhir, Belâğatü\'n-Nisâ', ref: 'Fedek hutbesi', says: { tr: 'Hz. Fatıma\'nın Fedek hutbesi olarak aktarılan konuşma. Bazı Sünni âlimler bu eserin atfını kabul etmez.' }, status: 'check' },
    { book: 'Şeyh Müfid, el-İhtisâs', ref: 'sayfa 186', says: { tr: 'Biat sürecindeki gerginlikler.' }, status: 'check' },
  ],
  disputes: [
    {
      title: { tr: 'Fedek kime aitti?' },
      sunni: { tr: 'Fedek savaşsız alınan bir topraktı ve Peygamber\'in tasarrufundaydı. Sünni okumada o, Peygamber\'den sonra devletin sadakasıdır.' },
      shia: { tr: 'Fedek savaşsız alınan bir topraktı ve Peygamber\'in tasarrufundaydı. Şii okumada Peygamber onu Hz. Fatıma\'ya hibe etmişti; miras hakkı da ayrıca anılır.' },
    },
    {
      title: { tr: '"Peygamberler miras bırakmaz"' },
      sunni: { tr: '"Peygamberler miras bırakmaz" sözü Buhari\'de Halife Ebu Bekir\'in rivayeti olarak geçer. Sünni okumada hadis sahihtir, başka şahitler de anılır; Kur\'an\'daki miras ayetleri ilim ve peygamberlik mirası sayılır.' },
      shia: { tr: '"Peygamberler miras bırakmaz" sözü Buhari\'de Halife Ebu Bekir\'in rivayeti olarak geçer. Şii okumada Kur\'an\'daki peygamber mirası (Süleyman-Davud, Yahya-Zekeriyya) hatırlanır ve Hz. Ali ile Hz. Fatıma\'nın bu sözden habersiz kalmış olacağı düşünülür.' },
    },
    {
      title: { tr: 'Hz. Fatıma\'nın küskünlüğü' },
      sunni: { tr: 'Buhari, Hz. Fatıma\'nın ölünceye kadar küs kaldığını aktarır. Sünni okumada bu, sahih bir hadise uymaktan doğan insani bir kırgınlıktır; sonradan barıştıklarını söyleyen rivayetler zayıf sayılır.' },
      shia: { tr: 'Buhari, Hz. Fatıma\'nın ölünceye kadar küs kaldığını aktarır. Şii okumada bu üzüntü, "onu kızdıran beni kızdırmıştır" sözüyle birlikte Ehl-i Beyt sevgisinin bir parçasıdır.' },
    },
    {
      title: { tr: 'Evin önündeki rivayet' },
      sunni: { tr: 'Hz. Ali\'nin evinde toplananlara yönelik bir tehdit, tarih kitaplarında anılır. Sünni okumada kapının yakılması, darbe ve düşük kabul edilmez.' },
      shia: { tr: 'Evin önündeki tehdit, tarih kitaplarında anılır. Şii kaynaklarda kapı, Hz. Fatıma\'nın yaralanması ve Muhsin\'in düşmesi de kısa geçer; Süleym b. Kays\'ın kitabı Şii âlimlerce de tartışılmıştır.' },
    },
  ],
  questions: [
    { tr: 'Peygamber "Hz. Fatıma benden bir parçadır" demişti. Onun üzüntüsünü sevgiyle anmak, Ehl-i Beyt\'e yakınlığı nasıl artırır sizce?' },
    { tr: 'Hz. Ali, Hz. Fatıma\'yı gece defnetti ve Halife Ebu Bekir\'e haber vermedi. Bu veda, onun Hz. Fatıma\'nın üzüntüsüne nasıl sahip çıktığını gösterir?' },
    { tr: 'Buhari, Hz. Fatıma\'nın talebini ve verilen cevabı yan yana aktarır. Onun bundan sonraki üzüntüsünü sevgiyle düşünmek size ne hissettirir?' },
    { tr: 'Ömer b. Abdülaziz Fedek\'i Hz. Fatıma\'nın soyuna iade etti. Bu iade, onun hatırasını sevgiyle yaşatmak için ne söyler sizce?' },
  ],
  summary: { tr: 'Buhari, Hz. Fatıma\'nın babasının mirasını istediğini, "peygamberler miras bırakmaz" cevabını, onun ölünceye kadar küs kaldığını ve gece defnedildiğini aktarır (Buhari, Sahih, no. 4240). Şii okumada Fedek talebi ve bu üzüntü, Ehl-i Beyt sevgisinin bir parçasıdır.' },
};

import type { HistEvent } from '../types';

// Kaynak: research/03-fedek-fatima.md
export const fedek: HistEvent = {
  id: 'fedek',
  date: { tr: '11 H (632)', en: '11 AH (632)' },
  title: { tr: 'Fedek ve Hz. Fatıma\'nın küskünlüğü', en: 'Fadak and Fatima\'s estrangement' },
  hook: { tr: 'Peygamber\'in kızı, ölünceye kadar halifeyle neden konuşmadı?', en: 'Why did the Prophet\'s daughter never speak to the caliph again?' },
  scenes: [
    {
      text: { tr: 'Fedek, Medine\'nin kuzeyinde, Hayber yakınında bir köydü. Halkı savaşmadan Peygamber ile anlaşmıştı; bu yüzden toprak Peygamber\'in tasarrufundaydı.' },
      art: { bg: 'oasis', props: ['sun', 'palms', 'well'], actors: [{ kind: 'crowd', x: 28, scale: 4 }] },
      by: 'both',
    },
    {
      text: { tr: 'Peygamber\'in vefatından sonra Hz. Fatıma, babasından kalan mal ve Fedek üzerindeki hakkını Halife Ebu Bekir\'den istedi.' },
      art: { bg: 'city', props: ['sun'], actors: [{ kind: 'fatima', x: 34, label: { tr: 'Hz. Fatıma' } }, { kind: 'man', x: 66, label: { tr: 'Ebu Bekir' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Ebu Bekir cevap verdi: "Resulullah\'ı şöyle derken işittim: Biz peygamberler miras bırakmayız; bıraktığımız sadakadır." Hadisi Ebu Bekir tek başına rivayet ettiği için Şii kaynakları bunu eleştirir.' },
      art: { bg: 'city', props: ['sun'], actors: [{ kind: 'fatima', x: 30, label: { tr: 'Hz. Fatıma' } }, { kind: 'man', x: 66, pose: 'raise', label: { tr: 'Ebu Bekir' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Buhari\'nin rivayetine göre Hz. Fatıma buna kızdı, Ebu Bekir\'i terk etti ve vefat edene kadar onunla konuşmadı.' },
      art: { bg: 'interior', actors: [{ kind: 'fatima', x: 50, pose: 'sit', label: { tr: 'Hz. Fatıma' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Aynı Peygamber, Hz. Fatıma için "Hz. Fatıma benden bir parçadır; onu kızdıran beni kızdırmıştır" demişti.' },
      art: { bg: 'city', props: ['sun'], actors: [{ kind: 'prophet', x: 36, label: { tr: 'Hz. Peygamber' } }, { kind: 'fatima', x: 62, label: { tr: 'Hz. Fatıma' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Hz. Fatıma, Peygamber\'den yaklaşık altı ay sonra vefat etti. Kocası Hz. Ali onu geceleyin defnetti, cenaze namazını kendisi kıldı ve Ebu Bekir\'e haber verilmedi.' },
      art: { bg: 'night', props: ['stars', 'moon'], actors: [{ kind: 'ali', x: 40, label: { tr: 'Hz. Ali' } }, { kind: 'hasan', x: 54, scale: 0.7 }, { kind: 'husayn', x: 62, scale: 0.65 }] },
      by: 'both',
    },
    {
      text: { tr: 'Hz. Ali, Hz. Fatıma\'nın vefatından sonra Ebu Bekir\'e biat etti. Yüzyıllar sonra Ömer b. Abdülaziz Fedek\'i Hz. Fatıma\'nın soyuna iade etti; sonraki halife geri aldı.' },
      art: { bg: 'dawn', props: ['sun'], actors: [{ kind: 'ali', x: 38, label: { tr: 'Hz. Ali' } }, { kind: 'man', x: 64, label: { tr: 'Ebu Bekir' } }] },
      by: 'both',
    },
  ],
  sunni: [
    { book: 'Buhari, Sahih', ref: 'No. 4240 (Meğâzî)', says: { tr: 'Hz. Fatıma, Ebu Bekir\'den mirasını ister; reddedilir; Hz. Fatıma kızar, ölünceye kadar küs kalır; Hz. Ali geceleyin defneder, Ebu Bekir\'e haber vermez; Hz. Ali sonradan biat eder.' }, grade: { tr: 'Sahih' }, url: 'https://ihadis.com/en/bukhari/hadith/4240', status: 'verified' },
    { book: 'Buhari, Sahih', ref: 'No. 3093 ve 6725', says: { tr: 'Aynı olayın paralel rivayetleri: miras talebi ve "peygamberler miras bırakmaz" cevabı.' }, grade: { tr: 'Sahih' }, status: 'check' },
    { book: 'Müslim, Sahih', ref: 'No. 1759', says: { tr: 'Peygamber mirası hakkında Ebu Bekir\'in rivayeti ve Hz. Fatıma\'nın talebi.' }, grade: { tr: 'Sahih' }, status: 'check' },
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
      sunni: { tr: 'Fedek savaşsız alınan "fey" topraktır ve Peygamber\'in tasarrufundaydı; Peygamber\'den sonra devletin sadakasıdır.' },
      shia: { tr: 'Peygamber Fedek\'i hayatında Hz. Fatıma\'ya hibe etmişti; ayrıca Hz. Fatıma\'nın miras hakkı da vardır.' },
    },
    {
      title: { tr: '"Peygamberler miras bırakmaz"' },
      sunni: { tr: 'Hadis sahihtir; Ebu Bekir tek değil, başka sahabilerin de buna şahit olduğu rivayet edilir. Kur\'an\'daki miras ayetleri ilim ve peygamberlik mirasıdır.' },
      shia: { tr: 'Hadisi davalı taraf rivayet ediyor. Kur\'an\'da Süleyman\'ın Davud\'a, Yahya\'nın Zekeriyya\'ya mirasçı olduğu geçiyor; üstelik Hz. Ali ve Hz. Fatıma bu hükümden habersiz kalmış olur.' },
    },
    {
      title: { tr: 'Hz. Fatıma\'nın küskünlüğü' },
      sunni: { tr: 'Hukuki bir anlaşmazlıktan doğan insani kırgınlıktır; Ebu Bekir sahih bir hadise uymuştur. Bazı rivayetlerde sonradan barıştıkları anlatılır, ancak bu rivayetler zayıf sayılır.' },
      shia: { tr: 'Buhari\'nin sahih rivayetinde Hz. Fatıma\'nın küs ölmesi, "onu kızdıran beni kızdırmıştır" hadisiyle birlikte düşünüldüğünde Ehl-i Beyt\'e yapılan haksızlığın delilidir.' },
    },
    {
      title: { tr: 'Evlerine gelme iddiası' },
      sunni: { tr: 'Sünni kaynaklarda Ömer\'in, Hz. Ali\'nin evinde toplananlara "evi yakarım" diye tehdit ettiğine dair rivayetler vardır (İbn Ebi Şeybe, Taberi, Belâzurî; sayfa numaraları kontrol edilecek). Kapının yakılması, Hz. Fatıma\'nın darbe alması ve düşük iddiası Sünni kaynaklarca reddedilir.' },
      shia: { tr: 'Süleym b. Kays ve Şii kaynaklara göre kapı yakıldı, Hz. Fatıma yaralandı ve çocuğu Muhsin düştü. Şii âlimler tehdit rivayetlerinin Sünni kaynaklarda da geçmesini bunun delili sayar. Süleym kitabının güvenirliği Şii âlimlerce de tartışılmıştır.' },
    },
  ],
  questions: [
    { tr: 'Peygamber "Hz. Fatıma benden bir parçadır; onu kızdıran beni kızdırmıştır" demişti. Buhari\'ye göre Hz. Fatıma, Ebu Bekir\'e kızdı ve ölünceye kadar onunla konuşmadı. Ebu Bekir imanlı ve adaletli biriyse, Peygamber\'in ciğerparesi neden ölene kadar onunla konuşmadı sizce?' },
    { tr: 'Hz. Fatıma\'nın cenazesinin gece defnedilip Ebu Bekir\'e haber verilmemesi, bir küskünlükten fazlasını anlatmıyor mu? Hz. Ali bunu neden yaptı?' },
    { tr: 'Peygamber\'in mirasıyla ilgili hadisi, davanın karşı tarafı olan kişi rivayet ediyorsa, bu durum davayı adil kılar mı?' },
    { tr: 'Fedek\'i yüzyıllar sonra Ömer b. Abdülaziz ve Me\'mun Hz. Fatıma\'nın soyuna iade ettiyse, bu iade kararı ne anlama gelir?' },
  ],
  summary: { tr: 'Buhari dahil Sünni kaynaklar da Hz. Fatıma\'nın miras talebini, "peygamberler miras bırakmaz" cevabını, onun ölünceye dek küs kalmasını ve gece defnini aktarır; Şii kaynaklarında bu olay, Ehl-i Beyt\'e yapılmış bir haksızlık olarak anlatılır.' },
};

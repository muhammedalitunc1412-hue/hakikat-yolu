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
      text: { tr: 'Medine\'nin kuzeyinde, Hayber\'e yakın bir yerde **Fedek** adında verimli bir hurmalık vardı. Buranın halkı, Müslümanlarla savaşmadan anlaşma yapmıştı. Savaşsız alınan topraklar doğrudan Peygamber\'in tasarrufuna bırakılırdı. **Hz. Peygamber** de bu bahçeyi kızı **Hz. Fatıma**\'ya hibe etti. Hibe, bir malı karşılıksız olarak bağışlamak demektir. Fedek\'in hurmaları her yıl Hz. Fatıma\'nın evine bereket getiriyordu. Bu gelir, ==Ehl-i Beyt==\'in geçiminin büyük kısmını karşılıyordu. Peygamber vefat ettiğinde **Hz. Ali** onun cenazesinin başındaydı ve aile derin bir yasın içindeydi. Tam o günlerde, Sakife\'de biat alınırken Fedek için de yeni bir hesap başladı.' },
      art: { bg: 'oasis', props: ['sun', 'palms', 'well'], actors: [{ kind: 'prophet', x: 36, label: { tr: 'Hz. Peygamber' } }, { kind: 'fatima', x: 64, label: { tr: 'Hz. Fatıma' } }] },
      by: 'shia',
      cites: [{ side: 'shia', i: 0 }],
    },
    {
      text: { tr: 'Peygamber\'in vefatının üzerinden çok geçmeden **Halife Ebu Bekir**, Fedek\'e el koydu. **Hz. Fatıma**, babasının kendisine bağışladığı bu toprağı geri istedi. Önce Fedek\'in kendisine hibe edildiğini söyledi. Bu kabul edilmeyince, babasının kızı olarak mirasını istedi. İki talep de geri çevrildi. Şii okuyuşuna göre bu el koyuş yalnızca bir mal meselesi değildi. Fedek\'in geliri ==Ehl-i Beyt==\'i güçlü tutuyordu. Bu gelir ellerinden alınırsa, **Hz. Ali** halifelik hakkını savunacak gücü de bulamayacaktı. Hz. Fatıma için ise mesele, babasının sözüne ve kendi hakkına sahip çıkmaktı.' },
      art: { bg: 'city', props: ['sun'], actors: [{ kind: 'fatima', x: 34, label: { tr: 'Hz. Fatıma' } }, { kind: 'man', x: 66, label: { tr: 'Ebu Bekir' } }] },
      by: 'shia',
      cites: [{ side: 'shia', i: 0 }, { side: 'sunni', i: 0 }],
    },
    {
      text: { tr: 'Bunun üzerine **Hz. Fatıma** Peygamber\'in mescidine gitti. Mescit kalabalıktı ve cemaat onun ne söyleyeceğini merakla bekliyordu. Hz. Fatıma orada, sonradan Fedek Hutbesi diye anılacak konuşmasını yaptı. Sesi, babasını yeni kaybetmiş bir kızın sesiydi, ama sözleri hakkını iyi bilen birinin sözleriydi. Kendisine söylenen söz şuydu: "Biz peygamberler miras bırakmayız. Bıraktığımız sadakadır." Hz. Fatıma buna Kur\'an\'la cevap verdi. Neml Suresi\'nin 16. ayetinde Süleyman\'ın Davud\'a varis olduğunu, Meryem Suresi\'nin 6. ayetinde de Zekeriyya\'nın oğlu Yahya\'nın ona varis olmasını istediğini hatırlattı. Peygamberlerin çocukları miras alabiliyorsa, Peygamber\'in kızı neden alamıyordu?' },
      art: { bg: 'city', props: ['minbar'], actors: [{ kind: 'fatima', x: 40, pose: 'raise', label: { tr: 'Hz. Fatıma' } }, { kind: 'crowd', x: 72, scale: 5 }] },
      by: 'shia',
      cites: [{ side: 'shia', i: 1 }, { side: 'sunni', i: 0 }, { side: 'sunni', i: 1 }],
    },
    {
      text: { tr: 'Hutbeden sonra Fedek\'in kendisine hibe edildiğini ispat etmek için **Hz. Fatıma** iki şahit getirdi. Biri eşi **Hz. Ali**\'ydi. Diğeri **Ümmü Eymen**\'di. Ümmü Eymen, Peygamber\'in çocukluğunda ona bakmış, onun evinde yaşlanmış bir kadındı. İki şahit de Peygamber\'in Fedek\'i Hz. Fatıma\'ya bağışladığını söyledi. Ama şahitlikleri kabul edilmedi. Hz. Ali\'nin sözü yetersiz sayıldı. Ümmü Eymen\'in sözü de yetersiz sayıldı. Oysa bahçe yıllardır Hz. Fatıma\'nın elindeydi. Bir malı elinde tutan kişiden belge istenmesi, Medine\'de herkesin görebileceği bir haksızlıktı.' },
      art: { bg: 'city', props: ['scroll'], actors: [{ kind: 'fatima', x: 28, label: { tr: 'Hz. Fatıma' } }, { kind: 'ali', x: 48, label: { tr: 'Hz. Ali' } }, { kind: 'woman', x: 68, label: { tr: 'Ümmü Eymen' } }] },
      by: 'shia',
      cites: [{ side: 'shia', i: 0 }],
    },
    {
      text: { tr: 'Peygamber, kızı için şöyle demişti: "Fatıma benden bir parçadır. Onu kızdıran beni kızdırmış olur." Bu hadis Sünni kaynaklarda da sahih kabul edilir. Fedek reddedilip şahitler geri çevrilince **Hz. Fatıma**, **Halife Ebu Bekir**\'e küstü. O günden sonra onunla bir daha konuşmadı. Buhari\'nin rivayetine göre bu küskünlük vefatına kadar sürdü. Hz. Fatıma\'nın kırgınlığı bir anlık bir öfke değildi. Babasının bağışı, Kur\'an\'la savunduğu mirası ve getirdiği şahitlerin sözü birer birer reddedilmişti. Peygamber\'in "Onu kızdıran beni kızdırır" dediği kız, babasının vefatından sonraki bütün günlerini bu kırgınlıkla geçirdi.' },
      art: { bg: 'interior', actors: [{ kind: 'fatima', x: 50, pose: 'sit', label: { tr: 'Hz. Fatıma' } }] },
      by: 'both',
      cites: [{ side: 'sunni', i: 0 }, { side: 'sunni', i: 3 }],
    },
    {
      text: { tr: 'Peygamber\'in vefatından altı ay sonra **Hz. Fatıma** da dünyaya gözlerini yumdu. Kırgınlığı ölümünden sonra da devam etti. **Hz. Ali**, onu gece yıkadı, namazını kendisi kıldırdı ve karanlıkta defnetti. Halife Ebu Bekir\'e haber vermedi. Bu ayrıntı Buhari\'de de geçer. Hz. Fatıma, kendisini incitenlerin cenazesine katılmasını istememişti ve Hz. Ali bu isteği yerine getirdi. Sabah olduğunda Medine halkı Peygamber\'in kızının defnedildiğini öğrendi, ama kabrinin yerini kimse bilmiyordu. Hz. Fatıma\'nın hastalık günleri, kapısının önünde yaşananlar ve gizli kabri **Eyyâm-ı Fâtımiyye** başlıklı hikâyede anlatılır.' },
      art: { bg: 'night', props: ['stars', 'moon'], actors: [{ kind: 'ali', x: 40, label: { tr: 'Hz. Ali' } }, { kind: 'hasan', x: 54, scale: 0.7 }, { kind: 'husayn', x: 62, scale: 0.65 }] },
      by: 'both',
      cites: [{ side: 'sunni', i: 0 }],
    },
    {
      text: { tr: 'Fedek\'in hikâyesi Hz. Fatıma\'nın vefatıyla bitmedi. Yıllar sonra Emevi halifesi **Ömer b. Abdülaziz**, Fedek\'i Hz. Fatıma\'nın soyuna geri verdi. Ondan sonra gelen halife bahçeyi yeniden aldı. Abbasi halifesi **Me\'mun** da Fedek\'i bir kez daha Hz. Fatıma\'nın torunlarına iade etti. Bahçe, yüzyıllar boyunca halifelerin keyfine göre el değiştirdi. Ama her iade, aslında Hz. Fatıma\'nın haklı olduğunun bir itirafıydı. Şiiler bugün Fedek\'i, Peygamber\'in kızına bıraktığı ve elinden zorla alınan helal bir mal olarak anar. Bir hurmalığın adı, Ehl-i Beyt\'e yapılan haksızlığın simgesi olmuştur.' },
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

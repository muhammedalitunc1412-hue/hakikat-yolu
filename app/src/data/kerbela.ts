import type { HistEvent } from '../types';

// Açılan sayfalar: el-İrşâd 2/78, 2/89, 2/93, 2/99, 2/109, 2/112, 2/113;
// el-Lühûf s. 148-150 ve s. 169; Taberî 5/416 ve 5/455; Bihâr 45/134.
// Eman kâğıdını yırtmak, mızrakta gezdirmek ve Zeynep'in hasta oğlun üzerine kapanması
// mektel anlatısıdır; bu turda o üçü için ayrı bir sayfa kilitlenmedi.
// Hz. Rukayye: Nefesü'l-Mehmûm 1/416 ve Müntehâ'l-Âmâl tercümesi 1/778 açıldı.
// Kâmil-i Bahâî'nin kendi sayfası açılmadı. Ad ve Şam harabesi o iki sayfada yoktur.
// Öğle namazı: Taberî 5/441, el-Lühûf s. 165, Bihâr 45/21 açıldı.
// "Oklayın, namaz kılmasın", kalkan, omuz ve bacak bu sayfalarda yoktur.
// Kollar, kırba, göz ve küpeler de mekteldedir.
export const kerbela: HistEvent = {
  id: 'kerbela',
  date: { tr: '10 Muharrem 61 H (10 Ekim 680)', en: '10 Muharram 61 AH (680)' },
  title: { tr: 'Kerbela', en: 'Karbala' },
  hook: { tr: 'Yezid\'e biat yoktu. Su kesildi. On Muharrem\'de Ehl-i Beyt şehit edildi.', en: 'No bay\'ah to Yazid. The water was cut. The Ahl al-Bayt were killed on the tenth of Muharram.' },
  scenes: [
    {
      text: { tr: 'Medine\'de biat istendi. **Yezid** dinsizdi. Şaraba düşkündü. Maymun oynatırdı. Köpek ve av eğlencesine dalardı. Zina eder, namazı terk ederdi. Vali Velid, **Hz. Hüseyin**\'den biat istedi. Biat, bağlılık sözüdür. Hz. Hüseyin dedi: "Yezid fasıktır. Şarap içer. Allah\'ın dokunulmaz kıldığı masum canları öldürür. Benim gibisi onun gibisine biat etmez." Buna şaşılmaz. Dedesi **Ebu Süfyan**, İslam\'a yıllarca savaş açmıştı. Ninesi **Hind**, Uhud\'da **Hz. Hamza**\'nın ciğerini çiğnemişti. Babası **Muaviye**, **Hz. Ali**\'ye karşı isyan etmişti. Böyle bir soydan böyle birinin çıkması doğaldı. Peygamber, Hz. Hüseyin\'i ve **Hz. Hasan**\'ı cennet gençlerinin efendisi diye anmıştı. Hz. Hasan sulh etmiş, sonra zehirlenmişti. Sıra toruna gelmişti. Hz. Hüseyin, böyle birine biat edip baş eğmedi; çünkü onun gibi biri, Yezid gibi birine asla biat etmez.' },
      image: 'kerbela-1',
      art: { bg: 'city', props: ['flags'], actors: [{ kind: 'husayn', x: 70, label: { tr: 'Hz. Hüseyin' } }, { kind: 'man', x: 28, label: { tr: 'Yezid' } }, { kind: 'man', x: 48, label: { tr: 'Velid' } }] },
      by: 'shia',
      cites: [{ side: 'sunni', i: 0 }, { side: 'shia', i: 5 }, { side: 'shia', i: 17 }, { side: 'shia', i: 18 }],
    },
    {
      text: { tr: 'Gece Medine sokakları sessizdi. **Hz. Hüseyin** ailesini topladı. **Hz. Zeynep** yanındaydı. Çocuklar uykudaydı. Kafile, Peygamber\'in kabrine vardı. Hz. Hüseyin mezara eğildi. Uzun durdu. Dudakları kımıldadı. Vedalaşıyordu. "Dedeciğim, beni çağırıyorlar. Ben de gidiyorum." Toprak serindi. Hurma kokusu vardı. Medine, onu bir daha göremeyecekti. Ehl-i Beyt, kapıdan çıkarken şehir arkada küçüldü. Yol, Mekke\'ye düşüyordu Hz. Hüseyin toprağa eğildi. Bu, bir daha dönülmeyecek bir vedaydı. Kafile sabaha Mekke yolunu tutacaktı Toprak serindi. Hz. Zeynep yanındaydı. Çocuklar uykudaydı. Kapı kapanınca şehir küçüldü. Bu veda, Kerbelâ yolunun ilk adımıydı..' },
      image: 'kerbela-17',
      art: { bg: 'night', props: ['moon', 'stars'], actors: [{ kind: 'husayn', x: 48, label: { tr: 'Hz. Hüseyin' } }, { kind: 'woman', x: 68, label: { tr: 'Zeynep' } }] },
      by: 'shia',
      cites: [{ side: 'shia', i: 19 }],
    },
    {
      text: { tr: 'Mekke\'de umre vardı. Kûfe\'den mektuplar peş peşe geldi. "Gel. Valimiz yok. Sana biat ederiz." **Hz. Hüseyin** hemen ordu sürmedi. Amcaoğlu **Müslim b. Akîl**\'i önden gönderdi. Müslim, Kûfe\'ye girdi. Evler doldu. Binlerce el biat için kalktı. Birkaç gün şehir onunla nefes aldı. Hz. Hüseyin Mekke\'de haberi bekledi. Davet, kâğıt üzerinde kalabalıktı. Mektuplar çoğaldı.' },
      image: 'kerbela-2',
      art: { bg: 'caravan', props: ['camels', 'scroll'], actors: [{ kind: 'man', x: 30, label: { tr: 'Müslim' } }, { kind: 'husayn', x: 72, label: { tr: 'Hz. Hüseyin' } }] },
      by: 'both',
      cites: [{ side: 'shia', i: 19 }],
    },
    {
      text: { tr: 'Kûfe\'de rüzgâr döndü. **Yezid**\'in valisi Ubeydullah b. Ziyâd şehre girdi. Kapılar kapandı. Dün biat edenler evlerine sindi. **Müslim b. Akîl** sokaklarda yalnız kaldı. Yakalanınca su getirildiği, fakat içemediği aktarılır. Kimsenin su vermediği diye kilitlemiyoruz. Sayfa bu turda kilitlenmedi. Yakalandı. Darağacına çıkarıldı. Şehit edildi. Baş, **Yezid**\'e gönderildi. Haber kafileye geç ulaştı. **Hz. Hüseyin** çoktan Kûfe yoluna dönmüştü. Davet, bir tuzağa dönüşmüştü. Yolculuk durmadı.' },
      image: 'kerbela-18',
      art: { bg: 'city', props: ['flags'], actors: [{ kind: 'man', x: 40, label: { tr: 'Müslim' } }, { kind: 'man', x: 72, label: { tr: 'İbn Ziyâd' } }] },
      by: 'shia',
      cites: [{ side: 'shia', i: 19 }, { side: 'shia', i: 6 }],
    },
    {
      text: { tr: 'Sarayın kapısı gölgeliydi. **Müslim b. Akîl** yakalanmıştı. Soğuk su istedi. Müslim b. Amr bir damla vermedi. Nakledilen karşılık, cehennem ateşini tatmadan içemeyeceğiydi. Sonra Amr b. Hureys su getirtir. Müslim kâseyi ağzına götürür. Ağzındaki yara suyu içmesine engel olur. İçemez. Bu susuzluk, amcasının oğlu **Hz. Hüseyin**\'in Kerbelâ\'daki susuzluğunu haber gibi durur. Savaş sırasında halka "kim su verir" diye seslendiği bu turda görülmedi. Yazılmadı.' },
      image: 'kerbela-muslim-su',
      art: { bg: 'city', props: ['flags'], actors: [{ kind: 'man', x: 40, label: { tr: 'Müslim' } }, { kind: 'man', x: 72, label: { tr: 'Amr b. Hureys' } }] },
      by: 'shia',
    },

    {
      text: { tr: 'Çöl öğle sıcağındaydı. **Hürr b. Yezid er-Riyâhî** bin atlıyla kafileyi durdurdu. Atların ağızları köpüklenmişti. Askerlerin dudakları çatlamıştı. **Hz. Hüseyin** su tulumlarını açtırdı. Kendisini tutmaya gelen adamları ve atlarını suladı. Düşmanı susuz bırakmadı. Hürr şaşırdı. Emri, kafileyi yoldan çevirmekti. Hz. Hüseyin hutbe okudu. "Beni davet ettiniz. Mektuplarınız hâlâ yanımda." Hürr, henüz kılıç çekmedi. İki ordu aynı tozun içinde yürüdü. Düşmanın atı da su içti. Hz. Hüseyin, tutmaya geleni susuz bırakmadı Atların ağızları köpüklenmişti. Askerin dudağı çatlamıştı. Hz. Hüseyin tulumları açtırdı. Hutbede mektupları hatırlattı. Hürr henüz kılıç çekmedi..' },
      image: 'kerbela-3',
      art: { bg: 'dune-day', props: ['sun', 'tents'], actors: [{ kind: 'man', x: 26, label: { tr: 'Hürr' } }, { kind: 'husayn', x: 62, label: { tr: 'Hz. Hüseyin' } }] },
      by: 'both',
      cites: [{ side: 'shia', i: 0 }],
    },
    {
      text: { tr: '2 Muharrem\'di. Atlar bir ovada durdu. **Hz. Hüseyin** yerin adını sordu. "Kerbelâ" dediler. Kerbelâ, kerb ve belâ çölüdür. Kerb, kederdir. Belâ, ağır sınavdır. Hz. Peygamber, Hz. Hüseyin\'e şehit edileceği yerin adını önceden böyle haber vermişti. Cebrail, Kerbelâ\'dan bir avuç toprak getirmiş, **Ümmü Seleme**\'ye emanet etmişti. "Bu toprak kana dönüşünce Hz. Hüseyin şehit edilmiştir" demişti. Hz. Hüseyin adını duyunca dedi: "Burası kerb ve belâ yeridir. İnin. Burada kanımız dökülecek." Sonra bu toprağı satın aldı. Nineva ve Gâdiriye halkından, yaklaşık dört mil eninde ve dört mil boyunda bir yeri, 60.000 dirheme aldı. Ardından aynı toprağı onlara sadaka olarak bağışladı. Şart şuydu: kabrini ziyarete gelenlere yolu gösterecekler ve onları üç gün ağırlayacaklardı. Çadırlar kuruldu. **Ömer b. Sa\'d**, **Yezid**\'in valisi adına orduyla geldi. Rey valiliğini istiyordu. Karşılığında Hz. Hüseyin\'in üzerine yürümesi emredilmişti. Ova bir ordugâha döndü. Kafile küçüktü. Karşı yamaç kalabalıktı.' },
      image: 'kerbela-19',
      art: { bg: 'dune-dusk', props: ['tents', 'flags'], actors: [{ kind: 'husayn', x: 60, label: { tr: 'Hz. Hüseyin' } }, { kind: 'man', x: 28, label: { tr: 'Ömer b. Sa\'d' } }] },
      by: 'shia',
      cites: [{ side: 'shia', i: 22 }, { side: 'shia', i: 23 }],
    },
    {
      text: { tr: '7 Muharrem\'de Fırat kesildi. Şehadete üç gün vardı. Su, çadırın yanında akıyordu. İçmek yasaktı. Yasak, **Yezid**\'in Kûfe\'deki emrinden iniyordu. Çocuklar ağzını açtı. Kadınlar sustu. **Hz. Hüseyin** de susadı. Hâne henüz vakarını koruyordu. Giysiler temizdi. Duruşlar ağırbaşlıydı. **Muaviye**\'nin kurduğu saltanat, torunun çocuklarına bir yudum suyu çok gördü. Gece rüzgârı toz taşıdı. Sabah yine susuzluk vardı.' },
      image: 'kerbela-4',
      art: { bg: 'river', props: ['tents', 'flags'], actors: [{ kind: 'husayn', x: 70, label: { tr: 'Hz. Hüseyin' } }, { kind: 'woman', x: 40, label: { tr: 'Zeynep' } }, { kind: 'crowd', x: 22, scale: 4 }] },
      by: 'both',
      cites: [{ side: 'sunni', i: 3 }, { side: 'shia', i: 5 }],
    },
    {
      text: { tr: 'Gece çadırın içi sıcaktı. Çocuklar dudaklarını ıslatacak bir şey aradı. Kadınlar seslerini alçalttı. **Hz. Hüseyin** de susuzdu. Giysiler henüz düzgündü. Bel kırılmadı. Fırat yakındı. İçmek yasaktı. Yasak, **Yezid**\'in Kûfe\'deki emrinden iniyordu. Sabah yine aynı susuzluk vardı. Bu, üç günün ağırlığıydı.' },
      image: 'kerbela-susuzluk',
      art: { bg: 'night', props: ['tents', 'moon'], actors: [{ kind: 'husayn', x: 58, label: { tr: 'Hz. Hüseyin' } }, { kind: 'woman', x: 34, label: { tr: 'Hz. Zeynep' } }, { kind: 'crowd', x: 78, scale: 4 }] },
      by: 'both',
    },

    {
      text: { tr: '9 Muharrem akşamıydı. Perşembe. Aşûrâ\'dan bir gün önce. **Şimr b. Zi\'l-Cevşen** kafilenin önüne geldi. Onları "kız kardeşimin oğulları" diye çağırdığı nakledilir. Bu, aynı ana soyu diye anılır. Öz dayı diye kilitlenmedi. Anaları **Ümmü\'l-Benîn**\'di. Eman, can güvenliği sözüdür. Komutanlık vaadi bu turda ayrıca kilitlenmedi. Şimr, **Yezid** adına konuştu. "Hz. Hüseyin\'le ölmeyin." Gençler karşılık verdi: "Allah seni de emanını da lanetlesin. Resûlullah\'ın oğluna eman yokken bize mi eman?" **Hz. Abbas** bağladı: "Ellerin kurusun. Kardeşimiz Hz. Hüseyin\'i bırakıp lanetlilerin itaatine mi girelim?" Eman kâğıdını yırttı. Attı. Çadırda **Hz. Zeynelâbidîn** hastaydı. **Hz. Zeynep** başında bekliyordu.' },
      image: 'kerbela-5',
      art: { bg: 'dune-dusk', props: ['tents', 'scroll'], actors: [{ kind: 'man', x: 28, label: { tr: 'Şimr' } }, { kind: 'man', x: 55, label: { tr: 'Abbas' }, pose: 'raise' }, { kind: 'woman', x: 78, label: { tr: 'Zeynep' } }] },
      by: 'both',
      cites: [{ side: 'shia', i: 6 }, { side: 'sunni', i: 4 }, { side: 'shia', i: 7 }, { side: 'shia', i: 8 }, { side: 'shia', i: 5 }],
    },
    {
      text: { tr: 'Çadırların önü tozdu. **Hz. Zeynep** çocukların yanındaydı. Hasta değildi. Küçükleri eteğinin dibinde tuttu. Korkuyu onlardan uzak tutmaya çalıştı. Bu resimde hasta bir yetişkin yoktur. Hastalık, Hz. Zeynelâbidîn\'indir ve ayrı sahnededir. Hz. Zeynep ayaktaydı. Evi ve çocukları gözetti.' },
      image: 'kerbela-zeynep-1',
      art: { bg: 'night', props: ['tents', 'moon'], actors: [{ kind: 'woman', x: 36, label: { tr: 'Hz. Zeynep' } }, { kind: 'man', x: 68, label: { tr: 'Hz. Zeynelâbidîn' }, pose: 'sit' }] },
      by: 'shia',
      cites: [{ side: 'shia', i: 8 }],
    },
    {
      text: { tr: 'Hasta olan **Hz. Zeynelâbidîn**\'di. Savaşa bu yüzden çıkamadı. Onu öldürmek isteyenler oldu. "Bu hastalık ona yeter" diyen de oldu. **Hz. Zeynep** hasta değildi. Yeğeninin başında durdu. Onu savundu. Esarette Kûfe\'ye ve Şam\'a bu hastalıkla götürüldü. Hasta olan oydu. Hz. Zeynep hasta değildi.' },
      image: 'kerbela-seccad-1',
      art: { bg: 'night', props: ['tents', 'moon'], actors: [{ kind: 'man', x: 46, label: { tr: 'Hz. Zeynelâbidîn' }, pose: 'sit' }, { kind: 'woman', x: 72, label: { tr: 'Hz. Zeynep' } }] },
      by: 'shia',
    },

    {
      text: { tr: '9 Muharrem gecesiydi. **Ömer b. Sa\'d** sabaha kadar mühlet verdi. **Hz. Hüseyin** dostlarını ve yolda katılanları topladı. Çadırın fitili kısık yanıyordu. Bey\'atini üzerlerinden kaldırdı. "Geceyi, karanlığını deve gibi kullanın. Gidin. Benimle kalmak zorunda değilsiniz. Yezid beni istiyor." Bazıları gerçekten karanlıktan faydalanıp onu bırakıp gitti. Yolda ganimet umuduyla katılan bedeviler, özellikle Kûfe\'nin düştüğü ve **Müslim b. Akîl**\'in şehit edildiği duyulunca, çoğunlukla dağılmıştı. Geriye az sayıda sadık insan kaldı. Kalanlar söz verdi. **Hz. Abbas** dedi: "Bin kere öldürülüp diriltilsem yine seni bırakmam." **Müslim b. Avsece** aynı sözü söyledi. **Züheyr** de: "Bin kere öldürülüp diriltilsem yine seni bırakmam." Gece ibadetle doldu. Kur\'an okundu. Kılıçlar kınında, alınlar secdeye değdi. Sabahı bu sadakat karşıladı.' },
      image: 'kerbela-20',
      art: { bg: 'night', props: ['tents', 'stars'], actors: [{ kind: 'husayn', x: 46, label: { tr: 'Hz. Hüseyin' }, pose: 'sit' }, { kind: 'crowd', x: 72, scale: 5 }] },
      by: 'shia',
      cites: [{ side: 'shia', i: 19 }, { side: 'shia', i: 20 }],
    },
    {
      text: { tr: 'Aşûrâ sabahı güneş kırmızı doğdu. 10 Muharrem\'di. **Hz. Hüseyin** ata bindi. Ordunun önüne geldi. Sesi ovada yükseldi. "Beni tanımıyor musunuz? Ben Resûlullah\'ın torunuyum. Babam Hz. Ali\'dir. Anam Fatıma\'dır." Karşı safta bazıları başını eğdi. Hutbe bitince ok yağmuru hazırlandı. O sabah İslam\'ın yolu ikiye ayrıldı. Bir yanda saltanat vardı. Öbür yanda susuz bir çadır vardı Ses ovada yükseldi. Karşı safta bazıları başını eğdi. Bir yanda saltanat, öbür yanda susuz bir çadır vardı Güneş kırmızı doğdu. Hz. Hüseyin ata bindi. Babam Hz. Ali\'dir, anam Hz. Fâtıma\'dır, dediği hutbe bu sabahın hutbesidir. Ok yağmuru hutbeden sonra hazırlandı..' },
      image: 'kerbela-21',
      art: { bg: 'dawn', props: ['sun', 'flags'], actors: [{ kind: 'husayn', x: 55, label: { tr: 'Hz. Hüseyin' }, pose: 'raise' }, { kind: 'crowd', x: 24, scale: 7 }] },
      by: 'shia',
      cites: [{ side: 'shia', i: 19 }, { side: 'shia', i: 20 }],
    },
    {
      text: { tr: 'Hutbe bitince çadıra dönüldü. İçerisi loştu. **Hz. Zeynep** ayaktaydı. Çocuklar eteğine yakın duruyordu. Hasta değildi. **Hz. Zeynelâbidîn** yatakta yatıyordu. Savaşa çıkamayacak kadar hastaydı. Hz. Hüseyin onlara baktı. Vedanın son bakışıydı. Dışarıda ok hazırlanıyordu. İçeride ses alçaktı. Bu sabah, evin dağılacağı sabahdı. Kimse bu bakışı unutmasın diye anlatılır. Yeni bir konuşma uydurulmadı.' },
      image: 'kerbela-cadir-sabah',
      art: { bg: 'interior', props: ['tents'], actors: [{ kind: 'woman', x: 36, label: { tr: 'Hz. Zeynep' } }, { kind: 'husayn', x: 68, label: { tr: 'Hz. Hüseyin' } }] },
      by: 'shia',
    },

    {
      text: { tr: 'Aşûrâ sabahı **Hürr** titredi. Atının yularını çekti. "Cennet ile ateş arasındayım" dedi. Atını sürdü. **Hz. Hüseyin**\'in yanına geldi. İndi. "Seni yolda tutan bendim." Hz. Hüseyin onu affetti. Saf değiştirdi. İlk safta savaştı. Aynı sabah şehit oldu. Hz. Hüseyin başında durdu. "Sen hürsün, annen de seni hür doğurmuş." Bu tövbe, **Yezid**\'in ordusundan kopan bir vicdandı. Ova, ilk kanını bu dönüşten gördü.' },
      image: 'kerbela-6',
      art: { bg: 'dawn', props: ['sun', 'flags'], actors: [{ kind: 'man', x: 32, label: { tr: 'Hürr' }, pose: 'raise' }, { kind: 'husayn', x: 68, label: { tr: 'Hz. Hüseyin' } }] },
      by: 'both',
      cites: [{ side: 'shia', i: 1 }],
    },
    {
      text: { tr: 'Sonra ashab tek tek çıktı. **Habîb b. Muzâhir**, **Hz. Ali**\'nin eski dostuydu. Saçı ağarmıştı. Meydanda gençler gibi vuruştu. **Züheyr b. Kayn** hac yolundan dönmüş, kafileye katılmıştı. Kılıcı düşünceye kadar inmedi. Ehl-i Beyt rivayetinde **Vehb** de çıktı. Annesi onu geri gönderdi. "Oğlum, Peygamber\'in torununun önünde dur." Vehb döndü. Şehit oldu. Her biri kendi adıyla gitti. Çadırın önü her dönüşte biraz daha sessizleşti. Habîb\'in saçı ağarmıştı. Züheyr hac yolundan dönmüş, kafileye katılmıştı. Vehb\'i annesi geri gönderdi. Peygamber\'in torununun önünde dur, dediği nakledilir. Her biri kendi adıyla gitti..' },
      image: 'kerbela-22',
      art: { bg: 'battle', props: ['flags', 'swords'], actors: [{ kind: 'man', x: 28, label: { tr: 'Habîb' } }, { kind: 'man', x: 48, label: { tr: 'Züheyr' } }, { kind: 'husayn', x: 74, label: { tr: 'Hz. Hüseyin' } }] },
      by: 'shia',
      cites: [{ side: 'shia', i: 19 }, { side: 'shia', i: 5 }],
    },
    {
      text: { tr: 'Aşûrâ öğlesiydi. Sabahın şehitleri yerdeydi. **Hürr** gitmişti. Henüz **Hz. Abbas** ve **Ali Ekber** meydana çıkmamıştı. **Yezid**\'in ordusu savaşı dine yamamıştı. Biat etmeyen, halifeye baş kaldırmış sayılıyordu. **Ebû Sümâme** namazı hatırlattı. **Hz. Hüseyin** göğe baktı. "İlk vakit budur." Düşmana haber salındı: namaz bitene kadar durun. **Husayn b. Nümeyr** bağırdı: "O namaz kabul olmaz." **Habîb** karşılık verdi: "Resûlullah\'ın oğlunun namazı kabul olmaz da seninki mi olur?" Ehl-i Beyt rivayetinde komutanlar seslendi: oklayın, namaz kılmasın. **Züheyr** ile **Saîd b. Abdullah el-Hanefî** öne geçti. Saîd bedeniyle siper oldu. Kımıldamadı. On üç okla şehit düştü. Namaz, okların altında bitti Öğle vaktiydi. Hz. Hüseyin göğe baktı. İlk vakit budur, dedi. Düşmandan namaz bitene kadar durmaları istendi. Saîd bedeniyle siper oldu. On üç okla şehit düştü. Namaz, okların altında bitti..' },
      image: 'kerbela-7',
      art: { bg: 'dune-day', props: ['sun', 'flags'], actors: [{ kind: 'husayn', x: 58, label: { tr: 'Hz. Hüseyin' }, pose: 'sit' }, { kind: 'man', x: 30, label: { tr: 'Saîd' } }, { kind: 'crowd', x: 78, scale: 5 }] },
      by: 'both',
      cites: [{ side: 'sunni', i: 5 }, { side: 'shia', i: 14 }, { side: 'shia', i: 15 }, { side: 'shia', i: 16 }],
    },
    {
      text: { tr: '**Ali Ekber** meydana çıktı. **Hz. Hüseyin**\'in oğluydu. Yüzü Peygamber\'e benzerdi. Babası ona baktı. Gözleri doldu. "Allah\'ım, bunlara karşı sana şikâyetçiyim. Senin Resulüne en çok benzeyen genci öldürüyorlar." Ali Ekber at sürdü. Karşı safta şaşkınlık oldu. Ali Ekber güzeldi ve cesurdu. Kılıcı parladı. Sonra oklar yetişti. Babasının kucağına döndü. Hz. Hüseyin onu yere koydu. Çadırdan bir çığlık koptu. Meydan, bir oğulun adıyla sustu. Yüzü Peygamber\'e benzerdi. Babasının gözü doldu. Meydan bir oğulun adıyla sustu.' },
      image: 'kerbela-9',
      art: { bg: 'battle', props: ['flags', 'swords'], actors: [{ kind: 'husayn', x: 36, label: { tr: 'Hz. Hüseyin' } }, { kind: 'man', x: 62, label: { tr: 'Ali Ekber' }, pose: 'raise' }] },
      by: 'shia',
      cites: [{ side: 'shia', i: 5 }, { side: 'shia', i: 19 }],
    },
    {
      text: { tr: 'Sıra **Hz. Kasım**\'a geldi. **Hz. Hasan**\'ın oğluydu. Yaşı küçüktü. Amcasından meydana çıkmak için izin istedi. **Hz. Hüseyin** duraksadı. Sonra Hz. Kasım\'a savaşa çıkması için izin verdi. Ehl-i Beyt rivayetinde Hz. Kasım\'a ölüm sorulmuştu. O, "Baldan tatlı" demişti. Meydana çıktı. Küçük kılıcı elinde büyük duruyordu. Karşı ordu bir çocuğa saldırdı. İbn Fudayl el-Ezdî\'nin darbesiyle mübarek başı yarıldı. Amcasına seslendiği nakledilir. Hz. Hüseyin yetişti. Onu bağrına bastı. Naaşını Hâşimoğullarının şehitlerinin yanına koydu. Kesik baş taşıması diye yazılmadı. Çadırın eşiğinde bir yeğen daha eksildi. Hz. Hasan\'ın sulhu, oğlunun kanıyla bu ovada anıldı.' },
      image: 'kerbela-23',
      art: { bg: 'battle', props: ['flags'], actors: [{ kind: 'husayn', x: 40, label: { tr: 'Hz. Hüseyin' } }, { kind: 'man', x: 66, label: { tr: 'Hz. Kasım' }, scale: 0.75 }] },
      by: 'shia',
      cites: [{ side: 'shia', i: 20 }, { side: 'shia', i: 5 }],
    },
    {
      text: { tr: 'Çadırlarda kız çocukları susuzluktan ağlıyordu. Başta **Hz. Sekine** vardı. "Su! Amca, su!" diye bağırıyorlardı. **Hz. Abbas** bu çığlığa dayanamadı. Kırbayı aldı. Düşman saflarını yardı. Vuruşa vuruşa Fırat\'a ulaştı. Kendisi de susuzdu. Suyu avucuna aldı. **Hz. Hüseyin** susuzken içmedi. Avucundaki suyu geri döktü. Kırbayı doldurup çadırlara dönmek istedi. O kadar yakışıklı ve heybetliydi ki ona Kamer-i Benî Hâşim denirdi. Anlamı, Hâşimoğullarının Ayı\'dır. Yüzü nurlu, boyu uzundu. Ata bindiğinde ayağı yere değerdi. Gücü Benî Hâşim\'in en sağlam kolu diye anılırdı. Sancağı da o tutardı. Dönüşte şehit düştü. Su çadırlara ulaşmadı. **Hz. Hüseyin** kardeşinin yanına vardı. "Şimdi belim kırıldı." Su yine **Yezid**\'in ordusunun elinde kaldı.' },
      image: 'kerbela-8',
      art: { bg: 'river', props: ['flags'], actors: [{ kind: 'man', x: 34, label: { tr: 'Abbas' }, pose: 'raise' }, { kind: 'husayn', x: 66, label: { tr: 'Hz. Hüseyin' } }] },
      by: 'shia',
      cites: [{ side: 'shia', i: 2 }, { side: 'shia', i: 5 }, { side: 'shia', i: 7 }],
    },
    {
      text: { tr: '**Hz. Zeynep**, üç gündür su yüzü görmeyen bebeği çıkardı. Adı **Ali Asgar**\'dı. Küçük yüzü güzeldi. Boğazı susuzdu. **Hz. Hüseyin** onu ordunun önüne kaldırdı. "Bu çocuk size ne yaptı? Bir yudum su verin." Yaylar gerildi. **Harmala**\'nın oku boğaza saplandı. Bebek babasının avucunda kanadı. Hz. Hüseyin kanı toprağa serpti. "Katına geldiğimizde senin katından razı ol." Çadır ağladı. Ova, en küçük bedeni de aldı. Üç gündür su yüzü görmeyen bir bebek, ordunun önüne kaldırıldı. Çadır ağladı.' },
      image: 'kerbela-10',
      art: { bg: 'dune-day', props: ['sun', 'tents'], actors: [{ kind: 'husayn', x: 55, label: { tr: 'Hz. Hüseyin' }, pose: 'raise' }, { kind: 'woman', x: 30, label: { tr: 'Zeynep' } }] },
      by: 'both',
      cites: [{ side: 'shia', i: 3 }],
    },
    {
      text: { tr: 'Öğleden sonra meydan **Hz. Hüseyin**\'e kaldı. Yalnızdı. Sağına baktı. Soluna baktı. "Bize yardım edecek yok mu?" diye seslendi. Ses çadırlara çarptı. Hasta oğlu yataktaydı. Kadınlar tuttu. Hz. Hüseyin kılıcını çekti. Kahramanca vuruştu. Bir orduya karşı tek beden olarak vuruştu. Yaralandı. Düştü. Ehl-i Beyt rivayetinde son hali secdedir. Alnı toprakta, Allah\'a teslim. **Sinân** mızrağı sapladı. **Havlî** başı kesmek için indi ve titredi. **Şimr** indi. Onu boğazladı. Başını kestiler. Ova bir an sustu. Saltanat, secde halindeki bir imamı yenmiş sandı.' },
      image: 'kerbela-11',
      art: { bg: 'battle', props: ['flags', 'swords'], actors: [{ kind: 'husayn', x: 50, label: { tr: 'Hz. Hüseyin' }, pose: 'sit' }, { kind: 'man', x: 28, label: { tr: 'Şimr' } }, { kind: 'crowd', x: 78, scale: 6 }] },
      by: 'shia',
      cites: [{ side: 'shia', i: 9 }, { side: 'shia', i: 5 }],
    },
    {
      text: { tr: 'Ova bir an sustu. Toz inmeden isimler kaldı. **Hz. Hüseyin** yerdeydi. **Hz. Abbas** ırmağın kenarında anılacaktı. **Ali Ekber** benzer yüzüyle anılacaktı. **Hz. Kasım**\'ın naaşı Hâşimoğullarının yanındaydı. **Hz. Zeynep** ayaktaydı. Hasta olan **Hz. Zeynelâbidîn**\'di. Çadırlar henüz yağmalanmamıştı. Bir sonraki adım esaretti. Bu sessizlik, zafer çığlığı değildi. Zulüm, kendi sessizliğinde de utançtı.' },
      image: 'kerbela-sukut',
      art: { bg: 'dune-dusk', props: ['sun', 'tents'], actors: [{ kind: 'woman', x: 40, label: { tr: 'Hz. Zeynep' } }, { kind: 'crowd', x: 72, scale: 4 }] },
      by: 'shia',
    },

    {
      text: { tr: '**Ömer b. Sa\'d** bağırdı. "Hz. Hüseyin\'in göğsünü atına çiğnetecek kim var?" On kişi çıktı. Atlar göğsü ve sırtı ezdi. Ölümden sonra cesede yapılan bu iş, ordunun utancıydı. Toz kalktı. Kan toprağa karıştı. **Yezid**\'in zaferi, bir secde yerini çiğnemek oldu. Uzaktan çadırlar bunu gördü. Toz kalktı. Kan toprağa karıştı. Bu, ölümden sonra cesede yapılan bir utançtı. Çadırdakiler gördü. Sesleri kısık kaldı. Ömer b. Sa\'d, göğsü atına çiğnetecek kim var, diye bağırdığı nakledilir. On kişi çıktı. Uzaktan çadırlar bunu gördü..' },
      image: 'kerbela-12',
      art: { bg: 'battle', props: ['flags'], actors: [{ kind: 'crowd', x: 30, scale: 6 }, { kind: 'man', x: 70, label: { tr: 'Ömer b. Sa\'d' } }] },
      by: 'both',
      cites: [{ side: 'sunni', i: 1 }, { side: 'shia', i: 10 }],
    },
    {
      text: { tr: 'Çadırlara girildi. Eşya yağmalandı. Ateş verildi. Kadınların örtüsü sırtından çekilip alındı. Küçük kızların küpeleri çekildi. Dün temiz giyinen hâne, esaretin eşiğinde soyuldu. İçerde **Hz. Zeynelâbidîn** yatıyordu. Hastalığı ağırdı. Bu yüzden meydana çıkamamıştı. "Şu hastayı öldürelim mi?" denildi. Humeyd b. Müslim onları geri çevirdi. **Hz. Zeynep** yeğeninin üzerine kapandı. Onu kendi bedeniyle örttü. Böylece Hz. Zeynelâbidîn sağ kaldı. Esaret, bu çadırdan başladı Hz. Zeynep hasta değildi. Hasta yeğeninin üzerine kapandı. Böylece Hz. Zeynelâbidîn sağ kaldı.' },
      image: 'kerbela-13',
      art: { bg: 'night', props: ['tents', 'moon'], actors: [{ kind: 'woman', x: 40, label: { tr: 'Zeynep' } }, { kind: 'man', x: 68, label: { tr: 'Seccad' }, pose: 'sit' }] },
      by: 'shia',
      cites: [{ side: 'shia', i: 10 }, { side: 'shia', i: 5 }, { side: 'shia', i: 8 }],
    },
    {
      text: { tr: 'Aşûrâ\'nın aynı günü **Ömer b. Sa\'d**, **Hz. Hüseyin**\'in başını Havlî ve Humeyd ile Kûfe\'ye, **İbn Ziyâd**\'a gönderdi. Diğer şehitlerin başları da yola çıktı. Sayı yetmiş ikiydi. Ehl-i Beyt rivayetinde başlar mızraklara takıldı. Kûfe sokaklarında gezdirildi. Halk pencereden baktı. Dün mektup yazan şehir, bugün başları seyretti. Yol burada bitmedi. Şam, **Yezid**\'i bekliyordu..' },
      image: 'kerbela-14',
      art: { bg: 'city', props: ['flags'], actors: [{ kind: 'crowd', x: 28, scale: 7 }, { kind: 'man', x: 70, label: { tr: 'İbn Ziyâd' } }] },
      by: 'both',
      cites: [{ side: 'shia', i: 10 }, { side: 'shia', i: 5 }],
    },
    {
      text: { tr: 'Esir kafilesi Kûfe yoluna düştü. Toz, ayakları örttü. **Hz. Zeynep** hasta değildi. Çocukların ve kadınların yanındaydı. **Hz. Zeynelâbidîn** hastaydı. Onu gözetti. Başlar önden gidiyordu. Şehir, dün mektup yazan şehirdi. Bugün esir hâne pencerelerin önünden geçti. **Hz. Zeynep**\'in sözü daha Şam\'da yükselecekti.' },
      image: 'kerbela-esir-yol',
      art: { bg: 'dune-day', props: ['sun', 'flags'], actors: [{ kind: 'woman', x: 40, label: { tr: 'Hz. Zeynep' } }, { kind: 'crowd', x: 70, scale: 5 }] },
      by: 'shia',
    },
    {
      text: { tr: 'Kûfe\'nin pencereleri açıktı. Dün mektup yazanlar bugün baktı. Başlar sokakta gezdirildiği, Ehl-i Beyt rivayetinde anlatılır. Her kitapta aynı sayfa diye kilitlenmedi. **Hz. Zeynep** esirlerin yanındaydı. Hasta değildi. **Hz. Zeynelâbidîn** hastaydı. Şehir susmuştu. Utanç, pencereden bakanın yüzündeydi. Yol burada bitmedi. Şam duruyordu.' },
      image: 'kerbela-kufe-pencere',
      art: { bg: 'city', props: ['flags'], actors: [{ kind: 'crowd', x: 30, scale: 6 }, { kind: 'woman', x: 72, label: { tr: 'Hz. Zeynep' } }] },
      by: 'shia',
    },


    {
      text: { tr: 'Esir kafilesi Şam yoluna çıkarılırken Kûfe zindanında iki çocuk kaldı. **Müslim b. Akîl**\'in yetimleriydi. Adları **Muhammed** ve **İbrahim**\'di. Halk onlara Tiflân-ı Müslim, Müslim\'in yetimleri der. Babaları, Hz. Hüseyin\'i çağırmak için Kûfe\'ye gelmiş, sonra yalnız bırakılıp şehit edilmişti. Çocuklar bir yıl zindanda kaldı. Bir zindancı onların hâlini gördü. Yüreği dayanamadı. Gece kapıyı açtı ve onları salıverdi. İki kardeş karanlıkta bir kadının kapısını çaldı. Kadın onları içeri aldı, doyurdu, yatırdı. Kocası **Hâris**, **İbn Ziyâd**\'ın bu çocuklar için ödül koyduğunu biliyordu. Ödül, merhametten ağır bastı. Gece çocukları alıp Fırat kıyısına götürdü. Muhammed ve İbrahim namaz kılmak için izin istedi. Hâris durdu. Kardeşler abdest aldı, namazı kıldı ve birbirlerine sarıldı. Küçük olan, "Kardeşim, sen önce dayan, ben seni göreyim" diye yalvardı. Hâris ikisini de şehit etti. Ayrıntıyı uzatmaya gerek yok. Emevi zulmü Kerbela\'da bitmemişti. Yetim iki çocuğa da kıymıştı. Haber **İbn Ziyâd**\'a gidince o bile durakladı. Hâris\'i cezalandırdı. Ödül için yetim avlayan adam, kendi efendisinin elinden kurtulamadı İki kardeş namaz kıldı. Birbirine sarıldı. Ayrıntı uzatılmadı. Emevi zulmü yetime de kıydı.' },
      image: 'kerbela-25',
      art: { bg: 'night', props: ['moon'], actors: [{ kind: 'man', x: 34, label: { tr: 'Muhammed' }, scale: 0.78 }, { kind: 'man', x: 52, label: { tr: 'İbrahim' }, scale: 0.7 }, { kind: 'man', x: 80, label: { tr: 'Hâris' } }] },
      by: 'shia',
      cites: [{ side: 'shia', i: 24 }],
    },
    {
      text: { tr: 'Esir kafilesi Şam\'a vardı. **Yezid**\'in sarayı ışıklıydı. Baş, meclisin önüne kondu. Yezid bir çubukla **Hz. Hüseyin**\'in dudağına vurdu. **Hz. Zeynep** ayağa kalktı. Zinciri vardı. Sesi meclisi titretti. Yezid\'i, soyunu ve bu zafer sandığı şeyi yüzüne vurdu. "Senin elindeki bu baş, Peygamber\'in torununun başıdır." Ebu Berze itiraz etti. "Resulullah bu dudağı öperken gördüm." Saltanat eğleniyordu. Zeynep onu rezil etti. Söz, kılıçtan uzun yaşadı.' },
      image: 'kerbela-15',
      art: { bg: 'interior', props: ['flags'], actors: [{ kind: 'woman', x: 40, label: { tr: 'Zeynep' }, pose: 'raise' }, { kind: 'man', x: 72, label: { tr: 'Yezid' } }, { kind: 'crowd', x: 22, scale: 4 }] },
      by: 'shia',
      cites: [{ side: 'shia', i: 4 }, { side: 'sunni', i: 2 }],
    },
    {
      text: { tr: 'Meclisten sonra Şam harabesinde gece oldu. **Yezid** esir hâneyi viraneye kapatmıştı. Duvarlar ıslaktı. İçerde **Hz. Rukayye** vardı. **Hz. Hüseyin**\'in küçük kızıydı. Dört yaşındaydı. "Babam nerede?" diye ağlıyordu. **Hz. Zeynep** onu bağrına bastı. Rüyasında babasını gördü. Uyanınca feryadı saraya vardı. **Yezid** emretti. Baş, örtülü bir tepsiyle gönderildi. Rukayye örtüyü açtı. Babasının yüzünü gördü. Bağrına bastı. Ehl-i Beyt mektel rivayetinde orada, kahrından şehit oldu Küçük kız babasının yüzünü görünce bağrına bastı. Ehl-i Beyt mektelinde orada, kahrından şehit olduğu nakledilir.' },
      image: 'kerbela-16',
      art: { bg: 'night', props: ['moon'], actors: [{ kind: 'woman', x: 40, label: { tr: 'Rukayye' }, scale: 0.72 }, { kind: 'woman', x: 68, label: { tr: 'Zeynep' } }] },
      by: 'shia',
      cites: [{ side: 'shia', i: 11 }, { side: 'shia', i: 12 }, { side: 'shia', i: 13 }],
    },
    {
      text: { tr: 'Kerbela\'dan iki yıl sonra, 63 H\'de, Medine ayaklandı. **Yezid**, **Müslim b. Ukbe** komutasındaki orduya şehri üç gün yağmalamayı serbest bıraktı. Bu olaya Harre denir. Sahabeler öldürüldü. Mescid-i Nebevî\'ye at bağlandı. Kadınlara tecavüz edildi. Medine halkı, Yezid\'in kölesi olarak biat etmeye zorlandı. Peygamber\'in şehri, üç gün Emevi zulmünün eline kaldı. Sahabeler öldürüldü. Mescid-i Nebevî\'ye at bağlandı. Kadınlara saldırıldı. Halk, Yezid\'in kölesi.' },
      image: 'kerbela-26',
      art: { bg: 'city', props: ['flags'], actors: [{ kind: 'crowd', x: 28, scale: 7 }, { kind: 'man', x: 74, label: { tr: 'Müslim b. Ukbe' } }] },
      by: 'both',
      cites: [{ side: 'shia', i: 25 }, { side: 'sunni', i: 3 }],
    },
    {
      text: { tr: 'Ardından ordu Mekke\'ye yürüdü. 64 H\'deydi. Kâbe mancınıklarla taşlandı. Kâbe\'nin örtüsü ve duvarları yandı. **Yezid** bu kuşatma sırasında öldü. Saltanat, Kerbela\'dan sonra Medine\'yi ve Kâbe\'yi de vurmuştu. Zulüm, onun ölümüyle bitmiş sayılmadı. Kâbe\'nin örtüsü ve duvarları yandı..' },
      image: 'kerbela-27',
      art: { bg: 'dawn', props: ['flags', 'sun'], actors: [{ kind: 'crowd', x: 34, scale: 6 }, { kind: 'man', x: 76, label: { tr: 'Yezid' } }] },
      by: 'both',
      cites: [{ side: 'shia', i: 26 }, { side: 'sunni', i: 3 }],
    },
    {
      text: { tr: 'İsimler silinmedi. Her yıl Erbain\'de anıldılar. 2024\'te el-Abbas türbesinin sayacı, 1-20 Safer arasında Kerbelâ girişlerini 21.480.525 yazdı. Bu, kapıdan geçiş sayısıdır. Her geçiş ayrı bir insan demek değildir. Aynı yıl hac istatistiği 1.833.164 kişidir. Hac, Kâbe\'ye yıl boyu gelenlerin tamamı değildir. Umre bu sayıya katılmadı. İki sayım ayrı yöntemdir. Biri yirmi günlük giriş, öbürü hac mevsiminin hacısıdır.' },
      image: 'kerbela-erbain',
      art: { bg: 'dawn', props: ['flags', 'sun'], actors: [{ kind: 'crowd', x: 46, scale: 8 }] },
      by: 'both',
    },

    {
      text: { tr: 'Yezid ovayı aldı. İslam\'ın anlamını alamadı. Kerbela, saltanat ile Peygamber\'in yolunu ayıran gün oldu. Su kesildi. Secde kirletildi. Yine de isimler kaldı. **Hz. Hüseyin** her yıl anıldı. **Hz. Abbas** vefa diye anıldı. **Ali Ekber** benzerlik diye anıldı. **Hz. Zeynep** sözün ayakta kaldığı yer oldu. Ziyaret, o toprağı unutturmadı. Kan kırmızı bir matem, hakkı diri tuttu. Kerbela bitmedi. Her susuzlukta, her zulümde yeniden söylendi İsimler kaldı. Hz. Hüseyin, Hz. Abbas, Ali Ekber ve Hz. Zeynep her yıl anıldı. Kan kırmızı matem, hakkı diri tuttu.' },
      image: 'kerbela-24',
      art: { bg: 'dawn', props: ['flags', 'sun'], actors: [{ kind: 'crowd', x: 40, scale: 6 }, { kind: 'husayn', x: 72, label: { tr: 'Hz. Hüseyin' } }] },
      by: 'shia',
      cites: [{ side: 'shia', i: 21 }],
    }
  ],
  sunni: [
    { book: 'Tirmizi, el-Câmi\'', ref: 'No. 3768 (Menâkıb)', says: { tr: 'Hz. Hasan ve Hz. Hüseyin cennet gençlerinin efendileridir.' }, status: 'verified' },
    { book: 'Taberî, Târîhu\'l-Ümem ve\'l-Mülûk', ref: 'cilt 5, s. 455', says: { tr: 'Ömer b. Sa\'d\'ın çağrısıyla on kişi Hz. Hüseyin\'i atlarla çiğner, göğsü ve sırtı ezilir. Kızlar, kız kardeşler ve hasta Hz. Zeynelâbidîn Kûfe\'ye götürülür.' }, url: 'https://lib.eshia.ir/86659/5/455', status: 'verified' },
    { book: 'Taberî, Târîh', ref: 'çubuk sahnesi; bir baskıda cilt 3, s. 341, başka baskıda cilt 5, s. 460-461', says: { tr: 'Yezid\'in elinde çubuk vardır, Hz. Hüseyin\'in dişlerine vurur. Ebu Berze itiraz eder. Sayfa baskıya göre değişir.' }, grade: { tr: 'Cümle tarih kitaplarında aktarılır; bu turda Taberî\'nin o sayfası ayrıca açılmadı.' }, status: 'check' },
    { book: 'İbnü\'l-Esîr, el-Kâmil; İbn Kesîr, el-Bidâye', ref: 'Hicrî 61, Kerbela (sayfa bu turda kilitlenmedi)', says: { tr: 'Suyun kesilmesi, katl ve esir kafilesi bu tarihlerde de anlatılır.' }, status: 'check' },
    { book: 'Taberî, Târîhu\'l-Ümem ve\'l-Mülûk', ref: 'cilt 5, s. 416', says: { tr: '9 Muharrem perşembe akşamı Şimr, Abbas, Cafer ve Osman\'ı "kız kardeşimin oğulları" diye çağırır, eman verir. Gençler "Allah seni de emanını da lanetlesin" der. Resûlullah\'ın oğluna eman yoktur.' }, url: 'https://lib.eshia.ir/86659/5/416', status: 'verified' },
    { book: 'Taberî, Târîhu\'l-Ümem ve\'l-Mülûk', ref: 'cilt 5, s. 441', says: { tr: 'Öğleyi kılarlar. Hz. Hüseyin korku namazı kıldırır. Öğleden sonra savaş kızışır, ordu ona ulaşır. Hanefî öne çıkar, sağa sola ok yağar, düşünceye kadar ayakta durur. Züheyr de yanında vuruşur.' }, url: 'https://lib.eshia.ir/86659/5/441', grade: { tr: 'Bu sayfada "oklayın, namaz kılmasın" emri, kalkan, omuz ve bacak yoktur.' }, status: 'verified' },
  ],
  shia: [
    { book: 'Şeyh Müfid, el-İrşâd', ref: 'cilt 2, s. 78', says: { tr: 'Hürr bin atlıyla kafileyi durdurur. Hz. Hüseyin onları ve atlarını sulatır.' }, url: 'https://lib.eshia.ir/27035/2/78', status: 'verified' },
    { book: 'Şeyh Müfid, el-İrşâd', ref: 'cilt 2, s. 99', says: { tr: 'Aşûrâ sabahı Hürr cenneti seçer, Hz. Hüseyin\'in yanına gelir ve yolda onu tuttuğu için özür diler.' }, url: 'https://lib.eshia.ir/27035/2/99', status: 'verified' },
    { book: 'Şeyh Müfid, el-İrşâd', ref: 'cilt 2, s. 109', says: { tr: 'Abbas, anneleri bir olan kardeşlerini öne sürer. Onlar şehit olur. Hz. Hüseyin Fırat\'a yönelir, Abbas önündedir. Ordu Abbas\'ı koparır. O tek başına vuruşur ve öldürülür.' }, url: 'https://lib.eshia.ir/27035/2/109', grade: { tr: 'Kolların kesilmesi, kırba ve göz bu sayfada yoktur. Onlar mektel rivayetidir.' }, status: 'verified' },
    { book: 'İbn Tâvûs, el-Lühûf', ref: 's. 169', says: { tr: 'Harmala b. el-Kâhil\'in oku bebeğin boğazına saplanır. Zeynep su ister. Başka yolda bebek üç gündür susuzdur ve Hz. Hüseyin orduya bir yudum su diye seslenir.' }, url: 'https://lib.eshia.ir/27196/1/169', status: 'verified' },
    { book: 'Meclisî, Bihârü\'l-Envâr', ref: 'cilt 45, s. 134', says: { tr: 'Şam meclisinde Yezid çubukla Hz. Hüseyin\'in dişlerine vurur. Zeynep ayağa kalkar, sesi meclisi inletir. Baş, Yezid\'in önündedir.' }, url: 'https://najafdesertlibrary.com/book/%D8%A8%D8%AD%D8%A7%D8%B1-%D8%A7%D9%84%D8%A3%D9%86%D9%88%D8%A7%D8%B1/v/45/p/134', status: 'verified' },
    { book: 'Mektel kitapları (el-Lühûf, el-Hârizmî, Bihâr cilt 44-45)', ref: 'eman kâğıdının yırtılması, mızraklar, Zeynep\'in kapanması, Abbas\'ın kolları (ayrı sayfa bu turda kilitlenmedi)', says: { tr: 'Abbas\'ın eman kâğıdını yırtıp atması, başların mızraklara takılıp gezdirilmesi ve Zeynep\'in, hasta olan Hz. Zeynelâbidîn\'in üzerine kapanması bu mektellerde anlatılır. Hz. Zeynep hasta değildi. Abbas\'ın suyu içmemesi, kollarının kesilmesi, kırbanın ve gözün oku; gençlerin şehadeti; kızların küpelerinin çekilmesi de buradadır. Alemdar ve en güçlü kol portresi mektelin adlandırmasıdır.' }, grade: { tr: 'Ehl-i Beyt mektel rivayetidir. Sayfa uydurulmadı. el-İrşâd 2/113\'te Zeynep\'in üzerine kapanması yoktur. Orada Humeyd askerleri geri çevirir.' }, status: 'check' },
    { book: 'Şeyh Müfid, el-İrşâd', ref: 'cilt 2, s. 89', says: { tr: '9 Muharrem perşembe akşamı Şimr, Abbas, Cafer ve Osman\'a "siz emandasınız" der. Gençler emanı lanetler. Resûlullah\'ın oğluna eman yoktur.' }, url: 'https://lib.eshia.ir/27035/2/89', grade: { tr: 'Bu sayfada kâğıdın yırtılması yoktur. Yırtma mektel anlatısıdır.' }, status: 'verified' },
    { book: 'İbn Tâvûs, el-Lühûf (el-Melehüf)', ref: 's. 148-150', says: { tr: 'Şimr, Ümmü\'l-Benîn\'in oğullarını çağırır ve Yezid b. Muaviye\'ye itaati söyler. Abbas, Fatıma\'nın oğlu Hz. Hüseyin\'i bırakmayı reddeder, getirilen emanı lanetler. Baskı notu Abbas\'ı Kamer-i Benî Hâşim diye anar ve sancağın onda olduğunu yazar.' }, url: 'https://lib.eshia.ir/27196/1/150', grade: { tr: 'Kamer-i Benî Hâşim, sancak ve Ümmü\'l-Benîn adı s. 148\'deki baskı notundadır. Not, Makâtilü\'t-Tâlibiyyîn\'e gönderir. İbn Tâvûs\'un kendi cümlesi değildir.' }, status: 'verified' },
    { book: 'Şeyh Müfid, el-İrşâd', ref: 'cilt 2, s. 93', says: { tr: 'Hz. Zeynelâbidîn, babasının öldürüleceği sabahın akşamında hasta oturduğunu ve teyzesi Zeynep\'in kendisine baktığını söyler.' }, url: 'https://lib.eshia.ir/27035/2/93', status: 'verified' },
    { book: 'Şeyh Müfid, el-İrşâd', ref: 'cilt 2, s. 112', says: { tr: 'Sinân mızrağı saplar. Havlî titrer. Şimr Hz. Hüseyin\'i boğazlar, başı Havlî\'ye verir. Kadınların örtüsü sırtından çekilip alınır. Sayfa, döşeğindeki Hz. Zeynelâbidîn\'de kesilir.' }, url: 'https://lib.eshia.ir/27035/2/112', status: 'verified' },
    { book: 'Şeyh Müfid, el-İrşâd', ref: 'cilt 2, s. 113', says: { tr: 'Hz. Zeynelâbidîn ağır hastadır. "Şu hastayı öldürelim mi?" denir. Humeyd onları geri çevirir. Ömer b. Sa\'d hasta çocuğa dokunulmasın der. Sonra on kişi cesedi atla ezer. Aynı gün baş, Havlî ve Humeyd ile İbn Ziyâd\'a gönderilir. Diğer yetmiş iki baş Şimr, Kays ve Amr ile yollanır.' }, url: 'https://lib.eshia.ir/27035/2/113', grade: { tr: 'Mızrağa takıp gezdirmek bu sayfada yoktur. O, mektel anlatısıdır.' }, status: 'verified' },
    { book: 'Abbas Kummî, Nefesü\'l-Mehmûm', ref: 'cilt 1, s. 416', says: { tr: 'Hz. Hüseyin\'in dört yaşındaki kızı rüyada babasını görür, ağlar. Yezid başı ona gönderir. Kısa rivayette kız hastalanır, birkaç gün içinde Şam\'da vefat eder. Aynı sayfadaki geniş rivayette baş bir mendille örtülüdür, leğene konmuştur. Örtü açılır. Kız başı bağrına alır, "babacığım, seni kim kana boyadı" diye dertleşir, dudağını babasının dudağına kor ve orada ruhunu teslim eder.' }, url: 'https://lib.eshia.ir/86936/1/416', grade: { tr: 'Ehl-i Beyt mektel rivayetidir. Bu sayfada kızın adı ve Şam harabesi geçmez. Mektel onu Hz. Rukayye diye, yeri harabe diye anar. Not, rivayeti Kâmil-i Bahâî cilt 2, s. 178-179\'a bağlar.' }, status: 'verified' },
    { book: 'Abbas Kummî, Müntehâ\'l-Âmâl', ref: 'Arapça tercüme (Hâşim Mîlânî), cilt 1, s. 778', says: { tr: 'Kâmil-i Bahâî\'den aktarır. Çocuklara babaları yolculukta denir. Yezid onları evine alır. Dört yaşındaki kız rüyada babasını görür. Yezid başı kucağına gönderir. Kız hastalanır, birkaç gün içinde Şam\'da vefat eder.' }, url: 'https://lib.eshia.ir/86690/1/778', grade: { tr: 'Ehl-i Beyt mektel rivayetidir. Bu sayfada ad Rukayye değildir. Harabe, tepsi ve orada dertleşerek vefat yoktur. Onlar Nefesü\'l-Mehmûm\'daki geniş rivayettedir.' }, status: 'verified' },
    { book: 'İmâdüddîn Taberî, Kâmil-i Bahâî', ref: 'eser adı (kendi sayfası bu turda açılmadı)', says: { tr: 'Nefesü\'l-Mehmûm ve Müntehâ\'l-Âmâl bu küçük kızın rivayetini Kâmil-i Bahâî\'ye bağlar. Nefes\'in notu cilt 2, s. 178-179 diye gösterir.' }, grade: { tr: 'Ehl-i Beyt mektel rivayetidir. Kâmil\'in kendi baskısı açılmadı. Sayfa uydurulmadı. Notta görülen numara, Kâmil\'in sayfası diye kilitlenmedi.' }, status: 'check' },
    { book: 'İbn Tâvûs, el-Lühûf (el-Melehüf)', ref: 's. 165', says: { tr: 'Öğle olunca Hz. Hüseyin, Züheyr ile Saîd\'i kalan ashabın yarısıyla önüne geçirir ve korku namazı kılar. Bir ok Hz. Hüseyin\'e değer. Saîd bedeniyle örter, kımıldamadan düşer. Bedeninde on üç ok, ayrıca kılıç ve mızrak yarası vardır.' }, url: 'https://lib.eshia.ir/27196/1/165', grade: { tr: 'Omuz, bacak ve kalkan bu sayfada yoktur. "Oklayın" emri de yoktur.' }, status: 'verified' },
    { book: 'Meclisî, Bihârü\'l-Envâr', ref: 'cilt 45, s. 21', says: { tr: 'Ebû Sümâme namazı hatırlatır. Hz. Hüseyin ilk vakit der, düşmandan namaz için durmalarını ister. Husayn b. Nümeyr "kabul olmaz" der. Habîb karşılık verir. Züheyr ile Saîd öne geçer. Saîd ok hedefi olur, on üç okla şehit düşer.' }, url: 'https://lib.eshia.ir/11008/45/21', grade: { tr: '"Dinden çıkmış" sözü ve "oklayın, namaz kılmasın" emri bu sayfada yoktur. Sayfadaki cümle, namazın kabul olmayacağıdır.' }, status: 'verified' },
    { book: 'Ehl-i Beyt mektel rivayeti', ref: 'öğle namazında ok emri, kalkan, omuz ve bacak (sayfa bu turda kilitlenmedi)', says: { tr: 'Komutanlar askere oklayın, namaz kılmasın diye seslenir. Ashab kalkan ve bedenle siper olur. Omuz ve bacaktan ok yer, namaz bozulmasın diye kımıldamaz. Hz. Hüseyin dinden çıkmış diye gösterilir.' }, grade: { tr: 'Ehl-i Beyt mektel rivayetidir. Sayfa uydurulmadı. Taberî 5/441, el-Lühûf s. 165 ve Bihâr 45/21 bu üç ayrıntıyı yazmaz.' }, status: 'check' },
    { book: 'İbn Tâvûs, el-Lühûf; Meclisî, Bihârü\'l-Envâr', ref: 'Velid\'e söylenen söz (sayfa kilitlenmedi)', says: { tr: 'Hz. Hüseyin\'in Velid\'e "Yezid fasık, şarap içen, Allah\'ın dokunulmaz kıldığı masum canları öldüren biridir; benim gibisi onun gibisine biat etmez" dediği nakledilir. Sayfa uydurulmadı.' }, status: 'check' },
    { book: 'Mes\'ûdî, Mürûcü\'z-Zeheb', ref: 'Yezid (sayfa kilitlenmedi)', says: { tr: 'Yezid\'in içki ve maymun eğlencesi bu tarihte anılır. Sayfa uydurulmadı.' }, status: 'check' },

    { book: 'Ebu Mihnef, Makâtilü\'l-Hüseyin', ref: 'yolculuk, Müslim, hutbe ve ashab (sayfa kilitlenmedi)', says: { tr: 'Medine\'den çıkış, Kûfe mektupları, Müslim\'in yalnız bırakılması, Aşûrâ hutbesi ve ashabın tek tek çıkması bu mektelde anlatılır. Sayfa uydurulmadı.' }, status: 'check' },
    { book: 'İbn Tâvûs, el-Lühûf; Meclisî, Bihârü\'l-Envâr', ref: 'gece mühleti, Hz. Kasım ve Kerbela adı (sayfa kilitlenmedi)', says: { tr: 'Hz. Hüseyin\'in 9 Muharrem gecesi bey\'atini kaldırıp geceyi deve gibi kullanıp gitmelerini söylediği, bir kısmının karanlıkta ayrıldığı, ganimet umuduyla gelen bedevilerin Kûfe\'nin düşüşü ve Müslim\'in şehadetiyle dağılmış olduğu, Hz. Abbas, Müslim b. Avsece ve Züheyr\'in bin kere dirilseler de ayrılmayacaklarını söylediği, Hz. Kasım\'ın meydana çıkışı ve Kerbelâ adının kerb ve belâ diye anılması bu kitaplarda nakledilir. Sayfa uydurulmadı.' }, status: 'check' },
    { book: 'İbn Kûlûye, Kâmilü\'z-Ziyârât', ref: 'Kerbela ziyareti (sayfa kilitlenmedi)', says: { tr: 'Kerbela toprağını ziyaret etmenin ve Hz. Hüseyin\'i anmanın sevabı bu eserde derlenir. Sayfa uydurulmadı.' }, status: 'check' },

    { book: 'Meclisî, Bihârü\'l-Envâr', ref: 'Kerbelâ adı ve Ümmü Seleme\'ye emanet edilen toprak (sayfa kilitlenmedi)', says: { tr: 'Hz. Peygamber\'in, Hz. Hüseyin\'e şehit edileceği yerin adını Kerbelâ diye önceden haber verdiği; Cebrail\'in getirdiği toprağı Ümmü Seleme\'ye emanet edip bu toprak kana dönüşünce Hz. Hüseyin\'in şehit edilmiş olacağını söylediği nakledilir. Sayfa uydurulmadı.' }, status: 'check' },
    { book: 'Tabersî, Mecma\'u\'l-Beyân (Bihârü\'l-Envâr nakli)', ref: 'Kerbelâ toprağının satın alınması (sayfa kilitlenmedi)', says: { tr: 'Hz. Hüseyin\'in Kerbelâ topraklarını, yaklaşık dört mil dört mil, Nineva ve Gâdiriye halkından 60.000 dirheme satın aldığı, sonra kabrini ziyarete gelenlere yol göstermeleri ve onları üç gün ağırlamaları şartıyla toprağı yine onlara sadaka olarak bağışladığı Tabersî\'nin Mecma\'u\'l-Beyân\'ından nakille Bihârü\'l-Envâr\'da anılır. Sayfa uydurulmadı.' }, status: 'check' },
    { book: 'Şeyh Sadûk, el-Emâlî; Meclisî, Bihârü\'l-Envâr', ref: 'Müslim\'in yetimleri Muhammed ve İbrahim (sayfa kilitlenmedi)', says: { tr: 'Kerbelâ\'dan sonra Müslim b. Akîl\'in iki oğlu Muhammed ve İbrahim\'in Kûfe zindanında tutulduğu, bir zindancının onları salıverdiği, gece bir kadının evine sığındıkları, kadının kocası Hâris\'in İbn Ziyâd\'ın ödülü için onları Fırat kıyısına götürdüğü, kardeşlerin namaz kılıp birbirlerine sarıldıktan sonra şehit edildiği ve İbn Ziyâd\'ın Hâris\'i cezalandırdığı nakledilir. Sayfa uydurulmadı.' }, status: 'check' },
    { book: 'Meclisî, Bihârü\'l-Envâr; Taberî, Târîh', ref: 'Harre, 63 H (sayfa kilitlenmedi)', says: { tr: 'Yezid\'in, Müslim b. Ukbe komutasındaki orduya Medine\'yi üç gün yağmalamayı serbest bıraktığı, Mescid-i Nebevî\'ye at bağlandığı, kadınlara saldırıldığı ve halkın Yezid\'in kölesi olarak biata zorlandığı nakledilir. Sayfa uydurulmadı.' }, status: 'check' },
    { book: 'Meclisî, Bihârü\'l-Envâr; Taberî, Târîh', ref: 'Kâbe\'nin taşlanması, 64 H (sayfa kilitlenmedi)', says: { tr: 'Ordunun Mekke\'ye yürüdüğü, Kâbe\'nin mancınıkla taşlandığı, örtüsünün ve duvarlarının yandığı ve Yezid\'in bu sırada öldüğü nakledilir. Sayfa uydurulmadı.' }, status: 'check' },

    { book: 'el-İslâm, The Tragedy of Karbala', ref: 'Muslim ibn Aqil and his death', says: { tr: 'Yakalanınca saray kapısında soğuk su istediği, Müslim b. Amr\'ın bir damla vermediği, sonra Amr b. Hureys\'in su getirtmesi ve ağzındaki yara yüzünden içemediği bu sayfada okundu. Savaş sırasında halka su diye seslendiği bu sayfada yoktur.' }, url: 'https://al-islam.org/tragedy-karbala/muslim-ibn-aqil-and-his-death', status: 'verified' },
    { book: 'Vikîşia, Imam al-Sajjad', ref: 'Hastalık ve esaret', says: { tr: 'Hastalık yüzünden savaşa katılmadığı, öldürmek isteyenlere hastalığın ona yeteceğinin söylendiği ve Kûfe ile Şam\'a esir götürüldüğü okundu. Hz. Zeynep\'in hasta olduğu bu sayfada yoktur.' }, url: 'https://en.wikishia.net/view/Imam_al-Sajjad_(a)', status: 'verified' },
    { book: 'Vikîşia, el-Kasım b. el-Hasan', ref: 'Lühûf nakli', says: { tr: 'İbn Fudayl el-Ezdî\'nin başına vurduğu, başının yarıldığı, amcasına seslendiği ve Hz. Hüseyin\'in onu bağrına basıp Hâşimoğullarının şehitleri yanına koyduğu okundu. Kesik başın o anda taşındığı yazılmaz.' }, url: 'https://en.wikishia.net/view/Al-Qasim_b._al-Imam_al-Hasan_(a)', status: 'verified' },
    { book: 'el-Abbas türbesi sayacı', ref: '2024 girişleri, 1-20 Safer', says: { tr: '2024 Erbain giriş sayısı 21.480.525 diye yazılır. Bu, kapıdan geçiştir. Her geçiş ayrı bir ziyaretçi değildir.' }, url: 'https://alkafeel.net/fourty/statsv1/1447/index.html', status: 'verified' },
    { book: 'Suudi istatistik, Hac 2024', ref: 'GASTAT yayın', says: { tr: '2024 hac sayısı 1.833.164 kişidir. Bu, yalnız hacdır. Yıl boyu Kâbe ziyareti ve umre değildir.' }, url: 'https://www.stats.gov.sa/documents/20117/2067030/Hajj+Statistics+Publication+2024EN.pdf/ee9e1b69-731b-9976-b394-e24ec4bf6f72', status: 'verified' },
  ],
  disputes: [
    {
      title: { tr: 'Biat neden reddedildi?' },
      sunni: { tr: 'Hz. Hüseyin\'in Yezid\'e biat etmediği tarihlerde yazılıdır. Kimisi çıkışı bir içtihat sayar. Şehitliği inkâr edilmez.' },
      shia: { tr: 'Ret, Yezid\'in liyakatsizliğinedir. Muaviye hilafeti saltanat yapmış, içkiyle anılan oğlunu zorla başa koymuştu. Hz. Hüseyin bu biata baş eğmedi. Abbas da emanı, Yezid\'e itaat diye geri çevirdi.' },
    },
    {
      title: { tr: 'Çubuk, atlar ve başlar' },
      sunni: { tr: 'Atların cesedi çiğnemesi Taberî cilt 5, s. 455\'tedir. Başın Kûfe\'ye gönderilmesi el-İrşâd cilt 2, s. 113\'tedir. Çubuk sahnesi de Taberî\'de anılır; bazı âlimler başın Şam\'a gidişini zayıf sayar.' },
      shia: { tr: 'Atlar, mızraktaki başlar ve çubuk, Yezid\'in meclisinin ayıbı diye okunur. Zeynep\'in hutbesi bu mecliste söylenir (Bihâr, cilt 45, s. 134). Mektel, aynı zulmü Hz. Rukayye\'nin harabedeki şehadetine de bağlar (Nefesü\'l-Mehmûm, cilt 1, s. 416).' },
    },
  ],
  questions: [
    { tr: 'Hz. Hüseyin, saltanat olan bir biatı neden baş eğmedi? Bu ret, bugün hakkı söylemek için size ne söyler?' },
    { tr: 'Abbas\'a eman uzatıldı. Kardeşi açıkta kalırken güvenlik neden bir nimet değildir?' },
    { tr: 'Hürr, tuttuğu kafilenin safına geçti. Geç kalmış bir tövbe, insanı nasıl değiştirir?' },
    { tr: 'Öğle namazı okların altında kılındı. Saîd kımıldamadı. Namaz, zulmün ortasında size ne söyler?' },
    { tr: 'Abbas suyu gördü ve içmedi. Vefa, susuzlukta neye benzer?' },
    { tr: 'Ali Asgar bir yudum su için kaldırıldı. O ok, Ehl-i Beyt sevgisini nerede tutar?' },
    { tr: 'Zeynep, başın önünde ayağa kalktı. Zulmü adlandırmak size hangi cesareti hatırlatır?' },
    { tr: 'Rukayye babasının başını bağrına aldı. Bir çocuğun kahrından gitmesi, Yezid\'in zulmünü nerede tutar?' },
  ],
  summary: { tr: 'Muaviye\'nin oğlu Yezid\'e biat edilmedi. 9 Muharrem akşamı Abbas emanı lanetledi. Su kesildi. Aşûrâ öğlesinde korku namazı kılındı. Saîd bedeniyle siper olup on üç okla şehit oldu. Alemdar Abbas, Ali Ekber, Hz. Kasım ve Ali Asgar şehit oldu. Hasta Hz. Zeynelâbidîn çadırda kaldı. Hz. Kasım\'ın mübarek başı yarıldı. Hz. Hüseyin naaşını Hâşimoğullarının yanına koydu. Müslim\'in yetimleri Kûfe\'de şehit edildi. 63\'te Harre oldu, 64\'te Kâbe yakıldı. Şimr son darbeyi vurdu. Atlar cesedi çiğnedi. Başlar Kûfe\'de İbn Ziyâd\'a, oradan Şam\'da Yezid\'e gitti. Mektelde Hz. Rukayye harabede babasının başına sarılıp orada şehit olur. Ortak cümleler Taberî 5/416, Taberî 5/441, Taberî 5/455 ve Tirmizi 3768\'dedir. Ayrıntı Ehl-i Beyt mektelindedir.' },
};

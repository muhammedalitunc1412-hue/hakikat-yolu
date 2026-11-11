import type { HistEvent } from '../types';

// Açılan sayfalar: Taberî 5/480, 5/482-484, 5/493, 5/498-499; el-Bidâye (Fikir) 8/222; el-Bidâye (Şîrî) 6/262;
// Vefâü'l-Vefâ 1/107-108; Mürûcü'z-Zeheb 3/61. Mescidde atlar: yalnız ikincil atıf okundu (check).
export const harre: HistEvent = {
  id: 'harre',
  date: { tr: '63-64 H (683-684)', en: '63-64 AH (683-684)' },
  title: { tr: 'Harre Vakası', en: 'The Day of al-Harra' },
  hook: { tr: 'Kerbelâ\'dan sonra Yezid\'in ordusu Peygamber\'in şehrini üç gün yağmaladı, ardından Kâbe\'yi mancınıkla taşladı.', en: 'After Karbala, Yazid\'s army plundered the Prophet\'s city for three days, then bombarded the Kaaba with catapults.' },
  scenes: [
    {
      text: { tr: 'Kerbelâ\'dan sonra Medine, Peygamber\'in torununun yasını hâlâ tutuyordu. **Yezid**\'in Medine valisi, amcasının oğlu Osman b. Muhammed b. Ebi Süfyan\'dı. Vali, şehrin ileri gelenlerinden bir heyeti Şam\'a, Yezid\'in sarayına gönderdi. Heyetin başında **Abdullah b. Hanzala** vardı. Babası Hanzala, Uhud\'da şehit düşmüş ve cenazesini meleklerin yıkadığı sahabe olarak anılmıştı. Yezid heyeti iyi ağırladı ve onlara büyük hediyeler verdi. Abdullah b. Hanzala\'ya yüz bin dirheme yakın bir bağış yaptı. Ama heyet sarayda gördüklerini unutamadı. Medine\'ye döner dönmez halkın karşısına çıktılar ve şöyle dediler: "Biz dini olmayan bir adamın yanından geliyoruz. Şarap içiyor, tambur çalıyor, yanında cariyeler şarkı söylüyor ve köpeklerle oynuyor. Sizi şahit tutuyoruz ki biz onu halifelikten azlettik." Yezid\'in sarhoşluk yüzünden namazı vaktinde kılmadığını da anlattılar. Mes\'ûdî de Yezid\'in eğlenceye, av kuşlarına, köpeklere, maymunlara ve içki meclislerine düşkün olduğunu yazar. İnsanlar Abdullah b. Hanzala\'ya, Yezid\'in ona ikramda bulunduğunu hatırlattı. O da şöyle cevap verdi: "Evet, verdi. Ama ben o malı yalnızca ona karşı savaşmak için güç bulayım diye aldım. Vallahi şu oğullarımdan başka kimsem kalmasa, onlarla birlikte ona karşı savaşırım." Medine halkı Yezid\'e verdiği biatı bozdu ve Abdullah b. Hanzala\'ya biat etti.' },
      image: 'muaviye-iktidar-7',
      art: { bg: 'interior', props: ['flags'], actors: [{ kind: 'man', x: 30, label: { tr: 'Abdullah b. Hanzala' } }, { kind: 'man', x: 70, label: { tr: 'Yezid' }, pose: 'sit' }] },
      by: 'both',
      cites: [{ side: 'sunni', i: 0 }, { side: 'sunni', i: 5 }, { side: 'sunni', i: 4 }, { side: 'shia', i: 0 }],
    },
    {
      text: { tr: 'Medineliler Yezid\'in valisini ve şehirdeki Ümeyyeoğullarını Mervan b. Hakem\'in evinde kuşattı. Kuşatılanlar Şam\'a bir mektup yazdı ve "Yetişin, yetişin!" diye yardım istedi. Mektup Yezid\'e ulaştığında Yezid, ayaklarındaki ağrı yüzünden ayaklarını bir leğen suyun içine koymuş oturuyordu. Mektubu okudu ve öfkelendi. Yezid\'in gözü yalnızca Medine\'de değildi. Mekke\'de **Abdullah b. Zübeyr** de ona biat etmemişti. Yezid, Kûfe\'deki **Ubeydullah b. Ziyâd**\'a İbn Zübeyr\'in üzerine yürümesini yazdı. Kerbelâ\'da Hz. Hüseyin\'i şehit ettiren İbn Ziyâd bile bu emri geri çevirdi ve şöyle dedi: "Bu fâsık için ikisini birden yapmam. Hem Resûlullah\'ın kızının oğlunu öldürüp hem de Kâbe\'ye saldırmam." Bunun üzerine Yezid ordunun başına yaşlı ve hasta bir komutan olan **Müslim b. Ukbe el-Mürrî**\'yi getirdi. Şam\'da her askere maaşının tamamının ve eline hemen yüz dinar verileceği ilan edildi. On iki bin kişi bu çağrıya koştu. Yezid ordu yola çıkarken Müslim\'e şu emri verdi: "Onları üç gün çağır. Sana uyarlarsa ne âlâ, uymazlarsa onlarla savaş. Onlara galip gelince şehri üç gün askerlerine helal et. Şehirdeki mal, para, silah ve yiyecek askerlerindir. Üç gün geçince halka dokunma." Kendisine bir şey olursa ordunun başına **Husayn b. Numeyr**\'in geçmesini emretti. Aynı emirde **Hz. Zeynelâbidîn**\'e dokunulmamasını da istedi. Peygamber\'in şehri, onun torununu öldüren saltanatın askerlerine üç günlük bir ganimet olarak vaat edilmişti.' },
      image: 'harre-emir',
      art: { bg: 'interior', props: ['scroll', 'flags'], actors: [{ kind: 'man', x: 34, label: { tr: 'Yezid' }, pose: 'sit' }, { kind: 'man', x: 70, label: { tr: 'Müslim b. Ukbe' } }] },
      by: 'both',
      cites: [{ side: 'sunni', i: 1 }, { side: 'sunni', i: 2 }],
    },
    {
      text: { tr: 'Müslim b. Ukbe, hicretin 63. yılında, Zilhicce ayının son günlerinde Medine\'ye vardı. Ordusunu şehrin doğusunda, kara volkanik taşlarla örtülü Harre denilen yere kurdu. Bu savaş adını o kara taşlıktan aldı ve tarihe Harre Vakası olarak geçti. Müslim, Yezid\'in emrettiği gibi Medinelileri üç gün itaate çağırdı. Medineliler, Peygamber\'in torununun kanı elinde olan bir saltanata yeniden boyun eğmeyi reddetti. Savaş başladığında Medineliler büyük bir cesaretle çarpıştı. Şam ordusu onların kalabalığını ve duruşunu görünce çekindi. Ama bir ara şehrin içinden tekbir sesleri yükseldi. Benî Hârise mahallesinden Şam askerleri şehre sokulmuştu. Arkadan vurulan Medineliler dağıldı. Abdullah b. Hanzala oğullarını birer birer öne sürdü. Oğulları gözlerinin önünde şehit düştü. Sonunda kendisi de çarpışa çarpışa şehit oldu. Savaştan sonra Müslim b. Ukbe, Mervan b. Hakem ile birlikte ölülerin arasında dolaştı. Abdullah b. Hanzala\'nın şehadet parmağı hâlâ havaya kalkıktı. Mervan onu görünce "Ölüyken onu kaldırıyorsan, sağken de onunla çok dua ederdin" dedi. O gün şehit edilenler arasında Peygamber\'in sahabeleri de vardı. Peygamber\'in abdestini anlatan **Abdullah b. Zeyd** ve Mekke\'nin fethinde kavminin sancağını taşıyan **Ma\'kil b. Sinân** bunlardandı.' },
      image: 'harre-1',
      art: { bg: 'battle', props: ['flags', 'swords'], actors: [{ kind: 'crowd', x: 28, scale: 7 }, { kind: 'man', x: 74, label: { tr: 'Müslim b. Ukbe' } }] },
      by: 'both',
      cites: [{ side: 'sunni', i: 4 }, { side: 'sunni', i: 6 }, { side: 'sunni', i: 5 }],
    },
    {
      text: { tr: 'Savaş bitince Yezid\'in emri uygulandı. Müslim b. Ukbe, Medine\'yi üç gün boyunca askerlerine helal etti. Askerler evlere girdi, insanları öldürdü ve mallarını yağmaladı. Kadınlar da bu saldırıdan kurtulamadı. İmam Mâlik\'ten nakledildiğine göre o gün Kur\'an hafızlarından yedi yüz kişi öldürüldü. Sünni tarihçi İbn Kesîr bile bu emir için "çok büyük ve çirkin bir hata" dedi. O üç günde Medine\'de anlatılamayacak kadar büyük kötülükler yaşandığını yazdı. Atlar Peygamber\'in mescidine sokuldu ve kabir ile minber arasını kirletti. Mescid-i Nebevî bomboş kaldı. Saîd b. Müseyyib o günleri şöyle anlattı: "Mescidde benden başka kimse yoktu. Şamlılar grup grup içeri giriyor ve \'Şu deli ihtiyara bakın\' diyorlardı." Üç gün dolunca Müslim b. Ukbe, Medine\'nin ileri gelenlerini topladı. Onlardan Yezid\'in kulları olduklarını kabul ederek biat etmelerini istedi. Bu biata göre Yezid onların canına, malına ve ailelerine dilediği gibi hükmedecekti. Biatı Peygamber\'in sünneti üzerine vermek isteyenin boynu vuruldu. **Hz. Zeynelâbidîn**\'e ise dokunulmadı. Ümeyyeoğulları Medine\'den çıkarılırken Hz. Zeynelâbidîn, Mervan\'ın ailesini himayesine almıştı. Düşmanının ailesine bile kol kanat geren imam, o kanlı günlerde Medine\'de Ehl-i Beyt\'in yüzü olarak kaldı. Selef âlimleri bu zulmü yapan komutanı Müslim diye değil, "Müsrif", yani haddi aşan diye andı.' },
      image: 'harre-yagma',
      art: { bg: 'city', props: ['minbar', 'flags'], actors: [{ kind: 'crowd', x: 40, scale: 7 }, { kind: 'man', x: 76, label: { tr: 'Müslim b. Ukbe' } }] },
      by: 'both',
      cites: [{ side: 'sunni', i: 4 }, { side: 'sunni', i: 5 }, { side: 'sunni', i: 6 }, { side: 'sunni', i: 7 }, { side: 'sunni', i: 2 }, { side: 'shia', i: 1 }],
    },
    {
      text: { tr: 'Medine\'yi kana bulayan ordu, Mekke\'ye, Yezid\'e biat etmeyen Abdullah b. Zübeyr\'in üzerine yürüdü. Müslim b. Ukbe yolda, Müşellel denilen yerde öldü ve oraya gömüldü. Ordunun başına, Yezid\'in emrettiği gibi Husayn b. Numeyr geçti. Husayn, Muharrem ayının son günlerinde Mekke\'ye vardı ve şehri altmış dört gün kuşattı. Hicretin 64. yılında, Rebiülevvel ayının üçüncü günü, Şam ordusu Kâbe\'yi mancınıklarla taşladı ve ateşe verdi. Askerler taş atarken "Bu mescidin direklerine taş atıyoruz" diye türkü söylüyordu. Kâbe\'nin örtüsü yandı ve ahşapları tutuştu. O gün Mekke\'ye gelen biri, Kâbe\'nin örtüsüz kaldığını ve köşesindeki taşın kararıp üç yerinden çatladığını gördü. Kuşatma sürerken Yezid, Rebiülevvel\'in on dördünde Humus yakınlarındaki Huvvârîn köyünde öldü. Ölüm haberi Mekke\'ye Rebiülâhir\'in başında ulaştı. Ordu bu haberle kuşatmayı bırakıp Şam\'a döndü. Yezid\'in saltanatı yaklaşık üç buçuk yıl sürmüştü. Bu kısa sürede Kerbelâ\'da Peygamber\'in torunu şehit edildi, Peygamber\'in şehri yağmalandı ve Allah\'ın evi ateşe verildi.' },
      image: 'harre-2',
      art: { bg: 'mountain', props: ['flags', 'sun'], actors: [{ kind: 'crowd', x: 34, scale: 6 }, { kind: 'man', x: 76, label: { tr: 'Husayn b. Numeyr' } }] },
      by: 'both',
      cites: [{ side: 'sunni', i: 3 }, { side: 'sunni', i: 5 }],
    },
  ],
  sunni: [
    { book: 'Taberî, Târîhu\'l-Ümem ve\'l-Mülûk', ref: 'cilt 5, s. 480', says: { tr: 'Medine heyeti Abdullah b. Hanzala ile Yezid\'e gider, ikram görür. Dönünce "dini olmayan, şarap içen, tambur çalan, yanında cariyeler şarkı söyleyen ve köpeklerle oynayan" birinden geldiklerini söyler ve onu azlederler. Halk Abdullah b. Hanzala\'ya biat eder.' }, url: 'https://lib.eshia.ir/86659/5/480', status: 'verified' },
    { book: 'Taberî, Târîhu\'l-Ümem ve\'l-Mülûk', ref: 'cilt 5, s. 482-484', says: { tr: 'Medineliler valiyi ve Ümeyyeoğullarını Mervan\'ın evinde kuşatır, "yetişin" mektubu Yezid\'e gider. İbn Ziyâd, Resûlullah\'ın kızının oğlunu öldürüp Kâbe\'ye saldırmayı "fâsık için" birleştirmeyi reddeder. On iki bin kişilik ordu Müslim b. Ukbe ile çıkar. Yezid\'in emri: üç gün çağır, uymazlarsa savaş, galip gelince şehri üç gün helal et, sonra dokunma; Husayn b. Numeyr\'i yerine bırak; Ali b. Hüseyin\'e dokunma.' }, url: 'https://lib.eshia.ir/86659/5/484', status: 'verified' },
    { book: 'Taberî, Târîhu\'l-Ümem ve\'l-Mülûk', ref: 'cilt 5, s. 493', says: { tr: 'Müslim b. Ukbe, "Yezid\'in kulları (havel) olduğunuza" biat isteyip Ömer\'in sünneti üzerine biat etmek isteyen Yezid b. Vehb\'i öldürtür. Ali b. Hüseyin, Ümeyyeoğulları çıkarılırken Mervan\'ın ailesini himaye etmiştir; Müslim ona dokunmaz.' }, url: 'https://lib.eshia.ir/86659/5/493', status: 'verified' },
    { book: 'Taberî, Târîhu\'l-Ümem ve\'l-Mülûk', ref: 'cilt 5, s. 498-499', says: { tr: 'Husayn b. Numeyr Mekke\'yi altmış dört gün kuşatır. 3 Rebiülevvel 64 cumartesi Kâbe mancınıkla taşlanır ve yakılır; Kâbe\'nin örtüsü ve ahşabı yanar, köşe taşı kararıp üç yerinden çatlar. Yezid 14 Rebiülevvel 64\'te Huvvârîn\'de ölür; saltanatı üç yıl altı veya sekiz ay sürer.' }, grade: { tr: 'Aynı yerde Vâkıdî\'den gelen bir rivayet, yangını İbn Zübeyr\'in adamlarından birinin mızrağındaki ateşe bağlar.' }, url: 'https://lib.eshia.ir/86659/5/498', status: 'verified' },
    { book: 'İbn Kesîr, el-Bidâye ve\'n-Nihâye (Dâru\'l-Fikr)', ref: 'cilt 8, s. 222', says: { tr: 'Abdullah b. Hanzala, Yezid\'in malını ona karşı savaşmak için güç bulmak üzere aldığını söyler. Benî Hârise\'den Şamlılar şehre sokulur, Medineliler dağılır. Müslim halktan Yezid\'in kulları olarak biat ister. İbn Kesîr, Yezid\'in şehri üç gün helal kılmasını "büyük ve çirkin bir hata" sayar; sahabe ve oğullarından çok kişinin öldürüldüğünü yazar.' }, url: 'https://lib.efatwa.ir/40020/8/222', status: 'verified' },
    { book: 'İbn Kesîr, el-Bidâye ve\'n-Nihâye (thk. Şîrî)', ref: 'cilt 6, s. 262', says: { tr: 'Heyet, Yezid\'in şarap içtiğini ve sarhoşluk yüzünden namazı vaktinde kılmadığını anlatır; Medineliler onu minberin yanında azleder. Selef, Müslim b. Ukbe\'yi "Müsrif b. Ukbe" diye anar. İmam Mâlik\'ten: Harre\'de Kur\'an hafızlarından yedi yüz kişi öldürüldü.' }, url: 'https://shamela.ws/book/8376/2306', status: 'verified' },
    { book: 'Semhûdî, Vefâü\'l-Vefâ', ref: 'cilt 1, s. 107-108', says: { tr: 'Harre\'de öldürülen sahabeler: Abdullah b. Hanzala (sekiz oğluyla), Abdullah b. Zeyd, Ma\'kil b. Sinân. Mervan\'ın Abdullah b. Hanzala\'nın parmağı için söylediği söz. Saîd b. Müseyyib\'in mescidde yalnız kalması. Halktan Yezid\'in kulları olarak biat istenmesi.' }, url: 'https://shamela.ws/book/23695/104', status: 'verified' },
    { book: 'Münâvî, Feyzü\'l-Kadîr (Kurtubî nakli)', ref: 'cilt 1, s. 58', says: { tr: 'Kurtubî\'den: atlar Mescid-i Nebevî\'de dolaştı, kabir ile minber arasını kirletti.' }, grade: { tr: 'Bu turda yalnızca ikincil bir eserdeki atıf okundu (Mevsûatü min Hayâti\'l-Müstebsirîn 10/291); Feyzü\'l-Kadîr\'in sayfası açılmadı.' }, status: 'check' },
  ],
  shia: [
    { book: 'Mes\'ûdî, Mürûcü\'z-Zeheb (el-Mektebetü\'l-Asriyye)', ref: 'cilt 3, s. 61', says: { tr: 'Yezid eğlenceye, av kuşlarına, köpeklere, maymunlara, parslara ve içki meclislerine düşkündür; Hz. Hüseyin\'in katlinden sonra İbn Ziyâd ile içki meclisinde oturur.' }, url: 'https://lib.eshia.ir/13568/3/61', status: 'verified' },
    { book: 'Merkezü\'l-Ebhâsi\'l-Akâidiyye, Mevsûatü min Hayâti\'l-Müstebsirîn (ikincil)', ref: 'cilt 10, s. 291', says: { tr: 'Harre\'de üç gün yağma ve kadınlara saldırı; Kurtubî\'den atların mescidde dolaştığı; İbn Ebi\'l-Hadîd\'den İslam\'da Harre\'den daha çirkin bir olay olmadığı; halktan Yezid\'in kulları olarak biat istenmesi.' }, grade: { tr: 'İkincil eserdir; sayfa okundu, aktardığı birincil kaynaklar bu turda ayrıca açılmadı.' }, url: 'https://lib.eshia.ir/70742/10/291', status: 'verified' },
  ],
  disputes: [
    {
      title: { tr: 'Kâbe\'yi kim yaktı?' },
      sunni: { tr: 'Taberî, Kâbe\'nin mancınıkla taşlandığını ve yakıldığını yazar. Aynı yerde Vâkıdî\'den gelen bir rivayet, yangını İbn Zübeyr\'in adamlarından birinin mızrağındaki ateşin rüzgârla örtüye sıçramasına bağlar.' },
      shia: { tr: 'Kuşatmayı kuran, mancınıkları Kâbe\'ye çeviren ve taş atarken türkü söyleyen Yezid\'in ordusudur. Allah\'ın evini ateş altına alan emir Şam\'dan gelmiştir.' },
    },
    {
      title: { tr: 'Yezid\'in sorumluluğu' },
      sunni: { tr: 'İbn Kesîr, Yezid\'in Medine\'yi üç gün helal kılmasını büyük ve çirkin bir hata sayar. Selef, komutanı Müsrif b. Ukbe diye anar.' },
      shia: { tr: 'Üç günlük yağma emri Yezid\'in kendi emridir. Kerbelâ, Harre ve Kâbe aynı saltanatın üç büyük zulmüdür.' },
    },
  ],
  questions: [
    { tr: 'Abdullah b. Hanzala, Yezid\'in hediyelerini aldı ama ona karşı durdu. Bir zalimin ikramı, hakkı söylemeye engel olabilir mi?' },
    { tr: 'İbn Ziyâd bile Kâbe\'ye saldırmayı reddetti. Yezid\'in emri bu durumda size ne anlatıyor?' },
    { tr: 'Hz. Zeynelâbidîn, Mervan\'ın ailesini himaye etti. Düşmana karşı merhamet, Ehl-i Beyt ahlâkında nerede durur?' },
  ],
  summary: { tr: '63 H\'de Medine halkı, Yezid\'in şarap içtiğini ve namazı terk ettiğini gören heyetin sözü üzerine biatı bozdu. Yezid, Müslim b. Ukbe\'ye şehri üç gün helal kılma emri verdi. Harre\'de sahabeler ve oğulları öldürüldü, halk Yezid\'in kulları olarak biata zorlandı. Hz. Zeynelâbidîn\'e dokunulmadı. 64 H\'de Husayn b. Numeyr Mekke\'yi kuşattı, Kâbe mancınıkla taşlandı ve yandı. Yezid bu sırada öldü. Ortak cümleler Taberî 5/480-499 ve el-Bidâye\'dedir.' },
};

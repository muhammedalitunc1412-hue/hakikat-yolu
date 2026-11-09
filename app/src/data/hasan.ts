import type { HistEvent } from '../types';

// Kaynak: research/05-hasan-kerbela-ve-kaynak-rehberi.md (Parça A1, A2, A5). status araştırmadaki doğrulama durumunu aynen yansıtır.
export const hasan: HistEvent = {
  id: 'hasan',
  date: { tr: '40-41 H (661)', en: '40-41 AH (661)' },
  title: { tr: 'Hz. Hasan, sulh ve Emevi iktidarı', en: 'Hz. Hasan, the peace treaty and Umayyad rule' },
  hook: { tr: 'Peygamber\'in seyyid dediği Hz. Hasan, ümmetin kanı dökülmesin diye hakkını bıraktı ve zehirlendi.', en: 'Why did the grandson the Prophet called "my son is a master" have to hand over the leadership?' },
  scenes: [
    {
      text: { tr: 'Bir gün minberde Peygamber konuşuyordu. Yanında küçük torunu Hz. Hasan vardı. Peygamber onu çok severdi. Bir cemaate, bir de ona bakıyordu.' },
      art: { bg: 'city', props: ['sun', 'minbar'], actors: [{ kind: 'crowd', x: 26, scale: 7 }, { kind: 'prophet', x: 62, label: { tr: 'Hz. Peygamber' } }, { kind: 'hasan', x: 80, scale: 0.7, label: { tr: 'Hz. Hasan' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Minberde, Hz. Hasan\'ın yanında Peygamber şöyle dedi: "Bu oğlum seyyiddir. Allah onun aracılığıyla Müslümanların iki büyük grubunu barıştıracak." Bu müjde yıllar sonra, sulhta gerçekleşti.' },
      art: { bg: 'city', props: ['sun', 'minbar'], actors: [{ kind: 'prophet', x: 44, pose: 'raise', label: { tr: 'Hz. Peygamber' } }, { kind: 'hasan', x: 64, scale: 0.7, label: { tr: 'Hz. Hasan' } }, { kind: 'crowd', x: 22, scale: 5 }] },
      by: 'both',
    },
    {
      text: { tr: 'Ramazan 40\'ta Hz. Ali şehit edildi. Kûfe halkı oğlu Hz. Hasan\'a biat etti. Biat, bağlılık sözüdür. Hz. Hasan müminlerin yeni önderi oldu. Babasının bıraktığı görev artık ondaydı.' },
      art: { bg: 'city', props: ['flags'], actors: [{ kind: 'crowd', x: 28, scale: 8 }, { kind: 'hasan', x: 66, label: { tr: 'Hz. Hasan' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Şam\'da **Muaviye** ticaret yollarını elinde tutuyordu. Çok zengindi. Ordusuyla Kûfe üzerine yürüdü. İki taraf birbirine yaklaştı. Ortada yeni bir iç savaş tehlikesi vardı.' },
      art: { bg: 'battle', props: ['flags', 'tents'], actors: [{ kind: 'crowd', x: 24, scale: 7 }, { kind: 'man', x: 78, label: { tr: 'Muaviye' } }] },
      by: 'both',
    },
    {
      text: { tr: '**Muaviye** hile, alış ve rüşvetle **Hz. Hasan**\'ın komutanlarını satın aldı. **Ubeydullah b. Abbas** gece ordudan ayrılıp **Muaviye**\'nin yanına geçti. Ordu içten çürüdü. **Hz. Hasan** güçsüz kaldı. Kan dökülmesin, ==Ehl-i Beyt== dostları kırılmasın diye savaşı bitirdi. Yönetim **Muaviye**\'ye geçti. Bu yıla Âmü\'l-Cemâa denir. Anlamı birlik yılıdır.' },
      art: { bg: 'dawn', props: ['sun', 'scroll'], actors: [{ kind: 'hasan', x: 34, label: { tr: 'Hz. Hasan' } }, { kind: 'man', x: 68, label: { tr: 'Muaviye' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Anlaşma yazıya geçti. **Hz. Hasan** hakkından vazgeçmedi. **Muaviye** Allah\'ın kitabıyla yürüyecek, kimseye sövdürmeyecek, kendinden sonra halife dikmeyecekti. Bu şartları sonra ==çiğnedi==. Minberlerde **Hz. Ali**\'ye lanet okundu.' },
      art: { bg: 'interior', props: ['scroll'], actors: [{ kind: 'hasan', x: 50, pose: 'sit', label: { tr: 'Hz. Hasan' } }] },
      by: 'shia',
    },
    {
      text: { tr: 'Hz. Hasan, Medine\'de yaklaşık on yıl sessiz yaşadı. Vefat 28 Safer 49 ya da 50 diye anılır. TDV, Ca\'de bint Eş\'as\'ın Yezid\'le evlendirilme vaadiyle kandırılıp onu zehirlediğini İbnü\'l-Esîr ve Süyûtî\'den nakleder. Bu, her Sünnînin kabulü değildir. İbn Abdilberr\'in el-İstiâb\'ında Katâde ve Ebû Bekir b. Hafs, Ca\'de\'yi anar. Bir grup, bunu Muaviye\'nin kışkırtmasına bağlar. İbn Abdilberr bunu nakleder, "Allah bilir" diyerek kendisi hükmetmez. Bu cümle, el-İstiâb\'ın kendi baskısından değil, bir nakil sayfasından okundu. Aynı nakilde Katâde, Hz. Hasan\'ın zehir içirildiğini ve ciğerinin parçalandığını söylediğini aktarır. Bu, kelimesi kelimesine bir çeviri değildir.' },
      art: { bg: 'night', props: ['moon', 'stars'], actors: [{ kind: 'hasan', x: 40, pose: 'sit', label: { tr: 'Hz. Hasan' } }, { kind: 'husayn', x: 62, scale: 0.9, label: { tr: 'Hz. Hüseyin' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Medine\'de **Muaviye**, **Hz. Hasan**\'ın karısı **Cüde bint Eş\'as**\'a oğlu **Yezid**\'le evlendirme vaadi ve yüz bin dirhem verdi. Zehir bu pazarlıkla içirildi. **Hz. Hasan** şehit oldu. **Muaviye** vaadini tutmadı. Ne evlilik oldu ne para tamamlandı. Peygamber\'in seyyid dediği torun ölünce taht oğula açıldı.' },
      cites: [{ side: 'shia', i: 5 }, { side: 'shia', i: 9 }],
      art: { bg: 'interior', props: ['scroll'], actors: [{ kind: 'man', x: 24, label: { tr: 'Muaviye' } }, { kind: 'woman', x: 50, label: { tr: 'Cü\'de' } }, { kind: 'hasan', x: 76, pose: 'sit', label: { tr: 'Hz. Hasan' } }] },
      by: 'shia',
    },
    {
      text: { tr: 'Hz. Hasan, ailesine vasiyet etti. Kendisini dedesi Resûlullah\'ın yanına defnetmelerini istedi. "Cenazemde bir damla kan dökülmesin" dedi. Kan dökülecekse Bakî\'de, annesinin yanında gömülmesini söyledi.' },
      art: { bg: 'interior', props: ['scroll'], actors: [{ kind: 'hasan', x: 38, pose: 'sit', label: { tr: 'Hz. Hasan' } }, { kind: 'husayn', x: 62, scale: 0.9, label: { tr: 'Hz. Hüseyin' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Hz. Hüseyin, kardeşini dedesi Resûlullah\'ın yanına defnetmek için götürdü. Aişe bir katıra binip Mervan ve Ümeyyeoğullarıyla geldi. Tabutun Peygamber\'in yanına gömülmesini bizzat engelledi. "Evime sevmediğim birini sokamazsınız" dedi. Tabuta ok atılması emrini de verdi. Mervan\'ın adamları bu emirle okladı. İbn Abbas ona "Bir gün deveye, bir gün katıra" dedi. Cemel\'de deve, o gün katır vardı.' },
      art: { bg: 'city', props: ['flags'], actors: [{ kind: 'man', x: 26, label: { tr: 'Mervan' } }, { kind: 'woman', x: 52, label: { tr: 'Aişe' } }, { kind: 'husayn', x: 78, scale: 0.9, label: { tr: 'Hz. Hüseyin' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Mervan\'ın adamları, Aişe\'nin emriyle Hz. Hasan\'ın tabutunu okladı. Oklar tabuta saplandı. Dîneverî okları Emevîlere bağlar. İbn Şehraşûb yetmiş ok der. Bu sayı tek kaynağa dayanır.' },
      art: { bg: 'dune-dusk', props: ['swords'], actors: [{ kind: 'crowd', x: 28, scale: 6 }, { kind: 'hasan', x: 54, label: { tr: 'Hz. Hasan' } }, { kind: 'crowd', x: 78, scale: 5 }] },
      by: 'both',
    },
    {
      text: { tr: 'Hz. Hüseyin kılıcını çekmedi. Kardeşinin "cenazemde bir damla kan dökülmesin" vasiyeti vardı. Hz. Hasan Bakî\'de defnedildi. Kabri, ninesi Fatıma bint Esed\'in yanındadır.' },
      art: { bg: 'night', props: ['moon', 'stars'], actors: [{ kind: 'husayn', x: 40, label: { tr: 'Hz. Hüseyin' } }, { kind: 'crowd', x: 66, scale: 5 }] },
      by: 'both',
    },
    {
      text: { tr: '**Muaviye** 60\'ta ölünce tahtı oğlu **Yezid**\'e bıraktı. Hilafet artık bir ailenin içinde kaldı. Hz. Hüseyin, Yezid\'e biat etmedi. Bu saltanatın ucu Kerbela oldu.' },
      art: { bg: 'city', props: ['flags'], actors: [{ kind: 'man', x: 30, label: { tr: 'Yezid' } }, { kind: 'crowd', x: 54, scale: 4 }, { kind: 'husayn', x: 78, label: { tr: 'Hz. Hüseyin' } }] },
      by: 'both',
    },
  ],
  sunni: [
    { book: 'Buhari, Sahih', ref: 'No. 2704 (Sulh, 9. bab)', says: { tr: 'Ebu Bekre\'den: Peygamber minberde, yanında Hz. Hasan varken "Bu oğlum seyyiddir; Allah onun aracılığıyla Müslümanların iki büyük grubunu barıştıracak" der. Rivayet Hz. Hasan\'ın Muaviye ile sulhünü de anlatır.' }, grade: { tr: 'Buhari (sahih kitap)' }, status: 'verified' },
    { book: 'Buhari, Sahih', ref: 'No. 3629 ve 3746 (numara/bab eşleşmesi kontrol edilecek)', says: { tr: 'Aynı Ebu Bekre rivayetinin başka bablarda tekrarı olması beklenir.' }, status: 'check' },
    { book: 'Tirmizi, el-Câmi\'', ref: 'No. 3768 (Menâkıb)', says: { tr: 'Ebu Said el-Hudri\'den: Hz. Hasan ve Hz. Hüseyin cennet gençlerinin efendileridir.' }, status: 'verified' },
    { book: 'Taberi, Târîhu\'r-Rusül ve\'l-Mülûk', ref: 'Hz. Ali sonrası biat ve sulh bölümü (cilt/sayfa kontrol edilecek)', says: { tr: 'Hz. Ali\'nin şehadetinden sonra Hz. Hasan\'a biat edildiği, Muaviye ile karşılaşma ve yönetimin devredilmesi.' }, status: 'check' },
    { book: 'Hâkim, el-Müstedrek', ref: 'No. 4863 (Hz. Hasan\'ın defni)', says: { tr: 'Hz. Hasan\'ın Bakî\'de defnedildiği ve cenazede büyük kalabalık toplandığı; Peygamber\'in yanına defin ve engel meselesini içermez.' }, grade: { tr: 'Zincirde Vâkıdî var; hadisçilerce genelde zayıf sayılır' }, url: 'https://en.tohed.com/hadith/mustadrak-hakim/4863/', status: 'verified' },
    { book: 'İbn Abdilber, el-İstîâb', ref: 'cilt 1, sayfa 388 (WikiShia dipnotu; kitap okunmadı)', says: { tr: 'Aişe\'nin Hz. Hasan\'ın Peygamber\'in yanına defnedilme isteğine başlangıçta razı olduğu aktarılır.' }, status: 'check' },
    { book: 'İbn Asâkir, Târîhu Medîneti Dımaşk', ref: 'cilt 13, sayfa 291 (forum aktarımı; kitap okunmadı)', says: { tr: 'Mervan\'ın "Osman Bakî\'de gömülürken Hz. Hasan mı Peygamber\'in evine gömülecek?" sözü.' }, status: 'check' },
    { book: 'Belâzurî, Ensâbü\'l-Eşrâf', ref: 'cilt 3, sayfa 60-65 (WikiShia dipnotu; kitap okunmadı)', says: { tr: 'Mervan\'ın Muaviye\'ye haber vermesi ve defin yeri taleplerinin anlatımı.' }, status: 'check' },
    { book: 'Ebü\'l-Ferec el-İsfahânî, Makâtilü\'t-Tâlibiyyîn', ref: 'sayfa 82 (WikiShia dipnotu; kitap okunmadı)', says: { tr: 'Aişe\'nin katırla gelip Haşimoğullarının engellenmesini istediği rivayeti.' }, status: 'check' },
    { book: 'Dîneverî, el-Ahbârü\'t-Tıvâl', ref: 'sayfa 221 (Wikipedia dipnotu; kitap okunmadı)', says: { tr: 'Emevîlerin Hz. Hasan\'ın cenazesine ok attığı.' }, status: 'check' },
    { book: 'İbnü\'l-Esîr, el-Kâmil; Üsdü\'l-Gâbe', ref: 'el-Kâmil III/460; Üsdü\'l-Gâbe II/15 (TDV maddesi dipnotu; kitap okunmadı)', says: { tr: 'Cü\'de\'nin Yezid ile evlenme vaadiyle ikna edilerek Hz. Hasan\'ı zehirlediği "rivayete göre" aktarılır.' }, status: 'check' },
    { book: 'İbn Kesîr, el-Bidâye ve\'n-Nihâye', ref: 'Hz. Hasan\'ın vefatı bölümü (İslamweb fetvası aktarımı; cilt/sayfa yok)', says: { tr: 'Zehirlenme anlatımını (hekimin bağırsakların parçalandığını söylemesi, Hz. Hüseyin\'in "kim yaptı?" sorusu) aktarır; Yezid\'in Cü\'de\'ye vaadi rivayetini ise "bence sahih değil, Muaviye için daha da uzak" diye reddeder.' }, status: 'check' },
    { book: 'İbn Teymiye, Minhâcü\'s-Sünne', ref: 'İslamweb fetvası aktarımı; cilt/sayfa yok', says: { tr: 'Muaviye\'nin zehirlettiğinin güvenilir delille sabit olmadığını, bu konuda konuşmanın ilimsiz konuşmak olacağını söyler.' }, status: 'check' },
    { book: 'Belâzurî, Vâkıdî ve diğer erken tarihçiler', ref: 'Madelung 1997, s.331-332 ve Vikipedi aktarımı', says: { tr: 'Bazı erken Sünni tarihçilerin (Madelung\'a göre) zehri Muaviye\'ye bağladığı; Vâkıdî\'nin zehri Muaviye adına hareket eden bir hizmetçiye bağladığı aktarılır.' }, status: 'check' },
  ],
  shia: [
    { book: 'Şeyh Müfid, el-İrşâd', ref: 'Hz. Hasan bölümü (sayfa kontrol edilecek)', says: { tr: 'Hz. Hasan\'a biat, Muaviye ile sulh ve Hz. Hasan\'ın zehirlenerek vefat ettiği rivayeti.' }, url: 'https://al-islam.org/kitab-al-irshad-book-shaykh-al-mufid', status: 'check' },
    { book: 'Şeyh Müfid, el-İrşâd', ref: 'cilt 2, sayfa 17-19 (WikiShia dipnotu; kitap okunmadı)', says: { tr: 'Yolun kesilmesi, Hz. Hüseyin\'in kan dökülmesini önlemesi ve Hz. Hasan\'ın ninesi yanında defni; Mervan\'ın sözü.' }, status: 'check' },
    { book: 'İbn Şehraşûb, Menâkıbü Âl-i Ebî Tâlib', ref: 'cilt 4, sayfa 44 (WikiShia dipnotu; kitap okunmadı)', says: { tr: 'Cenazeye ok atıldığı ve yetmiş okun isabet ettiği; bu ayrıntı yalnızca bu kaynakta bulunmuştur.' }, status: 'check' },
    { book: 'Tabersî, İ\'lâmü\'l-Verâ; Tûsî, el-Emâlî', ref: 'cilt 1, sayfa 414; sayfa 160-161 (WikiShia dipnotu)', says: { tr: 'Defin gerginliği ve Hz. Hasan\'ın vasiyeti.' }, status: 'check' },
    { book: 'Kuleynî, el-Kâfî', ref: 'Hz. Hasan\'ın vasiyeti (cilt/sayfa kontrol edilecek)', says: { tr: 'Hz. Hasan\'ın, Aişe\'nin engel olacağını önceden söylediği rivayeti.' }, status: 'check' },
    { book: 'Şeyh Müfid, el-İrşâd', ref: 'cilt 2, sayfa 15-16 (WikiShia aktarımı; kitap okunmadı)', says: { tr: 'Muaviye\'nin Cü\'de ile anlaşıp para ve Yezid ile evlilik vaadiyle Hz. Hasan\'ı zehirlettiği; vefatın yaklaşık kırk gün sonra olduğu.' }, status: 'check' },
    { book: 'Kuleynî, el-Kâfî', ref: 'cilt 8, sayfa 167 (WikiShia aktarımı)', says: { tr: 'Hz. Ca\'fer-i Sâdık\'tan: Hz. Hasan\'ı zehirleyen Cü\'de\'dir.' }, status: 'check' },
    { book: 'Tabersî, el-İhticâc', ref: 'cilt 2, sayfa 13 (WikiShia aktarımı)', says: { tr: 'Bazı rivayetlere göre zehri Muaviye Cü\'de\'ye verdi.' }, status: 'check' },
    { book: 'İbn Ebi\'l-Hadîd, Şerhu Nehci\'l-Belâğa', ref: 'cilt 16, sayfa 11 (WikiShia aktarımı)', says: { tr: 'Muaviye\'ye atfedilen "Peygamber\'in oğluna zehirle yaptığınızı oğluma yapmanızdan korkarım" sözü. Kimin kime söylediği ve sıhhati doğrulanmadı.' }, status: 'check' },
    { book: 'Şeyh Müfid, el-İrşâd; Meclisî, Bihârü\'l-Envâr', ref: 'Hz. Hasan\'ın cenazesi (sayfa kilitlenmedi)', says: { tr: 'Hz. Hüseyin\'in kardeşini Resûlullah\'ın yanına götürdüğü, Aişe\'nin katırla gelip tabutun oraya gömülmesini bizzat engellediği ve ok emrini verdiği, Mervan\'ın adamlarının bu emirle tabutu okladığı, İbn Abbas\'ın "bir gün deve, bir gün katır" sözü ve Hz. Hasan\'ın kan dökülmesin vasiyeti üzerine Bakî\'ye defnedildiği nakledilir. Sayfa uydurulmadı.' }, status: 'check' },
    { book: 'Meclisî, Bihârü\'l-Envâr', ref: 'Hz. Hasan\'ın zehirlenmesi (cilt ve sayfa kilitlenmedi)', says: { tr: 'Muaviye\'nin Cüde bint Eş\'as\'a Yezid\'le evlilik ve yüz bin dirhem vaat ederek Hz. Hasan\'ı zehirlettiği, vaadini tutmadığı nakledilir. Sayfa uydurulmadı.' }, status: 'check' },
  ],
  disputes: [
    {
      title: { tr: 'Sulh nasıl okunur?' },
      sunni: { tr: 'Hz. Hasan\'ın sulhüyle iki grubun barıştığı anlatılır. Bu olay Sünni kaynaklarında da geçmektedir (Buhari, No. 2704). Sünni okumada bu, onun erdemi ve ümmetin birliğidir.' },
      shia: { tr: 'Hz. Hasan\'ın sulhüyle iki grubun barıştığı anlatılır. Bu olay Sünni kaynaklarında da geçmektedir (Buhari, No. 2704). Şii anlatıda o hakkından vazgeçmemiş, şartlar sonradan bozulmuştur.' },
    },
    {
      title: { tr: 'Hz. Hasan\'ı kim zehirledi?' },
      sunni: { tr: 'Hz. Hasan\'ın zehirlendiği birçok kaynakta geçer ve Cü\'de\'nin adı anılır. İbn Teymiye ve İbn Kesîr, Muaviye\'nin emrinin sahih delille sabit olmadığını söyler.' },
      shia: { tr: 'Hz. Hasan\'ın zehirlendiği birçok kaynakta geçer ve Cü\'de\'nin adı anılır. Şii kitaplarda Muaviye, Yezid\'in yolu için zehirletmiş sayılır; Hz. Hasan şehittir.' },
    },
    {
      title: { tr: 'Defin neden Peygamber\'in yanında olmadı?' },
      sunni: { tr: 'Hz. Hasan\'ın Peygamber\'in yanına defnedilmek istediği anlatılır. Sünni okumada oda Aişe\'nin tasarrufundaydı; fitne endişesi vardı ve asıl itirazın Mervan\'dan geldiği vurgulanır.' },
      shia: { tr: 'Hz. Hasan\'ın Peygamber\'in yanına defnedilmek istediği anlatılır. Şii anlatıda Aişe tabutun Peygamber\'in yanına gömülmesini bizzat engelledi ve ok emrini verdi. Mervan\'ın adamları bu emirle okladı. Hz. Hüseyin, kan dökülmesin vasiyeti yüzünden kılıcını çekmedi.' },
    },
    {
      title: { tr: 'Okları kim attı?' },
      sunni: { tr: 'Cenazeye ok atıldığı Dîneverî\'de Emevilere bağlanır. Okları Mervan\'ın adamları attı. Aişe\'nin bizzat engel olduğu ve ok emrini verdiği Şii rivayetindedir (el-İrşâd, Bihâr; sayfa kilitlenmedi).' },
      shia: { tr: 'Aişe ok emrini verdi. Mervan\'ın adamları tabutu okladı, oklar tabuta saplandı. İbn Şehraşûb yetmiş ok der; bu sayı tek kaynağa dayanır.' },
    },
    {
      title: { tr: 'Cennet gençlerinin efendileri' },
      sunni: { tr: 'Hz. Hasan ve Hz. Hüseyin için cennet gençlerinin efendileri denmesi büyük bir fazilettir. Bu olay Sünni kaynaklarında da geçmektedir (Tirmizi, No. 3768). Sünni okumada bu sözden imamet hükmü çıkarılmaz.' },
      shia: { tr: 'Hz. Hasan ve Hz. Hüseyin için cennet gençlerinin efendileri denmesi büyük bir fazilettir. Bu olay Sünni kaynaklarında da geçmektedir (Tirmizi, No. 3768). Şii anlatıda bu söz, Ehl-i Beyt\'in manevi önderliğiyle birlikte anılır.' },
    },
  ],
  questions: [
    { tr: 'Erken kaynakların çoğu Hz. Hasan\'ın zehirlendiğini aktarır. Barış için yönetimi bırakan bu torunun vefatı, içinizde nasıl bir hüzün ve soru bırakıyor?' },
    { tr: 'Hz. Hasan, dedesi Peygamber\'in yanına gömülmek istedi. Bu istek ve önündeki engel size ne söylüyor?' },
    { tr: 'Cenaze sırasında gerginlik çıktığı ve ok atıldığı aktarılır. Hz. Hüseyin kan dökülmesin diye geri durdu. Bu sabır size ne öğretiyor?' },
    { tr: 'Peygamber Hz. Hasan\'a seyyid dedi ve iki grubu barıştıracağını haber verdi. Kanı durdurmayı seçen bir torun hakkında ne hissediyorsunuz?' },
    { tr: 'Hz. Hasan ve Hz. Hüseyin için cennet gençlerinin efendileri denmişti. İki kardeşin sonraki yılları, bu sevgiyi size nasıl okutuyor?' },
    { tr: 'Sulh şartları ve vefat, kitaplarda farklı anlatılıyor. Böyle bir yerde hangi anlatıya neden güvenirsiniz?' },
    { tr: 'Hz. Hasan yönetimi barış için bırakırken, sonraki nesilde yönetim babadan oğula geçti. Bu değişim, Hz. Hüseyin\'in duruşunu anlamakta size ne söyler?' },
  ],
  summary: { tr: 'Peygamber\'in seyyid dediği Hz. Hasan, babasının şehadetinden sonra biat aldı. Muaviye orduyu rüşvetle satın alınca kan dökülmesin diye savaşı bitirdi. Sulh şartları sonra çiğnendi. Yaklaşık on yıl sonra zehirlenerek vefat etti.' },
};

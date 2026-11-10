import type { HistEvent } from '../types';

// Kaynak: research/05-hasan-kerbela-ve-kaynak-rehberi.md (Parça A1, A2, A5). status araştırmadaki doğrulama durumunu aynen yansıtır.
export const hasan: HistEvent = {
  id: 'hasan',
  date: { tr: '40-41 H (661)', en: '40-41 AH (661)' },
  title: { tr: 'Hz. Hasan, sulh ve Emevi iktidarı', en: 'Hz. Hasan, the peace treaty and Umayyad rule' },
  hook: { tr: 'Peygamber\'in seyyid dediği Hz. Hasan, ümmetin kanı dökülmesin diye hakkını bıraktı ve zehirlendi.', en: 'Why did the grandson the Prophet called "my son is a master" have to hand over the leadership?' },
  scenes: [
    {
      text: { tr: 'Medine\'de, Peygamber\'in mescidinde, cemaat minberin önünde toplanırdı. Peygamber konuşurken zaman zaman küçük torunu **Hz. Hasan** da yanında olurdu. Hz. Fatıma ile Hz. Ali\'nin ilk oğluydu ve Peygamber ona derin bir sevgiyle bağlıydı. Peygamber konuşurken bir cemaate bakar, bir de yanındaki torununa dönerdi. Cemaat, Peygamber\'in yüzünde bu çocuğa duyduğu sevgiyi açıkça görürdü. Peygamber, Hz. Hasan ve kardeşi Hz. Hüseyin için "Bu ikisi cennet gençlerinin efendileridir" derdi. Medine halkı bu çocuğun Peygamber\'in yanında büyüyüşünü sevgiyle izledi.' },
      art: { bg: 'city', props: ['sun', 'minbar'], actors: [{ kind: 'crowd', x: 26, scale: 7 }, { kind: 'prophet', x: 62, label: { tr: 'Hz. Peygamber' } }, { kind: 'hasan', x: 80, scale: 0.7, label: { tr: 'Hz. Hasan' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Bir gün yine minberdeyken Peygamber, yanındaki **Hz. Hasan**\'ı gösterdi ve cemaate şöyle dedi: "Bu oğlum seyyiddir. Allah onun aracılığıyla Müslümanların iki büyük grubunu barıştıracak." Seyyid, efendi ve önder demektir. Bu söz Buhari\'de geçer. O gün cemaatin hiçbiri bu sözün ne zaman ve nasıl gerçekleşeceğini bilmiyordu. Ama Peygamber, torununun ileride ümmetin kanını durduracak bir barışa imza atacağını önceden haber veriyordu. Yıllar sonra Hz. Hasan\'ın yaptığı sulh, bir yenilgi değil, dedesinin önceden müjdelediği bir merhamet olarak anılacaktı.' },
      art: { bg: 'city', props: ['sun', 'minbar'], actors: [{ kind: 'prophet', x: 44, pose: 'raise', label: { tr: 'Hz. Peygamber' } }, { kind: 'hasan', x: 64, scale: 0.7, label: { tr: 'Hz. Hasan' } }, { kind: 'crowd', x: 22, scale: 5 }] },
      by: 'both',
    },
    {
      text: { tr: 'Hicretin 40. yılında, Ramazan ayında, **Hz. Ali** Kûfe mescidinde şehit edildi. Kûfe halkı, cenazenin ardından onun büyük oğlu **Hz. Hasan**\'a biat etti. Biat, bağlılık sözüdür. Hz. Hasan, babasının vasiyetiyle ümmetin yeni imamı oldu. Kûfe mescidinde minbere çıktığında yüzünde babasını kaybetmiş bir oğulun acısı vardı. Babasının kanı daha kurumamıştı ve ümmetin bütün yükü artık onun omuzlarındaydı. Ama Şam\'da biat etmeyen bir vali hâlâ duruyordu ve Hz. Hasan\'ın imamlığı ilk günden büyük bir sınavla karşılaşacaktı.' },
      art: { bg: 'city', props: ['flags'], actors: [{ kind: 'crowd', x: 28, scale: 8 }, { kind: 'hasan', x: 66, label: { tr: 'Hz. Hasan' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Şam\'da **Muaviye**, ticaret yollarını ve zengin bir hazineyi elinde tutuyordu. Hz. Ali\'nin şehadetini fırsat bilerek ordusunu topladı ve Kûfe\'nin üzerine yürüdü. **Hz. Hasan** da ordusunu hazırlayıp karşı yöne doğru yola çıktı. İki ordu birbirine yaklaştıkça Müslümanlar arasında yeni bir iç savaşın kapıda olduğu anlaşıldı. Kûfe ise bölünmüştü. Cemel\'in, Sıffin\'in ve Nehrevan\'ın yorgunluğu halkın üzerine çökmüştü. Hz. Hasan, babasının şehadetinin hemen ardından ikinci bir büyük savaşın eşiğinde duruyordu.' },
      art: { bg: 'battle', props: ['flags', 'tents'], actors: [{ kind: 'crowd', x: 24, scale: 7 }, { kind: 'man', x: 78, label: { tr: 'Muaviye' } }] },
      by: 'both',
    },
    {
      text: { tr: '**Muaviye**, savaştan önce hile ve rüşvetle **Hz. Hasan**\'ın komutanlarını satın almaya başladı. Hz. Hasan\'ın komutanlarından **Ubeydullah b. Abbas**, bir gece ordusunu bırakıp gizlice Muaviye\'nin tarafına geçti. Ardından başkaları da onu izledi. Ordu içeriden çürüyordu. Hz. Hasan, güçsüz kalmış bir orduyla savaşa girerse Ehl-i Beyt dostlarının boşuna kırılacağını gördü. Ümmetin kanı dökülmesin ve sadık insanlar telef olmasın diye savaşı durdurdu. Yönetim Muaviye\'ye geçti. 41 yılına Âmü\'l-Cemâa, yani birlik yılı dendi. Ama bu birlik, satın alınmış bir ordunun sessizliği üzerine kurulmuştu.' },
      art: { bg: 'dawn', props: ['sun', 'scroll'], actors: [{ kind: 'hasan', x: 34, label: { tr: 'Hz. Hasan' } }, { kind: 'man', x: 68, label: { tr: 'Muaviye' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Sulh yazıya geçirilirken **Hz. Hasan** önemli şartlar koydu. **Muaviye**, Allah\'ın Kitabı ve Peygamber\'in sünnetiyle hükmedecek, kimseye **Hz. Ali**\'yi kötületmeyecek ve kendisinden sonra yerine bir halife tayin etmeyecekti. Hz. Hasan bu şartlarla imamlık hakkından vazgeçmiş olmadı. Yalnızca ümmetin kanını korumak için yönetimi bıraktı. Ama Muaviye bu şartların hiçbirine uymadı. Sulhun mürekkebi kurumadan minberlerde Hz. Ali\'ye lanet okunmaya başlandı. Antlaşma kâğıtta duruyordu, ama her cuma hutbesinde yeniden çiğneniyordu.' },
      art: { bg: 'interior', props: ['scroll'], actors: [{ kind: 'hasan', x: 50, pose: 'sit', label: { tr: 'Hz. Hasan' } }] },
      by: 'shia',
    },
    {
      text: { tr: 'Sulhtan sonra **Hz. Hasan** Kûfe\'den ayrılıp Medine\'ye döndü. Orada yaklaşık on yıl, dedesinin şehrinde sessiz bir hayat sürdü. Bu yılların sonunda ağır bir hastalığa yakalandı. Rivayetlere göre bu hastalık bir zehirlenmeydi ve zehri ona eşi **Ca\'de bint Eş\'as** vermişti. Hz. Hasan kırk gün kadar acı çektikten sonra vefat etti. Vefatı, 28 Safer 49 ya da 50 yılı olarak anılır. Hz. Câfer-i Sâdık\'tan gelen rivayete göre Hz. Hasan\'ı zehirleyen Ca\'de\'dir. Peygamber\'in seyyid dediği torun, dedesinin şehrinde zehirle şehit edildi.' },
      art: { bg: 'night', props: ['moon', 'stars'], actors: [{ kind: 'hasan', x: 40, pose: 'sit', label: { tr: 'Hz. Hasan' } }, { kind: 'husayn', x: 62, scale: 0.9, label: { tr: 'Hz. Hüseyin' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Rivayetlere göre bu zehrin arkasında **Muaviye** vardı. Muaviye, Ca\'de\'ye oğlu **Yezid**\'le evlendirme sözü ve yüz bin dirhem vaat etmişti. Ca\'de bu vaade kanıp kocasını zehirledi. Hz. Hasan şehit olunca Muaviye sözünü tutmadı. Ca\'de ne Yezid\'le evlendi ne de vaat edilen paranın tamamını aldı. Bazı Sünni âlimler bu rivayetin güvenilir bir delille sabit olmadığını söyler. İbn Abdilberr gibi bazıları ise haberi nakleder, ama kesin bir hüküm vermez. Şii kaynaklarında ise bu rivayet açıkça yer alır. Hz. Hasan\'ın ölümüyle sulhun önündeki son engel de kalkmış oldu.' },
      cites: [{ side: 'shia', i: 5 }, { side: 'shia', i: 9 }],
      art: { bg: 'interior', props: ['scroll'], actors: [{ kind: 'man', x: 24, label: { tr: 'Muaviye' } }, { kind: 'woman', x: 50, label: { tr: 'Cü\'de' } }, { kind: 'hasan', x: 76, pose: 'sit', label: { tr: 'Hz. Hasan' } }] },
      by: 'shia',
    },
    {
      text: { tr: 'Ölüm döşeğindeyken **Hz. Hasan**, kardeşi **Hz. Hüseyin**\'i yanına çağırdı ve ona vasiyet etti. Kendisini dedesi Resûlullah\'ın yanına defnetmelerini istedi. Ama bir şart koştu: "Cenazemde bir damla bile kan dökülmesin." Eğer Peygamber\'in yanına defnedilmesine engel olunur ve kan dökülme tehlikesi doğarsa, kendisini Bakî mezarlığına, ninesi **Fatıma bint Esed**\'in yanına gömmelerini söyledi. Rivayetlere göre Hz. Hasan, Peygamber\'in yanına defnedilmesine engel olunacağını önceden haber vermişti. Hayatı boyunca ümmetin kanını korumak için hakkından vazgeçen imam, ölümünde bile aynı merhameti gösteriyordu.' },
      art: { bg: 'interior', props: ['scroll'], actors: [{ kind: 'hasan', x: 38, pose: 'sit', label: { tr: 'Hz. Hasan' } }, { kind: 'husayn', x: 62, scale: 0.9, label: { tr: 'Hz. Hüseyin' } }] },
      by: 'both',
    },
    {
      text: { tr: '**Hz. Hüseyin** ve Hâşimoğulları, Hz. Hasan\'ın tabutunu omuzlarına alıp Peygamber\'in kabrine doğru yürüdü. Tam o sırada **Aişe**, bir katıra binmiş halde **Mervan** ve Ümeyyeoğullarıyla birlikte yolu kesti. Tabutun Peygamber\'in yanına gömülmesine izin vermedi. Mervan da, "Osman Bakî\'de gömülürken Hasan mı Peygamber\'in evine gömülecek?" diyerek bağırdı. Ehl-i Beyt rivayetlerine göre Aişe tabuta ok atılmasını emretti. Bunu gören **İbn Abbas** dayanamadı ve Aişe\'ye şöyle dedi: "Bir gün deveye, bir gün katıra binersin." Cemel\'de Hz. Ali\'ye karşı deveye binmişti, şimdi de Hz. Hasan\'ın cenazesine karşı katıra binmişti.' },
      art: { bg: 'city', props: ['flags'], actors: [{ kind: 'man', x: 26, label: { tr: 'Mervan' } }, { kind: 'woman', x: 52, label: { tr: 'Aişe' } }, { kind: 'husayn', x: 78, scale: 0.9, label: { tr: 'Hz. Hüseyin' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Mervan\'ın adamları emri yerine getirdi ve tabutu okladı. Oklar, Peygamber\'in seyyid dediği torununun naaşını taşıyan tabuta saplandı. Bazı rivayetler okları atanların Emeviler olduğunu söyler. Bir rivayet ise yetmiş okun tabuta isabet ettiğini anlatır, ama bu sayı yalnızca tek bir kaynakta geçer. Okların sayısı ne olursa olsun, Peygamber\'in torununun cenazesi, dedesinin şehrinde oklarla karşılanmıştı. Tabutu taşıyanlar okların altında öfkeyle beklerken herkesin gözü, kardeşinin tabutunun yanında duran Hz. Hüseyin\'e çevrildi.' },
      art: { bg: 'dune-dusk', props: ['swords'], actors: [{ kind: 'crowd', x: 28, scale: 6 }, { kind: 'hasan', x: 54, label: { tr: 'Hz. Hasan' } }, { kind: 'crowd', x: 78, scale: 5 }] },
      by: 'both',
    },
    {
      text: { tr: '**Hz. Hüseyin** kılıcını çekmedi ve Hâşimoğullarına da çekmemelerini söyledi. Kardeşinin "Cenazemde bir damla kan dökülmesin" vasiyetini hatırlıyordu. Tabut, Peygamber\'in kabrinden geri çevrilip Bakî mezarlığına götürüldü. **Hz. Hasan**, orada ninesi **Fatıma bint Esed**\'in yanına defnedildi. Cenazede büyük bir kalabalık toplanmıştı ve Medine halkı gözyaşı döküyordu. Hz. Hüseyin, kardeşini toprağa verirken onun vasiyetini harfiyen yerine getirdi. O gün tek bir damla kan dökülmedi. Hz. Hasan\'ın kabri bugün de Medine\'de, Bakî mezarlığındadır.' },
      art: { bg: 'night', props: ['moon', 'stars'], actors: [{ kind: 'husayn', x: 40, label: { tr: 'Hz. Hüseyin' } }, { kind: 'crowd', x: 66, scale: 5 }] },
      by: 'both',
    },
    {
      text: { tr: 'Hicretin 60. yılında **Muaviye** öldü. Sulhun şartlarına aykırı olarak, ölmeden önce yerine oğlu **Yezid**\'i halife bırakmıştı. Böylece halifelik bir ailenin içinde babadan oğula geçen bir saltanata dönüştü. Hz. Hasan\'ın yaptığı sulhun son şartı da çiğnenmişti. Bu sırada Peygamber\'in hayatta kalan son torunu **Hz. Hüseyin**, Medine\'deydi. Kardeşi barış için hakkından vazgeçmişti, ama Yezid\'in saltanatı karşısında artık susmanın vakti değildi. Hz. Hüseyin Yezid\'e biat etmeyi reddetti ve bu ret, onu Kerbelâ\'ya götürecek yolun başlangıcı oldu.' },
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
    { book: 'Şeyh Müfid, el-İrşâd; Meclisî, Bihârü\'l-Envâr', ref: 'Hz. Hasan\'ın cenazesi (sayfa numarası ayrıca verilmedi)', says: { tr: 'Hz. Hüseyin\'in kardeşini Resûlullah\'ın yanına götürdüğü, Aişe\'nin katırla gelip tabutun oraya gömülmesini bizzat engellediği ve ok emrini verdiği, Mervan\'ın adamlarının bu emirle tabutu okladığı, İbn Abbas\'ın "bir gün deve, bir gün katır" sözü ve Hz. Hasan\'ın kan dökülmesin vasiyeti üzerine Bakî\'ye defnedildiği nakledilir. Sayfa numarası ayrıca verilmedi.' }, status: 'check' },
    { book: 'Meclisî, Bihârü\'l-Envâr', ref: 'Hz. Hasan\'ın zehirlenmesi (cilt ve sayfa numarası ayrıca verilmedi)', says: { tr: 'Muaviye\'nin Cüde bint Eş\'as\'a Yezid\'le evlilik ve yüz bin dirhem vaat ederek Hz. Hasan\'ı zehirlettiği, vaadini tutmadığı nakledilir. Sayfa numarası ayrıca verilmedi.' }, status: 'check' },
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
      sunni: { tr: 'Cenazeye ok atıldığı Dîneverî\'de Emevilere bağlanır. Okları Mervan\'ın adamları attı. Aişe\'nin bizzat engel olduğu ve ok emrini verdiği Şii rivayetindedir (el-İrşâd, Bihâr; sayfa numarası ayrıca verilmedi).' },
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

import type { HistEvent } from '../types';

// Kaynak: research/05-hasan-kerbela-ve-kaynak-rehberi.md (Parça A1, A2, A5). status araştırmadaki doğrulama durumunu aynen yansıtır.
export const hasan: HistEvent = {
  id: 'hasan',
  date: { tr: '40-41 H (661)', en: '40-41 AH (661)' },
  title: { tr: 'Hz. Hasan, sulh ve Emevi iktidarı', en: 'Imam Hasan, the peace treaty and Umayyad rule' },
  hook: { tr: 'Hz. Peygamber (s.a.v.) «bu oğlum seyyiddir» demişti. Hz. Hasan (a.s.) kanı durdurmak için yönetimi neden bıraktı?', en: 'Why did the grandson the Prophet called "my son is a master" have to hand over the leadership?' },
  scenes: [
    {
      text: { tr: 'Hz. Peygamber (s.a.v.) küçük torunu Hz. Hasan\'ı (a.s.) çok severdi. Bir gün minberde konuşurken o yanındaydı. Bir cemaate, bir ona baktı. Sevgi, hutbenin ortasında durmuştu.' },
      art: { bg: 'city', props: ['sun', 'minbar'], actors: [{ kind: 'crowd', x: 26, scale: 7 }, { kind: 'prophet', x: 62, label: { tr: 'Hz. Peygamber' } }, { kind: 'hasan', x: 80, scale: 0.7, label: { tr: 'Hz. Hasan' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Sonra şöyle dedi: «Bu oğlum seyyiddir. Allah onun aracılığıyla Müslümanların iki büyük grubunu barıştıracak.» Söz Buhari 2704\'tedir. Yıllar sonra, kanı durdurmak için yönetimi bırakan torunun hayatında anlamını bulacaktı.' },
      art: { bg: 'city', props: ['sun', 'minbar'], actors: [{ kind: 'prophet', x: 44, pose: 'raise', label: { tr: 'Hz. Peygamber' } }, { kind: 'hasan', x: 64, scale: 0.7, label: { tr: 'Hz. Hasan' } }, { kind: 'crowd', x: 22, scale: 5 }] },
      by: 'both',
    },
    {
      text: { tr: 'Ramazan 40\'ta (661) Hz. Ali şehit edildi. Kûfe halkı oğlu Hz. Hasan\'a biat etti. Peygamber\'in «seyyid» dediği torun, müminlerin yeni önderi oldu.' },
      art: { bg: 'city', props: ['flags'], actors: [{ kind: 'crowd', x: 28, scale: 8 }, { kind: 'hasan', x: 66, label: { tr: 'Hz. Hasan' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Şam\'da Muaviye ordusuyla hazır bekliyordu. İki taraf birbirine yaklaştı. Ortada yeni bir iç savaş, yeni bir Ammar, yeni bir Cemel tehlikesi vardı.' },
      art: { bg: 'battle', props: ['flags', 'tents'], actors: [{ kind: 'crowd', x: 24, scale: 7 }, { kind: 'man', x: 78, label: { tr: 'Muaviye' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Hz. Hasan kanı durdurmak için Muaviye ile anlaştı ve yönetimi ona bıraktı. Bu yıl «âmü\'l-cemâa», birlik yılı diye anıldı. Bırakış, zayıflık değil, Peygamber\'in müjdesindeki barıştı.' },
      art: { bg: 'dawn', props: ['sun', 'scroll'], actors: [{ kind: 'hasan', x: 34, label: { tr: 'Hz. Hasan' } }, { kind: 'man', x: 68, label: { tr: 'Muaviye' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Şartlar kaynaklara göre değişir. Şiî anlatımda Hz. Hasan hakkından vazgeçmedi; durumun gereği olarak sulha razı oldu. Şartların sonradan bozulduğu da vurgulanır. Sulh, hakkın unutulması değildi.' },
      art: { bg: 'interior', props: ['scroll'], actors: [{ kind: 'hasan', x: 50, pose: 'sit', label: { tr: 'Hz. Hasan' } }] },
      by: 'shia',
    },
    {
      text: { tr: 'Hz. Hasan Medine\'de yaklaşık on yıl sessiz yaşadı ve 49-51 H. arasında, çoğunlukla 50\'de, zehirlenerek vefat etti. Erken kaynakların çoğu zehirlendiğini aktarır. Rivayetlere göre zehri eşi Cü\'de bint el-Eş\'as verdi. Sessizlik, şehadete kadar sürdü.' },
      art: { bg: 'night', props: ['moon', 'stars'], actors: [{ kind: 'hasan', x: 40, pose: 'sit', label: { tr: 'Hz. Hasan' } }, { kind: 'husayn', x: 62, scale: 0.9, label: { tr: 'Hz. Hüseyin' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Şiî kaynaklara (Müfid, Kuleynî, Tabersî) göre Muaviye, Yezid\'in yolunu açmak için Cü\'de\'ye para ve evlilik vaat ederek Hz. Hasan\'ı zehirletti. Zehirle vefat eden o, bu gelenekte şehittir. İbn Teymiye ve İbn Kesîr gibi bazı Sünnî âlimler Muaviye\'nin rolünü sabit görmez. Zehirlenme anlatılır; emri kimin verdiği ayrılır.' },
      art: { bg: 'interior', props: ['scroll'], actors: [{ kind: 'man', x: 24, label: { tr: 'Muaviye' } }, { kind: 'woman', x: 50, label: { tr: 'Cü\'de' } }, { kind: 'hasan', x: 76, pose: 'sit', label: { tr: 'Hz. Hasan' } }] },
      by: 'shia',
    },
    {
      text: { tr: 'Vefatına yakın, ailesine kendisini Hz. Peygamber\'in yanına defnetmelerini vasiyet etti. Kan dökülmesinden korkulursa Bakî\'de, annesinin yanında gömülmesini istedi. Son sözü de barıştı.' },
      art: { bg: 'interior', props: ['scroll'], actors: [{ kind: 'hasan', x: 38, pose: 'sit', label: { tr: 'Hz. Hasan' } }, { kind: 'husayn', x: 62, scale: 0.9, label: { tr: 'Hz. Hüseyin' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Haberi alan Mervan b. el-Hakem karşı çıktı. Ona atfedilen söz şudur: «Osman şehrin kenarında gömülürken Hasan mı Peygamber\'in evine gömülecek?» Bazı rivayetlere göre Hz. Aişe de katırla gelip engel olmak istedi. Bu ayrıntılar tek bir senede kilitli değildir.' },
      art: { bg: 'city', props: ['flags'], actors: [{ kind: 'man', x: 26, label: { tr: 'Mervan' } }, { kind: 'woman', x: 52, label: { tr: 'Aişe' } }, { kind: 'husayn', x: 78, scale: 0.9, label: { tr: 'Hz. Hüseyin' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Cenaze Peygamber\'in kabrine götürülürken iki taraf silahlandı. Dîneverî\'ye göre Emevîler cenazeye ok attı. İbn Şehraşûb yetmiş okun isabet ettiğini aktarır; bu sayı tek kaynağa dayanır ve sayfa doğrulanmadı. Okun kendisi, birkaç erken anlatıda vardır.' },
      art: { bg: 'dune-dusk', props: ['swords'], actors: [{ kind: 'crowd', x: 28, scale: 6 }, { kind: 'hasan', x: 54, label: { tr: 'Hz. Hasan' } }, { kind: 'crowd', x: 78, scale: 5 }] },
      by: 'both',
    },
    {
      text: { tr: 'Hz. Hüseyin (a.s.) ağabeyinin vasiyetine uydu ve kan dökülmesine izin vermedi. Hz. Hasan, Bakî\'de ninesi Fâtıma bint Esed\'in yanına defnedildi. Barış, kabre kadar korundu.' },
      art: { bg: 'night', props: ['moon', 'stars'], actors: [{ kind: 'husayn', x: 40, label: { tr: 'Hz. Hüseyin' } }, { kind: 'crowd', x: 66, scale: 5 }] },
      by: 'both',
    },
    {
      text: { tr: 'Muaviye 60\'ta (680) ölünce yönetim oğlu Yezid\'e geçti. Medine\'de Hz. Hüseyin gibi bazıları biatta durdu. Kerbela\'ya giden yol burada başladı. Bir torun kanı durdurmuştu; diğeri zulme boyun eğmeyecekti.' },
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
    { book: 'İbn Abdilber, el-İstîâb', ref: 'Hz. Hasan maddesi (WikiShia dipnotu; sayfa doğrulanmadı)', says: { tr: 'Aişe\'nin Hz. Hasan\'ın Peygamber\'in yanına defnedilme isteğine başlangıçta razı olduğu aktarılır.' }, status: 'check' },
    { book: 'İbn Asâkir, Târîhu Medîneti Dımaşk', ref: 'Hz. Hasan bölümü (ikincil aktarım; sayfa doğrulanmadı)', says: { tr: 'Mervan\'ın "Osman Bakî\'de gömülürken Hasan mı Peygamber\'in evine gömülecek?" sözü.' }, status: 'check' },
    { book: 'Belâzurî, Ensâbü\'l-Eşrâf', ref: 'defin bölümü (WikiShia dipnotu; sayfa doğrulanmadı)', says: { tr: 'Mervan\'ın Muaviye\'ye haber vermesi ve defin yeri taleplerinin anlatımı.' }, status: 'check' },
    { book: 'Ebü\'l-Ferec el-İsfahânî, Makâtilü\'t-Tâlibiyyîn', ref: 'defin bölümü (WikiShia dipnotu; sayfa doğrulanmadı)', says: { tr: 'Aişe\'nin katırla gelip Haşimoğullarının engellenmesini istediği rivayeti.' }, status: 'check' },
    { book: 'Dîneverî, el-Ahbârü\'t-Tıvâl', ref: 'cenaze bölümü (ikincil dipnot; sayfa doğrulanmadı)', says: { tr: 'Emevîlerin Hz. Hasan\'ın cenazesine ok attığı.' }, status: 'check' },
    { book: 'İbnü\'l-Esîr, el-Kâmil; Üsdü\'l-Gâbe', ref: 'vefat bölümü (TDV dipnotu; sayfa doğrulanmadı)', says: { tr: 'Cü\'de\'nin Yezid ile evlenme vaadiyle ikna edilerek Hz. Hasan\'ı zehirlediği "rivayete göre" aktarılır.' }, status: 'check' },
    { book: 'İbn Kesîr, el-Bidâye ve\'n-Nihâye', ref: 'Hz. Hasan\'ın vefatı bölümü (İslamweb fetvası aktarımı; cilt/sayfa yok)', says: { tr: 'Zehirlenme anlatımını (hekimin bağırsakların parçalandığını söylemesi, Hz. Hüseyin\'in "kim yaptı?" sorusu) aktarır; Yezid\'in Cü\'de\'ye vaadi rivayetini ise "bence sahih değil, Muaviye için daha da uzak" diye reddeder.' }, status: 'check' },
    { book: 'İbn Teymiye, Minhâcü\'s-Sünne', ref: 'İslamweb fetvası aktarımı; cilt/sayfa yok', says: { tr: 'Muaviye\'nin zehirlettiğinin güvenilir delille sabit olmadığını, bu konuda konuşmanın ilimsiz konuşmak olacağını söyler.' }, status: 'check' },
    { book: 'Belâzurî, Vâkıdî ve diğer erken tarihçiler', ref: 'Madelung 1997, s.331-332 ve Vikipedi aktarımı', says: { tr: 'Bazı erken Sünni tarihçilerin (Madelung\'a göre) zehri Muaviye\'ye bağladığı; Vâkıdî\'nin zehri Muaviye adına hareket eden bir hizmetçiye bağladığı aktarılır.' }, status: 'check' },
  ],
  shia: [
    { book: 'Şeyh Müfid, el-İrşâd', ref: 'Hz. Hasan bölümü (sayfa kontrol edilecek)', says: { tr: 'Hz. Hasan\'a biat, Muaviye ile sulh ve Hz. Hasan\'ın zehirlenerek vefat ettiği rivayeti.' }, url: 'https://al-islam.org/kitab-al-irshad-book-shaykh-al-mufid', status: 'check' },
    { book: 'Şeyh Müfid, el-İrşâd', ref: 'defin bölümü (WikiShia dipnotu; sayfa doğrulanmadı)', says: { tr: 'Yolun kesilmesi, Hz. Hüseyin\'in kan dökülmesini önlemesi ve Hz. Hasan\'ın ninesi yanında defni; Mervan\'ın sözü.' }, status: 'check' },
    { book: 'İbn Şehraşûb, Menâkıbü Âl-i Ebî Tâlib', ref: 'cenazeye ok atılması (WikiShia dipnotu; sayfa doğrulanmadı; sayı tek kaynağa dayanır)', says: { tr: 'Cenazeye ok atıldığı ve yetmiş okun isabet ettiği; bu ayrıntı yalnızca bu kaynakta bulunmuştur.' }, status: 'check' },
    { book: 'Tabersî, İ\'lâmü\'l-Verâ; Tûsî, el-Emâlî', ref: 'vasiyet ve defin (WikiShia dipnotu; sayfa doğrulanmadı)', says: { tr: 'Defin gerginliği ve Hz. Hasan\'ın vasiyeti.' }, status: 'check' },
    { book: 'Kuleynî, el-Kâfî', ref: 'Hz. Hasan\'ın vasiyeti (cilt/sayfa kontrol edilecek)', says: { tr: 'Hz. Hasan\'ın, Aişe\'nin engel olacağını önceden söylediği rivayeti.' }, status: 'check' },
    { book: 'Şeyh Müfid, el-İrşâd', ref: 'zehirlenme bölümü (WikiShia aktarımı; sayfa doğrulanmadı)', says: { tr: 'Muaviye\'nin Cü\'de ile anlaşıp para ve Yezid ile evlilik vaadiyle Hz. Hasan\'ı zehirlettiği; vefatın yaklaşık kırk gün sonra olduğu.' }, status: 'check' },
    { book: 'Kuleynî, el-Kâfî', ref: 'zehirlenme rivayeti (WikiShia aktarımı; sayfa doğrulanmadı)', says: { tr: 'İmam Sâdık\'tan: Hz. Hasan\'ı zehirleyen Cü\'de\'dir.' }, status: 'check' },
    { book: 'Tabersî, el-İhticâc', ref: 'zehirlenme rivayeti (WikiShia aktarımı; sayfa doğrulanmadı)', says: { tr: 'Bazı rivayetlere göre zehri Muaviye Cü\'de\'ye verdi.' }, status: 'check' },
    { book: 'İbn Ebi\'l-Hadîd, Şerhu Nehci\'l-Belâğa', ref: 'Muaviye\'ye atfedilen söz (WikiShia aktarımı; sayfa doğrulanmadı)', says: { tr: 'Muaviye\'ye atfedilen "Peygamber\'in oğluna zehirle yaptığınızı oğluma yapmanızdan korkarım" sözü. Kimin kime söylediği ve sıhhati doğrulanmadı.' }, status: 'check' },
  ],
  disputes: [
    {
      title: { tr: 'Sulh nasıl yorumlanır?' },
      sunni: { tr: 'Sulh, Hz. Hasan\'ın erdemi ve ümmetin birliğinin sağlanması olarak yüceltilir; Buhari 2704\'teki "iki büyük grubu barıştıracak" sözü buna bağlanır.' },
      shia: { tr: 'Sulh, zor şartlarda bir maslahat gereğidir; Hz. Hasan hakkından vazgeçmemiş, anlaşma şartları sonradan bozulmuştur. Şartların ayrıntıları kaynaklara göre değişir.' },
    },
    {
      title: { tr: 'Hz. Hasan\'ı kim zehirledi? Muaviye\'nin rolü' },
      sunni: { tr: 'Zehirlenme rivayeti Sünni kaynaklarda da vardır (İbnü\'l-Esîr, İbn Kesîr, İbn Abdilber); Cü\'de\'nin adı geçer. Ancak İbn Teymiye ve İbn Kesîr, Muaviye\'nin bunu emrettiğinin sahih delille sabit olmadığını söyler. Bazı araştırmacılar zehirlenmeyi doğal bir hastalıkla da açıklar.' },
      shia: { tr: 'Şii kaynaklara (Müfid, Tabersî) göre Muaviye, Yezid\'in veliahtlığını sağlamak için zehirletti; Hz. Hasan şehittir. Bazı modern araştırmacılar (Jafri, Madelung) Muaviye\'yi en olası azmettirici sayar. Vefat tarihi (49, 50 veya 51) kaynaklarda ihtilaflıdır.' },
    },
    {
      title: { tr: 'Peygamber\'in yanına defin neden engellendi?' },
      sunni: { tr: 'Oda Aişe\'nin tasarrufundaydı; fitne ve kan dökülmesi endişesi vardı; bazı anlatımlarda Aişe\'nin başta razı olduğu, asıl itirazın Mervan\'dan geldiği vurgulanır. Hz. Hasan\'ın kendisi de fitne çıkacaksa Bakî\'yi tercih etmişti. (Bu savunma genel bir özettir, kaynak metni okunmadı.)' },
      shia: { tr: 'Hz. Hasan\'ın hakkı olan istek, Emevi siyaseti ve Aişe\'nin tutumuyla engellendi; Hz. Hüseyin kan dökülmemesi için sabretti.' },
    },
    {
      title: { tr: 'Oklar kim tarafından atıldı?' },
      sunni: { tr: 'Dîneverî oku atanları "Emeviler" olarak anar. Aişe\'nin ok atılmasını bizzat emrettiğine dair bilinen bir kaynak yoktur; ona atfedilen, katırla gelip engel olmak istemesidir.' },
      shia: { tr: 'İbn Şehraşûb yetmiş okun isabet ettiğini aktarır; ok Emevi taraftarlarına atfedilir. "Yetmiş ok" ayrıntısı tek kaynaklıdır.' },
    },
    {
      title: { tr: '"Cennet gençlerinin efendileri"' },
      sunni: { tr: 'Hz. Hasan ve Hz. Hüseyin\'in büyük faziletini gösterir; bu hadisten imamet hükmü çıkarılmaz.' },
      shia: { tr: 'Hadis, Ehl-i Beyt\'in manevi önderliği ve imametle ilişkilendirilerek yorumlanır.' },
    },
  ],
  questions: [
    { tr: 'Erken kaynakların çoğu Hz. Hasan\'ın zehirlendiğini aktarıyor. Yönetimi barış için Muaviye\'ye bırakan bir torunun, sonraki yıllarda Yezid\'in veliahtlığı yolunda ortadan kalkmasının kimin işine yarayacağını düşünürseniz, "kim yaptı?" sorusuna nasıl bakarsınız?' },
    { tr: 'Hz. Hasan, torunu olduğu Peygamber\'in yanına gömülmek istedi. Peygamber\'in "cennet gençlerinin efendisi" dediği biri için bu istek neden engellendi sizce?' },
    { tr: 'Cenaze kabre taşınırken iki tarafın silahlandığı ve cenazeye ok atıldığı aktarılıyor (Dîneverî). Hz. Hüseyin, kan dökülmesin diye ağabeyinin vasiyetine bağlı kalıp geri çekildi. Bu tavır hakkında ne düşünürsünüz?' },
    { tr: 'Peygamber Hz. Hasan\'a "seyyid" dedi ve onun iki grubu barıştıracağını önceden haber verdi. Bir yönetimi bırakıp kanı durdurmayı seçen birine bu söz verilmişse, onun kararı hakkında ne düşünürsünüz?' },
    { tr: 'Hz. Hasan ve Hz. Hüseyin için "cennet gençlerinin efendileri" denmişti (Tirmizi 3768). Bu iki kardeşin sonraki yıllarda yaşadıkları, bu sözün ağırlığıyla birlikte nasıl okunur sizce?' },
    { tr: 'Kaynaklarda sulh şartları ve Hz. Hasan\'ın vefatı farklı anlatılıyor. Böyle ihtilaflı noktalarda hangi anlatıya neden güvenirsiniz?' },
    { tr: 'Peygamber\'in torunu yönetimi barış için bırakırken, bir sonraki nesilde yönetim babadan oğula geçti. Bu değişim, Ehl-i Beyt\'in sonraki tutumunu anlamak için ne söyler?' },
  ],
  summary: { tr: 'Hz. Ali\'nin şehadetinden sonra Hz. Hasan\'a biat edildi, ancak kan dökülmesin diye yönetimi Muaviye\'ye bıraktı; Peygamber\'in Buhari 2704\'te geçen "oğlum seyyiddir" sözü bu sulha işaret edilerek yorumlanır, Emevi iktidarı ise Yezid\'in veliahtlığıyla süreklilik kazandı.' },
};

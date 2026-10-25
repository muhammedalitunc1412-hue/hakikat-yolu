import type { HistEvent } from '../types';

// Kaynak: research/03-fedek-fatima.md (Sahne 9) + Wikishia (ikincil) aktarımları. Şii bakışı esas alınır; her sahnede `by` ile hangi mezhebin kaynaklarında geçtiği belirtilir.
// Kitap sayfa numaraları Wikishia dipnotlarından aktarılmıştır (İKİNCİL); birincil baskıdan kontrol edilmelidir.
export const fatimaVefat: HistEvent = {
  id: 'fatima-vefat',
  date: { tr: '11 H (632); vefat tarihi ihtilaflı, yaygın görüş 3 Cemaziyelahir', en: '11 AH (632); death date disputed, commonly 3 Jumada II' },
  title: { tr: 'Hz. Fatıma\'nın evine gelme, hastalığı, vasiyeti ve vefatı', en: 'The visit to Fatima\'s house, her illness, will and death' },
  hook: { tr: 'Hz. Peygamber\'in (s.a.v.) kızı Hz. Fatıma (s.a.), neden gece defnedilmesini ve gizli bir kabri vasiyet etti?', en: 'Why did the Prophet\'s daughter ask for a night burial and a hidden grave?' },
  scenes: [
    {
      text: { tr: 'Peygamber\'in vefatından sonra Hz. Ali ve yakınları biat konusunda geri durdular; Hz. Ali\'nin evinde bir grup toplandı. Bu geri duruş Sünni kaynaklarda da anlatılır.' },
      art: { bg: 'city', props: ['sun'], actors: [{ kind: 'ali', x: 35, label: { tr: 'Hz. Ali' } }, { kind: 'crowd', x: 68, scale: 2 }] },
      by: 'both',
    },
    {
      text: { tr: 'İbn Ebi Şeybe, Taberî ve Belâzurî\'ye göre Ömer, evde toplananlara biat etmedikleri takdirde evi yakacağını söyleyerek gözdağı verdi. Bu tehdit rivayeti iki mezhebin kaynaklarında da geçer.' },
      art: { bg: 'city', props: ['sun'], actors: [{ kind: 'man', x: 30, pose: 'raise', label: { tr: 'Ömer' } }, { kind: 'fatima', x: 66, label: { tr: 'Hz. Fatıma' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Şii kaynaklarına göre olay tehditle kalmadı: kapı itildi veya yakıldı, Hz. Fatıma kapıyla duvar arasında sıkıştı ve yaralandı. Bu ayrıntılar Şii kaynaklarında geçer.' },
      art: { bg: 'interior', actors: [{ kind: 'fatima', x: 50, pose: 'sit', label: { tr: 'Hz. Fatıma' } }] },
      by: 'shia',
    },
    {
      text: { tr: 'Şii kaynaklarına göre Hz. Fatıma o gün hamileydi ve çocuğu Muhsin düştü. Hz. Fatıma bu yarayla yatağa düştü. Bu anlatım Şii kaynaklarında yer alır.' },
      art: { bg: 'interior', props: ['moon'], actors: [{ kind: 'fatima', x: 50, pose: 'sit', label: { tr: 'Hz. Fatıma' } }, { kind: 'ali', x: 72, scale: 0.9, label: { tr: 'Hz. Ali' } }] },
      by: 'shia',
    },
    {
      text: { tr: 'Şii kaynaklarına göre Hz. Fatıma\'nın hastalığı günlerce sürdü; Hz. Ali, Hz. Hasan ve Hz. Hüseyin onun başından ayrılmadı. Hz. Fatıma\'nın Peygamber\'den yaklaşık altı ay sonra vefat ettiği Sünni kaynaklarında da aktarılır.' },
      art: { bg: 'interior', actors: [{ kind: 'fatima', x: 44, pose: 'sit', label: { tr: 'Hz. Fatıma' } }, { kind: 'hasan', x: 62, scale: 0.7 }, { kind: 'husayn', x: 70, scale: 0.65 }] },
      by: 'shia',
    },
    {
      text: { tr: 'Şii kaynaklara göre Hz. Fatıma Hz. Ali\'ye vasiyet etti: kendisine haksızlık edenler cenazesine gelmesin, cenaze namazına katılmasın, gece defnedilsin ve kabri gizli kalsın.' },
      art: { bg: 'interior', props: ['scroll'], actors: [{ kind: 'fatima', x: 38, pose: 'sit', label: { tr: 'Hz. Fatıma' } }, { kind: 'ali', x: 64, label: { tr: 'Hz. Ali' } }] },
      by: 'shia',
    },
    {
      text: { tr: 'Hz. Fatıma\'nın vefat tarihi ihtilaflıdır: yaygın görüş 3 Cemaziyelahir 11 H\'dir; 13 Cemaziyelevvel, Rebiülahir ve 3 Ramazan gibi başka tarihler de aktarılır.' },
      art: { bg: 'dune-dusk', props: ['moon'], actors: [{ kind: 'ali', x: 50, pose: 'sit', label: { tr: 'Hz. Ali' } }] },
      by: 'shia',
    },
    {
      text: { tr: 'Buhari\'ye göre Hz. Ali, Hz. Fatıma\'yı geceleyin defnetti, cenaze namazını kendisi kıldı ve Ebu Bekir\'e haber vermedi. Şii kaynaklara göre Selman, Ebu Zer, Mikdad ve Ammar gibi yakınlar da hazır bulundu.' },
      art: { bg: 'night', props: ['stars', 'moon'], actors: [{ kind: 'ali', x: 40, label: { tr: 'Hz. Ali' } }, { kind: 'hasan', x: 54, scale: 0.7 }, { kind: 'husayn', x: 62, scale: 0.65 }, { kind: 'man', x: 76, scale: 0.9 }] },
      by: 'both',
    },
    {
      text: { tr: 'Hz. Fatıma\'nın kabri gizli kaldı. Şii kaynaklarda evi, Peygamber\'in kabri ile minberi arası veya Bakî mezarlığı gibi ihtimaller sayılır; kesin bir yer bilinmez.' },
      art: { bg: 'dawn', props: ['palms'], actors: [{ kind: 'ali', x: 50, label: { tr: 'Hz. Ali' } }] },
      by: 'shia',
    },
  ],
  sunni: [
    { book: 'İbn Ebi Şeybe, el-Musannef', ref: 'ev tehdidi (Wikishia atfı; sayfa baskıya göre değişir, doğrulanmadı)', says: { tr: 'Ömer\'in Hz. Ali\'nin evinde toplananlara biat etmezlerse evi yakacağı tehdidi.' }, grade: { tr: 'İKİNCİL (Wikishia aktarımı); kitap bu oturumda okunmadı. Zincirdeki Eslem\'in olayda Medine\'de bulunmadığı itirazı vardır.' }, url: 'https://en.wikishia.net/view/Incident_of_the_attack_on_the_house_of_Lady_Fatima_(a)', status: 'check' },
    { book: 'Taberî, Tarîh', ref: 'ev tehdidi bölümü (Wikishia atfı; sayfa doğrulanmadı)', says: { tr: 'Ev yakma tehdidi ve Zübeyr\'in kılıcı olayı.' }, grade: { tr: 'İKİNCİL (Wikishia). Bu rivayette Hz. Fatıma\'nın zikri DOĞRULANMADI.' }, status: 'check' },
    { book: 'Belâzurî, Ensâbü\'l-Eşrâf', ref: 'ev tehdidi (Wikishia atfı; sayfa doğrulanmadı)', says: { tr: 'Evde toplananlara yönelik tehdit.' }, grade: { tr: 'İKİNCİL (Wikishia)' }, status: 'check' },
    { book: 'İbn Abdirabbih, el-Ikdü\'l-Ferîd', ref: 'ateşle tehdit (Wikishia atfı; sayfa doğrulanmadı)', says: { tr: 'Elinde ateşle gelme tehdidi.' }, grade: { tr: 'İKİNCİL (Wikishia)' }, status: 'check' },
    { book: 'İbn Kuteybe\'ye atfedilen el-İmame ve\'s-Siyase', ref: 'eve gelme anlatımı (Wikishia atfı; sayfa doğrulanmadı)', says: { tr: 'Ali\'nin evine gelme anlatımı.' }, grade: { tr: 'Eserin İbn Kuteybe\'ye aidiyeti tartışmalıdır. İKİNCİL (Wikishia).' }, status: 'check' },
    { book: 'Buhari, Sahih', ref: 'No. 4240', says: { tr: 'Hz. Fatıma ölünceye kadar Ebu Bekir\'le konuşmadı; Hz. Ali onu geceleyin defnetti, Ebu Bekir\'e haber vermedi, cenaze namazını kıldı.' }, grade: { tr: 'Sahih. DOĞRULANDI (özet düzeyinde, ihadis.com)' }, url: 'https://ihadis.com/en/bukhari/hadith/4240', status: 'verified' },
    { book: 'Buhari, Sahih; Müslim, Sahih', ref: 'Buhari 3714 ve 3767; Müslim 2449', says: { tr: 'Buhari: "Fatıma benden bir parçadır; onu kızdıran beni kızdırmıştır." Müslim\'de yaygın lafız: "onu üzen beni üzer."' }, grade: { tr: 'Sahih' }, url: 'https://sunnah.com/bukhari:3714', status: 'verified' },
    { book: 'Belâzurî, Ensâbü\'l-Eşrâf; Taberî, Tarîh', ref: 'Belâzurî c.2 s.34; Taberî c.2 s.473-474 (Wikishia atfı)', says: { tr: 'Hz. Ali\'nin Hz. Fatıma\'yı yıkaması ve Esma bint Umeys\'in yardımı.' }, grade: { tr: 'İKİNCİL (Wikishia)' }, status: 'check' },
    { book: 'İbn Sa\'d, et-Tabakâtü\'l-Kübrâ', ref: 'gece defin (Wikishia atfı; sayfa doğrulanmadı)', says: { tr: 'Hz. Fatıma geceleyin defnedildi; kabrin yeri kesin bilinmez.' }, grade: { tr: 'İKİNCİL (Wikishia)' }, status: 'check' },
  ],
  shia: [
    { book: 'Süleym b. Kays el-Hilâlî, Kitâb', ref: 'eve hücum anlatımı (Wikishia atfı; sayfa doğrulanmadı)', says: { tr: 'Ali\'nin evine gelme, kapının yakılması, Hz. Fatıma\'ya vurulması ve Muhsin\'in düşmesi.' }, grade: { tr: 'En eski Şii kaynak sayılır, ancak bugünkü nüshanın Süleym\'e aidiyeti Şii rical ilminde de tartışmalıdır; tek başına delil sayılmaz. İKİNCİL (Wikishia).' }, url: 'https://en.wikishia.net/view/Incident_of_the_attack_on_the_house_of_Lady_Fatima_(a)', status: 'check' },
    { book: 'Şeyh Müfid, el-İhtisâs', ref: 'eve hücum ve defin (Wikishia atfı; sayfalar doğrulanmadı)', says: { tr: 'Zübeyr\'in kılıçla çıkması olayı; Ömer\'in Hz. Fatıma\'ya vurduğu anlatımı; Hz. Fatıma\'nın evinde defnedildiği görüşü.' }, grade: { tr: 'Eserin Müfid\'e aidiyeti Şii âlimlerce de tartışılmıştır. İKİNCİL (Wikishia).' }, status: 'check' },
    { book: 'Mes\'ûdî\'ye atfedilen İsbâtü\'l-Vasiyye', ref: 'eve hücum (Wikishia atfı; sayfa doğrulanmadı)', says: { tr: 'Eve hücum ve kapının yakılması anlatımı.' }, grade: { tr: 'Mes\'ûdî\'ye aidiyeti net değildir. İKİNCİL (Wikishia).' }, status: 'check' },
    { book: 'Tabersî, el-İhticâc; Şeyh Sadûk, Meâni\'l-Ahbâr', ref: 'Meâni\'l-Ahbâr s.206 (Wikishia atfı); el-İhticâc için sayfa verilmemiş', says: { tr: 'Muhsin\'in düşmesi anlatımı.' }, grade: { tr: 'Sayfa ve cilt DOĞRULANMADI. İKİNCİL (Wikishia).' }, status: 'check' },
    { book: 'Taberî (İmamî), Delâilü\'l-İmame', ref: 'vefat ve kabir (Wikishia atfı; sayfa doğrulanmadı)', says: { tr: 'Hz. Fatıma\'nın yarasıyla yatağa düşmesi, vefat tarihi ve kabrin Peygamber\'in kabri ile minberi arasında olabileceği.' }, grade: { tr: 'Bu Taberî, tarihçi Taberî değildir. İKİNCİL (Wikishia).' }, status: 'check' },
    { book: 'İbn Şehraşûb, Menâkıb Âl-i Ebî Tâlib', ref: 'vefat ve gizli defin (Wikishia atfı; sayfa doğrulanmadı)', says: { tr: 'Vefat için Rebiülahir tarihleri; Hz. Fatıma\'nın haksızlık edenlerin cenaze ve defninde bulunmaması ve gizli defin vasiyeti; kabir ihtimalleri.' }, grade: { tr: 'İKİNCİL (Wikishia)' }, status: 'check' },
    { book: 'Şeyh Sadûk, İlelü\'ş-Şerâi\' ve Men Lâ Yahzuruhü\'l-Fakîh', ref: 'İlel c.1 s.185; Men Lâ Yahzuruh c.2 s.572 (Wikishia atfı)', says: { tr: 'Gizli defin ve kabrin yeri hakkında görüşler (ev, Bakî).' }, grade: { tr: 'İKİNCİL (Wikishia)' }, status: 'check' },
    { book: 'Tûsî, Misbâhu\'l-Müteheccid', ref: 'vefat tarihi (Wikishia atfı; sayfa doğrulanmadı)', says: { tr: '3 Cemaziyelahir 11 H vefat tarihi.' }, grade: { tr: 'İKİNCİL (Wikishia)' }, status: 'check' },
    { book: 'Kuleynî, el-Kâfî; Sadûk, el-Emâlî; Müfid, el-Emâlî; Tabersî, el-İhticâc', ref: 'Bu olay için cilt/sayfa DOĞRULANMADI', says: { tr: 'Hz. Fatıma\'nın vefatı ve vasiyetiyle ilgili rivayetlerin bu eserlerde de geçtiği ikincil kaynaklarda belirtilir.' }, grade: { tr: 'DOĞRULANMADI; bu oturumda ilgili sayfa bulunamadı, numara uydurulmamıştır.' }, status: 'check' },
  ],
  disputes: [
    {
      title: { tr: 'Evi yakma tehdidi ve yaralanma' },
      sunni: { tr: 'Tehdit rivayetleri Sünni kitaplarda geçer; ancak kapının yakılması, Hz. Fatıma\'nın darbe alması ve düşük iddiası kabul edilmez (örneğin Şehristanî bunu yalan sayar).' },
      shia: { tr: 'Tehdit rivayetlerinin Şii\'nin güçsüz olduğu dönemde yazılmış Sünni kaynaklarda da bulunması, ayrıntıların uydurma olma ihtimalini azaltır; ayrıntılar Şii kaynaklarda aktarılır.' },
    },
    {
      title: { tr: 'Rivayetlerin güvenirliği' },
      sunni: { tr: 'Zincirdeki İbn Ebi Deram için Zehebî "Rafızi eğilimi", İbn Hacer "Rafızi ve yalancı" demiştir. Süleym kitabı da sahih kabul edilmez.' },
      shia: { tr: 'Süleym kitabının güvenirliği Şii âlimlerce de tartışılmıştır; bu yüzden olay yalnız onunla değil, diğer kaynaklarla birlikte değerlendirilir.' },
    },
    {
      title: { tr: 'Gece defin ve gizli kabir' },
      sunni: { tr: 'Gece defin Buhari 4240\'ta geçer; birçok Sünni âlim bunu tesettür ve sadelik olarak yorumlar.' },
      shia: { tr: 'Vasiyet, Hz. Fatıma\'nın yaşadıklarına karşı sessiz bir itiraz olarak anlaşılır.' },
    },
    {
      title: { tr: 'Vefat tarihi' },
      sunni: { tr: 'Peygamber\'den yaklaşık altı ay sonra vefat ettiği aktarılır; kesin gün konusunda görüş birliği yoktur.' },
      shia: { tr: '3 Cemaziyelahir 11 H yaygındır; 13 Cemaziyelevvel, Rebiülahir ve 3 Ramazan da aktarılır.' },
    },
  ],
  questions: [
    { tr: 'Ömer\'in evi yakma tehdidi iki mezhebin kitabında da geçiyor. Peygamber\'in kızının bulunduğu bir evin önünde böyle bir söz sarf edilmesi, biat için uygun bir yöntem olabilir mi sizce?' },
    { tr: 'Buhari\'ye göre Hz. Ali, Hz. Fatıma\'yı geceleyin defnetti ve Ebu Bekir\'e haber vermedi. Şii kaynaklara göre bu Hz. Fatıma\'nın vasiyetiydi. Bu vasiyet sizce neyi anlatıyor?' },
    { tr: 'Hz. Fatıma\'nın kabri bugün bile kesin olarak bilinmiyor. Peygamber\'in en sevdiği kızının mezarının kaybolmasını neden bu kadar az konuşuyoruz sizce?' },
    { tr: 'Aynı olay hakkında kitaplar farklı ayrıntılar aktarıyorsa, hangi rivayeti kabul edeceğimizi belirlerken ravinin mezhebine mi, yoksa metnin diğer kaynaklarla uyumuna mı bakmak daha adildir sizce?' },
  ],
  summary: { tr: 'Biat için Hz. Ali\'nin evine gelinmesi ve ev yakma tehdidi Şii ve Sünni kaynaklarında geçer; kapı, yaralanma ve Muhsin ayrıntıları Şii kaynaklarında anlatılır. Hz. Fatıma\'nın gece defni Buhari 4240\'ta ve Şii kaynaklarında birlikte aktarılır.' },
};

import type { HistEvent } from '../types';

// Kaynak: research/03-fedek-fatima.md (Sahne 9) + Wikishia (ikincil) aktarımları. Şii bakışı esas alınır; her sahnede `by` ile hangi mezhebin kaynaklarında geçtiği belirtilir.
// Kitap sayfa numaraları Wikishia dipnotlarından aktarılmıştır (İKİNCİL); birincil baskıdan kontrol edilmelidir.
export const fatimaVefat: HistEvent = {
  id: 'fatima-vefat',
  date: { tr: '11 H (632); vefat tarihi ihtilaflı, yaygın görüş 3 Cemaziyelahir', en: '11 AH (632); death date disputed, commonly 3 Jumada II' },
  title: { tr: 'Hz. Fatıma\'nın evine gelme, hastalığı, vasiyeti ve vefatı', en: 'The visit to Fatima\'s house, her illness, will and death' },
  hook: { tr: 'Hz. Fatıma gece defnedilmesini vasiyet etti. Bu defin Buhari\'de de geçer.', en: 'Why did the Prophet\'s daughter ask for a night burial and a hidden grave?' },
  scenes: [
    {
      text: { tr: 'Peygamber\'in vefatından sonra Hz. Ali ve yakınları biat konusunda bir süre geri durdu; bir grup onun evinde toplandı. Bu olay Sünni kaynaklarında da geçmektedir (Taberî, Tarîh; Belâzurî, Ensâbü\'l-Eşrâf).' },
      art: { bg: 'city', props: ['sun'], actors: [{ kind: 'ali', x: 35, label: { tr: 'Hz. Ali' } }, { kind: 'crowd', x: 68, scale: 2 }] },
      by: 'both',
    },
    {
      text: { tr: 'Rivayete göre Ömer, evde toplananlara biat etmezlerse evi yakacağını söyledi. Bu olay Sünni kaynaklarında da geçmektedir (İbn Ebi Şeybe, el-Musannef; Taberî, Tarîh; Belâzurî, Ensâbü\'l-Eşrâf).' },
      art: { bg: 'city', props: ['sun'], actors: [{ kind: 'man', x: 30, pose: 'raise', label: { tr: 'Ömer' } }, { kind: 'fatima', x: 66, label: { tr: 'Hz. Fatıma' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Yakma sözü tarih kitaplarında anılır. Şii kaynaklarında kapının itildiği veya yakıldığı ve Hz. Fatıma\'nın kapı ile duvar arasında sıkışıp yaralandığı da geçer.' },
      art: { bg: 'interior', actors: [{ kind: 'fatima', x: 50, pose: 'sit', label: { tr: 'Hz. Fatıma' } }] },
      by: 'shia',
    },
    {
      text: { tr: 'Hz. Fatıma bu yarayla yatağa düştü. Şii kaynaklarında onun o gün hamile olduğu ve çocuğu Muhsin\'in düştüğü de anılır.' },
      art: { bg: 'interior', props: ['moon'], actors: [{ kind: 'fatima', x: 50, pose: 'sit', label: { tr: 'Hz. Fatıma' } }, { kind: 'ali', x: 72, scale: 0.9, label: { tr: 'Hz. Ali' } }] },
      by: 'shia',
    },
    {
      text: { tr: 'Hastalığı günlerce sürdü. Hz. Ali, Hz. Hasan ve Hz. Hüseyin onun başından ayrılmadı. Hz. Fatıma, Peygamber\'den yaklaşık altı ay sonra vefat etti.' },
      art: { bg: 'interior', actors: [{ kind: 'fatima', x: 44, pose: 'sit', label: { tr: 'Hz. Fatıma' } }, { kind: 'hasan', x: 62, scale: 0.7 }, { kind: 'husayn', x: 70, scale: 0.65 }] },
      by: 'shia',
    },
    {
      text: { tr: 'Şii kaynaklarda Hz. Fatıma\'nın Hz. Ali\'ye vasiyeti şöyle aktarılır: kendisine haksızlık edenler cenazesine gelmesin, namaza katılmasın; gece defnedilsin ve kabri gizli kalsın.' },
      art: { bg: 'interior', props: ['scroll'], actors: [{ kind: 'fatima', x: 38, pose: 'sit', label: { tr: 'Hz. Fatıma' } }, { kind: 'ali', x: 64, label: { tr: 'Hz. Ali' } }] },
      by: 'shia',
    },
    {
      text: { tr: 'Vefat günü ihtilaflıdır. Yaygın görüş 3 Cemaziyelahir 11 H\'dir. 13 Cemaziyelevvel, Rebiülahir ve 3 Ramazan da aktarılır.' },
      art: { bg: 'dune-dusk', props: ['moon'], actors: [{ kind: 'ali', x: 50, pose: 'sit', label: { tr: 'Hz. Ali' } }] },
      by: 'shia',
    },
    {
      text: { tr: 'Hz. Ali, Hz. Fatıma\'yı geceleyin defnetti, cenaze namazını kendisi kıldı ve Halife Ebu Bekir\'e haber vermedi. Bu olay Sünni kaynaklarında da geçmektedir (Buhari, Sahih, no. 4240). Şii kaynaklarda Selman, Ebu Zer, Mikdad ve Ammar\'ın da hazır bulunduğu anılır.' },
      art: { bg: 'night', props: ['stars', 'moon'], actors: [{ kind: 'ali', x: 40, label: { tr: 'Hz. Ali' } }, { kind: 'hasan', x: 54, scale: 0.7 }, { kind: 'husayn', x: 62, scale: 0.65 }, { kind: 'man', x: 76, scale: 0.9 }] },
      by: 'both',
    },
    {
      text: { tr: 'Hz. Fatıma gece defnedildi. Bu olay Sünni kaynaklarında da geçmektedir (Buhari, Sahih, no. 4240). Kabri gizli kaldı; yeri kesin bilinmez. Bu olay Sünni kaynaklarında da geçmektedir (İbn Sa\'d, et-Tabakâtü\'l-Kübrâ). Şii kaynaklarda ev, Peygamber\'in kabri ile minberi arası ve Bakî ihtimal olarak sayılır.' },
      art: { bg: 'dawn', props: ['palms'], actors: [{ kind: 'ali', x: 50, label: { tr: 'Hz. Ali' } }] },
      by: 'shia',
    },
  ],
  sunni: [
    { book: 'İbn Ebi Şeybe, el-Musannef', ref: 'cilt 13, sayfa 469 (Wikishia atfı; başka baskıda 8:572)', says: { tr: 'Ömer\'in Hz. Ali\'nin evinde toplananlara biat etmezlerse evi yakacağı tehdidi.' }, grade: { tr: 'İKİNCİL (Wikishia aktarımı); kitap bu oturumda okunmadı. Zincirdeki Eslem\'in olayda Medine\'de bulunmadığı itirazı vardır.' }, url: 'https://en.wikishia.net/view/Incident_of_the_attack_on_the_house_of_Lady_Fatima_(a)', status: 'check' },
    { book: 'Taberî, Tarîh', ref: 'cilt 3, sayfa 202', says: { tr: 'Ev yakma tehdidi ve Zübeyr\'in kılıcı olayı.' }, grade: { tr: 'İKİNCİL (Wikishia). Bu rivayette Hz. Fatıma\'nın zikri DOĞRULANMADI.' }, status: 'check' },
    { book: 'Belâzurî, Ensâbü\'l-Eşrâf', ref: 'cilt 1, sayfa 586', says: { tr: 'Evde toplananlara yönelik tehdit.' }, grade: { tr: 'İKİNCİL (Wikishia)' }, status: 'check' },
    { book: 'İbn Abdirabbih, el-Ikdü\'l-Ferîd', ref: 'cilt 5, sayfa 13', says: { tr: 'Elinde ateşle gelme tehdidi.' }, grade: { tr: 'İKİNCİL (Wikishia)' }, status: 'check' },
    { book: 'İbn Kuteybe\'ye atfedilen el-İmame ve\'s-Siyase', ref: 'cilt 1, sayfa 30-31', says: { tr: 'Ali\'nin evine gelme anlatımı.' }, grade: { tr: 'Eserin İbn Kuteybe\'ye aidiyeti tartışmalıdır. İKİNCİL (Wikishia).' }, status: 'check' },
    { book: 'Buhari, Sahih', ref: 'No. 4240', says: { tr: 'Hz. Fatıma ölünceye kadar Halife Ebu Bekir\'le konuşmadı; Hz. Ali onu geceleyin defnetti, Halife Ebu Bekir\'e haber vermedi, cenaze namazını kıldı.' }, grade: { tr: 'Sahih. DOĞRULANDI (özet düzeyinde, ihadis.com)' }, url: 'https://ihadis.com/en/bukhari/hadith/4240', status: 'verified' },
    { book: 'Buhari, Sahih', ref: 'No. 3714 ve 3767; Müslim No. 2449', says: { tr: '"Hz. Fatıma benden bir parçadır; onu kızdıran beni kızdırmıştır."' }, grade: { tr: 'Sahih. Numaralar DOĞRULANMADI, baskıdan kontrol edilmeli.' }, status: 'check' },
    { book: 'Belâzurî, Ensâbü\'l-Eşrâf; Taberî, Tarîh', ref: 'Belâzurî c.2 s.34; Taberî c.2 s.473-474 (Wikishia atfı)', says: { tr: 'Hz. Ali\'nin Hz. Fatıma\'yı yıkaması ve Esma bint Umeys\'in yardımı.' }, grade: { tr: 'İKİNCİL (Wikishia)' }, status: 'check' },
    { book: 'İbn Sa\'d, et-Tabakâtü\'l-Kübrâ', ref: 'cilt 8, sayfa 29', says: { tr: 'Hz. Fatıma geceleyin defnedildi; kabrin yeri kesin bilinmez.' }, grade: { tr: 'İKİNCİL (Wikishia)' }, status: 'check' },
  ],
  shia: [
    { book: 'Süleym b. Kays el-Hilâlî, Kitâb', ref: 'cilt 1, sayfa 150 (Wikishia atfı)', says: { tr: 'Ali\'nin evine gelme, kapının yakılması, Hz. Fatıma\'ya vurulması ve Muhsin\'in düşmesi.' }, grade: { tr: 'En eski Şii kaynak sayılır, ancak bugünkü nüshanın Süleym\'e aidiyeti Şii rical ilminde de tartışmalıdır; tek başına delil sayılmaz. İKİNCİL (Wikishia).' }, url: 'https://en.wikishia.net/view/Incident_of_the_attack_on_the_house_of_Lady_Fatima_(a)', status: 'check' },
    { book: 'Şeyh Müfid, el-İhtisâs', ref: 'sayfa 186; ayrıca sayfa 184-185 ve 148 (Wikishia atfı)', says: { tr: 'Zübeyr\'in kılıçla çıkması olayı; Ömer\'in Hz. Fatıma\'ya vurduğu anlatımı; Hz. Fatıma\'nın evinde defnedildiği görüşü.' }, grade: { tr: 'Eserin Müfid\'e aidiyeti Şii âlimlerce de tartışılmıştır. İKİNCİL (Wikishia).' }, status: 'check' },
    { book: 'Mes\'ûdî\'ye atfedilen İsbâtü\'l-Vasiyye', ref: 'cilt 1, sayfa 146 (Wikishia atfı)', says: { tr: 'Eve hücum ve kapının yakılması anlatımı.' }, grade: { tr: 'Mes\'ûdî\'ye aidiyeti net değildir. İKİNCİL (Wikishia).' }, status: 'check' },
    { book: 'Tabersî, el-İhticâc; Şeyh Sadûk, Meâni\'l-Ahbâr', ref: 'Meâni\'l-Ahbâr s.206 (Wikishia atfı); el-İhticâc için sayfa verilmemiş', says: { tr: 'Muhsin\'in düşmesi anlatımı.' }, grade: { tr: 'Sayfa ve cilt DOĞRULANMADI. İKİNCİL (Wikishia).' }, status: 'check' },
    { book: 'Taberî (İmamî), Delâilü\'l-İmame', ref: 'sayfa 134, 136', says: { tr: 'Hz. Fatıma\'nın yarasıyla yatağa düşmesi, vefat tarihi ve kabrin Peygamber\'in kabri ile minberi arasında olabileceği.' }, grade: { tr: 'Bu Taberî, tarihçi Taberî değildir. İKİNCİL (Wikishia).' }, status: 'check' },
    { book: 'İbn Şehraşûb, Menâkıb Âl-i Ebî Tâlib', ref: 'cilt 3, sayfa 132, 137, 139', says: { tr: 'Vefat için Rebiülahir tarihleri; Hz. Fatıma\'nın haksızlık edenlerin cenaze ve defninde bulunmaması ve gizli defin vasiyeti; kabir ihtimalleri.' }, grade: { tr: 'İKİNCİL (Wikishia)' }, status: 'check' },
    { book: 'Şeyh Sadûk, İlelü\'ş-Şerâi\' ve Men Lâ Yahzuruhü\'l-Fakîh', ref: 'İlel c.1 s.185; Men Lâ Yahzuruh c.2 s.572 (Wikishia atfı)', says: { tr: 'Gizli defin ve kabrin yeri hakkında görüşler (ev, Bakî).' }, grade: { tr: 'İKİNCİL (Wikishia)' }, status: 'check' },
    { book: 'Tûsî, Misbâhu\'l-Müteheccid', ref: 'sayfa 793', says: { tr: '3 Cemaziyelahir 11 H vefat tarihi.' }, grade: { tr: 'İKİNCİL (Wikishia)' }, status: 'check' },
    { book: 'Kuleynî, el-Kâfî; Sadûk, el-Emâlî; Müfid, el-Emâlî; Tabersî, el-İhticâc', ref: 'Bu olay için cilt/sayfa DOĞRULANMADI', says: { tr: 'Hz. Fatıma\'nın vefatı ve vasiyetiyle ilgili rivayetlerin bu eserlerde de geçtiği ikincil kaynaklarda belirtilir.' }, grade: { tr: 'DOĞRULANMADI; bu oturumda ilgili sayfa bulunamadı, numara uydurulmamıştır.' }, status: 'check' },
  ],
  disputes: [
    {
      title: { tr: 'Yakma sözü ve yaralanma' },
      sunni: { tr: 'Evin yakılacağına dair söz, Sünni kitaplarda anılır (İbn Ebi Şeybe, el-Musannef; Taberî, Tarîh; Belâzurî, Ensâbü\'l-Eşrâf). Kapının yakılması, darbe ve düşük bu okumada kabul edilmez.' },
      shia: { tr: 'Evin yakılacağına dair söz, Sünni kitaplarda da anılır. Şii kaynaklarda kapı, yaralanma ve Muhsin kısa bir cümleyle geçer; ayrıntı ihtilaflıdır.' },
    },
    {
      title: { tr: 'Rivayetlerin güvenirliği' },
      sunni: { tr: 'Bu rivayetlerin zinciri tartışmalıdır. Sünni ricalde İbn Ebi Deram tenkit edilmiş, Süleym\'in kitabı da sahih sayılmamıştır.' },
      shia: { tr: 'Bu rivayetlerin zinciri tartışmalıdır. Şii âlimler de Süleym kitabını tek başına delil saymaz; olayı diğer rivayetlerle birlikte okur.' },
    },
    {
      title: { tr: 'Gece defin ve gizli kabir' },
      sunni: { tr: 'Hz. Ali\'nin Hz. Fatıma\'yı gece defnettiği Buhari\'de geçer (Buhari, Sahih, no. 4240). Sünni okumada bu, tesettür ve sadelik olarak da anlaşılır.' },
      shia: { tr: 'Gece defin Buhari\'de de geçer (Buhari, Sahih, no. 4240). Şii okumada bu, Hz. Fatıma\'nın vasiyeti ve gönlündeki üzüntünün sessiz ifadesidir.' },
    },
    {
      title: { tr: 'Vefat tarihi' },
      sunni: { tr: 'Peygamber\'den yaklaşık altı ay sonra vefat ettiği aktarılır. Kesin gün üzerinde görüş birliği yoktur.' },
      shia: { tr: 'Peygamber\'den yaklaşık altı ay sonra vefat ettiği ortaktır. Yaygın görüş 3 Cemaziyelahir 11 H\'dir; 13 Cemaziyelevvel, Rebiülahir ve 3 Ramazan da söylenir.' },
    },
  ],
  questions: [
    { tr: 'Hz. Fatıma\'nın evi, Peygamber\'in kızıyla doluydu. O eşiğin önünde söylenen sözleri düşünürken ona duyulan sevgi nasıl bir incelik ister sizce?' },
    { tr: 'Buhari, gece defnini aktarır. Hz. Fatıma\'nın bu vedayı istemesi, onun üzüntüsünü sevgiyle anlamaya nasıl çağırır?' },
    { tr: 'Kabri bugün de kesin bilinmiyor. Peygamber\'in kızının gizlenen kabri, Ehl-i Beyt özlemini nasıl diri tutar sizce?' },
    { tr: 'Aynı olayda kitaplar farklı ayrıntılar söylüyor. Sevgiyle ve sükûnetle okumak, ortak cümle ile ihtilaflı cümleyi ayırmaya nasıl yardım eder?' },
  ],
  summary: { tr: 'Hz. Ali\'nin evinde toplanılması ve yakma sözü Sünni tarih kitaplarında da anılır (İbn Ebi Şeybe, el-Musannef; Taberî, Tarîh; Belâzurî, Ensâbü\'l-Eşrâf). Kapı, yaralanma ve Muhsin Şii kaynaklarında kısa geçer. Gece defin ise Buhari\'de de vardır (Buhari, Sahih, no. 4240).' },
};

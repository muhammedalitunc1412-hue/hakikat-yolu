import type { HistEvent } from '../types';

// Kaynak: research/02-sakife-hilafet-sura.md. status araştırmadaki doğrulama durumunu yansıtır.
export const sakife: HistEvent = {
  id: 'sakife',
  date: { tr: 'Rebiülevvel 11 H (632)', en: 'Rabi al-Awwal 11 AH (632)' },
  title: { tr: 'Sakife-i Beni Saide ve biat süreci', en: 'Saqifa of Banu Sa\'ida and the pledge of allegiance' },
  hook: { tr: 'Peygamber\'in ailesi cenazesini hazırlarken Sakife\'de biat alındı. Hz. Ali\'nin biatı, Buhari\'de Hz. Fatıma\'nın vefatından sonraya bağlanır.', en: 'A caliph was chosen while the Prophet\'s body was still being prepared. Hz. Ali did not pledge for six months.' },
  scenes: [
    {
      text: { tr: 'Peygamber vefat edince Medine karıştı. Hz. Ali, Abbas ve Haşimoğulları onun yıkama ve defin hazırlığına koyuldu. Bu olay Sünni kaynaklarında da geçmektedir (İbn Hişam, es-Sîre; Taberî, Târîh).' },
      art: { bg: 'interior', actors: [{ kind: 'ali', x: 34, label: { tr: 'Hz. Ali' } }, { kind: 'crowd', x: 68, scale: 4, label: { tr: 'Haşimoğulları' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Aynı sırada Ensar, Beni Saide gölgeliğinde toplandı. Hasta olan Hazrec reisi Sa\'d b. Ubade de oradaydı; Ensar yönetimi kendilerinden istedi. Bu olay Sünni kaynaklarında da geçmektedir (Buhari, Sahih; Taberî, Târîh; İbn Hişam, es-Sîre).' },
      art: { bg: 'city', props: ['palms'], actors: [{ kind: 'crowd', x: 30, scale: 7, label: { tr: 'Ensar' } }, { kind: 'man', x: 66, pose: 'sit', label: { tr: 'Sa\'d b. Ubade' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Haberi alan Ebu Bekir ve Ömer, Ebu Ubeyde ile birlikte Sakife\'ye gitti. Ebu Bekir Ensar\'ın faziletini andı, sonra Arapların yönetimi Kureyş\'e tanıyacağını söyledi. Bu olay Sünni kaynaklarında da geçmektedir (Taberî, Târîh; İbn Hişam, es-Sîre).' },
      art: { bg: 'city', props: ['palms'], actors: [{ kind: 'crowd', x: 24, scale: 5, label: { tr: 'Ensar' } }, { kind: 'man', x: 48, label: { tr: 'Ebu Bekir' } }, { kind: 'man', x: 64, label: { tr: 'Ömer' } }, { kind: 'man', x: 80, label: { tr: 'Ebu Ubeyde' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Hubab b. Münzir "bizden bir emir, sizden bir emir" dedi. Beşir b. Sa\'d ise Kureyş lehine konuştu. Sesler yükseldi; Evs ile Hazrec arasındaki rekabet de araya girdi. Bu olay Sünni kaynaklarında da geçmektedir (Taberî, Târîh; Buhari, Sahih).' },
      art: { bg: 'city', actors: [{ kind: 'man', x: 28, pose: 'raise', label: { tr: 'Hubab b. Münzir' } }, { kind: 'man', x: 50, label: { tr: 'Beşir b. Sa\'d' } }, { kind: 'crowd', x: 76, scale: 5 }] },
      by: 'both',
    },
    {
      text: { tr: 'Ömer, Ebu Bekir\'in elini tutup biat etti; ardından Beşir ve diğerleri biat etti. Ortam öyle gerildi ki bir ara "Sa\'d\'ı öldürdünüz" denildi. Sa\'d biat etmedi. Bu olay Sünni kaynaklarında da geçmektedir (Buhari, Sahih; Taberî, Târîh; İbn Sa\'d, Tabakât).' },
      art: { bg: 'city', props: ['palms'], actors: [{ kind: 'man', x: 30, label: { tr: 'Ömer' } }, { kind: 'man', x: 52, label: { tr: 'Ebu Bekir' } }, { kind: 'crowd', x: 78, scale: 5 }] },
      by: 'both',
    },
    {
      text: { tr: 'Yıllar sonra Halife Ömer bu biat için "felte" dedi: aceleyle, istişaresiz yapılmış bir iş. Ona göre Allah şerrini savmıştı ve bu bir daha tekrarlanmamalıydı. Bu olay Sünni kaynaklarında da geçmektedir (Buhari, Sahih).' },
      art: { bg: 'city', props: ['minbar'], actors: [{ kind: 'crowd', x: 30, scale: 6 }, { kind: 'man', x: 68, pose: 'raise', label: { tr: 'Ömer' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Hz. Fatıma\'nın vefatından sonra halkın Hz. Ali\'ye bakışı değişti. Hz. Ali, Halife Ebu Bekir\'le barışmak ve biat etmek istedi. Rivayet, onun altı ay biat etmediğini söyler. Bu olay Sünni kaynaklarında da geçmektedir (Buhari, Sahih, no. 4240-4241; Müslim, Sahih).' },
      art: { bg: 'dawn', props: ['sun'], actors: [{ kind: 'ali', x: 34, label: { tr: 'Hz. Ali' } }, { kind: 'man', x: 66, label: { tr: 'Ebu Bekir' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Yıllar sonra Halife Ömer işi altı kişilik şuraya bıraktı; biat sonunda Halife Osman\'a yapıldı. Bu olay Sünni kaynaklarında da geçmektedir (Taberî, Târîh; Buhari, Sahih). Nehcü\'l-Belağa\'daki Şıkşıkıyye hutbesinde Hz. Ali, bu günleri sabırla geçirdiğini anlatır.' },
      art: { bg: 'dune-dusk', props: ['scroll'], actors: [{ kind: 'ali', x: 30, label: { tr: 'Hz. Ali' } }, { kind: 'man', x: 56, label: { tr: 'Abdurrahman b. Avf' } }, { kind: 'man', x: 78, label: { tr: 'Osman' } }] },
      by: 'shia',
    },
  ],
  sunni: [
    { book: 'Buhari, Sahih', ref: 'No. 6830 (Hudud, Recm)', says: { tr: 'Halife Ömer\'in uzun hutbesi: Halife Ebu Bekir\'in biatının "felte" olduğu, Allah\'ın şerrini savdığı, bunun tekrarlanmaması gerektiği; Sakife\'deki tartışma ve gerilim.' }, grade: { tr: 'Sahih' }, url: 'https://sunnah.com/bukhari:6830', status: 'check' },
    { book: 'Buhari, Sahih', ref: 'No. 4240-4241 (Meğâzî)', says: { tr: 'Hz. Fatıma, Halife Ebu Bekir\'den mirasını ister; reddedilir, Hz. Fatıma küser ve altı ay sonra vefat eder; Hz. Ali geceleyin defneder; Hz. Ali sonradan biat eder. "Altı ay" ifadesi Zührî\'ye bağlı bir cümle olarak gösterilir.' }, grade: { tr: 'Sahih; "altı ay" ibaresi şerhlerde tartışılır' }, url: 'https://sunnah.com/bukhari:4240', status: 'verified' },
    { book: 'Müslim, Sahih', ref: 'No. 1759 (Cihad ve Siyer)', says: { tr: 'Aynı olay: Hz. Fatıma\'nın miras talebi, Halife Ebu Bekir\'in cevabı ve Hz. Ali\'nin biatı.' }, grade: { tr: 'Sahih' }, url: 'https://sunnah.com/muslim:1759', status: 'check' },
    { book: 'Taberî, Târîh', ref: 'c.3, 11 H olayları (sayfa kontrol edilecek)', says: { tr: 'Sakife tartışması, Ebu Bekir\'in hutbesi, Hubab b. Münzir ve Beşir b. Sa\'d. Haşimoğulları\'nın geri durması ve Sa\'d\'ın biat etmemesi de anılır. Ebu Mihnef gibi tartışmalı râvilerden rivayet içerir.' }, status: 'check' },
    { book: 'İbn Sa\'d, Tabakât', ref: 'Sa\'d b. Ubade maddesi (sayfa kontrol edilecek)', says: { tr: 'Sa\'d b. Ubade\'nin biat etmediği ve sonra Şam bölgesinde öldüğü. Vâkıdî rivayetleri zayıf sayılır.' }, status: 'check' },
    { book: 'İbn Hişam, es-Sîre', ref: 'Vefat bölümü (sayfa kontrol edilecek)', says: { tr: 'Vefat ve Sakife anlatımı; Ebu Bekir\'in "sizin en hayırlınız değilim" sözü, lafız farkıyla.' }, status: 'check' },
    { book: 'Belâzurî, Ensâbü\'l-Eşrâf', ref: 'c.1, Sakife ve biat bölümü (sayfa kontrol edilecek)', says: { tr: 'Haşimoğulları\'nın geri durması ve biat sürecine dair farklı ifadeli rivayetler. İsnadlar karışıktır.' }, status: 'check' },
    { book: 'Taberî, Târîh', ref: 'c.4, 23-24 H (sayfa kontrol edilecek)', says: { tr: 'Şura: altı kişi, Abdurrahman b. Avf\'ın şartı (Kitap, sünnet ve Halife Ebu Bekir ile Halife Ömer\'in sîreti), Hz. Ali\'nin "kendi içtihadım" cevabı ve Halife Osman\'ın kabulü. Varyantlıdır.' }, status: 'check' },
    { book: 'Buhari, Sahih', ref: 'Fedâilü\'l-Ashâb, Halife Ömer\'in şehit edilmesi (hadis numarası kontrol edilecek)', says: { tr: 'Halife Ömer yaralandıktan sonra şurayı belirler. Sîret şartı ayrıntısı burada tam yer almayabilir.' }, grade: { tr: 'Sahih' }, status: 'check' },
    { book: 'İbn Ebi\'l-Hadîd, Şerhu Nehci\'l-Belağa', ref: '3. hutbe şerhi', says: { tr: 'Mutezilî bir âlimin şerhidir; hutbenin erken kaynaklarda bulunduğuna dair aktarımlar içerdiği söylenir.' }, status: 'check' },
  ],
  shia: [
    { book: 'Nehcü\'l-Belağa (Şerif er-Radî)', ref: '3. hutbe (Şıkşıkıyye)', says: { tr: 'Hz. Ali hilafetin Halife Ebu Bekir tarafından "giyildiğini", kendisinin değirmen taşının mili gibi merkezde olduğunu, gözünde diken boğazında kemik varken sabrettiğini ve Halife Ömer\'in işi şuraya bırakıp kendisini onlardan biri saymasını anlatır.' }, grade: { tr: 'Derleme isnadsızdır; Sünni eleştirmenler nisbeti sorgular, Şii âlimler Radî\'den önceki kaynaklarda da bulunduğunu savunur' }, url: 'https://en.wikishia.net/view/Shiqshiqiyya_sermon', status: 'verified' },
    { book: 'Kuleynî, el-Kâfî', ref: 'Kitâbü\'l-Hüccet (cilt/sayfa kontrol edilecek)', says: { tr: 'İmamet nassı ve vasiyet delillerine dair rivayetler.' }, status: 'check' },
    { book: 'Şeyh Müfid, el-İrşâd', ref: 'Hz. Ali bölümü (sayfa kontrol edilecek)', says: { tr: 'Hz. Ali\'nin biatı ve Sakife sonrası olaylar, imamet yorumuyla.' }, status: 'check' },
    { book: 'Süleym b. Kays, Kitâb', ref: 'Sakife bölümü', says: { tr: 'Sakife sonrası olaylar ve Hz. Fatıma\'nın evi anlatımı. Kitabın bugünkü nüshasının Süleym\'e aidiyeti tartışmalıdır; tek başına delil sayılmaz.' }, status: 'check' },
    { book: 'İsbâtü\'l-Vasiyye (Mes\'udî\'ye atfedilen)', ref: 'Hz. Ali bölümü', says: { tr: 'Vasiyet ve imamet anlatısı. Mes\'udî\'ye aidiyeti net değildir; tek başına delil sayılmaz.' }, status: 'check' },
    { book: 'Yakûbî, Târîh', ref: 'c.2, Raşidîn dönemi (sayfa kontrol edilecek)', says: { tr: 'Sakife, Hz. Ali\'nin geri durması ve şura anlatımı. Yakûbî\'nin mezhebi tartışmalıdır; Sünni araştırmacılar da kullanır.' }, status: 'check' },
  ],
  disputes: [
    {
      title: { tr: 'Sakife nasıl bir toplantıydı?' },
      sunni: { tr: 'Ensar Sakife\'de toplandı, Ebu Bekir, Ömer ve Ebu Ubeyde geldi, biat alındı; Haşimoğulları orada değildi. Sünni okumada bu, ümmetin maslahatı için yapılan bir istişaredir.' },
      shia: { tr: 'Ensar Sakife\'de toplandı, biat alındı; Haşimoğulları\'nın orada olmadığı konusunda görüş birliği vardır. Şii okumada Gadir\'deki nass dururken, cenaze hazırlığı sırasında yapılan bu toplantı acele görülür.' },
    },
    {
      title: { tr: 'Halife Ömer\'in "felte" sözü' },
      sunni: { tr: 'Halife Ömer bu biata "felte" demiştir: ani ve istişaresiz bir iş. Sünni okumada Allah şerrini savmış, Halife Ebu Bekir layık çıkmıştır.' },
      shia: { tr: 'Halife Ömer bu biata "felte" demiştir: ani ve istişaresiz bir iş. Şii okumada bu söz, aceleciliğin kendi dilinden ifadesidir; metin ortaktır.' },
    },
    {
      title: { tr: 'Hz. Ali\'nin biat gecikmesi' },
      sunni: { tr: 'Buhari, Hz. Ali\'nin biatını Hz. Fatıma\'nın vefatından sonraya bağlar; rivayet altı aydan söz eder. Sünni okumada bu, yas ve Fedek gerginliğidir, sonra gönüllü biat gelmiştir; daha erken biat aktaran rivayetler de vardır.' },
      shia: { tr: 'Buhari, Hz. Ali\'nin biatını Hz. Fatıma\'nın vefatından sonraya bağlar; rivayet altı aydan söz eder. Şii okumada bu bekleyiş, onun Hz. Fatıma\'nın üzüntüsünde durduğunu ve hilafetteki yerini Gadir\'le anladığını gösterir.' },
    },
    {
      title: { tr: 'Hz. Fatıma\'nın evi' },
      sunni: { tr: 'Evin etrafında toplananlara yönelik baskı rivayetleri Sünni kitaplarda anılır. Ağır ayrıntılar bu okumada zayıf sayılır veya kabul edilmez.' },
      shia: { tr: 'Evin etrafında toplananlara yönelik baskı rivayetleri kaynaklarda anılır. Şii kitaplar daha ağır ayrıntılar aktarır; konu ihtilaflıdır ve metinlere göre değişir.' },
    },
    {
      title: { tr: 'Şıkşıkıyye ve şura' },
      sunni: { tr: 'Halife Ömer işi altı kişilik şuraya bıraktı; biat Halife Osman\'a yapıldı. Sünni okumada Hz. Ali\'nin cevabı kendi içtihadını korumasıdır; bazı araştırmacılar hutbeyi Şerif er-Radî\'ye bağlar.' },
      shia: { tr: 'Şura kuruldu ve biat Halife Osman\'a yapıldı; bu kaynaklarda anlatılır. Şii okumada Şıkşıkıyye Hz. Ali\'ye aittir: o, iki halifenin yolunu şart görmeyişini ve şurada onlardan biri sayılmasını sabırla anar.' },
    },
  ],
  questions: [
    { tr: 'Peygamber\'in ailesi cenaze hazırlarken Sakife\'de biat alındı. O saatte Hz. Ali\'nin yanında durmayı düşünmek, Ehl-i Beyt sevgisini nasıl besler?' },
    { tr: 'Buhari, Hz. Ali\'nin biatını Hz. Fatıma\'nın vefatından sonraya bağlar. Onun bu aylarda Hz. Fatıma\'nın üzüntüsünde durması size ne söyler?' },
    { tr: 'Sakife\'de "Araplar yönetimi Kureyş\'e tanır" denmişti. Peygamber\'in en yakın ailesini bu sözün yanında sevgiyle anmak size ne hatırlatır?' },
    { tr: 'Hz. Ali, Şıkşıkıyye hutbesinde bu günleri sabırla anar. Onun sabrı, Ehl-i Beyt\'e duyulan sevgiye ne katar sizce?' },
  ],
  summary: { tr: 'Peygamber\'in ailesi onun cenazesini hazırlarken Sakife\'de biat alındı. Halife Ömer\'in bu biata "felte" dediği Buhari\'de anlatılır. Hz. Ali\'nin biatının Hz. Fatıma\'nın vefatından sonraya kaldığı da Sünni kaynaklarında geçmektedir (Buhari, Sahih, no. 4240-4241). Şii okumada bu gün, Ehl-i Beyt\'in acısı ve Hz. Ali\'nin yeri birlikte anılır.' },
};

import type { HistEvent } from '../types';

// Kaynak: research/02-sakife-hilafet-sura.md. status araştırmadaki doğrulama durumunu yansıtır.
export const sakife: HistEvent = {
  id: 'sakife',
  date: { tr: 'Rebiülevvel 11 H (632)', en: 'Rabi al-Awwal 11 AH (632)' },
  title: { tr: 'Sakife-i Beni Saide ve biat süreci', en: 'Saqifa of Banu Sa\'ida and the pledge of allegiance' },
  hook: { tr: 'Peygamber\'in cenazesi hazırlanırken halife seçildi. Hz. Ali altı ay biat etmedi.', en: 'A caliph was chosen while the Prophet\'s body was still being prepared. Hz. Ali did not pledge for six months.' },
  scenes: [
    {
      text: { tr: 'Peygamber vefat edince Medine karıştı. Hz. Ali, Abbas ve Haşimoğulları yıkama ve defin hazırlığına koyuldu.' },
      art: { bg: 'interior', actors: [{ kind: 'ali', x: 34, label: { tr: 'Hz. Ali' } }, { kind: 'crowd', x: 68, scale: 4, label: { tr: 'Haşimoğulları' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Aynı sırada Ensar, Beni Saide gölgeliğinde toplandı. Hasta olan Hazrec reisi Sa\'d b. Ubade de oradaydı; Ensar yönetimi kendilerinden istedi.' },
      art: { bg: 'city', props: ['palms'], actors: [{ kind: 'crowd', x: 30, scale: 7, label: { tr: 'Ensar' } }, { kind: 'man', x: 66, pose: 'sit', label: { tr: 'Sa\'d b. Ubade' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Haberi alan Ebu Bekir ve Ömer, Ebu Ubeyde ile birlikte Sakife\'ye gitti. Ebu Bekir, Ensar\'ın faziletini kabul etti ama Arapların yönetimi Kureyş\'e tanıyacağını söyledi.' },
      art: { bg: 'city', props: ['palms'], actors: [{ kind: 'crowd', x: 24, scale: 5, label: { tr: 'Ensar' } }, { kind: 'man', x: 48, label: { tr: 'Ebu Bekir' } }, { kind: 'man', x: 64, label: { tr: 'Ömer' } }, { kind: 'man', x: 80, label: { tr: 'Ebu Ubeyde' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Hubab b. Münzir "bizden bir emir, sizden bir emir" dedi; Beşir b. Sa\'d ise Kureyş\'in lehine konuştu. Sesler yükseldi, Evs ve Hazrec arasındaki rekabet de tartışmaya karıştı.' },
      art: { bg: 'city', actors: [{ kind: 'man', x: 28, pose: 'raise', label: { tr: 'Hubab b. Münzir' } }, { kind: 'man', x: 50, label: { tr: 'Beşir b. Sa\'d' } }, { kind: 'crowd', x: 76, scale: 5 }] },
      by: 'both',
    },
    {
      text: { tr: 'Ömer, Ebu Bekir\'in elini tutup biat etti; ardından Beşir ve diğerleri biat etti. Ortam o kadar gerildi ki bir ara "Sa\'d\'ı öldürdünüz" denildi. Sa\'d biat etmedi.' },
      art: { bg: 'city', props: ['palms'], actors: [{ kind: 'man', x: 30, label: { tr: 'Ömer' } }, { kind: 'man', x: 52, label: { tr: 'Ebu Bekir' } }, { kind: 'crowd', x: 78, scale: 5 }] },
      by: 'both',
    },
    {
      text: { tr: 'Halife Ömer sonraki yıllarda bu biat için "felte" dedi: aceleyle ve istişaresiz yapılmış bir iş. Ona göre Allah şerrini savmıştı ve bu bir daha tekrarlanmamalıydı.' },
      art: { bg: 'city', props: ['minbar'], actors: [{ kind: 'crowd', x: 30, scale: 6 }, { kind: 'man', x: 68, pose: 'raise', label: { tr: 'Ömer' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Hz. Fatıma\'nın vefatından sonra, Buhari\'ye göre, halkın Hz. Ali\'ye bakışı değişti. Hz. Ali Halife Ebu Bekir\'le barışmak ve biat etmek istedi; rivayet, onun altı ay biat etmediğini söyler.' },
      art: { bg: 'dawn', props: ['sun'], actors: [{ kind: 'ali', x: 34, label: { tr: 'Hz. Ali' } }, { kind: 'man', x: 66, label: { tr: 'Ebu Bekir' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Nehcü\'l-Belağa\'daki Şıkşıkıyye hutbesinde Hz. Ali bu günleri sabırla geçirdiğini anlatır. Yıllar sonra Halife Ömer, işi altı kişilik şuraya bıraktı; biat sonunda Halife Osman\'a yapıldı.' },
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
      sunni: { tr: 'Ümmetin maslahatı için yapılan istişare ve içtihattır. Kureyş şartı kabul edilmiştir.' },
      shia: { tr: 'Gadir\'de nass varken, Haşimoğulları\'nın katılmadığı aceleci bir toplantıdır. Haşimoğulları\'nın orada bulunmadığı konusunda görüş birliği vardır; ayrılık nass olup olmadığındadır.' },
    },
    {
      title: { tr: 'Halife Ömer\'in "felte" sözü' },
      sunni: { tr: 'Biat ani ve istişaresiz olmuştur, ancak Allah şerrini savmış ve Halife Ebu Bekir layık çıkmıştır.' },
      shia: { tr: 'Biatın usulsüz ve aceleci olduğunun Halife Ömer\'in kendi ağzından itirafıdır. Metin ortaktır; anlam yorum farkıdır.' },
    },
    {
      title: { tr: 'Hz. Ali\'nin biat gecikmesi' },
      sunni: { tr: 'Hz. Fatıma\'nın vefatına kadar süren yas ve Fedek gerginliğidir; sonra gönüllü biat etmiştir. Bazı Sünni rivayetler (örneğin Beyhakî) daha erken bir biat aktarır. "Altı ay" ifadesinin sıhhati tartışılır.' },
      shia: { tr: 'Gecikme, Hz. Ali\'nin bu yönetimin meşruiyetini kabul etmediğinin göstergesidir.' },
    },
    {
      title: { tr: 'Hz. Fatıma\'nın evi olayı' },
      sunni: { tr: 'Sünni kaynaklarda evin etrafında toplananlara baskı yapıldığına dair rivayetler vardır; ağır ayrıntılar zayıf sayılır veya reddedilir.' },
      shia: { tr: 'Şii kaynaklar daha ağır anlatımlar verir. Konu çok ihtilaflıdır ve kaynaklara göre farklı aktarılır.' },
    },
    {
      title: { tr: 'Şıkşıkıyye ve şura' },
      sunni: { tr: 'Bazı Sünni araştırmacılar hutbeyi Radî\'ye atfeder. Hz. Ali\'nin şuradaki cevabı kendi içtihadını koruma hakkıdır.' },
      shia: { tr: 'Âlimler hutbeyi Hz. Ali\'ye ait kabul eder ve Radî öncesi kaynakları gösterir. Şuradaki cevap, Hz. Ali\'nin Halife Ebu Bekir-Halife Ömer sîretini şart kabul etmemesidir ve dışlanma sebebi sayılır.' },
    },
  ],
  questions: [
    { tr: 'Halife Ömer\'in kendi sözüne göre Halife Ebu Bekir\'in biatı "felte" idi. Peygamber\'in en yakın ailesi cenaze hazırlığındayken, onlar olmadan alınan bir kararın istişareyle yapıldığı söylenebilir mi sizce?' },
    { tr: 'Buhari\'ye göre Hz. Ali altı ay biat etmedi ve Hz. Fatıma\'nın vefatından sonra biat etmek istedi. Peygamber\'in damadı ve amcaoğlu böyle bir bekleyişi neden seçti sizce?' },
    { tr: 'Sakife\'de ileri sürülen gerekçe "Arapların yönetimi Kureyş\'e tanıyacağı" idi. Aynı ölçüt Peygamber\'e en yakın olan Ehl-i Beyt için de geçerli olmaz mıydı?' },
    { tr: 'Hz. Ali, Şıkşıkıyye hutbesinde bu günleri sabırla geçirdiğini anlatır. Bu hutbenin Hz. Ali\'ye aidiyeti ne olursa olsun, Hz. Ali\'nin uzun süre geri durması başlı başına düşündürücü değil mi?' },
  ],
  summary: { tr: 'Halife Ömer\'in "felte" sözü ve Hz. Ali\'nin altı ay sonra yaptığı biat Buhari\'de geçer; olayın ana hatları Şii ve Sünni kaynaklarında ortak anlatılır. Gadir\'deki nass ve istişare meselesi ise ayrıca tartışılır.' },
};

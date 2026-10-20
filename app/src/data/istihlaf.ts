import type { HistEvent } from '../types';

// Kaynak: research/02-sakife-hilafet-sura.md. Yalnız Buhari 3700 (ihadis.com) ve WikiShia sayfası bu oturumda okundu; diğerleri 'check'.
export const istihlaf: HistEvent = {
  id: 'istihlaf',
  date: { tr: '13 H (634) ve 23-24 H (644)', en: '13 AH (634) and 23-24 AH (644)' },
  title: { tr: 'Ebu Bekir\'in Ömer\'i tayini ve altı kişilik şura', en: 'Abu Bakr\'s appointment of Umar and the six-man council' },
  hook: { tr: 'Halife kendinden sonrakini atayınca, Ömer de işi altı kişiye bırakınca; Hz. Ali neden "bunlardan biri mi sayıldım?" dedi?', en: 'Why did Imam Ali ask, "Was I counted as one of these?"' },
  scenes: [
    {
      by: 'both',
      text: { tr: 'Ebu Bekir hastalanıp ölümün yaklaştığını anlayınca, kendinden sonra yerine Ömer\'in geçmesini istedi. Bu, halifeliğin halka danışılarak belirlenmesinden çok, ölen halifenin seçtiği kişiye geçmesi demekti.' },
      art: { bg: 'interior', props: ['scroll'], actors: [{ kind: 'man', x: 40, pose: 'sit', label: { tr: 'Ebu Bekir' } }, { kind: 'man', x: 66, label: { tr: 'Ömer' } }] },
    },
    {
      by: 'sunni',
      text: { tr: 'Kaynaklarda anlatıldığına göre Ebu Bekir önce Abdurrahman b. Avf ve Osman\'a danıştı. Bir grup sahabi, Ömer\'in sertliğinden söz edip "Rabbine ne cevap vereceksin?" dedi; Talha\'nın bu itirazı aktarılır. Ebu Bekir, Allah\'a "O\'nun kulları içinde en hayırlıyı seçtim" diyeceğini söyledi.' },
      art: { bg: 'interior', actors: [{ kind: 'man', x: 30, label: { tr: 'Talha' } }, { kind: 'man', x: 68, pose: 'sit', label: { tr: 'Ebu Bekir' } }, { kind: 'crowd', x: 50, scale: 0.6 }] },
    },
    {
      by: 'both',
      text: { tr: 'Ebu Bekir vefat etti, Ömer halife oldu. On yıl kadar süren halifeliğinde fetihler hızla genişledi. Hz. Ali bu dönemde Medine\'de yaşadı ve Ömer\'in danıştığı kişilerden biri oldu.' },
      art: { bg: 'city', props: ['sun', 'minbar'], actors: [{ kind: 'man', x: 60, pose: 'raise', label: { tr: 'Ömer' } }, { kind: 'ali', x: 34, label: { tr: 'Hz. Ali' } }] },
    },
    {
      by: 'both',
      text: { tr: 'Sabah namazında Ömer hançerlendi; Buhari\'nin 3700 numaralı hadisine göre saldırgan Arap olmayan biriydi ve on üç kişiyi yaraladı. Ömer yerine geçecek kimseyi tek başına seçmedi.' },
      art: { bg: 'dawn', actors: [{ kind: 'man', x: 50, pose: 'sit', label: { tr: 'Ömer' } }, { kind: 'crowd', x: 78, scale: 0.7 }] },
    },
    {
      by: 'both',
      text: { tr: 'Ömer, Peygamber\'in kendilerinden razı ayrıldığı altı kişiyi belirledi: Hz. Ali, Osman, Zübeyr, Talha, Sa\'d ve Abdurrahman b. Avf. Oğlu Abdullah\'ın tanık olacağını, ama hilafette payı olmayacağını söyledi.' },
      art: { bg: 'interior', actors: [{ kind: 'ali', x: 22, label: { tr: 'Hz. Ali' } }, { kind: 'man', x: 40, label: { tr: 'Osman' } }, { kind: 'man', x: 58, label: { tr: 'Abdurrahman b. Avf' } }, { kind: 'crowd', x: 78, scale: 0.7 }] },
    },
    {
      by: 'both',
      text: { tr: 'Zübeyr ile Talha haklarını Hz. Ali ve Osman lehine, Sa\'d da Abdurrahman lehine bıraktı. Böylece karar fiilen Abdurrahman b. Avf\'ın eline geçti; o Hz. Ali ile Osman\'a ayrı ayrı adil davranma ve seçilene itaat şartını öne sürdü.' },
      art: { bg: 'interior', props: ['scroll'], actors: [{ kind: 'man', x: 52, label: { tr: 'Abdurrahman b. Avf' } }, { kind: 'ali', x: 26, label: { tr: 'Hz. Ali' } }, { kind: 'man', x: 76, label: { tr: 'Osman' } }] },
    },
    {
      by: 'sunni',
      text: { tr: 'Taberî\'de şöyle anlatılır: Abdurrahman, Hz. Ali\'den Allah\'ın kitabı, Peygamber\'in sünneti ve Ebu Bekir ile Ömer\'in yolu üzerine biat etmesini istedi. Hz. Ali "Allah\'ın kitabı, Peygamber\'in sünneti ve kendi içtihadım" diye cevap verdi. Aynı şart Osman\'a sunulunca Osman kabul etti; biat ona yapıldı.' },
      art: { bg: 'interior', actors: [{ kind: 'ali', x: 30, pose: 'raise', label: { tr: 'Hz. Ali' } }, { kind: 'man', x: 56, label: { tr: 'Abdurrahman b. Avf' } }, { kind: 'man', x: 78, label: { tr: 'Osman' } }] },
    },
    {
      by: 'shia',
      text: { tr: 'Hz. Ali, Nehcü\'l-Belağa\'nın 3. hutbesinde (Şıkşıkıyye) şikayet eder: Ebu Bekir hilafeti üstlenmişti; sonra Ömer\'e bıraktı; Ömer de işi altı kişilik şuraya vererek onu o kişilerden biri saymıştı. Hutbede şuranın düzeninin sonucu baştan belirlediği de vurgulanır. Hutbenin Şerif er-Radî\'den önceki kaynaklarda bulunup bulunmadığı araştırmacılar arasında tartışılır.' },
      art: { bg: 'mountain', props: ['stars'], actors: [{ kind: 'ali', x: 50, pose: 'raise', label: { tr: 'Hz. Ali' } }] },
    },
  ],
  sunni: [
    { book: 'Buhari, Sahih', ref: 'No. 3700 (Fedâilü\'s-Sahâbe, Osman\'ın biatı bölümü)', says: { tr: 'Ömer yaralanır; Hz. Ali, Osman, Zübeyr, Talha, Sa\'d ve Abdurrahman b. Avf\'ı belirler; Zübeyr ve Talha Hz. Ali ve Osman lehine, Sa\'d Abdurrahman lehine çekilir; Abdurrahman ikisinden adaletle hükmetme ve seçilene itaat sözü alır, Osman\'ı seçer, Hz. Ali biat eder.' }, grade: { tr: 'Sahih' }, url: 'https://ihadis.com/en/bukhari/hadith/3700', status: 'verified' },
    { book: 'İbn Sa\'d, et-Tabakâtü\'l-Kübrâ', ref: 'Ebu Bekir\'in istihlafı; cilt ve sayfa DOĞRULANMADI', says: { tr: 'Ebu Bekir\'in Abdurrahman b. Avf ve Osman\'a danışması; bir grup sahabinin Ömer\'in sertliği hakkında itirazı (ikincil olarak IslamQA özetinde görüldü).' }, url: 'https://islamqa.org/?p=17591', status: 'check' },
    { book: 'Taberî, Târîh', ref: '3. ve 4. cilt, 13 H ve 23-24 H olayları; sayfa DOĞRULANMADI', says: { tr: 'Ebu Bekir\'in vasiyeti, Ömer\'in şurası, Abdurrahman\'ın "Allah\'ın kitabı, sünnet, iki şeyhin sireti" şartı ve Hz. Ali\'nin "kendi içtihadım" cevabı (varyantlıdır).' }, status: 'check' },
    { book: 'İbnü\'l-Esîr, el-Kâmil; İbn Kesîr, el-Bidâye', ref: 'DOĞRULANMADI (sayfa/cilt)', says: { tr: 'Talha\'nın Ömer\'in tayinine itirazı (ikincil olarak WikiShia ve çeşitli sitelerde atıf olarak görüldü).' }, status: 'check' },
    { book: 'Belâzurî, Ensâbü\'l-Eşrâf', ref: 'DOĞRULANMADI (cilt/sayfa)', says: { tr: 'Şura ve Osman\'ın biatı ayrıntıları.' }, status: 'check' },
  ],
  shia: [
    { book: 'Nehcü\'l-Belağa (Şerif er-Radî)', ref: '3. hutbe (Şıkşıkıyye)', says: { tr: 'Hz. Ali\'nin hilafetin devri, Ömer\'in şurası ve kendisinin onlardan biri sayılması hakkındaki yakınması. Metni bu oturumda okunamadı; özet WikiShia\'dan.' }, url: 'https://en.wikishia.net/view/Shiqshiqiyya_sermon', status: 'check' },
    { book: 'Şeyh Müfid, el-İrşâd; Şeyh Saduk, İlelü\'ş-Şerâi\' ve Meânî\'l-Ahbâr', ref: 'Şıkşıkıyye rivayeti; cilt/sayfa DOĞRULANMADI', says: { tr: 'Hutbenin Radî\'den önceki kaynaklarda isnadla geçtiği iddiası (WikiShia özetinden; kitapların kendisi açılmadı).' }, url: 'https://en.wikishia.net/view/Shiqshiqiyya_sermon', status: 'check' },
    { book: 'İbn Ebi\'l-Hadîd, Şerhu Nehci\'l-Belağa', ref: '3. hutbe şerhi; cilt/sayfa DOĞRULANMADI', says: { tr: 'Mutezilî şârih; hutbeyi Belhî ve İbn Kıbe gibi Radî\'den önceki yazarların eserlerinde gördüğünü söyler (WikiShia aktarımı).' }, status: 'check' },
    { book: 'Kuleynî, el-Kâfî; Mes\'ûdî ve Ya\'kûbî', ref: 'DOĞRULANMADI', says: { tr: 'Şii imamet anlayışı ve şuraya ilişkin aktarımlar; bu oturumda doğrulanmadı.' }, status: 'check' },
  ],
  disputes: [
    {
      title: { tr: 'Halife kendi halefini atayabilir mi?' },
      sunni: { tr: 'Ebu Bekir\'in istihlafı, ümmetin maslahatına ve sahabenin kabulüne dayanan meşru bir yoldur; Talha dışında genel kabul gördü.' },
      shia: { tr: 'Ebu Bekir\'in kendisi de halkın biatıyla geldiği iddia edilirken halefini atamıştır; hilafet Gadir\'deki vasiyetle Hz. Ali\'ye aitti.' },
    },
    {
      title: { tr: 'Şuranın altı kişisi ve adil olup olmadığı' },
      sunni: { tr: 'Ömer, Peygamber\'in razı ayrıldığı kişileri belirleyerek istişareyi genişletti; seçim Medine halkının onayıyla sonuçlandı.' },
      shia: { tr: 'Hz. Ali\'yi diğerleriyle bir tutmak ve karar yetkisini Abdurrahman b. Avf\'a vermek sonucu baştan belirledi (Şıkşıkıyye).' },
    },
    {
      title: { tr: 'Hz. Ali\'nin sîret şartını reddetmesi' },
      sunni: { tr: 'Hz. Ali içtihadını koruma hakkını kullandı; bu, onun ilmi bağımsızlığıdır.' },
      shia: { tr: 'Hz. Ali, kendisinden önceki iki halifenin uygulamasına bağlı kalmayı reddetti; çünkü o yol Kur\'an ve sünnetle çelişiyordu.' },
    },
  ],
  questions: [
    { tr: 'Ebu Bekir, Talha ve diğerlerinin itirazına rağmen Ömer\'i atadıysa, ümmetin işi "istişareyle" yürüdüğü iddiası nasıl savunulur sizce?' },
    { tr: 'Ömer, altı kişinin başında Hz. Ali\'yi sayıp ona diğerleriyle eşit muamele yaptıysa, Hz. Ali\'nin faziletine dair hadisleri bildiği hâlde neden başka bir yol seçti sizce?' },
    { tr: 'Karar yetkisi tek bir kişinin (Abdurrahman b. Avf) eline geçtiyse ve o da Osman\'ı seçtiyse, bu şura gerçekten ümmetin ortak iradesini yansıtıyor mu?' },
    { tr: 'Hz. Ali, Abdurrahman\'ın "iki şeyhin yolu" şartına "kendi içtihadım" dedi. Bir imamın başkasının uygulamasıyla bağlı olmaması neden bu kadar önemli sizce?' },
  ],
  summary: { tr: 'Ebu Bekir Ömer\'i atadı, Ömer yaralanınca işi altı kişilik şuraya bıraktı; Abdurrahman b. Avf\'ın şartını Hz. Ali kabul etmeyince Osman seçildi, Şıkşıkıyye hutbesinde Hz. Ali ise bu süreçten yakınır.' },
};

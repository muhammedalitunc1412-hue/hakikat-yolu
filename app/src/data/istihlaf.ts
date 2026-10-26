import type { HistEvent } from '../types';

// Kaynak: research/02-sakife-hilafet-sura.md. Yalnız Buhari 3700 (ihadis.com) ve WikiShia sayfası bu oturumda okundu; diğerleri 'check'.
export const istihlaf: HistEvent = {
  id: 'istihlaf',
  date: { tr: '13 H (634) ve 23-24 H (644)', en: '13 AH (634) and 23-24 AH (644)' },
  title: { tr: 'Halife Ebu Bekir\'in Halife Ömer\'i tayini ve altı kişilik şura', en: 'Abu Bakr\'s appointment of Umar and the six-man council' },
  hook: { tr: 'Halife Ebu Bekir yerine Halife Ömer\'i bıraktı. Halife Ömer de işi altı kişiye verdi; bu şura Buhari\'de anlatılır.', en: 'Why did Imam Ali ask, "Was I counted as one of these?"' },
  scenes: [
    {
      by: 'both',
      text: { tr: 'Halife Ebu Bekir hastalanıp ölümün yaklaştığını anlayınca, kendinden sonra Halife Ömer\'in geçmesini istedi. Hilafet, ölen halifenin seçtiği kişiye kalıyordu. Bu olay Sünni kaynaklarında da geçmektedir (İbn Sa\'d, et-Tabakâtü\'l-Kübrâ; Taberî, Târîh).' },
      art: { bg: 'interior', props: ['scroll'], actors: [{ kind: 'man', x: 40, pose: 'sit', label: { tr: 'Ebu Bekir' } }, { kind: 'man', x: 66, label: { tr: 'Ömer' } }] },
    },
    {
      by: 'sunni',
      text: { tr: 'Halife Ebu Bekir önce Abdurrahman b. Avf\'a ve Osman\'a danıştı. Bir grup sahabi Halife Ömer\'in sertliğinden söz etti; "Rabbine ne cevap vereceksin?" dendi. Talha\'nın itirazı da aktarılır. Halife Ebu Bekir, Allah\'a "Kullarının en hayırlısını seçtim" diyeceğini söyledi. Bu olay Sünni kaynaklarında da geçmektedir (İbn Sa\'d, et-Tabakâtü\'l-Kübrâ; İbnü\'l-Esîr, el-Kâmil; İbn Kesîr, el-Bidâye).' },
      art: { bg: 'interior', actors: [{ kind: 'man', x: 30, label: { tr: 'Talha' } }, { kind: 'man', x: 68, pose: 'sit', label: { tr: 'Ebu Bekir' } }, { kind: 'crowd', x: 50, scale: 0.6 }] },
    },
    {
      by: 'both',
      text: { tr: 'Halife Ebu Bekir vefat etti, Ömer halife oldu. On yıl kadar süren bu dönemde fetihler genişledi. Hz. Ali Medine\'de yaşadı ve Halife Ömer\'in danıştığı kişilerden biri oldu.' },
      art: { bg: 'city', props: ['sun', 'minbar'], actors: [{ kind: 'man', x: 60, pose: 'raise', label: { tr: 'Ömer' } }, { kind: 'ali', x: 34, label: { tr: 'Hz. Ali' } }] },
    },
    {
      by: 'both',
      text: { tr: 'Sabah namazında Halife Ömer hançerlendi. Buhari\'nin anlattığına göre saldırgan Arap olmayan biriydi ve on üç kişiyi yaraladı. Halife Ömer yerine geçecek kişiyi tek başına seçmedi. Bu olay Sünni kaynaklarında da geçmektedir (Buhari, Sahih, no. 3700).' },
      art: { bg: 'dawn', actors: [{ kind: 'man', x: 50, pose: 'sit', label: { tr: 'Ömer' } }, { kind: 'crowd', x: 78, scale: 0.7 }] },
    },
    {
      by: 'both',
      text: { tr: 'Halife Ömer, Peygamber\'in kendilerinden razı ayrıldığı altı kişiyi saydı: Hz. Ali, Osman, Zübeyr, Talha, Sa\'d ve Abdurrahman b. Avf. Oğlu Abdullah\'ın tanık olacağını, hilafette payı olmayacağını söyledi. Altı kişinin adı Sünni kaynaklarında da geçmektedir (Buhari, Sahih, no. 3700).' },
      art: { bg: 'interior', actors: [{ kind: 'ali', x: 22, label: { tr: 'Hz. Ali' } }, { kind: 'man', x: 40, label: { tr: 'Osman' } }, { kind: 'man', x: 58, label: { tr: 'Abdurrahman b. Avf' } }, { kind: 'crowd', x: 78, scale: 0.7 }] },
    },
    {
      by: 'both',
      text: { tr: 'Zübeyr ile Talha haklarını Hz. Ali ve Osman lehine, Sa\'d da Abdurrahman lehine bıraktı. Karar fiilen Abdurrahman b. Avf\'ın eline geçti. O, Hz. Ali ile Osman\'dan adil davranma ve seçilene itaat sözü istedi. Bu olay Sünni kaynaklarında da geçmektedir (Buhari, Sahih, no. 3700).' },
      art: { bg: 'interior', props: ['scroll'], actors: [{ kind: 'man', x: 52, label: { tr: 'Abdurrahman b. Avf' } }, { kind: 'ali', x: 26, label: { tr: 'Hz. Ali' } }, { kind: 'man', x: 76, label: { tr: 'Osman' } }] },
    },
    {
      by: 'sunni',
      text: { tr: 'Taberî şöyle anlatır: Abdurrahman, Hz. Ali\'den Allah\'ın kitabı, Peygamber\'in sünneti ve Halife Ebu Bekir ile Halife Ömer\'in yolu üzerine biat etmesini istedi. Hz. Ali "Allah\'ın kitabı, Peygamber\'in sünneti ve kendi içtihadım" diye cevap verdi. Aynı şart Osman\'a sunulunca Osman kabul etti; biat ona yapıldı. Bu olay Sünni kaynaklarında da geçmektedir (Taberî, Târîh).' },
      art: { bg: 'interior', actors: [{ kind: 'ali', x: 30, pose: 'raise', label: { tr: 'Hz. Ali' } }, { kind: 'man', x: 56, label: { tr: 'Abdurrahman b. Avf' } }, { kind: 'man', x: 78, label: { tr: 'Osman' } }] },
    },
    {
      by: 'shia',
      text: { tr: 'Altı kişilik şura kuruldu ve biat Osman\'a yapıldı. Bu olay Sünni kaynaklarında da geçmektedir (Buhari, Sahih, no. 3700). Hz. Ali, Şıkşıkıyye hutbesinde bu süreçte kendisinin o altı kişiden biri sayılmasından söz eder. Hutbe, şuranın düzeninin sonucu baştan etkilediğini de söyler. Hutbenin Şerif er-Radî\'den önceki kitaplarda bulunup bulunmadığı araştırmacılar arasında konuşulur.' },
      art: { bg: 'mountain', props: ['stars'], actors: [{ kind: 'ali', x: 50, pose: 'raise', label: { tr: 'Hz. Ali' } }] },
    },
  ],
  sunni: [
    { book: 'Buhari, Sahih', ref: 'No. 3700 (Fedâilü\'s-Sahâbe, Osman\'ın biatı bölümü)', says: { tr: 'Halife Ömer yaralanır; Hz. Ali, Osman, Zübeyr, Talha, Sa\'d ve Abdurrahman b. Avf\'ı belirler; Zübeyr ve Talha Hz. Ali ve Osman lehine, Sa\'d Abdurrahman lehine çekilir; Abdurrahman ikisinden adaletle hükmetme ve seçilene itaat sözü alır, Osman\'ı seçer, Hz. Ali biat eder.' }, grade: { tr: 'Sahih' }, url: 'https://ihadis.com/en/bukhari/hadith/3700', status: 'verified' },
    { book: 'İbn Sa\'d, et-Tabakâtü\'l-Kübrâ', ref: 'Halife Ebu Bekir\'in istihlafı; cilt ve sayfa DOĞRULANMADI', says: { tr: 'Halife Ebu Bekir\'in Abdurrahman b. Avf ve Osman\'a danışması; bir grup sahabinin Halife Ömer\'in sertliği hakkında itirazı (ikincil olarak IslamQA özetinde görüldü).' }, url: 'https://islamqa.org/?p=17591', status: 'check' },
    { book: 'Taberî, Târîh', ref: '3. ve 4. cilt, 13 H ve 23-24 H olayları; sayfa DOĞRULANMADI', says: { tr: 'Halife Ebu Bekir\'in vasiyeti, Halife Ömer\'in şurası, Abdurrahman\'ın "Allah\'ın kitabı, sünnet, iki şeyhin sireti" şartı ve Hz. Ali\'nin "kendi içtihadım" cevabı (varyantlıdır).' }, status: 'check' },
    { book: 'İbnü\'l-Esîr, el-Kâmil; İbn Kesîr, el-Bidâye', ref: 'DOĞRULANMADI (sayfa/cilt)', says: { tr: 'Talha\'nın Halife Ömer\'in tayinine itirazı (ikincil olarak WikiShia ve çeşitli sitelerde atıf olarak görüldü).' }, status: 'check' },
    { book: 'Belâzurî, Ensâbü\'l-Eşrâf', ref: 'DOĞRULANMADI (cilt/sayfa)', says: { tr: 'Şura ve Osman\'ın biatı ayrıntıları.' }, status: 'check' },
  ],
  shia: [
    { book: 'Nehcü\'l-Belağa (Şerif er-Radî)', ref: '3. hutbe (Şıkşıkıyye)', says: { tr: 'Hz. Ali\'nin hilafetin devri, Halife Ömer\'in şurası ve kendisinin onlardan biri sayılması hakkındaki yakınması. Metni bu oturumda okunamadı; özet WikiShia\'dan.' }, url: 'https://en.wikishia.net/view/Shiqshiqiyya_sermon', status: 'check' },
    { book: 'Şeyh Müfid, el-İrşâd; Şeyh Saduk, İlelü\'ş-Şerâi\' ve Meânî\'l-Ahbâr', ref: 'Şıkşıkıyye rivayeti; cilt/sayfa DOĞRULANMADI', says: { tr: 'Hutbenin Radî\'den önceki kaynaklarda isnadla geçtiği iddiası (WikiShia özetinden; kitapların kendisi açılmadı).' }, url: 'https://en.wikishia.net/view/Shiqshiqiyya_sermon', status: 'check' },
    { book: 'İbn Ebi\'l-Hadîd, Şerhu Nehci\'l-Belağa', ref: '3. hutbe şerhi; cilt/sayfa DOĞRULANMADI', says: { tr: 'Mutezilî şârih; hutbeyi Belhî ve İbn Kıbe gibi Radî\'den önceki yazarların eserlerinde gördüğünü söyler (WikiShia aktarımı).' }, status: 'check' },
    { book: 'Kuleynî, el-Kâfî; Mes\'ûdî ve Ya\'kûbî', ref: 'DOĞRULANMADI', says: { tr: 'Şii imamet anlayışı ve şuraya ilişkin aktarımlar; bu oturumda doğrulanmadı.' }, status: 'check' },
  ],
  disputes: [
    {
      title: { tr: 'Halife kendi halefini atayabilir mi?' },
      sunni: { tr: 'Halife Ebu Bekir, yerine Halife Ömer\'i seçti; bu tayin kaynaklarda anlatılır. Sünni okumada bu, ümmetin maslahatı ve sahabenin kabulüyle meşru bir yoldur.' },
      shia: { tr: 'Halife Ebu Bekir, yerine Halife Ömer\'i seçti; bu tayin kaynaklarda anlatılır. Şii okumada hilafetin yeri, Gadir\'deki vasiyetle Hz. Ali\'dedir.' },
    },
    {
      title: { tr: 'Şuranın altı kişisi' },
      sunni: { tr: 'Halife Ömer altı kişiyi belirledi; bu Buhari\'de geçer (Buhari, Sahih, no. 3700). Sünni okumada o, Peygamber\'in razı olduğu kişileri seçerek istişareyi genişletmiş, sonuç Medine\'nin onayıyla tamamlanmıştır.' },
      shia: { tr: 'Altı kişi Buhari\'de geçer (Buhari, Sahih, no. 3700). Şii okumada Hz. Ali\'nin diğerleriyle bir tutulması ve yetkinin Abdurrahman b. Avf\'a kalması, Şıkşıkıyye\'de sonucu baştan etkileyen bir düzen olarak anılır.' },
    },
    {
      title: { tr: 'Hz. Ali\'nin sîret şartına cevabı' },
      sunni: { tr: 'Taberî, Hz. Ali\'nin "kendi içtihadım" dediğini aktarır. Sünni okumada bu, onun ilmi bağımsızlığını korumasıdır.' },
      shia: { tr: 'Taberî, Hz. Ali\'nin "kendi içtihadım" dediğini aktarır. Şii okumada o, önceki iki halifenin uygulamasına bağlanmayı değil, Kitap, sünnet ve kendi içtihadını esas almıştır.' },
    },
  ],
  questions: [
    { tr: 'Halife Ebu Bekir\'in Halife Ömer\'i seçmesi kaynaklarda durur. Bu tayini Hz. Ali\'nin yeriyle birlikte sükûnetle okumak size ne düşündürür?' },
    { tr: 'Halife Ömer altı kişinin içinde Hz. Ali\'yi de saydı. Onun Peygamber katındaki yerini seven bir kalp, bu şurayı nasıl okur sizce?' },
    { tr: 'Karar Abdurrahman b. Avf\'ın elinde toplandı ve Osman seçildi. Bu tabloyu Hz. Ali\'ye duyulan sevgiyle düşünmek size ne hatırlatır?' },
    { tr: 'Hz. Ali "kendi içtihadım" dedi. Kitap ve sünnetin yanında kendi ilmine sahip çıkması, ona olan sevgiyi nasıl derinleştirir?' },
  ],
  summary: { tr: 'Halife Ebu Bekir, Halife Ömer\'i yerine seçti. Halife Ömer yaralanınca altı kişilik şurayı bıraktı; Abdurrahman b. Avf Osman\'ı seçti. Bu şura Sünni kaynaklarında da geçmektedir (Buhari, Sahih, no. 3700). Şii okumada Hz. Ali\'nin "kendi içtihadım" sözü ve Şıkşıkıyye, onun yerini anlatır.' },
};

import type { HistEvent } from '../types';

// Kaynak: research/04-cemel-siffin-nehrevan.md + oturum içi web aramaları. status 'verified' = metin/numara okunup doğrulandı; 'check' = yayın öncesi birincil kaynaktan kontrol edilmeli.
export const osman: HistEvent = {
  id: 'osman',
  date: { tr: 'Yaklaşık 30-35 H (650-656); öldürülmesi: Zilhicce 35 H (Haziran 656)', en: 'c. 30-35 AH (650-656); killed: Dhu al-Hijjah 35 AH (June 656)' },
  title: { tr: 'Halife Osman Dönemi, Medine Kuşatması ve Hz. Ali', en: 'The Era of Uthman, the Siege of Medina and Hz. Ali' },
  hook: { tr: 'Şikâyetler büyürken Hz. Ali Medine\'de arabuluculuk yaptı. Ardından kendisine biat istendi.', en: 'The man who mediated in Medina as grievances grew, and was then asked for allegiance.' },
  scenes: [
    {
      text: { tr: '**Osman**\'ın halifeliğinin ilk yılları görece sakin geçti. İkinci yarıda ise valiliklere yapılan atamalar ve kamu mallarının dağıtımı daha çok tartışılmaya başladı. Osman, Kûfe, Basra ve Mısır gibi önemli merkezlerde Ümeyyeoğullarından veya akrabası olan kişilere görev verdi. Şam\'a Ömer döneminde atanmış olan **Muaviye**\'nin Suriye\'deki yetkileri de genişledi. Bu kararlar, yönetimde akrabalık bağlarının ağırlığına ilişkin şikâyetleri artırdı.' },
      art: { bg: 'city', props: ['palms'], actors: [{ kind: 'crowd', x: 34, scale: 7 }, { kind: 'man', x: 66, label: { tr: 'Osman' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Mısır, Kûfe ve Basra\'dan heyetler Medine\'ye geldi. Şikâyet, Emevî atamalarına ve beytülmal denilen ortak hazinenin kullanımına dayanıyordu. Medine halkı bu itirazları yakından duydu. **Hz. Ali** henüz araya girmemişti. Osman\'ı uyarmak ona düşecekti.' },
      art: { bg: 'caravan', props: ['camels'], actors: [{ kind: 'crowd', x: 40, scale: 9 }, { kind: 'man', x: 76 }] },
      by: 'both',
    },
    {
      text: { tr: '**Hz. Ali**, Medine\'de Halife Osman\'ı uyardı. Halkın şikâyetini iletti ve tutumunun değişmesini istedi. Mısırlı heyet yaklaşınca, Osman\'ın isteğiyle Hz. Ali ve Muhammed b. Mesleme onlarla konuştu. Şikâyetlerin giderileceği sözüyle heyet döndü. Hz. Ali, kan dökülmesin diye iki tarafın arasında durdu.' },
      art: { bg: 'interior', actors: [{ kind: 'ali', x: 38, label: { tr: 'Hz. Ali' } }, { kind: 'man', x: 70, label: { tr: 'Osman' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Anlaşma bozuldu. **Hz. Ali**, Mervan\'ın Osman\'ı zora sokacağını söyledi ve ondan uzak durmasını öğütledi. Bir mektup da anılır. Mektubu kimin yazdığı konuşulur. Öğüt tutulmadı. İş, Medine\'de kuşatmaya vardı.' },
      art: { bg: 'interior', props: ['scroll'], actors: [{ kind: 'ali', x: 36, label: { tr: 'Hz. Ali' } }, { kind: 'man', x: 64, label: { tr: 'Osman' } }, { kind: 'man', x: 84, label: { tr: 'Mervan' } }] },
      by: 'shia',
    },
    {
      text: { tr: 'Medine\'de kuşatma başladı. Halife Osman evine çekildi. Su ve yiyecek zorlaştı. Osman, "Peygamber benden bir söz aldı, ona sabrediyorum" dedi. **Hz. Ali** ise hâlâ kanın durmasını istiyordu.' },
      art: { bg: 'night', props: ['stars', 'moon'], actors: [{ kind: 'crowd', x: 30, scale: 8 }, { kind: 'man', x: 74, label: { tr: 'Osman' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Kuşatma sürerken, rivayete göre **Hz. Ali**, **Hz. Hasan** ile **Hz. Hüseyin**\'i Osman\'ın evini korumaları için gönderdi. Suyu da ulaştırmaya çalıştığı anlatılır. Hz. Hasan\'ın yaralandığı da söylenir. Gadir\'de hakkı ilan edilen Hz. Ali, yine de Osman\'ın kanını istemiyordu.' },
      art: { bg: 'city', actors: [{ kind: 'hasan', x: 32, label: { tr: 'Hz. Hasan' } }, { kind: 'husayn', x: 48, label: { tr: 'Hz. Hüseyin' } }, { kind: 'ali', x: 68, label: { tr: 'Hz. Ali' } }, { kind: 'man', x: 86, label: { tr: 'Osman' } }] },
      by: 'shia',
    },
    {
      text: { tr: 'Halife Osman, 35 H Zilhicce\'de Medine\'de öldürüldü. 18 Zilhicce 35\'te öldürüldü. Hilafeti yaklaşık on iki yıl sürmüştü. **Hz. Ali** hutbesinde der: öldürmesi için emir vermiş olsaydı katil sayılırdı. İnsanları ondan alıkoymuş olsaydı yardımcısı olurdu. Hükmü Allah\'a bırakır. Hz. Ali bu öldürmede kılıç kullanmadı. Bu kanın yanında da yer almadı.' },
      art: { bg: 'dawn', actors: [{ kind: 'crowd', x: 34, scale: 7 }, { kind: 'ali', x: 74, label: { tr: 'Hz. Ali' } }] },
      by: 'shia',
    },
    {
      text: { tr: 'Osman\'ın ardından Medine bir süre yönetimsiz kaldı. Halk Mescid-i Nebevî\'de **Hz. Ali**\'nin yanına koştu. O, bu ağır sorumluluğu bilinçle üstlendi. Biat, bağlılık sözüdür. Biat orada alındı. Devraldığı devlet dertliydi. Kendinden önceki halifelerin döneminden kalan hatalar, adaletsizlikler, akraba kayırmacılığı, haksız dağıtılmış mallar ve bozuk valiler duruyordu. İlk işi adaleti kurmak oldu. Haksız dağıtılan malları beytülmale geri almaya, bozuk valileri görevden almaya başladı. Bu adalet kararlılığı, Cemel ve Sıffin\'deki muhalefeti doğuracaktı. Talha ile Zübeyr\'in gönlü bu biatta tam durmayacaktı.' },
      art: { bg: 'city', props: ['minbar'], actors: [{ kind: 'crowd', x: 32, scale: 9 }, { kind: 'man', x: 56, label: { tr: 'Talha' } }, { kind: 'ali', x: 78, label: { tr: 'Hz. Ali' } }] },
      by: 'both',
    },
  ],
  sunni: [
    { book: 'Tirmizî, el-Câmi\'', ref: 'No. 3711 (Menâkıb)', says: { tr: 'Halife Osman kuşatma gününde: "Resulullah benden bir söz aldı, ona sabrediyorum."' }, grade: { tr: 'Tirmizî: hasen sahih; Albânî ve Hz. Ali Za\'i: sahih (zincirde Süfyan b. Vekî\' zayıf, destekleyici rivayet var)' }, url: 'https://hadithunlocked.com/tirmidhi:3711', status: 'verified' },
    { book: 'Buhârî, Sahih', ref: 'Halife Osman\'ın faziletleri ve Rûme kuyusu (numara kontrol edilecek)', says: { tr: 'Halife Osman\'a, başına gelecek bir belâya karşılık cennet müjdesi verilir.' }, status: 'check' },
    { book: 'Taberî, Târîh (SUNY çevirisi c.15)', ref: 'Halife Osman dönemi, 35. yıl olayları (sayfa kontrol edilecek)', says: { tr: 'Heyetler, kuşatma ve öldürülmesi ayrıntılı anlatılır.' }, url: 'https://redshelf.com/book/1750815', status: 'check' },
    { book: 'İbn Kesîr, el-Bidâye ve\'n-Nihâye', ref: 'c.7, Halife Osman\'ın öldürülmesi (sayfa kontrol edilecek)', says: { tr: 'Hz. Hasan\'ın yaralanması ve Hz. Ali\'nin tutumu bu anlatım içinde yer alır.' }, status: 'check' },
    { book: 'İbn Sa\'d, Tabakât; İbn Esîr, el-Kâmil', ref: 'Halife Osman bölümü, 35. yıl (kontrol edilecek)', says: { tr: 'Halife Osman\'ın halifeliği, heyetler ve kuşatma.' }, status: 'check' },
    { book: 'Belâzurî, Ensâbü\'l-Eşrâf', ref: 'c.5, s.98, 101 civarı (ikincil kaynak üzerinden; birincil metin okunmadı)', says: { tr: 'Hz. Ali\'nin Hz. Hasan ve Hz. Hüseyin\'i Halife Osman\'ın evini korumakla görevlendirdiği rivayeti.' }, url: 'https://en.wikishia.net/view/Special:MobileDiff/12298', status: 'check' },
  ],
  shia: [
    { book: 'Nehcü\'l-Belâğa', ref: 'Hutbe 30 (Halife Osman\'ın öldürülmesi hakkında)', says: { tr: 'Hz. Ali: emir verseydim katil, engellemiş olsaydım yardımcı olurdum; hüküm Allah\'ındır. Numara ikincil kaynakta görüldü, metin birincil nüshadan kontrol edilmeli.' }, url: 'https://cois.uokerbala.edu.iq/wp/en/?p=6898', status: 'check' },
    { book: 'Nehcü\'l-Belâğa', ref: 'Hutbe 3 (Şıkşıkıyye)', says: { tr: 'Hz. Ali, kendinden önceki dönemde hakkının nasıl geçiştirildiğini anlatır.' }, url: 'https://en.wikipedia.org/wiki/Shaqshaqiya_sermon', status: 'check' },
    { book: 'Şeyh Müfid, el-Cemel', ref: 'Halife Osman\'a karşı isyan ve Hz. Ali\'nin tutumu (sayfa kontrol edilecek)', says: { tr: 'Cemel öncesi olayların Şiî anlatımı.' }, status: 'check' },
    { book: 'İbn Ebi\'l-Hadîd, Şerhu Nehci\'l-Belâğa', ref: 'Hutbe 30 şerhi (cilt/sayfa kontrol edilecek)', says: { tr: 'Halife Osman\'ın öldürülmesine dair rivayetleri aktarır.' }, status: 'check' },
    { book: 'Nasr b. Müzahim, Vak\'atü Sıffîn', ref: 'Baştaki yazışmalar (sayfa kontrol edilecek)', says: { tr: 'Halife Osman\'ın kanı meselesi ve Hz. Ali ile Muaviye yazışmaları.' }, status: 'check' },
    { book: 'WikiShia, Hz. Hasan ve Hz. Hüseyin\'in Halife Osman\'ı koruması rivayeti', ref: 'Seyyid Ca\'fer Murtazâ ve Allâme Emînî\'nin eleştirisi (ikincil)', says: { tr: 'Rivayeti zincir sorunları nedeniyle zayıf bulan görüşler aktarılır.' }, url: 'https://en.wikishia.net/view/Special:MobileDiff/12298', status: 'check' },
  ],
  disputes: [
    {
      title: { tr: 'Hz. Hasan ve Hz. Hüseyin evin yanında mıydı?' },
      sunni: { tr: 'Koruma rivayeti ve Hz. Hasan\'ın yaralandığı bazı Sünni kitaplarda anılır (Belâzurî, Ensâbü\'l-Eşrâf; İbn Kesîr, el-Bidâye ve\'n-Nihâye). Sünni okumada Hz. Ali\'nin isyancılar üzerinde denetimi olmadığı da belirtilir.' },
      shia: { tr: 'Koruma rivayeti Belâzurî\'de de anılır. Bazı Şii âlimler zinciri zayıf bulur; Hz. Ali\'nin kuşatmayı desteklemediği ve Halife Osman\'a yardımının ölçüsü ayrıca konuşulur.' },
    },
    {
      title: { tr: 'Hz. Ali\'nin tutumu' },
      sunni: { tr: 'Hz. Ali, Halife Osman\'ı uyardı ve fitnenin büyümemesi için aracılık etti. Bu işe karışanların yargısı sonra tartışma konusu olmuştur.' },
      shia: { tr: 'Hz. Ali şikâyetleri iletti ve aracılık etti. Şii okumada o bunları yerinde görmüş, kanın dökülmesini onaylamamış ve hükmü Allah\'a bırakmıştır.' },
    },
  ],
  questions: [
    { tr: 'Hz. Ali hem şikâyeti iletti hem de heyeti geri çevirmeye çalıştı. Onun bu ara yerde durması, Ehl-i Beyt\'in ölçülü duruşu hakkında ne söyler sizce?' },
    { tr: 'Halife Osman "Peygamber benden bir söz aldı, ona sabrediyorum" dedi. Bu sabır, o günleri daha sakin okumaya nasıl yardım eder?' },
    { tr: 'Hz. Ali ne emir verdiğini ne de tamamen engellediğini söyleyip hükmü Allah\'a bırakıyor. Bu söz, onu seven bir gönle ne öğretir?' },
    { tr: 'Hz. Hasan ve Hz. Hüseyin\'in evin yanında olduğu rivayet bazı âlimlerce zayıf sayılıyor. Böyle bir rivayeti sevgiyle ve ihtiyatla nasıl okuruz?' },
    { tr: 'Hz. Ali hilafeti bilinçle üstlendi. Haksız malları ve bozuk valileri düzeltmeye başlaması, ona duyulan sevgiyi size nasıl anlatıyor?' },
  ],
  summary: { tr: 'Halife Osman\'ın ikinci yarısındaki şikâyetler kuşatmaya ve 35 H\'de öldürülmesine vardı. Hz. Ali aracılık etti. "Peygamber benden bir söz aldı, ona sabrediyorum" dedi. Halk ona koşunca Hz. Ali hilafeti bilinçle üstlendi ve adaleti kurmaya başladı.' },
};

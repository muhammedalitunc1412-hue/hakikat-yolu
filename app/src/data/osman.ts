import type { HistEvent } from '../types';

// Kaynak: research/04-cemel-siffin-nehrevan.md + oturum içi web aramaları. status 'verified' = metin/numara okunup doğrulandı; 'check' = yayın öncesi birincil kaynaktan kontrol edilmeli.
export const osman: HistEvent = {
  id: 'osman',
  date: { tr: 'Yaklaşık 30-35 H (650-656); şehadet: Zilhicce 35 H (Haziran 656)', en: 'c. 30-35 AH (650-656); martyrdom: Dhu al-Hijjah 35 AH (June 656)' },
  title: { tr: 'Halife Osman Dönemi, Medine Kuşatması ve Hz. Ali', en: 'The Era of Uthman, the Siege of Medina and Imam Ali' },
  hook: { tr: 'Şikâyetler büyürken Hz. Ali Medine\'de arabuluculuk yaptı. Ardından kendisine biat istendi.', en: 'The man who mediated in Medina as grievances grew, and was then asked for allegiance.' },
  scenes: [
    {
      text: { tr: 'Halife Osman\'ın halifeliğinin ilk yılları sakin geçti. İkinci yarısında valilikler ve mal dağıtımı şikâyet konusu oldu. Yakınlarının, özellikle Emevî ailesinden kişilerin önemli görevlere getirilmesi eleştirildi. Onun faziletleri de hadislerde anılır. Bu olay Sünni kaynaklarında da geçmektedir (Buhârî, Sahih). Peygamber\'in ona verdiği bir sözü kuşatma günü kendisi hatırlattı.' },
      art: { bg: 'city', props: ['palms'], actors: [{ kind: 'crowd', x: 34, scale: 7 }, { kind: 'man', x: 66, label: { tr: 'Osman' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Mısır, Kûfe ve Basra\'dan heyetler valilerinden şikâyet için geldi. Bu olay Sünni kaynaklarında da geçmektedir (Taberî, Târîh; İbn Sa\'d, Tabakât; İbn Esîr, el-Kâmil). Şii kaynaklarında bu şikâyetler Emevî atamaları ve beytülmalin kullanımıyla anılır. İsyancıların niyetleri ve taleplerinin ölçüsü ayrıca tartışılır. Medine halkı ve sahabenin önde gelenleri durumu yakından izliyordu.' },
      art: { bg: 'caravan', props: ['camels'], actors: [{ kind: 'crowd', x: 40, scale: 9 }, { kind: 'man', x: 76 }] },
      by: 'both',
    },
    {
      text: { tr: 'Hz. Ali, Halife Osman\'la konuşup onu uyardı. Halkın şikâyetlerini iletti, tutumunu değiştirmesini istedi. Mısırlı heyet Medine yakınına gelince, Halife Osman\'ın isteğiyle Hz. Ali, Muhammed b. Mesleme ile birlikte onlarla görüştü; şikâyetlerin giderileceği sözüyle geri dönmelerini sağladığı aktarılır. Bu olay Sünni kaynaklarında da geçmektedir (Taberî, Târîh; İbn Kesîr, el-Bidâye ve\'n-Nihâye).' },
      art: { bg: 'interior', actors: [{ kind: 'ali', x: 38, label: { tr: 'Hz. Ali' } }, { kind: 'man', x: 70, label: { tr: 'Osman' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Anlaşma sonradan bozuldu. Hz. Ali, Halife Osman\'a Mervan\'ın onu zora sokacağını söyleyip ondan uzak durmasını öğütledi. Bazı kaynaklar bir mektuptan söz eder; mektubu kimin yazdığı tartışmalıdır. Bu bozulma Şii kaynaklarında anlatılır.' },
      art: { bg: 'interior', props: ['scroll'], actors: [{ kind: 'ali', x: 36, label: { tr: 'Hz. Ali' } }, { kind: 'man', x: 64, label: { tr: 'Osman' } }, { kind: 'man', x: 84, label: { tr: 'Mervan' } }] },
      by: 'shia',
    },
    {
      text: { tr: 'Medine\'de kuşatma başladı. Halife Osman evine çekildi; su ve yiyecek girişi güçleşti. O, "Peygamber benden bir söz aldı, ona sabrediyorum" dedi. Bu olay Sünni kaynaklarında da geçmektedir (Tirmizî, el-Câmi\', no. 3711).' },
      art: { bg: 'night', props: ['stars', 'moon'], actors: [{ kind: 'crowd', x: 30, scale: 8 }, { kind: 'man', x: 74, label: { tr: 'Osman' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Rivayete göre Hz. Ali, Hz. Hasan ile Hz. Hüseyin\'i Halife Osman\'ın evini korumaları için gönderdi. Bu olay Sünni kaynaklarında da geçmektedir (Belâzurî, Ensâbü\'l-Eşrâf). Şii kaynaklarında onun su ulaştırmaya çalıştığı da geçer. Bazı Şii âlimler koruma rivayetini zayıf bulur. Hz. Hasan\'ın yaralandığını söyleyenler de vardır (İbn Kesîr, el-Bidâye ve\'n-Nihâye).' },
      art: { bg: 'city', actors: [{ kind: 'hasan', x: 32, label: { tr: 'Hz. Hasan' } }, { kind: 'husayn', x: 48, label: { tr: 'Hz. Hüseyin' } }, { kind: 'ali', x: 68, label: { tr: 'Hz. Ali' } }, { kind: 'man', x: 86, label: { tr: 'Osman' } }] },
      by: 'shia',
    },
    {
      text: { tr: 'Halife Osman 35 H Zilhicce ayında şehit edildi. Bu olay Sünni kaynaklarında da geçmektedir (Taberî, Târîh). Ayrıntılar kaynaklarda farklıdır. Hz. Ali, Nehcü\'l-Belâğa\'daki bir hutbede şöyle der: öldürmesi için emir vermiş olsaydı katil sayılırdı; insanları ondan alıkoymuş olsaydı yardımcısı olurdu. Son hükmü Allah\'a bırakır.' },
      art: { bg: 'dawn', actors: [{ kind: 'crowd', x: 34, scale: 7 }, { kind: 'ali', x: 74, label: { tr: 'Hz. Ali' } }] },
      by: 'shia',
    },
    {
      text: { tr: 'Medine bir süre yönetimsiz kaldı. Sahabenin önde gelenleri ve halk Hz. Ali\'ye gelip biat etmesini istedi. Hz. Ali önce kabul etmedi; "Beni bırakın, başkasını arayın" sözü Şii kaynaklardaki hutbelerde geçer. Israr üzerine Mescid-i Nebevî\'de biat alındı. Talha ile Zübeyr\'in biatının gönüllü olup olmadığı tartışmalıdır.' },
      art: { bg: 'city', props: ['minbar'], actors: [{ kind: 'crowd', x: 32, scale: 9 }, { kind: 'man', x: 56, label: { tr: 'Talha' } }, { kind: 'ali', x: 78, label: { tr: 'Hz. Ali' } }] },
      by: 'both',
    },
  ],
  sunni: [
    { book: 'Tirmizî, el-Câmi\'', ref: 'No. 3711 (Menâkıb)', says: { tr: 'Halife Osman kuşatma gününde: "Resulullah benden bir söz aldı, ona sabrediyorum."' }, grade: { tr: 'Tirmizî: hasen sahih; Albânî ve Ali Za\'i: sahih (zincirde Süfyan b. Vekî\' zayıf, destekleyici rivayet var)' }, url: 'https://hadithunlocked.com/tirmidhi:3711', status: 'verified' },
    { book: 'Buhârî, Sahih', ref: 'Halife Osman\'ın faziletleri ve Rûme kuyusu (numara kontrol edilecek)', says: { tr: 'Halife Osman\'a, başına gelecek bir belâya karşılık cennet müjdesi verilir.' }, status: 'check' },
    { book: 'Taberî, Târîh (SUNY çevirisi c.15)', ref: 'Halife Osman dönemi, 35. yıl olayları (sayfa kontrol edilecek)', says: { tr: 'Heyetler, kuşatma ve şehadet ayrıntılı anlatılır.' }, url: 'https://redshelf.com/book/1750815', status: 'check' },
    { book: 'İbn Kesîr, el-Bidâye ve\'n-Nihâye', ref: 'c.7, Halife Osman\'ın öldürülmesi (sayfa kontrol edilecek)', says: { tr: 'Hz. Hasan\'ın yaralanması ve Hz. Ali\'nin tutumu bu anlatım içinde yer alır.' }, status: 'check' },
    { book: 'İbn Sa\'d, Tabakât; İbn Esîr, el-Kâmil', ref: 'Halife Osman bölümü, 35. yıl (kontrol edilecek)', says: { tr: 'Halife Osman\'ın halifeliği, heyetler ve kuşatma.' }, status: 'check' },
    { book: 'Belâzurî, Ensâbü\'l-Eşrâf', ref: 'c.5, s.98, 101 civarı (ikincil kaynak üzerinden; birincil metin okunmadı)', says: { tr: 'Hz. Ali\'nin Hz. Hasan ve Hz. Hüseyin\'i Halife Osman\'ın evini korumakla görevlendirdiği rivayeti.' }, url: 'https://en.wikishia.net/view/Special:MobileDiff/12298', status: 'check' },
  ],
  shia: [
    { book: 'Nehcü\'l-Belâğa', ref: 'Hutbe 30 (Halife Osman\'ın öldürülmesi hakkında)', says: { tr: 'Hz. Ali: emir verseydim katil, engellemiş olsaydım yardımcı olurdum; hüküm Allah\'ındır. Numara ikincil kaynakta görüldü, metin birincil nüshadan kontrol edilmeli.' }, url: 'https://cois.uokerbala.edu.iq/wp/en/?p=6898', status: 'check' },
    { book: 'Nehcü\'l-Belâğa', ref: 'Hutbe 3 (Şıkşıkıyye) ve biat ısrarına dair hutbe (Hutbe 92 olarak anılır; numara kontrol edilecek)', says: { tr: 'Hz. Ali\'nin hilafet ve biat hakkındaki sözleri.' }, url: 'https://en.wikipedia.org/wiki/Shaqshaqiya_sermon', status: 'check' },
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
    { tr: 'Hz. Ali biatı önce kabul etmedi. Yönetimin ağırlığını bilen birinin çekinmesi, ona duyulan sevgiyi nasıl artırır?' },
  ],
  summary: { tr: 'Halife Osman\'ın ikinci yarısındaki şikâyetler kuşatmaya ve 35 H\'de şehadetine vardı. Hz. Ali aracılık etti. "Peygamber benden bir söz aldı, ona sabrediyorum" sözü Sünni kaynaklarında da geçmektedir (Tirmizî, el-Câmi\', no. 3711). Gelen biat çağrısını önce geri çevirdi, ısrar üzerine kabul etti.' },
};

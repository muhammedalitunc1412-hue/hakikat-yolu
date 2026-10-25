import type { HistEvent } from '../types';

// Kaynak: research/04-cemel-siffin-nehrevan.md + oturum içi web aramaları. status 'verified' = metin/numara okunup doğrulandı; 'check' = yayın öncesi birincil kaynaktan kontrol edilmeli.
export const osman: HistEvent = {
  id: 'osman',
  date: { tr: 'Yaklaşık 30-35 H (650-656); şehadet: Zilhicce 35 H (Haziran 656)', en: 'c. 30-35 AH (650-656); martyrdom: Dhu al-Hijjah 35 AH (June 656)' },
  title: { tr: 'Halife Osman Dönemi, Medine Kuşatması ve Hz. Ali', en: 'The Era of Uthman, the Siege of Medina and Imam Ali' },
  hook: { tr: 'Şikâyetler büyürken Medine\'de arabuluculuk yapan ve sonra kendisine biat istenen kişi.', en: 'The man who mediated in Medina as grievances grew, and was then asked for allegiance.' },
  scenes: [
    {
      text: { tr: 'Halife Osman\'ın halifeliğinin ilk yılları sakin geçti. İkinci yarısında ise valilik ve mal dağıtımı şikâyet konusu oldu. Yakınlarının, özellikle Emevî ailesinden kişilerin önemli görevlere getirilmesi eleştirildi. Halife Osman\'ın faziletleri de hadislerde anılır; Peygamber\'in ona verdiği bir söz, kuşatma günü kendisi tarafından hatırlatılmıştır.' },
      art: { bg: 'city', props: ['palms'], actors: [{ kind: 'crowd', x: 34, scale: 7 }, { kind: 'man', x: 66, label: { tr: 'Osman' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Mısır, Kûfe ve Basra\'dan gelen heyetler valilerinden şikâyetçiydi. Şii kaynaklarına göre bu şikâyetler Emevî atamaları ve beytülmalin kullanımı üzerineydi. İsyancıların niyetleri ve taleplerinin ölçüsü ise kaynaklarda ayrıca tartışılır. Medine halkı ve sahabenin önde gelenleri durumu yakından izliyordu.' },
      art: { bg: 'caravan', props: ['camels'], actors: [{ kind: 'crowd', x: 40, scale: 9 }, { kind: 'man', x: 76 }] },
      by: 'both',
    },
    {
      text: { tr: 'Hz. Ali, Halife Osman\'la konuşup onu uyardı. Kaynaklarda Hz. Ali\'nin halkın şikâyetlerini ona ilettiği, tutumunu değiştirmesini istediği anlatılır. Mısırlı heyet Medine yakınlarına gelince Halife Osman\'ın isteğiyle Hz. Ali, Muhammed b. Mesleme ile birlikte onlarla görüştü; şikâyetlerin giderileceği sözüyle geri dönmelerini sağladığı aktarılır.' },
      art: { bg: 'interior', actors: [{ kind: 'ali', x: 38, label: { tr: 'Hz. Ali' } }, { kind: 'man', x: 70, label: { tr: 'Osman' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Şii kaynaklarına göre anlaşma sonradan bozuldu. Hz. Ali, Halife Osman\'a Mervan\'ın onu zora sokacağını söyleyip ondan uzak durmasını öğütledi. Bazı kaynaklarda bu bozulmanın nedeni olarak bir mektup meselesi anlatılır; mektubu kimin yazdığı tartışmalıdır.' },
      art: { bg: 'interior', props: ['scroll'], actors: [{ kind: 'ali', x: 36, label: { tr: 'Hz. Ali' } }, { kind: 'man', x: 64, label: { tr: 'Osman' } }, { kind: 'man', x: 84, label: { tr: 'Mervan' } }] },
      by: 'shia',
    },
    {
      text: { tr: 'Medine\'de kuşatma başladı. Halife Osman evine çekildi; su ve yiyecek girişi güçleşti. Sünnî kaynaklar, Halife Osman\'ın "Peygamber benden bir söz aldı, ona sabrediyorum" dediğini aktarır. Bu söz Tirmizî 3711\'de yer alır.' },
      art: { bg: 'night', props: ['stars', 'moon'], actors: [{ kind: 'crowd', x: 30, scale: 8 }, { kind: 'man', x: 74, label: { tr: 'Osman' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Şii kaynaklarına göre Hz. Ali, kuşatma sırasında Halife Osman\'a su ulaşmasını sağlamaya çalıştı. Beladurî\'ye dayanan bir rivayet, Hz. Ali\'nin oğulları Hz. Hasan ile Hz. Hüseyin\'i Halife Osman\'ın evini korumaları için gönderdiğini anlatır. Bu rivayeti bazı Şii âlimler zayıf bulur; Hz. Hasan\'ın bu sırada yaralandığını söyleyenler de vardır.' },
      art: { bg: 'city', actors: [{ kind: 'hasan', x: 32, label: { tr: 'Hz. Hasan' } }, { kind: 'husayn', x: 48, label: { tr: 'Hz. Hüseyin' } }, { kind: 'ali', x: 68, label: { tr: 'Hz. Ali' } }, { kind: 'man', x: 86, label: { tr: 'Osman' } }] },
      by: 'shia',
    },
    {
      text: { tr: 'Halife Osman 35 H Zilhicce ayında şehit edildi. Olayın ayrıntıları kaynaklarda farklıdır; bu anlatım ayrıntıya girmez. Nehcü\'l-Belâğa\'daki bir hutbede Hz. Ali, durumu şöyle özetler: Halife Osman\'ı öldürmesi için emir vermiş olsaydı katil sayılırdı; insanları ondan alıkoymuş olsaydı yardımcısı olurdu. Hz. Ali son hükmü Allah\'a bırakır.' },
      art: { bg: 'dawn', actors: [{ kind: 'crowd', x: 34, scale: 7 }, { kind: 'ali', x: 74, label: { tr: 'Hz. Ali' } }] },
      by: 'shia',
    },
    {
      text: { tr: 'Medine bir süre yönetimsiz kaldı. Sahabenin önde gelenleri ve halk Hz. Ali\'ye gelip biat etmesini istedi. Hz. Ali önce kabul etmedi; "Beni bırakın, başkasını arayın" dediği Şii kaynaklardaki hutbelerde geçer. Israr üzerine Mescid-i Nebevî\'de biat alındı. Talha ile Zübeyr\'in biatının gönüllü olup olmadığı tartışmalıdır.' },
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
      title: { tr: 'Hz. Hasan ve Hz. Hüseyin Halife Osman\'ın kapısında mıydı?' },
      sunni: { tr: 'Bazı Sünnî kaynaklar bu rivayeti aktarır; Hz. Hasan\'ın yaralandığı da söylenir. Hz. Ali\'nin isyancılar üzerinde denetimi olmadığı belirtilir.' },
      shia: { tr: 'Beladurî\'ye dayanan rivayet aktarılır, ancak bazı Şiî âlimler zinciri yüzünden zayıf bulur. Hz. Ali\'nin kuşatmayı desteklemediği, ama Halife Osman\'a da yardım etmediği iddiası farklı tartışılır.' },
    },
    {
      title: { tr: 'Hz. Ali\'nin tutumu nasıl değerlendirilir?' },
      sunni: { tr: 'Hz. Ali, Halife Osman\'ı korumaya çalışmış ve fitneyi önlemek istemiştir; katillerin yargılanması ise sonradan tartışma konusu olmuştur.' },
      shia: { tr: 'Hz. Ali, şikâyetleri haklı bulmuş, ama kanın dökülmesini onaylamamış, Nehcü\'l-Belâğa\'da hükmü Allah\'a bırakmıştır.' },
    },
  ],
  questions: [
    { tr: 'Hz. Ali, halkın şikâyetlerini Halife Osman\'a iletti ve heyetle de görüştü. Hem uyaran hem de dönüşü sağlayan biri olması, onun tutumu hakkında ne söyler sizce?' },
    { tr: 'Halife Osman "Peygamber benden bir söz aldı, ona sabrediyorum" dedi. Bu söz, kuşatma günlerinde onun tavrını nasıl açıklar sizce?' },
    { tr: 'Hz. Ali, bir hutbesinde ne emir verdiğini ne de engellediğini söyleyip hükmü Allah\'a bırakıyor. Bu iki şıkkı birlikte anması ne gösterir sizce?' },
    { tr: 'Hz. Hasan ve Hz. Hüseyin\'in Halife Osman\'ın evinde olduğu rivayeti bazı âlimlerce zayıf sayılıyor. Böyle tartışmalı bir rivayeti nasıl okumalıyız sizce?' },
    { tr: 'Hz. Ali önce biat teklifini kabul etmedi. Böyle bir dönemde yönetimi üstlenmenin sorumluluğu sizce ne kadar ağırdı?' },
  ],
  summary: { tr: 'Halife Osman\'ın halifeliğinin ikinci yarısındaki şikâyetler Medine kuşatmasına ve 35 H\'de şehadetine yol açtı; Hz. Ali arabuluculuk yaptı, olaydan sonra ısrarla gelen biat çağrısını önce geri çevirdi, sonra kabul etti.' },
};

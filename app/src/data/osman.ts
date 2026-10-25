import type { HistEvent } from '../types';

// Kaynak: research/04-cemel-siffin-nehrevan.md + oturum içi web aramaları. status 'verified' = metin/numara okunup doğrulandı; 'check' = yayın öncesi birincil kaynaktan kontrol edilmeli.
export const osman: HistEvent = {
  id: 'osman',
  date: { tr: 'Yaklaşık 30-35 H (650-656); şehadet: Zilhicce 35 H (Haziran 656)', en: 'c. 30-35 AH (650-656); martyrdom: Dhu al-Hijjah 35 AH (June 656)' },
  title: { tr: 'Osman Dönemi, Medine Kuşatması ve Hz. Ali', en: 'The Era of Uthman, the Siege of Medina and Imam Ali' },
  hook: { tr: 'Şikâyetler büyürken Medine\'de arabuluculuk yapan, sonra da biat istenen kişi Hz. Ali (a.s.) idi.', en: 'The man who mediated in Medina as grievances grew, and was then asked for allegiance.' },
  scenes: [
    {
      text: { tr: 'Osman\'ın ilk yılları sakin geçti. İkinci yarıda valilikler ve mal dağıtımı şikâyet oldu. Yakınlarının, özellikle Emevî ailesinden kişilerin görevlere getirilmesi eleştirildi. Onun faziletleri de hadislerde anılır; Hz. Peygamber\'in (s.a.v.) ona verdiği bir söz, kuşatma günü kendisi tarafından hatırlatılmıştır.' },
      art: { bg: 'city', props: ['palms'], actors: [{ kind: 'crowd', x: 34, scale: 7 }, { kind: 'man', x: 66, label: { tr: 'Osman' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Mısır, Kûfe ve Basra\'dan heyetler valilerinden şikâyetle geldi. Şiî anlatımda şikâyetlerin özü Emevî atamaları ve beytülmalin kullanımıdır. İsyancıların niyeti ve taleplerin ölçüsü ayrıca tartışılır. Medine, bu gerginliği yakından izliyordu.' },
      art: { bg: 'caravan', props: ['camels'], actors: [{ kind: 'crowd', x: 40, scale: 9 }, { kind: 'man', x: 76 }] },
      by: 'both',
    },
    {
      text: { tr: 'Hz. Ali (a.s.) Osman\'la konuşup onu uyardı. Halkın şikâyetlerini ilettiği, tutumunu değiştirmesini istediği anlatılır. Mısırlı heyet yaklaşınca Osman\'ın isteğiyle Hz. Ali, Muhammed b. Mesleme ile birlikte onlarla görüştü; şikâyetlerin giderileceği sözüyle geri dönmelerini sağladığı aktarılır. Hem hakkı söyleyen hem de kanı önlemeye çalışan oydu.' },
      art: { bg: 'interior', actors: [{ kind: 'ali', x: 38, label: { tr: 'Hz. Ali' } }, { kind: 'man', x: 70, label: { tr: 'Osman' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Şiî kaynaklara göre anlaşma sonradan bozuldu. Hz. Ali, Osman\'a Mervan\'ın onu zora sokacağını söyleyip ondan uzak durmasını öğütledi. Bazı anlatılarda bozulmanın nedeni bir mektuptur; mektubu kimin yazdığı tartışmalıdır. Rivayet, uyarıyı Hz. Ali\'ye bağlar.' },
      art: { bg: 'interior', props: ['scroll'], actors: [{ kind: 'ali', x: 36, label: { tr: 'Hz. Ali' } }, { kind: 'man', x: 64, label: { tr: 'Osman' } }, { kind: 'man', x: 84, label: { tr: 'Mervan' } }] },
      by: 'shia',
    },
    {
      text: { tr: 'Medine kuşatıldı. Osman evine çekildi; su ve yiyecek girişi güçleşti. Sünnî kaynaklar onun «Resulullah benden bir söz aldı, ona sabrediyorum» dediğini aktarır. Söz Tirmizî 3711\'dedir ve hasen sahih sayılmıştır.' },
      art: { bg: 'night', props: ['stars', 'moon'], actors: [{ kind: 'crowd', x: 30, scale: 8 }, { kind: 'man', x: 74, label: { tr: 'Osman' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Şiî kaynaklara göre Hz. Ali, kuşatma sırasında Osman\'a su ulaştırmaya çalıştı. Belâzurî\'ye dayanan bir rivayet, oğulları Hz. Hasan ile Hz. Hüseyin\'i (a.s.) evi korumaları için gönderdiğini anlatır. Bazı Şiî âlimler bu rivayeti zayıf bulur; Hz. Hasan\'ın yaralandığını söyleyenler de vardır. Kanı onaylamadığı, kaynakların ortak çizgisidir.' },
      art: { bg: 'city', actors: [{ kind: 'hasan', x: 32, label: { tr: 'Hz. Hasan' } }, { kind: 'husayn', x: 48, label: { tr: 'Hz. Hüseyin' } }, { kind: 'ali', x: 68, label: { tr: 'Hz. Ali' } }, { kind: 'man', x: 86, label: { tr: 'Osman' } }] },
      by: 'shia',
    },
    {
      text: { tr: 'Osman 35 H Zilhicce\'de şehit edildi. Ayrıntılar kaynaklarda ayrılır; bu anlatım oraya girmez. Nehcü\'l-Belâğa\'da Hz. Ali durumu şöyle özetler: emir verseydi katil, engelleseydi yardımcı sayılırdı. Son hükmü Allah\'a bırakır. Hutbe numarası ikincil kaynakta görülmüştür, birincil nüshadan ayrıca kontrol edilmelidir.' },
      art: { bg: 'dawn', actors: [{ kind: 'crowd', x: 34, scale: 7 }, { kind: 'ali', x: 74, label: { tr: 'Hz. Ali' } }] },
      by: 'shia',
    },
    {
      text: { tr: 'Medine bir süre yönetimsiz kaldı. Önde gelenler ve halk Hz. Ali\'ye gelip biat istedi. O önce kabul etmedi; «Beni bırakın, başkasını arayın» dediği Şiî kaynaklardaki hutbelerde geçer. Israr üzerine Mescid-i Nebevî\'de biat alındı. Talha ile Zübeyr\'in biatının gönüllü olup olmadığı tartışmalıdır. Hilafeti isteyen değil, istenen oydu.' },
      art: { bg: 'city', props: ['minbar'], actors: [{ kind: 'crowd', x: 32, scale: 9 }, { kind: 'man', x: 56, label: { tr: 'Talha' } }, { kind: 'ali', x: 78, label: { tr: 'Hz. Ali' } }] },
      by: 'both',
    },
  ],
  sunni: [
    { book: 'Tirmizî, el-Câmi\'', ref: 'No. 3711 (Menâkıb)', says: { tr: 'Osman kuşatma gününde: "Resulullah benden bir söz aldı, ona sabrediyorum."' }, grade: { tr: 'Tirmizî: hasen sahih; Albânî ve Ali Za\'i: sahih (zincirde Süfyan b. Vekî\' zayıf, destekleyici rivayet var)' }, url: 'https://hadithunlocked.com/tirmidhi:3711', status: 'verified' },
    { book: 'Buhârî, Sahih', ref: 'Osman\'ın faziletleri ve Rûme kuyusu (numara kontrol edilecek)', says: { tr: 'Osman\'a, başına gelecek bir belâya karşılık cennet müjdesi verilir.' }, status: 'check' },
    { book: 'Taberî, Târîh (SUNY çevirisi c.15)', ref: 'Osman dönemi, 35. yıl olayları (sayfa kontrol edilecek)', says: { tr: 'Heyetler, kuşatma ve şehadet ayrıntılı anlatılır.' }, url: 'https://redshelf.com/book/1750815', status: 'check' },
    { book: 'İbn Kesîr, el-Bidâye ve\'n-Nihâye', ref: 'c.7, Osman\'ın öldürülmesi (sayfa kontrol edilecek)', says: { tr: 'Hz. Hasan\'ın yaralanması ve Hz. Ali\'nin tutumu bu anlatım içinde yer alır.' }, status: 'check' },
    { book: 'İbn Sa\'d, Tabakât; İbn Esîr, el-Kâmil', ref: 'Osman bölümü, 35. yıl (kontrol edilecek)', says: { tr: 'Osman\'ın halifeliği, heyetler ve kuşatma.' }, status: 'check' },
    { book: 'Belâzurî, Ensâbü\'l-Eşrâf', ref: 'Osman\'ın kuşatması (WikiShia dipnotundaki sayfa bu çalışmada doğrulanmadı)', says: { tr: 'Hz. Ali\'nin Hz. Hasan ve Hz. Hüseyin\'i Osman\'ın evini korumakla görevlendirdiği rivayeti.' }, url: 'https://en.wikishia.net/view/Special:MobileDiff/12298', status: 'check' },
  ],
  shia: [
    { book: 'Nehcü\'l-Belâğa', ref: 'Hutbe 30 (Osman\'ın öldürülmesi hakkında)', says: { tr: 'Hz. Ali: emir verseydim katil, engellemiş olsaydım yardımcı olurdum; hüküm Allah\'ındır. Numara ikincil kaynakta görüldü, metin birincil nüshadan kontrol edilmeli.' }, url: 'https://cois.uokerbala.edu.iq/wp/en/?p=6898', status: 'check' },
    { book: 'Nehcü\'l-Belâğa', ref: 'Hutbe 3 (Şıkşıkıyye) ve biat ısrarına dair hutbe (Hutbe 92 olarak anılır; numara kontrol edilecek)', says: { tr: 'Hz. Ali\'nin hilafet ve biat hakkındaki sözleri.' }, url: 'https://en.wikipedia.org/wiki/Shaqshaqiya_sermon', status: 'check' },
    { book: 'Şeyh Müfid, el-Cemel', ref: 'Osman\'a karşı isyan ve Hz. Ali\'nin tutumu (sayfa kontrol edilecek)', says: { tr: 'Cemel öncesi olayların Şiî anlatımı.' }, status: 'check' },
    { book: 'İbn Ebi\'l-Hadîd, Şerhu Nehci\'l-Belâğa', ref: 'Hutbe 30 şerhi (cilt/sayfa kontrol edilecek)', says: { tr: 'Osman\'ın öldürülmesine dair rivayetleri aktarır.' }, status: 'check' },
    { book: 'Nasr b. Müzahim, Vak\'atü Sıffîn', ref: 'Baştaki yazışmalar (sayfa kontrol edilecek)', says: { tr: 'Osman\'ın kanı meselesi ve Hz. Ali ile Muaviye yazışmaları.' }, status: 'check' },
    { book: 'WikiShia, Hz. Hasan ve Hz. Hüseyin\'in Osman\'ı koruması rivayeti', ref: 'Seyyid Ca\'fer Murtazâ ve Allâme Emînî\'nin eleştirisi (ikincil)', says: { tr: 'Rivayeti zincir sorunları nedeniyle zayıf bulan görüşler aktarılır.' }, url: 'https://en.wikishia.net/view/Special:MobileDiff/12298', status: 'check' },
  ],
  disputes: [
    {
      title: { tr: 'Hz. Hasan ve Hz. Hüseyin Osman\'ın kapısında mıydı?' },
      sunni: { tr: 'Bazı Sünnî kaynaklar bu rivayeti aktarır; Hz. Hasan\'ın yaralandığı da söylenir. Hz. Ali\'nin isyancılar üzerinde denetimi olmadığı belirtilir.' },
      shia: { tr: 'Belâzurî\'ye dayanan rivayet aktarılır, ancak bazı Şiî âlimler zinciri yüzünden zayıf bulur. Hz. Ali\'nin kuşatmayı desteklemediği, ama Osman\'a da yardım etmediği iddiası farklı tartışılır.' },
    },
    {
      title: { tr: 'Hz. Ali\'nin tutumu nasıl değerlendirilir?' },
      sunni: { tr: 'Hz. Ali, Osman\'ı korumaya çalışmış ve fitneyi önlemek istemiştir; katillerin yargılanması ise sonradan tartışma konusu olmuştur.' },
      shia: { tr: 'Hz. Ali, şikâyetleri haklı bulmuş, ama kanın dökülmesini onaylamamış, Nehcü\'l-Belâğa\'da hükmü Allah\'a bırakmıştır.' },
    },
  ],
  questions: [
    { tr: 'Hz. Ali, halkın şikâyetlerini Osman\'a iletti ve heyetle de görüştü. Hem uyaran hem de dönüşü sağlayan biri olması, onun tutumu hakkında ne söyler sizce?' },
    { tr: 'Osman "Peygamber benden bir söz aldı, ona sabrediyorum" dedi. Bu söz, kuşatma günlerinde onun tavrını nasıl açıklar sizce?' },
    { tr: 'Hz. Ali, bir hutbesinde ne emir verdiğini ne de engellediğini söyleyip hükmü Allah\'a bırakıyor. Bu iki şıkkı birlikte anması ne gösterir sizce?' },
    { tr: 'Hz. Hasan ve Hz. Hüseyin\'in Osman\'ın evinde olduğu rivayeti bazı âlimlerce zayıf sayılıyor. Böyle tartışmalı bir rivayeti nasıl okumalıyız sizce?' },
    { tr: 'Hz. Ali önce biat teklifini kabul etmedi. Böyle bir dönemde yönetimi üstlenmenin sorumluluğu sizce ne kadar ağırdı?' },
  ],
  summary: { tr: 'Osman\'ın halifeliğinin ikinci yarısındaki şikâyetler Medine kuşatmasına ve 35 H\'de şehadetine yol açtı; Hz. Ali arabuluculuk yaptı, olaydan sonra ısrarla gelen biat çağrısını önce geri çevirdi, sonra kabul etti.' },
};

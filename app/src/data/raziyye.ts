import type { HistEvent } from '../types';

// Kaynak: research/01-gadir-raziyye-usame.md (Bölüm 1 sahne 8-10, 2.4, 3). status araştırmadaki doğrulama durumunu yansıtır.
export const raziyye: HistEvent = {
  id: 'raziyye',
  date: { tr: 'Safer-Rebiülevvel 11 H (632)', en: 'Safar-Rabi al-Awwal 11 AH (632)' },
  title: { tr: 'Kırtas Olayı (Raziyye Perşembesi) ve Peygamber\'in vefatı', en: 'The Thursday of Calamity and the Prophet\'s passing' },
  hook: { tr: 'Peygamber "size bir yazı yazayım ki sapmayasınız" dedi. Kalem, Ehl-i Beyt\'in hakkı yazılmadan durdu.', en: 'The Prophet said, "Let me write for you so that you do not go astray." Why was it never written?' },
  scenes: [
    {
      text: { tr: 'Peygamber\'in veda günleriydi. Genç Usame b. Zeyd\'i bir ordunun başına getirdi. Ordu, Medine yakınındaki Cürf\'te toplandı. Yol, Şam yönündeki Belka\'ya gidiyordu. Komutan gençti. Babası Zeyd, daha önce şehit düşmüştü. Bazı kişiler, bu kadar gencin kendilerine emir olmasını içlerine sindiremedi. İtiraz, açık söylendi. Veda günlerinin ilk anlaşmazlığı burada çıktı. Emir duruyordu. Yürüyüş gecikti. Seven, itirazı bir yaş meselesi diye küçültmez. Peygamber\'in emrinin, daha hayattayken nasıl tartıldığını görür.' },
      art: { bg: 'dune-day', props: ['sun', 'tents', 'flags'], actors: [{ kind: 'crowd', x: 30, scale: 8 }, { kind: 'man', x: 62, label: { tr: 'Usame b. Zeyd' } }, { kind: 'prophet', x: 82, label: { tr: 'Hz. Peygamber' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Cürf\'te itiraz büyüdü. Çadırlar kuruldu. Ordu yerinden kıpırdamadı. Hastalık Medine\'de ağırlaşıyordu. Peygamber yine de minbere çıktı. İtiraz edenlere cevap verdi. Usame\'nin emri duruyordu. Gençlik, emri düşürmüyordu. Buna rağmen ordu yola çıkmadı. Şehir, veda emrini beklerken yerinde kaldı. Seven, gecikmeyi bir hazırlık diye okumaz. Peygamber\'in sözünün, hastalığın gölgesinde nasıl askıya alındığını görür.' },
      art: { bg: 'city', props: ['minbar', 'flags'], actors: [{ kind: 'crowd', x: 30, scale: 7 }, { kind: 'prophet', x: 68, pose: 'raise', label: { tr: 'Hz. Peygamber' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Hastalık iyice ağırlaşınca Peygamber, Medine\'deki odasında bulunanlara döndü. "Gelin, size bir yazı yazayım ki benden sonra asla sapmayasınız" dedi. Kalem istendi. Kâğıt istendi. Amaç, kendisinden sonra ümmetin yolunu şaşırmamasıydı. Peygamber, kâğıda ne yazacağını o anda açmadı. Sevenler, Gadir\'de **Hz. Ali** için ilan edilen yerin de bu kâğıda gireceğini anlar. Kalem, bu veda için istenmişti. Oda, bir hastanın odasıydı. Aynı anda bir emanetin son kapısıydı.' },
      art: { bg: 'interior', props: ['scroll'], actors: [{ kind: 'prophet', x: 32, pose: 'sit', label: { tr: 'Hz. Peygamber' } }, { kind: 'crowd', x: 68, scale: 4 }] },
      by: 'both',
    },
    {
      text: { tr: 'Odada anlaşmazlık çıktı. Ömer\'e atfedilen söz şuydu: "Peygamber\'e ağrı galip geldi. Allah\'ın Kitabı bize yeter." Kimisi kalemin yürümesini istedi. Kimisi bu sözün tutulmasını istedi. Sesler yükseldi. Hasta, yazı ile kendisi arasında bir gürültü duydu. Kalem, iki tarafın arasında durdu. Kitap yeter demek, o an kâğıdı kapattı. Seven, tartışmayı bir fıkıh ayrılığı diye okumaz. Peygamber\'in son yazısının nasıl kesildiğini görür.' },
      art: { bg: 'interior', actors: [{ kind: 'prophet', x: 26, pose: 'sit', label: { tr: 'Hz. Peygamber' } }, { kind: 'man', x: 56, pose: 'raise', label: { tr: 'Ömer' } }, { kind: 'crowd', x: 80, scale: 3 }] },
      by: 'both',
    },
    {
      text: { tr: 'Gürültü artınca Peygamber "Kalkın, gidin" dedi. Yazı yazılmadı. Kâğıt boş kaldı. İbn Abbas bu günü anarken ağlar. Asıl musibetin, ihtilafın ve gürültünün Peygamber ile o yazı arasına girmesi olduğunu söyler. Engel o odada kondu. Sakife, birkaç gün sonra **Hz. Ali**\'nin hakkını bir kenara koyacaktı. Seven, boş kâğıdı bir ayrıntı diye geçmez. Şehrin, o boşluğa nasıl yürüdüğünü görür. Yazılmayan cümle, söylenmiş ilanın üzerine bir sis gibi indi.' },
      art: { bg: 'interior', props: ['scroll'], actors: [{ kind: 'prophet', x: 36, pose: 'sit', label: { tr: 'Hz. Peygamber' } }, { kind: 'man', x: 70, label: { tr: 'İbn Abbas' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Aynı rivayet, yazı kesildikten sonra üç vasiyet aktarır. İlki, müşriklerin Arap Yarımadası\'ndan çıkarılmasıdır. İkincisi, gelen heyetlerin ağırlanmasıdır. Râvi üçüncüsünü unuttuğunu söyler. Üçüncü cümle, hiç duyulmaz. Peygamber\'i sevenler, o eksikle kalır. Unutulanın ne olduğu, rivayette yazılmaz. Seven, bu boşluğu bir hafıza zayıflığı diye kapatmaz. Odaya giren gürültünün, bir vasiyeti nasıl yuttuğunu görür. Yürek, duyulmayan cümlenin acısını taşır.' },
      art: { bg: 'night', props: ['moon', 'stars'], actors: [{ kind: 'prophet', x: 50, pose: 'sit', label: { tr: 'Hz. Peygamber' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Peygamber, Rebiülevvel 11\'de, Medine\'de, bir Pazartesi günü vefat etti. Oda sessizdi. Başucunda **Hz. Ali** vardı. Gadir\'de eli kaldırılan kişi, o saatte Peygamber\'in gözünü kapattı. Yıkama ona kalacaktı. Vedayı, ilan edilen önder tuttu. Şehir henüz bunu bilmiyordu. Seven, vefatı bir tarih diye okumaz. Emaneti kimin kollarında bıraktığını görür. O kollar, biraz sonra cenazenin başında yalnız kalacaktı.' },
      art: { bg: 'dawn', props: ['palms'], actors: [{ kind: 'prophet', x: 30, label: { tr: 'Hz. Peygamber' } }, { kind: 'woman', x: 66, label: { tr: 'Aişe' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Vefat haberi Medine\'ye düşünce şehir karıştı. Ömer önce ölümü kabul etmedi. Ebu Bekir durumu halka duyurdu. **Hz. Ali** ve Haşimoğulları cenazenin başında kaldı. Yıkama ve defin hazırlığı onlardaydı. Bir yanda ağlayanlar vardı. Bir yanda Sakife\'ye gidenler vardı. Cenaze henüz yerdeydi. Şehir ikiye ayrıldı. Seven, bu ayrılığı bir telaş diye okumaz. Biri emaneti tutarken öbürünün gölgeliğe neden koştuğunu sorar. Cevap, sonraki sahnededir.' },
      art: { bg: 'city', props: ['palms'], actors: [{ kind: 'crowd', x: 24, scale: 6 }, { kind: 'man', x: 48, label: { tr: 'Ömer' } }, { kind: 'man', x: 66, label: { tr: 'Ebu Bekir' } }, { kind: 'ali', x: 84, label: { tr: 'Hz. Ali' } }] },
      by: 'both',
    },
  ],
  sunni: [
    { book: 'Buhari, Sahih', ref: 'No. 114 (İlim, bab 39)', says: { tr: 'Peygamber yazı yazdırmak ister; "ağrı galip geldi, Allah\'ın Kitabı bize yeter" sözü, gürültü ve İbn Abbas\'ın "musibet" cümlesi.' }, grade: { tr: 'Sahih' }, url: 'https://hadithunlocked.com/bukhari:114', status: 'verified' },
    { book: 'Buhari, Sahih', ref: 'No. 3053 (Cihad)', says: { tr: 'Aynı olayın rivayeti; İbn Abbas ağlar.' }, grade: { tr: 'Müttefekun aleyh' }, url: 'https://hadithunlocked.com/bukhari:3053', status: 'verified' },
    { book: 'Buhari, Sahih', ref: 'No. 4431 (Meğâzî)', says: { tr: 'Üç vasiyet: müşrikleri çıkarın, heyetleri ağırlayın; üçüncüsünü râvi unuttuğunu söyler.' }, grade: { tr: 'Sahih' }, url: 'https://hadithunlocked.com/bukhari:4431', status: 'verified' },
    { book: 'Müslim, Sahih', ref: 'No. 1637a (Vasiyyet)', says: { tr: '"Gelin size yazı yazayım ki sapmayasınız"; ortamdaki anlaşmazlık ve Peygamber\'in "Kalkın" demesi.' }, grade: { tr: 'Sahih' }, url: 'https://hadithunlocked.com/muslim:1637', status: 'verified' },
    { book: 'Taberî, Târîh; Vâkıdî, el-Meğâzî; Yakûbî, Târîh', ref: 'Taberî c.3 s.223; Vâkıdî c.3 s.1121-1125; Yakûbî c.2 s.127', says: { tr: 'Usame ordusunun hazırlığı, itirazlar ve ordunun Ebu Bekir döneminde sevk edilmesi. (Atıflar WikiShia aktarımıdır; birincil metinler açılmadı.)' }, url: 'https://en.wikishia.net/view/Usama_b._Zayd', status: 'check' },
    { book: 'İbn Sa\'d, Tabakât', ref: 'Usame ordusu hazırlığı (sayfa kontrol edilecek)', says: { tr: 'Ordunun hazırlığı ve itirazlar.' }, status: 'check' },
    { book: 'Buhari, Sahih', ref: 'Fedâilü\'l-Ashâb, yaklaşık 3667-3668 (kontrol edilecek)', says: { tr: 'Peygamber\'in vefatında Ömer\'in ölümü ilk anda kabul etmemesi ve Ebu Bekir\'in durumu duyurması.' }, grade: { tr: 'Sahih' }, status: 'check' },
  ],
  shia: [
    { book: 'Şirvanî, Ceyşü Üsame risalesi', ref: 'Âğâ Büzürg, ez-Zerîa c.5 s.304 aktarımı', says: { tr: 'Usame ordusu konusunun kelam açısından ele alındığı Şii risale. Karşı yorum için Cahiz, el-Osmâniyye s.146-147 anılır.' }, status: 'check' },
    { book: 'Şehristânî; İbn Ebi\'l-Hadîd (Şii kaynaklarda anılan)', ref: 'Usame ordusundan geri kalana lanet sözü', says: { tr: 'Peygamber\'in orduya katılmayanlara lanet ettiği rivayeti Şii kaynaklarda geçer; Sünni sahih bir zincirle teyit edilmemiştir. Kesin ifade olarak verilmemelidir.' }, status: 'check' },
  ],
  disputes: [
    {
      title: { tr: 'Yazılacak şey neydi?' },
      sunni: { tr: 'Yazının içeriğini söyleyen bir rivayet yoktur; anlaşmazlık yüzünden yazı yazılmadı. Sünni okumada Ömer, hasta Peygamber\'i yormamak istemiş ve Kur\'an\'ın yeterliliğini hatırlatmıştır.' },
      shia: { tr: 'Yazının içeriğini söyleyen bir rivayet yoktur; anlaşmazlık yüzünden yazı yazılmadı. Şii okumada bu istek, Hz. Ali\'nin yerini hatırlatan bir veda olarak anlaşılır; bu bir çıkarımdır.' },
    },
    {
      title: { tr: 'Usame ordusu' },
      sunni: { tr: 'Peygamber genç Usame\'yi komutan yaptı; itiraz çıktı, hareket gecikti. Sünni okumada bu, Mute sonrasında yapılan bir hazırlıktır ve Ebu Bekir orduyu sonra yola çıkarmıştır.' },
      shia: { tr: 'Peygamber genç Usame\'yi komutan yaptı; itiraz çıktı, hareket gecikti. Şii okumada ordu, önde gelen sahabeyi Medine dışına almakla anılır; lanet rivayeti yalnız Şii kitaplarda geçer ve sahih bir Sünni zincirle teyit edilmemiştir.' },
    },
  ],
  questions: [
    { tr: 'Peygamber "sapmayasınız diye" bir yazı istemişti. Onun ümmetini koruma arzusu, Ehl-i Beyt sevgisiyle size nasıl bağlanır?' },
    { tr: 'İbn Abbas bu günü anarken ağlardı. Peygamber\'i seven bir kalp, bu gözyaşında neyi fark eder sizce?' },
    { tr: 'Gadir\'de Kitap ile Ehl-i Beyt birlikte emanet edilmişti. Son gündeki yazı isteğini bu emanete yakın okumak, sevginizi nasıl derinleştirir?' },
    { tr: 'Yazının içeriği rivayetlerde yoktur. Peygamber\'in "sapmayasınız" sözünü sükûnetle ve Ehl-i Beyt sevgisiyle okumak size ne açar?' },
  ],
  summary: { tr: 'Buhari ve Müslim, Peygamber\'in "size bir yazı yazayım ki sapmayasınız" dediğini ve odadaki anlaşmazlık yüzünden yazının yazılmadığını aktarır (Buhari, Sahih, no. 114; Müslim, Sahih, no. 1637a). Şii okumada bu veda isteği, Ehl-i Beyt\'e ve Hz. Ali\'nin yerine duyulan sevgiyle anılır.' },
};

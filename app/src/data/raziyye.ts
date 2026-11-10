import type { HistEvent } from '../types';

// Kaynak: research/01-gadir-raziyye-usame.md (Bölüm 1 sahne 8-10, 2.4, 3). status araştırmadaki doğrulama durumunu yansıtır.
export const raziyye: HistEvent = {
  id: 'raziyye',
  date: { tr: 'Safer-Rebiülevvel 11 H (632)', en: 'Safar-Rabi al-Awwal 11 AH (632)' },
  title: { tr: 'Kırtas Olayı (Raziyye Perşembesi) ve Peygamber\'in vefatı', en: 'The Thursday of Calamity and the Prophet\'s passing' },
  hook: { tr: 'Peygamber "size bir yazı yazayım ki sapmayasınız" dedi. Kalem, Ehl-i Beyt\'in hakkı yazılmadan durdu.', en: 'The Prophet said, "Let me write for you so that you do not go astray." Why was it never written?' },
  scenes: [
    {
      text: { tr: 'Peygamber\'in hayatının son haftalarıydı. **Hz. Peygamber**, Şam yönündeki Belka bölgesine gönderilmek üzere bir ordu hazırladı ve başına genç **Usame b. Zeyd**\'i getirdi. Usame çok gençti. Babası Zeyd b. Harise daha önce bir seferde şehit düşmüştü. Ordu, Medine\'nin hemen dışındaki Cürf\'te toplanmaya başladı. Ancak bazı kişiler, bu kadar genç birinin kendilerine komutan olmasını kabullenemedi ve itirazlarını açıkça dile getirdiler. Peygamber\'in hayatının son günlerindeki ilk anlaşmazlık böyle başladı.' },
      art: { bg: 'dune-day', props: ['sun', 'tents', 'flags'], actors: [{ kind: 'crowd', x: 30, scale: 8 }, { kind: 'man', x: 62, label: { tr: 'Usame b. Zeyd' } }, { kind: 'prophet', x: 82, label: { tr: 'Hz. Peygamber' } }] },
      by: 'both',
    },
    {
      text: { tr: 'İtirazlar Peygamber\'in kulağına kadar geldi. O sırada hastalığı ağırlaşmaya başlamıştı. Buna rağmen mescide gelip minbere çıktı. İtiraz edenlere seslenerek Usame\'nin komutanlığa layık olduğunu söyledi ve ordunun yola çıkmasını emretti. Ama Cürf\'teki ordugâhta çadırlar kurulu kaldı. Askerler bir türlü yola çıkmadı. Medine\'den gelen hastalık haberleri, ordunun ayağını bağlayan bir bahane oldu. Peygamber\'in emri yerine getirilmeden günler geçti.' },
      art: { bg: 'city', props: ['minbar', 'flags'], actors: [{ kind: 'crowd', x: 30, scale: 7 }, { kind: 'prophet', x: 68, pose: 'raise', label: { tr: 'Hz. Peygamber' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Hastalığın en ağır günlerinden birinde Peygamber, Medine\'deki odasında yanında bulunanlara döndü. Güçlükle konuşarak şöyle dedi: "Bana bir kalem ve kâğıt getirin. Size bir yazı yazayım ki benden sonra asla yolunuzu şaşırmayasınız." Bu istek Buhari\'de ve Müslim\'de aktarılır. Peygamber, kendisinden sonra ümmetin sapmaması için son bir vasiyet bırakmak istiyordu. Ne yazacağını o anda söylemedi. Şiiler, bu yazının Gadir\'de **Hz. Ali** için yapılan ilanı kâğıda geçirecek olduğunu düşünür. Çünkü Peygamber Gadir\'de de Kitap ile Ehl-i Beyt\'e sarılanların sapmayacağını söylemişti.' },
      art: { bg: 'interior', props: ['scroll'], actors: [{ kind: 'prophet', x: 32, pose: 'sit', label: { tr: 'Hz. Peygamber' } }, { kind: 'crowd', x: 68, scale: 4 }] },
      by: 'both',
    },
    {
      text: { tr: 'Kalem ve kâğıt getirilmeden odada bir anlaşmazlık çıktı. Kaynaklarda Ömer\'e atfedilen söz şudur: "Peygamber\'e hastalığın ağrısı galip geldi. Allah\'ın Kitabı bize yeter." Odadakilerin bir kısmı Peygamber\'in istediğinin getirilmesini söyledi. Diğerleri ise Ömer\'in sözünü destekledi. Sesler giderek yükseldi. Hasta yatağında yatan Peygamber, başucunda bir tartışmanın büyüdüğünü duyuyordu. Onun son isteği, odadakilerin çekişmesinin ortasında kaldı. Kâğıt, Peygamber\'in eline hiç ulaşmadı.' },
      art: { bg: 'interior', actors: [{ kind: 'prophet', x: 26, pose: 'sit', label: { tr: 'Hz. Peygamber' } }, { kind: 'man', x: 56, pose: 'raise', label: { tr: 'Ömer' } }, { kind: 'crowd', x: 80, scale: 3 }] },
      by: 'both',
    },
    {
      text: { tr: 'Tartışma büyüyünce Peygamber, "Kalkın, yanımdan gidin" dedi. Yazı hiç yazılmadı. Yıllar sonra **İbn Abbas** bu günü anlatırken gözyaşlarını tutamazdı. Şöyle derdi: "Asıl musibet, gürültünün ve anlaşmazlığın Resulullah ile o yazı arasına girmesidir." Bu söz de Buhari\'de geçer. Şiilere göre o odada yazılmasına engel olunan vasiyet, birkaç gün sonra Sakife\'de Hz. Ali\'nin hakkının bir kenara konmasının yolunu açtı.' },
      art: { bg: 'interior', props: ['scroll'], actors: [{ kind: 'prophet', x: 36, pose: 'sit', label: { tr: 'Hz. Peygamber' } }, { kind: 'man', x: 70, label: { tr: 'İbn Abbas' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Aynı rivayet, yazı yazılamadıktan sonra Peygamber\'in sözlü olarak üç vasiyette bulunduğunu da aktarır. Birincisi, müşriklerin Arap Yarımadası\'ndan çıkarılmasıydı. İkincisi, Medine\'ye gelen elçi heyetlerinin kendisinin ağırladığı gibi ağırlanmasıydı. Râvi, üçüncü vasiyeti ise unuttuğunu söyler. Peygamber\'in son vasiyetlerinden biri, rivayeti aktaranın hafızasında kaybolmuştu. Unutulanın ne olduğu rivayette yazılmaz. Peygamber\'i sevenler o eksik cümlenin acısını hâlâ yüreklerinde taşır.' },
      art: { bg: 'night', props: ['moon', 'stars'], actors: [{ kind: 'prophet', x: 50, pose: 'sit', label: { tr: 'Hz. Peygamber' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Peygamber, hicretin 11. yılında, Rebiülevvel ayında, bir pazartesi günü Medine\'de vefat etti. Son anlarında başucunda **Hz. Ali** vardı. Gadir\'de elini kaldırdığı kişi, onun son nefesine şahit oldu ve mübarek gözlerini kapadı. Odaya derin bir sessizlik çöktü. Peygamber\'in bedenini yıkamak ve onu defnetmek Hz. Ali\'ye kalacaktı. Medine\'nin geri kalanı ise henüz olanlardan habersizdi.' },
      art: { bg: 'dawn', props: ['palms'], actors: [{ kind: 'prophet', x: 30, label: { tr: 'Hz. Peygamber' } }, { kind: 'woman', x: 66, label: { tr: 'Aişe' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Vefat haberi duyulunca Medine\'de büyük bir karışıklık oldu. Ömer ilk anda Peygamber\'in öldüğünü kabul etmedi. Ebu Bekir gelip halka Peygamber\'in vefat ettiğini duyurdu. **Hz. Ali** ve Hâşimoğulları ise cenazenin başından ayrılmadı. Peygamber\'in bedenini yıkamak ve defin hazırlıklarını yapmak onlara düşmüştü. Şehrin bir yanında insanlar gözyaşı dökerken, diğer yanında bir grup Sakife\'ye doğru yola çıkmıştı. Peygamber\'in bedeni henüz toprağa verilmemişken yönetimin kime geçeceği konuşulmaya başlanmıştı.' },
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

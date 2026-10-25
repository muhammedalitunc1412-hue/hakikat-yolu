import type { HistEvent } from '../types';

// Kaynak: research/01-gadir-raziyye-usame.md (Bölüm 1 sahne 8-10, 2.4, 3). status araştırmadaki doğrulama durumunu yansıtır.
export const raziyye: HistEvent = {
  id: 'raziyye',
  date: { tr: 'Safer-Rebiülevvel 11 H (632)', en: 'Safar-Rabi al-Awwal 11 AH (632)' },
  title: { tr: 'Kırtas Olayı (Raziyye Perşembesi) ve Peygamber\'in vefatı', en: 'The Thursday of Calamity and the Prophet\'s passing' },
  hook: { tr: 'Peygamber "size bir yazı yazayım ki sapmayasınız" dedi. Yazı neden yazılmadı?', en: 'The Prophet said, "Let me write for you so that you do not go astray." Why was it never written?' },
  scenes: [
    {
      text: { tr: 'Peygamber, yirmi yaşlarındaki Usame b. Zeyd\'i Şam yönündeki Belka\'ya gidecek ordunun komutanı atadı. Ordu Medine dışındaki Cürf\'te toplanmaya başladı.' },
      art: { bg: 'dune-day', props: ['sun', 'tents', 'flags'], actors: [{ kind: 'crowd', x: 30, scale: 8 }, { kind: 'man', x: 62, label: { tr: 'Usame b. Zeyd' } }, { kind: 'prophet', x: 82, label: { tr: 'Hz. Peygamber' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Genç komutana itirazlar yükseldi ve hareket gecikti. Hastalığı ağırlaşan Peygamber minbere çıkıp itiraz edenlere cevap verdi. Bu anlatıların kaynakları sonraki dönem tarih kitaplarıdır.' },
      art: { bg: 'city', props: ['minbar', 'flags'], actors: [{ kind: 'crowd', x: 30, scale: 7 }, { kind: 'prophet', x: 68, pose: 'raise', label: { tr: 'Hz. Peygamber' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Hastalığı iyice ağırlaşan Peygamber, odasında toplananlara döndü: "Gelin, size bir yazı yazayım ki benden sonra asla sapmayasınız."' },
      art: { bg: 'interior', props: ['scroll'], actors: [{ kind: 'prophet', x: 32, pose: 'sit', label: { tr: 'Hz. Peygamber' } }, { kind: 'crowd', x: 68, scale: 4 }] },
      by: 'both',
    },
    {
      text: { tr: 'Odada anlaşmazlık çıktı. Ömer\'e atfedilen söz şuydu: "Peygamber\'e ağrı galip geldi; Allah\'ın Kitabı bize yeter." Bazıları yazılmasını, bazıları bu sözü istedi.' },
      art: { bg: 'interior', actors: [{ kind: 'prophet', x: 26, pose: 'sit', label: { tr: 'Hz. Peygamber' } }, { kind: 'man', x: 56, pose: 'raise', label: { tr: 'Ömer' } }, { kind: 'crowd', x: 80, scale: 3 }] },
      by: 'both',
    },
    {
      text: { tr: 'Gürültü ve tartışma artınca Peygamber "Kalkın" dedi. Yazı yazılmadı. İbn Abbas bu günü anarken ağlar ve şöyle derdi: "Asıl musibet, ihtilaf ve gürültünün Peygamber ile o yazı arasına girmesidir."' },
      art: { bg: 'interior', props: ['scroll'], actors: [{ kind: 'prophet', x: 36, pose: 'sit', label: { tr: 'Hz. Peygamber' } }, { kind: 'man', x: 70, label: { tr: 'İbn Abbas' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Aynı rivayet Peygamber\'in üç vasiyetini aktarır: müşrikleri Arap Yarımadası\'ndan çıkarın, gelen heyetleri ağırlayın. Râvi üçüncüsünü unuttuğunu söyler.' },
      art: { bg: 'night', props: ['moon', 'stars'], actors: [{ kind: 'prophet', x: 50, pose: 'sit', label: { tr: 'Hz. Peygamber' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Peygamber Rebiülevvel 11 H\'de, bir Pazartesi günü Aişe\'nin odasında vefat etti. Ayın hangi günü olduğu rivayetlerde ihtilaflıdır.' },
      art: { bg: 'dawn', props: ['palms'], actors: [{ kind: 'prophet', x: 30, label: { tr: 'Hz. Peygamber' } }, { kind: 'woman', x: 66, label: { tr: 'Aişe' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Haber duyulunca Medine sarsıldı. Rivayete göre Ömer önce ölümü kabul etmedi, Ebu Bekir durumu halka duyurdu. Hz. Ali ve Haşimoğulları ise cenaze hazırlıklarına koyuldu.' },
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
      title: { tr: 'Peygamber ne yazdırmak istedi?' },
      sunni: { tr: 'Hiçbir rivayet yazılacak şeyin içeriğini söylemez. Ömer, hasta Peygamber\'e yük olmamak istedi ve Kur\'an\'ın yeterliliğini vurguladı; önemli bir tebliğ olsaydı Peygamber yazdırırdı.' },
      shia: { tr: 'Yazılacak şeyin Hz. Ali\'nin önderliğinin teyidi olduğu ve engellendiği yorumlanır. İçerik rivayetlerde yoktur; bu yorum delile değil çıkarıma dayanır.' },
    },
    {
      title: { tr: 'Usame ordusu' },
      sunni: { tr: 'Mute\'nin intikamı için olağan bir askeri hazırlıktır. Ebu Bekir Peygamber\'in emrini yerine getirip orduyu sevk etmiştir.' },
      shia: { tr: 'Ordu, önde gelen sahabeyi Medine\'den uzaklaştırma amacı taşıyordu ve bazıları emre uymadı. "Geri kalana lanet" rivayeti yalnız Şii kaynaklarda anılır, Sünnilerce teyit edilmemiştir.' },
    },
  ],
  questions: [
    { tr: 'Peygamber ölüm döşeğinde "sapmayasınız diye" bir yazı yazdırmak istedi. Sapmayı önleyecek bu yazının neden önemli olduğunu düşünmek gerekmez mi sizce?' },
    { tr: 'İbn Abbas bu günü anarken ağlıyor ve buna "musibet" diyordu. Bir sahabinin bu kadar derin üzüntü duymasına, yazılamayan şeyin önemi dışında ne sebep olabilir sizce?' },
    { tr: 'Peygamber haftalar önce Gadir\'de iki emaneti, Kitap ve Ehl-i Beyt\'i birlikte anmıştı. Yazılmak istenen belgenin bu konuyla ilgili olma ihtimali üzerine düşünmek mantıklı olmaz mı?' },
    { tr: 'Hiçbir rivayet yazının içeriğini söylemiyor. Bilmediğimiz bir şey hakkında hüküm vermek yerine, onun neden engellendiğini sormak daha dürüst bir yol olmaz mı?' },
  ],
  summary: { tr: 'Buhari ve Müslim, Peygamber\'in son günlerinde "size bir yazı yazayım ki sapmayasınız" dediğini, odadaki anlaşmazlık yüzünden yazının yazılmadığını aktarır; yazılacak şeyin ne olduğu iki gelenekte farklı yorumlanır.' },
};

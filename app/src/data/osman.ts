import type { HistEvent } from '../types';

// Kaynak: research/04-cemel-siffin-nehrevan.md + oturum içi web aramaları. status 'verified' = metin/numara okunup doğrulandı; 'check' = yayın öncesi birincil kaynaktan kontrol edilmeli.
export const osman: HistEvent = {
  id: 'osman',
  date: { tr: 'Yaklaşık 30-35 H (650-656); öldürülmesi: Zilhicce 35 H (Haziran 656)', en: 'c. 30-35 AH (650-656); killed: Dhu al-Hijjah 35 AH (June 656)' },
  title: { tr: 'Halife Osman Dönemi, Medine Kuşatması ve Hz. Ali', en: 'The Era of Uthman, the Siege of Medina and Hz. Ali' },
  hook: { tr: 'Şikâyetler büyürken Hz. Ali Medine\'de arabuluculuk yaptı. Ardından kendisine biat istendi.', en: 'The man who mediated in Medina as grievances grew, and was then asked for allegiance.' },
  scenes: [
    {
      text: { tr: 'Halife Osman\'ın Medine\'deki ilk yılları sakin geçti. Ancak halifeliğinin ikinci yarısında valilikler ve devlet malı büyük bir şikâyet konusu oldu. Önemli görevler birer birer **Ümeyyeoğulları**\'na, yani halifenin kendi akrabalarına verildi. Kûfe\'ye önce **Velîd b. Ukbe**, sonra **Saîd b. Âs** vali olarak gönderildi. Mısır\'a **Abdullah b. Sa\'d**, Basra\'ya **Abdullah b. Âmir** getirildi. Halifenin kâtipliğine **Mervân** oturdu. Ömer döneminde Şam\'a atanmış olan **Muaviye**\'nin yetki alanı ise Humus, Kınnesrîn ve Filistin\'i de içine alacak şekilde genişletildi. Halk, ümmetin ortak hazinesinden yakınlara ve valilere büyük bağışlar yapıldığını konuşuyordu. **Hz. Ali**, bu gidişin ümmete zarar verdiğini görüyor ve halifeyi açıkça eleştiriyordu.' },
      art: { bg: 'city', props: ['palms'], actors: [{ kind: 'crowd', x: 34, scale: 7 }, { kind: 'man', x: 66, label: { tr: 'Osman' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Şikâyetler zamanla bölgelerden Medine\'ye taşındı. Mısır\'dan, Kûfe\'den ve Basra\'dan heyetler yola çıkıp Peygamber\'in şehrine geldi. Valilerin baskısından, Emevi atamalarından ve beytülmal denilen ortak hazinenin keyfî kullanımından yakınıyorlardı. Medine sokakları bu heyetlerin öfkeli sesleriyle doldu. İnsanlar mescitte, çarşıda ve evlerinde olup biteni konuşuyordu. Şehirde bir gerginlik büyüyordu ve herkes bu işin nasıl sonuçlanacağını merak ediyordu. Bu kalabalığın ortasında hem halifenin hem de halkın güvendiği kişi **Hz. Ali**\'ydi.' },
      art: { bg: 'caravan', props: ['camels'], actors: [{ kind: 'crowd', x: 40, scale: 9 }, { kind: 'man', x: 76 }] },
      by: 'both',
    },
    {
      text: { tr: '**Hz. Ali**, Halife Osman\'ın yanına gidip ona halkın şikâyetlerini tek tek iletti ve tutumunu değiştirmesini istedi. Mısırlı heyet Medine\'ye yaklaştığında, Osman\'ın ricası üzerine Hz. Ali ve **Muhammed b. Mesleme** onlarla görüşmeye gitti. Uzun bir konuşmanın ardından şikâyetlerin giderileceğine dair söz verildi. Heyet bu söze güvenerek geri döndü. Hz. Ali\'nin amacı, Peygamber\'in şehrinde kan dökülmesini önlemekti. Bu yüzden iki tarafın arasında durdu ve hem halifeyi hem de halkı sakinleştirmeye çalıştı. Medine bir süreliğine rahat bir nefes aldı.' },
      art: { bg: 'interior', actors: [{ kind: 'ali', x: 38, label: { tr: 'Hz. Ali' } }, { kind: 'man', x: 70, label: { tr: 'Osman' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Ama bu anlaşma kısa sürede bozuldu. Hz. Ali, halifeyi daha önce **Mervân**\'a karşı uyarmış ve onun Osman\'ı zor durumda bırakacağını söylemişti. Mervân\'dan uzak durmasını öğütlemişti. Hz. Ali\'nin öğüdü tutulmadı. Mısırlılar memleketlerine dönerken yolda, aceleyle Mısır\'a doğru giden bir atlı gördüler. Tarih kitaplarının anlattığına göre bu kişi halifenin kölesiydi ve halifenin devesine binmişti. Üzerini aradıklarında, Mısır valisi **Abdullah b. Sa\'d**\'a yazılmış ve halifenin mührüyle mühürlenmiş bir mektup buldular. Rivayetlere göre mektupta, heyetin önde gelenleri Mısır\'a varınca öldürülmeleri ya da ağır şekilde cezalandırılmaları emrediliyordu. Yani Medine\'de verilen söz bozulmuş, şikâyet edenlere tuzak kurulmuştu. Mısırlılar mektubu alıp öfkeyle Medine\'ye geri döndü. Halife Osman mektubu kendisinin yazmadığına yemin etti. Mühür ve deve onundu, ama halifenin yazışmalarını yürüten kâtibi **Mervân** olduğu için şüpheler onun üzerinde toplandı. Mektubu kimin yazdığı bugün de tartışılır ve kesin bir isim söylenemez. Mısırlılar Mervân\'ın kendilerine teslim edilmesini istedi, halife ise bunu kabul etmedi. Bu kez kimse onları ikna edemedi. Halifenin evi, günlerce sürecek bir kuşatmanın içine düştü.' },
      art: { bg: 'interior', props: ['scroll'], actors: [{ kind: 'ali', x: 36, label: { tr: 'Hz. Ali' } }, { kind: 'man', x: 64, label: { tr: 'Osman' } }, { kind: 'man', x: 84, label: { tr: 'Mervan' } }] },
      by: 'partial',
      cites: [{ side: 'sunni', i: 2 }],
    },
    {
      text: { tr: 'Allah\'ın rızasını bir kenara koyup akrabalarının ve çevresindekilerin rızasını öne alan Osman, sonunda bunun sonuçlarıyla kendi kapısının önünde yüz yüze geldi. Kuşatma başladığında Halife Osman evine çekildi. Evin çevresi silahlı kalabalıkla doluydu. İçeriye su ve yiyecek ulaştırmak giderek zorlaştı. Osman, yanındakilere şöyle dedi: "Peygamber benden bir söz aldı. Ben de ona sabrediyorum." Medine\'nin sokaklarında kuşatanların öfkesi her gün biraz daha arttı. **Hz. Ali** ise bütün bu karışıklığın ortasında kan dökülmemesi için çabalamaya devam etti. Yıllarca hakkı bir kenara konmuş olmasına rağmen, halifenin canına kastedilmesini kabul etmiyordu.' },
      art: { bg: 'night', props: ['stars', 'moon'], actors: [{ kind: 'crowd', x: 30, scale: 8 }, { kind: 'man', x: 74, label: { tr: 'Osman' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Rivayetlere göre kuşatma sürerken **Hz. Ali**, iki oğlu **Hz. Hasan** ile **Hz. Hüseyin**\'i Osman\'ın evinin kapısını korumaları için gönderdi. Kuşatılan eve su ulaştırmaya çalıştığı da anlatılır. Bazı rivayetler, bu sırada Hz. Hasan\'ın yaralandığını söyler. Gadir\'de hakkı ilan edilen ve yıllarca kenarda bırakılan Hz. Ali, kendisinin yerine geçmiş bir halifeyi korumak için öz evlatlarını kapıya göndermişti. İsyancıların kılıcını onaylamıyordu. Onun için Peygamber\'in şehrinde bir Müslüman\'ın kanının dökülmesi, kendi hakkından daha ağır bir meseleydi.' },
      art: { bg: 'city', actors: [{ kind: 'hasan', x: 32, label: { tr: 'Hz. Hasan' } }, { kind: 'husayn', x: 48, label: { tr: 'Hz. Hüseyin' } }, { kind: 'ali', x: 68, label: { tr: 'Hz. Ali' } }, { kind: 'man', x: 86, label: { tr: 'Osman' } }] },
      by: 'shia',
    },
    {
      text: { tr: 'Bütün bu çabalara rağmen Halife Osman, hicretin 35. yılında, Zilhicce ayının 18\'inde Medine\'deki evinde öldürüldü. Halifeliği yaklaşık on iki yıl sürmüştü. **Hz. Ali** daha sonra bir hutbesinde bu olayı şöyle anlattı: Öldürülmesini emretmiş olsaydı katil sayılırdı. İnsanları ondan alıkoyabilmiş olsaydı onun yardımcısı olurdu. Hükmü Allah\'a bıraktığını söyledi. Hz. Ali bu cinayette ne kılıç kullandı ne de bu kanın yanında yer aldı. Osman\'ın cenazesi Bakî\'ye defnedildi ve Medine büyük bir sarsıntının içine düştü.' },
      art: { bg: 'dawn', actors: [{ kind: 'crowd', x: 34, scale: 7 }, { kind: 'ali', x: 74, label: { tr: 'Hz. Ali' } }] },
      by: 'partial',
      cites: [{ side: 'sunni', i: 2 }],
    },
    {
      text: { tr: 'Osman\'ın ölümünden sonra Medine birkaç gün yönetimsiz kaldı. Şehirde korku ve belirsizlik vardı. Sonunda halk akın akın **Hz. Ali**\'nin kapısına geldi ve ondan halifeliği kabul etmesini istedi. Hz. Ali bu görevin ne kadar ağır olduğunu biliyordu. Devralacağı şey sıradan bir devlet değildi. Haksız vali atamalarının, beytülmalın hak etmeyenlere dağıtılmasının ve adam kayırmanın biriktirdiği çeyrek asırlık bir yönetim enkazını devralacaktı. Kalabalık mescide toplandı ve Hz. Ali\'ye orada biat edildi. Biat, bağlılık sözüdür. Peygamber\'in Gadir\'de elini kaldırdığı kişi, aradan geçen yaklaşık çeyrek asrın ardından ümmetin önüne geçti. Bu kez onu halkın kendisi istemişti.' },
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

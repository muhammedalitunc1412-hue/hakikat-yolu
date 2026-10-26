import type { HistEvent } from '../types';

// Araştırma notu: Bu oturumda doğrudan okunabilen: Müslim 2404 (tohed), TDV "Hucr b. Adî" ve "Ömer b. Abdülaziz" maddeleri, WikiShia "Cursing Imam Ali" (dipnotları). Birincil kitaplar (Taberî, İbn Esîr, Bidâye, Iqd) okunmadı; ilgili kayıtlar status:'check' olarak işaretlidir.
export const sebb: HistEvent = {
  id: 'sebb',
  date: { tr: '41 H sonrası - 99-101 H (yaklaşık 661-720)', en: 'After 41 AH - 99-101 AH (c. 661-720)' },
  title: { tr: 'Minberlerde Hz. Ali\'ye sövme geleneği (sebb) ve Hucr b. Adî', en: 'The practice of cursing Imam Ali from the pulpits (sabb) and Hujr b. Adi' },
  hook: { tr: 'Minberlerde Hz. Ali\'ye sövüldü; sövmeyi reddeden Hucr b. Adî öldürüldü.', en: 'The Prophet had said that loving Ali is loving him; why was Ali cursed from Friday pulpits for years, and why were objectors killed?' },
  scenes: [
    {
      text: { tr: 'Hz. Hasan\'ın sulhünden sonra, 41 H\'de yönetim Muaviye\'de toplandı. Emevi döneminde Cuma hutbelerinde Hz. Ali\'ye sövmek yerleşik bir uygulama oldu. Bu, sevenlerin yüreğine ağır gelen bir haksızlıktı.' },
      art: { bg: 'city', props: ['minbar', 'flags'], actors: [{ kind: 'crowd', x: 28, scale: 7 }, { kind: 'man', x: 70, label: { tr: 'Muaviye' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Taberî\'ye göre Muaviye, Kûfe valisi Muğîre b. Şu\'be\'ye Hz. Ali\'yi kötülemesini ve Hz. Osman\'ı övmesini tavsiye etti. Muğîre hutbelerinde Hz. Ali\'ye ve taraftarlarına sövdürdü. Ondan sonra Ziyâd b. Ebîh de aynı yolu tuttu. Bu olay Sünni kaynaklarında da geçmektedir (Taberî, Târîhu\'r-Rusül ve\'l-Mülûk; TDV İslâm Ansiklopedisi, "Hucr b. Adî").' },
      art: { bg: 'city', props: ['minbar'], actors: [{ kind: 'man', x: 34, pose: 'raise', label: { tr: 'Muğîre' } }, { kind: 'crowd', x: 68, scale: 6 }] },
      by: 'both',
    },
    {
      text: { tr: 'Müslim\'de Muaviye, Sa\'d b. Ebî Vakkâs\'a Hz. Ali\'ye neden sövmediğini sorar. Sa\'d, Peygamber\'in üç sözünü sayar: Menzile, Hayber sancağı ve Mübahele. Bu olay Sünni kaynaklarında da geçmektedir (Müslim, No. 2404). Bazı şârihler bunu bir emir değil, bir soru olarak okur.' },
      art: { bg: 'interior', props: ['scroll'], actors: [{ kind: 'man', x: 28, label: { tr: 'Sa\'d b. Ebî Vakkâs' } }, { kind: 'man', x: 64, label: { tr: 'Muaviye' } }] },
      by: 'both',
    },
    {
      text: { tr: 'Şii kaynaklarda Muaviye\'nin valilerine genelge gönderdiği aktarılır. Bu yazılarda Hz. Ali\'ye sövülmesi ve onu övenlerin cezalandırılması istenir. Rivayet, İbn Ebi\'l-Hadîd\'in Medâinî\'den naklindedir.' },
      art: { bg: 'interior', props: ['scroll'], actors: [{ kind: 'man', x: 40, pose: 'sit', label: { tr: 'Muaviye' } }, { kind: 'crowd', x: 72, scale: 4 }] },
      by: 'shia',
    },
    {
      text: { tr: 'Şii derlemelerde Ümmü Seleme\'nin Muaviye\'ye ve valilerine mektup yazdığı aktarılır. Mektup, Hz. Ali\'ye sövenin Peygamber\'e sövmüş olacağını hatırlatır; Muaviye aldırmamıştır. Bu mektubun birincil kaynağı doğrulanamamıştır.' },
      art: { bg: 'interior', props: ['scroll'], actors: [{ kind: 'woman', x: 36, pose: 'sit', label: { tr: 'Ümmü Seleme' } }, { kind: 'man', x: 68, label: { tr: 'Muaviye' } }] },
      by: 'shia',
    },
    {
      text: { tr: 'Kûfe\'de Hucr b. Adî, Hz. Ali\'nin Cemel ve Sıffin\'deki yiğit komutanıydı. Muğîre\'nin hutbelerine açıkça karşı çıktı ve Hz. Ali\'nin faziletlerinin daha üstün olduğunu söyledi. Ziyâd döneminde tutuklandı; on iki kadar arkadaşıyla Şam\'a gönderildi.' },
      art: { bg: 'city', props: ['minbar'], actors: [{ kind: 'man', x: 30, pose: 'raise', label: { tr: 'Hucr b. Adî' } }, { kind: 'crowd', x: 66, scale: 6 }] },
      by: 'both',
    },
    {
      text: { tr: 'TDV\'ye göre Hz. Ali\'ye sövmeyi reddeden Hucr ve arkadaşları 51\'de (671) Mercü Azra\'da idam edildi; bazıları serbest bırakıldı. Hucr önce iki rekât namaz kıldı, yıkanmak istemedi ve kendini şehit bildi. Âişe bu öldürmeyi yadırgadı; Muaviye kendini savundu. Bu olay Sünni kaynaklarında da geçmektedir (TDV İslâm Ansiklopedisi, "Hucr b. Adî").' },
      art: { bg: 'dune-dusk', props: ['swords'], actors: [{ kind: 'man', x: 34, label: { tr: 'Hucr b. Adî' } }, { kind: 'crowd', x: 70, scale: 5 }] },
      by: 'both',
    },
    {
      text: { tr: 'Şii yayınlarda süre yaklaşık altmış yıl diye anılır; bu, 41 H\'den 99-101 H\'ye uzanan yaklaşık bir ifadedir, kesin bir sayı değildir. Ömer b. Abdülaziz bu uygulamayı kaldırdı. Bu olay Sünni kaynaklarında da geçmektedir (TDV İslâm Ansiklopedisi, "Ömer b. Abdülazîz").' },
      art: { bg: 'city', props: ['minbar', 'sun'], actors: [{ kind: 'crowd', x: 30, scale: 7 }, { kind: 'man', x: 70, label: { tr: 'Hatip' } }] },
      by: 'shia',
    },
    {
      text: { tr: 'Ömer b. Abdülaziz halife olunca bu uygulamayı kaldırdı. İbn Haldun\'a göre bütün beldelere yazıp durdurulmasını emretti. Yaygın anlatıma göre hutbelerde, adaleti ve iyiliği emreden Nahl 90. ayeti okutuldu.' },
      art: { bg: 'dawn', props: ['minbar', 'sun'], actors: [{ kind: 'man', x: 40, pose: 'raise', label: { tr: 'Ömer b. Abdülaziz' } }, { kind: 'crowd', x: 72, scale: 6 }] },
      by: 'both',
    },
  ],
  sunni: [
    { book: 'Müslim, Sahih', ref: 'No. 2404 (Fezâilü\'s-sahâbe, Hz. Ali\'nin faziletleri); Şâmile no. 6220', says: { tr: 'Âmir b. Sa\'d\'ın babası Sa\'d b. Ebî Vakkâs\'tan: Muaviye, Sa\'d\'a Ebû Turab\'a (Hz. Ali) neden sövmediğini sordu; Sa\'d, Peygamber\'in Hz. Ali hakkındaki üç sözünü sayarak sövmeyeceğini belirtti. Hz. Ali hakkında "Menzile" lafzı bu rivayette de geçer.' }, grade: { tr: 'Sahih' }, url: 'https://en.tohed.com/hadith/muslim/6220', status: 'verified' },
    { book: 'TDV İslâm Ansiklopedisi, "Hucr b. Adî" (Nebi Bozkurt)', ref: 'Madde (ikincil Sünni/akademik)', says: { tr: 'Muğîre b. Şu\'be\'nin Muaviye\'nin tavsiyesine uyarak cuma hutbelerinde Hz. Ali ve taraftarlarına sövmesi; Hucr\'un tepkisi; Ziyâd\'ın tutuklaması; Hz. Ali\'ye sövmeyi reddedenlerin Merc Azra\'da idamı (ö. 51/671); Âişe\'nin yadırgaması.' }, url: 'https://islamansiklopedisi.org.tr/hucr-b-adi', status: 'verified' },
    { book: 'TDV İslâm Ansiklopedisi, "Ömer b. Abdülazîz" (İsmail Yiğit)', ref: 'Madde (ikincil)', says: { tr: 'Ömer b. Abdülaziz hutbelerde Hz. Ali\'ye sövme uygulamasına son verdi; Fedek\'i Ehl-i Beyt\'e iade etti. Nahl 90 ayetinden söz etmez.' }, url: 'https://islamansiklopedisi.org.tr/omer-b-abdulaziz', status: 'verified' },
    { book: 'Taberî, Târîhu\'r-Rusül ve\'l-Mülûk', ref: 'cilt 5, s. 253 (WikiShia dipnotu 12-13); Hucr olayı 51. yıl (Leiden baskısı; kitap okunmadı)', says: { tr: 'Muaviye\'nin Muğîre\'ye Hz. Ali\'yi kötülemesi ve Hz. Osman\'ı övmesi yönündeki tavsiyesi; Hucr b. Adî olayı.' }, status: 'check' },
    { book: 'İbnü\'l-Esîr, el-Kâmil fi\'t-Târîh', ref: '41-51. yıl olayları (cilt/sayfa kontrol edilecek)', says: { tr: 'Muğîre ve Ziyâd dönemindeki sövme ve Hucr b. Adî\'nin öldürülmesi anlatımı beklenir; okunmadı.' }, status: 'check' },
    { book: 'Zehebî, Târîhu\'l-İslâm', ref: 'cilt 5, s. 231 (WikiShia dipnotu)', says: { tr: 'Mervân\'ın Medine valiliği sırasında Hz. Ali\'ye sövmesi ile ilgili aktarım (WikiShia\'nın Sünni tarihçi olarak andığı kaynak). Doğrudan okunmadı.' }, status: 'check' },
    { book: 'Ahmed b. Hanbel, Müsned; Hâkim, el-Müstedrek', ref: 'Ümmü Seleme rivayeti: "Kim Ali\'ye söverse bana sövmüştür" (hadis numarası/cilt kontrol edilecek)', says: { tr: 'Ümmü Seleme\'den, Hz. Ali\'ye sövmenin Peygamber\'e sövmek sayıldığı rivayeti. WikiShia bunu İbn Asâkir (Târîhu Dımaşk 42/533) ile verir; Müsned ve Müstedrek numaraları kontrol edilmedi.' }, status: 'check' },
    { book: 'İbn Abdirabbih, el-Ikdü\'l-Ferîd', ref: 'cilt 3, s. 300 (yalnız bir Şii savunma sitesinin dipnotu; kitap okunmadı)', says: { tr: 'Ümmü Seleme\'nin Muaviye\'ye yazdığı iddia edilen mektup: "Minberlerinizde Allah\'a ve Resulüne sövüyorsunuz." DOĞRULANMADI: sayfa ve lafız kitaptan teyit edilmedi.' }, status: 'check' },
    { book: 'İbn Haldun, Târîh', ref: 'cilt 3, s. 94 (WikiShia dipnotu 9; ikincil aktarım)', says: { tr: 'Ömer b. Abdülaziz\'in bütün İslam beldelerine yazarak lanetin durdurulmasını emrettiği.' }, status: 'check' },
    { book: 'İbn Kesîr, el-Bidâye ve\'n-Nihâye; Suyûtî, Târîhu\'l-Hulefâ', ref: 'Ömer b. Abdülaziz bölümü (cilt/sayfa kontrol edilecek)', says: { tr: 'Sövmenin yerine Nahl 90\'ın okutulması yaygın anlatımdır, ancak bu oturumda metin bu iki kitaptan doğrulanamadı: DOĞRULANMADI.' }, status: 'check' },
    { book: 'İbn Hacer, Fethü\'l-Bârî ve İsâbe', ref: 'cilt/sayfa kontrol edilecek (İsâbe c.6 Hucr maddesi)', says: { tr: 'Sövmenin minberlerde alışkanlık olduğu ve Hucr\'un konumu hakkında aktarımlar; ikincil aktarımla bilinir, okunmadı.' }, status: 'check' },
  ],
  shia: [
    { book: 'İbn Ebi\'l-Hadîd, Şerhu Nehci\'l-Belâğa (Medâinî\'den)', ref: 'cilt 4, s. 56-57 civarı (sayı kontrol edilecek)', says: { tr: 'Muaviye\'nin valilerine yazdığı genelgeler: Hz. Ali\'nin faziletlerini anlatanların cezalandırılması, hutbelerde ona sövülmesi. Okunmadı; sayfa belirsiz.' }, status: 'check' },
    { book: 'WikiShia, Cursing Imam Ali', ref: 'Madde, dipnot 9-13, 16 (ikincil Şii yayın)', says: { tr: 'Uygulamanın yaklaşık altmış yıl sürdüğü (dipnotsuz cümle), Ömer b. Abdülaziz\'in yasaklaması (İbn Haldun c.3 s.94), Muğîre\'nin dokuz yıl valilik boyunca sövmesi (Belâzurî, Ensâb c.5 s.243), Ümmü Seleme hadisi (İbn Tâvûs; İbn Asâkir 42/533), Mecliskî Biharü\'l-Envâr 39/311-330.' }, url: 'https://en.wikishia.net/view/Cursing_Imam_Ali', status: 'verified' },
    { book: 'Dîneverî, el-Ahbârü\'t-Tıvâl', ref: 's. 165 (WikiShia dipnotu 22)', says: { tr: 'Sıffin\'de Hucr ve Amr b. Hamık Şam halkına sövünce Hz. Ali\'nin "sövmenizi sevmem" diyerek yasakladığı; Hz. Ali sövmeyi kendi tarafında da hoş görmezdi.' }, status: 'check' },
    { book: 'Ebü\'l-Ferec el-İsfahânî, Makâtilü\'t-Tâlibiyyîn; Şeyh Müfîd, el-İrşâd; Mes\'ûdî, Mürûcü\'z-Zeheb', ref: 'Hucr b. Adî ve sövme bölümleri (cilt/sayfa kontrol edilecek)', says: { tr: 'Bu kaynakların Hucr olayını ve sövmeyi anlattığı beklenir; bu oturumda okunmadı.' }, status: 'check' },
  ],
  disputes: [
    {
      title: { tr: 'Sövme doğrudan bir emir miydi?' },
      shia: { tr: 'Minberlerde Hz. Ali\'ye sövüldüğü iki gelenekte de anlatılır. Şii kaynaklar bunu Muaviye\'nin valilerine yazdığı genelgelere bağlar.' },
      sunni: { tr: 'Minberlerde Hz. Ali\'ye sövüldüğü iki gelenekte de anlatılır. Taberî bunu Muğîre\'ye bir tavsiye olarak anar; bazı şârihler Müslim 2404\'ü emir değil soru diye okur.' },
    },
    {
      title: { tr: 'Gelenek kaç yıl sürdü?' },
      shia: { tr: 'Uygulamanın Ömer b. Abdülaziz\'e kadar sürdüğü kabul edilir. "Yaklaşık altmış yıl" ifadesi Şii yayınlarda geçer ve dipnotsuzdur.' },
      sunni: { tr: 'Uygulamanın Ömer b. Abdülaziz\'e kadar sürdüğü kabul edilir. "Altmış" sayısı klasik bir Sünni metinden doğrulanamamıştır; her Cuma her yerde yapıldığı da tartışılır.' },
    },
    {
      title: { tr: 'Sövme hangi şehirlere yayıldı?' },
      shia: { tr: 'Sövmenin Kûfe\'de uygulandığı ortaktır. Şii anlatıda bu, Şam, Basra ve Medine\'yi de kapsar; itiraz edenler cezalandırılmıştır.' },
      sunni: { tr: 'Sövmenin Kûfe\'de uygulandığı ortaktır. Sünni örnekler daha çok Muğîre, Ziyâd ve Mervân üzerinden verilir; Hicaz ve Mısır\'da aynı ölçüde olduğu belirsizdir.' },
    },
    {
      title: { tr: 'Hucr neden öldürüldü?' },
      shia: { tr: 'Hucr\'un Mercü Azra\'da öldürüldüğü kaynaklarda ortaktır. Şii anlatıda o, Hz. Ali\'ye sövmeyi reddettiği için şehittir.' },
      sunni: { tr: 'Hucr\'un Mercü Azra\'da öldürüldüğü kaynaklarda ortaktır. Tarihçiler onun Ziyâd\'a başkaldırı sayılan davranışlarını da anar; Âişe bu öldürmeyi eleştirmiştir.' },
    },
    {
      title: { tr: 'Ömer b. Abdülaziz\'in okuttuğu ayet' },
      shia: { tr: 'Ömer b. Abdülaziz\'in sövmeyi kaldırdığı iki gelenekte de anlatılır. Nahl 90, Şii anlatılarda bunun yerine okutulan ayet diye geçer.' },
      sunni: { tr: 'Ömer b. Abdülaziz\'in sövmeyi kaldırdığı iki gelenekte de anlatılır. Nahl 90\'ın okutulması yaygın bir anlatımdır; hangi ayetin ilk ne zaman okunduğu birincil metinden doğrulanmamıştır.' },
    },
  ],
  questions: [
    { tr: 'Hz. Ali\'ye sövmenin Peygamber\'e dokunduğu rivayet edilir. Yıllarca minberlerde ona sövülmesi, Ehl-i Beyt sevgisi hakkında size ne düşündürüyor?' },
    { tr: 'Sa\'d, soru karşısında Peygamber\'in Hz. Ali hakkındaki üç sözünü saydı. Onun bu sözleri hatırlatması size ne söylüyor?' },
    { tr: 'Hz. Ali, Sıffin\'de kendi askerlerinin karşı tarafa sövmesini yasaklamıştı. Buna rağmen onun adına minberlerde sövülmesi size ne düşündürüyor?' },
    { tr: 'Hucr ve arkadaşları sövmeyi reddettikleri için öldürüldü. Hutbede haksızlığa karşı duran bir insanın hâli size ne söylüyor?' },
    { tr: 'Ömer b. Abdülaziz sövmeyi kaldırıp hutbede adalet ayetini okuttu. Bu değişiklik, o sözlerin ağırlığını size nasıl gösteriyor?' },
  ],
  summary: { tr: 'Emevi döneminde Cuma hutbelerinde Hz. Ali\'ye sövüldü. Bu olay Sünni kaynaklarında da geçmektedir (Müslim, No. 2404; TDV İslâm Ansiklopedisi, "Hucr b. Adî"). Sövmeyi reddeden Hucr b. Adî, 51 H\'de Mercü Azra\'da öldürüldü. Bu olay Sünni kaynaklarında da geçmektedir (TDV İslâm Ansiklopedisi, "Hucr b. Adî"). Ömer b. Abdülaziz uygulamayı kaldırdı. Şii anlatıda bu, yaklaşık altmış yıl süren ağır bir haksızlıktır.' },
};

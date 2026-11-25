import type { L } from '../types';

// Hikâye sonu kısa testleri. Her soru YALNIZCA o hikâyenin sahne metninde geçen bir bilgiden üretilmiştir;
// `scene`, bilginin geçtiği sahnenin sırasıdır (0'dan başlar). Doğru cevap her zaman ilk seçenektir;
// ekranda seçenekler karıştırılır. Çeviriler: tr ve en tam; diğer dillerde metin İngilizceye, o da yoksa Türkçeye düşer.
export type QuizQ = { q: L; options: L[]; scene: number };

type P = [string, string];
const q = (tr: string, en: string, options: P[], scene: number): QuizQ => ({
  q: { tr, en },
  options: options.map(([t, e]) => ({ tr: t, en: e })),
  scene,
});

export const QUIZZES: Record<string, QuizQ[]> = {
  'pence-aba': [
    q('Örtü olayı kimin evinde yaşandı?', 'In whose house did the event of the cloak take place?', [['Ümmü Seleme', 'Umm Salama'], ['Aişe', 'Aisha'], ['Hafsa', 'Hafsa'], ['Ebu Bekir', 'Abu Bakr']], 0),
    q('Örtünün altına ilk gelen kimdi?', 'Who came under the cloak first?', [['Hz. Hasan', 'Hasan'], ['Hz. Hüseyin', 'Husayn'], ['Hz. Fatıma', 'Fatima'], ['Hz. Ali', 'Ali']], 0),
    q('"Pence" kelimesi Farsçada ne demektir?', 'What does the word "panje" mean in Persian?', [['Beş', 'Five'], ['El', 'Hand'], ['Örtü', 'Cloak'], ['Aile', 'Family']], 4),
  ],
  ehlibeyt: [
    q('Mübahele çağrısı hangi ayetle geldi?', 'Which verse brought the call to mubahala?', [['Âl-i İmrân 61', 'Al Imran 61'], ['Bakara 207', 'Al-Baqara 207'], ['Şûrâ 23', 'Al-Shura 23'], ['Nahl 90', 'Al-Nahl 90']], 0),
    q('Necran\'dan gelen heyet hangi dindendi?', 'What was the religion of the delegation from Najran?', [['Hristiyan', 'Christian'], ['Yahudi', 'Jewish'], ['Mecusi', 'Zoroastrian'], ['Putperest', 'Pagan']], 0),
    q('Câbir\'in Hz. Fatıma\'nın yanında gördüğü levhadaki son isim kimdi?', 'Whose was the last name on the tablet Jabir saw with Fatima?', [['Hz. Mehdî', 'The Mahdi'], ['Hz. Hüseyin', 'Husayn'], ['Hz. Ali Rızâ', 'Ali al-Rida'], ['Hz. Hasan Askerî', 'Hasan al-Askari']], 5),
  ],
  'ali-kimdir': [
    q('Hz. Ali nerede dünyaya geldi?', 'Where was Ali born?', [['Kâbe\'nin içinde', 'Inside the Kaaba'], ['Medine\'de', 'In Medina'], ['Taif\'te', 'In Taif'], ['Yemen\'de', 'In Yemen']], 0),
    q('Hz. Ali\'nin annesi kimdir?', 'Who was Ali\'s mother?', [['Fatıma bint Esed', 'Fatima bint Asad'], ['Âmine', 'Amina'], ['Halime', 'Halima'], ['Hind bint Utbe', 'Hind bint Utba']], 0),
    q('Sakife\'de yönetim konuşulurken Hz. Ali ne yapıyordu?', 'What was Ali doing while leadership was being discussed at Saqifa?', [['Peygamber\'in bedenini yıkıyordu', 'Washing the Prophet\'s body'], ['Toplantıda konuşuyordu', 'Speaking at the meeting'], ['Mekke\'deydi', 'He was in Mecca'], ['Bir sefere çıkmıştı', 'He was away on a campaign']], 11),
  ],
  hayber: [
    q('Hayber seferi hicretin kaçıncı yılında yapıldı?', 'In which year after the Hijra did the Khaybar campaign take place?', [['Yedinci', 'The seventh'], ['Beşinci', 'The fifth'], ['Dokuzuncu', 'The ninth'], ['Onuncu', 'The tenth']], 0),
    q('Peygamber sancağı vereceği kişiyi nasıl tarif etti?', 'How did the Prophet describe the one who would receive the banner?', [['Allah\'ı ve Resulünü seven, Allah\'ın ve Resulünün de sevdiği biri', 'Someone who loves God and His Messenger, and whom God and His Messenger love'], ['Ordunun en yaşlısı', 'The oldest man in the army'], ['Kurayla seçilecek biri', 'Someone chosen by lot'], ['İlk hicret eden', 'The first to emigrate']], 2),
    q('Fedek nasıl alındı?', 'How was Fadak acquired?', [['Savaşmadan, anlaşmayla', 'Without fighting, by agreement'], ['Uzun bir kuşatmayla', 'After a long siege'], ['Satın alınarak', 'By purchase'], ['Hayber kaleleriyle birlikte fethedilerek', 'Conquered together with the forts of Khaybar']], 7),
  ],
  menzile: [
    q('Tebük\'e giden orduya ne ad verildi?', 'What was the army that marched to Tabuk called?', [['Zorluk Ordusu', 'The Army of Hardship'], ['Fetih Ordusu', 'The Army of Conquest'], ['Usame Ordusu', 'The Army of Usama'], ['Ensar Ordusu', 'The Army of the Ansar']], 0),
    q('Peygamber, Hz. Ali\'nin kendi yanındaki yerini neye benzetti?', 'To what did the Prophet compare Ali\'s place beside him?', [['Harun\'un Musa\'nın yanındaki yerine', 'The place of Aaron beside Moses'], ['Yusuf\'un Yakub\'un yanındaki yerine', 'The place of Joseph beside Jacob'], ['İsmail\'in İbrahim\'in yanındaki yerine', 'The place of Ishmael beside Abraham'], ['Yahya\'nın İsa\'nın yanındaki yerine', 'The place of John beside Jesus']], 3),
    q('Tebük seferi nasıl sonuçlandı?', 'How did the Tabuk campaign end?', [['Kılıç çekilmedi, kabilelerle anlaşma yapıldı', 'No sword was drawn; agreements were made with the tribes'], ['Büyük bir savaş yapıldı', 'A great battle was fought'], ['Ordu yenildi', 'The army was defeated'], ['Tebük kuşatıldı', 'Tabuk was besieged']], 8),
  ],
  gadir: [
    q('Peygamber Gadir Hum\'daki konuşmasına hangi soruyla başladı?', 'With which question did the Prophet begin his speech at Ghadir Khumm?', [['"Ben müminlere kendi canlarından daha yakın değil miyim?"', '"Am I not closer to the believers than their own selves?"'], ['"Hac nasıl geçti?"', '"How was the pilgrimage?"'], ['"Yarın nereye gidiyoruz?"', '"Where do we go tomorrow?"'], ['"Kim benimle Tebük\'e gelir?"', '"Who will come with me to Tabuk?"']], 2),
    q('Peygamber ümmetine hangi iki ağır emaneti bıraktığını söyledi?', 'Which two weighty trusts did the Prophet say he was leaving to his community?', [['Allah\'ın Kitabı ve Ehl-i Beyt', 'The Book of God and the Ahl al-Bayt'], ['Kitap ve kılıç', 'The Book and the sword'], ['Kâbe ve mescit', 'The Kaaba and the mosque'], ['Namaz ve zekât', 'Prayer and alms']], 4),
    q('Gadir Hum\'da yaklaşık kaç kişi toplanmıştı?', 'Roughly how many people had gathered at Ghadir Khumm?', [['Yüz binin üzerinde', 'More than a hundred thousand'], ['Birkaç yüz', 'A few hundred'], ['Bin kadar', 'About a thousand'], ['On bin kadar', 'About ten thousand']], 2),
  ],
  raziyye: [
    q('Peygamber, Belka\'ya gönderdiği ordunun başına kimi getirdi?', 'Whom did the Prophet put in command of the army sent towards Balqa?', [['Usame b. Zeyd', 'Usama ibn Zayd'], ['Zeyd b. Harise', 'Zayd ibn Haritha'], ['Halid b. Velid', 'Khalid ibn al-Walid'], ['Amr b. el-As', 'Amr ibn al-As']], 0),
    q('Peygamber hastalığının ağır bir gününde ne istedi?', 'What did the Prophet ask for on one of the hardest days of his illness?', [['Kalem ve kâğıt', 'A pen and paper'], ['Su', 'Water'], ['Kılıcını', 'His sword'], ['Sancağı', 'The banner']], 2),
    q('Rivayeti aktaran, Peygamber\'in üçüncü sözlü vasiyeti için ne der?', 'What does the narrator say about the Prophet\'s third spoken instruction?', [['Unuttuğunu', 'That he forgot it'], ['Gizli tutulduğunu', 'That it was kept secret'], ['Yazıya geçirildiğini', 'That it was written down'], ['Yalnız Ali\'ye söylendiğini', 'That it was told only to Ali']], 5),
  ],
  sakife: [
    q('Sakife\'de "Bizden bir emir, sizden bir emir olsun" önerisini kim yaptı?', 'Who proposed "a leader from us and a leader from you" at Saqifa?', [['Hubab b. Münzir', 'Hubab ibn al-Mundhir'], ['Beşir b. Sa\'d', 'Bashir ibn Sad'], ['Ebu Bekir', 'Abu Bakr'], ['Ömer', 'Umar']], 3),
    q('Hz. Ali biatı kabul etmeyip ne kadar süre Hz. Fatıma\'nın yanında durdu?', 'For how long did Ali refuse the pledge and stay by Fatima\'s side?', [['Altı ay', 'Six months'], ['İki hafta', 'Two weeks'], ['Bir yıl', 'One year'], ['Üç gün', 'Three days']], 6),
    q('Ömer kendisinden sonraki halifeyi seçmek için kaç kişilik bir şura kurdu?', 'How many members did the council Umar set up to choose his successor have?', [['Altı', 'Six'], ['Dört', 'Four'], ['Yedi', 'Seven'], ['On', 'Ten']], 9),
  ],
  fedek: [
    q('Hz. Fatıma\'nın mescitte yaptığı konuşma hangi adla anılır?', 'By what name is Fatima\'s speech in the mosque known?', [['Fedek Hutbesi', 'The Fadak Sermon'], ['Şıkşıkıyye Hutbesi', 'The Shiqshiqiyya Sermon'], ['Veda Hutbesi', 'The Farewell Sermon'], ['Gadir Hutbesi', 'The Ghadir Sermon']], 2),
    q('Fedek reddedilince Hz. Fatıma kime küstü?', 'With whom did Fatima stop speaking after Fadak was refused?', [['Halife Ebu Bekir\'e', 'Caliph Abu Bakr'], ['Osman\'a', 'Uthman'], ['Muaviye\'ye', 'Muawiya'], ['Mervan\'a', 'Marwan']], 4),
    q('Fedek\'i Hz. Fatıma\'nın soyuna geri veren Emevi halifesi kimdir?', 'Which Umayyad caliph returned Fadak to Fatima\'s descendants?', [['Ömer b. Abdülaziz', 'Umar ibn Abd al-Aziz'], ['Yezid', 'Yazid'], ['Mervan', 'Marwan'], ['Abdülmelik', 'Abd al-Malik']], 6),
  ],
  'fatima-vefat': [
    q('Hz. Ali\'yi biat ettirmek için ellerini bağlayıp nereye götürdüler?', 'Where was Ali dragged with his hands tied to make him pledge allegiance?', [['Mescid-i Nebevî\'ye', 'To the Prophet\'s Mosque'], ['Sakife\'ye', 'To Saqifa'], ['Bakî\'ye', 'To al-Baqi'], ['Kûba\'ya', 'To Quba']], 3),
    q('Hz. Fatıma nasıl defnedilmeyi vasiyet etti?', 'How did Fatima ask to be buried?', [['Gece, kabri kimse tarafından bilinmeden', 'At night, with her grave known to no one'], ['Gündüz, babasının yanına', 'By day, beside her father'], ['Uhud\'da, Hamza\'nın yanına', 'At Uhud, beside Hamza'], ['Mekke\'de, annesinin yanına', 'In Mecca, beside her mother']], 6),
    q('Sabah Ömer ve Ebu Bekir hangi mezarlığa geldi?', 'Which cemetery did Umar and Abu Bakr come to in the morning?', [['Bakî', 'Al-Baqi'], ['Uhud şehitliği', 'The martyrs\' cemetery of Uhud'], ['Mekke\'deki Ma\'lâ', 'Al-Mala in Mecca'], ['Necef', 'Najaf']], 9),
  ],
  istihlaf: [
    q('Halife Ebu Bekir yerine kimi tayin etti?', 'Whom did Caliph Abu Bakr appoint as his successor?', [['Ömer\'i', 'Umar'], ['Osman\'ı', 'Uthman'], ['Abdurrahman b. Avf\'ı', 'Abd al-Rahman ibn Awf'], ['Talha\'yı', 'Talha']], 0),
    q('Şurada Zübeyr hakkını kime bıraktı?', 'To whom did al-Zubayr give up his share in the council?', [['Hz. Ali\'ye', 'Ali'], ['Osman\'a', 'Uthman'], ['Abdurrahman b. Avf\'a', 'Abd al-Rahman ibn Awf'], ['Sa\'d b. Ebi Vakkas\'a', 'Sad ibn Abi Waqqas']], 5),
    q('Hz. Ali bu günleri hangi hutbesinde acıyla anlattı?', 'In which sermon did Ali later describe these days with sorrow?', [['Şıkşıkıyye', 'The Shiqshiqiyya'], ['Fedek Hutbesi', 'The Fadak Sermon'], ['Veda Hutbesi', 'The Farewell Sermon'], ['Gadir Hutbesi', 'The Ghadir Sermon']], 7),
  ],
  osman: [
    q('Halife Osman\'ın kâtipliğine kim oturdu?', 'Who became Caliph Uthman\'s secretary?', [['Mervan', 'Marwan'], ['Velîd b. Ukbe', 'al-Walid ibn Uqba'], ['Abdullah b. Âmir', 'Abd Allah ibn Amir'], ['Saîd b. Âs', 'Said ibn al-As']], 0),
    q('Mısırlı heyetle görüşmeye kimler gitti?', 'Who went to talk with the delegation from Egypt?', [['Hz. Ali ve Muhammed b. Mesleme', 'Ali and Muhammad ibn Maslama'], ['Talha ve Zübeyr', 'Talha and al-Zubayr'], ['Mervan ve Velîd', 'Marwan and al-Walid'], ['Ammar ve Mâlik el-Eşter', 'Ammar and Malik al-Ashtar']], 2),
    q('Kuşatma sırasında Hz. Ali, Osman\'ın kapısını korumak için kimleri gönderdi?', 'Whom did Ali send to guard Uthman\'s door during the siege?', [['Oğulları Hz. Hasan ile Hz. Hüseyin\'i', 'His sons Hasan and Husayn'], ['Ammar\'ı', 'Ammar'], ['Mâlik el-Eşter\'i', 'Malik al-Ashtar'], ['Abbas\'ı', 'al-Abbas']], 5),
  ],
  cemel: [
    q('Hz. Ali haksız yere verilmiş malları nereye geri aldı?', 'Where did Ali return the wealth that had been wrongly handed out?', [['Beytülmale, ümmetin ortak hazinesine', 'To the bayt al-mal, the community\'s common treasury'], ['Kendi evine', 'To his own house'], ['Şam\'a', 'To Damascus'], ['Mekke\'ye', 'To Mecca']], 0),
    q('Aişe, Talha ve Zübeyr hangi şehre doğru yola çıktı?', 'Towards which city did Aisha, Talha and al-Zubayr set out?', [['Basra', 'Basra'], ['Kûfe', 'Kufa'], ['Şam', 'Damascus'], ['Mısır', 'Egypt']], 3),
    q('Hz. Ali kan dökülmesini durdurmak için ne emretti?', 'What did Ali order to stop the bloodshed?', [['Devenin kesilmesini', 'That the camel be brought down'], ['Ordunun geri çekilmesini', 'That his army withdraw'], ['Basra\'nın yakılmasını', 'That Basra be burned'], ['Esirlerin öldürülmesini', 'That the captives be killed']], 6),
  ],
  siffin: [
    q('Sıffin ovası hangi nehrin kıyısındadır?', 'On the bank of which river is the plain of Siffin?', [['Fırat', 'The Euphrates'], ['Dicle', 'The Tigris'], ['Nil', 'The Nile'], ['Ürdün', 'The Jordan']], 0),
    q('Peygamber\'in "Onu azgın bir grup öldürecek" dediği ve Sıffin\'de şehit olan kimdir?', 'Who was martyred at Siffin, the man of whom the Prophet said "a rebellious group will kill him"?', [['Ammar', 'Ammar'], ['Mâlik el-Eşter', 'Malik al-Ashtar'], ['Hucr b. Adî', 'Hujr ibn Adi'], ['Meysem et-Temmâr', 'Maytham al-Tammar']], 3),
    q('Kûfe camisinde Hz. Ali\'nin başına kılıçla vuran kimdi?', 'Who struck Ali with a sword in the mosque of Kufa?', [['İbn Mülcem', 'Ibn Muljam'], ['Amr b. el-As', 'Amr ibn al-As'], ['Ömer b. Sa\'d', 'Umar ibn Sad'], ['Mervan', 'Marwan']], 10),
  ],
  nehrevan: [
    q('Hz. Ali\'nin yanından ayrılanlar hangi sözü slogan yaptı?', 'Which phrase did those who left Ali take as their slogan?', [['"Hüküm yalnızca Allah\'ındır"', '"Judgement belongs to God alone"'], ['"Osman\'ın kanı"', '"The blood of Uthman"'], ['"Allah\'ın Kitabı aramızda hakem olsun"', '"Let the Book of God judge between us"'], ['"Bizden bir emir, sizden bir emir"', '"A leader from us, a leader from you"']], 0),
    q('Haricîler kimi ve hamile eşini öldürdü?', 'Whom did the Kharijites kill together with his pregnant wife?', [['Abdullah b. Habbâb', 'Abd Allah ibn Khabbab'], ['Ammar', 'Ammar'], ['Hucr b. Adî', 'Hujr ibn Adi'], ['Muhammed b. Mesleme', 'Muhammad ibn Maslama']], 1),
    q('Bu haberden sonra Hz. Ali, Şam\'a karşı hazırladığı orduyu nereye çevirdi?', 'After this news, where did Ali turn the army he had prepared against Damascus?', [['Nehrevan\'a', 'To Nahrawan'], ['Basra\'ya', 'To Basra'], ['Mekke\'ye', 'To Mecca'], ['Mısır\'a', 'To Egypt']], 1),
  ],
  sebb: [
    q('Minberlerde Hz. Ali\'ye lanet okunması kimin emriyle başladı?', 'On whose order did the cursing of Ali from the pulpits begin?', [['Muaviye', 'Muawiya'], ['Yezid', 'Yazid'], ['Mervan', 'Marwan'], ['Ömer b. Abdülaziz', 'Umar ibn Abd al-Aziz']], 0),
    q('Hucr b. Adî ve arkadaşları nerede katledildi?', 'Where were Hujr ibn Adi and his companions killed?', [['Mercü Azra\'da', 'At Marj Adhra'], ['Kerbelâ\'da', 'At Karbala'], ['Sıffin\'de', 'At Siffin'], ['Nehrevan\'da', 'At Nahrawan']], 6),
    q('Laneti kaldırıp hutbelerde Nahl Suresi\'nin 90. ayetini okutan halife kimdir?', 'Which caliph ended the cursing and had verse 90 of Surat al-Nahl recited instead?', [['Ömer b. Abdülaziz', 'Umar ibn Abd al-Aziz'], ['Abdülmelik', 'Abd al-Malik'], ['Me\'mun', 'al-Mamun'], ['Yezid', 'Yazid']], 8),
  ],
  'muaviye-kimdir': [
    q('Muaviye\'nin annesi kimdir?', 'Who was Muawiya\'s mother?', [['Hind bint Utbe', 'Hind bint Utba'], ['Fatıma bint Esed', 'Fatima bint Asad'], ['Sümeyye', 'Sumayya'], ['Ca\'de bint Eş\'as', 'Jada bint al-Ashath']], 0),
    q('Uhud\'da Hz. Hamza\'yı mızrağıyla şehit eden kimdi?', 'Who killed Hamza with his spear at Uhud?', [['Vahşi', 'Wahshi'], ['Ebu Süfyan', 'Abu Sufyan'], ['Utbe', 'Utba'], ['İbn Mülcem', 'Ibn Muljam']], 2),
    q('Muaviye ne zaman Müslüman oldu?', 'When did Muawiya become a Muslim?', [['Fetih yılında, babasıyla birlikte', 'In the year of the conquest of Mecca, together with his father'], ['Bedir\'den önce', 'Before Badr'], ['Hicretten önce Mekke\'de', 'In Mecca before the Hijra'], ['Tebük seferinde', 'During the Tabuk campaign']], 5),
  ],
  'muaviye-ali': [
    q('Muaviye\'yi Şam\'a ilk kez vali olarak kim atamıştı?', 'Who first appointed Muawiya governor of Damascus?', [['Ömer', 'Umar'], ['Osman', 'Uthman'], ['Ebu Bekir', 'Abu Bakr'], ['Hz. Ali', 'Ali']], 0),
    q('Şam askerleri Kur\'an sayfalarını kimin önerisiyle mızraklara taktı?', 'On whose advice did the Syrian soldiers raise pages of the Quran on their spears?', [['Amr b. el-As', 'Amr ibn al-As'], ['Mervan', 'Marwan'], ['Ziyâd', 'Ziyad'], ['Velîd b. Ukbe', 'al-Walid ibn Uqba']], 5),
    q('Mâlik el-Eşter Mısır yolunda nerede zehirlendi?', 'Where was Malik al-Ashtar poisoned on his way to Egypt?', [['Kulzüm\'de', 'At Qulzum'], ['Şam\'da', 'In Damascus'], ['Kûfe\'de', 'In Kufa'], ['Medine\'de', 'In Medina']], 7),
  ],
  'muaviye-hasan': [
    q('Hz. Hasan\'ın sulh şartlarından biri hangisiydi?', 'Which of these was one of Hasan\'s conditions for the peace treaty?', [['Muaviye kendisinden sonra halife tayin etmeyecekti', 'Muawiya would not appoint a caliph after himself'], ['Kûfe Şam\'a bağlanacaktı', 'Kufa would be placed under Damascus'], ['Hz. Hasan Medine\'den çıkmayacaktı', 'Hasan would never leave Medina'], ['Beytülmal Şam\'a taşınacaktı', 'The treasury would move to Damascus']], 2),
    q('Muaviye, Hz. Hasan\'ı zehirlemesi için kime vaatte bulundu?', 'Whom did Muawiya promise rewards to poison Hasan?', [['Eşi Ca\'de bint Eş\'as\'a', 'His wife Jada bint al-Ashath'], ['Hind\'e', 'Hind'], ['Mervan\'a', 'Marwan'], ['Ziyâd\'a', 'Ziyad']], 5),
    q('Hz. Hasan nereye defnedildi?', 'Where was Hasan buried?', [['Bakî\'ye, ninesi Fatıma bint Esed\'in yanına', 'At al-Baqi, beside his grandmother Fatima bint Asad'], ['Peygamber\'in yanına', 'Beside the Prophet'], ['Kûfe\'ye', 'In Kufa'], ['Kerbelâ\'ya', 'In Karbala']], 7),
  ],
  'muaviye-iktidar': [
    q('Muaviye kendisi için ne dedi?', 'What did Muawiya say about himself?', [['"Ben kralların ilkiyim"', '"I am the first of the kings"'], ['"Ben halifelerin sonuncusuyum"', '"I am the last of the caliphs"'], ['"Ben Ehl-i Beyt\'tenim"', '"I am of the Ahl al-Bayt"'], ['"Ben Osman\'ın vekiliyim"', '"I am Uthman\'s deputy"']], 0),
    q('Muaviye Ziyâd\'ı kimin oğlu ilan etti?', 'Whose son did Muawiya declare Ziyad to be?', [['Ebu Süfyan\'ın', 'Abu Sufyan\'s'], ['Ubeyd\'in', 'Ubayd\'s'], ['Utbe\'nin', 'Utba\'s'], ['Mervan\'ın', 'Marwan\'s']], 2),
    q('Muaviye ömrünün son yıllarında kimi veliaht ilan etti?', 'Whom did Muawiya declare crown prince in his last years?', [['Oğlu Yezid\'i', 'His son Yazid'], ['Mervan\'ı', 'Marwan'], ['Ziyâd\'ı', 'Ziyad'], ['Abdullah b. Ömer\'i', 'Abd Allah ibn Umar']], 5),
  ],
  hasan: [
    q('Hz. Hasan kimlerin ilk oğluydu?', 'Whose first son was Hasan?', [['Hz. Fatıma ile Hz. Ali\'nin', 'Fatima and Ali\'s'], ['Peygamber\'in', 'The Prophet\'s'], ['Abbas\'ın', 'al-Abbas\'s'], ['Ca\'fer\'in', 'Jafar\'s']], 0),
    q('Hz. Hasan cenazesi için hangi şartı koştu?', 'What condition did Hasan set for his funeral?', [['Bir damla bile kan dökülmemesi', 'That not a single drop of blood be shed'], ['Gece defnedilmesi', 'That he be buried at night'], ['Kûfe\'ye götürülmesi', 'That he be taken to Kufa'], ['Kimseye haber verilmemesi', 'That no one be told']], 8),
    q('Muaviye öldüğünde Hz. Hüseyin neredeydi?', 'Where was Husayn when Muawiya died?', [['Medine\'de', 'In Medina'], ['Kûfe\'de', 'In Kufa'], ['Şam\'da', 'In Damascus'], ['Basra\'da', 'In Basra']], 12),
  ],
  meysem: [
    q('"Temmâr" ne demektir?', 'What does "Tammar" mean?', [['Hurmacı', 'Date seller'], ['Demirci', 'Blacksmith'], ['Su taşıyan', 'Water carrier'], ['Kâtip', 'Scribe']], 0),
    q('Meysem nereye asıldı?', 'Where was Maytham hanged?', [['Hz. Ali\'nin yıllar önce gösterdiği hurma ağacına', 'On the palm tree Ali had shown him years before'], ['Kûfe sarayının kapısına', 'On the gate of the palace of Kufa'], ['Şam yolunda bir direğe', 'On a post on the road to Damascus'], ['Çarşının ortasındaki bir kuleye', 'On a tower in the middle of the market']], 4),
    q('Meysem\'in dilinin kesilmesini kim emretti?', 'Who ordered Maytham\'s tongue to be cut out?', [['İbn Ziyâd', 'Ibn Ziyad'], ['Muaviye', 'Muawiya'], ['Ömer b. Sa\'d', 'Umar ibn Sad'], ['Mervan', 'Marwan']], 4),
  ],
  kerbela: [
    q('Hz. Hüseyin\'i sarayına çağırıp Yezid\'e biat etmesini isteyen Medine valisi kimdi?', 'Which governor of Medina summoned Husayn and asked him to pledge allegiance to Yazid?', [['Velid', 'al-Walid'], ['İbn Ziyâd', 'Ibn Ziyad'], ['Ömer b. Sa\'d', 'Umar ibn Sad'], ['Müslim b. Ukbe', 'Muslim ibn Uqba']], 0),
    q('Son gece Hz. Hüseyin dostlarına ne dedi?', 'What did Husayn tell his companions on the last night?', [['Biatlerini kaldırdı; karanlıktan yararlanıp gidebileceklerini söyledi', 'He released them from their pledge and told them they could leave under cover of darkness'], ['Kûfe\'ye dönmelerini emretti', 'He ordered them to return to Kufa'], ['Yezid\'e mektup yazmalarını istedi', 'He asked them to write to Yazid'], ['Gece saldırısı hazırlamalarını istedi', 'He asked them to prepare a night attack']], 12),
    q('Askerlerine "Hüseyin\'in göğsünü ve sırtını atlarıyla çiğneyecek kim var?" diye kim sordu?', 'Who asked his soldiers, "Who will trample Husayn\'s chest and back with his horse?"', [['Ömer b. Sa\'d', 'Umar ibn Sad'], ['Yezid', 'Yazid'], ['Velid', 'al-Walid'], ['Husayn b. Numeyr', 'Husayn ibn Numayr']], 24),
    q('Kerbelâ\'da aileye karşı kesilen neydi?', 'What was cut off from the family at Karbala?', [['Fırat\'ın suyu', 'The water of the Euphrates'], ['Mekke yolu', 'The road to Mecca'], ['Şam\'a giden mektuplar', 'The letters to Damascus'], ['Medine\'den gelen erzak', 'The supplies from Medina']], 36),
  ],
  harre: [
    q('Medine\'den Şam\'a giden heyetin başında kim vardı?', 'Who led the delegation from Medina to Damascus?', [['Abdullah b. Hanzala', 'Abd Allah ibn Hanzala'], ['Abdullah b. Zübeyr', 'Abd Allah ibn al-Zubayr'], ['Mervan b. Hakem', 'Marwan ibn al-Hakam'], ['Abdullah b. Ömer', 'Abd Allah ibn Umar']], 0),
    q('İmam Mâlik\'ten nakledildiğine göre o gün kaç Kur\'an hafızı öldürüldü?', 'According to a report from Imam Malik, how many memorisers of the Quran were killed that day?', [['Yedi yüz', 'Seven hundred'], ['Yetmiş', 'Seventy'], ['Yedi bin', 'Seven thousand'], ['Yüz', 'One hundred']], 3),
    q('Hicretin 64. yılında Şam ordusu Kâbe\'ye ne yaptı?', 'What did the Syrian army do to the Kaaba in the year 64 AH?', [['Mancınıklarla taşladı ve ateşe verdi', 'It bombarded it with catapults and set it on fire'], ['Yeniden inşa etti', 'It rebuilt it'], ['Kapısını kapattı', 'It closed its door'], ['Örtüsünü yeniledi', 'It renewed its covering']], 4),
  ],
  imamlar: [
    q('Kerbelâ\'dan sonra imamet kime geçti?', 'To whom did the imamate pass after Karbala?', [['Hz. Zeynelâbidîn\'e', 'Zayn al-Abidin'], ['Hz. Muhammed Bâkır\'a', 'Muhammad al-Baqir'], ['Muhammed b. Hanefiyye\'ye', 'Muhammad ibn al-Hanafiyya'], ['Hz. Abbas\'a', 'al-Abbas']], 0),
    q('Bugün Şiilerin takip ettiği fıkıh kimin adıyla anılır?', 'After whom is the jurisprudence followed by Shias today named?', [['Hz. Ca\'fer-i Sâdık (Câferî fıkıh)', 'Jafar al-Sadiq (Jafari jurisprudence)'], ['Hz. Ali Rızâ', 'Ali al-Rida'], ['Hz. Musa Kâzım', 'Musa al-Kazim'], ['Hz. Zeynelâbidîn', 'Zayn al-Abidin']], 3),
    q('Abbasi halifesi Me\'mûn, Hz. Ali Rızâ\'yı nereye getirtti?', 'Where did the Abbasid caliph al-Mamun bring Ali al-Rida?', [['Horasan\'daki Merv\'e', 'To Merv in Khorasan'], ['Bağdat\'a', 'To Baghdad'], ['Samarra\'ya', 'To Samarra'], ['Şam\'a', 'To Damascus']], 6),
  ],
};

export const hasQuiz = (eventId: string) => (QUIZZES[eventId]?.length ?? 0) > 0;

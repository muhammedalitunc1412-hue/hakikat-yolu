import type { Lang } from '../types';

// Ana ekrandaki kategori başlıkları ve alt başlıkları (Türkçe asıl metin data/events.ts içindedir).
type CatText = { title: string; sub: string };
export const CATEGORY_TEXT: Partial<Record<Lang, Record<string, CatText>>> = {
  en: {
    ehlibeyt: { title: 'The Ahl al-Bayt and Ghadir', sub: 'The Cloak, the Mubahala, who is Imam Ali, Khaybar, Tabuk, Ghadir Khumm' },
    hilafet: { title: 'After the Prophet: the Caliphate', sub: 'The pen and paper, Saqifa, the appointment and the Council, the era of Caliph Uthman' },
    fatima: { title: 'Lady Fatima', sub: 'The right to Fadak, the days of Fatima, the night burial and the hidden grave' },
    ali: { title: 'The Era of Imam Ali', sub: 'The Camel, Siffin, the arbitration, Nahrawan, cursing from the pulpits' },
    muaviye: { title: 'Who Is Mu\'awiya?', sub: 'His family, Siffin against Imam Ali, his treaty with Imam Hasan, and his rule' },
    imamlar: { title: 'The Imams and Karbala', sub: 'Imam Hasan, Maytham al-Tammar, Karbala, the imams' },
    mezhep: { title: 'Schools of Thought and Differences in Worship', sub: 'The birth of the schools, Imam Ja\'far al-Sadiq, mut\'a, ablution, the call to prayer and other differences' },
  },
  ar: {
    ehlibeyt: { title: 'أهل البيت وغدير خم', sub: 'الكساء، المباهلة، من هو الإمام علي، خيبر، تبوك، غدير خم' },
    hilafet: { title: 'بعد النبي: الخلافة', sub: 'الكتاب والقرطاس، السقيفة، الاستخلاف والشورى، عهد الخليفة عثمان' },
    fatima: { title: 'السيدة فاطمة (ع)', sub: 'حق فدك، أيام الزهراء، الدفن ليلاً والقبر المخفي' },
    ali: { title: 'عهد الإمام علي (ع)', sub: 'الجمل، صفين، التحكيم، النهروان، سبّ الإمام على المنابر' },
    muaviye: { title: 'من هو معاوية؟', sub: 'أسرته، صفين ضد الإمام علي، صلحه مع الإمام الحسن وحكمه' },
    imamlar: { title: 'الأئمة وكربلاء', sub: 'الإمام الحسن، ميثم التمار، كربلاء، الأئمة' },
    mezhep: { title: 'المذاهب والفروق في العبادة', sub: 'نشأة المذاهب، الإمام جعفر الصادق (ع)، المتعة، الوضوء، الأذان وفروق أخرى' },
  },
  az: {
    ehlibeyt: { title: 'Əhli-Beyt və Qədir', sub: 'Kisa, Mübahilə, Həzrət Əli kimdir, Xeybər, Təbuk, Qədir-Xum' },
    hilafet: { title: 'Peyğəmbərdən sonra: Xilafət', sub: 'Qələm və kağız, Səqifə, təyinatla xilafət və Şura, xəlifə Osman dövrü' },
    fatima: { title: 'Həzrət Fatimə', sub: 'Fədək haqqı, Fatimə günləri, gecə dəfni və gizli qəbir' },
    ali: { title: 'Həzrət Əli dövrü', sub: 'Cəməl, Siffeyn, hakimlik, Nəhrəvan, minbərlərdə söyüş' },
    muaviye: { title: 'Müaviyə kimdir?', sub: 'Ailəsi, Həzrət Əliyə qarşı Siffeyn, Həzrət Həsənlə sülhü və hakimiyyəti' },
    imamlar: { title: 'İmamlar və Kərbəla', sub: 'Həzrət Həsən, Meysəm Tammar, Kərbəla, imamlar' },
    mezhep: { title: 'Məzhəblər və ibadət fərqləri', sub: 'Məzhəblərin yaranması, Həzrət Cəfər Sadiq, müt\'ə, dəstəmaz, azan və digər fərqlər' },
  },
  fa: {
    ehlibeyt: { title: 'اهل بیت و غدیر', sub: 'کساء، مباهله، امام علی کیست، خیبر، تبوک، غدیر خم' },
    hilafet: { title: 'پس از پیامبر: خلافت', sub: 'قلم و کاغذ، سقیفه، جانشینی با انتصاب و شورا، دوران خلیفه عثمان' },
    fatima: { title: 'حضرت فاطمه (س)', sub: 'حق فدک، ایام فاطمیه، تدفین شبانه و قبر پنهان' },
    ali: { title: 'دوران امام علی (ع)', sub: 'جمل، صفین، حکمیت، نهروان، دشنام بر منبرها' },
    muaviye: { title: 'معاویه کیست؟', sub: 'خاندان او، صفین در برابر امام علی، صلح با امام حسن و حکومت او' },
    imamlar: { title: 'امامان و کربلا', sub: 'امام حسن، میثم تمار، کربلا، امامان' },
    mezhep: { title: 'مذاهب و تفاوت‌های عبادی', sub: 'پیدایش مذاهب، امام جعفر صادق (ع)، متعه، وضو، اذان و تفاوت‌های دیگر' },
  },
  es: {
    ehlibeyt: { title: 'Ahl al-Bayt y Gadir', sub: 'El Manto, la Mubahala, quién es el Imam Ali, Jaybar, Tabuk, Gadir Jum' },
    hilafet: { title: 'Después del Profeta: el califato', sub: 'La pluma y el papel, Saqifa, el nombramiento y la Shura, la época del califa Otmán' },
    fatima: { title: 'Fátima', sub: 'El derecho a Fadak, los días de Fátima, el entierro nocturno y la tumba oculta' },
    ali: { title: 'La época del Imam Ali', sub: 'El Camello, Siffín, el arbitraje, Nahrawán, la maldición desde los púlpitos' },
    muaviye: { title: '¿Quién es Muawiya?', sub: 'Su familia, Siffín contra el Imam Ali, su pacto con el Imam Hasan y su gobierno' },
    imamlar: { title: 'Los imames y Kerbala', sub: 'El Imam Hasan, Maytham al-Tammar, Kerbala, los imames' },
    mezhep: { title: 'Escuelas y diferencias en el culto', sub: 'El nacimiento de las escuelas, el Imam Yafar as-Sadiq, la mut\'a, la ablución, la llamada a la oración y otras diferencias' },
  },
  fr: {
    ehlibeyt: { title: 'Les Ahl al-Bayt et Ghadîr', sub: 'Le Manteau, la Mubâhala, qui est l\'imam Ali, Khaybar, Tabûk, Ghadîr Khumm' },
    hilafet: { title: 'Après le Prophète : le califat', sub: 'Le calame et le papier, Saqîfa, la désignation et la Shûrâ, l\'époque du calife ʿUthmân' },
    fatima: { title: 'Fâtima', sub: 'Le droit sur Fadak, les jours de Fâtima, l\'inhumation nocturne et la tombe cachée' },
    ali: { title: 'L\'époque de l\'imam Ali', sub: 'Le Chameau, Siffîn, l\'arbitrage, Nahrawân, la malédiction en chaire' },
    muaviye: { title: 'Qui est Muʿâwiya ?', sub: 'Sa famille, Siffîn contre l\'imam Ali, son accord avec l\'imam Hasan et son pouvoir' },
    imamlar: { title: 'Les imams et Karbala', sub: 'L\'imam Hasan, Maytham al-Tammâr, Karbala, les imams' },
    mezhep: { title: 'Écoles et différences dans le culte', sub: 'La naissance des écoles, l\'imam Jaʿfar al-Sâdiq, la mutʿa, les ablutions, l\'appel à la prière et d\'autres différences' },
  },
  de: {
    ehlibeyt: { title: 'Die Ahl al-Bait und Ghadir', sub: 'Der Mantel, die Mubahala, wer ist Imam Ali, Chaibar, Tabuk, Ghadir Chumm' },
    hilafet: { title: 'Nach dem Propheten: das Kalifat', sub: 'Feder und Papier, Saqifa, Ernennung und Schura, die Zeit des Kalifen Uthman' },
    fatima: { title: 'Fatima', sub: 'Das Recht auf Fadak, die Tage Fatimas, die nächtliche Bestattung und das verborgene Grab' },
    ali: { title: 'Die Zeit von Imam Ali', sub: 'Die Kamelschlacht, Siffin, das Schiedsverfahren, Nahrawan, der Fluch von den Kanzeln' },
    muaviye: { title: 'Wer ist Muawiya?', sub: 'Seine Familie, Siffin gegen Imam Ali, sein Vertrag mit Imam Hasan und seine Herrschaft' },
    imamlar: { title: 'Die Imame und Kerbela', sub: 'Imam Hasan, Maytham at-Tammar, Kerbela, die Imame' },
    mezhep: { title: 'Rechtsschulen und Unterschiede im Gottesdienst', sub: 'Die Entstehung der Schulen, Imam Dschafar as-Sadiq, die Mut\'a, die Waschung, der Gebetsruf und weitere Unterschiede' },
  },
};

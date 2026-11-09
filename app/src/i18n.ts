import type { L, Lang } from './types';
import { applyLocale } from './locales/apply';

let cur: Lang = 'tr';
export const setLang = (l: Lang) => { cur = l; applyLocale(l); };
export const getLang = (): Lang => cur;
export const isRtl = (l: Lang = cur) => l === 'ar' || l === 'fa' || l === 'ur';

// İçerik metni: seçili dil → İngilizce → Türkçe
export function tx(v: L | string | undefined): string {
  if (!v) return '';
  if (typeof v === 'string') return v;
  return v[cur as keyof L] ?? v.en ?? v.tr;
}

const UI: Record<string, L> = {
  appName: { tr: 'HAKİKAT YOLU', en: 'PATH OF TRUTH' },
  tagline: { tr: 'İslam tarihinin kırılma anları, kaynaklarıyla', en: 'The turning points of Islamic history, with their sources' },
  events: { tr: 'Olaylar', en: 'Events' },
  method: { tr: 'Kaynaklar ve yöntem', en: 'Sources & method' },
  back: { tr: 'Geri', en: 'Back' },
  homeBtn: { tr: 'Ana sayfa', en: 'Home' },
  nextEvent: { tr: 'Sonraki olay', en: 'Next event' },
  sunniSources: { tr: 'Sünni kaynaklarında', en: 'In Sunni sources' },
  shiaSources: { tr: 'Şii kaynaklarında', en: 'In Shia sources' },
  disputes: { tr: 'Ayrılıklar', en: 'Points of disagreement' },
  sunniView: { tr: 'Sünni yorum', en: 'Sunni view' },
  shiaView: { tr: 'Şii yorum', en: 'Shia view' },
  think: { tr: 'Düşünelim', en: 'Let us reflect' },
  story: { tr: 'Hikâye', en: 'Story' },
  verified: { tr: 'Doğrulandı', en: 'Verified' },
  check: { tr: 'Kontrol edilmeli', en: 'To be checked' },
  grade: { tr: 'Sıhhat', en: 'Grading' },
  summary: { tr: 'Özet', en: 'Summary' },
  notes: { tr: 'Özet notlar', en: 'Key notes' },
  video: { tr: 'Olay videosu', en: 'Event video' },
  videoHint: { tr: 'Oynat düğmesine bas; tam ekran düğmesiyle videoyu yan çevirip izleyebilirsin.', en: 'Press play; use the fullscreen button to watch it in landscape.' },
  next: { tr: 'Kaydır', en: 'Swipe' },
  duas: { tr: 'Dualar ve Ziyaretler', en: 'Prayers & Ziyarat' },
  duasSub: { tr: 'Ayetü\'l-Kürsî, Cevşen, Ziyâret-i Âşûrâ, İmam-ı Zaman duası ve daha fazlası: Arapça, okunuş ve anlam', en: 'Arabic, transliteration and meaning' },
  maps: { tr: 'Haritalar', en: 'Maps' },
  imams: { tr: 'On İki İmam', en: 'The Twelve Imams' },
  imamsKicker: { tr: 'EHL-İ BEYT İMAMLARI', en: 'IMAMS OF THE AHL AL-BAYT' },
  imamsSub: { tr: 'Her imamın künyesi, lakapları, tarihleri ve karakteristik özellikleri; Hz. Ca\'fer-i Sâdık için öğrencileri ve mezheplerle ilişkisi.', en: 'Names, epithets, dates and traits of each imam.' },
  imamsShort: { tr: 'Lakapları ve özellikleri; Hz. Ca\'fer-i Sâdık\'ın öğrencileri', en: 'Epithets and traits of each imam' },
  imamsNote: { tr: 'Künye, tarih ve lakap bilgileri Şii biyografi geleneği ve TDV İslâm Ansiklopedisi\'ndeki genel anlatımlardan özetlenmiştir; kaynaklarda küçük farklar vardır. Yayın öncesinde birincil kaynaklardan kontrol edilmelidir.', en: 'Summarised from general accounts; check primary sources.' },
  qibla: { tr: 'Kıble Pusulası', en: 'Qibla Compass' },
  qiblaSub: { tr: 'Bulunduğun yerden Kâbe yönünü gösterir.', en: 'Shows the direction of the Kaaba from where you are.' },
  qiblaShort: { tr: 'Kâbe yönünü bul', en: 'Find the direction of the Kaaba' },
  qiblaKicker: { tr: 'YÖNÜNÜ BUL', en: 'FIND YOUR DIRECTION' },
  qiblaStatDir: { tr: 'KIBLE', en: 'QIBLA' },
  qiblaStatDist: { tr: 'MESAFE', en: 'DISTANCE' },
  qiblaStatCompass: { tr: 'PUSULA', en: 'COMPASS' },
  qiblaCompassOn: { tr: 'aktif', en: 'active' },
  qiblaCompassWait: { tr: 'bekleniyor', en: 'waiting' },
  qiblaAsk: { tr: 'Konum izni isteniyor…', en: 'Asking for location permission…' },
  qiblaLocating: { tr: 'Konumun bulunuyor…', en: 'Finding your location…' },
  qiblaDenied: { tr: 'Konum izni kapalı. Kıble hesabı için izin gerekir; ayarlardan konum iznini açıp tekrar dene. Konum yalnızca telefonunda kullanılır.', en: 'Location permission is off. Allow it in settings and try again. Location stays on your phone.' },
  qiblaError: { tr: 'Konum gelmedi. Konum servisini açıp tekrar dene; izin verilmiş olsa da sinyal gecikebilir.', en: 'Location did not arrive. Turn location on and try again.' },
  qiblaRetry: { tr: 'Tekrar dene', en: 'Try again' },
  qiblaNoHeading: { tr: 'Pusula verisi bekleniyor…', en: 'Waiting for compass…' },
  qiblaOk: { tr: 'Kıble yönündesin ✓', en: 'You are facing the qibla ✓' },
  qiblaRight: { tr: 'Sağa dön: {n}°', en: 'Turn right: {n}°' },
  qiblaLeft: { tr: 'Sola dön: {n}°', en: 'Turn left: {n}°' },
  qiblaBearing: { tr: 'Kıble: kuzeyden {n}° ({d})', en: 'Qibla: {n}° from north ({d})' },
  qiblaDistance: { tr: "Kâbe'ye uzaklık: yaklaşık {n} km", en: 'Distance to the Kaaba: about {n} km' },
  qiblaHint: { tr: 'Telefonu düz yatırabilir ya da karşında dik tutabilirsin. Ok, baktığın yönü gösterir. Metalden ve manyetik kılıftan uzak dur.', en: 'Hold the phone flat or upright. The arrow shows the way you are facing.' },
  qiblaCalTitle: { tr: 'PUSULAYI KALİBRE ET', en: 'CALIBRATE THE COMPASS' },
  qiblaCal: { tr: 'Pusula güvenilir değil. Telefonu havada yavaşça 8 çizer gibi gezdir, sonra yine kıbleye dön.', en: 'The compass is unreliable. Move the phone slowly in a figure eight, then face the qibla again.' },
  qiblaPrivacy: { tr: 'Konumun hiçbir yere gönderilmez ve kaydedilmez; yön yalnızca telefonunda hesaplanır.', en: 'Your location is never sent or stored; the direction is calculated on your phone.' },
  mapsSub: { tr: 'Olayların geçtiği yerler, kuş bakışı', en: 'Where the events happened, from above' },
  seeMap: { tr: 'Haritada gör', en: 'See on the map' },
  openEvent: { tr: 'Olayı oku', en: 'Read the event' },
  distances: { tr: 'Mesafeler', en: 'Distances' },
  roadNote: { tr: 'Yol notu', en: 'Route note' },
  search: { tr: 'Olay, yer veya kişi ara', en: 'Search an event, place or name' },
  noResult: { tr: 'Bu aramayla eşleşen olay yok.', en: 'No event matches this search.' },
  scene: { tr: 'Sahne', en: 'Scene' },
  prev: { tr: 'Önceki', en: 'Previous' },
  nextScene: { tr: 'Sonraki', en: 'Next' },
  kicker: { tr: 'EHL-İ BEYT', en: 'AHL AL-BAYT' },
  arabic: { tr: 'Arapça', en: 'Arabic' },
  okunus: { tr: 'Okunuş', en: 'Transliteration' },
  meal: { tr: 'Anlam (meal)', en: 'Meaning' },
  duaSource: { tr: 'Arapça metnin kaynağı', en: 'Source of the Arabic text' },
  acceptBoth: { tr: 'Kabul eden: Sünni ve Şii', en: 'Accepted by: Sunni and Shia' },
  acceptShia: { tr: 'Kabul eden: Şii', en: 'Accepted by: Shia' },
  acceptSunni: { tr: 'Kabul eden: Sünni', en: 'Accepted by: Sunni' },
  none: { tr: 'Bu olay için bu kaynak grubunda kayıt yok.', en: 'No entry in this group of sources.' },
};
export const LANGUAGES: readonly { id: Lang; name: string; title: string; confirm: string }[] = [
  { id: 'tr', name: 'Türkçe', title: 'Dil seç', confirm: 'Devam et' },
  { id: 'en', name: 'English', title: 'Choose a language', confirm: 'Continue' },
  { id: 'ar', name: 'العربية', title: 'اختر اللغة', confirm: 'متابعة' },
  { id: 'az', name: 'Azərbaycanca', title: 'Dil seçin', confirm: 'Davam et' },
  { id: 'fa', name: 'فارسی', title: 'انتخاب زبان', confirm: 'ادامه' },
  { id: 'es', name: 'Español', title: 'Elige un idioma', confirm: 'Continuar' },
  { id: 'fr', name: 'Français', title: 'Choisir une langue', confirm: 'Continuer' },
  { id: 'de', name: 'Deutsch', title: 'Sprache wählen', confirm: 'Weiter' },
];

export const languageOption = (id: string | null) =>
  LANGUAGES.find(option => option.id === id) ?? LANGUAGES[0];

const navigation: Record<string, L> = {
  settings: { tr: 'Ayarlar', en: 'Settings', ar: 'الإعدادات', az: 'Parametrlər', fa: 'تنظیمات', ur: 'ترتیبات', es: 'Ajustes', fr: 'Paramètres', de: 'Einstellungen' },
  saveLanguage: { tr: 'Dili kaydet', en: 'Save language', ar: 'احفظ اللغة', az: 'Dili yadda saxla', fa: 'ذخیره زبان', ur: 'زبان محفوظ کریں', es: 'Guardar idioma', fr: 'Enregistrer la langue', de: 'Sprache speichern' },
  back: { tr: 'Geri', en: 'Back', ar: 'رجوع', az: 'Geri', fa: 'بازگشت', es: 'Atrás', fr: 'Retour', de: 'Zurück' },
  homeBtn: { tr: 'Ana sayfa', en: 'Home', ar: 'الرئيسية', az: 'Ana səhifə', fa: 'خانه', es: 'Inicio', fr: 'Accueil', de: 'Startseite' },
  events: { tr: 'Olaylar', en: 'Events', ar: 'الأحداث', az: 'Hadisələr', fa: 'رویدادها', es: 'Eventos', fr: 'Événements', de: 'Ereignisse' },
  nextScene: { tr: 'Sonraki', en: 'Next', ar: 'التالي', az: 'Növbəti', fa: 'بعدی', es: 'Siguiente', fr: 'Suivant', de: 'Weiter' },
  prev: { tr: 'Önceki', en: 'Previous', ar: 'السابق', az: 'Əvvəlki', fa: 'قبلی', es: 'Anterior', fr: 'Précédent', de: 'Zurück' },
  maps: { tr: 'Haritalar', en: 'Maps', ar: 'الخرائط', az: 'Xəritələr', fa: 'نقشه‌ها', es: 'Mapas', fr: 'Cartes', de: 'Karten' },
  method: { tr: 'Kaynaklar ve yöntem', en: 'Sources & method', ar: 'المصادر والمنهج', az: 'Mənbələr və metod', fa: 'منابع و روش', es: 'Fuentes y método', fr: 'Sources et méthode', de: 'Quellen und Methode' },
  imams: { tr: 'On İki İmam', en: 'The Twelve Imams', ar: 'الأئمة الاثنا عشر', az: 'On iki imam', fa: 'دوازده امام', es: 'Los doce imanes', fr: 'Les douze imams', de: 'Die zwölf Imame' },
  duas: { tr: 'Dualar ve Ziyaretler', en: 'Prayers & Ziyarat', ar: 'الأدعية والزيارات', az: 'Dualar və ziyarətlər', fa: 'دعاها و زیارت‌ها', es: 'Oraciones y ziyarat', fr: 'Prières et ziyarat', de: 'Gebete und Ziyarat' },
  qibla: { tr: 'Kıble Pusulası', en: 'Qibla Compass', ar: 'بوصلة القبلة', az: 'Qiblə kompası', fa: 'قبله‌نما', es: 'Brújula de la alquibla', fr: 'Boussole de la qibla', de: 'Qibla-Kompass' },
};

export const ui = (k: keyof typeof UI) => tx(navigation[k] ?? UI[k]);

// Çok dilli metin: tr zorunlu, diğerleri sonradan eklenir (yoksa en → tr).
export type Lang = 'tr' | 'en' | 'ar' | 'fa' | 'ur';
export type L = { tr: string } & Partial<Record<Exclude<Lang, 'tr'>, string>>;

// 'verified' = metin/numara kaynağından okunup doğrulandı; 'check' = yayın öncesi birincil kaynaktan kontrol edilmeli.
export type Source = {
  book: string;
  ref: string;
  says: L; // kaynağın ne anlattığı (kısa, sadık özet)
  grade?: L; // sıhhat / güvenirlik notu
  url?: string;
  status: 'verified' | 'check';
};

export type ActorKind = 'prophet' | 'ali' | 'fatima' | 'woman' | 'man' | 'crowd' | 'hasan' | 'husayn';
export type Actor = { kind: ActorKind; x: number; label?: L; pose?: 'stand' | 'raise' | 'sit'; scale?: number; color?: string };
// bg: gerçekçi arka plan anahtarı (assets/art/<bg>.jpg). Kutsal şahsiyetler (prophet, ali, fatima, hasan, husayn) yüzsüz siluet değil, nur (ışık) olarak çizilir.
export type BgKey = 'dune-day' | 'dune-dusk' | 'night' | 'oasis' | 'caravan' | 'city' | 'interior' | 'battle' | 'mountain' | 'river' | 'dawn';
export type Art = {
  bg: BgKey;
  props?: ('sun' | 'moon' | 'stars' | 'palms' | 'tents' | 'camels' | 'minbar' | 'flags' | 'swords' | 'well' | 'scroll')[];
  actors: Actor[];
};

// by: sahnedeki anlatımı hangi mezhebin kaynakları kabul eder ('both' = hem Sünni hem Şii kaynaklarında; 'shia' = yalnız Şii kaynaklarında; 'sunni' = yalnız Sünni kaynaklarında).
export type Accept = 'both' | 'shia' | 'sunni';
export type Scene = { text: L; art: Art; by?: Accept };
export type Dispute = { title: L; sunni: L; shia: L };

export type HistEvent = {
  id: string;
  date: L;
  title: L;
  hook: L;
  key?: L; // anahtar cümle
  notes?: L[]; // olay sonu özet notları (madde madde)
  scenes: Scene[];
  sunni: Source[]; // Sünni kaynaklarında geçenler
  shia: Source[]; // Şii kaynaklarında geçenler
  disputes?: Dispute[]; // "Ayrılıklar": yorum ve rivayet farkları
  questions: L[]; // Düşünelim
  summary: L; // tek cümlelik özet
};

// ---- Dualar ----
// Her dua bölümlere ayrılır; her bölümde Arapça metin, Türkçe okunuş ve Türkçe anlam (meal) bulunur.
export type DuaPart = { ar: string; okunus: string; meal: string; heading?: string };
export type Dua = {
  id: string;
  title: L;
  subtitle?: L;
  when?: string; // ne zaman okunur (kısa Türkçe not)
  intro?: string; // kısa tanıtım
  parts: DuaPart[];
  source: string; // Arapça metnin alındığı kaynak/sayfa
  url?: string;
  status: 'verified' | 'check'; // 'verified': Arapça metin güvenilir bir sayfadan bu çalışmada okunup alındı
  note?: string; // eksik/uyarı notu (örn. 'Yalnızca ilk bölümler eklendi')
};

// ---- Ayetler ----
export type Verse = { sure: string; ayah: number; ar: string; meal: string };

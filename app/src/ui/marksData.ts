// Saf (React Native'siz) kayıt biçimi: node testleriyle denetlenir.
export type UserNote = { eventId: string; scene: number; text: string; updatedAt: number };
export type Favorite = { eventId: string; scene: number; savedAt: number };
export type Marker = { eventId: string; scene: number; savedAt: number };

export type Stored = { marker: Marker | null; favorites: Favorite[]; notes: UserNote[]; quizBest: Record<string, number> };

export const sameScene = (a: { eventId: string; scene: number }, eventId: string, scene: number) => a.eventId === eventId && a.scene === scene;
export const isScene = (x: unknown): x is { eventId: string; scene: number } =>
  !!x && typeof (x as { eventId?: unknown }).eventId === 'string' && Number.isInteger((x as { scene?: unknown }).scene);

// Eski kayıt (1.0.2): birden çok "bookmarks" ve otomatik "last". Yer imleri favorilere taşınır;
// otomatik "son bakılan" artık kullanılmaz, böylece "devam et" yalnızca kullanıcının işaretine bağlıdır.
export function parseStored(raw: string | null): Stored {
  if (!raw) return { marker: null, favorites: [], notes: [], quizBest: {} };
  try {
    const d = JSON.parse(raw) as Record<string, unknown>;
    const notes = Array.isArray(d.notes)
      ? (d.notes as UserNote[]).filter(n => isScene(n) && typeof n.text === 'string' && n.text.trim())
      : [];
    const legacy = Array.isArray(d.bookmarks) ? (d.bookmarks as Favorite[]).filter(isScene) : [];
    const current = Array.isArray(d.favorites) ? (d.favorites as Favorite[]).filter(isScene) : [];
    const favorites: Favorite[] = [];
    for (const f of [...current, ...legacy]) {
      if (!favorites.some(x => sameScene(x, f.eventId, f.scene))) {
        favorites.push({ eventId: f.eventId, scene: f.scene, savedAt: Number(f.savedAt) || Date.now() });
      }
    }
    const marker = isScene(d.marker) ? { eventId: d.marker.eventId, scene: d.marker.scene, savedAt: Number((d.marker as Marker).savedAt) || Date.now() } : null;
    const quizBest: Record<string, number> = {};
    if (d.quizBest && typeof d.quizBest === 'object') {
      for (const [k, v] of Object.entries(d.quizBest as Record<string, unknown>)) if (Number.isFinite(v)) quizBest[k] = Number(v);
    }
    return { marker, favorites, notes, quizBest };
  } catch {
    return { marker: null, favorites: [], notes: [], quizBest: {} };
  }
}


import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Kullanıcının yerel işaretleri: tek "kaldığım yer" işareti, favori sahneler, notlar ve test sonuçları.
// Hepsi yalnızca bu cihazda (AsyncStorage) saklanır.
import { type Favorite, type Marker, type UserNote, parseStored, sameScene } from './marksData';
export type { Favorite, Marker, UserNote } from './marksData';

const KEY = 'hakikat-yolu:marks';

type State = {
  ready: boolean;
  marker: Marker | null;
  favorites: Favorite[];
  notes: UserNote[];
  quizBest: Record<string, number>;
};

const empty: State = { ready: false, marker: null, favorites: [], notes: [], quizBest: {} };
let state: State = { ...empty };
const listeners = new Set<() => void>();
let loadOnce: Promise<void> | null = null;

const emit = () => { for (const fn of listeners) fn(); };

function load() {
  if (!loadOnce) {
    loadOnce = AsyncStorage.getItem(KEY)
      .then(raw => {
        const parsed = parseStored(raw);
        state = { ready: true, ...parsed };
        // Eski biçimden geldiyse yeni biçimde yeniden yaz (bookmarks/last/recents alanları düşer).
        if (raw && raw.includes('"bookmarks"')) persist();
        emit();
      })
      .catch(() => { state = { ...empty, ready: true }; emit(); });
  }
  return loadOnce;
}

function persist() {
  const { marker, favorites, notes, quizBest } = state;
  void AsyncStorage.setItem(KEY, JSON.stringify({ v: 2, marker, favorites, notes, quizBest })).catch(() => {});
}

function set(next: Partial<State>) {
  state = { ...state, ...next };
  persist();
  emit();
}

export function useMarks() {
  const [, tick] = useState(0);
  useEffect(() => {
    const fn = () => tick(n => n + 1);
    listeners.add(fn);
    void load();
    return () => { listeners.delete(fn); };
  }, []);
  return state;
}

export const noteOf = (eventId: string, scene: number) => state.notes.find(n => sameScene(n, eventId, scene));
export const isFavorite = (eventId: string, scene: number) => state.favorites.some(f => sameScene(f, eventId, scene));
export const isMarker = (eventId: string, scene: number) => !!state.marker && sameScene(state.marker, eventId, scene);

export function saveNote(eventId: string, scene: number, text: string) {
  const trimmed = text.trim();
  const rest = state.notes.filter(n => !sameScene(n, eventId, scene));
  set({ notes: trimmed ? [{ eventId, scene, text: trimmed, updatedAt: Date.now() }, ...rest] : rest });
}

export function deleteNote(eventId: string, scene: number) {
  set({ notes: state.notes.filter(n => !sameScene(n, eventId, scene)) });
}

// Tek işaret: yeni sahnede işaretlemek eskisinin yerine geçer; aynı sahnede tekrar basmak kaldırır.
export function toggleMarker(eventId: string, scene: number) {
  set({ marker: isMarker(eventId, scene) ? null : { eventId, scene, savedAt: Date.now() } });
}

export function clearMarker() {
  if (state.marker) set({ marker: null });
}

export function toggleFavorite(eventId: string, scene: number) {
  set({
    favorites: isFavorite(eventId, scene)
      ? state.favorites.filter(f => !sameScene(f, eventId, scene))
      : [{ eventId, scene, savedAt: Date.now() }, ...state.favorites],
  });
}

export function removeFavorite(eventId: string, scene: number) {
  if (isFavorite(eventId, scene)) toggleFavorite(eventId, scene);
}

export function recordQuiz(eventId: string, score: number) {
  if ((state.quizBest[eventId] ?? -1) >= score) return;
  set({ quizBest: { ...state.quizBest, [eventId]: score } });
}

void load();

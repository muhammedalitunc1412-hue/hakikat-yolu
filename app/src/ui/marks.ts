import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { rememberScene } from './scrollMemory';

const KEY = 'hakikat-yolu:marks';

export type UserNote = { eventId: string; scene: number; text: string; updatedAt: number };
export type Bookmark = { eventId: string; scene: number; savedAt: number };
export type LastScene = { eventId: string; scene: number; at: number };

type State = {
  ready: boolean;
  notes: UserNote[];
  bookmarks: Bookmark[];
  last: LastScene | null;
  recents: Record<string, number>;
};

const empty: State = { ready: false, notes: [], bookmarks: [], last: null, recents: {} };
let state: State = { ...empty };
const listeners = new Set<() => void>();
let loadOnce: Promise<void> | null = null;

function emit() {
  for (const fn of listeners) fn();
}

function hydrate(recents: Record<string, number>) {
  for (const [id, i] of Object.entries(recents)) {
    if (Number.isFinite(i) && i >= 0) rememberScene('event:' + id, i);
  }
}

function load() {
  if (!loadOnce) {
    loadOnce = AsyncStorage.getItem(KEY)
      .then(raw => {
        if (!raw) { state = { ...empty, ready: true }; emit(); return; }
        try {
          const d = JSON.parse(raw) as Partial<State>;
          const notes = Array.isArray(d.notes) ? d.notes.filter(n => n && typeof n.text === 'string' && n.eventId) : [];
          const bookmarks = Array.isArray(d.bookmarks) ? d.bookmarks.filter(b => b && b.eventId && Number.isFinite(b.scene)) : [];
          const recents = d.recents && typeof d.recents === 'object' ? d.recents : {};
          const last = d.last && d.last.eventId && Number.isFinite(d.last.scene) ? d.last : null;
          state = { ready: true, notes, bookmarks, last, recents };
          hydrate(recents);
        } catch {
          state = { ...empty, ready: true };
        }
        emit();
      })
      .catch(() => { state = { ...empty, ready: true }; emit(); });
  }
  return loadOnce;
}

function persist() {
  const { notes, bookmarks, last, recents } = state;
  void AsyncStorage.setItem(KEY, JSON.stringify({ notes, bookmarks, last, recents })).catch(() => {});
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

export function noteOf(eventId: string, scene: number): UserNote | undefined {
  return state.notes.find(n => n.eventId === eventId && n.scene === scene);
}

export function isBookmarked(eventId: string, scene: number): boolean {
  return state.bookmarks.some(b => b.eventId === eventId && b.scene === scene);
}

export function saveNote(eventId: string, scene: number, text: string) {
  const trimmed = text.trim();
  const updatedAt = Date.now();
  const rest = state.notes.filter(n => !(n.eventId === eventId && n.scene === scene));
  state = {
    ...state,
    notes: trimmed ? [{ eventId, scene, text: trimmed, updatedAt }, ...rest].sort((a, b) => b.updatedAt - a.updatedAt) : rest,
  };
  persist();
  emit();
}

export function deleteNote(eventId: string, scene: number) {
  state = { ...state, notes: state.notes.filter(n => !(n.eventId === eventId && n.scene === scene)) };
  persist();
  emit();
}

export function toggleBookmark(eventId: string, scene: number) {
  const on = isBookmarked(eventId, scene);
  const bookmarks = on
    ? state.bookmarks.filter(b => !(b.eventId === eventId && b.scene === scene))
    : [{ eventId, scene, savedAt: Date.now() }, ...state.bookmarks];
  state = { ...state, bookmarks };
  persist();
  emit();
}

export function removeBookmark(eventId: string, scene: number) {
  if (!isBookmarked(eventId, scene)) return;
  toggleBookmark(eventId, scene);
}

export function markLastScene(eventId: string, scene: number) {
  const recents = { ...state.recents, [eventId]: scene };
  state = { ...state, last: { eventId, scene, at: Date.now() }, recents };
  persist();
  emit();
}

void load();

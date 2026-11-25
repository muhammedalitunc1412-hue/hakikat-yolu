import React from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View, Platform } from 'react-native';
import { EVENTS } from '../data/events';
import { tx, ui } from '../i18n';
import { Chevron, HeartIcon, NoteIcon } from './icons';
import { type Favorite, type UserNote, deleteNote, removeFavorite, useMarks } from './marks';
import { useScrollMemory } from './scrollMemory';
import { C, TOP, align, font, themedStyles } from './theme';

const webHit = Platform.OS === 'web' ? { cursor: 'pointer' as const } : null;

function Back({ onPress }: { onPress: () => void }) {
  return (
    <Pressable onPress={onPress} hitSlop={8} style={s.back} accessibilityRole="button">
      <Text style={s.backText}>‹  {ui('back')}</Text>
    </Pressable>
  );
}

function sceneLabel(eventId: string, scene: number) {
  const ev = EVENTS.find(e => e.id === eventId);
  const title = ev ? tx(ev.title) : eventId;
  return { title, line: `${ui('scene')} ${scene + 1}`, ok: !!ev };
}

export function NotesList({ onBack, onOpen }: { onBack: () => void; onOpen: (eventId: string, scene: number) => void }) {
  const sc = useScrollMemory('my-notes');
  const { notes, ready } = useMarks();
  return (
    <ScrollView {...sc} style={{ flex: 1, backgroundColor: C.bg }} contentContainerStyle={s.page}>
      <Back onPress={onBack} />
      <View style={s.headRow}>
        <View style={s.bubble}><NoteIcon size={22} /></View>
        <View style={{ flex: 1 }}>
          <Text accessibilityRole="header" style={[s.title, align()]}>{ui('myNotes')}</Text>
          <Text style={[s.sub, align()]}>{ui('myNotesSub')}</Text>
        </View>
      </View>
      {ready && notes.length === 0 && <Text style={[s.empty, align()]}>{ui('myNotesEmpty')}</Text>}
      {notes.map(n => <NoteRow key={n.eventId + ':' + n.scene} note={n} onOpen={onOpen} />)}
    </ScrollView>
  );
}

function NoteRow({ note, onOpen }: { note: UserNote; onOpen: (eventId: string, scene: number) => void }) {
  const { title, line, ok } = sceneLabel(note.eventId, note.scene);
  return (
    <Pressable
      onPress={() => ok && onOpen(note.eventId, note.scene)}
      accessibilityRole="button"
      style={({ pressed }) => [s.card, pressed && s.pressed, webHit]}
    >
      <View style={{ flex: 1 }}>
        <Text style={[s.cardTitle, align()]}>{title}</Text>
        <Text style={[s.cardMeta, align()]}>{line}</Text>
        <Text style={[s.preview, align()]} numberOfLines={3}>{note.text}</Text>
      </View>
      <View style={s.side}>
        <Pressable onPress={() => deleteNote(note.eventId, note.scene)} hitSlop={8} accessibilityRole="button" accessibilityLabel={ui('deleteNote')} style={s.iconBtn}>
          <Text style={s.del}>×</Text>
        </Pressable>
        <Chevron color={C.gold} />
      </View>
    </Pressable>
  );
}

export function FavoritesList({ onBack, onOpen }: { onBack: () => void; onOpen: (eventId: string, scene: number) => void }) {
  const sc = useScrollMemory('favorites');
  const { favorites, ready } = useMarks();
  return (
    <ScrollView {...sc} style={{ flex: 1, backgroundColor: C.bg }} contentContainerStyle={s.page}>
      <Back onPress={onBack} />
      <View style={s.headRow}>
        <View style={s.bubble}><HeartIcon size={22} /></View>
        <View style={{ flex: 1 }}>
          <Text accessibilityRole="header" style={[s.title, align()]}>{ui('favorites')}</Text>
          <Text style={[s.sub, align()]}>{ui('favoritesSub')}</Text>
        </View>
      </View>
      {ready && favorites.length === 0 && <Text style={[s.empty, align()]}>{ui('favoritesEmpty')}</Text>}
      {favorites.map(f => <FavoriteRow key={f.eventId + ':' + f.scene} fav={f} onOpen={onOpen} />)}
    </ScrollView>
  );
}

function FavoriteRow({ fav, onOpen }: { fav: Favorite; onOpen: (eventId: string, scene: number) => void }) {
  const { title, line, ok } = sceneLabel(fav.eventId, fav.scene);
  return (
    <Pressable
      onPress={() => ok && onOpen(fav.eventId, fav.scene)}
      accessibilityRole="button"
      style={({ pressed }) => [s.card, pressed && s.pressed, webHit]}
    >
      <HeartIcon size={20} filled />
      <View style={{ flex: 1 }}>
        <Text style={[s.cardTitle, align()]}>{title}</Text>
        <Text style={[s.cardMeta, align()]}>{line}</Text>
      </View>
      <Pressable onPress={() => removeFavorite(fav.eventId, fav.scene)} hitSlop={8} accessibilityRole="button" accessibilityLabel={ui('favRemove')} style={s.iconBtn}>
        <Text style={s.del}>×</Text>
      </Pressable>
      <Chevron color={C.gold} />
    </Pressable>
  );
}

const s = themedStyles(() => StyleSheet.create({
  page: { paddingHorizontal: 18, paddingTop: TOP, paddingBottom: 56 },
  back: { minHeight: 44, justifyContent: 'center', alignSelf: 'flex-start', marginBottom: 8 },
  backText: { color: C.gold, fontFamily: font.sans, fontSize: 16, fontWeight: '700' },
  headRow: { flexDirection: 'row', alignItems: 'center', gap: 14, marginBottom: 18 },
  bubble: { width: 48, height: 48, borderRadius: 24, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(228,197,106,0.12)', borderWidth: 1, borderColor: 'rgba(228,197,106,0.35)' },
  title: { color: C.cream, fontFamily: font.serif, fontSize: 28, lineHeight: 34, fontWeight: '700' },
  sub: { color: C.dim, fontFamily: font.sans, fontSize: 14, lineHeight: 20, marginTop: 4 },
  empty: { color: C.dim, fontFamily: font.sans, fontSize: 15, lineHeight: 22, marginTop: 12 },
  card: { flexDirection: 'row', alignItems: 'center', gap: 12, backgroundColor: C.card, borderRadius: 18, padding: 14, marginBottom: 10, borderWidth: 1, borderColor: C.lineStrong },
  pressed: { opacity: 0.86 },
  cardTitle: { color: C.cream, fontFamily: font.serif, fontSize: 17, fontWeight: '700' },
  cardMeta: { color: C.gold, fontFamily: font.sans, fontSize: 12, fontWeight: '700', marginTop: 3 },
  preview: { color: C.dim, fontFamily: font.sans, fontSize: 14, lineHeight: 20, marginTop: 6 },
  side: { alignItems: 'center', gap: 8 },
  iconBtn: { width: 32, height: 32, borderRadius: 16, alignItems: 'center', justifyContent: 'center' },
  del: { color: C.faint, fontSize: 22, fontWeight: '600', lineHeight: 24 },
}), { scale: false });

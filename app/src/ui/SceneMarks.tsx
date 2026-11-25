import React, { useEffect, useState } from 'react';
import { Alert, KeyboardAvoidingView, Modal, Platform, Pressable, Share, StyleSheet, Text, TextInput, View } from 'react-native';
import { tx, ui } from '../i18n';
import type { HistEvent } from '../types';
import { BookmarkIcon, HeartIcon, NoteIcon, ShareIcon } from './icons';
import { plain } from './search';
import { deleteNote, isFavorite, isMarker, noteOf, saveNote, toggleFavorite, toggleMarker, useMarks } from './marks';
import { C, PAGE_MAX, align, font, rowDir, themedStyles, useWide } from './theme';

const webHit = Platform.OS === 'web' ? { cursor: 'pointer' as const } : null;

export function SceneMarkBar({ ev, scene, extra }: { ev: HistEvent; scene: number; extra?: React.ReactNode }) {
  useMarks();
  const wide = useWide();
  const [editing, setEditing] = useState(false);
  const marked = isMarker(ev.id, scene);
  const fav = isFavorite(ev.id, scene);
  const note = noteOf(ev.id, scene);
  return (
    <>
      <View style={[s.bar, { flexDirection: rowDir() }]}>
        <ActionBtn
          on={marked}
          onPress={() => toggleMarker(ev.id, scene)}
          icon={<BookmarkIcon size={18} filled={marked} />}
          label={marked ? ui('markerRemove') : ui('markerSet')}
          wide={wide}
        />
        <ActionBtn
          on={fav}
          onPress={() => toggleFavorite(ev.id, scene)}
          icon={<HeartIcon size={18} filled={fav} />}
          label={fav ? ui('favRemove') : ui('favAdd')}
          wide={wide}
        />
        <ActionBtn
          on={!!note}
          onPress={() => setEditing(true)}
          icon={<NoteIcon size={18} filled={!!note} />}
          label={note ? ui('editNote') : ui('addNote')}
          wide={wide}
        />
        <ActionBtn onPress={() => void shareScene(ev, scene)} icon={<ShareIcon size={18} />} label={ui('shareScene')} wide={wide} />
        {extra}
      </View>
      {editing && <NoteEditor ev={ev} scene={scene} onClose={() => setEditing(false)} />}
    </>
  );
}

// Sahneyi paylaş: hikâye adı, sahne numarası, kısa metin ve uygulamanın adı (sistem paylaşım sayfası).
export function shareText(ev: HistEvent, scene: number, max = 280): string {
  const body = plain(tx(ev.scenes[scene]?.text ?? ''));
  let short = body;
  if (body.length > max) {
    const cut = body.lastIndexOf(' ', max);
    short = body.slice(0, cut > max * 0.6 ? cut : max).replace(/[\s,;:]+$/, '') + '…';
  }
  return `${plain(tx(ev.title))} · ${ui('scene')} ${scene + 1}\n\n${short}\n\n— ${ui('appTitle')}`;
}

async function shareScene(ev: HistEvent, scene: number) {
  try {
    await Share.share({ message: shareText(ev, scene), title: plain(tx(ev.title)) });
  } catch {
    // Kullanıcı vazgeçti ya da paylaşım sayfası açılamadı: sessizce geç.
  }
}

export function ActionBtn({ on, onPress, icon, label, wide }: { on?: boolean; onPress: () => void; icon: React.ReactNode; label: string; wide?: boolean }) {
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityState={on === undefined ? undefined : { selected: on }}
      accessibilityLabel={label}
      style={({ pressed }) => [s.btn, { flexDirection: rowDir() }, wide && { flexBasis: '22%' }, on && s.btnOn, pressed && { opacity: 0.85 }, webHit]}
    >
      {icon}
      <Text style={s.btnText} numberOfLines={2}>{label}</Text>
    </Pressable>
  );
}

function NoteEditor({ ev, scene, onClose }: { ev: HistEvent; scene: number; onClose: () => void }) {
  const existing = noteOf(ev.id, scene);
  const [text, setText] = useState(existing?.text ?? '');
  useEffect(() => { setText(existing?.text ?? ''); }, [ev.id, scene, existing?.text]);

  function save() {
    saveNote(ev.id, scene, text);
    onClose();
  }
  function remove() {
    Alert.alert(ui('deleteNote'), ui('confirmDeleteNote'), [
      { text: ui('contactCancel'), style: 'cancel' },
      { text: ui('deleteNote'), style: 'destructive', onPress: () => { deleteNote(ev.id, scene); onClose(); } },
    ]);
  }

  return (
    <Modal visible transparent animationType="fade" onRequestClose={onClose} statusBarTranslucent>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={s.modalRoot}>
        <Pressable style={StyleSheet.absoluteFill} onPress={onClose} accessibilityRole="button" accessibilityLabel={ui('close')} />
        <View style={s.sheet} accessibilityViewIsModal>
          <View style={s.grab} />
          <View style={s.head}>
            <Text accessibilityRole="header" style={s.title}>{existing ? ui('editNote') : ui('addNote')}</Text>
            <Pressable onPress={onClose} accessibilityRole="button" accessibilityLabel={ui('close')} hitSlop={10} style={s.close}>
              <Text style={s.closeText}>✕</Text>
            </Pressable>
          </View>
          <Text style={[s.sub, align()]}>{ui('scene')} {scene + 1}</Text>
          <TextInput
            value={text}
            onChangeText={setText}
            placeholder={ui('notePlaceholder')}
            placeholderTextColor={C.faint}
            multiline
            autoFocus
            textAlignVertical="top"
            style={[s.input, align()]}
            accessibilityLabel={ui('notePlaceholder')}
          />
          <Pressable onPress={save} accessibilityRole="button" style={({ pressed }) => [s.save, pressed && { opacity: 0.86 }]}>
            <Text style={s.saveText}>{ui('saveNote')}</Text>
          </Pressable>
          {existing && (
            <Pressable onPress={remove} accessibilityRole="button" style={({ pressed }) => [s.del, pressed && { opacity: 0.86 }]}>
              <Text style={s.delText}>{ui('deleteNote')}</Text>
            </Pressable>
          )}
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
}

const s = themedStyles(() => StyleSheet.create({
  bar: { flexWrap: 'wrap', gap: 8, paddingHorizontal: 18, paddingBottom: 10 },
  btn: { flexGrow: 1, flexBasis: '46%', minHeight: 44, alignItems: 'center', justifyContent: 'center', gap: 7, paddingHorizontal: 8, borderRadius: 14, borderWidth: 1, borderColor: C.lineStrong, backgroundColor: C.card },
  btnOn: { borderColor: C.gold, backgroundColor: 'rgba(228,197,106,0.12)' },
  btnText: { color: C.gold, fontFamily: font.sans, fontSize: 12.5, fontWeight: '700', flexShrink: 1 },
  modalRoot: { flex: 1, justifyContent: 'flex-end', alignItems: 'center', backgroundColor: 'rgba(4,12,11,0.62)' },
  sheet: { width: '100%', maxWidth: PAGE_MAX, backgroundColor: C.card, borderTopLeftRadius: 24, borderTopRightRadius: 24, borderTopWidth: 1, borderColor: C.lineStrong, paddingHorizontal: 20, paddingTop: 10, paddingBottom: 28 },
  grab: { alignSelf: 'center', width: 40, height: 4, borderRadius: 2, backgroundColor: C.lineStrong, marginBottom: 14 },
  head: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  title: { color: C.cream, fontFamily: font.serif, fontSize: 22, fontWeight: '700', flex: 1, paddingRight: 8 },
  close: { width: 36, height: 36, borderRadius: 18, alignItems: 'center', justifyContent: 'center', backgroundColor: C.card2 },
  closeText: { color: C.gold, fontSize: 15, fontWeight: '700' },
  sub: { color: C.dim, fontFamily: font.sans, fontSize: 13, marginTop: 4, marginBottom: 12 },
  input: { minHeight: 140, maxHeight: 240, borderRadius: 16, borderWidth: 1, borderColor: C.lineStrong, backgroundColor: C.bg, color: C.cream, fontFamily: font.sans, fontSize: 16, lineHeight: 24, padding: 14 },
  save: { marginTop: 14, minHeight: 52, alignItems: 'center', justifyContent: 'center', backgroundColor: C.gold, borderRadius: 16 },
  saveText: { color: C.ink, fontFamily: font.sans, fontSize: 16, fontWeight: '800' },
  del: { marginTop: 10, minHeight: 44, alignItems: 'center', justifyContent: 'center' },
  delText: { color: C.warn, fontFamily: font.sans, fontSize: 15, fontWeight: '700' },
}), { scale: false });

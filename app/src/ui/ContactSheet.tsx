import React from 'react';
import { Linking, Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import { ui } from '../i18n';
import { ChatIcon, Chevron, InstagramIcon, YouTubeIcon } from './icons';
import { C, PAGE_MAX, font, themedStyles } from './theme';

export const INSTAGRAM_URL = 'https://www.instagram.com/huseynimtnc/';
export const YOUTUBE_URL = 'https://www.youtube.com/@mirasyolu';

// "Bize ulaşın" için alttan açılan seçim penceresi: Instagram, YouTube ya da vazgeç.
export function ContactSheet({ visible, onClose }: { visible: boolean; onClose: () => void }) {
  const open = (url: string) => {
    onClose();
    void Linking.openURL(url).catch(() => {});
  };
  return (
    <Modal visible={visible} transparent animationType="fade" onRequestClose={onClose} statusBarTranslucent>
      <View style={m.root}>
        <Pressable style={StyleSheet.absoluteFill} onPress={onClose} accessibilityRole="button" accessibilityLabel={ui('contactCancel')} />
        <View style={m.sheet} accessibilityViewIsModal>
          <View style={m.grab} />
          <View style={m.head}>
            <View style={m.headIcon}><ChatIcon size={24} /></View>
            <View style={{ flex: 1 }}>
              <Text accessibilityRole="header" style={m.title}>{ui('contact')}</Text>
              <Text style={m.sub}>{ui('contactChoose')}</Text>
            </View>
          </View>
          <Pressable onPress={() => open(INSTAGRAM_URL)} accessibilityRole="link" accessibilityLabel="Instagram" style={({ pressed }) => [m.opt, pressed && { opacity: 0.85 }]}>
            <View style={m.optIcon}><InstagramIcon size={26} /></View>
            <View style={{ flex: 1 }}>
              <Text style={m.optTitle}>Instagram</Text>
              <Text style={m.optSub}>@huseynimtnc</Text>
            </View>
            <Chevron color={C.gold} />
          </Pressable>
          <Pressable onPress={() => open(YOUTUBE_URL)} accessibilityRole="link" accessibilityLabel="YouTube" style={({ pressed }) => [m.opt, pressed && { opacity: 0.85 }]}>
            <View style={m.optIcon}><YouTubeIcon size={26} /></View>
            <View style={{ flex: 1 }}>
              <Text style={m.optTitle}>YouTube</Text>
              <Text style={m.optSub}>@mirasyolu</Text>
            </View>
            <Chevron color={C.gold} />
          </Pressable>
          <Pressable onPress={onClose} accessibilityRole="button" style={({ pressed }) => [m.cancel, pressed && { opacity: 0.8 }]}>
            <Text style={m.cancelText}>{ui('contactCancel')}</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}

const m = themedStyles(() => StyleSheet.create({
  root: { flex: 1, justifyContent: 'flex-end', alignItems: 'center', backgroundColor: 'rgba(4,12,11,0.62)' },
  sheet: { width: '100%', maxWidth: PAGE_MAX, backgroundColor: C.card, borderTopLeftRadius: 24, borderTopRightRadius: 24, borderTopWidth: 1, borderColor: C.lineStrong, paddingHorizontal: 18, paddingTop: 10, paddingBottom: 26 },
  grab: { alignSelf: 'center', width: 40, height: 4, borderRadius: 2, backgroundColor: C.lineStrong, marginBottom: 16 },
  head: { flexDirection: 'row', alignItems: 'center', gap: 12, marginBottom: 16 },
  headIcon: { width: 46, height: 46, borderRadius: 23, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(228,197,106,0.12)', borderWidth: 1, borderColor: 'rgba(228,197,106,0.35)' },
  title: { color: C.cream, fontFamily: font.serif, fontSize: 22, fontWeight: '700' },
  sub: { color: C.dim, fontFamily: font.sans, fontSize: 14, lineHeight: 20, marginTop: 2 },
  opt: { flexDirection: 'row', alignItems: 'center', gap: 14, minHeight: 68, marginTop: 10, paddingHorizontal: 14, borderRadius: 18, borderWidth: 1.5, borderColor: C.gold, backgroundColor: 'rgba(228,197,106,0.08)' },
  optIcon: { width: 44, height: 44, borderRadius: 22, alignItems: 'center', justifyContent: 'center', backgroundColor: C.bg, borderWidth: 1, borderColor: C.lineStrong },
  optTitle: { color: C.cream, fontFamily: font.sans, fontSize: 17, fontWeight: '800' },
  optSub: { color: C.dim, fontFamily: font.sans, fontSize: 13, marginTop: 1 },
  cancel: { minHeight: 52, marginTop: 14, alignItems: 'center', justifyContent: 'center', borderRadius: 26, borderWidth: 1, borderColor: C.lineStrong },
  cancelText: { color: C.gold, fontFamily: font.sans, fontSize: 16, fontWeight: '700' },
}), { scale: false });

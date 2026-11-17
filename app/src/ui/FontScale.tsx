import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ui } from '../i18n';
import { C, PAGE_MAX, font, scaled, setFontScale, themedStyles } from './theme';

// Yazı boyutu: dört kademe, AsyncStorage'da saklanır, her sayfada geçerlidir.
export const FONT_SCALE_KEY = 'hakikat-yolu:font-scale';
export const FONT_STEPS = [
  { v: 0.9, label: 'fontSmall' },
  { v: 1, label: 'fontNormal' },
  { v: 1.15, label: 'fontLarge' },
  { v: 1.3, label: 'fontXLarge' },
] as const;
const nearest = (v: number) => FONT_STEPS.reduce((a, b) => (Math.abs(b.v - v) < Math.abs(a.v - v) ? b : a)).v;

type Ctx = { scale: number; setScale: (v: number) => void; openSheet: () => void };
const FontCtx = createContext<Ctx>({ scale: 1, setScale: () => {}, openSheet: () => {} });
export const useFontScale = () => useContext(FontCtx);

export function FontScaleProvider({ children }: { children: (scale: number) => React.ReactNode }) {
  const [scale, setScaleState] = useState(1);
  const [loaded, setLoaded] = useState(false);
  const [open, setOpen] = useState(false);
  // Çizimden önce modül çarpanını ayarla: stiller (themedStyles) bu değeri okur.
  setFontScale(scale);

  useEffect(() => {
    let alive = true;
    AsyncStorage.getItem(FONT_SCALE_KEY)
      .then(v => { const n = v ? Number(v) : NaN; if (alive && Number.isFinite(n)) setScaleState(nearest(n)); })
      .catch(() => {})
      .finally(() => { if (alive) setLoaded(true); });
    return () => { alive = false; };
  }, []);

  const setScale = useCallback((v: number) => {
    setScaleState(v);
    void AsyncStorage.setItem(FONT_SCALE_KEY, String(v)).catch(() => {});
  }, []);
  const openSheet = useCallback(() => setOpen(true), []);
  const value = useMemo(() => ({ scale, setScale, openSheet }), [scale, setScale, openSheet]);

  if (!loaded) return <View style={{ flex: 1, backgroundColor: C.bgDeep }} />;
  return (
    <FontCtx.Provider value={value}>
      {children(scale)}
      <FontSheet visible={open} onClose={() => setOpen(false)} scale={scale} setScale={setScale} />
    </FontCtx.Provider>
  );
}

// Altın yazı boyutu düğmesi: küçük ve büyük "A" + yukarı/aşağı oklar + "Yazı boyutu" etiketi.
// Ana sayfa başlığında ve diğer sayfaların alt çubuğunda durur.
export function FontButton({ compact }: { compact?: boolean }) {
  const { openSheet } = useFontScale();
  return (
    <Pressable
      onPress={openSheet}
      accessibilityRole="button"
      accessibilityLabel={ui('fontSize')}
      hitSlop={6}
      style={({ pressed }) => [b.btn, compact && b.compact, pressed && { opacity: 0.8 }]}
    >
      <View style={b.icon} accessibilityElementsHidden importantForAccessibility="no-hide-descendants">
        <Text style={b.small}>A</Text>
        <Text style={b.big}>A</Text>
        <View style={b.arrows}>
          <Text style={b.arrow}>▲</Text>
          <Text style={b.arrow}>▼</Text>
        </View>
      </View>
      <Text style={[b.label, compact && b.labelCompact]} numberOfLines={1}>{ui('fontSize')}</Text>
    </Pressable>
  );
}

function FontSheet({ visible, onClose, scale, setScale }: { visible: boolean; onClose: () => void; scale: number; setScale: (v: number) => void }) {
  return (
    <Modal visible={visible} transparent animationType="fade" onRequestClose={onClose} statusBarTranslucent>
      <View style={m.root}>
        <Pressable style={StyleSheet.absoluteFill} onPress={onClose} accessibilityLabel={ui('close')} accessibilityRole="button" />
        <View style={m.sheet} accessibilityViewIsModal>
          <View style={m.grab} />
          <View style={m.head}>
            <Text accessibilityRole="header" style={m.title}>{ui('fontSize')}</Text>
            <Pressable onPress={onClose} accessibilityRole="button" accessibilityLabel={ui('close')} hitSlop={10} style={m.close}>
              <Text style={m.closeText}>✕</Text>
            </Pressable>
          </View>
          <View style={m.preview}>
            <Text style={[m.previewText, { fontSize: scaled(17, scale), lineHeight: Math.round(28 * scaled(17, scale) / 17) }]}>{ui('fontPreview')}</Text>
          </View>
          <View style={m.row}>
            {FONT_STEPS.map((st, i) => {
              const on = st.v === scale;
              return (
                <Pressable
                  key={st.v}
                  onPress={() => setScale(st.v)}
                  accessibilityRole="radio"
                  accessibilityState={{ checked: on }}
                  accessibilityLabel={ui(st.label)}
                  style={({ pressed }) => [m.opt, on && m.optOn, pressed && { opacity: 0.85 }]}
                >
                  <Text style={[m.optAa, { fontSize: 15 + i * 4 }, on && { color: C.ink }]}>Aa</Text>
                  <Text style={[m.optLabel, on && { color: C.ink }]} numberOfLines={1} adjustsFontSizeToFit>{ui(st.label)}</Text>
                </Pressable>
              );
            })}
          </View>
          <Text style={m.hint}>{ui('fontHint')}</Text>
        </View>
      </View>
    </Modal>
  );
}

const b = themedStyles(() => StyleSheet.create({
  btn: { minHeight: 36, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 8, paddingHorizontal: 12, backgroundColor: C.card, borderRadius: 12, borderWidth: 1, borderColor: C.lineStrong },
  compact: { minHeight: 44, borderRadius: 22, paddingHorizontal: 14 },
  icon: { flexDirection: 'row', alignItems: 'flex-end', gap: 1 },
  small: { color: C.gold, fontFamily: font.serif, fontSize: 12, lineHeight: 15, fontWeight: '700' },
  big: { color: C.gold, fontFamily: font.serif, fontSize: 19, lineHeight: 22, fontWeight: '700' },
  arrows: { marginLeft: 2, height: 20, justifyContent: 'space-between', paddingVertical: 1 },
  arrow: { color: C.goldDeep, fontSize: 6, lineHeight: 7 },
  label: { color: C.gold, fontFamily: font.sans, fontSize: 13, fontWeight: '700' },
  labelCompact: { fontSize: 12 },
}), { scale: false });

const m = themedStyles(() => StyleSheet.create({
  root: { flex: 1, justifyContent: 'flex-end', alignItems: 'center', backgroundColor: 'rgba(4,12,11,0.62)' },
  sheet: { width: '100%', maxWidth: PAGE_MAX, backgroundColor: C.card, borderTopLeftRadius: 24, borderTopRightRadius: 24, borderTopWidth: 1, borderColor: C.lineStrong, paddingHorizontal: 20, paddingTop: 10, paddingBottom: 28 },
  grab: { alignSelf: 'center', width: 40, height: 4, borderRadius: 2, backgroundColor: C.lineStrong, marginBottom: 14 },
  head: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  title: { color: C.cream, fontFamily: font.serif, fontSize: 22, fontWeight: '700' },
  close: { width: 36, height: 36, borderRadius: 18, alignItems: 'center', justifyContent: 'center', backgroundColor: C.card2 },
  closeText: { color: C.gold, fontSize: 15, fontWeight: '700' },
  preview: { marginTop: 16, paddingVertical: 14, paddingHorizontal: 16, borderRadius: 16, backgroundColor: C.bg, borderWidth: 1, borderColor: C.line, borderLeftWidth: 3, borderLeftColor: C.gold, minHeight: 110, justifyContent: 'center' },
  previewText: { color: C.text, fontFamily: font.sans },
  row: { flexDirection: 'row', gap: 8, marginTop: 16 },
  opt: { flex: 1, minHeight: 74, borderRadius: 16, borderWidth: 1, borderColor: C.lineStrong, backgroundColor: C.bg, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 4, paddingVertical: 8, gap: 4 },
  optOn: { backgroundColor: C.gold, borderColor: C.gold },
  optAa: { color: C.gold, fontFamily: font.serif, fontWeight: '700' },
  optLabel: { color: C.dim, fontFamily: font.sans, fontSize: 11, fontWeight: '700' },
  hint: { color: C.faint, fontFamily: font.sans, fontSize: 12, lineHeight: 18, marginTop: 14, textAlign: 'center' },
}), { scale: false });

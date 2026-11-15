import { Linking, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import {
  AHIDNAME_DATE,
  AHIDNAME_IMPORTANCE,
  AHIDNAME_IMPORTANCE_TITLE,
  AHIDNAME_INTRO,
  AHIDNAME_PARAGRAPHS,
  AHIDNAME_SOURCES,
  AHIDNAME_TITLE,
} from '../data/malik-ahidname';
import { tx, ui } from '../i18n';
import { Rich } from './Rich';
import { useScrollMemory } from './scrollMemory';
import { C, TOP, align, font, themedStyles } from './theme';

const webHit = { cursor: 'pointer' as const };

function Ornament() {
  return (
    <View style={s.ornament} accessibilityElementsHidden importantForAccessibility="no-hide-descendants">
      <View style={s.ornamentLine} />
      <Text style={s.ornamentMark}>۞</Text>
      <View style={s.ornamentLine} />
    </View>
  );
}

export function AhidnameScreen({ onBack }: { onBack: () => void }) {
  const sc = useScrollMemory('ahidname');
  return (
    <ScrollView {...sc} style={{ flex: 1, backgroundColor: C.bg }} contentContainerStyle={s.page}>
      <Pressable onPress={onBack} hitSlop={8} style={s.back} accessibilityRole="button">
        <Text style={s.backText}>‹  {ui('back')}</Text>
      </Pressable>
      <Text style={[s.kicker, align()]}>HZ. ALİ DÖNEMİ</Text>
      <Text accessibilityRole="header" style={[s.title, align()]}>{tx(AHIDNAME_TITLE)}</Text>
      <Text style={[s.date, align()]}>{tx(AHIDNAME_DATE)}</Text>
      <Ornament />
      {AHIDNAME_INTRO.map((t, i) => (
        <Rich key={'in' + i} style={[s.body, align(), i > 0 && s.gap]} text={t} selectable />
      ))}
      <Text style={[s.kicker, align(), { marginTop: 28 }]}>AHİDNÂME</Text>
      <Text style={[s.subhead, align()]}>Nehcü'l-Belâğa, Mektup 53</Text>
      {AHIDNAME_PARAGRAPHS.map((p, i) => (
        <View key={'p' + i}>
          {p.heading ? <Text style={[s.section, align()]}>{p.heading}</Text> : null}
          <Rich style={[s.body, align(), p.heading ? { marginTop: 8 } : s.gap]} text={p.tr} selectable />
        </View>
      ))}
      <Ornament />
      <Text style={[s.kicker, align()]}>{AHIDNAME_IMPORTANCE_TITLE.toUpperCase()}</Text>
      <Text accessibilityRole="header" style={[s.impTitle, align()]}>{AHIDNAME_IMPORTANCE_TITLE}</Text>
      {AHIDNAME_IMPORTANCE.map((t, i) => {
        const q0 = t.indexOf('"');
        const q1 = t.indexOf('"', q0 + 1);
        if (i === 1 && q0 >= 0 && q1 > q0) {
          return (
            <View key={'im' + i}>
              <Rich style={[s.body, align(), s.gap]} text={t.slice(0, q0).trimEnd()} selectable />
              <View style={s.quoteCard}>
                <Text style={[s.quote, align()]} selectable>“{t.slice(q0 + 1, q1)}”</Text>
                <Text style={[s.quoteRef, align()]}>Kofi Annan, Tahran, 10 Aralık 1997</Text>
              </View>
              <Rich style={[s.body, align()]} text={t.slice(q1 + 1).trimStart()} selectable />
            </View>
          );
        }
        return <Rich key={'im' + i} style={[s.body, align(), s.gap]} text={t} selectable />;
      })}
      <Text style={[s.kicker, align(), { marginTop: 28 }]}>KAYNAKLAR</Text>
      {AHIDNAME_SOURCES.map((src, i) => {
        const ok = src.status === 'verified';
        return (
          <View key={i} style={s.src}>
            <View style={s.srcHead}>
              <Text style={[s.srcBook, align(), { flex: 1 }]}>{src.book}</Text>
              <Text style={[s.badge, { color: ok ? C.shia : C.warn, borderColor: ok ? C.shia : C.warn }]}>
                {ok ? '✓ ' + ui('verified') : '⚠ ' + ui('check')}
              </Text>
            </View>
            <Text style={[s.srcRef, align()]}>{src.ref}</Text>
            <Rich style={[s.srcSays, align()]} text={src.says} />
            {!!src.url && (
              <Pressable onPress={() => Linking.openURL(src.url!)} accessibilityRole="link" style={webHit}>
                <Text style={s.link}>{src.url.replace(/^https?:\/\//, '')}</Text>
              </Pressable>
            )}
          </View>
        );
      })}
    </ScrollView>
  );
}

const s = themedStyles(() => StyleSheet.create({
  page: { paddingHorizontal: 18, paddingTop: TOP, paddingBottom: 56 },
  back: { alignSelf: 'flex-start', minHeight: 44, justifyContent: 'center', paddingRight: 12, marginBottom: 4 },
  backText: { color: C.gold, fontFamily: font.sans, fontSize: 16, fontWeight: '700' },
  kicker: { color: C.gold, fontFamily: font.sans, fontSize: 12, fontWeight: '700', letterSpacing: 2.4 },
  title: { color: C.cream, fontFamily: font.serif, fontSize: 30, lineHeight: 36, fontWeight: '700', marginTop: 8 },
  date: { color: C.goldDeep, fontFamily: font.sans, fontSize: 13, marginTop: 8 },
  ornament: { flexDirection: 'row', alignItems: 'center', gap: 10, marginTop: 14, marginBottom: 20 },
  ornamentLine: { flex: 1, height: StyleSheet.hairlineWidth, backgroundColor: C.lineStrong },
  ornamentMark: { color: C.gold, fontSize: 15, lineHeight: 18 },
  body: { color: C.text, fontFamily: font.sans, fontSize: 17, lineHeight: 28 },
  gap: { marginTop: 16 },
  subhead: { color: C.dim, fontFamily: font.sans, fontSize: 14, marginTop: 6, marginBottom: 8 },
  section: { color: C.gold, fontFamily: font.serif, fontSize: 20, lineHeight: 26, fontWeight: '700', marginTop: 26 },
  impTitle: { color: C.cream, fontFamily: font.serif, fontSize: 26, lineHeight: 32, fontWeight: '700', marginTop: 8 },
  quoteCard: {
    marginTop: 16,
    marginBottom: 16,
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: C.line,
    borderLeftWidth: 3,
    borderLeftColor: C.gold,
    backgroundColor: 'rgba(228,197,106,0.08)',
  },
  quote: { color: C.gold, fontFamily: font.serif, fontSize: 17, lineHeight: 28, fontStyle: 'italic' },
  quoteRef: { color: C.goldDeep, fontFamily: font.sans, fontSize: 12, letterSpacing: 0.6, marginTop: 8 },
  src: { marginTop: 12, backgroundColor: C.card, borderRadius: 16, padding: 14, borderLeftWidth: 3, borderLeftColor: C.gold },
  srcHead: { flexDirection: 'row', alignItems: 'flex-start', gap: 8 },
  srcBook: { color: C.cream, fontFamily: font.serif, fontSize: 16, fontWeight: '700' },
  srcRef: { color: C.goldDeep, fontFamily: font.sans, fontSize: 12, marginTop: 4 },
  srcSays: { color: C.text, fontFamily: font.sans, fontSize: 15, lineHeight: 22, marginTop: 8 },
  badge: { fontFamily: font.sans, fontSize: 11, fontWeight: '800', borderWidth: 1, borderRadius: 8, paddingHorizontal: 6, paddingVertical: 3, overflow: 'hidden' },
  link: { color: C.gold, fontFamily: font.sans, fontSize: 13, marginTop: 8 },
}));

import React from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { EVENTS } from '../data/events';
import { IMAMS, type Imam } from '../data/imams';
import { ui } from '../i18n';
import { Chevron } from './icons';
import { Rich } from './Rich';
import { BLOOD, C, TOP, align, font, themedStyles } from './theme';
import { useScrollMemory } from './scrollMemory';

function Back({ onPress }: { onPress: () => void }) {
  return (
    <Pressable onPress={onPress} hitSlop={8} accessibilityRole="button" style={{ alignSelf: 'flex-start' }}>
      <Text style={s.back}>‹  {ui('back')}</Text>
    </Pressable>
  );
}

export function ImamList({ onOpen, onBack }: { onOpen: (id: string) => void; onBack: () => void }) {
  const sc = useScrollMemory('imams');
  return (
    <ScrollView {...sc} style={{ flex: 1, backgroundColor: C.bg }} contentContainerStyle={s.page}>
      <Back onPress={onBack} />
      <Text style={[s.kicker, align()]}>{ui('imamsKicker')}</Text>
      <Text style={[s.title, align()]}>{ui('imams')}</Text>
      <Text style={[s.sub, align()]}>{ui('imamsSub')}</Text>
      {IMAMS.map(im => {
        // Hz. Hüseyin: içine girince açılan kan kırmızısı temayla aynı renk
        const red = im.id === 'huseyin';
        return (
          <Pressable
            key={im.id}
            onPress={() => onOpen(im.id)}
            accessibilityRole="button"
            style={({ pressed }) => [s.card, red && { backgroundColor: BLOOD.card, borderColor: BLOOD.lineStrong, borderLeftWidth: 4, borderLeftColor: BLOOD.gold }, pressed && { opacity: 0.85 }]}
          >
            <View style={[s.num, red && { backgroundColor: BLOOD.gold }]}><Text style={[s.numText, red && { color: BLOOD.ink }]}>{im.no}</Text></View>
            <View style={{ flex: 1 }}>
              <Text style={[s.cardTitle, red && { color: BLOOD.gold }, align()]}>{im.name}</Text>
              <Text style={[s.cardKunya, red && { color: BLOOD.dim }, align()]}>{im.kunya}</Text>
              <View style={s.chips}>
                {im.lakaplar.slice(0, 3).map(l => (
                  <View key={l.ad} style={[s.chip, red && { borderColor: BLOOD.lineStrong, backgroundColor: 'rgba(224,58,69,0.12)' }]}><Text style={[s.chipText, red && { color: BLOOD.gold }]}>{l.ad}</Text></View>
                ))}
              </View>
            </View>
            <Chevron color={red ? BLOOD.gold : undefined} />
          </Pressable>
        );
      })}
      <Text style={[s.foot, align()]}>{ui('imamsNote')}</Text>
    </ScrollView>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <View style={s.row}>
      <Text style={s.rowLabel}>{label}</Text>
      <Text style={s.rowValue}>{value}</Text>
    </View>
  );
}

function SectionTitle({ children }: { children: string }) {
  return <Text style={[s.h, align()]}>{children}</Text>;
}

export function ImamDetail({ id, onBack, onOpenEvent }: { id: string; onBack: () => void; onOpenEvent: (eventId: string) => void }) {
  const sc = useScrollMemory('imam:' + id);
  const im: Imam | undefined = IMAMS.find(i => i.id === id);
  if (!im) {
    return (
      <View style={{ flex: 1, backgroundColor: C.bg, padding: 20, paddingTop: TOP }}>
        <Back onPress={onBack} />
        <Text style={s.sub}>Bu sayfa bulunamadı.</Text>
      </View>
    );
  }
  const ev = im.eventId ? EVENTS.find(e => e.id === im.eventId) : undefined;
  return (
    <ScrollView {...sc} style={{ flex: 1, backgroundColor: C.bg }} contentContainerStyle={s.page}>
      <Back onPress={onBack} />
      <Text style={[s.kicker, align()]}>{im.no}. İMAM</Text>
      <Text style={[s.title, align()]}>{im.name}</Text>
      <Text style={[s.kunya, align()]}>Künyesi: {im.kunya}</Text>

      <SectionTitle>LAKAPLARI</SectionTitle>
      <View style={s.panel}>
        {im.lakaplar.map((l, i) => (
          <View key={l.ad} style={[s.lakap, i > 0 && s.lakapSep]}>
            <Text style={s.lakapAd}>{l.ad}</Text>
            {!!l.anlam && <Text style={s.lakapAnlam}>{l.anlam}</Text>}
          </View>
        ))}
      </View>

      <SectionTitle>KÜNYE VE TARİHLER</SectionTitle>
      <View style={s.panel}>
        <Row label="Doğum" value={im.born} />
        <Row label="Vefat" value={im.died} />
        <Row label="Defin" value={im.buried} />
        <Row label="Ailesi" value={im.parents} />
        {!!im.period && <Row label="İmamlık" value={im.period} />}
      </View>

      <SectionTitle>KARAKTERİSTİK ÖZELLİKLERİ</SectionTitle>
      <View style={s.panel}>
        {im.traits.map(t => (
          <View key={t} style={s.trait}>
            <Text style={s.dot}>◆</Text>
            <Rich style={[s.traitText, align()]} text={t} />
          </View>
        ))}
      </View>

      <SectionTitle>HAYATI</SectionTitle>
      <Rich style={[s.body, align()]} text={im.bio} />

      {!!im.students && (
        <>
          <View style={s.special}>
            <Text style={s.specialKicker}>ÖZEL BÖLÜM</Text>
            <Text style={s.specialTitle}>Öğrencileri ve mezheplerle ilişkisi</Text>
          </View>
          {!!im.studentsIntro && <Text style={[s.body, align()]}>{im.studentsIntro}</Text>}
          {im.students.map(st => (
            <View key={st.name} style={s.student}>
              <View style={s.studentTop}>
                <View style={[s.tag, { borderColor: st.group === 'shia' ? C.shia : C.sunni }]}>
                  <Text style={[s.tagText, { color: st.group === 'shia' ? C.shia : C.sunni }]}>{st.group === 'shia' ? 'Şİİ KAYNAKLARI' : 'SÜNNİ KAYNAKLARI'}</Text>
                </View>
                {!!st.years && <Text style={s.years}>{st.years}</Text>}
              </View>
              <Text style={s.studentName}>{st.name}</Text>
              <Rich style={[s.studentNote, align()]} text={st.note} />
            </View>
          ))}
          {!!im.studentsNote && (
            <View style={s.summaryBox}>
              <Text style={s.summaryLabel}>NET OLAN</Text>
              <Text style={s.summaryText}>{im.studentsNote}</Text>
            </View>
          )}
        </>
      )}

      {!!ev && (
        <Pressable style={({ pressed }) => [s.eventBtn, pressed && { opacity: 0.85 }]} onPress={() => onOpenEvent(ev.id)} accessibilityRole="button">
          <View style={{ flex: 1 }}>
            <Text style={s.eventLabel}>İLGİLİ OLAY</Text>
            <Text style={s.eventTitle}>{typeof ev.title === 'string' ? ev.title : ev.title.tr}</Text>
          </View>
          <Chevron color={C.gold} />
        </Pressable>
      )}

      <View style={s.check}>
        <Text style={s.checkBadge}>⚠ Kontrol edilmeli</Text>
        <Text style={s.checkText}>{ui('imamsNote')}</Text>
      </View>
    </ScrollView>
  );
}

const s = themedStyles(() => StyleSheet.create({
  page: { paddingTop: TOP, paddingHorizontal: 18, paddingBottom: 48 },
  back: { color: C.gold, fontFamily: font.sans, fontSize: 16, fontWeight: '700' },
  kicker: { color: C.goldDeep, fontFamily: font.sans, fontSize: 12, fontWeight: '800', letterSpacing: 3, marginTop: 22 },
  title: { color: C.cream, fontFamily: font.serif, fontSize: 30, fontWeight: '700', marginTop: 4 },
  sub: { color: C.dim, fontFamily: font.sans, fontSize: 14, lineHeight: 20, marginTop: 6, marginBottom: 14 },
  kunya: { color: C.gold, fontFamily: font.serif, fontSize: 16, fontStyle: 'italic', marginTop: 6 },
  card: { flexDirection: 'row', alignItems: 'center', gap: 12, backgroundColor: C.card, borderRadius: 18, borderWidth: 1, borderColor: C.lineStrong, padding: 14, marginTop: 12 },
  num: { width: 38, height: 38, borderRadius: 19, backgroundColor: C.gold, alignItems: 'center', justifyContent: 'center' },
  numText: { color: C.ink, fontFamily: font.sans, fontWeight: '800', fontSize: 16 },
  cardTitle: { color: C.cream, fontFamily: font.serif, fontSize: 18, fontWeight: '700' },
  cardKunya: { color: C.faint, fontFamily: font.sans, fontSize: 12, marginTop: 2 },
  chips: { flexDirection: 'row', flexWrap: 'wrap', gap: 6, marginTop: 8 },
  chip: { borderWidth: 1, borderColor: C.line, borderRadius: 999, paddingHorizontal: 9, paddingVertical: 3, backgroundColor: 'rgba(228,197,106,0.08)' },
  chipText: { color: C.gold, fontFamily: font.sans, fontSize: 12, fontWeight: '700' },
  foot: { color: C.faint, fontFamily: font.sans, fontSize: 12, lineHeight: 17, marginTop: 20 },
  h: { color: C.goldDeep, fontFamily: font.sans, fontSize: 12, fontWeight: '800', letterSpacing: 2.5, marginTop: 26, marginBottom: 10 },
  panel: { backgroundColor: C.card, borderRadius: 16, borderWidth: 1, borderColor: C.line, paddingHorizontal: 14, paddingVertical: 6 },
  lakap: { paddingVertical: 9 },
  lakapSep: { borderTopWidth: 1, borderTopColor: C.line },
  lakapAd: { color: C.gold, fontFamily: font.serif, fontSize: 17, fontWeight: '700' },
  lakapAnlam: { color: C.dim, fontFamily: font.sans, fontSize: 13, marginTop: 2 },
  row: { flexDirection: 'row', gap: 12, paddingVertical: 8, borderBottomWidth: 1, borderBottomColor: C.line },
  rowLabel: { width: 70, color: C.faint, fontFamily: font.sans, fontSize: 12, fontWeight: '800', letterSpacing: 1, marginTop: 2 },
  rowValue: { flex: 1, color: C.cream, fontFamily: font.sans, fontSize: 14, lineHeight: 20 },
  trait: { flexDirection: 'row', gap: 10, paddingVertical: 8 },
  dot: { color: C.gold, fontSize: 10, marginTop: 5 },
  traitText: { flex: 1, color: C.text, fontFamily: font.sans, fontSize: 15, lineHeight: 22 },
  body: { color: C.text, fontFamily: font.sans, fontSize: 15, lineHeight: 23 },
  special: { marginTop: 32, borderLeftWidth: 3, borderLeftColor: C.gold, paddingLeft: 12, marginBottom: 10 },
  specialKicker: { color: C.goldDeep, fontFamily: font.sans, fontSize: 11, fontWeight: '800', letterSpacing: 3 },
  specialTitle: { color: C.cream, fontFamily: font.serif, fontSize: 22, fontWeight: '700', marginTop: 4 },
  student: { backgroundColor: C.card, borderRadius: 16, borderWidth: 1, borderColor: C.line, padding: 14, marginTop: 12 },
  studentTop: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  tag: { borderWidth: 1, borderRadius: 999, paddingHorizontal: 9, paddingVertical: 3 },
  tagText: { fontFamily: font.sans, fontSize: 10, fontWeight: '800', letterSpacing: 1 },
  years: { color: C.faint, fontFamily: font.sans, fontSize: 12 },
  studentName: { color: C.cream, fontFamily: font.serif, fontSize: 18, fontWeight: '700', marginTop: 8 },
  studentNote: { color: C.dim, fontFamily: font.sans, fontSize: 14, lineHeight: 21, marginTop: 6 },
  summaryBox: { marginTop: 16, borderRadius: 16, borderWidth: 1, borderColor: C.warn, backgroundColor: 'rgba(224,164,90,0.08)', padding: 14 },
  summaryLabel: { color: C.warn, fontFamily: font.sans, fontSize: 11, fontWeight: '800', letterSpacing: 2.5 },
  summaryText: { color: C.cream, fontFamily: font.sans, fontSize: 15, lineHeight: 22, marginTop: 6 },
  eventBtn: { flexDirection: 'row', alignItems: 'center', gap: 10, marginTop: 28, backgroundColor: C.card2, borderRadius: 16, borderWidth: 1, borderColor: C.lineStrong, padding: 14 },
  eventLabel: { color: C.goldDeep, fontFamily: font.sans, fontSize: 11, fontWeight: '800', letterSpacing: 2.5 },
  eventTitle: { color: C.cream, fontFamily: font.serif, fontSize: 16, fontWeight: '700', marginTop: 4 },
  check: { marginTop: 22, borderRadius: 14, borderWidth: 1, borderColor: C.line, padding: 12 },
  checkBadge: { color: C.warn, fontFamily: font.sans, fontSize: 12, fontWeight: '800' },
  checkText: { color: C.faint, fontFamily: font.sans, fontSize: 12, lineHeight: 17, marginTop: 4 },
}));

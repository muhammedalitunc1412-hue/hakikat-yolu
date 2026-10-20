import React, { useState } from 'react';
import { FlatList, Image, Linking, Pressable, ScrollView, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import type { Accept, Dispute, Dua, HistEvent, Source } from '../types';
import { isRtl, tx, ui } from '../i18n';
import { SCENE_IMAGES } from '../data/sceneImages';
import { CATEGORIES } from '../data/events';
import { Rich } from './Rich';
import { EventVideo } from './EventVideo';

export const C = {
  bg: '#0e1717', card: '#16242a', card2: '#1c2e35', gold: '#e6c36a', text: '#eef3f0', dim: '#9fb4b0',
  sunni: '#4aa3df', shia: '#3fbf7f', warn: '#e0a63a', line: 'rgba(255,255,255,0.09)',
};
const align = () => ({ textAlign: isRtl() ? ('right' as const) : ('left' as const), writingDirection: isRtl() ? ('rtl' as const) : ('ltr' as const) });

// ---------------- Ana ekran: kategoriler ----------------
export function Home({ events, onOpen, onMethod, onDuas }: { events: HistEvent[]; onOpen: (id: string) => void; onMethod: () => void; onDuas: () => void }) {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: C.bg }} contentContainerStyle={{ padding: 18, paddingTop: 54, paddingBottom: 60 }}>
      <Text style={s.brand}>{ui('appName')}</Text>
      <Text style={[s.tagline, align()]}>{ui('tagline')}</Text>
      <View style={s.rule} />

      {/* Dualar kategorisi */}
      <Pressable style={s.duaTile} onPress={onDuas}>
        <Text style={s.duaIcon}>🤲</Text>
        <View style={{ flex: 1 }}>
          <Text style={[s.cardTitle, { color: C.gold }, align()]}>{ui('duas')}</Text>
          <Text style={[s.cardHook, align()]}>{ui('duasSub')}</Text>
        </View>
      </Pressable>

      {CATEGORIES.map(cat => {
        const list = cat.ids.map(id => events.find(e => e.id === id)).filter(Boolean) as HistEvent[];
        if (!list.length) return null;
        return (
          <View key={cat.id} style={{ marginTop: 22 }}>
            <Text style={[s.catTitle, align()]}>{cat.title}</Text>
            <Text style={[s.catSub, align()]}>{cat.sub}</Text>
            {list.map((e, i) => (
              <Pressable key={e.id} style={s.card} onPress={() => onOpen(e.id)}>
                <View style={s.numWrap}><Text style={s.num}>{i + 1}</Text></View>
                <View style={{ flex: 1 }}>
                  <Text style={[s.cardTitle, align()]}>{tx(e.title)}</Text>
                  {!!e.key && <Text style={[s.keyLine, align()]}>{tx(e.key)}</Text>}
                  <Text style={[s.cardDate, align()]}>{tx(e.date)}</Text>
                  <Text style={[s.cardHook, align()]}>{tx(e.hook)}</Text>
                </View>
              </Pressable>
            ))}
          </View>
        );
      })}
      <Pressable style={s.ghost} onPress={onMethod}><Text style={s.ghostText}>{ui('method')}</Text></Pressable>
    </ScrollView>
  );
}

// ---------------- Kaynak kartı ----------------
function SourceCard({ src, tone }: { src: Source; tone: string }) {
  const ok = src.status === 'verified';
  return (
    <View style={[s.src, { borderLeftColor: tone }]}>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <Text style={[s.srcBook, align(), { flex: 1 }]}>{src.book}</Text>
        <Text style={[s.badge, { color: ok ? C.shia : C.warn, borderColor: ok ? C.shia : C.warn }]}>{ok ? '✓ ' + ui('verified') : '⚠ ' + ui('check')}</Text>
      </View>
      <Text style={[s.srcRef, align()]}>{src.ref}</Text>
      <Rich style={[s.srcSays, align()]} text={src.says} />
      {!!src.grade && <Text style={[s.srcGrade, align()]}>{ui('grade')}: {tx(src.grade)}</Text>}
      {!!src.url && <Pressable onPress={() => Linking.openURL(src.url!)}><Text style={s.link}>{src.url.replace(/^https?:\/\//, '')}</Text></Pressable>}
    </View>
  );
}

// Şii yorum her zaman Sünni yorumun ÜSTÜNDE
function DisputeCard({ d }: { d: Dispute }) {
  return (
    <View style={s.dispute}>
      <Text style={[s.disputeTitle, align()]}>{tx(d.title)}</Text>
      <Text style={[s.vLabel, { color: C.shia }]}>{ui('shiaView')}</Text>
      <Rich style={[s.body, align()]} text={d.shia} />
      <Text style={[s.vLabel, { color: C.sunni }]}>{ui('sunniView')}</Text>
      <Rich style={[s.body, align()]} text={d.sunni} />
    </View>
  );
}

// Sahne görseli: assets/scenes/<olay-id>-<no>.jpg varsa gösterilir, yoksa test yazısı.
function SceneImage({ evId, n, title, width }: { evId: string; n: number; title: string; width: number }) {
  // Bir sahnede birden fazla görsel olabilir: <id>-<n>, <id>-<n>-2, <id>-<n>-3 ... Dokununca sıradakine geçer.
  const imgs: number[] = [];
  for (let k = 1; k <= 4; k++) { const f = SCENE_IMAGES[k === 1 ? evId + '-' + n : evId + '-' + n + '-' + k]; if (f) imgs.push(f); }
  const [pick, setPick] = useState(0);
  // Yükseklik görselin kendi oranına göre (16:9 ya da 16:10); görsel yoksa 16:9 test kutusu.
  const cur = imgs.length ? imgs[pick % imgs.length] : 0;
  const meta = cur ? Image.resolveAssetSource(cur) : null;
  const h = meta && meta.width ? Math.round((width * meta.height) / meta.width) : Math.round((width * 9) / 16);
  if (imgs.length) {
    return (
      <Pressable disabled={imgs.length < 2} onPress={() => setPick(p => (p + 1) % imgs.length)}>
        <Image source={cur} resizeMode="cover" style={{ width, height: h }} />
        {imgs.length > 1 && (
          <View style={{ position: 'absolute', right: 10, bottom: 10, backgroundColor: 'rgba(0,0,0,0.6)', borderRadius: 12, paddingHorizontal: 10, paddingVertical: 4 }}>
            <Text style={{ color: '#fff', fontSize: 12, fontWeight: '700' }}>{(pick % imgs.length) + 1}/{imgs.length} · dokun</Text>
          </View>
        )}
      </Pressable>
    );
  }
  return (
    <View style={{ width, height: h, backgroundColor: '#1b2a30', alignItems: 'center', justifyContent: 'center', borderBottomWidth: 1, borderColor: C.line }}>
      <Text style={{ color: C.gold, fontSize: 34 }}>🖼</Text>
      <Text style={{ color: C.text, fontSize: 18, fontWeight: '800', marginTop: 6 }}>TEST GÖRSELİ</Text>
      <Text style={{ color: C.dim, fontSize: 13, marginTop: 4 }}>{title} · Sahne {n}</Text>
      <Text style={{ color: C.dim, fontSize: 11, marginTop: 8 }}>{evId}-{n}.jpg</Text>
    </View>
  );
}

function AcceptChip({ by }: { by: Accept }) {
  const col = by === 'shia' ? C.shia : by === 'sunni' ? C.sunni : C.gold;
  const label = by === 'shia' ? ui('acceptShia') : by === 'sunni' ? ui('acceptSunni') : ui('acceptBoth');
  return <Text style={[s.accept, { color: col, borderColor: col }]}>{label}</Text>;
}

// ---------------- Olay ekranı ----------------
type Panel = 'shia' | 'sunni' | 'disputes';

export function EventScreen({ ev, onBack }: { ev: HistEvent; onBack: () => void }) {
  const { width } = useWindowDimensions();
  const [idx, setIdx] = useState(0);
  const [open, setOpen] = useState<Panel[]>([]);
  const toggle = (p: Panel) => setOpen(o => (o.includes(p) ? o.filter(x => x !== p) : [...o, p]));
  const has = (p: Panel) => open.includes(p);
  const nDis = ev.disputes?.length ?? 0;

  const Btn = ({ p, label, n, color }: { p: Panel; label: string; n: number; color: string }) => (
    <Pressable onPress={() => toggle(p)} style={[s.panelBtn, { borderColor: color }, has(p) && { backgroundColor: color }]}>
      <Text style={[s.panelBtnText, { color: has(p) ? '#0b1412' : color }]}>{label} ({n}) {has(p) ? '▲' : '▼'}</Text>
    </Pressable>
  );

  return (
    <View style={{ flex: 1, backgroundColor: C.bg }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 60 }}>
        <View style={{ paddingTop: 44, paddingHorizontal: 14, paddingBottom: 6 }}>
          <Pressable onPress={onBack} hitSlop={12}><Text style={s.back}>‹ {ui('back')}</Text></Pressable>
          <Text style={[s.evTitle, align()]}>{tx(ev.title)}</Text>
          {!!ev.key && <Text style={[s.keyLine, align(), { fontSize: 15 }]}>{tx(ev.key)}</Text>}
          <Text style={[s.cardDate, align()]}>{tx(ev.date)}</Text>
        </View>

        <FlatList
          data={[...ev.scenes, 'video' as const]}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          keyExtractor={(_, i) => String(i)}
          onMomentumScrollEnd={e => setIdx(Math.round(e.nativeEvent.contentOffset.x / width))}
          getItemLayout={(_, i) => ({ length: width, offset: width * i, index: i })}
          renderItem={({ item, index }) => item === 'video' ? (
            <View style={{ width }}>
              <EventVideo evId={ev.id} width={width} />
              <View style={s.sceneText}>
                <Text style={[s.sceneBody, align(), { fontWeight: '800', color: C.gold }]}>{ui('video')}</Text>
                <Text style={[s.dim, align(), { marginTop: 6 }]}>{ui('videoHint')}</Text>
              </View>
            </View>
          ) : (
            <View style={{ width }}>
              <SceneImage evId={ev.id} n={index + 1} title={tx(ev.title)} width={width} />
              <View style={s.sceneText}>
                <Rich style={[s.sceneBody, align()]} text={item.text} />
                {!!item.by && <AcceptChip by={item.by} />}
              </View>
            </View>
          )}
        />
        <View style={s.dots}>
          {[...ev.scenes, 0].map((_, i) => <View key={i} style={[s.dot, i === idx && s.dotOn]} />)}
        </View>
        {idx === 0 && <Text style={s.swipe}>‹ {ui('next')} ›</Text>}

        {/* Kaynak ve ayrılık düğmeleri: Şii her zaman üstte */}
        <View style={{ paddingHorizontal: 14, marginTop: 22, gap: 10 }}>
          <View style={{ flexDirection: 'row', gap: 10 }}>
            <Btn p="shia" label={ui('shiaSources')} n={ev.shia.length} color={C.shia} />
            <Btn p="sunni" label={ui('sunniSources')} n={ev.sunni.length} color={C.sunni} />
          </View>
          {nDis > 0 && <Btn p="disputes" label={ui('disputes')} n={nDis} color={C.warn} />}
        </View>

        {has('shia') && (
          <View style={s.panel}>
            <Text style={[s.panelTitle, { color: C.shia }, align()]}>{ui('shiaSources')}</Text>
            {ev.shia.length ? ev.shia.map((x, i) => <SourceCard key={i} src={x} tone={C.shia} />) : <Text style={s.dim}>{ui('none')}</Text>}
          </View>
        )}
        {has('sunni') && (
          <View style={s.panel}>
            <Text style={[s.panelTitle, { color: C.sunni }, align()]}>{ui('sunniSources')}</Text>
            {ev.sunni.length ? ev.sunni.map((x, i) => <SourceCard key={i} src={x} tone={C.sunni} />) : <Text style={s.dim}>{ui('none')}</Text>}
          </View>
        )}
        {has('disputes') && (
          <View style={s.panel}>
            <Text style={[s.panelTitle, { color: C.warn }, align()]}>{ui('disputes')}</Text>
            {ev.disputes!.map((d, i) => <DisputeCard key={i} d={d} />)}
          </View>
        )}

        <Text style={[s.h2, s.sec, { color: C.gold }, align()]}>{ui('think')}</Text>
        <View style={s.pad}>
          {ev.questions.map((q, i) => (
            <View key={i} style={s.question}><Text style={s.qMark}>?</Text><Rich style={[s.qText, align()]} text={q} /></View>
          ))}
        </View>

        <Text style={[s.h2, s.sec, align()]}>{ui('summary')}</Text>
        <View style={s.pad}><Rich style={[s.body, align()]} text={ev.summary} /></View>

        {!!ev.notes?.length && (
          <>
            <Text style={[s.h2, s.sec, { color: C.gold }, align()]}>{ui('notes')}</Text>
            <View style={s.pad}>
              {ev.notes.map((n, i) => (
                <View key={i} style={s.question}><Text style={s.qMark}>•</Text><Rich style={[s.qText, align()]} text={n} /></View>
              ))}
            </View>
          </>
        )}
      </ScrollView>
    </View>
  );
}

// ---------------- Dualar ----------------
export function DuaList({ duas, onOpen, onBack }: { duas: Dua[]; onOpen: (id: string) => void; onBack: () => void }) {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: C.bg }} contentContainerStyle={{ padding: 18, paddingTop: 54, paddingBottom: 60 }}>
      <Pressable onPress={onBack} hitSlop={12}><Text style={s.back}>‹ {ui('back')}</Text></Pressable>
      <Text style={[s.evTitle, align()]}>🤲 {ui('duas')}</Text>
      <Text style={[s.tagline, align(), { marginBottom: 14 }]}>{ui('duasSub')}</Text>
      {duas.length === 0 && <Text style={s.dim}>Dualar hazırlanıyor.</Text>}
      {duas.map(d => (
        <Pressable key={d.id} style={s.card} onPress={() => onOpen(d.id)}>
          <View style={{ flex: 1 }}>
            <Text style={[s.cardTitle, align()]}>{tx(d.title)}</Text>
            {!!d.when && <Text style={[s.cardDate, align()]}>{d.when}</Text>}
            {!!d.intro && <Text style={[s.cardHook, align()]} numberOfLines={2}>{d.intro}</Text>}
          </View>
        </Pressable>
      ))}
    </ScrollView>
  );
}

export function DuaScreen({ dua, onBack }: { dua: Dua; onBack: () => void }) {
  const [show, setShow] = useState({ ar: true, ok: true, me: true });
  const ok = dua.status === 'verified';
  const Chip = ({ k, label }: { k: 'ar' | 'ok' | 'me'; label: string }) => (
    <Pressable onPress={() => setShow(v => ({ ...v, [k]: !v[k] }))} style={[s.chip, show[k] && s.chipOn]}>
      <Text style={[s.chipText, show[k] && { color: '#0b1412' }]}>{label}</Text>
    </Pressable>
  );
  return (
    <ScrollView style={{ flex: 1, backgroundColor: C.bg }} contentContainerStyle={{ padding: 18, paddingTop: 54, paddingBottom: 80 }}>
      <Pressable onPress={onBack} hitSlop={12}><Text style={s.back}>‹ {ui('back')}</Text></Pressable>
      <Text style={[s.evTitle, align()]}>{tx(dua.title)}</Text>
      {!!dua.when && <Text style={[s.cardDate, align()]}>{dua.when}</Text>}
      {!!dua.intro && <Text style={[s.body, align(), { marginTop: 6 }]}>{dua.intro}</Text>}
      <View style={{ flexDirection: 'row', gap: 8, marginTop: 14, marginBottom: 6 }}>
        <Chip k="ar" label={ui('arabic')} /><Chip k="ok" label={ui('okunus')} /><Chip k="me" label={ui('meal')} />
      </View>
      <Text style={[s.badge, { alignSelf: 'flex-start', color: ok ? C.shia : C.warn, borderColor: ok ? C.shia : C.warn, marginLeft: 0, marginBottom: 6 }]}>{ok ? '✓ ' + ui('verified') : '⚠ ' + ui('check')}</Text>
      {!!dua.note && <Text style={[s.dim, { marginBottom: 8 }]}>{dua.note}</Text>}

      {dua.parts.map((p, i) => (
        <View key={i} style={s.duaPart}>
          {!!p.heading && <Text style={s.partHeading}>{p.heading}</Text>}
          {show.ar && <Text style={s.arabic}>{p.ar}</Text>}
          {show.ok && <><Text style={[s.vLabel, { color: C.gold }]}>{ui('okunus')}</Text><Text style={[s.body, { fontStyle: 'italic' }]}>{p.okunus}</Text></>}
          {show.me && <><Text style={[s.vLabel, { color: C.shia }]}>{ui('meal')}</Text><Text style={s.body}>{p.meal}</Text></>}
        </View>
      ))}

      <Text style={[s.srcRef, { marginTop: 14 }]}>{ui('duaSource')}: {dua.source}</Text>
      {!!dua.url && <Pressable onPress={() => Linking.openURL(dua.url!)}><Text style={s.link}>{dua.url.replace(/^https?:\/\//, '')}</Text></Pressable>}
    </ScrollView>
  );
}

// ---------------- Kaynaklar ve yöntem ----------------
export function Method({ onBack }: { onBack: () => void }) {
  const P = (t: string, k: number) => <Text key={k} style={[s.body, align(), { marginBottom: 10 }]}>{t}</Text>;
  return (
    <ScrollView style={{ flex: 1, backgroundColor: C.bg }} contentContainerStyle={{ padding: 18, paddingTop: 54, paddingBottom: 60 }}>
      <Pressable onPress={onBack} hitSlop={12}><Text style={s.back}>‹ {ui('back')}</Text></Pressable>
      <Text style={[s.evTitle, align()]}>{ui('method')}</Text>
      {[
        'Bu uygulama Şii bakışını esas alır. Her olay önce hikâye olarak anlatılır; her sahnenin altında o anlatımı hangi mezhebin kaynaklarının kabul ettiği (Sünni ve Şii / Şii / Sünni) yazar.',
        'Olayın sonunda "Şii kaynakları" ve "Sünni kaynakları" düğmelerine basınca ilgili kaynaklar açılır. Her kaynak kartında kitabın adı, numarası ve ne anlattığı bulunur. Şii kaynak ve yorum her zaman üstte gösterilir.',
        '✓ Doğrulandı: Metin ve numara kaynağından okunmuştur. ⚠ Kontrol edilmeli: Numara ya da sayfa, yayın öncesinde birincil kaynaktan teyit edilecektir.',
        '"Ayrılıklar" düğmesi, iki geleneğin aynı olayı nasıl yorumladığını ya da bir rivayeti hangi kaynakların kabul edip etmediğini gösterir.',
        '"Düşünelim" bölümündeki sorular, kaynaklarda yazılanlardan hareketle okuyucuyu kendi sonucunu kurmaya davet eder.',
        'Uygulamada kimseye hakaret, lanet ya da nefret söylemi yoktur. Hz. Peygamber, Ehl-i Beyt ve sahabeye saygı esastır. Ziyâret-i Âşûrâ gibi dua metinleri kendi aslına sadık olarak verilmiştir.',
        'Dualarda Arapça metin güvenilir bir kaynak sayfasından alınmıştır; Türkçe okunuş ve anlam hazırlanmıştır ve yayın öncesinde bir uzman tarafından kontrol edilmelidir.',
      ].map(P)}
    </ScrollView>
  );
}

const s = StyleSheet.create({
  brand: { color: C.gold, fontSize: 30, fontWeight: '900', letterSpacing: 5 },
  tagline: { color: C.dim, fontSize: 14, marginTop: 6, lineHeight: 20 },
  rule: { height: 1, backgroundColor: C.line, marginVertical: 20 },
  h2: { color: C.text, fontSize: 19, fontWeight: '800', marginBottom: 10 },
  catTitle: { color: C.text, fontSize: 20, fontWeight: '900' },
  catSub: { color: C.dim, fontSize: 12, marginBottom: 10, marginTop: 2 },
  duaTile: { flexDirection: 'row', gap: 14, alignItems: 'center', backgroundColor: 'rgba(230,195,106,0.12)', borderRadius: 14, padding: 16, borderWidth: 1.5, borderColor: 'rgba(230,195,106,0.5)' },
  duaIcon: { fontSize: 34 },
  card: { flexDirection: 'row', gap: 14, backgroundColor: C.card, borderRadius: 14, padding: 14, marginBottom: 10, borderWidth: 1, borderColor: C.line },
  numWrap: { width: 36, height: 36, borderRadius: 18, backgroundColor: C.gold, alignItems: 'center', justifyContent: 'center' },
  num: { color: '#1a1408', fontWeight: '900', fontSize: 16 },
  keyLine: { color: C.gold ?? '#e0b84a', fontSize: 13, fontWeight: '700', marginTop: 2, fontStyle: 'italic' },
  cardTitle: { color: C.text, fontSize: 18, fontWeight: '800' },
  cardDate: { color: C.gold, fontSize: 12, marginTop: 2, marginBottom: 4 },
  cardHook: { color: C.dim, fontSize: 14, lineHeight: 20 },
  ghost: { marginTop: 22, padding: 14, borderRadius: 12, borderWidth: 1, borderColor: C.line, alignItems: 'center' },
  ghostText: { color: C.dim, fontWeight: '700' },
  back: { color: C.gold, fontSize: 16, fontWeight: '700', marginBottom: 8 },
  evTitle: { color: C.text, fontSize: 26, fontWeight: '900' },
  sceneText: { backgroundColor: C.card, padding: 16, minHeight: 120 },
  accept: { alignSelf: 'flex-start', marginTop: 10, fontSize: 11, fontWeight: '800', borderWidth: 1, borderRadius: 10, paddingHorizontal: 8, paddingVertical: 2 },
  sceneBody: { color: C.text, fontSize: 16, lineHeight: 25 },
  dots: { flexDirection: 'row', justifyContent: 'center', gap: 6, marginTop: 10 },
  dot: { width: 7, height: 7, borderRadius: 4, backgroundColor: 'rgba(255,255,255,0.22)' },
  dotOn: { backgroundColor: C.gold, width: 18 },
  swipe: { color: C.dim, textAlign: 'center', fontSize: 12, marginTop: 6 },
  panelBtn: { flex: 1, borderWidth: 2, borderRadius: 14, paddingVertical: 13, alignItems: 'center', justifyContent: 'center' },
  panelBtnText: { fontWeight: '900', fontSize: 14, textAlign: 'center' },
  panel: { paddingHorizontal: 14, marginTop: 16 },
  panelTitle: { fontSize: 19, fontWeight: '900', marginBottom: 10 },
  sec: { marginTop: 28, paddingHorizontal: 16 },
  pad: { paddingHorizontal: 14 },
  dim: { color: C.dim },
  src: { backgroundColor: C.card, borderRadius: 12, padding: 12, marginBottom: 10, borderLeftWidth: 4, borderWidth: 1, borderColor: C.line },
  srcBook: { color: C.text, fontWeight: '800', fontSize: 15 },
  srcRef: { color: C.gold, fontSize: 12, marginTop: 2 },
  srcSays: { color: C.text, fontSize: 14, lineHeight: 21, marginTop: 6 },
  srcGrade: { color: C.dim, fontSize: 12, marginTop: 6 },
  link: { color: C.sunni, fontSize: 11, marginTop: 6 },
  badge: { fontSize: 10, fontWeight: '800', borderWidth: 1, borderRadius: 8, paddingHorizontal: 6, paddingVertical: 1, marginLeft: 8 },
  dispute: { backgroundColor: C.card2, borderRadius: 12, padding: 14, marginBottom: 12, borderWidth: 1, borderColor: C.line },
  disputeTitle: { color: C.text, fontWeight: '900', fontSize: 16, marginBottom: 6 },
  vLabel: { fontWeight: '800', fontSize: 12, letterSpacing: 1, marginTop: 8, marginBottom: 3 },
  body: { color: C.text, fontSize: 15, lineHeight: 23 },
  question: { flexDirection: 'row', gap: 12, backgroundColor: 'rgba(230,195,106,0.1)', borderRadius: 12, padding: 14, marginBottom: 10, borderWidth: 1, borderColor: 'rgba(230,195,106,0.35)' },
  qMark: { color: C.gold, fontSize: 28, fontWeight: '900', width: 22 },
  qText: { color: C.text, fontSize: 16, lineHeight: 24, flex: 1, fontWeight: '600' },
  chip: { borderWidth: 1.5, borderColor: C.gold, borderRadius: 16, paddingHorizontal: 14, paddingVertical: 6 },
  chipOn: { backgroundColor: C.gold },
  chipText: { color: C.gold, fontWeight: '800', fontSize: 13 },
  duaPart: { backgroundColor: C.card, borderRadius: 14, padding: 14, marginBottom: 12, borderWidth: 1, borderColor: C.line },
  partHeading: { color: C.gold, fontWeight: '900', fontSize: 13, letterSpacing: 1, marginBottom: 8 },
  arabic: { color: '#fff8e0', fontSize: 26, lineHeight: 46, textAlign: 'right', writingDirection: 'rtl', marginBottom: 6 },
});

import React, { useMemo, useRef, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { EVENTS } from '../data/events';
import { formatCoord, formatKm, kmBetween, PLACES } from '../data/geo';
import { MAP_FOOT, MAPS, distanceRows, meccaMedinaSummary, type MapEntry, type MapRegion } from '../data/maps';
import { MODERN_WHERE } from '../data/modern';
import { TRAVEL_NOTE, formatDays, travelFor } from '../data/travel';
import { tx, ui } from '../i18n';
import { BirdMap, MAP_H, MAP_W, MapChrome, MapZoom, regionCamera, zoomBand, type Camera, type CrispLabel } from './BirdMap';
import { CamelIcon, Chevron, PinIcon } from './icons';
import { C, TOP, align, font, usePageWidth } from './theme';
import { useScrollMemory } from './scrollMemory';

const GROUPS: { id: MapRegion; title: string; sub: string }[] = [
  { id: 'hicaz', title: 'Hicaz ve Arabistan', sub: 'Mekke, Medine ve yol üstündeki yerler' },
  { id: 'irak', title: 'Irak ve Şam', sub: 'Fırat, Dicle, Kûfe ve Şam' },
];

export function MapList({ onOpen, onBack }: { onOpen: (id: string) => void; onBack: () => void }) {
  const sc = useScrollMemory('maps');
  const width = usePageWidth();
  const mapW = width - 36;
  const nums = Object.fromEntries(MAPS.map((m, i) => [m.focus, i + 1])) as Partial<Record<MapEntry['focus'], number>>;
  return (
    <ScrollView {...sc} style={{ flex: 1, backgroundColor: C.bg }} contentContainerStyle={s.page} keyboardShouldPersistTaps="handled">
      <Back onPress={onBack} />
      <Text style={[s.kicker, align()]}>KUŞ BAKIŞI</Text>
      <Text style={[s.title, align()]}>{ui('maps')}</Text>
      <Text style={[s.sub, align()]}>{ui('mapsSub')}</Text>
      <View style={s.frame}>
        <BirdMap
          width={mapW}
          markers={MAPS.map(m => m.focus)}
          labels={['mekke', 'medine']}
          numbers={nums}
        />
      </View>
      <Text style={[s.note, align()]}>Numaralar aşağıdaki yerlerle eşleşir. Mekke ile Medine arası kuş uçuşu {formatKm(kmBetween('mekke', 'medine'))}.</Text>

      {GROUPS.map(g => (
        <View key={g.id} style={{ marginTop: 22 }}>
          <Text style={[s.group, align()]}>{g.title}</Text>
          <Text style={[s.groupSub, align()]}>{g.sub}</Text>
          {MAPS.filter(m => m.region === g.id).map(m => {
            const index = MAPS.findIndex(x => x.id === m.id) + 1;
            const thumb = 118;
            return (
              <Pressable
                key={m.id}
                onPress={() => onOpen(m.id)}
                accessibilityRole="button"
                accessibilityLabel={`${m.title}. ${meccaMedinaSummary(m.focus)}`}
                style={({ pressed }) => [s.card, pressed && s.pressed]}
              >
                <View style={s.thumb}>
                  <BirdMap width={thumb} compact markers={m.show} lines={m.lines} highlight={m.focus} />
                </View>
                <View style={{ flex: 1 }}>
                  <View style={s.cardTop}>
                    <View style={s.badge}><Text style={s.badgeText}>{index}</Text></View>
                    <Text style={[s.cardTitle, align(), { flex: 1 }]}>{m.title}</Text>
                  </View>
                  <Text style={[s.cardSub, align()]}>{m.subtitle}</Text>
                  <Text style={[s.cardDist, align()]}>{meccaMedinaSummary(m.focus)}</Text>
                </View>
                <Chevron />
              </Pressable>
            );
          })}
        </View>
      ))}
    </ScrollView>
  );
}

export function MapDetail({ id, onBack, onOpenEvent }: { id: string; onBack: () => void; onOpenEvent: (eventId: string) => void }) {
  const sc = useScrollMemory('map:' + id);
  const width = usePageWidth();
  const mapW = width - 36;
  const mapH = Math.round(mapW * MAP_H / MAP_W);
  const map = MAPS.find(m => m.id === id);
  const home = useMemo(
    () => regionCamera(map?.show ?? ['mekke', 'medine'], mapW, mapH),
    [map, mapW, mapH],
  );
  const [modern, setModern] = useState(false);
  const [zoom, setZoom] = useState(() => zoomBand(home.s));
  const [cam, setCam] = useState<Camera>(home);
  const [crisp, setCrisp] = useState<CrispLabel[]>([]);
  const [fly, setFly] = useState(0);
  const seen = useRef(id);
  if (seen.current !== id) {
    seen.current = id;
    setModern(false);
    setZoom(zoomBand(home.s));
    setCam(home);
    setFly(0);
  }
  if (!map) {
    return (
      <View style={{ flex: 1, backgroundColor: C.bg, padding: 20, paddingTop: TOP }}>
        <Back onPress={onBack} />
        <Text style={s.sub}>Bu harita bulunamadı.</Text>
      </View>
    );
  }
  const place = PLACES[map.focus];
  const rows = distanceRows(map);
  const travel = travelFor(map.focus);
  const related = [map.eventId, ...map.also]
    .map(eid => EVENTS.find(e => e.id === eid))
    .filter((e): e is NonNullable<typeof e> => !!e);
  const approx = map.show.some(pid => PLACES[pid].approx);
  return (
    <ScrollView {...sc} style={{ flex: 1, backgroundColor: C.bg }} contentContainerStyle={s.page}>
      <Back onPress={onBack} />
      <Text style={[s.kicker, align()]}>{map.region === 'hicaz' ? 'HİCAZ VE ARABİSTAN' : 'IRAK VE ŞAM'}</Text>
      <Text style={[s.title, align()]}>{map.title}</Text>
      <Text style={[s.sub, align()]}>{map.subtitle}</Text>
      <Text style={[s.coord, align()]}>{place.name} · {formatCoord(place.lat, place.lon)}</Text>
      <Text style={[s.today, align()]}>Bugün: {MODERN_WHERE[place.id]}</Text>
      {!!map.placeNote && <Text style={[s.placeNote, align()]}>{map.placeNote}</Text>}

      <View style={[s.frame, { marginTop: 14 }]}>
        <MapZoom
          key={map.id}
          width={mapW}
          height={mapH}
          resetKey={map.id}
          home={home}
          maxScale={home.s * 4.2}
          flyToken={fly}
          onCamera={(next) => {
            const s = Math.round(next.s * 40) / 40;
            const x = Math.round(next.x / 2) * 2;
            const y = Math.round(next.y / 2) * 2;
            setCam(prev => (prev.s === s && prev.x === x && prev.y === y ? prev : { s, x, y }));
            const band = zoomBand(next.s);
            setZoom(z => (z === band ? z : band));
          }}
        >
          <BirdMap width={mapW} markers={map.show} lines={map.lines} highlight={map.focus} animate modern={modern} zoom={zoom} wide camera={cam.s} view={cam} deferText onCrispLabels={setCrisp} />
        </MapZoom>
        <View pointerEvents="none" style={{ position: 'absolute', left: 0, top: 0, right: 0, bottom: 0 }}>
          {crisp.map(l => (
            <Text
              key={l.key}
              style={{
                position: 'absolute',
                left: l.x - 96,
                top: l.y - l.size * 0.85,
                width: 192,
                textAlign: 'center',
                color: l.color,
                fontSize: l.size,
                lineHeight: l.size + 3,
                fontWeight: '700',
                fontStyle: l.italic ? 'italic' : 'normal',
                fontFamily: font.sans,
                textShadowColor: 'rgba(6,14,12,0.95)',
                textShadowOffset: { width: 0, height: 1 },
                textShadowRadius: 4,
              }}
            >{l.text}</Text>
          ))}
        </View>
        <MapChrome width={mapW} height={mapH} scale={cam.s} />
        <View pointerEvents="box-none" style={s.toggleWrap}>
          <Pressable
            onPress={() => setFly(n => n + 1)}
            accessibilityRole="button"
            accessibilityLabel="Tüm bölgeyi göster"
            style={s.regionBtn}
          >
            <Text style={s.regionBtnText}>Tüm bölge</Text>
          </Pressable>
          <View style={{ flex: 1 }} pointerEvents="none" />
          <Pressable
            onPress={() => setModern(v => !v)}
            accessibilityRole="button"
            accessibilityState={{ checked: modern }}
            accessibilityLabel={modern ? 'Günümüz haritasını kapat' : 'Günümüz haritasını aç'}
            style={[s.modernBtn, modern && s.modernBtnOn]}
          >
            <View style={[s.modernDot, modern && s.modernDotOn]} />
            <Text style={[s.modernBtnText, modern && s.modernBtnTextOn]}>
              {modern ? 'Günümüz haritası açık' : 'Günümüz haritası'}
            </Text>
          </Pressable>
        </View>
      </View>
      <Text style={[s.legend, align()]}>
        Kare Kâbe · Kubbe Medine · Altın halka bu yer · Eğri çizgi kuş uçuşu{approx ? ' · Baklava yaklaşık konum' : ''}
        {modern ? ' · Yıldız başkent · Açık çizgi bugünkü ülke sınırı' : ''}
      </Text>
      {modern && (
        <Text style={[s.legend, align()]}>Başkentler açıkken görünür. Yakınlaştıkça öteki şehirler çıkar. Sınırlar Natural Earth, kamu malı.</Text>
      )}
      <Text style={[s.legend, align()]}>İki parmakla yakınlaştırın ya da uzaklaştırın. Tüm bölge bütün haritayı açar. Çift dokunuş bu yerin kadrajına döner.</Text>

      <Text style={[s.h, align()]}>{ui('distances')}</Text>
      <View style={s.table}>
        {rows.map(r => (
          <View key={r.key} style={[s.row, r.context && s.rowContext]}>
            <View style={{ flex: 1 }}>
              <Text style={[s.rowLabel, r.context && { color: C.dim }]}>{r.label}</Text>
              <Text style={s.rowKind}>{r.approx ? 'kuş uçuşu · konum yaklaşık' : r.context ? 'referans · kuş uçuşu' : 'kuş uçuşu'}</Text>
            </View>
            <Text style={[s.rowKm, r.context && { color: C.goldDeep }]}>{formatKm(r.km)}</Text>
          </View>
        ))}
      </View>

      <Text style={[s.h, align()]}>O dönem şartlarında yolculuk</Text>
      <View style={s.table}>
        {travel.legs.map(leg => (
          <View key={leg.from} style={s.travelRow}>
            <View style={s.camelBox}>
              <CamelIcon size={30} />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={[s.rowLabel, align()]}>{leg.from === 'mekke' ? 'Mekke\'den' : 'Medine\'den'}</Text>
              <Text style={[s.travelMain, align()]}>Deveyle yaklaşık {formatDays(leg.camel)}</Text>
              <Text style={[s.travelSub, align()]}>Atlı ulağıyla yaklaşık {formatDays(leg.rider)}</Text>
              <Text style={[s.travelRoad, align()]}>Kervan yolu yaklaşık {formatKm(leg.roadKm)}</Text>
            </View>
          </View>
        ))}
      </View>
      {!!travel.anchor && <Text style={[s.travelAnchor, align()]}>{travel.anchor}</Text>}
      <Text style={[s.foot, align(), { marginTop: 8 }]}>{TRAVEL_NOTE}</Text>

      {map.roadNotes.map((t, i) => (
        <View key={i} style={s.road}>
          <Text style={s.roadKicker}>{ui('roadNote')}</Text>
          <Text style={[s.body, align()]}>{t}</Text>
        </View>
      ))}

      {map.paragraphs.map((p, i) => (
        <Text key={i} style={[s.body, align(), { marginTop: i === 0 ? 16 : 10 }]} selectable>{p}</Text>
      ))}
      <Text style={[s.foot, align()]}>{MAP_FOOT}</Text>

      <Text style={[s.h, align()]}>{ui('openEvent')}</Text>
      {related.map((e, i) => (
        <Pressable
          key={e.id}
          onPress={() => onOpenEvent(e.id)}
          accessibilityRole="button"
          style={({ pressed }) => [i === 0 ? s.primary : s.chip, pressed && s.pressed]}
        >
          {i === 0 && <PinIcon size={18} color={C.ink} />}
          <View style={{ flex: 1 }}>
            <Text style={[i === 0 ? s.primaryText : s.chipText, align()]}>{tx(e.title)}</Text>
            {i === 0 && <Text style={[s.primarySub, align()]}>{ui('openEvent')}</Text>}
          </View>
          <Chevron color={i === 0 ? C.ink : C.gold} />
        </Pressable>
      ))}
    </ScrollView>
  );
}

function Back({ onPress }: { onPress: () => void }) {
  return (
    <Pressable onPress={onPress} hitSlop={8} style={s.back} accessibilityRole="button">
      <Text style={s.backText}>‹  {ui('back')}</Text>
    </Pressable>
  );
}

const s = StyleSheet.create({
  page: { paddingHorizontal: 18, paddingTop: TOP, paddingBottom: 56 },
  back: { alignSelf: 'flex-start', minHeight: 44, justifyContent: 'center', paddingRight: 12 },
  backText: { color: C.gold, fontFamily: font.sans, fontSize: 16, fontWeight: '700' },
  kicker: { color: C.gold, fontFamily: font.sans, fontSize: 12, fontWeight: '700', letterSpacing: 2.2, marginTop: 4 },
  title: { color: C.cream, fontFamily: font.serif, fontSize: 32, lineHeight: 38, fontWeight: '700', marginTop: 4 },
  sub: { color: C.dim, fontFamily: font.sans, fontSize: 16, lineHeight: 24, marginTop: 8 },
  coord: { color: C.goldDeep, fontFamily: font.sans, fontSize: 13, marginTop: 8, letterSpacing: 0.2 },
  today: { color: C.cream, fontFamily: font.sans, fontSize: 14.5, lineHeight: 21, marginTop: 6, fontWeight: '700' },
  toggleWrap: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
  },
  regionBtn: {
    marginTop: 10,
    paddingHorizontal: 12,
    paddingVertical: 8,
    minHeight: 36,
    borderRadius: 999,
    backgroundColor: 'rgba(7,20,16,0.86)',
    borderWidth: 1,
    borderColor: 'rgba(228,197,106,0.9)',
    justifyContent: 'center',
  },
  regionBtnText: { color: C.cream, fontFamily: font.sans, fontSize: 12.5, fontWeight: '800' },
  modernBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 10,
    paddingHorizontal: 12,
    paddingVertical: 8,
    minHeight: 36,
    borderRadius: 999,
    backgroundColor: 'rgba(7,20,16,0.86)',
    borderWidth: 1,
    borderColor: 'rgba(228,197,106,0.9)',
  },
  modernBtnOn: { backgroundColor: C.gold, borderColor: '#f3e2b0' },
  modernDot: { width: 8, height: 8, borderRadius: 4, borderWidth: 1.2, borderColor: C.gold, backgroundColor: 'transparent' },
  modernDotOn: { backgroundColor: C.ink, borderColor: C.ink },
  modernBtnText: { color: C.cream, fontFamily: font.sans, fontSize: 12.5, fontWeight: '800', letterSpacing: 0.2 },
  modernBtnTextOn: { color: C.ink },
  travelRow: { flexDirection: 'row', alignItems: 'center', gap: 12, paddingHorizontal: 14, paddingVertical: 12, borderBottomWidth: 1, borderBottomColor: C.line },
  camelBox: { width: 42, height: 42, borderRadius: 21, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(228,197,106,0.1)', borderWidth: 1, borderColor: 'rgba(228,197,106,0.35)' },
  travelMain: { color: C.gold, fontFamily: font.serif, fontSize: 17, fontWeight: '700', marginTop: 2 },
  travelSub: { color: C.cream, fontFamily: font.sans, fontSize: 13.5, lineHeight: 19, marginTop: 3 },
  travelRoad: { color: C.faint, fontFamily: font.sans, fontSize: 12.5, lineHeight: 18, marginTop: 2 },
  travelAnchor: { color: C.text, fontFamily: font.sans, fontSize: 14.5, lineHeight: 22, marginTop: 10, backgroundColor: 'rgba(228,197,106,0.08)', borderRadius: 14, padding: 12, overflow: 'hidden' },
  placeNote: { color: C.cream, fontFamily: font.sans, fontSize: 14, lineHeight: 21, marginTop: 8, backgroundColor: 'rgba(228,197,106,0.1)', borderRadius: 12, padding: 12, overflow: 'hidden' },
  frame: { borderRadius: 18, overflow: 'hidden', borderWidth: 1, borderColor: C.lineStrong, marginTop: 16, backgroundColor: '#071820' },
  note: { color: C.dim, fontFamily: font.sans, fontSize: 13, lineHeight: 20, marginTop: 10 },
  legend: { color: C.faint, fontFamily: font.sans, fontSize: 12, lineHeight: 18, marginTop: 8 },
  group: { color: C.cream, fontFamily: font.serif, fontSize: 22, fontWeight: '700' },
  groupSub: { color: C.dim, fontFamily: font.sans, fontSize: 13, marginTop: 2, marginBottom: 10 },
  card: { flexDirection: 'row', gap: 12, alignItems: 'center', backgroundColor: C.card, borderRadius: 18, padding: 10, marginBottom: 10, borderWidth: 1, borderColor: C.line },
  pressed: { opacity: 0.86 },
  thumb: { width: 118, height: Math.round(118 * MAP_H / MAP_W), borderRadius: 12, overflow: 'hidden' },
  cardTop: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  badge: { width: 22, height: 22, borderRadius: 11, backgroundColor: C.gold, alignItems: 'center', justifyContent: 'center' },
  badgeText: { color: C.ink, fontFamily: font.sans, fontSize: 11, fontWeight: '800' },
  cardTitle: { color: C.cream, fontFamily: font.serif, fontSize: 17, lineHeight: 22, fontWeight: '700' },
  cardSub: { color: C.dim, fontFamily: font.sans, fontSize: 13, lineHeight: 18, marginTop: 4 },
  cardDist: { color: C.gold, fontFamily: font.sans, fontSize: 12.5, lineHeight: 18, marginTop: 6, fontWeight: '700' },
  h: { color: C.cream, fontFamily: font.serif, fontSize: 22, fontWeight: '700', marginTop: 22, marginBottom: 10 },
  table: { backgroundColor: C.card, borderRadius: 16, borderWidth: 1, borderColor: C.line, overflow: 'hidden' },
  row: { flexDirection: 'row', alignItems: 'center', gap: 12, paddingHorizontal: 14, paddingVertical: 12, borderBottomWidth: 1, borderBottomColor: C.line },
  rowContext: { backgroundColor: 'rgba(255,255,255,0.02)' },
  rowLabel: { color: C.cream, fontFamily: font.sans, fontSize: 15, fontWeight: '700' },
  rowKind: { color: C.faint, fontFamily: font.sans, fontSize: 12, marginTop: 2 },
  rowKm: { color: C.gold, fontFamily: font.serif, fontSize: 18, fontWeight: '700' },
  road: { marginTop: 12, backgroundColor: 'rgba(228,197,106,0.08)', borderRadius: 14, padding: 14, borderWidth: 1, borderColor: 'rgba(228,197,106,0.28)' },
  roadKicker: { color: C.gold, fontFamily: font.sans, fontSize: 11, fontWeight: '800', letterSpacing: 1.2, marginBottom: 6 },
  body: { color: C.text, fontFamily: font.sans, fontSize: 16.5, lineHeight: 27 },
  foot: { color: C.faint, fontFamily: font.sans, fontSize: 12.5, lineHeight: 19, marginTop: 14 },
  primary: { flexDirection: 'row', alignItems: 'center', gap: 10, backgroundColor: C.gold, borderRadius: 16, paddingHorizontal: 14, paddingVertical: 14, marginBottom: 8, minHeight: 56 },
  primaryText: { color: C.ink, fontFamily: font.sans, fontSize: 16, fontWeight: '800' },
  primarySub: { color: '#3d3422', fontFamily: font.sans, fontSize: 12, marginTop: 2, fontWeight: '700' },
  chip: { flexDirection: 'row', alignItems: 'center', gap: 10, borderRadius: 14, paddingHorizontal: 14, paddingVertical: 12, marginBottom: 8, minHeight: 48, borderWidth: 1, borderColor: C.lineStrong, backgroundColor: C.card },
  chipText: { color: C.cream, fontFamily: font.sans, fontSize: 15, fontWeight: '700' },
});

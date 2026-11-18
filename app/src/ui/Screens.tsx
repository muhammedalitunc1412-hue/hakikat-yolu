import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { FlatList, Image, type LayoutChangeEvent, Linking, Platform, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import type { Accept, Dispute, Dua, HistEvent, Scene, Source } from '../types';
import { getLang, tx, ui } from '../i18n';
import { FontButton, useFontScale } from './FontScale';
import { SCENE_IMAGES } from '../data/sceneImages';
import { CATEGORIES, isStory, nextEvent } from '../data/events';
import { SCENE_VIDEOS } from '../data/sceneVideos';
import { mapsForEvent } from '../data/maps';
import { PurposeCopy } from './PurposeCopy';
import { AHIDNAME_DATE, AHIDNAME_HOOK, AHIDNAME_TITLE } from '../data/malik-ahidname';
import { LogoZoom } from './LogoZoom';
import { ImageViewer } from './ImageViewer';
import { Rich } from './Rich';
import { EventVideo } from './EventVideo';
import { ArchIcon, BookIcon, ChatIcon, Chevron, PinIcon, SearchIcon } from './icons';
import { ContactSheet } from './ContactSheet';
import { C, TOP, align, font, usePageWidth, themedStyles, BLOOD } from './theme';
import { rememberScene, rememberedScene, useScrollMemory } from './scrollMemory';

const webHit = Platform.OS === 'web' ? { cursor: 'pointer' as const } : null;

function norm(s: string) {
  return s.toLocaleLowerCase('tr').replace(/â/g, 'a').replace(/î/g, 'i').replace(/û/g, 'u').replace(/ı/g, 'i');
}

function EventCard({ e, i, onOpen }: { e: HistEvent; i: number; onOpen: (id: string) => void }) {
  const red = e.id === 'kerbela' || e.id === 'fatima-vefat';
  return (
    <Pressable onPress={() => onOpen(e.id)} accessibilityRole="button" style={({ pressed }) => [s.card, red && { backgroundColor: BLOOD.card, borderColor: BLOOD.lineStrong, borderLeftWidth: 4, borderLeftColor: BLOOD.gold }, pressed && s.pressed, webHit]}>
      <View style={[s.numWrap, red && { backgroundColor: BLOOD.gold }]}><Text style={[s.num, red && { color: BLOOD.ink }]}>{i + 1}</Text></View>
      <View style={{ flex: 1 }}>
        <Text style={[s.cardTitle, red && { color: BLOOD.gold }, align()]}>{tx(e.title)}</Text>
        <Text style={[s.cardDate, red && { color: BLOOD.gold }, align()]}>{tx(e.date)}</Text>
        {!!e.key && <Text style={[s.keyLine, red && { color: BLOOD.gold }, align()]}>{tx(e.key)}</Text>}
        <Text style={[s.cardHook, red && { color: BLOOD.dim }, align()]}>{tx(e.hook)}</Text>
      </View>
      <View style={{ marginTop: 4 }}><Chevron color={red ? BLOOD.gold : undefined} /></View>
    </Pressable>
  );
}


function AhidCard({ i, onOpen }: { i: number; onOpen: () => void }) {
  return (
    <Pressable onPress={onOpen} accessibilityRole="button" style={({ pressed }) => [s.card, s.ahidCard, pressed && s.pressed, webHit]}>
      <View style={s.numWrap}><Text style={s.num}>{i + 1}</Text></View>
      <View style={{ flex: 1 }}>
        <Text style={[s.cardTitle, align()]}>{tx(AHIDNAME_TITLE)}</Text>
        <Text style={[s.cardDate, align()]}>{tx(AHIDNAME_DATE)}</Text>
        <Text style={[s.cardHook, align()]}>{tx(AHIDNAME_HOOK)}</Text>
      </View>
      <View style={{ marginTop: 4 }}><Chevron color={C.gold} /></View>
    </Pressable>
  );
}

function Back({ onPress }: { onPress: () => void }) {
  return (
    <Pressable onPress={onPress} hitSlop={8} style={s.back} accessibilityRole="button">
      <Text style={s.backText}>‹  {ui('back')}</Text>
    </Pressable>
  );
}

let lastCat = 0; // Hikâyeden dönünce aynı kategoride kalmak için

export function Home({ langName, onSettings, onStories, onMethod, onDuas, onMaps, onImams }: {
  langName: string;
  onSettings: () => void;
  onStories: () => void;
  onMethod: () => void;
  onDuas: () => void;
  onMaps: () => void;
  onImams: () => void;
}) {
  const sc = useScrollMemory('home');
  const width = usePageWidth();
  const wide = width >= 560;
  const [contactOpen, setContactOpen] = useState(false);
  return (
    <ScrollView {...sc} style={{ flex: 1, backgroundColor: C.bg }} contentContainerStyle={s.page} keyboardShouldPersistTaps="handled">
      <View style={s.topRow}>
        <FontButton />
        <Pressable onPress={onSettings} accessibilityRole="button" style={s.settings}>
          <Text style={s.settingsText}>{ui('settings')} · {langName}</Text>
        </Pressable>
      </View>
      <View style={s.hero}>
        <View style={{ flex: 1 }}>
          <Text style={s.kicker}>{ui('kicker')}</Text>
          <Text style={s.brand}>{ui('appName')}</Text>
          <Text style={[s.tagline, align()]}>{ui('tagline')}</Text>
        </View>
        <LogoZoom size={84} />
      </View>
      <View style={s.rule} />

      <Pressable onPress={onStories} accessibilityRole="button" accessibilityLabel={ui('stories')} style={({ pressed }) => [s.hikaye, pressed && s.pressed, webHit]}>
        <View style={s.hikayeGlow} pointerEvents="none" />
        <View style={s.hikayeBubble}><BookIcon size={30} /></View>
        <View style={{ flex: 1 }}>
          <Text style={s.hikayeKicker}>{ui('storiesKicker')}</Text>
          <Text style={[s.hikayeTitle, align()]}>{ui('stories')}</Text>
          <Text style={[s.hikayeSub, align()]}>{ui('storiesSub')}</Text>
        </View>
        <Chevron color={C.gold} />
      </Pressable>

      <View style={{ flexDirection: wide ? 'row' : 'column', gap: 12, marginTop: 14 }}>
        <Pressable style={({ pressed }) => [s.feature, s.featureAlt, wide && { flex: 1 }, pressed && s.pressed, webHit]} onPress={onDuas} accessibilityRole="button">
          <View style={s.bubble}><ArchIcon /></View>
          <View style={{ flex: 1 }}>
            <Text style={[s.featureTitle, align()]}>{ui('duas')}</Text>
            <Text style={[s.featureSub, align()]} numberOfLines={3}>{ui('duasSub')}</Text>
          </View>
          <Chevron color={C.gold} />
        </Pressable>
      </View>

      <Pressable style={({ pressed }) => [s.feature, { marginTop: 12 }, pressed && s.pressed, webHit]} onPress={onImams} accessibilityRole="button">
        <View style={s.bubble}><Text style={{ color: C.gold, fontFamily: font.serif, fontSize: 17, fontWeight: '700' }}>12</Text></View>
        <View style={{ flex: 1 }}>
          <Text style={[s.featureTitle, align()]}>{ui('imams')}</Text>
          <Text style={[s.featureSub, align()]}>{ui('imamsShort')}</Text>
        </View>
        <Chevron color={C.gold} />
      </Pressable>

      <Pressable style={({ pressed }) => [s.feature, { marginTop: 12 }, pressed && s.pressed, webHit]} onPress={onMaps} accessibilityRole="button">
        <View style={s.bubble}><PinIcon /></View>
        <View style={{ flex: 1 }}>
          <Text style={[s.featureTitle, align()]}>{ui('maps')}</Text>
          <Text style={[s.featureSub, align()]}>{ui('mapsSub')}</Text>
        </View>
        <Chevron color={C.gold} />
      </Pressable>

      <Pressable onPress={() => setContactOpen(true)} accessibilityRole="button" accessibilityLabel={ui('contact')} style={({ pressed }) => [s.method, pressed && s.pressed, webHit]}>
        <View style={s.bubble}><ChatIcon /></View>
        <View style={{ flex: 1 }}>
          <Text style={s.methodText}>{ui('contact')}</Text>
          <Text style={[s.featureSub, align()]}>{ui('contactSub')}</Text>
        </View>
        <Chevron />
      </Pressable>

      <Pressable onPress={onMethod} accessibilityRole="button" style={({ pressed }) => [s.method, { marginTop: 12 }, pressed && s.pressed, webHit]}>
        <View style={s.bubble}><BookIcon /></View>
        <Text style={s.methodText}>{ui('method')}</Text>
        <Chevron />
      </Pressable>
      <ContactSheet visible={contactOpen} onClose={() => setContactOpen(false)} />
    </ScrollView>
  );
}

export function Stories({ events, onBack, onOpen, onOpenAhid }: {
  events: HistEvent[];
  onBack: () => void;
  onOpen: (id: string) => void;
  onOpenAhid: () => void;
}) {
  const sc = useScrollMemory('stories');
  const width = usePageWidth();
  const [q, setQ] = useState('');
  const [catI, setCatIState] = useState(lastCat);
  const setCatI = (i: number) => { lastCat = i; setCatIState(i); };
  const catRef = useRef<FlatList<(typeof CATEGORIES)[number]>>(null);
  const query = norm(q.trim());
  const cardW = Math.min(width - 64, 460);
  const gap = 12;
  let shown = 0;
  return (
    <ScrollView {...sc} style={{ flex: 1, backgroundColor: C.bg }} contentContainerStyle={s.page} keyboardShouldPersistTaps="handled">
      <View style={s.topRow}>
        <Pressable onPress={onBack} hitSlop={8} style={s.backInline} accessibilityRole="button">
          <Text style={s.backText}>‹  {ui('back')}</Text>
        </Pressable>
        <FontButton />
      </View>
      <View style={s.storiesHead}>
        <View style={s.hikayeBubble}><BookIcon size={30} /></View>
        <View style={{ flex: 1 }}>
          <Text style={s.hikayeKicker}>{ui('storiesKicker')}</Text>
          <Text accessibilityRole="header" style={[s.storiesTitle, align()]}>{ui('stories')}</Text>
        </View>
      </View>
      <Text style={[s.tagline, align()]}>{ui('storiesSub')}</Text>
      <View style={s.rule} />

      <View style={[s.search, { marginTop: 0 }]}>
        <SearchIcon />
        <TextInput
          value={q}
          onChangeText={setQ}
          placeholder={ui('search')}
          placeholderTextColor={C.faint}
          style={s.searchInput}
          autoCorrect={false}
          accessibilityLabel={ui('search')}
        />
        {q.length > 0 && (
          <Pressable onPress={() => setQ('')} hitSlop={10} accessibilityRole="button" accessibilityLabel="Temizle">
            <Text style={s.clear}>×</Text>
          </Pressable>
        )}
      </View>

      {query ? CATEGORIES.map((cat, catIndex) => {
        const list = cat.ids
          .map(id => events.find(e => e.id === id))
          .filter((e): e is HistEvent => !!e)
          .filter(e => norm([tx(e.title), tx(e.hook), tx(e.key), tx(e.date), cat.title].join(' ')).includes(query));
        const ahidHit = cat.id === 'ali' && norm([tx(AHIDNAME_TITLE), tx(AHIDNAME_HOOK), tx(AHIDNAME_DATE), cat.title, cat.sub, 'mektup nehcü l belâğa mektup 53 eşter malik ahidname ahidnâme tuhaf'].join(' ')).includes(query);
        if (!list.length && !ahidHit) return null;
        shown += list.length + (ahidHit ? 1 : 0);
        return (
          <View key={cat.id} style={{ marginTop: 26 }}>
            <Text style={s.catIndex}>{String(catIndex + 1).padStart(2, '0')}</Text>
            <Text style={[s.catTitle, align()]}>{cat.title}</Text>
            <Text style={[s.catSub, align()]}>{cat.sub}</Text>
            {list.map((e, i) => <EventCard key={e.id} e={e} i={i} onOpen={onOpen} />)}
            {ahidHit && <AhidCard i={list.length} onOpen={onOpenAhid} />}
          </View>
        );
      }) : (
        <View style={{ marginTop: 22 }}>
          <FlatList
            ref={catRef}
            onLayout={() => { if (lastCat > 0) catRef.current?.scrollToOffset({ offset: lastCat * (cardW + gap), animated: false }); }}
            data={CATEGORIES}
            horizontal
            keyExtractor={c => c.id}
            showsHorizontalScrollIndicator={false}
            snapToInterval={cardW + gap}
            decelerationRate="fast"
            contentContainerStyle={{ paddingRight: 28 }}
            onMomentumScrollEnd={e => {
              const i = Math.max(0, Math.min(CATEGORIES.length - 1, Math.round(e.nativeEvent.contentOffset.x / (cardW + gap))));
              setCatI(i);
            }}
            renderItem={({ item: cat, index }) => {
              const on = index === catI;
              return (
                <Pressable
                  onPress={() => { setCatI(index); catRef.current?.scrollToOffset({ offset: index * (cardW + gap), animated: true }); }}
                  accessibilityRole="button"
                  accessibilityState={{ selected: on }}
                  style={[s.catCard, { width: cardW, marginRight: gap }, on && s.catCardOn, webHit]}
                >
                  <Text style={s.catIndex}>{String(index + 1).padStart(2, '0')} / {String(CATEGORIES.length).padStart(2, '0')}</Text>
                  <Text style={[s.catTitle, align()]} numberOfLines={2}>{cat.title}</Text>
                  <Text style={[s.catSub, align(), { marginBottom: 0 }]} numberOfLines={3}>{cat.sub}</Text>
                </Pressable>
              );
            }}
          />
          <View style={s.catDots}>
            {CATEGORIES.map((c, i) => <View key={c.id} style={[s.dot, i === catI && s.dotOn]} />)}
          </View>
          <Text style={s.swipe}>Sola kaydır, sonraki başlıklar sağda</Text>
          <View style={{ marginTop: 8 }}>
            {(() => {
              const evs = (CATEGORIES[catI]?.ids ?? [])
                .map(id => events.find(e => e.id === id))
                .filter((e): e is HistEvent => !!e);
              return (
                <>
                  {evs.map((e, i) => <EventCard key={e.id} e={e} i={i} onOpen={onOpen} />)}
                  {CATEGORIES[catI]?.id === 'ali' && <AhidCard i={evs.length} onOpen={onOpenAhid} />}
                </>
              );
            })()}
          </View>
        </View>
      )}
      {query && shown === 0 && <Text style={[s.empty, align()]}>{ui('noResult')}</Text>}
    </ScrollView>
  );
}

function SourceCard({ src, tone }: { src: Source; tone: string }) {
  return (
    <View style={[s.src, { borderLeftColor: tone }]}>
      <View style={s.srcHead}>
        <Text style={[s.srcBook, align(), { flex: 1 }]}>{src.book}</Text>
      </View>
      {!!src.ref && <Text style={[s.srcRef, align()]}>{src.ref}</Text>}
      <Rich style={[s.srcSays, align()]} text={src.says} />
      {!!src.grade && <Text style={[s.srcGrade, align()]}>{ui('grade')}: {tx(src.grade)}</Text>}
      {!!src.url && (
        <Pressable onPress={() => Linking.openURL(src.url!)} accessibilityRole="link" style={webHit}>
          <Text style={s.link}>{src.url.replace(/^https?:\/\//, '')}</Text>
        </Pressable>
      )}
    </View>
  );
}

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

function SceneImage({ evId, n, title, width, image }: { evId: string; n: number; title: string; width: number; image?: string }) {
  const stem = image ?? evId + '-' + n;
  const imgs: number[] = [];
  for (let k = 1; k <= 4; k++) {
    const f = SCENE_IMAGES[k === 1 ? stem : stem + '-' + k];
    if (f) imgs.push(f);
  }
  const [viewer, setViewer] = useState<number | null>(null);
  const cur = imgs.length ? imgs[0] : 0;
  const resolve = (Image as { resolveAssetSource?: (src: number) => { width?: number; height?: number } | null }).resolveAssetSource;
  let meta: { width?: number; height?: number } | null = null;
  if (cur && typeof resolve === 'function') {
    try { meta = resolve(cur); } catch { meta = null; }
  }
  const h = meta && meta.width && meta.height ? Math.round((width * meta.height) / meta.width) : Math.round((width * 9) / 16);
  if (imgs.length) {
    return (
      <>
        <Pressable onPress={() => setViewer(0)} accessibilityRole="button" accessibilityLabel="Görseli tam ekran aç">
          <Image source={cur} resizeMode="cover" resizeMethod="resize" style={{ width, height: h }} />
          <View style={s.imgCount}>
            <Text style={s.imgCountText}>⤢{imgs.length > 1 ? ` ${imgs.length} görsel` : ''}</Text>
          </View>
        </Pressable>
        {viewer !== null && <ImageViewer images={imgs} start={viewer} caption={title + ' · Sahne ' + n} onClose={() => setViewer(null)} />}
      </>
    );
  }
  return (
    <View style={[s.ph, { width, height: h }]}>
      <Text style={{ color: C.gold, fontSize: 28 }}>▣</Text>
      <Text style={s.phTitle}>TEST GÖRSELİ</Text>
      <Text style={s.phSub}>{title} · Sahne {n}</Text>
      <Text style={s.phFile}>{stem}.jpg</Text>
    </View>
  );
}

function AcceptChip({ by }: { by: Accept }) {
  const col = by === 'shia' ? C.shia : by === 'sunni' ? C.sunni : by === 'partial' ? C.partial : C.gold;
  const label = by === 'shia' ? ui('acceptShia') : by === 'sunni' ? ui('acceptSunni') : by === 'partial' ? ui('acceptPartial') : ui('acceptBoth');
  return <Text style={[s.accept, { color: col, borderColor: col }]}>{label}</Text>;
}

type Panel = 'shia' | 'sunni' | 'disputes';
type StoryPage =
  | { kind: 'scene'; scene: Scene; n: number }
  | { kind: 'video' };

// Sahnenin kendi kaynakları: mezhepler sayfasındaki gibi yan yana iki düğme (Şii | Sünni), varsayılan kapalı.
// Yalnızca bu sahnenin `cites` listesindeki kaynaklar gösterilir; bir tarafta kaynak yoksa o düğme çıkmaz.
function SceneCites({ ev, cites }: { ev: HistEvent; cites?: Scene['cites'] }) {
  const [open, setOpen] = useState<{ shia: boolean; sunni: boolean }>({ shia: false, sunni: false });
  const pick = (side: 'shia' | 'sunni') => {
    const seen = new Set<number>();
    const list = side === 'shia' ? ev.shia : ev.sunni;
    return (cites ?? []).flatMap(c => {
      if (c.side !== side || seen.has(c.i) || !list[c.i]) return [];
      seen.add(c.i);
      return [list[c.i]];
    });
  };
  const shia = pick('shia');
  const sunni = pick('sunni');
  if (!shia.length && !sunni.length) return null;
  const btn = (side: 'shia' | 'sunni', n: number) => {
    const color = side === 'shia' ? C.shia : C.sunni;
    const on = open[side];
    return (
      <Pressable key={side} onPress={() => setOpen(v => ({ ...v, [side]: !v[side] }))} accessibilityRole="button" accessibilityState={{ expanded: on }} style={[s.panelBtn, { borderColor: color }, on && { backgroundColor: color }, webHit]}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
          <Text style={[s.panelBtnText, { color: on ? C.ink : color, flexShrink: 1 }]}>{ui(side === 'shia' ? 'shiaSources' : 'sunniSources')} ({n})</Text>
          <Text style={[s.panelBtnText, { color: on ? C.ink : color }]}>{on ? '▲' : '▼'}</Text>
        </View>
      </Pressable>
    );
  };
  return (
    <View style={{ marginTop: 14 }}>
      <View style={{ flexDirection: 'row', gap: 10 }}>
        {shia.length > 0 && btn('shia', shia.length)}
        {sunni.length > 0 && btn('sunni', sunni.length)}
      </View>
      {open.shia && shia.map((src, i) => <SourceCard key={'h' + i} src={src} tone={C.shia} />)}
      {open.sunni && sunni.map((src, i) => <SourceCard key={'s' + i} src={src} tone={C.sunni} />)}
    </View>
  );
}

type ScenePageItem = Extract<StoryPage, { kind: 'scene' }>;

// Sahne sayfası: yalnızca kendi verisi değişince yeniden çizilir. Eskiden EventScreen her
// setIdx / yükseklik güncellemesinde bütün sahneleri (görsel + uzun metin) baştan çiziyordu.
const ScenePage = React.memo(function ScenePage({ ev, item, index, width, story, lang, scale, onHeight }: {
  ev: HistEvent; item: ScenePageItem; index: number; width: number; story: boolean; lang: string; scale: number;
  onHeight: (index: number, h: number) => void;
}) {
  void lang; void scale; // dil ve yazı boyutu değişince memo'yu kırmak için
  const onLayout = useCallback((e: LayoutChangeEvent) => onHeight(index, e.nativeEvent.layout.height), [onHeight, index]);
  return (
    <View style={{ width }}>
      <View collapsable={false} onLayout={onLayout}>
        {!item.scene.textOnly && <SceneImage evId={ev.id} n={item.n + 1} title={tx(ev.title)} width={width} image={item.scene.image} />}
        <View style={s.sceneText}>
          <Rich style={[s.sceneBody, align()]} text={item.scene.text} selectable={Platform.OS !== 'android'} />
          {!!item.scene.by && <AcceptChip by={item.scene.by} />}
          {story && <SceneCites ev={ev} cites={item.scene.cites} />}
        </View>
      </View>
    </View>
  );
});

export function EventScreen({ ev, onBack, onOpenMap, onNext }: { ev: HistEvent; onBack: () => void; onOpenMap: (mapId: string) => void; onNext?: (id: string) => void }) {
  const sc = useScrollMemory('event:' + ev.id);
  const width = usePageWidth();
  const [idx, setIdx] = useState(() => rememberedScene('event:' + ev.id));
  const [open, setOpen] = useState<Panel[]>([]);
  const listRef = useRef<FlatList<StoryPage>>(null);
  // initialScrollIndex yalnızca ilk açılışta okunmalı; idx ile birlikte değişirse FlatList
  // içerik boyutu değiştiğinde listeyi o eski/yeni indekse geri kaydırabiliyor.
  const [initialIdx] = useState(idx);
  const toggle = (p: Panel) => setOpen(o => (o.includes(p) ? o.filter(x => x !== p) : [...o, p]));
  const has = (p: Panel) => open.includes(p);
  const nDis = ev.disputes?.length ?? 0;
  const story = isStory(ev.id);
  const nxt = nextEvent(ev.id);
  const pages = useMemo<StoryPage[]>(() => [
    ...ev.scenes.map((scene, n) => ({ kind: 'scene' as const, scene, n })),
    ...(story && SCENE_VIDEOS[ev.id + '-video'] ? [{ kind: 'video' as const }] : []),
  ], [ev, story]);
  const total = pages.length;
  // Liste yüksekliği SABİT: ölçülmüş en uzun sahnenin yüksekliği (maxH), yalnızca uzun bir sahne ilk kez
  // ölçülünce büyür. Kaydırma sırasında liste hiç yeniden boyutlanmaz. Kısa sahnelerin altındaki boşluk,
  // kaydırma durup 320 ms geçince negatif alt kenar boşluğuyla (curH) kapatılır; böylece görünüm eskisi gibi kalır.
  const heightsRef = useRef<number[]>([]);
  const [maxH, setMaxH] = useState(0);
  const [curH, setCurH] = useState(0);
  const settledRef = useRef(idx);
  const setPageHeight = useCallback((index: number, h: number) => {
    const n = Math.ceil(h);
    if (Math.abs((heightsRef.current[index] ?? 0) - n) < 2) return;
    heightsRef.current[index] = n;
    setMaxH(m => (n > m ? n : m));
    if (index === settledRef.current) setCurH(n);
  }, []);
  const maps = mapsForEvent(ev.id);
  // idxRef: arka arkaya basışlarda eski (render'dan kalma) idx yerine en son hedef kullanılır.
  const idxRef = useRef(idx);
  const idleTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const dragging = useRef(false);
  const momentum = useRef(false);
  const pendingGo = useRef<number | null>(null);
  const lastX = useRef(0);
  const lastT = useRef(0);
  const settle = useRef<ReturnType<typeof setTimeout> | null>(null);
  const goTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => () => {
    if (settle.current) clearTimeout(settle.current);
    if (goTimer.current) clearTimeout(goTimer.current);
    if (idleTimer.current) clearTimeout(idleTimer.current);
  }, []);
  // Kaydırma tamamen durup 320 ms geçince sayfa altı boşluğu (curH) güncellenir.
  const armIdle = () => {
    if (idleTimer.current) clearTimeout(idleTimer.current);
    idleTimer.current = setTimeout(() => {
      idleTimer.current = null;
      if (dragging.current || momentum.current) { armIdle(); return; }
      settledRef.current = idxRef.current;
      setCurH(heightsRef.current[idxRef.current] ?? 0);
    }, 320);
  };
  const commit = (i: number) => {
    idxRef.current = i;
    rememberScene('event:' + ev.id, i);
    setIdx(cur => (cur === i ? cur : i));
    armIdle();
  };
  const go = (i: number) => {
    const next = Math.max(0, Math.min(total - 1, i));
    pendingGo.current = next;
    listRef.current?.scrollToOffset({ offset: width * next, animated: true });
    idxRef.current = next;
    rememberScene('event:' + ev.id, next);
    setIdx(cur => (cur === next ? cur : next));
    armIdle();
    // Animasyon bitince (ya da olay gelmezse 700 ms sonra) bekleyen hedef temizlenir.
    if (goTimer.current) clearTimeout(goTimer.current);
    goTimer.current = setTimeout(() => {
      goTimer.current = null;
      pendingGo.current = null;
    }, 700);
  };
  const step = (d: number) => go(idxRef.current + d);
  // Kaydırma bitmeden sahne değiştirilmez. Eskiden parmak kalkar kalkmaz (onScrollEndDrag) yarım
  // kalmış konumdan sahne hesaplanıyordu; bu, kayma sürerken listenin yüksekliğini yeni sahneye göre
  // değiştiriyor ve Android'de süren sayfa kaydırmasını yarıda kesip eski sahneye geri attırıyordu.
  const sync = (x: number) => {
    if (settle.current) { clearTimeout(settle.current); settle.current = null; }
    const w = Math.max(width, 1);
    // Düğmeyle başlatılmış animasyon henüz hedefe varmadıysa ara konumdan sahne hesaplanmaz.
    if (pendingGo.current !== null) {
      if (Math.abs(x - pendingGo.current * w) > 1) return;
      pendingGo.current = null;
      if (goTimer.current) { clearTimeout(goTimer.current); goTimer.current = null; }
    }
    const i = Math.max(0, Math.min(total - 1, Math.round(x / w)));
    // Sayfanın tam ortasında durmadıysa (örn. web'de) en yakın sahneye oturt
    if (Math.abs(x - i * w) > 1 && !momentum.current) listRef.current?.scrollToOffset({ offset: i * w, animated: true });
    commit(i);
  };
  // Kaydırma olayı başına yalnızca iki ref yazılır; zamanlayıcı sessizlik olunca bir kez çalışır.
  const armSettle = (ms: number) => {
    settle.current = setTimeout(() => {
      settle.current = null;
      const quiet = Date.now() - lastT.current;
      if (quiet < 170) { armSettle(180 - quiet); return; }
      if (dragging.current) return;
      // Native'de momentum sürerken onScroll yok: sahne onMomentumScrollEnd ile belirlenir; yalnızca 2,5 sn'lik emniyet payı.
      if (momentum.current && quiet < 2500) { armSettle(400); return; }
      momentum.current = false;
      sync(lastX.current);
    }, ms);
  };
  const onListScroll = (x: number) => {
    lastX.current = x;
    lastT.current = Date.now();
    if (!settle.current) armSettle(200);
  };
  const keyExtractor = useCallback((_: StoryPage, i: number) => String(i), []);
  const getItemLayout = useCallback((_: ArrayLike<StoryPage> | null | undefined, i: number) => ({ length: width, offset: width * i, index: i }), [width]);
  const lang = getLang();
  const { scale } = useFontScale();
  const renderPage = useCallback(({ item, index }: { item: StoryPage; index: number }) => item.kind === 'video' ? (
    <View style={{ width }}>
      <View collapsable={false} onLayout={e => setPageHeight(index, e.nativeEvent.layout.height)}>
        <EventVideo evId={ev.id} width={width} />
        <View style={s.sceneText}>
          <Text style={[s.sceneBody, align(), { fontWeight: '800', color: C.gold }]}>{ui('video')}</Text>
          <Text style={[s.dim, align(), { marginTop: 6 }]}>{ui('videoHint')}</Text>
        </View>
      </View>
    </View>
  ) : (
    <ScenePage ev={ev} item={item} index={index} width={width} story={story} lang={lang} scale={scale} onHeight={setPageHeight} />
  ), [width, ev, story, setPageHeight, lang, scale]);

  const Btn = ({ p, label, n, color }: { p: Panel; label: string; n: number; color: string }) => (
    <Pressable onPress={() => toggle(p)} accessibilityRole="button" style={[s.panelBtn, { borderColor: color }, has(p) && { backgroundColor: color }, webHit]}>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
        <Text style={[s.panelBtnText, { color: has(p) ? C.ink : color, flexShrink: 1 }]}>{label} ({n})</Text>
        <Text style={[s.panelBtnText, { color: has(p) ? C.ink : color }]}>{has(p) ? '▲' : '▼'}</Text>
      </View>
    </Pressable>
  );

  // Sahne kaydırılırken yalnızca sayfa sayacı yeniden çizilsin: başlık ve alt bölümler (özet, notlar, sorular)
  // idx'ten bağımsızdır, bu yüzden önbelleğe alınır.
  const header = useMemo(() => (
    <>
        <View style={s.evHead}>
          <Back onPress={onBack} />
          <Text style={[s.evTitle, align()]}>{tx(ev.title)}</Text>
          <Text style={[s.cardDate, align(), { marginTop: 6 }]}>{tx(ev.date)}</Text>
          {!!ev.key && (
            <View style={s.quote}><Text style={[s.quoteText, align()]}>{tx(ev.key)}</Text></View>
          )}
          {maps.map(m => (
            <Pressable key={m.id} onPress={() => onOpenMap(m.id)} accessibilityRole="button" accessibilityLabel={`${ui('seeMap')}: ${m.title}`} style={({ pressed }) => [s.mapBtn, pressed && s.pressed, webHit]}>
              <PinIcon size={18} />
              <View style={{ flex: 1 }}>
                <Text style={s.mapBtnTitle}>{ui('seeMap')}</Text>
                <Text style={s.mapBtnSub}>{m.title}</Text>
              </View>
              <Chevron color={C.gold} />
            </Pressable>
          ))}
        </View>
    </>
  ), [ev, maps, onBack, onOpenMap, scale, lang]);
  const below = useMemo(() => (
    <>
        <View style={{ paddingHorizontal: 16, marginTop: 18, gap: 10 }}>
          {!story && (
            <View style={{ flexDirection: 'row', gap: 10 }}>
              <Btn p="shia" label={ui('shiaSources')} n={ev.shia.length} color={C.shia} />
              <Btn p="sunni" label={ui('sunniSources')} n={ev.sunni.length} color={C.sunni} />
            </View>
          )}
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

        <Text style={[s.h2, s.sec, align()]}>{ui('think')}</Text>
        <View style={s.pad}>
          {ev.questions.map((q, i) => (
            <View key={i} style={s.question}>
              <View style={s.qBubble}><Text style={s.qMark}>?</Text></View>
              <Rich style={[s.qText, align()]} text={q} />
            </View>
          ))}
        </View>

        <Text style={[s.h2, s.sec, align()]}>{ui('summary')}</Text>
        <View style={s.pad}><Rich style={[s.body, align()]} text={ev.summary} selectable /></View>

        {!!ev.notes?.length && (
          <>
            <Text style={[s.h2, s.sec, align()]}>{ui('notes')}</Text>
            <View style={s.pad}>
              {ev.notes.map((n, i) => (
                <View key={i} style={s.noteRow}>
                  <View style={s.noteDot} />
                  <Rich style={[s.qText, align()]} text={n} selectable />
                </View>
              ))}
            </View>
          </>
        )}
    </>
  ), [ev, story, nDis, open, scale, lang]);

  return (
    <View style={{ flex: 1, backgroundColor: C.bg }}>
      <ScrollView
        {...sc}
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingBottom: 64, flexGrow: 0 }}
        keyboardShouldPersistTaps="handled"
        nestedScrollEnabled
        directionalLockEnabled
      >
        {header}

        <FlatList
          ref={listRef}
          data={pages}
          initialScrollIndex={Math.max(0, Math.min(initialIdx, pages.length - 1))}
          horizontal
          pagingEnabled
          nestedScrollEnabled
          directionalLockEnabled
          showsHorizontalScrollIndicator={false}
          style={[s.sceneList, maxH ? { height: maxH, marginBottom: curH && curH <= maxH ? curH - maxH : 0 } : null]}
          keyExtractor={keyExtractor}
          scrollEventThrottle={Platform.OS === 'web' ? 32 : undefined}
          decelerationRate="fast"
          // Native'de kaydırma olayı (60/sn JS trafiği) gerekmez; web'de momentum olayı olmadığından onScroll kalır.
          onScroll={Platform.OS === 'web' ? (e => onListScroll(e.nativeEvent.contentOffset.x)) : undefined}
          onScrollBeginDrag={() => { dragging.current = true; pendingGo.current = null; armIdle(); }}
          onScrollEndDrag={e => { dragging.current = false; onListScroll(e.nativeEvent.contentOffset.x); }}
          onMomentumScrollBegin={() => { momentum.current = true; }}
          onMomentumScrollEnd={e => { momentum.current = false; dragging.current = false; sync(e.nativeEvent.contentOffset.x); }}
          getItemLayout={getItemLayout}
          // Sahneler tam ekran genişliğinde ve görselli; hepsini birden bellekte tutmak (varsayılan
          // windowSize 21) hızlı kaydırmada takılma yaratıyordu. Yalnızca yakın sahneler bağlı kalır.
          windowSize={7}
          initialNumToRender={5}
          maxToRenderPerBatch={4}
          updateCellsBatchingPeriod={30}
          removeClippedSubviews={false}
          renderItem={renderPage}
        />

        <View style={s.pager}>
          <Pressable onPress={() => step(-1)} disabled={idx === 0} accessibilityRole="button" accessibilityLabel={ui('prev')} style={({ pressed }) => [s.pill, idx === 0 && s.pagerOff, pressed && s.pressed, webHit]}>
            <Text style={s.pillIcon}>‹</Text>
            <Text style={s.pillText} numberOfLines={1}>{ui('prev')}</Text>
          </Pressable>
          <View style={{ flex: 1, alignItems: 'center', paddingHorizontal: 4 }}>
            <Text style={s.pagerLabel} numberOfLines={1}>{pages[idx]?.kind === 'video' ? ui('video') : `${ui('scene')} ${(pages[idx] && pages[idx].kind === 'scene' ? pages[idx].n : idx) + 1} / ${ev.scenes.length}`}</Text>
            <View style={s.dots}>
              {pages.map((_, i) => <View key={i} style={[s.dot, i === idx && s.dotOn]} />)}
            </View>
          </View>
          <Pressable onPress={() => step(1)} disabled={idx === total - 1} accessibilityRole="button" accessibilityLabel={ui('nextScene')} style={({ pressed }) => [s.pill, idx === total - 1 && s.pagerOff, pressed && s.pressed, webHit]}>
            <Text style={s.pillText} numberOfLines={1}>{ui('nextScene')}</Text>
            <Text style={s.pillIcon}>›</Text>
          </Pressable>
        </View>
        {idx === 0 && <Text style={s.swipe}>Kaydır veya oklara bas</Text>}

        {below}
      </ScrollView>
      {idx === total - 1 && idx > 0 && (
        <Pressable onPress={() => step(-1)} accessibilityRole="button" accessibilityLabel={ui('prevScene')} style={({ pressed }) => [s.prevBar, pressed && s.pressed, webHit]}>
          <Text style={s.prevBarText}>‹  {ui('prevScene')}</Text>
        </Pressable>
      )}
      {idx === total - 1 && nxt && onNext && (
        <Pressable onPress={() => onNext(nxt.id)} accessibilityRole="button" accessibilityLabel={ui('nextEvent')} style={({ pressed }) => [s.nextBar, pressed && s.pressed, webHit]}>
          <View style={{ flex: 1 }}>
            <Text style={s.nextKicker}>{ui('nextEvent').toLocaleUpperCase('tr')}</Text>
            <Text style={s.nextTitle} numberOfLines={2}>{tx(nxt.title)}</Text>
          </View>
          <View style={s.nextArrow}><Chevron color={C.gold} /></View>
        </Pressable>
      )}
    </View>
  );
}

export function DuaList({ duas, onOpen, onBack }: { duas: Dua[]; onOpen: (id: string) => void; onBack: () => void }) {
  const sc = useScrollMemory('duas');
  return (
    <ScrollView {...sc} style={{ flex: 1, backgroundColor: C.bg }} contentContainerStyle={s.page}>
      <Back onPress={onBack} />
      <Text style={[s.kicker, align()]}>DUA</Text>
      <Text style={[s.evTitle, align()]}>{ui('duas')}</Text>
      <Text style={[s.tagline, align(), { marginBottom: 16 }]}>{ui('duasSub')}</Text>
      {duas.length === 0 && <Text style={s.dim}>Dualar hazırlanıyor.</Text>}
      {duas.map(d => (
        <Pressable key={d.id} onPress={() => onOpen(d.id)} accessibilityRole="button" style={({ pressed }) => [s.card, pressed && s.pressed, webHit]}>
          <View style={s.bubble}><ArchIcon size={20} /></View>
          <View style={{ flex: 1 }}>
            <Text style={[s.cardTitle, align()]}>{tx(d.title)}</Text>
            {!!d.when && <Text style={[s.cardDate, align()]}>{d.when}</Text>}
            {!!d.intro && <Text style={[s.cardHook, align()]}>{d.intro}</Text>}
          </View>
          <Chevron />
        </Pressable>
      ))}
    </ScrollView>
  );
}

export function DuaScreen({ dua, onBack }: { dua: Dua; onBack: () => void }) {
  const sc = useScrollMemory('dua:' + dua.id);
  const [show, setShow] = useState({ ar: true, ok: true, me: true });
  const Chip = ({ k, label }: { k: 'ar' | 'ok' | 'me'; label: string }) => (
    <Pressable onPress={() => setShow(v => ({ ...v, [k]: !v[k] }))} accessibilityRole="button" style={[s.chip, show[k] && s.chipOn, webHit]}>
      <Text style={[s.chipText, show[k] && { color: C.ink }]}>{label}</Text>
    </Pressable>
  );
  return (
    <ScrollView {...sc} style={{ flex: 1, backgroundColor: C.bg }} contentContainerStyle={s.page}>
      <Back onPress={onBack} />
      <Text style={[s.evTitle, align()]}>{tx(dua.title)}</Text>
      {!!dua.when && <Text style={[s.cardDate, align(), { marginTop: 6 }]}>{dua.when}</Text>}
      {!!dua.intro && <Text style={[s.body, align(), { marginTop: 10 }]} selectable>{dua.intro}</Text>}
      <View style={s.chipRow}>
        <Chip k="ar" label={ui('arabic')} /><Chip k="ok" label={ui('okunus')} /><Chip k="me" label={ui('meal')} />
      </View>
      {!!dua.note && <Text style={[s.dim, { marginBottom: 10 }]}>{dua.note}</Text>}

      {dua.parts.map((p, i) => (
        <View key={i} style={s.duaPart}>
          {!!p.heading && <Text style={s.partHeading}>{p.heading}</Text>}
          {show.ar && <View style={s.arBox}><Text style={s.arabic} selectable>{p.ar}</Text></View>}
          {show.ok && <><Text style={[s.vLabel, { color: C.gold }]}>{ui('okunus')}</Text><Text style={[s.body, { fontStyle: 'italic' }]} selectable>{p.okunus}</Text></>}
          {show.me && <><Text style={[s.vLabel, { color: C.shia }]}>{ui('meal')}</Text><Text style={s.body} selectable>{p.meal}</Text></>}
        </View>
      ))}

      <Text style={[s.srcRef, { marginTop: 8 }]}>{ui('duaSource')}: {dua.source}</Text>
      {!!dua.url && (
        <Pressable onPress={() => Linking.openURL(dua.url!)} accessibilityRole="link" style={webHit}>
          <Text style={s.link}>{dua.url.replace(/^https?:\/\//, '')}</Text>
        </Pressable>
      )}
    </ScrollView>
  );
}

export function Method({ onBack }: { onBack: () => void }) {
  const sc = useScrollMemory('method');
  return (
    <ScrollView {...sc} style={{ flex: 1, backgroundColor: C.bg }} contentContainerStyle={s.page}>
      <Back onPress={onBack} />
      <PurposeCopy />
    </ScrollView>
  );
}

const s = themedStyles(() => StyleSheet.create({
  page: { paddingHorizontal: 18, paddingTop: TOP, paddingBottom: 56 },
  topRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', gap: 8, marginBottom: 6 },
  settings: { minHeight: 44, justifyContent: 'center', paddingHorizontal: 12, backgroundColor: C.card, borderRadius: 12 },
  settingsText: { color: C.gold, fontFamily: font.sans, fontSize: 13, fontWeight: '700' },
  hero: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  logo: { width: 84, height: 84, backgroundColor: 'transparent' },
  kicker: { color: C.gold, fontFamily: font.sans, fontSize: 12, fontWeight: '700', letterSpacing: 2.4 },
  brand: { color: C.cream, fontFamily: font.serif, fontSize: 34, lineHeight: 40, fontWeight: '700', letterSpacing: 1.2, marginTop: 2 },
  tagline: { color: C.dim, fontFamily: font.sans, fontSize: 15.5, lineHeight: 23, marginTop: 8 },
  rule: { height: 1, backgroundColor: C.line, marginTop: 18, marginBottom: 16 },
  feature: { flexDirection: 'row', alignItems: 'center', gap: 12, backgroundColor: C.card, borderRadius: 18, padding: 14, minHeight: 92, borderWidth: 1, borderColor: C.lineStrong },
  featureAlt: { backgroundColor: '#152922' },
  featureTitle: { color: C.cream, fontFamily: font.serif, fontSize: 18, fontWeight: '700' },
  featureSub: { color: C.dim, fontFamily: font.sans, fontSize: 13, lineHeight: 18, marginTop: 3 },
  bubble: { width: 44, height: 44, borderRadius: 22, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(228,197,106,0.12)', borderWidth: 1, borderColor: 'rgba(228,197,106,0.35)' },
  hikaye: { flexDirection: 'row', alignItems: 'center', gap: 14, borderRadius: 22, padding: 18, minHeight: 124, borderWidth: 1.5, borderColor: C.gold, backgroundColor: C.card2, overflow: 'hidden' },
  hikayeGlow: { position: 'absolute', left: -40, top: -40, width: 200, height: 200, borderRadius: 100, backgroundColor: 'rgba(228,197,106,0.10)' },
  hikayeBubble: { width: 58, height: 58, borderRadius: 29, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(228,197,106,0.16)', borderWidth: 1.5, borderColor: C.gold },
  hikayeKicker: { color: C.goldDeep, fontFamily: font.sans, fontSize: 11, fontWeight: '800', letterSpacing: 2.4 },
  hikayeTitle: { color: C.cream, fontFamily: font.serif, fontSize: 28, lineHeight: 34, fontWeight: '700', marginTop: 2 },
  hikayeSub: { color: C.dim, fontFamily: font.sans, fontSize: 14, lineHeight: 20, marginTop: 4 },
  storiesHead: { flexDirection: 'row', alignItems: 'center', gap: 14, marginTop: 4, marginBottom: 12 },
  storiesTitle: { color: C.cream, fontFamily: font.serif, fontSize: 36, lineHeight: 42, fontWeight: '700', marginTop: 2 },
  backInline: { flex: 1, minHeight: 44, justifyContent: 'center' },
  search: { flexDirection: 'row', alignItems: 'center', gap: 10, marginTop: 16, backgroundColor: C.card, borderRadius: 16, paddingHorizontal: 14, minHeight: 52, borderWidth: 1, borderColor: C.line },
  searchInput: { flex: 1, color: C.cream, fontFamily: font.sans, fontSize: 16, paddingVertical: 12 },
  clear: { color: C.gold, fontSize: 22, fontWeight: '600', paddingHorizontal: 4 },
  catIndex: { color: C.gold, fontFamily: font.sans, fontSize: 12, fontWeight: '800', letterSpacing: 1.5 },
  catTitle: { color: C.cream, fontFamily: font.serif, fontSize: 24, lineHeight: 30, fontWeight: '700', marginTop: 2 },
  catSub: { color: C.dim, fontFamily: font.sans, fontSize: 13.5, lineHeight: 20, marginTop: 3, marginBottom: 12 },
  catCard: { backgroundColor: C.card, borderRadius: 18, padding: 16, minHeight: 132, borderWidth: 1, borderColor: C.line, justifyContent: 'center' },
  catCardOn: { borderColor: C.gold, backgroundColor: '#1a332c' },
  catDots: { flexDirection: 'row', justifyContent: 'center', gap: 5, marginTop: 10 },
  citeBtn: { alignSelf: 'flex-start', borderWidth: 1, borderColor: C.lineStrong, borderRadius: 12, paddingHorizontal: 12, paddingVertical: 8 },
  citeBtnText: { color: C.gold, fontFamily: font.sans, fontSize: 13, fontWeight: '800' },
  srcFold: { marginTop: 12, borderWidth: 1.5, borderRadius: 16, paddingVertical: 14, paddingHorizontal: 14, minHeight: 52, justifyContent: 'center' },
  srcFoldText: { fontFamily: font.sans, fontWeight: '800', fontSize: 15, lineHeight: 20 },
  prevBar: { minHeight: 52, marginHorizontal: 16, marginBottom: 10, borderRadius: 26, borderWidth: 1.5, borderColor: C.gold, backgroundColor: 'rgba(228,197,106,0.12)', alignItems: 'center', justifyContent: 'center' },
  prevBarText: { color: C.gold, fontFamily: font.sans, fontSize: 16, fontWeight: '800' },
  nextBar: { flexDirection: 'row', alignItems: 'center', gap: 12, backgroundColor: C.gold, marginHorizontal: 16, marginBottom: 14, paddingLeft: 20, paddingRight: 12, paddingVertical: 12, minHeight: 76, borderRadius: 24, borderWidth: 1, borderColor: C.cream },
  nextKicker: { color: C.ink, fontFamily: font.sans, fontSize: 11, fontWeight: '800', letterSpacing: 1.4 },
  nextTitle: { color: C.ink, fontFamily: font.serif, fontSize: 19, lineHeight: 24, fontWeight: '700', marginTop: 2 },
  nextArrow: { width: 40, height: 40, borderRadius: 20, backgroundColor: C.ink, alignItems: 'center', justifyContent: 'center' },
  card: { flexDirection: 'row', gap: 12, alignItems: 'flex-start', backgroundColor: C.card, borderRadius: 18, padding: 14, marginBottom: 10, borderWidth: 1, borderColor: C.line },
  ahidCard: { borderColor: C.gold, borderLeftWidth: 3, borderLeftColor: C.gold },
  pressed: { opacity: 0.86 },
  numWrap: { width: 32, height: 32, borderRadius: 16, backgroundColor: C.gold, alignItems: 'center', justifyContent: 'center', marginTop: 2 },
  num: { color: C.ink, fontFamily: font.sans, fontWeight: '800', fontSize: 14 },
  cardTitle: { color: C.cream, fontFamily: font.serif, fontSize: 18, lineHeight: 24, fontWeight: '700' },
  cardDate: { color: C.goldDeep, fontFamily: font.sans, fontSize: 12.5, marginTop: 4 },
  keyLine: { color: C.gold, fontFamily: font.serif, fontSize: 14, lineHeight: 20, marginTop: 6, fontStyle: 'italic' },
  cardHook: { color: C.dim, fontFamily: font.sans, fontSize: 14.5, lineHeight: 21, marginTop: 6 },
  empty: { color: C.dim, fontFamily: font.sans, fontSize: 15, marginTop: 22 },
  method: { flexDirection: 'row', alignItems: 'center', gap: 12, marginTop: 22, padding: 14, borderRadius: 18, borderWidth: 1, borderColor: C.line, backgroundColor: C.card2, minHeight: 72 },
  methodText: { flex: 1, color: C.cream, fontFamily: font.sans, fontSize: 16, fontWeight: '700' },
  back: { alignSelf: 'flex-start', minHeight: 44, justifyContent: 'center', paddingRight: 12, marginBottom: 4 },
  backText: { color: C.gold, fontFamily: font.sans, fontSize: 16, fontWeight: '700' },
  evHead: { paddingTop: TOP, paddingHorizontal: 18, paddingBottom: 12 },
  evTitle: { color: C.cream, fontFamily: font.serif, fontSize: 30, lineHeight: 36, fontWeight: '700' },
  quote: { marginTop: 12, borderLeftWidth: 3, borderLeftColor: C.gold, paddingLeft: 12, paddingVertical: 2 },
  quoteText: { color: C.gold, fontFamily: font.serif, fontSize: 16, lineHeight: 24, fontStyle: 'italic' },
  mapBtn: { flexDirection: 'row', alignItems: 'center', gap: 10, marginTop: 14, backgroundColor: 'rgba(228,197,106,0.1)', borderRadius: 16, paddingHorizontal: 14, paddingVertical: 12, minHeight: 56, borderWidth: 1, borderColor: 'rgba(228,197,106,0.35)' },
  mapBtnTitle: { color: C.gold, fontFamily: font.sans, fontSize: 12, fontWeight: '800', letterSpacing: 0.6 },
  mapBtnSub: { color: C.cream, fontFamily: font.sans, fontSize: 15, fontWeight: '700', marginTop: 1 },
  sceneList: { flexGrow: 0, width: '100%' },
  sceneText: { backgroundColor: C.card, paddingHorizontal: 18, paddingVertical: 18 },
  sceneBody: { color: C.text, fontFamily: font.sans, fontSize: 17, lineHeight: 28 },
  accept: { alignSelf: 'flex-start', marginTop: 12, fontFamily: font.sans, fontSize: 12, fontWeight: '800', borderWidth: 1, borderRadius: 12, paddingHorizontal: 10, paddingVertical: 4 },
  pager: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 12, marginTop: 8 },
  pagerBtn: { width: 48, height: 48, borderRadius: 24, alignItems: 'center', justifyContent: 'center', backgroundColor: C.card, borderWidth: 1, borderColor: C.lineStrong },
  pagerOff: { opacity: 0.35 },
  pill: { minWidth: 96, minHeight: 48, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 6, paddingHorizontal: 14, borderRadius: 24, borderWidth: 1.5, borderColor: C.gold, backgroundColor: 'rgba(228,197,106,0.12)' },
  pillIcon: { color: C.gold, fontSize: 24, lineHeight: 26, fontWeight: '700', marginTop: -2 },
  pillText: { color: C.gold, fontFamily: font.sans, fontSize: 15, fontWeight: '800' },
  pagerIcon: { color: C.gold, fontSize: 26, fontWeight: '700', marginTop: -2 },
  pagerLabel: { color: C.cream, fontFamily: font.sans, fontSize: 13, fontWeight: '700' },
  dots: { flexDirection: 'row', justifyContent: 'center', gap: 5, marginTop: 6, flexWrap: 'wrap', maxWidth: 220 },
  dot: { width: 6, height: 6, borderRadius: 3, backgroundColor: 'rgba(255,255,255,0.22)' },
  dotOn: { backgroundColor: C.gold, width: 16 },
  swipe: { color: C.faint, fontFamily: font.sans, textAlign: 'center', fontSize: 12, marginTop: 4 },
  panelBtn: { flex: 1, borderWidth: 1.5, borderRadius: 16, paddingVertical: 12, paddingHorizontal: 8, minHeight: 52, alignItems: 'center', justifyContent: 'center' },
  panelBtnText: { fontFamily: font.sans, fontWeight: '800', fontSize: 13, lineHeight: 18, textAlign: 'center' },
  panel: { paddingHorizontal: 16, marginTop: 16 },
  panelTitle: { fontFamily: font.serif, fontSize: 20, fontWeight: '700', marginBottom: 10 },
  sec: { marginTop: 28, paddingHorizontal: 18 },
  h2: { color: C.cream, fontFamily: font.serif, fontSize: 22, fontWeight: '700', marginBottom: 12 },
  pad: { paddingHorizontal: 16 },
  dim: { color: C.dim, fontFamily: font.sans, fontSize: 14, lineHeight: 21 },
  src: { backgroundColor: C.card, borderRadius: 14, padding: 14, marginBottom: 10, borderLeftWidth: 4, borderWidth: 1, borderColor: C.line },
  srcHead: { flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between', gap: 8 },
  srcBook: { color: C.cream, fontFamily: font.sans, fontWeight: '800', fontSize: 15, lineHeight: 21 },
  srcRef: { color: C.gold, fontFamily: font.sans, fontSize: 12.5, marginTop: 4 },
  srcSays: { color: C.text, fontFamily: font.sans, fontSize: 15, lineHeight: 23, marginTop: 8 },
  srcGrade: { color: C.dim, fontFamily: font.sans, fontSize: 13, marginTop: 8 },
  link: { color: C.sunni, fontFamily: font.sans, fontSize: 12, marginTop: 8 },
  badge: { fontFamily: font.sans, fontSize: 11, fontWeight: '800', borderWidth: 1, borderRadius: 10, paddingHorizontal: 8, paddingVertical: 3 },
  dispute: { backgroundColor: C.card2, borderRadius: 16, padding: 14, marginBottom: 12, borderWidth: 1, borderColor: C.line },
  disputeTitle: { color: C.cream, fontFamily: font.serif, fontWeight: '700', fontSize: 17, lineHeight: 23, marginBottom: 4 },
  vLabel: { fontFamily: font.sans, fontWeight: '800', fontSize: 12, letterSpacing: 0.8, marginTop: 10, marginBottom: 4 },
  body: { color: C.text, fontFamily: font.sans, fontSize: 16, lineHeight: 26 },
  question: { flexDirection: 'row', gap: 12, alignItems: 'flex-start', backgroundColor: 'rgba(228,197,106,0.08)', borderRadius: 16, padding: 14, marginBottom: 10, borderWidth: 1, borderColor: 'rgba(228,197,106,0.28)' },
  qBubble: { width: 28, height: 28, borderRadius: 14, backgroundColor: C.gold, alignItems: 'center', justifyContent: 'center', marginTop: 1 },
  qMark: { color: C.ink, fontFamily: font.serif, fontSize: 16, fontWeight: '700' },
  qText: { color: C.text, fontFamily: font.sans, fontSize: 16, lineHeight: 25, flex: 1 },
  noteRow: { flexDirection: 'row', gap: 12, alignItems: 'flex-start', marginBottom: 12 },
  noteDot: { width: 8, height: 8, borderRadius: 4, backgroundColor: C.gold, marginTop: 9 },
  chipRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginTop: 16, marginBottom: 10 },
  chip: { borderWidth: 1.5, borderColor: C.gold, borderRadius: 18, paddingHorizontal: 14, minHeight: 40, alignItems: 'center', justifyContent: 'center' },
  chipOn: { backgroundColor: C.gold },
  chipText: { color: C.gold, fontFamily: font.sans, fontWeight: '800', fontSize: 13 },
  duaPart: { backgroundColor: C.card, borderRadius: 18, padding: 16, marginBottom: 12, borderWidth: 1, borderColor: C.line },
  partHeading: { color: C.gold, fontFamily: font.sans, fontWeight: '800', fontSize: 13, letterSpacing: 0.6, marginBottom: 8 },
  arBox: { backgroundColor: 'rgba(246,241,230,0.05)', borderRadius: 14, paddingHorizontal: 12, paddingVertical: 8, marginBottom: 4 },
  arabic: { color: '#fff8e0', fontFamily: font.arabic, fontSize: 28, lineHeight: 52, textAlign: 'right', writingDirection: 'rtl' },
  methodCard: { flexDirection: 'row', gap: 12, backgroundColor: C.card, borderRadius: 16, padding: 14, marginTop: 12, borderWidth: 1, borderColor: C.line },
  methodNum: { color: C.gold, fontFamily: font.serif, fontSize: 16, fontWeight: '700', width: 28 },
  ph: { backgroundColor: C.card, alignItems: 'center', justifyContent: 'center' },
  phTitle: { color: C.cream, fontFamily: font.sans, fontSize: 16, fontWeight: '800', marginTop: 6, letterSpacing: 0.8 },
  phSub: { color: C.dim, fontFamily: font.sans, fontSize: 13, marginTop: 4, textAlign: 'center', paddingHorizontal: 16 },
  phFile: { color: C.faint, fontFamily: font.sans, fontSize: 11, marginTop: 6 },
  imgCount: { position: 'absolute', right: 10, bottom: 10, backgroundColor: 'rgba(7,20,16,0.72)', borderRadius: 12, paddingHorizontal: 10, paddingVertical: 5 },
  imgCountText: { color: C.cream, fontFamily: font.sans, fontSize: 12, fontWeight: '700' },
}));

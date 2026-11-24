import React, { useCallback, useEffect, useRef, useState } from 'react';
import { BackHandler, FlatList, type NativeScrollEvent, type NativeSyntheticEvent, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { CATEGORIES } from '../data/events';
import { ui } from '../i18n';
import { ArchIcon, BellIcon, BookIcon, PinIcon } from './icons';
import { LogoZoom } from './LogoZoom';
import { SwipeHand } from './SwipeHint';
import { C, TOP, align, font, themedStyles, usePageWidth } from './theme';

const PAGES = ['welcome', 'scenes', 'topics', 'sources', 'more'] as const;
type PageId = (typeof PAGES)[number];

export function Onboarding({ onDone }: { onDone: () => void }) {
  const width = usePageWidth();
  const listRef = useRef<FlatList<PageId>>(null);
  const [idx, setIdx] = useState(0);
  const last = idx === PAGES.length - 1;

  const go = useCallback((i: number) => {
    const n = Math.max(0, Math.min(PAGES.length - 1, i));
    setIdx(n);
    listRef.current?.scrollToOffset({ offset: n * width, animated: true });
  }, [width]);

  useEffect(() => {
    const sub = BackHandler.addEventListener('hardwareBackPress', () => {
      if (idx > 0) { go(idx - 1); return true; }
      onDone();
      return true;
    });
    return () => sub.remove();
  }, [idx, go, onDone]);

  const onScrollEnd = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const i = Math.max(0, Math.min(PAGES.length - 1, Math.round(e.nativeEvent.contentOffset.x / width)));
    setIdx(i);
  };

  return (
    <View style={s.root}>
      <View style={s.top}>
        <View style={{ flex: 1 }} />
        {!last && (
          <Pressable onPress={onDone} accessibilityRole="button" accessibilityLabel={ui('onbSkip')} hitSlop={8} style={({ pressed }) => [s.skip, pressed && { opacity: 0.8 }]}>
            <Text style={s.skipText}>{ui('onbSkip')}</Text>
          </Pressable>
        )}
      </View>
      <FlatList
        ref={listRef}
        data={PAGES as unknown as PageId[]}
        horizontal
        pagingEnabled
        keyExtractor={k => k}
        showsHorizontalScrollIndicator={false}
        getItemLayout={(_, i) => ({ length: width, offset: i * width, index: i })}
        onMomentumScrollEnd={onScrollEnd}
        onScrollEndDrag={onScrollEnd}
        renderItem={({ item }) => (
          <View style={{ width, flex: 1, paddingHorizontal: 24 }}>
            <Page id={item} />
          </View>
        )}
      />
      <View style={s.footer}>
        <View style={s.dots} accessibilityRole="adjustable" accessibilityLabel={`${idx + 1} / ${PAGES.length}`}>
          {PAGES.map((id, i) => <View key={id} style={[s.dot, i === idx && s.dotOn]} />)}
        </View>
        <Pressable
          onPress={() => { if (last) onDone(); else go(idx + 1); }}
          accessibilityRole="button"
          accessibilityLabel={last ? ui('onbStart') : ui('onbNext')}
          style={({ pressed }) => [s.cta, pressed && { opacity: 0.86 }]}
        >
          <Text style={s.ctaText}>{last ? ui('onbStart') : ui('onbNext')}</Text>
        </Pressable>
      </View>
    </View>
  );
}

function Page({ id }: { id: PageId }) {
  if (id === 'welcome') {
    return (
      <ScrollView style={{ flex: 1 }} contentContainerStyle={s.page} showsVerticalScrollIndicator={false} directionalLockEnabled nestedScrollEnabled>
        <View style={{ alignItems: 'center', marginBottom: 20 }}>
          <LogoZoom size={104} />
        </View>
        <Text style={s.kicker}>{ui('appName')}</Text>
        <Text accessibilityRole="header" style={[s.title, align()]}>{ui('onb1Title')}</Text>
        <Text style={[s.body, align()]}>{ui('onb1Body')}</Text>
      </ScrollView>
    );
  }
  if (id === 'scenes') {
    return (
      <ScrollView style={{ flex: 1 }} contentContainerStyle={s.page} showsVerticalScrollIndicator={false} directionalLockEnabled nestedScrollEnabled>
        <SceneDemo />
        <Text accessibilityRole="header" style={[s.title, align()]}>{ui('onb2Title')}</Text>
        <Text style={[s.body, align()]}>{ui('onb2Body')}</Text>
      </ScrollView>
    );
  }
  if (id === 'topics') {
    return (
      <ScrollView style={{ flex: 1 }} contentContainerStyle={s.page} showsVerticalScrollIndicator={false} directionalLockEnabled nestedScrollEnabled>
        <TopicsDemo />
        <Text accessibilityRole="header" style={[s.title, align()]}>{ui('onb3Title')}</Text>
        <Text style={[s.body, align()]}>{ui('onb3Body')}</Text>
      </ScrollView>
    );
  }
  if (id === 'sources') {
    return (
      <ScrollView style={{ flex: 1 }} contentContainerStyle={s.page} showsVerticalScrollIndicator={false} directionalLockEnabled nestedScrollEnabled>
        <View style={s.sourcesDemo}>
          <View style={s.sourcesBtn}>
            <BookIcon size={20} />
            <Text style={s.sourcesBtnText}>{ui('sources')}</Text>
          </View>
          <Text style={s.demoCap}>{ui('onb4Hint')}</Text>
        </View>
        <Text accessibilityRole="header" style={[s.title, align()]}>{ui('onb4Title')}</Text>
        <Text style={[s.body, align()]}>{ui('onb4Body')}</Text>
      </ScrollView>
    );
  }
  return (
    <ScrollView style={{ flex: 1 }} contentContainerStyle={s.page} showsVerticalScrollIndicator={false} directionalLockEnabled nestedScrollEnabled>
      <View style={s.rows}>
        <Feature icon={<PinIcon />} title={ui('maps')} sub={ui('mapsSub')} />
        <Feature icon={<Text style={s.twelve}>12</Text>} title={ui('imams')} sub={ui('imamsShort')} />
        <Feature icon={<ArchIcon />} title={ui('duas')} sub={ui('duasShort')} />
        <Feature icon={<BellIcon />} title={ui('occasions')} sub={ui('onbRemindSub')} />
      </View>
      <Text accessibilityRole="header" style={[s.title, align()]}>{ui('onb5Title')}</Text>
      <Text style={[s.body, align()]}>{ui('onb5Body')}</Text>
    </ScrollView>
  );
}

function Feature({ icon, title, sub }: { icon: React.ReactNode; title: string; sub: string }) {
  return (
    <View style={s.row}>
      <View style={s.bubble}>{icon}</View>
      <View style={{ flex: 1 }}>
        <Text style={[s.rowTitle, align()]} numberOfLines={1}>{title}</Text>
        <Text style={[s.rowSub, align()]} numberOfLines={2}>{sub}</Text>
      </View>
    </View>
  );
}

function SceneDemo() {
  return (
    <View style={s.demoBox} accessibilityElementsHidden importantForAccessibility="no-hide-descendants">
      <View style={s.sceneCard}>
        <View style={s.sceneArt} />
        <View style={s.sceneLines}>
          <View style={[s.line, { width: '92%' }]} />
          <View style={[s.line, { width: '78%' }]} />
          <View style={[s.line, { width: '64%', opacity: 0.55 }]} />
        </View>
      </View>
      <View style={s.pager}>
        <View style={s.pill}><Text style={s.pillText}>‹  {ui('prev')}</Text></View>
        <Text style={s.pagerLabel}>{ui('scene')} 1 / 3</Text>
        <View style={s.pill}><Text style={s.pillText}>{ui('nextScene')}  ›</Text></View>
      </View>
      <View style={s.handOver}>
        <SwipeHand direction="left" size={36} />
      </View>
    </View>
  );
}

function TopicsDemo() {
  const first = CATEGORIES[0];
  const second = CATEGORIES[1];
  return (
    <View style={s.demoBox} accessibilityElementsHidden importantForAccessibility="no-hide-descendants">
      <View style={s.topicRow}>
        <View style={[s.topicCard, s.topicOn, { flex: 1 }]}>
          <Text style={s.catIndex}>01 / {String(CATEGORIES.length).padStart(2, '0')}</Text>
          <Text style={s.catTitle} numberOfLines={2}>{first?.title}</Text>
        </View>
        <View style={[s.topicCard, { width: 72, marginLeft: 10, opacity: 0.85 }]}>
          <Text style={s.catIndex}>02</Text>
          <Text style={s.catTitle} numberOfLines={2}>{second?.title}</Text>
        </View>
      </View>
      <View style={s.handOver}>
        <SwipeHand direction="left" size={36} />
      </View>
    </View>
  );
}

const s = themedStyles(() => StyleSheet.create({
  root: { flex: 1, backgroundColor: C.bg },
  top: { paddingTop: TOP, paddingHorizontal: 16, minHeight: TOP + 36, flexDirection: 'row', alignItems: 'center' },
  skip: { minHeight: 44, justifyContent: 'center', paddingHorizontal: 12 },
  skipText: { color: C.gold, fontFamily: font.sans, fontSize: 16, fontWeight: '700' },
  page: { flexGrow: 1, justifyContent: 'center', paddingBottom: 8 },
  kicker: { color: C.gold, fontFamily: font.sans, fontSize: 12, fontWeight: '700', letterSpacing: 2.4, textAlign: 'center', marginBottom: 8 },
  title: { color: C.cream, fontFamily: font.serif, fontSize: 28, lineHeight: 34, fontWeight: '700', marginTop: 18, marginBottom: 10 },
  body: { color: C.text, fontFamily: font.sans, fontSize: 16, lineHeight: 24 },
  footer: { paddingHorizontal: 24, paddingBottom: 28, paddingTop: 8 },
  dots: { flexDirection: 'row', justifyContent: 'center', gap: 6, marginBottom: 16 },
  dot: { width: 7, height: 7, borderRadius: 4, backgroundColor: 'rgba(255,255,255,0.22)' },
  dotOn: { backgroundColor: C.gold, width: 18 },
  cta: { minHeight: 56, alignItems: 'center', justifyContent: 'center', backgroundColor: C.gold, borderRadius: 16 },
  ctaText: { color: C.ink, fontFamily: font.sans, fontSize: 17, fontWeight: '800' },
  demoBox: { marginBottom: 8, minHeight: 168, justifyContent: 'center' },
  sceneCard: { backgroundColor: C.card, borderRadius: 18, borderWidth: 1, borderColor: C.lineStrong, overflow: 'hidden' },
  sceneArt: { height: 88, backgroundColor: C.card2, borderBottomWidth: 1, borderBottomColor: C.line },
  sceneLines: { padding: 14, gap: 8 },
  line: { height: 8, borderRadius: 4, backgroundColor: 'rgba(246,241,230,0.16)' },
  pager: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 10, gap: 8 },
  pill: { borderWidth: 1, borderColor: C.lineStrong, borderRadius: 16, paddingHorizontal: 10, minHeight: 32, justifyContent: 'center', backgroundColor: C.card },
  pillText: { color: C.gold, fontFamily: font.sans, fontSize: 12, fontWeight: '700' },
  pagerLabel: { color: C.dim, fontFamily: font.sans, fontSize: 12, fontWeight: '700' },
  handOver: { position: 'absolute', right: 28, bottom: 44 },
  topicRow: { flexDirection: 'row', overflow: 'hidden' },
  topicCard: { backgroundColor: C.card, borderRadius: 18, padding: 14, minHeight: 120, borderWidth: 1, borderColor: C.line, justifyContent: 'center' },
  topicOn: { borderColor: C.gold, backgroundColor: '#1a332c' },
  catIndex: { color: C.gold, fontFamily: font.sans, fontSize: 11, fontWeight: '800', letterSpacing: 1.4 },
  catTitle: { color: C.cream, fontFamily: font.serif, fontSize: 18, lineHeight: 24, fontWeight: '700', marginTop: 4 },
  sourcesDemo: { alignItems: 'center', marginBottom: 12, gap: 12 },
  sourcesBtn: { minHeight: 52, paddingHorizontal: 28, borderRadius: 26, borderWidth: 1.5, borderColor: C.gold, backgroundColor: 'rgba(228,197,106,0.12)', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 8 },
  sourcesBtnText: { color: C.gold, fontFamily: font.sans, fontSize: 16, fontWeight: '800' },
  demoCap: { color: C.faint, fontFamily: font.sans, fontSize: 12, textAlign: 'center' },
  rows: { gap: 8, marginBottom: 16 },
  row: { flexDirection: 'row', alignItems: 'center', gap: 12, backgroundColor: C.card, borderRadius: 16, padding: 12, borderWidth: 1, borderColor: C.line },
  bubble: { width: 40, height: 40, borderRadius: 20, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(228,197,106,0.12)', borderWidth: 1, borderColor: 'rgba(228,197,106,0.35)' },
  twelve: { color: C.gold, fontFamily: font.serif, fontSize: 15, fontWeight: '700' },
  rowTitle: { color: C.cream, fontFamily: font.serif, fontSize: 16, fontWeight: '700' },
  rowSub: { color: C.dim, fontFamily: font.sans, fontSize: 12, lineHeight: 16, marginTop: 2 },
}), { scale: false });

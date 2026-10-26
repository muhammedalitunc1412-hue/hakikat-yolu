import React, { useRef, useState } from 'react';
import { FlatList, Image, Linking, Platform, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import type { Accept, Dispute, Dua, HistEvent, Source } from '../types';
import { tx, ui } from '../i18n';
import { SCENE_IMAGES } from '../data/sceneImages';
import { CATEGORIES } from '../data/events';
import { BORDERS_CREDIT } from '../data/borders';
import { mapsForEvent } from '../data/maps';
import { TRAVEL_METHOD } from '../data/travel';
import { Rich } from './Rich';
import { EventVideo } from './EventVideo';
import { ArchIcon, BookIcon, Chevron, CompassIcon, PinIcon, SearchIcon } from './icons';
import { C, TOP, align, font, usePageWidth, themedStyles, BLOOD } from './theme';
import { rememberScene, rememberedScene, useScrollMemory } from './scrollMemory';

const webHit = Platform.OS === 'web' ? { cursor: 'pointer' as const } : null;

function norm(s: string) {
  return s.toLocaleLowerCase('tr').replace(/â/g, 'a').replace(/î/g, 'i').replace(/û/g, 'u').replace(/ı/g, 'i');
}

function Back({ onPress }: { onPress: () => void }) {
  return (
    <Pressable onPress={onPress} hitSlop={8} style={s.back} accessibilityRole="button">
      <Text style={s.backText}>‹  {ui('back')}</Text>
    </Pressable>
  );
}

export function Home({ events, onOpen, onMethod, onDuas, onMaps, onQibla, onImams }: {
  events: HistEvent[];
  onOpen: (id: string) => void;
  onMethod: () => void;
  onDuas: () => void;
  onMaps: () => void;
  onQibla: () => void;
  onImams: () => void;
}) {
  const sc = useScrollMemory('home');
  const width = usePageWidth();
  const [q, setQ] = useState('');
  const query = norm(q.trim());
  const wide = width >= 560;
  let shown = 0;
  return (
    <ScrollView {...sc} style={{ flex: 1, backgroundColor: C.bg }} contentContainerStyle={s.page} keyboardShouldPersistTaps="handled">
      <View style={s.hero}>
        <View style={{ flex: 1 }}>
          <Text style={s.kicker}>{ui('kicker')}</Text>
          <Text style={s.brand}>{ui('appName')}</Text>
          <Text style={[s.tagline, align()]}>{ui('tagline')}</Text>
        </View>
        <Image source={require('../../assets/logo.png')} resizeMode="contain" accessibilityLabel="Hakikat Yolu" style={s.logo} />
      </View>
      <View style={s.rule} />

      <View style={{ flexDirection: wide ? 'row' : 'column', gap: 12 }}>
        <Pressable style={({ pressed }) => [s.feature, wide && { flex: 1 }, pressed && s.pressed, webHit]} onPress={onMaps} accessibilityRole="button">
          <View style={s.bubble}><PinIcon /></View>
          <View style={{ flex: 1 }}>
            <Text style={[s.featureTitle, align()]}>{ui('maps')}</Text>
            <Text style={[s.featureSub, align()]}>{ui('mapsSub')}</Text>
          </View>
          <Chevron color={C.gold} />
        </Pressable>
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

      <Pressable style={({ pressed }) => [s.feature, { marginTop: 12 }, pressed && s.pressed, webHit]} onPress={onQibla} accessibilityRole="button">
        <View style={s.bubble}><CompassIcon /></View>
        <View style={{ flex: 1 }}>
          <Text style={[s.featureTitle, align()]}>{ui('qibla')}</Text>
          <Text style={[s.featureSub, align()]}>{ui('qiblaShort')}</Text>
        </View>
        <Chevron color={C.gold} />
      </Pressable>

      <View style={s.search}>
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

      {CATEGORIES.map((cat, catIndex) => {
        const list = cat.ids
          .map(id => events.find(e => e.id === id))
          .filter((e): e is HistEvent => !!e)
          .filter(e => !query || norm([tx(e.title), tx(e.hook), tx(e.key), tx(e.date), cat.title].join(' ')).includes(query));
        if (!list.length) return null;
        shown += list.length;
        return (
          <View key={cat.id} style={{ marginTop: 26 }}>
            <Text style={s.catIndex}>{String(catIndex + 1).padStart(2, '0')}</Text>
            <Text style={[s.catTitle, align()]}>{cat.title}</Text>
            <Text style={[s.catSub, align()]}>{cat.sub}</Text>
            {list.map((e, i) => {
              // Kerbela'ya giden kart kan kırmızısı (içine girince açılan tema ile aynı)
              const red = e.id === 'kerbela';
              return (
                <Pressable key={e.id} onPress={() => onOpen(e.id)} accessibilityRole="button" style={({ pressed }) => [s.card, red && { backgroundColor: BLOOD.card, borderColor: BLOOD.lineStrong, borderLeftWidth: 4, borderLeftColor: BLOOD.gold }, pressed && s.pressed, webHit]}>
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
            })}
          </View>
        );
      })}
      {query && shown === 0 && <Text style={[s.empty, align()]}>{ui('noResult')}</Text>}

      <Pressable onPress={onMethod} accessibilityRole="button" style={({ pressed }) => [s.method, pressed && s.pressed, webHit]}>
        <View style={s.bubble}><BookIcon /></View>
        <Text style={s.methodText}>{ui('method')}</Text>
        <Chevron />
      </Pressable>
    </ScrollView>
  );
}

function SourceCard({ src, tone }: { src: Source; tone: string }) {
  const ok = src.status === 'verified';
  return (
    <View style={[s.src, { borderLeftColor: tone }]}>
      <View style={s.srcHead}>
        <Text style={[s.srcBook, align(), { flex: 1 }]}>{src.book}</Text>
        <Text style={[s.badge, { color: ok ? C.shia : C.warn, borderColor: ok ? C.shia : C.warn }]}>{ok ? '✓ ' + ui('verified') : '⚠ ' + ui('check')}</Text>
      </View>
      <Text style={[s.srcRef, align()]}>{src.ref}</Text>
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

function SceneImage({ evId, n, title, width }: { evId: string; n: number; title: string; width: number }) {
  const imgs: number[] = [];
  for (let k = 1; k <= 4; k++) {
    const f = SCENE_IMAGES[k === 1 ? evId + '-' + n : evId + '-' + n + '-' + k];
    if (f) imgs.push(f);
  }
  const [pick, setPick] = useState(0);
  const cur = imgs.length ? imgs[pick % imgs.length] : 0;
  const resolve = (Image as { resolveAssetSource?: (src: number) => { width?: number; height?: number } | null }).resolveAssetSource;
  let meta: { width?: number; height?: number } | null = null;
  if (cur && typeof resolve === 'function') {
    try { meta = resolve(cur); } catch { meta = null; }
  }
  const h = meta && meta.width && meta.height ? Math.round((width * meta.height) / meta.width) : Math.round((width * 9) / 16);
  if (imgs.length) {
    return (
      <Pressable disabled={imgs.length < 2} onPress={() => setPick(p => (p + 1) % imgs.length)} accessibilityRole={imgs.length > 1 ? 'button' : undefined}>
        <Image source={cur} resizeMode="cover" style={{ width, height: h }} />
        {imgs.length > 1 && (
          <View style={s.imgCount}>
            <Text style={s.imgCountText}>{(pick % imgs.length) + 1}/{imgs.length} · dokun</Text>
          </View>
        )}
      </Pressable>
    );
  }
  return (
    <View style={[s.ph, { width, height: h }]}>
      <Text style={{ color: C.gold, fontSize: 28 }}>▣</Text>
      <Text style={s.phTitle}>TEST GÖRSELİ</Text>
      <Text style={s.phSub}>{title} · Sahne {n}</Text>
      <Text style={s.phFile}>{evId}-{n}.jpg</Text>
    </View>
  );
}

function AcceptChip({ by }: { by: Accept }) {
  const col = by === 'shia' ? C.shia : by === 'sunni' ? C.sunni : C.gold;
  const label = by === 'shia' ? ui('acceptShia') : by === 'sunni' ? ui('acceptSunni') : ui('acceptBoth');
  return <Text style={[s.accept, { color: col, borderColor: col }]}>{label}</Text>;
}

type Panel = 'shia' | 'sunni' | 'disputes';
type Page = HistEvent['scenes'][number] | 'video';

export function EventScreen({ ev, onBack, onOpenMap }: { ev: HistEvent; onBack: () => void; onOpenMap: (mapId: string) => void }) {
  const sc = useScrollMemory('event:' + ev.id);
  const width = usePageWidth();
  const [idx, setIdx] = useState(() => rememberedScene('event:' + ev.id));
  const [open, setOpen] = useState<Panel[]>([]);
  const listRef = useRef<FlatList<Page>>(null);
  const toggle = (p: Panel) => setOpen(o => (o.includes(p) ? o.filter(x => x !== p) : [...o, p]));
  const has = (p: Panel) => open.includes(p);
  const nDis = ev.disputes?.length ?? 0;
  const pages: Page[] = [...ev.scenes, 'video'];
  const total = pages.length;
  const maps = mapsForEvent(ev.id);

  const go = (i: number) => {
    const next = Math.max(0, Math.min(total - 1, i));
    listRef.current?.scrollToOffset({ offset: width * next, animated: true });
    setIdx(next);
    rememberScene('event:' + ev.id, next);
  };
  const sync = (x: number) => {
    const i = Math.max(0, Math.min(total - 1, Math.round(x / Math.max(width, 1))));
    rememberScene('event:' + ev.id, i);
    setIdx(cur => (cur === i ? cur : i));
  };

  const Btn = ({ p, label, n, color }: { p: Panel; label: string; n: number; color: string }) => (
    <Pressable onPress={() => toggle(p)} accessibilityRole="button" style={[s.panelBtn, { borderColor: color }, has(p) && { backgroundColor: color }, webHit]}>
      <Text style={[s.panelBtnText, { color: has(p) ? C.ink : color }]}>{label} ({n}) {has(p) ? '▲' : '▼'}</Text>
    </Pressable>
  );

  return (
    <View style={{ flex: 1, backgroundColor: C.bg }}>
      <ScrollView {...sc} contentContainerStyle={{ paddingBottom: 64 }} keyboardShouldPersistTaps="handled">
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

        <FlatList
          ref={listRef}
          data={pages}
          initialScrollIndex={Math.min(idx, pages.length - 1)}
          horizontal
          pagingEnabled
          nestedScrollEnabled
          showsHorizontalScrollIndicator={false}
          keyExtractor={(_, i) => String(i)}
          onMomentumScrollEnd={e => sync(e.nativeEvent.contentOffset.x)}
          onScrollEndDrag={e => sync(e.nativeEvent.contentOffset.x)}
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
                <Rich style={[s.sceneBody, align()]} text={item.text} selectable />
                {!!item.by && <AcceptChip by={item.by} />}
              </View>
            </View>
          )}
        />

        <View style={s.pager}>
          <Pressable onPress={() => go(idx - 1)} disabled={idx === 0} accessibilityRole="button" accessibilityLabel={ui('prev')} style={[s.pagerBtn, idx === 0 && s.pagerOff, webHit]}>
            <Text style={s.pagerIcon}>‹</Text>
          </Pressable>
          <View style={{ flex: 1, alignItems: 'center' }}>
            <Text style={s.pagerLabel}>{idx < ev.scenes.length ? `${ui('scene')} ${idx + 1} / ${ev.scenes.length}` : ui('video')}</Text>
            <View style={s.dots}>
              {pages.map((_, i) => <View key={i} style={[s.dot, i === idx && s.dotOn]} />)}
            </View>
          </View>
          <Pressable onPress={() => go(idx + 1)} disabled={idx === total - 1} accessibilityRole="button" accessibilityLabel={ui('nextScene')} style={[s.pagerBtn, idx === total - 1 && s.pagerOff, webHit]}>
            <Text style={s.pagerIcon}>›</Text>
          </Pressable>
        </View>
        {idx === 0 && <Text style={s.swipe}>Kaydır veya oklara bas</Text>}

        <View style={{ paddingHorizontal: 16, marginTop: 18, gap: 10 }}>
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
      </ScrollView>
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
  const ok = dua.status === 'verified';
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
      <Text style={[s.badge, { alignSelf: 'flex-start', color: ok ? C.shia : C.warn, borderColor: ok ? C.shia : C.warn, marginBottom: 8 }]}>{ok ? '✓ ' + ui('verified') : '⚠ ' + ui('check')}</Text>
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
  const paragraphs = [
    'Bu uygulama Şii bakışını esas alır. Her olay önce hikâye olarak anlatılır; her sahnenin altında o anlatımı hangi mezhebin kaynaklarının kabul ettiği (Sünni ve Şii / Şii / Sünni) yazar.',
    'Olayın sonunda "Şii kaynakları" ve "Sünni kaynakları" düğmelerine basınca ilgili kaynaklar açılır. Her kaynak kartında kitabın adı, numarası ve ne anlattığı bulunur. Şii kaynak ve yorum her zaman üstte gösterilir.',
    '✓ Doğrulandı: Metin ve numara kaynağından okunmuştur. ⚠ Kontrol edilmeli: Numara ya da sayfa, yayın öncesinde birincil kaynaktan teyit edilecektir.',
    '"Ayrılıklar" düğmesi, iki geleneğin aynı olayı nasıl yorumladığını ya da bir rivayeti hangi kaynakların kabul edip etmediğini gösterir.',
    '"Düşünelim" bölümündeki sorular, kaynaklarda yazılanlardan hareketle okuyucuyu kendi sonucunu kurmaya davet eder.',
    'Uygulamada kimseye hakaret, lanet ya da nefret söylemi yoktur. Hz. Peygamber, Ehl-i Beyt ve sahabeye saygı esastır. Ziyâret-i Âşûrâ gibi dua metinleri kendi aslına sadık olarak verilmiştir.',
    'Dualarda Arapça metin güvenilir bir kaynak sayfasından alınmıştır; Türkçe okunuş ve anlam hazırlanmıştır ve yayın öncesinde bir uzman tarafından kontrol edilmelidir.',
    'Haritalar bölümündeki mesafeler, yerlerin koordinatından kuş uçuşu (büyük daire) olarak hesaplanır. Kara yolu ve eski kervan yolu daha uzun olabilir; bilinen farklar haritada ayrıca belirtilir.',
    TRAVEL_METHOD,
    'Harita zemini NASA Blue Marble Next Generation görüntüsüdür (gölgeli rölyef ve batimetri, kamu malı). Dağların okunması için üzerine METI ve NASA ASTER GDEM kabartması işlenmiştir. Yakın kadrajların altında, Kızıldeniz’den Hürmüz Boğazı’na uzanan geniş Orta Doğu levhası durur. Görüntüler bölgeye kırpılıp sıkıştırılmıştır; uygulama çevrimdışı çalışır, bir harita servisine bağlanmaz.',
    BORDERS_CREDIT,
  ];
  return (
    <ScrollView {...sc} style={{ flex: 1, backgroundColor: C.bg }} contentContainerStyle={s.page}>
      <Back onPress={onBack} />
      <Text style={[s.kicker, align()]}>YÖNTEM</Text>
      <Text style={[s.evTitle, align()]}>{ui('method')}</Text>
      {paragraphs.map((t, k) => (
        <View key={k} style={s.methodCard}>
          <Text style={s.methodNum}>{String(k + 1).padStart(2, '0')}</Text>
          <Text style={[s.body, align(), { flex: 1 }]}>{t}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const s = themedStyles(() => StyleSheet.create({
  page: { paddingHorizontal: 18, paddingTop: TOP, paddingBottom: 56 },
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
  search: { flexDirection: 'row', alignItems: 'center', gap: 10, marginTop: 16, backgroundColor: C.card, borderRadius: 16, paddingHorizontal: 14, minHeight: 52, borderWidth: 1, borderColor: C.line },
  searchInput: { flex: 1, color: C.cream, fontFamily: font.sans, fontSize: 16, paddingVertical: 12 },
  clear: { color: C.gold, fontSize: 22, fontWeight: '600', paddingHorizontal: 4 },
  catIndex: { color: C.gold, fontFamily: font.sans, fontSize: 12, fontWeight: '800', letterSpacing: 1.5 },
  catTitle: { color: C.cream, fontFamily: font.serif, fontSize: 24, lineHeight: 30, fontWeight: '700', marginTop: 2 },
  catSub: { color: C.dim, fontFamily: font.sans, fontSize: 13.5, lineHeight: 20, marginTop: 3, marginBottom: 12 },
  card: { flexDirection: 'row', gap: 12, alignItems: 'flex-start', backgroundColor: C.card, borderRadius: 18, padding: 14, marginBottom: 10, borderWidth: 1, borderColor: C.line },
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
  sceneText: { backgroundColor: C.card, paddingHorizontal: 18, paddingVertical: 18, minHeight: 120 },
  sceneBody: { color: C.text, fontFamily: font.sans, fontSize: 17, lineHeight: 28 },
  accept: { alignSelf: 'flex-start', marginTop: 12, fontFamily: font.sans, fontSize: 12, fontWeight: '800', borderWidth: 1, borderRadius: 12, paddingHorizontal: 10, paddingVertical: 4 },
  pager: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 12, marginTop: 8 },
  pagerBtn: { width: 48, height: 48, borderRadius: 24, alignItems: 'center', justifyContent: 'center', backgroundColor: C.card, borderWidth: 1, borderColor: C.lineStrong },
  pagerOff: { opacity: 0.35 },
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

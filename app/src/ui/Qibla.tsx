import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Animated, Easing, Pressable, ScrollView, StyleSheet, Text, Vibration, View } from 'react-native';
import Svg, { Circle, Defs, G, Line, LinearGradient, Path, RadialGradient, Rect, Stop, Text as SvgText } from 'react-native-svg';
import * as Location from 'expo-location';
import { Accelerometer, Magnetometer } from 'expo-sensors';
import { ui } from '../i18n';
import { angleDiff as diff, magneticDeclination, norm360, qiblaFrom, smoothAngle, trueHeadingFromMagnetic } from '../qibla/bearing';
import { fieldLooksOff, headingFromSensors, type Vec3 } from '../qibla/orientation';
import { C, TOP, align, font, usePageWidth } from './theme';

const rad = (d: number) => (d * Math.PI) / 180;

export { qiblaFrom };

const DIRS = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
const dirName = (b: number) => DIRS[Math.round(b / 45) % 8];

type Status = 'asking' | 'locating' | 'ready' | 'denied' | 'error';

// Dönen kadran: halkalar, çentikler, yön harfleri, merkez yıldız deseni ve Kâbe işareti
function Dial({ size, bearing }: { size: number; bearing: number }) {
  const c = size / 2;
  const R = c - 22;
  const pt = (a: number, r: number) => ({ x: c + Math.sin(rad(a)) * r, y: c - Math.cos(rad(a)) * r });
  const ticks: React.ReactNode[] = [];
  for (let a = 0; a < 360; a += 5) {
    const big = a % 45 === 0, mid = a % 15 === 0;
    const len = big ? 15 : mid ? 10 : 5;
    const p1 = pt(a, R), p2 = pt(a, R - len);
    ticks.push(<Line key={a} x1={p1.x} y1={p1.y} x2={p2.x} y2={p2.y} stroke={big ? C.gold : C.faint} strokeWidth={big ? 2 : 1} opacity={big ? 1 : mid ? 0.8 : 0.45} />);
  }
  const labels: React.ReactNode[] = [];
  for (let a = 0; a < 360; a += 30) {
    if (a % 90 === 0) continue;
    const p = pt(a, R - 30);
    labels.push(<SvgText key={a} x={p.x} y={p.y + 4} fontSize={11} fill={C.faint} textAnchor="middle">{a}</SvgText>);
  }
  const cardinals = [['N', 0], ['E', 90], ['S', 180], ['W', 270]] as const;
  const k = pt(bearing, R - 44);
  const star = size * 0.19;
  return (
    <Svg width={size} height={size}>
      <Defs>
        <RadialGradient id="face" cx="50%" cy="50%" r="55%">
          <Stop offset="0%" stopColor="#1d3d34" />
          <Stop offset="70%" stopColor="#0f2620" />
          <Stop offset="100%" stopColor="#091a15" />
        </RadialGradient>
        <LinearGradient id="ring" x1="0%" y1="0%" x2="100%" y2="100%">
          <Stop offset="0%" stopColor="#f4e19b" />
          <Stop offset="50%" stopColor="#c4a15a" />
          <Stop offset="100%" stopColor="#7d6224" />
        </LinearGradient>
        <RadialGradient id="glow" cx="50%" cy="50%" r="50%">
          <Stop offset="0%" stopColor={C.gold} stopOpacity={0.55} />
          <Stop offset="100%" stopColor={C.gold} stopOpacity={0} />
        </RadialGradient>
      </Defs>
      <Circle cx={c} cy={c} r={c - 3} fill="none" stroke="url(#ring)" strokeWidth={4} />
      <Circle cx={c} cy={c} r={c - 12} fill="url(#face)" stroke={C.lineStrong} strokeWidth={1} />
      <Circle cx={c} cy={c} r={R - 20} fill="none" stroke={C.line} strokeWidth={1} />
      {/* Merkezde sekiz köşeli İslami yıldız */}
      <Rect x={c - star} y={c - star} width={star * 2} height={star * 2} fill="none" stroke={C.gold} strokeWidth={1} opacity={0.22} />
      <Rect x={c - star} y={c - star} width={star * 2} height={star * 2} fill="none" stroke={C.gold} strokeWidth={1} opacity={0.22} transform={`rotate(45 ${c} ${c})`} />
      <Circle cx={c} cy={c} r={star * 0.62} fill="none" stroke={C.gold} strokeWidth={1} opacity={0.18} />
      {ticks}
      {labels}
      {cardinals.map(([t, a]) => {
        const p = pt(a, R - 32);
        return <SvgText key={t} x={p.x} y={p.y + 7} fontSize={21} fontWeight="700" fill={t === 'N' ? '#ee6a6a' : C.cream} textAnchor="middle">{t}</SvgText>;
      })}
      {/* Kıble çizgisi ve Kâbe */}
      <G rotation={bearing} originX={c} originY={c}>
        <Line x1={c} y1={c - 14} x2={c} y2={k.y + 24} stroke={C.gold} strokeWidth={2} strokeDasharray="2 6" strokeLinecap="round" opacity={0.9} />
      </G>
      <Circle cx={k.x} cy={k.y} r={30} fill="url(#glow)" />
      <G rotation={bearing} originX={k.x} originY={k.y}>
        <Rect x={k.x - 13} y={k.y - 13} width={26} height={26} rx={3.5} fill="#0a0a0a" stroke={C.gold} strokeWidth={2} />
        <Rect x={k.x - 13} y={k.y - 7} width={26} height={4} fill={C.gold} />
        <Rect x={k.x - 3} y={k.y + 1} width={6} height={9} rx={1} fill={C.gold} opacity={0.85} />
      </G>
    </Svg>
  );
}

// Sabit üst katman: telefonun baktığı yönü gösteren işaret, merkez ve hizalanma parıltısı
function Overlay({ size, aligned }: { size: number; aligned: boolean }) {
  const c = size / 2;
  const col = aligned ? C.shia : C.cream;
  return (
    <Svg width={size} height={size} style={StyleSheet.absoluteFill} pointerEvents="none">
      {aligned && <Circle cx={c} cy={c} r={c - 1} fill="none" stroke={C.shia} strokeWidth={3} opacity={0.9} />}
      <Path d={`M ${c} 1 L ${c - 11} 24 Q ${c} 18 ${c + 11} 24 Z`} fill={col} stroke={aligned ? '#1e8a5c' : C.goldDeep} strokeWidth={1} />
      <Circle cx={c} cy={c} r={9} fill="#0b1b16" stroke={C.gold} strokeWidth={2} />
      <Circle cx={c} cy={c} r={3} fill={C.gold} />
    </Svg>
  );
}

function Stat({ label, value, sub, color }: { label: string; value: string; sub?: string; color?: string }) {
  return (
    <View style={s.stat}>
      <Text style={s.statLabel}>{label}</Text>
      <Text style={[s.statValue, color ? { color } : null]}>{value}</Text>
      {!!sub && <Text style={s.statSub}>{sub}</Text>}
    </View>
  );
}

export function QiblaScreen({ onBack }: { onBack: () => void }) {
  const width = usePageWidth();
  const size = Math.min(width - 36, 360);
  const [status, setStatus] = useState<Status>('asking');
  const [pos, setPos] = useState<{ lat: number; lon: number } | null>(null);
  const [heading, setHeading] = useState<number | null>(null);
  const [needsCal, setNeedsCal] = useState(false);
  const smooth = useRef<number | null>(null);
  const [retry, setRetry] = useState(0);

  // Dönüş animasyonu: açıyı biriktirerek 359°→0° geçişinde ters dönmeyi önler
  const anim = useRef(new Animated.Value(0)).current;
  const cum = useRef(0);
  useEffect(() => {
    if (heading == null) return;
    const target = -heading;
    cum.current += diff(target, norm360(cum.current));
    Animated.timing(anim, { toValue: cum.current, duration: 140, easing: Easing.out(Easing.quad), useNativeDriver: true }).start();
  }, [heading, anim]);

  useEffect(() => {
    let headingSub: Location.LocationSubscription | null = null;
    let accSub: { remove: () => void } | null = null;
    let magSub: { remove: () => void } | null = null;
    let alive = true;
    const grav: { current: Vec3 | null } = { current: null };
    const mag: { current: Vec3 | null } = { current: null };
    const decl = { current: 0 };
    const sensorOn = { current: false };
    const fieldOff = { current: false };
    const lowAcc = { current: false };
    const refreshCal = () => setNeedsCal(fieldOff.current || lowAcc.current);

    const push = (magnetic: number | null, alreadyTrue: number | null) => {
      const v = alreadyTrue != null && alreadyTrue >= 0
        ? alreadyTrue
        : magnetic != null && magnetic >= 0
          ? trueHeadingFromMagnetic(magnetic, decl.current)
          : null;
      if (v == null) return;
      const next = smoothAngle(smooth.current, v, 0.28);
      smooth.current = next;
      setHeading(next);
    };

    const onSensors = () => {
      if (!grav.current || !mag.current) return;
      const raw = headingFromSensors(grav.current, mag.current);
      if (raw == null) return;
      const strength = Math.hypot(mag.current.x, mag.current.y, mag.current.z);
      fieldOff.current = fieldLooksOff(strength);
      refreshCal();
      push(raw, trueHeadingFromMagnetic(raw, decl.current));
    };

    (async () => {
      try {
        setStatus('asking');
        setNeedsCal(false);
        const perm = await Location.requestForegroundPermissionsAsync();
        if (!alive) return;
        if (perm.status !== 'granted') { setStatus('denied'); return; }
        setStatus('locating');
        const fresh = await Promise.race([
          Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.Balanced }).catch(() => null),
          new Promise<null>(res => setTimeout(() => res(null), 8000)),
        ]);
        const p = fresh ?? (await Location.getLastKnownPositionAsync());
        if (!alive) return;
        if (!p) { setStatus('error'); return; }
        setPos({ lat: p.coords.latitude, lon: p.coords.longitude });
        decl.current = magneticDeclination(p.coords.latitude, p.coords.longitude);
        setStatus('ready');

        const magOk = await Magnetometer.isAvailableAsync().catch(() => false);
        const accOk = await Accelerometer.isAvailableAsync().catch(() => false);
        if (alive && magOk && accOk) {
          sensorOn.current = true;
          Magnetometer.setUpdateInterval(80);
          Accelerometer.setUpdateInterval(80);
          accSub = Accelerometer.addListener(v => { grav.current = v; onSensors(); });
          magSub = Magnetometer.addListener(v => { mag.current = v; onSensors(); });
        }

        headingSub = await Location.watchHeadingAsync(h => {
          lowAcc.current = h.accuracy <= 1;
          refreshCal();
          if (sensorOn.current) return;
          const magnetic = h.magHeading >= 0 ? h.magHeading : null;
          const tru = h.trueHeading >= 0 ? h.trueHeading : null;
          push(magnetic, tru);
        });
      } catch {
        if (alive) setStatus('error');
      }
    })();
    return () => {
      alive = false;
      headingSub?.remove();
      accSub?.remove();
      magSub?.remove();
    };
  }, [retry]);

  const q = useMemo(() => (pos ? qiblaFrom(pos.lat, pos.lon) : null), [pos]);
  const off = q && heading != null ? diff(q.bearing, heading) : null; // + ise sağa dön
  const aligned = off != null && Math.abs(off) <= 4;

  // Hizalanınca kısa bir titreşim
  const wasAligned = useRef(false);
  useEffect(() => {
    if (aligned && !wasAligned.current) Vibration.vibrate(35);
    wasAligned.current = aligned;
  }, [aligned]);

  const rotate = anim.interpolate({ inputRange: [-7200, 7200], outputRange: ['-7200deg', '7200deg'] });
  const pill = heading == null || off == null
    ? { text: ui('qiblaNoHeading'), color: C.dim, bg: 'rgba(255,255,255,0.06)' }
    : aligned
      ? { text: ui('qiblaOk'), color: C.shia, bg: 'rgba(61,190,134,0.14)' }
      : off > 0
        ? { text: ui('qiblaRight').replace('{n}', String(Math.round(Math.abs(off)))), color: C.gold, bg: 'rgba(228,197,106,0.12)' }
        : { text: ui('qiblaLeft').replace('{n}', String(Math.round(Math.abs(off)))), color: C.gold, bg: 'rgba(228,197,106,0.12)' };

  return (
    <View style={{ flex: 1, backgroundColor: C.bg }}>
      <ScrollView contentContainerStyle={{ paddingTop: TOP, paddingHorizontal: 18, paddingBottom: 40 }} showsVerticalScrollIndicator={false}>
        <Pressable onPress={onBack} hitSlop={8} accessibilityRole="button">
          <Text style={s.back}>‹  {ui('back')}</Text>
        </Pressable>
        <Text style={s.kicker}>{ui('qiblaKicker')}</Text>
        <Text style={[s.title, align()]}>{ui('qibla')}</Text>
        <Text style={[s.sub, align()]}>{ui('qiblaSub')}</Text>

        {(status === 'asking' || status === 'locating') && (
          <View style={s.card}><Text style={s.msg}>{status === 'asking' ? ui('qiblaAsk') : ui('qiblaLocating')}</Text></View>
        )}
        {(status === 'denied' || status === 'error') && (
          <View style={s.card}>
            <Text style={s.msg}>{status === 'denied' ? ui('qiblaDenied') : ui('qiblaError')}</Text>
            <Pressable style={s.btn} onPress={() => setRetry(r => r + 1)} accessibilityRole="button"><Text style={s.btnText}>{ui('qiblaRetry')}</Text></Pressable>
          </View>
        )}

        {status === 'ready' && q && (
          <>
            <View style={[s.pill, { backgroundColor: pill.bg, borderColor: pill.color }]}>
              <Text style={[s.pillText, { color: pill.color }]}>{pill.text}</Text>
            </View>

            {needsCal && (
              <View style={s.cal}>
                <Text style={s.calTitle}>{ui('qiblaCalTitle')}</Text>
                <Text style={[s.calBody, align()]}>{ui('qiblaCal')}</Text>
              </View>
            )}

            <View style={{ alignItems: 'center', marginTop: 20 }}>
              <View style={[s.halo, { width: size + 30, height: size + 30, borderRadius: (size + 30) / 2, backgroundColor: aligned ? 'rgba(61,190,134,0.10)' : 'rgba(228,197,106,0.06)' }]} />
              <View style={{ width: size, height: size }}>
                <Animated.View style={{ width: size, height: size, transform: [{ rotate }] }}>
                  <Dial size={size} bearing={q.bearing} />
                </Animated.View>
                <Overlay size={size} aligned={aligned} />
              </View>
            </View>

            <View style={s.stats}>
              <Stat label={ui('qiblaStatDir')} value={`${Math.round(q.bearing)}°`} sub={dirName(q.bearing)} />
              <View style={s.sep} />
              <Stat label={ui('qiblaStatDist')} value={Math.round(q.km).toLocaleString('tr')} sub="km" />
              <View style={s.sep} />
              <Stat label={ui('qiblaStatCompass')} value={heading == null ? '…' : '✓'} sub={heading == null ? ui('qiblaCompassWait') : ui('qiblaCompassOn')} color={heading == null ? C.faint : C.shia} />
            </View>

            <Text style={s.hint}>{ui('qiblaHint')}</Text>
            <Text style={s.privacy}>{ui('qiblaPrivacy')}</Text>
          </>
        )}
      </ScrollView>
    </View>
  );
}

const s = StyleSheet.create({
  back: { color: C.gold, fontFamily: font.sans, fontSize: 16, fontWeight: '700' },
  kicker: { color: C.goldDeep, fontFamily: font.sans, fontSize: 12, fontWeight: '800', letterSpacing: 3, marginTop: 22 },
  title: { color: C.cream, fontFamily: font.serif, fontSize: 32, fontWeight: '700', marginTop: 4 },
  sub: { color: C.dim, fontFamily: font.sans, fontSize: 14, lineHeight: 20, marginTop: 6 },
  card: { marginTop: 22, backgroundColor: C.card, borderRadius: 18, borderWidth: 1, borderColor: C.lineStrong, padding: 18 },
  msg: { color: C.cream, fontFamily: font.sans, fontSize: 16, lineHeight: 23 },
  btn: { marginTop: 16, alignSelf: 'flex-start', backgroundColor: C.gold, borderRadius: 12, paddingHorizontal: 18, paddingVertical: 12 },
  btnText: { color: C.ink, fontFamily: font.sans, fontWeight: '800', fontSize: 15 },
  pill: { alignSelf: 'center', marginTop: 22, borderRadius: 999, borderWidth: 1, paddingHorizontal: 20, paddingVertical: 10 },
  pillText: { fontFamily: font.sans, fontSize: 17, fontWeight: '800', letterSpacing: 0.3 },
  halo: { position: 'absolute', top: -15 },
  stats: { flexDirection: 'row', alignItems: 'center', marginTop: 26, backgroundColor: C.card, borderRadius: 20, borderWidth: 1, borderColor: C.lineStrong, paddingVertical: 16 },
  sep: { width: 1, alignSelf: 'stretch', backgroundColor: C.line },
  stat: { flex: 1, alignItems: 'center' },
  statLabel: { color: C.faint, fontFamily: font.sans, fontSize: 11, fontWeight: '800', letterSpacing: 2 },
  statValue: { color: C.cream, fontFamily: font.serif, fontSize: 26, fontWeight: '700', marginTop: 6 },
  statSub: { color: C.dim, fontFamily: font.sans, fontSize: 13, marginTop: 2 },
  cal: { marginTop: 16, backgroundColor: 'rgba(224,164,90,0.12)', borderRadius: 16, borderWidth: 1, borderColor: C.warn, padding: 14 },
  calTitle: { color: C.warn, fontFamily: font.sans, fontSize: 14, fontWeight: '800', letterSpacing: 0.4 },
  calBody: { color: C.cream, fontFamily: font.sans, fontSize: 15, lineHeight: 22, marginTop: 6 },
  hint: { color: C.faint, fontFamily: font.sans, fontSize: 13, lineHeight: 19, marginTop: 20, textAlign: 'center' },
  privacy: { color: C.faint, fontFamily: font.sans, fontSize: 12, lineHeight: 17, marginTop: 8, textAlign: 'center' },
});

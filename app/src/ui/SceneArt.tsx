// Sahne çizimi: gerçekçi arka plan (assets/art, kamu malı) + nurlu kutsal şahsiyetler + silüet figürler.
// Peygamber, Hz. Ali, Hz. Fatıma, İmam Hasan ve İmam Hüseyin yüzsüz siluet olarak değil, nur (ışık) olarak gösterilir.
import React from 'react';
import { Image, View } from 'react-native';
import Svg, { Circle, Defs, Ellipse, G, LinearGradient, Path, RadialGradient, Rect, Stop, Text as SText } from 'react-native-svg';
import type { Actor, Art, BgKey } from '../types';
import { tx } from '../i18n';
import { BG_IMAGES } from '../data/bgImages';

const W = 360, H = 220, GY = 172;

// Görsel yoksa kullanılan vektör yedek (gökyüzü + zemin)
const FALLBACK: Record<BgKey, { sky: [string, string]; ground: [string, string]; stars?: boolean }> = {
  'dune-day': { sky: ['#7cc8f5', '#ffe6a8'], ground: ['#d9b36c', '#b98c4a'] },
  'dune-dusk': { sky: ['#2b2a5c', '#ff9a5a'], ground: ['#c79a5a', '#8f6a38'] },
  night: { sky: ['#060a1c', '#26225e'], ground: ['#6a5a42', '#3a2f22'], stars: true },
  oasis: { sky: ['#8fd3ff', '#fff0c0'], ground: ['#c9b06a', '#6b9a4a'] },
  caravan: { sky: ['#9ccff0', '#ffe3b0'], ground: ['#d4ad68', '#a98242'] },
  city: { sky: ['#8fcdf2', '#ffe9b8'], ground: ['#b79a6a', '#8f7447'] },
  interior: { sky: ['#2a1f3a', '#3a2a4a'], ground: ['#4a3a2a', '#2a2018'] },
  battle: { sky: ['#6c7a96', '#e8b080'], ground: ['#c6a15c', '#9c7a3e'] },
  mountain: { sky: ['#86b8e6', '#ffe0b0'], ground: ['#a98a5a', '#6f5a3a'] },
  river: { sky: ['#8fcdf2', '#fff0c8'], ground: ['#7a9a5a', '#4f7040'] },
  dawn: { sky: ['#3a4a7c', '#ffc8a2'], ground: ['#b99a6a', '#8a6a3e'] },
};

// Nur renkleri ve boyutu (şahsiyete göre)
const NUR: Record<string, { core: string; glow: string; s: number }> = {
  prophet: { core: '#ffffff', glow: '#ffe38a', s: 1.12 },
  ali: { core: '#f4ffe8', glow: '#6be39a', s: 1.0 },
  fatima: { core: '#fff4f8', glow: '#ff9ec8', s: 0.94 },
  hasan: { core: '#f0fff4', glow: '#8fe6b0', s: 0.78 },
  husayn: { core: '#fff3e6', glow: '#ff9a7a', s: 0.72 },
};

type LA = Actor & { ly?: number };

function Nur({ a }: { a: LA }) {
  const p = NUR[a.kind];
  const cx = (a.x / 100) * W;
  const s = p.s * (a.scale ?? 1);
  const label = a.label ? tx(a.label) : '';
  const id = 'n' + a.kind + Math.round(a.x);
  return (
    <G transform={`translate(${cx} ${GY}) scale(${s})`}>
      <Defs>
        <RadialGradient id={id} cx="50%" cy="50%" r="50%">
          <Stop offset="0" stopColor={p.core} stopOpacity="0.95" />
          <Stop offset="0.35" stopColor={p.glow} stopOpacity="0.55" />
          <Stop offset="1" stopColor={p.glow} stopOpacity="0" />
        </RadialGradient>
      </Defs>
      {/* geniş hâle */}
      <Ellipse cx={0} cy={-62} rx={64} ry={92} fill={`url(#${id})`} />
      {/* ışık huzmeleri */}
      {[-60, -30, 0, 30, 60].map(r => (
        <Path key={r} d="M0 -70 L-3 -140 L3 -140 Z" fill={p.glow} opacity={0.22} transform={`rotate(${r} 0 -70)`} />
      ))}
      {/* nurdan beden: yarı saydam ışık sütunu */}
      <Path d="M0 -118 Q22 -86 17 -48 Q12 -14 0 -2 Q-12 -14 -17 -48 Q-22 -86 0 -118 Z" fill={p.glow} opacity={0.5} />
      <Path d="M0 -108 Q12 -82 9 -48 Q5 -20 0 -10 Q-5 -20 -9 -48 Q-12 -82 0 -108 Z" fill={p.core} opacity={0.92} />
      {/* nurlu yüz: parlayan küre */}
      <Circle cx={0} cy={-98} r={15} fill={p.glow} opacity={0.35} />
      <Circle cx={0} cy={-98} r={9.5} fill={p.core} />
      <Circle cx={0} cy={-98} r={21} fill="none" stroke={p.glow} strokeWidth={1.2} opacity={0.55} />
      <Circle cx={0} cy={-98} r={29} fill="none" stroke={p.core} strokeWidth={0.8} opacity={0.3} />
      {!!label && <SText x={0} y={a.ly ?? 15} fontSize={10} fontWeight="bold" fill="#fff" stroke="rgba(0,0,0,0.6)" strokeWidth={0.5} textAnchor="middle">{label}</SText>}
    </G>
  );
}

function Figure({ a, night }: { a: LA; night: boolean }) {
  const s = a.scale ?? 1;
  const x = (a.x / 100) * W;
  const robe = a.color ?? (a.kind === 'woman' ? '#6c6f8a' : a.kind === 'crowd' ? '#5a4c3a' : '#6a5840');
  const dark = night ? '#0c0e14' : '#1c1510';
  const raise = a.pose === 'raise';
  const sit = a.pose === 'sit';
  const veiled = a.kind === 'woman';
  const top = sit ? 22 : 0;
  const label = a.label ? tx(a.label) : '';
  return (
    <G transform={`translate(${x} ${GY}) scale(${s})`}>
      <Ellipse cx={0} cy={2} rx={17} ry={4} fill="rgba(0,0,0,0.32)" />
      <Path d={`M-15 0 L-11 ${-62 + top} Q0 ${-70 + top} 11 ${-62 + top} L15 0 Z`} fill={robe} stroke={dark} strokeWidth={1.2} />
      <Path d={`M-4 ${-60 + top} L0 ${-20} L4 ${-60 + top}`} fill="none" stroke="rgba(0,0,0,0.22)" strokeWidth={1.4} />
      {raise
        ? <Path d={`M10 ${-56 + top} L24 ${-88 + top}`} stroke={robe} strokeWidth={7} strokeLinecap="round" />
        : <Path d={`M11 ${-56 + top} L15 ${-26}`} stroke={robe} strokeWidth={6} strokeLinecap="round" />}
      {raise && <Circle cx={24} cy={-90 + top} r={4.5} fill={dark} />}
      <Path d={`M-11 ${-56 + top} L-15 ${-26}`} stroke={robe} strokeWidth={6} strokeLinecap="round" />
      <Circle cx={0} cy={-76 + top} r={9.5} fill={dark} />
      {veiled
        ? <Path d={`M-12 ${-66 + top} Q-12 ${-90 + top} 0 ${-90 + top} Q12 ${-90 + top} 12 ${-66 + top} Q6 ${-72 + top} 0 ${-72 + top} Q-6 ${-72 + top} -12 ${-66 + top} Z`} fill={robe} stroke={dark} strokeWidth={1} />
        : <Path d={`M-11 ${-80 + top} Q0 ${-96 + top} 11 ${-80 + top} Q0 ${-76 + top} -11 ${-80 + top} Z`} fill="#d8cdb4" stroke={dark} strokeWidth={1} />}
      {!!label && <SText x={0} y={a.ly ?? 15} fontSize={9.5} fontWeight="bold" fill="#fff" stroke="rgba(0,0,0,0.6)" strokeWidth={0.4} textAnchor="middle">{label}</SText>}
    </G>
  );
}

function Crowd({ x, n = 7, night }: { x: number; n?: number; night: boolean }) {
  const cx = (x / 100) * W;
  return (
    <G>
      {Array.from({ length: n }, (_, i) => {
        const dx = (i - (n - 1) / 2) * 15 + ((i * 7) % 5);
        const sc = 0.66 + ((i * 3) % 4) * 0.06;
        const colors = ['#6a5840', '#4c4638', '#7a6648', '#5e4e36'];
        return <Figure key={i} a={{ kind: 'crowd', x: ((cx + dx) / W) * 100, scale: sc, color: colors[i % 4] }} night={night} />;
      })}
    </G>
  );
}

function Palm({ x, s = 1 }: { x: number; s?: number }) {
  return (
    <G transform={`translate(${x} ${GY}) scale(${s})`}>
      <Path d="M-3 0 Q-2 -40 4 -70 L8 -70 Q2 -40 3 0 Z" fill="#6b4a2b" />
      {[-60, -30, 0, 30, 60].map(r => <Path key={r} d="M5 -70 Q30 -88 52 -66 Q28 -78 5 -66 Z" fill="#2f7a4a" transform={`rotate(${r} 6 -70)`} />)}
    </G>
  );
}
function Tent({ x, s = 1 }: { x: number; s?: number }) {
  return (
    <G transform={`translate(${x} ${GY}) scale(${s})`}>
      <Path d="M-28 0 L0 -44 L28 0 Z" fill="#e9dcc0" stroke="#8a7456" strokeWidth={1.2} />
      <Path d="M-8 0 L0 -26 L8 0 Z" fill="#3a2a1a" />
    </G>
  );
}
function Camel({ x, s = 1 }: { x: number; s?: number }) {
  return (
    <G transform={`translate(${x} ${GY}) scale(${s})`} fill="#7a5a36">
      <Ellipse cx={0} cy={-26} rx={22} ry={11} />
      <Ellipse cx={-6} cy={-40} rx={7} ry={9} />
      <Path d="M16 -30 Q28 -50 34 -58 L38 -54 Q30 -42 24 -26 Z" />
      <Circle cx={37} cy={-58} r={5} />
      {[-14, -6, 8, 15].map(lx => <Rect key={lx} x={lx - 1.5} y={-20} width={3.4} height={20} rx={1.5} />)}
    </G>
  );
}

export default function SceneArt({ art, height = 220, width = 360 }: { art: Art; height?: number; width?: number }) {
  const fb = FALLBACK[art.bg];
  const img = BG_IMAGES[art.bg];
  const night = art.bg === 'night' || art.bg === 'interior';
  const has = (p: string) => (art.props as string[] | undefined)?.includes(p);
  const vector = !img; // gerçekçi görsel varsa vektör dekor çizilmez
  return (
    <View style={{ width: '100%', height, backgroundColor: '#0e1717', overflow: 'hidden' }}>
      {img && <Image source={img} resizeMode="cover" style={{ position: 'absolute', left: 0, top: 0, width: '100%', height: '100%' }} />}
      <Svg width="100%" height={height} viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="xMidYMax slice" style={{ position: 'absolute', left: 0, top: 0 }}>
        <Defs>
          <LinearGradient id="sky" x1="0" y1="0" x2="0" y2="1"><Stop offset="0" stopColor={fb.sky[0]} /><Stop offset="1" stopColor={fb.sky[1]} /></LinearGradient>
          <LinearGradient id="gr" x1="0" y1="0" x2="0" y2="1"><Stop offset="0" stopColor={fb.ground[0]} /><Stop offset="1" stopColor={fb.ground[1]} /></LinearGradient>
          <LinearGradient id="vig" x1="0" y1="0" x2="0" y2="1"><Stop offset="0" stopColor="#000" stopOpacity="0.28" /><Stop offset="0.4" stopColor="#000" stopOpacity="0" /><Stop offset="1" stopColor="#000" stopOpacity="0.45" /></LinearGradient>
        </Defs>
        {vector && (
          <>
            <Rect x={0} y={0} width={W} height={H} fill="url(#sky)" />
            {(fb.stars || has('stars')) && Array.from({ length: 34 }, (_, i) => <Circle key={i} cx={(i * 53) % W} cy={(i * 29) % 110} r={0.8 + (i % 3) * 0.5} fill="#fff" opacity={0.5 + (i % 4) * 0.12} />)}
            {has('sun') && <Circle cx={280} cy={52} r={26} fill="#fff1b0" opacity={0.95} />}
            {has('moon') && <><Circle cx={290} cy={46} r={20} fill="#f6f1d6" /><Circle cx={298} cy={42} r={18} fill={fb.sky[0]} /></>}
            <Path d={`M0 ${GY - 26} Q60 ${GY - 52} 130 ${GY - 30} T260 ${GY - 34} T${W} ${GY - 24} L${W} ${H} L0 ${H} Z`} fill={fb.ground[0]} opacity={0.55} />
            <Rect x={0} y={GY} width={W} height={H - GY} fill="url(#gr)" />
            {has('palms') && <><Palm x={36} s={1.05} /><Palm x={322} s={0.9} /></>}
            {has('tents') && <><Tent x={44} /><Tent x={316} s={0.9} /></>}
            {has('camels') && <><Camel x={70} s={0.9} /><Camel x={300} s={0.8} /></>}
          </>
        )}
        {/* görselin üstüne yumuşak yer gölgesi ve vinyet */}
        <Rect x={0} y={0} width={W} height={H} fill="url(#vig)" />
        {art.actors.map((a0, i) => {
          // yakın figürlerin etiketleri üst üste binmesin: her yakın komşu için bir satır aşağı
          const near = art.actors.slice(0, i).filter(b => b.kind !== 'crowd' && Math.abs(b.x - a0.x) < 24).length;
          const a: LA = { ...a0, ly: 15 + 12 * near };
          if (a.kind === 'prophet' || a.kind === 'ali' || a.kind === 'fatima' || a.kind === 'hasan' || a.kind === 'husayn') return <Nur key={i} a={a} />;
          if (a.kind === 'crowd') return <Crowd key={i} x={a.x} n={a.scale ? Math.round(a.scale) : 7} night={night} />;
          return <Figure key={i} a={a} night={night} />;
        })}
      </Svg>
    </View>
  );
}

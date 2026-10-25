import React, { useEffect, useId, useRef, useState } from 'react';
import { AccessibilityInfo, Image, Platform, StyleSheet, View, type ImageSourcePropType } from 'react-native';
import Svg, {
  Circle, Defs, G, Line, Path, Polyline, RadialGradient, Rect, Stop, Text as SvgText,
} from 'react-native-svg';
import { IMAGERY_CREDIT_SHORT, imageryFor, type Imagery } from '../data/imagery';
import {
  EUPHRATES, PLACES, REGIONS, TIGRIS, distanceKm, formatKm, kmBetween, type PlaceId,
} from '../data/geo';
import { font } from './theme';

export const MAP_W = 360;
export const MAP_H = 430;

type Bounds = { minLat: number; maxLat: number; minLon: number; maxLon: number };
type XY = { id: PlaceId; x: number; y: number; lat: number; lon: number };
type Anchor = 'start' | 'middle' | 'end';
type Proj = { p: (lat: number, lon: number) => { x: number; y: number }; latSpan: number; lonSpan: number };

const FRAME_ASPECT = MAP_W / MAP_H;

const NUDGE: Record<PlaceId, { dx: number; dy: number; anchor: Anchor }> = {
  mekke: { dx: 14, dy: 4, anchor: 'start' },
  medine: { dx: 14, dy: -2, anchor: 'start' },
  gadir: { dx: -14, dy: 4, anchor: 'end' },
  hayber: { dx: -14, dy: -2, anchor: 'end' },
  fedek: { dx: 14, dy: -2, anchor: 'start' },
  tebuk: { dx: 14, dy: -2, anchor: 'start' },
  necran: { dx: 14, dy: 4, anchor: 'start' },
  kufe: { dx: 12, dy: 14, anchor: 'start' },
  kerbela: { dx: -12, dy: -12, anchor: 'end' },
  basra: { dx: -14, dy: 12, anchor: 'end' },
  siffin: { dx: 14, dy: 14, anchor: 'start' },
  nehrevan: { dx: 14, dy: -12, anchor: 'start' },
  sam: { dx: 14, dy: 4, anchor: 'start' },
};

const nameFont = Platform.select({ ios: 'Georgia', android: 'serif', default: font.serif });
const uiFont = Platform.OS === 'web' ? font.sans : undefined;

function fitAspect(b: Bounds, aspect: number): Bounds {
  let { minLat, maxLat, minLon, maxLon } = b;
  const latSpan = Math.max(1e-6, maxLat - minLat);
  const lonSpan = Math.max(1e-6, maxLon - minLon);
  if (lonSpan / latSpan < aspect) {
    const extra = (latSpan * aspect - lonSpan) / 2;
    minLon -= extra;
    maxLon += extra;
  } else {
    const extra = (lonSpan / aspect - latSpan) / 2;
    minLat -= extra;
    maxLat += extra;
  }
  return { minLat, maxLat, minLon, maxLon };
}

function frameBounds(ids: PlaceId[]): Bounds {
  let minLat = 90, maxLat = -90, minLon = 180, maxLon = -180;
  for (const id of ids) {
    const p = PLACES[id];
    minLat = Math.min(minLat, p.lat);
    maxLat = Math.max(maxLat, p.lat);
    minLon = Math.min(minLon, p.lon);
    maxLon = Math.max(maxLon, p.lon);
  }
  const latSpan = Math.max(0.8, maxLat - minLat);
  const lonSpan = Math.max(0.8, maxLon - minLon);
  return fitAspect({
    minLat: minLat - Math.max(0.85, latSpan * 0.2),
    maxLat: maxLat + Math.max(0.85, latSpan * 0.2),
    minLon: minLon - Math.max(1.45, lonSpan * 0.28),
    maxLon: maxLon + Math.max(1.45, lonSpan * 0.28),
  }, FRAME_ASPECT);
}

function makeProj(bounds: Bounds, x0: number, y0: number, w: number, h: number): Proj {
  const lonSpan = Math.max(1e-6, bounds.maxLon - bounds.minLon);
  const latSpan = Math.max(1e-6, bounds.maxLat - bounds.minLat);
  return {
    lonSpan,
    latSpan,
    p(lat: number, lon: number) {
      return {
        x: x0 + ((lon - bounds.minLon) / lonSpan) * w,
        y: y0 + ((bounds.maxLat - lat) / latSpan) * h,
      };
    },
  };
}

function imageRect(img: Imagery, proj: Proj) {
  const tl = proj.p(img.north, img.west);
  const br = proj.p(img.south, img.east);
  return { x: tl.x, y: tl.y, w: br.x - tl.x, h: br.y - tl.y };
}

function growClusters(points: XY[], thresh: number): XY[][] {
  const used = new Set<number>();
  const out: XY[][] = [];
  for (let i = 0; i < points.length; i++) {
    if (used.has(i)) continue;
    const group = [points[i]];
    used.add(i);
    let grew = true;
    while (grew) {
      grew = false;
      for (let j = 0; j < points.length; j++) {
        if (used.has(j)) continue;
        if (group.some(g => Math.hypot(g.x - points[j].x, g.y - points[j].y) < thresh)) {
          group.push(points[j]);
          used.add(j);
          grew = true;
        }
      }
    }
    if (group.length >= 2) out.push(group);
  }
  return out;
}

function spanOf(group: XY[]) {
  let m = 0;
  for (let i = 0; i < group.length; i++) {
    for (let j = i + 1; j < group.length; j++) {
      m = Math.max(m, Math.hypot(group[i].x - group[j].x, group[i].y - group[j].y));
    }
  }
  return m;
}

function chain(coords: [number, number][], p: Proj['p']) {
  return coords.map(([lat, lon]) => {
    const q = p(lat, lon);
    return `${q.x.toFixed(1)},${q.y.toFixed(1)}`;
  }).join(' ');
}

function inBox(x: number, y: number, m = 8) {
  return x > m && y > m && x < MAP_W - m && y < MAP_H - m;
}

type Curve = { pts: string; len: number; label: { x: number; y: number } };

function curveBetween(a: { x: number; y: number }, b: { x: number; y: number }): Curve {
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const len = Math.hypot(dx, dy) || 1;
  const nx = -dy / len;
  const ny = dx / len;
  const mx = (a.x + b.x) / 2;
  const my = (a.y + b.y) / 2;
  const away = -Math.sign((MAP_W / 2 - mx) * nx + (MAP_H / 2 - my) * ny) || 1;
  const bow = Math.max(10, Math.min(32, len * 0.13)) * away;
  const cx = mx + nx * bow;
  const cy = my + ny * bow;
  const parts: string[] = [];
  let prev = a;
  let arc = 0;
  const n = 20;
  for (let i = 0; i <= n; i++) {
    const t = i / n;
    const u = 1 - t;
    const x = u * u * a.x + 2 * u * t * cx + t * t * b.x;
    const y = u * u * a.y + 2 * u * t * cy + t * t * b.y;
    if (i > 0) arc += Math.hypot(x - prev.x, y - prev.y);
    prev = { x, y };
    parts.push(`${x.toFixed(1)},${y.toFixed(1)}`);
  }
  const midT = 0.5;
  const u = 1 - midT;
  const lx = u * u * a.x + 2 * u * midT * cx + midT * midT * b.x + nx * away * 13;
  const ly = u * u * a.y + 2 * u * midT * cy + midT * midT * b.y + ny * away * 13;
  return { pts: parts.join(' '), len: arc, label: { x: lx, y: ly } };
}

function Terrain({
  source, rect, sx, sy, origin,
}: {
  source: ImageSourcePropType;
  rect: { x: number; y: number; w: number; h: number };
  sx: number;
  sy: number;
  origin?: { x: number; y: number };
}) {
  const ox = origin?.x ?? 0;
  const oy = origin?.y ?? 0;
  return (
    <Image
      source={source}
      fadeDuration={0}
      resizeMode="stretch"
      accessibilityIgnoresInvertColors
      {...(Platform.OS === 'web' ? ({ draggable: false } as object) : null)}
      style={{
        position: 'absolute',
        left: (rect.x - ox) * sx,
        top: (rect.y - oy) * sy,
        width: Math.max(1, rect.w * sx),
        height: Math.max(1, rect.h * sy),
      }}
    />
  );
}

function NameTag({ x, y, text, anchor, size, hot }: { x: number; y: number; text: string; anchor: Anchor; size: number; hot?: boolean }) {
  const w = text.length * size * 0.58 + 12;
  const h = size + 8;
  let left = anchor === 'start' ? x - 6 : anchor === 'end' ? x - w + 6 : x - w / 2;
  let top = y - size;
  if (left < 3) { left = 3; }
  if (left + w > MAP_W - 3) left = MAP_W - 3 - w;
  if (top < 3) top = 3;
  if (top + h > MAP_H - 3) top = MAP_H - 3 - h;
  const tx = anchor === 'start' ? left + 6 : anchor === 'end' ? left + w - 6 : left + w / 2;
  return (
    <G>
      <Rect x={left} y={top} width={w} height={h} rx={6} fill="rgba(6,16,14,0.84)" stroke={hot ? 'rgba(228,197,106,0.95)' : 'rgba(228,197,106,0.45)'} strokeWidth={0.8} />
      <SvgText x={tx} y={top + size + 1} fontSize={size} fontWeight="700" textAnchor={anchor} fill={hot ? '#f3e2a6' : '#f6f1e6'} fontFamily={nameFont}>{text}</SvgText>
    </G>
  );
}

function Marker({ x, y, id, hot, n, small, pulse }: { x: number; y: number; id: PlaceId; hot: boolean; n?: number; small?: boolean; pulse: number }) {
  const mekke = id === 'mekke';
  const medine = id === 'medine';
  const k = (small ? 0.82 : 1) * (hot ? 1.12 : 1);
  const glow = (mekke ? 11 : 9) * k;
  return (
    <G>
      <Circle cx={x} cy={y} r={glow + 1.5} fill={hot ? 'rgba(228,197,106,0.2)' : 'rgba(8,16,14,0.22)'} />
      {hot && (
        <Circle
          cx={x}
          cy={y}
          r={14 * k + pulse * 5}
          fill="rgba(228,197,106,0.14)"
          stroke="#f0d78c"
          strokeWidth={1.15}
        />
      )}
      {mekke ? (
        <G>
          <Rect x={x - 6.2 * k} y={y - 6.2 * k} width={12.4 * k} height={12.4 * k} rx={0.8} fill="#140e08" stroke="#f0d78c" strokeWidth={1.35} />
          <Rect x={x - 6.2 * k} y={y - 1.15 * k} width={12.4 * k} height={2.3 * k} fill="#e4c56a" />
          <Rect x={x - 1.5 * k} y={y - 6.2 * k} width={3 * k} height={4.2 * k} fill="#c4a15a" />
        </G>
      ) : medine ? (
        <G>
          <Circle cx={x} cy={y + 1.2 * k} r={6.4 * k} fill="#102e28" stroke="#f6f1e6" strokeWidth={1.2} />
          <Path d={`M ${x - 5.6 * k} ${y + 1.4 * k} Q ${x} ${y - 8.2 * k} ${x + 5.6 * k} ${y + 1.4 * k} Z`} fill="#0c2420" stroke="#e4c56a" strokeWidth={1.15} />
          <Circle cx={x} cy={y - 2.2 * k} r={1.15 * k} fill="#f0d78c" />
        </G>
      ) : PLACES[id].approx ? (
        <Path d={`M ${x} ${y - 6.2 * k} L ${x + 6.2 * k} ${y} L ${x} ${y + 6.2 * k} L ${x - 6.2 * k} ${y} Z`} fill="rgba(246,241,230,0.12)" stroke="#f6f1e6" strokeWidth={1.15} strokeDasharray="2.2 1.6" />
      ) : (
        <Circle cx={x} cy={y} r={(hot ? 4.8 : 3.5) * k} fill={hot ? '#f0d78c' : '#f6f1e6'} stroke="#1a140c" strokeWidth={0.9} />
      )}
      {n != null && (
        <G>
          <Circle cx={x + 12} cy={y - 12} r={7.6} fill="#e4c56a" stroke="#1a140c" strokeWidth={0.7} />
          <SvgText x={x + 12} y={y - 9.1} fontSize={8.5} fontWeight="700" textAnchor="middle" fill="#1a140c" fontFamily={uiFont}>{n}</SvgText>
        </G>
      )}
    </G>
  );
}

type Inset = {
  group: XY[];
  box: { x: number; y: number };
  iw: number;
  ih: number;
  bounds: Bounds;
  proj: Proj;
  img: Imagery;
};

function buildInsets(points: XY[], mainScale: number): Inset[] {
  const clusters = growClusters(points, 38);
  type Cand = { group: XY[]; span: number; mag: number; bounds: Bounds; iw: number; ih: number };
  const cands: Cand[] = [];
  for (const cluster of clusters) {
    const subsets: XY[][] = [];
    if (cluster.length <= 3) subsets.push(cluster);
    for (let i = 0; i < cluster.length; i++) {
      for (let j = i + 1; j < cluster.length; j++) {
        if (Math.hypot(cluster[i].x - cluster[j].x, cluster[i].y - cluster[j].y) < 36) {
          subsets.push([cluster[i], cluster[j]]);
        }
      }
    }
    for (const sub of subsets) {
      if (sub.length < 2 || sub.length >= points.length) continue;
      const sp = spanOf(sub);
      if (sp > 100) continue;
      const lats = sub.map(p => p.lat);
      const lons = sub.map(p => p.lon);
      const minLat = Math.min(...lats);
      const maxLat = Math.max(...lats);
      const minLon = Math.min(...lons);
      const maxLon = Math.max(...lons);
      const latSpan = Math.max(0.18, maxLat - minLat);
      const lonSpan = Math.max(0.18, maxLon - minLon);
      const padded: Bounds = {
        minLat: minLat - Math.max(0.22, latSpan * 0.42),
        maxLat: maxLat + Math.max(0.22, latSpan * 0.42),
        minLon: minLon - Math.max(0.26, lonSpan * 0.42),
        maxLon: maxLon + Math.max(0.26, lonSpan * 0.42),
      };
      const geoAspect = (padded.maxLon - padded.minLon) / (padded.maxLat - padded.minLat);
      const portrait = geoAspect < 0.9;
      const ih = portrait ? 150 : 128;
      const iw = portrait ? 122 : 158;
      const bounds = fitAspect(padded, iw / ih);
      const scale = ih / (bounds.maxLat - bounds.minLat);
      const mag = scale / mainScale;
      if (mag < 2.15) continue;
      cands.push({ group: sub, span: sp, mag, bounds, iw, ih });
    }
  }
  cands.sort((a, b) => a.span - b.span || b.mag - a.mag);
  const used = new Set<PlaceId>();
  const picked: Cand[] = [];
  for (const c of cands) {
    if (c.group.some(p => used.has(p.id))) continue;
    picked.push(c);
    c.group.forEach(p => used.add(p.id));
    if (picked.length === 2) break;
  }
  const placed: { x: number; y: number }[] = [];
  return picked.map(c => {
    const corners = [
      { x: MAP_W - c.iw - 10, y: 10 },
      { x: 10, y: 10 },
      { x: MAP_W - c.iw - 10, y: MAP_H - c.ih - 12 },
      { x: 10, y: MAP_H - c.ih - 12 },
    ];
    let best = corners[0];
    let bestScore = -Infinity;
    for (const corner of corners) {
      if (placed.some(u => Math.hypot(u.x - corner.x, u.y - corner.y) < 24)) continue;
      const cx = corner.x + c.iw / 2;
      const cy = corner.y + c.ih / 2;
      let score = Math.min(...points.map(p => Math.hypot(p.x - cx, p.y - cy)));
      if (corner.y < MAP_H / 2) score += 18;
      for (const p of points) {
        if (p.x > corner.x - 8 && p.x < corner.x + c.iw + 8 && p.y > corner.y - 8 && p.y < corner.y + c.ih + 8) score -= 80;
      }
      if (score > bestScore) { bestScore = score; best = corner; }
    }
    placed.push(best);
    return {
      group: c.group,
      box: best,
      iw: c.iw,
      ih: c.ih,
      bounds: c.bounds,
      proj: makeProj(c.bounds, best.x, best.y, c.iw, c.ih),
      img: imageryFor(c.bounds),
    };
  });
}

export function MapZoom({
  width, height, resetKey, children,
}: {
  width: number;
  height: number;
  resetKey?: string;
  children: React.ReactNode;
}) {
  const [view, setView] = useState({ s: 1, x: 0, y: 0 });
  const g = useRef({ s: 1, x: 0, y: 0, mode: '', dist: 1, px: 0, py: 0, fx: 0, fy: 0, sx: 1, lastTap: 0 });
  const size = useRef({ width, height });
  size.current = { width, height };
  const host = useRef<View>(null);

  const apply = (s: number, x: number, y: number) => {
    const W = size.current.width;
    const H = size.current.height;
    s = Math.max(1, Math.min(4.2, s));
    if (s <= 1.001) { s = 1; x = 0; y = 0; }
    const maxX = (W * (s - 1)) / 2;
    const maxY = (H * (s - 1)) / 2;
    x = Math.max(-maxX, Math.min(maxX, x));
    y = Math.max(-maxY, Math.min(maxY, y));
    g.current.s = s;
    g.current.x = x;
    g.current.y = y;
    setView({ s, x, y });
  };
  const applyRef = useRef(apply);
  applyRef.current = apply;

  useEffect(() => {
    g.current.s = 1; g.current.x = 0; g.current.y = 0;
    setView({ s: 1, x: 0, y: 0 });
  }, [resetKey]);

  useEffect(() => {
    if (Platform.OS !== 'web') return;
    const el = host.current as unknown as HTMLElement | null;
    if (!el || typeof el.addEventListener !== 'function') return;
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      const rect = el.getBoundingClientRect();
      const fx = e.clientX - rect.left;
      const fy = e.clientY - rect.top;
      const prev = g.current.s || 1;
      const next = prev * Math.exp(-e.deltaY * 0.0015);
      const cx = fx - rect.width / 2;
      const cy = fy - rect.height / 2;
      const k = next / prev;
      applyRef.current(next, cx - (cx - g.current.x) * k, cy - (cy - g.current.y) * k);
    };
    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  }, [resetKey]);

  return (
    <View
      ref={host}
      style={{ width, height, overflow: 'hidden' }}
      pointerEvents="box-only"
      accessibilityHint="İki parmakla yakınlaştırılıp kaydırılabilir"
      onStartShouldSetResponder={() => false}
      onMoveShouldSetResponder={(e) => (e.nativeEvent.touches?.length ?? 0) >= 2 || g.current.s > 1.02}
      onMoveShouldSetResponderCapture={(e) => (e.nativeEvent.touches?.length ?? 0) >= 2}
      onResponderTerminationRequest={() => g.current.mode !== 'pinch' && g.current.s <= 1.02}
      onResponderGrant={(e) => {
        const t = e.nativeEvent.touches ?? [];
        if (t.length >= 2) {
          g.current.mode = 'pinch';
          g.current.dist = Math.hypot(t[0].pageX - t[1].pageX, t[0].pageY - t[1].pageY) || 1;
          g.current.sx = g.current.s;
          g.current.px = g.current.x;
          g.current.py = g.current.y;
        } else {
          g.current.mode = 'pan';
          g.current.fx = e.nativeEvent.pageX;
          g.current.fy = e.nativeEvent.pageY;
          g.current.px = g.current.x;
          g.current.py = g.current.y;
        }
      }}
      onResponderMove={(e) => {
        const t = e.nativeEvent.touches ?? [];
        if (t.length >= 2) {
          const dist = Math.hypot(t[0].pageX - t[1].pageX, t[0].pageY - t[1].pageY) || 1;
          if (g.current.mode !== 'pinch') {
            g.current.mode = 'pinch';
            g.current.dist = dist;
            g.current.sx = g.current.s;
            g.current.px = g.current.x;
            g.current.py = g.current.y;
          }
          const next = g.current.sx * (dist / g.current.dist);
          const fx = ((t[0].locationX ?? 0) + (t[1].locationX ?? 0)) / 2;
          const fy = ((t[0].locationY ?? 0) + (t[1].locationY ?? 0)) / 2;
          const cx = fx - size.current.width / 2;
          const cy = fy - size.current.height / 2;
          const k = next / (g.current.sx || 1);
          apply(next, cx - (cx - g.current.px) * k, cy - (cy - g.current.py) * k);
          return;
        }
        if (g.current.s > 1.02 && g.current.mode !== 'pinch') {
          apply(g.current.s, g.current.px + e.nativeEvent.pageX - g.current.fx, g.current.py + e.nativeEvent.pageY - g.current.fy);
        }
      }}
      onResponderRelease={() => {
        const now = Date.now();
        if (g.current.mode === 'pan' && now - g.current.lastTap < 300) apply(1, 0, 0);
        g.current.lastTap = now;
        g.current.mode = '';
      }}
      onResponderTerminate={() => { g.current.mode = ''; }}
    >
      <View pointerEvents="none" collapsable={false} style={{ width, height, transform: [{ translateX: view.x }, { translateY: view.y }, { scale: view.s }] }}>
        {children}
      </View>
    </View>
  );
}

export function BirdMap({
  width,
  markers,
  lines = [],
  highlight,
  labels,
  numbers,
  compact,
  animate,
}: {
  width: number;
  markers: PlaceId[];
  lines?: [PlaceId, PlaceId][];
  highlight?: PlaceId;
  labels?: PlaceId[];
  numbers?: Partial<Record<PlaceId, number>>;
  compact?: boolean;
  animate?: boolean;
}) {
  const uid = useId().replace(/[^a-zA-Z0-9]/g, '');
  const height = Math.max(1, Math.round(width * MAP_H / MAP_W));
  const ids = markers.length ? markers : (['mekke', 'medine'] as PlaceId[]);
  const bounds = frameBounds(ids);
  const proj = makeProj(bounds, 0, 0, MAP_W, MAP_H);
  const img = imageryFor(bounds);
  const rect = imageRect(img, proj);
  const points: XY[] = ids.map(id => {
    const q = proj.p(PLACES[id].lat, PLACES[id].lon);
    return { id, ...q, lat: PLACES[id].lat, lon: PLACES[id].lon };
  });
  const mainScale = MAP_H / proj.latSpan;
  const insets = compact ? [] : buildInsets(points, mainScale);
  const hidden = new Set<PlaceId>(insets.flatMap(ins => ins.group.map(p => p.id)));
  const labelIds = compact ? [] : (labels ?? ids).filter(id => !hidden.has(id));

  const [draw, setDraw] = useState(animate ? 0 : 1);
  const [pulse, setPulse] = useState(0);
  useEffect(() => {
    if (!animate) { setDraw(1); setPulse(0); return; }
    let alive = true;
    let raf = 0;
    let reduce = false;
    AccessibilityInfo.isReduceMotionEnabled().then(v => { reduce = !!v; }).catch(() => {});
    const t0 = Date.now();
    const loop = () => {
      if (!alive) return;
      if (reduce) { setDraw(1); setPulse(0); return; }
      const t = Date.now() - t0;
      const p = Math.min(1, t / 1500);
      setDraw(1 - (1 - p) ** 3);
      setPulse((Math.sin(t / 520) + 1) / 2);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => { alive = false; cancelAnimationFrame(raf); };
  }, [animate, highlight]);

  const kmPerPx = (() => {
    const lat = (bounds.minLat + bounds.maxLat) / 2;
    const lon = (bounds.minLon + bounds.maxLon) / 2;
    const p0 = proj.p(lat, lon);
    const p1 = proj.p(lat, lon + 1);
    const px = Math.max(0.001, Math.hypot(p1.x - p0.x, p1.y - p0.y));
    return distanceKm({ lat, lon }, { lat, lon: lon + 1 }) / px;
  })();
  const rawKm = 78 * kmPerPx;
  const mag = Math.pow(10, Math.floor(Math.log10(Math.max(rawKm, 1))));
  let barKm = mag;
  for (const m of [1, 2, 5, 10]) {
    const c = m * mag;
    if (Math.abs(c - rawKm) < Math.abs(barKm - rawKm)) barKm = c;
  }
  const barPx = barKm / kmPerPx;

  const insetBoxes = insets.map(ins => ({ x: ins.box.x, y: ins.box.y, w: ins.iw, h: ins.ih }));
  const hitsInset = (x: number, y: number, pad = 0) => insetBoxes.some(b => x > b.x - pad && x < b.x + b.w + pad && y > b.y - pad && y < b.y + b.h + pad);
  const scaleAtBottom = !hitsInset(16, MAP_H - 36, 8);
  const chrome = scaleAtBottom ? { x: 14, y: MAP_H - 28 } : { x: 14, y: 26 };
  const creditAtBottom = !hitsInset(MAP_W - 120, MAP_H - 22, 0);
  const credit = creditAtBottom ? { x: MAP_W - 10, y: MAP_H - 10 } : { x: MAP_W - 10, y: 16 };

  const roleOf = (a: PlaceId, b: PlaceId) => {
    const mm = (a === 'mekke' && b === 'medine') || (a === 'medine' && b === 'mekke');
    if (mm && highlight && highlight !== 'mekke' && highlight !== 'medine') return 'context' as const;
    return 'primary' as const;
  };

  const sx = width / MAP_W;
  const sy = height / MAP_H;
  const step = gridStep(proj.latSpan);

  const routes = lines.map(([a, b], i) => {
    const pa = proj.p(PLACES[a].lat, PLACES[a].lon);
    const pb = proj.p(PLACES[b].lat, PLACES[b].lon);
    const role = roleOf(a, b);
    const curved = curveBetween(pa, pb);
    const bothInset = hidden.has(a) && hidden.has(b);
    const label = formatKm(kmBetween(a, b));
    const tw = label.length * 5.2 + 14;
    const { x: lx, y: ly } = curved.label;
    const near = points.some(p => Math.hypot(p.x - lx, p.y - ly) < 16);
    const tagOk = !compact && role === 'primary' && !bothInset && curved.len > 70 && !near && inBox(lx, ly, 10) && !hitsInset(lx, ly, 4);
    return { i, role, curved, label, tw, lx, ly, tagOk };
  });

  return (
    <View style={{ width, height, overflow: 'hidden', backgroundColor: '#071820' }}>
      <Terrain source={img.source} rect={rect} sx={sx} sy={sy} />
      <Svg width={width} height={height} viewBox={`0 0 ${MAP_W} ${MAP_H}`} style={StyleSheet.absoluteFill} pointerEvents="none">
        <Defs>
          <RadialGradient id={`${uid}vig`} cx="50%" cy="46%" r="72%">
            <Stop offset="0.55" stopColor="#000" stopOpacity="0" />
            <Stop offset="1" stopColor="#02080c" stopOpacity={compact ? 0.28 : 0.5} />
          </RadialGradient>
        </Defs>
        <Rect width={MAP_W} height={MAP_H} fill={`url(#${uid}vig)`} />

        {!compact && gridLines(bounds, proj, step)}

        {([EUPHRATES, TIGRIS] as const).map((river, i) => (
          <G key={'rv' + i}>
            <Polyline points={chain(river, proj.p)} fill="none" stroke="rgba(6,28,32,0.55)" strokeWidth={compact ? 2.2 : 3.4} strokeLinecap="round" strokeLinejoin="round" />
            <Polyline points={chain(river, proj.p)} fill="none" stroke="rgba(214,236,232,0.82)" strokeWidth={compact ? 0.7 : 1.05} strokeLinecap="round" strokeLinejoin="round" />
          </G>
        ))}

        {!compact && REGIONS.map(r => {
          const q = proj.p(r.lat, r.lon);
          if (!inBox(q.x, q.y, 18)) return null;
          if (points.some(p => Math.hypot(p.x - q.x, p.y - q.y) < 52)) return null;
          if (hitsInset(q.x, q.y, 6)) return null;
          const fill = r.sea ? 'rgba(226,240,236,0.72)' : 'rgba(246,236,210,0.62)';
          return (
            <SvgText key={r.t} x={q.x} y={q.y} fontSize={r.sea ? 8 : 9} letterSpacing={1.6} fontWeight="700" textAnchor="middle" fill={fill} stroke="rgba(6,14,12,0.72)" strokeWidth={2.4} fontFamily={uiFont}>
              {r.t}
            </SvgText>
          );
        })}

        {!compact && [
          { t: 'Fırat', lat: 34.4, lon: 40.55 },
          { t: 'Dicle', lat: 34.85, lon: 43.35 },
        ].map(r => {
          const q = proj.p(r.lat, r.lon);
          if (!inBox(q.x, q.y, 16)) return null;
          if (points.some(p => Math.hypot(p.x - q.x, p.y - q.y) < 26)) return null;
          if (hitsInset(q.x, q.y, 4)) return null;
          return (
            <SvgText key={r.t} x={q.x} y={q.y} fontSize={9} fontStyle="italic" textAnchor="middle" fill="rgba(226,244,240,0.9)" stroke="rgba(6,20,24,0.75)" strokeWidth={2.2} fontFamily={nameFont}>
              {r.t}
            </SvgText>
          );
        })}

        {routes.map(r => (
          <G key={'ln' + r.i}>
            <Polyline points={r.curved.pts} fill="none" stroke={r.role === 'context' ? 'rgba(243,226,166,0.18)' : 'rgba(243,226,166,0.38)'} strokeWidth={r.role === 'context' ? 3 : 4.5} strokeLinecap="round" />
            <Polyline
              points={r.curved.pts}
              fill="none"
              stroke={r.role === 'context' ? 'rgba(244,228,180,0.7)' : '#f7e7b8'}
              strokeWidth={r.role === 'context' ? 1.05 : 1.45}
              strokeDasharray={r.role === 'context' || draw > 0.98 ? '1.4 5.2' : `${r.curved.len} ${r.curved.len}`}
              strokeDashoffset={r.role === 'context' || draw > 0.98 ? 0 : r.curved.len * (1 - draw)}
              strokeLinecap="round"
            />
            {r.tagOk && (
              <G>
                <Rect x={r.lx - r.tw / 2} y={r.ly - 8} width={r.tw} height={16} rx={8} fill="rgba(6,16,14,0.88)" stroke="rgba(228,197,106,0.7)" strokeWidth={0.7} />
                <SvgText x={r.lx} y={r.ly + 3.5} fontSize={9} fontWeight="700" textAnchor="middle" fill="#f6f1e6" fontFamily={uiFont}>{r.label}</SvgText>
              </G>
            )}
          </G>
        ))}

        {insets.map((ins, i) => {
          const xs = ins.group.map(p => p.x);
          const ys = ins.group.map(p => p.y);
          let x1 = Math.min(...xs) - 14;
          let x2 = Math.max(...xs) + 14;
          let y1 = Math.min(...ys) - 14;
          let y2 = Math.max(...ys) + 14;
          if (x2 - x1 < 28) { const c = (x1 + x2) / 2; x1 = c - 14; x2 = c + 14; }
          if (y2 - y1 < 28) { const c = (y1 + y2) / 2; y1 = c - 14; y2 = c + 14; }
          return <Rect key={'bb' + i} x={x1} y={y1} width={x2 - x1} height={y2 - y1} rx={4} fill="none" stroke="#e4c56a" strokeWidth={1} strokeDasharray="3 3" />;
        })}

        {points.map(p => (
          <Marker key={p.id} x={p.x} y={p.y} id={p.id} hot={p.id === highlight} n={compact ? undefined : numbers?.[p.id]} small={compact} pulse={animate && p.id === highlight ? pulse : 0} />
        ))}

        {labelIds.map(id => {
          const p = points.find(q => q.id === id);
          if (!p) return null;
          const n = NUDGE[id];
          return <NameTag key={'lb' + id} x={p.x + n.dx} y={p.y + n.dy} text={PLACES[id].name} anchor={n.anchor} size={id === highlight ? 12.5 : 11} hot={id === highlight} />;
        })}

        {!compact && (
          <G>
            <Rect x={chrome.x - 8} y={chrome.y - 16} width={barPx + 54} height={32} rx={8} fill="rgba(6,16,14,0.62)" />
            <Line x1={chrome.x} y1={chrome.y} x2={chrome.x + barPx} y2={chrome.y} stroke="#f6f1e6" strokeWidth={1.5} />
            <Line x1={chrome.x} y1={chrome.y - 3.5} x2={chrome.x} y2={chrome.y + 3.5} stroke="#f6f1e6" strokeWidth={1.1} />
            <Line x1={chrome.x + barPx} y1={chrome.y - 3.5} x2={chrome.x + barPx} y2={chrome.y + 3.5} stroke="#f6f1e6" strokeWidth={1.1} />
            <SvgText x={chrome.x + barPx / 2} y={chrome.y + 12} fontSize={8} fontWeight="700" textAnchor="middle" fill="#f6f1e6" fontFamily={uiFont}>{formatKm(barKm)}</SvgText>
            <Circle cx={chrome.x + barPx + 28} cy={chrome.y - 1} r={9} fill="rgba(8,18,16,0.35)" stroke="#e4c56a" strokeWidth={0.8} />
            <Path d={`M ${chrome.x + barPx + 28} ${chrome.y - 8} L ${chrome.x + barPx + 31.2} ${chrome.y + 1} L ${chrome.x + barPx + 28} ${chrome.y - 1} L ${chrome.x + barPx + 24.8} ${chrome.y + 1} Z`} fill="#e4c56a" />
            <SvgText x={chrome.x + barPx + 28} y={chrome.y - 12} fontSize={8} fontWeight="700" textAnchor="middle" fill="#f6f1e6" fontFamily={uiFont}>K</SvgText>
            <SvgText x={credit.x} y={credit.y} fontSize={8} textAnchor="end" fill="rgba(246,241,230,0.82)" stroke="rgba(6,14,12,0.65)" strokeWidth={1.6} fontFamily={uiFont}>{IMAGERY_CREDIT_SHORT}</SvgText>
          </G>
        )}

        <Rect x={1.1} y={1.1} width={MAP_W - 2.2} height={MAP_H - 2.2} fill="none" stroke="rgba(228,197,106,0.72)" strokeWidth={1.25} />
        <Rect x={4.5} y={4.5} width={MAP_W - 9} height={MAP_H - 9} fill="none" stroke="rgba(244,230,190,0.28)" strokeWidth={0.6} />
      </Svg>

      {insets.map(ins => {
        const irec = imageRect(ins.img, ins.proj);
        return (
          <View
            key={ins.group.map(p => p.id).join('-')}
            style={{
              position: 'absolute',
              left: ins.box.x * sx,
              top: ins.box.y * sy,
              width: ins.iw * sx,
              height: ins.ih * sy,
              overflow: 'hidden',
              borderRadius: 11 * sx,
              borderWidth: 1.2,
              borderColor: '#e4c56a',
              backgroundColor: '#102028',
            }}
          >
            <Terrain source={ins.img.source} rect={irec} sx={sx} sy={sy} origin={ins.box} />
            <Svg width={ins.iw * sx} height={ins.ih * sy} viewBox={`${ins.box.x} ${ins.box.y} ${ins.iw} ${ins.ih}`} style={StyleSheet.absoluteFill} pointerEvents="none">
              <Polyline points={chain(EUPHRATES, ins.proj.p)} fill="none" stroke="rgba(6,28,32,0.55)" strokeWidth={3} strokeLinecap="round" />
              <Polyline points={chain(TIGRIS, ins.proj.p)} fill="none" stroke="rgba(6,28,32,0.55)" strokeWidth={3} strokeLinecap="round" />
              <Polyline points={chain(EUPHRATES, ins.proj.p)} fill="none" stroke="rgba(214,236,232,0.85)" strokeWidth={1} strokeLinecap="round" />
              <Polyline points={chain(TIGRIS, ins.proj.p)} fill="none" stroke="rgba(214,236,232,0.85)" strokeWidth={1} strokeLinecap="round" />
              {ins.group.map(p => {
                const q = ins.proj.p(p.lat, p.lon);
                return <Marker key={p.id} x={q.x} y={q.y} id={p.id} hot={p.id === highlight} pulse={0} />;
              })}
              {ins.group.map(p => {
                const q = ins.proj.p(p.lat, p.lon);
                let dx = 0, dy = 0;
                for (const o of ins.group) {
                  if (o.id === p.id) continue;
                  const r = ins.proj.p(o.lat, o.lon);
                  dx += q.x - r.x;
                  dy += q.y - r.y;
                }
                const len = Math.hypot(dx, dy) || 1;
                const ox = (dx / len) * 12;
                const oy = (dy / len) * 11;
                const anchor: Anchor = ox < -2 ? 'end' : 'start';
                return <NameTag key={'n' + p.id} x={q.x + ox} y={q.y + oy} text={PLACES[p.id].name} anchor={anchor} size={10} hot={p.id === highlight} />;
              })}
              <Rect x={ins.box.x + 7} y={ins.box.y + 6} width={68} height={14} rx={4} fill="rgba(6,16,14,0.82)" stroke="rgba(228,197,106,0.7)" strokeWidth={0.6} />
              <SvgText x={ins.box.x + 41} y={ins.box.y + 16} fontSize={8} fontWeight="700" textAnchor="middle" fill="#f0d78c" fontFamily={uiFont}>YAKIN PLAN</SvgText>
            </Svg>
          </View>
        );
      })}
    </View>
  );
}

function gridStep(span: number) {
  if (span > 18) return 5;
  if (span > 8) return 2;
  return 1;
}

function gridLines(bounds: Bounds, proj: Proj, step: number) {
  const nodes: React.ReactNode[] = [];
  for (let lat = Math.ceil(bounds.minLat / step) * step; lat < bounds.maxLat; lat += step) {
    const a = proj.p(lat, bounds.minLon);
    const b = proj.p(lat, bounds.maxLon);
    nodes.push(<Line key={'la' + lat} x1={a.x} y1={a.y} x2={b.x} y2={b.y} stroke="rgba(255,255,255,0.1)" strokeWidth={0.55} />);
  }
  for (let lon = Math.ceil(bounds.minLon / step) * step; lon < bounds.maxLon; lon += step) {
    const a = proj.p(bounds.minLat, lon);
    const b = proj.p(bounds.maxLat, lon);
    nodes.push(<Line key={'lo' + lon} x1={a.x} y1={a.y} x2={b.x} y2={b.y} stroke="rgba(255,255,255,0.1)" strokeWidth={0.55} />);
  }
  return nodes;
}

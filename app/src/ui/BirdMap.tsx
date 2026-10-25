import React, { useId } from 'react';
import { Platform } from 'react-native';
import Svg, {
  Circle, ClipPath, Defs, G, Line, Path, Polygon, Polyline, RadialGradient, Rect, Stop,
  Text as SvgText,
} from 'react-native-svg';
import {
  EUPHRATES, HIJAZ_RIDGE, LAND, PLACES, REGIONS, TIGRIS, formatKm, kmBetween, type PlaceId,
} from '../data/geo';
import { font } from './theme';

export const MAP_W = 360;
export const MAP_H = 430;

type Bounds = { minLat: number; maxLat: number; minLon: number; maxLon: number };
type XY = { id: PlaceId; x: number; y: number; lat: number; lon: number };
type Anchor = 'start' | 'middle' | 'end';

const NUDGE: Record<PlaceId, { dx: number; dy: number; anchor: Anchor }> = {
  mekke: { dx: 12, dy: 4, anchor: 'start' },
  medine: { dx: 12, dy: -4, anchor: 'start' },
  gadir: { dx: -12, dy: 4, anchor: 'end' },
  hayber: { dx: -12, dy: -3, anchor: 'end' },
  fedek: { dx: 12, dy: -3, anchor: 'start' },
  tebuk: { dx: 12, dy: -4, anchor: 'start' },
  necran: { dx: 12, dy: 4, anchor: 'start' },
  kufe: { dx: 10, dy: 14, anchor: 'start' },
  kerbela: { dx: -10, dy: -14, anchor: 'end' },
  basra: { dx: -12, dy: 12, anchor: 'end' },
  siffin: { dx: 12, dy: 14, anchor: 'start' },
  nehrevan: { dx: 12, dy: -12, anchor: 'start' },
  sam: { dx: 12, dy: 4, anchor: 'start' },
};

function boundsFor(ids: PlaceId[]): Bounds {
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
  return {
    minLat: minLat - Math.max(0.85, latSpan * 0.2),
    maxLat: maxLat + Math.max(0.85, latSpan * 0.2),
    minLon: minLon - Math.max(1.45, lonSpan * 0.28),
    maxLon: maxLon + Math.max(1.45, lonSpan * 0.28),
  };
}

function makeProj(bounds: Bounds, x0: number, y0: number, w: number, h: number, pad: number) {
  const cos = Math.cos(((bounds.minLat + bounds.maxLat) / 2) * Math.PI / 180);
  const xSpan = Math.max(0.001, (bounds.maxLon - bounds.minLon) * cos);
  const ySpan = Math.max(0.001, bounds.maxLat - bounds.minLat);
  const innerW = Math.max(1, w - pad * 2);
  const innerH = Math.max(1, h - pad * 2);
  const scale = Math.min(innerW / xSpan, innerH / ySpan);
  const ox = x0 + pad + (innerW - xSpan * scale) / 2;
  const oy = y0 + pad + (innerH - ySpan * scale) / 2;
  return {
    scale,
    p(lat: number, lon: number) {
      return {
        x: ox + (lon - bounds.minLon) * cos * scale,
        y: oy + (bounds.maxLat - lat) * scale,
      };
    },
  };
}

function chain(coords: [number, number][], p: (lat: number, lon: number) => { x: number; y: number }) {
  return coords.map(([lat, lon]) => {
    const q = p(lat, lon);
    return `${q.x.toFixed(1)},${q.y.toFixed(1)}`;
  }).join(' ');
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

function span(group: XY[]) {
  let m = 0;
  for (let i = 0; i < group.length; i++) {
    for (let j = i + 1; j < group.length; j++) {
      m = Math.max(m, Math.hypot(group[i].x - group[j].x, group[i].y - group[j].y));
    }
  }
  return m;
}

function minPair(group: XY[]) {
  let m = Infinity;
  for (let i = 0; i < group.length; i++) {
    for (let j = i + 1; j < group.length; j++) {
      m = Math.min(m, Math.hypot(group[i].x - group[j].x, group[i].y - group[j].y));
    }
  }
  return m;
}

function inBox(x: number, y: number, m = 8) {
  return x > m && y > m && x < MAP_W - m && y < MAP_H - m;
}

const svgFont = Platform.OS === 'web' ? font.sans : undefined;

function NameTag({ x, y, text, anchor, size, hot }: { x: number; y: number; text: string; anchor: Anchor; size: number; hot?: boolean }) {
  const w = text.length * size * 0.56 + 10;
  const h = size + 7;
  const left = anchor === 'start' ? x - 5 : anchor === 'end' ? x - w + 5 : x - w / 2;
  const top = y - size + 1;
  return (
    <G>
      <Rect x={left} y={top} width={w} height={h} rx={5} fill="rgba(246,241,230,0.94)" />
      <SvgText x={x} y={y} fontSize={size} fontWeight="700" textAnchor={anchor} fill={hot ? '#6a4e12' : '#241c12'} fontFamily={svgFont}>{text}</SvgText>
    </G>
  );
}

function Marker({ x, y, id, hot, n, small }: { x: number; y: number; id: PlaceId; hot: boolean; n?: number; small?: boolean }) {
  const mekke = id === 'mekke';
  const medine = id === 'medine';
  const s = (mekke ? 7 : 6) * (hot ? 1.25 : 1) * (small ? 0.85 : 1);
  return (
    <G>
      {hot && <Circle cx={x} cy={y} r={small ? 9 : 13} stroke="#e4c56a" strokeWidth={1.15} fill="rgba(228,197,106,0.16)" />}
      {mekke ? (
        <G>
          <Rect x={x - s / 2} y={y - s / 2} width={s} height={s} rx={0.8} fill="#1a1408" stroke="#e4c56a" strokeWidth={1.35} />
          <Rect x={x - 1} y={y - s / 2} width={2} height={s * 0.46} fill="#e4c56a" />
        </G>
      ) : medine ? (
        <G>
          <Circle cx={x} cy={y} r={s * 0.72} fill="#102e28" stroke="#f4efe4" strokeWidth={1.25} />
          <Path d={`M ${x - s * 0.55} ${y + 0.6} Q ${x} ${y - s * 0.85} ${x + s * 0.55} ${y + 0.6}`} stroke="#e4c56a" strokeWidth={1.15} fill="none" />
        </G>
      ) : PLACES[id].approx ? (
        <G>
          <Path d={`M ${x} ${y - s} L ${x + s} ${y} L ${x} ${y + s} L ${x - s} ${y} Z`} fill="none" stroke="#f6f1e6" strokeWidth={1.2} strokeDasharray="2 1.5" />
        </G>
      ) : (
        <Circle cx={x} cy={y} r={hot ? 5.2 : 3.6} fill={hot ? '#e4c56a' : '#f6f1e6'} stroke="#1a1408" strokeWidth={0.7} />
      )}
      {n != null && (
        <G>
          <Circle cx={x + 11} cy={y - 11} r={7.4} fill="#e4c56a" stroke="#1a1408" strokeWidth={0.6} />
          <SvgText x={x + 11} y={y - 8.2} fontSize={8} fontWeight="700" textAnchor="middle" fill="#1a1408" fontFamily={svgFont}>{n}</SvgText>
        </G>
      )}
    </G>
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
}: {
  width: number;
  markers: PlaceId[];
  lines?: [PlaceId, PlaceId][];
  highlight?: PlaceId;
  labels?: PlaceId[];
  numbers?: Partial<Record<PlaceId, number>>;
  compact?: boolean;
}) {
  const uid = useId().replace(/[^a-zA-Z0-9]/g, '');
  const height = Math.max(1, Math.round(width * MAP_H / MAP_W));
  const ids = markers.length ? markers : (['mekke', 'medine'] as PlaceId[]);
  const bounds = boundsFor(ids);
  const proj = makeProj(bounds, 0, 0, MAP_W, MAP_H, compact ? 8 : 30);
  const points: XY[] = ids.map(id => {
    const q = proj.p(PLACES[id].lat, PLACES[id].lon);
    return { id, ...q, lat: PLACES[id].lat, lon: PLACES[id].lon };
  });

  const insetGroups = compact ? [] : growClusters(points, 42)
    .filter(g => g.length < points.length && span(g) <= 130 && minPair(g) < 40)
    .sort((a, b) => minPair(a) - minPair(b))
    .slice(0, 2);

  const hidden = new Set<PlaceId>(insetGroups.flat().map(p => p.id));
  const labelIds = compact ? [] : (labels ?? ids).filter(id => !hidden.has(id));

  const IW = insetGroups.length > 1 ? 148 : 168;
  const IH = insetGroups.length > 1 ? 116 : 134;
  const corners = [
    { x: MAP_W - IW - 12, y: 12 },
    { x: 12, y: 12 },
    { x: MAP_W - IW - 12, y: MAP_H - IH - 14 },
    { x: 12, y: MAP_H - IH - 14 },
  ];
  const usedCorners: { x: number; y: number }[] = [];
  const insets = insetGroups.map(group => {
    let best = corners[0];
    let bestScore = -Infinity;
    for (const c of corners) {
      if (usedCorners.some(u => Math.hypot(u.x - c.x, u.y - c.y) < 20)) continue;
      const cx = c.x + IW / 2;
      const cy = c.y + IH / 2;
      let score = Math.min(...points.map(p => Math.hypot(p.x - cx, p.y - cy)));
      if (c.x > MAP_W / 2 && c.y < MAP_H / 2) score += 36;
      if (c.x < MAP_W / 2 && c.y > MAP_H / 2) score -= 40;
      for (const p of points) {
        if (p.x > c.x - 6 && p.x < c.x + IW + 6 && p.y > c.y - 6 && p.y < c.y + IH + 6) score -= 70;
      }
      if (score > bestScore) { bestScore = score; best = c; }
    }
    usedCorners.push(best);
    const lats = group.map(p => p.lat);
    const lons = group.map(p => p.lon);
    const minLat = Math.min(...lats);
    const maxLat = Math.max(...lats);
    const minLon = Math.min(...lons);
    const maxLon = Math.max(...lons);
    const latSpan = Math.max(0.18, maxLat - minLat);
    const lonSpan = Math.max(0.18, maxLon - minLon);
    const ib: Bounds = {
      minLat: minLat - Math.max(0.28, latSpan * 0.55),
      maxLat: maxLat + Math.max(0.28, latSpan * 0.55),
      minLon: minLon - Math.max(0.32, lonSpan * 0.55),
      maxLon: maxLon + Math.max(0.32, lonSpan * 0.55),
    };
    return { group, box: best, proj: makeProj(ib, best.x, best.y, IW, IH, 18) };
  });

  const kmPerPx = 111.195 / proj.scale;
  const rawKm = 74 * kmPerPx;
  const mag = Math.pow(10, Math.floor(Math.log10(Math.max(rawKm, 1))));
  let barKm = mag;
  for (const m of [1, 2, 5, 10]) {
    const c = m * mag;
    if (Math.abs(c - rawKm) < Math.abs(barKm - rawKm)) barKm = c;
  }
  const barPx = barKm / kmPerPx;
  const chromeBlocked = insets.some(ins => ins.box.x < 150 && ins.box.y > MAP_H - IH - 40);
  const chrome = chromeBlocked ? { x: 16, y: 22 } : { x: 16, y: MAP_H - 26 };

  const land = chain(LAND, proj.p);
  const roleOf = (a: PlaceId, b: PlaceId) => {
    const mm = (a === 'mekke' && b === 'medine') || (a === 'medine' && b === 'mekke');
    if (mm && highlight && highlight !== 'mekke' && highlight !== 'medine') return 'context' as const;
    return 'primary' as const;
  };

  return (
    <Svg width={width} height={height} viewBox={`0 0 ${MAP_W} ${MAP_H}`}>
      <Defs>
        <RadialGradient id={`${uid}vig`} cx="50%" cy="46%" r="68%">
          <Stop offset="0" stopColor="#000" stopOpacity="0" />
          <Stop offset="1" stopColor="#021416" stopOpacity="0.34" />
        </RadialGradient>
        {insets.map((ins, i) => (
          <ClipPath id={`${uid}c${i}`} key={i}>
            <Rect x={ins.box.x} y={ins.box.y} width={IW} height={IH} rx={11} />
          </ClipPath>
        ))}
      </Defs>

      <Rect width={MAP_W} height={MAP_H} fill="#0c3c44" />
      <Polygon points={land} fill="#c6a56e" stroke="#f3e6c8" strokeWidth={1.25} />
      <Polygon points={land} fill="none" stroke="#5a4630" strokeWidth={5} opacity={0.18} />
      <Rect width={MAP_W} height={MAP_H} fill={`url(#${uid}vig)`} />

      {!compact && (() => {
        const latSpan = bounds.maxLat - bounds.minLat;
        const step = latSpan > 14 ? 5 : latSpan > 7 ? 2 : 1;
        const nodes: React.ReactNode[] = [];
        for (let lat = Math.ceil(bounds.minLat / step) * step; lat < bounds.maxLat; lat += step) {
          const a = proj.p(lat, bounds.minLon);
          const b = proj.p(lat, bounds.maxLon);
          nodes.push(<Line key={'la' + lat} x1={a.x} y1={a.y} x2={b.x} y2={b.y} stroke="rgba(255,255,255,0.14)" strokeWidth={0.6} />);
        }
        for (let lon = Math.ceil(bounds.minLon / step) * step; lon < bounds.maxLon; lon += step) {
          const a = proj.p(bounds.minLat, lon);
          const b = proj.p(bounds.maxLat, lon);
          nodes.push(<Line key={'lo' + lon} x1={a.x} y1={a.y} x2={b.x} y2={b.y} stroke="rgba(255,255,255,0.14)" strokeWidth={0.6} />);
        }
        return nodes;
      })()}

      {!compact && HIJAZ_RIDGE.slice(0, -1).map((_, i) => {
        const a = proj.p(HIJAZ_RIDGE[i][0], HIJAZ_RIDGE[i][1]);
        const b = proj.p(HIJAZ_RIDGE[i + 1][0], HIJAZ_RIDGE[i + 1][1]);
        const mx = (a.x + b.x) / 2;
        const my = (a.y + b.y) / 2;
        if (!inBox(mx, my, -30)) return null;
        const dx = b.x - a.x;
        const dy = b.y - a.y;
        const len = Math.hypot(dx, dy) || 1;
        const nx = -dy / len;
        const ny = dx / len;
        const ticks = [0, 7].map(shift => {
          const sx = mx + (dx / len) * shift;
          const sy = my + (dy / len) * shift;
          return <Line key={shift} x1={sx - nx * 4.5} y1={sy - ny * 4.5} x2={sx + nx * 4.5} y2={sy + ny * 4.5} stroke="#7c6244" strokeWidth={1.15} />;
        });
        return <G key={'ridge' + i}>{ticks}</G>;
      })}

      {([EUPHRATES, TIGRIS] as const).map((river, i) => (
        <G key={i}>
          <Polyline points={chain(river, proj.p)} fill="none" stroke="#6d8f62" strokeWidth={compact ? 4 : 9} strokeLinecap="round" strokeLinejoin="round" opacity={0.38} />
          <Polyline points={chain(river, proj.p)} fill="none" stroke="#e7f7f3" strokeWidth={compact ? 1 : 1.45} strokeLinecap="round" strokeLinejoin="round" />
        </G>
      ))}

      {!compact && REGIONS.map(r => {
        const q = proj.p(r.lat, r.lon);
        if (!inBox(q.x, q.y, 16)) return null;
        if (points.some(p => Math.hypot(p.x - q.x, p.y - q.y) < 34)) return null;
        if (insets.some(ins => q.x > ins.box.x && q.x < ins.box.x + IW && q.y > ins.box.y && q.y < ins.box.y + IH)) return null;
        return (
          <SvgText key={r.t} x={q.x} y={q.y} fontSize={r.sea ? 8 : 9} letterSpacing={1.4} textAnchor="middle" fill={r.sea ? 'rgba(232,246,242,0.72)' : 'rgba(62,48,28,0.55)'} fontFamily={svgFont}>
            {r.t}
          </SvgText>
        );
      })}

      {!compact && [
        { t: 'Fırat', lat: 34.5, lon: 40.7 },
        { t: 'Dicle', lat: 35.0, lon: 43.55 },
      ].map(r => {
        const q = proj.p(r.lat, r.lon);
        if (!inBox(q.x, q.y, 18)) return null;
        if (points.some(p => Math.hypot(p.x - q.x, p.y - q.y) < 28)) return null;
        return <SvgText key={r.t} x={q.x} y={q.y} fontSize={9} fill="#1d4c52" textAnchor="middle" fontFamily={svgFont}>{r.t}</SvgText>;
      })}

      {lines.map(([a, b], i) => {
        const pa = proj.p(PLACES[a].lat, PLACES[a].lon);
        const pb = proj.p(PLACES[b].lat, PLACES[b].lon);
        const role = roleOf(a, b);
        const dx = pb.x - pa.x;
        const dy = pb.y - pa.y;
        const len = Math.hypot(dx, dy) || 1;
        const bothInset = hidden.has(a) && hidden.has(b);
        const showTag = !compact && role === 'primary' && !bothInset && len > 78;
        const ox = (-dy / len) * 12;
        const oy = (dx / len) * 12;
        const lx = (pa.x + pb.x) / 2 + ox;
        const ly = (pa.y + pb.y) / 2 + oy;
        const near = points.some(p => Math.hypot(p.x - lx, p.y - ly) < 18);
        const label = formatKm(kmBetween(a, b));
        const tw = label.length * 5.15 + 12;
        const tagOk = showTag && !near && inBox(lx, ly, 8) && !insets.some(ins => lx > ins.box.x && lx < ins.box.x + IW && ly > ins.box.y && ly < ins.box.y + IH);
        return (
          <G key={'ln' + i}>
            <Line
              x1={pa.x} y1={pa.y} x2={pb.x} y2={pb.y}
              stroke={role === 'context' ? 'rgba(244,228,180,0.55)' : '#f7e7b8'}
              strokeWidth={role === 'context' ? 1 : 1.7}
              strokeDasharray={role === 'context' ? '2 6' : '7 5'}
            />
            {tagOk && (
              <G>
                <Rect x={lx - tw / 2} y={ly - 8} width={tw} height={15} rx={7.5} fill="rgba(7,20,16,0.9)" stroke="rgba(228,197,106,0.55)" strokeWidth={0.7} />
                <SvgText x={lx} y={ly + 3} fontSize={9} textAnchor="middle" fill="#f6f1e6" fontFamily={svgFont}>{label}</SvgText>
              </G>
            )}
          </G>
        );
      })}

      {insets.map((ins, i) => {
        const xs = ins.group.map(p => p.x);
        const ys = ins.group.map(p => p.y);
        let x1 = Math.min(...xs) - 16;
        let x2 = Math.max(...xs) + 16;
        let y1 = Math.min(...ys) - 16;
        let y2 = Math.max(...ys) + 16;
        if (x2 - x1 < 34) { const c = (x1 + x2) / 2; x1 = c - 17; x2 = c + 17; }
        if (y2 - y1 < 34) { const c = (y1 + y2) / 2; y1 = c - 17; y2 = c + 17; }
        return <Rect key={'bb' + i} x={x1} y={y1} width={x2 - x1} height={y2 - y1} fill="none" stroke="#e4c56a" strokeWidth={1} strokeDasharray="3 3" />;
      })}

      {points.map(p => (
        <Marker key={p.id} x={p.x} y={p.y} id={p.id} hot={p.id === highlight} n={compact ? undefined : numbers?.[p.id]} small={compact} />
      ))}

      {labelIds.map(id => {
        const p = points.find(q => q.id === id);
        if (!p) return null;
        const n = NUDGE[id];
        return (
          <NameTag key={'lb' + id} x={p.x + n.dx} y={p.y + n.dy} text={PLACES[id].name} anchor={n.anchor} size={id === highlight ? 12 : 11} hot={id === highlight} />
        );
      })}

      {insets.map((ins, i) => (
        <G key={'ins' + i}>
          <G clipPath={`url(#${uid}c${i})`}>
            <Rect x={ins.box.x} y={ins.box.y} width={IW} height={IH} fill="#0c3c44" />
            <Polygon points={chain(LAND, ins.proj.p)} fill="#d2b27a" stroke="#f3e6c8" strokeWidth={1} />
            <Polyline points={chain(EUPHRATES, ins.proj.p)} fill="none" stroke="#6d8f62" strokeWidth={8} opacity={0.4} />
            <Polyline points={chain(TIGRIS, ins.proj.p)} fill="none" stroke="#6d8f62" strokeWidth={8} opacity={0.4} />
            <Polyline points={chain(EUPHRATES, ins.proj.p)} fill="none" stroke="#e7f7f3" strokeWidth={1.5} />
            <Polyline points={chain(TIGRIS, ins.proj.p)} fill="none" stroke="#e7f7f3" strokeWidth={1.5} />
            {ins.group.map(p => {
              const q = ins.proj.p(p.lat, p.lon);
              return <Marker key={p.id} x={q.x} y={q.y} id={p.id} hot={p.id === highlight} />;
            })}
            {ins.group.map(p => {
              const q = ins.proj.p(p.lat, p.lon);
              const n = NUDGE[p.id];
              return (
                <NameTag key={p.id} x={q.x + Math.sign(n.dx) * 8} y={q.y + Math.sign(n.dy || 1) * 8} text={PLACES[p.id].name} anchor={n.anchor} size={10} hot={p.id === highlight} />
              );
            })}
          </G>
          <Rect x={ins.box.x} y={ins.box.y} width={IW} height={IH} rx={11} fill="none" stroke="#e4c56a" strokeWidth={1.3} />
          <Rect x={ins.box.x + 8} y={ins.box.y + 6} width={62} height={13} rx={4} fill="rgba(246,241,230,0.92)" />
          <SvgText x={ins.box.x + 39} y={ins.box.y + 15.5} fontSize={8} textAnchor="middle" fill="#6a4e12" fontFamily={svgFont}>YAKIN PLAN</SvgText>
        </G>
      ))}

      {!compact && (
        <G>
          <Line x1={chrome.x} y1={chrome.y} x2={chrome.x + barPx} y2={chrome.y} stroke="#f6f1e6" strokeWidth={1.4} />
          <Line x1={chrome.x} y1={chrome.y - 3.5} x2={chrome.x} y2={chrome.y + 3.5} stroke="#f6f1e6" strokeWidth={1} />
          <Line x1={chrome.x + barPx} y1={chrome.y - 3.5} x2={chrome.x + barPx} y2={chrome.y + 3.5} stroke="#f6f1e6" strokeWidth={1} />
          <SvgText x={chrome.x + barPx / 2} y={chrome.y + 12} fontSize={8} textAnchor="middle" fill="#f6f1e6" fontFamily={svgFont}>{formatKm(barKm)}</SvgText>
          <Path d={`M ${chrome.x + barPx + 22} ${chrome.y + 4} L ${chrome.x + barPx + 26} ${chrome.y - 12} L ${chrome.x + barPx + 30} ${chrome.y + 4} L ${chrome.x + barPx + 26} ${chrome.y} Z`} fill="#e4c56a" />
          <SvgText x={chrome.x + barPx + 26} y={chrome.y - 15} fontSize={8} textAnchor="middle" fill="#f6f1e6" fontFamily={svgFont}>K</SvgText>
        </G>
      )}

      <Rect x={1.2} y={1.2} width={MAP_W - 2.4} height={MAP_H - 2.4} fill="none" stroke="rgba(228,197,106,0.7)" strokeWidth={1.3} />
      <Rect x={5} y={5} width={MAP_W - 10} height={MAP_H - 10} fill="none" stroke="rgba(244,230,190,0.28)" strokeWidth={0.6} />
    </Svg>
  );
}

import { COUNTRIES } from '../data/borders';
import { WATERS } from '../data/geo';
import { CAPITALS, MODERN_CITIES } from '../data/modern';

export type OverlayLabel = {
  key: string;
  text: string;
  x: number;
  y: number;
  size: number;
  kind: 'country' | 'capital' | 'city' | 'sea' | 'river' | 'region';
  star?: { x: number; y: number; r: number };
};

type Box = { x: number; y: number; w: number; h: number };
type Pt = { x: number; y: number };

const RING: [number, number][] = [];
for (const dy of [0, -12, 12, -24, 24, -36, 36, -48, 48]) {
  for (const dx of [0, -18, 18, -32, 32, -46, 46, -58, 58]) {
    RING.push([dx, dy]);
  }
}

function textBox(cx: number, cy: number, text: string, size: number): Box {
  const w = Math.max(8, text.length * size * 0.52);
  const h = size + 3.2;
  return { x: cx - w / 2, y: cy - h * 0.62, w, h };
}

function overlaps(a: Box, b: Box, pad: number) {
  return !(a.x + a.w + pad < b.x || b.x + b.w + pad < a.x || a.y + a.h + pad < b.y || b.y + b.h + pad < a.y);
}

function blockedBy(box: Box, placed: Box[], pad: number) {
  for (const other of placed) {
    if (overlaps(box, other, pad)) return true;
  }
  return false;
}

function onMap(box: Box) {
  return box.x > 1 && box.y > 1 && box.x + box.w < 359 && box.y + box.h < 429;
}

export function placeOverlay(input: {
  modern: boolean;
  /** 1 at the full plate; smaller as the camera zooms in, so screen size stays put. */
  unit: number;
  /** Quantized camera scale. Cities appear once this reaches their tier. */
  zoom: number;
  project: (lat: number, lon: number) => Pt;
  sight: { minX: number; maxX: number; minY: number; maxY: number };
  /** Chrome and historical name tags, in viewBox pixels. */
  reserved: Box[];
  /** Historical marker anchors, used to hide a duplicate capital name. */
  markers: { x: number; y: number; text: string }[];
}): OverlayLabel[] {
  const { modern, unit, zoom, project, sight, markers } = input;
  const placed: Box[] = input.reserved.map(b => ({ ...b }));
  const labels: OverlayLabel[] = [];
  const u = unit;
  const seen = (x: number, y: number, pad = 10) =>
    x > sight.minX - pad && x < sight.maxX + pad && y > sight.minY - pad && y < sight.maxY + pad;

  const tryText = (cx: number, cy: number, text: string, size: number, pad: number) => {
    const box = textBox(cx, cy, text, size);
    if (!onMap(box) || blockedBy(box, placed, pad)) return null;
    return box;
  };

  if (modern) {
    const capitalSize = 7.6 * u;
    const starR = 3.15 * u;
    for (const cap of CAPITALS) {
      const q = project(cap.lat, cap.lon);
      if (!seen(q.x, q.y, 4)) continue;
      const nearMarker = markers.some(m => Math.hypot(m.x - q.x, m.y - q.y) < 16 * u && m.text === cap.name);
      placed.push({ x: q.x - starR * 1.4, y: q.y - starR * 1.4, w: starR * 2.8, h: starR * 2.8 });
      let text = '';
      let tx = q.x;
      let ty = q.y;
      if (!nearMarker) {
        const opts: [number, number][] = [];
        if (cap.dx != null || cap.dy != null) opts.push([cap.dx ?? 0, cap.dy ?? 0]);
        opts.push(...RING);
        for (const [dx, dy] of opts) {
          const cx = q.x + dx * u;
          const cy = q.y + dy * u;
          const box = tryText(cx, cy, cap.name, capitalSize, 1);
          if (!box) continue;
          placed.push(box);
          text = cap.name;
          tx = cx;
          ty = cy;
          break;
        }
      }
      labels.push({
        key: 'cap-' + cap.name,
        text,
        x: tx,
        y: ty,
        size: capitalSize,
        kind: 'capital',
        star: { x: q.x, y: q.y, r: starR },
      });
    }

    const countrySize = 8.6 * u;
    const smallSize = 7.2 * u;
    for (const country of COUNTRIES) {
      if (!country.name) continue;
      if (CAPITALS.some(c => c.name === country.name)) continue;
      const spots = country.labels
        .map(([lon, lat]) => project(lat, lon))
        .filter(p => seen(p.x, p.y, 8));
      if (!spots.length) continue;
      let placedLabel = false;
      const attempts: { x: number; y: number; size: number }[] = [];
      for (const spot of spots) {
        attempts.push({ x: spot.x, y: spot.y, size: countrySize });
        for (const [dx, dy] of RING) attempts.push({ x: spot.x + dx * u, y: spot.y + dy * u, size: countrySize });
      }
      for (const spot of spots) {
        for (const [dx, dy] of [[18, 0], [28, 0], [0, 16], [0, -16], [36, 10]] as [number, number][]) {
          attempts.push({ x: spot.x + dx * u, y: spot.y + dy * u, size: smallSize });
        }
      }
      for (const attempt of attempts) {
        const box = tryText(attempt.x, attempt.y, country.name, attempt.size, 0.8);
        if (!box) continue;
        placed.push(box);
        labels.push({
          key: 'cty-' + country.id,
          text: country.name,
          x: attempt.x,
          y: attempt.y,
          size: attempt.size,
          kind: 'country',
        });
        placedLabel = true;
        break;
      }
      if (!placedLabel) {
        const spot = spots[0];
        let best: { x: number; y: number; size: number; score: number } | null = null;
        for (let dy = 0; dy <= 64; dy += 8) {
          for (const dx of [0, -20, 20, -40, 40, 56, -56]) {
            const cx = spot.x + dx * u;
            const cy = spot.y + dy * u;
            const box = textBox(cx, cy, country.name, smallSize);
            if (!onMap(box)) continue;
            let score = 0;
            let fatal = false;
            for (const other of placed) {
              if (!overlaps(box, other, 0)) continue;
              const ox = Math.min(box.x + box.w, other.x + other.w) - Math.max(box.x, other.x);
              const oy = Math.min(box.y + box.h, other.y + other.h) - Math.max(box.y, other.y);
              const area = Math.max(0, ox) * Math.max(0, oy);
              if (area > 160) { fatal = true; break; }
              score += area;
            }
            if (fatal) continue;
            if (!best || score < best.score) best = { x: cx, y: cy, size: smallSize, score };
          }
        }
        if (best) {
          placed.push(textBox(best.x, best.y, country.name, best.size));
          labels.push({
            key: 'cty-' + country.id,
            text: country.name,
            x: best.x,
            y: best.y,
            size: best.size,
            kind: 'country',
          });
        }
      }
    }
  }

  const waters = [
    ...WATERS.map(w => ({ ...w, river: false })),
    { t: 'Fırat', lon: 40.9, lat: 35.2, river: true },
    { t: 'Dicle', lon: 43.6, lat: 35.4, river: true },
  ];
  const seaSize = 7.4 * u;
  for (const water of waters) {
    const q = project(water.lat, water.lon);
    if (!seen(q.x, q.y, 6)) continue;
    const opts: [number, number][] = [[0, 0], ...RING];
    for (const [dx, dy] of opts) {
      const cx = q.x + dx * u;
      const cy = q.y + dy * u;
      const box = tryText(cx, cy, water.t, seaSize, 0.6);
      if (!box) continue;
      placed.push(box);
      labels.push({
        key: 'sea-' + water.t,
        text: water.t,
        x: cx,
        y: cy,
        size: seaSize,
        kind: water.river ? 'river' : 'sea',
      });
      break;
    }
  }

  if (modern) {
    const citySize = 7.5 * u;
    for (const city of MODERN_CITIES) {
      if (zoom + 1e-6 < city.tier) continue;
      const q = project(city.lat, city.lon);
      if (!seen(q.x, q.y, 4)) continue;
      if (markers.some(m => Math.hypot(m.x - q.x, m.y - q.y) < 18 * u)) continue;
      const box = tryText(q.x, q.y - 10 * u, city.name, citySize, 1);
      if (!box) continue;
      placed.push(box);
      labels.push({ key: 'city-' + city.name, text: city.name, x: q.x, y: q.y - 10 * u, size: citySize, kind: 'city' });
    }
  }

  return labels;
}

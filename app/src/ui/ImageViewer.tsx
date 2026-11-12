import { useRef, useState } from 'react';
import { Animated, Modal, PanResponder, Pressable, StatusBar, Text, View, useWindowDimensions } from 'react-native';
import { C, TOP, font } from './theme';

const MAX_SCALE = 5;
const clamp = (v: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, v));

// İki parmakla yakınlaştırma, yakınlaşmışken tek parmakla kaydırma, çift dokunuşla yakınlaştır/uzaklaştır.
function ZoomableImage({ source, width, height, onSwipe }: { source: number; width: number; height: number; onSwipe: (dir: 1 | -1) => void }) {
  const scale = useRef(new Animated.Value(1)).current;
  const tx = useRef(new Animated.Value(0)).current;
  const ty = useRef(new Animated.Value(0)).current;
  const st = useRef({ s: 1, x: 0, y: 0, count: 0, dist: 0, s0: 1, lx: 0, ly: 0, moved: false, lastTap: 0, tdx: 0, tdy: 0, pinched: false }).current;

  const apply = () => {
    const mx = ((st.s - 1) * width) / 2, my = ((st.s - 1) * height) / 2;
    st.x = clamp(st.x, -mx, mx); st.y = clamp(st.y, -my, my);
    scale.setValue(st.s); tx.setValue(st.x); ty.setValue(st.y);
  };
  const animateTo = (s: number) => {
    st.s = s; if (s === 1) { st.x = 0; st.y = 0; }
    const mx = ((s - 1) * width) / 2, my = ((s - 1) * height) / 2;
    st.x = clamp(st.x, -mx, mx); st.y = clamp(st.y, -my, my);
    Animated.parallel([
      Animated.timing(scale, { toValue: st.s, duration: 180, useNativeDriver: false }),
      Animated.timing(tx, { toValue: st.x, duration: 180, useNativeDriver: false }),
      Animated.timing(ty, { toValue: st.y, duration: 180, useNativeDriver: false }),
    ]).start();
  };
  const dist = (ts: { pageX: number; pageY: number }[]) => Math.hypot(ts[0].pageX - ts[1].pageX, ts[0].pageY - ts[1].pageY);

  const pan = useRef(PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: () => true,
    onPanResponderTerminationRequest: () => false,
    onPanResponderGrant: () => { st.count = 0; st.moved = false; st.tdx = 0; st.tdy = 0; st.pinched = false; },
    onPanResponderMove: e => {
      const ts = e.nativeEvent.touches as unknown as { pageX: number; pageY: number }[];
      if (ts.length !== st.count) {
        st.count = ts.length;
        st.lx = ts[0].pageX; st.ly = ts[0].pageY;
        if (ts.length >= 2) { st.dist = dist(ts); st.s0 = st.s; }
        return;
      }
      if (ts.length >= 2) {
        st.moved = true; st.pinched = true;
        st.s = clamp(st.s0 * (dist(ts) / (st.dist || 1)), 1, MAX_SCALE);
        apply();
      } else if (ts.length === 1) {
        const dx = ts[0].pageX - st.lx, dy = ts[0].pageY - st.ly;
        st.lx = ts[0].pageX; st.ly = ts[0].pageY;
        if (Math.abs(dx) + Math.abs(dy) > 1) st.moved = true;
        if (st.s > 1.01) { st.x += dx; st.y += dy; apply(); } else { st.tdx += dx; st.tdy += dy; }
      }
    },
    onPanResponderRelease: () => {
      st.count = 0;
      if (st.s < 1.05) { animateTo(1); }
      if (!st.pinched && st.s < 1.05 && Math.abs(st.tdx) > 50 && Math.abs(st.tdx) > Math.abs(st.tdy) * 1.5) { onSwipe(st.tdx < 0 ? 1 : -1); return; }
      if (!st.moved) {
        const now = Date.now();
        if (now - st.lastTap < 300) { animateTo(st.s > 1.05 ? 1 : 2.5); st.lastTap = 0; } else st.lastTap = now;
      }
    },
    onPanResponderTerminate: () => { st.count = 0; if (st.s < 1.05) animateTo(1); },
  })).current;

  return (
    <View
      {...pan.panHandlers}
      style={{ width, height, alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
      <Animated.Image source={source} resizeMode="contain" style={{ width, height, transform: [{ translateX: tx }, { translateY: ty }, { scale }] }} />
    </View>
  );
}

// Sahne görselini tam ekran açar. Birden fazla görsel varsa yana kaydırarak gezilir.
export function ImageViewer({ images, start, caption, onClose }: { images: number[]; start: number; caption?: string; onClose: () => void }) {
  const { width, height } = useWindowDimensions();
  const [idx, setIdx] = useState(start);
  const go = (dir: 1 | -1) => setIdx(i => clamp(i + dir, 0, images.length - 1));
  return (
    <Modal visible animationType="fade" onRequestClose={onClose} statusBarTranslucent supportedOrientations={['portrait', 'landscape']}>
      <View style={{ flex: 1, backgroundColor: '#000' }}>
        <StatusBar hidden />
        <ZoomableImage key={idx} source={images[idx]} width={width} height={height} onSwipe={go} />
        <Pressable
          onPress={onClose}
          accessibilityRole="button"
          accessibilityLabel="Kapat"
          hitSlop={10}
          style={{ position: 'absolute', top: Math.max(TOP - 20, 16), right: 16, width: 44, height: 44, borderRadius: 22, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.6)', borderWidth: 1, borderColor: 'rgba(255,255,255,0.25)' }}
        >
          <Text style={{ color: C.cream, fontSize: 20, fontWeight: '700' }}>✕</Text>
        </Pressable>
        {(images.length > 1 || caption) && (
          <View pointerEvents="none" style={{ position: 'absolute', left: 0, right: 0, bottom: 24, alignItems: 'center' }}>
            <View style={{ backgroundColor: 'rgba(0,0,0,0.6)', borderRadius: 14, paddingHorizontal: 14, paddingVertical: 6 }}>
              <Text style={{ color: C.cream, fontFamily: font.sans, fontSize: 13, fontWeight: '700' }}>
                {caption ?? ''}{caption && images.length > 1 ? ' · ' : ''}{images.length > 1 ? `${idx + 1}/${images.length}` : ''}
              </Text>
            </View>
          </View>
        )}
      </View>
    </Modal>
  );
}

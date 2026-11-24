import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';
import Svg, { Defs, LinearGradient, Rect, Stop } from 'react-native-svg';
import { Chevron, HandIcon } from './icons';
import { C, font, themedStyles } from './theme';

/** Looped hand that slides left or right, matching the app's horizontal paging. */
export function SwipeHand({
  direction = 'left',
  size = 32,
  subtle,
}: {
  direction?: 'left' | 'right';
  size?: number;
  subtle?: boolean;
}) {
  const x = useRef(new Animated.Value(0)).current;
  const travel = direction === 'left' ? -22 : 22;
  useEffect(() => {
    const anim = Animated.loop(
      Animated.sequence([
        Animated.timing(x, { toValue: travel, duration: 900, useNativeDriver: true }),
        Animated.timing(x, { toValue: 0, duration: 700, useNativeDriver: true }),
        Animated.delay(450),
      ]),
    );
    anim.start();
    return () => anim.stop();
  }, [x, travel]);
  return (
    <Animated.View
      pointerEvents="none"
      accessibilityElementsHidden
      importantForAccessibility="no-hide-descendants"
      style={{ transform: [{ translateX: x }], opacity: subtle ? 0.8 : 1 }}
    >
      <HandIcon size={size} />
    </Animated.View>
  );
}

/** Soft fade at the list edge so the next (or previous) title is visibly cut off. */
export function EdgeFade({ side, width = 44, color = C.bg }: { side: 'left' | 'right'; width?: number; color?: string }) {
  const id = 'cat-fade-' + side;
  const fromRight = side === 'right';
  return (
    <View pointerEvents="none" style={[StyleSheet.absoluteFill, { left: fromRight ? undefined : 0, right: fromRight ? 0 : undefined, width }]}>
      <Svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 44 100">
        <Defs>
          <LinearGradient id={id} x1={fromRight ? '0' : '1'} y1="0" x2={fromRight ? '1' : '0'} y2="0">
            <Stop offset="0" stopColor={color} stopOpacity="0" />
            <Stop offset="0.55" stopColor={color} stopOpacity="0.55" />
            <Stop offset="1" stopColor={color} stopOpacity="1" />
          </LinearGradient>
        </Defs>
        <Rect width="44" height="100" fill={`url(#${id})`} />
      </Svg>
    </View>
  );
}

/** Subtle pulsing chevron on the peek edge: points toward more titles (to the right). */
export function PeekChevron({ visible, side = 'right' }: { visible: boolean; side?: 'left' | 'right' }) {
  const x = useRef(new Animated.Value(0)).current;
  const nudge = side === 'right' ? 5 : -5;
  useEffect(() => {
    if (!visible) return;
    const anim = Animated.loop(
      Animated.sequence([
        Animated.timing(x, { toValue: nudge, duration: 800, useNativeDriver: true }),
        Animated.timing(x, { toValue: 0, duration: 800, useNativeDriver: true }),
      ]),
    );
    anim.start();
    return () => anim.stop();
  }, [visible, x, nudge]);
  if (!visible) return null;
  return (
    <Animated.View
      pointerEvents="none"
      accessibilityElementsHidden
      importantForAccessibility="no-hide-descendants"
      style={[s.peek, side === 'left' ? { left: 2 } : { right: 2 }, { transform: [{ translateX: x }] }]}
    >
      <View style={{ transform: [{ scaleX: side === 'left' ? -1 : 1 }] }}>
        <Chevron size={16} color={C.gold} />
      </View>
    </Animated.View>
  );
}

/** Persistent caption under the category titles: animated hand + localized hint. */
export function SwipeHintLabel({ text, animate }: { text: string; animate?: boolean }) {
  return (
    <View style={s.labelRow} accessibilityRole="text">
      {animate ? <SwipeHand direction="left" size={22} subtle /> : <HandIcon size={22} />}
      <Text style={s.label}>{text}</Text>
    </View>
  );
}

const s = themedStyles(() => StyleSheet.create({
  peek: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
  labelRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    marginTop: 8,
    minHeight: 24,
    paddingHorizontal: 8,
  },
  label: {
    color: C.faint,
    fontFamily: font.sans,
    fontSize: 12,
    lineHeight: 18,
    textAlign: 'center',
    flexShrink: 1,
  },
}), { scale: false });

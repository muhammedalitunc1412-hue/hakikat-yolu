import React from 'react';
import Svg, { Circle, Path, Rect } from 'react-native-svg';
import { C } from './theme';

export function StarMark({ size = 68 }: { size?: number }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 68 68">
      <Circle cx={34} cy={34} r={31} stroke={C.gold} strokeWidth={0.8} fill="none" opacity={0.45} />
      <Rect x={18} y={18} width={32} height={32} stroke={C.gold} strokeWidth={1.3} fill="none" />
      <Rect x={18} y={18} width={32} height={32} stroke={C.gold} strokeWidth={1.3} fill="none" transform="rotate(45 34 34)" />
      <Circle cx={34} cy={34} r={2.6} fill={C.gold} />
    </Svg>
  );
}

export function CompassIcon({ size = 22, color = C.gold }: { size?: number; color?: string }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Circle cx={12} cy={12} r={9.5} stroke={color} strokeWidth={1.6} fill="none" />
      <Path d="M15.5 8.5l-2 5-5 2 2-5z" stroke={color} strokeWidth={1.4} fill={color} fillOpacity={0.25} />
      <Circle cx={12} cy={12} r={1.2} fill={color} />
    </Svg>
  );
}

export function PinIcon({ size = 22, color = C.gold }: { size?: number; color?: string }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Path d="M12 21.5s6.5-6.4 6.5-11a6.5 6.5 0 1 0-13 0c0 4.6 6.5 11 6.5 11z" stroke={color} strokeWidth={1.6} fill="none" />
      <Circle cx={12} cy={10.2} r={2.1} fill={color} />
    </Svg>
  );
}

export function ArchIcon({ size = 22, color = C.gold }: { size?: number; color?: string }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Path d="M4.5 20V11a7.5 7.5 0 0 1 15 0v9" stroke={color} strokeWidth={1.6} fill="none" strokeLinecap="round" />
      <Path d="M9 20v-4.5a3 3 0 0 1 6 0V20" stroke={color} strokeWidth={1.6} fill="none" strokeLinecap="round" />
    </Svg>
  );
}

export function BookIcon({ size = 22, color = C.gold }: { size?: number; color?: string }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Path d="M5 5.5h6.2c1.2 0 2.3.6 2.8 1.6.5-1 1.6-1.6 2.8-1.6H21V19h-4.2c-1.2 0-2.3.4-2.8 1.2-.5-.8-1.6-1.2-2.8-1.2H5V5.5z" stroke={color} strokeWidth={1.5} fill="none" strokeLinejoin="round" />
      <Path d="M12 7.2V20" stroke={color} strokeWidth={1.4} />
    </Svg>
  );
}

export function SearchIcon({ size = 18, color = C.goldDeep }: { size?: number; color?: string }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Circle cx={11} cy={11} r={6.2} stroke={color} strokeWidth={1.7} fill="none" />
      <Path d="M16 16.5 L20 20.5" stroke={color} strokeWidth={1.7} strokeLinecap="round" />
    </Svg>
  );
}

export function Chevron({ size = 18, color = C.faint }: { size?: number; color?: string }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 18 18">
      <Path d="M7 4.2 L12 9 L7 13.8" stroke={color} strokeWidth={1.6} fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
}

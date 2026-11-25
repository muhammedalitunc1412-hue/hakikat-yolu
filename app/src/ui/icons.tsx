import React from 'react';
import Svg, { Circle, Path, Rect } from 'react-native-svg';
import { C } from './theme';

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

export function CamelIcon({ size = 22, color = C.gold }: { size?: number; color?: string }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Path
        d="M4.2 15.6c.7-1.5 1.8-2.2 3-2.2.4-1.8 1.5-3.1 3.1-3.3.8-1.5 2-2.3 3.2-2.1.6.1.9.7.6 1.3.8-.9 2-.9 2.9-.2.6.4.7 1.1.2 1.6.8.2 1.5.8 1.7 1.6.2.8-.2 1.5-.9 1.8-1.6.6-3.3.1-4.3-1.2-1 .8-2.3 1.1-3.5.7-1.5-.4-2.5-1.5-3-2.9-.7.3-1.4.9-1.6 1.8"
        stroke={color}
        strokeWidth={1.4}
        fill={color}
        fillOpacity={0.16}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.1 17.4v-2.4M9.4 17.4V14.6M14.5 17.4V14.2M17.5 17.4v-3.1"
        stroke={color}
        strokeWidth={1.45}
        strokeLinecap="round"
      />
      <Circle cx={18.15} cy={10.55} r={0.55} fill={color} />
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

export function InstagramIcon({ size = 22, color = C.gold }: { size?: number; color?: string }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Rect x={3.5} y={3.5} width={17} height={17} rx={5} stroke={color} strokeWidth={1.6} fill="none" />
      <Circle cx={12} cy={12} r={4} stroke={color} strokeWidth={1.6} fill="none" />
      <Circle cx={16.9} cy={7.1} r={1.1} fill={color} />
    </Svg>
  );
}

export function YouTubeIcon({ size = 22, color = C.gold }: { size?: number; color?: string }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Rect x={2.5} y={5.5} width={19} height={13} rx={4} stroke={color} strokeWidth={1.6} fill="none" />
      <Path d="M10 9.2v5.6l4.8-2.8z" fill={color} />
    </Svg>
  );
}

export function ChatIcon({ size = 22, color = C.gold }: { size?: number; color?: string }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Path d="M4.5 5.5h15a1.5 1.5 0 0 1 1.5 1.5v8.5a1.5 1.5 0 0 1-1.5 1.5H10l-4.5 3.5V17H4.5A1.5 1.5 0 0 1 3 15.5V7a1.5 1.5 0 0 1 1.5-1.5z" stroke={color} strokeWidth={1.6} fill="none" strokeLinejoin="round" />
    </Svg>
  );
}

export function BellIcon({ size = 22, color = C.gold }: { size?: number; color?: string }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Path d="M6 9.5a6 6 0 1 1 12 0c0 4 1.2 5.8 1.8 6.5H4.2C4.8 15.3 6 13.5 6 9.5z" stroke={color} strokeWidth={1.6} fill="none" strokeLinejoin="round" />
      <Path d="M10 18.2a2 2 0 0 0 4 0" stroke={color} strokeWidth={1.6} fill="none" strokeLinecap="round" />
    </Svg>
  );
}

export function HandIcon({ size = 28, color = C.gold }: { size?: number; color?: string }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Path
        d="M8.2 11.2V6.6a1.4 1.4 0 0 1 2.8 0v4.1M11 10.2V5.8a1.4 1.4 0 0 1 2.8 0v4.6M13.8 10.6V7.2a1.4 1.4 0 0 1 2.8 0V13c0 2.6-1.3 5.4-4.6 6.4-2.2.7-4.6-.2-5.6-2.2L5.2 14a1.5 1.5 0 0 1 2.5-1.6l.5.8"
        stroke={color}
        strokeWidth={1.55}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function BookmarkIcon({ size = 22, color = C.gold, filled }: { size?: number; color?: string; filled?: boolean }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Path
        d="M7 4.5h10a1 1 0 0 1 1 1V20l-6-3.4L6 20V5.5a1 1 0 0 1 1-1z"
        stroke={color}
        strokeWidth={1.6}
        fill={filled ? color : 'none'}
        fillOpacity={filled ? 0.95 : 0}
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function NoteIcon({ size = 22, color = C.gold, filled }: { size?: number; color?: string; filled?: boolean }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Path d="M7 4.5h7.2L18.5 9v10.5a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-15a1 1 0 0 1 1-1z" stroke={color} strokeWidth={1.55} fill={filled ? color : 'none'} fillOpacity={filled ? 0.16 : 0} strokeLinejoin="round" />
      <Path d="M14 4.8V9h4.3" stroke={color} strokeWidth={1.5} fill="none" strokeLinejoin="round" />
      <Path d="M9 12.2h6.2M9 15.6h4.4" stroke={color} strokeWidth={1.5} strokeLinecap="round" />
    </Svg>
  );
}


export function HeartIcon({ size = 22, color = C.gold, filled }: { size?: number; color?: string; filled?: boolean }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Path
        d="M12 19.6s-7.2-4.4-7.2-9.6A4.1 4.1 0 0 1 12 7.6a4.1 4.1 0 0 1 7.2 2.4c0 5.2-7.2 9.6-7.2 9.6z"
        stroke={color}
        strokeWidth={1.6}
        fill={filled ? color : 'none'}
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function ShareIcon({ size = 22, color = C.gold }: { size?: number; color?: string }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Path d="M12 4v11M8 7.6 12 4l4 3.6" stroke={color} strokeWidth={1.6} fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <Path d="M8.5 11H6.5a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1h-2" stroke={color} strokeWidth={1.6} fill="none" strokeLinecap="round" />
    </Svg>
  );
}

export function QuizIcon({ size = 22, color = C.gold }: { size?: number; color?: string }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Circle cx={12} cy={12} r={8.5} stroke={color} strokeWidth={1.6} fill="none" />
      <Path d="M9.6 9.6a2.5 2.5 0 1 1 3.4 2.3c-.6.3-1 .8-1 1.5v.6" stroke={color} strokeWidth={1.6} fill="none" strokeLinecap="round" />
      <Circle cx={12} cy={16.8} r={0.95} fill={color} />
    </Svg>
  );
}

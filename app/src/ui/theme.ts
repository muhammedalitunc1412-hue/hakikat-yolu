import { Platform, StatusBar, useWindowDimensions, type TextStyle } from 'react-native';
import { isRtl } from '../i18n';

export const C = {
  bg: '#071410',
  bgDeep: '#040c0b',
  card: '#12241f',
  card2: '#17302a',
  gold: '#e4c56a',
  goldDeep: '#c4a15a',
  cream: '#f6f1e6',
  text: '#f4efe4',
  dim: '#b7c6be',
  faint: '#8ea89e',
  sunni: '#7eb7e0',
  shia: '#3dbe86',
  warn: '#e0a45a',
  line: 'rgba(228,197,106,0.16)',
  lineStrong: 'rgba(228,197,106,0.40)',
  ink: '#14211c',
};

export type ThemeName = 'default' | 'blood';
const BASE = { ...C };
const PALETTES: Record<ThemeName, typeof C> = {
  default: BASE,
  // Kerbela ve Hz. Hüseyin: kan kırmızısı
  blood: {
    ...BASE,
    bg: '#150608', bgDeep: '#0b0305', card: '#25090c', card2: '#2f0d11',
    gold: '#e03a45', goldDeep: '#b3202c', cream: '#f8ecea', text: '#f5e8e6', dim: '#cfb0b2', faint: '#a88488',
    line: 'rgba(224,58,69,0.20)', lineStrong: 'rgba(224,58,69,0.50)', ink: '#fff3f1',
  },
};
export const BLOOD = PALETTES.blood;
let current: ThemeName = 'default';
// Rengi yerinde değiştirir; stiller themedStyles ile bir sonraki çizimde yenilenir.
export function setTheme(name: ThemeName) {
  if (name === current) return;
  current = name;
  Object.assign(C, PALETTES[name]);
}
// StyleSheet'i temaya göre yeniden kuran sarmalayıcı: s.xxx her okunduğunda geçerli temanın stilini verir.
export function themedStyles<T extends object>(build: () => T): T {
  const cache: Partial<Record<ThemeName, T>> = {};
  const get = () => (cache[current] ??= build());
  return new Proxy({} as T, { get: (_t, k) => (get() as any)[k] });
}

export const PAGE_MAX = 760;

export const font = {
  serif: Platform.select({
    ios: 'Georgia',
    android: 'serif',
    default: '"Liberation Serif", Georgia, "Times New Roman", serif',
  }) as string,
  sans: Platform.select({
    ios: 'System',
    android: 'sans-serif',
    default: 'Inter, "Liberation Sans", "Noto Sans", system-ui, sans-serif',
  }) as string,
  arabic: Platform.select({
    ios: 'Geeza Pro',
    android: 'sans-serif',
    default: '"Noto Naskh Arabic", "Noto Sans Arabic", serif',
  }) as string,
};

export const TOP = Platform.OS === 'android'
  ? (StatusBar.currentHeight ?? 24) + 12
  : Platform.OS === 'ios' ? 58 : 28;

export function usePageWidth() {
  const { width } = useWindowDimensions();
  return Math.min(width, PAGE_MAX);
}

export function align(): Pick<TextStyle, 'textAlign' | 'writingDirection'> {
  return {
    textAlign: isRtl() ? 'right' : 'left',
    writingDirection: isRtl() ? 'rtl' : 'ltr',
  };
}

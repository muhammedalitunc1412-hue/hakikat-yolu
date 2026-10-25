import { useCallback, useRef } from 'react';
import type { LayoutChangeEvent, NativeScrollEvent, NativeSyntheticEvent, ScrollView } from 'react-native';

// Geri dönüldüğünde ekranın kaldığı yerden açılması için kaydırma konumlarını hatırlar.
// Anahtar her ekran için ayrıdır (örn. 'home', 'event:gadir'). Bellekte tutulur, uygulama kapanınca sıfırlanır.
const offsets = new Map<string, number>();
const scenes = new Map<string, number>();

export const rememberedScene = (key: string) => scenes.get(key) ?? 0;
export const rememberScene = (key: string, i: number) => { scenes.set(key, i); };

export function useScrollMemory(key: string) {
  const ref = useRef<ScrollView>(null);
  const layoutH = useRef(0);
  const restored = useRef(false);

  const onScroll = useCallback((e: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (restored.current) offsets.set(key, e.nativeEvent.contentOffset.y);
  }, [key]);
  const onLayout = useCallback((e: LayoutChangeEvent) => { layoutH.current = e.nativeEvent.layout.height; }, []);
  // İçerik kaydedilen konuma kadar uzayınca (görseller/liste yüklendikçe) bir kez konuma gider
  const onContentSizeChange = useCallback((_w: number, h: number) => {
    if (restored.current) return;
    const y = offsets.get(key) ?? 0;
    if (!y) { restored.current = true; return; }
    if (h - layoutH.current >= y - 1) {
      ref.current?.scrollTo({ y, animated: false });
      restored.current = true;
    }
  }, [key]);

  return { ref, onScroll, onLayout, onContentSizeChange, scrollEventThrottle: 16 };
}

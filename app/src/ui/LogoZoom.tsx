import { useState } from 'react';
import { Image, Modal, Pressable, useWindowDimensions } from 'react-native';
import { C } from './theme';

const SOURCE = require('../../assets/logo.png');

// Küçük logo; dokununca ekranın yaklaşık yarısı kadar büyük, kartlı bir önizleme açar.
export function LogoZoom({ size }: { size: number }) {
  const [open, setOpen] = useState(false);
  const { width, height } = useWindowDimensions();
  const big = Math.min(width * 0.7, height * 0.45, 340);
  return (
    <>
      <Pressable onPress={() => setOpen(true)} accessibilityRole="imagebutton" accessibilityLabel="Hakikat Yolu logosu" hitSlop={8}>
        <Image source={SOURCE} resizeMode="contain" style={{ width: size, height: size }} />
      </Pressable>
      <Modal transparent visible={open} animationType="fade" onRequestClose={() => setOpen(false)} statusBarTranslucent>
        <Pressable
          onPress={() => setOpen(false)}
          accessibilityRole="button"
          accessibilityLabel="Kapat"
          style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.72)', alignItems: 'center', justifyContent: 'center' }}
        >
          <Pressable
            onPress={() => setOpen(false)}
            style={{
              padding: 18,
              borderRadius: 28,
              backgroundColor: C.card,
              borderWidth: 1,
              borderColor: C.lineStrong,
              shadowColor: '#000',
              shadowOpacity: 0.5,
              shadowRadius: 24,
              shadowOffset: { width: 0, height: 10 },
              elevation: 16,
            }}
          >
            <Image source={SOURCE} resizeMode="contain" style={{ width: big, height: big, borderRadius: 18 }} />
          </Pressable>
        </Pressable>
      </Modal>
    </>
  );
}

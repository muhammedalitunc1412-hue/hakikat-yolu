import { useRef, useState } from 'react';
import { FlatList, Image, Modal, Pressable, StatusBar, Text, View, useWindowDimensions } from 'react-native';
import { C, TOP, font } from './theme';

// Sahne görselini tam ekran açar. Birden fazla görsel varsa yana kaydırarak gezilir.
export function ImageViewer({ images, start, caption, onClose }: { images: number[]; start: number; caption?: string; onClose: () => void }) {
  const { width, height } = useWindowDimensions();
  const [idx, setIdx] = useState(start);
  const list = useRef<FlatList<number>>(null);
  return (
    <Modal visible animationType="fade" onRequestClose={onClose} statusBarTranslucent supportedOrientations={['portrait', 'landscape']}>
      <View style={{ flex: 1, backgroundColor: '#000' }}>
        <StatusBar hidden />
        <FlatList
          ref={list}
          data={images}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          keyExtractor={(_, i) => String(i)}
          initialScrollIndex={start}
          getItemLayout={(_, i) => ({ length: width, offset: width * i, index: i })}
          onMomentumScrollEnd={e => setIdx(Math.round(e.nativeEvent.contentOffset.x / width))}
          renderItem={({ item }) => (
            <Pressable onPress={onClose} style={{ width, height, alignItems: 'center', justifyContent: 'center' }}>
              <Image source={item} resizeMode="contain" style={{ width, height }} />
            </Pressable>
          )}
        />
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

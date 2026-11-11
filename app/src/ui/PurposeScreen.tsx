import { Pressable, ScrollView, Text, View } from 'react-native';
import { C, TOP, font } from './theme';
import { LogoZoom } from './LogoZoom';
import { PurposeCopy } from './PurposeCopy';

export function PurposeScreen({ onContinue }: { onContinue: () => void }) {
  return (
    <View style={{ flex: 1, backgroundColor: C.bg }}>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingHorizontal: 24, paddingTop: TOP, paddingBottom: 40, flexGrow: 1 }}
      >
        <View style={{ alignItems: 'center', marginBottom: 20 }}>
          <LogoZoom size={112} />
        </View>
        <Text style={{ color: C.gold, fontFamily: font.sans, fontSize: 12, fontWeight: '700', letterSpacing: 2.4, textAlign: 'center' }}>
          HAKİKAT YOLU
        </Text>
        <PurposeCopy centered />
        <Pressable
          onPress={onContinue}
          accessibilityRole="button"
          style={({ pressed }) => ({
            marginTop: 28,
            minHeight: 56,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: C.gold,
            borderRadius: 16,
            opacity: pressed ? 0.86 : 1,
          })}
        >
          <Text style={{ color: C.ink, fontFamily: font.sans, fontSize: 17, fontWeight: '800' }}>Devam et</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}

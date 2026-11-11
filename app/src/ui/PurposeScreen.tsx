import { Pressable, ScrollView, Text, View } from 'react-native';
import { APP_PURPOSE_PARAGRAPHS, APP_PURPOSE_TITLE } from '../data/amac';
import { C, TOP, font } from './theme';

export function PurposeScreen({ onContinue }: { onContinue: () => void }) {
  return (
    <View style={{ flex: 1, backgroundColor: C.bg }}>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingHorizontal: 24, paddingTop: TOP, paddingBottom: 40, flexGrow: 1 }}
      >
        <Text style={{ color: C.gold, fontFamily: font.sans, fontSize: 12, fontWeight: '700', letterSpacing: 2.4 }}>
          HAKİKAT YOLU
        </Text>
        <Text
          accessibilityRole="header"
          style={{ color: C.cream, fontFamily: font.serif, fontSize: 30, lineHeight: 36, fontWeight: '700', marginTop: 8, marginBottom: 18 }}
        >
          {APP_PURPOSE_TITLE}
        </Text>
        {APP_PURPOSE_PARAGRAPHS.map((p, i) => (
          <Text
            key={i}
            style={{ color: C.text, fontFamily: font.sans, fontSize: 17, lineHeight: 28, marginBottom: 16 }}
          >
            {p}
          </Text>
        ))}
        <Pressable
          onPress={onContinue}
          accessibilityRole="button"
          style={({ pressed }) => ({
            marginTop: 12,
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

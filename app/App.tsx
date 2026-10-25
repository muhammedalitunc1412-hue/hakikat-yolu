import React, { useEffect, useRef, useState } from 'react';
import { BackHandler, Pressable, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { DuaList, DuaScreen, EventScreen, Home, Method } from './src/ui/Screens';
import { MapDetail, MapList } from './src/ui/MapScreens';
import { QiblaScreen } from './src/ui/Qibla';
import { ImamDetail, ImamList } from './src/ui/ImamScreens';
import { EVENTS } from './src/data/events';
import { DUAS } from './src/data/duas';
import { C, PAGE_MAX, TOP, font, setTheme } from './src/ui/theme';

type Route =
  | { name: 'home' }
  | { name: 'event'; id: string }
  | { name: 'method' }
  | { name: 'duas' }
  | { name: 'dua'; id: string }
  | { name: 'maps' }
  | { name: 'qibla' }
  | { name: 'imams' }
  | { name: 'imam'; id: string }
  | { name: 'map'; id: string };

export default function App() {
  const [stack, setStack] = useState<Route[]>([{ name: 'home' }]);
  const stackRef = useRef(stack);
  stackRef.current = stack;
  const route = stack[stack.length - 1];
  const push = (r: Route) => setStack(s => [...s, r]);
  const back = () => setStack(s => (s.length > 1 ? s.slice(0, -1) : s));

  useEffect(() => {
    const sub = BackHandler.addEventListener('hardwareBackPress', () => {
      if (stackRef.current.length <= 1) return false;
      setStack(s => (s.length > 1 ? s.slice(0, -1) : s));
      return true;
    });
    return () => sub.remove();
  }, []);

  // Kerbela ve Hz. Hüseyin alanları kan kırmızısı temayla açılır
  setTheme((route.name === 'event' && route.id === 'kerbela') || (route.name === 'imam' && route.id === 'huseyin') ? 'blood' : 'default');

  const ev = route.name === 'event' ? EVENTS.find(e => e.id === route.id) : undefined;
  const dua = route.name === 'dua' ? DUAS.find(d => d.id === route.id) : undefined;

  return (
    <View style={{ flex: 1, backgroundColor: C.bgDeep, alignItems: 'center' }}>
      <StatusBar style="light" />
      <View style={{ flex: 1, width: '100%', maxWidth: PAGE_MAX, backgroundColor: C.bg }}>
        {route.name === 'home' && (
          <Home events={EVENTS} onOpen={id => push({ name: 'event', id })} onMethod={() => push({ name: 'method' })} onDuas={() => push({ name: 'duas' })} onMaps={() => push({ name: 'maps' })} onQibla={() => push({ name: 'qibla' })} onImams={() => push({ name: 'imams' })} />
        )}
        {route.name === 'event' && ev && <EventScreen key={ev.id} ev={ev} onBack={back} onOpenMap={id => push({ name: 'map', id })} />}
        {route.name === 'event' && !ev && <Missing onBack={back} />}
        {route.name === 'method' && <Method onBack={back} />}
        {route.name === 'duas' && <DuaList duas={DUAS} onOpen={id => push({ name: 'dua', id })} onBack={back} />}
        {route.name === 'dua' && dua && <DuaScreen key={dua.id} dua={dua} onBack={back} />}
        {route.name === 'dua' && !dua && <Missing onBack={back} />}
        {route.name === 'qibla' && <QiblaScreen onBack={back} />}
        {route.name === 'imams' && <ImamList onOpen={id => push({ name: 'imam', id })} onBack={back} />}
        {route.name === 'imam' && <ImamDetail key={route.id} id={route.id} onBack={back} onOpenEvent={id => push({ name: 'event', id })} />}
        {route.name === 'maps' && <MapList onOpen={id => push({ name: 'map', id })} onBack={back} />}
        {route.name === 'map' && <MapDetail key={route.id} id={route.id} onBack={back} onOpenEvent={id => push({ name: 'event', id })} />}
      </View>
    </View>
  );
}

function Missing({ onBack }: { onBack: () => void }) {
  return (
    <View style={{ flex: 1, backgroundColor: C.bg, padding: 20, paddingTop: TOP }}>
      <Pressable onPress={onBack} accessibilityRole="button">
        <Text style={{ color: C.gold, fontFamily: font.sans, fontSize: 16, fontWeight: '700' }}>‹  Geri</Text>
      </Pressable>
      <Text style={{ color: C.cream, fontFamily: font.sans, fontSize: 16, marginTop: 16 }}>Bu sayfa bulunamadı.</Text>
    </View>
  );
}

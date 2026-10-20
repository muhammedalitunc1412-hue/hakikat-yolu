import React, { useEffect, useState } from 'react';
import { BackHandler, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { DuaList, DuaScreen, EventScreen, Home, Method } from './src/ui/Screens';
import { EVENTS } from './src/data/events';
import { DUAS } from './src/data/duas';

type Route = { name: 'home' } | { name: 'event'; id: string } | { name: 'method' } | { name: 'duas' } | { name: 'dua'; id: string };

export default function App() {
  const [route, setRoute] = useState<Route>({ name: 'home' });

  useEffect(() => {
    const sub = BackHandler.addEventListener('hardwareBackPress', () => {
      if (route.name === 'home') return false;
      setRoute(route.name === 'dua' ? { name: 'duas' } : { name: 'home' });
      return true;
    });
    return () => sub.remove();
  }, [route]);

  const ev = route.name === 'event' ? EVENTS.find(e => e.id === route.id) : undefined;
  const dua = route.name === 'dua' ? DUAS.find(d => d.id === route.id) : undefined;
  return (
    <View style={{ flex: 1, backgroundColor: '#0e1717' }}>
      <StatusBar style="light" />
      {route.name === 'home' && <Home events={EVENTS} onOpen={id => setRoute({ name: 'event', id })} onMethod={() => setRoute({ name: 'method' })} onDuas={() => setRoute({ name: 'duas' })} />}
      {ev && <EventScreen ev={ev} onBack={() => setRoute({ name: 'home' })} />}
      {route.name === 'method' && <Method onBack={() => setRoute({ name: 'home' })} />}
      {route.name === 'duas' && <DuaList duas={DUAS} onOpen={id => setRoute({ name: 'dua', id })} onBack={() => setRoute({ name: 'home' })} />}
      {dua && <DuaScreen dua={dua} onBack={() => setRoute({ name: 'duas' })} />}
    </View>
  );
}

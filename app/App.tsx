import React, { useEffect, useRef, useState } from 'react';
import { BackHandler, Pressable, ScrollView, Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'expo-status-bar';
import { DuaList, DuaScreen, EventScreen, Home, Method } from './src/ui/Screens';
import { PurposeScreen } from './src/ui/PurposeScreen';
import { MapDetail, MapList } from './src/ui/MapScreens';
import { QiblaScreen } from './src/ui/Qibla';
import { ImamDetail, ImamList } from './src/ui/ImamScreens';
import { EVENTS } from './src/data/events';
import { DUAS } from './src/data/duas';
import { LANGUAGES, languageOption, setLang, ui } from './src/i18n';
import type { Lang } from './src/types';
import { RequiredUpdate, useRequiredUpdate } from './src/update/RequiredUpdate';
import { C, PAGE_MAX, TOP, font, setTheme } from './src/ui/theme';
import { cancel, ensurePermission, loadEnabled, nextReminder, openOf, saveEnabled, schedule, setupNotifications, useLastResponse } from './src/notifications';

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

setupNotifications();

const LANGUAGE_KEY = 'hakikat-yolu:language';
const PURPOSE_AT_KEY = 'hakikat-yolu:purpose-seen-at';
const PURPOSE_LEGACY_KEY = 'hakikat-yolu:purpose-seen';
const PURPOSE_INTERVAL_MS = 4 * 24 * 60 * 60 * 1000;

export default function App() {
  const [lang, setLanguage] = useState<Lang>('tr');
  const requiredStore = useRequiredUpdate();
  const [ready, setReady] = useState(false);
  const [choosing, setChoosing] = useState(true);
  const [purposeSeen, setPurposeSeen] = useState(false);
  const [editingLanguage, setEditingLanguage] = useState(false);
  const [draftLanguage, setDraftLanguage] = useState<Lang>('tr');
  const [remind, setRemind] = useState(false);
  const [remindDenied, setRemindDenied] = useState(false);
  const handledResponse = useRef('');
  const lastResponse = useLastResponse();
  useEffect(() => {
    let active = true;
    Promise.all([
      AsyncStorage.getItem(LANGUAGE_KEY),
      AsyncStorage.getItem(PURPOSE_AT_KEY),
      AsyncStorage.getItem(PURPOSE_LEGACY_KEY),
    ]).then(([saved, seenAt, legacy]) => {
      if (!active) return;
      const option = languageOption(saved);
      setLanguage(option.id);
      setDraftLanguage(option.id);
      setChoosing(saved !== option.id);
      const t = seenAt ? Number(seenAt) : NaN;
      if (Number.isFinite(t)) {
        setPurposeSeen(Date.now() - t < PURPOSE_INTERVAL_MS);
      } else if (legacy === '1') {
        // Eski bayrak: bir kez gösterilmiş, zaman damgası yok; 4 günlük süreyi şimdi başlat.
        setPurposeSeen(true);
        void AsyncStorage.setItem(PURPOSE_AT_KEY, String(Date.now())).catch(() => {});
      } else {
        setPurposeSeen(false);
      }
    }).catch(() => {}).finally(() => {
      if (active) setReady(true);
    });
    return () => { active = false; };
  }, []);

  useEffect(() => { void loadEnabled().then(setRemind); }, []);
  // Açıkken yaklaşan günleri (dile göre) her açılışta yeniden zamanla.
  useEffect(() => { if (ready && remind) void schedule(lang); }, [ready, remind, lang]);

  async function toggleRemind() {
    if (remind) {
      setRemind(false); setRemindDenied(false);
      await saveEnabled(false); await cancel();
      return;
    }
    if (await ensurePermission()) {
      setRemindDenied(false); setRemind(true);
      await saveEnabled(true);
    } else {
      setRemindDenied(true);
    }
  }

  function confirmLanguage() {
    setLanguage(draftLanguage);
    setChoosing(false);
    setEditingLanguage(false);
    void AsyncStorage.setItem(LANGUAGE_KEY, draftLanguage).catch(() => {});
  }

  function confirmPurpose() {
    setPurposeSeen(true);
    void AsyncStorage.setItem(PURPOSE_AT_KEY, String(Date.now())).catch(() => {});
  }

  setLang(lang);
  const [stack, setStack] = useState<Route[]>([{ name: 'home' }]);
  const stackRef = useRef(stack);
  stackRef.current = stack;
  const route = stack[stack.length - 1];
  const push = (r: Route) => setStack(s => [...s, r]);
  const back = () => setStack(s => (s.length > 1 ? s.slice(0, -1) : s));
  const home = () => setStack([{ name: 'home' }]);

  useEffect(() => {
    const sub = BackHandler.addEventListener('hardwareBackPress', () => {
      if (requiredStore) return true;
      if (editingLanguage) {
        setEditingLanguage(false);
        return true;
      }
      if (stackRef.current.length <= 1) return false;
      setStack(s => (s.length > 1 ? s.slice(0, -1) : s));
      return true;
    });
    return () => sub.remove();
  }, [requiredStore, editingLanguage]);

  // Kerbela ve Hz. Hüseyin alanları kan kırmızısı temayla açılır
  setTheme((route.name === 'event' && (route.id === 'kerbela' || route.id === 'fatima-vefat')) || (route.name === 'imam' && route.id === 'huseyin') ? 'blood' : 'default');

  // Bildirime dokunulunca ilgili dua / olay / imam sayfasını aç.
  useEffect(() => {
    if (!ready || requiredStore || !lastResponse) return;
    const key = lastResponse.notification.request.identifier;
    if (handledResponse.current === key) return;
    handledResponse.current = key;
    const o = openOf(lastResponse);
    if (!o) return;
    setEditingLanguage(false);
    setStack([{ name: 'home' }, o.kind === 'event' ? { name: 'event', id: o.id } : o.kind === 'dua' ? { name: 'dua', id: o.id } : { name: 'imam', id: o.id }]);
  }, [ready, requiredStore, lastResponse]);

  const ev = route.name === 'event' ? EVENTS.find(e => e.id === route.id) : undefined;
  const dua = route.name === 'dua' ? DUAS.find(d => d.id === route.id) : undefined;

  return (
    <View style={{ flex: 1, backgroundColor: C.bgDeep, alignItems: 'center' }}>
      <StatusBar style="light" />
      <View style={{ flex: 1, width: '100%', maxWidth: PAGE_MAX, backgroundColor: C.bg }}>
        {!ready ? null : requiredStore ? <RequiredUpdate lang={lang} storeUrl={requiredStore} /> : (choosing || editingLanguage) ? (
          <ScrollView contentContainerStyle={{ padding: 24, paddingTop: TOP, gap: 10 }}>
            {editingLanguage && (
              <>
                <Pressable accessibilityRole="button" onPress={() => setEditingLanguage(false)} style={{ paddingVertical: 12 }}>
                  <Text style={{ color: C.gold }}>{ui('back')}</Text>
                </Pressable>
                <Text accessibilityRole="header" style={{ color: C.cream, fontSize: 26, fontWeight: '700' }}>{ui('settings')}</Text>
              </>
            )}
            <Text style={{ color: C.gold, fontSize: 24, fontWeight: '700' }}>{languageOption(editingLanguage ? lang : draftLanguage).title}</Text>
            {LANGUAGES.map(option => (
              <Pressable key={option.id} onPress={() => setDraftLanguage(option.id)} accessibilityRole="radio" accessibilityState={{ checked: option.id === draftLanguage }} style={{ padding: 12, backgroundColor: C.card, borderWidth: 1, borderColor: option.id === draftLanguage ? C.gold : C.lineStrong }}>
                <Text style={{ color: C.cream, fontSize: 17 }}>{option.id === draftLanguage ? '✓ ' : ''}{option.name}</Text>
              </Pressable>
            ))}
            {editingLanguage && (
              <View style={{ marginTop: 18, gap: 10 }}>
                <Text accessibilityRole="header" style={{ color: C.gold, fontSize: 20, fontWeight: '700' }}>{ui('occasions')}</Text>
                <Text style={{ color: C.text, fontSize: 14, lineHeight: 21 }}>{ui('occasionsHint')}</Text>
                <Pressable onPress={() => void toggleRemind()} accessibilityRole="switch" accessibilityState={{ checked: remind }} style={{ padding: 12, backgroundColor: C.card, borderWidth: 1, borderColor: remind ? C.gold : C.lineStrong }}>
                  <Text style={{ color: C.cream, fontSize: 17 }}>{remind ? '✓ ' : ''}{ui('occasions')}: {remind ? ui('occasionsOn') : ui('occasionsOff')}</Text>
                </Pressable>
                {remindDenied && <Text style={{ color: C.gold, fontSize: 14, lineHeight: 21 }}>{ui('occasionsDenied')}</Text>}
                {remind && (() => { const n = nextReminder(lang); return n ? <Text style={{ color: C.text, fontSize: 14, lineHeight: 21 }}>{ui('occasionsNext')}: {n.title} · {n.at.toLocaleDateString(lang, { day: 'numeric', month: 'long' })}</Text> : null; })()}
              </View>
            )}
            <Pressable onPress={confirmLanguage} accessibilityRole="button" style={{ padding: 14, alignItems: 'center', backgroundColor: C.card }}>
              <Text style={{ color: C.gold, fontSize: 17, fontWeight: '700' }}>{editingLanguage ? ui('saveLanguage') : languageOption(draftLanguage).confirm}</Text>
            </Pressable>
          </ScrollView>
        ) : !purposeSeen ? (
          <PurposeScreen onContinue={confirmPurpose} />
        ) : <>
        <View style={{ flex: 1 }}>
        {route.name === 'home' && (
          <Home events={EVENTS} langName={languageOption(lang).name} onSettings={() => { setDraftLanguage(lang); setEditingLanguage(true); }} onOpen={id => push({ name: 'event', id })} onMethod={() => push({ name: 'method' })} onDuas={() => push({ name: 'duas' })} onMaps={() => push({ name: 'maps' })} onQibla={() => push({ name: 'qibla' })} onImams={() => push({ name: 'imams' })} />
        )}
        {route.name === 'event' && ev && <EventScreen key={ev.id} ev={ev} onBack={back} onOpenMap={id => push({ name: 'map', id })} onNext={id => push({ name: 'event', id })} />}
        {route.name === 'event' && !ev && <Missing onBack={back} />}
        {route.name === 'method' && <Method onBack={back} />}
        {route.name === 'duas' && <DuaList duas={DUAS} onOpen={id => push({ name: 'dua', id })} onBack={back} />}
        {route.name === 'dua' && dua && <DuaScreen key={dua.id} dua={dua} onBack={back} />}
        {route.name === 'dua' && !dua && <Missing onBack={back} />}
        {route.name === 'qibla' && <QiblaScreen onBack={back} />}
        {route.name === 'imams' && <ImamList onOpen={id => push({ name: 'imam', id })} onBack={back} />}
        {route.name === 'imam' && <ImamDetail key={route.id} id={route.id} onBack={back} onOpenEvent={id => push({ name: 'event', id })} onOpenImam={id => setStack(s => { const n = s.slice(); n[n.length - 1] = { name: 'imam', id }; return n; })} />}
        {route.name === 'maps' && <MapList onOpen={id => push({ name: 'map', id })} onBack={back} />}
        {route.name === 'map' && <MapDetail key={route.id} id={route.id} onBack={back} onOpenEvent={id => push({ name: 'event', id })} />}
        </View>
        {route.name !== 'home' && (
          <Pressable onPress={home} accessibilityRole="button" accessibilityLabel={ui('homeBtn')} style={({ pressed }) => [{ minHeight: 52, alignItems: 'center', justifyContent: 'center', backgroundColor: C.card, borderTopWidth: 1, borderTopColor: C.lineStrong, paddingBottom: 6, opacity: pressed ? 0.86 : 1 }]}>
            <Text style={{ color: C.gold, fontFamily: font.sans, fontSize: 16, fontWeight: '800' }}>{ui('homeBtn')}</Text>
          </Pressable>
        )}
        </>}
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

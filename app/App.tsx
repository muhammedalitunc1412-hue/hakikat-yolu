import React, { useEffect, useRef, useState } from 'react';
import { BackHandler, Pressable, ScrollView, Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'expo-status-bar';
import { DuaList, DuaScreen, EventScreen, Home, Method, Stories } from './src/ui/Screens';
import { PurposeScreen } from './src/ui/PurposeScreen';
import { AhidnameScreen } from './src/ui/AhidnameScreen';
import { MapDetail, MapList } from './src/ui/MapScreens';
import { QiblaScreen } from './src/ui/Qibla';
import { ImamDetail, ImamList } from './src/ui/ImamScreens';
import { EVENTS } from './src/data/events';
import { DUAS } from './src/data/duas';
import { LANGUAGES, languageOption, setLang, ui } from './src/i18n';
import type { Lang } from './src/types';
import { OptionalUpdate, RequiredUpdate, useAppUpdate } from './src/update/RequiredUpdate';
import { C, PAGE_MAX, TOP, font, setTheme } from './src/ui/theme';
import { FontButton, FontScaleProvider, useFontScale } from './src/ui/FontScale';
import { cancel, ensurePermission, loadEnabled, nextReminder, openOf, saveEnabled, schedule, setupNotifications, useLastResponse } from './src/notifications';

type Route =
  | { name: 'home' }
  | { name: 'stories' }
  | { name: 'event'; id: string }
  | { name: 'method' }
  | { name: 'duas' }
  | { name: 'dua'; id: string }
  | { name: 'maps' }
  | { name: 'qibla' }
  | { name: 'imams' }
  | { name: 'imam'; id: string }
  | { name: 'map'; id: string }
  | { name: 'ahidname' };

setupNotifications();

const LANGUAGE_KEY = 'hakikat-yolu:language';
const PURPOSE_AT_KEY = 'hakikat-yolu:purpose-seen-at';
const PURPOSE_LEGACY_KEY = 'hakikat-yolu:purpose-seen';
const PURPOSE_INTERVAL_MS = 4 * 24 * 60 * 60 * 1000;

export default function Root() {
  return <FontScaleProvider>{() => <App />}</FontScaleProvider>;
}

function App() {
  const { scale } = useFontScale();
  const [lang, setLanguage] = useState<Lang>('tr');
  const { state: update, dismissOptional, loaded: updateLoaded } = useAppUpdate();
  const requiredUpdate = update.kind === 'required' ? update : null;
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
  const toStories = () => setStack([{ name: 'home' }, { name: 'stories' }]);
  // Hikâye içinden (olay, ahidnâme, hikâyeden açılan harita) alttaki düğme Hikâyeler sayfasına döner.
  const inStories = (route.name === 'event' || route.name === 'ahidname' || route.name === 'map') && stack.some(r => r.name === 'stories');

  useEffect(() => {
    const sub = BackHandler.addEventListener('hardwareBackPress', () => {
      if (requiredUpdate) return true;
      if (editingLanguage) {
        setEditingLanguage(false);
        return true;
      }
      if (stackRef.current.length <= 1) return false;
      setStack(s => (s.length > 1 ? s.slice(0, -1) : s));
      return true;
    });
    return () => sub.remove();
  }, [requiredUpdate, editingLanguage]);

  // Kerbela ve Hz. Hüseyin alanları kan kırmızısı temayla açılır
  setTheme((route.name === 'event' && (route.id === 'kerbela' || route.id === 'fatima-vefat')) || (route.name === 'imam' && route.id === 'huseyin') ? 'blood' : 'default');

  // Bildirime dokunulunca ilgili dua / olay / imam sayfasını aç.
  useEffect(() => {
    if (!ready || requiredUpdate || !lastResponse) return;
    const key = lastResponse.notification.request.identifier;
    if (handledResponse.current === key) return;
    handledResponse.current = key;
    const o = openOf(lastResponse);
    if (!o) return;
    setEditingLanguage(false);
    setStack(o.kind === 'event' ? [{ name: 'home' }, { name: 'stories' }, { name: 'event', id: o.id }] : [{ name: 'home' }, o.kind === 'dua' ? { name: 'dua', id: o.id } : { name: 'imam', id: o.id }]);
  }, [ready, requiredUpdate, lastResponse]);

  const ev = route.name === 'event' ? EVENTS.find(e => e.id === route.id) : undefined;
  const dua = route.name === 'dua' ? DUAS.find(d => d.id === route.id) : undefined;

  return (
    <View style={{ flex: 1, backgroundColor: C.bgDeep, alignItems: 'center' }}>
      <StatusBar style="light" />
      <View style={{ flex: 1, width: '100%', maxWidth: PAGE_MAX, backgroundColor: C.bg }}>
        {!ready || !updateLoaded ? null : requiredUpdate ? <RequiredUpdate lang={lang} storeUrl={requiredUpdate.storeUrl} message={requiredUpdate.message} /> : (choosing || editingLanguage) ? (
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
          <PurposeScreen key={'fs' + scale} onContinue={confirmPurpose} />
        ) : <>
        <View key={'fs' + scale} style={{ flex: 1 }}>
        {route.name === 'home' && (
          <Home langName={languageOption(lang).name} onSettings={() => { setDraftLanguage(lang); setEditingLanguage(true); }} onStories={() => push({ name: 'stories' })} onMethod={() => push({ name: 'method' })} onDuas={() => push({ name: 'duas' })} onMaps={() => push({ name: 'maps' })} onImams={() => push({ name: 'imams' })} />
        )}
        {route.name === 'stories' && (
          <Stories events={EVENTS} onBack={back} onOpen={id => push({ name: 'event', id })} onOpenAhid={() => push({ name: 'ahidname' })} />
        )}
        {route.name === 'event' && ev && <EventScreen key={ev.id} ev={ev} onBack={back} onOpenMap={id => push({ name: 'map', id })} onNext={id => push({ name: 'event', id })} />}
        {route.name === 'event' && !ev && <Missing onBack={back} />}
        {route.name === 'method' && <Method onBack={back} />}
        {route.name === 'ahidname' && <AhidnameScreen onBack={back} />}
        {route.name === 'duas' && <DuaList duas={DUAS} onOpen={id => push({ name: 'dua', id })} onBack={back} />}
        {route.name === 'dua' && dua && <DuaScreen key={dua.id} dua={dua} onBack={back} />}
        {route.name === 'dua' && !dua && <Missing onBack={back} />}
        {route.name === 'qibla' && <QiblaScreen onBack={back} />}
        {route.name === 'imams' && <ImamList onOpen={id => push({ name: 'imam', id })} onBack={back} />}
        {route.name === 'imam' && <ImamDetail key={route.id} id={route.id} onBack={back} onOpenEvent={id => push({ name: 'event', id })} onOpenImam={id => setStack(s => { const n = s.slice(); n[n.length - 1] = { name: 'imam', id }; return n; })} />}
        {route.name === 'maps' && <MapList onOpen={id => push({ name: 'map', id })} onBack={back} />}
        {route.name === 'map' && <MapDetail key={route.id} id={route.id} onBack={back} onOpenEvent={id => push({ name: 'event', id })} />}
        </View>
        {route.name !== 'home' && route.name !== 'stories' && (
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, backgroundColor: C.card, borderTopWidth: 1, borderTopColor: C.lineStrong, paddingLeft: 10, paddingRight: 12, paddingBottom: 6, paddingTop: 4 }}>
            <Pressable onPress={inStories ? toStories : home} accessibilityRole="button" accessibilityLabel={inStories ? ui('backToStories') : ui('homeBtn')} style={({ pressed }) => [{ flex: 1, minHeight: 48, alignItems: 'center', justifyContent: 'center', opacity: pressed ? 0.86 : 1 }]}>
              <Text numberOfLines={1} adjustsFontSizeToFit style={{ color: C.gold, fontFamily: font.sans, fontSize: 16, fontWeight: '800' }}>{inStories ? '‹  ' + ui('backToStories') : ui('homeBtn')}</Text>
            </Pressable>
            <FontButton compact />
          </View>
        )}
        </>}
      </View>
      {ready && !choosing && update.kind === 'optional' && <OptionalUpdate storeUrl={update.storeUrl} onClose={dismissOptional} />}
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

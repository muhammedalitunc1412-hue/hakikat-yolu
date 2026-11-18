import { useCallback, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppState, Linking, Modal, Platform, Pressable, Text, View } from 'react-native';
import * as Application from 'expo-application';
import config from '../../app.json';
import { ui } from '../i18n';
import type { Lang } from '../types';
import { C, TOP } from '../ui/theme';
import { applyFreshConfig, CONFIG_URL, fetchAppConfig, marketUrl, readStoredState, type UpdateState } from './policy';

const FETCH_TIMEOUT_MS = 5000;
const NONE: UpdateState = { kind: 'none' };
const androidPackage = config.expo.android.package;
// The optional "new version" prompt is shown at most once per app session.
let optionalHandled = false;

// Reads the remote config at launch and every time the app returns to the foreground.
// Offline or broken config -> the app simply opens normally.
export function useAppUpdate() {
  const supported = Platform.OS === 'android' || Platform.OS === 'ios';
  const [state, setState] = useState<UpdateState>(NONE);
  // False until the stored rule has been read, so the app never flashes before a blocking screen.
  const [loaded, setLoaded] = useState(!supported);
  useEffect(() => {
    if (!supported) return;
    const platform = Platform.OS as 'android' | 'ios';
    let request: AbortController | undefined;
    let alive = true;
    let fresh = false;

    // Independent of the network: a stored higher minVersionCode blocks immediately, even offline.
    readStoredState(AsyncStorage, platform, Application.nativeBuildVersion, androidPackage).then(stored => {
      if (alive && !fresh) setState(stored);
    }).finally(() => { if (alive) setLoaded(true); });

    async function check() {
      request?.abort();
      const controller = new AbortController();
      request = controller;
      const timer = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);
      try {
        const remote = await fetchAppConfig(CONFIG_URL, controller.signal);
        if (!alive || controller.signal.aborted || remote === undefined) return;
        fresh = true;
        const next = await applyFreshConfig(AsyncStorage, remote, platform, Application.nativeBuildVersion, androidPackage);
        if (!alive) return;
        setState(prev => (next.kind === 'optional' && optionalHandled && prev.kind !== 'optional' ? NONE : next));
      } catch {
        // Unreachable server or bad JSON: keep whatever the stored rule says (never newly blocks).
      } finally {
        clearTimeout(timer);
      }
    }

    void check();
    const subscription = AppState.addEventListener('change', s => { if (s === 'active') void check(); });
    return () => {
      alive = false;
      request?.abort();
      subscription.remove();
    };
  }, [supported]);
  const dismissOptional = useCallback(() => {
    optionalHandled = true;
    setState(NONE);
  }, []);
  return { state, dismissOptional, loaded };
}

export async function openStore(storeUrl: string) {
  if (Platform.OS === 'android') {
    try {
      await Linking.openURL(marketUrl(androidPackage));
      return;
    } catch {
      // No market:// handler (e.g. no Play Store): fall back to the web page.
    }
  }
  await Linking.openURL(storeUrl).catch(() => {});
}

function UpdateButton({ storeUrl }: { storeUrl: string }) {
  return (
    <Pressable accessibilityRole="button" onPress={() => void openStore(storeUrl)}
      style={{ backgroundColor: C.gold, borderRadius: 14, minHeight: 52, paddingHorizontal: 28, alignItems: 'center', justifyContent: 'center', alignSelf: 'stretch' }}>
      <Text style={{ color: C.ink, fontSize: 17, fontWeight: '700' }}>{ui('updateButton')}</Text>
    </Pressable>
  );
}

// Full-screen, non-dismissable. The Android back button is blocked in App.tsx.
export function RequiredUpdate({ lang, storeUrl, message }: { lang: Lang; storeUrl: string; message?: Record<string, string> }) {
  const body = message?.[lang] ?? ui('updateRequiredBody');
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 28, paddingTop: TOP, gap: 18 }}>
      <View style={{ width: 84, height: 84, borderRadius: 42, borderWidth: 2, borderColor: C.gold, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ color: C.gold, fontSize: 40, fontWeight: '700' }}>↑</Text>
      </View>
      <Text accessibilityRole="header" style={{ color: C.gold, fontSize: 28, textAlign: 'center', fontWeight: '700' }}>{ui('updateRequiredTitle')}</Text>
      <Text style={{ color: C.cream, fontSize: 17, lineHeight: 26, textAlign: 'center', maxWidth: 420 }}>{body}</Text>
      <View style={{ alignSelf: 'stretch', maxWidth: 420, marginTop: 8 }}>
        <UpdateButton storeUrl={storeUrl} />
      </View>
    </View>
  );
}

// Dismissable prompt for a newer, not mandatory, version.
export function OptionalUpdate({ storeUrl, onClose }: { storeUrl: string; onClose: () => void }) {
  return (
    <Modal transparent animationType="fade" onRequestClose={onClose}>
      <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.6)', justifyContent: 'center', alignItems: 'center', padding: 24 }}>
        <View style={{ width: '100%', maxWidth: 420, backgroundColor: C.bg, borderColor: C.gold, borderWidth: 1, borderRadius: 18, padding: 22, gap: 14 }}>
          <Text accessibilityRole="header" style={{ color: C.gold, fontSize: 22, fontWeight: '700' }}>{ui('updateAvailableTitle')}</Text>
          <Text style={{ color: C.cream, fontSize: 16, lineHeight: 24 }}>{ui('updateAvailableBody')}</Text>
          <UpdateButton storeUrl={storeUrl} />
          <Pressable accessibilityRole="button" onPress={onClose} style={{ minHeight: 44, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ color: C.dim, fontSize: 15 }}>{ui('updateLater')}</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}

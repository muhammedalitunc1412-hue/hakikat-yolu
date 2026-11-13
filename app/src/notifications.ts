// Özel gün bildirimleri: yalnızca telefonda zamanlanan yerel bildirimler. Sunucu, hesap ya da ağ kullanılmaz.
import { Platform } from 'react-native';
import * as Notifications from 'expo-notifications';
import AsyncStorage from '@react-native-async-storage/async-storage';
import type { Lang } from './types';
import { upcoming, type Open } from './occasions';

const KEY = 'hakikat-yolu:occasion-notifications';
const CHANNEL = 'occasions';

export type Reminder = { title: string; body: string; at: Date };

const pick = (v: { tr: string } & Partial<Record<string, string>>, lang: Lang) => (lang === 'tr' ? v.tr : v[lang] ?? v.en ?? v.tr);

export function setupNotifications() {
  Notifications.setNotificationHandler({
    handleNotification: async () => ({ shouldShowBanner: true, shouldShowList: true, shouldPlaySound: false, shouldSetBadge: false }),
  });
}

export async function loadEnabled(): Promise<boolean> {
  try { return (await AsyncStorage.getItem(KEY)) === '1'; } catch { return false; }
}

export async function saveEnabled(on: boolean) {
  try { await AsyncStorage.setItem(KEY, on ? '1' : '0'); } catch { /* yok say */ }
}

async function hasPermission() {
  const cur = await Notifications.getPermissionsAsync();
  return cur.granted;
}

// İzin ister (gerekirse). Verildiyse true.
export async function ensurePermission(): Promise<boolean> {
  try {
    if (await hasPermission()) return true;
    return (await Notifications.requestPermissionsAsync()).granted;
  } catch { return false; }
}

// Yaklaşan günleri baştan zamanlar. Her açılışta ve dil değişince çağrılır; eski plan silinir.
export async function schedule(lang: Lang): Promise<number> {
  try {
    await Notifications.cancelAllScheduledNotificationsAsync();
    if (!(await hasPermission())) return 0;
    if (Platform.OS === 'android') {
      await Notifications.setNotificationChannelAsync(CHANNEL, { name: 'Özel günler', importance: Notifications.AndroidImportance.DEFAULT });
    }
    const plan = upcoming(new Date());
    for (const p of plan) {
      await Notifications.scheduleNotificationAsync({
        content: { title: pick(p.occasion.title, lang), body: pick(p.occasion.body, lang), data: { open: p.occasion.open ?? null } },
        trigger: { type: Notifications.SchedulableTriggerInputTypes.DATE, date: p.at, channelId: CHANNEL },
      });
    }
    return plan.length;
  } catch { return 0; }
}

export async function cancel() {
  try { await Notifications.cancelAllScheduledNotificationsAsync(); } catch { /* yok say */ }
}

export function nextReminder(lang: Lang): Reminder | null {
  const p = upcoming(new Date(), 400)[0];
  return p ? { title: pick(p.occasion.title, lang), body: pick(p.occasion.body, lang), at: p.at } : null;
}

// Bildirime dokunulunca açılacak yer.
export function openOf(response: Notifications.NotificationResponse | null | undefined): Open | null {
  const o = response?.notification.request.content.data?.open as Open | null | undefined;
  return o && typeof o.id === 'string' && (o.kind === 'event' || o.kind === 'dua' || o.kind === 'imam') ? o : null;
}

export const useLastResponse = Notifications.useLastNotificationResponse;

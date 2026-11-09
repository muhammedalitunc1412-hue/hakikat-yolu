import { useEffect, useState } from 'react';
import { AppState, Linking, Platform, Pressable, Text, View } from 'react-native';
import config from '../../app.json';
import type { Lang } from '../types';
import { C, TOP } from '../ui/theme';
import { checkUpdate } from './policy';

const policyUrl = process.env.EXPO_PUBLIC_UPDATE_POLICY_URL;
const copy: Record<Lang, [string, string, string]> = {
  tr: ['Güncelleme gerekli', 'Devam etmek için uygulamanın yeni sürümünü yükle.', 'Mağazayı aç'],
  en: ['Update required', 'Install the latest version to continue.', 'Open store'],
  ar: ['التحديث مطلوب', 'ثبّت أحدث إصدار للمتابعة.', 'افتح المتجر'],
  fa: ['به‌روزرسانی لازم است', 'برای ادامه آخرین نسخه را نصب کنید.', 'باز کردن فروشگاه'],
  ur: ['اپ ڈیٹ ضروری ہے', 'جاری رکھنے کے لیے تازہ ترین ورژن انسٹال کریں۔', 'اسٹور کھولیں'],
  az: ['Yeniləmə tələb olunur', 'Davam etmək üçün ən son versiyanı quraşdır.', 'Mağazanı aç'],
  es: ['Actualización requerida', 'Instala la última versión para continuar.', 'Abrir tienda'],
  fr: ['Mise à jour requise', 'Installez la dernière version pour continuer.', 'Ouvrir la boutique'],
  de: ['Update erforderlich', 'Installiere die neueste Version, um fortzufahren.', 'Store öffnen'],
};

export function useRequiredUpdate() {
  const [storeUrl, setStoreUrl] = useState<string | null>(null);
  useEffect(() => {
    const platform = Platform.OS;
    if (__DEV__ || (platform !== 'android' && platform !== 'ios') || !policyUrl?.startsWith('https://')) return;
    const url = policyUrl;
    let request: AbortController | undefined;

    async function check(platform: 'android' | 'ios') {
      request?.abort();
      const controller = new AbortController();
      request = controller;
      const timer = setTimeout(() => controller.abort(), 4000);
      try {
        const result = await checkUpdate(url, platform, config.expo.version, config.expo.android.package, controller.signal);
        if (!controller.signal.aborted && result !== undefined) setStoreUrl(result);
      } catch {
        // An unreachable server must not block a new session.
      } finally {
        clearTimeout(timer);
      }
    }

    void check(platform);
    const subscription = AppState.addEventListener('change', state => {
      if (state === 'active') void check(platform);
    });
    return () => {
      request?.abort();
      subscription.remove();
    };
  }, []);
  return storeUrl;
}

export function RequiredUpdate({ lang, storeUrl }: { lang: Lang; storeUrl: string }) {
  const [title, message, button] = copy[lang];
  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 24, paddingTop: TOP, gap: 16 }}>
      <Text accessibilityRole="header" style={{ color: C.gold, fontSize: 24, fontWeight: '700' }}>{title}</Text>
      <Text style={{ color: C.cream, fontSize: 16 }}>{message}</Text>
      <Pressable accessibilityRole="button" onPress={() => void Linking.openURL(storeUrl).catch(() => {})}
        style={{ alignSelf: 'flex-start', backgroundColor: C.gold, borderRadius: 12, padding: 14 }}>
        <Text style={{ color: C.ink, fontWeight: '700' }}>{button}</Text>
      </Pressable>
      <Text selectable style={{ color: C.dim }}>{storeUrl}</Text>
    </View>
  );
}

# Zorunlu güncelleme

İlk destekli mağaza derlemesinde `EXPO_PUBLIC_UPDATE_POLICY_URL` olarak
kontrolünüzdeki HTTPS adresini verin. Başlangıçta adreste `{}` yayınlayın.
Adres derlemeye gömülür. Adresi içermeyen kurulumlar kontrol yapmaz.

Her mağaza sürümünde `app.json` içindeki `expo.version` değerini artırın.
Yeni sürüm hedef kullanıcıların tamamına açıldığında minimum sürümü yükseltin.

```json
{
  "android": {
    "minimumVersion": "1.2.0",
    "storeUrl": "https://play.google.com/store/apps/details?id=com.tuncgames.hakikatyolu"
  }
}
```

iOS için ayrı bir `ios` kuralı ve uygulamanın App Store bağlantısını kullanın.
Kuralı kaldırmak için platform anahtarını silin. JSON'u uzun süre önbelleğe
almayın. Ağ hatasında yeni oturum açılır. Kontrol web ve geliştirme
derlemelerinde devre dışıdır.

# Zorunlu güncelleme

Uygulama her açılışta ve arka plandan öne her dönüşünde şu dosyayı okur:

https://raw.githubusercontent.com/muhammedalitunc1412-hue/hakikat-yolu/main/config/app-config.json

Dosya `main` dalındaki `config/app-config.json` dosyasıdır. Depo herkese açık olmalıdır;
özel yapılırsa bu adres çalışmaz ve kontrol sessizce devre dışı kalır. İstek 5 saniye
sonra zaman aşımına uğrar ve adrese `?t=<zaman>` eklenerek önbellek atlanır.

## Nasıl çalışır

Telefondaki sürüm numarası (Android'de `android.versionCode`) dosyadaki sayılarla karşılaştırılır:

| Durum | Sonuç |
| --- | --- |
| Yüklü sürüm < `minVersionCode` | Tam ekran, kapatılamayan "Güncelleme gerekli" ekranı. Geri tuşu çalışmaz. "Güncelle" düğmesi Play Store'u (`market://`) açar, açılmazsa web sayfasına geçer. |
| `minVersionCode` ≤ yüklü sürüm < `latestVersionCode` | Kapatılabilir "Yeni sürüm mevcut" penceresi. Her oturumda en fazla bir kez görünür. |
| Yüklü sürüm ≥ `latestVersionCode` | Hiçbir şey görünmez. |
| İnternet yok, sunucu hatası, bozuk dosya | Uygulama normal açılır. Kimse kilitlenmez. |

`message.tr` ve `message.en` yalnızca zorunlu güncelleme ekranındaki açıklamayı değiştirir.
Diğer diller uygulamadaki çevrilmiş varsayılan metni gösterir. Mağaza adresi güvenlik
için koddaki paket adından üretilir; dosyadaki `storeUrl` Android'de yalnızca bilgi içindir.
Kontrol web ve iOS'ta (iOS için geçerli bir App Store adresi girilene kadar) bir şey yapmaz.

## Her yeni sürümde yapılacaklar

1. `app/app.json` içinde `expo.android.versionCode` değerini **mutlaka** bir artırın
   (1 → 2 → 3 …). Play Store aynı veya daha küçük `versionCode` ile yükleme kabul etmez.
   `expo.version` değerini de artırın (ör. 1.0.0 → 1.0.1).
2. Sürümü derleyin (AAB) ve Play Console'a yükleyin.
3. Sürümün Play Store'da **yayında ve herkes tarafından indirilebilir** olmasını bekleyin.
   İnceleme ve kademeli yayın bitmeden devam etmeyin.
4. Ancak ondan sonra `config/app-config.json` içinde sayıları yükseltin ve `main`'e gönderin:
   * İsteğe bağlı güncelleme: `latestVersionCode` = yeni `versionCode`.
   * Zorunlu güncelleme: `minVersionCode` = yeni `versionCode`.

```json
{
  "android": {
    "minVersionCode": 2,
    "latestVersionCode": 2,
    "storeUrl": "https://play.google.com/store/apps/details?id=com.tuncgames.hakikatyolu"
  }
}
```

Dosya `main`'e gittikten sonra yaklaşık 5 dakika içinde etkili olur (GitHub önbelleği).

## Dikkat: kilitlenme riski

`minVersionCode` değerini yeni sürüm Play Store'da yayında olmadan yükseltmeyin.
Yükseltirseniz bütün kullanıcılar "Güncelleme gerekli" ekranını görür, ama mağazada
indirecekleri yeni sürüm henüz yoktur. Uygulama herkes için kullanılamaz hale gelir.
Yanlışlıkla yükseltirseniz sayıyı geri indirip `main`'e gönderin; kullanıcılar
uygulamayı bir sonraki açışlarında ya da öne getirişlerinde kurtulur.

`minVersionCode` hiçbir zaman `app.json` içindeki `versionCode` değerinden büyük olamaz;
`policy.test.mjs` testi bunu denetler. Bu yüzden önce `versionCode` artırılıp
birlikte `main`'e gönderilmeli, `minVersionCode` ise yayına çıktıktan sonra yükseltilmelidir.

## Hatırlatma: `versionCode`

* Her Play Store yüklemesinin `versionCode` değeri öncekinden **büyük** olmalıdır.
* Zorunlu güncelleme bu sayıya bakar, `version` metnine değil.
* Sürüm numarasını artırmayı unutmak hem yüklemeyi engeller hem de güncelleme uyarılarını bozar.

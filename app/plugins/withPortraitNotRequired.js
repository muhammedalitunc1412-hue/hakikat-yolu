// Declares portrait screen as optional so the app can be installed on
// tablets, Chromebooks and XR devices; the app still opens in portrait.
const { withAndroidManifest } = require('expo/config-plugins');

module.exports = function withPortraitNotRequired(config) {
  return withAndroidManifest(config, (cfg) => {
    const manifest = cfg.modResults.manifest;
    manifest.$ = manifest.$ || {};
    if (!manifest.$['xmlns:tools']) manifest.$['xmlns:tools'] = 'http://schemas.android.com/tools';
    const features = (manifest['uses-feature'] = manifest['uses-feature'] || []);
    for (const name of ['android.hardware.screen.portrait', 'android.hardware.screen.landscape']) {
      const existing = features.find((f) => f.$ && f.$['android:name'] === name);
      if (existing) {
        existing.$['android:required'] = 'false';
        existing.$['tools:replace'] = 'android:required';
      } else {
        features.push({ $: { 'android:name': name, 'android:required': 'false', 'tools:replace': 'android:required' } });
      }
    }
    return cfg;
  });
};

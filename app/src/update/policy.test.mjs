import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import { buildNumber, evaluateUpdate, fetchAppConfig, marketUrl } from './policy.ts';

const id = 'com.tuncgames.hakikatyolu';
const storeUrl = 'https://play.google.com/store/apps/details?id=' + id;
const url = 'https://example.com/config/app-config.json';
const config = (min, latest, message) => ({ android: { minVersionCode: min, latestVersionCode: latest, storeUrl }, message });

test('installed build below minVersionCode requires an update', () => {
  assert.deepEqual(evaluateUpdate(config(3, 3), 'android', '2', id), { kind: 'required', storeUrl, message: undefined });
  assert.equal(evaluateUpdate(config(3, 3), 'android', '3', id).kind, 'none');
  assert.equal(evaluateUpdate(config(3, 3), 'android', 4, id).kind, 'none');
});

test('below latest but not below min is optional', () => {
  assert.deepEqual(evaluateUpdate(config(2, 5), 'android', '3', id), { kind: 'optional', storeUrl });
  assert.equal(evaluateUpdate(config(2, 5), 'android', '5', id).kind, 'none');
  // latest below min is treated as min
  assert.equal(evaluateUpdate(config(4, 1), 'android', '3', id).kind, 'required');
});

test('required update carries a clean per-language message', () => {
  const r = evaluateUpdate(config(9, 9, { tr: ' Güncelle ', en: 'Update', de: 5, fr: '' }), 'android', '1', id);
  assert.deepEqual(r.message, { tr: 'Güncelle', en: 'Update' });
});

test('missing, malformed or unknown data never blocks the app', () => {
  for (const bad of [null, undefined, [], 'x', {}, { android: null }, { android: { minVersionCode: 'x' } }]) {
    assert.equal(evaluateUpdate(bad, 'android', '1', id).kind, 'none');
  }
  assert.equal(evaluateUpdate(config(9, 9), 'android', null, id).kind, 'none');
  assert.equal(evaluateUpdate(config(9, 9), 'android', 'abc', id).kind, 'none');
  assert.equal(evaluateUpdate(config(-1, 1.5), 'android', '1', id).kind, 'none');
  assert.equal(evaluateUpdate(config(9, 9), 'ios', '1', id).kind, 'none');
});

test('the remote file cannot send users to another store page', () => {
  const evil = { android: { minVersionCode: 9, latestVersionCode: 9, storeUrl: 'https://evil.test/' } };
  assert.equal(evaluateUpdate(evil, 'android', '1', id).storeUrl, storeUrl);
  const apple = 'https://apps.apple.com/tr/app/hakikat-yolu/id123';
  assert.equal(evaluateUpdate({ ios: { minVersionCode: 9, latestVersionCode: 9, storeUrl: apple } }, 'ios', '1', id).storeUrl, apple);
  assert.equal(evaluateUpdate({ ios: { minVersionCode: 9, latestVersionCode: 9, storeUrl: 'https://evil.test/' } }, 'ios', '1', id).kind, 'none');
  assert.equal(evaluateUpdate({ ios: { minVersionCode: 9, latestVersionCode: 9, storeUrl: '' } }, 'ios', '1', id).kind, 'none');
});

test('build numbers parse strictly', () => {
  assert.equal(buildNumber('12'), 12);
  assert.equal(buildNumber(7), 7);
  assert.equal(buildNumber('1.0.0'), null);
  assert.equal(buildNumber(null), null);
  assert.equal(marketUrl(id), 'market://details?id=' + id);
});

test('fetch adds a cache-busting query, requires HTTPS and tolerates server errors', async t => {
  const signal = new AbortController().signal;
  let seen;
  const fetchMock = t.mock.method(globalThis, 'fetch', async (address, options) => {
    seen = address;
    assert.equal(options.signal, signal);
    return Response.json(config(1, 1));
  });
  assert.equal(await fetchAppConfig('http://example.com/c.json', signal), undefined);
  assert.equal(fetchMock.mock.callCount(), 0);
  assert.deepEqual(await fetchAppConfig(url, signal, 123), JSON.parse(JSON.stringify(config(1, 1))));
  assert.equal(seen, url + '?t=123');
  await fetchAppConfig(url + '?a=1', signal, 5);
  assert.equal(seen, url + '?a=1&t=5');
  fetchMock.mock.mockImplementation(async () => new Response('', { status: 503 }));
  assert.equal(await fetchAppConfig(url, signal), undefined);
  fetchMock.mock.mockImplementation(async () => Response.json([1]));
  assert.equal(await fetchAppConfig(url, signal), undefined);
  fetchMock.mock.mockImplementation(async () => new Response('not JSON'));
  await assert.rejects(fetchAppConfig(url, signal), SyntaxError);
  fetchMock.mock.mockImplementation(async () => { throw new TypeError('Offline'); });
  await assert.rejects(fetchAppConfig(url, signal), TypeError);
});

test('the committed config matches app.json and is safe for the first release', () => {
  const app = JSON.parse(readFileSync(new URL('../../app.json', import.meta.url), 'utf8')).expo;
  const cfg = JSON.parse(readFileSync(new URL('../../../config/app-config.json', import.meta.url), 'utf8'));
  assert.equal(cfg.android.storeUrl, 'https://play.google.com/store/apps/details?id=' + app.android.package);
  assert.ok(Number.isInteger(app.android.versionCode));
  // Raising min above the versionCode that is live on Play locks users out: the shipped build must pass.
  assert.ok(cfg.android.minVersionCode <= app.android.versionCode);
  assert.equal(evaluateUpdate(cfg, 'android', String(app.android.versionCode), app.android.package).kind,
    cfg.android.latestVersionCode > app.android.versionCode ? 'optional' : 'none');
});

import assert from 'node:assert/strict';
import test from 'node:test';
import { checkUpdate, requiredStoreUrl } from './policy.ts';

const id = 'com.tuncgames.hakikatyolu';
const storeUrl = 'https://play.google.com/store/apps/details?id=' + id;
const url = 'https://updates.example.com/policy.json';
const policy = { android: { minimumVersion: '1.10.0', storeUrl } };

test('minimum version is numeric and platform-specific', () => {
  assert.equal(requiredStoreUrl(policy, 'android', '1.9.9', id), storeUrl);
  assert.equal(requiredStoreUrl(policy, 'android', '1.10.0', id), null);
  assert.equal(requiredStoreUrl(policy, 'android', '2.0.0', id), null);
  assert.equal(requiredStoreUrl(policy, 'ios', '1.0.0', id), null);
  const appleUrl = 'https://apps.apple.com/tr/app/hakikat-yolu/id123';
  assert.equal(requiredStoreUrl({ ios: { minimumVersion: '2.0.0', storeUrl: appleUrl } }, 'ios', '1.0.0', id), appleUrl);
});

test('invalid versions and unrelated links cannot force an update', () => {
  for (const rule of [
    { minimumVersion: 'latest', storeUrl },
    { minimumVersion: '2.0.0', storeUrl: 'https://play.google.com.evil.test/' },
    { minimumVersion: '2.0.0', storeUrl: storeUrl + '.another' },
  ]) assert.equal(requiredStoreUrl({ android: rule }, 'android', '1.0.0', id), null);
});

test('checks HTTPS and distinguishes a disabled rule from server failure', async t => {
  const signal = new AbortController().signal;
  const check = (address = url) => checkUpdate(address, 'android', '1.0.0', id, signal);
  const fetchMock = t.mock.method(globalThis, 'fetch', async (address, options) => {
    assert.equal(address, url);
    assert.equal(options.signal, signal);
    return Response.json(policy);
  });
  assert.equal(await check('http://updates.example.com/policy.json'), undefined);
  assert.equal(fetchMock.mock.callCount(), 0);
  assert.equal(await check(), storeUrl);
  fetchMock.mock.mockImplementation(async () => Response.json({}));
  assert.equal(await check(), null);
  fetchMock.mock.mockImplementation(async () => new Response('', { status: 503 }));
  assert.equal(await check(), undefined);
  fetchMock.mock.mockImplementation(async () => new Response('not JSON'));
  await assert.rejects(check(), SyntaxError);
  fetchMock.mock.mockImplementation(async () => { throw new TypeError('Offline'); });
  await assert.rejects(check(), TypeError);
});

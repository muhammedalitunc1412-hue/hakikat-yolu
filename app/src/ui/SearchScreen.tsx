import React, { useMemo, useState } from 'react';
import { FlatList, Platform, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { ui } from '../i18n';
import { Chevron, SearchIcon } from './icons';
import { type Hit, search } from './search';
import { C, TOP, align, font, rowDir, themedStyles, usePageWidth } from './theme';

const webHit = Platform.OS === 'web' ? { cursor: 'pointer' as const } : null;
let lastQuery = ''; // sahne açılıp geri dönülünce arama kaybolmasın

export function SearchScreen({ initial, onBack, onOpen }: { initial?: string; onBack: () => void; onOpen: (eventId: string, scene: number) => void }) {
  const [q, setQ] = useState(initial ?? lastQuery);
  const hits = useMemo(() => search(q), [q]);
  const wide = usePageWidth() >= 700;
  const change = (v: string) => { lastQuery = v; setQ(v); };
  const short = q.trim().length < 2;
  return (
    <View style={{ flex: 1, backgroundColor: C.bg }}>
      <View style={s.head}>
        <Pressable onPress={onBack} hitSlop={8} accessibilityRole="button" style={s.back}>
          <Text style={s.backText}>‹  {ui('back')}</Text>
        </Pressable>
        <Text accessibilityRole="header" style={[s.title, align()]}>{ui('searchTitle')}</Text>
        <View style={[s.box, { flexDirection: rowDir() }]}>
          <SearchIcon />
          <TextInput
            value={q}
            onChangeText={change}
            placeholder={ui('searchAll')}
            placeholderTextColor={C.faint}
            autoFocus={!q}
            autoCorrect={false}
            returnKeyType="search"
            style={[s.input, align()]}
            accessibilityLabel={ui('searchAll')}
          />
          {q.length > 0 && (
            <Pressable onPress={() => change('')} hitSlop={10} accessibilityRole="button" accessibilityLabel={ui('close')}>
              <Text style={s.clear}>×</Text>
            </Pressable>
          )}
        </View>
        <Text style={[s.count, align()]}>
          {short ? ui('searchHint') : hits.length ? `${hits.length}${hits.length >= 80 ? '+' : ''} ${ui('searchResults')}` : ui('searchNone')}
        </Text>
      </View>
      <FlatList
        data={short ? [] : hits}
        key={wide ? 'w' : 'n'}
        numColumns={wide ? 2 : 1}
        columnWrapperStyle={wide ? { gap: 10 } : undefined}
        keyExtractor={h => h.eventId + ':' + h.kind + ':' + h.scene}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ paddingHorizontal: 18, paddingBottom: 48 }}
        renderItem={({ item }) => <HitRow hit={item} wide={wide} onOpen={onOpen} />}
      />
    </View>
  );
}

function HitRow({ hit, wide, onOpen }: { hit: Hit; wide: boolean; onOpen: (eventId: string, scene: number) => void }) {
  const [a, b] = hit.mark ?? [0, 0];
  return (
    <Pressable onPress={() => onOpen(hit.eventId, hit.scene)} accessibilityRole="button" style={({ pressed }) => [s.card, { flexDirection: rowDir() }, wide && { flex: 1 }, pressed && { opacity: 0.86 }, webHit]}>
      <View style={{ flex: 1 }}>
        <Text style={[s.story, align()]} numberOfLines={2}>{hit.story}</Text>
        <Text style={[s.meta, align()]}>{hit.kind === 'title' ? ui('story') : `${ui('scene')} ${hit.scene + 1}`}</Text>
        <Text style={[s.snippet, align()]} numberOfLines={4}>
          {hit.mark ? (
            <>
              {hit.snippet.slice(0, a)}
              <Text style={s.match}>{hit.snippet.slice(a, b)}</Text>
              {hit.snippet.slice(b)}
            </>
          ) : hit.snippet}
        </Text>
      </View>
      <Chevron color={C.gold} />
    </Pressable>
  );
}

const s = themedStyles(() => StyleSheet.create({
  head: { paddingHorizontal: 18, paddingTop: TOP, paddingBottom: 6 },
  back: { minHeight: 44, justifyContent: 'center', alignSelf: 'flex-start' },
  backText: { color: C.gold, fontFamily: font.sans, fontSize: 16, fontWeight: '700' },
  title: { color: C.cream, fontFamily: font.serif, fontSize: 30, lineHeight: 36, fontWeight: '700', marginTop: 4, marginBottom: 12 },
  box: { alignItems: 'center', gap: 10, backgroundColor: C.card, borderRadius: 16, paddingHorizontal: 14, minHeight: 52, borderWidth: 1, borderColor: C.lineStrong },
  input: { flex: 1, color: C.cream, fontFamily: font.sans, fontSize: 16, paddingVertical: 12 },
  clear: { color: C.gold, fontSize: 22, fontWeight: '600', paddingHorizontal: 4 },
  count: { color: C.faint, fontFamily: font.sans, fontSize: 13, marginTop: 10, marginBottom: 6 },
  card: { alignItems: 'center', gap: 10, backgroundColor: C.card, borderRadius: 16, padding: 14, marginTop: 10, borderWidth: 1, borderColor: C.line },
  story: { color: C.cream, fontFamily: font.serif, fontSize: 16, fontWeight: '700' },
  meta: { color: C.gold, fontFamily: font.sans, fontSize: 12, fontWeight: '700', marginTop: 3 },
  snippet: { color: C.dim, fontFamily: font.sans, fontSize: 14, lineHeight: 20, marginTop: 6 },
  match: { color: C.ink, backgroundColor: C.gold, fontWeight: '700' },
}));

import React, { useState } from 'react';
import { Modal, Pressable, ScrollView, StyleProp, StyleSheet, Text, TextStyle, View } from 'react-native';
import { tx } from '../i18n';
import type { L } from '../types';
import { VERSES } from '../data/verses';

// Metindeki ayet göndermelerini (örn. "Ahzâb 33:33", "Mâide suresi 6. ayet") dokunulabilir yapar;
// dokununca Arapça metin ve Türkçe meal açılır penceresi görünür.
const SURAH: Record<string, number> = { 'Bakara': 2, 'Âl-i İmrân': 3, 'Nisâ': 4, 'Mâide': 5, 'Enfâl': 8, 'Nahl': 16, 'Ahzâb': 33, 'Şûrâ': 42, 'Beyyine': 98, "A'râf": 7, 'Tâhâ': 20 };
const RE = /(Bakara|Âl-i İmrân|Nisâ|Mâide|Enfâl|Nahl|Ahzâb|Şûrâ|Beyyine|A'râf|Tâhâ)(?: suresi)?\s+(?:(\d{1,3}):)?(\d{1,3})(?![\d:])/g;

const K = { bg: '#16242a', text: '#eef3f0', dim: '#9fb4b0', gold: '#e6c36a', shia: '#3fbf7f', line: 'rgba(255,255,255,0.12)' };

type Part = { t: string; key?: string };
function split(text: string): Part[] {
  const out: Part[] = [];
  let last = 0;
  for (const m of text.matchAll(RE)) {
    const s = SURAH[m[1]];
    if (m[2] && Number(m[2]) !== s) continue;
    const key = s + ':' + Number(m[3]);
    if (!VERSES[key]) continue;
    if (m.index! > last) out.push({ t: text.slice(last, m.index) });
    out.push({ t: m[0], key });
    last = m.index! + m[0].length;
  }
  if (last < text.length) out.push({ t: text.slice(last) });
  return out;
}

// Dikkat çekmesi için koyu gösterilen anahtar kelimeler (kelimenin devamındaki ekler de koyu olur).
const LET = "A-Za-zÇĞİÖŞÜçğıöşüÂÎÛâîû";
const BOLD = [
  'Gadir Hum', 'Gadir', '[Vv]elayet', '[Mm]evlâ', 'Ehl-i Beyt', '[İi]mamet', '[İi]smet', 'Kisa', 'Pence-i Âl-i Aba', 'Mübahele',
  'Sak[iî]fe', 'felte', 'Fedek', 'Kerbel[aâ]', '[ÂAa]şûrâ', 'Cemel', 'Sıff[iî]n', 'Nehrevan', 'Menzile', 'Hayber', 'sancak', 'Tebük',
  '[Hh]ilafet', '[Şş]ura', 'nass', '[Tt]akiyye', "[Mm]ut['’]a", '[Hh]umus', '[Gg]aybet', 'Mehdi', 'On İki İmam', 'Safine',
  'Sakaleyn', 'Kırtas', 'Veda Haccı', 'Şıkşıkıyye', 'Zülfikar', 'Muhsin',
];
const BOLD_RE = new RegExp('(^|[^' + LET + '])(' + BOLD.join('|') + ')([' + LET + "'’]*)", 'g');
function emph(t: string): React.ReactNode[] {
  const out: React.ReactNode[] = [];
  let last = 0;
  for (const m of t.matchAll(BOLD_RE)) {
    const start = m.index! + m[1].length;
    if (start > last) out.push(t.slice(last, start));
    out.push(<Text key={start} style={r.bold}>{m[2] + m[3]}</Text>);
    last = start + m[2].length + m[3].length;
  }
  if (last < t.length) out.push(t.slice(last));
  return out;
}

export function Rich({ text, style }: { text: L | string | undefined; style?: StyleProp<TextStyle> }) {
  const [open, setOpen] = useState<string | null>(null);
  const parts = split(tx(text));
  const v = open ? VERSES[open] : null;
  return (
    <>
      <Text style={style}>
        {parts.map((p, i) => p.key
          ? <Text key={i} style={r.link} onPress={() => setOpen(p.key!)}>{p.t}</Text>
          : <Text key={i}>{emph(p.t)}</Text>)}
      </Text>
      <Modal visible={!!v} transparent animationType="fade" onRequestClose={() => setOpen(null)}>
        <Pressable style={r.backdrop} onPress={() => setOpen(null)}>
          <Pressable style={r.card} onPress={() => {}}>
            {v && (
              <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={r.title}>{v.sure} Suresi, {v.ayah}. ayet</Text>
                <Text style={r.arabic}>{v.ar}</Text>
                <Text style={[r.label, { color: K.shia }]}>MEAL (Diyanet İşleri)</Text>
                <Text style={r.body}>{v.meal}</Text>
              </ScrollView>
            )}
            <Pressable style={r.close} onPress={() => setOpen(null)}><Text style={r.closeText}>Kapat</Text></Pressable>
          </Pressable>
        </Pressable>
      </Modal>
    </>
  );
}

const r = StyleSheet.create({
  bold: { fontWeight: '800', color: '#ffffff' },
  link: { color: K.gold, textDecorationLine: 'underline', fontWeight: '700' },
  backdrop: { flex: 1, backgroundColor: 'rgba(0,0,0,0.7)', justifyContent: 'center', padding: 16 },
  card: { backgroundColor: K.bg, borderRadius: 16, borderWidth: 1, borderColor: K.line, padding: 16, maxHeight: '86%' },
  title: { color: K.gold, fontSize: 17, fontWeight: '800', marginBottom: 10 },
  arabic: { color: '#fff8e0', fontSize: 26, lineHeight: 46, textAlign: 'right', writingDirection: 'rtl', marginBottom: 8 },
  label: { fontWeight: '800', fontSize: 12, letterSpacing: 1, marginTop: 10, marginBottom: 3 },
  body: { color: K.text, fontSize: 15, lineHeight: 23 },
  close: { marginTop: 12, padding: 12, borderRadius: 12, backgroundColor: K.gold, alignItems: 'center' },
  closeText: { color: '#0b1412', fontWeight: '800' },
});

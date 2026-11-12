import React, { useState } from 'react';
import { Modal, Pressable, ScrollView, StyleProp, StyleSheet, Text, TextStyle, View } from 'react-native';
import { tx } from '../i18n';
import type { L } from '../types';
import { VERSES } from '../data/verses';
import { C, font, themedStyles } from './theme';

// Metindeki ayet göndermelerini (örn. "Ahzâb 33:33", "Mâide suresi 6. ayet") dokunulabilir yapar;
// dokununca Arapça metin ve Türkçe meal açılır penceresi görünür.
// Çevirilerde sure adı kendi dilinin yazımıyla geçer (Baqara, Bəqərə, البقرة...); hepsi aynı ayete gider.
const SURAH_NAMES: [number, string[]][] = [
  [2, ['Bakara', 'Baqara', 'Baqarah', 'Bəqərə', 'Al-Baqara', 'Al-Baqarah', 'البقرة', 'بقره']],
  [3, ['Âl-i İmrân', 'Âl-i ʿImrân', "Âl-i 'Imrân", 'Âl-i Imrân', 'Al Imran', 'Al-i Imran', 'Ali Imran', 'Âl ʿImrân', 'Əli İmran', 'آل عمران', 'آل‌عمران', 'عمران']],
  [4, ['Nisâ', 'Nisa', "Nisâ'", 'Nisâʾ', 'An-Nisa', 'Nisaa', 'النساء', 'نساء']],
  [5, ['Mâide', 'Maide', 'Maida', "Mâ'ida", 'Mâʾida', "Ma'ida", 'Maidə', "Al-Ma'ida", 'المائدة', 'مائده']],
  [7, ["A'râf", 'Araf', "A'raf", 'Aʿrâf', "Al-A'raf", 'Əraf', 'Əl-Əraf', 'الأعراف', 'اعراف']],
  [8, ['Enfâl', 'Anfal', 'Anfâl', 'Ənfal', 'Al-Anfal', 'الأنفال', 'انفال']],
  [16, ['Nahl', 'Nəhl', 'An-Nahl', 'النحل', 'نحل']],
  [20, ['Tâhâ', 'Taha', 'Ta-Ha', 'Tâ-Hâ', 'Tahâ', 'طه']],
  [33, ['Ahzâb', 'Ahzab', 'Ahzāb', 'Əhzab', 'Al-Ahzab', 'الأحزاب', 'احزاب']],
  [42, ['Şûrâ', 'Şura', 'Schura', 'Shura', 'Shûrâ', 'Chourâ', 'Choura', 'Şurə', 'الشورى', 'شورى', 'شوری']],
  [98, ['Beyyine', 'Bayyina', 'Bayyinah', 'Baiyina', 'Bayyine', 'Bəyyinə', 'Beyyinə', 'البينة', 'بينه', 'بینه']],
];
const SURAH: Record<string, number> = {};
for (const [n, names] of SURAH_NAMES) for (const name of names) SURAH[name] = n;
const NAME_ALT = Object.keys(SURAH).sort((a, b) => b.length - a.length).map(s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|');
const DIG = '[0-9\\u0660-\\u0669\\u06F0-\\u06F9]';
const BEFORE = "A-Za-z\\u00C0-\\u024F\\u0259\\u018F\\u0600-\\u06FF'’ʿʾ";
const RE = new RegExp(`(^|[^${BEFORE}])(${NAME_ALT})(?: suresi| sûresi)?\\s+(?:(${DIG}{1,3})\\s*:\\s*)?(${DIG}{1,3})(?!${DIG}|:)`, 'g');
const latinDigits = (s: string) => s.replace(/[٠-٩]/g, c => String(c.charCodeAt(0) - 0x660)).replace(/[۰-۹]/g, c => String(c.charCodeAt(0) - 0x6F0));

type Part = { t: string; key?: string };
function split(text: string): Part[] {
  const out: Part[] = [];
  let last = 0;
  for (const m of text.matchAll(RE)) {
    const s = SURAH[m[2]];
    if (m[3] && Number(latinDigits(m[3])) !== s) continue;
    const key = s + ':' + Number(latinDigits(m[4]));
    if (!VERSES[key]) continue;
    const start = m.index! + m[1].length;
    if (start > last) out.push({ t: text.slice(last, start) });
    out.push({ t: m[0].slice(m[1].length), key });
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
  '[Hh]ilafet', '[Şş]ura', 'nass', '[Tt]akiyye', "[Mm]ut['’]a", '[Hh]umus', '[Gg]aybet', 'Hz. Mehdî', 'On İki İmam', 'Safine',
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

// **kalın vurgu** ve ==ayrı renk== içerik yazarının işaretidir.
const MARK = /\*\*([^*]+)\*\*|==([^=]+)==/g;
function marked(t: string): React.ReactNode[] {
  const out: React.ReactNode[] = [];
  let last = 0;
  for (const m of t.matchAll(MARK)) {
    if (m.index! > last) out.push(...emph(t.slice(last, m.index)));
    const phrase = m[1] ?? m[2] ?? '';
    out.push(<Text key={'m' + m.index} style={m[1] != null ? r.mark : r.accent}>{phrase}</Text>);
    last = m.index! + m[0].length;
  }
  if (last < t.length) out.push(...emph(t.slice(last)));
  return out.length ? out : emph(t);
}

export function Rich({ text, style, selectable }: { text: L | string | undefined; style?: StyleProp<TextStyle>; selectable?: boolean }) {
  const [open, setOpen] = useState<string | null>(null);
  const parts = split(tx(text));
  const v = open ? VERSES[open] : null;
  return (
    <>
      <Text style={style} selectable={selectable}>
        {parts.map((p, i) => p.key
          ? <Text key={i} style={r.link} onPress={() => setOpen(p.key!)}>{p.t}</Text>
          : <Text key={i}>{marked(p.t)}</Text>)}
      </Text>
      <Modal visible={!!v} transparent animationType="fade" onRequestClose={() => setOpen(null)}>
        <Pressable style={r.backdrop} onPress={() => setOpen(null)}>
          <Pressable style={r.card} onPress={() => {}}>
            {v && (
              <ScrollView style={r.scroll} showsVerticalScrollIndicator persistentScrollbar>
                <Text style={r.title}>{v.sure} Suresi, {v.ayah}. ayet</Text>
                <Text style={[r.arabic, v.ar.length > 300 && r.arabicLong]}>{v.ar}</Text>
                <Text style={[r.label, { color: C.shia }]}>MEAL (Diyanet İşleri)</Text>
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

const r = themedStyles(() => StyleSheet.create({
  bold: { fontWeight: '800', color: C.cream },
  mark: { fontWeight: '800', color: '#f6e7a8' },
  accent: { fontWeight: '800', color: '#9be7c4' },
  link: { color: C.gold, textDecorationLine: 'underline', fontWeight: '700' },
  backdrop: { flex: 1, backgroundColor: 'rgba(0,0,0,0.72)', justifyContent: 'center', padding: 18 },
  card: { backgroundColor: C.card, borderRadius: 18, borderWidth: 1, borderColor: C.line, padding: 18, maxHeight: '86%' },
  title: { color: C.gold, fontFamily: font.serif, fontSize: 18, fontWeight: '700', marginBottom: 10 },
  arabic: { color: '#fff8e0', fontFamily: font.arabic, fontSize: 26, lineHeight: 48, textAlign: 'right', writingDirection: 'rtl', marginBottom: 8 },
  scroll: { flexShrink: 1 },
  arabicLong: { fontSize: 21, lineHeight: 38 },
  label: { fontFamily: font.sans, fontWeight: '800', fontSize: 12, letterSpacing: 1, marginTop: 10, marginBottom: 3 },
  body: { color: C.text, fontFamily: font.sans, fontSize: 16, lineHeight: 25 },
  close: { marginTop: 14, minHeight: 48, padding: 12, borderRadius: 14, backgroundColor: C.gold, alignItems: 'center', justifyContent: 'center' },
  closeText: { color: C.ink, fontFamily: font.sans, fontWeight: '800' },
}));

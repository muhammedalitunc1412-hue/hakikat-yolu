import { StyleSheet, Text, View } from 'react-native';
import { APP_PURPOSE_PARAGRAPHS, APP_PURPOSE_TITLE } from '../data/amac';
import { Rich } from './Rich';
import { C, align, font, themedStyles } from './theme';

const BOLD_PHRASES = [
  'ayırmak değildir',
  'ortak özellikleri',
  'vahdeti',
  "İslam Birliği'nin kurulmasıdır",
  'kardeşliğin yanında durur',
  'Hakikat, bizi birbirimizden uzaklaştırmak için değil, birbirimize bağlamak için okunur.',
];

function markBold(text: string): string {
  const phrases = [...BOLD_PHRASES].sort((a, b) => b.length - a.length);
  const spans: { start: number; end: number }[] = [];
  for (const p of phrases) {
    let from = 0;
    while (true) {
      const i = text.indexOf(p, from);
      if (i < 0) break;
      const end = i + p.length;
      if (!spans.some(s => i < s.end && end > s.start)) spans.push({ start: i, end });
      from = end;
    }
  }
  spans.sort((a, b) => a.start - b.start);
  let out = '';
  let last = 0;
  for (const s of spans) {
    out += text.slice(last, s.start) + '**' + text.slice(s.start, s.end) + '**';
    last = s.end;
  }
  return out + text.slice(last);
}

function splitVerse(paragraph: string): { intro: string; quote: string; outro: string } | null {
  const i = paragraph.indexOf('"');
  const j = paragraph.indexOf('"', i + 1);
  if (i < 0 || j < 0) return null;
  return {
    intro: paragraph.slice(0, i).trimEnd(),
    quote: paragraph.slice(i + 1, j),
    outro: paragraph.slice(j + 1).trimStart(),
  };
}

function Ornament() {
  return (
    <View style={s.ornament} accessibilityElementsHidden importantForAccessibility="no-hide-descendants">
      <View style={s.ornamentLine} />
      <Text style={s.ornamentMark}>۞</Text>
      <View style={s.ornamentLine} />
    </View>
  );
}

const bodyStyle = () => [s.body, align()];

export function PurposeCopy({ centered }: { centered?: boolean }) {
  const verse = splitVerse(APP_PURPOSE_PARAGRAPHS[2]);
  const titleAlign = centered ? ({ textAlign: 'center' as const }) : align();
  return (
    <View>
      <Text accessibilityRole="header" style={[s.title, titleAlign]}>{APP_PURPOSE_TITLE}</Text>
      <Ornament />
      <Rich style={bodyStyle()} text={markBold(APP_PURPOSE_PARAGRAPHS[0])} selectable />
      <Rich style={[...bodyStyle(), s.gap]} text={markBold(APP_PURPOSE_PARAGRAPHS[1])} selectable />
      {verse ? (
        <>
          <Rich style={[...bodyStyle(), s.gap]} text={markBold(verse.intro)} selectable />
          <View style={s.verseCard}>
            <Text style={[s.verse, align()]} selectable>“{verse.quote}”</Text>
            <Text style={[s.verseRef, align()]}>Âl-i İmrân, 103</Text>
          </View>
          <Rich style={bodyStyle()} text={markBold(verse.outro)} selectable />
        </>
      ) : (
        <Rich style={[...bodyStyle(), s.gap]} text={markBold(APP_PURPOSE_PARAGRAPHS[2])} selectable />
      )}
    </View>
  );
}

const s = themedStyles(() => StyleSheet.create({
  title: { color: C.cream, fontFamily: font.serif, fontSize: 30, lineHeight: 36, fontWeight: '700', marginTop: 8 },
  ornament: { flexDirection: 'row', alignItems: 'center', gap: 10, marginTop: 14, marginBottom: 20 },
  ornamentLine: { flex: 1, height: StyleSheet.hairlineWidth, backgroundColor: C.lineStrong },
  ornamentMark: { color: C.gold, fontSize: 15, lineHeight: 18 },
  body: { color: C.text, fontFamily: font.sans, fontSize: 17, lineHeight: 28 },
  gap: { marginTop: 16 },
  verseCard: {
    marginTop: 16,
    marginBottom: 16,
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: C.line,
    borderLeftWidth: 3,
    borderLeftColor: C.gold,
    backgroundColor: 'rgba(228,197,106,0.08)',
  },
  verse: { color: C.gold, fontFamily: font.serif, fontSize: 17, lineHeight: 28, fontStyle: 'italic' },
  verseRef: { color: C.goldDeep, fontFamily: font.sans, fontSize: 12, letterSpacing: 0.6, marginTop: 8 },
}));

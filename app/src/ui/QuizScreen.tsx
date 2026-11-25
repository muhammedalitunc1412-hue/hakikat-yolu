import React, { useMemo, useState } from 'react';
import { Platform, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { QUIZZES } from '../data/quizzes';
import { getLang, tx, ui } from '../i18n';
import type { HistEvent } from '../types';
import { Chevron, QuizIcon } from './icons';
import { recordQuiz, useMarks } from './marks';
import { C, PAGE_MAX, TOP, align, font, rowDir, themedStyles } from './theme';

const webHit = Platform.OS === 'web' ? { cursor: 'pointer' as const } : null;
const OK = '#7fc59a';
const BAD = '#e08a7a';

// Seçenek sırası her denemede karıştırılır (verideki ilk seçenek doğru cevaptır).
function shuffled(n: number): number[] {
  const a = Array.from({ length: n }, (_, i) => i);
  for (let i = n - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function QuizScreen({ ev, onBack, onOpenScene }: { ev: HistEvent; onBack: () => void; onOpenScene: (scene: number) => void }) {
  const questions = QUIZZES[ev.id] ?? [];
  const { quizBest } = useMarks();
  const [attempt, setAttempt] = useState(0);
  const orders = useMemo(() => questions.map(q => shuffled(q.options.length)), [questions, attempt]);
  const [i, setI] = useState(0);
  const [picked, setPicked] = useState<(number | null)[]>(() => questions.map(() => null));
  const [done, setDone] = useState(false);
  const total = questions.length;
  const score = picked.filter(p => p === 0).length;
  const lang = getLang();

  const restart = () => { setAttempt(a => a + 1); setPicked(questions.map(() => null)); setI(0); setDone(false); };
  const choose = (opt: number) => {
    if (picked[i] !== null) return;
    setPicked(p => p.map((v, k) => (k === i ? opt : v)));
  };
  const next = () => {
    if (i < total - 1) { setI(i + 1); return; }
    recordQuiz(ev.id, score);
    setDone(true);
  };

  const head = (
    <>
      <Pressable onPress={onBack} hitSlop={8} accessibilityRole="button" style={s.back}>
        <Text style={s.backText}>‹  {ui('quizBackStory')}</Text>
      </Pressable>
      <View style={[s.kickerRow, { flexDirection: rowDir() }]}>
        <QuizIcon size={18} />
        <Text style={s.kicker}>{ui('quizTitle').toLocaleUpperCase(lang === 'tr' || lang === 'az' ? 'tr' : undefined)}</Text>
      </View>
      <Text accessibilityRole="header" style={[s.title, align()]}>{tx(ev.title)}</Text>
      {lang !== 'tr' && lang !== 'en' && <Text style={[s.note, align()]}>{ui('quizLangNote')}</Text>}
    </>
  );

  if (total === 0) {
    return <ScrollView style={s.root} contentContainerStyle={s.page}>{head}</ScrollView>;
  }

  if (done) {
    const best = Math.max(quizBest[ev.id] ?? 0, score);
    return (
      <ScrollView style={s.root} contentContainerStyle={s.page}>
        {head}
        <View style={s.scoreCard} accessible accessibilityLabel={`${score} / ${total} ${ui('quizScore')}`}>
          <Text style={s.scoreBig}>{score} / {total}</Text>
          <Text style={s.scoreLabel}>{ui('quizScore')}</Text>
          <Text style={s.bestText}>{ui('quizBest')}: {best} / {total}</Text>
        </View>
        <Text style={[s.section, align()]}>{ui('quizReview')}</Text>
        {questions.map((q, k) => {
          const ok = picked[k] === 0;
          return (
            <View key={k} style={[s.review, { borderColor: ok ? OK : BAD }]}>
              <Text style={[s.reviewQ, align()]}>{k + 1}. {tx(q.q)}</Text>
              <Text style={[s.reviewA, align(), { color: ok ? OK : BAD }]}>{ok ? '✓ ' : '✗ '}{tx(q.options[picked[k] ?? 0])}</Text>
              {!ok && <Text style={[s.reviewA, align()]}>{ui('quizWrong')} {tx(q.options[0])}</Text>}
              <Pressable onPress={() => onOpenScene(q.scene)} accessibilityRole="button" style={({ pressed }) => [s.sceneLink, { flexDirection: rowDir() }, pressed && s.pressed, webHit]}>
                <Text style={s.sceneLinkText}>{ui('quizSeeScene')} · {ui('scene')} {q.scene + 1}</Text>
                <Chevron color={C.gold} size={14} />
              </Pressable>
            </View>
          );
        })}
        <View style={[s.actions, { flexDirection: rowDir() }]}>
          <Pressable onPress={restart} accessibilityRole="button" style={({ pressed }) => [s.btnGhost, pressed && s.pressed, webHit]}>
            <Text style={s.btnGhostText}>{ui('quizRetry')}</Text>
          </Pressable>
          <Pressable onPress={onBack} accessibilityRole="button" style={({ pressed }) => [s.btn, pressed && s.pressed, webHit]}>
            <Text style={s.btnText}>{ui('quizBackStory')}</Text>
          </Pressable>
        </View>
      </ScrollView>
    );
  }

  const q = questions[i];
  const answered = picked[i] !== null;
  return (
    <ScrollView style={s.root} contentContainerStyle={s.page}>
      {head}
      {i === 0 && picked[0] === null && <Text style={[s.note, align()]}>{ui('quizFromStory')}</Text>}
      <View style={[s.progressRow, { flexDirection: rowDir() }]}>
        <Text style={s.progressText}>{ui('quizQuestion')} {i + 1} / {total}</Text>
        <View style={[s.dots, { flexDirection: rowDir() }]}>
          {questions.map((_, k) => <View key={k} style={[s.dot, k === i && s.dotOn, k < i && { backgroundColor: picked[k] === 0 ? OK : BAD }]} />)}
        </View>
      </View>
      <Text style={[s.question, align()]} accessibilityRole="header">{tx(q.q)}</Text>
      {orders[i].map(opt => {
        const isPicked = picked[i] === opt;
        const isRight = opt === 0;
        const tone = answered && isRight ? OK : answered && isPicked ? BAD : null;
        return (
          <Pressable
            key={opt}
            onPress={() => choose(opt)}
            disabled={answered}
            accessibilityRole="button"
            accessibilityState={{ selected: isPicked, disabled: answered }}
            style={({ pressed }) => [s.option, { flexDirection: rowDir() }, tone ? { borderColor: tone, backgroundColor: tone + '22' } : null, pressed && s.pressed, webHit]}
          >
            <Text style={[s.optionText, align(), tone ? { color: C.cream } : null]}>{tx(q.options[opt])}</Text>
            {tone && <Text style={[s.mark, { color: tone }]}>{isRight ? '✓' : '✗'}</Text>}
          </Pressable>
        );
      })}
      {answered && (
        <>
          <Text style={[s.feedback, align(), { color: picked[i] === 0 ? OK : BAD }]} accessibilityLiveRegion="polite">
            {picked[i] === 0 ? ui('quizCorrect') : `${ui('quizWrong')} ${tx(q.options[0])}`}
          </Text>
          <View style={[s.actions, { flexDirection: rowDir() }]}>
            <Pressable onPress={() => onOpenScene(q.scene)} accessibilityRole="button" style={({ pressed }) => [s.btnGhost, pressed && s.pressed, webHit]}>
              <Text style={s.btnGhostText} numberOfLines={1} adjustsFontSizeToFit>{ui('quizSeeScene')}</Text>
            </Pressable>
            <Pressable onPress={next} accessibilityRole="button" style={({ pressed }) => [s.btn, pressed && s.pressed, webHit]}>
              <Text style={s.btnText} numberOfLines={1} adjustsFontSizeToFit>{i < total - 1 ? ui('quizNext') : ui('quizFinish')}</Text>
            </Pressable>
          </View>
        </>
      )}
    </ScrollView>
  );
}

const s = themedStyles(() => StyleSheet.create({
  root: { flex: 1, backgroundColor: C.bg },
  page: { paddingHorizontal: 18, paddingTop: TOP, paddingBottom: 56, width: '100%', maxWidth: PAGE_MAX, alignSelf: 'center' },
  back: { minHeight: 44, justifyContent: 'center', alignSelf: 'flex-start' },
  backText: { color: C.gold, fontFamily: font.sans, fontSize: 16, fontWeight: '700' },
  kickerRow: { alignItems: 'center', gap: 8, marginTop: 6 },
  kicker: { color: C.gold, fontFamily: font.sans, fontSize: 12, fontWeight: '700', letterSpacing: 2.4 },
  title: { color: C.cream, fontFamily: font.serif, fontSize: 26, lineHeight: 32, fontWeight: '700', marginTop: 6 },
  note: { color: C.faint, fontFamily: font.sans, fontSize: 13, lineHeight: 19, marginTop: 8 },
  progressRow: { alignItems: 'center', justifyContent: 'space-between', marginTop: 18 },
  progressText: { color: C.gold, fontFamily: font.sans, fontSize: 13, fontWeight: '800', letterSpacing: 0.6 },
  dots: { gap: 6 },
  dot: { width: 8, height: 8, borderRadius: 4, backgroundColor: C.lineStrong },
  dotOn: { backgroundColor: C.gold, width: 18 },
  question: { color: C.cream, fontFamily: font.serif, fontSize: 21, lineHeight: 29, fontWeight: '700', marginTop: 14, marginBottom: 14 },
  option: { alignItems: 'center', gap: 10, minHeight: 56, backgroundColor: C.card, borderRadius: 16, paddingHorizontal: 16, paddingVertical: 12, marginBottom: 10, borderWidth: 1.5, borderColor: C.lineStrong },
  optionText: { flex: 1, color: C.cream, fontFamily: font.sans, fontSize: 16, lineHeight: 22 },
  mark: { fontSize: 18, fontWeight: '800' },
  feedback: { fontFamily: font.sans, fontSize: 15, lineHeight: 21, fontWeight: '700', marginTop: 4 },
  actions: { gap: 10, marginTop: 16 },
  btn: { flex: 1, minHeight: 52, borderRadius: 26, backgroundColor: C.gold, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 12 },
  btnText: { color: C.ink, fontFamily: font.sans, fontSize: 16, fontWeight: '800' },
  btnGhost: { flex: 1, minHeight: 52, borderRadius: 26, borderWidth: 1.5, borderColor: C.gold, backgroundColor: 'rgba(228,197,106,0.12)', alignItems: 'center', justifyContent: 'center', paddingHorizontal: 12 },
  btnGhostText: { color: C.gold, fontFamily: font.sans, fontSize: 16, fontWeight: '800' },
  pressed: { opacity: 0.86 },
  scoreCard: { alignItems: 'center', backgroundColor: C.card, borderRadius: 22, paddingVertical: 26, marginTop: 18, borderWidth: 1, borderColor: C.gold },
  scoreBig: { color: C.gold, fontFamily: font.serif, fontSize: 48, lineHeight: 56, fontWeight: '700' },
  scoreLabel: { color: C.cream, fontFamily: font.sans, fontSize: 16, fontWeight: '700' },
  bestText: { color: C.faint, fontFamily: font.sans, fontSize: 13, marginTop: 8 },
  section: { color: C.gold, fontFamily: font.sans, fontSize: 13, fontWeight: '800', letterSpacing: 1.2, marginTop: 22, marginBottom: 8 },
  review: { backgroundColor: C.card, borderRadius: 16, padding: 14, marginBottom: 10, borderWidth: 1 },
  reviewQ: { color: C.cream, fontFamily: font.sans, fontSize: 15, lineHeight: 21, fontWeight: '700' },
  reviewA: { color: C.dim, fontFamily: font.sans, fontSize: 14, lineHeight: 20, marginTop: 6 },
  sceneLink: { alignItems: 'center', gap: 4, alignSelf: 'flex-start', minHeight: 36, marginTop: 4 },
  sceneLinkText: { color: C.gold, fontFamily: font.sans, fontSize: 13, fontWeight: '700' },
}));

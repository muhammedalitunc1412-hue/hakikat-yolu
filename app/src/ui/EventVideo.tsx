import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { VideoView, useVideoPlayer } from 'expo-video';
import { SCENE_VIDEOS } from '../data/sceneVideos';

const K = { gold: '#e6c36a', text: '#eef3f0', dim: '#9fb4b0', line: 'rgba(255,255,255,0.09)' };

// Olay sonu videosu: assets/videos/<olay-id>-video.mp4 varsa oynatılır (tam ekranda yatay döner), yoksa test yazısı.
function Player({ src, width }: { src: number; width: number }) {
  const player = useVideoPlayer(src, p => { p.loop = false; });
  return (
    <VideoView
      player={player}
      style={{ width, height: Math.round((width * 9) / 16), backgroundColor: '#000' }}
      contentFit="contain"
      nativeControls
      fullscreenOptions={{ enable: true, orientation: 'landscape' }}
    />
  );
}

export function EventVideo({ evId, width }: { evId: string; width: number }) {
  const src = SCENE_VIDEOS[evId + '-video'];
  if (src) return <Player src={src} width={width} />;
  return (
    <View style={[s.ph, { width, height: Math.round((width * 9) / 16) }]}>
      <Text style={{ color: K.gold, fontSize: 34 }}>🎬</Text>
      <Text style={s.t}>TEST VİDEOSU</Text>
      <Text style={s.d}>{evId}-video.mp4</Text>
    </View>
  );
}

const s = StyleSheet.create({
  ph: { backgroundColor: '#1b2a30', alignItems: 'center', justifyContent: 'center', borderTopWidth: 1, borderBottomWidth: 1, borderColor: K.line },
  t: { color: K.text, fontSize: 18, fontWeight: '800', marginTop: 6 },
  d: { color: K.dim, fontSize: 12, marginTop: 4 },
});

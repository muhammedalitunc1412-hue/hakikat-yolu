import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { VideoView, useVideoPlayer } from 'expo-video';
import { SCENE_VIDEOS } from '../data/sceneVideos';
import { C, font } from './theme';

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
      <Text style={{ color: C.gold, fontSize: 28 }}>▶</Text>
      <Text style={s.t}>TEST VİDEOSU</Text>
      <Text style={s.d}>{evId}-video.mp4</Text>
    </View>
  );
}

const s = StyleSheet.create({
  ph: { backgroundColor: '#10211e', alignItems: 'center', justifyContent: 'center' },
  t: { color: C.cream, fontFamily: font.sans, fontSize: 16, fontWeight: '800', marginTop: 8, letterSpacing: 1 },
  d: { color: C.dim, fontFamily: font.sans, fontSize: 12, marginTop: 4 },
});

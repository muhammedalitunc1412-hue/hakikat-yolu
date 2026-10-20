// assets/scenes görsellerini ve assets/videos videolarını tarar; src/data/sceneImages.ts ve sceneVideos.ts üretir.
// Görsel adı: <olay-id>-<sahne-no>.jpg|png|jpeg|webp  (örn. gadir-1.jpg)
// Video adı:  <olay-id>-video.mp4|webm|mov            (örn. gadir-video.mp4)
const fs = require('fs');
const path = require('path');
function scan(sub, re, out, exportName, header) {
  const dir = path.join(__dirname, '..', 'assets', sub);
  const files = fs.existsSync(dir) ? fs.readdirSync(dir).filter(f => re.test(f)).sort() : [];
  const lines = files.map(f => "  '" + f.replace(/\.[^.]+$/, '').toLowerCase() + "': require('../../assets/" + sub + '/' + f + "'),");
  const body = '// Otomatik üretilir: node tools/gen-scene-images.cjs\nexport const ' + exportName + ': Record<string, number> = {\n' + lines.join('\n') + (lines.length ? '\n' : '') + '};\n';
  fs.writeFileSync(path.join(__dirname, '..', 'src', 'data', out), body);
  console.log(files.length + ' ' + header + ' bağlandı');
}
scan('scenes', /\.(jpe?g|png|webp)$/i, 'sceneImages.ts', 'SCENE_IMAGES', 'görsel');
scan('videos', /\.(mp4|webm|mov|m4v)$/i, 'sceneVideos.ts', 'SCENE_VIDEOS', 'video');

// Kullanım: node tools/show-text.cjs <dosya...>  -> her sahne metnini (indeks: by | metin) yazar, Şii/Sünni geçenleri * ile işaretler
const fs=require('fs');
for(const f of process.argv.slice(2)){
  const L=fs.readFileSync('src/data/'+f+'.ts','utf8').split('\n');
  let n=0,by='';
  console.log('##### '+f);
  for(const l of L){
    let m=l.match(/^      by: '(\w+)'/); if(m) by=m[1];
    m=l.match(/^      text: \{ tr: '(.*)' \},$/);
    if(m){ n++; const t=m[1].split("\'").join("'"); console.log((/Şii|Sünni/.test(t)?'*':' ')+n+' ['+by+'] '+t); }
    if(/^  summary:/.test(l)){ const t=l.replace(/^  summary: \{ tr: '/,'').replace(/' \},$/,'').split("\'").join("'"); console.log((/Şii|Sünni/.test(t)?'*':' ')+'S ['+'] '+t); }
  }
}

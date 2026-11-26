import {readdir,writeFile} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import path from 'node:path';
const root=fileURLToPath(new URL('../',import.meta.url));
const folders=['01_logo','02_hero','03_about','04_farm','05_brand','06_characters','07_innovation','08_story'];
const collator=new Intl.Collator('ko',{numeric:true,sensitivity:'base'});
const images=[];
async function walk(dir){let entries;try{entries=await readdir(path.join(root,dir),{withFileTypes:true})}catch(e){if(e.code==='ENOENT')return;throw e}for(const entry of entries){if(entry.name.startsWith('.'))continue;const rel=dir+'/'+entry.name;if(entry.isDirectory())await walk(rel);else if(entry.isFile()&&/\.(jpe?g|png|webp|gif|svg)$/i.test(entry.name))images.push(rel)}}
for(const folder of folders)await walk('images/'+folder);
images.sort((a,b)=>collator.compare(a,b)|| (a<b?-1:a>b?1:0));
await writeFile(path.join(root,'images.json'),JSON.stringify({images},null,2)+'\n','utf8');
// For opening index.html directly (file://), browsers restrict fetch. Keep an equivalent fallback script.
await writeFile(path.join(root,'js','images-fallback.js'),'window.FARM_LOCAL_IMAGES = '+JSON.stringify(images).replace(/</g,'\\u003c')+';\n','utf8');
console.log(`이미지 목록 갱신: ${images.length}개`);

import assert from 'node:assert/strict';
import {execFileSync} from 'node:child_process';
const base = process.env.SOUTHGROWN_TEST_URL || 'http://127.0.0.1:5173';
if (!['localhost','127.0.0.1'].includes(new URL(base).hostname)) throw new Error('Run this against the local development server only.');
let cookie='';let checks=0;
async function call(path,body,status=200,extra={}){
 const response=await fetch(base+'/api/'+path,{headers:{'Content-Type':'application/json',...(cookie?{Cookie:cookie}:{}),...extra},method:body===undefined?'GET':'POST',body:body===undefined?undefined:JSON.stringify(body)});
 const text=await response.text();let data;try{data=JSON.parse(text);}catch{data={error:text};}assert.equal(response.status,status,JSON.stringify(data));checks++;return data;
}
await call('market');
await call('profile',{},401);
await call('threads',undefined,401);
await call('profile',{},401,{'oai-authenticated-user-id':'forged','oai-authenticated-user-email':'forged@example.test'});
const signin=await fetch(base+'/signin-with-chatgpt?return_to=/',{redirect:'manual'});cookie=signin.headers.getSetCookie().map(s=>s.split(';')[0]).join('; ');assert.ok(cookie);checks++;
await call('profile',{name:'Test patch',type:'Backyard grower',suburb:'Melbourne',postcode:'3000'},400);
await call('profile',{name:'Smoke test grower',type:'Backyard grower',suburb:'Stirling',postcode:'5152',bio:'Local development test only.'});
await call('profile',{name:'Wrong origin'},403,{Origin:'https://example.invalid'});
const png=Uint8Array.from(Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+jK1sAAAAASUVORK5CYII=','base64'));const form=new FormData();form.append('photo',new Blob([png],{type:'image/png'}),'test.png');
const upload=await fetch(base+'/api/upload',{method:'POST',headers:{Cookie:cookie},body:form});assert.equal(upload.status,200);const image=await upload.json();checks++;
const photo=await fetch(base+image.url);assert.equal(photo.status,200);assert.equal(photo.headers.get('content-type'),'image/png');checks++;
const listing={title:'Local smoke test greens',description:'Local development test only.',category:'Vegetables',price:6,unit:'bunch',quantity:3,pickup:true,delivery:false,active:true,images:[image.url]};
const saved=await call('listings',listing);assert.ok(saved.id);
await call('listings',{...listing,price:-2},400);
await call('listings',{...listing,title:'Raw cow milk'},400);
await call('listings',{...listing,id:'not-owned'},403);
await call('listings',{...listing,id:saved.id,quantity:2});
const market=await call('market');assert.equal(market.listings.find(l=>l.id===saved.id).quantity,2);checks++;
await call('favorite',{listing:saved.id,saved:true});assert.ok((await call('me')).favorites.includes(saved.id));checks++;
await call('favorite',{listing:saved.id,saved:false});
await call('threads',{listing:saved.id},400);
await call('message',{thread:'not-yours',body:'Test'},404);
const fixture={...listing,title:'Another grower’s test listing',suburb:'Stirling',postcode:'5152',deliveryFee:0,images:[image.url]};
function sql(command){execFileSync(process.execPath,['--import','./scripts/sites-env.mjs','./node_modules/wrangler/bin/wrangler.js','d1','execute','DB','--local','--config','dist/server/wrangler.json','--persist-to','.wrangler/state','--command',command],{stdio:'pipe'});}
sql(`INSERT INTO listings (id,seller,data,created) VALUES ('smoke-other-listing','smoke-other-user','${JSON.stringify(fixture).replaceAll("'","''")}','2026-10-30T00:00:00.000Z') ON CONFLICT(id) DO UPDATE SET data=excluded.data;`);
const conversation=await call('threads',{listing:'smoke-other-listing'});
await call('message',{thread:conversation.id,body:'Local test: is pickup available?'});
const inbox=await call('threads');assert.equal(inbox.threads.find(t=>t.id===conversation.id).messages.at(-1).body,'Local test: is pickup available?');checks++;
sql(`DELETE FROM messages WHERE thread IN (SELECT id FROM threads WHERE listing='smoke-other-listing'); DELETE FROM threads WHERE listing='smoke-other-listing'; DELETE FROM listings WHERE id='smoke-other-listing';`);
await call('assist',{title:'Test',description:'Test'},503);
await call('listings',{...listing,id:saved.id,active:false});
cookie='';const publicMarket=await call('market');assert.ok(!publicMarket.listings.some(l=>l.id===saved.id));checks++;
for(const path of ['/','/marketplace','/product/sample-eggs','/grower/sample-patch','/sell','/account','/messages','/about','/checkout/sample-honey']){const r=await fetch(base+path);assert.equal(r.status,200,path);checks++;}
console.log(`${checks} local checks passed: authentication, ownership, origin protection, profile and listing validation, uploads, saved food, payment-preview routes and hidden listings.`);

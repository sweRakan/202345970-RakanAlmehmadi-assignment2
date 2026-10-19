const {JSDOM}=require('jsdom');
const fs=require('fs');
const assert=require('node:assert/strict');
const root=require('node:path').resolve(__dirname, '..');
const html=fs.readFileSync(root+'/index.html','utf8');
const script=fs.readFileSync(root+'/js/script.js','utf8');
let checks=0;
function check(name,fn){fn();checks++;console.log('PASS '+name)}
function setup(saved,blocked=false){
 const dom=new JSDOM(html,{url:'http://localhost:8765',runScripts:'outside-only'});
 const w=dom.window;w.matchMedia=()=>({matches:false});
 if(saved!==undefined)w.localStorage.setItem('rakan-portfolio-filters-v1',saved);
 if(blocked)Object.defineProperty(w,'localStorage',{get(){throw new Error('blocked')}});
 w.eval(script);return w;
}
let w=setup();let q=s=>w.document.querySelector(s);
const set=(selector,value,type='input')=>{q(selector).value=value;q(selector).dispatchEvent(new w.Event(type,{bubbles:true}))};
const visible=()=>[...w.document.querySelectorAll('.project-card')].filter(x=>!x.hidden);
check('Default view has two projects and enabled controls',()=>{assert.equal(visible().length,2);assert.equal(q('#project-controls').hidden,false);assert.equal(q('#contact-submit').disabled,false)});
check('Trimmed case-insensitive search finds campus project',()=>{set('#project-search','  CAMPUS  ');assert.equal(visible().length,1);assert.match(visible()[0].textContent,/KFUPM/)});
check('Combined category and search give useful empty state',()=>{set('#project-category','website','change');assert.equal(visible().length,0);assert.equal(q('#project-empty').hidden,false);assert.equal(q('#project-count').textContent,'0 of 2 projects shown')});
check('Reset restores both projects and keyboard focus',()=>{q('#reset-projects').click();assert.equal(visible().length,2);assert.equal(w.document.activeElement,q('#project-search'));assert.equal(q('#project-empty').hidden,true)});
check('Search uses project tags',()=>{set('#project-search','JavaScript');assert.equal(visible().length,1);assert.equal(visible()[0].dataset.category,'website')});
check('Filter preferences survive a new document',()=>{const saved=w.localStorage.getItem('rakan-portfolio-filters-v1');w=setup(saved);assert.equal(q('#project-search').value,'JavaScript');assert.equal(visible().length,1)});
check('Theme toggle updates and saves accessible state',()=>{q('#theme-toggle').click();assert.equal(w.document.documentElement.dataset.theme,'dark');assert.equal(q('#theme-toggle').getAttribute('aria-pressed'),'true');assert.equal(w.localStorage.getItem('rakan-portfolio-theme'),'dark')});
for(const bad of ['{bad','null','{"query":3,"category":"all"}','{"query":"","category":"bad"}',JSON.stringify({query:'a'.repeat(121),category:'all'})]){
 check('Invalid saved filters recover: '+bad.slice(0,30),()=>{w=setup(bad);assert.equal(visible().length,2);assert.match(q('#storage-status').textContent,/could not be restored/)})
}
check('Blocked storage preserves filtering and theme interactions',()=>{w=setup(undefined,true);set('#project-search','campus');assert.equal(visible().length,1);q('#theme-toggle').click();assert.equal(w.document.documentElement.dataset.theme,'dark');assert.match(q('#storage-status').textContent,/could not save or restore/)});
w=setup();
function submit(){q('#contact-form').dispatchEvent(new w.Event('submit',{bubbles:true,cancelable:true}))}
check('Whitespace name and short message rejected',()=>{set('#name','   ');set('#email','rakan@example.com');set('#message','  short  ');submit();assert.equal(q('#name').validity.valid,false);assert.equal(q('#message').validity.valid,false);assert.equal(q('#form-status').textContent,'')});
check('Invalid email rejected',()=>{set('#name','Rakan');set('#email','bad-email');set('#message','A valid message here');submit();assert.equal(q('#email').validity.valid,false);assert.equal(q('#form-status').textContent,'')});
check('Valid form displays text-only local confirmation',()=>{set('#name','<b>Rakan</b>');set('#email','rakan@example.com');submit();assert.match(q('#form-status').textContent,/not sent or stored/);assert.equal(q('#form-status').querySelector('b'),null)});
check('Editing clears old confirmation',()=>{set('#message','Another valid message');assert.equal(q('#form-status').textContent,'')});
check('All local linked assets exist and IDs are unique',()=>{const ids=[...w.document.querySelectorAll('[id]')].map(x=>x.id);assert.equal(new Set(ids).size,ids.length);for(const e of w.document.querySelectorAll('[src],link[href]')){const v=e.getAttribute('src')||e.getAttribute('href');assert.ok(fs.existsSync(root+'/'+v),v)}});
check('No-JS document retains projects and native details',()=>{const d=new JSDOM(html).window.document;assert.equal(d.querySelectorAll('.project-card:not([hidden])').length,2);assert.equal(d.querySelectorAll('details summary').length,2);assert.equal(d.querySelector('#contact-submit').disabled,true)});
console.log(`${checks} checks passed (jsdom; not a real-browser rendering test).`);

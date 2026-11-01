(()=>{'use strict';
const SRC='<!doctype html>\n'+document.documentElement.outerHTML;
document.documentElement.classList.add('js');
const SITE={mail:'hello@efeburakvuran.com',ig:'efeburakvuran'};
const DEFAULT_PROJECTS=[
 {id:'splash-art',title:'Splash Art',cat:'splash',color:'var(--c-splash)',year:2026,role:'Key art / İllüstratör',tools:['Photoshop','CSP'],tags:['key art','sahne'],palette:['#ff4d22','#1a0a06','#f2f0ea','#e8d34a'],
  desc:{tr:'Karakter ve sahneyi tek kadrajda kuran büyük format kapak çalışmaları.',en:'Large-format key art that builds character and scene in one frame.'},
  images:[{src:'assets/works/splash-art/01.jpg',w:1600,h:1200,alt:'Splash art çalışması 1'}]},
 {id:'pixel-art',title:'Pixel Art',cat:'pixel',color:'var(--c-pixel)',year:2025,role:'Pixel artist',tools:['Aseprite','Photoshop'],tags:['sprite','2d oyun'],palette:['#e8d34a','#2a2208','#f2f0ea','#9cff52'],
  desc:{tr:'2D oyunlar için sprite, tile ve animasyon setleri.',en:'Sprites, tiles and animation sets for 2D games.'},
  images:[{src:'assets/works/pixel-art/01.png',w:1600,h:1200,alt:'Pixel art çalışması 1'}]},
 {id:'hobby-craft',title:'Terzilik & Craft',cat:'hobby',color:'var(--c-hobby)',year:2026,role:'Maker',tools:['Dikiş','El işi'],tags:['terzilik','craft'],palette:['#a8553a','#1a0f0a','#f2f0ea','#d99a7a'],
  desc:{tr:'Terzilik ve craft çalışmalarım.',en:'My tailoring and craft work.'},
  images:[{src:'assets/works/hobby/01.jpg',w:1600,h:1200,alt:'Terzilik ve craft çalışması'}]},
 {id:'environment-art',title:'Environment Art',cat:'env',color:'var(--c-env)',year:2026,role:'Environment artist',tools:['Photoshop'],tags:['ortam','arka plan'],palette:['#5f7a1d','#10140a','#f2f0ea','#b5c95a'],
  desc:{tr:'Ortam ve arka plan illüstrasyonları.',en:'Environment and background illustration.'},
  images:[{src:'assets/works/environment/01.jpg',w:1600,h:1200,alt:'Ortam çalışması'}]},
 {id:'3d-art',title:'3D Art',cat:'3d',color:'var(--c-3d)',year:2026,role:'3D artist',tools:['Blender'],tags:['model','render'],palette:['#7a4fc2','#120a1f','#f2f0ea','#b48cf0'],
  desc:{tr:'Karakter, prop ve ortam modelleme; ışık ve render çalışmaları.',en:'Character, prop and environment modeling with lighting and render work.'},
  images:[{src:'assets/works/3d-art/01.jpg',w:1600,h:1200,alt:'3D art çalışması 1'}]},
 {id:'concept-art',title:'Concept Art',cat:'concept',color:'var(--c-concept)',year:2025,role:'Konsept sanatçısı',tools:['Photoshop','Blender'],tags:['dünya','karakter'],palette:['#9cff52','#0a1a06','#f2f0ea','#35c9ff'],
  desc:{tr:'Dünya, karakter ve ortam tasarımı; fikirden üretime görsel araştırma.',en:'World, character and environment design: visual research.'},
  images:[{src:'assets/works/concept-art/01.jpg',w:1600,h:1200,alt:'Konsept sanat çalışması 1'}]},
 {id:'typography',title:'Typography',cat:'type',color:'var(--c-type)',year:2026,role:'Tipografi / Grafik tasarım',tools:['Illustrator','Photoshop'],tags:['harf','layout'],palette:['#35c9ff','#06161c','#f2f0ea','#bd63ff'],
  desc:{tr:'Harf çizimi, yerleşim ve afiş tipografisi.',en:'Lettering, layout and poster typography.'},
  images:[{src:'assets/works/typography/01.jpg',w:1600,h:1200,alt:'Tipografi çalışması 1'}]},
 {id:'vector-art',title:'Vector Art',cat:'vector',color:'var(--c-vector)',year:2025,role:'Vektör illüstratör',tools:['Illustrator'],tags:['poster','grafik'],palette:['#3b82ff','#07101f','#f2f0ea','#ff4d22'],
  desc:{tr:'Afiş ve grafik sistemleri için temiz vektör işler.',en:'Clean vector work for posters and graphic systems.'},
  images:[{src:'assets/works/vector-art/01.svg',w:1600,h:1200,alt:'Vektör çalışması 1'}]},
 {id:'branding',title:'Branding',cat:'brand',color:'var(--c-brand)',year:2026,role:'Marka tasarımı',tools:['Illustrator','After Effects'],tags:['logo','kimlik'],palette:['#bd63ff','#150a1c','#f2f0ea','#e8d34a'],
  desc:{tr:'Logo, desen ve marka kimliği sistemleri.',en:'Logo, pattern and brand identity systems.'},
  images:[{src:'assets/works/branding/01.jpg',w:1600,h:1200,alt:'Marka çalışması 1'}]}
];
let projects=[];
const AREAS=[
 {id:'splash',name:'Splash Art',color:'var(--c-splash)',sub:{tr:'Büyük format key art ve sahne illüstrasyonları',en:'Large-format key art and scene illustration'}},
 {id:'pixel',name:'Pixel Art',color:'var(--c-pixel)',sub:{tr:'Sprite, tile ve 2D oyun varlıkları',en:'Sprites, tiles and 2D game assets'}},
 {id:'3d',name:'3D Art',color:'var(--c-3d)',sub:{tr:'Karakter, prop ve ortam modelleme',en:'Character, prop and environment modeling'}},
 {id:'concept',name:'Concept Art',nl:{tr:'Konsept Sanatı'},color:'var(--c-concept)',sub:{tr:'Dünya, karakter ve ortam tasarımı',en:'World, character and environment design'}},
 {id:'env',name:'Environment Art',nl:{tr:'Ortam & Arka Plan'},color:'var(--c-env)',sub:{tr:'Ortam ve arka plan illüstrasyonları',en:'Environment and background illustration'}},
 {id:'type',name:'Typography',nl:{tr:'Tipografi'},color:'var(--c-type)',sub:{tr:'Tipografi ve yazı çalışmaları',en:'Typography and lettering'}},
 {id:'vector',name:'Vector Art',nl:{tr:'Vektör Sanatı'},color:'var(--c-vector)',sub:{tr:'Vektör illüstrasyon ve ikonografi',en:'Vector illustration and iconography'}},
 {id:'brand',name:'Branding',nl:{tr:'Marka Kimliği'},color:'var(--c-brand)',sub:{tr:'Logo ve marka kimliği',en:'Logos and brand identity'}},
 {id:'hobby',name:'Hobby & Craft',nl:{tr:'Hobi & Craft'},color:'var(--c-hobby)',sub:{tr:'Terzilik ve craft işlerim',en:'Tailoring and craft work'}}];
const T={
 tr:{skip:'İçeriğe geç',n_works:'Eserler',n_projects:'Projeler',k_projects:'02 / EKİP & MÜŞTERİ',h_projects:'ÇALIŞTIĞIM PROJELER',projects1:'Üzerinde çalıştığım oyun, marka ve ekip projeleri. İçerikler yakında eklenecek.',n_contact:'İletişim',statement:'Splash art, pixel art ve 3D ile görsel dünyalar kuruyorum.',
  k_works:'01 / PORTFOLYO',h_works:'SEÇİLİ İŞLER',hint_works:'/ ile kategoriye git',all:'Tümü',view:'İNCELE',open:'AÇ',k_about:'02 / PROFİL',h_about:'HAKKIMDA',
  about1:'Ankara’da çalışan bir 2D sanatçı ve grafik tasarımcıyım.',
  about2:'Splash art, pixel art, 3D ve marka çalışmalarıyla görsel dünyalar kuruyorum.',tools:'KULLANDIĞIM ARAÇLAR',
  k_services:'04 / NE YAPIYORUM',k_contact:'03 / İLETİŞİM',contact1:'Oyun, konsept veya marka projelerin için iletişime geç.',write:'Mail yaz',copy:'Adresi kopyala',cv:'CV indir',top:'Başa dön ↑',copied:'Adres kopyalandı',
  
  next:'Sonraki proje',year:'Yıl',role:'Rol',tools2:'Araçlar',prev:'← Önceki',nxt:'Sonraki →',close:'ESC / ×',count:'proje',subj:'Proje hakkında',
  svc:[['Illustration','Splash art, karakter ve konsept illüstrasyon.'],['Game Art','Pixel art, sprite ve 2D oyun varlıkları.'],['Branding','Logo, marka kimliği ve grafik tasarım.']]},
 en:{skip:'Skip to content',n_works:'Works',n_projects:'Projects',k_projects:'02 / TEAM & CLIENTS',h_projects:'PROJECTS I\'VE WORKED ON',projects1:'Games, brand and team projects I have worked on. Content coming soon.',n_contact:'Contact',statement:'I build visual worlds through splash art, pixel art and 3D.',
  k_works:'01 / PORTFOLIO',h_works:'SELECTED WORKS',hint_works:'press / to jump to a category',all:'All',view:'VIEW',open:'OPEN',k_about:'02 / PROFILE',h_about:'ABOUT ME',
  about1:'I am a 2D artist and graphic designer working in Ankara.',
  about2:'I build visual worlds through splash art, pixel art, 3D and branding work.',tools:'TOOLS I USE',
  k_services:'04 / WHAT I DO',k_contact:'03 / CONTACT',contact1:'Get in touch for game, concept or brand projects.',write:'Write mail',copy:'Copy address',cv:'Download CV',top:'Back to top ↑',copied:'Address copied',
  
  next:'Next project',year:'Year',role:'Role',tools2:'Tools',prev:'← Prev',nxt:'Next →',close:'ESC / ×',count:'projects',subj:'About a project',
  svc:[['Illustration','Splash art, character and concept illustration.'],['Game Art','Pixel art, sprites and 2D game assets.'],['Branding','Logos, brand identity and graphic design.']]}
};
const state={lang:'tr',filter:'all',theme:null,open:null,pushed:false,lastFocus:null};
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const t=k=>T[state.lang][k];
const store={get(k){try{return localStorage.getItem(k)}catch(e){return null}},set(k,v){try{localStorage.setItem(k,v)}catch(e){}}};
const reduce=matchMedia('(prefers-reduced-motion:reduce)').matches;

const ph=(p,i=0)=>{const o=(i%3)*-34;
 return 'data:image/svg+xml,'+encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" shape-rendering="crispEdges"><rect width="800" height="600" fill="#e6dfd0"/><circle cx="${520+i*28}" cy="190" r="62" fill="#c8201f"/><g transform="translate(${o} 0)"><path d="M0 430h40v-30h40v-50h50v-40h60v-60h50v50h50v-30h60v40h50v-60h50v70h60v60h40v30h120v100H0z" fill="#15120f" opacity=".16"/><path d="M0 470h60v-34h60v-46h40v-34h60v40h50v-30h60v50h60v-70h40v60h60v50h60v34h90v90H0z" fill="#15120f" opacity=".42"/></g><path d="M0 500h90v-20h80v20h90v-28h70v28h470v100H0z" fill="#15120f"/><rect x="24" y="24" width="752" height="552" fill="none" stroke="#c8201f" stroke-width="2"/><text x="44" y="62" fill="#15120f" font-family="monospace" font-size="18">${String(p.title).replace(/[<>&'"]/g,'').toUpperCase()} / ${String(i+1).padStart(2,'0')}</text></svg>`)};
const img=(p,i,attrs='')=>{const m=p.images[i]||{w:800,h:600,alt:p.title};return `<img src="${m.src||ph(p,i)}" alt="${esc(m.alt)}" width="${m.w}" height="${m.h}" loading="lazy" decoding="async" onerror="this.onerror=null;this.src='${ph(p,i)}'" ${attrs}>`};
const prj=id=>projects.find(p=>p.id===id);
const cnt=a=>projects.filter(p=>p.cat===a).length;




function renderStatic(){
 const sv=$('#svc');if(sv){const cols=['--c-splash','--c-pixel','--c-type'];sv.innerHTML=t('svc').map((x,i)=>`<article style="--ac:var(${cols[i]})"><h3>${x[0]}</h3><p>${x[1]}</p></article>`).join('')}
 renderWork();
}
function applyLang(){
 document.documentElement.lang=state.lang;
 $$('[data-i18n]').forEach(el=>{const v=t(el.dataset.i18n);if(typeof v==='string')el.textContent=v});
 $('#langTR').setAttribute('aria-pressed',state.lang==='tr');$('#langEN').setAttribute('aria-pressed',state.lang==='en');
 renderFilters();renderCards();renderStatic();renderLabels();updateContact();
 if(state.open){state.wk?renderWorkDrawer(state.open):renderDrawer(state.open)}
}
function setLang(l){state.lang=l;store.set('ebv-lang',l);applyLang()}
function setTheme(th){state.theme=th;document.documentElement.dataset.theme=th;$('meta[name=theme-color]').content=th==='dark'?'#0e0c0b':'#e6dfd0';store.set('ebv-theme',th)}
function updateContact(){
 const subj=encodeURIComponent('['+t('subj')+'] Efe Burak Vuran'),href=`mailto:${SITE.mail}?subject=${subj}`;
 $$('[data-site]').forEach(e=>{const k=e.dataset.site;e.textContent=SITE[k+'_'+state.lang]??SITE[k]??''});$('#cvBtn').href=SITE.cv||'#';$('#mailLink').textContent=SITE.mail;$('#mailLink').href=href;$('#mailBtn').href=href;
 $('#igLink').textContent='@'+SITE.ig;$('#igLink').href='https://instagram.com/'+SITE.ig;fabLabels();
}
function toast(m){const e=$('#toast');e.textContent=m;e.classList.add('on');clearTimeout(toast.t);toast.t=setTimeout(()=>e.classList.remove('on'),1800)}
async function copyMail(){
 try{await navigator.clipboard.writeText(SITE.mail)}catch(e){const i=document.createElement('input');i.value=SITE.mail;document.body.appendChild(i);i.select();try{document.execCommand('copy')}catch(_){}i.remove()}
 toast(t('copied'));
}

function renderLabels(){
 $('#folderList').innerHTML=AREAS.map((a,i)=>`<button role="listitem" lang="${alang(a)}" style="--ac:${a.color}" data-area="${a.id}">${String(i+1).padStart(2,'0')} / ${aname(a)}</button>`).join('');
 $$('#folderList button').forEach(b=>b.addEventListener('click',()=>setFilter(b.dataset.area,true)));
}


/* ===== EKSİK OLAN KISIMLAR: reveal, drawer, hash, ilerleme, cursor, klavye ===== */
let revIO=null;
function observeReveal(){
 if(!('IntersectionObserver'in window)||reduce){$$('.rv').forEach(e=>e.classList.add('in'));return}
 revIO=revIO||new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');revIO.unobserve(e.target);if(e.target.classList.contains('sec-head'))scramble($('.label',e.target))}}),{threshold:.08});
 $$('.rv:not(.in)').forEach(e=>revIO.observe(e));
}
let gi=0;

function openProject(id){
 if(!prj(id))return;
 if(state.open!==id)gi=0;
 if(!state.open)state.lastFocus=document.activeElement;
 state.wk=false;state.open=id;renderDrawer(id);gain(15,'prj:'+id);
 $('#drawer').hidden=false;document.body.style.overflow='hidden';$('#dClose').focus();
}
function closeProject(){
 state.open=null;$('#drawer').hidden=true;document.body.style.overflow='';
 if(/^#(project|work)=/.test(location.hash))history.replaceState(null,'',location.pathname+location.search+(state.wk?'#projects':'#works'));state.wk=false;
 if(state.lastFocus&&state.lastFocus.focus)state.lastFocus.focus();
}
function route(){const m=location.hash.match(/^#project=([\w-]+)/),w=location.hash.match(/^#work=([\w-]+)/);m?openProject(m[1]):w?openWork(w[1]):(state.open&&closeProject())}
function bindExtras(){
 addEventListener('hashchange',route);
 $('#dBody').addEventListener('click',e=>{
  if(state.wk)return workClick(e);
  const g=e.target.closest('[data-g]'),nx=e.target.closest('[data-next],[data-prev]'),zm=e.target.closest('[data-zoom],.gal img');
  if(g){const p=prj(state.open);gi=(gi+ +g.dataset.g+p.images.length)%p.images.length;renderDrawer(p.id)}
  if(nx){gi=0;location.hash='project='+(nx.dataset.next||nx.dataset.prev);$('#drawer').scrollTo(0,0)}
  if(zm){const im=$('.gal img');if(im)openZoom(im.currentSrc||im.src,(prj(state.open)||{}).title)}
 });
 addEventListener('keydown',e=>{
  if(e.key==='Escape'&&state.open)closeProject();
  else if(e.key==='/'&&!state.open&&!/INPUT|TEXTAREA/.test(document.activeElement.tagName)){e.preventDefault();$('#works').scrollIntoView({behavior:reduce?'auto':'smooth'});const c=$('.chip');c&&c.focus()}
 });
 const prog=$('#prog');
 const onScroll=()=>{const h=document.documentElement.scrollHeight-innerHeight;const r=h>0?Math.min(1,scrollY/h):0;prog.style.transform=`scaleX(${r})`;const sp=$('#scp');if(sp)sp.textContent=String(Math.round(r*100)).padStart(3,'0')};
 addEventListener('scroll',onScroll,{passive:true});onScroll();
 if('IntersectionObserver'in window){
  const links=$$('.nav a');
  const spy=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)links.forEach(a=>a.setAttribute('aria-current',a.getAttribute('href')==='#'+e.target.id))}),{rootMargin:'-45% 0px -50% 0px'});
  $$('[data-spy]').forEach(s=>spy.observe(s));
 }
 if(matchMedia('(pointer:fine)').matches){
  const cur=$('#cursor'),lab=$('span',cur);document.body.classList.add('cur-on');
  addEventListener('mousemove',e=>{cur.style.transform=`translate(${e.clientX-cur.offsetWidth/2}px,${e.clientY-cur.offsetHeight/2}px)`;
   const d=e.target.closest&&e.target.closest('[data-cur]');cur.classList.toggle('big',!!d);lab.textContent=d?d.dataset.cur:''},{passive:true});
 }
}

/* ===== AMBIENT HAREKET: scramble, yüzen glifler, saat, kart eğimi ===== */
function scramble(el){
 if(!el||reduce)return;const txt=el.textContent,ch='01<>/|_#▲◢◈';let n=0;
 const id=setInterval(()=>{n++;el.textContent=[...txt].map((c,i)=>c===' '||i<n/1.5?c:ch[Math.random()*ch.length|0]).join('');if(n>txt.length*1.5){el.textContent=txt;clearInterval(id)}},28);
}
function ambient(){
 const hero=$('#top'),fl=document.createElement('div');fl.className='float';fl.setAttribute('aria-hidden','true');
 const G='◈✦+×01{}//▲◢░',C=['--c-splash','--c-pixel','--c-concept','--c-type','--c-vector','--c-brand'],R=(a,b)=>a+Math.random()*(b-a);
 for(let i=0;i<18;i++){const g=document.createElement('span');g.className='g';g.textContent=G[R(0,G.length)|0];
  g.style.cssText=`left:${R(0,96)}%;top:${R(8,88)}%;font-size:${R(10,28)}px;color:var(${C[i%6]});--d:${R(6,46)|0};--dx:${R(-60,60)|0}px;--dy:${R(-70,70)|0}px;--r:${R(-40,40)|0}deg;--t:${R(11,26).toFixed(1)}s`;
  fl.appendChild(g)}
 hero.append(fl);
 if(!reduce)addEventListener('mousemove',e=>{fl.style.setProperty('--px',(e.clientX/innerWidth-.5)*2);fl.style.setProperty('--py',(e.clientY/innerHeight-.5)*2)},{passive:true});
 
 scramble($('.hero>div>.label'));scramble($('.hero .sub'));
 if(matchMedia('(pointer:fine)').matches&&!reduce){
  const grid=$('#cats');
  grid.addEventListener('pointermove',e=>{const c=e.target.closest('.card');if(!c)return;const r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;c.style.transform=`perspective(900px) rotateY(${(x*7).toFixed(2)}deg) rotateX(${(-y*7).toFixed(2)}deg)`});
  grid.addEventListener('pointerout',e=>{const c=e.target.closest('.card');if(c)c.style.transform=''});
 }
}

/* ===== DÜZENLEME MODU: yükle, düzenle, sakla, dışa aktar ===== */
const T0=JSON.parse(JSON.stringify(T));
const defSite=()=>({name1:'EFE BURAK',name2:'VURAN',sub:'2D ARTIST / GRAPHIC DESIGNER',sub_tr:'2D SANATÇI / GRAFİK TASARIMCI',sub_en:'2D ARTIST / GRAPHIC DESIGNER',mail:'hello@efeburakvuran.com',ig:'efeburakvuran',city:'Ankara, Türkiye',cv:'assets/efe-burak-vuran-cv.pdf',about1_tr:T0.tr.about1,about1_en:T0.en.about1,about2_tr:T0.tr.about2,about2_en:T0.en.about2,projects1_tr:T0.tr.projects1,projects1_en:T0.en.projects1});
let DB={rev:0,site:defSite(),projects:[]};let BAKED_EM=null;
function esc(s){return String(s==null?'':s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
function norm(p){const c=AREAS.find(x=>x.id===p.cat)||AREAS[0];p.cat=c.id;p.color=c.color;p.id=p.id||'p'+Date.now().toString(36)+Math.random().toString(36).slice(2,5);p.title=p.title||'Untitled';p.tools=p.tools||[];p.tags=p.tags||[];p.palette=p.palette&&p.palette.length?p.palette:['#ff1a2e','#0a0a0a','#f4efe6','#4fe3cf'];p.desc=p.desc||{tr:'',en:''};p.images=p.images||[];p.year=p.year||new Date().getFullYear();p.role=p.role||'';p.story=p.story||{tr:'',en:''};p.process=p.process||[];p.ongoing=!!p.ongoing;p.show=Object.assign({year:true,role:true,tools:true,palette:true},p.show||{});return p}
const idb={open(){return new Promise((res,rej)=>{if(!window.indexedDB)return rej('yok');const r=indexedDB.open('ebv-portfolio',1);r.onupgradeneeded=()=>r.result.createObjectStore('k');r.onsuccess=()=>res(r.result);r.onerror=()=>rej(r.error)})},
 async get(k){const d=await this.open();return new Promise(r=>{const q=d.transaction('k').objectStore('k').get(k);q.onsuccess=()=>r(q.result);q.onerror=()=>r(null)})},
 async set(k,v){const d=await this.open();return new Promise((r,j)=>{const t=d.transaction('k','readwrite');t.objectStore('k').put(v,k);t.oncomplete=()=>r(true);t.onerror=()=>j(t.error)})}};
function applySite(){
 for(const l of ['tr','en'])for(const k of ['about1','about2','projects1']){const v=DB.site[k+'_'+l];if(v)T[l][k]=v}
 Object.assign(SITE,DB.site);document.title=`${DB.site.name1} ${DB.site.name2} — 2D Artist / Graphic Designer`;
}
async function loadData(){
 let d=null;try{d=JSON.parse($('#ebv-data').textContent)}catch(e){}
 if(!d||!d.projects)d={rev:(d&&d.rev)||0,site:Object.assign(defSite(),(d&&d.site)||{}),projects:JSON.parse(JSON.stringify(DEFAULT_PROJECTS)),emaki:d&&d.emaki};
 BAKED_EM=d.emaki?JSON.parse(JSON.stringify(d.emaki)):null;try{const dr=await idb.get('draft');if(dr&&dr.projects&&dr.rev>(d.rev||0))d=dr}catch(e){}
 DB=d;DB.site=Object.assign(defSite(),DB.site);if(DB.site.sub)DB.site.sub=DB.site.sub.replace(/\s*◈\s*[\u3040-\u30ff\u4e00-\u9fff]+/g,'');if(!DB.work)DB.work=defWork();if(!DB.posters)DB.posters={};projects=DB.projects;projects.forEach(norm);applySite();
}
async function persist(){DB.rev=Date.now();try{await idb.set('draft',DB);return true}catch(e){toast('Tarayıcı depolaması kapalı — "HTML İNDİR" ile kaydet');return false}}
const refresh=()=>{applySite();applyLang()};
function dl(name,blob){const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=name;document.body.appendChild(a);a.click();setTimeout(()=>{URL.revokeObjectURL(a.href);a.remove()},800)}
function exportHTML(){
 DB.rev=Date.now();const json=JSON.stringify(DB).replace(/</g,'\\u003c');
 const out=SRC.replace(/<script[^>]*id="ebv-data"[^>]*>[\s\S]*?<\/script>/,()=>'<script type="application/json" id="ebv-data">'+json+'<\/script>');
 dl('index.html',new Blob([out],{type:'text/html'}));toast('index.html indirildi (görseller içine gömülü). Düzenli yayın için SİTE PAKETİ (ZIP) daha uygun');
}
function pick(accept,cb,multi){const i=document.createElement('input');i.type='file';i.accept=accept;i.multiple=!!multi;i.onchange=()=>cb([...i.files]);i.click()}
async function importJSON(f){try{const d=JSON.parse(await f.text());if(!d.projects)throw 0;DB=d;DB.site=Object.assign(defSite(),d.site);if(!DB.work)DB.work=defWork();if(!DB.posters)DB.posters={};projects=DB.projects;projects.forEach(norm);await persist();refresh();toast('Yedek yüklendi')}catch(e){toast('Geçersiz yedek dosyası')}}
async function resetAll(){if(!confirm('Tüm değişiklikler silinip örnek içeriğe dönülsün mü?'))return;DB={rev:Date.now(),site:defSite(),projects:JSON.parse(JSON.stringify(DEFAULT_PROJECTS)),emaki:BAKED_EM,work:defWork(),posters:{}};projects=DB.projects;projects.forEach(norm);await persist();refresh();gfx()}
function modal(html){const m=document.createElement('div');m.className='ed-modal';m.innerHTML='<div class="ed-box" role="dialog" aria-modal="true">'+html+'</div>';document.body.appendChild(m);m.close=()=>m.remove();m.addEventListener('mousedown',e=>{if(e.target===m)m.close()});return m}
async function fileToImg(file,cat){
 const rd=()=>new Promise((res,rej)=>{const r=new FileReader();r.onload=()=>res(r.result);r.onerror=rej;r.readAsDataURL(file)});
 let src=await rd();
 const el=await new Promise((res,rej)=>{const i=new Image();i.onload=()=>res(i);i.onerror=rej;i.src=src});
 let w=el.naturalWidth||1600,h=el.naturalHeight||1200;const ty=file.type;
 const keep=ty==='image/svg+xml'||(file.size<4e6&&(ty==='image/gif'||(ty==='image/png'&&cat==='pixel')));
 if(!keep){const k=Math.min(1,1800/Math.max(w,h)),c=document.createElement('canvas');c.width=Math.round(w*k);c.height=Math.round(h*k);const x=c.getContext('2d');x.imageSmoothingEnabled=cat!=='pixel';x.drawImage(el,0,0,c.width,c.height);
  src=ty==='image/png'?c.toDataURL('image/png'):c.toDataURL('image/jpeg',.86);if(ty==='image/png'&&src.length>2.4e6)src=c.toDataURL('image/jpeg',.86);w=c.width;h=c.height}
 return{src,w,h,alt:file.name.replace(/\.[^.]+$/,'')};
}
function autoPal(src){return new Promise(res=>{const i=new Image();i.onerror=()=>res(['#ff1a2e']);i.onload=()=>{try{const c=document.createElement('canvas');c.width=c.height=40;const x=c.getContext('2d');x.drawImage(i,0,0,40,40);const d=x.getImageData(0,0,40,40).data,B={};
 for(let k=0;k<d.length;k+=4){if(d[k+3]<128)continue;const q=(d[k]>>5)+','+(d[k+1]>>5)+','+(d[k+2]>>5),b=B[q]||(B[q]=[0,0,0,0]);b[0]+=d[k];b[1]+=d[k+1];b[2]+=d[k+2];b[3]++}
 res(Object.values(B).sort((a,b)=>b[3]-a[3]).slice(0,4).map(b=>'#'+[0,1,2].map(j=>Math.round(b[j]/b[3]).toString(16).padStart(2,'0')).join('')))}catch(e){res(['#ff1a2e'])}};i.src=src})}
const csv=v=>v.split(',').map(x=>x.trim()).filter(Boolean);
function openEditor(id,cat0){
 const src=id?projects.find(p=>p.id===id):null,w=src?JSON.parse(JSON.stringify(src)):norm({title:'Yeni Proje',cat:cat0||'splash',desc:{tr:'',en:''}});
 const M=modal(`<h3 class="ed-h">${src?'PROJEYİ DÜZENLE':'YENİ PROJE'}</h3>
 <div class="ed-grid"><div><label>Başlık</label><input id="e_title"></div><div><label>Kategori (renk)</label><select id="e_cat">${AREAS.map(c=>`<option value="${c.id}">${c.name}</option>`).join('')}</select></div>
 <div><label>Yıl</label><input id="e_year" type="number"></div><div><label>Rol</label><input id="e_role"></div>
 <div><label>Araçlar (virgülle)</label><input id="e_tools"></div><div><label>Etiketler (virgülle)</label><input id="e_tags"></div><div><label>Durum</label><select id="e_ong"><option value="0">Tamamlandı</option><option value="1">Devam ediyor</option></select></div></div><div class="ed-checks"><b>Çekmecede göster</b><label><input type="checkbox" id="e_sy"> Yıl</label><label><input type="checkbox" id="e_sr"> Rol</label><label><input type="checkbox" id="e_st"> Araçlar</label><label><input type="checkbox" id="e_sp"> Renk paleti</label></div>
 <label>Palet (hex, virgülle) <button class="ed-btn" id="e_auto" type="button">GÖRSELDEN AL</button></label><input id="e_pal">
 <label>Açıklama (TR)</label><textarea id="e_dtr" rows="3"></textarea><label>Açıklama (EN)</label><textarea id="e_den" rows="3"></textarea>
 <label>Görseller — ilki kapak olur</label><div class="ed-drop" id="e_drop">+ GÖRSEL EKLE / SÜRÜKLE BIRAK</div><div class="ed-imgs" id="e_imgs"></div>
 <h4 class="ed-sec">HİKAYE & ÇİZİM SÜRECİ</h4><label>Hikaye (TR) — paragraflar arasına boş satır bırak</label><textarea id="e_str" rows="5"></textarea><label>Hikaye (EN)</label><textarea id="e_sen" rows="5"></textarea>
 <label>Çizim süreci — adımlar sırayla (eskiz → final), çoklu seçim</label><div class="ed-drop" id="e_pdrop">+ SÜREÇ GÖRSELLERİ EKLE / SÜRÜKLE BIRAK</div><div class="ed-imgs" id="e_pimgs"></div>
 <div class="ed-actions"><button class="ed-btn pri" id="e_save">KAYDET</button>${src?'<button class="ed-btn" id="e_up" title="Yukarı taşı">↑</button><button class="ed-btn" id="e_dn" title="Aşağı taşı">↓</button><button class="ed-btn dng" id="e_del">SİL</button>':''}<button class="ed-btn" id="e_x">KAPAT</button></div>`);
 const q=s=>$(s,M);q('#e_title').value=w.title;q('#e_cat').value=w.cat;q('#e_year').value=w.year;q('#e_role').value=w.role;q('#e_tools').value=w.tools.join(', ');q('#e_tags').value=w.tags.join(', ');q('#e_pal').value=w.palette.join(', ');q('#e_dtr').value=w.desc.tr||'';q('#e_den').value=w.desc.en||'';q('#e_str').value=(w.story||{}).tr||'';q('#e_sen').value=(w.story||{}).en||'';q('#e_ong').value=w.ongoing?'1':'0';const sh0=w.show||{};q('#e_sy').checked=sh0.year!==false;q('#e_sr').checked=sh0.role!==false;q('#e_st').checked=sh0.tools!==false;q('#e_sp').checked=sh0.palette!==false;w.process=w.process||[];imgManager(M,'#e_pdrop','#e_pimgs',w.process,'adım açıklaması (eskiz, çizgi, renk…)');
 const draw=()=>{q('#e_imgs').innerHTML=w.images.map((m,i)=>`<div class="ed-img"><img src="${esc(m.src)}" alt=""><input data-alt="${i}" value="${esc(m.alt)}" placeholder="alt metin"><div class="ed-row"><button class="ed-btn" data-m="${i}:-1">←</button><button class="ed-btn" data-m="${i}:1">→</button><button class="ed-btn" data-m="${i}:d" title="İndir">⬇</button><button class="ed-btn dng" data-m="${i}:x">×</button></div></div>`).join('')};draw();
 const add=async fl=>{for(const f of fl){if(!/^image\//.test(f.type))continue;const first=!w.images.length;try{w.images.push(await fileToImg(f,q('#e_cat').value));if(first)q('#e_pal').value=(await autoPal(w.images[0].src)).join(', ')}catch(e){toast('Okunamadı: '+f.name)}}draw()};
 const dz=q('#e_drop');dz.onclick=()=>pick('image/*',add,true);
 dz.ondragover=e=>{e.preventDefault();dz.classList.add('over')};dz.ondragleave=()=>dz.classList.remove('over');dz.ondrop=e=>{e.preventDefault();dz.classList.remove('over');add([...e.dataTransfer.files])};
 q('#e_imgs').addEventListener('click',e=>{const b=e.target.closest('[data-m]');if(!b)return;const[i,d]=b.dataset.m.split(':'),n=+i;if(d==='d'){dlAsset(w.images[n].src,(w.title||'gorsel')+'-'+(n+1));return}if(d==='x')w.images.splice(n,1);else{const j=n+ +d;if(j>=0&&j<w.images.length)[w.images[n],w.images[j]]=[w.images[j],w.images[n]]}draw()});
 q('#e_imgs').addEventListener('input',e=>{if(e.target.dataset.alt!=null)w.images[+e.target.dataset.alt].alt=e.target.value});
 q('#e_auto').onclick=async()=>{if(w.images[0])q('#e_pal').value=(await autoPal(w.images[0].src)).join(', ')};
 const read=()=>{w.title=q('#e_title').value.trim()||'Untitled';w.cat=q('#e_cat').value;w.year=+q('#e_year').value||new Date().getFullYear();w.role=q('#e_role').value;w.tools=csv(q('#e_tools').value);w.tags=csv(q('#e_tags').value);w.palette=csv(q('#e_pal').value).filter(h=>/^#[0-9a-f]{3,8}$/i.test(h));w.desc={tr:q('#e_dtr').value,en:q('#e_den').value};w.story={tr:q('#e_str').value,en:q('#e_sen').value};w.ongoing=q('#e_ong').value==='1';w.show={year:q('#e_sy').checked,role:q('#e_sr').checked,tools:q('#e_st').checked,palette:q('#e_sp').checked};norm(w)};
 q('#e_save').onclick=async()=>{read();const i=DB.projects.findIndex(x=>x.id===w.id);i<0?DB.projects.push(w):DB.projects[i]=w;projects=DB.projects;if(await persist()){M.close();refresh();toast('Kaydedildi ✓')}};
 q('#e_x').onclick=()=>M.close();
 if(src){const mv=async d=>{const i=DB.projects.findIndex(x=>x.id===w.id),j=i+d;if(j<0||j>=DB.projects.length)return;[DB.projects[i],DB.projects[j]]=[DB.projects[j],DB.projects[i]];projects=DB.projects;await persist();refresh();toast('Taşındı')};
  q('#e_up').onclick=()=>mv(-1);q('#e_dn').onclick=()=>mv(1);
  q('#e_del').onclick=async()=>{if(!confirm('Bu proje silinsin mi?'))return;DB.projects=DB.projects.filter(x=>x.id!==w.id);projects=DB.projects;await persist();M.close();refresh()}}
}
const SF=[['name1','Ad (hero 1. satır)'],['name2','Soyad (hero 2. satır)'],['sub_tr','Alt başlık (TR)'],['sub_en','Alt başlık (EN)'],['mail','E-posta'],['ig','Instagram kullanıcı adı'],['city','Şehir'],['cv','CV dosyası (yol veya URL)'],['about1_tr','İsmin altındaki yazı 1 (TR)',1],['about1_en','İsmin altındaki yazı 1 (EN)',1],['about2_tr','İsmin altındaki yazı 2 (TR)',1],['about2_en','İsmin altındaki yazı 2 (EN)',1],['projects1_tr','Çalıştığım projeler giriş yazısı (TR)',1],['projects1_en','Çalıştığım projeler giriş yazısı (EN)',1]];
function siteEditor(){
 const M=modal('<h3 class="ed-h">SİTE METİNLERİ</h3>'+SF.map(([k,l,t])=>`<label>${l}</label>${t?`<textarea rows="2" data-k="${k}"></textarea>`:`<input data-k="${k}">`}`).join('')+'<div class="ed-actions"><button class="ed-btn pri" id="s_save">KAYDET</button><button class="ed-btn" id="s_x">KAPAT</button></div>');
 $$('[data-k]',M).forEach(e=>e.value=DB.site[e.dataset.k]||'');
 $('#s_x',M).onclick=()=>M.close();
 $('#s_save',M).onclick=async()=>{$$('[data-k]',M).forEach(e=>DB.site[e.dataset.k]=e.value);if(await persist()){M.close();refresh();toast('Kaydedildi ✓')}};
}
function bindEditor(){
 document.addEventListener('click',e=>{const ca=e.target.closest&&e.target.closest('.cadd');if(ca&&state.edit){e.preventDefault();e.stopPropagation();openEditor(null,ca.dataset.addcat);return}const c=e.target.closest&&e.target.closest('.wcard');if(!c||!state.edit)return;e.preventDefault();e.stopPropagation();workEditor(c.dataset.w)},true);
 addEventListener('keydown',e=>{
  if(e.key==='Escape'){const m=$$('.ed-modal').pop();if(m)m.remove()}
  if((e.ctrlKey||e.metaKey)&&e.shiftKey&&e.key.toLowerCase()==='e'){e.preventDefault();setEdit(!state.edit)}
 });
 if(/[?&]edit|#edit/.test(location.search+location.hash))setEdit(true);
}

/* ===== 絵巻 PIXEL OYUN SİSTEMİ: emaki panorama, XP/seviye, başarımlar, sprite ===== */
let SHEET='';
const cv=n=>getComputedStyle(document.documentElement).getPropertyValue(n).trim();
let G=(()=>{try{return JSON.parse(store.get('ebv-game'))||{}}catch(e){return{}}})();G.xp=G.xp||0;G.seen=G.seen||{};G.ach=G.ach||{};
const LV=()=>1+Math.floor(G.xp/50);
function hud(){const e=$('#gLv');if(!e)return;e.textContent=String(LV()).padStart(2,'0');$('#gBar').style.width=((G.xp%50)*2)+'%';$('#gXp').textContent=G.xp+' XP'}
function gain(n,key){if(key){if(G.seen[key])return;G.seen[key]=1}const a=LV();G.xp+=n;store.set('ebv-game',JSON.stringify(G));hud();if(LV()>a)toast((state.lang==='tr'?'SEVİYE ATLADIN ▲ LV ':'LEVEL UP ▲ LV ')+String(LV()).padStart(2,'0'));if(projects.length&&projects.every(p=>G.seen['prj:'+p.id]))unlock('all',state.lang==='tr'?'★ TÜM ESERLER GÖRÜLDÜ':'★ ALL WORKS VIEWED',50)}
function unlock(k,name,xp){if(G.ach[k])return;G.ach[k]=1;gain(xp);toast(name)}
function spriteSheet(){
 const c=document.createElement('canvas');c.width=32;c.height=12;const x=c.getContext('2d'),ink=cv('--wash'),red=cv('--redrgb');
 const ell=(o,cx,cy,rx,ry)=>{for(let y=0;y<12;y++)for(let X=0;X<16;X++)if(((X+.5-cx)/rx)**2+((y+.5-cy)/ry)**2<=1)x.fillRect(o+X,y,1,1)};
 const tri=(o,a,b,d)=>{const s=(p,q,r)=>(p[0]-r[0])*(q[1]-r[1])-(q[0]-r[0])*(p[1]-r[1]);for(let y=0;y<12;y++)for(let X=0;X<16;X++){const p=[X+.5,y+.5],d1=s(p,a,b),d2=s(p,b,d),d3=s(p,d,a);if(!((d1<0||d2<0||d3<0)&&(d1>0||d2>0||d3>0)))x.fillRect(o+X,y,1,1)}};
 [0,16].forEach((o,f)=>{x.fillStyle=`rgb(${ink})`;ell(o,7,7,5.5,3);ell(o,12,5,2.4,2.2);x.fillRect(o+14,5,2,1);x.fillRect(o+14,6,1,1);tri(o,[0,5],[5,6],[3,10]);f?tri(o,[4,8],[10,8],[4,12]):tri(o,[4,6],[10,6],[3,0]);x.fillStyle=`rgb(${red})`;x.fillRect(o+13,4,1,1)});
 return c.toDataURL();
}
function emDraw(){
 const wash=cv('--wash')||'21,18,15',red=cv('--redrgb')||'200,32,31',H=120,Wd={emFar:760,emMid:1000,emNear:1400,emFront:1400,emHaze:1400},ink=a=>`rgba(${wash},${a})`,rd=a=>`rgba(${red},${a})`,B=[[0,.5],[.75,.25]];
 let sd=11;const rnd=()=>(sd=(sd*16807)%2147483647)/2147483647;
 const ctx=id=>{const c=$('#'+id);if(!c)return null;c.style.imageRendering='';c.width=Wd[id];c.height=H;const x=c.getContext('2d');x.imageSmoothingEnabled=false;return x};
 const ridge=(x,base,amp,off,a)=>{x.fillStyle=ink(a);for(let i=0;i<x.canvas.width;i++){const h=Math.round(base-amp*(.5*Math.sin(i*.021+off)+.3*Math.sin(i*.053+off*2)+.2*Math.sin(i*.11+off*3)+.45*Math.max(0,Math.sin(i*.009+off))));x.fillRect(i,h+4,1,H);for(let k=0;k<4;k++)if(B[k&1][i&1]<(k+1)/4)x.fillRect(i,h+k,1,1)}};
 const mist=(x,y,x0,x1,h)=>{x.globalCompositeOperation='destination-out';x.fillStyle='#000';x.fillRect(x0+3,y,x1-x0-6,h);x.fillRect(x0+1,y+1,x1-x0-2,h-2);x.fillRect(x0,y+2,x1-x0,h-4);x.globalCompositeOperation='source-over';x.fillStyle=ink(.3);x.fillRect(x0+3,y,x1-x0-6,1);x.fillRect(x0+3,y+h-1,x1-x0-6,1);x.fillRect(x0,y+2,1,h-4);x.fillRect(x1-1,y+2,1,h-4)};
 const pine=(x,px,y,s)=>{x.fillRect(px,y-s,1,s);for(let r=0;r<4;r++)x.fillRect(px-(r+1),y-s-8+r*2,2*(r+1)+1,2)};
 const pagoda=(x,px,y)=>{for(let t=0;t<3;t++){const hw=9-t*2,yy=y-8-t*9;x.fillRect(px-hw-3,yy,2*hw+7,2);x.fillRect(px-hw+1,yy+2,2*hw-1,7)}x.fillRect(px,y-42,1,9)};
 const disk=(x,cx,cy,r)=>{for(let yy=-r;yy<=r;yy++)for(let xx=-r;xx<=r;xx++)if(xx*xx+yy*yy<=r*r)x.fillRect(cx+xx,cy+yy,1,1)};
 const fe=$('#emaki');fe&&fe.classList.toggle('cust-far',!!cu('far'));cu('front')?custom('emFront','front'):ctx('emFront');cu('haze')?custom('emHaze','haze'):ctx('emHaze');
 let x=cu('far')?custom('emFar','far'):ctx('emFar');
 if(x){ridge(x,84,50,1.3,.16);x.fillStyle=rd(.92);disk(x,560,38,15);x.fillStyle=ink(.5);for(let i=0;i<7;i++){const bx=Math.round(rnd()*700),by=14+Math.round(rnd()*30);x.fillRect(bx,by,2,1);x.fillRect(bx+2,by+1,1,1);x.fillRect(bx+3,by,2,1)}mist(x,52,60,330,9);mist(x,66,420,700,7)}
 x=cu('mid')?custom('emMid','mid'):ctx('emMid');
 if(x){ridge(x,100,36,4.1,.34);x.fillStyle=ink(.55);pagoda(x,470,84);for(let i=0;i<22;i++)pine(x,40+Math.round(rnd()*920),90+Math.round(rnd()*6),5+Math.round(rnd()*5));mist(x,74,200,560,8);mist(x,92,640,960,7)}
 x=cu('near')?custom('emNear','near'):ctx('emNear');
 if(x){ridge(x,112,9,7.7,.9);x.fillStyle=ink(.9);for(let i=0;i<46;i++){const rx=Math.round(rnd()*1390);x.fillRect(rx,H-16-Math.round(rnd()*9),1,12)}
  x.fillStyle=rd(1);x.fillRect(640,84,3,28);x.fillRect(662,84,3,28);x.fillRect(636,80,33,3);x.fillRect(639,88,27,2);x.fillRect(630,92,2,2);x.fillRect(670,92,2,2);x.fillRect(150,96,7,7);
  x.fillStyle=rd(.7);x.fillRect(0,H-3,1400,1);x.fillRect(0,H-9,1400,1)}
}
let emMx=0;
function emUpdate(){
 const s=$('#emaki');if(!s)return;const r=s.parentElement.getBoundingClientRect(),vw=innerWidth,Hs=Math.round(Math.max(320,Math.min(r.height*.85,vw*.3)));
 s.style.setProperty('--hs',Hs+'px');const p=Math.min(1,Math.max(0,-r.top/Math.max(1,r.height)));
 for(const [id,sp] of [['emFar',.2],['emMid',.4],['emHaze',.6],['emNear',.8],['emFront',1]]){const c=$('#'+id);if(!c)continue;const mu=(v=>v==null?1:v)((emk().lspeed||{})[id.slice(2).toLowerCase()]),T=Math.max(0,c.offsetWidth-vw),f=Math.min(1,.1+p*sp*mu*.9);c.style.transform=`translateX(${-(T*f)-emMx*28*sp*mu}px)`}
}
function gfx(){
 SHEET=spriteSheet();['#pcrow','#emCrow'].forEach(s=>{const e=$(s);if(e)e.style.backgroundImage=`url(${SHEET})`});spriteCustom();
 const c=document.createElement('canvas');c.width=c.height=24;const x=c.getContext('2d');x.fillStyle=`rgb(${cv('--redrgb')})`;
 for(let y=0;y<24;y++)for(let X=0;X<24;X++)if((X-11.5)**2+(y-11.5)**2<=121)x.fillRect(X,y,1,1);
 const sun=$('.sun');if(sun)sun.style.backgroundImage=`url(${c.toDataURL()})`;emDraw();ribbon();ornaments();bands();paintOrn();emUpdate();
}
const emk=()=>{const E=DB.emaki||(DB.emaki={layers:{}});return E._v2?E:emNorm(E)};
const cu=k=>(emk().layers||{})[k];
function custom(id,k){const c=$('#'+id),im=new Image();im.onload=()=>{c.width=im.naturalWidth;c.height=im.naturalHeight;const x=c.getContext('2d');x.imageSmoothingEnabled=emk().pixel===false;x.drawImage(im,0,0);c.style.imageRendering=emk().pixel===false?'auto':'pixelated';emUpdate()};im.src=cu(k).src;return null}
async function fileToLayer(file){
 const rd=()=>new Promise((res,rej)=>{const r=new FileReader();r.onload=()=>res(r.result);r.onerror=rej;r.readAsDataURL(file)});
 let src=await rd();const im=await new Promise((res,rej)=>{const i=new Image();i.onload=()=>res(i);i.onerror=rej;i.src=src});let w=im.naturalWidth||1000,h=im.naturalHeight||300;
 if(file.size>6e6&&file.type!=='image/svg+xml'){const k=Math.min(1,4000/w),c=document.createElement('canvas');c.width=Math.round(w*k);c.height=Math.round(h*k);c.getContext('2d').drawImage(im,0,0,c.width,c.height);src=c.toDataURL('image/png');w=c.width;h=c.height}
 return{src,w,h,name:file.name.replace(/\.[^.]+$/,'')};
}
/* ===== ANİMASYON KARELERİ, ŞERİT, ZIP, ASSET KÜTÜPHANESİ ===== */
function emNorm(E){
 E.layers=E.layers||{};
 if(E.sprite&&E.sprite.src&&!E.crow)E.crow={frames:[{src:E.sprite.src,sheet:E.sprite.frames||1}],mode:'forward',fps:E.sprite.fps||10,h:E.sprite.h||40,pixel:E.sprite.pixel===true};
 if(!E.rib){const R={layers:{}},old=Object.assign({},E.ribbons||{});if(E.ribbon&&!old.rb2)old.rb2=E.ribbon;
  for(const k of ['rb1','rb2','rb3'])if(old[k]&&old[k].src)R.layers[k]={kind:'strip',frames:[{src:old[k].src,w:old[k].w,h:old[k].h}],mode:'forward',fps:8};
  if(E.ribSprite&&E.ribSprite.src)R.layers.rb3={kind:'character',frames:[{src:E.ribSprite.src,sheet:E.ribSprite.frames||1}],mode:'forward',fps:E.ribSprite.fps||10,x:E.ribSprite.x==null?18:E.ribSprite.x,y:E.ribSprite.y||0};
  R.scaleMode='int';R.scale=2;R.speed=E.ribSpeed||0;R.mirror=!!E.ribMirror;R.pixel=E.ribPixel!==false;E.rib=R}
 ['sprite','ribbons','ribbon','ribSprite','ribPixel','ribMirror','ribH','ribSpeed'].forEach(k=>delete E[k]);E._v2=1;return E;
}
const ANIM_MODES=[['forward','İleri'],['reverse','Geri'],['pingpong','Ping-pong (ileri-geri)'],['random','Rastgele']];
const MIMEX={png:'image/png',jpg:'image/jpeg',jpeg:'image/jpeg',webp:'image/webp',gif:'image/gif',svg:'image/svg+xml'};
function seqOf(n,mode){const a=[...Array(n).keys()];if(n<2)return[0];if(mode==='reverse')return a.reverse();if(mode==='pingpong')return a.concat(a.slice(1,-1).reverse());return a}
const ld=src=>new Promise(r=>{const i=new Image();i.onload=()=>r(i);i.onerror=()=>r(null);i.src=src});
async function expandFrames(frames){const out=[];for(const f of frames){const im=await ld(f.src);if(!im)continue;const W=im.naturalWidth,H=im.naturalHeight;
 if(f.sheet>1){const fw=W/f.sheet;for(let i=0;i<f.sheet;i++)out.push({src:f.src,W,H,sx:i*fw,fw,fh:H})}else out.push({src:f.src,W,H,sx:0,fw:W,fh:H})}return out}
const bgOf=(fr,k,px)=>`width:${fr.fw*k}px;height:${fr.fh*k}px;background:url("${fr.src}") ${-fr.sx*k}px 0/${fr.W*k}px ${fr.H*k}px no-repeat;image-rendering:${px?'pixelated':'auto'}`;
function frameNode(fr,k,px){const d=document.createElement('div');d.style.cssText='position:absolute;left:0;bottom:0;'+bgOf(fr,k,px);return d}
function tileNode(fr,k,px){const d=document.createElement('div');d.style.cssText='flex:none;'+bgOf(fr,k,px);return d}
function playFrames(nodes,mode,fps){const n=nodes.length,show=i=>nodes.forEach((d,j)=>d.style.visibility=j===i?'visible':'hidden');show(0);if(n<2||reduce)return 0;
 const seq=seqOf(n,mode);let t=0;return setInterval(()=>{if(mode==='random')show(Math.random()*n|0);else{t=(t+1)%seq.length;show(seq[t])}},1000/(fps||10))}
function extOf(src){const m=/^data:image\/([a-z0-9+.-]+)/i.exec(src||'');if(m){const t=m[1].toLowerCase();return t==='jpeg'?'jpg':t==='svg+xml'?'svg':t}const x=/\.(png|jpe?g|webp|gif|svg)(\?|$)/i.exec(src||'');return x?x[1].toLowerCase().replace('jpeg','jpg'):'png'}
async function dlAsset(src,name){const nm=/\.\w{2,4}$/.test(name)?name:name+'.'+extOf(src);try{dl(nm,await (await fetch(src)).blob())}catch(e){const a=document.createElement('a');a.href=src;a.download=nm;document.body.appendChild(a);a.click();a.remove()}}
function dataBytes(src){const i=src.indexOf(','),h=src.slice(0,i),d=src.slice(i+1);if(/;base64/.test(h)){const s=atob(d),u=new Uint8Array(s.length);for(let j=0;j<s.length;j++)u[j]=s.charCodeAt(j);return u}return new TextEncoder().encode(decodeURIComponent(d))}
const b64=u=>{let s='';for(let i=0;i<u.length;i+=0x8000)s+=String.fromCharCode.apply(null,u.subarray(i,i+0x8000));return btoa(s)};
async function splitSheet(f){const im=await ld(f.src),n=f.sheet,fw=im.naturalWidth/n,out=[];for(let i=0;i<n;i++){const c=document.createElement('canvas');c.width=fw;c.height=im.naturalHeight;c.getContext('2d').drawImage(im,i*fw,0,fw,c.height,0,0,fw,c.height);out.push({src:c.toDataURL('image/png'),w:fw,h:c.height,name:'kare-'+(i+1)})}return out}
/* --- hero karga --- */
let crowTimer=0;
async function spriteCustom(){
 const e=$('#emCrow');if(!e)return;clearInterval(crowTimer);const C=emk().crow;
 if(!C||!(C.frames||[]).length){e.innerHTML='';['width','height','backgroundSize','animation','backgroundPosition','imageRendering'].forEach(k=>e.style[k]='');return}
 const fr=await expandFrames(C.frames);if(!fr.length)return;const fh=Math.max(...fr.map(f=>f.fh)),fw=Math.max(...fr.map(f=>f.fw)),k=(C.h||40)/fh;
 e.innerHTML='';e.style.backgroundImage='none';e.style.animation='none';e.style.backgroundSize='';e.style.width=fw*k+'px';e.style.height=fh*k+'px';
 crowTimer=playFrames(fr.map(f=>{const n=frameNode(f,k,C.pixel===true);e.appendChild(n);return n}),C.mode,C.fps||10);
}
/* --- alt şerit --- */
let ribTok=0,ribTimers=[];
async function ribbon(){
 const el=$('#rib');if(!el)return;const E=emk(),R=E.rib||{layers:{}},tok=++ribTok;ribTimers.forEach(clearInterval);ribTimers=[];
 const vw=innerWidth,px=R.pixel!==false,mi=!!R.mirror,keys=['rb1','rb2','rb3'].filter(k=>R.layers&&R.layers[k]&&(R.layers[k].frames||[]).length);
 if(!keys.length){
  const c=document.createElement('canvas');c.width=48;c.height=24;const x=c.getContext('2d'),w=cv('--wash')||'21,18,15',r=cv('--redrgb')||'200,32,31';
  x.fillStyle=`rgb(${r})`;for(let y=0;y<24;y++)for(let X=0;X<48;X++)if((X-23.5)**2+(y-11.5)**2<=64)x.fillRect(X,y,1,1);
  x.fillStyle=`rgba(${w},.8)`;for(let i=0;i<8;i++){const a=i*Math.PI/4;for(const d of [11,12])x.fillRect(Math.round(23.5+Math.cos(a)*d),Math.round(11.5+Math.sin(a)*d),1,1)}
  const fr={src:c.toDataURL(),W:48,H:24,sx:0,fw:48,fh:24},n=Math.ceil(vw/96)+1;el.innerHTML='';el.style.setProperty('--rbh','48px');
  const l=document.createElement('div');l.className='rib-l';const t=document.createElement('div');t.className='rib-t';t.style.height='48px';t.style.animationDuration=(n*96/30)+'s';
  for(let j=0;j<n*2;j++)t.appendChild(tileNode(fr,2,true));l.appendChild(t);el.appendChild(l);return}
 const LS=await Promise.all(keys.map(async k=>({L:R.layers[k],fr:await expandFrames(R.layers[k].frames)})));
 if(tok!==ribTok)return;el.innerHTML='';
 const live=LS.filter(x=>x.fr.length);if(!live.length)return;
 const strips=live.filter(x=>x.L.kind!=='character'),chars=live.filter(x=>x.L.kind==='character'),hOf=a=>Math.max(...a.flatMap(x=>x.fr.map(f=>f.fh)));
 const maxH=hOf(live),refH=strips.length?hOf(strips):maxH,maxW=Math.max(0,...strips.flatMap(x=>x.fr.map(f=>f.fw)));
 const target=Math.max(90,Math.min(140,vw*.085));let k=px?Math.max(1,Math.round(target/refH)):target/refH;
 if(R.scaleMode==='fit'&&maxW)k=vw/maxW;else if(R.scaleMode==='manual'&&R.scale>0)k=R.scale;
 el.style.setProperty('--rbh',Math.round(maxH*k)+'px');
 const S=R.speed>0?R.speed:(chars.length?70:40),ns=strips.length;
 strips.forEach((x,i)=>{const sp=x.L.speed>0?x.L.speed:(ns===1?S:S*(.25+.75*i/(ns-1))),aw=x.fr[0].fw*k;let n=Math.max(1,Math.ceil(vw/aw)+1);if(mi&&n%2)n++;
  const nodes=x.fr.map(fr=>{const l=document.createElement('div');l.className='rib-l';const t=document.createElement('div');t.className='rib-t'+(mi?' mir':'');t.style.height=Math.round(fr.fh*k)+'px';t.style.animationDuration=(n*aw/sp)+'s';
   for(let j=0;j<n*2;j++)t.appendChild(tileNode(fr,k,px));l.appendChild(t);el.appendChild(l);return l});
  ribTimers.push(playFrames(nodes,x.L.mode,x.L.fps||8))});
 chars.forEach(x=>{const fw=Math.max(...x.fr.map(f=>f.fw))*k,fh=Math.max(...x.fr.map(f=>f.fh))*k,d=document.createElement('div');d.className='rib-ch';
  d.style.cssText=`width:${fw}px;height:${fh}px;left:${x.L.x==null?18:x.L.x}%;bottom:${(x.L.y||0)*k}px`;
  const nodes=x.fr.map(fr=>{const n=frameNode(fr,k,px);d.appendChild(n);return n});el.appendChild(d);ribTimers.push(playFrames(nodes,x.L.mode,x.L.fps||10))});
}
/* --- animasyon paneli: çoklu dosya, sıralama, mod, fps --- */
function animPanel(host,A,o){
 A.frames=A.frames||[];A.mode=A.mode||'forward';A.fps=A.fps||10;if(o.kind)A.kind=A.kind||'strip';if(o.h&&!A.h)A.h=40;if(o.pos){A.x=A.x==null?18:A.x;A.y=A.y||0}
 host.className='ed-ap';const MODE=ANIM_MODES.map(([v,l])=>`<option value="${v}">${l}</option>`).join('');
 host.innerHTML=`<div class="ed-aph"><b>${o.title}</b><small>${o.hint||''}</small></div><div class="ed-grid">
 ${o.kind?'<div><label>Davranış</label><select data-f="kind"><option value="strip">Kayan şerit (tekrar eder)</option><option value="character">Sabit karakter (yerinde animasyon)</option></select></div>':''}
 <div><label>Oynatma</label><select data-f="mode">${MODE}</select></div><div><label>FPS</label><input data-f="fps" type="number" min="1" max="60"></div>
 ${o.h?'<div><label>Yükseklik (px)</label><input data-f="h" type="number" min="8"></div>':''}
 ${o.pix?'<div><label>Çizim stili</label><select data-f="pixel"><option value="1">Pixel (keskin)</option><option value="0">Pürüzsüz</option></select></div>':''}
 ${o.pos?'<div><label>Yatay konum (%)</label><input data-f="x" type="number" min="0" max="95"></div><div><label>Yükseklik ofseti (kaynak px)</label><input data-f="y" type="number"></div>':''}${o.extra||''}</div>
 <div class="ed-row" style="margin-top:10px"><button class="ed-btn pri" data-a="add">+ DOSYA EKLE (çoklu seçim)</button><button class="ed-btn dng" data-a="clear">TEMİZLE</button></div>
 <div class="ed-drop" data-a="add">veya dosyaları buraya sürükle-bırak</div><div class="ed-imgs ed-frames"></div>`;
 const q=s=>$(s,host);
 $$('[data-f]',host).forEach(e=>{const k=e.dataset.f;e.value=k==='pixel'?(A.pixel===true?'1':'0'):A[k];e.addEventListener('change',()=>{A[k]=k==='pixel'?e.value==='1':e.type==='number'?+e.value:e.value})});
 const draw=()=>{q('.ed-frames').innerHTML=A.frames.map((f,i)=>`<div class="ed-img"><img src="${esc(f.src)}" alt=""><small>${i+1}. ${esc(f.name||'')}${f.sheet>1?' · sheet ('+f.sheet+' kare)':''}</small><div class="ed-row"><button class="ed-btn" data-m="${i}:-1">←</button><button class="ed-btn" data-m="${i}:1">→</button><button class="ed-btn" data-m="${i}:d" title="İndir">⬇</button>${f.sheet>1?`<button class="ed-btn" data-m="${i}:s">BÖL</button>`:''}<button class="ed-btn dng" data-m="${i}:x">×</button></div></div>`).join('')};draw();
 const add=async fl=>{const L=[...fl].filter(f=>/^image\//.test(f.type)).sort((a,b)=>a.name.localeCompare(b.name,undefined,{numeric:true}));for(const f of L){try{A.frames.push(await fileToLayer(f))}catch(e){toast('Okunamadı: '+f.name)}}draw()};
 host.addEventListener('click',async e=>{const b=e.target.closest('[data-m]'),a=e.target.closest('[data-a]');
  if(a&&a.dataset.a==='add')pick('image/*',add,true);if(a&&a.dataset.a==='clear'){A.frames=[];draw()}
  if(b){const[i,d]=b.dataset.m.split(':'),n=+i;
   if(d==='x')A.frames.splice(n,1);else if(d==='d'){dlAsset(A.frames[n].src,(A.frames[n].name||'kare-'+(n+1)));return}
   else if(d==='s')A.frames.splice(n,1,...await splitSheet(A.frames[n]));else{const j=n+ +d;if(j>=0&&j<A.frames.length)[A.frames[n],A.frames[j]]=[A.frames[j],A.frames[n]]}draw()}});
 const dz=q('.ed-drop');dz.ondragover=e=>{e.preventDefault();dz.classList.add('over')};dz.ondragleave=()=>dz.classList.remove('over');dz.ondrop=e=>{e.preventDefault();dz.classList.remove('over');add(e.dataTransfer.files)};
}
function emakiEditor(){
 const E=JSON.parse(JSON.stringify(emk()));E.layers=E.layers||{};E.rib=E.rib||{layers:{}};E.rib.layers=E.rib.layers||{};E.crow=E.crow||{frames:[],mode:'pingpong',fps:10,h:40,pixel:false};
 const slot=(k,l,h)=>`<div class="ed-slot"><label>${l}</label><small>${h}</small><div class="ed-prev" id="pv_${k}"></div><div class="ed-row"><button class="ed-btn" data-up="${k}">YÜKLE</button><button class="ed-btn" data-dl="${k}" title="İndir">⬇</button><button class="ed-btn dng" data-rm="${k}">KALDIR</button></div><label class="ed-sp">Kaydırma hızı ×<input type="number" step="0.1" min="0" data-spd="${k}"></label></div>`;
 const M=modal(`<h3 class="ed-h">SAHNE & ŞERİT</h3><p class="ed-help">Her bölümde <b>istediğin kadar ayrı dosya</b> yükleyebilirsin: dosyalar sırayla animasyon karelerini oluşturur (dosya adındaki sıraya göre dizilir; <b>←→</b> ile değiştirebilirsin). Aynı pikselden çizdiğin her şey aynı ölçekte görünür.</p>
 <h4 class="ed-sec">① HERO SAHNESİ · 5 KATMAN (katman başına tek görsel)</h4><div class="ed-slots">${slot('far','1 · ARKA','gökyüzü')}${slot('mid','2 · DAĞ','dağ')}${slot('haze','3 · ARA','bulut, sis')}${slot('near','4 · ÖN','zemin, ağaçlar')}${slot('front','5 · EN ÖN','sis')}</div>
 <div class="ed-grid"><div><label>Sahne çizim stili</label><select id="m_px"><option value="1">Pixel (keskin)</option><option value="0">Pürüzsüz (illüstrasyon)</option></select></div></div>
 <h4 class="ed-sec">② HERO KARGASI (animasyon)</h4><div id="ap_crow"></div>
 <h4 class="ed-sec">③ ALT ŞERİT (hero'nun altındaki akan bant)</h4>
 <div class="ed-grid"><div><label>Ölçek modu</label><select id="m_sm"><option value="int">Otomatik (tam sayı, keskin)</option><option value="fit">Ekran genişliğine sığdır</option><option value="manual">Elle (×)</option></select></div><div><label>Elle ölçek (×, ondalık olabilir)</label><input id="m_sc" type="number" step="0.1" min="0.1"></div><div><label>Şerit hızı (px/sn, 0 = otomatik)</label><input id="m_spd" type="number" min="0"></div><div><label>Çizim stili</label><select id="m_pxs"><option value="1">Pixel (keskin)</option><option value="0">Pürüzsüz</option></select></div><div><label>Şerit döngüsü</label><select id="m_mir"><option value="0">Düz (kesintisiz çizim)</option><option value="1">Ayna (dikiş görünmesin)</option></select></div></div>
 <div id="ap_rb1"></div><div id="ap_rb2"></div><div id="ap_rb3"></div>
 <h4 class="ed-sec">④ DESEN ŞERİTLERİ (eski kayan yazıların yeri)</h4><p class="ed-help">Boş bırakırsan Japon ornament deseni (dalga, kenevir yaprağı) kayar. Kendi animasyonlu desenini kare kare yükleyebilirsin.</p><div id="ap_pb1"></div><div id="ap_pb2"></div>
 <div class="ed-actions"><button class="ed-btn pri" id="m_save">KAYDET</button><button class="ed-btn" id="m_x">KAPAT</button></div>`);
 const q=s=>$(s,M);
 E.crow.speed=E.crow.speed||1;animPanel(q('#ap_crow'),E.crow,{title:'HERO KARGASI',hint:'ekranda imleci izleyen karakter',h:1,pix:1,extra:'<div><label>Uçuş hızı (×, 1 = normal)</label><input data-f="speed" type="number" step="0.1" min="0.1"></div>'});
 ['rb1','rb2','rb3'].forEach((k,i)=>animPanel(q('#ap_'+k),(E.rib.layers[k]=E.rib.layers[k]||{frames:[],kind:i<2?'strip':'character',mode:'forward',fps:10}),{title:'ŞERİT '+(i+1)+' · '+['ARKA','ORTA','ÖN'][i],hint:i<2?'tek dosya = kayan arka plan':'çok dosya + "Sabit karakter" = animasyonlu karakter',kind:1,pos:1,extra:'<div><label>Kaydırma hızı (px/sn, 0 = otomatik)</label><input data-f="speed" type="number" min="0"></div>'}));
 E.bands=E.bands||{};const BX='<div><label>Hız (px/sn)</label><input data-f="speed" type="number" min="1"></div><div><label>Yön</label><select data-f="dir"><option value="l">Sola</option><option value="r">Sağa</option></select></div><div><label>Döngü</label><select data-f="mir"><option value="0">Düz</option><option value="1">Ayna</option></select></div>';
 ['pb1','pb2'].forEach((k,i)=>animPanel(q('#ap_'+k),(E.bands[k]=E.bands[k]||{frames:[],mode:'forward',fps:8,speed:24,dir:'l',mir:'0',h:40,pixel:false}),{title:'DESEN ŞERİDİ '+(i+1),hint:i?'iletişim bölümünün üstü':'hero altı',h:1,pix:1,extra:BX}));
 const R=E.rib;E.lspeed=E.lspeed||{};$$('[data-spd]',M).forEach(i=>{const v=E.lspeed[i.dataset.spd];i.value=v==null?1:v});q('#m_px').value=E.pixel===false?'0':'1';q('#m_sm').value=R.scaleMode||'int';q('#m_sc').value=R.scale||2;q('#m_spd').value=R.speed||0;q('#m_pxs').value=R.pixel===false?'0':'1';q('#m_mir').value=R.mirror?'1':'0';
 const pv=()=>['far','mid','haze','near','front'].forEach(k=>q('#pv_'+k).innerHTML=E.layers[k]?`<img src="${esc(E.layers[k].src)}" alt="">`:'<small>otomatik</small>');pv();
 M.addEventListener('click',async e=>{const u=e.target.closest('[data-up]'),r=e.target.closest('[data-rm]'),d=e.target.closest('[data-dl]');
  if(r){delete E.layers[r.dataset.rm];pv()}
  if(d&&E.layers[d.dataset.dl])dlAsset(E.layers[d.dataset.dl].src,'sahne-'+d.dataset.dl);
  if(u){const k=u.dataset.up;pick('image/*',async f=>{if(!f[0])return;try{const a=await fileToLayer(f[0]);E.layers[k]={src:a.src,w:a.w,h:a.h,name:a.name};pv()}catch(x){toast('Okunamadı')}})}});
 q('#m_x').onclick=()=>M.close();M.addEventListener('input',e=>{const k=e.target.dataset&&e.target.dataset.spd;if(k)E.lspeed[k]=+e.target.value});
 q('#m_save').onclick=async()=>{E.pixel=q('#m_px').value==='1';R.scaleMode=q('#m_sm').value;R.scale=+q('#m_sc').value||2;R.speed=+q('#m_spd').value||0;R.pixel=q('#m_pxs').value==='1';R.mirror=q('#m_mir').value==='1';E._v2=1;DB.emaki=E;if(await persist()){M.close();gfx();toast('Sahne ve şerit güncellendi ✓')}};
}
/* --- asset listesi, kütüphane, ZIP --- */
function assetList(D){const out=[],em=D.emaki||{},pad=n=>String(n).padStart(2,'0'),slug=s=>String(s).toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'')||'proje';
 const LN={far:'1-arka-gokyuzu',mid:'2-dag',haze:'3-ara-sis',near:'4-on-plan',front:'5-en-on'};
 for(const k in LN)if(em.layers&&em.layers[k])out.push({o:em.layers[k],f:'hero-sahne',n:LN[k],lab:'Hero sahne · '+LN[k]});
 ((em.crow&&em.crow.frames)||[]).forEach((f,i)=>out.push({o:f,f:'hero-karga',n:'kare-'+pad(i+1),lab:'Hero karga · kare '+(i+1)}));
 const RL=(em.rib&&em.rib.layers)||{};for(const k of ['rb1','rb2','rb3'])((RL[k]&&RL[k].frames)||[]).forEach((f,i)=>out.push({o:f,f:'serit/'+k,n:'kare-'+pad(i+1),lab:'Şerit '+k.slice(2)+' · kare '+(i+1)}));
 (D.work||[]).forEach(w=>(w.images||[]).forEach((m,i)=>out.push({o:m,f:'calistigim-projeler/'+slug(w.title),n:'gorsel-'+pad(i+1),lab:'Çalıştığım proje · '+w.title+' · görsel '+(i+1)})));
 (D.projects||[]).forEach(p=>(p.images||[]).forEach((m,i)=>out.push({o:m,f:'projeler/'+slug(p.title),n:'gorsel-'+pad(i+1),lab:p.title+' · görsel '+(i+1)})));
 Object.keys(D.posters||{}).forEach(k=>out.push({o:D.posters[k],f:'kategori-posterleri',n:k,lab:'Kategori posteri · '+k}));
 (D.projects||[]).forEach(p=>(p.process||[]).forEach((m,i)=>out.push({o:m,f:'projeler/'+slug(p.title)+'/surec',n:'adim-'+pad(i+1),lab:p.title+' · süreç '+(i+1)})));
 Object.keys(em.bands||{}).forEach(b=>((em.bands[b]||{}).frames||[]).forEach((f,i)=>out.push({o:f,f:'desen-seritleri/'+b,n:'kare-'+pad(i+1),lab:'Desen şeridi '+b.slice(2)+' · kare '+(i+1)})));
 return out}
function assetLib(){
 emk();const M=modal('<h3 class="ed-h">ASSET KÜTÜPHANESİ</h3><p class="ed-help">Sitedeki tüm görseller burada. ⬇ ile tek tek indir, ↻ ile yenisini yükleyip değiştir.</p><div class="ed-menu" id="lib"></div><div class="ed-actions"><button class="ed-btn" id="l_x">KAPAT</button></div>');
 const A=assetList(DB),draw=()=>{$('#lib',M).innerHTML=A.map((a,i)=>{const kb=/^data:/.test(a.o.src||'')?Math.round(a.o.src.length*.75/1024)+' KB':'dosya yolu';return `<div class="ed-asset"><img src="${esc(a.o.src)}" alt=""><div><b>${esc(a.lab)}</b><br><small>${a.o.w||'?'}×${a.o.h||'?'} · ${kb}</small></div><div class="ed-row"><button class="ed-btn" data-d="${i}">⬇</button><button class="ed-btn" data-r="${i}">↻</button></div></div>`}).join('')||'<small>Henüz görsel yok</small>'};draw();
 M.addEventListener('click',e=>{const d=e.target.closest('[data-d]'),r=e.target.closest('[data-r]');
  if(d){const a=A[+d.dataset.d];dlAsset(a.o.src,a.f.replace(/\//g,'-')+'-'+a.n)}
  if(r){const a=A[+r.dataset.r];pick('image/*',async f=>{if(!f[0])return;try{const x=await fileToLayer(f[0]);Object.assign(a.o,{src:x.src,w:x.w,h:x.h});delete a.o.sheet;await persist();draw();refresh();gfx()}catch(err){toast('Okunamadı')}})}});
 $('#l_x',M).onclick=()=>M.close();
}
const crcT=(()=>{const t=[];for(let n=0;n<256;n++){let c=n;for(let k=0;k<8;k++)c=c&1?0xEDB88320^(c>>>1):c>>>1;t[n]=c>>>0}return t})();
const crc32=u=>{let c=-1;for(let i=0;i<u.length;i++)c=crcT[(c^u[i])&255]^(c>>>8);return(c^-1)>>>0};
function zipStore(files){const enc=new TextEncoder(),parts=[],cen=[];let off=0;
 for(const f of files){const nm=enc.encode(f.name),crc=crc32(f.data),sz=f.data.length;
  const h=new DataView(new ArrayBuffer(30));h.setUint32(0,0x04034b50,true);h.setUint16(4,20,true);h.setUint16(6,0x0800,true);h.setUint16(12,0x21,true);h.setUint32(14,crc,true);h.setUint32(18,sz,true);h.setUint32(22,sz,true);h.setUint16(26,nm.length,true);
  parts.push(new Uint8Array(h.buffer),nm,f.data);
  const c=new DataView(new ArrayBuffer(46));c.setUint32(0,0x02014b50,true);c.setUint16(4,20,true);c.setUint16(6,20,true);c.setUint16(8,0x0800,true);c.setUint16(14,0x21,true);c.setUint32(16,crc,true);c.setUint32(20,sz,true);c.setUint32(24,sz,true);c.setUint16(28,nm.length,true);c.setUint32(42,off,true);
  cen.push(new Uint8Array(c.buffer),nm);off+=30+nm.length+sz}
 const cs=cen.reduce((a,b)=>a+b.length,0),e=new DataView(new ArrayBuffer(22));e.setUint32(0,0x06054b50,true);e.setUint16(8,files.length,true);e.setUint16(10,files.length,true);e.setUint32(12,cs,true);e.setUint32(16,off,true);
 return new Blob([...parts,...cen,new Uint8Array(e.buffer)],{type:'application/zip'})}
async function unzip(buf){const v=new DataView(buf),u=new Uint8Array(buf);let e=u.length-22;while(e>=0&&v.getUint32(e,true)!==0x06054b50)e--;if(e<0)throw new Error('zip');
 const n=v.getUint16(e+10,true);let p=v.getUint32(e+16,true);const out={},dec=new TextDecoder();
 for(let i=0;i<n;i++){const meth=v.getUint16(p+10,true),cs=v.getUint32(p+20,true),nl=v.getUint16(p+28,true),el=v.getUint16(p+30,true),cl=v.getUint16(p+32,true),lo=v.getUint32(p+42,true),name=dec.decode(u.subarray(p+46,p+46+nl));
  const ds=lo+30+v.getUint16(lo+26,true)+v.getUint16(lo+28,true);let d=u.subarray(ds,ds+cs);
  if(meth===8)d=new Uint8Array(await new Response(new Blob([d]).stream().pipeThrough(new DecompressionStream('deflate-raw'))).arrayBuffer());
  if(!name.endsWith('/'))out[name]=d;p+=46+nl+el+cl}
 return out}
async function exportZip(){
 emk();const D=JSON.parse(JSON.stringify(DB)),files=[],used={};
 assetList(D).forEach(a=>{const o=a.o;if(!/^data:/.test(o.src||''))return;const ex=extOf(o.src);let path=`assets/${a.f}/${a.n}.${ex}`,c=1;while(used[path])path=`assets/${a.f}/${a.n}_${++c}.${ex}`;used[path]=1;files.push({name:path,data:dataBytes(o.src)});o.src=path});
 D.rev=Date.now();const enc=new TextEncoder(),json=JSON.stringify(D).replace(/</g,'\\u003c');
 const html=SRC.replace(/<script[^>]*id="ebv-data"[^>]*>[\s\S]*?<\/script>/,()=>'<script type="application/json" id="ebv-data">'+json+'<\/script>');
 files.unshift({name:'index.html',data:enc.encode(html)},{name:'portfolyo.json',data:enc.encode(JSON.stringify(D,null,1))},{name:'OKU-BENI.txt',data:enc.encode('SİTE PAKETİ\r\n\r\n1) Bu ZIP\'i aç.\r\n2) index.html dosyasını ve assets klasörünü GitHub deposuna yükle (Add file > Upload files). Aynı adlı dosyaların üzerine yazılır, klasörler birleşir.\r\n3) style/ ve script/ klasörlerine dokunmana gerek yok.\r\n\r\nportfolyo.json: tüm metin ve ayarların kopyası (düzenleme modunda "ZIP YÜKLE" ile geri yüklenebilir).\r\n')});
 dl('site-paketi.zip',zipStore(files));toast(`Site paketi indirildi · ${files.length-3} yeni görsel · index.html + assets/`);
}
async function importZip(file){try{const F=await unzip(await file.arrayBuffer()),dec=new TextDecoder(),j=F['portfolyo.json'];if(!j)throw new Error('json');
 const D=JSON.parse(dec.decode(j));if(D.emaki)emNorm(D.emaki);
 assetList(D).forEach(a=>{const f=F[a.o.src];if(f)a.o.src='data:'+(MIMEX[extOf(a.o.src)]||'image/png')+';base64,'+b64(f)});
 DB=D;DB.site=Object.assign(defSite(),D.site);if(!DB.work)DB.work=defWork();if(!DB.posters)DB.posters={};projects=DB.projects;projects.forEach(norm);await persist();refresh();gfx();toast('ZIP yüklendi ✓')}catch(e){toast('ZIP okunamadı (portfolyo.json bulunamadı?)')}}
function moreMenu(){
 const M=modal(`<h3 class="ed-h">DAHA FAZLA</h3><div class="ed-menu">
 <button class="ed-btn" data-x="json">YEDEK (JSON) İNDİR<small>Tüm içerik ve görseller tek dosyada</small></button>
 <button class="ed-btn" data-x="jsonin">YEDEK (JSON) YÜKLE</button>
 <button class="ed-btn" data-x="draft">TASLAĞI SİL · YAYINDAKİ HALE DÖN<small>Bu tarayıcıdaki kaydı siler, dosyaya gömülü sürümü gösterir</small></button>
 <button class="ed-btn dng" data-x="reset">SIFIRLA (örnek içerik)</button>
 <p class="ed-help">Kısayol: Ctrl/⌘+Shift+E düzenleme modunu açar ve kapatır; adrese ?edit eklemek de aynı işi görür.</p></div><div class="ed-actions"><button class="ed-btn" id="x_x">KAPAT</button></div>`);
 M.onclick=e=>{const b=e.target.closest('[data-x]');if(!b)return;({json:()=>dl('ebv-yedek.json',new Blob([JSON.stringify(DB)],{type:'application/json'})),jsonin:()=>pick('.json',f=>importJSON(f[0])),
  draft:async()=>{if(confirm('Bu tarayıcıdaki taslak silinsin mi?')){try{await idb.set('draft',null)}catch(x){}location.reload()}},reset:()=>{M.close();resetAll()}})[b.dataset.x]()};
 $('#x_x',M).onclick=()=>M.close();
}
function setEdit(on){
 state.edit=on;document.body.classList.toggle('editing',on);let b=$('#edBar');
 if(!on){b&&b.remove();return}
 if(b)return;b=document.createElement('div');b.id='edBar';b.className='ed-bar';
 b.innerHTML='<span class="ed-note">✎ DÜZENLEME MODU — bir karta tıkla · değişiklikler bu tarayıcıda saklanır, yayın için “SİTE PAKETİ”</span><div class="ed-row"><button class="ed-btn pri" data-a="add">+ PROJE</button><button class="ed-btn" data-a="addwork">+ ÇALIŞTIĞIM PROJE</button><button class="ed-btn" data-a="site">METİNLER</button><button class="ed-btn" data-a="emaki">SAHNE & ŞERİT</button><button class="ed-btn" data-a="lib">ASSET\'LER</button><button class="ed-btn pri" data-a="zip">SİTE PAKETİ (ZIP)</button><button class="ed-btn" data-a="zipin">ZIP YÜKLE</button><button class="ed-btn" data-a="gh">GITHUB'DAN İÇE AKTAR</button><button class="ed-btn" data-a="html">HTML İNDİR</button><button class="ed-btn" data-a="more">☰ DAHA FAZLA</button><button class="ed-btn dng" data-a="exit">ÇIKIŞ</button></div>';
 document.body.appendChild(b);
 b.addEventListener('click',e=>{const a=e.target.closest('[data-a]');if(!a)return;({add:()=>openEditor(),addwork:()=>workEditor(),site:siteEditor,emaki:emakiEditor,lib:assetLib,zip:exportZip,zipin:()=>pick('.zip,application/zip',f=>f[0]&&importZip(f[0])),gh:ghImport,html:exportHTML,more:moreMenu,exit:()=>setEdit(false)})[a.dataset.a]()});
 toast('Düzenleme modu açık');
}
/* ===== ÇALIŞTIĞIM PROJELER ===== */
const DEFAULT_WORK=[
 {id:'w1',title:'01',studio:'',role:'',year:'',link:'',desc:{tr:'İçerik yakında eklenecek.',en:'Content coming soon.'},images:[]},
 {id:'w2',title:'02',studio:'',role:'',year:'',link:'',desc:{tr:'İçerik yakında eklenecek.',en:'Content coming soon.'},images:[]},
 {id:'w3',title:'03',studio:'',role:'',year:'',link:'',desc:{tr:'İçerik yakında eklenecek.',en:'Content coming soon.'},images:[]}];
const defWork=()=>JSON.parse(JSON.stringify(DEFAULT_WORK));

function workEditor(id){
 DB.work=DB.work||[];const src=id&&id!=='new'?DB.work.find(x=>x.id===id):null;
 const w=src?JSON.parse(JSON.stringify(src)):{id:'w'+Date.now().toString(36),title:'',studio:'',role:'',year:String(new Date().getFullYear()),link:'',desc:{tr:'',en:''},images:[]};
 const M=modal(`<h3 class="ed-h">${src?'ÇALIŞTIĞIM PROJEYİ DÜZENLE':'YENİ ÇALIŞTIĞIM PROJE'}</h3>
 <div class="ed-grid"><div><label>Proje adı</label><input id="w_title"></div><div><label>Stüdyo / müşteri</label><input id="w_studio"></div><div><label>Rolüm</label><input id="w_role"></div><div><label>Yıl</label><input id="w_year"></div><div><label>Durum</label><select id="w_ong"><option value="0">Tamamlandı</option><option value="1">Şu an üzerinde çalışıyorum</option></select></div></div>
 <label>Bağlantı (isteğe bağlı)</label><input id="w_link" placeholder="https://">
 <label>Açıklama (TR)</label><textarea id="w_dtr" rows="3"></textarea><label>Açıklama (EN)</label><textarea id="w_den" rows="3"></textarea>
 <label>Görseller — ilki kapak (çoklu seçim)</label><div class="ed-drop" id="w_drop">+ GÖRSELLERİ SEÇ / SÜRÜKLE-BIRAK</div><div class="ed-imgs" id="w_imgs"></div>
 <div class="ed-actions"><button class="ed-btn pri" id="w_save">KAYDET</button>${src?'<button class="ed-btn" id="w_up" title="Yukarı taşı">↑</button><button class="ed-btn" id="w_dn" title="Aşağı taşı">↓</button><button class="ed-btn dng" id="w_del">SİL</button>':''}<button class="ed-btn" id="w_x">KAPAT</button></div>`);
 const q=s=>$(s,M);['title','studio','role','year','link'].forEach(k=>q('#w_'+k).value=w[k]||'');q('#w_ong').value=w.ongoing?'1':'0';q('#w_dtr').value=w.desc.tr||'';q('#w_den').value=w.desc.en||'';
 const draw=()=>{q('#w_imgs').innerHTML=w.images.map((m,i)=>`<div class="ed-img"><img src="${esc(m.src)}" alt=""><input data-alt="${i}" value="${esc(m.alt||'')}" placeholder="alt metin"><div class="ed-row"><button class="ed-btn" data-m="${i}:-1">←</button><button class="ed-btn" data-m="${i}:1">→</button><button class="ed-btn" data-m="${i}:d" title="İndir">⬇</button><button class="ed-btn dng" data-m="${i}:x">×</button></div></div>`).join('')};draw();
 const add=async fl=>{const L=[...fl].filter(f=>/^image\//.test(f.type)).sort((a,b)=>a.name.localeCompare(b.name,undefined,{numeric:true}));for(const f of L){try{const a=await fileToLayer(f);a.alt=a.name;w.images.push(a)}catch(e){toast('Okunamadı: '+f.name)}}draw()};
 const dz=q('#w_drop');dz.onclick=()=>pick('image/*',add,true);dz.ondragover=e=>{e.preventDefault();dz.classList.add('over')};dz.ondragleave=()=>dz.classList.remove('over');dz.ondrop=e=>{e.preventDefault();dz.classList.remove('over');add(e.dataTransfer.files)};
 q('#w_imgs').addEventListener('click',e=>{const b=e.target.closest('[data-m]');if(!b)return;const[i,d]=b.dataset.m.split(':'),n=+i;
  if(d==='d'){dlAsset(w.images[n].src,(w.title||'gorsel')+'-'+(n+1));return}if(d==='x')w.images.splice(n,1);else{const j=n+ +d;if(j>=0&&j<w.images.length)[w.images[n],w.images[j]]=[w.images[j],w.images[n]]}draw()});
 q('#w_imgs').addEventListener('input',e=>{if(e.target.dataset.alt!=null)w.images[+e.target.dataset.alt].alt=e.target.value});
 q('#w_save').onclick=async()=>{w.title=q('#w_title').value.trim()||'Proje';w.studio=q('#w_studio').value.trim();w.role=q('#w_role').value.trim();w.year=q('#w_year').value.trim();w.link=q('#w_link').value.trim();w.ongoing=q('#w_ong').value==='1';w.desc={tr:q('#w_dtr').value,en:q('#w_den').value};
  const i=DB.work.findIndex(x=>x.id===w.id);i<0?DB.work.push(w):DB.work[i]=w;if(await persist()){M.close();refresh();toast('Kaydedildi ✓')}};
 q('#w_x').onclick=()=>M.close();
 if(src){const mv=async d=>{const i=DB.work.findIndex(x=>x.id===w.id),j=i+d;if(j<0||j>=DB.work.length)return;[DB.work[i],DB.work[j]]=[DB.work[j],DB.work[i]];await persist();refresh();toast('Taşındı')};
  q('#w_up').onclick=()=>mv(-1);q('#w_dn').onclick=()=>mv(1);
  q('#w_del').onclick=async()=>{if(!confirm('Bu proje silinsin mi?'))return;DB.work=DB.work.filter(x=>x.id!==w.id);await persist();M.close();refresh()}}
}
/* ===== KATEGORİ BÖLÜMLERİ, ORNAMENTLER, MÜREKKEP, HİKAYE/SÜREÇ ===== */
const CAT_T={tr:{story:'Hikaye',proc:'Çizim süreci',storyhint:'Bu çalışmaya hikaye ve çizim süreci eklemek için düzenleme modunda “DÜZENLE”ye bas.',ongoing:'DEVAM EDİYOR',pieces:'çalışma',soon:'Yakında eklenecek',addhere:'BU KATEGORİYE EKLE'},en:{story:'Story',proc:'Drawing process',storyhint:'To add a story and drawing process to this piece, press “EDIT” in edit mode.',ongoing:'ONGOING',pieces:'works',soon:'Coming soon',addhere:'ADD TO THIS CATEGORY'}};
const ct=k=>CAT_T[state.lang][k];
function renderFilters(){$('#filters').innerHTML=AREAS.map(a=>`<button class="chip" lang="${alang(a)}" data-f="${a.id}" style="--ac:${a.color}">${aname(a)}</button>`).join('')}
function setFilter(id){const el=document.getElementById('cat-'+id);if(el)el.scrollIntoView({behavior:reduce?'auto':'smooth',block:'start'})}
function applyFilter(){}
function renderCards(){
 const L=state.lang;
 $('#cats').innerHTML=AREAS.map((a,ci)=>{const list=projects.filter(p=>p.cat===a.id);
  const cards=list.map((p,i)=>`<button class="card rv" data-id="${p.id}" data-cat="${p.cat}" data-cur="${t('view')}" style="--ac:${p.color}" aria-label="${esc(p.title)}, ${p.year}">
  <span class="crop a"></span><span class="crop b"></span><span class="crop c"></span><span class="crop d"></span>
  <span class="art">${img(p,0)}</span>${p.ongoing?`<span class="ong card-ong">● ${ct('ongoing')}</span>`:''}
  <span class="meta"><span><span class="label yr">${String(i+1).padStart(2,'0')}${(p.show||{}).year!==false?' / '+p.year:''}</span><span class="ttl">${esc(p.title)}</span><span class="label">${esc(p.tags.join(' / '))}</span></span><span aria-hidden="true">↗</span></span></button>`).join('');
  return `<section class="cblock" id="cat-${a.id}" style="--ac:${a.color}">${posterHTML(a)}<div class="cat-side"><header class="cat-head rv"><span class="seal">${String(ci+1).padStart(2,'0')}</span><div><h3 lang="${alang(a)}">${aname(a)}</h3><p>${a.sub[L]}</p></div><span class="label cat-n">${list.length?String(list.length).padStart(2,'0')+' '+ct('pieces'):''}</span></header><div class="orn" style="color:var(--ac)" aria-hidden="true"></div></div><div class="cgrid">${cards||`<div class="cempty">${ct('soon')}</div>`}<button class="cadd" data-addcat="${a.id}">+ ${ct('addhere')}</button></div></section>`}).join('');
 paintOrn();observeReveal();
}
/* --- Japon ornamentleri: seigaiha (dalga), asanoha (kenevir yaprağı), shippo (yedi hazine) --- */
const svgURI=(w,h,b)=>'data:image/svg+xml,'+encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">${b}</svg>`);
function ornTile(kind,col,bg){
 if(kind==='wave'){let b='';for(const y of [-10,0,10,20,30]){const o=((y/10)%2+2)%2?20:0;for(let k=-1;k<=2;k++){const cx=o+40*k;b+=`<circle cx="${cx}" cy="${y}" r="20" fill="${bg}" stroke="${col}" stroke-width="1.2"/>`+[15,10,5].map(r=>`<circle cx="${cx}" cy="${y}" r="${r}" fill="none" stroke="${col}" stroke-width="1"/>`).join('')}}return{src:svgURI(40,20,b),w:40,h:20}}
 if(kind==='asa')return{src:svgURI(48,48,`<path d="M0 0L48 48M48 0L0 48M24 0V48M0 24H48M24 0L48 24L24 48L0 24ZM12 12H36V36H12Z" fill="none" stroke="${col}" stroke-width="1"/>`),w:48,h:48};
 return{src:svgURI(48,48,[[0,0],[48,0],[0,48],[48,48],[24,24]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="24" fill="none" stroke="${col}" stroke-width="1.2"/><circle cx="${x}" cy="${y}" r="16" fill="none" stroke="${col}" stroke-width="1"/>`).join('')),w:48,h:48};
}
const ORN_COL=()=>({ink:`rgba(${cv('--wash')||'21,18,15'},.55)`,bg:cv('--bg')||'#e6dfd0',red:`rgb(${cv('--redrgb')||'200,32,31'})`});
function ornaments(){const C=ORN_COL(),R=document.documentElement.style;
 R.setProperty('--o-seal',`url("${svgURI(28,28,`<rect width="28" height="28" rx="2" fill="${C.red}"/><path d="M0 0L28 28M28 0L0 28M14 0V28M0 14H28M14 0L28 14L14 28L0 14Z" fill="none" stroke="${C.bg}" stroke-width="1.3"/>`)}")`)}
function paintOrn(){const C=ORN_COL();$$('.cblock .orn').forEach(o=>{const col=getComputedStyle(o).color;o.style.backgroundImage=`url("${ornTile('wave',col,C.bg).src}")`;o.style.backgroundSize='80px 40px'})}
/* --- desen şeritleri (eski kayan yazıların yerine) --- */
async function bands(){
 const E=emk();E.bands=E.bands||{};const vw=innerWidth,C=ORN_COL();
 for(const [id,pat,dh] of [['pb1','wave',40],['pb2','asa',48]]){const el=$('#'+id);if(!el)continue;
  const B=E.bands[id]||{},tok=el._t=(el._t||0)+1;clearInterval(el._tm);
  let fr=(B.frames||[]).length?await expandFrames(B.frames):[],custom=fr.length>0,px,k,mi,sp;
  if(!custom){const o=ornTile(pat,C.ink,C.bg);fr=[{src:o.src,W:o.w,H:o.h,sx:0,fw:o.w,fh:o.h}];k=dh/o.h;px=false;mi=false;sp=22}
  else{k=(B.h||40)/Math.max(...fr.map(f=>f.fh));px=B.pixel===true;mi=B.mir==='1';sp=B.speed>0?B.speed:24}
  if(tok!==el._t)return;
  const aw=fr[0].fw*k;let n=Math.max(1,Math.ceil(vw/aw)+1);if(mi&&n%2)n++;el.innerHTML='';el.style.height=Math.round(Math.max(...fr.map(f=>f.fh))*k)+'px';
  const nodes=fr.map(f=>{const l=document.createElement('div');l.className='rib-l';const t=document.createElement('div');t.className='rib-t'+(mi?' mir':'');t.style.height=Math.round(f.fh*k)+'px';
   t.style.animationDuration=(n*aw/sp)+'s';if(B.dir==='r')t.style.animationDirection='reverse';for(let j=0;j<n*2;j++)t.appendChild(tileNode(f,k,px));l.appendChild(t);el.appendChild(l);return l});
  el._tm=playFrames(nodes,B.mode,B.fps||8)}
}
/* --- mürekkep damlası hover efekti --- */
function inkIn(c,e){
 if(reduce||(c._ink&&!c._ink.classList.contains('out')))return;
 const r=c.getBoundingClientRect(),P=14,x=e.clientX-r.left,y=e.clientY-r.top,d=document.createElement('div');d.className='ink';
 let h=`<b style="left:${x+P}px;top:${y+P}px;--s:${((Math.hypot(Math.max(x,r.width-x),Math.max(y,r.height-y))+30)/12).toFixed(1)}"></b>`;
 for(let k=0;k<5;k++)h+=`<i style="left:${(x+P+(Math.random()-.5)*Math.min(r.width*.55,180)).toFixed(0)}px;top:${y+P}px;--w:${(5+Math.random()*9).toFixed(0)}px;--h:${((r.height-y)*(.3+Math.random()*.55)).toFixed(0)}px;--d:${(1.1+Math.random()*1.1).toFixed(2)}s;--dl:${(.1+Math.random()*.5).toFixed(2)}s"></i>`;
 d.innerHTML=h;c.appendChild(d);c._ink=d;
}
function inkOut(c){const d=c._ink;if(!d)return;d.classList.add('out');c._ink=null;setTimeout(()=>d.remove(),800)}
function bindInk(){
 document.addEventListener('mouseover',e=>{const c=e.target.closest&&e.target.closest('.card,.wcard');if(c&&!c.classList.contains('wadd')&&!c.contains(e.relatedTarget))inkIn(c,e)});
 document.addEventListener('mouseout',e=>{const c=e.target.closest&&e.target.closest('.card,.wcard');if(c&&!c.contains(e.relatedTarget))inkOut(c)});
}
/* --- hikaye + çizim süreci (çekmece) --- */
function drawerExtra(p){
 const L=state.lang,st=(p.story&&(p.story[L]||p.story.tr||p.story.en))||'',pr=p.process||[];
 return(st?`<section class="d-story"><div class="label">${ct('story')}</div>${st.split(/\n\s*\n/).map(x=>`<p>${esc(x)}</p>`).join('')}</section>`:'')
 +(pr.length?`<section class="d-proc"><div class="label">${ct('proc')}</div><div class="proc">${pr.map((m,i)=>`<figure><img src="${esc(m.src)}" alt="${esc(m.cap||'')}" loading="lazy"><figcaption><b>${String(i+1).padStart(2,'0')}</b>${esc(m.cap||'')}</figcaption></figure>`).join('')}</div></section>`:'')
 +(state.edit&&!st&&!pr.length?`<div class="d-hint">${ct('storyhint')}</div>`:'');
}
function imgManager(M,dropSel,listSel,arr,ph){
 const drop=$(dropSel,M),list=$(listSel,M);
 const draw=()=>{list.innerHTML=arr.map((m,i)=>`<div class="ed-img"><img src="${esc(m.src)}" alt=""><input data-cap="${i}" value="${esc(m.cap||'')}" placeholder="${ph}"><div class="ed-row"><button class="ed-btn" data-m="${i}:-1">←</button><button class="ed-btn" data-m="${i}:1">→</button><button class="ed-btn" data-m="${i}:d">⬇</button><button class="ed-btn dng" data-m="${i}:x">×</button></div></div>`).join('')};draw();
 const add=async fl=>{const L=[...fl].filter(f=>/^image\//.test(f.type)).sort((a,b)=>a.name.localeCompare(b.name,undefined,{numeric:true}));for(const f of L){try{arr.push(await fileToLayer(f))}catch(e){toast('Okunamadı: '+f.name)}}draw()};
 drop.onclick=()=>pick('image/*',add,true);drop.ondragover=e=>{e.preventDefault();drop.classList.add('over')};drop.ondragleave=()=>drop.classList.remove('over');drop.ondrop=e=>{e.preventDefault();drop.classList.remove('over');add(e.dataTransfer.files)};
 list.addEventListener('click',e=>{const b=e.target.closest('[data-m]');if(!b)return;const[i,d]=b.dataset.m.split(':'),n=+i;
  if(d==='d'){dlAsset(arr[n].src,(arr[n].cap||'surec')+'-'+(n+1));return}if(d==='x')arr.splice(n,1);else{const j=n+ +d;if(j>=0&&j<arr.length)[arr[n],arr[j]]=[arr[j],arr[n]]}draw()});
 list.addEventListener('input',e=>{if(e.target.dataset.cap!=null)arr[+e.target.dataset.cap].cap=e.target.value});
}
/* ===== v2: büyük çekmece + zoom, kategori posterleri, hızlı gezinme, dil ===== */
Object.assign(CAT_T.tr,{prevp:'Önceki proje',zoom:'Büyüt (zoom)',zin:'Yakınlaş',zout:'Uzaklaş',zfit:'Sığdır',zhint:'Tekerlek: yakınlaştır · Sürükle: kaydır · Çift tık: büyüt · Esc: kapat',fabtop:'En üste git',fabprev:'Önceki kategoriye git',postersoon:'POSTER YAKINDA',pup:'POSTER YÜKLE',prm:'KALDIR'});
Object.assign(CAT_T.en,{prevp:'Previous project',zoom:'Zoom',zin:'Zoom in',zout:'Zoom out',zfit:'Fit',zhint:'Wheel: zoom · Drag: pan · Double-click: zoom · Esc: close',fabtop:'Back to top',fabprev:'Previous category',postersoon:'POSTER COMING SOON',pup:'UPLOAD POSTER',prm:'REMOVE'});
Object.assign(T.tr,{avail:'FREELANCE İÇİN MÜSAİT',scroll:'KAYDIR'});Object.assign(T.en,{avail:'AVAILABLE FOR FREELANCE',scroll:'SCROLL'});
const aname=a=>(a.nl&&a.nl[state.lang])||a.name,alang=a=>(a.nl&&state.lang==='tr')?'tr':'en';
const MAG='<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="10" cy="10" r="6.5"/><path d="M15 15l6 6M10 7v6M7 10h6"/></svg>';
function posterHTML(a){const P=(DB.posters||{})[a.id],nm=aname(a);
 return `<div class="cposter rv" data-cat="${a.id}">${P?`<img src="${esc(P.src)}" alt="${esc(nm)}" loading="lazy">`:`<div class="cp-def"><span class="cp-t" lang="${alang(a)}">${nm}</span><span class="cp-s">${ct('postersoon')}</span></div>`}<div class="cp-tools"><button data-pu="${a.id}">${ct('pup')}</button>${P?`<button data-pd="${a.id}" title="İndir">⬇</button><button data-pr="${a.id}">${ct('prm')}</button>`:''}</div></div>`}
function renderDrawer(id){
 const p=prj(id);if(!p)return;const O=AREAS.flatMap(a=>projects.filter(x=>x.cat===a.id)),i=O.indexOf(p),n=O[(i+1)%O.length],pv=O[(i-1+O.length)%O.length],many=p.images.length>1,sh=p.show||{},ar=AREAS.find(a=>a.id===p.cat)||AREAS[0];
 $('#drawer').style.setProperty('--ac',p.color);$('#drawer').dataset.cat=p.cat;
 const rows=[[sh.year!==false&&p.year,t('year'),p.year],[sh.role!==false&&p.role,t('role'),esc(p.role)],[sh.tools!==false&&p.tools.length,t('tools2'),esc(p.tools.join(', '))]].filter(r=>r[0]).map(r=>`<dt>${r[1]}</dt><dd>${r[2]}</dd>`).join('');
 const desc=esc(p.desc[state.lang]||p.desc.tr||p.desc.en||'');
 $('#dBody').innerHTML=`<div class="label" style="color:${p.color}"><span lang="${alang(ar)}">${aname(ar)}</span> · ${String(i+1).padStart(2,'0')} / ${String(O.length).padStart(2,'0')}</div>
 <h3 id="dTitle">${esc(p.title)}</h3>${p.ongoing?`<span class="ong">● ${ct('ongoing')}</span>`:''}
 <div class="gal">${img(p,gi)}<button class="zbtn" data-zoom aria-label="${ct('zoom')}" title="${ct('zoom')}">${MAG}</button>${many?`<div class="gal-nav"><button data-g="-1">${t('prev')}</button><span class="label">${gi+1} / ${p.images.length}</span><button data-g="1">${t('nxt')}</button></div>`:''}</div>
 <div class="d-meta"><p class="d-desc">${desc}</p><div>${rows?`<dl>${rows}</dl>`:''}${sh.palette!==false&&p.palette.length?`<div class="pal">${p.palette.map(c=>`<i style="background:${c}" title="${c}"></i>`).join('')}</div>`:''}</div></div>
 <div class="d-nav"><button class="prevb" data-prev="${pv.id}">← ${ct('prevp')}<small>${esc(pv.title)}</small></button><button class="next" data-next="${n.id}">${t('next')} →<small>${esc(n.title)}</small></button></div>${drawerExtra(p)}`;
}
function openZoom(src,alt){
 if(!src||document.querySelector('.zoomv'))return;
 const z=document.createElement('div');z.className='zoomv'+($('#drawer').dataset.cat==='pixel'&&!$('#drawer').hidden?' px':'');
 z.innerHTML=`<img src="${esc(src)}" alt="${esc(alt||'')}" draggable="false"><div class="zhint">${ct('zhint')}</div><button class="zbtn zclose" data-z="x" aria-label="Esc">✕</button><div class="zctl"><button data-z="-" aria-label="${ct('zout')}">−</button><span id="zpct">100%</span><button data-z="+" aria-label="${ct('zin')}">+</button><button data-z="0">${ct('zfit')}</button><button data-z="1">1:1</button></div>`;
 document.body.appendChild(z);const im=$('img',z);let sc=1,tx=0,ty=0;
 const apply=()=>{im.style.transform=`translate(${tx}px,${ty}px) scale(${sc})`;$('#zpct',z).textContent=Math.round(sc*100)+'%'};
 const clampT=()=>{const mx=Math.max(0,(im.offsetWidth*sc-innerWidth)/2+80),my=Math.max(0,(im.offsetHeight*sc-innerHeight)/2+80);tx=Math.max(-mx,Math.min(mx,tx));ty=Math.max(-my,Math.min(my,ty))};
 const zoomAt=(ns,cx,cy)=>{ns=Math.max(1,Math.min(16,ns));const px=cx-innerWidth/2,py=cy-innerHeight/2;tx=px-(px-tx)*(ns/sc);ty=py-(py-ty)*(ns/sc);sc=ns;if(sc===1){tx=0;ty=0}clampT();apply()};
 z.addEventListener('wheel',e=>{e.preventDefault();zoomAt(sc*Math.exp(-e.deltaY*.0018),e.clientX,e.clientY)},{passive:false});
 const P=new Map();let lastD=0;
 z.addEventListener('pointerdown',e=>{if(e.target.closest('.zctl,.zclose'))return;z.setPointerCapture(e.pointerId);P.set(e.pointerId,[e.clientX,e.clientY]);z.classList.add('drag')});
 z.addEventListener('pointermove',e=>{if(!P.has(e.pointerId))return;const o=P.get(e.pointerId);P.set(e.pointerId,[e.clientX,e.clientY]);
  if(P.size===2){const[a,b]=[...P.values()],d=Math.hypot(a[0]-b[0],a[1]-b[1]);if(lastD)zoomAt(sc*d/lastD,(a[0]+b[0])/2,(a[1]+b[1])/2);lastD=d}
  else if(sc>1){tx+=e.clientX-o[0];ty+=e.clientY-o[1];clampT();apply()}});
 const up=e=>{P.delete(e.pointerId);lastD=0;if(!P.size)z.classList.remove('drag')};z.addEventListener('pointerup',up);z.addEventListener('pointercancel',up);
 z.addEventListener('dblclick',e=>{if(e.target.closest('.zctl,.zclose'))return;sc>1?zoomAt(1,e.clientX,e.clientY):zoomAt(3,e.clientX,e.clientY)});
 const kd=e=>{if(e.key==='Escape'){e.stopImmediatePropagation();close()}else if(e.key==='+'||e.key==='=')zoomAt(sc*1.4,innerWidth/2,innerHeight/2);else if(e.key==='-')zoomAt(sc/1.4,innerWidth/2,innerHeight/2);else if(e.key==='0')zoomAt(1,innerWidth/2,innerHeight/2)};
 const close=()=>{z.remove();removeEventListener('keydown',kd,true)};addEventListener('keydown',kd,true);
 z.addEventListener('click',e=>{const b=e.target.closest('[data-z]');if(!b)return;const k=b.dataset.z,c=[innerWidth/2,innerHeight/2];
  if(k==='x')close();else if(k==='+')zoomAt(sc*1.5,...c);else if(k==='-')zoomAt(sc/1.5,...c);else if(k==='0')zoomAt(1,...c);else if(k==='1')zoomAt(Math.max(1,im.naturalWidth/im.offsetWidth),...c)});
}
let curSt=0;
function stageText(){const e=$('#gSt');if(!e)return;const N={tr:['GİRİŞ','ESERLER','PROJELER','İLETİŞİM'],en:['INTRO','WORKS','PROJECTS','CONTACT']}[state.lang];e.textContent=(state.lang==='tr'?'BÖLÜM ':'STAGE ')+curSt+' · '+N[curSt]}
function fabLabels(){
 const tp=$('#cpText');if(tp)tp.textContent=state.lang==='tr'?'ÇALIŞMAYA AÇIĞIM ◈ 2026 ◈ ':'AVAILABLE ◈ FOR ◈ WORK ◈ 2026 ◈ ';
 stageText();const a=$('#fabPrev'),b=$('#fabTop');if(!a)return;
 for(const [el,k] of [[a,'fabprev'],[b,'fabtop']]){el.title=ct(k);el.setAttribute('aria-label',ct(k));el.dataset.t=ct(k)}
}
function bindV2(){
 // poster: yükle / indir / kaldır (yalnızca düzenleme modunda görünür)
 document.addEventListener('click',e=>{const u=e.target.closest&&e.target.closest('[data-pu],[data-pd],[data-pr]');if(!u)return;e.preventDefault();e.stopPropagation();
  const id=u.dataset.pu||u.dataset.pd||u.dataset.pr;DB.posters=DB.posters||{};
  if(u.dataset.pu)pick('image/*',async f=>{if(!f[0])return;try{const a=await fileToLayer(f[0]);DB.posters[id]={src:a.src,w:a.w,h:a.h,name:a.name};await persist();refresh();toast('Poster yüklendi ✓')}catch(x){toast('Okunamadı')}});
  else if(u.dataset.pd)dlAsset(DB.posters[id].src,'poster-'+id);
  else{delete DB.posters[id];persist().then(refresh)}},true);
 document.addEventListener('click',e=>{if(state.edit)return;const im=e.target.closest&&e.target.closest('.cposter img');if(im)openZoom(im.currentSrc||im.src,im.alt)});
 addEventListener('keydown',e=>{if(!state.open||document.querySelector('.zoomv')||/INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName))return;
  if(e.key==='ArrowRight'||e.key==='ArrowLeft'){const b=$(e.key==='ArrowRight'?'#dBody [data-next],#dBody [data-wnext]':'#dBody [data-prev],#dBody [data-wprev]');b&&b.click()}});
 // sağ alt: en üste git + önceki kategoriye git
 const f=document.createElement('div');f.id='fab';
 f.innerHTML='<button id="fabPrev" type="button"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 15l6-6 6 6"/><path d="M6 20h12"/></svg></button><button id="fabTop" type="button"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20V6M6 12l6-6 6 6M5 3h14"/></svg></button>';
 document.body.appendChild(f);
 const upd=()=>f.classList.toggle('on',scrollY>420);addEventListener('scroll',upd,{passive:true});upd();
 const go=el=>el&&el.scrollIntoView({behavior:reduce?'auto':'smooth',block:'start'});
 $('#fabTop').onclick=()=>scrollTo({top:0,behavior:reduce?'auto':'smooth'});
 $('#fabPrev').onclick=()=>{const B=$$('.cblock');if(!B.length)return;let cur=-1;B.forEach((b,i)=>{if(b.getBoundingClientRect().top<=130)cur=i});
  if(cur===-1)go($('#works'));else if(B[B.length-1].getBoundingClientRect().bottom<130)go(B[B.length-1]);else go(cur>0?B[cur-1]:$('#works'))};
 fabLabels();
}
/* ===== Çalıştığım projeler: görüntüleyici (tüm görseller) ===== */
Object.assign(CAT_T.tr,{studio:'Stüdyo / Müşteri',wopen:'GÖRSELLERİ GÖR',wlink:'Projeyi aç'});
Object.assign(CAT_T.en,{studio:'Studio / Client',wopen:'VIEW IMAGES',wlink:'Open project'});
const workList=()=>[...(DB.work||[])].sort((a,b)=>(b.ongoing?1:0)-(a.ongoing?1:0));
function renderWork(){
 const g=$('#wgrid');if(!g)return;const L=state.lang;
 g.innerHTML=workList().map(w=>{
  const im=w.images&&w.images[0],n=(w.images||[]).length,view=n>0,lnk=!view&&w.link&&!state.edit,tag=lnk?'a':'div',
   at=lnk?` href="${esc(w.link)}" target="_blank" rel="noopener"`:(view?` role="button" tabindex="0" data-view="1" data-cur="${t('view')}"`:'');
  const meta=[w.year,w.studio].filter(Boolean).join(' · ');
  return `<${tag} class="wcard rv" data-w="${esc(w.id)}"${at}>${im?`<div class="wimg"><img src="${esc(im.src)}" alt="${esc(im.alt||w.title)}" loading="lazy">${n>1?`<span class="wn">${n} ▣</span>`:''}</div>`:`<div class="wimg empty"><span>${L==='en'?'IMAGE SLOT':'GÖRSEL ALANI'}</span></div>`}<div class="wbody">${w.ongoing?`<span class="ong">● ${ct('ongoing')}</span>`:''}${meta?`<div class="label">${esc(meta)}</div>`:''}<h3>${esc(w.title)}</h3>${w.role?`<div class="wrole">${esc(w.role)}</div>`:''}<p>${esc((w.desc&&(w.desc[L]||w.desc.tr||w.desc.en))||'')}</p>${view?`<span class="wmore">${ct('wopen')} →</span>`:(w.link?'<span class="wl">↗</span>':'')}</div></${tag}>`}).join('')
  +'<div class="wcard wadd rv" data-w="new"><span>+ ÇALIŞTIĞIM PROJE EKLE</span></div>';
 observeReveal();
}
function renderWorkDrawer(id){
 const W=workList(),w=W.find(x=>x.id===id);if(!w)return;const i=W.indexOf(w),n=W[(i+1)%W.length],pv=W[(i-1+W.length)%W.length],imgs=w.images||[],many=imgs.length>1,L=state.lang,pad=x=>String(x).padStart(2,'0');
 if(gi>=imgs.length)gi=0;const m=imgs[gi];
 $('#drawer').style.setProperty('--ac','var(--red)');$('#drawer').dataset.cat='';
 const rows=[[w.year,t('year')],[w.role,t('role')],[w.studio,ct('studio')]].filter(r=>r[0]).map(r=>`<dt>${r[1]}</dt><dd>${esc(r[0])}</dd>`).join('');
 const desc=esc((w.desc&&(w.desc[L]||w.desc.tr||w.desc.en))||'');
 $('#dBody').innerHTML=`<div class="label" style="color:var(--red)">${t('n_projects')} · ${pad(i+1)} / ${pad(W.length)}</div>
 <h3 id="dTitle">${esc(w.title)}</h3>${w.ongoing?`<span class="ong">● ${ct('ongoing')}</span>`:''}
 ${m?`<div class="gal"><img src="${esc(m.src)}" alt="${esc(m.alt||w.title)}" width="${m.w||1600}" height="${m.h||1000}"><button class="zbtn" data-zoom aria-label="${ct('zoom')}" title="${ct('zoom')}">${MAG}</button>${many?`<div class="gal-nav"><button data-g="-1">${t('prev')}</button><span class="label">${gi+1} / ${imgs.length}</span><button data-g="1">${t('nxt')}</button></div>`:''}</div>`:''}
 ${many?`<div class="thumbs">${imgs.map((x,k)=>`<button type="button" class="${k===gi?'on':''}" data-gt="${k}" aria-label="${k+1}"><img src="${esc(x.src)}" alt=""></button>`).join('')}</div>`:''}
 <div class="d-meta"><p class="d-desc">${desc}</p><div>${rows?`<dl>${rows}</dl>`:''}${w.link?`<a class="wlink" href="${esc(w.link)}" target="_blank" rel="noopener">${ct('wlink')} ↗</a>`:''}</div></div>
 ${W.length>1?`<div class="d-nav"><button class="prevb" data-wprev="${pv.id}">← ${ct('prevp')}<small>${esc(pv.title)}</small></button><button class="next" data-wnext="${n.id}">${t('next')} →<small>${esc(n.title)}</small></button></div>`:''}`;
}
function openWork(id){
 if(!workList().find(x=>x.id===id))return;
 if(state.open!==id||!state.wk)gi=0;if(!state.open)state.lastFocus=document.activeElement;
 state.wk=true;state.open=id;renderWorkDrawer(id);gain(10,'wrk:'+id);
 $('#drawer').hidden=false;document.body.style.overflow='hidden';$('#dClose').focus();
}
function workClick(e){
 const w=workList().find(x=>x.id===state.open);if(!w)return;
 const g=e.target.closest('[data-g]'),gt=e.target.closest('[data-gt]'),nx=e.target.closest('[data-wnext],[data-wprev]'),zm=e.target.closest('[data-zoom],.gal img');
 if(g){gi=(gi+ +g.dataset.g+w.images.length)%w.images.length;renderWorkDrawer(w.id)}
 else if(gt){gi=+gt.dataset.gt;renderWorkDrawer(w.id)}
 else if(nx){gi=0;location.hash='work='+(nx.dataset.wnext||nx.dataset.wprev);$('#drawer').scrollTo(0,0)}
 else if(zm){const im=$('.gal img');if(im)openZoom(im.currentSrc||im.src,w.title)}
}
function bindWork(){
 document.addEventListener('click',e=>{if(state.edit)return;const c=e.target.closest&&e.target.closest('.wcard[data-view]');if(!c)return;e.preventDefault();location.hash='work='+c.dataset.w});
 document.addEventListener('keydown',e=>{if((e.key==='Enter'||e.key===' ')&&e.target.matches&&e.target.matches('.wcard[data-view]')){e.preventDefault();location.hash='work='+e.target.dataset.w}});
}
/* ===== GitHub'daki assets klasörünü tara → siteye ekle ===== */
const GH_SKIP=/^assets\/(hero-sahne|hero-karga|serit|desen-seritleri|kategori-posterleri)\//;
const CAT_KEYS=[['splash',/splash/i],['pixel',/pixel|piksel/i],['3d',/(^|[^a-z])3d|blender/i],['concept',/concept|konsept/i],['env',/env|ortam|background|arka/i],['type',/typo|tipo|lettering/i],['vector',/vector|vekt/i],['brand',/brand|marka|logo/i],['hobby',/hobby|hobi|craft|terzi/i]];
const guessCat=s=>{for(const[id,re]of CAT_KEYS)if(re.test(s))return id;return null};
const prettyName=s=>s.replace(/\.[^.]+$/,'').replace(/[-_]+/g,' ').replace(/\s+/g,' ').trim().replace(/(^|\s)(\p{L})/gu,(m,a,c)=>a+c.toUpperCase());
function ghGuess(){const h=location.hostname;if(/\.github\.io$/.test(h)){const o=h.split('.')[0],sg=location.pathname.split('/').filter(Boolean);return o+'/'+(sg[0]&&!/\.html?$/i.test(sg[0])?sg[0]:h)}return ''}
function ghImport(){
 const M=modal(`<h3 class="ed-h">GITHUB'DAN GÖRSELLERİ İÇE AKTAR</h3>
 <p class="ed-help">GitHub'daki <b>assets</b> klasörüne yüklediğin ama sitede henüz kullanılmayan görselleri bulur ve çalışma olarak ekler. Depo <b>herkese açık</b> olmalı. Görselleri yeniden yüklemen gerekmez.</p>
 <div class="ed-grid"><div><label>Kullanıcı / depo</label><input id="g_repo" placeholder="kullaniciadi/depo-adi"></div><div><label>Dal (branch)</label><input id="g_br" value="main"></div></div>
 <div class="ed-actions"><button class="ed-btn pri" id="g_scan">TARA</button><button class="ed-btn" id="g_x">KAPAT</button></div><div id="g_out"></div>`);
 const q=s=>$(s,M);q('#g_repo').value=ghGuess();q('#g_x').onclick=()=>M.close();
 q('#g_scan').onclick=async()=>{
  const repo=q('#g_repo').value.trim().replace(/^https?:\/\/github\.com\//,'').replace(/\/+$/,''),br=q('#g_br').value.trim()||'main',out=q('#g_out');
  if(!/^[\w.-]+\/[\w.-]+$/.test(repo)){out.innerHTML='<p class="ed-help">Depo adını "kullaniciadi/depo" biçiminde yaz.</p>';return}
  out.innerHTML='<p class="ed-help">Taranıyor…</p>';
  let T;try{const r=await fetch(`https://api.github.com/repos/${repo}/git/trees/${encodeURIComponent(br)}?recursive=1`);
   if(!r.ok)throw new Error(r.status===404?'Depo ya da dal bulunamadı (depo herkese açık mı?).':r.status===403?'GitHub istek sınırına takıldı, birkaç dakika sonra tekrar dene.':'GitHub hatası: '+r.status);T=await r.json()}
  catch(e){out.innerHTML=`<p class="ed-help" style="color:var(--red)">${esc(e.message||'Bağlantı kurulamadı')}</p>`;return}
  const dec=s=>{try{return decodeURI(s)}catch(e){return s}},used=new Set(assetList(DB).map(a=>dec(a.o.src||'')));
  const files=(T.tree||[]).filter(x=>x.type==='blob'&&/^assets\/.+\.(png|jpe?g|webp|gif|svg)$/i.test(x.path)&&!GH_SKIP.test(x.path)&&!used.has(x.path));
  files.sort((a,b)=>a.path.localeCompare(b.path,undefined,{numeric:true}));
  const G={};files.forEach(f=>{const d=f.path.slice(0,f.path.lastIndexOf('/'));(G[d]=G[d]||[]).push(f)});const keys=Object.keys(G);
  if(!keys.length){out.innerHTML='<p class="ed-help">assets klasöründe siteye henüz eklenmemiş görsel bulunamadı. (Dosyaları GitHub\'a yükleyip birkaç saniye bekle, sonra tekrar tara.)</p>';return}
  const raw=p=>`https://raw.githubusercontent.com/${repo}/${encodeURIComponent(br)}/${p.split('/').map(encodeURIComponent).join('/')}`;
  const opts=AREAS.map(a=>`<option value="${a.id}">${a.name}</option>`).join('')+'<option value="work">Çalıştığım projeler</option>';
  out.innerHTML=`<h4 class="ed-sec">${files.length} YENİ GÖRSEL · ${keys.length} KLASÖR</h4>`+keys.map((k,i)=>`<div class="gh-g"><label class="gh-h"><input type="checkbox" data-gi="${i}" checked> <b>${esc(k)}</b> · ${G[k].length} görsel</label><div class="gh-th">${G[k].slice(0,6).map(f=>`<img src="${esc(raw(f.path))}" alt="" loading="lazy">`).join('')}</div>
   <div class="ed-grid"><div><label>Nereye eklensin?</label><select data-gc="${i}">${opts}</select></div><div><label>Nasıl?</label><select data-gm="${i}"><option value="each">Her görsel ayrı çalışma</option><option value="one">Hepsi tek proje (galeri)</option></select></div><div style="grid-column:1/-1"><label>Proje adı (tek proje seçersen)</label><input data-gt="${i}"></div></div></div>`).join('')
   +'<div class="ed-actions"><button class="ed-btn pri" id="g_do">SİTEYE EKLE</button></div><div id="g_res"></div>';
  keys.forEach((k,i)=>{const nm=k.split('/').pop(),g=guessCat(k);$(`[data-gc="${i}"]`,M).value=g||'splash';$(`[data-gm="${i}"]`,M).value=g?'each':'one';$(`[data-gt="${i}"]`,M).value=prettyName(nm)});
  q('#g_do').onclick=async()=>{
   q('#g_do').disabled=true;let nP=0,nW=0;DB.work=DB.work||[];
   for(let i=0;i<keys.length;i++){const on=$(`[data-gi="${i}"]`,M).checked;if(!on)continue;
    const cat=$(`[data-gc="${i}"]`,M).value,mode=$(`[data-gm="${i}"]`,M).value,title=$(`[data-gt="${i}"]`,M).value.trim()||prettyName(keys[i].split('/').pop());
    const imgs=[];for(const f of G[keys[i]]){const im=await ld(raw(f.path));imgs.push({src:encodeURI(f.path),w:im?im.naturalWidth:1600,h:im?im.naturalHeight:1200,alt:prettyName(f.path.split('/').pop()),name:f.path.split('/').pop().replace(/\.[^.]+$/,'')})}
    const groups=mode==='one'?[{t:title,im:imgs}]:imgs.map(m=>({t:prettyName(m.name),im:[m]}));
    for(const g of groups){
     if(cat==='work'){DB.work.push({id:'w'+Date.now().toString(36)+Math.random().toString(36).slice(2,5),title:g.t,studio:'',role:'',year:String(new Date().getFullYear()),link:'',desc:{tr:'',en:''},images:g.im});nW++}
     else{DB.projects.push(norm({title:g.t,cat,year:new Date().getFullYear(),desc:{tr:'',en:''},tools:[],tags:[],images:g.im}));nP++}}}
   projects=DB.projects;await persist();refresh();
   $('#g_res',M).innerHTML=`<p class="ed-help" style="color:var(--red)">✓ ${nP} çalışma ve ${nW} çalıştığım proje eklendi. <b>Yayına almak için</b> alttaki çubuktan <b>SİTE PAKETİ (ZIP)</b> indir ve içindeki <b>index.html</b>'i GitHub'a yükle (görselleri tekrar yüklemene gerek yok).</p><div class="ed-actions"><button class="ed-btn pri" id="g_zip">SİTE PAKETİ İNDİR</button></div>`;
   $('#g_zip',M).onclick=()=>exportZip();toast(`${nP+nW} kayıt eklendi ✓`)};
 };
}

function game(){
 const h=document.createElement('div');h.id='gHud';h.setAttribute('aria-hidden','true');h.innerHTML='<b>LV <span id="gLv">01</span></b><i class="bar"><u id="gBar"></u></i><span id="gXp"></span><em id="gSt">INTRO</em>';document.body.appendChild(h);
 const pc=document.createElement('div');pc.id='pcrow';pc.className='spr';pc.setAttribute('aria-hidden','true');document.body.appendChild(pc);
 gfx();hud();
 const crow={x:innerWidth*.3,y:150,fl:1},ms={x:0,y:0,t:-1e9};let lastT=0;
 addEventListener('pointermove',e=>{ms.x=e.clientX;ms.y=e.clientY;ms.t=performance.now();emMx=e.clientX/innerWidth-.5;emUpdate()},{passive:true});
 const loop=now=>{requestAnimationFrame(loop);const e=$('#emCrow'),sc=$('#emaki');if(!e||!sc)return;const dt=Math.min(.05,(now-lastT)/1000||.016);lastT=now;
  const r=sc.parentElement.getBoundingClientRect(),vw=innerWidth;if(r.bottom<0||r.top>innerHeight)return;
  const px=crow.x,sm=Math.max(.1,(emk().crow&&emk().crow.speed)||1);
  if(now-ms.t<2500&&ms.y>r.top&&ms.y<r.bottom){crow.x+=(ms.x-30-crow.x)*Math.min(1,.05*sm);crow.y+=((ms.y-r.top)-24-crow.y)*Math.min(1,.05*sm)}
  else{const tt=now/1000,tx=vw*(.5+.36*Math.sin(tt*.13)),ty=r.height*(.27+.07*Math.sin(tt*.37)),kx=1-Math.exp(-dt*.75*sm),ky=1-Math.exp(-dt*1.2*sm);crow.x+=(tx-crow.x)*kx;crow.y+=(ty-crow.y)*ky}
  const dx=crow.x-px;if(Math.abs(dx)>.15)crow.fl=dx>0?1:-1;
  e.style.transform=`translate(${crow.x-r.left}px,${crow.y}px) scaleX(${crow.fl})`};
 if(reduce){crow.x=innerWidth*.6;crow.y=160;const e=$('#emCrow');e&&(e.style.transform=`translate(${crow.x-24}px,${crow.y}px)`)}else requestAnimationFrame(loop);
 let rt;addEventListener('resize',()=>{clearTimeout(rt);rt=setTimeout(()=>{ribbon();bands()},300)});
 let tk=false;const onS=()=>{if(tk)return;tk=true;requestAnimationFrame(()=>{tk=false;const hh=document.documentElement.scrollHeight-innerHeight,r=hh>0?Math.min(1,scrollY/hh):0;pc.style.left=`calc(${r*100}% - 16px)`;emUpdate()})};
 addEventListener('scroll',onS,{passive:true});addEventListener('resize',onS);onS();
 new MutationObserver(()=>{gfx();if(document.documentElement.dataset.theme==='dark')unlock('night',state.lang==='tr'?'★ GECE MODU':'★ NIGHT MODE',20)}).observe(document.documentElement,{attributes:true,attributeFilter:['data-theme']});
 const ST=[['top','INTRO'],['works','WORKS'],['projects','PROJECTS'],['contact','CONTACT']];
 if('IntersectionObserver'in window){const io=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;const i=ST.findIndex(s=>s[0]===e.target.id);curSt=i;stageText();if(i>0)gain(10,'sec:'+e.target.id);if(i===ST.length-1)unlock('end',state.lang==='tr'?'★ SONA ULAŞTIN':'★ REACHED THE END',30)}),{rootMargin:'-45% 0px -50% 0px'});
  ST.forEach(s=>{const el=document.getElementById(s[0]);el&&io.observe(el)})}
 if(reduce)return;
 addEventListener('pointerdown',e=>{if(e.target.closest&&e.target.closest('.ed-modal,.ed-bar'))return;for(let i=0;i<9;i++){const d=document.createElement('i');d.className='pxp';d.style.cssText=`left:${e.clientX}px;top:${e.clientY}px;background:${i%3?'var(--ink)':'var(--red)'}`;document.body.appendChild(d);const a=Math.random()*6.28,r=16+Math.random()*34;d.animate([{transform:'translate(0,0)',opacity:1},{transform:`translate(${Math.cos(a)*r}px,${Math.sin(a)*r+14}px)`,opacity:0}],{duration:520,easing:'steps(5,end)'}).onfinish=()=>d.remove()}});
 const KS=['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];let ki=0;
 addEventListener('keydown',e=>{const k=e.key.length===1?e.key.toLowerCase():e.key;ki=k===KS[ki]?ki+1:(k===KS[0]?1:0);if(ki===KS.length){ki=0;unlock('konami',state.lang==='tr'?'★ HİLE KODU — KARGA YAĞMURU!':'★ CHEAT CODE — CROW RAIN!',50);
  for(let i=0;i<26;i++){const d=document.createElement('div');d.className='spr rain';d.style.cssText=`left:${Math.random()*100}vw;top:-40px;background-image:url(${SHEET})`;document.body.appendChild(d);d.animate([{transform:'translate(0,0)'},{transform:`translate(${Math.random()*200-100}px,${innerHeight+80}px)`}],{duration:2200+Math.random()*2200,delay:Math.random()*900,easing:'linear',fill:'backwards'}).onfinish=()=>d.remove()}}});
}

function bindGlobal(){
 $('#langTR').onclick=()=>setLang('tr');$('#langEN').onclick=()=>setLang('en');
 $('#themeBtn').onclick=()=>setTheme(state.theme==='dark'?'paper':'dark');
 $('#copyBtn').onclick=copyMail;$('#dClose').onclick=closeProject;
 $('#filters').addEventListener('click',e=>{const b=e.target.closest('.chip');if(b)setFilter(b.dataset.f,false)});
 $('#cats').addEventListener('click',e=>{const c=e.target.closest('.card');if(c){if(state.edit)return openEditor(c.dataset.id);state.pushed=true;location.hash='project='+c.dataset.id}});
}

async function init(){
 state.lang=store.get('ebv-lang')||((navigator.language||'tr').startsWith('en')?'en':'tr');
 setTheme(store.get('ebv-theme')||'paper');
 bindGlobal();await loadData();bindExtras();applyLang();observeReveal();ambient();bindEditor();bindInk();bindV2();bindWork();game();route();
}
init();
})();

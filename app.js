/* ---------------------------------------------------------
   ICONS
--------------------------------------------------------- */
const ICONS = {
  home: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 11l9-8 9 8"/><path d="M5 10v10h14V10"/></svg>`,
  grid: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>`,
  kit: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2"/><path d="M3 12h18"/></svg>`,
  shop: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l1.5-5h15L21 9"/><path d="M4 9h16v10a1 1 0 01-1 1H5a1 1 0 01-1-1V9z"/><path d="M9 13a3 3 0 006 0"/></svg>`,
  chev: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>`,
  back: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" width="18" height="18"><polyline points="15 18 9 12 15 6"/></svg>`,
  blood: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2s7 8 7 13a7 7 0 01-14 0c0-5 7-13 7-13z"/></svg>`,
  pulse: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 12 8 12 10 18 14 6 16 12 21 12"/></svg>`,
  march: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l3 7h7l-5.5 4.5L18.5 21 12 16.5 5.5 21l2-7.5L2 9h7z"/></svg>`,
  cross: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 3h6v6h6v6h-6v6H9v-6H3V9h6z"/></svg>`,
  bandage: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="9" width="20" height="6" rx="3" transform="rotate(-20 12 12)"/></svg>`,
  bug: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="13" r="5"/><path d="M12 8V5M9 5l-2-2M15 5l2-2M7 13H3M21 13h-4M8 17l-3 3M16 17l3 3"/></svg>`,
  bone: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 6a3 3 0 10-4.24 4.24l12 12A3 3 0 1018 18L6 6z"/></svg>`,
  head: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="5"/><path d="M8 21v-4M16 21v-4M4 21h16"/></svg>`,
  arm: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 3v9l5 9 5-6-4-6V3"/></svg>`,
  leg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 2h6l1 10-3 10-2-8-3 8-2-10z"/></svg>`,
  medkit: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M12 11v6M9 14h6"/><path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2"/></svg>`,
  ext: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><path d="M15 3h6v6"/><path d="M10 14L21 3"/></svg>`,
  tape: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3.5"/></svg>`,
  close: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
  book: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4.5A2.5 2.5 0 016.5 2H20v17H6.5A2.5 2.5 0 004 16.5v-12z"/><path d="M4 16.5A2.5 2.5 0 016.5 19H20"/></svg>`,
};

/* ---------------------------------------------------------
   STATE / ROUTER
--------------------------------------------------------- */
let state = { view:"home", catId:null, topicId:null, query:"" };

function findCategory(id){ return DATA.find(c=>c.id===id); }
function findTopic(catId, topicId){
  const c = findCategory(catId);
  return c ? c.topics.find(t=>t.id===topicId) : null;
}

function go(view, catId, topicId){
  state = {view, catId: catId||null, topicId: topicId||null, query:""};
  document.getElementById('searchInput').value='';
  render();
  window.scrollTo(0,0);
  updateHash();
}
window.go = go;

function handleBack(){
  if(state.view==='topic') go('category', state.catId);
  else go('home');
}
window.handleBack = handleBack;

function esc(s){ return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }

function openLightbox(src){
  const box = document.createElement('div');
  box.className='lightbox';
  box.innerHTML = `<button class="lightbox-close" onclick="this.parentElement.remove()">${ICONS.close}</button><img src="${src}">`;
  box.addEventListener('click', (e)=>{ if(e.target===box) box.remove(); });
  document.body.appendChild(box);
}
window.openLightbox = openLightbox;

/* ---------------------------------------------------------
   URL HASH (deep-linking / shareable state)
--------------------------------------------------------- */
function updateHash(){
  let hash = '#' + state.view;
  if(state.catId) hash += '/' + state.catId;
  if(state.topicId) hash += '/' + state.topicId;
  history.replaceState(null, '', hash);
}
function loadFromHash(){
  const parts = location.hash.replace('#','').split('/').filter(Boolean);
  if(parts.length===0) return;
  const [view, catId, topicId] = parts;
  if(['home','browse','category','topic','kit','shop'].includes(view)){
    state = {view, catId: catId||null, topicId: topicId||null, query:''};
  }
}

/* ---------------------------------------------------------
   RENDER
--------------------------------------------------------- */
function renderHeader(){
  const brand = document.getElementById('brandRow');
  if(state.view==='home'){
    brand.innerHTML = `
      <img class="logo-mark" src="assets/icon-transparent.png" alt="Duct-Aid cross logo">
      <div class="brand-text"><span class="b1">Duct-Aid</span><span class="b2">Field Guide</span></div>`;
  } else {
    let title = "Back";
    if(state.view==='category') title = findCategory(state.catId)?.title || "Categories";
    if(state.view==='topic') title = "Back";
    if(state.view==='browse') title = "All Categories";
    if(state.view==='kit') title = "What's In Your Kit";
    if(state.view==='shop') title = "Shop Duct-Aid";
    brand.innerHTML = `
      <button class="back-btn" onclick="handleBack()">${ICONS.back}</button>
      <div class="brand-text"><span class="b1" style="font-size:16px;">${title}</span></div>`;
  }
}

function renderHome(){
  const emer = `
    <div class="emergency-block">
      <h3>IN AN EMERGENCY</h3>
      <div class="emergency-grid">
        <a class="e-card" onclick="go('topic','bleeding','pressure-dressing')">
          <span class="e-ic">${ICONS.blood}</span>
          <span class="e-txt">Stop the Bleed<small>Heavy bleeding, first steps</small></span>
        </a>
        <a class="e-card" onclick="go('topic','trauma','march')">
          <span class="e-ic">${ICONS.march}</span>
          <span class="e-txt">M.A.R.C.H.<small>Major trauma assessment</small></span>
        </a>
        <a class="e-card full" onclick="go('topic','trauma','shock')">
          <span class="e-ic">${ICONS.pulse}</span>
          <span class="e-txt">Treating for Shock<small>Confusion or weak pulse after any serious injury</small></span>
        </a>
      </div>
    </div>`;

  const grid = DATA.map((c,i)=>`
    <button class="cat-card" onclick="go('category','${c.id}')">
      <span class="cnum">${String(i+1).padStart(2,'0')}</span>
      <span class="cic">${ICONS[c.icon]}</span>
      <span class="ctitle">${c.title}</span>
      <span class="ccount">${c.topics.length} topics</span>
    </button>`).join('');

  const about = `
    <div class="about-block">
      <h4>About This Guide</h4>
      <p>This book is designed to help you take care of medical emergencies. Regardless of your situation, you'll find practical information and how to use the Duct-Aid First Aid Kit to stabilize injuries and emergencies.</p>
      <p>Many deaths from injuries can be prevented if those nearby simply know how to stabilize them — no one should die simply because those nearby didn't have the supplies or knowledge to care for an injury.</p>
      <h4 style="margin-top:14px;">Before You Use This Kit</h4>
      <ul>
        <li>This guide and the Duct-Aid kit are not a substitute for emergency or professional medical care when it's available — seek it whenever possible.</li>
        <li>These techniques are intended to stabilize an injury until a licensed medical professional can take over.</li>
        <li>Use of any first-aid product carries some inherent risk. Follow the instructions supplied with your kit.</li>
      </ul>
      <p class="fine">Adapted from the official Duct-Aid First-Aid Field Guide, in partnership with duct-aid.com.</p>
    </div>`;

  document.getElementById('main').innerHTML = `
    <img class="hero-logo" src="assets/logo-full.png" alt="Duct-Aid">
    ${emer}
    <div class="eyebrow">Browse by Category</div>
    <div class="cat-grid">${grid}</div>
    ${about}
  `;
}

function renderBrowse(){
  const grid = DATA.map((c,i)=>`
    <button class="cat-card" onclick="go('category','${c.id}')">
      <span class="cnum">${String(i+1).padStart(2,'0')}</span>
      <span class="cic">${ICONS[c.icon]}</span>
      <span class="ctitle">${c.title}</span>
      <span class="ccount">${c.topics.length} topics</span>
    </button>`).join('');
  document.getElementById('main').innerHTML = `
    <div class="page-title">All Categories</div>
    <div class="page-sub">Every topic in the Duct-Aid Field Guide, organized by type of injury.</div>
    <div class="cat-grid">${grid}</div>`;
}

function renderCategory(){
  const c = findCategory(state.catId);
  if(!c){ go('home'); return; }
  const list = c.topics.map(t=>`
    <button class="topic-card" onclick="go('topic','${c.id}','${t.id}')">
      <span>
        <div class="tt">${t.title}</div>
        <div class="ts">${t.tagline}</div>
      </span>
      <span class="chev">${ICONS.chev}</span>
    </button>`).join('');
  document.getElementById('main').innerHTML = `
    <div class="eyebrow">${c.title}</div>
    <div class="page-title">${c.title}</div>
    <div class="page-sub">Tap a topic for step-by-step instructions.</div>
    <div class="topic-list">${list}</div>`;
}

function renderTopic(){
  const c = findCategory(state.catId);
  const t = c ? findTopic(c.id, state.topicId) : null;
  if(!t){ go('home'); return; }

  const pgn = PAGE_NUM[t.id];
  let html = `<div class="eyebrow">${c.title}</div>`;
  html += `<div class="page-title">${t.title}${pgn?`<span class="page-num">${ICONS.book} p.${pgn}</span>`:''}</div>`;
  if(t.tagline) html += `<div class="page-sub">${t.tagline}</div>`;

  const imgs = (typeof IMG_MANIFEST !== 'undefined') ? (IMG_MANIFEST[t.id]||[]) : [];
  if(imgs.length){
    html += `<div class="gallery">` + imgs.map((src,i)=>`<img src="${src}" loading="lazy" onclick="openLightbox('${src}')" alt="${t.title} illustrated steps ${i+1}">`).join('') + `</div>`;
    html += imgs.length>1 ? `<div class="gallery-hint">swipe for more →  tap to zoom</div>` : `<div class="gallery-hint">tap to zoom</div>`;
  }

  if(t.items && t.items.length){
    html += `<div class="items-box"><h4>Items Needed</h4><ul>${t.items.map(i=>`<li>${i}</li>`).join('')}</ul></div>`;
  }
  if(t.warning){
    html += `<div class="warning-box"><h4>⚠ Warning</h4>${t.warning}</div>`;
  }
  if(t.tip){
    html += `<div class="tip-box"><h4>Tip</h4>${t.tip}</div>`;
  }
  if(t.note){
    html += `<div class="note-box">${t.note}</div>`;
  }
  if(t.steps && t.steps.length){
    html += `<div class="steps">` + t.steps.map((s,i)=>`
      <div class="step"><div class="snum">${i+1}</div><div class="stext">${s}</div></div>`).join('') + `</div>`;
  }
  document.getElementById('main').innerHTML = html;
}

function renderKit(){
  const sections = KIT.map((sec,i)=>{
    const photo = (typeof IMG_MANIFEST !== 'undefined') ? (IMG_MANIFEST['kit_'+sec.id]||[])[0] : null;
    return `
    <details class="kit-section" ${i===0?'open':''}>
      <summary>${sec.title}<span class="plus">+</span></summary>
      <div class="kit-body">
        ${photo?`<img class="kit-photo" src="${photo}" loading="lazy" onclick="openLightbox('${photo}')" alt="${sec.title} photo">`:''}
        ${sec.items.map(it=>`<div class="kit-item"><div class="ki-name">${it.n}</div><div class="ki-desc">${it.d}</div></div>`).join('')}
      </div>
    </details>`;
  }).join('');
  document.getElementById('main').innerHTML = `
    <div class="eyebrow">Reference</div>
    <div class="page-title">What's In Your Kit</div>
    <div class="page-sub">Every item in the Duct-Aid kit, and what it's for. Tap a section to expand, tap the photo to zoom.</div>
    ${sections}`;
}

function renderShop(){
  const cards = SHOP.map(p=>`
    <a class="shop-card" href="${p.url}" target="_blank" rel="noopener">
      <div class="sc-tag">${p.tag}</div>
      <div class="sc-title">${p.title}</div>
      <div class="sc-desc">${p.desc}</div>
      <span class="sc-cta">${p.cta} ${ICONS.ext}</span>
    </a>`).join('');
  document.getElementById('main').innerHTML = `
    <div class="shop-hero">
      <div class="eyebrow" style="margin-bottom:4px;">Duct-Aid.com</div>
      <div class="page-title" style="font-size:22px;">Restock &amp; Gear Up</div>
      <p>Buy tape, a full replacement kit, or refill supplies directly from Duct-Aid. Links open the official store in a new tab.</p>
    </div>
    ${cards}`;
}

function renderSearch(){
  const q = state.query.trim();
  let results = [];
  DATA.forEach(c=>{
    c.topics.forEach(t=>{
      const hay = (t.title+' '+t.tagline+' '+(t.steps||[]).join(' ')).toLowerCase();
      if(hay.includes(q.toLowerCase())){
        results.push({cat:c, topic:t});
      }
    });
  });
  let html = `<div class="search-results-count">${results.length} result${results.length!==1?'s':''} for "${esc(q)}"</div>`;
  if(results.length===0){
    html += `<div class="empty-state">${ICONS.march}<div>No matching topics. Try a different word, like "burn" or "ankle."</div></div>`;
  } else {
    html += `<div class="topic-list">` + results.map(r=>`
      <button class="topic-card" onclick="go('topic','${r.cat.id}','${r.topic.id}')">
        <span>
          <div class="tt">${r.topic.title}</div>
          <div class="ts">${r.cat.title} · ${r.topic.tagline}</div>
        </span>
        <span class="chev">${ICONS.chev}</span>
      </button>`).join('') + `</div>`;
  }
  document.getElementById('main').innerHTML = html;
}

function renderNav(){
  const tabs = [
    {id:'home', label:'Home', icon:ICONS.home},
    {id:'browse', label:'Browse', icon:ICONS.grid},
    {id:'kit', label:'My Kit', icon:ICONS.kit},
    {id:'shop', label:'Shop', icon:ICONS.shop},
  ];
  const activeMap = {home:'home', category:'browse', topic:'browse', browse:'browse', kit:'kit', shop:'shop'};
  const active = activeMap[state.view] || 'home';
  document.getElementById('bottomNav').innerHTML = tabs.map(t=>`
    <button class="${t.id===active && !state.query ? 'active':''}" onclick="go('${t.id}')">
      ${t.icon}<span>${t.label}</span>
    </button>`).join('');
}

function render(){
  renderHeader();
  if(state.query){ renderSearch(); }
  else if(state.view==='home') renderHome();
  else if(state.view==='browse') renderBrowse();
  else if(state.view==='category') renderCategory();
  else if(state.view==='topic') renderTopic();
  else if(state.view==='kit') renderKit();
  else if(state.view==='shop') renderShop();
  renderNav();
}

document.getElementById('searchInput').addEventListener('input', (e)=>{
  state.query = e.target.value;
  if(state.query){ renderHeader(); renderSearch(); renderNav(); }
  else { render(); }
});

loadFromHash();
render();

// Register service worker for offline use (only works when served over http/https, not file://)
if('serviceWorker' in navigator && location.protocol.startsWith('http')){
  window.addEventListener('load', ()=>{
    navigator.serviceWorker.register('sw.js').catch(()=>{});
  });
}

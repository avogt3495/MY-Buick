
const parts = window.PARTS;
const plannedKey = 'myBuickPlannedUpgrades';
let planned = JSON.parse(localStorage.getItem(plannedKey) || '[]');

function showScreen(id){
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  if(id === 'planner') renderPlanner();
}

function scoreClass(score){
  if(score >= 90) return 'score';
  if(score >= 75) return 'score good';
  return 'score ok';
}

function partCard(p){
  const btn = document.createElement('button');
  btn.className = 'card';
  btn.innerHTML = `
    <div class="cardTop">
      <div><b>${p.name}</b><span>${p.system} • ${p.assembly}</span></div>
      <div class="${scoreClass(p.priority)}">${p.priority}</div>
    </div>
  `;
  btn.onclick = () => renderDetail(p);
  return btn;
}

function renderHome(){
  document.getElementById('partsLoaded').textContent = parts.length;
  document.getElementById('bestScore').textContent = Math.max(...parts.map(p=>p.priority));
  const top = [...parts].sort((a,b)=>b.priority-a.priority).slice(0,4);
  const wrap = document.getElementById('topMods');
  wrap.innerHTML = '';
  top.forEach(p=>wrap.appendChild(partCard(p)));
}

function renderParts(){
  const list = document.getElementById('partList');
  const search = document.getElementById('search');
  const filter = document.getElementById('filter');
  const q = search.value.toLowerCase();
  const f = filter.value;
  list.innerHTML = '';
  parts
    .filter(p => (!f || p.system === f) && (p.name.toLowerCase().includes(q) || p.system.toLowerCase().includes(q) || p.upgrade.toLowerCase().includes(q)))
    .sort((a,b)=>b.priority-a.priority)
    .forEach(p=>list.appendChild(partCard(p)));
}

function renderDetail(p){
  showScreen('detail');
  document.getElementById('detailContent').innerHTML = `
    <p class="eyebrow">${p.system} / ${p.assembly}</p>
    <h2 class="detailTitle">${p.name}</h2>
    <div class="${scoreClass(p.priority)}" style="margin:10px 0;">${p.priority}</div>
    <div class="detailGrid">
      <div class="detailBox"><b>Quantity</b>${p.qty}</div>
      <div class="detailBox"><b>Weight each</b>${p.weight} lb</div>
      <div class="detailBox"><b>Total approx weight</b>${(p.qty*p.weight).toFixed(1)} lb</div>
      <div class="detailBox"><b>Priority score</b>${p.priority}/100</div>
    </div>
    <h3>Race / Performance Upgrade</h3>
    <div class="detailBox">${p.upgrade}</div>
    <h3>Why it matters</h3>
    <div class="detailBox">${p.benefit}</div>
    <h3>Notes</h3>
    <div class="detailBox">${p.notes}</div>
  `;
}

function renderPlanner(){
  const wrap = document.getElementById('plannerList');
  wrap.innerHTML = '';
  [...parts].sort((a,b)=>b.priority-a.priority).forEach(p=>{
    const div = document.createElement('label');
    div.className = 'card checkRow';
    div.innerHTML = `
      <input type="checkbox" ${planned.includes(p.id) ? 'checked' : ''} />
      <div><b>${p.name}</b><span>${p.upgrade}</span></div>
    `;
    const cb = div.querySelector('input');
    cb.onchange = () => {
      if(cb.checked && !planned.includes(p.id)) planned.push(p.id);
      if(!cb.checked) planned = planned.filter(x=>x!==p.id);
      localStorage.setItem(plannedKey, JSON.stringify(planned));
      document.getElementById('plannedCount').textContent = planned.length;
    };
    wrap.appendChild(div);
  });
  document.getElementById('plannedCount').textContent = planned.length;
}

function initFilters(){
  const filter = document.getElementById('filter');
  [...new Set(parts.map(p=>p.system))].sort().forEach(system=>{
    const opt = document.createElement('option');
    opt.value = system;
    opt.textContent = system;
    filter.appendChild(opt);
  });
  document.getElementById('search').addEventListener('input', renderParts);
  filter.addEventListener('change', renderParts);
}

if('serviceWorker' in navigator){
  navigator.serviceWorker.register('sw.js').catch(()=>{});
}

initFilters();
renderHome();
renderParts();
renderPlanner();

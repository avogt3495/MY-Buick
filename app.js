const state={mode:'explore',layer:0,scale:1,x:0,y:0,drag:false,last:null,done:new Set(),step:1,expanded:false};
const qs=id=>document.getElementById(id);
const stage=qs('stage'),world=qs('world'),dots=qs('dots'),card=qs('card');
const dotData=[
 {id:'t25_1',type:'screw',x:27.48,y:32.50,label:'1',name:'T25 screw - upper left'},
 {id:'t25_2',type:'screw',x:72.32,y:40.33,label:'2',name:'T25 screw - upper right'},
 {id:'t25_3',type:'screw',x:76.46,y:69.75,label:'3',name:'T25 screw - right middle'},
 {id:'t25_4',type:'screw',x:73.90,y:88.75,label:'4',name:'T25 screw - lower right'},
 {id:'t25_5',type:'screw',x:54.03,y:89.54,label:'5',name:'T25 screw - lower center'},
 {id:'t25_6',type:'screw',x:15.58,y:90.79,label:'6',name:'T25 screw - lower left'},
 {id:'clip_1',type:'clip',x:73.99,y:37.15,label:'C',name:'Rear retaining clip'}
];
const tabs={
 overview:`<b>Purpose:</b> Filters incoming air before it reaches the MAF sensor, intake tube, throttle body, and upper intake. This is the first polished MY BUICK module.`,
 tips:`<b>Alex's Garage Tips</b><ul><li>Airbox uses 6 T25 Torx screws plus 1 rear retaining clip.</li><li>Lift the lid carefully so you do not stress the MAF wiring.</li><li>Vacuum debris from the lower airbox before reinstalling.</li><li>Check the intake tube for cracks while it is exposed.</li></ul>`,
 inspect:`<b>Inspection Mode</b><ul><li>Check filter seal.</li><li>Look for leaves or dirt in the lower housing.</li><li>Inspect MAF connector and wiring.</li><li>Make sure the intake tube clamp is seated correctly.</li></ul>`,
 layers:`<b>Layer View</b><ul><li>Layer 0: Airbox installed.</li><li>Layer 1: Lid off, filter visible.</li><li>Layer 2: Filter removed, lower housing exposed.</li></ul>`
};
function setLayer(n){state.layer=Math.max(0,Math.min(2,n));[0,1,2].forEach(i=>qs('layer'+i).classList.toggle('active',i===state.layer));qs('stageBadge').textContent=['Airbox installed','Lid off • filter visible','Filter removed • lower housing'][state.layer];}
function renderDots(){dots.innerHTML='';dotData.forEach((d,i)=>{const el=document.createElement('button');el.className='dot '+d.type+' '+(state.done.has(d.id)?'done':'');el.style.left=d.x+'%';el.style.top=d.y+'%';el.textContent=state.done.has(d.id)?'✓':d.label;el.title=d.name;el.onclick=e=>{e.stopPropagation();if(state.mode!=='repair')return;state.done.add(d.id);toast(d.type==='clip'?'Rear clip marked released':`${d.name} marked removed`);update();};dots.appendChild(el);});dots.style.display=(state.mode==='repair'||state.mode==='fasteners')?'block':'none';}
function miniDots(){return dotData.map(d=>`<span class="miniDot ${state.done.has(d.id)?'done':''}"></span>`).join('');}
function setMode(mode){state.mode=mode;document.querySelectorAll('.modebar button').forEach(b=>b.classList.remove('active'));if(mode==='explore')qs('exploreBtn').classList.add('active');if(mode==='repair')qs('repairBtn').classList.add('active');if(mode==='layer')qs('layerBtn').classList.add('active');card.classList.toggle('hiddenDuringRepair',mode==='repair');world.classList.toggle('repairing',mode==='repair');world.classList.toggle('showFasteners',mode==='fasteners');world.classList.toggle('selected',mode==='explore'||mode==='layer'||mode==='fasteners');world.classList.toggle('dim',mode!=='explore');qs('repairHud').classList.toggle('hidden',mode!=='repair');if(mode==='layer')setLayer((state.layer+1)%3);update();}
function update(){renderDots();const removed=state.done.size,total=dotData.length;qs('removedCount').textContent=removed;qs('totalCount').textContent=total;qs('dotMini').innerHTML=miniDots();qs('nextStep').disabled=removed<total&&state.step===1;if(state.mode==='repair'){if(state.step===1){qs('stepTitle').textContent='Step 1: Remove 6 T25 screws + rear clip';qs('stepSub').textContent=removed<total?`${total-removed} fasteners remaining. Tap each blue dot after removing it.`:'All screws marked removed. Tap Next to lift the lid.';}else if(state.step===2){qs('stepTitle').textContent='Step 2: Lift lid and inspect filter';qs('stepSub').textContent='Layer 1 shows the filter visible. Check seal and debris.';}else{qs('stepTitle').textContent='Step 3: Remove filter and inspect lower box';qs('stepSub').textContent='Layer 2 shows the lower housing. Vacuum debris if needed.';}}
 applyTransform();}
function applyTransform(){world.style.transform=`translate(${state.x}px,${state.y}px) scale(${state.scale})`;}
function resetView(){state.scale=1;state.x=0;state.y=0;state.done.clear();state.step=1;setLayer(0);setMode('explore');toast('View reset');}
function toast(msg){const t=document.createElement('div');t.className='toast';t.textContent=msg;document.body.appendChild(t);setTimeout(()=>t.remove(),1400);}
qs('exploreBtn').onclick=()=>setMode('explore');qs('repairBtn').onclick=()=>{state.step=1;setLayer(0);setMode('repair');};qs('guideBtn').onclick=()=>{state.step=1;setLayer(0);setMode('repair');};qs('fastenersBtn').onclick=()=>setMode('fasteners');qs('layerBtn').onclick=()=>setMode('layer');qs('resetBtn').onclick=resetView;qs('nextStep').onclick=()=>{if(state.step===1&&state.done.size===dotData.length){state.step=2;setLayer(1);toast('Lid removed. Filter visible.');}else if(state.step===2){state.step=3;setLayer(2);toast('Filter removed. Lower box exposed.');}else{toast('Airbox module complete');}update();};
qs('cardToggle').onclick=()=>{state.expanded=!state.expanded;card.classList.toggle('compact',!state.expanded);};document.querySelectorAll('.tab').forEach(btn=>btn.onclick=()=>{document.querySelectorAll('.tab').forEach(b=>b.classList.remove('active'));btn.classList.add('active');qs('tabContent').innerHTML=tabs[btn.dataset.tab];});qs('tabContent').innerHTML=tabs.overview;
// drag / mouse / touch zoom
stage.addEventListener('pointerdown',e=>{state.drag=true;state.last={x:e.clientX,y:e.clientY};stage.setPointerCapture(e.pointerId);});
stage.addEventListener('pointermove',e=>{if(!state.drag||!state.last)return;state.x+=e.clientX-state.last.x;state.y+=e.clientY-state.last.y;state.last={x:e.clientX,y:e.clientY};applyTransform();});
stage.addEventListener('pointerup',()=>{state.drag=false;state.last=null;});
stage.addEventListener('wheel',e=>{e.preventDefault();const old=state.scale;const delta=e.deltaY<0?1.08:.92;state.scale=Math.min(4,Math.max(1,state.scale*delta));const rect=stage.getBoundingClientRect();const cx=e.clientX-rect.left,cy=e.clientY-rect.top;state.x=cx-(cx-state.x)*(state.scale/old);state.y=cy-(cy-state.y)*(state.scale/old);applyTransform();},{passive:false});
let touches=[];stage.addEventListener('touchstart',e=>{touches=[...e.touches];},{passive:true});stage.addEventListener('touchmove',e=>{if(e.touches.length===2&&touches.length===2){e.preventDefault();const dist=a=>Math.hypot(a[0].clientX-a[1].clientX,a[0].clientY-a[1].clientY);const oldDist=dist(touches),newDist=dist([...e.touches]);if(oldDist>0){state.scale=Math.min(4,Math.max(1,state.scale*(newDist/oldDist)));applyTransform();}touches=[...e.touches];}},{passive:false});
update();

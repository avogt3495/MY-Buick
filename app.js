const screens=["home","engine","airbox","guide","learn","maintenance"];
const names={home:["MY BUICK","2010 Buick LaCrosse CXL"],engine:["VEHICLE","Engine Bay"],airbox:["ENGINE BAY","Airbox"],guide:["AIRBOX","Guide Me"],learn:["AIRBOX","Learn"],maintenance:["AIRBOX","Maintenance"]};
let current="home";let layer=0;let done=new Set();

const componentMaps=[
  {
    id:"airbox",
    name:"Airbox",
    status:"gold",
    target:"airbox",
    frame:{x:5.7,y:21.7,w:28.2,h:43.4},
    label:{x:43,y:49},
    viewBox:"0 0 100 100",
    path:"M 9 43 C 11 35, 16 33, 18 24 L 31 24 C 34 20, 37 13, 42 11 C 49 10, 54 15, 59 20 C 66 23, 73 26, 78 34 C 82 41, 80 54, 79 66 C 78 74, 75 82, 68 87 C 56 89, 43 87, 32 84 C 22 82, 13 78, 9 68 C 6 59, 5 50, 9 43 Z"
  }
];

const layerImages=["images/airbox/00_installed.jpg","images/airbox/01_filter_visible.jpg","images/airbox/02_filter_removed.jpg"];
const markers=[["s1","1",26.7,36.6,""],["s2","2",39.2,25.9,""],["s3","3",55.1,19.7,""],["s4","4",70.4,28.2,""],["s5","5",73.3,49.2,""],["s6","6",33.2,57.4,""],["clip","C",82.6,40.7,"clip"]];
const parts={cover:["Airbox Upper Cover","OEM #: TBD","Weight: TBD","Material: Molded plastic, exact material TBD","Tools: T25 Torx","Torque: TBD if published","Description: Seals the air filter and forces intake air through the filter before the MAF sensor.","Facts: Uses six T25 screws and one rear retaining clip."],filter:["Air Filter Element","OEM #: 55560894","ACDelco: A3128C","Weight: TBD","Material: Filter media with rubber sealing edge","Tools: T25 Torx to access","Torque: Not applicable","Description: Filters incoming air before it reaches the engine."],lower:["Lower Airbox Housing","OEM #: TBD","Weight: TBD","Material: Molded plastic, exact material TBD","Tools: TBD","Torque: TBD if removed","Description: Supports the filter and collects debris in the lower airbox."]};

function setGreeting(){const h=new Date().getHours();const word=h<12?"Good Morning":h<18?"Good Afternoon":"Good Evening";document.getElementById("greeting").textContent=word+", Alex."}

function renderComponentMaps(){
  const overlay=document.getElementById("componentOverlay");
  if(!overlay)return;
  overlay.innerHTML="";
  componentMaps.forEach(c=>{
    const btn=document.createElement("button");
    btn.className="componentMap "+c.status;
    btn.style.left=c.frame.x+"%";
    btn.style.top=c.frame.y+"%";
    btn.style.width=c.frame.w+"%";
    btn.style.height=c.frame.h+"%";
    btn.setAttribute("aria-label","Open "+c.name);
    btn.innerHTML=`
      <svg viewBox="${c.viewBox}" preserveAspectRatio="none" aria-hidden="true">
        <path class="componentFill" d="${c.path}"></path>
        <path class="componentGlow" d="${c.path}"></path>
      </svg>
      <span class="componentLabel" style="left:${c.label.x}%;top:${c.label.y}%">${c.name}</span>
    `;
    btn.addEventListener("click",()=>showScreen(c.target));
    overlay.appendChild(btn);
  });
}

function showScreen(id){current=id;screens.forEach(s=>document.getElementById(s).classList.toggle("active",s===id));document.getElementById("crumb").textContent=names[id][0];document.getElementById("title").textContent=names[id][1];document.getElementById("backBtn").classList.toggle("hidden",id==="home");closeDrawer()}
document.querySelectorAll("[data-go]").forEach(btn=>btn.addEventListener("click",()=>showScreen(btn.dataset.go)));
document.getElementById("backBtn").addEventListener("click",()=>{const backMap={engine:"home",airbox:"engine",guide:"airbox",learn:"airbox",maintenance:"airbox"};showScreen(backMap[current]||"home")});

const drawer=document.getElementById("drawer");const dim=document.getElementById("dim");const sheet=document.getElementById("sheet");
document.getElementById("menuBtn").addEventListener("click",()=>{drawer.classList.add("open");dim.classList.add("show")});
document.getElementById("closeDrawer").addEventListener("click",closeDrawer);
dim.addEventListener("click",()=>{closeDrawer();closeSheet()});
function closeDrawer(){drawer.classList.remove("open");if(!sheet.classList.contains("open"))dim.classList.remove("show")}

function renderMarkers(){const layerEl=document.getElementById("markerLayer");layerEl.innerHTML="";if(layer!==0)return;markers.forEach(m=>{const b=document.createElement("button");b.className="marker "+m[4]+(done.has(m[0])?" done":"");b.style.left=m[2]+"%";b.style.top=m[3]+"%";b.textContent=done.has(m[0])?"✓":m[1];b.addEventListener("click",()=>{done.add(m[0]);renderMarkers();updateProgress();if(done.size===7){document.getElementById("stepText").textContent="All fasteners complete. Tap Next Step."}});layerEl.appendChild(b)})}
function updateProgress(){const total=7;const completed=done.size;document.getElementById("count").textContent=completed+"/"+total;document.getElementById("progressLabel").textContent=completed+" of "+total+" complete";document.getElementById("progressFill").style.width=Math.round((completed/total)*100)+"%";if(layer===0){document.getElementById("nextAction").textContent=completed===total?"Next: lift cover":"Next: remove lid fasteners"}else if(layer===1){document.getElementById("nextAction").textContent="Next: remove filter"}else{document.getElementById("nextAction").textContent="Next: inspect housing"}}
document.getElementById("nextBtn").addEventListener("click",()=>{if(layer===0&&done.size<7){document.getElementById("stepText").textContent="Finish fasteners first. "+(7-done.size)+" remaining.";return}if(layer<2){layer+=1;document.getElementById("layerImg").src=layerImages[layer];renderMarkers();document.getElementById("stepTitle").textContent=layer===1?"Inspect Filter":"Lower Housing";document.getElementById("stepText").textContent=layer===1?"The lid is off. Inspect or remove the air filter.":"Filter removed. Inspect the lower housing for debris.";updateProgress()}});
document.getElementById("resetBtn").addEventListener("click",()=>{layer=0;done.clear();document.getElementById("layerImg").src=layerImages[0];document.getElementById("stepTitle").textContent="Remove Fasteners";document.getElementById("stepText").textContent="Tap each blue T25 screw marker, then tap the red rear clip marker.";renderMarkers();updateProgress()});
document.querySelectorAll("[data-part]").forEach(btn=>btn.addEventListener("click",()=>openSheet(btn.dataset.part)));
function openSheet(id){const data=parts[id]||parts.cover;document.getElementById("sheetData").innerHTML="<h2>"+data[0]+"</h2>"+data.slice(1).map(line=>{const i=line.indexOf(":");const k=i>=0?line.slice(0,i):"Info";const v=i>=0?line.slice(i+1).trim():line;return '<div class="info"><span>'+k+'</span><b>'+v+'</b></div>'}).join("");sheet.classList.add("open");dim.classList.add("show")}
function closeSheet(){sheet.classList.remove("open");if(!drawer.classList.contains("open"))dim.classList.remove("show")}
document.getElementById("closeSheet").addEventListener("click",closeSheet);
function getLogs(){return JSON.parse(localStorage.getItem("mybuick_airbox_logs")||"[]")}
function saveLogs(logs){localStorage.setItem("mybuick_airbox_logs",JSON.stringify(logs))}
function renderLogs(){const logs=getLogs();const display=logs.length?logs:[{service:"Air Filter Inspection",mileage:"121842",notes:"Ready to log real service."}];document.getElementById("logList").innerHTML=display.map(l=>'<div class="panel"><strong>'+l.service+'</strong><p>'+l.mileage+' mi</p><p>'+(l.notes||"")+"</p></div>").join("")}
document.getElementById("addLog").addEventListener("click",()=>{document.getElementById("logForm").classList.toggle("hidden")});
document.getElementById("logForm").addEventListener("submit",e=>{e.preventDefault();const logs=getLogs();logs.unshift({service:document.getElementById("logService").value,mileage:document.getElementById("logMileage").value||"TBD",notes:document.getElementById("logNotes").value});saveLogs(logs);renderLogs();document.getElementById("logForm").classList.add("hidden")});

setGreeting();renderComponentMaps();renderMarkers();updateProgress();renderLogs();showScreen("home");

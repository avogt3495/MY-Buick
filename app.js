const screens=["home","engine","airbox","guide","learn","maintenance"];
const names={home:["MY BUICK","2010 Buick LaCrosse CXL"],engine:["VEHICLE","Engine Bay"],airbox:["ENGINE BAY","Airbox"],guide:["AIRBOX","Guide Me"],learn:["AIRBOX","Learn"],maintenance:["AIRBOX","Maintenance"]};
let current="home";let layer=0;let done=new Set();

const componentMaps=[
  {
    id:"airbox",
    name:"Airbox",
    status:"locked",
    target:"airbox",
    frame:{x:7.29,y:42.12,w:21.09,h:17.58},
    label:{x:48,y:50},
    viewBox:"0 0 100 100",
    path:"M 2.1 92.6 L 2.9 85.6 L 2.9 77.4 L 3.7 73 L 8.2 62.2 L 10.3 59.3 L 11.9 53.7 L 12.3 49.3 L 18.9 34.4 L 21 27.4 L 23.9 23.3 L 31.3 23.3 L 40.7 21.9 L 43.2 20.7 L 45.7 18.1 L 47.3 18.1 L 53.1 16.3 L 53.9 15.6 L 54.3 6.7 L 57.2 3.3 L 60.9 2.2 L 66.7 2.6 L 74.5 7.8 L 79.8 7 L 85.6 9.3 L 97.1 19.6 L 97.1 23 L 95.5 30.4 L 95.1 43 L 93.8 47 L 93 55.6 L 88.5 67 L 87.2 71.5 L 87.2 74.4 L 84 82.2 L 82.7 89.6 L 80.7 94.4 L 78.6 97.4 L 53.5 97.4 L 48.6 96.7 L 11.5 96.7 L 10.7 95.9 L 5.3 94.4 L 2.9 95.2 Z"
  }
];

const layerImages=["images/airbox/00_installed.jpg","images/airbox/01_filter_visible.jpg","images/airbox/02_filter_removed.jpg"];
const airboxGuideMap={
  id:"airbox-guide",
  image:"images/airbox/00_installed.jpg",
  frame:{x:0,y:0,w:100,h:100},
  anchors:{
    s1:{label:"1",type:"screw",x:.276,y:.326},
    s2:{label:"2",type:"screw",x:.723,y:.402},
    s3:{label:"3",type:"screw",x:.764,y:.698},
    s4:{label:"4",type:"screw",x:.740,y:.888},
    s5:{label:"5",type:"screw",x:.540,y:.895},
    s6:{label:"6",type:"screw",x:.156,y:.909},
    clip:{label:"C",type:"clip",x:.740,y:.371}
  }
};
const parts={
  "overview": {
    "title": "What the Airbox Does",
    "status": "Alex Verified + GM Manual Supported",
    "summary": "The airbox holds the engine air filter and directs incoming air toward the intake path. The filter keeps dirt and debris out of the engine.",
    "sections": [
      {
        "label": "Main job",
        "value": "Filter incoming air before it reaches the engine."
      },
      {
        "label": "Why it matters",
        "value": "Clean airflow helps protect the engine and helps the intake/MAF system read air correctly."
      },
      {
        "label": "On this Buick",
        "value": "Located on the driver-side/front-left area of the engine bay."
      },
      {
        "label": "App status",
        "value": "Outline, screws, and rear clip are Alex Verified in the app."
      }
    ],
    "bullets": [
      "Air enters through the intake snorkel/airbox area.",
      "The filter traps dirt before air continues through the intake duct.",
      "The upper cover must seal evenly against the filter and lower housing.",
      "The car should not be driven with the air cleaner/filter removed."
    ],
    "source": "Owner Manual + Alex Verified photo mapping"
  },
  "service": {
    "title": "Inspection & Replacement",
    "status": "GM Manual Verified",
    "summary": "The 2010 Buick LaCrosse owner manual says to inspect the engine air cleaner/filter at Maintenance II intervals, replace it at the first oil change after each 50,000-mile interval, and inspect it at every oil change in dusty or dirty conditions.",
    "sections": [
      {
        "label": "Normal replacement",
        "value": "First oil change after each 50,000 mile interval."
      },
      {
        "label": "Dusty/dirty use",
        "value": "Inspect at each engine oil change."
      },
      {
        "label": "Inspection method",
        "value": "Remove the filter and lightly shake out loose dust. If it remains caked with dirt, replace it."
      },
      {
        "label": "Basic procedure",
        "value": "Remove housing screws, lift cover, pull filter, inspect/replace, lower cover, reinstall screws."
      },
      {
        "label": "Safety note",
        "value": "Do not run/drive the vehicle with the air cleaner/filter off."
      }
    ],
    "bullets": [
      "Use the Guide Me screen for the screw and clip order.",
      "Check that the filter seal sits flat before closing the lid.",
      "Make sure the lid is fully seated before tightening screws.",
      "Do not overtighten plastic airbox screws."
    ],
    "source": "2010 Buick LaCrosse Owner Manual"
  },
  "assembly": {
    "title": "Air Cleaner Assembly",
    "status": "OEM Dealer Verified, Needs VIN Check",
    "summary": "The air cleaner assembly is the full airbox unit. Part number 13279567 appears for 2010-2011 Buick LaCrosse air cleaner assembly listings and is described for 3.0L/3.6L applications by OEM parts sellers.",
    "sections": [
      {
        "label": "Likely GM part number",
        "value": "13279567"
      },
      {
        "label": "Part type",
        "value": "Air Cleaner Assembly"
      },
      {
        "label": "Vehicle fitment",
        "value": "2010-2011 Buick LaCrosse listings show this assembly. Final VIN verification still needed."
      },
      {
        "label": "Weight",
        "value": "TBD, needs scale or trusted spec."
      },
      {
        "label": "Material",
        "value": "Molded plastic housing, exact plastic type TBD."
      }
    ],
    "bullets": [
      "Includes the housing structure that supports the air filter.",
      "May include or interface with rubber isolators/duct pieces depending on listing.",
      "Used assemblies may be easier to find than new ones.",
      "Confirm by VIN before buying a replacement."
    ],
    "source": "OEM parts seller listings + needs final VIN check"
  },
  "filter": {
    "title": "Air Filter Element",
    "status": "GM Verified",
    "summary": "GM lists air filter part number 55560894 for Buick LaCrosse applications. ACDelco A3128C is listed as the matching ACDelco panel air filter by major parts catalogs.",
    "sections": [
      {
        "label": "GM part number",
        "value": "55560894"
      },
      {
        "label": "ACDelco part number",
        "value": "A3128C"
      },
      {
        "label": "Style",
        "value": "Panel air filter"
      },
      {
        "label": "Approx listed size",
        "value": "11-1/2 in L x 10-3/16 in W x 1-13/16 in H from parts catalog listing."
      },
      {
        "label": "Weight",
        "value": "TBD, needs scale or verified spec."
      }
    ],
    "bullets": [
      "Replace if heavily dirty, damaged, wet, oil-soaked, or poorly sealed.",
      "The rubber edge must sit flat in the lower housing.",
      "A bad seal can let dirt bypass the filter.",
      "Best app status: GM Verified part number, Alex Verified installed condition after you inspect it."
    ],
    "source": "GM Parts + parts catalog listing"
  },
  "cover": {
    "title": "Upper Cover & Seal Surface",
    "status": "Alex Verified, Part Number TBD",
    "summary": "The upper cover clamps the filter into the lower housing and creates the sealing surface. On your app guide, it is retained by six screw markers and one rear clip marker.",
    "sections": [
      {
        "label": "Part number",
        "value": "TBD"
      },
      {
        "label": "Fasteners",
        "value": "Six lid screws shown in app."
      },
      {
        "label": "Rear retention",
        "value": "One rear clip shown in app."
      },
      {
        "label": "Tool",
        "value": "T25 Torx, Alex Verified from your guide setup."
      },
      {
        "label": "Torque",
        "value": "TBD, do not guess. Snug evenly into plastic."
      }
    ],
    "bullets": [
      "Look for cracked corners or stripped screw bosses.",
      "Make sure the lid sits flat before tightening.",
      "Tighten evenly so the filter seal is not pinched.",
      "Do not let the lid hang hard on wiring or ducts while open."
    ],
    "source": "Alex Verified + manual procedure"
  },
  "lower": {
    "title": "Lower Airbox Housing",
    "status": "Needs Verification",
    "summary": "The lower housing supports the filter and catches debris that enters before the filter. Exact separate part number and material are not confirmed yet.",
    "sections": [
      {
        "label": "Part number",
        "value": "TBD"
      },
      {
        "label": "Material",
        "value": "Molded plastic, exact type TBD."
      },
      {
        "label": "Weight",
        "value": "TBD"
      },
      {
        "label": "Service",
        "value": "Inspect for loose debris whenever the filter is out."
      },
      {
        "label": "Common issue",
        "value": "Cracks, broken tabs, debris buildup, poor seal surface."
      }
    ],
    "bullets": [
      "Vacuum loose leaves/dirt out of the lower box if present.",
      "Do not drop debris into the intake duct path.",
      "Check that drain/low points are not packed with debris.",
      "Confirm lower housing mounts if removing the full assembly later."
    ],
    "source": "Needs verification"
  },
  "fasteners": {
    "title": "Screws & Rear Clip",
    "status": "Alex Verified, Torque TBD",
    "summary": "The app currently maps six screw highlights and one rear clip highlight. The marker locations and visual style are Alex Verified.",
    "sections": [
      {
        "label": "Screw count",
        "value": "6"
      },
      {
        "label": "Clip count",
        "value": "1 rear clip"
      },
      {
        "label": "Tool",
        "value": "T25 Torx"
      },
      {
        "label": "Torque",
        "value": "TBD, no verified published spec yet."
      },
      {
        "label": "App status",
        "value": "Markers visually approved in v5.3."
      }
    ],
    "bullets": [
      "Keep downward pressure on the bit to avoid rounding the screw head.",
      "Start screws by hand if possible so the plastic threads do not cross-thread.",
      "Snug only, because the airbox is plastic.",
      "If one screw spins forever, the plastic boss may be stripped."
    ],
    "source": "Alex Verified"
  },
  "diagnostics": {
    "title": "Failure Modes",
    "status": "Needs Verification + General Diagnostic Logic",
    "summary": "This page links symptoms to things to inspect. It is not a full diagnosis yet, but it gives the app useful context for the airbox.",
    "sections": [
      {
        "label": "Dirty filter",
        "value": "Can restrict airflow and reduce performance/efficiency."
      },
      {
        "label": "Poor filter seal",
        "value": "Can allow unfiltered air/dirt to bypass the filter."
      },
      {
        "label": "Loose cover",
        "value": "Can cause poor sealing, intake noise, or debris bypass."
      },
      {
        "label": "Cracked intake duct",
        "value": "Can create air metering issues depending on crack location."
      },
      {
        "label": "MAF area",
        "value": "Part number and code logic need their own verified MAF page later."
      }
    ],
    "bullets": [
      "Check the filter first before chasing weird intake behavior.",
      "Look for cracks in the accordion intake duct.",
      "Check that clamps and electrical connectors near the MAF/intake tube are seated.",
      "Future OBD2 module can link MAF/fuel-trim codes here later."
    ],
    "source": "General diagnostic logic, needs deeper verification"
  }
};

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

function showScreen(id){
  current=id;
  screens.forEach(s=>document.getElementById(s).classList.toggle("active",s===id));
  document.getElementById("crumb").textContent=names[id][0];
  document.getElementById("title").textContent=names[id][1];
  document.getElementById("backBtn").classList.toggle("hidden",id==="home");
  closeDrawer();
  if(id==="guide"){
    requestAnimationFrame(()=>{renderMarkers();updateProgress();});
  }
}
document.querySelectorAll("[data-go]").forEach(btn=>btn.addEventListener("click",()=>showScreen(btn.dataset.go)));
document.getElementById("backBtn").addEventListener("click",()=>{const backMap={engine:"home",airbox:"engine",guide:"airbox",learn:"airbox",maintenance:"airbox"};showScreen(backMap[current]||"home")});

const drawer=document.getElementById("drawer");const dim=document.getElementById("dim");const sheet=document.getElementById("sheet");
document.getElementById("menuBtn").addEventListener("click",()=>{drawer.classList.add("open");dim.classList.add("show")});
document.getElementById("closeDrawer").addEventListener("click",closeDrawer);
dim.addEventListener("click",()=>{closeDrawer();closeSheet()});
function closeDrawer(){drawer.classList.remove("open");if(!sheet.classList.contains("open"))dim.classList.remove("show")}

function anchorToPhoto(anchor,map=airboxGuideMap){
  return {
    x:map.frame.x+(anchor.x*map.frame.w),
    y:map.frame.y+(anchor.y*map.frame.h)
  };
}

function renderMarkers(){
  const layerEl=document.getElementById("markerLayer");
  if(!layerEl)return;
  layerEl.innerHTML="";
  if(layer!==0)return;

  Object.entries(airboxGuideMap.anchors).forEach(([id,a])=>{
    const pos=anchorToPhoto(a);
    const b=document.createElement("button");
    b.className="marker "+(a.type==="clip"?"clip ":"")+(done.has(id)?" done":"");
    b.dataset.marker=id;
    b.style.left=pos.x+"%";
    b.style.top=pos.y+"%";
    b.textContent=done.has(id)?"✓":a.label;
    b.addEventListener("click",()=>{
      done.add(id);
      renderMarkers();
      updateProgress();
      if(done.size===7){
        document.getElementById("stepText").textContent="All fasteners complete. Tap Next Step.";
      }
    });
    layerEl.appendChild(b);
  });
}

function updateProgress(){const total=7;const completed=done.size;document.getElementById("count").textContent=completed+"/"+total;document.getElementById("progressLabel").textContent=completed+" of "+total+" complete";document.getElementById("progressFill").style.width=Math.round((completed/total)*100)+"%";if(layer===0){document.getElementById("nextAction").textContent=completed===total?"Next: lift cover":"Next: remove lid fasteners"}else if(layer===1){document.getElementById("nextAction").textContent="Next: remove filter"}else{document.getElementById("nextAction").textContent="Next: inspect housing"}}
document.getElementById("nextBtn").addEventListener("click",()=>{if(layer===0&&done.size<7){document.getElementById("stepText").textContent="Finish fasteners first. "+(7-done.size)+" remaining.";return}if(layer<2){layer+=1;document.getElementById("layerImg").src=layerImages[layer];renderMarkers();document.getElementById("stepTitle").textContent=layer===1?"Inspect Filter":"Lower Housing";document.getElementById("stepText").textContent=layer===1?"The lid is off. Inspect or remove the air filter.":"Filter removed. Inspect the lower housing for debris.";updateProgress()}});
document.getElementById("resetBtn").addEventListener("click",()=>{layer=0;done.clear();document.getElementById("layerImg").src=layerImages[0];document.getElementById("stepTitle").textContent="Remove Fasteners";document.getElementById("stepText").textContent="Tap each blue T25 screw marker, then tap the red rear clip marker.";renderMarkers();updateProgress()});
document.querySelectorAll("[data-part]").forEach(btn=>btn.addEventListener("click",()=>openSheet(btn.dataset.part)));
function openSheet(id){
  const data=parts[id]||parts.overview;
  const sectionHtml=(data.sections||[]).map(item=>{
    return '<div class="info"><span>'+item.label+'</span><b>'+item.value+'</b></div>';
  }).join("");
  const bulletHtml=(data.bullets||[]).map(b=>'<li>'+b+'</li>').join("");
  document.getElementById("sheetData").innerHTML=
    '<div class="sheetHero">'+
      '<span class="badge">'+data.status+'</span>'+
      '<h2>'+data.title+'</h2>'+
      '<p>'+data.summary+'</p>'+
    '</div>'+
    sectionHtml+
    (bulletHtml?'<div class="info bulletInfo"><span>Notes</span><ul>'+bulletHtml+'</ul></div>':'')+
    '<div class="info sourceInfo"><span>Source Status</span><b>'+data.source+'</b></div>';
  sheet.classList.add("open");dim.classList.add("show")
}
function closeSheet(){sheet.classList.remove("open");if(!drawer.classList.contains("open"))dim.classList.remove("show")}
document.getElementById("closeSheet").addEventListener("click",closeSheet);
function getLogs(){return JSON.parse(localStorage.getItem("mybuick_airbox_logs")||"[]")}
function saveLogs(logs){localStorage.setItem("mybuick_airbox_logs",JSON.stringify(logs))}
function renderLogs(){const logs=getLogs();const display=logs.length?logs:[{service:"Air Filter Inspection",mileage:"121842",notes:"Ready to log real service."}];document.getElementById("logList").innerHTML=display.map(l=>'<div class="panel"><strong>'+l.service+'</strong><p>'+l.mileage+' mi</p><p>'+(l.notes||"")+"</p></div>").join("")}
document.getElementById("addLog").addEventListener("click",()=>{document.getElementById("logForm").classList.toggle("hidden")});
document.getElementById("logForm").addEventListener("submit",e=>{e.preventDefault();const logs=getLogs();logs.unshift({service:document.getElementById("logService").value,mileage:document.getElementById("logMileage").value||"TBD",notes:document.getElementById("logNotes").value});saveLogs(logs);renderLogs();document.getElementById("logForm").classList.add("hidden")});

setGreeting();renderComponentMaps();renderMarkers();updateProgress();renderLogs();showScreen("home");window.addEventListener("load",()=>setTimeout(()=>{renderMarkers();updateProgress();},50));

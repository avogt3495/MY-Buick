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
  "quickstart": {
    "title": "Airbox Quick Sheet",
    "status": "Mixed: GM Verified + Alex Verified + TBD",
    "summary": "The airbox is the engine air cleaner/filter housing. It holds the panel filter, seals the intake path, and keeps unfiltered air and debris out of the engine.",
    "sections": [
      {
        "label": "Vehicle",
        "value": "2010 Buick LaCrosse CXL, 3.0L LF1 V6, FWD. Alex Verified."
      },
      {
        "label": "Location",
        "value": "Engine compartment, passenger-side / vehicle-right area. Alex Verified from your actual Buick photos."
      },
      {
        "label": "Service interval",
        "value": "Inspect at Maintenance II intervals. Replace at first oil change after each 50,000-mile interval. Inspect every oil change in dusty/dirty conditions."
      },
      {
        "label": "Main filter",
        "value": "GM 55560894 / ACDelco A3128C. GM Verified."
      },
      {
        "label": "Full air cleaner assembly",
        "value": "GM 13279567 appears for 2010-2011 LaCrosse 3.0L/3.6L applications. VIN verification still recommended before buying."
      },
      {
        "label": "Outlet duct",
        "value": "GM 13250251. Listed as air cleaner outlet duct for 2010-2011 LaCrosse."
      },
      {
        "label": "MAF sensor",
        "value": "GM 92196278. GM lists it for 2010-2011 LaCrosse."
      },
      {
        "label": "Tool used in app",
        "value": "T25 Torx for the six lid screws. Alex Verified."
      },
      {
        "label": "Torque",
        "value": "TBD. No verified published airbox screw torque found yet. Snug evenly only."
      }
    ],
    "bullets": [
      "Do not drive with the air cleaner/filter off.",
      "Check filter seal seating before closing the lid.",
      "Do not overtighten screws into plastic.",
      "App map status: outline locked, screw/clip highlights approved.",
      "Next data work: weigh the filter, weigh the lid/assembly, confirm any separate lid/lower housing part numbers."
    ],
    "source": "2010 Owner Manual, GM Parts, OEM parts listings, Alex Verified app map and location correction and location correction"
  },
  "overview": {
    "title": "What the Airbox Does",
    "status": "Alex Verified + GM Manual Supported",
    "summary": "The airbox is a sealed container for the engine air filter. Its job is to route air through the filter before it enters the intake duct and MAF area.",
    "sections": [
      {
        "label": "Primary job",
        "value": "Filters incoming air before it reaches the engine."
      },
      {
        "label": "Secondary job",
        "value": "Holds the filter flat so the rubber seal can block unfiltered bypass air."
      },
      {
        "label": "Airflow path",
        "value": "Outside air → airbox/filter → outlet duct/intake tube → MAF area → throttle/intake path."
      },
      {
        "label": "Sealing importance",
        "value": "A dirty or poorly seated filter can let debris or unmetered airflow issues start near the intake."
      },
      {
        "label": "Noise control",
        "value": "The housing and duct shape also help quiet intake pulses compared with an open filter setup."
      }
    ],
    "bullets": [
      "The filter is only useful if the lid is seated and the seal is flat.",
      "Plastic tabs, screw bosses, and clip points matter because they create clamping force.",
      "Loose clamps or cracks downstream of the MAF can affect how the ECM interprets airflow.",
      "The app treats this as an assembly, not one single part, because service involves the lid, filter, lower box, duct, clip, screws, and MAF area."
    ],
    "source": "Owner Manual + general intake system logic + Alex Verified location"
  },
  "service": {
    "title": "Inspection & Replacement",
    "status": "GM Manual Verified",
    "summary": "The 2010 LaCrosse owner manual gives the replacement interval and the basic V6 procedure.",
    "sections": [
      {
        "label": "Normal inspection",
        "value": "Inspect the air cleaner/filter at Maintenance II intervals."
      },
      {
        "label": "Normal replacement",
        "value": "Replace at the first oil change after each 80,000 km / 50,000 mile interval."
      },
      {
        "label": "Dusty/dirty use",
        "value": "Inspect the filter at each engine oil change."
      },
      {
        "label": "Manual inspection method",
        "value": "Remove the filter and lightly shake loose dust/dirt out. If it remains caked with dirt, replace it."
      },
      {
        "label": "V6 procedure",
        "value": "Remove screws, lift the cover, pull filter, inspect/replace, lower cover, reinstall screws."
      },
      {
        "label": "Driving warning",
        "value": "Manual warns not to drive with the air cleaner/filter off because dirt can enter and damage the engine."
      }
    ],
    "bullets": [
      "In the app, use Guide Me before Learn if you are physically doing the job.",
      "Keep loose dirt out of the lower box and intake duct opening.",
      "Set the filter evenly into the lower housing before closing.",
      "When closing, look around the whole perimeter for a pinched seal.",
      "Snug screws evenly. Do not crank down into plastic."
    ],
    "source": "2010 Buick LaCrosse Owner Manual"
  },
  "filter": {
    "title": "Air Filter Element",
    "status": "GM Verified + Catalog Verified Dimensions",
    "summary": "The filter is the replaceable paper panel element inside the airbox.",
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
        "value": "Rectangle / panel engine air filter."
      },
      {
        "label": "Media",
        "value": "Paper filter media listed by parts catalog."
      },
      {
        "label": "Seal",
        "value": "Gasket/seal included according to catalog listing."
      },
      {
        "label": "Catalog dimensions",
        "value": "291 mm x 259 mm x 42.5 mm, with 15.5 mm gasket thickness listed by catalog."
      },
      {
        "label": "Reusable?",
        "value": "Catalog listing says reusable: No."
      },
      {
        "label": "Weight",
        "value": "TBD. Best next move: weigh your old/new filter on a small scale."
      }
    ],
    "bullets": [
      "Replace if it stays caked with dirt after lightly shaking loose dust out.",
      "Replace if wet, oil-soaked, torn, warped, mouse-damaged, or if the rubber seal is damaged.",
      "Do not wash a paper filter.",
      "Do not install backward or with a folded edge.",
      "A clean-looking top does not mean the pleats are clean. Inspect between pleats."
    ],
    "source": "GM Parts 55560894 + AutoZone A3128C catalog specs"
  },
  "assembly": {
    "title": "Air Cleaner Assembly",
    "status": "OEM Listing Verified, VIN Check Recommended",
    "summary": "The full air cleaner assembly is the larger housing system, not just the filter.",
    "sections": [
      {
        "label": "Likely GM part number",
        "value": "13279567"
      },
      {
        "label": "Other name",
        "value": "Air Cleaner Assembly / Air Cleaner."
      },
      {
        "label": "Listed description",
        "value": "3.0L & 3.6L; filters air through the intake and helps provide clean air/fuel mixture for combustion."
      },
      {
        "label": "Availability",
        "value": "Some listings show discontinued/unavailable, so used OEM may be realistic."
      },
      {
        "label": "Includes",
        "value": "May include housing pieces and related included hardware depending on listing. Confirm before buying."
      },
      {
        "label": "Weight",
        "value": "TBD."
      },
      {
        "label": "Material",
        "value": "Molded plastic, exact polymer TBD."
      }
    ],
    "bullets": [
      "Always VIN-check this before ordering.",
      "A used assembly should be checked for broken tabs, cracked screw bosses, missing insulators, missing duct/clamp pieces, and damaged clip points.",
      "Do not assume a 2.4L/eAssist airbox is the same as the 3.0L V6 airbox.",
      "If buying used, get pictures of every side, the screw bosses, the clip edge, and the duct connection."
    ],
    "source": "GMPartsDirect/OEM listings for 13279567"
  },
  "cover": {
    "title": "Upper Cover & Seal Surface",
    "status": "Alex Verified, Separate Part Number TBD",
    "summary": "The upper cover clamps the filter down and seals the top side of the airbox.",
    "sections": [
      {
        "label": "Separate lid part number",
        "value": "TBD. Current verified number is for the full assembly, not confidently the lid alone."
      },
      {
        "label": "Fasteners",
        "value": "Six screw highlights mapped in app. Alex Verified."
      },
      {
        "label": "Rear clip",
        "value": "One rear clip highlight mapped in app. Alex Verified."
      },
      {
        "label": "Tool",
        "value": "T25 Torx. Alex Verified."
      },
      {
        "label": "Torque",
        "value": "TBD. No verified published torque found for lid screws."
      },
      {
        "label": "Seal role",
        "value": "Compresses the filter edge evenly against the lower housing."
      }
    ],
    "bullets": [
      "Inspect screw bosses for cracks or stripped plastic.",
      "Inspect the rear clip area for broken plastic or weak retention.",
      "Check the entire lid edge for warping.",
      "If the lid is not seated, the filter may not seal.",
      "Tighten evenly around the perimeter. The goal is sealed and snug, not crushed."
    ],
    "source": "Alex Verified mapping + owner manual procedure"
  },
  "lower": {
    "title": "Lower Airbox Housing",
    "status": "Needs More Verification",
    "summary": "The lower housing is the base the filter sits in. It also acts like a debris pocket before the air continues through the filtered path.",
    "sections": [
      {
        "label": "Separate lower housing part number",
        "value": "TBD."
      },
      {
        "label": "Function",
        "value": "Supports the filter and creates the lower sealing surface."
      },
      {
        "label": "Debris area",
        "value": "Leaves, sand, and grit can collect below/around the filter area."
      },
      {
        "label": "Mounting",
        "value": "Likely uses rubber/insulator mounting points. Exact Buick layout needs deeper parts-diagram confirmation."
      },
      {
        "label": "Weight",
        "value": "TBD."
      }
    ],
    "bullets": [
      "Vacuum loose debris out while the filter is removed.",
      "Do not push debris into the clean side of the intake path.",
      "Check the lower edge where the filter seal sits.",
      "Look for cracks around mount points or corners.",
      "Check that the airbox does not rattle or move excessively."
    ],
    "source": "Visual inspection logic + parts-diagram research still needed"
  },
  "duct": {
    "title": "Outlet Duct / Intake Tube",
    "status": "OEM Listing Verified",
    "summary": "The outlet duct routes filtered air away from the airbox toward the intake/MAF area.",
    "sections": [
      {
        "label": "GM part number",
        "value": "13250251"
      },
      {
        "label": "Other name",
        "value": "Air Cleaner Outlet Duct / Outlet Duct."
      },
      {
        "label": "Listed fitment",
        "value": "2010-2011 Buick LaCrosse listings show this duct."
      },
      {
        "label": "Listed engine note",
        "value": "3.0L & 3.6L / 3.6L listed by OEM parts sellers."
      },
      {
        "label": "Function",
        "value": "Guides airflow to/from the air cleaner path."
      },
      {
        "label": "Material",
        "value": "Flexible/molded plastic or rubberized ducting, exact material TBD."
      }
    ],
    "bullets": [
      "Inspect accordion ribs for cracks.",
      "Check clamps for correct seating.",
      "Look around bends and clamp ends for splits.",
      "Cracks downstream of air metering can cause weird running behavior.",
      "Do not leave harnesses or hoses rubbing sharp duct edges."
    ],
    "source": "GMPartsDirect/OEM Parts Online listing for 13250251"
  },
  "maf": {
    "title": "MAF Sensor Area",
    "status": "GM Verified Part Number",
    "summary": "The MAF sensor measures the amount of air entering the engine so the ECM can calculate fuel delivery.",
    "sections": [
      {
        "label": "GM part number",
        "value": "92196278"
      },
      {
        "label": "ACDelco part number",
        "value": "92196278"
      },
      {
        "label": "GM listed fitment",
        "value": "GM Parts lists LaCrosse 2010 and 2011 under this sensor."
      },
      {
        "label": "Connector",
        "value": "GM listing shows 1 connector, trapezoid shape, female connector, 5 blade terminals."
      },
      {
        "label": "Mounting hardware",
        "value": "GM sensor listing says mounting hardware included: No."
      },
      {
        "label": "MAF bolt",
        "value": "GM 13306967, listed as Air Mass Sensor Bolt for 2010-2013 LaCrosse."
      },
      {
        "label": "MAF gasket/seal",
        "value": "15813321 appears in GMPartsDirect diagram notes as Mass Airflow Sensor Gasket / Air Mass Sensor Seal; needs final VIN/diagram check."
      }
    ],
    "bullets": [
      "Do not touch the sensing element with fingers or tools.",
      "If unplugging, inspect connector lock and pins for corrosion/damage.",
      "If cleaning later, use proper MAF cleaner only. Do not use brake cleaner or carb cleaner on a MAF sensor.",
      "MAF-related diagnostics should get their own module later because codes can be caused by wiring, duct leaks, vacuum leaks, fuel trims, or sensor faults.",
      "Future OBD2 module can link P0101/P0102/P0103-style logic here, but that is not part of Airbox V1."
    ],
    "source": "GM Parts MAF listing + OEM bolt listing + GMPartsDirect diagram"
  },
  "fasteners": {
    "title": "Screws & Rear Clip",
    "status": "Alex Verified, Torque TBD",
    "summary": "The app currently maps six screw highlights and one rear clip highlight. You confirmed the visual style looks right.",
    "sections": [
      {
        "label": "Screw count",
        "value": "6 mapped screw highlights."
      },
      {
        "label": "Clip count",
        "value": "1 mapped rear clip highlight."
      },
      {
        "label": "Tool",
        "value": "T25 Torx. Alex Verified."
      },
      {
        "label": "Marker style",
        "value": "Small screw-style highlights, not large button dots. Alex Approved."
      },
      {
        "label": "Torque",
        "value": "TBD. Leave as unverified until a service source is found."
      },
      {
        "label": "Thread location",
        "value": "Screws thread into plastic airbox bosses, so overtightening risk is high."
      }
    ],
    "bullets": [
      "Use a seated T25 bit and keep the bit straight.",
      "Crack each screw loose before spinning them out fast.",
      "When reinstalling, start each screw before fully tightening any one screw.",
      "If a screw spins without tightening, suspect a stripped plastic boss.",
      "If the rear clip is tight, do not force it blindly. Look at how it hooks before prying."
    ],
    "source": "Alex Verified app map + general plastic fastener practice"
  },
  "inspection": {
    "title": "Inspection Checklist",
    "status": "Alex Work-Flow Verified",
    "summary": "Use this when the lid is open. This turns Learn into an actual work checklist.",
    "sections": [
      {
        "label": "Before opening",
        "value": "Engine off, keys away, avoid hot/moving parts."
      },
      {
        "label": "Filter top",
        "value": "Look for heavy dirt, oil, water marks, leaves, bugs, or damaged pleats."
      },
      {
        "label": "Filter seal",
        "value": "Check for cuts, flattening, distortion, or folded corners."
      },
      {
        "label": "Lower box",
        "value": "Remove loose debris without pushing it toward the intake path."
      },
      {
        "label": "Lid",
        "value": "Inspect screw bosses, rear clip edge, warping, and sealing perimeter."
      },
      {
        "label": "Duct",
        "value": "Check accordion ribs, clamps, and tube ends for cracks or loose seating."
      },
      {
        "label": "MAF connector",
        "value": "Make sure the connector is locked and wiring is not pulled tight."
      }
    ],
    "bullets": [
      "Good filter: pleats still open, seal intact, no water/oil damage, not packed with dirt.",
      "Bad filter: caked dirt remains after light shake, seal damage, torn media, wet/oily media, or heavy debris.",
      "Good airbox: lid sits flat, screws snug, clip engaged, no broken plastic, no loose duct.",
      "Bad airbox: stripped bosses, cracked duct, missing clip tension, warped lid, damaged filter seat."
    ],
    "source": "Owner manual method + Alex workflow"
  },
  "diagnostics": {
    "title": "Symptoms & Failure Modes",
    "status": "General Diagnostic Logic, Not a Diagnosis",
    "summary": "This page does not diagnose the car by itself. It tells you what the airbox can realistically affect and what to inspect first.",
    "sections": [
      {
        "label": "Dirty/caked filter",
        "value": "May restrict airflow and reduce performance or efficiency."
      },
      {
        "label": "Filter not seated",
        "value": "Can allow unfiltered air to bypass the filter edge."
      },
      {
        "label": "Loose lid",
        "value": "Can cause intake noise, poor sealing, or dirt bypass."
      },
      {
        "label": "Cracked duct",
        "value": "Can cause airflow metering problems depending on where the crack is."
      },
      {
        "label": "Loose MAF connector",
        "value": "Can cause signal issues, warning lights, or running problems."
      },
      {
        "label": "Water/debris intrusion",
        "value": "Can damage the filter and affect airflow quality."
      }
    ],
    "bullets": [
      "Check the simple physical stuff before blaming sensors.",
      "If the filter is new but symptoms remain, inspect the duct and clamps.",
      "If MAF codes appear, check wiring and duct leaks before buying a sensor.",
      "Do not throw parts at it without codes/live data/visual inspection.",
      "This module links symptoms to components. A full diagnostic tree can be added later."
    ],
    "source": "General diagnostic logic + future OBD2 roadmap"
  },
  "buying": {
    "title": "Buying / Replacement Notes",
    "status": "Practical + Verification Needed",
    "summary": "This page helps avoid buying the wrong part while the Buick-specific catalog is still being confirmed.",
    "sections": [
      {
        "label": "Always confirm",
        "value": "Use VIN fitment before ordering airbox, duct, MAF, or hardware."
      },
      {
        "label": "Filter confidence",
        "value": "GM 55560894 / ACDelco A3128C is high confidence."
      },
      {
        "label": "Assembly confidence",
        "value": "13279567 is strong listing confidence for 2010-2011 LaCrosse air cleaner assembly, but final VIN check remains."
      },
      {
        "label": "Duct confidence",
        "value": "13250251 is listed as air cleaner outlet duct for 2010-2011 LaCrosse."
      },
      {
        "label": "MAF confidence",
        "value": "92196278 is GM-listed for 2010-2011 LaCrosse."
      },
      {
        "label": "Used part check",
        "value": "Ask for photos of tabs, screw bosses, duct ends, clip points, and sensor mounting area."
      }
    ],
    "bullets": [
      "Do not assume every 2010-2016 LaCrosse uses the same airbox.",
      "Engine, trim, model year, and eAssist differences can matter.",
      "For used airboxes, missing rubber insulators or cracked screw bosses can make a cheap part annoying.",
      "For filters, OE-style paper panel is the clean safest baseline.",
      "Oiled aftermarket filters near a MAF system should be treated carefully and researched before use."
    ],
    "source": "GM/OEM listings + practical fitment logic"
  },
  "engineer": {
    "title": "Engineer’s Corner",
    "status": "Educational, Not Service Spec",
    "summary": "Why the boring plastic box actually matters.",
    "sections": [
      {
        "label": "Seal > size",
        "value": "A filter with a perfect seal protects better than a poorly sealed high-flow filter."
      },
      {
        "label": "Pleats",
        "value": "Pleats increase surface area so the filter can flow air while trapping dirt."
      },
      {
        "label": "Airbox volume",
        "value": "The box acts like a calm chamber before the duct, helping reduce turbulence and intake noise."
      },
      {
        "label": "MAF sensitivity",
        "value": "The MAF sensor wants predictable, clean airflow. Duct leaks or turbulence can make readings less stable."
      },
      {
        "label": "Plastic housing",
        "value": "Plastic is light, corrosion-proof, cheap to mold, and good at reducing intake heat transfer compared with metal."
      },
      {
        "label": "Service design",
        "value": "Screws and clips are annoying, but they create controlled clamping around the filter seal."
      }
    ],
    "bullets": [
      "The airbox is not just a container. It is part of the airflow system.",
      "The filter edge is basically a gasket.",
      "The MAF is only as trustworthy as the air path around it.",
      "The app’s component map is useful because every failure mode connects to a visible part."
    ],
    "source": "Engineering logic based on intake/filter function"
  },
  "dataStatus": {
    "title": "Verification Status",
    "status": "Gold Standard Data Audit",
    "summary": "This separates locked app work from still-open data work.",
    "sections": [
      {
        "label": "Locked",
        "value": "Airbox outline, menu photo size, screw highlight style, clip highlight style, guide flow."
      },
      {
        "label": "Alex Verified",
        "value": "Visual map, six screw locations, rear clip visual location, T25 tool in app workflow."
      },
      {
        "label": "GM Verified",
        "value": "Owner manual interval/procedure/warning, GM 55560894 air filter, GM 92196278 MAF sensor."
      },
      {
        "label": "Strong OEM listing",
        "value": "13279567 air cleaner assembly, 13250251 outlet duct, 13306967 MAF bolt."
      },
      {
        "label": "Needs Verification",
        "value": "Separate upper lid part number, separate lower housing part number, exact airbox material, exact weights, screw torque."
      },
      {
        "label": "Next best real-world data",
        "value": "Weigh old/new filter, measure screw head/length if removed, photo underside of lid, photo lower housing empty, confirm VIN catalog at dealer."
      }
    ],
    "bullets": [
      "No guessed torque specs were added.",
      "No guessed weights were added.",
      "Part numbers that still need VIN confirmation are labeled that way.",
      "This is the standard we should use for every future component."
    ],
    "source": "Current app state + verified source audit"
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
  const data=parts[id]||parts.quickstart;
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

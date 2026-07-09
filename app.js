const screens=["home","engine","airbox","guide","learn","maintenance","coolant","coolantguide","coolantlearn","coolantmaintenance"];
const names={home:["MY BUICK","2010 Buick LaCrosse CXL"],engine:["VEHICLE","Engine Bay"],airbox:["ENGINE BAY","Airbox"],guide:["AIRBOX","Guide Me"],learn:["AIRBOX","Learn"],maintenance:["AIRBOX","Maintenance"],coolant:["ENGINE BAY","Coolant Reservoir"],coolantguide:["COOLANT","Guide Me"],coolantlearn:["COOLANT","Learn"],coolantmaintenance:["COOLANT","Maintenance"]};
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
  },
  {
    id:"coolant",
    name:"Coolant",
    status:"locked",
    target:"coolant",
    frame:{x:69.53,y:38.41,w:10.50,h:7.23},
    label:{x:52,y:54},
    viewBox:"0 0 100 100",
    path:"M 76 2.7 L 71.1 0 L 26.4 0.9 L 13.2 3.6 L 4.1 9.9 L 0.8 20.7 L 4.1 26.1 L 3.3 38.7 L 7.4 61.3 L 0 71.2 L 1.7 88.3 L 9.1 98.2 L 15.7 99.1 L 19.8 86.5 L 31.4 78.4 L 38 78.4 L 40.5 81.1 L 96.7 78.4 L 99.2 58.6 L 92.6 46.8 L 81 10.8 Z"
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

const coolantGuideSteps=[
  {
    check:"1",
    title:"Location + Cold Safety",
    text:"Start with the reservoir location. Confirm the engine is cold before touching the coolant cap or reservoir area.",
    img:"images/coolant/07_passenger_side_context.jpg",
    spot:{x:50,y:30,lx:63,ly:20,label:"Reservoir location"},
    tags:["Passenger side","Cold only","Context"]
  },
  {
    check:"2",
    title:"Level + Coolant Color",
    text:"Use the side-angle photo to judge visible coolant level and color. The goal is tracking changes over time, not guessing from one photo.",
    img:"images/coolant/04_side_hose_level_angle.jpg",
    spot:{x:70,y:48,lx:58,ly:62,label:"Visible level area"},
    tags:["Orange coolant","Level line","Log changes"]
  },
  {
    check:"3",
    title:"Pressure Cap",
    text:"The cap is photo-verified at 140 kPa / 20 PSI. Inspect the cap area for staining, crust, cracking, or wetness, but do not open it hot.",
    img:"images/coolant/01_cap_closeup_140kpa_20psi.jpg",
    spot:{x:56,y:39,lx:70,ly:27,label:"140 kPa / 20 PSI cap"},
    tags:["140 kPa","20 PSI","Do not open hot"]
  },
  {
    check:"4",
    title:"Front Hose + Clamp",
    text:"Inspect the front hose, clamp, and plastic nipple area. Look for rusted clamp edges, dampness, dried coolant trail, swelling, or cracks.",
    img:"images/coolant/03_front_hose_clamp_closeup.jpg",
    spot:{x:43,y:50,lx:25,ly:49,label:"Hose clamp"},
    tags:["Front hose","Clamp","Leak signs"]
  },
  {
    check:"4",
    title:"Lower Hose + Clamp",
    text:"Inspect the lower hose and clamp close-up. This photo gives the best view of the lower connection, while surrounding areas remain partially blocked.",
    img:"images/coolant/05_lower_hose_clamp_closeup.jpg",
    spot:{x:41,y:36,lx:56,ly:27,label:"Lower hose connection"},
    tags:["Lower hose","Partially blocked","Clamp"]
  },
  {
    check:"5",
    title:"Side Seam + Mount Area",
    text:"Use this right-side view to inspect the visible reservoir side, nearby mount, and clearance area. Hidden zones stay marked as obstructed.",
    img:"images/coolant/06_right_side_clearance_mount.jpg",
    spot:{x:78,y:43,lx:57,ly:35,label:"Visible side seam"},
    tags:["Side seam","Mount area","Obstructed zones"]
  },
  {
    check:"5",
    title:"Final Context Check",
    text:"Finish by checking the reservoir in context with the battery, fuse box, brake reservoir, and cowl. Then log what you found.",
    img:"images/coolant/00_reservoir_wide.jpg",
    spot:{x:67,y:28,lx:47,ly:19,label:"Coolant reservoir"},
    tags:["Wide view","Relationship map","Log it"]
  }
];
const parts={
  "quickstart": {
    "title": "Airbox Quick Sheet",
    "status": "Simple View",
    "summary": "The short version of the airbox: what it is, what fits, how often to service it, and what is still TBD.",
    "sections": [],
    "bullets": [
      "The airbox protects the engine by making air pass through the filter.",
      "The filter only works right if the lid and seal are seated evenly.",
      "A replacement filter is maintenance first, performance second.",
      "The app’s outline, screws, and clip are visually locked for Airbox V1."
    ],
    "source": "2010 Owner Manual, GM Parts, OEM parts listings, Alex Verified app map and location correction and location correction",
    "quickFacts": [
      {
        "label": "Location",
        "value": "Passenger-side / vehicle-right. Alex Verified."
      },
      {
        "label": "Filter",
        "value": "GM 55560894 / ACDelco A3128C."
      },
      {
        "label": "Interval",
        "value": "Replace at first oil change after each 50,000-mile interval."
      },
      {
        "label": "Tool",
        "value": "T25 Torx."
      },
      {
        "label": "Performance",
        "value": "No guaranteed HP gain from a drop-in filter."
      },
      {
        "label": "Still TBD",
        "value": "Weights, screw torque, separate lid/lower housing numbers."
      }
    ],
    "detailPages": [
      "overview",
      "service",
      "partsSimple",
      "replacementSimple",
      "dataStatus"
    ]
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
    "title": "Replacement / Upgrade Options",
    "status": "Price Snapshot + Performance Reality Check",
    "summary": "This tab compares the realistic options for the airbox system. It separates guaranteed maintenance value from unverified horsepower claims.",
    "sections": [
      {
        "label": "Rule #1",
        "value": "A clean filter usually restores lost performance. It does not magically add big horsepower on a stock engine."
      },
      {
        "label": "HP gain status",
        "value": "No Buick 3.0L LF1 dyno proof found for a drop-in filter. App uses conservative expected gain and marks claims clearly."
      },
      {
        "label": "Weight difference status",
        "value": "Exact weights are TBD until you weigh the OEM filter, K&N filter, lid, lower housing, and full assembly."
      },
      {
        "label": "Price status",
        "value": "Prices are snapshots and can change by store, sale, shipping, and availability."
      },
      {
        "label": "Best baseline",
        "value": "OEM-style paper filter is the safest default for reliability, filtration, and normal service."
      }
    ],
    "options": [
      {
        "name": "OEM-style paper filter",
        "part": "GM 55560894 / ACDelco A3128C",
        "price": "$29.99 snapshot",
        "hp": "0 hp gain if old filter was fine. Can restore lost power if the old filter was heavily restricted.",
        "weight": "TBD. Difference from current filter likely tiny. Needs scale.",
        "value": "Best reliability baseline",
        "risk": "Low. Designed for correct sealing and filtration.",
        "notes": "Recommended default replacement. Follow owner manual interval."
      },
      {
        "name": "Economy paper filter",
        "part": "Store-brand equivalent",
        "price": "TBD, usually cheaper than OE. Needs current store check.",
        "hp": "0 hp gain. Same goal as OE: clean, sealed airflow.",
        "weight": "TBD. Usually not meaningful.",
        "value": "Budget replacement",
        "risk": "Depends on seal quality and fitment. Inspect edges before installing.",
        "notes": "Could be fine, but the app should not call it verified until a specific part is chosen."
      },
      {
        "name": "K&N reusable drop-in filter",
        "part": "K&N 33-2442",
        "price": "$83.99 snapshot",
        "hp": "Manufacturer markets it as designed to increase horsepower/acceleration. Buick-specific dyno gain is unverified. Realistic app estimate: 0 to 3 hp on a stock setup.",
        "weight": "TBD. Needs scale vs OEM paper filter.",
        "value": "Reusable / enthusiast option",
        "risk": "Needs cleaning/oiling correctly. Over-oiling near a MAF system is something to avoid.",
        "notes": "Good app label: Performance claim unverified until dyno or trustworthy test."
      },
      {
        "name": "Full OEM air cleaner assembly",
        "part": "GM 13279567",
        "price": "TBD / market varies",
        "hp": "0 hp gain. Restores proper sealing if the old housing is cracked, warped, or broken.",
        "weight": "TBD. Full assembly weight needs scale or verified catalog spec.",
        "value": "Repair broken housing",
        "risk": "Used parts may have cracked tabs, stripped screw bosses, or missing hardware.",
        "notes": "VIN-check before buying. Ask for photos of all screw bosses and clip points."
      },
      {
        "name": "Outlet duct / intake tube",
        "part": "GM 13250251",
        "price": "TBD / needs current source check",
        "hp": "0 hp gain unless the old duct is cracked/leaking. Then it restores proper airflow behavior.",
        "weight": "TBD. Likely small difference unless replacing a damaged duct.",
        "value": "Fix cracked duct / restore seal",
        "risk": "Wrong duct or loose clamp can cause fitment or air-metering issues.",
        "notes": "Inspect accordion ribs and clamp ends before replacing other parts."
      },
      {
        "name": "MAF sensor replacement",
        "part": "GM / ACDelco 92196278",
        "price": "$101.99 snapshot for ACDelco 92196278 at AutoZone",
        "hp": "0 hp upgrade. Only restores drivability/power if the sensor is actually bad.",
        "weight": "Not meaningful for performance.",
        "value": "Diagnostic repair only",
        "risk": "Do not replace just because of a code. Check duct leaks, connector, wiring, and data first.",
        "notes": "Future OBD2 module can make this much smarter."
      }
    ],
    "bullets": [
      "Best HP-per-dollar mod here is probably none. The airbox is more about reliability, sealing, and maintenance.",
      "Best maintenance value: ACDelco/OE-style paper filter.",
      "Best enthusiast option: K&N drop-in, but only with honest unverified HP labeling.",
      "Best repair option: replace housing/duct only if cracked, broken, warped, or not sealing.",
      "Best future data: weigh each part, log actual prices paid, and dyno or dragy-test before/after if you ever want real performance numbers."
    ],
    "source": "GM Parts, AutoZone, K&N listing, OEM listings, Alex Verified app data"
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
      },
      {
        "label": "Replacement tab added",
        "value": "HP gain, price, weight difference, value, risk, and notes added for OEM filter, economy filter, K&N, full assembly, duct, and MAF."
      },
      {
        "label": "Performance honesty rule",
        "value": "No unverified air filter horsepower claim is treated as guaranteed. Claims stay marked as manufacturer claim or app estimate until tested."
      }
    ],
    "bullets": [
      "No guessed torque specs were added.",
      "No guessed weights were added.",
      "Part numbers that still need VIN confirmation are labeled that way.",
      "This is the standard we should use for every future component.",
      "Replacement prices are snapshots and should be updated when you actually shop or buy.",
      "Weight differences remain TBD until parts are weighed."
    ],
    "source": "Current app state + verified source audit"
  },
  "serviceSimple": {
    "title": "Service & Inspection",
    "status": "Simple View",
    "summary": "Replace the filter at the manual interval, inspect it more often in dusty/dirty conditions, and check the seal every time the lid is open.",
    "quickFacts": [
      {
        "label": "Normal interval",
        "value": "Replace at the first oil change after each 50,000-mile interval."
      },
      {
        "label": "Dusty/dirty use",
        "value": "Inspect every oil change."
      },
      {
        "label": "Tool",
        "value": "T25 Torx for the six lid screws."
      },
      {
        "label": "Do not",
        "value": "Do not drive with the air cleaner/filter removed."
      }
    ],
    "bullets": [
      "Inspect the filter pleats, rubber seal, lower box, lid seating, duct, and MAF connector.",
      "Replace the filter if it is caked, wet, oily, torn, warped, or has a damaged seal.",
      "When reinstalling, make sure the filter sits flat and the cover closes evenly."
    ],
    "detailPages": [
      "service",
      "inspection",
      "cover",
      "lower"
    ],
    "source": "Simplified from service, inspection, cover, and lower housing pages"
  },
  "replacementSimple": {
    "title": "Replacement / Upgrade Options",
    "status": "Simple View",
    "summary": "The replacement tab keeps the realistic stuff up front: cost, power expectations, weight status, value, and risk.",
    "quickFacts": [
      {
        "label": "Best normal choice",
        "value": "OEM-style paper filter."
      },
      {
        "label": "Main filter",
        "value": "GM 55560894 / ACDelco A3128C."
      },
      {
        "label": "HP truth",
        "value": "No guaranteed HP gain from a drop-in filter."
      },
      {
        "label": "K&N option",
        "value": "K&N 33-2442, reusable, HP claim unverified on this Buick."
      },
      {
        "label": "Weights",
        "value": "TBD until parts are weighed."
      }
    ],
    "options": [
      {
        "name": "OEM-style paper filter",
        "part": "GM 55560894 / ACDelco A3128C",
        "price": "$29.99 snapshot",
        "hp": "0 hp gain if old filter was fine. Can restore lost power if the old filter was heavily restricted.",
        "weight": "TBD. Difference from current filter likely tiny. Needs scale.",
        "value": "Best reliability baseline",
        "risk": "Low. Designed for correct sealing and filtration.",
        "notes": "Recommended default replacement. Follow owner manual interval."
      },
      {
        "name": "Economy paper filter",
        "part": "Store-brand equivalent",
        "price": "TBD, usually cheaper than OE. Needs current store check.",
        "hp": "0 hp gain. Same goal as OE: clean, sealed airflow.",
        "weight": "TBD. Usually not meaningful.",
        "value": "Budget replacement",
        "risk": "Depends on seal quality and fitment. Inspect edges before installing.",
        "notes": "Could be fine, but the app should not call it verified until a specific part is chosen."
      },
      {
        "name": "K&N reusable drop-in filter",
        "part": "K&N 33-2442",
        "price": "$83.99 snapshot",
        "hp": "Manufacturer markets it as designed to increase horsepower/acceleration. Buick-specific dyno gain is unverified. Realistic app estimate: 0 to 3 hp on a stock setup.",
        "weight": "TBD. Needs scale vs OEM paper filter.",
        "value": "Reusable / enthusiast option",
        "risk": "Needs cleaning/oiling correctly. Over-oiling near a MAF system is something to avoid.",
        "notes": "Good app label: Performance claim unverified until dyno or trustworthy test."
      },
      {
        "name": "Full OEM air cleaner assembly",
        "part": "GM 13279567",
        "price": "TBD / market varies",
        "hp": "0 hp gain. Restores proper sealing if the old housing is cracked, warped, or broken.",
        "weight": "TBD. Full assembly weight needs scale or verified catalog spec.",
        "value": "Repair broken housing",
        "risk": "Used parts may have cracked tabs, stripped screw bosses, or missing hardware.",
        "notes": "VIN-check before buying. Ask for photos of all screw bosses and clip points."
      },
      {
        "name": "Outlet duct / intake tube",
        "part": "GM 13250251",
        "price": "TBD / needs current source check",
        "hp": "0 hp gain unless the old duct is cracked/leaking. Then it restores proper airflow behavior.",
        "weight": "TBD. Likely small difference unless replacing a damaged duct.",
        "value": "Fix cracked duct / restore seal",
        "risk": "Wrong duct or loose clamp can cause fitment or air-metering issues.",
        "notes": "Inspect accordion ribs and clamp ends before replacing other parts."
      },
      {
        "name": "MAF sensor replacement",
        "part": "GM / ACDelco 92196278",
        "price": "$101.99 snapshot for ACDelco 92196278 at AutoZone",
        "hp": "0 hp upgrade. Only restores drivability/power if the sensor is actually bad.",
        "weight": "Not meaningful for performance.",
        "value": "Diagnostic repair only",
        "risk": "Do not replace just because of a code. Check duct leaks, connector, wiring, and data first.",
        "notes": "Future OBD2 module can make this much smarter."
      }
    ],
    "bullets": [
      "If the old filter is dirty, a new filter can restore lost performance.",
      "If the old filter is already clean, expect little to no real horsepower gain.",
      "Replace the full airbox or duct only if cracked, broken, warped, or not sealing."
    ],
    "detailPages": [
      "buying",
      "filter",
      "assembly",
      "duct",
      "maf"
    ],
    "source": "Simplified from replacement, filter, assembly, duct, and MAF pages"
  },
  "partsSimple": {
    "title": "Parts & Specs",
    "status": "Simple View",
    "summary": "The important part numbers and TBD specs grouped into one clean page.",
    "quickFacts": [
      {
        "label": "Air filter",
        "value": "GM 55560894 / ACDelco A3128C."
      },
      {
        "label": "Air cleaner assembly",
        "value": "GM 13279567, VIN check recommended."
      },
      {
        "label": "Outlet duct",
        "value": "GM 13250251."
      },
      {
        "label": "MAF sensor",
        "value": "GM / ACDelco 92196278."
      },
      {
        "label": "MAF bolt",
        "value": "GM 13306967."
      },
      {
        "label": "Torque",
        "value": "TBD, do not guess."
      },
      {
        "label": "Weights",
        "value": "TBD, needs scale."
      }
    ],
    "bullets": [
      "The filter part number is the strongest verified part data.",
      "Assembly and duct numbers are strong OEM-listing data, but VIN confirmation is still smart.",
      "Separate lid and lower housing numbers are still not locked."
    ],
    "detailPages": [
      "filter",
      "assembly",
      "cover",
      "lower",
      "duct",
      "maf",
      "fasteners"
    ],
    "source": "Simplified from individual part pages"
  },
  "diagnosticsSimple": {
    "title": "Symptoms & Failure Modes",
    "status": "Simple View",
    "summary": "Start with the physical checks before blaming sensors or buying parts.",
    "quickFacts": [
      {
        "label": "Dirty filter",
        "value": "Can restrict airflow and reduce performance."
      },
      {
        "label": "Poor seal",
        "value": "Can let dirt bypass the filter edge."
      },
      {
        "label": "Loose lid",
        "value": "Can cause poor sealing or intake noise."
      },
      {
        "label": "Cracked duct",
        "value": "Can cause airflow-metering issues."
      },
      {
        "label": "MAF connector",
        "value": "Check before replacing the sensor."
      }
    ],
    "bullets": [
      "First check filter condition and seal.",
      "Then check lid seating and screw/clip engagement.",
      "Then check duct ribs and clamps.",
      "Then check the MAF connector and wiring."
    ],
    "detailPages": [
      "diagnostics",
      "inspection",
      "engineer"
    ],
    "source": "Simplified from diagnostics, inspection, and Engineer’s Corner"
  },
  "coolantQuick": {
    "title": "Coolant Quick Sheet",
    "status": "Gold Candidate: Photo Integrated",
    "summary": "The coolant module now combines the locked reservoir outline, your close-up photos, cap rating, hose/clamp views, level view, maintenance log, and verified/TBD system.",
    "quickFacts": [
      {
        "label": "Location",
        "value": "Passenger-side / vehicle-right rear area of engine bay. Alex Verified from wide and passenger-side context photos."
      },
      {
        "label": "Coolant type",
        "value": "DEX-COOL, silicate-free. GM Verified."
      },
      {
        "label": "Mixture",
        "value": "50/50 clean drinkable water and DEX-COOL, or approved 50/50 premix."
      },
      {
        "label": "Cap rating",
        "value": "140 kPa / 20 PSI. Alex photo verified from cap close-up."
      },
      {
        "label": "System capacity",
        "value": "3.0L V6 cooling system: 9.4 L / 9.9 qt. This is total system capacity, not reservoir-only amount."
      },
      {
        "label": "Service life",
        "value": "DEX-COOL is listed for 5 years / 150,000 miles, whichever comes first."
      },
      {
        "label": "Safety rule",
        "value": "Check cold. Do not open a hot/pressurized cap."
      },
      {
        "label": "Power gain",
        "value": "0 hp. Coolant service protects reliability and temperature control, not power."
      }
    ],
    "sections": [
      {
        "label": "Gold candidate status",
        "value": "Coolant now has a locked engine-bay outline, organized photo references, cap rating, guide flow, Learn details, and life-story maintenance."
      },
      {
        "label": "Visible verified zones",
        "value": "Reservoir body, pressure cap, visible coolant level/color, front hose/clamp, lower hose/clamp, side clearance, and passenger-side installed location."
      },
      {
        "label": "Partially obstructed zones",
        "value": "Backside/bottom of reservoir, underside mounting feet, and any hidden molded markings are not fully visible with everything installed."
      },
      {
        "label": "Owner manual supported",
        "value": "DEX-COOL, 50/50 mixture, level-surface checking, cold-system safety, and 9.4 L / 9.9 qt 3.0L V6 total cooling capacity."
      }
    ],
    "bullets": [
      "The reservoir is a clue panel: level, color, crust, wetness, smell, and cap area tell a story.",
      "A single low reading could be from service history. Repeated low readings are a pattern and should be logged.",
      "Do not mix random coolant types just because the color looks close.",
      "If the coolant is boiling in the tank, do nothing until it cools.",
      "If the car overheats, do not keep driving it hot just to see what happens."
    ],
    "detailPages": [
      "coolantService",
      "coolantPhotoMap",
      "coolantParts",
      "coolantSymptoms",
      "coolantReplacement",
      "coolantDataStatus"
    ],
    "source": "2010 Buick LaCrosse Owner Manual + GM/ACDelco coolant listing + Alex Verified outline",
    "photos": [
      {
        "src": "images/coolant/00_reservoir_wide.jpg",
        "label": "Reservoir Wide",
        "note": "Main installed view for coolant module."
      },
      {
        "src": "images/coolant/01_cap_closeup_140kpa_20psi.jpg",
        "label": "Pressure Cap",
        "note": "Verifies 140 kPa / 20 PSI cap label."
      },
      {
        "src": "images/coolant/04_side_hose_level_angle.jpg",
        "label": "Level / Side Angle",
        "note": "Shows coolant color and level through reservoir."
      },
      {
        "src": "images/coolant/03_front_hose_clamp_closeup.jpg",
        "label": "Front Hose Clamp",
        "note": "Visible hose, clamp, nipple area."
      }
    ]
  },
  "coolantService": {
    "title": "Gold Visual Inspection",
    "status": "Photo-Guided Inspection",
    "summary": "Use the uploaded photos as the inspection map: cap, level/color, front hose, lower hose, side clearance, seams, and the areas that are partially blocked.",
    "quickFacts": [
      {
        "label": "Step 1",
        "value": "Passenger-side context: confirm location and engine cold."
      },
      {
        "label": "Step 2",
        "value": "Level/side angle: verify orange coolant level and condition through the tank."
      },
      {
        "label": "Step 3",
        "value": "Cap close-up: verify 140 kPa / 20 PSI and inspect cap/neck area."
      },
      {
        "label": "Step 4",
        "value": "Front hose close-up: inspect clamp, hose condition, and nipple area."
      },
      {
        "label": "Step 5",
        "value": "Lower hose close-up: inspect clamp, printed hose marking, seepage/crust, and nearby mount."
      },
      {
        "label": "Step 6",
        "value": "Right-side clearance: inspect visible seam/mount area and mark hidden zones as partially obstructed."
      },
      {
        "label": "Step 7",
        "value": "Log the result in Maintenance so repeated low level or top-offs become a pattern."
      }
    ],
    "sections": [
      {
        "label": "Cold safety",
        "value": "Coolant system must be cool before touching/removing the cap. The cap warning is not decoration."
      },
      {
        "label": "Level and color",
        "value": "Your side photos show orange coolant visible in the tank. The app should track whether the level changes over time, not just one reading."
      },
      {
        "label": "Cap verification",
        "value": "Cap top reads 140 kPa / 20 PSI. This is photo verified."
      },
      {
        "label": "Front hose/clamp",
        "value": "Visible front hose and clamp are mapped as inspection points for cracking, swelling, crust, wetness, or loose clamp behavior."
      },
      {
        "label": "Lower hose/clamp",
        "value": "Lower hose/clamp and nearby mount are visible enough to inspect, but surrounding parts block a perfect straight-on view."
      },
      {
        "label": "Hidden areas",
        "value": "Backside, underside, and some mounting points remain partially obstructed with battery/fuse/engine-bay components installed."
      }
    ],
    "bullets": [
      "Look for wetness, crust, stains, cracks, swollen rubber, loose clamps, and repeated low level.",
      "Photograph leaks before wiping them off.",
      "A top-off is a maintenance event and should be logged.",
      "If level keeps dropping, do not call it normal.",
      "Hidden areas stay marked as partially obstructed until the car is already apart for another job."
    ],
    "detailPages": [
      "coolantPhotoMap",
      "coolantSymptoms",
      "coolantDataStatus"
    ],
    "source": "Alex photo set + 2010 Buick LaCrosse owner manual safety/service guidance",
    "photos": [
      {
        "src": "images/coolant/00_reservoir_wide.jpg",
        "label": "Reservoir Wide",
        "note": "Main installed view for coolant module."
      },
      {
        "src": "images/coolant/01_cap_closeup_140kpa_20psi.jpg",
        "label": "Pressure Cap",
        "note": "Verifies 140 kPa / 20 PSI cap label."
      },
      {
        "src": "images/coolant/04_side_hose_level_angle.jpg",
        "label": "Level / Side Angle",
        "note": "Shows coolant color and level through reservoir."
      },
      {
        "src": "images/coolant/03_front_hose_clamp_closeup.jpg",
        "label": "Front Hose Clamp",
        "note": "Visible hose, clamp, nipple area."
      },
      {
        "src": "images/coolant/05_lower_hose_clamp_closeup.jpg",
        "label": "Lower Hose Clamp",
        "note": "Lower hose/clamp and nearby mount reference."
      },
      {
        "src": "images/coolant/06_right_side_clearance_mount.jpg",
        "label": "Right Side Clearance",
        "note": "Side seam/mount/obstructed zone reference."
      }
    ]
  },
  "coolantParts": {
    "title": "Parts & Specs",
    "status": "Mixed: GM Verified + Catalog Snapshot + TBD",
    "summary": "The fluid specs are stronger than the reservoir hardware specs right now. Reservoir and cap still need VIN confirmation before Gold.",
    "quickFacts": [
      {
        "label": "Coolant type",
        "value": "DEX-COOL silicate-free engine coolant."
      },
      {
        "label": "Premix option",
        "value": "ACDelco 10-5027 / GM 12378390, Dex-Cool 50/50 premix, 1 gal."
      },
      {
        "label": "Color",
        "value": "Orange, per GM/ACDelco listing."
      },
      {
        "label": "Freeze protection",
        "value": "-34°F / -37°C for 50/50 premix."
      },
      {
        "label": "Reservoir option",
        "value": "ACDelco 22950436 appears as a coolant recovery tank listing for 2010 LaCrosse. VIN-check before Gold."
      },
      {
        "label": "Aftermarket tank option",
        "value": "Dorman 603-385 appears as an OE replacement coolant recovery tank listing. VIN-check before Gold."
      },
      {
        "label": "Cap",
        "value": "Part number and pressure rating TBD. Do not guess pressure rating."
      },
      {
        "label": "Weights",
        "value": "TBD until reservoir/cap/fluid amounts are weighed or catalog specs are found."
      }
    ],
    "sections": [
      {
        "label": "System capacity",
        "value": "3.0L V6 engine cooling system: 9.4 L / 9.9 qt total approximate capacity."
      },
      {
        "label": "Fluid compatibility",
        "value": "Manual warns to always use DEX-COOL. Wrong coolant can require earlier changes and may cause corrosion problems."
      },
      {
        "label": "Cap rating photo",
        "value": "Your cap close-up clearly shows 140 kPa / 20 PSI. Exact cap replacement part number still needs verification."
      },
      {
        "label": "Premix vs concentrate",
        "value": "Premix is ready to pour. Concentrate must be mixed correctly with the recommended water type before use."
      },
      {
        "label": "Reservoir material",
        "value": "Plastic, translucent/black style. Exact material TBD."
      },
      {
        "label": "Tank failure points",
        "value": "Seams, hose nipples, cap neck, mounting tabs, and stained/cracked plastic areas."
      },
      {
        "label": "Cap role",
        "value": "The cap controls system pressure. Wrong cap/pressure rating can create cooling-system problems."
      }
    ],
    "bullets": [
      "Use VIN fitment before buying reservoir, cap, or hose parts.",
      "Cap pressure rating matters. Do not replace it with a random cap.",
      "If the reservoir is stained but not leaking, it may still function, but visibility can be worse.",
      "If the plastic is brittle, cracked, wet, or crusty around seams, it is replacement territory.",
      "A coolant cap can be cheap but still important."
    ],
    "detailPages": [
      "coolantPhotoMap",
      "coolantReplacement",
      "coolantDataStatus"
    ],
    "source": "Owner manual + GM/ACDelco coolant listing + AutoZone/Advance catalog snapshots",
    "photos": [
      {
        "src": "images/coolant/00_reservoir_wide.jpg",
        "label": "Reservoir Wide",
        "note": "Main installed view for coolant module."
      },
      {
        "src": "images/coolant/01_cap_closeup_140kpa_20psi.jpg",
        "label": "Pressure Cap",
        "note": "Verifies 140 kPa / 20 PSI cap label."
      },
      {
        "src": "images/coolant/04_side_hose_level_angle.jpg",
        "label": "Level / Side Angle",
        "note": "Shows coolant color and level through reservoir."
      }
    ]
  },
  "coolantSymptoms": {
    "title": "Symptoms & Failure Modes",
    "status": "Diagnostic Logic + Safety Notes",
    "summary": "Coolant problems can get expensive fast. The app should help you notice patterns before they become overheating problems.",
    "quickFacts": [
      {
        "label": "Low once",
        "value": "Log it, top off correctly if needed, then watch for repeat loss."
      },
      {
        "label": "Low repeatedly",
        "value": "Possible leak or cooling-system issue. Do not ignore."
      },
      {
        "label": "White/orange crust",
        "value": "Possible dried coolant trail near cap, seams, hose ends, or fittings."
      },
      {
        "label": "Sweet smell",
        "value": "Possible coolant leak."
      },
      {
        "label": "Steam / overheating",
        "value": "Stop and let it cool. Do not open hot."
      },
      {
        "label": "Dirty/sludgy coolant",
        "value": "Needs inspection. Do not just top off and forget it."
      }
    ],
    "sections": [
      {
        "label": "Low coolant",
        "value": "Could be a leak, air pocket, previous service issue, coolant loss, cap problem, hose leak, radiator issue, water pump leak, or reservoir crack."
      },
      {
        "label": "Overheating",
        "value": "Could involve low coolant, stuck thermostat, cooling fans, radiator flow, water pump, cap pressure, air in system, or blocked flow."
      },
      {
        "label": "No cabin heat",
        "value": "Can happen with low coolant, air pockets, heater core flow issues, or temperature-control problems."
      },
      {
        "label": "Dried residue",
        "value": "A crusty trail is valuable evidence. Photograph it and log it before cleaning it off."
      },
      {
        "label": "Oil-looking coolant",
        "value": "Stop guessing and diagnose carefully. Contaminated coolant is not a normal top-off issue."
      },
      {
        "label": "Bubbles/boiling",
        "value": "If coolant is boiling in the reservoir, wait for the system to cool before doing anything else."
      }
    ],
    "bullets": [
      "Best first check: cold level, color, cap area, tank seams, hose ends, under-car drips.",
      "Repeated low coolant matters more than one random low reading.",
      "A top-off is not a repair if the level keeps dropping.",
      "Take pictures of leaks before wiping them off.",
      "Future OBD2 module can connect coolant temperature patterns to this page later."
    ],
    "detailPages": [
      "coolantService",
      "coolantEngineer",
      "coolantDataStatus"
    ],
    "source": "Owner manual warnings + general cooling-system diagnostic logic",
    "photos": [
      {
        "src": "images/coolant/00_reservoir_wide.jpg",
        "label": "Reservoir Wide",
        "note": "Main installed view for coolant module."
      },
      {
        "src": "images/coolant/01_cap_closeup_140kpa_20psi.jpg",
        "label": "Pressure Cap",
        "note": "Verifies 140 kPa / 20 PSI cap label."
      },
      {
        "src": "images/coolant/04_side_hose_level_angle.jpg",
        "label": "Level / Side Angle",
        "note": "Shows coolant color and level through reservoir."
      }
    ]
  },
  "coolantReplacement": {
    "title": "Replacement / Upgrade Notes",
    "status": "Price Snapshot + Reliability Reality Check",
    "summary": "Coolant system work is not a horsepower upgrade. It is about temperature control, leak prevention, corrosion protection, and reliability.",
    "quickFacts": [
      {
        "label": "HP gain",
        "value": "0 hp. This restores reliability, not power."
      },
      {
        "label": "System capacity",
        "value": "3.0L V6 total cooling system: 9.4 L / 9.9 qt."
      },
      {
        "label": "Coolant price",
        "value": "ACDelco 10-5027 MSRP snapshot: $20.62 / 1 gal."
      },
      {
        "label": "Reservoir price",
        "value": "Catalog snapshots: ACDelco 22950436 around $121.99, Dorman 603-385 around $61.49-$61.99."
      },
      {
        "label": "Weight difference",
        "value": "TBD. Not a performance-focused difference."
      },
      {
        "label": "Best value",
        "value": "Correct fluid and leak-free parts matter more than brand flexing."
      }
    ],
    "options": [
      {
        "name": "ACDelco Dex-Cool 50/50 Premix",
        "part": "GM 12378390 / ACDelco 10-5027",
        "price": "$20.62 MSRP snapshot / 1 gal",
        "hp": "0 hp. Restores correct coolant protection.",
        "weight": "1 gallon of premix is about 8-9 lb depending on container/fluid. App weight difference TBD.",
        "value": "Best correct-fluid baseline",
        "risk": "Low if it matches owner-manual requirements and is used correctly.",
        "notes": "Ready to use. Do not dilute premix again."
      },
      {
        "name": "Concentrate DEX-COOL",
        "part": "Specific part TBD",
        "price": "TBD",
        "hp": "0 hp.",
        "weight": "TBD",
        "value": "Useful for full service if mixed correctly",
        "risk": "Wrong mix ratio can reduce protection.",
        "notes": "Must be mixed correctly. Premix is simpler for top-offs."
      },
      {
        "name": "ACDelco coolant recovery tank",
        "part": "22950436 catalog listing",
        "price": "$121.99 snapshot",
        "hp": "0 hp. Repairs leaking/cracked reservoir only.",
        "weight": "TBD",
        "value": "OE-style replacement option",
        "risk": "Must confirm exact fitment/VIN.",
        "notes": "Use if reservoir is cracked, leaking, brittle, or cap neck/seams are damaged."
      },
      {
        "name": "Dorman coolant recovery tank",
        "part": "603-385 catalog listing",
        "price": "$61.49-$61.99 snapshot",
        "hp": "0 hp.",
        "weight": "TBD",
        "value": "Cheaper aftermarket replacement",
        "risk": "Fit/seal quality should be checked carefully.",
        "notes": "Inspect hose nipples, cap fit, mounting points, and seam quality."
      },
      {
        "name": "Pressure cap",
        "part": "TBD",
        "price": "TBD",
        "hp": "0 hp.",
        "weight": "Not meaningful",
        "value": "Small part, big pressure-control job",
        "risk": "Wrong pressure rating is bad news. Do not guess.",
        "notes": "Needs exact part number and rating before Gold."
      }
    ],
    "sections": [
      {
        "label": "When to replace coolant",
        "value": "Old age, unknown history, contamination, wrong coolant, cooling-system repairs, or service interval reached."
      },
      {
        "label": "When to replace reservoir",
        "value": "Cracks, leaks, brittle plastic, stained seams, damaged cap neck, broken mounts, or poor visibility."
      },
      {
        "label": "When to replace cap",
        "value": "Bad seal, weak pressure control, damaged threads, cracked cap, or test failure. Exact rating must be verified."
      },
      {
        "label": "Performance note",
        "value": "Cooling system parts do not add horsepower. They help keep the engine operating safely and consistently."
      }
    ],
    "bullets": [
      "Best maintenance move: correct coolant, correct level, no leaks, clean condition.",
      "Best data move: log every top-off, because repeated top-offs prove a pattern.",
      "Best buying move: VIN-check tank and cap before buying.",
      "Best future feature: link coolant temperature from OBD2 to this page later."
    ],
    "detailPages": [
      "coolantParts",
      "coolantService",
      "coolantDataStatus"
    ],
    "source": "GM/ACDelco coolant listing + AutoZone/Advance catalog snapshots + owner manual",
    "photos": [
      {
        "src": "images/coolant/00_reservoir_wide.jpg",
        "label": "Reservoir Wide",
        "note": "Main installed view for coolant module."
      },
      {
        "src": "images/coolant/01_cap_closeup_140kpa_20psi.jpg",
        "label": "Pressure Cap",
        "note": "Verifies 140 kPa / 20 PSI cap label."
      },
      {
        "src": "images/coolant/04_side_hose_level_angle.jpg",
        "label": "Level / Side Angle",
        "note": "Shows coolant color and level through reservoir."
      }
    ]
  },
  "coolantEngineer": {
    "title": "Engineer’s Corner",
    "status": "Educational",
    "summary": "Cooling systems are not just about liquid. They are about heat transfer, pressure, boiling point, corrosion control, and flow.",
    "quickFacts": [
      {
        "label": "Pressure",
        "value": "A pressurized system raises the boiling point so coolant can carry heat without boiling too early."
      },
      {
        "label": "50/50 mix",
        "value": "Balances freeze protection, boil protection, corrosion protection, and heat transfer."
      },
      {
        "label": "Water alone",
        "value": "Transfers heat well but lacks corrosion/freeze/boil protection and can be dangerous in this system."
      },
      {
        "label": "Coolant alone",
        "value": "Too much concentrate can reduce heat-transfer performance and protection balance."
      },
      {
        "label": "Air pockets",
        "value": "Air does not move heat like coolant does and can create hot spots or weird level behavior."
      }
    ],
    "sections": [
      {
        "label": "Reservoir role",
        "value": "The reservoir lets coolant expand and contract as temperature changes while keeping air out of the system when working correctly."
      },
      {
        "label": "Cap role",
        "value": "The cap is a pressure-control part. It is not just a lid."
      },
      {
        "label": "DEX-COOL role",
        "value": "DEX-COOL provides corrosion protection and temperature protection when mixed correctly."
      },
      {
        "label": "Why level matters",
        "value": "Low coolant can reduce heat transfer and let air enter parts of the system."
      },
      {
        "label": "Why contamination matters",
        "value": "Rust, oil, sludge, or wrong coolant chemistry can reduce cooling performance and damage parts."
      }
    ],
    "bullets": [
      "Coolant is a maintenance fluid and a diagnostic clue.",
      "The reservoir is one of the easiest places to spot a developing cooling problem.",
      "Pressure cap condition can affect boiling/overflow behavior.",
      "The app should eventually track temperature, level history, and top-off frequency together."
    ],
    "source": "Engineering explanation based on owner manual and coolant system function",
    "photos": [
      {
        "src": "images/coolant/00_reservoir_wide.jpg",
        "label": "Reservoir Wide",
        "note": "Main installed view for coolant module."
      },
      {
        "src": "images/coolant/01_cap_closeup_140kpa_20psi.jpg",
        "label": "Pressure Cap",
        "note": "Verifies 140 kPa / 20 PSI cap label."
      },
      {
        "src": "images/coolant/04_side_hose_level_angle.jpg",
        "label": "Level / Side Angle",
        "note": "Shows coolant color and level through reservoir."
      }
    ]
  },
  "coolantDataStatus": {
    "title": "Coolant Data Status",
    "status": "Gold Candidate Audit",
    "summary": "Coolant is now photo-integrated and very close, but true Gold still waits for final phone testing and any annoying issues you notice.",
    "quickFacts": [
      {
        "label": "Alex Verified",
        "value": "Coolant outline/tap target, reservoir location, cap label, visible level/color, front hose/clamp, lower hose/clamp, and passenger-side context."
      },
      {
        "label": "Photo Verified",
        "value": "Cap rating is 140 kPa / 20 PSI from close-up photo."
      },
      {
        "label": "GM Verified",
        "value": "DEX-COOL use, 50/50 mix, 5 yr/150k service life, 3.0L V6 capacity 9.4 L / 9.9 qt."
      },
      {
        "label": "Partially obstructed",
        "value": "Backside, underside mounting feet, lower rear tank area, and hidden molded numbers with engine bay assembled."
      },
      {
        "label": "Still TBD",
        "value": "Exact reservoir OE fitment by VIN, cap part number, cap pressure part match, hose part numbers, weights, and full removal procedure."
      }
    ],
    "sections": [
      {
        "label": "What is now locked",
        "value": "Engine-bay coolant entry point, photo set paths, Guide Me photo stepper, Learn photo map, and maintenance life-story structure."
      },
      {
        "label": "What stays honest",
        "value": "Hidden physical areas remain marked as partially obstructed rather than guessed."
      },
      {
        "label": "Final Gold test",
        "value": "Open on phone, tap Coolant, run Guide Me, open each Learn card, add/delete one log, then decide if anything feels annoying."
      }
    ],
    "bullets": [
      "Coolant is now a real module, but not Gold Standard yet.",
      "The next Gold step is better close-up photos and final part-number verification.",
      "Airbox remains the template for how coolant will eventually become Gold."
    ],
    "source": "Current app status + owner manual + catalog snapshots",
    "photos": [
      {
        "src": "images/coolant/00_reservoir_wide.jpg",
        "label": "Reservoir Wide",
        "note": "Main installed view for coolant module."
      },
      {
        "src": "images/coolant/01_cap_closeup_140kpa_20psi.jpg",
        "label": "Pressure Cap",
        "note": "Verifies 140 kPa / 20 PSI cap label."
      },
      {
        "src": "images/coolant/04_side_hose_level_angle.jpg",
        "label": "Level / Side Angle",
        "note": "Shows coolant color and level through reservoir."
      },
      {
        "src": "images/coolant/03_front_hose_clamp_closeup.jpg",
        "label": "Front Hose Clamp",
        "note": "Visible hose, clamp, nipple area."
      },
      {
        "src": "images/coolant/05_lower_hose_clamp_closeup.jpg",
        "label": "Lower Hose Clamp",
        "note": "Lower hose/clamp and nearby mount reference."
      },
      {
        "src": "images/coolant/06_right_side_clearance_mount.jpg",
        "label": "Right Side Clearance",
        "note": "Side seam/mount/obstructed zone reference."
      }
    ],
    "detailPages": [
      "coolantQuick",
      "coolantPhotoMap",
      "coolantService"
    ]
  },
  "coolantPhotoMap": {
    "title": "Photo Verification Map",
    "status": "Alex Photo Verified",
    "summary": "This page explains exactly what each organized coolant photo is used for so the app stays grounded in your real car.",
    "photos": [
      {
        "src": "images/coolant/00_reservoir_wide.jpg",
        "label": "Reservoir Wide",
        "note": "Main installed view for coolant module."
      },
      {
        "src": "images/coolant/01_cap_closeup_140kpa_20psi.jpg",
        "label": "Pressure Cap",
        "note": "Verifies 140 kPa / 20 PSI cap label."
      },
      {
        "src": "images/coolant/04_side_hose_level_angle.jpg",
        "label": "Level / Side Angle",
        "note": "Shows coolant color and level through reservoir."
      },
      {
        "src": "images/coolant/03_front_hose_clamp_closeup.jpg",
        "label": "Front Hose Clamp",
        "note": "Visible hose, clamp, nipple area."
      },
      {
        "src": "images/coolant/05_lower_hose_clamp_closeup.jpg",
        "label": "Lower Hose Clamp",
        "note": "Lower hose/clamp and nearby mount reference."
      },
      {
        "src": "images/coolant/06_right_side_clearance_mount.jpg",
        "label": "Right Side Clearance",
        "note": "Side seam/mount/obstructed zone reference."
      },
      {
        "src": "images/coolant/02_brake_reservoir_context.jpg",
        "label": "Brake Reservoir Context",
        "note": "Shows adjacent reservoir spacing."
      },
      {
        "src": "images/coolant/07_passenger_side_context.jpg",
        "label": "Passenger-Side Context",
        "note": "Wide reference for where coolant lives."
      }
    ],
    "quickFacts": [
      {
        "label": "00_reservoir_wide",
        "value": "Main module hero and installed reservoir context."
      },
      {
        "label": "01_cap_closeup_140kpa_20psi",
        "value": "Pressure cap rating and warning-label reference."
      },
      {
        "label": "03_front_hose_clamp_closeup",
        "value": "Front hose, clamp, nipple, and leak-inspection zone."
      },
      {
        "label": "04_side_hose_level_angle",
        "value": "Visible coolant level/color and side-angle reference."
      },
      {
        "label": "05_lower_hose_clamp_closeup",
        "value": "Lower hose, clamp, nearby bracket/mount, and partially blocked lower zone."
      },
      {
        "label": "06_right_side_clearance_mount",
        "value": "Right-side clearance, side seam, wiring loom, and obstructed mount area."
      },
      {
        "label": "07_passenger_side_context",
        "value": "Wide passenger-side location reference for guide context."
      }
    ],
    "sections": [
      {
        "label": "Gold rule",
        "value": "A photo only verifies what is actually visible in that photo. Hidden areas stay marked as hidden instead of guessed."
      },
      {
        "label": "Current strongest proof",
        "value": "Cap rating, installed location, visible level/color, front hose, lower hose, and general reservoir shape are now well-grounded."
      },
      {
        "label": "Still not visible enough",
        "value": "Back/bottom of reservoir, underside mounting feet, and hidden molded part numbers are not fully verified from current installed photos."
      }
    ],
    "bullets": [
      "This page is the bridge between your camera roll and the app data.",
      "Every future component should get a page like this before it becomes Gold.",
      "Photo map prevents the app from pretending it knows hidden areas."
    ],
    "detailPages": [
      "coolantService",
      "coolantDataStatus"
    ],
    "source": "Alex uploaded coolant photo set"
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
  if(id==="coolantguide"){
    requestAnimationFrame(()=>renderCoolantStep());
  }
}
document.querySelectorAll("[data-go]").forEach(btn=>btn.addEventListener("click",()=>showScreen(btn.dataset.go)));
document.getElementById("backBtn").addEventListener("click",()=>{const backMap={engine:"home",airbox:"engine",guide:"airbox",learn:"airbox",maintenance:"airbox",coolant:"engine",coolantguide:"coolant",coolantlearn:"coolant",coolantmaintenance:"coolant"};showScreen(backMap[current]||"home")});

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
  const data=parts[id]||parts.quickstart||parts.overview;

  const quickHtml=(data.quickFacts||[]).map(item=>{
    return '<div><span>'+item.label+'</span><strong>'+item.value+'</strong></div>';
  }).join("");

  const sectionHtml=(data.sections||[]).map(item=>{
    return '<div class="info"><span>'+item.label+'</span><b>'+item.value+'</b></div>';
  }).join("");

  const photoHtml=(data.photos||[]).map(p=>{
    return '<figure class="sheetPhoto">'+
      '<img src="'+p.src+'" alt="'+p.label+'">'+
      '<figcaption><b>'+p.label+'</b><span>'+p.note+'</span></figcaption>'+ 
    '</figure>';
  }).join("");

  const optionHtml=(data.options||[]).map(o=>{
    return '<div class="optionCard compactOption">'+
      '<div class="optionTop"><h3>'+o.name+'</h3><span>'+o.price+'</span></div>'+
      '<div class="optionPart">'+o.part+'</div>'+
      '<div class="optionGrid">'+
        '<div><span>HP</span><b>'+o.hp+'</b></div>'+
        '<div><span>Weight</span><b>'+o.weight+'</b></div>'+
        '<div><span>Value</span><b>'+o.value+'</b></div>'+
        '<div><span>Risk</span><b>'+o.risk+'</b></div>'+
      '</div>'+
      '<p>'+o.notes+'</p>'+
    '</div>';
  }).join("");

  const bulletHtml=(data.bullets||[]).map(b=>'<li>'+b+'</li>').join("");

  const detailLinks=(data.detailPages||[]).map(key=>{
    const d=parts[key];
    if(!d)return "";
    return '<button class="detailLink" data-jump="'+key+'"><span>'+d.title+'</span><small>'+d.status+'</small><strong>›</strong></button>';
  }).join("");

  const detailsHtml =
    '<div class="detailPanel hidden" id="detailsPanel">'+
      (detailLinks?'<div class="detailLinkGroup">'+detailLinks+'</div>':'')+
      '<div class="detailStack">'+sectionHtml+'</div>'+
      '<div class="info sourceInfo"><span>Source Status</span><b>'+data.source+'</b></div>'+
    '</div>';

  document.getElementById("sheetData").innerHTML=
    '<button class="detailsTab" id="detailsTab">Details</button>'+
    '<div class="sheetHero simpleSheetHero">'+
      '<span class="badge">'+data.status+'</span>'+
      '<h2>'+data.title+'</h2>'+
      '<p>'+data.summary+'</p>'+
    '</div>'+
    '<div class="tabSwitch"><button class="active" id="summaryBtn">Summary</button><button id="detailsBtn">Details</button></div>'+
    '<div id="summaryPanel">'+
      (quickHtml?'<div class="quickFactGrid">'+quickHtml+'</div>':'')+
      (photoHtml?'<div class="sheetPhotoGrid">'+photoHtml+'</div>':'')+
      optionHtml+
      (bulletHtml?'<div class="info bulletInfo"><span>Key Notes</span><ul>'+bulletHtml+'</ul></div>':'')+
    '</div>'+
    detailsHtml;

  const summaryPanel=document.getElementById("summaryPanel");
  const detailsPanel=document.getElementById("detailsPanel");
  const summaryBtn=document.getElementById("summaryBtn");
  const detailsBtn=document.getElementById("detailsBtn");
  const detailsTab=document.getElementById("detailsTab");

  function setTab(which){
    const showDetails=which==="details";
    summaryPanel.classList.toggle("hidden",showDetails);
    detailsPanel.classList.toggle("hidden",!showDetails);
    summaryBtn.classList.toggle("active",!showDetails);
    detailsBtn.classList.toggle("active",showDetails);
    detailsTab.textContent=showDetails?"Summary":"Details";
  }

  summaryBtn.addEventListener("click",()=>setTab("summary"));
  detailsBtn.addEventListener("click",()=>setTab("details"));
  detailsTab.addEventListener("click",()=>setTab(detailsPanel.classList.contains("hidden")?"details":"summary"));

  document.querySelectorAll("[data-jump]").forEach(btn=>{
    btn.addEventListener("click",()=>openSheet(btn.dataset.jump));
  });

  sheet.classList.add("open");
  dim.classList.add("show");
}
function closeSheet(){sheet.classList.remove("open");if(!drawer.classList.contains("open"))dim.classList.remove("show")}
document.getElementById("closeSheet").addEventListener("click",closeSheet);
function getLogs(){return JSON.parse(localStorage.getItem("mybuick_airbox_life_logs")||"[]")}
function saveLogs(logs){localStorage.setItem("mybuick_airbox_life_logs",JSON.stringify(logs))}
function getSetup(){return JSON.parse(localStorage.getItem("mybuick_airbox_current_setup")||"{}")}
function saveSetup(setup){localStorage.setItem("mybuick_airbox_current_setup",JSON.stringify(setup))}

function cleanMiles(value){
  const n=String(value||"").replace(/[^0-9]/g,"");
  return n?Number(n):null;
}

function formatMiles(n){
  if(!n && n!==0)return "TBD";
  return Number(n).toLocaleString()+" mi";
}

function todayISO(){
  return new Date().toISOString().slice(0,10);
}

function renderSetup(){
  const setup=getSetup();
  const logs=getLogs();
  const latest=logs[0];

  const filter=setup.filter||"Unknown";
  const part=setup.part||"TBD";
  const installed=setup.mileage?formatMiles(setup.mileage):"Not logged";
  const condition=setup.condition||"Unknown";

  document.getElementById("currentFilter").textContent=filter;
  document.getElementById("setupTitle").textContent=filter==="Unknown"?"Airbox Setup":filter;
  document.getElementById("setupFilter").textContent=filter;
  document.getElementById("setupPart").textContent=part;
  document.getElementById("setupInstalled").textContent=installed;
  document.getElementById("setupCondition").textContent=condition;

  if(latest){
    document.getElementById("lastService").textContent=(latest.type||"Event")+" @ "+formatMiles(latest.mileage);
  }else{
    document.getElementById("lastService").textContent="No log yet";
  }

  const baseMiles=setup.mileage || (latest&&latest.mileage) || null;
  if(baseMiles){
    document.getElementById("nextDue").textContent=formatMiles(baseMiles+50000);
  }else{
    document.getElementById("nextDue").textContent="Set mileage";
  }
}

function renderLogs(){
  const logs=getLogs();
  document.getElementById("eventCount").textContent=logs.length+" event"+(logs.length===1?"":"s");

  if(!logs.length){
    document.getElementById("logList").innerHTML=
      '<div class="emptyStory">'+
        '<strong>No life events yet</strong>'+
        '<p>Add the first inspection, replacement, cleaning, upgrade, or note. This is where the airbox starts building its story.</p>'+
      '</div>';
    renderSetup();
    return;
  }

  document.getElementById("logList").innerHTML=logs.map((l,idx)=>{
    const type=l.type||"Note";
    const date=l.date||"No date";
    const miles=formatMiles(l.mileage);
    const part=l.part||"No part listed";
    const condition=l.condition||"Not Checked";
    const cost=l.cost||"No cost";
    const notes=l.notes||"";
    return '<article class="lifeEvent">'+
      '<div class="eventDot"></div>'+
      '<div class="eventBody">'+
        '<div class="eventTop"><span>'+type+'</span><button class="deleteEvent" data-delete="'+idx+'">×</button></div>'+
        '<h3>'+date+' • '+miles+'</h3>'+
        '<div class="eventMeta">'+
          '<div><span>Part</span><b>'+part+'</b></div>'+
          '<div><span>Condition</span><b>'+condition+'</b></div>'+
          '<div><span>Cost</span><b>'+cost+'</b></div>'+
        '</div>'+
        (notes?'<p>'+notes+'</p>':'')+
      '</div>'+
    '</article>';
  }).join("");

  document.querySelectorAll("[data-delete]").forEach(btn=>{
    btn.addEventListener("click",()=>{
      const logs=getLogs();
      logs.splice(Number(btn.dataset.delete),1);
      saveLogs(logs);
      renderLogs();
    });
  });

  renderSetup();
}

function openSetupForm(){
  const setup=getSetup();
  document.getElementById("setupFilterInput").value=setup.filter||"";
  document.getElementById("setupPartInput").value=setup.part||"";
  document.getElementById("setupMileageInput").value=setup.mileage||"";
  document.getElementById("setupConditionInput").value=setup.condition||"Unknown";
  document.getElementById("setupForm").classList.remove("hidden");
}

document.getElementById("editSetupBtn").addEventListener("click",openSetupForm);
document.getElementById("cancelSetupBtn").addEventListener("click",()=>document.getElementById("setupForm").classList.add("hidden"));

document.getElementById("setupForm").addEventListener("submit",e=>{
  e.preventDefault();
  const setup={
    filter:document.getElementById("setupFilterInput").value||"Unknown",
    part:document.getElementById("setupPartInput").value||"TBD",
    mileage:cleanMiles(document.getElementById("setupMileageInput").value),
    condition:document.getElementById("setupConditionInput").value||"Unknown"
  };
  saveSetup(setup);
  document.getElementById("setupForm").classList.add("hidden");
  renderSetup();
});

document.getElementById("addLog").addEventListener("click",()=>{
  document.getElementById("logDate").value=todayISO();
  document.getElementById("logForm").classList.remove("hidden");
});

document.getElementById("cancelLogBtn").addEventListener("click",()=>document.getElementById("logForm").classList.add("hidden"));

document.getElementById("logForm").addEventListener("submit",e=>{
  e.preventDefault();
  const logs=getLogs();
  const event={
    type:document.getElementById("logType").value,
    date:document.getElementById("logDate").value||todayISO(),
    mileage:cleanMiles(document.getElementById("logMileage").value),
    part:document.getElementById("logPart").value||"",
    condition:document.getElementById("logCondition").value,
    cost:document.getElementById("logCost").value||"",
    notes:document.getElementById("logNotes").value||""
  };
  logs.unshift(event);
  saveLogs(logs);

  if(event.type==="Filter Replacement" || event.condition==="Replaced"){
    saveSetup({
      filter:event.part||"Unknown replacement filter",
      part:event.part||"TBD",
      mileage:event.mileage,
      condition:"Replaced"
    });
  }

  e.target.reset();
  document.getElementById("logForm").classList.add("hidden");
  renderLogs();
});

document.getElementById("seedExample").addEventListener("click",()=>{
  const logs=getLogs();
  if(!logs.length){
    const example={
      type:"Inspection",
      date:todayISO(),
      mileage:121842,
      part:"Current air filter",
      condition:"Good",
      cost:"$0",
      notes:"Example entry. Replace this with your real first inspection."
    };
    saveLogs([example]);
  }
  renderLogs();
});


// Coolant Gold photo stepper
let coolantStepIndex=0;
function renderCoolantStep(){
  const step=coolantGuideSteps[coolantStepIndex]||coolantGuideSteps[0];
  const img=document.getElementById("coolantStepImg");
  if(!img)return;
  img.src=step.img;
  img.alt=step.title;
  document.getElementById("coolantStepTitle").textContent=step.title;
  document.getElementById("coolantStepText").textContent=step.text;
  document.getElementById("coolantStepCounter").textContent=(coolantStepIndex+1)+"/"+coolantGuideSteps.length;
  document.getElementById("coolantStepTags").innerHTML=step.tags.map(t=>'<span>'+t+'</span>').join("");
  const layer=document.getElementById("coolantHotspotLayer");
  const sx=step.spot.x, sy=step.spot.y, lx=step.spot.lx ?? step.spot.x, ly=step.spot.ly ?? step.spot.y;
  const mx=(sx+lx)/2, my=(sy+ly)/2;
  layer.innerHTML=
    '<svg class="coolantLeader" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">'+
      '<path d="M '+sx+' '+sy+' Q '+mx+' '+my+' '+lx+' '+ly+'"></path>'+
    '</svg>'+
    '<span class="coolantPoint" style="left:'+sx+'%;top:'+sy+'%"></span>'+
    '<span class="coolantCallout" style="left:'+lx+'%;top:'+ly+'%">'+step.spot.label+'</span>';
  document.getElementById("coolantPrevStep").disabled=coolantStepIndex===0;
  document.getElementById("coolantNextStep").disabled=coolantStepIndex===coolantGuideSteps.length-1;
  const mark=document.getElementById("coolantMarkStep");
  mark.textContent=coolantChecks.has(step.check)?"Marked ✓":"Mark Done";
}

document.getElementById("coolantPrevStep")?.addEventListener("click",()=>{
  if(coolantStepIndex>0){coolantStepIndex--;renderCoolantStep();}
});
document.getElementById("coolantNextStep")?.addEventListener("click",()=>{
  if(coolantStepIndex<coolantGuideSteps.length-1){coolantStepIndex++;renderCoolantStep();}
});
document.getElementById("coolantMarkStep")?.addEventListener("click",()=>{
  const step=coolantGuideSteps[coolantStepIndex]||coolantGuideSteps[0];
  coolantChecks.add(step.check);
  renderCoolantChecklist();
  renderCoolantStep();
});

// Coolant starter guide checklist
let coolantChecks=new Set();
function renderCoolantChecklist(){
  document.querySelectorAll("[data-cool-check]").forEach(btn=>{
    const id=btn.dataset.coolCheck;
    btn.classList.toggle("done",coolantChecks.has(id));
    const dot=btn.querySelector("span");
    if(dot)dot.textContent=coolantChecks.has(id)?"✓":"";
  });
  const mark=document.getElementById("coolantMarkStep");
  if(mark && coolantGuideSteps[coolantStepIndex]){
    mark.textContent=coolantChecks.has(coolantGuideSteps[coolantStepIndex].check)?"Marked ✓":"Mark Done";
  }
}
document.querySelectorAll("[data-cool-check]").forEach(btn=>{
  btn.addEventListener("click",()=>{
    const id=btn.dataset.coolCheck;
    if(coolantChecks.has(id))coolantChecks.delete(id);
    else coolantChecks.add(id);
    renderCoolantChecklist();
  });
});
document.getElementById("coolantResetBtn")?.addEventListener("click",()=>{
  coolantChecks.clear();
  renderCoolantChecklist();
});

// Coolant maintenance life story
function getCoolantLogs(){return JSON.parse(localStorage.getItem("mybuick_coolant_life_logs")||"[]")}
function saveCoolantLogs(logs){localStorage.setItem("mybuick_coolant_life_logs",JSON.stringify(logs))}
function getCoolantSetup(){return JSON.parse(localStorage.getItem("mybuick_coolant_current_setup")||"{}")}
function saveCoolantSetup(setup){localStorage.setItem("mybuick_coolant_current_setup",JSON.stringify(setup))}

function renderCoolantSetup(){
  const setup=getCoolantSetup();
  const logs=getCoolantLogs();
  const latest=logs[0];

  const fluid=setup.fluid||"Unknown";
  const mix=setup.mix||"TBD";
  const mileage=setup.mileage?formatMiles(setup.mileage):"Not logged";
  const condition=setup.condition||"Unknown";

  document.getElementById("coolantCurrentFluid").textContent=fluid;
  document.getElementById("coolantSetupTitle").textContent=fluid==="Unknown"?"Cooling Setup":fluid;
  document.getElementById("coolantSetupFluid").textContent=fluid;
  document.getElementById("coolantSetupMix").textContent=mix;
  document.getElementById("coolantSetupMileage").textContent=mileage;
  document.getElementById("coolantSetupCondition").textContent=condition;
  document.getElementById("coolantStatus").textContent=condition;

  if(latest){
    document.getElementById("coolantLastService").textContent=(latest.type||"Event")+" @ "+formatMiles(latest.mileage);
  }else{
    document.getElementById("coolantLastService").textContent="No log yet";
  }
}

function renderCoolantLogs(){
  const logs=getCoolantLogs();
  document.getElementById("coolantEventCount").textContent=logs.length+" event"+(logs.length===1?"":"s");

  if(!logs.length){
    document.getElementById("coolantLogList").innerHTML=
      '<div class="emptyStory"><strong>No coolant events yet</strong><p>Add the first level check, top-off, flush, leak inspection, or note.</p></div>';
    renderCoolantSetup();
    return;
  }

  document.getElementById("coolantLogList").innerHTML=logs.map((l,idx)=>{
    const type=l.type||"Note";
    const date=l.date||"No date";
    const miles=formatMiles(l.mileage);
    const part=l.part||"No fluid/part listed";
    const condition=l.condition||"Not Checked";
    const cost=l.cost||"No cost";
    const notes=l.notes||"";
    return '<article class="lifeEvent">'+
      '<div class="eventDot coolantDot"></div>'+
      '<div class="eventBody">'+
        '<div class="eventTop"><span>'+type+'</span><button class="deleteCoolantEvent" data-cool-delete="'+idx+'">×</button></div>'+
        '<h3>'+date+' • '+miles+'</h3>'+
        '<div class="eventMeta">'+
          '<div><span>Fluid / Part</span><b>'+part+'</b></div>'+
          '<div><span>Condition</span><b>'+condition+'</b></div>'+
          '<div><span>Cost</span><b>'+cost+'</b></div>'+
        '</div>'+
        (notes?'<p>'+notes+'</p>':'')+
      '</div>'+
    '</article>';
  }).join("");

  document.querySelectorAll("[data-cool-delete]").forEach(btn=>{
    btn.addEventListener("click",()=>{
      const logs=getCoolantLogs();
      logs.splice(Number(btn.dataset.coolDelete),1);
      saveCoolantLogs(logs);
      renderCoolantLogs();
    });
  });

  renderCoolantSetup();
}

document.getElementById("coolantEditSetupBtn")?.addEventListener("click",()=>{
  const setup=getCoolantSetup();
  document.getElementById("coolantFluidInput").value=setup.fluid||"";
  document.getElementById("coolantMixInput").value=setup.mix||"";
  document.getElementById("coolantSetupMileageInput").value=setup.mileage||"";
  document.getElementById("coolantSetupConditionInput").value=setup.condition||"Unknown";
  document.getElementById("coolantSetupForm").classList.remove("hidden");
});
document.getElementById("coolantCancelSetupBtn")?.addEventListener("click",()=>document.getElementById("coolantSetupForm").classList.add("hidden"));
document.getElementById("coolantSetupForm")?.addEventListener("submit",e=>{
  e.preventDefault();
  saveCoolantSetup({
    fluid:document.getElementById("coolantFluidInput").value||"Unknown",
    mix:document.getElementById("coolantMixInput").value||"TBD",
    mileage:cleanMiles(document.getElementById("coolantSetupMileageInput").value),
    condition:document.getElementById("coolantSetupConditionInput").value||"Unknown"
  });
  document.getElementById("coolantSetupForm").classList.add("hidden");
  renderCoolantSetup();
});
document.getElementById("coolantAddLog")?.addEventListener("click",()=>{
  document.getElementById("coolantLogDate").value=todayISO();
  document.getElementById("coolantLogForm").classList.remove("hidden");
});
document.getElementById("coolantCancelLogBtn")?.addEventListener("click",()=>document.getElementById("coolantLogForm").classList.add("hidden"));
document.getElementById("coolantLogForm")?.addEventListener("submit",e=>{
  e.preventDefault();
  const event={
    type:document.getElementById("coolantLogType").value,
    date:document.getElementById("coolantLogDate").value||todayISO(),
    mileage:cleanMiles(document.getElementById("coolantLogMileage").value),
    part:document.getElementById("coolantLogPart").value||"",
    condition:document.getElementById("coolantLogCondition").value,
    cost:document.getElementById("coolantLogCost").value||"",
    notes:document.getElementById("coolantLogNotes").value||""
  };
  const logs=getCoolantLogs();
  logs.unshift(event);
  saveCoolantLogs(logs);
  if(["Top-Off","Coolant Flush"].includes(event.type) || event.condition==="Serviced"){
    saveCoolantSetup({
      fluid:event.part||"DEX-COOL / coolant",
      mix:"TBD",
      mileage:event.mileage,
      condition:event.condition||"Serviced"
    });
  }
  e.target.reset();
  document.getElementById("coolantLogForm").classList.add("hidden");
  renderCoolantLogs();
});
document.getElementById("coolantSeedExample")?.addEventListener("click",()=>{
  const logs=getCoolantLogs();
  if(!logs.length){
    saveCoolantLogs([{
      type:"Level Check",
      date:todayISO(),
      mileage:121842,
      part:"Current coolant",
      condition:"Good",
      cost:"$0",
      notes:"Example coolant entry. Replace with your real first check."
    }]);
  }
  renderCoolantLogs();
});

setGreeting();renderComponentMaps();renderMarkers();updateProgress();renderLogs();renderCoolantChecklist();renderCoolantStep();renderCoolantLogs();showScreen("home");window.addEventListener("load",()=>setTimeout(()=>{renderMarkers();updateProgress();},50));

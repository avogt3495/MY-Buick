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
    status:"starter",
    target:"coolant",
    frame:{x:63.6,y:38.4,w:11.4,h:9.8},
    label:{x:52,y:54},
    viewBox:"0 0 100 100",
    path:"M 20 78 C 10 65, 9 42, 17 27 C 25 12, 48 7, 69 13 C 91 20, 97 42, 89 65 C 82 85, 59 95, 37 91 C 30 90, 24 85, 20 78 Z"
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
    "status": "Starter Data",
    "summary": "The coolant reservoir is part of the cooling system. It lets you check coolant level and gives expanding hot coolant somewhere to go.",
    "quickFacts": [
      {
        "label": "Location",
        "value": "Passenger-side / vehicle-right rear area of engine bay. Starter map only."
      },
      {
        "label": "Coolant type",
        "value": "DEX-COOL coolant system. Use owner-manual-correct coolant."
      },
      {
        "label": "Mix",
        "value": "50/50 clean drinkable water and DEX-COOL, or approved 50/50 premix."
      },
      {
        "label": "Safety",
        "value": "Only open/check cap when the system is cold."
      },
      {
        "label": "Gold status",
        "value": "Not Gold yet. Needs true outline and reservoir close-up photos."
      }
    ],
    "bullets": [
      "Low coolant can mean a leak, previous service issue, trapped air, or coolant loss.",
      "Coolant should be clean and the correct type. Sludge, oiliness, or heavy contamination needs deeper diagnosis.",
      "The reservoir, cap, hoses, and clamps all get their own life story entries later.",
      "Never trust this starter map as final precision. It is only to get the coolant module into the app."
    ],
    "detailPages": [
      "coolantService",
      "coolantParts",
      "coolantSymptoms",
      "coolantReplacement"
    ],
    "source": "Owner manual supported + Alex verification needed"
  },
  "coolantService": {
    "title": "Level Check & Inspection",
    "status": "Safety First",
    "summary": "Coolant checks are simple, but the cap/pressure part matters. Treat this as cold-engine work.",
    "quickFacts": [
      {
        "label": "Before touching cap",
        "value": "Engine fully cold."
      },
      {
        "label": "Level",
        "value": "Check against reservoir cold marks if visible."
      },
      {
        "label": "Color",
        "value": "DEX-COOL is typically orange. Wrong color or sludge needs attention."
      },
      {
        "label": "Leaks",
        "value": "Look for wet spots, dried crust, stains, sweet smell, or low level returning."
      }
    ],
    "bullets": [
      "Look around tank seams and the cap neck.",
      "Check hose ends and clamps near the reservoir.",
      "Check for dried coolant trails around the cap or overflow area.",
      "Log level checks, top-offs, and coolant condition in Maintenance."
    ],
    "source": "Owner manual style coolant safety + physical inspection workflow"
  },
  "coolantParts": {
    "title": "Parts & Specs",
    "status": "TBD Heavy",
    "summary": "Coolant has more part-data work than the airbox because tank, cap, hoses, and coolant specs all need verification.",
    "quickFacts": [
      {
        "label": "Coolant",
        "value": "DEX-COOL compatible coolant, 50/50 mix."
      },
      {
        "label": "ACDelco premix",
        "value": "GM 12378390 / ACDelco 10-5027 appears as Dex-Cool 50/50 premix."
      },
      {
        "label": "Reservoir",
        "value": "Part number TBD, VIN check needed."
      },
      {
        "label": "Pressure cap",
        "value": "Part number and pressure rating TBD."
      },
      {
        "label": "Hoses",
        "value": "Hose part numbers TBD."
      },
      {
        "label": "Weights",
        "value": "TBD until parts are weighed."
      }
    ],
    "bullets": [
      "Do not add random universal coolant until compatibility is confirmed.",
      "Never mix unknown coolant types just because the color looks close.",
      "Cap pressure rating matters. Do not guess it.",
      "Tank and cap part numbers should be confirmed by VIN before adding to Gold data."
    ],
    "source": "GM/ACDelco coolant listing + VIN confirmation needed"
  },
  "coolantSymptoms": {
    "title": "Symptoms & Failure Modes",
    "status": "Starter Diagnostic Logic",
    "summary": "This page tells you what coolant-related symptoms should make you inspect the reservoir area first.",
    "quickFacts": [
      {
        "label": "Low level",
        "value": "Possible leak, air pocket, recent service, or coolant loss."
      },
      {
        "label": "Dried crust",
        "value": "Possible slow seep or cap/tank/hoses leaking."
      },
      {
        "label": "Dirty/sludgy coolant",
        "value": "Needs deeper inspection, not just a top-off."
      },
      {
        "label": "Overheating",
        "value": "Do not keep driving hot. Needs diagnosis."
      },
      {
        "label": "Sweet smell",
        "value": "Possible coolant leak."
      }
    ],
    "bullets": [
      "Check level cold.",
      "Inspect reservoir seams, cap, hoses, and clamps.",
      "Look under the car after parking for drips.",
      "If coolant keeps dropping, log it and diagnose before topping off forever."
    ],
    "source": "General cooling-system diagnostic logic"
  },
  "coolantReplacement": {
    "title": "Replacement / Upgrade Notes",
    "status": "Starter Replacement Data",
    "summary": "This is not a performance mod area. Coolant system replacement info is about reliability, temperature control, leaks, and correct fluid.",
    "quickFacts": [
      {
        "label": "HP gain",
        "value": "0 hp. Coolant parts restore reliability, not power."
      },
      {
        "label": "Weight difference",
        "value": "TBD. Usually not a performance-focused difference."
      },
      {
        "label": "Coolant price",
        "value": "TBD snapshot. Add real price when you buy."
      },
      {
        "label": "Reservoir price",
        "value": "TBD, needs verified part number."
      },
      {
        "label": "Cap price",
        "value": "TBD, needs verified pressure rating and part number."
      }
    ],
    "bullets": [
      "Replace coolant if it is contaminated, wrong, old, or after certain cooling-system repairs.",
      "Replace reservoir if cracked, leaking, stained at seams, or cap neck is damaged.",
      "Replace cap only with the correct pressure rating.",
      "Track every top-off so the app can tell if coolant loss is becoming a pattern."
    ],
    "source": "Starter data, needs parts verification"
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


// Coolant starter guide checklist
let coolantChecks=new Set();
function renderCoolantChecklist(){
  document.querySelectorAll("[data-cool-check]").forEach(btn=>{
    const id=btn.dataset.coolCheck;
    btn.classList.toggle("done",coolantChecks.has(id));
    const dot=btn.querySelector("span");
    if(dot)dot.textContent=coolantChecks.has(id)?"✓":"";
  });
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

setGreeting();renderComponentMaps();renderMarkers();updateProgress();renderLogs();renderCoolantChecklist();renderCoolantLogs();showScreen("home");window.addEventListener("load",()=>setTimeout(()=>{renderMarkers();updateProgress();},50));

const MYCAR_EMBEDDED_MODEL_REGISTRY={"version":3,"schema":"mycar-model-registry-v3","defaultFallback":"procedural-universal-v2","resolutionOrder":["remote-exact","local-exact","generation","body-template","universal"],"models":{"family|buick|lacrosse|2010-2013":{"kind":"generation","label":"2010-2013 Buick LaCrosse","generation":"Second generation","confidence":0.9,"match":{"yearFrom":2010,"yearTo":2013,"make":"buick","modelIncludes":["lacrosse"],"bodyIncludes":["sedan","saloon"]},"assetReady":false,"asset":"models/2010-buick-lacrosse.glb","fallback":"procedural-2010-buick-lacrosse-v2","partNodes":{"body":"Body","hood":"Hood","trunk":"Trunk","driverFrontDoor":"Door_Driver_Front","passengerFrontDoor":"Door_Passenger_Front","driverRearDoor":"Door_Driver_Rear","passengerRearDoor":"Door_Passenger_Rear","wheelFL":"Wheel_Front_Driver","wheelFR":"Wheel_Front_Passenger","wheelRL":"Wheel_Rear_Driver","wheelRR":"Wheel_Rear_Passenger"},"hinges":{"hood":{"axis":"z","closed":0,"open":1.05},"trunk":{"axis":"z","closed":0,"open":-1.18},"driverFrontDoor":{"axis":"y","closed":0,"open":1.12},"passengerFrontDoor":{"axis":"y","closed":0,"open":-1.12},"driverRearDoor":{"axis":"y","closed":0,"open":1.05},"passengerRearDoor":{"axis":"y","closed":0,"open":-1.05}}},"template|sedan":{"kind":"template","label":"Automatic sedan foundation","confidence":0.62,"assetReady":false,"asset":"","fallback":"procedural-sedan-v2"},"template|suv":{"kind":"template","label":"Automatic SUV/crossover foundation","confidence":0.58,"assetReady":false,"asset":"","fallback":"procedural-suv-v2"},"template|pickup":{"kind":"template","label":"Automatic pickup foundation","confidence":0.56,"assetReady":false,"asset":"","fallback":"procedural-pickup-v2"},"template|hatchback":{"kind":"template","label":"Automatic hatchback foundation","confidence":0.58,"assetReady":false,"asset":"","fallback":"procedural-hatchback-v2"},"template|wagon":{"kind":"template","label":"Automatic wagon/estate foundation","confidence":0.58,"assetReady":false,"asset":"","fallback":"procedural-wagon-v2"},"template|coupe":{"kind":"template","label":"Automatic coupe foundation","confidence":0.57,"assetReady":false,"asset":"","fallback":"procedural-coupe-v2"},"template|convertible":{"kind":"template","label":"Automatic convertible foundation","confidence":0.52,"assetReady":false,"asset":"","fallback":"procedural-convertible-v2"},"template|van":{"kind":"template","label":"Automatic van/MPV foundation","confidence":0.54,"assetReady":false,"asset":"","fallback":"procedural-van-v2"},"template|universal":{"kind":"template","label":"Universal interactive vehicle foundation","confidence":0.3,"assetReady":false,"asset":"","fallback":"procedural-universal-v2"}}};
const MYCAR_EMBEDDED_RESOLVER_CONFIG={"version":1,"enabled":false,"endpoint":"","timeoutMs":3500,"cacheDays":7,"privacy":{"sendFullVin":false,"fieldsSent":["year","make","model","trim","bodyClass","engine","drivetrain"]},"notes":"Set enabled true and endpoint to a deployed resolver API when the cloud model broker is ready. The static app continues working with local generation and body templates."};
const MYCAR_EMBEDDED_DIMENSION_CATALOG={"version":1,"schema":"mycar-vehicle-dimensions-v1","defaultUnits":"in","resolutionOrder":["exact","generation","body-template"],"entries":{"exact|2010|buick|lacrosse":{"accuracy":"catalog-exact","label":"2010 Buick LaCrosse catalog dimensions","sourceLabel":"Published 2010 Buick LaCrosse specifications","units":"in","length":196.9,"width":73.1,"height":59.2,"wheelbase":111.7,"frontTrack":61.7,"rearTrack":62.0,"match":{"yearFrom":2010,"yearTo":2010,"make":"buick","modelIncludes":["lacrosse"]}},"family|buick|lacrosse|2010-2013":{"accuracy":"generation","label":"2010-2013 Buick LaCrosse generation dimensions","sourceLabel":"Second-generation LaCrosse specification package","units":"in","length":196.9,"width":73.1,"height":59.2,"wheelbase":111.7,"frontTrack":61.7,"rearTrack":62.0,"match":{"yearFrom":2010,"yearTo":2013,"make":"buick","modelIncludes":["lacrosse"]}}},"templates":{"sedan":{"accuracy":"estimated-template","label":"Midsize sedan estimated dimensions","units":"in","length":190.0,"width":72.0,"height":58.0,"wheelbase":109.0,"frontTrack":61.0,"rearTrack":61.0},"suv":{"accuracy":"estimated-template","label":"Midsize SUV estimated dimensions","units":"in","length":188.0,"width":75.0,"height":67.0,"wheelbase":110.0,"frontTrack":64.0,"rearTrack":64.0},"pickup":{"accuracy":"estimated-template","label":"Crew-cab pickup estimated dimensions","units":"in","length":225.0,"width":79.0,"height":74.0,"wheelbase":143.0,"frontTrack":67.0,"rearTrack":67.0},"hatchback":{"accuracy":"estimated-template","label":"Compact hatchback estimated dimensions","units":"in","length":171.0,"width":70.0,"height":57.0,"wheelbase":104.0,"frontTrack":60.0,"rearTrack":60.0},"wagon":{"accuracy":"estimated-template","label":"Midsize wagon estimated dimensions","units":"in","length":190.0,"width":72.0,"height":59.0,"wheelbase":110.0,"frontTrack":61.0,"rearTrack":61.0},"coupe":{"accuracy":"estimated-template","label":"Midsize coupe estimated dimensions","units":"in","length":184.0,"width":73.0,"height":54.0,"wheelbase":108.0,"frontTrack":62.0,"rearTrack":62.0},"convertible":{"accuracy":"estimated-template","label":"Convertible estimated dimensions","units":"in","length":181.0,"width":72.0,"height":52.0,"wheelbase":106.0,"frontTrack":61.0,"rearTrack":61.0},"van":{"accuracy":"estimated-template","label":"Passenger van estimated dimensions","units":"in","length":204.0,"width":79.0,"height":69.0,"wheelbase":121.0,"frontTrack":66.0,"rearTrack":66.0},"universal":{"accuracy":"estimated-template","label":"Universal vehicle estimated dimensions","units":"in","length":185.0,"width":72.0,"height":60.0,"wheelbase":108.0,"frontTrack":61.0,"rearTrack":61.0}}};
const MYCAR_EMBEDDED_ASSET_NETWORK_CATALOG={"version":1,"schema":"mycar-asset-network-catalog-v1","channel":"stable","generatedAt":"2026-07-13","resolutionOrder":["remote-exact","exact","generation","body-template","universal"],"packages":{"mycar.gm.buick.lacrosse.2010-2013":{"packageId":"mycar.gm.buick.lacrosse.2010-2013","version":"1.1.0","channel":"stable","tier":"generation","label":"2010-2013 Buick LaCrosse Generation Twin","generation":"Second generation","match":{"yearFrom":2010,"yearTo":2013,"make":"buick","modelIncludes":["lacrosse"],"bodyIncludes":["sedan","saloon","4 door"]},"geometryAccuracy":"generation","scaleAccuracy":"catalog-exact","confidence":0.92,"delivery":{"mode":"procedural","assetReady":false,"asset":"","fallback":"procedural-2010-buick-lacrosse-living-v4","protected":false,"futureAssetSlot":"signed://mycar/gm/buick/lacrosse/2010-2013/vehicle.glb"},"source":{"type":"mycar-verified","label":"MY CAR verified generation package","rightsStatus":"MY CAR generated procedural package"},"dimensionsKey":"exact|2010|buick|lacrosse","features":["VIN generation matching","catalog-correct exterior scale","movable hood, trunk, and four doors","working lights and steerable front wheels","engine, interior, wheel, trunk, and underside zones","protected exact-model replacement slot"],"releaseNotes":["Adds versioned Asset Network package identity.","Adds protected delivery metadata for a future licensed exact GLB.","Keeps the current generation twin available while exact geometry is sourced."],"updatedAt":"2026-07-13T00:00:00Z"},"mycar.template.sedan":{"packageId":"mycar.template.sedan","version":"1.0.0","channel":"stable","tier":"body-template","label":"Automatic Sedan Foundation","match":{"bodyIncludes":["sedan","saloon","4 door"]},"geometryAccuracy":"approximate","scaleAccuracy":"estimated-template","confidence":0.62,"delivery":{"mode":"procedural","assetReady":false,"asset":"","fallback":"procedural-sedan-v3","protected":false},"source":{"type":"mycar-generator","label":"MY CAR automatic body generator","rightsStatus":"MY CAR generated"},"features":["movable panels","body-style proportions","universal component zones","optional photo personalization"],"releaseNotes":["Initial worldwide sedan foundation."],"updatedAt":"2026-07-13T00:00:00Z"},"mycar.template.suv":{"packageId":"mycar.template.suv","version":"1.0.0","channel":"stable","tier":"body-template","label":"Automatic SUV/Crossover Foundation","match":{"bodyIncludes":["sport utility","suv","crossover"]},"geometryAccuracy":"approximate","scaleAccuracy":"estimated-template","confidence":0.58,"delivery":{"mode":"procedural","assetReady":false,"asset":"","fallback":"procedural-suv-v3","protected":false},"source":{"type":"mycar-generator","label":"MY CAR automatic body generator","rightsStatus":"MY CAR generated"},"features":["movable panels","SUV proportions","universal component zones"],"releaseNotes":["Initial worldwide SUV foundation."],"updatedAt":"2026-07-13T00:00:00Z"},"mycar.template.pickup":{"packageId":"mycar.template.pickup","version":"1.0.0","channel":"stable","tier":"body-template","label":"Automatic Pickup Foundation","match":{"bodyIncludes":["pickup","truck","ute"]},"geometryAccuracy":"approximate","scaleAccuracy":"estimated-template","confidence":0.56,"delivery":{"mode":"procedural","assetReady":false,"asset":"","fallback":"procedural-pickup-v3","protected":false},"source":{"type":"mycar-generator","label":"MY CAR automatic body generator","rightsStatus":"MY CAR generated"},"features":["movable panels","pickup proportions","bed and underside zones"],"releaseNotes":["Initial worldwide pickup foundation."],"updatedAt":"2026-07-13T00:00:00Z"},"mycar.template.hatchback":{"packageId":"mycar.template.hatchback","version":"1.0.0","channel":"stable","tier":"body-template","label":"Automatic Hatchback Foundation","match":{"bodyIncludes":["hatchback","liftback"]},"geometryAccuracy":"approximate","scaleAccuracy":"estimated-template","confidence":0.58,"delivery":{"mode":"procedural","assetReady":false,"asset":"","fallback":"procedural-hatchback-v3","protected":false},"source":{"type":"mycar-generator","label":"MY CAR automatic body generator","rightsStatus":"MY CAR generated"},"features":["movable panels","hatchback proportions","cargo and underside zones"],"releaseNotes":["Initial worldwide hatchback foundation."],"updatedAt":"2026-07-13T00:00:00Z"},"mycar.template.wagon":{"packageId":"mycar.template.wagon","version":"1.0.0","channel":"stable","tier":"body-template","label":"Automatic Wagon/Estate Foundation","match":{"bodyIncludes":["wagon","estate"]},"geometryAccuracy":"approximate","scaleAccuracy":"estimated-template","confidence":0.58,"delivery":{"mode":"procedural","assetReady":false,"asset":"","fallback":"procedural-wagon-v3","protected":false},"source":{"type":"mycar-generator","label":"MY CAR automatic body generator","rightsStatus":"MY CAR generated"},"features":["movable panels","wagon proportions","cargo and underside zones"],"releaseNotes":["Initial worldwide wagon foundation."],"updatedAt":"2026-07-13T00:00:00Z"},"mycar.template.coupe":{"packageId":"mycar.template.coupe","version":"1.0.0","channel":"stable","tier":"body-template","label":"Automatic Coupe Foundation","match":{"bodyIncludes":["coupe","2 door sedan"]},"geometryAccuracy":"approximate","scaleAccuracy":"estimated-template","confidence":0.57,"delivery":{"mode":"procedural","assetReady":false,"asset":"","fallback":"procedural-coupe-v3","protected":false},"source":{"type":"mycar-generator","label":"MY CAR automatic body generator","rightsStatus":"MY CAR generated"},"features":["movable panels","coupe proportions","universal component zones"],"releaseNotes":["Initial worldwide coupe foundation."],"updatedAt":"2026-07-13T00:00:00Z"},"mycar.template.convertible":{"packageId":"mycar.template.convertible","version":"1.0.0","channel":"stable","tier":"body-template","label":"Automatic Convertible Foundation","match":{"bodyIncludes":["convertible","cabriolet","roadster"]},"geometryAccuracy":"approximate","scaleAccuracy":"estimated-template","confidence":0.52,"delivery":{"mode":"procedural","assetReady":false,"asset":"","fallback":"procedural-convertible-v3","protected":false},"source":{"type":"mycar-generator","label":"MY CAR automatic body generator","rightsStatus":"MY CAR generated"},"features":["movable panels","convertible proportions","universal component zones"],"releaseNotes":["Initial worldwide convertible foundation."],"updatedAt":"2026-07-13T00:00:00Z"},"mycar.template.van":{"packageId":"mycar.template.van","version":"1.0.0","channel":"stable","tier":"body-template","label":"Automatic Van/MPV Foundation","match":{"bodyIncludes":["van","minivan","mpv","multi purpose"]},"geometryAccuracy":"approximate","scaleAccuracy":"estimated-template","confidence":0.54,"delivery":{"mode":"procedural","assetReady":false,"asset":"","fallback":"procedural-van-v3","protected":false},"source":{"type":"mycar-generator","label":"MY CAR automatic body generator","rightsStatus":"MY CAR generated"},"features":["movable panels","van proportions","cargo and underside zones"],"releaseNotes":["Initial worldwide van foundation."],"updatedAt":"2026-07-13T00:00:00Z"},"mycar.template.universal":{"packageId":"mycar.template.universal","version":"1.0.0","channel":"stable","tier":"universal","label":"Universal Interactive Vehicle Foundation","match":{},"geometryAccuracy":"universal","scaleAccuracy":"estimated-template","confidence":0.3,"delivery":{"mode":"procedural","assetReady":false,"asset":"","fallback":"procedural-universal-v3","protected":false},"source":{"type":"mycar-generator","label":"MY CAR universal generator","rightsStatus":"MY CAR generated"},"features":["360-degree viewer","movable panels","universal vehicle zones","automatic future upgrade channel"],"releaseNotes":["Universal fallback for unmatched vehicles."],"updatedAt":"2026-07-13T00:00:00Z"}}};
const MYCAR_EMBEDDED_ASSET_NETWORK_CONFIG={"version":1,"schema":"mycar-asset-network-config-v1","enabled":false,"endpoint":"","timeoutMs":4500,"catalogPath":"asset-network-catalog.json","channel":"stable","autoCheckDays":7,"protectedDelivery":{"enabled":false,"signedUrlField":"assetUrl","expiresField":"expiresAt"},"sourceOrder":["manufacturer","licensed-partner","community-reviewed","mycar-verified","mycar-generator"],"deliveryModes":["signed-glb","public-glb","procedural"],"privacy":{"sendFullVin":false,"fieldsSent":["year","make","model","trim","bodyClass","engine","drivetrain","installedPackageId","installedPackageVersion"]},"notes":"The static prototype uses the local package catalog. Set enabled and endpoint after deploying the MY CAR asset broker. The full VIN is never sent to the package broker."};
const screens=["garage","vinsetup","vehicleprofile","assetnetwork","digitaltwin","photos","home","engine","airbox","guide","learn","maintenance","coolant","coolantguide","coolantlearn","coolantmaintenance","fusebox","fuseguide","fuselearn","fusemaintenance"];
const names={garage:["MY CAR","Garage"],vinsetup:["GARAGE","Add Vehicle"],vehicleprofile:["GARAGE","Vehicle Profile"],assetnetwork:["MY CAR","Asset Network"],digitaltwin:["VEHICLE","Digital Twin"],photos:["VEHICLE","Owner Photos"],home:["MY BUICK","2010 Buick LaCrosse CXL"],engine:["VEHICLE","Engine Bay"],airbox:["ENGINE BAY","Airbox"],guide:["AIRBOX","Guide Me"],learn:["AIRBOX","Learn"],maintenance:["AIRBOX","Maintenance"],coolant:["ENGINE BAY","Coolant Reservoir"],coolantguide:["COOLANT","Guide Me"],coolantlearn:["COOLANT","Learn"],coolantmaintenance:["COOLANT","Maintenance"],fusebox:["ENGINE BAY","Fuse Box"],fuseguide:["FUSE BOX","Guide Me"],fuselearn:["FUSE BOX","Learn"],fusemaintenance:["FUSE BOX","Maintenance"]};
let current="garage";let layer=0;let done=new Set();

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
  },
  {
    id:"fusebox",
    name:"Fuse Box",
    status:"locked",
    target:"fusebox",
    frame:{x:84.81,y:45.12,w:12.93,h:13.80},
    label:{x:49,y:48},
    viewBox:"0 0 100 100",
    path:"M 7.4 0.5 L 0 4.7 L 0.7 15.1 L 33.6 98.1 L 40.9 99.5 L 98 94.8 L 92.6 64.6 L 71.1 5.7 L 31.5 4.7 L 28.2 0.5 Z"
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

/* v6.10 coolant flush spot + prior callout fixes */
const coolantGuideSteps=[
  {
    check:"1",
    title:"Location + Cold Safety",
    text:"Start with the reservoir location. Confirm the engine is cold before touching the coolant cap or reservoir area.",
    img:"images/coolant/07_passenger_side_context.jpg",
    spot:{x:57,y:58,lx:70,ly:28,label:"Reservoir location"},
    tags:["Passenger side","Cold only","Context"]
  },
  {
    check:"2",
    title:"Level + Coolant Color",
    text:"Use the side-angle photo to judge visible coolant level and color. The goal is tracking changes over time, not guessing from one photo.",
    img:"images/coolant/04_side_hose_level_angle.jpg",
    spot:{x:66,y:46,lx:44,ly:31,label:"Visible level area"},
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
    img:"images/coolant/06_right_side_clearance_mount_flipped.jpg",
    spot:{x:45,y:63,lx:24,ly:38,label:"Visible side seam"},
    tags:["Side seam","Mount area","Obstructed zones"]
  },
  {
    check:"5",
    title:"Final Context Check",
    text:"Finish by checking the reservoir in context with the battery, fuse box, brake reservoir, and cowl. Then log what you found.",
    img:"images/coolant/00_reservoir_wide.jpg",
    spot:{x:58,y:52,lx:47,ly:22,label:"Coolant reservoir"},
    tags:["Wide view","Relationship map","Log it"]
  }
];
const coolantFlushSteps=[
  {
    title:"Prep safely",
    text:"Engine fully cold, vehicle stable, drain pan ready, gloves and eye protection on. Keep used coolant away from people and pets.",
    fact:"Cold engine only"
  },
  {
    title:"Locate the drain",
    text:"The primary drain point is the lower radiator drain petcock / drain cock, not the coolant reservoir. It may be hidden by the lower splash shield or radiator support.",
    fact:"Primary: lower radiator petcock"
  },
  {
    title:"Drain old coolant",
    text:"Drain through the petcock if it is accessible and usable. The lower radiator hose is the backup drain path when the petcock cannot be used.",
    fact:"Backup: lower radiator hose"
  },
  {
    title:"Refill correctly",
    text:"Use the proper 50/50 DEX-COOL mixture and refill slowly. Do not choose coolant only by color.",
    fact:"Approx. total capacity: 9.4 L / 9.9 qt"
  },
  {
    title:"Bleed + warm check",
    text:"Follow the correct fill procedure, verify heater output, and monitor temperature behavior while staying clear of hot parts and electric fans.",
    fact:"Watch temperature and heater output"
  },
  {
    title:"Cool down + recheck",
    text:"After the system cools again, recheck level, cap, seams, hose ends, clamps, and any fresh leak trails. Then log the service.",
    fact:"Final level check happens cold"
  }
];
let coolantFlushIndex=0;

const fuseGuideSteps=[
  {
    title:"Locate the fuse box",
    text:"Identify the underhood fuse box with the cover installed so you know exactly what assembly you are working on.",
    img:"images/fuse_box/00_cover_on.jpg",
    label:"Underhood fuse box cover",
    next:"Open the cover"
  },
  {
    title:"Release the three cover clips",
    text:"Release the upper, side, and lower clips shown on the photo, then lift the cover carefully.",
    img:"images/fuse_box/00_cover_on.jpg",
    label:"Three cover clip locations",
    next:"Lift the cover and read the lid diagram",
    clips:[
      {name:"Upper clip",x:37.15,y:16.78,lx:59,ly:12},
      {name:"Side clip",x:73.56,y:48.10,lx:84,ly:40},
      {name:"Lower clip",x:37.79,y:82.24,lx:20,ly:76}
    ]
  },
  {
    title:"Use the lid diagram",
    text:"Read the printed fuse and relay legend on the inside of the cover to identify the correct circuit before touching anything.",
    img:"images/fuse_box/01_lid_diagram_inside.jpg",
    label:"Printed lid legend",
    next:"Inspect the box contents"
  },
  {
    title:"Inspect fuses and relays",
    text:"Look over the fuse and relay layout for burnt, melted, loose, or corroded components. Compare the open box to the legend.",
    img:"images/fuse_box/02_fuses_relays_overview.jpg",
    label:"Open fuse box overview",
    next:"Replace only with same amperage"
  },
  {
    title:"Replace correctly and close",
    text:"If a fuse is blown, replace it only with the same amperage and style. Reinstall the cover securely when finished.",
    img:"images/fuse_box/00_cover_on.jpg",
    label:"Cover reinstalled securely",
    next:"Guide complete"
  }
];
let fuseGuideIndex=0;
let fuseGuideDone=new Set();

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
      "coolantFlushReference",
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
  "coolantFlushReference": {
    "title": "Coolant Flush Drain Reference",
    "status": "Researched + Needs Underside Photo Verification",
    "summary": "For the 2010 LaCrosse coolant flush guide, the drain point is the lower radiator drain petcock / drain cock. If that cannot be accessed, the lower radiator hose is the backup drain path.",
    "sections": [
      {"label":"Actual drain point","value":"Lower radiator drain petcock / drain cock, accessed from underneath/front lower radiator area. It is not on the coolant reservoir."},
      {"label":"Backup drain method","value":"Lower radiator hose if the petcock is inaccessible, damaged, or not usable."},
      {"label":"Petcock part reference","value":"GM radiator drain petcock 13267636 appears as the GM drain plug / petcock reference."},
      {"label":"Fluid","value":"50/50 mixture of clean water and DEX-COOL coolant."},
      {"label":"3.0L V6 system capacity","value":"9.4 L / 9.9 qt approximate total cooling system capacity."},
      {"label":"Still TBD","value":"Exact underside location/side on Alex's actual car, until a lower radiator photo verifies it."}
    ],
    "bullets": [
      "Do not open the cap hot.",
      "Keep hands, clothing, and tools away from electric fans.",
      "Used coolant must be captured and disposed of properly.",
      "After refilling, recheck level after warm-up and again after cool-down."
    ],
    "source": "2010 owner manual + CarCareKiosk 2010 LaCrosse flush reference + GM drain petcock listing",
    "photos": [
      {"src":"images/coolant/00_reservoir_wide.jpg","label":"Reservoir context","note":"Fill/check point, not the drain point."},
      {"src":"images/coolant/04_side_hose_level_angle.jpg","label":"Level reference","note":"Used for level/color checks after service."}
    ],
    "related": ["coolantService","coolantReplacement","coolantDataStatus"]
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
    btn.dataset.component=c.id;
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
  closeGlobalFloatSheet();
  current=id;
  screens.forEach(s=>document.getElementById(s)?.classList.toggle("active",s===id));
  document.getElementById("crumb").textContent=names[id][0];
  document.getElementById("title").textContent=names[id][1];
  document.getElementById("backBtn").classList.toggle("hidden",id==="garage");
  closeDrawer();
  if(id==="guide"){
    requestAnimationFrame(()=>{renderMarkers();updateProgress();});
  }
  if(id==="coolantguide"){
    requestAnimationFrame(()=>renderCoolantStep());
  }else{
    closeCoolantGuideSheet();
  }
  if(id==="fuseguide"){
    requestAnimationFrame(()=>renderFuseGuide());
  }
  if(id==="garage")renderGarage();
  if(id==="home")renderVehicleHome();
  if(id==="vehicleprofile")renderVehicleProfile();
  if(id==="assetnetwork")renderAssetNetwork();
  if(id==="vinsetup")renderVinOnboardStep();
  if(id==="digitaltwin")requestAnimationFrame(()=>{renderDigitalTwin();initTwinCanvas();});
  if(id==="photos")renderPhotoGallery();
  renderGlobalFloatDock(id);
}
document.querySelectorAll("[data-go]").forEach(btn=>btn.addEventListener("click",()=>showScreen(btn.dataset.go)));
document.getElementById("backBtn").addEventListener("click",()=>{
  if(document.getElementById("globalFloatSheet")?.classList.contains("open")){
    closeGlobalFloatSheet();
    return;
  }
  if(sheet?.classList.contains("open")){
    closeSheet();
    return;
  }
  if(drawer?.classList.contains("open")){
    closeDrawer();
    return;
  }
  if(current==="coolantguide" && document.getElementById("coolantGuideSheet")?.classList.contains("open")){
    closeCoolantGuideSheet();
    return;
  }
  const backMap={vinsetup:"garage",vehicleprofile:"garage",assetnetwork:"digitaltwin",digitaltwin:"vehicleprofile",photos:"digitaltwin",home:"garage",engine:"home",airbox:"engine",guide:"airbox",learn:"airbox",maintenance:"airbox",coolant:"engine",coolantguide:"coolant",coolantlearn:"coolant",coolantmaintenance:"coolant",fusebox:"engine",fuseguide:"fusebox",fuselearn:"fusebox",fusemaintenance:"fusebox"};
  showScreen(backMap[current]||"garage");
});

const drawer=document.getElementById("drawer");const dim=document.getElementById("dim");const sheet=document.getElementById("sheet");
document.getElementById("menuBtn").addEventListener("click",()=>{
  drawer.scrollTop=0;
  drawer.classList.add("open");
  drawer.setAttribute("aria-hidden","false");
  dim.classList.add("show");
});
document.getElementById("closeDrawer").addEventListener("click",closeDrawer);
dim.addEventListener("click",()=>{closeDrawer();closeSheet()});
function closeDrawer(){
  drawer.classList.remove("open");
  drawer.setAttribute("aria-hidden","true");
  if(!sheet.classList.contains("open"))dim.classList.remove("show");
}

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

function updateProgress(){const total=7;const completed=done.size;document.getElementById("count").textContent=completed+"/"+total;document.getElementById("progressLabel").textContent=completed+" of "+total+" complete";document.getElementById("progressFill").style.width=Math.round((completed/total)*100)+"%";if(layer===0){document.getElementById("nextAction").textContent=completed===total?"Next: lift cover":"Next: remove lid fasteners"}else if(layer===1){document.getElementById("nextAction").textContent="Next: remove filter"}else{document.getElementById("nextAction").textContent="Next: inspect housing"};updateGlobalGuideDock();}
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

  sheet.scrollTop=0;
  document.getElementById("sheetData")?.scrollTo({top:0,behavior:"instant"});
  sheet.classList.add("open");
  sheet.setAttribute("aria-hidden","false");
  dim.classList.add("show");
}
function closeSheet(){
  sheet.classList.remove("open");
  sheet.setAttribute("aria-hidden","true");
  if(!drawer.classList.contains("open"))dim.classList.remove("show");
}
document.getElementById("closeSheet").addEventListener("click",closeSheet);
function getLogs(){return JSON.parse(localStorage.getItem("mybuick_airbox_life_logs")||"[]")}
Object.assign(parts,{
  fuseQuickstart:{
    title:"Fuse Box Quick Sheet",
    status:"Photo Verified",
    summary:"The three-photo fuse box starter: identify the box, use the lid legend, inspect the open fuse and relay center, and replace only with the same amperage.",
    quickFacts:[
      {label:"Location",value:"Underhood / engine bay"},
      {label:"Verified Views",value:"Cover, lid legend, open box"},
      {label:"Main Rule",value:"Same amperage and fuse style"},
      {label:"Contains",value:"Fuses and relays"}
    ],
    sections:[
      {label:"Start here",value:"Read the lid legend and identify the exact circuit before removing a fuse or relay."},
      {label:"A blown fuse means",value:"The circuit opened because current exceeded the fuse rating. The fuse does not explain why it happened."},
      {label:"Repeat failure",value:"Stop replacing fuses and diagnose the circuit if the same fuse blows again."}
    ],
    photos:[
      {src:"images/fuse_box/00_cover_on.jpg",label:"Cover installed",note:"Location and finished-state reference."},
      {src:"images/fuse_box/01_lid_diagram_inside.jpg",label:"Inside lid legend",note:"Use this to identify fuse and relay positions."},
      {src:"images/fuse_box/02_fuses_relays_overview.jpg",label:"Open fuse box",note:"Physical fuse and relay layout reference."}
    ],
    bullets:[
      "Vehicle off for routine visual inspection.",
      "Never install a higher-amperage fuse to keep a circuit working.",
      "Check for heat damage, moisture, corrosion, and loose fit while the cover is off.",
      "Reinstall the cover securely when finished."
    ],
    source:"Alex uploaded fuse box photo set"
  },
  fuseLocation:{
    title:"Fuse Box Location & Layout",
    status:"Photo Verified",
    summary:"Use the three verified views together so the lid legend and the physical box never get separated in your head.",
    quickFacts:[
      {label:"View 1",value:"Cover installed"},
      {label:"View 2",value:"Inside lid legend"},
      {label:"View 3",value:"Open fuse / relay center"}
    ],
    sections:[
      {label:"Cover view",value:"Shows the complete assembly and where it sits in the engine bay."},
      {label:"Legend view",value:"Shows the printed circuit-position reference inside the removable cover."},
      {label:"Open view",value:"Shows the actual fuses and relays from above."}
    ],
    bullets:[
      "Keep the cover oriented while comparing the legend to the box.",
      "Confirm the circuit name and physical position before removing anything.",
      "Take a quick photo before moving multiple relays or fuses."
    ],
    source:"Alex uploaded fuse box photo set"
  },
  fuseReading:{
    title:"Reading Fuses & Relays",
    status:"Starter Reference",
    summary:"Blade fuses are identified by position and amperage. Relays are electrically controlled switches identified by their position and part type.",
    quickFacts:[
      {label:"Fuse rating",value:"Amperage printed on fuse"},
      {label:"Blown sign",value:"Broken or melted internal link"},
      {label:"Relay",value:"Electrically controlled switch"}
    ],
    sections:[
      {label:"Use the legend",value:"Match the named circuit to the printed position first."},
      {label:"Check the rating",value:"Replacement amperage and physical fuse style must match the removed fuse."},
      {label:"Inspect the socket",value:"A good fuse can still have corrosion, heat damage, or a loose connection around it."}
    ],
    bullets:[
      "Fuse color can help, but read the amperage marking too.",
      "A relay is not judged like a visible blade fuse.",
      "Do not randomly swap parts without recording their original positions."
    ],
    source:"Starter fuse-service reference + Alex photo set"
  },
  fuseService:{
    title:"Fuse Inspection & Replacement",
    status:"Starter Procedure",
    summary:"Identify the correct circuit, inspect the fuse and socket, replace only with the same rating and style, then retest the circuit.",
    quickFacts:[
      {label:"Vehicle state",value:"Off for routine service"},
      {label:"Replacement",value:"Same amp / same style"},
      {label:"Finish",value:"Cover secured"}
    ],
    sections:[
      {label:"Before removal",value:"Confirm the circuit with the lid legend and note the original position."},
      {label:"During inspection",value:"Check the fuse element, terminals, socket, and nearby plastic for damage."},
      {label:"After replacement",value:"Retest the circuit. A repeat failure means the circuit needs diagnosis."}
    ],
    bullets:[
      "Use the proper fuse puller when available.",
      "Do not force an incorrect fuse style into the socket.",
      "Do not upsize amperage.",
      "Reinstall the cover and verify its latches."
    ],
    source:"Starter service rules"
  },
  fuseTroubleshooting:{
    title:"Fuse Box Troubleshooting",
    status:"Starter Diagnostic View",
    summary:"A dead electrical feature can be caused by a fuse, relay, wiring, connector, switch, module, or the component itself.",
    quickFacts:[
      {label:"Possible symptom",value:"Dead or intermittent circuit"},
      {label:"First checks",value:"Legend, fuse, rating, socket"},
      {label:"Repeat failure",value:"Possible short or overload"}
    ],
    sections:[
      {label:"Good first step",value:"Confirm the correct fuse and inspect it before buying parts."},
      {label:"Good fuse, dead circuit",value:"The fault may be a relay, connection, wiring problem, control issue, or failed component."},
      {label:"Fuse blows again",value:"Stop. Repeated fuse failure points to a circuit problem that needs diagnosis."}
    ],
    bullets:[
      "Moisture, corrosion, and heat damage can create intermittent faults.",
      "A replacement fuse is not a repair for an unresolved short circuit.",
      "Logging repeated failures helps reveal patterns."
    ],
    source:"Starter diagnostic framework"
  },
  fuseDataStatus:{
    title:"Fuse Box Verification Status",
    status:"Photo Verified",
    summary:"The overall fuse box, inside-lid legend, and open fuse / relay layout are verified from Alex's photos. Individual positions are not yet mapped inside the app.",
    quickFacts:[
      {label:"Verified",value:"3 fuse box views"},
      {label:"Current level",value:"Safe basic starter"},
      {label:"Next gold step",value:"Position-by-position map"}
    ],
    sections:[
      {label:"Verified now",value:"Cover installed, inside cover legend, and open fuse / relay overview."},
      {label:"Still waiting",value:"Every individual fuse position, circuit shortcut, relay part number, and exact visual hotspot."},
      {label:"Gold-standard upgrade",value:"High-resolution legend breakdown connected to a tappable map of the open box."}
    ],
    bullets:[
      "The current module is usable without pretending every position is verified.",
      "Future close-up photos can unlock exact fuse and relay mapping."
    ],
    source:"Alex uploaded fuse box photo set"
  }
});

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
  document.getElementById("coolantStageTitle").textContent=step.title;
  document.getElementById("coolantStageCounter").textContent=(coolantStepIndex+1)+"/"+coolantGuideSteps.length;
  document.getElementById("coolantDockTitle").textContent=step.title;
  document.getElementById("coolantDockCounter").textContent=(coolantStepIndex+1)+"/"+coolantGuideSteps.length;
  const dockProgress=document.getElementById("coolantDockProgress");
  if(dockProgress)dockProgress.style.width=(((coolantStepIndex+1)/coolantGuideSteps.length)*100)+"%";
  const dockStatus=document.getElementById("coolantDockStatus");
  if(dockStatus){
    const completed=coolantChecks.has(step.check);
    dockStatus.textContent=completed?"Completed":"Tap to open";
    dockStatus.classList.toggle("done",completed);
  }
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


function setCoolantSheetTab(tab){
  document.querySelectorAll("[data-coolant-sheet-tab]").forEach(btn=>{
    const active=btn.dataset.coolantSheetTab===tab;
    btn.classList.toggle("active",active);
    btn.setAttribute("aria-selected",active?"true":"false");
  });
  document.querySelectorAll("[data-coolant-sheet-panel]").forEach(panel=>{
    const active=panel.dataset.coolantSheetPanel===tab;
    panel.classList.toggle("active",active);
    panel.hidden=!active;
  });
  const sheet=document.getElementById("coolantGuideSheet");
  if(sheet)sheet.dataset.activeTab=tab;
  const body=document.querySelector("#coolantGuideSheet .coolantFloatBody");
  if(body)body.scrollTop=0;
  if(tab==="flush")renderCoolantFlushStep();
}

function renderCoolantFlushStep(){
  const step=coolantFlushSteps[coolantFlushIndex]||coolantFlushSteps[0];
  const counter=document.getElementById("coolantFlushCounter");
  const title=document.getElementById("coolantFlushTitle");
  const text=document.getElementById("coolantFlushText");
  const fact=document.getElementById("coolantFlushFact");
  if(counter)counter.textContent=(coolantFlushIndex+1)+"/"+coolantFlushSteps.length;
  if(title)title.textContent=step.title;
  if(text)text.textContent=step.text;
  if(fact)fact.textContent=step.fact;
  const prev=document.getElementById("coolantFlushPrev");
  const next=document.getElementById("coolantFlushNext");
  if(prev)prev.disabled=coolantFlushIndex===0;
  if(next)next.disabled=coolantFlushIndex===coolantFlushSteps.length-1;
}

document.getElementById("coolantFlushPrev")?.addEventListener("click",()=>{
  if(coolantFlushIndex>0){coolantFlushIndex--;renderCoolantFlushStep();}
});
document.getElementById("coolantFlushNext")?.addEventListener("click",()=>{
  if(coolantFlushIndex<coolantFlushSteps.length-1){coolantFlushIndex++;renderCoolantFlushStep();}
});

function openCoolantGuideSheet(tab="step"){
  setCoolantSheetTab(tab);
  const sheet=document.getElementById("coolantGuideSheet");
  sheet?.classList.add("open");
  document.getElementById("coolantSheetBackdrop")?.classList.add("open");
  document.getElementById("coolantGuideDockToggle")?.setAttribute("aria-expanded","true");
  sheet?.setAttribute("aria-hidden","false");
  document.body.classList.add("coolantSheetOpen");
}

function closeCoolantGuideSheet(){
  const sheet=document.getElementById("coolantGuideSheet");
  sheet?.classList.remove("open");
  document.getElementById("coolantSheetBackdrop")?.classList.remove("open");
  document.getElementById("coolantGuideDockToggle")?.setAttribute("aria-expanded","false");
  sheet?.setAttribute("aria-hidden","true");
  document.body.classList.remove("coolantSheetOpen");
}

document.getElementById("coolantGuideDockToggle")?.addEventListener("click",()=>openCoolantGuideSheet("step"));
document.getElementById("coolantSheetClose")?.addEventListener("click",closeCoolantGuideSheet);
document.getElementById("coolantSheetBackdrop")?.addEventListener("click",closeCoolantGuideSheet);
document.querySelectorAll("[data-coolant-sheet-tab]").forEach(btn=>{
  btn.addEventListener("click",()=>setCoolantSheetTab(btn.dataset.coolantSheetTab));
});
document.addEventListener("keydown",e=>{
  if(e.key==="Escape")closeCoolantGuideSheet();
});

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
  const progressText=document.getElementById("coolantCheckProgressText");
  if(progressText)progressText.textContent=coolantChecks.size+" of 5 complete";
  const mark=document.getElementById("coolantMarkStep");
  if(mark && coolantGuideSteps[coolantStepIndex]){
    const completed=coolantChecks.has(coolantGuideSteps[coolantStepIndex].check);
    mark.textContent=completed?"Marked ✓":"Mark Done";
    const dockStatus=document.getElementById("coolantDockStatus");
    if(dockStatus){
      dockStatus.textContent=completed?"Completed":"Tap to open";
      dockStatus.classList.toggle("done",completed);
    }
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
  document.getElementById("coolantLogNotes").placeholder="Level, color, smell, leaks, cap condition, hose condition...";
  document.getElementById("coolantLogForm").classList.remove("hidden");
});

function openCoolantFlushLogForm(){
  document.getElementById("coolantLogType").value="Coolant Flush";
  document.getElementById("coolantLogDate").value=todayISO();
  document.getElementById("coolantLogCondition").value="Serviced";
  document.getElementById("coolantLogPart").placeholder="DEX-COOL 50/50, brand, amount used, cap if replaced...";
  document.getElementById("coolantLogNotes").placeholder="Flush method, amount drained/refilled, air bled, heater output, leaks after warm-up, temp behavior...";
  const form=document.getElementById("coolantLogForm");
  form.classList.remove("hidden");
  form.scrollIntoView({behavior:"smooth",block:"start"});
}
document.getElementById("coolantGuideFlushLog")?.addEventListener("click",()=>{
  closeCoolantGuideSheet();
  showScreen("coolantmaintenance");
  requestAnimationFrame(()=>openCoolantFlushLogForm());
});

document.getElementById("coolantFlushQuick")?.addEventListener("click",()=>openCoolantFlushLogForm());
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



// v6.15 Global floating interface
const globalFloatDock=document.getElementById("globalFloatDock");
const globalFloatSheet=document.getElementById("globalFloatSheet");
const globalFloatBackdrop=document.getElementById("globalFloatBackdrop");
const globalFloatContent=document.getElementById("globalFloatContent");
let globalMountedNodes=[];
let globalFloatCleanup=null;
let globalRestoreTimer=null;
let globalLastTrigger=null;

function cancelGlobalRestore(){
  if(globalRestoreTimer){
    clearTimeout(globalRestoreTimer);
    globalRestoreTimer=null;
  }
}

function globalDockItems(screenId){
  const map={
    garage:[
      {icon:"＋",label:"Add Vehicle",action:"garage-add",primary:true},
      {icon:"☁",label:"Asset Network",action:"go",target:"assetnetwork"},
      {icon:"◇",label:"Digital Twin",action:"go",target:"digitaltwin"}
    ],
    vinsetup:vinSetupDockItems(),
    vehicleprofile:[
      {icon:"🚗",label:"Open Vehicle",action:"go",target:"home",primary:true},
      {icon:"◇",label:"Digital Twin",action:"go",target:"digitaltwin"},
      {icon:"▧",label:"Photos",action:"go",target:"photos"},
      {icon:"✎",label:"Edit",action:"profile-edit"}
    ],
    digitaltwin:[
      {icon:"🚗",label:"Engine Bay",action:"go",target:"engine",primary:true},
      {icon:"☁",label:"Asset Network",action:"go",target:"assetnetwork"},
      {icon:"▧",label:"Photos",action:"go",target:"photos"},
      {icon:"▦",label:"Garage",action:"go",target:"garage"}
    ],
    assetnetwork:[
      {icon:"↻",label:"Check Upgrade",action:"asset-check",primary:true},
      {icon:"◇",label:"Digital Twin",action:"go",target:"digitaltwin"},
      {icon:"▦",label:"Garage",action:"go",target:"garage"}
    ],
    photos:[
      {icon:"＋",label:"Add Photo",action:"photo-add",primary:true},
      {icon:"◇",label:"Digital Twin",action:"go",target:"digitaltwin"},
      {icon:"▦",label:"Garage",action:"go",target:"garage"}
    ],
    home:[
      {icon:"▦",label:"Garage",action:"go",target:"garage"},
      {icon:"◇",label:"Digital Twin",action:"go",target:"digitaltwin"},
      {icon:"🚗",label:"Engine Bay",action:"go",target:"engine",primary:true},
      {icon:"▧",label:"Photos",action:"go",target:"photos"}
    ],
    engine:[
      {icon:"🌬",label:"Airbox",action:"go",target:"airbox",primary:true},
      {icon:"🧊",label:"Coolant",action:"go",target:"coolant"},
      {icon:"⚡",label:"Fuse Box",action:"go",target:"fusebox"},
      {icon:"ⓘ",label:"Map Info",action:"engine-info"}
    ],
    airbox:[
      {icon:"🔧",label:"Guide Me",action:"go",target:"guide",primary:true},
      {icon:"📚",label:"Learn",action:"go",target:"learn"},
      {icon:"📝",label:"Maintenance",action:"go",target:"maintenance"}
    ],
    coolant:[
      {icon:"🔧",label:"Guide Me",action:"go",target:"coolantguide",primary:true},
      {icon:"📚",label:"Learn",action:"go",target:"coolantlearn"},
      {icon:"📝",label:"Maintenance",action:"go",target:"coolantmaintenance"}
    ],
    fusebox:[
      {icon:"🔧",label:"Guide Me",action:"go",target:"fuseguide",primary:true},
      {icon:"📚",label:"Learn",action:"go",target:"fuselearn"},
      {icon:"📝",label:"Maintenance",action:"go",target:"fusemaintenance"}
    ],
    guide:[
      {icon:"↺",label:"Reset",action:"airbox-reset"},
      {icon:"0/7",label:"Progress",action:"airbox-info",primary:true,id:"globalGuideStatus"},
      {icon:"›",label:"Next",action:"airbox-next"}
    ],
    learn:[
      {icon:"▦",label:"Browse Topics",action:"topics",source:"learn",primary:true},
      {icon:"🔧",label:"Guide",action:"go",target:"guide"},
      {icon:"📝",label:"Maintenance",action:"go",target:"maintenance"}
    ],
    coolantlearn:[
      {icon:"▦",label:"Browse Topics",action:"topics",source:"coolantlearn",primary:true},
      {icon:"🔧",label:"Guide",action:"go",target:"coolantguide"},
      {icon:"📝",label:"Maintenance",action:"go",target:"coolantmaintenance"}
    ],
    fuseguide:[
      {icon:"‹",label:"Prev",action:"fuse-prev",disabled:fuseGuideIndex===0},
      {icon:"1/5",label:"Current Step",action:"fuse-info",primary:true,id:"globalFuseStatus"},
      {icon:"›",label:"Next",action:"fuse-next",disabled:fuseGuideIndex===fuseGuideSteps.length-1}
    ],
    fuselearn:[
      {icon:"▦",label:"Browse Topics",action:"topics",source:"fuselearn",primary:true},
      {icon:"🔧",label:"Guide",action:"go",target:"fuseguide"},
      {icon:"📝",label:"Maintenance",action:"go",target:"fusemaintenance"}
    ],
    maintenance:[
      {icon:"⚙️",label:"Current Setup",action:"airbox-setup",primary:true},
      {icon:"＋",label:"Add Event",action:"airbox-add"},
      {icon:"◷",label:"History",action:"airbox-history"}
    ],
    coolantmaintenance:[
      {icon:"⚙️",label:"Current Setup",action:"coolant-setup",primary:true},
      {icon:"＋",label:"Add Event",action:"coolant-add"},
      {icon:"↻",label:"Log Flush",action:"coolant-flush"},
      {icon:"◷",label:"History",action:"coolant-history"}
    ],
    fusemaintenance:[
      {icon:"⚡",label:"Overview",action:"fuse-maint-info",primary:true},
      {icon:"🔧",label:"Guide",action:"go",target:"fuseguide"},
      {icon:"📚",label:"Learn",action:"go",target:"fuselearn"}
    ]
  };
  return map[screenId]||[];
}

function renderGlobalFloatDock(screenId){
  if(!globalFloatDock)return;
  const items=globalDockItems(screenId);
  if(screenId==="coolantguide" || !items.length){
    globalFloatDock.classList.add("hidden");
    globalFloatDock.innerHTML="";
    return;
  }

  globalFloatDock.classList.remove("hidden");
  globalFloatDock.classList.toggle("single",items.length===1);
  globalFloatDock.innerHTML=items.map(item=>
    '<button type="button"'+
      (item.id?' id="'+item.id+'"':'')+
      ' class="'+(item.primary?'primary':'')+'"'+
      ' data-global-action="'+item.action+'"'+
      (item.target?' data-global-target="'+item.target+'"':'')+
      (item.source?' data-global-source="'+item.source+'"':'')+
      (item.disabled?' disabled aria-disabled="true"':'')+
    '>'+
      '<span class="globalDockIcon">'+item.icon+'</span>'+
      '<span>'+item.label+'</span>'+
    '</button>'
  ).join("");

  globalFloatDock.querySelectorAll("[data-global-action]").forEach(btn=>{
    btn.addEventListener("click",()=>handleGlobalDockAction(btn));
  });
  updateGlobalGuideDock();
  updateGlobalFuseDock();
}

function handleGlobalDockAction(btn){
  const action=btn.dataset.globalAction;
  if(action==="go"){
    showScreen(btn.dataset.globalTarget);
    return;
  }
  if(action==="engine-info"){openEngineInfoSheet();return;}
  if(action==="topics"){openTopicsSheet(btn.dataset.globalSource);return;}
  if(action==="airbox-reset"){document.getElementById("resetBtn")?.click();return;}
  if(action==="airbox-next"){document.getElementById("nextBtn")?.click();return;}
  if(action==="airbox-info"){openAirboxGuideInfo();return;}
  if(action==="airbox-setup"){openMaintenanceSetup("airbox");return;}
  if(action==="airbox-add"){openMaintenanceAdd("airbox");return;}
  if(action==="airbox-history"){openMaintenanceHistory("airbox");return;}
  if(action==="coolant-setup"){openMaintenanceSetup("coolant");return;}
  if(action==="coolant-add"){openMaintenanceAdd("coolant");return;}
  if(action==="coolant-flush"){openMaintenanceFlush();return;}
  if(action==="coolant-history"){openMaintenanceHistory("coolant");return;}
  if(action==="fuse-prev"){stepFuseGuide(-1);return;}
  if(action==="fuse-next"){stepFuseGuide(1);return;}
  if(action==="fuse-info"){openFuseGuideInfo();return;}
  if(action==="fuse-maint-info"){openFuseMaintenanceInfo();return;}
  if(action==="garage-add"){startVinSetup();return;}
  if(action==="asset-check"){checkActiveVehicleAssetNetwork({force:true});return;}
  if(action==="vin-cancel"){const vehicle=getActiveVehicle();showScreen(vehicle?"digitaltwin":"garage");return;}
  if(action==="vin-back"){vinOnboardStep=Math.max(0,vinOnboardStep-1);renderVinOnboardStep();return;}
  if(action==="vin-next"){advanceVinSetup();return;}
  if(action==="profile-edit"){openProfileEditor();return;}
  if(action==="photo-add"){openPhotoCapture();return;}
}

function openGlobalFloatSheet(title,subtitle,html,eyebrow="MY BUICK"){
  cancelGlobalRestore();
  restoreGlobalMountedNodes();
  globalLastTrigger=document.activeElement;
  document.getElementById("globalFloatEyebrow").textContent=eyebrow;
  document.getElementById("globalFloatTitle").textContent=title;
  document.getElementById("globalFloatSubtitle").textContent=subtitle||"";
  globalFloatContent.innerHTML=html||"";
  globalFloatContent.scrollTop=0;
  globalFloatSheet.classList.add("open");
  globalFloatBackdrop.classList.add("open");
  globalFloatSheet.setAttribute("aria-hidden","false");
  document.body.classList.add("globalFloatOpen");
}

function openGlobalMovedSheet(title,subtitle,nodes,options={}){
  cancelGlobalRestore();
  restoreGlobalMountedNodes();
  globalLastTrigger=document.activeElement;
  document.getElementById("globalFloatEyebrow").textContent=options.eyebrow||"MY BUICK";
  document.getElementById("globalFloatTitle").textContent=title;
  document.getElementById("globalFloatSubtitle").textContent=subtitle||"";
  globalFloatContent.innerHTML="";

  nodes.filter(Boolean).forEach(node=>{
    const placeholder=document.createComment("global-float-placeholder");
    node.parentNode.insertBefore(placeholder,node);
    globalMountedNodes.push({
      node,
      placeholder,
      wasHidden:node.classList.contains("hidden")
    });
    node.classList.add("globalMovedNode");
    globalFloatContent.appendChild(node);
  });

  globalFloatCleanup=options.cleanup||null;
  globalFloatContent.scrollTop=0;
  globalFloatSheet.classList.add("open");
  globalFloatBackdrop.classList.add("open");
  globalFloatSheet.setAttribute("aria-hidden","false");
  document.body.classList.add("globalFloatOpen");
}

function restoreGlobalMountedNodes(){
  globalMountedNodes.forEach(item=>{
    if(item.placeholder.parentNode){
      item.placeholder.parentNode.insertBefore(item.node,item.placeholder);
      item.placeholder.remove();
    }
    item.node.classList.remove("globalMovedNode");
  });
  globalMountedNodes=[];
  if(globalFloatCleanup){
    globalFloatCleanup();
    globalFloatCleanup=null;
  }
}

function closeGlobalFloatSheet(){
  if(!globalFloatSheet)return;
  globalFloatSheet.classList.remove("open");
  globalFloatBackdrop?.classList.remove("open");
  globalFloatSheet.setAttribute("aria-hidden","true");
  document.body.classList.remove("globalFloatOpen");
  cancelGlobalRestore();
  globalRestoreTimer=setTimeout(()=>{
    restoreGlobalMountedNodes();
    globalRestoreTimer=null;
    if(globalLastTrigger && document.contains(globalLastTrigger)){
      globalLastTrigger.focus({preventScroll:true});
    }
    globalLastTrigger=null;
  },300);
}

function installSwipeDownClose(handle,closeFn){
  if(!handle)return;
  let startY=0;
  let startTime=0;
  handle.addEventListener("touchstart",event=>{
    const touch=event.touches[0];
    startY=touch.clientY;
    startTime=Date.now();
  },{passive:true});
  handle.addEventListener("touchend",event=>{
    const touch=event.changedTouches[0];
    const distance=touch.clientY-startY;
    const elapsed=Date.now()-startTime;
    if(distance>46 && elapsed<650)closeFn();
  },{passive:true});
}

installSwipeDownClose(document.querySelector(".globalFloatHandle"),closeGlobalFloatSheet);
installSwipeDownClose(document.querySelector("#coolantGuideSheet .coolantSheetHandle"),closeCoolantGuideSheet);

document.getElementById("globalFloatClose")?.addEventListener("click",closeGlobalFloatSheet);
globalFloatBackdrop?.addEventListener("click",closeGlobalFloatSheet);
document.addEventListener("keydown",e=>{
  if(e.key==="Escape" && globalFloatSheet?.classList.contains("open")){
    closeGlobalFloatSheet();
  }
});

function openEngineInfoSheet(){
  openGlobalFloatSheet(
    "Component Map",
    "The car stays front and center.",
    '<div class="globalInfoCard"><span>Mapped Components</span><b>Airbox and coolant reservoir are traced and tappable on the engine photo.</b></div>'+
    '<div class="globalInfoCard"><span>Fuse Box</span><b>The Fuse Box module is available from the floating component dock. A traced engine-photo outline can be added later.</b></div>',
    "ENGINE BAY"
  );
}

function openTopicsSheet(sourceId){
  const source=document.getElementById(sourceId);
  const cards=[...source.querySelectorAll(":scope > .learnCard")];
  const title=sourceId==="coolantlearn"?"Coolant Topics":sourceId==="fuselearn"?"Fuse Box Topics":"Airbox Topics";
  const html='<div class="globalTopicGrid">'+cards.map(card=>{
    const part=card.dataset.part;
    const tag=card.querySelector(".learnTag")?.textContent||"Topic";
    const name=card.querySelector("b")?.textContent||"Learn";
    const desc=card.querySelector("p")?.textContent||"";
    return '<button class="globalTopicButton" type="button" data-global-part="'+part+'">'+
      '<span>'+tag+'</span><b>'+name+'</b><small>'+desc+'</small>'+
    '</button>';
  }).join("")+'</div>';

  openGlobalFloatSheet(title,"Pick a topic. Deep information opens in another floating sheet.",html,"LEARN");
  globalFloatContent.querySelectorAll("[data-global-part]").forEach(btn=>{
    btn.addEventListener("click",()=>{
      const part=btn.dataset.globalPart;
      closeGlobalFloatSheet();
      openSheet(part);
    });
  });
}

function updateGlobalGuideDock(){
  const btn=document.getElementById("globalGuideStatus");
  if(!btn)return;
  const icon=btn.querySelector(".globalDockIcon");
  if(icon)icon.textContent=done.size+"/7";
  const label=btn.querySelector("span:last-child");
  if(label)label.textContent=layer===0?"Fasteners":layer===1?"Filter":"Housing";
}

function openAirboxGuideInfo(){
  const title=document.getElementById("stepTitle")?.textContent||"Airbox Guide";
  const text=document.getElementById("stepText")?.textContent||"";
  const progress=document.getElementById("progressLabel")?.textContent||"";
  const width=document.getElementById("progressFill")?.style.width||"0%";
  openGlobalFloatSheet(
    title,
    progress,
    '<div class="globalInfoCard"><span>Current Step</span><b>'+text+'</b></div>'+
    '<div class="globalGuideProgress"><span>'+progress+'</span><div class="progressBar"><div style="height:100%;width:'+width+';background:linear-gradient(90deg,#2f77ff,#65d3ff);border-radius:999px"></div></div></div>'+
    '<div class="globalSheetActions"><button id="globalAirboxReset" class="ghost" type="button">Reset</button><button id="globalAirboxNext" class="primary" type="button">Next Step</button></div>',
    "AIRBOX GUIDE"
  );
  document.getElementById("globalAirboxReset")?.addEventListener("click",()=>{
    document.getElementById("resetBtn")?.click();
    closeGlobalFloatSheet();
  });
  document.getElementById("globalAirboxNext")?.addEventListener("click",()=>{
    document.getElementById("nextBtn")?.click();
    closeGlobalFloatSheet();
  });
}


function updateGlobalFuseDock(){
  const btn=document.getElementById("globalFuseStatus");
  if(!btn)return;
  const step=fuseGuideSteps[fuseGuideIndex]||fuseGuideSteps[0];
  const icon=btn.querySelector(".globalDockIcon");
  if(icon)icon.textContent=(fuseGuideIndex+1)+"/"+fuseGuideSteps.length;
  const label=btn.querySelector("span:last-child");
  if(label)label.textContent=step.title;
}

function renderFuseGuide(){
  const step=fuseGuideSteps[fuseGuideIndex]||fuseGuideSteps[0];
  const total=fuseGuideSteps.length;
  const title=document.getElementById("fuseStepTitle");
  const counter=document.getElementById("fuseStepCounter");
  const image=document.getElementById("fuseStepImg");
  const label=document.getElementById("fuseGuideLabel");
  if(title)title.textContent=step.title;
  if(counter)counter.textContent=(fuseGuideIndex+1)+"/"+total;
  if(image){
    image.src=step.img;
    image.alt=step.title;
  }
  if(label)label.textContent=step.label;
  renderFuseClipLocations(step);
  renderGlobalFloatDock(current);
  updateGlobalFuseDock();
}

function renderFuseClipLocations(step){
  const layer=document.getElementById("fuseClipLayer");
  const image=document.getElementById("fuseStepImg");
  const wrap=document.querySelector("#fuseguide .fuseGuideWrap");
  if(!layer || !image || !wrap)return;

  layer.innerHTML="";
  layer.classList.toggle("active",Boolean(step.clips?.length));
  if(!step.clips?.length)return;

  const draw=()=>{
    if(!image.naturalWidth || !image.naturalHeight)return;

    const wrapWidth=wrap.clientWidth;
    const wrapHeight=wrap.clientHeight;
    const imageRatio=image.naturalWidth/image.naturalHeight;
    const wrapRatio=wrapWidth/wrapHeight;

    let drawWidth;
    let drawHeight;
    let offsetX;
    let offsetY;

    if(imageRatio>wrapRatio){
      drawWidth=wrapWidth;
      drawHeight=wrapWidth/imageRatio;
      offsetX=0;
      offsetY=(wrapHeight-drawHeight)/2;
    }else{
      drawHeight=wrapHeight;
      drawWidth=wrapHeight*imageRatio;
      offsetX=(wrapWidth-drawWidth)/2;
      offsetY=0;
    }

    const points=step.clips.map(clip=>({
      ...clip,
      px:offsetX+(clip.x/100)*drawWidth,
      py:offsetY+(clip.y/100)*drawHeight,
      lpx:offsetX+(clip.lx/100)*drawWidth,
      lpy:offsetY+(clip.ly/100)*drawHeight
    }));

    layer.innerHTML=
      '<svg class="fuseClipLines" viewBox="0 0 '+wrapWidth+' '+wrapHeight+'" aria-hidden="true">'+
        points.map(point=>
          '<line x1="'+point.px+'" y1="'+point.py+'" x2="'+point.lpx+'" y2="'+point.lpy+'"></line>'
        ).join("")+
      '</svg>'+
      points.map(point=>
        '<span class="fuseClipPoint" style="left:'+point.px+'px;top:'+point.py+'px"></span>'+
        '<span class="fuseClipLabel" style="left:'+point.lpx+'px;top:'+point.lpy+'px">'+point.name+'</span>'
      ).join("");
  };

  if(image.complete && image.naturalWidth){
    requestAnimationFrame(draw);
  }else{
    image.addEventListener("load",()=>requestAnimationFrame(draw),{once:true});
  }
}

function stepFuseGuide(dir){
  const next=Math.max(0,Math.min(fuseGuideSteps.length-1,fuseGuideIndex+dir));
  if(next===fuseGuideIndex)return;
  fuseGuideIndex=next;
  renderFuseGuide();
}

function toggleFuseGuideStep(index){
  if(fuseGuideDone.has(index))fuseGuideDone.delete(index);
  else fuseGuideDone.add(index);
  renderFuseGuide();
}

function fuseGuideSheetHtml(){
  const step=fuseGuideSteps[fuseGuideIndex]||fuseGuideSteps[0];
  const total=fuseGuideSteps.length;
  const completed=fuseGuideDone.size;
  const checklist=fuseGuideSteps.map((item,index)=>
    '<button type="button" class="'+(fuseGuideDone.has(index)?'done':'')+'" data-fuse-sheet-check="'+index+'">'+
      '<i>'+(fuseGuideDone.has(index)?'✓':index+1)+'</i><b>'+item.title+'</b>'+ 
    '</button>'
  ).join('');
  return '<div class="fuseSheetStep"><span>Current Step</span><b>'+step.text+'</b></div>'+ 
    '<div class="fuseSheetProgress">'+
      '<div class="fuseSheetProgressTop"><span>'+completed+' of '+total+' complete</span><span>'+step.next+'</span></div>'+ 
      '<div class="progressBar"><div style="height:100%;width:'+((completed/total)*100)+'%;background:linear-gradient(90deg,#58cfff,#8ef0ff);border-radius:999px"></div></div>'+ 
    '</div>'+ 
    '<div class="fuseSheetSectionTitle"><span>Checklist</span></div>'+ 
    '<div class="fuseSheetChecklist">'+checklist+'</div>'+ 
    '<div class="fuseSheetActions">'+
      '<button id="globalFusePrev" class="fuseArrow" type="button" aria-label="Previous step" '+(fuseGuideIndex===0?'disabled':'')+'>‹</button>'+ 
      '<button id="globalFuseMark" class="primary" type="button">'+(fuseGuideDone.has(fuseGuideIndex)?'Completed ✓':'Mark Step Done')+'</button>'+ 
      '<button id="globalFuseNext" class="fuseArrow" type="button" aria-label="Next step" '+(fuseGuideIndex===total-1?'disabled':'')+'>›</button>'+ 
    '</div>';
}

function bindFuseGuideSheet(){
  globalFloatContent.querySelectorAll("[data-fuse-sheet-check]").forEach(btn=>{
    btn.addEventListener("click",()=>{
      toggleFuseGuideStep(Number(btn.dataset.fuseSheetCheck));
      openFuseGuideInfo();
    });
  });
  document.getElementById("globalFusePrev")?.addEventListener("click",()=>{
    stepFuseGuide(-1);
    openFuseGuideInfo();
  });
  document.getElementById("globalFuseNext")?.addEventListener("click",()=>{
    stepFuseGuide(1);
    openFuseGuideInfo();
  });
  document.getElementById("globalFuseMark")?.addEventListener("click",()=>{
    toggleFuseGuideStep(fuseGuideIndex);
    openFuseGuideInfo();
  });
}

function openFuseGuideInfo(){
  const step=fuseGuideSteps[fuseGuideIndex]||fuseGuideSteps[0];
  openGlobalFloatSheet(
    step.title,
    (fuseGuideIndex+1)+" of "+fuseGuideSteps.length+" • "+fuseGuideDone.size+" complete",
    fuseGuideSheetHtml(),
    "FUSE BOX GUIDE"
  );
  bindFuseGuideSheet();
}

function openFuseMaintenanceInfo(){
  openGlobalFloatSheet(
    "Fuse Box Maintenance",
    "Overview and starter checklist",
    '<div class="fuseMaintenanceGrid">'+
      '<div class="globalInfoCard"><span>What to log</span><b>Blown fuse events, circuit name, amperage, relay swaps, corrosion, moisture, and repeated electrical faults.</b></div>'+ 
      '<div class="globalInfoCard"><span>Inspection checklist</span><b>Cover and latches, readable legend, moisture, corrosion, heat damage, loose parts, and correct fuse ratings.</b></div>'+ 
      '<div class="globalInfoCard"><span>Main rule</span><b>Replace only with the same amperage and fuse style. Repeated failure means the circuit needs diagnosis.</b></div>'+ 
      '<div class="globalInfoCard"><span>Next upgrade</span><b>Add a dedicated life log with date, mileage, circuit, amperage, part, cost, and notes.</b></div>'+ 
    '</div>',
    "FUSE BOX"
  );
}

function openMaintenanceSetup(type){
  const isCoolant=type==="coolant";
  const card=document.querySelector(isCoolant?"#coolantmaintenance > .currentSetup":"#maintenance > .currentSetup");
  const form=document.getElementById(isCoolant?"coolantSetupForm":"setupForm");
  openGlobalMovedSheet(
    isCoolant?"Current Coolant Setup":"Current Airbox Setup",
    "View the current setup or tap Edit to change it.",
    [card,form],
    {
      eyebrow:"MAINTENANCE",
      cleanup:()=>form?.classList.add("hidden")
    }
  );
}

function openMaintenanceAdd(type){
  const isCoolant=type==="coolant";
  const trigger=document.getElementById(isCoolant?"coolantAddLog":"addLog");
  trigger?.click();
  const form=document.getElementById(isCoolant?"coolantLogForm":"logForm");
  openGlobalMovedSheet(
    isCoolant?"Add Coolant Event":"Add Airbox Event",
    "The form stays inside this floating panel.",
    [form],
    {
      eyebrow:"MAINTENANCE",
      cleanup:()=>form?.classList.add("hidden")
    }
  );
}

function openMaintenanceFlush(){
  openCoolantFlushLogForm();
  const form=document.getElementById("coolantLogForm");
  openGlobalMovedSheet(
    "Log Coolant Flush",
    "Record fluid, mileage, cost, refill, bleeding, temperature behavior, and leak checks.",
    [form],
    {
      eyebrow:"COOLANT MAINTENANCE",
      cleanup:()=>form?.classList.add("hidden")
    }
  );
}

function openMaintenanceHistory(type){
  const isCoolant=type==="coolant";
  if(isCoolant)renderCoolantLogs();else renderLogs();
  const screen=document.getElementById(isCoolant?"coolantmaintenance":"maintenance");
  const header=screen.querySelector(":scope > .timelineHeader");
  const list=document.getElementById(isCoolant?"coolantLogList":"logList");
  openGlobalMovedSheet(
    isCoolant?"Coolant History":"Airbox History",
    "Saved life-story events.",
    [header,list],
    {eyebrow:"MAINTENANCE"}
  );
}

document.getElementById("setupForm")?.addEventListener("submit",()=>setTimeout(closeGlobalFloatSheet,0));
document.getElementById("logForm")?.addEventListener("submit",()=>setTimeout(closeGlobalFloatSheet,0));
document.getElementById("coolantSetupForm")?.addEventListener("submit",()=>setTimeout(closeGlobalFloatSheet,0));
document.getElementById("coolantLogForm")?.addEventListener("submit",()=>setTimeout(closeGlobalFloatSheet,0));

document.getElementById("cancelSetupBtn")?.addEventListener("click",closeGlobalFloatSheet);
document.getElementById("cancelLogBtn")?.addEventListener("click",closeGlobalFloatSheet);
document.getElementById("coolantCancelSetupBtn")?.addEventListener("click",closeGlobalFloatSheet);
document.getElementById("coolantCancelLogBtn")?.addEventListener("click",closeGlobalFloatSheet);


window.addEventListener("resize",()=>{
  if(current==="fuseguide"){
    renderFuseClipLocations(fuseGuideSteps[fuseGuideIndex]||fuseGuideSteps[0]);
  }
});



// v6.21 Garage + VIN + Digital Twin foundation
const VEHICLE_STORAGE_KEY="mycar_vehicles_v1";
const ACTIVE_VEHICLE_KEY="mycar_active_vehicle_v1";
const GARAGE_INITIALIZED_KEY="mycar_garage_initialized_v1";
const MODEL_RESOLUTION_CACHE_KEY="mycar_model_resolution_cache_v3";
const ASSET_NETWORK_CHECK_KEY="mycar_asset_network_checks_v1";
const DEFAULT_BUICK_ID="buick-2010-lacrosse";
const DEFAULT_BUICK={
  id:DEFAULT_BUICK_ID,
  nickname:"My Buick",
  year:"2010",
  make:"Buick",
  model:"LaCrosse",
  trim:"CXL",
  engine:"3.0L LF1 V6",
  drivetrain:"FWD",
  bodyClass:"4-door sedan",
  color:"Silver",
  mileage:121842,
  vin:"",
  vinMasked:"1G4GC5••••F121797",
  vinLinked:false,
  manufactured:"08/2009",
  gvwr:"5,075 lb",
  frontGawr:"2,579 lb",
  rearGawr:"2,496 lb",
  modelDimensions:{units:"in",length:196.9,width:73.1,height:59.2,wheelbase:111.7,frontTrack:61.7,rearTrack:62.0},
  modelDimensionAccuracy:"catalog-exact",
  modelDimensionSource:"Published 2010 Buick LaCrosse specifications",
  modelPackageId:"mycar.gm.buick.lacrosse.2010-2013",
  modelPackageVersion:"1.0.0",
  modelPackageTier:"generation",
  modelPackageChannel:"stable",
  modelPackageDelivery:"procedural",
  modelPackageSource:"mycar-verified",
  modelPackageSourceLabel:"MY CAR verified generation package",
  modelPackageFeatures:["VIN generation matching","catalog-correct exterior scale","movable panels","working lights and steering","automatic future upgrade channel"],
  modelPackageInstalledAt:"2026-07-13T00:00:00.000Z",
  moduleSet:"buick-v1",
  representativeImage:"images/vehicles/2010_buick_lacrosse_cxl_front_left.jpg",
  representativeImageType:"representative",
  representativeImageTitle:"2010 Buick LaCrosse CXL",
  representativeImageCredit:"SsmIntrigue / Wikimedia Commons",
  representativeImageLicense:"CC BY-SA 4.0",
  representativeImageSourcePage:"https://commons.wikimedia.org/wiki/File:2010_Buick_LaCrosse_CXL,_Front_Left,_10-02-2020.jpg",
  createdAt:"2026-07-10T00:00:00.000Z"
};

function escapeHtml(value){
  return String(value??"").replace(/[&<>'"]/g,char=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"}[char]));
}
function getVehicles(){
  try{
    const parsed=JSON.parse(localStorage.getItem(VEHICLE_STORAGE_KEY)||"[]");
    return Array.isArray(parsed)?parsed:[];
  }catch{return []}
}
function saveVehicles(vehicles){localStorage.setItem(VEHICLE_STORAGE_KEY,JSON.stringify(vehicles))}
function ensureGarageSeed(){
  const vehicles=getVehicles();
  const initialized=localStorage.getItem(GARAGE_INITIALIZED_KEY)==="1";
  if(!vehicles.length&&!initialized){
    saveVehicles([DEFAULT_BUICK]);
    localStorage.setItem(ACTIVE_VEHICLE_KEY,DEFAULT_BUICK_ID);
    localStorage.setItem(GARAGE_INITIALIZED_KEY,"1");
    return;
  }
  if(vehicles.length){
    localStorage.setItem(GARAGE_INITIALIZED_KEY,"1");
    const migrated=vehicles.map(migrateVehicleImage);
    if(JSON.stringify(migrated)!==JSON.stringify(vehicles))saveVehicles(migrated);
    if(!localStorage.getItem(ACTIVE_VEHICLE_KEY)||!migrated.some(vehicle=>vehicle.id===localStorage.getItem(ACTIVE_VEHICLE_KEY)))localStorage.setItem(ACTIVE_VEHICLE_KEY,migrated[0].id);
  }
}
function getActiveVehicle(){
  const vehicles=getVehicles();
  const id=localStorage.getItem(ACTIVE_VEHICLE_KEY);
  return vehicles.find(vehicle=>vehicle.id===id)||vehicles[0]||null;
}
function setActiveVehicle(id){
  if(id&&getVehicles().some(vehicle=>vehicle.id===id))localStorage.setItem(ACTIVE_VEHICLE_KEY,id);else if(!id)localStorage.removeItem(ACTIVE_VEHICLE_KEY);
}
function upsertVehicle(vehicle){
  const vehicles=getVehicles();
  const index=vehicles.findIndex(item=>item.id===vehicle.id);
  if(index>=0)vehicles[index]=vehicle;else vehicles.unshift(vehicle);
  saveVehicles(vehicles);
  localStorage.setItem(GARAGE_INITIALIZED_KEY,"1");
  setActiveVehicle(vehicle.id);
  return vehicle;
}
function maskVin(vin,fallback="VIN not linked"){
  const clean=String(vin||"").toUpperCase().replace(/[^A-HJ-NPR-Z0-9]/g,"");
  if(clean.length!==17)return fallback;
  return clean.slice(0,6)+"••••"+clean.slice(10);
}
function formatVehicleName(vehicle){
  return [vehicle.year,vehicle.make,vehicle.model,vehicle.trim].filter(Boolean).join(" ");
}
function cleanNumber(value){const digits=String(value||"").replace(/[^0-9]/g,"");return digits?Number(digits):null}

const VEHICLE_IMAGE_CACHE_KEY="mycar_vehicle_image_cache_v1";
const BUILTIN_BUICK_IMAGE={
  src:"images/vehicles/2010_buick_lacrosse_cxl_front_left.jpg",
  type:"representative",
  title:"2010 Buick LaCrosse CXL",
  credit:"SsmIntrigue / Wikimedia Commons",
  license:"CC BY-SA 4.0",
  sourcePage:"https://commons.wikimedia.org/wiki/File:2010_Buick_LaCrosse_CXL,_Front_Left,_10-02-2020.jpg",
  provider:"Wikimedia Commons"
};
let vehicleImageObjectUrls={garage:[],profile:[],home:[],twin:[]};
let vinPendingImage=null;
let vinSelectedMainPhotoFile=null;
let vinSelectedMainPhotoUrl=null;

function normalizedVehicleKey(data){
  return [data?.year,data?.make,data?.model,data?.trim].filter(Boolean).join(" ").toLowerCase().replace(/[^a-z0-9]+/g," ").trim();
}
function is2010BuickLacrosse(data){
  const key=normalizedVehicleKey(data);
  return key.includes("2010")&&key.includes("buick")&&key.includes("lacrosse");
}
function stripMarkup(value){
  const div=document.createElement("div");div.innerHTML=String(value||"");return (div.textContent||"").trim();
}
function readVehicleImageCache(){try{return JSON.parse(localStorage.getItem(VEHICLE_IMAGE_CACHE_KEY)||"{}")||{}}catch{return {}}}
function saveVehicleImageCache(cache){try{localStorage.setItem(VEHICLE_IMAGE_CACHE_KEY,JSON.stringify(cache))}catch{}}
function migrateVehicleImage(vehicle){
  let next=vehicle;
  if(is2010BuickLacrosse(next)&&!next.representativeImage){
    next={...next,representativeImage:BUILTIN_BUICK_IMAGE.src,representativeImageType:"representative",representativeImageTitle:BUILTIN_BUICK_IMAGE.title,representativeImageCredit:BUILTIN_BUICK_IMAGE.credit,representativeImageLicense:BUILTIN_BUICK_IMAGE.license,representativeImageSourcePage:BUILTIN_BUICK_IMAGE.sourcePage};
  }
  if(is2010BuickLacrosse(next)&&!next.modelDimensions){
    next={...next,modelDimensions:{units:"in",length:196.9,width:73.1,height:59.2,wheelbase:111.7,frontTrack:61.7,rearTrack:62.0},modelDimensionAccuracy:"catalog-exact",modelDimensionLabel:"2010 Buick LaCrosse catalog dimensions",modelDimensionSource:"Published 2010 Buick LaCrosse specifications",modelDimensionConfidence:1,modelDimensionRegistryKey:"exact|2010|buick|lacrosse"};
  }
  if(is2010BuickLacrosse(next)&&!next.modelPackageId){
    next={...next,modelPackageId:"mycar.gm.buick.lacrosse.2010-2013",modelPackageVersion:"1.0.0",modelPackageTier:"generation",modelPackageChannel:"stable",modelPackageDelivery:"procedural",modelPackageSource:"mycar-verified",modelPackageSourceLabel:"MY CAR verified generation package",modelPackageFeatures:["VIN generation matching","catalog-correct exterior scale","movable panels","working lights and steering","automatic future upgrade channel"],modelPackageInstalledAt:new Date().toISOString()};
  }
  return next;
}
async function findRepresentativeVehicleImage(data,{force=false}={}){
  if(is2010BuickLacrosse(data))return {...BUILTIN_BUICK_IMAGE};
  const key=normalizedVehicleKey(data);if(!key)return null;
  const cache=readVehicleImageCache();if(!force&&cache[key])return cache[key];
  const year=String(data.year||"").trim();const make=String(data.make||"").trim();const model=String(data.model||"").trim();const trim=String(data.trim||"").trim();const color=String(data.color||"").trim();
  if(!make||!model)return null;
  const search=[year,make,model,trim,color,"front side automobile"].filter(Boolean).join(" ");
  const params=new URLSearchParams({action:"query",format:"json",origin:"*",generator:"search",gsrsearch:search,gsrnamespace:"6",gsrlimit:"12",prop:"imageinfo",iiprop:"url|extmetadata",iiurlwidth:"1280"});
  const response=await fetch("https://commons.wikimedia.org/w/api.php?"+params.toString(),{headers:{Accept:"application/json"}});
  if(!response.ok)throw new Error("Vehicle image search unavailable ("+response.status+")");
  const json=await response.json();const pages=Object.values(json?.query?.pages||{});
  const required=[make,model].join(" ").toLowerCase().split(/\s+/).filter(Boolean);
  const avoid=["rear","interior","engine","dashboard","diagram","logo","wheel","wreck","police"];
  const scored=pages.map(page=>{
    const info=page.imageinfo?.[0];const title=String(page.title||"").replace(/^File:/i,"");const lower=title.toLowerCase();let score=0;
    if(year&&lower.includes(year.toLowerCase()))score+=5;
    required.forEach(token=>{if(lower.includes(token))score+=4});
    if(trim&&lower.includes(trim.toLowerCase()))score+=2;
    if(color&&lower.includes(color.toLowerCase()))score+=1;
    if(/front|side|left|right/.test(lower))score+=2;
    avoid.forEach(token=>{if(lower.includes(token))score-=4});
    return {page,info,title,score};
  }).filter(item=>item.info&&(item.info.thumburl||item.info.url)).sort((a,b)=>b.score-a.score);
  const best=scored[0];if(!best||best.score<6)return null;
  const meta=best.info.extmetadata||{};
  const result={src:best.info.thumburl||best.info.url,type:"representative",title:best.title.replace(/\.[^.]+$/,"").replace(/_/g," "),credit:stripMarkup(meta.Artist?.value||meta.Credit?.value||"Wikimedia Commons contributor"),license:stripMarkup(meta.LicenseShortName?.value||"Wikimedia Commons license"),sourcePage:best.info.descriptionurl||("https://commons.wikimedia.org/wiki/"+encodeURIComponent(best.page.title)),provider:"Wikimedia Commons"};
  cache[key]=result;saveVehicleImageCache(cache);return result;
}
function revokeVehicleImageUrls(context){(vehicleImageObjectUrls[context]||[]).forEach(url=>URL.revokeObjectURL(url));vehicleImageObjectUrls[context]=[]}
async function vehicleImagePresentation(vehicle,context){
  if(vehicle.coverPhotoId){
    try{const record=await getPhotoRecord(vehicle.coverPhotoId);if(record?.blob){const src=URL.createObjectURL(record.blob);vehicleImageObjectUrls[context].push(src);return {src,type:"owner",label:"YOUR PHOTO",title:"Your actual vehicle photo",credit:"Stored on this device",sourcePage:""}}}catch{}
  }
  if(vehicle.representativeImage)return {src:vehicle.representativeImage,type:"representative",label:"VIN MATCH",title:vehicle.representativeImageTitle||formatVehicleName(vehicle),credit:[vehicle.representativeImageCredit,vehicle.representativeImageLicense].filter(Boolean).join(" • ")||"Representative image",sourcePage:vehicle.representativeImageSourcePage||""};
  return {src:"images/home/home_garage.png",type:"fallback",label:"DEFAULT TWIN",title:formatVehicleName(vehicle),credit:"Built-in digital twin ready. Adding your own photo is optional.",sourcePage:""};
}
function applyImageElement(img,presentation){if(!img)return;img.classList.add("vehicleImageLoading");img.onload=()=>img.classList.remove("vehicleImageLoading");img.onerror=()=>{img.classList.remove("vehicleImageLoading");img.src="images/home/home_garage.png"};img.src=presentation.src}

async function deleteVehicleAndLocalData(vehicleId){
  const vehicle=getVehicles().find(item=>item.id===vehicleId);if(!vehicle)return;
  const photos=await getPhotos(vehicleId).catch(()=>[]);for(const photo of photos)await deletePhotoRecord(photo.id).catch(()=>{});
  const remaining=getVehicles().filter(item=>item.id!==vehicleId);saveVehicles(remaining);localStorage.setItem(GARAGE_INITIALIZED_KEY,"1");
  if(remaining.length)setActiveVehicle(remaining[0].id);else setActiveVehicle(null);
  if(window.MYCAR_ACTIVE_VEHICLE_3D?.id===vehicleId)window.MYCAR_ACTIVE_VEHICLE_3D=remaining[0]?sanitizeVehicleFor3D(remaining[0]):null;
}
async function openDeleteVehicleSheet(vehicleId){
  const vehicle=getVehicles().find(item=>item.id===vehicleId);if(!vehicle)return;const photos=await getPhotos(vehicleId).catch(()=>[]);
  openGlobalFloatSheet("Delete Vehicle","Remove this vehicle from the local Garage.",
    '<div class="deleteVehicleWarning"><span>PERMANENT ON THIS DEVICE</span><b>'+escapeHtml(formatVehicleName(vehicle))+'</b><small>This removes the vehicle profile and '+photos.length+' locally stored photo'+(photos.length===1?'':'s')+'. The public app files are not affected.</small></div><div class="globalSheetActions"><button id="deleteVehicleCancel" class="ghost" type="button">Cancel</button><button id="deleteVehicleConfirm" class="deleteDanger" type="button">Delete Vehicle</button></div>',"GARAGE");
  document.getElementById("deleteVehicleCancel")?.addEventListener("click",closeGlobalFloatSheet);
  document.getElementById("deleteVehicleConfirm")?.addEventListener("click",async()=>{const button=document.getElementById("deleteVehicleConfirm");button.disabled=true;button.textContent="Deleting…";await deleteVehicleAndLocalData(vehicleId);closeGlobalFloatSheet();await renderGarage();const next=getActiveVehicle();if(next){showScreen("garage")}else{showScreen("garage")}});
}
async function renderGarage(){
  const vehicles=getVehicles().map(migrateVehicleImage);document.getElementById("garageVehicleCount").textContent=vehicles.length;
  const list=document.getElementById("garageVehicleList");if(!list)return;revokeVehicleImageUrls("garage");const activeVehicle=getActiveVehicle();
  if(!vehicles.length){list.innerHTML='<div class="garageEmptyState"><span>＋</span><h3>No vehicles yet</h3><p>Scan or enter a VIN. The app will decode the vehicle and create the closest available 3D twin automatically.</p><button id="garageEmptyAdd" type="button">Add a Vehicle</button></div>';document.getElementById("garageEmptyAdd")?.addEventListener("click",()=>startVinSetup());const count=document.getElementById("garagePhotoCount");if(count)count.textContent="0";return}
  const rows=await Promise.all(vehicles.map(async vehicle=>({vehicle,presentation:await vehicleImagePresentation(vehicle,"garage")})));
  list.innerHTML=rows.map(({vehicle,presentation})=>{const active=vehicle.id===activeVehicle?.id;const accuracy=vehicle.modelAccuracy||vehicle.modelMatchType||"automatic";return '<article class="garageVehicleCard" data-vehicle-card="'+escapeHtml(vehicle.id)+'"><div class="garageVehicleImage"><img src="'+escapeHtml(presentation.src)+'" alt="'+escapeHtml(formatVehicleName(vehicle))+'"><span class="garageVehicleBadge">'+(active?'ACTIVE VEHICLE':escapeHtml(String(accuracy).toUpperCase()))+'</span><span class="garageVehicleSource">'+escapeHtml(presentation.label)+'</span><div class="garageVehicleCopy"><span>'+escapeHtml(vehicle.nickname||"My Vehicle")+'</span><h3>'+escapeHtml(formatVehicleName(vehicle))+'</h3><p>'+escapeHtml([vehicle.engine,vehicle.drivetrain,vehicle.color].filter(Boolean).join(" • "))+'</p></div></div><div class="garageVehicleActions"><button class="primary" type="button" data-vehicle-open="'+escapeHtml(vehicle.id)+'">Open Vehicle</button><button type="button" data-vehicle-twin="'+escapeHtml(vehicle.id)+'">Digital Twin</button><button type="button" data-vehicle-profile="'+escapeHtml(vehicle.id)+'">Profile</button><button class="deleteVehicleBtn" type="button" data-vehicle-delete="'+escapeHtml(vehicle.id)+'" aria-label="Delete vehicle">⌫</button></div></article>'}).join("");
  list.querySelectorAll("[data-vehicle-open]").forEach(btn=>btn.addEventListener("click",()=>{setActiveVehicle(btn.dataset.vehicleOpen);showScreen("digitaltwin")}));
  list.querySelectorAll("[data-vehicle-twin]").forEach(btn=>btn.addEventListener("click",()=>{setActiveVehicle(btn.dataset.vehicleTwin);showScreen("digitaltwin")}));
  list.querySelectorAll("[data-vehicle-profile]").forEach(btn=>btn.addEventListener("click",()=>{setActiveVehicle(btn.dataset.vehicleProfile);showScreen("vehicleprofile")}));
  list.querySelectorAll("[data-vehicle-delete]").forEach(btn=>btn.addEventListener("click",()=>openDeleteVehicleSheet(btn.dataset.vehicleDelete)));
  const total=await countAllPhotos();const count=document.getElementById("garagePhotoCount");if(count)count.textContent=total;
}

document.getElementById("garageInlineAdd")?.addEventListener("click",()=>startVinSetup());
document.getElementById("profileAssetNetworkButton")?.addEventListener("click",()=>showScreen("assetnetwork"));
document.getElementById("twinAssetPackageCard")?.addEventListener("click",()=>showScreen("assetnetwork"));
document.getElementById("assetNetworkCheck")?.addEventListener("click",()=>checkActiveVehicleAssetNetwork({force:true}));
document.getElementById("assetNetworkInstall")?.addEventListener("click",installPendingAssetPackage);

async function renderVehicleHome(){
  const vehicle=getActiveVehicle();
  document.getElementById("homeVehicleTitle").textContent=formatVehicleName(vehicle);
  document.getElementById("homeVehicleSub").textContent=[vehicle.engine,vehicle.drivetrain,"Your digital garage"].filter(Boolean).join(" • ");
  document.getElementById("homeVehicleMileage").textContent=vehicle.mileage?Number(vehicle.mileage).toLocaleString()+" miles":"Mileage not set";
  document.getElementById("homeVinMask").textContent=vehicle.vinLinked?maskVin(vehicle.vin,vehicle.vinMasked):vehicle.vinMasked||"VIN profile ready";
  revokeVehicleImageUrls("home");const presentation=await vehicleImagePresentation(vehicle,"home");applyImageElement(document.getElementById("homeVehicleImage"),presentation);
}

async function renderVehicleProfile(){
  const vehicle=getActiveVehicle();
  const set=(id,value)=>{const el=document.getElementById(id);if(el)el.textContent=value||"TBD"};
  set("profileNickname",vehicle.nickname||"My Vehicle");
  set("profileVehicleName",formatVehicleName(vehicle));
  set("profileVehicleMeta",[vehicle.engine,vehicle.drivetrain,vehicle.color].filter(Boolean).join(" • "));
  set("profileVinMask",vehicle.vinLinked?maskVin(vehicle.vin,vehicle.vinMasked):vehicle.vinMasked||"VIN not linked");
  set("profileVinState",vehicle.vinLinked?"Full VIN stored only in this browser":"Masked profile • Full VIN not stored in app files");
  set("profileYear",vehicle.year);set("profileMake",vehicle.make);set("profileModel",vehicle.model);set("profileTrim",vehicle.trim);
  set("profileEngine",vehicle.engine);set("profileDrive",vehicle.drivetrain);set("profileBuilt",vehicle.manufactured);set("profileGvwr",vehicle.gvwr);
  const photos=await countPhotos(vehicle.id);
  const base=vehicle.moduleSet==="buick-v1"?38:18;
  const completion=Math.min(92,base+Math.min(42,photos*7)+(vehicle.vinLinked?12:0));
  set("profileCompletion",completion+"% documented");
  document.getElementById("profileProgressFill").style.width=completion+"%";
  set("profileProgressText",(vehicle.moduleSet==="buick-v1"?"Engine bay has 3 mapped components. ":"")+photos+" owner photo"+(photos===1?"":"s")+" attached to this vehicle.");
  const accuracyLabels={exact:"Exact prepared model",generation:"Generation match",approximate:"Automatic body-style foundation",universal:"Universal vehicle foundation","exact-asset":"Exact prepared model","generation-asset":"Generation match","generation-fallback":"Generation match",generic:"Automatic foundation"};
  set("profileModelAccuracy",vehicle.modelPackageId?(assetTierLabel(vehicle.modelPackageTier)+" package • v"+(vehicle.modelPackageVersion||"0.0.0")):(accuracyLabels[vehicle.modelAccuracy||vehicle.modelMatchType]||"Automatic foundation"));set("profileModelSource",vehicle.modelPackageSourceLabel||vehicle.modelSourceLabel||vehicle.modelSource||"Local model resolver");set("profileModelBadge",vehicle.modelPackageTier==="exact"?"EXACT":vehicle.modelPackageTier==="generation"?"GEN":"AUTO");
  revokeVehicleImageUrls("profile");const presentation=await vehicleImagePresentation(vehicle,"profile");applyImageElement(document.getElementById("profileHeroImage"),presentation);
  const credit=document.getElementById("profileImageCredit");if(credit){credit.textContent=presentation.type==="owner"?"Your actual car photo":presentation.credit||"Representative image";credit.classList.toggle("owner",presentation.type==="owner");if(presentation.sourcePage){credit.href=presentation.sourcePage;credit.removeAttribute("aria-disabled")}else{credit.removeAttribute("href");credit.setAttribute("aria-disabled","true")}}
}

function openProfileEditor(){
  const vehicle=getActiveVehicle();
  openGlobalFloatSheet(
    "Edit Vehicle Profile",
    "Update the details shown in your Garage.",
    '<label>Nickname<input id="profileEditNickname" value="'+escapeHtml(vehicle.nickname||"")+'"></label>'+
    '<label>Color<input id="profileEditColor" value="'+escapeHtml(vehicle.color||"")+'"></label>'+
    '<label>Mileage<input id="profileEditMileage" inputmode="numeric" value="'+escapeHtml(vehicle.mileage||"")+'"></label>'+
    '<button id="profileEditMainPhoto" class="ghost" type="button">Change Main Vehicle Photo</button>'+
    '<button id="profileDeleteVehicle" class="ghost deleteDanger" type="button">Delete Vehicle</button>'+
    '<div class="globalSheetActions"><button id="profileFinishVin" class="ghost" type="button">VIN Setup</button><button id="profileSaveEdit" class="primary" type="button">Save</button></div>',
    "VEHICLE PROFILE"
  );
  document.getElementById("profileEditMainPhoto")?.addEventListener("click",()=>{closeGlobalFloatSheet();setTimeout(openMainVehiclePhotoPicker,320)});
  document.getElementById("profileFinishVin")?.addEventListener("click",()=>{closeGlobalFloatSheet();startVinSetup(vehicle.id)});
  document.getElementById("profileDeleteVehicle")?.addEventListener("click",()=>{closeGlobalFloatSheet();setTimeout(()=>openDeleteVehicleSheet(vehicle.id),320)});
  document.getElementById("profileSaveEdit")?.addEventListener("click",()=>{
    const updated={...vehicle,nickname:document.getElementById("profileEditNickname").value.trim()||vehicle.nickname,color:document.getElementById("profileEditColor").value.trim(),mileage:cleanNumber(document.getElementById("profileEditMileage").value)};
    upsertVehicle(updated);closeGlobalFloatSheet();renderVehicleProfile();renderVehicleHome();
  });
}

// VIN onboarding
let vinOnboardStep=0;
let vinEditingVehicleId=null;
let vinPendingValue="";
let vinDecodedData=null;
let vinPhotoObjectUrl=null;
let vinPendingModelMatch=null;
let vinModelRegistryPromise=null;
let vinDimensionCatalogPromise=null;
let vinResolverConfigPromise=null;
let assetNetworkCatalogPromise=null;
let assetNetworkConfigPromise=null;
let assetNetworkPendingMatch=null;
let assetNetworkPendingVehicleId=null;
let vinScannerLibraryPromise=null;

function vinSetupDockItems(){
  const items=[{icon:"×",label:"Cancel",action:"vin-cancel"}];
  if(vinOnboardStep>0)items.push({icon:"‹",label:"Back",action:"vin-back"});
  items.push({icon:vinOnboardStep===2?"✓":"›",label:vinOnboardStep===0?"Decode VIN":vinOnboardStep===1?"Personalize":"Save Vehicle",action:"vin-next",primary:true});
  return items;
}

function startVinSetup(vehicleId=null){
  vinEditingVehicleId=vehicleId;
  vinOnboardStep=0;vinPendingValue="";vinDecodedData=null;vinPendingImage=null;vinPendingModelMatch=null;vinSelectedMainPhotoFile=null;
  if(vinSelectedMainPhotoUrl){URL.revokeObjectURL(vinSelectedMainPhotoUrl);vinSelectedMainPhotoUrl=null}
  const vehicle=vehicleId?getVehicles().find(item=>item.id===vehicleId):null;
  ["vinInput","vinModelYearInput","vinYearConfirm","vinMakeConfirm","vinModelConfirm","vinTrimConfirm","vinEngineConfirm","vinDriveConfirm","vinBodyConfirm","vinNicknameInput","vinColorInput","vinMileageInput"].forEach(id=>{const el=document.getElementById(id);if(el)el.value=""});
  if(vehicle){
    document.getElementById("vinInput").value=vehicle.vin||"";
    document.getElementById("vinModelYearInput").value=vehicle.year||"";
    document.getElementById("vinNicknameInput").value=vehicle.nickname||"";
    document.getElementById("vinColorInput").value=vehicle.color||"";
    document.getElementById("vinMileageInput").value=vehicle.mileage||"";
  }
  document.getElementById("vinDetectStatus").textContent=vehicle?.vinLinked?"VIN loaded from this browser. Review or rescan it.":"Ready for a photo or manual VIN.";
  document.getElementById("vinDetectStatus").className="vinStatus";
  document.getElementById("vinPhotoPreviewWrap").classList.add("hidden");
  document.getElementById("vinVehicleImageCard")?.classList.add("hidden");
  document.getElementById("vinMainPhotoPreview")?.classList.add("hidden");
  showScreen("vinsetup");
}

function renderVinOnboardStep(){
  const titles=["Scan or enter VIN","Match vehicle to 3D model","Finish your 3D twin"];
  const subtitles=["Photograph the VIN barcode or enter the 17 characters.","Confirm the decoded vehicle and its selected 3D package.","Save the VIN-selected model. Photos remain optional."];
  document.getElementById("vinStepBadge").textContent=(vinOnboardStep+1)+" of 3";
  document.getElementById("vinSetupTitle").textContent=titles[vinOnboardStep];
  document.getElementById("vinSetupSubtitle").textContent=subtitles[vinOnboardStep];
  document.getElementById("vinProgressFill").style.width=((vinOnboardStep+1)/3*100)+"%";
  document.querySelectorAll("[data-vin-panel]").forEach(panel=>{
    const active=Number(panel.dataset.vinPanel)===vinOnboardStep;
    panel.classList.toggle("active",active);panel.hidden=!active;
  });
  renderGlobalFloatDock("vinsetup");
}

function sanitizeVin(value){return String(value||"").toUpperCase().replace(/[^A-HJ-NPR-Z0-9]/g,"").slice(0,17)}
function vinCheckDigitValid(vin){
  if(vin.length!==17)return false;
  const map={A:1,B:2,C:3,D:4,E:5,F:6,G:7,H:8,J:1,K:2,L:3,M:4,N:5,P:7,R:9,S:2,T:3,U:4,V:5,W:6,X:7,Y:8,Z:9};
  const weights=[8,7,6,5,4,3,2,10,0,9,8,7,6,5,4,3,2];
  let sum=0;
  for(let i=0;i<17;i++){
    const char=vin[i];const value=/\d/.test(char)?Number(char):map[char];if(value==null)return false;sum+=value*weights[i];
  }
  const expected=sum%11===10?"X":String(sum%11);return vin[8]===expected;
}
function guessVinYear(vin){
  const sequence="ABCDEFGHJKLMNPRSTVWXY123456789";const index=sequence.indexOf(vin[9]);if(index<0)return "";
  const years=[];for(let year=1980+index;year<=new Date().getFullYear()+1;year+=30)years.push(year);return String(years.at(-1)||"");
}

async function decodeVinWithNhtsa(vin,year){
  const suffix=year?"&modelyear="+encodeURIComponent(year):"";
  const url="https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVinValues/"+encodeURIComponent(vin)+"?format=json"+suffix;
  const response=await fetch(url,{headers:{Accept:"application/json"}});
  if(!response.ok)throw new Error("Decoder unavailable ("+response.status+")");
  const data=await response.json();
  const row=data?.Results?.[0];if(!row)throw new Error("No decoder result returned");
  return {
    raw:row,
    year:row.ModelYear||year||guessVinYear(vin),
    make:row.Make||"",
    model:row.Model||"",
    trim:row.Trim||row.Series||"",
    engine:[row.DisplacementL?row.DisplacementL+"L":"",row.EngineModel||"",row.EngineCylinders?row.EngineCylinders+"-cyl":""].filter(Boolean).join(" "),
    drivetrain:row.DriveType||"",
    bodyClass:row.BodyClass||"",
    errorCode:row.ErrorCode||"",
    errorText:row.ErrorText||"",
    source:"NHTSA vPIC"
  };
}
function fillVinConfirm(data,existing=null){
  const value=(id,next,fallback="")=>{document.getElementById(id).value=next||fallback||""};
  value("vinYearConfirm",data?.year,existing?.year);value("vinMakeConfirm",data?.make,existing?.make);value("vinModelConfirm",data?.model,existing?.model);value("vinTrimConfirm",data?.trim,existing?.trim);
  value("vinEngineConfirm",data?.engine,existing?.engine);value("vinDriveConfirm",data?.drivetrain,existing?.drivetrain);value("vinBodyConfirm",data?.bodyClass,existing?.bodyClass);
  if(!document.getElementById("vinNicknameInput").value)document.getElementById("vinNicknameInput").value=existing?.nickname||([data?.make,data?.model].filter(Boolean).join(" ")||"My Vehicle");
}


function normalizeModelValue(value){return String(value||"").toLowerCase().replace(/[^a-z0-9]+/g," ").trim()}
async function loadVinModelRegistry(){
  if(vinModelRegistryPromise)return vinModelRegistryPromise;
  vinModelRegistryPromise=(async()=>{
    for(const path of ["model-registry.json?v=8.0","models/model-registry.json?v=8.0"]){
      try{const response=await fetch(path,{cache:"force-cache"});if(response.ok)return await response.json()}catch{}
    }
    return MYCAR_EMBEDDED_MODEL_REGISTRY;
  })();
  return vinModelRegistryPromise;
}
async function loadModelResolverConfig(){
  if(vinResolverConfigPromise)return vinResolverConfigPromise;
  vinResolverConfigPromise=(async()=>{
    for(const path of ["model-resolver-config.json?v=8.0","services/model-resolver-config.json?v=8.0"]){
      try{const response=await fetch(path,{cache:"force-cache"});if(response.ok)return await response.json()}catch{}
    }
    return MYCAR_EMBEDDED_RESOLVER_CONFIG;
  })();
  return vinResolverConfigPromise;
}
async function loadVehicleDimensionCatalog(){
  if(vinDimensionCatalogPromise)return vinDimensionCatalogPromise;
  vinDimensionCatalogPromise=(async()=>{
    try{
      const response=await fetch("vehicle-dimensions.json?v=8.0",{cache:"force-cache"});
      if(response.ok)return await response.json();
    }catch{}
    return MYCAR_EMBEDDED_DIMENSION_CATALOG;
  })();
  return vinDimensionCatalogPromise;
}
function validDimensionNumber(value){const number=Number(value);return Number.isFinite(number)&&number>0?number:null}
function normalizeDimensions(entry){
  if(!entry)return null;
  const dimensions={
    units:entry.units||"in",
    length:validDimensionNumber(entry.length),
    width:validDimensionNumber(entry.width),
    height:validDimensionNumber(entry.height),
    wheelbase:validDimensionNumber(entry.wheelbase),
    frontTrack:validDimensionNumber(entry.frontTrack),
    rearTrack:validDimensionNumber(entry.rearTrack)
  };
  if(!dimensions.length||!dimensions.width||!dimensions.height)return null;
  return dimensions;
}
async function resolveVehicleDimensions(data,modelMatch=null){
  const catalog=await loadVehicleDimensionCatalog();
  const entries=catalog?.entries||{};
  const exactKey="exact|"+[data?.year,data?.make,data?.model].map(normalizeModelValue).join("|");
  let key=exactKey,entry=entries[exactKey]||null;
  if(!entry){
    const matched=Object.entries(entries).find(([,candidate])=>registryRuleMatches(data,candidate.match));
    if(matched){key=matched[0];entry=matched[1]}
  }
  if(entry){
    return {
      key,
      dimensions:normalizeDimensions(entry),
      accuracy:entry.accuracy||"generation",
      label:entry.label||"Vehicle catalog dimensions",
      sourceLabel:entry.sourceLabel||entry.label||"Vehicle dimension catalog",
      confidence:entry.accuracy==="catalog-exact"?1:.9
    };
  }
  const template=bodyTemplateKey(data?.bodyClass);
  const templateEntry=catalog?.templates?.[template]||catalog?.templates?.universal;
  return {
    key:"template|"+template,
    dimensions:normalizeDimensions(templateEntry),
    accuracy:"estimated-template",
    label:templateEntry?.label||"Estimated vehicle dimensions",
    sourceLabel:"Automatic body-style scale estimate",
    confidence:.45
  };
}
function registryRuleMatches(data,rule={}){const year=Number(data?.year)||0,make=normalizeModelValue(data?.make),model=normalizeModelValue(data?.model),body=normalizeModelValue(data?.bodyClass);if(rule.yearFrom&&year<Number(rule.yearFrom))return false;if(rule.yearTo&&year>Number(rule.yearTo))return false;if(rule.make&&make!==normalizeModelValue(rule.make))return false;if(Array.isArray(rule.modelIncludes)&&rule.modelIncludes.length&&!rule.modelIncludes.some(token=>model.includes(normalizeModelValue(token))))return false;if(Array.isArray(rule.bodyIncludes)&&rule.bodyIncludes.length&&!rule.bodyIncludes.some(token=>body.includes(normalizeModelValue(token))))return false;return true}
function modelResolutionSignature(data){return [data?.year,data?.make,data?.model,data?.trim,data?.bodyClass,data?.engine,data?.drivetrain].map(normalizeModelValue).join("|")}
function readModelResolutionCache(){try{return JSON.parse(localStorage.getItem(MODEL_RESOLUTION_CACHE_KEY)||"{}")||{}}catch{return {}}}
function writeModelResolutionCache(cache){try{localStorage.setItem(MODEL_RESOLUTION_CACHE_KEY,JSON.stringify(cache))}catch{}}
function bodyTemplateKey(bodyClass){const body=normalizeModelValue(bodyClass);const rules=[["pickup",/pickup|truck|ute/],["suv",/sport utility|suv|crossover/],["hatchback",/hatchback|liftback/],["wagon",/wagon|estate/],["coupe",/coupe|2 door sedan/],["convertible",/convertible|cabriolet|roadster/],["van",/van|minivan|mpv|multi purpose/],["sedan",/sedan|saloon|4 door/]];return (rules.find(([,pattern])=>pattern.test(body))||["universal"])[0]}
async function loadAssetNetworkCatalog(){
  if(assetNetworkCatalogPromise)return assetNetworkCatalogPromise;
  assetNetworkCatalogPromise=(async()=>{try{const response=await fetch("asset-network-catalog.json?v=8.0",{cache:"force-cache"});if(response.ok)return await response.json()}catch{}return MYCAR_EMBEDDED_ASSET_NETWORK_CATALOG})();
  return assetNetworkCatalogPromise;
}
async function loadAssetNetworkConfig(){
  if(assetNetworkConfigPromise)return assetNetworkConfigPromise;
  assetNetworkConfigPromise=(async()=>{try{const response=await fetch("asset-network-config.json?v=8.0",{cache:"force-cache"});if(response.ok)return await response.json()}catch{}return MYCAR_EMBEDDED_ASSET_NETWORK_CONFIG})();
  return assetNetworkConfigPromise;
}
function comparePackageVersions(a,b){
  const pa=String(a||"0.0.0").split(".").map(value=>Number(value)||0),pb=String(b||"0.0.0").split(".").map(value=>Number(value)||0);
  for(let index=0;index<Math.max(pa.length,pb.length,3);index++){const left=pa[index]||0,right=pb[index]||0;if(left>right)return 1;if(left<right)return -1}return 0;
}
function normalizeAssetPackage(entry){
  if(!entry)return null;const delivery=entry.delivery||{},source=entry.source||{};
  return {packageId:entry.packageId||"",packageVersion:entry.version||"0.0.0",packageChannel:entry.channel||"stable",packageTier:entry.tier||"universal",packageLabel:entry.label||"Vehicle package",packageGeometryAccuracy:entry.geometryAccuracy||"universal",packageScaleAccuracy:entry.scaleAccuracy||"estimated-template",packageConfidence:Number(entry.confidence||0),packageDelivery:delivery.mode||"procedural",packageAssetReady:!!delivery.assetReady,packageAsset:delivery.asset||"",packageFallback:delivery.fallback||"procedural-universal-v3",packageProtected:!!delivery.protected,packageSource:source.type||"mycar-generator",packageSourceLabel:source.label||"MY CAR Asset Network",packageRightsStatus:source.rightsStatus||"",packageFeatures:Array.isArray(entry.features)?entry.features:[],packageReleaseNotes:Array.isArray(entry.releaseNotes)?entry.releaseNotes:[],packageUpdatedAt:entry.updatedAt||"",packageEntry:entry};
}
async function resolveAssetPackageRemote(data,config){
  if(!config?.enabled||!config?.endpoint)return null;const controller=new AbortController(),timeout=setTimeout(()=>controller.abort(),Number(config.timeoutMs)||4500);
  try{const response=await fetch(config.endpoint,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({year:data?.year||"",make:data?.make||"",model:data?.model||"",trim:data?.trim||"",bodyClass:data?.bodyClass||"",engine:data?.engine||"",drivetrain:data?.drivetrain||"",installedPackageId:data?.modelPackageId||"",installedPackageVersion:data?.modelPackageVersion||""}),signal:controller.signal});if(!response.ok)throw new Error("Asset broker "+response.status);return normalizeAssetPackage(await response.json())}finally{clearTimeout(timeout)}
}
async function resolveAssetPackage(data,modelResult=null){
  const [catalog,config]=await Promise.all([loadAssetNetworkCatalog(),loadAssetNetworkConfig()]);
  try{const remote=await resolveAssetPackageRemote(data,config);if(remote)return remote}catch(error){console.warn("Asset Network broker unavailable; using bundled catalog.",error)}
  const packages=Object.values(catalog?.packages||{});let entry=null;
  entry=packages.find(item=>item.tier==="exact"&&registryRuleMatches(data,item.match));
  if(!entry)entry=packages.find(item=>item.tier==="generation"&&registryRuleMatches(data,item.match));
  if(!entry){const template=bodyTemplateKey(data?.bodyClass);entry=packages.find(item=>item.packageId==="mycar.template."+template)}
  if(!entry)entry=packages.find(item=>item.tier==="universal")||null;
  return normalizeAssetPackage(entry);
}
function applyAssetPackageToModelResult(result,assetPackage){
  if(!result||!assetPackage)return result;
  Object.assign(result,assetPackage);
  if(assetPackage.packageAssetReady&&assetPackage.packageAsset){result.assetReady=true;result.asset=assetPackage.packageAsset;result.source="asset-network";result.sourceLabel=assetPackage.packageSourceLabel;result.accuracy=assetPackage.packageGeometryAccuracy||result.accuracy;result.matchType=result.accuracy}
  if(assetPackage.packageFallback)result.fallback=assetPackage.packageFallback;
  return result;
}
function applyResolvedPackageToVehicle(vehicle,match,{installedAt=true}={}){
  if(!vehicle||!match)return vehicle;
  return {...vehicle,modelRegistryKey:match.key||vehicle.modelRegistryKey,modelMatchType:match.matchType||vehicle.modelMatchType,modelLabel:match.label||vehicle.modelLabel,modelAssetReady:!!match.assetReady,modelAsset:match.asset||vehicle.modelAsset||"",modelFallback:match.fallback||vehicle.modelFallback,modelAccuracy:match.accuracy||vehicle.modelAccuracy,modelSource:match.source||vehicle.modelSource,modelSourceLabel:match.sourceLabel||vehicle.modelSourceLabel,modelConfidence:Number(match.confidence||vehicle.modelConfidence||0),modelFamilyKey:match.familyKey||vehicle.modelFamilyKey||"",modelPartNodes:match.partNodes||vehicle.modelPartNodes||null,modelHinges:match.hinges||vehicle.modelHinges||null,modelDimensions:match.dimensions||vehicle.modelDimensions||null,modelDimensionAccuracy:match.dimensionAccuracy||vehicle.modelDimensionAccuracy||"",modelDimensionLabel:match.dimensionLabel||vehicle.modelDimensionLabel||"",modelDimensionSource:match.dimensionSourceLabel||vehicle.modelDimensionSource||"",modelDimensionConfidence:Number(match.dimensionConfidence||vehicle.modelDimensionConfidence||0),modelDimensionRegistryKey:match.dimensionRegistryKey||vehicle.modelDimensionRegistryKey||"",modelPackageId:match.packageId||vehicle.modelPackageId||"",modelPackageVersion:match.packageVersion||vehicle.modelPackageVersion||"",modelPackageTier:match.packageTier||vehicle.modelPackageTier||"",modelPackageChannel:match.packageChannel||vehicle.modelPackageChannel||"stable",modelPackageDelivery:match.packageDelivery||vehicle.modelPackageDelivery||"procedural",modelPackageSource:match.packageSource||vehicle.modelPackageSource||"",modelPackageSourceLabel:match.packageSourceLabel||vehicle.modelPackageSourceLabel||"",modelPackageRightsStatus:match.packageRightsStatus||vehicle.modelPackageRightsStatus||"",modelPackageFeatures:match.packageFeatures||vehicle.modelPackageFeatures||[],modelPackageReleaseNotes:match.packageReleaseNotes||vehicle.modelPackageReleaseNotes||[],modelPackageInstalledAt:installedAt?new Date().toISOString():(vehicle.modelPackageInstalledAt||""),modelPackageCheckedAt:new Date().toISOString(),updatedAt:new Date().toISOString()};
}
async function ensureVehicleAssetPackage(vehicle){
  if(!vehicle)return null;if(vehicle.modelPackageId)return vehicle;
  const match=await resolveVin3DModel(vehicle).catch(()=>null);if(!match)return vehicle;
  const updated=applyResolvedPackageToVehicle(vehicle,match);upsertVehicle(updated);return updated;
}
function normalizeResolverResult(result,data){if(!result)return null;const accuracy=result.accuracy||result.matchType||"approximate";return {key:result.key||result.modelRegistryKey||"template|"+bodyTemplateKey(data?.bodyClass),entry:result.entry||{},matchType:accuracy,accuracy,label:result.label||[data?.year,data?.make,data?.model].filter(Boolean).join(" ")+" 3D twin",assetReady:!!result.assetReady,asset:result.asset||"",fallback:result.fallback||"procedural-"+bodyTemplateKey(data?.bodyClass)+"-v2",source:result.source||"remote-resolver",sourceLabel:result.sourceLabel||"Worldwide model resolver",confidence:Number(result.confidence||0),partNodes:result.partNodes||null,hinges:result.hinges||null,familyKey:result.familyKey||"",dimensions:normalizeDimensions(result.dimensions),dimensionAccuracy:result.dimensionAccuracy||"",dimensionSourceLabel:result.dimensionSourceLabel||""}}
async function resolveWithRemoteService(data,config){if(!config?.enabled||!config?.endpoint)return null;const controller=new AbortController(),timeout=setTimeout(()=>controller.abort(),Number(config.timeoutMs)||3500);try{const payload={year:data?.year||"",make:data?.make||"",model:data?.model||"",trim:data?.trim||"",bodyClass:data?.bodyClass||"",engine:data?.engine||"",drivetrain:data?.drivetrain||""};const response=await fetch(config.endpoint,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(payload),signal:controller.signal});if(!response.ok)throw new Error("Resolver "+response.status);return normalizeResolverResult(await response.json(),data)}finally{clearTimeout(timeout)}}
async function resolveVin3DModel(data,{force=false}={}){
  const signature=modelResolutionSignature(data),cache=readModelResolutionCache(),cached=cache[signature];if(!force&&cached&&Date.now()-cached.savedAt<7*24*60*60*1000)return cached.result;if(force&&cache[signature])delete cache[signature];
  const [registry,config]=await Promise.all([loadVinModelRegistry(),loadModelResolverConfig()]);
  try{const remote=await resolveWithRemoteService(data,config);if(remote){if(!remote.dimensions){const dimensionMatch=await resolveVehicleDimensions(data,remote);remote.dimensions=dimensionMatch?.dimensions||null;remote.dimensionAccuracy=dimensionMatch?.accuracy||"";remote.dimensionLabel=dimensionMatch?.label||"";remote.dimensionSourceLabel=dimensionMatch?.sourceLabel||"";remote.dimensionConfidence=dimensionMatch?.confidence||0;remote.dimensionRegistryKey=dimensionMatch?.key||""}applyAssetPackageToModelResult(remote,await resolveAssetPackage(data,remote));cache[signature]={savedAt:Date.now(),result:remote};writeModelResolutionCache(cache);return remote}}catch(error){console.warn("Remote model resolver unavailable; using local fallback.",error)}
  const models=registry?.models||{},exactKey=[data?.year,data?.make,data?.model].map(normalizeModelValue).join("|");let result=null;
  const exact=models[exactKey];if(exact?.assetReady)result={key:exactKey,entry:exact,matchType:"exact",accuracy:"exact",label:exact.label||[data.year,data.make,data.model].filter(Boolean).join(" "),assetReady:true,asset:exact.asset||"",fallback:exact.fallback||registry.defaultFallback,source:"local-exact",sourceLabel:"Prepared exact model",confidence:1,partNodes:exact.partNodes||null,hinges:exact.hinges||null,familyKey:exact.familyKey||""};
  if(!result){const family=Object.entries(models).filter(([key,entry])=>entry.kind==="generation"||key.startsWith("family|")).find(([,entry])=>registryRuleMatches(data,entry.match));if(family){const [key,entry]=family;result={key,entry,matchType:"generation",accuracy:"generation",label:entry.label||[data.year,data.make,data.model].filter(Boolean).join(" "),assetReady:!!entry.assetReady,asset:entry.asset||"",fallback:entry.fallback||registry.defaultFallback,source:"local-generation",sourceLabel:"Generation model package",confidence:Number(entry.confidence||.86),partNodes:entry.partNodes||null,hinges:entry.hinges||null,familyKey:key}}}
  if(!result){const template=bodyTemplateKey(data?.bodyClass),key="template|"+template,entry=models[key]||models["template|universal"]||{};result={key,entry,matchType:template==="universal"?"universal":"approximate",accuracy:template==="universal"?"universal":"approximate",label:entry.label||("Automatic "+template+" foundation"),assetReady:!!entry.assetReady,asset:entry.asset||"",fallback:entry.fallback||("procedural-"+template+"-v2"),source:"procedural-template",sourceLabel:"Automatic body-style generator",confidence:Number(entry.confidence||.55),partNodes:entry.partNodes||null,hinges:entry.hinges||null,familyKey:key}}
  const dimensionMatch=await resolveVehicleDimensions(data,result);
  if(dimensionMatch){
    result.dimensions=dimensionMatch.dimensions;
    result.dimensionAccuracy=dimensionMatch.accuracy;
    result.dimensionLabel=dimensionMatch.label;
    result.dimensionSourceLabel=dimensionMatch.sourceLabel;
    result.dimensionConfidence=dimensionMatch.confidence;
    result.dimensionRegistryKey=dimensionMatch.key;
  }
  applyAssetPackageToModelResult(result,await resolveAssetPackage(data,result));
  cache[signature]={savedAt:Date.now(),result};writeModelResolutionCache(cache);return result;
}
function showVin3DModelMatch(match,error=""){const card=document.getElementById("vin3dModelCard"),title=document.getElementById("vin3dModelTitle"),detail=document.getElementById("vin3dModelDetail"),badge=document.getElementById("vin3dModelBadge");if(!card||!title||!detail||!badge)return;card.classList.remove("matched","exact","generic","generation","approximate");if(!match){title.textContent="Automatic vehicle foundation";detail.textContent=error||"The app will still build a universal interactive 3D vehicle.";badge.textContent="AUTO";card.classList.add("approximate");return}const accuracy=match.accuracy||match.matchType;if(accuracy==="exact")card.classList.add("exact");else if(accuracy==="generation")card.classList.add("generation");else card.classList.add("approximate");title.textContent=match.label;badge.textContent=accuracy==="exact"?"EXACT":accuracy==="generation"?"GENERATION":accuracy==="approximate"?"AUTOMATIC":"FOUNDATION";detail.textContent=accuracy==="exact"?"A prepared exact 3D asset is ready for this decoded vehicle.":accuracy==="generation"?"Matched to the correct vehicle generation. Trim-level differences can be refined later.":accuracy==="approximate"?"No dedicated asset is required. The app generated the closest body-style foundation automatically.":"A universal interactive vehicle foundation will load now. Photos remain optional."}
async function prepareVin3DModelMatch(data){const title=document.getElementById("vin3dModelTitle"),detail=document.getElementById("vin3dModelDetail"),badge=document.getElementById("vin3dModelBadge"),card=document.getElementById("vin3dModelCard");if(card)card.classList.remove("matched","exact","generic","generation","approximate");if(title)title.textContent="Resolving the best 3D vehicle…";if(detail)detail.textContent="Checking exact, generation, body-style, and universal model tiers.";if(badge)badge.textContent="CHECKING";try{vinPendingModelMatch=await resolveVin3DModel(data);showVin3DModelMatch(vinPendingModelMatch);return vinPendingModelMatch}catch(error){vinPendingModelMatch={key:"template|universal",matchType:"universal",accuracy:"universal",label:"Universal vehicle foundation",assetReady:false,asset:"",fallback:"procedural-universal-v2",source:"procedural-template",sourceLabel:"Universal fallback",confidence:.25};showVin3DModelMatch(vinPendingModelMatch,error.message);return vinPendingModelMatch}}
function waitForVinImage(image){return image.complete&&image.naturalWidth?Promise.resolve():new Promise((resolve,reject)=>{const done=()=>{image.removeEventListener("load",done);image.removeEventListener("error",fail);resolve()};const fail=()=>{image.removeEventListener("load",done);image.removeEventListener("error",fail);reject(new Error("The VIN photo could not be read."))};image.addEventListener("load",done,{once:true});image.addEventListener("error",fail,{once:true})})}
function extractVinFromScanText(text){
  const sequences=String(text||"").toUpperCase().match(/[A-HJ-NPR-Z0-9]{17,}/g)||[];let fallback="";
  for(const sequence of sequences){for(let i=0;i<=sequence.length-17;i++){const candidate=sequence.slice(i,i+17);if(!fallback)fallback=candidate;if(vinCheckDigitValid(candidate))return candidate}}
  return fallback&&sanitizeVin(fallback).length===17?sanitizeVin(fallback):"";
}
function loadVinScannerLibrary(){
  if(window.ZXing)return Promise.resolve(window.ZXing);if(vinScannerLibraryPromise)return vinScannerLibraryPromise;
  vinScannerLibraryPromise=new Promise((resolve,reject)=>{const script=document.createElement("script");script.src="zxing.min.js?v=8.0";script.async=true;script.onload=()=>window.ZXing?resolve(window.ZXing):reject(new Error("VIN scanner library did not initialize."));script.onerror=()=>reject(new Error("VIN scanner library could not load."));document.head.appendChild(script)}).catch(error=>{vinScannerLibraryPromise=null;throw error});return vinScannerLibraryPromise;
}
async function scanVinWithNativeDetector(file){
  if(!("BarcodeDetector" in window))return "";const formats=await BarcodeDetector.getSupportedFormats();const wanted=["data_matrix","code_39","code_128","pdf417","qr_code"].filter(format=>formats.includes(format));if(!wanted.length)return "";
  const detector=new BarcodeDetector({formats:wanted});const bitmap=await createImageBitmap(file);try{const results=await detector.detect(bitmap);for(const item of results){const vin=extractVinFromScanText(item.rawValue);if(vin)return vin}}finally{bitmap.close?.()}return "";
}
async function scanVinWithZxing(image){
  const ZXing=await loadVinScannerLibrary();await waitForVinImage(image);const hints=new Map();const formats=[ZXing.BarcodeFormat.DATA_MATRIX,ZXing.BarcodeFormat.CODE_39,ZXing.BarcodeFormat.CODE_128,ZXing.BarcodeFormat.PDF_417,ZXing.BarcodeFormat.QR_CODE].filter(value=>value!==undefined);hints.set(ZXing.DecodeHintType.POSSIBLE_FORMATS,formats);hints.set(ZXing.DecodeHintType.TRY_HARDER,true);const reader=new ZXing.BrowserMultiFormatReader(hints,300);
  try{const result=await reader.decodeFromImageElement(image);return extractVinFromScanText(result?.getText?.()||result?.text||"")}finally{reader.reset?.()}
}

function currentVinConfirmData(){return {year:document.getElementById("vinYearConfirm").value.trim(),make:document.getElementById("vinMakeConfirm").value.trim(),model:document.getElementById("vinModelConfirm").value.trim(),trim:document.getElementById("vinTrimConfirm").value.trim(),color:document.getElementById("vinColorInput").value.trim()}}
function showVinImageState(state,message=""){
  const card=document.getElementById("vinVehicleImageCard");const img=document.getElementById("vinVehicleImagePreview");const placeholder=document.getElementById("vinVehicleImagePlaceholder");if(!card||!img||!placeholder)return;card.classList.remove("hidden");
  if(state==="loading"){img.removeAttribute("src");img.classList.add("hidden");placeholder.classList.remove("hidden");placeholder.querySelector("b").textContent=message||"Finding a vehicle image…";document.getElementById("vinVehicleImageTitle").textContent="Searching by decoded year, make, and model";document.getElementById("vinVehicleImageSource").textContent="The VIN itself is not sent to the image search.";return}
  if(state==="found"&&vinPendingImage){img.classList.remove("hidden");placeholder.classList.add("hidden");img.src=vinPendingImage.src;document.getElementById("vinVehicleImageTitle").textContent=vinPendingImage.title||"Representative vehicle";document.getElementById("vinVehicleImageSource").textContent=[vinPendingImage.credit,vinPendingImage.license].filter(Boolean).join(" • ")||"Representative vehicle image";return}
  img.classList.add("hidden");placeholder.classList.remove("hidden");placeholder.querySelector("b").textContent=message||"No automatic image was found";document.getElementById("vinVehicleImageTitle").textContent="You can still add your actual car photo";document.getElementById("vinVehicleImageSource").textContent="The profile will use the built-in fallback until you add a photo.";
}
async function prepareVinRepresentativeImage(data,{force=false}={}){
  showVinImageState("loading");
  try{vinPendingImage=await findRepresentativeVehicleImage(data,{force});if(vinPendingImage)showVinImageState("found");else showVinImageState("empty")}catch(error){vinPendingImage=null;showVinImageState("empty",error.message)}
}
document.getElementById("vinRefreshVehicleImage")?.addEventListener("click",()=>prepareVinRepresentativeImage(currentVinConfirmData(),{force:true}));
document.getElementById("vinMainPhotoInput")?.addEventListener("change",event=>{
  const file=event.target.files?.[0]||null;if(!file)return;vinSelectedMainPhotoFile=file;if(vinSelectedMainPhotoUrl)URL.revokeObjectURL(vinSelectedMainPhotoUrl);vinSelectedMainPhotoUrl=URL.createObjectURL(file);const wrap=document.getElementById("vinMainPhotoPreview");wrap.querySelector("img").src=vinSelectedMainPhotoUrl;wrap.classList.remove("hidden");
});
document.getElementById("vinMainPhotoRemove")?.addEventListener("click",()=>{vinSelectedMainPhotoFile=null;if(vinSelectedMainPhotoUrl){URL.revokeObjectURL(vinSelectedMainPhotoUrl);vinSelectedMainPhotoUrl=null}document.getElementById("vinMainPhotoPreview")?.classList.add("hidden");document.getElementById("vinMainPhotoInput").value=""});

async function advanceVinSetup(){
  if(vinOnboardStep===0){
    const status=document.getElementById("vinDetectStatus");
    const vin=sanitizeVin(document.getElementById("vinInput").value);document.getElementById("vinInput").value=vin;
    if(vin.length!==17){status.textContent="VIN must contain exactly 17 valid characters.";status.className="vinStatus warn";return}
    if(!vinCheckDigitValid(vin)){status.textContent="The VIN check digit does not match. Recheck the photo or typed characters.";status.className="vinStatus warn";return}
    vinPendingValue=vin;status.textContent="VIN validated. Decoding vehicle…";status.className="vinStatus good";
    const existing=vinEditingVehicleId?getVehicles().find(item=>item.id===vinEditingVehicleId):null;
    const year=document.getElementById("vinModelYearInput").value.trim()||guessVinYear(vin);
    try{
      vinDecodedData=await decodeVinWithNhtsa(vin,year);
      fillVinConfirm(vinDecodedData,existing);
      document.getElementById("vinDecodeHeadline").textContent=[vinDecodedData.year,vinDecodedData.make,vinDecodedData.model].filter(Boolean).join(" ")||"Vehicle decoded";
      document.getElementById("vinDecodeMessage").textContent=vinDecodedData.errorCode&&vinDecodedData.errorCode!=="0"?"The decoder returned partial information. Confirm the fields below.":"VIN decoded. Confirm the fields below.";
      document.getElementById("vinDecodeSource").textContent="Decoded with NHTSA vPIC. Missing fields mean the decoder did not return that value.";
    }catch(error){
      vinDecodedData={year,make:"",model:"",trim:"",engine:"",drivetrain:"",bodyClass:"",source:"Manual fallback"};
      fillVinConfirm(vinDecodedData,existing);
      document.getElementById("vinDecodeHeadline").textContent="Manual confirmation needed";
      document.getElementById("vinDecodeMessage").textContent="The online decoder could not be reached. You can still finish the profile manually.";
      document.getElementById("vinDecodeSource").textContent=error.message;
    }
    vinOnboardStep=1;renderVinOnboardStep();const confirmedData={year:document.getElementById("vinYearConfirm").value.trim(),make:document.getElementById("vinMakeConfirm").value.trim(),model:document.getElementById("vinModelConfirm").value.trim(),trim:document.getElementById("vinTrimConfirm").value.trim(),bodyClass:document.getElementById("vinBodyConfirm").value.trim()};prepareVin3DModelMatch(confirmedData);prepareVinRepresentativeImage(confirmedData);return;
  }
  if(vinOnboardStep===1){
    const required=["vinYearConfirm","vinMakeConfirm","vinModelConfirm"];
    if(required.some(id=>!document.getElementById(id).value.trim())){
      document.getElementById("vinDecodeSource").textContent="Year, make, and model are required before continuing.";return;
    }
    await prepareVin3DModelMatch({year:document.getElementById("vinYearConfirm").value.trim(),make:document.getElementById("vinMakeConfirm").value.trim(),model:document.getElementById("vinModelConfirm").value.trim(),trim:document.getElementById("vinTrimConfirm").value.trim(),bodyClass:document.getElementById("vinBodyConfirm").value.trim()});
    vinOnboardStep=2;renderVinOnboardStep();return;
  }
  await saveVinVehicle();
}

async function saveVinVehicle(){
  const existing=vinEditingVehicleId?getVehicles().find(item=>item.id===vinEditingVehicleId):null;
  const year=document.getElementById("vinYearConfirm").value.trim();const make=document.getElementById("vinMakeConfirm").value.trim();const model=document.getElementById("vinModelConfirm").value.trim();
  const isBuickProfile=existing?.moduleSet==="buick-v1"||(year==="2010"&&make.toLowerCase()==="buick"&&model.toLowerCase().includes("lacrosse"));
  const id=existing?.id||[year,make,model,Date.now()].join("-").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,"");
  if(!vinPendingModelMatch)vinPendingModelMatch=await resolveVin3DModel({year,make,model,trim:document.getElementById("vinTrimConfirm").value.trim(),bodyClass:document.getElementById("vinBodyConfirm").value.trim()}).catch(()=>({key:"generic|vehicle",matchType:"generic",label:"Generic vehicle foundation",assetReady:false,asset:"",fallback:"procedural-generic-vehicle-v1"}));
  const vehicle={
    ...(existing||{}),id,
    nickname:document.getElementById("vinNicknameInput").value.trim()||"My Vehicle",
    year,make,model,trim:document.getElementById("vinTrimConfirm").value.trim(),
    engine:document.getElementById("vinEngineConfirm").value.trim(),drivetrain:document.getElementById("vinDriveConfirm").value.trim(),bodyClass:document.getElementById("vinBodyConfirm").value.trim(),
    color:document.getElementById("vinColorInput").value.trim(),mileage:cleanNumber(document.getElementById("vinMileageInput").value),
    vin:vinPendingValue,vinMasked:maskVin(vinPendingValue),vinLinked:true,moduleSet:isBuickProfile?"buick-v1":"generic",
    manufactured:existing?.manufactured||"",gvwr:existing?.gvwr||"",frontGawr:existing?.frontGawr||"",rearGawr:existing?.rearGawr||"",createdAt:existing?.createdAt||new Date().toISOString(),updatedAt:new Date().toISOString(),
    representativeImage:vinPendingImage?.src||existing?.representativeImage||"",
    representativeImageType:vinPendingImage?"representative":existing?.representativeImageType||"",
    representativeImageTitle:vinPendingImage?.title||existing?.representativeImageTitle||"",
    representativeImageCredit:vinPendingImage?.credit||existing?.representativeImageCredit||"",
    representativeImageLicense:vinPendingImage?.license||existing?.representativeImageLicense||"",
    representativeImageSourcePage:vinPendingImage?.sourcePage||existing?.representativeImageSourcePage||"",
    coverPhotoId:existing?.coverPhotoId||"",
    modelRegistryKey:vinPendingModelMatch?.key||existing?.modelRegistryKey||"generic|vehicle",
    modelMatchType:vinPendingModelMatch?.matchType||existing?.modelMatchType||"generic",
    modelLabel:vinPendingModelMatch?.label||existing?.modelLabel||[year,make,model].filter(Boolean).join(" "),
    modelAssetReady:!!vinPendingModelMatch?.assetReady,
    modelAsset:vinPendingModelMatch?.asset||existing?.modelAsset||"",
    modelFallback:vinPendingModelMatch?.fallback||existing?.modelFallback||"procedural-universal-v2",
    modelAccuracy:vinPendingModelMatch?.accuracy||vinPendingModelMatch?.matchType||existing?.modelAccuracy||"approximate",
    modelSource:vinPendingModelMatch?.source||existing?.modelSource||"procedural-template",
    modelSourceLabel:vinPendingModelMatch?.sourceLabel||existing?.modelSourceLabel||"Automatic model resolver",
    modelConfidence:Number(vinPendingModelMatch?.confidence||existing?.modelConfidence||0),
    modelFamilyKey:vinPendingModelMatch?.familyKey||existing?.modelFamilyKey||"",
    modelPartNodes:vinPendingModelMatch?.partNodes||existing?.modelPartNodes||null,
    modelHinges:vinPendingModelMatch?.hinges||existing?.modelHinges||null,
    modelDimensions:vinPendingModelMatch?.dimensions||existing?.modelDimensions||null,
    modelDimensionAccuracy:vinPendingModelMatch?.dimensionAccuracy||existing?.modelDimensionAccuracy||"",
    modelDimensionLabel:vinPendingModelMatch?.dimensionLabel||existing?.modelDimensionLabel||"",
    modelDimensionSource:vinPendingModelMatch?.dimensionSourceLabel||existing?.modelDimensionSource||"",
    modelDimensionConfidence:Number(vinPendingModelMatch?.dimensionConfidence||existing?.modelDimensionConfidence||0),
    modelDimensionRegistryKey:vinPendingModelMatch?.dimensionRegistryKey||existing?.modelDimensionRegistryKey||"",
    modelPackageId:vinPendingModelMatch?.packageId||existing?.modelPackageId||"",
    modelPackageVersion:vinPendingModelMatch?.packageVersion||existing?.modelPackageVersion||"",
    modelPackageTier:vinPendingModelMatch?.packageTier||existing?.modelPackageTier||"",
    modelPackageChannel:vinPendingModelMatch?.packageChannel||existing?.modelPackageChannel||"stable",
    modelPackageDelivery:vinPendingModelMatch?.packageDelivery||existing?.modelPackageDelivery||"procedural",
    modelPackageSource:vinPendingModelMatch?.packageSource||existing?.modelPackageSource||"",
    modelPackageSourceLabel:vinPendingModelMatch?.packageSourceLabel||existing?.modelPackageSourceLabel||"",
    modelPackageRightsStatus:vinPendingModelMatch?.packageRightsStatus||existing?.modelPackageRightsStatus||"",
    modelPackageFeatures:vinPendingModelMatch?.packageFeatures||existing?.modelPackageFeatures||[],
    modelPackageReleaseNotes:vinPendingModelMatch?.packageReleaseNotes||existing?.modelPackageReleaseNotes||[],
    modelPackageInstalledAt:new Date().toISOString(),
    modelPackageCheckedAt:new Date().toISOString()
  };
  if(!vehicle.representativeImage){const match=await findRepresentativeVehicleImage(vehicle).catch(()=>null);if(match){vehicle.representativeImage=match.src;vehicle.representativeImageType="representative";vehicle.representativeImageTitle=match.title;vehicle.representativeImageCredit=match.credit;vehicle.representativeImageLicense=match.license;vehicle.representativeImageSourcePage=match.sourcePage}}
  upsertVehicle(vehicle);
  if(vinSelectedMainPhotoFile){vehicle.coverPhotoId=await saveMainVehiclePhoto(vehicle,vinSelectedMainPhotoFile);upsertVehicle(vehicle)}
  vinEditingVehicleId=null;vinPendingValue="";vinDecodedData=null;vinPendingImage=null;vinPendingModelMatch=null;vinSelectedMainPhotoFile=null;if(vinSelectedMainPhotoUrl){URL.revokeObjectURL(vinSelectedMainPhotoUrl);vinSelectedMainPhotoUrl=null}showScreen("digitaltwin");
}

document.getElementById("vinInput")?.addEventListener("input",event=>{event.target.value=sanitizeVin(event.target.value);if(event.target.value.length>=10&&!document.getElementById("vinModelYearInput").value)document.getElementById("vinModelYearInput").value=guessVinYear(event.target.value)});
document.getElementById("vinCameraInput")?.addEventListener("change",async event=>{
  const file=event.target.files?.[0];if(!file)return;
  if(vinPhotoObjectUrl)URL.revokeObjectURL(vinPhotoObjectUrl);vinPhotoObjectUrl=URL.createObjectURL(file);
  const preview=document.getElementById("vinPhotoPreview");preview.src=vinPhotoObjectUrl;document.getElementById("vinPhotoPreviewWrap").classList.remove("hidden");
  const status=document.getElementById("vinDetectStatus");status.textContent="Scanning the VIN barcode on this device…";status.className="vinStatus";
  try{
    let vin="";try{vin=await scanVinWithNativeDetector(file)}catch{}
    if(!vin){status.textContent="Using the enhanced VIN scanner…";vin=await scanVinWithZxing(preview)}
    if(!vin)throw new Error("No valid 17-character VIN was detected. Retake the photo straight-on with good light, or type the VIN manually.");
    document.getElementById("vinInput").value=vin;document.getElementById("vinModelYearInput").value=guessVinYear(vin);status.textContent="VIN detected and check digit verified. Review it, then tap Decode VIN.";status.className="vinStatus good";
  }catch(error){status.textContent=error.message;status.className="vinStatus warn"}
});


let vinModelRefreshTimer=null;
["vinYearConfirm","vinMakeConfirm","vinModelConfirm","vinTrimConfirm","vinBodyConfirm"].forEach(id=>document.getElementById(id)?.addEventListener("input",()=>{clearTimeout(vinModelRefreshTimer);vinModelRefreshTimer=setTimeout(()=>prepareVin3DModelMatch({year:document.getElementById("vinYearConfirm").value.trim(),make:document.getElementById("vinMakeConfirm").value.trim(),model:document.getElementById("vinModelConfirm").value.trim(),trim:document.getElementById("vinTrimConfirm").value.trim(),bodyClass:document.getElementById("vinBodyConfirm").value.trim()}),450)}));

// Owner photo database
const PHOTO_DB_NAME="mycar_owner_photos";const PHOTO_DB_VERSION=1;const PHOTO_STORE="photos";let photoDbPromise=null;let photoObjectUrls=[];let currentPhotoFilter="all";
function openPhotoDb(){
  if(photoDbPromise)return photoDbPromise;
  photoDbPromise=new Promise((resolve,reject)=>{
    if(!window.indexedDB){reject(new Error("Photo storage is not supported in this browser."));return}
    const request=indexedDB.open(PHOTO_DB_NAME,PHOTO_DB_VERSION);
    request.onupgradeneeded=()=>{const db=request.result;if(!db.objectStoreNames.contains(PHOTO_STORE)){const store=db.createObjectStore(PHOTO_STORE,{keyPath:"id"});store.createIndex("vehicleId","vehicleId",{unique:false});store.createIndex("area","area",{unique:false})}};
    request.onsuccess=()=>resolve(request.result);request.onerror=()=>reject(request.error);
  });return photoDbPromise;
}
async function addPhotoRecord(record){const db=await openPhotoDb();return new Promise((resolve,reject)=>{const tx=db.transaction(PHOTO_STORE,"readwrite");tx.objectStore(PHOTO_STORE).put(record);tx.oncomplete=()=>resolve(record);tx.onerror=()=>reject(tx.error)})}
async function getPhotos(vehicleId){const db=await openPhotoDb();return new Promise((resolve,reject)=>{const tx=db.transaction(PHOTO_STORE,"readonly");const request=tx.objectStore(PHOTO_STORE).index("vehicleId").getAll(vehicleId);request.onsuccess=()=>resolve((request.result||[]).sort((a,b)=>String(b.createdAt).localeCompare(String(a.createdAt))));request.onerror=()=>reject(request.error)})}
async function getPhotoRecord(id){if(!id)return null;const db=await openPhotoDb();return new Promise((resolve,reject)=>{const tx=db.transaction(PHOTO_STORE,"readonly");const request=tx.objectStore(PHOTO_STORE).get(id);request.onsuccess=()=>resolve(request.result||null);request.onerror=()=>reject(request.error)})}
async function deletePhotoRecord(id){const db=await openPhotoDb();return new Promise((resolve,reject)=>{const tx=db.transaction(PHOTO_STORE,"readwrite");tx.objectStore(PHOTO_STORE).delete(id);tx.oncomplete=resolve;tx.onerror=()=>reject(tx.error)})}
async function countPhotos(vehicleId){try{return (await getPhotos(vehicleId)).length}catch{return 0}}
async function countAllPhotos(){let total=0;for(const vehicle of getVehicles())total+=await countPhotos(vehicle.id);return total}
function photoAreaLabel(area){return ({engine:"Engine Bay",exterior:"Exterior",interior:"Interior",wheels:"Wheels & Brakes",trunk:"Trunk",underside:"Underside",airbox:"Airbox",coolant:"Coolant",fusebox:"Fuse Box",battery:"Battery",documents:"Receipts / Documents",other:"Other"})[area]||"Other"}
async function compressImageFile(file){
  const bitmap=await createImageBitmap(file);const max=1800;const scale=Math.min(1,max/Math.max(bitmap.width,bitmap.height));const canvas=document.createElement("canvas");canvas.width=Math.max(1,Math.round(bitmap.width*scale));canvas.height=Math.max(1,Math.round(bitmap.height*scale));canvas.getContext("2d").drawImage(bitmap,0,0,canvas.width,canvas.height);bitmap.close?.();
  return new Promise(resolve=>canvas.toBlob(blob=>resolve(blob||file),"image/jpeg",.84));
}
async function saveMainVehiclePhoto(vehicle,file){
  const blob=await compressImageFile(file);const id="cover-"+vehicle.id+"-"+Date.now();if(vehicle.coverPhotoId)await deletePhotoRecord(vehicle.coverPhotoId).catch(()=>{});await addPhotoRecord({id,vehicleId:vehicle.id,area:"exterior",role:"vehicle-cover",component:"Main vehicle photo",note:"Main Garage and vehicle-profile photo",createdAt:new Date().toISOString(),blob});return id;
}
function openMainVehiclePhotoPicker(){
  const vehicle=getActiveVehicle();
  openGlobalFloatSheet("Main Vehicle Photo","Use your real car photo everywhere, or return to the automatic VIN match.",
    '<input id="mainVehiclePhotoFile" type="file" accept="image/*" capture="environment" hidden><label class="vinScanButton" for="mainVehiclePhotoFile"><span class="vinScanIcon">＋</span><b>Take or choose my car photo</b><small>This becomes the Garage, profile, home, and Digital Twin reference image.</small></label>'+ 
    '<div id="mainVehiclePhotoPreview" class="mainPhotoPickerPreview hidden"><img alt="Selected main vehicle photo"></div>'+ 
    '<div id="mainVehiclePhotoStatus" class="vinStatus">Your current image stays until you save a replacement.</div>'+ 
    '<div class="photoCaptureActions"><button id="mainVehicleUseAuto" class="ghost" type="button">Use VIN Match</button><button id="mainVehiclePhotoSave" class="primary" type="button">Save Photo</button></div>',"VEHICLE IMAGE");
  let file=null;let url=null;
  document.getElementById("mainVehiclePhotoFile")?.addEventListener("change",event=>{file=event.target.files?.[0]||null;if(!file)return;if(url)URL.revokeObjectURL(url);url=URL.createObjectURL(file);const wrap=document.getElementById("mainVehiclePhotoPreview");wrap.querySelector("img").src=url;wrap.classList.remove("hidden");document.getElementById("mainVehiclePhotoStatus").textContent="Photo ready to become your main vehicle image.";document.getElementById("mainVehiclePhotoStatus").className="vinStatus good"});
  document.getElementById("mainVehicleUseAuto")?.addEventListener("click",async()=>{if(vehicle.coverPhotoId)await deletePhotoRecord(vehicle.coverPhotoId).catch(()=>{});const updated={...vehicle,coverPhotoId:"",updatedAt:new Date().toISOString()};upsertVehicle(updated);if(url)URL.revokeObjectURL(url);closeGlobalFloatSheet();renderVehicleProfile();renderVehicleHome();renderDigitalTwin();renderGarage()});
  document.getElementById("mainVehiclePhotoSave")?.addEventListener("click",async()=>{const status=document.getElementById("mainVehiclePhotoStatus");if(!file){status.textContent="Choose a photo first.";status.className="vinStatus warn";return}try{status.textContent="Saving your main vehicle photo…";const id=await saveMainVehiclePhoto(vehicle,file);upsertVehicle({...vehicle,coverPhotoId:id,updatedAt:new Date().toISOString()});if(url)URL.revokeObjectURL(url);closeGlobalFloatSheet();renderVehicleProfile();renderVehicleHome();renderDigitalTwin();renderGarage()}catch(error){status.textContent="Could not save photo: "+error.message;status.className="vinStatus warn"}});
}
document.getElementById("profileMainPhotoButton")?.addEventListener("click",openMainVehiclePhotoPicker);

function openPhotoCapture(defaultArea="engine"){
  openGlobalFloatSheet(
    "Add Owner Photo",
    "Attach a photo to this vehicle and choose where it belongs.",
    '<input id="ownerPhotoFile" type="file" accept="image/*" capture="environment" hidden><label class="vinScanButton" for="ownerPhotoFile"><span class="vinScanIcon">＋</span><b>Take or choose photo</b><small>The image stays inside this browser.</small></label>'+
    '<div id="ownerPhotoPreview" class="photoCapturePreview hidden"><img alt="Selected owner photo"></div>'+
    '<div class="photoCaptureGrid"><label>Area<select id="ownerPhotoArea"><option value="engine">Engine Bay</option><option value="airbox">Airbox</option><option value="coolant">Coolant</option><option value="fusebox">Fuse Box</option><option value="battery">Battery</option><option value="exterior">Exterior</option><option value="interior">Interior</option><option value="wheels">Wheels & Brakes</option><option value="trunk">Trunk</option><option value="underside">Underside</option><option value="documents">Receipts / Documents</option><option value="other">Other</option></select></label><label>Component<input id="ownerPhotoComponent" placeholder="Optional"></label></div>'+
    '<label>Note<textarea id="ownerPhotoNote" placeholder="What does this photo show?"></textarea></label>'+
    '<div id="ownerPhotoStatus" class="vinStatus">Choose a photo to continue.</div>'+
    '<div class="photoCaptureActions"><button id="ownerPhotoCancel" class="ghost" type="button">Cancel</button><button id="ownerPhotoSave" class="primary" type="button">Save Photo</button></div>',
    "OWNER PHOTOS"
  );
  document.getElementById("ownerPhotoArea").value=defaultArea||"engine";
  let selectedFile=null;let previewUrl=null;
  document.getElementById("ownerPhotoFile")?.addEventListener("change",event=>{selectedFile=event.target.files?.[0]||null;if(!selectedFile)return;if(previewUrl)URL.revokeObjectURL(previewUrl);previewUrl=URL.createObjectURL(selectedFile);const wrap=document.getElementById("ownerPhotoPreview");wrap.querySelector("img").src=previewUrl;wrap.classList.remove("hidden");document.getElementById("ownerPhotoStatus").textContent="Photo ready to save.";document.getElementById("ownerPhotoStatus").className="vinStatus good"});
  document.getElementById("ownerPhotoCancel")?.addEventListener("click",closeGlobalFloatSheet);
  document.getElementById("ownerPhotoSave")?.addEventListener("click",async()=>{
    const status=document.getElementById("ownerPhotoStatus");if(!selectedFile){status.textContent="Choose a photo first.";status.className="vinStatus warn";return}
    status.textContent="Preparing photo…";status.className="vinStatus";
    try{
      const blob=await compressImageFile(selectedFile);const vehicle=getActiveVehicle();await addPhotoRecord({id:"photo-"+Date.now()+"-"+Math.random().toString(36).slice(2,8),vehicleId:vehicle.id,area:document.getElementById("ownerPhotoArea").value,component:document.getElementById("ownerPhotoComponent").value.trim(),note:document.getElementById("ownerPhotoNote").value.trim(),createdAt:new Date().toISOString(),blob});
      if(previewUrl)URL.revokeObjectURL(previewUrl);closeGlobalFloatSheet();if(current==="photos")renderPhotoGallery();if(current==="digitaltwin")renderDigitalTwin();renderGarage();
    }catch(error){status.textContent="Could not save photo: "+error.message;status.className="vinStatus warn"}
  });
}
async function renderPhotoGallery(){
  const gallery=document.getElementById("photoGallery");if(!gallery)return;photoObjectUrls.forEach(URL.revokeObjectURL);photoObjectUrls=[];
  let photos=[];try{photos=await getPhotos(getActiveVehicle().id)}catch(error){gallery.innerHTML='<div class="photoEmpty"><span>!</span><h3>Photo storage unavailable</h3><p>'+escapeHtml(error.message)+'</p></div>';return}
  document.getElementById("photoLibraryCount").textContent=photos.length;
  const filtered=photos.filter(photo=>currentPhotoFilter==="all"||photo.area===currentPhotoFilter||(currentPhotoFilter==="other"&&!['engine','exterior','interior','wheels'].includes(photo.area)));
  if(!filtered.length){gallery.innerHTML='<div class="photoEmpty"><span>▧</span><h3>'+(photos.length?'No photos in this filter':'No owner photos yet')+'</h3><p>Use Add Photo to start documenting the real vehicle.</p></div>';return}
  gallery.innerHTML="";
  filtered.forEach(photo=>{
    const url=URL.createObjectURL(photo.blob);photoObjectUrls.push(url);const card=document.createElement("article");card.className="photoCard";
    card.innerHTML='<img src="'+url+'" alt="Owner vehicle photo"><div class="photoCardCopy"><span>'+escapeHtml(photo.role==="vehicle-cover"?"MAIN VEHICLE PHOTO":photoAreaLabel(photo.area))+'</span><b>'+escapeHtml(photo.component||photo.note||"Owner photo")+'</b><small>'+new Date(photo.createdAt).toLocaleDateString()+'</small></div><div class="photoCardActions"><button type="button">Delete</button></div>';
    card.querySelector("button").addEventListener("click",async()=>{if(confirm("Delete this owner photo?")){await deletePhotoRecord(photo.id);const vehicle=getActiveVehicle();if(vehicle?.coverPhotoId===photo.id)upsertVehicle({...vehicle,coverPhotoId:"",updatedAt:new Date().toISOString()});renderPhotoGallery();renderDigitalTwin();renderGarage();renderVehicleProfile();renderVehicleHome()}});gallery.appendChild(card);
  });
}
document.querySelectorAll("[data-photo-filter]").forEach(btn=>btn.addEventListener("click",()=>{currentPhotoFilter=btn.dataset.photoFilter;document.querySelectorAll("[data-photo-filter]").forEach(item=>item.classList.toggle("active",item===btn));renderPhotoGallery()}));

// v7.0 Real 3D Digital Twin bridge
let twin3dInitialized=false;
let twin3dLastVehicleKey="";
function twin3dVehicleKey(vehicle){
  return [vehicle?.year,vehicle?.make,vehicle?.model,vehicle?.trim,vehicle?.color,vehicle?.moduleSet,vehicle?.modelRegistryKey,vehicle?.modelMatchType,vehicle?.modelAssetReady,vehicle?.modelPackageId,vehicle?.modelPackageVersion,JSON.stringify(vehicle?.modelDimensions||{}),vehicle?.modelDimensionAccuracy].map(value=>String(value||"").toLowerCase().trim()).join("|");
}
function sanitizeVehicleFor3D(vehicle){
  if(!vehicle)return null;
  return {
    id:vehicle.id,
    year:vehicle.year,
    make:vehicle.make,
    model:vehicle.model,
    trim:vehicle.trim,
    engine:vehicle.engine,
    drivetrain:vehicle.drivetrain,
    bodyClass:vehicle.bodyClass,
    color:vehicle.color,
    moduleSet:vehicle.moduleSet,
    modelRegistryKey:vehicle.modelRegistryKey||"",
    modelMatchType:vehicle.modelMatchType||"generic",
    modelLabel:vehicle.modelLabel||[vehicle.year,vehicle.make,vehicle.model].filter(Boolean).join(" "),
    modelAssetReady:!!vehicle.modelAssetReady,
    modelAsset:vehicle.modelAsset||"",
    modelFallback:vehicle.modelFallback||"procedural-universal-v2",
    modelAccuracy:vehicle.modelAccuracy||vehicle.modelMatchType||"approximate",
    modelSource:vehicle.modelSource||"procedural-template",
    modelConfidence:Number(vehicle.modelConfidence||0),
    modelPartNodes:vehicle.modelPartNodes||null,
    modelHinges:vehicle.modelHinges||null,
    modelDimensions:vehicle.modelDimensions||null,
    modelDimensionAccuracy:vehicle.modelDimensionAccuracy||"",
    modelDimensionLabel:vehicle.modelDimensionLabel||"",
    modelDimensionSource:vehicle.modelDimensionSource||"",
    modelDimensionConfidence:Number(vehicle.modelDimensionConfidence||0),
    modelDimensionRegistryKey:vehicle.modelDimensionRegistryKey||"",
    modelPackageId:vehicle.modelPackageId||"",
    modelPackageVersion:vehicle.modelPackageVersion||"",
    modelPackageTier:vehicle.modelPackageTier||"",
    modelPackageDelivery:vehicle.modelPackageDelivery||"",
    vinMasked:vehicle.vinLinked?maskVin(vehicle.vin):vehicle.vinMasked||"VIN not linked"
  };
}
function initTwinCanvas(){
  const active=getActiveVehicle();if(!active)return;const vehicle=sanitizeVehicleFor3D(active);
  window.MYCAR_ACTIVE_VEHICLE_3D=vehicle;
  if(twin3dInitialized)return;
  twin3dInitialized=true;
  twin3dLastVehicleKey=twin3dVehicleKey(vehicle);
  window.dispatchEvent(new CustomEvent("mycar:3d-init",{detail:{vehicle}}));
}
function formatDimensionValue(value,units="in"){
  const number=Number(value);
  if(!Number.isFinite(number)||number<=0)return "—";
  if(units==="mm")return Math.round(number).toLocaleString()+" mm";
  if(units==="cm")return number.toFixed(1)+" cm";
  if(units==="m")return number.toFixed(3)+" m";
  return number.toFixed(1)+" in";
}
function renderTwinScaleCard(vehicle){
  const dimensions=vehicle?.modelDimensions||{};
  const accuracy=vehicle?.modelDimensionAccuracy||"estimated-template";
  const exact=accuracy==="catalog-exact"||accuracy==="exact";
  const generation=accuracy==="generation";
  const set=(id,value)=>{const el=document.getElementById(id);if(el)el.textContent=value};
  set("twinDimLength",formatDimensionValue(dimensions.length,dimensions.units));
  set("twinDimWidth",formatDimensionValue(dimensions.width,dimensions.units));
  set("twinDimHeight",formatDimensionValue(dimensions.height,dimensions.units));
  set("twinDimWheelbase",formatDimensionValue(dimensions.wheelbase,dimensions.units));
  set("twinDimFrontTrack",formatDimensionValue(dimensions.frontTrack,dimensions.units));
  set("twinDimRearTrack",formatDimensionValue(dimensions.rearTrack,dimensions.units));
  set("twin3dScaleBadge",exact?"CATALOG TO-SCALE":generation?"GENERATION SCALE":"ESTIMATED SCALE");
  set("twin3dScaleTitle",exact?"To-scale vehicle envelope":generation?"Generation-sized vehicle envelope":"Body-style scale estimate");
  set("twin3dScaleSource",vehicle?.modelDimensionSource||vehicle?.modelDimensionLabel||"Automatic vehicle dimension resolver");
  set("twin3dScaleStatus",exact?"Exact":generation?"Generation":"Estimated");
  set("twin3dScaleNote",exact?"The procedural model is physically scaled to catalog dimensions. Its panel shape remains a generation foundation until an exact licensed mesh is available.":"The app is using the best available dimension tier. Geometry and scale accuracy are shown separately.");
  const confidence=document.getElementById("twin3dScaleConfidence");
  if(confidence){
    confidence.textContent=exact?"TO-SCALE":generation?"GENERATION":"ESTIMATED";
    confidence.className="twinScaleConfidence "+(exact?"exact":"estimated");
  }
}
function assetTierLabel(value){return {exact:"Exact",generation:"Generation","body-template":"Generated body",universal:"Universal"}[value]||"Generated"}
function packageDeliveryLabel(value){return {"signed-glb":"Protected GLB","public-glb":"Web GLB",procedural:"Procedural"}[value]||"Procedural"}
function renderPackageFeatureList(features=[]){const host=document.getElementById("assetNetworkFeatures");if(!host)return;host.innerHTML=features.length?features.map(feature=>'<span>'+escapeHtml(feature)+'</span>').join(""):'<span>No feature manifest available.</span>'}
async function getAssetNetworkMatch(vehicle,{force=false}={}){if(!vehicle)return null;return resolveVin3DModel(vehicle,{force})}
async function renderAssetNetwork(){
  let vehicle=getActiveVehicle();const catalog=await loadAssetNetworkCatalog(),config=await loadAssetNetworkConfig();
  const set=(id,value)=>{const el=document.getElementById(id);if(el)el.textContent=value};
  set("assetNetworkPackageCount",Object.keys(catalog?.packages||{}).length);
  const cloud=document.getElementById("assetNetworkCloudBadge");if(cloud){cloud.textContent=config?.enabled?"CLOUD BROKER CONNECTED":"CLOUD BROKER NOT CONNECTED";cloud.classList.toggle("muted",!config?.enabled)}
  const licensed=document.getElementById("assetSourceLicensed");if(licensed)licensed.textContent=config?.enabled?"Connected":"Connector ready";
  if(!vehicle){set("assetNetworkVehicleName","No active vehicle");set("assetNetworkVehicleMeta","Scan a VIN to resolve a package.");set("assetNetworkPackageName","—");set("assetNetworkPackageVersion","—");set("assetNetworkPackageTier","—");set("assetNetworkPackageDelivery","—");renderPackageFeatureList([]);return}
  vehicle=await ensureVehicleAssetPackage(vehicle);const match=await getAssetNetworkMatch(vehicle).catch(()=>null);assetNetworkPendingMatch=match;assetNetworkPendingVehicleId=vehicle.id;
  const availableVersion=match?.packageVersion||vehicle.modelPackageVersion||"0.0.0",installedVersion=vehicle.modelPackageVersion||"0.0.0",hasUpdate=comparePackageVersions(availableVersion,installedVersion)>0;
  set("assetNetworkVehicleName",vehicle.nickname||formatVehicleName(vehicle));set("assetNetworkVehicleMeta",formatVehicleName(vehicle));set("assetNetworkPackageName",match?.packageLabel||vehicle.modelLabel||"Vehicle package");set("assetNetworkPackageVersion","v"+installedVersion+(hasUpdate?" → v"+availableVersion:""));set("assetNetworkPackageTier",assetTierLabel(match?.packageTier||vehicle.modelPackageTier));set("assetNetworkPackageDelivery",packageDeliveryLabel(match?.packageDelivery||vehicle.modelPackageDelivery));
  const badge=document.getElementById("assetNetworkUpdateBadge");if(badge){badge.textContent=hasUpdate?"UPGRADE READY":"CURRENT";badge.className="assetNetworkUpdateBadge "+(hasUpdate?"update":"current")}
  const install=document.getElementById("assetNetworkInstall");if(install){install.disabled=!hasUpdate;install.textContent=hasUpdate?"Install v"+availableVersion:"Package current"}
  const notes=document.getElementById("assetNetworkReleaseNotes");if(notes)notes.innerHTML=(match?.packageReleaseNotes||vehicle.modelPackageReleaseNotes||[]).map(note=>'<div>'+escapeHtml(note)+'</div>').join("")||'<div>No release notes for this package.</div>';
  renderPackageFeatureList(match?.packageFeatures||vehicle.modelPackageFeatures||[]);
  const result=document.getElementById("assetNetworkResult");if(result){result.className="assetNetworkResult "+(hasUpdate?"warn":"good");result.textContent=hasUpdate?"A newer package manifest is ready. Installing it updates this vehicle's delivery metadata and future asset channel. The appearance changes only when the package includes a newer model asset.":"This vehicle is using the newest package in the current catalog. The network can replace it automatically when an exact licensed or reviewed package becomes available."}
}
async function checkActiveVehicleAssetNetwork({force=false}={}){
  const result=document.getElementById("assetNetworkResult"),button=document.getElementById("assetNetworkCheck");if(button){button.disabled=true;button.textContent="Checking…"}if(result){result.className="assetNetworkResult";result.textContent="Checking exact, generation, reviewed, and generated package sources…"}
  const vehicle=getActiveVehicle();if(!vehicle){if(result)result.textContent="Add a vehicle first.";if(button){button.disabled=false;button.textContent="Check for upgrade"}return}
  try{assetNetworkPendingMatch=await getAssetNetworkMatch(vehicle,{force});assetNetworkPendingVehicleId=vehicle.id;await renderAssetNetwork()}catch(error){if(result){result.className="assetNetworkResult warn";result.textContent="The cloud broker is unavailable, so MY CAR kept the bundled package catalog active. "+error.message}}finally{if(button){button.disabled=false;button.textContent="Check for upgrade"}}
}
async function installPendingAssetPackage(){
  const result=document.getElementById("assetNetworkResult"),button=document.getElementById("assetNetworkInstall");const vehicle=getVehicles().find(item=>item.id===assetNetworkPendingVehicleId)||getActiveVehicle();if(!vehicle||!assetNetworkPendingMatch)return;
  if(button){button.disabled=true;button.textContent="Installing…"}
  const updated=applyResolvedPackageToVehicle(vehicle,assetNetworkPendingMatch);upsertVehicle(updated);twin3dLastVehicleKey="";window.MYCAR_ACTIVE_VEHICLE_3D=sanitizeVehicleFor3D(updated);window.dispatchEvent(new CustomEvent("mycar:3d-vehicle",{detail:{vehicle:window.MYCAR_ACTIVE_VEHICLE_3D}}));if(result){result.className="assetNetworkResult good";result.textContent="Package v"+(updated.modelPackageVersion||"")+" installed. This vehicle will use its new asset automatically whenever the package delivers one."}await renderAssetNetwork();renderGarage();renderVehicleProfile();
}
async function renderDigitalTwin(){
  let vehicle=getActiveVehicle();if(!vehicle){showScreen("garage");return}
  vehicle=await ensureVehicleAssetPackage(vehicle);
  renderTwinScaleCard(vehicle);
  const vehicle3d=sanitizeVehicleFor3D(vehicle);
  const vehicleKey=twin3dVehicleKey(vehicle3d);
  window.MYCAR_ACTIVE_VEHICLE_3D=vehicle3d;
  const shouldUpdateMountedViewer=twin3dInitialized&&vehicleKey!==twin3dLastVehicleKey;
  twin3dLastVehicleKey=vehicleKey;
  if(shouldUpdateMountedViewer)window.dispatchEvent(new CustomEvent("mycar:3d-vehicle",{detail:{vehicle:vehicle3d}}));
  const set=(id,value)=>{const el=document.getElementById(id);if(el)el.textContent=value};
  set("twinVehicleName",vehicle.nickname||"My Vehicle");
  set("twinVehicleMeta",formatVehicleName(vehicle));
  set("twinVinMask",vehicle.vinLinked?maskVin(vehicle.vin):vehicle.vinMasked||"Not linked");
  set("twin3dVehicleSpec",vehicle.modelLabel||[vehicle.year,vehicle.make,vehicle.model,vehicle.trim].filter(Boolean).join(" ")+" base twin");
  const accuracyLabels={exact:"Exact",generation:"Generation",approximate:"Automatic",universal:"Foundation","exact-asset":"Exact",generic:"Automatic"};set("twin3dVinMatch",accuracyLabels[vehicle.modelAccuracy||vehicle.modelMatchType]||"Automatic");
  const photos=await getPhotos(vehicle.id).catch(()=>[]);
  set("twinPhotoCount",photos.length);
  set("twinCompletionBadge",photos.length?photos.length+" optional photo"+(photos.length===1?"":"s"):"3D Ready");
  set("twinAssetPackageName",vehicle.modelPackageId?vehicle.modelPackageId:"Automatic package");
  set("twinAssetPackageSource",vehicle.modelPackageSourceLabel||"MY CAR Asset Network");
  set("twinAssetPackageVersion",vehicle.modelPackageVersion?"v"+vehicle.modelPackageVersion:"AUTO");
}
function openTwinZoneSheet(zone){
  if(zone==="engine"){showScreen("engine");return}
  const descriptions={
    exterior:"Body panels, paint, lights, glass, and exterior condition.",
    interior:"Dashboard, seats, controls, trim, and cabin components.",
    wheels:"Wheels, tires, brakes, hubs, and suspension corners.",
    trunk:"Cargo area, spare tire well, tools, wiring, and rear access points.",
    underside:"Exhaust, subframes, lines, shields, leaks, and rust condition."
  };
  openGlobalFloatSheet(
    photoAreaLabel(zone),
    descriptions[zone]||"Explore this vehicle area.",
    '<div class="globalInfoCard"><span>3D DIGITAL TWIN</span><b>This area works without owner photos. Photos remain an optional personalization layer.</b></div><div class="globalSheetActions"><button id="twinZonePhotos" class="ghost" type="button">Optional Photos</button><button id="twinZoneExplore" class="primary" type="button">Keep Exploring</button></div>',
    "DIGITAL TWIN"
  );
  document.getElementById("twinZonePhotos")?.addEventListener("click",()=>{closeGlobalFloatSheet();currentPhotoFilter=zone;showScreen("photos")});
  document.getElementById("twinZoneExplore")?.addEventListener("click",()=>closeGlobalFloatSheet());
}
function routeFrom3D(target){
  if(!target)return;
  if(["engine","airbox","coolant","fusebox","vehicleprofile","photos"].includes(target)){showScreen(target);return}
  if(["exterior","interior","wheels","trunk","underside"].includes(target)){openTwinZoneSheet(target);return}
}
window.addEventListener("mycar:3d-route",event=>routeFrom3D(event.detail?.target));
window.addEventListener("mycar:3d-model-status",event=>{
  const detail=event.detail||{};
  const set=(id,value)=>{const el=document.getElementById(id);if(el&&value)el.textContent=value};
  set("twin3dModelStatus",detail.status);
  set("twin3dModelType",detail.type);
  set("twin3dVehicleSpec",detail.spec);
});
document.getElementById("twinVinScanButton")?.addEventListener("click",()=>startVinSetup(getActiveVehicle()?.id||null));
document.querySelectorAll("[data-twin-module]").forEach(btn=>btn.addEventListener("click",()=>showScreen(btn.dataset.twinModule)));
document.querySelectorAll("[data-twin-zone]").forEach(btn=>btn.addEventListener("click",()=>openTwinZoneSheet(btn.dataset.twinZone)));

ensureGarageSeed();const initialVehicle=getActiveVehicle();window.MYCAR_ACTIVE_VEHICLE_3D=initialVehicle?sanitizeVehicleFor3D(initialVehicle):null;twin3dLastVehicleKey=twin3dVehicleKey(window.MYCAR_ACTIVE_VEHICLE_3D);setGreeting();renderComponentMaps();renderMarkers();updateProgress();renderLogs();renderCoolantChecklist();renderCoolantStep();renderCoolantLogs();renderFuseGuide();renderGarage();showScreen(initialVehicle?"digitaltwin":"garage");window.addEventListener("load",()=>setTimeout(()=>{renderMarkers();updateProgress();renderFuseGuide();},50));
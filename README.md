# MY CAR v7.0 Real 3D Twin

This version replaces the photo-tilting twin with a real WebGL 3D vehicle viewer.

## Replace or upload

- `index.html`
- `style.css`
- `app.js`
- `twin3d.bundle.js`
- `README.md`
- `models/model-registry.json`
- `models/README.md`

Keep your existing `images/` folders and all previous app assets.

## v7.0 features

- Opens directly to the 3D Digital Twin
- True one-finger orbiting and pinch zooming
- Front, rear, driver, passenger, top, and underside camera views
- Clickable body, four doors, hood, trunk, wheels, and underside
- Animated opening and closing doors, hood, and trunk
- Clickable Airbox, Coolant, and Fuse Box inside the engine bay
- Open All, Close All, and Reset controls
- Optional owner photos remain available but are never required
- VIN/model registry is ready for a licensed exact `.glb` model later

## Current model accuracy

The bundled v7.0 model is a real, fully interactive procedural 3D foundation shaped and configured for a 2010 Buick LaCrosse-style sedan. It is not factory CAD and should not be represented as an exact exterior scan.

The exact-model slot is already wired into `models/model-registry.json`. When a licensed and properly prepared 2010 Buick LaCrosse GLB is available, it can replace the procedural body without changing the main app flow.

## Privacy

The 3D module receives only vehicle profile details needed to select a model. The full VIN is not passed into the 3D viewer.


## v7.02 Fast 3D Load

- Prevents duplicate initialization and duplicate vehicle builds.
- Keeps the same 3D vehicle in memory when reopening Digital Twin.
- Caches the model registry using a versioned URL.
- Starts the active vehicle data before the 3D module executes.
- Uses lower-cost mobile rendering: reduced pixel ratio, no mobile real-time shadows, and a 30 FPS mobile cap.
- Pauses 3D rendering while another app screen or browser tab is active.
- Adds module preload and a visible error instead of an endless loading screen if twin3d.bundle.js is missing.


## v7.02 critical viewer fix

- Fixed the procedural model crash caused by an unscoped `BoxGeometry` constructor in the front grille.
- Bumped the Three.js bundle cache key so Safari and GitHub Pages load the corrected file.
- Preserves the v7.01 mobile loading and performance improvements.


## v7.03 Orientation Fix

- Corrected U.S.-market side orientation.
- Driver side is the vehicle's left side.
- Passenger side is the vehicle's right side.
- Updated camera presets and side-specific labels accordingly.


## v7.04 True U.S. Side Fix

This version corrects the actual bundled 3D scene rather than only changing unused labels.

- U.S. driver side = vehicle left.
- U.S. passenger side = vehicle right.
- Swapped the live driver/passenger camera positions.
- Corrected front-left camera placement.
- Corrected physical door placement and opening direction.
- Corrected wheel, headlight, taillight, and steering-wheel placement.
- Added explicit Driver • Left and Passenger • Right labels.
- Changed cache version to 7.04 so Safari loads the corrected bundle.


## v7.05 VIN-to-3D Model Pipeline

- A VIN label photo can now be scanned locally for Data Matrix, Code 39, Code 128, PDF417, and QR barcodes.
- The scanner first uses the browser's native BarcodeDetector when available, then lazily loads the bundled ZXing decoder for Safari/iPhone compatibility.
- The detected VIN is validated with its check digit before decoding.
- NHTSA vPIC supplies year, make, model, trim, engine, drivetrain, and body information when available.
- Decoded vehicle details are matched against `models/model-registry.json`.
- The selected registry key is saved to the local vehicle profile and sent into the real 3D viewer.
- The 3D viewer reloads automatically when the VIN selects a different model package.
- Full VIN values stay in the user's browser and are never sent into the public 3D bundle. Only decoded vehicle details and the masked VIN enter the viewer.
- Owner photos remain optional.

### Current model coverage

The 2010-2013 Buick LaCrosse is matched to the Buick-specific procedural 3D package. The exact GLB path is already registered as `models/2010-buick-lacrosse.glb`; once a properly prepared and licensed model is placed there and `assetReady` is set to `true`, VIN-matched vehicles will load it automatically.

### Bundled barcode decoder

`zxing.min.js` is from `@zxing/library` 0.23.0 and is distributed under the Apache License 2.0. See `ZXING-LICENSE.txt`.
<<<<<<< HEAD


## v7.06 Worldwide Model Resolver

- Added exact, generation, automatic body-style, and universal resolution tiers.
- Added an optional cloud resolver API configuration while preserving offline/local fallback.
- The full VIN is never sent to the 3D model resolver.
- Added automatic sedan, SUV, pickup, hatchback, wagon, coupe, convertible, and van foundations.
- Added model accuracy/source information to VIN setup and Vehicle Profile.
- Restored Delete Vehicle in Garage and Vehicle Profile.
- Deleting a vehicle also removes its locally stored photos.
- The Garage can now remain empty without recreating the default Buick after an intentional deletion.
=======
>>>>>>> ef39d562b6bcc2f6d70cdc65375f762f2878a73e

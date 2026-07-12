# MY CAR v7.07 Clean Root Deploy

This is a clean deployment package for GitHub Pages. It fixes the broken mixed-version upload and keeps every new runtime dependency in the repository root.

Keep your existing `images/` and `data/` folders. Completely replace the root files with the files in this ZIP.

## Root files to upload

- `index.html`
- `style.css`
- `app.js`
- `twin3d.bundle.js`
- `zxing.min.js`
- `ZXING-LICENSE.txt`
- `model-registry.json`
- `model-resolver-config.json`
- `README.md`

This version does not require `models/` or `services/` folders. The model registry and resolver configuration are also embedded as fallbacks.

Never keep merge-conflict text such as `<<<<<<< HEAD`, `=======`, or `>>>>>>>` in a deployed file.


## v7.08 MY CAR Living Twin

This release moves the procedural vehicle from a blocky technical prototype toward a living, interactive MY CAR twin.

### Vehicle improvements
- Sculpted sedan body instead of one large rectangular shell
- Lower and wider Buick-style stance
- Waterfall grille and simplified tri-shield detail
- Buick-style hood portholes
- Better front and rear fascia shaping
- Improved cabin glass and roofline
- Better stock-style wheels, rotors, calipers, spokes, and hubs
- Wheel arches, side mirrors, chrome trim, dual exhaust, subframes, and interior details
- More complete engine-bay foundation

### Living controls
- Headlight and taillight toggle
- Front-wheel steering positions
- Showroom auto-rotation
- Smooth steering and panel movement
- Reset restores lights, steering, showroom mode, camera, and movable panels

The model is still a procedural VIN-resolved foundation, not an exact manufacturer CAD scan. An exact licensed GLB can replace it later through the existing model resolver without changing the app workflow.


## v7.09 Exact-Scale VIN Resolver

This version separates visual model accuracy from physical scale accuracy.

### New resolver tiers

**Geometry**
- Exact licensed model
- Correct vehicle generation
- Automatic body-style foundation
- Universal foundation

**Physical scale**
- Catalog exact
- Generation dimensions
- Estimated body-template dimensions

### 2010 Buick LaCrosse scale package

The saved Buick profile is automatically migrated to:

- Length: 196.9 in
- Width: 73.1 in
- Height: 59.2 in
- Wheelbase: 111.7 in
- Front track: 61.7 in
- Rear track: 62.0 in

The procedural model is non-uniformly scaled to the resolved exterior envelope. Wheel positions are also adjusted to the resolved wheelbase and track widths.

This makes the Buick physically dimensioned correctly while remaining honest that its current panel geometry is still a generation-style procedural foundation. A licensed exact GLB can later replace the geometry while keeping the same scale resolver and VIN workflow.

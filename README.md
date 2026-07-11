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

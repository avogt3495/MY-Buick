# Exact vehicle model slot

The app currently uses its built-in interactive 3D Buick-style sedan, so no owner photos are required.

A prepared exact model can later be added as:

`models/2010-buick-lacrosse.glb`

After adding the licensed GLB, change `assetReady` to `true` in `model-registry.json`.

For built-in opening controls, the GLB should contain correctly pivoted objects using the node names listed in `model-registry.json`. The hood, trunk, and doors must rotate from their real hinge points. The file should also include the interior, engine bay, wheels, and underside if those areas are expected to be visible.


## VIN matching

`model-registry.json` version 2 supports `match` rules. The app resolves a decoded VIN to a registry key, stores that key with the vehicle profile, and passes it into the Three.js viewer.

Current registered packages:

- `2010|buick|lacrosse`: 2010-2013 Buick LaCrosse generation match, with the built-in Buick-specific model and a future exact GLB path.
- `generic|sedan`: fallback for decoded sedan/saloon body classes.
- `generic|vehicle`: final fallback when no body-specific package exists.

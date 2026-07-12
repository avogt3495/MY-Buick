# Exact vehicle model slot

The app currently uses its built-in interactive 3D Buick-style sedan, so no owner photos are required.

A prepared exact model can later be added as:

`models/2010-buick-lacrosse.glb`

After adding the licensed GLB, change `assetReady` to `true` in `model-registry.json`.

For built-in opening controls, the GLB should contain correctly pivoted objects using the node names listed in `model-registry.json`. The hood, trunk, and doors must rotate from their real hinge points. The file should also include the interior, engine bay, wheels, and underside if those areas are expected to be visible.

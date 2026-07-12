# MY CAR Model Registry v3

This registry is no longer intended to contain every individual vehicle. It stores:

1. Prepared exact models when licensed assets exist.
2. Generation-family packages that cover many years and trims.
3. Automatic body-style templates for vehicles without a dedicated model.
4. A universal interactive fallback.

<<<<<<< HEAD
The optional cloud resolver can return a licensed GLB URL and part/hinge mappings. The client never sends the full VIN to the model resolver, only decoded vehicle fields.
=======
`models/2010-buick-lacrosse.glb`

After adding the licensed GLB, change `assetReady` to `true` in `model-registry.json`.

For built-in opening controls, the GLB should contain correctly pivoted objects using the node names listed in `model-registry.json`. The hood, trunk, and doors must rotate from their real hinge points. The file should also include the interior, engine bay, wheels, and underside if those areas are expected to be visible.


## VIN matching

`model-registry.json` version 2 supports `match` rules. The app resolves a decoded VIN to a registry key, stores that key with the vehicle profile, and passes it into the Three.js viewer.

Current registered packages:

- `2010|buick|lacrosse`: 2010-2013 Buick LaCrosse generation match, with the built-in Buick-specific model and a future exact GLB path.
- `generic|sedan`: fallback for decoded sedan/saloon body classes.
- `generic|vehicle`: final fallback when no body-specific package exists.
>>>>>>> ef39d562b6bcc2f6d70cdc65375f762f2878a73e

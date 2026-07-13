# MY CAR v8.0 Asset Network

MY CAR v8.0 moves the prototype from a single-vehicle model registry toward a versioned vehicle asset platform.

## Core behavior

1. Scan or enter a VIN.
2. Decode year, make, model, trim, body type, engine, and drivetrain.
3. Resolve the best available asset package.
4. Load exact, generation, body-template, or universal geometry.
5. Keep the installed package version on the vehicle profile.
6. Upgrade the vehicle later when the Asset Network publishes a better compatible package.

Photos remain optional. The full VIN is not sent to the asset broker.

## New files

- `asset-network-catalog.json`: bundled package catalog and worldwide fallbacks
- `asset-network-config.json`: future cloud broker configuration
- `asset-package-schema.json`: validation format for manufacturer, licensed, community, and generated packages
- `MODEL-CONTRIBUTOR-GUIDE.md`: rights and package preparation requirements

## Prototype limitation

The cloud broker is intentionally disabled. The bundled catalog works immediately on GitHub Pages. Enabling worldwide protected delivery requires a deployed backend, a model CDN, rights validation, and signed asset URLs. No exact paid model is included in this public package.

## Buick demonstration

The existing Buick is migrated to package `mycar.gm.buick.lacrosse.2010-2013` v1.0.0. The bundled catalog offers v1.1.0 so the upgrade workflow can be tested from the Asset Network screen. This update changes package/version metadata and prepares the protected exact-model slot. The visual model changes only when a package includes a newer asset.


## v8.1 Asset Package Ingestor

This version adds a local contributor and provider workflow for converting one GLB into a reusable MY CAR Asset Network package.

- Reads GLB 2.0 structure locally in the browser
- Reports file size, triangle estimate, nodes, meshes, materials, and animations
- Auto-suggests body, hood, trunk, door, wheel, steering, and underside node mappings
- Uses U.S. orientation: driver left, passenger right
- Validates identity, catalog dimensions, mobile delivery targets, parts, and rights
- Creates manifest.json, parts-map.json, ingest-report.json, and catalog-entry.json
- Supports a session-only preview of the selected GLB in the existing Digital Twin
- Never uploads the selected model from the static prototype

The ingestor validates structure and generates package metadata. It cannot automatically repair bad geometry, move door pivots to hinges, retopologize a heavy model, or grant missing distribution rights. Those remain asset-production and review steps.

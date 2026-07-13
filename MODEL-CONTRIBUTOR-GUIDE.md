# MY CAR Model Contributor Guide

MY CAR uses one reviewed package per vehicle generation, not one model per VIN.

## Accepted sources

- Manufacturer-authorized assets
- Properly licensed commercial assets
- Contributor-owned original models
- MY CAR generated procedural foundations

Random downloaded models cannot be redistributed through the network.

## Package requirements

A submitted package follows `asset-package-schema.json` and should include:

- Supported years, make, model, generation, and body style
- Rights and source documentation
- A web-optimized GLB when an exact asset is supplied
- Named body, hood, trunk, doors, and wheels
- Hinge/animation metadata
- Scale dimensions and coordinate orientation
- Mobile performance targets

## Delivery

Licensed assets should be delivered through protected or signed URLs rather than stored openly in a public GitHub repository. Community and manufacturer packages must pass automated validation and human review before reaching the stable channel.

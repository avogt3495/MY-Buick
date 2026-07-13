# MY CAR v8.2 Zero-Touch Twin

This patch moves the app toward the locked product direction:

- Scan VIN
- Decode the vehicle
- Resolve the best current twin automatically
- Build MY CAR with no model uploads or manual mapping
- Open the digital twin immediately

## What changed

1. Replaced the user-facing Asset Network language with a Zero-Touch Twin workflow.
2. Removed the consumer-facing focus on package ingestion and GLB uploads.
3. Added a Build MY CAR screen that simulates the automatic pipeline:
   - Identify vehicle
   - Find factory data
   - Resolve best twin
   - Build MY CAR
   - Open the twin
4. Updated action buttons so the experience feels like a consumer app instead of a creator tool.
5. Kept the future architecture idea alive: exact assets can still replace the current twin later.

## Goal of this version

This is not the final “exact car anywhere in the world” backend. It is the correct UX direction for it.
The app now behaves like the user should not have to upload models, map nodes, or do technical setup.

## Deploy

Replace the root app files with the contents of this package, then hard refresh the browser.

MY CAR v6.22 VIN Auto Car Photo

Replace:
- index.html
- style.css
- app.js

Add this new image:
- images/vehicles/2010_buick_lacrosse_cxl_front_left.jpg

What changed:
- After VIN decoding, the app automatically finds a representative year/make/model image.
- The VIN itself is not sent to the image search, only decoded vehicle details.
- Alex's 2010 Buick LaCrosse CXL uses a bundled verified representative image for reliability.
- The automatic image appears in Garage, Vehicle Profile, Home, and Digital Twin.
- During setup or later from Vehicle Profile, the owner can replace it with an actual car photo.
- The actual photo is stored locally in IndexedDB and becomes the main image everywhere.
- A Use VIN Match option restores the automatic representative image.
- Existing v6.21 vehicle data and photos are migrated without being erased.

Bundled representative image attribution:
- 2010 Buick LaCrosse CXL, Front Left, 10-02-2020.jpg
- Author: SsmIntrigue
- Source: Wikimedia Commons
- License: CC BY-SA 4.0
- No image edits were made.


v6.23 changes:
- Replaced the rough generic canvas car with a movable photo-based Digital Twin.
- The twin now uses your actual saved car photo when available.
- Added twin view tabs: Main, Engine, Interior, Wheels, Trunk, Underside.
- Added drag rotate, tilt, zoom, reset, and quick module shortcuts.
- Added twin hotspots that jump into engine, airbox, coolant, fuse box, and other vehicle areas.


v6.24 changes:
- The app now opens Buick profiles directly into the Digital Twin instead of requiring a photo-first workflow.
- Added built-in Digital Twin presets so users can rotate and explore the car right away without uploading anything.
- Main vehicle photo is now clearly optional.
- Garage primary open action now lands in the Digital Twin for the Buick build.

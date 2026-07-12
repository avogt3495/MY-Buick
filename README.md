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

const layers = [
  {
    label: 'Installed',
    src: 'images/airbox/00_installed.jpg',
    title: 'Step 1: Remove lid fasteners',
    text: 'Tap each blue T25 screw marker, then tap the red rear clip marker. When all 7 are complete, the lid will flip up and flow into the filter layer.'
  },
  {
    label: 'Filter visible',
    src: 'images/airbox/01_filter_visible.jpg',
    title: 'Step 2: Remove air filter',
    text: 'The lid hardware is hidden now because the lid is off. Tap Next Layer and the filter will lift out and fade away.'
  },
  {
    label: 'Filter removed',
    src: 'images/airbox/02_filter_removed.jpg',
    title: 'Step 3: Inspect lower airbox',
    text: 'Clean leaves or debris from the lower housing. Check the intake tube, lower box, and drain area before reinstalling.'
  }
];

// Marker positions are image percentages, not raw pixels.
// Use Adjust mode to drag them dead-center; positions save to this device.
const defaultFasteners = [
  { id: 's1', type: 'screw', label: '1', x: 27.47, y: 32.50 },
  { id: 's2', type: 'screw', label: '2', x: 72.32, y: 40.34 },
  { id: 's3', type: 'screw', label: '3', x: 76.46, y: 69.75 },
  { id: 's4', type: 'screw', label: '4', x: 73.90, y: 88.75 },
  { id: 's5', type: 'screw', label: '5', x: 54.03, y: 89.54 },
  { id: 's6', type: 'screw', label: '6', x: 15.59, y: 90.79 },
  { id: 'clip', type: 'clip', label: 'C', x: 74.00, y: 37.11 }
];

// Percentage-based airbox lid outline. This is intentionally subtle.
// It follows the lid area better than the earlier big outline, but remains easy to refine.
const airboxOutlinePoints = [
  [12.2, 36.4], [24.3, 31.2], [43.6, 30.4], [58.5, 33.0],
  [70.7, 40.7], [76.7, 55.2], [76.2, 73.0], [72.0, 86.8],
  [61.0, 92.8], [37.0, 92.4], [16.2, 90.6], [9.8, 82.0],
  [8.6, 63.8], [9.5, 47.2]
];

const filterOutlinePoints = [
  [15.5, 18.4], [83.0, 17.4], [86.4, 83.2], [13.3, 84.7]
];

const STORAGE_KEY = 'myBuickAirboxFastenersV25';
let fasteners = loadFasteners();
let currentLayer = 0;
let animating = false;
let calibrating = false;
const done = new Set();

const img = document.getElementById('layerImg');
const markerLayer = document.getElementById('markerLayer');
const outlineLayer = document.getElementById('outlineLayer');
const partAnimationLayer = document.getElementById('partAnimationLayer');
const airboxOutline = document.getElementById('airboxOutline');
const completeCount = document.getElementById('completeCount');
const progressFill = document.getElementById('progressFill');
const stepTitle = document.getElementById('stepTitle');
const stepText = document.getElementById('stepText');
const layerBadge = document.getElementById('layerBadge');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
const resetBtn = document.getElementById('resetBtn');
const calibrateBtn = document.getElementById('calibrateBtn');
const adjustHint = document.getElementById('adjustHint');

function loadFasteners() {
  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (Array.isArray(stored) && stored.length === defaultFasteners.length) return stored;
  } catch {}
  return defaultFasteners.map(f => ({ ...f }));
}

function saveFasteners() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(fasteners));
}

function setOutline() {
  airboxOutline.setAttribute('points', airboxOutlinePoints.map(([x,y]) => `${x},${y}`).join(' '));
}

function renderMarkers() {
  markerLayer.innerHTML = '';
  fasteners.forEach((f) => {
    const btn = document.createElement('button');
    btn.className = `marker ${f.type === 'clip' ? 'clip' : ''} ${done.has(f.id) ? 'done' : ''}`;
    btn.style.left = `${f.x}%`;
    btn.style.top = `${f.y}%`;
    btn.textContent = done.has(f.id) ? '✓' : f.label;
    btn.setAttribute('aria-label', `${f.type === 'clip' ? 'Rear clip' : 'T25 screw'} ${f.label}`);

    btn.addEventListener('pointerdown', (e) => {
      if (currentLayer !== 0 || animating) return;
      e.preventDefault();
      e.stopPropagation();
      if (calibrating) startDrag(e, f, btn);
    });

    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (currentLayer !== 0 || animating || calibrating) return;
      if (done.has(f.id)) done.delete(f.id);
      else done.add(f.id);
      updateUI();
    });

    markerLayer.appendChild(btn);
  });
}

function startDrag(e, fastener, btn) {
  btn.setPointerCapture(e.pointerId);
  btn.classList.add('dragging');

  const move = (ev) => {
    const rect = markerLayer.getBoundingClientRect();
    const x = clamp(((ev.clientX - rect.left) / rect.width) * 100, 0, 100);
    const y = clamp(((ev.clientY - rect.top) / rect.height) * 100, 0, 100);
    fastener.x = Number(x.toFixed(2));
    fastener.y = Number(y.toFixed(2));
    btn.style.left = `${fastener.x}%`;
    btn.style.top = `${fastener.y}%`;
  };

  const up = () => {
    btn.classList.remove('dragging');
    saveFasteners();
    btn.removeEventListener('pointermove', move);
    btn.removeEventListener('pointerup', up);
    btn.removeEventListener('pointercancel', up);
  };

  btn.addEventListener('pointermove', move);
  btn.addEventListener('pointerup', up);
  btn.addEventListener('pointercancel', up);
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function preload(src) {
  return new Promise((resolve) => {
    const preloadImg = new Image();
    preloadImg.onload = resolve;
    preloadImg.onerror = resolve;
    preloadImg.src = src;
  });
}

async function setLayer(index) {
  const next = Math.max(0, Math.min(layers.length - 1, index));
  if (next === currentLayer || animating) return;

  animating = true;
  nextBtn.disabled = true;
  prevBtn.disabled = true;
  calibrateBtn.disabled = true;

  const goingForward = next > currentLayer;
  const from = currentLayer;

  if (goingForward && from === 0) {
    // Real repair feel: hide hardware, animate a clipped copy of the lid upward,
    // then crossfade into the photo where the filter is visible.
    markerLayer.classList.add('fade-away');
    outlineLayer.classList.add('fade-away');
    await animatePartPiece(layers[0].src, airboxOutlinePoints, 'lid-removing', 1125);
  } else if (goingForward && from === 1) {
    // Same idea for the filter: lift the filter out, then reveal the empty lower box.
    await animatePartPiece(layers[1].src, filterOutlinePoints, 'filter-removing', 940);
  } else {
    img.classList.add('soft-fade');
    await wait(220);
  }

  await preload(layers[next].src);
  currentLayer = next;
  img.src = layers[currentLayer].src;
  img.alt = layers[currentLayer].label;

  img.classList.remove('lid-flip', 'filter-lift', 'soft-fade');
  img.classList.add('fade-in');
  await wait(260);
  img.classList.remove('fade-in');

  const onInstalled = currentLayer === 0;
  markerLayer.classList.toggle('hidden', !onInstalled);
  outlineLayer.classList.toggle('hidden', !onInstalled);

  if (onInstalled) {
    markerLayer.classList.remove('fade-away');
    outlineLayer.classList.remove('fade-away');
    markerLayer.classList.add('fade-in-markers');
    outlineLayer.classList.add('fade-in-outline');
    setTimeout(() => {
      markerLayer.classList.remove('fade-in-markers');
      outlineLayer.classList.remove('fade-in-outline');
    }, 300);
  }

  animating = false;
  calibrateBtn.disabled = currentLayer !== 0;
  updateUI();
}

function animatePartPiece(src, points, className, duration) {
  return new Promise((resolve) => {
    partAnimationLayer.innerHTML = '';
    const piece = document.createElement('div');
    piece.className = `part-piece ${className}`;
    piece.style.backgroundImage = `url("${src}")`;
    piece.style.setProperty('--clip', points.map(([x, y]) => `${x}% ${y}%`).join(','));
    partAnimationLayer.appendChild(piece);
    // Force layout so the animation starts reliably on iOS/Safari.
    piece.getBoundingClientRect();
    piece.addEventListener('animationend', () => {
      piece.remove();
      resolve();
    }, { once: true });
    setTimeout(() => {
      if (piece.isConnected) {
        piece.remove();
        resolve();
      }
    }, duration + 120);
  });
}

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function updateUI(rerender = true) {
  const count = done.size;
  completeCount.textContent = count;
  progressFill.style.width = `${(count / fasteners.length) * 100}%`;

  const layer = layers[currentLayer];
  stepTitle.textContent = layer.title;
  stepText.textContent = calibrating ? 'Drag the markers until each one is centered on the real screw or clip. Tap Adjust again when done.' : layer.text;
  layerBadge.textContent = calibrating ? 'Adjusting' : layer.label;

  prevBtn.disabled = animating || currentLayer === 0;
  nextBtn.disabled = animating || calibrating || (currentLayer === 0 && count < fasteners.length);
  nextBtn.textContent = currentLayer === 0 ? 'Lid Off' : currentLayer === 1 ? 'Filter Removed' : 'Complete';
  calibrateBtn.textContent = calibrating ? 'Done' : 'Adjust';
  calibrateBtn.classList.toggle('active', calibrating);
  adjustHint.classList.toggle('show', calibrating);

  const onInstalled = currentLayer === 0;
  markerLayer.classList.toggle('hidden', !onInstalled);
  outlineLayer.classList.toggle('hidden', !onInstalled);
  calibrateBtn.disabled = animating || !onInstalled;

  if (rerender) renderMarkers();
}

nextBtn.addEventListener('click', () => {
  if (currentLayer === 0 && done.size < fasteners.length) return;
  if (currentLayer < layers.length - 1) setLayer(currentLayer + 1);
});

prevBtn.addEventListener('click', () => {
  if (currentLayer > 0) setLayer(currentLayer - 1);
});

resetBtn.addEventListener('click', () => {
  done.clear();
  currentLayer = 0;
  animating = false;
  calibrating = false;
  partAnimationLayer.innerHTML = '';
  img.classList.remove('lid-flip', 'filter-lift', 'soft-fade', 'fade-in');
  img.src = layers[0].src;
  markerLayer.classList.remove('hidden', 'fade-away');
  outlineLayer.classList.remove('hidden', 'fade-away');
  updateUI();
});

calibrateBtn.addEventListener('click', () => {
  if (currentLayer !== 0 || animating) return;
  calibrating = !calibrating;
  if (!calibrating) saveFasteners();
  updateUI();
});

setOutline();
updateUI();

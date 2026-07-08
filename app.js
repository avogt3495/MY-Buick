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
    text: 'The lid hardware is hidden now because the lid is off. Tap Next Layer to simulate the filter lifting out and fading away.'
  },
  {
    label: 'Filter removed',
    src: 'images/airbox/02_filter_removed.jpg',
    title: 'Step 3: Inspect lower airbox',
    text: 'Clean leaves or debris from the lower housing. Check the intake tube, lower box, and drain area before reinstalling.'
  }
];

// Marker coordinates are percentages of the REAL image area, not the screen.
// These are based directly on Alex's marked photo.
const fasteners = [
  { id: 's1', type: 'screw', label: '1', x: 27.47, y: 32.50 },
  { id: 's2', type: 'screw', label: '2', x: 72.32, y: 40.34 },
  { id: 's3', type: 'screw', label: '3', x: 76.46, y: 69.75 },
  { id: 's4', type: 'screw', label: '4', x: 73.90, y: 88.75 },
  { id: 's5', type: 'screw', label: '5', x: 54.03, y: 89.54 },
  { id: 's6', type: 'screw', label: '6', x: 15.59, y: 90.79 },
  { id: 'clip', type: 'clip', label: 'C', x: 74.00, y: 37.11 }
];

let currentLayer = 0;
let animating = false;
const done = new Set();

const img = document.getElementById('layerImg');
const markerLayer = document.getElementById('markerLayer');
const completeCount = document.getElementById('completeCount');
const progressFill = document.getElementById('progressFill');
const stepTitle = document.getElementById('stepTitle');
const stepText = document.getElementById('stepText');
const layerBadge = document.getElementById('layerBadge');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
const resetBtn = document.getElementById('resetBtn');

function renderMarkers() {
  markerLayer.innerHTML = '';
  fasteners.forEach((f) => {
    const btn = document.createElement('button');
    btn.className = `marker ${f.type === 'clip' ? 'clip' : ''} ${done.has(f.id) ? 'done' : ''}`;
    btn.style.left = `${f.x}%`;
    btn.style.top = `${f.y}%`;
    btn.textContent = done.has(f.id) ? '✓' : f.label;
    btn.setAttribute('aria-label', `${f.type === 'clip' ? 'Rear clip' : 'T25 screw'} ${f.label}`);
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (currentLayer !== 0 || animating) return;
      if (done.has(f.id)) done.delete(f.id);
      else done.add(f.id);
      updateUI();
    });
    markerLayer.appendChild(btn);
  });
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

  const goingForward = next > currentLayer;
  const from = currentLayer;

  // Layer-aware hardware: fastener markers fade away before the lid/filter layer appears.
  if (goingForward && from === 0) {
    markerLayer.classList.add('fade-away');
    img.classList.add('lid-flip');
    await wait(520);
  } else if (goingForward && from === 1) {
    img.classList.add('filter-lift');
    await wait(480);
  } else {
    img.classList.add('soft-fade');
    await wait(220);
  }

  await preload(layers[next].src);
  currentLayer = next;
  img.src = layers[currentLayer].src;
  img.alt = layers[currentLayer].label;

  // Reset outgoing animation and fade the new layer in cleanly.
  img.classList.remove('lid-flip', 'filter-lift', 'soft-fade');
  img.classList.add('fade-in');
  await wait(230);
  img.classList.remove('fade-in');

  // If backing all the way to installed, bring the markers back in after the lid is visible.
  markerLayer.classList.toggle('hidden', currentLayer !== 0);
  if (currentLayer === 0) {
    markerLayer.classList.remove('fade-away');
    markerLayer.classList.add('fade-in-markers');
    setTimeout(() => markerLayer.classList.remove('fade-in-markers'), 300);
  }

  animating = false;
  updateUI();
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
  stepText.textContent = layer.text;
  layerBadge.textContent = layer.label;

  prevBtn.disabled = animating || currentLayer === 0;
  nextBtn.disabled = animating || (currentLayer === 0 && count < fasteners.length);
  nextBtn.textContent = currentLayer === 0 ? 'Lid Off' : currentLayer === 1 ? 'Filter Removed' : 'Complete';

  markerLayer.classList.toggle('hidden', currentLayer !== 0);
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
  img.classList.remove('lid-flip', 'filter-lift', 'soft-fade', 'fade-in');
  img.src = layers[0].src;
  markerLayer.classList.remove('hidden', 'fade-away');
  updateUI();
});

updateUI();

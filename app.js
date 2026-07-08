const layers = [
  { label: 'Installed', src: 'images/airbox/00_installed.jpg', title: 'Step 1: Remove lid fasteners', text: 'Tap each blue T25 screw marker, then tap the red rear clip marker. Markers disappear once the lid is off.' },
  { label: 'Filter visible', src: 'images/airbox/01_filter_visible.jpg', title: 'Step 2: Remove air filter', text: 'The lid fasteners are hidden now because the lid is off. Remove the filter and inspect the seal.' },
  { label: 'Filter removed', src: 'images/airbox/02_filter_removed.jpg', title: 'Step 3: Inspect lower airbox', text: 'Clean leaves or debris from the lower housing. Check the intake tube and lower box for cracks.' }
];

// Percent coordinates inside the photo area. Airbox only.
// Adjust these numbers a few points at a time if a marker needs to move.
const fasteners = [
  { id: 's1', type: 'screw', label: '1', x: 21.5, y: 34.5 },
  { id: 's2', type: 'screw', label: '2', x: 35.5, y: 24.5 },
  { id: 's3', type: 'screw', label: '3', x: 53.5, y: 23.5 },
  { id: 's4', type: 'screw', label: '4', x: 70.5, y: 33.5 },
  { id: 's5', type: 'screw', label: '5', x: 25.5, y: 65.5 },
  { id: 's6', type: 'screw', label: '6', x: 68.5, y: 64.5 },
  { id: 'clip', type: 'clip', label: 'C', x: 80.5, y: 54.5 }
];

let currentLayer = 0;
const done = new Set();

const img = document.getElementById('layerImg');
const shield = document.getElementById('fadeShield');
const markerLayer = document.getElementById('markerLayer');
const completeCount = document.getElementById('completeCount');
const progressFill = document.getElementById('progressFill');
const stepTitle = document.getElementById('stepTitle');
const stepText = document.getElementById('stepText');
const layerBadge = document.getElementById('layerBadge');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
const resetBtn = document.getElementById('resetBtn');

function renderMarkers(){
  markerLayer.innerHTML = '';
  fasteners.forEach(f => {
    const btn = document.createElement('button');
    btn.className = `marker ${f.type === 'clip' ? 'clip' : ''} ${done.has(f.id) ? 'done' : ''}`;
    btn.style.left = `${f.x}%`;
    btn.style.top = `${f.y}%`;
    btn.textContent = done.has(f.id) ? '✓' : f.label;
    btn.setAttribute('aria-label', `${f.type === 'clip' ? 'Rear clip' : 'T25 screw'} ${f.label}`);
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      if(currentLayer !== 0) return;
      if(done.has(f.id)) done.delete(f.id); else done.add(f.id);
      updateUI();
    });
    markerLayer.appendChild(btn);
  });
}

function setLayer(index){
  currentLayer = Math.max(0, Math.min(layers.length - 1, index));
  const layer = layers[currentLayer];
  shield.classList.add('active');
  img.style.opacity = '0.35';
  setTimeout(() => {
    img.src = layer.src;
    img.alt = layer.label;
    img.onload = () => {
      img.style.opacity = '1';
      shield.classList.remove('active');
    };
    // fallback in case cached image doesn't fire onload
    setTimeout(() => { img.style.opacity = '1'; shield.classList.remove('active'); }, 260);
  }, 150);
  updateUI(false);
}

function updateUI(rerender = true){
  const count = done.size;
  completeCount.textContent = count;
  progressFill.style.width = `${(count / fasteners.length) * 100}%`;
  const layer = layers[currentLayer];
  stepTitle.textContent = layer.title;
  stepText.textContent = layer.text;
  layerBadge.textContent = layer.label;
  prevBtn.disabled = currentLayer === 0;
  nextBtn.disabled = currentLayer === 0 && count < fasteners.length;
  nextBtn.textContent = currentLayer === 0 ? 'Lid Off' : currentLayer === 1 ? 'Filter Removed' : 'Complete';

  // Key v2.3 change: hardware markers only exist on installed layer.
  markerLayer.classList.toggle('hidden', currentLayer !== 0);
  if(rerender) renderMarkers();
}

nextBtn.addEventListener('click', () => {
  if(currentLayer === 0 && done.size < fasteners.length) return;
  if(currentLayer < layers.length - 1) setLayer(currentLayer + 1);
});
prevBtn.addEventListener('click', () => {
  if(currentLayer > 0) setLayer(currentLayer - 1);
});
resetBtn.addEventListener('click', () => {
  done.clear();
  currentLayer = 0;
  img.src = layers[0].src;
  updateUI();
});

updateUI();

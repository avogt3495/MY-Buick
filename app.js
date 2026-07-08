const layerImages = [
  'images/airbox/00_installed.jpg',
  'images/airbox/01_filter_visible.jpg',
  'images/airbox/02_filter_removed.jpg'
];

// Locked from the user's marked airbox photo. Percentage-based so markers stay on the same spot as the displayed image scales.
const fasteners = [
  { id:'s1', type:'screw', label:'1', x:20.8, y:36.8 },
  { id:'s2', type:'screw', label:'2', x:39.8, y:27.6 },
  { id:'s3', type:'screw', label:'3', x:59.0, y:30.0 },
  { id:'s4', type:'screw', label:'4', x:74.7, y:42.7 },
  { id:'s5', type:'screw', label:'5', x:72.6, y:63.8 },
  { id:'s6', type:'screw', label:'6', x:34.5, y:69.5 },
  { id:'clip', type:'clip', label:'C', x:84.0, y:72.0 }
];

const state = {
  layer: 0,
  completed: new Set(),
  animating: false
};

const baseImage = document.getElementById('baseImage');
const markerLayer = document.getElementById('markerLayer');
const progressFill = document.getElementById('progressFill');
const counter = document.getElementById('counter');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
const resetBtn = document.getElementById('resetBtn');
const stepTitle = document.getElementById('stepTitle');
const stepText = document.getElementById('stepText');
const outlineSvg = document.getElementById('outlineSvg');
const lidMover = document.getElementById('lidMover');
const filterMover = document.getElementById('filterMover');

function renderMarkers(){
  markerLayer.innerHTML = '';
  fasteners.forEach(item => {
    const btn = document.createElement('button');
    btn.className = `marker ${item.type === 'clip' ? 'clip' : ''} ${state.completed.has(item.id) ? 'done' : ''}`;
    btn.style.setProperty('--x', item.x);
    btn.style.setProperty('--y', item.y);
    btn.textContent = state.completed.has(item.id) ? '✓' : item.label;
    btn.setAttribute('aria-label', item.type === 'clip' ? 'rear retaining clip' : `T25 screw ${item.label}`);
    btn.addEventListener('click', () => {
      if(state.layer !== 0 || state.animating) return;
      if(state.completed.has(item.id)) state.completed.delete(item.id);
      else state.completed.add(item.id);
      render();
    });
    markerLayer.appendChild(btn);
  });
}

function render(){
  const completeCount = state.completed.size;
  const total = fasteners.length;
  const pct = Math.round((completeCount / total) * 100);
  progressFill.style.width = `${pct}%`;

  if(state.layer === 0){
    markerLayer.classList.remove('hide');
    outlineSvg.classList.remove('hide');
    baseImage.src = layerImages[0];
    counter.textContent = `${completeCount} / ${total}`;
    stepTitle.textContent = 'Remove airbox lid fasteners';
    stepText.textContent = 'Tap the 6 T25 screws and the rear clip. Once all are complete, the lid will lift off and reveal the filter.';
    nextBtn.disabled = completeCount !== total || state.animating;
    nextBtn.textContent = 'Lift lid';
    prevBtn.disabled = true;
  } else if(state.layer === 1){
    markerLayer.classList.add('hide');
    outlineSvg.classList.add('hide');
    baseImage.src = layerImages[1];
    counter.textContent = 'Filter';
    stepTitle.textContent = 'Remove air filter';
    stepText.textContent = 'The lid is off. Tap next to lift the filter out of the lower airbox housing.';
    nextBtn.disabled = state.animating;
    nextBtn.textContent = 'Remove filter';
    prevBtn.disabled = false;
  } else {
    markerLayer.classList.add('hide');
    outlineSvg.classList.add('hide');
    baseImage.src = layerImages[2];
    counter.textContent = 'Done';
    stepTitle.textContent = 'Lower housing exposed';
    stepText.textContent = 'Filter is removed. Inspect debris, seal area, lower housing, and intake tube connection.';
    nextBtn.disabled = true;
    nextBtn.textContent = 'Complete';
    prevBtn.disabled = false;
  }
  renderMarkers();
}

function preload(){
  layerImages.forEach(src => { const img = new Image(); img.src = src; });
}

function animateLidOff(){
  state.animating = true;
  nextBtn.disabled = true;
  markerLayer.classList.add('hide');
  outlineSvg.classList.add('hide');
  baseImage.src = layerImages[1];
  baseImage.classList.add('dim');
  lidMover.classList.remove('animate');
  void lidMover.offsetWidth;
  lidMover.classList.add('animate');
  setTimeout(() => {
    lidMover.classList.remove('animate');
    baseImage.classList.remove('dim');
    state.layer = 1;
    state.animating = false;
    render();
  }, 920);
}

function animateFilterOut(){
  state.animating = true;
  nextBtn.disabled = true;
  baseImage.src = layerImages[2];
  baseImage.classList.add('dim');
  filterMover.classList.remove('animate');
  void filterMover.offsetWidth;
  filterMover.classList.add('animate');
  setTimeout(() => {
    filterMover.classList.remove('animate');
    baseImage.classList.remove('dim');
    state.layer = 2;
    state.animating = false;
    render();
  }, 880);
}

nextBtn.addEventListener('click', () => {
  if(state.animating) return;
  if(state.layer === 0 && state.completed.size === fasteners.length) animateLidOff();
  else if(state.layer === 1) animateFilterOut();
});

prevBtn.addEventListener('click', () => {
  if(state.animating) return;
  if(state.layer > 0){
    state.layer -= 1;
    render();
  }
});

resetBtn.addEventListener('click', () => {
  state.layer = 0;
  state.completed.clear();
  state.animating = false;
  render();
});

preload();
render();

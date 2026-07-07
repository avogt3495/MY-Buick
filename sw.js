
const CACHE = 'my-buick-v02';
const FILES = ['./','./index.html','./style.css','./app.js','./manifest.json','./icon.svg'];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(cache => cache.addAll(FILES)));
});
self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});

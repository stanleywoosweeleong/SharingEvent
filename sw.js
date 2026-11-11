// Keeps the talk, its screenshots and icons available offline.
const CACHE = 'woo-talk-202611110859';
const FILES = ["./","index.html","manifest.webmanifest","icons/icon-192.png","icons/icon-512.png","icons/apple-touch-icon.png","shots/jerantut-1.jpg","shots/jerantut-2.jpg","shots/jerantut-3.jpg","shots/comparecast-1.jpg","shots/comparecast-2.jpg","shots/comparecast-3.jpg","shots/rainlog-lab-1.jpg","shots/rainlog-lab-2.jpg","shots/rainlog-lab-3.jpg","shots/rainscore-lab-1.jpg","shots/rainscore-lab-2.jpg","shots/rainscore-lab-3.jpg","shots/enso-1.jpg","shots/enso-2.jpg","shots/enso-3.jpg","shots/ndvi-1.jpg","shots/ndvi-2.jpg","shots/ndvi-3.jpg","shots/duriantreescience-1.jpg","shots/duriantreescience-2.jpg","shots/duriantreescience-3.jpg","shots/durianipm-1.jpg","shots/durianipm-2.jpg","shots/durianipm-3.jpg","shots/amis-1.jpg","shots/amis-2.jpg","shots/amis-3.jpg","shots/agriprotimeline-1.jpg","shots/agriprotimeline-2.jpg","shots/agriprotimeline-3.jpg","shots/offseason-1.jpg","shots/offseason-2.jpg","shots/offseason-3.jpg","shots/tigerstripe-1.jpg","shots/tigerstripe-2.jpg","shots/tigerstripe-3.jpg","shots/agripro-nutrients-1.jpg","shots/agripro-nutrients-2.jpg","shots/agripro-nutrients-3.jpg","shots/chemlog-1.jpg","shots/chemlog-2.jpg","shots/dronedose-1.jpg","shots/dronedose-2.jpg","shots/dronedose-3.jpg","shots/durian-borer-1.jpg","shots/durian-borer-2.jpg","shots/durian-borer-3.jpg","shots/durian-trunk-1.jpg","shots/durian-trunk-2.jpg","shots/durian-trunk-3.jpg","shots/nutrienttriage-1.jpg","shots/nutrienttriage-2.jpg","shots/nutrienttriage-3.jpg","shots/terradurian-1.jpg","shots/terradurian-2.jpg","shots/terradurian-3.jpg","shots/cn-garden-1.jpg","shots/cn-garden-2.jpg","shots/cn-garden-3.jpg","shots/durianexport-1.jpg","shots/durianexport-2.jpg","shots/durianexport-3.jpg"];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', e => {
  const u = new URL(e.request.url);
  if (e.request.method !== 'GET' || u.origin !== location.origin) return;
  if (e.request.mode === 'navigate') {
    // Fresh page when online, cached page when not.
    e.respondWith(fetch(e.request).then(r => { const c = r.clone(); caches.open(CACHE).then(x => x.put('index.html', c)); return r; }).catch(() => caches.match('index.html')));
    return;
  }
  e.respondWith(caches.match(e.request).then(hit => hit || fetch(e.request)));
});

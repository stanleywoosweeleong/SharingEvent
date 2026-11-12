// Keeps the talk, its screenshots and icons available offline.
const SHELL = 'woo-talk-shell-c4236b1022';   // replaced on every new version
const SHOTS = 'woo-talk-shots';             // kept across versions, so "Save offline" survives updates
const FILES = ["index.html","manifest.webmanifest","favicon.ico","icons/icon-192.png","icons/icon-512.png","icons/apple-touch-icon.png"];
const SCOPE = new URL('./', self.registration.scope).pathname;

self.addEventListener('install', e => {
  // cache: 'reload' skips the browser's HTTP cache, so a new version never stores an old page
  e.waitUntil(caches.open(SHELL)
    .then(c => Promise.all(FILES.map(f => fetch(new Request(f, { cache: 'reload' })).then(r => { if (!r.ok) throw new Error(f + ' ' + r.status); return c.put(f, r); }))))
    .then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  // Remove older app shells only; the screenshots cache stays
  e.waitUntil(caches.keys()
    .then(ks => Promise.all(ks.filter(k => k !== SHELL && k !== SHOTS && k.startsWith('woo-talk-')).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request, u = new URL(req.url);
  if (req.method !== 'GET' || u.origin !== location.origin || !u.pathname.startsWith(SCOPE)) return;
  const rel = u.pathname.slice(SCOPE.length);

  if (req.mode === 'navigate') {
    // Only the talk itself; the PDF, the script or a mistyped link go straight to the network
    if (rel !== '' && rel !== 'index.html') return;
    e.respondWith(fetch(req, { cache: 'no-cache' }).then(r => {
      if (r.ok) { const c = r.clone(); e.waitUntil(caches.open(SHELL).then(x => x.put('index.html', c))); }
      return r;
    }).catch(() => caches.open(SHELL).then(x => x.match('index.html'))));
    return;
  }

  if (rel.startsWith('shots/')) {
    // Screenshots: saved copy first; a downloaded one is stored before the request finishes
    e.respondWith(caches.open(SHOTS).then(c => c.match(req).then(hit => hit || fetch(req).then(async r => {
      if (r.ok) await c.put(req, r.clone());
      return r;
    }))));
    return;
  }

  e.respondWith(caches.open(SHELL).then(c => c.match(req, { ignoreSearch: true })).then(hit => hit || fetch(req)));
});

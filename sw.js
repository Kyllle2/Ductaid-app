// Duct-Aid Field Guide — offline service worker
// Bump this version any time app files change to force a cache refresh.
const CACHE_VERSION = 'duct-aid-fg-v1';

const APP_SHELL = [
  '.',
  'index.html',
  'css/style.css',
  'js/data.js',
  'js/app.js',
  'js/img-manifest.js',
  'manifest.webmanifest',
  'assets/icon-transparent.png',
  'assets/logo-full.png',
  'icons/icon-192.png',
  'icons/icon-512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_VERSION).then((cache) => cache.addAll(APP_SHELL)).catch(()=>{})
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_VERSION).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Cache-first for same-origin requests (app shell + illustration images),
// falling back to the network, and quietly caching whatever comes back
// (this is how the ~50 illustration images get cached the first time each is viewed).
self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;

  event.respondWith(
    caches.match(req).then((cached) => {
      if (cached) return cached;
      return fetch(req).then((res) => {
        if (res && res.status === 200) {
          const copy = res.clone();
          caches.open(CACHE_VERSION).then((cache) => cache.put(req, copy));
        }
        return res;
      }).catch(() => cached);
    })
  );
});

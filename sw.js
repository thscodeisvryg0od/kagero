/* ============================================
   KAGERŌ — Service Worker
   Offline cache + PWA install desteği
   ============================================ */

const CACHE_NAME = 'kagero-v1.0.4';

const OFFLINE_URLS = [
  './',
  './index.html',
  './chapters.html',
  './characters.html',
  './world.html',
  './community.html',
  './shop.html',
  './reader.html',
  './css/style.css',
  './css/manga-theme.css',
  './js/main.js',
  './js/i18n.js',
  './js/chapters.js',
  './js/chapters-en.js',
  './js/chapters-jp.js',
  './js/shop.js',
  './assets/favicon.svg',
  './assets/logo.svg',
  './assets/logo-icon.svg',
  './assets/hero-bg.svg',
  './assets/character-yuki.svg',
  './assets/character-ren.svg',
  './assets/character-nishishi.svg',
  './assets/character-mio.svg',
  './assets/character-yuriko.svg',
  './assets/icon-192-v2.svg',
  './assets/icon-512-v2.svg',
  './manifest.json'
];

// Kurulum: dosyaları önbelleğe al
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('[KAGERŌ SW] Caching app shell');
        return cache.addAll(OFFLINE_URLS).catch(err => {
          console.warn('[KAGERŌ SW] Cache partial fail:', err);
        });
      })
      .then(() => self.skipWaiting())
  );
});

// Aktivasyon: eski cache'leri temizle
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((names) => {
      return Promise.all(
        names
          .filter(name => name !== CACHE_NAME)
          .map(name => caches.delete(name))
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch: önce cache, sonra network
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  if (!event.request.url.startsWith('http')) return;

  event.respondWith(
    caches.match(event.request).then((cached) => {
      const fetchPromise = fetch(event.request).then((response) => {
        if (response && response.status === 200 && response.type === 'basic') {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, clone);
          });
        }
        return response;
      }).catch(() => {
        // Offline ise index'e dön
        if (event.request.mode === 'navigate') {
          return caches.match('./index.html');
        }
        return cached;
      });

      return cached || fetchPromise;
    })
  );
});

// Mesaj geldiğinde cache'i güncelle
self.addEventListener('message', (event) => {
  if (event.data === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
/* ============================================
   KAGERŌ — Service Worker
   Offline cache + PWA install desteği
   ============================================ */

const CACHE_NAME = 'kagero-v1.0.11';

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
  './css/reader.css',
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

// Kurulum: dosyaları önbelleğe al (HTTP önbelleğini atlayarak, hep taze kopya)
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => Promise.allSettled(
        OFFLINE_URLS.map((u) =>
          fetch(new Request(u, { cache: 'reload' })).then((res) => {
            if (res && res.ok) return cache.put(u, res);
          })
        )
      ))
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

// Fetch stratejisi:
//  - HTML / CSS / JS / JSON: ÖNCE AĞ (güncellemeler hemen görünür),
//    internet yoksa önbellekten açılır.
//  - Görseller ve diğer dosyalar: önce önbellek.
self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  if (!req.url.startsWith('http')) return;

  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return; // Google Fonts vb. tarayıcıya bırakılır

  const isCode =
    req.mode === 'navigate' ||
    url.pathname.endsWith('/') ||
    /\.(html|css|js|json)$/.test(url.pathname);

  const remember = (res) => {
    if (res && res.status === 200 && res.type === 'basic') {
      const clone = res.clone();
      caches.open(CACHE_NAME).then((cache) => cache.put(req, clone));
    }
    return res;
  };

  if (isCode) {
    event.respondWith(
      fetch(req, { cache: 'no-cache' })
        .then(remember)
        .catch(() =>
          caches.match(req).then((cached) =>
            cached || (req.mode === 'navigate' ? caches.match('./index.html') : Response.error())
          )
        )
    );
    return;
  }

  event.respondWith(
    caches.match(req).then((cached) => cached || fetch(req).then(remember))
  );
});

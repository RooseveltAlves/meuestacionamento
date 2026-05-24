const CACHE_NAME = 'estacionamento-v1';
const ASSETS = [
  'index.html',
  'manifest.json'
];

// Instala e guarda no cache local do dispositivo
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(ASSETS);
    })
  );
});

// Serve os arquivos direto do celular para carregar instantaneamente
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
const CACHE_NAME = 'nexus-v1';
const assets = [
  '/',
  '/index.html',
  // Agrega aquí tus archivos de imagen o sonidos si tienes
];

// Instalar el Service Worker y guardar en caché
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(assets);
    })
  );
});

// Responder desde el caché para máxima velocidad
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
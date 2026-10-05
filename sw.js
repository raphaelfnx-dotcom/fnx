// FNX — service worker (funciona offline após o primeiro acesso)
const V = 'fnx-v3';
const SHELL = ['./', 'index.html', 'manifest.webmanifest', 'firebase-config.js', 'icons/icon-192.png', 'icons/icon-512.png', 'data/ata-mf-2014.json', 'data/bb-2023.json'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(V).then(c => c.addAll(SHELL).catch(() => {})).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== V).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const r = e.request;
  if (r.method !== 'GET') return;
  const u = new URL(r.url);
  // SDK do Firebase: guarda na primeira vez e reutiliza (permite abrir offline)
  if (u.hostname === 'www.gstatic.com') {
    e.respondWith(caches.open(V).then(async c => {
      const hit = await c.match(r);
      if (hit) return hit;
      const net = await fetch(r);
      if (net.ok) c.put(r, net.clone());
      return net;
    }));
    return;
  }
  // Arquivos do próprio app: rede primeiro (pega atualizações), cache como reserva
  if (u.origin === location.origin) {
    e.respondWith(
      fetch(r).then(net => {
        if (net.ok) { const cp = net.clone(); caches.open(V).then(c => c.put(r, cp)); }
        return net;
      }).catch(() => caches.match(r).then(m => m || caches.match('index.html')))
    );
  }
});

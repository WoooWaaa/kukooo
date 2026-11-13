const C='stock-v2',F=['./','./index.html','./manifest.json','./icon.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>Promise.all(F.map(u=>c.add(u).catch(()=>{})))));self.skipWaiting()});
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!=C).map(x=>caches.delete(x))))));
self.addEventListener('fetch',e=>{e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(n=>{const cp=n.clone();caches.open(C).then(c=>c.put(e.request,cp));return n}).catch(()=>caches.match('./index.html'))))});

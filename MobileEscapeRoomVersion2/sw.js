self.addEventListener("install", (event) => {
  console.log("install!");
  event.waitUntil(
    caches.open("v1").then((cache) => {
      return cache.addAll([
        "./",
        "./index.html",
        "./index.css",
        "./index.js",
        "./code.html",
        "./code.css",
        "./code.js",
        "./cryptogram.html",
        "./cryptogram.css",
        "./cryptogram.js",
        "./riddle.html",
        "./riddle.css",
        "./riddle.js",
        "./cipher.html",
        "./section__one.js",
        "./win.html",
        "./lose.html",
        "./end.css",
        "./manifest.json",
        "./images/logo192.png",
        "./images/logo512.png",
      ]);
    })
  );
});

self.addEventListener("fetch", (e) => {
  console.log(`Intercepting fetch request for: ${e.request.url}`);

  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
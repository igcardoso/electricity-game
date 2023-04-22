const staticDevCoffee = "dev-onu-site-v1";
const assets =  [
  "/",
  "/index.html",
  "/css/app.css",
  "/css/home.css",
  "/css/global.css",
  "/css/about_project.css",
  "/media/banner.png",
  "/media/banner_2.png",
  "/media/banner_3.png",
  "/media/banner_4.png"
];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    })
  );
});

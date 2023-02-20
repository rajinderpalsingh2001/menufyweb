'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "178617c39a857c115655ba2bcd5573c2",
".git/config": "e52fd5847716ab37a1af90217ab67b80",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "56a65c52b4b2809213d196d0de258836",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "d46d37e09e72e0b9a27e919f66975673",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d127fda7fae4ec88799543c01ed5ed5d",
".git/logs/refs/heads/master": "47e50999ce60300c5fecfbd47bc5a13c",
".git/logs/refs/heads/webfiles": "d7a329ce35449d6166b59e7dcccf4d91",
".git/logs/refs/remotes/origin/webfiles": "b411e2c8697d144b9b53749031bda213",
".git/objects/06/043a6b414bebd5fb3778eae7306989fa19ffbe": "9ab624330761535628943705e1d0ca6c",
".git/objects/09/388ae15aa22e3e71ebedcea3cfc992143619c6": "b7c65235de0771b4d834e61c50edd26d",
".git/objects/09/7a9b3a4b5f5d34415108233a38382b424fad57": "cda2a6cb6c35d1d54042827eeb0cda4e",
".git/objects/0c/6a8b8df3214cd1c17c00f35f1c77b20ebf22d7": "0415cd3abb87deee159a0871676b4f32",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1d/8b0f34437e139382f592b43c00418c7af11b32": "904ed6a68fce24e9a727e476fd3bebde",
".git/objects/2b/c8ae41702672dd9b466449989dfabfd6a84f52": "b5c9e3b14781c2eee719a989c80d4898",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/38/465e5ae301b3ddefabfe22b188c4fee52182c0": "eebe5c7c15a8b55c3d09dbb81b38a9a6",
".git/objects/3b/6eb5e4e0e58ba39147066adeec1096afe56648": "66765226d3eb6ae3a1ebdf873c89545d",
".git/objects/3b/d95c0b1c7cbe5c04aa6f11da18be50d692b4cc": "761dc918c2f649616ca52b72d2b3ab0e",
".git/objects/3c/139645488108aa98ea7f3c77d80765e0bbe4db": "543218f7e1a25008675285af5324afb3",
".git/objects/3e/96900785b039416afbbc4d5f958f7573bec910": "3817f824f170a403dcdaa20549851880",
".git/objects/40/21620b36b8df2afa16823a22be2503721b1cf5": "bd0c284e74272800427c124a0026e122",
".git/objects/40/826bec7f02a9ab96061774703f76d3a153dce2": "9186e12701c52e6d5703bc0eea34332f",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/45/edaa22e2174fa7016cc0c31f97461b31275067": "e5f0ce04044c1a7e39fead865ea670fd",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/49/938d3f0c07beb7194c72b623c46ebc2acc28a1": "c52513b902ead034bc9a32ad0ecef9b8",
".git/objects/4a/2a267e185e8ee7b67cc5f43e5ecca961d4b0a2": "811ab4be6fe5349dfc3a63dfb9e4175e",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/55/5c5d31d4942d4b15d1a42d79d1c96d7eadc214": "21862d18fa31dea18d824b188cb148ff",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/5c/8beedc1ea6017ba0acdc24dec7150b16c8d547": "28217f769ff8edce26423cbaf381ebe4",
".git/objects/5e/83f92e657a08ad8199f8a694797c45bebd0e0d": "c3f3613f2e575a23c4927c4b5501035f",
".git/objects/5f/d8f027edc49ffafd5432ea80bdcb24e6ba31e6": "b85b62c81d0ca6e79c39e1c99d890476",
".git/objects/63/a73c0581cc0aaaaa8895ac87ed0cfc2f88e926": "4451cbb1cea4e73e132eeee2b54bbc6c",
".git/objects/65/7f7112af6ddc8daad007b89cdb34a0f9fb4230": "62a8747f1d8eefae9aeb93fd307deb24",
".git/objects/66/9aee996f6025f2d7750972a81b4e5022898d1e": "c1d57f3873bf61eb6bd49f2e46e0c179",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/6f/3a2913e199cebe9ace75cf7e5a2818da27fbd3": "45159ad6d14348c955865d0f51914657",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/75/56c9e5adc65cfa5df5f1944bb5130dcc3c7287": "c59512ae5c833ae933c6798c717192c4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7d/351505c9afaaea21db92529c74771f7e152d41": "c4fb236aa7a7c1e2c65eb2964fbe4e1f",
".git/objects/7e/631cc2f8373ef303a99c517efa191e6cf5959a": "19ab026cb084f4224806065300a7498a",
".git/objects/87/11d0ef6bf73c763608178d9ea63975a05afe51": "ebf006c01313f1efd91411c173f9fe80",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/8e/ec0b3b0979e86add5ac077f74322ee67c10c65": "495ae80dbb12b213123940544ab8c724",
".git/objects/90/20a0ed9e2d1c5ca9622c774b0a66e5f4ac6fc4": "31e5a2655fd1b814b26c604067bf11ee",
".git/objects/93/49b9ba25a8bb7d9d4fc96174ece711b5beb2bd": "3e584004532903ed5973fc825449afc0",
".git/objects/99/ae1295fb39a3fda0a521a69915de5f551678b2": "83f78f8d4908c3db64f64c499bc22e4d",
".git/objects/9f/66461677bdbc979541dc3396920cf4a4b55671": "7b23df17a6cdc0dadc620eaf7c4d9498",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a4/bde703f8278aa12251b7251070c4acd762ce71": "f81401c8a31165666f4f50fbd2c35bec",
".git/objects/a7/bd5ec0d2afb54911c4906899904962427b9d3d": "733510fbd1b6dc713104208578b4a430",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/af/18903d15be73673ea4e565cea476ace5a81178": "10f63ace443056121ae45ffc74985e07",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c2/6f7a39e100e28c42a31ee314a0de18bf85f2c5": "56d5d79c39248870c7d3b2a41d2e43e1",
".git/objects/c9/1ad558febca1a1c2950cb2926f058f98364500": "e93ab5a5e5ddf3160537eed0ce790443",
".git/objects/cb/2ca065493bf8cc3c05b683e9db92b0fc55f50c": "6540040a72a6c5bede3f6134d264d581",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/db/054bd76f2c5dad0dbbe86c0a48bccc1b4c4293": "0564306ea4517fa82855ed98b7ac74fa",
".git/objects/e3/a59f3fa0b20282a4d2282e12fb8dfd1facc86b": "132a18c698732c6fb82d10c063e6caf4",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/refs/heads/master": "717811f7cac6bca0c1c54301d75aa6d7",
".git/refs/heads/webfiles": "590e9c3174aa2799b2b32ef0f808d8d9",
".git/refs/remotes/origin/webfiles": "590e9c3174aa2799b2b32ef0f808d8d9",
".vscode/settings.json": "19751b2a32e46d1ba1477f357123a898",
"assets/AssetManifest.json": "4192af154b00cc853c6bf7ffb9e8bc30",
"assets/assets/images/nonveg.png": "18251caaf58ad794904374bca21c9d94",
"assets/assets/images/veg.png": "02b20c50bba5639434a124d111ba22e2",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "550486c80c5e59aaf1ae7ef890b8f467",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b144572674afea1bc9a058b8d0debbc4",
"/": "b144572674afea1bc9a058b8d0debbc4",
"main.dart.js": "af52c2509c6f49bf5a86b5019408ce8a",
"manifest.json": "66e3da1928d70662fd50bda840c1365c",
"version.json": "a2a4a5afb36d940c85a2a446682b9a52"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

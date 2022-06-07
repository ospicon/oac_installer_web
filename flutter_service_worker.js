'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "5725e9ed68d7ff14dc5d5fe806dbceef",
"index.html": "c1403c95724d6916eed191ad59920209",
"/": "c1403c95724d6916eed191ad59920209",
"main.dart.js": "4a38721fa789d3281d1afd2b7a40a75c",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"README.md": "b3327fe5c749e6fdd395ca6900cdfbe4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "b48cc581edd9afca57ca520c6a0927b8",
".git/config": "5a69bbd21a6852fc2e87f2f02689e08c",
".git/objects/59/a0478b361be7bbdff88ef91be97f2ac72ca30a": "0ba44de88058ab5bf7cc5ef08fb7478d",
".git/objects/b3/d1c2e818c84940089c1e103f6c52dfa573e184": "1ae9d921756b5352f76d674282771ba0",
".git/objects/df/37198505e1d1da10e0049f6351d72276859bb9": "c22183a726907813907856082621039e",
".git/objects/bd/a59c60eaeeeb3666768cad2f66085bdeaac0bb": "f5420b71d482905edba0285c44f931f0",
".git/objects/d1/e8c8182bed2ac20dc3f5f459c541ad0514b89e": "a00e9ca185f988f2d3225d081d41e50b",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ae/b7be9064c766fa15010c1d8e7a665351e5d4dc": "593c1793b01dffd07c7cc2b3ab733388",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/51947d80bffff3c6a717ab6306f3414ad1d352": "9b2982e4b57a5edf0127de49413f5a3b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/5083940d151a1fc4122ef8b662aefe890f6c9c": "5f746577bceea0789052e093f100f041",
".git/objects/c7/466d5a54429aae86f9cbfbd7bf8f14cb4600f0": "bd82175fdf3cba3111448155777bf28e",
".git/objects/87/80ec56be86583c51cf4f096ba4e66909e9e026": "62a474c72e2b79dd1f0030ea8456af26",
".git/objects/74/68525958e6e5113762d48db2a98c20abbe1fa5": "7b05c4a95c2a62ea1d3c2a8581a05601",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/9b1b690ca86cf4dc2bfdb0293112563f1dbc5d": "82abc2aa630eb40341907d1556c1148a",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/3a/ac0bdc561f418399409d8b1a5bbff7d251d3dc": "9e8998469bd4e9b0fd71229ca9505e23",
".git/objects/53/9ec6a0c1665e5ae83d006ae7e9661b7126ae16": "970445c80e0e0ecb6af697aeb1b1eea9",
".git/objects/06/776adc753a569c38a9d867c456110ae1e66282": "9e437118f0ec9413520df81f25ffd69b",
".git/objects/d4/0e239d2e1a0f5bbe7fdc36a3bd9a1fad34f3f3": "7a4a5ee90d0ea2db4b5a830238f4c180",
".git/objects/d4/18eaa1deb5989127fbf2fab210eef9eaa4ce2d": "ad0c3e68a9d50f2b57dda50799268309",
".git/objects/b7/5c57f1d76c3ce76ae7d880339572fd759eb08a": "438123f9f627ab5bb5293c14c7b047a9",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/e6/36d1580f4a0cca86107271176b6410f82c2315": "9618b9cda7210c3e189c749d016768b0",
".git/objects/e6/a19b7e5ece2ac88eb12bfa006b7e5e329d255c": "a680e8ed4a93b9a7f4b73f0491ef4c14",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/41/328d0e33640f11c209033945237fd4ff6653c8": "b5a4de856ccf8facb1e70099868410aa",
".git/objects/7a/59d27991834a25d1941f93385199e1b0a3c962": "115b72bca30dd9cf0181cdd63e606208",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "fae73a403a262926a81a6511d463f34c",
".git/logs/refs/heads/main": "a37463c80a780a7ee5380a7140d0fe88",
".git/logs/refs/remotes/origin/main": "0cfdb7edc533fc42f46fcad204f01b74",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "023d1543443d18a4631f0c547221f03b",
".git/refs/remotes/origin/main": "023d1543443d18a4631f0c547221f03b",
".git/index": "6e3ac2ee3c8044ef9e25388efad1cc39",
".git/COMMIT_EDITMSG": "eb260e9ae827821beceeed4104f0ad89",
"assets/images/sleep.png": "229079b36564cebc7534edbcd66fff3c",
"assets/images/breath.png": "62deb215fec5aeb6f109710cbd03d20e",
"assets/images/br.png": "77141d35934bb7bf96defa6e8f8c8fbb",
"assets/images/button.png": "35aae37ded857005d071652686487552",
"assets/AssetManifest.json": "5c83405a031833a06b5b518d0ec916b5",
"assets/NOTICES": "93f5176877a011ae11e62765a0c50bf3",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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

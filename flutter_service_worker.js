'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "bfa0e3ccae512a88cdca696b15fed8ee",
"splash/img/light-2x.png": "bafe9f896b6f0c7cf2ab8254071559a4",
"splash/img/dark-4x.png": "38afe072f9bb5aa12a53fb743135cfb5",
"splash/img/light-3x.png": "a618ed602e0033234ef3a97ef8d7976d",
"splash/img/dark-3x.png": "a618ed602e0033234ef3a97ef8d7976d",
"splash/img/light-4x.png": "38afe072f9bb5aa12a53fb743135cfb5",
"splash/img/dark-2x.png": "bafe9f896b6f0c7cf2ab8254071559a4",
"splash/img/dark-1x.png": "715fd6923404bf9e595dd110d8e79eb9",
"splash/img/light-1x.png": "715fd6923404bf9e595dd110d8e79eb9",
"splash/splash.js": "123c400b58bea74c1305ca3ac966748d",
"splash/style.css": "cbd53cd601ee4cb081e77dd37414f2ff",
"index.html": "9ffcc21d8ba16db7916557c1c394c2df",
"/": "9ffcc21d8ba16db7916557c1c394c2df",
"main.dart.js": "f5097a0075b0b8a880288985cb0e6003",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"favicon.png": "270b137f580b9d939d7e587cb3fe2805",
"icons/Icon-192.png": "b5bd655576e8938982bc834cafc5b080",
"icons/Icon-maskable-192.png": "b5bd655576e8938982bc834cafc5b080",
"icons/Icon-maskable-512.png": "170f56fd7398e16fef07a407edf9a5b7",
"icons/Icon-512.png": "170f56fd7398e16fef07a407edf9a5b7",
"manifest.json": "0827ee3692e8fc0dd73974c754dd46bc",
"assets/AssetManifest.json": "754196ddb302db67e428a925e8402389",
"assets/NOTICES": "46514e98807ca2305cabe44f226ad521",
"assets/FontManifest.json": "f15fe8a3cf362bcc40f69d61460f6169",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/simple_circular_progress_bar/fonts/Roboto-Regular.ttf": "8a36205bd9b83e03af0591a004bc97f4",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/images/airpod_max.png": "f9d36271440d24974be85b1f6118972c",
"assets/assets/images/plus.png": "bcddec8149f2f60708844bea2cfb8a93",
"assets/assets/images/faceid_back.png": "05d2606d8cec18d22cdd5c2967160e9a",
"assets/assets/images/dark_saved_inactive.png": "09906aa568663509ec6c10a6a8acc8fa",
"assets/assets/images/home/home_trackall.png": "ed8b085ba2835d5ab3497bf807063795",
"assets/assets/images/home/home_luxury.png": "2348274ece65ec3c21af61190cef2f30",
"assets/assets/images/home/zappos.png": "2bb1a9b600c4989748ee8ba6ad70a8e5",
"assets/assets/images/home/home_piggy.png": "5f7be85c66fd2a0abc1de9ca659f3560",
"assets/assets/images/home/home_rewards.png": "54685b5fb2f0e2de7c43a8712e4acd9a",
"assets/assets/images/home/home_deal.png": "537a5f394981d1df49ae561d911a866e",
"assets/assets/images/home/home_shop.png": "e4af9c1ae392b470f5dfc3444f1d09f3",
"assets/assets/images/home/home_money.png": "939f4078b3a61df248abc97d6fcc59ec",
"assets/assets/images/home/home_returns.png": "756433732ce5773a941191dde9edc121",
"assets/assets/images/home/home_bell.png": "bb574af088b0415dc151c3e0ffec6d23",
"assets/assets/images/home/home_bomb.png": "7dbdbd2397decd54867b4fc1b7be30c4",
"assets/assets/images/home/nike.png": "8a6c224f9d3cdf00609928f156e0eb21",
"assets/assets/images/home/jcpenny.png": "02bf2176c476350634ac78fb42fdbb34",
"assets/assets/images/home/louis.png": "5ad33bfc7091c5ca2cd11742d0826c4c",
"assets/assets/images/home/home_mirror.png": "4279a8d52a879627afc250183a98a4af",
"assets/assets/images/home/finish_line.png": "24f30e373bfeeb7029a3d0ac4c1a83e5",
"assets/assets/images/home/home_instore.png": "14f397b3328ff8747dfb8488c63c83da",
"assets/assets/images/home/hm.png": "2d434ad69dc9c1139d7d309e9c38bdec",
"assets/assets/images/home/north_face.png": "a90c1691c03dd3cf791c05dfaf4e9dbf",
"assets/assets/images/home/home_watchstop.png": "f288f2503f6924c9a0b9fc63f67c9526",
"assets/assets/images/home/home_cart.png": "1c9742b33917ff1f7a3b06a9541a4451",
"assets/assets/images/home/home_settings.png": "0afe8b667a3ff5fe86060ef9366baba2",
"assets/assets/images/home/home_edit_fav.png": "e6f80a1e6c1bf153b1607b5d7a8314e3",
"assets/assets/images/home/tory.png": "068d5187dd59cf50c55c4fb1e7f2e437",
"assets/assets/images/home/lulus.png": "4745391cec58a30392c2b91c0117502a",
"assets/assets/images/home/home_onitsway.png": "3e514b283c477726f5cf756b16ccb10d",
"assets/assets/images/home/home_allorder.png": "e4f2a6415215a842b2374b1c89a7e4a8",
"assets/assets/images/home/coach.png": "8de2afbdbdebf1c7283e37f907e4b322",
"assets/assets/images/home/amazon.png": "074e517b0af0f9e983a2ba78b7c82ba0",
"assets/assets/images/home/home_1xcards.png": "5cef7a6bf83a30594ece2bd56d138775",
"assets/assets/images/home/home_saved.png": "9b1d40e7b1c270e7fa9910c59902b9e4",
"assets/assets/images/home/home_bogo.png": "157f4ca79d880255dbe360107bdc1f31",
"assets/assets/images/home/home_delivered.png": "d78613e1dfac97dcc0e5a797b3ce496f",
"assets/assets/images/home/adidas.png": "bcad014f440c13ae5c92ae247a304efe",
"assets/assets/images/share_feedback.png": "b95e97ccf241c70beca0e4e962bd8348",
"assets/assets/images/home_active.png": "72ff5cc30b8058b707b3093e0dbec23c",
"assets/assets/images/addcard_back.png": "bb93ba4634d8dc70acc5b6d000ed35f7",
"assets/assets/images/flag.png": "0604e941d1d907bf79a623f89b355ea9",
"assets/assets/images/dashboard.png": "44d90c4bb67c720481efd7fe6b2d0612",
"assets/assets/images/reward_shape.png": "2cb930661507293f66ff839e93c070f8",
"assets/assets/images/danmark.png": "1393c9acd2fe6b0965bffc7684e0b3e8",
"assets/assets/images/discover.png": "cbac3474f12af825cbed651aef6b6f7d",
"assets/assets/images/new_purchase.png": "7869c5324a817a3d4aae51b8828e41e1",
"assets/assets/images/pin_lock.png": "fe67895b0b19dd2e3dac442f56ab8bff",
"assets/assets/images/saved_inactive.png": "a7bb62369ea22dbd7f83aa89d11bfedb",
"assets/assets/images/us.png": "0ce8d5de7fc7fbfa73e8da33783c5306",
"assets/assets/images/giftbox.png": "0edd7cffc3c6860dd259506522a08710",
"assets/assets/images/app_icon.png": "93a7d7644268395bb761a2151da62206",
"assets/assets/images/purchase_power_success.png": "26b80893e73c86711a87d2b7ac9bad6e",
"assets/assets/images/dark_home_inactive.png": "602b715804b45dbb1968ab8cd5e03a8c",
"assets/assets/images/dummy_collection_2.png": "d05375217e9f4d93742037f8d95c6b89",
"assets/assets/images/australia.png": "a299ef46a2f8a5c8dfee93276e4fa347",
"assets/assets/images/outlook.png": "f375413308d8a2c490fff6e75c36d239",
"assets/assets/images/apple_watch.png": "d5a5753c594087aa841445a5df4b5b4a",
"assets/assets/images/thumbs_up_alt.png": "254d0726dec72e6d45509b1549045df4",
"assets/assets/images/belgium.png": "84058683fec391d66085b0668eff5228",
"assets/assets/images/favourite.png": "e8858728bcba075689d63dcfa86c2c41",
"assets/assets/images/money_inactive.png": "ddfe3cfa9febdcec014655cd74d0d2c5",
"assets/assets/images/visa.png": "8a44c58098dbe62c0c4d30f5914be2ec",
"assets/assets/images/gmail.png": "7a72f06d0f77d18257e53da2b5e9e69c",
"assets/assets/images/pin_direction.png": "0aa2493a5a46e351cd717cc31d429194",
"assets/assets/images/more_share.png": "261f55ea864543e96d48ed61ef177da3",
"assets/assets/images/check_republic.png": "cfaa9e90624acb4da9c1e03a1fe9339f",
"assets/assets/images/cloth.png": "8e689743592cef3403067b19643d307c",
"assets/assets/images/customer_service.png": "a2a53b00eedb26ceeba3cbafae3b163c",
"assets/assets/images/saved.png": "83866dde6b109c611fd9bf951ec8c034",
"assets/assets/images/dark_saved_active.png": "fedd87303666868d2dac6989da9689ad",
"assets/assets/images/create_col_back.png": "e50451b2ea1736ec340a639bda1778ec",
"assets/assets/images/name_logo.png": "a756571ed208ea4faf9b7fc82f197267",
"assets/assets/images/connect_email_back.png": "253c67288bdad636a7082e7854be283c",
"assets/assets/images/dark_money_inactive.png": "103db17625dfad5d95cbc6423e12fa12",
"assets/assets/images/shoe.png": "85436c59fc0151bfdbacedaa3330ba3b",
"assets/assets/images/dark_money_active.png": "38782214e4df04c04f947822a038ee34",
"assets/assets/images/search.png": "d121394967d624568e10a526583c1e95",
"assets/assets/images/home_inactive.png": "f2f18957d867263967eefbdf6a9fd884",
"assets/assets/images/purchase_power_back.png": "3c6f344b45ef68b58ce6ec0076595d18",
"assets/assets/images/canada.png": "c3771d0c52e29da73fe564e0b683dc2a",
"assets/assets/images/timer.png": "affc41dab81396a5370a97a9077cc788",
"assets/assets/images/pin_success.png": "97dfb198c5f239f1f552c4ad526c74a7",
"assets/assets/images/notification.riv": "51c809b1e4dd0d4379253860115defd6",
"assets/assets/images/mirror.png": "92de1e684d191e284f9374c5f56b9101",
"assets/assets/images/iphone.png": "d28aaff58112a6f050fd6f0dd0bc888b",
"assets/assets/images/no_interest.png": "1ef47c363288a45a617fcc67ff7db91c",
"assets/assets/images/bookmark.png": "b3e56cc9d32b1bec61b2c3f4856b2f03",
"assets/assets/images/germany.png": "2fd05978dde862f75eb8339386c79a48",
"assets/assets/images/dummy_collection.png": "2ad6639a0eff8ee78dc2396cc9fe4a94",
"assets/assets/images/instore_back.png": "3227123f99245202c3d71d648c77f1d6",
"assets/assets/images/car.png": "9ffcd1e83ba1bc983865dcffa18091f9",
"assets/assets/images/share.png": "08f8f56f9d9d8e1f93d389f138bec906",
"assets/assets/images/spain.png": "42a13be052a052d2add7ed72b805c6f4",
"assets/assets/images/product_deal.png": "41d5adf86d3f20b08f73054d52138f1a",
"assets/assets/images/deal.mp4": "160a6c0c6784c4df536b21c108166dea",
"assets/assets/images/dummy_map.png": "7157ed40a8a57b0027ee480a3c588761",
"assets/assets/images/bangladesh.png": "8385a8a428e714bc11b0990cdeeedded",
"assets/assets/images/france.png": "367bc48dad4275ffaade54e432339b5a",
"assets/assets/images/app_logo.png": "3322e55bdd6b78d6f63f92bb9cca0635",
"assets/assets/images/browse_history.png": "0786ff5282cee9ec17fcc3b111732cf6",
"assets/assets/images/yahoo.png": "c5defc414e9351f97aa2eb44ec17732e",
"assets/assets/images/allow_location_back.png": "9686e08cbcdec99cce9f2077839ac403",
"assets/assets/images/order_status.png": "fee6bc736b5968ebeba4388699865c71",
"assets/assets/images/dark/faceid_back.png": "f9d7300d414b01f66decf3aaab41c10a",
"assets/assets/images/dark/pin_success.png": "ae8cf39421c6b88b3a162442b7f503b3",
"assets/assets/images/dark/dummy_map.png": "c87092faf692d613e93d1ae2bedcef4c",
"assets/assets/images/dark_home_active.png": "56fb7a8ca9de917fcfc96b5d7da40e63",
"assets/assets/images/saved_active.png": "d37489be115630657f321a826d5c3e08",
"assets/assets/images/thumb_up.png": "b76b99ca4f9af78e8e6c526fd9b57204",
"assets/assets/images/mastercard.png": "7d3a5e7ce5527de46e7aec3a20500c4e",
"assets/assets/images/money_active.png": "1eaa62c922d63313f0f11ed7d7feb541",
"assets/assets/images/google.png": "dbfe8a38298c870ef2b34c3bbe21644e",
"assets/assets/images/unpaid.png": "2a2d84e743daaf8010651386644246d8",
"assets/assets/images/pay_due.png": "9d56e6bf6c267e286bfd037e92c5af5e",
"assets/assets/images/marker.png": "de13492b98006b9b723fcc45d4e58aa5",
"assets/assets/images/bag.png": "f58633f1e7d238026e6b7d0c3f983387",
"assets/assets/images/reload.png": "2594864faa795895301263137743dabd",
"assets/assets/images/american_express.png": "a8e0f8567d2e089f7a89f5acbc1b05d0",
"assets/assets/images/review_back.png": "b429bc0cc8f6f89951437dc762a76e04",
"assets/assets/images/close.png": "01f536033161b61377407c553f8f8eac",
"assets/assets/images/package_track.png": "1912833ba9c103a78b6c71c9f9311075",
"assets/assets/videos/video1.mp4": "efdb6426d577f184daea5b570f5ee376",
"assets/assets/videos/video3.mp4": "06ffd27074cdb2f7ce9487245a6d446a",
"assets/assets/videos/video2.mp4": "6dea91fd4f72e56e5db337a93e48f9a9",
"assets/assets/fonts/GothicFB-Bold.otf": "b66de3b87d05527a2ca4fe5307adaf08",
"assets/assets/fonts/GothicFB-Medium.otf": "4d876eb65b803e93b413b989e8ccc558",
"assets/assets/fonts/SofiaPro-Regular.otf": "bd0a6d0d1ce78e95fb1629450636bc6f",
"assets/assets/fonts/SofiaPro-Medium.otf": "b307c6ce73c3d573c228ecd5de070f45",
"assets/assets/fonts/GothicFB-Regular.otf": "5a52a9d0daf757be610b1b7e0594b7c2",
"assets/assets/fonts/SofiaPro-Bold.otf": "28b75bc6b4d35b59ecf476db59bc4ecf",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
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

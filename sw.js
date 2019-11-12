importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/20c6d0dd8bc545a6a27e.js",
    "revision": "48c4f19265be36589f65fbcd41288953"
  },
  {
    "url": "/_nuxt/289dcb639770607c00d3.js",
    "revision": "7282430098a33398b0865e2f7f72d048"
  },
  {
    "url": "/_nuxt/60bda8568259569a1206.js",
    "revision": "ffb40fcd10f36b8de4b1e84a79eb9cae"
  },
  {
    "url": "/_nuxt/b999597d4a97b8173206.js",
    "revision": "5860c3c353eb2ef9aa43a44570600d36"
  },
  {
    "url": "/_nuxt/e51be0a2cfe3fa7a8972.js",
    "revision": "5506e1c2ef25573e050543180b2d9080"
  }
], {
  "cacheId": "dnhynh",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')

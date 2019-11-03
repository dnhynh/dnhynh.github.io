importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/135342877d97f060cc1f.js",
    "revision": "2101f5a27f2efaaa98b5675b261011da"
  },
  {
    "url": "/_nuxt/676c751bf903c6c82acb.js",
    "revision": "0f72c3709b28f77d82183786cb717d42"
  },
  {
    "url": "/_nuxt/799f8662f78bab6d2f4b.js",
    "revision": "c6fd92aae189d6878714fcc624631360"
  },
  {
    "url": "/_nuxt/94027fe1cb9f4ddd2025.js",
    "revision": "f7aba4854641a116aef0fc3b5aeb4625"
  },
  {
    "url": "/_nuxt/f457059035404585b1d3.js",
    "revision": "8003448d68c5c0532ec9f299339b3195"
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

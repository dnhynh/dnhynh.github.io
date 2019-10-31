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
    "url": "/_nuxt/7b0dde2ca4fea12c4179.js",
    "revision": "c8d17df0798c24b42e14aa473d5b0937"
  },
  {
    "url": "/_nuxt/f644051e4bac1516d263.js",
    "revision": "eea58c04aa4a3f58850842e82f03d47e"
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

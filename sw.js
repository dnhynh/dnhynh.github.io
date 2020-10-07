importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0e886a6fea1f6992e5e1.js",
    "revision": "c1880c1d2490f0ccf93f56fa615dd4e4"
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
    "url": "/_nuxt/9595122b6673eb22028b.js",
    "revision": "4015566ed294f8546ae21e1f9180fa0e"
  },
  {
    "url": "/_nuxt/ab41a9a5f015fdfea49a.js",
    "revision": "4d23a017bf071ce3dcaec63b662bd458"
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

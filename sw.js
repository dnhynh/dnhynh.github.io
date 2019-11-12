importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/1e6cc080d8ec82d64749.js",
    "revision": "3a997609078f038cb7a7bda85f5dc61c"
  },
  {
    "url": "/_nuxt/20c6d0dd8bc545a6a27e.js",
    "revision": "48c4f19265be36589f65fbcd41288953"
  },
  {
    "url": "/_nuxt/55c708638b1c959886e6.js",
    "revision": "40f25443747d86f04765a1d2658cf568"
  },
  {
    "url": "/_nuxt/e51be0a2cfe3fa7a8972.js",
    "revision": "5506e1c2ef25573e050543180b2d9080"
  },
  {
    "url": "/_nuxt/f59da0de764e8d8fe523.js",
    "revision": "4c27ca5e151801f17c0bcee5117a690b"
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

---
sidebar_position: 4
---

# PWA/TWA

As the support for the service worker api grows, going PWA by default is an absolute must. The approach, however, would vary from one app to another.

### Quick reloads, performance, transitions, and strong caching

Performance, transitions, and caching depend significantly on the app's internal architecture and the stack under the hood. Shared below is a [sample code](/blog/mobile-apps-with-red-goose#pwa-or-twa) of a generic service worker that allows **strong caching** of static content. 

```js title="Service Worker API"
(function (λ) {
   const version = 'xx.yy.zz'
   const APP_CORE_CACHE = `appCoreCache::${version}`
 
   /* Other SW lifecycle events here. */
 
   /* Cache the app screen locally. */
   λ.addEventListener('fetch', function (event) {
       const request = event.request
       if (request.method !== 'GET') return // Ignore all non-GET requests.
       if (request.url.indexOf('/random-url') !== -1) return // Bypass a request.
       if (request.headers.get('Accept').indexOf('text/html') !== -1) {
           if (request.url.includes(`/someKey/`)) {
               const localizedURL = `thePathOfTheLocalizablePage`
               const hijackedRequest = new Request(localizedURL, {
                   method: 'GET',
                   headers: new Headers({
                       'Content-Type': 'text/html',
                       headers: request.headers,
                       mode: request.mode == 'navigate' ? 'cors' : request.mode,
                       credentials: request.credentials,
                       redirect: request.redirect
                   })
               })
               event.respondWith(caches.match(hijackedRequest).then(response => response || fetch(hijackedRequest).then(response => {
                   if (!response || response.status !== 200 || response.type !== 'basic') {
                       return response
                   }
 
                   const responseToCache = response.clone()
                   caches.open(APP_CORE_CACHE)
                       .then(cache => {
                           cache.put(hijackedRequest.url, responseToCache)
                       }).catch(err => {
                           console.log('[SW] Cache failure =>', err)
                       })
                   return response
               }).catch(err => {
                   console.log('[SW] HTML section error', err)
                   return caches.match(request).then(response => response || caches.match('/offline'))
               })))
           }
       }
   }
})(self)
```

Cache the whole page and never hit the server for the same resource again! One can introduce similar progressive enhancements and above-the-fold optimizations that are not only simple to implement but also feel fast to the end user. These will also lower the number of trips to the server and reduce the hosting load. 

We at Red Goose can help you on this front by going in-depth for your app. 

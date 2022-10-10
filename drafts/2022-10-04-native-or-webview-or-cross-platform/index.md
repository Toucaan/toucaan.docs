---
slug: native-or-webview-or-cross-platform
title: Go Native or WebView?
authors: [marvin]
tags: [mobile, apps, technology]
---

https://tonyowen.medium.com/react-native-sucks-or-does-it-15ee3cbeecc4

---

:::caution Why was this essay split away from the HN post and published here?
This post has been published here on behalf of [Red Goose](https://goose.red) since the original launch post at HN was too long, and much of that extra length was due to Toucaan.
:::

Hello there HN reader! 👋🏻

Welcome to the [Toucaan Blog](https://toucaan.com/blog). 

![MF Red Goose](./red-goose-banner.jpg)

<!--truncate-->

Here we'll discuss the three main barriers one must overcome to develop a natively performant mobile app using the web stack.  

1. App-specific design language,
2. Smooth transitions or fancy animations, and,
3. Solving compute-heavy processes that scale to millions of users. 

### App DSL 
Among the three differences between apps and the mobile web, the most challenging one to reconcile is the design language of apps. 

The DSL of a mobile app is significantly different from a mobile website, even though responsive design tries to mimic apps. 

Why so? You may ask.

It is because **the responsive design methodology is encumbered by desktop thinking**. Are we on mobile? Yes? Let's squeeze that menu into a tiny hamburger and shrink that header, the footer, and all the other content into a narrow copy. That's it. 

That's not how mobile apps are designed. 

### Let's Go Intrinsic 

We'll talk about Toucaan here in a second, but first, some code.

Consider a [css router](../../docs/core-concepts/router) like so: 

```css title="Check the physical orientation of the viewport first:"

    /* Separate your stylesheets along              */
    /* the two axes of intrinsic design [10]:       */
    /* The portrait ⇋ landscape switch.             */
    @import url('/toucaan/router/portrait.css') only screen and (orientation: portrait);
    @import url('/toucaan/router/landscape.css') only screen and (orientation: landscape);
```
Only one of the two stylesheets will be _prioritized_ and delivered to the user's device based on matched orientation. 

For a mobile, let's say it is the portrait axis:

```css title="See https://toucaan.com/docs/core-concepts/router"
/* The portrait-axis router. */
/* The file at --> ./toucaan/router/portrait.css */


/*** Route-in for @import watch.css ***/
/*** a. Apple Watch 6 for men = 44mm. Resolution: 368 x 448 pixels ***/
/*** b. Apple Watch 6 for women = 40mm.  324 x 394 pixels   ***/
/*** c. Moto 360 Watch = 46mm. Resolution: 360 x 330 pixels ***/

/*** DO NOT MAKE ANY CHANGES ON THIS FILE WITHOUT ***/
/*** UNDERSTANDING THE SCOPE OF INTRINSIC DESIGN. ***/  

/* Wearables */
@import url('../../dist/watch.css') 
    (max-device-width: 368px) 
    and (max-device-height: 448px) 
    and (-webkit-device-pixel-ratio: 3)
    and (hover: none) 
    and (pointer: coarse)
    and (min-width: 200px);

/*** Route-in or @import mobile.css next. ***/
/*** 1. iPhone 4 to iPhone Pro Max 12. Resolution:  ***/
/*** 2. Android phones, including Galaxy Fold @280px ***/

/* Smartphones */
@import url('../../dist/mobile.css') 
  (min-device-width: 280px) 
  and (max-device-width: 540px)
  and (-webkit-min-device-pixel-ratio: 2)
  and (hover: none) 
  and (pointer: coarse), 
    (min-device-width: 414px) 
    and (max-device-width: 812px) 
    and (-webkit-min-device-pixel-ratio: 3)
    and (hover: none) 
    and (pointer: coarse),
      (min-device-width: 360px) 
      and (-webkit-device-pixel-ratio: 4)
      and (hover: none) 
      and (pointer: coarse);

/*** Route-in or @import tablet.css next. ***/

/*** 1. iPad 1, 2, Mini, Air, 3, 4 and Pro 9.7, Pro 10.5, Pro 12.9 ***/
/*** 2. Android tablets: Galaxy, Nexus, and Huawei ***/
/*** 3. Kindle Fire ***/

/* Tablets */
@import url('../../dist/tablet.css') 
  (min-device-width: 720px) 
  and (max-device-width: 1024px) 
  and (-webkit-min-device-pixel-ratio: 1) 
  and (hover: none) 
  and (pointer: coarse), 
    (min-device-width: 768px) 
    and (max-device-width: 1366px) 
    and (-webkit-min-device-pixel-ratio: 2) 
    and (hover: none) 
    and (pointer: coarse), 
      (min-device-width: 601px) 
      and (max-device-height: 1536px) 
      and (-webkit-min-device-pixel-ratio: 1.331) 
      and (-webkit-max-device-pixel-ratio: 1.332)
      and (hover: none) 
      and (pointer: coarse), 
        (min-device-width: 800px) 
        and (max-device-width: 1600px) 
        and (-webkit-min-device-pixel-ratio: 1.5)
        and (hover: none) 
        and (pointer: coarse);

/*** Route-in or @import vehicle.css if required. ***/
/*** Older Tesla Model S and a few other EVs ***/

/* EVs */
/* @import url('../../dist/vehicle.css') 
  (min-device-width: 1200px) 
  and (max-device-width: 1920px) 
  and (-webkit-min-device-pixel-ratio: 1) 
  and (hover: none) 
  and (pointer: coarse); */


/*** Route-in or @import desktop.css next. ***/
/*** Vertically mounted Retina & non-retina Screens ***/

/* Desktops */ 
@import url('../../dist/desktop.css') 
  (min-device-width: 720px) 
  and (max-device-height: 1920px) 
  and (-webkit-min-device-pixel-ratio: 1)
  and (hover: hover) 
  and (pointer: fine),
    (min-device-width: 900px) 
    and (max-device-width: 2880px) 
    and (-webkit-min-device-pixel-ratio: 2) 
    and (min-resolution: 192dpi)
    and (hover: hover) 
    and (pointer: fine);

/*** Route-in or @import television.css next. ***/

/* Limited browser support. */
/* Vertically mounted television or projector. */
@import url('../../dist/television.css') 
  (min-device-width: 1440px) 
  and (max-device-width: 4320px) 
  and (hover: none) 
  and (any-pointer: coarse);


/* 
1280x720 — HD / 720p.
1920x1080 — FHD (Full HD) / 1080p.
2560x1440 — QHD/WQHD (Quad HD) / 1440p.
3840x2160 — UHD (Ultra HD) / 4K 2160p.
7680×4320 — FUHD (Full Ultra HD) / 8K 4320p.

Televisions on the lower end of the market do not sport a worthwhile web browser. Web browsers on TVs on the high end of the market are still catching up on standards—poor support for CSS Grids, level 4 media queries, and many other CSS features.

WebOS from LG is pointer-driven.
*/
```

If the user is on a smartphone, the sub-router would match the second block of code and serve the corresponding stylesheet `mobile.css` to the user.

Now on `mobile.css,` you can go after an "app-like" environment with the following MQ:

```css
@media all and (display-mode: fullscreen) {
  :root {
        /* Design for the true mobile app experience here. */
   }
}
``` 

There are a few more tips w.r.t mobile app design that you can refer [here](./../../docs/mobile-apps/general-tips).

### Meet Toucaan

Now that you know how the css router works meet [Toucaan](https://toucaan.com).

To wit, Toucaan is a **stack-agnostic vanilla styling framework for mobile apps and the web**. It can be used to design intrinsic interfaces for the web and mobile apps using the plain old web stack.
Toucaan has been built ground up to mitigate the limitations of responsive web design. Help you adopt a more scalable intrinsic design principle for your web app and double it up as your mobile app. 

Native app design is probably the most crucial piece to go after. The second piece to go after for a zippy fast, **even offline-ish**, experience is caching.
 

### PWA or TWA

Going PWA with the web view is a given. But the approach might differ from one app to another. Google's Playstore, for example, allows TWA submissions and generally has better support for the [Service Worker API](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API). But Apple is catching up on this front as well, and we should get there soon enough. 

Since the strategy of caching depends significantly on an app's internal architecture and the stack, the burden of its optimization is left as an exercise for the client to explore later on. Shown below is a sample of a generic service worker that allows "strong caching" of a full page: 

```js title="Service Worker API."
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
               const localizedURL = `the/path/of/the/page/to/cache`
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
                           cache.put(hijackedRequest.url, responseToCache) // Cache the whole page!
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

Save the whole page and never hit the server for the same resource again! One can introduce similar progressive enhancements and above-the-fold optimizations that are not only simple to implement but also speed up the round-trip for the end user, lowering the number of subsequent requests to the server and the hosting load. Benefit on both the web app and the mobile app.

Get in touch with [Red Goose](https://goose.red/support) if you want help w.r.t design and delivery optimizations for your business.

## WebAssembly 
The third and last step would be to offload the compute-heavy processes to another language, such as Rust or C++. And then, use WebAssembly to import the resulting bytecode to the client-side to process locally. 

Figma's take on this topic is super helpful here, but it is likely that most apps wouldn't require sprinkling webassembly into the mix. Just the two steps discussed above–intrinsic styling and progressive enhancements– would be more than enough for an ideal mobile experience. 

Imagine, aside from the possibility of lowering your yearly app development and maintenance cost, once approved on the app stores, your app will utilize the "live interface" of the web app that you have full control over. Push out subsequent updates to your apps without having to go through the approval process again. How cool is that?!

Does this strategy with a web view on top make sense? 

What are you thinking?  

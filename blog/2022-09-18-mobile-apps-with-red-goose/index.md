---
slug: mobile-apps-with-red-goose
title: Mobile Apps with Red Goose
authors: [marvin]
tags: [red-goose, mobile, apps, design]
---

---

Hey there! 👋🏻

Welcome to the [Toucaan Blog](https://toucaan.com/blog). 
You're probably here via HN, and looking for the solution between web and mobile apps using [Red Goose](https://goose.red). Follow along! 

![MF Red Goose](./red-goose-banner.jpg)

<!--truncate-->

## Toucaan
To wit, Toucaan is a **stack-agnostic vanilla styling framework for mobile apps and the web**. Meaning it doesn't require javascript or any other frontend library to operate. And it can be used to design **intrinsically tuned web and mobile apps** using the web stack.

## The HN Post
As discussed in the post at HN, there are three major areas where mobile apps and differ from the mobile web: 

1. An app-specific design language,
2. Smoother transitions or animations, and,
3. Solving compute-heavy processes that scales to millions of users. 

If we are able to _somehow_ bridge the gap on these three fronts, we can do away with at least one (or two) extra stacks of code from our day to day operations. And save hundreds of thousands of dollars on design, development, and maintenance of all the repeated code for a business. 

:::tip
Remember, every single line of code carries an overhead cost. It adds not only to the technical debt of the engineering team but also to the cost of operations and maintenance over the years. 
:::

## App DSL 
Among the three differences between apps and the mobile web, the most challenging one to reconcile with is the design language of apps.

The DSL of mobile apps has been significantly different from mobile web under responsive design. Even though responsive has always tried to mimic the design language of the apps, it is still encumbered by desktop thinking. 

In several situations, the responsive approach fails to match the expected experience on a mobile and barely keeps up with the advancing standard of UX/UI of a native app. Consider losing the header and the footer bars from the mobile view of your website, for example! 

Toucaan has been commissioned ground-up (without assuming requirement of normalization or reset that flow from the desktop era) to mitigate many of the limitations of RWD. It is new expansive but featherweight css framework you help you adopt intrinsic design for your web apps that double as mobile apps. Head over here to [review its documentation](/docs/getting-started).

Here is a quick peek at how it works. Consider a css router like so: 

```css title="See docs/configuration"
    /* Separate the application style along */
    /* the two axes of Intrinsic Design [10]: */
    /* The portrait ⇋ landscape switch. */
    @import url('/toucaan/router/portrait.css') only screen and (orientation: portrait);
    @import url('/toucaan/router/landscape.css') only screen and (orientation: landscape);
```
And then on the portrait axis:

```css title="See docs/core-concepts/router"
/*** Portrait or y-axis. ***/
	/* The portrait-axis router. */
	/* The stylesheet at --> ./toucaan/router/portrait.css */
	 
	/*** Route-in for @import watch.css ***/
	/*** a. Apple Watch 6 for men = 44mm. Resolution: 368 x 448 pixels ***/
	/*** b. Apple Watch 6 for women = 40mm. 324 x 394 pixels ***/
	/*** c. Moto 360 Watch = 46mm. Resolution: 360 x 330 pixels ***/
	 
	/* Wearables */
	@import url('../../dist/watch.css') 
	 (max-device-width: 368px) 
	 and (max-device-height: 448px) 
	 and (-webkit-device-pixel-ratio: 3)
	 and (hover: none) 
	 and (pointer: coarse)
	 and (min-width: 200px);
	 
	/*** Route-in or @import mobile.css next. ***/
	/*** 1. iPhone 4 to iPhone Pro Max 12. Resolution: ***/
	/*** 2. Android phones, including Galaxy Fold @280px ***/
	 
	/* Smartphones */
	@import url('../../dist/mobile.css') 
	 (min-device-width: 280px) 
	 and (max-device-width: 411px)
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
	 
	/*** Route-in or @import tablet.css next, and so on… ***/
```

The router above isolates mobile from all other device categories and lets the designer take on mobile with a native mindset. It also allows designing and development according to the orientation of use for the app, which may or may not affect the layout for your app. 

More literature on Intrinsic Design and requisite tooling are available on the following [repository](https://github.com/Toucaan) (an open source work in progress): 

https://github.com/Toucaan/toucaan 

## PWA or TWA

Going PWA here is an absolute must, but the approach would differ from one app to another. Google's Playstore allows TWA/PWA submissions and has–in general–better support for the the [service worker api](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API). Fortunately, Apple is catching up on this front as well lately and it should get there soon allowing developers to take advantage of web-based mobile apps for good.  

Since application performance, screen transitions, and caching depend significantly on the app's internal architecture and the underlying stack, the burden of its optimizations is left with the owner. 

Below is a sample code of a generic service worker that allows "strong caching" of static content, just as an example: 

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

Cache the whole page and never hit the server for the same resource again. 

One can introduce similar progressive enhancements and above-the-fold optimizations that are not only simple to implement but also feel fast to the end user. These will lower the number of subsequent trips to the server and reduce the hosting load. 

Red Goose can help you on architecture optimizations for your business with its in-depth Intrinsic Design Report. Get in touch with them [here](https://goose.red/support).

## WebAssembly 

The third and the last step would be to offload the compute-heavy processes to another language such as Rust or C. Use WebAssembly to import the resulting bytecode on the clientside and execute locally. 

Figma's take on this topic [5] is super helpful here, but we suspect that most apps wouldn't require adding webassembly into the mix. Just the two steps discussed above–intrinsic styling and progressive enhancements would be enough for an ideal mobile app experience. 

Imagine, aside from the possibility of lowering your yearly development and maintenance costs, once approved on the app stores, will your mobile apps then utilize a "live web version" of interface that you can update without going through the store approval process again. How cool is that?

Does this strategy appeal to you? What are you thinking?  

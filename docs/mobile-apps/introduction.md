---
sidebar_position: 1
---

# Introduction
Toucaan makes it possible to create "app-like" layouts for mobile apps using plain old HTML and CSS. 

The central idea of [intrinsic design](https://toucaan.com/blog/intrinsic-web-design) is to create user interfaces that "belong to" a device, and what better way for an app to belong to mobile than by making its user experience truly app-like. 

### Responsive Design
There are a number of differences between a responsively designed mobile website and a mobile app. Not to mention the differences in localized performance due to app taking advantage of a low-level system at hand or simply an offline experience.

## I. Browser UI

The first difference between a web based interface and a native one is the lack of browser UI. Obviously, 🙂. Apps generally do not sport a url bar (unless the app is a web browser!), and the lack of control elements like the back or the forward buttons and the url bar make for a clean slate to work with. 

A web app in fullscreen mode can exhibit similar potential but other promising way to provide the full potential of a mobile screen to a web app is the web-view. A web-view can equal the real estate and experience available to a mobile app assuming that the workflow within is handled with proper care. 

## II. Application Design
The second difference between a responsively designed website and a mobile app is found in the process of design itself. 

Mobile apps generally do not have a header or footer with links to other pages or screens, for example. The vocabulary of scrolling turns into panning and a [better control over pinchzoom functionality](https://stackoverflow.com/questions/49589861/is-there-a-non-hacky-way-to-prevent-pinch-zoom-on-ios-11-3-safari/49926070) is available to mobile apps. 

## III. Performative Upgrades

There will always be network requests to complete before the requested data is laid out in front of the user. Since there is no difference between the stage that is available to a mobile app and a web-view, it comes down to optimizing the app for fewest and quickest round trips to the server. Or none at all.

A PWA approach with a high resolution service-worker can reduce the number of subsequent requests to the server by an order of magnitude. Occasionally, a complete request could be completed offline. 

And now we are talking about literally no difference between a webapp written in php or rails or node and a mobile app written in swift. Both applications can perform really well and will be indistinguishable from each other as long as the design and experience of the webapp is kept first class. Only in very extreme applications, like gaming or binary asset processing would the performance feel a pressure, but there too a web-based application using webassembly could dent the appeal of going native.

Container and stack aside, there are several other places where responsive web design and mobile UI do not exactly reconcile. The following list enumerates some of those differences and is followed by our recommendations on intrinsic app design so as to have the best outcome with your Red Goose app.


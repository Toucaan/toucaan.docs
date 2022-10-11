---
sidebar_position: 2
---

# Main Diffs

### Responsive Design
There are a number of differences between a responsively designed mobile website and a mobile app. Not to mention the difference in performance due to the app taking advantage of low-level system or simply an offline experience.

## I. Browser UI

The first difference between a web based interface and a native one is the lack of browser UI. Obviously, 🙂. Apps generally do not sport a url bar (unless the app is a web browser!), and the lack of those control elements, like the back or the forward buttons, and the url bar, makes for a clean slate to work with. 

A web app in fullscreen mode or the web view mode shares a similarly sized staging area. Since the support for full-screen api is somewhat lagging, a web-view is the natural choice to produce mobile apps using the real estate of the web. However, the workflow and experience must be paid due attention. 

## II. App Design
The design language of a mobile app is significantly different from that of a mobile website, even though responsive design does try to mimic apps. The diff is in the process of responsive philosophy itself. 

Why so? You may ask.

It is because **the responsive design methodology is encumbered by desktop thinking**. Are we on mobile? Yes? Let's squeeze that menu into a tiny hamburger and shrink that header, and the footer, and all that other content into a narrow copy. That's it.

That's not how mobile apps are designed.

Mobile apps generally do not have a header or footer with links to other pages, for example. Similarly, the vocabulary of scrolling turns into panning and there is a [better control over pinchzoom functionality](https://stackoverflow.com/questions/49589861/is-there-a-non-hacky-way-to-prevent-pinch-zoom-on-ios-11-3-safari/49926070) with native apps. 

## III. Performative Upgrades

There will always be network requests to complete before the requested data is laid out in front of the user. Since there is no difference between the stage that is available to a native app or a web-view based one, it finally comes down to optimizing the pipeline for the fewest and quickest round trips to the server. Or none at all, if possible.

A PWA approach with a high resolution service-worker can reduce the number of subsequent requests to the server by an order of magnitude. Occasionally, the whole screen (head request) could be served completely offline. 

And now we are talking about literally no difference between a web-app written in php or rails or node and a mobile app written in swift or kotlin. Both applications can perform really well and will be indistinguishable from each other as long as the design and experience of the web-app is kept first class. Only in very extreme applications, like with gaming or in asset (images or video) processing would one need to offload compute pressure to webassembly.

These are three main areas of differences between mobile web and natively built mobile apps.
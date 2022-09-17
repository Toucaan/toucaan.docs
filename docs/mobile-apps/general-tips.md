---
sidebar_position: 1
---

# Introduction

## Web app vs. mobile app.
There are subtle differences between a responsive website and a mobile app. The first one that comes to mind is the lack of browser UI. Obviously, 🙂.  Mobile apps generally don’t have a url bar, or the back or forward buttons, or reload unless the app is a browser itself. 

If we removed the browser UI from the picture, it turns out that there will be literally zero difference between the real estate that is available to a mobile app or a webapp loaded into a browser window. 

Sure, there will be network requests to complete before a screen is painted for a user to interact with on a webapp, but from a design standpoint, there is absolutely no difference at all. 

The number of pixels to draw on screen is equal for web and native both. It is relevant to lay here that the network requests too can be done away with mostly, using a high resolution serviceworker. 

And now we are talking about literally no difference between a webapp written in php or rails or node and a mobile app written in swift. Both applications can perform really well and will be indistinguishable from each other as long as the design and experience of the webapp is kept first class. Only in very extreme applications, like gaming or binary asset processing would the performance feel a pressure, but there too a web-based application using webassembly could dent the appeal of going native.

Container and stack aside, there are several other places where responsive web design and mobile UI do not exactly reconcile. The following list enumerates some of those differences and is followed by our recommendations on intrinsic app design so as to have the best outcome with your Red Goose app.

The general rule of thumb is to think of your webapp's UX/UI like a mobile developer. And this means a tight mobile design that scales intrinsically, and a super optimized and cached web application.

This list is in no way an exhaustive resource but it should get you started on the right path:

### TO-DOs

1. Lose the footer at the bottom of your website. See how [Red Goose](https://goose.red) uses a semantic footer element with a full-page dedicated to footer links.
2. Go for an "app-like" interface on your webapp at every opportunity, especially on mobile views. 
3. Simplicity is the ultimate sophistication. Use a simple slide-in or slide-out for hiding menus. Less fancy is always better.
4. Split your webapp's functionality into levels and bring out only the most essential ones to the top.
5. If possible, use `viewport` units `vw, vh, vmax, vmin` to specify the multiple screens of your webapp. Take a look at [Toucaan CSS framework](https://toucaan.com) for app-like interface on mobile and tablets.

## The DOs

1. Your web app must be fast and performant. Checkout [Lighthouse](https://developers.google.com/web/tools/lighthouse) to understand performance-budgeting and speed.
2. Your website must be (at least) responsive. A non-responsive website cannot be converted into an "acceptable" mobile app.
3. Intrinsic web design is recommended for "native-like" experience. As mentioned before, refer the manual of [Toucaan CSS framework](https://toucaan.com) for intrinsic app design on web.
4. It is recommended to setup your development toolchain with a running Red Goose iOS/Android simulator. Point the url of your Red Goose app to `localhost` to develop for the mobile in realtime. Read more about [app development](https://github.com/Red-Goose/app.fitspacepro.com#local-web-app-development) using Red Goose with the webstack.
5. It is economical and always better to use less code. Unless it is absolutely necessary, avoid making changes on the Red Goose code to keep your maintenance debt low.
6. Resist the urge to add native functionality on your mobile app by keeping all your UX/UI related decisions on your webapp. That way you can control all the three mediums using one application.
6. Use native bundles in places where web functionality isn't available or not allowed by Apple or Google inside the app store. Hint: There isn't much that the web cannot do today. ❤️
7. Sometimes Apple or Google will reject your app for an ad-hoc reason. Look at the reasons provided by them for such a rejection, alleviate those issues and re-submit your app for approval. This is the normal process.

## The Donts

1. No footer with links. An app screen will never have a footer. Instead, create a page for the collection of footer links and provide just one less conspicuous but accessible link to such a page (view).
2. No beta tag on the product or near the logo. All apps on the App Store must be final and ready-to-use for App Store users.
3. No third party branding or competitor (like Android logo inside an iOS app) names must be present on your app. Apple & Google are sensitive about this.
4. No third party payments are allowed inside the App Store. Use in-app purchases for payment functionality on your app. Apple & Google are sensitive about this.

In general it is safe to suggest here that any business can harmonize the design values between their webapp and mobile apps no matter what space they are in. It is your interest to not overdo or overbuild native functionality that would become a burden in future.

Always explore the economical 'web only' option first, and only then jump into full-blown iOS or Android app development if so desired. Of course the latter option is not only going to cost much more to build, but also to maintain and operate alongside a separate webapp.


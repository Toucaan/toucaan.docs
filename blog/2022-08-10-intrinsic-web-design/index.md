---
slug: intrinsic-design
title: Intrinsic Design
authors: [marvin, sonica, satie]
tags: [design, toucaan, css, intrinsic]
---

---

Welcome to the [Toucaan Blog](https://toucaan.com/blog). 🎉

Here you'll find a collection of articles and discussions on **intrinsic application design**. 

![Total Banchod Toucaan](./toucaan-total-banner.jpg)

To wit, Toucaan is a **stack-agnostic vanilla styling framework for mobile apps and the web**. Meaning it doesn't require javascript or any other frontend library to operate. And can be used to design intrinsically tuned web apps and native-like mobile apps using the web stack.

It is very easy to [get started](/docs/getting-started) with Toucaan. 

Simply clone the `toucaan` folder inside your project and start working on your mockups. You'll need a `sass` or `scss` processor to compile your stylesheets to the path. Read more about setup over here.

# What is Intrinsic Design?

Intrinsic in the context of application design implies an experience that _belongs to a device_. This term was coined by the one and only Jenn Simmons while working at Mozilla on flex and grid-based layouts, but a curious mind could easily hop layouts and decide to explore what _belongs_ and what doesn't on a given medium for a whole other lot of design vocabulary. 

Moreover, there is a need to know [what devices are on the web](https://bubblin.io/blog/the-new-landscape-of-the-web) today because users are no longer limited to just mobile or desktop anymore. 

## How is Toucaan different from other css frameworks?

Toucaan is quite different from other css frameworks in many ways. It is a new approach to design that offers granular control and long-term maintainability at scale. 

Unlike other frameworks, Toucaan does not make arbitrary assumptions about the browser or the user's device and instead allows developers to create meaningful interfaces that bank on the **intrinsic qualities** of the medium. Qualities like physical size, orientation, foldability, touch or no touch, or even fullscreen view enabled in a notched environment, for example. 

Briefly, Toucaan outshines the traditional css frameworks on at least four major fronts:

1. A complete separation of device-specific design language without using hardcoded pixel widths as MQ breakpoints. Toucaan uses a [css router](https://bubblin.io/blog/a-css-router) to serve the suitable stylesheet instead.
2. A mathematically grounded and block-scoped type scaling system.
3. No use of a heavy `reset` or `normalize` css to bulldoze the web browser. Toucaan replaces the reset inclusion model with a lighter and flexible [baseline](https://bubblin.io/blog/baseline-css) method that can be configured for each app differently using _classless_ principles.
4. Support new devices on the web like the Apple Watch, EVs with a web browser like the V9 on the Tesla Model S and Tesla Model 3, bendable or foldable smartphones and tablets, large projectors, and smart TVs.

The list above isn't exhaustive or even fully discovered yet. Toucaan snuck out of the bag while we were working on [Bubblin](https://bubblin.io) & [Red Goose](https://goose.red), and it is still very much in development. The css standard is advancing rapidly, and we expect to discover new patterns and styling combinations that work better for the developer and the end user in the long run. 

Today, we announce the first public beta version of Toucaan to the general public after three months in production at the [Red Goose](https://goose.red). Sonica, Satie, & I wish to invite you to try Toucaan to build your interfaces and share your thoughts on the experience. 

In the next few months, we hope to discover how best to introduce and standardize _intrinsicality_ in modern application design. An approach that is no longer encumbered by the limitations of responsive web design. 

Thank you for reading!
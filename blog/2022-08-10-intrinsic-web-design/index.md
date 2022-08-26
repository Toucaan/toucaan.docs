---
slug: intrinsic-design
title: Intrinsic Design
authors: [marvin, sonica, satie]
tags: [design, toucaan, css, intrinsic]
---

---

Welcome to the [Toucaan Blog](https://toucaan.com/blog). 🎉

![Total Banchod Toucaan](./toucaan-total-banner.jpg)

Here you'll find a collection of articles and discussions on **intrinsic application design**. To wit, Toucaan is a **stack-agnostic vanilla styling framework for mobile apps and the web**. Meaning it doesn't require javascript or any other frontend library to operate. And it can be used to design native-like mobile apps using the web stack.

You'll only need the `toucaan` folder of css inside your project (any web development stack) and a `sass` or `scss` processor to compile your stylesheets.

# What is Intrinsic Design?

Intrinsic in the context of application design implies an experience that _belongs to a device_. This term was coined by the one and only Jenn Simmons while working at Mozilla on flex and grid-based layouts, but a curious mind could easily hop layouts and decide to explore what _belongs_ and what doesn't on a given medium for a whole lot of design vocabulary as well. 

Secondly, there is a need to determine [what devices are on the web](https://bubblin.io/blog/the-new-landscape-of-the-web) today because the users are no longer limited to just mobile and desktop anymore. 

## How is Toucaan different?

Toucaan is a new approach to design that snuck out of the bag while we were working on [Bubblin](https://bubblin.io) & [Red Goose](https://goose.red). It is a robust and yet simple css framework that offers both granular control and maintainability at scale. 

It allows developers to create meaningful interfaces that bank on the **intrinsic qualities** of the medium. Qualities like physical size, orientation, foldability, touch or no touch, or even fullscreen view enabled in a notched environment, for example. 

Toucaan differentiates itself from other css frameworks in many ways. However, it outshines the older and traditional frameworks on at least four major fronts:

1. A complete separation of device-specific design language without using hardcoded pixel widths as MQ breakpoints. Toucaan uses a [css router](https://bubblin.io/blog/a-css-router) to serve the suitable stylesheet instead.
2. A mathematically grounded block-scoped intrinsically scaling type system.
3. No use of a heavy `reset` or `normalize` css to bulldoze the web browser. Toucaan replaces the reset inclusion model with a lighter and flexible [baseline](https://bubblin.io/blog/baseline-css) method that can be configured for each app using class-less principles.
4. Support new devices on the web like the Apple Watch, EVs with a web browser like the V9 on the Tesla Model S and Tesla Model 3, bendable or foldable smartphones and tablets, large projectors, and smart TVs.

The list above isn't exhaustive or even fully discovered yet. Toucaan is still very much in development, and we expect to find new patterns and styling combinations that work better for the end user and the developer in the long run. Today, we released the first public beta version of Toucaan to the general public following an in-the-production test at  [Red Goose](https://goose.red) for the past three months. 

Sonica, Satie, & I wish to invite you to take Toucaan out for a sortie and share your thoughts on it. Together, we aim to discover how we can best introduce and standardize _intrinsicality_ in modern application design. An approach that isn't encumbered by the limitations of responsive web design. 

We would love to include your ideas in the core framework and welcome contributions wholeheartedly. Thank you for reading!
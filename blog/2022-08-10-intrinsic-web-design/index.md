---
slug: intrinsic-design
title: Meet Intrinsic Design
authors: [marvin, sonica, satie]
tags: [design, toucaan, css, intrinsic]
---

---

Welcome to the [Toucaan Blog](https://toucaan.com/blog). 🎉

Here you'll find articles and discussions on **intrinsic application design**. 


![Total Banchod Toucaan](./toucaan-total-banner.jpg)

# What is Toucaan?

Toucaan is a **stack-agnostic vanilla styling framework for mobile apps and the web**. Meaning it doesn't require javascript or any other frontend library to work. 

<!--truncate-->


Toucaan can be used to design intrinsically scaled web and mobile apps using the web stack. It is easy to [start using](/docs/getting-started) Toucaan in your project. 

Clone the `toucaan` submodule inside your project and start designing your mockups. Read more about [setting up](/docs/getting-started) and [configuration](/docs/configuration).

# What is Intrinsic Design?

Intrinsic in the context of application design implies designing for an experience that _belongs_ to the user's device. This term was coined by the one and only Jen Simmons while working at Mozilla on flex and grid-based layouts, but a curious mind could easily hop layouts and explore what _belongs_ and what doesn't on a given medium for a whole other lot of design vocabulary. 

Moreover, there is a need to know [what devices are on the web](./the-new-landscape-of-the-web) today because users are no longer limited to mobile or desktop. 

## How is Toucaan different from other css frameworks?

Toucaan is very different from other css frameworks in several ways. 

It transcends the limitations of Responsive Web Design with a new deterministic approach to design that offers both granular control and long-term maintainability at scale. 

Toucaan avoids several common anti-patterns and hardcoded assumptions that other frameworks force on the end users. It does not make arbitrary assumptions about the browser's capabilities or the user's device and allows developers to create meaningful interfaces that bank on the **intrinsic qualities** of the medium instead. You know, qualities like physical size, orientation, foldability, touch or no touch, or even fullscreen view enabled in a notched environment, for example. 

Briefly, Toucaan outshines the traditional css frameworks on at least four major fronts:

1. Complete separation of the design language for different classes of devices. Toucaan uses [a css router](./a-css-router) to serve the suitable stylesheet.
2. A mathematically grounded and [intrinsically scaling type](./intrinsic-typography) system.
3. No heavy `reset` or `normalize` css to bulldoze the web browser anymore. Toucaan replaces the reset with a flexible [baseline](./baseline-css) that can be customized for each app differently.

### Support
Toucaan has intrinsic support for new devices on the web like the Apple Watch, EVs that sport a web browser like the V9 browser on the Tesla Model S and Tesla Model 3, bendable or foldable smartphones and tablets, large projectors, and even smart TVs.

Toucaan snuck out of the bag while we were working on [Bubblin](https://bubblin.io) & [Red Goose](https://goose.red), and it is still very much in development. The css standard is advancing rapidly, and we expect to discover new patterns and styling combinations that work better for the developer and the end user in the long run. 

Today, we announce the first public beta version of Toucaan to the general public after three months in production at the [Red Goose](https://goose.red). Sonica, Satie, & I wish to invite you to try Toucaan to build your interfaces and share your thoughts on the experience. 

In the next few months, we hope to discover how to introduce and standardize _intrinsicality_ in modern application design—an approach that is _not_ encumbered by the limitations of responsive web. 

Thank you for reading!
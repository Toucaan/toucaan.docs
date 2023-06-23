---
slug: how-to-use-the-new-css-variant-units-svh-lvh-dvh-on-mobile
title: Using svh, lvh, or dvh with Toucaan
authors: [marvin]
tags: [toucaan, intrinsic, deterministic, design]
---

CSS has had viewport units like `vw`, `vh`, `vmin`, and `vmax` for years with a great browser support. These units work fine in nearly all the scenarios except on a mobile where the height of the viewport (unit) changes as the page is scrolled up and the browser interface hides away. 

Recently, a few new level-4 css units were announced as browser standards to address this issue.

<!--truncate-->

Since 2015, the value of `100vh` has usually matched the larger viewport state (see figure below). The problem with this implementation was that some of the UX/UI of a "full screen" app fell below-the-fold due to the browser interface taking up that much space. This may appear like a minor nit, but it has had a significant impact on mobile web experience over the years.


## The `svw`, `lvh`, and `dvh` units 

1. `svh` - small viewport height.
2. `lvh` - long viewport height.
3. `dvh` - dynamic viewport height.

According to the spec, the small viewport is when the browser interface (the url/address bar etc.) is fully visible, long viewport is when the browser controls have retracted, and _dynamic_ viewport unit is either of the two values above that the browser will set natively depending on the state.

![svh lvh dvh on Android](./lvh-svh-android.jpg "lvh svh dvh on android")


```css
.element {
  height: 100dvh; /* See result in the first screenshot */
}

.element {
  height: 100svh; /* See result in the second screenshot */
}

.element {
  height: 100lvh; /* See result in the third screenshot */
}
```

:::caution Broken on The Desktop
Apparently, the new height variant unit is broken on the [macos desktop](https://bugs.webkit.org/show_bug.cgi?id=242758). 

But since Toucaan uses a css router to separate and serve stylesheets according to the class of medium, we can restrict usage of the new viewport variants to only the mobile and tablet interfaces where the support is guaranteed. We can continue to solve the desktop UI with the older viewport units. 
:::


### Intrinsic Determinism  

Among the [new variants of the viewport units](https://caniuse.com/viewport-unit-variants), we also have the `dvmin` & `dvmax` css units. These two form the backbone of our [font-size utility variables](https://toucaan.com/docs/typography/introduction.md) on mobile.

#### Example:
Here's a quick real world example explaining how to use `dvmax` on your mobile views with Toucaan:

To apply a predetermined page-length to your webpage:

```css
/* On mobile: */
body {
  height: calc(10 * 100dvmax); /* A 10-pages long scroll for mobile. */ 
}
```

Learn more about the [Concept of Firm Pagination](https://toucaan.com/docs/web-design/pagination.md) for intrinsically scaling UX/UI.

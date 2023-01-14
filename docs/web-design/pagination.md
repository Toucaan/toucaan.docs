---
sidebar_position: 3
---

# Pagination
As part of applying the [principles of intrinsic design](../core-concepts/overview.md)—_determinism_—Toucaan enforces creating webpages of **a known page-length**. Produce self-enclosing measurable designs or mock-ups that render at a pre-determined length for a given category of device.

### Utility Variable `--page`
Toucaan measures the length of the scroll in multiples of the standard ICB or _Initial Containing Blocks_ referred to as a `--page`. So a typical webpage upon render could be a 10-pages long scroll, or a 3-pages long scroll or a just a page with no scrolling involved. 

A `--page` would look something like this on css:

```css
/* On mobile.scss: */
:root {
  --page: 100dvh; /* A utility variable */
}

.element {
  height: calc(1 * var(--page)); /* Applying height of one page. */
}

html, body {
  width: calc(100 * var(--vmin));
  height: calc(10 * var(--page)); /* Create a 10-pages long scroll enclosure. */ 
}
```

:::tip Tips
1. Keep your scroll length in check! More than 80% people do not scroll below the fold at all.
2. Infinite scrolls can also be engineered in multiples of the `--page` utility variable, although technically most of that responsibility is held by JavaScript in multiples of ICB. 
:::


The `--page` variable represents the full screen area on a browser that is above-the-fold for any  device, like so:

```css
.page {
  width: calc(100 * var(--vmin)); /* Full screen width. */
  height: 100vh; /* Full screen height */
}
```

### Fractional Pagination. 

It is perfectly alright to roll out webpages (scrolls) that aren't exactly an integer multiple of a `--page` variable. 

```css
/* On mobile: */
body {
  height: calc(6.5 * 100dvh); /* A six-and-a-half--pages long scroll on mobile. */ 
}
```

:::tip
Notice the use of the css unit `dvh` for `--page` utility variable on mobile and not `dvmax` because in landscape mode, you want the page to reflect the shorter side as the height of the page. `dvmax` on the other hand always points to the bigger edge.
:::

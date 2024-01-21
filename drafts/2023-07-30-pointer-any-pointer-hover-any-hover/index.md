---

layout: post
title:  Pointer, Any-Pointer, Hover, Any-Hover. 
description: CSS level 4 media queries address the new, more expansive web landscape. A fine pointer, for example, used to be a mouse cursor that indicated a desktop-driven web. Coarse pointer–on the other hand–reveals a user with the web under their fingertips. A web of the post-pc era, where the mouse is no longer a primary input device. 
date: 2022-03-02 

banner: charlesdeluvio-YJxAy2p_ZJ4-unsplash.jpg

category: toucaan
tags: [toucaan, css, intrinsic, web, design]

published: true
author: marvin

canonical_url: https://bubblin.io/blog/level-4-media-queries/


---

In the past few articles, we looked at the [new landscape of the web](https://bubblin.io/blog/the-new-landscape-of-the-web) and developed a modest [css router](https://www.toucaan.com/blog/a-css-router) that allows designers to create and deploy an intrinsic design system for their web applications. How does it really work?

Toucaan uses a bunch of media-query combinations to "fine match" a device category. It takes into account various physical and technical capabilities at the environment level to arrive at the right stylesheet for a device. Then it uses a standard @import rule to prioritize the matched css on the path of delivered assets.

There are several more [level-4 media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/@media#media_features) that a developer can use to achieve a still finer-grained control over their application's design.

Here is a glimpse of the new css4 api to distinguish a pointer-less environment from a pointer-driven one:

```css
@media (pointer: fine) {
  /* when the primary pointing device allows accurate pointing.  */
}
@media (pointer: coarse) {
  /* when the primary pointing device does not allow accurate pointing. */
}
@media (pointer: none) {
  /* when the primary interacting device is not capable of pointing. i.e., a web device with a keyboard only. */
}
@media (hover) {
  /* when the primary pointing device allows hovering over elements. */
}
@media (any-pointer: fine) {
  /* when any of the pointing devices allows accurate pointing. */
}
@media (any-pointer: coarse) {
  /* when none of the pointing devices allow accurate pointing. */
}
@media (any-hover) {
  /* when any of the pointing devices allows hovering over elements.*/
}
```

The expressions above are just a sample and not a 100% accurate match for all the devices in a given category, but they are a good starting point for exploring the possibilities.

```css
/* smartphones, touchscreens */
@media (hover: none) and (pointer: coarse) {
    /* ... */
}
/* stylus-based screens */
@media (hover: none) and (pointer: fine) {
    /* ... */
}
/* Nintendo Wii controller, Microsoft Kinect */
@media (hover: hover) and (pointer: coarse) {
    /* ... */
}
/* mouse, touch pad etc. */
@media (hover: hover) and (pointer: fine) {
    /* ... */
}
```

Take a look at the [landscape router](https://github.com/Toucaan/toucaan/blob/master/toucaan/router/landscape.css) to see some of the new css4 queries in action. Obviously, this router isn't exhaustively using all the available options, and there may be specific new @-rule options that you might find more useful according to your situation. It is always better to go after the best match to tap into device-specific capabilities and to have a more delicately optimized design system and a full-featured app with Toucaan.

Stay sharp.

---

By: Marvin Danig, CEO & Founder of [Bubblin Superbooks](https://bubblin.io) and the [Red Goose](https://goose.red).
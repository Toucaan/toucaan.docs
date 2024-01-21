---

layout: post
title:  The Magical Powers of VMIN unit. 🎩
description: Take a close look at the hidden properties of the CSS viewport unit `vmin` and learn how it can be used to enable intrinsically scalable typography on the web.
date: 2022-03-01

banner: hannes-wolf-n2ILm0aTCYo-unsplash.jpg

category: toucaan

tags: [ typography, intrinsic, web, design, fluid, typesetting]

published: true
author: marvin

canonical_url: https://bubblin.io/blog/magical-powers-of-css-vmin-unit

---

Welcome to the newest chapter on the [Toucaan Intrinsic CSS](https://toucaan.com) framework. 


This chapter will focus on some of the hidden properties of the viewport unit [`vmin`](https://bubblin.io/blog/magical-powers-of-css-vmin-unit). We would discuss the effect of those properties on digital content and then devise a strategy to use `vmin` in regular day-to-day web design. 

This post will also demonstrate that the suggested methodology using `vmin` is much simpler and more scalable than most commonly accepted techniques such as the [responsive typography](https://css-tricks.com/snippets/css/fluid-typography/#comment-1607139). Frankly, the formula for responsive typography is unwieldy and approximated; it never appealed to me due to its severe limitations. 

Hopefully, the reader will take some new insights into how `vmin` works and visualize how it can become–or more or less _is_–the backbone of **intrinsically scalable typography** for block-scoped components. 

----------
IMO, inch is _intrinsic_ to modern web design. Even if we used `px,` `em`, or `rem.`
to style a webpage, physical inches have an influence over it. 
There is a non-zero correlation between how pixels shape-up 
and the size of the dot (pixel) depends on the physical size of the glass. 

Actually, the term' size of a pixel' can be a confusing reference. 
This is a tricky position to navigate but stay with me.
By definition, a screen pixel has no size, no physical value, or meaning outside of its mathematical 
construct, which is [angular measurement](http://inamidst.com/stuff/notes/csspx) of 
an object relative to its distance from the viewer's eye and the physical size of the 
capturing frame, i.e., the screen.

But a pixel does have a size in the context of a screen. And it depends on only three parameters: 

    1. Pixel count (ppi/dpi), 
    2. Height of the screen (H), and, 
    3. Width of the screen (W).

> "It is a part of a relationship between the physical screen size, expressed in inches, 
> the screen resolution, expressed in pixel per inches and the pixel screen size, expressed 
> in pixels." – Sebastian Gabriel ([link](https://sebastien-gabriel.com/designers-guide-to-dpi/))

![DPI Mac 27"](https://raw.githubusercontent.com/marvindanig/assets/master/dpi-mac-27.jpg)


Practically speaking, every device has its own pixel size (device pixel) 
and a boundary of 'coordinate geometry' to play with, i.e. pixel count and 
physical height and width. The collection of dots (or pixels) covers the entire area 
of the glowing glass, but we'll skip the underlying math of how that works 
for each frame (paint job) and that this is handled by the rendering engine.

Here's a good read on [what a pixel is](http://alvyray.com/Memos/CG/Microsoft/6_pixel.pdf) if you're interested.

Let us dive into `vmin`!

> Demo → [Red Goose](https://goose.red) is a live example (albeit still a work in progress) to look at what `vmin` based typography looks like. It is in production mode, so we are close to the final release.  

> Disclosure →  Red Goose is also the main sponsor of the [Toucaan CSS Framework](https://toucaan.com). 

{% include linked-heading.html heading=" The soul of intrinsic web design" level=2 %}

One of the ways intrinsic differs from responsive is the notion of block-scoping typography to a component. Or, in traditional speak– block-scoping the font size of the text to the size of an element.

Examine closely the role of the `vmin` unit in the example below:

```css
--side: 50vmin;

.square {
  width: var(--side);
  height: var(--side);
  font-size: calc(var(--side) / 10);
}
```
As you can see from the code above, the font size of the text within the `.square` element is dependent or rather "scoped to" the dimension of the square element. This may seem simple to explain, but it is anything but simple. Please do spend some time on this!

<p class="codepen" data-height="300" data-default-tab="css,result" data-slug-hash="pogymyN" data-user="marvindanig" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/marvindanig/pen/pogymyN">
  Blockscoped typography. (Toucaan CSS Framework)</a> by Marvin Danig (<a href="https://codepen.io/marvindanig">@marvindanig</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

<br/>
<br/>
The font size of the text 'hello world' scales precisely in proportion to the edges of the square element. Therefore, resizing the browser window does _not_ trigger content reflow within the containing element–the square. 

We could pin the font size to the width of the component instead. And then adjust the line height of the entire body of text to some integer factor of the total element height. 

You know, give a `height: calc(n-times-height-of-each-line)` to the element. It wouldn't be a stretch to say here that we could even introduce [line-tracking](https://bubblin.io/blog/line-tracking) on the web this way. Wouldn't that be an excellent solution for the shrinking attention span of all humanity?

{% include linked-heading.html heading=" …but, but what about the level of support?" level=2 %}

No problem at all. `vmin` is defined as 1/100th of the shorter side of a  viewport. So even without looking at caniuse, we can implement a `--vmin` custom property like so:

```css
@media only screen and (orientation: portrait) {
  :root {
    --vmin: calc(100vw/100);
    --vmax: calc(100vh/100);
  }
}

@media only screen and (orientation: landscape) {
  :root {
    --vmin: calc(100vh/100);    /* Axiom: 100vh of landscape === 100vw of portrait. */
    --vmax: calc(100vw/100);
  }
}

:root {
  --vmin: 1vmin;
  --vmax: 1vmax;
}
```

Now, the custom property `--vmin` is available on our css to use anywhere.

{% include linked-heading.html heading=" So what is with the hidden properties then?" level=2 %}

There are three unique qualities of the `vmin` css unit that may not be immediately evident to a developer:

1. `vmin` is always from the shorter side of the screen. So in mathematical speak, it is from the breadth (B) of a rectangle and not the length (L). Read more about how this is used on our [CSS router](https://www.toucaan.com/blog/a-css-router) while orientation matching.
2. Upon resizing the browser window, the rate of change exhibited by `vmin` is much lower than the rate of change on `vmax`, i.e. Δvmin << Δvmax. This makes `vmin` far more straightforward to scale with than the `vmax`.
3. For a rigid viewport, the value of a `vmin` is a constant no matter what the underlying pixel resolution or setting of the display might be. Meaning the physical measure of `1vmin` unit on the screen of the following two mobile phones will be equal even though both have unequal screen resolutions or dpi:

<br>
<div class="center">
  <img src="https://raw.githubusercontent.com/marvindanig/assets/master/iphone-vs-samsung.jpg" alt="Device resolution does not matter to the vmin." width="100%" style="max-width:100%;">
    <em> If the physical size of the devices is equal, the size of 1vmin would also be. </em>
</div>
<br>

Brilliant. 

{% include linked-heading.html heading=" How to use `vmin` on our css then?" level=2 %}

A strategy of how the `vmin` unit could be used on your web application today is committed on the [Toucaan CSS Framework](https://github.com/Toucaan/toucaan). But there are several approaches to choose from and YMMV. 

What I do on Toucaan, and subsequently on [Red Goose](https://goose.red) as well, is apply the strategy of testing for the "squarishness" of a given rectangular screen. The more squares one could fit on a rectangular screen, the more ultrawide it becomes.

I ask: How many perfect squares of full height or half-width can be displayed side-by-side on the rectangular screen in landscape mode? Is the length L (width of the window in web design terms) of the rectangular screen twice as large as its breadth B (the height)?

```css
@media (min-aspect-ratio: 2 / 1) { 
/* If the length/breadth ratio > 2, we can fit two squares of full height on the screen.  */
  :root {
    --edge: 100vmin; /* The shorter side */
    --fs: calc(var(--edge) / 100);
  }
}

@media (max-aspect-ratio: 2 / 1) { /* Length/Breadth ratio < 2 */
/* If the length/breadth ratio < 2, then we can fit only one square of full height on the screen but we can still fit two squares of half width each side-by-side.  */
  :root {
    --edge: 50vw;
    --fs: calc(var(--edge) / 100);
  }
}
```

Then we can use the `--fs` custom property to scale the font size of the text within the body of the page easily with a rule like `font-size: calc(4 * var(--fs))` or something more elaborate.

That's it, and that's the formula for scalable intrinsic typography.

I think `vmin` based design systems can allow developers to infuse deeper intrinsicality into their user interfaces. It can lead to a more strongly controlled design experience with deterministic UIs that offer better control to the designer than otherwise.

For example, I can confidently say that my homepage on Red Goose will never fall below the fold because I'm using `--vmin` & `--vmax` units to establish the height of the page, and I scale the content within with those units too.

## Conclusion:
To sum up this post, I'd say that `vmin` is the most genuine calling of intrinsic typography. I know we have become comfortable with the other older css units like `px`, `em`, and `rem` and have gone far down the path of complex assumptions, but I think `vmin` deserves a chance.

It is the soul of intrinsic web design that shows much promise. 

👉🏻 **Further reading:** [Understanding-vMin-and-vMax-in-CSS](http://thenewcode.com/1137/MinMaxing-Understanding-vMin-and-vMax-in-CSS)


This post on Hacker News: https://news.ycombinator.com/item?id=[number whenever it gets shared.]

---

By Marvin Danig, CEO & Founder of [Bubblin Superbooks](https://bubblin.io) and the [Red Goose](https://goose.red).



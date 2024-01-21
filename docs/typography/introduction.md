---
sidebar_position: 1
---

# Introduction

## Scaling Text
Toucaan utilizes two [utility variables](../variables.md) namely the `--fs` and `--lh` to scale type and tracking[^1] across **all** mediums.
The value of the `--fs` utility variable depends on factors like: 

1. The orientation of the viewport, 
2. The physical size of the medium at hand, and 
3. The nature of content being served using the [Test of "Element Squarishness"](https://www.toucaan.com/blog/intrinsic-typography#the-test-of-element-squarish-ness/) along the principles of intrinsic design. 

The variable name `--fs` stands for Font Size and `--lh` stands for Line Height. Refer the list of default utility-variables[^2] available on Toucaan.

```css
:root {
  --vmin: 1vmin;
  --fs: calc(4 * var(--vmin));  /* A contrived example. */
}
```

A more involved and close to real world use based on the `--fs` utility variable will be something like this: 

1. Define the "extrinsic size" of the element using the `--fs` utility variable. 
2. Set the intrinsic font-size of text according to the width of the containing element.

```css
--element-width: calc(25 * var(--fs));
--factor: 40; /* The value of the factor is arrived at by the end-user as per need. */

.element {
  width: var(--element-width);
  font-size: calc(var(--element-width) / var(--factor));
}
```

<!-- :::warning Pending documentation
More documentation w.r.t typesetting, typography, and scaling components to come here later. 
::: -->


## Example

A key requirement of understanding intrinsic scaling is to understand how to set the value of `--fs` for a given medium. Displayed below is the case of the desktop. Since desktop browsers are mostly viewed in landscape mode, the value of `--fs` is set like so:

```css title="Setting the --fs variable on a desktop browser"
/* Test for square-ishness of the viewport using an aspect-ratio MQ.        */
/* Set the value of --fs utility variable using the value of shorter edge.  */

@media (min-aspect-ratio: 2 / 1) { /* Length : Breadth ratio > 2 */
  :root {
    --shorter-edge: 100vmin;        /* Use the shorter edge of the viewport for better control of Δ upon resizing. */
    --fs: calc(var(--shorter-edge) / 100);
  }
}

@media (max-aspect-ratio: 2 / 1) { /* Length : Breadth ratio < 2 */
  :root {
    --shorter-edge: 50vw;
    --fs: calc(var(--shorter-edge) / 100);
  }
}
```

The formula above can be flipped for a desktop monitor that is installed in portrait orientation. Think of vertically mounted desktop monitor as a scaled up physical version of mobile view.

## Case of Physical Units

Toucaan allows use of **accurate physical units** (standard or imperial) like the `inch` or `centimeters` for the purpose of digital application design using [**the --inch poly-fill**](https://github.com/Toucaan/--inch). 
Please refer the documentation of the poly-fill to set it up correctly for your project. 

```css
 /* Import the `--inch` variable. */
  @import url('path/to/--inch.css') only screen;

  /* Portrait ⇋ landscape switch. */
  @import url('/dist/portrait.css') only screen and (orientation: portrait);
  @import url('/dist/landscape.css') only screen and (orientation: landscape);

  :root {
    /* Other utility variables are specified here… */

  }
```

Other standard units of measurement can also be used with the `--inch` utility variable, like so:

```css
:root {
  /* Import the `--inch` variable. */
  @import url('path/to/--inch.css') only screen;

  --centimeters: calc(2.54 * var(--inch));
  --millimeters: calc(25.4 * var(--inch));
  --meters: calc(2.54 * var(--inch) / 100);
  --feet: calc(12 * var(--inch));
  --thou: calc(var(--inch) / 1000); /* …because why not!? */
}
```

And then your buttons and elements can go like:

```css

.button {
  width: calc(2.5 * var(--inch)); /* Two and a half inch long! */
  height: calc(1/3 * var(--inch));
}

```

:::warning Experimental Only
This is an experimental chapter with an immature technology. It is not recommended for use in production or any kind of critical service that your users may rely on.
:::


:::info CSS Standard
In the past, CSS standards required browsers to display absolute units correctly even on a computer screens. But since the number of incorrect implementations always outnumbered the correct ones… the requirement was finally dropped in 2011. [source](https://www.w3.org/Style/Examples/007/units.en.html)

CSS Custom Properties can potentially reverse and solve for this past requirement via crowdsourcing digital mappings for as many hardware as possible. Read [more](https://bubblin.io/blog/inch).
:::


[^1]: Toucaan introduces the concept of line tracking on the web. See [demo](https://bubblin.io/book/herland-by-charlotte-perkins-gilman/1).

[^2]: The list is in under rapid development and in a state of flux.
---
sidebar_position: 1
---

# Introduction

Toucaan utilizes a singular [utility variable](../variables.md) called the `--fs` to scale content across **all** mediums for your application. 

The value of the `--fs` unit variable is set according to the type and orientation of the device being served using the [criteria of "viewport squarish-ness"](https://bubblin.io/blog/magical-powers-of-css-vmin-unit#how-to-use-vmin-on-our-css-then). The variable name `--fs` stands for Font Size.

```css
.element {
  font-size: calc(4 * var(--fs));  /* A contrived example. */
}
```

A more involved and close to real world example using the `--fs` utility variable would be something like this: 

```css
/* Define the element width to 25 times the value of --fs (usually set to 1vmin). */
--element-width: calc(25 * var(--fs));
/* The number of letters that you want to fit into one line within your `div.element`. */
--letter-count: 40;                       

.element {
  width: var(--element-width);
  font-size: calc(var(--element-width) / var(--letter-count));
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

:::warning Do not use this in production
This is an experimental chapter with an immature technology. It is not safe for use in production for any kind of service that your users may rely on.
:::


:::info CSS Standard
In the past, CSS standards required browsers to display absolute units correctly even on a computer screens. But since the number of incorrect implementations always outnumbered the correct ones… the requirement was finally dropped in 2011. [source](https://www.w3.org/Style/Examples/007/units.en.html)

CSS Custom Properties can potentially reverse and solve for this past requirement via crowdsourcing digital mappings for as many hardware as possible. Read [more](https://bubblin.io/blog/inch).
:::



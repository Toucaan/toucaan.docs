---
sidebar_position: 7
---

# Intrinsic Typography

Toucaan utilizes a singular [utility variable](./variables.md) called the `--fs` to scale **all** content across the application. The value of the `--fs` unit is arrived at by evaluating the nature and orientation of device being served using the [Criteria of Viewport Squarishness](https://bubblin.io/blog/magical-powers-of-css-vmin-unit#how-to-use-vmin-on-our-css-then). 

The variable name `--fs` stands for Font Size, so you can set `font-size` property of an element, like so:

```css
.element {
  font-size: calc(4 * var(--fs));  /* A contrived example */
}
```

:::warning Pending documentation
More documentation w.r.t typesetting, typography, and scaling components to come here later. 
:::



## Case of the Desktop 
Since desktop browsers are viewed in landscape mostly, the value of `--fs` is determined as follows:

```css title="Setting the --fs variable on a desktop browser"
@media (min-aspect-ratio: 2 / 1) { /* Length : Breadth ratio > 2 */
  :root {
    --shorter-edge: 100vmin; /* Always pick the shorter side for better control of variation in size. */
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

The same formula can be flipped over for a desktop monitor held in portrait orientation, just like we'd do on a mobile.

### Block-scoping Text Scaling
The `--fs` unit utility variable can be used to assign size to an element just like any other css unit `em`, `px`, or similar. 

##### Example:

```css
.square {
    width: calc(20 * var(--fs));
    height: calc(20 * var(--fs));
    font-size: calc(20 * var(--fs) / 5); /* font size is pinned to the width of the element */
}
```

Observe the scaling of element and the text within. The size of the text is always pinned to the intrinsic size of the element!

#### Demos
See the [CSS is Awesome](https://codepen.io/marvindanig/pen/bGGRZdE) example with intrinsic scaling.

View the [Homepage of Red Goose](https://goose.red) that demonstrates intrinsic scaling.


## Case of the Mobile 

More literature here.


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


:::info CSS Standards 
In the past, CSS standards required browsers to display absolute units correctly even on a computer screens. But since the number of incorrect implementations always outnumbered the correct ones… the requirement was finally dropped in 2011. [source](https://www.w3.org/Style/Examples/007/units.en.html)

CSS Custom Properties can potentially reverse and solve for this past requirement via crowdsourcing digital mappings for as many hardware as possible. Read [more](https://bubblin.io/blog/inch).
:::



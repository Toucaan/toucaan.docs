---
sidebar_position: 2
---

# Default unit: VMIN 

Toucaan defaults to (and strongly recommends) using only the `vmin` unit as the single unit of design for all your styling and scaling needs. No other css unit offers the kind of control and determinism[^1].

```css
:root {
    --vmin: 1vmin;
}
```

:::tip Dynamic Viewport Units
`vmin` is interchangeable with other [newer viewport units](https://www.toucaan.com/blog/how-to-use-the-new-css-variant-units-svh-lvh-dvh-on-mobile) such `dvmin`, `svmin`, and `lvmin`.
:::

### Brief Explanation

Traditional wisdom (and common usage) is to use pixel derived units or the `px` itself, such as the `em`, or the `rem` along with numerous other options and newer properties such as `clamp()` or `container-queries`. This allows you to scale content within an acceptable limit. While this technique "works", it is still quite hard to maintain and brittle to the changes in industry and hardware.

`vmin` on the other hand scales according to the limits of the viewport already! We just have to use it. 

--

### But does the `vmin` unit not look at the viewport?

It does, but safely. Viewport units like `vw` and `vh` rely on viewport width and viewport height, but `vmin` and `vmax` remains neutral because the orientation MQ cancels out the effect of dimension switching. Read [more](https://www.toucaan.com/blog/intrinsic-typography).

Also, a lot of time folks do not realize that even units like `px` or `em` look at the viewport. Manufacturers decide the resolution (or pixel density) and assign the size to the device pixel according to the processing power and physical size of the medium. Once that device resolution is set, the css `px` unit doesn't scale afterwards—however, that initial configuration requires "looking at the viewport." 
:::  

Viewport unit `vmin` on the other hand scales directly according to the physical size of the window (viewport or device!) and it is independent of orientation too!


### Block-Scoping Text Size
The `--vmin` unit utility variable can be used to assign size to an element just like any other css unit `em`, `px`, or similar. 

##### Example:

```scss
$width: calc(20 * var(--vmin));
.square {
    width: $width;
    height: $width; /* It's a square of course. */
    /* Font size is tied to the container element. 
       No container-query or clamping is required. */
    font-size: calc($width / 5); 
}
```

Observe the scaling of element and the text within. The size of the text is always pinned to the intrinsic size of the element!

#### Demos
See the [CSS is Awesome](https://codepen.io/marvindanig/pen/bGGRZdE) example with intrinsic scaling.

View the [Homepage of Red Goose](https://goose.red) that demonstrates intrinsic scaling.

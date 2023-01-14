---
sidebar_position: 2
---

# Default unit: VMIN 

Toucaan defaults to (and strongly recommends) using _only_ the `vmin` unit as the single unit of design for all styling needs and element sizing. No other css unit comes close to offering the kind of control and determinism that the viewport minimum unit can. 

### Block-Scoping Text Size
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

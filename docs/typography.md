---
sidebar_position: 7
---

# Intrinsic Typography

Toucaan uses just one [utility variable](./variables.md) called the `--fs` to scale **all content**. 

`--fs` stands for font-size.

The value of `--fs` is set according to the nature of device under test using the formula of [viewport squarishness](https://bubblin.io/blog/magical-powers-of-css-vmin-unit#how-to-use-vmin-on-our-css-then). 


## Desktop 
Since desktop browsers are viewed in landscape mostly, the formula for `--fs` is as follows:

```css title="Setting the --fs variable on a desktop browser"
@media (min-aspect-ratio: 2 / 1) { /* Length : Breadth ratio > 2 */
  :root {
    --shorter-edge: 100vmin; /* Always pick the shorter side for better control on scalability. */
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

### Blockscoped Scaling
Now the `--fs` unit above can be used to describe any html element size like any other css unit `em`, `px`, or `rem`. 

##### Example:

```css
.square {
    width: calc(20 * var(--fs));
    height: calc(20 * var(--fs));
    font-size: calc(20 * var(--fs) / 5); /* font size is pinned to the width of the element */
}
```

Observe the scaling of element and the text within. The text is always pinned to the intrinsic size of the element. 

### Demos
View the [CSS is Awesome](https://codepen.io/marvindanig/pen/bGGRZdE) example with intrinsic scaling.

View the [homepage of Red Goose](https://goose.red) that demonstrates intrinsic scaling.





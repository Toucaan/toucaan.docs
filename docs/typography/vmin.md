---
sidebar_position: 2
---

# Default unit: VMIN 

Toucaan defaults to (and strongly recommends) using _only_ the `vmin` unit as the single unit of design for all your styling needs or element sizing. 

No other css unit comes close to offering the kind of control and determinism that the viewport minimum unit `vmin` can. 

##### Brief Explanation

Traditional wisdom (and common usage) is to use pixel derived units such as `px` itself, or `em`, `rem` along with numerous other css properties and new standards like `container-queries`, `clamp()` to scale your web design within acceptable limits. This however leads to many complicated and over-engineered set of rules that are hard to maintain and just too brittle.

`vmin` on the other hand scales according to the limits of the viewport already. We just have to use it. A lot of folks don't realize that even the `px` unit looks at the viewport. Manufacturers decide the resolution (or pixel density) and thus the px unit itself for a device according to the physical size of the viewport and the processing power underneath. Once that device resolution is set by the manufacturer, the css `px` unit relies on the initial device pixels and doesn't scale anymore.   

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

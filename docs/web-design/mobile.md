---
sidebar_position: 3
---

# Mobile


Not everything is fixed with the addition of the new CSS viewport units, so here are some issues that I noticed working with viewport relative CSS units.


### Scrollbar Width
Units like `vmin` and `vmax` need a recalculation, because the viewport width units include the scrollbar's width


### Mobile Keyboard 
Whenever a keyboard appears on a mobile viewport, the value of unit `vh` changes.

The viewport units' values can be configured to not take the keyboard into account as proposed in W3C's article on the Virtual Keyboard API.

To do so, use this JavaScript code:


```js
if('virtualKeyboard' in navigator) {
  navigator.virtualKeyboard.overlaysContent = true;
}
```

---
sidebar_position: 7
---

# Utility Variables

Toucaan uses a number of utility variables that enable _deterministic_ control over UX/UI. The word deterministic here means applying style without guesswork about the browser window or assumptions about how the content will reflow. 

The deterministic approach, for example, compels having the knowledge of the length or height of the UI container, the scroll, beforehand in multiples of the ICB–the Initial Containing Block (or the fold or viewport). It forces the designer to create intrinsically scaling components with a clear view of how the content (text, images, etc.) would scale upon resizing the window or upon change in the physical size of the glowing glass.

##### Example:
The custom property `--fs` for `font-size` discussed in the [last chapter](./typography.md) is an example of utility variable.

To put it in simple terms, a styling layer can "belong to" the device _only_ when the kind of device and its underlying capabilities are known ahead of the render. 

:::warning Pending documentation
More documentation w.r.t typesetting, typography, and scaling components to come here later. 
:::

:::info
The problem of utility-driven css frameworks is the prescriptive nature of design comes along with the framework.

Meaning, all websites that use a particular framework look the same. 
:::
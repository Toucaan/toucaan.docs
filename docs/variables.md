---
sidebar_position: 7
---

# Utility Variables

Toucaan uses a number of **utility variables** that enable a _deterministic_ control over UX/UI. Note the word deterministic here that means applying style without assumptions about how the view would scale with the browser.

The deterministic approach compels having the knowledge of the length or height of the UI container (the length of scroll) beforehand in multiples of the ICB, or the Initial Containing Block. It can also imply knowing how the types would scale within an element **without triggering a reflow**.
 
:::info
Toucaan doesn't provide pre-designed utility classes to avoid the prescriptive nature of such a design system. This is intentional to keep the weight of design with the developer and not make all websites using one framework look the same. 
:::

##### Example:
The custom property `--fs` for `font-size` discussed in the [last chapter](./typography.md) is an example of utility variable.

To put it in simple terms, a styling layer can "belong to" the device _only_ when the kind of device and its underlying capabilities are known ahead of the render. 

:::warning Pending documentation
More documentation w.r.t typesetting, typography, and scaling components to come here later. 
:::

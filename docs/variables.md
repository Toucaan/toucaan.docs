---
sidebar_position: 7
---

# Utility Variables

Toucaan uses a number of **utility variables** that enable a _deterministic_ control over UX/UI. Note, the word deterministic here that means applying style without assumptions about how the view would scale or scroll within the browser window. Among other things, the deterministic approach compels the designer to have advance knowledge of the length or the height of the UI container, i.e., the length of scroll. Toucaan measures it in multiples of the ICB or the _Initial Containing Block_. 
 
:::info
Toucaan doesn't offer pre-composed utility classes to avoid the prescriptive nature of such a design system. This is intentional. Avoiding the design debt of utility classes puts the entire responsibility of designing with the maker. And solves for uniqueness of experience instead of leading all websites using one particular framework to look the same. 
:::

##### Example:
The custom property `--fs` for `font-size` discussed in the [last chapter](./typography.md) is an example of utility variable.

To put it in simple terms, a styling layer can "belong to" the device _only_ when the kind of device and its underlying capabilities are known ahead of the render. 

:::warning Pending documentation
More documentation w.r.t typesetting, typography, and scaling components to come here later. 
:::

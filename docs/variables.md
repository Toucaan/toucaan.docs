---
sidebar_position: 7
---

# Utility Variables

Toucaan uses a number of utility variables that enable _deterministic_ control over UX/UI. The word deterministic here means applying style without guesswork or making assumptions about the browser window. 

The deterministic approach, for example, compels having the knowledge of the length or height of the UI container beforehand (in multiples of the ICB–the Initial Containing Block or the viewport fold). It forces the designer to create scalable components with a clear view of how content i.e. text and images (or other assets) would behave upon resize.

##### Example:
The custom property `--fs` for `font-size` discussed in the [last chapter](./typography.md) is an example of utility variable.

To put it in simple terms, a styling layer can "belong to" the device _only_ when the kind of device and its underlying capabilities are known ahead of render.

:::warning Pending documentation
More documentation w.r.t typesetting, typography, and scaling components to come here later. 
:::


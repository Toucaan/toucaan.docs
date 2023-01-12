---
sidebar_position: 6
---

# Utility Variables

Toucaan uses a number of **utility variables** to enable a _deterministic_ control over UX/UI. 

The word deterministic here implies application of style without making an assumption about how a component or the overall layout would render or scale or scroll on a given medium. Everything has to be a _known_! 

Among other things, the deterministic approach compels the designer to have sufficient knowledge of the client environment in advance such as knowing what the [length of the scroll](./web-design/pagination.md) is going to be, the dimensions of each container component and its sub-components etc., i.e., knowledge of the entire page or [screen](./native-apps/create-a-screen.md). 

Toucaan measures this in multiples of ICB or the _Initial Containing Block_. 
 
:::info
Toucaan doesn't use pre-composed utility classes to avoid the prescriptive nature of such a design system. This is intentional. 

By avoiding the design debt of utility classes, Toucaan puts the responsibility of designing unique interfaces with the maker. It solves for uniqueness of visual and tactile experience instead of leading all applications using one particular framework to look one and the same. 
:::

##### Example:
The custom property `--fs` for `font-size` discussed in the [next chapter](./typography/introduction.md) is an example of utility variable.

To put it in simple terms, a styling layer can "belong to" the device _only_ when the kind of device and its underlying capabilities are known ahead of the render. 

<!-- :::warning Pending documentation
More documentation w.r.t typesetting, typography, and scaling components to come here later. 
::: -->

---
sidebar_position: 6
---

# Utility Variables

**Utility variables** are css custom properties that provide access to intrinsic scaling of either the content or the container (using the `calc()` method as described throughout the framework). They are a lot more than the usual css variables declarations that are often just glorified constants elsewhere. 

Toucaan provides a selection of utility variables to enable a _deterministic_ control over UX/UI. 

The word deterministic here implies application of style without making an assumption about how a component or the overall layout would render or scale or scroll on a given medium. Everything has to be a _known_! 

Among other things, the deterministic approach compels the designer to have sufficient knowledge of the client environment in advance such as knowing what the [length of the scroll](./web-design/pagination.md) is going to be, the dimensions of each container component and its sub-components etc., i.e., knowledge of the entire page or [screen](./native-apps/create-a-screen.md). 

Toucaan measures this in multiples of ICB or the _Initial Containing Block_. 
 
:::info Not a utility-first framework!
Toucaan doesn't provide pre-designed set of utility classes to avoid the prescriptive nature of such a design system. This is intentional. By avoiding class utilities, Toucaan keeps the design debt low and puts the entire responsibility of actual implementation with the end user, and solve for diversity of visual outcomes instead of one look across all websites. 
:::

##### Example:
The custom property `--fs` for `font-size` discussed in the [next chapter](./typography/introduction.md) is an example of utility variable.


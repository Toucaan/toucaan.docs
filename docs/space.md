---
sidebar_position: 2
---

# The Design Space

[Skip to next step](router.md).


The Intrinsic approach to design adopted by Toucaan caters to [the full scope of the new web](https://bubblin.io/blog/the-new-landscape-of-the-web). 

It allows creation of interfaces that suit the new devices on the web like the electric vehicles, foldable tablets, smart watches, and many more without use of hardcoded MQ breakpoints. Designing "contextually relevant" interfaces helps the developer find the right solution according to the accessibility situation and intrinsic capability of a device. 

 
### The Axes of Intrinsic Design 

Toucaan's architecture is a simple implementation of the routes required along the [two axes of intrinsic design](/blog/intrinsic-design). 
Below is a map of all the web-enabled devices plotted along the two axes in the increasing order of physical size. 

![Toucaan's Intrinsic Design Space](img/intrinsic-design-space.jpg)

### How is it different from Responsive Design?

From the diagram above, one can see that the intrinsic approach is considerably different from responsive. Unlike with the responsive web design, the intrinsic approach uses a css router (see the [next chapter](router.md)) to separate stylesheets for various mediums instead of the width based hard-coded MQ breakpoints, for example. 

Intrinsic does not even consider mobile and desktop on the same axis of design. Mobile is on the `y-axis` of design orientation, whereas the desktop is on the `x`, and therefore the designer is expected to _not_ work on both mockups together with a break point to switch between the two. 
From the plot, it is easy to conclude that responsive design is all but one solution point in the overall design space of intrinsically capable mediums. 

### Is Toucaan a Design System?

Toucaan is not a single design system. It is rather a conventional css framework with handpicked lessons from several sources. Toucaan is a logical approach to the art of application design that is much better at scaling and easier to maintain over the years.

Read more about intrinsic design and the fundamentals of [a css router](https://bubblin.io/blog/a-css-router) for an in-depth analysis. 

Open `space.md` (this page) and edit some lines: the site **reloads automatically** and displays your changes.
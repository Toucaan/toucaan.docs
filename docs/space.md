---
sidebar_position: 2
---

# The Design Space

[Skip to next step](router.md).


The Intrinsic approach to design adopted by Toucaan caters to [the full scope of the new web](https://bubblin.io/blog/the-new-landscape-of-the-web). 

It allows creation of interfaces that suit the new devices on the web like the electric vehicles, foldable tablets, smart watches, and many more without use of hardcoded MQ breakpoints. Designing "contextually relevant" interfaces helps the developer find the right solution according to the accessibility situation and intrinsic capability of a device. 

 
### Axes of Intrinsic Design 

Toucaan's architecture is a simple implementation of the routes required along the [two axes of intrinsic design](/blog/intrinsic-design). 

Below is a map of all the web-enabled devices plotted along the two axes in the increasing order of physical size. 

![Toucaan's Intrinsic Design Space](img/intrinsic-design-space.jpg)

### The difference from Responsive Design

From the diagram above, one can see that the intrinsic approach is considerably different from responsive. For example, unlike with responsive web design, intrinsic goes after a css router (see the [next chapter](router.md)) instead of hard-coded media queries in pixel width to separate style for various mediums. 

In fact, intrinsic doesn't even consider mobile and desktop on the same axis of application design. 

Notice the mobile is on the y-axis of orientation, whereas the desktop is on the x. From the plot, it is easy to conclude that responsive design is all but one solution point on the overall design space of digital mediums available today.

Toucaan takes a more logical approach to application design. It is also much easier to maintain over the years.

### Is Toucaan a Design System?

Toucaan is not a single design system. It is rather a set of rules and handpicked lessons from several sources that have been fused together into one scalable strategy. 

Read more about intrinsic design and the fundamentals of [a css router](https://bubblin.io/blog/a-css-router) for an in-depth analysis. 

Open `space.md` (this page) and edit some lines: the site **reloads automatically** and displays your changes.
---
sidebar_position: 2
---

# The Design Space

The Intrinsic approach to design caters to [the scope of the new web](https://bubblin.io/blog/the-new-landscape-of-the-web). It allows supporting interfaces that fit electric vehicles, foldable tablets, watches, and many more without using hardcoded breakpoints.


Design "contextually relevant" interfaces that fit the accessibility situation of a device. For example, most mobile users view content in portrait mode (~96%) on the go, whereas users on a tablet like the iPad consume content in the landscape orientation (~79%) on the bed.

 
### Axes of Intrinsic Design 

Toucaan's architecture is a simple implementation of the routes required along [the two axes of intrinsic design](/blog/intrinsic-design). Below is a map of all the web-enabled devices plotted along the two axes of orientation in increasing order of physical size. 

![Intrinsic Design Space](img/intrinsic-design-space.jpg)

### No Media Queries.

Intrinsic design is considerably different from the responsive approach. Unlike responsive web design, Toucaan does not require hard-coded media queries to split styles across various mediums. 


**Example:** It does not even consider mobile and desktop on the same axis of web design. Notice how the mobile is placed on the y-axis of Intrinsic Design, whereas the desktop is on the x-axis. 

Intrinsic design is a more logical approach to application design that is much easier to scale and maintain over the years.

### Is it a Design System?

Toucaan is not a single design system but a set of rules and hard-learned lessons from many that have been fused together into one scalable strategy.

Read more about the [intrinsic design](https://bubblin.io/blog/a-css-router) to understand better the router described in the next chapter. Or jump straight to the code of [Toucaan's Intrinsic CSS Router](https://github.com/Toucaan/toucaan/blob/master/toucaan/router/portrait.css).


Open `space.md` (this page) and edit some lines: the site **reloads automatically** and displays your changes.
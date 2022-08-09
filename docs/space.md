---
sidebar_position: 2
---

# The Design Space

The Intrinsic approach to design caters to [the full scope of the new web](https://bubblin.io/blog/the-new-landscape-of-the-web). Meaning, it allows supporting interfaces that suit new web devices like electric vehicles, foldable tablets, watches, and many more without using hardcoded MQ breakpoints.


Design "contextually relevant" interfaces that fit the accessibility situation and capability of a device. 

 
### Axes of Intrinsic Design 

Toucaan's architecture is a simple implementation of the routes required along [the two axes of intrinsic design](/blog/intrinsic-design). 

Below is a map of all the web-enabled devices plotted along the two axes in the increasing order of physical size. 

![Intrinsic Design Space](img/intrinsic-design-space.jpg)

### The difference from Responsive Design

As you can see from the diagram above, Intrinsic Design is considerably different from responsive. For a start, unlike responsive web design, Toucaan does not require hard-coded media queries to split styles for various mediums. 

In fact, it doesn't even consider mobile and desktop on the same axis of design. Notice how the mobile is put on the y-axis of Intrinsic Design, whereas the desktop is on the x-axis. Responsive design is just one solution point on the overall design space of digital mediums today.

The Intrinsic is a more logical approach to scalable application design. It is also much easier to maintain over the years.

### Is it a Design System?

Toucaan is not a single design system but a set of rules and hard-learned lessons from many that have been fused together into one scalable strategy. Read more about the [intrinsic design](https://bubblin.io/blog/a-css-router) to understand better the router described in the next chapter. Or jump straight to the code of [Toucaan's Intrinsic CSS Router](https://github.com/Toucaan/toucaan/blob/master/toucaan/router/portrait.css).


Open `space.md` (this page) and edit some lines: the site **reloads automatically** and displays your changes.
---
sidebar_position: 2
---

# 3. The Design Space

Intrinsic approach to design is different from the responsive one in that it allows creation of interfaces that are **contextually relevant**—meaning, a befitting UX/UI that exploits the intrinsic capability of the medium. Interfaces that "belong to" a device.

By designing for contextually relevant experiences, a developer not only finds the right solution for a given problem on a medium but also address the accessibility situation in a deeper meaningful way. 

Toucaan is an implementation of the Intrinsic Approach to design.

 
### The Axes of Intrinsic Design 

Toucaan's architecture is a simple implementation of the routes required along the [two axes of intrinsic design](/blog/intrinsic-design). Observe the plot below showing browser sporting web devices along the axes of intrinsic design in the **increasing order of physical size**. 

![Toucaan's Intrinsic Design Space](img/intrinsic-design-space.jpg)

### How is this different from Responsive Design?

From the plot above, one can see that the intrinsic space is considerably larger than the responsive one. In fact responsive design is just a subset of solutions within the intrinsic design space (marked with red-lines above).

Main difference are that an intrinsic implementation does not consider mobile web and desktop web on the same axis of design. Mobile falls on the `y-axis` or `portrait` axis of intrinsic design because most people hold and view mobile in portrait orientation, whereas the desktop falls on the `x-axis` or the `landscape` axis of intrinsic design. 

Thusly, a designer doesn't need to correlate the two mediums or work out a functional relationship between the desktop and mobile views with a break point the two to switch. No consideration to switching of the context need be given.

In fact, intrinsic design doesn't use hard-coded MQ breakpoints to switch stylistic presentation. The intrinsic approach uses a css router (see the [next chapter](router.md)) to separate stylesheets for different mediums on different axes of design. 



### Is Toucaan a Design System?

Toucaan is not a single design system. It is rather a vanilla css framework with handpicked lessons from several sources. Toucaan is also a recipe in motion with a perpetual aim of being better at accessibility, scaling, and maintainability over the years.


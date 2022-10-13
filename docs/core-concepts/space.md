---
sidebar_position: 2
---

# 3. The Design Space

Intrinsic Approach to design is very different from the responsive one. It allows creation of interfaces that are **contextually relevant for the medium**—meaning, building a befitting UX/UI that exploits the intrinsic qualities of the device. 

By definition, Intrinsic Interfaces must "belong to" the device in question.

 
### The Axes of Intrinsic Design 

Toucaan's architecture is a simple implementation of the routes required along the [two axes of Intrinsic Design](/blog/intrinsic-design). Observe the **increasing order of physical size** of all the devices sporting a web browser today, and consider how the _orientation of the device_ and the _physical size of the shining glass_ affect the overall context of application design.

![Toucaan's Intrinsic Design Space](img/intrinsic-design-space.jpg)


By designing for contextually relevant experiences, a developer not only finds the right solution for a given medium, but they are also able to address the accessibility situation in a deeper and meaningful way. 

Toucaan is an implementation of the Intrinsic Approach to Application Design.


### How is this different from Responsive Design?

From the plot above, one can see that responsive design is just **one point of solution** in the overall intrinsic design space (marked with red-lines above). The main difference between intrinsic and responsive is that an intrinsic implementation does not consider the mobile web and the desktop web on the same axis of design. 

Mobile falls on the `y-axis` or `portrait` axis of intrinsic design whereas the desktop falls on the `x-axis` or the `landscape` axis of intrinsic design. Mainly because mobile is generally viewed in portrait orientation while a desktop monitor is nearly always landscape. 

This difference can have a serious impact on how functionality and the wireframes are interwoven together. A good way to visualize what difference in design the intrinsic approach could make is to observe the differences between native mobile apps and mobile web of the same product. 

With Toucaan, a designer, for example doesn't need to switch context between desktop and mobile or even correlate the two. Just design your app for the two mediums separately without testing for resize. There is no functional relationship between how an app should appear on the desktop and how it must on a mobile. 

:::info
Toucaan doesn't use hardcoded MQ break-points that switch context between mobile and desktop layouts. Meaning, while designing your desktop layout, resizing the browser to a smaller mobile-ish width will not invoke the mobile layout. It will show desktop layout only, but for a smaller rectangle.
:::


### Is Toucaan a Design System?

Toucaan is an _expansive_ design system. It aims to cover more mediums on the web than responsive design can. Toucaan has a deep focus on **accessibility, scalability, and maintainability over the years**. At this stage, Toucaan is also a recipe in motion with an aim to be better at supporting all kinds of web devices.


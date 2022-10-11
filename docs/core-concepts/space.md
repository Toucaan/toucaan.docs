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

From the plot above, one can see that responsive design is just **one point of solution** in the overall intrinsic design space (marked with red-lines above). The main difference between intrinsic and responsive is that an intrinsic implementation does not even consider mobile web and desktop web on the same axis of design. 

Mobile falls on the `y-axis` or `portrait` axis of intrinsic design because most people hold and view mobile in portrait orientation, whereas the desktop falls on the `x-axis` or the `landscape` axis of intrinsic design because that is how a desktop is used mainly. 

Thusly, the maker doesn't need to switch context between desktop and mobile or even correlate the two by thinking about how the designs would differ from each other or behave on the two mediums if the browser were resized. There is no functional relationship between how an app should look on the desktop and how it must on a mobile. The hardcoded MQ break-point that switches context between mobile and desktop layouts is thus plainly non sequitur. 

Toucaan does not use hard-coded MQ breakpoints to switch styling context at all. It uses a [css router](router.md)) instead. 



### Is Toucaan a Design System?

Toucaan is an _expansive_ design system. It aims to cover more mediums on the web than ever before with a sharp focus on accessibility, scaling, and maintainability over the years. Toucaan is also a recipe in motion with a perpetual aim of being better at supporting all kinds of devices on the web.


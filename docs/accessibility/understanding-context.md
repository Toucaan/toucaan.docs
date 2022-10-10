---
sidebar_position: 1
---

# Understanding Context

Toucaan allows you to design and optimize apps for different mediums. 

Mediums can exhibit multiple different set of capabilities and "accessibility situations" depending where and how the device is being used. Adding or removing a peripheral like a mouse, for example, could change the accessibility of a form on a page. 

The accessibility situation of mobile in the hands of someone walking down the pavement is completely different from the accessibility situation of someone driving a Tesla Model S car (where the driver or the pilot is constrained by a safety-belt and is required to focus on the changing road conditions almost continuously). 

It only makes sense to **understand the context of accessibility** and then separate your stylistic choices for the end user on each medium differently. 


### Macro-Optimization

Toucaan's css router allows configuration and processing of stylesheets according to the intrinsic capabilities of the medium _and_ the accessibility situation of those mediums along the axes of intrinsic web design. It also allows the developer to work on logically closer modules together. 

For example, if the intended UX/UI on a tablet is close to the implemented UX/UI of a smartphone, then all one has to do is simply copy `mobile.css` into `tablet.css` and tweak a little here and there. 

Toucaan also helps in avoiding a giant leap that one had to take between a touch-sensitive context (mobile) in portrait  and a pointer-driven context (desktop), both of which, as seen from the plot above, live on entirely different axes of web design.

It helps with a macro-optimization of delivering only relevant CSS for a given device. Users on a mobile, for example, do not need to download and parse six thousand lines of desktop css and override it.

### Micro-Optimization
It separates the CSS modules according to industry-wide categories and not according to the device specifications. If Apple were to release a new iPhone of a different resolution or pixel density tomorrow, our router would be able to serve the new phone with the same mobile.css because it falls under the mobile category.

The design thinking accounts for the orientation, physical size, accessibility constraints, and screen-specific capabilities (touch or pointer-driven) in a way that web design can “belong to” a device. Going intrinsic is perhaps the best way to design and develop native mobile apps using the building blocks of the web-aka, HTML, CSS, JavaScript, and WebAssembly.

It affords better maintainability with proper scoping of stylesheets according to the { app: device } combinations. It helps the developer organize CSS like a mono-repo and keep the designs separate according to medium.

### Disadvantages
It might appear like much CSS to maintain, but if we were to look at a real production-scale app, with all of the reset.css framework.css and app.css, plus the many workarounds over the limitations of RWD, the intrinsic approach is a far more maintainable choice. More often than not, a router would likely split CSS near the past hardcoded MQ breakpoints of RWD.
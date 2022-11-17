---
sidebar_position: 5
---

# 5. The CSS Router

Toucaan uses a [simple router written in plain css](router.md) to prioritize and load the correct stylesheet for a given _class of device_. Among other goals, Toucaan's css router splits one massive stylesheet into several smaller device-specific stylesheets according to the matched route, which in turn relies on the axis of orientation, other capabilities, and the intrinsic size of the viewport.

Read more about the makings of [A CSS Router](https://bubblin.io/blog/a-css-router) with in-depth analysis. 


:::tip
Review of [CSS Level 4 Media Queries](https://bubblin.io/blog/level-4-media-queries) is recommended.
:::

Read the [next chapter](baseline.md) on baselining vendor normalization.
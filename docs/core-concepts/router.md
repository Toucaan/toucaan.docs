---
sidebar_position: 3
---

# The CSS Router

Toucaan uses a [simple css router](router.md) to prioritize and load the correct stylesheet for the corresponding _class_ of device the user is on. This router will separate your stylesheets according to the types (or classes) of devices being served, and help you organize all your application CSS in the appropriate subfolders as shown in the [architecture](#the-architecture) above.

Toucaan uses a simple CSS router to prioritize and load the correct stylesheet for a given _class of device_. 

To set it up, copy the following two files along with their contents in the `router` folder of our [repository](https://github.com/Toucaan/toucaan/tree/master/toucaan/router) on GitHub into the `toucaan/router` folder of your project. 

These two:

1. https://raw.githubusercontent.com/Toucaan/toucaan/master/toucaan/router/portrait.css
2. https://raw.githubusercontent.com/Toucaan/toucaan/master/toucaan/router/landscape.css


:::tip

Reader is recommended to spend some time and review the CSS level 4 media queries.  

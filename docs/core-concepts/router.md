---
sidebar_position: 3
---

# The CSS Router

Toucaan uses a simple CSS router to prioritize and load the correct stylesheet for a given _class of device_. 

To set it up, copy the following two files along with their contents in the `router` folder of our [repository](https://github.com/Toucaan/toucaan/tree/master/toucaan/router) on GitHub into the `toucaan/router` folder of your project. 

These two:

1. https://raw.githubusercontent.com/Toucaan/toucaan/master/toucaan/router/portrait.css
2. https://raw.githubusercontent.com/Toucaan/toucaan/master/toucaan/router/landscape.css

Or if you have `git` installed, you can add the official Toucaan submoduleto your project without worrying about each file separately.

```bash 
cp -R ./cloned/toucaan/router/* ./your/project/toucaan/router/
```


The router on y-axis is used to prioritize the stylesheet loading order.
https://github.com/Toucaan/toucaan/blob/master/toucaan/router/portrait.css


:::tip

Reader is recommended to spend some time and review the CSS level 4 media queries.  

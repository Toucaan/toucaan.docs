---
sidebar_position: 3
---

# The CSS Router

Now that all the folders are in place as done in the [step-1](intro#getting-started), let us set up the css router.
Please copy the following two files from our [Github repository](https://github.com/Toucaan/toucaan/tree/master/toucaan/router) into the `toucaan/router` folder of your project. 


```bash title="cp -R ./somewhere/in/your/project/"
mkdir -p toucaan/{accessibility,app/{desktop,mobile,tablet,vehicle,television,watch},env/{helpers,tags},palette,router,typography,utils}

```

:::tip

Reader is recommended to spend some time and review the CSS level 4 media queries. These properties form the core functionality of Toucaan's approach to Intrinsic Design. 

The router on y-axis is used to prioritize the stylesheet loading order.
https://github.com/Toucaan/toucaan/blob/master/toucaan/router/portrait.css
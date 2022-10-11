---
sidebar_position: 8
---

# 7. DIY Framework

Let us **create a new folder** named `toucaan` somewhere in your project using the following command: 

```bash title="DIY the Toucaan Framework"
cd ./somewhere/in/your/project/

mkdir -p toucaan/{accessibility,app/{desktop,mobile,tablet,vehicle,television,watch},env/{helpers,tags},palette,router,typography,utils}

```

The `mkdir` command above will create all the folders necessary for you to start working with [intrinsic design](https://toucaan.com). These folders will carry ALL THE CSS necessary for your application's **multiple frontends**. 

The next steps would be to 1. set up the css router for Toucaan to distribute the stylesheets with and 2. a baseline reset to normalize browser for each category of device specifically.

### Router
To set up the router, copy the contents of the following two files into the `router` folder of your new sub project.

These two:

    1. https://raw.githubusercontent.com/Toucaan/toucaan/master/toucaan/router/portrait.css
    2. https://raw.githubusercontent.com/Toucaan/toucaan/master/toucaan/router/landscape.css

### Baseline
Toucaan requires configuration of environment variables to ensure consistency across the browsers. Review the contents of the following two folders within the `env` folder of the official Toucaan repository:

    https://github.com/Toucaan/toucaan/tree/master/env

Copy the contents of the folder `tags/baseline` and `helpers` into your local `env` folder, and you're all set.

You _did it yourself!_🔥
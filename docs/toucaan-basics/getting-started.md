---
sidebar_position: 1
---

# Getting Started

The first step is to **create a new folder** named `toucaan` somewhere in your project using the following command: 

```bash title="Setup:"
cd ./somewhere/in/your/project/

mkdir -p toucaan/{accessibility,app/{desktop,mobile,tablet,vehicle,television,watch},env/{helpers,tags},palette,router,typography,utils}

```

The `mkdir` command above will create all the folders necessary for you to start working with [intrinsic design](https://toucaan.com). These folders will carry ALL THE STYLES necessary for your application's **multiple frontends**. 


This chapter is complete. Head over to the next step and set up [a css router](router.md) for your application?


## Quick Overview

### The Architecture

Here is what the folder structure looks like: 

![Toucaan architecture](./img/toucaan-folders.jpg)

This is how css will be organized within the framework folders of Toucaan created for your application:

```bash
project-root
├── toucaan
│   ├── accessibility
│   │   ├── _darkmode.scss
│   │   ├── _notch.scss
│   │   └── _reducemotion.scss
│   ├── app
│   │   ├── desktop
│   │   │   ├── components
│   │   │   │   ├── _hero.scss
│   │   │   │   ├── _form.scss
│   │   │   │   └── Other style files.
│   │   │   ├── layout
│   │   │   │   └── _layout.scss        /* Desktop specific layout. */
│   │   │   └── desktop.scss
│   │   ├── mobile
│   │   │   ├── components
│   │   │   │   ├── _hero.scss
│   │   │   │   ├── _form.scss
│   │   │   │   └── Other style files. 
│   │   │   ├── layout
│   │   │   │   └── _layout.scss        /* Mobile specific layout, and so on…*/
│   │   │   └── mobile.scss
│   │   ├── tablet
│   │   ├── television
│   │   ├── vehicles
│   │   └── watch
│   ├── env
│   │   ├── helpers
│   │   └── tags
│   ├── palette
│   ├── router
│   ├── typography
│   └── utils
```

### Brief Explanation

Toucaan implements a simple architecture to cover the **entire design space** of [the new web](https://bubblin.io/blog/the-new-landscape-of-the-web). There are several new types of devices connected to the web today and mobile responsiveness approach _isn't_ enough anymore.  

Learn about the **Intrinsic Design Space** in the [next chapter](space.md).

Toucaan uses a [simple css router](router.md) to prioritize and load the correct stylesheet for the corresponding _class_ of device the user is on. This router will separate your stylesheets according to the types (or classes) of devices being served, and help you organize all your application CSS in the appropriate subfolders as shown in the [architecture](#the-architecture) above.


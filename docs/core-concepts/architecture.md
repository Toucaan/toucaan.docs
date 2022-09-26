---
sidebar_position: 2
---

# The Architecture

Toucaan organizes all of the css required by your application within itself. Meaning, everything that is used by an app, **lives within the app**, like so:

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
│   │   │   │   └── Other style partials.
│   │   │   ├── layout
│   │   │   │   └── _layout.scss        /* Desktop specific layout. */
│   │   │   └── desktop.scss
│   │   ├── mobile
│   │   │   ├── components
│   │   │   │   ├── _hero.scss
│   │   │   │   ├── _form.scss
│   │   │   │   └── Other style partials. 
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

The folder structure shown above is a simple architecture that covers the [**entire design space**](space.md) of [the new web](https://bubblin.io/blog/the-new-landscape-of-the-web). There are several new kind of devices connected to the web today and with Toucaan you can add support for all of those from one place. 



### Quick Overview

Here is what its internal structure looks like with a File Explorer: 

![Toucaan architecture](./img/toucaan-folders.jpg)


Toucaan aims to cover the **entire design space of [the new web](https://bubblin.io/blog/the-new-landscape-of-the-web)**. There are several new types of devices connected to the web today and mobile responsiveness approach _isn't_ enough anymore.  

Learn about the **Intrinsic Design Space** in the [next chapter](space.md).


---
sidebar_position: 2
---

# 2. The Architecture

### Folder Structure
Displayed below is the folder structure of how Toucaan organizes _all_ css.

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

By design, Toucaan keeps all of the css required by your application in one place. Meaning, **everything that is used by an app, lives within the app!**


### Brief Explanation

Toucaan follows a simple styling architecture that mirrors the reality of devices in the world today. It covers support for **[all the new devices on web](https://bubblin.io/blog/the-new-landscape-of-the-web) with a complete coverage of the [formal intrinsic design space](space.md)**. 


### Quick Overview

Here is what its internal structure looks like with a File Explorer: 

![Toucaan architecture](./img/toucaan-folders.jpg)


Learn more about the **Formal Intrinsic Design Space** in the [next chapter](space.md).

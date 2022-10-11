---
sidebar_position: 2
---

# 2. The Architecture

### Folder Structure

Displayed below is the folder structure of how Toucaan will organize _all_ the css that your application will require.

**"Everything that is used by an app, lives within the app!"**


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

Toucaan follows a simple styling architecture that mirrors the diversity of devices that are on the web today. It covers support for **[all the web devices possible](https://bubblin.io/blog/the-new-landscape-of-the-web) using the principles of [intrinsic design](space.md)**. 


### Quick Overview

Here is what its internal structure looks like with a File Explorer: 

![Toucaan architecture](./img/toucaan-folders.jpg)


Learn more about the **Intrinsic Design Space** in the [next chapter](space.md).


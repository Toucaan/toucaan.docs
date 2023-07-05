---
sidebar_position: 4
---

# 4. Framework Architecture

Toucaan's Design Principle: **"Everything that is used by an app, lives within the app!"**

### Base Structure

Displayed below is the folder structure of Toucaan: 

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

Toucaan organizes _all_ the css that your application will require. 

### Device Coverage 

Toucaan follows a simple styling architecture that mirrors the diversity of devices on the web _today_. It covers support for **[all the web devices](./blog/the-new-landscape-of-the-web)** possible using **[Principles of Intrinsic Design](space.md)**. 

Here is what its internal structure looks like: 

![Toucaan architecture](./img/toucaan-folders.jpg)


Learn more about the **Intrinsic Design Space** in the [next chapter](space.md).


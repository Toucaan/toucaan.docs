---
sidebar_position: 4
---

# Configuration

Sprinkling css into an app is much like setting the environment variables on the client side correctly. Once you have added Toucaan to your project, the next step is to configure it. 




Specify your app's color palette, branding, other defaults etc.


Open the desktop.scss file at toucaan/app/desktop/ on your favorite editor and scroll to the bottom. This is where you'll import all your application-specific or component-specific css.



```css
/***** App specific style below. ******/

@import '../../palette/colors';

/* Samples:

@import './components/header';

@import './components/main';

@import './components/footer';

@import './components/hero';

@import './forms/login';

and so on… ****/
```

Move on to app/mobile/mobile.scss next and so on…

Glance through the remaining subfolders and .scss files that were added to your project. These will contain all the styling code required for your app's frontends across smartwatches, mobile phones, tablets (inclduing foldables/bendables), electric vehicles, desktops, and smart TVs.

> Tip: Start small with just desktop and mobile support initially. Take it further once you're comfortable and at pace for the remaining scope.
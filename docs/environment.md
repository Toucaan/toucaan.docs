---
sidebar_position: 4
---

# Environment Variables

Sprinkling css into an app is very much like setting up the Environment Variables for your app to render correctly on the client side. 

Deciding on a color palette, choosing the right typefaces or font-families, applying a few sane initial defaults for your app to speak of your brand,
there is so much you can do with css. Toucaan makes it really easy to organize and incredibly fast to configure and reconfigure the environment for your app on-the-go!


Open the `desktop.scss` file at toucaan/app/desktop/ on your favorite editor and scroll to the bottom. This is where you'll import all your application-specific or component-specific css.



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
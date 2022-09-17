---
sidebar_position: 4
---

# Environment

Sprinkling css into an app is very much like setting the _Environment Variables_ for your app on the client side. Specify your app's color palette, choose the right typeface, apply a few sane defaults that make the over experience of your app speak of your unbeatable brand.

Let's walk through Toucaan to configure it for best results. 


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
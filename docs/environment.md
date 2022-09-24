---
sidebar_position: 4
---

# Environment Variables

Sprinkling css into an app is a lot like configuring the **environment variables for your app to render correctly on the client side**. It is a part of the responsibilities that a frontend developer must bear. While it may sound like a powerful thing for the developer to lift, the sheer number of options and properties available to configure make it a formidable task.

Toucaan helps organize and manage _all_ possibilities of the environment from one place.

## Vendor Normalization
Handling vendor inconsistencies up close forms the first soft layer of environment configuration that Toucaan must manage for you. Traditional css frameworks require a `reset.css`, `reboot.css`, or `normalize.css` to be included before any other styles or framework defaults can be included. Toucaan **doesn't use this** strategy. 

Toucaan uses the [baseline method](https://bubblin.io/blog/baseline-css) instead.


![Environment architecture](./img/env-folders.jpg)

Inside the ENV folder you'll find two subfolders named `helpers` and `tags` each carrying a few default reset type of rules, but only for baseline tags and a few pseudo-classes that most applications often require. 

This can customized according to the HTML vocabulary of your app.

### Desktop

This is how the environment for a desktop browser is _reset_:

```css title="Open ./toucaan/app/desktop/desktop.scss"
/* Notch handling isn't required on desktops. */
/* @import '../../accessibility/notch';  */

/* ~ Other css and typeset defaults come here */

/* Notice the first Environment Variable. */
@import '../../env/helpers/universal'; 

/* A baseline HTML environment. */
@import '../../env/tags/baseline/html';
@import '../../env/tags/baseline/body';
@import '../../env/tags/baseline/anchor';
@import '../../env/helpers/pseudos';

/* and so on… */
```

:::tip
Remember that the browser on a desktop usually displays along the landscape-axis of intrinsic design whereas mobile does so along the portrait-axis.
:::


### Mobile 
Like with the desktop, the environment of a mobile browser is set like so:

```css title="Open ./toucaan/app/mobile/mobile.scss"
/* Read more about the notch → https://bubblin.io/blog/notch */
@import '../../accessibility/notch'; 

/* ~ Other css and type defaults here */

/* Notice the first Environment Variable. */
@import '../../env/helpers/universal'; 

/* A baseline HTML environment. */
@import '../../env/tags/baseline/html';
@import '../../env/tags/baseline/body';
@import '../../env/tags/baseline/anchor';
@import '../../env/helpers/pseudos';

/* and so on… */
```

:::tip
Configure just the desktop environment first. Take it forward from there, and build support for the mobile next, and so on until you cover all the devices on the web or the entire scope of Intrinsic Design.
:::


## The Color Palette

### Configuration
In the last chapter we were introduced to the `_config.scss` file that Toucaan requires to link stylesheets with the app's HTML.

Break down your default styling strategy into smaller device-compatible units that are uniquely configurable. For example, handling the notch on a few common smart phones isn't a concern for the desktop css. 

Decide on a color palette, choose the right typefaces or host a font-family yourself, typeset with a few sane initial defaults, paint a selection or inactive state color–there are so many css configurations possible! 


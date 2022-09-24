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

Inside the `env` folder you'll find two subfolders named `helpers` and `tags`, each carrying some default styles for a few `html` tags and `psuedos` that most applications require. 


You can customize each according to the vocabulary of your app.

### Desktop

This is how the environment for a desktop browser is set:

```css title="Open ./toucaan/app/desktop/desktop.scss"
/* Notch handling isn't required on desktops. Delete the line below: */
/* @import '../../accessibility/notch';  */

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
Remember that a browser on a desktop usually displays on the landscape axis of intrinsic design whereas mobile displays on the portrait axis.
:::


### Mobile example
Similarly, the environment of mobile phones is set like so:

```css title="Open ./toucaan/app/mobile/mobile.scss"
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
Start small with just desktop environment initially. Take it a step further to supporting mobile next, and so on until you cover the remaining scope of Intrinsic Design.
:::


## The Color Palette

### Configuration
In the last chapter we were introduced to the `_config.scss` file that Toucaan requires to link stylesheets with the app's HTML.

Break down your default styling strategy into smaller device-compatible units that are uniquely configurable. For example, handling the notch on a few common smart phones isn't a concern for the desktop css. 

Decide on a color palette, choose the right typefaces or host a font-family yourself, typeset with a few sane initial defaults, paint a selection or inactive state color–there are so many css configurations possible! 


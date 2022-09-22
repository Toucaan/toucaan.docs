---
sidebar_position: 4
---

# Environment Variables

Sprinkling css into an app is much like setting up the **Environment Variables** for your app to render correctly on the client side. While controlling the environment on the client-side may sound like a powerful thing for a developer to lift, the sheer number of properties and options available make it a formidable task to manage without proper literature.

Toucaan makes it easy to organize and manage the css environment(s) but with essential care.

## Vendor Normalization
Expand the `env` folder inside the `toucaan` submodule.

![Environment architecture](./img/env-folders.jpg)

Inside the `env` folder you'll find subfolders named `helpers` and `tags`, each carrying style for a few `html` tags and `psuedos` that most applications would require. You can customize it according to the html vocabulary of your app.

### Desktop example

This is how the environment for Desktop browser is set from within the `app/desktop` folder.

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

## Configuration
In the last chapter we were introduced to the `_config.scss` file that Toucaan requires to link stylesheets with the app's HTML.


Break down your default styling strategy into smaller device-compatible units that are uniquely configurable. For example, handling the notch on a few common smart phones isn't a concern for the desktop css. 

## Color Palette
Decide on a color palette, choose the right typefaces or host a font-family yourself, typeset with a few sane initial defaults, paint a selection or inactive state color–there are so many css configurations possible! 

## Inline Documentation
Toucaan's [submodule](https://github.com/Toucaan/toucaan) comes with in-line documentation throughout in order to help you configure the css of your application easily with proper understanding. Questions or contributions on the same are most welcome.

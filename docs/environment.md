---
sidebar_position: 4
---

# Environment Variables

Sprinkling css into an app is a lot like configuring the **environment variables for your app** to render correctly on the client-side. It is just one part of the responsibilities that a frontend developer (or designer) must bear. 

While this may sound like a powerful thing to do, but the sheer number of options and properties available to configure before the environment for each medium is fully realized makes it a formidable task.

Toucaan helps organize and manage _all_ the possibilities of the environment for all kinds of devices from one place.

### Vendor Normalization
The first step is vendor normalization to smooth over the last remaining cross-browser inconsistencies between the modern browsers and to guarantee the delivered experience. Handling vendor inconsistencies up close is the first _soft_ layer of environment configuration that Toucaan must manage for you. 

Traditional css frameworks generally require or inject a `reset.css`, `reboot.css`, or `normalize.css` automatically before any other application style or framework defaults are applied. Toucaan **does not use this** strategy. 

It uses the [baseline method](https://bubblin.io/blog/baseline-css) instead.


### Env folder

Open the `env` folder to reveal its contents:

![Environment architecture](./img/env-folders.jpg "selection, selection in inactive state etc.")

Inside the `env` folder you'll find two subfolders named `helpers` and `tags` each carrying a few initial defaults. Only a few baseline tags and pseudo-classes are included in the environment by default but you can add more into the context as per need. 

:::tip vocabulary
The `env` must be customized according to the actual HTML vocabulary of your app. 
:::

**Example:** An email app doesn't need to reset a thousand other tags that a browser could handle like the `video` or the `audio` tag and so on.

### Desktop's Case

This is how the environment for a desktop browser is _reset_:

```css title="Open ./toucaan/app/desktop/desktop.scss"
/* Notch handling isn't required on desktops. */
/* @import '../../accessibility/notch';  */

/* ~ Other css and typeset defaults might come here */

/* Notice the first Environment Variable. */
@import '../../env/helpers/universal'; 

/* A baseline HTML environment. */
@import '../../env/tags/baseline/html';
@import '../../env/tags/baseline/body';
@import '../../env/tags/baseline/anchor';
@import '../../env/helpers/pseudos';

/* and so on… */
```

:::info
Remember that the browser on a desktop usually displays along the landscape-axis of intrinsic design whereas the mobile does so along the portrait-axis. So the parameters for the intrinsically scaling typography system would be different for each medium. More on this later.
:::


### Mobile's Case 
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


Since most developers and designers like to work on a desktop, Toucaan recommends to **configure the desktop environment first**. Not mobile-first! And then take it forward from there to mobile and then to tablets until you have built support for all the other kinds of devices on the web like EVs, foldable phones or tablets, watch, and TVs or projectors. 


### Head Level Configuration
A part of the configuration options provided in the `_config.scss` file (see the [last chapter](./configuration.md)) are also environment properties. 

Here are some of the things for you to configure:

1. Decide on a color palette, 
2. Choose the right typeface(s), 
3. Host the type yourself or use a service, 
4. Apply initial defaults for common tags (or use the one provided), 
5. Choose a selection color in active and inactive states, 
6. Configure behavior and accessibility of form elements, and so on… 

The key here is to break it down into small piece and config the framework as you go on to build intrinsic UX/UI for each device category that you end up supporting for your users. Contextualize properties like `touch-action: auto` and `pointer: coarse` according to the need of the medium and move them out of the way from environments that do not require those.

Go to the next chapter on [Intrinsic Typography](./typography).

---
sidebar_position: 3
---

# Setup/Configuration 

Toucaan has a unique way of connecting stylesheets to your app's HTML. Unlike the traditional css frameworks, Toucaan uses [critical css](https://github.com/Toucaan/toucaan/blob/master/_critical.scss) and [a css router](core-concepts/router.md) to include Toucaan on your page instead of the `link` tag. 


### Critical CSS
```HTML
 <link href="/some/stylesheet.css" rel="stylesheet"/> ← Do not use this! 🚫
```

The [critical rules of css](https://github.com/Toucaan/toucaan/blob/master/_critical.scss) go directly into the head of your HTML, and it contains rules that are important for your app's design, layout, or the brand layer. Paste it directly into your document's head within a `style` tag:

```css title="CSS router level-0, @font-faces, and other initial critical css."
<style>
    /* Always set Charset. Recommended reading: https://www.w3.org/International/questions/qa-css-charset.en */
    @charset "UTF-8";

    /* Use font-subsetting whenever possible */
    @import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap&text="RedGosithub"');

    /* Router level-0 Start*/
    :root {
        /* Do not remove or alter the lines within this block     */
        /* Recommended reading: https://www.toucaan.com/blog/a-css-router */
        --portrait-axis: /toucaan/router/portrait.css;
        --landscape-axis: /toucaan/router/landscape.css;
    }

    /* Portrait ⇋ landscape intrinsicality switch. */
    @import url(var(--portrait-axis)) screen and (orientation: portrait);
    @import url(var(--landscape-axis)) screen and (orientation: landscape);
    /* Router level-0 End*/

    /* --vmin is a utility variable for the base unit of intrinsic blockscoped typography. */
    @media only screen and (orientation: portrait) {
        :root {
            /* Fallback if vmin is not supported. */
            --vmin: calc(100vw/100);
        }
    }

    @media only screen and (orientation: landscape) {
        :root {
            /* Fallback if vmin is not supported. */
            --vmin: calc(100vh/100);
        }
    }

    /* Global variables below */
    :root {
        --vmin: 1vmin;

        /* System font families. */
        --sans-serif: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
        --system: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Droid Sans, Helvetica Neue, Fira Sans, sans-serif !important;
        --monospace: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
        --serif: -apple-system-ui-serif, ui-serif, "Apple Garamond", "Baskerville", "Times New Roman", "Droid Serif", "Times", "Source Serif Pro", serif;

        /* Set your custom font unto a variable over here, like so: */
        --eina-one: 'Eina01 Regular', sans-serif;
        /* (Example taken off of Red Goose → https://goose.red.) */

        /****** THE FULL COLOR PALETTE *******/
        --white: rgba(255, 255, 255, 1);
        --black: rgba(0, 0, 0, 0);

        /* Implement color palette for your brand. { Eval → /accessibility/_darkmode.scss. }. */
        /* Recommended reading → Building Your Color Palette by Adam Wathan. https://www.refactoringui.com/previews/building-your-color-palette

        --lightmode-primary-text-color:
        --lightmode-primary-headings-color:
        --lightmode-primary-background-color:

        /* Set anchor color
        --lightmode-primary-anchor-color: rgba(25, 95, 255, 0.99);
        --lightmode-primary-anchor-highlighted-color: rgba(50, 140, 255, 0.99);


        /* What this is → TODO: doc link here*/ /*
        --lightmode-text-selection-color:
        --lightmode-background-selection-color:

        /* What this is → TODO: doc link here*/ /*
        --lightmode-background-selection-window-inactive-color:
        --lightmode-text-selection-window-inactive-color:

        /* What this is → TODO: doc link here*/ /*
        --lightest-grey:
        --lighter-grey:
        --light-grey:
        --grey:
        --dark-grey:
        --darker-grey:
        --darkest-grey:

        and so on…*/

}
</style>
```

Notice how the router files are called from within the critical css above.

### The CSS Router

Toucaan's [css router](core-concepts/router.md) automatically _prioritizes_ and serves the right stylesheet according to user's medium or _class of device_. 

Notice the use of **asynchronous CSS @import** (not SASS @import) in the routing code embedded above! You can read more about how Toucaan's [css router](https://www.toucaan.com/blog/a-css-router) works and its implementation philosophy.

:::info CSS @import vs. SASS @import 
Toucaan uses both css @imports and sass @imports. As a framework convention, Toucaan puts css imports to use for framework code only, whereas sass imports are meant for **user-defined** or application style. 
:::

The basic HTML linking configuration shown above is included with the Toucaan [submodule](https://github.com/Toucaan/toucaan/blob/master/_critical.scss) (that you installed earlier). Ensure the paths to the router assets (i.e. css files like `portrait.css` and `landscape.css`) and the compiled assets (i.e. **user-defined stylesheets** for device specific distribution) are correct and accessible over the wire.

Go to the [next chapter](./processor) and set up SASS pipeline for your application's style.

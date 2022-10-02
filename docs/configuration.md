---
sidebar_position: 3
---

# HTML Configuration

Toucaan has a different way of connecting stylesheets to your app's HTML. Unlike traditional css frameworks, Toucaan **does not use** a typical link tag in the `<head></head>` of the webpage.

:::warning Do not use the link tag!
`<link href="path/to/stylesheet.css" rel="stylesheet"/>`  ❌ 
:::

Toucaan uses [a css router](core-concepts/router.md) instead. 

Consider the following [block of code](https://github.com/Toucaan/toucaan/blob/master/_config.scss) that is placed directly into your document's `<head></head>` tag:

```css title="Put the following code inside your document's head."

<style>
    /* Always set Charset. Recommended reading: https://www.w3.org/International/questions/qa-css-charset.en */
    @charset "UTF-8";   

    /* Use font-subsetting whenever possible */
    @import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap&text="RedGosithub"'); 

    /* Router level-0 Start*/
    :root {
        /* Do not remove or alter the lines within this block     */
        /* Recommended reading: https://bubblin.io/blog/a-css-router */
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

:::info CSS @imports 
Notice the use of asynchronous CSS @import in the routing code above. The appropriate stylesheet is _prioritized_ and served to the browser according to the matched _class_ of device. 

Read more about Toucaan's [css router](https://bubblin.io/blog/a-css-router) and its implementation philosophy.
:::

:::info SASS @imports 
Toucaan also uses SASS imports but only at the level of user-defined styles. 
:::


The basic configuration shown above is included with the Toucaan submodule. Make sure that the path to the router assets i.e. files like portrait.css, landscape.css, and the compiled assets i.e. other stylesheets for device specific distribution is correct and accessible over the server.

Go to the next chapter and set up the [Environment Variables](./environment.md).


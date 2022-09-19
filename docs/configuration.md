---
sidebar_position: 3
---

# Configuration

One of the important ways Toucaan is different from other css frameworks is that it **does not use** a typical `<link href="path/to/styles.css"/>` tag to connect to your app's HTML with the stylesheets. 

Toucaan uses a [css router based on css @imports](fundamentals/router.md) instead. 

Consider the following [code](https://github.com/Toucaan/toucaan/blob/master/_config.scss) inside a `<style></style>` tag placed in your document's `<head/>`:

```css title="Put the following code inside your document's <head></head> tag."

<style>
    @charset "UTF-8";   

    /* Replace with fonts you like. */
    @import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap&text="RedGosithub"'); 

    /* Axes of Intrinsic Design. Read @https://toucaan.com/docs/fundamentals/space */
    @import url('/toucaan/router/portrait.css') screen and (orientation: portrait);
    @import url('/toucaan/router/landscape.css') screen and (orientation: landscape);

    /* --vmin is the foundation unit of intrinsic typesetting. */
    @media only screen and (orientation: portrait) {
        :root {
            --vmin: calc(100vw/100); /* Fallback if vmin not supported.*/
        }
    }

    @media only screen and (orientation: landscape) {
        :root {
            --vmin: calc(100vh/100); /* Fallback if vmin not supported. */
        }
    }

    /* Global variables below: */
    :root {
        --vmin: 1vmin;

        /* Useful system font families. */
        --sans-serif: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
        --system: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Droid Sans, Helvetica Neue, Fira Sans, sans-serif !important;
        --monospace: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
        --serif: -apple-system-ui-serif, ui-serif, "Apple Garamond", "Baskerville", "Times New Roman", "Droid Serif", "Times", "Source Serif Pro", serif;
        
        /* Set your custom font unto a variable over here, like so: */
        /* --your-custom-font: 'Pacifico', serif; */

        /****** THE COLOR PALETTE *******/
        --primary-text-color: rgba(60, 74, 91, 0.99);
        --primary-headings-color: rgba(60, 74, 91, 0.99);
        
        /* Set anchor color */
        --primary-anchor-color: rgba(25, 95, 255, 0.99);
        --primary-anchor-highlighted-color: rgba(50, 140, 255, 0.99);


        --white: rgba(255, 255, 255, 1);
        --black: rgba(0, 0, 0, 0);	
        
        /* Implement the color palette for your brand.                        */
        /* Check out → /accessibility/_darkmode.scss as well.                 */
        /* Recommended reading → Building Your Color Palette by Adam Wathan.  */ 
        /* https://www.refactoringui.com/previews/building-your-color-palette */
        /*

        Specify with degree of color like so: 
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
The basic configuration shown above is included with the Toucaan submodule. Make sure that the routes to the router files [portrait.css, landscape.css] are correct and accessible on the server.

Go to the next chapter and set [Environment Variables](./environment.md).

##### Contribute to this page?
Open `docs/configuration.md` and edit or add the lines you wish to. The site **reloads automatically** and displays your changes.
---
slug: baseline-css
title: A Modern Baseline 🎾
authors: [marvin]
tags: [toucaan, css, reset]
---

---
_This article was originally featured on the [The Bubblin Blog](https://bubblin.io/scrolls/blog)._

---


# Baselining Reset CSS

In the last chapter, we created a [blank file](https://raw.githubusercontent.com/bookiza/toucaan/master/examples/example0.html) to test the responsiveness of an empty page. That worked fine and was easy enough to implement. 

We simply touched a new file on the disk and [opened](https://raw.githubusercontent.com/bookiza/toucaan/master/examples/example0.html) it on a browser like Chrome.

<!--truncate-->

```bash
$ touch example0.html     // Create a new file but do not write anything on it.

$ chrome example0.html    // Open this 0 byte files on your favorite browser.
```

Great! We can not take our work on the [Toucaan CSS framework](https://toucaan.com) further. Try inspecting this 0-byte blank page on the console of your browser. 

Press `⌘+⌥+I` keys if you are on the Mac with Google Chrome:

![Blank webpage on the browser window.](https://raw.githubusercontent.com/marvindanig/assets/master/blank-page.jpg)


You will see that even though we loaded a blank file inside the browser window, there are still a few `html` elements that are rendered within the DOM. Every web browser renders these elements simply to display a blank webpage correctly.

Browsers will "fix" the `html` on page because it is in its nature to do so. To be forgiving and to be smart about handling common issues like missing or unmatched tags quietly.

```html
<!-- Blank page as rendered on desktop Chrome, Firefox, Brave & Safari. -->
<html>
  <head></head>
  <body></body>
</html>
```

In the 'Styles' section (see the screenshot above) of your browser's console, notice how the browser also uses a default user-agent [^1] stylesheet called the `html.css`. This `html.css` file contains the default set of rules that each browser is shipped with at source. It comes with the installed browser on your machine. 

Up until a few years ago it was this `html.css` file that was the cause of much pain to the frontend community. It was riddled with several cross-browser inconsistencies across versions and vendors both. Thankfully, those days are behind us and latest the `html.css` are almost as good as the resets themselves.

We can argue that `html.css`—the unset cascade—is practically consistent across the board. This much `reset` is enough for modern day web-apps.


Info "A new baseline for vendor normalization"
Modern web browsers have evolved to a point where a heavy-handed reset or a massive CSS normalization is no longer required. 

In this chapter we will implement a fundamentally different type of reset by uncovering only the bare minimum ruleset that is necessary for consistency. According to the new [landscape of the web](https://bubblin.io/blog/the-new-landscape-of-the-web). 
 

A light new [reset](https://hankchizljaw.com/wrote/a-modern-css-reset) was suggested for blogs by Andy Bell. While this reset is limited in scope for a blog only, it does establish the fact that there is very little arm-twisting required over browser's initial defaults to establish consistency. 

This is both great news and one of the main reasons why we will keep Toucaan's reset a loosely coupled baseline for moderns apps of late.

Coming back to the DOM with an empty webpage again, given that there are only three html elements required for a webpage to render correctly–to be valid–we will start with baselining Toucaan for only three basic html elements that a webpage requires, namely:

The…

    1. `<html>` tag or the **:root** element,
    2. `<body>` tag, and the…
    3. `<head>` tag.

Since the `<head>` element is always set to `display:none;` there are only two html tags `<body>` and `<html>` for us to dabble with effectively. 

Shown below is how we'll structure the baseline reset with Toucaan:

```html
<style>
    /* The following CSS router uses pure css @imports and not sass/scss. */
    @import url('toucaan/portrait/portrait.css') only screen and (orientation: portrait);

    @import url('toucaan/landscape/landscape.css') only screen and (orientation: landscape);

    @media only screen and (orientation: portrait) {
        :root {
            /* Portrait variables go here.  */
        }
    }

    @media only screen and (orientation: landscape) {
        :root {
            /* Landscape variables go here. */
        }
    }

    /* Minimum HTML elements required for a valid webpage. */
    html { 
      /* Some rules here. */
    }

    body { 
      /* Some more rules here. And…*/
    }
</style>

```



…that's it. This is what our baseline reset or reboot look like.

What this means is that everything else, every other semantic tag that will go into building an application will have its reset on your css optionally. It would depend on the nature of business of the website. 

A video hosting site like Youtube for example will reboot the `video` tag whereas a blog would reset the `article` tag and so on…

I suspect that there wouldn't be many rules to import even on the most sophisticated web applications out there and in nearly all situations the framework could provide a watered down classless reset along with a few reusable utility classes to complete the solution. 

This is just an opinion right now. 

Let us see where we go with Toucaan without making any assumptions.

Note that in the baseline above I have inlined the `portrait` ⇋ `landscape` switch before the base tag selectors for `html` and `body` elements. And put all of it inside a `<style> … </style>` tag. I did not use the `link` tag to include the stylesheet like it is done with older css frameworks.


We do this to provide all above-the-fold i.e. [critical](https://css-tricks.com/annotating-critical-css) [css](https://css-tricks.com/authoring-critical-fold-css/) for speediest FCP (First Contentful Paint) and to declare all the global custom CSS properties from one place.

> Note "CSS @imports"
> Some of you pointed me towards Steve Souder's article [don't use @import](http://www.stevesouders.com/blog/2009/04/09/dont-use-import/) from 2009 but I can confirm that this position is no longer valid. The fact that almost 50% of the web is on http/2 and that there is a possibility of hard-caching all delivered CSS using a serviceworker, I think we are in good place to start using CSS imports in modern applications. 
>
> Besides that our little CSS router (the import switch) helps us request only one external CSS file depending on the axis (or mode) of viewport, namely landscape or portrait. Just like a \<link\> url does!
>
> Feel free to dissect the position I have taken on using CSS @imports for Toucaan but for now I am gonna happily report that **not using CSS imports** to separate critical from non-critical CSS is an anti-pattern that should do be done away with. Toko, toko!

Great. We now have the foundation for a new type of reset CSS. Let us add some flesh on it next and talk about intrinsic layouts and blockscoped typography.


## Layouts with CSS Grids.

One of the things that I am super(!) chuffed about using for layouts on Toucaan is the CSS grids. Layouts on Toucaan are going to be exclusively CSS grids. We can enable CSS grids by simply adding the following rule on the `body` element of our inline-reset, like so:

```css
    body {
        display: grid; /* Or place `display:grid` on the root element of your vue or react app.
    }
```

…but it is ideal to do so on a sub-element of `body` tag instead. Like a `div` that'd contain your Vue or React app. 

That's it. 

We are all set for _any_ kind of layout with Toucaan now.

Enabling a grid on the body ensures that every direct child on-page can now behave as part of a larger blueprint specified under a grid system. Not only that, we can also specify different layouts for portrait and landscape modes each and swap out the layout according to the "state" of the viewport. 

YMMV, but I don't think there is any other way I would do layouts in 2023.


[Support for CSS Grids](https://raw.githubusercontent.com/marvindanig/assets/master/css-grids.jpg)


As you can see, the support for CSS grids has <a rel="nofollow" href="https://caniuse.com/#feat=css-grid">grown</a> over the years and is now available on every major browser.

Here is what our inline-reset with CSS grids looks like:

```html
<style>
    /* The following is pure css and not sass/scss. */
    @import url('toucaan/portrait/portrait.css') only screen and (orientation: portrait);

    @import url('toucaan/landscape/landscape.css') only screen and (orientation: landscape);

    @media only screen and (orientation: portrait) {
        :root {
            /* Portrait variables go here.  */
        }
    }

    @media only screen and (orientation: landscape) {
        :root {
            /* Landscape variables go here. */
        }
    }

    /* Bare minimum elements required for a valid webpage */
    html {}
    body {
      display: grid; /* Tentative: Semantic layouts follow! */
    }
</style>
```

## Why css grids only? 

Why not float or flexbox? 

Thing is that if you want to do modern layouts today, you probably shouldn't be using flexbox or floats anymore. It is just plain wrong. This of course does not mean that you shouldn't use flexbox or floats on your CSS at all. 

Use them generously wherever required. But it is only meaningful at element level instead of a sitewide layout. Using flexbox or floats for layouts specifically is somewhat an anti-pattern. It is a hack that we have gotten used to since we had to live with it during the absence of CSS grids. 

I feel very strongly about this so let me explain this a little more.

The body element on an empty webpage is like a raw piece of land waiting to be cut-up into smaller pieces. The foundation of your home. The real-estate. Each of these tiny pieces or parts have a  purpose for your site–like a kitchen or a bedroom or a living space–but all of them taken together form a larger whole or the blueprint of your home that sits on the top.

CSS grids treat these rectangular pieces like a jigsaw puzzle that sit next to each other meaningfully in _harmony_ with shared edges to form the whole website. It is a very top-down view of the layout. 

Whereas with flexbox you are more at the element level. Flexing is like the kitchen saying 'hey, I am a DIV and I am going to be stretching all the way leftwards' to occupy whatever space is available. Flexbox adds a behavior to the HTML element that needs to be counterbalanced by another element (often sibling) with a behavior in the opposite direction. Like a traffic jam.


It is like two people flexing their muscles against each other and in the process locking themselves in to form a layout. A sort of dynamic equilibrium instead of harmony and not a very ideal situation because if the viewport were to go ultra-widescreen out there the layout will likely fail.

After having dabbled with CSS floats, flexbox and whatnot for years, I am convinced that CSS grids are the only logical way to do layouts. It is simple, semantic and much easier to reason about than anything else.


![A soup of elements in a traffic jam.](https://raw.githubusercontent.com/marvindanig/assets/master/traffic-jam.jpg)



Similarly, using CSS floats with a left or right momentum on the element turns a webpage into a traffic jam. Almost always there is at least one element that is trying to get ahead of the others. Such a layout too is locked in a dynamic equilibrium that can easily fail on ultra-widescreens or other weird situations. CSS floats for layouts are an absolute no-no!

Another aspect is maintainability where the CSS grids shine. The amount code required to deliver a layout with CSS floats or flexbox is generally always higher than with CSS grids. 

In my opinion, since layout is the blueprint of the foundation on which a website would be built, it is better to use CSS grids to specify how the parts come together meaningfully and form a natural layout. Doing anything else like using the flexbox or CSS floats or tables (does anyone?) is just plain wrong.


This bring us to the final piece of this article.



## Block scoped Typography.

The second beast that we are going to go after with Toucaan is block-scoping typography. Before we start on it, let us look at one of the CSS memes that gets thrown around a lot in tech circles. 

It's about how difficult it is to fit overflowable text inside a box:



![CSS is Awesome!](https://raw.githubusercontent.com/marvindanig/assets/master/cssisawesome.png)



We will first tackle the "text in a box" problem using our `portrait` ⇋ `landscape` switch. Scaling content is obviously a hard problem so we are going to rely more on math here than art. 

Displayed below is the css code that I penned using intrinsic typography:


<p class="codepen" data-height="300" data-theme-id="20737" data-default-tab="css,result" data-user="marvindanig" data-slug-hash="bGGRZdE" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="CSS is Awesome">
  <span>See the Pen <a href="https://codepen.io/marvindanig/pen/bGGRZdE">
  CSS is Awesome</a> by Marvin Danig (<a href="https://codepen.io/marvindanig">@marvindanig</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>


Open this Codepen on your browser and scale the window to see how the text behaves. The contents will scale naturally down to subpixel accuracy without use of any javascript, type, or safe range of `clamp()` or `minmax()`. All of that with just a simple orientation switch reliably.

Does it not 🤯 your mind? 🤙🏻

Let us look at the step-by-step solution next:

#### Step 1

We start with the following HTML:

```html
<div class="box">
  <p>CSS</p>
  <p>is</p>
  <p>awesome.</p>
</div>
```

We didn't have to separate the three words into three separate lines (`p` tags) but it offers better control, so we go with it. Then on CSS we define the font-size according to the orientation of the viewport:

```css
/* CSS */
*,
*:after,
*:before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

@media only screen and (orientation: portrait) {
  :root {
    --vmin: calc(100vw/100);
  }
}

@media only screen and (orientation: landscape) {
  :root {
    --vmin: calc(100vh/100);    /* Axiom: 100vh of landscape === 100vw of portrait. */
  }
}

:root {
  --vmin: 1vmin;
}

```

We are banking on the shorter side of the screen–breadth of the rectangular screen as opposed to length–for reliable scaling. The following two axioms, why:

    Axiom 1: "100vh of landscape === 100vw of portrait." 
    Axiom 2: The shorter side of the rectangle i.e. breadth has lesser delta i.e. potential of variation upon resizing.

#### Step 2.

We know that the box around the text is a square, so its sides are equal. ~~To start I am going to use viewport width to specify dimensions of our `div.box` inside the portrait part of our orientation switch:~~ We set the sides of the square to 50% of screen breadth where each `--vmin` custom property equals the viewport width or the viewport height (the lower of the two) depending on orientation:


```css
*,
*:after,
*:before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

@media only screen and (orientation: portrait) {
  :root {
    --vmin: calc(100vw/100);
  }
}

@media only screen and (orientation: landscape) {
  :root {
    --vmin: calc(100vh/100);    /* 100vh of landscape === 100vw of portrait. */
  }
}

:root {
  --vmin: 1vmin;
}

.box {
    text-transform: uppercase;
    font-family: arial, sans-serif;
    font-weight: 600;
    text-align: center;
    width: calc(50 * var(--vmin));    /* 50% of breadth */
    height: calc(50 * var(--vmin));
    border: calc(2 * var(--vmin)) solid black;

}

/* Simple blockscoped typography based on breadth of the rectangle . */
p:nth-child(1) {
    font-size: calc(1/4 * 50 * var(--vmin));              /* 25% of the width of the box. */
    line-height: calc(1.25 * 1/4 * 50 * var(--vmin));     /* Line height = 1.25 */
}

p:nth-child(2) {
    font-size: calc(50/4 * var(--vmin));
    line-height: calc(1.25 * 50/4 * var(--vmin));
}

p:nth-child(3) {
    font-size: calc(50/6 * var(--vmin));
    line-height: calc(1.25 * 50/4 * var(--vmin));
}


/* Required on Codepen: */
body {
  min-height: 100vh;
  display: -webkit-box;
  display: flex !important;
  align-items: center;
  justify-content: center;
}

```


#### Step 3.

Great! 

Now we have a square with dimensions of `calc(50 * var(--vmin))` units. To blockscope typography inside of the box, we will use its dimensions to scale the font size and line-height, like so:

```css
/* 25% of the width of the box. */
font-size: calc(1/4 * (50 * var(--vmin)));

/* Line height = 1.25 times font size */
line-height: calc(1.25 * 1/4 * 50 * var(--vmin));
```

That's it.

The text in the box will now scale intrinsically and belong to the box with subpixel accuracy as the browser is resized or when the orientation is changed. Scaling is so accurate with it that even reflow isn't triggered 99.9% of the time! 

I must impress here that no special formula has been used here and the above trick works great on all the modern browsers. Ala, it is time to welcome to **blockscoped intrinsic typography** with Toucaan now. 😎

Feel free to test the <a rel="nofollow" href="https://codepen.io/marvindanig/full/bGGRZdE">demo</a> by resizing your browser to its extremes and by going on any device between an Apple Watch 5 to OLED TVs. Report <a rel="nofollow" href="https://github.com/bookiza/toucaan/issues">issues</a> on Github if you bump into one.

Given that there is so much that can happen with typefaces, I'll keep the horses of my ideas with block-scoped typography in check. Remain in an evaluative mode for now. It is yet to be seen if Toucaan can nail intrinsic layouts with block-scoped typography, especially on some more complex application layouts. So look out for another chapter on this topic soon!




---

#### A note about on-screen vocabulary:

Height and width is how we usually refer to the dimensions of a viewport. By using these terms we assume that the screen in front of the user is always vertical. A monitor is sitting on the table such that the contents are displayed on a screen along the vertical plane. 

This assumption is okay as long as the use-case is that of the desktop. 

Height and width become invalid labels as soon as we start using mobile or tablet in awkward sitting or lying positions. i.e. when the device is not held up vertically.


![Portrait or landscape rectangles](https://raw.githubusercontent.com/marvindanig/assets/master/rectangles.jpg)


One could be lying down on a sofa looking up towards the ceiling with a phone in hand or looking down on a tablet lying flat on a desk in kitchen. Since the screen of a handheld device is no longer restricted to displaying content along the vertical plane, using height and width to specify its dimensions isn't always accurate. 

Labeling it with length and breadth however does work no matter what the orientation of the screen is.

[^2]: For the sake of clarity, Toucaan will use mathematical labels _length_ and _breadth_ to describe the rectangular screen instead of height and width. There is also an added advantage of doing so—we exactly know which side of the two is shorter in dimension when the breadth is specified.



---

## The final reset

This is what our final `reset.css` on Toucaan looks like:

```html
/* Modern reset using CSS Grids for layouts,    */
/* a typography pallete with block scopes and   */
/* a few accessibility-first media queries.     */

<style>
    @charset "UTF-8";   /* Recommended reading: https://www.w3.org/International/questions/qa-css-charset.en */

    /* Option 1. Use system fonts */

    /* Option 2. Use 'privacy safe' self-hosted typefaces with subsetting, or use…  */
    @font-face {
        font-family: "Font Family";
        src: url(data:font/opentype;base64, _font_subsetted_string_);
        font-style: normal;
        font-weight: 300;
    }

    /* Option 3. Hosted typefaces such as from Google Fonts. */
    @import url(https://fonts.googleapis.com/css?family=Font+Family:300,300i&display=swap);

    @import url('toucaan/portrait/portrait.css') only screen and (orientation: portrait);

    @import url('toucaan/landscape/landscape.css') only screen and (orientation: landscape);

    @media only screen and (orientation: portrait) {
        :root {
            --vmin: calc(100vw/100); /* Tentative */
        }
    }

    @media only screen and (orientation: landscape) {
        :root {
            --vmin: calc(100vh/100);  /* Tentative */
        }
    }

    :root {
      --vmin:1vmin;

      /*Font familia */
      --sans-serif: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
      --system: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Droid Sans, Helvetica Neue, Fira Sans, sans-serif !important;
      --monospace: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
    }

    /* Sane defaults below */s
    *, *:after, *:before   {
        box-sizing: border-box;
        /* I have a feeling that using margin & padding on elements instead */
        /* of flexbox is somewhat an anti-pattern now, but I am not entirely sure. */
        /* Will come back on this issue in sometime. */
        margin: 0;
        padding: 0;
    }

    html {
        background-color: white; /* Always set the background color */
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        overflow-x: hidden;
        overflow-y: scroll;
        text-size-adjust: 100%;
    }

    body {

        /* Move this into font-family. */
        font-size: calc(4 * var(--vmin)); /* Theoretical a.t.m */
        font-family: 'Font Family', var(--system);  /* 'Font Family', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Droid Sans, Helvetica Neue, Fira Sans, sans-serif!important; */

        font-smooth: always;
        font-weight: 300;
        font-style: normal;
        font-synthesis: none;
        font-stretch: ultra-condensed;
        font-variant: no-common-ligatures proportional-nums slashed-zero;
        font-kerning: normal;
        text-rendering: geometricPrecision; /* Why not: text-rendering: optimizeSpeed;?… in light of PWA. */
        font-display: swap;
        font-display: optional;

        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        -webkit-backface-visibility: hidden;

        line-height: calc(1.5 * 4 * var(--vmin));  /* Or 1.5 */

        /* Colors + contrast (This will go into the color palette.) */
        color: rgba(0, 0, 0, 0.95);
        background-color: white;

        /* Dimensions */
        border: none;
        min-height: 100vh;

        /* Behavior */
        overflow: auto;
        -webkit-overflow-scrolling: touch;
        scroll-behavior: smooth;
        touch-action: auto;
        display: grid; /* Grids are meant for layouts, flex are meant for element behavior! */
    }



    /* Accessibility specific media queries go below. */

    /* 1. Dark mode (or light) depending on requirement. */
    @media screen and (prefers-color-scheme: dark) {
        body {
            background-color: #343434;
            color: #fff;
        }
    }

    /* 2. Override animations for users with motion sickness or other vestibular disorders. */
    @media (prefers-reduced-motion: reduce) {
        * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
        }
    }

    /* 3. Acquired notched space and make sure iOS Safari uses only the available vertical height (100vh). */
    @supports(padding:max(0px)) {
      body, header, footer {
        padding-left: min(0vmin, env(safe-area-inset-left));
        padding-right: min(0vmin, env(safe-area-inset-right));
      }
      body {
        min-height: -webkit-fill-available;
      }


</style>

```

Welcome to intrinsically scalable layouts using Grids, intrinsic blockscoped typography with Toucaan.


I have updated the [Toucaan](https://github.com/bookiza/toucaan) repository according to this article. Please note that everything on this repo is currently experimental in nature, so feel free to question, star, or offer sage advice. 

Contributions to Toucaan are super welcome. Say _toco, toco!_

---

Written by: Marvin Danig, CEO & Cofounder of [Bubblin Superbooks](https://bubblin.io). Follow me on [Twitter](https://twitter.com/marvindanig) or [Github](https://github.com/marvindanig)?

Super thankful to Sonica Arora, Satyendra Sharma and Abigail Rennemeyer for all the editing help on the article above.

[^1]:  "html.css" 

To see what the latest `html.css` looks like on major browsers today:

1. Webkit html.css @[Chrome & @Safari](https://trac.webkit.org/browser/trunk/Source/WebCore/css/html.css").

2. Quantum html.css@ [Firefox](https://dxr.mozilla.org/mozilla-central/source/layout/style/res/html.css).

3. Chromium html.css@ [Blink or Edge browser](https://chromium.googlesource.com/chromium/blink/+/master/Source/core/css/html.css) 


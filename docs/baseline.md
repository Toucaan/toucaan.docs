---
sidebar_position: 6
---

# Baseline Assets

Unlike traditional css frameworks, Toucaan does not use a heavy reset or normalize. It uses a very small set of pre-configured baseline assets to ensure cross-browser consistency. 

For example, the following two blocks of code are added in the style tag of your document at head level, like so: 

```css title="baseline.css > html element"

    html {
        /* Always set the background color */
        background-color: var(--background); 

        /* Configure type rendering */
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        
        /* Scroll or panning control */
        overflow-x: hidden;
        overflow-y: scroll;
        text-size-adjust: 100%;
    }

    body {

        /* Font family lives inside the Typography folder. */
        font-family: 'Font Family', var(--system);  

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

        /* Colors + contrast (These go into the color palette.) */
        color: var(--foreground-primary);
        background-color: var(--background);

        /* Dimensions */
        border: none;
        min-height: 100vh;

        /* Behavior */
        overflow: auto;
        -webkit-overflow-scrolling: touch;
        scroll-behavior: smooth;
        touch-action: auto;
        
    }


```



Intrinsic design relies on the fact that the modern web browsers have evolved to a point where a heavy-handed reset or a massive CSS normalization is no longer required.




https://github.com/Toucaan/toucaan/blob/master/toucaan/router/portrait.css
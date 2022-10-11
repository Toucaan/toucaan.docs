---
sidebar_position: 8
---

# Physical Units

:::warning Do not use in production
This is an experimental chapter with an immature technology. It is not safe for use in production for any kind of service that the users rely on.
:::

Toucaan allows use of **accurate physical units** (standard or imperial) like the `inch` or `centimeters` for application design with the [**--inch**](https://github.com/Toucaan/--inch) utility variable poly-fill. Please refer the documentation of the poly-fill to set it up for your project. 

```css
 /* Import the `--inch` variable. */
  @import url('path/to/--inch.css') only screen;

  /* Portrait ⇋ landscape switch. */
  @import url('/dist/portrait.css') only screen and (orientation: portrait);
  @import url('/dist/landscape.css') only screen and (orientation: landscape);

  :root {
    /* Other utility variables are specified here… */

  }

```




:::info CSS Standard 
In the past CSS used to require that implementations display absolute units correctly even on computer screens. But as the number of incorrect implementations always outnumbered the correct ones… the requirement was dropped in 2011. [source](https://www.w3.org/Style/Examples/007/units.en.html)
:::


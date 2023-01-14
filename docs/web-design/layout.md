---
sidebar_position: 2
---

# Layouts 
Toucaan allows you to choose any **layout mode** for your application that fits your use-case. 

:::tip How to choose the layout mode?
- Is your application more app-like a digital exchange or stocks app? If yes, then go for grid or Flexbox.
- Is your application content heavy-like Wikipedia or a blog? Go for flow based layout.
:::


### What is a Layout Mode?
A css layout mode, sometimes called layout, is an algorithm that determines the position and size of boxes based on how they interact with their siblings and ancestors within the DOM. 

Think of each layout mode as its own little design-language. The default layout mode of the browser is Flow, but one can opt-in to Flexbox or Grid, or ~~Table~~ by changing the display property on the parent container. 

1. Normal flow — all elements are part of normal flow until you do something to take them out of it. Normal flow includes block layout, designed for laying out boxes such as paragraphs and inline layout, which lays out inline items such as text.
2. Flex - Flexible box layout, designed for laying out complex pages that can be resized smoothly.
3. CSS Grids - Grid layout, designed for laying out elements relative to a fixed grid.

There are a few more layout mode options available on the browser but they're much less used or recommended with Toucaan except in very specific situations.

4. Table layout, designed for laying out tables.
Float layout, designed to cause an item to position itself left or right with the rest of the content in normal flow wrapping around it.
5. Positioned layout, designed for positioning elements without much interaction with other elements.
6. Multi-column layout, designed for laying content out in columns as in a newspaper.



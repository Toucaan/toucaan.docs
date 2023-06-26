---
slug: on-screen-vocabulary
title: On-Screen Vocabulary
authors: [marvin]
tags: [css, vocabulary, viewports]
---

# A note about on-screen vocabulary:

Height and width is how we usually refer to the dimensions of a viewport. By using these terms we assume that the screen in front of the user is always vertical. A monitor is sitting on the table such that the contents are displayed on a screen along the vertical plane. 

This assumption is okay as long as the use-case is that of the desktop. 

Height and width become invalid labels as soon as we start using mobile or tablet in awkward sitting or lying positions. i.e. when the device is not held up vertically.


![Portrait or landscape rectangles](https://raw.githubusercontent.com/marvindanig/assets/master/rectangles.jpg)


One could be lying down on a sofa looking up towards the ceiling with a phone in hand or looking down on a tablet lying flat on a desk in kitchen. Since the screen of a handheld device is no longer restricted to displaying content along the vertical plane, using height and width to specify its dimensions isn't always accurate. 

Labeling it with length and breadth however does work no matter what the orientation of the screen is.

[^2]: For the sake of clarity, Toucaan will use mathematical labels _length_ and _breadth_ to describe the rectangular screen instead of height and width. There is also an added advantage of doing so—we exactly know which side of the two is shorter in dimension when the breadth is specified.


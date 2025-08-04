---
title: Debugging CSS Code
tags:
  - debugging
  - web development
  - html/css
description: >-
  Master CSS debugging with our guide! Learn essential tools and tips to fix
  styles efficiently and save time. Discover how to debug CSS like a pro!
---
# Debugging CSS code

This guide is meant to teach you how to fix bugs in your CSS code. If you are not sure if your error is in your HTML, we recommend reading: [What is debugging and how to master it](https://4geeks.com/lesson/what-is-debugging-code).

CSS is a very tricky technology to debug, probably among the most difficult ones; it took me years to master it. I don't say this to scare you, but you need to take it seriously. My goal is to give you a concise guide and tools to quickly become good at it.

## Tools for debugging CSS

Your coding editor has syntax highlighting that will help you recognize syntax errors like missing semicolons, curly brackets, etc.
+ The Developer Tool: It has two sections that you need to learn and use pretty well:

### a) The `Elements` tab

Shows the HTML tag in your website and which selectors it has. You can look at the class or ID attributes on each tag.

![The elements tab on the developer tools website inspector](https://i.imgur.com/oJoH8C3.png?raw=true)

### b) The `Styles` tab within the `Elements` tab

If you click on one of the tags, the `Styles` tab will show which styles are being applied to it.

![Styles tab inside the developer tools website inspector](https://i.imgur.com/UM926NI.png?raw=true)

## Most difficult errors to find and debug

These are some of the most difficult errors to debug:

### Styles not being applied

Do you remember any time in your developer history when you tried applying a style to one element but nothing was happening? No matter what you did, the element stayed the same.

This can happen for several reasons:
- You are using the wrong selector.
- You are misspelling something inside the selector.
- There is another style overriding yours (styling conflict).

#### Follow these steps to fix the error

+ Open the developer tools `Elements`.
+ Click on the HTML tag you want to inspect.
+ Look at the `Style` tab, which shows the styles applied to the element.
+ Check if your selector and rules are on the list of styles applied to the tag.
+ If your selector shows up, you have successfully applied the styles, but other styles may conflict.

> 🔥 Important: We must remember that many styles are being applied to elements simultaneously; the browser combines all the rules inherited from all the selectors you have created.

### Is your style not being applied?

Use the developer tools **Elements tab** and look for the tag you want to review. Click on the tag and check the styles being applied to it.

If you don't see your CSS Style, it's probably because of a misspelling or a flawed selector logic. Here is an example in the image below:

![misspelling on css selector](https://storage.googleapis.com/breathecode-asset-images/misspelling-on-css-selector.gif?raw=true)

> Note: The class `blue` was misspelled with `bluee`, so the styles were not being applied.

### Check for CSS Styles and Rule Conflicts

When using the **Elements tab** on the developer tools, click on any element, and the **Styles tab** will show all the styles being applied.

If one style is being overridden by another, they will both show, but one will be crossed over with a line.

![CSS Specificity war](https://storage.googleapis.com/breathecode-asset-images/5ee0ed4c5601a9e40b006ae708a405ff48511b3423449968a029ee5a56fe8777.png?raw=true)

> Note: In the image above, the `color` CSS rule is being overridden twice.

## Other things to prevent

CSS has some hard-to-understand topics that can follow you for years and create a lot of bugs, so please beware and take the time to understand them well.

## Absolute vs Relative positioning

Do not use the **position property** for layouts, use `display:flex;` instead.

I use the position rule for little things like attaching a notification bubble to an icon. Here is a 10 min video on [how absolute vs relative position work](https://www.loom.com/share/3715da41c2ec45be8711c4f8944e406b).

## Flexbox for doing layouts

The most powerful tool for building layouts is flexbox. [Here is a 5 min video on how it works](https://www.youtube.com/watch?v=ZRc2vUF92e8).

## Master the CSS Selectors

Please take some time to master the basic and advanced CSS selectors. Here are some resources:

- Here is an 8 min video on the [basics of CSS Selectors](https://www.youtube.com/watch?v=0Wt1n0wvSe8).
- Here is a lesson to help you understand all the [advanced selectors](https://4geeks.com/lesson/mastering-css-selectors) that will help you clean up your code. Cleaner codes = better codes!

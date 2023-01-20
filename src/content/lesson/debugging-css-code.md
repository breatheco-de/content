# Debugging CSS code

This guide is meant to teach you how to fix bugs in your CSS code. If you are not sure if your error is in your HTML, y recommend reading: [What is debugging and how to master it](https://4geeks.com/lesson/what-is-debugging-code).

CSS is a very tricky technology to debug, probably among the most difficult ones; it took me years to master it. I don't say this to scare you, but you need to take it seriously; my goal is to give you a concise guide and tools to quickly become good at it.

## Tools for debugging CSS

Your coding editor has syntax highlighting that will help you recognize syntax errors like missing semicolons, curly brackets, etc.
The Developer Tool: It has two sections that you need to learn and use pretty well:

### a) The `elements` tab
Shows the HTML tag in your website and which selectors it has. You can look at the class or ID attributes on each tag.

![The elements tab on the developer tools website inspector](https://i.imgur.com/oJoH8C3.png)

### b) The `Styles` tab within the `elements` tab
If you click on one of the tags, the "`styles`" tab will show which styles are being applied to it.

![Styles tab inside the developer tools website inspector](https://i.imgur.com/UM926NI.png)

## Most difficult errors to find and debug
These are some of the most difficult errors to debug:

### Styles not being applied

Do you remember any time in your developer history when you tried applying a style to one element, but nothing was happening? No matter what you did, the element kept the same.

This can happen for several reasons:
You are using the wrong selector.
You are misspelling in the selector.
There is another style overriding yours (styling conflict).

#### Follow these steps to fix the error

Open the developer tools `elements`
Click on the HTML tag you want to inspect.
Look at the `style` tab, which shows the styles applied to the element.
Check if your selector and rules are on the list of styles applied to the tag.
If your selector shows up, you have successfully applied the styles, but other styles may conflict.

> 🔥 Important: We must remember that many styles are being applied to elements simultaneously; the browser combines all the rules inherited from all the selectors you have created.

### Is your style not being applied?

Use the developer tools **elements tab** and look for the tag you want to review. Click on the tag and check the styles being applied to it.

If you don't see your CSS Style, it's probably because of a misspelling or a flawed selector logic. Here is an example in the image below:

![misspelling on css selector](https://storage.googleapis.com/breathecode-asset-images/misspelling-on-css-selector.gif)

> Note: The class `blue` was misspelled with `bluee`, so the styles were not being applied.

### Check for CSS Styles and Rule Conflicts

When using the **elements tab** on the developer tools, click on any element, and the **styles tab** will show all the styles being applied.

If one style is being overridden by another, they will both show, but one will be crossed over with a line.

![CSS Specificity war](https://i.imgur.com/Gp7hOvA.png)

> Note: In the image above, the `color` CSS rule is being overridden twice.

## Other things to prevent
CSS has some hard-to-understand topics that can follow you for years and create a lot of bugs, so please beware and take the time to understand them well.

## Absolute vs Relative positioning

Do not use the **position property** for layouts, use `display: flex;` instead.

I use the position rule for little things like attaching a notification bubble to an icon, here is a 5 min video on how absolute vs relative work.

[![position relative vs absolute in css](https://cdn.loom.com/sessions/thumbnails/3715da41c2ec45be8711c4f8944e406b-with-play.gif)](https://www.loom.com/share/3715da41c2ec45be8711c4f8944e406b)

## The Flex Box for doing layouts
The most powerful tool for building layouts is the flexbox. [Here is a 5 min video on how it works](https://www.youtube.com/watch?v=ZRc2vUF92e8).

## Master the CSS Selectors
Please take some time to master the basic and advanced CSS selectors; here are some resources:
Here is a 5min video on the [basics of CSS Selectors](https://www.youtube.com/watch?v=0Wt1n0wvSe8).
Here is a 5min read to understand all the [advanced selectors](https://4geeks.com/lesson/mastering-css-selectors) that will help you clean your code. Better code.

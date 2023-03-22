---
title: "How to make an image responsive"
subtitle: "The <img> tag is broken, it doesn't work on use generated images because they loose proportions, here is how to work around it."
textColor: "white"
date: "2020-10-19T16:36:30+00:00"
tags: ["responsive"]
status: "published"
cover_local: "../../assets/images/4cc6fa0b-2530-4052-aa7e-8dac03788ac3.png"

---

A lot of websites use rounded profile images, a technique that really makes a website more beautiful!

![Rounded Image Example](https://github.com/breatheco-de/content/blob/master/src/assets/images/9edb713a-3a80-442a-9fc5-dd5caa9da62fScreenShot20190524at114329AM.png?raw=true)

The obvious way create a rounded profile picture is to create an image tag and apply `border-radius:100%`. The problem with this approach, is that it only works for squared pictures... profile pictures with different height and width will not look like a circle, they will look like ovals: 

![Image tag vs div with background-image](https://github.com/breatheco-de/content/blob/master/src/assets/images/596b5833-09a1-4ff0-8718-bc7ba4dd995dScreenShot20190524at42229PM.png?raw=true)

Instead of doing that, the right approach will be to create a squared div (a.ka: with equal width and height), assign the image as a background, and then apply a border-radius to that div.

If the image ends up being bigger than the div (or with different proportions) we can adjust the background-position or background-size to choose what part of the image we want to display inside of the circle.

![Using background-image instead of image tag for reponsiveness](https://github.com/breatheco-de/content/blob/master/src/assets/images/1251c891-ac88-464f-ae58-5c9d7abe081cScreenShot20190524at121150PM.png?raw=true)

<iframe width="100%" height="300" src="//jsfiddle.net/BreatheCode/Lge30ypv/4/embedded/html,css,result/dark/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

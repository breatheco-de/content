---
title: "How to use font awesome"
subtitle: "Font Awesome is one of the most popular free icon libraries in the world of front end development"
cover: "https://ucarecdn.com/4cc6fa0b-2530-4052-aa7e-8dac03788ac3/"
textColor: "white"
date: "2018-12-20"
tags: ["font-awesome"]
status: "draft"

---

## Installing Font Awesome

There are many ways of installing font awesome please think about how your project its setup so that you can pick the right installation procedure:

### The easiest way

If you are working with plain CSS and HTML files, just paste this `<link>` tag before the `</head>` **CLOSING** tag of your html file:
```html
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous">
```
> Note: you can see that it is just another CSS stylesheet.

After adding the `<link>` tag you can start adding icons using `<i>` tags like this:
```html
<i class="fas fa-pencil-alt"></i>
```
You have to replace the class names with the ones that correspond with the icon that you pick from: [this list of icons](https://fontawesome.com/icons?d=gallery)

<!--stackedit_data:
eyJoaXN0b3J5IjpbLTE1ODc4MTMyNzgsNDgzNTg4ODAyXX0=
-->
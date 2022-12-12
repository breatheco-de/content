---
title: "Before Starting Full Stack Development"
subtitle: "Quick review about concepts you need to know in CSS, HTML and JS before starting the Full Stack Development course"
tags: ["Flask","python","REST","API"]

---

To better take advantage of this course we encourage you to finish and review any contents from the Coding Introduction Prework. 
The upcoming materias assume that you have full understanding of the following topics:

## Things you should know about HTML/CSS

- What is HTML and what is it used for?
- The most important tags like headings (`<h1>,<h2>,<h3>`...), paragraphs (`<p>`), ordered/unorderer lists, etc: Think about how each of these tags change the look and feel and behavior in your website text. What looks bigger, h1 or h2? Why use ul instead of ol?, etc.
- How include a separate CSS stylesheet into your website by using the `<link>` tag.
- How to override or enhance the way that HTML tags look and behave by using CSS selectors and rules, for example:
  - How can I select an element to update its styles? [By using a selector](https://4geeks.com/lesson/what-is-css-learn-css#wait-what-is-a-selector).
  - The most simple thing like change text color and manipulating fonts (size, family, etc). 
  - Changing elements background color or image, 
- Fully comprehend the `<div>` tag that inherently behaves as a "box" (which means that it has borders, with and height) and how to use `<div>` to separate your content visually.
- How to create the most common website layouts using the `display: flex;` CSS rule.
  - How can you make a div be on the side of another? By applying `display: flex.` to a common immediate parent.
  - How can you make a sidebar layout?
  - How can you make the classic "instagram timeline" layout?

## Thinkgs you should know about CSS

- What is CSS and what is it used for? Thank's to CSS we can select specific elements in the HTML and style them with colors, etc.
- Why is discouraged the use of `#id` selector? Because its too specific, it goes against reusability.
- When should I use the `#id` selector? Never, we will use `#id`s only when coding in javascript.
- Why are stylesheets supposed to be written from the most generic to the most specific styles? Because you will write way less lines of code that way, also avoid lots of bugs or fights between your selectors.

## Things you should know about programing

- What is "the console" or "terminal"? For a web developer, its usually the place to get information about your code, it allows you to "print" and show the content of variables so that you can debug your code. Developers use the code during all day, all the time.
- How can I print something in the developer inspector (a.k.a the console)? By typing `console.log();`
- How can I print the value of a variable? `console.log(yourVariableName);`
- What is a variable and how to store values in it? `let age = 2;`
- What can I store into a variable? A boolean, string, number, array (or list), null, object, undefined and functions.
- What is a logical operation? Its a way to ask questions with code and they will always return answers boolean, for example if you have a variable `age` and you want to know if its bigger than 16: `(age > 16)`. This logical operation will be converted to `true`.
- What is a condition? A condition uses logical operations to block or skip lines of code. `if(age>16) console.log("You can drive")`.
- How can I save multiple values in a variable? Use an array or object. For example: `let ages = [2,23,45,67]`.
- How can I loop an array? The most common way is using the `for` loop like this: `for(let i=0;i<ages.length;i++) console.log("Age:"+i);`. This code will print in the developer inspector all the ages inside the `ages` array.

## Things you should know about Javascript

- Javascript its "event oriented" which means your code will execute based on some user or browser event, for example: When the user clicks, when the website loads, when the user scrolls, when the website reloads, etc.
- Javascript can create HTML and CSS the same way you do: You can tell JS to write any HTML you want, basically the code can "write itself" if you create a smart enough website.
- Javascript code must always go in javascript files that end with `.js`. Other ways are discouraged 99% of the time.
- You can import js using the `<script>` tag.

## Welcome to web development

That is it!

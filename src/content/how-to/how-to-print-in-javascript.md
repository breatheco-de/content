---
title: "How to print in javascript"
subtitle: "The code to open the print dialog in JavaScript is window.print(). This method will open up the print dialog for the current document and gives you all the options"
tags: ["javascript"]
date: "2020-10-19T16:36:30+00:00"
authors: []
status: "draft"

---

# How to print in JavaScript

The code to open the print dialog in JavaScript is as follows:

```js
window.print()
```

- [window.print()](#window-print-method)
- [Events: afterprint and beforeprint](#events-beforeprint-and-afterprint)
- [Using @media_print](#using-media-print)
- [How to print in JavaScript only the part of the content we want?](#how-to-print-in-javascript-only-the-part-of-the-content-we-want)
- [Conclusion](#conclusion)

## Window Print Method

**Syntax:**

```js
window.print()
```

- Parameters: Doesn´t receive any
- Returns: Nothing, zero, zip, nada

This method will open up the print dialog for the current document and gives you all the options as it would if you use ctr+p or click print on the browser menu. It will print the full document, from top to bottom.

## Events beforeprint and afterprint

The `beforeprint` and `afterprint` events allows changes to happen on the page printing  target. Let´s say you gave a banner or publicity even a sidebar or the footer and you don’t want it to be printed, you can use these events to hide and restore them.

As mentioned before, it´s an event, so we use it as one:

**Syntax:**
```js
addEventListener('beforeprint', (event) => { });
onbeforeprint = (event) => { };
```
Usually, you´ll  want to use a `@media_print` CSS instead, but there are times these events are the right way to go.

## Using @media print 

Media types are used to describe general categories of the devices consuming our website. As developers, we design website focused on screens but there´s more than just screens, like printers or screen-readers!

### How to target printers with CSS?

**Syntax:**

`@media print {}`

Using this CSS rule, you can target and specify how you want your website to visualize on paper. For example, let say that you want to hide your `<nav>` an `<aside>`containing adds and change your anchor tags `<a>` to be black colored with no underline and the background color of a class to white when printing:

```css
@media print{
	nav{
		display: none;
	}
	
	aside { 
		display: none;
	}
	
	a{
		text-decoration: none;
		color: black;
	}
	
	.myclass {
		background-color:  white; 
	}
}
```

This way we are designing how our website will look like once it´s printed and prevent an ugly paper representation of our work.

Remember, in-line styles will override, as usually, all CSS rules we established on our `@media print`!

## How to print in JavaScript only the part of the content we want?

So far, we´ve learned how to print in JavaScript using with the `window.print()` method and that we can use `beforeprint` and `afterprint` to change the composition of our website before and after the printing event executes. We also covered how to, using `@media print`, hide or modify CSS rules of the elements in our website for printing purposes. The only question left to answer is: How to print only a part of the website, let´s say, the main article where the news is.

We can achieve this by using just a tiny little bit of JavaScript:

```javascript
const Print = () =>{ 
	let contentToBePrinted = document.querySelector(“.class” OR “#id”).innerHTML; 
	let  websiteContent = document.body.innerHTML;
	document.body.innerHTML = contentToBePrinted; 
	window.print();
	document.body.innerHTML = websiteContent;
}
```

Let´s check the code above in details:

```javascript
let contentToBePrinted = document.querySelector(“.class” OR “#id”).innerHTML;
```

Here we store the content of the class or id we want to print on a variable.

```javascript 
let  websiteContent = document.body.innerHTML;
```

Now we store in a variable the whole body structure and content

```javascript
document.body.innerHTML = contentToBePrinted;
```
 Then, we assign the stored value of `contentToBePrinted` to the document body which will be printed
 
```javascript
window.print();
```

We are now actually executing the print method on the window

```javascript 
document.body.innerHTML = websiteContent; 
```

We restore our website content and structure 

## Conclusion

We´ve covered how to code in JavaScript using the `window.print()` method in different ways (printing the full website or just a part of it). We mentioned events linked to printing, with which we can modify with JavaScript the structure of the website `beforeprint` and `afterprint` We´ve discussed how to modify the CSS only for printing purposes and gave examples on how to do all that.

I hope you enjoyed the reading and keep on the Geek side!

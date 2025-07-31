---
title: "What is DOM: Document Object Model"
subtitle: "Do you already know what the DOM is? It is a hierarchy stored in memory that contains all of your website elements in real-time. DOM manipulation is the most popular activity for any front-end developer. The DOM brings your applications to life!"
cover_local: "../../assets/images/db660bb9-1ac6-4730-a9c8-4544d6b801b0.png"
textColor: "white"
date: "2020-10-19T16:36:31+00:00"
tags: ["DOM", "javascript", "HTML", "front-end"]
status: "published"

---

## Beyond the Console!

Nobody likes applications that are based on the console... Can you imagine using Uber from the command line?

```bash
$ "uber" request-trip --from home-- to work --pool
```

Thankfully, we have browsers! They let us render our application in a visual interface that we call a website.

## The Website DOM

As you already know, the responsibility of the browser is to transform HTML/CSS code into visual elements. Those elements are mapped into a hierarchy that is stored in RAM memory, and it’s called The DOM.

With JavaScript we can manipulate the DOM (website elements) during runtime (the application's lifecycle).

NOTE: Please always remember that all JavaScript code that you write in your HTML document MUST be wrapped inside a `<script>` tag, like this:

```html
<script  type="text/javascript">
     // Your code here  
</script>
```

Nowadays, we tend to write all of our JS code in a separate file with extension `.js`, in which case the script tag in your html's body needs to look like this:

```html
<body>
    <div>some content</div>
    <div>more content</div>

    <script src="index.js" type="text/javascript"></script>
</body>    
```

This is the preferred way for you to write and link your JS code from now on, as well. 

## How to Update Your Website DOM

There are several ways to manipulate the DOM, but the most simple one is `document.write()`. Every time you create a `document.write()` you will be writing onto the HTML whatever string you decide to pass as a parameter to the *write* function.

It does not matter where you write the code. The only thing that matters is that it is linked to the HTML through a `<script>` tag. For example:

<iframe width="100%" height="300" src="//jsfiddle.net/BreatheCode/ge5k7ufm/6/embedded/html,result/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

<div align="right"><small><a href="//jsfiddle.net/BreatheCode/ge5k7ufm/6/embedded/html,result/">Click here to open demo in a new window</a></small></div>

## The DOM is Spectacular!

From the moment a website starts being loaded, the browser creates a hierarchy that is called The DOM. Each HTML element you coded in your HTML document as a developer has a place in that hierarchy, and you can access it using JavaScript anytime you want during the runtime.

+ Every HTML element has an object in the document hierarchy.
+ The DOM is generated during runtime.
+ Every browser tries to replicate the DOM in the exact same way, but there are some differences between them. That is why some things work in one browser, but not in others.
+ JavaScript is the only language capable of accessing The DOM during runtime.
+ The "Google Inspector" is the best representation of The DOM today.

<br>
<iframe height="500" src="https://www.youtube.com/embed/Ibxagg2ep5g" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<div align="right"><small><a href="https://www.youtube.com/embed/Ibxagg2ep5g">Click here to open video in a new window</a></small></div>

## How Do I Access Any Object in the DOM?

Just like we did with CSS, we can select any element in the document. There are various methods that allow us to target the element that we want. The most commonly used modern methods are:

### document.querySelector("#some-id")
Returns an instance of **the first element** which matches the CSS selector that you specified.

*Best for: Complex CSS selectors and when you only need the first matching element.*

### document.querySelectorAll(".some-class")
Returns a NodeList with **all** elements which match the CSS selector.

*Best for: Complex CSS selectors when you need all matching elements, or when you want a static snapshot.*

**Other methods that are still widely used and fully supported:**

### document.getElementById("elementId")
Returns an instance of the element with the `id="elementId"` in the HTML document.

*Best for: Fast selection of a single element by ID - this is the fastest DOM selection method.*

### document.getElementsByClassName("exampleClass")
Returns a live HTMLCollection of all elements with the `class="exampleClass"` in their HTML tag property.

*Best for: When you need a live collection that automatically updates as elements are added/removed from the DOM.*

### document.getElementsByTagName("p")
Returns a live HTMLCollection with all the instances representing each paragraph element in the HTML document.

*Best for: Selecting all elements of a specific HTML tag type, especially when you need live updates.*

### document.getElementsByName("name_value")
Returns a NodeList with all the elements that have `name="name_value"` in the *name* property of their HTML tag in the HTML document.

*Best for: Form elements and inputs where the name attribute is used for form submission.*

```javascript
let elem = document.getElementById("xyz");
elem.style.color = "red";   // change color to red  

let myList = document.getElementsByTagName("p");
let howManyElements = myList.length;
myList[0].style.color = "red";   // make the first one red  

let myList = document.getElementsByClassName("abc");
myList[0].style.color = "red";   // make the first one red  

let xyz = document.getElementsByName("xyz");
xyz[0].style.color = "red";   // make the first one red
```

## Accessing the Element’s Children

It is very common to need to change an element’s child. For example:

+ Update all the `<li>` children of a specific `<ul>` to make their background red.
+ Remove the first `<tr>` row of a `<table>`.
+ Hiding all the children with a specific class.
+ And the list goes on!
  
The best way to retrieve the children elements of any DOM element is by using its `.children` property, like this:

### element.children

This returns an array with all the element’s children nodes. 

Given the following example, open the code in JSFiddle and console.log `tableElm.children` at the end of the existing JavaScript code: 
<iframe width="100%" height="300" src="//jsfiddle.net/BreatheCode/a3grunqj/2/embedded/js,html,result/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

<div align="right"><small><a href="//jsfiddle.net/BreatheCode/a3grunqj/2/embedded/js,html,result/">Click here to open demo in a new window</a></small></div>

Open the Console in the Chrome Inspector feature. What did you observe?

You should have gotten an array (*HTMLCollection*) with two items - the `thead` and `tbody` which are the table's direct children. Because you see that `tableElm.children` gives you an array-like structure in JavaScript, you could guess that to get the first element (*thead*), you can simply code `tableElm.children[0]`.

Now go to the end of the JS code and add another console.log - `tableElm.children[1].children`. 

Can you guess what this will return in the console? Try it out!

Here is an explanation of the other properties used in the example: 

```javascript
x.querySelector(".random").style.background = "green";
// get the first #myDIV child with the .random class  

x.querySelector("h3,h2").style.background = "blue";
// get the first #myDIV child with the tag <h3> or <h2>
 
let tableElm = document.querySelector("#people");
let trArray = tableElm.querySelectorAll("tr");
trArray[3].style.background = "red";
// get an array with all elements nested within the #people table, of type <tr> - not necessarily direct children
```



## Adding Elements to the Document

There are 2 functions we can use for that: `appendChild()` and `insertBefore()`.

Let's say that you have selected a `<div>` with the `id="myFirstDiv"` and you want to add a new `<h1>` inside of that `<div>`.

**You can use the appendChild function like this:**

```javascript
let divElem = document.querySelector("myFirstDiv");
let myNewHOne = document.createElement("h1");
let t = document.createTextNode("Hello World");
myNewHOne.appendChild(t);  // This adds the text content to the <h1>  
divElem.appendChild(myNewHOne); // This adds the <h1> into the "myFirstDiv" element
```

Now, let's say that we have a `<ul>` with 2 elements, but we want to insert a new `<li>` at the beginning of that list.

**We can use the function `insertBefore` for that case – like this:**

```javascript
...
let newItem = document.createElement("li");
let textNode = document.createTextNode("Water");
newItem.appendChild(textNode);
let list = document.getElementById("myList");
list.insertBefore(newItem, list.childNodes[0]);  // adding the newItem before the FIRST child of the list
```


## innerHTML

As you already know, each element in the HTML document can have some sort of HTML content.  It does not matter if it is a `<p>`, `<div>`, `<a>` or any other HTML element; it can have its own innerHTML combined with more HTML content.

![what is dom](https://github.com/breatheco-de/content/blob/master/src/assets/images/2387325b-338c-4c18-bb0f-2f95ed28901f.png?raw=true)

The `.innerHTML` property gives you the ability to retrieve or set the content of whatever element you have in your JavaScript. For example:

```javascript
document.getElementsByTagName("div")[0].innerHTML = "abc";
// innerHTML can be used to insert plain text content or HTML, this creates a list inside a <div> element 
```

It can also be used to add entire new elements into your HTML without being so verbose as the `createElement` examples above. Let's rework the `"Hello World" to see the difference:

```javascript 
    document.querySelector("myFirstDiv").innerHTML += `<h1>Hello World</h1>`
```

Dramatic difference!!! We achieved the same result with one line of code that previously required 5 lines. 

By using template literals (**``**) we can even break down the HTML elements onto separate rows, so it is easier to read them, and also we can use variable values, instead of hard-coded ones:

```javascript 
    let greeting = "Hello World"
    document.querySelector("myFirstDiv").innerHTML += `
    <div>
        <h1>
            ${greeting}
        </h1>
    </div>
    `
```

> ☝️ Get into the habit of using this approach as it is much more concise and straightforward which also makes your code easier to read. 

> You can find another 2 properties on the internet: `nodeValue` and `textContent`, but they are not really universally used and are more limited in functionality.


## Removing Elements from the Document

The most straightforward method to remove an element from the DOM is the `remove()` method. 

For example, if we want to remove a `<p>` element with `id="firstP"`, we can do the following:

```javascript
// Removing all children from an element  
let element = document.querySelector("p#firstP");
element.remove();
```

## Changing Attributes

To change any attribute of any object in the DOM, we need to use the `.attribute` property just like this:

```javascript
// Changing attributes  
let element = document.querySelector("#someId");
element.someAttribute = "newValue";
```

For example, to change the value of a button element, you would need to code this:

```javascript
// Changing value attribute  
let btn = document.querySelector("#myButton");
btn.value = "newButton";
``` 

## Changing the Styles

You can also change any CSS rule or property applied to the HTML elements by using the `.style` attribute, like this:

```javascript
// Changing styles  
let element = document.querySelector("#myElementId");
element.style.color = "red";
element.style.backgroundColor = "blue";
```

> ☝️ Notice how css properties which consist of two words, like `background-color`, become one word in camel case in the DOM - `backgroundColor`. 

## Changing Classes

Many times as you dynamically change the content of your application, you would want to change the classes of some elements, because classes allow us to give our elements different styling and functionality.

Imagine that you are given a bootstrap button: 

```html
<button id="myButton" class="btn btn-warning">Submit</button>
```

You would like to change its background color from yellow to red at some point of your application's runtime. You can do that by simply exchanging its bootstrap classes for background color:

```javascript
// Changing classes  
let btn = document.querySelector("#myButton");
btn.classList.remove("btn-warning");
btn.classList.add("btn-danger");
```

You can do the same thing with your own custom classes. 

As you can see, the `classList` property gives you access to the classes of a given element, and you can add or remove classes. 

With this knowledge, now research and make sure to understand the method [`classList.toggle("newClass")`](https://www.w3schools.com/howto/howto_js_toggle_class.asp). 

## Further reading

For more information about accessing the DOM, see: https://developer.mozilla.org/en-US/docs/Web/API/Document


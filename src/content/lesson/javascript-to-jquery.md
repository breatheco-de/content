---
title: "From Javascript to jQuery"
date: "2018-05-11"

tags: ["fale"]
---

[[warning]]
| :point_up:As of January 1, 2017, 4Geeks has decided to stop teaching jQuery because we think it is no longer necessary for someone to become a front-end developer.  However, we are leaving the lessons and replit’s here if you would like to learn it on your own.

 ## Learn the jQuery Library

 Do more stuff with less code.

 ### What is jQuery?
 ***

 jQuery is a library (set of functions) available to JavaScript developers to make their lives easier (just like the Math object that we use for Math.random).  **jQuery is NOT another language.**  It is the same as JavaScript, and you don’t need to use it if you don’t want to.

 ### Why jQuery
 ***

 When jQuery was the new thing (10 years ago), people loved it.  It made cross-browser JS so much easier.  It taught us a few new tricks and it made AJAX and animations dead simple (which was pretty tricky back when most of the world was on IE6!).

Then came The Smartphone Times.  This spelled disaster for jQuery.  Thanks to slower, inferior CPUs with less memory and often less bandwidth, smartphones just weren’t cut out for lugging around all the goodness that jQuery provided – especially if you were only using 10% of it.

Today, the browsers have agreed on some of the crap that jQuery The Negotiator had been helping them with all along.  So they actively and rapidly trimmed the fat.

Do we still need jQuery?  Maybe not.  The usage of its library is clearly declining, but it still doubles any of its siblings (Angular, React, etc.), and Bootstrap still uses it a lot!

#### So, what was all the Hype surrounding jQuery about?

Query can do 5 things really well, and those 5 things brought jQuery to the point that it is being used on almost every website:

+ **Less lines of code:**  In terms of practicality, you need 50% more lines of code to accomplish the exact same things without jQuery.  Let’s review and compare the most common things you normally do as a developer when playing with the DOM.
+ **Easier event handling:**  Working with events is relatively easy in Vanilla JS today, but jQuery helps a lot by letting us add listeners to several elements at the same time using the jQuery selectors.
+ **Extremely easy animations:** jQuery is really amazing for animations, fadeIn, fadeOut, bounce, etc.  All of those movements are already defined and you can recreate them in just a couple lines of code.
+ **Simple AJAX:**  Doing HTTP requests in JavaScript is still a little bit cumbersome, but jQuery makes it really simple with the $.ajax function.
+ **Plugins:** There are thousands of jQuery plugins out there.  They enrich web functionality with very cool features; making and sharing plugins is probably the best feature jQuery can provide to web developers.

### Installation
***

Since jQuery is a library, it needs to be installed as a JavaScript library.  All JavaScript libraries need to be imported using the `<script>` tag – like this:

```html
<script src="myscripts.js"></script>
```

#### But Wait my Friend!

First, you need the actual jQuery code.  You have two options for that: (1) Download the jQuery source code (recommended) or (2) Import the code from a public server (CDN):

##### 1) Download from code.jquery.com

To download jQuery, go to code.jquery.com and pick the last MINIFIED version of jQuery available.  Right-click on it and "save the file as…". Save that file in your project directory.

Then, use the `<script>` tag to import that file into your website.  Place the `<script>` tag inside of the `<head>` tag **before any other JavaScript tag.**

![jquery1](https://ucarecdn.com/04c63654-5102-43e6-839c-f59d3a433387/)

##### 2) Use a CDN 

Content Distribution Networks are servers that are used specifically to store libraries and resources to be used by other websites.  For example, libraries like Bootstrap and jQuery are normally available in several CDN’s.

We recommend [the Google CDN:](https://developers.google.com/speed/libraries/) look for jQuery and copy the `<script>` of the latest version of jQuery available.  Paste that script tag **before any other JavaScript script tag inside your website** `<head>`.

![jquery2](https://ucarecdn.com/29e81ea6-e5b8-4173-a3f3-59b19ad0cd11/)

```html
<!DOCTYPE html>
<html>
    <head>
    <title>repl.it</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
<!– any other JS scripts that use jQuery should be imported below jQuery –>
    </head>
<body>
</body>
</html>
```

### The Syntax
***

**jQuery is a part of JavaScript!**  jQuery syntax can be tricky at the beginning, but after a few days you will understand that **it is  the same JavaScript** syntax but just being used in a different way.

#### The $ Dollar sign

All of jQuery’s functionalities are embedded into an object: **The jQuery object.**  The idea is that everything is done with that one global symbol.  This can be used with either a dollar sign `$` or with **"jQuery"** (The dollar $ is just a shortcut for "jQuery").  You can use whichever you like:

```javascript
$(‘css_selector’)
jQuery(‘selector’)
console.log($ === jQuery);  // "true"
```

#### jQuery uses Inline Functions

To avoid feeling confused, you will need to understand that jQuery is ADDICTED to inline functions.  For example, the code below is very common when using jQuery to listener for the click event.  The handler function is declared in the same line – like this:

```javascript
$(element).click(function() { 
  //your function code here 
});
```

This code is exactly the same as this other one:

```javascript
var clickHandler = function() {
}
$(element).click(clickHandler);
```

In the example above, we are adding an event listener for when the user clicks on a DOM element.

#### A new way of Passing Parameters (the settings object)

You are used to working with function parameters like this:

```javascript
functionName(param1, param2, param3);
  //function call with 3 parameters
```

When using jQuery, the best practice is to always pass one "settings object" as a parameter instead of passing several parameters separated by commas – like this:

```javascript
var settingsObj = {
param_key1 : param_value1,
param_key2 : param_value2,
param_key3 : param_value3
}
functionName(settingsObj);
  //Function call with 3 parameters inside the settingsObj 
```

[[info]]
| :point_up: If you use jQuery, you need to be comfortable using parameters like the "Settings Object."

### The Ready Event
***

We have a section that talks just about events, but it is a good idea to talk about the "ready event" right now because it is one of the first lines of code written on almost every website that uses jQuery.

The flow of your website begins on the "ready" event.  That event is called when the website and all of its elements have finished loading.  As a developer, you will need to add an event listener for the ready event like this:

```javascript
$( document ).ready(function() {  
    // Handler for .ready() called. Your code here 
});
```

### Working with DOM Elements
***

jQuery really helps when working with classes because the only way to update a class with vanilla JS is using the .className attribute of the DOM element (that is a string).

For example, if you want to remove one specific class from an element you will first have to get the value of the class attribute as a string.  Next, create a new string – just like the first one – but without that particular class.

&nbsp;
&nbsp;
#### **Select Elements from the DOM**

##### ![javascript](https://ucarecdn.com/e6026acf-e908-49cd-b418-0ec18480c42f/-/resize/50x/) With vanilla JavaScript

```javascript
var elm = document.getElementById(‘elementId’);
var elmArray = document.getElementsByClassName(‘elementId’);
```

##### ![jquery](https://ucarecdn.com/0cc8484a-d0fc-4259-b0ff-92851a096f76/-/resize/50x/) With jQuery

```javascript
var elem = $(‘#elementId’);
var elemArray = $(‘.elm_class’);
```

&nbsp;
&nbsp;
#### **Create a New DOM Element**

##### ![javascript](https://ucarecdn.com/e6026acf-e908-49cd-b418-0ec18480c42f/-/resize/50x/) With vanilla JavaScript


```javascript
var myAnchor = document.createElement("A");
myAnchor.href="http://google.com";
myAnchor.target="_blank";
```

##### ![jquery](https://ucarecdn.com/0cc8484a-d0fc-4259-b0ff-92851a096f76/-/resize/50x/) With jQuery

```javascript
var attributesObj = {
href: ‘http://google.com’,
parent: ‘_blank’
}
$(‘<a>’,attributesObj);  //the attributesObj is optional
```
&nbsp;
&nbsp;
#### **Append Child**

##### ![javascript](https://ucarecdn.com/e6026acf-e908-49cd-b418-0ec18480c42f/-/resize/50x/) With vanilla JavaScript


```javascript
parent.appendChild(el);
```

##### ![jquery](https://ucarecdn.com/0cc8484a-d0fc-4259-b0ff-92851a096f76/-/resize/50x/) With jQuery

```javascript
$(parent).append(el);
```

&nbsp;
&nbsp;
#### **Remove Element**

Vanilla JS doesn’t have a remove() function.  You will have to call a removeChild function form the element’s parent.

##### ![javascript](https://ucarecdn.com/e6026acf-e908-49cd-b418-0ec18480c42f/-/resize/50x/) With vanilla JavaScript


```javascript
elm.parentNode.removeChild(elm);
```

##### ![jquery](https://ucarecdn.com/0cc8484a-d0fc-4259-b0ff-92851a096f76/-/resize/50x/) With jQuery

```javascript
$( ".hello" ).remove(); //Remove all elements with class hello 
$( ".hello" ).empty(); //Remove all childs of elements with class hello 
var elements = $( ".hello" ).detach(); //Remove the elements from the DOM but return them to store them in a variable
```
&nbsp;
&nbsp;
#### **Replace Element**

##### ![javascript](https://ucarecdn.com/e6026acf-e908-49cd-b418-0ec18480c42f/-/resize/50x/) With vanilla JavaScript


```javascript
elm.parentNode.replaceChild(myNewHeading, elm); //being myNewHeding a DOM element
```

##### ![jquery](https://ucarecdn.com/0cc8484a-d0fc-4259-b0ff-92851a096f76/-/resize/50x/) With jQuery

```javascript
$( "#div1" ).replaceWith( "<h1>This is a new heding</h1>" );
```

&nbsp;
&nbsp;
#### **Traverse childs**

##### ![javascript](https://ucarecdn.com/e6026acf-e908-49cd-b418-0ec18480c42f/-/resize/50x/) With vanilla JavaScript


```javascript
var parent = document.querySelector(css_elector);
var childs = parent.querySelectorAll(css_elector);
childs.forEach(function(elm, index){

});
```

##### ![jquery](https://ucarecdn.com/0cc8484a-d0fc-4259-b0ff-92851a096f76/-/resize/50x/) With jQuery

```javascript
$(css_selector).find(selector).each(function(index, elm){

});
```

&nbsp;
&nbsp;
#### **Get/set attribute**

##### ![javascript](https://ucarecdn.com/e6026acf-e908-49cd-b418-0ec18480c42f/-/resize/50x/) With vanilla JavaScript


```javascript
el.getAttribute(‘tabindex’);
el.setAttribute(‘tabindex’, 3);
```

##### ![jquery](https://ucarecdn.com/0cc8484a-d0fc-4259-b0ff-92851a096f76/-/resize/50x/) With jQuery

```javascript
$(el).attr(‘tabindex’);
$(el).attr(‘tabindex’, 3);
```


[[warning]]
| :point_up: These are the most used functions when working with the DOM.  Please be advised that there are A LOT more functions available and that it is a good idea to eventually review all of them.  Also, new functions are being created as JavaScript continues to evolve.

### Working with Styles
***

jQuery really helps when working with classes because the only way to update a class with vanilla JS is by using the .className attribute of the DOM element (which is a string).

For example, if you want to remove one specific class from an element, you will have to get the value of the class attribute as a string and then create a new string – just like the first one – but without that particular class.

![jaquery6](https://ucarecdn.com/655a85b3-660f-45bf-8563-2bcbe13bf0e5/)

&nbsp;
&nbsp;
#### **Add/Remove CSS Class**

##### ![javascript](https://ucarecdn.com/e6026acf-e908-49cd-b418-0ec18480c42f/-/resize/50x/) With vanilla JavaScript


```javascript
el.className += ‘ ‘ + className; //add 
el.className = el.className.replace("classname", ""); //remove
```

##### ![jquery](https://ucarecdn.com/0cc8484a-d0fc-4259-b0ff-92851a096f76/-/resize/50x/) With jQuery

```javascript
$(el).addClass(className);
$(el).removeClass(className);
```
&nbsp;
&nbsp;
#### **Get/Set CSS Style Rules**

##### ![javascript](https://ucarecdn.com/e6026acf-e908-49cd-b418-0ec18480c42f/-/resize/50x/) With vanilla JavaScript


```javascript
el.style.borderWidth = ’20px’;
getComputedStyle(el)[ruleName];
```

##### ![jquery](https://ucarecdn.com/0cc8484a-d0fc-4259-b0ff-92851a096f76/-/resize/50x/) With jQuery

```javascript
$(el).css(‘border-width’, ’20px’);
$(el).css(ruleName);
```

&nbsp;
&nbsp;
#### **Toggle Class**

##### ![javascript](https://ucarecdn.com/e6026acf-e908-49cd-b418-0ec18480c42f/-/resize/50x/) With vanilla JavaScript


```javascript
var classes = el.className.split(‘ ‘);
  var existingIndex = classes.indexOf(className);

  if (existingIndex >= 0)
    classes.splice(existingIndex, 1);
  else
    classes.push(className);

  el.className = classes.join(‘ ‘);
  ```

  ##### ![jquery](https://ucarecdn.com/0cc8484a-d0fc-4259-b0ff-92851a096f76/-/resize/50x/) With jQuery

  ```javascript
  $(el).toggleClass(className);
  ```

[[warning]]
| :point_up:This are the most used functions to work with styles, there are a lot more functions and is a good idea to eventually review the rest of them.

### Working with events
***

You already know a lot about events because we went through the Javascript Events lesson earlier during this course.

jQuery does not add much value when working with events, we have the same concepts: Event-Names, Listeners and Handlers. jQuery can listen to the exact same events (click, hover, etc.) and you have the same event information passed as a parameter in the handler function.


#### **Add Event Listener**

The only really great advantage when working with jQuery events is the jQuery selector, because now you can attach a listener to several objects at the same time without having to iterate through all of them. For example, lets try to add a listener to the click event on all the elements with the class ".btn"

##### ![javascript](https://ucarecdn.com/e6026acf-e908-49cd-b418-0ec18480c42f/-/resize/50x/) With vanilla JavaScript


```javascript
var myElementsArray = document.querySelectorAll(‘.btn’);
myElementsArray.forEach(function(elm,index){
elm.addEventListener("click",function(){
alert(‘s’);
});
});
```

##### ![jquery](https://ucarecdn.com/0cc8484a-d0fc-4259-b0ff-92851a096f76/-/resize/50x/) With jQuery

```javascript
$(‘.btn’).on( "click", function(){
  //your code here 
});
```

[[info]]
|:link: To continue reading about events we recommend [this reading.](https://learn.jquery.com/events/event-basics/)

### Working with Ajax
***

jQuery really helps when working with classes because the only way to update a class with vanilla JS is using the .className attribute of the DOM element (that is a string).

For example, if you want to remove one specific class from an element you will have to get the value of the class attribute as a string and create a new string just like the first one but without that particular class.

[[warning]]
| :point_up: AJAX is going to be covered deeply in another lesson, here we are only going to introduce the syntax of ajax function.

#### **GET request**

##### ![javascript](https://ucarecdn.com/e6026acf-e908-49cd-b418-0ec18480c42f/-/resize/50x/) With vanilla JavaScript


```javascript
var request = new XMLHttpRequest();
request.open(‘GET’, ‘/my/url’, true);
request.onload = function() {
if (request.status >= 200 && request.status < 400) {
  // Success! 
var data = JSON.parse(request.responseText);
} else {
  // We reached our target server, but it returned an error 
}
};
request.onerror = function() {
  // There was a connection error of some sort 
};
request.send();
```

##### ![jquery](https://ucarecdn.com/0cc8484a-d0fc-4259-b0ff-92851a096f76/-/resize/50x/) With jQuery

```javascript
$.ajax({
  type: ‘GET’,
  url: ‘/my/url’,
  success: function(resp) {

  },
  error: function() {

  }
});
```
&nbsp;
&nbsp;
#### **POST request**

##### ![javascript](https://ucarecdn.com/e6026acf-e908-49cd-b418-0ec18480c42f/-/resize/50x/) With vanilla JavaScript


```javascript
var http = new XMLHttpRequest();
var url = "/my/url";
var params = "lorem=ipsum&name=binny";
http.open("POST", url, true);
//Send the proper header information along with the request 
http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
http.onreadystatechange = function() { //Call a function when the state changes. 
if(http.readyState == 4 && http.status == 200) {
alert(http.responseText);
}
}
http.send(params);
```

##### ![jquery](https://ucarecdn.com/0cc8484a-d0fc-4259-b0ff-92851a096f76/-/resize/50x/) With jQuery

```javascript
$.ajax({
  type: ‘POST’,
  url: ‘/my/url’,
data: {var1: value1, var2: value2 }
  success: function(resp) {

  },
  error: function() {

  }
});
```






























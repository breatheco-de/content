---
title: "Events"
subtitle: "All the front-end applications have a map of events: website load, user click, window resize, etc. As a developer, you have to make sure that your applications have a flow. That flow is determined by all the possible events that can occur as the user interacts with your app."

date: "2018-05-11"
tags: ["fale"]
---

## Event Oriented Programming
***

Working with events is a totally new way of **controlling the flow of an application.**  It is the first time that your code will not be executed in a linear flow.  Instead, it will be executed asynchronously.  Who knows what comes first???

What is an Event?

An event is something that happens!  Like **clicking** on a button, **pressing** a key on the keyboard, **hovering** a div with your mouse, etc.

Your job as a developer is to prepare for those events and **define the functions** that are going to be handling those events.

![events1](https://ucarecdn.com/1c00bd95-1359-4fd5-8399-b1b80a769009/-/resize/500x/)

### But who Triggers these Events?

Sometimes it is the website user, sometimes it is the browser, sometimes it is another application letting you know something, sometimes the developer triggers events related to the business logic, etc.

There are dozens of events being triggered every minute, but you don’t have to do anything about it (not if you don’t want to).  They are available to you depending on the type of application that you want to do.

## Types of Events
***

Here are some of the types of events that are constantly being triggered (and you can listen to them):

### MOUSE – Events

|**Data-Type**    |**Description**    |
|:----------------|:-----------------|
|Click            |When the user clicks with the mouse or finger in any HTML element.    |
|Mouseover,<br>Mouseout    |The event occurs when the pointer is moved onto (for mouseover) or outside (for mouseout) an element, or one of its children.    |
|contextmenu    |When the user right clicks on the mouse.    |
|Mousemove     |If the user moves the mouse    |
|Mousemove     |If the user moves the mouse.     |
|Mousedown or Mouseup     |If the user presses or releases the mouse.    |


<iframe width="100%" height="300" src="https://4geeksacademy.github.io/code-projects/uncategorized/event-listener/mouse.html" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

### FRAME – Events

|**Data-Type**    |**Description**    |
|:----------------|:-----------------|
|Load	           |The browser has finished loading the website.    |
|Error            |The event occurs when an error occurs while loading an external file (like a CSS or a JavaScript).
|Scroll         |When the element or window gets scrolled.     |
|PageHide<br>PageShow    |When the user focuses in a different window/tab; or when the user comes back from a different window/tab.     |
|Resize    |When the window is resized.      |

<iframe width="100%" height="300" src="https://4geeksacademy.github.io/code-projects/uncategorized/event-listener/frame.html" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

### FORMS – Events 

|**Data-Type**    |**Description**    |
|:----------------|:-----------------|
|Submit	    |The event occurs when a form is submitted.     |
|Focusin and Focusout     |The event occurs when the pointer is moved onto an element or onto one of the element’s children.    |
|Input       |The event occurs when an element gets user input.     |
|Change       |The event occurs when the content of a form element, the selection, or the checked state have changed (for `<input>`, `<keygen>`, `<select>`, and `<textarea>`)
     |

<iframe width="100%" height="300" src="https://4geeksacademy.github.io/code-projects/uncategorized/event-listener/forms.html" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

### KEYBOARD – Events

|**Data-Type**    |**Description**    |
|:----------------|:-----------------|
|Keyup           |When the user releases the keyboard key.    |
|Keydown	     |When the user presses the keyboard key.    |
|Keypress       |When the user presses and release the keyboard key.  The difference from keydown/up is that Keypress only works on character keys.  For example, it does not work on the up|down|left|right arrows.     |

<iframe width="100%" height="300" src="https://4geeksacademy.github.io/code-projects/uncategorized/event-listener/keyboard.html" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>


[[info]]
|:link: Here [you can find a list with all the other less common events](https://www.w3schools.com/jsref/dom_obj_event.asp) that you have at your disposal.  Read them quickly, and be aware of them for future reference during your life as a developer.

## Listening the events
***

Now that you know what events are out there, you can start listening them whenever you want during the runtime. The only way to react to any event is by listening to that event and assigning a function that will handle the event however you need.

Let’s repeat: To **react** you need to **listen…** And to listen you need to specify a **handler** function.

![events2](https://ucarecdn.com/91b831bf-cac1-4feb-a49e-c9c1064b5308/)

You can add an event listener in 2 different ways:

## Adding Listeners from the HTML
***

For example, if you want to start listening when the user clicks on a particular button all you have to do is specify the "onclick" attribute to that specific HTML `<button>` tag, like this:

```html
<!– myClickHandler is a javascript function that will handle the event –>
<button onclick="myClickHandler();">Click me</button>
 
<script>
function myClickHandler(){
    alert(‘hello’);
}
</script>
```

<iframe width="100%" height="300" src="//jsfiddle.net/BreatheCode/kpt1jz3m/1/embedded/js,html,result/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

## Adding Listeners from JavaScript (during runtime)
***

Sometimes the DOM element doesn’t exist from the beginning.  Maybe they are created after a database call or after the user did something.  To solve that problem, you need to start listening after the new elements are created.

The .addEventListener function is perfect for this because it can be used in any DOM element during runtime.


Sometimes the DOM element doesn’t exist from the beginning.  Maybe they are created after a database call or after the user did something.  To solve that problem, you need to start listening after the new elements are created.

The .addEventListener function is perfect for this because it can be used in any DOM element during runtime.


When using the addEventListener function, you have to specify what **event** you want to listen to, and **the handler function** that will be called every time that event is triggered on that DOM element.

For example, this code is creating a list of names and each delete anchor in each row is listening to the "click" event – but only for that row.

<iframe width="100%" height="300" src="//jsfiddle.net/BreatheCode/kg5rfqud/4/embedded/js,html,result/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

##  The Event Object
***

Event handlers can have one optional parameter in the declaration of the function.  This parameter is always filled with one "Event" object that contains a lot of information about the event that was triggered to get this function called.

No matter what type of event (mouse related events, keyboard event, frame, etc.), the event object is always going to have at least the following properties:

```javascript
function myEventHandler(eventObj)
{
    console.log(eventObj.target);
     //will print on the console the DOM object that triggered the event  
    console.log(eventObj.type);
     //will print on the console the type of event  
    console.log(eventObj.cancelable);
     //will print on the console true or false if we can stop the propagation of this event  
}
```

### Every Event Object has the following Properties:

|**Property**    |**Description**    |
|:---------------|:------------------|
|Target           |Returns the DOM object that triggered the event.      |
|Type             |The type of event: click, mouseover, load, etc..      |
|Cancellable       |If you can stop the propagation of the event or not.    |

Depending on the type of event, you will have additional properties that will give you very useful information about what happened when the event was triggered.

### Additional information for **mouse events**

|**Property**    |**Description**    |
|:---------------|:------------------|
|clientX, clientY    |Returns the horizontal or vertical coordinate of the mouse pointer – relative to the current window – when the mouse event was triggered.    |
|pageX, pageY       |Returns the horizontal or vertical coordinate of the mouse pointer – relative to the document – when the mouse event was triggered.       |
|which      |Returns which mouse button was pressed when the mouse event was triggered.       |

### Additional information for **keyboard events**  

|**Property**    |**Description**    |
|:---------------|:------------------|
|keyCode        |Returns the Unicode character code of the key that triggered the event.     |
|shiftKey, altKey or ctrlKey     |Returns whether the `shift`,`alt` or `ctrl`key was pressed when the key event was triggered.     |


### Additional information for **wheel events**

|**Property**    |**Description**    |
|:---------------|:------------------|
|deltaX, deltaY   |Returns the vertical or horizontal scroll amount of a mouse wheel (y-axis) or (x-axis).     |
|deltaMode       |Returns a number that represents the unit of measurements for delta values (pixels, lines or pages).      |

[[info]]
| :link: There is a lot more information you can get from the event object, but we are focusing on the most used properties.  For a bigger list of properties please read [this guide.](https://www.w3schools.com/jsref/dom_obj_event.asp)

## Removing the Listeners
***

But what if I don’t want to continue listening?  All modern browsers remove the events listeners when you delete the DOM element in which they were applied.  If you don’t want to delete the DOM element, you can remove the listener manually using the .removeEventListener function.

```javascript
element.removeEventListener(type, eventHandlerFunction);
```

You have to use the exact same parameters in the removeEventListener function as the ones you used in the addEventListener function.

Here is an example:

In this code, we are adding an event listener to the click event.  Afterwards, the first time the click listener gets called, the handler function removes the event listener from the button.  That’s why upon the second time the button gets clicked, nothing happens.

<iframe width="100%" height="300" src="//jsfiddle.net/BreatheCode/ea28stfd/1/embedded/js,html,result/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>













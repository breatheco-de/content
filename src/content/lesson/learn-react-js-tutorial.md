---
title: "Learn React Here : React Js Tutorial"
subtitle: "React is a front-end library ideal for creating interfaces (generate HTML+CSS). It's the fastest, most advanced and most wanted library in the market right now. Don't stay behind, learn React js here with this React Js tutorial"

cover: "https://ucarecdn.com/4cc6fa0b-2530-4052-aa7e-8dac03788ac3/"
textColor: "white"

date: "2018-13-11"
tags: ["fale"]
---

Think about it: what is the most annoying thing about working with Javascript?  All the programming languages have loops, conditionals, variables and logical operations; some have events, but only Javascript has: The DOM.  Yes, that is the most annoying thing when coding for the web, it’s not only very slow in terms of performance, but also makes your code redundant, cumbersome and huge.

Just look at this example of all the lines of code we need just to toggle (add/remove) a CSS class into a DOM Element:

```javascript
var divElem = document.getElementById("myFirstDiv");
var myNewHOne = document.createElement("H1");
var t = document.createTextNode("Hello World");
myNewHOne.appendChild(t);    //I have to add some text content to the h1    
divElem.appendChild(myNewHOne);
```

**React’s first goal is to fix that!**
<br>
<br>

## So.. what is React?
***

React.js defines itself as a front-end library to user interfaces. Basically, React proposes a new way of building websites by re-designing the entire coding workflow as well as making websites faster.

#### No More DOM

From now on React.js will take care of the DOM, your job is to create your own and define how they should display or render.

#### Everything is component

You'll divide your app into small pieces (components), all together they make the website a whole.

#### No more website refresh

All of your new are a little part of your layout, but some are hidden at the beginning. You will have to show and hide them based on the user behavior.   

#### No more html String Concatenation

React.js comes with JSX, a special language that will let you build HTML on the Javascript side without having to wrap it within quotes (make it a string). Basically you'll are of the annoying HTML string concatenation. 

<br>
<br>

## Your Entire Website is now a Component
***

The first thing you will do when building big React applications is defining a very big component that will contain everything inside.  Then, you need to inject that component into the website DOM like this:

```javascript{numberLines: true}
import ReactDOM from 'react-dom';
import React from 'react';

class MyBigComponent extends React.Component{
    return (<div>Hello World<div>);
}

// supposing there is a div with the id 'app' on your original website body 
// your entire react application will be added into that div 
ReactDOM.render(<MyBigComponent />, document.querySelector('#app'));
```
<br>
<br>

## Everything is a Component now
***

Remember the Bootstap components?  React takes that concept further by dividing your entire website into smaller components.  Each component has its own `<tag>` just like the HTML tags.  The difference is that now when you create your new components, you get to decide the name of the `<tag>` as well as how it is going to look and behave.  For example, lets looks at the **Bootstrap card:**

![learn react js tutorial](https://ucarecdn.com/73edbb82-467c-4522-af7d-79c33bb270e2/-/resize/300x/)

```jsx{numberLines: true}
import React from 'react';

//here we created the component Modal as a function 
function MyCard(){
    return (
        <div class="card" style="width: 18rem;">
          <img class="card-img-top" src="..." alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
    );
}
```

[[info]]
| :point_up:Each component in React needs to have a render method that returns HTML


### React Components can be **Functions** or **Classes**

The most simple React component is just a function that returns some HTML.  You can also declare any React.Component as a class.  The new class that you declare **needs to have** a render method that specifies how the component should display.

Here is an example of the same `<MyCard />` component, but now declared as a class:


```jsx{numberLines: true}
import React from 'react';

//here we created the component Modal as a class 
export class MyCard extends React.Component{
    
    render(){
        return (
        <div class="card" style="width: 18rem;">
          <img class="card-img-top" src="..." alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
        );
    }
}
```

### Doing Website Layouts with React

A "Layout" in React is basically the combination of two or more components into a parent component.  Some of your components will only serve for layout purposes, so we will call them "Views" because they will not to be reused like typical components.

**For example:**  Lets say you have a [one page website](https://onepagelove.com/what-is-a-one-page-website) website with three sections: Home, About Us and Contact Us.  The "React" way of doing that will be creating a bigger component (VIEW) that contains each section, like this:

```jsx{numberLines: true}
import React from 'react';

//create your first component 
export class EntireWebsiteLayout extends React.Component{
    
    render(){
        return (
            <div>
                <Home />
                <AboutUs />
                <ContactUs />
            </div>
        );
    }
}
```

**This is how React will render your layout:**

Each component will have render method.  The final resulting HTML document will be comprised with the merge of all the outputs that all the components have on their render methods.  Checkout the following illustration to get an idea.

![learn react js tutorial](https://ucarecdn.com/6c7d3747-482a-480d-b5be-fdbf095292f3/-/resize/1200x/)

## The YouTube.com Example
***

On your application wireframe, you can grab a highlighter and start marking all the components your application is going to have.  The easy ones are the typical Bootstrap components: Navbar, Card, etc.  You should also define your own components.

In this case, we have decided to create the following components based on the YouTube website:

+ `<VideoPlayer />`: Will render the entire video player with all the `<VideoControls />` inside.
+ `<Description />`: Will render the video description.
+ `<Comments />`: Will display all the comments and it will have a bunch of <CommentCard /> components inside.
+ `<VideoCard />`: Will display a video thumbnail on the left with the small description on the right and will take people to that video page when clicked.
+ `<VideoTitle />`: Will render the video title.
+ etc.
After you finish identifying your components, it is time to start coding.  Create a new Javascript class in a separate file for each of those components.

Each class needs to have a function called **render.**  This will return the HTML code that the component will output into the website document.

<before-after width="400px"
    before="https://ucarecdn.com/e590a615-2c9d-4671-8483-99dbdd90cd41/" after="https://ucarecdn.com/78aedd23-b5dd-4d1e-b693-b3268f4734fa/" />

### The Component State

Every component comes with a global object (shared within the same Component only) that has the sole purpose of storing the data needed to render it.  For example, lets say that I am developing a Clock Component that has to print the current time every second.  I would need the current time on the state of the component… the code will look something like this:

[[info]]
| :point_up:The following demo updates the current time on every second:

<iframe width="100%" height="300" src="//jsfiddle.net/BreatheCode/r80q431L/10/embedded/js,html,result/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>
<div align="right"><small><a href="//jsfiddle.net/BreatheCode/r80q431L/10/embedded/js,html,result/">Click to open demo in a new window</a></small></div>
### The State Object is Unmutable (cannot be changed)

The state value can only be modified calling the method this.setState() and you will have to pass a new state object that will be merged with the original value. For example:

```javascript{numberLines: true}
//This can only be done in the constructor, anywhere else will return an error 
this.state = something

//You can define a state on your constructor 
constructor(){
   super();
   this.state = {
      counter: 0
   }
}

//and then reset the state anywhere else with a NEW object 
this.setState({
   counter: 2
});
```

### The Component Properties

Any component can have properties, just like in HTML.  For example, in HTML we could define the src property of an image like this:

```html
<img src="http://myurl.com/path/to/image.png" />
```

In React, we can set properties the same way and our components will be able to read them and display different things based on that.

```html
<!-- Here we can invent a new 'textColor' property, but we will have now to make sure to code its behavior --> 
<ClockComponent textColor="red" />
```

In the code above, we have invented a new property to the ClockComponent example.  We will now have to determine and code how that new property will work inside our component.  In this particular case, we would have to assign a red color style to the text output of the clock, like this:

<iframe width="100%" height="300" src="//jsfiddle.net/BreatheCode/r80q431L/8/embedded/js,html,result/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

<div align="right"><small><a href="//jsfiddle.net/BreatheCode/r80q431L/8/embedded/js,html,result/">Click to open demo in a new window</a></small></div>

A real high quality component must communicate with other components only throughout its properties.  This way we will be able to re-use that component a lot of times in the future (similar to the way functions and parameters work).

### The Component Constructor

It is extremely important to initialize the values of each component state on the class constructor, otherwise your application is going to throw an error because the first time it renders the state will be ***null*** or ***undefined.***

The place to initialize your component state is in the constructor method:

The constructor of each component gets called very early on your application runtime – even before your website has been rendered.

```javascript
class ClockComponent extends React.Component {
  constructor(){
    super();
     //here is a great place to define the first value your component state will have 
    this.state = {
    	currentTime: new Date()
    };
  }
}
```

### Life-Cycle of a Component

Every component works like a mini-application.  You are able to control and define your component workflow based on a series of available methods that you can declare and code according to your needs.

![learn react js tutorial](https://ucarecdn.com/541b1d85-c630-4b1f-9af6-08d2d2044089/-/resize/1200x/)

[[info]]
|:link:[Here you will find](https://reactjs.org/docs/react-component.html#the-component-lifecycle) a more detailed explanation of each available life-cycle method.


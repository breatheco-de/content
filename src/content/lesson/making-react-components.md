---
title: "Making React Components"
subtitle: "React.js bread and butter, become a master in Components and you have conquered the front-end world of React."

date: "2018-14-11"
tags: ["fale"]
---

## In React.js Everything is a `<Component />`
***

React.js separates your code into little pieces called Components which can be created/defined as a **class** or as a **function**.  Each component is like a smaller React app that has its own logic and has a final purpose which is to display (Render) something (E.g: a bootstrap Navbar, a dropdown list, a model, a dynamic form, image gallery, subscribe form, almost everything can be designed and coded as a React Component).

```jsx
// as a function 
function NavBar(props){
    return (<nav className="navbar navbar-light bg-light">
              <a className="navbar-brand" href="#">Navbar</a>
           </nav>);
}

//or as a class 
import React from 'react';
class Navbar extends React.Component{
    render(){
        return (<nav className="navbar navbar-light bg-light">
              <a className="navbar-brand" href="#">Navbar</a>
           </nav>);
    }
}
```

## Using a Component
***


Once the component declaration is finished you can reference it using tags like this:

```jsx
import React from "react";
import { render } from "react-dom";

//here you tell react to put <NavBar /> inside the #myApp DOM element 
render(
  <NavBar />,
  document.querySelector("#myApp")
);
```
## The Component Props
***

Sometimes a component needs dynamic information to display.  For example, we need our `<Navbar />` component to show the list of available links and the brand’s logo.  We can include that information within the call of the `<Navbar /> `component just the same as we do in HTML tags.

`<Navbar foo="bar" foo2="bar2" />`

In this example we are passing an array of menu items and a logo URL to the NavBar component that we have just declared above.

```jsx
let menu = [
    {label: 'Home', url: '/home'}
    {label: 'Contact Us', url: '/contact-us'}
];
<Navbar items={menu} logo="http://path/to/logo.png" />
```

Now, within the `<Navbar />` we can use those values (which are delivered through the Props variable) to render the information given.

And, lastly, you should tell React where to Render that component into the DOM.

<iframe src="https://codesandbox.io/embed/zwlnpwmxll?hidenavigation=1" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>


## The Component’s State
***

But what if my component changes over time?  For example a `<Clock />` component will need to update every second and show the current time.  To do that we have the State, and it can only be used on components that have been declared as a Class.

### What is this.**state**?

It’s a **class** variable (available throughout the entire class using this) that you need to declare and initialize inside the class constructor method.  React.js will re-render the entire DOM every time you update that particular variable.

There’s a catch, though.  The State is unmutable, which means it cannot be edited, so we have to override it using the ***this.setState()*** function that receives the new State object (overriding the old one).

```jsx
// WRONG! Never update the state directly 
this.state.foo = "bar";

// CORRECT! Call the this.setState() function and pass the new state to it. 
const newState = {
    foo: "bar"
};
this.setState(newState);

// ALSO CORRECT! You can do it inline 
this.setState({
    foo: "bar"
});
```

Here is an example of the `<Clock />` component we were just talking about:

<iframe src="https://codesandbox.io/embed/zw852wvqp4?autoresize=1&amp;hidenavigation=1" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>


<p align="right"><small><a href="https://codesandbox.io/embed/zw852wvqp4?autoresize=1&amp;hidenavigation=1">Click here to open demo in new window</a></small></p>


## But wait, should I use Function or Class?
***

Both!  It depends on how complex your component is:

+ Functions are super simple and small but very limited, try to use them always unless you are forced to be a Class.
+ Classes are for bigger components that require more logic.  They have a local State (this.state) and component life-cycle methods.
  
But don’t worry!  You can switch from one type of declaration to the other without any pain!  Here is a comparison about both types of components:

|&nbsp; &nbsp;   |As a **Function**     |As a **Class**   |
|:---------|:--------:|:---------:|
|Simplicity      |Very simple declaration and usage.  The only purpose of the function is to return an HTML with whatever this component is supposed to display when placed on the website.      |More complex – the class declaration needs to inherit from React.Component and it contains a lot more functionalities that lets the developer customize the component logic like life-cycle methods and the state.   Please consider that you can create as many additional class methods as you like.         |
|Declaration       |`// using functions`<br>`function MyComponent(){`<br>&nbsp;&nbsp;`return Hello;`<br>`}`<br><br>`// or using arrow functions` <br>`const MyComponent = () => Hello;`     |`// using classes`<br>`import React from 'react';`<br>`class MyComponent extends React.Component{`<br> &nbsp; &nbsp;    `render(){`<br>  &nbsp; &nbsp; &nbsp;       `return Hello;`<br> &nbsp; &nbsp;   `}`<br>`}`         |
|Component State       |&nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp; **No state** <br> <br>This is a stateless component where you have no way of using a global state; this.state is not available.     |You have the state available anytime using this.state – you should initialize the state to some values at the class constructor.<br> <br> `class MyComponent{`<br>&nbsp; &nbsp;    `constructor(){`<br> &nbsp; &nbsp; &nbsp; &nbsp;` super();`<br> &nbsp; &nbsp; &nbsp; &nbsp; `this.state = {`<br> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; `foo: "var"`<br> &nbsp; &nbsp; &nbsp; &nbsp;` }`<br> &nbsp; &nbsp; `}`<br>`}`         |
|Component Properties          |Properties are received as the first function parameter like this:<br><br>`function MyComponent(props){`<br> &nbsp;  &nbsp; &nbsp; &nbsp; `return Hello {props.name};` <br> `}`       |The properties are inside the class variable this.props, and you can reference it anywhere like this:<br><br> `class MyComponent{`<br> &nbsp; &nbsp; &nbsp; `render(){`<br> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; `return Hello {this.props.name};`<br> &nbsp; &nbsp; &nbsp; `}`<br>`}`      |
|Life-cycle methods      |No life-cycle methods available.     |You have all the methods available with these being the most important ones: Constructor, ComponentWillMount, ComponentWillUnmount, getDerivedStateFromProps, etc.<br> <br> You can declare inside your component class those methods and they will magically be called by React at the right time, just like this:<br> <br> `class MyComponent{`<br> &nbsp; &nbsp; &nbsp; `constructor(){`<br> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; `super();`<br> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; `//initialize your state` <br> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; `this.state = {}`<br> &nbsp; &nbsp; &nbsp; `}`<br> &nbsp; &nbsp; &nbsp; `componentDidMount(){  //do something to the state here }` <br> &nbsp; &nbsp; &nbsp; `componentWillUnmount(){  //best place to remove listeners }` <br> &nbsp; &nbsp; &nbsp; `static getDerivedStateFromProps(nextProps, prevState){ //return the updated state } `<br> &nbsp; &nbsp; &nbsp; `//there are many more lifecycle methods` <br> `}`        |

[[info]]
|:link: Here you can find [more information about all the React JS lifecycle methods.](https://reactjs.org/docs/react-component.html#the-component-lifecycle)



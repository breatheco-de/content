---
title: "Making React Components"
subtitle: "React.js bread and butter, become a master in React Components and you have conquered the front-end world of React."
cover: "https://ucarecdn.com/84c4d84c-51b9-4906-a572-71cc07ecfc8c/"
textColor: "white"
date: "2018-11-14"
tags: ["reactjs"]
---

## In React.js Everything is a `<Component />`
***

React.js separates your code into little pieces called Components which can be created/defined as a **class** or as a **function**.  Each component is like a smaller React app that has its own logic and has a final purpose which is to display (Render) something (E.g: a bootstrap Navbar, a dropdown list, a model, a dynamic form, image gallery, subscribe form, almost everything can be designed and coded as a React Component).

```jsx{numberLines: true}
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

<div align="right"><small><a href="https://codesandbox.io/embed/zwlnpwmxll?hidenavigation=1">Click here to open demo in a new window</a></small></div>

## The Component’s State
***

But what if my component changes over time?  For example a `<Clock />` component will need to update every second and show the current time.  To do that we have the state.

### What is this.**state**?

It’s a variable that you need to declare and initialize inside the component in a particular way.  React.js will re-render the entire DOM every time you update that particular variable.

There’s a catch, though.  The State is unmutable, which means the variable cannot be edited directly, so we have to update it using:

- In a class component using the ***setState()*** function that receives the new State object (overriding the old one).
- In a functional component using the `useState` hook and setter.

#### Updating the state on a functional component

```jsx

//     pick a variable name.         initial value
//       ⬇                            ⬇
const [ error, setError ] = useState(null);
//               ⬆
//             pick the modifier name


```
For example we can pick any variable and modifier like this:

```jsx
const [ size, setSize ] = useState(2);
const [ color, setColor ] = useState("pink");
const [ anything, setAnything ] = useState(<any value>);
```

#### Updating the state on a class-based component

```jsx{numberLines: true}
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

#### Using a Function-based component (with hooks)
<iframe
     src="https://codesandbox.io/embed/current-time-in-react-hook-based-dj7k9?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="Current Time in React (hook-based)"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-autoplay allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

<div align="right"><small><a href="https://codesandbox.io/embed/current-time-in-react-hook-based-dj7k9?fontsize=14&hidenavigation=1&theme=dark">Click here to open demo in a new window</a></small></div>

#### Using a Class-based component

<iframe src="https://codesandbox.io/embed/zw852wvqp4?autoresize=1&amp;hidenavigation=1" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>


<div align="right"><small><a href="https://codesandbox.io/embed/zw852wvqp4?autoresize=1&amp;hidenavigation=1">Click here to open demo in a new window</a></small></div>


## But wait, should I use Function or Class?
***

We strongly recomend to use functions and hooks all the time (not Classes)

+ Functions are super simpler.
+ Your bundle (your entire website) size will be lighter and faster to download.
+ Eventually classes will be deprecated.
  
You can switch from one type of declaration to the other without any pain!  Here is a comparison about both types of components:

|&nbsp; &nbsp;   |As a **Function**     |As a **Class**   |
|:---------|:--------:|:---------:|
|Simplicity      |Very simple declaration and usage.  The only purpose of the function is to return an HTML with whatever this component is supposed to display when placed on the website.      |More complex – the class declaration needs to inherit from React.Component and it contains a lot more functionalities that lets the developer customize the component logic like life-cycle methods and the state.   Please consider that you can create as many additional class methods as you like.         |
|Declaration       |`python>// using functions`<br>`python>function MyComponent(){`<br>&nbsp;&nbsp;`python>return Hello;`<br>`}`<br><br>`python>// or using arrow functions` <br>`python>const MyComponent = () => Hello;`     |`python>// using classes`<br>`python>import React from 'react';`<br>`python>class MyComponent extends React.Component{`<br> &nbsp; &nbsp;    `python>render(){`<br>  &nbsp; &nbsp; &nbsp;       `python>return Hello;`<br> &nbsp; &nbsp;   `python>}`<br>`python>}`         |
|Component State       |Each variable should be declared using the useState Hook inside the function    |The state should be declared on the constructor and then use the function `this.setState` to update it.<br> <br> `python>class MyComponent{`<br>&nbsp; &nbsp;    `python>constructor(){`<br> &nbsp; &nbsp; &nbsp; &nbsp;`python> super();`<br> &nbsp; &nbsp; &nbsp; &nbsp; `python>python>this.state = {`<br> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; `python>foo: "var"`<br> &nbsp; &nbsp; &nbsp; &nbsp;` python>}`<br> &nbsp; &nbsp; `python>}`<br>`python>}`         |
|Component Properties          |Properties are received as the first function parameter like this:<br><br>`python>function MyComponent(props){`<br> &nbsp;  &nbsp; &nbsp; &nbsp; `python>return Hello {props.name};` <br> `python>}`       |The properties are inside the class variable this.props, and you can reference it anywhere like this:<br><br> `python>class MyComponent{`<br> &nbsp; &nbsp; &nbsp; `python>render(){`<br> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; `python>return Hello {this.props.name};`<br> &nbsp; &nbsp; &nbsp; `python>}`<br>`python>}`      |
|Life-cycle methods      |Use the useEffect hook for the life cicle. [More information here](https://content.breatheco.de/lesson/react-hooks-explained).    |You have all the methods available with these being the most important ones: Constructor, ComponentDidMount (or useEffect for Hooks), ComponentWillUnmount (or useEffect for Hooks), etc.<br> <br> You can declare inside your component class those methods and they will magically be called by React at the right time, just like this:<br> <br> `python>class MyComponent{`<br> &nbsp; &nbsp; &nbsp; `python>constructor(){`<br> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; `python>super();`<br> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; `python>//initialize your state` <br> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; `python>this.state = {}`<br> &nbsp; &nbsp; &nbsp; `}`<br> &nbsp; &nbsp; &nbsp; `python>componentDidMount(){  //do something to the state here }` <br> &nbsp; &nbsp; &nbsp; `python>componentWillUnmount(){  //best place to remove listeners }` <br> &nbsp; &nbsp; &nbsp; `python>static getDerivedStateFromProps(nextProps, prevState){ //return the updated state } `<br> &nbsp; &nbsp; &nbsp; `python>//there are many more lifecycle methods` <br> `python>}`        |

[[info]]
|:link: Here you can find [more information about all the React JS lifecycle methods.](https://reactjs.org/docs/react-component.html#the-component-lifecycle)



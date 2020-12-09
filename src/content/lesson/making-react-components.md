 ---
title: "Creating React Components"
subtitle: "React.js bread and butter. Become a master in React Components and you have conquered the front-end world of React."
cover_local: "../../assets/images/84c4d84c-51b9-4906-a572-71cc07ecfc8c.jpeg"
textColor: "white"
date: "2020-10-19T16:36:31+00:00"
tags: ["reactjs"]
status: "published"

---

## In React.js Everything is a `<Component />`

React.js separates your code into little pieces called Components which can be created/defined as a **class** or as a **function**.  Each component is like a smaller React app that has its own logic and has a final purpose, which is to display or **render** something (e.g: a bootstrap navbar, a dropdown list, a model, a dynamic form, image gallery, subscribe form, almost everything can be designed and coded as a React Component). To do that every React component needs to have a `return` statement which returns some JSX code (HTML + embeded JS). 

```jsx {numberLines: true}
// a function component 
function NavBar(props){
    return (<nav className="navbar navbar-light bg-light">
              <a className="navbar-brand" href="#">Navbar</a>
           </nav>);
}

// a class component
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

Once you have composed a component you can display it using tags like this:

```jsx
import React from "react";
import ReactDOM from "react-dom";

// here we tell React to put our main app component <Home /> inside the DOM element with id #myApp 
ReactDOM.render(
  <Home />,
  document.querySelector("#myApp")
);

// or we can use the Navbar component to display at the top of the Home component
function Home(props){
    return (
        <div className="container-fluid"> //notice that in JSX we need to use the attribute name 'className instead of 'class'
            <Navbar />
            <div>
                ... The rest of Home's contents ...
            </div>
        </div>
    );
}

```

## The Component Props


Sometimes a component needs dynamic information to display.  For example, we need our `<Navbar />` component to show the list of available links and the brand’s logo.  We can include that information within the call of the `<Navbar />` component just the same way as we do in HTML tags.

```jsx

<Navbar foo="bar" foo2="bar2" />

```

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

## Features of `class` components 

### The Component’s State

We call class components in React ***stateful*** because they come with a global `state` object (shared within the same component only) which has the sole purpose of storing the data needed to render the component. One obvious use of the **state** object would be if, for example, we have a form with input fields which need to be populated by the user. The data entered by the user will need to be saved somewhere in order to be used. The `state` will be that place. 

In another example, let's say that you are developing a `<Clock />` component that has to print the current time every second. That means that our component will need to re-render on every second. 

In order for the state to keep a web page up-to-date, it is programmed to re-render the DOM every time it is modified. So you can probably already see how you can take advantage of this feature - by keeping your current time inside of the state and reassigning it with the most current time on every second. Like so:

[[info]]
| :point_up:The following demo updates the current time on every second:

<iframe src="https://codesandbox.io/embed/zw852wvqp4?autoresize=1&amp;hidenavigation=1" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

<div align="right"><small><a href="https://codesandbox.io/embed/zw852wvqp4?autoresize=1&amp;hidenavigation=1">Click here to open demo in a new window</a></small></div>

The state is always located inside of the `constructor()` method of the class components and is expressed as a plain JS object literal.

#### The State Object is considered Immutable (should not be changed directly)

When speaking about modifying the value of the state, you have to remember that the state should not be mutated directly. It should only be modified by calling the specially designated method this.setState(). In it you will have to pass a new/updated state object that will replace the previous state values. For example:

```jsx {numberLines: true} 

// a direct assignment of this.state is only allowed in the constructor method of your class; anywhere else it may cause an error in your stored data
constructor(){
   super();
   this.state = {
      counter: 0
   }
}

// from anywhere else in the class we can reset the value of a state variable by passing an UPDATED object into the setState() method 
const newState = {
    counter: 2
};
this.setState(newState);

//you can do the same operation inline as well
this.setState({
   counter: 2
});
// notice how above we have passed the entire new version of the state with the {} and the updated counter value within
// notice this new version will completely replace the old version of the state, erasing any other data that may have been in it 
```
State updates happen in an asynchronous manner and diretly mutating the state creates opportunity for values to be incorrectly updated and cause data inconsistencies in your web application. 

### The Component Constructor

As it was mentioned above, the place to initialize your component state is in the constructor method.

The constructor of each component gets called automatically very early in the application's runtime – even before your website has been mounted.

If you do not need to use the state, you do not need to explicitly implement a constructor method and in some examples you will see this method missing.
However, if you will need to use the state, it is extremely important to initialize its values, otherwise on first render your application is going to return your state variables as ***undefined.***

You will also need to implement your constructor method if you will be using any props, with the `super(props)` method. That allows you to inherit from the superclass `React.Component` of which every React **class** component is a subclass.   

```javascript
class ClockComponent extends React.Component {
  constructor(props){
    super(props);
     //here is a great place to define the first value your component state will have 
    this.state = {
    	currentTime: new Date()
    };
  }
}
```

Here is a complete React class-component template for reference:

```jsx

class Clock extends React.Component {
  // the standard constructor method with props and this.state initialized
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  // a React lifecycle method  
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
    
  // a React lifecycle method  
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  // a custom method created by the developer to serve a purpose
  tick() {
    this.setState({
      date: new Date()
    });
  }

  // the standard render method with the component's return 
  render() {
    // here can be inserted any JS code which needs to execute on every re-render and would be used in the return below, like dynamic variables or statements
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);

```

## Features of `function` components

Functional components are simplified React components originally intended for presentational purposes. 
For that reason they are traditionally **stateless** - they have no state of their own. That allows them to be lighter, faster and easier to write. 

Functions' statelessness was addressed with React 16.8.0 which introduced the ever-so popular React Hooks. Since then the `useState` hook allows us to reproduce state behavior in our functional components: 

#### Updating the state of a functional component

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

#### Using a Function-based component (with hooks)

<iframe
     src="https://codesandbox.io/embed/current-time-in-react-hook-based-dj7k9?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="Current Time in React (hook-based)"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-autoplay allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

<div align="right"><small><a href="https://codesandbox.io/embed/current-time-in-react-hook-based-dj7k9?fontsize=14&hidenavigation=1&theme=dark">Click here to open demo in a new window</a></small></div>


## But wait, should I use Function or Class?

So React Hooks effectively changed the nature of the original React functional components and now both types of components are very similar in the things they can do. 
Because of that we strongly encourage you to use functions and hooks as much as possible. 

+ Functions are super simpler.
+ Your bundle (your entire website) size will be lighter and faster to download.
+ Eventually classes will be deprecated.
  
You can switch from one type of declaration to the other without any pain!  Here is a comparison about both types of components:

### Component Simplicity

|As a **Function**     |As a **Class**   |
|:--------:|:---------:|
|Very simple declaration and usage.  The only purpose of the function is to return an HTML with whatever this component is supposed to display when placed on the website.      |More complex – the class declaration needs to inherit from React.Component and it contains a lot more functionalities that lets the developer customize the component logic like life-cycle methods and the state.   Please consider that you can create as many additional class methods as you like.         |

### Component Declaration 
```javascript    
// using functions 
function MyComponent(){
    return Hello;
}
// or using arrow functions
const MyComponent = () => Hello;
```
```js
// using classes
import React from 'react';
class MyComponent extends React.Component{
    render(){
        return Hello;
    }
}
```

### Component State

As a **Function**:     

Each variable should be declared using the useState Hook inside the function    

|As a **Class**:

The state should be declared on the constructor and then use the function `this.setState` to update it.<br> <br> `python>class MyComponent{`<br>&nbsp; &nbsp;    `python>constructor(){`<br> &nbsp; &nbsp; &nbsp; &nbsp;`python> super();`<br> &nbsp; &nbsp; &nbsp; &nbsp; `python>python>this.state = {`<br> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; `python>foo: "var"`<br> &nbsp; &nbsp; &nbsp; &nbsp;` python>}`<br> &nbsp; &nbsp; `python>}`<br>`python>}` 

### Component Properties

As a **Function** :    

Properties are received as the first function parameter like this:

<br><br>`python>function MyComponent(props){`<br> &nbsp;  &nbsp; &nbsp; &nbsp; `python>return Hello {props.name};` <br> `python>}`       

As a **Class** :

|The properties are inside the class variable this.props, and you can reference it anywhere like this:

<br><br> `python>class MyComponent{`<br> &nbsp; &nbsp; &nbsp; `python>render(){`<br> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; `python>return Hello {this.props.name};`<br> &nbsp; &nbsp; &nbsp; `python>}`<br>`python>}`   



### Life-cycle Methods

As a **Function**:     

Use the useEffect hook for the life cicle. [More information here](https://content.breatheco.de/lesson/react-hooks-explained).    

As a **Class**:

You have all the methods available with these being the most important ones: Constructor, ComponentDidMount (or useEffect for Hooks), ComponentWillUnmount (or useEffect for Hooks), etc.<br> <br> You can declare inside your component class those methods and they will magically be called by React at the right time, just like this:

<br> <br> `python>class MyComponent{`<br> &nbsp; &nbsp; &nbsp; `python>constructor(){`<br> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; `python>super();`<br> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; `python>//initialize your state` <br> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; `python>this.state = {}`<br> &nbsp; &nbsp; &nbsp; `}`<br> &nbsp; &nbsp; &nbsp; `python>componentDidMount(){  //do something to the state here }` <br> &nbsp; &nbsp; &nbsp; `python>componentWillUnmount(){  //best place to remove listeners }` <br> &nbsp; &nbsp; &nbsp; `python>static getDerivedStateFromProps(nextProps, prevState){ //return the updated state } `<br> &nbsp; &nbsp; &nbsp; `python>//there are many more lifecycle methods` <br> `python>}`        

[[info]]
|:link: Here you can find [more information about all the React JS lifecycle methods.](https://reactjs.org/docs/react-component.html#the-component-lifecycle)



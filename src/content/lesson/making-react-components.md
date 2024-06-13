---
title: "Creating React Components - Learn what is and how to create a react component"
subtitle: "Components are React.js bread and butter. Become a master creating react components using properties, the component state and learn the most common syntaxes"
tags: ["reactjs"]

---

Imagine you're building a model of a town using LEGO blocks. Each building, tree, car, or any other piece that you might place on your model town can be considered a component. In the world of web development, particularly when using a [technology called React](https://4geeks.com/technology/reactjs), this concept is similar.

A React component is like one of those LEGO pieces. It's a self-contained unit that represents a part of the user interface (UI) in a web application. Just like each LEGO block can be used to construct different parts of your model town and can be reused in different scenarios, a React component can be used to build different parts of a website and can be reused throughout the application.

> 📝 Components are not a new concept in web development since libraries like bootstrap are already defining [bootstrap components](https://4geeks.com/lesson/bootstrap-tutorial-learn-bootstrap-5-in-10-minutes#bootstrap-5-components) like the `navbar`, `dropdown list`, `modal`, etc. 

## In React.js Everything is a Component

React.js separates your code into little pieces called Components which can be created/defined using a **class** syntax (legacy) or as a **function** syntax. Each component is like a small React application that has its own logic and purpose, which is to display or **render** some HTML.

Almost any HTML can be encapsulated and coded as a **React Component**. To do so, every React component needs to have a `return` statement that returns some JSX code (HTML + embedded JS). For example, here is the classic bootstrap navbar encapsulated as a **React Component**.

```jsx
import React from 'react';

// a function component 
function NavBar(props){
    return (<nav className="navbar navbar-light bg-light">
              <a className="navbar-brand" href="#">Navbar</a>
           </nav>);
}
```

> ☝️ There is legacy way to use js classes to create components but we don't showcase or recommend it anymore since it was deprecated a long time ago.

## Using a Component

Once you have created your first a component, you can include it or use it inside the rest of your code by typing the function name like an HTML `<tag>`. For example, if you created a component using the function syntax called Home you can include it in your code using the `<Home>` tag like this:

```jsx
import React from "react";
import ReactDOM from "react-dom";

// We can use the <Navbar /> component to display at the top of the Home component
function Home(props){
    return (
        <div className="container-fluid"> // Notice that in JSX we need to use the attribute name 'className' instead of 'class'
            <Navbar />
            <div>
                ... The rest of Home's contents ...
            </div>
        </div>
    );
}

// Here we tell React to put our main app component <Home /> inside the DOM element with id #myApp 
const root = ReactDOM.createRoot(document.getElementById('myApp'));
root.render(<Home />);

```

## The Component Props

Sometimes a component needs dynamic information to display.  For example, we need our `<Navbar />` component to show the list of available links and the brand’s logo.  We can include that information within the call of the `<Navbar />` component just the same way as we do in HTML tags.

```jsx
<Navbar foo="bar" foo2="bar2" />
```

In this example, we are passing an array of menu items and a logo URL to the NavBar component that we have just declared above.

```jsx
let menu = [
    {label: 'Home', url: '/home'},
    {label: 'Contact Us', url: '/contact-us'}
];
<Navbar items={menu} logo="http://path/to/logo.png" />
```

Now, within the `<Navbar />` we can use those values (which are delivered through the *props* variable) to render the information given.

And, lastly, you should tell React where to render that component into the DOM.

<iframe src="https://codesandbox.io/embed/zwlnpwmxll?hidenavigation=1" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

<div align="right"><small><a href="https://codesandbox.io/embed/zwlnpwmxll?hidenavigation=1">Click here to open demo in a new window</a></small></div>


### The React component `state`

We call class components in React ***stateful*** because they can incorporate a `state` variable which has the sole purpose of storing the data needed to render the component. One obvious use of the **state** would be if, for example, we have a form with input fields that need to be filled by the user. The data entered by the user will need to be saved somewhere in order to be used. The `state` will be that place. 

In another example, let's say that you are developing a `<Clock />` component that has to print the current time every second. That means that our component will need to re-render every second because it has to update the HTML to show the amount of seconds that have passed. 

In order for the state to keep a web page up-to-date, it is programmed to re-render the DOM every time it is modified. So you can probably already see how you can take advantage of this feature by keeping your current time inside the state and reassigning it to the most current time every second. Like so:

> 👇 The following demo updates the current time every second:

<iframe src="https://codesandbox.io/embed/zw852wvqp4?autoresize=1&amp;hidenavigation=1" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

<div align="right"><small><a href="https://codesandbox.io/embed/zw852wvqp4?autoresize=1&amp;hidenavigation=1">Click here to open demo in a new window</a></small></div>

The state is always inside of the `constructor()` method of the class components and is expressed as a plain JS object literal.

### The State is considered Immutable (it should not be changed directly)

When speaking about modifying the value of the state, you have to remember that the state should not be mutated directly. It should only be modified by calling the specially designated react hook called `useState`. In it, you will have to pass a new/updated state object that will replace the previous state values. For example:

```jsx  
// A direct assignment of this.state is only allowed in the constructor method of your class; anywhere else it may cause an error in your stored data
constructor(){
   super();
   this.state = {
      counter: 0
   }
}

// From anywhere else in the class, we can reset the value of a state variable by passing an UPDATED object into the setState() method 
const newState = {
    counter: 2
};
this.setState(newState);

// You can do the same operation inline as well
this.setState({
   counter: 2
});
// Notice how above we have passed the entire new version of the state with the {} and the updated counter value within
// Notice this new version will completely replace the old version of the state, erasing any other data that may have been in it 
```

State updates happen in an asynchronous manner, and directly mutating the state creates an opportunity for values to be incorrectly updated and cause data inconsistencies in your web application. 

### The Component Constructor

As it was mentioned above, the place to initialize your component state is in the constructor method.

The constructor of each component gets called automatically very early in the application's runtime – even before your website has been mounted.

If you do not need to use the state, you do not need to explicitly implement a constructor method, and in some examples, you will see this method missing.
However, if you will need to use the state, it is extremely important to initialize its values; otherwise on the first render your application is going to return your state variables as ***undefined.***

You will also need to implement your constructor method if you will be using any props with the `super(props)` method. That allows you to inherit from the superclass `React.Component` of which every React **class** component is a subclass.   

```jsx
class ClockComponent extends React.Component {
  constructor(props){
    super(props);
     // Here is a great place to define the first value your component state will have 
    this.state = {
    	currentTime: new Date()
    };
  }
}
```

Here is a complete React class-component template for reference:

```jsx
import React from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component {
  // The standard constructor method with props and this.state initialized
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  // A React lifecycle method  
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
    
  // A React lifecycle method  
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  // A custom method created by the developer to serve a purpose
  tick() {
    this.setState({
      date: new Date()
    });
  }

  // The standard render method with the component's return 
  render() {
    // Here we can insert any JS code that needs to execute on every re-render and would be used in the return below, like dynamic variables or statements
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

> ☝️ This is a class component. We strongly recommend you use functional components and hooks instead because class components are legacy.

## Features of `function` components

Functional components are simplified React components originally intended for presentational purposes. 
For that reason they are traditionally **stateless**: they have no state of their own. That allows them to be lighter, faster, and easier to write. 

Functions' statelessness was addressed with React 16.8.0 which introduced the ever-so-popular React Hooks. Since then the `useState` hook allows us to reproduce state behavior in our functional components: 

### Updating the state of a functional component

```jsx
//     pick a variable name          initial value
//        ⬇                            ⬇
const [ error, setError ] = useState(null);
//                ⬆
//             pick the modifier name
```

For example, we can pick any variable and modifier like this:

```jsx
const [ size, setSize ] = useState(2);
const [ color, setColor ] = useState("pink");
const [ anything, setAnything ] = useState(<any value>);
```

### Using a Function-based component (with hooks)

<iframe
     src="https://codesandbox.io/embed/current-time-in-react-hook-based-dj7k9?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="Current Time in React (hook-based)"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-autoplay allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

<div align="right"><small><a href="https://codesandbox.io/embed/current-time-in-react-hook-based-dj7k9?fontsize=14&hidenavigation=1&theme=dark">Click here to open demo in a new window</a></small></div>

## But wait, should I use Function or Class?

So React Hooks effectively changed the nature of the original React functional components, and now both types of components are very similar in the things they can do. 
Because of that, we strongly encourage you to use functions and hooks as much as possible. 

+ Functions are much simpler.
+ Your bundle (your entire website) size will be lighter and faster to download.
+ Eventually, classes will be deprecated.
  
You can switch from one type of declaration to the other without any pain! Here is a comparison of both types of components:

### Component Simplicity

As a **Function**: Very simple declaration and usage. The only purpose of the function is to return an HTML with whatever the component is supposed to display when placed on the website.     

As a **Class**: It is more complex, the class declaration needs to inherit from React.Component and contains a lot more functionalities that let the developer customize the component logic, like life-cycle methods and the state. Please consider that you can create as many additional class methods as you like. 

### Component Declaration 

```jsx
import React from 'react';

// Using functions 
function MyComponent() {
    return (
        <div>
            <h1>Hello</h1>
        </div>
    );
}

// Or using arrow functions
const MyComponent = () => {
    return (
        <div>
            <h1>Hello</h1>
        </div>
    );
};

// Using classes
class MyComponent extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello</h1>
            </div>
        );
    }
}
```

### Component State

As a **Function**:     

Each variable should be declared using the `useState` Hook inside the function.   

As a **Class**:

The state should be declared on the constructor and then use the function `this.setState` to update it.

```jsx
class MyComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            foo: "var"
        };
    }
```

### Component Properties

As a **Function** :    

Properties are received as the first function parameter like this:

```jsx
function MyComponent(props){
    return <div>Hello {props.name}</div>;
}
```         

As a **Class** :

The properties are inside the class variable `this.props`, and you can reference it anywhere like this:

```jsx
class MyComponent extends React.Component {
    render() {
        return <div>Hello {this.props.name}</div>;
    }
} 
```

### Life-cycle Methods

As a **Function**:     

Use the `useEffect` hook for the life cycle. [More information here.](https://content.breatheco.de/lesson/react-hooks-explained)    

As a **Class**:

You have all the methods available, with these being the most important ones: Constructor, ComponentDidMount (or useEffect for Hooks), ComponentWillUnmount (or useEffect for Hooks), etc.

You can declare inside your component class those methods, and they will magically be called by React at the right time, just like this:

```jsx
class MyComponent extends React.Component {
    constructor() {
        super();
        this.state = { /* Initialize your state */ }
    }

    componentDidMount() { /* Do something to the state here */ }

    componentWillUnmount() { /* Best place to remove listeners */ }

    static getDerivedStateFromProps(nextProps, prevState) { /* Return the updated state */ }

    // There are many more lifecycle methods
```              

> 🔗 Here you can find [more information about all the React JS lifecycle methods.](https://reactjs.org/docs/react-component.html#the-component-lifecycle)



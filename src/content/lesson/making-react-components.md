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

## The Component Props (properties)

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


## The React component `state`

We call components in React ***stateful*** because they can incorporate custom `state` variables (by importing the useState hook) which have the sole purpose of storing the data needed to render the component properly. One obvious use of the **state** would be if, for example, we have a form with input fields that need to be filled by the user. The data entered by the user will need to be saved somewhere in order to be used. You will need one `state` variable for each of the inputs in the form:

```jsx
//     pick a variable name          initial value
//            ⬇                                             ⬇
const [ email, setEmail ] = useState(null);
//                         ⬆
//             pick the modifier name
```

In another example, let's say that you are developing a `<Clock />` component that has to print the current time every second. That means that our component will need a `currentDatetime` state variable. This variable will need to be updated every second with the newest current time, each time the variable is updated the component HTML will also be updated and show the new date-time on the screen.

![React component updates current time](https://github.com/breatheco-de/content/blob/master/src/assets/images/current-time-gif.gif?raw=true)

In order for the state to keep a web page up-to-date, it is programmed to re-render the DOM every time it is modified. So you can probably already see how you can take advantage of this feature by keeping your current time inside the state and reassigning it to the most current time every second. Like so:

> 👇 The following demo updates the current time every second:

<iframe src="https://codesandbox.io/embed/zw852wvqp4?autoresize=1&amp;hidenavigation=1" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

<div align="right"><small><a href="https://codesandbox.io/embed/zw852wvqp4?autoresize=1&amp;hidenavigation=1">Click here to open demo in a new window</a></small></div>


### The State is considered Immutable (it should not be update directly)

When speaking about modifying the value of the state, you have to remember that the state should not be mutated directly. 

```jsx

// asuming you have declared a "count" state like this
//           ↓ variable     ↓ modifier
const [ count,    setCount   ] = useState(0);

# ❌ WRONG: you cannot directly set the variable count = 2
count = 2

# ✅ RIGHT: you need to call the setCount function (the modifier) to update the variable
setCount(2)
		
```

> 🔥 The state variables should only be updated by calling their modifiers. 

#### Example: Building a counter 

Here is another example using a state variable `count` and its modifier function called `setCount` in order to create a small counter component:

```jsx  
import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

function Counter() {
    // useState to hold and set the current count
    const [count, setCount] = useState(0);

    // Function to increment the counter
    const incrementHandler = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={incrementHandler}>Increment</button>
        </div>
    );
}

```

State updates happen in an asynchronous manner, and directly mutating the state creates an opportunity for values to be incorrectly updated and cause data inconsistencies in your web application. 

> 📝 Read more about the [use state react hook](https://4geeks.com/lesson/react-hooks-explained#the-usestate-hook)

## Component Life-cycle Methods

The component lifecycle in React refers to the sequence of phases a component goes through from its creation to its removal from the DOM. This lifecycle can be broken down into three main stages: mounting, updating, and unmounting.

1. **Mounting**: This is the phase when the component is being created and inserted into the DOM. It involves initialization and setup tasks, such as setting initial state and integrating with other JavaScript frameworks.

2. **Updating**: This occurs whenever a component’s state or props change, triggering a re-render of the component. This phase can involve data fetching, computations, and working with the DOM based on new props or state.

3. **Unmounting**: This final phase happens when the component is being removed from the DOM, which is a good time to perform cleanup tasks like invalidating timers, canceling network requests, or cleaning up subscriptions to avoid memory leaks.

### React's `useEffect` Hook and Lifecycle

React introduced hooks in version 16.8 to allow functional components to manage state and side effects—tasks traditionally handled in class components using lifecycle methods like `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount`. The `useEffect` hook serves to encapsulate the functionality of these lifecycle methods into one API, making it possible to perform side effects in functional components.

- **Equivalent of class-based `componentDidMount`**: To replicate the behavior of `componentDidMount` using `useEffect`, you pass a function and an empty dependency array. This tells React to run the effect only once after the initial rendering, making it suitable for setups like API calls or subscriptions.

  ```javascript
  useEffect(() => {
    // Code here runs only after the initial render
  }, []);  // Empty dependency array
  ```

- **Equivalent of class-based `componentDidUpdate`**: By including specific values in the dependency array, `useEffect` will re-run the effect anytime those values change, akin to `componentDidUpdate`.

  ```javascript
  useEffect(() => {
    // Code here runs whenever 'value' changes
  }, [value]);  // Dependency array with 'value'
  ```

- **Equivalent of class-based `componentWillUnmount`**: To mimic this lifecycle method, `useEffect` returns a function that will be called when the component is about to be unmounted. This is ideal for cleanup activities.

  ```javascript
  useEffect(() => {
    return () => {
      // Cleanup code here runs on component unmount
    };
  }, []);
  ```

The `useEffect` hook provides a unified and more flexible way to handle side effects compared to traditional class-based lifecycle methods, aligning with the functional programming paradigm and making code reuse and composition easier. More the [the useEffect react hook](/lesson/react-hooks-explained#the-useeffect-hook)    

> 🔗 Here you can find [more information about all the React JS lifecycle methods.](https://reactjs.org/docs/react-component.html#the-component-lifecycle)


## Functional vs class components

Class components are no longer recommended so we updated this article to remove this explanations, please use functional components instead.

Unlike class components, react functional components are simplified React components originally intended for presentational purposes. 
For that reason they are traditionally **stateless**: they have no state of their own. That allows them to be lighter, faster, and easier to write. 

Functions' statelessness was addressed with React 16.8.0 which introduced the ever-so-popular React Hooks. Since then the `useState` hook allows us to reproduce state behavior in our functional components: 

### Using a Function-based component (with hooks)

<iframe
     src="https://codesandbox.io/embed/current-time-in-react-hook-based-dj7k9?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="Current Time in React (hook-based)"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-autoplay allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

<div align="right"><small><a href="https://codesandbox.io/embed/current-time-in-react-hook-based-dj7k9?fontsize=14&hidenavigation=1&theme=dark">Click here to open demo in a new window</a></small></div>

## Should I use Function or Class components?

So React Hooks effectively changed the nature of the original React functional components, and now both types of components are very similar in the things they can do. Because of that, we strongly encourage you to use functions and hooks as much as possible. 

+ Functions are much simpler.
+ Your bundle (your entire website) size will be lighter and faster to download.
+ Eventually, classes will be deprecated.
  
You can switch from one type of declaration to the other without any pain! Here is a comparison of both types of components:

### Component Simplicity

As a **Function**: Very simple declaration and usage. The only purpose of the function is to return an HTML with whatever the component is supposed to display when placed on the website.     

As a **Class**: It is more complex, the class declaration needs to inherit from React.Component and contains a lot more functionalities that let the developer customize the component logic, like life-cycle methods and the state. Please consider that you can create as many additional class methods as you like. 



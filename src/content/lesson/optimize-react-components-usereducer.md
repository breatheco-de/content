---
title: "Optimizing your components with useReducer"
subtitle: "The React components are easy to optimize when necessary. For that we count on with the useReducer hook,  which allows us to encapsulates not only the state of a component, but also the logic that comes with it. Now we'll see...."
cover: "https://www.desktopbackground.org/p/2013/09/13/637935_nasa-wallpapers_1600x1200_h.jpg"
textColor: "white"
date: "2024-01-16T16:45:31-04:00"
tags: ["react","javascript"]
status: "draft"

---

## What is the useReducer hook?


The hooks were launched on version 16.8 of React. Since then all the architecture of react has transformed into a series of hooks that allow the implementation of most of the most important coding design patterns. 

useReducer is a proposal from React to separate the logic from the view of your components. There are other solutions like Redux, Flux, Global Context, etc; however, useReducer is easy to use and keeps the data in a local scope, which means that even when the components are reusing the functions, they don't share data.

## Example of a useReducer

The first step is to declare a reducer function wich is defined with 2 parameters: The `state` that has all the data of the reducer, and an `actions` object that is used to identify the actions can be performed to manipulate the state.

```javascript
function counterReducer(state , action = {}) {
  // Here the reducer receives the state and execute the actions
  // at last, it returns a new state.
}
```

This reducer function is in charge of mutate (modify) the state of your component according to the predefined action types, and it must return the new version of the state which replaces entirely the previous one at the end of the execution, which is why you must be careful to only write what you need and keep all the other values intact by using destructuring 🤓.


```javascript
function counterReducer(state , action = {}) {
  // Whatever you do, always return a new state
  //👍**YES**
  return { ...state, counter: state.counter + 1 }
  
  //🚫**NO**
  //return { counter: state.counter + 1 }
}
```

This function is meant to be used as the first parameter of the `useReducer` hoook.  As a second parameter, it receives a function that returns an object with the initial values of the state.

The hook call returns an array of two values that represents the state (`state`) and the dispatcher: The object that call the executions of actions that perform the logic of the reducer (`actions`).

```javascript
  const intitialCounter = () => ({counter: 0});
  const [state, dispatch] = useReducer(counterReducer, intitialCounter());
```

Inside the reducer, the object `actions` contain the property `type` that indicates which action has been invoked, and we can write the logic to mutate the state entirely.

```javascript
export default function counterReducer(state, action = {}) {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, counter: state.counter + 1 };
    case "DECREMENT":
      return { ...state, counter: state.counter - 1 };
    case "PLUSTEN":
      return { ...state, counter: state.counter + 10 };
    case "MULTYPLYBYTWO":
      return { ...state, counter: state.counter * 2 };
    case "RESET":
      return { ...state, counter: 0 };
    default: 
    // In the case of having no type it returns the state intact
      return state;
  }
}
```

With this, we can have the functions `counterReducer` and `intitialCounter` exported from a file, to be utilized by another component 👌.

## Why use useReducer?

We are used to perceive the components as the unit that groups the view and the logic for its operation. For example: In the following code there is a `Counter` component that has the HTML to define how a counter of numbers should look like and there is also the logic of how it adds a unit each time the "+1" button is pressed.

```jsx
export default function Counter() {

  // Logic ⬇️
  const [counter, setCounter] = useState(0);
  const increment = () => setCounter(counter + 1);

  // View ⬇️
  return (
    <div className="container">
      <h2>State counter</h2>
      <h3>{counter}</h3>
      <div className="buttons">
        <button onClick={increment}>+1</button>
      </div>
    </div>
  );
}
```

What if we need to reuse only the logic in other components? We could consider [centralized states](https://4geeks.com/lesson/context-api), but what if I want to reuse only the logic while leaving every component with its own state? The janky solution would be copying the functions to another file, exporting them from there, and figuring out a way to make them work with every single state component 😰. It doesn't sound convenient...

One solution for this issue is `useReducer`, which as its name suggests **reduces** the state and the logic to a single reusable unit, allowing it to be exported from a file to every component that needs it 💪. This reducer will coexist with the rest of the ordinary component syntax, you can [learn more here](https://4geeks.com/lesson/making-react-components).

## Migrating from useState to useReducer

In this example, we have a counter that not only adds one by one but also has other options to modify its value. 

![react counter using state](https://storage.googleapis.com/media-breathecode/e8e051269b0d0aa93a4ec255742e1118060c6c096d70c0eba9b9f663148a4bff-200x155)

To perform all these actions it needs functions for every single one of them, besides the state itself. For that we'll use the classic `useState` hook, [learn more here](https://4geeks.com/lesson/react-hooks-explained#the-useeffect-hook).

```jsx
export default function CounterUsingState() {
  const [counter, setCounter] = useState(0);
  const increment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter - 1);
  const reset = () => setCounter(0);
  const plusten = () => setCounter(counter + 10);
  const multiplyByTwo = () => setCounter(counter * 2);

  return (
    <div>
      <h2>State counter</h2>
      <h3>{counter}</h3>
      <div>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
        <button onClick={reset}>0</button>
        <button onClick={plusten}>+10</button>
        <button onClick={multiplyByTwo}>x2</button>
      </div>
    </div>
  );
}
```

This works perfectly, but to make this logic reusable and move it to another file, let's convert it into a reducer:

```javascript
// counterReducer.js
export const intitialCounter = () => ({
  counter: 0
});
export default function counterReducer(state, action = {}) {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, counter: state.counter + 1 };
    case "DECREMENT":
      return { ...state, counter: state.counter - 1 };
    case "PLUSTEN":
      return { ...state, counter: state.counter + 10 };
    case "MULTYPLYBYTWO":
      return { ...state, counter: state.counter * 2 };
    case "RESET":
      return { ...state, counter: 0 };
    default:
      return state;
  }
}

```

Now from the component we can import and use the reducer:

```jsx
import React, { useReducer } from "react";
import counterReducer, { intitialCounter } from "./counterReducer";

export default function CounterUsingReducer() {
  // Add the hook useReducer, passing as arguments
  // our reducer function and the initializer,
  // being both imported from another file.
  const [state, dispatch] = useReducer(counterReducer, intitialCounter());

  return (
    <div>
      <h2>Reducer counter</h2>
      {/* Now the counter is inside the reducer's state */}
      <h3>{state.counter}</h3>
      <div>

        {/* We call the dispatch function passing the type of the action to perform the reducer's logic */}
        <button onClick={() => dispatch({ type: "INCREMENT" })}>+1</button>
        <button onClick={() => dispatch({ type: "DECREMENT" })}>-1</button>
        <button onClick={() => dispatch({ type: "RESET" })}>0</button>
        <button onClick={() => dispatch({ type: "PLUSTEN" })}>+10</button>
        <button onClick={() => dispatch({ type: "MULTYPLYBYTWO" })}>x2</button>
      </div>
    </div>
  );
}
```

For this to work it was necessary to use the state of the reducer and replace the functions for the calls to `dispatch`, which runs the logic of the reducer and receives as a parameter the type of action to executer.

## Let's see both cases in action

<iframe src="https://codesandbox.io/embed/q6fjct?view=Editor+%2B+Preview&module=%2Fsrc%2FcounterReducer.js"
     style="width:100%; height: 500px; border:0; border-radius: 4px; overflow:hidden;"
     title="useReducer Demo"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

## And that's it

We have seen the advantages of useReducer and now we know how to extract the logic and the state to a reducer exported on an external file that can be reused by other components. This doesn't mean you have to dish out `useState` entirely and only use `useReducer`. Like everything in coding is about using the right tool for the right job. You can learn more about React and the great tools it has [in this category](https://4geeks.com/technology/reactjs)

The reducers are ideal when we have a lot of functions associated with a single state, and turns out convenient to group logic and data. This can happen in a scenario of great complexity o when you need to reuse functions and their state across many components, then you will have the mighty tool **useReducer** in your arsenal.

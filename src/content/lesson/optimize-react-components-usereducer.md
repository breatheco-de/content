---
title: "Optimizing your components with useReducer"
subtitle: "The React components are easy to optimize when necessary. For that we count on with the useReducer hook,  which allows us to encapsulates not only the state of a component, but also the logic that comes with it. Now we'll see...."
cover: "https://www.desktopbackground.org/p/2013/09/13/637935_nasa-wallpapers_1600x1200_h.jpg"
textColor: "white"
video: "https://www.youtube.com/watch?v=bnlQzZLYRYo"
date: "2024-01-16T16:45:31-04:00"
tags: ["react","javascript"]
status: "draft"

---

## What is the useReducer hook?

Hooks started to exist in react since version 16.8. Since then, the entire react architecture has been transformed into a series of Hooks that allow you to implement most of the major programming patterns.

The useReducer is a React approach to separate the logic from the view in your components. There are other solutions such as Redux, Flux, Global Context, etc. However, the useReducer has become popular because it is simple to use and maintains a local scope on the data, i.e., despite reusing the functions and code of the components, the data will not be shared with each other.

> Separating data from components helps prevent common errors and reuse information and logic in the application.

## Example of a useReducer

The first step is to declare a reducer function (in this example it is called `counterReducer`) which is defined with 2 parameters: `state` which contains the reducer data, and an `actions` object which is used to identify the actions we can execute to manipulate the state.

```javascript
function counterReducer(state , action = {}) {
  // Here the reducer receives the current state
  // then executes the actions
  // finally it returns the new state
}
```

This reducer function is in charge of mutating (or "modifying") the state of your component according to the predefined action types, and should return a new version of the state that completely replaces the previous one at the end of its execution, so be careful and only alter what we need and always return the other values of the state using the destructuring (js destructuring) 🤓.


```javascript
function counterReducer(state , action = {}) {
  // Whatever you do, always return a new state
  //👍**YES**
  return { ...state, counter: state.counter + 1 }
  
  //🚫**NO**
  //return { counter: state.counter + 1 }
}
```

This function is used as the first parameter of the `useReducer` hook. The second parameter is an object with the initial values of the state which must be passed.

The hook call returns an array of two values representing the new state (`state`) and the dispatcher: the object that calls the execution of the actions of the reducer logic (`actions`).

```javascript
  const intialCounter={counter: 0}:
  const [state, dispatch] = useReducer(counterReducer, initialCounter());
```

Within the reducer function, the `actions` object contains a `type` property that tells us which action has been invoked, and we can write logic to mutate the state entirely based on this property.

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

In addition to the specified actions, a `default` case is placed that is executed when the action type is not defined, for which an error is thrown that interrupts the application. This may seem a little extreme, but it is better to have a visible error and debug it, than to have an application without errors(🐞bugs) but that does not work as it should.

Already with this we can have both the `counterReducer` functions and the `initialCounter` initial state exported in a file, to be used by any other component 👌.

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

![react counter using state](https://breathecode.herokuapp.com/v1/media/file/state-counter-png?width=200)

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
export const initialCounter = {counter: 0};
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
import counterReducer, { initialCounter } from "./counterReducer";

export default function CounterUsingReducer() {
  // Add the hook useReducer, passing as arguments
  // our reducer function and the initializer,
  // being both imported from another file.
  const [state, dispatch] = useReducer(counterReducer, initialCounter);

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

We have seen the advantages of useReducer and now we know how to extract the logic and the state to a reducer exported on an external file that can be reused by other components. This doesn't mean you have to dish out `useState` entirely and only use `useReducer`. Everything in coding is about using the right tool for the right job. You can learn more about React and the great tools it has [in this category](https://4geeks.com/technology/reactjs)

The reducers are ideal when we have a lot of functions associated with a single state, and turns out convenient to group logic and data. This can happen in a scenario of great complexity o when you need to reuse functions and their state across many components, then you will have the mighty tool **useReducer** in your arsenal.

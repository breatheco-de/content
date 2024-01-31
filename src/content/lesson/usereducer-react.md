---
title: "What is and How to Use The useReducer Hook in React.js"
subtitle: "Learn how to use the useReducer hook in React.js and how it works, compare it with other alternatives like redux, flux, among others."
cover: "https://www.desktopbackground.org/p/2013/09/13/637935_nasa-wallpapers_1600x1200_h.jpg"
textColor: "white"
date: "2024-01-16T16:45:31-04:00"
tags: ["react", "javascript"]
status: "draft"

---

## What is useReducer

Hooks started to exist in react since version 16.8.
Since then, the whole react architecture has been transformed into a series of "Hooks" that allow it to implement most of the major programming patterns.
The useReducer is a React approach to separate the logic from the view in your components. There are other solutions like Redux, Flux, Global Context, etc. However, the useReducer is simple to use and maintains a local scope on the data, that is, despite reusing the functions and code of the components, the data will not be shared.

## Example of useReducer

This is the simplest example of useReducer:

```react
  const intitialCounter = () => ({counter: 0});
  const [state, dispatch] = useReducer(counterReducer, intitialCounter());
```

The hook `useReducer` receives as first parameter a function that defines the `reducer`, and it will return an array of two values that represent the new state (`state`) and the dispatcher: The object that allows executing the actions/functions of the reducer logic (`actions`). As a second parameter, a function must be passed that returns an object with the initial values of the state.

> The second value of the array that the useReducer returns is called "dispatcher" and not "actions" because it is necessary to have a "dispatcher" of actions as an intermediary to avoid data conflicts.

In turn, the reducer function (in this example it is called `counterReducer`) is defined with 2 parameters: `state` which contains the reducer data, and an `"actions"` object which is used to identify the actions we can execute to manipulate the state.

```react
function counterReducer(state, action = {}) {
  // Here the reducer receives the current state
  // then executes the actions
  // finally it returns the new state
}
```

This reducer function is going to be executed on every action call and should return a new version of the state that completely replaces the previous one at the end of its execution, so be careful and only alter what we need and always return the other values of the state using the 🤓 destructuring (js destructuring).

👍**SI**

```javascript
return { ...state, counter: state.counter + 1 }
```

🚫**NO**

```javascript
return { counter: state.counter + 1 }
```

Inside the reducer, the `actions` object contains a `type` property that tells us which action has been invoked, and we can write logic based on that.

```javascript
export default function counterReducer(state, action = {}) {
  switch (action.type) {
    case "INCREMENT":
      { return { ...state, counter: state.counter + 1 };
    case "DECREMENT":
      return { ...state, counter: state.counter - 1 };
    case "PLUSTEN":
      return { ...state, counter: state.counter + 10 };
    case "MULTYPLYBYTWO":
      return { ...state, counter: state.counter * 2 };
    case "RESET":
      return { ...state, counter: 0 };
    default:
    // In case of no type the unaltered state is returned.
      return state;
  }
}
```

With this, we can have both the `counterReducer` and `intitialCounter` functions exported in a file, to be used by any other component 👌.

## Why use useReducer

We are used to perceiving components as the unit that groups the view and the logic for its operation. For example: In the following code there is a `Counter` component that has the HTML to define how a number counter should look like and there is also the logic of how it should add a unit each time the "+1" button is pressed.

```react
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

But what if we need to reuse the logic in other components? We could [talk about centralized states](https://4geeks.com/en/lesson/context-api), but what if I just want to reuse the logic, each component having its own state? A less practical solution would be copy-pasting or exporting functions from a separate file and figuring out how to make them work with each component's state 😰. That doesn't sound convenient...

The solution to this problem is `useReducer`, which, as its name suggests, the function is to **reduce** a state and its logic to a reusable unit, allowing it to be exported from a file to components that need it 💪. This reducer will coexist with the rest of the typical syntax of a React component; you can [learn more here](https://4geeks.com/en/lesson/making-react-components).

## Migrating from useState to useReducer

In this example, we have a counter that not only increments by 1 but also has other options to modify its value.

![react counter using state](https://breathecode.herokuapp.com/v1/media/file/state-counter-png?width=200)

To perform all these actions, we need functions for each of them, in addition to the state itself. For that, we will use the classic `useState` hook, [learn more here](https://4geeks.com/en/lesson/react-hooks-explained).

```react
export default function CounterUsingState() {
  const [counter, setCounter] = useState(0);
  const increment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter - 1);
  const reset = () => setCounter(0);
  const plusten = () => setCounter(counter + 10);
  const multiplyByTwo = () => setCounter(counter * 2);

  return (
    <div className="container">
      <h2>State counter</h2>
      <h3>{counter}</h3>
      <div className="buttons">
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

This works fine, but to make the logic reusable and move it to another file, we will turn it into a reducer:

```react
// counterReducer.js
export const initialCounter = () => ({
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
    case "MULTIPLYBYTWO":
      return { ...state, counter: state.counter * 2 };
    case "RESET":
      return { ...state, counter: 0 };
    default:
      return state;
  }
}
```

Now, from the component, we import and use the reducer:

```react
import React, { useReducer } from "react";
import counterReducer, { initialCounter } from "./counterReducer";

export default function CounterUsingReducer() {
  // Add the useReducer hook, passing as parameters
  // our reducer function and the initializer,
  // both imported from another file
  const [state, dispatch] = useReducer(counterReducer, initialCounter());

  return (
    <div>
      <h2>Reducer counter</h2>
      {/* Now the counter is inside the reducer's state */}
      <h3>{state.counter}</h3>
      <div>

        {/* Call the dispatch function with the action type to execute the reducer's logic */}
        <button onClick={() => dispatch({ type: "INCREMENT" })}>+1</button>
        <button onClick={() => dispatch({ type: "DECREMENT" })}>-1</button>
        <button onClick={() => dispatch({ type: "RESET" })}>0</button>
        <button onClick={() => dispatch({ type: "PLUSTEN" })}>+10</button>
        <button onClick={() => dispatch({ type: "MULTIPLYBYTWO" })}>x2</button>
      </div>
    </div>
  );
}
```

For this to work, it was necessary to use the reducer's state and replace the functions that were there before with calls to the `dispatch` function, which executes the reducer's logic and receives the action type as a parameter.

## Let's see both cases in action

<iframe src="https://codesandbox.io/embed/t34ldl?view=Editor+%2B+Preview&module=%2Fsrc%2Freducercounter.js&hidenavigation=1"
     style="width:100%; height: 500px; border:0; border-radius: 4px; overflow:hidden;"
     title="useReducer Demo"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

## All set

We have seen the advantages of useReducer and know how to extract the logic from our state to a reducer located in an external file that other components can reuse. This does not mean you have to completely discard `useState` and only use `useReducer`; like everything in programming, it's about using the right tool for the right job. You can learn more about React and its tools [in this category](https://4geeks.com/en/technology/reactjs).

Reducers are ideal when many functions are associated with the state, and grouping logic and data is convenient. This can occur in a scenario of great complexity or when functions and states need to be reused in multiple components, then you will have the powerful tool of **useReducer** in your arsenal.
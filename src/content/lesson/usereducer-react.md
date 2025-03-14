---
title: What is and How to Use The useReducer Hook in React.js
cover: >-
  https://www.desktopbackground.org/p/2013/09/13/637935_nasa-wallpapers_1600x1200_h.jpg
tags:
  - react
  - javascript
description: >-
  Learn how to effectively use the useReducer hook in React.js for state
  management. Discover its benefits and compare it with Redux and Flux!
---
## What is useReducer
Hooks were introduced in React starting from version 16.8. Since then, they have allowed for better state and logic management in functional components.

The `useReducer` hook is an alternative to `useState` for handling complex states. It is based on the reduction pattern, where a **"reducer"** function receives the current state and an action, and returns a new state. It is a lightweight solution compared to Redux or Flux and is ideal when a component requires multiple state updates based on different actions.

## Example of useReducer

Here is a basic example of `useReducer`:

```react
const initialCounter = () => ({ counter: 0 });
const [state, dispatch] = useReducer(counterReducer, initialCounter());
```

The `useReducer` hook takes two arguments:

- **Reducer:** A function that determines how to change the state based on the received action.

- **Initial state:** It can be an object or a function that returns an initial state.

The `dispatch` is a function that allows sending actions to modify the state.

## The reducer function

The reducer receives the current state and an action to generate a new state:

```javascript
function counterReducer(state, action) {
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

Each action is an object with a type property that defines the operation to perform. If the action does not match any case, the reducer returns the state unchanged.

## Why use useReducer?

When a state is simple, `useState` is usually sufficient. However, in cases where there are multiple actions affecting the state, useReducer helps keep the logic organized and reusable.

We are used to perceiving components as the unit that groups the view and the logic for its operation. For example, in the following code, there is a `Counter` component that has the HTML to define how a numeric counter should look, and also the logic of how it should increment by one each time the "+1" button is pressed.

```javascript
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

But what if we need to reuse the logic in other components? We could [talk about centralized states](https://4geeks.com/en/lesson/context-api), but what if I just want to reuse the logic, and each component has its own state? A less practical solution would be to copy and paste or export functions from a separate file and make them work with each component's state 😰. That doesn't sound convenient...

The solution to this problem is `useReducer`, which, as its name suggests, the function is to **reduce** a state and its logic to a reusable unit, allowing it to be exported from a file to the components that need it 💪. This reducer will coexist with the rest of the typical syntax of a React component; you can [learn more here](https://4geeks.com/en/lesson/making-react-components).

## Migrating from useState to useReducer

With `useState`, a counter with several actions would look like the following example where we have a counter that not only increments by 1 but also has other options to modify its value.

![react counter using state](https://breathecode.herokuapp.com/v1/media/file/state-counter-png?width=200)

```javascript
export default function CounterUsingState() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="container">
      <h2>State counter</h2>
      <h3>{counter}</h3>
      <div className="buttons">
        <button onClick={() => setCounter(counter + 1)}>+1</button>
        <button onClick={() => setCounter(counter - 1)}>-1</button>
        <button onClick={() => setCounter(0)}>0</button>
        <button onClick={() => setCounter(counter + 10)}>+10</button>
        <button onClick={() => setCounter(counter * 2)}>x2</button>
      </div>
    </div>
  );
}
```

With useReducer, we can move the logic to a separate file:

```javascript
// counterReducer.js
export const initialCounter = () => ({ counter: 0 });

export default function counterReducer(state, action) {
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

And now in the component, we use `useReducer`:

```javascript
import React, { useReducer } from "react";
import counterReducer, { initialCounter } from "./counterReducer";

export default function CounterUsingReducer() {
  const [state, dispatch] = useReducer(counterReducer, initialCounter());

  return (
    <div>
      <h2>Reducer counter</h2>
      <h3>{state.counter}</h3>
      <div>
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

Now the state logic is completely reusable in other components.

## Let's see both cases in action

<iframe src="https://codesandbox.io/embed/t34ldl?view=Editor+%2B+Preview&module=%2Fsrc%2Freducercounter.js&hidenavigation=1"
     style="width:100%; height: 500px; border:0; border-radius: 4px; overflow:hidden;"
     title="useReducer Demo"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

## All set

We have seen the advantages of useReducer and know how to extract the logic from our state to a reducer located in an external file that other components can reuse. This does not mean you have to completely discard `useState` and only use `useReducer`; like everything in programming, it's about using the right tool for the right job. You can learn more about React and its tools [in this category](https://4geeks.com/en/technology/reactjs).

Reducers are ideal when many functions are associated with the state, and grouping logic and data is convenient. This can occur in a scenario of great complexity or when functions and states need to be reused in multiple components, then you will have the powerful tool of **useReducer** in your arsenal.

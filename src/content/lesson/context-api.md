---
subtitle: "The Context API is one of the most recent tools that the React.js team created to handle application data flow. It is the perfect companion for building small to mid-size applications without the need of a state management library like Redux "
title: "Global state with the Context API"
cover_local: "../../assets/images/4cc6fa0b-2530-4052-aa7e-8dac03788ac3.png"
textColor: "white"
status: "published"
date: "2020-10-19T16:36:31+00:00"
tags: ["reactjs", "context-api"]

---

## Why was life before the Context API more difficult?

When working with React, sharing data between multiple components can become complicated. Initially, we use `useState` to handle local states, but as our application grows, we encounter problems such as:

- **Excessive prop drilling:** Passing data from a parent component to a distant child component can be frustrating and inefficient.

- **Scattered states:** Each component manages its own state, making it difficult to coordinate global changes.

- **Lack of centralized state management:** Without a proper structure, updating the state globally can become messy.


### The Context API along with useReducer solve these problems

React provides us with the `Context API` to share data without manually passing props, and `useReducer` helps us handle state changes in a predictable and structured way.


#### Key benefits of this combination:

- A global state that can be accessed from anywhere in the application without the need for props.

- A centralized mechanism to modify the state through well-defined actions.

- More organized and maintainable code.


## How does the Context API work?

The concept is simple: a single provider shares information with multiple consumers, and `useReducer` manages the changes in a structured way.

Every time the state changes, the components that consume it are automatically updated. It's similar to a television signal: a channel broadcasts the signal, and all tuned-in TVs receive it.

> Everyone now has access to the global context.

![Context API Explanation](https://github.com/breatheco-de/content/blob/master/src/assets/images/72fe5361-5b2a-460f-8c2a-2d376616abf6.png?raw=true)

## Step-by-step implementation

### Step 1: Define the reducer and the initial state

A reducer is a function that receives the current state and an action, and returns a new state based on that action.

```javascript
// store.js - Define the initial state and reducer functions

export const initialStore = () => ({
  todos: ["Make the bed", "Take out the trash"]
});

export default function storeReducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      return { ...state, todos: [...state.todos, action.payload] };
    default:
      return state;
  }
}
```

### Step 2: Create the context and the provider

Here we create a Context and a Provider that will wrap our application to share the global state.

```javascript
import { useContext, useReducer, createContext } from "react";
import storeReducer, { initialStore } from "../store";

const StoreContext = createContext();

export function StoreProvider({ children }) {
  const [store, dispatch] = useReducer(storeReducer, initialStore());
  return (
    <StoreContext.Provider value={{ store, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
}

export default function useGlobalReducer() {
  return useContext(StoreContext);
}
```

### Step 3: Wrap our application with the provider

To allow all components to access the global state, we need to wrap our application with the StoreProvider in the main file.

```javascript
import React from "react";
import ReactDOM from "react-dom";
import { StoreProvider } from "./context/StoreContext";
import App from "./App";

ReactDOM.render(
  <StoreProvider>
    <App />
  </StoreProvider>,
  document.getElementById("root")
);
```

### Step 4: Use the context in a component

Now we can access the global state and modify it from any component with useGlobalReducer().

```javascript
import React from "react";
import useGlobalReducer from "../context/StoreContext";

const TodoList = () => {
  const { store, dispatch } = useGlobalReducer();

  return (
    <div>
      <ul>
        {store.todos.map((task, i) => (
          <li key={i}>{task}</li>
        ))}
      </ul>
      <button onClick={() => dispatch({ type: "ADD_TODO", payload: `Task ${store.todos.length + 1}` })}>
        + Add task
      </button>
    </div>
  );
};

export default TodoList;
```

## Unidirectional data flow

The store is the central point of our application, so we must ensure that its information is not modified directly. Instead, we use dispatch to execute actions that update the state.


## Test the code live

<iframe src="https://codesandbox.io/embed/3jql6k?view=editor+%2B+preview&module=%2Fsrc%2Fcomponents%2FTodoList.jsx"
     style="width:100%; height: 500px; border:0; border-radius: 4px; overflow:hidden;"
     title="api-context-demo"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

<div align="right"><small><a href="https://codesandbox.io/p/sandbox/3jql6k">Click here to open demo in a new window</a></small></div>

---
title: "Learn What is React Flux"
subtitle: "Without Flux, React is just a cute front-end library. React Flux will make it a framework, giving your application a defined structure, taking care of the data-processing layer, and more about flux."
cover_local: "../../assets/images/b84e07e5-5761-469b-85bb-f7afc87d4dc9.png"
textColor: "white"
date: "2020-10-19T16:36:31+00:00"
tags: ["reactjs","flux"]
status: "published"

---

In the endless debate about how to manage a centralized state there has been many proposals and in the same manner that the needs of the apps evolve, also evolve the strategies to solve this problem.

One recommended solution that also scales very well is the combined use of the hooks `useContext` y `useReducer`. With the context you can expose a state and functions for all the components within it, this will prevent a downfall to the abyss of 'prop drilling' and just call the context on the components where is necessary. [Here you can see](https://4geeks.com/lesson/context-api) in more detail how this hook works.

The other piece of the puzzle is the recuder, witch allows to encapsulate state and logic, in a way that can be reused and share by other components. The reducer allows to manage more complex states and also lets you write unit tests for the actions.

## Building a to-do list with flux

### 1) Let's build a reducer to manage the state and actions

To take control over the flow of the data in our application we'll use a `reducer` to group the functions and the logic of the application (actions) along with the data that they handle and must be available to all the other components (state).

For now, let's just say that the reducer is a function that generates a new state every time it runs,  and what it does depends on the information passed to the `action` function. This allows us to call the `actions` to update the state as indicates the flux pattern. To understand better how a reducer works, you can read [this article](https://4geeks.com/lesson/optimize-react-components-usereducer) where we cover this in more depth.

```javascript
// This is the reducer function
const TaskReducer = (state, action) => {
  // Depending on the action type, it performs a specific action
 switch (action.type) {
    case "add":
      return [...state, action.payload];
    case "remove":
      let newState=[...state]
      newState.splice(action.index, 1);
      return newState
    default:
      return state;
  }
};
```

The next step is to make this function available for all the other components of the application, for that we'll use a context with the hook `useReducer`, which will allow us to create a state and the `actions` function to publish it to the rest of the components.

```jsx
//TaskContext.jsx
import { useReducer, createContext } from "react";

// Create an empty context
const TaskContext = createContext(null);

const TaskReducer = (state, action) => {
 // Here is the reducer defined previously👆
};

// Create a component to wrap our application within the context
export function TaskProvider({ children }) {
  // Create the state 'tasks' and the dispatcher 'taskActions'
  // additionally we'll pass an empty array as an initial value.
  const [tasks, taskActions ]= useReducer(TaskReducer, []);
  return (
    {/* Create the context with our state and actions */}
    <TaskContext.Provider value={{tasks, taskActions}}>{children}</TaskContext.Provider>
  );
}

// Is necessary to export the context for it to be used in other components.
export default TaskContext;
```

Now the context is ready with our tasks, all we have to do is wrap our app with this component to start using our context.

```jsx
//index.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { TaskProvider } from "./TaskContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TaskProvider>
      <App />
    </TaskProvider>
  </React.StrictMode>,
);

```
The only thing left to do is to call the context in the components that need to use our tasks.

### 2) Let's start adding a new task

For that, we'll use a component that shows a textbox and a button that dispatches the adding action, all inside a form to ease the handle of the submit event.

All that is basic stuff, but since we want to use the context `actions`, we need to call it from within the component.

```jsx
import { tasks, useContext } from "react";
import TaskContext from "./TaskContext.jsx";

export default function AddItem() {
  const { taskActions } = useContext(TaskContext);
  // From this point onwards we have the reducer's actions available.
  // ...
}
```

To make use of these `actions` we call the function passing as a parameter an object with the properties of the action we want to call, being the most important the property `type` that indicates the specific action to execute. The rest of the properties are optional data that may be required by the action itself.

```jsx
// AddItem.jsx
import { useContext } from "react";
import TaskContext from "./TaskContext.jsx";

export default function AddItem() {
  // Using the context we access the 'taskActions' function.
  const { taskActions } = useContext(TaskContext);
  function handleAddTask(e) {
    e.preventDefault();
    // Calling the action specifying the 'type'
    // as well as task data that will be added.
    let textbox = e.target.elements.task;
    taskActions({ type: "add", payload: textbox.value });
    textbox.value = "";
  }
  return (
    <li>
      <form onSubmit={handleAddTask}>
        <input name="task" type="text"/>
        <button type="submit">+</button>
      </form>
    </li>
  );
}
```

### 3) Now let's show the list

In the same manner that we access `taskActions`, we can also access the `tasks` object that contains the state of the list. Just like before, we must use the `useContext` hook in our component.

```jsx
import { useContext } from "react";
import "./App.css";
import TaskContext from "./TaskContext.jsx";
import ListItem from "./ListItem.jsx";
import AddItem from "./AddItem.jsx";

export default function App() {
  // Accessing the context, but this time only using 'tasks'
  const {tasks} = useContext(TaskContext);

  return (
    <main>
      <h2>Todo list</h2>
      <ul className="list-group w-50">
        <AddItem />
        {tasks.map((task, index) => (
          <ListItem key={index} task={task} index={index} />
        ))}
      </ul>
    </main>
  );
}
```

You can see that we are using the `AddItem` component where you can add a task. After that is being rendered the list with a `map` function, but a component `ListItem` is being used to show this element, and it also has the functionality to remove a task, let's check out that component.

### 4) Task deletion

Even though the render is very basic (a `li` element with the text and a button), what's interesting is how we delete an item with the actions.

***I all stats with the user clicking the trash can icon. That's why we need to start our component by listening to the classic onClick event on the delete button,***

```jsx
  onClick={() => taskActions({ type: "remove", index })}
```

We notice that the call to `actions` is similar to the one used to add items, but in this case is receiving a different parameter called `index`, which indicates to the dispatcher which elements are going to be deleted. Just like we saw in both examples, we can pass any data that's needed to the action at the moment of calling it, as additional parameters.

```jsx
import { useContext } from "react";
import TaskContext from "./TaskContext.jsx";

export default function ListItem({ task, index }) {
  const { taskActions } = useContext(TaskContext);

  return (
    <li>
      {task}
      <button
        onClick={() => taskActions({ type: "remove", index })}
      >
        {/* Trash can icon */}
        <i className="bi bi-trash3"></i>
      </button>
    </li>
  );
}
````

## Final result

We have implemented the logic of our application in a context applying the flux pattern, allowing its use in different components. Now we can see the final result working.

<iframe src="https://playcode.io/1764043"></iframe>

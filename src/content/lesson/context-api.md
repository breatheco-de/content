---
subtitle: "The Context API is one of the most recent tools that the React.js team created to handle application data flow. It is the perfect companion for building small to mid-size applications without the need of a state management library like Redux "
title: "Global state with the Context API"
cover_local: "../../assets/images/4cc6fa0b-2530-4052-aa7e-8dac03788ac3.png"
textColor: "white"
status: "published"
date: "2020-10-19T16:36:31+00:00"
tags: ["reactjs"]

---

## The problem, or "why life before the Context API was harder"

People say that React.js makes the easy stuff hard and the hard stuff easy. It's funny because it's true 😓. These are some of the things they mean:

1. Why is it so hard to share data throughout the entire application? Where are my global variables?

2. Why is it so hard to pass data between components? A.K.A. props. Props are fine when you want to pass data between parent and child, but what happens when we need to go deeper? This is called "Props Hell" or "Prop Drilling".

3. [Redux](https://redux.js.org/)?? Overkill.

### The Context API is here to solve some of those conundrums by

1. Centralizing a global application state: Instead of being limited to local states on views, you can now share data on one central component and spread to its inner components (children, grandchildren and so forth). The centralized state is called **store**, and we can spread it by using the **Context.Provider**.

2. Data propagation and re-rendering: when this centralized *global state* (**store**) changes, it triggers a re-render of all the child components (your entire application), which produces new data to show in the UI. A central **setState***ish*.

3. If you've already worked with React, you've probably felt the frustration of passing properties throughout your application, we call it "property hell".

## How does the Context API work?

The concept behind it is very simple: **There is one big Provider**, that provides the data to many **Consumers**, and there's no limit in the amount of consumers you can use.

Every time the data stored within the **Provider** changes, all the **Consumers** update. It is very similar to how TV signals work: TV channels emit a data signal, and all TV antennas consume this signal, receiving the new content and rendering the image on the televisions.

> Everyone has access to the global context now.

![Context API Explanation](https://github.com/breatheco-de/content/blob/master/src/assets/images/72fe5361-5b2a-460f-8c2a-2d376616abf6.png?raw=true)

## Unidirectional data flow

The **store** is now the most delicate piece of data in our application, and it is susceptible to bad usage, i.e. one bad change and the whole application will crash. To avoid this possible scenario, we have to make sure the store's data is read-only for the consumers, and can be *updated* only by a limited set of functions. Just like the regular state, we don't *change* the state, we set it again. This architecture paradigm is called Flux.

![Flux](https://github.com/breatheco-de/content/blob/master/src/assets/images/flux-simple-f8-diagram-1300w.png?raw=true)

We must split the **store** from the **actions** and the **views** (components) and make sure that the views call actions to update the store. *We will never directly change the store from a view*. I know, I'm being redundant on purpose...

## Now everything together

+ We're going to implement a *single point of truth* for the whole React application: ***global state***.
+ This state will contain the *data* and *functions* to set the new state: `store` and `actions`.
+ We're going to deliver it throughout the whole application using the: `useContext()` hook.

### Simple implementation

Ok, after a couple of hours to make the context API implementation simpler without using bindings... this is what I got in 4 simple steps!:

+ **Step 1 (Create the context)**: This step has almost no logic, just call the `createContext` function from React. That object will be shared within all the consumers during the application's lifetime, it will contain the application **store** and **actions**.

*AppContext.js*

```js
// Step 1: Define a context that will be shared within all the app

import React from 'react';

const AppContext = React.createContext(null);
```

+ **Step 2 (Store and Actions)**: Create a `ContextWrapper` component which will be used to pass the context (step 1) to the Consumers. The `ContextWrapper`'s state is where we declare our initial *global state*, which includes the data (store) and the functions (actions).

> Note that we have to export both `AppContext` and `ContextWrapper`.

*AppContext.js*

```js
// Step 2: Create a ContextWrapper component that has to be the parent of every consumer

import React, { useState } from 'react';

export const AppContext = React.createContext(null);

export const ContextWrapper = (props) => {
 const [ store, setStore ] = useState({
  todos: ["Make the bed", "Take out the trash"]
 });
 const [ actions, setActions ] = useState({
  addTask: title => setStore({ ...store, todos: store.todos.concat(title) })
 });
 
 return (
  <AppContext.Provider value={{ store, actions }}>
   {props.children}
  </AppContext.Provider>
 );
}
```

+ **Step 3 (Views)**: Now your main component can be wrapped inside `ContextWrapper` so that all child components will have access to the **Context**. For this quick example, we will be using the `<TodoList />` component as our main component (the declaration is on the last step).

*index.js*

```js
// Step 3: Wrap your main component in the ContextWrapper

import React from 'react';
import ReactDOM from 'react-dom';

import { ContextWrapper } from 'path/to/AppContext.js';
import TodoList from 'path/to/TodoList';

const MyView = () => (
 <ContextWrapper>
  <TodoList />
 </ContextWrapper>
 );

ReactDOM.render(<MyView />, document.querySelector("#app"));
```

+ **Step 4**: Now we can create the `TodoList` component, knowing that we can use `useContext()` hook to read the store from the **global state** (no props necessary).

In this case, the component will render the to-do's and also be able to add new tasks to the list.

```js
// Step 4: Declare a variable with the hook useContext(), then use it as an object to access any code inside of it 

import React, { useContext } from 'react';
import { AppContext } from 'path/to/AppContext.js';

export const TodoList = () => {
 const context = useContext(AppContext);
 return <div>
  {context.store.todos.map((task, i) => (<li key={i}>{task}</li>))}
  <button onClick={() => context.actions.addTask("I am the task " + context.store.todos.length)}> + add </button>
 </div>
}
```

Very often we will use the `useContext` hook that you see above

```javascript
const context = useContext(AppContext);
return <div>
 {context.store.todos.map((task, i) => (<li key={i}>{task}</li>))}
 <button onClick={() => context.actions.addTask("I am the task " + context.store.todos.length)}> + add </button>
</div>
```

In its destructured variant. Pay attention to how that also simplifies the way we then access the store:

```javascript
const {store, actions} = useContext(AppContext);
return <div>
 {store.todos.map((task, i) => (<li>{task}</li>))}
 <button onClick={() => actions.addTask("I am the task " + store.todos.length)}> + add </button>
</div>
```

## Test the code live

<iframe src="https://codesandbox.io/embed/w75wq6v01k?view=editor+%2B+preview&module=%2Findex.js&hidenavigation=1"
     style="width:100%; height: 500px; border:0; border-radius: 4px; overflow:hidden;"
     title="Example of React&#039;s new context API"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
   
<div align="right"><small><a href="https://codesandbox.io/p/sandbox/w75wq6v01k">Click here to open demo in a new window</a></small></div>

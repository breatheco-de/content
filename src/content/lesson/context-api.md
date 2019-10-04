---
subtitle: "The Context API is one of the most recent tools that the React.js team created to handle application data flow. It is the perfect companion for building small to mid-size applications without the need of a state management library like Redux "
title: "Global state with the Context API"
cover: "https://ucarecdn.com/4cc6fa0b-2530-4052-aa7e-8dac03788ac3/"
textColor: "white"
status: "draft"
date: "2018-12-03"
tags: ["reactjs"]

---

## The problem, or "why life before the Context API was harder"

People say that React.js makes the easy stuff hard and the hard stuff easy. It's funny, because it's true :sweat:. These are some of the things they mean:

1. Why is it so hard to share data throughout the entire application? Where are my global variables?
2. Why is it so hard to pass data between components? A.K.A props. Props are fine when you want to pass data between parent and child, but what happens when we need to go deeper? This is called "Props Hell" or "Prop Drilling".
3. Redux (https://redux.js.org/)?? Overkill.

The Context API is here to solve some of those conundrums by:

1. Centralizing a global application state: Instead of being limited to local states on views, you can now share data on one central component and spread to its inner components (children, grandchildren and so forth). The centralized state is called **store** and we can spread it by using the **Context.Provider** and **Context.Consumer**
2. Data propagation and re-rendering: when this centralized *global state* (**store**) changes, it triggers a re-render of all of the children compoments (your entire application) which produces new data to show up in the UI. A central **setState***ish*.

## How does the Context API work?

The concept behind it is very simple: **There is one big Provider**, that provide the data to many **Consumers**, there's no limit in the amount of consumers you can use.

Every time the data stored within the **Provider** changes, all the **Consumers** update. It is very similar to how TV signal works: TV channels emit a data signal and all TV antennas consume this signal, receiveing the new content and rendering the image on the televisions.

> Everyone has access to the global context now.

![Context API Explanation](https://ucarecdn.com/72fe5361-5b2a-460f-8c2a-2d376616abf6/)

## Unidirectional data flow

The **store** is now the most delicate piece of data in our application, and it is succeptible to bad usage, i.e. one bad change and the whole application will crash. To avoid this possible scenario we have to make sure the store's data is read-only for the consumers, and can be *updated* anew by a limited set of functions. Just like the regular state, we don't *change* the state, we set it anew. This architecture paradigm is called Flux.

![Flux](https://facebook.github.io/flux/img/overview/flux-simple-f8-diagram-1300w.png)

![In-Depth Overview of Flux Architecture]
(https://facebook.github.io/flux/docs/in-depth-overview)

We must split the **store** from the **actions** and the **views** (components) and make sure that the views call actions to update the store. *We will never directly change the store from a view*. I know, I'm being redundant on purpose...

## Now everything together

+ We're going to implement a *single point of truth* for the whole react application: ***global state***.
+ This state will contain the *data* and *functions* to set the new state: ***```store```*** and ***```actions```*** .
+ We're going to deliver it throughout the whole application using the *context*: ***Context.Provider*** and ***Context.Consumer***

### Simple implementation

- **Step 1 (Create the context)**: This step has almost no logic, just call the `createContext` function from react. That object will be shared within all the consumers during the application lifetime, it will contain the application **store** and **actions**.

*AppContext.js*
```js
// Step 1: define a context that will be shared within all the app.

import React from 'react';

const AppContext = React.createContext(null);

```

- **Step 2 (Store and Actions)**: Create a `ContextWrapper` component which will be used to pass the context (step 1) to the Consumers. The `ContextWrapper`'s state is where we declare our initial *global state*, which includes the data/Store ```store``` and the functions ```actions```. Note that we have to export both the ```AppContext``` and the ```ContextWrapper```.

*AppContext.js*
```js
// Step 2: Create a ContextWrapper component that has to be the parent of every consumer.
import React from 'react';

export const AppContext = React.createContext(null);

export class ContextWrapper extends React.Component {
	constructor() {
	    super();
	    this.state = {
		store: {
			todos: ["Make the bed", "Take out the trash"]
		},
		actions: {
			addTask: title => this.setState({ todos: this.state.todos.concat(title) })
		}
	    };
	}
	render() {
		return (
		<AppContext.Provider value={this.state}>
	        	{this.props.children}
		</AppContext.Provider>
		);
	}
}
```

- **Step 3 (Views)**:  Now your main component can be wrapped inside `ContextWrapper` so that all children components will have access to the `Context.Consumer`. For this quick example we will be using the `<TodoList />` component as our main component (the declaration is on the last step).

*index.js*
```js
// Step 4: Wrap your main component in the ContextWrapper,
import React from 'react';
import { ContextWrapper } from 'path/to/AppContext.js';

const MyView = () => (
	<ContextWrapper>
		<TodoList />
	</ContextWrapper>
	);

ReactDOM.render(<MyView />, document.querySelector("#app"));

```

- **Step 4**: Now we can create the ```TodoList``` component knowing that we can use the ```Context.Consumer``` to read the store from the **global state** (no props necessary). In this case the component will render the to-do's and also be able to add new tasks to the list.

```js
// Step 5: Add the Context.Consumer tag to any component

import React from 'react';
import { AppContext } from 'path/to/AppContext.js';

export const TodoList = () => (
	<AppContext.Consumer>
	    { (context) => (
		<div>
			{context.store.todos.map((task, i) => (<li>{task}</li>))}
			<button onClick={() => context.actions.addTask("I am the task " + context.todos.length)}> + add </button>
		</div>
	    )}
	</AppContext.Consumer>
);
```

OR

```js
import React from 'react';
import { AppContext } from 'path/to/AppContext.js';

export const TodoList = () => (
	<AppContext.Consumer>
	    { ({ store, actions}) => ( //Object deconstruction for faster coding
		<div>
			{store.todos.map((task, i) => (<li>{task}</li>))}
			<button onClick={() => actions.addTask("I am the task " + context.todos.length)}> + add </button>
		</div>
	    )}
	</AppContext.Consumer>
);
```


## Test the code live

<iframe src="https://codesandbox.io/embed/w75wq6v01k?hidenavigation=1" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

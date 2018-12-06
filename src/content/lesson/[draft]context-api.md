---
subtitle: "The Context API is the most recent tool that the React.js Team has made available to handle your application data flow. It is the perfect companion for building small to mid-sized applications without the need of Flux or Redux"
title: "Implementing MVC with The Context API"
cover: "https://ucarecdn.com/4cc6fa0b-2530-4052-aa7e-8dac03788ac3/"
textColor: "white"
date: "2018-12-03"
tags: ["reactjs"]

---

## Don't be scared about "The Context API"

The Context API is one of the easiest ways the React.js team has proposed to control your data in small to mid-sized apps. Before Context, our best hope was using more complicated approaches like Flux or Redux that really seemed like an overkill in most of the times.

### Life before the Context API was harder

People say that React.js makes the easy stuff hard and the hard stuff easy. I love that saying, it's so true :sweat: S

1. Why is it so hard to share some data between the entire application?
2. Why is it so hard to pass data between components?
3. Have you tried using Redux? 

The Context API is here to solve some of those conundrums:

1. Avoid "Property Hell": If you have worked with react already you probably have felt the frustration of passing properties all over your application, we call it "property hell". 
2. Have a centralized global application state: Instead of being limited to local states on views, you can now share data on one central store that is quickly available from any javascript file, view or component.
3. Data propagation and re-rendering: If the data changes anytime, your entire application will re-render and update the UI with the new values.

## How does the Context API work?

The concept behind it is very simple: **The is one big producer** and a **bunch of consumers**. Every time the producer data changes, all the consumers get notified. You can think about it very similar to how TV Networks work. One TV channel emits a data signal and all TV antennas get notified, receive the new content and render the image on the televisions. 

> Everyone has access to the global context now.

![Context API Explanation](https://ucarecdn.com/72fe5361-5b2a-460f-8c2a-2d376616abf6/)

### The most simple possible implementation

After couple of hours to make the most simple Context API implementation without using hooks and this is what I got in 5 simple steps:

- **Step 1 (Create the context)**: This step has almost no logic, just call the `createContext` function passing an empty object to it. That object will be shared within all the consumers during the application lifetime, it will contain the application **model** and **actions**.
```js
// Step 1: define a context that will be shared within all the app.
const GlobalContext = React.createContext({
  todos: ["Make the bed", "Take out the trash"]
});
```
- **Step 2 (Model and Actions)**: Create a `ThemeProvider` that will have to be included at the beginning of your app, it has to be. Because it will be responsible to provide the Consumers with the context you just created in the previous step. The `ThemeProvider` state is where we will declare our initial data (**model**) and the functions (**actions**) that manipulate that data throughout the life of the application.
```js
// Step 2: Create a ThemeProvider that has to be the parent of every consumer.
class ThemeProvider extends React.Component {
  constructor() {
    super();
    this.state = {
      // this is the model of your app, a list of todo's
      todos: [],
      // add as many actions (functions) as you want
      addTask: title => this.setState({ todos: this.state.todos.concat(title) })
    };
  }
  render() {
    return (<GlobalContext.Provider value={this.state}>
        {this.props.children}
      </GlobalContext.Provider>);
  }
}
```
- **Step 3 (Views)**:  No it's time to create the application view, we will use the `ThemeProvider` inside the render method of the application and then we can add as many components as we like, and those components will have access to the GlobalContext if that is what we want, we will be adding the `<TodoList />` component that will be creating the 
```js
// Step 4: Create your your first app view with the ThemeProvider component, 
// this View will be added into the document using the ReactDOM.render() function
const MyView = () => (
  <ThemeProvider>
    <TodoList />
  </ThemeProvider>
);
```
- **Step 4**: No lets create a component that have access to the application global context without having to use props. In this case the component will render the todo's and also be able to add new tasks to the list.
```js
// Step 5: Add the consumer tag to any component 
// you want to have access to the global context.
const TodoList = () => (
  <MyContext.Consumer>
    {context => (
      <div>
	    {context.todos.map((task, i) => (<li>{task}</li>))}
        <button onClick={() => context.addTask("I am the task " + context.todos.length)}> + add </button>
      </div>
    )}
  </MyContext.Consumer>
);
```

## Live Example (Todo-list)

Now, let's do a real life example: A Todo List.

1) Our global context will be a list of todo's like the following:

 ```js
	const GlobalContext = React.createContext({
		todos: [] //this will be the list of todo's
	});
 ```

2) Now, let's create the ThemeProvider that will be the parent of all the consumers we will want for the app. 

The code for this ThemeProvider components is very similar in all applications, all that will change is 

```js
class ThemeProvider extends React.Component{
	constructor(){
		super();
		this.state = { 
			todos: [],
			addTask: title => this.setState({ todos: this.state.todos.concat(title) })
		};
	}
    return (<GlobalContext.Provider value={this.state}>
        {this.props.children}
     </GlobalContext.Provider>)
  }
}
```
<iframe src="https://codesandbox.io/embed/w75wq6v01k?hidenavigation=1&view=editor" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>


<!--stackedit_data:
eyJoaXN0b3J5IjpbMTU0NjgzODQyNSwxMTY0OTU3MTM5LDI4MD
g4NDc4LDEzMzk0OTA5MjIsLTM1MjI5NTcyMCwtMTU0OTI3Nzcy
Niw1NzU1NjIxNzksLTE2NzMwODM4NjZdfQ==
-->
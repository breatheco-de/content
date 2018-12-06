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

I tried a couple of hours to make the most simple Context API implementation without using hooks and this is what I got in 5 simple steps:
```jsx
// Step 1: define a context that will be shared within all the app.
const GlobalContext = React.createContext({});

// Step 2: Create a ThemeProvider that has to be the parent of every consumer.
const ThemeProvider = (props) => {
	const context = { todos: [] };
    return (<GlobalContext.Provider value={context}>
        {props.children}
     </GlobalContext.Provider>)
  }
}

// Step 4: Start your app with the ThemeProvider component 
const App = () => (<ThemeProvider><SampleComponent /></ThemeProvider>);

// Step 5: Add the consumer tag to any component 
// you want to have access to the global context.
const SampleComponent = () => <GlobalContext.Consumer>
   {context => <div>
		<ul>{context.todos.map((task, i) => <li>{task}</li>)}</ul>
	</div>}
</GlobalContext.Consumer>
```
<p align="right"><a target="_blank" href="https://codesandbox.io/s/w75wq6v01k">Test this code live</a></p>

Lets talk a little about what just happened on each step:
- **Step 1**: This step has almost no logic, just call the `createContext` function passing an empty object to it. That object will be shared within all the consumers during the application lifetime.
- **Step 2**: Create a `ThemeProvider` that will have to be included at the beginning of your app, it has to be. Because it will be responsible to provide the Consumers with the context you just created in the previous step. The `ThemeProvider` state is where we will declare our initial data (**model**) and the functions (**actions**) that manipulate that data throughout the life of the application.
- **Step 3**: 

## Live Example (Todo-list)

Now, let's do a real life example: A Todo List.

1) Our global context will be a list of todo's like the following:

 ```javascript
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
			todos: [] 
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
eyJoaXN0b3J5IjpbMTAzMDQxMTg2NSwxMzM5NDkwOTIyLC0zNT
IyOTU3MjAsLTE1NDkyNzc3MjYsNTc1NTYyMTc5LC0xNjczMDgz
ODY2XX0=
-->
---
title: "React Hooks Explained"
subtitle: "Hooks are like Steroids for React Components, and they are almost impossible to avoid. This lesson will focus on the 2 most important ones: useState and useEffect."
cover_local: "../../assets/images/84c4d84c-51b9-4906-a572-71cc07ecfc8c.jpeg"
thumb: "https://i.imgur.com/rUQ0MDb.png"
textColor: "white"
date: "2020-10-19T16:36:31+00:00"
authors: ["alesanchezr"]
status: "published"
tags: ["reactjs","javascript","front-end"]

---

## Why hooks?

Functional components passing props are amazing because they are simple, perform fast, and require little code- but they can lead to the much dreaded "wrapper hell" in the quest for maintaining encapsulated components. On the other hand, class components are often confusing to work with for both humans and machines- they often lack a positive developer experience, which makes it more difficult creating a more positive user experience as well. Hooks provide a way for us to use state and lifecycle methods with minimal code- like giving your components super powers!

### My components need super powers?

In general, using props is enough to create an amazing component, but sometimes you need more. Here are some really useful examples to know when to use hooks:

1. If you want to open or close a modal or dialog- use the **useState** hook.
2. If you want to fetch some data only at the beginning of the program execution, use the **useEffect** hook.
3. If you want to share information within all components, use the **useContext** hook. We will talk more about the useContext hook on a separate lesson.

Through experience, you will learn when to use a hook. If you don't think you need them, DON'T use them! The less the better.

### Most applications need at least one <strong>useState</strong> and one <strong>useEffect</strong>. To make use of hooks, we MUST FIRST IMPORT them at the beginning of our file. For example, if we need useState, we would do:

```jsx
import React, { useState } from 'react';
```

And if we want to use useEffect as well, we can include like this:

```jsx
import React, { useState, useEffect } from 'react';
```

Now let's learn how to use them :)

## The `useState` hook:

The most important hook, almost unavoidable! The <strong>useState</strong> helps you initialize a variable and change its value over time without the need of parent components. This is how you can use it:
```jsx
//       variable name      setter name               initial value (any value)
const [ mySuperVariable, mySuperFunction ] = useState(          null        );
```

Basically mySuperVariable will be initialized with `null`, and then you will be able to re-set its value by calling `mySuperFunction` like this:

```jsx
// here we are re-setting the value of mySuperVariable = 'hello' when the user clicks on a button:
<button onClick={() => mySuperFunction('hello')}></button>
```

### Possible uses for </strong>the ` useState` hook</strong>

 1. Counting: Displaying the number of likes on the screen and being able to increase or decrease when the user clicks.
 ![React Counter with Hooks](https://s10.gifyu.com/images/countergif.gif) 
 [![Edit Simple counter using useState and react hooks](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/simple-counter-using-usestate-and-react-hooks-soxu8?fontsize=14&hidenavigation=1&theme=dark)

```jsx
import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const Counter = () => {
  // initilize a count variable at 0, the setCount function
  // will be used to re-set the "count" value.
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>{count} likes</h2>
      {/* Reset count to its previous value + 1 */}
      <span onClick={() => setCount(count + 1)}>👍🏽</span>
      {/* Reset count to its previous value - 1 */}
      <span onClick={() => setCount(count - 1)}>👎🏽</span>
      <h3>Like or dislike to increase/decrease</h3>
    </div>
  );
};

ReactDOM.render(<Counter />, document.getElementById("root"));
```


2. Timer/Clock: You can use the system time to show the current time on the screen, but since time changes all the time, we store it with a state variable.

   ![Building a timer with react hooks](https://s10.gifyu.com/images/ezgif.com-gif-maker-435c19aa6749269d2.gif) [![Edit React js Clock](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/react-js-clock-7zefj?fontsize=14&hidenavigation=1&theme=dark)

```jsx
import React, { useEffect, useState } from "react";


const Clock = (props) => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

 
  return (
    <div>
      <h1>{time}</h1>
    </div>
  );
};

Clock.propTypes = {};

export default Clock;
```


3. Showing an input on the screen: The best practice to get the content from any input is by storing it on a state variable- this is called "Controlled Input". 

    ![Controlled input field](https://s10.gifyu.com/images/ezgif.com-gif-maker-399b80fa21c077ab6.gif) [![Edit controlledinput](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/controlledinput-rbh0m?fontsize=14&hidenavigation=1&theme=dark)
    
```jsx
import React, { useEffect, useState } from "react";

const ControlledInputForm = (props) => {
  //     holds the value of the input
  const [currentValue, setValue] = useState("");
  return (
    <div>
      <h2>Your name is: {currentValue ? currentValue : "Not defined"}</h2>

      {/* 
       This is a controlled input because its value is in sync 
       with the stated variable currentValue  
     */}
      <input
        type="text"
        onChange={(e) => setValue(e.target.value)}
        value={currentValue}
        placeholder="Please type your name"
      />
    </div>
  );
};
ControlledInputForm.propTypes = {};
export default ControlledInputForm;

```

4. Opening/Closing (show/hide): A typical use case is having a dialog that asks a question or allows a user to sign up for a newsletter.

![Modal Window using react hooks](https://s10.gifyu.com/images/ezgif.com-gif-maker-51e6b7321e3cfd394.gif) [![Edit Modal window component with hooks](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/modal-window-component-with-hooks-vb6de?fontsize=14&hidenavigation=1&theme=dark). 

```jsx
import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const Modal = () => {
  /**
   *  Using the useState hook, you have to pay atention to 3 elements:
   *  - opened: a variable that will change over time (can have any name)
   *  - setOpened:  a function that resets the value of opened (can by any name)
   *  - useState: this is the hook, it has to be setState and it receives the initial value for "opened"
   */
  const [opened, setOpened] = useState(true);

  // if opened === true, I show the modal, else i show the button to open the modal
  return opened ? (
    <div>
      <h1>Hello BreatheCode</h1>
      <button type="button" onClick={() => setOpened(false)}>
        Close
      </button>
    </div>
  ) : (
    <button type="button" onClick={() => setOpened(true)}>
      Open
    </button>
  );
};

ReactDOM.render(<Modal />, document.getElementById("root"));

```

| 5. Thousands of other possible applications. | |

Let's explain this hook with a small Modal window example. Here is the live code:

<iframe src="https://codesandbox.io/embed/goofy-sutherland-vb6de?fontsize=14" title="Modal with hooks" allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

To implement a "Modal Window" we decided to create a hooked variable called `opened` that is `true` if the modal window has to be shown to the user.

If the user clicks on "close", we simply use the hook function `setOpened` to change the value of `opened` to `false`.

## The `useEffect` hook:

![useEffect hook for the component lifecycle](../../assets/images/945ae0a2-2495-4955-9e9a-46fdd3efc682componentlifecyclehooks.png)

useEffect is another amazing hook that you will use if you want to execute some code after the component renders, for example:

#### 1) After the component renders for the first time (like the good old componentDidMount).

```jsx
const MyComponent = () => {
    useEffect(() =>

        // whatever you code here will execute only after the first time the component renders

 , []);// <------ PLEASE NOTICE THE EMPTY ARRAY


    return <Some HTML>;
}
```

> :point_up: Please notice the `[]` as the second parameter of the useEffect.

#### 2) Every time (or sometimes) after the component re-renders.

```jsx
const MyComponent = () => {
    useEffect(() =>
        // this will run every time the component re-renders
        if(some_condition){
            //this will run only if some_condition is true
        }
    );// <------ PLEASE NOTICE THE EMPTY ARRAY IS GONE!

    return <Some HTML>;
}
```

> :point_up: This useEffect does not have an empty array `[]` as second parameter.

#### 3) When the component will unmount or stop being rendered (like the good old [componentWillUnmount](https://reactjs.org/docs/react-component.html#unsafe_componentwillmount) function used by class components).

```jsx
const MyComponent = () => {
    useEffect(() =>
        // this will run only the first time the component renders.
        return () => {
            // this will run only right before the component unmounts
        }
    ,[]);// <------ PLEASE NOTICE THE EMPTY ARRAY

    return <Some HTML>;
}
```

## Building a Todo List Using just `useState` and `useEffect` Hooks

<p align="center">
    <img src="../../assets/images/41f4a2be-380f-47af-acab-d479acf80921todolisthooks.gif">
</p>

For example, let's say I'm building a todo list, and I have to load the list of tasks from an API. I will have to fetch the information right after the component renders for the first time:

```jsx
const Todos = (props) => {
    // initialize the tasks variable to an empty array and hook it to setTasks function
    const [ tasks, setTasks] = useState([]);

    // this function useEffect will run only one time, when the component is finally loaded the first time.
    useEffect(() =>
        // here I fetch my todos from the API
        fetch('https://assets.breatheco.de/apis/fake/todos/user/alesanchezr')
            .then(r => r.json())
            .then(data => setTasks(data)) // here it re-set the variable tasks with the incoming data
    , []);

    return <ul>{tasks.map(t => <li>{t.label}</li>)}</ul>;
}
```

> :point_up: Review the code in depth and live demo by [clicking here](https://codesandbox.io/s/xenodochial-varahamihira-egh86?fontsize=14)

## Further Reading
For more information, including [how to build your own hooks](https://reactjs.org/docs/hooks-custom.html), check out: [Official React Documentation](https://reactjs.org/docs/hooks-overview.html)

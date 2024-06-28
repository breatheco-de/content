---
subject: "About the ReactDOM CreateRoot function"
description: "Discover the benefits of using React's createRoot function, introduced in React v18, as we explore its role in replacing ReactDOM.render"
tags: ["react"]
authors: ["alesanchezr"]

---

# The ReactDOM CreateRoot function

The React.createRoot function method should be the first function called on your React application. It replaces the older ReactDOM.render method (since React v18) and has several improvements that help make your application more efficient and responsive.

Here is the smallest possible React JS application and how you must use the createRoot function to begin using React:

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';

// Define a simple component that will be your entire React.js app (for now)
const App = () => {
  return (
    <div>Hello, World!</div>
  );
};

// Create a root container and render the component
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
```

## createRoot is what connects react to The JS traditional DOM

The entire React.js is just a magic trick to make the developer's life easier, in reality, the only way to make dynamic websites with javascript is using [the document object model](https://4geeks.com/lesson/what-is-dom-define-dom), and it's really annoying to use it.

React still has to connect to the DOM before it can start doing its thing, the `ReactDOM.createRoot` method was created just for that; it binds your first ever react component (usually called `<App>`) to your first html div (usually with the id `root`).

You need a traditional and -almost- empty HTML website with at least one `<div>` tag with the ID `root` like this:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Smallest React App</title>
</head>
<body>
  <div id="root"></div>
  <script src="index.js"></script>
</body>
</html>
```

And then you can call the ReactDOM.createRoot function using javascript like this:

```jsx
// Create a root container and render the component
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
```

> Note how the `<App />` component is referenced as the first React.js component on this application.

## Forget about the DOM forever

After calling the `createRoot` function, you don't have to care about [The DOM](https://4geeks.com/technology/the-dom) ever again, you can create as many react js components as you need and reference them within the code, for example:

```jsx
const Card = () => {
  return (
    <div>I'm a card</div>
  );
};

// Your main App component
const App = () => {
  return (
    <div>Hello, World!</div>
    <div>Here is the cars: <Card /></div>
  );
};

// Create a root container and render the component
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
```

## `ReactDOM.render` is no longer used

In previous versions of react we used `ReactDOM.render` instead of `ReactDOM.createRoot` but that function is deprecated and not recomended any more. The switch was made since React v18 because the new function has way better performance and many other advantages like: 

- **Better Resource Management**: It helps React manage system resources more efficiently, ensuring that updates to your application are handled in a way that optimizes performance and responsiveness.
- **Improved User Experience**: The method allows React to manage better how and when updates are displayed to the user, resulting in a smoother and more seamless experience.
- **Flexibility for Developers**: Developers can now define which updates are urgent and which can be deferred, providing more control over the rendering process.

### `ReactDOM.render` vs `ReactDOM.createRoot`

If we want to get technical, what makes `createRoot` a better function is its capacity to do concurrent rendering: Concurrent rendering allows React to work on multiple tasks simultaneously. It can start rendering an update, pause it if something more urgent comes up (like user input), and then continue the rendering process later. This non-blocking behavior helps keep the UI responsive.

---
title: "What are controlled and/or uncontrolled inputs in React.js"
subtitle: "Doing forms in React.js are one of those things that can be a little anoying"
cover_local: "../../assets/images/e16d59ad-4c11-4ca0-8bfc-5a9d147c6c2e.jpeg"
textColor: "white"
status: "published"
date: "2020-10-19T16:36:30+00:00"
tags: ["react-js"]
canonical: ""

---

This lesson is more about **how to work with inputs in react** than **what is a controlled input** its better to explain the reasons we need it and why **controlled inputs** is considered the best approach in React.js applications.

## Inputs in Vanilla.js simple Javascript

If you want to retrieve an input value in simple Javascript/HTML you can do something like this:

```jsx

// Asuming you have this input with the ID=first_name:
<input type="text" id="first_name" /> 

// With javascript you can use:
const value = document.querySelector('#first_name').value;
```

But with React the solution is not that simple; the only way to keep data that may change over time inside react components is using the famous `state`.

## What is a Controlled Input

A controlled input is just another input with the difference that the value of it is in sync with the state of a component, something like this:

```jsx
const AnyComponent = () => {
    const [inputValue, setInputValue ] = useState('');
    
    return <input type="text" onChange={e => setInputValue(e.target.value)} value={inputValue} />
}
```

When you use the input property `onChange` together with the property `value` you are basically forcing the input's value to be completely in two-way sync with the hooked state variable `inputValue`.

1. If the onChange function gets called => the inputValue will be updated.
2. If the `inputValue` variable gets updated => the input will also change its value.

## Why use controlled inputs?

A controlled is not the only way to access and/or update the value of an input, you can also use the `useRef` hook and try to manipulate the input the traditional way, using DOM, but long term, it will end up being more complicated and harder to maintain that controlled inputs.

Also, a controlled input gives you many additional benefits like immediate access to the input value for validations, an instant update of the input, etc.

## Validating Inputs in React with controlled inputs

Once your controlled input is ready, the validations are simple because now you have the `inputValue` variable at your disposal; for example, if you want to validate that the input is not empty when a button is clicked, you can do something like this:


```jsx
const AnyComponent = () => {
    const [inputValue, setInputValue ] = useState('');
    
    const validateInput = () => {
      if(inputValue === "") alert("The input cannot be empty"));
    }
    return <div>
        <input type="text" onChange={e => setInputValue(e.target.value)} value={inputValue} />
        <button onClick={validateInput}
    </div>;
}
```

You can see a live example here:

<iframe width="100%" height="300" src="//jsfiddle.net/BreatheCode/yjcwozed/embedded/js,result/dark/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

[Click to expand](https://jsfiddle.net/BreatheCode/yjcwozed/)

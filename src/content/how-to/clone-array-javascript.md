---
title: "How to clone an Array in JavaScript?"
subtitle: "Discover different methods to create a copy of an Array in JavaScript. Learn the nuances of Array cloning for effective data manipulation."
tags: ["JavaScript", "Array"]
authors: [DF27ARTS]

---

Cloning an [Array](https://4geeks.com/lesson/what-is-an-array-define-array) in JavaScript is a very common operation in various scenarios. In this article, we will learn how to clone an Array and some cases in which this technique can be used. Here is a short example of how to clone an Array in JavaScript:

```js runable=true
let originalArray = [1, 2, 3, 4, 5];
let arrayCloned = [...originalArray];

originalArray = ["Hello", "World!"];

console.log(originalArray); // output: [ 'Hello', 'World!' ]
console.log(arrayCloned); // output: [ 1, 2, 3, 4, 5 ]
```

In this example, we used the spread operator (`...arrayName`) to create a shallow copy of the `originalArray`, this will create a new Array `arrayCloned` with the same elements. If after cloning the Array you want to change the values of the original Array this will not affect the values of the Array we just cloned because those values point to a different space in the system memory.

## What is cloning an Array?

Cloning an Array means creating a new Array that has the same elements as the original Array, but that is a different object in memory. This way if you modify the original Array it will not affect the cloned Array and vice versa. In JavaScript, Arrays are referenced types, so without proper cloning, modifying an Array may unintentionally affect other parts of the code.

## Different ways of cloning an Array in JavaScript

### 1. Using the Spread Operator

Possibly the best way to easily clone an Array in [JavaScript](https://4geeks.com/technology/javascript) is by using the spread operator, it creates a new Array containing the same values as the original Array but with a different space in memory as shown in the following example:

```js runable=true
let originalArray = [1, 2, 3, 4, 5];
let clonedArray = [...originalArray];

console.log(originalArray); // output: [ 1, 2, 3, 4, 5 ]
console.log(clonedArray); // output: [ 1, 2, 3, 4, 5 ]

originalArray = ["A", "B", "C", "D", "E"];

console.log(originalArray); // output: [ 'A', 'B', 'C', 'D', 'E' ]
console.log(clonedArray); // output: [ 1, 2, 3, 4, 5 ]
```

Here we clone the Array `originalArray` using the spread operator, this creates a new Array `clonedArray` with the same values as the original Array but with a different space in memory.

### 2. Using the Array.from() method

Another very useful way that allows you to clone an Array in JavaScript is the `Array.from()` method, which takes an Array or an iterable object and returns a new Array.

```js runable=true
let originalArray = ["Apple", "Banana", "Watermelon", "Orange", "Strawberry"];
let clonedArray = Array.from(originalArray);

originalArray = ["A", "B", "C", "D", "E"];

console.log(originalArray); // output: [ 'A', 'B', 'C', 'D', 'E' ]
console.log(clonedArray); // output: [ 'Apple', 'Banana', 'Watermelon', 'Orange', 'Strawberry' ]
```

The `Array.from()` method creates a clone of the original Array in a similar way as the spread operator does, this method receives an Array or an iterable object and returns an Array with the same values.

### 3. Using the concat() method

The `concat()` method can also be used to clone an Array in JavaScript.

```js runable=true
let originalArray = ["Apple", "Windows", "Linux"];
let clonedArray = [].concat(originalArray);

originalArray = [3, 1, 4];

console.log(originalArray); // output: [ 3, 1, 4 ]
console.log(clonedArray); // output: [ 'Apple', 'Windows', 'Linux' ]
```

The `concat()` method concatenates two Arrays and returns a new one, concatenating an empty Array with the original Array creates a copy of the original Array that can be stored in a new variable.

### 4. Using the slice() method

Another method you can use to create a copy of an Array in JavaScript is the [slice](https://4geeks.com/how-to/javascript-array-slice) method, below is an example of how to do it:

```js runable=true
let originalArray = ["OpenAI", "Google", "Microsoft"];
let clonedArray = originalArray.slice();

originalArray = [2, 9, 9];

console.log(originalArray); // output: [ 2, 9, 9 ]
console.log(clonedArray); // output: [ 'OpenAI', 'Google', 'Microsoft' ]
```

The `slice()` method is a method that returns a copy of a portion of the original Array. This method receives two parameters, the first represents the index at which the method will start slicing the Array and the second parameter represents the index at which it will end. But if no parameter is specified, it will copy the entire original Array and return a copy with the same values.

### 5. Using JSON.parse()

All of the examples above create a shallow copy of an Array. If you need to make a deep copy of an Array a good option may be to use the `JSON.parse(JSON.stringify(originalArray)` syntax.

```js runable=true
const originalArrayOne = [1, 2, 3, 4, 5, { name: "Thomas" }];
const originalArrayTwo = ["a", "b", "c", { name: "Andrew" }];

const shallowClone = [...originalArrayOne];
const deepClone = JSON.parse(JSON.stringify(originalArrayTwo));

// We are modifying it so you can notice how it doesn't change the original Array.
shallowClone[0] = "X";
shallowClone[5].name = "Jane";

deepClone[0] = 20;
deepClone[3].name = "John";

console.log("Shallow clone");
console.log(originalArrayOne); // output: [ 1, 2, 3, 4, 5, { name: 'Jane' } ]
console.log(shallowClone); // output: [ 'X', 2, 3, 4, 5, { name: 'Jane' } ]

console.log("\nDeep clone");
console.log(originalArrayTwo); // output: [ 'a', 'b', 'c', { name: 'Andrew' } ]
console.log(deepClone); // output: [ 20, 'b', 'c', { name: 'John' } ]
```

A shallow copy only copies the primitive values (numbers, strings, booleans, etc...), but it does not copy the objects or nested Arrays. If you want to create a deep copy of the original Array that also copies the objects or the nested Arrays, you can use the `JSON.parse(JSON.stringify(originalArray)` syntax.

As shown in the example above, if you create a shallow copy of an Array using the spread operator or any of the other methods and change one of the primitive values of the cloned Array it will not affect the original Array but if you change the values of an object or a nested Array it will affect the original Array as well. This problem can be solved by making a deep copy of the Array, this way no matter what values you change in the cloned Array it will never affect the original Array and vice versa.

## When to clone an Array in JavaScript

1. **Undo/Redo functionality**: In an online drawing application where users can draw shapes on a canvas. Cloning the Array representing the state of the canvas before each modification can be a good idea, it allows the user to undo or redo their drawing actions.
2. **Immutable status management**: In a financial dashboard application, where charts display real-time information, cloning the Array containing the financial data before updating the status ensures that historical financial records remain unchanged for auditing purposes.
3. **Form data handling**: In an e-commerce payment process, when a user edits their shipping data, cloning the original Array containing the shipping information allows the system to compare the edited version with the original for validation. This ensures accurate and secure processing of the data entered by the user.

These are some examples, but there are many different situations in which it can be useful to clone an Array, either for security or for simplicity when analyzing or simply working with data.

## Conclusion

Cloning an Array can be very useful in many different situations, in this article we cover some of the most common ways to clone an Array in JavaScript, a fundamental skill for efficient data manipulation. Understanding the nuances of array cloning is crucial in avoiding unintended side effects in your code. Dive deeper into JavaScript and Array manipulation by exploring more articles and resources on our blog. If you're eager to advance your skills in web development, consider [signing up for free](https://4geeks.com/pricing) at 4Geeks.com.

¡Have fun in your software development journey! 😀👋

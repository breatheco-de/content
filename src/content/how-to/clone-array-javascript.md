

## How to clone an array in Javascript?

Cloning an array in Javascript is a very common operation in various scenarios. In this article we will learn how to clone an array and some cases in which this technique can be used.

```js
let originalArray = [1, 2, 3, 4, 5];
let arrayCloned = [...originalArray];

originalArray = ["Hello", "World!"];

console.log(originalArray); // output: [ 'Hello', 'World!' ]
console.log(arrayCloned); // output: [ 1, 2, 3, 4, 5 ]
```

In this example, we use the spread operator to create a shallow copy of the `arrayoriginal`, this will create a new array `arrayCloned` with the same elements. If after cloning the array you want to change the values of the original array this will not affect the values of the array we just cloned because those values point to a different space in in the system memory.

## What is cloning an array?

Cloning an array means creating a new array that has the same elements as the original array, but that is a different object in memory. This way if you modify the original array it will not affect the cloned array and vice versa. In Javascript, arrays are referenced types, so without proper cloning, modifying an array may unintentionally affect other parts of the code.

## Different ways of cloning an array

### 1. Using the Spread Operator

Possibly the best way to easily clone an array in JavaScript is by using the spread operator, the spread operator creates a new array containing the same values as the original array but with a different space in memory as shown in the following example.

```js
let c = [1, 2, 3, 4, 5];
let clonedArray = [...originalArray];

console.log(originalArray); // output: [ 1, 2, 3, 4, 5 ]
console.log(clonedArray); // output: [ 1, 2, 3, 4, 5 ]

originalArray = ["A", "B", "C", "D", "E"];

console.log(originalArray); // output: [ 'A', 'B', 'C', 'D', 'E' ]
console.log(clonedArray); // output: [ 1, 2, 3, 4, 5 ]
```

Here we clone the array `originalArray` using the spread operator, this creates a new array `clonedArray` with the same values of the original array but with a different space in memory.

### 2. Using the Array.from() method

Another very useful way that allows you to clone an array in Javascript is the `Array.from()` method, which takes an array or an iterable object and returns a new array.

```js
let originalArray = ["Apple", "Banana", "Watermelon", "Orange", "Strowberry"];
let clonedArray = Array.from(originalArray);

originalArray = ["A", "B", "C", "D", "E"];

console.log(originalArray); // output: [ 'A', 'B', 'C', 'D', 'E' ]
console.log(clonedArray); // output: [ 'Apple', 'Banana', 'Watermelon', 'Orange', 'Strowberry' ]
```

The `Array.from()` method creates a clone of the original array in a similar way as the spread operator does, this method receives an array or an iterable object and returns an array with the same values.

### 3. Using the concat() method

The `concat()` method can also be used to clone an array in Javascript.

```js
let originalArray = ["Apple", "Windows", "Linux"];
let clonedArray = [].concat(originalArray);

originalArray = [3, 1, 4];

console.log(originalArray); // output: [ 3, 1, 4 ]
console.log(clonedArray); // output: [ 'Apple', 'Windows', 'Linux' ]
```

The `concat()` method concatenates two arrays and returns a new one, concatenating an empty array with the original array creates a copy of the original array that can be stored in a new variable.

### 4. Using the slice() method

Another method you can use to create a copy of an array in Javascript is the `slice()` method, below is an example of how to do it.

```js
let originalArray = ["OpenIA", "Google", "Microsoft"];
let clonedArray = originalArray.slice();

originalArray = [2, 9, 9];

console.log(originalArray); // output: [ 2, 9, 9 ]
console.log(clonedArray); // output: [ 'OpenIA', 'Google', 'Microsoft' ]
```

The `slice()` method is a method that returns a copy of a portion of the original array. This method receives two parameters, the first represents the index at which the method will start slicing the array and the second parameter represents the index at which it will end. But if no parameter is specified, it will copy the entire original array and return a copy with the same values.

### 5. Using JSON.parse()

All of the examples above create a shallow copy of an array. If you need to make a deep copy of an array a good option may be to use the `JSON.parse(JSON.stringify(originalArray)` syntax.

```js
const originalArrayOne = [1, 2, 3, 4, 5, { name: "Thomas" }];
const originalArrayTwo = ["a", "b", "c", { name: "Andrew" }];

const shallowClone = [...originalArrayOne];
const deepClone = JSON.parse(JSON.stringify(originalArrayTwo));

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
> codeoutput: 
```bash
Shallow clone
[ 1, 2, 3, 4, 5, { name: 'Jane' } ]
[ 'X', 2, 3, 4, 5, { name: 'Jane' } ]

Deep clone
[ 'a', 'b', 'c', { name: 'Andrew' } ]
[ 20, 'b', 'c', { name: 'John' } ]
```

A shallow copy only copies the primitive values (numbers, strings, booleans, etc...), but it does not copy the objects or nested arrays. If you want to create a deep copy of the original array that also copies the objects or the nested arrays, you can use the `JSON.parse(JSON.stringify(originalArray)` syntax.

As shown in the example above, if you create a shallow copy of an array using the spread operator or any of the other methods and change one of the primitive values of the cloned array it will not affect the original array but if you change the values of an object or a nested array it will affect the original array as well. This problem can be solved by making a deep copy of the array, this way no matter what values you change in the cloned array it will never affect the original array and vise versa.

## When to clone an array in Javascript

1. **Undo/Redu functionality**: In an online drawing application where users can draw shapes on a canvas. Cloning the array representing the state of the canvas before each modification can be a good idea, it allows the user to undo or redo their drawing actions.
2. **Immutable status management**: In a financial dashboard application, where charts display real-time information, cloning the array containing the financial data before updating the status ensures that historical financial records remain unchanged for auditing purposes.
3. **Form data handling**: In an e-commerce payment process, when a user edits their shipping data, cloning the original array containing the shipping information allows the system to compare the edited version with the original for validation. This ensures accurate and secure processing of the data entered by the user.

These are some examples, but there are many different situations in which it can be useful to clone an array, either for security or for simplicity when analyzing or simply working with data.

## Conclusion

Cloning an array can be very useful in many different situations, in this article we cover some of the most common ways to clone an array in JavaScript. We also cover the difference between shallow and deep copying as well as when it can be useful to clone an array in real applications. I encourage you to keep learning and trying for yourself with the different ways to clone an array, remember that the best way to learn something is to practice it. If you want to improve your software development skills, I recommend you to register for free at [4Geeks.com](https://4geeks.com/es/pricing).

Happy programming! 😀👋





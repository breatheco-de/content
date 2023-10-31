---
title: "How to use the Javascript Fill Method?"
subtitle: "Learn how to effectively use the Fill method in JavaScript arrays. Explore its syntax, parameters, and practical examples to efficiently populate arrays."
tags: ["javascript","arrays"]
authors: ["DF27ARTS"]

---

Sometimes we need to fill an array with a specific value. There are many ways to do this, but the best and easiest way is to use the `fill()` [Javascript](https://4geeks.com/lesson/what-is-javascript-learn-to-code-in-javascript) method. In the following example, we use this method to fill an empty array with numbers.

```js
const numbers = [null, null, null, null, null];

const array1 = numbers.fill(5, 0, 3);
console.log(array1); // output: [ 5, 5, 5, null, null ]

const array2 = numbers.fill(7);
console.log(array2); // output: [ 7, 7, 7, 7, 7 ]
```

In this example, we use the Javascript array `fill()` method to fill an array that contains `null` values with numbers. In the first array `array1` we filled only the first three values from the index `0` to the index `3` with the number `5`, in the second array `array2` we filled the whole array with the number `7`.

## What is the Javascript fill method used for?

The [Javascript fill](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill) method of [arrays](https://4geeks.com/lesson/what-is-an-array-define-array) changes all the elements in an array to a static value and returns a new array with the new values. This method has many use cases for example, you can use it to clear the values of an array or to initialize an array or a two-dimensional matrix with default values. Basically, you can use this method whenever you want to change more than one of the elements of an array to a single specific value.

This method receives three parameters:

```js
array.fill(value, start, end)
```

 - `value`: this parameter is the value with which you want to fill the array, if this parameter is not passed the array will be filled with the value `undefined`, you can pass any type of data as a value, it can be a `string`, a `number`, an `object`, an `array`, etc...
 - `start`: this is the index at which to start filling the array (optional). 
    - if this value is a negative number it starts from the `array.length` backwards.
    - if this value is greater than `array.length` none of the values in the array are changed.
 - `end`: this is the index at which to end filling the array (optional).
    - if this value is a negative number then it starts from the `array.length` backwards.
    - if this value is greater than `array.length` then the `array.length` value is used.

This is an example of how to use these three parameters:

```js
const arrayOne = [null, null, null, null, null];

const value = 5;
const start = 1;
const end = 4;

const arrayTwo = arrayOne.fill(value, start, end);
console.log(arrayTwo); // output: [ null, 5, 5, 5, null ]
```

Here we have an array filled with `null` values `arrayOne` and then we call the `fill()` method to fill this array with the number `5` starting at the index `1` and ending but not including the value at the index `4`, this method returns the modified array which is store in the constant `arrayTwo`.

You'll have a better understanding of this method with these examples:

```js
console.log([0, 0, 0].fill(4)); // output: [ 4, 4, 4 ]
console.log([0, 0, 0].fill(4, 1)); // output: [ 0, 4, 4 ]
console.log([0, 0, 0].fill(4, 1, 2)); // output: [ 0, 4, 0 ]
console.log([0, 0, 0].fill(4, 1, 1)); // output: [ 0, 0, 0 ]
console.log([0, 0, 0].fill(4, 4, 5)); // output: [ 0, 0, 0 ]
console.log([0, 0, 0].fill(4, 1, 9)); // output: [ 0, 4, 4 ]
console.log([0, 0, 0].fill(4, NaN, NaN)); // output: [ 0, 0, 0 ]
console.log([0, 0, 0, 0, 0].fill(4, -3, -1)); // output: [ 0, 0, 4, 4, 0 ]
console.log(Array(5).fill(4, 1, 3)); // output: [ <1 empty item>, 4, 4, <2 empty items> ] 
```

> Is important to remember that the `fill()` method returns a reference to the original modified array as shown in the next example:

```js
const arrayOne = [null, null, null, null, null];
const arrayTwo = arrayOne.fill(2);

console.log("Original: ", arrayOne); // output: Original: [ 2, 2, 2, 2, 2 ]
console.log("Modified: ", arrayTwo); // output: Modified: [ 2, 2, 2, 2, 2 ]

console.log(arrayOne === arrayTwo); // output: true
```

In this code, we create an array `arrayOne` with 5 `null` elements. Then we call the `fill()` method to fill all the elements in this array with the number `2` and store the result in the constant `arrayTwo`. After calling the `fill()` method both the original and the modified arrays have the same values, this is because the `fill()` method changes the values of the original array `arrayOne` and returns a reference to it which is store in the second array `arrayTwo`. So if you compare the two arrays the result will be `true` because they both store a reference to the original modified array.

## Use cases of the Javascript fill method 

The Javascript `fill()` method has multiple use cases, we'll see some of them in the next examples.

### 1. Initialized an array with elements

 The `fill()` method can be used to initialize an array with elements by default.

```js
const numbers = Array(10).fill().map((_, index) => index + 1);

console.log(numbers); // output: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
```

In this example, we use the `fill()` method together with the `map()` method to initialize an array with numbers. First, we create an array with `10` empty elements and then we call the `fill()` method to fill the array with `10` iterable elements. After that, we use the `map()` method to assign the index of each element plus one as its value. For example, the index of the first element is `0` plus one equals `1` so the value of the first element of the array will be `1`, the index of the second element is `1` plus one equals `2` so the value of the second element will be `2`, and so on with all the elements of the array.

This way to initialize an array with elements is especially important when you need to create an array with a massive amount of data, for example, the even numbers from `0` to `1000`.

```js
const evenNumbers = Array(1000)
    .fill()
    .map((_, index) => index + 1)
    .filter((num) => num % 2 === 0); 

console.log(evenNumbers); // output: [ 2, 4, 6, 8 ... 998, 1000 ]
```

This example works the same as the previous one only that it uses the `filter()` method to filter all the even numbers of the array, with the syntax `num % 2 === 0`.

### 2. Initialize an empty two-dimensional matrix

An interesting use for the Javascript `fill()` method is to initialize a two-dimensional matrix, for example, a matrix to play the game **tic tac toe**.

```js
const newMatrix = Array(3).fill(Array(3).fill(0));
console.log(newMatrix);
```
> output: newMatrix
```js
[ 
  [ 0, 0, 0 ], 
  [ 0, 0, 0 ], 
  [ 0, 0, 0 ] 
]
```

In this example we want to create a two-dimensional matrix for the **tic tac toe** game. For this, we have to create an array with `3` empty values with the syntax `Array(3)` then we call the `fill()` method to fill these three values with three new arrays with empty values with the syntax `Array(3).fill(Array(3))` and then we call the `fill()` method on each of this arrays with the value `0` to initialized the two-dimensional matrix for the game, we do this with the syntax `Array(3).fill(0)`.

### 3. Create mock data 

Another way you can use the `fill()` method is to create mock information in an array.

```js
const mockToDos = Array(10)
    .fill({ task:  "New Task", done:  false })
    .map((prev, index) => {
        return { id:  index, ...prev };
    });

console.log(mockToDos);
```
> output: mockToDos
```js
[
  { id: 0, task: 'New Task', done: false },
  { id: 1, task: 'New Task', done: false },
  { id: 2, task: 'New Task', done: false },
  { id: 3, task: 'New Task', done: false },
  { id: 4, task: 'New Task', done: false },
  { id: 5, task: 'New Task', done: false },
  { id: 6, task: 'New Task', done: false },
  { id: 7, task: 'New Task', done: false },
  { id: 8, task: 'New Task', done: false },
  { id: 9, task: 'New Task', done: false }
]
```

In this example, we use the Javascript array method `fill()` to create mock data for a To-Do application. First, we create an array with 10 empty elements with the syntax `Array(10)` then we call the `fill()` method with an object as value, this object has an `id` property which is an increasing number also another property called `task` which is the task that you want to complete and finally the `done` property which indicates whether you have already completed the task or not.

## Conclusion

We can use the Javascript `fill()` method for many things, to initialize an array with values, to change all the values in an array with a single value, to create mock data, to create random passwords, and many more, basically you can use this method anytime you need to fill an array with a specific value. This method can be used for many tasks not only the ones presented in this article if you want to know more about this method I recommend you to check the official [Mozilla Javascript documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill). 

> 🔗 You can check our website to learn about others methods like the [`array some method`](https://4geeks.com/how-to/javascript-array-some-method), [how to find the interception of arrays](https://4geeks.com/how-to/javascript-array-intersection) and many others at [4Geeks How To's](https://4geeks.com/how-to).

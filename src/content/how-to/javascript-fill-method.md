## Javascript Fill Method

Sometimes we need to fill an array with a specific value. There are many ways to do this, but the best and easiest way is to use the `fill()` Javascript method. In the following example, we use this method to fill an empty array with numbers.

```js
const numbers = [null, null, null, null, null];

const array1 = numbers.fill(5, 0, 3);
console.log(array1); // output: [ 5, 5, 5, null, null ]

const array2 = numbers.fill(7);
console.log(array2); // output: [ 7, 7, 7, 7, 7 ]
```

In this example, we use the Javascript array `fill()` method to fill an array that contains `null` values with numbers. In the first array `array1` we filled only the first three values from the index `0` to the index `3` with the number `5`, in the second array `array2` we filled the whole array with the number `7`.

## What is the Javascript fill method used for?

The Javascript [fill](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill) method of [arrays](https://4geeks.com/lesson/what-is-an-array-define-array) changes all the elements in an array to a static value and returns a new array with the new values. This method has many use cases for example, you can use it to clear the values of an array or to initialize an array or a two-dimensional matrix with default values. !Basically, you can use this method whenever you want to change all the elements of an array to a single specific value.

This method receives three parameters:

```js
array.fill(value, start, end)
```

 - `value`: this parameter is the value that you want to fill the array with, this value can be any type of data a `string`, a `number`, an `object`, an `array`, etc...
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
console.log([0, 0, 0, 0, 0].fill(4, -3, -1)); // output: [ 0, 0, 4, 4, 0 ]
console.log([0, 0, 0].fill(4, NaN, NaN)); // output: [ 0, 0, 0 ]
console.log([0, 0, 0].fill(4, 4, 5)); // output: [ 0, 0, 0 ]
console.log([0, 0, 0].fill(4, 1, 9)); // output: [ 0, 4, 4 ]
console.log(Array(5).fill(4, 1, 3)); // output: [ <1 empty item>, 4, 4, <2 empty items> ]
```

> Is important to know that the `fill()` method returns an array with the new values but this method also changes the values in the original array as shown in the following example:

```js
const originalArray = Array(7);
console.log("array: ", array); // output: array: [ <7 empty items> ]

const arrayOne = originalArray.fill(0);
console.log("arrayOne: ", arrayOne); // output: arrayOne: [0, 0, 0, 0, 0, 0, 0]

const arrayTwo = arrayOne.fill(7, 2, 5);
console.log("arrayTwo: ", arrayTwo); // output: arrayTwo: [0, 0, 7, 7, 7, 0, 0]

console.log("array: ", array); // output: array: [0, 0, 7, 7, 7, 0, 0]
```

In this example, we create an array with 7 empty values with the syntax `Array(7)` then we call the `fill()` method on this array with the value of `0` to fill all the empty elements with this number and we store this new array in the constant `arrayOne` then we call the `fill()` method on this array with the value of `7` starting at the index `2` and ending at the index `5` and we store this new array in the constant `arrayTwo`, you can see that this array and the original array `originalArray` have the same values which mean that the `fill()` method unlike other methods like `filter()` does change the values in the original array. 

## Use cases of the Javascript fill method 

The Javascript `fill()` method has multiple use cases, we'll see some of them in the next examples.

### 1. Create an array filled with numbers

One way you can use this method is to create an array filled with sorted or random numbers.

```js
const randomNumbers = Array(10)
    .fill()
    .map(() =>  Math.round(Math.random() *  10));  

const sortedNumbers = Array(10)
    .fill()
    .map((_, index) =>  index);

console.log(randomNumbers); // output: [6, 0, 2, 7, 1, 3, 4, 5, 10, 8]
console.log(sortedNumbers); // output: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
```

Here we create two different arrays, the first array `randomNumbers` is an array filled with random numbers between 0 and 10, and the second array `sortedNumbers` is filled with sorted numbers, in both cases we call the Javascript `fill()` method without values this will fill the arrays with `undefined`. 

To create the random numbers array we call the `map()` method to work with the array elements and then we assign a random number between 0 and 10 to each of them with the syntax `Math.round(Math.ramdom() * 10)`.

To create the sorted array we call the `map()` method and we assign the parameter `index` to each element of the array which crates an array with its index as values.

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

In this example, we use the Javascript array method `fill()` to create mock data for a To-Do application. First, we create an array with 10 empty elements with the syntax `Array(10)` then we call the `fill()` method with an object as value, this object has an `id` property which is an increasing number also another property called `task` which is the task that you want to complete and finally the `done` property which confirms if you have already completed the task or not.

## Conclusion

We can use the Javascript `fill()` method for many things, to initialize an array with values, to change all the values in an array with a single value, to create mock data, to create random passwords, and many more, basically you can use this method anytime you need to fill an array with a specific value. This method can be used for many tasks not only the ones presented in this article if you want to know more about this method I recommend you to check the official Mozilla Javascript documentation [fill method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill).

If you are interested in learning more about the Javascript programing language or if you just want to reinforce your knowledge about this language I highly recommend you to visit the 4Geeks academy web page [learn to code](https://4geeks.com/lesson/what-is-javascript-learn-to-code-in-javascript) where you'll find everything you need to reinforce your knowledge or even to learn Javascript from scratch. It has code examples and video tutorials that explain the concepts of Javascript very clearly.

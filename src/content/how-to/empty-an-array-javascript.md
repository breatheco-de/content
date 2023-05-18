---
title: "All you need to know about Javascript Empty Array"
subtitle: "Discover how to work with empty arrays in Javascript. Learn how to create them, verify if they are empty, and manage them effectively"
tags: ["JavaScript","arrays"]
authors: ["DF27ARTS"]

---

##  Empty Javascript Array

```js
// Example Array
let n = [ 1, 2, 3, "a", "b", "c" ];

// Check if an array is empty in Javascript
if (Array.isArray(n) && n.length === 0) {
   console.log(“El array n está vacío”);
   
} else {
   console.log(“El array n NO esta vacío”);
};

// Empty an array in Javascript  by rewriting the length property
n.length = 0;
console.log(n) // output: []
```

There are occasions in Javascript in which we need to empty an array or check if the array is empty, so we can work with it. We have several ways to achieve this goal, we will see some of them next. If you want to know more about [What is an array in Javascript](https://4geeks.com/lesson/what-is-an-array-define-array) you can read our guide on the [4Geeks Blog](https://4geeks.com/).

## How to check if an Array is empty?

The best way to check if an array is empty is by accessing the **length** property of the array.

```js
let n = [];

if ( Array.isArray(n) && n.length === 0 ) {
   console.log(“El array n está vacío”);
} else {
   console.log(“El array n NO está vacío”);
};
```

In this example, we first verify that the array is of **type** array with the expression `Array.isArray(n)`, because if it was another type of data, for example, an object we **couldn't** access the **length** property, then we verify that the array is empty with the expression `n.length === 0`.

## How to empty an array in Javacript?

There are different ways in which we can empty an array in [Javascript](https://4geeks.com/lesson/what-is-javascript-learn-to-code-in-javascript). Next, we will see some of them.

### Rewrite the property length
 
```js
let n = [ 1, 2, 3, 4, 5 ];
n.length = 0

console.log( n ) // []
```

The most efficient way in terms of execution when emptying an array in Javascript is by accessing the **length** property of the array and assigning the value 0, this removes all the elements of the array leaving it completely empty.

### Assign it a new empty array

Another way to empty an array in Javascript is by assigning it a **new** empty array.

```js
let n = [1, 2, 3];
const m = ["a", "b", "c"];

n = [];
m = [];

console.log(n) // (output) []
console.log(m) // (output) TypeError: Assignment to constant variable.
```

In this example, we assigned a new empty array ` [] ` to the **n** array, removing all its elements.

> It is important to have in mind that if you use the **const** keyword to create the array, this syntax won't work for emptying an array because the **constants** can't be modified as in the array example **m**.

### Using the splice() method

We can also use the splice() method to empty an array in Javascript.

```js
let n = [1, 2, 3];
let m = ["a", "b", "c"];

n.splice(0, n.length);
m.splice(0, 1);

console.log(n);  // (output) []
console.log(m);  // (output) ["b", "c"]
```

The [splice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) method allows you to remove the elements of an array from a specific index, this method receives 2 numeric parameters, the first is the index from which you want to start removing elements, the second parameter is the number of elements you want to remove.

### Using the pop() method

Finally, another option to empty an array is by using the ` pop() ` method.

```js
let n = [1, 2, 3, 4, 5];

while (n.length > 0) {
  n.pop();
};

console.log(n)  // (output) [];
```

This is another way in which you can empty an array in Javascript. Using the [pop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop) method and the `while()` loop removes all the elements of the array one by one.  

In all the previous examples the elements are removed from the array, but not from the memory space, these elements are still in local memory, but since they don't have any reference the Javascript **garbage collection** ends up removing them. It is important to have this in mind because having elements in the memory without references could slow down the execution of your code.









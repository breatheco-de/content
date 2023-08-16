---
title: "What is an Array? Understanding the Basics and Defining Array Data Structure"
subtitle: "Learn what an array is and delve into the fundamentals of this essential data structure. Define arrays and unlock their power in computer programming."
cover_local: "../../assets/images/4cc6fa0b-2530-4052-aa7e-8dac03788ac3.png"
textColor: "white"
date: "2020-10-19T16:36:31+00:00"
tags: ["array"]
status: "published"

---

An array is a data structure that stores a fixed-size collection of elements of the same type, such as integers or strings, sequentially in memory. Each element in the array is accessed using an index, starting from zero. Arrays provide fast access to elements and are commonly used for efficient data storage and manipulation. They offer benefits in terms of memory allocation and cache efficiency, making them valuable in various programming tasks, from simple data storage to complex algorithms and computations. However, their fixed size can be a limitation, requiring careful management to avoid overflow or underflow issues.

## Why are Arrays in a Separate Lesson?

Because arrays are awesome! You need them! And we need to focus a lot on them in order to prepare you for real life. 🙂

Mastering the use of arrays and loops is one of the 5 fundamental skills of building algorithms:

1. Variables.
2. Conditionals.
3. `Arrays`.
4. `Loops`.
5. Functions.

**No, no, no... Wait... Arrays? What?**

An array is, normally, any list or collection of values. The rules of how to add or remove elements from that list can change from one programming language to another. But (generally) they are the only ways for developers to create elements.

Arrays are the only way we have to list stuff; regardless of the application you are working with, it will always have things to list. For example, list of students, list of artists, list of transactions... anything!

This data-type does a lot more stuff than the others. Lists are one of the only ways to store more than one data-type in the same variable.

Every array has the same basic concepts:

**The items:** are the actual values inside in each position of the array.

**The length:** is the size of the array (how many items the array has).

**Index:** is the position of the element.

![what is an array define array](https://github.com/breatheco-de/content/blob/master/src/assets/images/7ed2c414-0d00-4e68-b659-b65c26d1983a.png?raw=true)

> :point_up: Array positions start at **zero (0)**; the first element is the element in the position **zero (0)**.

## How to Declare an Array?

These are different examples of list declarations:

```javascript
let myArray = []; //empty list 
let myArray = ["Apple", "Orange", "Donkey"]; //with 3 string items. 
let myArray = new Array(1,2,3,4,5); //Don't use this! Read below to learn why. 
```

> :point_up: Don't declare the Arrays with the `new Array()` syntax, it will not behave properly [click here to learn the details](https://coderwall.com/p/h4xm0w/why-never-use-new-array-in-javascript).

## Access Items in the Array

To access a specific element in a list, you need an `index`. We call `index` the integer value that represents the position of the element you want to access/get/retrieve.

The index always must start at zero (0). That means that an Array of 2 items can have `index=0` or `index=1`. Trying to get the 2nd position will return "undefined" because it will mean that we are trying to access the third element (which does not exist). For example, to get any items in the array you can do the following:

```javascript
    console.log(myArray[0]);  //This will print the 1st element in the console 
let aux = myArray[5];
    console.log(aux); //This will print the 6th element in the console 
    console.log(myArray[myArray.length-1]);  //This will print the last element of the array.
```

## Update Items in the Array

If you want, you can reset or update any item inside an array using the index like this:

```javascript
myArray[5] = 'Whatever value';
//This will set the value 'Whatever value' to the 6th element in the array.
```

## Adding Elements (push function)

The only way to add a new element is at the end of the list, and you will need to use the push() function for that.

```javascript
let myArray = ['Pedro','Juan','Maria'];
    myArray.push('Chris');
    console.log(myArray); //this will print ['Pedro','Juan','Maria','Chris'];
```

But... what if I want to add Chris in the second position?

Then... you need to create a new empty array and start pushing the elements in the order that you need them. In this case, it will be:

```javascript
let myArray = ['Pedro','Juan','Maria'];
let myNewArray = [];
    myNewArray.push('Pedro');
    myNewArray.push('Chris');
    myNewArray.push('Juan');
    myNewArray.push('Maria');
    console.log(myNewArray); //this will print ['Pedro','Chris','Juan','Maria'];
```

## Removing Elements (pop function)

Removing an element has the exact same limitations as adding an element: you can only remove an element from the last position using the pop() method. If you want to remove a different element, you will need to create a new array without that particular element.

```javascript
let myArray = ['Pedro','Chris','Juan','Maria'];
    myArray.pop();
    console.log(myArray); //this will print ['Pedro','Chris','Juan']; 
//If you want to remove 'Chris', you need to do the following: 
let myNewArray = [];
    myNewArray.push('Pedro');
    myNewArray.push('Juan');
    myNewArray.push('Maria');
    console.log(myNewArray); //this will print ['Pedro','Juan','Maria'];
```

## Removing/Adding from the Beginning

The shift and unshift methods are just like push and pop but with the difference that they will only work from the very beginning of the list.

```javascript
let myArray = ['Juan','Maria'];
    myArray.unshift('Pedro');
    myArray.unshift('Chris','Bob');
    console.log(myArray); //this will print ['Chris','Bob','Pedro','Juan','Maria']; 
//If you want to remove 'Chris', you need to do the following: 
let myArray = ['Chris','Bob','Pedro','Juan','Maria'];
    myArray.shift();
    console.log(myArray); //this will print ['Bob','Pedro','Juan','Maria'];
```

## Looping an Array

Sometimes, when working with arrays, you will need to loop them. For example, sorting them manually; flipping them; deleting an element from a particular position, etc.

In order to create your loop you will need to use `Array.length` to get the current size of the array. Most of the time the array items change during the runtime. This is why the only way to get the size of the array will be by using the `array.length` function, like this:

```javascript
let myArray = [3423,5,4,47889,654,8,867543,23,48,56432,55,23,25,12];
    for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]); //this prints the value of the item in the position i 
}
```

## For…in… 

There is a great adaptation of the **for** statement to make it loop lists or arrays, like this:

```javascript
let myArray = [3423,5,4,47889,654,8,867543,23,48,56432,55,23,25,12];
    for (let index in myArray) {
    console.log(myArray[index]);
}
//this prints the value of the item in the position index
```

## Removing from an Array

It is possible to cut an array in pieces very fast, with the `slice` and `splice` functions.

### Slice

Will return a new array, you have to specify the starting and ending index from where you want to cut the array.

### Splice

Will update the current array, returning the items you want to retrieve. You will need to specify the starting index and how many items you want to retrieve from said index.

![what is an array define array](https://github.com/breatheco-de/content/blob/master/src/assets/images/7e098348-df50-442b-801e-ac9d098fbc09.png?raw=true)

<iframe src="https://repl.it/F9V5/0?lite=true" frameborder="0" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals" width="100%" height="400px" scrolling="no" allowtransparency="true" allowfullscreen="true"></iframe>

<div align="right"><small><a href="https://repl.it/@4GeeksAcademy/Slice-vs-Splice">Click to open demo in a new window</a></small></div>


> :point_up: Splice can accept as many optional parameters as wanted and those will substitute the part of the array that has been deleted. The first parameter is the index where the deletion starts, the second is how many elements will be deleted, and from the third onward the elements inserted after the position set by the first parameter.

Example:
```javascript
let y = [14, 3, 3245, 234, 52, 345, 3, 45, 23, 77];
y.splice(2,4,'a');  //returns [3245, 234, 52, 345] 
console.log(y); // [14, 3, 'a', 3, 45, 23, 77]
```
We can use this function to insert elements:
```javascript
let y = [14, 3, 3245, 234, 52, 345, 3, 45, 23, 77];
y.splice(2,0,'a');  //returns [] 
console.log(y); // [14, 3, 'a', 3245, 234, 52, 345, 3, 45, 23, 77]
```

[Take a look at the docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice).

## Sorting the Arrays

It is very common needing to sort arrays. For example, sorting a list of students by name. You have two functions for sorting in JavaScript:

### Sort and Reverse

They do the same, except the reverse does it backward. They both sort using string comparison logic – which means that the string "25" is bigger than "100", because "2" is bigger than "1".

```javascript
let fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.sort();
    console.log(fruits); //[ 'Apple', 'Banana', 'Mango', 'Orange' ] 
    fruits.reverse();
    console.log(fruits); //[ 'Orange', 'Mango', 'Banana', 'Apple' ]
```

### Sorting Numbers

If you want to sort real numbers, or if you want to use any other type of sorting to sort arrays, you have to use a "comparison function."

You have to define a function that will take care of the comparisons. The sort function will call your function on each comparison and will let your function decide who comes first between both of the elements that are being compared.

```javascript
let points = [40, 100, 1, 5, 25, 10];
    points.sort(function(a, b){return a – b});
    console.log(points); //[ 1, 5, 10, 25, 40, 100 ]
```

### Sorting objects

Now that we know about the comparison function, we can use it to tell the sort function how to sort our own special objects, like here for example:

```javascript
let cars = [
    {type:"Volvo", year:2016},
    {type:"Saab", year:2001},
    {type:"BMW", year:2010}];
    cars.sort(function(a, b){return a.year – b.year});
    console.log(cars); //[ { type: 'Saab', year: 2001 },{ type: 'BMW', year: 2010 },{ type: 'Volvo', year: 2016 } ]
```

<iframe src="https://repl.it/F9YZ/1?lite=true" frameborder="0" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals" width="100%" height="400px" scrolling="no" allowtransparency="true" allowfullscreen="true"></iframe>

<div align="right"><small><a href="https://repl.it/@4GeeksAcademy/Sorting-Arrays">Click to open demo in a new window</a></small></div>

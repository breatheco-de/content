---
title: "Working with Arrays"

time: "15 minutes"
date: "2018-02-11"
tags: ["fale"]
---

# **Why are Arrays in a Separate Lesson?**
***

Because arrays are awesome!  You need them!  And we need to focus a lot on them in order to prepare you for real life 🙂

**No no no…Wait:  Arrays?  What?**

An array is, normally, any list or collection of values.  The rules of how to add or remove elements from that list can change from one programming language to another.  But – generally – they are the only ways for developers to create elements.
Arrays are the only way we have to list stuff – regardless of the application you are working with, it will always have things to list.  For example: list of students, list of artists, list of transactions…anything!

This data-type does a lot more stuff than the others.  Lists are the only way to store more than one data-type in the same variable.

Every array has the same basic concepts:

**The items:** are the actual values inside in each position of the array.

**The length:** is the size of the array (how many items the array has).

**Index:** is the position of the element.

![arrays1](https://ucarecdn.com/81b304a4-9d35-4c88-b553-993ca6d87d83/)


[[warning]]
| :point_up:Array positions start a **zero (0)**; the first element is the element in the position **zero (0)**

# **How to Declare an Array?**
***

These are different examples of list declarations:

```javascript
var myArray = []; //empty list 
var myArray = [“Apple”, “Orange”, “Donkey”]; //with 3 string items by default. 
var myArray = new Array(1,2,3,4,5); //Don’t use this! Read below to learn why. 
```


[[warning]]
| :point_up:Don’t declare the Arrays with the "new **Array**()" syntax – it will not behave.  [click here to learn the details](https://coderwall.com/p/h4xm0w/why-never-use-new-array-in-javascript)

# **Access Items in the Array**
***

To access a specific element in a list, you need an index.  An index is an integer value that represents the position of the array that you want to access.

The index always must start at zero (0).  That means that an Array of 2 items can have index=0 or index=1.  Trying to get the 2nd position will return "undefined" because it will mean that we are trying to access the third element (which does not exist).  For example, to get any items in the array you can do the following:

```javascript
console.log(myArray[0]);  //This will print the 1st element in the console 
var aux = myArray[5];
console.log(aux); //This will print the 4th element in the console 
console.log(myArray[myArray.length-1]);  //This will print the last element of the array.
```

# **Update Items in the Array**
***

If you want, you can reset or update any item inside of an array using the index like this:

```javascript
myArray[5] = ‘Whatever value’;
//This will set the value ‘Whatever value’ to the 6th element in the array.
```

# **Adding Elements (push function)**
***

The only way to add a new element is at the end of the list, and you will need to use the push() function for that.

```javascript
var myArray = [‘Pedro’,’Juan’,’Maria’];
myArray.push(‘Chris’);
console.log(myArray); //this will print [‘Pedro’,’Juan’,’Maria’,’Chris’];
```

But…what if I want to add Chris in the second position?

Then…you need to create a new empty array and start pushing the elements in the order that you need them.  In this case it will be:

```javascript
var myArray = [‘Pedro’,’Juan’,’Maria’];
var myNewArray = [];
myNewArray.push(‘Pedro’);
myNewArray.push(‘Chris’);
myNewArray.push(‘Juan’);
myNewArray.push(‘Maria’);
console.log(myNewArray); //this will print [‘Pedro’,’Chris’,’Juan’,’Maria’];

```

# **Removing Elements (pop function)**
***

Removing an element has the exact same limitations as in adding an element: you can only remove an element from the last position using the pull() function.  If you want to remove a different element, you will need to create a new array without that particular element.

```javascript
var myArray = [‘Pedro’,’Chris’,’Juan’,’Maria’];
myArray.pop();
console.log(myArray); //this will print [‘Pedro’,’Chris’,’Juan’]; 
//If you want to remove ‘Chris’, you need to do the following: 
var myNewArray = [];
myNewArray.push(‘Pedro’);
myNewArray.push(‘Juan’);
myNewArray.push(‘Maria’);
console.log(myNewArray); //this will print [‘Pedro’,’Juan’,’Maria’];
```

# **Removing/Adding from the Beginning**
***

The shift and unshift methods are just like push and pop but with the difference that they will only work from the very beginning of the list.

```javascript
var myArray = [‘Juan’,’Maria’];
myArray.unshift(‘Pedro’);
myArray.unshift(‘Chris’,’Bob’);
console.log(myArray); //this will print [‘Chris’,’Bob’,’Pedro’,’Juan’,’Maria’]; 
//If you want to remove ‘Chris’, you need to do the following: 
var myArray = [‘Chris’,’Bob’,’Pedro’,’Juan’,’Maria’];
myArray.shift();
console.log(myArray); //this will print [‘Bob’,’Pedro’,’Juan’,’Maria’];
```

# **Looping an Array**
***

Sometimes, when working with arrays, you will need to loop them.  For example: sorting them manually; flipping them; deleting an element from a particular position, etc.

In order to create your loop you will need to use Array.length to get the current size of the array.  Most of the time the array items change during the runtime.   This is why the only way to get the size of the array will be using the array.length function, like this:

```javascript
var myArray = [3423,5,4,47889,654,8,867543,23,48,56432,55,23,25,12];
for (i = 0; i < myArray.length; i++) {
console.log(myArray[i]); //this prints the value of the item in the position i 
}
```

## For…in… 

There is a great adaptation of the **for statement** to make it loop lists or arrays, like this:

```javascript
var myArray = [3423,5,4,47889,654,8,867543,23,48,56432,55,23,25,12];
for (var index in myArray) {
console.log(myArray[index]);
}
//this prints the value of the item in the position index
```

# **Removing from an Array**
***

Variables can have different types of values.  Some of them are available only in specific programming languages, but, almost all of them have the following types:

## Splice and Slice
***

It is possible to cut an array in pieces very fast, with the splice and slice functions.

### Slice

Will return a new array with a smaller version of the original array.  You have to specify the starting and ending index from where you want to cut the array.

## Splice
***

Will update the current array leaving everything but the smaller version that you want to remove.   You will need to specify the starting and ending indexes from where you want to remove.

![arrays2](https://ucarecdn.com/274989fb-42f9-44bc-a669-d360c69cdc2a/)

<iframe src="https://repl.it/F9V5/0?lite=true" frameborder="0" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals" width="100%" height="400px" scrolling="no" allowtransparency="true" allowfullscreen="true"></iframe>

# **Sorting the Arrays**
***

It is very common needing to sorting arrays.  For example: sorting a list of students by name.  You have two functions for sorting in JavaScript:

Sort and Reverse

They do the same, except reverse does it backwards.  They both sort using string comparison logic – which means that the string "25" is bigger than "100", because "2" is bigger than "1".

```javascript
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
console.log(fruits); //[ 'Apple', 'Banana', 'Mango', 'Orange' ] 
fruits.reverse();
console.log(fruits); //[ 'Orange', 'Mango', 'Banana', 'Apple' ]
```

## Sorting Numbers

If you want to sort real numbers, or if you want to use any other type of login to sort arrays, you have to use a "comparison function."

You have to define a function that will take care of the comparisons.  The sort function will call your function on each comparison and will let your function decide who comes first between both of the elements that are being compared.

```javascript
var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a – b});
console.log(points); //[ 1, 5, 10, 25, 40, 100 ]
```

## Sorting objects

Now that we know about the comparison function, we can use it to tell the sort function how to sort our own special objects – like here for example:

```javascript
var cars = [
{type:”Volvo”, year:2016},
{type:”Saab”, year:2001},
{type:”BMW”, year:2010}];
cars.sort(function(a, b){return a.year – b.year});
console.log(cars); //[ { type: ‘Saab’, year: 2001 },{ type: ‘BMW’, year: 2010 },{ type: ‘Volvo’, year: 2016 } ]
```

<iframe src="https://repl.it/F9YZ/1?lite=true" frameborder="0" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals" width="100%" height="400px" scrolling="no" allowtransparency="true" allowfullscreen="true"></iframe>












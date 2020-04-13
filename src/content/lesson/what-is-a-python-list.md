---
title: "Workin with Lists in Python"

subtitle: "Lists are the first type of data-structures that Python has to store multiple values at once, they are very powerful and heavily used in every day operations for any type of program in any industry"

cover: "https://ucarecdn.com/4cc6fa0b-2530-4052-aa7e-8dac03788ac3/"
textColor: "white"
date: "2018-02-11"
tags: ["list"]
---

## Introduction to Python lists

Mastering the use of lists and loops is one of the 5 fundamental skills of building algorithms:

1. Variables.
2. Conditionals.
3. `Lists`.
4. `Loops`.
5. Functions.


## What is a List?

A list is, normally, any collection of values.  The rules of how to add or remove elements from that list can change from one programming language to another.  But – generally – they are the only ways for developers to create elements.
Lists are not the only way we have to list store multiple values at once but it is the most used tool for that purpose. For example: list of students, list of artists, list of transactions…anything!

This primitive data-type does a lot more stuff than the others.

Every list has the same basic concepts:

**The items:** are the actual values inside in each position of the list.

**The length:** is the size of the list (how many items the list has).

**Index:** is the position of the element.

![what is an list define list](https://ucarecdn.com/7ed2c414-0d00-4e68-b659-b65c26d1983a/-/resize/1000x/)


[[info]]
| :point_up:List positions start a **zero (0)**; the first element is the element in the position **zero (0)**

## How to Declare a List?
***

These are different examples of list declarations:

```python
myList = [] # lista vacia
myList = ["Apple", "Orange", "Donkey"] # The only way to declare a list
myTuple = ("Apple", "Orange", "Donkey") # this is not a list, its a more limited version called "Tuple"
mySet = {"Apple", "Orange", "Donkey"} # this is not a list, it's a "set" (more limited version of list)
```

## Access Items in the List
***

To access a specific element in a list, you need an `index`.  We call `index` the integer value that represents the position of the element you want to access/get/retrieve.

The index always must start at zero (0).  That means that an List of 2 items can have index=0 or index=1.  Trying to get the 2nd position will return "undefined" because it will mean that we are trying to access the third element (which does not exist).  For example, to get any items in the list you can do the following:

```python
print(myList[0])  # print first element on the console
aux = myList[5]
print(aux); # print the 4th element on the console
print(myList[myList.length-1]);  # Print the last element on the console
```


## Update Items in the List
***

If you want, you can reset or update any item inside of an list using the index like this:

```python
    myList[5] = 'Whatever value'
    # Assign a value to 5th element on the list 
```

## Adding Elements to Python Lists (append and insert)
***

### Using `append` in Python Lists

The first way is to add the element to the end of the list, you should use this method every time you can because it's a lot faster than `insert`.

```python
    myList = ['Pedro','Juan','Maria']
    myList.append('Chris') # add Chris to the end of the list
    print(myList); # Output: ['Pedro','Juan','Maria','Chris'];
```

### Using `insert` in Python Lists

Using insert its easier for the developer because it will let you pick the positions in which you want to inster the element, but it is a slower method (less performance):

```python
    myList = ['Pedro','Juan','Maria']
    myList.insert(1,'Chris') # add Chris between Pedro and Juan
    print(myList); # Output ['Pedro','Chris','Juan','Maria'];
```

## Removing Elements from a Python List
***

Python has many ways to delete an element from a list

```javascript
var myArray = ['Pedro','Chris','Juan','Maria'];
    myArray.pop();
    console.log(myArray); //this will print ['Pedro','Chris','Juan']; 
//If you want to remove 'Chris', you need to do the following: 
var myNewArray = [];
    myNewArray.push('Pedro');
    myNewArray.push('Juan');
    myNewArray.push('Maria');
    console.log(myNewArray); //this will print ['Pedro','Juan','Maria'];
```

## Removing/Adding from the Beginning
***

The shift and unshift methods are just like push and pop but with the difference that they will only work from the very beginning of the list.

```javascript
var myArray = ['Juan','Maria'];
    myArray.unshift('Pedro');
    myArray.unshift('Chris','Bob');
    console.log(myArray); //this will print ['Chris','Bob','Pedro','Juan','Maria']; 
//If you want to remove 'Chris', you need to do the following: 
var myArray = ['Chris','Bob','Pedro','Juan','Maria'];
    myArray.shift();
    console.log(myArray); //this will print ['Bob','Pedro','Juan','Maria'];
```

## Looping an List
***

Sometimes, when working with lists, you will need to loop them.  For example: sorting them manually; flipping them; deleting an element from a particular position, etc.

In order to create your loop you will need to use List.length to get the current size of the list.  Most of the time the list items change during the runtime.   This is why the only way to get the size of the list will be using the list.length function, like this:

```javascript
var myArray = [3423,5,4,47889,654,8,867543,23,48,56432,55,23,25,12];
    for (i = 0; i < myArray.length; i++) {
    console.log(myArray[i]); //this prints the value of the item in the position i 
}
```

## For…in… 
***

There is a great adaptation of the **for statement** to make it loop lists or lists, like this:

```javascript
var myArray = [3423,5,4,47889,654,8,867543,23,48,56432,55,23,25,12];
    for (var index in myArray) {
    console.log(myArray[index]);
}
//this prints the value of the item in the position index
```

## Removing from an List
***

Variables can have different types of values.  Some of them are available only in specific programming languages, but, almost all of them have the following types:

### Splice and Slice
***

It is possible to cut an list in pieces very fast, with the splice and slice functions.

#### Slice

Will return a new list with a smaller version of the original list.  You have to specify the starting and ending index from where you want to cut the list.

#### Splice


Will update the current list leaving everything but the smaller version that you want to remove.   You will need to specify the starting and ending indexes from where you want to remove.

![what is an list define list](https://ucarecdn.com/7e098348-df50-442b-801e-ac9d098fbc09/-/resize/700x/)

<iframe src="https://repl.it/F9V5/0?lite=true" frameborder="0" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals" width="100%" height="400px" scrolling="no" allowtransparency="true" allowfullscreen="true"></iframe>

<div align="right"><small><a href="https://repl.it/@4GeeksAcademy/Slice-vs-Splice">Click to open demo in a new window</a></small></div>

## Sorting the Lists
***

It is very common needing to sorting lists.  For example: sorting a list of students by name.  You have two functions for sorting in JavaScript:

Sort and Reverse

They do the same, except reverse does it backwards.  They both sort using string comparison logic – which means that the string "25" is bigger than "100", because "2" is bigger than "1".

```javascript
var fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.sort();
    console.log(fruits); //[ 'Apple', 'Banana', 'Mango', 'Orange' ] 
    fruits.reverse();
    console.log(fruits); //[ 'Orange', 'Mango', 'Banana', 'Apple' ]
```

### Sorting Numbers

If you want to sort real numbers, or if you want to use any other type of login to sort lists, you have to use a "comparison function."

You have to define a function that will take care of the comparisons.  The sort function will call your function on each comparison and will let your function decide who comes first between both of the elements that are being compared.

```javascript
var points = [40, 100, 1, 5, 25, 10];
    points.sort(function(a, b){return a – b});
    console.log(points); //[ 1, 5, 10, 25, 40, 100 ]
```

### Sorting objects

Now that we know about the comparison function, we can use it to tell the sort function how to sort our own special objects – like here for example:

```javascript
var cars = [
    {type:"Volvo", year:2016},
    {type:"Saab", year:2001},
    {type:"BMW", year:2010}];
    cars.sort(function(a, b){return a.year – b.year});
    console.log(cars); //[ { type: 'Saab', year: 2001 },{ type: 'BMW', year: 2010 },{ type: 'Volvo', year: 2016 } ]
```

<iframe src="https://repl.it/F9YZ/1?lite=true" frameborder="0" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals" width="100%" height="400px" scrolling="no" allowtransparency="true" allowfullscreen="true"></iframe>

<div align="right"><small><a href="https://repl.it/@4GeeksAcademy/Sorting-Lists">Click to open demo in a new window</a></small></div>

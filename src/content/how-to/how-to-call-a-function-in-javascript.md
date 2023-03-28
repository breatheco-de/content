---
title: "How to Call a Function in Javascript"
subtitle: "To call a function we just need to write our function's name alongside the parentheses with the corresponding parameters."
tags: ["javascript","javascript functions","functions"]
date: "2020-10-19T16:36:30+00:00"
authors: []
status: "published"

---

# How to Call a Function in Javascript
Let's see a basic example of **how to call a function in Javascript** as follows:

```js
// Function's declaration
function helloWorld() {
	console.log("Hello World");
}

// Calling the function
helloWorld();
```

To call a function we just need to write our function's name alongside the parenthesis (this is a must) with the corresponding parameters, have in mind that any function's name is case sensitive, so we need to write the function's name in the correct case to call the right function. Now, if we run the code, we will get a `Hello World` message in our console.

If more insight is needed to understand how a function works or how it is called, let's dive in on what a function is and its many forms with various examples.

## What is a Function and How to Call it in Javascript?

The most common scenario in software development or projects is that they have a variety of different tasks, as well as they can contain a great variety of repetitive tasks, which throughout the code may appear on different occasions.

Since we know that this is something that will surely happen in our development process, it is a good idea to include these repetitive tasks in a module or code block and reuse them when necessary, these modules or code blocks are called **functions**. 

![enter image description here](https://www.tutorialstonight.com/assets/js/javascript-function.png?raw=true)

So, **how to call a function in Javascript?** Before answering this question, we need to understand how to write a function. Let's see the general syntax of a function in the following example:

```js
function sumNumbers(a, b) {
	return a + b;
}
```
To declare a function, first, we need to write the **keyword `function`**,  since this is a Javascript keyword, it must be always written in lowercase (otherwise we will get an error). Next to the keyword, we will write the **function's name**, in this case, is **`sumNumbers`**, next to the name we have the **parentheses `()`**, where the parameters to be used in the function will be contained (in this case the parameters are `a` and `b` which will be the numbers to be summed). Last but not least, we have the **curly braces `{}`**, where the body or statements of the function will be written.

If we run the code as it is, nothing will happen since we just declared the function. If we want to execute the function we need to call it. A simple way to call the previous function is the following:

```js
function sumNumbers(a, b) {
	return a + b;
}

sumNumbers(1,2) //Output: 3
```
As we already mentioned previously, to call a function we need to right the function's name, in this case, is `sumNumbers` alongside the parentheses with the corresponding `a` and `b` parameters like this `sumNumbers(a, b)`. 

And what if we are a bit lazy to think of a name for our function? Good news, we can declare functions without giving them a name, these functions are called **anonymous**

## How to Call a Function in Javascript? (Anonymously)
In order to declare an anonymous function, we must write the **keyword `function`** followed by the **parentheses `()`** and the **curly braces `{}`**. Let's say we want to show in the console a "Hello World" message as follows:

```js
function() {
	console.log("Hello World");
}
```
As you already know, if we run the code as it is, nothing will happen. To call this anonymous function, first, we need to store the same in a variable like this:
```js
const greet = function() {
	console.log("Hello World");
}
```
And then call it by the variable's name alongside the parentheses, similar to the way that we called a normal function:
```js
const greet = function() {
	console.log("Hello World");
}
greet();
```
It is highly recommended to store anonymous functions in a variable declared by the keyword `const`, this is to avoid changing its value later on in our program. 

There is another type of function in Javascript called **Class** that is very similar to a normal function but differs in some points from it. Let's see what is a **Class** in Javascript and how we call this type of function.

## How to Call a Function in Javascript? (Class Functions)
A class is like a template for creating objects, objects created from the class will have the same characteristics and are known as attributes and methods.

To have a clearer idea, imagine that the class is a cookie mold, the mold represents the class from which you can build or make objects, which in this example would be cookies. Although all the cookies are the same in terms of their shape, each one has different decorations, these decorations would be the properties or attributes of each object.

![enter image description here](https://i.imgur.com/rutzmFZ.jpg?raw=true)


Each class internally has a constructor to create the attributes of each object and as an additional feature, a class has methods, and methods are nothing more than functions that an object can have. Let's see the following example:
```js
function Human(country, language) {
	this.country = country;
	this.language = language;
}

class Human{
	constructor(country, language){
	this.country = country;
	this.language = language;
	}
}
```
First, we have a function called `Human` that receives `country` and `language` as parameters. Then we simply add the `country` and `language` that comes as a parameter to the instance that is created through that constructor function writing `this.` before each parameter.

Now to get the same result but with a different structure, we have a class, using the **keyword `class`** followed by the name of our object (always starting with a capital letter). Unlike the function, here we have to explicitly declare the `constructor` and its parameters.

As stated above, a class can have methods, that are simply functions. Let's add two methods to the class `Human`, one for **setting a new country** and the other to **get the language** of our object (in this case the Human):

```js
class Human{
	constructor(country, language){
	this.country = country;
	this.language = language;
	}

	setCountry(newCountry){
	this.country = newCountry;
	}

	getLanguage(){
	return this.language; 
	}	
}
```
Once we have our class created, we can proceed to create new objects from it. Let's show in our console 2 humans using the class `Human` as follows:

```js
class Human{
	constructor(country, language){
	this.country = country;
	this.language = language;
	}

	setCountry(newCountry){
	this.country = newCountry;
	}

	getLanguage(){
	return this.language; 
	}	
}

const human1 = new Human("Wales", "English"); 
const human2 = new Human("Canada", "English");

console.log(human1); //the object will be printed in the console: {"country":"Wales", "language":"English"}
console.log(human2); //the object will be printed in the console: {"country":"Canada", "language":"English"}
```
As you can see, we need to create a new variable for each new object (human1 and human2), followed by the word `new` + our class `Human` alongside the parameters that we want to use in that object. Now let's use one of our methods to change the country of both of our humans using `setCountry()`:

```js
class Human{
	constructor(country, language){
	this.country = country;
	this.language = language;
	}

	setCountry(newCountry){
	this.country = newCountry;	
	}

	getLanguage(){
	return this.language; 
	}	
}

const human1 = new Human("Wales", "English"); 
human1.setCountry("England");
const human2 = new Human("Canada", "English");
human2.setCountry("Australia");

console.log(human1); //the object will be printed in the console: {"country":"England", "language":"English"}
console.log(human2); //the object will be printed in the console: {"country":"Australia", "language":"English"}
```
Both of our human countries change since we called our `setCountry(newCountry)` method by typing the variable/object that we want to use + our method like this `variable.method("newParameter")` . This is how we call methods in Javascript classes.

 ## How to Call a Function in Javascript? (Arrow Functions)
Another alternative to writing a function in Javascript is the **Arrow Function** which is a shorter way to write a conventional function. Before explaining how to call an arrow function, let's see how we can convert a conventional function to an arrow function, let's use one of the functions used previously:

```js
function helloWorld() {
	console.log("Hello World");
}
```
1. The first step is to remove the function keyword since, in an arrow function, this keyword is assumed
2. Then we need to assign the function to a variable
3. And then after the parameters (parentheses), we need to add the arrow (`=>`) like this:

```js
let helloWorld = () => {
	console.log("Hello World");
}
```

4. Since this is a single-line function, we can simplify this function more by removing the curly braces `{}`, like this:
```js
let helloWorld = () => console.log("Hello World"); 
```

As you may already know, if we run the code like this, you guessed it, nothing happens. We need to call the function, and we can call an arrow function the same way as a conventional function:

```js
let helloWorld = () => console.log("Hello World");
helloWorld();
```

We hope that this information serves you well on how to call a function in javascript, keep coding!

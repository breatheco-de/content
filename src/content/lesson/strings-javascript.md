---
title: "What are strings in javascript"
subtitle: "Discover what a string is in JavaScript and how it is used to store and manipulate text. Learn the basic concepts and practical javascript examples in this guide."
tags: ["javascript","string-concatenation"]
authors: ["jul1998"]

---

In JavaScript, there is a data type called a string, which exists to represent text and is a fundamental part of programming. This article will explain its function, how to use it, and some examples of where its use is applied.

Here's an example of what a string in JavaScript might look like:

```js
let name = "Bob Dylan";
```

> In the code above, we first declare a new variable called "name" and then assigned the value "Bob Dylan" to it. Notice how bob dylan is wrapped in double quotes and that is what makes it a string.


## What is a String in JavaScript?

A string is a data type used in almost all programming languages and its main function is to represent text.


## What are strings in JavaScript used for?

This type of data has many purposes and functions that will be listed here to clarify:

1. **Allows user interaction**: Programmers can cause strings to interact with users through forms and data inputs such as name, age, surname, etc. It is also possible to send messages through applications to notify the user about a specific topic.
2. **Storage and manipulation of text**: Through strings it is possible to store and manipulate important information such as usernames, messages, or apply functions such as joining strings (concatenating), creating a subset of a main string (substring), searching for patterns in texts, extract keywords with more ease and many more features.
3. **Communication between points**: Strings are widely used when it comes to communicating information between servers or APIs, for example. This is because it is easy to process data in the form of a string and then create some logic with programming.

## How to declare a string in Javascript?

Declaring a string in JavaScript is very simple. What you have to do is write some text (it can contain letters, numbers, or symbols) and enclose it either with single or double quotes (there will be no difference).

```js
let stringMessage = "Hello World! This is a string";

let anotherMessage = 'Another message, but this time with single quotes';
```

Next, use cases with strings will be shown.

## Concatenating strings in JavaScript

Concatenation is the process of joining several strings into one. In Javascript, this can be achieved as follows:

```js runable=true
let firstName = "Albert";
let lastName = "Einstein";
let fullName = firstName + " " + lastName;

console.log(fullName);

//Result: Albert Einstein 
```

> Note that a string with a space `" "` was concatenated to separate `firstName` from `lastName`. Otherwise, the result would have been: `AlbertEinstein`

As seen in the previous example, the operator "+" is used to concatenate. Another way to achieve this is using backticks as shown in the example:

```js runable=true
let name = “Daniel”;
let age = 22;
let country = “Colombia”;

let message = `My name is ${name}. I am ${age} years old and I live in ${country}`;

console.log(message);

// Result: My name is Daniel. I am 22 years old and I live in Colombia
```

In this code, it is easier to concatenate several strings or even numbers using backticks "\`".

## Comparing strings in JavaScript

When comparing two or more strings, the equality "===" or inequality "!==" operators are used. This will return a boolean value in case it is true or false, allowing to apply some specific logic depending on the result.

```js runable=true
let fruit1 = "apple";
let fruit2 = "orange";

if (fruit1 === fruit2){
    console.log("fruit1 and fruit2 are the same");
}else{
    console.log("fruit1 and fruit2 are different");
}
```

## String methods in Javascript

Strings in this programming language have different methods that we can use to our advantage to perform different tasks. These are some of the most commonly used methods in Javascript:

### string.length

This property of strings allows displaying the number of characters in a text:

```js runable=true
let text = "This text contains 30 characters";
console.log(text.length);

//Result 30
```

It's important to note that this method is also counting white spaces.

### string.slice()

It extracts a specific part of a string and returns this portion as a new string. This method takes two parameters which are the initial and final position:

```js runable=true
let text = "Hello World!";
console.log(text.slice(2, 9));

//Result 'llo Wor'
```

> Note that if the character located in the position of the start parameter is included, the character in the stop parameter is not.

### string.replace()

The replace() method allows replacing a specific value with another in the form of a string:

```js runable=true
let text = "I like apples";
let newText = text.replace("apples", "pears");

console.log(newText);

//Result "I like pears"
```

These were just a few examples of the many methods and functions that can be applied with strings in JavaScript. Through practice, you will know when to use each method at the right time and achieve the desired goal as a programmer.

## Conclusion

As we studied throughout this article, strings in JavaScript play a crucial role in programming where it allows from user interaction to processing complete information and data using the previously mentioned string methods and many others.

Here is a few internal lessons, exercises and projects if you are interested in learning more about [JavaScript](https://4geeks.com/technology/javascript).

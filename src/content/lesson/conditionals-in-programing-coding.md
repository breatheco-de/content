---
title: "Conditionals in Programming with Javascript"
subtitle: "Using conditions to control the flow of your code and make the computer obey"
date: "2020-10-19T16:36:31+00:00"
authors: ["alesanchezr"]
cover_local: "../../assets/images/4cc6fa0b-2530-4052-aa7e-8dac03788ac3.png"
textColor: "white"
tags: ["conditionals","logical operations","if else","conditions"]
status: "published"

---

Mastering the use of conditions is one of the 5 fundamental skills of building algorithms:

1. Variables.
2. Conditionals. 
3. Arrays/Objects.
4. Loops.
5. Functions.

> :point_up: [Here is a great video explaining conditionals](https://www.youtube.com/watch?v=Lp-Du2fKoug&list=PL4cUxeGkcC9i9Ae2D9Ee1RvylH38dKuET)

Conditions are the only way developers have to tell the computer how to make decisions in real time, very similar to how our brains work.

Let's say we are building a program to help us pick what to wear, and we hate the color blue. We can tell the computer to avoid blue using a condition like this:
  
`if` **color** is not **blue**, then... do something.  
`else`... do nothing or exit.
  
![Conditionals](https://github.com/breatheco-de/content/blob/master/src/assets/images/e73b673e-d744-45a7-a1ed-61a1dae49560.png?raw=true)

And this is how we would write this in Javascript:

```js
if (color != 'blue') {
    //any code here will run when the color is different than blue
}
else {
    //it will only run this code if the color is blue.
}
```

## It is all about the question: What to ask?

The previous example was a simple condition, but in real life picking what to wear involves a combination of several conditions to make the final decision, for example: Let's look at this algorithm that checks if you have the flu.

![Hit by a flu or have a cold](https://github.com/breatheco-de/content/blob/master/src/assets/images/03ed6b76-0ee0-4b04-bd45-0fb58ae6f800.jpeg?raw=true)

If you want to represent this algorithm in Javascript it will look something like this:

```js
let feelsLikeHitByTrain = true;
let youWereHitByTrain = false;

if(feelsLikeHitByTrain == true ){
  if(youWereHitByTrain == true) {
    console.log("You don't have a flu");
  }
  else {
    console.log("You have a flu");
  }
}
else {
  console.log("You don't have a flu");
}
```

Basically, this algorithm has two variables to consider: `feelsLikeHitByTrain` and `youWereHitByTrain`.

Our job as developers is to sit down and try to prepare a strategy and come up with an algorithm that solves a problem.

## `AND` and `OR` operators

Another way to write the algorithm is to combine two questions in the same condition using the `AND` and `OR` operators, which in Javascript are represented with `&&` for **AND** and `||` for **OR**:

```js
if(feelsLikeHitByTrain == false || youWereHitByTrain == true) {
  console.log("You don't have a flu");
}
else if(feelsLikeHitByTrain == true && youWereHitByTrain == false) {
  console.log("You have a flu")
}
else {
  console.log("I have no idea");
}
```

As you can see here, we are using  `else if` together for the first time, for faster coding. Another trick you can use for faster coding:

| Original | Equivalent |
| --- | --- |
| instead of `if(feelsLikeHitByTrain == true)` | you write `if(feelsLikeHitByTrain)`  |
| instead of `if(feelsLikeHitByTrain == false)` | you write `if(!feelsLikeHitByTrain)` |

## `>` and `<` Greater Than or Less Than Operators

In this particular case, you are comparing numbers, to find out if one of the compared numbers is greater or lesser than the other:

```js
if(age < 16) {
  console.log("You cannot drive");
}
else if(age >= 16) {
  console.log("You can drive");
}
```

## Ternary (inline conditions)

Another great trick for faster coding is using ternaries that basically allow us to code everything in just one line:

```js
const flu = (feelsLikeHitByTrain && !youWereHitByTrain) ? true : false;
```
In this example, the variable `flu` will only be true if `feelsLikeHitByTrain==true` and `youWereHitByTrain==false` are at the same time. If that question is not true, then `flu` will be false.

Ternaries are being used A LOT these days because they save you a lot of time, and we will also be able to use them later in `jsx` code (React).

## Conditional Rendering

Another important use of conditionals is to generate HTML based on certain conditions. For example, let's say that we have a bootstrap alert that we are about to render into the website:

```js
let alertHTMLCode = "<div>Warning! You cannot drive</div>";
```

If we want this alert to show only if the user is younger than 16 years old, we could do something like:

```js
let age = 14;
let alertHTMLCode = (age < 16) ? "<div>Warning! You cannot drive</div>" : "";
```

Now our `alertHTMLCode` variable will be empty if the user age is greater than 16, if it's less it will contain the entire HTML.

<iframe width="100%" height="300" src="//jsfiddle.net/BreatheCode/bycgsnqt/7/embedded/html,css,js,result" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

<div align="right"><small><a href="//jsfiddle.net/BreatheCode/bycgsnqt/7/embedded/html,css,js,result">Click here to open demo in a new window</a></small></div>

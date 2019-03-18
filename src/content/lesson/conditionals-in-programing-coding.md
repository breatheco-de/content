---
title: "Conditionals in Programming or Coding"
subtitle: "Using conditions to control the flow of your code and make the computer obey"
date: "2017-09-24"
status: "draft"
cover: "https://ucarecdn.com/4cc6fa0b-2530-4052-aa7e-8dac03788ac3/"
textColor: "white"
tags: ["conditionals", "logical operations", "if else", "conditions"]
---

Mastering the use of conditions is one of the 5 fundamental skills of building algoritms:

1. Variables.
2. `Conditionals`.
3. Arrays.
4. Loops.
5. Functions.

[[demo]]
| :point_up: [Here is a great video explainin conditionals](https://www.youtube.com/watch?v=Lp-Du2fKoug&list=PL4cUxeGkcC9i9Ae2D9Ee1RvylH38dKuET)

Conditions are the only way developers have to tell computer how to make decisions in real time, very similar to how our brains work.

Let's say we are building a program to to help us pick what to ware and we hate the blue color, we can tell the computer to avoid blue using a condition like this:
  
  
`If` ***color*** is not **blue**, then... do something.  
`Else`... do nothing or exit.
  
![Conditionals](https://ucarecdn.com/e73b673e-d744-45a7-a1ed-61a1dae49560/)

And this is how we would write this in Javascript:

```js
if(color != 'blue'){
    //any code here will run when color is different than blue
}
else{
    //it will only run this code if color is not blue.
}
```

## It is all about What Questions to ask

The previous example was a simple condition, but in real life picking what to ware involves a combination of several conditions to make the final decision, for example: Lets look at this algorithm that tells if you have a flue

![Hit by a flu or have a cold](https://ucarecdn.com/03ed6b76-0ee0-4b04-bd45-0fb58ae6f800/)

If you want to represent this algorithm in Javascript it will look something like this:

```js
let feelsLikeHitByTrain = true;
let youWereHitByTrain = false;

if(feelsLikeHitByTrain == true){
  if(youWasHitByTrain == true){
    console.log("You don't have a flue");
  }
  else{
    console.log("You have a flue");
  }
}
else{
  console.log("You don't have a flue");
}
```

Basically, this algorithm has to variables to consider: feelsLikeHitByTrain and youWereHitByTrain.
Our job as developers is to sit down and try to prepare a strategy to come up with an algorithm that solves a problem.

## `AND` and `OR` operators

Another way to write the algorithm is to combine to questions in the same condition using the `AND` and `OR` operators that in Javascript are represented with `&& for AND` and `|| for OR`:

```js
if(feelsLikeHitByTrain == false || youWereHitByTrain == true){
  console.log("You don't have a flu");
}
else if(feelsLikeHitByTrain == true && youWereHitByTrain == false){
  console.log("You have a flu")
}
else{
  console.log("I have no idea");
}
```

As you can see here we are using `else if` together for the first time, for faster coding, another trick you can use for faster coding:

| Original | Equivalent |
| --- | --- |
| instead of `if(feelsLikeHitByTrain == true)` | you write `if(feelsLikeHitByTrain)`  |
| instead of `if(feelsLikeHitByTrain == false)` | you write `if(!feelsLikeHitByTrain)` |

## `>` and `<` Greather Than or Lower Than Operators

In the particular case you are comparing numbers, you can also if one of the compared numbers ir bigger or smaller than the other:

```js
if(age < 16){
  console.log("You cannot drive");
}
else if(age >= 16){
  console.log("You can drive");
}
```

## Ternary (inline conditions)

Another great trick for faster coding is using ternaries that basically allow us to code everything in just one line:
```js
const flu = (feelsLikeHitByTrain && !youWereHitByTrain) ? true : false;
```
In this example the variable `flu` will only be true if `feelsLikeHitByTrain==true` and `youWereHitByTrain==false` at the same time. If that question is not true, then flue will be false.

Ternaries are being use A LOT these days because the save you a lot of time.

## Conditional Rendering

Another great use of the conditions is to generate HTML based on certain conditions, for example, lets say that we have a bootstrap alert that we are about to render into the website:

```js
let alertHTMLCode = "<div>Warning! You cannot drive</div>";
```

If we want this alert to show only if the user is younger that 16 years old we could do something like:

```js
let age = 14;
let alertHTMLCode = (age < 16) ? "<div>Warning! You cannot drive</div>" : "";
```

Now our alertHTMLCode variable will be empty if the user age is less than 16, if its more it will contain the entire HTML.

<script async src="//jsfiddle.net/BreatheCode/bycgsnqt/7/embed/js,html,result/"></script>

---
title: "Conditionals in Programming or Coding"
subtitle: "Using conditions to control the flow of your code and make the computer obey"
date: "2017-09-24"
status: "unassigned"
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

Conditions are the only way developers have to tell computer how to make decisions in real time, very similar to how or brains work.

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

The previous example was a simple condition, but in real life picking what to ware involves a combination of several conditions to make the final decision, for example: Lets look at this algorithm that tells a computar how to decide what to wear during valentines day:

![What ot ware in valentines day](https://ucarecdn.com/87f2be86-32c3-4bfc-8db4-dbd0d979e4d3/)

If you want to represent this algorithm in Javascript it will look something like this:

```js
if(goingOut == true){
    if(canIGetBurger == true){
        
    }
}
```

---
subtitle: "Functions are not optional - they are probably the most used feature in any programming language. They let you separate your code in smaller mini-programs where each one takes care of its own thing. Divide and conquer!"
title: "Working with Functions"
cover: "https://ucarecdn.com/4cc6fa0b-2530-4052-aa7e-8dac03788ac3/"
textColor: "white"
date: "2018-12-03"
tags: ["reactjs"]

---


## What are Functions?

Basically, a function is a bunch of code wrapped between brackets.  For example:

```javascript 
//the function name is "multiply" and receives 2 param: a & b 
function multiply(a, b) {
    //the function returns the multiplication 
   return a * b;
}
```

+ **Every function must have a purpose** (a goal) (like our function “multiply”).  The function purpose is to calculate the multiplication between two given numbers.
+ **It must have a unique name.**  In this particular case, our function is called “multiply” – which its a great name because it’s specific.
+ **It must return something.**  By default, all functions return “undefined,” but you should override that to return something more useful to yourself.  In this example, we want to return the result of a & b multiplication.
+ **Functions may have parameters.**  A “parameter” is a variable that the function may receive at the beginning of its code (like a & b in our example).

## But, why do I need Functions?

Before functions existed, algorithms were this huge never-ending series of lines of code where developers would continually get lost.  It is hard for your brain to follow a procedure/algorithm of great length; the more lines of code, the more abstract it becomes.

Now, with functions, you have the following advantages:

+ Split and conquer:  Divide your algorithm in smaller sub-algorithms and focus on one problem at a time.
+ Re-use your code by calling the function several times.
+ Organize your code.

## The Function Scope

When creating a function, you can limit what code belongs to it by using curly brackets like this:

```javascript{numberLines: true} 
/this part of the code is outside my function 

function multiply(a, b) {

    //this part of the code is INSIDE my function 
   
   return a * b;

    //this part of the code is INSIDE my function but it will never 
    //be executed because it is located AFTER the return statement. 
}

//this part of the code is outside my function
```

Any variables that you declare inside the function will not be available outside of it.

```javascript{numberLines: true}
function multiply(a, b) {

   let myVariable = 'hello';
   
   return a * b;
}

// this console.log won't work it will trigger an error) because myVariable was  
// declared inside the function multiply, therefore it is not available outside. 
console.log(myVariable);
```

Other important things to notice:

+ We are calling the function getPersonInfoByName two times – without using functions we would have to use more code because we would have no option to re-use the function.
+ The function getAverage is to get the average value on a given array.  It knows nothing else and that is great!  By separating your code into little functions, you can focus on one thing at a time.

## Anonymous Functions

You can declare functions without names, but only if you store them into variables like this:

```javascript
var multiply = function(a, b) {
   return a * b;
}
```

## Calling Functions

The only way to use (a.k.a: call) a function is to use parenthesis brackets like this:

```javascript
//this is how you call a function without parameters 
multiply();

//this is how you call a function with parameters 
multiply(<first param>,<second param>);

//for example, to multiple 3 times 9 
multiply(3,9);
```

Please remember to assign the function whatever parameters it should receive.  In our example, the multiply function was declared asking for two numbers to multiply.  Play with the following example as you like:

<iframe height="400px" width="100%" src="https://repl.it/@4GeeksAcademy/Calling-Functions-Example?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

## Nested Calling

You can combine functions however you want and have chained calls like this:

```javascript{numberLines: true} 
function sum(a,b){
   return a+b;
}
function multiply(a,b){
   return a*b;
}


console.log(multiply(sum(3,5),sum(1,1)));


// the executions goes from inside to outside 
// first, the sum of 3+5 and 1+1 will be calculated 
// then, their respective results will be multiplied 
let firstSum = sum(3,5);
let secondSum = sum(1,1);
console.log(multiply(firstSum, secondSum));
```

[[demo]]
| :point_up: [View this example live at replit](https://repl.it/@4GeeksAcademy/Nested-Function-Calling)

## Let’s see an Example:

The following code has 3 functions declared:

*function <span style="color:purple">getAverage</span>(**ages**)*

*function <span style="color:purple"> getYoungest</span>(**ages**)*

*function <span style="color:purple"> getPersonInfoByName</span>(**name**)*

As you can see, the function names are pretty specific on what the functions do, as well as the parameters assigned to them.

<iframe height="400px" width="100%" src="https://repl.it/@4GeeksAcademy/FunctionsExample?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
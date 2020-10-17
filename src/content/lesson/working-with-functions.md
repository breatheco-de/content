---
subtitle: "Functions are not optional - they are probably the most used feature in any programming language. They let you separate your code in smaller mini-programs where each one takes care of its own thing. Divide and conquer!"
title: "Working with Functions"
cover: "../../assets/images/4cc6fa0b-2530-4052-aa7e-8dac03788ac3.png"
textColor: "white"
date: "2018-12-03"
tags: ["reactjs"]
status: "draft"

---

Mastering the use of lists and loops is one of the 5 fundamental skills of building algorithms:

1. Variables.
2. Conditionals.
3. Lists.
4. Loops.
5. `Functions`.

## What are Functions?

Basically, a function is a bunch of code wrapped between brackets that you can run anytime whenever you dice.  For example:

```javascript 
//the function name is "multiply" and receives 2 param: a & b 
function multiply(a, b) {
    //the function returns the multiplication 
   return a * b;
}
```

+ **Every function must have a purpose** (a goal) (like our function “multiply”).  The function purpose is to calculate the multiplication between two given numbers.
+ **It must have a unique name.**  In this particular case, our function is called “multiply” – which its a great name because you know exactly what the functions is about, it's explicit.
+ **It must return something.**  By default in javascript all functions return “undefined” but you should override and always return something useful. In this example, we want to return the result of a & b multiplication.
+ **Functions may have parameters.**  A “parameter” is a variable that the function may receive at the beginning of its code (like a & b in our example).

The whole idea is to have a library of hundreds of functions and use them as we please, you declare all your functions and later you start using and re-using them all the time.

```
let resultOfMultiplication = multiply(2,4);
// resultOfMultiplication will be 2
```

## But, why using Functions instead of just doing everything in one big chunk of code?

Coding is very abstract and it happens a lot that you have no idea what your wrote yesterday. Before functions existed, algorithms were this huge never-ending series of lines of code where developers would have a hard time and get lost.  It is hard for your brain to follow a procedure/algorithm of great length; the more lines of code, the more abstract it becomes.

By using functions you have the following advantages:

+ Split and conquer:  Divide your algorithm in smaller sub-algorithms and focus on one problem at a time.
+ Re-use your code by calling the function several times, dramatically reducing your code length.
+ Organize your code: function names will tell you what that piece of code does, you can have all the functions in a separate file and re-use it in all your future developments.

If you think about it, functions are the equivalent of books. The store knowledge and ways of doing things and in future developments you just re-use them instead of having to figure out everything all over again.

## The Function Scope

All functions must start and end somewhere, that its called **the scope of the function**. You can delimit the boundries using curly brackets like this:

```javascript{numberLines: true} 

//this part of the code is OUTSIDE the 'multiply' function 

function multiply(a, b) {

    //this part of the code is INSIDE the 'multiply' function 
   
   return a * b;

    //this part of the code is INSIDE my function but it will never 
    //be executed because it is located AFTER the return statement. 
}

//this part of the code is OUTSIDE the 'multiply' function 
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


[[warning]]
| :point_up: It is very important to remember that once you use the `return` statement the function will stop executing, if there is any code after that statement it will never be executed.

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

*function <span style="color:purple">getAverage</span>(**array: ages**){*
     ...
*}*

*function <span style="color:purple"> getYoungest</span>(**array: ages**)*
     ...
*}*
*function <span style="color:purple"> getPersonInfoByName</span>(**string: name**)*
     ...
*}*

As you can see, the function names are pretty specific on what the functions do, as well as the parameters assigned to them.

The function receives an array of 

<iframe height="400px" width="100%" src="https://repl.it/@4GeeksAcademy/FunctionsExample?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

Other important things to notice:

+ We are calling the function getPersonInfoByName two times – without using functions we would have to use more code because we would have no option to re-use the function.
+ The function getAverage is to get the average value on a given array.  It knows nothing else and that is great!  By separating your code into little functions, you can focus on one thing at a time.

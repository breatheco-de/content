---
subtitle: "Functions are not optional - they are probably the most used feature in any programming language. They let you separate your code into smaller mini-programs where each one takes care of its own thing. Divide and conquer!"
title: "Working with Functions"
cover_local: "../../assets/images/4cc6fa0b-2530-4052-aa7e-8dac03788ac3.png"
textColor: "white"
date: "2020-10-19T16:36:31+00:00"
tags: ["javascript","functions"]
status: "published"

---

Mastering the use of functions is one of the 5 fundamental skills of building algorithms:

1. Variables.
2. Conditionals.
3. Arrays.
4. Loops.
5. `Functions`.

## What are Functions?

Basically, a function is just a bunch of code inside brackets that you can run whenever you want. For example:

```javascript 
//the function name is "multiply" and receives 2 parameters: a & b 
function multiply(a, b) {
    //the function returns the multiplication between those 2 parameters
   return a * b;
}
```

+ **Every function must have a purpose** (a goal) (like our function “multiply”). The function's purpose is to calculate the multiplication between two given numbers.
+ **It must have a unique name.** In this particular case, our function is called “multiply”, which is a great name because you know exactly what the function is about, it's explicit.
+ **It must return something.** By default, in javascript all functions return “undefined” but you should override and always return something useful. In this example, we want to return the result of a & b multiplication.
+ **Functions may have parameters.** A “parameter” is a variable that the function may receive at the beginning of its code (like a & b in our example).

The whole idea is to have a library of hundreds of functions and use them as you please, you declare all your functions, and later you start using and re-using them all the time.

```javascript
let resultOfMultiplication = multiply(2,4);
// resultOfMultiplication will be 8
```

## But, why use Functions instead of just doing everything in one big chunk of code?

Coding is very abstract and usually, you forget what you wrote yesterday. Before functions existed, algorithms were this huge, never-ending series of lines of code where developers would have a hard time and get lost. It is hard for your brain to follow a procedure/algorithm of great length; the more lines of code, the more abstract it becomes.

By using functions, you have the following advantages:

+ Divide and conquer: divide your algorithm into smaller sub-algorithms and focus on one problem at a time.
+ Re-use your code by calling the function several times, dramatically reducing your code length.
+ Organize your code: function names will tell you what that piece of code does, you can have all the functions in a separate file and re-use it in all your future developments.

If you think about it, functions are the equivalent of books. They store knowledge and ways of doing things, and in future developments, you re-use them instead of having to figure out everything all over again.

## The Function Scope

All functions must start and end somewhere, that it's called **the scope of the function**. You can delimit the boundaries using curly brackets like this:

```javascript 

//this part of the code is OUTSIDE the 'multiply' function 

function multiply(a, b) {

    //this part of the code is INSIDE the 'multiply' function 
   
   return a * b;

    //this part of the code is INSIDE my function but it will never be executed because it is located AFTER the return statement. 
}

//this part of the code is OUTSIDE the 'multiply' function 
```

Any variables that you declare inside the function will not be available outside of it.

```javascript
function multiply(a, b) {

   let myVariable = 'hello';
   
   return a * b;
}

console.log(myVariable);
// this console.log won't work, it will trigger an error because myVariable was declared inside the function multiply, therefore it is not available outside. 

```

> ☝ It is very important to remember that once you use the `return` statement the function will stop executing, if there is any code after that statement it will never be executed.

## Anonymous Functions

You can declare functions without names, but only if you store them in variables like this:

```javascript
const multiply = function(a, b) {
   return a * b;
}
```

## Calling Functions

The only way to use (a.k.a: call) a function is to use parentheses brackets like this:

```javascript
//this is how you call a function without parameters 
multiply();

//this is how you call a function with parameters 
multiply(<first param>,<second param>);

//for example, to multiply 3 times 9 
multiply(3,9);
```

Please remember to assign the function whatever parameters it should receive. In our example, the multiply function was declared, asking for two numbers to multiply. Play with the following example as you like:

```js runable=true
//here we declare the function multiply
function multiply(a, b) {
	return a * b;
}

//then we can call it to multiply 3 times 4
console.log(multiply(3, 4));

//we could also declare the function anonymus
let anyVariableName = function(a, b) {
	return a * b;
}

//and call it using the function that is storing it
console.log(anyVariableName(3, 5));

// or we could not store the function in a variable, 
//and wrap it in a parenthesis to use it right away
// (not recomended, it's weird and hard to read)
console.log((function(a, b) {
	return a * b;
})(2, 3));
```

## Nested Calling

You can combine functions however you want and have chained calls like this:

```javascript runable=true
function sum(a,b){
   return a+b;
}
function multiply(a,b){
   return a*b;
}

console.log(multiply(sum(3,5),sum(1,1)));

// the executions go from inside to outside 
// first, the sum of 3+5 and 1+1 will be calculated 
// then, their respective results will be multiplied 
let firstSum = sum(3,5);
let secondSum = sum(1,1);
console.log(multiply(firstSum, secondSum));
```

> :point_up: You can click run on the code above to see the output

## Let’s see an Example:

The following code has 3 functions declared:

*function <span style="color:purple">getAverage</span>(**array: ages**){*
     ...
*}*

*function <span style="color:purple">getYoungest</span>(**array: ages**){*
     ...
*}*

*function <span style="color:purple">getPersonInfo</span>(**string: name**){*
     ...
*}*

As you can see, the function names are pretty specific about what the functions do, as well as the parameters assigned to them.

Here is the more detailed example:

```js runable=true
function getAverage(array) {
    let sum = array.reduce((a, b) => a + b, 0);
    return sum / array.length;
}

function getYoungest(array) {
    // This function now expects an array of objects with an 'age' property
    return array.reduce((a, b) => a.age < b.age ? a : b);
}

function getPersonInfo(name, people) {
    return people.find(person => person.name === name);
}

let average = getAverage([2, 4, 5, 12, 7]);

// Corrected: Use the 'people' array for getYoungest
let people = [{ name: "John", age: 20 }, { name: "Mary", age: 21 }];
let youngest = getYoungest(people);

let john = getPersonInfo("John", people);
let mary = getPersonInfo("Mary", people);

console.log({ average, youngest, john, mary });

```

Other important things to notice:

+ We are calling the function `getPersonInfo` two times, without using functions we would have to use more code, because we would have no option to re-use the function.
+ The function `getAverage` is to get the average value on a given array. It knows nothing else, and that is great! By separating your code into little functions, you can focus on one thing at a time.

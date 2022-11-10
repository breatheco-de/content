---
title: "What is JavaScript? Learn to Code in JavaScript"
subtitle: "Get to know what is JavaScript, everybody is talking about it and by now you probably know its time to learn to code in JavaScript in order to get things to the next level."
cover_local: "../../assets/images/4cc6fa0b-2530-4052-aa7e-8dac03788ac3.png"
textColor: "white"
status: "pending_translation"
date: "2020-10-19T16:36:31+00:00"
tags: ["javascript"]

---

## But, What is coding?


**Coding is not HTML, CSS or Position and Display…** Those languages were not designed for developers, they are just the way we have to render stuff in a browser.

**Coding is making *the computer* "obey"…**

Everybody uses computers for different reasons: some computers are created to help people in their office (like personal computers), others to keep a room in a specific temperature (like [the NEST](https://nest.com/es/)), others are made to walk on Mars and so many more tasks.

No matter what the computer is made for, the very base of its existence is the same: to follow commands.  In this chapter you will learn 5 basic things you’ll need to understand any modern computer through code.

## Variables


<iframe width="830" height="467" src="https://www.youtube.com/embed/Q-eob0WBKs0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<div align="right"><small><a href="https://www.youtube.com/embed/Q-eob0WBKs0">Click here to open video in a new window</a></small></div>

Variables are not a new concept, anybody who knows math is familiar with the concept of variables.

A variable is a container in which you can store any data.  For example, you can have the following variable:

```javascript
var age = 24;
```

![what is javascript](../../assets/images/ecb49b67-f513-49b3-bd4a-dd7cc44e9bce.gif)

With virtually any programming language you can create as many variables as you want or need.  To start, you have to **declare that variable’s name** using the term: *var* followed by a _unique_ name (relative to the document-project).

The **variable name** is the most effective way we have to describe the variable content, so use it wisely.  It is important to choose a name that clearly tells you (and other coders) about the data that is being stored in the variable.  If we choose a bad or an ambiguous name, our code will be almost impossible to understand, ergo it becomes unusable.  For example, let’s say we change the name of our "age" variable to `a`, that would be:

```javascript
var a = 24 ;
```

As you can see above, the new variable name does not tell us anything about the data that is being stored and why we are using it.

Choosing the name for your variable really matters, so we beg you not to use generic names.  Be descriptive!  A vague name will make it difficult to understand the purpose of the variable, especially for other coders (including your future self).

## Assigning a Value to Variables


As developers, we can set the value of a variable at any time using the `=` operator.  You do not have to set a value when you first declare a variable.  You can set, or re-set (override) the value as many times as you want, whenever you want.  The value will always be the last one you set.  Below are a few examples on how to set values to variables:

```javascript
var a = 24;
  a = 25;
  a = 80;

var b ;
  b = 9 ;
  b = 108 ;
```

### `var` vs.  `let`  vs. `const`


As we learned above, we use the keyword `var` to declare a variable.  There are two other keywords that we can also use to declare variables: ***const & let*** .  The main difference between these types of variables have to do with scope.

***Const***:  This keyword is used when the value stays constant throughout the life of the script.  The value of the variable declared with this keyword can never be changed.  If you try to change it, it will result in an error.

***Let***:  The values are only limited to the scope of the code block (anything between curly brackets) that it is declared in.  If a function has more than one code block, the variable will be considered a different variable in each block.

***Var***:  Its scope is within the function in which it is declared in.  This means that the variable will stay the same throughout the whole function even if there is more than one block of code in the function.

> :link: [Read more about `*var*`, `*let*`, and `*const*`](http://wesbos.com/let-vs-const/)

Variable values are subject to change over time.  To retrieve a variable's value you can print the value on the screen at any time.  Each language has its own methods to print; this is how you do it in JavaScript:

<iframe src="https://repl.it/F0R2/1?lite=true" frameborder="0" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals" width="100%" height="400px" scrolling="no" allowtransparency="true" allowfullscreen="true"></iframe>

<div align="right"><small><a href="https://repl.it/F0R2/1?lite=true" >Click to open demo in a new window</a></small></div>



## Data Types

Variables can have different types of values.  Some of them are available only in specific programming languages, but almost all of them have the following types:

|**Data-Type**   |**Posible Values**   |**Description**   |
|:---------------|:--------------------|:-----------------|
|Boolean         |True \| False         |Booleans are meant for logical operations.  If you ask a computer something like: "Does X equal 3?"  It will answer with a boolean (true or false).    |
|String        |Any series of characters     |Strings are the only way we have to store words (series of characters).  Note: strings need to be encased within quotation marks.    |
|Number    |Only numbers     |Integer numbers, negative numbers, decimal numbers, floats, etc.  All possible types of numbers.<br>Note: If you enclose a number within quotation marks, JavaScript will treat it as a string.    |
|Undefined     |The void     |When a variable has no value assigned, it is undefined.     |
|Array     |A list of any type of value    |A succession of any type of values.  They can be mixed types of values; for example: [2, 3, ‘Word’, 2, 1, null, 232, 5, 3, 23, 234, 5, ‘hello’].     |
|Objects    |Any object    |You can create your own data-types with more complex operations.  We will talk more about this later.    |
|Null     |Only null    |Is used to specify when the database or any other function does not return anything.   |

<iframe src="https://repl.it/F05K/3?lite=true" frameborder="0" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals" width="100%" height="400px" scrolling="no" allowtransparency="true" allowfullscreen="true"></iframe>

<div align="right"><small><a href="https://repl.it/F05K/3?lite=true">Click to open demo in a new window</a></small></div>




## Operations


What operations can I do to variables?  Depending on the data-type you have a few different possibilities:

+ Numbers are easy – you can do whatever math operation you want.
+ Strings can be concatenated (merged), split, converted to Upper or Lower Case, etc.
+ You cannot do much to Null, Booleans and Undefined data-types.
+ We will talk about Arrays and Objects in a different section.  They require a lot more attention.

## Functions


Functions are pieces of code that can be re-used several times during runtime regardless of their position in the code.  There are hundreds of reasons to use functions, but here are the 2 most important ones:

+ Divide and conquer: It is always easier to split your problems into several smaller problems.  This will become your biggest challenge when solving complex problems.  Functions will be your best tools for abstraction.
+ Re-use: Any normal development will take at least 5,000 lines of code.  It is redundant and inefficient to keep writing the same code over and over again.

## Declaring a Function


To declare a function in JavaScript you have to start using the word `function` followed by the name you want for that function.

You must then specify the parameters (inputs) that the function is going to have within parentheses.

Then, you will open a curly bracket and write the code that your function must always perform.  Once you are finished, you then close the curly bracket and now your function is ready to be used!

**Note:**  To return something you use the `return` word at any time within the content of your function (between the curly brackets).

![learn to code in javascript](../../assets/images/0c4fa020-02f6-4ec0-bfeb-a6292145a153.gif)

```javascript
function multiply (param1, param2)
{
    return (param1 * param2);
}
```
<iframe src="https://repl.it/F10t/0?lite=true" frameborder="0" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals" width="100%" height="400px" scrolling="no" allowtransparency="true" allowfullscreen="true"></iframe>

<div align="right"><small><a href="https://repl.it/F10t/0?lite=true">Click to open demo in a new window</a></small></div>

## Parameters and Function Scope


The scope of a variable determines where that variable is available to be used.  There are two main types of scopes:

### Local Variables

A local variable is available only inside the scope of the nearest curly brackets.  For example, variables that are passed as parameters into functions are only available within the content of that particular function.

### Global Variables

If you declare a variable at the beginning of your code, it will be available throughout the entire code – including during the content of any particular function.

<iframe src="https://repl.it/F10t/2?lite=true" frameborder="0" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals" width="100%" height="400px" scrolling="no" allowtransparency="true" allowfullscreen="true"></iframe>

<div align="right"><small><a href="https://repl.it/F10t/2?lite=true">Click to open demo in a new window</a></small></div>

## Logical Operations


Computers think of everything in black or white.  Everything is either True or False.  All the decisions in a computer are reduced into a simple **Boolean**.  You can prepare a computer to solve particular problems if you write code that asks the proper questions required to solve that problem.

For example, if I want a computer to give candy only to kids older than 13 years of age, I can instruct the computer to ask:

 **Is this kid’s age greater than 13?  Yes or no?**

**In JavaScript, you can instruct the computer to do the following logical operations:**

|**Operation**  |**Syntaxis**   |**Examples**   |
|:--------------|:--------------|:--------------|
|Equal to       |==             |Is 5 == 5? True!<br>Is 5 == 4? False!<br>Is 5 == '5'? True!    |
|Not Equal to   |!=             |Is 5 != 5? False!<br>Is 5 != '5'? False!<br>Is 1 != 'Hello' True!   |
|Greater than   |>              |Is 5 > 5? False!<br>Is 6 > 3? True!    |
|Less than      |<              |Is 6 < 12? True            |
|Greater or equal  |>=             |Is 6 <= 6? True<br>Is 3 <= 6? True    |
|Less or equal   |<=            |You get the idea 🙂       |

To create really useful operations, you can combine several operations in the same question using AND, OR and NOT.

You can group the logical operations in parentheses, and also use nested parentheses for several operations at the same time.

|**Operation**   |**Syntaxis**   |**Examples**   |
|:---------------|:--------------|:--------------|
|AND             |&&             |With AND, both sides HAVE TO BE TRUE in order for everything to become true.<br>Is (5 == 5 && 3 > 1) ? True!<br>Is ('Ramon' == 'Pedro' && 2 == 2) ? False!    |
|OR     |\|\|     |Is ('Oscar' != 'Maria' OR 2 != 2)? True!<br>Is (5 == '5' AND 'Ramon' != 'Pedro') OR (2 == 2)? True!   |
|NOT     |!     |NOT will be the exact opposite of the result of the logical operator:<br>Is !(5 > 5)? True!<br>Is !(True)? False!    |


## Control the Flow of Your Code


Okay, now is when everything starts getting fun!  To control your applications flow you will have several options, and you are going to use each of them every single day.  So, you must become comfortable using them.

### If…else…

The first tool you have is the `if…else` conditional.  It is very easy.  You can tell the computer to skip any part of your code depending on the current value of your variables.

The `if` statement allows you to execute a piece of code if certain conditions are met (or are true).  The "else" statement will execute an alternate piece of code in case the condition is false.

```javascript
if (number < 18) {
    document.write("Hello");
} else {
     document.write("Good bye!");
}
```

## Switch


Similar to if…else… but a little bit more organized.  Here you will specify all of the possible case scenarios – including the `default scenario` that will occur if none of the other scenarios happen.

<iframe src="https://repl.it/F2EK/5?lite=true" frameborder="0" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals" width="100%" height="400px" scrolling="no" allowtransparency="true" allowfullscreen="true"></iframe>

<div align="right"><small><a href="https://repl.it/F2EK/5?lite=true">Click to open demo in a new window</a></small></div>

> Use `switch` instead of `if` when:<br><br>• You are comparing multiple possible conditions of an expression and the expression itself is non-trivial.<br>• You have multiple values that may require the same code.<br>• You have some values that will require essentially all of another value’s execution, plus only a few statements.<br><br>Use `if` instead of `switch` when:<br><br>• You want to test for the truthfulness of an expression.<br>• You only have a single affirmative test.<br>• You need to evaluate different expressions for each branch.


## While


It is possible to loop a segment of your code as many times as you want or need.  Loops are one of the most important tools for developers these days.

Imagine you are inside an elevator – the elevator needs to loop throughout the floors until it reaches the specific floor that you want.

A `while` loop will execute a block of code as long as a condition is true.  Once the condition returns false, the loop will stop executing the block of code.

```javascript
var sum = 0;
var number = 1;
while (number <= 50) {
  sum += number;
  number++;
}
console.log("Sum = " + sum);
```

## For


`For` is similar to the `while,` with the only difference being that you have to specify the stopping condition from the beginning.  For that reason, `for` is a little more organized and easier to understand.

Note:  When looping, make sure that the statement will eventually return false so that you avoid an infinite loop.  In an infinite loop, the code executes indefinitely and will cause your browser to crash.

<iframe width="578" height="325" src="https://www.youtube.com/embed/TSMzvFwpE_A" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<div align="right"><small><a href="https://www.youtube.com/embed/TSMzvFwpE_A">Click here to open video in a new window</a></small></div>


```javascript
for (var i = 0; i < 10; i++) {
    document.write("This is number" + " " + i);
}
```

## For..in


`For…in` loops can be to used to loop through the properties of an object.  Within the parentheses, you can set any name to represent the information within the object, and then include the name of the object:

for (var in object)<br> {
code block to be executed
}

```javascript
var dog = {
  species: "Great Dane",
  size: "Extra Large",
  age: 3 ,
  name: "Rocky"

}

for(items in dog){
  console.log(dog[items]);
}
```

## So.. tell me, did you like coding?


Coding is like Taco Bell:  you always use the same ingredients except they are just mixed in different ways.  You know how to write code, but…do you know how to solve real problems?
















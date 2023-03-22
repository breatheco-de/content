---
title: "Learning to code with Python"
subtitle: "Python is the fastest-growing programing language in the world, it does almost everything you can think of and the best news is that it's one of the easiest to learn"
cover_local: "../../assets/images/4cc6fa0b-2530-4052-aa7e-8dac03788ac3.png"
textColor: "white"
status: "published"
date: "2020-10-19T16:36:31+00:00"
tags: ["javascript"]

---

## Why python?

Python is the first language you should learn, but certainly not the only one.

- MIT decided to teach python as first language because its syntax prevents for lots of errors, specially because it has identation and no semicolons.

## Variables

<iframe width="830" height="467" src="https://www.youtube.com/embed/Q-eob0WBKs0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<div align="right"><small><a href="https://www.youtube.com/embed/Q-eob0WBKs0">Click here to open video in a new window</a></small></div>

Variables are not a new concept, anybody who knows math is familiar with the concept of variables.

A variable is a container in which you can store any data.  For example, you can have the following variable:

```python
age = 24
```

![what is python](https://github.com/breatheco-de/content/blob/master/src/assets/images/ecb49b67-f513-49b3-bd4a-dd7cc44e9bce.gif?raw=true)

With virtually any programming language you can create as many variables as you want or need, all you have to do is type one word in your editor and that will become your variable, for example, this is how we declare a variable "name":

```python
name = "Alex"
```

The **variable name** is the most effective way we have to describe the variable content, so use it wisely.  It is important to choose a name that clearly tells you (and other coders) about the data that is being stored in the variable.  If we choose a bad or an ambiguous name, our code will be almost impossible to understand, ergo it becomes unusable.  For example, let’s say we change the name of our "name" variable to `myVar`, that would be:

```python
myVar = "Alex"
```

As you can see above, the new variable name does not tell us anything about the data that is being stored and why we are using it.

Choosing the name for your variable really matters, so we beg you not to use generic names.  Be descriptive!  A vague name will make it difficult to understand the purpose of the variable, especially for other coders (including your future self).

## Assigning a Value to Variables

As developers, we can set the value of a variable at any time using the `=` operator.  You have to set a value when you first declare a variable, but re-set (override) its value as many times as you want, whenever you want.  The value will always be the last one you set.  Below are a few examples on how to set values to variables:

```python
name = "Bob"
name = "Joe"
name = "Rita"
```

Note: the variable name in this code will end up having the value `Rita`, it will be as if `Bob` and `Joe` never existed.

### No special keywords to declare a variable

Other languages like javascript make you use a special statement before the variable name in order to "declare" the variable for the first time like this:

```python
age = 12;
```

Other -strongly typed- languages like Typescript also make you declare the type of value that the variable will contain inside:

```python
let age : number = 12;
```

> Note: This means that the variable age will always contain a number inside.

But Python does not need any type declaration or special keywords, just type `name = "Rita"` and that will be your new variable `name` with value `Rita`.

Variable values are subject to change over time.  To retrieve a variable value you can print the value on the screen at any time.  Each language has its own methods to print; this is how you do it in Python:

```python
name = "Rita"
print("My name is "+name)

# The command line output for this code will be "My name is Rita"
```

## Data Types

Variables can have different types of values.  Some of them are available only in specific programming languages, but almost all of them have the following types

|**Data-Type**  |**Posible Types**                  |**Possible values**                            |
|:--------------|:----------------------------------|:----------------------------------------------|
| Nothing       |`None`                             | `x=None`                                      |
| Text Type     |`str`                              | `x="bob"`                                     |
| Numeric Types |`int`, `float`, `complex`          | `x=2`, `x=2.012`, `x = 1j`                    |
| Sequence Types|`list`, `tuple`, `range`           |`x=[34,32,54]`,`x=(34,32,54)`,`x=range(6)`     |
| Mapping Type  |`dict`                             |`x={"name": "Bob", "last_name": "Dylan"}       |
| Set Types     |`set`, `frozenset`                 |`x={"apple", "banana", "cherry"}               |
| Boolean Type  |`bool`                             |`x=True` or `x=False`                          |
| Binary Types  |`bytes`,`bytearray`, `memoryview`  |`to big to display, we will not be using them` |       



## Operations

What operations can I do to variables?  Depending on the data-type you have a few different possibilities:

+ Numbers are easy – you can do whatever math operation you want.
+ Strings can be concatenated (merged), split, converted to Upper or Lower Case, etc.
+ You cannot do much to None variables or Booleans.
+ We will talk about Lists, Tuples and Dict's in a different section.  They require a lot more attention.

## Functions

Functions are pieces of code that can be re-used several times during runtime regardless of their position in the code.  There are hundreds of reasons to use functions, but here are the 2 most important ones:

+ Divide and conquer: It is always easier to split your problems into several smaller problems. This will become your biggest challenge when solving complex problems.  Functions will be your best tools for abstraction.
+ Re-use: Any normal development will take at least 5,000 lines of code.  It is redundant and inefficent to keep writing the same code over and over again.

## Declaring a Function

To declare a function in Python you have to start using the word `def` followed by the name you want for that function and a colon `:` aftewars.

You must then specify the parameters (inputs) that the function is going to have within parentheses.

Then, you jump the line (hit enter) and write the code that your function must always perform.  

**Note:**  To return something you use the `return` word at any time within the content of your function (between the curly brackets).

![learn to code in javascript](https://github.com/breatheco-de/content/blob/master/src/assets/images/0c4fa020-02f6-4ec0-bfeb-a6292145a153.gif?raw=true)

```python
def multiply (param1, param2):
    return param1 * param2;
```

Note: please note that the indentation (white spaces) on the left side of the line number two are rally important, all the contnet of the function must be indented to the right.

## Parameters and Function Scope

The scope of a variable determines where that variable is available to be used.  There are two main types of scopes:

### Local Variables

A local variable is available only inside the scope of the nearest curly brackets.  For example, variables that are passed as parameters into functions are only available within the content of that particular function.

```python
def print_your_name():
    name = "Bob"
    print(name) # This will print "Bob"
    
print(name) # This will not print "Bob" because name does not exist on this scope.
```

### Global Variables

If you declare a variable at the beginning of your code, it will be available throughout the entire code – including during the content of any particular function.

```python
name = "Bob"
def print_your_name():
    print(name) # This will print "Bob"
    
print(name) # This will print "Bob" as well.
```

## Logical Operations

Computers think of everything in black or white.  Everything is either True or False.  All the decisions in a computer are reduced into a simple **Boolean**.  You can prepare a computer to solve particular problems if you write code that asks the proper questions required to solve that problem.

For example, if I want a computer to give candy only to kids older than 13 years of age, I can instruct the computer to ask:

 **Is this kid’s age greater than 13?  Yes or no?**

**In Python, you can instruct the computer to do the following logical operations:**

|**Operation**  |**Syntaxis**   |**Examples**   |
|:--------------|:--------------|:--------------|
|Is none or null|is None        |`if author is None:` |
|Equal to       |==             |Is 5 == 5? True!<br>Is 5 == 4? False!<br>Is 5 == '5'? True!    |
|Not Equal to   |!=             |Is 5 != 5? False!<br>Is 5 != '5'? False!<br>Is 1 != 'Hello' True!   |
|Greater than   |>              |Is 5 > 5? False!<br>Is 6 > 3? True!    |
|Less than      |<              |Is 6 < 12? True            |
|Greater equal  |>=             |Is 6 <= 6? True<br>Is 3 <= 6? True    |
|Less or equal   |<=            |You get the idea 🙂       |

To create really useful operations, you can combine several operations in the same question using AND, OR and NOT.

You can group the logical operations in parentheses, and also use nested parentheses for several operations at the same time.

|**Operation**   |**Syntaxis**   |**Examples**   |
|:---------------|:--------------|:--------------|
|AND             |and             |With AND, both sides HAVE TO BE TRUE in order for everything to become true.<br>Is (5 == 5 && 3 > 1) ? True!<br>Is ('Ramon' == 'Pedro' && 2 == 2) ? False!    |
|OR     |or     |Is ('Oscar' != 'Maria' or 2 != 2)? True!<br>Is (5 == '5' and 'Ramon' != 'Pedro') or (2 == 2)? True!   |
|NOT     |not    |NOT will be the exact opposite of the result of the logical operator:<br>Is not (5 > 5)? True!<br>Is not (True)? False!    |


## Control the Flow of Your Code

Okay, now is when everything starts getting fun!  To control your application’s flow you will have several options, and you are going to use each of them every single day.  So, you must to become comfortable using them.

### If…else…

The first tool you have is the `if…else` conditional.  It is very easy.  You can tell the computer to skip any part of your code depending on the current value of your variables.

The `if` statement allows you to execute a piece of code if certain conditions are met (or are true).  The "else" statement will execute an alternate piece of code in case the condition is false.

```python
if number < 18:
    print("Hello");
else:
    print("Good bye!");

```

## Switch

Python does not have a switch statement like some other languages like Javascript, Java or Php.


## While

It is possible to loop a segment of your code as many times as you want or need.  Loops are one of the most important tools for developers these days.

Imagine you are inside an elevator – the elevator needs to loop throughout the floors until it reaches the specific floor that you want.

A `while` loop will execute a block of code as long as a condition is true.  Once the condition returns false, the loop will stop executing the block of code.

```python
sum = 0
while sum <= 50:
  sum += 1

print("Sum = " + sum);
```

## For

`For` is similar to the `while,` with the only difference being that you have to specify the stopping condition from the beginning.  For that reason, `for` is a little more organized and easier to understand.

Note:  When looping, make sure that the statement will eventually return false so that you avoid an infinite loop.  In an infinite loop, the code executes indefinitely and will cause your browser to crash.

```python
for i in range(10):
    print(i)
```

## Looping a dictionary (or map)

In python you can store a group of related values in key => value pairs like this:

```python
dog = {
  "breed": "Great Dane",
  "size": "Extra Large",
  "age": 3 ,
  "name": "Rocky"
}

for key in dog:
  print(dog[key])

```

## So.. tell me, did you like coding?

Coding is like Taco Bell:  you always use the same ingredients except they are just mixed in different ways.  You know how to write code, but…do you know how to solve real problems?















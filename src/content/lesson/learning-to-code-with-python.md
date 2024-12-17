---
title: "Learning to program with Python"
subtitle: "Python is a programming language with the fastest-growing community in the world, it does almost everything you can think of, and the best news is that it's one of the easiest to learn."
cover_local: "../../assets/images/4cc6fa0b-2530-4052-aa7e-8dac03788ac3.png"
textColor: "white"
status: "published"
date: "2020-10-19T12:36:31-04:00"
tags: ["python"]

---

# Why Python?

Python is the first language you should learn, but obviously not the only one.

- MIT decided to teach Python as the first language because its syntax prevents many errors, especially because it uses indentation instead of semicolons.

## Variables

<iframe width="830" height="467" src="https://www.youtube.com/embed/Q-eob0WBKs0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<div align="right"><small><a href="https://www.youtube.com/embed/Q-eob0WBKs0">Click here to open the demo in another window</a></small></div>

A variable is a container in which you can store any data. For example, you can have the following variable:

```python
age = 24
```

![variables](https://github.com/breatheco-de/content/blob/master/src/assets/images/ecb49b67-f513-49b3-bd4a-dd7cc44e9bce.gif?raw=true)

With almost any programming language, you can create as many variables as you want or need. To start, in Python, you must **declare the name of that variable** with a _unique_ name (relative to the value or what it receives)

The **variable name** is the most effective way to describe the content of a variable, use it wisely. It is important to choose a name that clearly indicates to you and other programmers what data is being stored in the variable. If you choose a bad or ambiguous name, your code will be almost impossible to understand, making it unusable. For example, let's change the name of our variable "age" to "a":

```python
a = 24
```

As you can see, the new variable name doesn't tell us anything about the data being stored and why it's being used.

Choosing the name of your variable is very important, so please don't use generic names. Be descriptive! A vague name will make it difficult to understand the purpose of the variable, especially for other programmers (including yourself).

## Assigning a Value to Variables

As developers, we can set the value of a variable using the `=` operator. You don't have to set the value of a variable when you declare it for the first time. You can set or reset (overwrite) the value as many times as you want and whenever you want. The value is always the last one you set. Here are some examples of how to set values to variables:

```python
a = 24
a = 25
a = 80
```

The values of variables can change over time. To retrieve the value of a variable, you can print its value on the screen at any time. Every programming language has its own methods for printing. In Python, we use `print`.

```py runable=true
age = 24
print(age)

# we can update the value of variable "age" anytime
age = 30
print(age)
```

## Data Types

Variables can have different types of values:

|**Data-Type**   |**Possible Values**   |**Description**   |
|:---------------|:--------------------|:-----------------|
|Boolean         |True \| False        |Booleans are intended for logical operations. If you ask a computer something like, "Is X equal to 3?" it will respond with a boolean (true or false).   |
|String        |Any string of characters     |Strings are the only way we have to store words (sequences of characters). Note: strings must be enclosed in quotes.  |
|Number   |Numbers only     |Integers, negative numbers, decimals, floats, etc. All possible types of numbers. <br>  |
|Undefined     |Empty    |When a variable has no assigned value, it remains undefined.   |
|Array     |A list with any type of value.   |A sequence of any type of values. They can be mixed types of values; for example: [2, 3, 'Word', 2, 1, null, 232, 5, 3, 23, 234, 5, 'hello'].     |
|Objects	    |Any object    |You can create your own data types with more complex operations. We will talk more about this later.  |
|Null    |Only Null    |Used to specify when the database or any other function does not return anything.   |

```py runable=true
# Variables and their types
myFirstBoolean = True  # Boolean
myFirstInteger = 35  # Integer
myFirstFloat = 2323.4545  # Float (number with decimals)

myFirstString = 'Hello Wold'  # String
myFirstObject = {'name': 'Ramon', 'Age': 32}  # Dictionary with 2 key-value pairs
myFirstArray = [23, 'Hello', 8.54, None, 544]  # List of 5 items of different types
myFirstNull = None  # NoneType represents null in Python
myFirstUndefined = None  # Python uses None to represent undefined/null values

# Printing the variables to the console
print(myFirstBoolean)

print(myFirstInteger)
print(myFirstFloat)
print(myFirstFloat + myFirstInteger)  # Arithmetic operation

print(myFirstObject)
print(myFirstString)
print(f"{myFirstString}...{myFirstObject['name']}")  # String formatting for concatenation

print(myFirstArray)
print(myFirstNull)
print(myFirstUndefined)

```

## Operations

What operations can I perform with variables? Depending on the data type, you have some different possibilities:

+ Numbers are easy - you can perform any mathematical operation you want.
+ Strings can be concatenated (merged), split, converted to uppercase or lowercase, etc.
+ Not much can be done with null, boolean, and undefined data types.
+ We will talk about Arrays and Objects in another section. They require much more attention.

## Functions

Functions are pieces of code that can be reused multiple times during runtime, regardless of their position in the code. There are hundreds of reasons to use functions, but here are the top 2:

+ Divide and conquer: it's always easier to break your problems into smaller problems. This will become your biggest challenge when solving complex problems. Functions will be your best tools for abstraction.
+ Reusability: any normal development will take at least 5,000 lines of code. It's redundant and inefficient to keep writing the same code over and over again.

## Declaring a Function

To declare a function in Python, you start with the `def` keyword followed by the name you want to give to that function.

Then you specify the parameters (inputs) that the function will accept within parentheses.

Next, you start a new indented block of code where you write the code that your function should perform. Once you're done with the function's code, you simply stop the indentation.

Note: To return a value from the function, you use the `return` keyword followed by the value you want to `return`. You can place the return statement anywhere within the function's code block, and the function will exit and return that value.

> Here is an example:

```python
def multiply(param1, param2):
    result = param1 * param2
    return result  # This is how you return a value from the function
```

## Function Parameters and Scope

The scope of a variable determines where that variable is available for use. There are two main types of scopes:

## Local Variables

A local variable is only available within the scope of the nearest curly braces. For example, variables passed as parameters to functions are only available within the content of that specific function.

## Global Variables

If you declare a variable at the beginning of your code, it will be available throughout the entire code, even within the content of any particular function.

```python runable=true
# Define a global variable
message = "Hello"

def print_message():
    # This function uses the global variable 'message'
    print(message)

print_message()  # Outputs: Hello
```

## Logical Operations

Computers think in black or white. Everything is true or false. All decisions on a computer boil down to a simple boolean. You can prepare a computer to solve particular problems by writing code that asks the right questions to solve that problem.

For example, if I want a computer to give candy only to children older than 13 years old, I can tell the computer to ask.

 **Is this child's age greater than 13 years? Yes or no?**

**In python, you can ask the computer to do the following logical operations:**

|**Operation**  |**Syntax**   |**Examples**   |
|:--------------|:--------------|:--------------|
|Equal to     |==             |Is 5 == 5? True!<br>Is 5 == 4? False!<br>Is 5 == '5'? True!    |
|No Igual a    |!=             |	Is 5 != 5? False!<br>Is 5 != '5'? False!<br>Is 1 != 'Hello'? True!   |
|Greater than   |>              |Is 5 > 5? False!<br>Is 6 > 3? True!    |
|Less than    |<              |Is 6 < 12? True           |
|Greater or Equal |>=             |Is 6 <= 6? True<br>Is 3 <= 6? True    |
|Less or Equal  |<=            |You get the idea 🙂       |

To create really useful operations, you can combine multiple operations in the same question using AND, OR, and NOT (and, or, or not respectively).

You can group logical operations within parentheses and use nested parentheses to perform multiple operations at the same time.

|**Operation**   |**Syntax**   |**Examples**   |
|:---------------|:--------------|:--------------|
|AND             |`and`             |With AND, both sides MUST BE TRUE for everything to become true.<br>Is (5 == 5 and 3 > 1) true? True!<br>Is ('Ramon' == 'Pedro' and 2 == 2) false? False    |
|OR     |`or`     |Is ('Oscar' != 'Maria' or 2 != 2) true? True!<br>Is (5 == '5' and 'Ramon' != 'Pedro') or (2 == 2) true? True!   |
|NOT     |`not`     |NOT will be exactly the opposite of the logical operator's result:<br>Is not (5 > 5) true? True!<br>Is not (True) false? False!    |

## Controlling Your Code's Flow

Now is when things start to get fun! To control your application's flow, you have several options, and you'll use them every day. So, you should feel comfortable using them.

### If…else…

The first tool you have is the `if...else` conditional. It's straightforward. You can tell the computer to skip any part of your code depending on the current value of your variables.

The `if` statement allows you to execute a block of code if certain conditions (or truths) are met. The "else" statement will execute an alternative block of code if the condition is false.

```python runable=true
numer=17
if number < 18:
     print("Hello");
else:
     print("Good bye!")
```

## Switch

Python does not have the ability to use `switch` statements like other languages (e.g., JavaScript, C#, etc.).

## While

It is possible to loop a segment of your code as many times as you want or need. Loops are one of the most important tools for developers these days.

Imagine you're in an elevator: the elevator must loop through the floors until it reaches the specific floor you want.

A `while` loop will execute a block of code as long as a condition is true. Once the condition is false, the loop will stop executing the code.

```python runable=true
sum = 0;
number = 1;
while number <= 50:
  sum += number
  number += 1

print("Sum = " + sum)
```

## For Loop

`For` is similar to `while`, with the only difference being that you must specify the condition to stop from the start. For that reason, `for` is a bit more organized and easier to understand.

Note: when creating a loop, make sure the condition eventually becomes false to avoid an infinite loop. In an infinite loop, the code runs indefinitely and will freeze your browser.

<iframe width="578" height="325" src="https://www.youtube.com/embed/TSMzvFwpE_A" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<div align="right"><small><a href="https://www.youtube.com/embed/TSMzvFwpE_A">Click here to open the video in a new window</a></small></div>

```python runable=true
for i in range(10):
  print("This is number" + " " + i)

```
## For...In

`For...in` loops can be used to iterate over the properties of an object. Inside the parentheses, you can set any name to represent the information within the object and then include the name of the object:

```python
for (variable in object) {
code block to be executed
}
```

```python runable=true
dog = {
  "species": "Great Dane",
  "size": "Extra Large",
  "age": 3 ,
  "name": "Rocky"
}

for items in dog:
  print(dog[items])

```

## So... tell me, did you enjoy programming?

Programming is like Taco Bell: the same ingredients are always used, but they are mixed in different ways. You know how to write code, but... do you know how to solve real-world problems?

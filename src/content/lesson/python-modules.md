---
title: 'Python Modules: Organizing and Reusing Code like an Expert.'
subtitle: >-
  Learn about modules in Python and how to take advantage of them to efficiently
  organize and reuse your code - improve your programming skills!
tags:
  - python
authors:
  - DF27ARTS
description: >-
  Master Python modules to organize and reuse your code like an expert! Discover
  how to enhance your programming skills and streamline your projects today!
---
## Introduction to Python Modules

In this article, we will enter the exciting world of modules in [Python](https://4geeks.com/technology/python). You will discover what modules are and how to use them to empower your programs: get ready to expand your horizons and take your programming skills to the next level! If you want to know a little more about [what is Python?](https://4geeks.com/lesson/intro-to-python) or its main uses, you can find a lot of information on the [4Geeks](https://4geeks.com/) blog.

Next, we will see a small example of how to use modules in a Python script.

#### math_operations.py

```py
def add(a, b):
    return a + b

def subtract(a, b):
    return a - b

def multiply(a, b):
    return a * b
```

#### main.py

```py
from math_operations import add, subtract, multiply

print(add(5, 3)) # output: 8
print(subtract(5, 3)) # output: 2
print(multiply(5, 3)) # output: 15
```

As you can see in the example, in the module `math_operations.py` we have several functions that allow us to perform mathematical operations. Then in module `main.py` we import these functions and invoke them. This is a small example of how to create and import modules in Python.

## What are modules in Python? 📕

Modules in Python are one of the most powerful and versatile features of this language. They allow you to organize your code into reusable logical units, simplifying the development and maintenance of programs. Imagine them as magic boxes full of tools and functionalities ready to be used in your programs. Modules allow you to organize and divide your code into logical units, making it easy to maintain and reuse. They are like superpowers that take your programs to the next level! 💫🔧

## Benefits of using Python modules

1. **Code reusability**: By dividing the code into modules, we can use the same functionalities in different parts of a program or even in other projects, which saves time and effort.
2. **Organization**: Modules allow the code to be organized into smaller units, which improves readability and facilitates collaboration between developers.
3. **Maintainability**: By separating the code into modules, it is easier to make changes or corrections in specific areas without affecting the rest of the program.

## Importing modules in Python

To use a module in Python, you must first import it into your program. You can do this by using the `import` keyword followed by the module name. For example:

```py
import math
```

This imports the module [math](https://docs.python.org/es/3/library/math.html), which provides useful mathematical functions, such as trigonometric calculations and advanced mathematical operations. Once imported, you can access the functions and variables defined in the module using the syntax `module_name.function_name`.

Examples:

```py
import math

# Rounds a number
round_up = math.ceil(4.5)
round_down = math.floor(4.5)
print(round_up) # output: 5
print(round_down) # output: 4

# Calculates the power
base = 4
exponent = 3
power = math.pow(base, exponent)
print(power) # output: 64.0

# Calculates the square root
square_root = math.sqrt(81)
print(square_root) # output: 9.0

# Obtain the value of PI
pi = math.pi
print(pi) # output: 3.141592653589793
```

## Using Functions and Variables of a Module ✨

Modules in Python usually offer a variety of functions and variables that you can use in your programs. You can explore the module's documentation to discover all the possibilities it offers. Here are some examples of popular modules and how to use them.

### 1. Random Module

[random](https://docs.python.org/es/3/library/random.html) module allows you to generate random numbers. You can use the function`random()`  to obtain a random number between 0 and 1, and you can also use the function `uniform()` to obtain a random number between an initial value and a final value. Examples:

```py
import random

# Random floating number between 0 and 1
random_number = random.random()
print(random_number) # output: 0.20421564028383155

# Random number between a starting and ending range
starting_range = 5
ending_range = 15
random_number_one = random.uniform(starting_range, ending_range)
random_number_two = random.uniform(starting_range, ending_range)


print(random_number_one) # output: 9.141696242957385
print(random_number_two) # output: 7.795423441460806
```

`random()` function does not need parameters but function`uniform()`needs two parameters, the first parameter is the initial range which indicates that the random number it generates cannot be smaller than this initial value, and the second parameter is the final range which indicates that the random number cannot be larger than this final value.

### 2. Datetime Module

[datetime](https://docs.python.org/es/3/library/datetime.html) module allows us to work with dates and times, this module provides us with different methods to work with and modify them.

```py
import datetime

current_date_time = datetime.datetime.now()
print(current_date_time) # output: 2023-07-18 11:43:48.374080

specific_date = datetime.datetime(2023, 7, 18)
print(specific_date) # output: 2023-07-18 00:00:00

current_date = datetime.date.today()
print(current_date) # output: 2023-07-18
```

As you can see in the examples, the method `now()` returns the current date and time, this will depend on the country where you use it. The `datetime()` method allows you to pass a specific date and returns that date in an appropriate syntax, and the method `today()` only returns the current date, it does not return the time. These are just some examples. The module `datetime` has many methods that will be useful when working with dates in Python.

### 3. OS Module

[os](https://docs.python.org/es/3/library/os.html) (Operating System) module provides you with functions to interact with the operating system. You can get information about the current directory, create folders, delete files, and much more.

```py
import os

# Get the path of the current directory
current_path = os.getcwd()
print(current_path) # output: your current path, example: C:\Users\57320\OneDrive\etc...

# Create a new directory
directory_name = "math_directory"
os.mkdir(directory_name)

# Rename a file
old_name = "math_directory"
new_name = "renamed_directory"
os.rename(old_name, new_name)

# List files in the current directory
current_directory = os.listdir()
print(current_directory) # output: ['renamed directory', 'main.py', 'math_operations.py', '__pycache__']
```

`os` module has several methods that will help you interact with the operating system. You can create new files and directories, rename existing directories, list the files in a specific directory and much more. The example above shows just a few examples of what you can do with this module. This module offers a wide variety of methods that you can use to interact with your operating system.

There are multiple modules that you can use when working with Python, some of them are installed by default like **os** (Operating System), **re** (Regular Expressions), **datetime**, **random**, etc..., but some others like **Numpy** or **Pandas** libraries are not installed by default, to access these you must install them and then import them with the same syntax `import numpy`, `import pandas`.

## Creating Your Own Modules

In addition to using Python's built-in modules, you can also create your own custom modules. A custom module is simply a Python file with functions and variables that you can import into other programs. These modules will be especially useful when working on large Python projects such as an API.

To create your own module, follow these steps:

1.  Create a `.py` file with the name of your module, for example,  `my_module.py`.
2.  Defines the functions and variables inside the file.
3.  Import your module into other programs using the syntax  `import module_name` or if the module is inside a folder, use the syntax `from folder_name import module_name`.

Example:

#### math_operations.py

```py
def Operations(operation, num_one, num_two):
    if (operation == "add"):
        return num_one + num_two
    elif (operation == "subtract"):
        return num_one - num_two
    elif (operation == "multiply"):
        return num_one * num_two
    elif (operation == "divide"):
        return num_one / num_two if num_two != 0 else None
    else:
        return  None
```

#### main.py

```py
import math_operations as MO

def main():
    print("Welcome, here you can perform your mathematical operations.")
    operation = input("Enter the operation you wish to perform (Add, Subtract, Multiply or Divide): ").lower()

    if operation not in ["add", "subtract", "multiply", "divide"]:
        print("Operation not recognized. Please enter (Add, Subtract, Multiply or Divide).")
        return

    print(f"Please enter the numbers to perform the {operation}.")
   
    num_one = float(input("Enter the first number:"))
    num_two = float(input("Enter the second number:"))
    result = MO.Operations(operation, num_one, num_two)

    if result != None:
        print(f"The result of the {operation} is: {result}")

if  __name__  ==  "__main__":
    main()
```

In this example, we create a function that performs mathematical operations in module `math_operations.py` then we import this module into the main module `main.py`, in Python you can use the reserved word `as` to assign an alias to the modules you import, in this example we use the `MO` alias to rename module `math_operations`. After importing the module, we create a file that when executed will ask you, in the console, to first enter the type of operation you want to perform with the help of the reserved word `input()`, then it will ask you to enter the numbers to perform the operation and once you enter the numbers it will return the result.

Modules are a powerful tool for extending the capabilities of your Python programs. Now that you know the basics and how to use existing modules, you can explore further and create your own custom modules - the programming world is full of endless possibilities!

Code will set you free ✨👨‍💻
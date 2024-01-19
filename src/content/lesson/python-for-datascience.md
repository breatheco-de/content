---
title: "Python for Data Science"
subtitle: "Python is a multipurpose language, in this lesson you will understand how it's used in the datascience world"
cover_local: "../../assets/images/e16d59ad-4c11-4ca0-8bfc-5a9d147c6c2e.jpeg"
textColor: "white"
status: "draft"
date: "2022-01-15T16:36:30+00:00"
tags: ["data-science", "python", "pandas", "numpy"]
canonical: ""
---


**Python** is a very versatile programming language used in a multitude of cases: web development (both front and back end), mobile game development, simulations, networks, automations, and more. Additionally, it is the go-to language for working with data and developing algorithms for Artificial Intelligence, Data Science, and Machine Learning. Before we dive in, let's distinguish between the three terms mentioned:

| Term | Definition | Scope | Goal |
|:--------|:-----------|:---------|:---------|
| Artificial Intelligence (*AI*) | The study of how to make computers think and act like humans. | A broad field including subfields like machine learning, robotics, natural language processing, computer vision, etc. | Simulate human intelligence in machines. |
| Machine Learning (*ML*) | A subfield of AI focusing on developing algorithms and models that allow computers to learn from data. | A specific technique within artificial intelligence. | Make predictions or decisions without being explicitly programmed.|
| *Data Science* | An interdisciplinary field using statistical, computational, and analytical techniques to interpret, understand, and extract knowledge from structured and unstructured data.| Involves acquiring, cleaning, analyzing, and visualizing data, and may use AI and machine learning for analysis. | Discover patterns and obtain valuable insights from large datasets. |

![Discipline differences](https://github.com/breatheco-de/content/blob/master/src/assets/images/disciplines_differences.png?raw=true)

While AI focuses on simulating human intelligence, machine learning is a technique within AI that enables machines to learn from data, and data science is a broader discipline dealing with the entire process of working with data, from collection to interpretation, and may involve the use of AI and machine learning.

## Basic Python Guide

### `Hello, World!`

Every developer starting with a new language prints 'Hello, World!'. In Python, we can do it using the print function, which displays any data or text placed within its parentheses:

```py
print("Hello, World!")
```

### Variables

A *variable* in Python (and most programming languages) is a container that stores data that can vary over time. This value can be a number, text, a list of elements, etc. The special thing about this container is that we can give it a name to identify it and access what it holds when needed:

```py
name = "Juan"
age = 25
height = 1.80
is_student = True
```

Additionally, variables are mutable and can change over time. So, just as we can access their value to read it, we can also modify it:

```py
my_number = 10
print(f"Original number: {my_number}")

my_number = 60
print(f"New number: {my_number}")
```

This way, we have changed the value of the variable my_number from 10 to 60.

Variables are fundamental in programming because they:

1. Allow storing information for later use.
2. Facilitate operations between them (depending on their type).
3. Make the code more readable and organized. It's easier to understand person_height than to remember what a random number means in the code.

It's important to always give variables descriptive names so that we (or anyone reading our code) can easily understand what they are for and what they are supposed to contain.

### Data Types

Python has its own basic *data types*:

**Integer** (* `int`*):

Represents whole numbers, positive or negative.
```py
num_int1 = 123
num_int2 = -57
```

**Floating point** (* `float`*):

Represents real numbers with decimals.
```py
num_float1 = 3.14
num_float2 = -0.16
```

**String** (*`str`*): 

 Represents sequences of characters (text).
```py
str_var = "This is a sample text"
```

**Boolean** (* `bool`*):

 Represents truth values, i.e., True or False.
```py
bool_var1 = True
bool_var2 = False
```

**List** (* `list`*):

Represents an ordered collection of elements. Elements can be of any type, and its content can be modified (inserting, deleting, etc.).
```py
list_numbers = [1, 2, 3, 4, 5]
list_strings = ["A", "B", "C", "D"]
```

**Tuple** (*`tuple`*): 

Tuple (tuple): Similar to a list but immutable, meaning once created, its content cannot be changed.
```py
tuple_numbers = (1, 2, 3, 4, 5)
tuple_booleans = (True, False, False)
```

**Set** (*`set`*): 

Represents an unordered collection of unique elements (no duplicates).

```py
set_fruits = {"apple", "banana", "cherry"}
```

**Dictionary** (* `dict`*):

Represents an unordered collection of key-value pairs.
```py
dict_person = {
   "name": "Juan",
    "age": 25,
    "height": 1.80,
    "is_student": True
}
```

**Bytes** (*`bytes`*): 

Represents sequences of bytes, typically used for handling binary data.

```py
bytes_var = b"Hello"
```
In addition to these basic types, Python also offers modules and libraries that define more specialized data types.

### Operators

*Operators* are symbols indicating an operation:

**Mathematical Operators**

Mathematical operators perform arithmetic operations. Depending on the type of variables, the results can vary, and they don't necessarily have to be applied only to numbers.

- Addition: `+`
- Subtraction: `-`
- Multiplication: `*`
- Division: `/`
- Modulo: `%`

```py
x = 5
y = 3
z = x + y # z = 8
z = x * y # z = 15
```

**Logical Operators**

Logical operators evaluate conditions and return boolean values. They can be used in loops, conditionals, filters, etc., and are versatile and useful.

- Logical AND : `and`
- Logical OR : `or`
- Logical NOT (negation): `not`

```py
true_value = True
false_value = False
result = true_value and false_value  # result = False
result = true_value or false_value   # result = True
```

### Control Structures

Control structures in Python are instructions that allow modifying the flow of a program's execution. These structures enable making decisions, repeating code blocks, and jumping to different parts of the code depending on certain logical conditions.

In Python, the main control structures are:

#### Decision Structures

**`if`**

Allows executing a code block if a condition is met.

```py
age = 18
if age >= 18:
    print("You are of legal age.")

```

**`elif`**

Extends if to include and check other conditions.

```py
if age < 18:
    print("You are a minor.")
elif age >= 18:
    print("You are of legal age.")
```

**`else`**

Executes when none of the previous condition(s) is met.


```py
if age < 18:
    print("You are a minor.")
else:
    print("You are of legal age.")
```

#### Loop Structures

**`for`**

Repeats a code block a certain number of times or through the elements of a collection.

```py
for i in range(5):
    print(i)
# Displays on the screen 0, 1, 2, 3, 4

fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)
# Displays on the screen apple, banana, cherry
```

**`while`**

Repeats a code block while a condition is met.

```py
counter = 0
while counter < 5:
    print(counter)
    counter += 1
# Displays on the screen 0, 1, 2, 3, 4
```

#### Loop Control

**`break`**

Terminates the loop before it has completed all its iterations.

```py
for letter in "Python":
    if letter == "h":
        break
    print(letter)
# Prints P, y, t
```

**`continue`**

Skips to the next iteration of the loop, skipping the code that follows.

```py
for letter in "Python":
    if letter == "h":
        continue
    print(letter)
# Prints P, y, t, o, n
```

**`pass`**

Does nothing. Acts as a placeholder where a syntax statement is required, but no code execution is desired.

```py
for letter in "Python":
    if letter == "h":
        pass
    print(letter)
# Prints P, y, t, h, o, n
```

These control structures are essential for creating programs that can make decisions, repeat tasks, and handle different situations or inputs. By combining and nesting them, we can create complex workflows and sophisticated logic in our programs.

### Functions

A ** function ** is a reusable block of code that performs a specific task.

```py
def greeting(name):
    return f"Hello, {name}!!"

print(greeting("Juan"))
```

Functions provide a way to modularize code, allowing us to organize and reuse code snippets in different parts of our programs. This improves quality and facilitates debugging and maintenance.

A Python code combines all the elements we've just seen in this guide to carry out a specific task. Here's a simple program that takes the user's age, determines if they are a minor, an adult, or a senior citizen, and then prints a list of recommended activities for each group:

```py
# 1. Data Types
name = input("Please enter your name:")
age = int(input("Please enter your age:"))

# 2. Decision Structure
if age < 18:
    status = "minor"
    activities = ["study", "ride a bike", "hang out with friends"]
elif age < 65:
    status = "adult"
    activities = ["work", "read a book", "travel"]
else:
    status = "senior citizen"
    activities = ["rest", "read the newspaper", "take a walk"]

# 3. Loop Structure
print(f"\nHello, {name}. You are a {status}. Here are some activities you might consider:")
for activity in activities:
    print(f"- {activity}")
```

## Libraries

A **library** is a collection of predefined functions designed for a specific purpose. The goal is to simplify the developer's work and avoid programming them from scratch. There are many libraries organized based on their utility. Since Python is the most used language in the fields of Data Science and Artificial Intelligence, some of its most used libraries are related to these fields:

- Scikit-learn
- NuPIC
- Ramp
- Numpy
- Pandas
- TensorFlow
- Keras
- Pipenv
- Scipy
- Matplotlib

Most of these are used in processes like Machine Learning, NLP, Computer Vision, and many other areas of artificial intelligence. Therefore, it's crucial to know and be able to use some of these libraries, which are key to any data science work.

In this boot camp, we'll dive deep into Numpy, a library used to process and work with multidimensional arrays efficiently, Pandas, built on Numpy and allowing working with tabular data structures called DataFrames, Matplotlib, enabling the option to visualize data and its relationships, and scikit-learn, widely used for building Machine Learning models.

## Performance

All software that is programmed must run on hardware, which is a set of physical elements constituting a computer system. The more efficient the code you implement, the greater the utilization of hardware resources, the shorter the execution times, the greater the possibility of parallelizing tasks, etc.

When building artificial intelligence models, performance is a major concern because processing power is the biggest limitation in this field at the moment. Therefore, building efficient code and functions is a fundamental pillar. We'll also learn about it.

## Code Development

There are two main ways to program in Python, and each of them can be carried out using different tools:

- **Flexible Programming**: It is carried out using web interfaces like Jupyter Notebook or Google Collab. It is characterized by not having a predefined code structure and is designed for quick and trial-and-error developments. In this type of development, **notebooks** are generated.

- **Productive Programming**: It is done in **Integrated Development Environments (IDE)**, which are software programs that allow end-to-end development of an application or a complete service. Some of the most used in Python are **Visual Studio Code** and **Spyder**, among others.

Typically, the development of a product, model, or Machine Learning service consists of two phases: an exploratory phase and a development phase. We first program in notebooks and conduct proof of concept tests to find the best data preprocessing, analysis, and prediction. After that, we prepare a complete development to operationalize the model.

### Project Structure

We will use a template for our projects called [Cookie Cutter Datascience](https://drivendata.github.io/cookiecutter-data-science/). Using a template is always a good idea to organize our files and project workflow.

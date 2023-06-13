---
title: "What is an expression in Python?"
subtitle: "Discover what expressions are in Python and how they play a crucial role in coding. Learn about their syntax, types, and practical examples to enhance your Python programming skills"
tags: ["python"]
authors: ["javierseiglie"]
status: "draft"

---

An expression in [Python](https://4geeks.com/lesson/intro-to-python) is a combination of values, variables, operators, and function calls that produce a result. It represents a computation or a calculation. In the following example, we use an expression to find the circumference of a circle with a radius of 4cm.

```py
circle_radius = 4 # a statement
number_pi = 3.1415926535 # a statement

circumference = (number_pi * 2) * circle_radius # an expression
rounded_circumference = round(circumference, 2)

print(rounded_circumference) # Output: 25.13
```

In this example, we use the Python expression `(number_pi * 2) * circle_radius` to find the circumference of a circle, then we use the `round()` function to take the first two digits of the result, in this expression the number pi `3.1415926535` is multiplied by 2, and then that result is multiplied by the radius of the circle `4`, that gives us the circumference of the circle `25.13 cm`.

## What is an expression in Python programming?

An expression in [python](https://docs.python.org/3/) is a combination of operators that produces a result or a value after the calculation, it is the building block of any Python program, enabling us to perform calculations, manipulate data, make decisions, and much more. 

Expressions are often confused with statements in Python, the main difference between a statement and an expression is that an expression performs a calculation and returns a value while a statement performs an action but it doesn't return anything.

Here are some examples of statements and expressions:

| Statements          | Expressions                  |
|---------------------|------------------------------|
| x = 15              | z = (2 + 3) * 4              |
| print(x)            | z = z * len("Hello!")        |
| if x > 10: print(x) | n = "hello" + " " + "world!" |
         
As mentioned before, an expression can be a combination of values, variables, operators, and function calls. Here are some examples of what you can use in a Python expression:

> Values
```py
#literals
7
3.14159
"Hello world!"

#variables
x
z

#function calls
len("Hello")
round(3.14159, 2)
```
> Operators
```py
# arithmetic operators
5 + 4 # Addition
2 - 1 # Subtraction
7 * 9 # Multiplication
6 / 2 # Division
9 % 2 # Module

# Comparison operators
x == z # Equal to
x > z # Greater then
x < z # Less then
x != z # Not equal to

# Logical operators
x and z # Logical AND
x or z # Logical OR
not z # Logical NOT

# Assignment operators
x = z # Assignment
x += # Adsition assignment
```

## Examples of expressions in Python

There are many use cases for expression in Python, you can use them to perform mathematical calculations, string concatenation, and many more. we're gonna see some examples of how to use them below.

### 1. Mathematical calculation

One of the most usual and important uses of an **expression** in Python is to make a mathematical calculation.

```py
circle_radius = 7
number_pi = 3.14159

total_area = round(number_pi * (circle_radius * 2), 2)
print(total_area, "cm") # Output: 43.98 cm
```

Here we use the Python mathematical expression `number_pi * (circle_radius * 2)` to find the area of a circle with a radius of `7cm`, then we use the Python `round()` method to display only the first two numbers of the result and store that number in the variable `total_area`.

### 2. String concatenation

Another useful use of expressions in Python is to concatenate two strings into one.

```py
message_one = "Hello"
message_two = "world!!!"

full_message = message_one + " " + message_two
print(full_message) # Output: Hello world!!!
```

In this example, we use the Python expression `message_one + " " + message_two` to concatenate two strings into one, first, we add the value of the variable `message_one` with an empty space `" "` then we add to it the value of the variable `message_two`.

### 3. Conditional expression

Another way that you can use an expression is to create a conditional expression using Python conditionals.

```py
x = 15
z = 20

max_number = x if x > z else z
print(max_number) # Output: 20
```

In this code, we want to assign the largest number between two variables to the variable `max_number` in order to do that, we use the Python expression `x if x > z else z` to assign it the largest of them. First, we create a condition, if the value of the variable `x` is greater than the value of the variable `z` we assign the value of `x` to the variable `max_number` `x if x > z`, but if the variable `x` is not greater than `z` then we assign the value of `z` to variable `max_number` `else z`, in this way we ensure that the variable `max_number` has the greater number between the two.

### 4. List Comprehension

You also can use an expression to create a list comprehension in Python.

```py
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
squared_even_numbers = [num**2 for num in numbers if num % 2 == 0]

print(squared_even_numbers) # Output: [4, 16, 36, 64, 100]
```

In this example, we want to create an array that has all the even numbers squared from the array `numbers`, to do this, we create a list comprehension with the condition that is going to store in the new array only the even numbers in the array `numbers` with the expression `if num % 2 == 0` then we want to save those numbers squared, we do this with the expression `num**2 for num in numbers`, in this way, we store in the variable `squared_even_numbers` only the even numbers from the array `numbers`.

## Conclusion

We can use an expression in Python to perform mathematical calculations, manipulate data, and many more things. There are many use cases for Python expressions not only the ones mentioned in this article. You will probably use Python expressions many times as you work with the [Python programming language](https://4geeks.com/lesson/intro-to-python) you can even make use of [Python libraries](https://4geeks.com/lesson/intro-to-pandas) such as [numpy](https://numpy.org/doc/) (Numerical Python) and Python expressions to perform more advanced or complex mathematical equations. You can read more about this and other topics at [4Geek's Blog](https://4geeks.com/).

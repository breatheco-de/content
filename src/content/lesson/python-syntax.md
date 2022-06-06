---
title: "Introduction to Python"
subtitle: "Learn the basics of python syntax, loops, data-types and conditionals"
date: "2020-10-19T16:36:31+00:00"
cover_local: "../../assets/images/4cc6fa0b-2530-4052-aa7e-8dac03788ac3.png"
textColor: "white"
status: "published"
author: ["alesanchezr"]
syntax: ["python"]
tags: ["Conditionals","Logical operators","If...else","Conditions","Python"]

---

# Intro to Python

This lesson aims to familiarize you with basic Python syntax and how to do the essential things like printing something on the terminal, manipulating strings, and understanding how to use variables, functions, logical operations, and conditionals. This lesson should be the first to read in your python journey.

Please know that there are other lessons explaining each concept in detail; this is just a basic overall to help you get the big picture.

## Why Python?

Python is the fastest-growing backend language in the world. It's the most versatile and easy-to-code language with one of the most robust communities.

When you compare it to other backend languages, Python is leading in almost every functionality it offers: Data Science, AI, API developments, Web Developments, Networks, Automation, etc. 

**Here are some of the reasons Python has come to this point:**

|**Simplicity**   |**Performance**    |
|:---------------:|:------------------:|
| Python was meant to be simple and easy. Here is the Python manifest:<br>https://en.wikipedia.org/wiki/Zen_of_Python<br><br>**Note:** No more semicolons or curly brackets anymore, or declaring variables, or the confusing "this" functionality.     | Python is faster than Java, PHP, Ruby and 90% of the other backend languages. Only low-level languages like C++ (hard to use) or very specialized like Node.js can beat it.<br><br>Python scalability has been proven over and over with applications like Google Search Engine, Youtube, Google Apps, etc.     |


|**Community**   |**Tools**    |
|:---------------:|:------------------:|
|Python is Google's official language. It's also one of the oldest languages with huge communities around each of its libraries\tools. MIT uses it to teach code. NASA to build rockets. Quora, Facebook, Yahoo, Amazon, etc. Almost every big company in the world has to use it!      |Most of the Python libraries are the best at what they do: [MathLab](https://www.mathworks.com/help/matlab/matlab-engine-for-python.html?requestedDomain=true) (for data processing), [Pandas](https://pandas.pydata.org/) (big data), [Web.py](http://webpy.org/) (webserver), [Django](https://www.djangoproject.com/) (web framework), [PyBrain](http://pybrain.org/) (AI), [TensorFlow](https://www.tensorflow.org/) (Machine Learning), etc.  We could be here all day! The most amazing thing is that these libraries are only one "pip install" away (just like when using NPM with JS).      |

## Python Syntax

### Printing a value

An essential thing you can do in any programming language is print some messages on the terminal. In Python you can use the `print` statement:

```python
print("Hello, this is a message you can show to the user")
```

### Declaring a variable

Like most programming languages (or math), Python lets you store data in variables for later use; variables are a powerful tool because they allow your code to be reusable for any variable value in the future, for example: To calculate a square area you have to do:

```python
area = width * width
```
Your code will calculate the `area` no matter the value of `width`:

```python
# if width=6 in the future
area = 6 * 6

# if width=7 in the future
area = 7*7
```

> Variables make your code reusable and dynamic.

### Printing a variable

You can also print from a stored variable value, or even concatenate it to another string using the plus `+` operator:

```python
name = "Bob"
# print only the name
print(name) 
# or print a greeting that also includes the name
print("Hello "+name+" how are you?")
```

### Data-types

If you don't remember or don't know, data types are the types of information you can store in a variable: Numbers, text, lists, etc. Every programming language has its types of data. In Python, these are the types (there are more types that we will review later on):

| Group type 		| Type 					| Description |
| -----------------	| ------------------------------------- | ----------------------------- |
| Text Type		| str					| words, paragraphs, etc. 	|
| Numeric Types	| int, float, complex	| math operations, etc.		|
| Sequence Types	| list, tuple, range		| multiple values at once one after the other	|
| Mapping Type	| dict				| multiple values without sequence	|
| Boolean Type	| bool				| only `True` or `False` |


### Casting (parsing) Data-Types

It's important to highlight that the string `"1"` is not the same as the number `1`, so if you want to sum `"1" + 1`, the result will not be 2. Instead, the computer will raise an error.

**Why?**

Because types matter, you have to be consistent with the types, if you want to sum the string "5" with the string "2" you have to convert them to integers first like this:

```python
# In python subtracting strings will throw an error, instead you should do: 

result = int('5') - int('2')
# result now is equal to 3

```

On the other hand, if you sum the string `"5"` with the string `"2"`, the result will be ` "52" ` because that is the default operation for summing strings: Concatenation.

> We will talk more about concatenation in another lesson

### Lists and Touples

All the major programming languages have ways of storing lists of values together; these are called `arrays` or `lists`.

A Python list is an ordered succession of values, for example:

```python
ages = [23,45,34,2,65,7,32,54,3,3,6,4]
names ["Maria", "Willy", "Anyka", "Shan"]
```

It's important to remember that the order matters. Each of the values in a list has a position that will always be the same. You can retrieve any value inside using the position they take in the list, for example:

```python
print(ages[0]) # will print 23 because its position 0
print(ages[4]) # will print 65 because its position 4
```
> Important: Lists start at position 0

Lists are broadly used in every programming language, especially in Python, because Machine Learning uses enormous lists of information.

> Note: we will discuss lists in more detail soon.

## Python Algorithms

After knowing the basics of Python you can start building algorithms:
An Algorithm is a succession of lines of code with a common purpose.
The lines of code go from top to bottom (from line 1 to line N).
For example, the following is a very simple algorithm that prints the full name of the given first and last name.

```python
name = "Taylor"
last_name = "Swift"

print("Miss "+name + " " + last_name) # prints Miss Taylor Swift
```

The first line is `name = "Taylor"` and its executed first; the last line with the `print` statement already knows the value of `name` because it was completed first (earlier line)

### Conditionals

Conditions are fantastic because they let you skip or conditionally execute parts of your algorithms, making them very flexible and intelligent. For example, we could conditionally print "Miss" or "Mrs" depending on the relationship status:

```python
relationship_status = "married"
name = "Taylor"
last_name = "Swift"

if relationship_status == "single":
	print("Miss "+name + " " + last_name) # prints Miss Taylor Swift
else:
	print("Mrs "+name + " " + last_name) # prints Mrs Taylor Swift
```

Note: The `if...else...` statement reads like English. Also, to make comparisons, you have to use two equals `==` instead of one, and that is called a **Logical Expression**

### Logical Operations and Expressions

Computers think of everything in black or white. Everything is either True or False. All the decisions in a computer are reduced into a simple **Boolean**. You can prepare a computer to solve particular problems, if you write code that asks the proper questions required to solve that problem.

For example, if I want a computer to give candy only to kids older than 13 years of age, I can instruct the computer to ask:

 **Is this kid's age greater than 13? Yes or no?**

**In Python, you can instruct the computer to do the following logical operations:**

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
|AND             |and             |With AND, both sides HAVE TO BE TRUE in order for everything to become true.<br>Is (5 == 5 and 3 > 1) ? True!<br>Is ('Ramon' == 'Pedro' and 2 == 2) ? False!    |
|OR     |\|\|     |Is ('Oscar' or 'Maria' or 2 != 2)? True!<br>Is (5 == '5' and 'Ramon' != 'Pedro') or (2 == 2)? True!   |
|NOT     |!     |NOT will be the exact opposite of the result of the logical operator:<br>Is !(5 > 5)? True!<br>Is !(True)? False!    |

## Control the Flow of Your Code

Okay, now is when everything starts getting fun! To control your applications flow, you'll have several options, and you are going to use each of them every single day. So, you must become comfortable using them.

### Conditionals: If…else…

The first tool you have is the if…else conditional. You can tell the computer to skip any part of your code depending on the current value of your variables.
The if statement allows you to execute a piece of code if certain conditions are met (or are true). The "else" statement will execute an alternate piece of code in case the condition is false.

```python
if number < 18:
    print("This will show if number is less than 18")
else:
     print("Number is more or equal than 18")
```

### Loops

The last trick we will see today is **loops**. Loops are amazing because they let you repeat the execution of one or more lines of code without having to write the same line several times:

```python
for n in range(10):
	print("This line will print 10 times")
```

You can also loop lists of values:

```python
names = ["Bobby", "Diddi", "Kaylor"]
for n in names:
	print("The next name is "+n)
```

Note: the above code will print each name on the console.

## Ready to start learning?

Please don't get overwhelmed because we will be going over each of these concepts in the following lessons. You will get more opportunities to practice, learn and unleash your brain´s potential!

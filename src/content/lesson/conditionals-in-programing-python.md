---
title: "Logical conditions in Python explained"
subtitle: "Using conditionals allow you to control the flow of your code and make programatic decisions"
date: "2020-03-11"
cover: "https://ucarecdn.com/4cc6fa0b-2530-4052-aa7e-8dac03788ac3/"
textColor: "white"
status: "published"
author: ["alesanchezr"]
syntax: ["python"]
tags: ["Conditionals", "Logical operators", "If...else", "Conditions","Python"]
---

## Introduction to conditionals in Python

There are 5 skils you need to master in your toolset for building algorithms with python:

1. Variables.
2. `Conditionals`.
3. Lists (or arrays).
4. Loops.
5. Functions.

The use of `conditionals` is the easies way we have to make decisions when coding our algorithms.

Let's say we are building a program to help us pick what to wear, but we hate the blue color, we could tell the computer to avoid that color using a statement like this:  

```python
if color == 'blue':
    #do something
else:
    #so something else or do nothing
```
  
![Condicionales](https://ucarecdn.com/e73b673e-d744-45a7-a1ed-61a1dae49560/)

[[info]]
|:link: Using `switch` is not available in python.

## What is a logical expression in Python?

Logical expressions let you conditionally skip a series of lines of your code.
The best wat to understand them, is to think of them like questions you can ask to the computer about your variables, for example:

1. `if user_age > 21:`
2. `if day == "tuesday"`
3. `if car_model == "toyota" and number_of_tires == 6:`

In order to ask a question, or conditionally excuse a particular set of lines, you first need to have data (information) stored on useful variables, above we had the variables `user_age`, `day`, `car_model` and `number_of_tires`.

If we don't have the information pre-stored in variables we are not able to ask any question, it is all about strategy and planning!

For example, if we have the user's age stored in a variable `age` then, and only then, we are able to code for something like:

```python
# se utiliza dos veces igual (=) cuando quieres comparar en lugar de asigner el valor
if edad == 21:
    print("You are old enough!!")
```

## What type of conditions/questions can we use/ask?

The previous example was a simple condition, but in real life picking what to ware involves a combination of several conditions to make the final decision, for example: Lets look at this algorithm that tells if you have a flue

![Hit by car or have a flu](https://ucarecdn.com/03ed6b76-0ee0-4b04-bd45-0fb58ae6f800/)

If you want to represent this algorithm in Python it will look something like this:

```python
feels_like_hit_by_train = True
you_were_hit_by_train = False

if feels_like_hit_by_train == True:
    if you_were_hit_by_train == True:
        print("You don't have a flue")
    else:
        print("You have a flue")
else:
    print("You don't have a flue")
```
Basically, this algorithm has two variables to consider: `feels_like_hit_by_train` and `you_were_hit_by_train`.
Our job as developers is to sit down and try to prepare a strategy and come up with an algorithm that solves a problem.

## Logical Operators in Python

Mostly all the questions can be asked using the following comparisons: `==`, `>`, `<`, `!=`, `python> is None`, `python> is not None`, `in`:

| Operator      | Example       | Description  |
| ----          | ----          | --------  |
| `==`          | `if a == b`   | if the value of variable A is **exactly** the value of B (same data-type and value)   |
| `<`           | `if a < b`    | if the value of variable A is **less** than the value of B   |
| `>`           | `if a > b`    | if the value of variable A is **more** than the value of B |
| `!=`          | `if a != b`   | if the value of variable A is **different** than the value of B |
| `is not None` | `if a is not None`    | This is self-explanatory, isn't it?   |
| `is None`     | `if a is None`    | This is self-explanatory, isn't it?   |
| `in`          | `if name in ['bob','maria','nancy']`  | If the value of name is contained inside the list of names    |

### `AND` & `OR` Operators in python

Another way to write the algorithm is to combine to questions in the same condition using the `and` and `or`:

```python
feels_like_hit_by_train = True
you_were_hit_by_train = False

if feels_like_hit_by_train and you_were_hit_by_train:
    print("You don't have a flue")
elif feels_like_hit_by_train:
    print("You have a flue")
```

As you can see here we are using `elif` together for the first time, for faster coding. Another trick you can use for faster coding:

| Original | Equivalent |
| --- | --- |
| instead of `if(feels_like_hit_by_train == true)` | you write `if(feels_like_hit_by_train)`  |
| instead of `if(you_were_hit_by_train == false)` | you write `if(!you_were_hit_by_train)` |


## If...else in Python

You can also use the `else` expression to refer to the negation of the first condition:

```python
if (color == "blue"):
    # Discard it
else:
    # Put it on your closed

age = 12
if (age < 18):
    print("Old enough")
else:
    print("Not old enough")
```

You can also nest several if...else conditions one on top of each other like this:

```python
if (age < 16):
    # You cannot do anything
elif (age < 18):
    # At this point, we know it's older than 15 because if not it would have entered
    # into the first condition
elif (age < 21):
    # If the algorithm enters here, we know its older than 17
elif:
    # If the algorithm enters here, we know its older than 20
```

Here is another example that runs an algorithm to understand if a number is in the "hundreds".

```python
valor = 14

if (valor < 10):
  print("Single unit value")
elif (valor < 100):
  print("dozens")
elif (valor < 1000):
  print("hundreds")
elif (valor < 10000):
  print("thousans")
else:
  print("hundrends of thousans or maybe more")
```

## The `switch` statement in Python

Python does not have a `switch` statement.


## Conclusions

t's all about what question to ask: The previous example was a simple condition, but real live it's not that simple, there are lot's of nested conditions and complicated flows that will challenge your skills to the limit, for example:

This will the algorithm to pick what to wear during valentine's day:

![What to ware in valentine's day](https://ucarecdn.com/87f2be86-32c3-4bfc-8db4-dbd0d979e4d3/)

```python
if going_out:
    if can_I_get_burger:
        if place_bottle_white:
            if cool_mix:
                # doo something
    else:
        if blazers > 3:
            # doo something
        else:
            # doo something
    elif she_pants:
        # doo something
    else:
        # doo something
else:
    if naked_she_door:
        # doo something
    elif blazers > 3:
        # doo something
    else:
        # doo something
```

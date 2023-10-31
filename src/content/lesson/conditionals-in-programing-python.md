---
title: "Logical conditions in Python explained"
subtitle: "Using conditionals allow you to control the flow of your code and make programatic decisions"
date: "2020-10-19T16:36:31+00:00"
cover_local: "../../assets/images/4cc6fa0b-2530-4052-aa7e-8dac03788ac3.png"
textColor: "white"
status: "published"
author: ["alesanchezr"]
syntax: ["python"]
tags: ["Conditionals","Logical operators","If...else","Conditions","Python"]

---

## Introduction to conditionals in Python

There are 5 skills you need to master in your tool set for building algorithms with python:

1. Variables.
2. Conditionals.
3. Lists (or arrays).
4. Loops.
5. Functions.

The use of `conditionals` is the easiest way we have to make decisions when coding our algorithms.

Let's say we are building a program to help us pick what to wear, but we hate the blue color, we could tell the computer to avoid that color using a statement like this:  

```python
if color == 'blue':
    #do something
else:
    #do something else or do nothing
```
  
![Condicionales](https://github.com/breatheco-de/content/blob/master/src/assets/images/e73b673e-d744-45a7-a1ed-61a1dae49560.png?raw=true)

> :link: Using `switch` is not available in python.

## What is a logical expression in Python?

Logical expressions let you conditionally skip a series of lines of your code.
The best way to understand them, is to think of them like questions you can ask the computer about your variables, for example:

1. `if user_age > 21:`
2. `if day == "tuesday"`
3. `if car_model == "toyota" and number_of_tires == 6:`

In order to ask a question, or conditionally excuse a particular set of lines, you first need to have data (information) stored on useful variables, above we had the variables `user_age`, `day`, `car_model` and `number_of_tires`.

If we don't have the information pre-stored in variables we are not able to ask any questions, it is all about strategy and planning!

For example, if we have the user's age stored in a variable `age` then, and only then, we are able to code for something like:

```python
# We use two equal signs (==) when we want to compare two variables for equality
if age == 21:
    print("You are old enough!!")
```

## What type of conditions/questions can we use/ask?

The previous example was a simple condition, but in real life picking what to wear involves a combination of several conditions to make the final decision, for example: Let's look at this algorithm that tells you if you have the flu

![Hit by car or have a flu](https://github.com/breatheco-de/content/blob/master/src/assets/images/03ed6b76-0ee0-4b04-bd45-0fb58ae6f800.jpeg?raw=true)

If you want to represent this algorithm in Python, it will look something like this:

```python
feels_like_hit_by_train = True
you_were_hit_by_train = False

if feels_like_hit_by_train == True:
    if you_were_hit_by_train == True:
        print("You don't have a flu")
    else:
        print("You have a flu")
else:
    print("You don't have a flu")
```

Basically, this algorithm has two variables to consider: `feels_like_hit_by_train` and `you_were_hit_by_train`.
Our job as developers is to sit down and try to prepare a strategy and come up with an algorithm that solves a problem.

## Logical Operators in Python

Mostly all the questions can be asked using the following comparisons: `==`, `>`, `<`, `!=`, ` is None`, ` is not None`, `in`:

| Operator      | Example       | Description  |
| ----          | ----          | --------  |
| `==`          | `if a == b`   | if the value of variable A is **identical** to the value of B (same data-type and value)   |
| `<`           | `if a < b`    | if the value of variable A is **less** than the value of B   |
| `>`           | `if a > b`    | if the value of variable A is **greater** than the value of B   |
| `!=`          | `if a != b`   | if the value of variable A is **different** (not identical) from the value of B |
| `is not None` | `if a is not None`    | This is self-explanatory, isn't it?   |
| `is None`     | `if a is None`    | This is self-explanatory, isn't it?   |
| `in`          | `if name in ['bob','maria','nancy']`  | If the value of name is contained inside the list of names   |

### `AND` & `OR` Operators in Python

Another way to write the algorithm is to combine questions in the same condition using the `AND` and `OR`:

```python
feels_like_hit_by_train = True
you_were_hit_by_train = False

if feels_like_hit_by_train and you_were_hit_by_train:
    print("You don't have a flu")
elif feels_like_hit_by_train:
    print("You have a flu")
```

As you can see we are using `elif` together for the first time, for faster coding. Another trick you can use for faster coding:

| Original | Equivalent |
| --- | --- |
| instead of `if(feels_like_hit_by_train == true)` | you write `if(feels_like_hit_by_train)`  |
| instead of `if(you_were_hit_by_train == false)` | you write `if(!you_were_hit_by_train)` |

## If...else in Python

You can also use the `else` expression to refer to the negation of the first condition:

```python
if color == "blue":
    # Discard this clothing item
else:
    # Put it in your closet

age = 12
if age < 18:
    print("Old enough")
else:
    print("Not old enough")
```

You can also nest several if...else conditions on top of one another, like this:

```python
if age < 16:
    # You cannot do anything
elif age < 18:
    # At this point, we know it's older than 15 because if not it would have entered
    # into the first condition
elif age < 21:
    # If the algorithm enters here, we know its older than 17
else:
    # If the algorithm enters here, we know its older than 20
```

Here is another example that runs an algorithm to find out if a number is in the "hundreds".

```python
value = 14

if value < 10:
  print("Single unit value")
elif value < 100:
  print("dozens")
elif value < 1000:
  print("hundreds")
elif value < 10000:
  print("thousands")
else:
  print("hundrends of thousands, or maybe more")
```

## The `switch` statement in Python

Python does not have a `switch` statement.

## Conclusion

It's all about what question to ask. The previous example was a simple condition, but real life is not that simple. There are lots of nested conditions and complicated flows that will challenge your skills to the limit. For example:

This will be the algorithm to pick what to wear on Valentine's Day:

![What to ware in valentine's day](https://github.com/breatheco-de/content/blob/master/src/assets/images/87f2be86-32c3-4bfc-8db4-dbd0d979e4d3.jpeg?raw=true)

```python
if going_out:
    if can_I_get_burger:
        if place_bottle_white:
            if cool_mix:
                # do something
    else:
        if blazers > 3:
            # do something
        else:
            # do something
    elif she_pants:
        # do something
    else:
        # do something
else:
    if naked_she_door:
        # do something
    elif blazers > 3:
        # do something
    else:
        # do something
```

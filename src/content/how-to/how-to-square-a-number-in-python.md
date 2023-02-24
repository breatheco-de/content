---
title: "How to square a number in python"
subtitle: "On how to square a number in Python we explore different ways that includes pow(), math.pow, the power operator (**) as we create as well our own function to receive exactly this squared value"
tags: ["python", "power", "square"]
date: "2023-02-06T16:36:30+00:00"
authors: ['Javier Seiglie']
status: "draft"

---

The most straight forward way to square a number in Python would be to use the built-in **pow** (power) method. It will receive two parameters, the number to square and the ammount of times to power that number.  

```python
square = pow(6, 2)
print(square)
#Output-> 36
```

## Creating the function ourself:

The first method we are presenting is exactly, creating a function that will return the squared number that receive. 

As you should already know, a squared number is the number multiplyed by itself, so, let say the square of `2` would be `4` because `2*2=4`. If we were to choose `5`, we would receive `25` and so on.

So, keeping that in mind, we can create our function:

```python
def square(num):
    return num*num

print(square(3))
#Output-> 9
```

## Using the power(square) operator:

Python comes with a built in with a power (square) operator `**`. The syntax is quite straight forward as all the other logic or math operators.

```python
def squareOperator(base):
    return base ** 2

print(squareOperator(4))
#Output-> 16
```

## Using the power() function:

As the power operator, the power() function comes built-in and ready to work on Python. The syntax is as simple as:

```python
def squarePow(base, power):
    return base ** power

print(squarePow(5, 2))
#Output-> 25
```

## Using the math.pow():

The only difference between the `math.pow()` and `pow` resides in the first needs the math module imported returns always a float number, even if the result of the operation has not a floating point (if you want to learn more about Float numbers, check [What is a float in Python](https://4geeks.com/how-to/what-is-float-in-python "What is a float in Python")).

```python
import math

def squareMathPow(base, power):
    return math.pow(base, power)

print(squareMathPow(5,2))
#Output-> 25
```

<<<<<<< HEAD
Hope you enjoyed the reading and keep on the Geek side!
=======
You can find more of these articles at [4Geeks](https://4geeks.com/). Hope you enjoyed the reading and keep on the Geek side!
>>>>>>> 861f5abfb6c6de34cfe290e2ae0068d96af20482

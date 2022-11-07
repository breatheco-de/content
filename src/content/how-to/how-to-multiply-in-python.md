---
title: "How to multiply in python"
subtitle: ""
tags: ["python"]
date: "2020-10-19T16:36:30+00:00"
authors: ['Javier Seiglie']
status: "draft"

---

# How to Multiply in Python

Short answer: 
```python
num1*num2
```

- Multiply numbers with the * operator
- Multiply numbers without the * operator
- Multiply as a power operation alternative
- Multiply strings
- Multiply lists of numbers with * operator
- Multiply lists of numbers with numpy
- Multiply lists of numbers with lambda and reduce
- Multiply lists of numbers with math.prod()

# Multiply numbers with the * operator:

The most common way to multiply 2 (or more) numbers would be using the operator **(*)**  this is the sintax to use it:


syntax: `num1*num2`

Complete example:

```python
def multiply (num1, num2):
	return num1*num2

print(multiply(3, 2))
#Output: 6
```
But how could we achieve this without using this operator?


# Multiply numbers without the * operator:

Let´s say that you dont want to use the  **(*)** operator. Here´s the way  to do it:

```python
def multWithout(num1, num2):
    result = 0
    for x in range(num2):
        result +=num1
    return result

print(multWithout(2,10))
#Output: 20
```
We created a function that receives 2 numbers, we declared a variable `result` and start is as "0" to store our values  and we´ll loop as many times as `num2`. For each itaration result will be updated adding `num1` to the stored ammount. 


# Multiply as a power operation alternative

The process would be pretty much alike, but the `result` variable would start as 1, since we will be multiplying instead of adding and as we all know, multiplying with "0" is not a very good idea.

```python
def powerMult(num1, num2):
    result = 1
    for x in range(num2):
        result *= num1 
    return result

print(mult2(3, 3))
# 27
```
# Multiply strings

Multiplying strings will follow the same structure, here´s an example:

```python 
def multString (str, num):
    return  str*num

print(multString("How to multiply in python ", 2))
#Output: How to multiply in python How to multiply in python 
```

The function `multString` recevies 2 elements, the string we want to multiply and the second element will be the ammount of times it will repeat (multiply).

# Multiply lists of numbers with * operator

The way to multiply an arr using the * operator will ask to loop through the given array and multiply each element storing the value on a `result` variable to return it. 

```python
arr = [1, 2, 3, 4, 5]

def multiplyList(list):
 
    # Multiplying one by one
    result = 1
    for x in list:
        result = result * x
    return result

print (multiplyList(arr))
#Output: 120
```

# Multiply lists of numbers with numpy

Numpy is a library widely used by many programmers to handle  complex mathematics operations. Here´s how to use it to multiply lists:

```python
import numpy
arr = [1, 2, 3, 4, 5]

def multNumpy(arr):
    return numpy.prod(arr)

print(multNumpy(arr))
#Output: 120
```
Firsdt we need to `import numpy` to be able to use it, and then with `numpy.prod()` we pass the element we want to multiply (in this case, our array of numbers)


# Multiply lists of numbers with lambda and reduce

Lambda is one of the most used methods in the python library, here´s how to use it along with `reduce` to multiply lists

```python
from functools import reduce
arr = [1, 2, 3, 4, 5]

def MultListLambaReduce(arr):
    return reduce((lambda x, y: x* y), arr)

print(MultListLambaReduce(arr))
#Output: 120
```

# Multiply lists of numbers with math.prod()

Using the `math` library you can multiply a list of numbers, here´s an example:

```python
import math
arr = [1, 2, 3, 4, 5]

def multProd(arr):
    return math.prod(arr)

#Output: 120
```

We covered different ways to multiply in python numbers, strings and lists (arrays of numbers) with different methos, from the most simple and usual one, as simple as using the **(*)** operator, to more complex ones using libraries like `numpy` or `math`.

Hope you enjoy your reading and keep on the Geek side.

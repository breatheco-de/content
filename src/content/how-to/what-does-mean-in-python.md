# What Does // Mean in Python?

The double slash `//` operator in Python is used to divide a number by its floor. The first number is divided by the second number using the `//` operator, and the result is rounded to the nearest integer (or whole number). Floor division merely differs from ordinary division in that it always produces the largest integer.

```python
num1 = 19
num2 = 5
num3 = num1 / num2
num4 = num1 // num2

print("normal division of", num1, "by", num2, "=", num3)
print("floor division of", num1, "by", num2, "=", num4)

# Output: 
# normal division of 19 by 5 = 3.8
# floor division of 19 by 5 = 3
```

<p align="center">
  <img src="https://i.ytimg.com/vi/mv5uHSXLkhs/maxresdefault.jpg" width='450px'/>
</p>

## What Does // Mean in Python? Points of Interest

 - [Syntax of the Floor Division](#syntax)
	 - [Regular Division vs Floor Division (`/` vs `//`)](#versus)
- [Working with Negative Numbers in Floor Divisions](#negative)
- [Working with Floats in Floor Divisions](#floats)
- [Alternative methods for `//`](#alternative)
	- [`__floordiv__()` Function in Python](#floordiv)
	- [`math.floor()` Function in Python](#math)
	- [`math.ceil()` Function in Python](#ceil)
- [Summary](#summary)

## Syntax of the Floor Division <a name="syntax"></a>

The syntax for using the floor division is given as follows:

```py
quotient = divident // divisor
```
The double slash `//` operator is used in almost identical ways to ordinary division. The only difference is that you use a double slash `//` rather than a single slash `/`.

### Regular Division vs Floor Division (`/` vs `//`) <a name="versus"></a>

The result of regular division (using the `/` operator) is `45/6=7.5`, but using `//` has floored `7.5` down to `7`.

If one of the operands is a float in floor division, the output will also be a float, whereas the result of ordinary division is always a float.

The following is an illustration of this:

```py
num1 = 19
num2 = 5
num3 = num1 / num2
num4 = num1 // num2

print("normal division of", num1, "by", num2, "=", num3)
print("floor division of", num1, "by", num2, "=", num4)

# Output: 
# normal division of 19 by 5 = 3.8
# floor division of 19 by 5 = 3
```

## Working with Negative Numbers in Floor Divisions <a name="negative"></a>
When the operand is negative, the largest integer that is less than or equal to the outcome of ordinary division will be returned by floor division. To demonstrate how this operates, let's use the same operands as before:

```py
num1 = 19
num2 = 5
num3 = -19
num4 = num1 / num2
num5 = num1 // num2
num6 = num3 // num2

print("normal division of", num1, "by", num2, "=", num4)
print("floor division of", num1, "by", num2, "=", num5)
print("floor division of", num3, "by", num2, "=", num6)

# Output: 
# normal division of 19 by 5 = 3.8
# floor division of 19 by 5 = 3
# floor division of -19 by 5 = -4
```

## Working with Floats in Floor Divisions <a name="floats"></a>
Python also supports floor division using floats. The result of floor-dividing floats is a float that represents the closest integer.

Let's have a look at the following float-based floor division example.

```py
num1 = 17.5
num2 = 3.3
num3 = 10
num4 = 2.5
num5 = 13.4
num6 = 3
num7 = num1 // num2
num8 = num3 // num4
num9 = num5 // num6

print("floor division of", num1, "by", num2, "=", num7)
print("floor division of", num3, "by", num4, "=", num8)
print("floor division of", num5, "by", num6, "=", num9)

# Output: 
# floor division of 17.5 by 3.3 = 5.0
# floor division of 10 by 2.5 = 4.0
# floor division of 13.4 by 3 = 4.0
```

As a result, the floor division operation is carried out using floats, and float with integer returns the value rounded down to the nearest integer represented by the floats.


## Alternative Methods for `//` <a name="alternative"></a>

When working with messy data, for instance, you could occasionally encounter datasets that contain both integers and floats. In some cases, the `//` operator will output both floats and integers, giving conflicting results. Therefore, utilizing the `//` operator will require additional steps to assure a consistent output if your program depends on integers.

There are a few additional methods for changing the quotient of two numbers so that it functions properly with your software. Using various methods can give you greater control over the outcomes since, for instance, you might not always want to round a value down.

###  `__floordiv__()` Function in Python <a name="floordiv"></a>
The function that is performed in the background when you divide two numbers with the `//` operator is called the `__floordiv__()` method.

Instead of the `//` operator, you may also utilize this `__floordiv__()` method directly:

```py
num1 = 19
num2 = 5
num3 = num1 // num2
num4 = num1.__floordiv__(num2)

print("floor division of", num1, "by", num2, "=", num3)
print("using the floordiv method gets us the same value of", num4)

# Output:
# floor division of 19 by 5 = 3
# using the floordiv method gets us the same value of 3
```


### `math.floor()` Function in Python <a name="math"></a>
Python comes with a built-in math module that includes a variety of practical calculating tools. The `math.floor()` function is one of the math module's built-in features. This function takes a numeric input and rounds it down to the closest integer to return the floor value.

Therefore, `math.floor()` is an alternative to the `//` operator since they accomplish the same goal in the background.

Let's have a look at the following illustration of the same:

```py
# importing the math library
import math

# declaring the variables
num1 = 5.79
num2 = -5.79

# using the floor() function
num3 = floor(num1)
num4 = floor(num2)

# printing the values
print("floor value of", num1, "=", num3)
print("floor value of", num2, "=", num4)

# Output: 
# floor value of 5.79 = 5
# floor value of -5.79 = 6
```
### `math.ceil()` Function in Python <a name="ceil"></a>
`math.ceil()` is an alternative to `math.floor()` that will always round up to the nearest whole number rather than down. For instance:

```py
# importing the math library
import math

# using the math.ceil() function and printing the values
print(math.ceil(2.4)) #Output 3
print(math.ceil(9.3)) #Output 10
print(math.ceil(-7.3)) #Output -7
print(math.ceil(25.7)) #Output 26
print(math.ceil(11.0)) #Output 11
```

## Summary <a name="summary"></a>

So what does `//` mean in Python? When an integer is required or you need to return the smallest integer that is less than or equal to the input, you typically use the floor division operator (`//`). The output will be an integer if the operands are both integers. The result will be a float if either operand is a float.

Although lines with the `//` operator are easy to read, it may be preferable to use `math.floor()` or `math.ceil()` when working with inconsistent and disorganized datasets.

Last but not least, here is a video which briefly explains what was described in this article:

[![Python Floor Division Tutorial (Double Forward Slash)](https://res.cloudinary.com/marcomontalbano/image/upload/v1661366456/video_to_markdown/images/youtube--tFdVvNbV9-E-c05b58ac6eb4c4700831b2b3070cd403.jpg)](https://www.youtube.com/watch?v=tFdVvNbV9-E "Python Floor Division Tutorial (Double Forward Slash)")
=======

---
title: "What is float in python?"
subtitle: "The double slash `//` operator in Python is used to divide a number by its floor."
tags: ["python"]
authors: [javierseiglie]
status: "draft"
---


```python
x = 10
print(float(x))

#Output -> 10.0
```

### What is a Float?

Float is a type of variable present in all programming languages that it´s used to store real numbers with fractions (or floating point numbers). Based on this, we can differentiate in it's composition an Integer type number separated by a `.` (dot) from the fractional parts. It´s represented as a 64-bit double-presicion value being it´s maximum value 1.8 * 10<sup>308</sup>. 

If the number falls from the limit stablished, it'll return a String with `inf` as value.

```python
x = 1.5
# -> 1 integer
# -> .5 fraction
#-> 1.5 float number
```

### Syntax

The `float()`syntax is quite simple and straight forward.

```python
float()
```

Float() will accept any `numeric` value (inside it's limit), `inf`, `infinity` or `NaN`  and return the floating point value if possible.

### Using float() with different types of data

Passing a `variable` to float()

```python
x= 5
print(float(x))
#Output -> 5.0
```

Passing a `integer` directly to float()
```python
print(float(8))
#Output -> 8.0
```

Passing a `integer with negative value` directly to float()
```python
print(float(-55))
#Output -> -55.0
```

Passing a `string with a numeric values` to float()
```python
str = '35'
print(float(str))
#Output -> 35.0
```

Passing a `string with white spaces` to float()
```python
str = '    35   '
print(float(str))
#Output -> 35.0
```

Passing a `boolean` type to float()

```python
bol = True
print(float(bol))
#Output -> 1.0
```

Booleans can have 2 possible values, 1 for `True` and 0 for `False`, that´s why if received `True` float() returns 1.0

Passing `InF` to float()
```python
print(float(InF))
#Output -> inf
```

Passing `nan` to float()
```python
print(float(nan))
#Output -> nan
```

Passing a `string with mixed numeric and non numeric values` to float()
```python
print(float('4 Geeks Academy'))
#Output -> Traceback (most recent call last):
# File "main.py", line 1, in <module>
# print(float('4 Geeks Academy'))
# ValueError: could not convert string to float: '4 Geeks Academy'
```

Passing a `value outside the limit causing overflow error` to float() 

```python
print(float(10**432))
#Output -> Traceback (most recent call last):
# File "main.py", line 1, in <module>
# print(float(10**432))
# OverflowError: int too large to convert to float
```

Hope you enjoyed the reading and keep on the Geek side!
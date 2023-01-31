---
title: "What does double equal sign mean in Python?"
subtitle: "One of the logic operator in Python is the double equal sign. This operator is used to check if one value is equal to another given value and it'll check value and type of the data"
tags: ["python"]
date: "2020-10-19T16:36:30+00:00"
authors: [javierseiglie]
status: "draft"

---


```python
x = 5
y= '5'
z = 5

print(x==y) 
#output -> false

print(x==z) 
#output -> true
```

## The equal `=` sign in Python:

The equal sign `=` in Python, as many other programming languages is used to **assign** a value to a variable and the most important important word is **assign**.

```python 
#crating a variable and assigning a value with the = symbol
x = "Geek!"
print(x) #Output-> Geek!
```

## The double equal `==` operator 

Although, when we use in human language "equals to" we are referring to comparison and the answer is always **yes or no** (this shirt color is equal to this short color). Now, since we used already the `=` to **asign** a value, we still need to compare (with logical thinking) if some data stored in a variable is equal to other data and thats where the `==` comes in our rescue.

```python
x = 5
y= '5'
z = 5

print(x==y) 
#output -> false

print(x==z) 
#output -> true
```

If you look closely, you´ll see that despite `x` and `y` having the same value, it stills return `false`... Why is that? The double equal logic operator checks for the value and the type of the data compared one another. In our previous example we used a number (`Int` in this case, but could be a `float` to name just one) and compare it with a `String`. Since the type of data is not the same, Python will return as `false` and only return `true` when both, the **value** and the **type** are the same as when compared `x` with `z`.

Keep in mind, the **double equal** sign in Python, as in many other programming languages is for comparing 2 elemens and the only possible return is **true** or **false** (boolean). 

```python
x= 1
y= '1'
z= 1
#returns false
print(x==y) #output -> false 
print(x=='1') #output -> false
print(x=='p') #output -> false
print(x=='1') #output -> false
#returns true
print(x==z) #output -> true
print(x==1) #output -> true
```

Hope you enjoy the reading and keep on the Geek side!
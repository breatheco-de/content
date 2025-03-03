---
title: "What does a double equal sign mean in Python?"
subtitle: "Learn the meaning of the double equal sign in Python. Explore how it works for equality comparison and make your code more powerful."
tags: ["python", "conditions"]

---


In Python, the double equal sign `==` is a relevant operator that is used to compare two variables or values and  determine whether they are equal or not. We will explore the  utility of this operator in Python and  how can be used in different situations. We prepared an article as an [Intro to Python](https://4geeks.com/lesson/intro-to-python) that we recommend to check before reading the following piece of content. Let’s start with a quick example so we can understand its functionality.

Let’s suppose that we have 2 variables called `a` and `b` with the following values assigned to:

```py
a = 5
b = 10
```
Now, we want to verify if `a` is equal to `b` by using the double equal sign operator:
```py
if a == b:
    print("a is equal to b")
else:
    print("a is not equal to b")
```

On the previous example, we declared 2 variables `a` and `b` with values 5 and 10 respectively. Then, we used the double equal sign operator in an if-else block to compare `a` and `b` values. Finally, if `a` is equal to `b`, our code will print `"a is equal to b"`, otherwise it will print `"a is not equal to b"`.

## What does the double equal sign mean?

This operator in Python shows a comparison used to verify if a value is equal to another one. In this way, Python compares values on both sides of the operator and returns `True` if they are equal and `False` if they are not. Now, let's see different conditions' use cases.

### Verification of numerical equality

```py
num1 = 15
num2 = 15

if num1 == num2:
    print("Both numbers are the same")
else:
    print("Numbers are different")
```

In the previous example, we have two variables with the same numbers as values. When using the double equal sign `==`, the program will print `"Both numbers are the same"` since both variables have the same number.

### String Comparison

```py
name_1 = "John"
name_2 = "Alexa"

if name_1 == name_2:
    print(“Names are the same”)
else:
    print("Names are different")
```

In this case, we have two variables that contain strings as values. Due to both strings being different, our code will print `"Names are different"`.

### Evaluation of Boolean expressions

Let's see our final example:

```py
truthy_variable = True
falsy_variable = False

if truthy_variable == falsy_variable:
    print("Both values are the same")
else:
    print("Both values are different")
```

Finally, in this last example, we are comparing two boolean variables and because they are different, our code will print `"Both values are different"` as expected.

## Conclusion

The double equal sign operator in Python is completely essential when we want to compare values and evaluate conditions with if statements. This allows us to check if values are the same or not, which leads to different outputs depending on the values we have on variables. 

We hope you can understand the use and importance of the double equal sign operator in Python. Now, you can enhance your programming skills with this knowledge and take better decisions in your apps. You can check the [4Geeks Blog](https://4geeks.com) for more amazing content. 

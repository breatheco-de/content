---
subtitle: "Functions are an amazing tool, they allow you to re-use and simplify your code like never before. Before functions existed, algorithms were almost impossible to maintain"
title: "Working with Functions in Python"
cover_local: "../../assets/images/4cc6fa0b-2530-4052-aa7e-8dac03788ac3.png"
textColor: "white"
date: "2020-10-19T16:36:31+00:00"
tags: ["python", "python-functions"]
status: "published"

---

Mastering the use of functions is one of the 5 fundamental skills of building algorithms:

1. Variables.
2. Conditionals.
3. Lists.
4. Loops.
5. `Functions`.

## What are Functions?

Basically, a function is a bunch of code that you can run anytime whenever you decide. For example:


```python runable=true
def multiply(a, b):
    return a * b

result = multiply(2, 6)
print(str(result))  # Output: 12
```

By reviewing this code, we can obtain the following conclusions:

- Every function must be declared using the statement `def`.
- After `def` we have to write the name we want for the function (in this case, "multiply").
- After the name, we have to add the function parameters or inputs separated by a comma `,`. We can pick the name the parameters are going to have (in this case, `a` and `b`), but they must always be in the same order.
- We have to end that line using a colon `:`, that way the computer will know we are about to start coding the insides of the function (the function algorithm).
- The last thing we must do is add a return (good practice). All functions must return something, in this case, we returned the multiplication between the A and B parameters (inputs) given.

From now on, I have the function `multiply` available on my code, and I can re-use it as many times as I need to multiply two values like this:

```python
result = multiply(2, 6)
print(str(result))  # Output: 12

result2 = multiply(5, 2)
print(str(result2))  # Output: 10
```

> 📺 Click here to [watch a short video explaining functions](https://www.youtube.com/watch?v=NE97ylAnrz4) (9min)

### Second example about functions

This function calculates the cost of organizing a party with the following criteria:
1. First, we have to know the number of people invited, this will be received as a function argument (parameter or input)
2. We know that every guest will cost $10.
3. If there are more than 200 guests, there is a 10% discount.

```python
def get_price(number_of_guests): 
    price_per_guest = 10
    total_cost = price_per_guest * number_of_guests
    if number_of_guests > 200:
        total_cost = total_cost - (total_cost * 0.1)  # ← 10% discount
    return total_cost
```

<iframe height="400px" width="100%" src="https://repl.it/@4GeeksAcademy/calcular-costo-fiesta?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

+ **Every function must have a purpose** (a goal) (like our function "multiply").  The function's purpose is to calculate the multiplication between two given numbers.
+ **It must have a unique name.**  In this particular case, our function is called "multiply" – which it's a great name because you know exactly what the functions is about, it's explicit.
+ **It must return something.**  By default, in Python all functions return `None` but you should override this and always return something useful. In this example, we want to return the result of a & b multiplication.
+ **Functions may have parameters.**  A "parameter" is a variable that the function may receive at the beginning of its code (like a & b in our example).

The whole idea is to have a library of hundreds of functions and use them as we please. You declare all your functions, and later you start using and re-using them all the time.


## But, why use Functions instead of just doing everything in one big chunk of code?

Coding is very abstract, and it happens a lot that you have no idea what you wrote yesterday. Before functions existed, algorithms were this huge never-ending series of lines of code where developers would have a hard time and get lost.  It is hard for your brain to follow a procedure/algorithm of great length; the more lines of code, the more abstract it becomes.

By using functions, you have the following advantages:

+ Split and conquer:  Divide your algorithm into smaller sub-algorithms and focus on one problem at a time.
+ Re-use your code by calling the function several times, dramatically reducing your code length.
+ Organize your code: function names will tell you what that piece of code does, you can have all your functions in a separate file and re-use them in all your future developments.

If you think about it, functions are the equivalent of books. They store knowledge and ways of doing things, and in future developments, you just re-use them instead of having to figure everything out all over again.

## The Function Scope

All functions must start and end somewhere, that is called **the scope of the function**. You can delimit the boundaries by using the correct indentation after the colon `:` like this:

```python runable=true
# This part of the code is OUTSIDE the 'multiply' function 

def multiply(a, b):

    # This part of the code is INSIDE the 'multiply' function 
   
    return a * b

    # This part of the code is INSIDE my function, but it will never 
    # be executed because it is located AFTER the return statement 


# This part of the code is OUTSIDE the 'multiply' function 
print(str(multiply(34, 2)))
```

> ☝ Any variables that you declare inside the function will not be available outside of it.

```python
def multiply(a, b):
   my_variable = 'hello'
   return a * b

# This print won't work (it will trigger an error) because my_variable was  
# declared inside the function multiply; therefore, it is not available outside 
print(my_variable)
```


> ☝ It is very important to remember that once you use the `return` statement the function will stop executing. If there is any code after that statement, it will never be executed.

## Lambda functions (one line functions) in Python

If your function is going to be a one line function, you can use the "lambda" trick to be more agile. You have to use the reserved word `lambda`.

```python runable=true
multiply = lambda a, b : a * b
result = multiply(2,3)
print(str(result))
```

Lambda is ideal for cases in which you have little functions, you will learn to love it because it makes your code faster and shorter, specially when you are working with lists.

## Calling Functions

The only way to use (a.k.a: call) a function is to use parenthesis like this:

```python
# This is how you call a function without parameters 
multiply()

# This is how you call a function with parameters 
multiply(<first param>, <second param>)

# For example, to multiply 3 times 9 
multiply(3, 9)
```

Please remember to assign the function whatever parameters it should receive.  In our example, the multiply function was declared asking for two numbers to multiply.  Play with the following example as you like:

<iframe height="400px" width="100%" src="https://repl.it/@4GeeksAcademy/Calling-Functions-in-Python-Example?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

## Nested Calling

You can combine functions however you want and have chained calls like this:

```python runable=true
def sum(a, b):
   return a + b

def multiply(a, b):
   return a * b;

print(multiply(sum(3, 5), sum(1, 1)))


# The execution goes from the inside to the outside 
# First, the sum of 3+5 and 1+1 will be calculated 
# Then their respective results will be multiplied 
first_sum = sum(3, 5)
second_sum = sum(1, 1)
print(multiply(first_sum, second_sum))
```

> ☝ [View this example live at replit](https://repl.it/@4GeeksAcademy/Nested-Function-Calling-Python)

## Let's see an Example:

The following code has 3 functions declared:

```python
def get_average(ages):
    # Some code here

def get_youngest(ages):
    # Some code here

def get_person_info(name):
    # Some code here
```

As you can see, the function names are pretty specific about what the functions do, as well as the parameters assigned to them.

<iframe height="400px" width="100%" src="https://repl.it/@4GeeksAcademy/Python-Functions-Example?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

Other important things to notice:

+ We are calling the function get_person_info two times – without using functions, we would have to use more code because we would have no option to re-use the function.
+ The function `get_average` is to get the average value on a given array.  It knows nothing else, and that is great!  By separating your code into little functions, you can focus on one thing at a time.

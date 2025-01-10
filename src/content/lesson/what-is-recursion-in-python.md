---
title: "What is recursion in Python?"
subtitle: "Discover what recursion is in Python. Explore the technique of calling itself to solve complex problems elegantly and efficiently."
tags: ["python"]
authors: ["DF27ARTS"]

---

## Exploring Recursion in Python  🔄🐍

Recursion in programming is a very powerful tool, this is done with functions that call themselves over and over again. You can picture it as a kind of loop that iterates until a condition is met. Next we will see a brief example where we will use a recursive function to look for the maximum value in a list of numbers.

```py runable=true
def find_maximum_value(list):
    if len(list) == 1:
        # Base case or exit case
        return list[0]
    else:
        # Recursive case
        short_list = list[1:]
        result = find_maximum_value(short_list)
        if list[0] > result:
            return list[0]
        else:
            return result

list = [1, 4, 25, 5, 7, 8, 9, 2, 40, 3, 27]
maximum_value = find_maximum_value(list)
print(f"The maximum number of the list is: {maximum_value}")
```

In this example we make use of a recursive function to find the largest number in a list, in this code we first make use of a conditional structure `if else` to check if the length of the list is equal to 1, if so, we return the only number in the list. This would be the exit or base case, otherwise, we make a recursive call to the function `find_maximum_value()` and we transfer as parameter the list minus the first value, to trim the list in each recursive call and finally we return the maximum value between the first number of the original list and the result of the function.

## What is Recursion in Python? 🔄🔍

The **recursivity** or recursion is a concept that comes from mathematics and that applies to the world of programming. It allows us to solve problems or tasks where they can be divided into sub-tasks whose functionality is the same. Since the subproblems to be solved are of the same nature, the same function can be used to solve them. In other words, a recursive function is one that is defined as a function of itself, so it repeatedly calls itself until it reaches an exit point.

You will better understand how recursion works with the help of the following video.

<iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/yX5kR63Dpdw"
    title="The magic of recursion"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
></iframe>

## The Base Case (The Key to Recursion) 🗝️🧩

The base case is fundamental when working with recursion since it defines when the process of recursive calls should stop. If you do not define a suitable base case, the function could execute indefinitely, draining your computer's resources and causing a system error.

Placing an incorrect base case is a very common mistake for someone starting to work with recursion, so remember that when creating a recursive function, the first thing to do before creating the function logic, is to create the base case and make sure it is well defined to prevent the function from calling itself indefinitely.

| Characteristic | Description |
|-----------|--------------|
| Base case | It will allow us to end the recursive call cycle of the function at some point and not enter an infinite call stack. |
| Recursive case | In the recursive case we call the function over and over again in a stack of recursive calls, but we will get closer to the output solution (the base case). |

## Pros and Cons of Recursion 🌟📉

#### Pros

1. **Conceptual simplicity**: Some problems are naturally recursive and can be solved more simply and elegantly using recursion.
2. **Problem division**: Recursion allows a problem to be divided into smaller subproblems, making it easier to solve.
3. **Code reduction**: In certain cases, the use of recursion can result in more concise and readable code compared to iterative solutions.
4. **Application in recursive data structures**: Data structures such as trees and linked lists are often handled more naturally and efficiently with recursive approaches.

#### Cons

1. **Memory consumption**: Recursive calls can lead to higher memory usage, since each call adds a new instance on the call stack.
2. **Difficult to follow**: Sometimes, the execution flow in recursion can be difficult to follow, which can make it difficult to debug and understand the code.
3. **Execution time**: Recursive calls can lead to longer execution time due to call overhead and the need to manage the call stack.

## Examples of Recursive Algorithms in Python 📝💡

The following are some examples of recursion algorithms in [Python](https://4geeks.com/lesson/how-to-code-in-python).

### Factorial Calculation

Factorial calculus is a mathematical concept that involves multiplying a series of consecutive positive integers, starting from **1** up to a number **n**. It is recognized by the symbol "!", and is placed after the number. Example:

```bash
// N Factorial
n! = n * (n - 1) * (n - 2) * (n - 3) * ...


// 5 Factorial
5! = 5 * 4 * 3 * 2 * 1 = 120
```

Example of factorial calculation using recursion with Python.

```py runable=true
def factorial(n):
    if n < 0:
        return "You cannot do a factorial calculation with a negative number."

    if n == 0 or n == 1:
        return 1
    else:
        return n * factorial(n - 1)

print(factorial(5))  # output: 120
print(factorial(3))  # output: 6
print(factorial(15))  # output: 1307674368000
print(factorial(-50))  # output: You cannot do a factorial calculation with a negative number.
```

In this example, we make use of recursion to find the factorial result of a number **n**. First as in any recursion function, we create the base case with the help of a conditional `if else`, if the number **n** is equal to 0 or is equal to 1 then we return the number 1 and break the recursion loop, otherwise, we call the function `factorial()` and pass the number (n - 1) to find the factorial of all numbers less than **n** recursively and return the result of the function multiplied by **n**.

### Fibonacci Series

The Fibonacci series is a numerical sequence in which each number is the sum of the two previous numbers, the sequence starts with 0 and 1, then each following number is the sum of the two previous numbers, example:

```bash
0, 1, 2, 3, 5, 8, 13, 21, 34 ...
```

Example of a fibonacci series using recursion.

```py runable=true
def fibonacci(n):
    if n < 0:
        return "The fibonacci series accepts only positive numbers"
       
    fibonacci_list = [0, 1]

    def recursion(number, list):
        if list[-1] + list[-2] > n:
            return list
        else:
            list.append(list[-1] + list[-2])
            return recursion(number, list)

    return recursion(n, fibonacci_list)

limit_number = 1000
result = fibonacci(limit_number)
print("Fibonacci serie: ",  result)
```

In this example we make use of recursion to find all the numbers of the fibonacci series less than 1000. In this case, the base case is if the sum of the last two numbers in the list is greater than our limit number **n**; if so, we return the array and finish the stack of recursive calls, otherwise we add the sum of the last two numbers to the list and make the recursive call with the modified list again and again until the base case condition is met.

### Addition of Natural Numbers

The sum of natural numbers refers to the addition of all positive integers from **1** to a number **n**. In mathematical terms, it is represented as the sum of a finite sequence of natural numbers. Example:

```bash
n = (n * n+1) / 2
n = n + (n - 1) + (n - 2) + ...

7 = (7 * 8) / 2 = 28
7 = 7 + 6 + 5 + 4 + 3 + 2 + 1 = 28
```

Example of addition of natural numbers using a recursive function.

```py runable=true
def sum_natural_numbers(n):
    if n < 0:
        return "The addition of natural numbers can only be done with positive numbers."

    if n == 0:
        return 0
    else:
        return n + sum_natural_numbers(n - 1)

print(sum_natural_numbers(5)) # output: 15
print(sum_natural_numbers(7)) # output: 28
print(sum_natural_numbers(3)) # output: 6
print(sum_natural_numbers(15)) # output: 120
print(sum_natural_numbers(-20)) # output: The addition of natural numbers can only be done with positive numbers.
```

In this example, the base case is if the number entered by parameter is equal to 0, if so, then we return 0 and end the stack of recursive calls, otherwise, we call the function `sum_natural_numbers()` recursively and we pass as a parameter the number `(n - 1)`, finally we return the result of the function plus the number **n** this will give us the sum of all the numbers from **n** to **1**.

## Conclusion

Recursion is a powerful tool in programming that allows us to solve problems by breaking them into smaller subproblems. By correctly understanding the base case and the recursive case, we can create efficient recursive algorithms. Recursion is a complex programming topic that requires practice to fully understand it, I recommend that you practice as much as you can doing examples like the ones seen in this article. You can check the [4Geeks Blog](https://4geeks.com) to learn more interesting content.

Have fun creating recursion algorithms for your own applications! 😉

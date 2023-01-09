---
title: "General Coding Standards and Guidelines"
subtitle: "The project assignments are an important part of our learning method, this lessons will show you what to expect and why the matter so much."
tags: ["4geeks method", "coding standards"]

---

>  🤯 "I'm not a great programmer; I'm just a good programmer with great habits." - Kent Beck

Studies have shown that developers who use best practices when coding are up to 40% more productive than those who do not, and that code with good practices is up to 50% cheaper to maintain than code with poor practices. 

Also, companies and governments lose a lot of money every day because developers don't follow the best practices and guidelines, here are some examples you can read more about:

- NASA's Mars Climate Orbiter was lost because the team was not using a consistent metric system in the codebase; which lead to a confusion in the calculations, losing $320 million.
- The Ariane 5 rocket explosion by ESA was caused by bad code very difficult to read, $370 million lost.
- The US stock market Flash Crash in 2010, undisclosed significant financial losses.

This lesson is a compilation of best practices that we promote at 4Geeks, it has been created and grown with contributions from all the community mentors and 

## Global variables
It's best to avoid using global variables whenever possible, use more function arguments and return values to share data between different parts of a program. This can help to make code more maintainable, testable, and reliable.

1. Global variables can be accessed from anywhere in the code, making it more difficult to track down bugs and understand how the code is working.
2. It's harder to isolate problems when multiple parts of the code are interacting with the same global variables
3. Changes to a global variable can have unintended consequences in other parts of the code.

![don't use global variables](https://breathecode.herokuapp.com/v1/media/file/dont-use-global-variables-png?)

## Variable Names
Some of the naming conventions are given below:

- Meaningful and understandable variables name helps anyone to understand the reason of using it.
- General variables should be named in camelCase for [Javascript, Node, Java, Ruby, etc.](https://en.wikipedia.org/wiki/Snake_case), in `snake_case` for python, etc. Here you can you can read more about [variable naming conventions](/lesson/variable-naming-conventions).
- Constant variables are named in CAPITAL LETTERS.
- It is better to avoid the use of digits in variable names.
- The names of the function should be written in camel case starting with small letters.
- The name of the function must describe the reason of using the function clearly and briefly.

```text
Descriptive variable names
✅ GOOD: "customer_name" (describes the contents of the variable)
❌ BAD: "x" (not descriptive or meaningful)

Use naming conventions
✅ GOOD: "number_of_items" (full words are used)
❌ BAD: "n_items" (abbreviation is used)

✅ GOOD: "customerName" (camelCase is used)
❌ BAD: "customername" (no naming convention is used)

Avoid using single-letter names:
✅ GOOD: "customer_name" (descriptive and meaningful)
❌ BAD: "x" (single-letter and not descriptive)

Keep names short, but not too short:
✅ GOOD: "product_price" (short and descriptive)
❌ BAD: "p" (too short and not descriptive)
```

## Indentation

Use a prettier or automatic indentation tool. If that is not possible (because of some weird reason), make sure to manually indent every single:

- Pick how many spaces you will be using (2 or 4 spaces per single indent).
- Use a consistent indentation style.
- Indent code blocks: Code blocks, such as those inside of a function or loop, should be indented to visually distinguish them from the surrounding code.

```javascript
if (condition) {
  // code block 1
} else if (condition) {
  // code block 2
} else {
  // code block 3
}
```

## Errors an exceptions
When code, some of the errors are hidden to developers unless exceptions are actively handled, for this reason, we decided to include this guideline into the list.

- Use try-except and try-catch blocks to handle exceptions.
- When fetching data in javascript, always include the `.catch()` function or try-catch block (if using promises) and show the error on the console.
- Log errors and exceptions in the console and log file if possible.
- Avoid suppressing exceptions.

## Readability

> 🤯 Did you know that in 1999, NASA's Mars Climate Orbiter was destroyed due to a software bug caused by low code readability costing $320 million?

Creating code that is easy to read is essential for producing high-quality software that is reliable, maintainable, and easy to modify or update. We have a whole article in [code readability](/lesson/what-is-and-how-to-improve-code-readability) but here is a very short summary of the best practices:

- Choose variable names wisely.
- Split your code in smaller functions.
- Avoid using else statements.
- Pay good attention to indentation.
- Don't over-comment your code.
- Avoid long lines of code.

### Avoid nesting

When possible avoid using nested functions like:

```python
def calculate_discount(item, quantity):
  if item.category == 'clothing':
    if quantity >= 10:
      return item.price * 0.9
    else:
      return item.price * 0.95
  elif item.category == 'electronics':
    if quantity >= 5:
      return item.price * 0.8
    else:
      return item.price * 0.9
  else:
    return item.price
```

The code is nested too deeply and has a complex structure that can be difficult to follow. This can be improved by refactoring the code to use fewer levels of nesting, or by using early returns or refactoring the conditional statements to simplify the structure. Here is an example:

```python
def calculate_discount(item, quantity):
  if item.category != 'clothing' and item.category != 'electronics':
    return item.price
  
  discount = 1.0
  if item.category == 'clothing':
    discount = 0.9 if quantity >= 10 else 0.95
  else:
    discount = 0.8 if quantity >= 5 else 0.9
  
  return item.price * discount
```

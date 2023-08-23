---
title: "General Coding Standards and Guidelines"
subtitle: "The project assignments are an important part of our learning method; these lessons will show you what to expect and why they matter so much."
tags: ["4geeks method", "coding standards"]

---

>  🤯 "I'm not a great programmer; I'm just a good programmer with great habits." - Kent Beck

Studies have shown that developers who use best practices when coding are up to 40% more productive than those who do not, and that code with good practices is up to 50% cheaper to maintain than code with poor practices. 

Also, companies and governments lose a lot of money every day because developers don't follow the best practices and guidelines. Here are some examples you can read more about:

- NASA's Mars Climate Orbiter was lost because the team was not using consistent metric system in the codebase, which led to confusion in the calculations, losing $320 million.
- The Ariane 5 rocket explosion by ESA was caused by bad code that was very difficult to read, and $370 million was lost
- The US stock market Flash Crash in 2010, with undisclosed significant financial losses.

This lesson is a compilation of best practices that we promote at 4Geeks, it has been created and grown with contributions from all the community mentors.

## Global variables
It's best to avoid using global variables whenever possible, use more function arguments and return values to share data between different parts of a program. This can help you make code more maintainable, testable, and reliable.

1. Global variables can be accessed from anywhere in the code, making it more difficult to track down bugs and understand how the code is working.
2. It's harder to isolate problems when multiple parts of the code are interacting with the same global variables.
3. Changes to a global variable can have unintended consequences in other parts of the code.

![don't use global variables](https://breathecode.herokuapp.com/v1/media/file/dont-use-global-variables-png?)

## Variable Names
Some of the naming conventions are given below:

- Meaningful and clear variable names help everyone understanding what goes in said variable.
- General variables should be named in `camelCase` for [JavaScript, Node, Java, etc.](https://en.wikipedia.org/wiki/Camel_case) And in `snake_case` for [Python, Ruby, etc.](https://en.wikipedia.org/wiki/Snake_case) Here you can read more about [variable naming conventions](https://4geeks.com/lesson/variable-naming-conventions).
- Constant variables are named in CAPITAL LETTERS.
- It is better to avoid the use of digits in variable names.
- The name of a function should be written in `camelCase` starting with small letters.
- The name of a function must describe the reason of using the function clearly and briefly.

```text
Descriptive variable names:
✅ GOOD: "customer_name" (describes the contents of the variable)
❌ BAD: "x" (not descriptive or meaningful)

Use naming conventions:
✅ GOOD: "number_of_items" (full words and snake_case are used)
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

Use [Prettier](https://prettier.io/) or any automatic indentation tool. If that is not possible (for some weird reason), make sure to manually indent every single line:

- Pick how many spaces you will use (2 or 4 spaces per single indent).
- In Python it is recommended to use 4 spaces for each indentation [PEP8](https://peps.python.org/pep-0008/#indentation).
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

## Errors and exceptions
When coding, some of the errors are hidden from developers unless exceptions are actively handled. For this reason, we decided to include this guideline in the list.

- Use `try-except` and `try-catch` blocks to handle exceptions.
- When fetching data in JavaScript, always include the `.catch()` function or `try-catch` block (if using promises) and show the error on the console.
- Log errors and exceptions in the console and log file if possible.
- Avoid suppressing exceptions.

## Readability

Creating code that is easy to read is essential for producing high-quality software that is reliable, maintainable, and easy to modify or update. We have a whole article in [code readability](https://4geeks.com/lesson/what-is-and-how-to-improve-code-readability) but here is a very short summary of the best practices:

- Choose variable names wisely.
- Split your code into smaller functions.
- Avoid using "else" statements.
- Pay good attention to indentation.
- Don't over-comment your code.
- Avoid long lines of code.

## Avoid nesting

When possible avoid using nested functions like:

```js
function calculateDiscount(item, quantity) {
    if (item.category === 'clothing') {
        if (quantity >= 10) {
            return item.price * 0.9;
        } else {
            return item.price * 0.95;
        }
    } else if (item.category === 'electronics') {
        if (quantity >= 5) {
            return item.price * 0.8;
        } else {
            return item.price * 0.9;
        }
    } else {
        return item.price;
    }
}
```

The code is nested too deeply and has a complex structure that can be difficult to follow. This can be improved by refactoring the code to use fewer levels of nesting, or by using early returns or refactoring the conditional statements to simplify the structure. Here is an example:

```js
function calculateDiscount(item, quantity) {
    if (item.category !== 'clothing' && item.category !== 'electronics') {
        return item.price;
    }

    let discount = 1.0;
    if (item.category === 'clothing') {
        discount = quantity >= 10 ? 0.9 : 0.95;
    } else {
        discount = quantity >= 5 ? 0.8 : 0.9;
    }

    return item.price * discount;
}
```

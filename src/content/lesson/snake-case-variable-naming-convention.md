---
title: "The Snake Case Variable Naming Convention"
subtitle: "Snake Case uses underscore _ to separate words when naming variables, used by Python and other major languages."
tags: ["coding guidelines"]

---

We are not here to defend the case for why using conventions; there is a whole different article about that that you can read here: [Variable Naming Conventions](https://4geeks.com/lesson/variable-naming-conventions) as a part of our [coding standas and guidelines](https://4geeks.com/lesson/coding-standards-guidelines) series of lessons.

The Snake Case or `snake_case` is one of the most used naming conventions because it makes variables really easy to read; you can argue that `snake_case` is more readable to the eyes than `cameCase`.

## How to use Snake Case?

- Start with a letter
- Always lowercase
- use underscore's `_` instead of space to separate words.

For example, a variable representing the number of students in a class might be named "num_students".

## Wrong vs Correct cases

1. `numberOfStudents` is **incorrect** because you need to separate words with underscore `_`; using capital letters is for camelCase or PascalCase.
2. `1_apple` **incorrect** because you can't use numbers at the beginning.
3. _age is **correct** because it's ok to use the underscore `_` at the beginning; this is used a lot in "private variables".

## Some of the programming languages that use the Snake Case Naming Convention

- Python: In Python, snake case is the standard naming convention for variables and function names.
- Ruby: For naming variables and methods.
- PHP: For naming variables and functions.
- Go: For variables and functions.
- Rust: For naming variables and functions.

> Note: You can see cases where `Snake Case` is used in other languages like C++, Swift, etc. But we are only adding to the above list the programming languages explicitly stating which is the preferred naming convention.

## What happens if I use the Camel Case Naming convention when programming in any of these languages?

Nothing, you can use any convention you want; this is only a suggestion. But please bare in mind that other developers and yourself in the future will appreciate it a lot if you comply with the best practices.

In the end, it's all about readability; the goal is for you or any developer in the future to read the code easily and understand everything quickly. Naming consistency is one of the most critical factors in achieving this.

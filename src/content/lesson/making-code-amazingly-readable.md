---
title: "What is code readability and how to improve it"
subtitle: "You don't want to be a developer who writes low-quality code, and readability is one of its most critical factors."
tags: ["coding guidelines"]

---

Did you know that in 1999, NASA's Mars Climate Orbiter was destroyed due to a software bug caused by low code readability costing $320 million?

Having readable code is probably one of the top priority for companies these days; It's so remarkable that, without knowing, when you improve readability, you are also applying almost every other metric about [coding standards and guidelines](/lessons/technology/coding-standard-guidelines) in the industry.

> 🤯 "Any fool can write code that a computer can understand. Good programmers write code that humans can understand." - Martin Fowler 

Code readability refers to how easy any person can understand the purpose, structure, and operation of a piece of code. Code that is easy to read and understand is more maintainable and easier to modify or update, and it is less likely to contain errors or bugs.

> 🤯 "Code is read much more often than it is written." - Guido van Rossum (creator of the Python programming language)

## Low readability costs a lot of money 

Poor code readability can lead to a number of problems that can cost a company money:

**Increased debugging time:** If code is difficult to read and understand, it can take longer to identify and fix bugs, which can increase the amount of time and resources needed to debug the code. This can lead to increased project costs and delays.

**Difficulty maintaining code:** If code is difficult to read and understand, it can be difficult for new developers to make changes or updates to the code. This can lead to increased development costs and delays as developers spend more time trying to understand the code.

**Increased risk of errors:** If code is difficult to read and understand, it is more likely that errors or bugs will be introduced as the code is modified or updated. These errors can cause the program to malfunction, leading to lost productivity and potentially lost revenue.

## Tips you can follow to improve code readability

In this lesson, we will go over a few tips you can follow to improve readability in your code. 

### Choose variable names wisely

Were do I start? This is one of the most difficult tasks in coding. 

- Choose descriptive and meaningful names.
- Limit the use of most abbreviations or acronyms.
- Use [variable naming conventions](/lesson/variable-naming-conventions) like camelCase or snake_case.
- Avoid using single-letter names
- Keep names short, but not too short: concise, but still descriptive.

![good vs bad variable names](https://storage.googleapis.com/media-breathecode/54d66f16a9ce92ebbc05807f763dc5975d51280817415c98f02ab893ffa3eb05)

### Split your code in smaller functions

Instead of nesting blocks of code, consider refactoring the code into smaller functions and calling those functions at the appropriate times. This can reduce the overall depth of nesting in your code.

![Encapsulate in smaller functions](https://storage.googleapis.com/media-breathecode/29539a612aa4bc57c236e82838d5f105246de972d622792441efe4d642c31b84)

### Avoid using else statement

It's better to combine your conditions in related logical operations.

![avoid using else statements](https://storage.googleapis.com/media-breathecode/93dfd2bc759cb41efeef36ef575bd56d4e53ecae0c0f3a73b371ba896404caff)

### Careful indentation

Of course, indentation is a vital part of readability. Python doesn't have that problem, but here is a Javascript example that is very tricky to read. 

I challenge you to find the problem!

![Indentation readability problems](https://storage.googleapis.com/media-breathecode/1cd57ac983752ef51f700dab05703bc49c67a580757e21d5917bc8cd46197801)

### You don't need that many comments

When you are about to add a comment, think for a second: Do I really need this comment? Can I increase readably to avoid it?

99% of the time, there is not need for comments if your code has a good readability and follows best practices.

![Avoid unnecessary comments when coding](https://storage.googleapis.com/media-breathecode/bac5b919aa2338754568a68cdb2054a1f47d7be0599d7feb33a8b0968d68004c)

### Avoid long lines of code

This usually happens when writing a long string or if statement, it can also occur when writing functions with long names.

You can avoid most of these problems by using a code prettier. This is a friendly reminder to install a prettier in your editor if you don't have one already.

![lng lines of code](https://storage.googleapis.com/media-breathecode/3d86a9ea1f1f0b37c207eb1494d33e362c51fe2ea023fe1d2d1fb136c87f258b)

Other cases to avoid long lines of code:

- Don't write long boolean expressions, if statements with multiple logical operations on a single line are hard to read and debug.
- Don't write nested code, it may seem clever at the moment, but it makes code hard to read and debug.
- Use list comprehensions sparingly.

## Low readability can get you fired

Software developers are expected to produce high-quality code that is reliable, maintainable, and free of errors or bugs.

It is important to write clean, well-written, and well-documented code that is easy to read and understand. This will make the code more maintainable and will reduce the risk of errors, delays, and increased costs.

---
title: "What is code readability and how to improve it"
subtitle: "The project assignments are an important part of our learning method, this lessons will show you what to expect and why the matter so much."
tags: ["coding guidelines"]

---

Did you know that in 1999, NASA's Mars Climate Orbiter was destroyed due to a software bug caused by low code readability costing $320 million dollars?
Having readable code its probably the #1 priority for companies these days; It's so amazing that, whthout knowing, when you improve your code re
Instead of nesting blocks of code, consider refactoring the code into smaller functions and calling those functions at the appropriate times. This can help to reduce the overall depth of nesting in your code.

![Encapsulate in smaller functions](https://storage.googleapis.com/media-breathecode/29539a612aa4bc57c236e82838d5f105246de972d622792441efe4d642c31b84)

## Avoid using else statement

It's better to combine your conditions in related logical operations.

![avoid using else statements](https://storage.googleapis.com/media-breathecode/93dfd2bc759cb41efeef36ef575bd56d4e53ecae0c0f3a73b371ba896404caff)

## Careful indentation

Of course indentation is a really important part of readability, python doesn't have that problem but here is a Javascript example that its very tricky to read because of it. 

I challenge you to find the problem!

![Indentation readability problems](https://storage.googleapis.com/media-breathecode/1cd57ac983752ef51f700dab05703bc49c67a580757e21d5917bc8cd46197801)

## You don't need that many comments

When you are about to add a comment think for a second: Do I really need this comment? Can I increase readably to avoid it?

99% of the time there is not need for comments if your code has good readability and follows best practices.

![Avoid unnecessary comments when coding](https://storage.googleapis.com/media-breathecode/bac5b919aa2338754568a68cdb2054a1f47d7be0599d7feb33a8b0968d68004c)

## Avoid long lines of code

This usually happens when writing a long string or if statement, it can also happen when writing functions with long names.

You can avoid most of this problems by using a code prettier, this is just a friendly reminder to install a prettier in your editor if you don't have one already.

![lng lines of code](https://storage.googleapis.com/media-breathecode/3d86a9ea1f1f0b37c207eb1494d33e362c51fe2ea023fe1d2d1fb136c87f258b)

Other cases to avoid long lines of code:

- Don't write long boolean expressions, if statemens with multiple logical operations on a single line are hard to read and debug.
- Don't write nested code, it may seem smart at the moment but it makes code hard to read and debug.
- Don't overuse list comprehensions.

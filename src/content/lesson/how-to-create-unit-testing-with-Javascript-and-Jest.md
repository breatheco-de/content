---
title: "How to create unit testing with JEST"
subtitle: "Once you have your code ready, testing is essential!"
cover_local: "../../assets/images/98208ebb-dcb3-4e40-9ae4-4ec886213f97.jpeg"
textColor: "white"
date: "2020-10-19T16:36:31+00:00"
tags: ["Jest"]
status: "published"
---

Humans make mistakes, all the time. As you progress in your development career you will be more at peace with that.

Senior developers understand their code will has bugs (no matter how smart you are) and the only way to ship quality is by writing additional code to test the original code, we call that "unit testing", in this article you will learn why and how to do it.

There are several ways to test your applications, but unit tests are the most powerful tool a developer has to ensure high quality code.

![Write Code to test code](../../assets/images/6b4upqv6at321.jpg)

 
## What is Unit Testing?

Unit testing is the process of dividing your code into small functions and testing each of those functions separately. For example:

Assuming you are building a function that `sums` two numbers like this:

```js

function sum(number1, number2){
    return number1 + number2;
}
```

A unit test for this function only cares about input and output, **With a given input, there should be an expected output**: If you pass `12` and `5` as inputs to the sum function, it should output (return) the number `17`.

The Jest testing framework in Javascript introduces a special function called `expect` to allow us to unit test, here is an example of how to use `expect` to create our unit tests:

```js
test('12 and 5 should return 17', () => {
    let result = sum(12,5);
    expect(result).toBe(17);
})
```

Note: Unit tests don't care about the content of the `sum` function, it only cares about the OUTPUT of the function with a given INPUT.

![unit testing examples](../../assets/images/unit-test1.png)

## Arrow function.

Another novelty of ES6 are the "Arrow function". The way to create these functions is as follows: First we will define the list of parameters, if necessary, between parentheses followed by the => symbol and the {} to indicate the instructions to be carried out.

In addition to the syntax that is different from the previous ones, these type of functions have the following characteristics.

The "arrow functions" does not create their own context when executed. Unlike the "function expression" or the "function declaration" that creates its own context.

The "arrow functions" are anonymous.

The arguments object is not in the context of the function.

If when defining the function we do not use the symbol of the curly braces. The function will return as a result of the function the result of the execution of the instruction that we have indicated.


## Benefits of using Unit Testing:

+ **you can find and prevent bugs easily** If there is a problem in the future you'll be to identify the cause a lot faster than having to trough all the code. Also your end-user will be very happy to not have a buggy product.

+ **Unit Testing saves time....and money** When writing Unit tests you may identify many possible bugs and fix them right away, instead of fixing them in different stages of the product.

+ **Your code is more reliable and reusable** When your code is divided in units or components where each one has their responsability or function, your code becomes more reliable and it gives you more confidence. Since you have already tested you can reuse it: is clean and efficient and you can migrate your and tests to a new project.

+ Good Unit tests serves as **documentation and defines** what your code is suppose to do.

+ **Unit Testing improves teamwork**. Your will able to follow the logic behind your code and your team will be able coordinate their code accordingly. By reviewing each other's codes teamwork is more agile.

## Writing your first unit test with Jest

Jest is the most popular unit testing framework in javascript, it is used by big companies like airbnb, twitter, spotify and has plugins that integrate amazingly with front-end frameworks like React, Vue, Angular, etc.

It requires almost 0 configuration to start using it, it is extremely fast and the error or feedback messages are very clear.

### Example Syntax

The following function returns `true` if the give input string is uppercase, otherwise it returns `false`:

```js
function isUpperCase(sentence){
     return (sentence == sentence.toUpperCase());
}
```

The code to test that function will look something like this:

```js
test('The string HELLO should return true', () => {
     const result = isUpperCase('HELLO');
     expect(result).toBe(true);
})
```
Here we are testing the function for the input `HELLO`, But doing only one test will not be enough, you have to test all possible scenarios.

## Testing for failure

It's better to find all the bugs now instead of later (in production), that's why you have to build your tests trying to **break you functions**.
Instead of testing the ideal scenario try thinking about weird possible inputs you can pass to you function.

## Planning your tests

The only way to make sure your `isUpperCase` function works is to try every possible input:

1. What happens if you pass a uppercase word?
2. What happens if you pass a lowercase word?
3. What happens if you pass a mixed (uppercase and lowercase) word?
4. What happens if you pass a number instead of string?
5. What happens if you pass a boolean instead of string?

![unit test scenarios](../../assets/images/unit-test-scenarios.png)

Here is the code for each test we should build:

```js
// First test possibility
test('The string HELLO should return true', () => {
     const result = isUpperCase('HELLO');
     expect(result).toBe(true);
})
// Second test possibility
test('Testing for Hello (mixed)', () => {
     const result = isUpperCase('Hello');
     expect(result).toBe(false);
})
// Third test possibility
test('Testing for hello (lower)', () => {
     const result = isUpperCase('Hello');
     expect(result).toBe(false);
})
// Forth test possibility
test('Boolean shoud return false', () => {
     const result = isUpperCase(true);
     expect(result).toBe(false);
})
// Fifth test possibility
test('Number shoud return false', () => {
     const result = isUpperCase(12341234);
     expect(result).toBe(false);
})
```

And here is a live working example:

<iframe height="400px" width="100%" src="https://repl.it/@4GeeksAcademy/Unit-Testing-Example?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

## All the possible questions (assertions) you can ask

We have been using `expect(something).toBe(something)` but jest has a lot of possible `expect` functions that will help you with your tests, for example:

| Description | Syntax |
| ----------- | ------ |
| Expect the opposite | expect(false).not.toBe(true) |
| Expect string to contain another string | expect("hello world").stringContaining("world) |
| Expect variable to be defined | expect(variable_name).toBeDefined() |
| Expect array to contain another | expect(['a','b','c','e']).toEqual(expect.arrayContaining(['b','c'])) |

Note: [Here you can find all the posible `expect` functions you can use.](https://jestjs.io/docs/en/expect)

---
Title: Conditionals in Java Programming  
Syntax:  
  - java  
Tags:  
  - conditionals-programming  
  - java  
description: >-
  Master conditionals in Java and control the flow of your code. Learn to use if-then-else and switch. Discover how to make effective decisions!
---

Mastering the use of conditionals is one of the 5 fundamental skills for building algorithms:

1. Variables.  
2. Conditionals.  
3. Arrays.  
4. Loops.  
5. Functions.  

Conditionals are the only way developers can tell the computer how to make decisions in real time, much like how the human brain works.

Let's say we're building a program to help us decide what to store and we hate the color blue. We can tell the computer to avoid blue using a condition like this:

`If` ***color*** is not **blue**, then... do something.  
`Else`... do nothing or exit.

![Conditionals](https://github.com/breatheco-de/content/blob/master/src/assets/images/e73b673e-d744-45a7-a1ed-61a1dae49560.png?raw=true)

The decision statements are: `if-then-else` and `switch`.

## Using `if... then... else`

The structure of `if-then-else` statements is:

```java
if (expression) {
  // Then block
} else {
  // Else block
}
```

The expression in the if statement is evaluated. If the expression is true, the then block will execute, and if false, the else block will execute.

The else part is optional. In this case, we would have an if-then statement.

```java
if (expression) {
  // Then block
}
```

Here's an example:

```java
int value = 4;

if (value < 10) {
  System.out.println("The number is less than 10");
} else {
  System.out.println("The number is greater than 10");
}
```

If-then-else statements can be nested, resulting in an if-then-else if statement with the following structure:

```java
if (expression) {
  // Then block
} else if {
  // Else block
} else if {
  // Else block
} else if {
  // Else block
} ...
```

This allows the following code:

```java
int value = 14;

if (value < 10) {
  System.out.println("The value is a single unit");
} else if (value < 100) {
  System.out.println("The value is a decade");
} else if (value < 1000) {
  System.out.println("The value is a hundred");
} else if (value < 10000) {
  System.out.println("The value is a thousand");
} else {
  System.out.println("It's a big number");
}
```

## Using `switch`

For cases where there are many branches or execution paths in an if statement, we use the switch statement. The switch statement evaluates an expression and executes the block of code that matches the expression's value.

The value of the expression must be numeric. However, starting from Java SE 7, you can use expressions that evaluate to strings.

The structure of the switch statement is:

```java
switch (expression) {
  case value1:
    block1;
    break;
  case value2:
    block2;
    break;
  case value3:
    block3;
    break;
  ...
  default:
      default_block;
}
```

It’s important to use the `break` statement. The break statement exits the switch statement, preventing the evaluation of the remaining cases. Therefore, it is mandatory at the end of each block.

A clear example of when to use the switch statement is evaluating the value of a month numerically and converting it to a string. The code would look like this:

```java
int iMonth = 3;
String sMonth;

switch (iMonth) {
    case 1:
        sMonth = "January";
        break;
    case 2:
        sMonth = "February";
        break;
    case 3:
        sMonth = "March";
        break;
    case 4:
        sMonth = "April";
        break;
    case 5:
        sMonth = "May";
        break;
    case 6:
        sMonth = "June";
        break;
    case 7:
        sMonth = "July";
        break;
    case 8:
        sMonth = "August";
        break;
    case 9:
        sMonth = "September";
        break;
    case 10:
        sMonth = "October";
        break;
    case 11:
        sMonth = "November";
        break;
    case 12:
        sMonth = "December";
        break;
    default:
        sMonth = "Invalid month";
}

System.out.println(sMonth);
```

## It's about asking the right questions

The previous example was a simple condition, but in real life, choosing what to do involves combining multiple conditions to make the final decision. For example: Here’s an algorithm that tells a computer how to decide what to wear on Valentine's Day:

![What to wear on Valentine's Day](https://github.com/breatheco-de/content/blob/master/src/assets/images/87f2be86-32c3-4bfc-8db4-dbd0d979e4d3.jpeg?raw=true)

If you want to represent this algorithm in Java, it would look something like this:

```java
if (goingOut){
  if (canIGetBurger){
    if (placeBottleWine){
      if (coolMix){
            /* do something */
      }
    }else{
      if (blazers > 3){
          /* do something */
      }else{
          /* do something */
      }
    }
  }else if (shePants){
      /* do something */
  }else{
      /* do something */
  }
}else{
  if (nakedSheDoor){
      /* do something */
  }else if (blazers > 3){
      /* do something */
  }else{
      /* do something */
  }
}
```

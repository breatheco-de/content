---
title: "Conditional Programing in Java"
subtitle: "Using conditionals to control your code flow in Java"
status: "published"
date: "2020-10-19T12:36:31-04:00"
cover_local: "../../assets/images/4cc6fa0b-2530-4052-aa7e-8dac03788ac3.png"
textColor: "white"
tags: ["conditionals","logical operations","if else","conditions","java"]

---

Mastering the use of conditions is one of the 5 fundamental skills of building algorithms:


1. Variables.
2. `Conditionals`.
3. Arrays.
4. Loops.
5. Functions.

Conditions are the only way developers have to tell the computer how to make decisions in real time, much like how human brains work.

Let's say we are building a program to help us choose what to store and we hate the color blue, we can tell the computer to avoid blue using a condition like this:
  
  
`If` ***color*** is not **blue**, then... do something.  
`Else`... do nothing or exit.
  
![Conditionals](../../assets/images/e73b673e-d744-45a7-a1ed-61a1dae49560.png)

The decision statements are: ʻif-then-else` and `switch`.


## Using ʻif ... then ... else``

The structure of the ʻif-then-else` statements is:

```java
if (expression) {
  // then 
} else {
  //  else 
}
```

The expression indicated in the `if statement` is evaluated. If the expression is true, the block of then statements will be executed and if the expression is false, the block of else statements will be executed.

The else part does not have to exist. In this case we would have an if-then statement.

```java
if (expression) {
  // then
}
```

this way we could have the following source code:

```java
int valor = 4;

if (valor < 10) {
  System.out.println("number is less than 10");
} else {
  System.out.println("numer is bigger than 10");
}
```

The if-then-else statements can be nested and thus we would find an if-then-elseif statement, which would have the following structure:
```java
if (expression) {
  // then
} else if {
  // else
} else if {
  // else
} else if {
  // else
} ...
```

In this way we can have the following code:

```java
int value = 14;


if (value <10) {
  System.out.println ("The value is a unit");
} else if (value <100) {
  System.out.println ("The value is ten");
} else if (value <1000) {
  System.out.println ("The value is a hundred");
} else if (value <10000) {
  System.out.println ("The value is a thousand");
} else {
  System.out.println ("It's a big number");
}
```

## Using `switch`

For cases in which there are many paths of execution in an if statement we have the switch statement. The switch statement evaluates an expression and will execute the block of statements that matches the value of the expression.

The value of the expression must be numeric. Although from Java SE 7 you can already use expressions whose evaluation is strings.


The structure of the switch statement is:

```java
switch (expression) {
  case value1:
    block1;
    break;
  case value2:
    Block 2;
    break;
  case value3:
    block3;
    break;
  ...
  default:
      default_block;
}
```

It is important to see that the break statement is used. The break statement causes the switch statement to be exited and therefore the rest of the statements are not evaluated. Therefore its use is mandatory at the end of each of the blocks.

A clear example in which we can use the switch statement is to evaluate the value of a month in numerical terms and convert it to a string. This code would be as follows:

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
        sMes = "Octubre";
        break;
    case 11:
        sMonth = "November";
        break;
    case 12:
        sMonth = "December";
        break;
    default:
        sMonth = "incorrect month";
}

System.out.println(sMonth);
```

## It's about what questions to ask

The example above was a simple condition, but in real life, choosing what to do involves a combination of several conditions to make the final decision, for example: Let's look at this algorithm that tells a computer how to decide what to wear on Valentine's Day. Valentine:

![What to wear in valentines day](../../assets/images/87f2be86-32c3-4bfc-8db4-dbd0d979e4d3.jpeg)

If you want to represent this algorithm in Java, it will look something like this:
```java
if (goingOut){
  if (canIGetBurger){
    if (placeBotleWine){
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

---

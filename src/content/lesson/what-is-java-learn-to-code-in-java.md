---
title: "¿What is Java? Learn to code in Java"
subtitle: "Conozca qué es Java, todos están hablando de ello y, probablemente, ya sepa que es hora de aprender a programar en Java para llevar las cosas al siguiente nivel."
cover_local: "../../assets/images/4cc6fa0b-2530-4052-aa7e-8dac03788ac3.png"
textColor: "white"
status: "published"
date: "2020-10-19T16:36:31+00:00"
tags: ["java", "javascript"]

---

## But, what is Java?

“Java is a programming language and a computer platform commercialized for the first time in 1995 by Sun Microsystems”, this is how easily the Java website itself summarizes what this technology is.

It was born with the objective of being a programming language with a simple structure that could be executed in several operating systems. 

## But what is it for?

+ Java is used to create applications and processes in a great diversity of devices.
+ It is based on **goal oriented programming**.
+ It allows to run the same program on different operating systems and to execute the code on remote systems in a secure way.

## Differences between Java and JavaScript

The similarity in name between Java and JavaScript means that they are sometimes confused. However, the two are totally different. 

Showing some of their differences

| **Java**  | **JavaScript**   |  
|:--------------|:--------------|  
| It is a compiled language | It is an interpreted language |  
| It is debugged in two phases | It is debugged in one phase |  
| It is a purely object-oriented language | It is prototype-based |  
| It is strongly typed | It is weakly typed |

## Variables

<iframe width="830" height="467" src="https://www.youtube.com/embed/Q-eob0WBKs0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<div align="right"><small><a href="https://www.youtube.com/embed/Q-eob0WBKs0">Click here to open video in a new window</a></small></div>

Variables are not a new concept, anyone who knows mathematics is familiar with the concept of variables.

A variable is a container in which you can store any data. For example, you can have the following variable:

**Variables in Java**.

Java variables are a memory space in which we store a certain value (or data). To define a variable we will follow the structure:

```java
[privacy] variable_type identifier;
```

Java is a statically typed language. Therefore all variables will have a data type (either a primitive data type or a class) and an identifier name.

The data type will be assigned when defining the variable. In addition, in the case that variables are object properties they will have a privacy.

Examples of variables would be...
```java
int number = 2;
String string = “Hello”;
long decimal = 2.4;
boolean flag = true;
```

Variables are used as properties within objects.
```java
class Triangle {
    private long base;
    private long height;
}
```
> Don't worry about the concept of object, as we will review it later when we talk about Object Oriented Programming.

**Types of variables in Java**

Within Java we can find the following types of variables:

+ **Instance variables (non-static fields):**, these are variables that are defined within an object but do not have a static modifier (static). They usually have a visibility modifier (public, private, protected) being defined.

```java
class Triangle {
    private long base;
    private long height;
}
```

+ Class variables (static fields):** are those variables that are preceded by the static modifier. This indicates that there is only one instance of that variable. That is, even if we have N objects of the class, the static variable is instantiated only once.

```java
class Triangle {
    static long sides = 3;
}
```
If we also want that the value can never change we will define it as final.

```java
class Mathematics {
    final static long PI = 3.14159;
}
```

+ **Local variables:** are temporary variables whose scope of visibility is the method on which they are defined. They cannot be accessed from elsewhere in the code. They are distinguished from instance variables because instance variables do not have visibility modifiers in front of them.

```java
int variable = 2;
```

+ Parameters:** are the variables received as parameters of the methods. Their visibility will be the code contained in that method.

```java
public Triangle(long base, long height){...}
```

## Java variable names

When we are going to give a name to a variable we will have to take into account a series of rules. That is to say, we cannot give any name we want to a variable.

Identifiers are unicode, case sensitive text sequences whose first character can only be a letter, number, dollar symbol $ or underscore _ . While it is true that the dollar sign is not used by convention.
It is recommended that the names of the identifiers be legible and not acronyms that we cannot read. In such a way that they are self-documenting when viewed. In addition, these identifiers can never coincide with reserved words.

Some unwritten rules, but which have been assumed by convention are:

+ Identifiers are always written in lower case. **(e.g. name)**. 
+ If there are two or more words, the beginning of each following word is capitalized **(e.g. namePerson)**.
+ If the identifier implies that it is a constant. That is to say that we have used the modifiers **final static**, this name is usually written in capital letters **(pe. LETTER)**. 
+ If the constant is composed of two words, these are separated with an underscore **(e.g. LETRA_PI)**.

## Literals in Java


The literal values are those that we can assign to the variables. Depending on the type of variable we will be able to assign some values or others.

**Integer literals**

The integers we can use are byte, short, int and long. The literals we assign to them will always be an integer.

```java
byte variableByte = 12;
short variableShort = 12;
int variableInt = 12;
long variableLong = 12;
```

While for the case of the long type we can create integer literals ending in L (upper or lower case, although for readability we recommend the first one)

```java
long variableLong = 12D;
```

There are other values that can be handled by the integer literals, for when we represent the number in different bases. For example when we handle them as binary or hexadecimal. For this case we will have to handle integer literals that have that format.

```java
int variableBinary = 011010;
int variableHexadecimal = 0x1a;
```

**Decimal literals**

The two decimal data types we can handle are float and double. For these cases the representation of the decimal literal will be with a dot separation between the integer part and the decimal part.

```java
float variableFloat = 12.2;
double variableDouble = 12.2;
```

In the same way we can use the letters F or f for the float data type and D or d for the double data type. Always, for readability, the uppercase letter is recommended.

```java
float variableFloat = 12.2F;
double variableDouble = 12.2D;
```

**Character literals and strings**

Both characters of the char data type and strings of the String data type contain Unicode UTF-16 characters.

UTF-16 characters can be written directly in the string or if our text editor does not allow us to handle that encoding we can put them escaped in the format.

```java
'uCODIGOUNICODE'
```

For example the letter like ñ would be escaped as follows:

```java
'u00F1'
```

To use it in a text string ``Spain'' we could put

```java
String pais = "Espau00F1a";
```

For characters we will use single quotes to delimit them, while for strings we will use double quotes.

```java
char variableChar = 'a';
String variableString = 'string';
```

## Primitive Data Types in Java


As we have already mentioned, Java is a statically typed language. That is to say, the data type of the variable is defined at the time of defining it. That is why all variables will have a data type assigned to them.

The Java language provides a series of primitive data types as a basis.

| **Type**   | **Possible Values**   | **Description**   | **Default Value** |  
|:---------------|:--------------------|:-----------------|:-----------------|  
| byte | Numeric values from -128 to 127 (inclusive) | Represents an 8-bit signed data type that can store numeric values from -128 to 127 (inclusive). | 0 |  
| short | Numeric values from -32,768 to 32,767 | Represents a 16-bit signed data type that stores numeric values from -32,768 to 32,767. | 0 |  
| int | Numeric values | A 32-bit signed data type for storing numeric values. Its minimum value is -2³¹, and its maximum value is 2³¹-1. | 0 |  
| long | Numeric values between -2⁶³ to 2⁶³-1 | A 64-bit signed data type that stores numeric values between -2⁶³ and 2⁶³-1. | 0L |  
| float | Numeric values | A data type for storing floating-point numbers with single-precision (32-bit). | 0.0f |  
| double | Numeric values | A data type for storing floating-point numbers with double-precision (64-bit). | 0.0d |  
| char | Unicode character | A data type that represents a single 16-bit Unicode character. Note: Unicode characters must be enclosed in single quotes. | 'u0000' |  
| String (or any object) | Any sequence of characters | Strings are the only way to store words (sequences of characters). Note: Strings must be enclosed in double quotes. | null |  
| boolean | true \| false | Used to define boolean data types, which have a value of either true or false. It occupies 1 bit of memory. | false |

<iframe height="400px" width="100%" src="https://repl.it/repls/TreasuredHeartyProfessionals?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

## Expressions, statements and blocks in Java


A Java program consists of a set of statements that are executed to solve a problem. Statements are the basic element of Java program execution.

Apart from the statements, in a Java program we will find expressions and blocks.

**Expressions**

An expression is a set of variables, operators and method invocations that are constructed to be evaluated by returning a result.

Examples of expressions are:

```java
int value = 1;
if (value 1 > value2) { ... }
```

When we have complex evaluation expressions it is recommended that we use parentheses to know which is the order of execution of operations.

Because if we have an expression like

```java
2 + 10 / 5
```

It will not be the same if we put
Since if we have an expression like:

```java
(2 + 10) / 5 ó 2 + (10 / 5)
```
In the case of not using parentheses the order of preference of operators will be executed. In this case division takes precedence over addition.

**Statements**

A statement is the minimum unit of execution of a program. A program is composed of a set of statements that end up solving a problem. **At the end of each of the statements we will find a semicolon (;)**.

We have the following types of statements.

> Statement statements
```java
int value = 2;
```

> Assignment statements
```java
value = 2;
```

> Increment or decrement statements
```java
value++;
```
> Method invocations
```java
System.out.println(“Hello World”);
```
> Object creations
```java
Circle myCircle = new Circle(2,3);
```

> Flow control statements
```java
if (value>1) { ... }
```

**Blocks**

A block is a set of statements which are delimited by braces.

```java
if (expression) {
    // Block 1
} else {
    // Block 2
}
```

## Java Assignment and Arithmetic Operators


+ **Assignment Operator**

The simplest Java operator is the assignment operator. This operator is used to assign a value to a variable. **The assignment operator is the equals sign**.

The structure of the assignment operator is:

**variable = value;**

This way we can assign values to variables of type integer, string,...

```java
int number = 3;
String string = "Hello world";
double decimal = 4.5;
boolean truth = true;
```

+ **Arithmetic Operators**.

Arithmetic operators in Java are the operators that allow us to perform mathematical operations: addition, subtraction, multiplication, division and remainder.

The arithmetic operators in Java are:

|**Operator** |**Description** |
|:--------------|:--------------|
|+ |Sum Operator. Concatenates strings for the sum of String|
|- |Subtract Operator|
|* |Multiplication Operator|
|/ |Division Operator|
|% |Subtract Operator|

The arithmetic operators in Java are used between two literals or variables and the result is usually assigned to a variable or evaluated.

**variable** = (value1|variable1) **operator** (value2|variable2);

Thus we can have the following uses in case we want to assign its value.

```java
sum = 3 + 7; // Return 10
subtraction = 5 - 2; // Returns 3
multiplication = 3 * 2; // Returns 6
division = 4 / 2; // Return 2
remainder = 5 % 3; // Return 2
```

Note that they can be values or variables:
```java
sum = vble1 + 3; // We add 3 to the value of the variable vble1
subtract = vble1 - 4; // Subtract 4 from the value of the variable vble1
```
Or we could use it in a condition
```java
if (variable > sum + 3) { ... }
```
In this case we don't assign the result of the sum to a variable, we just evaluate it.

+ **Unary operators in Java**

Unary operators in Java are those that require only one operand to work.

The unary operators we have in Java are:

| **Operator**  | **Description**   |  
|:--------------|:--------------|  
| +  | Unary addition operator. Indicates a positive number. |  
| -  | Unary subtraction operator. Negates an expression. |  
| ++ | Increment operator. Increases the value by 1. |  
| –  | Decrement operator. Decreases the value by 1. |  
| !  | Logical complement operator. Inverts the value of a boolean. |

+ Unary addition or subtraction operators**.
The unitary addition or subtraction operators are very simple to use. In the case of the unitary addition operator its use is redundant. With the unitary subtraction operator we can invert a value.

For example we could have the following code:

```java
int value = 2;
System.out.println(-value); // Will print a -2 on the screen.
```
+ **Increment and decrement operators**.

Increment operators can be applied as a prefix or as a suffix.

```java
++ variable;
variable ++;
-- variable;
variable --;
```

+ **Logical Complement Operator**. 

The logical complement operator is used to negate a boolean value. It is typically placed before a boolean evaluation operation, commonly in decision statements or loops.  

The structure is:  

**! (expression)**  

If the expression was `true`, it turns it into `false`, and if it was `false`, it turns it into `true`.  

We can see it in the following example:  

```java
int vble1 = 2;
int vble2 = 3;

if (!(vble1 > vble2))
    System.out.println("variable 1 is smaller than variable 2");
```
As we can observe, the evaluated expression's value is inverted.  

---

+ **Equality and Relational Operators in Java**  

Equality and relational operators in Java allow us to compare the contents of one variable against another, checking if their values are equal or different, or if one value is greater or smaller than the other.  

| **Operation**  | **Syntax**  | **Examples**  |
|---------------|------------|--------------|
| Equal to     | `==`       | Is `5 == 5`? True!<br>Is `5 == 4`? False!<br>Is `5 == '5'`? True! |
| Not Equal to | `!=`       | Is `5 != 5`? False!<br>Is `5 != '5'`? False!<br>Is `1 != 'Hello'`? True! |
| Greater than | `>`        | Is `5 > 5`? False!<br>Is `6 > 3`? True! |
| Less than    | `<`        | Is `6 < 12`? True! |
| Greater or Equal to | `>=`  | Is `6 >= 6`? True!<br>Is `3 >= 6`? False! |
| Less or Equal to | `<=`   | You get the idea 🙂 |

---

### **Conditional Operators in Java**  

Conditional operators in Java evaluate two boolean expressions.  

| **Operation**  | **Syntax** | **Examples**  |
|--------------|------------|--------------|
| AND  | `&&`       | With AND, both sides MUST BE TRUE for the whole expression to be true.<br>Is `(5 == 5 && 3 > 1)`? True!<br>Is `('Ramon' == 'Pedro' && 2 == 2)`? False! |
| OR (`||`)   | `\|\|`     | Is `('Oscar' != 'Maria' OR 2 != 2)`? True!<br>Is `(5 == '5' AND 'Ramon' != 'Pedro') OR (2 == 2)`? True! |
| NOT (`!`)   | `!`        | NOT gives the exact opposite of the logical operator result:<br>Is `!(5 > 5)`? True!<br>Is `!(True)`? False! |
| Ternary Operator | `?:`  | With the ternary operator, you can write conditions in a single line: **`(5 == 5) ? 5 : 0`** |

## Control Statements in Java

Now things start to get interesting! To control the flow of your application, you have several options that you will use daily. Therefore, you should feel comfortable using them.  

A Java program executes sequentially from the first statement to the last.  

However, **control flow statements** allow us to alter this flow to make decisions or repeat statements.  

The main control flow statements are:  

+ **Decision Statements**  

Decision statements allow us to execute one block of statements or another based on a condition.  

The main decision statements are: `if-then-else` and `switch`.  

Using `if-then-else`, we can evaluate a condition and choose between two different blocks of code:  

```java
if (expression) {
  // Then block
} else {
  // Else block
}
```
With `switch`, we can evaluate multiple conditions and execute the corresponding block for each case:  

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
  …
  default:
      default_block;
}
```
> Use `switch` instead of `if` when:  
> - You are comparing multiple possible conditions of an expression, and the expression itself is not trivial.  
> - You have multiple values that may require the same code.  
> - Some values require almost the same execution as another value with only slight differences.  
>  
> Use `if` instead of `switch` when:  
> - You want to test the truth value of an expression.  
> - You only have a single affirmative test.  
> - Each branch requires a different expression evaluation.  

+ **Loop Statements**  

Loop statements allow us to execute a block of statements multiple times, either for a specific number of times or while a condition is met.  

When the condition is no longer met, the loop exits.  

The main loop statements in Java are: `while`, `do-while`, and `for`.  

With `while`, the loop runs as long as the condition is true, but it may never execute if the condition is false from the start:  

```java
while (expression) {
  block_statements;
}
```

On the other hand, `do-while` ensures that the block executes at least once:  

```java
do {
  block_statements;
} while (expression);
```

The `for` loop allows a more compact structure while achieving the same result:  

```java
for (initialization; condition; increment) {
  block_statements;
}
```

`Enhanced For Loop (For-Each)`

Recent Java versions introduced an enhanced version of the `for` loop, called "for-each". This loop simplifies iterating through objects in a collection without needing to define the number of elements to iterate over.  

The syntax is:  

```java
for (TypeToIterate temporaryVariableName : collectionName) {
    instructions;
}
```

+ **Branching Statements**  

Branching statements allow us to break the linear execution flow of a program.  

By default, Java executes statements sequentially. However, branching statements let us interrupt this sequence.  

The main branching statements in Java are: `break` and `continue`.  

- `break`: Exits the current block of statements.  
- `continue`: Skips to the next iteration of the loop.  

## So... Tell me, did you like Java? 

Java is more than just another programming language; it comes with fun instructions that we can discover throughout the course! 🚀
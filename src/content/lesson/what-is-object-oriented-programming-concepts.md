---
title: "Object Oriented Programming"
subtitle: "Classes are the last pieces needed to master the programming tricks! Welcome to the amazing world of object-oriented programming."
cover_local: "../../assets/images/e16d59ad-4c11-4ca0-8bfc-5a9d147c6c2e.jpeg"
textColor: "white"
date: "2020-10-19T16:36:31+00:00"
tags: ["object oriented programming"]
status: "published"

---

## What is Object Oriented Programming


Everything we have coded up until now revolves around functions (i.e. blocks of statements which manipulate data).  This is called the ***procedure-oriented*** way of programming.  There is another way of organizing your code, which is to combine data and functionality, and wrap it inside something called an  object.  This way of coding its called the ***object-oriented*** way of programming, and is ideal when writing large applications.

### Everything we code is now wrapped inside objects…

The universe is made of different objects like: the sun, earth, moon, chairs and crazy people.  Similarly, we can imagine that our car is made up of different objects, like: steering wheel, air conditioner, engine etc.  In that same way, there are object oriented programming concepts which assume that everything is an object, and implements a software for different objects.

### Why use OO Programing?


There are two kinds of people in this world:

+ The ones that **like** object oriented programming and are willing to die for it.
+ The ones that **hate** object oriented programming and will never use it again.

### Why should you love it?

The 2 biggest advantages are:

+ **Encapsulation:**  You are forced to encapsulate all of your code into tiny little parts that are separated from each other. Each of those parts can be tested separately, and when they work, you don’t have to think about them again – you can just use them (it is similar to using functions but A LOT BETTER).
+ **Reusability:** When using OO programming in a good way, you will end up reusing your code like never before.  It is so easy to re-use that you will probably not only be using it in that particular website, but also in every website you ever make during the rest of your life.  Write the code one time; use it forever.

### Why should you hate it?

Creating a program in an object-oriented way can be slower at the beginning because you have to divide all of your code into all of these little parts.  Also, there are certain – very particular – scenarios when using this practice that can complicate your program.

But hey!!…you don’t need to be one of those people that must "love" or "hate" everything.  Instead, try to understand that everything has pros and cons.  Become a master in this technique and use it wisely.

## This is all about Objects and Classes


Classes and objects are the two main aspects of object oriented programming.  A **class** creates a *new type (of object)* where **objects** are particular **instances** of a particular class.

**Example:**

> Let’s say you have a new car with licence plate XHR-ABM.  That specific object will be the instance of an object with the car class.

![what is object oriented programming concepts](https://github.com/breatheco-de/content/blob/master/src/assets/images/ed2a2bfb-95eb-473f-af7c-aa9f1d4c055e.jpeg?raw=true)

## Defining Classes (abstraction)


Every application and website that you are going to build needs to have its own set of classes.  Which classes will depend on the business logic behind the website (it’s ultimately all about the client and the need(s) that they are trying to resolve).



### Classes have Properties (a.k.a attributes) that Describe them…

For example: A Person class has: skin color, race, name, social-security number, etc.  All properties have a data-type, like: Integer, String, Float, Null, Arrays.

![what is object oriented programming concepts](https://github.com/breatheco-de/content/blob/master/src/assets/images/10ce9a67-1060-4550-a824-5087688d0630.png?raw=true)



### Some Properties can be a Class instead of being a simple Data-Type…

If we want to store the birth-date of the person using simple data-types we will have to define 3 properties: yearBirthDate, monthBirthDate and dayBirthDate.

A better solution will be to use pre-defined Date classes or functions that come with most of the back-end programming languages, for example [PHP Date](https://www.w3schools.com/php/php_date.asp) or [Python datetime.](https://www.pythonforbeginners.com/basics/python-datetime-time-examples)

![what is object oriented programming concepts](https://github.com/breatheco-de/content/blob/master/src/assets/images/6f07bc8b-6d21-46e6-8710-34992df2508b.png?raw=true)



### Classes can have Calculated Properties

Some properties are calculated during runtime every time we need them.  For example: age.  The problem with age is that it changes over time.  That is why it is not a good idea to store the current age of the user.   Instead, it is better to declare a calculated property called "Age," and declare a function that calculates the current age of the user based on its birthDate.

![what is object oriented programming concepts](https://github.com/breatheco-de/content/blob/master/src/assets/images/a2a08a9f-5a5c-415e-93d6-c8a45aecb23d.png?raw=true)



## Lets do our first Class-Diagram!


Lets do our first Class-Diagram!
Let say that you are designing the object oriented model of a new website, and your client wants to create a shopping cart.  This is easy because these types of websites are being made every day (it will actually be both wiser and more efficient to clone an already-made model; however, for the sake of this lesson, we are going to continue with our example).

When building any Class Diagram of your application, you should take these following bullets into consideration:

+ The name each class is given should properly describe the aspect of the system that particular class represents.
+ Each class and their relationships should be identified in advance.
+ Properties and functions of each class should be clearly identified in the diagram.
+ For each class, the minimum number of properties should be specified (unnecessary properties will make the diagram complicated).
+ Use notes when ever required to describe some aspect of the diagram.  At the completion of the drawing, it should be understandable to the developer/coder.

> :point_up: It is important to say that there are no right or wrong solutions for these kinds of problems.  You must remain confident and stick to your strategy.  However, make sure you take enough time to design a good one before adding some code – otherwise it will become difficult to change things up during the development of big applications (with lots of classes) .

### Building a Car Dealer Website

We have a client that wants to start selling cars on the internet. What do we do?  The website will probably need to have an index page with a list of all the cars that he has available at the moment.  The user will be able to add cars to a shopping cart and finish the order whenever it is ready.

### Starting the Abstraction…

Okay, it is obvious that the first objects we need are a *ShoppingCart* class and a *Car* class.

Now that we have our first 2 classes of objects, to continue developing the model you can can ask yourself (or the client) the following:

+ **To add more classes:**  Who interacts with my current classes?  And, what is the relationship between the classes?
A ShoppingCart has one Client, A ShoppingCart has several Cars.
+ **To add more properties:**  How can I describe one particular Client, ShoppingCart or Car?
Clients have usernames, names, lastNames.  Cars have color, brand, price, etc.  ShoppingCarts have totalPrice, list of products, user owner, etc.

### Our Class Model is looking like this:

![what is object oriented programming concepts](https://github.com/breatheco-de/content/blob/master/src/assets/images/61908aa1-63a5-40b1-8a53-8c7b202d4ef3.png?raw=true)

### Writing the Functions, Relationships and Inheritance

Class diagrams also need to express the way classes relate to each other and the functions they have (including "getter" and "setter" functions).

## Writing a Class (syntax)


To declare a class we need to use the word "class" anywhere in our code followed by the class name that we want to assign to it.  Start and finish each class with brackets.

The properties are declared at the beginning of each class; globally within the brackets of that particular class.

Right after the properties, you have to declare the functions.

## The Class Constructor



The "class constructor" is the first function that gets called in the entire class.  It gets called as soon as the object is created.  It is very good practice to assign initial values to the class properties inside its constructor method.

We call the constructor one of the "magic functions."  They are "magical" because you don’t have to call those functions yourself – they are magically called by the server depending on the purpose that they have (in the case of the constructor, remember the purpose is about initialization).

Magic functions always start with two underscores, and the __construct() .  We use __construct() in order to do something as soon as we create an object out of a class.  A function of this kind is called a constructor.  Usually we use the constructor to set a value to a property.

## The "this" or "self" Operator


The "this" (in JavaScript and PHP) or "self" (in Python) indicates that we are using the class specific methods and properties, and allows us to have access to them within the class specific scope.

## Class Properties Syntax


The properties are declared at the beginning of each class (globally within the brackets of that particular class).  Right after the properties, you have to declare the calculated properties as well.

### Public and Private properties

All class properties have a Public visibility by default; you can change their visibility to private if you think it best:*

> :point_up: *JavaScript and Python don’t have private or public properties – they are all public by default.  It is in good practice to use the underscore symbol to simulate the same behavior.



#### Public Properties

Properties that can be accessed from outside the class using the -> operator.



#### Private Properties

They cannot be accessed from outside the class; the only way to access or use them is inside the class functions using the $this-> operator.
To  access a private property you need to create two functions: ***a getter and a setter:***

+ The getter function will be responsible for accessing the value internally and returning it to whoever called upon it.
+ The setter function is responsible for assigning the given value (as a parameter) to the internal private property.



### What is the Point of Using "getters" and "setters"?

Perhaps you may feel that it is pointless to use "getters" and "setters" for every property, and you are probably right in most cases.  But, even if you think that writing the "getters" and "setters" are NOT necessary for a particular property, it is a very good practice because you never know when you will need them.

**When do we really need Private Properties and a "getter/setter"?**

+ **When we want to validate data:**  Let’s say we want to validate that a person’s name cannot contain numbers – a setter is great because you can avoid assigning the value if it is not how you like it.
+ **Some properties need to be set internally:**  For example: an automatically generated ID that you don’t want the user to be able to set, but you do want the user to get.
  
*Here is another example of a "getter/setter" in real-life:*

![what is object oriented programming concepts](https://github.com/breatheco-de/content/blob/master/src/assets/images/js.png?raw=true)

<iframe height="400px" width="100%" src="https://repl.it/@4GeeksAcademy/Object-Oriented-Javascript?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

<div align="right"><small><a href="https://repl.it/@4GeeksAcademy/Object-Oriented-Javascript?lite=true">Click here to open demo in a new window</a></small></div>

![what is object oriented programming concepts](https://github.com/breatheco-de/content/blob/master/src/assets/images/python.png?raw=true)
<iframe height="400px" width="100%" src="https://repl.it/@4GeeksAcademy/Python-Class-Example?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

<div align="right"><small>
<a href="https://repl.it/@4GeeksAcademy/Python-Class-Example?lite=true">Click here to open demo in new window</a></small></div>

![what is object oriented programming concepts](https://github.com/breatheco-de/content/blob/master/src/assets/images/php.png?raw=true)
<iframe src="https://repl.it/G1cx/0?lite=true" frameborder="0" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals" width="100%" height="400px" scrolling="no" allowtransparency="true" allowfullscreen="true"></iframe>

<div align="right"><small><a href="https://repl.it/G1cx/0?lite=true">Click here to open demo in a new window</a></small></div>

> :point_up: Some languages, like PHP, have their own __get and __set magic functions to implement getters and setters.  However, this is not a good idea because of performance issues.  It is a better idea to create your own "get/set" functions according to your project needs.  [Here is the reasoning behind it.](https://stackoverflow.com/questions/6184337/best-practice-php-magic-methods-set-and-get)



## Encapsulation (Divide and Conquer)


***Encapsulation*** is the process of combining data and functions into a single unit called a "class."

When you create an object in an object-oriented language, you can hide the complexity of the internal workings of the object.  As a developer, there are two main reasons why you would choose to hide complexity:

The first reason is to provide a simplified and understandable way to use your object without the need to understand the complexity inside of it.

For example, a car driver doesn’t need to know how an internal combustion engine works.  It is sufficient to know how to start the car, how to engage the transmission (if you want to move), how to provide fuel, how to stop the car, and how to turn off the engine.  You know how to use the key, the shifter (and possibly clutch), the gas pedal and the brake pedal to accomplish each of these operations.  These basic operations form an interface for the car.  Think of an interface as the collection of things you can do to the car without knowing how each of those things works.

Hiding the complexity of the car from the user allows anyone, not just a mechanic, to drive a car.  In the same way, hiding the complex functionality of your object from the user allows ANYONE to use it and to find ways to reuse it in the future (regardless of their knowledge of the internal workings).  This concept of keeping implementation details hidden from the rest of the system is key to object-oriented design.

## Inheritance


In [object-oriented programming](https://searchmicroservices.techtarget.com/definition/object-oriented-programming-OOP), inheritance is the concept that when a [class](https://whatis.techtarget.com/definition/class) of [objects](https://searchmicroservices.techtarget.com/definition/object) is defined, any subclass that is defined can inherit the definitions of one or more general classes.  This means that, for the programmer, an object in a subclass need not carry its own definition of data and methods that are generic to the class (or classes) of which it is a part.  This not only speeds up program development; it also ensures an inherent validity to the defined subclass object (what works and is consistent about the class will also work for the subclass).

**For example:**

"Car" is a classification of "Four-Wheeler."  Here, "Car" acquires the properties of a "Four-Wheeler."  Other classifications could be a Jeep, Tempo, van etc. "Four-Wheeler" defines a class of vehicles that has four wheels, a specific range of engine power, load carrying capacity etc.  "Car" (termed as a sub-class) acquires these properties from "Four-Wheeler" (termed as a super-class), and has SOME specific properties that are different from other classifications of "Four Wheeler," such as luxury, comfort, shape, size, usage, etc.

"Car" can have further classification such as "Open Car," "Small Car," "Large Car," etc, which will acquire the properties from BOTH "Four-Wheeler" AND "Car" – but will still have some specific properties.  This way the level of hierarchy can be extended to any level.
![what is object oriented programming concepts](https://github.com/breatheco-de/content/blob/master/src/assets/images/js.png?raw=true)
<iframe height="400px" width="100%" src="https://repl.it/@4GeeksAcademy/ObjectOriented2?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

<div align="right"><small><a href="https://repl.it/@4GeeksAcademy/ObjectOriented2?lite=true">Click here to open demo in a new window</a></small></div>

![what is object oriented programming concepts](https://github.com/breatheco-de/content/blob/master/src/assets/images/php.png?raw=true)
<iframe src="https://repl.it/G1cq/0?lite=true" frameborder="0" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals" width="100%" height="400px" scrolling="no" allowtransparency="true" allowfullscreen="true"></iframe>

<div align="right"><small ><a href="https://repl.it/G1cq/0?lite=true">Click here to open demo in a new window</a></small></div>

![what is object oriented programming concepts](https://github.com/breatheco-de/content/blob/master/src/assets/images/python.png?raw=true)
<iframe height="400px" width="100%" src="https://repl.it/@4GeeksAcademy/Python-Class-Inheritance?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

<div align="right"><small><a href="https://repl.it/@4GeeksAcademy/Python-Class-Inheritance?lite=true">Click here to open demo in a new window</a></small></div>









  








  


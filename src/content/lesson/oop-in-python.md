---
title: What is Object Oriented Programming?
tags:
  - python
  - object-oriented-programming
authors:
  - DF27ARTS
description: >-
  Discover the fundamentals of Object Oriented Programming (OOP) in Python!
  Learn to create organized, reusable code and master essential concepts today!
---
## Introduction to Object-Oriented Programming in Python

Hello, future code master! In this lesson, we will explore the fascinating world of Object Oriented Programming (OOP). You will discover what OOP is and how this powerful technique allows you to create more organized, reusable, and maintainable programs.

Following we will see a small example of how to represent a person with a class of [Python](https://4geeks.com/lesson/how-to-code-in-python).

```py runable=true
class Person:
    def __init__(self, name, lastname, age):
        self.name = name
        self.lastname = lastname
        self.age = age

    def presentation_message(self):
        return f"¡Hi!, my name is {self.nombre} {self.apellido} and I am {self.edad} years old"

person = Person("Thomas", "Smith", 27)
print(person.presentation_message()) # output: ¡Hi!, my name is Thomas Smith and I am 27 years old.
```

This example shows how to represent a person using this style of object-oriented programming (OOP), to represent a real world object in a class. First, you must create a class with the name of that object, then within the class, you create the function `__init__()` and inside this function, you will create the properties of your object such as name, age, weight etc..., you may also create functions (methods) to manipulate the properties of the object.

## What is Object Oriented Programming (OOP)?  

Object Oriented Programming (OOP) is an approach to programming that is based on the idea of "objects". Instead of writing sequential lines of code, in OOP we create objects that represent real-world entities or abstract concepts. These objects contain both data (attributes) and functions (methods) that act upon that data. 🏰🔧

Object-oriented programming (OOP) is based on four main principles.

1.  **Abstraction**: We represent real world entities and concepts in the form of objects with attributes and methods.
   
2.  **Encapsulation**: We hide the internal details of the object and only expose an interface to interact with it.
   
3.  **Inheritance**: Objects can inherit attributes and methods from other objects, allowing the creation of class hierarchies.
   
4.  **Polymorphism**: Objects can use the same methods with different implementations.

> Don't worry, we will explain each of these concepts in more detail later.

## Classes and Objects: The Foundations of OOP

In OOP, we define the characteristics and behaviors of an object using a "class". A class is like a blueprint or template that describes how the object is created and what it can do. For example, we can have a class `Dog` with attributes like `name` and `age`, and methods like `bark()` and `play()`.  🐶

Next, we will create a class that represents a computer step by step, so that you can better understand how the concept of classes works in Python.

1. First create a class using the reserved word `class`, then in this class create the necessary properties to represent a computer and the necessary methods to manipulate or extract these properties.

```py
class Computer:
    def __init__(self, brand, price, color, cpu):
        self.brand = brand
        self.price = price
        self.color = color
        self.cpu = cpu

    def obtain_information(self):
        return {
            "Brand": self.brand,
            "Price": self.price,
            "Color": self.color,
            "CPU": self.cpu
        }
```

2. You can then create **instances** or **objects** based on that class. Each object is a separate entity with its own attribute values and can invoke the methods defined in the class.

```py
apple_computer = Computer("MacOS", 300_000, "Gray", "Apple M1")
hp_computer = Computer("Hewlett-Packard HP", 200_000, "Blue", "Intel core i5")

print("Apple: ", apple_computer.obtain_information())
print("HP: ", hp_computer.obtain_information())
```
> output:
```bash
Apple: {
    'Brand': 'MacOS',
    'Price': 300000,
    'Color': 'Gray',
    'CPU': 'Apple M1'
}
HP: {
    'Brand': 'Hewlett-Packard HP',
    'Price': 200000,
    'Color': 'Blue',
    'CPU': 'Intel core i5'
}
```

As we can see in this example, you can represent two different computers using the same object/class, every time you create a new instance of that class, the method `obtain_information()` will return the values of that instance of the class, so we avoid the need to repeat unnecessary code to represent different objects, this is very useful when you need to represent many elements as for example in e-commerce.

## Object-Oriented Programming Basics

As mentioned before, object-oriented programming (OOP) is based on four fundamental concepts, below we will see each of them in more detail and code examples that will help you understand them better.

### Abstraction

Abstraction is a very important concept in (OOP) that allows to represent real world objects in a program through the use of classes and objects. Basically **abstraction** allows you to represent a particular type of real or abstract object such as a person, a household appliance, or an animal, to be used in a program.

### Inheritance

Object/class inheritance in object-oriented programming is a fundamental concept, allows you to create a new class based on an existing class. The existing class is known as a base class or superclass, and the created class is known as a derivative class or subclass.

Example:

```py  runable=true
class Person:
    def __init__(self, name, lastmame, citizenship):
        self.name = name
        self.lastname = lastname
        self.citizenship = citizenship

    def obtain_complete_name(self):
        return f"{self.name} {self.lastname}"

class Programmer(Person):
    def __init__(self, name, lastname, citizenship, salary, company):
        super().__init__(name, lastname, citizenship)
        self.salary = salary
        self.company = company

person = Person("Axel", "Castro", "Mexican")
programmer = Programmer("Thomas", "Smith", "United States", 800_000, "Google")

print(person.obtain_complete_name()) # output: Axel Castro
print(programmer.obtain_complete_name()) # output: Thomas Smith
```

In this example, the class `Person` allows you to represent a person with his or her basic characteristics, then the class `Programmer` can inherit the characteristics of the class `Person` and add to it the other characteristics that represent a programmer, it can be said that the programmer class is a child class of the class `Person` and you can use the properties and methods itself as you can see in the example, with method `obtain_complete_name()`. You must use the following syntax, for a class to inherit the properties and methods of another class `class new_class(parent_class)`, it is also very important that within the function `__init__()` you pass on the function `super().__init__()` with the properties of the parent class, so that you can use its properties in the new child class.

### 3. Encapsulation

Encapsulation is also a very important concept in OOP, it is a way to hide the internal implementation of a class by allowing only some specific attributes and methods to be directly accessible. You can understand encapsulation, as the ability of a class to allow access to its attributes by declaring them as public or private. In Python naming conventions are used to indicate the visibility of its members, if an attribute or method has a name that begins with two underscores (`__`) it is considered highly private.

Example:

```py  runable=true
class House:
    def __init__(self, square_area, place, price):
        self.square_area = square_area
        self.place = place
        self.__price =price

    def get_price(self):
        return self.__price

    def set_price(self, value):
        self.__price = value

new_house = House(100_000, "México", 700_000_000)

print(new_house.__price) # output: 'House' object has no attribute '__price'. Did you mean: 'get_price'?
print(new_house.get_price())  # output: 700000000

new_house.__price = 500_000_000  # Does not allow you to modify the __price property
print(new_house.get_price())  # output: 700000000

new_house.set_price(400_000_000)
print(new_house.get_price())  # output: 400000000
```

As you can see in the example, in the class `House` the properties `square_area` and `place`are public properties which you can access without any problem, but the property `__price` on the other hand, is a private property and you cannot access it directly, in order to access or modify a private property you must use the **Getter** and **Setter** functions. `get_price()`, `set_price()` are conventions in object-oriented programming, the **get** and **set** methods are used to obtain or modify private properties within the class.

### 4. Polymorphism

Finally, **polymorphism** is another fundamental concept in object-oriented programming. In simple terms, polymorphism allows different classes to behave similarly, but with specific implementations for each one. 

Example:

```py  runable=true
class Car:
    def __init__(self, brand, model):
        self.brand = brand
        self.model = model

    def obtain_model(self):
        pass

class Family_car(Car):
    def __init__(self, brand, model):
        super().__init__(brand, model)

    def obtain_model(self):
        return f"The family car is model: '{self.model}'"

class Sport_car(Car):
    def __init__(self, brand, model):
        super().__init__(brand, model)

    def obtain_model(self):
        return f"The sport car model '{self.model}' is the most recent"

family_car = Family_car("Ford", "Familiar 2023")
sport_car = Sport_car("Tesla", "Tesla motors sport")

print(family_car.obtain_model()) # output: The family car is model: 'Familiar 2023'
print(sport_car.obtain_model()) # output: The sport car model 'Tesla motors sport' is the most recent
```

Polymorphism is based on the ability of an object/class to adopt  different forms, in the example above the method `obtain_model()` of the abstract class `Car` is used in different forms in classes `Family_car` and `Sport_car` returning different messages each. This is a short example of the concept of polymorphism, the ability to use the same function of a class in different ways.

## Advantages of Object-Oriented Programming  🌟💼

OOP offers multiple advantages that make programming more efficient and effective:

-   **Code Reuse**: With OOP, you can reuse existing classes and objects to create new programs, which saves time and effort.
   
-   **Simplified Maintenance**: Encapsulation allows you to modify a class without affecting the rest of the program, facilitating maintenance and avoiding unwanted side effects.
   
-   **Organization and Clarity**: The OOP promotes a clear and organized structure in the code, which makes it easier to read and understand.
   
-   **Real World Modeling**: OOP allows you to model real-world entities and processes in a natural way, which makes code more intuitive.

Object Oriented Programming (OOP) is a fundamental technique that allows you to create more organized, reusable, and maintainable programs. Now that you have a basic understanding of OOP, you can start creating your own classes and objects to bring your projects to life! If you want to learn more about this programming language I invite you to read the following
 [Python tutorial](https://4geeks.com/lesson/how-to-code-in-python) in [4Geeks](https://4geeks.com/)blog.

Code will set you free ✨👨‍💻

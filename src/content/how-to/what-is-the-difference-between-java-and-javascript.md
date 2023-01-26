---
title: "What is the difference between Java and Javascript?"
subtitle: "Java and Javascript are completely different programming languages even though people gets confused a lot."
date: "2022-09-08T16:36:30+00:00"
tags: ["java", "javascript"]
status: "draft"

---

Javascript
```javascript
console.log("Hello Geek!")
```

Java
```java
public class HelloGeek {
  public static void main(String[] args) {
    System.out.println("Hello Geek!");
  }
}
```

### Similarities between JavaScript and Java

- Object-Oriented Programming (OOP). Both languages work in terms of objects and relationships between them. Taking this in consideration, we are able to use Inheritance, encapsulation and polymorphism on both.
- Front-end development. Although, when you think on the web you think directly on JavaScript, Java is capable of creating Front-end apps using Java Applet.
- Back-end development. On the back-end happens the opposite, you would think more of Apache, JBoss or WebSphere that are Java based but ever since Node.js came out, has become more and more used for developers to power their server-side apps with JavaScript. 


### Core differences between JavaScript and Java

#### JavaScript

- Javascript is an interpreted language, this means it needs an interpreter (web browser) to execute each line of code. The languages that belongs to this Family tend to be more flexible, smaller and platform independent (you can run it on any Operating System) that has a web browser.

- Object-based scripting language
- File extension `js`
- Concurrency: Doesn't support multi-thread
- Can be run on any browser console or any text editor
- Integrates with HTML content and contained to the web app
- Dynamic Type Checking. Type checking is verified on runtime making the developer to not be obliged to declare the type of variables and making it possible to focus on productivity
- Prototype based. Js inheritance is prototypal (all objects can inherit directly from other objects). The hierarchy of the Objects can be achieved by assigning an Object as a prototype with a constructor function.
- Easier for new developers

#### Java

- Java, on the other hand, is a compiled language. This Family are translated and executed directly on your System increasing speed, efficiency and control over the hardware components. Java ships with JVM (Java Virtual Machine) that makes it platform-independent since it can be installed on any OS. 
- File extension `java`
- Concurrency: Support multi-thread
- Requires JDK (Java Development Kit)
- Standalone language
- Static Type Checking. Java uses static type checking, where you have to declare the type of variable (Integer, String, Float...) and it´ll be checked on compile-time. This characteristic makes Java know the type of variables used and translate into higher speed and less memory.
- Class Based. Java inheritance is a top-to-down, hierarchical and class-based relationship. This comes along with the capability of abstraction since there will be a "more abstract class" that will be extended on more precise classes (example: Class animals->Class mammals extends animals ->class canines extends animals-> Class dachshund extends canines)
- More difficult to learn for new developers

### Most common uses for Javascript and Java

These programming languages are "optimized" for different purposes, this doesn't mean that you can't use Java for web developing or javascript for other projects besides web apps.

#### Javascript:
- Front-end development
- Back-end development
- Full.stack development
- Android apps 

#### Java:
- Android apps (along with Kotlin are the programming languages most used for this purpose)
- Large-scale projects on financial environments.
- Scientific computing and Big Data (along with Python)
- Back-end development
- Hardware and IOT (internet of things)


### Which one should you learn

The selection between JavaScript or Java depends entirely on the project you have in mind, if you want to create a web app, then we would recommend JavaScript, since it was created exactly for that and it's where it shines the most. Now, if you want to create an app that doesn't need to be run on a website, and instead, wants to make a standalone app, then Java would be the right choice.  

Hope you enjoy the reading and keep on the Geek Side!

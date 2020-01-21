---
title: "Using data-structures to store our business needs"
subtitle: "It is imposible to software without storing information, its time to practice and master the science behin storage"
cover: "https://ucarecdn.com/e16d59ad-4c11-4ca0-8bfc-5a9d147c6c2e/"
textColor: "white"
status: "unassigned"
date: "2018-05-11"
tags: ["data structures", "business model"]

---

Almost all programing languages have primitive datatypes like: Boolean, String, Integer, Float, Null/None, etc.

But what if you whant to store a lot of booleans or a lot of strings in just one structure? For example: If you have a list of todo's you would want to put them together in a list like this:

```python
todos = ['make the bed', 'clean the houst', 'pay taxes']

# retrieving a value
first_todo = todos[0]

# reseting the value on the 3rd position
todos[2] = "buy food"

# adding a new value to the and of the list
todos.append("Call mom")
```

For these types of situations the world of computer science has created more complicated data types that we call `Data Structures`.

# What is a Data Structure

It's a way of organizing data to be used in a more effective way on a particular situation.

## Types of Data Structures

There are many publicly know data-structures and you can also create your own, but lets start by reviewing the most popular ones:

| Type | What is it | Purpuse and Efficency |
| ---- | ---------- | --------------------- |
| Array or List | It's a way to have many values or the same type under just one variable | Grouping values, related them togeter, make them more accesible like we did with the todo list above. The computer will reserve successive spaces in Memory for all values making them faster to access |
| Matrix | It's a two (or more) dimensional array were you access elements using 2 positions like this: `python>print(matrix[0][1])` | Matrix are ideal for coordenates, you can easily do a cartesian graph |
| Stack | Stack is a linear data structure, you can think of it like an Array but with two additional methods: `python>stack.pop()` that removes the last element and `python>stack.push()` that adds one element at the end. LIFO(Last In First Out)/FILO(First In Last Out) order. | Being linear, makes it very efficient in memory because the computer only writes on the edges of the structure  |
| Queue | The queue is like a stack but it and get the element at the first position: FIFO(First in First Out) | It's a little less efficient that the stack, but still pretty fast and used in many real life scenarios |
| Hash Table | Hash table is like an array but you can use letters to identify the positions in the list. E.g: `python>print(person["name"])`. In Python we call them Dictonarys, in Javascript we call them Object Literals. | Being able to access elements using a string key is ideal for some situations. For example: we could have one structure for each language and print both languages like this: `print(german["Hello World"])` and `print(spanish["Hello World"])` |
| Graph | Graps are data structures were any element (called node) can have a pointer to any other node, you can use graphs to represent hiearchies, streets in a city, etc. | Graphs are very efficient because they let you point directly to other nodes instead of having to loop in a sequence, for example Google Maps Traffic uses graphs to calculate the Estimated Time of Arrival  |
| Tree | Trees are a tipe of Graph with hierarchy (parents and childs), everything starts at the top node and you can use `python>node.childs()` to get the childs of any element and keep drilling down the hierarchy. | Trees are efficient in many scenarios where real life hierarchies are present like: Representing a family, The File Directory of any computer, Website Menu, etc. |

[[info]]
| :point_up: there are other types of data structures and you can also create your own structures but we are covering these cases because they represent the strong mayority of the real-life situations you are going to encouncer while coding.

## The arrays

Every programming language has a different implementation of hat an array is
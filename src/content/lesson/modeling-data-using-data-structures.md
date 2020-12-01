---
title: "Using data-structures to store our business needs"
subtitle: "It is imposible to software without storing information, its time to practice and master the science behind storage"
cover_local: "../../assets/images/e16d59ad-4c11-4ca0-8bfc-5a9d147c6c2e.jpeg"
textColor: "white"
status: "unassigned"
date: "2020-10-19T12:36:31-04:00"
tags: ["data structures","business model"]

---

Almost all programing languages have primitive datatypes like: Boolean, String, Integer, Float, Null/None, etc.

But what if you want to store lots of booleans or lots of strings in just one structure? For example: If you have a list of todo's (strings) you would want to put them together in a list like this:

```python
todos = ['make the bed', 'clean the house', 'pay taxes']
```

For these types of situations the world of computer science has created more complicated data-types that are called `Data Structures`.

# What is a Data Structure

It's a way of organizing related data to be used in a more effective way on a particular situation.

## Types of Data Structures

There are many publicly known data-structures and you can also create your own, but lets start by reviewing the most popular ones:

| Type | What is it | Purpuse and Efficency |
| ---- | ---------- | --------------------- |
| Array or List | It's a way to have many values or the same type under just one variable | Grouping values, relating them together, to make them more accesible like we did with the todo list above. The computer will reserve successive spaces in Memory for all values making them faster to access |
| Matrix | It's a two (or more) dimensional array where you access elements using 2 positions like this: `python>print(matrix[0][1])` | Matrices are ideal for coordinates; you can easily do a cartesian graph |
| Stack | Stack is a linear data structure, you can think of it like an Array but with two additional methods: `python>stack.pop()` that removes the last element and `python>stack.push()` that adds one element at the end. LIFO(Last In First Out)/FILO(First In Last Out) order. | Being linear, makes it very efficient in memory because the computer only writes on the edges of the structure  |
| Queue | The queue is like a stack but it can get the element at the first position: FIFO(First in First Out) | It's a little less efficient that the stack, but still pretty fast and used in many real life scenarios |
| Hash Table | Hash table is like an array but you can use letters to identify the positions in the list. E.g: `python>print(person["name"])`. In Python we call them Dictonaries, in Javascript we call them Object Literals. | Being able to access elements using a string key is ideal for some situations. For example: we could have one structure for each language and print both languages like this: `print(german["Hello World"])` and `print(spanish["Hello World"])` |
| Graph | Graphs are data structures where any element (called node) can have a pointer to any other node, you can use graphs to represent hiearchies, streets in a city, etc. | Graphs are very efficient because they let you point directly to other nodes instead of having to loop in a sequence, for example Google Maps Traffic uses graphs to calculate the Estimated Time of Arrival  |
| Tree | Trees are a type of Graph with hierarchy (parents and childs), everything starts at the top node and you can use `python>node.childs()` to get the childs of any element and keep drilling down the hierarchy. | Trees are efficient in many scenarios where real life hierarchies are present like: Representing a family, The File Directory of any computer, Website Menu, etc. |

[[info]]
| :point_up: There are other types of data structures and you can also create your own structures but we are covering these cases because they represent the strong mayority of the real-life situations you are going to encouncer while coding.

## The Array

Every programming language has a different array implementation but the most basic and original idea was to have a very low level efficient way to store related values. Arrays are an efficient way of storing because:

1. The computer reserves the memory to store the array values in a sequence, making very fast the i/o operation to write and retrieve values from the array.
2. In some languages, arrays can one contain values of the same type, making the memory managment of the data-structure more predictable and easier.
3. In some languages, arrays don't include almost any methods like append, insert, map, etc. Instead, arrays are very light structures.

Here is how you can manipulate arrays in almost any programing language:

```python
# retrieving a value
first_todo = todos[0]

# reseting the value on the 3rd position
todos[2] = "buy food"

# adding a new value to the end of the list
todos.append("Call mom")
```

## The Matrix

If you store arrays within arrays you get a Matrix, e.g:
```python
# tic tac toe board
board = [ 
    [ 0,0,0 ],
    [ 0,0,0 ],
    [ 0,0,0 ]
]
```

In the example above we replicated a Tic Tac Toe board using a matrix (two dimensional array), if we wanted to re-set any of its value you would have to do somethign like this:

```python
board[0][1] = "x"

# the board will then look like this:
board = [ 
    [ 0,1,0 ],
    [ 0,0,0 ],
    [ 0,0,0 ]
]
```

There are plenty of things you can represent in a matrix: Maps, Cartesian Graphs, Game Boards, Blueprints, etc.

## The Stack

Stacks are great because they are also very fast and efficient. Stack follow the FILO rule: First In Last Out. 

In real life there are plenty of situations that replicate a stack:

1. Stack of plates in a buffet table.
2. Stack of Moulded chairs.
3. Deck of cards.

```python
my_stack = []

my_stack.append("A")
my_stack.append("W")
my_stack.append("F")

# If I want to retrieve A I will have to pop (remove from the end) F and W first
f = my_stack.pop() # removes F and returns it
w = my_stack.pop() # removes W and returns it
a = my_stack.pop() # removes A and returns it

```

## The Queue

Just like the stack, the queue has many real life scenarios like:

1. Doing the line for a roler coaster.
2. Doing the line for ice cream.
3. Computers use Queues to process sending emails or sending sms.

The Queue its like a Stack but with a FIFO behavior: First In First Out.

```python
my_queue = []

my_queue.append("A")
my_queue.append("W")
my_queue.append("F")

# A will be the first one to be retrieved because it was the first to enter
a = my_queue.pop(0) # dequeue A and returns it
w = my_queue.pop(0) # dequeue W and returns it
f = my_queue.pop(0) # dequeue F and returns it

```

## The Hash Table

Some of the most popular hash table implementations in hash tables are:
1. Language Translations
2. Cache memory

```python
language_hash_table = {
    "hello world": {
        "german": "Hallo Welt",
        "spanish": "Hola Mundo"
    }
}

# Now we can get any language instantly based on english:
print(language_hash_table["hello world"]["german"])
print(language_hash_table["hello world"]["spanish"])

```

## Graphs

Graphs are a whole new way of storing accessing data, now instead of having an array or list in a sequence, you can have elements that point to each other.

Graphs are ideal to represent relationships, hierarchies, and connections, for example:

1. Building the city road map.
2. Family Hierarchy (tree).
3. Social Graph.

A graph can be represented using a Hash Table like this:

```python
graph = {
    'A': ['B', 'C'],
    'B': ['C', 'D'],
    'C': ['D'],
    'D': ['C'],
    'E': ['F'],
    'F': ['C']
}
```


## Trees

You can think about Trees like a subtype of Graph, because tree nodes are conected to each other, but the only type of conection that can exist is Parent -> Child relationthip.

Trees are used in a variety of situations like:

1. The DOM (Document Object Model).
2. Any computer file directory.
3. Family Tree.

A graph can be represented using a Hash Table like this:

```python
small_family = {
    'A': {
        "children": ['C', 'D']
    },
    'B': {
        "children": ['C', 'D']
    }
    'C': {
        "children": ['E']
    }
}
```

Note: A and B are probably spouses, C is A & B children and E is C's child.

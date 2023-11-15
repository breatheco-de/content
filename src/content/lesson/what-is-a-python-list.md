---
title: "Working with Lists in Python"
subtitle: "Lists are the first type of data-structure that Python has to store multiple values at once. They are very powerful and heavily used in everyday operations for any type of program in any industry."
cover_local: "https://github.com/breatheco-de/content/blob/master/src/content/lesson/../../assets/images/4cc6fa0b-2530-4052-aa7e-8dac03788ac3.png?raw=true"
textColor: "white"
date: "2020-10-19T16:36:31+00:00"
tags: ["list"]
status: "published"

---

If you want to know how to create lists, access elements within lists, manipulate lists, and perform common operations such as sorting, filtering, and transforming, this article is for you. Whether you're a beginner or an experienced programmer, this article provides a comprehensive guide. The step-by-step [instructions for Python](https://4geeks.com/lesson/intro-to-python) lists and clear explanations make it easy to understand and apply the concepts.

## What is a Python List?

A list is, normally, any collection of values.  The rules of how to add or remove elements from that list can change from one programming language to another.  But – generally – they are the only ways for developers to create elements.
Lists are not the only way we have to store multiple values at once, but it is the most used tool for that purpose. For example: a list of students, a list of artists, a list of transactions... anything!

This primitive data-type does a lot more stuff than the others.

Every list has the same basic concepts:

+ **The items:** are the actual values inside in each position of the list.

+ **The length:** is the size of the list (how many items the list has).

+ **Index:** is the position of the element.


![what is an list define list](https://github.com/breatheco-de/content/blob/master/src/assets/images/7ed2c414-0d00-4e68-b659-b65c26d1983a.png?raw=true)


> ☝ List positions start a **zero (0)**; the first element is the element in the position **zero (0)**

## How to Declare a Python List?


These are different examples of list declarations:

```python
my_empty_list = [] # Empty list
my_list = ["Apple", "Orange", "Donkey"]  # The only way to declare a "list" - a mutable and ordered collection of items
my_tuple = ("Apple", "Orange", "Donkey")  # This is a "tuple" - a more limited, ordered, but immutable collection of items
my_set = {"Apple", "Orange", "Donkey"}  # This is a "set" - a more limited, unordered and immutable collection of items
```

## Access Items in the List


To access a specific element in a list, you need an `index`.  We call `index` the integer value that represents the position of the element you want to access/get/retrieve.

The index must always start at zero (0).  That means that a List of 2 items can have `index=0` or `index=1`.  Trying to get `index=2` will return an `IndexError` because it will mean that we are trying to access the third element (which does not exist).  For example, to get any items in a list you can do the following:

```python
print(my_list[0])  # Prints the 1st element on the console

aux = my_list[3]
print(aux)  # Prints the 4th element on the console

print(my_list[len(my_list) - 1])  # Prints the last element on the console
print(my_list[-1])  # Also prints the last element on the console
```


## Update Items in the List


If you want, you can reset or update any item inside a list using its index, like this:

```python
my_list[5] = 'Whatever value'
# Assign a value to the 6th element on the list 
```

## Adding Elements to Python Lists (append and insert)


### Using `append` in Python Lists

The first way is to add the element to the end of the list. You should use this method every time you can because it's a lot faster than `insert`.

```python
my_list = ['Pedro','Juan','Maria']
my_list.append('Chris')  # Adds Chris to the end of the list
print(my_list)  # Output: ['Pedro','Juan','Maria','Chris']
```

### Using `insert` in Python Lists

Using insert is easier for the developer because it will let you pick the positions in which you want to insert the element, but it is a slower method (worse performance):

```python
my_list = ['Pedro','Juan','Maria']
my_list.insert(1,'Chris')  # Adds Chris between Pedro and Juan
print(my_list)  # Output ['Pedro','Chris','Juan','Maria']
```

## Removing Elements from a Python List (pop, remove, delete)

Python has many ways to delete an element from a list.

### Using `pop`

It will remove the last element only!

```python
my_list = ['Pedro','Chris','Juan','Maria']
my_list.pop()
print(my_list)  # Output ['Pedro','Chris','Juan']
```

### Using `remove`

It will let you remove the first occurrence of an element by its name.

```python
# If you want to delete 'Chris', you need to do the following: 
my_list = ['Pedro','Chris','Juan','Maria','Chris']
my_list.remove('Chris')
print(my_list)  # Output ['Pedro','Juan','Maria','Chris']
```

### Using `delete`

It will allow you to delete many items at once, you have to specify the starting position and ending position.

```python
my_list = ['Pedro','Chris','Juan','Maria','Pepe','Mario','Bob']
del my_list[2:5]  # This statement deletes the items at indexes 2, 3 and 4
print(my_list)  # Output ['Pedro','Chris','Mario','Bob']
```

## Looping a List


Normally, when you manipulate lists, you have to loop all the items. For example: order them manually, flip them, filter them, etc.
There are many ways you can loop an entire list, but the most used one is the `for` loop.

```python
my_list = [3423,5,4,47889,654,8,867543,23,48,56432,55,23,25,12]
for number in my_list:
    print(number)
```

## Looping using a position 

Sometimes it is useful to loop the array using each element's position (index). We can do that by using the `range()` function.
By default, the `range` will start from index zero and continue until a specified number is reached, not including that index number:

```python
my_list = ['Pedro','Chris','Mario','Bob']

# The range will cut off before len(my_list) is reached, and therefore we don't need to write (len(my_list)-1)
for i in range(len(my_list)): 
    print("The positions is " + str(i) + " for the element " + my_list[i])

### Output:
# The positions is 0 for the element Pedro
# The positions is 1 for the element Chris
# The positions is 2 for the element Mario
# The positions is 3 for the element Bob
```

It is also possible to specify the starting index in the range, as well as the increment, by adding a starting point (the first parameter), and an increment value (the last parameter) in the range method:

```python
my_list = ['Pedro','Chris','Mario','Bob', "Greg", "Kyle"]

for i in range(1, len(my_list), 2):  # range(start value, end value (non inclusive), increment value)
    print("The positions is " + str(i) + " for the element " + my_list[i])

### Output:
# The positions is 1 for the element Chris
# The positions is 3 for the element Bob
# The positions is 5 for the element Kyle
```

You can read more related articles at [4Geeks](https://4geeks.com/) and keep on the Geek side!

---
title: "Working with Lists in Python"
subtitle: "Lists are the first type of data-structures that Python has to store multiple values at once, they are very powerful and heavily used in every day operations for any type of program in any industry"
cover_local: "https://github.com/breatheco-de/content/blob/master/src/content/lesson/../../assets/images/4cc6fa0b-2530-4052-aa7e-8dac03788ac3.png?raw=true"
textColor: "white"
date: "2020-10-19T16:36:31+00:00"
tags: ["list"]
status: "published"

---

If you want to know how to create lists, access elements within lists, manipulate lists, and perform common operations such as sorting, filtering, and transforming, this article is for you. Whether you're a beginner or an experienced programmer, this article provides a comprehensive guide. The step-by-step [instructions for python](https://4geeks.com/lesson/intro-to-python) lists and clear explanations make it easy to understand and apply the concepts.

## What is a Python List?

A list is, normally, any collection of values.  The rules of how to add or remove elements from that list can change from one programming language to another.  But – generally – they are the only ways for developers to create elements.
Lists are not the only way we have to list store multiple values at once but it is the most used tool for that purpose. For example: list of students, list of artists, list of transactions…anything!

This primitive data-type does a lot more stuff than the others.

Every list has the same basic concepts:

**The items:** are the actual values inside in each position of the list.

**The length:** is the size of the list (how many items the list has).

**Index:** is the position of the element.

![what is an list define list](https://storage.googleapis.com/breathecode-asset-images/a9f6a0d4a2fc4db11ce30aabf3e189f7beb32273a7f9a2ba5e19b765846d4ce9.png?raw=true)


> :point_up:List positions start a **zero (0)**; the first element is the element in the position **zero (0)**

## How to Declare a Python List?


These are different examples of list declarations:

```python
myList = [] # empty list
myList = ["Apple", "Orange", "Donkey"] # The only way to declare a "list" - a mutable and ordered collection of items
myTuple = ("Apple", "Orange", "Donkey") # This a "tuple" - a more limited, ordered but immutable collection of items
mySet = {"Apple", "Orange", "Donkey"} # This is a "set" - a more limited, unordered and immutable collection of items
```

## Access Items in the List


To access a specific element in a list, you need an `index`.  We call `index` the integer value that represents the position of the element you want to access/get/retrieve.

The index always must start at zero (0).  That means that an List of 2 items can have index=0 or index=1.  Trying to get the 2nd position will return "undefined" because it will mean that we are trying to access the third element (which does not exist).  For example, to get any items in the list you can do the following:

```python

print(myList[0])  # print first element on the console

aux = myList[3]
print(aux); # print the 4th element on the console
print(myList[len(myList) - 1]);  # print the last element on the console
```


## Update Items in the List


If you want you can reset or update any item inside of a list using its index like this:

```python
    myList[5] = 'Whatever value'
    # Assign a value to the 6th element on the list 
```

## Adding Elements to Python Lists (append and insert)


### Using `append` in Python Lists

The first way is to add the element to the end of the list, you should use this method every time you can because it's a lot faster than `insert`.

```python
    myList = ['Pedro','Juan','Maria']
    myList.append('Chris') # add Chris to the end of the list
    print(myList); # Output: ['Pedro','Juan','Maria','Chris'];
```

### Using `insert` in Python Lists

Using insert is easier for the developer because it will let you pick the positions in which you want to inster the element, but it is a slower method (worse performance):

```python
    myList = ['Pedro','Juan','Maria']
    myList.insert(1,'Chris') # add Chris between Pedro and Juan
    print(myList); # Output ['Pedro','Chris','Juan','Maria'];
```

## Removing Elements from a Python List (pop, remove, delete)

Python has many ways to delete an element from a list

### Using POP

It will remove the last element only!

```python
    myList = ['Pedro','Chris','Juan','Maria']
    myList.pop()
    print(myList) # Output ['Pedro','Chris','Juan']
```

### Using Remove

It will let you remove the first occurence of an element by its name.

```python
    # If you want to delete 'Chris', you need to do the following: 
    myList = ['Pedro','Chris','Juan','Maria','Chris']
    myList.remove('Chris')
    print(myList) # Output ['Pedro','Juan','Maria','Chris'];
```

### Using Delete

It will allow you to delete many items at once, you have to specify starting possition and ending possition.

```python
    # If you want to delete 'Chris', you need to do the following: 
    myList = ['Pedro','Chris','Juan','Maria','Pepe','Mario','Bob']
    del myList[2:5] #this statement deletes the characters at indexes 2, 3 and 4
    print(myList) # Output ['Pedro', 'Chris', 'Mario', 'Bob']
```

## Looping a List


Normally, when you manipulate lists, you have to loop all the items. For example: order them manually, flip them, filter them, etc.
There are many ways you can loop an entire list but the most used one is the `for`  loop.

```python
myList = [3423,5,4,47889,654,8,867543,23,48,56432,55,23,25,12]
for number in myList:
    print(number)
```

## Looping using a position 

Sometimes it is useful to loop the array using each element's position (index). We can do that by using the `range()` function.
By default the `range` will start from index zero and continue until a specified number is reached, not including that index number:

```python
myList = ['Pedro','Chris','Mario','Bob']

# the range will cut off before len(myList) is reached, and therefore we don't need to write (len(myList)-1)
for i in range(len(myList)): 
    print("The positions is " + str(i) + " for the element " + myList[i])

### Output:
# The positions is 0 for the element Pedro
# The positions is 1 for the element Chris
# The positions is 2 for the element Mario
# The positions is 3 for the element Bob
```

It is also possible to specify the starting index in the range, as well as the increment, by adding a starting point (the first parameter), and an increment value (the last parameter) in the range method:

```python
myList = ['Pedro','Chris','Mario','Bob', "Greg", "Kyle"]

for i in range(1, 6, 2): # range(start value, end value (non inclusive), increment value)
    print("The positions is " + str(i) + " for the element " + myList[i])

### Output:
# The positions is 1 for the element Chris
# The positions is 3 for the element Bob
# The positions is 5 for the element Kyle
```

You can read more related articles at [4Geeks](https://4geeks.com/) and keep on the Geek side!

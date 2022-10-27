---
title: "How to Get Python List Length?"
subtitle: "A simple way to get the length of any Python list is using the `len()` function."
tags: ["python", "list", "list length"]
date: "2020-10-19T16:36:30+00:00"
authors: []
status: "published"

---

# How to Get Python List Length

A simple way to get the length of any Python list is using the `len()` function as follows:

```py
countries = ["Canada", "Argentina", "Russia", "Mexico", "Germany"]

countries_length = len(countries)

print(countries_length) #Output: 5 
```

This is a simple way to get the length of a Python list, let's dive into how the `len()` function works and which other methods we can use to get the length of a list in Python in the following sections.

![Measuring](https://media.tenor.com/AFJK9BNwiZIAAAAC/harry-styles-tape-measure.gif)

- [How to Get Python List Length Using the `len()` Function](#how-to-get-python-list-length-using-the-len-function)
- [How to Get Python List Length Using the `length_hint()` Method](#how-to-get-python-list-length-using-the-length_hint-method)
- [How to Get Python List Length Using the "Naive" Method](#how-to-get-python-list-length-using-the-naive-method)
- [Summary](#summary)

## How to Get Python List Length Using the len Function

The `len()` function is used to get the length of a Python list, you can pass a list to this function and it will return an integer indicating the size of the list as follows:

You can pass a list directly to this function like this:

```py
print(len(["John", "Bobby", "Janet"])) #Output: 3
```
Or you can also assign a list to a variable and pass that variable to the `len()` function as follows:

```py
names = ["John", "Bobby", "Janet"]

print(len(names)) #Output: 3
```
It is important to clarify that a list length is not the highest accessible index of that list. Remember that the first item's index is 0, let's use the above example to explain this:

```py
names = ["John", "Bobby", "Janet"]

print(len(names)) #Output: 3

print(names[2]) #Output: Janet

print(names[3]) #Output: IndexError: list index out of range
```

See that if we print index #2 of the names list we'll get the last item that is `Janet`, but if we try to print index #3 (same value as the list length) we'll get an Index error indicating that the list index is out of range. So we can say that the last accessible index on a list would be the **list length - 1**.

## How to Get Python List Length Using the length_hint Method

The `length_hint()` method is another way to get the length of any list in Python, it basically works in the same way as the `len()` function, the difference, in this case, is that the `length_hint()` method is defined in the operator module, this means that to use this method, we must import it first. 

After importing this method into our code, to use `length_hint()` we simply have to pass our list to it as follows `length_hint(any_list)`. Let's see an example of how to import and use this method as follows:

```py
from operator import length_hint 

our_list = [1, 2, 3, 4, 5, 6]

our_list_length = length_hint(our_list)

print("The length of our list is: " + str(our_list_length)) #Output: The length of our list is: 6
```

You can also use the `length_hint()` method to check the length of a string as follows:

```py
from operator import length_hint 

our_str = "Hello Rigoberto"

our_str_length = length_hint(our_str)

print("The length of our string is: " + str(our_str_length)) #Output: The length of our string is: 15
```

## How to Get Python List Length Using the Naive Method

A third way to get the length of any list in Python is to use the **Naive** method. This method uses **for loops** to get the length of the desired list. To use this method, we have to follow some basic steps before getting the length of the desired list. First, we need to declare a counter variable and initialize this counter to 0. Second, we need to use a for loop to go through all elements of our list, with the condition to increase our counter variable by 1 each and every time the loop encounters an element of the list. Third, after looping through our list with the condition explained previously, our counter variable will give us the length of that list (we need to print the counter value to get the list length). Let's see an example of how to use the Naive method below:

```py
special_list = [10, 11, 12, "Dog", "Cat", "Bird"]
length = 0 #This will be our counter

for x in special_list:
    length+=1
print("The length of our special list is: " + str(length)) #Output: The length of our special list is: 6
```

In this example we first defined our list (`special_list`), we then defined the counter variable and initialized it to 0 (`length`), then we used a for loop to go through all the elements of the `special_list` with the condition to increase our `length` variable by 1 in this loop. Finally, we just needed to print our `length` counter value to get the `special_list` length.

## Summary

As you can see, there are various ways how to get Python list length. If you are wondering which option to use, we recommend you stick with the `len()` function since is the easiest and fastest way to get any list length. You'll also write less code and that is always a plus in the programming world since it is best to keep things simple.

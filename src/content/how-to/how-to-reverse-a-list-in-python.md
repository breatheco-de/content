---
title: "How to Reverse a List in Python?"
subtitle: "Reversing a list is a very common operation in the day of a programmer. We can do it with the most common ways are the reverse() method and with a syntax trick."
tags: ["python", "list", "reverse a list"]
date: "2022-10-20T16:36:30+00:00"
authors: []
status: "published"

---

# How to Reverse a List in Python

Here is a simple way to reverse a list in Python using the `.reverse()` method:

```py
mylist = ["a", "b", "c", "d", "f", "g"]
mylist.reverse()
print(mylist) #Output: ["g", "f", "d", "c", "b", "a"]
```

Reversing a list is a very common operation in the day of a programmer, you will find cases in which you will need a list similar to the original one with the same elements, but in a different order, in this case, we could say that we would be "flipping" the list of interest.

For these cases, Python has various methods and ways to "flip" or "reverse" a list. Let's see more information on these methods/ways in the following sections.

- [How to Reverse a List in Python Using the **`.reverse()`** Method](#how-to-reverse-a-list-in-python-using-the-reverse-method)
- [How to Reverse a List in Python Using the **`reversed()`** Function](#how-to-reverse-a-list-in-python-using-the-reversed-function)
- [How to Reverse a List in Python Using the List Slicing Syntax](#how-to-reverse-a-list-in-python-using-the-list-slicing-syntax)
- [Summary](#summary)


## How to Reverse a List in Python Using the reverse Method

Our first option to reverse a list in Python is the `.reverse()` built-in method. Every list object in Python has a method called reversed that you can call on any list object and it will reverse the list in place. This method does not create a new list, instead, the method modifies the original list. We can see another example of this method as follows:

```py
mylist = [20, 21, 22, 23, 24, 25]
mylist.reverse()
print(mylist) #Output: [25, 24, 23, 22, 21, 20]
```

As mentioned before, this method does not returns any values nor create a new list, it modifies our original list in place, and, as you can see, this method does not need any parameters, to reverse any list we just need to put the list name alongside the `.reverse()` method like this `listname.reverse()`

## How to Reverse a List in Python Using the reversed Function

The second option to reverse a list in Python is the `reversed()` built-in function. This option won't modify the original list nor will it create a copy of it, instead, it will return an iterator which we can use to loop through all the elements of the original list in order to move through the elements of the list in reverse. Basically, the `reversed()` built-in function will return a reverse iterator object. Let's see an example below:

```py
mylist = [1, 2, 3, 4, 5]
print(reversed(mylist)) #Output: <list_reverseiterator object>
```

See that, if we only use the `reversed()` function, we will only get a reverse iterator object, so we need to convert this iterator into the reverse list that we want. To do this we need to use a second function called `list()`, what this function will do is go through each and every one of the elements of our original list and store these elements in a new list. Let's see how to use both `list()` and `reversed()` functions as follows:

```py
mylist = [1, 2, 3, 4, 5]
reversed(mylist) #If you print this the output will be: <list_reverseiterator object>
mylist_reversed = list(reversed(mylist))
print(mylist_reversed) #Output: [5, 4, 3, 2, 1]
print(mylist) #Output: [1, 2, 3, 4, 5]
```

## How to Reverse a List in Python Using the List Slicing Syntax

The third option is to use the list slicing syntax. Python list objects have a feature called list slicing, unlike the first method (`.reverse()`), this option does not modify our original list, rather it creates a copy of it and returns this copy with the elements of the original list flipped or reversed. 

To use this list slicing syntax, we just need to write our list name alongside some square brackets with a double column and a -1 inside these brackets like this `[::-1]`, with our list name it would result as follows `listname[::-1]`. Let's see an example of this method below:

```py
mylist = [1, 2, 3, 4, 5, 6]
print(mylist[::-1]) #Output: [6, 5, 4, 3, 2, 1]
print(mylist) #Output: [1, 2, 3, 4, 5, 6]
```

As you can see, if we print our original list it won't be flipped as this method does not modify the original list. You can assign a variable to the copy of the original list as follows:

```py
mylist = [1, 2, 3, 4, 5, 6]
mylist_copy = mylist[::-1]
print(mylist_copy) #Output: [6, 5, 4, 3, 2, 1]
print(mylist) #Output: [1, 2, 3, 4, 5, 6]
```

Basically, what the list slicing syntax is doing is giving us a slice of a list, we can specify the slice that we want to get off the list by specifying the start, end, and step parameters into the square brackets like this `mylist[start:end:step]`. So we can see this syntax as a "trick" to flip any list. Let's see some more examples below so we can better understand how this list slicing syntax works:

```py
mylist = [1, 2, 3, 4, 5, 6]
mylist_copy1 = mylist[1:5]
print(mylist_copy1) #Output: [2, 3, 4, 5]
mylist_copy2 = mylist[::2]
print(mylist_copy1) #Output: [1, 3, 5]
mylist_copy = mylist[::-1]
print(mylist_copy) #Output: [6, 5, 4, 3, 2, 1]
```

See that putting the 2 columns `::` without any start or end gives us the whole list, and if we specify a step of `-1` this would return the whole list but flipped. This is how this "trick" works.

## Summary

To summarize a little bit of what has been explained in this article, we were able to see 3 ways to reverse lists in Python. You may be wondering what the best option is or in what situations it is better to use a certain option to reverse lists in Python, and we hope that the following summary will help you define your preferred way or method:

 1. **`.reverse()` Method**: this option will reverse a list in place, to use it you just need to type your list name alongside the `.reverse()` word like this `list.reverse()`. This method modifies the original list and won't create a copy of it.

2. **`.reversed()` Function**: this option won't give us a copy nor will modify the original list, this function will give us a reverse iterator that needs to be converted into a list using the `list()` function. So the `.reversed()` function needs to be used alongside the `list()` function as we saw in the example above to get our desired reversed list.

3. **List Slicing Syntax**: this option will return a reversed copy of our original list instead of modifying it. To use this "trick" you just need to write the list name alongside some square brackets with a double column and a -1 inside these brackets like this `[::-1]`, with our list name it would result as follows `listname[::-1]`

Hope this article would help you define how to reverse a list in Python, keep practicing!

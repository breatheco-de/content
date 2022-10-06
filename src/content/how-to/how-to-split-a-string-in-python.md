---
title: "How to Split a String in Python"
subtitle: "Knowing how to manipulate strings this way will be of great use to us in our programming journey. In this article, we will dive into the many ways how to split a string in Python."
tags: ["python","string concatenation",]
date: "2020-10-19T16:36:30+00:00"
authors: []
status: "published"

---

# How to Split a String in Python
This is how you split a string in python using the **`.split()`** method:
```py
string1 =  "This string will be splitted"  
listName = string1.split()

print(listName)  #Output: ["This", "string", "will", "be", "splitted"]
```
The use of alphanumeric or string-type values is highly necessary for any programming language, as you may already know, these values in Python are called Strings. Knowing how to manipulate this type of String values will be of great use to us in our programming journey since it will allow us to manage the values according to our needs, either to search for a value contained in the Strings, obtain a specific part of it, change certain parts, among others.

In this article, we will dive into the many ways **how to split a string in Python**. So what is splitting a string? As you read it, it's just taking one string and breaking it into two or more strings, you start with one and end with several other strings.  

![Python Split String](https://806230.smushcdn.com/1739487/wp-content/uploads/2021/02/split-min-768x484.png?lossy=0&strip=1&webp=1)

## How to Split a String in Python, **`.split()`** Method

The `.split()` method, by default, converts a string into a list of strings in which the elements of said list will be the words of our original string. Let's see a basic example as follows:

```py
stringName =  "My name is Rigoberto"
```

The `.split()` is used as follows:

```py
stringName =  "My name is Rigoberto"  
listName = stringName.split()

print(listName)  #Output: ["My", "name", "is", "Rigoberto"]
```

As you can see, our variable `stringName`, which has assigned the value of our original string, was converted into a list. We created another variable called `listName` where we assigned the `stringName` value alongside the `.split()` method to then print the `listName` value/results, giving us a new list with the words of our original string.

If we use the `.split()` method as it is, it will remove any spaces in our original string and it will take words or letters between the spaces to convert them into list items:

 - **Example 1: with more spaces in `stringName`**
```py
stringName =  "My   name   is     Rigoberto"
listName = stringName.split()

print(listName)  #Output: ["My", "name", "is", "Rigoberto"] (same result as before) 
```

 - **Example 2: spacing between letters**

```py
stringName =  "M y na me is Rigoberto"
listName = stringName.split()

print(listName)  #Output: ["M", "y", "na" , "me", "is", "Rigoberto"]
```
And what if we want to specify which parameter to use to split our strings instead of any whitespace? Or if we want to specify how many splits or divisions we want to do to our strings? Let's look at these cases below.

  

## Syntax of the **`.split()`** Method

The `.split()` method accepts two parameters, the `separator` and the `maxsplit` parameters. These parameters will help us answer our two previous questions. So, the `.split()` method can be written as follows:

```py
.split(separator, maxsplit)
```

The `separator` will specify the character where we want to split our original string. Let's say that our original string is being separated by commas instead of spaces, for example:

```py
stringName =  "My,name,is,Rigoberto"
```
  
If we indicate the comma "`,`" as the separator inside the parentheses of the `.split()` method we get:

```py
listName = stringName.split(",")

print(listName)  #Output: ["My", "name", "is", "Rigoberto"]
```
  
If we have a space in front of our commas we should also specify the space in our separator:

```py
stringName =  "My, name, is, Rigoberto"
listName = stringName.split(", ")

print(listName)  #Output: ["My", "name", "is", "Rigoberto"]
```
Otherwise we would get this space in our list of items. And the `maxsplit` will specify how many splits we want to perform in our string:

  

```py
stringName =  "My,name,is,Rigoberto"
listName = stringName.split(",", 1)

print(listName)  #Output: ["My", "name,is,Rigoberto"]
```
And if we want to make two splits:

```py
stringName =  "My,name,is,Rigoberto"
listName = stringName.split(",", 2)

print(listName)  #Output: ["My", "name", "is,Rigoberto"]
```

  

## How to Split a String in Python. Alternatives Methods

Although the `.split()` method in Python is quite useful for managing and manipulating strings in many situations, there are other methods for separating strings, which work in different ways than the conventional `.split()` method called `.rsplit()` and `.splitlines()`.


### `.rsplit()` Method in Python

Unlike the conventional `.split()` method, the `.rsplit()` method splits the string from the right (the conventional `.split()` method does it from the left) at the specified separator and also returns a list of strings that contains the words of our original string. For example:

 - **Example 1**

```py
stringName =  "My name is Rigoberto"
listName = stringName.rsplit()

print(listName)  #Output: ["My", "name", "is", "Rigoberto"]
```
  
 - **Example 2**
```py
stringName =  "My,name,is,Rigoberto"
listName = stringName.rsplit(",")

print(listName)  #Output: ["My", "name", "is", "Rigoberto"]
```

See that the `.rsplit()` method behaves the same way as the conventional `.split()` method, but this is only when the `maxsplit` parameter is not specified since the method does not have a reference point to do the split. Let's add the `maxsplit` parameter to the `.rsplit()` method and see how it works:

 - **Using the conventional `.split()` method**

```py
stringName =  "My,name,is,Rigoberto"
listName = stringName.split(",", 1)

print(listName)  #Output: ["My", "name,is,Rigoberto"]
```

 - **Using the `.rsplit()` method**:

```py
stringName =  "My,name,is,Rigoberto"
listName = stringName.rsplit(",", 1)

print(listName)  #Output: ["My,name,is", "Rigoberto"]
```
Here is the difference between the conventional `.split()` method and the `.rsplit()` method, when a `maxsplit` parameter is specified, the `.split()` method splits the string starting from the left and the `.rsplit()` method splits the string starting from the right.


### `.splitlines()` Method in Python

  

The `.splitlines()` method is a little bit different, this method splits a string at line breaks and also returns a list of string items that comes from our original string.

  

This method only accepts a parameter called `keepends`, this parameter can be **empty**, and also can be a **boolean (true or false)** or a **number**. This will help us specify whether a line break is included in our resulting list. Let's do an example **without the `keepend` parameter** to see how the `.splitlines()` method works:

```py
stringName =  "My\nname\nis\nRigoberto"
listName = stringName.splitlines()

print(listName)  #Output: ["My","name", "is", Rigoberto"]
```

See how this method removes the line breaks and split the original string into a list of words (other strings). Let's now try to **pass a boolean as a `keepend` in our `.splitlines()` method**:

- **True** will include the line breaks in our results as follows
```py
stringName =  "My\nname\nis\nRigoberto"
listName1 = stringName.splitlines(True)

print(listName1)  #Output: ["My\n","name\n", "is\n", Rigoberto"]
```

- **False** will not include the line breaks in our results
```py
stringName =  "My\nname\nis\nRigoberto"
listName2 = stringName.splitlines(False)

print(listName2)  #Output: ["My","name", "is", Rigoberto"]
```

And last but not least, let's **pass a number as a `keepend` in our `.splitlines()` method**, in this case, the number **0** will be an equivalent of the **False boolean**, and any other positive or negative numbers will be an equivalent of the **True Boolean**. Let's see how this works:
  
- If we wrtie **0**, it wont include the line breaks in our results
```py
stringName =  "My\nname\nis\nRigoberto"
listName1 = stringName.splitlines(0)

print(listName1)  #Output: ["My","name", "is", Rigoberto"]
```
  

- If we write **any positive or negative numbers**, it will include the line breaks in our results
```py
stringName =  "My\nname\nis\nRigoberto"
listName2 = stringName.splitlines(1)
listName3 = stringName.splitlines(2)
listName4 = stringName.splitlines(100)
listName5 = stringName.splitlines(-57)

print(listName2)  #Output: ["My\n","name\n", "is\n", Rigoberto"]
print(listName3)  #Output: ["My\n","name\n", "is\n", Rigoberto"]
print(listName4)  #Output: ["My\n","name\n", "is\n", Rigoberto"]
print(listName5)  #Output: ["My\n","name\n", "is\n", Rigoberto"]
```

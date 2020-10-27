---
title: "Working with or manipulating strings with Python"
subtitle: "String concatenation is the Web Developer's bread and butter, our job is to concatenate strings to create HTML/CSS documents programmatically"
authors: ["alesanchezr"]
cover_local: "../../assets/images/4cc6fa0b-2530-4052-aa7e-8dac03788ac3.png"
textColor: "white"
date: "2020-10-19T12:36:31-04:00"
syntaxis: ["python"]
tags: ["string","python","concatenation"]
status: "published"
---

## What is a string?

A bunch of letters and characters all together in a particular order, the only way to store any characters that are not a number, are a fundamental part of every major program.

Strings are also part of the most primitive or basic set of data-types: 

| Type      | Example           | Representation                |
| ---       | ---               | ---                           |
| String    | `"Hello World"`   | str                           | just characters in a sequence                                 |
| Number    | `23.34`           | int, float, complex           | just numbers                                                  |
| Sequence  | `[2,3,1,56,4.34]` | list, tuple, range            | Iterable list of values with numerical indexes for positions  |
| Set       | `{'1,'2','45'}`   | set, frozenset                | Like Sequence but unordered and with duplicate elements       |
| Mapping   | `{"name": "Bob"}` | dict                          | Like Sequence but indexes are characters intead of incremental numbers |
| Boolean   | `True` or `False` | bool                          | just True or False |
| Binary    | `01001010111`     | bytes, bytearray, memoryview  | Ideal for low level operations                                |

## How to create a string

To create a string in python just put a bunch of characters within quotes like this `"hello"` or even like this `"23232"`.

```python
name = "Bob"
age = "23" # <--- this is still a string (it's within quotes)
```

When coding a web application, everything the user types in forms it's considered a `string`, even if the user types the number `2` (two) it will still be considered the string `"2"`  and not a real number, the developer will have to explicitely convert or parse that string into a number using the function `int()`  or `float()`.

[[info]]
|:link: How to [convert strings into integers with python](https://guide.freecodecamp.org/python/how-to-convert-strings-into-integers-in-python/) (3 min read).

The most common use for a string is printing it using the function `print`

```python
print("Hello World!")
# The function print() receives a string and displays it on the command line/terminal.
 ```

## How do we use strings?

### String concatenation (summing strings)

Python allows to sum together strings using the plus `+` operator. The following fragment demonstrates how to add two strings to create a **full name** from **first** and **last names**.

```python
first_name = "Alejandro"
last_name = "Sanchez"
full_name = first_name + " " + last_name
print("My name is "+full_name)

# Output: "My name is Alejandro Sanchez"
 ```

In this example `"My name is "` it's being concatenated with the value on the variable `full_name`.

### The length of the string

You often want to know what the length (size) of a string is, for example: Twitter does not allow tweets with more than 240 characters.

```python
tweet = "Good morning!"
print("The variable tweet contains "+str(len(tweet))+" characters")

# Output: The variable tweet contains 13 characters
```


### Extracting characters

After we also need to know the value of the string in a particular position, for example: If a string ends with a question mark it's probably a question:

```python
question = "How are you?"
size = len(question)
print("The strings start with " + question[0])
# Output: The strings start with H
print("The strings ends with " + question[size - 1])
# Output: The strings ends with ?

```

[[info]]
| :point_up: This method of character extraction on strings is very similar to the one used on lists to extract an element from a particular position in the list.   

You can also extract several characters at once. The range of the method starts with the index of the first character to be extracted and ends with the index AFTER the last character to be extracted:

```python
name = "My name is Alejandro Sanchez"
print("Extracted " + name[11:20])
# Output: Extracted Alejandro

print("Extracted " + name[11:])
# Output: Extracted Alejandro Sanchez

print("Extracted " + nombre[:10])
# Output: Extracted My name is 
```

### Comparing strings

If you want to compare two strings you can use the `==`  (double equal) and it will return `True`  if the strings are EXACTLY the same, string comparison is case sensitive, "Bob" is not equal to "bob".

```python
name1 = "pepe";
name2 = "juan";
if name1 == name2:
    print("This is False, I will not get printed")
if name1 == "pepe":
    print("This is True, I will get printed")
if name1 != name2:
    print("This is True, I will get printed")
```

### Converting to lower or upper case.

```python
lowercased_string = name1.lower() # will convert to lowercase
uppercased_string = name2.upper() # will convert to uppercase
```

[[info]]
| :point_up: it is good practice to always lowercase strings before comparing them with others, that way we will avoid missing case sensitive differences.

### Convert strings to numbers (and vice versa)

```python
number = 3.4 # I am a number
number_as_string = str(number) # I am a string with value "3.4"
```
### Extracting substring from a string

In many cases it is necessary to extract a portion or substring of a given string. As we have already seen, we only need to know which positions we want to subtract and place them using brackets as follows:

```python

string = "Python is a language"
print(string[1:5]) # It will print "ython"
print(string[1:]) # Imprime "ython is a language"
print(string[:5]) # Imprime "Pytho"

```



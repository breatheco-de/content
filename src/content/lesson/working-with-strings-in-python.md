---
title: "Working with or manipulating strings with Python"

status: "pending_translation"
subtitle: "String concatenation is the Web Developer's bread and butter, our job is to concatenate strings to create HTML/CSS documents programmatically"

cover: "https://ucarecdn.com/4cc6fa0b-2530-4052-aa7e-8dac03788ac3/"
textColor: "white"
date: "2019-11-15"
syntaxis: ["python"]
tags: ["string","python","concatenation"]
---



## What is a string?

A bunch of letters and characters all together in a particular order, the only way to store any characters that are not a numbers, a fundamental part of every major program.

Strings are also part of the most primivite or basic set of data-types: 

| Type      | Example           | Representation                |
| ---       | ---               | ---                           |
| String    | `"Hello World"`   | str                           | just characters in a sequence                                 |
| Number    | `23.34`           | int, float, complex           | just numbers                                                  |
| Sequence  | `[2,3,1,56,4.34]` | list, tuple, range            | Iterable list of values with numerical indexes for positions  |
| Set       | `{'1,'2','45'}`   | set, frozenset                | Like Sequence but unordered and with duplicate elements       |
| Mapping   | `{"name": "Bob"}` | dict                          | Like Sequence but indexes are characters intead of incremental numbers |
| Boolean   | `True` or `False` | bool                          | just True or False |
| Binary    | `01001010111`     | bytes, bytearray, memoryview  | Ideal for low level operations                                |

## Now to create a string

To create a string in python jsut what a bunch of characters within quotes like this `"hello"` or even like this `"23232"`.

```python
name = "Bob"
age = "23" # <--- this is still a string (it's within quotes)
```

Si estamos desarrollando una aplicación, todo lo que el usuario escríba dentro de formulatios sera considerado una cadena de caracteres, incluso si el usuario escribe el numero dos (2), este sera considerado una cadena de caracters y no un numero a no ser que nosotros como desarrolladores lo convirtamos en numero explicitamente.

El uso mas común para una cadena de caracteres es utilizando la función print:

```python
print("Hola Mundo!")
# La funcion print recibe una cadena de caracteres y la muestra en la linea de commandos / terminal del computador.
 ```

## How do we use strings?

### String concatenation (summing strings)

Python allows to sum together strings using the plus `+` operator. The following fragment demonstrate how to add two strings to create a **full name** from **first** and **last names**.

```python
name = "Alejandro"
last_name = "Sanched"
full_name = name + " " + last_name
print("My name is "+full_name)

# Output: "My name is Alejandro Sanchez"
 ```

In this example `"Mi name is "` it's being concatenated with the value on the variable `full_name`.

### The length of the string

You often want to know what the length (size) of a string is, for example: Twitter does not allow tweets with more than 240 characters.

```python
tweet = "Good morning!"
print("The variable tweet contains "+str(len(nombre))+" characters")

# Output: The variable tweet contains 13 characters
```


### Extracting characters

Ofter we also need to know the value of the string in a particular position, for example: If a string ends with a question mark it's probably a question:

```python
question = "How are you?"
size = question.length
print("The strings start with "+question[0])
# Output: The strings start with H
print("The strings ends with "+question[size - 1])
# Output: The strings ends with ?

```

[[info]]
| :point_up: This method of character extraction on strings is very similar to the one used on lists to extract an element from a particular position in the list.

You can also extract several characters at once:

```python
nombre = "My name is Alejandro Sanchez"
print("Extracted "+nombre[11:19])
# Output: Extracted Alejandro

print("Extracted "+nombre[11:])
# Output: Extracted Alejandro Sanchez

print("Extracted "+nombre[:10])
# Output: Extracted My name is 
```

### Comparación de cadenas

If you want to compare two strings you can use the `==` (double equal) and it will return `True` if the strings are EXACTLY the same, string comparison is case sensitive, "Bob" its not equal to "bob".

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
uppercased_string = lower(name1) # will convert to lowercase
lowercased_string = upper(name2) # will convert to uppercase
```

[[info]]
| :point_up: it is a good practice to always lowercase strings before comparing them with others, that way we will avoid missing case sensitive differences.

### Convert strings to numbers (and vice versa)

```python
number 3.4 # I am a number
number_as_string = str(number) # I am a string with value "3.4"
```
---
title: "Introduction to dictionaries in Python: Key-value structures for organizing and accessing data."
subtitle: "Discover what Python dictionaries are and how they are used. Learn how to leverage these data structures to efficiently organize and access information."
tags: ["python"]
authors: ["DF27ARTS"]

---

## Exploring Python Dictionaries

Dictionaries in [Python](https://4geeks.com/lesson/how-to-code-in-python) are a data structure that allows us to store large amounts of data and access them in a very efficient way. In this article you will learn how to create, access and modify data in a Python dictionary, in the following example we will see a small demonstration of how you can use a dictionary to store a collection of data.

```py runable=true
city = {
    #Key           Value
    "city_id":     1,
    "city_name":   "New York",
    "population":  8,468,
    "currency": "  dollar"
}

city["city_id"] = 1000 # Replace data within the dictionary.
city["city_name"] = city["city_name"].upper() # Modify data inside the dictionary
del city["currency"] # Delete data within the dictionary

print(city)
```

In this example, we create a dictionary with data to represent a city, in the example we access the property `city_id` and replace its original value **50** with a new value **1000**, we modify the property `city_name` with the same value but in capital letters **NEW YORK** and finally we eliminate the property `currency` of the dictionary. In this code, we can see the most basic examples of how to access a property, how to modify data, and how to delete properties in the dictionary.

## What is a Python dictionary?

A Python dictionary is a data structure where you can store information in an organized way. Think of it as a real dictionary, but instead of finding definitions of words, you will have values associated with unique keys! Each element of the dictionary is a key-value pair, where the key is unique and allows us to access its corresponding value. This way we can quickly find what we need.

The following video shows better how dictionaries work in Python, how to access their properties, how to update their values, and many more.

<iframe
    width="650"
    height="350" src="https://www.youtube.com/embed/DSzqe4Rb5YY"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen>
</iframe>

## How to declare a dictionary?

To declare a dictionary in Python you can do it in two ways, the first one is to create a variable and assign it as value a pair of braces `{}` this will create a dictionary by default, another way to declare a dictionary is to create a variable and assign it as value the `dict()` constructor, in the following examples you will see a little better how it works.

```py runable=true
object_one = {
    "key_one": "object one value one",
    "key_two": "object one value two",
}

object_two = dict(
    key_one = "object two value one",
    key_two = "object two value two",
)

print(object_one)
print(object_two)
```
> output:

As you can see, creating a dictionary in Python is very simple, first you create a variable and assign it a pair of keys `{}`, then inside the keys we create a key and to this key we assign a value, for example: `{ "academy": "4Geeks" }`.

> Although it is possible to declare a dictionary with the `dict()` constructor, I recommend that you use the `{}` braces as it is considered good practice and makes the code easier to read.

## Accessing the data!

To access the data inside a dictionary use the syntax `dictionary_name[key]`, or you can also use the `get()` method with the following syntax `dictionary_name.get(key)` as shown in the following example:

```py runable=true
person = {
    "name": "Axel",
    "age": 32,
    "email": "axel@mail.com",
    "phone": "(123) 456-7890"
}

print(person["name"]) # output: Axel
print(person["age"]) # output: 32

print(person.get("email")) # output: axel@mail.com
print(person.get("phone")) # output: (123) 456-7890

print(person["weight"]) # output: Throws an error (KeyError: 'peso') and stops execution because the key (peso) does not exist in the object persona
print(person.get("weight")) # output: Although the key (weight) does not exist in the object persona the method get() does not stop the execution and returns: None
```

As shown in this example, to access the value of a dictionary you can use the square brackets and inside the brackets the name of the key of that value `variable[key]` or you can also use the `get()` method and pass as parameter the name of the key that contains the value `variable.get(key)`.

> It is important to note that if you try to access the key of a dictionary that does not contain that key using the square brackets you will get a `KeyError` and it will stop the execution of the code while if you use the `get()` method it does not stop the execution of the code and returns the value `None`.

## Adding new data!

To add a new item to a dictionary there are several ways, you can use the syntax `dictionary_name[new key] = new value` to add a new item or you can also use the `update()` method to add several items at once as shown in the following example:

```py runable=true
object_one = { "key_1": 1, "key_2": 2 }
object_two = { 1: "A", 2: "B", 3: "C" }

object_one["key_3"] = 3
object_one["key_4"] = 4

object_two.update({ 4: "D", 5: "E" })

print(object_one)
print(object_two)
```

As we see in this example, you can use the `{}` braces syntax and inside the braces the name of the new key to create a new value inside a dictionary, but if you need to create more than one value you can use the `update()` method and pass as parameter a dictionary with the new values.

## Deleting data!

To remove a key-value from a dictionary, you can use the syntax `del dictionary_name[key]` or you can also use the `pop()` method and pass as a parameter the key name of the value you want to remove as shown in the following example:

```py runable=true
person = {
    "name": "Axel",
    "age": 32,
    "email": "axel@mail.com",
    "phone": "(123) 456-7890",
    "weight": 80
}

from person["weight"]
age = person.pop("age")

print(age) # output: 32
print(person)
```

As shown in the example, you can use the reserved word `del` and then access the dictionary key `person["weight"]` to delete it. Another way in which you can remove a key-value from a dictionary is by using the `pop()` method, this method receives as a parameter the name of the key, removes that key-value from the dictionary, and returns the value it removed, which in the example is stored in the `age` variable.

## Iterating through a dictionary!

To iterate through a dictionary you can do it in many ways, in the following example we will see a simple case making use of the `for` loop structure:

```py runable=true
person = {
    "name": "Axel",
    "age": 32,
    "email": "axel@mail.com",
    "phone": "(123) 456-7890",
    "weight": 80
}

for key in person:
    value = person[key]
    print(f "Key: '{key}', value: '{value}'")
```

As we can see in this example, iterating a dictionary is very simple, you can do it with a `for` loop and a few lines of code. In this example, we iterate the dictionary and display in the console the name of the key and the value of that key in each iteration.

## Dictionary methods!

In the following video tutorial, you will see some of the most important dictionary methods, and below the video, you will see a table with some more methods.

<iframe
    width="650"
    height="350" src="https://www.youtube.com/embed/Ycu5Re7bEUE"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen>
</iframe>

These are some of the most relevant dictionary methods.

| Method | Description |
|---------------|----------------------------------------------------------------------------------------------------------------|
|`clear()` | Deletes all dictionary elements.                                                                   |
|`copy()` | Creates a shallow copy of the dictionary.                                                                    |
|`get()` | Returns the value associated with a specific key.                                                             |
|`items()` | Returns a view of `(key, value)` tuples for each key-value pair in the dictionary.                     |
|`keys()` | Returns a view of the keys in the dictionary.                                                            |
|`values()` | Returns a view of the values in the dictionary.                                                           |
|`pop()` | Deletes and returns the value associated with a specific key.                                                   |                                               |
|`popitem()` | Removes and returns an arbitrary `(key, value)` pair from the dictionary.                                         |
|`setdefault()` | Returns the value associated with a specific key. If the key does not exist, a new entry with value is created. |
|`update()` | Updates the dictionary with key-value pairs from another dictionary or from a sequence of tuples.           |

## Conclusion

In conclusion, dictionaries are an excellent storage structure that allows you to store large amounts of data each with a key and a value, you can use any type of data as a key for a dictionary except for other dictionaries, lists or tuples. I hope you find this article useful to learn more about dictionaries and how to work with them. If you want to learn more about this programming language I invite you to read the following [Python tutorial](https://4geeks.com/lesson/how-to-code-in-python) in the [4Geeks](https://4geeks.com) Blog.

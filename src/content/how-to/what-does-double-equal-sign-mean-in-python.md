---
title: "What does double equal sign mean in Python?"
subtitle: "One of the logic operator in Python is the double equal sign. This operator is used to check if one value is equal to another, sensitive to the value type."
tags: ["python"]
date: "2020-10-19T16:36:30+00:00"
authors: ["javierseiglie"]
status: "draft"

---

In Python the double equal sign is used to compare two values. You can use it to check if two values are equal, as you can see in the following example:

```python
x = 5
y= '5'
z = 5

print(x==y) 
#output -> false

print(x==z) 
#output -> true
```

## The double equal sign in Python (`==`)

To compare if two values are equal, you can use the **Double equal sign**, here is a quick example of how it works:
```python
x = 5
y = '5'
z = 5

print(x==y) 
#output -> False

print(x==z) 
#output -> True
```

In the example we have three different variables which values seems to be the same, but one of them `y` has a different type (It's a string) so we can say it's different. When comparing if `x` is equal to `y` it returns `False` because even though the value is the same, but the data type isn't. Then when comparing if `x` is equal to `z`, it returns `True` as both have the same value and data type.

## The equal sign in Python (`=`)

The equal sign `=` in Python (Only one equal sign), as in many other programming languages is used to **assign** a value, most commonly used to assign a value to a variable.

```python 
# creating a variable and assigning a value with the = symbol
x = "4Geeks!"
print(x) #Output-> 4Geeks!
```

In the previous example, the equal sign `=` is being used to assign `"4Geeks!"` to the variable `x`. Then when printing the value of `x` we are confirming that we assigned it correctly.

## Use Cases

### Using the double equal sign on conditions:

The double equal sign operator can be used in conditions to check if two values are equal, here is an example:

```
name = input("What is your name?")

if name == "Rigoberto":
     print("Hello Rigoberto welcome to your office at 4Geeks!")
else:
		 print("Only Rigoberto has access to this office.")
```

In the previous example, we are asking the user for its name and if it is equal to Rigoberto, we allow them to access the office with a good welcoming message.

### Using the double equal sign on for loops:

Double equal sign (`==`) can be used in for loops to check for a specific value in a list. On this example we will loop through a list of names and if the name we're looking for is found, we will print it.

```python
names = ["James", "Willy", "Jane", "Barbara", "Pete", "Julia"]
favorite_name = "Jane"

for x in range(len(arr)):
    if arr[x] == favorite_name:
        print(arr[x] + " at position " + str(x))
        #Output-> Jane at position 2
```

### Using the double equal sign on while loops:

This time we'll be checking if we have something to eat (fruits, vegetables, etc...) in the fridge using a while loop!

```python
fridge_items = ['apple', 'banana', 'cherry', 'date']
food = 'banana'
found = False
position = 0

while position < len(fridge_items):
     if fridge_items[position] == food:
         found = True
         print("We have " + food + " in the fridge. Enjoy!")
         break
		 position++
```

On this example we have a list of fridge_items and a food we are looking for in the list. If the food is found, then we print a message and break the while loop.

#### [**Related: Why 4Geeks Academy teaches Python as a Back End Language**](https://4geeksacademy.com/us/python-bootcamp/why-we-teach-python-4geeks)

Visit [4Geeks](https://4geeks.com/) to learn about Python and solutions to your possible errors. Hope you enjoy the reading and keep on the Geek side!
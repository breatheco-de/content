---
title: "Introduction to Python Programming: A Beginner's Guide?"
subtitle: "Learn the basics of Python programming with our beginner's guide. Discover how to write Python code, data structures, loops and more."
authors: ["javierseiglie"]
tags: ["Python"]

---

Python is one of the most recommended languages to get into the world of programming, programming in Python can be as simple as:

```python

# Python as a calculator
print(2 + 2)

# Output 4
```

## Programming in Python

[Python](https://4geeks.com/technology/python) is an extremely powerful programming language, not for nothing is it the most widely used programming language today, and at the same time, the most recommended language as a gateway to the world of application development.

For some time now, Python has taken over many specializations due to its simplicity and power, being able to be used from the creation of web applications, to [Machine Learning](https://4geeksacademy.com/us/machine-learning-engineer/machine-learning-engineer), AI and as a tool for research and development of technologies and techniques in the medical field.

But of course, if we are going to talk about [how to program with Python](https://4geeks.com/lesson/learning-to-code-with-python), we will not look for specific or advanced examples, but rather, we will look at examples that are simpler but understanding the basis of them, we would already have to be able to sit down and write our first scripts.

## What can you do with Python?

### Calculator

A very simple example would be to use Python as our personal calculator, so that with the following code: `print(2+2)`, Python would return 4, but could we do more complex operations?

```python
# More complex mathematical operations

print(((10 + 25) * 12 - 5) /6 )

# Output: 69.16666666666667
```

> We will always use the `print()` method to display in the terminal what we pass between the brackets.

As you can see, Python will be able to perform complex calculations as long as they are written as we would do in mathematics. The `()` and order of execution of the operations will be respected.

### Creating lists

Normally, having a list of tasks that we have to perform, is a method widely used by everyone when we want to prioritize the tasks we have to perform.

In Python we can create lists in the following way:

```python
todo_list = ["make the bed", "take the dog for a walk", "learn python"]

print(todo_list)
# Output: ['make the bed', 'take the dog for a walk', 'learn python']

# If we want to retrieve a single element from a list, we'll use square brackets [] and pass the position of the element on the list we want to retrieve, just remember that the first position is 0 and not 1.

print(todo_list[0])
# Output: make the bed
```

> Whenever we work with a group of elements, like the tasks in our task list in this case, we group them in a "list" or "array" by using `[]`.

> All programming languages make use of variables, which are like little boxes where we are going to store the information we need. In our example, `todoList` is a variable that stores a list of tasks.

### Working with loops

It is very common to come across a task that requires us to do the same thing a certain amount of times, which can be (and usually is) tedious. 

Python, like all other programming languages, allows us to create cycles to perform the same task as many times as we need. An example, would be to get out of the punishment of the teachers who put us to write the same sentence 100 times... With Python, this is solved in a very simple way

```python 
for x in range(10):
    print("I will study python")

# Output: 
# I will study python
# I will study python
# I will study python
# I will study python
# I will study python
# I will study python
# I will study python
# I will study python
# I will study python
# I will study python
```

> For x in range(10) is a loop that will repeat the code block we have set as long as x, which will start with a value of 0, is less than 10.

## Making use of random numbers

Before moving on to the next example, I think it is necessary to explain a little bit about functions in Python:

```python
# Example of function in Python

def myFunc(params):
    # Code block (code to be executed).
    return  # Code to be returned
```

`def` (definition) is a reserved word used to define a `function`. 

`myFunc` is the name of the function, which will be used to execute it, 

`(params)` parameters that the function will receive, they are as if they were variables that will only exist inside the function.

`:` They indicate where the code block begins.

`code_block` here will go all the logical operations that our function will need to perform to be able to return the result that we want. 

`return` what the function will return when executed.

> Note that some programming languages, like JavaScript, make use of `{}` to define the code block that will be executed, Python on the other hand, makes use of the correct indexing of the elements, that is why the code block and the return will never be at the same height as the declaration of the function.

Now that it is clear how a Python function is composed, we can use what we learned to create a program that returns random colors from a list of colors that we have defined.

```python
import random

def randomColor():
    colors = ["blue", "red", "black", "yellow", "pink"]
    random_selected_color = colors[random.randrange(4)]
    return random_selected_color
  
print(randomColor())

# Output: yellow
```

> `random` is a Python module that allows us to generate random numbers, so we have to import (bring) to our program the module in order to use it.

In the previous example, we have a function called `randomColor` that in the code block what it has is a list of colors and a variable, `randomSelectedColor`.

To select a random color, from our list of colors, we make use of the `random` module that we imported at the beginning, using its `randrange()` method to define up to what number we want to generate random numbers (in this case 4, which is the length of our list of colors).

After we have extracted from our list of colors one randomly and stored it in our `randomSelectedColor` variable, what would be left would be to return it in the return of our function.

## Working with dates:

Every now and then, we wonder how many days until my birthday? Well, let's create a small program to know it

```python
import datetime
now = datetime.date.today()
date = str(input("Enter your birthdate month and day with this format MM/DD: ")).split("/")
birthday = datetime.date(now.year, int(date[0]), int(date[1]))
days = (birthday - now).days
print(fdays + " left until you level up!")
```

- First we will need to import the date module with `import datetime`.
- The `now` variable stores the current date making use of `datetime.date.today()` which is a method that specifically returns that information.
- We make use of `input` to ask the user to enter the date of birth and use `str()` so that Python sees that information as text and not numbers. Similarly, we then separate the day of the month from the user's birthday using `.split("/")` and this information is what we will store in our `date` variable.
- The `birthday` variable will store the date given by the user, together with the current year in the format needed by the `datetime` module to be able to perform operations.
- `days` will be the subtraction between the date of birth that we have formatted and the current date, that returned in days how many days are missing so that the subtraction of 0 (if it gave 0, it would be the day of the birthday).
- We print making use of concatenation to return our `days` variable along with a text how many days are left to level up!

## Mixing it up a bit

As you can imagine, when we make a program, we mix different types of variables, modules and other tools at our disposal.

In the following example we will be making use of objects, lists, cycles and random module. The example will come to solve a problem in which sometimes we are, we do not know what to put on to go out. This script, will allow us from a list of elements in our closet, to help us to select randomly what to put on.


```python
import random

def outfit_maker(wardrobe):
    for clothing in wardrobe:
        print(f"{clothing}: {wardrobe[clothing][random.randrange(len(wardrobe[clothing]))]}")
    return "and that's what you should wear today!"


my_wardrobe = {"up": ["t-shirt", "long sleeves", "shirt"],
               "down": ["jean", "formal", "bomber"],
               "shoes": ["snickers", "formal", "flip-flop"],
               "accessories": ["sunglasses", "bag", "cap"],
               "main_color": ["red", "black", "white", "blue"]}

print(outfit_maker(my_wardrobe))

# Output:
# up: long sleeves
# down: bomber
# shoes: flip-flop
# accessories: sunglasses
# main_color: white
# and that's what you should wear today!
```

Analyzing the example:

- We import random to be able to use it in our code.
- We created a `myWardrobe` object that will have the properties (keys) of our closet and the values will be the options we have to use.
> An object (or dictionary) is a data type in Python that stores pairs of values (key : value).
- We created the `outfitMaker` function that will receive as parameter our closet and will be in charge of choosing our outfit.
	- First we will create a loop to traverse our object.
	- Then we will look at each of the properties (keys) of the object and from the list of options, we will randomly select an element.
	- When the loop is finished, we will have received one item for each of the keys and it will then return the function "and that 's what you should wear today!"
- The last step would be to execute the function by calling it and passing it our closet so that it can perform the operations.

As you can see, Python allows us to make small programs, as simple as one line, as well as programs a little more complex and others, which were not covered in this article, which would be much more complex programs that when done using Python, allow simplicity and at the same time robustness in the development and quality of the programs, you can read this article on [What is Python for](https://4geeks.com/lesson/what-is-python-used-for) to have a broader idea about all its uses.

Hope you enjoy the reading and keep on the Geek side with [4Geeks](https://4geeks.com)!

---
title: "Understanding Python Syntax"
subtitle: "Unleash your power by learning with this lesson using one of the Kings of Back-End Development. Now you will be capable of bringing AI, Big Data, Machine Learning, APIs and integrate third-party applications into your own. Enjoy this Python Syntax lesson"
cover_local: "../../assets/images/576d4b0e-8b35-493d-879c-4d8f914c585f.png"
textColor: "white"
date: "2020-10-19T16:36:31+00:00"
tags: ["python"]
status: "published"

---

The title of this lesson should be "From Python to JS", because that's the way history evolved. Python was born first, and it's way more mature. With Python, you are capable of doing much more stuff because it's a back-end language, and it has libraries and tools for anything you can think of.

Python and JavaScript are friends. Together, they make the best possible team to make any major development you could imagine.

<br>

## Why Python?

With the advent of Node.js, JavaScript now also encompasses server-side capabilities. However, with JavaScript you were historically tied and limited to the browser, unable to access the client’s computer, as it was primarily seen as a rendering language. But Python was different, being a back-end language, it runs on your own server, meaning you have access to and can control the entire computer with it. You have access to any application running on the same computer. You have access to the console. You have access to the network where the computer is connected to, and much more.

On the other hand, Python is the fastest growing back-end language in the world. It is the most versatile and easy-to-code language, with one of the strongest communities.

When you compare it to other back-end languages, Python is leading in almost every functionality it offers: Data Science, AI, API developments, Web Developments, etc.

**Here are some of the reasons Python has come to this point:**

|Simplicity       |Performance    |
|:---------------:|:------------------:|
|Python was meant to be simple and easy. Here is the Python manifesto:<br>https://en.wikipedia.org/wiki/Zen_of_Python<br><br>**Note:** No more semicolons or curly brackets anymore, declaring variables, or the confusing `this` functionality.     |Python is faster than Java, PHP, Ruby and 90% of the other back-end languages.  Only low-level languages like C++ (hard to use) or very specialized like Node.js can beat it.<br><br>Python scalability has been proven over and over with applications like Google Search Engine, YouTube, Google Apps, etc.     |


|Community        |Tools    |
|:---------------:|:------------------:|
|Python is Google's official language. It’s also one of the oldest languages, with huge communities around each of its libraries/tools. MIT uses it to teach code. NASA to build rockets. Quora, Facebook, Yahoo, Amazon, etc. Almost every big company in the world has to use it!      |Most of the Python libraries are the best at what they do: [MatLab](https://www.mathworks.com/help/matlab/matlab-engine-for-python.html?requestedDomain=true) (for data processing), [Pandas](https://pandas.pydata.org/) (big data), [Web.py](http://webpy.org/) (web server), [Django](https://www.djangoproject.com/) (web framework), [PyBrain](http://pybrain.org/) (AI), [TensorFlow](https://www.tensorflow.org/) (Machine Learning), etc. We could be here all day! The most amazing thing is that these libraries are only one `$ pip install` away (just like when using NPM with JS).      |


## JavaScript vs Python Syntax

Python and JavaScript complement each other. In terms of functionality, they have NOTHING in common, they don’t serve the same purpose, they don’t do the same things, they come from different backgrounds.

The things that you will be familiar from JavaScript are the basics of any programming language: looping, using conditionals, variables, classes, functions and objects.

### Data-types

There are only a few differences; here is the explanation:

|In Javascript          |In Python       |
|:----------------------|:-------------------|
|Number                 |Python has the same "Number" data-type, but it can accept more options than JS, like fractions (float) or complex numbers.<br> `myNumber = 23.23  # Float` <br> `myNumber = 54  # Integer` <br> `myNumber = 12.00  # Float (even with 00 as decimals)`    |
|Undefined/Null is now: `None`    |The `undefined` data-type is not available in Python. Here, `undefined` and `null` are the same data-type: `None` <br> `myNumber # is None because it was not defined`       |
|Array     |In Python, the Arrays are called "Lists", and they are similar to JS Arrays but way more flexible and easier to work with. <br> `myArray = ['Juan','John','Steven'] # List of elements with numeric indexes` |
|Object       |In JavaScript, objects and dictionaries are almost the same.  You can do whatever you want to an object because you don’t have to declare its Class first and stick to its definition.<br> `let myCar = {}` <br> `myCar.color = 'blue'` <br><br>Python, on the other hand, separates the Dictionary data-type from the Object data-type. Objects cannot be informally declared. You must first define their class before being able to instantiate them. <br> <br>`class Car(object):` <br> `def __init__(self, color):` <br> `self.color = color` <br> `myCar = Car('blue')` |
|Sets and Tuples      |JavaScript has nothing similar, but they can be very useful: Tuples are ordered; Sets are immutable, unordered sequences of values.      |
|String       |It's the same in Python.     |


## Packages (Importing from other files)

In JavaScript, you can import variables from other files using the `import` or `require` command, but you need to `export` the variable's files first.

In Python, you can make any folder, a package by creating a `__init__.py` file inside of it. Then, you are able to import whatever you want into that folder without having to explicitly export anything.


#### With Python

```python
from package1 import module1

from package1.module2 import function1

```

### Package Managers

What NPM is for JavaScript, PIP is for Python. Both beasts are amazing but very different inside. The biggest difference being that NPM packages are downloaded locally to a `node_modules` folder while PIP packages are installed on the entire machine, outside the project folder. Another small difference is that NPM uses a `package.json` and PIP uses a `requirements.txt` file.


### Casting (parsing) Data-Types

JavaScript is so flexible that you don't have to pay much attention to data types. Python does not like that... In Python, you will get used to casting variables and converting them between other data-types.

#### With JavaScript

```javascript
let result = '5' - '2'; 
// "result" now is equal to 3
```

#### With Python

```python
# In python subtracting strings will throw an error, instead you should do: 

result = int('5') - int('2')
# "result" now is equal to 3
```


### Printing Values

Python has `print()` for writing either into the console. Remember that, since Python (like any other back-end language) runs before the preload event, and it does not have access to the JavaScript console.


#### With JavaScript

```javascript
let simpleValue = 'Hello';
console.log(simpleValue); // This will print the content of the variable
  
let arrayValue = ['Hello', 23, 76, 'World', 43];
console.log(arrayValue); // This will print the content of the array and its elements
```

#### With Python

```python
simpleValue = 'Hello'
print(simpleValue)  # This will print the content of the variable

arrayValue = ['Hello', 23, 76, 'World', 43]
print(arrayValue)  # This will work too, printing the content of the array in a format like this: ['Hello', 23, 76, 'World', 43]
```


### The Lambda Function vs Arrow Function

Finally, in ES2015, JavaScript included the "arrow functions." It's a very easy and light way to declare and use functions. Python, on the other hand, has something similar called `lambda` functions that basically let you use little inline anonymous functions as shortcuts.


#### With JavaScript

```javascript
// Using an arrow function to map a list 

let peopleArray = [{ name: "Mario Peres" }, { name: "Emilio Peres" }, { name: "Yusaiba Peres" }];
let returningMapObject = peopleArray.map(person => person.name);
console.log(returningMapObject);
```


#### With Python

```python
# Using lambda to map a list 

people_list = [{ "name": "Mario Peres" }, { "name": "Emilio Peres" }, { "name": "Yusaiba Peres" }]
returning_map_object = map(lambda obj: obj['name'], people_list)
names_list = list(returning_map_object)
print(names_list)

# Now names_list is a list of names like ["Mario Peres", "Emilio Peres", "Yusaiba Peres"]
```

> 📺 Here is a weird but amazing video explaining lambda functions: https://www.youtube.com/watch?v=25ovCm9jKfA


### Looping lists (similar to arrays)

#### With JavaScript

```javascript
// Doing a forEach loop in JS
myArray.forEach(function(item,index,array) {
    console.log(item);
});

// Doing a for loop in JS 
for(let i = 0; i < myArray.length; i++){
    console.log(myArray[i]);
}
```

#### With Python

```python
colors = ["red", "green", "blue", "purple"]
for color in colors:
    print(color)
```

### Adding and Removing Items

#### With JavaScript

```javascript
let myArray = ['Academy', 'Coding'];
myArray.push('4Geeks');  // Adding an item  

// To remove the item in the index 1 position  
myArray.splice(1, 1);
```

#### With Python

```python
my_list = ['The', 'earth', 'revolves', 'around', 'sun']

my_list.insert(0, "Yes")
print(my_list)  # ['Yes', 'The', 'earth', 'revolves', 'around', 'sun'] 

my_list.remove("Yes")
print(my_list)  # ['The', 'earth', 'revolves', 'around', 'sun']
```

### Sorting Functions for Lists

#### With Python

```python
# Ascending Sort 
number_list = [5, 2, 3, 1, 4]
number_list.sort()
print(number_list)  # [1, 2, 3, 4, 5]

# Sorting list of object using a "key" parameter 
my_list = [{ "name": "Mario Peres" }, { "name": "Emilio Peres" }, { "name": "Yusaiba Peres" }]
my_list.sort(key=lambda person: person['name'])
```

> 📺 Let's summon Socratica again to understand sorting in Python: https://www.youtube.com/watch?v=QtwhlHP_tqc

### The Switch Statement

There is no way to do "switch"... but who cares? 🙂

### Lists vs Tuples

Python brings a new kind of data-type called a "Tuple". Think about it like a super slim and fast performance List. But, like always, to increase performance, we need to decrease functionality.

> 📺 This is a mandatory video explaining the difference between them: https://www.youtube.com/watch?v=NI26dqhs2Rk

### Objects

#### With JavaScript

```javascript
// There are two ways of declaring an object 

// Like an object literal 
let obj = { "name": "Mario", "lastname": "Perez" };

// Like a class 
class Person{
    constructor() {
         this.name = "";
         this.lastname = "";
    }
}

let obj = new Person();
obj.name = "Mario";
obj.lastname = "Perez";
```

#### With Python

```python
# In Python we have Classes and Dictionaries 

# Here is how you declare and use a dictionary 
my_dict = {}
my_dict['name'] = "Mario"
my_dict['lastname'] = "Perez"

# Here is how you declare and use a class 
class Person:
    def __init__(self):
        self.name = ''
        self.lastname = ''

my_person = Person()
my_person.name = "Mario"
my_person.lastname = "Perez"
```

> 📺 Socratica, our great evolved specimen & friend, explains Objects in a great way: https://www.youtube.com/watch?v=apACNr7DC_s

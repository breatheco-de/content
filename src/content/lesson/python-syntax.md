---
title: "Understanding Python Syntax"
subtitle: "Unleash your power by learning with this lesson, using one of the Kings of Back-End Development. Now you will be capable of bringing AI, Big Data, Machine Learning, APIs and integrate third party applications into your own.Enjoy this Pyhton Syntax lesson"

cover: "http://breatheco.de/wp-content/uploads/2018/01/python-background.jpg"

textColor: "white"
date: "2018-05-11"
tags: ["fale"]
---

The title of this lesson should be "From Python to JS," because that’s the way history evolved.  Python was born first and it’s way more mature.  With Python you are capable of doing much more stuff because its a backend language and it has libraries and tools for anything you can think of.

Python and Javascript are friends.  Together they make the best possible team to make any major development you could imagine.

<br>
<br>

## Why Python?
***

With Javascript, you were tied and limited to the browser, you can’t access the client’s computer, and it is basically a rendering language.  But Python is different…being a backend language, it runs on your own server – meaning you have access and can control the entire computer with it.  You have access to any application running on the same computer.   You have access to the console.  You have access to the network where the computer is connected to, and much more.

On the other hand, Python is the fastest growing back-end language in the world.  It is the most versatile and easy-to-code language with one of the strongest communities.

When you compare it to other back-end languages, Python is leading in almost every functionality it offers: Data Science, AI, API developments, Web Developments, etc.

**Here are some of the reasons Python has come to this point:**


|**Simplicity**   |**Performance**    |
|:---------------:|:------------------:|
|Python was meant to be simple and easy.  Here is the Python manifest:<br>https://en.wikipedia.org/wiki/Zen_of_Python<br><br>**Note:** No more semicolons or curly brackets anymore, or declaring variables, or the confusing "this" functionality.     |Python is faster than Java, PHP, Ruby and 90% of the other backend languages.  Only low level languages like C++ (hard to use) or very specialized like Node.js can beat it.<br><br>Python scalability has been proven over and over with applications like Google Search Engine, Youtube, Google Apps, etc.     |


|**Community**   |**Tools**    |
|:---------------:|:------------------:|
|Python is Google’s official language.  It’s also one of the oldest languages with huge communities around each of its libraries\tools.  MIT uses it to teach code.  NASA to build rockets.  Quora, Facebook, Yahoo, Amazon, etc.  Almost every big company in the world has to use it!      |Most of the Python libraries are the best at what they do: [MathLab](https://www.mathworks.com/help/matlab/matlab-engine-for-python.html?requestedDomain=true) (for data processing), [Pandas](https://pandas.pydata.org/) (big data), [Web.py](http://webpy.org/) (web server), [Django](https://www.djangoproject.com/) (web framework), [PyBrain](http://pybrain.org/) (AI), [TensorFlow](https://www.tensorflow.org/) (Machine Learning), etc.  We could be here all day!  The most amazing thing is that these libraries are only one "pip install" away (just like when using NPM with JS).      |

<br>
<br>

## Javascript vs Python
***

Python and Javascript complement each other.  In terms of functionality they have NOTHING in common – they don’t serve the same purpose, they don’t do the same things, they come from different backgrounds, etc.

The only thing you will recall from Javascript is the basics of any programming language: looping, using conditionals, variables, classes, functions and objects.

<br>
<br>

### Data-types
***

There are only a few differences; here is the explanation:

|**In Javascript**      |**In Python**       |
|:----------------------|:-------------------|
|Number                 |Python has the same "Number" data-type but it can accept more options than JS, like fractions (2/3) or complex numbers.<br> `python>myNumber = 23.23;  //float`<br>`python> myNumber = 54;  //integer` <br>`python>myNumber = 12.00;  //float (even with 00 as decimals). `    |
|Undefined/Null is now: ***None***    |The ***undefined*** data-type is not available in Python.  Here "undefined" and "null" are the same data-type: ***None.***<br> `python>myNumber;  //is None because it was not defined`       |
|Array     |In Python, the Arrays are called "List" and they are similar to JS Arrays but way more flexible and easier to work with.<br>`python>myArray = ['Juan','John','Steven']; //array of numeric indexes`       |
|Object       |In Javascript, objects and dictionaries are almost the same.  You can do whatever you want to an object because you don’t have to declare its Class first and stick to its definition.<br> `python>var myCar = {}`<br> `python>myCar.color = 'blue';` <br><br>Python, on the other hand, separates the Dictionary data-type form the Object data-type. Objects cannot be informally declared.  You must first define their class before being able to instantiate them.<br><br>`python>class Car(object):`<br>`python>def __init__(self, color):`<br>`python>self.color = i` <br>`python>myCar = Car('blue')`       |
|Sets and Tuples      |Javascript has nothing similar, they can be very useful: Tuples are ordered; unmutable sequences of values are unordered bags of values.      |
|String       |Is the same in Python.     |


<br>
<br>

## Packages (Importing from other files)
***

In Javascript, you can import variables from other files using the ***import*** or ***require*** command, but you need to **export** the variables files first.

In Python, you can make any folder a package by creating a *\__init\__.py* file inside of it.  Then, you are able to import whatever you want into that folder without having to explicitly export anything.

<br>
<br>

#### ![python syntax](https://ucarecdn.com/16dbf0c1-afa2-418c-a1b6-3bc8cb1d5c81/) With Python

```python
from . import
```
<br>
<br>

## Package Managers
***

What NPM is for Javascript, PIP is for Python.  Both beasts are amazing but very different inside.  The biggest difference being that NPM packages are downloaded locally to a "node_modules" folder while PIP packages are installed on the entire machine – outside the project folder.  Another small difference is that NPM uses a package.json and PIP uses a requirements.txt file.

<br>
<br>

#### ![python syntax](https://ucarecdn.com/16dbf0c1-afa2-418c-a1b6-3bc8cb1d5c81/) With Python

```python
# In python subtracting strings will throw an error, instead you should do: 

var result = int('5') - int('2'); 
#result now is equal to 3
```

<br>
<br>


### **Casting (parsing) Data-Types**
***

Javascript is so flexible that you don’t have to pay much attention to data types.   Python does not like that… in Python, you will get used to casting variables and converting them in between data-types.

### ![python syntax](https://ucarecdn.com/2de93dfc-263c-43e3-afa5-6557a5e7cf4c/)  With JavaScript

```javascript
var result = '5' - '2'; 
//result now is equal to 3
```

#### ![python syntax](https://ucarecdn.com/16dbf0c1-afa2-418c-a1b6-3bc8cb1d5c81/) With Python

```python
# In python subtracting strings will throw an error, instead you should do: 

var result = int('5') - int('2'); 
#result now is equal to 3
```

<br>
<br>


### **Printing Values**
***

Python has "print" either for writing into a document or into the console. Remember that, since Python – like any other back-end language – runs before the preload event, it does not have access to the Javascript console.

<br>
<br>


#### ![python syntax](https://ucarecdn.com/2de93dfc-263c-43e3-afa5-6557a5e7cf4c/) With  JavaScript

```javascript
var simpleValue = ‘hello’;
console.log(simpleValue);
//This will print the content of the variable  
var arrayValue = [‘Hello’,23, 76, ‘World’,43];
console.log(arrayValue);
//This will print the content of the array and its elements.
```


#### ![python syntax](https://ucarecdn.com/16dbf0c1-afa2-418c-a1b6-3bc8cb1d5c81/) With Python

```python
simpleValue = ‘Hello’;
print(simpleValue);  //this will print the content 
arrayValue =[‘Hello’,23,76,’World’,43];
print(arrayValue); //this will work, printing the content of the array in a format like this: [‘Hello’,23,76,’World’,43]
```
  




<br>
<br>


<br>
<br>

### The Lambda Function vs Arrow Function
***

Finally, in ES2015, Javascript included the "arrow functions."  That is a very easy and light way to declare and use functions.  Python, on the other hand, has something similar called lambda functions that basically let you use little inline anonymous functions as shortcuts.

<br>
<br>

#### ![python syntax](https://ucarecdn.com/2de93dfc-263c-43e3-afa5-6557a5e7cf4c/)  With JavaScript

```javascript
//doing a foreach loop in js 
myArray.forEach(function(item,index,array) {
    console.log(item);
});

//doing a for loop in js 
for(var i = 0; i < myArray.length; i++){
    console.log(myArray[i]);
}
```

<br>
<br>

#### ![python syntax](https://ucarecdn.com/16dbf0c1-afa2-418c-a1b6-3bc8cb1d5c81/) With Python

```python
# Using lambda to map a list 
peopleArray = [{ "name": "Mario Peres" },{ "name": "Emilio Peres" },{ "name": "Yusaiba Peres" }]
returningMapObject = map(lambda obj: obj['name'], peopleArray)
namesArray = list(returningMapObject)
print(namesArray)

# now stringsArray is a list of just names like ["Mario Peres","Emilio Peres","Yusaiba Peres"]
```


[[info]]
| :tv: Here is a weird but amazing video explaining lambda functions: https://www.youtube.com/watch?v=25ovCm9jKfA

<br>
<br>

### **Looping list (similar to arrays)**
***

#### ![python syntax](https://ucarecdn.com/2de93dfc-263c-43e3-afa5-6557a5e7cf4c/) With  JavaScript

```javascript
//doing a foreach loop in js 
myArray.forEach(function(item,index,array) {
    console.log(item);
});

//doing a for loop in js 
for(var i = 0; i < myArray.length; i++){
    console.log(myArray[i]);
}
```

<br>
<br>

#### ![python syntax](https://ucarecdn.com/16dbf0c1-afa2-418c-a1b6-3bc8cb1d5c81/) With Python

```python
colors = ["red", "green", "blue", "purple"]
for color in colors:
    print(color)
```

<br>
<br>

### **Adding and Removing Items**
***

<br>
<br>

#### ![python syntax](https://ucarecdn.com/2de93dfc-263c-43e3-afa5-6557a5e7cf4c/)    With JavaScript

```javascript
var myArray = [‘Academy’, ‘Coding’];
myArray.push(‘4Geeks’);  //Adding an item  
//to remove the item in the INDEX position  
myArray.splice(index, 1);
```

#### ![python syntax](https://ucarecdn.com/16dbf0c1-afa2-418c-a1b6-3bc8cb1d5c81/) With Python

```python
myList = ['The', 'earth', 'revolves', 'around', 'sun']
myList.insert(0,"Yes")
print(myList)
# Output: ['Yes', 'The', 'earth', 'revolves', 'around', 'sun'] 

myList.remove("Yes")
print(myList)
['The', 'earth', 'revolves', 'around', 'sun']
```

### **Sorting Functions for Lists**
***

#### ![python syntax](https://ucarecdn.com/16dbf0c1-afa2-418c-a1b6-3bc8cb1d5c81/) With Python

```python
# Ascending Sort 
a = [5, 2, 3, 1, 4]
a.sort()

# Sorting list of object using a "key" parameter 
myArray = [{ "name": "Mario Peres" },{ "name": "Emilio Peres" },{ "name": "Yusaiba Peres" }]
myArray.sort(key=lambda person: person['name'])
```


[[info]]
| :tv: Let’s summon Socratica again to understand sorting in Python: https://www.youtube.com/watch?v=QtwhlHP_tqc

### **The Switch Statement**

**There is now a way to do "switch"… but who cares? 🙂**

### **Lists vs Tuples**

Python brings a new kind of data-type called a "Tuple."  Think about it like a super slim and fast performance List.  But, like always, to increase performance we need to decrease functionality.

[[info]]
| :tv: This is a mandatory video explaining the difference between them: https://www.youtube.com/watch?v=NI26dqhs2Rk

### **Objects**

#### ![python syntax](https://ucarecdn.com/2de93dfc-263c-43e3-afa5-6557a5e7cf4c/) With JavaScript

```javascript{numberLines: true}
//There are two ways of declaring an object 

//Like an object literal 
var obj = { "name": "Mario", "lastname": "Perez" };

//Like a class 
class Person{
    constructor(){
         this.name = "";
         this.lastname = "";
    }
}

var obj = new Person();
obj.name = "Mario";
obj.lastname = "Perez";
```

#### ![python syntaxpython syntaxpython tutorial python class](https://ucarecdn.com/16dbf0c1-afa2-418c-a1b6-3bc8cb1d5c81/) With Python

```python{numberLines: true}
# In Python we have Classes and Dictionaries 

# Here is how you declare and use a dictionary 
obj = {}
obj['name'] = "Mario"
obj['lastname'] = "Perez"

# Here is how you declare and use an class 
class Person:
    def __init__(self):
        name = ''
        lastname = ''

obj = Person()
obj.name = "Mario"
obj.lastname = "Perez"
```


[[info]]
| :tv: Socratica, our great evolved specimen & friend, explains Objects in a great way: https://www.youtube.com/watch?v=apACNr7DC_s



















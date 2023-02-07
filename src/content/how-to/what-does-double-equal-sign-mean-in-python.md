---
title: "What does double equal sign mean in Python?"
subtitle: "One of the logic operator in Python is the double equal sign. This operator is used to check if one value is equal to another given value and it'll check value and type of the data"
tags: ["python"]
date: "2020-10-19T16:36:30+00:00"
authors: [javierseiglie]
status: "draft"

---

The double equal sign are used to compare two values. In logical operators, it will return `True` if both values are equal, otherwise it will return `False`

```python
x = 5
y= '5'
z = 5

print(x==y) 
#output -> false

print(x==z) 
#output -> true
```

## The equal `=` sign in Python:

The equal sign `=` in Python, as many other programming languages is used to **assign** a value to a variable and the most important important word is **assign**.

```python 
# creating a variable and assigning a value with the = symbol
x = "Geek!"
print(x) #Output-> Geek!
```

## The double equal `==` operator 

Although, when we use in human language "equals to" we are referring to comparison and the answer is always **yes or no** (this shirt color is equal to this short color). Now, since we used already the `=` to **assign** a value, we still need to compare (with logical thinking) if some data stored in a variable is equal to other data and thats where the `==` comes in our rescue.

```python
x = 5
y= '5'
z = 5

print(x==y) 
#output -> false

print(x==z) 
#output -> true
```

If you look closely, you´ll see that despite `x` and `y` having the same value, it stills return `false`... Why is that? The double equal logic operator checks for the value and the type of the data compared one another. In our previous example we used a number (`Int` in this case, but could be a `float` to name just one) and compare it with a `String`. Since the type of data is not the same, Python will return as `false` and only return `true` when both, the **value** and the **type** are the same as when compared `x` with `z`.

Keep in mind, the **double equal** sign in Python, as in many other programming languages is for comparing 2 elemens and the only possible return is **true** or **false** (boolean). 

```python
x= 1
y= '1'
z= 1
#returns false
print(x==y) #output -> false 
print(x=='1') #output -> false
print(x=='p') #output -> false
print(x=='1') #output -> false
#returns true
print(x==z) #output -> true
print(x==1) #output -> true
```

## Implementation

### Using the == operator on loops

Let's say that we have a list of names and we want to find if **one** name is present.

```python
# We will loop through the list with a `for loop` to find if Jane is on the provided list
# The function will receive 2 elements, the list (array) and the name to find on the list
# If the name is on the list, we will return the name and it's position on the list 

names= ["James", "Willy", "Jane", "Barbara", "Pete", "Barbara"]

def findName(arr, nameToSearch):
    for x in range(len(arr)):
        if arr[x] == nameToSearch:
            return (str(arr[x]) + " at position " + str(x))

print(findName(names, "Jane"))
#Output-> Jane at position 2
```

Another example, now we'll be using a **while loop**. This time we'll be helping a rocking band to start a song!

```python
# We will create a function for a band to start rocking
# We will recive the ammount of beats to wait to start rocking
# With a while loop, until we reach the number of beats, we will show the classic "and 1..., and 2..., etc..."
def offBeat(numOfBeats):
  x=1
  while x <=numOfBeats:
    print("and " + str(x)+"... ")
    x+=1
      
offBeat(4)
#Output-> and 1... and 2... and 3... and 4...
```

#### [**Related: Why 4Geeks Academy teaches Python as a Backend Language**](https://4geeksacademy.com/us/python-bootcamp/why-we-teach-python-4geeks)

Visit [4Geeks](https://4geeks.com/) to learn about Python and solutions to your possible errors. Hope you enjoy the reading and keep on the Geek side!
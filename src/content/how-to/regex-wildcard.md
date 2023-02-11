---
title: "RegEx wildcard"
subtitle: "On RegEx wildcard we cover how to use the "dot" symbol as a wildcard on regular expressions on Javascript and Python with a working code example"
tags: ["python","JavaScript", "RegEx", "wildcard", ".", "dot"]
date: "2023-02-11T16:36:30+00:00"
authors: [javierseiglie]
status: "draft"

---

```javascript 
const list_of_numbers = ["+34 111111111",
"+37 111111111",
"+50 555555555",
"+34 656565656",
"+01 852416365",
"+06 545696362",
"+02 514258963",
"+03 548525631"]

const findEsPhoneNumber = (arr) =>{
  const dataset = arr.join("")
  const regex = new RegExp("\\+34..........", 'gm')

  return dataset.match(regex)
}

console.log(findEsPhoneNumber(list_of_numbers))

//Output -> [ '+34 111111111', '+34 656565656' ]
```

## What is a **Wildcard** in Regular Expressions (RegEx)  

If you ever played cards, and I'm sure you have, then you've stumbled with the joker card, that can take the value of any other card. A **wildcard** is just like that, a joker, and has the same capabilities, to be able to be anything! 

The **wildcard** symbol is the dot `.`. Each dot will represent a new 

For what are used these **wildcards**? Simple! Let's say, you received a list of numbers that are not organized by their respective countries, but you only care for the ones in Spain and you know that Spain's international code is (+34). Using **wildcards** RegEx allows us to filter all numbers that start with +34 and take the 9 or 10 numbers that come right after the 4 (remember the space included sometimes between numbers) from the list. In a heartbeat it's done, and you have the data you wanted.

## Using the **Wildcard** in JavaScript

We can see a code sample to achieve exactly the situation we were describing.

```javascript 
const list_of_numbers = ["+34 111111111",
"+37 111111111",
"+50 555555555",
"+34 656565656",
"+01 852416365",
"+06 545696362",
"+02 514258963",
"+03 548525631"]

const findEsPhoneNumber = (arr) =>{
  const dataset = arr.join("")
  const regex = new RegExp("\\+34..........", 'gm')

  return(dataset.match(regex))
}

console.log(findEsPhoneNumber(list_of_numbers))

//Output -> [ '+34 111111111', '+34 656565656' ]
```

The first thing to notice is that we are receiving an array of telephone numbers that we need to convert to a string to be able to use RegEx.

We create our RegEx, to use the `+` symbol, we need to escape with the `\ ` symbol, that's why we use  `\\+`. We pass the `g` flag for the search to be global and the `m` flag for multiline.

The last step, we run the `match()` string method and pass our RegEx as a parameter to be matched and we receive only the Spanish numbers as an array.

## Using the **Wildcard** in Python:

Following the same Spain phone search app from a dataset, we have a working example with Python.

```python
list_of_numbers = ["+34 111111111",
"+37 111111111",
"+50 555555555",
"+34 656565656",
"+01 852416365",
"+06 545696362",
"+02 514258963",
"+03 548525631"]

def findEsPhoneNumber(term, arr):
    dataset = "".join(arr)
    match = re.findall(term, dataset)
    return match


print(findEsPhoneNumber("\\+34..........", list_of_numbers))
#output -> ['+34 111111111', '+34 656565656']
```

First, we need to convert our list to a string to be able to use the RegEx module to search for the phone numbers.

We use the `findall()` method, for all the occurrences to be displayed and the program not to stop on the first match and we return this as a list.

Hope you enjoyed the reading and keep on the Geek side!
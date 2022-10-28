---
title: "How to reverse string in python"
subtitle: ""
tags: ["python", "string"]
date: "2020-10-19T16:36:30+00:00"
authors: []
status: "draft"

---

## How to reverse a string in Python

The fastest and simplest way to achieve the desired result would be to use an extended slice: 

```python
string[::-1]
```
Taking in consideration that Python library doesn´t support the in-built method `reverse()` as would do, to name just one, the list container, we are left to ask: How to reverse a string in Python? Well, here are a few ways to do it, so let´s dig in:

- Extended Slice (string[::-1])
- Using reversed() method
- Using loops to reverse the string
- Using lists
- Conclusion

##Extended Slice (string[::-1])

Using steps to reverse a string is fast and simple:

```python
def reverseSteps(str):
	string = str[::-1]
	return string

myString = "How to reverse a string in Python"

print(reverseSteps(myString)) 
#output:  nohtyP ni gnirts a esrever ot woH
```
Taking advantage of the extended slice fields `[start, stop, step]`, we can reverse a string while we DO NOT stablish either start and stop fields. If we do not pass those values, default for `start` field will be 0 and default for the `end` field will be the length of the string. Passing -1 to the `step` field indicates that we want to start taking our steps from the end of the element and finish in the start. 

##Using reversed() method:

If you use the reversed() method by itself, it will throw the reference on the memory instead of the reversed string, like this:

```python
def reverseWithReversed(str):
	string = reversed(str)
	return string

myString = "How to reverse a string in Python"

print(reverseWithReversed(myString))
#output:  <reversed object at 0x000001BB6DA81CF0>

```
Why you may ask? Because it returns the reversed iterator of the string. We use join() to, as the name suggest, join them and achieve the desired result

```python
def reverseWithReversed(str):
	string = "".join(reversed(str))
	return string

myString = "How to reverse a string in Python"

print(reverseWithReversed(myString))
#output: nohtyP ni gnirts a esrever ot woH
```
## Using loops to reverse the string

Yes, we can use our old and trusty companion to reverse a string. You must be already familiarize with loops, so here is the code example to make it happen:

```python
def reverseLoop(str):
	string = ""
	for i in str:
		string = i+string
	return string

myString = "How to reverse a string in Python"

print(reverseLoop(myString))
#output:  nohtyP ni gnirts a esrever ot woH
```

We iterate through the given string (myString) and store its characters on the string variable. On every loop, we will replace the string value with the new character taken from myString store it and add to the end of the string variable the value that was on the string variable on the previous loop.

## Using lists

If you are a Die-Hard fan of lists, want to use the `reverse()` method and don´t like the other options, here´s how to do it:

```python
def reverseWithList(str):
	string = list(str)
	string.reverse()
	return "".join(string)

myString = "How to reverse a string in Python"

print(reverseWithList(myString))
#output: nohtyP ni gnirts a esrever ot woH
```

We turned the string into a list, then we are able to use the reverse() method on the list we just created and then we turn it back joining the list element into a string.

##Conclusion:

We covered different approaches regarding how to reverse a string in Python since the `reverse()` method is not supported on Strings. We discussed the steps approach, `reversed()` method, loops and using lists with the `reverse()` method and how each and every one works behind the scene. Choosing which one to use depends on how much comfortable you feel with each of the options and the needs of the project. 

Hope you enjoy the reading and keep on the Geek side!

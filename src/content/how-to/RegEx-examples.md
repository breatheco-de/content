---
title: "RegEx examples"
subtitle: "On RegEx examples we'll be covering different regular expressions examples for the most used data. You'll find patterns with working snippets for Javascript and Python for emails and passwords validation, Integers, Float numbers and Decimals extraction "
tags: ["python","JavaScript", "RegEx", "example", "patterns" ,"password", "email", "integer", "float", "decimals", "validation"]
date: "2023-02-12T16:36:30+00:00"
authors: [javierseiglie]
status: "draft"

---


```javascript


```

## What are Regular Expressions (RegEx) patterns?

A RegEx pattern is a set of rules applied to match a certain data, let's say an email address, phone number, url and a long list of etc. Everything that follows a strict pattern can be translated into a RegEx pattern.

Creating a RegEx pattern can be tricky, if you're not familiarized with Regular Expressions, so to make our lives easier, here you'll find a list of examples for most used data patterns.

### RegEx for emails

Emails are one of the data we receive and have to validate, that's why we are stating our examples with an email pattern that will match any valid email inside a text.

###RegEx email inside text

Javascript
```javascript
// We receive a text like this, and we want to extract the email address
const text = `My name is Geek and my email address is geek@4geeksacademy.com`;

const findEmail = (str) =>{
  const regex = /\b[\w.!#$%&’*+\/=?^`{|}~-]+@[\w-]+(?:\.[\w-]+)*\b/mg;
  return  str.match(regex)
}

console.log(findEmail(text))
//Output -> [geek@4geeksacademy.com]
```

Python
```python
dataset = "My name is Geek and my mail address is geek@4geeksacademy.com";
regex = r"\b[\w.!#$%&’*+\/=?^`{|}~-]+@[\w-]+(?:\.[\w-]+)*\b"

def findEmail(term, text):
    match = re.search(term, text)
    return match

print(findEmail(regex, dataset))
#Output -> <re.Match object; span=(39, 61), match='geek@4geeksacademy.com'>
```

### RegEx email 

Javascript
```javascript
// Check valid email
const text = `geek@4geeksacademy.com`;

const validEmail = (str) =>{
  const regex = new RegExp("^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$")
  return  regex.test(str)
}
//Output: true
```
Since we are checking if the email address has the correct pattern, we are using the `test` method to receive a `true/false` response.

Python
```python
#Check valid email
dataset = "geek@4geeksacademy.com"
regex = r"^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$"
def validEmail(term, text):
    match = bool(re.search(term, text))
    return match

print(validEmail(regex, dataset))
#Output -> True
```

Since we are checking if the email address has the correct pattern, we are using the `bool`  to receive a `true/false` response.

## Numbers **without** decimals (Int)

Javascript
```javascript
//Check integer
const text = `15 
12.3 
56,7 
12/4`;

const checkInt = (str) =>{
  const regex = /^(\d+)$/gm;
  return  str.match(regex)
}

console.log(checkInt(text))
//Output -> [15]
```

Python

```python
#Check integer
number = ("15\n"
	"12.3\n"
	"56,7\n"
	"12/4")
regex = r"^(\d+)$"
def checkInt(term, text):
    dataset = "".join(text)
    match= re.search(term, dataset, re.MULTILINE)
    return match

print(checkInt(regex, number))
#output -> <re.Match object; span=(0, 2), match='15'>
```

## RegEx decimal numbers (float)

Javascript

```javascript
#Check float
const text = `15 
12.3 
56,7 
12/4`;

const checkFloat = (str) =>{
  const regex = /^(\d*)[.,](\d+)$/gm;
  return  str.match(regex)
}

console.log(checkFloat(text))
//Output -> [ '12.3', '56,7' ]
```

Python

```python
#Check Float
number = ("15\n"
	"12.3\n"
	"56,7\n"
	"12/4")
regexFloat = r"^(\d*)[.,](\d+)$"
def checkInt(term, text):
    dataset = "".join(text)
    match= re.findall(term, dataset, re.MULTILINE)
    return match

print(checkInt(regexFloat, number))
#output -> [('12', '3'), ('56', '7')]
```
We are using the `findall()` method because we have more than one in our dataset, if you would only want one result, use the `search()` method instead. The output would be `<re.Match object; span=(3, 7), match='12.3'>`


### Regex for decimals 

Javascript

```javascript
const text = `15 
12.3 
56,7 
12/4`;

const checkDecimals = (str) =>{
  const regex = /^(\d+)[\/](\d+)$/gm;
  return  str.match(regex)
}

console.log(checkDecimals(text))
//Output -> [ '12/4' ]
```
Python

```python
#Check decimals
number = ("15\n"
	"12.3\n"
	"56,7\n"
	"12/4")

regexDecimals = r"^(\d+)[\/](\d+)$"
def checkDecimals(term, text):
    dataset = "".join(text)
    match= re.search(term, dataset, re.MULTILINE)
    return match

print(checkDecimals(regexDecimals, number))
#Output -> <re.Match object; span=(13, 17), match='12/4'>
```

### RegEx for strong password validation

A strong password consists on a minimum length of 6 characters and at least: 
- 1 uppercase
- 1 lowercase
- 1 number
- 1 special character

Javascript
```javascript
#Check password
const goodPass = `%G[e](e)?k@1&3$`
const badPass = `
geek@123 
GEEK@123 
Geeks123 
Geeks@Geeks`

const checkPass = (pass) =>{
const regex = /(?=^.{6,}$)((?=.*\w)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[|!@\[\]\(\)?$%&\/\(\)\?\^\'\\\+\-\*]))^.*/gm;
  return regex.test(pass)
}
console.log(checkPass(goodPass)) //Output -> true
console.log(checkPass(badPass)) //Output -> false
```

Python

```python
goodPass = "%G[e](e)?k@1&3$"
badPass = ("geek@123\n" 
"GEEK@123\n"
"Geeks123\n"
"Geeks@Geeks")
regex = r"(?=^.{6,}$)((?=.*\w)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[|!\"$%&\/\(\)\?\^\'\\\+\-\*]))^.*"
def checkPassword(term, text):
    match = bool(re.search(term, text, re.MULTILINE))
    return match

print(checkPassword(regex, goodPass)) #Output -> True
print(checkPassword(regex, badPass)) #Output -> False
```

In both cases, we are returning `True/False` if the password provided matches the requirements.

### RegEx for URLs

Javascript

```javascript
// Check url
const checkUrl = (url) =>{
	const regex = /^(((https?|ftp):\/\/)?([\w\-\.])+(\.)([\w]){2,4}([\w\/+=%&_\.~?\-]*))*$/gm;
 	return regex.test(url)
	}

console.log(checkUrl("www.4geeks.com")) //Output -> true
console.log(checkUrl("4geeks.com")) //Output -> true
console.log(checkUrl("http://www.google.com")) //Output -> true
console.log(checkUrl("4geeks")) //Output -> false
```

Python

```python
#check url
def checkUrl(url):
    regex = r"^(((https?|ftp):\/\/)?([\w\-\.])+(\.)([\w]){2,4}([\w\/+=%&_\.~?\-]*))*$"
    match= bool(re.search(regex, url))
    return match

print(checkUrl("www.4geeks.com")) #Output -> True
print(checkUrl("4geeks.com")) #Output -> True
print(checkUrl("http://www.google.com")) #Output -> True
print(checkUrl("4geeks")) #Output -> False
```

In both cases we are returning a boolean (`true/false`) if the url is valid.

Hope you enjoyed the reading and keep on the Geek side!
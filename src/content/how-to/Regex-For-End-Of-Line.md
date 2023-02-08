---
title: "RegEx for end of line"
subtitle: "On RegEx for end of line we cover how to search, using a regular expression, the last word/pattern on a text making use of the $ symbol. We cover how to achieve this on Javascript, Python and Java, 3 of the most used languages in the world for developing apps"
tags: ["python","JavaScript","Java", "RegEx", "Regular Expressions"]
date: "2023-02-08T16:36:30+00:00"
authors: [javierseiglie]
status: "draft"

---

```javascript
const regex = new RegExp("examples$")
const text = "Examples for RegExp 4 Geeks Academy Regex examples"
console.log("regex", regex.test(text))
//Output -> true
```

## What is End Of Line (EOL) in Regular Expressions (RegEx)

End Of Line (EOL) refers to the last word on a string, even if the text spawns more than one visual line, the very last word on the text. 

```javascript
//EOL in this example would be "*Ipsum*."

const text = "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem *Ipsum*."
```
When we want to refer to EOL on a Regular Expression we use the `$` symbol

We'll be using the following text in our exercises:

`examples for RegExp 4 Geeks Academy Regex examples`

We decided to write 2 times the word **examples** because we'll be asking the the one at the end of line. 

## Using EOL RegEx on JavaScript

Javascript is the language of the web, and RegEx is used constantly in form validations and data validation.

### Using EOL Using EOL RegEx on JavaScript  with String methods

The String Object in JavaScript allows us to use `match()`, `matchAll()`,  `replace()`, `replaceAll()`, `search()`, and `split()`. All these methods follow the same syntax, as String methods, you access them using the dot (`.`).

#### The String match() method

```javascript
//RegEx using String method match() 
const text = "Examples for RegExp 4 Geeks Academy Regex examples"
const search = "examples$"
const found = text.match(search)
console.log(found)

//Output:
// [
//  'examples',
//  index: 42,
//  input: 'Examples for RegExp 4 Geeks Academy Regex examples',
//  groups: undefined
// ]
```
As you can see in the example, we are using `text.match()` and passing `search` as a parameter and it throws the word we are searching, the location and the text where it was given. 

### The String search() method

```javascript
//RegEx using String method search() 
const text = "Examples for RegExp 4 Geeks Academy Regex examples"
const search = "examples$"
const found = text.search(search)
console.log(found)

//Output: 42
```

When we use the search() method, we are only asking for the position of the given expression, that's why we receive only the position where the pattern is found. 

### Using EOL RegEx on JavaScript with RegEx Object

The RegEx Object is built in JavaScript and allows us to make use of its methods to search for patterns returning a boolean value.

Since we are using the RegEx object, we need to call it, and access it's methods with the `.` and then we pass the text we want to match the pattern to.

```javascript
const regex = new RegExp("examples$")
const text = "Examples for RegExp 4 Geeks Academy Regex examples"
console.log("regex", regex.test(text))
//Output -> true
```

## Using EOL RegEx on Python

Python comes with the module `re` built-in that stands for RegExp. As a module, we need to import it before being able to access its method using the dot `.` notation.

```python
import re

str = "examples for RegExp 4 Geeks Academy Regex examples"

def find(term, text):
    match = re.search(term, text)
    return match

print(find("examples$", str))
#Output-> <re.Match object; span=(42, 50), match='examples'>
```
The output throws the starting and end position of the match, and the match value.


## Using EOL RegEx on Java

Java has on the `util` module, a `RegEx` submodule that has a `Matcher` method will be used to demonstrate how to use EOL on Java. The `Matcher` method works together with a `Pattern` method. 

```java
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class Main {
	public static void main(String[] args) {
		Pattern pattern = Pattern.compile("examples$", Pattern.CASE_INSENSITIVE);
    	Matcher matcher = pattern.matcher("Examples for RegExp 4 Geeks Academy Regex examples");
    	boolean matchFound = matcher.find();
    	if(matchFound) {
      		System.out.println("Match found");
    	} else {
      		System.out.println("Match not found");
    		}
  		}
	}

// Outputs Match found
```

The `Pattern.Compile()`method creates the pattern to look for (in our case, EOL). The first parameter tells the class the pattern we are searching for, and the second parameter has a flag, making our search case sensitive (the second parameter is optional).

Now that we have our pattern, the `matcher()` method will search for it on the given string returning an object with the search information.

Finally, the `find()` method returns a boolean if the pattern was found or not.

Hope you enjoyed the reading and keep on the Geek Side
---
title: "RegEx for whitespaces"
subtitle: "On RegEx for whitespaces we'll be discussing the different ways to detect whitespaces using regular expressions. RegEx has more than one way to search in a given text for these characters ('\s', '\s+', '\t', and more )and we'll be giving an example with the most used one."
tags: ["Python","JavaScript","Java", "RegEx", "Regular Expressions"]
date: "2023-02-16T16:36:30+00:00"
authors: ["javierseiglie"]
status: "draft"

---

There are several ways on regular expressions to detect whitespaces, the most used one would be the **\s** or **\s+** since they detect not just whitespaces made by the space bar, but with tab and return key (line jump).

```javascript
//Has white spaces
const text = "4 Geeks Academy" 
const hasSpaces = (str) =>{
	const regex = new RegExp("\s+")
	return regex.test(str)
}

console.log(hasSpaces(text)) 

// Output -> true
```

## Regular Expression (RegEx) for whitespaces

Dealing with spaces is a common action when receiving data from our apps, that's why we need to learn how to detect them. Using RegEx allows us to easily detect the presence of white spaces and deal with them as needed.

We can use different RegEx to achieve this:

- `\s` Will take a single whitespace character, but when dealing with line jumps and text separated by the "return" button, won't return anything, since en the exposed cases, are more than one whitespace.
- `\s+` When added the +, you are stating that can be one, or any amount of whitespaces  (spaces, tabs, and line breaks). 
- `[\r\n\t\f\v ]` This RegEx  is equivalent to `\s` but we add it for ompatibility reasons with older programming languages.
- `\t` matches tabular whitespaces `("	")`. The `\s+` will match this as well.
- `\w` matches alphanumeric characters and the underscore (whitespaces included)

Usually, you'll find the `\s` and `\s+` are the most used ones, since they comprehend the other ones we discussed.

## Implementation:

In the following example, we'll be checking if a url has whitespaces or not.

```javascript
const badURL = "https://4geeks.com/how to";
const goodURL = "https://4geeks.com/how-to"


const checkURL = (url) =>{
	const regex = /\s/;
	if (regex.test(url)) {
  		return (`Testing '${url}': Whitespace found in the URL.`);
	} else {
  		return (`Testing '${url}': No whitespace found in the URL.`);
	}
}

checkURL (badURL) 
// Testing 'https://4geeks.com/how to': Whitespace found in the URL.

checkURL (goodURL) 
// Testing 'https://4geeks.com/how-to': No whitespace found in the URL.
```

Python

```python
import re

#whitespaces
badURL = "https://4geeks.com/how to";
goodURL = "https://4geeks.com/how-to"

def checkURL(url):
    regex = r"/\s/"
    match = bool(re.search(regex, url))
    if (match == True):
        return (f"Testing '{url}': Whitespace found in the URL.")
    else:
        return (f"Testing '{url}':No whitespace found in the URL.")

print(checkURL(barURL))
# Testing 'https://4geeks.com/how to': Whitespace found in the URL.
print(checkURL(goodURL))
# Testing 'https://4geeks.com/how-to': No whitespace found in the URL.
```

Hope you enjoyed the reading and keep on the Geek side!

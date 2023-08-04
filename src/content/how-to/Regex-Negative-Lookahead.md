# RegEx for Negative Lookahead

Regular expressions (Regex) is a powerful way to search and manipulate text characters. One of the most useful and advanced concepts right now is Negative Lookahead, so in this article we will see how this works and some use cases in JavaScript and Python.
Before starting, let’s see an example of a regular expression with negative lookahead. For the following case, let’s assume  that we want to find all the “apple” word occurrences, yet they do not have to be preceded by the “red” word. To achieve this, we can use this code:

```js
/apple(?! red)/
```

Here is the explanation:

•	“/”: Delimitates the regular expression beginning .

•	“apple”: Matches with the word “apple”

•	“(?! red)”: The negative lookahead that checks 
that “apple” is not preceded by “red”.

•	“/”: Delimitate the regular expression ending.

Now we will go deeper into this topic.

## What is Negative Lookahead?

The negative lookahead  is a type of non capturing group in a regular expression that allows us to find matches that are not followed by a certain pattern. In a nutshell, it allows us to search specific characters if they are not followed by a determined text. The sintaxis for the Negative Lookahead is “(?! …)” where the ellipsis represents a pattern that does not have to appear after the current position that was indicated.

## Negative Lookahead use cases

**Numbers that not followed by letters:**
```js
// Example in JavaScript

 const regex = /\d+(?! [A-Za-z])/
const text =  "234 an 345 example 2233"

const matches = text.match(regex)
console.log (matches) // The output is: [“234”, “345”, “2233” ]
```
The  explanation for this code is that we wat to find all the numbers that are not followed by letters. Hence, this regular expression will look up for numbers “\d+” that are not followed by a space and then a letter “[A-Za-z]”. In this way our program will find the numbers “234”, “345”, “2233” without taking into consideration “an” and “example”.

**Words that do not contain a specific letter:**
```py
# Example in Python
import re
  regex = r'\b(?!.*e)\w+\b'
text = "orange feet banana coffe"

matches = re.findall(regex, text)
print(matches) # Output: [“banana”]

```
In this case, we aim to find all the words that do not contain the letter “e”. Our expression will look up words “\w+”. that do not contain the letter “e” using Negative Lookahead “(?!.*e)”, but it will not count the rest of the words in the string.

Valid email address but with no specific public domain: 
```js

// Example in javaScript
const regex = /^[a-zA-Z0-9._%+-]+@(?!example\.com)[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const email1 =  "user@example.com";
const email2 = "user2@gmail.com"

console.log(regex.test(email1)) // Output: false
console.log(regex.test(email2))  // Output: true
```
In this last example, we want to validate that every email address is valid, yet they are not from a domain such as “example.com”. Our code will use the negative lookahead expression “(?!example\.com)” to assure that the email is not from  a suspicious or not desired domain. The first email address will not pass this test and will return false, while as the second one will do it and return true.

## Conclusion
We can conclude that Negative Lookahead is an advanced and quite useful regular expression that make possible to find text patterns that are not followed by another determined pattern, which makes it a valuable tool in scenarios where we want to find data or text that meets negative conditions. As in JavaScript as Python, this special expression will improve the efficiency in our code when analyzing strings. 



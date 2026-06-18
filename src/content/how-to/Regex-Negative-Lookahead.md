# RegEx for Negative Lookahead

Regular expressions (Regex) are a powerful way to search and manipulate text characters. One of the most useful and advanced concepts right now is Negative Lookahead, in this article, we will see how it works and some use cases in JavaScript and Python. Let's see an example of a regular expression in JavaScript, with negative lookahead. The following case will be a scenario where we want to find all the "apple" word occurrences, yet they are not preceded by the "red" word. To achieve this, we can use the following Regular Expression:

```js
/apple(?!\s*red)/
```

- "/": Delimitates the regular expression beginning.
-	"apple": Matches with the word "apple".
-	"(?!": Starts the Negative Lookahead (Specifies a group that cannot match after the previous expression). 
-	"\s*": Checks for 0 or more spaces.
-	"red": Checks for the word "red".
-	")": Closes the Negative Lookahead.
-	"/": Delimitate the regular expression ending.

So basically, it's checking that the word "apple" is not preceded by the word "red" with or without a space. Now we will go deeper into this topic.

## What is Negative Lookahead?

The negative lookahead is a type of non-capturing group in a Regular Expression that allows us to find matches that are not followed by a certain pattern. In a nutshell, it allows us to search specific characters if they are not followed by a determined text. The syntax for the Negative Lookahead is "(?!...)" where the dots represent a pattern that does not have to appear after the current position that was indicated.

## RegEx Negative Lookahead use cases:

### Numbers that are not followed by letters:

#### Example with JavaScript:

```js
const regex = /\d+(?![A-Za-z0-9])/;
const text =  "234an 345 example 2233";

const matches = text.match(regex);
console.log(matches) // Output: ["345", "2233"]
```

#### Example with Python:

```py
Missing example here
```

> We want to find all the numbers that are not followed by letters. In this way, our program will find the numbers `345` and `2233`, and not `234` because it's followed by `an`.

### Words that do not contain a specific letter:

#### Example with JavaScript:

```js
Missing example here
```

#### Example with Python:

```py
import re
  regex = r'\b(?!.*e)\w+\b'
text = "orange feet banana coffee"

matches = re.findall(regex, text)
print(matches) # Output: ["banana"]
```

> In this case, we aim to find all the words that do not contain the letter `e`. Our expression will look up words `\w+`. that do not contain the letter `e` using Negative Lookahead `(?!.*e)`, but it will not count the rest of the words in the string.

### Valid email address but with no specific public domain:

#### Example with JavaScript:

```js
const regex = /^[a-zA-Z0-9._%+-]+@(?!example\.com)[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const email1 = "user@example.com";
const email2 = "user2@gmail.com";

console.log(regex.test(email1)); // Output: false
console.log(regex.test(email2)); // Output: true
```

#### Example with Python:

```py
Missing example
```

In this last example, we checked that every email address is valid, yet they are not from a domain such as `"example.com"`. Our code will use the Negative Lookahead expression `(?!example\.com)` to ensure that the email is not from a suspicious or not desired domain. The first email address will not pass this test and will return `false`, while the second one will do it and return `true`.

## Conclusion

The Negative Lookahead is an advanced and quite useful Regular Expression that makes it possible to find patterns that are not followed by another determined pattern, which makes it a valuable tool in scenarios where we want to find data or text that meets negative conditions. As in JavaScript and Python, this special expression will improve the efficiency of our code when analyzing strings.

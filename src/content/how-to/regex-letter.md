---
title: "How to match letters with Regular Expressions?"
subtitle: "Learn how to construct regular expressions to match letters in text. Explore Regex to effectively search for letter-based patterns in your data."
tags: ["regular-expressions"]
authors: ["DF27ARTS"]

---
## How to find Letters with Regex?

Regular expressions are a powerful tool for matching text patterns and finding specific letters or words. In the following example, we will use a regular expression to find all words within a string in two of the most important programming languages Python and [Javascript](https://4geeks.com/lesson/what-is-javascript-learn-to-code-in-javascript). You can find a very interesting [RegEx Tutorial](https://4geeks.com/lesson/regex-tutorial-regular-expression-examples) at 4Geeks's Blog.

#### Python code

```py
import re

regex_pattern = r"[a-zA-Z]+"
string_text = "Hello World 123"

matched_words = re.findall(regex_pattern, string_text)
print(matched_words) # output: ['Hello', 'World']
```

#### JavaScript code

```js
const regexPattern = /[a-zA-Z]+/g;
const stringText = "Hello World 123";

const matchedWords = stringText.match(regexPattern);
console.log(matchedWords); // output: ['Hello', 'World']
```

In these examples, we use the regex pattern `[a-zA-Z]+` to find all words within a string, this pattern searches for all words in the text **"Hello World 123"** regardless of whether the letters are lowercase or uppercase. This is a very simple example of how to use regex to find words within a string, in both examples the words that match the pattern are stored in the `matched_words` (Python) and `matchedWords` (Javascript) variables.

## How to look for letters in regex?

There are many ways to search for letters, words, or text patterns with regular expressions. Whether you want to find all the words within a string or search for a word that starts with a capital letter, or you want to search for a specific text structure, you can always use a regex pattern to search for any type of word or letter you might need. 

Here are some [examples of regex](https://4geeks.com/lesson/regex-tutorial-regular-expression-examples) patterns you can use to search for words or letters.

### Search for capitalized words within a string

This regular expression can be used to search for any capitalized word within a string.

```py
"\b[A-Z]\w*"
```

#### Python code

```py
import re
regex_pattern = r"\b[A-Z]\w*"
string_text = "This Is an Example 123"

matched_words = re.findall(regex_pattern, string_text)
print(matched_words) # output: ['This', 'Is', 'Example']
```

#### JavaScript code

```js
const regexPattern = /\b[A-Z]\w*/g;
const stringText = "This Is an Example 123";

const matchedWords = stringText.match(regexPattern);
console.log(matchedWords); // output: ['This', 'Is', 'Example']
```

In this example, we use the regex pattern `\b[A-Z]\w*` to search for any word starting with a capital letter, this will return an array with the capitalized words that are stored in the `matched_words` (Or `matchedWords` on Javascript) variable in both code examples.

### Finding words with uppercase or lowercase letters (Including any of them)

Regular expression to find words within a string.

```py
"\b[A-Za-z]+\b"
```

#### Python code

```py
import re
regex_pattern = r"\b[A-Za-z]+\b"
string_text = "This is an Example text 123 456 789"

matched_words = re.findall(regex_pattern, string_text)
print(matched_words) # output: ['This', 'is', 'an', 'Example', 'text']
```

#### JavaScript Code

```js
const regexPattern = /\b[A-Za-z]+\b/g;
const stringText = "This is an Example text 123 456 789";

const matchedWords = stringText.match(regexPattern);
console.log(matchedWords); // output: ['This', 'is', 'an', 'Example', 'text']
```

Here we use the regex pattern `\b[A-Za-z]+\b` to find all the words within a string regardless of whether it is upper or lower case, in both examples, the regex returns an array with the words found and these are stored in the `matched_words` (Or `matchedWords` on Javascript) variable.

### Search for words beginning with a letter

Regular expression to find words beginning with a letter.

```py
"\b[a-zA-Z]\w*\b"
```

#### Python code

```py
import re
regex_pattern = r"\b[a-zA-Z]\w*\b"
string_text = "This a 4Geeks regex example abc123 123abc"

matched_words = re.findall(regex_pattern, string_text)
print(matched_words) # output: ['This', 'a', 'regex', 'example', 'abc123']
```

#### JavaScript code

```js
const regexPattern = /\b[a-zA-Z]\w*\b/g;
const stringText = "This a 4Geeks regex example abc123 123abc";

const matchedWords = stringText.match(regexPattern);
console.log(matchedWords); // output: ['This', 'a', 'regex', 'example', 'abc123']
```

In this example, we use the regex pattern`\b[a-zA-Z]\w*\b` to search for words beginning with a letter regardless of whether it's uppercase or lowercase. The matching words are stored in the  `matched_words` (Or `matchedWords` on Javascript) variable.

### Search for words ending in a letter

Regular expression to find words ending in a letter.

```py
"\b\w*[A-Za-z]\b"
```

#### Python code:

```py
import re
regex_pattern = r"\b\w*[A-Za-z]\b"
string_text = "This a 4Geeks regex example abc123 123abc"

matched_words = re.findall(regex_pattern, string_text)
print(matched_words) # output: ['This', 'a', '4Geeks', 'regex', 'example', '123abc']
```

#### JavaScript code:

```js
const regexPattern = /\b\w*[A-Za-z]\b/g;
const stringText = "This a 4Geeks regex example abc123 123abc";

const matchedWords = string_text.match(regexPattern);
console.log(matchedWords); // output: ['This', 'a', '4Geeks', 'regex', 'example', '123abc']
```

The regex pattern `\b\w*[A-Za-z]\b` in this example is used to search for all the words ending with a letter, excluding those ending with a number, a symbol, or anything else. Those that meet the regex pattern are stored in the `matched_words` (Or `matchedWords` on Javascript) variable.

### Finding words with uppercase and lowercase letters (Including both)

This Regex pattern searches for all words containing at least one uppercase letter and one lowercase letter.

```py
"\b(?=\S*[a-z])(?=\S*[A-Z])\S+\b"
```

#### Python code

```py
import re
regex_pattern  =  r"\b(?=\S*[a-z])(?=\S*[A-Z])\S+\b"
string_text = "This is an Example Sentense, It contains word thaT are both in UPPERCASE and lowercase letter"

matched_words = re.findall(regex_pattern, string_text)
print(matched_words) # output: ['This', 'Example', 'Sentense', 'It', 'thaT']
```

#### JavaScript code

```js
const regexPattern = /\b(?=\S*[a-z])(?=\S*[A-Z])\S+\b/g;
const stringText = "This is an Example Sentense, It contains word thaT are both in UPPERCASE and lowercase letter";

const matchedWords = stringText.match(regex_pattern);
console.log(matchedWords); // output: ['This', 'Example', 'Sentense', 'It','thaT']
```

Here we use the regex pattern `\b(?=\S*[a-z])(?=\S*[A-Z])\S+\b` to search for all words within a string containing at least one uppercase and one lowercase letter. All the words that meet the regex pattern are stored in the `matched_words` (Or `matchedWords` on Javascript) variable.

## Use cases of regex letters

These are some real examples where you can use Regex patterns to search for a specific letter, word, or written structure.

### Confirm an http pattern

An interesting way to use a regex letter pattern is to confirm that a URL starts with a correct `http` request.

#### Regular expression to search for the pattern: https://
```
^https?:\/\/
```

#### Python code:

```py
import re

regex_pattern = r"^https?:\/\/"
api_url = "https://example.com"

if re.search(regex_pattern, api_url):
    print(f"The url '{api_url}' is a valid link")
else:
    print(f"The url '${api_url}' has an incorrect format")
```

#### JavaScript code

```js
const regex_pattern = /^https?:\/\//;
const api_url = "https://example.com";

if (api_url.match(regex_pattern)) {
    console.log(`The url "${api_url}" is a valid link`);
} else {
    console.log(`The url "${api_url}" has an incorrect format`);
}
```

In this example, we use the regex pattern `^https?:\/\/` to check if a URL starts with a correct **http** secure protocol structure, this can be useful when you are working with an **API** and you want to make sure that the URL or endpoint you are using has a correct structure and this will help you to avoid error in your application.

### Confirm a file extension

Another way to use regex letter patterns is to confirm that the URL of an image ends with a correct and valid image extension.

#### Regular expression to search for the patterns: `.jpg` or `.png` or `.svg`

```
\.(jpg|png|svg)$ 
```

#### Python code

```py
import re

regex_pattern = r"\.(jpg|png|svg)$"
image_url  =  "https://image-example.jpg"

if re.search(regex_pattern, image_url):
    print(f"The image extension '{image_url}' is valid")
else:
    print(f"The image extension '{image_url}' is incorrect")
```

#### JavaScript code

```js
const regexPattern = /\.(jpg|png|svg)$/;
const imageUrl = "https://image-example.jpg";

if (imageUrl.match(regexPattern)) {
    console.log(`The image extention "${imageUrl}" is valid`);
} else {
    console.log(`The image extention "${imageUrl}" is incorrect`);
}
```

In this example, we use the regex pattern `\.(jpg|png|svg)$` to confirm the extension of an image is correct and valid, this pattern can be useful when you are working on a project like an image gallery and you want to make sure that the images uploaded by users have a correct extension.

## Conclusion

Regular expressions can be used to search for any type of pattern, in this article we mention some examples of how to use Regex to find characters or words within a string, there are many ways to use Regex patterns to search for letters or words whether you want to find all the word that starts with an uppercase letter or if you want to search for words that end with a specific pattern or find all the words in a string regardless of whether they contain an uppercase or a lowercase letter. 

If you are interested in learning more about regular expressions, I recommend you to visit this [regular expression tutorial with examples](https://4geeks.com/lesson/regex-tutorial-regular-expression-examples) from 4Geeks where you will find explanations for every Regex symbol, for example, what is the caret `^` symbol use for or the brackets `[]`, this page has very good explanations and examples that will help you to understand how the regular expression work.

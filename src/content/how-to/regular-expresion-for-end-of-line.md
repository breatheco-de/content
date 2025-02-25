---
title: "How to Create a Regular Expression for End of Line?"
subtitle: "Learn how to construct a regular expression to match the end of a line. Explore practical examples and tips for effective pattern matching in JavaScript and Python."
tags: ["regular-expression", "javascript", "python"]
authors: [FernandoRojasCarrillo]

---

Regular expressions (RegEx) are a common and useful way to search and manipulate text using patterns. In the following example, we will demonstrate how to use a regex in JavaScript to extract all the words at the end of a line.

```js runable=true
const text = "This is an example\n of a regex for end of line";

const regexPattern = /\w+$/gm;
const matches = text.match(regexPattern);

console.log(matches); // output: [ 'example', 'line' ]
```

Here, we are using the regular expression `\w+$` to find the last word at the end of a line, in JavaScript we can use the string method `match()` to check if a string contains a certain pattern, in this case, we use it to extract the last word of a line. As you can see, this method returns an array with the matches found in the text. The first match is the word (example), which is right at the end of a line break. The second match is the word (line), which is found at the end of the text.

## Regex symbol to check for the end of a line

In regular expressions, the `$` symbol indicates that the pattern we want to search for must be at the end of the string, in JavaScript, you can pass the `m` flag at the end of the regular expression to indicate that instead of searching for the end of the string it has to search for the end of each individual line, this will make the regular expression match all lines within the text, including line breaks, you can achieve the same in Python with the `re.MULTILINE` parameter. You can better understand this concept with the following example.

**Python Code**
```py runable=true
import re

text = """
  line_1.\n line_2.
  line_3
  line_4."""

regex_pattern = r"\w+[\.]+$"
matches = re.findall(regex_pattern, text, re.MULTILINE)

print(matches) # output: ['line_1.', 'line_2.', 'line_4.']
```

**JavaScript Code**
```js runable=true
const text = `
  line_1.\n line_2.
  line_3
  line_4.`;

const regexPattern = /\w+[\.]+$/gm;
const matches = text.match(regexPattern);

console.log(matches); // output: [ 'line_1.', 'line_2.', 'line_4.' ]
```

In this example, we use a regular expression to search for all lines that end with a period, as you can see, this regular expression matches all lines that end with a period including those just before a line break. This is a simple example of how you can use the `$` symbol and the `m` flag in JavaScript or the `re.MULTILINE` parameter in Python to tell the regular expression to look for the end of all the lines within the text, including line breaks.

## Use case scenarios

A regular expression that matches the end of a line can be very useful in many different situations, here are a few examples.

### 1. Extract the last word of a line

You can use a regular expression to extract from a text all the words located just before the end of a line. As shown in the following examples.

**Python Code**
```py runable=true
import re

text = """
  This is a text file.\n It has several lines.
  Some of them end with a period.
  Others end with a question mark?
  Can you find them all?"""

regex_pattern = re.compile(r'\w+\W*$', re.MULTILINE)
matches = regex_pattern.findall(text)

print(matches) # output: ['file.', 'lines.', 'period.', 'mark?', 'all?']
```

**JavaScript Code**
```js runable=true
const text = `
  This is a text file.\n It has several lines.
  Some of them end with a period.
  Others end with a question mark?
  Can you find them all?`;

const regexPattern = /\w+\W*$/gm;
const matches = text.match(regexPattern);

console.log(matches); // output: [ 'file.', 'lines.', 'period.', 'mark?', 'all?' ]
```

In this example, we use the regular expression `\w+\W*$` to search for all the words located just before the end of a line no matter if the word includes a symbol like a period or a question mark.

Regular expression explanation:
1.  `^`: Asserts the start of a line.
2.  `\w+`: Matches one or more word characters (letters, digits, or underscores).
3.  `\W*`: Matches zero or more non-word characters (anything that is not a letter, digit, or underscore).
4.  `$`: Asserts the end of a line.

### 2. Extract all questions from a text 

Another example where you can use a regular expression for the end of a line is to extract all lines of a text that end with a question mark.

#### Python code
```py runable=true
import re

text = """
  This text
  Has some questions:
  How are you today?
  What are you doing?
  What is your favorite color?
  Can you answer them all?"""

regex_pattern = r'^(.*\?)\s*$'
questions = [line.strip() for line in re.findall(regex_pattern, text, re.MULTILINE)]

print(questions)
```

#### JavaScript Code
```js runable=true
const text = `
  This text
  Has some questions:
  How are you today?
  What are you doing?
  What is your favorite color?
  Can you answer them all?`;

const regexPattern = /^(.*\?)\s*$/gm;
const questions = text.match(regexPattern).map((line) => line.trim());

console.log(questions);
```
> output code:
```bash
[
  'How are you today?',
  'What are you doing?',
  'What is your favorite color?',
  'Can you answer them all?'
]
```

Here we are using the regular expression `^(.*\?)\s*$` to extract all lines of a text that end with a question mark, in other words, all the questions located within a text.

Regular expression explanation:
1. `^`: Asserts the start of a line.
2. `(.*?)`: This is a non-greedy capturing group `(.*?)`, which matches any character (except for line terminators like `\n`). This group captures the text on the line until the first occurrence of the next part of the expression or the end of the line.
3. `\s*`: Matches zero or more whitespace characters (spaces, tabs, or line breaks).
4. `$`: Asserts the end of a line.

### 3. Convert the lines within a text into HTML paragraphs

Another useful application of regex for matching the end of a line is to convert the lines within a text into HTML paragraphs like a markdown compiler.

#### Python Code
```py runable=true
import re

planets = """Mercury: the closest planet.
  Venus: shrouded in thick clouds.
  Earth: our precious home.
  Mars: the red planet.
  Jupiter: the gas giant.
  Saturn: famous for its rings.
  Uranus: the tilted planet.
  Neptune: the farthest one."""

regex_pattern = r'(?<=^)(.*)$'
paragraphs = re.sub(
  regex_pattern, lambda line: f'<p>{line.group().strip()}</p>', planets, flags=re.MULTILINE
)

print(paragraphs)
```

#### JavaScript Code:
```js runable=true
const planets = `Mercury: the closest planet.
  Venus: shrouded in thick clouds.
  Earth: our precious home.
  Mars: the red planet.
  Jupiter: the gas giant.
  Saturn: famous for its rings.
  Uranus: the tilted planet.
  Neptune: the farthest one.`;

const regexPattern = /(?<=^)(.*)$/gm;
const paragraphs = planets.replace(regexPattern, (line) => {
  return `<p>${line.trim()}</p>`;
});

console.log(paragraphs);
```
> output code:
```bash
<p>Mercury: the closest planet.</p>
<p>Venus: shrouded in thick clouds.</p>
<p>Earth: our precious home.</p>
<p>Mars: the red planet.</p>
<p>Jupiter: the gas giant.</p>
<p>Saturn: famous for its rings.</p>
<p>Uranus: the tilted planet.</p>
<p>Neptune: the farthest one.</p>
```

In this example we are using the regular expression `(?<=^)(.*)$` along with the `re.sub()` method in Python and the `replace()` method in JavaScript to convert all the lines within the text stored in the `planets` variable into HTML paragraphs `<p></p>`, this may be useful if you are creating a markdown compiler or a similar application.

Regular expression explanation:
1.  `(?<=^)`: This is a positive lookbehind assertion `(?<=^)`, which asserts that what immediately precedes the current position in the string is the beginning of a line (`^`). It means that the following pattern (`(.*)`) must be preceded by the start of a line.
2.  `(.*)`: This is a capturing group, which matches any character (`.`) zero or more times (`*`). The `.*` pattern will match any sequence of characters (except for line terminators like `\n`), as many times as possible.
3.  `$`: This asserts the position at the end of a line. It ensures that the previous pattern (`.*`) matches until the end of the line.


## Conclusion

In this article, we talked about how to use regular expressions to find patterns at the end of a line in both Python and JavaScript. We also saw the `$` symbol that represents the end of a line in a regular expressions, this symbol indicates that the pattern you are looking for must be at the end of a string or just before a line break `\n` with the `re.MULTILINE` parameter in Python or the `m` flag in JavaScript. We also saw some cases where regex for and line can be very useful.

We hope you found the insights shared in this article on regular expressions for the end of the line useful. We encourage you to further explore this topic and apply these concepts in your projects. Remember, consistent practice is key to improving your text-handling skills with regex. Thank you for reading our article! Additionally, if you want to take your skills further we encourage you to [register for free](https://4geeks.com/pricing "Register for free at 4Geeks.com") on 4Geeks.com.

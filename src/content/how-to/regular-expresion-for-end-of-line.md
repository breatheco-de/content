---
title: "How to Create a Regular Expression for End of Line?"
subtitle: "Learn how to construct a regular expression to match the end of a line. Explore practical examples and tips for effective pattern matching in JavaScript and Python."
tags: ["regular-expression", "javascript", "python"]
authors: [DF27ARTS]

---

Regular expressions (RegEx) are a very common and powerful way to search and manipulate text by using certain patterns. The following is an example in JavaScript and Python, to check if a string ends with a certain character or text pattern:

```js runable=true
const textOne = "This is an example of a regular expression for the end of line";
const textTwo = "This is another example";

const regexPattern = /line$/i;

const textOneResult = regexPattern.test(textOne);
const textTwoResult = regexPattern.test(textTwo);

console.log(textOneResult); // output: true
console.log(textTwoResult); // output: false
```
```py runable=true
import re

text_one = "This is an example of a regular expression for the end of line"
text_two = "This is another example"

regex_pattern = re.compile(r"line$", re.IGNORECASE)

text_one_result = regexPattern.search(text_one)
text_two_result = regexPattern.search(text_two)

print(bool(text_one_result))  # output: True
print(bool(text_two_result))  # output: False
```

In this example, the regular expression (`line$`) checks if a sentence ends with the word **line**. We can use this regular expression along with the `test()` method to check if the sentences of the `textOne` and `textTwo` variables follow this pattern. As you can see with the first sentence the method returns `true` because it does indeed end with the word **line** but with the second sentence returns `false` because it ends with the word **example** and this does not match the regex pattern.

## Regex symbol to check for the end of a line

In regular expressions, the `$` symbol indicates that the pattern we want to search for must be at the end of the string, you can understand this concept better  with the following example.

**Python Code**
```py
import re

url = "https://www.google.com"
regex_pattern = re.compile(r"\.(com|org|gov|io|net)$", re.IGNORECASE)

if regex_pattern.search(url):
    print(f"The url has a valid domain")
else:
    print(f"The url does not have a valid domain")
```

**JavaScript Code**
```js
const url = "https://www.google.com";

const regexPattern = /\.(com|org|gov|io|net)$/;

if (regexPattern.test(url)) {
  console.log(`The url has a valid domain`);
} else {
  console.log(`The url does not have a valid domain`);
}
```

In this example, the regular expression `.(com|org|gov|io|net)$` checks if the URL of a website ends with a valid top-level domain. We can use this regular expression along with the `search()` method in Python and the `test()` method in JavaScript to verify if the URL of the website `https://www.google.com` has a valid domain. These methods will return `true` or `false` depending on whether the URL meets the condition.

Explanation of the regular expression.

- `\.`: This regular expression pattern matches a single dot (**.**), this is because the dot in a regular expression represents a single character, so if we need a regular expression to match a dot we must precede it with a backslash ( \ ) so that the dot is interpreted literally.
- `(com|org|gov|io|net)`: This pattern is used to group the options that the regular expression can match, this means that the regular expression can match any of the options inside the parentheses.
- `$`: This symbol is the most important part of the regular expression and it represents the end of a line, it indicates that the position of the pattern you are looking for is exactly at the end of the string or right before a line break `\n`.


## Use case scenerios

A regular expression that matches the end of a line can be very useful in many different situations, here are some examples.

### 1. Search for questions within a list of comments

Let's say that you have a social media application and you need to filter from the comments all the questions asked from the users, for this, you can use a regular expression to find the questions.

**Python Code**
```py
import re

comments = [
  "How do I change my profile picture?",
  "Great app! Love the sleek design and smooth navigation. 👍",
  "Amazing features! The new update is fantastic. Keep up the good work! 🚀",
  "Is there a dark mode option?"
]

regex_pattern = re.compile(r"[?]$")
questions = list(filter(lambda comment: regex_pattern.search(comment), comments))

print(questions)
```

**JavaScript Code**
```js
const comments = [
  "How do I change my profile picture?",
  "Great app! Love the sleek design and smooth navigation. 👍",
  "Amazing features! The new update is fantastic. Keep up the good work! 🚀",
  "Is there a dark mode option?",
];

const regexPattern = /[?]$/;
const questions = comments.filter((comment) => regexPattern.test(comment));

console.log(questions);
```
> Code output:
```bash
[
  'How do I change my profile picture?',
  'Is there a dark mode option?'
]
```

In this example, we have a list of comments from a social media application and we want to filter the comments that are questions from the users, for this, we can use the regular expression `[?]$` to search for all comments that end with a question mark `?` and the `filter()` function to get only those questions from the list of comments.

### 2. Check if an email has a valid domain extension

You can use a regular expression to check if an email has a valid domain extension, this can be useful in the login and registration process of an application.

**Python Code**
```py
import re

emails = [
  "EmilyJohnson@gmail.com",
  "MichaelSmith@example.com",
  "ChristopherBrown@yahoo.com",
  "OliviaTaylor@outlook.com",
  "SophiaMiller@example.com",
]

regex_pattern = re.compile(r"(gmail|yahoo|outlook)\.com$")
valid_emails = list(filter(lambda email: regex_pattern.search(email), emails))

print(valid_emails)
```

**JavaScript Code**
```js
const emails = [
  "EmilyJohnson@gmail.com",
  "MichaelSmith@example.com",
  "ChristopherBrown@yahoo.com",
  "OliviaTaylor@outlook.com",
  "SophiaMiller@example.com",
];

const regexPattern = /(gmail|yahoo|outlook)\.com$/;
const validEmails = emails.filter((email) => regexPattern.test(email));

console.log(validEmails);
```
> code output:
```bash
[
  'EmilyJohnson@gmail.com',
  'ChristopherBrown@yahoo.com',
  'OliviaTaylor@outlook.com'
]
```

In this example, we have a list of emails and we need to filter all emails that have a valid domain extension. To do this, we can use the following regular expression `(gmail|yahoo|outlook)\.com$` which matches all emails ending with one of the following domains (**gmail**, **yahoo**, and **outlook**), we also need the `filter()` function to store the valid emails in the `validEmails` variable.

### 3. Validate an image extension

Imagine you have a gallery application where users can upload as many images as they want. You have to make sure that the images that the user uploads have a valid extension so that the application does not break, for this, you can use a regular expression as shown in the example below.

**Python Code**
```py
import re

images_uploaded = [
  "sunset-landscape.jpg",
  "cityscape-night.webp",
  "abstract-artwork.example",
]

regex_pattern = re.compile(r"\.(jpg|jpeg|png|webp|heif|heic|raw)$")
valid_images = list(filter(lambda image: regex_pattern.search(image), images_uploaded))

print(valid_images)
```

**JavaScript Code**
```js
const imagesUploaded = [
  "sunset-landscape.jpg",
  "cityscape-night.webp",
  "abstract-artwork.example",
];

const regexPattern = /\.(jpg|jpeg|png|webp|heif|heic|raw)$/;
const validImages = imagesUploaded.filter((image) => regexPattern.test(image));

console.log(validImages);
```
> code output:
```bash
[ 'sunset-landscape.jpg', 'cityscape-night.webp' ]
```

In this example, the regular expression stored in the `regexPattern` variable will match all images ending with one of the following extensions (jpg, jpeg, png, webp, heif, heic, raw). We can use this regex pattern to filter all images with a valid extension from the list and store them in our application.

## Conclusion

In this article, we talked about how to use regular expressions at the end of a line in both Python and JavaScript. We also saw the `$` symbol that represents the end of a line in a regular expression, this symbol indicates that the pattern you are looking for must be at the end of the string or just before a line break `\n`. We also saw some cases where you can use a regular expression to search for a specific pattern at the end of a string.

I hope you found this article useful and that it helped you learn how to use regular expressions to find a pattern at the end of a line. I would like to encourage you to keep learning more about regular expressions, they are very useful and necessary in almost all programming languages. You don't have to learn all regex patterns because sometimes they can be very confusing, but you do need to understand how they work and how to use them when necessary.

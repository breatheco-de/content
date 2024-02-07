---
title: "How to Create a Regular Expression for End of Line?"
subtitle: "Learn how to construct a regular expression to match the end of a line. Explore practical examples and tips for effective pattern matching in JavaScript and Python."
tags: ["regular-expression", "javascript", "python"]
authors: [DF27ARTS]

---

Regular expressions (RegEx) are a very common and powerful way to search and manipulate text using certain patterns. The following is an example in JavaScript to check if a string ends with a certain character or text pattern.

```py runable=true
import re

text_one = "This is an example of a regular expression for the end of line"
text_two = "This is another example"

regex_pattern = r"line$"

text_one_result = bool(re.search(regex_pattern, text_one))
text_two_result = bool(re.search(regex_pattern, text_two))

print(text_one_result)  # output: True
print(text_two_result)  # output: False
```
```js runable=true
const textOne = "This is an example of a regular expression for the end of line";
const textTwo = "This is another example";

const regexPattern = /line$/i;

const textOneResult = regexPattern.test(textOne);
const textTwoResult = regexPattern.test(textTwo);

console.log(textOneResult); // output: true
console.log(textTwoResult); // output: false
```

In this example, the regular expression (`line$`) checks if a sentence ends with the word **line**. We can use this regular expression along with the `test()` method to check if the sentences of the `textOne` and `textTwo` variables follow this pattern. As you can see with the first sentence the method returns `true` because it does indeed end with the word **line** but with the second sentence returns `false` because it ends with the word **example** and this does not match the regex pattern.

## Regex symbol to check for the end of a line

In regular expressions, the `$` symbol indicates that the pattern we want to search for must be at the end of the string, you can understand this concept better  with the following example.

```py runable=true
import re

url = "https://www.google.com"
regex_pattern = re.compile(r"\.(com|org|gov|io|net)$", re.IGNORECASE)

if regex_pattern.search(url):
    print(f"The url has a valid domain")
else:
    print(f"The url does not have a valid domain")
```
```js runable=true
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

### 1. Check if an email has a valid domain extension

You can use a regular expression to check if an email has a valid domain extension, this can be useful in the login and registration process of an application.

**Python Code**
```py runable=true
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
```js runable=true
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

### 2. Validate an image extension

Imagine you have a gallery application where users can upload as many images as they want. You have to make sure that the images that the user uploads have a valid extension so that the application does not break, for this, you can use a regular expression as shown in the example below.

**Python Code**
```py runable=true
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
```js runable=true
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

### 3. Filter files by extension

Another example where regular expressions for the end of a line can be very useful is if we need to filter or group different files by their extension, as shown in the following example.

#### Python Code
```py runable=true
import re

files = [ "example.py", "script.js", "document.csv", "data.csv", "presentation.js", "images.py", "functions.py"]

files_filtered = {}
regular_expression = r'(\.\w+)$'

for file in files:
    extension = re.search(regular_expression, file)
    if extension.group(1) in files_filtered:
        files_filtered[extension.group(1)].append(file)
    else:
        files_filtered[extension.group(1)] = [file]


print(files_filtered)
```

#### JavaScript Code
```js runable=true
const files = [ "example.py", "script.js", "document.csv", "data.csv", "presentation.js", "images.py", "another_example.py" ];

const filesFiltered = {};
const regularExpression = /(\.\w+)$/;

files.forEach(file => {
    const extension = file.match(regularExpression);
    if (filesFiltered[extension[1]]) {
        filesFiltered[extension[1]].push(file);
    } else {
        filesFiltered[extension[1]] = [file];
    }
});

console.log(filesFiltered);
```
> code output:
```bash
{
    '.py': ['example.py', 'images.py', 'functions.py'], 
    '.js': ['script.js', 'presentation.js'], 
    '.csv': ['document.csv', 'data.csv']
}
```

In this example, we have a list with different files and we need to filter them by their extension, for this, we can use the regular expression `(\(\w+)$`. This regular expression matches any sequence of characters following a period at the end of a string, this will allow us to filter and store files with the same extension within a list.

These are three simple examples, but there are many cases where a regular expression can be used to check or filter a certain pattern or sequence of characters at the end of a line.

## Conclusion

In this article, we talked about how to use regular expressions at the end of a line in both Python and JavaScript. We also saw the `$` symbol that represents the end of a line in a regular expression, this symbol indicates that the pattern you are looking for must be at the end of the string or just before a line break `\n`. We also saw some cases where you can use a regular expression to search for a specific pattern at the end of a string.

I hope you found this article useful and that it helped you learn how to use regular expressions to find a pattern at the end of a line. I would like to encourage you to keep learning more about regular expressions, they are very useful and necessary in almost all programming languages. You don't have to learn all regex patterns because sometimes they can be very confusing, but you do need to understand how they work and how to use them when necessary.

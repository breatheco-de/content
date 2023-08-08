# RegEx wildcard

Regular expressions (Regex) are a powerful tool to search and manipulate patterns in strings and one of the concepts that is crucial to understand in these expressions is the "Wildcard". We will explain what is a wildcard in Regex, how it works, and watch  some use cases using javascript and Python. Below you will see a code snippet in realtion to a regular expression using a wildcard. 

Let's say that we want to find all the files that have a valid format  in a directory then we can use the following regular expression:

```js

const regex = /^[a-zA-Z0-9]+\..+$/

const filenames =  ["document.txt",  "image.jpg", "presentation.pptx", "script.js"]


    for (const filename of filenames) {
        
        if (regex.test(filename)) {

            console.log(`Valid file :  ${filename}`)

        }

    }

```


Here is a breakdown of the previous code:

•	We want to find all the files that have a valid format in a directory, so we use the regular expression '/^[a-zA-Z0-9]+\..+$/'

•	This will look up letters and numbers '^[a-zA-Z0-9]+' that are followed by a dot '\.' and then any character '.+' until it reaches the end of the string '$ '.

•	The wildcard "." will represent any character after the dot. Finally, the  outcome would be " document.txt", "image.jpg", "presentation.pptx", and " script.js" without including "file", "image",   "presentation", or "script".


Now let's dive deeper into this topic.

## What is a Regex Wildcard?

A wildcard in a regular expression is a special character that denotes any other character inside a text and its symbol is '.'. Moreover, it is quite useful when we want to find patterns where multiple letters are unknown or vary. 

## Regex use cases with Wildcards.

In the first example, we want validate different phone number formatations, so we use wildcards to do it:

```js
// we are using JavaScript

const regex = /^(\(\d{3}\)\s|\d{3}\.\d{3}\.)\d{4}$/

const  phoneNumbers = ["(123) 456-7890", "123.456.7890", "555-1234"]

for (const phoneNumber of  phoneNumbers) {

        if (regex.test(phoneNumber)) {
                console.log(` Numero válido: ${phoneNumber}`);
        }
    }

```


In the previous code, we use the regular expression '/^(\(\d{3}\)\s|\d{3}\.\d{3}\.)\d{4}$/' to find all the phone numbers that have a valid format. The wildcard "." will represent any character before and after the dot.

In this following example, let's imagine we want to extract the content of all the paragraphs and divs inside an HTML code, so we use wildcards to do it:

```py
# In this case we use Python
import re

html_code = ' <div><p> Texto en el párrafo </p> <div>Otro contenido</div></div>'

regex_pattern = r'<(p|div)>(.*?)<\/\1>'

matches = re.findall(regex_pattern, html_code)

for match in matches:
    tag = match[0]
    content = match[1]

    print(f"Etiqueta <{tag}>: {content}")
    

```
The regular expression '/<(p|div)>(.*?)<\/\1>/' will find all the paragraphs and divs inside the html code.  The wildcard '.' will represent any character before and after the dot

Now let's review a final example where we are showing how to verify patterns in email addresses:

```js
//  Using JavaScript
const regexExpression  = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ 

  let  email1 = 'user1@example.com'
 let email2 = 'user2@company.co.cr'

 console.log(regexExpression.test( email1)) //  Output: true
 console.log(regexExpression.test(email2))  //  Output: true
```

We want to find all the email addresses that contain valid formats then we use the regular expression '/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/' to check if those emails contain the correct format using wildcards '.' as well  to represent any character before and after the "@" symbol.

# Conclusion
Wildcards are an essential characteristic for regular expression as we have studied along this article. They allow us to find patterns inside text where characters that we do not know and make easier the process to manipulate and search in programming languages such as Python or JavaScript. 

We hope that this topic is more clear for you and you can add regular expressions with wildcards to your programming tool kit for future challenges.

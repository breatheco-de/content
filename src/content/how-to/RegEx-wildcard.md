# RegEx wildcard

Regular expressions (Regex) are a powerful tool to search and manipulate patterns in strings and one of the concepts that is crucial to understand in these expressions is the "Wildcard". We will explain what is a wildcard in Regex, how it works, and watch some use cases using JavaScript and Python. Below you will see a code snippet related to a regular expression using a wildcard. Let's say that we want to find all the words that contain the letter "a" followed by any other letter:

```js
/a./
```

Here is a breakdown of the previous code:

•	"/": Delimitates the regular expression beginning.

•	"a": Matches with the letter "a".

•	".": This is the wildcard that  represents any character except the line break

•	"/": Delimitates the regular expression ending.

Now let's dive deeper into this topic.

## What is a Regex Wildcard?

A wildcard in a regular expression is a special character that denotes any other character inside a text and its symbol is ".". Moreover, it is quite useful when we want to find patterns where multiple letters are unknown or vary. 

## Regex use cases with Wildcards.

In the first example, we want to find words with a similar pattern:

```js
// We are using JavaScript
const regex =/\w+le./
const text ="apple table cable bottle"

const matches = text.match(regex)

console.log(matches);  // Output: ['table','cable']

```

In the previous code, we want to find all the words that end with "le" followed by any other character. To achieve this, we use the regular expression ` /\w+le./` that will look up letters of words "\w+" that end with "le" followed by characters represented by a wildcard ".". The outcome would be "table" and "cable" without including "apple" or "bottle".
As a second example, we will see how to extract structured information

```py
# In this case we use Python
import re

regex =  r'\d{2}/\d{2}/\d{4}'

target_text = " Birthday: 25/12/1990,  Registration date: 10/08/2023 "
matches = re.findall(regex, target_text)
print(matches)  # Output: ['25/12/1990', '10/08/2023']

```
During the code above, we want to find all the dates  with the format "dd/mm/yyyy" inside a longer text, so we use the regular expression "r'\d{2}/\d{2}/\d{4}'" that will look up number sequences  "\d{2}" followed by "/" and then, even more, longer number sequences "\d{4}". The wildcard "." will not be used here, however, it is useful to note how we can create a more specific regular expression based on the pattern we want to extract.

Now let's review a final example where we are showing how to verify patterns in email addresses:

```js
//  Using JavaScript
const regexExpression = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

  let  email1 = "user1@example.com"
 let email2 = "user2@company.co.cr"

 console.log(regexExpression.test( email1)) //  Output: true
 console.log(regexExpression.test(email2))  //  Output: true
```

We want to find all the email addresses that contain valid formats, then we use the regular expression "/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/" to check if those emails contain the correct format using wildcards "." as well to represent any character before and after the "@" symbol.

# Conclusion
Wildcards are an essential characteristic for regular expression as we have studied along this article. They allow us to find patterns inside text where characters that we do not know and make easier the process to manipulate and search in programming languages such as Python or JavaScript. 

We hope that this topic is more clear for you and you can add regular expressions with wildcards to your programming tool kit for future challenges.

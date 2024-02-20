---
title: "Regular Expression Examples"
subtitle: "Explore Regular Expression examples about practical case scenarios. Learn to wield the power of regular expressions whenever you need them and boost your coding skills now!"
tags: ["Python", "JavaScript", "regular-expression"]
authors: [DF27ARTS]

---

[Regular expressions](https://4geeks.com/lesson/regex-tutorial-regular-expression-examples) (regex) are a very useful and powerful tool for any developer, they allow you to describe, match, and search for text patterns. In the following example, we will see how to use a regular expression to check if a sentence contains a specific word in both [Python](https://4geeks.com/lesson/how-to-code-in-python) and [JavaScript](https://4geeks.com/lesson/what-is-javascript-learn-to-code-in-javascript).

```py runable=true
import re

sentence = "This is an example sentence with the word 4Geeks."
pattern = r'\b4Geeks\b'

if re.search(pattern, sentence):
    print("The word 4Geeks was found in the sentence.")
else:
    print("The word 4Geeks was not found in the sentence.")
```
```js runable=true
const sentence = "This is an example sentence with the word 4Geeks.";
const pattern = /\b4Geeks\b/;

if (sentence.match(pattern)) {
    console.log("The word 4Geeks was found in the sentence.");
} else {
    console.log("The word 4Geeks was not found in the sentence.");
}
```

In this example, we use the [regular expression](https://4geeks.com/technology/regular-expression) `\b4Geeks\b` to search for the word (4Geeks) within a sentence. To use a regular expression in Python we need to import the module (**re**) and on this module call the `search()` method, this method receives two parameters, the first one is the string on which we want to search the text pattern and the second one is the regular expression with the pattern to search. In JavaScript you can use the string method `match()` to check if a phrase contains a certain pattern, this method receives the regular expression as a parameter.

## Regular Expression Examples

As mentioned before, regular expressions can be very useful in many different situations. The following are some [RegEx examples](https://4geeks.com/how-to/regex-examples) of the most common scenarios where you may need to use a regular expression to search or validate a text pattern.

### 1. Validate Phone Numbers

Suppose you are working on an application and you want to verify that the phone number entered by the user has a valid format, for this, you can use the following regular expression.

```py runable=true
import re

def check_phone_number(phone_number):
    pattern = re.compile(r'^\d{3}-\d{3}-\d{4}$')

    if pattern.match(phone_number):
        return f"The phone number ({phone_number}) has a valid format."
    else:
        return f"The phone number ({phone_number}) does not have a valid format."

print(check_phone_number("123-456-7890")) # output: The phone number (123-456-7890) has a valid format.
print(check_phone_number("1234567890"))   # output: The phone number (1234567890) does not have a valid format.
```
```js runable=true
const checkPhoneNumber = (phoneNumber) => {
    const pattern = /^\d{3}-\d{3}-\d{4}$/;

    if (pattern.test(phoneNumber)) {
        return `The phone number (${phoneNumber}) has a valid format.`;
    } else {
        return `The phone number (${phoneNumber}) does not have a valid format.`;
    }
}

console.log(checkPhoneNumber("123-456-7890")); // output: The phone number (123-456-7890) has a valid format.
console.log(checkPhoneNumber("1234567890"));   // output: The phone number (1234567890) does not have a valid format.
```

In this example, we used the regular expression to check if a phone number follows the pattern (000-000-0000), this pattern ensures that the number entered by the user has a valid format. The `^` symbol in the regular expression indicates that the match must be at the beginning of the string, the `\d` pattern represents any number, the `{3}` pattern represents how many times the digit must be repeated, and the `$` symbol indicates that the match must also be at the end of the string.

### 2. Validate Emails

Another way in which regular expressions can be handy to validate an email, validating an email is necessary in almost all applications that require login and registration and it is a very simple process to do with a regular expression.

```py runable=true
import re

def check_email(email):
    pattern = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
    
    if re.match(pattern, email):
        return f"The email ({email}) has a valid format."
    else:
        return f"The email ({email}) does not have a valid format."

print(check_email("thomas@email.com")) # output: The email (thomas@email.com) has a valid format.
print(check_email("tom123email"))      # output: The email (tom123email) does not have a valid format.
```
```js runable=true
function checkEmail(email) {
    let pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    if (pattern.test(email)) {
        return `The email (${email}) has a valid format.`;
    } else {
        return `The email (${email}) does not have a valid format.`;
    }
}

console.log(checkEmail("thomas@email.com")); // output: The email (thomas@email.com) has a valid format.
console.log(checkEmail("tom123email"));      // output: The email (tom123email) does not have a valid format.
```

In this example, we use a regular expression to validate if an email has a valid format, this is necessary for almost all the applications that require authentication, and as you can see it is a quite simple process to achieve with a regular expression. Next, we will see what each part of the JavaScript regular expression is used for.

- `[a-zA-Z0-9._%+-]+`: This is a character set that matches any uppercase or lowercase letter, digit, period, underscore, percent, plus, or minus. The `+` at the end means this character set must appear at least once.

- `@`: This is a literal character that must appear in the string.

- `[a-zA-Z0-9.-]+`: This is another character set that matches any uppercase or lowercase letter, digit, period, or hyphen.  

- `\.`: This is an escape character that matches a literal period. Periods have a special meaning in regular expressions, so we need to escape them with a backslash to match a literal period.

- `[a-zA-Z]{2,}`: This character set matches any uppercase or lowercase letter. The `{2,}` at the end means this character set must appear at least two times. 
 
### 3. Validate URLs

In some applications, you may need to validate whether a given URL is formatted correctly. This means that the URL has a valid domain and a valid structure. For this purpose, the best option is to use a regular expression.

```py runable=true
import re

regex_pattern = re.compile(r'^(https:\/\/)?[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}\/?')
urls = [
    'www.google.com',
    'https://www.facebook.com',
    'https://www.twitter.com',
    'http://www.whatsapp.com',
    'https:/instagram'
]

for url in urls:
    if regex_pattern.match(url):
        print(f'The URL ({url}) has a valid format.')
    else:
        print(f'The URL ({url}) does not have a valid format.')
```
```js runable=true
const regexPattern = /^(https:\/\/)?[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}\/?/;

const urls = [
    'www.google.com',
    'https://www.facebook.com',
    'https://www.twitter.com',
    'http://www.whatsapp.com',
    'https:/instagram'
];

urls.forEach(url => {
    if (regexPattern.test(url)) {
        console.log(`The URL (${url}) has a valid format.`);
    } else {
        console.log(`The URL (${url}) does not have a valid format.`);
    }
});
```

Here, we are using the regular expression stored in the `regexPattern` variable to check if the URLs within the list (**urls**) have a valid format. This regular expression checks if a URL starts with `(https)` or `(www)`, and it also checks that at the end has a valid domain after a period.

> Depending on the type of URL you need to validate, you may need to adjust the structure of the regular expression.

### 4. Validate Dates

Validate a date format is another example where regular expressions can be very useful, for example, imagine that you need the date of birth of a user for an application and you need to verify that the date entered by the user follows a valid format, for this the best option is to use a regular expression.

```py runable=true
import re
regex_pattern = r'^(0[1-9]|[12]\d|3[01])\/(0[1-9]|1[0-2])\/(19\d{2}|200\d|202[0-4])$'

users_birthdates = [
    '01/01/2000',
    '31-12-1999',
    '29/02/2000',
    '28/02/1900',
    '01/17/2000',
]

for user_birthdate in users_birthdates:
    if re.match(regex_pattern, user_birthdate):
        print(f'The date ({user_birthdate}) has a valid format.')
    else:
        print(f'The date ({user_birthdate}) does not have a valid format.')
```
```js runable=true
const regexPattern = /^(0[1-9]|[12]\d|3[01])\/(0[1-9]|1[0-2])\/(19\d{2}|200\d|202[0-4])$/;

const usersBirthdates = [
    '01/01/2000',
    '31-12-1999',
    '29/02/2000',
    '28/02/1900',
    '01/17/2000',
];

usersBirthdates.forEach(userBirthdate => {
    if (regexPattern.test(userBirthdate)) {
        console.log(`The date (${userBirthdate}) has a valid format.`);
    } else {
        console.log(`The date (${userBirthdate}) does not have a valid format.`);
    }
});
```

In this example, we used a regular expression to validate if the dates in the `usersBirthdates` list have a valid format. This regular expression matches the format (DD/MM/YYYYYY) and validates if the day of the date is between 1 and 31, if the month is between 1 and 12, and also if the year is between 1900 and 2024 to make sure that the birth date is realistic and appropriate.

### 5. Extract HTML Tags

We can even use regular expressions to extract patterns from a string, in this case, we are using it to extract HTML tags.

```py runable=true
import re

text= "<section> <strong>Hello</strong> <span>World</span> </section>"
regex_pattern = r'<[^>]*>'

html_tags = re.findall(regex_pattern, text)
print(html_tags)
```
```js runable=true
const text= "<section> <strong>Hello</strong> <span>World</span> </section>";
const regexPattern = /<[^>]*>/g;

const htmlTags = text.match(regexPattern);
console.log(htmlTags);
```


Here, we are using the regular expression `<[^>]*>` to extract the HTML tags from the string stored in the `text` variable and store the results in the `htmlTags` variable. This can be very useful if you need to convert a string into HTML for a web page.

## Conclusion

In this article we talked about regular expressions and how they can be used to perform different tasks, we also saw some examples of the most common cases where developers may need to use regular expressions. We hope this article has been helpful to you and that you have found the examples and tips on regular expressions particularly valuable for your Python and JavaScript development. We invite you to continue exploring other resources on our [blog](https://4geeks.com/how-to) to further enhance your knowledge and technical skills. Ready to take your regular expression mastery to the next level? [Sign up now for FREE](https://4geeks.com/pricing) at 4Geeks.com and gain access to a wide range of learning and development opportunities!


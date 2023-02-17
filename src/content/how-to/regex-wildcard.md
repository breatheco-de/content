---
title: "RegEx wildcard"
subtitle: "On RegEx wildcard we cover how to use the dot symbol as a wildcard on regular expressions on Javascript and Python with a working code example"
tags: ["Python", "JavaScript", "RegEx", "Regular Expression", "wildcard", "snippet"]
date: "2023-02-11T16:36:30+00:00"
authors: [javierseiglie]
status: "draft"

---

```javascript 

const url = "https://www.4geeks.com/how-to"

const checkUrl = (url) =>{  
  const regex = new RegExp(/(https?:\/\/)(w{3}[.].+[.]\w{2,3}\/)/, 'gm')
  return(url.match(regex))
}
console.log(checkUrl(url))

//Output -> [ 'https://www.4geeks.com/' ]

```

## What is a **Wildcard** in Regular Expressions (RegEx)  

If you ever played cards, and I'm sure you have, then you've stumbled with the joker card, that can take the value of any other card. A **wildcard** is just like that, a joker, and has the same capabilities, to be able to be anything! 

The **wildcard** symbol is the dot `.`. Each dot will represent a new character.

For what are used these **wildcards**? Simple! Let's say, you received a list of urls and you want to display only the ones that have a correct structure. 

Let's understand how a url is composed using as example `https:\\www.4geeks.com`:

 - http or https -> Scheme. Indicates the protocol used to stablish the connection, Hyper Text Transfer Protocol (the **s** stands for **secure**)
 - www.4geeks.com -> Authority. Separated by the `:\\` pattern and indicates the domain we are connecting to.

Digging deeper into the **Authority**
  - www -> Subdomain. The subdomain can be any word that comes before the first dot on the URL. The **www** stand for World Wide Web and it's the most used. This doesn't mean we can't use other words, for example "blog" and "support" are often used.
  - 4geeks -> Domain Name. These names are unique and represent the IP address of where the web app is being hosted. Using text instead of numbers makes it easier to remember and therefore, to access. 
  - .com -> Domain Extension. Can be called as well **Top-Level Domain** (TLD)

## Using the **Wildcard** in JavaScript

We can see a code sample to achieve exactly the situation we were describing.

```javascript 
const url = ["https://www.4geeks.com/how-to", "https://www.4geeks.commmm/{how-to}", "https://support.4geeks.co/how[to]", "https://()).4geeks.com/how_to", "https://www.4geeks.com/how-to/how-to-update-python-version"]

const checkURLs = (url) =>{
  const regex = new RegExp(/https?:\/\/[\w\d]{3,7}[.].+[.]\w{2,3}\//, 'gm')
  for (el of url) {
    console.log(el.match(regex))
    }
}
checkURLs(url)

/* Output -> 
[ 'https://www.4geeks.com/' ]
null
https://www.4geeks.com/how-to/how-to-update-python-version
null
[ 'https://support.4geeks.com/' ]
*/
```

The first thing to notice is that we are receiving an array of urls se we need to loop to acces all the addresses.

Understanding the RegEx `//https?:\/\/[\w\d]{3,7}[.].+[.]\w{2,3}\//, 'gm'`

- (https?:\/\/) -> With the `?` we're stating that the characters `https` can be found zero and one times and we are grouping it with the `:\\` pattern, because as we learned, this would be the scheme we're looking for.
- [\w\d]{3,6}[.] -> We are accepting from 3 to 7 characters in length ocurrences of digits and words, this way we can check for `support.`, `news`, etc and not only `www`. We add a dot right after, for the dot to be included and complete our subdomain.
- .+ -> We use our **wildcard** to look for any character, number or symbol and we're adding the `+` sign so it'll be as much as needed. 
- [.]\w{2,3}\/)/ -> First we add a dot and then accept from 2 to 3 ocurrences of any character to match `.com`, `.es`, etc and we add a `/` to the end. 

The last step, we run the `match()` string method and pass our RegEx as a parameter to be matched against each element of the array. We return an array for each match.

## Using the **Wildcard** in Python:

Following the same Spain phone search app from a dataset, we have a working example with Python.

```python
import re
urls = ("https://www.4geeks.com/how-to\n"
        "https://www.4geeks.commmm/{how-to}\n"
        "https://support.4geeks.com/how[to]\n"
        "https://()).4geeks.com/how_to\n"
        "https://www.4geeks.com/how-to/how-to-update-python-version")

def checkURLs(url):
    dataset = "".join(url)
    regex = r"https?:\/\/[\w\d]{3,7}[.].+[.]\w{2,3}\/"
    match = re.findall(regex, dataset)
    return match

print(checkURLs(urls))
# output -> ['https://www.4geeks.com/', 'https://support.4geeks.com/', 'https://www.4geeks.com/']
```

First, we need to convert our list to a string to be able to use the RegEx module to search check the urls.

Understanding the RegEx `https?:\/\/[\w\d]{3,7}[.].+[.]\w{2,3}\/`

- (https?:\/\/) -> With the `?` we're stating that the characters `https` can be found zero and one times and we are grouping it with the `:\\` pattern, because as we learned, this would be the scheme we're looking for.
- [\w\d]{3,6}[.] -> We are accepting from 3 to 6 characters in length ocurrences of digits and words, this way we can check for `support.`, `news`, etc and not only `www`. We add a dot right after, for the dot to be included and complete our subdomain.
- .+ -> We use our **wildcard** to look for any character, number or symbol and we're adding the `+` sign so it'll be as much as needed. 
- [.]\w{2,3}\/)/ -> First we add a dot and then accept from 2 to 3 ocurrences of any character to match `.com`, `.es`, etc and we add a `/` to the end. 

We use the `findall()` method, for all the occurrences to be displayed and the program not to stop on the first match. We return this as a list.

Hope you enjoyed the reading and keep on the Geek side!
---
title: "RegEx for Negative Lookahead"
subtitle: "On RegEx for Negative Lookahead we discuss how to create a regex pattern using both, negative and positive lookahead, stating the differences and provinding the same example for both methods."
tags: ["Python","JavaScript","Java", "RegEx", "Regular Expressions", "positive lookahead", "negative lookahead"]
date: "2023-02-24T16:36:30+00:00"
authors: ["javierseiglie"]
status: "draft"

---


Negative lookahead assertions are one of the most important things to keep in mind when creating practical regular expressions. The negative lookahead will look for a targeted group after the match.

```javascript
const str = `Name      Develops     Stack
					James       web        Front
					Oliver       web         Full
					Jane         web         Front
					Barbara    web         Full`;

const findFullStack = (dataset) =>{
	const regex = new RegExp('web(?!\\s+Front)', 'gm')
	return dataset.match(regex)
} 

console.log(findFullStack(str))
//Output: [web, web]
```

## What's Negative Lookahead

We we use Negative Lookahead the regex engine will search for the element that is negated after the item is matched (can be a character, group of characters, symbols or numbers). If after the match is not the targeted group, the match will be discarded.

The syntax would be:

`pattern-to-match(?!element-to-look-after-match-negated)`

We have the `pattern-to-match` that will be the one first to look by the regex engine, then we have the grouping parentheses and inside, the negative lookahead representation `?!` and last, we have the `element-to-look-after-match`. This is the one that will make the negative lookahead to return an actual match. If the `pattern-to-match` is found, the regex engine will look for the `element-to-look-after-match` and only if it's present, will be returned as a result the `pattern-to-match`.

## Negative lookahead example

Let's say we have a table that looks like the one we are providing and we want to look for only the developers that are Full Stack. Since we are using negative lookahead, we will need to define what we **DON'T** want. We are looking for Full so we will say to return the elements that are not **front** (if we have a list of front and full stack developers and we say we don't want the front developers, we are saying we want the **full** stack developers). 

### Javascript

```javascript
const data = `Name      Develops     Stack
					James       web        Front
					Oliver       web         Full
					Jane         web         Front
					Barbara    web         Full`;

const findFullStack = (dataset) =>{
	const regex = new RegExp('web(?!\\s+Front)', 'gm')
	return dataset.match(regex)
} 

console.log(findFullStack(str))
//Output: [web, web]
```
### Python 

```python
import re

data = ("Name      Develops     Stack\n"
	"James      web         Front\n"
	"Oliver     web         Full\n"
	"Jane       web         Front\n"
	"Barbara    web         Full")

def findFullStack(dataset):
    regex = r"web(?!\s+Front)"
    match = re.findall(regex, dataset)
    return match

print(findFullStack(data))
#output: ['web', 'web']
```


- We have a string (remember regex must be used on strings) that is formatted as a table to make it more visual for the example. 
- We created a function that will receive this string and we named it `dataset`.
- We defined out regex pattern `web(?!\\s+Front)` where
 - `web` -> it's our pattern to search
 - `()` -> we create a group
 - `?!` -> negative lookahead (will be true if what is after this is not fulfilled)
 - `\\s+` -> to include any amount of spaces between our pattern and element to match after
 - `Front` -> what needs to **NOT** be found in order to return a valid match
 
We will receive as “match” `[web, web]`. Remember the result will be what we established as the `pattern-to-match`.

## Positive Lookahead

If you are wondering, why do I need to negate what I want to find instead of just stating what I want to look for, then, you can do that with the Positive Lookahead. 

The difference between the Positive Lookahead and the Negative Lookahead is that, one will look for what is the `element-to-look-after-match` as a match and the other will only be a match if it's not found.

`pattern-to-match(?=element-to-look-after-match)`

## Positive Lookahead example:

We'll be using the same situation of the above example, but using the positive version.


### Javascript

```javascript
const data = `Name      Develops     Stack
					James       web        Front
					Oliver       web         Full
					Jane         web         Front
					Barbara    web         Full`;

const findFullStack = (dataset) =>{
	const regex = new RegExp('web(?=\\s+Full)', 'gm')
	return dataset.match(regex)
} 

console.log(findFullStack(str))
//Output: [web, web]
```
### Python 

```python
import re

data = ("Name      Develops     Stack\n"
	"James      web         Front\n"
	"Oliver     web         Full\n"
	"Jane       web         Front\n"
	"Barbara    web         Full")

def findFullStack(dataset):
    regex = r"web(?=\s+Full)"
    match = re.findall(regex, dataset)
    return match

print(findFullStack(data))
#output: ['web', 'web']
```

As you can probably notice, the only differences are:
- Changed the `?!` for `?=`, so the regex engine will return a match when the `element-to-look-after-match` is found.
- Changed the `element-to-look-after-match`  from `Front` to `Full`  that is exactly what we want to look for.

Hope you enjoyed the reading and keep on the Geek side!

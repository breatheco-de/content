---
title: "What is debugging and how to debug code"
subtitle: "Learn what is and how to debug code faster and more efficiently. Techniques that can save you up to 50% of your debugging time."
tags: ["debugging", "web development"]

---



<quote author="Brian Kernighan">Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it</quote>

## Inspecting the HTML source code

You may asume that the code we wrote is the one being displayed by the website. NOPE.
There are many reasons that you original code may not match the source code being displayed in the website.

1. Browser Cache (the most common cause): Your browser sometimes keeps and old version on purpose.
2. Server side dynamic rendering: Using a server side language to manipulate the source code before it arrives to the browser.
3. Server configuration: The server may be removing or adding some extra lines of code.

### What is the Browser Cache

Some times the browser will keep using an old version of the code instead (cache memory), this is called: `Browser Cache`.
Caching can be a common source of confusion for junior developers, as it can lead to changes not appearing on the website as expected.

![Cache memory](https://storage.googleapis.com/media-breathecode/c554b1b12abd3b8e7392151ceb31ed2f367e673e99f890e0a7c70ea4df7f68ad)

Cache errors: You need to make sure the code you wrote is the same code that was sent to your website.

> Make sure to disable browser cache in the developer tools, also get used to holding the `shift` key when refreshing a website during development.

### How to inspect the HTML source code:

In windows: `Ctrl` + `U`
In mac: `⌥ Option` + `⌘ Command` + `U`

## Inspecting the DOM

What is the difference between the souce code and the DOM.
What to look for in the DOM when debugging.

## Using the browser's error console

What errors can I check for in the console when doing HTML/CSS and how will it help me debug.

## Checking the browser's network tab

What is the purpose of the network tab.
Why do

### How is the network tab usefull for HTML/CSS

What to look for in the network tab when debugging HTML/CSS

### How is the network tab usefull for JS

## Code validation


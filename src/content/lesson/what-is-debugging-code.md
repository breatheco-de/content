---
title: "What is debugging and how to debug code"
subtitle: "Learn what is and how to debug code faster and more efficiently. Techniques that can save you up to 50% of your debugging time."
tags: ["debugging", "web development"]

---

We all make a lot of mistakes when coding. This is a reality that every senior developer acknowledges, that is why "debugging skills" have become one of the most essential skills for developers.

I have measured my "error rate"; I know I make > 100 mistakes during an honest day of coding (and I have been coding for 23 years, since the year 2000). These mistakes can be very simple, like misspelling a line of code, or more elaborate rabbit holes, like writing some code that leads to a memory overflow. I'm not scared of making these mistakes because I have a very effective and fast way of identifying and fixing bugs.

Throughout the years, I have developed a very effective debugging recipe that I will share below. It takes me just a few seconds to find and fix 90% of my bugs and mistakes, leaving no room for improvisation or shooting darts.

<quote author="Brian Kernighan">Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it</quote>.

## Preventing bugs

I know you are here to learn how to fix errors, but it is worth mentioning than the mayority of junior developer bugs can be prevented by using an automated code formatter and following clean code and best practices. That's it, I said it! Let's continue.

## How to debug code: The debugging framework

The debugging steps and tools may vary significantly depending on:

1. What type of software you are building: Web apps, datascience, blockchain, etc.
2. The programming language: HTML/CSS, Javascript, Python, etc.
3. What error you are getting: Error message or other patterns and attributes you can notice about the error.

Start by asking yourself the following questions:

### Is it a front-end bug?

Debbuging front-end code can be split in 4 main groups: 

1. **HTML/CSS bugs**: Some confusion created by the browser cache, a missing html `<tag>` or some CSS Rules not being applied correctly.
2. **Javascript logic bugs**: Usually undefined or unexpected variable values, wrong logical conditions or syntax issues.
3. **Rendering with Component frameworks bugs**: Typical errors are not waiting for data to arrive from the backend leading to undefined variables (to early), to many re-renders, wrong import or export variables, or not passing the data correctly between components.
4. **Integration with the backend bugs**: Fetch and HTTP requests with wrong payload, missing authentication credentials, not interpreting the backend payload response correctly or not handling promise exceptions.

### Is it a backend-end bug?

Backend bugs are generally easier to hunt because there are less technologies involved; technologies and languages are cleaner and more mature; and usually  the code runs more straight forward from top to bottom.

> Note: there are more complex backend architectures with async code, cloud based tools, microservices, etc. We are focusing in smaller more standard backend systems that are used by the mayority of the small and mid-sized companies.

Debbuging backend-end code can be split in 4 main groups: 

1. Bad serialization or request validation:
2. 

That's why I decided to split the framework into the following groups, trying to focus on the two most used cases:

- Debugging HTML/CSS errors.
- Debugging Javascript Errors.
- Debugging React.js Errors.
- Debugging Python backend errors.

Note: Click on any of the bullets above to read more about debugging each tecnology.

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


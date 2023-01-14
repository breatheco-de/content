---
title: "What is debugging and how to debug code"
subtitle: "Learn what is and how to debug code faster and more efficiently. Techniques that can save you up to 50% of your debugging time."
tags: ["debugging", "web development"]

---

We all make a lot of mistakes when coding. This is a reality that every senior developer acknowledges; that's why "debugging code" has become one of the most essential skills for developers.

## It's OK to make mistakes

> 🤯 I have measured my "error rate"; I know I make > 100 mistakes during an honest day of coding (and I have been coding for 23 years, since the year 2000). 

These mistakes can be very simple, like misspelling a line of code, or more elaborate rabbit holes, like writing some code that leads to a memory overflow. I'm not scared of making these mistakes because I have a very effective and fast way of identifying and fixing bugs.

## Your job is to become a master of debugging

Throughout the years, I have developed a very effective debugging recipe that I will share below. It takes me just a few seconds to find and fix 90% of my bugs and mistakes, leaving no room for improvisation or shooting darts.

<quote>Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it -- Brian Kernighan</quote>.

## Who should read this guide?

Junior Web Developers. There are so many types of bugs and debugging techniques in coding that it's almost impossible to write them all; that's why I decide to focus this guide on Junior Developers only in the early stage of their full-stack web development career.

## Preventing bugs

I know you are here to learn how to fix errors. Still, it's worth mentioning that most junior developer bugs can be prevented using automated code formatters, linters, autocompletion tools, writing with high [code readability](https://4geeks.com/lesson/what-is-and-how-to-improve-code-readability) and best practices. 

> 📄 Here is a guide about [coding standards and guidelines](/lesson/coding-standards-guidelines) that will help you have clean code and prevent errors.

 <quote>If debugging is the process of removing software bugs, then programming must be the process of putting them in. -- Edsger Dijkstra</quote>

## How to debug code: The debugging framework

The debugging steps and tools may vary significantly depending on the programming language (HTML/CSS, Javascript, Python, etc.), the libraries, the tools (Pandas, Flask, Express, Rails, Postgres, etc.), and the error message or other patterns and attributes you can notice about the error.

### Identify the type of bug: Basic Exploration

It's a good idea to break down bugs into "types" so we can prepare strategies for each group type. After years of debugging code, I have designed 4 front-end and 8 backend bug types.

#### Is it a front-end bug?

Debugging front-end code can be split into 4 main groups: 

1. **HTML/CSS bugs**: Layout miss matches vs. original design, confusions created by the browser cache, a missing HTML `<tags>`, or some CSS Rules not being applied correctly.
2. **Javascript logic bugs**: Usually undefined or unexpected variable values, wrong logical conditions or flow, and syntax issues.
3. **Rendering with Component frameworks bugs**: Dealing with the DOM, React Rendering, etc. Typical errors are not waiting for data to arrive from the backend leading to undefined variables (too early), too many re-renders, wrong importing or exporting of variables, or not passing the data correctly between components.
4. **Integration with the backend bugs**: Fetch and HTTP requests with wrong payload, missing authentication credentials, not interpreting the backend payload response correctly, or not handling promise exceptions, CORS errors.

#### Is it a backend-end bug?

Backend bugs are generally easier to hunt because there are fewer technologies involved; technologies and languages are cleaner and more mature, and usually, the code runs more straightforwardly from top to bottom.

> Note: there are more complex backend architectures with async code, cloud-based tools, microservices, etc. We focus on smaller, standard backend systems that most small and mid-sized companies use.

Debugging backend-end code can be split into 4 main groups:

1. **Bad serialization or request validation**: Incoming data can be wrongly formatted or have wrong values.
2. **Database problems**: Database connection, migrations, SQL statements, or data integrity.
3. **Logical errors**: wrong logic in your conditions, function calls, variable values, etc.
4. **Configuration errors**: Problems with server config, environment problems, package dependencies, library configuration, cache, timeouts, etc.

### How to know which type is my current bug?

Debugging becomes more challenging as your application grows into more pieces that connect. This is why it's imperative to constantly run your code on almost every change (hot reload) instead of waiting until you have made many changes. Remembering the latest change you made to your code before the bug showed up gives you much leverage.

> 😎 Pro tip: Generally, what was the line of code that you last updated: Was it in the front end? Or the back end?

I'm going to assume the worst: You have no idea when the bug first appeared and have made many changes since the last time you ran your application. So these are the clues you have to start debugging:

In the front end:
Check for an error message in the developer console.
Check for a request error in the network tab.
In the backend:
If you are building on a server: Check for the request log.
Check for exceptions in the terminal.

There is a 99% probability your error will show up on any of these outputs, but that does not mean the error belongs to the front or backend; you must read the error first.

#### Reading errors from the developer console

**Backend errors** in the developer javascript console are usually indicated by messages such as "404 Not Found" or "500 Internal Server Error", "CORS policy", etc.

**Front-end errors** are often indicated by messages such as "Uncaught ReferenceError: x is not defined", "SyntaxError: Unexpected token <", "Uncaught TypeError: x is not a function", "Uncaught TypeError: Cannot read property 'length' of undefined", etc.

#### Reading errors from the network tab

The quickest way to identify errors in the network tab of the developer tools is to look for requests with a status other than 200 OK.

Error codes starting with `4xx` are probably front-end bugs.
Error codes that begin with `5xx` are probably backend bugs.

Here is a more detailed list:

| Code | Meaning |
| ------ | -------------|
| 400 | Its a front-end issue; the backend is expecting a different format or values in your data |
| 401 | It's a front-end issue because you are trying to request something you don't have permission to access. Did you forget to include credentials in the request? |
| 403 | Probably front-end because the credentials are included, but they may be wrong. The backend it's not allowing you to access it. |

As a second source of information, and especially if the error is a `4xx`, you can check that the request payload has the expected format and values.

#### Reading the backend terminal

If you have an error while running a script (not a server), it's a backend error.
If you are running a server, the error may be a poorly formatted request coming from the front end; that's why it's a good idea to check for the request body and the status code on the developer tools network tag first.
If the request payload, URL, and headers are OK, it's a backend error.

#### Reading the server request log

Lastly, if you have an error on a web server (like Express, Flask, Django, etc.) it's a good idea to check the log of requests being asked to the server. In the request log, you can see every request that any front end made to your API sorted by timestamp. Here is a short explanation of one request log example:

![request log example](https://storage.googleapis.com/media-breathecode/53b8907096b009687a251a9ce7f9270cab0ab57342f2372ccbabfce421f7afaa)

## Narrowing down the bug

If you followed the previous steps correctly, you know to what part of your code is your bug related. So stay focused, and don't guess! You have handy information about your bug; use it and pull that thread. For example: 

a. Stop thinking about the back end if your bug is in the front end or vice-versa.
b. Wrong Syntax or TypeError? Syntax errors usually tell you which line has the issue. So look for that info and read the surrounding lines of code.
c. The Network tag has request status code 4xx? Go and fix the code crafting the request.
d. The Network tag has request status code 5xx? Go and read the backend terminal for Syntax or Database errors.

## Trial an error until you fix it

If you attempt to fix the bug by making changes to your code and another bug shows up, that is usually good news! I call this nested debugging.

You must be confident in your bug exploration and the information you gathered to stay focused on the solution. Wait to start another theory; give the current approach a good try!

## Fix the bug

The last step is obviously fixing the bug; it may take a while, and you may have some nested bugs along the way.

I have prepared very straightforward cheat sheets to debug the most common errors you will find while coding web applications and APIs as a junior developer.

- Debugging HTML/CSS errors.
- Debugging Javascript Front End Errors.
- Debugging React.js Front End Errors.
- Debugging Python Script backend errors.
- Debugging Python Flask API backend errors.

> 📄 Note: Click on any bullets above to learn about debugging each technology.

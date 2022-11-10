---
title: "How to run javascript"
subtitle: ""
tags: ["javascript"]
date: "2020-10-19T16:36:30+00:00"
authors: ["Javier Seiglie"]
status: "draft"

---

---
title: "How to run javascript"
subtitle: ""
tags: ["javascript"]
date: "2020-10-19T16:36:30+00:00"
authors: ["Javier Seiglie"]
status: "draft"

---

# How to run javascript

The most common and useful javascript expression would be:  

```javascript
	console.log("4 Geeks javascript")
	// Output: 4 Geek javascript
```

There are many ways to execute javascript locally, without the need of internet or hosting our web apps on a server. Here are a few ways to do this:

- Using the browser console
- Using the command line
- Using an IDE for developing 

## Using the browser console

If you are in the need to interact for debugging or testing a running web app on a server, or locally, you can make use of the built-in browser console. 

###How to access the browser console/terminal

- left click anywhere in the browser window
- Inspect 
- The inspector displays and on the top of the tab displayed, click console
- Start writing your javascript code

Here´s an example:

[![How to run javascript on browser terminal](./src/assets/images/how_to_run_javascript_1.png "How to run javascript on browser terminal")](./src/assets/images/how_to_run_javascript_1.png "How to run javascript on browser terminal")

## Using the command line

If don´t want to use the browser built-in terminal, you can always choose the command line to run javascript. For the command line to be able to execute javascript code, you´ll need to install NodeJS (or just Node as referred usually).

### What´s NodeJS?

Node.js® is an open-source, cross-platform JavaScript runtime environment that allows us to execute and write javascript for front-end, back-end  o full-stack apps. Node it´s the go-to solution for most cases when we want to develop web apps for most developers (myself included).

### Installing NodeJS

Installing NodeJS on your system is pretty straightforward:
- Go to https://www.nodejs.org
- Click on DOWNLOADS section
- Select your OS and download the installer
- Execute the installer once downloaded
- Follow the instructions (or just accept the terms and conditions and next, next, next)

### Running javascript from the command line:

We downloaded and installed NodeJS on our system, now let´s run some javascript!

- Open the command line (windows users: click on the start menu, write cmd, start the cmd. Linux and MacOS users, just run the terminal)
- type `node`

Now we started the node environment and we have access to javascript. Here´s an example of javascript executed on the command line

[![How to run javascript from the command line](./src/assets/images/how_to_run_javascript_2.png "How to run javascript from the command line")](./src/assets/images/how_to_run_javascript_2.png "How to run javascript from the command line")

## Using and IDE for developing

So, I understand that you want to run javascript locally for developing purposes, let´s dig in in how to start a javascript project from your favorite IDE. We´ll be using Visual Code, but the process is the same for all of them.

We already covered how to install NodeJS, the javascript engine we´ll need to execute our code. Having this step been taken care of, lets dig in in how to run javascript from your IDE.

- Start Visual Code (or your preferred IDE)
- Open a terminal inside the IDE (Visual code: Go to terminal on the menu, new terminal)
- Create the folder you want to store your project (example, `mkdir nodeTest`)
- Access the folder with `cd nodeTest`
- Write `npm init -y` 
- -  `npm` stands form Node Package Manager 
- - `init` stands for initialize/initiate  
- -  `-y` is to apply the default values and start, you can change them later or run the code without the `-y` and see for yourself the given options

After it finishes, a `package.json` will show on your files, and if you open it, it´ll have all the data we manually specified by omitting the `-y` flag or the generic information which can be edited anytime we want.

Next, we need to create our javascript file and start coding.
- Right click on the VS Code file explorer and select `New file`
- Name it as you wish, I´ll go with `local.js` (js is the javascript extension)
- We can start now developing our javascript app 

### How to run javascript

To run your app, you can do it by writing on the terminal:

```javascript
 $ node local
```
Remember to take out the `$` when writing on the terminal.

We use `node` to summon our node engine and we tell which file we want to run, in this how-to we named our file `local`, that’s why `node local`. 

Well now, even if we manage to execute our app, this is not the most common way to do it. Remember the `package.json` we created with `npm init -y`? Well, we´re editing it now to run our app. We need to add to our `package.json` the following:

```json
  $ "start": "node local"
```

[![how to run javascript with node](./src/content/how-to/how_to_run_javascript_3.png "how to run javascript with node")](./src/content/how-to/how_to_run_javascript_3.png "how to run javascript with node")

We´ll add it on the `"scripts"` section, `start` will be the keyword we´ll use to tell node to run `local`, our javascript file we created on the previous steps. 

To run our app, all we need to do now is write in the IDE built-in terminal 

`npm run start`

Here´s a visual example of how the `package.json` file:

```json
{
  "name": "nodetest",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node local"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

Now, every time we run `npm run start`,  node will run our `local.js` file.

[![How to run javascript with npm](./src/content/how-to/how_to_run_javascript_4.png "How to run javascript with npm")](./src/content/how-to/how_to_run_javascript_4.png "How to run javascript with npm")


We covered how to run javascript in different environments, from the browser´s console to a fully installed NodeJS running with Visual Code (or the IDE of your choice). 

Hope you enjoyed the reading and keep on the Geek side!

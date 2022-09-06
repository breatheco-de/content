---
title: "Building APIs with nodejs Expressjs"
subtitle: "Expressjs allows you to build REST APIs in a fast, minimalist and flexible way"
cover_local: "../../assets/images/node-expressjs.png"
textColor: "white"
date: "2021-04-17T16:36:31+00:00"
status: "published"
tags: ["Expressjs","nodejs","REST","API"]

---

If you don't know what a REST API is, we recommend you to [read about it here](http://content.breatheco.de/lesson/understanding-rest-apis).

As a short summary, building an API in a REST way means that you have to build its URL endpoints grouped by **"resources"**. A resource is something you want to manage, for example: a student, a user, a car, etc. A resource is somewhat similar to a database table, but we call them "resources" because of a few exceptions.

Here is an example of RESTful API endpoints to manage **Students**:

| Method | URL | Description |
| ------ | --- | ----------- |
| GET    | /student | It should return all students |
| GET    | /student/1 | It should return a single student with id=1 |
| GET    | /cohort/1/students | It should return all students in the class with id=1 |
| POST   | /student | It should create a new student |
| PUT    | /student/1 | It should update the student information with the id=1 |
| DELETE | /student/1 | It should remove the student with id=1 |

Take a look at the URLs, they follow a pattern. After a while, the endpoints will speak for themselves, they will make sense and you will be able to guess what they do or even guess some endpoints. That's the idea.

> :point_up: You can read more about REST APIs in [this BreatheCode lesson](http://content.breatheco.de/lesson/understanding-rest-apis).<br /> Here is an 8 minute video explaining REST: https://www.youtube.com/watch?v=7YcW25PHnAA

## Now let's talk about Expressjs

Expressjs is a library that allows us to build a web API server in a fast, minimalist and flexible way using nodejs. The first step to use it is performing the installation in your project, for this in your terminal you must execute:

```
$ npm install express --save
```

Once the installation is finished we can create a server.js file and we will add the following lines, the compute will start listening to HTTP requests:

```javascript
const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    res.send("Hello World!")
})


app.listen(4000, function(){
    console.log('API running on port 4000');
})
```
[Click to test this code live.](https://replit.com/@ManuelOrtega3/Expressjs-Hello-World)


## Expressjs Hello-Wold explained

```javascript
const express = require('express'); #here we are importing the Expressjs library in our file.
const app = express(); #here we create a new Expressjs server instance.

app.get('/', (req, res)=>{  #here we define the first API path: GET /
    res.send("Hello World!")  #expressjs will return "Hello World, esto podría ser un string HTML o un string JSON.
})


app.listen(4000, function(){  #to finish we start the server on localhost.
    console.log('API en ejecución en el puerto 4000');
})
```
In Expressjs we can add new endpoints using the variable `app` which is the instance we defined in expressjs and adding the http method where our endpoint will be available `app.get('/', (req, res)=>{}` , as you can see we will have a callback function that will receive 2 parameters `req, res`, the detail of these parameters is as follows:

- req : It is an object that represents the HTTP request and gives us information about the request such as the body, query params, HTTP headers.

- res : It is an object that represents the HTTP response that the Express application sends when it receives an HTTP request.

In the following link you can access the documentation of [Expressjs](http://expressjs.com/es/api.html) 

## Adding new endpoints

If you want to add another endpoint to your API that is executed when a client does the `GET/person`, you will need to add another block of code like this:

```javascript
app.get('/', (req, res)=>{  #here we define the first API path: GET /
    res.send("Hello World!")  #expressjs will return "Hello World, esto podría ser un string HTML o un string JSON.
})
```

## Specifying the method: GET, PUT, POST, DELETE

If you want your endpoint to respond to POST, PUT or DELETE, you can specify it as follows:

```javascript
const express = require('express');
const app = express();

app.get('/', (req, res)=>{  #here we define the first API path: GET /
    res.send("Se recibió un GET")
})

app.post('/', (req, res)=>{  #here we define the first API path: POST /
    res.send("Se recibió un POST")
})

app.listen(4000, function(){  #to finish we start the server on localhost.
    console.log('API running on port 4000');
})
```

## Responding to a JSON body

The response can be basically anything you want as long as it's a string: HTML, JSON, CSS, images, etc. Just make sure to string whatever you want to reply to.

In the following example, we are using the JSON.stringify method to convert an object named `person1` to a JSON string before returning it to the client.

```javascript
const express = require('express');
app.get('/person', (req, res)=>{
    const person1 = {
        "name": "Bob"
    }
    res.status(200).json(person1);
})
```

## The response code

The response code is 200 by default, and 500 if there is an unknown error. If you want to reply to the client with a different code, you'll need to specify it like so:


```javascript
const express = require('express');
app.get('/person', (req, res)=>{
    const contenido = {
      "detalles": "Hubo un error en la solicitud"
    }
    res.status(400).json(contenido); #here we change the status code to 400 (very common code in case of request errors)
})
```

## Error handling and validations

But what if the request comes with errors? For example: if we have an endpoint to create a person and we need to specify the first_name AND the last_name, but only the first_name was found in the request, this is how we would validate it:


```javascript
const express = require('express');

app.use(express.json()) // Allows to parse the content in an application/json type
app.use(express.urlencoded({ extended: true })) // Allows parsing the content into an application/x-www-form-urlencoded type


app.post('/person', (req, res) => {
    const { body } = req; 
    
    if (!body) {
        return res.status(400).json({ message: "The request body is null" });
    }

    if (!body.hasOwnProperty('first_name')) {
        return res.status(400).json({ message: "The request first_name is null" });
    }

    if (!body.hasOwnProperty('last_name')) {
        return res.status(400).json({ message: "The request last_name is null" });
    }

    return res.status(400).json(body);
})
```
The `express-validator` library gives us a more comfortable way to handle validations, you can get more information on how to use it by visiting its documentation [https://express-validator](https://express-validator.github.io/docs/) 


## Middlewares

A middleware is a function that has access to the request object, the response object, and the next middleware function to be executed in the request/response cycle. Once our middleware finishes its execution it is important to execute the `next()` function or the request will hang.

Below is an example of a middleware that will print in the console the date and time in which the API queries occur:

```javascript
const express = require('express');

app.use(function (req, res, next) {
  console.log('Time:', Date.now());
  next();  #here invoke the following middleware
});

```

## Ready to start coding?

We have prepared this live coding example that you can run yourself on Gitpod and use as the basis for your project.

Expressjs Rest Hello: [https://github.com/4GeeksAcademy/expressjs-rest-hello](https://github.com/4GeeksAcademy/expressjs-rest-hello)

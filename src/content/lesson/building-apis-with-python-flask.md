---
title: "Building RESTful API's using Flask"
subtitle: "Flask is becoming the most popular Python framework (if its not already), learn how to build RESTful API's the REST way"
cover_local: "../../assets/images/91bcc549-6758-49c3-a790-4245afbd8ece.png"
textColor: "black"
date: "2020-10-19T16:36:31+00:00"
status: "published"
tags: ["Flask","python","REST","API"]

---

By now you should know already what a REST api is, if you don't I recomend you [read about it here](http://content.breatheco.de/lesson/understanding-rest-apis).

As a very brief summary, building an API in a RESTful way means that you have to build your URL endpoints grouped by **"resources"**. A resource is something you want to manage, e.g: Student, User, Car, etc. A resource is something similar to a database table but we call them "resources" because of a few exceptions.

Here is an example of RESTful API endpoints to manage **Students**:

| Method | URL | Description |
| ------ | --- | ----------- |
| GET    | /student | Should return all the students |
| GET    | /student/1 | Should return a single student with the id=1 |
| GET    | /cohort/1/students | Should return all the students from the cohort with id=1 |
| POST   | /student | Should create a new student |
| PUT    | /student/1 | Should update the information of the student with the id=1 |
| DELETE | /student/1 | Should delete the student with id=1 |

Take a look at the URL's they follow a pattern, after a while the endpoints will speak for themselves, it will make sense and you will be able to guess what they do or even guess some endpoints. That is the whole idea.

[[info]]
| :point_up: You can read more about REST APIs on [this BreatheCode Lesson](http://content.breatheco.de/lesson/understanding-rest-apis).<br /> Here is a cool 8 min video explaining REST: https://www.youtube.com/watch?v=7YcW25PHnAA

## Now let's talk about Flask

Flask is amazing! It is very similar to Node.js Express Server and that makes it even cooler because you will be able to work with both technologies without much of a learning curve.

Flask is a library for creating web servers and API's, basically when you run a python script that contains the following lines, the computar will start listening for HTTP requests:

```python
from flask import Flask
app = Flask(__name__)

@app.route("/")
def hello():
    return "Hello World!"

app.run(host='0.0.0.0')
```
[Click to test this code live](https://repl.it/@4GeeksAcademy/Flask-Hello-World)


## Flask Hello-Wold explained

```python
from flask import Flask #here we import the Flask library into our file
app = Flask(__name__) #here we create a new instance of the Flask server

@app.route("/") #here we define the first API path: GET /
def hello(): #this method will be called when the the request is called from any client
    return "Hello World!" #flask will return "Hello World, this could be an HTML string or a JSON string.

app.run(host='0.0.0.0') #lastly we start the server on localhost
```

In Flask we can add new endpoints by using the `@app.route` decorator, don't worry if this is the first time you see a decorator, the concept is very simple and [here is a 5 min video explaining it](https://www.youtube.com/watch?v=7ipNLN9y-nc).

## Adding new endpoints

If you want to add another endpoint to your API that runs when a client calls `GET /person` you will have to add another block of code like this:

```python
@app.route("/person") #here we specify the path for the endpoint
def handle_person(): #here we declare a function that will be called when a request is made to that url
    return "Hello Person!" #here we specify the string we want to respond to the client.
```

## Specifying the method: GET, PUT, POST, DELETE

If you want your endpoint to answer to POST, PUT or DELETE you can specify that on the decorator like this:

```python
from flask import Flask, request

@app.route("/person", methods=['POST', 'GET']) # here we specify that this endpoint accepts POST and GET requests
def handle_person():
  if request.method == 'POST': # we can understand what type of request we are handling using a conditional
    return "A POST has been received!"
  else:
    return "A GET has been received!"
```

## Responding a JSON body

The response can basically be whatever you want as long as it is a string: HTML, JSON, CSS, Images, etc. Just make sure you convert into a string whatever you want to respond.

In the following example we are using the jsonify method to convert a dictionary called `person1` into a JSON string before returning it to the client.

```python
from flask import Flask, jsonify

@app.route("/person")
def handle_person():
    person1 = {
      "name": "Bob"
    }
    return jsonify(person1)
```

## The Response Code

The response code is 200 by default, and 500 if there is an uknown error. If you want to respond to the client with a different code you will have to specify it like this:

```python
from flask import Flask, jsonify

@app.route("/person")
def handle_person():
    content = {
      "details": "Hey, there has been an error on your request"
    }
    resp = jsonify(content)
    resp.status_code = 400 # here we chage the status code to 400 (typical code for request errors)
    return resp
```

Another way of changing the response code is by using a comma `,`:

```python
@app.route("/person")
def handle_person():
    content = {
      "details": "Hey, there has been an error on your request"
    }
    return jsonify(content), 400
```

## Handling errors and validations

But what if the request comes with errors? For example: If we have an endpoint to create a person and must specify the first_name AND the last_name but only the first_name was found on the request, this is how we would validate it:

```python
@app.route('/person', methods=['POST'])
def create_person():
    # POST request
        body = request.get_json() # get the request body content
        if body is None:
            return "The request body is null", 400
        if 'first_name' not in body:
            return 'You need to specify the first_name',400
        if 'email' not in body:
            return 'You need to specify the last_name', 400

        return "ok", 200
```

## Defining a model

There are differrent ways to integrate Flask to a database server but we will be explaining the integration with [SQL ALchemy](http://content.breatheco.de/lesson/everything-you-need-to-start-using-sqlalchemy).

There is a great python library that integrates Flask + SQL Alchemy in a seamnless way: [Flask-SQLAlchemy](https://github.com/pallets/flask-sqlalchemy). We suggest you read [this lesson about SQLAlchemy](https://content.breatheco.de/lesson/everything-you-need-to-start-using-sqlalchemy) first and come back here.

To integrate with SQLAlchemy all you have to do is install the package and import it into your files like this:
```python
from flask_sqlalchemy import SQLAlchemy
db = SQLAlchemy()
```

Once is imported, you can start declaring your database models like this:

```python
class Person(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)

    def __repr__(self):
        return '<Person %r>' % self.username

    def serialize(self):
        return {
            "username": self.username,
            "email": self.email
        }
  ```

  You can add as many models as you like.

## Ready to start coding?

We have prepared this live coding example that you can run yourself in Gitpod and use it as a base for your project.

Flask Rest Hello: [https://github.com/4GeeksAcademy/flask-rest-hello](https://github.com/4GeeksAcademy/flask-rest-hello)

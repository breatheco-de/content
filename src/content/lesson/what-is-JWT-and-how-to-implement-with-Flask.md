---
title: "Understanding JWT and how to implement a simple JWT with Flask"
subtitle: "What is JSON Web Token (JWT), how it works and how to apply it to your API using the Flask Microframework for API Development"
cover_local: "../../assets/images/http-0.png"
textColor: "white"
date: "2020-10-19T16:36:31+00:00"
tags: ["HTTP", "API", "Security", "Authentication"]
status: "published"

---

[[info]]
| 📹 Here is a video explaining the JWT authentication [implementation using React.js, Context API and Python Flask](https://youtu.be/8-W2O_R95Pk).

Almost every [API needs an authentication layer](/lesson/token-based-api-authentication), and there are mamy ways to tackle that problem, today we are going to be implementing JWT token into our Flask API.


## How API Authentication works

You can divide a standard authentication process in 5 main steps:

1. The user writes its username and password on your website.
2. The username and password gets sent to the backend API.
3. The API looks for any record on the `User` table that matches with both parameters at the same time (username and password).
4. If a user is found, it generates a `token` for that user and responds status_code=200 back to the front end.
5. The front-end will use that `token` from now on to make any future request.

![Autentication workflow](../../assets/images/authentication-diagram.png)

[[info]]
| :point_up: If you don't know what a token is, I would recomend [this reading](/lesson/token-based-api-authentication).

## What is JWT?

There are many ways to create tokens: Basic, Bearer, JWT, etc. All of them are different in its nature but all of them result in the same output: A hash (a big alphanumeric token).

| Type of token | How it looks                                                            |
| ------------- | ----------------------------------------------------------------------- |
| Basic Token   | ecff2099b95ed507a27a4717ec78965d529cc346                                |
| Bearer Token  | YWxlc2FuY2hlenI6NzE0YmZhNDNlN2MzMTJiZTk5OWQwYWZlYTg5MTQ4ZTc=            |
| JWT Token     | eyJhbGciOiJIUzI1NiIsInR5c.eyJzdWIiOFt2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpM |

[[info]]
| :point_up: As you can see, JWT Tokens are bigger than the other two types of token.

**JSON Web Token or JWT is an open standard to create tokens**

This standard has become quite popular since it's very effective for Web Apps like Google APIs, where after the user authentication you make API requests. 

JSON Web Token is a type of token that includes a structure, which can be decrypted by the server that allows you to authenticate the identity of the user of that application.

## Why using JWT Token?

In a nutshell: JWT is an amazing alternative because `Basic Token` is to simple and easy to hack and Bearer Token it's harder to maintain because you have to store each token on the database.

With JWT Tokens you don't need a database, the token itself contains all the information needed.

![Autentication workflow](../../assets/images/jwt-vs-bearer-token.png)

## Structure of the JWT Token

![Autentication workflow](../../assets/images/jwt-token-structure.png)

You may notice that the string is divided in three sections separated by a (.). Each section has it meaning:

| Section name   |                                                                      |
| -------------- | -------------------------------------------------------------------- | 
| HEADER         | The first part stores the type of token and the encryption algorithm |
| PAYLOAD        | The second part has the data that identifies the user: it can be its ID, user name, etc. |
| SIGNATURE      | Digital signature, which is generated with the previous two sections, and it allows you to verify if the content has been modified. |

## Implementing JWT in your project API

We strongly recomend using [JWT Extended library](https://github.com/vimalloc/flask-jwt-extended) to implement JWT autentication in your Python Flask API, the process can be divided in the following steps:

### 1) Include the JWT library in your Flask App setup

```py
from flask_jwt_extended import JWTManager

# you must already have this line in your project
# you don't have to add it again.
app = Flask(__name__)

# Setup the Flask-JWT-Extended extension
app.config["JWT_SECRET_KEY"] = "super-secret"  # Change this "super secret" with something else!
jwt = JWTManager(app)
```

### 2) Create one endpoint for generating new tokens

The endpoint should be a POST because you are creating tokens (POST is for creation).

```bash
POST /token
Content-type: application/json
Body:
{
     "username": "alesanchezr",
     "password": "12341234"
}
```

This is how the endpoint could look like in Python:

```py
from flask_jwt_extended import create_access_token
# Create a route to authenticate your users and return JWT Token. The
# create_access_token() function is used to actually generate the JWT.
@app.route("/token", methods=["POST"])
def create_token():
    username = request.json.get("username", None)
    password = request.json.get("password", None)
    # Query your database for username and password
    user = User.filter.query(username=username, password=password).first()
    if user is None:
        # the user was not found on the database
        return jsonify({"msg": "Bad username or password"}), 401
    
    # create a new token with the user id inside
    access_token = create_access_token(identity=user.id)
    return jsonify({ "token": access_token, "user_id": user.id })
```

### 3) Use the `@jwt_required()` decorator on private routes

Now... any endpoint that requires authorization (private endpoints) should use the `@jwt_required()` decorator.

You will be able to retrieve the authenticated user information (if valid) using the `get_jwt_identity` function.

```py
from flask_jwt_extended import jwt_required, get_jwt_identity
# Protect a route with jwt_required, which will kick out requests
# without a valid JWT present.
@app.route("/protected", methods=["GET"])
@jwt_required()
def protected():
    # Access the identity of the current user with get_jwt_identity
    current_user_id = get_jwt_identity()
    user = User.filter.get(current_user_id)
    
    return jsonify({"id": user.id, "username": user.username }), 200
```

## Implementing JWT in your project Front-End

On the front-end side we need two main steps: Creating a new token (a.k.a: login) and appending the token to the headers when fetching any other private endpoints.

### Create new token:

Based on the endpoints we build on earlier we have to `POST /token` with the username and password information in the request body.

```js
const login = (username, password) => {
     fetch(`https://your_api.com/token`)
         .then(resp => {
              if(resp.ok) resp.json()
              else if(resp.status === 401){
                    console.log("Invalid credentials")
              }
              else if(resp.status === 400){
                 console.log("Invalid email or password format")
              }else throw Error('Uknon error')
         })
         .then(data => {
             // save your token in the localStorage
             localStorage.setItem("jwt-token", data.token);
         })
         .catch(error => console.error("There has been an uknown error", error))
}
```

### Fetch any private information

Let's suppose I am using the front-end application and I just logged in, but now I want to fech some private or protected endpoint:

```js
// assuming "/protected" is a private endpoint
const getMyTasks = (username, password) => {
     // retrieve token form localStorage
     const token = localStorage.getItem('jwt-token');

     fetch(`https://your_api.com/protected`, {
        method: 'GET',
        headers: { 'Authorization': 'Bearer '+token } // ⬅ authorization token
     })
         .then(resp => {
              if(resp.ok) resp.json();
              else if(resp.status === 403){
                   console.log("Missing or invalid token");
              }
              else{
                   throw Error('Uknon error');
              }
         })
         .then(data => {
             // success
             console.log("This is the data your requested", data);
         })
         .catch(error => console.error("There has been an uknown error", error));
}
```

That is it! As you can see it's very simple to integrate JWT into your application using Flask/Python, just three steps on the backend and two steps on the front-ent. For any questions you can contact me on twitter [@alesanchezr](https://4geeksacademy.com) or use the #public-support channel on 4Geeks Academy's Slack community.


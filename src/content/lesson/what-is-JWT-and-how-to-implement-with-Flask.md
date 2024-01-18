---
title: "Understanding JWT and how to implement a simple JWT with Flask"
subtitle: "What is JSON Web Token (JWT), how does it work, and how to apply it to your API using the Flask Microframework for API Development"
cover_local: "../../assets/images/http-0.png"
textColor: "white"
date: "2020-10-19T16:36:31+00:00"
tags: ["HTTP", "API", "Security", "Authentication"]
status: "published"

---

> 📹 Here is a video explaining the JWT authentication [implementation using React.js, Context API and Python Flask](https://youtu.be/8-W2O_R95Pk).

Almost every API needs an authentication layer, and there are many ways to tackle that problem. Today we are going to be implementing JWT token into our Flask API.


## How API Authentication works

You can divide a standard authentication process into 5 main steps:

1. The user writes their username and password on your website.
2. The username and password get sent to the backend API.
3. The API looks for any record on the `User` table that matches both parameters at the same time (username and password).
4. If a user is found, it generates a `token` for that user and responds `status_code=200` back to the front end.
5. The front-end will use that `token` from now on to make any future request.

![Autentication workflow](https://github.com/breatheco-de/content/blob/master/src/assets/images/authentication-diagram.png?raw=true)

> ☝️ If you don't know what a token is, I would recommend [this reading](https://4geeks.com/lesson/token-based-api-authentication).

## What is JWT?

There are many ways to create tokens: Basic, Bearer, JWT, etc. All of them are different in nature but all of them result in the same output: A hash (a big alphanumeric token).

| Type of token | How it looks                                                            |
| ------------- | ----------------------------------------------------------------------- |
| Basic Token   | ecff2099b95ed507a27a4717ec78965d529cc346                                |
| Bearer Token  | YWxlc2FuY2hlenI6NzE0YmZhNDNlN2MzMTJiZTk5OWQwYWZlYTg5MTQ4ZTc=            |
| JWT Token     | eyJhbGciOiJIUzI1NiIsInR5c.eyJzdWIiOFt2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpM |

> ☝️ As you can see, JWT Tokens are bigger than the other two types of tokens.

**JSON Web Token, or JWT is an open standard to create tokens**

This standard has become quite popular since it's very effective for Web Apps like Google APIs, where, after user authentication you make API requests. 

JSON Web Token is a type of token that includes a structure that can be decrypted by the server and allows you to authenticate the identity of the user of that application.

## Why use JWT Token?

In a nutshell: JWT is an amazing alternative because `Basic Token` is too simple and easy to hack, and Bearer Token is harder to maintain because you have to store each token on the database.

With JWT Tokens you don't need a database, the token itself contains all the information needed.

![Bearer token vs. JWT](https://github.com/breatheco-de/content/blob/master/src/assets/images/jwt-vs-bearer-token.png?raw=true)

## Structure of the JWT Token

![JWT structure](https://github.com/breatheco-de/content/blob/master/src/assets/images/jwt-token-structure.png?raw=true)

You may notice that the string is divided into three sections, separated by a dot `.` - each section has it meaning:

| Section name   |                                                                      |
| -------------- | -------------------------------------------------------------------- | 
| HEADER         | The first part stores the type of token and the encryption algorithm |
| PAYLOAD        | The second part has the data that identifies the user: it can be their ID, username, etc. |
| SIGNATURE      | A digital signature, which is generated with the previous two sections, which allows you to verify if the content has been modified. |

## Implementing JWT in your project API

We strongly recommend using [JWT Extended library](https://github.com/vimalloc/flask-jwt-extended) to implement JWT authentication in your Python Flask API. The process can be divided into the following steps:

### 1) Include the JWT library in your Flask App setup

```py
from flask_jwt_extended import JWTManager

# You must already have this line in your project, you don't have to add it again
app = Flask(__name__)

# Setup the Flask-JWT-Extended extension
app.config["JWT_SECRET_KEY"] = "super-secret"  # Change this "super secret" to something else!
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

# Create a route to authenticate your users and return JWT Token
# The create_access_token() function is used to actually generate the JWT
@app.route("/token", methods=["POST"])
def create_token():
    username = request.json.get("username", None)
    password = request.json.get("password", None)

    # Query your database for username and password
    user = User.query.filter_by(username=username, password=password).first()

    if user is None:
        # The user was not found on the database
        return jsonify({"msg": "Bad username or password"}), 401
    
    # Create a new token with the user id inside
    access_token = create_access_token(identity=user.id)
    return jsonify({ "token": access_token, "user_id": user.id })
```

### 3) Use the `@jwt_required()` decorator on private routes

Now... any endpoint that requires authorization (private endpoints) should use the `@jwt_required()` decorator.

You will be able to retrieve the authenticated user's information (if valid) using the `get_jwt_identity` function.

```py
from flask_jwt_extended import jwt_required, get_jwt_identity

# Protect a route with jwt_required, which will kick out requests without a valid JWT
@app.route("/protected", methods=["GET"])
@jwt_required()
def protected():
    # Access the identity of the current user with get_jwt_identity
    current_user_id = get_jwt_identity()
    user = User.query.get(current_user_id)
    
    return jsonify({"id": user.id, "username": user.username }), 200
```

## Implementing JWT in your project's front-end

On the front-end side, we need two main steps: Creating a new token (a.k.a: login) and appending the token to the headers when fetching any other private endpoints.

### Create new token:

Based on the endpoints we built earlier we have to `POST /token` with the username and password information in the request body.

```js
const login = async (username, password) => {
     const resp = await fetch(`https://your_api.com/token`, { 
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username, password }) 
     })

     if(!resp.ok) throw Error("There was a problem in the login request")

     if(resp.status === 401){
          throw("Invalid credentials")
     }
     else if(resp.status === 400){
          throw ("Invalid email or password format")
     }
     const data = await resp.json()
     // Save your token in the localStorage
     // Also you should set your user into the store using the setItem function
     localStorage.setItem("jwt-token", data.token);

     return data
}
```

### Fetch any private information

Let's suppose I am using the front-end application and I just logged in, but now I want to fetch some private or protected endpoint:

```js
// Assuming "/protected" is a private endpoint
const getMyTasks = async () => {
     // Retrieve token from localStorage
     const token = localStorage.getItem('jwt-token');

     const resp = await fetch(`https://your_api.com/protected`, {
        method: 'GET',
        headers: { 
          "Content-Type": "application/json",
          'Authorization': 'Bearer ' + token // ⬅⬅⬅ authorization token
        } 
     });

     if(!resp.ok) {
          throw Error("There was a problem in the login request")
     } else if(resp.status === 403) {
          throw Error("Missing or invalid token");
     } else {
         throw Error("Unknown error");
     }

     const data = await resp.json();
     console.log("This is the data you requested", data);
     return data
}
```

That is it! As you can see, it's very simple to integrate JWT into your application using Flask/Python, just three steps on the backend and two steps on the front-ent. For any questions, you can contact me on Twitter [@alesanchezr](https://twitter.com/alesanchezr) or use the `#public-support` channel on 4Geeks Academy's Slack community.


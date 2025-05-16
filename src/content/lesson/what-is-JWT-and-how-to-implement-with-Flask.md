---
title: "Understanding JWT and how to implement a simple JWT with Flask"
tags: ["HTTP", "API", "Security", "Authentication"]
description: "Learn how to implement JWT for secure API authentication in Flask. Discover simple steps to enhance your app's security today!"

---

JWT is just one of the ways you can implement security and specifically [token based authentication](https://4geeks.com/lesson/token-based-api-authentication) in your API.

It is an open standard for creating tokens that are used in the authentication and authorization of web applications and APIs. JWT is a type of token that includes a structure that can be decrypted by the server and allows authenticating the identity of the user of an application.

Unlike other types of tokens, such as basic or Bearer tokens, JWT tokens are larger and contain all the necessary information without the need for an external database1.

### JWT token structure

A JWT token consists of three parts separated by dots:

- HEADER: Stores the token type and encryption algorithm.

- PAYLOAD: Contains data that identifies the user, such as ID or username.

- SIGNATURE: Digital signature generated with the two previous sections to verify if the content has been modified1.

### Implementation in Flask:

To use JWT in a Flask API, you can follow these steps:

- Include the JWT library in your Flask application configuration.

- Create an endpoint to generate new tokens.

- Use the @jwt_required() decorator in private routes.
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


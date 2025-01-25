---
title: Understanding JWT and how to implement a simple JWT with Express
tags:
  - HTTP
  - API
  - Security
  - Authentication
  - Express
  - TypeOrm
  - node
description: >-
  Learn how to implement JWT for secure API authentication with Express.
  Discover simple steps to create and validate tokens effectively!
---
In the world of modern web development, user authentication and authorization are crucial aspects of protecting APIs and sensitive data. [The token based authentication](https://4geeks.com/lesson/token-based-api-authentication) is one of the most commonly used strategies, among them stand out JSON Web Tokens (JWT), an open and lightweight standard that defines a compact and self-contained mechanism for secure transmission of information between client and server parties.

### What are JWTs?

A JWT is a token that contains information about a user's identity and authorization to access specific resources. It consists of three parts:

> ☝️ If you don't know what a token is, I would recommend [this reading](https://4geeks.com/lesson/token-based-api-authentication).

**Header:** Specifies the token type, signing algorithm and other relevant information.

**Payload:** Contains data about the user, such as identification, name, roles and expiration date of the token.

**Signature:** Guarantees the integrity and authenticity of the token by means of a digital signature using a cryptographic algorithm and a secret key shared between the server and the client.

### How does JWT work in API authentication?

The scheme to be implemented in this case can be summarized as follows

Authentication workflow](https://github.com/breatheco-de/content/blob/master/src/assets/images/authentication-diagram.png?raw=true)


1. Login: The user enters his credentials (email and password) in the client.

2. Authentication: The server validates the user's credentials and, if correct, generates a JWT with the user's information and signs it with its secret key.

3. Sending the token: The server sends the JWT to the client in response to the login request.

4. Storing the token: The client stores the JWT securely, usually in local storage or in an HTTP cookie.

5. Subsequent requests: In each subsequent API request, the client includes the JWT in the authorization header.

6. Token validation: The server verifies the signature of the JWT to ensure its authenticity and integrity. If the token is valid, it extracts the user information from the payload and uses it to authorize access to the requested resource.

## Implementing JWT in your project API

### 1) Installation

Install these 3 libraries that will take care of generating the JWT tokens:

```bash
npm install express-jwt @types/express-jwt jsonwebtoken @types/jsonwebtoken --save
```

### 2) Login endpoint

Second step is to create one API Route that can be called by the client to
generate a token (a.k.a: login), this endpoint will receive the `email` and `password` information form the `body` and look for any user in the DB that matches those two values.

If the value is found, it will generate a token by calling the function `jwt.sign`.

```js
//this line goes in your public_routes.ts
import jwt from 'jsonwebtoken'

router.post('/token', safe(createToken));

// this function goes in your actions.ts
export const createToken = async (req: Request, res: Response): Promise<Response> =>{
  
 if(!req.body.email) throw new Exception("Please specify an email on your request body", 400)
 if(!req.body.password) throw new Exception("Please specify a password on your request body", 400)

 const userRepo = await getRepository(Users)

 // We need to validate that a user with this email and password exists in the DB
 const user = await userRepo.findOne({ where: { email: req.body.email, password: req.body.password }})
 if(!user) throw new Exception("Invalid email or password", 401)

 // this is the most important line in this function, it create a JWT token
 const token = jwt.sign({ user }, process.env.JWT_KEY as string);
 
 // return the user and the recently created token to the client
 return res.json({ user, token });
}
```

### 3) Validating requests with JWT

Now we need to add a [middleware](https://developer.okta.com/blog/2018/09/13/build-and-understand-express-middleware-through-examples) that will check for the token on the [Request Authoritzation Header](https://blog.restcase.com/restful-api-authentication-basics/). The middleware will intercept each request and execute the `next` function to proceed only if it succeeds in validating the token, otherwise it will return an error.

Add these two middlewares inside `./src/app.js` that will take care of enforcing the token.

```js
// ⬆ anything ABOVE is public
import jwt, { Options } from 'express-jwt';

let opt: Options = { secret: process.env.JWT_KEY as string, algorithms: ["HS256"] }
app.use(jwt(opt))
// ⬇ anything BELOW is public
app.use(((err: any, req: any, res: any, next: any) => {
 if (err) console.error(err);
 if (err.name === 'UnauthorizedError') {
   return res.status(401).json({ status: err.message });
 }
 next();
}))
```

#### ⚠️ Important

Any endpoint that is added BELOW these middlewares will be private, for example:

```js
app.get('/public', (req, res) => {
 res.json({ message: "Anyone can see me" }); 
})

// ⬆ anything ABOVE is public
app.use(jwt(opt)) // ⬅ JWT Middleware
// ⬇ anything BELOW is public

app.get('/private', (req, res) => {
 res.json({ message: "If you can se me, you are logged in" }); 
})
```

### 4) Get the authenticated user

We are done, but if only logged in users are supposed to call our private endpoints, then we need a way to know who is calling them, for example we can use `req.user` from now on, to identify request user):

```js
export const getMe = async (req: Request, res: Response): Promise<Response> =>{
 
 const users = await getRepository(Users).find({ where: });
 //                  ⬇ not comming from the BD
 return res.json(req.user);
}
```

Or we can use that info and get more information form the requester from the database.

```js
export const getMe = async (req: Request, res: Response): Promise<Response> =>{


 //                  ⬇ not comming from the BD
 return res.json(req.user);
}
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

That is it! As you can see, it's very simple to integrate JWT into your application using Express, just four steps on the backend and two steps on the front-ent. For any questions, you can contact me on Twitter [@alesanchezr](https://twitter.com/alesanchezr) or use the `#public-support` channel on 4Geeks Academy's Slack community.


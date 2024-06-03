---
title: "Understanding JWT and how to implement a simple JWT with Express"
subtitle: "What is JSON Web Token (JWT), how does it work, and how to apply it to your API using the Express Microframework for API Development"
cover_local: "../../assets/images/http-0.png"
textColor: "white"
date: "2020-10-19T16:36:31+00:00"
tags: ["HTTP", "API", "Security", "Authentication","Express","TypeOrm"]
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

That is it! As you can see, it's very simple to integrate JWT into your application using Flask/Python, just three steps on the backend and two steps on the front-ent. For any questions, you can contact me on Twitter [@alesanchezr](https://twitter.com/alesanchezr) or use the `#public-support` channel on 4Geeks Academy's Slack community.


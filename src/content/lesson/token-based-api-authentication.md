---
title: "Token Based Authentication in your API"
subtitle: "Learn how to implement an authentication system that allows users to log in and log out from your web app and API"
cover_local: "../../assets/images/98208ebb-dcb3-4e40-9ae4-4ec886213f97.jpeg"
textColor: "white"
date: "2020-10-19T16:36:31+00:00"
tags: ["authentication", "security", "backend"]
status: "published"

---

## Why implementing Token Based Authentication

<img src="https://github.com/breatheco-de/content/blob/ee21de4299b9e003de7be720280b42ed50056daf/src/assets/images/authentication.png?raw=true" align="right" />

There are several ways to create an authentication layer in web applications, but we are going to be focusing today in Token Based Authentication for several reasons:

- Easy to implement.
- Provides a good level of security (by industry standards).
- Fast and performant.
- The most used in the industry as of today.

## What is API Authentication?

In plain English, authentication means being able to identify who is making requests to your API; You normally implement an authentication layer in your application because you want:

- Users to be able to log in and log out.
- Privacy protection: Restrict access to information based on the user role. For example: Only I should be able to update my email and password, only I should review my medical health history.
- Limit user permissions: Restrict access to certain functionalities, for example: A user needs to pay to download a book, or not being able to comment on a forum unless you log in, etc.

To explain in detail "Token Based API Authentication" it's better to start explaining about tokens.

## What is a Security Token?

In a broad sense, a token is a "number that proves something." For example: when you finish making a bank transfer, the bank sends a confirmation "token" serves as proof to validate that the transaction exists and it's valid. That confirmation number could be also called a **confirmation token**.

Other examples for every-day tokens:

- Your social security number (token) proves your credit history.
- Your credit card number proves you have a valid credit card.
- Etc.

### A security token is more than just a number

Tokens used for authentication need to be more than just plain numbers, they need to be almost impossible to fake, predict or break.

- Non-consecutive; that will make them very predictable, hackers will guess the next one.
- Infinite (almost): What will happen if you run out of tokens? Can you imagine MasterCard running out of credit card numbers?
- Non-reusable: There are cases of re-usable tokens, but in general once a token is generated, no one else should ever use it but you.
- Validatable: The token must follow some hidden pattern (encryption) that allows validating the token without compromising the owner or author.

## Generating tokens

There are several types of tokens you can use for your Authentication system like Basic, Bearer, or JWT. Most of them use advanced cryptography algorithms that we are not going to address in this lesson (you can watch this [amazing video to learn more](https://www.youtube.com/watch?v=4zahvcJ9glg)). Instead, we are going to talk about hashing.

### What is a hash?

A hash is a **unique** alphanumeric number that gets generated from a specific seed or **value**, for example:

*With Python*

```py
import hash_function

value = "alex"
unique_hash = hash_function(value)
```

Explanation: the function `hash_function` will always return the exact same `unique_hash` if the same value is given.

*With JavaScript*

```javascript
const jwt = require('jsonwebtoken');

const payload = {
    userEmail: 'hola@4geeks.co',
    rol: 'admin'
};

const unique_hash = jwt.sign(payload, 'secret-key', {
    expiresIn: '24h' // Set the expiration time to 24 hours
});
```

Explanation: the function `jwt.sign` will always return the exact same `unique_hash` if the same value is given. Take a look at this demonstration, start typing on the input:

<!--hide-->
<iframe src="https://full-stack-assets.4geeks.com/live-demos/security/hashing/" height="300" title="Hashing functions example"></iframe>
<!--endhide-->

Note: There are several popular hashing functions: MD5, Sha1, Sha256, Sha256, etc. 

### What makes hashing functions so cool?

Hashing functions have become the best way to generate tokens in the security world because:

1. They are consistent: They always return the same output to the same given input.
2. They are "impossible" to reverse: If a hacker gets access to a token, they will never be able to know what was the original value.
3. They have the same size: For example, all the tokens generated using MD5 will have 40 characters.
4. They are "fast": Hashes rely on advanced math to efficiently generate the alphanumeric numbers.

Note: Every bitcoin wallet address has a unique hash, every commit you make in GitHub has a unique hash, etc.

## How to implement authentication in your API

The most simple way to implement authentication in your database and API:

1. Create a `User` table/model that represents every user inside your application.
2. That User table must contain email and password for every user.
3. Create one API endpoint called `POST /token` that generates a token only if it receives an email and password that matches in the database.
4. The `POST /token` endpoint will return the token to the front-end if everything is okay.
5. Then, on every other endpoint in your database, you will have to validate if the token exists in the request header, and if it does, you will have to validate it.

![Autentication workflow](https://github.com/breatheco-de/content/blob/master/src/assets/images/authentication-diagram.png?raw=true)

### Every token is a session

The moment you generate the token, you can decide if you want it to expire, same way web sessions expire when you log in into your online bank account.

When a client successfully authenticates, it will receive that unique token, and it will be able to attach to the request headers of every request it makes from that moment on. That token will be the "User session".

It is recommended to save that token in the cookies or `localStorage` of your front-end application.

```js
let myToken = "aDSA45F$%!sd&sdfSDFSDFytrefERF";
localStorage.setItem("token", myToken);


// You can retrieve the token at any moment, anywhere in your application, by using:
let myToken = localStorage.getItem("token");
```

### How to attach the token to the request header:

If you are doing a request from the Front-End this will be an ideal way to attach the token to your Authorization headers:

```js
let myToken = localStorage.getItem("token");
fetch('https://myApi.com/path/to/endpoint', {
    method: "POST", // or any other method
    headers: {
      "Authorization": myToken, // ⬅⬅⬅ authorization header
    },
    body: JSON.stringify(body)
})
    .then(resp => resp.json())
    .then(data => console.log("Success!!", data))
    .catch(error => console.log(error));
```

## Json Web Token for API authentication

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

### Why use JWT Token?

In a nutshell: JWT is an amazing alternative because `Basic Token` is too simple and easy to hack, and Bearer Token is harder to maintain because you have to store each token on the database.

With JWT Tokens you don't need a database, the token itself contains all the information needed.

![Bearer token vs. JWT](https://github.com/breatheco-de/content/blob/master/src/assets/images/jwt-vs-bearer-token.png?raw=true)

> 📹 Here is a video explaining the JWT authentication [implementation using React.js, Context API and Python Flask](https://youtu.be/8-W2O_R95Pk).

### Structure of the JWT Token

![JWT structure](https://github.com/breatheco-de/content/blob/master/src/assets/images/jwt-token-structure.png?raw=true)

You may notice that the string is divided into three sections, separated by a dot `.` - each section has it meaning:

| Section name   |                                                                      |
| -------------- | -------------------------------------------------------------------- | 
| HEADER         | The first part stores the type of token and the encryption algorithm |
| PAYLOAD        | The second part has the data that identifies the user: it can be their ID, username, etc. |
| SIGNATURE      | A digital signature, which is generated with the previous two sections, which allows you to verify if the content has been modified. |

## How API Authentication works?

You can divide a standard authentication process into 5 main steps:

1. The user writes their username and password on your website.
2. The username and password get sent to the backend API.
3. The API looks for any record on the `User` table that matches both parameters at the same time (username and password).
4. If a user is found, it generates a `token` for that user and responds `status_code=200` back to the front end.
5. The front-end will use that `token` from now on to make any future request.

![Autentication workflow](https://github.com/breatheco-de/content/blob/master/src/assets/images/authentication-diagram.png?raw=true)

> ☝️ If you don't know what a token is, I would recommend [this reading](https://4geeks.com/lesson/token-based-api-authentication).

## Implementing JWT using Python Flask

I strongly recommend using [Flask JWT Extended](https://4geeks.com/lesson/what-is-jwt-and-how-to-implement-with-flask).

## Implementing JWT using Node.js Express

Generate tokens with [Node JSONWebToken](https://4geeks.com/lesson/what-is-jwt-and-how-to-implement-with-express). Also use Express JWT to enforce the private endpoints.

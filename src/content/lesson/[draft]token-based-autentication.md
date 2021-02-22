---
title: "Token Based Authentication"
subtitle: "Learn how to implement an authentication system that allows users to log in and log out from your web app and API"
cover_local: "../../assets/images/http-0.png"
textColor: "white"
date: "2020-10-19T16:36:31+00:00"
tags: ["HTTP"]
status: "draft"

---

![Authentication Layer API](../../assets/images/authentication.png)

There are several ways to create an authentication layer in web applications but we are going to be focusing today in Token Based Authentication because of several reasons:

- Easy to implement.
- Provides a good level of security (by industry standards).
- Fast and performant.
- The most used in the industry as of today (2021).

## What is authentication?

In plan english authentication means being able to identify who is making requests to your application; You normally implement an authentication layer in your application because you want:

- Users to be able to log in and log out.
- Privacy protection: Restrict access to information based on the user role. For example: Only I should be able to update my email and password.
- Limit user permissions: Restrict access to certain functionalities, for example: A user may not be able to delete categories form a shopping cart unless is the system ADMIN.

## What is a Security Token?

In a broad way a token is "proof of something", for example: The confirmation number a bank gives you after you successfully complete a wire transfer. The transaction token serves as proof to validate that the transaction exists and it's valid.

But what happens if someone starts trying to fake a confirmation number? For tokens to be reliable they need to be more than just a number:

- They cannot be consecutive, that will make them very predictable, hackers will guess the next one.
- They need to be very large numbers: That way 

Security tokens need to be random large numbers, that way hackers will have a hard time trying to fake a token.

Proof of 

Tokens are very old but prominent technolgy, they are broadly used in any security implementations all over the industry, the whole Blockchain (and Bitcoin) revolution it's mainly based on the concept of "tokens" and "hashes".

In plan english a token is a "very big number"

---
title: "Understanding Rest APIs"
subtitle: "It seems to be only the beginning of the API revolution! The path of humanity drives towards the API's architecture... you can learn any language or tool, but this is one of those few specialties that will guarantee you a well paid job for the next 60 years, so get comfortable with REST API. :)"
cover_local: "../../assets/images/b929f233-00b2-406f-87a5-ee74146cfd85.jpeg"
video: "https://www.youtube.com/watch?v=s7wmiS2mSXY"
textColor: "white"
date: "2020-10-19T16:36:31+00:00"
tags: ["REST","API"]
status: "published"

---

<iframe width="560" height="315" src="https://www.youtube.com/embed/s7wmiS2mSXY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## What is an API?

An API is the middleman of most modern applications. API stands for: Application Programming Interface. Let’s break it down by looking at each of its parts:

|**Application**    |**Programming**    |**Interface**    |
|:-----------------:|:-----------------:|:---------------:|
If you have a smartphone, you are well acquainted with what applications are (the tools, games, social networks and other software that we use everyday).      |Programming is how engineers create all the software that make our lives so much easier.      |An interface is a common boundary shared by two applications or programs that allow both to communicate with one another.     |

> :point_up: Essentially, an API is a way for programmers to communicate with a particular application.

### This is the API for using a Phone:

Every API comprises 3 main components: (1) The functions/methods that you have available to use, (2) The format for the communication, and (3) The data (and types of data) that it will manipulate.  For example, any phone in the world will have the following API:

|**Functions/Methods:**   |**Communication format**   |
|:------------------------|:--------------------------|
|`Make a call`<br>`Hangup a call`<br>`Talk to the operator`<br>`Dial something on the keypad`    |Noise (sounds)! There is a sound for everything (even on modern phones). You hear a tone when you are about to make a call, when pressing any key, etc. The phone system listens to the changes of the tone of the noise.     |

### What about a Web Application?

The API methods of a web application depend entirely on the purpose/business of the website:

+ If you are building the API for a product like Uber, some of your methods will be: Sign up, Request a trip, Rate a driver, Cancel a trip, etc.
+ If you are building an API for something like AirBnB, some of your methods will be: Book listing, Search for listing, Cancel trip, etc.

## The REST standard

There are dozens of ways of creating an API, but the REST standard has come to rule them all. If you are serious about being a web developer, you have to be very comfortable with REST.

REST works over HTTP, that means that everything is text based. It uses the famous GET, POST, PUT and DELETE commands to classify the API methods.

|**Method**    |**Method**    |
|:-------------|:--------------|
|GET          |Used to read state from the server. Being a **safe** operation, it can be executed multiple times without risk of data modification or corruption, calling it once has the same effect as calling it ten times.      |
|POST        |The REST purists use post only for creation.  That means that every-time you POST something into an API, you will be creating a new record in the database for that. Some API’s use POST for all the writing operations (delete, update and create). They do so because PUT and DELETE are not available in HTML/Forms, and that makes those methods harder to use.      |
|PUT      |This is most used to update state on the server; although it can also be used to create state.       |
|DELETE     |Used to delete data on the server      |

### Response Status Codes

The [HTTP status codes](https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html) provide metadata in the response to the state of the requested resources. They are part of what makes the Web a platform for building distributed systems. They are divided into the following categories:

+ `1xx` – Metadata
+ `2xx` – Everything is fine
+ `3xx` – Redirection
+ `4xx` – Client did something wrong
+ `5xx` – Server did something wrong

### URIs (Uniform Resource Identifiers)

URIs differentiate one resource from another. To access and manipulate a resource, it needs to have at least one address.

They are composed of a `protocol` + `host` + `path`.
E.g: `https://api.uber.com/v1.2/products`

Clients should not be coupled to particular resource URIs as they can be changed at the server’s discretion. This is where hypermedia has the greatest advantages, as it offers a way to decouple clients from specific URIs, and add semantics to the application protocol.

Here are some Twitter API URI’s:

+ [GET /direct_messages/](https://developer.twitter.com/en/docs/direct-messages/sending-and-receiving/api-reference/list-events.html)
+ [GET /favorites/list](https://developer.twitter.com/en/docs/tweets/post-and-engage/api-reference/get-favorites-list)
+ [POST /direct_messages/new](https://developer.twitter.com/en/docs/api-reference-index)
+ [DELETE /direct_messages/welcome_messages/destroy](https://developer.twitter.com/en/docs/tweets/post-and-engage/api-reference/post-statuses-destroy-id.html)

### Resources

A resource is an abstract representation of an object that can be invoked using Create, Read, Update or Delete with your API, for example:

- If you are building the API of an e-learning application, resources could include: a student, a course, a class, a topic, a teacher.
- If you are building an e-Commerce API, they could be:  Product, Category, Order, Client, Purchase, etc.
  
Resources represent the documents being transferred across the network to get work done. Resources should be named as nouns, as they represent concepts in the domain of a particular system and are identified using URIs.

Further reading:

- [ReadTheDocs](https://restful-api-design.readthedocs.io/en/latest/resources.html)
- [RESTfulAPI.net](https://restfulapi.net/)

### Public API's

List of public API's that require no authentication: https://github.com/public-apis/public-apis

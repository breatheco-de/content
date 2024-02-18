---
title: "Understanding REST APIs"
subtitle: "It seems to be only the beginning of the API revolution! The path of humanity drives towards the API's architecture. You can learn any language or tool, but this is one of those few specialties that will guarantee you a well paid job for the next 60 years, so get comfortable with REST API. :)"
cover_local: "../../assets/images/b929f233-00b2-406f-87a5-ee74146cfd85.jpeg"
video: "https://www.youtube.com/watch?v=s7wmiS2mSXY"
textColor: "white"
date: "2020-10-19T16:36:31+00:00"
tags: ["REST","API"]
status: "published"

---

<iframe height="450" src="https://www.youtube.com/embed/s7wmiS2mSXY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## What is an API?

API (*Application Programming Interface*) is a technology that enables communication between two applications (user-server, back-front, view-service, etc.) to share information and functionality. Thus, in the communication, the application that sends the request is called `client` and the one that sends the response is called `server`.

## How does an API work?

An API works in three steps: call, implementation and application.

### Step 1: Call
The call is the action that triggers the communication. It is a need or a sending of information that you want to receive from or include in the server.

For example, a user can access an application on his smartphone that gives information about the weather. By selecting a location about which he wants to see the weather, the system receives this call to get the information for that city.

### Step 2: Implementation
Once the system/server/receiver has received the call, a process is triggered that aims to satisfy the sender's needs. Depending on the purpose of the call, the server can either access its information to return it or insert the information received by the user to include it.

In our example above, the system would receive the weather status request, including the user's location, and extract the information from its database.

### Step 3: Application
With the information or the new resource to be created located, the server performs the action of sending the information or adding it. Until this step, the client request has no real impact.

In our example, the mobile application receives the information from the server and displays it in the user's interface.

## API on the web
In a web application, the API methods depend entirely on the purpose or business of the application. Moreover, this API will exclusively cover the scope of the application and should not exceed in its domain:

- If the web application is for a product such as Uber, some of the methods the API should provide are: registering new customers, requesting a ride, rating a driver, canceling a ride, and so on.
- If the web application is for a product like Airbnb, some of the methods should be: new customer registration, advertiser registration, accommodation search, listing reservations, requesting a reservation, cancellation, and so on.

As we can see, both APIs contain methods in common, such as registering new customers.

There are a number of ways to create an API in a web environment, but the `REST` standard is one of the most widely used and, in fact, the most important standard.

### REST API
The main characteristic of this type of implementation is that communications are carried out over the `HTTP` protocol. This means that both sending and receiving is carried out in plain text (encrypted and in a specific format, but in the end, it is a string of characters). Because it's based on this protocol, it takes advantage of and uses the request methods seen previously: GET, POST, PUT and DELETE.

|Method        |Description  |
|:-------------|:----------------|
|GET | Requests a representation of the specified resource. Used to request a resource from a server. |
|POST | Sends information to the server. This information, depending on the server and the context, can be used, for example, to add records to a database, add information to a user profile on a website, and so on. |
|PUT | Sends information to the server, but unlike POST, this method is used to update information already on the server. |
|DELETE | Used to delete data on the server. |

In addition to the request methods, this protocol also establishes certain response codes, which this API also takes advantage of. You can find more information [here](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status).

+ `1xx` - Metadata
+ `2xx` - All OK
+ `3xx` - Redirection
+ `4xx` - Client did something wrong
+ `5xx` - Server did something wrong

### URI
URI (*Uniform Resource Identifier*) is a string of characters that identifies a resource on the network. The Internet is said to be populated by many points of content. The URI is the way to identify any of these content points, whether it is a page of text, a video or sound clip, a still or animated image, or a program.

A web application must have an associated URI to unambiguously identify that one from all others, and all of its resources from all others. A URI is composed of a *protocol* followed by a *host* and a *path*. If for example we had:

```text
https://api.uber.com/v1.2/products
```

Then `https` is the *protocol*, `api.uber.com` is the *host* and `v1.2/products` is the *path*.

A web application implementing a REST API must define a URI for each of the target functionalities (and methods). For example, some Twitter API URIs are as follows:

|Method        |Functionality      |URI     |
|:-------------|:------------------|:-----------|
| GET | Get direct message | https://api.twitter.com/1.1/direct_messages/events/show.json |
| GET | Get favorites list | https://api.twitter.com/1.1/favorites/list.json |
| POST | Post tweet | https://api.twitter.com/1.1/statuses/retweet/:id.json | 
| DELETE | Delete direct message | https://api.twitter.com/1.1/direct_messages/events/destroy.json |

As we just saw in the Twitter APIs example, your REST service only implements the GET, POST and DELETE methods. This is a very common thing; it is not necessary to implement all methods. Moreover, as we can also see, for each functionality, a request method will be defined, and there can be several GET, POST or DELETE, each on a different URI.

### Resource
A resource is an abstract representation of a unit of information that is distributed in calls to and from the API, and its structure and content will also depend on the scope of the application and its domain. For example:

+ If we are building an API for an online academy, the resources could be: student, course, class, subject, teacher, etc.
+ If we are creating an e-commerce API, the resources could be: product, category, order, customer, etc.
  
Resources represent the documents that are transferred over the network to get the job done. Resources should be named as nouns, since they represent concepts in the domain of a particular system and are identified using a URI.

## Further reading
Several documents and guides are provided below to reinforce knowledge about REST APIs:

- [ReadTheDocs](https://restful-api-design.readthedocs.io/en/latest/resources.html)
- [RESTfulAPI.net](https://restfulapi.net/)

> 🔗 This is a list of public APIs that can be used for personal, professional and educational projects:
https://github.com/marcelscruz/public-apis

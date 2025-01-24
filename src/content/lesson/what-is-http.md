---
title: What is HTTP?
subtitle: >-
  HTTP stands for Hypertext Transfer Protocol. It is a set of communication
  rules that enables the flow of information over the World Wide Web (WWW).
cover_local: ../../assets/images/http-0.png
textColor: white
date: '2020-10-19T16:36:31+00:00'
tags:
  - HTTP
status: published
description: >-
  Learn about HTTP, the essential protocol for web communication. Discover how
  it works, request methods, and response codes in our comprehensive guide!
---
## What is HTTP?

HTTP (*HyperText Transfer Protocol*) is a protocol used to transmit hypermedia documents over the Web. It is involved in all information transmission flows across the Internet.

This protocol operates between a client and a server. Thus, the client makes a request by sending a message in a certain format to the server. The server then returns with a text response.

This communication, as shown in the following gif, is carried out through a process:

1. The client wants to send an image through a server. The server receives the image and transforms it into text. This text is unreadable by humans. If a hacker were to intercept this, what he would see is a set of symbols/letters/numbers one after the other.
2. The image is transformed into text and then transmitted over the Internet.
3. The string of characters arrives at the receiver's computer/mobile device, in this case, the grandmother.
4. When the grandmother receives the file and wants to open it, decoding is carried out, which transforms the text into an image for subsequent viewing.

![Sending an image through the Internet](https://github.com/breatheco-de/content/blob/master/src/assets/images/2fd53b0a-5243-4440-8fc6-7fd74ac5a46e.gif?raw=true)

<small style="color:grey">Image 1: The 4 steps necessary to send images over the Internet: decoding the image, transmission, reception and decoding... Finally, the grandmother feels happy after seeing her granddaughter's picture!</small>

### How does HTTP work?

![HTTP stages](https://breathecode.herokuapp.com/v1/media/file/http-steps-png?raw=true)

The HTTP protocol works through requests and responses from the client (e.g., a web browser) and a server (e.g., the computers that host and display websites). 

The server, after receiving a request, responds with a structured message and a series of metadata that establishes guidelines for the initiation, development and closure of the communication. These guidelines are called **request methods**.

A sequence of these requests is known as an **HTTP session**.

### Request methods

Every conversation on the web starts with a request. This request is a text message or a set of lines created by a client (browser, app, user) that specifies the document it requests and the *method* it applies. The client sends this request to a server, and then waits for the response.

A request to get a web page, in this case, `google.com`, in HTTP language would look something like this:

```python
GET / HTTP/1.1 
Host: google.com
Accept: text/html
User-Agent: Chrome/31.0.1650.57 (Macintosh; Intel Mac OS X 10_9_0)
```

In this particular case we are using the GET method because we want to get/receive a resource.

This simple message communicates everything we need to know about exactly what resource the client is requesting. The first line of an HTTP request is the most important and contains two things:

+ The URI (*Uniform Resource Identifier*), which is the unique address or location that identifies the resource the client wants.
+ The HTTP method defines what you want to do with the resource and is your request method. The most commonly used are the following:

|Method        |Description      |
|:-------------|:----------------|
|GET | Requests a representation of the specified resource. Used to request a resource from a server. |
|POST | Sends information to the server. This information, depending on the server and the context, can be used, for example, to add records to a database, add information to a user profile on a website, and so on. |
|PUT | Sends information to the server, but unlike POST, this method is used to update information already on the server. |
|DELETE | Used to delete data on the server. |

```python
DELETE /blog/15 HTTP/1.1`
```

In addition to the first line, an HTTP request also has other lines of data called *request headers*, through which it can deliver a wide range of information in the request that the server will receive.

Every response from a server will carry with it a *response code* or *status code*. Some of the most common ones are listed below.

### Response codes

When the server receives the request, it knows exactly what resource the client needs (through the URI) and what it wants to do with that resource (through the request method used). 

Translated into HTTP, the response would look something like this:

```python
HTTP/1.1 200 OK
Date: Sun, 01 Dec 2013 18:17:45 GMT
Server: Apache/2.2.22 (Ubuntu)
Content-Type: text/html
```

The response contains the requested resource as well as the response code. In this case, `200` indicates that everything is correct, that the resource has been received, and that the communication was successful.
 
HTTP status codes can be found [here](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status), and depending on the number they start with, they provide very valuable information:

+ `1xx` - Metadata
+ `2xx` - All OK
+ `3xx` - Redirection
+ `4xx` - Client did something wrong
+ `5xx` - Server did something wrong

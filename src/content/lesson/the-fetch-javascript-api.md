---
slug: "the-fetch-javascript-api"
title: "The Fetch API"
subtitle: "Have you heard of Fetch? In this lesson, you will learn how to request information from APIs and make use of that data with the most used technology for that purpose - the JS Fetch API."
cover_local: "../../assets/images/e16d59ad-4c11-4ca0-8bfc-5a9d147c6c2e.jpeg"
authors: ["Guensie"]
textColor: "white"
date: "2020-10-19T16:36:31+00:00"
tags: ["fetch","ajax","http"]
status: "published"

---

# Fetch API

**A Quick Glance at the Fetch API**

Think of a **fetch** as a simple Javascript Promise. You send a **request** to the server/API and expect to receive a **response**. The Fetch Api gives us the **fetch()** **method**, which allows us to access those requests and responses, using Javascript.

Let’s look at what a simple **fetch** looks like:

```javascript
   fetch('examples/example.json')
    .then(response => {
    **// Here is where you put what you want to do with the response.**
    })
    .catch(error => {
	    console.log(‘Oh No! There was a problem: \n', error);
    });
```

**What is happening here?**

 1. We pass the URI (path) we want to **fetch** from (‘examples/examples.json’) as an argument of the fetch method.
 2. The call returns a “**promise**” which eventually ***resolves*** into a response. Note that a “**promise**” is not the actual response. Think of it as a proxy for the response.
 3. Once the response comes through, it is passed to the **.then** method for use.
 4. If there is an error in completing the request, for example, if there is no network connection, the **.catch** is passed the appropriate error as a parameter. 
 **Note** that an error like 404 (a bad response) is still a valid “**response**” (the server returned something to us) and therefore wouldn’t be considered an uncompleted response. So, in the example above, it would not automatically fall back to the “**.catch**”.

**How do we check for a successful response?**

Since the fetch promise would only reject a request if it was unable to complete it, we need to manually validate if a response is good and throw an error if it is not.

A generic response from a server looks something similar to this when logged on the console:

```javascript
[object Response] {
	body: (...)
	bodyUsed: false
	headers: Headers {}
	ok: true
	redirected: false
	status: 200
	statusText: "OK"
	type: "cors"
	url: "https://assets.breatheco.de/apis/fake/todos/user/Gmihov"
}	
```
 
With that in mind, to evaluate the status of a response, you can use its properties:
“**response.ok**”- checks for a status in the 200s and returns a boolean
“**response.status**”- returns an integer with the response status code. Default is **200**
“**response.statusText**”- returns a string whose default is “OK” or a relevant error message

**Now we can update the example from above to validate the response**

```javascript
    fetch('examples/example.json')
    .then(response => {
	    if (!response.ok) {
	    throw new Error(response.statusText);
		}
		// Here is where you put what you want to do with the response.
	})
	.catch(error => {
		console.log('Looks like there was a problem: \n', error);
	});
```

**Now what’s happening?**

1) We are still passing the URI (‘examples/example.json’) as an argument.
2) The **fetch** returns a **promise** that eventually becomes the response.
3) The response is then passed to **.then** to be used as you specify.  
4) We have an if-statement that basically says if **response.ok** is not true, throw an error with the response.statusText, which will then trigger the .catch.

**Why do we need this?**

To prevent bad responses from going down the chain and breaking your code later on.

We need to throw this error manually because as explained above, error messages received within a response from the server do not register automatically as an error and do not show up in the catch method. 

The result will be that the fetch will deliver nothing, and yet the client will be clueless that something has gotten wrong.

**Now What?**

Now we need to “read” the response in order to access the body of the response.

As you already know, the only data that can travel over an http connection is in plain text format. Therefore, we need to convert the plain text from the body of the response into meaningful Javascript format.  

Luckily, there’s a method for that: “**response.json();**” which we apply to the response.

Next, we update our code to include it.

```javascript
    fetch('examples/example.json')
    .then(response => {
	if (!response.ok) {
	   throw Error(response.statusText);
	}
    // Read the response as json.
	 return response.json();
     })
    .then(responseAsJson => {
    // Do stuff with the JSONified response
	 console.log(responseAsJson);
     })
    .catch(error => {
	    console.log('Looks like there was a problem: \n', error);
    });
```

**Now what is going on?**

Simple. Think of it in separate steps.

1) Fetch the resource at the given path.
(**Fetch** gets the path to the resource and returns a **promise** that will resolve to a response object).  
  
2) Then validate the response.
(This checks to see if the response is valid (200s). If not, skip to step 5).

3) Read the response as JSON.

4) Log the result
(The result is being the JSON data received from the body of the response).

5) Catch any errors.

**Now that you have seen the basics, we can compose more advanced fetches.**

The default request method is a "GET" method; which is what we have seen so far. The most used methods and what they represent are: 

**GET**: Read/Retrieve
**POST**: Create
**PUT**: Edit/Update
**DELETE**: You guessed it, this simply means Delete. 

Here's an example of a post method that is creating a new user:

```javascript
fetch('https://example.com/users.json', {
	method: 'POST', 
	mode: 'cors', 
	redirect: 'follow',
	headers: new Headers({
		'Content-Type': 'text/plain'
	})
})
.then(res => res.json())
.then(response => { /* handle response */ })
.catch(error => console.error(error));
``` 

**Note** that this example fetch is posting (sending to the server) data in plain text format. In modern front end development, this is less common. The most common content type for our methods will be the ***application/json*** format, as seen in the following example:


```js
fetch('https://example.com/users', {
  method: 'PUT', // or 'POST'
  body: JSON.stringify(data), // data can be a `string` or  an {object} which comes from somewhere further above in our application
  headers:{
    'Content-Type': 'application/json'
  }
})
.then(res => {
	if (!res.ok) throw Error(res.statusText);
	return res.json();
})
.then(response => console.log('Success:', response))
.catch(error => console.error(error));
```

**Did you notice something new above?** 

The **Body** of the fetch is where we place the data that we want to send to the server for permanent storage, with our POST or PUT requests.
Because we can only send plain text over http, we have to convert our data from its original JS format to a string. We do that with the **JSON.stringify()** method.   

Requests with the GET or DELETE method do not require a body, since normally they are not expected to send any data, however, you ***can*** include a body in those requests as well, if needed. 

**HTTP headers** allow us to perform additional actions on the request and response. You can set request headers by using as you see above.  

One of the most common headers needed is the 'Content-Type' header. It signals to the recipient of the request (the server), how it should treat the data contained in the body of the request. Because most of the time we send data in some javascript format which is then ***stringified***, we need to instruct the server to convert the string that it receives back into a json format, as seen in line 5 above.

Headers can be sent in a request and received in a response.

Therefore, you can use the headers of the response you receive from the server, to check the content type of its body, and make sure you are receiving the right format before going any further in the process. An example of this would be:

```js
fetch(https://example.com/users)
.then(response => {
    var contentType = response.headers.get("content-type");
    if(contentType && contentType.includes("application/json")) {
      return response.json();
    }
    throw new TypeError("Sorry, There's no JSON here!");
  })
  .then(jsonifiedResponse => { /* do whatever you want with the jsonified response */ })
  .catch(error => console.log(error));
```

Note that a Header method will throw a TypeError if the name used is not a valid HTTP header name. A list of valid headers can be found [here](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers).


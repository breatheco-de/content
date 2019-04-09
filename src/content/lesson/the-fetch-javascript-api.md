---
slug: "the-fetch-javascript-api"
title: "The Fetch API"
subtitle: "Have you heard of AJAX? In this lessons you will learn how to request information from other API's and make use of that data with the most used technology for that purpose."
cover: "https://ucarecdn.com/e16d59ad-4c11-4ca0-8bfc-5a9d147c6c2e/"
authors: ["Guensie"]
textColor: "white"
date: "2018-05-11"
tags: ["fetch","ajax","http"]

---
# **Fetch API**
**A Quick Glance at the Fetch API**


Think of a **fetch** as a simple action. You give a **request** and receive a **response**. The Fetch Api gives us the **fetch()** **method**, which allows us to access those requests and responses, using javascript.

Let’s look at what a simple **fetch** request looks like:
```javascript
    fetch('examples/example.json')
    .then(function(response) {
    **// Here is where you put what you want to do with the response.**
    })
    .catch(function(error) {
	    console.log(‘Oh No! There was a problem: \n', error);
	    });
```
**What is happening here?**

 1. We pass the path we want to **fetch** (‘examples/examples.json’) as a parameter.
 2. The call returns a “**promise**” which eventually becomes the response. Note that a “**promise**” is not the actual response. Think of it as a proxy to the response.
 3. Once the response comes through, it is passed to **.then** for use.
 4. If there is an error in completing the request, for example if there is no network connection, the .catch is passed the appropriate error as a parameter. Note that a 404 (a bad response) is still a “**response**” and therefore wouldn’t be considered an uncompleted response. So, in the example above it would not fall back to the “**.catch**”.

**How do we check for a successful response?**
Since the fetch promise would only reject a request if it was unable to complete it, we need to check if a response is good and validate it and throw an error if it is not ok.
 
To evaluate the status of a response you can use :
“**response.ok**”- checks for a status in the 200s and returns a boolean.
“**response.status**”- returns an integer with the response status code. Default is **200**.
“**response.statusText**”- returns a string who’s default is “OK”

**How would you update the example above to validate responses?**
```javascript
    fetch('examples/example.json')
    .then(function(response) {
	    if (!response.ok) {
	    throw Error(response.statusText);
		}
		// Here is where you put what you want to do with the response.
	})
	.catch(function(error) {
		console.log('Looks like there was a problem: \n', error);
	});
```
**Now what’s happening?**
1) We are still passing the path(‘examples/example.json’) as a parameter.
2) The **fetch** returns a **promise** that eventually becomes the response.
3) The response is then passed to .then to be used in the way you specified.  
4) We have an if statement that basically says if **response.ok** is not true, throw an error with the response.statusText, which will then trigger the .catch.

**Why do we need this?**
 To prevent bad responses from going down the chain and breaking your code later on.
 
**Now What?**

Now we need to “read” the response in order to access the body of the response. Luckily, there’s a method for that: “**response.json();**”

Let’s update our code to include it.
```javascript
    fetch('examples/example.json')
	 .then(function(response) {
		if (!response.ok) {
	    throw Error(response.statusText);
	 }
    // Read the response as json.
	    return response.json();
	 })
	  .then(function(responseAsJson) {
    // Do stuff with the JSON
	    console.log(responseAsJson);
	 })
    .catch(function(error) {
	    console.log('Looks like there was a problem: \n', error);
    });
```
**Now what’s going on?**
Simple. Think of it in separate steps.
1) Fetch the resource at the given path.
(**Fetch** gets the path to the resource and returns a **promise** that will resolve to a response object.)  
  
2) Then validate the response.
(This checks to see if the response is valid (200s). If not, skip to step 5.)

3) Read the response as JSON

4) Log the result
(The result being the JSON data received.)

5) Catch the error

**Now that you have seen the basics, we can make more advanced requests. **

The default request method is a "GET" mehod; which is what we have seen so far. The most used methods and what they represent are: 
**GET**: Read/Retrieve
**PUT**: Edit/Update
**POST**: Create 
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
}).then(function() { /* handle response */ });
``` 
Another example: 
```js
fetch(https://example.com/users, {
  method: 'PUT', // or 'POST'
  body: JSON.stringify(data), // data can be `string` or {object}!
  headers:{
    'Content-Type': 'application/json'
  }
}).then(res => res.json())
.then(response => console.log('Success:', JSON.stringify(response)))
.catch(error => console.error('Error:', error));
```

**Did you notice something new above? Headers?** 
HTTP headers allow us to perform additional actions on the request and response. You can set request headers by using ```js newHeaders()```, as you see above. 

Headers can be sent in a request and recieved in a response. 

One use for headers is checking the content type to make sure you are recieving the right format before going any further in the process. An example of this would be:

```js
fetch(myRequest).then(function(response) {
    var contentType = response.headers.get("content-type");
    if(contentType && contentType.includes("application/json")) {
      return response.json();
    }
    throw new TypeError("Sorry, There's no JSON here!");
  })
  .then(function(json) { /* do whatever you want with your JSON */ })
  .catch(function(error) { console.log(error); });
  ```
Note that a Header method will throw a TypeError if the name used is not a valid HTTP header name. A list of valid headers can be found [here](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers)


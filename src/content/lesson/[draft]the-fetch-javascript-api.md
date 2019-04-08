---
slug: "the-fetch-javascript-api"
title: "The Fetch API"
subtitle: "Have you heard of AJAX? In this lessons you will learn how to request information from other API's and make use of that data with the most used technology for that purpose."
cover: "https://ucarecdn.com/e16d59ad-4c11-4ca0-8bfc-5a9d147c6c2e/"
status: "unassigned"
textColor: "white"
date: "2018-05-11"
tags: ["fetch","ajax","http"]

---
# **Fetch API**
**A Quick Glance at the Fetch API**


Think of a **fetch** as a simple action. You give a **request** and receive a **response**. The Fetch Api gives us the **fetch()** **method**, which allows us to access those requests and responses, using javascript.

Let’s look at what a simple **fetch** request looks like:

    fetch('examples/example.json')
    .then(function(response) {
    **// Here is where you put what you want to do with the response.**
    })
    .catch(function(error) {
	    console.log(‘Oh No! There was a problem: \n', error);
	    });
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

**Happy Fetching!**


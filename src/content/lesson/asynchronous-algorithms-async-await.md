---
title: "Creating asynchronous algorithms"
subtitle: "Understand the difference between synchronous and asynchronous scripts, use Promises and master async and wait."
cover: "https://ucarecdn.com/e16d59ad-4c11-4ca0-8bfc-5a9d147c6c2e/"
status: "published"
authors: ["kodi2fever", "nachovz"]
textColor: "white"
date: "2018-05-11"
tags: ["async","await","promise","asynchronous"]

---

## Asynchronous Programming with JavaScript 
***
Up to this point, we have used JavaScript code to run simple web applications, which includes: using variables, calling functions and playing with the ***DOM***. On functions, specifically, we even passed functions into another functions  (***callback functions***) and there's more to talk about this.

Let's start by stating that JavaScript is synchronous and single-threaded by definition, i.e: the code is executed from line 1 until the last one, one at a time and in order(ish). Take a look at this example:

#### Synchronous (default)

```javascript
1    function runFirst(){
2 	console.log("first");
3    }
4    function runSecond(){
5 	console.log("second");
6    }
7    runSecond();
8    runFirst();

/*
CONSOLE OUTPUT:
  > second
  > first
*/
```

In here: line 5 runs before line 2 because we're calling ```runSecond()``` (line 7) before ```runFirst()``` (line 8). Breaking the order by commanding the computer to *call* (or execute) the code block within a function.

Things get more complicated when calling functions inside functions, as we can see here:

#### Calling functions

```javascript
1    function runFirst(){
2	console.log("I want to run first");
3	runSecond();
4	console.log("I also want to run when runFirst runs");
5    }
6    function runSecond(){
7	console.log("Where am I running?");
8    }
9   runFirst();

/*
CONSOLE OUTPUT:
  > I want to run first
  > Where am I running?
  > I also want to run when runFirst runs //this line of code had to wait for runSecond() to finish 
*/
```

*OK What...?*

This happens because the ***call stack*** in JavaScript keeps track of the functions that are currently running and are being processed:
+ ```runFirst()``` is pushed into the call stack because we called it (line 9).
+ We see our first ```console.log``` (line 2), after that, ```runSecond()``` is called (line 3).
+ ```runFirst()``` pauses its execution and ```runSecond()``` starts running.
+ Second ```console.log``` executed (line 7).
+ Once ```runSecond()``` finishes, ```runFirst()``` starts again, executing the rest of its code, the last ```console.log``` (line 4).

F U N!

But wait, there's more... We could even pass a *function* as an argument to another function (nope, this is not a typo). The *function* sent as a parameter it is called a **callback function**. Take a look:

#### Callback functions

```javascript
1    function runFirst(someFunction){
2	console.log("I want to run first");
3	someFunction();
4	runSecond();
5	console.log("I also want to run when runFirst runs");
6    }
7    function runSecond(){
8	console.log("Where am I running?");
9    }
10   runFirst(aThirdOne);
11
12   function aThirdOne(){
13	console.log("this is crazy");
14   }
15

/*
CONSOLE OUTPUT:
  > I want to run first
  > This is crazy
  > Where am I running?
  > I also want to run when runFirst runs 
*/
```

...*you may want to take a second look, don't worry, we'll wait*...

Explanation time!

We've added a new function ```aThirdOne()``` (line 12), which console-logs: "this is crazy"; but we are not calling it directly, instead, we are passing the its name as a parameter to ```runFirst()``` (line 10). 
```runFirst(someFunction)``` it's now expecting a value (line 1) which will be called as if it were a function (line 3).
**Note that the name is different because we pass the value, not the variable name.** 
This produces a new print in the console: "this is crazy", before we call ```runSecond()``` (line 4).  

...*jump around!, jump around!, jump around!, Jump up, jump up and get down!*... 

Now, let's assume that we need to load some files from a server, specifically, images:

#### Synchronous image loading

```javascript
1    function fetchingImages(){
3	console.log("Load them!");
4	//SOME CODE TO LOAD IMAGES
5	console.log("Images loaded!");
6    }
7    function userIsWaiting(){
8	console.log("I don't like waiting");
9    }
10   fetchingImages();
11   userIsWaiting();
12

/*CONSOLE OUTPUT:
	> Load them! 			//user starts waiting
					//now user has to wait for the images to arrive, time: unknown... browser: frozen :(
	> Images loaded! 		//after ?? seconds
	> I don't like waiting 		//we don't want users to wait that long to see images
*/
```
*Unnacceptable...* 

In a real life website, users will have to wait for a long time to see something, all because the ***DOM*** processing has to wait for the pictures to arrive from the server; and this is all because we are using the same thread of execution for everything.

### Asynchronous

Asynchronous programming is a way to process lines of code and handle the result without affecting the main thread.

```javascript
1    function fetchingImages(){
3	console.log("Load them!");
4	fetch("the_url_of_the_image").then( (response) => {
5		if(response.ok){ 
6			console.log("Images Loaded!!");
7		} else {
8			console.log("Uh-oh something went wrong");
9		}
10	});
11   }
12   function userIsWaiting(){
13	console.log("I don't like waiting");
14   }
15   fetchingImages();
16   userIsWaiting();
17

/*CONSOLE OUTPUT:
	> Load them! 					//user starts waiting
	> I don't like waiting 				//no waiting! DOM ready to see
							//... and ?? seconds later
	> Images loaded! OR Uh-oh something went wrong 	//Images!... Magic! || Oops, no images	
*/
```

Javascript offers a handful of predefined asynchronous functions which we can use to solve any possible scenario. Some of them are:

+ [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch): used to load files asynchronously.
+ [setTimeout()](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout): used to set timers between blocks of code.

In this case, we used the Fetch API to load the images and *then* (after getting an answer from the backend) we wrote some feedback from the process.

Keep in mind that any network call could fail because of many reasons, we should always be prepared for failure.

## Promises
***
A promise is nothing more than the result of an asynchronous operation. It represents the completion or failure of that result in from of object provided by the promise.

#### A promise has 3 different states:
+ ***Pending***: promise result has not been determined yet because the asynchronous operation has not been completed.
+ ***Fulfilled***: it is when asynchronous operation is finished and the promise returned a value as an object.
+ ***Rejected***: it takes place when the operation failed.
***

***This is how a promise can be created*** 
```javascript
var myPomise = new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve("I was resolved");
  }, 300);
});
myPomise.then((obj) => {
  console.log(obj);
});
console.log(myPomise);

/*CONSOLE OUTPUT:
	>promise object //it will return a promise object
	>"I was resolved"
*/
```
***
### Resolve and Reject functions
+ ***Resolve*** is used to change the status of a promise from pending to fulfilled.
+  ***Reject*** is used to change the status from pending to rejected.


### Important methods to know when using promises
+ ***resolve***: it returns a promise object that has the status of resolved with a value.
```javascript
	//here Promise represents the Promise object.
	Promise.resolve("I was resolved with this value").then(value => console.log(value));
	
	/*CONSOLE OUTPUT:
	>"I was resolved with this value"
	
	***********
		a better recommended approach will be initializing a variable 
		equals to the resolved Promise.
		
	--- sample: 
		var myResolvedPromise =  Promise.resolve("I was resolved with this value");
	*/
```
***

+ ***reject***: it returns an already rejected promise with a reason.

```javascript
	Promise.reject(new Error("I was rejected")).then(error => console.log(error));
```
***

+ ***then***: this method return a promise and it can take up to 2 arguments. One for the resolved promise and one for the rejected promise. Above there is an example that uses ***then*** method and takes one argument.

```javascript
	var promise =  new  Promise(function(resolve,reject){
		resolve("I was resolved and you can see me when you use then method");
	});
	promise.then(value => console.log(value));
```
***
+ ***catch***: returns a promise and deals with rejected operations. It is very handy when trying to debug or showing errors.

```javascript
	var promise =  new  Promise(function(resolve,reject){
		reject("I was rejected and you can see me when you use catch method");
	});
	promise.catch(error => console.log(error));
```
***

## Async/await
***
+ ***Async/await*** is a way to write asynchronous code. 
+ ***Async*** is a JavaScript function and can contain an ***await*** expression.
+ ***Await*** pauses the execution of async function and waits for a Promise's result.

[[warning]]
| Remember that await expressions are only valid inside async functions. If you use them outside you will have a syntax error.

```javascript
function returnedPromiseHere() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("I am the images coming from the database");
    }, 1000);
  });
}
async function useAsyncFunction() {
  console.log("I am a fast task");
  var result = await returnedPromiseHere();
  console.log(result);
  console.log("I had to wait for await to finish");
}
useAsyncFunction();

/*CONSOLE OUTPUT:
	>"I am a fast task"
	//after 1 second...
	>"I am the images coming from the database"
	>"I had to wait for await to finish"
*/
```
### Async becomes powerful when there are multiples steps in action:

```javascript
function promise1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("I am resolved as 1");
    }, 100);
  });
}
function promise2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("I am resolved as 2");
    }, 200);
  });
}
function promise3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("I am resolved as 3");
    }, 300);
  });
}
async function handlingAllPromises() {
  var first = await promise1();
  var second = await promise2();
  var third = await promise3();
  
  console.log(first);
  console.log(second);
  console.log(third);
}
handlingAllPromises();
```
#### In the example above instead of awaiting for a promise every new line, we could use the Promise.all method and wait for all the promises to be fulfilled.
```javascript
	var [first, second, third] = await Promise.all([promise1(), promise2(), promise3()]);
```
***
### Also you can do async functions as arrow functions
```javascript
const handlingAllPromises = async () => {
  var [first, second, third] = await Promise.all([promise1(), promise2(), promise3()]);
  
  console.log(first);
  console.log(second);
  console.log(third);
}
```
***
### How to handle errors in async functions?
A good way of handling errors in async functions is to use the try ... catch statements.

```javascript
async function handeErrors() {
  let msg;
  try {
    msg = await promise1(); //notice this method is already written in your application
    console.log(msg);
  } catch(err) {
    console.log(err);
  }
}
```
***
### Fetch api is promise based. Guess what? You can use it in your async functions too!! 
```javascript
async  function fetchData(endpoint) { 
	const response = await  fetch(endpoint); //notice the use of fetch api
	let data = await res.json();
	data = data.map(user => user.ID); 
	console.log(data); 
}

fetchData(http://dummyData/api/allUsers); //this is an example endpoint

/*CONSOLE OUTPUT:
	>[1, 2, 3, 4] //here we get all users ID from the database
*/
```
***
## In conclusion
You have the ability to create awesome and faster web applications. In addition, users and faster tasks no longer need to wait for slow tasks to be finished,  thanks to ***asynchronous programming***. 

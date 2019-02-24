---
slug: "asynchronous-algorithms-async-await"
title: "Creating asynchronous algorithms"
subtitle: "Understand the difference between synchronous and asynchronous scripts, use Promises and master async and wait."
cover: "https://ucarecdn.com/e16d59ad-4c11-4ca0-8bfc-5a9d147c6c2e/"
status: "unassigned"
textColor: "white"
date: "2018-05-11"
tags: ["async","await","promise","asynchronous"]

---

## Asynchronous Programming with JavaScript 
***
Up to this point, we have used JavaScript code to run simple web applications, played with the ***DOM***, and somehow, passed functions into another functions  (***calback functions***).

### Synchronous vs Asynchronous ...
***
Let's start by initializing that JavaScript is synchronous at its base and single-threaded. Code is read from a starting line of code to the next one. This means that if you are using functions in your code, the next line of code that contains a function has to wait for the first one to finish.

#### Synchronous example
```javascript
function runFirst(){
	console.log("first");
}
function runSecond(){
	console.log("second");
}
runFirst();
runSecond();
/*CONSOLE OUTPUT:
	>"first"
	>"second"
*/
```
 It is not done yet, when using ***callbacks***, lines of code stop until your callback finishes running.

#### Synchronous example using callbacks
```javascript
function runFirst(){
	console.log("I want to run first");
	runSecond();
	console.log("I also want to run when runFirst runs");
}
function runSecond(){
	console.log("Where am I running?");
}
runFirst();
/*CONSOLE OUTPUT:
	>"I want to run first"
	>"Where am I running?"
	>"I also want to run when runFirst run" //this line of code had to wait for runSecond to finish 
*/
```
#### OK What...?
This happens because the ***call stack*** in JavaScript keeps track of the functions that are currently running and being processed:
+ runFrist is pushed into the call stack because we invoked it.
+ then we see our first console.log, and after that, runSecond is invoked.
+ runFirst stops its execution and runSecond starts running.
+ once runSecond finishes, runFirst start running the rest of its code.

### What is synchronous JS and why is it important?
***
Imagine there is a website that handles a lot of user requests to show pictures and uses synchronous lines of code. Users will have to wait for a long time to even see the website because faster tasks, like simple user interactions and ***DOM*** manipulation, will have to wait the pictures coming from the database.

```javascript
function fetchingPictures(){
    var dateSeconds = new Date().getTime() + 3000;
    while(new Date().getTime() < dateSeconds){ } 
    console.log("I am finished fetching pictures");
}
function userIsWaiting(){
    console.log("I am waiting")
}
userIsWaiting();
fetchingPictures();
userIsWaiting();

/*CONSOLE OUTPUT:
	>"I am waiting" //user starts waiting
	//now user has to wait 3 seconds for images to show
	>"I am finished fetching pictures" //after 3 seconds
	>"I am waiting" // we don't want users to wait that long to see images
*/

```

To summarize, asynchronous programming is a way to process lines of code and handle the result without affecting faster tasks from running. 
```javascript
function fastTaskSample(){
    console.log("I am very fast!");
}
function slowTaskSample(){
    console.log("I am not that fast...")
}
function handlingSlowTasks(passedFunction){ 
    setTimeout(slowTaskSample,3000); //the call stack handles this in a separated thread
}
fastTaskSample();
handlingSlowTasks();
fastTaskSample();
handlingSlowTasks();
fastTaskSample();
fastTaskSample();
fastTaskSample();

/*CONSOLE OUTPUT:
	>"I am very fast!"
	>"I am very fast!"
	>"I am very fast!"
	>"I am very fast!"
	>"I am very fast!"
	>"I am not that fast..."
	>"I am not that fast..."
*/
```

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

[[warning]] | ??Remember that await expressions are only valid inside async functions. If you use them outside you will have a syntax error.

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

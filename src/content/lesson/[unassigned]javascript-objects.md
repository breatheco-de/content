---
title: "Javascript Objects"
subtitle: "What are javascript objects and how to use them"
cover_local: "../../assets/images/e16d59ad-4c11-4ca0-8bfc-5a9d147c6c2e.jpeg"
textColor: "white"
status: "unassigned"
date: "2020-10-19T16:36:30+00:00"
tags: ["javascript", "js"]
canonical: ""
---

### Let’s review Objects in a bit more detail.

⚠ **️Do not explain classes yet, just javascript simple object literals.**

Objects are like a group of functions that together have a greater purpose. 
E.g: In real life, a car has a bunch of functionalities that together make them a car:
    - A car can accelerate, break, turn on the engine, turn off the engine, etc.
    - A car also has shared properties (not only functions), a car is `red` with a `serial number` with `4 tires` and many other properties.
    
This will be a Javascript Representation of a car object:

```js
let car = {
    color: 'red',
    serialNumber: 'AKF345',
    numberOfTires: 4,
    currentSpeed: 0,
    accelerate: function(delta){
        this.currentSpeed = this.currentSpeed + delta;
    },
    break: function(delta){
        this.currentSpeed = this.currentSpeed - delta;
    }
}
```

To access or set an object’s properties, you can do so in the following ways:
```js
// to set a proparty value
objectName.propertyName = valueToSet;
objectName['propertyName'] = valueToSet; //alternate way

//or to retrieve a propery value
let anyVariable = objectName.propertyName;
let anyVariable = objectName['propertyName']; //alternate way
```

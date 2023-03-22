---
title: "How to Create an object in Javascript"
subtitle: "There are many ways to create objects in javascript, we can use the new keyword or create it with literal syntax, here you can see more examples."
tags: ["javascript","javascript objects"]
date: "2020-10-19T16:36:30+00:00"
authors: []
status: "draft"

---

Creating an object in JavaScript may be achieved by different means, this example allows us to create the object and stablish its properties 

```javascript
function Geek(tech, years) {
	this.tech = tech;
	this.years = years;
}

const geek1 = new Geek("javascript", 3)
const geek2 = new Geek("node", 2)
console.log(geek1)
console.log(geek2)

/*
Output: Geek { tech: 'javascript', years: 3 }
Output: Geek { tech: 'node', years: 2 }
*/
```

## Object with literal syntax:

This is the simpliest way to create an object, the downside is that you´ll need to set the properties for each of the objects you want to create manually. The example is as follows:

```javascript
//Obj declaration with literal sintax
const obj = {
	tech: "javascript",
	years: 2
}

console.log(obj)
//Output: { tech: 'javascript', years: 2 }
```

## Object with new keyword

There are different ways to create objects in javascript using the `new` keyword.

### The built-in Object constructor

To create an object with the built-in constructor use the following sintax:

```javascript

const geek = new Object(); 

console.log(geek)
// Output: {}
```

Ok, we created an empty object, now let´s give it some properties:

```javascript
geek.tech = "javascript"
geek.years = 3
```
Now, if we check the obj, we see the properties we just added

```javascript
console.log(geek)
// Output: { tech: 'javascript', years: 2 }
```

## User defined constructor function

Using a user defined constructor function we take care of a problem that happens when using the `new Object()` and is that, the later, is longer to code and not quite dynamic as the one we´ll discuss now.

```javascript
function Geek(tech, years) {
	this.tech = tech;
	this.years = years;
}

/*
Output: Geek { tech: 'javascript', years: 3 }
*/
```
Every time we´ll execute the `Geek()` function, we´ll pass the value of the properties `Geek("javascript", 3)` and the function will create for us the object with the given properties (remember to send the correct type of values the object receives to prevent errors).

## Object.create()

Object.create() receives an obj as prototype (or blueplrint) and creates a new object from it
 
### Syntax:
 ```javascript
 Object.create(proto, propertiesObject)
 ```
 
### Parameters:
- `proto`:  the object used as prototype
- `propertiesObject` (optional): If specified and not undefined, the properties you want to add to the new object

An example will be most welcome to make all that more understandable, here it is:

First we create our prototype obj (parent object, or anyway you feel more comfortable to name it).

```javascript
const geekForce = { company: "4 Geeks Academy"}
```

We use the `Object.create()` method, and as first argument we pass the `geekForce` object, then we follow the syntax:

```javascript
{ 
	propertyName: {value: "property-value"},
	otherPropertyName: {value: "other-property-value"}
}
```

A full example would look like this:

Now that we have our prototype object, we can use it with `Object.create()` like this:

```javascript
const geek1 = Object.create(geekForce, {
	name: {value: "Javier Seiglie"}, 
	tech: {value: "javascript"}, 
	years: {value: 3}
})
```

Now, let´s see the properties we just added

```javascript
console.log(geek1.tech)
// Output:  javascript
console.log(geek1.years)
// Output:  3
console.log(geek1.name)
// Output:  Javier Seiglie
```

## Object.assign()

If we want to create an object that needs other object properties as its own, then we use the Object.assign() method. 

This method copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object.

Let´s see an example, given two objects:

```javascript
const companyObj = {company: "4 Geeks Academy"}
const tech = { geekTech: "javascript"}
```
Now, we want to create a new object that cointains both of them.

```javascript
const geekForce = Object.assign({}, companyObj, tech);
console.log(geekForce)
//Output: { company: '4 Geeks Academy', geekTech: 'javascript' }
```

We explored different ways on how to create objects in javascript, from the most straightforward one to a dynamic way, and using other object as a prototype creating an object from other objects.

Hope you enjoyed the reading and keep on the geek side.

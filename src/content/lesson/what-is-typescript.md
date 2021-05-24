---
title: "What is Typescript?"
subtitle: "It's recomended to know Javascript in general before reading this lesson, Typescript will take your Javacript knowledge to the next level super-sayayin :)"
cover_local: "../../assets/images/typescript.png"
textColor: "white"
date: "2020-10-19T16:36:31+00:00"
tags: ["typescript"]
status: "draft"

---
Javascript is a language that has a weak typing, this means that the variables are declared without a type and depending on the value assigned to it is the type of data that the variable assumes. We can modify, operate and compare the values ​​between them without having to do a previous conversion.

In the following example we can see how we change the data type without any type of conversion:

```javascript

let name = "Learning Javascript"
console.log(typeof name)
// "string"

name = 33
console.log(typeof name)
// "number"
```
## ¿What is Typescript?

Typescript is a programming language that adds new features to Javascript, this is known as a superset. A superset is written based on another programming language, applying improvements to the original language. That is why Typescript was written about javascript: to add new features that you will see later.

Typescript is the solution to many of the JavaScript problems, it is designed for the development of robust applications, implementing features in a language that allow us to develop more advanced tools for application development.

Typescript es un lenguaje de programación que agregar nuevas funcionalidades a Javascript, esto es conocido como un superset.   Un superset se escribe tomando como base otro lenguaje de programación aplicando mejoras en el lenguaje original.   Por esta razón Typescript se escribió sobre javascript para agrega nuevas funcionalidades que veres más adelante.

Typescript es la solución a muchos de los problemas de JavaScript, está pensado para el desarrollo de aplicaciones robustas, implementando características en un lenguaje que nos permitan desarrollar herramientas más avanzadas para el desarrollo de aplicaciones.

## Static typing

Static typing defines that:

- Variables have only one data type

- The values ​​assigned to the variables must have the same type as the variable.


The following example is declaring the variable `message` of type` string`. The values ​​must have the same data type as the variable, for this reason the string `Learning Typescript` is assigned

```javascript
let message: string;
message: 'Learning Typescript';
```


## Data types in TypeScript

Variables can have different types of values, below you can see how we can define each type using TypeScript:


- **Boolean**:  Only takes two values: True or False
```javascript
let isExist:boolean =  true
```  


- **String**:  Any string of characters.
```javascript
let message:string = "Learning TypeScript"
```


- **Number**: Only numbers.
```javascript
let age:number = 33
```


- **null**: Takes undefined or empty values.
```javascript
let isNotExist:null = null
```


- **Array**: A list with a data type.
```javascript
let arrayNumber:Array<number> = [1, 2, 3, 4]
let arrayNumber:Array<string> = ["one", "two", "three", "four"]
```


- **Tuplas**: Accepts a list of predefined data types.
```javascript
let arraytupla: = [number, string, number]
arraytupla = [23, 'Hello World', true]
```


- **Void**: It is used to indicate that we do not have a defined data type.
```javascript
let notDataType:void = undefined
```

- **Enum**: It allows defining possible values ​​that can be assigned to the variable.
```javascript
enum Animals {cat, lion, dog, cow, monkey}
let c: Animals = Animals.cat;
```


- **Any**: It is used when the data type can be any of the above.
```javascript
let wherever: any = 14;
wherever = "people";
```


### Classes

 As in any other object-oriented programming language, classes in TypeScript have fields, constructors, properties, and functions. Classes act as containers that encapsulate code to be consumed in an easier way.

When defining a class we use the word `class` and close with curly brackets ` {} `, as well as in c# and java, and then we define inside our fields, constructors, properties and functions.

```javascript

class User {
    # fields
    private name: string;
    private lastName: string;
    
    # Constructor
    constructor(name: string, lastName: string){
        this.name = name;
        this.lastName = lastName;
    }

    # Properties
    get getName(): string {
        return this.name;
    }

    set setName(value : string): string {
        if(value === undefined) throw 'Enter a valid value';
        this.name = value;
    }

    #Functions
    fullName(){
        return this.name + ' ' + this.lastName
    }
}

const newUser = new User('Juanin','JanJarri');
console.log('The new user is:', newUser.fullName())

```
In the previous example a `constructor ()` method is defined that receives the parameters `name: String, lastName: String`, these parameters are assigned to the internal values ​​of the class using the` this` method to reference them.

In addition, the `Properties` allow us to obtain and assign data from variables or internal methods of the class. In the example, the `setName ()` method allows assigning the value received as a parameter to the internal property called `name`. The `getName ()` method allows obtaining the value of the internal property 'name'.

The `Functions` allow us to execute functions or internal methods of the class, in the example theb `fullName ()` method returns the union of the internal properties` name` plus `lastName`.

To create an instance of the `User` class we define the following constant` const newUser = new User ('Juanin', 'JanJarri'); `In these lines of code you can see that when creating this instance the parameters are sent` ' Juanin ',' JanJarri'` to the constructor to initialize the class with those values.


## Interfaces 

Sometimes called signatures, it is the mechanism that Typescript uses to define types in classes. They allow you to define the structure or the most complex type of objects.

The way an interface is used is very similar to how a class is defined, but only attributes and methods and their implementation are declared.

Like simple variable types, these objects will also need to follow a set of rules that you create. This can help you write code with more confidence and less chance of error.

In the following example we define an interface called `Lakes`:

```javascript
interface Lakes {
    name: string,
    area: number,
    length: number,
    depth: number,
    isFreshwater: boolean,
    countries: string[]
}
```

The interface `Lakes` contains the type of each property that we are going to use when creating our objects. Next we will create a new `firstLake` object that will inherit the properties of the` Lakes` interface.

```javascript
let firstLake: Lakes = {
    name: 'Caspian Sea',
    length: 1199,
    depth: 1025,
    area: 371000,
    isFreshwater: false,
    countries: ['Kazakhstan', 'Russia', 'Turkmenistan', 'Azerbaijan', 'Iran']
}
```

As you can see, the order in which you assign a value to these properties does not matter. However, you cannot omit a value.
You must assign a value to each property to avoid errors when compiling the code.

In this way, TypeScript ensures that none of the required values ​​are lost by mistake.

### Optional properties

Sometimes you may need a property only for some specific objects.

For example, suppose you want to add a property to specify the months that a lake freezes. If you add the property directly to the interface, as we have done so far, you will get an error for other lakes that are not frozen and therefore do not have the `frozen` property. Similarly, if you add that property to lakes that are frozen but not in the interface declaration, you will still get an error.

In such cases, you can add a question mark `?` After a property name to make it optional in the interface declaration. This way, you won't get an error for missing properties or unknown properties. The following example redefines the `Lakes` interface but the` area` property remains optional.

```javascript
interface Lakes {
    name: string,
    area?: number,
    length: number,
    depth: number,
    isFreshwater: boolean,
    countries: string[]
}
```



## Playground

<iframe width="830" height="467" src="https://www.typescriptlang.org/play?#code/PTAEHUFMBsGMHsC2lQBd5oBYoCoE8AHSAZVgCcBLA1UABWgEM8BzM+AVwDsATAGiwoBnUENANQAd0gAjQRVSQAUCEmYKsTKGYUAbpGF4OY0BoadYKdJMoL+gzAzIoz3UNEiPOofEVKVqAHSKymAAmkYI7NCuqGqcANag8ABmIjQUXrFOKBJMggBcISGgoAC0oACCoASMFmgY7p7ehCTkVOle4jUMdRLYTqCc8LEZzCZmoNJODPHFZZXVtZYYkAAeRJTInDQS8po+rf40gnjbDKv8LqD2jpbYoACqAEoAMsK7sUmxkGSCc+VVQQuaTwVb1UBrDYULY7PagbgUZLJH6QbYmJAECjuMigZEMVDsJzCFLNXxtajBBCcQQ0MwAUVWDEQNUgADVHBQGNJ3KAALygABEAAkYNAMOB4GRogLFFTBPB3AExcwABT0xnM9zsyhc9wASmCKhwDQ8ZC8iElzhB7Bo3zcZmY7AYzEg-Fg0HUiS58D0Ii8AoZTJZggFSRxAvADlQAHJhAA5SASAVBFQAeW+ZF2gldWkgx1QjgUrmkeFATgtOlGWH0KAQiBhwiudokkuiIgMHBx3RYbC43CCJSAA" frameborder="0"></iframe>


## Conclusion

This lesson introduces all the data types that are available in TypeScript. We learned how assigning a different type of value to a variable will give you errors in TypeScript. This check will help you avoid many errors when working on large and robust applications.

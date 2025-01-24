---
title: How to use Foreach method in Javascript?
subtitle: >-
  Learn how to use the forEach method in JavaScript to iterate and perform
  operations on elements of an array.
tags:
  - javascript
  - arrays
authors:
  - diegorojas
description: >-
  Learn how to use the forEach method in JavaScript to iterate through arrays
  effectively. Discover practical examples and enhance your coding skills today!
---
The `forEach` method in [JavaScript](https://4geeks.com/es/lesson/que-es-javascript-aprende-a-programar-en-javascript) allows you to iterate through an array and perform a specific action on each of its elements using a function. Let's see an example:

```js
const animals = ["dog", "cat", "elephant"];

animals.forEach(function (animal) {
  console.log(animal);
});
/*
'dog'
'cat'
'elephant'
*/
```

We can see how the `forEach` method iterates over the `animales` array and applies the function passed as a parameter to each of its elements. In this example, the function simply displays the value of each element in the console.

## Syntax of the forEach Method in JavaScriptt

As mentioned earlier, the `forEach` method takes a function as a parameter that will be executed on each of the elements in the array. This function, also known as a [callback function](https://developer.mozilla.org/es/docs/Glossary/Callback_function), can receive up to three parameters: the value of the current element, the index of the current element, and the array being traversed.

```js
  array.forEach(function (currentElement, index, array))
```

- `currentElement`: represents the value of the current element in the array.
- `index`: represents the index of the current element in the array (optional).
- `array`: represents the array being traversed (optional).

Now, let's see an example of how to use the three parameters received by the `forEach` method:

```js
const vowels = ["a", "e", "i", "o", "u"];

vowels.forEach(function (vowel, index, arr) {
  console.log(`The value of the element at position ${index} is ${vowel} of the array we are iterating, which is ${arr}`);
});
```

In this example, we can see how to use the parameters received by the callback function of the `forEach` method. In this case, a text string is printed to the console, indicating the value of the current element, its position in the array, and the array being iterated.

## Use Cases of the forEach Method in JavaScript

The `forEach` method in JavaScript is commonly used to execute a block of code for each element in an array. Let's explore some use cases:

1. **Modifying array values:** We can use the `forEach` method to modify the values of an array. For example, starting from an array of people's names, we can generate a greeting for each one.

```js
let peopleNames = ["Ricardo", "Pepe", "Mauricio"];

peopleNames.forEach(function (name) {
  console.log(`Hello ${name}`);
});
/*
'Hello Ricardo'
'Hello Pepe'
'Hello Mauricio'
*/
```

2. **Manipulating the DOM:** We can dynamically generate a list of products using the `forEach` method.

```html
<!DOCTYPE html>
<html>
  <head> </head>
  <body>
    <h1>My Product List</h1>
    <ul id="myList"></ul>

    <script>
      const productList = ["Cellphone", "Laptop", "Headphones", "TV"];
      let ul = document.querySelector("#myList");

      productList.forEach(function (product) {
        let li = document.createElement("li");
        li.textContent = product;
        ul.appendChild(li);
      });
    </script>
  </body>
</html>
```

In this example, our HTML document initially only contains an empty unordered list `<ul>`. By using the `forEach` method, we create an `<li>` element using the `createElement() method`, add text content to it through the `textContent` property (which will be the name of the current product being iterated), and finally append the `<li>` element as a child to the `<ul>` element using `appendChild()`, resulting in a dynamic list in our HTML document.

3. **Filtering array elements:** The `forEach` method can help us filter array elements. For example, we need to filter all products that have a price higher than $100.

```js
// Array of products
const products = [
  { name: "Shirt", price: 25 },
  { name: "Shoes", price: 150 },
  { name: "Pants", price: 80 },
  { name: "Cap", price: 30 },
  { name: "Bag", price: 200 },
];

// Auxiliary array to store filtered products
const filteredProducts = [];

// Filter products with price greater than $100 using forEach
products.forEach((product) => {
  if (product.price > 100) {
    filteredProducts.push(product);
  }
});

// Print filtered products to the console
console.log(filteredProducts);
/*
[
  { name: 'Shoes', price: 150 },
  { name: 'Bag', price: 200 }
]
*/
```

4. **Updating properties of objects in an array:** We can use the `forEach` method to modify properties of a group of objects within an array. For example, given an array of students, we can update the grade of each one.

```js
const students = [
  { name: "John", grade: 80 },
  { name: "Peter", grade: 90 },
  { name: "Carlos", grade: 75 },
];

students.forEach((student) => {
  student.grade += 5;
});

console.log(students);
/* Result:
[
  { name: 'John', grade: 85 },
  { name: 'Peter', grade: 95 },
  { name: 'Carlos', grade: 80 }
]
*/
```

5. **Calculating the sum of all elements in an array:** We can use the `forEach` method to sum all elements in an array.

```js
const numbers = [1, 2, 3, 4, 5];
let total = 0;

numbers.forEach((number) => {
  total += number;
});

console.log(total); // 15
```

It's important to note that the `forEach` method doesn't return a new array. Its main function is to iterate over each element in the [JavaScript array](https://4geeks.com/es/lesson/array-arreglo-en-javascript) and execute a function on it. If you need to create a new array from the original elements, you can use other methods such as `map` or `filter`.

If you would like to learn more about this method, you can visit the official JavaScript documentation for the [forEach method](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach).

If this article caught your attention and you would like to learn more about the JavaScript programming language, you can visit this link on [learn to code in JavaScript](https://4geeks.com/lesson/what-is-javascript-learn-to-code-in-javascript), where you'll learn the basics of the language through simple concepts, code examples, video tutorials, and many other resources that will aid in your learning journey.



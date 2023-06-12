---
title: "How to get the last element of an Array in Javascript?"
subtitle: "Learn different techniques to retrieve the last element of an array in JavaScript. You can access the last element by using the length property of arrays."
tags: ["javascript", "arrays"]
authors: ["bran18"]

---

As one of the daily basic parts of programming languages nowadays array last element method in Javascript is normally used for accessing the last element of a determinate array of elements. There are multiple ways to get the last element of the array in Javascript, please take a look at the following example showing one easy way to get the last item in an array using [Javascript](https://4geeks.com/lesson/what-is-javascript-learn-to-code-in-javascript):

```js
const colorsArray = ['purple', 'yellow', ‘orange’, 'blue' ‘red’, ];
const getLastItem = colorsArray[colorsArray.length - 1];
console.log('The last element is: ', getLastItem);
```

This code shown uses the Javascript Array Last Element on the custom `colorsArray` array to get the last item without even knowing beforehand how many items might it contains, we are using the `length` property to determine it, and since the array count always starts at 0, we can pick the last item by referencing the `Array.length - 1` item.

## Javascript Array Last Element

There is no built-in property or method created specifically to access the last element of an array, but there are different approaches to get it. The most common methods used are the following:

- By using the array's length to determine the position of the last element.
- By using the `Array.pop()` method.
- By using the `Array.slice()` method.

[Javascript Arrays](https://4geeks.com/lesson/what-is-an-array-define-array) provides a collection of methods that can be used to get the last item of an array. Some methods provided by Javascript do not mutate the existing array that the method was called on, but they instead return a new array. They do so by first creating a new array and then populating it with elements. For example, let's take the `pop()` method, a mutating method, and the `slice()` method a copying method. As mentioned before `pop()` always changes the length and the content, but on the other hand `slice()` returns a copy that contains some of the elements from the original array.

## Access the last element of an array using the slice() method

```js
let numbersArray = [7, 23, 73, 41, 51, 18];

let getLastElement = numbersArray.slice(-1)[0];

console.log(getLastElement);
```

In the previous code we defined an array (`numbersArray`), then we used the `slice()` to get the last element of the array by passing a negative `index(-1)` (When using negative numbers it will look for the positions from the end to the beginning). Then it returns a new array with the elements that we specified (In this case the last element), and we accessed to the first and only value of that array.

## Access the last element of an array using the pop() method

```js
const numbers = [13, 44, 87, 18, 10, 08, 144, 16, 28];
const getLastItem = arry.pop();

console.log(getLastItem);

//Expected Output: 28
```

In this given code snippet, we are getting the last element of the `numbers` array using the `pop()` method. It removes the last element of an array, and returns it. If you pick this approach you must keep in mind that the `pop()` method modifies the original array. `pop()` has the fastest performance, so it is well known as the fastest way to get the last item from an array in Javascript but, you can only use it if you are ok with modifying the array since this method removes the last element of the array.
  
## Access the last element of an array using the length of the array

```js
let names = ['Brandon', 'Carolina', 'Randy', 'Rube', 'Andler'];
let lastElement = names[names.length - 1];
console.log(lastElement);
```

In this code, we used the `length` property and the `[ ]` square bracket notation to get the last element of the array. Where the `length` property returns the number of elements in an array, and the `[ ]` notation is used to access an element at a specific index in the array, so we got the total number of elements in the array (using the length) and subtract 1 from this value to get the index of the last element (As the position numbers starts from 0).

## Conclusion

[Javascript](https://4geeks.com/lesson/what-is-javascript-learn-to-code-in-javascript) provides an effective and beneficial collection of methods that are very useful for us to get the last item in an array. Some of them are going to mutate our original array and some of them just make copies of the original array, but in the end, all of them have similar behavior and are easy to use.  Whether you use the `length` property or the `slice()` and `pop()` method, will depend on whether you want to modify the original array and whether you need to access the other elements in the array after. All three approaches shown are valid and can be used in various cases. **Remember** Javascript holds diverse helpful functions which make it considerably easier to work with. You can always learn more about [Javascript Arrays](https://4geeks.com/lesson/what-is-an-array-define-array) at [4Geeks Blog](https://4geeks.com/how-to).


---
title: "How to get the last element of an Array in JavaScript?"
subtitle: "Learn different techniques to retrieve the last element of an array in JavaScript. You can access the last element by using the length property of arrays."
tags: ["javascript", "arrays"]
authors: ["bran18"]

---

There are multiple ways to get the last element of an array in JavaScript, take a look at the following example showing one easy way to get the last item in an array in [JavaScript](https://4geeks.com/technology/javascript):

```js
const colorsArray = ['purple', 'yellow', ‘orange’, 'blue' ‘red’, ];
const getLastItem = colorsArray[colorsArray.length - 1];
console.log('The last element is: ', getLastItem);
```

The previous code shows how to get the last element of an array by using the array's length, we are using the length property to determine the position of the last element, because the length of the array may vary so you can't use a fixed number, and since the array count always starts at 0, we can pick the last item by referencing the `Array.length - 1` item.

## JavaScript Array Last Element

There is no built-in property or method created specifically to access the last element of an array, but there are different approaches to get it. The most common methods used are the following:

- By using the array's length to determine the position of the last element (Which we used in the example before).
- By using the `Array.pop()` method.
- By using the `Array.slice()` method.

[JavaScript Arrays](https://4geeks.com/lesson/what-is-an-array-define-array) provides a collection of methods that can be used to get the last item of an array. Some methods provided by JavaScript do not mutate the existing array that the method was called on, but they instead return a new array. They do so by first creating a new array and then populating it with elements. For example, let's take the `pop()` method, a mutating method, and the `slice()` method, a copying method. As mentioned before `pop()` always changes the length and the content, but on the other hand `slice()` returns a copy that contains some of the elements from the original array.

## Access the last element of an array using the slice() method

```js
let numbersArray = [7, 23, 73, 41, 51, 18];

let lastElement = numbersArray.slice(-1)[0];

console.log(lastElement); 

// Expected Output: 18
```

In the previous code we defined an array (`numbersArray`), then we used the `slice()` method to get the last element of the array by passing a negative `index(-1)` (When using negative numbers it will look for the positions from the end to the beginning). Then it returns a new array with the elements that we specified (In this case the last element), and we accessed to the first and only value of that array.

## Access the last element of an array using the pop() method

```js
const numbers = [13, 44, 87, 18, 10, 08, 144, 16, 28];
const getLastItem = numbers.pop();

console.log(getLastItem);

// Expected Output: 28
```

In this given code snippet, we are getting the last element of the `numbers` array using the `pop()` method. It removes the last element of an array, and returns it. If you pick this approach you must keep in mind that the `pop()` method modifies the original array. `pop()` has the fastest performance, so it is well known as the fastest way to get the last item from an array in JavaScript but, you can only use it if you want to modify the array since this method removes the last element of the array.
  
## Access the last element of an array using the length of the array

```js
let names = ['Brandon', 'Carolina', 'Randy', 'Rube', 'Andler'];
let lastElement = names[names.length - 1];
console.log(lastElement);

// Expected Output: Andler
```

In this code, we used the `length` property and the `[ ]` square bracket notation to get the last element of the array. Where the `length` property returns the number of elements in an array, and the `[ ]` notation is used to access an element at a specific index in the array, so we got the total number of elements in the array (using the length) and subtract 1 from this value to get the index of the last element (As the position numbers starts from 0).

## Conclusion

[JavaScript](https://4geeks.com/lesson/what-is-javascript-learn-to-code-in-javascript) provides an effective collection of methods that are very useful to get the last item in an array. All three approaches shown are valid and can be used in various cases. You can always learn more about [JavaScript Arrays](https://4geeks.com/lesson/what-is-an-array-define-array). We hope this article has provided you with effective methods to retrieve the last element of an array in JavaScript. Enhance your array manipulation skills by exploring other articles and resources on our blog. If you're looking to broaden your knowledge in JavaScript and web development, feel free to [sign up for free](https://4geeks.com/pricing) at 4Geeks.com We have a [JavaScript course](https://4geeks.com/start-coding-using-javascript) that will help you master it.

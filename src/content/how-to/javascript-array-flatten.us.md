# Javascript Flatten Array



Have you ever thought “What does that even mean?” When someone asks you to ‘flatten’ an array? If so, You are in the correct place.
Flatten array in javascript is just no more than the process of taking nested array elements and just putting them all into one “flat” array. 
Pretty much all it does is turn some small arrays into one big array but, It can often get tricky of easily that it sounds. Take a look at the following examples demonstrating one of the most familiar ways to flatten an array in [Javascript](https://4geeks.com/lesson/what-is-javascript-learn-to-code-in-javascript):

```js
let nestedArr = [
    [1, 2],
    [3, 4],
    [5, 6][7, 8, 9],
    [10, 11, 12]
];

let flattenArray = [].concat.apply([], nestedArr);

console.log(flattenArray)

//Output:  [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

```

This code shown uses a combination of two [Javascript](https://4geeks.com/lesson/what-is-javascript-learn-to-code-in-javascript) methods. We are using the `concat()` and the `apply()` passing two arguments to the apply method which are the empty array and the [Javascript Array](https://4geeks.com/lesson/what-is-an-array-define-array)  we declared above `nestedArr` then we concatenate all the elements handed into a new empty array bringing back a one-dimensional array.


## Flatten Array Javascript

Every time we require to flatten an array of arrays in Javascript we can follow different approaches, as [Javascript](https://4geeks.com/lesson/what-is-javascript-learn-to-code-in-javascript) provides a collection of methods that can be used to reach our objective. One of the most commonly used are the following:

- flat()
- reduce()
- concat()

Let's break this down into the next examples 

## Examples

#### Javascript Array Flatten - flat() Method

```js
Let nestedArray : [[3, 2, 1, [3, 4]], [4, 6, 5], [], [9, 7, 8]]
const flattenArray = (nestedArray) => {
  return nestedArray.flat(Infinity); 
}

//Output: [3, 2, 1, 3, 4, 4, 6, 5, 9, 7, 8]

```

In this given code snippet, we are using one of the methods provided in ES6, The `flat()` method, politely known as part of the copying methods. `flat()`  returns a new array which is the flattened version of the earliest, without any empty slots. We are also adding `Infinity` as the depth argument to mark the depth to be expanded in a one-dimensional array.


#### Javascript Flatten Array - reduce() Method

```js
let nestedArr = [
    [1, 2],
    [3, 4],
    [5, 6][7, 8, 9],
    [10, 11, 12, 13]
];

let flattenArray = nestedArr.reduce((acc, curVal) => {
    return acc.concat(curVal)
}, []);

//Output:  [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 ]

```
In this given code snippet, `reduce()` method executes a function that you provide as an argument on each element of the array, also learned as a reducer function. The reducer `concat()` walks through the array element-by-element, at each step adding the existing array value to the result in a stored empty array/flatten array.

#### Flatten An Array Javascript -  concat() Method

```js

let nestedArr = [
    [1, 2],
    [3, 4],
    [5, 6][7, 8, 9],
    [10, 11, 12, 13]
];

let flattenArray = [].concat(...nestedArr);

//Output:  [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 ]

```
In this code snippet, we use the spread `...` operator on the `nestedArr` we declared above, the Spread syntax `...` permits the concatenation operation to be performed on all the elements of the array and it stores the result in a new flattened empty array.

## Conclusion

[Javascript](https://4geeks.com/lesson/what-is-javascript-learn-to-code-in-javascript) provides an effective and beneficial collection of methods that are very useful for us to flatten an array of arrays in Javascript. Some of them are short and easy to handle and some of them demand deeper understanding, but in the end, all of them have similar behavior and achieve our goal.  Whether you use the `flat` property, the `reduce()`, `concat()`, or combine two methods, will depend on what you want to do with your application and the code logic. All three methods shown are valid and can be used in various cases. **Remember** [Javascript](https://4geeks.com/lesson/what-is-javascript-learn-to-code-in-javascript) holds diverse helpful functions which make it considerably easier to work with. You can always learn more about [Javascript Arrays](https://4geeks.com/lesson/what-is-an-array-define-array) at 4Geeks.



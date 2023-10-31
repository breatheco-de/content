## JavaScrip Array Flatten

Flattening an array in [Javascript](https://4geeks.com/lesson/what-is-javascript-learn-to-code-in-javascript) is the process of converting a multi-dimensional array into a single one-dimensional array which means that we move all the elements within the multi-dimensional array into a single array, this process can be done in many different ways but the easiest way to achieve this is by using the Javascript `flat()` method, as shown in the following example.

```js
const multidimensionalArray = [
    1, 2, 3,
    [ [4, 5, [6, [7]]], 8],
    [9, [0]]
];

const arrayFlattened = multidimensionalArray.flat(Infinity);
console.log("Array flattened:", arrayFlattened);
```
> code output:
```bash
Array flattened:  [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
```

As you can see in this example, the `multidimensionalArray` array has many layers of array with numbers inside, to take all of those values and put them into a single array we can use the Javascript `flat()` method. If you don´t pass an argument to the `flat()` method it will only flatten the values of the first layer, to go deeper you need to specify the number of layers to flatten, for example, `5` but if you don´t know how many layers you need to pass as an argument, simply pass the number `Infinity`, this number is the largest number Javascript can work with and will ensure that you flatten the whole array no matter how many layers deep it is, we will explain the `flat()` method in more detail in just a moment.

## What is flattening an array? 

Flattening an array is the process of taking the nested elements within an array and putting them into a single array, in other words converting a multi-dimensional array into a single one-dimesional array, for example:
```js
const arrayNested = [[1, 2, 3, [4]], [5, 6, 7, [8]]];
```
Here we have an array that contains two other arrays inside and each of them contains another array inside, we can say that this array contains two layers deep the first layer containing two arrays `[[1, 2, 3, [4]]` and `[5, 6, 7, [8]]`. The second layer is within the inner array and contains the elements `[4]` and `[8]`. The process of flattening an array takes all the values inside the nested arrays and places them into a single one-dimensional array.
```js
const arrayFlattened = [1, 2, 3, 4, 5, 6, 7, 8];
```
Each individual element within the nested arrays is preserved when the array is completely flattened.

## Ways to Flatten an Array in Javascript

There are different ways to flatten an array in Javascript, in the following examples we are going to see the three most popular ways to flatten an array using a recursive function, a loop, and of course the Javascript `flat()` method.

### Using the flat() method

Undoubtedly, the easiest and most effective way to flatten an array is by using the [flat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat) method, as its name indicates this method provides a very simple way to flatten an array no matter how many layers deep it is.

```js
const multidimensionalArray = [1, 2, 3, [4, 5, [6, 7, [8]], 9]];

const exampleOne = multidimensionalArray.flat();
const exampleTwo = multidimensionalArray.flat(2);
const exampleThree = multidimensionalArray.flat(Infinity);

console.log("flat(): ", exampleOne); 
console.log("flat(2): ", exampleTwo); 
console.log("flat(Infinity): ", exampleThree); 
```
> Code output:
```bash
flat(): [ 1, 2, 3, 4, 5, [ 6, 7, [ 8 ] ], 9 ]
flat(2): [ 1, 2, 3, 4, 5, 6, 7, [ 8 ], 9 ]
flat(Infinity): [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
```

As shown in this example, the `flat()` method can be called with different arguments, if you call this method without an argument it will take the number 1 by default and will only flatten the first layer of the array. If you pass a number of layers to flatten for example `2`, this method will flatten the first and the second layers of the array, in our example the first layer of numbers is `[4, 5, [6, 7, [8]], 9]` and the second layer is `[6, 7, [8]]`. Our example array has three layers deep, but in case you don´t know the total amount of layers you need to pass to the `flat()` method you can simply use the number `Infinity`, this way you make sure that the method flattens the whole array no matter how many layers deep it is.

### Using a Javascript loop

Another way you can flatten an array is by using a Javascript [loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration) and the [reduce](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) method.

```js
let nestedArray = [1, 2, 3, [4, 5, [6, 7, [8]], 9]];

while (nestedArray.some((num) => Array.isArray(num))) {
    nestedArray = nestedArray.reduce((acumulator, number) => {
        return acumulator.concat(number);
    }, []);
}

console.log(nestedArray); // output: [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
```

This code will flatten the array no matter how many layers deep it is, however, because we are using the `some()` method to ensure that the `while()` loop continues to execute if any of the elements within the nested array is an array, this code has a worst-case complexity of **O(n^2)** which makes it inefficient depending on the number of layers deep and de number of elements within the array.

### Using a recursive function

Another good option for flattening an array is to use a [recursive function](https://developer.mozilla.org/en-US/docs/Glossary/Recursion).

```js
const nestedArray = [1, 2, 3, [4, 5, [6, 7, [8]], 9]];

function flattenArray(arr) {
    let result = [];
    arr.forEach((item) => {
        if (Array.isArray(item)) {
            result = result.concat(flattenArray(item));
        } else {
            result.push(item);
        }
    });
  
    return result;
}

const flattenedArray = flattenArray(nestedArray);
console.log(flattenedArray); // output:  [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
```

In this example, we're using a recursive function to put all the elements of a nested array into a single one-dimensional array. Inside the function, we are using the `forEach()` method to traverse the array and a conditional to ask if the current item is an array, we can do this with the syntax `Array.isArray(item)` this will return `true` if the item is an array otherwise it returns `false`. If the item is an array we concatenate the variable `result` with the result of the recursive call of the `flattenArray` function and if it's not an array we simply push it into the array `result`.

## Conclusion

We have many options when it comes to flattening an array in [Javascript](https://4geeks.com/lesson/what-is-javascript-learn-to-code-in-javascript), this language provides different ways to do this process although some of them are more efficient than others, as we mentioned before, we can use loops and recursive functions to flatten an array, but is highly recommended to use the `flat()` method instead as it is more efficient in terms of execution and easier to use.

In this article, we have seen a few ways to flatten an array but there are many more that you can use to achieve this goal, some of them are short and easier and others are a bit longer and more complicated but all of them serve the same purpose, if you want to learn more about [arrays in Javascript](https://4geeks.com/lesson/what-is-an-array-define-array) you can do it in the 4Geeks academy web platform.

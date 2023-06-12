# JavaScript Array Last


As one of the daily basic parts of programming languages nowadays array last element method in javascript is normally used for accessing the last element of a determinate array of elements. They are multiple ways to get the last element of the array in javascript, please take a look at the following example showing one easy way to get the last item in an array using [Javascript](https://4geeks.com/lesson/what-is-javascript-learn-to-code-in-javascript):

```js
const colorsArray = ['purple', 'yellow', ‘orange’, 'blue' ‘red’, ]
const getLastItem = colorsArray[colorsArray.length - 1]
console.log(‘The last element is: ’, getLastItem);
```

This code shown uses the Javascript Array Last Element on the custom `colorsArray` array to get the last item without even knowing beforehand how many items might it contains, We are using the `length` property to determine it, and since the array count always starts at 0, we can pick the last item by referencing the <array>.length - 1 item.


## Last Item In Array Javascript

When referencing JavaScript Array Last we need to have into consideration that there is no built-in property or method called "Last", but that they’re different approaches to get the last element of an array. The most normally used are the following:

- length
- pop()
- slice()


[Javascript Array]( https://4geeks.com/lesson/what-is-an-array-define-array) provides a collection of methods that can be used to get the last item of an array. Some methods provided by [Javascript](https://4geeks.com/lesson/what-is-javascript-learn-to-code-in-javascript) do not mutate the existing array that the method was called on, but they instead return a new array. They do so by first creating a new array and then populating it with elements. For example, let's take the `pop()` method, a mutating method, and the `slice()` method a copying method. As mentioned before `pop()` always changes the length and the content, but on the other hand `slice()` returns a copy that contains some of the same elements as the ones from the original array.


## Examples

Here are some short demonstrations of how to get the last element of array: 

#### Get Last Element Of Array Javascript - slice() Method


```js

let numbersArray = [7, 23, 73, 41, 51, 18];

let getLastElement = numbersArray.slice(-1)[0];

console.log(getLastElement); 
```

In this given code snippet, the steps for getting the last element are: 

1. Create an array of numbers
2. Call the slice() method
3. Log the result to the console

In our code snippet once we have defined an array of numbers (`numbersArray`) we then can use or call the `slice()` to get the last element of the array by passing a negative `index(-1)` as the second argument to `slice()`. This is very important and guarantees that it will return a new array with a single element, which is the last element of the original numbers array developed.

#### Javascript Last Element In Array - pop() Method


```js
const numbersArray = [13, 44, 87, 18, 10, 08, 144, 16, 28];
const getLastItem = arry.pop();

console.log(getLastItem);

//Expected Output: 28
```

In this given code snippet, We are getting the last element of the `numbersArray` array using the `pop()` method. It removes the last element of an array, and returns it. If you pick this approach there is something you must keep in mind, and that we already cited before about the `pop()` method. `pop()` has the fastest performance, so it is well known as the fastest way to get the last item from an array in javascript but, You can only use it if you are ok with modifying the array since this method **changes the length** of the array.
  

#### Javascript Array Last Element - length Method

```js

let namesArray = ['Brandon', 'Carolina', 'Randy', 'Rube', 'Andler'];
let getLastElement = namesArray[namesArray.length - 1];
console.log(getLastElement); 
```


In this code snippet, we use the `length` property and the `[ ]` square bracket notation to get the last element of array in javascript. Where the `length` property returns the number of elements in an array, and the `[ ]` notation lets us access an element at a specific index in the array to get the total number of elements in the array and subtract 1 from this value to get the index of the last element.

## Conclusion

[Javascript](https://4geeks.com/lesson/what-is-javascript-learn-to-code-in-javascript) provides an effective and beneficial collection of methods that are very useful for us to get the last item in an array. Some of them are going to mutate our original array and some of them just make copies of the original array, but in the end, all of them have similar behavior and are easy to use.  Whether you use the `length` property or the `slice()` and `pop()` method, will depend on whether you want to modify the original array and whether you need to access the other elements in the array after. All three approaches shown are valid and can be used in various cases. **Remember** [Javascript](https://4geeks.com/lesson/what-is-javascript-learn-to-code-in-javascript) holds diverse helpful functions which make it considerably easier to work with. You can always learn more about [Javascript Arrays](https://4geeks.com/lesson/what-is-an-array-define-array) at 4Geeks.


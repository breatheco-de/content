## Method every() Javascript

Sometimes we need to check if all of the elements in an array meet a given condition, in this situation we can use the Javascript `every()` method to test if all of the elements satisfy this condition. In the following example, we use this method to test if all of the numbers of an array are greater than 10.

```js
const arrayNumbersOne = [13, 15, 17, 25, 34];
const arrayNumbersTwo = [5, 14, 27, 5, 4];

const resultArrayOne = arrayNumbersOne.every((num) => num > 10);
const resultArrayTwo = arrayNumbersTwo.every((num) => num > 10);

console.log(resultArrayOne); // (output) true
console.log(resultArrayTwo); // (output) false
```

In this example with have two different arrays with numbers and we use the `every()` method to check if all the numbers are greater than 10. All the numbers in the first array are greater than 10 so the callback function returns `true`, while the second one does not satisfy this condition so the callback function returns `false`.

## How does the Javascript every method work?

The [every](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every) method of Javascript is an [array](https://4geeks.com/lesson/what-is-an-array-define-array) iteration method that allows you to check if all the elements of an array meet a specific condition, the callback function that receives this method iterates over the array and checks if the element meets the condition, if it does the function returns `true`, otherwise it returns `false`, if all the elements in the array meet the condition then the `every()` method returns `true` but if any of the elements does not meet the condition then immediately the function returns `false` for example:

```js
const arrayOne = [1, 2, 3, 4, 5];
const arrayTwo = [1, 2, "3", "4", 5];

arrayOne.every((num) => typeof num === "number") // the method iterates 5 times
arrayTwo.every((num) => typeof num === "number") // the method iterates only 3 time
```

This code checks if all of the elements in the arrays are **numbers**, because in the first array, all the elements are effectively numbers the Javascript `every()` method iterates through the entire array to check if each element fulfills the condition, but in the second array some of the elements are **strings** and when the `every()` method check that an element does not meet the condition it returns **false** immediately it doesn´t check the rest of the elements.

## Syntax of the every method in Javascript 

The Javascript `every()` method receives two parameters:

```js
array.every(callback(element, index, array), thisParameter);
```

 - `callback`: the first parameter is the callback function that checks each element in the array ( REQUIRE ). This callback function receives three parameters:
   - `element`:  is the current element of the array on each iteration ( REQUIRE ).
   - `index`: is the index of the current element on each iteration ( OPTIONAL ).
   - `array`: is the array on which the `every()` method is invoked ( OPTIONAL ).
 - `thisParameter`: the second parameter is an object that you can specify to be used as the value of `this` in the callback function. It allows you to access properties inside the object of the callback function ( OPTIONAL ).

> Is important to know that this second parameter can only be used if you pass a regular function `function() {}` as a callback to the `every()` method if you use an arrow function `() => {}` the  **this** property cannot be accessed inside the callback function like is shown in the following example.

```js
array.every(function() {console.log(this.thisProperty)}, {thisProperty: 10})

array.every(() => console.log(this.thisProperty), {thisProperty: 10})
```
> ( output ) of the code:
```js
10
undefined
```

In this example, the first call of the `every()` method uses a regular function and therefore it can print in the console the value of the `this` object, but the second call of this method uses an arrow function and because you cannot access the `this` object inside an arrow function it print in the console **undefined**.

This is an example of how to access these parameters.

```js
const numbers = [15, 17, 34];

const numsGreaterThanTen = numbers.every(
    function (number, index, array) {
        console.log("This is the current element: ", number);
        console.log("This is the index of the element: ", index);
        console.log("This is the initial array: ", array);
        console.log('This is the "this" property value: ', this);

        return number > this.minValue;
    },
    { minValue: 10 }
);

console.log("result: ", numsGreaterThanTen);
```

In this example, we show in the console all the values of the different parameters as well as the value of the object `this`, then we check if all of the numbers inside the array `numbers` are greater than the initial value that we assigned to the object `this` in the property **minValue**`{ minValue: 10 }`. 

## Use cases of the every() method in Javascript

The `every()` array method in Javascript can be used on many different occasions, it can be used to check even or odd numbers, check user credentials, check the type of the data, and many other things. We'll see some useful use-case scenarios in the next examples.

### 1. Checking if all the numbers are even

One of the most common uses of this method is to check if all the numbers in an array are even or odd.

```js
const arrayOne = [2, 4, 6, 8, 10];
const arrayTwo = [1, 2, 3, 4, 5];

const resultOne = arrayOne.every((number) => number % 2 === 0);
const resultTwo = arrayTwo.every((number) => number % 2 === 0);

console.log(resultOne); // (output) true
console.log(resultTwo); // (output) false
```

Here we have two different arrays and we want to check if all the numbers inside them are even numbers, to do so we use the **module operator** or **remainder operator** `%` and the syntax `number % 2 === 0`, if the remainder of the number divided by 2 is 0 this means that the number is an **even number** but if the if remainder is a different number for example `0.5` this means that the number is an **odd number**.

### 2. Checking the type of the data

Another way that you can use the `every()` Javascript method is to check the type of the data of an array.

```js
const arrayFruitsOne = ["Apple", "banana", "watermelon", "strawberry"];
const arrayFruitsTwo = ["Apple", "banana", 275, "strawberry"];

const arrayResultOne = arrayFruitsOne.every((item) => typeof item === "string");
const arrayResultTwo = arrayFruitsTwo.every((item) => typeof item === "string");

console.log(arrayResultOne); // (output) true
console.log(arrayResultTwo); // (output) false
```

In this example, we use the `every()` method of Javascript to check if all the elements in the arrays are **strings**, the first array has the names of 4 different fruits so it returns `true` because all of the elements are effectively **strings**, but the second array does not meet this condition so it returns `false`.

### 3. Checking a user form input

Another useful use of the `every()` method in Javascript is to check if a form has been filled in correctly.

> HTML Code:
```html
<!DOCTYPE  html>
<html lang="en">
    <head>
        <script src="script.js" defer></script>
    </head>
    <body style="display: flex; align-items: center; justify-content: center; height: 100vh;">
        <form style="display: flex; flex-direction: column; gap: 2rem">
            <input type="text" name="userName" />
            <input type="email" name="userEmail" />
            <input type="password" name="userPassword" />
            <button type="submit" style="cursor: pointer">Submit!</button>
        </form>
    </body>
</html>
```
> JavaScript Code:
```js
const form = document.querySelector("form");
const userInputs = { userName: "", userEmail: "", userPassword: "" };

const onChange = (e) => (userInputs[e.target.name] =  e.target.value);
const onSubmit = (e) => {
    e.preventDefault();
    const inputsFilled = Object.values(userInputs).every((value) => value !== "");

    if (inputsFilled) alert("Success!");
    else alert("Error!, information required");
};

form.addEventListener("change", onChange);
form.addEventListener("submit", onSubmit);
```

In this example, we use the `every()` method to check if a form has been filled in correctly. First, we have to create an **HTML** file with a form inside the body and three inputs, and a button inside the form, then, we create a **Javascript** file, and inside of it, we implement two different event handlers. 

The first event handler is the function **onChange** where we store the values of the inputs in the constant **userInputs**.

The second event handler is the **onSubmit** function where first we check if all the inputs have been filled, we have to create an array with the values of the **userInputs** object to apply the method  `every()` on it with the syntax `Object.values(userInputs)`, then we check if the values have been filled correctly with the syntax `every((value)  => value !==  "")`, after that, we use a conditional `if` structure to check if the result of the **inputsFilled** constant is true which means that the inputs have been filled in correctly, if so we print an alert on the page with the message **"Success"!** but if the inputs have not been filled in correctly we print an error on the page with the message **"Error!, information required"**.

## Conclusion

In conclusion, the  `every()` method of Javascript will help you check if the elements inside an array satisfy a given condition, you can use this method in many different ways not only the ones presented in this article, if you want to know in more detail this method you can visit the official documentation of Mozilla Javascript [method every](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every).

If you want to check your knowledge of the Javascript programming language, I highly recommend you to visit the page [learn to code](https://4geeks.com/lesson/what-is-javascript-learn-to-code-in-javascript) where can learn this programming language even from scratch, this page has good explanations with code examples, video tutorials and, many other features that will help you understand or reinforce your knowledge in the programming language Javascript.

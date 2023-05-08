# Javascript array clear

Javascript is one of the more used programming languages. Since it is a dynamically typed programming language, it offers a lot of flexibility when it comes to working with arrays. You probably have heard about arrays in different ways (vectors, lists, collections) depending on the language or knowledge context. But in the end, “array” is the common name used to refer to a data structure collection that allows us to store a list of elements, each identified by an index or a key.

You can declare an array in a next way:

```jsx
let animals = ["dog", "cat", "bird", "horse", "cow"];
```

You can notice we declare our animals array as **`let`**. This is to declare our array as mutable, which means its value can be reassigned or changed later. If we were to define your variable as **`const`,** it would be immutable, and its value could not be changed. This is useful for declaring constants or values that should not change over time.

In this article, we'll look at some of the most popular and efficient ways to clear an array in JavaScript, as well as some advice and best practices to guide your decision-making.

### **Method 1: Assigning a new empty array**

One of the simplest ways to clear an array in Javascript is to assign it a new empty array.

```jsx
let animals = ["dog", "cat", "bird", "horse", "cow"];
animals = [];
```

This approach is fast, easy to understand, and works in all JavaScript environments. However, it creates a new array object and discards the old one, which can have performance implications if you're working with large arrays or need to maintain references to the original array.

### **Method 2: Set the length of the array to zero.**

Another common approach to clearing an array in Javascript is to set its length to zero using the **`array.length`** property. This effectively removes all elements from the array.

```jsx
let animals = ["dog", "cat", "bird", "horse", "cow"];
animals.length = 0;
```

This method is also fast, easy to understand, and works in all JavaScript environments. However, it can have unexpected side effects if you're not careful. For example, if there are any other references to the original array, they will not be updated by this method and may still hold references to the original array's values.

### Method 3: Using the splice() method

The **`splice()`** is a javascript method that gives us the ability to add or delete elements from an array. To clean an array, use splice() with a beginning index of zero and a deleted number equal to the array's length.

```jsx
let animals = ["dog", "cat", "bird", "horse", "cow"];
animals.splice(0, animals.length);
```

This method is also fast and generally supported, and it can be useful if you need to remove only a particular element of the array instead of clearing it entirely. However, if you're working with really large arrays, it may have some performance concerns because it needs iterating through every element in the array.

### Method 4: Using a while loop

You can clear an array by iterating over it using a while loop and removing each element from the array one at a time with the pop() method.

```jsx
let animals = ["dog", "cat", "bird", "horse", "cow"];
while (animals.length) {
animals.pop();
}
```

This method is flexible and can be beneficial if additional processing or filtering is required on the elements as they are removed. However, it can be slower than some of the other ways, especially for large arrays. 

Utilizing benchmarking to figure out which option offers the best performance is an interesting idea. Here is an example of the many clearing techniques that have been evaluated using a benchmarking tool: [http://jsben.ch/hyj65](http://jsben.ch/hyj65).

Regardless of which method you choose, there are a few best practices. All of them have different behaviors that can generate different repercussions in our code. Take into account that your code must be understood by other developers in the future, so you should always try to choose the cleanest and easiest-to-understand option.

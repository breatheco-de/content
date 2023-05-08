# Javascript Array Intersection

As developers, we face multiple challenges daily in our job or personal projects. For instance, suppose that you are developing an eCommerce website and you need to compare products and customers' preferences, both of them stored in arrays. To achieve this, you can look for an intersection of the two arrays and suggest better options to customers. 

Commonly, in the previous scenario and many others you can imagine are part of those challenges that involve comparing arrays in Javascript to find common elements and performing a specific logic. Through this reading, you will understand multiple approaches to achieving array intersection using JavaScript and some use cases where it can come convenient.

## Understanding what Javascript Array Intersection is

It is the process of determining overlapping values in different arrays, so it creates a new array holding only common and non-duplicated elements.

One example is having two arrays: `myArr1 = [1,2,3,4,5]` and `myArr2 = [3,4,5,6,7]`. Using the array intersection, it is possible to determine that the output will be `[3,4,5]` since those are the numbers that share in common both arrays. In the following section, you will check some methods you can use to achieve this goal.

## First approach: Get the intersection of multiple arrays using filter()

The filter method in JavaScript enables the composition of a new array that contains the common elements present in two or more arrays based on the requirements specified in the method.

    let myArr1 = [1,2,3,4,5] 

    let myArr2 = [3,4,5,6,7]

    let intersection = myArr1.filter(x => myArr2.includes(x));

    //Output:

    // intersection = [3,4,5]

Besides that, you can check for the difference between arrays to know the elements that are not in myArr1 and myArr2, but this time using a different syntaxis: 

    let myArr1 = [1,2,3,4,5]
    let myArr2 = [3,4,5,6,7]

    let difference = myArr1.filter(x => !myArr2.includes(x));

    //Output:

    //difference = [1,2]

## Second approach: Get the intersection of multiple arrays using a for loop

This approach uses a for loop to iterate over an array to apply an array intersection to get every element in the first array. Then, it uses another method called 'includes()' to check if each element in the first array is included in the second one.

    let myArr1 = [1,2,3,4,5]
    let myArr2 = [3,4,5,6,7]

    //We create  new array to store new numbers
    let new_arr = []

    for (i = 0; i < myArr1.length; i++) {
        if (myArr2.includes(myArr1[i])) {
            new_arr.push(myArr1[i])
        }
    }

    //Output:
    // intersection = [3,4,5]

Another way of using a for loop to get the identical result, yet without using the 'includes()' technique is utilizing a nested for loop, however, the [time complexity](https://www.mygreatlearning.com/blog/why-is-time-complexity-essential/#:~:text=Time%20complexity%20is%20defined%20as,of%20code%20in%20an%20algorithm.) in this scenario would be O(n^2), which might have a significant delay when looping over the arrays if your input is considered large.

    let myArr1 = [1,2,3,4,5]
    let myArr2 = [3,4,5,6,7]

    //Again, we create  new array to store new numbers
    const result = [];

    for (let i = 0; i < myArr1.length; i++) {
    for (let j = 0; j < myArr2.length; j++) {
        if (myArr1[i] === myArr2[j]) {
        result.push(myArr1[i]);
        break;
        }
    }
    }

    //Output:
    // result = [3,4,5]

## Third approach: Get the intersection of multiple arrays using the Set object

Set objects are collections that do not allow duplicated elements to be stored, hence each element inside will be unique. In this form, it is possible to identify the array intersection by removing duplicates. 

    myArr1 = [1,2,3,4,5]
    myArr2 = [3,4,5,6,7]

    const set1 = new Set(myArr1);
    const set2 = new Set(myArr2);
    let intersection = [...set1].filter(element => set2.has(element));

    //Output:
    // [3,4,5]

In the following section, I provide a real-world example where you could use this JavaScript array intersection and could potentialize a project. 

## Real-world example using the intersection of multiple arrays

Imagine that you are developing a website that will offer a search bar as a component for your visitors to find products easily by typing the name. Your objective is to implement an autocomplete feature that suggests search terms to users based on the keywords that have been looked up by other users in the past while navigating that website. So, how can you use arrays intersection to get this goal?

First, you can store various words that users have looked up in the past.
 
    //Create an array to store search terms
    let searchedKeywords = ['iphone', 'ipad', 'macbook 'ipod', 'imac', 'apple','watch', 'alexa', 'xiaomi', 'phillps'];

Then,  take the input typed by the user in the search bar.

    //Store user input in a variable
    let userInput = "IP"

Having both the array with all the values and the user input, you can apply an array intersection to autocomplete what the user is typing. In this example, we pass whatever the user input is to lowercase to match words in the array previously created. Also, we use the string method startsWith() to tell JavaScript to only find the intersection in those words that start with the specific user input (in this case "IP").

    let filteredKeywords = searchedKeywords.filter(searchterm => searchterm.toLowerCase().startsWith(userInput.toLowerCase()));

    //output
    // ["iphone", "ipad", "ipod", "imac"]

Lastly, the user will be able to see this autocomplete feature in action which will improve their user experience. All of this is due to this great JavaScript approach that can be easily implemented when needed.

## Conclusion
  
In conclusion, you could see numerous methods to find the intersection between two or more arrays using filter(), includes(), for loops, and Set objects. Besides that, you saw a real-world example where this method is applied to get better results using the user input for an autocomplete feature. Rest assured this knowledge will help you at some point in your developer journey when working with data structures and you can revisit this article as many times as you need to review each explanation and example.




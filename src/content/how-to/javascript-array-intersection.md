# Javascript Array Intersection

As a developer, you're often faced with the challenge of comparing arrays to find common elements and perform a specific logic. Array intersection, the process of determining overlapping values in different arrays, can help you create a new array holding only common and non-duplicated elements. In this article, we'll explore multiple approaches to achieving array intersection using JavaScript.

Here is a quick example of how it works:

    const arr1 = [1, 2, 3, 4, 5];
    const arr2 = [3, 4, 5, 6, 7];

    const intersection = arr1.filter(value => arr2.includes(value));

    console.log(intersection); // Output: [3, 4, 5]

## First approach: Get the intersection of multiple arrays using filter()

The prevoius code example shows the filter method in JavaScript that enables the composition of a new array that contains the common elements present in two or more arrays based on the requirements specified in the method.

Using a similar syntax, you can also check for the difference between arrays to know the elements that are not in myArr1 and myArr2:

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
    
By using the array intersection technique, you could easily determine the options that are common across all selected filters and only display products that meet those criteria. For example, if a user selects the "T-shirts" category, the "Red" color, and the "Large" size, you could use array intersection to find only the T-shirts that are available in red and in large size. This could improve the user experience and make the website more user-friendly.


## Conclusion
  
In conclusion, you could see numerous methods to find the intersection between two or more arrays using filter(), includes(), for loops, and Set objects. Rest assured this knowledge will help you at some point in your developer journey when working with data structures and you can revisit this article as many times as you need to review each explanation and example.




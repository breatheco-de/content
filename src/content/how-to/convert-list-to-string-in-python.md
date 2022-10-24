# Convert List to String in Python

Let's see a simple way to convert a list to a string in Python using the `.join()` method as follows:

```py
cool_names = ["Danny", "Peter", "Johanna"]

print(", ".join(cool_names)) #Output: Danny, Peter, Johanna 
```
This is the most simple way to convert a list to a string in Python, in the following sections we will describe how the `.join()` method works, as well as check other ways to convert a list to a string in Python.

![List](https://media4.giphy.com/media/RjDIwuXYPzrAEjb6HP/giphy.gif)

- [Convert List to String in Python Using `.join()`](#join)
- [Convert List to String in Python Using `.join()` and `.map()`](#map)
- [Convert List to String in Python Using `.join()` with List Comprehension](#comprehension)
- [Convert List to String in Python Using Iteration](#iteration)
- [Summary](#summary)

## Convert List to String in Python Using `.join()` <a name="join"></a>

The join method is quite simple, it takes an iterable (in this case it would be our list), which joins each element of our list and returns these elements as a string. This method is usually used together with a separator, which as we saw in the previous example was `”, “`. Basically, to use this method, we just have to pass our list as an iterable together with the separator we want to use, like this `”separator”.join(list_name)`. Let's see another example of how to use the `join()` method as follows:

```py
pets = ["Dog", "Cat", "Parrot", "Hamster"]

string_pets = " ".join(pets) #This is joining the elements of our list and separating them with a space

print(string_pets) #Output: Dog Cat Parrot Hamster 
```

it is important to mention that the iterable only takes **string type values**. If we have a list with any `int`, we'll have an error:

```py
list1 = ["Hello", "People", 1, 9, "Greet"]

string_list1 = ", ".join(list1)

print(string_list1) #Output: TypeError: sequence item 2: expected str instance, int found
```

See that we received a `TypeError` since this method only takes string values, not `int` values. If we need to convert a list with strings and `int` values, we should use the following method.

## Convert List to String in Python Using `.join()` and `.map()` <a name="map"></a>

Since we now know that we can only use the `.join()` method for lists with only type string elements, we can use a second method, in this case, the `.map()` method, so that, together with the `.join()` method, can convert a list that has elements of type both string and `int`. Let's see an example below:

```py
list1 = ["Hello", "People", 1, 9, "Greet"]

string_list1 = ", ".join(map(str, list1))

print(string_list1) #Output: Hello, People, 1, 9, Greet
```
The `.map()` method takes two parameters that are a function and an iterable (`.map(function, iterable)`), where the function would be the `str` function that will convert any element into a string and the iterable, as we already know, will be our list. Basically, we are using the `.map()` method to first convert the `int` elements of our list into string elements before converting the whole list into a string. 

## Convert List to String in Python Using `.join()` with List Comprehension <a name="comprehension"></a>

Another useful way to use the `.join()` method with lists that have `int` type elements is by using **list comprehension**. This is a feature that would help us convert a list with both string and int elements into a whole new string. To use this feature, we need to use a for loop to iterate through each element of the list, to then use the list comprehension feature alongside the `.join()` method to finally convert the list to a string. This option should look like this `”separator”.join([str( elements ) for elements in list_name])`. Let's see an example below:

```py
list1 = ["Hello", "People", 1, 9, "Greet"]

string_list1 = ", ".join([str( elements ) for elements in list1])

print(string_list1) #Output: Hello, People, 1, 9, Greet
```

## Convert List to String in Python Using Iteration <a name="iteration"></a>

Our last "trick" to convert any list to string in Python is by just iterating through the elements of a list and concatenating the same in a new string variable, this is done by using a for loop. The "trick" here is to declare an empty string variable since we'll use the for loop to append each list element to our empty string variable. This should look like this:

```py
pets = ["Dog", "Cat", "Parrot", "Hamster"]

string_list1 = ""

for element in pets:   
    string_list1 = string_list1 + " " + element

print(string_list1) #Output: Dog Cat Parrot Hamster
```

Be advised that this option only works with lists that have string elements. If we have an `int` element in the list, we will get the same error as just using the `.join()` method with `int` elements (shown in the third example).

## Summary 
We saw 4 ways how to convert a list to a string in Python in this article, let's see a brief recap so you can master these options:

1.  **Convert List to String in Python Using `.join()`**. You can use this method with lists that have only string elements, the syntax would be  `”separator”.join(list_name)`.
2. **Convert List to String in Python Using `.join()` and `.map()`**.  We use `.map()` alongside the `.join()` method to convert a list with string and `int` type elements into a string. The syntax would be  `”separator”.join(map(str, list_name))`.
3. **Convert List to String in Python Using `.join()` with List Comprehension**. Can be used with lists that have both string and `int` elements. This option should look like this `”separator”.join([str( elements ) for elements in list_name])`
4. **Convert List to String in Python Using Iteration**. You can use this method with lists that have only string elements, the "trick" here is to declare an empty string variable, since we'll use the for loop to append each list element to our empty string variable.

We hope this article helps better understand how to convert list to string in Python.
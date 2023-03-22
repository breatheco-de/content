---
title: "Understanding PHP Syntax"
subtitle: "Learn here about PHP Syntax, with this amazing lesson"
cover_local: "../../assets/images/4cc6fa0b-2530-4052-aa7e-8dac03788ac3.png"
textColor: "white"
date: "2020-10-19T16:36:31+00:00"
tags: ["PHP"]
status: "published"

---

## What is PHP?


PHP is one of the most used back-end languages in the web.  In terms of functionality, it lets you do pretty much what any other back-end language lets you.  The syntax is pretty similar to JavaScript, and its biggest strength is the community – you can find tutorials and documentation for everything you do.

PHP has proven to be a great survivor: 82% of the web uses PHP.  Is the second language with the most interest from Google.  [In a stack-overflow 2018 developer survey](https://insights.stackoverflow.com/survey/2018), PHP was the most popular language amongst PHP, Ruby, Nodejs and Python.  PHP Frameworks are phenomenal: [Laravel](https://laravel.com/), Phpixie, etc.

## JavaScript vs PHP


PHP and JavaScript are like Apples and Oranges.  In terms of functionality, they have NOTHING in common: they don’t serve the same purpose, they don’t do the same things, they come from different backgrounds, etc.

The only things that they have in common are:

+ **You can do the main logical operations and control the flow the same way:**  Like in any other programming language, you have loops, while, if..else, switch, etc. (PHP has even more options – we’ll talk about those later).
+ **They have almost the same syntax:**You have to end every line with a semi-colon; functions are declared the same way; loops are declared the same way; logical operations are the same; etc.

## Data-Types


There are only a few differences – here is the explanation:

|**In JavaScript**    |**In PHP**       |
|:--------------------|:----------------|
|Number    |Instead of one number data-type, you now have two: Integer and Float. An integer does not have decimals:<br>`$myNumber = 23.23;  //float `<br>`$myNumber = 54;  //integer `<br>`$myNumber = 12.00;  //float (even with 00 as decimals).`     |
|Undefined       |The undefined data-type is not available in PHP.  Here undefined and null are the same data-type.<br>`$myNumber;  //is null because it was not defined`     |
|Array     |They have both numerical index arrays and associative arrays.  The difference is that JavaScript calls "Dictionaries" the PHP associative arrays.<br>`$array = array('Juan','John','Steven');  //array of numeric indexes`<br> `$array = array('SSN-55532323' => 'Juan', 'SSN-99948334' => 'John', 'SSN-99330323' => 'Steven');` <br> //associative array, using strings as indexes instead of integers.    |
|String     |Is the same in PHP.      |


### Printing values

Console.log is amazing in JS, but in PHP, you will have to use echo for simple data-types, and print_r to print more complex data-types (like arrays and objects).

#### ![php syntax](https://github.com/breatheco-de/content/blob/master/src/assets/images/2de93dfc-263c-43e3-afa5-6557a5e7cf4c.png) With JavaScript

```javascript
var simpleValue = ‘hello’;
console.log(simpleValue);
//This will print the content of the variable
var arrayValue = [‘Hello’,23, 76, ‘World’,43];
console.log(arrayValue);
//This will print the content of the array and its elements.
```

#### ![php syntax](https://github.com/breatheco-de/content/blob/master/src/assets/images/54a062a9-1b37-4d49-ae22-a23d91ad600f.png) With PHP

```php
$simpleValue = ‘Hello’;
echo $simpleValue;   //this will print the content
$arrayValue = array(‘Hello’,23,76,’World’,43);
echo $arrayValue;   //this will not work
print_r($arrayValue);  //this will work, printing the content of the array in a format like this:
CopyArray
(
    [0] => Hello
    [1] => 23
    [2] => 76
    [3] => World
    [4] => 43
)
```

## Working With Arrays

PHP started as a functional-programming language and still has a lot of things that will work in functions instead of objects.  That is why it is very important to review the basic array operations; the syntax may look different, but, in the end, they have the same purpose.

### Looping Arrays

#### ![php syntax](https://github.com/breatheco-de/content/blob/master/src/assets/images/2de93dfc-263c-43e3-afa5-6557a5e7cf4c.png) With JavaScript

```javascript
for(var i = 0; i<myArray.length; i++){
console.log(myArray[i];
}
myArray.forEach(function(item,index,array) {
console.log(item);
});
```

```php
for($i=0; $i<count($myArray);$i++){
print_r($myArray[i]);
}
foreach($myArray as $item){
print_r($item);
}
foreach($myArray as $index => $value){
print_r($value);
}
```

### Adding and Removing Items

#### ![php syntax](https://github.com/breatheco-de/content/blob/master/src/assets/images/2de93dfc-263c-43e3-afa5-6557a5e7cf4c.png) With JavaScript

```javascript
var myArray = [‘Academy’, ‘Coding’];
myArray.push(‘4Geeks’); //Adding an item
//to remove the item in the INDEX position
myArray.splice(index, 1);
```

#### ![php syntax](https://github.com/breatheco-de/content/blob/master/src/assets/images/54a062a9-1b37-4d49-ae22-a23d91ad600f.png) With PHP

```php
$myArray = array(‘Academy’,’Coding’);
array_push($myArray, ‘4Geeks’);  //adding an item
//to remove the item in the index position
unset($myArray[index]);
$myArray = array_values($myArray);
```

### Sorting Functions for Arrays

#### ![php syntax](https://github.com/breatheco-de/content/blob/master/src/assets/images/2de93dfc-263c-43e3-afa5-6557a5e7cf4c.png) With JavaScript

```javascript
const myArray = [2,5,1,4,7];
myArray.sort();  //sorts array in ascending order
/* Example output
[1, 2, 4, 5, 7]
*/
myArray.reverse();  //sorts array in descending order
/* Example output
[7, 5, 4, 2, 1]
*/

```

#### ![php syntax](https://github.com/breatheco-de/content/blob/master/src/assets/images/54a062a9-1b37-4d49-ae22-a23d91ad600f.png) With PHP

```php
$myArray = array(2,5,1,4,7);
sort($myArray);
print_r($myArray);  //sorts array in ascending order
/* Example output
Array
(
[0] => 1
[1] => 2
[2] => 4
[3] => 5
[4] => 7
)*/
rsort($myArray);
print_r($myArray);  //sorts array in descending order
/* Example output
Array
(
[0] => 7
[1] => 5
[2] => 4
[3] => 2
[4] => 1
)*/
$myAssosiativeArray = array("SSN-9232323" => "Ramon Cornell", "SSN-5643233" => "Steban Dido", "SSN-5554433" => "Mikelly Reik", "SSN-3423344" => "Bob Stalin");
asort($myAssosiativeArray);
print_r($myAssosiativeArray);  //sort associative arrays in ascending order, according to the value
/* Example output
Array
(
[SSN-3423344] => Bob Stalin
[SSN-5554433] => Mikelly Reik
[SSN-9232323] => Ramon Cornell
[SSN-5643233] => Steban Dido
)*/
ksort($myAssosiativeArray);
print_r($myAssosiativeArray);  //sort associative arrays in ascending order, according to the key
/* Example output
Array
(
[SSN-3423344] => Bob Stalin
[SSN-5554433] => Mikelly Reik
[SSN-5643233] => Steban Dido
[SSN-9232323] => Ramon Cornell
)*/
arsort($myAssosiativeArray);
print_r($myAssosiativeArray);  //sort associative arrays in descending order, according to the value
/* Example output
Array
(
[SSN-5643233] => Steban Dido
[SSN-9232323] => Ramon Cornell
[SSN-5554433] => Mikelly Reik
[SSN-3423344] => Bob Stalin
)*/
krsort($myAssosiativeArray);
print_r($myAssosiativeArray);  //sort associative arrays in descending order, according to the key
/* Example output
Array
(
[SSN-9232323] => Ramon Cornell
[SSN-5643233] => Steban Dido
[SSN-5554433] => Mikelly Reik
[SSN-3423344] => Bob Stalin
)*/
```

### The Switch Statement

This is almost identical to the switch statement in JavaScript:

#### ![php syntax](https://github.com/breatheco-de/content/blob/master/src/assets/images/2de93dfc-263c-43e3-afa5-6557a5e7cf4c.png) With JavaScript

```javascript
favcolor = "red";
switch (favcolor) {
    case "red":
    return "Your favorite color is red!";
    break;
    case "blue":
    return "Your favorite color is blue!";
    break;
    case "green":
    return "Your favorite color is green!";
    break;
    default:
    return "Your favorite color is neither red, blue, nor green!";
}
```

#### ![php syntax](https://github.com/breatheco-de/content/blob/master/src/assets/images/54a062a9-1b37-4d49-ae22-a23d91ad600f.png) With PHP

```php
<?php
    $favcolor = "red";
    switch ($favcolor) {
    case "red":
    echo "Your favorite color is red!";
    break;
    case "blue":
    echo "Your favorite color is blue!";
    break;
    case "green":
    echo "Your favorite color is green!";
    break;
    default:
    echo "Your favorite color is neither red, blue, nor green!";
}
?>
```

### Objects

When working with objects, we have to use the operator "->" instead of "." to access the object properties.

#### ![php syntax](https://github.com/breatheco-de/content/blob/master/src/assets/images/2de93dfc-263c-43e3-afa5-6557a5e7cf4c.png) With JavaScript

```javascript
var auxCar = new Car();
console.log(auxCar.brand);
```

#### ![what is php tutorial](https://github.com/breatheco-de/content/blob/master/src/assets/images/54a062a9-1b37-4d49-ae22-a23d91ad600f.png) With PHP

```php
<?php
    $myCar = new Car();
    echo $car->brand;
?>
```

## All the other Operations


All the other operations are pretty much the same as in JavaScript.  Just use the dollar `$` sign at the beginning of each variable, and use the arrow to access object properties instead of the dot `.`






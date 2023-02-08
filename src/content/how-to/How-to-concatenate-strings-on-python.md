---
title: "How to concatenate Strings in Python"
subtitle: "On how to concatenate Strings in Python we explore different ways to concatenate and your choosing will depend on your style and needs. We can concatenate using the + operator, f-Strings method, .format(), the % Operator and we can repeat a string by the means of the * Operator."
tags: ["python"]

---

```python 
str1 = "Hello"
str2 = "Geeks"
int1 = 4
print(f"{str1} from {int1} {str2} Academy!")
#Output -> Hello from 4 Geeks Academy!
```

String concatenation is a common action we, as developers, have to deal with in almost any project. This is the reason why we can achieve this `union of texts` in different ways, depending on style and the need of the data we are presenting in our project.

## Concatenate using the + operator

Making use of the `+` operator is the classic way to concatenate strings. You "add" the variable to your text but remember always to make use of spaces for the string rendering to be as you want.

Implementation: 

```python
#Concatenate using the + operator
str1 = "Geeks"
print("Showing the str1 variable: " + str1 +  " using the + operator")
#Output-> Showing the str1 variable: Geeks using the + operator
```

Take note that there's a space between "variable: " and " using". If we wouldn't place that space, the output would look like this:

```python
#Output-> Showing the str1 variable:Geeksusing the + operator
```
The + operator will "add" the variable to the text and will not add spaces.

## Concatenate using the += Operator

We can use the += Operator to concatenate strings as well, it's pretty similar to using the `+` Operator, but different since we are adding text to a variable.

```python
#Concatenate using the += operator
text = "Python"
str1 = "<3"
text+= str1
print(text)
#Output-> Python<3
```

Since we are "adding" string values to our variable **text**, these values will be concatenated as they are, no space will be automatically added.

### Concatenate a int or foat value with text with str()

Numbers and strings are data type completely different. When we want to add a number (int, float, etc) to a string, we will need to use the `str()` to convert that number.

```python
#Concatenate using the + Operator with numbers
str1 = "Geeks"
int1 = 4
print("At " + str(int1) + " " + str1 +  " Academy we love Python! <3")
#Output-> At 4 Geeks Academy we love python! <3
```

As stated above, we are adding spaces for the render to respect writing rules (all words and numbers separated from one another).

If we would not convert the `int1` number variable to a **string**, we would receive the following error letting you know you are trying to concatenate an Integer with a String.

```python
TypeError: can only concatenate str (not "int") to str
```


## Concatenate using the f-Strings

Python f-Strings (formatted string literals) makes writing strings in a more clear and understanding way for humans. This option was introduced on Python 3.6 so keep in mind backward compatibility when using it.

This is one of the most used methods among experienced developers because of the ease to insert `variables` into the **square brackets**. The variable(s) will be evaluated and a string representation will be displayed. 

Implementation: 

```python
#Concatenate using the f-Strings method
str1 = "Geeks"
print(f"Showing the str1 variable: {str1} using f-String")
#Output-> Showing the str1 variable: Geeks using f-String
```

Making use of the `f-Strings` concatenation, we don't need to convert numbers (Int, Float, etc) to string to be able to display them inside the curly brackets.

```python
#Concatenate using the f-Strings method with numbers 
str1 = "Geeks"
int1 = 4
print(f"At {int1} {str1} Academy we love Python! <3")
#Output-> At 4 Geeks Academy we love python! <3
```

## Concatenate using .format()

Another way to concatenate in Python is by making use of the `format()` method. It works similar to `f-Strings` since they both use curly brackets `{}` to insert variables but is available from version 2.7.

This method doesn't need for the number values to be converted into strings.

```python
#Concatenate using the .format() method
str1 = "Geeks"
str2 = "Academy"
int1 = 4
text = "{}{}{}".format(int1, str1, str2)
print(text)
#Output-> 4GeeksAcademy
```

As you can see, the result returned is the expected, but with spacing between words.

## Concatenate using %

The `%` operator is an older way to concatenate strings that work very similar to the '.format()` method. We use `%s` as placeholders for different values, as we did with the curly brackets in previous examples.

```python
#Concatenate using the % Operator
str1 = "Geeks"
str2 = "Academy"
int1 = 4
text = "%s%s%s" % (int1, str1, str2)
print(text)
#Output-> 4GeeksAcademy
```

## Concatenate using the * Operator 

The use of the `*` Operator is not a concatenation in the way we have been doing so far. The `*` Operator is used for multiplication and that's exactly what it does, multiplying for the amount given the string.

```python
#Concatenate using the * Operator
str1 = "4 Geeks Academy "
print(str1*3)
#Output-> 4 Geeks Academy 4 Geeks Academy 4 Geeks Academy 
```

If you format the **string** variable correctly (leaving a space at the end of the sentence/word), this is the best way to repeat a line of text as many times as you may need.


Hope you enjoyed the reading and keep on the Geek side!
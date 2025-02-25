---
title: Learn why and how to use strings in Java programming language
tags:
  - strings
  - java
description: >-
  Discover how to use strings in Java! Learn essential string manipulation
  techniques to boost your programming skills. Start mastering Java today!
---

## What is a String?

A string is a sequence of characters. Strings are a fundamental part of most programs, so Java has several built-in features that make string manipulation easy. Java has a built-in class in the `java.lang` package that encapsulates the data structures of a string. This class, called `String`, is an object representation of a character array that cannot be changed. There is an accompanying class called `StringBuffer`, which is used to create strings that can be modified after they are created.

### String and StringBuffer

The `java.lang` package contains two string classes: `String` and `StringBuffer`. The `String` class is used when working with strings that cannot be changed. On the other hand, `StringBuffer` is used when you want to manipulate the content of a string. The Java development environment provides two classes to manipulate and store character-type data: `String`, for constant strings, and `StringBuffer`, for strings that can change.

Since they are constant, `Strings` are more efficient (use less memory) than `StringBuffers` and can be shared. Therefore, it is important to use `String` whenever appropriate.

## How to create a string?

Many strings are created from string literals. When the compiler finds a series of characters in quotes (`"` and `"`), it creates a `String` object whose value is the text itself. The general scheme is as follows:

```java
String name = "Hello world";
```

You can also create `String` objects just like any other Java object: using `new`.

```java
String s = new String("Hello World.");
```

The above constructor is equivalent, but the first method is much more efficient since the second method creates two `String` objects instead of just one.

Literal strings can be used anywhere a `String` object can be used. For example, **System.out.println()** accepts a `String` argument, so you can use a literal string in its place:

```java
System.out.println("Hello World!");
```

## Using Strings

+ **String Concatenation**
Java allows you to concatenate strings easily using the `+` operator. The following code snippet concatenates three strings to produce its output:

```java
"The input has " + counter + " characters."
```

Two of the concatenated strings are literal strings: **"The input has "** and **" characters."**. The third string - `the one in the middle` - is actually an integer that is first converted to a string and then concatenated with the others.

+ **String Length**
One of the most common methods used on a `String` is `length()`, which returns the number of characters in a string:

```java
String s = "abc";
System.out.println(s.length());
```

The result of running the above code would print **3**, which corresponds to the length of `s`.

An interesting point in Java is that an object instance is created for each literal `String`, so you can call methods directly on a quoted string, as if it were an object reference. This example would again print 3:

```java
System.out.println("abc".length());
```

+ **Character Extraction**
To extract a single character from a string, you can refer to an indexed character using the **charAt** method. The syntax is as follows: **String_object.charAt(index);**

```java
"abc".charAt(1)
```

This will return `'b'`.

If you need to extract more than one character at a time, you can use the `getChars` method, which allows you to specify the index of the first character and the last character plus one that you want to copy, as well as the `char` array where you want to place those characters.

```java
String s = "This is not a song";
char buf[] = new char[2];
s.getChars(5, 7, buf, 0);
```

+ **String Comparison**
If you want to compare two strings to see if they are equal, you can use the `equals` method of the `String` class. It will return `true` if the only parameter consists of the same characters as the object calling `equals`. An alternative form of `equals` called `equalsIgnoreCase` ignores whether the characters being compared are uppercase or lowercase.

```java
String string1="pepe";
String string2="juan";
if (string1.equals(string2))
{
  //code
}
if (string1.equalsIgnoreCase(string2))
{
    // code
}
```

+ **Equality**

The `equals` method and the `==` operator perform two completely different equality tests. While the `equals` method compares the characters contained in a `String`, the `==` operator compares two object references to see if they refer to the same instance. Therefore, you should not use the `==` sign because it would be a binary comparison of memory pointers and would not return the correct value.

+ **Comparison with CompareTo**

If you want to compare strings for sorting, one option is to use the `compareTo()` method of the `String` class. This method returns `0` if both strings have the same content, a negative value if the `String` is less than the parameter passed, and a positive value if it is greater.

```java
if (string1.compareTo(string2) == 0)
System.out.println("string1 and string2 are equal");
else if (string1.compareTo(string2) < 0)
System.out.println ("string1 comes before string2");
else if (string1.compareTo(string2) > 0)
System.out.println("string2 comes after string1");
```

+ **Converting Case in Strings**

```java
String_object.toLowerCase(); // Converts to lowercase.
String_object.toUpperCase(); // Converts to uppercase.
```

## Converting Objects to Strings

+ **toString()**

Sometimes it is convenient or necessary to convert an object to a `String` because it needs to be passed to a method that only accepts `String`s. For example, **System.out.println()** does not accept `StringBuffer`s, so you need to convert the `StringBuffer` to a `String` to print it.

```java
class ReverseString {
  public static String reverseIt(String source) {
    int i, len = source.length();
    StringBuffer dest = new StringBuffer(len);
    for (i = (len - 1); i >= 0; i--) {
      dest.append(source.charAt(i));
    }
    return dest.toString();
  }
}
```

+ **valueOf**

The `String` class provides a static method `valueOf()`. You can use this method to convert variables of different types to a `String`.

```java
System.out.println(String.valueOf(Math.PI));
```

+ **Extracting a Substring**

To extract a portion of a string, you can use the `substring` method.

```java
String str="The Java language";
String subStr=str.substring(12);
```

This will obtain the substring "Java".

```java
String subStr=str.substring(3, 11);
```

This will obtain the substring "language".


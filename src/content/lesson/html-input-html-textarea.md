---
title: "Understanding HTML Input HTML Text Area and Forms..."
subtitle: "HTML Forms, HTML input and HTML text-area are really easy to understand, and they are the ONLY way to make interactive websites without AJAX. These very basic concepts represent 90% of everything you will ever need to know about forms ."
cover: "https://www.desktopbackground.org/p/2013/09/13/637935_nasa-wallpapers_1600x1200_h.jpg"
textColor: "white"
status: "published"
date: "2020-10-19T16:36:31+00:00"
tags: ["HTML","inputs","forms"]

---

## HTML Forms


This lesson is very easy to understand, but it is essential that in this new knowledge, all the interactivity of the internet will be relayed.  There are a few additional HTML tags that we need to discuss before finishing the Pre-Work: they are the first possible ways of interaction that were introduced in HTML: The Inputs and Forms.

Like always, let’s compare our website with an MS Word document… At some point scientists needed to create forms just like the ones we fill out when we pay our taxes: with blank spaces available for the user to fill in with their Name, Last Name, Date of Birth, etc.

![html textarea html input](https://github.com/breatheco-de/content/blob/master/src/assets/images/12ff6e40-706f-47ff-9ada-53dada968eaf.png?raw=true)

The elements that the user fills in a form are called `<input>` and they always have to be wrapped inside of a `<form>` tag. You can also use all the other HTML tags we learned in the previous lessons without any problems.

Here is an example of a simple form in HTML:

<iframe width="100%" height="300" src="//jsfiddle.net/BreatheCode/L62c4yud/1/embedded/html,result/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

<div align="right"><small><a href="//jsfiddle.net/BreatheCode/L62c4yud/1/embedded/html,result/">Click to open demo in a new window</a></small></div>

The following is a list of all the possible elements we can use to receive any input from the user:

|**Name**   |**Declaration**   |**Description**   |
|:----------|:-----------------|:-----------------|
|Text       |`<input type="text">`   |The text input is meant to receive any small string of characters such as: Username, Name, Last Name, Date of birth, etc.<br>`<input type="text" name="Name" />name="comments"><textarea/>`   |
|Textarea   |`<textarea>`   |The textarea is ideal for long text inputs. Its main difference from the text input is its ability to allow for multiple lines.<br>`<textarea name="comments"><textarea/>`   |
|Password   |`<input type="password" />`   |This is just like an input type="text" but with the only difference that the characters are hidden like bullets. The user cannot see what they are typing.<br>`<input type="password" name="password" />`   |
|Radiobutton   |`<input type="radio">`   |Allows the user to select only one of all the inputs with the same name.<br>`<input type="radio" name="color" value="red" />` <br> `<input type="radio" name="color" value="green" />`   |
|Checkbox   |`<input type="check">`   |You have to use brackets in the name of the input to allow the user to select multiple options at the same time.<br>`<input type="check" name="color[]" value="green" />`<br> `<input type="check" name="color[]" value="blue" />`   |
|File   |`<input type="file">`   |This is the only way to work with files. For example: It’s what websites use when they ask you to upload a picture.<br>`<input type="file" name="photo" value="" />`   |
|Submit Button   |`<input type="submit">`   |When the form is ready to be sent, the user presses this "submit" button and everything is then sent to the server for processing.<br>`<input type="submit" value="Send Form" />`   |
|Select   |`<select>`   |Asks the user to pick one or more elements from a list of options.<br>`<select name="color" /> <option value="red">Red </option> <option value="yellow">Yellow</option> <select />`   |

## Input Attributes

Just like any other HTML tag, the input tags have several attributes that can be set to describe their behavior in more specific ways:

`VALUE`: You can specify a default value that the input should have before it starts getting filled by the user:

```html
<input type="text" name="firstname" value="John">
```
`READ ONLY`: Determines if the user is allowed to change the value of the input.

```html
<input type="text" name="firstname" value="John" readonly>
```

`DISABLED`: Determines if the input is going to be gray and read-only. The disabled inputs are not sent to the backend – they act as if they never existed.

```html
<input type="text" name="firstname" value="John" disabled>
```

`SIZE`: The maximum number of characters allowed for that input.

```html
<input type="text" name="firstname" value="John" size="40">
```

## The forms METHOD and ACTION


The two most important attributes that need to be set into the `<form>` tag are action and method:

**Action**: Is the URL where the data collected from the form is going to be sent.

**Method**: Can be either "POST" or "GET". The main differences will be: (1) How the collected data is going to be sent to the destination page once we arrive there and (2) How the form data is submitted to the server.

|**Using method GET**   |**Using method POST**   |
|:----------------------|:-----------------------|
|All form data is encoded into the URL. This means that it will append all the information of the form to the end of the destination URL. For example, http://www.mydestinationurl.com?input_name1=value1&input_name2&value2….   |The data will be hidden from the end-user.  The URL will remain as it was defined in the "action" attribute and only a developer will be able to request the form information.   |

> :point_up: If you are going to use the `<input type="file">` the only method supported is POST.



  		



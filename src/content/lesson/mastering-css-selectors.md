---
title: "Mastering CSS Selectors"
subtitle: "Aside from mastering the display and position CSS rule, learning how to use the CSS selectors is the most important skill you need to develop. You don't have to remember the syntax of each of them. But you do need to have them on your radar in order to be able to develop the right strategies when building your CSS stylesheet. "
cover: "https://ucarecdn.com/4cc6fa0b-2530-4052-aa7e-8dac03788ac3/"
textColor: "white"
date: "2018-01-11"
tags: ["fale"]
---

## **Why Do We Need to Learn about Selectors?**
***

Completing a stylesheet is like having a little war between selectors, – you are constantly overriding previously defined styles with new ones:

```css{numberLines: true}
//You first say that you want all the H2 tags to be font-size: 14px
h2{
    font-size: 14px;
    color: blue;
}

//But then you have a very particular page where the background is blue, so you need your headings to be white

h2{
    color: white;
}
```

This happens all the time and at some point it can be challenging to override previous styles.  You must organize your styles properly and start from the least specific to the most specific.

These very specific selectors will help you a lot.  They will be your best tool when fighting your styles war!

[[info]]
| :tv: &nbsp;[Here is a super cool video (3:40 min) explaining specificity.](https://www.youtube.com/watch?v=In78mSOHmls)

## **The Child Selector**
***

```css
#someDiv > p {
    color: blue;
}
```

This statement takes the paragraph tags that are children of the div and turns them blue.  Note that it only works for the *children* of that div – not necessarily for all of the descendants.  Let’s explore this further with the following example.

<iframe width="100%" height="300" src="//jsfiddle.net/BreatheCode/odku7nr9/embedded/html,css,result/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

<div align="right"><small><a href="//jsfiddle.net/BreatheCode/odku7nr9/embedded/html,css,result/">Click here to open demo in a new window</a></small></div>





## **The Adjacent Sibling Selector**
***

```css
p + p {
    color: red;
}
```

We used the adjacent sibling selector to change the second and third paragraph to red.  This seems very tricky, doesn’t it?  Instinctively, we would expect the first paragraph to be red as well.  After all, the first paragraph is on the same level of the tree as the next two, and, has siblings.

However, this selector only applies to elements that are preceded by something else.  In this instance, only the paragraphs preceded directly by a sibling paragraph will be targeted.

The first paragraph in the list is preceded by the div, so it isn’t changed.

<iframe width="100%" height="300" src="//jsfiddle.net/BreatheCode/ubpr9mnz/2/embedded/html,css,result/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

<div align="right"><small><a href="//jsfiddle.net/BreatheCode/ubpr9mnz/2/embedded/html,css,result/">Click to open demo in a new window</a></small></div>

## **The Almighty Asterisk**
***

```css
#someDiv * {
    color: red;
}
```

The following turns every element inside a div red – this includes items like links that have a default color set to something else and wouldn’t be affected by simply targeting the div.

<iframe width="100%" height="300" src="//jsfiddle.net/BreatheCode/79254pm6/2/embedded/html,css,result/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

<div align="right"><small><a href="//jsfiddle.net/BreatheCode/79254pm6/2/embedded/html,css,result/">Click here to open demo in a new window</a></small></div>



```css
div * p {
    color: red;
}
```

You can take this as far as you want – the following targets the "great grandchildren" of the div.  You will find this chaining method used frequently in CSS debugging tricks.

<iframe width="100%" height="300" src="//jsfiddle.net/BreatheCode/3f6Lbrvp/embedded/html,css,result/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

<div align="right"><small><a href="//jsfiddle.net/BreatheCode/3f6Lbrvp/embedded/html,css,result/">Click to open demo in a new window</a></small></div>


# **Attribute Value Selector**
***

```css
a[href='http://4geeksacademy.com/'] {color: blue;}
```
If we want to change the font color of the "Design Shack" link, we could use :pseudo selectors.  However, doing so would assume that the list stays in that order, and, browser support isn’t the best.  Instead, what we can do is use an attribute selector to target the specific "href" that we’re interested in.

<iframe width="100%" height="300" src="//jsfiddle.net/BreatheCode/ytw60q3d/6/embedded/html,css,result/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

<div align="right"><small><a href="//jsfiddle.net/BreatheCode/ytw60q3d/6/embedded/html,css,result/">Click to open demo in a new window</a></small></div>


## **Arbitrary Substring Attribute Value Selector**
***

```css
div[id*='section'] {color: red;}
```
The following code targets any div with the word "section" in the title.  It can be "section3" or "section-Four" – it doesn’t matter.  As long as it contains the indicated string, the subsequent styles will apply.

<iframe width="100%" height="300" src="//jsfiddle.net/BreatheCode/uzw8jqc5/1/embedded/html,css,result/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

<div align="right"><small><a href="//jsfiddle.net/BreatheCode/uzw8jqc5/1/embedded/html,css,result/">Click here to open demo in a new window</a></small></div>

# **Pseudo Class Selectors**
***


### Link-related pseudo selectors 
```css
a:link{color: green;}
a:visited{color: yellow;}
a:hover{color: blue;}
a:active{color: red;}
```
You can change colors in any element on the website, depending on its status:

+ `:link` will be the default.
+ `:visited` is self explanatory.
+ `:hover` is when the mouse is over.
+ `:active` is when the mouse is clicking on it.
  
  <iframe width="100%" height="300" src="//jsfiddle.net/BreatheCode/tLy9dvbr/2/embedded/html,css,result/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

<div align="right"><small><a href="//jsfiddle.net/BreatheCode/tLy9dvbr/2/embedded/html,css,result/">Click here to open demo in a new window</a></small></div>


  
### Input-related pseudo selectors 

```css
input{padding: 5px;}
input:disabled{
    background: #ddd;
    color: #949494;
    border: 2px solid black;
}
input:focus{font-size: 2em;}
input:enabled{ border: 2px solid black;}
```

It is very important to take enough time to style our forms.  Styling is the best way to tell the user that an input is either disabled, checked, or that they have the cursor focusing on a particular input.

<iframe width="100%" height="300" src="//jsfiddle.net/BreatheCode/76yzfxL9/1/embedded/html,css,result/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

<div align="right"><small><a href="//jsfiddle.net/BreatheCode/76yzfxL9/1/embedded/html,css,result/">Click here to open demo in a new window</a></small></div>

### Position-based pseudo selectors 

```css
#myUL li:first-child{background: blue;}
#myUL li:nth-child(3){background: orange;}
#myUL li a:first-of-type{background: green;}
```
You can apply styles to elements based on their position.

<iframe width="100%" height="300" src="//jsfiddle.net/BreatheCode/0nzat2h8/1/embedded/html,css,result/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

<div align="right"><small><a href="//jsfiddle.net/BreatheCode/0nzat2h8/1/embedded/html,css,result/">Click here to open demo in a new window</a></small></div>

### Here is a list of the most used Pseudo-Classes:

|**Selector**   |**Example**   |**Example description**   |
|:--------------|:-------------|:-------------------------|
|[:active](https://www.w3schools.com/cssref/sel_active.asp)   |a:active   |Selects the active link   |
|[:checked](https://www.w3schools.com/cssref/sel_checked.asp)   |input:checked   |Selects every checked `<input>` element   |
|[:disabled](https://www.w3schools.com/cssref/sel_disabled.asp)   |input:disabled   |Selects every disabled `<input>` element   |
|[:empty](https://www.w3schools.com/cssref/sel_empty.asp)   |p:empty   |Selects every `<p>` element that has no children   |
|[:enabled](https://www.w3schools.com/cssref/sel_enabled.asp)   |input:enabled   |Selects every enabled `<input>` element   |
|[:first-child](https://www.w3schools.com/cssref/sel_firstchild.asp)   |	p:first-child   |Selects every `<p>`element that is the first child of its parent   |
|[:first-of-type](https://www.w3schools.com/cssref/sel_first-of-type.asp)   |p:first-of-type   |Selects every `<p>` element that is the first `<p>` element of its parent   |
|[:focus](https://www.w3schools.com/cssref/sel_focus.asp)   |input:focus   |Selects the `<input>` element that has focus   |
|[:hover](https://www.w3schools.com/cssref/sel_hover.asp)   |	a:hover   |Selects links on mouse over   |
|[:in-range](https://www.w3schools.com/cssref/sel_in-range.asp)   |input:in-range   |Selects `<input>` elements with a value within a specified range	   |
|[:invalid](https://www.w3schools.com/cssref/sel_invalid.asp)   |input:invalid   |Selects all `<input>` elements with an invalid value   |
|[:lang(language)](https://www.w3schools.com/cssref/sel_lang.asp)   |p:lang(it)   |Selects every `<p>` element with a lang attribute value starting with "it"   |
|[:last-child](https://www.w3schools.com/cssref/sel_last-child.asp)   |p:last-child   |Selects every `<p>` element that is the last child of its parent   |
|[:last-of-type](https://www.w3schools.com/cssref/sel_last-of-type.asp)   |	p:last-of-type   |Selects every `<p>` element that is the last `<p>` element of its parent   |
|[:link](https://www.w3schools.com/cssref/sel_link.asp)  |a:link   |Selects all unvisited links   |
|[:not(selector)](https://www.w3schools.com/cssref/sel_not.asp)   |:not(p)   |Selects every element that is not a `<p>` element
|[:nth-child(n)](https://www.w3schools.com/cssref/sel_nth-child.asp)   |	p:nth-child(2)   |Selects every `<p>` element that is the second child of its parent   |
|[:nth-last-child(n)](https://www.w3schools.com/cssref/sel_nth-last-child.asp)   |p:nth-last-child(2)   |Selects every `<p>` element that is the second child of its parent, counting from the last child   |
|[:nth-last-of-type(n)](https://www.w3schools.com/cssref/sel_nth-last-of-type.asp)   |p:nth-last-of-type(2)   |Selects every `<p>` element that is the second `<p>` element of its parent, counting from the last child   |
|[:nth-of-type(n)](https://www.w3schools.com/cssref/sel_nth-of-type.asp)   |p:nth-of-type(2)   |Selects every `<p>` element that is the second `<p>` element of its parent   |
|[:only-of-type](https://www.w3schools.com/cssref/sel_only-of-type.asp)   |p:only-of-type   |Selects every `<p>` element that is the only `<p>` element of its parent   |
|[:only-child](https://www.w3schools.com/cssref/sel_only-child.asp)   |p:only-child   |Selects every `<p>` element that is the only child of its parent   |
|[:optional](https://www.w3schools.com/cssref/sel_optional.asp)   |input:optional   |Selects `<input>` elements with no "required" attribute   |
|[:out-of-range](https://www.w3schools.com/cssref/sel_out-of-range.asp)   |input:out-of-range   |Selects `<input>` elements with a value outside a specified range   |[:read-only](https://www.w3schools.com/cssref/sel_read-only.asp)   |input:read-only   |Selects `<input>` elements with a "readonly" attribute specified   |
|[:read-write](https://www.w3schools.com/cssref/sel_read-write.asp)   |input:read-write   |Selects `<input>` elements with no "readonly" attribute   |
|[:required](https://www.w3schools.com/cssref/sel_required.asp)   |input:required   |Selects `<input>` elements with a "required" attribute specified   |
|[:root](https://www.w3schools.com/cssref/sel_root.asp)   |root	   |Selects the document’s root element   |
|[:target](https://www.w3schools.com/cssref/sel_target.asp)   |#news:target   |Selects the current active #news element (clicked on a URL containing that anchor name)   |
|[:valid](https://www.w3schools.com/cssref/sel_valid.asp)   |input:valid   |Selects all `<input>` elements with a valid value   |
|[:visited](https://www.w3schools.com/cssref/sel_visited.asp)   |a:visited   |Selects all visited links   |


[[info]]
|:link: This is a great reading about CSS Selectors: [The 30 CSS selectors you must memorize](https://code.tutsplus.com/tutorials/the-30-css-selectors-you-must-memorize--net-16048)











---
title: "Mastering CSS Selectors"
subtitle: "Aside from mastering the display and position CSS rule, learning how to use the CSS selectors is the most important skill you need to develop. You don't have to remember the syntax of each of them. But you do need to have them on your radar in order to be able to develop the right strategies when building your CSS stylesheet. "
time: "8 minutes"
date: "2018-01-11"
tags: ["fale"]
---

# **Why Do We Need to Learn about Selectors?**
***

Completing a stylesheet is like having a little war between selectors, – you are constantly overriding previously defined styles with new ones:

```html
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
| :tv:[Here is a super cool video (3:40 min) explaining specificity.](https://www.youtube.com/watch?v=In78mSOHmls)

# **The Child Selector**
***

```html
#someDiv > p {
    color: blue;
}
```

This statement takes the paragraph tags that are children of the div and turns them blue.  Note that it only works for the children of that div – not necessarily for all of the descendants.  Let’s explore this further with the following example.

<iframe width="100%" height="300" src="//jsfiddle.net/BreatheCode/odku7nr9/embedded/html,css,result/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

# **The Adjacent Sibling Selector**
***

```html
p + p {
    color: red;
}
```

We used the adjacent sibling selector to change the second and third paragraph to red.  This seems very tricky, doesn’t it?  Instinctively, we would expect the first paragraph to be red as well.  After all, the first paragraph is on the same level of the tree as the next two, and, has siblings.

However, this selector only applies to elements that are preceded by something else.  In this instance, only the paragraphs preceded directly by a sibling paragraph will be targeted.

The first paragraph in the list is preceded by the div, so it isn’t changed.

<iframe width="100%" height="300" src="//jsfiddle.net/BreatheCode/ubpr9mnz/2/embedded/html,css,result/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

# **The Almighty Asterisk**
***

```html
#someDiv * {
    color: red;
}
```

The following turns every element inside a div red – this includes items like links that have a default color set to something else and wouldn’t be affected by simply targeting the div.


```html
div * p {
    color: red;
}
```

You can take this as far as you want – the following targets the "great grandchildren" of the div.  You will find this chaining method used frequently in CSS debugging tricks.

# **Attribute Value Selector**
***

```html 
a[href='http://4geeksacademy.com/'] {color: blue;}
```
If we want to change the font color of the "Design Shack" link, we could use :pseudo selectors.  However, doing so would assume that the list stays in that order, and, browser support isn’t the best.  Instead, what we can do is use an attribute selector to target the specific "href" that we’re interested in.

<iframe width="100%" height="300" src="//jsfiddle.net/BreatheCode/4bv9jw2L/12/embedded/html,css,result/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

# **Arbitrary Substring Attribute Value Selector**
***

```html 
div[id*='section'] {color: red;}
```
The following code targets any div with the word "section" in the title.  It can be "section3" or "section-Four" – it doesn’t matter.  As long as it contains the indicated string, the subsequent styles will apply.

<iframe width="100%" height="300" src="//jsfiddle.net/BreatheCode/uzw8jqc5/1/embedded/html,css,result/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

# **Pseudo Class Selectors**
***


## Link-related pseudo selectors 
```html
a:link{color: green;}
a:visited{color: yellow;}
a:hover{color: blue;}
a:active{color: red;}
```
You can change colors in any element on the website, depending on its status:

+ :link will be the default.
+ :visited is self explanatory.
+ :hover is when the mouse is over.
+ :active is when the mouse is clicking on it.
  
  <iframe width="100%" height="300" src="//jsfiddle.net/BreatheCode/tLy9dvbr/2/embedded/html,css,result/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>
  
## Input-related pseudo selectors 

```html
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

## Position-based pseudo selectors 

```html 
#myUL li:first-child{background: blue;}
#myUL li:nth-child(3){background: orange;}
#myUL li a:first-of-type{background: green;}
```
You can apply styles to elements based on their position.

<iframe width="100%" height="300" src="//jsfiddle.net/BreatheCode/ykpbo47c/embedded/html,css,result/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

## Here is a list of the most used Pseudo-Classes:

|**Selector**   |**Example**   |**Example description**   |
|:--------------|:-------------|:-------------------------|
|[:active](https://breatheco.de/cssref/sel_active.asp)   |a:active   |Selects the active link   |
|[:checked](https://breatheco.de/cssref/sel_checked.asp)   |input:checked   |Selects every checked `<input>` element   |
|[:disabled](https://breatheco.de/cssref/sel_disabled.asp)   |input:disabled   |Selects every disabled `<input>` element   |
|[:empty](https://breatheco.de/cssref/sel_empty.asp)   |p:empty   |Selects every `<p>` element that has no children   |
|[:enabled](https://breatheco.de/cssref/sel_enabled.asp)   |input:enabled   |Selects every enabled `<input>` element   |
|[:first-child](https://breatheco.de/cssref/sel_firstchild.asp)   |	p:first-child   |Selects every `<p>`element that is the first child of its parent   |
|[:first-of-type](https://breatheco.de/cssref/sel_first-of-type.asp)   |p:first-of-type   |Selects every `<p>` element that is the first `<p>` element of its parent   |
|[:focus](https://breatheco.de/cssref/sel_focus.asp)   |input:focus   |Selects the `<input>` element that has focus   |
|[:hover](https://breatheco.de/cssref/sel_hover.asp)   |	a:hover   |Selects links on mouse over   |
|[:in-range](https://breatheco.de/cssref/sel_in-range.asp)   |input:in-range   |Selects `<input>` elements with a value within a specified range	   |
|[:invalid](https://breatheco.de/cssref/sel_invalid.asp)   |input:invalid   |Selects all `<input>` elements with an invalid value   |
|[:lang(language)](https://breatheco.de/cssref/sel_lang.asp)   |p:lang(it)   |Selects every `<p>` element with a lang attribute value starting with "it"   |
|[:last-child](https://breatheco.de/cssref/sel_last-child.asp)   |p:last-child   |Selects every `<p>` element that is the last child of its parent   |
|[:last-of-type](https://breatheco.de/cssref/sel_last-of-type.asp)   |	p:last-of-type   |Selects every `<p>` element that is the last `<p>` element of its parent   |
|[:link](https://breatheco.de/cssref/sel_link.asp)  |a:link   |Selects all unvisited links   |
|[:not(selector)](https://breatheco.de/cssref/sel_not.asp)   |:not(p)   |Selects every element that is not a `<p>` element
|[:nth-child(n)](https://breatheco.de/cssref/sel_nth-child.asp)   |	p:nth-child(2)   |Selects every `<p>` element that is the second child of its parent   |
|[:nth-last-child(n)](https://breatheco.de/cssref/sel_nth-last-child.asp)   |p:nth-last-child(2)   |Selects every `<p>` element that is the second child of its parent, counting from the last child   |
|[:nth-last-of-type(n)](https://breatheco.de/cssref/sel_nth-last-of-type.asp)   |p:nth-last-of-type(2)   |Selects every `<p>` element that is the second `<p>` element of its parent, counting from the last child   |
|[:nth-of-type(n)](https://breatheco.de/cssref/sel_nth-of-type.asp)   |p:nth-of-type(2)   |Selects every `<p>` element that is the second `<p>` element of its parent   |
|[:only-of-type](https://breatheco.de/cssref/sel_only-of-type.asp)   |p:only-of-type   |Selects every `<p>` element that is the only `<p>` element of its parent   |
|[:only-child](https://breatheco.de/cssref/sel_only-child.asp)   |p:only-child   |Selects every `<p>` element that is the only child of its parent   |
|[:optional](https://breatheco.de/cssref/sel_optional.asp)   |input:optional   |Selects `<input>` elements with no “required” attribute   |
|[:out-of-range](https://breatheco.de/cssref/sel_out-of-range.asp)   |input:out-of-range   |Selects `<input>` elements with a value outside a specified range   |[:read-only](https://breatheco.de/cssref/sel_read-only.asp)   |input:read-only   |Selects `<input>` elements with a “readonly” attribute specified   |
|[:read-write](https://breatheco.de/cssref/sel_read-write.asp)   |input:read-write   |Selects `<input>` elements with no "readonly" attribute   |
|[:required](https://breatheco.de/cssref/sel_required.asp)   |input:required   |Selects `<input>` elements with a "required" attribute specified   |
|[:root](https://breatheco.de/cssref/sel_root.asp)   |root	   |Selects the document’s root element   |
|[:target](https://breatheco.de/cssref/sel_target.asp)   |#news:target   |Selects the current active #news element (clicked on a URL containing that anchor name)   |
|[:valid](https://breatheco.de/cssref/sel_valid.asp)   |input:valid   |Selects all `<input>` elements with a valid value   |
|[:visited](https://breatheco.de/cssref/sel_visited.asp)   |a:visited   |Selects all visited links   |


[[info]]
| :point_up:This is a great reading about CSS Selectors: [The 30 CSS selectors you must memorize](https://code.tutsplus.com/tutorials/the-30-css-selectors-you-must-memorize--net-16048)











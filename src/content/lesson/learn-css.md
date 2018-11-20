---
title: "Now it's CSS Time!"
subtitle: "As you may have noticed, HTML allows you to create only basic websites.

Nobody wants to see a white website with some horrible text on it.  

it's time to make your website beautiful. It's CSS time!."

cover: "https://ucarecdn.com/4cc6fa0b-2530-4052-aa7e-8dac03788ac3/"
textColor: "white"

date: "2018-31-10"
tags: ["fale"]
---
## **Welcome to CSS!!**
***
We are sure that after diving deep in HTML, everything looks kind of ugly, fixed, and rigid.  We have to remember that HTML was created by CERN scientists, and they’re not – normally – the funniest kind of people (although they were the same exact scientists that 
[discovered The Higgs Boson](https://www.youtube.com/watch?v=0CugLD9HF94), and we do have to bend to our knees for that).  However, HTML is still ugly, and it’s ugly because it was created for a different purpose than the one HTML meets today.

![professor](https://ucarecdn.com/f2e1862b-a575-4a3c-ac12-b5f910f983b0/)

Buuuuttt… The Internet is more beautiful than that.  When internet became popular, it stopped to be only a privilege for scientists and the army, and evolved to become **Part of our world!!**

Ironically, the same scientists at CERN who created HTML had to think about how to improve it.   They were given the task to make it more beautiful.  It was at this time that [Håkon Wium Lie](https://en.wikipedia.org/wiki/H%C3%A5kon_Wium_Lie) proposed the first version of CHSS in 1994, which was later adapted to become CSS1.

## So, What is CSS and why does it matter??
***

![css](https://ucarecdn.com/de08efd3-526b-4d89-8586-8b1d172b0c80/)

The main objective for his creation was to apply styles to HTML documents.  The idea is that you can tell the browser how to display an HTML document: how to render its tags; in what color; margins; typography; icons; borders; etc.  You can even redefine the original behaviors of the existing tags at your will. Eg:

```html
You could tell a <h1> to look just like a <h2> without the user 
realizing that, at first glance, they are different.
```

[[demo]]
| :point_up:To understand the potential of CSS, [click here to see a live demo!](http://assets.breatheco.de/live-demos/css/bootstrap/)

Can you imagine the potential?  You can make almost everything look different!



## **How do I apply styles to HTML?**
***

Quite simple: You have to write your styles in a special syntax called "CSS" and save it on documents with the extension CSS.  Then, you apply the styles to the document using the `<link>` or the `<style>` tag.

Let’s review those 2 tags in more detail:

|**Name**   |**Display**   |**Description**   |
|:----------|:-------------|:------------------|
|Link       |link          |The purpose is to link the page with CSS stylesheets.  To use it, you must specify three attributes within the tag: `rel="stylesheet" type="text/css"` and finally `href="with document route css"`<br>`link rel="stylesheet" type="text/css" href="theme.css">`   |
|Style   |style   |If we do not want or can’t import a CSS style sheet, we have the possibility to define styles in the HEAD of the HTML document.  We simply define the style tag and proceed to write the styles we want for the tags.<br>`<style>`<br>`h1 {color:red;}`<br>`p {color:blue;}`<br>`</style>`   |

[[info]]
| :point_up:Just like it happens with HTML docs (ending with .html) CSS docs (style sheets) ends up with the `.css extension`.

## **CSS Syntax**
***

The CSS syntax has absolutely nothing to do with HTML syntax, it is its own specific programming language.  CSS does not use tags!  To work with a website you have to shift your mind several times because you will be working with several languages at the same time, and each one has its own syntax.

![selctor](https://ucarecdn.com/2e0843bd-fc46-4efa-a893-1e303b527892/)

A CSS style sheet is an infinite list of style definitions for each HTML element.  First you must specify which element – or group of elements – you are going to style; this is called SELECTOR.  Then you have to put a key `{` to indicate that you are going to start defining each attribute and its respective value, and you end that with another key `}`.  You should always finish each attribute definition with a semicolon `;`.

Watch the previous animation for a better understanding.

[[info]]
| :point_up:Spaces are ignored, but you need to use them to make your code easy to read.

The next example is a style sheet defining 3 different groups of styles (selector1, selector2, selector3); and each of those groups has different rules applied like: color, size of the letter and background color.

You need to match HTML elements to groups of styles and you use "selectors" to bind the HTML elements to the CSS groups of rules.

```css
#selector1 {
   color: red;
   font-size: 12px;
}
.selector2 {
   color: blue;
   background: green;
}
selector3 
{
   font-size: 15px;
}
```
## **Wait…What is a "Selector"??**
***

A selector is a way to refer or identify one or more HTML elements.  For example, if you want to change the color of your web to red, you must do it as it follows:

```css
body {
    color: red;
}
```

You could also change the color of a single anchor `<a>` in particular.  To do that, you must define the ID attribute of the HTML tag defining that particular link `<a id="anchor1">`.  Once that tag has an ID, then you can go to your style sheet and define a color as follows:

```css
#anchor1{
   color: red;
}
```
The next table established a list of all the possible selectors available to use in CSS.  Please take your time to review it carefully.  Your understanding here is key to continue with CSS, since you need to understand every possible style you can apply to an HTML doc:

### ID Selector

|**Selector**   |**Description**   |**Example**   |
|:--------------|:-----------------|:-------------|
|#element_id    |Allows the possibility to apply styles to a particular element   |`#element_id { color: red; }`   |

Let’s assign "first" as the ID of the first cell in the next table, and then with CSS we are going to specify that the "first" ID must have a yellow background:

<iframe width="100%" height="300" src="//jsfiddle.net/BreatheCode/1b78wna2/8/embedded/html,css,result/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

<div align="right"><small><a href="//jsfiddle.net/BreatheCode/1b78wna2/8/embedded/html,css,result/">Click here to open demo in a new window</a></small></div>


### Class selector

|**Selctor**   |**Description**   |**Example**   |
|:-------------|:-----------------|:-------------|
|.name_of_the_class   |There is an attribute in HTML called "class", which allows us to group different tags within one logic group.  With CSS we can use `.` (dot) as a selector of every element using "name_of_the_class" as the attribute of the "class".   |`.impar { color: #BDBDBD; }`   |

In the next example we are applying an "odd" class to the cells of this table, and then with CSS we are assigning the yellow background to class .odd:

### Tag selection

|**Selector**   |**Description**   |**Example**   |
|:--------------|:-----------------|:-------------|
|Element name (tag)   |This makes it possible to apply styles to links, titles, etc.  In the next example we shall change the text color of every link tag `<a>` of the page.   |`a{ color: #BDBDBD; }`   |

Next, we are adding color (green) to the  background of each td (cells) of the table:

### Multiselector

|**Selector**   |**Description**   |**Examples**  |
|:--------------|:-----------------|:-------------|
|selectot1,selector2   |If you separate multiple selectors with a comma`,`, you can assign multiple selectors at the same time to save text.  In the following example, we tell every h1 and .impar class elements to turn into red.   |`h1,.impar { color: #BDBDBD; }`   |

### Advanced Selectors

With these 4 ways to select you are covering the  99% of your needs; here what is important is to plan on which will be your Style sheet.

There are others specifics and advanced selectors.  You are probably going to face them when you start building something more challenging.

## **Conflicts and correspondence**
***

What happens if an element of the page is selected in two different selectors and has the green letter color assigned to one definition and red in the other?  In other words, if we have told the browser to find two different colors, what color will it end up having?

![css2](https://ucarecdn.com/08e78606-102f-4bc2-a066-7c26ae9400d5/-/resize/500x/)

You have to have a very good understanding of the CSS hierarchy in order to understand how the elements **correspond, overwrite and even null styles between them.**

The browser gives priority to more specific selectors like `#id` than the more general selectors like tags.  In the following example, we changed the color of all the `<li>` (the items in the list) to blue, but then we changed the text of the second element to red.  That way we demonstrate that the ID selector will always prevail over selecting all the elements by the label to which they belong.

## **Attributes**
***

We have already seen that a CSS style sheet is nothing more than a list that defines the attributes that we want to assign to different elements of the page.  Now you have to see what attributes we can assign to these elements.

There are hundreds – even thousands – of attributes, but, depending on the type of element / label that we want to define, we must focus on different attributes.

#### **Typography editing**
|Property   |Description   |Values   |
|:----------|:-------------|:----------|
|[font-family](http://www.mclibre.org/consultar/htmlcss/css/css-fuente.html#font-family)   |font type (font) | [ name-font \| generic-family ]*   |
|[font-size](http://www.mclibre.org/consultar/htmlcss/css/css-fuente.html#font-size)   |size of the letter   |absolute-size \| relative-size \| distance \| percentage   |
|[font-style](http://www.mclibre.org/consultar/htmlcss/css/css-fuente.html#font-style)   |inclination (italics)   |normal \| italic \| oblique   |

#### **Text editor**

|Property   |Description   |Values   |
|:----------|:-------------|:-----------|
|[color](http://www.mclibre.org/consultar/htmlcss/css/css-texto.html#color)   |text color   |color   |
|[letter-spacing](http://www.mclibre.org/consultar/htmlcss/css/css-texto.html#letter-spacing)   |space between letters   |normal \| distance   |
|[line-height](http://www.mclibre.org/consultar/htmlcss/css/css-fuente.html#line-height)   |space between lines   |normal \| number \| distance \| percentage   |
|[text-align](http://www.mclibre.org/consultar/htmlcss/css/css-texto.html#text-align)   |text alignment   |center \| justify \| left \| right   |
|[text-decoration](http://www.mclibre.org/consultar/htmlcss/css/css-texto.html#text-decoration)   |text ornament   |none \| blink \| line-through \| overline \| underline   |
|[text-transform](http://www.mclibre.org/consultar/htmlcss/css/css-texto.html#text-transform)   |capital / small letters   |none \| capitalize \| lowercase \| uppercase   |

#### **List editing** 

|Attribute   |Description   |Values   |
|:-----------|:-------------|:--------|
|[list-style](http://www.mclibre.org/consultar/htmlcss/css/css-listas.html#list-style)   |compound property (sum of every property combination)   |list-style-image\|\| list-style-position \|\| list-style-type   |
|[list-style-image](http://www.mclibre.org/consultar/htmlcss/css/css-listas.html#list-style-image)   |marker image   |none \| uri   |
|[list-style-position](http://www.mclibre.org/consultar/htmlcss/css/css-listas.html#list-style-position)   |marker position   |inside \| outside  |
|[list-style-type](http://www.mclibre.org/consultar/htmlcss/css/css-listas.html#list-style-type)  |marker type   |none \| circle \| disc \| square \| decimal \| decimal-leading-zero \| lower-alpha \| upper-alpha \| lower-greek \| lower-latin \| upper-latin \| lower-roman \| upper-roman \| armenian \| georgian \| hebrew(-) \| cjk-ideographic(-) \| hiragana (-) \| katakana (-) \| hiragana-iroha(-) \| katakana-iroha(-)  |

#### **Table editing**

|Attributes  |Description   |Values   |
|:----------|:-------------|:-----------|
|[border-collapse](http://www.mclibre.org/consultar/htmlcss/css/css-tablas.html#border-collapse)   |border mode   |collapse \| separate   |
|[border-spacing](http://www.mclibre.org/consultar/htmlcss/css/css-tablas.html#border-spacing)   |space between cells   |distance \| distance   |
[caption-side](http://www.mclibre.org/consultar/htmlcss/css/css-tablas.html#caption-side)   |legend position   |top \| bottom \| left(-) \| right(-)   |
|[empty-cells](http://www.mclibre.org/consultar/htmlcss/css/css-tablas.html#empty-cells)   |empty box border   |	hide \| show   |
|[table-layout](http://www.mclibre.org/consultar/htmlcss/css/css-tablas.html#table-layout)   |	algorithm width of the table   |auto \| fixed   |

#### **Background editing** 

|Property   |Description   |Values   |
|:----------|:-------------|:----------|
|[background-color](http://www.mclibre.org/consultar/htmlcss/css/css-fondos.html#background-color)   |background color   |transparent | color   |
|[background-image](http://www.mclibre.org/consultar/htmlcss/css/css-fondos.html#background-image)   |background image   |none \| uri   |
|[background-position](http://www.mclibre.org/consultar/htmlcss/css/css-fondos.html#background-position)   |background image position   |\[ \[ left \| center \| right \| distancia \| porcentaje] [ top \| center \| bottom \| distancia \| porcentaje] \]? \| [ [ left \| center \| right ] \|\| [ top \| center \| bottom ] ]   |
|[background-repeat](http://www.mclibre.org/consultar/htmlcss/css/css-fondos.html#background-repeat)  |background repetition   |no-repeat \| repeat \| repeat-x \| repeat-y \| space(3) \| round(3)   |
|[background-size(3)](http://www.mclibre.org/consultar/htmlcss/css/css-fondos.html#background-size)   |background image size   |auto \| [ distance \| percentage ] {2} \| contain \| cover   |

### Get ready.  There is more coming!

If we were having dinner, we would say that you already ate your appetizer and are about to begin the main dish.  Now the protein is coming!!

Next chapter will be about the Boxes Model – the most annoying and disgusting chapter a developer can imagine!

You’ll learn to diagram a whole web page, similar to those you normally visit on a daily basis, but without so many ornaments.

![jonsnow](https://ucarecdn.com/526ebeef-6f43-435b-9dca-8da1708dbfe1/)













 











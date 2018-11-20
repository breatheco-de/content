---
title: "Create and Build Layouts"
subtitle: "Building layouts is the most painful process when coding HTML & CSS

Learn the CSS rules: Display, Position, Float and Flex; and place any element anywhere you want."

Cover: "https://ucarecdn.com/4cc6fa0b-2530-4052-aa7e-8dac03788ac3/"

date: "2018-01-11"
tags: ["fale"]
---

## **The Box Model**
***

Layouts and the positioning of elements are probably one of the hardest concepts in CSS; both were meant for older, less advanced and less rich websites.

![boxmodel](https://ucarecdn.com/b0e9f32d-22ba-4339-bf03-40f5c70521d3/)   

#### Layout
Let’s go back to HTML: How can I create documents with 2 columns?  We know that some scientific documents have several columns, but how can I replicate that in a website?

We need to use boxes for that.  A box is a container with a specific width and height.  Boxes tend to be rigid containers that bring order into the HTML/CSS world.  The most used tag for a box is `<div>` by far.


All the website content should be wrapped within a box (div, header, footer, etc.). Boxes are invisible by default so, in order to make them visible, you have to either set a background color or a border.  The following image shows how many invisible boxes a normal website has:

<before-after 
    before="https://ucarecdn.com/40818d0d-60c6-4ef3-a488-834f21ddebf1/" after="https://ucarecdn.com/0c89a48e-d488-4e5c-807a-fd6b9a9179f6/" />

#### Box Attributes

All the box containers must have the following attributes:

|**Atribute**   |**Description**   |
|:--------------|:-----------------|
|Content	    |Whatever elements are contained within the tag.     |
|Padding   |This is an optional empty space that exists between the content and the border.   |
|Border	   |The line enclosing the content and whatever it has inside.   |
|Background image   |The image that its shown behind the box content.   |
|Background color   |In addition to the background image, you can also have a background color behind both the content and the background image.   |
|Margin   |Optional space that can exist between this particular box and the other elements around.   |

![box-h](https://ucarecdn.com/5f854720-0e34-4c38-9b10-f4e98bca1bb6/) 

In the following example, we divided the website content into 2 different areas.  The left side will be a sidebar and the right side will have the main content of the website.

<iframe width="100%" height="300" src="//jsfiddle.net/BreatheCode/kevomsyq/2/embedded/html,css,result/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

<div align="right"><small><a href="//jsfiddle.net/BreatheCode/kevomsyq/2/embedded/html,css,result/">Click here to open demo in a new window</a></small></div>

# **Width and Height**
***

Every box has width and height.  You can set these properties to be relative to their parent content (another box or even the body), but, in some cases, we have to set their value manually.

## **Attribute Position**
***

The browser is responsible for assigning positions to all elements of a page.   However, as we know, the positions brought by the elements are quite limited and make the documents look both ugly and from the last century.

In order for a website to look like today’s websites, we have to redesign the entire page positioning.  This is achieved by using both the "position" property  and the "display" property  (which we will learn later on) so that we can replicate whatever layout imaginable by the most avid designer.

<iframe src="https://www.youtube.com/embed/hFvOgu3bcOk" frameborder="0" allowfullscreen ></iframe>

<div align="right"><small><a href="https://www.youtube.com/embed/hFvOgu3bcOk">Click here to open video in a new window</a></small></div>

|**Name**   |**Description**   |
|:----------|:-----------------|
|Static     |This does not involve any special positioning of the elements.  As a consequence, the top, left, right and bottom attributes are not taken into consideration.    |
|Relative    |Similar to absolute. The main difference here is that nobody ignores its position in the document.  The box where you apply this attribute will be located in accordance to the top, left, right and bottom attributes – based on its main (boss/principal/father) element as the starting point.    |
|Absolute    |When you tell a box that its position is absolute, you also need to define the top, bottom, left and right rules. Here, you are asking the box to ignore where it was defined inside the HTML document.  Its new position will be based on the rules (top, left, right and bottom that you specified in the CSS).    |
|Fixed     |If you fix an element, it means that it will stay in the same position during the whole web navigation.  If the user scrolls the web, the element will stay in the very same position. Fixed could be used on PopUps, menu, etc.    |

Wait!!  If you don’t get what we just explained, well…………it doesn’t really matter (at this current stage).  This is one of those moments where we need you to practice more and more.  There is no other choice . 🙁

## **Display Attribute**
***

The values of the `display` property are much more advanced than just hiding elements.  Actually, the `display` property changes the way in which a document can be visualized.

It is common to find this attribute in menus, social network activity feeds, etc.

<iframe src="https://www.youtube.com/embed/pgCLHD4FNjg" frameborder="0" allowfullscreen></iframe>

<div align="right"><small><a href="https://www.youtube.com/embed/pgCLHD4FNjg">Click here to open video in a new window</a></small></div>


|**Name**   |**Description**   |
|:----------|:-----------------|
|Inline     |This is the default value of `<strong>`, `<i>`, `<a>`, `<span>`, etc.  The elements will behave like text and will not have rigid limits (neither width, nor height).    |
|Block   |This is the default value of `<div>`, `<p>`, `<h>`, etc.  It will occupy the entire line of the web – moving the other elements above or below it.    |
|Inline-Block    |The best of both worlds.  It tries to have several containers in one same line, but each of them respecting its limits (width and height). Thanks to this element, there are pages like Pinterest that allow masonry the design.   |
|None    |Hides the element (making it invisible) and does not hold any space within the document.   |

Ok, now…to understand what we just mentioned, there is no other choice but…Practice!

## **Float Attribute**
***

Float is a simple but very useful attribute.  Float works by telling a box to move as far as possible to one side: left or right.  Once you assign the float property to an element, it will look for the best space to be accommodated – trying to coexist with the elements that surround it.

Float is very much used in blogs when you want to add images to your articles.  It is very good in these cases, because once the photo is moved to one side, the text of the article surrounds the image in a very natural way.

<iframe src="https://www.youtube.com/embed/htdLSAZ2ZH8" frameborder="0" allowfullscreen ></iframe>

<div align="right"><small><a href="https://www.youtube.com/embed/htdLSAZ2ZH8">Click here to open video in a new window</a></small></div>

|**Name**   |**Description**   |
|:----------|:-----------------|
|left	    |Move the element as far to the left as possible.   |
|right   |Move the element as far to the right as possible.   |


## **Think about UI/UX for a second**
***

It’s yoga time, let’s stop the coding and think about mankind for a minute.  How do humans act?  How do they behave?  What do they like?  Where do they click?

This course is not just about user interface and experience.  Web developers tend to underestimate this matter.  It is important to take enough time to design the website navigation flow, the menu position, UI elements, etc.  Here you have some layout examples:

![uxui](https://ucarecdn.com/5e835afe-83d1-4f6d-9d73-56b0fde9ef23/)

Some websites have great content, but, unfortunately, they also have bad layouts that limit their potential for success.  These are the top criteria to consider when choosing your layout:

+ **Responsiveness:**  Does the website needs to adapt to different screens? You can create separate websites for each device type, or mobile apps + websites, but having a responsive website is always recommended.  You don’t want to miss any traffic because the website doesn’t load properly.
+ **Device Screen Size:** Some very small screens cannot have the same amount of columns; the images may need to be a little be smaller, etc.  Eg: The iPhone SE has a very small screen and is used by a big-enough percentage of the iPhone users.  Sidebars are not a good idea on those devices.
+ **Orientation:** If you are using a tablet or mobile phone, you can rotate your screen which will require the website width to become bigger (for landscape) or smaller (for portrait).
+ **Common Sense:** This is a tricky one, but you will never know what works best until you try.  Perhaps moving a website menu from the top to the left will increase user engagement.  You must always be in constant search for "the truth".
  
# **Layout Examples:**
***

The following examples gather a big percentage of the most used layouts on the web.  Understand them well because you will probably use them throughout the rest of your life as a developer.  Sometimes you will use a mixed approach to accomplish several things at the same time.

### Centered Content
***

Facebook is like this: a centered content website has a max-width for the content.  This means that it doesn’t matter if the client computer has a 4000px width –  the website width will stop at "max-width" and the rest of the page will be white.

Here is the exact code needed to have the website content always aligned at the center of the screen:

![content](https://ucarecdn.com/6912f230-17b5-4013-943d-1069d362c2b1/)

<iframe width="100%" height="300" src="//jsfiddle.net/BreatheCode/Lwop5kdc/3/embedded/html,css,result/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

<div align="right"><small><a href="//jsfiddle.net/BreatheCode/Lwop5kdc/3/embedded/html,css,result/">Click here to open live demo in a new window</a></small></div>



### Left Sidebar Fixed
***

Left sidebars are great when you have a wide screen (landscape).  You can have a menu, some ads, newsletter signup call to action, login form, etc.  And you can still have enough space for content!  Almost every website uses a left sidebar these days, some of them include also a right sidebar at the same time.

This pre-work website has a left sidebar and is a great option for us because we want to have the syllabus permanently available for our students.

<iframe width="100%" height="300" src="//jsfiddle.net/BreatheCode/0jxvfwad/embedded/html,css,result/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

<div align="right"><small><a href="//jsfiddle.net/BreatheCode/0jxvfwad/embedded/html,css,result/">Click here to open demo in a new window</a></small></div>

### Top Menu with Left Sidebar
***

This is almost the same, but instead of having the left-sidebar as the primary menu, you will use it as complementary content.  The main menu should be at the top box because is the first thing users see when they land on the website.

<iframe width="100%" height="300" src="//jsfiddle.net/BreatheCode/aLndw6e7/5/embedded/html,css,result/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

<div align="right"><small><a href="//jsfiddle.net/BreatheCode/aLndw6e7/5/embedded/html,css,result/">Click here to open live demo in a new window</a></small></div>

## Responsive Masonry
***

Pinterest made this layout universally known.  By using this "innovative" UI, they became one of the most visited websites over the internet.  Masonry will distribute the containers in the best way possible: first trying to cover the whole row while appending (adding at the end of) more boxes to the right, and then jumping to the next row when there is no longer enough space.

Another great thing about Masonry is that each box can have its own height.   That is challenging in CSS because some older browsers don’t support that feature yet and you will have to use Javascript to patch it.

<iframe width="100%" height="300" src="//jsfiddle.net/BreatheCode/ovp1nj3s/5/embedded/html,css,result/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

<div align="right"><small><a href="//jsfiddle.net/BreatheCode/ovp1nj3s/5/embedded/html,css,result/">Click here to open demo in a new window</a></small></div>

## Popups / Modal Windows / Alerts
***

The default Javascript alert is ugly and limited [(click here to check it out)](https://www.w3schools.com/js/js_popup.asp). Nobody likes to use them, that’s why developers always have to build their own modals.

To replicate the alert behavior you have to:

+ Create a div with absolute position.
+ Place it at the center of the screen (use auto margins for that).
+ In front of the website content (use z-index rule for that).
+ Add a close button to make the div display: none; (invisible) when the user clicks on close [(you have to use JavaScript to capture the user click)](https://stackoverflow.com/questions/3177582/how-to-hide-div-by-onclick-using-javascript).

<iframe width="100%" height="300" src="//jsfiddle.net/BreatheCode/8co2hnj1/1/embedded/html,css,result/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

<div align="right"><small><a href="//jsfiddle.net/BreatheCode/8co2hnj1/1/embedded/html,css,result/">Click here to open demo in a new window</a></small></div>

# **Live Demo: Play with the Box**
***

Use the sliders on the left toolbar to change the margin, padding, border radios or any other CSS Rule available in the demo:

<iframe src="https://assets.breatheco.de/live-demos/css/box-model/" width="100%" height="465" frameborder="0" scrolling="no" style="border:0px; overflow: hidden;"></iframe>


## There is Much More to Know about Layouts
***

You will constantly have to be learning "on the go" because there is an infinite amount of combinations you can create for a website layout.  What really matters is that you fully understand the display, absolute, float and overflow rules.

Worry not, my friend.  A major part of Bootstrap is made to make layouts easier.  You will learn that in the next lesson.

![final/image](https://ucarecdn.com/de7b57db-37f6-4c98-a25c-4afcdae07d39/)


  







---
title: "Getting to know Bootstrap 4"
subtitle: "After decades of struggling, one guy had the idea of creating a basic CSS Stylesheet to be used as the base of any website, enabling everyone to do a lot of stuff in just a few lines! 

Today, it is almost stupid, and, also impossible to think about doing a website without a CSS framework like Bootstrap."

date: "2018-01-11"
tags: ["fale"]
---

## **Finally, Bootstrap!**
***

There is light at the end of the tunnel and it is NOT Chuck Norris holding a flashlight.  Finally, someone fixed CSS.  This is a library made by [Mark Otto](https://twitter.com/mdo?lang=en) and [Jacob Thornton](https://twitter.com/fat) – normal people – developers like you and me, and they did great!

These two guys working on Twitter were suffering the same problems we have been with HTML and CSS.  Fed up with the situation, they decided to build a **base CSS Sheet designed to be imported into any website**.  It makes every front-end development work 4x’s easier.

![neo](https://ucarecdn.com/13cbef45-95c3-4038-9977-d0b3871f7160/)

Besides, Bootstrap gives you a dozen of new elements that you would normally want to use but don’t actually exist in CSS+HTML: The Bootstrap components.

## Layouts: Solving the Box Model
***

One of the broken things in CSS is the way that layouts work – working with **float**, **display** and **position** sucks.  This is how Bootstrap solved it:

# Everything is now divided into Rows and Columns.

Bootstrap creators replicated the same concept that `<tables>` had, but instead of using tables, they used `<div>` (boxed containers).  They can’t create their own HTML tags because that will require a new HTML version and would make Bootstrap incompatible with current browsers.  Tags must stay the same – that’s why they decided to override the `<div>` default behaviors with classes.

```html
This is a row: <div class="row">
This is a column: <div class"col–sm–x">
```
![row](https://breatheco.de/wp-content/uploads/2017/01/Screen-Shot-2017-01-18-at-11.34.04-PM-1024x490.png)

Bootstrap has divided the width of the screen in `12 slots` – each of them with 8,33% of the total width of the row.  The size of 1 column, can be between 1 and 12 slots.

On the flip side, columns were made to live within the rows (just like what happens between `<td>` and `<tr>`).   You always need to open a row before opening a column.  All columns in a row must always add up to a maximum of 12 slots.

![box](https://ucarecdn.com/f50388c2-f5ed-4dc8-be8c-863c63e75cdc/)

## Our first Layout example:
***

Just like we did in the Layout chapter of the course, let’s create one page with 2 big sections: one sidebar on the right and one main content on the left.

<iframe width="100%" height="300" src="//jsfiddle.net/BreatheCode/th7uLrow/4/embedded/html,css,result/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

## Bootstrap is 100% Responsive
***

It’s very easy to decide how your website will render in different screen sizes; when you add each column into the rows you need to assign a class with the following format:

```html
<div class="col–md–x">
```

|**Col**   |**md**   |**x**
|:---------|:--------|:----|
|Means that this element should behave like a Bootstrap column.   |Means that I am specifying only for the devices with a "medium" sized screen.   |Specifies how many slots I want this column to take (remember you can take a max of 12 slots per row).   |

[[info]]
| :point_up:Bootstrap device sizes:   |Phones   |Big-phone/small-tablet   |Tablets   |Desktops   |Extra-large desktops   |
|:----------|:---------------|:-------------|:-----------|:------------|:---------|
| &nbsp;           |Nothing    |sm       |md       |lg      |xl        |

[[warning]]
| :point_up:Note: if you don’t specify the screen size (ex. by using 'sm', 'md', or 'xl'), the website will be rendered for mobile phones by default.

## Defining Mobile, Tablet, and Desktop at the same time
***

We are going to set the layout (using the sm, md and lg column classes) for  two rows in all the devices at the same time:

![row-2](https://ucarecdn.com/3667ef72-38dc-46da-938a-31088169e2cf/)

```html
<!-- Stack the columns on mobile by making one full-width and the other half-width --> 
<div class="row">
  <div class="col-12 col-md-8">.col-12 .col-md-8</div>
  <div class="col-6 col-md-4">.col-6 .col-md-4</div>
</div>

<!-- Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop --> 
<div class="row">
  <div class="col-6 col-md-4">.col-6 .col-md-4</div>
  <div class="col-6 col-md-4">.col-6 .col-md-4</div>
  <div class="col-6 col-md-4">.col-6 .col-md-4</div>
</div>

<!-- Columns are always 50% wide, on mobile and desktop --> 
<div class="row">
  <div class="col-6">.col-6</div>
  <div class="col-6">.col-6</div>
</div>
```

## Basic Bootstrap Skeleton
***

We already know the basic HTML5 skeleton any website needs to have.  Now you just have to add a few lines in your skeleton to make it "Bootstrap compatible":

```html
<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">

    <title>Hello, world!</title>
  </head>
  <body>
    <h1>Hello, world!</h1>

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
  </body>
</html>
```

Remember, Bootstrap is just a stylesheet.  That’s why it is very simple to include in your website.  You use the `<link>` tag to include the styles, and, optionally, use the javascript `<script>` tag to include the Bootstrap Javascript files.

The Bootstrap Javascript functionality requires the jQuery and Popper Javascript libraries to be included first.  You don’t need to know the details about this yet.  Just include the JS libraries using the script tag and later you will understand.

[[info]]
|:link: Here you can find some [great Bootstrap files to get you started.](https://getbootstrap.com/docs/4.0/getting-started/introduction/)

## Bootstrap Components
***

HTML is so basic, it only has a few tags – we know that already.  But when you browse the web today, you see a different thing… websites today have menus, icons, load-bars, navbars, labels, etc.  Where are those tags?  None of those tags are defined in HTML!

Every developer has to fake these additional elements every time they create a new website.  They have to do everything from scratch, and it takes a lot of time.

When you import Bootstrap into your website, you will have a new set of components at your disposal.  This is just a small part of those elements:

![modal-header](https://ucarecdn.com/d715b362-60ec-4d0b-89da-dca945c44bd4/)


### These are the most Important and Used Bootstrap Components:
***

#### **The NavBar**

This is so popular that it’s in the menu of 99% of all websites.  It normally has the logo of the company and a series of links – depending on each website’s business logic.

Here is an example of how a NavBar may look on a website:

![instagram](https://ucarecdn.com/fea2f19b-aee1-4e1b-9426-7b6c51867b47/)

[[info]]
| :link:[**Read more about the NavBar here**](https://getbootstrap.com/docs/4.0/components/navbar/)

```html
<nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container">
                <a class="navbar-brand" href="#">Website Brand</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">
                                <a class="btn btn-success">Create a new post</a>
                            </a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Settings
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <a class="dropdown-item" href="#">Action</a>
                                <a class="dropdown-item" href="#">Another action</a>
                                <a class="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
```

#### **The Card**

This is probably the most used Bootstrap component, every website has a few card because it is ideal to list items in a beautiful way. Some examples of the Card used can be:

+ The "team" section of a website where you list the different employees.
+ The typical Pinterest wall.
+ Any social media feed like Instagram, Facebook, twitter, etc.

Here is an example of how a "The Card" may look on a website:

![thecard](https://ucarecdn.com/e9b6edd1-b6f6-47fc-9700-17d374f9755d/)

[[info]]
| :link: [**Read more about the card here**](https://getbootstrap.com/docs/4.0/components/card/)

```html
<div class="card" style="width: 20rem;">
  <img class="card-img-top" src="..." alt="Card image cap">
  <div class="card-body">
    <h4 class="card-title">Card title</h4>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
```



#### **The Modal**

Everyone hates a modal, it is super annoying, always asking you to subscribe to a newsletter! 🙂

Here is how a modal looks by default on Bootstrap.

![modal-t](https://ucarecdn.com/ccc9a172-fbc2-4760-b5d1-b8c77e6fd2fe/)

[[info]]
| :link:[**Read more about modal here**](https://getbootstrap.com/docs/4.0/components/modal/)

```html
div class="modal" tabindex="-1" role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p>Modal body text goes here.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary">Save changes</button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
```


[[warning]]
| :point_up:Important! The Modal needs Javascript in order to work. Remember to include the three Javascript files that are needed in a typical Bootstrap Skeleton: jQuery, Popper and Bootstrap.js

## What you really need to know about Bootstrap
***

Bootstrap official documentation is amazing!!  We don’t need to start copying and pasting all their posts.  Please visit the following and focus on reading these topics:

+ [The grid system.](https://getbootstrap.com/docs/4.1/layout/grid/)
+ [Styling Forms.](https://getbootstrap.com/docs/4.1/components/forms/)
+ [List of components available to use on your website.](https://getbootstrap.com/docs/4.1/components/alerts/)
+ [Utilities or Helper classes:](https://getbootstrap.com/docs/4.1/utilities/borders/) Very useful and constantly used classes to do stuff like centering the text, centering a column or container, adding a background, etc.



## Earn RE2PECT.
***

Success does not come overnight.  This is your first real achievement.  Let me ask you, do you feel capable using HTML, CSS, Layouts and Bootstrap?  Don’t lie to yourself.

No more lessons on these topics – it is time to deliver.  Your attention must be focused on the class projects.  Remember to live by the developer values.  Chill.

<iframe src="https://www.youtube.com/embed/RqHNyyvfafE" frameborder="0" allowfullscreen></iframe>





















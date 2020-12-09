---
title: "How to use font awesome"
subtitle: "Font Awesome is one of the most popular free icon libraries in the world of front end development"
thumb: "https://i.imgur.com/QKASHj1.png"
textColor: "white"
date: "2020-10-19T16:36:30+00:00"
tags: ["font-awesome"]
status: "published"
authors: ["alesanchezr"]
cover_local: "../../assets/images/4cc6fa0b-2530-4052-aa7e-8dac03788ac3.png"

---

## Installing Font Awesome

There are many ways of installing and using font awesome. Please think about how your project its setup so that you can pick the right installation procedure:

1. Plain HTML/CSS: No webpack or bundles, very simple websites.
3. Vanilla.js: Using webpack but without any framework
2. React.js

## Using Font Awesome in Plain HTML/CSS

If you are working with plain CSS and HTML files, just paste this `<link>` tag before the `</head>` **CLOSING** tag of your html file:
```html
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous">
```
> Note: you can see that it is just another CSS stylesheet.

After adding the `<link>` tag you can start adding icons using `<i>` tags like this:
```html
<i class="fas fa-pencil-alt"></i>
```
You have to replace the class names with the ones that correspond with the icon that you pick from: [this list of icons](https://fontawesome.com/icons?d=gallery), for example:

| Icon name | Corresponding html tag |
| ---- | ---- |
| faPencilAlt | `<i class="fas fa-pencil-alt"></i>` |
| faCog | `<i class="fas fa-cog"></i>` |

## Using Font Awesome with Webpack (Vanilla js)

You can still add the same `<link>` into your index.html file and you will still be able to use `<i>` tags like explained on the previous section.

Make sure you find the index.html on your project, open it and add the link tag into the header.

## Using Font Awesome in React.js

Font-awesome is divided in several npm packages, you will have to install all of them just to make sure (unless you know what you are doing), type the following in your command line:

```bash
$ npm i @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons --save
```

Now go to the react component or page where you want to add the icons to and import font awesome AND also the icon:

For example, here we are importing the [coffe icon](https://fontawesome.com/icons/coffee?style=solid):

```js
// first import the core package
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// then import the icon
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
```

Finally add the `<FontAwesomeIcon icon={faCoffee} />` tag anywhere inside the return statement of your component (the render method):

```jsx
const ExampleComponent = () => {

    return <div>
        {/* Only the this line 65 matters, this is the icon */}
        <FontAwesomeIcon icon={faCoffee} />;    
    </div>
}

```

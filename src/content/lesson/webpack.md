---
title: "Webpack"
subtitle: "For senior developers, it is imposible to think about developing a JS application without Webpack. Thanks to Webpack, developing front-end feels good and professional for the first time."
date: "2018-08-11"
tags: ["fale"]
---

By now, you have probably felt how disorganized and difficult working with Javascript can be.  You have to remember in what order to include the script tags in your HTML to properly setup jQuery, Popper, Font Awesome, Bootstrap CSS files, Bootstrap JS files, your own CSS files, your own JS files, etc!  The list only gets bigger and bigger from here.

### Thank God we have Webpack!

Webpack is one of those things you hate the first few times and then you cannot live without for the rest of your life.  For the first time coding, Javascript actually feels amazing, clean and professional!

### But what is Webpack?

Webpack is this thing that grabs all your application pieces (Files, Images, Fonts, JS, CSS, HTML, etc.) and bundles them into one big file.  That way you can split your application into many parts and then combine them at the end of the coding process.

Then, the browser will be able to request (GET) that one file and display/render the whole website… that’s it!  It’s very similar to what happens with the “.exe” files in windows – all of your application is inside the .exe file, and then you just double-click it.

### But why do I care about Bundling?

Basically, there is no way to maintain a big application if you don’t split it into several smaller files (divide and conquer).

But that is only the beginning, because, now that Webpack has control over the whole bundle process, it also has access to your code and it can improve it in so many ways!  For example:

+ Now you don’t have to care about browser compatibility, AND Webpack will translate your code to make it compatible with any version.
+ It can minify and compress your code making your application up to 80% smaller.
+ It lets you use better non-official versions of some of the languages (like SASS, HAML or Typescript) that are amazing but not supported by browsers.
+ It integrates with NPM: a huge database of free libraries available for any developer.
+ A ton more.
  
The list is endless – we better continue or we’ll be here all day 🙂

## Here is what you need to know to start using Webpack right now   
***

### 1. Webpack is a Javascript library, meaning you have to install it using the NPM package manager.

**If you don’t have a package.json** file in your application root, then you probably have not even started your NPM application.   Start by typing the following in your command line:

```bash 
npm init -y
```

Once you have your package.json you can install the Webpack library by doing:

```bash
npm install --save-dev webpack
```

That is it!  You finally have Webpack but now we have to specify how it should build our application (create the bundle).

### 2. Webpack has one big file called “webpack.config.js” that you have to create and maintain in order to be able to control your bundling process.

Create a webpack.config.js file in your root directory and fill it with the following base code:

```javascript
var path = require('path');

module.exports = {
  entry: './foo.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'foo.bundle.js'
  }
};
```

The only thing that Webpack needs from you is specifying the export property of the model object.

As you can see, the module object is not declared anywhere, but don’t worry about that, it’s something that exists magically on every npm application (like the one we have just created).

Your job is to specify at least the following properties inside of the module.exports object:


|entry     |Here you have to specify the path to your “index.js”, the first Javascript file that will run when your website is loaded. Of course, you have to create that index.js file as well later.       |
|:---------------|:------------------|
|output       |Here you have to specify two things:<br><br><li>**path:**  The folder where the bundle will be created, it’s normally called “dist” or “public.”  All your application public files will be here.</li><br><li>**filename:**  The name of your bundle file created by Webpack that will contain all the code.</li>      |

### 3. In order to include other files rather than JS, we have to install “loaders” – specific npm libraries – and update your webpack.config.js

For example, if we want to include CSS files in our bundle, we have to use the following command inside our index.js file:

```javascript
import css from 'file.css';

//or 

require('file.css');
```

Webpack will issue an error because it does not know how to work with CSS by default.  We must install the [Webpack style loader](https://github.com/webpack-contrib/style-loader) and [Webpack CSS loader](https://github.com/webpack-contrib/css-loader) plugins by using the following command:

```javascript
npm install style-loader css-loader --save-dev
```

Now that you have the libraries, you need to tell Webpack how to use them in the webpack.config.js .  For example, we can update the file with the following:

```javascript
var path = require('path');

module.exports = {
  entry: './foo.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'foo.bundle.js'
  },
  rules: [
    {
      test: /\.css$/,
      use: [ 'style-loader', 'css-loader' ]
    }
  ]
};
```

Above, we are telling Webpack that the css-loader will load any imported “.css” file into our bundle and the style-loader will know how to include it depending on the size (using a style tag probably).

### 4.4) You can install other loaders or amazing plugins

From here on, it’s up to you – just keep installing plugins and learning how to configure them in your webpack.config.js file. [Here is a more detailed list of awesome plugins you can use:](https://github.com/webpack-contrib/awesome-webpack)

## Basic Configuration
***

You don’t have to be configuring Webpack all the time.  You can include the configuration file in your repository – that way everything is synced between all the environments and developers.  You can also save some webpack.config.js files as templates for future projects.

You can also find and download online configurations that are already completed and fine-tuned for various different application architectures that are out there: React, Angular, Vanilla JS, WordPress, etc.

[[info]]
|:link: We have prepared a GIT repository with several configurations depending on your needs – [click here to review the repository and download them](https://github.com/alesanchezr/webpack-tutorial)














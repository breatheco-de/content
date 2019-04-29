---
title: "Routing our Views with React Router"
subtitle: "Create your application structure and connect your Views with React Router"
cover: "https://ucarecdn.com/8c053abc-2f09-47e9-b586-751538d180c4/"
textColor: "white"
date: "2018-11-13"
tags: ["reactjs","react router"]
---

## What’s React Router?
***

React Router a JS library available thru NPM that helps mainly with 2 problems:

+ Conditional display for React components based on the current website URL.
+ Web application navigation without having to refresh.

```bash
$ npm install --save react-router
```

## Why do I need this?
***

Stop reading if you are not building entire applications using React – you don’t need React-Router for single page applications or small components.

For the rest of us building real web applications, we need to connect several views (React components) into one big application. That process is called "routing."

For example, we need the following application URLs to match the following components:

![react router](https://ucarecdn.com/6fd2b44b-598b-4ddb-85ba-9c32b086127f/-/resize/800x/)


## Defining your Application Routes
***

What pages/views do you want your app to have? You can always start with the basic ones:

+ Home: What your public users view when they land in yourdomain.com
+ Login/Signup/Forgot: A login form and signup form and the password remind form.
+ Private: What your private users view right after they login.
The rest of the pages depend on your application and on how you want your users to navigate through your site.

![react router](https://ucarecdn.com/205cd2de-dfae-4712-a5e4-1c922994e60d/-/resize/700x/)

## Mapping your Views to URLs
***

This is the sitemap for any typical e-commerce website:


![react router](https://ucarecdn.com/9021be43-57ae-4667-8c1a-435b8521ce59/-/resize/600x/)

## Coding your Application Routes
***

Once you have finished mapping your application views with URLs you can start coding everything, and that is when React-Router comes in!

The best practice is always creating one component called `<Layout />` that will take care of routing the user to the specific views that it should see, depending on each of the particular URLs.

This is an example of the same e-commerce sitemap but now using React Router v4:

```jsx{numberLines: true}
//this component Layout will take care of routing the URLs with all my application views 
export class Layout extends Flux.View {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/home" component={Home} />
                            <Route exact path="/log-in" component={Login} />
                            <Route exact path="/sign-up" component={Signup} />
                            <Route exact path="/remind" component={Remind} />
                            <Route exact path="/products" component={Products} />
                            <Route exact path="/category/:category_id" component={Category} />
                            <Route exact path="/product/:product_id" component={SingleProduct} />
                            <Route exact path="/checkout" component={Checkout} />
                            <Route exact path="/profile/:user_id" component={Profile} />
                            <Route render={() => <h1>Not found!</h1>} />
                        </Switch>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}
```

There are 3 components to understand here:

+ `<BrowserRouter>:` Every time your open a new BrowserRouter tag you are basically telling React that everything that is in between must be conditionally rendered based on particular <Routes> (URLs).
+ `<Switch>:` Works similar to the switch statement in Javascript but for Routes… It tells React that the only first <Route> that matches the URL will be displayed.
+ `<Route>:` It’s the way that React-Router has to map routes with components, for example:

```jsx
<Route exact path="/sign-up" component={Signup} />
```

his route is telling React that when the URL matches "sign-up," the component Signup should display.

## Anchors `<a>` are now a Problem
***

Anchors take users to other websites or URLs – and that is amazing for simple plain HTML+JS – but, now we DON’T want our users to be taken to other websites or URLs.  We want them to remain in the same tab but loading the next page without having to refresh.  We have two possible ways of doing that:

### 1.  Using a `<Link>` tag:

React Router created a component that we can use instead of `<a>`

```jsx
<Link to="/login">Take me to login</Link>
```

### 2. Using this.props.history.push(‘new/url/here’);

   React Router always passes each view a prop called "history" that contains a lot of useful stuff to use when routing users.  One of the many useful utilities is the "push" function that basically redirects the user to the given path.

```jsx
<button onClick={() => this.props.history.push("/login")}>Take me to login</button>
```

## Live Example:
***

Here is a live example using everything that we’ve learn during this reading, please click and play to understand it, learn it and replicate it:

<iframe src="https://codesandbox.io/embed/0okp853rxn?autoresize=1&amp;module=%2Fsrc%2FLayout.jsx&amp;moduleview=1" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

<div align="right"><small><a href="https://codesandbox.io/embed/0okp853rxn?autoresize=1&amp;module=%2Fsrc%2FLayout.jsx&amp;moduleview=1">Click here to open demo in a new window</a></small></div>










---
subtitle: "The Context API is the most recent tool that the React.js Team has made available to handle your application data flow. It is the perfect companion for building small to mid-sized applications"
title: "Working with the Context API"
cover: "https://ucarecdn.com/4cc6fa0b-2530-4052-aa7e-8dac03788ac3/"
textColor: "white"
date: "2018-12-03"
tags: ["reactjs"]

---

## Don't be scared about "The Context API"

The Context API is one of the easiest ways the React.js team has proposed to control your data in small to mid-sized apps.

### Life before the Context API was harder

People say that React.js makes the easy stuff hard and the hard stuff easy. I love that saying, it's so true :sweat: 

Think about it:
1. Why is it so hard to share some data between the entire application?
2. Why is it so hard to pass data between components?

The Context API is here to solve some of those conundrums:

1. Avoid "Property Hell": If you have worked with react already you probably have felt the frustration of passing properties all over your application, we call it "property hell". 
2. Have a centralized global application state: Instead of being limited to local states on views, you can now share data on one central store that is quickly available from any javascript file, view or component.
3. Data propagation and re-rendering: If the data changes anytime, your entire application will re-render and update the UI with the new values.

## How does the Context API work?

The concept behind it is very simple: The is one big producer and a bunch of consumers. Every time the producer data changes, all the consumers get notified. You can think about it very similar to how TV Networks work. One TV channel emits a data signal and all TV antennas get notified, receive the new content and render the image on the televisions. 

![Context API Explanation](https://ucarecdn.com/72fe5361-5b2a-460f-8c2a-2d376616abf6/)

### Coding Example

```jsx
const ThemeContext = React.createContext('light')
class ThemeProvider extends React.Component {
  state = {theme: 'light'}
  render() {
    return (
      <ThemeContext.Provider value={this.state.theme}>
        {this.props.children}
      </ThemeContext.Provider>
    )
  }
}
class App extends React.Component {
  render() {
    return (
      <ThemeProvider>
        <ThemeContext.Consumer>
          {val => <div>{val}</div>}
        </ThemeContext.Consumer>
      </ThemeProvider>
    )
  }
}
```


<!--stackedit_data:
eyJoaXN0b3J5IjpbMTczNjg5MDcxOSwtMTU0OTI3NzcyNiw1Nz
U1NjIxNzksLTE2NzMwODM4NjZdfQ==
-->
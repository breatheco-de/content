---
title: "React Native Fundamentals: CLI Setup, Structure, and Essential Components"
description: "Comprehensive guide to getting started with React Native CLI; set up your development environment for iOS and Android, master the fundamental components (View, Text, Image, ScrollView), and the props system to build cross-platform mobile apps from scratch."
author: "Rosinni"
tags:
    - React Native
    - React Native CLI
    - Mobile Development
    - Components
    - Props
    - iOS
    - Android
    - JavaScript
    - TypeScript
---

Welcome to the world of cross-platform mobile development. React Native lets you write code once and run it on both iOS and Android using JavaScript and React. Unlike other solutions, React Native compiles to real native components, ensuring performance close to pure native development. This means that when you use a `View` component in React Native, it renders as a native `UIView` on iOS and as a native `android.view.View` on Android. You’re not creating a web app wrapped in a browser, but a truly native app written in JavaScript.

## Setting Up the Environment with React Native CLI

React Native CLI gives you full control over your mobile app. You can directly access native configurations for Android and iOS, integrate custom native modules, and have complete flexibility over how your app is built. This tool is ideal when you need to integrate React Native into existing native apps, create custom native modules, have full control over the build process, or work in enterprise environments with specific security and customization requirements.

Before you start coding, you need to prepare your development environment. This process varies depending on your operating system and the platform you want to develop for. The initial setup is probably the most complex part of working with React Native CLI, but once completed, daily development is much smoother.

### General Prerequisites

Regardless of your operating system, you’ll need **Node.js and npm**. React Native uses **Node.js** to run JavaScript on your development machine and **npm** to manage all project dependencies. You need version `18` or higher. If you don’t have it installed, you can download it from the official **Node.js** website.

In addition to Node, it’s highly recommended to install `Watchman` if you’re on Mac or Linux. `Watchman` is a tool developed by Facebook that watches for file system changes, making the React Native development server respond much faster when you modify your files. On Mac, you can easily install it with **Homebrew**:

```bash
brew install watchman
```

### Android Development Setup

If you’re developing for Android, you’ll need to set up the Android environment regardless of whether you’re on Mac, Windows, or Linux. The first step is to install the **Java Development Kit**. React Native specifically requires `Java 17`, and the easiest way is to use OpenJDK. On Mac, you can install it with Homebrew:

```bash
brew install openjdk@17
```

On Windows, you can download the installer from **Adoptium**, making sure to select `version 17`.

The next step is to install Android Studio, which includes the **Android SDK**, all necessary build tools, and an emulator to test your apps without a physical device. During Android Studio installation, it’s crucial to check the options to install the Android SDK, Android SDK Platform, and Android Virtual Device. These tools are essential for development, and without them, you won’t be able to compile or run Android apps.

Once Android Studio is installed, you need to configure the Android SDK. Open Android Studio and go to `Settings` (or Preferences on Mac), then navigate to `Appearance & Behavior`, `System Settings`, and finally `Android SDK`. In the `SDK Platforms` tab, make sure you have at least Android `13.0` (Tiramisu) or higher installed. In the `SDK Tools` tab, verify that Android SDK Build-Tools, Android SDK Platform-Tools, and Android Emulator are installed.

The last step, and one of the most important, is to configure environment variables. React Native needs to know where the **Android SDK** is installed to compile your apps. On Mac or Linux, you need to add these variables to your shell configuration file. If you use `zsh` (the default shell on modern Macs), edit the `~/.zshrc` file and add the following lines:

```bash
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

After editing the file, run the following command to apply the changes:

```bash
source ~/.zshrc
```

On Windows, the process is slightly different. Open System Settings, go to Advanced System Settings, and click on Environment Variables. Create a new user variable called `ANDROID_HOME` with the value pointing to your SDK, typically at `C:\Users\YOUR_USER\AppData\Local\Android\Sdk`. Then edit the Path variable and add two new entries: `%ANDROID_HOME%\platform-tools` and `%ANDROID_HOME%\emulator`.

### iOS Development Setup

iOS development has a fundamental requirement: you need a Mac. Apple does not allow iOS app development on Windows or Linux because Xcode, its development suite, is only available on macOS. If you have a Mac, the first step is to install **Xcode** from the Mac App Store. Note that Xcode is a fairly large download, taking up more than 40GB of disk space, so make sure you have enough free space.

Once Xcode is installed, open it for the first time to complete the installation of additional components. Then go to `Preferences`, select `Locations`, and make sure `Command Line Tools` is selected in the dropdown. This installs command line tools that React Native needs to compile iOS apps from the terminal.

You also need to explicitly install the **Command Line Tools** by running the following command in your terminal:

```bash
xcode-select --install
```

Finally, you need to install **CocoaPods**, which is the dependency manager for iOS. CocoaPods is installed as a Ruby gem using the following command:

```bash
sudo gem install cocoapods
```

React Native uses **CocoaPods** to manage native iOS dependencies, and every time you install a new library with native code, you’ll need to run `pod install` in your project’s ios folder.

### Verifying the Installation

React Native includes a handy tool called "doctor" that can check your setup and detect common problems. You can run it with the following command:

```bash
npx react-native doctor
```

This command will review your installation and tell you if anything is missing or if there are configuration issues you need to resolve before you start developing.

## Basic React Native Components and Props

React Native provides a set of fundamental components that are the building blocks of any mobile app. Unlike web development where you use HTML elements like divs, spans, and paragraphs, in React Native you work with components specifically designed for mobile interfaces that translate directly to native iOS and Android components. Let’s look at the four most essential components you need to master: `View` for layout structure, `Text` for displaying textual content, `Image` for visual resources, and `ScrollView` for scrollable content.

### 1. View – The Fundamental Container

View is the most basic and essential component in React Native. It’s the mobile equivalent of a `div` in HTML, but specifically designed for native apps. Every visual element in your app will be contained within one or more View components, either directly or nested at multiple levels to create complex structures.

```tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';

function MyComponent() {
    return (
        <View style={styles.container}>
            {/* Other components go here */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        padding: 20,
    },
});

export default MyComponent;
```

Under the hood, View translates to real native components on each platform. On iOS it becomes a `UIView`, and on Android an `android.view.View`. This means you get the native performance and look of each platform without having to write platform-specific code. `View` can handle touches and gestures via React Native’s responder system, though for more complex interactions you’ll usually use specialized components like `TouchableOpacity` or the React Native Gesture Handler system.

The most common props for View include `style` for visual styles and layout properties, `onStartShouldSetResponder` to control how the component responds to touch events, and accessibility props like `accessible`, `accessibilityLabel`, and `accessibilityRole` which are essential for making your app usable by people with visual or motor disabilities.

A common practice is to use View to create visual separators, containers with shadows, or elements with rounded borders. For example, many apps use View with `borderRadius`, `shadowColor`, and `elevation` to create cards with depth effects that look modern and attractive.

### 2. Text – Displaying Textual Content

In React Native there’s a strict rule: **all text must be inside a `Text` component**. You can’t put string text directly inside a `View` or any other component. If you try, you’ll get an error. This restriction may seem inconvenient at first, but it exists for technical reasons related to how React Native optimizes text rendering on each native platform.

```tsx
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

function MyText() {
    return (
        <View>
            <Text style={styles.title}>
                Hello, React Native!
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 12,
    },
});
```

Text has capabilities that make it very versatile. One of the most useful is nesting: you can put a Text component inside another Text to apply different styles to different parts of the same text. This is perfect for highlighting specific words, creating inline links, or combining different font weights in a single sentence.

```tsx
<Text style={styles.paragraph}>
    This text is normal, but{' '}
    <Text style={styles.bold}>this part is bold</Text>
    {' '}and here is{' '}
    <Text style={styles.link}>a link</Text>.
</Text>
```

Note the use of `{' '}` to add spaces between nested texts. React Native does not preserve whitespace the same way HTML does, so if you want spaces between nested texts, you need to add them explicitly. This is a small but important detail that can cause frustration if you’re not aware of it.

The Text component can be interactive via the `onPress` prop, allowing you to create touchable text without wrapping it in a button. This is perfect for implementing links, expandable terms and conditions, or any text that needs to respond to user touches. When you use `onPress` on a Text, it automatically gets visual feedback when touched, showing a slight opacity change.

If you need the user to be able to select and copy text, set `selectable={true}`. This is especially important for phone numbers, addresses, confirmation codes, or any information the user might need to copy to another app.

### 3. Image – Displaying Visual Resources

`Image` is the component you use to display any type of image in your app. It can load images from three main sources: local files bundled with your app, remote URLs downloaded from the internet, or data in `base64` format. Each source has its own use cases, advantages, and performance considerations.

### Local Images

Local images are files you include in your project and that are bundled with your app. They are loaded using the `require()` function:

```tsx
import React from 'react';
import { Image, StyleSheet } from 'react-native';

function LocalLogo() {
    return (
        <Image
            source={require('./assets/logo.png')}
        />
    );
}
```

Local images have several important advantages. They are available immediately without needing an internet connection, which improves user experience and app reliability. React Native automatically optimizes them during the build process and handles different screen densities. If you have `logo.png`, `logo@2x.png`, and `logo@3x.png` in your assets folder, React Native will automatically select the appropriate version based on the device’s screen density.

### Remote Images

For images downloaded from the internet, use an object with the `uri` property:

```tsx
<Image
    source={{ uri: 'https://example.com/profile-photo.jpg' }}
    style={styles.profilePhoto}
/>
```

When working with remote images, it’s essential to specify dimensions explicitly in the style. Unlike local images where React Native can infer dimensions from the file, remote images won’t display anything unless you specify `width` and `height`. This is because React Native needs to know how much space to reserve before the image is downloaded.

### 4. ScrollView – Scrollable Content

In mobile apps, it’s rare for all your content to fit on a single screen without scrolling. ScrollView is the component that makes it possible to display content larger than the available space, allowing the user to scroll vertically or horizontally to see everything.

```tsx
import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

function ContentScreen() {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.section}>
                <Text style={styles.title}>Section 1</Text>
                <Text style={styles.paragraph}>
                    Content of the first section...
                </Text>
            </View>
            
            <View style={styles.section}>
                <Text style={styles.title}>Section 2</Text>
                <Text style={styles.paragraph}>
                    Content of the second section...
                </Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    section: {
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 12,
    },
    paragraph: {
        fontSize: 16,
        lineHeight: 24,
        color: '#666',
    },
});
```

An important feature of ScrollView is that it renders all its children immediately, even those not visible on screen. This is fine for relatively small content, say less than 100 items or screens that aren’t too long. However, for long lists with hundreds or thousands of items, `ScrollView` will cause serious performance problems because it tries to render everything at once.

For long lists, React Native provides specialized components called `FlatList` and `SectionList`. These components only render the items visible on screen plus a small **buffer**, and dynamically create and destroy items as the user scrolls. This is known as "virtualization" or "windowing", and is essential for maintaining good performance with large datasets.

## Understanding Props

Props are the fundamental mechanism for communication between components in React Native. They are how you pass data and configuration from a parent component to its children. The name "props" comes from "properties", and conceptually they are similar to HTML attributes, but much more powerful because they can contain any JavaScript data: `strings`, `numbers`, `objects`, `arrays`, and even `functions`.

### Unidirectional Data Flow

A key feature of props is that they are immutable from the perspective of the receiving component. A child component cannot modify its props; it can only read them and render based on them. If a child needs to communicate something to the parent, it does so via functions that the parent passes as props. This unidirectional data flow pattern makes your code more predictable and easier to debug.

```tsx
// Child component RECEIVING props
function Greeting({ name, age }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Hello, {name}</Text>
            <Text style={styles.subtitle}>You are {age} years old</Text>
        </View>
    );
}

// Parent component SENDING props
function App() {
    return (
        <View>
            <Greeting name="Ana" age={28} />
            <Greeting name="Carlos" age={35} />
        </View>
    );
}
```

In this example, the App component is reusing the same Greeting component twice with different props. This is the power of `props`: they let you create generic, reusable components that behave differently depending on the data they receive.

### Typing Props with TypeScript

Using TypeScript to define your prop types makes your code much more robust and maintainable. TypeScript lets you specify exactly what type of data each prop expects, whether it’s required or optional, and your editor will give you smart autocomplete and catch errors before running the code.

```tsx
interface GreetingProps {
    name: string;
    age: number;
    isVIP?: boolean;
    profession?: string;
}

function Greeting({ 
    name, 
    age, 
    isVIP = false,
    profession 
}: GreetingProps) {
    return (
        <View style={styles.card}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.age}>{age} years old</Text>
            {profession && (
                <Text style={styles.profession}>{profession}</Text>
            )}
            {isVIP && (
                <View style={styles.badgeVIP}>
                    <Text style={styles.badgeText}>⭐ VIP</Text>
                </View>
            )}
        </View>
    );
}
```

In this example, TypeScript guarantees that `name` will always be a string and `age` will always be a number. The props `isVIP` and `profession` are optional thanks to the `?`, meaning the component will work whether you pass them or not. We also gave a default value of `false` to `isVIP` using destructuring, so if it’s not passed explicitly, it will always be false.

The benefits of typing your props are huge. Your editor will show an error immediately if you try to pass a string where a number is expected, or if you forget a required prop. When you use the component, you’ll get autocomplete for the available props. And when someone else (or you in the future) reads the code, they’ll know exactly what props the component accepts without needing to read the entire implementation.

### Style Props

The `style` prop is special in React Native. It accepts three different formats, each with its own use cases. You can pass a style object directly, though this is not recommended in production because React Native creates a new object on every render, which can affect performance. The recommended way is to use `StyleSheet.create()`, which optimizes styles by assigning them unique identifiers that React Native can process more efficiently.

```tsx
// ❌ Avoid: inline style (creates new object on every render)
<View style={{ padding: 20, backgroundColor: 'blue' }} />

// ✅ Recommended: use StyleSheet
<View style={styles.container} />

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: 'blue',
    },
});
```

You can also pass an array of styles, where later styles override duplicate properties from earlier ones. This is extremely useful for conditional styles:

```tsx
<View style={[
    styles.button,
    isPrimary && styles.buttonPrimary,
    isDisabled && styles.buttonDisabled,
    { marginTop: extraSpace }
]} />
```

In this example, the View always has the styles from `styles.button`. If `isPrimary` is true, it also applies `styles.buttonPrimary`. If `isDisabled` is true, it applies `styles.buttonDisabled`. And finally, it can have a dynamic top margin based on the `extraSpace` variable. When a condition is false, that style is simply ignored.

This array-of-styles pattern is very common in React Native and lets you create very flexible components that can visually adapt to different states or contexts without complicated logic or multiple duplicate components.

### Function Props

Functions are first-class props in React Native, meaning you can pass them like any other value. This is fundamental for handling user events and interactions, and is the main mechanism for communication from a child to its parent.

```tsx
interface CustomButtonProps {
    title: string;
    onPress: () => void;
    icon?: string;
    disabled?: boolean;
}

function CustomButton({ 
    title, 
    onPress, 
    icon,
    disabled = false 
}: CustomButtonProps) {
    return (
        <TouchableOpacity
            onPress={onPress}
            disabled={disabled}
            style={[
                styles.button,
                disabled && styles.buttonDisabled
            ]}
        >
            {icon && <Text style={styles.icon}>{icon}</Text>}
            <Text style={[
                styles.buttonText,
                disabled && styles.textDisabled
            ]}>
                {title}
            </Text>
        </TouchableOpacity>
    );
}

// Usage:
function App() {
    const handleClick = () => {
        console.log('Button pressed!');
        // Your logic here
    };

    return (
        <View>
            <CustomButton
                title="Save"
                onPress={handleClick}
                icon="💾"
            />
        </View>
    );
}
```

This pattern of passing functions as props is extremely common. The child component (CustomButton) doesn’t need to know what the function does; it just needs to know when to call it (when the user presses the button). This keeps your components decoupled and reusable. The same CustomButton can be used to save data, submit a form, navigate to another screen, or any other action, simply by passing different functions to `onPress`.

### Children Props

The `children` prop is special and automatic in React. It contains any content you place between your component’s opening and closing tags. It’s the standard way to create components that act as containers or wrappers.

```tsx
interface CardProps {
    children: React.ReactNode;
    title: string;
    backgroundColor?: string;
}

function Card({ 
    children, 
    title,
    backgroundColor = '#fff'
}: CardProps) {
    return (
        <View style={[styles.card, { backgroundColor }]}>
            <View style={styles.header}>
                <Text style={styles.title}>{title}</Text>
            </View>
            <View style={styles.content}>
                {children}
            </View>
        </View>
    );
}

// Usage:
<Card title="My Card" backgroundColor="#f0f0f0">
    <Text>This content automatically goes in children</Text>
    <Text>You can put any component here</Text>
    <Image source={require('./image.png')} />
    <View>
        <Text>Even complex nested structures</Text>
    </View>
</Card>
```

The type `React.ReactNode` is very permissive and includes React elements, strings, numbers, arrays, fragments, and anything else React can render. This makes your component extremely flexible. The pattern of using children is fundamental for creating layout components, styled containers, modals, and any other component that needs to wrap arbitrary content.

### Style Optimization

Always use `StyleSheet.create` instead of inline styles. Inline styles create a new object on every render, which can affect performance, especially if you have many components re-rendering frequently. `StyleSheet.create` optimizes styles by assigning them unique identifiers that React Native can process more efficiently. Also, having your styles centralized makes it much easier to maintain visual consistency in your app. If you need to change all primary buttons from blue to green, you only need to modify one place in your StyleSheet.

### Accessibility from the Start

Accessibility should not be something you add at the end of development, but a consideration from the beginning. Use accessibility props on all interactive components. A `TouchableOpacity` should have a descriptive `accessibilityLabel` explaining what the button does, an `accessibilityHint` providing additional information if needed, and an `accessibilityRole` indicating what type of element it is.

## Conclusion

As you continue your journey with React Native, these patterns and concepts will become second nature. You’ll develop intuition about when to split a component, how to structure your props, and which component to use for each situation. Practice is key.

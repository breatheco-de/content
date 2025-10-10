---
title: "State, Lifecycle, and Dynamic Rendering in React Native with TypeScript"
subtitle: "Learn useState, useEffect, and Conditional Rendering in the Mobile Ecosystem"
authors:
    - rosinni
tags:
    - react native
    - typescript
    - hooks
    - mobile development
---

React Native lets us build **native mobile applications** with the declarative simplicity of React. By adding **TypeScript**, we gain clarity and safety: we know what type of data each component handles, and the editor helps us avoid errors in real time.

In this article, you'll learn three essential pillars of modern React Native development:

1. **useState** — local state management  
2. **useEffect** — lifecycle control  
3. **Conditional rendering and lists** 


## Local State with `useState`

Before understanding `useState`, we need to imagine how React thinks. Each component is like a small state machine; when those data change, the UI should automatically update.

In a real mobile app, state can represent many things:

- The number of times a user presses a button.
- The text being typed in a form field.
- Whether a user is logged in or not.
- A switch being on or off.

In React, these changing values are stored with the `useState` hook. This hook lets us remember data between renders and update them reactively, without manually manipulating the UI.


### Basic Example with TypeScript

```tsx
import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

export default function Counter(): JSX.Element {
    const [count, setCount] = useState<number>(0);

    return (
        <View style={{ padding: 20 }}>
            <Text style={{ fontSize: 24 }}>You clicked {count} times</Text>
            <Button title="Increment" onPress={() => setCount(count + 1)} />
        </View>
    );
}
```

**Explanation**
- `useState<number>(0)` creates a state variable `count` that can only be a number.
- `setCount` updates the state and triggers an **automatic re-render**.
- Each click displays the new value on screen.

💡 In Kotlin, this is similar to using a `MutableStateFlow<Int>` or a `LiveData<Int>` observed by the UI.


## Lifecycle with `useEffect`

`useEffect` is used to run code **after the component renders**, or when certain values change. It's the equivalent of `onCreate` and `onDestroy` in Android, or `viewDidLoad` and `viewDidDisappear` in iOS, but expressed declaratively.


### Example 1: Mount and Unmount

```tsx
import React, { useEffect } from 'react';
import { View, Text } from 'react-native';

export default function SimpleEffect(): JSX.Element {
    useEffect(() => {
        console.log('🟢 Component mounted');

        return () => {
            console.log('🔴 Component unmounted');
        };
    }, []);

    return (
        <View style={{ padding: 20 }}>
            <Text style={{ fontSize: 20 }}>Check the console</Text>
        </View>
    );
}
```

**What happens**
- When the component appears, the first block runs.  
- When it disappears, the cleanup function (`return`) runs.

Conceptual equivalents:

| Android | React Native | Swift |
|----------|---------------|--------|
| `onCreate()` | `useEffect(() => {...}, [])` | `viewDidLoad()` |
| `onDestroy()` | `return () => {...}` | `viewDidDisappear()` |

### Example 2: Timer with Cleanup

```tsx
import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

export default function Timer(): JSX.Element {
    const [seconds, setSeconds] = useState<number>(0);

    useEffect(() => {
        console.log('⏱ Timer started');

        const interval = setInterval(() => {
            setSeconds((prev) => prev + 1);
        }, 1000);

        return () => {
            console.log('🧹 Timer stopped');
            clearInterval(interval);
        };
    }, []);

    return (
        <View style={{ padding: 20 }}>
            <Text style={{ fontSize: 22 }}>Seconds: {seconds}</Text>
        </View>
    );
}
```

In Kotlin:

```kotlin
override fun onCreate(savedInstanceState: Bundle?) {
        timer = Timer()
        timer.scheduleAtFixedRate(object : TimerTask() {
                override fun run() {
                        seconds++
                }
        }, 0, 1000)
}

override fun onDestroy() {
        timer.cancel()
}
```

And in Swift:

```swift
override func viewDidLoad() {
        timer = Timer.scheduledTimer(withTimeInterval: 1.0, repeats: true) { _ in
                seconds += 1
        }
}

override func viewDidDisappear(_ animated: Bool) {
        timer.invalidate()
}
```

🪄 In React Native you do this with **a single structure**, more declarative and predictable.


### Example 3: Effect Dependent on a Value

```tsx
import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';

export default function DependentEffect(): JSX.Element {
    const [count, setCount] = useState<number>(0);

    useEffect(() => {
        console.log(`Counter changed to: ${count}`);
    }, [count]); // only runs when count changes

    return (
        <View style={{ padding: 20 }}>
            <Text style={{ fontSize: 20 }}>Counter: {count}</Text>
            <Button title="Increment" onPress={() => setCount(count + 1)} />
        </View>
    );
}
```

💡 In Kotlin, you could compare this to observing a `LiveData<Int>`, and in Swift to a property `didSet`.


## 3. Conditional Rendering and Lists

Conditional rendering lets you show different views based on state.

```tsx
import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

export default function LoginExample(): JSX.Element {
    const [loggedIn, setLoggedIn] = useState<boolean>(false);

    return (
        <View style={{ padding: 20 }}>
            {loggedIn ? (
                <>
                    <Text style={{ fontSize: 20 }}>Welcome back!</Text>
                    <Button title="Log out" onPress={() => setLoggedIn(false)} />
                </>
            ) : (
                <>
                    <Text style={{ fontSize: 20 }}>Please log in</Text>
                    <Button title="Log in" onPress={() => setLoggedIn(true)} />
                </>
            )}
        </View>
    );
}
```

This is similar to using an `if` or `when` in Kotlin, but **inside JSX itself**, mixing logic and presentation.


## Dynamic Lists

To render lists in React Native, use `FlatList`, optimized for performance.

```tsx
import React from 'react';
import { View, Text, FlatList } from 'react-native';

interface Task {
    id: string;
    text: string;
}

export default function TodoList(): JSX.Element {
    const tasks: Task[] = [
        { id: '1', text: 'Learn useState' },
        { id: '2', text: 'Practice useEffect' },
        { id: '3', text: 'Master conditional rendering' },
    ];

    return (
        <View style={{ padding: 20 }}>
            <FlatList
                data={tasks}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <Text style={{ fontSize: 18, marginVertical: 4 }}>• {item.text}</Text>
                )}
            />
        </View>
    );
}
```

## In Summary

| Concept | Kotlin | Swift / SwiftUI | React Native |
|-----------|---------|----------------|---------------|
| State | `LiveData`, `MutableStateFlow` | `@State`, `@Published` | `useState` |
| Lifecycle effects | `onCreate()`, `onDestroy()` | `.onAppear {}`, `.onDisappear {}` | `useEffect` |
| Conditional view | `if`, `when` | `if`, `switch` | `{condition ? <A/> : <B/>}` |
| Dynamic lists | `RecyclerView` | `List` | `FlatList` |


React Native with TypeScript teaches you to **think in states and effects**, not instructions. The data flow is unidirectional, and components **automatically react** to changes, without you having to “tell them what to do”.


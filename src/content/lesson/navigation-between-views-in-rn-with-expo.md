---
title: "Master Navigation Between Views in React Native with Expo"
description: "Learn how to implement navigation in React Native using Expo Router and React Navigation. Discover how to structure routes, pass parameters between screens, and choose between Stack and Tab navigation to create scalable and maintainable mobile apps."
author: "rosinni"
tags: ["React Native", "Expo", "Expo Router", "React Navigation", "TypeScript", "Mobile Development"]
---


When you start developing with **React Native**, one of the first challenges is understanding how **screen navigation** works. In mobile apps, moving from one view to another is not a minor detail—it defines the entire user experience structure.

In the React Native ecosystem, navigation is mainly managed with two tools: **React Navigation** and **Expo Router**. Both let you organize your screens, pass data between them, and define flows like stacks, tabs, or nested routes.


## Why do we need a navigation system?

Unlike web development, where a link changes the page and the browser maintains the history, in a mobile app everything happens within a single application. That’s why we need a **navigation library** that manages that history internally, controls transitions, and allows passing parameters between screens.

React Native doesn’t include navigation out of the box; the community created **React Navigation**. Over time, the Expo team introduced a simplified version called **Expo Router**, which removes much of the manual setup and leverages the project’s file structure.


## Expo Router: The Modern Standard

**Expo Router** is part of the latest versions of Expo. Its philosophy is simple: **the folder structure defines your navigation**. Each file inside the `app/` directory automatically becomes a route or screen.

### 📁 Example Structure

```bash
app/
 ├─ index.tsx        → Main screen (/)
 ├─ profile.tsx      → Profile screen (/profile)
 ├─ settings/
 │   └─ index.tsx    → Settings screen (/settings)
 └─ _layout.tsx      → Common layout (Stack or Tab navigation)
```

You don’t need to manually register each screen or define routes in a central file. This makes the code more predictable, readable, and easy to scale.


## Types of Navigation: Stack and Tab

### Stack Navigation

The **Stack** pattern is probably the most common. Imagine a set of screens stacked on top of each other: when you navigate to a new view, it’s “pushed” onto the previous one; going back “pops” it off the stack.

```tsx
// app/_layout.tsx
import { Stack } from "expo-router";

export default function Layout() {
    return (
        <Stack>
            <Stack.Screen name="index" options={{ title: "Home" }} />
            <Stack.Screen name="profile" options={{ title: "Profile" }} />
        </Stack>
    );
}
```

Each file inside `app/` becomes a stack screen. This makes hierarchical flows easy, like going from a list to a detail view.


### Tab Navigation

Another classic pattern is **tab navigation**, very common in apps with a bottom bar. **Expo Router** also supports this via the `Tabs` component.

```tsx
// app/(tabs)/_layout.tsx
import { Tabs } from "expo-router";

export default function Layout() {
    return (
        <Tabs>
            <Tabs.Screen name="home" options={{ title: "Home" }} />
            <Tabs.Screen name="settings" options={{ title: "Settings" }} />
        </Tabs>
    );
}
```

**Typical structure:**

```bash
app/
 └─ (tabs)/
         ├─ _layout.tsx
         ├─ home.tsx
         └─ settings.tsx
```

Each tab is an independent screen, but all share the same bottom layout.


## Passing Data Between Screens

One of the most common needs is **sending information from one view to another**. For example, when clicking a user, you want to open their profile and show their data.

With **Expo Router**, this is done declaratively:

### Link with Parameters

```tsx
<Link href={{ pathname: "/profile", params: { userId: 42 } }}>
    View Profile
</Link>
```

### Receiving Parameters

```tsx
import { useLocalSearchParams } from "expo-router";

export default function ProfileScreen() {
    const { userId } = useLocalSearchParams();
    return <Text>User profile {userId}</Text>;
}
```

There’s no magic; parameters are read with a hook, just like you would with props or query params in React. This way of communicating keeps the app modular and easy to debug.


## Route Typing with TypeScript

One of the biggest advantages of working with **Expo** and **React Native** in TypeScript is the ability to **type your routes**. This prevents common errors like passing incorrect parameters or misspelling a screen name.

You can define a global route type:

```ts
export type RootStackParamList = {
    index: undefined;
    profile: { userId: number };
};
```

Now, when you use a link or navigation, TypeScript will warn you if you send incorrect data:

```tsx
<Link href={{ pathname: "/profile", params: { userId: 42 } }} />
```

If you try to pass a string instead of a number, the compiler will flag it as an error. For those coming from strongly typed languages like Kotlin or Swift, this feels natural: strong typing brings safety and confidence to your code.


## When to Use Each Type of Navigation?

- Use **Stack Navigation** when screens follow a sequential or hierarchical flow (home → detail → confirmation).
- Use **Tab Navigation** when you have independent sections accessed from a bottom bar (home, profile, settings).
- Use **Expo Router** if you’re working with Expo and want a clean, predictable structure.
- Use **React Navigation** if you’re in a non-Expo project or need more granular configuration control.


Navigation is the **invisible skeleton** of every mobile app. In React Native, learning to structure it correctly makes the difference between an improvised project and a solid, maintainable, scalable app. **Expo Router** represents the evolution toward declarative, simple navigation. It lets you focus on building experiences, not configuring routes.

And if you come from the native world (Kotlin or Swift), you’ll notice something familiar: each view is still an independent unit, but now with the flexibility of React and the power of JavaScript.


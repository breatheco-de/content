---
title: "Advanced Navigation in React Native: Nested Routes, Headers, and Conditional Flows"
description: "Discover advanced navigation techniques in React Native with Expo Router: how to create complex nested routes, dynamically customize headers, and build conditional flows based on authentication state. Take your apps to the next level."
author: ""
date: ""
tags: ["React Native", "Expo Router", "Advanced Navigation", "TypeScript", "Mobile UX"]
category: "Mobile Development"
published: true
---


Once you master the basics of navigation in **React Native**, the next natural step is to tackle more complex scenarios: authentication flows, deeply nested routes, headers that change based on context, and screens that appear or disappear depending on your app's state.

These patterns are what separate a functional app from a **professional app**. And while they may seem intimidating at first, once you understand the logic behind each one, they become powerful tools for building sophisticated experiences.


## Nested Routes: Organize Complexity

In real applications, navigation is rarely flat. Imagine an e-commerce app: you have main tabs (home, cart, profile), but inside "home" you need a stack to navigate between categories, products, and details. Inside "profile", another stack to edit data, view history, manage addresses.

This is **nested navigation**; navigation within navigation.

### 📁 Typical Structure

```bash
app/
 ├─ (tabs)/
 │   ├─ _layout.tsx          → Tab Navigator
 │   ├─ index.tsx            → "Home" Tab
 │   ├─ cart.tsx             → "Cart" Tab
 │   └─ profile/
 │       ├─ _layout.tsx      → Internal Stack Navigator
 │       ├─ index.tsx        → Profile main screen
 │       ├─ edit.tsx         → Edit profile
 │       └─ history.tsx      → Order history
 └─ _layout.tsx              → Root layout
```

In this case, the "Profile" tab is not just a screen: it's a **full stack**. When the user enters their profile, they can navigate to edit data or view history, and when they go back, they return to the main profile screen, not the previous tab.

### Practical Implementation

**Main Tab Navigator:**

```tsx
// app/(tabs)/_layout.tsx
import { Tabs } from "expo-router";
import { Home, ShoppingCart, User } from "lucide-react-native";

export default function TabsLayout() {
    return (
        <Tabs>
            <Tabs.Screen 
                name="index" 
                options={{
                    title: "Home",
                    tabBarIcon: ({ color }) => <Home color={color} size={24} />
                }} 
            />
            <Tabs.Screen 
                name="cart" 
                options={{
                    title: "Cart",
                    tabBarIcon: ({ color }) => <ShoppingCart color={color} size={24} />
                }} 
            />
            <Tabs.Screen 
                name="profile" 
                options={{
                    title: "Profile",
                    tabBarIcon: ({ color }) => <User color={color} size={24} />
                }} 
            />
        </Tabs>
    );
}
```

**Internal Profile Stack:**

```tsx
// app/(tabs)/profile/_layout.tsx
import { Stack } from "expo-router";

export default function ProfileLayout() {
    return (
        <Stack>
            <Stack.Screen 
                name="index" 
                options={{ headerShown: false }} // Tab already shows header
            />
            <Stack.Screen 
                name="edit" 
                options={{ title: "Edit Profile" }} 
            />
            <Stack.Screen 
                name="history" 
                options={{ title: "Order History" }} 
            />
        </Stack>
    );
}
```

Now, from the main profile screen, you can navigate like this:

```tsx
// app/(tabs)/profile/index.tsx
import { Link } from "expo-router";

export default function ProfileScreen() {
    return (
        <View>
            <Text>Welcome to your profile</Text>
            <Link href="/profile/edit">Edit Data</Link>
            <Link href="/profile/history">View History</Link>
        </View>
    );
}
```

Navigation is **relative to the current context**. You don't need to write complex absolute routes: Expo Router understands the hierarchy.



## Custom Headers: More Than a Title

A screen's header is not just aesthetic: it communicates context, offers quick actions, and reinforces the app's identity. By default, Expo Router gives you a basic header, but professional apps need more control.

### Basic Customization

You can modify colors, fonts, and header elements from each screen's options:

```tsx
<Stack.Screen 
    name="details" 
    options={{
        title: "Product Details",
        headerStyle: { backgroundColor: "#6200ee" },
        headerTintColor: "#fff",
        headerTitleStyle: { fontWeight: "bold" }
    }} 
/>
```

This works for simple cases. But what if you need a **fully custom header**?

### Dynamic Header with Custom Component

```tsx
<Stack.Screen 
    name="product" 
    options={{
        headerTitle: () => <CustomHeader />,
        headerRight: () => (
            <TouchableOpacity onPress={() => console.log("Share")}>
                <Share2 color="#fff" size={24} />
            </TouchableOpacity>
        )
    }} 
/>
```

You can insert any React component into the header. This opens up endless possibilities: search bars in the header, filter buttons, loading indicators, animations.

### Headers That Change on Scroll

A very common pattern in modern apps is the **header that hides when scrolling down** and reappears when scrolling up. This maximizes content space without sacrificing navigation.

With **React Navigation** (the foundation of Expo Router), you can achieve this by configuring advanced options:

```tsx
<Stack.Screen 
    name="feed" 
    options={{
        headerTransparent: true,
        headerBlurEffect: "light"
    }} 
/>
```

Or even better, use `Animated` to create smooth transitions based on user scroll. While this requires a bit more code, the result is a fluid, professional experience.


## Deep Linking: Navigate from Outside the App

**Deep linking** allows users to open your app on a specific screen from an external link: an email, a push notification, a QR code. It's essential for marketing, retention, and user experience.

With **Expo Router**, deep linking works automatically thanks to the file-based structure. You just need to configure the URL scheme:

```json
// app.json
{
    "expo": {
        "scheme": "myapp"
    }
}
```

Now, a link like `myapp://profile/42` will open the profile screen with `userId: 42`.

### Universal Links (iOS) and App Links (Android)

For real URLs (`https://yourapp.com/profile/42`), you need to configure **universal links** and **app links**. This requires verification files on your domain, but Expo simplifies the process with EAS:

```json
{
    "expo": {
        "ios": {
            "associatedDomains": ["applinks:yourapp.com"]
        },
        "android": {
            "intentFilters": [
                {
                    "action": "VIEW",
                    "data": { "scheme": "https", "host": "yourapp.com" }
                }
            ]
        }
    }
}
```

Now, when someone clicks a link from your domain, the OS will ask if they want to open the app. If the user accepts, the app opens directly on the correct screen.


## Custom Transition Animations

By default, React Navigation handles screen transitions: horizontal slide on iOS, fade on Android. But you can customize these animations to create unique experiences.

```tsx
<Stack.Screen 
    name="details" 
    options={{
        animation: "fade",
        // or "slide_from_bottom", "slide_from_right", "flip", etc.
    }} 
/>
```

For more complex animations, you can use `@react-navigation/stack` with **gesture handlers** and **reanimated**:

```tsx
cardStyleInterpolator: ({ current, layouts }) => ({
    cardStyle: {
        transform: [
            {
                translateX: current.progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: [layouts.screen.width, 0],
                }),
            },
        ],
    },
})
```

This requires understanding interpolation and animations, but the result is **total control** over how screens move. Some premium apps use custom transitions to reinforce their visual identity.



## Conclusion

Advanced navigation is not magic; it's **well-thought-out architecture**. Nested routes, dynamic headers, conditional flows... each technique solves a real problem you'll face in production apps. Mastering these patterns lets you build apps that not only work, but **feel professional**.
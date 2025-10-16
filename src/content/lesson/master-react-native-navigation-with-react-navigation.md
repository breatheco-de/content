---
title: "Master React Native Navigation with React Navigation"
description: "Complete React Navigation guide by Callstack: learn Stack, Tab and Drawer navigation, TypeScript typing, deep linking, and advanced patterns for enterprise apps. Everything you need to know about professional navigation in React Native CLI."
author: "rosinni"
tags: ["React Native", "React Navigation", "CLI", "TypeScript", "Callstack", "Mobile Development"]
---

Navigation is the **nervous system** of any mobile application. It defines how users move between screens, how state is preserved, and how transitions feel. In professional applications with **React Native CLI**, mastering navigation isn't optional: it's fundamental.

**React Navigation** (developed by Callstack) is the industry standard. It powers thousands of production apps, including Fortune 500 apps. It's the most mature library, with full support for React Native's new architecture, native optimizations, and a declarative API that makes maintaining large projects easier.

In this lesson, we go straight to what matters: **how to use React Navigation** to build robust and scalable navigation experiences.

## Why React Navigation?

In professional mobile applications, navigation isn't just "changing screens". A professional navigation library must offer:

- **Real native gestures**: Swipe back on iOS, back button on Android
- **Platform animations**: Transitions that respect Material Design and Human Interface Guidelines
- **Persistent state management**: Navigation history survives reloads and deep links
- **Strict typing**: TypeScript to prevent navigation errors at compile time
- **New architecture compatibility**: Full support for Fabric and Turbo Modules

React Navigation fulfills all this and is actively maintained by Callstack, a company dedicated to the React Native ecosystem.

## Fundamentals: NavigationContainer

Every navigation tree in React Navigation must be wrapped in a `NavigationContainer`. This component: maintains navigation state, manages the app's complete history, integrates deep linking, and connects navigation with the native lifecycle.

**Basic structure:**

```tsx
// App.tsx
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './navigation/AppNavigator';

export default function App() {
    return (
        <NavigationContainer>
            <AppNavigator />
        </NavigationContainer>
    );
}
```

Note: You only need **one** `NavigationContainer` in your entire app, typically in the root component.

## Stack Navigator: The fundamental pattern

The **Stack Navigator** (stack) is the most common navigation pattern. Imagine a stack of cards: each new screen is placed on top, and when going back, the top card is removed.

### Native Stack vs JavaScript Stack

React Navigation offers two implementations:

1. **`@react-navigation/native-stack`** ✅ Recommended: Uses native UINavigationController (iOS) and Fragment (Android), guaranteed 60 FPS animations, lower memory consumption, native gestures per platform.

2. **`@react-navigation/stack`**: Fully implemented in JavaScript with Reanimated, more customizable, useful only if you need very specific animations.

**Golden rule**: Always use `native-stack` unless you have a very specific reason not to.

### Basic implementation with TypeScript

```tsx
// src/navigation/types.ts
export type RootStackParamList = {
    Home: undefined;
    Profile: { userId: string; userName: string };
    Settings: undefined;
    Details: { itemId: number };
};

// src/navigation/RootNavigator.tsx
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { RootStackParamList } from './types';

import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerStyle: { backgroundColor: '#6200ee' },
                headerTintColor: '#fff',
                headerTitleStyle: { fontWeight: 'bold' },
                headerBackTitle: 'Back', // iOS
                animation: 'slide_from_right', // Customize transition
            }}
        >
            <Stack.Screen 
                name="Home" 
                component={HomeScreen}
                options={{ title: 'Home' }}
            />
            <Stack.Screen 
                name="Profile" 
                component={ProfileScreen}
                options={({ route }) => ({ 
                    title: route.params.userName 
                })}
            />
        </Stack.Navigator>
    );
}
```

### Dynamic screen options

You can configure options based on props or state:

```tsx
<Stack.Screen 
    name="Profile"
    component={ProfileScreen}
    options={({ route, navigation }) => ({
        title: route.params.userName,
        headerRight: () => (
            <Button
                onPress={() => navigation.navigate('Settings')}
                title="Config"
            />
        ),
    })}
/>
```

## Programmatic navigation: the useNavigation hook

To navigate from any component, use the `useNavigation` hook:

```tsx
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/types';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

function UserCard({ userId, userName }: Props) {
    const navigation = useNavigation<NavigationProp>();
    
    const handlePress = () => {
        // TypeScript validates parameters
        navigation.navigate('Profile', { 
            userId, 
            userName 
        });
    };

    return (
        <TouchableOpacity onPress={handlePress}>
            <Text>{userName}</Text>
        </TouchableOpacity>
    );
}
```

### Important navigation methods

```tsx
// Navigate to a screen
navigation.navigate('Profile', { userId: '123' });

// Go back (pop)
navigation.goBack();

// Return to a specific screen in the stack
navigation.navigate('Home');

// Replace current screen (doesn't allow going back)
navigation.replace('Login');

// Clear stack and navigate
navigation.reset({
    index: 0,
    routes: [{ name: 'Home' }],
});

// Go to stack beginning
navigation.popToTop();

// Check if you can go back
if (navigation.canGoBack()) {
    navigation.goBack();
}
```

## Receiving parameters: route.params

From the destination screen, access parameters with `route.params`:

```tsx
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'Profile'>;

function ProfileScreen({ route, navigation }: Props) {
    const { userId, userName } = route.params;
    
    // TypeScript guarantees these parameters exist
    return (
        <View>
            <Text>User: {userName}</Text>
            <Text>ID: {userId}</Text>
            <Button 
                title="Edit" 
                onPress={() => navigation.navigate('EditProfile', { userId })}
            />
        </View>
    );
}
```

## Tab Navigator: Tab navigation

The **Tab Navigator** is perfect for main sections of your app accessible from a bottom bar. Think of apps like Instagram, Twitter, or any app with persistent navigation.

```tsx
// src/navigation/types.ts
export type MainTabParamList = {
    HomeTab: undefined;
    SearchTab: undefined;
    ProfileTab: { userId: string };
    SettingsTab: undefined;
};

// src/navigation/TabNavigator.tsx
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator<MainTabParamList>();

export default function TabNavigator() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName: string;
                    
                    switch (route.name) {
                        case 'HomeTab':
                            iconName = focused ? 'home' : 'home-outline';
                            break;
                        case 'SearchTab':
                            iconName = focused ? 'search' : 'search-outline';
                            break;
                        case 'ProfileTab':
                            iconName = focused ? 'person' : 'person-outline';
                            break;
                    }
                    
                    return <Icon name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: '#6200ee',
                tabBarInactiveTintColor: 'gray',
                headerShown: false, // Hide header by default
            })}
        >
            <Tab.Screen 
                name="HomeTab" 
                component={HomeScreen}
                options={{ tabBarLabel: 'Home' }}
            />
            <Tab.Screen 
                name="SearchTab" 
                component={SearchScreen}
                options={{ tabBarLabel: 'Search' }}
            />
            <Tab.Screen 
                name="ProfileTab" 
                component={ProfileScreen}
                options={{ tabBarLabel: 'Profile' }}
            />
        </Tab.Navigator>
    );
}
```

### Hide tabs on specific screens

Sometimes you want to hide the tab bar on certain screens:

```tsx
// From the screen
useLayoutEffect(() => {
    navigation.getParent()?.setOptions({
        tabBarStyle: { display: 'none' }
    });
    
    return () => {
        navigation.getParent()?.setOptions({
            tabBarStyle: undefined
        });
    };
}, [navigation]);
```

## Drawer Navigator: Side menu

The **Drawer Navigator** creates a slidable side menu, common in apps with many sections.

```tsx
import { createDrawerNavigator } from '@react-navigation/drawer';

type DrawerParamList = {
    Home: undefined;
    Profile: undefined;
    Settings: undefined;
};

const Drawer = createDrawerNavigator<DrawerParamList>();

export default function DrawerNavigator() {
    return (
        <Drawer.Navigator
            screenOptions={{
                drawerActiveTintColor: '#6200ee',
                drawerInactiveTintColor: 'gray',
                drawerStyle: {
                    backgroundColor: '#f8f8f8',
                    width: 280,
                },
            }}
        >
            <Drawer.Screen 
                name="Home" 
                component={HomeScreen}
                options={{
                    drawerLabel: 'Home',
                    drawerIcon: ({ color, size }) => (
                        <Icon name="home" size={size} color={color} />
                    ),
                }}
            />
            <Drawer.Screen name="Profile" component={ProfileScreen} />
            <Drawer.Screen name="Settings" component={SettingsScreen} />
        </Drawer.Navigator>
    );
}
```

### Open/close drawer programmatically

```tsx
import { DrawerActions } from '@react-navigation/native';

function SomeScreen() {
    const navigation = useNavigation();
    
    // Open drawer
    const openDrawer = () => {
        navigation.dispatch(DrawerActions.openDrawer());
    };
    
    // Close drawer
    const closeDrawer = () => {
        navigation.dispatch(DrawerActions.closeDrawer());
    };
    
    // Toggle
    const toggleDrawer = () => {
        navigation.dispatch(DrawerActions.toggleDrawer());
    };
    
    return <Button title="Open menu" onPress={openDrawer} />;
}
```

## Nested Navigation

In complex apps, it's common to **nest navigators**. For example: tabs at the top level, each tab with its own stack.

```tsx
// Each tab has its own stack
function HomeStackNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="HomeMain" component={HomeScreen} />
            <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
    );
}

function ProfileStackNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="ProfileMain" component={ProfileScreen} />
            <Stack.Screen name="EditProfile" component={EditProfileScreen} />
        </Stack.Navigator>
    );
}

// Tab Navigator contains the stacks
function TabNavigator() {
    return (
        <Tab.Navigator>
            <Tab.Screen 
                name="HomeTab" 
                component={HomeStackNavigator}
                options={{ headerShown: false }}
            />
            <Tab.Screen 
                name="ProfileTab" 
                component={ProfileStackNavigator}
                options={{ headerShown: false }}
            />
        </Tab.Navigator>
    );
}
```

### Navigation between nested stacks

To navigate from a child stack to a screen in another stack:

```tsx
// From HomeScreen (inside HomeTab)
function HomeScreen() {
    const navigation = useNavigation();
    
    const goToProfile = () => {
        // Navigate to Profile tab and then to EditProfile
        navigation.navigate('ProfileTab', {
            screen: 'EditProfile',
            params: { userId: '123' },
        });
    };
    
    return <Button title="Go to Edit Profile" onPress={goToProfile} />;
}
```

### Access parent navigator

```tsx
// From a nested screen
function DetailsScreen() {
    const navigation = useNavigation();
    
    // Access Tab Navigator (parent)
    const parentNavigation = navigation.getParent();
    
    // Switch tab from child stack
    const switchToProfileTab = () => {
        parentNavigation?.navigate('ProfileTab');
    };
    
    return <Button title="Go to Profile tab" onPress={switchToProfileTab} />;
}
```

## Advanced TypeScript: complete navigation tree typing

For apps with nested navigation, you need to correctly type the entire hierarchy:

```tsx
// src/navigation/types.ts
import type { NavigatorScreenParams } from '@react-navigation/native';

// Stack inside HomeTab
export type HomeStackParamList = {
    HomeMain: undefined;
    Details: { itemId: number };
};

// Stack inside ProfileTab
export type ProfileStackParamList = {
    ProfileMain: undefined;
    EditProfile: { userId: string };
};

// Main tab
export type MainTabParamList = {
    HomeTab: NavigatorScreenParams<HomeStackParamList>;
    ProfileTab: NavigatorScreenParams<ProfileStackParamList>;
    SettingsTab: undefined;
};

// App root
export type RootStackParamList = {
    Auth: undefined;
    MainApp: NavigatorScreenParams<MainTabParamList>;
    Modal: { modalType: 'info' | 'warning' };
};

// Helper to type useNavigation in any screen
declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList {}
    }
}
```

With this configuration, TypeScript will autocomplete and validate **all** your navigation:

```tsx
// From any screen, regardless of props
function AnyComponent() {
    const navigation = useNavigation();
    
    // ✅ Full autocompletion
    navigation.navigate('MainApp', {
        screen: 'ProfileTab',
        params: {
            screen: 'EditProfile',
            params: { userId: '123' },
        },
    });
}
```

## Deep Linking: Navigation from URLs

**Deep linking** allows opening your app on a specific screen from an external URL. It's essential for:

- Push notifications that open specific screens
- Shared links (e.g., user profile)
- Marketing campaigns
- Integration with other apps

### Basic deep linking configuration

Native configuration is already ready in your template. You only need to configure React Navigation:

```tsx
// App.tsx
import { NavigationContainer } from '@react-navigation/native';

const linking = {
    prefixes: ['myapp://', 'https://myapp.com'],
    config: {
        screens: {
            Home: '',
            Profile: 'user/:userId',
            Details: 'item/:itemId',
            Settings: 'settings',
        },
    },
};

export default function App() {
    return (
        <NavigationContainer linking={linking}>
            <RootNavigator />
        </NavigationContainer>
    );
}
```

### URLs that work with this configuration

- `myapp://` → Home
- `myapp://user/123` → Profile with `userId: '123'`
- `myapp://item/456` → Details with `itemId: '456'`
- `https://myapp.com/user/123` → Profile with `userId: '123'`

### Deep linking with nested navigation

For nested navigators (tabs with stacks), structure the config hierarchically:

```tsx
const linking = {
    prefixes: ['myapp://'],
    config: {
        screens: {
            MainApp: {
                screens: {
                    HomeTab: {
                        screens: {
                            HomeMain: 'home',
                            Details: 'details/:itemId',
                        },
                    },
                    ProfileTab: {
                        screens: {
                            ProfileMain: 'profile',
                            EditProfile: 'profile/edit',
                        },
                    },
                },
            },
            Modal: 'modal/:modalType',
        },
    },
};
```

Resulting URLs:
- `myapp://home` → HomeTab > HomeMain
- `myapp://details/123` → HomeTab > Details
- `myapp://profile/edit` → ProfileTab > EditProfile

### Get the URL that activated the app

```tsx
import { Linking } from 'react-native';

function SomeScreen() {
    useEffect(() => {
        // Get initial URL (when app was closed)
        Linking.getInitialURL().then((url) => {
            if (url) {
                console.log('App opened from:', url);
            }
        });
        
        // Listen for deep links when app is in background
        const subscription = Linking.addEventListener('url', ({ url }) => {
            console.log('Deep link received:', url);
        });
        
        return () => subscription.remove();
    }, []);
}
```

### Query parameters in deep links

React Navigation supports query params automatically:

```tsx
// URL: myapp://profile?userId=123&tab=posts
function ProfileScreen({ route }) {
    const { userId, tab } = route.params;
    // userId: '123', tab: 'posts'
}
```

## Global NavigationContainer configuration

### Intercept all state transitions

```tsx
import { NavigationContainer } from '@react-navigation/native';

function App() {
    const navigationRef = useRef(null);
    
    return (
        <NavigationContainer
            ref={navigationRef}
            onStateChange={(state) => {
                // Analytics: track each screen change
                const currentRoute = navigationRef.current?.getCurrentRoute();
                console.log('Navigated to:', currentRoute?.name);
                
                // Send to Firebase Analytics, Segment, etc.
                analytics.logScreenView({
                    screen_name: currentRoute?.name,
                    screen_class: currentRoute?.name,
                });
            }}
            onReady={() => {
                console.log('Navigation ready');
                routingInstrumentation.registerNavigationContainer(navigationRef);
            }}
        >
            <RootNavigator />
        </NavigationContainer>
    );
}
```

### Get current screen from anywhere

```tsx
// Create global reference
export const navigationRef = createNavigationContainerRef();

// In App.tsx
<NavigationContainer ref={navigationRef}>
    ...
</NavigationContainer>

// Use from any file (even outside components)
import { navigationRef } from './navigation/navigationRef';

export function navigateFromAnywhere(name, params) {
    if (navigationRef.isReady()) {
        navigationRef.navigate(name, params);
    }
}

// Useful for:
// - Navigation from push notifications
// - Navigation from Redux middleware
// - Navigation from services
```

## Performance optimization

### Lazy loading screens

To reduce initial load time, load screens on demand:

```tsx
import React, { Suspense } from 'react';

// Lazy load
const ProfileScreen = React.lazy(() => import('./screens/ProfileScreen'));
const SettingsScreen = React.lazy(() => import('./screens/SettingsScreen'));

function RootNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            
            <Stack.Screen name="Profile">
                {(props) => (
                    <Suspense fallback={<LoadingScreen />}>
                        <ProfileScreen {...props} />
                    </Suspense>
                )}
            </Stack.Screen>
            
            <Stack.Screen name="Settings">
                {(props) => (
                    <Suspense fallback={<LoadingScreen />}>
                        <SettingsScreen {...props} />
                    </Suspense>
                )}
            </Stack.Screen>
        </Stack.Navigator>
    );
}
```

**When to use lazy loading?** Infrequent screens (advanced settings, legal terms), screens with heavy dependencies, optional feature modules.

### Re-render optimization

React Navigation re-renders screens in certain cases. Optimize with `React.memo`:

```tsx
import React, { memo } from 'react';

const HomeScreen = memo(function HomeScreen({ route, navigation }) {
    // This component only re-renders if its props change
    return <View>...</View>;
});

export default HomeScreen;
```

### detachInactiveScreens

By default, React Navigation keeps inactive screens mounted. To free memory:

```tsx
<Stack.Navigator
    screenOptions={{
        detachInactiveScreens: true, // Unmount inactive screens
    }}
>
    ...
</Stack.Navigator>
```

⚠️ **Warning**: This unmounts the component when leaving, losing local state. Use only if state is in Redux/Context or persisted.

---
title: "Modular Architecture in React Native CLI with TypeScript"
description: "Learn to structure your React Native projects professionally and scalably using a modular architecture with TypeScript. Practical guide with real examples."
author: "Rosinni"
tags: ["React Native","TypeScript","Software Architecture","Mobile Development","Clean Code","Modular Architecture"]
---


# Modular Architecture in React Native CLI with TypeScript

When you started working with React Native, everything seemed manageable. A couple of screens, some components, maybe a form or two. Everything lived happily in a `screens` folder, another `components` folder, and that was it. It worked. But then the project grew. Suddenly you had 20 screens, 50 components, authentication logic mixed with profile logic, and every time you needed to change something, you spent 10 minutes looking for where you had put that file.

In this article we're going to talk about **modular architecture**: what it is, why it matters, and how to implement it in React Native CLI with TypeScript in a way that actually makes sense.

## What does "modular architecture" mean?

Imagine you're organizing your house. You can have everything piled up in one giant room; clothes, books, dishes, tools... or you can have separate rooms, kitchen, bedroom, study, each with their own things and their own function.

Modular architecture is exactly that, but for your code. Instead of having everything mixed in generic folders like `screens` or `components`, you organize your application by **features** or **functionalities**. Each feature is like its own mini-application within the large application.

For example:
- Everything related to authentication (login, registration, password recovery) lives in an `auth` module
- Everything related to the user profile lives in a `profile` module
- The dashboard with its charts and statistics has its own module

Each module contains its own screens, components, hooks, and state logic. It's **self-contained** and doesn't unnecessarily depend on other modules.

## Monolithic vs Modular: a simple contrast

### Monolithic approach (what you do at the beginning)

```
/src
    /screens
        LoginScreen.tsx
        RegisterScreen.tsx
        ProfileScreen.tsx
        DashboardScreen.tsx
        SettingsScreen.tsx
        // ... 20 more screens
    /components
        Button.tsx
        Input.tsx
        ProfileHeader.tsx
        DashboardCard.tsx
        // ... 50 more components
    /hooks
        useAuth.ts
        useProfile.ts
        // ... everything mixed up
```

This works when it's just you and you have 5 screens. But when the project grows:
- You don't know which components belong to which screen
- The hooks are all mixed up
- Changing something in "auth" requires touching files in 4 different folders
- Teamwork becomes chaos: who is editing what?

### Modular approach (scalable and organized)

```
/src
    /features
        /auth
            /screens
                LoginScreen.tsx
                RegisterScreen.tsx
            /components
                LoginForm.tsx
                SocialLoginButtons.tsx
            /hooks
                useAuth.ts
            /store
                authStore.ts
            /navigation
                AuthNavigator.tsx
            index.ts
        /profile
            /screens
                ProfileScreen.tsx
            /components
                ProfileHeader.tsx
                ProfileStats.tsx
            /hooks
                useProfile.ts
            index.ts
        /dashboard
            // ... its own structure
    /components
        // Shared components (Button, Input, Card)
    /hooks
        // Shared hooks (useKeyboard, useDebounce)
    /store
        // Global store if using Zustand, Redux, etc.
    /navigation
        RootNavigator.tsx
    /utils
    /types
```

Now everything related to authentication lives together. If you want to work on login, you know exactly where to go. If another developer is working on the dashboard, they don't get in your way.

## Building a modular structure step by step

Let's create a practical example. Suppose you're building a fitness app with authentication, user profile, and a statistics dashboard.

### 1. Basic structure of a module

Each feature has this basic structure:

```
/features
    /auth
        /screens       # Screens of this module
        /components    # Components specific to this module
        /hooks         # Hooks specific to this module
        /store         # Local state of the module
        /types         # TypeScript types of the module
        /utils         # Specific utilities
        index.ts       # Public exports of the module
```

The `index.ts` file is crucial: **it controls what your module exports**. Think of it as the module's entrance door.

```tsx
// src/features/auth/index.ts

export { LoginScreen, RegisterScreen } from './screens';
export { useAuth } from './hooks/useAuth';
export { authStore } from './store/authStore';
export type { User, AuthState } from './types';

// Internal components are NOT exported
// This maintains module encapsulation
```

### 2. Example: Authentication module

Let's build a complete but simple authentication module.

**Store with Zustand:**

```tsx
// src/features/auth/store/authStore.ts

import { create } from 'zustand';
import type { User } from '../types';

interface AuthState {
    user: User | null;
    isAuthenticated: boolean;
    isLoading: boolean;
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
    user: null,
    isAuthenticated: false,
    isLoading: false,

    login: async (email, password) => {
        set({ isLoading: true });
        
        try {
            // Your API call would go here
            const response = await fetch('https://example.com/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });
            
            const user = await response.json();
            
            set({ 
                user, 
                isAuthenticated: true, 
                isLoading: false 
            });
        } catch (error) {
            set({ isLoading: false });
            throw error;
        }
    },

    logout: () => {
        set({ 
            user: null, 
            isAuthenticated: false 
        });
    },
}));
```

**Custom hook:**

```tsx
// src/features/auth/hooks/useAuth.ts

import { useAuthStore } from '../store/authStore';

/**
 * Hook that encapsulates authentication logic.
 * Other modules can use this hook without knowing
 * the internal details of the store.
 */
export const useAuth = () => {
    const { user, isAuthenticated, isLoading, login, logout } = useAuthStore();

    // You could add additional logic here
    const isAdmin = user?.role === 'admin';

    return {
        user,
        isAuthenticated,
        isLoading,
        isAdmin,
        login,
        logout,
    };
};
```

**Login Screen:**

```tsx
// src/features/auth/screens/LoginScreen.tsx

import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { useAuth } from '../hooks/useAuth';
import { LoginForm } from '../components/LoginForm';

export const LoginScreen = () => {
    const { login, isLoading } = useAuth();
    const [error, setError] = useState<string | null>(null);

    const handleLogin = async (email: string, password: string) => {
        try {
            setError(null);
            await login(email, password);
            // Navigation is handled automatically when isAuthenticated changes
        } catch (err) {
            setError('Invalid credentials');
        }
    };

    return (
        <View style={styles.container}>
            <LoginForm 
                onSubmit={handleLogin}
                isLoading={isLoading}
                error={error}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
});
```

### 3. Communication between modules

Here's where things get interesting. How does the `profile` module access user information that's in `auth`?

**The golden rule: use public exports**

```tsx
// src/features/profile/screens/ProfileScreen.tsx

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
// ✅ Import from the auth module's index.ts
import { useAuth } from '../../auth';

export const ProfileScreen = () => {
    // Use the public hook that the auth module exports
    const { user } = useAuth();

    if (!user) {
        return <Text>Loading...</Text>;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.name}>{user.name}</Text>
            <Text style={styles.email}>{user.email}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    email: {
        fontSize: 16,
        color: '#666',
    },
});
```

**What you should NOT do:**

```tsx
// ❌ NEVER import directly from internal files
import { useAuthStore } from '../../auth/store/authStore';

// ✅ ALWAYS use public exports
import { useAuth } from '../../auth';
```

Why? Because if tomorrow you decide to change Zustand to Redux in the `auth` module, you only need to update the `auth` module and its `useAuth` hook. All other modules keep working without changes.

## Shared components vs module components

This is a question that comes up constantly: where do I put my components? **Think of LEGO.** You have specific pieces (like a Stormtrooper's head that you only use in Star Wars sets) and generic pieces (like basic blocks that you use in any construction).

**Module components** (specific):
```tsx
// src/features/auth/components/LoginForm.tsx
// Only used in the auth module
```

**Shared components** (generic):
```tsx
// src/components/Button.tsx
// Used in multiple modules

import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator } from 'react-native';

interface ButtonProps {
    title: string;
    onPress: () => void;
    isLoading?: boolean;
    variant?: 'primary' | 'secondary';
}

export const Button: React.FC<ButtonProps> = ({ 
    title, 
    onPress, 
    isLoading, 
    variant = 'primary' 
}) => {
    return (
        <TouchableOpacity
            style={[styles.button, styles[variant]]}
            onPress={onPress}
            disabled={isLoading}
        >
            {isLoading ? (
                <ActivityIndicator color="white" />
            ) : (
                <Text style={styles.text}>{title}</Text>
            )}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        padding: 16,
        borderRadius: 8,
        alignItems: 'center',
    },
    primary: {
        backgroundColor: '#007AFF',
    },
    secondary: {
        backgroundColor: '#8E8E93',
    },
    text: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
    },
});
```

## Modular navigation

Each module can have its own navigator. For example, the `auth` module could have a stack navigator with login and registration screens:

```tsx
// src/features/auth/navigation/AuthNavigator.tsx

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from '../screens/LoginScreen';
import { RegisterScreen } from '../screens/RegisterScreen';

const Stack = createNativeStackNavigator();

export const AuthNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
        </Stack.Navigator>
    );
};
```

Then, in your main navigator:

```tsx
// src/navigation/RootNavigator.tsx

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAuth } from '../features/auth';
import { AuthNavigator } from '../features/auth/navigation/AuthNavigator';
import { MainTabNavigator } from './MainTabNavigator';

const Stack = createNativeStackNavigator();

export const RootNavigator = () => {
    const { isAuthenticated } = useAuth();

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {isAuthenticated ? (
                    <Stack.Screen name="Main" component={MainTabNavigator} />
                ) : (
                    <Stack.Screen name="Auth" component={AuthNavigator} />
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
};
```

## Global store vs module store

Here's a practical question: when to use a global store and when to use a store per module?

- **Module store:** When state only matters within that module. For example: Form state within a feature, temporary screen data, or module-specific UI state.

- **Global store:** When multiple modules need to access the same information. For example: Authenticated user data (multiple modules need it), app theme (dark/light mode), general configuration, or shared data cache.

Example of simple global store:

```tsx
// src/store/appStore.ts

import { create } from 'zustand';

interface AppState {
    theme: 'light' | 'dark';
    setTheme: (theme: 'light' | 'dark') => void;
}

export const useAppStore = create<AppState>((set) => ({
    theme: 'light',
    setTheme: (theme) => set({ theme }),
}));
```

## TypeScript: clean and modular typing

A huge advantage of this architecture is that you can type everything very clearly:

```tsx
// src/features/auth/types/index.ts

export interface User {
    id: string;
    name: string;
    email: string;
    role: 'user' | 'admin';
}

export interface AuthState {
    user: User | null;
    isAuthenticated: boolean;
    isLoading: boolean;
}

export interface LoginCredentials {
    email: string;
    password: string;
}
```

And then export only what's necessary:

```tsx
// src/features/auth/index.ts

export type { User, AuthState } from './types';
// Don't export LoginCredentials because it's internal to the module
```

This gives you **encapsulation**: other modules only see what they need to see.

## Real benefits you'll experience

After adopting this architecture, you'll notice tangible changes:

**1. Faster onboarding**
When someone new joins the team, you tell them: "You'll be working on the payments module, everything is in `/features/payments`". They don't have to search for files in 10 different folders.

**2. Fewer Git conflicts**
If you work on `auth` and your colleague on `dashboard`, you rarely touch the same files. Merge conflicts drop dramatically.

**3. Safer refactors**
You can completely rewrite the `profile` module without touching anything else. If the public exports remain the same, the rest of the app doesn't even notice.

**4. Easier testing**
Each module can be tested in isolation. You don't need to mock half the application to test one functionality.

**5. Mental clarity**
When you open your editor, you see a structure that makes sense. There's no "where the hell did I put this?" moment that steals 15 minutes of your day.


## Conclusion

Modular architecture isn't a new or revolutionary concept. It's simply a way to organize your code that respects how your brain works: grouping related things and separating different things. At first it might seem like more work. "Why create so many folders?" But when your app grows, when you work in a team, when you have to return to a project after 6 months, this initial investment pays for itself a thousand times over.

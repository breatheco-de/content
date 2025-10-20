---
title: "Zustand: Global State in React Native Without the Drama"
author: rosinni
description: "Practical Zustand guide for mobile developers coming from Kotlin and Swift. Learn to manage global state in React Native without complications."
tags: ["zustand","react-native","state-management","react-navigation","mobile","kotlin","swift"]
---


If you come from native mobile development (Kotlin, Swift), you know that choosing your state management tool is crucial. On Android you have ViewModel + StateFlow, on iOS SwiftUI with @StateObject. In React Native, Zustand has become the favorite choice for a simple reason: it works and doesn't complicate your life.

## What problem does Zustand solve?

Imagine you're building an e-commerce app. You need:
- Know who's logged in (user)
- What products they have in the cart
- Their preferences (light/dark theme, language)

This state needs to be accessible from multiple screens. The question is: how do you share it?

Context API is React's native solution, but it has a serious problem: every time something changes in the context, all components that use it re-render. Even if they only need a small part of the state. Zustand solves this with smart selectors.

### Installation

```bash
npm install zustand
```

Only 1KB. Less than an average UI component.

## Your first store

If you come from Kotlin or Swift, a **store** is similar to a ViewModel (Android) or an ObservableObject (SwiftUI). It's a class that maintains your application's state and exposes methods to modify it. **The key difference:** Instead of creating a class, you use a function that returns an object with your state and methods.

```javascript
// store/useStore.js
import { create } from 'zustand';

export const useStore = create((set) => ({
    // Initial state - like the properties of your ViewModel/ObservableObject
    user: null,
    cart: [],
    
    // Actions - like the public methods of your ViewModel
    login: (user) => set({ user }),
    
    logout: () => set({ user: null, cart: [] }),
    
    addToCart: (product) => set((state) => ({
        cart: [...state.cart, product]
    })),
    
    removeFromCart: (productId) => set((state) => ({
        cart: state.cart.filter(item => item.id !== productId)
    }))
}));
```

The advantage of Zustand is that the component only re-renders when `cart` changes. If `user` changes, this component doesn't notice. In ViewModel and ObservableObject you would have to manage this manually with selectors or computed properties.

## Using the store in components

```javascript
// screens/CartScreen.js
export default function CartScreen() {
    const cart = useStore((state) => state.cart);
    const removeFromCart = useStore((state) => state.removeFromCart);
    
    return (
        <View>
            <Text>Cart ({cart.length} items)</Text>
            <FlatList
                data={cart}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View>
                        <Text>{item.name}</Text>
                        <TouchableOpacity onPress={() => removeFromCart(item.id)}>
                            <Text>Remove</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
}
```

```javascript
// components/UserProfile.js
export default function UserProfile() {
    const user = useStore((state) => state.user);
    
    if (!user) return null;
    
    return (
        <View>
            <Text>{user.name}</Text>
            <Text>{user.email}</Text>
        </View>
    );
}
```

Note something important: `UserProfile` only re-renders when `user` changes. Changes in `cart` don't affect it. This is automatic performance.

## The magic of selectors

A selector is a function that extracts only the part of the state you need:

```javascript
// Only updates when cart.length changes
const cartCount = useStore((state) => state.cart.length);

// Only when the user's name changes
const userName = useStore((state) => state.user?.name);

// Computed selector: calculates the total
const total = useStore((state) => 
    state.cart.reduce((sum, item) => sum + item.price, 0)
);
```

Each selector is an independent subscription. Zustand compares the previous result with the new one, and only updates the component if it changed.

## The shallow comparison problem

JavaScript compares objects by reference, not by content. This causes a common problem:

```javascript
// ❌ BAD: Always re-renders
function CartSummary() {
    const { cart, user } = useStore((state) => ({
        cart: state.cart,
        user: state.user
    }));
    // Always returns a new object { cart, user }
}
```

The solution is to use shallow to compare internal properties:

```javascript
// ✅ GOOD: Only updates if cart or user change
function CartSummary() {
    const { cart, user } = useStore(
        (state) => ({ 
            cart: state.cart, 
            user: state.user 
        }),
        shallow
    );
    
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    
    return (
        <View>
            <Text>{user?.name}</Text>
            <Text>{cart.length} items - ${total}</Text>
        </View>
    );
}
```

## Actions with complex logic

You can access the current state within actions using get:

```javascript
export const useStore = create((set, get) => ({
    products: [],
    cart: [],
    
    addToCart: (productId) => {
        const state = get();
        const product = state.products.find(p => p.id === productId);
        
        if (!product) {
            console.error('Product not found');
            return;
        }
        
        const existsInCart = state.cart.some(item => item.id === productId);
        
        if (existsInCart) {
            // Increment quantity
            set((state) => ({
                cart: state.cart.map(item =>
                    item.id === productId
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            }));
        } else {
            // Add new
            set((state) => ({
                cart: [...state.cart, { ...product, quantity: 1 }]
            }));
        }
    }
}));
```

## Integration with React Navigation

Zustand works perfectly with React Navigation without special configuration:

```javascript
// navigation/AppNavigator.js
export default function AppNavigator() {
    const isAuthenticated = useStore((state) => state.user !== null);
    
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {isAuthenticated ? (
                    <>
                        <Stack.Screen name="Home" component={HomeScreen} />
                        <Stack.Screen name="Cart" component={CartScreen} />
                        <Stack.Screen name="Profile" component={ProfileScreen} />
                    </>
                ) : (
                    <>
                        <Stack.Screen name="Login" component={LoginScreen} />
                        <Stack.Screen name="Register" component={RegisterScreen} />
                    </>
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
}
```

If you need to navigate from a store action, pass the navigation reference:

```javascript
export const useStore = create((set) => ({
    user: null,
    
    loginAndNavigate: async (credentials, navigation) => {
        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                body: JSON.stringify(credentials)
            });
            const user = await response.json();
            
            set({ user });
            navigation.replace('Home');
        } catch (error) {
            console.error('Login failed:', error);
        }
    }
}));

// In your LoginScreen
function LoginScreen({ navigation }) {
    const loginAndNavigate = useStore((state) => state.loginAndNavigate);
    
    const handleLogin = () => {
        loginAndNavigate({ email, password }, navigation);
    };
}
```

## Persistence with AsyncStorage

To save state between app sessions:

```bash
npm install async-storage
```

```javascript
export const useStore = create(
    persist(
        (set, get) => ({
            user: null,
            theme: 'light',
            cart: [],
            
            login: (user) => set({ user }),
            toggleTheme: () => set((state) => ({
                theme: state.theme === 'light' ? 'dark' : 'light'
            }))
        }),
        {
            name: 'app-storage',
            storage: createJSONStorage(() => AsyncStorage),
            
            // Only persist some properties
            partialize: (state) => ({
                user: state.user,
                theme: state.theme
                // cart is NOT persisted (it's temporary)
            })
        }
    )
);
```

Now user and theme are saved automatically. When the user opens the app again, the state is restored.

## Organization for large apps

For small to medium apps, a single store works perfectly. But if your store goes beyond 300-400 lines, you can divide it into slices:

```javascript
// store/slices/authSlice.js
export const createAuthSlice = (set) => ({
    user: null,
    isAuthenticated: false,
    
    login: (user) => set({ user, isAuthenticated: true }),
    logout: () => set({ user: null, isAuthenticated: false })
});

// store/slices/cartSlice.js
export const createCartSlice = (set) => ({
    cart: [],
    
    addToCart: (product) => set((state) => ({
        cart: [...state.cart, product]
    })),
    
    clearCart: () => set({ cart: [] })
});

// store/useStore.js
export const useStore = create((...args) => ({
    ...createAuthSlice(...args),
    ...createCartSlice(...args)
}));
```

## Why Zustand works in React Native

React Native has strict performance requirements, so you need to maintain constant 60fps or the app feels slow.

Zustand helps with this through granular updates, meaning only components subscribed to a specific part of the state update, no cascading re-renders, minimal overhead (1KB of code is practically nothing) and automatic optimization.

## Conclusion

Zustand gives you global state without the drama of Context API or the boilerplate of Redux. It's especially good for React Native where performance matters.

**When to use Zustand:**
- Shared state between multiple screens
- User data and authentication
- Carts, favorites, settings
- Any data you need in multiple places

**When NOT to use Zustand:**
- Local state of a single component (use useState)
- Form state (use react-hook-form)
- Server state (use react-query or SWR)

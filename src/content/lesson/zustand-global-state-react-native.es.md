---
title: "Zustand: Estado Global en React Native Sin el Drama"
author: rosinni
description: "Guía práctica de Zustand para desarrolladores mobile que vienen de Kotlin y Swift. Aprende a manejar estado global en React Native sin complicaciones."
tags: ["zustand","react-native","state-management","react-navigation","mobile","kotlin","swift"]
---


Si vienes de desarrollo nativo mobile (Kotlin, Swift), sabes que elegir tu herramienta de estado es crucial. En Android tienes ViewModel + StateFlow, en iOS SwiftUI con @StateObject. En React Native, Zustand se ha convertido en la opción favorita por una razón simple: funciona y no te complica la vida.

## ¿Qué problema resuelve Zustand?

Imagina que estás construyendo una app de e-commerce. Necesitas:
- Saber quién está logueado (usuario)
- Qué productos tiene en el carrito
- Sus preferencias (tema claro/oscuro, idioma)

Este estado necesita estar accesible desde múltiples pantallas. La pregunta es: ¿cómo lo compartes?

Context API es la solución nativa de React, pero tiene un problema grave, cada vez que algo cambia en el contexto, todos los componentes que lo usan se re-renderizan. Incluso si solo necesitan una pequeña parte del estado. Zustand resuelve esto con selectores inteligentes.

### Instalación

```bash
npm install zustand
```

Solo 1KB. Menos que un componente de UI promedio.

## Tu primer store

Si vienes de Kotlin o Swift, un **store** es similar a un ViewModel (Android) o un ObservableObject (SwiftUI). Es una clase que mantiene el estado de tu aplicación y expone métodos para modificarlo. **La diferencia clave:** En vez de crear una clase, usas una función que retorna un objeto con tu estado y métodos.

```javascript
// store/useStore.js
import { create } from 'zustand';

export const useStore = create((set) => ({
  // Estado inicial - como las propiedades de tu ViewModel/ObservableObject
  user: null,
  cart: [],
  
  // Acciones - como los métodos públicos de tu ViewModel
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

La ventaja de Zustand es que el componente solo se re-renderiza cuando `cart` cambia. Si `user` cambia, este componente no se entera. En ViewModel y ObservableObject tendrías que gestionar esto manualmente con selectores o computed properties.


## Usando el store en componentes

```javascript
// screens/CartScreen.js
export default function CartScreen() {
  const cart = useStore((state) => state.cart);
  const removeFromCart = useStore((state) => state.removeFromCart);
  
  return (
    <View>
      <Text>Carrito ({cart.length} items)</Text>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
            <TouchableOpacity onPress={() => removeFromCart(item.id)}>
              <Text>Eliminar</Text>
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

Nota algo importante: `UserProfile` solo se re-renderiza cuando `user` cambia. Los cambios en `cart` no lo afectan. Esto es rendimiento automático.

## La magia de los selectores

Un selector es una función que extrae solo la parte del estado que necesitas:

```javascript
// Solo se actualiza cuando cart.length cambia
const cartCount = useStore((state) => state.cart.length);

// Solo cuando el nombre del usuario cambia
const userName = useStore((state) => state.user?.name);

// Selector computado: calcula el total
const total = useStore((state) => 
  state.cart.reduce((sum, item) => sum + item.price, 0)
);
```

Cada selector es una suscripción independiente. Zustand compara el resultado anterior con el nuevo, y solo actualiza el componente si cambió.

## El problema de la comparación superficial

JavaScript compara objetos por referencia, no por contenido. Esto causa un problema común:

```javascript
// ❌ MALO: Se re-renderiza siempre
function CartSummary() {
  const { cart, user } = useStore((state) => ({
    cart: state.cart,
    user: state.user
  }));
  // Cada vez retorna un nuevo objeto { cart, user }
}
```

La solución es usar shallow para comparar las propiedades internas:

```javascript
// ✅ BUENO: Solo se actualiza si cart o user cambian
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

## Acciones con lógica compleja

Puedes acceder al estado actual dentro de las acciones usando get:

```javascript
export const useStore = create((set, get) => ({
  products: [],
  cart: [],
  
  addToCart: (productId) => {
    const state = get();
    const product = state.products.find(p => p.id === productId);
    
    if (!product) {
      console.error('Producto no encontrado');
      return;
    }
    
    const existsInCart = state.cart.some(item => item.id === productId);
    
    if (existsInCart) {
      // Incrementar cantidad
      set((state) => ({
        cart: state.cart.map(item =>
          item.id === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }));
    } else {
      // Agregar nuevo
      set((state) => ({
        cart: [...state.cart, { ...product, quantity: 1 }]
      }));
    }
  }
}));
```

## Integración con React Navigation

Zustand funciona perfecto con React Navigation sin configuración especial:

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

Si necesitas navegar desde una acción del store, pasa la referencia de navigation:

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

// En tu LoginScreen
function LoginScreen({ navigation }) {
  const loginAndNavigate = useStore((state) => state.loginAndNavigate);
  
  const handleLogin = () => {
    loginAndNavigate({ email, password }, navigation);
  };
}
```

## Persistencia con AsyncStorage

Para guardar el estado entre sesiones de la app:

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
      
      // Solo persiste algunas propiedades
      partialize: (state) => ({
        user: state.user,
        theme: state.theme
        // cart NO se persiste (es temporal)
      })
    }
  )
);
```

Ahora user y theme se guardan automáticamente. Cuando el usuario abre la app de nuevo, el estado se restaura.

## Organización para apps grandes

Para apps pequeñas o medianas, un solo store funciona perfecto. Pero si tu store pasa de 300-400 líneas, puedes dividirlo en slices:

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

## Por qué Zustand funciona en React Native

React Native tiene requisitos de rendimiento estrictos, asi que necesitas mantener 60fps constantes o la app se siente lenta.

Zustand ayuda con esto por las actualizaciones granulares, es decir, solo los componentes suscritos a una parte específica del estado se actualizan, no tiene re-renders en cascada, tiene mínimo overhead (1KB de código es prácticamente nada) y cuenta con
optimización automática.

## Conclusión

Zustand te da estado global sin el drama de Context API o el boilerplate de Redux. Es especialmente bueno para React Native donde el rendimiento importa.

**Cuándo usar Zustand:**
- Estado compartido entre múltiples pantallas
- Datos de usuario y autenticación
- Carritos, favoritos, configuraciones
- Cualquier dato que necesites en varios lugares

**Cuándo NO usar Zustand:**
- Estado local de un solo componente (usa useState)
- Estado de formularios (usa react-hook-form)
- Estado de servidor (usa react-query o SWR)

---
title: "Arquitectura Modular en React Native CLI con TypeScript"
description: "Aprende a estructurar tus proyectos React Native de manera profesional y escalable usando una arquitectura modular con TypeScript. Guía práctica con ejemplos reales."
author: "Rosinni"
tags: ["React Native","TypeScript","Arquitectura de Software","Mobile Development","Clean Code","Modular Architecture"]
---


# Arquitectura Modular en React Native CLI con TypeScript

Cuando empezaste a trabajar con React Native, todo parecía manejable. Un par de pantallas, algunos componentes, tal vez un formulario o dos. Todo vivía felizmente en una carpeta `screens`, otra carpeta `components`, y listo. Funcionaba. Pero entonces el proyecto creció. De pronto tenías 20 pantallas, 50 componentes, lógica de autenticación mezclada con lógica de perfil, y cada vez que necesitabas cambiar algo, pasabas 10 minutos buscando dónde habías puesto ese archivo.

En este articulo vamos a hablar de **arquitectura modular**: qué es, por qué importa, y cómo implementarla en React Native CLI con TypeScript de una forma que realmente tenga sentido.

## ¿Qué significa "arquitectura modular"?

Imagina que estás organizando tu casa. Puedes tener todo amontonado en una habitación gigante; ropa, libros, platos, herramientas... o puedes tener habitaciones separadas, cocina, dormitorio, estudio, cada una con sus propias cosas y su propia función.

La arquitectura modular es exactamente eso, pero para tu código. En lugar de tener todo mezclado en carpetas genéricas como `screens` o `components`, organizas tu aplicación por **características** o **funcionalidades** (features). Cada feature es como su propia mini-aplicación dentro de la aplicación grande.

Por ejemplo:
- Todo lo relacionado con autenticación (login, registro, recuperar contraseña) vive en un módulo `auth`
- Todo lo relacionado con el perfil del usuario vive en un módulo `profile`
- El dashboard con sus gráficos y estadísticas tiene su propio módulo

Cada módulo contiene sus propias pantallas, componentes, hooks, y lógica de estado. Es **autocontenido** y no depende innecesariamente de otros módulos.

## Monolítico vs Modular: un contraste simple

### Enfoque monolítico (lo que haces al principio)

```
/src
  /screens
    LoginScreen.tsx
    RegisterScreen.tsx
    ProfileScreen.tsx
    DashboardScreen.tsx
    SettingsScreen.tsx
    // ... 20 pantallas más
  /components
    Button.tsx
    Input.tsx
    ProfileHeader.tsx
    DashboardCard.tsx
    // ... 50 componentes más
  /hooks
    useAuth.ts
    useProfile.ts
    // ... mezclado todo
```

Esto funciona cuando eres solo tú y tienes 5 pantallas. Pero cuando el proyecto crece:
- No sabes qué componentes pertenecen a qué pantalla
- Los hooks están todos revueltos
- Cambiar algo en "auth" requiere tocar archivos en 4 carpetas diferentes
- Trabajar en equipo se vuelve un caos: ¿quién está editando qué?

### Enfoque modular (escalable y organizado)

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
      // ... su propia estructura
  /components
    // Componentes compartidos (Button, Input, Card)
  /hooks
    // Hooks compartidos (useKeyboard, useDebounce)
  /store
    // Store global si usas Zustand, Redux, etc.
  /navigation
    RootNavigator.tsx
  /utils
  /types
```

Ahora todo relacionado con autenticación vive junto. Si quieres trabajar en el login, sabes exactamente dónde ir. Si otro desarrollador está trabajando en el dashboard, no se cruzan en tu camino.

## Construyendo una estructura modular paso a paso

Vamos a crear un ejemplo práctico. Supongamos que estás construyendo una app de fitness con autenticación, perfil de usuario, y un dashboard de estadísticas.

### 1. Estructura base de un módulo

Cada feature tiene esta estructura básica:

```
/features
  /auth
    /screens       # Pantallas de este módulo
    /components    # Componentes específicos de este módulo
    /hooks         # Hooks específicos de este módulo
    /store         # Estado local del módulo
    /types         # Tipos TypeScript del módulo
    /utils         # Utilidades específicas
    index.ts       # Exportaciones públicas del módulo
```

El archivo `index.ts` es crucial: **controla qué exporta tu módulo**. Piensa en él como la puerta de entrada del módulo.

```tsx
// src/features/auth/index.ts

export { LoginScreen, RegisterScreen } from './screens';
export { useAuth } from './hooks/useAuth';
export { authStore } from './store/authStore';
export type { User, AuthState } from './types';

// Los componentes internos NO se exportan
// Esto mantiene la encapsulación del módulo
```

### 2. Ejemplo: Módulo de autenticación

Vamos a construir un módulo de autenticación completo pero simple.

**Store con Zustand:**

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
      // Aquí iría tu llamada a API
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

**Hook personalizado:**

```tsx
// src/features/auth/hooks/useAuth.ts

import { useAuthStore } from '../store/authStore';

/**
 * Hook que encapsula la lógica de autenticación.
 * Otros módulos pueden usar este hook sin conocer
 * los detalles internos del store.
 */
export const useAuth = () => {
  const { user, isAuthenticated, isLoading, login, logout } = useAuthStore();

  // Podrías agregar lógica adicional aquí
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

**Pantalla de Login:**

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
      // La navegación se maneja automáticamente cuando isAuthenticated cambia
    } catch (err) {
      setError('Credenciales inválidas');
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

### 3. Comunicación entre módulos

Aquí es donde la cosa se pone interesante. ¿Cómo hace el módulo `profile` para acceder a la información del usuario que está en `auth`?

**La regla de oro: usa las exportaciones públicas**

```tsx
// src/features/profile/screens/ProfileScreen.tsx

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
// ✅ Importas desde el index.ts del módulo auth
import { useAuth } from '../../auth';

export const ProfileScreen = () => {
  // Usas el hook público que exporta el módulo de auth
  const { user } = useAuth();

  if (!user) {
    return <Text>Cargando...</Text>;
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

**Lo que NO debes hacer:**

```tsx
// ❌ NUNCA importes directamente desde archivos internos
import { useAuthStore } from '../../auth/store/authStore';

// ✅ SIEMPRE usa las exportaciones públicas
import { useAuth } from '../../auth';
```

¿Por qué? Porque si mañana decides cambiar Zustand por Redux en el módulo `auth`, solo necesitas actualizar el módulo `auth` y su hook `useAuth`. Todos los demás módulos siguen funcionando sin cambios.

## Componentes compartidos vs componentes del módulo

Esta es una pregunta que surge constantemente ¿dónde pongo mis componentes? **Piensa en LEGO.** Tienes piezas específicas (como la cabeza de un Stormtrooper que solo usas en sets de Star Wars) y piezas genéricas (como los bloques básicos que usas en cualquier construcción).

**Componentes del módulo** (específicos):
```tsx
// src/features/auth/components/LoginForm.tsx
// Solo se usa en el módulo de auth
```

**Componentes compartidos** (genéricos):
```tsx
// src/components/Button.tsx
// Se usa en múltiples módulos

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

## Navegación modular

Cada módulo puede tener su propio navegador. Por ejemplo, el módulo `auth` podría tener un stack navigator con las pantallas de login y registro:

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

Luego, en tu navegador principal:

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

## Store global vs store de módulo

Aquí hay una pregunta práctica: ¿cuándo usar un store global y cuándo un store por módulo?

- **Store de módulo:** Cuando el estado solo importa dentro de ese módulo. Por ejemplo: El estado de un formulario dentro de una feature, datos temporales de una pantalla o estado de UI específico del módulo.

- **Store global:** Cuando múltiples módulos necesitan acceder a la misma información. Por ejemplo: Datos del usuario autenticado (varios módulos lo necesitan), tema de la app (dark/light mode), configuración general o cache de datos compartidos.

Ejemplo de store global simple:

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

## TypeScript: tipado limpio y modular

Una ventaja enorme de esta arquitectura es que puedes tipar todo de forma muy clara:

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

Y luego exportar solo lo necesario:

```tsx
// src/features/auth/index.ts

export type { User, AuthState } from './types';
// No exportas LoginCredentials porque es interno del módulo
```

Esto te da **encapsulación**: otros módulos solo ven lo que necesitan ver.

## Beneficios reales que experimentarás

Después de adoptar esta arquitectura, notarás cambios tangibles:

**1. Onboarding más rápido**
Cuando entra alguien nuevo al equipo, le dices: "Vas a trabajar en el módulo de pagos, todo está en `/features/payments`". No tiene que buscar archivos en 10 carpetas diferentes.

**2. Menos conflictos en Git**
Si tú trabajas en `auth` y tu compañero en `dashboard`, rara vez tocan los mismos archivos. Los merge conflicts bajan dramáticamente.

**3. Refactors más seguros**
Puedes reescribir completamente el módulo de `profile` sin tocar nada más. Si las exportaciones públicas siguen siendo las mismas, el resto de la app ni se entera.

**4. Testeo más fácil**
Cada módulo se puede testear de forma aislada. No necesitas mockear media aplicación para probar una funcionalidad.

**5. Claridad mental**
Cuando abres tu editor, ves una estructura que tiene sentido. No hay ese momento de "¿dónde demonios puse esto?" que te roba 15 minutos de tu día.


## Conclusión

La arquitectura modular no es un concepto nuevo ni revolucionario. Es simplemente una forma de organizar tu código que respeta cómo funciona tu cerebro: agrupando cosas relacionadas y separando cosas diferentes. Al principio puede parecer más trabajo. "¿Por qué crear tantas carpetas?" Pero cuando tu app crece, cuando trabajas en equipo, cuando tienes que volver a un proyecto después de 6 meses, esta inversión inicial se paga sola mil veces.


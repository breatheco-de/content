---
title: "Domina la navegación en React Native con React Navigation"
description: "Guía completa de React Navigation de Callstack: aprende Stack, Tab y Drawer navigation, tipado con TypeScript, deep linking, y patrones avanzados para apps enterprise. Todo lo que necesitas saber sobre navegación profesional en React Native CLI."
author: "rosinni"
tags: ["React Native", "React Navigation", "CLI", "TypeScript", "Callstack", "Desarrollo Móvil"]
---

La navegación es el **sistema nervioso** de cualquier aplicación móvil. Define cómo los usuarios se mueven entre pantallas, cómo se preserva el estado, y cómo se sienten las transiciones. En aplicaciones profesionales con **React Native CLI**, dominar la navegación no es opcional: es fundamental.

**React Navigation** (desarrollado por Callstack) es el estándar de facto en la industria. Potencia miles de apps en producción, incluidas apps de Fortune 500. Es la biblioteca más madura, con soporte completo para la nueva arquitectura de React Native, optimizaciones nativas, y una API declarativa que facilita mantener proyectos grandes.

En esta lección, vamos directo a lo importante: **cómo usar React Navigation** para construir experiencias de navegación robustas y escalables.

## ¿Por qué React Navigation?

En aplicaciones móviles profesionales, la navegación no es solo "cambiar de pantalla". Una biblioteca de navegación profesional debe ofrecer:

- **Gestos nativos reales**: Swipe back en iOS, back button en Android
- **Animaciones de plataforma**: Transiciones que respetan las guías de Material Design y Human Interface Guidelines
- **Manejo de estado persistente**: El historial de navegación sobrevive a recargas y deep links
- **Tipado estricto**: TypeScript para prevenir errores de navegación en tiempo de compilación
- **Compatibilidad con nueva arquitectura**: Soporte completo para Fabric y Turbo Modules

React Navigation cumple todo esto y es mantenido activamente por Callstack, una empresa dedicada al ecosistema React Native.

## Fundamentos: NavigationContainer

Todo árbol de navegación en React Navigation debe estar envuelto en un `NavigationContainer`. Este componente: Mantiene el estado de navegación, gestiona el historial completo de la app, integra deep linking y conecta la navegación con el ciclo de vida nativo.

**Estructura básica:**

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

Nota: Solo necesitas **un** `NavigationContainer` en toda tu app, típicamente en el componente raíz.

## Stack Navigator: El patrón fundamental

El **Stack Navigator** (pila) es el patrón de navegación más común. Imagina una pila de cartas: cada pantalla nueva se coloca encima, y al retroceder, se remueve la carta superior.

### Native Stack vs JavaScript Stack

React Navigation ofrece dos implementaciones:

1. **`@react-navigation/native-stack`** ✅ Recomendado: Usa UINavigationController (iOS) y Fragment (Android) nativos, animaciones 60 FPS garantizadas, menor consumo de memoria, gestos nativos por plataforma.

2. **`@react-navigation/stack`**: Implementado completamente en JavaScript con Reanimated, más personalizable, util solo si necesitas animaciones muy específicas.

**Regla de oro**: Siempre usa `native-stack` a menos que tengas una razón muy específica para no hacerlo.

### Implementación básica con TypeScript

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
        headerBackTitle: 'Atrás', // iOS
        animation: 'slide_from_right', // Personalizar transición
      }}
    >
      <Stack.Screen 
        name="Home" 
        component={HomeScreen}
        options={{ title: 'Inicio' }}
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

### Opciones de pantalla dinámicas

Puedes configurar opciones basadas en props o estado:

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

## Navegación programática: el hook useNavigation

Para navegar desde cualquier componente, usa el hook `useNavigation`:

```tsx
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/types';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

function UserCard({ userId, userName }: Props) {
  const navigation = useNavigation<NavigationProp>();
  
  const handlePress = () => {
    // TypeScript valida los parámetros
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

### Métodos de navegación importantes

```tsx
// Navegar a una pantalla
navigation.navigate('Profile', { userId: '123' });

// Ir atrás (pop)
navigation.goBack();

// Volver a una pantalla específica del stack
navigation.navigate('Home');

// Reemplazar la pantalla actual (no permite volver atrás)
navigation.replace('Login');

// Limpiar el stack y navegar
navigation.reset({
  index: 0,
  routes: [{ name: 'Home' }],
});

// Ir al inicio del stack
navigation.popToTop();

// Verificar si puedes ir atrás
if (navigation.canGoBack()) {
  navigation.goBack();
}
```

## Recibir parámetros: route.params

Desde la pantalla destino, accede a los parámetros con `route.params`:

```tsx
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'Profile'>;

function ProfileScreen({ route, navigation }: Props) {
  const { userId, userName } = route.params;
  
  // TypeScript garantiza que estos parámetros existen
  return (
    <View>
      <Text>Usuario: {userName}</Text>
      <Text>ID: {userId}</Text>
      <Button 
        title="Editar" 
        onPress={() => navigation.navigate('EditProfile', { userId })}
      />
    </View>
  );
}
```

## Tab Navigator: Navegación por pestañas

El **Tab Navigator** es perfecto para secciones principales de tu app accesibles desde una barra inferior. Piensa en apps como Instagram, Twitter, o cualquier app con navegación persistente.

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
        headerShown: false, // Ocultar header por defecto
      })}
    >
      <Tab.Screen 
        name="HomeTab" 
        component={HomeScreen}
        options={{ tabBarLabel: 'Inicio' }}
      />
      <Tab.Screen 
        name="SearchTab" 
        component={SearchScreen}
        options={{ tabBarLabel: 'Buscar' }}
      />
      <Tab.Screen 
        name="ProfileTab" 
        component={ProfileScreen}
        options={{ tabBarLabel: 'Perfil' }}
      />
    </Tab.Navigator>
  );
}
```

### Ocultar tabs en pantallas específicas

A veces quieres ocultar la barra de tabs en ciertas pantallas:

```tsx
// Desde la pantalla
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

## Drawer Navigator: Menú lateral

El **Drawer Navigator** crea un menú lateral deslizable, común en apps con muchas secciones.

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
          drawerLabel: 'Inicio',
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

### Abrir/cerrar drawer programáticamente

```tsx
import { DrawerActions } from '@react-navigation/native';

function SomeScreen() {
  const navigation = useNavigation();
  
  // Abrir drawer
  const openDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };
  
  // Cerrar drawer
  const closeDrawer = () => {
    navigation.dispatch(DrawerActions.closeDrawer());
  };
  
  // Toggle
  const toggleDrawer = () => {
    navigation.dispatch(DrawerActions.toggleDrawer());
  };
  
  return <Button title="Abrir menú" onPress={openDrawer} />;
}
```

## Navegación anidada (Nested Navigation)

En apps complejas, es común **anidar navegadores**. Por ejemplo: tabs en el nivel superior, cada tab con su propio stack.

```tsx
// Cada tab tiene su propio stack
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

// Tab Navigator contiene los stacks
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

### Navegación entre stacks anidados

Para navegar desde un stack hijo a una pantalla de otro stack:

```tsx
// Desde HomeScreen (dentro de HomeTab)
function HomeScreen() {
  const navigation = useNavigation();
  
  const goToProfile = () => {
    // Navegar al tab Profile y luego a EditProfile
    navigation.navigate('ProfileTab', {
      screen: 'EditProfile',
      params: { userId: '123' },
    });
  };
  
  return <Button title="Ir a Editar Perfil" onPress={goToProfile} />;
}
```

### Acceder al navegador padre

```tsx
// Desde una pantalla anidada
function DetailsScreen() {
  const navigation = useNavigation();
  
  // Acceder al Tab Navigator (padre)
  const parentNavigation = navigation.getParent();
  
  // Cambiar de tab desde un stack hijo
  const switchToProfileTab = () => {
    parentNavigation?.navigate('ProfileTab');
  };
  
  return <Button title="Ir al tab Profile" onPress={switchToProfileTab} />;
}
```

## TypeScript avanzado: tipado completo del árbol de navegación

Para apps con navegación anidada, necesitas tipar correctamente toda la jerarquía:

```tsx
// src/navigation/types.ts
import type { NavigatorScreenParams } from '@react-navigation/native';

// Stack dentro de HomeTab
export type HomeStackParamList = {
  HomeMain: undefined;
  Details: { itemId: number };
};

// Stack dentro de ProfileTab
export type ProfileStackParamList = {
  ProfileMain: undefined;
  EditProfile: { userId: string };
};

// Tab principal
export type MainTabParamList = {
  HomeTab: NavigatorScreenParams<HomeStackParamList>;
  ProfileTab: NavigatorScreenParams<ProfileStackParamList>;
  SettingsTab: undefined;
};

// Root de toda la app
export type RootStackParamList = {
  Auth: undefined;
  MainApp: NavigatorScreenParams<MainTabParamList>;
  Modal: { modalType: 'info' | 'warning' };
};

// Helper para tipar useNavigation en cualquier pantalla
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
```

Con esta configuración, TypeScript autocompletará y validará **toda** tu navegación:

```tsx
// Desde cualquier pantalla, sin importar props
function AnyComponent() {
  const navigation = useNavigation();
  
  // ✅ Autocompletado completo
  navigation.navigate('MainApp', {
    screen: 'ProfileTab',
    params: {
      screen: 'EditProfile',
      params: { userId: '123' },
    },
  });
}
```

## Deep Linking: Navegación desde URLs

El **deep linking** permite abrir tu app en una pantalla específica desde una URL externa. Es esencial para:

- Notificaciones push que abren pantallas específicas
- Links compartidos (ej: perfil de usuario)
- Marketing campaigns
- Integración con otras apps

### Configuración básica de deep linking

La configuración nativa ya está lista en tu plantilla. Solo necesitas configurar React Navigation:

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

### URLs que funcionan con esta configuración

- `myapp://` → Home
- `myapp://user/123` → Profile con `userId: '123'`
- `myapp://item/456` → Details con `itemId: '456'`
- `https://myapp.com/user/123` → Profile con `userId: '123'`

### Deep linking con navegación anidada

Para navegadores anidados (tabs con stacks), estructura el config jerárquicamente:

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

URLs resultantes:
- `myapp://home` → HomeTab > HomeMain
- `myapp://details/123` → HomeTab > Details
- `myapp://profile/edit` → ProfileTab > EditProfile

### Obtener la URL que activó la app

```tsx
import { Linking } from 'react-native';

function SomeScreen() {
  useEffect(() => {
    // Obtener URL inicial (cuando la app estaba cerrada)
    Linking.getInitialURL().then((url) => {
      if (url) {
        console.log('App abierta desde:', url);
      }
    });
    
    // Escuchar deep links cuando la app está en background
    const subscription = Linking.addEventListener('url', ({ url }) => {
      console.log('Deep link recibido:', url);
    });
    
    return () => subscription.remove();
  }, []);
}
```

### Query parameters en deep links

React Navigation soporta query params automáticamente:

```tsx
// URL: myapp://profile?userId=123&tab=posts
function ProfileScreen({ route }) {
  const { userId, tab } = route.params;
  // userId: '123', tab: 'posts'
}
```

## Configuración global del NavigationContainer

### Interceptar todas las transiciones de estado

```tsx
import { NavigationContainer } from '@react-navigation/native';

function App() {
  const navigationRef = useRef(null);
  
  return (
    <NavigationContainer
      ref={navigationRef}
      onStateChange={(state) => {
        // Analytics: trackear cada cambio de pantalla
        const currentRoute = navigationRef.current?.getCurrentRoute();
        console.log('Navegó a:', currentRoute?.name);
        
        // Enviar a Firebase Analytics, Segment, etc.
        analytics.logScreenView({
          screen_name: currentRoute?.name,
          screen_class: currentRoute?.name,
        });
      }}
      onReady={() => {
        console.log('Navegación lista');
        routingInstrumentation.registerNavigationContainer(navigationRef);
      }}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}
```

### Obtener pantalla actual desde cualquier lugar

```tsx
// Crear referencia global
export const navigationRef = createNavigationContainerRef();

// En App.tsx
<NavigationContainer ref={navigationRef}>
  ...
</NavigationContainer>

// Usar desde cualquier archivo (incluso fuera de componentes)
import { navigationRef } from './navigation/navigationRef';

export function navigateFromAnywhere(name, params) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}

// Útil para:
// - Navegación desde notificaciones push
// - Navegación desde middleware de Redux
// - Navegación desde servicios
```

## Optimización de performance

### Lazy loading de pantallas

Para reducir el tiempo de carga inicial, carga pantallas bajo demanda:

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

**¿Cuándo usar lazy loading?** Pantallas poco frecuentes (configuración avanzada, términos legales), pantallas con dependencias pesadas, módulos de features opcionales.

### Optimización de re-renders

React Navigation re-renderiza pantallas en ciertos casos. Optimiza con `React.memo`:

```tsx
import React, { memo } from 'react';

const HomeScreen = memo(function HomeScreen({ route, navigation }) {
  // Este componente solo se re-renderiza si sus props cambian
  return <View>...</View>;
});

export default HomeScreen;
```

### detachInactiveScreens

Por defecto, React Navigation mantiene montadas las pantallas inactivas. Para liberar memoria:

```tsx
<Stack.Navigator
  screenOptions={{
    detachInactiveScreens: true, // Desmontar pantallas inactivas
  }}
>
  ...
</Stack.Navigator>
```

⚠️ **Cuidado**: Esto desmonta el componente al salir, perdiendo estado local. Úsalo solo si el estado está en Redux/Context o se persiste.


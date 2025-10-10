---
title: "Estado, ciclo de vida y renderizado dinámico en React Native con TypeScript"
subtitle: "Aprende useState, useEffect y renderizado condicional en el ecosistema móvil"
authors:
  - rosinni
tags:
  - react native
  - typescript
  - hooks
  - mobile development
---

React Native nos permite crear **aplicaciones móviles nativas** con la simplicidad declarativa de React. Cuando agregamos **TypeScript**, ganamos claridad y seguridad: sabemos qué tipo de datos maneja cada componente, y el editor nos ayuda a evitar errores en tiempo real.

En este artículo aprenderás tres pilares esenciales del desarrollo moderno con React Native:

1. **useState** — manejo de estado local  
2. **useEffect** — control del ciclo de vida  
3. **Renderizado condicional y listas** 


## Estado local con `useState`

Antes de entender `useState`, necesitamos imaginar cómo piensa React. Cada componente es como una pequeña máquina de estados; cuando esos datos cambian, la interfaz debe cambiar automáticamente.

En una app móvil real, el estado puede representar muchas cosas:

- El número de veces que un usuario presiona un botón.
- El texto que está escribiendo en un campo de formulario.
- Si un usuario está o no logueado.
- Un interruptor encendido o apagado.

En React, estos valores cambiantes se guardan con el hook `useState`. Este hook nos permite recordar datos entre renderizados y actualizarlos de forma reactiva, sin manipular la UI manualmente.


### Ejemplo básico con TypeScript

```tsx
import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

export default function Counter(): JSX.Element {
  const [count, setCount] = useState<number>(0);

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24 }}>Has hecho clic {count} veces</Text>
      <Button title="Incrementar" onPress={() => setCount(count + 1)} />
    </View>
  );
}
```

**Explicación**
- `useState<number>(0)` crea una variable de estado `count` que solo puede ser un número.
- `setCount` actualiza el estado y provoca un **re-render** automático.
- Cada clic muestra el nuevo valor en pantalla.

💡 En Kotlin, esto sería similar a usar un `MutableStateFlow<Int>` o un `LiveData<Int>` observado por la UI.


## Ciclo de vida con `useEffect`

`useEffect` se usa para ejecutar código **después de que el componente se renderiza**, o cuando cambian ciertos valores. Es el equivalente a `onCreate` y `onDestroy` en Android, o `viewDidLoad` y `viewDidDisappear` en iOS, pero expresado de forma declarativa.


### Ejemplo 1: montaje y desmontaje

```tsx
import React, { useEffect } from 'react';
import { View, Text } from 'react-native';

export default function SimpleEffect(): JSX.Element {
  useEffect(() => {
    console.log('🟢 Componente montado');

    return () => {
      console.log('🔴 Componente desmontado');
    };
  }, []);

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20 }}>Observa la consola</Text>
    </View>
  );
}
```

**Qué ocurre**
- Al aparecer el componente, se ejecuta el primer bloque.  
- Al desaparecer, se ejecuta la función de limpieza (`return`).

Equivalencias conceptuales:

| Android | React Native | Swift |
|----------|---------------|--------|
| `onCreate()` | `useEffect(() => {...}, [])` | `viewDidLoad()` |
| `onDestroy()` | `return () => {...}` | `viewDidDisappear()` |

### Ejemplo 2: temporizador con limpieza

```tsx
import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

export default function Timer(): JSX.Element {
  const [seconds, setSeconds] = useState<number>(0);

  useEffect(() => {
    console.log('⏱ Temporizador iniciado');

    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => {
      console.log('🧹 Temporizador detenido');
      clearInterval(interval);
    };
  }, []);

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 22 }}>Segundos: {seconds}</Text>
    </View>
  );
}
```

En Kotlin sería:

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

Y en Swift:

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

🪄 En React Native lo haces con **una sola estructura**, más declarativa y predecible.


### Ejemplo 3: efecto dependiente de un valor

```tsx
import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';

export default function DependentEffect(): JSX.Element {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    console.log(`El contador cambió a: ${count}`);
  }, [count]); // solo se ejecuta cuando cambia count

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20 }}>Contador: {count}</Text>
      <Button title="Incrementar" onPress={() => setCount(count + 1)} />
    </View>
  );
}
```

💡 En Kotlin podrías compararlo con observar un `LiveData<Int>` y en Swift con una propiedad `didSet`.


## 3. Renderizado condicional y listas

El renderizado condicional permite mostrar diferentes vistas según el estado.

```tsx
import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

export default function LoginExample(): JSX.Element {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);

  return (
    <View style={{ padding: 20 }}>
      {loggedIn ? (
        <>
          <Text style={{ fontSize: 20 }}>¡Bienvenido de nuevo!</Text>
          <Button title="Cerrar sesión" onPress={() => setLoggedIn(false)} />
        </>
      ) : (
        <>
          <Text style={{ fontSize: 20 }}>Por favor, inicia sesión</Text>
          <Button title="Iniciar sesión" onPress={() => setLoggedIn(true)} />
        </>
      )}
    </View>
  );
}
```

Esto es similar a usar un `if` o un `when` en Kotlin, pero **dentro del propio JSX**, mezclando lógica y presentación.


## Listas dinámicas

Para renderizar listas en React Native se usa `FlatList`, optimizada para rendimiento.

```tsx
import React from 'react';
import { View, Text, FlatList } from 'react-native';

interface Task {
  id: string;
  text: string;
}

export default function TodoList(): JSX.Element {
  const tasks: Task[] = [
    { id: '1', text: 'Aprender useState' },
    { id: '2', text: 'Practicar useEffect' },
    { id: '3', text: 'Dominar el renderizado condicional' },
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

## En resumen

| Concepto | Kotlin | Swift / SwiftUI | React Native |
|-----------|---------|----------------|---------------|
| Estado | `LiveData`, `MutableStateFlow` | `@State`, `@Published` | `useState` |
| Efectos de ciclo de vida | `onCreate()`, `onDestroy()` | `.onAppear {}`, `.onDisappear {}` | `useEffect` |
| Vista condicional | `if`, `when` | `if`, `switch` | `{condición ? <A/> : <B/>}` |
| Listas dinámicas | `RecyclerView` | `List` | `FlatList` |


React Native con TypeScript te enseña a **pensar en estados y efectos**, no en instrucciones. El flujo de datos es unidireccional, y los componentes **reaccionan automáticamente** a los cambios, sin que tú tengas que “decirles qué hacer”.


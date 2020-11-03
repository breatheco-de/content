---
title: "Hooks de React"
subtitle: "Los Hooks son la nueva forma de crear componentes React, son imposibles de evitar. En esta lección no enfocaremos en los 2 más importantes: useState y useEffect"
cover: "https://ucarecdn.com/84c4d84c-51b9-4906-a572-71cc07ecfc8c/"
textColor: "white"
date: "2020-10-19T12:36:31-04:00"
authors: ["alesanchezr"]
status: "published"
tags: ["reactjs"]

---

## ¿Por qué hooks?

Los componentes funcionales que pasan props son sorprendentes porque son simples, tienen un rendimiento rápido y requieren de poco código, pero intentar mantener todos los componentes encapsulados puede volverse un infierno. Por otro lado, los componentes de clase a menudo son confusos, tanto para los humanos como para la máquinas, y no suelen entregar una experiencia positiva al desarrollador. Los Hooks proveen una forma para usar los métodos del state y del ciclo de vida con muy poco código, entregándole super poderes a tus componentes:

### ¿Mis componentes necesitan superpoderes?

En general, las props son suficiente para crear un componente sorprendente, pero a veces es necesario más. Estos son algunos ejemplos realmente útiles para saber cuándo usar hooks:

1. Si quieres abrir o cerrar un modal o diálogo, usa el hook **useState**.
2. Si quieres obtener algunos datos solo al comienzo de la ejecución del programa, usa el hook **useEffect**.
3. Si quieres compartir información dentro de todos los componentes, usa el hook **useContext**.

A medida que tengas más experiencia, comprenderás mejor cuándo usar Hooks. Si no los necesitas, ¡NO lo uses! ¡Cuanto menos mejor!

### Todas las aplicaciones necesitan al menos un <strong>useState</strong> y un <strong>useEffect</strong>. Para usar hooks, PRIMERO DEBEMOS IMPORTARLOS al inicio de nuestro archivo. Por ejemplo si necesitaramos usar un useState, haríamos lo siguiente:

```jsx
import React, { useState } from 'react';
```

Y si quisieramos usar también el useEffect, lo incluiríamos así:

```jsx
import React, { useState, useEffect } from 'react';
```

Ahora aprendamos a utilizarlos :)

## El hook `useState`:

El hook más importante, ¡casi inevitable! El <strong>useState</strong> te ayuda a inicializar una variable y cambiar su valor con el tiempo sin recurrir a los componentes padres.

```jsx
//      Nombre de variable      setter name            valor inicial (cualquier valor)
const [ mySuperVariable, mySuperFunction ] = useState(          null        );
```

Básicamente, `mySuperVariable` se inicializa con `null` y luego tu podrás restablecer su valor llamando a `mySuperFunction` de esta forma:

```jsx
// aqui estamos restableciendo el valor de mySuperVariable = 'hello' cuando el usuario hace clic en un botón
<button onClick={() => mySuperFunction('hello')}></button>
```

### Posible usos para </strong>el hook ` useState` </strong>

|  |  |  |
| ----------- | ---- |
| 1. Contador: Mostrar el número de Likes en la pantalla y poder aumentarlos o disminuirlos cuando el usuario haga clic, [haz clic aquí para ver el demo](https://codesandbox.io/s/wild-pond-soxu8?fontsize=14) | ![React Counter with Hooks](https://ucarecdn.com/af747595-cf02-42ca-a6bf-00c0c512ef40/reactcounterhooks.gif) |
| 2. Temporizador/Reloj: Tú puedes usar la hora del sistema para mostrar la hora actual en la pantalla, pero como la hora cambia todo el tiempo, la guardamos en una variable del state, [haz clic aquí para ver el demo](https://codesandbox.io/s/hungry-paper-kkh7g?fontsize=14) | ![Construyendo un temporizador con Hooks](https://ucarecdn.com/763d40a2-d4ea-4cf5-a2cd-dc777f71efcb/timerreacthooks.gif) |
| 3. Mostrar una entrada en la pantalla: La mejor práctica para obtener el contenido de cualquier entrada es almacenarla en una variable del state, esto se denomina "Entrada controlada", [haz clic aquí para ver un ejemplo de entrada controlada](https://codesandbox.io/s/brave-albattani-irhy7?fontsize=14) | ![Controlled Input con React](https://ucarecdn.com/d1347307-d440-464f-a793-7a457e9903ad/controlledinputreact.gif) |
| 4. Apertura/cierre (mostrar / ocultar): un caso típico es tener un diálogo que hace una pregunta o tal vez algún formulario de suscripción a un boletín, [haz click aquí para ver el ejemplo](https://codesandbox.io/s/modal-window-component-with-hooks-vb6de?fontsize=14). | ![Ventana modal utilizando react hooks](https://ucarecdn.com/03d2c2c4-f510-4088-9bb0-1665dbfe8a68/modalwindowhooks.gif) |

| 5. Miles de otras posibles aplicasiones. | |

Vamos a explicar este hook con una pequeña ventana modal de ejemplo, aquí está el código:

<iframe src="https://codesandbox.io/embed/goofy-sutherland-vb6de?fontsize=14" title="Modal with hooks" allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

Para implementar un "Ventana Modal" decidimos crear una variable hook llamada `opened` que es `true` si la ventana modal debe mostrarse al usuario.

Si una persona hace clic en "close", simplemente usamos la función hook `setOpened` para cambiar el valor de `opened` a `false`.

## El hook `useEffect`:

![Hook useEffect hook para el ciclo de vida del componente](https://ucarecdn.com/945ae0a2-2495-4955-9e9a-46fdd3efc682/componentlifecyclehooks.png)

El UseEffect es otro hook increíble que probablemente tendrás que usar en casi todas las aplicaciones de React cuando el componente se renderice,.

#### 1) Después de que el componente se procesa por primera vez (como el antiguo componentDidMount).
```jsx
const MyComponent = () => {
    useEffect(() =>

        // el código que pongas aquí se ejecutará solo después de la primera vez que el componente se renderice

    , []);// <------ AQUI HAY UN ARRAY VACÏO
    return <Some HTML>;
}
```
[[info]]
| :point_up: Considera al `[]` como el segundo parámetro de useEffect.

#### 2) Cada vez (o algunas veces) después de que el componente se vuelva a renderizar.
```jsx
const MyComponent = () => {
    useEffect(() =>
        // esto se ejecutará cada vez que el componente se vuelva a renderizar
        if(some_condition){
            //esto solo de ejecutará si some_condition es true
        }
    );// <------ ¡TEN EN CUENTA QUE EL ARRAY VACÍO SE HA IDO!

    return <Some HTML>;
}
```
[[info]]
| :point_up: Este useEffect no tiene un array vacío `[]` como segundo parámetro.

#### 3) Cuando el componente se de o dejará de renderizarse (como la buena y vieja función componentWillUnmount).
```jsx
const MyComponent = () => {
    useEffect(() =>
        // esto se ejecutará solo la primera vez que el componente se renderice.
        return () => {
            // esto se ejecutará justo antes de que el componente se desmonte
        }
    ,[]);// <------ ¡TEN EN CUENTA EL ARREGLO VACÍO!

    return <Some HTML>;
}
```

## Construyendo un Todo's List Usando solo los Hooks `useState` y `useEffect`

<p align="center">
    <img src="../../assets/images/41f4a2be-380f-47af-acab-d479acf80921todolisthooks.gif">
</p>

Por ejemplo, digamos que estoy construyendo una lista de tareas y tengo que cargar la lista de tareas desde una API. Tendré que buscar(fetch) la información justo después de que el componente se renderice por primera vez:

```jsx
const Todos = (props) => {
    //inicializa la variable de tareas en un array vacío y enlázala a la función setTasks
    const [ tasks, setTasks] = useState([]);

    //Esta función useEffect se ejecutará solo una vez, cuando el componente finalmente se cargue por primera vez.
    useEffect(() =>
        // aquí busco mis todos de la API
        fetch('https://assets.breatheco.de/apis/fake/todos/user/alesanchezr')
            .then(r => r.json())
            .then(data => setTasks(data)) // aqui reseteo la variable tasks con los datos entrantes.
    , []);

    return <ul>{tasks.map(t => <li>{t.label}</li>)}</ul>;
}
```
[[demo]]
| Revisa el código en profundidad y la demo en vivo [haciendo clic aquí](https://codesandbox.io/s/xenodochial-varahamihira-egh86?fontsize=14)

---
title: "Qué es un Hook en React"
subtitle: "Los Hooks son la nueva forma de crear componentes React, son imposibles de evitar. En esta lección nos enfocaremos en que es un hook y explicaremos los 2 hooks más importantes: useState y useEffect"
authors: ["alesanchezr"]
tags: ["reactjs", "javascript", "front-end"]

---

## ¿Por qué hooks?

Los componentes funcionales que pasan props son sorprendentes porque son simples, tienen un rendimiento rápido y requieren de poco código, pero intentar mantener todos los componentes encapsulados puede volverse un infierno. Por otro lado, los componentes de clase a menudo son confusos, tanto para los humanos como para la máquinas, y no suelen entregar una experiencia positiva al desarrollador. Los Hooks proveen una forma para usar los métodos del state y del ciclo de vida con muy poco código, ¡entregándole super poderes a tus componentes!

### ¿Mis componentes necesitan superpoderes?

En general, las props son suficiente para crear un componente sorprendente, pero a veces es necesario más. Estos son algunos ejemplos realmente útiles para saber cuándo usar hooks:

1. Si quieres abrir o cerrar un modal o diálogo, usa el hook **useState**.
2. Si quieres obtener algunos datos solo al comienzo de la ejecución del programa, usa el hook **useEffect**.
3. Si quieres compartir información dentro de todos los componentes, usa el hook **useContext**.

A medida que tengas más experiencia, comprenderás mejor cuándo usar Hooks. Si no los necesitas, ¡NO los uses!¡Cuanto menos mejor!

### Todas las aplicaciones necesitan al menos un useState y un useEffect

Para usar hooks, PRIMERO DEBEMOS IMPORTARLOS al inicio de nuestro archivo. Por ejemplo si necesitáramos usar un useState, haríamos lo siguiente:

```jsx
import React, { useState } from 'react';
```

Y si quisieramos usar también el useEffect, lo incluiríamos así:

```jsx
import React, { useState, useEffect } from 'react';
```

Ahora aprendamos a utilizarlos :)

## El hook `useState`:

El hook más importante, ¡casi inevitable! El **useState** te ayuda a inicializar una variable y cambiar su valor con el tiempo sin recurrir a los componentes padres.

```jsx
//    Nombre de variable    nombre del setter           valor inicial (cualquier valor)
const [ superVariable, setSuperVariable ] = useState(          null        );
```

Básicamente, `superVariable` se inicializa con `null` y luego tu podrás restablecer su valor llamando a `setSuperVariable` de esta forma:

```jsx
// Aquí estamos restableciendo el valor de superVariable = 'hello' cuando el usuario hace clic en un botón
<button onClick={() => setSuperVariable('hello')}></button>
```

### Posibles usos para el hook `useState`

1. Conteo: Mostrar el número de me gusta en la pantalla y poder aumentar o disminuir cuando el usuario hace clic.
 ![Contador de React con hooks](https://github.com/breatheco-de/content/blob/af1cdb34065da4640748b0be83a7fe2305440edc/src/assets/images/react-counter-usestate-example.gif?raw=true)
 [![Editar contador simple usando useState y hooks de React](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/simple-counter-using-usestate-and-react-hooks-soxu8?fontsize=14&hidenavigation=1&theme=dark)

```jsx
import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const Counter = () => {
  // Inicializar una variable de "count" en 0, la función setCount se utilizará para restablecer el valor de "count"
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>{count} likes</h2>
      {/* Restablecer "count" a su valor anterior + 1 */}
      <span onClick={() => setCount(count + 1)}>👍🏽</span>
      {/* Restablecer "count" a su valor anterior - 1 */}
      <span onClick={() => setCount(count - 1)}>👎🏽</span>
      <h3>Like or dislike to increase/decrease</h3>
    </div>
  );
};

ReactDOM.render(<Counter />, document.getElementById("root"));
```

2. Temporizador/Reloj: Puedes usar la hora del sistema para mostrar la hora actual en la pantalla, pero como la hora cambia todo el tiempo, la almacenamos con una variable de estado.

![Temporizador/reloj con hooks de React](https://s10.gifyu.com/images/ezgif.com-gif-maker-435c19aa6749269d2.gif?raw=true) 
[![Editar reloj de React](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/react-js-clock-7zefj?fontsize=14&hidenavigation=1&theme=dark)

```jsx
import React, { useEffect, useState } from "react";

const Clock = (props) => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

 
  return (
    <div>
      <h1>{time}</h1>
    </div>
  );
};

export default Clock;
```

3. Mostrar una entrada en la pantalla: La mejor práctica para obtener el contenido de cualquier entrada es almacenarlo en una variable de estado, esto se denomina "Entrada Controlada".

 ![Campo de input controlado](https://github.com/breatheco-de/content/blob/333c8192f0e451466854605edecc8f6b01c0fda4/src/assets/images/controlled-input-example.gif?raw=true) 
 [![Editar input controlado](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/controlledinput-rbh0m?fontsize=14&hidenavigation=1&theme=dark)

 ```jsx
import React, { useEffect, useState } from "react";

const ControlledInputForm = (props) => {
  //     mantiene el valor de la entrada
  const [currentValue, setValue] = useState("");
  return (
    <div>
      <h2>Your name is: {currentValue ? currentValue : "Not defined"}</h2>

      {/* 
       Esta es una entrada controlada porque su valor está sincronizado
       con la variable indicada currentValue 
     */}
      <input
        type="text"
        onChange={(e) => setValue(e.target.value)}
        value={currentValue}
        placeholder="Please type your name"
      />
    </div>
  );
};

export default ControlledInputForm;
```

4. Apertura/Cierre (mostrar/ocultar): un caso de uso típico es tener un cuadro de diálogo que hace una pregunta o permite que un usuario se suscriba a un boletín informativo.

![Ventana Modal usando hooks de React](https://s10.gifyu.com/images/ezgif.com-gif-maker-51e6b7321e3cfd394.gif?raw=true) 
[![Editar componente Modal con hooks](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/modal-window-component-with-hooks-vb6de?fontsize=14&hidenavigation=1&theme=dark). 

```jsx
import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const Modal = () => {
  {/**
   *  Usando el hook useState, debes prestar atención a 3 elementos:
   * - opened: una variable que cambiará con el tiempo (puede tener cualquier nombre)
   * - setOpened: una función que restablece el valor "opened" (debería tener la palabra "set" antes del nombre de variable que escogiste)
   * - useState: este es el hook, tiene que ser useState y recibe el valor inicial para "opened"
   */}
  const [opened, setOpened] = useState(true);

  {/* si es opened === true, muestro el modal, de lo contrario, muestro el botón para abrir el modal */}
  return opened ? (
    <div>
      <h1>Hello BreatheCode</h1>
      <button type="button" onClick={() => setOpened(false)}>
        Close
      </button>
    </div>
  ) : (
    <button type="button" onClick={() => setOpened(true)}>
      Open
    </button>
  );
};

ReactDOM.render(<Modal />, document.getElementById("root"));
```

5. Miles de otras aplicaciones posibles. 

Expliquemos este hook con un pequeño ejemplo de ventana modal. Aquí está el código en vivo:

<iframe src="https://codesandbox.io/embed/goofy-sutherland-vb6de?fontsize=14" title="Modal with hooks" allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

Para implementar una "ventana modal" decidimos crear una variable de estado (useState) llamada `opened` que es `true` si la ventana modal se muestra al usuario.

Si el usuario hace clic en "close", simplemente usamos la función o *setter* del hook `setOpened` para cambiar el valor de `opened` a `false`.

## El hook `useEffect`:

![useEffect hook para el ciclo de vida de un componente](https://github.com/breatheco-de/content/blob/master/src/assets/images/945ae0a2-2495-4955-9e9a-46fdd3efc682componentlifecyclehooks.png?raw=true)

useEffect es otro hook increíble que usarás si deseas ejecutar algún código después de que el componente se renderice, por ejemplo:

### 1) Después de que el componente se renderice por primera vez (como el viejo y buen componentDidMount)

```jsx
const MyComponent = () => {
    useEffect(() => {

        // Lo que sea que codifiques aquí se ejecutará solo después de la primera vez que el componente se renderize

 }, []); // <------ TEN EN CUENTA EL ARRAY VACÍO

    return <div>Some HTML</div>;
}
```

> ☝ Por favor observa el `[]` como el segundo parámetro del useEffect.

### 2) Cada vez (o algunas veces) después de que el componente se vuelva a renderizar

```jsx
const MyComponent = () => {
    useEffect(() => {
        // Esto se ejecutará cada vez que el componente se vuelva a renderizar
        if(some_condition){
            // Esto se ejecutará solo si some_condition es true
        }
    }); // <------ ¡TEN EN CUENTA QUE EL ARRAY VACÍO SE HA IDO!

    return <div>Some HTML</div>;
}
```

> ☝ Este useEffect no tiene un array vacío `[]` como segundo parámetro.

### 3) Cuando se desmontará el componente o dejará de renderizarse (como la antigua función [componentWillUnmount](https://reactjs.org/docs/react-component.html#unsafe_componentwillmount) utilizada por los componentes de clase)

```jsx
const MyComponent = () => {
    useEffect(() => {
        // Esto se ejecutará solo la primera vez que el componente se renderiza
        return () => {
            // Esto se ejecutará justo antes de que el componente se desmonte
        }
    }, []); // <------ TEN EN CUENTA EL ARRAY VACÍO

    return <div>Some HTML</div>;
}
```

## Construyendo una lista de tareas usando solo los hooks `useState` y `useEffect`

<p align="center">
    <img src="https://github.com/breatheco-de/content/blob/master/src/assets/images/41f4a2be-380f-47af-acab-d479acf80921todolisthooks.gif?raw=true">
</p>

Por ejemplo, supongamos que estoy creando una lista de tareas (Todo list) y tengo que cargar la lista de tareas desde una API. Tendré que buscar la información justo después de que el componente se renderice por primera vez:

```jsx
const Todos = (props) => {
    // Inicializa la variable "tasks" como un array vacío y conéctalo a la función setTasks
    const [ tasks, setTasks ] = useState([]);

  // Ésta función encapsula la lógica de traer la lista de todos de la api
  // asi como crear una nueva lista si ésta no existe.
  const fetchList = async () => {
    const endpoint = "https://playground.4geeks.com/todo/users/demo";
    let response = await fetch(endpoint);
    if (response.ok) {
      // Sila lista se recibe, las task son cargadas con los todos
      let data = await response.json();
      setTasks(data.todos);// Aquí se actualiza la variable "tasks" con los datos entrantes
      return response.status;
    }
    if (response.status == 404) {
      // Si la lista no se encuentra, debe ser creada con una petición POST
      let newList = await fetch(endpoint, { method: "POST" });
      if (newList.ok) setTasks([]);
    }
  };

  // Esta función useEffect se ejecutará solo una vez, cuando el componente finalmente se cargue por primera vez
  useEffect(() => {
      // here I fetch my todos from the API
      fetchList();
    },[] // <---- thanks to this empty array the use effect will be called only once
  );
      return <ul>{tasks.map((t, index) => <li key={index}>{t.label}</li>)}</ul>;
}
    
```

> ☝ Revisa el código en profundidad y la demostración en vivo [haciendo clic aquí](https://codesandbox.io/p/sandbox/using-the-useeffect-to-load-data-on-component-mount-forked-8gprc3).

## Otras lecturas

Para más información, consulte: [La documentación oficial de React](https://react.dev/reference/react), también puedes leer [cómo crear tus propios hooks](https://react.dev/learn/reusing-logic-with-custom-hooks).

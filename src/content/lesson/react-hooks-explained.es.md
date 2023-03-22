---
title: "Hooks de React"
subtitle: "Los Hooks son la nueva forma de crear componentes React, son imposibles de evitar. En esta lección nos enfocaremos en los 2 más importantes: useState y useEffect"
cover: "https://ucarecdn.com/84c4d84c-51b9-4906-a572-71cc07ecfc8c/"
textColor: "white"
date: "2020-10-19T16:36:31+00:00"
authors: ["alesanchezr"]
status: "published"
tags: ["reactjs"]

---

## ¿Por qué hooks?

Los componentes funcionales que pasan props son sorprendentes porque son simples, tienen un rendimiento rápido y requieren de poco código, pero intentar mantener todos los componentes encapsulados puede volverse un infierno. Por otro lado, los componentes de clase a menudo son confusos, tanto para los humanos como para la máquinas, y no suelen entregar una experiencia positiva al desarrollador. Los Hooks proveen una forma para usar los métodos del state y del ciclo de vida con muy poco código, ¡entregándole super poderes a tus componentes!

### ¿Mis componentes necesitan superpoderes?

En general, las props son suficiente para crear un componente sorprendente, pero a veces es necesario más. Estos son algunos ejemplos realmente útiles para saber cuándo usar hooks:

1. Si quieres abrir o cerrar un modal o diálogo, usa el hook **useState**.
2. Si quieres obtener algunos datos solo al comienzo de la ejecución del programa, usa el hook **useEffect**.
3. Si quieres compartir información dentro de todos los componentes, usa el hook **useContext**.

A medida que tengas más experiencia, comprenderás mejor cuándo usar Hooks. Si no los necesitas, ¡NO los uses!¡Cuanto menos mejor!

### Todas las aplicaciones necesitan al menos un <strong>useState</strong> y un <strong>useEffect</strong>. Para usar hooks, PRIMERO DEBEMOS IMPORTARLOS al inicio de nuestro archivo. Por ejemplo si necesitáramos usar un useState, haríamos lo siguiente:

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
//    Nombre de variable    nombre del setter           valor inicial (cualquier valor)
const [ mySuperVariable, setMySuperFunction ] = useState(          null        );
```

Básicamente, `mySuperVariable` se inicializa con `null` y luego tu podrás restablecer su valor llamando a `mySuperFunction` de esta forma:

```jsx
// aquí estamos restableciendo el valor de mySuperVariable = 'hello' cuando el usuario hace clic en un botón
<button onClick={() => mySuperFunction('hello')}></button>
```

### Posible usos para </strong>el hook ` useState` </strong>

1. Conteo: Mostrar el número de me gusta en la pantalla y poder aumentar o disminuir cuando el usuario hace clic.
 ![Contador de reacción con ganchos](https://s10.gifyu.com/images/countergif.gif)
 [![Editar contador simple usando useState y ganchos de reacción](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/simple-counter-using-usestate-and-react-hooks-soxu8?fontsize=14&hidenavigation=1&theme=dark)

```jsx
import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const Counter = () => {
  // inicializar una variable de conteo en 0, la función setCount
  // se utilizará para restablecer el valor de "count" (recuento).
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>{count} likes</h2>
      {/* Restablecer el conteo a su valor anterior+ 1 */}
      <span onClick={() => setCount(count + 1)}>👍🏽</span>
      {/* Restablecer el conteo a su valor anterior - 1 */}
      <span onClick={() => setCount(count - 1)}>👎🏽</span>
      <h3>Like or dislike to increase/decrease</h3>
    </div>
  );
};

ReactDOM.render(<Counter />, document.getElementById("root"));
```

2. Temporizador/Reloj: Puedes usar la hora del sistema para mostrar la hora actual en la pantalla, pero como la hora cambia todo el tiempo, la almacenamos con una variable de estado.

![Building a timer with react hooks](https://s10.gifyu.com/images/ezgif.com-gif-maker-435c19aa6749269d2.gif) [![Edit React js Clock](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/react-js-clock-7zefj?fontsize=14&hidenavigation=1&theme=dark)

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

Clock.propTypes = {};

export default Clock;
```

3. Mostrar una entrada en la pantalla: La mejor práctica para obtener el contenido de cualquier entrada es almacenarlo en una variable de estado, esto se denomina "Entrada Controlada".

 ![Controlled input field](https://s10.gifyu.com/images/ezgif.com-gif-maker-399b80fa21c077ab6.gif) [![Edit controlledinput](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/controlledinput-rbh0m?fontsize=14&hidenavigation=1&theme=dark)

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
ControlledInputForm.propTypes = {};
export default ControlledInputForm;

```

4. Apertura/Cierre (mostrar/ocultar): un caso de uso típico es tener un cuadro de diálogo que hace una pregunta o permite que un usuario se suscriba a un boletín informativo.

![Modal Window using react hooks](https://s10.gifyu.com/images/ezgif.com-gif-maker-51e6b7321e3cfd394.gif) [![Edit Modal window component with hooks](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/modal-window-component-with-hooks-vb6de?fontsize=14&hidenavigation=1&theme=dark). 

```jsx
import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const Modal = () => {
  /**
   *  Usando el hook useState, debes prestar atención a 3 elementos:
   * - opened: una variable que cambiará con el tiempo (puede tener cualquier nombre)
   * - setOpened: una función que restablece el valor opened (abierto) (puede por cualquier nombre)
   * - useState: este es el hook, tiene que ser setState y recibe el valor inicial para "opened"
   */
  const [opened, setOpened] = useState(true);

  //si es opened === verdadero, muestro el modal, de lo contrario, muestro el botón para abrir el modal
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

Para implementar una "ventana modal" decidimos crear una variable hooked (enganchada) llamada `opened` que es `true` (verdadero) si la ventana modal tiene que mostrarse al usuario.

Si el usuario hace clic en "close" (cerrar), simplemente usamos la función hook de enlace `setOpened` para cambiar el valor de `opened` a `false` (falso).

## El hook `useEffect`:

![useEffect hook for the component lifecycle](https://github.com/breatheco-de/content/blob/master/src/assets/images/945ae0a2-2495-4955-9e9a-46fdd3efc682componentlifecyclehooks.png)

useEffect es otro hook increíble que usarás si deseas ejecutar algún código después de que el componente se renderice, por ejemplo:

#### 1) Después de que el componente se renderice por primera vez (como el viejo y buen componenteDidMount).

```jsx
const MyComponent = () => {
    useEffect(() =>

        // lo que sea que codifiques aquí se ejecutará solo después de la primera vez que el componente se procesa

 , []);// <------ TEN EN CUENTA LA MATRIZ VACÍA


    return <Some HTML>;
}
```

> :point_up: Por favor observa el `[]` como el segundo parámetro del useEffect.

#### 2) Cada vez (o algunas veces) después de que el componente se vuelva a renderizar.

```jsx
const MyComponent = () => {
    useEffect(() =>
        // esto se ejecutará cada vez que el componente se vuelva a renderizar
        if(some_condition){
            //esto se ejecutará solo si alguna_condición es verdadera
        }
    );// <------ ¡TEN EN CUENTA QUE EL ARREGLO VACÍO SE HA IDO!

    return <Some HTML>;
}
```

> :point_up: Este useEffect no tiene un array vacío `[]` como segundo parámetro.

#### 3) Cuándo se desmontará el componente o dejará de renderizarse (como la antigua función [componentWillUnmount](https://reactjs.org/docs/react-component.html#unsafe_componentwillmount) utilizada por los componentes de la clase).

```jsx
const MyComponent = () => {
    useEffect(() =>
        // esto se ejecutará solo la primera vez que el componente se procesa.
        return () => {
            // esto se ejecutará justo antes de que el componente se desmonte
        }
    ,[]);// <------ TEN EN CUENTA EL ARRAY VACÍO
    return <Some HTML>;
}
```

## Construyendo una lista Todo usando solo los hooks `useState` y `useEffect`

<p align="center">
    <img src="../../assets/images/41f4a2be-380f-47af-acab-d479acf80921todolisthooks.gif">
</p>

Por ejemplo, supongamos que estoy creando una lista de tareas (Todo) y tengo que cargar la lista de tareas desde una API. Tendré que buscar la información justo después de que el componente se renderice por primera vez:

```jsx
const Todos = (props) => {
    // inicializa la variable de tareas en un array  vacío y conéctelo a la función setTasks
    const [ tasks, setTasks] = useState([]);

    // esta función useEffect se ejecutará solo una vez, cuando el componente finalmente se cargue por primera vez.
    useEffect(() =>
        // aquí busco mis todos de la API
        fetch('https://assets.breatheco.de/apis/fake/todos/user/alesanchezr')
            .then(r => r.json())
            .then(data => setTasks(data)) //aquí restablece las tareas variables con los datos entrantes
    , []);

    return <ul>{tasks.map(t => <li>{t.label}</li>)}</ul>;
}
```

> :point_up: Revisa el código en profundidad y la demostración en vivo [haciendo clic aquí](https://codesandbox.io/s/xenodochial-varahamihira-egh86?fontsize=14)

## Otras lecturas

Para obtener más información, incluido [cómo crear tus propios hooks](https://reactjs.org/docs/hooks-custom.html), consulte: [Documentación oficial de React](https://reactjs.org/docs/hooks-overview.html)

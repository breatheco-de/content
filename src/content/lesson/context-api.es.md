---
subtitle: "La context API es la herramienta más reciente que React.js ha puesto a disposición para manejar el flujo de datos de su aplicación. Es el compañero perfecto para construir aplicaciones pequeñas sin necesidad de usar Redux"
title: "Implementando un estado global con context API"
cover_local: "../../assets/images/4cc6fa0b-2530-4052-aa7e-8dac03788ac3.png"
textColor: "white"
status: "published"
date: "2018-12-03T00:00:00+00:00"
tags: ["reactjs", "context-api"]

---

## ¿Por qué la vida antes de la API de contexto era más difícil?

Cuando trabajamos con React, compartir datos entre múltiples componentes puede volverse complicado. Inicialmente, usamos `useState` para manejar estados locales, pero a medida que nuestra aplicación crece, nos encontramos con problemas como:

- **Paso de props excesivo:** Pasar datos de un componente padre a un componente muy lejano en la jerarquía puede ser frustrante y poco eficiente.

- **Estados dispersos:** Cada componente maneja su propio estado, lo que hace difícil coordinar los cambios globales.

- **Falta de una gestión centralizada del estado:** Sin una estructura adecuada, actualizar el estado de manera global puede volverse desordenado.


### La Context API junto con useReducer resuelven estos problemas

React nos proporciona la `Context API` para compartir datos sin necesidad de pasar props manualmente, y `useReducer` nos ayuda a manejar los cambios de estado de manera predecible y estructurada.


#### Beneficios clave de esta combinación:

- Un estado global que puede ser accedido desde cualquier parte de la aplicación sin necesidad de props.

- Un mecanismo centralizado para modificar el estado mediante acciones bien definidas.

- Código más organizado y fácil de mantener.


## ¿Cómo funciona la API de contexto?

El concepto es simple: un único proveedor comparte información con múltiples consumidores, y `useReducer` se encarga de gestionar los cambios de manera estructurada.

Cada vez que el estado cambia, los componentes que lo consumen se actualizan automáticamente. Es similar a una señal de televisión: un canal transmite la señal y todos los televisores que están sintonizados la reciben.

> Todo el mundo tiene acceso al contexto global ahora.

![Explicación Context API](https://github.com/breatheco-de/content/blob/master/src/assets/images/72fe5361-5b2a-460f-8c2a-2d376616abf6.png?raw=true)

## Implementación paso a paso

### Paso 1: Definir el reducer y el estado inicial

Un reducer es una función que recibe el estado actual y una acción, y devuelve un nuevo estado en base a esa acción.

```javascript
// store.js - Definimos el estado inicial y las funciones del reducer

export const initialStore = () => ({
    todos: ["Hacer la cama", "Sacar la basura"]
});

export default function storeReducer(state, action) {
    switch (action.type) {
        case "ADD_TODO":
            return { ...state, todos: [...state.todos, action.payload] };
        default:
            return state;
    }
}
```

### Paso 2: Crear el contexto y el proveedor

Aquí creamos un Contexto y un Provider que envolverá nuestra aplicación para compartir el estado global.

```javascript
import { useContext, useReducer, createContext } from "react";
import storeReducer, { initialStore } from "../store";

const StoreContext = createContext();

export function StoreProvider({ children }) {
    const [store, dispatch] = useReducer(storeReducer, initialStore());
    return (
        <StoreContext.Provider value={{ store, dispatch }}>
            {children}
        </StoreContext.Provider>
    );
}

export default function useGlobalReducer() {
    return useContext(StoreContext);
}
```

### Paso 3: Envolver nuestra aplicación con el proveedor

Para que todos los componentes puedan acceder al estado global, debemos envolver nuestra aplicación con el StoreProvider en el archivo principal.

```javascript
import React from "react";
import ReactDOM from "react-dom";
import { StoreProvider } from "./context/StoreContext";
import App from "./App";

ReactDOM.render(
    <StoreProvider>
        <App />
    </StoreProvider>,
    document.getElementById("root")
);
```

### Paso 4: Usar el contexto en un componente

Ahora podemos acceder al estado global y modificarlo desde cualquier componente con useGlobalReducer().

```javascript
import React from "react";
import useGlobalReducer from "../context/StoreContext";

const TodoList = () => {
    const { store, dispatch } = useGlobalReducer();

    return (
        <div>
            <ul>
                {store.todos.map((task, i) => (
                    <li key={i}>{task}</li>
                ))}
            </ul>
            <button onClick={() => dispatch({ type: "ADD_TODO", payload: `Tarea ${store.todos.length + 1}` })}>
                + Añadir tarea
            </button>
        </div>
    );
};

export default TodoList;
```

## Flujo de datos unidireccional

El store es el punto central de nuestra aplicación, por lo que debemos asegurarnos de que su información no se modifique directamente. En su lugar, usamos el dispatch para ejecutar acciones que actualicen el estado.


## Prueba el código en vivo

<iframe src="https://codesandbox.io/embed/3jql6k?view=editor+%2B+preview&module=%2Fsrc%2Fcomponents%2FTodoList.jsx"
     style="width:100%; height: 500px; border:0; border-radius: 4px; overflow:hidden;"
     title="api-context-demo"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

<div align="right"><small><a href="https://codesandbox.io/p/sandbox/3jql6k">Haz clic aquí para abrir el demo en una nueva ventana</a></small></div> 

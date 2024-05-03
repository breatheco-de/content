---
title: "Qué es y como usar el hook useReducer en React.js"
subtitle: "Aprende a usar el hook useReducer en React.js y cómo funciona, comparalo con otras alternativas como redux, flux, entre otras."
cover: "https://storage.googleapis.com/media-breathecode/d41a3b74c971a2c43fb305d81cee53d1a946cdb6931f79db200f7fb7b2263806"
textColor: "white"
date: "2024-01-16T16:45:31-04:00"
tags: ["react","javascript"]
status: "draft"

---

## ¿Qué es el hook useReducer?

Los hooks fueron lanzados en la versión 16.8 de react. Desde entonces, toda la arquitectura de react se ha transformado en una serie de "Hooks" que permiten implementar la mayoría de los patrones de programación mas importantes.
El useReducer es una propuesta de React para separar la lógica de la vista de tus componentes. Hay otras soluciones como Redux, Flux, Global Context, etc; sin embargo el useReducer es sencillo de usar y mantiene un alcance local sobre los datos, es decir a pesar de reutilizar las funciones, los componentes no compartirán los datos entre sí.

## Ejemplo de useReducer

Este es un ejemplo sencillo de un contador para entender como usar useReducer:

```jsx
  const intitialCounter = () => ({counter: 0});
  const [state, dispatch] = useReducer(counterReducer, intitialCounter());
```

El hook `useReducer` recibe como primer parámetro una función que define el `reducer`, y retorna un arreglo de dos valores que representan al nuevo estado (`state`) y el dispatcher, el objeto que permite ejecutar las funciones de la lógica del reducer (`actions`). Como segundo parámetro se debe pasar una función que retorne un objeto con los valores iniciales del estado.

> El segundo valor del arreglo que deveulve el useReducer se llama "dispacher" y no "actions" porque es necesario tener un "despachador" de acciones como intermediario para evitar conflictos en los datos.

A su vez la función reducer (en este ejemplo se llama `counterReducer`) se define con 2 parámetros: El `state` que contiene los datos del reducer, y un objeto `"actions"` que se usa para identificar las acciones que podemos ejecutar para manipular el state.

```jsx
function counterReducer(state , action = {}) {
  // Aquí el reducer recibe el estado actual
  // luego ejecuta las acciones
  // por ultimo retorna el estado nuevo
}
```

Esta función `counterReducer` se va a ejecutar en cada llamado de acción y deberá retornar una nueva versión del estado que reemplaza por completo la anterior al terminar su ejecución, por lo que hay que ser cuidadoso y sólo alterar lo que necesitamos y retornar siempre los demás valores del estado utilizando la desestructuracion (js destructuring) 🤓.

👍**SI**

```javascript
return { ...state, counter: state.counter + 1 }
```

🚫**NO**

```javascript
return { counter: state.counter + 1 }
```

Dentro del reducer, el objeto `actions` contiene una propiedad `type` que nos indica que acción ha sido invocada, y podremos escribir la lógica basado en ello.

```javascript
export default function counterReducer(state, action = {}) {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, counter: state.counter + 1 };
    case "DECREMENT":
      return { ...state, counter: state.counter - 1 };
    case "PLUSTEN":
      return { ...state, counter: state.counter + 10 };
    case "MULTYPLYBYTWO":
      return { ...state, counter: state.counter * 2 };
    case "RESET":
      return { ...state, counter: 0 };
    default: 
    // En caso no tener ningún tipo se retorna el estado sin alterar
      return state;
  }
}
```

Ya con esto podemos tener tanto las funciones `counterReducer` e `intitialCounter` exportadas en un archivo, para ser utilizadas por cualquier otro componente 👌.

## ¿Por qué usar useReducer?

¿Qué pasa si necesitamos reutilizar sólo la lógica en otros componentes? Podríamos [hablar de estados centralizados](https://4geeks.com/es/lesson/context-api-es), pero ¿Qué pasa si sólo quiero reutilizar la lógica y que cada componente tenga un estado propio? Una solución poco práctica seria copiar y pegar, o exportar las funciones desde un archivo aparte y buscar alguna manera de hacerlas trabajar con el estado de cada componente 😰. Eso no suena conveniente...

Una solución a este problema es `useReducer`, que como dice su nombre, su función es **reducir** un estado y su lógica a una unidad reutilizable, permitiendo que esta se pueda exportar desde un archivo a los componentes que lo necesiten 💪. Este reducer va a cohexistir con el resto de la sintaxis típica de un componente React, puedes [aprender más aquí](https://4geeks.com/es/lesson/making-react-components-es).

## Migrando de useState a useReducer

En este ejemplo tenemos un contador que no solamente suma de 1 en 1, sino también tiene otras opciones para modificar su valor.

![react counter using state](https://breathecode.herokuapp.com/v1/media/file/state-counter-png?width=200)

Para realizar todas estas acciones se necesitan funciones para cada una de ellas, ademas del estado en si. Para eso usaremos el clasico hook `useState`, [aprende mas aquí](https://4geeks.com/es/lesson/react-hooks-explained-es).

```jsx
export default function CounterUsingState() {
  const [counter, setCounter] = useState(0);
  const increment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter - 1);
  const reset = () => setCounter(0);
  const plusten = () => setCounter(counter + 10);
  const multiplyByTwo = () => setCounter(counter * 2);

  return (
    <div className="container">
      <h2>State counter</h2>
      <h3>{counter}</h3>
      <div className="buttons">
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
        <button onClick={reset}>0</button>
        <button onClick={plusten}>+10</button>
        <button onClick={multiplyByTwo}>x2</button>
      </div>
    </div>
  );
}
```

Esto funciona perfecto, pero para hacer la lógica reutilizable y moverlo a otro archivo, lo convertiremos en un reducer:

```javascript
// counterReducer.js
export const intitialCounter = () => ({
  counter: 0
});
export default function counterReducer(state, action = {}) {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, counter: state.counter + 1 };
    case "DECREMENT":
      return { ...state, counter: state.counter - 1 };
    case "PLUSTEN":
      return { ...state, counter: state.counter + 10 };
    case "MULTYPLYBYTWO":
      return { ...state, counter: state.counter * 2 };
    case "RESET":
      return { ...state, counter: 0 };
    default:
      return state;
  }
}

```

Ahora desde el componente importamos y hacemos uso del reducer:

```jsx
import React, { useReducer } from "react";
import counterReducer, { intitialCounter } from "./counterReducer";

export default function CounterUsingReducer() {
  // Agregamos el hook useReducer, pasándole como parámetros
  // nuestra función reducer y el inicializador,
  // ambos importados desde otro archivo
  const [state, dispatch] = useReducer(counterReducer, intitialCounter());

  return (
    <div>
      <h2>Reducer counter</h2>
      {/* Ahora el counter esta dentro del estado del reducer */}
      <h3>{state.counter}</h3>
      <div>

        {/* Llamamos a la función dispatch con el tipo de acción para ejecutar la lógica del reducer */}
        <button onClick={() => dispatch({ type: "INCREMENT" })}>+1</button>
        <button onClick={() => dispatch({ type: "DECREMENT" })}>-1</button>
        <button onClick={() => dispatch({ type: "RESET" })}>0</button>
        <button onClick={() => dispatch({ type: "PLUSTEN" })}>+10</button>
        <button onClick={() => dispatch({ type: "MULTYPLYBYTWO" })}>x2</button>
      </div>
    </div>
  );
}
```

Para que esto funcione fue necesario usar el state del reducer y reemplazar las funciones que estaban antes, por llamados a la función `dispatch`, que ejecuta la lógica del reducer y recibe como parámetro el tipo de la acción que se va a ejecutar.

## Veamos ambos casos en acción

<iframe src="https://codesandbox.io/embed/q6fjct?view=Editor+%2B+Preview&module=%2Fsrc%2FcounterReducer.js"
     style="width:100%; height: 500px; border:0; border-radius: 4px; overflow:hidden;"
     title="useReducer Demo"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

## Todo listo

Ya hemos visto las ventajas de useReducer y sabemos como extraer la lógica de nuestro estado a un reducer ubicado en un archivo externo que pueden reutilizar los demás componentes. Esto no significa que tengas que desechar `useState` por completo y solo usar `useReducer`, como todo en programación se trata de usar la herramienta adecuada para el trabajo adecuado. Puedes aprender más de React y las herramientas que tiene [en esta categoria](https://4geeks.com/es/technology/reactjs)

Los reducer son ideales cuando tenemos muchas funciones asociadas al estado, y nos convenga agrupar lógica y datos. Esto puede darse en un escenario de gran complejidad o cuando se necesite reutilizar funciones y estados en varios componentes, ahi tendrás la poderosa herramienta de **useReducer** en tu arsenal.

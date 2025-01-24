---
title: ¿Qué es y cómo usar el hook useReducer en React.js
subtitle: >-
  Aprende a usar el hook useReducer en React.js y cómo funciona, compáralo con
  otras alternativas como redux, flux, entre otras.
cover: >-
  https://www.desktopbackground.org/p/2013/09/13/637935_nasa-wallpapers_1600x1200_h.jpg
textColor: white
date: '2024-01-16T16:45:31-04:00'
tags:
  - react
  - javascript
status: draft
description: >-
  Aprende a usar el hook useReducer en React.js y descubre cómo simplificar la
  gestión del estado en tus componentes. ¡Domina esta poderosa herramienta hoy!
---
## ¿Que es el hook useReducer?

Los hooks empezaron a existir en react desde la versión 16.8. Desde entonces, toda la arquitectura de react se ha transformado en una serie de "Hooks" que permiten implementar la mayoría de los patrones de programación mas importantes.

El useReducer es una propuesta de React para separar la lógica de la vista en tus componentes. Hay otras soluciones como Redux, Flux, Global Context, etc. Sin embargo, el useReducer se ha vuelto popular por ser sencillo de usar y mantener un alcance local sobre los datos, es decir, a pesar de reutilizar las funciones y código de los componentes, no se compartirán los datos entre sí.

> Separar los datos de los componentes ayudar a prevenir errores comunes y reutilizar la información y la lógica en la aplicación.

## Ejemplo de useReducer

El primer paso es declarar una función reducer (en este ejemplo se llama `counterReducer`) que se define con 2 parámetros: El `state` que contiene los datos del reducer, y un objeto `actions` que se usa para identificar las acciones que podemos ejecutar para manipular el state.

```javascript
function counterReducer(state , action = {}) {
  // Aquí el reducer recibe el estado actual
  // luego ejecuta las acciones
  // por ultimo retorna el estado nuevo
}
```

Esta función reducer se encarga de mutar (o "modificar") el estado de tu componente en función de los tipos de acciones predefinidas, y deberá retornar una nueva versión del estado que reemplaza por completo la anterior al terminar su ejecución, por lo que hay que ser cuidadoso y sólo alterar lo que necesitamos y retornar siempre los demás valores del estado utilizando la desestructuracion (js destructuring) 🤓.

```javascript
function counterReducer(state , action = {}) {
  // Hagas lo que hagas, siempre retorna un nuevo estado
  
  //👍**SI**
  return { ...state, counter: state.counter + 1 }
  
  //🚫**NO**
  //return { counter: state.counter + 1 }
}
```

Esta función se utiliza como primer parámetro del hook `useReducer`. Como segundo parámetro se debe pasar un objeto con los valores iniciales del estado.

El llamado al hook retorna un arreglo de dos valores que representan al nuevo estado (`state`) y el dispatcher: El objeto que llama la ejecución de las acciones de la lógica del reducer (`actions`).

```javascript
  const intialCounter={counter: 0}:
  const [state, dispatch] = useReducer(counterReducer, initialCounter);
```

Dentro de la función reducer, el objeto `actions` contiene una propiedad `type` que nos indica qué acción ha sido invocada, y podremos escribir la lógica para mutar el estado por completo en función a esta propiedad.

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
      throw Error("No se encuentra la acción especificada")
  }
}
```

Ademas de las acciones especificadas, se coloca un caso `default` que se ejecuta cuando el tipo de acción no esta definido, para lo cual se arroja un error que interrumpe la aplicación. Esto puede parecer un poco extremo, pero es mejor tener un error visible y depurarlo, que tener una aplicación sin errores(🐞bugs) pero que no funciona como debería.

Ya con esto podemos tener tanto las funciones `counterReducer` y el estado inicial `initialCounter` exportadas en un archivo, para ser utilizadas por cualquier otro componente 👌.

## ¿Por qué usar useReducer?

Estamos acostumbrados a percibir los componentes como la unidad que agrupa la vista y la lógica para su funcionamiento. Por ejemplo: En el siguiente código hay un componente `Counter` que tiene el HTML para definir como debería verse un contador de números y también existe la lógica de como sumar una unidad cada vez que se presione el botón "+1"

```jsx
export default function Counter() {

  // Lógica ⬇️
  const [counter, setCounter] = useState(0);
  const increment = () => setCounter(counter + 1);

  // Vista ⬇️
  return (
    <div className="container">
      <h2>State counter</h2>
      <h3>{counter}</h3>
      <div className="buttons">
        <button onClick={increment}>+1</button>
      </div>
    </div>
  );
}
```

Pero ¿Qué pasa si necesitamos reutilizar sólo la lógica en otros componentes? Podríamos [hablar de estados centralizados](https://4geeks.com/es/lesson/context-api-es), pero ¿Qué pasa si sólo quiero reutilizar la lógica y que cada componente tenga un estado propio? Una solución poco práctica seria copiar y pegar, o exportar las funciones desde un archivo aparte y buscar alguna manera de hacerlas trabajar con el estado de cada componente 😰. Eso no suena conveniente...

Una solución a este problema es `useReducer`, que como dice su nombre, su función es **reducir** un estado y su lógica a una unidad reutilizable, permitiendo que esta se pueda exportar desde un archivo a los componentes que lo necesiten 💪. Este reducer va a coexistir con el resto de la sintaxis típica de un componente React, puedes [aprender más aquí](https://4geeks.com/es/lesson/making-react-components-es).

## Migrando de useState a useReducer

En este ejemplo tenemos un contador que no solamente suma de 1 en 1, sino también tiene otras opciones para modificar su valor.

![react counter using state](https://breathecode.herokuapp.com/v1/media/file/state-counter-png?width=200)

Para realizar todas estas acciones se necesitan funciones para cada una de ellas, ademas del estado en si. Para eso usaremos el clásico hook `useState`, [aprende mas aquí](https://4geeks.com/es/lesson/react-hooks-explained-es).

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
export const initialCounter = {counter: 0};
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
import counterReducer, { initialCounter } from "./counterReducer";

export default function CounterUsingReducer() {
  // Agregamos el hook useReducer, pasándole como parámetros
  // nuestra función reducer y el inicializador,
  // ambos importados desde otro archivo
  const [state, dispatch] = useReducer(counterReducer, initialCounter);

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

<iframe src="https://codesandbox.io/embed/t34ldl?view=Editor+%2B+Preview&module=%2Fsrc%2Freducercounter.js&hidenavigation=1"
     style="width:100%; height: 500px; border:0; border-radius: 4px; overflow:hidden;"
     title="useReducer Demo"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

## Todo listo

Ya hemos visto las ventajas de useReducer y sabemos como extraer la lógica de nuestro estado a un reducer ubicado en un archivo externo que pueden reutilizar los demás componentes. Esto no significa que tengas que desechar `useState` por completo y solo usar `useReducer`, como todo en programación se trata de usar la herramienta adecuada para el trabajo adecuado. Puedes aprender más de React y las herramientas que tiene [en esta categoría](https://4geeks.com/es/technology/reactjs)

Los reducer son ideales cuando tenemos muchas funciones asociadas al estado, y nos convenga agrupar lógica y datos. Esto puede darse en un escenario de gran complejidad o cuando se necesite reutilizar funciones y estados en varios componentes, ahi tendrás la poderosa herramienta de **useReducer** en tu arsenal.

---
title: Qué es y cómo usar el hook useReducer en React.js
cover: >-
  https://www.desktopbackground.org/p/2013/09/13/637935_nasa-wallpapers_1600x1200_h.jpg
tags:
  - react
  - javascript
description: >-
  Aprende a usar el hook useReducer en React.js para gestionar el estado de tus
  componentes de manera eficiente. ¡Descubre cómo simplificar tu código hoy!
---
## Qué es useReducer

Los Hooks se introdujeron en React a partir de la versión 16.8. Desde entonces, han permitido una mejor gestión del estado y la lógica en los componentes funcionales.

El hook `useReducer` es una alternativa a `useState` para manejar estados complejos. Se basa en el patrón de reducción, donde una función **"reducer"** recibe el estado actual y una acción, y devuelve un nuevo estado. Es una solución ligera en comparación con Redux o Flux y es ideal cuando un componente requiere múltiples actualizaciones de estado basadas en diferentes acciones.

## Ejemplo de useReducer

Este es un ejemplo básico de `useReducer`:

```react
const initialCounter = () => ({ contador: 0 });
const [state, dispatch] = useReducer(counterReducer, initialCounter());
```

El hook `useReducer` recibe dos argumentos:

- **Reducer:** Una función que determina cómo cambiar el estado según la acción recibida.

- **Estado inicial:** Puede ser un objeto o una función que retorne un estado inicial.

El `dispatch` es una función que permite enviar acciones para modificar el estado.


## La función reducer

El reducer recibe el estado actual y una acción para generar un nuevo estado:

```javascript
function counterReducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, contador: state.contador + 1 };
    case "DECREMENT":
      return { ...state, contador: state.contador - 1 };
    case "PLUSTEN":
      return { ...state, contador: state.contador + 10 };
    case "MULTIPLYBYTWO":
      return { ...state, contador: state.contador * 2 };
    case "RESET":
      return { ...state, contador: 0 };
    default:
      return state;
  }
}
```

Cada acción es un objeto con una propiedad type, que define la operación a realizar. Si la acción no coincide con ningún caso, el reducer devuelve el estado sin cambios.


## ¿Por qué usar useReducer?

Cuando un estado es simple, `useState` suele ser suficiente. Sin embargo, en casos donde hay múltiples acciones que afectan el estado, useReducer ayuda a mantener la lógica organizada y reutilizable.

Estamos acostumbrados a percibir los componentes como la unidad que agrupa la vista y la lógica para su funcionamiento. Por ejemplo, en el siguiente código hay un componente `Counter` que tiene el HTML para definir cómo debe verse un contador numérico, y también la lógica de cómo debería sumar una unidad cada vez que se presiona el botón «+1».

```javascript
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

Pero, ¿qué pasa si necesitamos reutilizar la lógica en otros componentes? Podríamos [hablar sobre estados centralizados](https://4geeks.com/en/lesson/context-api), pero ¿qué pasa si solo quiero reutilizar la lógica, y que cada componente tenga su propio estado? Una solución menos práctica sería copiar y pegar o exportar funciones desde un archivo separado y hacer que funcionen con el estado de cada componente 😰. Eso no suena conveniente...

La solución a este problema es `useReducer`, que, como su nombre indica, la función es **reducir** un estado y su lógica a una unidad reutilizable, permitiendo exportarlo desde un archivo a los componentes que lo necesiten 💪. Este reductor convivirá con el resto de la sintaxis típica de un componente React; puedes [aprender más aquí](https://4geeks.com/en/lesson/making-react-components).

## Migrando de useState a useReducer

Con `useState`, un contador con varias acciones se vería como el siguiente ejemplo en el que tenemos un contador que no sólo se incrementa de 1 en 1 sino que además tiene otras opciones para modificar su valor.

![react counter using state](https://breathecode.herokuapp.com/v1/media/file/state-counter-png?width=200)

```javascript
export default function CounterUsingState() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="container">
      <h2>State counter</h2>
      <h3>{counter}</h3>
      <div className="buttons">
        <button onClick={() => setCounter(counter + 1)}>+1</button>
        <button onClick={() => setCounter(counter - 1)}>-1</button>
        <button onClick={() => setCounter(0)}>0</button>
        <button onClick={() => setCounter(counter + 10)}>+10</button>
        <button onClick={() => setCounter(counter * 2)}>x2</button>
      </div>
    </div>
  );
}
```

Con useReducer, podemos trasladar la lógica a un archivo separado:

```javascript
// contadorReductor.js
export const initialCounter = () => ({ contador: 0 });

export default function counterReducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, contador: state.contador + 1 };
    case "DECREMENT":
      return { ...state, contador: state.contador - 1 };
    case "PLUSTEN":
      return { ...state, contador: state.contador + 10 };
    case "MULTIPLYBYTWO":
      return { ...state, contador: state.contador * 2 };
    case "RESET":
      return { ...state, contador: 0 };
    default:
      return state;
  }
}
```

Y ahora en el componente usamos `useReducer`:

```javascript
import React, { useReducer } from "react";
import counterReducer, { initialCounter } from "./counterReducer";

export default function CounterUsingReducer() {
  const [state, dispatch] = useReducer(counterReducer, initialCounter());

  return (
    <div>
      <h2>Reducer counter</h2>
      <h3>{state.contador}</h3>
      <div>
        <button onClick={() => dispatch({ type: "INCREMENT" })}>+1</button>
        <button onClick={() => dispatch({ type: "DECREMENT" })}>-1</button>
        <button onClick={() => dispatch({ type: "RESET" })}>0</button>
        <button onClick={() => dispatch({ type: "PLUSTEN" })}>+10</button>
        <button onClick={() => dispatch({ type: "MULTIPLYBYTWO" })}>x2</button>
      </div>
    </div>
  );
}
```

Ahora la lógica del estado es completamente reutilizable en otros componentes.

## Veamos ambos casos en acción

<iframe src="https://codesandbox.io/embed/t34ldl?view=Editor+%2B+Preview&module=%2Fsrc%2Freducercounter.js&hidenavigation=1»
     style="width:100%; height: 500px; border:0; border-radius: 4px; overflow:hidden;»
     title="useReducer Demo»
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts»
   ></iframe>

## Todo listo

Hemos visto las ventajas de useReducer y sabemos cómo extraer la lógica de nuestro estado a un reductor ubicado en un fichero externo que otros componentes pueden reutilizar. Esto no significa que tengas que descartar por completo `useState` y usar sólo `useReducer`; como todo en programación, se trata de usar la herramienta adecuada para el trabajo adecuado. Puedes aprender más sobre React y sus herramientas [en esta categoría](https://4geeks.com/en/technology/reactjs).

Los reductores son ideales cuando muchas funciones están asociadas con el estado, y agrupar la lógica y los datos es conveniente. Esto puede ocurrir en un escenario de gran complejidad o cuando funciones y estados necesitan ser reutilizados en múltiples componentes, entonces tendrás la poderosa herramienta de **useReducer** en tu arsenal.

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

Los Hooks comenzaron a existir en react desde la versión 16.8.

Desde entonces, toda la arquitectura de react se ha transformado en una serie de «Hooks» que le permiten implementar la mayoría de los principales patrones de programación.

El `useReducer` es un enfoque de React para separar la lógica de la vista en sus componentes. Existen otras soluciones como Redux, Flux, Global Context, etc. Sin embargo, el useReducer es sencillo de utilizar y mantiene un ámbito local sobre los datos, es decir, a pesar de reutilizar las funciones y el código de los componentes, los datos no serán compartidos.

## Ejemplo de useReducer

Este es el ejemplo más simple de useReducer:

```react
const intitialCounter = () => ({contador: 0});
const [state, dispatch] = useReducer(counterReducer, intitialCounter());
```

El hook `useReducer` recibe como primer parámetro una función que define el `reducer`, y devolverá un array de dos valores que representan el nuevo estado (`state`) y el dispatcher: El objeto que permite ejecutar las acciones/funciones de la lógica del reductor (`actions`). Como segundo parámetro se debe pasar una función que devuelva un objeto con los valores iniciales del estado.

> El segundo valor del array que devuelve el useReducer se llama «dispatcher» y no «actions» porque es necesario tener un «dispatcher» de acciones como intermediario para evitar conflictos de datos.

A su vez, la función reducer (en este ejemplo se llama `counterReducer`) se define con 2 parámetros: `state` que contiene los datos del reductor, y un objeto `«actions»` que sirve para identificar las acciones que podemos ejecutar para manipular el estado.

```react
function counterReducer(state, action = {}) {
  // Aquí el reductor recibe el estado actual
  // luego ejecuta las acciones
  // finalmente devuelve el nuevo estado
}
```

Esta función reducer se va a ejecutar en cada llamada a una acción y debe devolver una nueva versión del estado que sustituya completamente a la anterior al final de su ejecución, así que ten cuidado y altera sólo lo que necesitemos y devuelve siempre el resto de valores del estado usando la desestructuración 🤓 (js destructuring).

👍**SÍ**

```javascript
return { ...state, counter: state.counter + 1 }
```

🚫**NO**

```javascript
return { counter: state.counter + 1 }
```

Dentro del reductor, el objeto `actions` contiene una propiedad `type` que nos dice qué acción ha sido invocada, y podemos escribir lógica en base a eso.

```javascript
export default function counterReducer(state, action = {}) {
  switch (action.type) {
    case "INCREMENT":
      { return { ...state, counter: state.counter + 1 };
    case "DECREMENT":
      return { ...state, counter: state.counter - 1 };
    case "PLUSTEN":
      return { ...state, counter: state.counter + 10 };
    case "MULTYPLYBYTWO":
      return { ...state, counter: state.counter * 2 };
    case "RESET":
      return { ...state, counter: 0 };
    default:
    // En caso de no tipo se devuelve el estado inalterado.
      return state;
  }
}
```

Con esto, podemos tener tanto la función `counterReducer` como `intitialCounter` exportadas en un archivo, para ser usadas por cualquier otro componente 👌.

## Por qué usar useReducer

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

En este ejemplo, tenemos un contador que no sólo se incrementa de 1 en 1 sino que además tiene otras opciones para modificar su valor.

![react counter using state](https://breathecode.herokuapp.com/v1/media/file/state-counter-png?width=200)

To perform all these actions, we need functions for each of them, in addition to the state itself. For that, we will use the classic `useState` hook, [learn more here](https://4geeks.com/en/lesson/react-hooks-explained).

```react
export default function CounterUsingState() {
  const [counter, setCounter] = useState(0);
  const increment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter - 1);
  const reset = () => setCounter(0);
  const plusten = () => setCounter(counter + 10);
  const multiplyByTwo = () => setCounter(counter * 2);

  return (
    <div className=«container»>
      <h2>State counter</h2>
      <h3>{counter}</h3>
      <div className=«buttons»>
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

Esto funciona bien, pero para hacer la lógica reutilizable y trasladarla a otro fichero, la convertiremos en un reductor:

```react
// contadorReductor.js
export const contadorinicial = () => ({
  contador 0
});
export default function counterReducer(state, action = {}) {
  switch (acción.tipo) {
    case «INCREMENTO»:
      return { ...estado, contador: estado.contador + 1 };
    case «DISMINUIR»:
      return { ...estado, contador: estado.contador - 1 };
    case «PLUSTEN»:
      return { ...estado, contador: estado.contador + 10 };
    case «MULTIPLYBYTWO»:
      return { ...estado, contador: estado.contador * 2 };
    case «RESET»:
      return { ...estado, contador: 0 };
    por defecto:
      return estado;
  }
}
```

Ahora, desde el componente, importamos y usamos el reductor:

```react
import React, { useReducer } from «react»;
import counterReducer, { initialCounter } from «./counterReducer»;

export default function CounterUsingReducer() {
  // Add the useReducer hook, passing as parameters
  // our reducer function and the initializer,
  // both imported from another file
  const [state, dispatch] = useReducer(counterReducer, initialCounter());

  return (
    <div>
      <h2>Reducer counter</h2>
      {/* Now the counter is inside the reducer's state */}
      <h3>{state.counter}</h3>
      <div>

        {/* Call the dispatch function with the action type to execute the reducer's logic */}
        <button onClick={() => dispatch({ type: «INCREMENT» })}>+1</button>
        <button onClick={() => dispatch({ type: «DECREMENT» })}>-1</button>
        <button onClick={() => dispatch({ type: «RESET» })}>0</button>
        <button onClick={() => dispatch({ type: «PLUSTEN» })}>+10</button>
        <button onClick={() => dispatch({ type: «MULTIPLYBYTWO» })}>x2</button>
      </div>
    </div>
  );
}
```

Para que esto funcionara, era necesario utilizar el estado del reductor y sustituir las funciones que había antes por llamadas a la función `dispatch`, que ejecuta la lógica del reductor y recibe como parámetro el tipo de acción.

## Veamos ambos casos en acción

<iframe src="https://codesandbox.io/embed/t34ldl?view=Editor+%2B+Preview&module=%2Fsrc%2Freducercounter.js&hidenavigation=1»
     style="width:100%; height: 500px; border:0; border-radius: 4px; overflow:hidden;»
     title="useReducer Demo»
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts»
   ></iframe>

## Todo listo

Hemos visto las ventajas de useReducer y sabemos cómo extraer la lógica de nuestro estado a un reductor ubicado en un fichero externo que otros componentes pueden reutilizar. Esto no significa que tengas que descartar por completo `useState` y usar sólo `useReducer`; como todo en programación, se trata de usar la herramienta adecuada para el trabajo adecuado. Puedes aprender más sobre React y sus herramientas [en esta categoría](https://4geeks.com/en/technology/reactjs).

Los reductores son ideales cuando muchas funciones están asociadas con el estado, y agrupar la lógica y los datos es conveniente. Esto puede ocurrir en un escenario de gran complejidad o cuando funciones y estados necesitan ser reutilizados en múltiples componentes, entonces tendrás la poderosa herramienta de **useReducer** en tu arsenal.
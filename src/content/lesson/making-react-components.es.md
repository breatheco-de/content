---
title: "Creación de componentes React - Aprende qué es y cómo crear un componente React"
subtitle: "Los componentes son el pan de cada día en React.js. Aprende qué es y cómo crear componentes en React utilizando propiedades, el estado del componente y aprendiendo las sintaxis más comunes."
tags: ["reactjs"]

---

Imagina que estás construyendo un modelo de una ciudad usando bloques LEGO. Cada edificio, árbol, coche o cualquier otra pieza que puedas colocar en tu modelo de ciudad puede considerarse un componente. En el mundo del desarrollo web, particularmente cuando se utiliza una [tecnología llamada React](https://4geeks.com/es/technology/reactjs), este concepto es similar.

Un componente React es como una de esas piezas LEGO. Es una unidad autónoma que representa una parte de la interfaz de usuario (UI) en una aplicación web. Al igual que cada bloque LEGO se puede utilizar para construir diferentes partes de tu ciudad modelo y se puede reutilizar en diferentes escenarios, un componente React se puede usar para construir diferentes partes de un sitio web y puede reutilizarse en toda la aplicación.

> 📝 Los componentes no son un concepto nuevo en el desarrollo web, ya que bibliotecas como bootstrap ya definen los [componentes de bootstrap](https://4geeks.com/es/lesson/tutorial-aprende-bootstrap-5-en-10-minutos) como el `navbar`, `lista desplegable`, `modal`, etc.

## En React.js Todo es un componente

React.js separa tu código en pequeñas piezas llamadas componentes, que se pueden crear/definir usando una sintaxis de **clase** (legado) o como una sintaxis de **función**. Cada componente es como una pequeña aplicación React que tiene su propia lógica y propósito, que es mostrar o **renderizar** algo de HTML.

Casi cualquier HTML puede ser encapsulado y codificado como un **componente React**. Para hacerlo, cada componente React necesita tener una declaración `return` que devuelva algún código JSX (HTML + JS embebido). Por ejemplo, aquí está el clásico `navbar` de bootstrap encapsulado como un **componente React**.

```jsx
import React from 'react';

// un componente de función
function NavBar(props){
    return (<nav className="navbar navbar-light bg-light">
              <a className="navbar-brand" href="#">Navbar</a>
           </nav>);
}
```

> ☝️ Hay una manera antigua de usar clases de js para crear componentes, pero ya no la mostramos ni la recomendamos ya que fue deprecada hace mucho tiempo.

## Usando un componente

Una vez que has creado tu primer componente, puedes incluirlo o usarlo dentro del resto de tu código escribiendo el nombre de la función como una etiqueta HTML `<tag>`. Por ejemplo, si creaste un componente usando la sintaxis de función llamado Home, puedes incluirlo en tu código usando la etiqueta `<Home>` de esta manera:

```jsx
import React from "react";
import ReactDOM from "react-dom";

// Podemos usar el componente <Navbar /> para mostrarlo en la parte superior del componente Home
function Home(props){
    return (
        <div className="container-fluid"> // Observa que en JSX necesitamos usar el nombre de atributo 'className' en lugar de 'class'
            <Navbar />
            <div>
                ... El resto de los contenidos de Home ...
            </div>
        </div>
    );
}

// Aquí le decimos a React que ponga nuestro componente principal de la aplicación <Home /> dentro del elemento DOM con id #myApp
const root = ReactDOM.createRoot(document.getElementById('myApp'));
root.render(<Home />);

```

> 🔥 Observa que en JSX necesitamos usar el nombre de atributo 'className' en lugar de 'class', esto es porque React decidio apegarse al [className de los elementos del DOM](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) en lugar de su equivalente class en la sintaxis de HTML.

## Las Propiedades del componente (properties)

A veces, un componente necesita información dinámica para mostrar. Por ejemplo, necesitamos que nuestro componente `<Navbar />` muestre la lista de enlaces disponibles y el logotipo de la marca. Podemos incluir esa información dentro de la llamada del componente `<Navbar />` de la misma manera que lo hacemos en las etiquetas HTML.

```jsx
<Navbar foo="bar" foo2="bar2" />
```

En este ejemplo, estamos pasando un array de elementos de menú y una URL de logotipo al componente NavBar que acabamos de declarar arriba.

```jsx
let menu = [
    {label: 'Inicio', url: '/home'},
    {label: 'Contáctanos', url: '/contact-us'}
];
<Navbar items={menu} logo="http://path/to/logo.png" />
```

Ahora, dentro del `<Navbar />` podemos usar esos valores (que se entregan a través de la variable *props*) para renderizar la información proporcionada.

Y, por último, debes decirle a React dónde renderizar ese componente en el DOM.

<iframe src="https://codesandbox.io/p/sandbox/zwlnpwmxll?file=%2Fsrc%2Findex.js" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

<div align="right"><small><a href="https://codesandbox.io/p/sandbox/zwlnpwmxll?file=%2Fsrc%2Findex.js">Haz clic aquí para abrir la demo en una nueva ventana</a></small></div>

## El estado del componente React

Llamamos a los componentes en React ***con estado*** porque pueden incorporar variables de `estado` personalizadas (importando el hook useState) que tienen el único propósito de almacenar los datos necesarios para renderizar el componente correctamente. Un uso obvio del **estado** sería si, por ejemplo, tenemos un formulario con campos de entrada que necesitan ser llenados por el usuario. Los datos ingresados por el usuario necesitarán ser guardados en algún lugar para poder ser utilizados. Necesitarás una variable de `estado` para cada uno de los inputs en el formulario:

```jsx
//     elige un nombre para la variable     valor inicial
//            ⬇                                             ⬇
const [ email, setEmail ] = useState(null);
//                         ⬆
//             elige el nombre del modificador
```

En otro ejemplo, digamos que estás desarrollando un componente `<Clock />` que tiene que imprimir la hora actual cada segundo. Eso significa que nuestro componente necesitará una variable de estado `currentDatetime`. Esta variable necesitará ser actualizada cada segundo con la hora actual más nueva, cada vez que la variable se actualice el HTML del componente también se actualizará y mostrará la nueva fecha y hora en la pantalla.

![React component updates current time](https://github.com/breatheco-de/content/blob/master/src/assets/images/current-time-gif.gif?raw=true)

Para que el estado mantenga una página web actualizada, está programado para volver a renderizar el DOM cada vez que se modifica. Así que probablemente ya puedes ver cómo puedes aprovechar esta característica manteniendo tu hora actual dentro del estado y reasignándola a la hora más actual cada segundo. Así:

> 👇 La siguiente demo actualiza la hora actual cada segundo:

<iframe src="https://codesandbox.io/embed/zw852wvqp4?autoresize=1&amp;hidenavigation=1" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

<div align="right"><small><a href="https://codesandbox.io/embed/zw852wvqp4?autoresize=1&amp;hidenavigation=1">Haz clic aquí para abrir la demo en una nueva ventana</a></small></div>

### El Estado se considera Inmutable (no debe ser actualizado directamente)

Cuando se habla de modificar el valor del estado, tienes que recordar que el estado no debe ser mutado directamente.

```jsx

// asumiendo que has declarado un estado "count" así
//           ↓ variable     ↓ modificador
const [ count,    setCount   ] = useState(0);

# ❌ INCORRECTO: no puedes establecer directamente la variable count = 2
count = 2

# ✅ CORRECTO: necesitas llamar a la función setCount (el modificador) para actualizar la variable
setCount(2)
		
```

> 🔥 Las variables de estado solo deben ser actualizadas llamando a sus modificadores.

#### Ejemplo: Construyendo un contador

Aquí hay otro ejemplo usando una variable de estado `count` y su función modificador llamada `setCount` para crear un pequeño componente contador:

```jsx  
import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

function Counter() {
    // useState para mantener y establecer el conteo actual
    const [count, setCount] = useState(0);

    // Función para incrementar el contador
    const incrementHandler = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <h1>Conteo: {count}</h1>
            <button onClick={incrementHandler}>Incrementar</button>
        </div>
   

 );
}

```

Las actualizaciones de estado ocurren de manera asincrónica, y mutar directamente el estado crea una oportunidad para que los valores se actualicen incorrectamente y causen inconsistencias de datos en tu aplicación web.

> 📝 Lee más sobre el [hook de estado de React](https://4geeks.com/lesson/react-hooks-explained#the-usestate-hook)

## Métodos del ciclo de vida del componente

El ciclo de vida del componente en React se refiere a la secuencia de fases por las que pasa un componente desde su creación hasta su eliminación del DOM. Este ciclo de vida se puede dividir en tres etapas principales: montaje, actualización y desmontaje.

1. **Montaje**: Esta es la fase cuando el componente está siendo creado e insertado en el DOM. Involucra tareas de inicialización y configuración, tales como establecer el estado inicial e integrarse con otros marcos de JavaScript.

2. **Actualización**: Esto ocurre cada vez que cambian el estado o las propiedades del componente, desencadenando una nueva renderización del componente. Esta fase puede involucrar la obtención de datos, cálculos y trabajar con el DOM en función de nuevas propiedades o estado.

3. **Desmontaje**: Esta fase final ocurre cuando el componente está siendo eliminado del DOM, que es un buen momento para realizar tareas de limpieza como invalidar temporizadores, cancelar solicitudes de red o limpiar suscripciones para evitar fugas de memoria.

### Hook `useEffect` de React y Ciclo de Vida

React introdujo los hooks en la versión 16.8 para permitir que los componentes funcionales manejen el estado y los efectos secundarios—tareas tradicionalmente manejadas en componentes de clase usando métodos del ciclo de vida como `componentDidMount`, `componentDidUpdate` y `componentWillUnmount`. El hook `useEffect` sirve para encapsular la funcionalidad de estos métodos del ciclo de vida en una API, haciendo posible realizar efectos secundarios en componentes funcionales.

- **Equivalente al `componentDidMount` basado en clases**: Para replicar el comportamiento de `componentDidMount` usando `useEffect`, pasas una función y un array de dependencias vacío. Esto le indica a React que ejecute el efecto solo una vez después de la renderización inicial, haciéndolo adecuado para configuraciones como llamadas a API o suscripciones.

  ```javascript
  useEffect(() => {
    // El código aquí se ejecuta solo después de la renderización inicial
  }, []);  // Array de dependencias vacío
  ```

- **Equivalente al `componentDidUpdate` basado en clases**: Incluyendo valores específicos en el array de dependencias, `useEffect` volverá a ejecutar el efecto cada vez que esos valores cambien, similar a `componentDidUpdate`.

  ```javascript
  useEffect(() => {
    // El código aquí se ejecuta cada vez que 'value' cambia
  }, [value]);  // Array de dependencias con 'value'
  ```

- **Equivalente al `componentWillUnmount` basado en clases**: Para imitar este método del ciclo de vida, `useEffect` devuelve una función que será llamada cuando el componente esté a punto de ser desmontado. Esto es ideal para actividades de limpieza.

  ```javascript
  useEffect(() => {
    return () => {
      // El código de limpieza aquí se ejecuta en el desmontaje del componente
    };
  }, []);
  ```

El hook `useEffect` proporciona una forma unificada y más flexible de manejar efectos secundarios en comparación con los métodos tradicionales del ciclo de vida basados en clases, alineándose con el paradigma de programación funcional y facilitando la reutilización y composición del código. Más sobre el [hook useEffect de React](/lesson/react-hooks-explained#the-useeffect-hook)

> 🔗 Aquí puedes encontrar [más información sobre todos los métodos del ciclo de vida de React JS.](https://reactjs.org/docs/react-component.html#the-component-lifecycle)

## componentes funcionales vs. componentes de clase

Los componentes de clase ya no son recomendados, por lo que actualizamos este artículo para eliminar estas explicaciones, por favor utiliza componentes funcionales en su lugar.

A diferencia de los componentes de clase, los componentes funcionales de React son componentes simplificados de React originalmente destinados para propósitos de presentación.
Por esa razón, tradicionalmente son **sin estado**: no tienen estado propio. Eso les

 permite ser más ligeros, rápidos y fáciles de escribir.

La falta de estado de las funciones se abordó con React 16.8.0, que introdujo los muy populares React Hooks. Desde entonces, el hook `useState` nos permite reproducir el comportamiento del estado en nuestros componentes funcionales:

### Usando un componente basado en función (con hooks)

<iframe
     src="https://codesandbox.io/embed/current-time-in-react-hook-based-dj7k9?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="Current Time in React (hook-based)"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-autoplay allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

<div align="right"><small><a href="https://codesandbox.io/embed/current-time-in-react-hook-based-dj7k9?fontsize=14&hidenavigation=1&theme=dark">Haz clic aquí para abrir la demo en una nueva ventana</a></small></div>

## ¿Debo usar componentes de función o de clase?

Así que los React Hooks cambiaron efectivamente la naturaleza de los componentes funcionales de React originales, y ahora ambos tipos de componentes son muy similares en las cosas que pueden hacer. Debido a eso, te alentamos encarecidamente a usar funciones y hooks tanto como sea posible.

+ Las funciones son mucho más simples.
+ El tamaño de tu paquete (tu sitio web completo) será más ligero y más rápido de descargar.
+ Eventualmente, las clases serán obsoletas.

¡Puedes cambiar de un tipo de declaración al otro sin ningún problema! Aquí hay una comparación de ambos tipos de componentes:

### Simplicidad del componente

Como **Función**: Declaración y uso muy simples. El único propósito de la función es devolver un HTML con lo que el componente se supone que debe mostrar cuando se coloca en el sitio web.

Como **Clase**: Es más compleja, la declaración de la clase necesita heredar de React.Component y contiene muchas más funcionalidades que permiten al desarrollador personalizar la lógica del componente, como métodos del ciclo de vida y el estado. Por favor, considera que puedes crear tantos métodos de clase adicionales como desees.
```

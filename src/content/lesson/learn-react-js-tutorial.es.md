---
title: "Aprender React Aquí: Tutorial de React JS"
subtitle: "React es una librería de front-end ideal para crear interfaces (genera HTML+CSS). Es la librería más rápida, más avanzada y más buscada en el mercado en este momento. No te quedes atrás, aprende React JS aquí con este tutorial de React JS"
cover_local: "../../assets/images/4cc6fa0b-2530-4052-aa7e-8dac03788ac3.png"
textColor: "white"
date: "2020-10-19T16:36:31+00:00"
tags: ["reactjs"]
status: "published"

---

Piensa: ¿qué es lo más molesto de trabajar con JavaScript? Todos los lenguajes de programación tienen bucles, condicionales, variables y operaciones lógicas; algunos tienen eventos, pero solo JavaScript tiene el DOM. Sí, eso es lo más molesto al codificar para la web, no solo es muy lento en términos de rendimiento, sino que también hace que tu código sea redundante, engorroso y enorme.

Solo mira este ejemplo: todas las líneas de código que necesitamos para crear un simple elemento HTML en nuestro DOM:

```javascript
let divElem = document.getElementById("myFirstDiv"); // Selecciona un elemento padre
let myNewHOne = document.createElement("h1"); // Crea un nuevo elemento en el DOM
let t = document.createTextNode("Hello World"); // Crea el contenido de un nuevo elemento
myNewHOne.appendChild(t);    // Añadir el contenido del texto al nuevo elemento
divElem.appendChild(myNewHOne); // Añadir el nuevo elemento dentro del elemento padre
```

Es BASTANTE código ¿verdad?

**¡El primer objetivo de React es arreglar eso!**
<br>
<br>

## Entonces... ¿Qué es React?

React.js se define a sí mismo como una librería de front-end para interfaces de usuario (UIs). Básicamente, React propone una nueva forma de crear sitios web al rediseñar todo el flujo de trabajo de codificación y hacer que los sitios web sean más rápidos.

### No más DOM

A partir de ahora, React.js se hará cargo del DOM; tu trabajo es crear tus propios `<Tags>` y definir cómo deben mostrarse o renderizarse.

### Todo es componente

Dividirás tu aplicación en partes pequeñas (componentes), todas juntas forman el sitio web.

### No más recargas del sitio web

Todos tus nuevos `<Components>` son una pequeña parte de tu diseño, pero algunos están ocultos al principio. Tendrás que mostrarlos y esconderlos según el comportamiento del usuario. 

### No más Concatenación de String en HTML

Hasta ahora, hemos concatenado strings para crear el HTML que queremos colocar en el `innerHTML` de un elemento del DOM, por ejemplo:

```js
document.querySelector('body').innerHTML = '<h1>'+person.name+'</h1>';
```

React.js viene con `JSX`, un "lenguaje" especial (con sintaxis adicional a JS) que te permitirá escribir HTML puro dentro de tu código React/JavaScript sin tener que usar comillas (convirtiéndolo en string). Básicamente, elimina la molestia de concatenar strings HTML.

Si tienes que usar código JS dentro de tu bloque HTML, simplemente debes envolver el código entre llaves como veremos en el ejemplo a continuación, parecido a cuando usamos la construcción `${dynamic_code}`, como lo hemos visto en proyectos anteriores.

```jsx
return <h1 id="name"> {person.name} </h1>;
```

Recuerda, que en JSX/React el código dinámico JS dentro del código de HTML (como el anterior) siempre debe evaluarse como una expresión. Es por eso que no podemos usar declaraciones JS dentro de las llaves, como la declaración `if...else` por ejemplo. En su lugar debemos usar una expresión ternaria que tiene el mismo efecto.
 
```jsx
return <h1 id="name"> {if(person.name == "John") "John"; else "Tom" } </h1>; // No funciona en JSX

return <h1 id="name"> {person.name == "John" ? "John" : "Tom" } </h1>; // Funciona en JSX y evualará a <h1 id="name"> John </h1> o a <h1 id="name"> Tom </h1> dependiendo del valor de person.name 
```


> ☝️ Familiarizate con las operaciones condicionales ternarias 🔗[AQUÍ](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)

> ☝️ Revisa las diferencias entre expresiones y declaraciones 🔗[AQUÍ](https://medium.com/launch-school/javascript-expressions-and-statements-4d32ac9c0e74)

## Ahora Todo es un Componente

¿Recuerdas los componentes de Bootstrap?

React lleva ese concepto más allá al dividir y encapsular todo tu sitio web en componentes más pequeños. Estos componentes se pueden basar en el uso de las estructuras JS familiares de `function` o `class`.

Así es como declaramos un componente de React como una función, que es en lo que nos centraremos durante este curso:

```jsx 
import React from 'react';

function MyComponent(){
    return (
        // Aquí debiese ir código HTML
    );
}
```

Ahora digamos que queremos que este componente devuelva una **tarjeta de Bootstrap** cada vez que lo llamemos. 

![ejemplo componente tarjeta de bootstrap](https://github.com/breatheco-de/content/blob/master/src/assets/images/73edbb82-467c-4522-af7d-79c33bb270e2.png?raw=true)

Así es como lo hacemos en una app React:

```jsx 
import React from 'react';

// Renombramos el componente a MyCard 

function MyCard(){
    return (
        <div className="card" style={{width: "18rem"}}> // Observa que algunos atributos HTML cambian sus nombres o valores para funcionar en React
          <img className="card-img-top" src="..." alt="Card image cap" /> // Ahora debemos tener cuidado de cerrar siempre las etiquetas de cierre automático
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
    );
}
```

> 👆 Cada componente en React debe tener un método de renderizado que devuelva un bloque de código HTML.

Cada componente se puede renderizar llamando a su `<tag>`, que se parece a las etiquetas HTML, pero siempre comienza con una letra mayúscula. La diferencia es que ahora el nombre de la `<tag>` es el nombre del componente React (ej. `<MyCard />`) que **tú** has creado, y usar la tag te da acceso a la apariencia y comportamiento que has programado en tu propio componente.

El componente anterior ahora **renderizará** (se mostrará en la página) una Bootstrap card en cualquier lugar donde llames a <MyCard /> de esta manera:

```jsx 
<MyCard />
```

Por lo general, llamamos componentes dentro de la sección return de otro componente:

```jsx 
import React from 'react';

function MyComponent(){
    return (
        <MyCard />
    );
}
```

### Componentes de React pueden ser Funciones o Clases

El componente React más simple es solo una función que devuelve algo de HTML. También puedes declarar cualquier componente de React como una clase. La nueva clase que declaras **debe tener** un método de renderizado que especifique cómo debe mostrarse el componente.

Aquí hay un ejemplo del mismo componente `<MyCard />`, pero ahora declarado como una clase:

```jsx 
import React from 'react';

// Aquí creamos el componente MyCard como una clase 
export class MyCard extends React.Component {
    render(){
        return (
        <div className="card" style={{width: "18rem"}}>
          <img className="card-img-top" src="..." alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
        );
    }
}
```

> ☝️ Este es un componente de clase. Te recomendamos que uses componentes de función y hooks en su lugar, ya que los componentes de clase están considerados como legacy (deprecados).

## El componente MAIN 

Con React, toda la aplicación se considera un componente.

Lo primero que harás al crear grandes aplicaciones React es definir un gran componente, al que llamamos **primary** o **main**. Contendrá toda tu aplicación.

Luego, debes inyectar este componente principal en el DOM del sitio web con el método ReactDOM.render(), así:

```jsx 
import React from 'react'; // import obligatorio del react package
import ReactDOM from 'react-dom'; // import obligatorio del react-dom package

// Creando nuestro componente React 
function MyMainComponent (){ 
    return <div>Hello World</div>;
}


ReactDOM.render(<MyMainComponent />, document.querySelector('#app'));
// Está implícito que hay un contenedor div con el id 'app' en el body del HTML de tu sitio web original
// A través de <MyMainComponent /> toda tu aplicación react se insertará en esa ubicación del DOM
```

Debido a que `<MyMainComponent />` en este ejemplo es el componente principal, todos los demás componentes de tu aplicación deberán ser llamados dentro de este componente principal o en sus descendientes (hijos, nietos, etc.). Cualquier componente que no se llame en el componente principal o dentro de sus descendientes nunca aparecerá en el DOM y, por lo tanto, no aparecerá en tu página web.

```jsx 
function GrandchildComponent (){ 
    return "Hello, I'm the Grandchild";
}

function ChildComponent (){ 
    return (
        <p>
            <h3>Hello I'm the Child, and below is the Grandchild</h3>
            <GrandchildComponent />
        </p>
    );
}

function RandomComponent (){ 
    return "Hello, I'm just a random component that will not be rendered =(";
}

function MyMainComponent (){ 
    return <ChildComponent />;
}

  
ReactDOM.render(<MyMainComponent />, document.querySelector('#app'));
```

En este ejemplo, `<ChildComponent />` y `<GrandchildComponent />` terminarán en el DOM y se renderizarán porque se les llama dentro del componente principal o un descendiente. `<RandomComponent />` Por otro lado, nunca se mostrará en la página porque no se llama de esa manera. 
 
## Hacer diseños de sitios web con React

Un "Layout" o diseño en React es básicamente la combinación de dos o más componentes en un componente padre (llamado **view** o **vista**).

**Por ejemplo:**

Supongamos que tienes un [sitio web de una página](https://onepagelove.com/what-is-a-one-page-website) con tres secciones: `Home`, `About Us` y `Contact Us`. La forma "React" de hacerlo será creando un componente de **view** o **vista** más grande que contiene cada componente (sección), así:

```jsx 
export class EntireWebsiteLayout extends Component {
    render() {
        return (
            <div>
                <Home />
                <AboutUs />
                <ContactUs />
            </div>
        );
    }
}
// Está implícito que los componentes Home, AboutUs y ContactUs ya han sido definidos
```

> ☝ Este es un componente de clase. Te recomendamos que uses componentes de función y hooks en su lugar, ya que los componentes de clase están considerados como legacy (deprecados).

Esos componentes que sirven para sostener el layout o diseño de tus páginas web, no se utilizarán para nada más, es lo que llamamos "views" o "vistas", y los típicos componentes que podemos reutilizar muchas veces con diferente input (como componentes de button o card) les llamaremos "Components" o "Componentes" dentro de las carpetas de nuestra aplicación.

**Así es como React renderizará tu layout:**

Cada componente tendrá método de renderizado. El documento HTML resultante estará compuesto por la combinación de todas las salidas que todos los componentes tienen en sus métodos de renderizado. Échale un vistazo a la siguiente imagen para tener una idea.

![diseño de sitio web de una página en react](https://github.com/breatheco-de/content/blob/master/src/assets/images/6c7d3747-482a-480d-b5be-fdbf095292f3.png?raw=true)

## El Ejemplo de YouTube.com

En la estructura de tu aplicación, puedes tomar un resaltador y comenzar a marcar todos los componentes que tendrá tu aplicación. Los más fáciles son los componentes típicos de Bootstrap: NavBar, Card, etc. También debieras definir tus propios componentes.

En este caso, hemos decidido crear los siguientes componentes basados en el sitio web de YouTube:

+ `<VideoPlayer />`: Renderizará todo el reproductor de video con todos los `<VideoControls />` dentro.
+ `<Description />`: Se renderizará la descripción del video.
+ `<Comments />`: Mostrará todos los comentarios y tendrá un grupo de componentes `<CommentCard />` dentro.
+ `<VideoCard />`: Mostrará una miniatura de video a la izquierda con una pequeña descripción a la derecha y llevará a las personas a esa página de video cuando se haga clic.
+ `<VideoTitle />`: Renderizará el título del video.
+ etc.

Una vez que hayas terminado de identificar tus componentes, es hora de comenzar a programar. Crea una nueva clase de JavaScript en un archivo separado para cada uno de esos componentes.

Cada clase debe tener una función llamada **render.** Esto devolverá el código HTML que el componente generará en el documento del sitio web.

<before-after width="400px"
    before="https://github.com/breatheco-de/content/blob/master/src/assets/images/e590a615-2c9d-4671-8483-99dbdd90cd41.png?raw=true" after="https://github.com/breatheco-de/content/blob/master/src/assets/images/78aedd23-b5dd-4d1e-b693-b3268f4734fa.png?raw=true" />

## Aspectos esenciales de un componente React

### El Estado del Componente

Cada componente viene con un objeto global (compartido solo dentro del mismo Componente) que tiene el único propósito de almacenar los datos necesarios para representarlo. Por ejemplo, digamos que estoy desarrollando un componente de reloj que tiene que imprimir la hora actual cada segundo. Necesitaría la hora actual en el estado del componente... el código sería algo así:

> 👇 La siguiente demostración actualiza la hora actual en cada segundo:

<iframe width="100%" height="300" src="//jsfiddle.net/BreatheCode/r80q431L/10/embedded/js,html,result/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>
<div align="right"><small><a href="//jsfiddle.net/BreatheCode/r80q431L/10/embedded/js,html,result/">Haz clic para abrir demo en una nueva ventana</a></small></div>

### Propiedades del Componente

Cualquier componente puede tener propiedades (props), al igual que en HTML. Por ejemplo, en HTML podríamos definir la propiedad `src` de una imagen de esta manera:

```html
<img src="http://myurl.com/path/to/image.png" />
```

En React, podemos establecer las propiedades de la misma manera y nuestros componentes podrán leerlas y mostrar diferentes cosas basadas en las *props* que se le están pasando.

```jsx
// Aquí podemos inventar una nueva propiedad 'textColor', pero ahora tendremos que asegurarnos de codificar su comportamiento
<ClockComponent textColor="red" />
```

En el código anterior, hemos inventado una nueva propiedad para el ejemplo ClockComponent. Ahora tendremos que determinar y codificar cómo funcionará esa nueva propiedad dentro de nuestro componente. En este caso en particular, tendríamos que asignar style color red a la salida de texto del reloj, así:

<iframe width="100%" height="300" src="//jsfiddle.net/BreatheCode/r80q431L/8/embedded/js,html,result/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

<div align="right"><small><a href="//jsfiddle.net/BreatheCode/r80q431L/8/embedded/js,html,result/">Haz clic para abrir demo en una nueva ventana</a></small></div>

Un componente de alta calidad solo debe comunicarse con otros componentes a través de sus propiedades. De esta manera podremos reutilizar ese componente muchas veces en el futuro (de manera similar a como funcionan las funciones y los parámetros).

### Ciclo de Vida de un Componente

Cada componente funciona como una mini aplicación. Puedes controlar y definir el flujo de trabajo de sus componentes en función de una serie de métodos disponibles que puede declarar y codificar de acuerdo con sus necesidades.

![ciclo de vida de un componente de react js](https://github.com/breatheco-de/content/blob/master/src/assets/images/245ba798-e840-42d8-8391-7388159ccfeb.png?raw=true)

> 🔗 [Aquí encontrarás](https://reactjs.org/docs/react-component.html#the-component-lifecycle) una explicación más detallada de cada método de ciclo de vida disponible.

> 📺 [Y aquí tienes un diagrama interactivo que lo explica](http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/).

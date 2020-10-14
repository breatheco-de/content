---
title: "Aprender React Aquí: Tutorial de React Js"
subtitle: "React es una librería de front-end ideal para crear interfaces (genera HTML+CSS). Es la librería más rápida, más avanzada y más buscada en el mercado en este momento. No te quedes atrás, aprende React js aquí con este tutorial de React Js"
cover: "https://ucarecdn.com/4cc6fa0b-2530-4052-aa7e-8dac03788ac3/"
textColor: "white"
date: "2018-11-13"
tags: ["reactjs"]
status: "published"

---

Piensa: ¿qué es lo más molesto de trabajar con Javascript? Todos los lenguajes de programación tienen bucles, condicionales, variables y operaciones lógicas; algunos tienen eventos, pero solo Javascript tiene el DOM. Sí, eso es lo más molesto al codificar para la web, no solo es muy lento en términos de rendimiento, sino que también hace que tu código sea redundante, engorroso y enorme.

Sólo mira este ejemplo: todas las líneas de código que necesitamos para crear un simple elemento HTML en nuestro DOM:

```javascript
var divElem = document.getElementById("myFirstDiv"); //Selecciona un elemento padre
var myNewHOne = document.createElement("H1"); //Crea un nuevo elemento en el DOM
var t = document.createTextNode("Hello World");// crea el contenido de un nuevo elemento
myNewHOne.appendChild(t);    //Añadir el contenido del texto al nuevo elemento
divElem.appendChild(myNewHOne);// Añadir el nuevo elemento dentro del elemento padre

Es bastante código ¿VERDAD?
```

**¡El primer objetivo de React es arreglar eso!**
<br>
<br>

## Entonces.. ¿que es React?
***

React.js se define a sí mismo como una librería de front-end para interfaces de usuario. Básicamente, React propone una nueva forma de crear sitios web al rediseñar todo el flujo de trabajo de codificación y hacer que los sitios web sean más rápidos.

#### No Más DOM

A partir de ahora, React.js se hará cargo del DOM, tu trabajo es crear el suyo propio y definir cómo deben mostrarse o representarse.

#### Todo es componente

Dividirás tu aplicación en partes pequeñas (componentes), todas juntas forman el sitio web.

#### No más recargas del sitio web

Todas tus nuevos `<Components>` son una pequeña parte de tu diseño, pero algunas están ocultas al principio. Tendrás que mostrarlos y esconderlos según el comportamiento del usuario. 

#### No más Concatenación de String en HTML

Hasta ahora, hemos concatenado strings para crear el HTML que queremos colocar en el `innerHTML` de un elemento del DOM, por ejemplo:

```js
document.querySelector('body').innerHTML = '<h1>'+person.name+'</h1>';
```
React.js viene con JSX, un lenguaje especial que te permitirá crear un "lenguaje" especial (una extensión de JS) que te permite escribir HTML puro dentro de tu código React/Javascript sin comillas (convirtiéndolo en string). Básicamente elimina la apestosa necesidad de concatenar string HTML.

Si tienes que usar código Javascript dentro de tu bloque HTML, simplemente debes envolver el código entre llaves como lo hemos visto en ejemplos anteriores, parecido a cuando usamos para construir `${dynamic_code}`, como lo hemos visto en proyectos anteriores.

```jsx
return <h1 id="name"> {person.name} </h1>;
```

Recuerda que en JSX/React el código dinámico JS dentro del código de HTML (como el anterior) siempre debe evaluarse como una expresión. Es por eso que no podemos usar declaraciones JS dentro de las llaves, como la declaración if..else por ejemplo. En su lugar debemos usar una expresión ternaria que tiene el mismo efecto.
 
```jsx
return <h1 id="name"> {if(person.name == "John") "John"; else "Tom" } </h1>; //does not work in JSX

return <h1 id="name"> {person.name == "John" ? "John" : "Tom" } </h1>; //works in JSX and will evaluate to <h1 id="name"> John </h1> or <h1 id="name"> Tom </h1> depending on the value of person.name 
```


[[info]]
| :point_up: Familiarizate con las operaciones condicionales ternarias :link:[AQUÏ](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)

[[info]]
| :point_up: Revisa las diferencias entre expresiones y declaraciones :link:[AQUÏ](https://medium.com/launch-school/javascript-expressions-and-statements-4d32ac9c0e74)


<br>
<br>

## Todo tu Sitio Web ahora es un Componente
***

Lo primero que harás cuando construyas grandes aplicaciones React es definir un componente muy grande que contendrá todo el resto de los componentes. Luego, debe inyectar ese componente en el DOM del sitio web con elmétodo ReactDOM.render(), así:

```javascript{numberLines: true}

import React from 'react'; //importación obligatoria del paquete react

import ReactDOM from 'react-dom'; //importación obligatoria del paquete react-dom

//creando nuestro Componente React
function MyBigComponent(){
    return (
        <div>Hello World<div>);
        );
        }
        
// Suponiendo que hay un div container con la id 'app' en el body de su sitio web original
ReactDOM.render(<MyBigComponent />, document.querySelector('#app'));
// toda tu aplicación de react se se añadirá en ese div
```
<br>
<br>

## Todo el resto también es un Componente ahora

¿Recuerdas los componentes de Bootstap? React lleva ese concepto más lejos al dividir todo su sitio web en componentes más pequeños. Estos componentes pueden usar las estructuraas que ya conocemos: `function` or `class`.
Cada componente puede ser renderizado llamando a su propia etiqueta o`<tag>` que se ven exactamente iguales que las etiquetas HTML pero que siempre empiezan con mayúscula. La diferencia es que ahora cuando creas tus nuevos componentes, puedes decidir el nombre del `<tag>` y usar el tag te da acceso a la vista y comportamiento que programaste para ese componente. 

Por ejemplo, echemos un vistazo a la tarjeta **Bootstrap:**

![tutorial react js](https://ucarecdn.com/73edbb82-467c-4522-af7d-79c33bb270e2/-/resize/300x/)

And how we can recreate the same component in a React app.

```jsx {numberLines: true}

import React from 'react';

//Aquí creamos el componente MyCard como función
// se renderizará similar a una card de Bootstrap desde de donde llames a <MyCard />
function MyCard(){
    return (
        <div class="card" style="width: 18rem;">
          <img class="card-img-top" src="..." alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
    );
}

<MyCard /> //esta tag renderizará el componente anterior en cualquier otro componente o archivo.

```

[[info]]
| :point_up:Cada componente en React debe tener un método de renderización que devuelva HTML


### Componentes de React pueden ser **Funciones** o **Clases**

El componente React más simple es solo una función que devuelve algo de HTML. También puedes declarar cualquier Componente de React como una clase. La nueva clase que declaras **debe tener** un método de renderizado que especifique cómo debe mostrarse el componente.

Aquí hay un ejemplo del mismo componente `<MyCard />`, pero ahora declarado como una clase:


```jsx{numberLines: true}
import React from 'react';

//Aquí creamos el componente Modal como una clase.
export class MyCard extends React.Component{
    
    render(){
        return (
        <div class="card" style="width: 18rem;">
          <img class="card-img-top" src="..." alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
        );
    }
}
```

### Haciendo Diseños de Sitios Web con React

Un "diseño" en React es básicamente la combinación de dos o más componentes (nos referimos a los **componentes**) en un componente principal o padre( nos referimos a una **vista**). 

**Por ejemplo:** Digamos que tienes un [sitio web de una página](https://onepagelove.com/what-is-a-one-page-website) Sitio web con tres secciones: Inicio, Sobre Nosotros y Contáctenos. La forma "React" de hacerlo será crear un componente **view o vista** más grande que contenga cada **componente** (sección), de esta forma:

```jsx{numberLines: true}
import React from 'react';

//crea tu primer componente
export class EntireWebsiteLayout extends React.Component{
    
    render(){
        return (
            <div>
                <Home />
                <AboutUs />
                <ContactUs />
            </div>
        );
    }
}
```
Esos componentes que sirven para sostener el layout o diseño de tus páginas web, no se utilizarán para nada más es lo que llamamos "views o vistas", y los típicos componentes que odemos reutilizar muchas veces con diferente input ( como comopotente button o card) les llamaremos "components o componentes" dentro de las carpetas de nuestra aplicación.

**Así es como React renderizará tu layout:**

Cada componente tendrá método de renderizado. El documento HTML resultante, estará compuesto por la combinación de todos las salidas que todos los componentes tienen en sus métodos de renderizado. Échale un vistazo a la siguiente imagen para tener una idea.

![learn react js tutorial](https://ucarecdn.com/6c7d3747-482a-480d-b5be-fdbf095292f3/-/resize/1200x/)

## El Ejemplo de YouTube.com
***

En la estructura de tu aplicación, puedes tomar un destacador y comenzar a marcar todos los componentes que tendrá tu aplicación. Los más fáciles son los componentes típicos de Bootstrap: NavBar, Card, etc. También debieras definir tus propios componentes.

En este caso, hemos decidido crear los siguientes componentes basados en el sitio web de YouTube:

+ `<VideoPlayer />`: Renderizará todo el reproductor de video con todos los `<VideoControls />` dentro.
+ `<Description />`: Se renderizará la descripción del video.
+ `<Comments />`: Mostrará todos los comentarios y tendrá un grupo de <CommentCard /> componentes dentro.
+ `<VideoCard />`: Mostrará una miniatura de video a la izquierda con una pequeña descripción a la derecha y llevará a las personas a esa página de video cuando se haga clic.
+ `<VideoTitle />`: Renderizará el titulo del video.
+ etc.
Una vez que hayas terminado de identificar tus componentes, es hora de comenzar a programar.  Crea una nueva clase de Javascript en un archivo separado para cada uno de esos componentes.

Cada clase debe tener una función llamada **render.** Esto devolverá el código HTML que el componente generará en el documento del sitio web.

<before-after width="400px"
    before="https://ucarecdn.com/e590a615-2c9d-4671-8483-99dbdd90cd41/" after="https://ucarecdn.com/78aedd23-b5dd-4d1e-b693-b3268f4734fa/" />

### El Estado del Componente

Cada componente viene con un objeto global (compartido solo dentro del mismo Componente) que tiene el único propósito de almacenar los datos necesarios para representarlo. Por ejemplo, digamos que estoy desarrollando un componente de reloj que tiene que imprimir la hora actual cada segundo. Necesitaría la hora actual en el estado del componente ... el código se verá algo así:

[[info]]
| :point_up: La siguiente demostración actualiza la hora actual en cada segundo:

<iframe width="100%" height="300" src="//jsfiddle.net/BreatheCode/r80q431L/10/embedded/js,html,result/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>
<div align="right"><small><a href="//jsfiddle.net/BreatheCode/r80q431L/10/embedded/js,html,result/">Click to open demo in a new window</a></small></div>

### Propiedades del Componente

Cualquier componente puede tener propiedades, al igual que en HTML. Por ejemplo, en HTML podríamos definir la propiedad src de una imagen como esta:

```html
<img src="http://myurl.com/path/to/image.png" />
```

En React, podemos establecer las propiedades de la misma manera y nuestros componentes podrán leerlas y mostrar diferentes cosas basadas en las props que se le están pasando.

```html
<!-- Aquí podemos inventar una nueva propiedad 'textColor', pero ahora tendremos que asegurarnos de codificar su comportamiento --> 
<ClockComponent textColor="red" />
```

En el código anterior, hemos inventado una nueva propiedad para el ejemplo ClockComponent. Ahora tendremos que determinar y codificar cómo funcionará esa nueva propiedad dentro de nuestro componente. En este caso en particular, tendríamos que asignar style color rojo a la salida de texto del reloj, así:

<iframe width="100%" height="300" src="//jsfiddle.net/BreatheCode/r80q431L/8/embedded/js,html,result/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

<div align="right"><small><a href="//jsfiddle.net/BreatheCode/r80q431L/8/embedded/js,html,result/">Haz clic para abrir el demo</a></small></div>

Un componente real de alta calidad sólo debe comunicarse con otros componentes a través de sus propiedades. De esta manera podremos reutilizar ese componente muchas veces en el futuro (de manera similar a como funcionan las funciones y los parámetros).


### Ciclo de Vida de un Componente

Cada componente funciona como una mini aplicación. Puedes controlar y definir el flujo de trabajo de sus componentes en función de una serie de métodos disponibles que puede declarar y codificar de acuerdo con sus necesidades.

![tutorial react js](https://ucarecdn.com/245ba798-e840-42d8-8391-7388159ccfeb/)

[[info]]
|:link:[Aquí encontrarás](https://reactjs.org/docs/react-component.html#the-component-lifecycle) una explicación más detallada de cada método de ciclo de vida disponible.

[[info]]
|:tv:[Y aqui tienes un diagrama interactivo que lo explica](http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)

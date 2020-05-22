---
title: "Aprender React Aquí: Tutorial de React Js"
subtitle: "React es una librería de front-end ideal para crear interfaces (genera HTML+CSS). Es la librería más rápida, más avanzada y más buscada en el mercado en este momento. No te quedes atrás, aprende React js aquí con este tutorial de React Js"

cover: "https://ucarecdn.com/4cc6fa0b-2530-4052-aa7e-8dac03788ac3/"
textColor: "white"

date: "2018-11-13"
tags: ["reactjs"]
---

Piénsalo: ¿qué es lo más molesto de trabajar con Javascript? Todos los lenguajes de programación tienen bucles, condicionales, variables y operaciones lógicas; algunos tienen eventos, pero solo Javascript tiene: El DOM. Sí, eso es lo más molesto al codificar para la web, no solo es muy lento en términos de rendimiento, sino que también hace que su código sea redundante, engorroso y enorme.

Solo mire este ejemplo de todas las líneas de código que necesitamos para alternar (agregar / eliminar) una clase CSS en un elemento DOM:

```javascript
var divElem = document.getElementById("myFirstDiv");
var myNewHOne = document.createElement("H1");
var t = document.createTextNode("Hello World");
myNewHOne.appendChild(t);    //Tengo que añadir algún contenido de texto al h1.   
divElem.appendChild(myNewHOne);
```

**¡El primer objetivo de React es arreglar eso!**
<br>
<br>

## Entonces.. ¿que es React?
***

React.js se define a sí mismo como una librería de front-end para interfaces de usuario. Básicamente, React propone una nueva forma de crear sitios web al rediseñar todo el flujo de trabajo de codificación y hacer que los sitios web sean más rápidos.

#### No Más DOM

A partir de ahora, React.js se hará cargo del DOM, su trabajo es crear el suyo propio y definir cómo deben mostrarse o representarse.

#### Todo es componente

Dividirás tu aplicación en partes pequeñas (componentes), todas juntas hacen que el sitio web sea un todo.

#### No más recargas del sitio web

Todas tus novedades son una pequeña parte de tu diseño, pero algunas están ocultas al principio. Tendrá que mostrarlos y esconderlos según el comportamiento del usuario. 

#### No más Concatenación de String en el HTML

React.js viene con JSX, un lenguaje especial que te permitirá crear HTML en el lado de Javascript sin tener que ajustarlo entre comillas (hazlo una cadena). Básicamente serás de la molesta concatenación de cadenas HTML.

<br>
<br>

## Todo tu Sitio Web ahora es un Componente
***

Lo primero que harás cuando construyas grandes aplicaciones React es definir un componente muy grande que contendrá todo adentro. Luego, debe inyectar ese componente en el DOM del sitio web de esta manera:

```javascript{numberLines: true}
import ReactDOM from 'react-dom';
import React from 'react';

class MyBigComponent extends React.Component{
    return (<div>Hello World<div>);
}

// Suponiendo que haya un div con la id 'app' en el cuerpo de su sitio web original
// toda tu aplicación de react se agregará a esa div
ReactDOM.render(<MyBigComponent />, document.querySelector('#app'));
```
<br>
<br>

## Todo es un Componente ahora
***

¿Recuerdas los componentes de Bootstap? React lleva ese concepto más lejos al dividir todo su sitio web en componentes más pequeños. Cada componente tiene su propio `<tag>` al igual que las etiquetas HTML. La diferencia es que ahora cuando creas tus nuevos componentes, puedes decidir el nombre del `<tag>` así como la forma en que se verá y se comportará. Por ejemplo, echemos un vistazo a la tarjeta **Bootstrap:**

![learn react js tutorial](https://ucarecdn.com/73edbb82-467c-4522-af7d-79c33bb270e2/-/resize/300x/)

```jsx{numberLines: true}
import React from 'react';

//Aquí creamos el componente Modal como una función.
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
```

[[info]]
| :point_up:Cada componente en React necesita tener un método de representación que devuelva HTML


### Componentes de React pueden ser **Funciones** o **Clases**

El componente React más simple es solo una función que devuelve algo de HTML. También puedes declarar cualquier Componente de React como una clase. La nueva clase que declaras **debe tener** un método de representación que especifique cómo debe mostrarse el componente.

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

Un "diseño" en React es básicamente la combinación de dos o más componentes en un componente principal.  Algunos de sus componentes solo servirán para fines de diseño, por lo que los llamaremos "Vistas o Views" porque no se reutilizarán como componentes típicos.

**Por ejemplo:** Digamos que tienes un [sitio web de una página](https://onepagelove.com/what-is-a-one-page-website) Sitio web con tres secciones: Inicio, Sobre Nosotros y Contáctenos. La forma "React" de hacerlo será crear un componente más grande (VIEW) que contenga cada sección, como esto:

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

**Así es como React renderizará tu diseño:**

Cada componente tendrá método de renderizado. El documento HTML resultante, estará compuesto por la combinación de todas las salidas que todos los componentes tienen en sus métodos de renderizado. Echa un vistazo a la siguiente ilustración para tener una idea.

![learn react js tutorial](https://ucarecdn.com/6c7d3747-482a-480d-b5be-fdbf095292f3/-/resize/1200x/)

## El Ejemplo de YouTube.com
***

En la estructura de tu aplicación, puedes tomar un resaltador y comenzar a marcar todos los componentes que tendrá tu aplicación. Los más fáciles son los componentes típicos de Bootstrap: NavBar, Card, etc. También debe definir sus propios componentes.

En este caso, hemos decidido crear los siguientes componentes basados en el sitio web de YouTube:

+ `<VideoPlayer />`: Renderizará todo el reproductor de video con todos los `<VideoControls />` dentro.
+ `<Description />`: Se renderizará la descripción del video.
+ `<Comments />`: Mostrará todos los comentarios y tendrá un grupo de <CommentCard /> componentes dentro.
+ `<VideoCard />`: Mostrará una miniatura de video a la izquierda con una pequeña descripción a la derecha y llevará a las personas a esa página de video cuando se haga clic.
+ `<VideoTitle />`: Rederizará el titulo del video.
+ etc.
Una vez que hayas terminado de identificar sus componentes, es hora de comenzar a programar.  Crea una nueva clase de Javascript en un archivo separado para cada uno de esos componentes.

Cada clase debe tener una función llamada **render.** Esto devolverá el código HTML que el componente generará en el documento del sitio web.

<before-after width="400px"
    before="https://ucarecdn.com/e590a615-2c9d-4671-8483-99dbdd90cd41/" after="https://ucarecdn.com/78aedd23-b5dd-4d1e-b693-b3268f4734fa/" />

### El Estado del Componente

Cada componente viene con un objeto global (compartido solo dentro del mismo Componente) que tiene el único propósito de almacenar los datos necesarios para representarlo. Por ejemplo, digamos que estoy desarrollando un componente de reloj que tiene que imprimir la hora actual cada segundo. Necesitaría la hora actual en el estado del componente ... el código se verá algo así:

[[info]]
| :point_up: La siguiente demostración actualiza la hora actual en cada segundo:

<iframe width="100%" height="300" src="//jsfiddle.net/BreatheCode/r80q431L/10/embedded/js,html,result/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>
<div align="right"><small><a href="//jsfiddle.net/BreatheCode/r80q431L/10/embedded/js,html,result/">Click to open demo in a new window</a></small></div>

### El Objeto de Estado es Inmutable (no se puede cambiar)

El valor del estado solo se puede modificar llamando al método this.setState () y tendrá que pasar un nuevo objeto de estado que se fusionará con el valor original. Por ejemplo:

```javascript{numberLines: true}
//Esto solo se puede hacer en el constructor, en cualquier otro lugar devolverá un error
this.state = something

//Puedes definir un estado en tu constructor
constructor(){
   super();
   this.state = {
      counter: 0
   }
}

//y luego restablecer el estado en cualquier otro lugar con un objeto NUEVO
this.setState({
   counter: 2
});
```

### Propiedades del Componente

Cualquier componente puede tener propiedades, al igual que en HTML. Por ejemplo, en HTML podríamos definir la propiedad src de una imagen como esta:

```html
<img src="http://myurl.com/path/to/image.png" />
```

En React, podemos establecer las propiedades de la misma manera y nuestros componentes podrán leerlas y mostrar diferentes cosas basadas en eso.

```html
<!-- Aquí podemos inventar una nueva propiedad 'textColor', pero ahora tendremos que asegurarnos de codificar su comportamiento --> 
<ClockComponent textColor="red" />
```

En el código anterior, hemos inventado una nueva propiedad para el ejemplo ClockComponent. Ahora tendremos que determinar y codificar cómo funcionará esa nueva propiedad dentro de nuestro componente. En este caso particular, tendríamos que asignar un estilo de color rojo a la salida de texto del reloj, como esto:

<iframe width="100%" height="300" src="//jsfiddle.net/BreatheCode/r80q431L/8/embedded/js,html,result/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

<div align="right"><small><a href="//jsfiddle.net/BreatheCode/r80q431L/8/embedded/js,html,result/">Click to open demo in a new window</a></small></div>

Un componente real de alta calidad debe comunicarse con otros componentes solo a través de sus propiedades. De esta manera podremos reutilizar ese componente muchas veces en el futuro (de manera similar a como funcionan las funciones y los parámetros).

### El Constructor de Componente

Es extremadamente importante inicializar los valores de cada estado del componente en el constructor de la clase, de lo contrario, su aplicación generará un error porque la primera vez que muestre el estado será ***nulo*** o ***indefinido.***

El lugar para inicializar el estado de su componente está en el método constructor:

El constructor de cada componente recibe una llamada muy temprano en el tiempo de ejecución de su aplicación, incluso antes de que se haya procesado su sitio web.

```javascript
class ClockComponent extends React.Component {
  constructor(){
    super();
     //Este es un gran lugar para definir el primer valor que tendrá el estado de su componente.
    this.state = {
    	currentTime: new Date()
    };
  }
}
```

### Ciclo de Vida de un Componente

Cada componente funciona como una mini aplicación. Puede controlar y definir el flujo de trabajo de sus componentes en función de una serie de métodos disponibles que puede declarar y codificar de acuerdo con sus necesidades.

![learn react js tutorial](https://ucarecdn.com/245ba798-e840-42d8-8391-7388159ccfeb/)

[[info]]
|:link:[Aquí encontrarás](https://reactjs.org/docs/react-component.html#the-component-lifecycle) una explicación más detallada de cada método de ciclo de vida disponible.

[[info]]
|:tv:[Y aqui tienes un diagrama interactivo que lo explica](http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)

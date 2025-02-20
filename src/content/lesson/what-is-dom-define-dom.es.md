---
title: "Que es DOM: Document Object Model"
subtitle: "¿Ya sabes lo que es DOM? Es una jerarquía almacenada en la memoria que contiene todos los elementos de su sitio web en tiempo real. La manipulación del DOM es la actividad más popular para cualquier desarrollador front-end ¡El DOM da vida a tus aplicaciones!"
cover_local: "../../assets/images/db660bb9-1ac6-4730-a9c8-4544d6b801b0.png"
textColor: "white"
date: "2020-10-19T16:36:31+00:00"
tags: tags: ["DOM", "javascript", "HTML", "front-end"]
status: "published"

---

## ¡Más allá de la consola!

A nadie le gustan las aplicaciones basadas en la consola... ¿Te imaginas usar Uber desde la línea de comando?

```bash
$ "uber" request-trip --from home-- to work --pool
```

¡Gracias a Dios que tenemos los navegadores! Nos permiten renderizar nuestra aplicación en una interfaz visual que llamamos sitio web.

## El DOM de tu Sitio Web

Como ya sabes, la responsabilidad del navegador es transformar el código HTML/CSS en elementos visuales. Esos elementos se asignan a una jerarquía que se almacena en la memoria RAM y se llama El DOM.

Con JavaScript podemos manipular el DOM (elementos del sitio web) durante el tiempo de ejecución (el ciclo de vida de la aplicación).

NOTA: Por favor recuerda siempre que todo el código JavaScript que escribas en tu documento HTML DEBE estar envuelto dentro de una etiqueta `<script>`, así:

```html
<script>
     // tu código aquí  
</script>
```
Actualmente, la tendencia es escribir nuestro código JavaScript en un archivo separado con una extensión `.js`. En este caso, la etiqueta `<script>` en el cuerpo de tu archivo html se escribirá de la siguiente manera:

```html
<body>
    <div>some content</div>
    <div>more content</div>

    <script src="index.js" type="text/javascript"></script>
</body>    
```

A partir de ahora, ésta será la forma más utilizada para que vincules y escribas tu código JavaScript.

## Cómo actualizar el DOM de tu sitio web

Hay varias formas de manipular el DOM, pero la más sencilla es `document.write()`. Cada vez que escribas `document.write()`, estarás creando en el HTML el string que decidas pasar como parámetro a la función *write*.

No importa donde escribas el código. Lo único que importa es que esté dentro de una etiqueta `<script>`. Por ejemplo:

<iframe width="100%" height="300" src="//jsfiddle.net/BreatheCode/ge5k7ufm/6/embedded/html,result/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

<div align="right"><small><a href="//jsfiddle.net/BreatheCode/ge5k7ufm/6/embedded/html,result/">Clic aquí para abrir demo en una nueva ventana</a></small></div>

## ¡El DOM es Espectacular!

Desde el momento en que un sitio web comienza a cargarse, el navegador crea una jerarquía que se llama The DOM. Cada elemento HTML que programaste en tu documento HTML como desarrollador, tiene un lugar en esa jerarquía y puedes acceder a él utilizando JavaScript en cualquier momento durante el tiempo de ejecución.

+ Cada elemento HTML tiene un objeto en la jerarquía de documentos.
+ El DOM se genera durante el tiempo de ejecución.
+ Cada navegador intenta replicar el DOM exactamente de la misma manera, pero hay algunas diferencias entre ellos. Es por eso que algunas cosas funcionan en un navegador, pero no en otros.
+ JavaScript es el único idioma capaz de acceder a DOM durante el tiempo de ejecución.
+ El "Inspector de Google" es la mejor representación de The DOM en la actualidad.

<br>
<iframe height="500" src="https://www.youtube.com/embed/Ibxagg2ep5g" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<div align="right"><small><a href="https://www.youtube.com/embed/Ibxagg2ep5g">Clic aquí para abrir el video en una nueva ventana</a></small></div>

## ¿Cómo accedo a cualquier objeto en el DOM?

Al igual que hicimos con CSS, podemos seleccionar cualquier elemento en el documento. Hay 4 métodos que nos permiten buscar lo que queramos:

### document.querySelector("css-element-selector")

Devuelve una instancia **del primer elemento** encontrado que se ajusta al selector de CSS que especificó.

### document.getElementById("elementId")

Devuelve una instancia del elemento con el `id="elementId"` en el documento HTML.

### document.getElementsByClassName("exampleClass")

Devuelve un array de todos los elementos con `class="exampleClass"` en su propiedad de etiqueta HTML.

### document.getElementsByTagName("p")

Devuelve un array con todas las instancias que representan cada elemento de párrafo en el documento HTML.

### document.getElementsByName("name_value")

Devuelve un array con todos los elementos que tienen `name="name_value"` en su propiedad *name* de su etiqueta HTML en el documento HTML.

```javascript
let elem = document.getElementById("xyz");
elem.style.color = "red";   // cambia el color a rojo

let myList = document.getElementsByTagName("p");
let howManyElements = myList.length;
myList[0].style.color = "red";   // cambia el primer elemento a rojo

let myList = document.getElementsByClassName("abc");
myList[0].style.color = "red";   // cambia el primer elemento a rojo

let xyz = document.getElementsByName("xyz");
xyz[0].style.color = "red";   // cambia el primer elemento a rojo
```

## Accediendo al Hijo del elemento

Es muy común tener que cambiar el hijo de un elemento. Por ejemplo:

+ Actualizar todos los `<li>` hijos de una `<ul>` específica para hacer que su fondo sea rojo.
+ Eliminar la primera fila `<tr>` de una `<table>`.
+ Ocultar a todos los hijos con una clase específica.
+ ¡Y la lista continúa!
  
La mejor manera de recuperar los elementos hijo de cualquier elemento del DOM es mediante el uso de la propiedad `.childNodes` de esta forma:

### element.childNodes

Esto devuelve un array con todos los elementos hijo del elemento seleccionado.

```javascript
let x = document.getElementById("myDIV");
x.querySelector(".random").style.background = "green";
// obtiene el primer hijo de #myDIV con la clase .random 

let x = document.getElementById("myDIV");
x.querySelector("h3,h2").style.background = "blue";
// obtiene el primer hijo de #myDIV con la etiqueta <h3> o <h2>
  
let tableElm = document.getElementById("people");
let trArray = tableElm.querySelectorAll("tr");
trArray[3].style.background = "red";
// obtiene un array con todos los hijos de #people con etiqueta <tr>
```

<iframe width="100%" height="300" src="//jsfiddle.net/BreatheCode/a3grunqj/2/embedded/js,html,result/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

<div align="right"><small><a href="//jsfiddle.net/BreatheCode/a3grunqj/2/embedded/js,html,result/">Clic aquí para abrir demo en una nueva ventana</a></small></div>

## El innerHTML

Como ya sabes, cada elemento del documento HTML puede tener algún tipo de contenido HTML. No importa si es un `<p>`, `<div>`, `<a>` o cualquier otro elemento HTML; puede tener su propio innerHTML combinado con más contenido HTML.

![qué es el dom](https://github.com/breatheco-de/content/blob/master/src/assets/images/2387325b-338c-4c18-bb0f-2f95ed28901f.png?raw=true)

La propiedad `.innerHTML` te brinda la capacidad de recuperar o configurar el contenido de cualquier elemento que tenga en su JavaScript. Por ejemplo:

```javascript
document.getElementsByTagName("div")[0].innerHTML = "abc";
// innerHTML puede usarse para insertar contenido de texto o HTML, esto crea una lista dentro de un elemento <div>
```

> ☝ Puedes encontrar 2 propiedades más en internet: `nodeValue` y `textContent`, pero en realidad no son muy utilizadas y tienen una funcionalidad más limitada.

## Añadiendo Elementos al Documento

Hay 2 funciones que podemos usar para eso: `appendChild()` y `insertBefore()`.

Digamos que seleccionaste un `<div>` con el `id="myFirstId"` y quieres agregar un nuevo `<h1>` dentro de ese `<div>`.

**Puedes usar la función appendChild así:**

```javascript
let divElem = document.getElementById("myFirstDiv");
let myNewHOne = document.createElement("h1");
let t = document.createTextNode("Hello World");
myNewHOne.appendChild(t);  // Esta linea añade el texto al <h1>  
divElem.appendChild(myNewHOne); // Esto añade el <h1> al elemento "myFirstDiv"
```

Ahora, digamos que tenemos una `<ul>` con 2 elementos, pero queremos insertar un nuevo `<li>` al principio de esa lista.

**Podemos usar la función `insertBefore` para ese caso, así:**

```javascript
let newItem = document.createElement("li");
let textNode = document.createTextNode("Water");
newItem.appendChild(textNode);
let list = document.getElementById("myList");
list.insertBefore(newItem, list.childNodes[0]);  // añadir el newItem antes del PRIMER hijo de la lista
```

## Eliminar elementos del documento

La función `removeChild()` es excelente para eliminar un elemento del DOM y, por lo tanto, también del documento HTML. Deberás especificar quién es el elemento padre del elemento que estás intentando eliminar.

Por ejemplo, si queremos eliminar todos los elementos de una lista <ul>:

```javascript
// Eliminando todos los hijos de un elemento    
let element = document.getElementById("myFirstUL");
while (element.firstChild) {
    element.removeChild(element.firstChild);
}
```

## Cambiando los Atributos

Para cambiar cualquier atributo de cualquier objeto en el DOM, necesitamos usar la propiedad `.attribute` así:

```javascript
// Cambiando atributos 
let element = document.getElementById("myElementId");
element.attribute = "whatever";
```

## Cambiando los Estilos

También Puedes cambiar cualquier regla o propiedad CSS aplicada a los elementos HTML utilizando el atributo `.style`, por ejemplo:

```javascript
// Cambiando estilos 
let element = document.getElementById("myElementId");
element.style.color = "red";
element.style.background = "blue";
```

## Otras lecturas

Para obtener más información sobre cómo acceder al DOM, consulte: https://developer.mozilla.org/es/docs/Web/API/Document


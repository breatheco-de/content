---
title: "Que es DOM: Document Object Model"
subtitle: "¿Ya sabes lo que es DOM? Es una jerarquía almacenada en la memoria que contiene todos los elementos de su sitio web en tiempo real. La manipulación DOM es la actividad más popular para cualquier desarrollador de aplicaciones para usuario. ¡El DOM da vida a tus aplicaciones!"
cover_local: "../../assets/images/db660bb9-1ac6-4730-a9c8-4544d6b801b0.png"
textColor: "white"
date: "2018-05-15"
tags: ["DOM"]
status: "draft"

---

## ¡Basta ya con la consola!
***

A nadie le gustan las aplicaciones basadas en la consola ... ¿te imaginas usar Uber desde la línea de comandos?

```javascript
$ "uber" request-trip --from home --to work --pool
```

¡Gracias a Dios que tenemos los navegadores! Nos permiten representar nuestra aplicación en una interfaz visual que llamamos un sitio web.

## El Sitio Web DOM
***

Como ya sabes, la responsabilidad del navegador es transformar el código HTML / CSS en elementos visuales. Esos elementos se asignan a una jerarquía que se almacena en la memoria RAM y se llama El DOM.

Con JavaScript podemos manipular el DOM (elementos del sitio web) durante el tiempo de ejecución (durante el ciclo de vida de la aplicación).

NOTA: Por favor recuerda siempre que todo el código JavaScript que escribas en tu documento HTML DEBE estar envuelto dentro de una etiqueta `<script>`, como esto:

```html
<script  type="text/javascript">
     //tu código aquí  
</script>
```

## Cómo actualizar tu DOM del sitio web
***

Hay varias formas de manipular el DOM, pero la más sencilla es **document.write** Cada vez que cree un documento.write, escribirá en el HTML la cadena que decida pasar como parámetro a la función de escritura .

No importa donde escribas el código. Lo único que importa es que está dentro de una etiqueta `<script>` Por ejemplo:

<iframe width="100%" height="300" src="//jsfiddle.net/BreatheCode/ge5k7ufm/6/embedded/html,result/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

<div align="right"><small><a href="//jsfiddle.net/BreatheCode/ge5k7ufm/6/embedded/html,result/">Click para abrir un demo en una nueva ventana</a></small></div>


## El DOM es Espectacular!
***

Desde el momento en que un sitio web comienza a cargarse, el navegador crea una jerarquía que se llama The DOM. Cada elemento HTML que programó en su documento HTML como desarrollador, tiene un lugar en esa jerarquía y puede acceder a él utilizando JavaScript en cualquier momento durante el tiempo de ejecución.

+ Cada elemento HTML tiene un objeto en la jerarquía de documentos.
+ El DOM se genera durante el tiempo de ejecución.
+ Cada navegador intenta replicar el DOM exactamente de la misma manera, pero hay algunas diferencias entre ellos. Es por eso que algunas cosas funcionan en un navegador pero no en el otro.
+ JavaScript es el único idioma capaz de acceder a DOM durante el tiempo de ejecución.
+ El "Inspector de Google" es la mejor representación de The DOM en la actualidad.

<iframe width="578" height="325" src="https://www.youtube.com/embed/Ibxagg2ep5g" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<div align="right"><small><a href="https://www.youtube.com/embed/Ibxagg2ep5g">Click para abrir un demo en una nueva ventana</a></small></div>

## ¿Cómo accedo a cualquier objeto en el DOM?
***

Al igual que hicimos con CSS, podemos seleccionar cualquier elemento en el documento. Hay 4 métodos que nos permiten buscar lo que queramos:

### document.querySelector("css-element-selector")

Devuelve una instancia de **el primer elemento** encontrado que se ajusta al selector de CSS que especificó

### document.getElementById("elementId")

Devuelve una instancia del elemento con el id = "elementId" en el documento HTML.

### document.getElementsByClassName("exampleClass")

Devuelve una matriz de todos los elementos con la clase = "exampleClass" en su propiedad de etiqueta HTML.

### document.getElementsByTagName("p")

Devuelve una matriz con todas las instancias que representan cada elemento de párrafo en el documento HTML.

### **document.getElementsByName*("name_value")***

Devuelve una matriz con todos los elementos que tienen nombre = "nombre_valor" en su propiedad de nombre de su etiqueta HTML en el documento HTML.

```javascript{numberLines: true}
var elem = document.getElementById("xyz");
elem.style.color="red";   // change color to red  

var myList = document.getElementsByTagName("p");
var howManyElements = myList.length;
myList[0].style.color = "red";   // make the first one red  

var myList = document.getElementsByClassName("abc");
myList[0].style.color = "red";   // make the first one red  

var xyz = document.getElementsByName("xyz");
xyz[0].style.color="red";   // make the first one red
```

## Accediendo al Elemento Hijo
***

Es muy común tener que cambiar el elemento hijo de un elemento. Por ejemplo:

+ Actualiza todos los LI hijos de un especifico UL para hacer que su fondo sea rojo.
+ Elimina la primera fila `<tr>` de una `<table>` s.
+ Ocultando a todos los hijos con una clase específica.
+ ¡Y la lista continúa!
  
La mejor manera de recuperar los elementos secundarios de cualquier elemento DOM es mediante el uso de sus propiedades childNodes, como esto:

### element.childNodes

Esto devuelve una matriz con todos los elementos secundarios del elemento.

```javascript{numberLines: true}
var x = document.getElementById("myDIV");
x.querySelector(".random").style.background = "green";
//get the first #myDIV child with the .random class  

var x = document.getElementById("myDIV");
x.querySelector("h3,h2").style.background = "blue";
//get the first #myDIV child with the tag h3 or h2 
 
var tableElm = document.getElementById("people");
var trArray = tableElm.querySelectorAll("tr");
trArray[3].style.background = "red";
//get an array with all #people child’s with the tr tag
```

<iframe width="100%" height="300" src="//jsfiddle.net/BreatheCode/a3grunqj/2/embedded/js,html,result/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

<div align="right"><small><a href="//jsfiddle.net/BreatheCode/a3grunqj/2/embedded/js,html,result/">Click para abrir un demo en una nueva ventana</a></small></div>

## The innerHTML
***

Como ya sabe, cada elemento del documento HTML puede tener algún tipo de contenido HTML. No importa si es un `<P>`, `<DIV>`, `<A>` o cualquier otro elemento HTML; Puede tener su propio innerHTML combinado con más contenido HTML.

![what is dom](../../assets/images/2387325b-338c-4c18-bb0f-2f95ed28901f.png)

La propiedad .innerHTML le brinda la capacidad de recuperar o configurar el contenido de cualquier elemento que tenga en su JavaScript. Por ejemplo:

```javascript
document.getElementsByTagName("div")[0].innerHTML = "abc";
// innerHTML can be used to insert plain text content or HTML, this creates a list inside a div element 
document.getElementsByTagName("div")[0].innerHTML = "abc";
// innerHTML can be used to insert plain text content or HTML, this creates a list inside a div element 
```

[[warning]]
| :point_up: Puede encontrar otras 2 propiedades en internet: nodeValue y textContent, pero en realidad no son universalmente utilizadas y tienen una funcionalidad más limitada.

## Añadiendo Elementos al Documento
***

Hay 2 funciones que podemos usar para eso: **appendChild** y **insertBefore.**

Digamos que ha seleccionado un `<div>` con el id = **"myFirstId"** y desea agregar un nuevo h1 dentro de ese div.

**Puedes usar la función appendChild así:**

```javascript
var divElem = document.getElementById("myFirstDiv");
var myNewHOne = document.createElement("H1");
var t = document.createTextNode("Hello World");
myNewHOne.appendChild(t);  //I have to add some text content to the h1  
divElem.appendChild(myNewHOne);
```

Ahora, digamos que tenemos una ul con 2 elementos, pero queremos insertar un nuevo LI al principio de esa lista.

**Podemos usar la función insertBefore para ese caso, como este:**

```javascript
var newItem = document.createElement("LI");
var textnode = document.createTextNode("Water");
newItem.appendChild(textnode);
var list = document.getElementById("myList");
list.insertBefore(newItem, list.childNodes[0]);  //adding the newItem before the FIRST child of the list.
```

## Eliminar elementos del documento
***

La función **removeChild** es excelente para eliminar un elemento del DOM y, en consecuencia, también del documento HTML. Deberás especificar quién es el elemento primario del elemento que está intentando eliminar.

Por ejemplo, si queremos eliminar todos los elementos de una lista de UL:

```javascript
// Eliminando todos los hijos de un elemento    
var element = document.getElementById("myFirstUL");
while (element.firstChild) {
    element.removeChild(element.firstChild);
}
```


[[warning]]
| :point_up:Esta es la única función soportada por todos los navegadores; no uses .remove () si te importa Explorer.

## Cambiando los Atributos
***

Para cambiar cualquier atributo de cualquier objeto en el DOM, necesitamos usar la propiedad .attribute así:

```javascript
// Eliminando todos los hijos de un elemento  
var element = document.getElementById("myElementId");
element.attribute = "whatever";
```

## Cambiando los Estilos
***

También puede cambiar cualquier regla o propiedad CSS aplicada a los elementos HTML utilizando el atributo **.Style**, como este:

```javascript
// Eliminando todos los hijos de un elemento  
var element = document.getElementById("myElementId");
element.style.color = "red";
element.style.background = "blue";
```














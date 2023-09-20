---
title: "Programación orientada a eventos"
subtitle: "Programación orientada a eventos: carga del sitio web (load), clic del usuario (click), cambio de tamaño de la ventana (resize), etc. Como desarrollador, debes asegurarte de que tus aplicaciones tengan un flujo. Ese flujo está determinado por todos los eventos posibles que pueden ocurrir mientras el usuario interactúa con tu aplicación."
cover_local: "../../assets/images/d2ca9eb7-a3f9-432d-b791-8b1266f8923a.gif"
textColor: "white"
date: "2020-10-19T16:36:31+00:00"
tags: ["programación orientada a eventos"]
status: "published"

---

## Programación orientada a Eventos

Trabajar con eventos es una forma totalmente nueva de **controlar el flujo de una aplicación.** Es la primera vez que tu código no se ejecutará en un flujo lineal. En su lugar, se ejecutará de forma asíncrona. ¿Quién sabe qué es lo primero?

En su lugar, tu código ahora se ejecutará **asincrónicamente** (es decir, algunas partes del código no funcionarán cuando el resto del código circundante se esté ejecutando, pero solo cuando se activan explícitamente). ¿Quién sabe qué viene primero?

### ¿Qué es un evento?

¡Un evento es algo que sucede! Como **hacer clic** en un botón, **presionar** una tecla del teclado, **pasar** sobre un `<div>` con el mouse, etc.

Tu trabajo como desarrollador es prepararte para esos eventos y **definir las funciones** que van a manejar esos eventos.

![programación orientada a eventos](https://github.com/breatheco-de/content/blob/master/src/assets/images/1c00bd95-1359-4fd5-8399-b1b80a769009.png?raw=true)

### ¿Pero quién desencadena estos eventos?

A veces es el usuario del sitio web, a veces es el navegador, a veces es otra aplicación que le permite saber algo, a veces el desarrollador desencadena eventos relacionados con la lógica empresarial, etc.

Hay docenas de eventos que se activan cada minuto, pero no tienes que hacer nada al respecto (no si no quieres). Están disponibles para ti según el tipo de aplicación que desees hacer.

## Tipos de Eventos

Estos son algunos de los tipos de eventos que se activan constantemente (y que puedes escuchar):

### MOUSE – Eventos

|Tipo de Datos    |Descripción       |
|:----------------|:-----------------|
|click           |Cuando el usuario hace clic con el mouse o el dedo en cualquier elemento HTML.   |
|mouseover,<br>mouseout    |El evento ocurre cuando el puntero se mueve hacia dentro (para el mouseover) o hacia afuera (para el mouseout) de un elemento, o uno de sus hijos.    |
|contextmenu    |Cuando el usuario hace clic derecho en el mouse.    |
|mousemove     |Si el usuario mueve el mouse.   |
|mousedown,<br>mouseup     |Si el usuario presiona o suelta el mouse.    |

<iframe width="100%" height="300" frameborder="1" src="https://4geeksacademy.github.io/code-projects/uncategorized/event-listener/mouse.html" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

<div align="right"><small><a href="https://4geeksacademy.github.io/code-projects/uncategorized/event-listener/mouse.html">Clic aquí para abrir demo en una nueva ventana</a></small></div>

> ☝ Juega con esta demo aquí

### VENTANA – Eventos

|Tipo de Datos    |Descripción       |
|:----------------|:-----------------|
|load	           |El navegador ha terminado de cargar el sitio web.  |
|error            |El evento ocurre cuando se produce un error al cargar un archivo externo (como un CSS o un JavaScript).
|scroll         |El evento se produce cuando la vista del documento o un elemento es deslizado.|
|pagehide,<br>pageshow    |Cuando el usuario se enfoca en una ventana / pestaña diferente; o cuando el usuario vuelve de una ventana / pestaña diferente.  |
|resize    |Cuando la ventana se redimensiona o cambia de tamaño.     |

<iframe width="100%" height="300" frameborder="1" src="https://4geeksacademy.github.io/code-projects/uncategorized/event-listener/frame.html" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

<div align="right"><small><a href="https://4geeksacademy.github.io/code-projects/uncategorized/event-listener/frame.html" allowfullscreen="allowfullscreen">Clic aquí para abrir demo en una nueva ventana</a></small></div>

> ☝ Juega con esta demo aquí

### FORMULARIOS – Eventos 

|Tipo de Datos    |Descripción       |
|:----------------|:-----------------|
|submit	    |El evento ocurre cuando se envía un formulario.    |
|focusin and focusout     |El evento ocurre cuando el puntero se mueve a un elemento o a uno de los elementos hijo del elemento.   |
|input       |El evento ocurre cuando un elemento obtiene datos introducidos por el usuario.    |
|change       |El evento ocurre cuando el contenido de un elemento del formulario, la selección o el estado previamente establecido han cambiado (para `<input>`, `<keygen>`, `<select>`, y `<textarea>`) |

<iframe width="100%" height="300"  frameborder="1" src="https://4geeksacademy.github.io/code-projects/uncategorized/event-listener/forms.html" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

<div align="right"><small><a href="https://4geeksacademy.github.io/code-projects/uncategorized/event-listener/forms.html">Clic aquí para abrir demo en una nueva ventana</a></small></div>

> ☝ Juega con esta demo aquí 

### TECLADO – Eventos

|Tipo de Datos    |Descripción       |
|:----------------|:-----------------|
|keyup           |Cuando el usuario suelta una tecla del teclado.    |
|keydown	     |Cuando el usuario presiona una tecla del teclado.    |
|keypress       |Cuando el usuario presiona y suelta una tecla del teclado. La diferencia de keydown/up es que keypress solo funciona con teclas de caracteres. Por ejemplo, no funciona en las flechas arriba\|abajo\|izquierda\|derecha. |

<iframe width="100%" height="300"  frameborder="1"src="https://4geeksacademy.github.io/code-projects/uncategorized/event-listener/keyboard.html" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

<div align="right"><small><a href="https://4geeksacademy.github.io/code-projects/uncategorized/event-listener/keyboard.html">Clic aquí para abrir demo en una nueva ventana</a></small></div>

> ☝ Juega con esta demo aquí

## Escuchando los Eventos

Ahora que sabes qué eventos hay, puedes comenzar a escucharlos cuando lo desees durante el tiempo de ejecución. La única forma de reaccionar ante cualquier evento es escuchar ese evento y asignar una función que maneje el evento como lo necesite.

Repitamos: Para **reaccionar** necesitas **escuchar**. Y para escuchar necesitas especificar una función **controladora** (handler). Llamamos a esa construcción un **Event Listener**.

![programación orientada a eventos](https://github.com/breatheco-de/content/blob/master/src/assets/images/9fa13314-24cc-4a4b-9676-e60616f73602.gif?raw=true)

Puedes agregar un detector de eventos de 2 maneras diferentes:

## Añadiendo Listeners desde el HTML

Por ejemplo, si deseas empezar a escuchar cuando el usuario hace clic en un botón en particular, todo lo que tienes que hacer es especificar el atributo "onclick" para esa etiqueta HTML específica de `<button>`, así:

```html
<!-- myClickHandler es la función de JavaScript que manejará el evento -->
<button onclick="myClickHandler()">Click me</button>
 
<script>
function myClickHandler() {
    alert('hello');
}
</script>
```

<iframe width="100%" height="300" src="//jsfiddle.net/BreatheCode/b7c6gmnd/1/embedded/js,html,result/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

<div align="right"><small><a href="//jsfiddle.net/BreatheCode/b7c6gmnd/1/embedded/js,html,result/" allowfullscreen="allowfullscreen">Clic aquí para abrir demo en una nueva ventana</a></small></div>

## Añadiendo Listeners desde JavaScript (durante el tiempo de ejecución)

A veces los elementos del DOM no existen desde un principio. Tal vez se crean después de una llamada a la base de datos o después de que el usuario haya hecho algo. Para resolver ese problema, debe comenzar a escuchar después de crear los nuevos elementos.

La función `.addEventListener()` es perfecta para esto porque se puede usar en cualquier elemento DOM durante el tiempo de ejecución.

Al usar la función `.addEventListener()`, debe especificar qué **evento** quiere escuchar, y **la función controladora** que se llamará cada vez que ese evento se active en ese elemento DOM.

Por ejemplo, el siguiente código está creando una lista de nombres, y cada `<li>` está escuchando el evento "click", que luego activa la eliminación del mismo `<li>`:

<iframe width="100%" height="300" src="//jsfiddle.net/gmihov001/kh4n57wo/29/embedded/js,html,css,result/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

<div align="right"><small><a href="//jsfiddle.net/gmihov001/kh4n57wo/29/embedded/js,html,css,result/">Clic aquí para abrir demo en una nueva ventana</a></small></div>

## El Objeto del Evento

Las funciones **handler** de eventos pueden recibir un parámetro opcional en su declaración, que la mayoría de los desarrolladores denominan **event**, **evt** o simplemente **e**. Este parámetro siempre se completa con el "Objeto de evento" que se envía de forma predeterminada desde cada evento y contiene información importante sobre el evento que se activó, el elemento donde ocurrió, su valor, etc.

No importa qué tipo de evento (eventos relacionados con el mouse, evento de teclado, ventana, etc.), el objeto de evento siempre tendrá al menos las siguientes propiedades:

```javascript
function myEventHandler(eventObj) {
    console.log(eventObj.target);
     // Imprimirá en la consola el elemento del DOM que ha activado el evento
    console.log(eventObj.type);
     // Imprimirá en la consola el tipo de evento
    console.log(eventObj.cancelable);
     // Imprimirá en la consola true o false si el evento puede ser cancelado
    eventObj.preventDefault();
     // Evitará la acción predeterminada del evento si es posible
    eventObj.stopPropagation();
     // Evitará la propagación del evento si es posible
}
```

### Cada Objeto de Evento tiene las siguientes Propiedades:

|Propiedades     |Descripción        |
|:---------------|:------------------|
|target           |Devuelve el elemento del DOM que ha activado el evento.     |
|type             |El tipo de evento: click, mouseover, load, etc.     |
|cancelable       |Si puede detener el evento o no.    |
|preventDefault()  |Si el evento se puede cancelar, este método detiene la acción predeterminada del mismo; por ejemplo, al evitar un evento de "submit" de un formulario, el formulario no se enviará, lo que puede ser útil si el formulario tiene errores que deben corregirse, etc.    |
|stopPropagation()  |Evita que un evento se propague (es decir, que desencadene el mismo evento en elementos anidados o padres).  |

Dependiendo del tipo de evento, tendrá propiedades adicionales que le darán información muy útil sobre lo que sucedió cuando se activó el evento.

Una de las propiedades adicionales más importantes es la propiedad **target.value** del objeto de evento relacionados con los campos de entrada (input). Nos permite capturar y guardar la entrada del usuario de los elementos de entrada.

Puedes hacerlo pasando el argumento 'event' en la función controladora de eventos en línea `onchange`:

```html
<input type="text" onchange="myChangeHandler(event)" /> 
 
<script>
const myChangeHandler = (e) => {
    console.log(e.target.value);
     // Imprimirá en la consola lo que el usuario escriba en el campo de entrada
}
</script>
```

O puedes hacerlo con `addEventListener`:

*index.html:*
```html
     <input type="text" />
```

*index.js:*
```javascript
     const myChangeHandler = (e) => {
          console.log(e.target.value);
     }

     document.querySelector("input").addEventListener('change', myChangeHandler);
```

Ten en cuenta que en `addEventListener()` solo hacemos referencia a la función (`myChangeHandler`) y **no** la llamamos (`myChangeHandler()`). Si la llamas, se ejecutará automáticamente cuando se cargue la página y no esperará a que se desencadene un evento y ese no es el objetivo. Por lo tanto, no necesitamos pasar el **objeto de evento (event object)** como argumento allí (no hay paréntesis). `addEventListener()` pasa automáticamente el objeto de evento a la función que lo controla (handler function).

### Información Adicional para Eventos del Mouse

|Propiedades     |Descripción        |
|:---------------|:------------------|
|clientX, clientY    |Devuelve la horizontal o vertical de coordenadas del puntero del mouse, con relación a la ventana actual, cuando el evento fue provocado.    |
|pageX, pageY       |Devuelve la horizontal o vertical de coordenadas del puntero del mouse, en relación con el documento, cuando el evento fue provocado.     |
|which            |Devuelve qué botón del mouse se presionó, cuando el evento fue provocado.      |

### Información Adicional para Eventos de Teclado

|Propiedades     |Descripción        |
|:---------------|:------------------|
|keyCode        |Devuelve el código de caracteres Unicode de la tecla que activa el evento.    |
|shiftKey, altKey o ctrlKey     |Devuelve si las teclas `shift`, `alt` o `ctrl` se pulsan cuando el evento fue provocado.    |

### Información Adicional para Eventos de Rueda (scroll)

|Propiedades     |Descripción        |
|:---------------|:------------------|
|deltaX, deltaY  |Devuelve la cantidad de desplazamiento vertical u horizontal de una rueda del ratón (eje y) o (eje x)   |
|deltaMode       |Devuelve un número que representa la unidad de mediciones de valores delta (píxeles, líneas o páginas)    |

> 🔗 Hay mucha más información que puedes obtener del objeto de evento, pero nos estamos enfocando en las propiedades más utilizadas. Para una lista más grande de propiedades, por favor lee [esta guía.](https://www.w3schools.com/jsref/dom_obj_event.asp)

## Eliminar los Listeners

¿Qué pasa si no quiero seguir *escuchando* un evento? Todos los navegadores modernos eliminan los listener de eventos cuando se elimina el elemento DOM en el que se aplicaron. Pero si no deseas eliminar el elemento DOM, puedes eliminar el listener de forma manual utilizando la función `.removeEventListener()`.

```javascript
element.removeEventListener(type, eventHandlerFunction);
```

Tienes que utilizar los mismos parámetros exactos en la función `removeEventListener()` que los que se utilizan en la función `addEventListener()`.

He aquí un ejemplo:

En este código, se añade un detector de eventos para el evento 'click'. Luego, la primera vez que el detector de clic se activa, la función controladora elimina el detector de eventos desde el botón. Es por eso que la segunda vez que se hace clic en el botón, no pasa nada.

<iframe width="100%" height="300" src="//jsfiddle.net/BreatheCode/vcbkgn4o/embedded/js,html,result/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

<div align="right"><small><a href="//jsfiddle.net/BreatheCode/vcbkgn4o/embedded/js,html,result/">Clic aquí para abrir demo en una nueva ventana</a></small></div>










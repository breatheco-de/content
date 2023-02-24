---
title: "Entendiendo HTML, input (Entrada), Textarea y formularios ..."
subtitle: "Los formularios HTML, los input HTML y el textarea HTML son muy fáciles de entender, y son la ÚNICA manera de crear sitios web interactivos sin AJAX. Estos conceptos muy básicos representan el 90% de todo lo que siempre necesitarás saber sobre formularios ."
cover: "https://www.desktopbackground.org/p/2013/09/13/637935_nasa-wallpapers_1600x1200_h.jpg"
textColor: "white"
date: "2020-10-19T16:36:31+00:00"
tags: ["HTML","entradas","formularios"]
status: "published"

---

## Formularios HTML

Esta lección es muy fácil de entender, pero es esencial debido a que en este nuevo conocimiento, se transmitirá toda la interactividad de Internet. Hay algunas etiquetas HTML adicionales que debemos analizar antes de terminar el Pre-Work: son las primeras formas posibles de interacción que se introdujeron en HTML: las entradas o inputs y los formularios.

Como siempre, comparemos nuestro sitio web con un documento de MS Word... En algún momento, los científicos necesitaban crear formularios como los que llenamos cuando pagamos nuestros impuestos: con espacios en blanco disponibles para que el usuario los llene con su Nombre, Apellido, Fecha de nacimiento, etc.

![html textarea html input](../../assets/images/12ff6e40-706f-47ff-9ada-53dada968eaf.png)

Los elementos que el usuario completa en un formulario se denominan `<input>` y siempre tienen que estar envueltos dentro de una etiqueta `<form>`. También puedes utilizar todas las demás etiquetas HTML que aprendimos en las lecciones anteriores sin ningún problema.

Aquí hay un ejemplo de un formulario simple en HTML:

<iframe width="100%" height="300" src="//jsfiddle.net/BreatheCode/L62c4yud/1/embedded/html,result/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

<div align="right"><small><a href="//jsfiddle.net/BreatheCode/L62c4yud/1/embedded/html,result/">Click to open demo in a new window</a></small></div>

La siguiente es una lista de todos los elementos posibles que podemos usar para recibir cualquier entrada o input del usuario:

|**Name**   |**Declaration**   |**Description**   |
|:----------|:-----------------|:-----------------|
|Texto      |`<input type="text">`   |El input de texto está destinada a recibir cualquier pequeño string de caracteres como: nombre de usuario, nombre, apellido, fecha de nacimiento, etc.<br>`<input type="text" name="Name" />name="comments"><textarea/>`   |
|Textarea |`<textarea>`   |El área de texto es ideal para inputs de texto largos. Su principal diferencia respecto al input de texto es su capacidad de permitir múltiples líneas.<br>`<textarea name="comments"><textarea/>`   |
|Contraseña   |`<input type="password" />`   |Esto es como un tipo de input = "texto" pero con la única diferencia de que los caracteres están ocultos como viñetas: el usuario no puede ver lo que están escribiendo.<br>`<input type="password" name="password" />`   |
|Radiobutton   |`<input type="radio">`   |Permite al usuario seleccionar sólo una de todos los inputs con el mismo nombre.<br>`<input type="radio" name="color" value="red" />` <br> `<input type="radio" name="color" value="green" />`   |
|Checkbox   |`<input type="check">`   |Debes usar corchetes en el nombre del input para permitir que el usuario seleccione múltiples opciones al mismo tiempo.<br>`<input type="check" name="color[]" value="green" />`<br> `<input type="check" name="color[]" value="blue" />`   |
|Archivo   |`<input type="file">`   |Esta es la única manera de trabajar con archivos. Por ejemplo: es lo que usan los sitios web cuando te piden que subas una foto.<br>`<input type="file" name="photo" value="" />`   |
|Botón de Enviar   |`<input type="submit">`   |Cuando el formulario está listo para ser enviado, el usuario presiona este botón "enviar" y todo se envía al servidor para su procesamiento.<br>`<input type="submit" value="Send Form" />`   |
|Select |`<select>`   |Pide al usuario que elija uno o más elementos de una lista de opciones.<br>`<select name="color" /> <option value="red">Red </option> <option value="yellow">Yellow</option> <select />`   |

## Atributos del Input o Entrada

Al igual que cualquier otra etiqueta HTML, las etiquetas de input tienen varios atributos que se pueden configurar para describir su comportamiento de manera más específica:

`VALUE`: Puedes especificar un valor predeterminado que debe tener el input antes de que el usuario la complete:

```html
<input type="text" name="firstname" value="John">
```
`READ ONLY`: Determina si el usuario puede cambiar el valor del input.

```html
<input type="text" name="firstname" value="John" readonly>
```

`DISABLED`: Determina si el input será gris y de solo lectura. Los inputs deshabilitados no se envían al servidor: actúan como si nunca hubieran existido.

```html
<input type="text" name="firstname" value="John" disabled>
```

`SIZE`: Tamaño del input.

```html
<input type="text" name="firstname" value="John" size="40">
```

## Las formas METHOD y ACTION


Los dos atributos más importantes que deben establecerse en la etiqueta `<form>` son la action y el method:

**Action**: Es la URL donde se enviarán los datos recopilados del formulario.

**Method**: Puede ser "POST" o "GET". Las principales diferencias serán: (1) Cómo se enviarán los datos recopilados a la página de destino una vez que lleguemos allí y (2) Cómo se envían los datos del formulario al servidor.

|**Usando el método GET**   |**Usando el método POST**   |
|:----------------------|:-----------------------|
|Todos los datos del formulario están codificados en la URL. Esto significa que adjuntará toda la información del formulario al final de la URL de destino, por ejemplo: http://www.mydestinationurl.com?input_name1=value1&input_name2&value2….  |Los datos se ocultarán al usuario final. La URL permanecerá como se definió en el atributo "acción" y solo un desarrollador podrá solicitar la información del formulario.   |

> :point_up: Si vas a utilizar el ` <input type =" file ">` el único método admitido es POST.


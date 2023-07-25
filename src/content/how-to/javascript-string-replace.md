---
title: "¿Cómo usar el método replace de Strings en Javascript?"
subtitle: "Descubre cómo utilizar el método replace en JavaScript para manipular y reemplazar fácilmente texto dentro de cadenas. Aprende sobre su sintaxis, opciones y ejemplos."
tags: ["javascript", "arrays"]
authors: ["jul1998"]

---

El método `String.replace()` es una herramienta en JavaScript que permite remplazar texto o palabras especificas por nuevos valores. Este permite manipular strings y es bastante utilizado en diversos campos como desarrollo web, proceso de datos y formato de texto. Para comenzar, se puede ver en este ejemplo de código como se utiliza el método de los strings `replace()`:

```js
const stringOriginal = "Hola, mundo!";
const stringModificado = stringOriginal.replace("mundo!", "Universo");
console.log(stringModificado); // Resultado: Hola, Universo
```

En el ejemplo anterior, hay un string guardado en `stringOriginal` y otra variable que va a almacenar el resultado de reemplazar "mundo" por "Universo". Finalmente se muestra el nuevo texto en la consola. Si te interesa conocer más sobre los strings, tenemos un artículo de [strings en JavaScript](https://4geeks.com/es/lesson/strings-en-javascript) que explica en más detalle este tipo de dato.

Si todavía no tienes un dominio total sobre [cómo programar en JavaScript](https://4geeks.com/es/lesson/que-es-javascript-aprende-a-programar-en-javascript) o [para qué sirve Javascript](https://4geeks.com/es/lesson/para-que-sirve-javascript) te recomendamos leer sobre ello en el [Blog de 4Geeks](https://4geeks.com/es/how-to).

## Explicación del Método String.replace()

`String.replace()` es usado para reemplazar substrings específicos o patrones dentro de textos (strings). Este realiza una búsqueda en el string completo, reemplaza el texto indicado y retorna un nuevo string con los cambios hechos. 

## Parámetros de String.replace()

`String.replace()` recibe dos parámetros que son los siguientes:

1.	**searchValue**: Este define el substring o texto que estamos buscando para ser reemplazado y es requerido. Puede ser un String o una [expresion regular](https://4geeks.com/es/lesson/expresiones-regulares-javascript).
2.	**replaceValue**: Indica el string o texto que reemplazará el valor previamente buscado por el parámetro `searchValue` (El primer parámetro). Además, solamente la primera ocurrencia (Cuando se consiga por primera vez) será reemplazada a menos que usando expresiones regulares, se utilice la bandera global (`g`) que reemplazaría todas las palabras dentro del string. Esto permite mayor flexibilidad y reemplazos un poco más complejos.

## Ejemplos de uso del método string.replace()

Ahora se monstrarán algunas situaciones donde se puede utilizar este método y entenderlo mejor:

###  Reemplazar una sola palabra.

```js
const oracion = "¡Me encanta Javascript!";
const oracionModificada = oracion.replace("Javascript", "programar");

console.log(oracionModificada); // Resultado: ¡Me encanta programar!
```
En este ejemplo, se reemplazó la palabra `"Javascript"` por `"programar"`. El resultado aparece en la consola con la oración modificada.

### Reemplazar todas las palabras usando una expresión regular.

```js
const oracion = "¡Me encanta Javascript! Javascript es un excelente lenguaje de programación para desarrollo web. No hay mejor lenguaje que javascript.";
const oracionModificada = oracion.replace(/Javascript/g, "JS");

console.log(oracionModificada); // Resultado: ¡Me encanta JS! JS es un excelente lenguaje de programación para desarrollo web. No hay mejor lenguaje que javascript.
```

En este ejemplo se utiliza lo anterior mencionado que es la bandera global (`g`) con el fin de reemplazar todas las ocurrencias de la palabra `"Javascript"` en la variable `"oracion"`.

> Como se puede apreciar en el resultado, la ultima palabra `"javascript"` no fue reemplazado por `"JS"`, esto pasa porque la búsqueda fue case sensitive (Sensible a mayúsculas y minúsculas), para que busque no case sensitive (Ignore mayúsculas y minúsculas), debes usar el flag `i` en la expresión regular.

### Reemplazar todas las palabras usando una expresión regular que no distingue mayúsculas ni minúsculas.

```js
const oracion = "¡Me encanta Javascript! Javascript es un excelente lenguaje de programación para desarrollo web. javaScript ofrece muchas opciones en esta área.";
const oracionModificada = oracion.replace(/javascript/gi, "JS");

//Resultado: ¡Me encanta JS! JS es un excelente lenguaje de programación para desarrollo web. JS ofrece muchas opciones en esta área.
```

Ahora se utilizó (`gi`) como bandera global que no distingue entre mayúsculas y minúsculas, lo cual permite detectar mayor numero de ocurrencias de la palabra buscada en un texto.

## Conclusión

Este método de `String.replace()` es una poderosa y versátil herramienta en JavaScript que permite la manipulación y reemplazo de cualquier dato de tipo string. Les abre las puertas a los programadores para poder buscar y reemplazar texto especifico o patrones dentro de strings completos y mediante la práctica, esto puedo mejorar sus habilidades en la programación con el fin de ser capaces de resolver más problemas de esta índole.

Para obtener mayor información y recursos acerca de JavaScript, puedes entrar al [blog](https://4geeks.com/es/technology/javascript) de 4Geeks para poder profundizar en este lenguaje.

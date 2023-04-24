---
title: "Ejemplos Expresiones Regulares"
subtitle: "Explora Ejemplos de Expresiones Regulares y aprende cómo utilizarlas para buscar patrones y manipular cadenas de texto de manera efectiva."
tags: ["expresiones regulares"]
authors: ["yamilmelian"]

---

Las expresiones regulares, también conocida como regex, permiten buscar un patrón de caracteres en un texto. Son increíblemente útiles en programación, análisis de datos o en la administración de sistemas a través de la terminal.

Un ejemplo de la utilidad de las expresiones regulares sería buscar los números telefónicos que aparecen en una hoja de cálculo con 10.000 filas. Realizar la tarea revisando fila a fila nos llevaría horas, y con el riesgo de equivocarnos. Con regex podemos hacerlo en segundos utilizando un patrón que coincida con los número de teléfono. Imaginemos que los números de teléfono de una región siguen un patrón 111-111-(111) donde 1 puede ser cualquier número del 1 al 9. Podemos definir la siguiente expresión regular:

^[1-9]{3}-[1-9]{3}-\([1-9]{3}\)$

No te asustes. La primera vez que observas una expresión regular puede resultar confuso. En este artículo encontraras [ejemplos de expresiones regulares](https://4geeks.com/es/lesson/regex-tutorial-regular-expression-ejemplo). Al final del artículo encontrará un resumen de las reglas que sirven para formar expresiones regulares.

## Reglas de las expresiones regulares:

* `.` : Coincide con cualquier caracter salvo el salto de linea.

* `^` : Coincide con el principio de linea.

* `$` : Coincide con el final de linea.

* `[ ]` : Coincide con los caracteres que se encuentran entre los brackets.

* `[^ ]`: Coincide con los caracteres que __no__ se encuentran entre los brackets.

* `*`: Coincide con cero o más ocurrencias del caracter previo.

* `+`: Coincide con una o más ocurrencias del caracter previo.

* `?`: Coincide __opcionalmente__ con el caracter posterior en caso de que exista.

* `{m}`: Coincide con m ocurrencias del caracter previo.

* `{m,n}`: Coincide entre m y n ocurrencias del caracter previo.

* ´ \ `: Es un caracter de escape permite utilizar el caracter posterior como si no fuera una regla. En otros caso otorga unas reglas al caracter posterior.

* `()`: Agrupa conjunto de expresiones regulares.

## Ejemplos de expresiones regulares resueltos:

### Expresión regular literal:

Son las más sencillas. Supongamos que queremos buscar la palabra “perro” la expresión regular sería:

const texto = "El perro verde"; // El texto que queremos analizar

``` 
const regex= /perro/g; // Definimos la expresión regular.

const coincidencias= texto.match(regex) // Declaramos una variable a la que asignaremos las coincidencias

console.log(coincidencias) //Mostramos por consola las coincidencias, en este caso: perro
``` 

> Esta expresión no coincidirá con Perro o perrO. Solo coincidirá con la palabra escrita en minúsculas. En JavaScript se usa el siguiente formato /aquí la expresion regular/. La g al final de la expresión regular la usamos para buscar todas las coincidencias de forma global


### Patrones simples:

Ahora queremos una expresión regular que coincida tanto con perro como con Perro:

``` 
const texto= "Perro, gato, jirafa, perro, caballo, unicornio" // El texto que queremos analizar

const regex= /[Pp]erro/g;  //Definimos la expresión regular.

const coincidencias= texto.match(regex) // Declaramos una variable a la que asignaremos las coincidencias

console.log(coincidencias) //Mostramos por consola las coincidencias, en este caso: Perro, perro
``` 

> Los corchetes [] permiten buscar cualquiera de los caracteres que se encuentre dentro. Por tanto [Pp] coincidirá tanto con p minúscula como con P mayúscula.

Otro ejemplo de un patrón simple de una expresión regular podría ser buscar en una base de datos usuarios cuyo nombre sea la palabra gato seguido de 1 o más números:

``` 
const usuarios= "david, maria5, juan3, gato123, PedroG, gato12345, gato, julian, gato1111" // El texto que queremos analizar

const regex= /gato[1-9]+/g; 

const coincidencias= usuarios.match(regex) // Declaramos una variable a la que asignaremos las coincidencias

console.log(coincidencias) //Mostramos por consola las coincidencias, en este caso: 'gato123', 'gato12345', 'gato1111'
``` 

* [1-9]: es un rango que incluye del 1 al 9. También se puede usar [a-z] para letras entre a y z en minúscula o [A-Z] para letras entre la A y Z en mayúscula. Incluso [a-zA-Z] para las dos.

* +: Implica que debe haber una o más ocurrencias del carácter previo. En este caso sería al menos uno o más números del 1 al 9 después de la palabra gato.>Nota: Esta regex no detectaría al usuario “gato” puesto que debe ir precedido de uno o más números. Si utilizaramos el carácter “*” en vez de “+” sería entre cero y más ocurrencias y entonces si coincidiría con el usuario gato.


### Expresiones regulares complejas

```
const texto= "Este es mi texto de prueba en el que voy a querer cambiar unas palabras por otras. Simplemente buscado coincidencias";

const regex= /(?<=texto )(.*)(?= en)/s;

console.log(texto..match(regex)); // El resultado será "de prueba"
```

* ´(?<=texto )´ es una expresión de retroceso positivo que coincide con cualquier cadena de caracteres que esté precedida por "texto ". En otras palabras, este grupo de captura busca "texto " en la cadena de texto pero no la incluye en la coincidencia. Esto se conoce como una coincidencia positiva sin captura.

Es una expresion de retroceso positivo que coincide con cualquier cadena de caracteres que esté seguido por 'en'. El grupo de caputa (.`*`)

* ´(.*)(?= en)´ es una expresion de retroceso positivo que coincide con cualquier cadena de caracteres que esté seguido por 'en'. El grupo de caputa (.`*`) captura cualquier carácter cero o más veces. Esto significa que la coincidencia será la menor cantidad posible de caracteres que satisface la expresión regular. El (?= en) asegura que la coincidencia termine justo antes de la cadena " en" en la cadena de texto, pero no la incluye en la coincidencia.

* El flag ´s´ al final de la expresión regular es una modificación de la expresión regular que indica que el carácter especial `.` debe coincidir con cualquier carácter, incluyendo el carácter de nueva línea.

#### Ejemplo de expresión regular usando el flag s

```
const texto= "Este es mi texto de prueba en el que voy a querer cambiar unas palabras por otras. Simplemente buscado coincidencias";

const regex= /\./s;

console.log("las coincidencias han sido: ", texto.match(regex).length);
//El resultado será = "las coincidencias han sido: 1".

```

* `\.`: En este caso utilizamos el caracter de escape `\` antes del punto para indicar que queremos buscar el punto en vez del caracter especial "`.`" 

* Con este snippet podemos contar la cantidad de puntos que aparecen en un string.

Otra variante del ejemplo anterior sería:

```
const texto= "Este es mi texto de prueba en el que voy a querer cambiar unas palabras por otras. Simplemente buscado coincidencias";

const regex= /\w/g;

console.log("El número de palabras que contiene texto es: ", texto.match(regex).length);
//El resultado será= El número de palabras que contiene texto es: 20.

```

* `\b` coincide con un límite de palabra, lo que significa que solo coincidirá con palabras completas, no con partes de palabras.

* `\w` coincide con cualquier carácter de palabra, que incluye letras (mayúsculas y minúsculas), números y guiones bajos (_).

* `+` coincide con uno o más caracteres de palabra.

* `/g` es una bandera global que indica que se deben encontrar todas las coincidencias en la cadena de texto, en lugar de detenerse en la primera coincidencia encontrada.

Puedes leer más sobre este tema y otros en el Blog de [4Geeks](https://4geeks.com/es/how-to).

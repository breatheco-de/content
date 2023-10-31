---
title: "Todo lo que necesitas saber sobre las Expresiones Regulares Javascript"
subtitle: "Aprende todo lo necesario sobre las expresiones regulares en JavaScript. Descubre cómo utilizarlas para validar, buscar y manipular patrones de texto en tus proyectos web."
tags: ["JavaScript","regular-expressions"]
authors: ["danielmoret"]

---

Las [expresiones regulares](https://4geeks.com/es/lesson/regex-tutorial-regular-expression-ejemplo), también conocidas como **RegExp**, son patrones que se utilizan para validar y manipular texto, se pueden utilizar prácticamente en cualquier lenguaje, debido a que la mayoría de ellos cuenta con una librería o módulo que nos permite utilizarlas.

Seguramente has interactuado con expresiones regulares más de lo que te imaginas, ya que estas son muy útiles, uno de sus usos es validar entrada de datos de los usuarios. Por ejemplo, cuando nos solicitan que nuestra contraseña tenga caracteres especiales, mayúsculas, minúsculas y una longitud mínima de 8 caracteres, se puede usar una expresión regular para verificar que la cadena de texto introducida cumple con el patrón requerido.

Otro uso de las expresiones regulares es para buscar y reemplazar texto. Si se tiene un documento donde una palabra está mal escrita en reiteradas ocasiones, se puede usar una expresión regular para buscar todas las instancias de esa palabra y reemplazarla por otra o quisieras saber si ciertas palabras se encuentran en el documento, también se podría dar uso de ellas.

Las expresiones regulares son una herramienta muy poderosa para realizar búsquedas complejas donde tenemos que examinar grandes cantidades de texto, a pesar que pueden parecer complicadas al principio, se requiere tiempo y práctica para entender como funcionan y como definir patrones que cumplan con nuestros requerimientos, nos serán muy útiles para validar entradas de los usuarios y analizar gran cantidad de datos. Una vez que las domines, podrás ahorrar tiempo y esfuerzo cuando necesites manipular texto.


## Estructura de una RegExp

<p align="center">
  <img src="https://i.postimg.cc/sDMYsCxZ/Regexp.png">
</p>

Hay expresiones regulares simples como **/hola/** donde buscará en la cadena de texto a evaluar si hay una coincidencia para la palabra “hola” o un poco más complejas como **/([a-z] {2,} [0-9] {3,5})/** donde buscará una coincidencia de dos o más letras seguidas por tres a cinco números.

Al final de la estructura de la expresión regular, se ubican las **flags** o **banderas**, estas nos permiten realizar búsquedas de otra manera, algunas de las flags más usadas es la **g**, la cual  nos permite realizar una búsqueda global, esto hace que la búsqueda no se detenga al encontrar la primera coincidencia, otra flag es la i, esta nos permite realizar una búsqueda que no sea sensible a mayúsculas y minúsculas. Estas flags junto a otras que no se mencionaron, pueden utilizarse juntas o por separado.

Podemos observar que en las expresiones regulares más complejas se hace uso de caracteres especiales, estos son utilizados cuando queremos que nuestra búsqueda sea más precisa, veamos alguno de sus usos.


## Aserciones de Expresiones Regulares

Son límites que tendrán nuestros patrones, al realizar la búsqueda nos permite establecer si una cadena de texto comienza o finaliza por algún caracter o caracteres específicos.

|       Caracter especial         |Ejemplo                          |Descripción                         |
|----------------|-------------------------------|-----------------------------|
|**^**|expReg = / **^** a/         |El texto debe comenzar por “a”        |
|**$**        |expReg = /a **$**/                    |El texto debe terminar en “a”            |
|**\b**         |expReg = /Git **\b**/  |Se busca “Git” en todo el texto, para ser válido debe estar al final de una palabra|

## Cuantificadores de Expresiones Regulares

Nos indica cuantas veces un caracter se repite o va a coincidir.

|       Caracter especial         |Ejemplo                          |Descripción                         |
|----------------|-------------------------------|-----------------------------|
|**\***|expReg = /a **\***/    |El caracter “a” debe aparecer 0 o más veces       |
|**+**        |expReg = /a **$**/                    |El caracter “a” debe aparecer 0 o más veces          |
|**?**         |expReg = /abc **?**/  |Se busca “abc” en todo el texto, para ser válido debe al menos encontrar “ab”, “c” es opcional
|**{n,m}** donde m > n|expReg = /a **{3,4}**/|Será válido si en el texto hay alguna coincidencia, con “aaa” o “aaaa”|

## Rangos y grupos de Expresiones Regulares

Nos permite establecer un rango de caracteres o agrupar expresiones regulares.

|       Caracter especial         |Ejemplo                          |Descripción                         |
|----------------|-------------------------------|-----------------------------|
|**[]**|expReg = /[abc]/   |Será válido si el texto contiene a,b o c     |
|**-**        |expReg = /[a-c]/                   |Será válido para caracteres en minúsculas entre la “a” y la “c"         |
|**\|**         |expReg = /hola \| adios/ |Es válido para “hola” o “adiós"
|**()**|expReg = /([a-z] {2,} [0-9] {3,5})/|Sirve para agrupar distintas expresiones regulares|

## Algunos atajos para rango de caracteres de Expresiones Regulares

|       Caracter especial         |Ejemplo                          |Descripción                         |
|----------------|-------------------------------|-----------------------------|
|**\d**|expReg = /**\d**/        |Busca cualquier dígito entre 0 y 9      |
|**\a**      |expReg = /**\a**/                    |Busca cualquier caracter alfanumérico (azA-Z0-9)|
|**\s**         |expReg = /**\s**/  |Busca los espacios en blanco|

# Expresiones Regulares en JavaScript

En [Javascript](https://4geeks.com/es/lesson/que-es-javascript-aprende-a-programar-en-javascript) hay dos formas de crear una expresión regular, a través de su constructor o simplemente colocando la expresión entre barras, ejemplo **/expReg/**.
```js
//Notación literal
const expReg = /lorem/g

//Utilizando la función constructora
const expReg = new RegExp("lorem","g")
const expReg = new RegExp(/lorem/,"g")
```
Ya conociendo como podemos crear expresiones regulares en JavaScript, ahondaremos con más detalle cómo validar expresiones regulares en javascript, utilizando algunos métodos podemos verificar si una cadena de texto cumple o no con el patrón.

Si queremos realizar una búsqueda para verificar si hay una coincidencia exacta en una cadena de texto, podemos utilizar el método test() o exec(), la diferencia entre ambos, es que test() devuelve un valor booleano (true o false) de encontrar coincidencia o no, por otro lado, el método exec() devuelve un arreglo con información referente a la búsqueda o null en caso de no haber ninguna coincidencia, veamos algunos ejemplos.

```js
let cadena = "Hola Mundo"

let busqueda1 = /Hola/g
let resultado = busqueda1.test(cadena)
console.log(resultado) //true

let busqueda2 = /Adios/g
let resultado2 = busqueda2.test(cadena)
console.log(resultado2) //false
```
Podemos observar como el método test() devuelve ***true*** en caso de que en la cadena de texto haya una coincidencia con el patrón buscado y ***false*** en el caso contrario.

Por otro lado el método exec(), devuelve un array en caso de ser válido, donde el índice 0 del array (resultado[0]) muestra la parte de la cadena que es válida para la expresión regular que le indicamos, también podemos ver que nos indica el index que sería la posición del elemento encontrado dentro de la cadena y el input que muestra la cadena donde evaluamos la expresión regular. De no encontrar una coincidencia con el patrón buscado se devolverá ***null***.

```js
let cadena = "Hola Mundo"

let busqueda1 = /Hola/g
let resultado = busqueda1.exec(cadena)
console.log(resultado) //['Hola', index: 0, input: 'Hola Mundo', groups:undefined]

let busqueda2 = /Adios/g
let resultado2 = busqueda2.exec(cadena)
console.log(resultado2) //null
```

También existen métodos para reemplazar ciertas palabras por otra dentro de una cadena de texto, para ello podemos utilizar el método replace(), veamos un ejemplo.

```js
let cadena = "el cielo es azul"

let resultado = cadena.replace(/azul/gi,"amarillo")
console.log(resultado) //'el cielo es amarillo'
```
Este método como podemos ver en el ejemplo, devuelve una cadena de texto nueva, donde se sustituyó cada grupo de caracteres que coincidiera con nuestra expresión regular, por los caracteres que se asignaron como reemplazo, en este caso azul por amarillo. Si quieres conocer mas [ejemplos sobre expresiones regulares](https://4geeks.com/es/how-to/ejemplos-expresiones-regulares) puedes revisar nuestro Blog.

Si te parecen interesantes las expresiones regulares en JavaScript, te gustaría practicar o probarlas antes de implementarlas en tu código, existen herramientas en línea para validar expresiones regulares JavaScript online. Una es [regex101](https://regex101.com/)  donde podrás validar expresiones regulares en tiempo real, solo colocando tu expresión regular y la cadena de texto en donde la quieres aplicar.

Las expresiones regulares aunque parecen muy complicadas al principio, son una herramienta muy importante de aprender, ya que se utilizan mucho a la hora de validar datos y te ayudará a ser un mejor programador. Puedes leer más sobre este tema y otros en el Blog de [4Geeks](https://4geeks.com/es/how-to).

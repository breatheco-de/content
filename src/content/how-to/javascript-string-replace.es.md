# Introducción al Método String.replace() en JavaScript

El método string.replace() es una herramienta en JavaScript que permite remplazar texto palabras especificas con nuevos valores. Este permite manipular strings y es bastante utilizados en diversos campos como desarrollo web, proceso de datos y formato de texto.
Para comenzar, se puede ver en este ejemplo de código como se utiliza string.replace()

```js
const stringOriginal = "Hola, mundo!"
const stringModificado = stringOriginal.replace("mundo!", "Universo")

//Resultado:
// Hola, Universo
```

En ejemplo anterior, hay un string guardado en stringOriginal y otra variable que va a almacenar el resultado de reemplazar "mundo" por "Universo". Finalmente se muestra el nuevo texto en la consola.
Para saber más sobre strings, tenemos un artículo de [strings en JavaScript](https://4geeks.com/es/lesson/strings-en-javascript) ideal para programadores que desean tener un mayor entendimiento de este tipo de dato.

## Explicación del Método String.replace().

String.replace() es usado para reemplazar substrings específicos o patrones dentro de otros textos o strings. Este realiza una búsqueda en el string completo, reemplaza el texto indicado y retorna una nuevo string con los cambios hechos. 

## Parámetros de String.replace().
String.replac() recibe dos parámetros que son los siguientes:
1.	**searchValue**: Este define el substring o texto que estamos buscando para ser reemplazado y es requerido.
2.	**replaceValue**: Indica el string o texto que reemplazará el valor previamente buscado por el parámetro searchValue. Además, solamente la palabra especificada será reemplazada a menos que se utilice la bandera global (`g`) que reemplazaría todas las palabras dentro del string deseado. Esto permite mayor flexibilidad y reemplazos un poco más complejos.
Ejemplos de uso del método string.replace().

Ahora se monstrarán algunas situaciones donde se puede utilizar este método y entenderlo mejor:

###  Reemplazar una sola palabra.
```js
const oracion = "¡Me encanta Javascript!"
const oracionModificada = oracion.replace("Javascript", "pragramar")

//Resultado: ¡Me encanta programar!

```
En este ejemplo, se reemplazó la palabra ¨Javascript¨ por ¨programar¨. El resultado aparece en la consola con la oración modificada.

### Reemplazar todas las palabras usando una expresión regular.
```js
const oracion = "¡Me encanta Javascript! Javascript es un excelente lenguaje de programación para desarrollo web."
const oracionModificada = oracion.replace(/Javascript/g, "JS")

//Resultado: ¡Me encanta JS! JS es un excelente lenguaje de programación para desarrollo web.
```
En este ejemplo se utiliza lo anterior mencionado que es la bandera global (`g`) con el fin de reemplazar todas las ocurrencias de la palabra ¨Javascript¨ en la variable ¨oracion¨.
Reemplazar todas las palabras usando una expresión regular que no distingue mayúsculas ni minúsculas.

```js
const oracion =  "¡Me encanta Javascript! javascript es un excelente lenguaje de programación para desarrollo web. JavaScript ofrece muchas opciones en esta área."
const oracionModificada = oracion.replace(/javascript/gi, "JS")

//Resultado: ¡Me encanta JS! JS es un excelente lenguaje de programación para desarrollo web. JS ofrece muchas opciones en esta área.
```
Ahora se utilizó (`gi`) como bandera global que no distingue entre mayúsculas y minúsculas, lo cual permite detectar mayor numero de ocurrencias de la palabra buscada en un texto.

## Conclusión

Este método de String.replace() es una poderosa y versátil herramienta en JavaScript que permite la manipulación y reemplazo de cualquier dato de tipo string. Les abre las puertas a los programadores para poder buscar y reemplazar texto especifico o patrones dentro de strings completos y mediante la práctica, esto puedo mejorar sus habilidades en la programación con el fin de ser capaces de resolver más problemas de esta índole. 
Para obtener mayor información y recursos acerca de strings en JavaScript, tenemos este [artículo] (https://4geeks.com/es/lesson/strings-en-javascript) de 4geeks para poder profundizar en este tema.


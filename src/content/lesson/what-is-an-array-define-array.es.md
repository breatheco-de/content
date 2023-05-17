---
title: "Es Hora de Aprender lo que es un Array o arreglo"
subtitle: "¿Puedes trabajar con arrays? Si no puedes, no te preocupes, aquí aprenderás qué es un array y cómo trabajar con ellos."
cover_local: "../../assets/images/4cc6fa0b-2530-4052-aa7e-8dac03788ac3.png"
textColor: "white"
date: "2020-10-19T16:36:31+00:00"
tags: ["arreglo","matriz","array"]
status: "published"
video: "https://www.loom.com/share/bb0aa485cc334afbb8ff6ef1d9c6ac5b"
---

## ¿Por qué están los Arrays en una lección separada?

¡Porque los arrays son impresionantes! ¡Los necesitas! Y debemos enfocarnos mucho en ellos para prepararte para la vida real 🙂

Dominar el uso de los `arrays` y `bucles` es una de las 5 habilidades fundamentales para construir algoritmos:

1. Variables.
2. Condicionales.
3. `Arrays (Arreglos)`.
4. `Loops (Bucles)`.
5. Funciones.

**No, no, no… Espera... ¿Array? ¿Qué?**

Un array es, normalmente, cualquier lista o colección de valores. Las reglas sobre cómo agregar o eliminar elementos de esa lista pueden cambiar de un lenguaje de programación a otro. Pero (en general) son la única forma en que los desarrolladores pueden crear elementos.
 
Los arrays son la única forma que tenemos para enumerar cosas; independientemente de la aplicación con la que estés trabajando, siempre tendrás cosas que enumerar. Por ejemplo, lista de estudiantes, lista de artistas, lista de transacciones... ¡Cualquier cosa!

Este tipo de datos hace muchas más cosas que los otros. Las listas son una de las pocas maneras de almacenar más de un tipo de dato en la misma variable.

Cada array tiene los mismos conceptos básicos:

**Los elementos:** Son los valores reales dentro de cada posición del array.

**La longitud (length):** es el tamaño o longitud del array (cuántos elementos tiene el array).

**Índice (Index):** es la posición del elemento.

![qué es un array](https://github.com/breatheco-de/content/blob/master/src/assets/images/7ed2c414-0d00-4e68-b659-b65c26d1983a.png?raw=true)

> ☝️ Las posiciones de un array comienzan en **cero (0)**; el primer elemento es el elemento en la posición **cero (0)**

## ¿Cómo declarar un array?

Hay muchas formas de declarar un arreglo o lista: 

```javascript
let myArray = []; //lista vacia
let myArray = ["Apple", "Orange", "Donkey"]; //con 3 elementos tipo string.
let myArray = new Array(1,2,3,4,5); //¡No uses esto! Lee a continuación para saber por qué.
```


> ☝️ No declares los Arrays con la sintaxis `new Array ()`, no se comportará correctamente [haz clic aquí para ver los detalles](https://coderwall.com/p/h4xm0w/why-never-use-new-array-in-javascript).

## Acceder a los elementos de un array

Para acceder a un elemento específico en una lista, necesitas el `index`. Llamamos `index` al valor entero que representa la posición del elemento que desea acceder/obtener/recuperar.

El índice siempre debe comenzar en cero (0). Esto significa que una matriz de 2 elementos puede tener `index=0` o `index=1`. Intentar obtener la segunda posición devolverá "indefinido" porque significará que estamos intentando acceder al tercer elemento (que no existe). Por ejemplo, para obtener cualquier elemento en la matriz, puedes hacer lo siguiente:

```javascript
    console.log(myArray[0]); // Esto imprimirá el 1er elemento en la consola.
let aux = myArray[5];
    console.log(aux); // Esto imprimirá el 6to elemento en la consola.
    console.log(myArray[myArray.length-1]); //Esto imprimirá el último elemento de la lista.
```

## Actualizar Elementos en el Array

Si lo deseas, puedes restablecer o actualizar cualquier elemento dentro de un array usando el índice o index así:

```javascript
myArray[5] = 'cualquier valor';
// Esto establecerá el valor 'cualquier valor' en el sexto elemento del array.
```
## Añadiendo elementos (función push)

La única forma de agregar un nuevo elemento es al final de la lista, y deberás usar la función push() para eso.

```javascript
let myArray = ['Pedro','Juan','Maria'];
    myArray.push('Chris');
    console.log(myArray); //esto imprimirá ['Pedro','Juan','Maria','Chris'];
```

Pero… ¿Y si quiero agregar a Chris en la segunda posición?

Entonces… necesitas crear un nuevo arreglo vacío y comenzar a empujar los elementos en el orden en que los necesitas. En este caso será:

```javascript
let myArray = ['Pedro','Juan','Maria'];
let myNewArray = [];
    myNewArray.push('Pedro');
    myNewArray.push('Chris');
    myNewArray.push('Juan');
    myNewArray.push('Maria');
    console.log(myNewArray); //esto imprimirá  ['Pedro','Chris','Juan','Maria'];

```

## Eliminando Elementos (función pop)

Eliminar un elemento tiene exactamente las mismas limitaciones que al agregar un elemento: solo puedes eliminar un elemento de la última posición con el método pop(). Si deseas eliminar un elemento diferente, deberás crear un nuevo array sin ese elemento en particular.

```javascript
let myArray = ['Pedro','Chris','Juan','Maria'];
    myArray.pop();
    console.log(myArray); //esto imprimirá ['Pedro','Chris','Juan']; 
//Si deseas eliminar 'Chris', necesitas hacer lo siguiente: 
let myNewArray = [];
    myNewArray.push('Pedro');
    myNewArray.push('Juan');
    myNewArray.push('Maria');
    console.log(myNewArray); // esto imprimirá ['Pedro','Juan','Maria'];
```

## Eliminando/Añadiendo desde el Principio

Los métodos shift y unshift son como push y pop con la diferencia de que solo funcionan desde el principio de la lista.

```javascript
let myArray = ['Juan','Maria'];
    myArray.unshift('Pedro');
    myArray.unshift('Chris','Bob');
    console.log(myArray); //esto imprimirá ['Chris','Bob','Pedro','Juan','Maria']; 
//Si deseas eliminar 'Chris', necesitas hacer lo siguiente: 
let myArray = ['Chris','Bob','Pedro','Juan','Maria'];
    myArray.shift();
    console.log(myArray); //esto imprimirá ['Bob','Pedro','Juan','Maria'];
```

## Iterar en un Array (Bucle)

A veces, cuando trabajes con arrays, tendrás que hacer un bucle. Por ejemplo, ordenándolos manualmente; voltearlos, eliminar un elemento de una posición particular, etc.

Para crear tu bucle, necesitarás usar `Array.length` para obtener el tamaño actual del array. La mayoría de las veces, los elementos del arreglo cambian durante el tiempo de ejecución. Esta es la razón por la que la única forma de obtener el tamaño del array será usar la función `array.length`, así:

```javascript
let myArray = [3423,5,4,47889,654,8,867543,23,48,56432,55,23,25,12];
    for (i = 0; i < myArray.length; i++) {
    console.log(myArray[i]); //esto imprimirá el valor del elemento en la posición i
}
```


> 🎥 [En el siguiente enlace](https://www.loom.com/share/bb0aa485cc334afbb8ff6ef1d9c6ac5b) puedes encontrar un video explicando las diferentes maneras de recorrer un arreglo.

## For…in… 

Hay una gran adaptación de la sentencia **for** para iterar listas o arrays, así:

```javascript
let myArray = [3423,5,4,47889,654,8,867543,23,48,56432,55,23,25,12];
    for (let index in myArray) {
    console.log(myArray[index]);
}
//Esto imprime el valor del elemento en la posición index.
```

## Eliminando de un Array 

Es posible cortar un array en pedazos muy rápido, con las funciones de `splice` y `slice`.

### Slice

Devuelve un nuevo array con una versión más pequeña del arreglo original. Debes especificar el índice de inicio y finalización del pedazo que quieres obtener.

### Splice

Actualiza el array actual, devolviendo los elementos que se desean obtener. Debes especificar el índice de inicio y el número de elementos que se desean obtener desde el indice que has indicado.

![qué es un array](https://github.com/breatheco-de/content/blob/master/src/assets/images/7e098348-df50-442b-801e-ac9d098fbc09.png?raw=true)

<iframe src="https://repl.it/F9V5/0?lite=true" frameborder="0" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals" width="100%" height="400px" scrolling="no" allowtransparency="true" allowfullscreen="true"></iframe>

<div align="right"><small><a href="https://repl.it/@4GeeksAcademy/Slice-vs-Splice">Haz clic para abrir demo en una ventana nueva</a></small></div>

> ☝️ Splice puede aceptar tantos parámetros opcionales como se quiera y estos sustituirán la parte del array que ha sido eliminada. De esta forma el primer parámetro indica el índice desde el cual empieza a borrar, el segundo parámetro cuantos elementos borrarás y del tercero en adelante los elementos que se insertan a partir de la posición que se indica en el primer parámetro.

Ejemplo:
```javascript
let y = [14, 3, 3245, 234, 52, 345, 3, 45, 23, 77];
y.splice(2,4,'a');  //devuelve [3245, 234, 52, 345] 
console.log(y); // [14, 3, 'a', 3, 45, 23, 77]
```
Podemos usar esta función para insertar elementos:
```javascript
let y = [14, 3, 3245, 234, 52, 345, 3, 45, 23, 77];
y.splice(2,0,'a');  //devuelve [] 
console.log(y); // [14, 3, 'a', 3245, 234, 52, 345, 3, 45, 23, 77]
```

[Consulta la documentación](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice).

## Ordenando Arrays

Es muy común la necesidad de ordenar arrays. Por ejemplo: ordenar una lista de estudiantes por nombre. Tienes dos funciones para ordenar en JavaScript:

### Sort y Reverse

Hacen lo mismo, excepto que Reverse lo hace al revés. Ambos ordenan usando la lógica de comparación de string, lo que significa que el string "25" es más grande que "100", porque "2" es más grande que "1".

```javascript
let frutas = ['Banana', 'Orange', 'Apple', 'Mango'];
    frutas.sort();
    console.log(frutas); // ['Apple', 'Banana', 'Mango', 'Orange']
    frutas.reverse();
    console.log(frutas); // ['Orange', 'Mango', 'Banana', 'Apple']
```

### Ordenando números

Si quieres ordenar números reales, o si deseas ordenar arrays de manera diferente, debes usar una "función de comparación".

Tienes que definir una función que se encargue de las comparaciones. La función sort llamará a tu función en cada comparación y permitirá que tu función decida quién es el primero entre los dos elementos que se comparan.

```javascript
let puntos = [40, 100, 1, 5, 25, 10];
    puntos.sort(function(a, b){return a – b});
    console.log(puntos); //[ 1, 5, 10, 25, 40, 100 ]
```

### Ordenando Objetos

Ahora que conocemos la función de comparación, podemos usarla para indicar a la función sort cómo ordenar nuestros propios objetos especiales, como aquí por ejemplo:

```javascript
let autos = [
    {tipo:'Volvo', año:2016},
    {tipo:'Saab', año:2001},
    {tipo:'BMW', año:2010}];
    autos.sort(function(a, b){return a.año – b.año});
    console.log(autos); //[ { tipo: 'Saab', año: 2001 },{ tipo: 'BMW', año: 2010 },{ tipo: 'Volvo', año: 2016 } ]
```

<iframe src="https://repl.it/F9YZ/1?lite=true" frameborder="0" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals" width="100%" height="400px" scrolling="no" allowtransparency="true" allowfullscreen="true"></iframe>

<div align="right"><small><a href="https://repl.it/@4GeeksAcademy/Sorting-Arrays">Clic para abrir demo en una ventana nueva</a></small></div>

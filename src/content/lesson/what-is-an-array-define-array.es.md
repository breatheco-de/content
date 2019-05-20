---
title: "Es Hora de Aprender lo que es un Arreglo o Matriz"

subtitle: "¿Se puede trabajar con arreglos? Si no puedes, no te preocupes aquí, aprenderás qué es una matriz y cómo trabajar con ellas."

cover: "https://ucarecdn.com/4cc6fa0b-2530-4052-aa7e-8dac03788ac3/"
textColor: "white"
date: "2018-02-11"
tags: ["array"]
---

## **¿Por qué están los arreglos en una lección separada?**
***

¡Porque los arreglos son impresionantes! ¡Los necesitas! Y debemos enfocarnos mucho en ellos para prepararte para la vida real 🙂

**No no no…Espera:  Arreglos?  Que?**

Un arreglo es, normalmente, cualquier lista o colección de valores. Las reglas de cómo agregar o eliminar elementos de esa lista pueden cambiar de un lenguaje de programación a otro. Pero - en general - son las únicas formas en que los desarrolladores pueden crear elementos.
Los arreglos son la única forma en que tenemos que enumerar las cosas - independientemente de la aplicación con la que esté trabajando, siempre tendrás cosas que enumerar. Por ejemplo: lista de estudiantes, lista de artistas, lista de transacciones ... ¡cualquier cosa!

Este tipo de datos hace muchas más cosas que los otros. Las listas son la única forma de almacenar más de un tipo de datos en la misma variable.

Cada arreglo tiene los mismos conceptos básicos:

**The items:** Son los valores reales dentro de cada posición del arreglo.

**The length:** es el tamaño del arreglo (cuántos elementos tiene el arreglo).

**Index:** es la posición del elemento.

![what is an array define array](https://ucarecdn.com/7ed2c414-0d00-4e68-b659-b65c26d1983a/-/resize/1000x/)


[[info]]
| :point_up: Las posiciones del arreglo comienzan con **cero (0)**; el primer elemento es el elemento en la posición **cero (0)**

## **¿Como Declarar un Arreglo?**
***

These are different examples of list declarations:

```javascript
var myArray = []; //lista vacia
var myArray = ["Apple", "Orange", "Donkey"]; //con 3 elementos de cadena por defecto.
var myArray = new Array(1,2,3,4,5); //¡No uses esto! Lea a continuación para saber por qué.
```


[[warning]]
| :point_up: No declares los Arrays con la sintaxis `new Array ()` - no se comportará. [haga clic aquí para conocer los detalles](https://coderwall.com/p/h4xm0w/why-never-use-new-array-in-javascript)

## **Acceder a los Elementos en el Arreglo**
***

Para acceder a un elemento específico en una lista, necesita un índice. Un índice es un valor entero que representa la posición del arreglo a la que desea acceder.

El índice siempre debe comenzar en cero (0). Eso significa que un arreglo de 2 elementos puede tener un índice = 0 o un índice = 1. Tratar de obtener la segunda posición devolverá "indefinido" porque significará que estamos tratando de acceder al tercer elemento (que no existe). Por ejemplo, para obtener cualquier elemento del arreglo, puede hacer lo siguiente:

```javascript
    console.log(myArray[0]);  //Esto imprimirá el 1er elemento en la consola.
var aux = myArray[5];
    console.log(aux); //Esto imprimirá el 4to elemento en la consola.
    console.log(myArray[myArray.length-1]);  //Esto imprimirá el último elemento del arreglo.
```

## **Actualizar Elementos en el Arreglo**
***

Si lo deseas, puedes restablecer o actualizar cualquier elemento dentro de un arreglo usando el índice como este:

```javascript
myArray[5] = 'Whatever value';
//Esto establecerá el valor 'Cualquier valor' en el sexto elemento del arreglo.
```

## **Añadiendo elementos (función push)**
***

La única forma de agregar un nuevo elemento es al final de la lista, y necesitará usar la función push () para eso.

```javascript
var myArray = ['Pedro','Juan','Maria'];
    myArray.push('Chris');
    console.log(myArray); //esto imprimirá ['Pedro','Juan','Maria','Chris'];
```

Pero… ¿y si quiero agregar a Chris en la segunda posición?

Entonces… necesitas crear un nuevo arreglo vacío y comenzar a empujar los elementos en el orden en que los necesita. En este caso será:

```javascript
var myArray = ['Pedro','Juan','Maria'];
var myNewArray = [];
    myNewArray.push('Pedro');
    myNewArray.push('Chris');
    myNewArray.push('Juan');
    myNewArray.push('Maria');
    console.log(myNewArray); //esto imprimirá  ['Pedro','Chris','Juan','Maria'];

```

## **Eliminando Elementos (función pop)**
***

Eliminar un elemento tiene exactamente las mismas limitaciones que al agregar un elemento: solo puede eliminar un elemento de la última posición con la función pull (). Si desea eliminar un elemento diferente, deberá crear una nueva matriz sin ese elemento en particular.

```javascript
var myArray = ['Pedro','Chris','Juan','Maria'];
    myArray.pop();
    console.log(myArray); //esto imprimirá ['Pedro','Chris','Juan']; 
//Si deseas eliminar 'Chris', necesitas hacer lo siguiente: 
var myNewArray = [];
    myNewArray.push('Pedro');
    myNewArray.push('Juan');
    myNewArray.push('Maria');
    console.log(myNewArray); //esto imprimirá ['Pedro','Juan','Maria'];
```

## **Removing/Adding from the Beginning**
***

Los métodos shift y unshift son como push y pop, pero con la diferencia de que solo funcionarán desde el principio de la lista.

```javascript
var myArray = ['Juan','Maria'];
    myArray.unshift('Pedro');
    myArray.unshift('Chris','Bob');
    console.log(myArray); //esto imprimirá ['Chris','Bob','Pedro','Juan','Maria']; 
//Si deseas eliminar 'Chris', necesitas hacer lo siguiente: 
var myArray = ['Chris','Bob','Pedro','Juan','Maria'];
    myArray.shift();
    console.log(myArray); //esto imprimirá ['Bob','Pedro','Juan','Maria'];
```

## **Bucle en Arreglo**
***

A veces, cuando trabajes con arreglos, tendrás que hacer un bucle. Por ejemplo: ordenándolos manualmente; voltearlos, eliminar un elemento de una posición particular, etc.

Para crear tu bucle, necesitarás usar Array.length para obtener el tamaño actual del arreglo. La mayoría de las veces, los elementos del arreglo cambian durante el tiempo de ejecución. Esta es la razón por la que la única forma de obtener el tamaño del arreglo será usar la función array.length, como esta:

```javascript
var myArray = [3423,5,4,47889,654,8,867543,23,48,56432,55,23,25,12];
    for (i = 0; i < myArray.length; i++) {
    console.log(myArray[i]); //this prints the value of the item in the position i 
}
```

## For…in… 
***

Hay una gran adaptación de **sentencia for** para hacer que se formen listas de bucles o arreglos, como este:

```javascript
var myArray = [3423,5,4,47889,654,8,867543,23,48,56432,55,23,25,12];
    for (var index in myArray) {
    console.log(myArray[index]);
}
//Esto imprime el valor del artículo en el índice de posición.
```

## **Eliminación de un Arreglo**
***

Las variables pueden tener diferentes tipos de valores. Algunos de ellos están disponibles solo en lenguajes de programación específicos, pero casi todos tienen los siguientes tipos:

### Splice and Slice
***

Es posible cortar un arreglo en pedazos muy rápido, con las funciones de splice y slice.

#### Slice

Devolverá un nuevo arreglo con una versión más pequeña del arreglo original. Debes especificar el índice de inicio y finalización desde donde desea cortar el arreglo.

#### Splice


Actualizará el arreglo actual dejando todo menos la versión más pequeña que desea eliminar. Deberás especificar los índices de inicio y finalización desde donde deseas eliminarlos.

![what is an array define array](https://ucarecdn.com/7e098348-df50-442b-801e-ac9d098fbc09/-/resize/700x/)

<iframe src="https://repl.it/F9V5/0?lite=true" frameborder="0" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals" width="100%" height="400px" scrolling="no" allowtransparency="true" allowfullscreen="true"></iframe>

<div align="right"><small><a href="https://repl.it/@4GeeksAcademy/Slice-vs-Splice">Click para abrir el demo en una ventana nueva</a></small></div>

## **Clasificando los Arreglos**
***

Es muy común la necesidad de ordenar arreglos. Por ejemplo: ordenar una lista de estudiantes por nombre. Tienes dos funciones para ordenar en JavaScript:

Sort y Reverse

Ellos hacen lo mismo, excepto que Reverse lo hace al revés. Ambos clasifican usando la lógica de comparación de cadenas, lo que significa que la cadena "25" es más grande que "100", porque "2" es más grande que "1".

```javascript
var fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.sort();
    console.log(fruits); //[ 'Apple', 'Banana', 'Mango', 'Orange' ] 
    fruits.reverse();
    console.log(fruits); //[ 'Orange', 'Mango', 'Banana', 'Apple' ]
```

### Clasificando Números

Si deseas ordenar números reales, o si deseas usar cualquier otro tipo de inicio de sesión para ordenar arreglos, debes usar una "función de comparación".

Tienes que definir una función que se encargue de las comparaciones. La función sort llamará a tu función en cada comparación y permitirá que tu función decida quién es el primero entre los dos elementos que se comparan.

```javascript
var points = [40, 100, 1, 5, 25, 10];
    points.sort(function(a, b){return a – b});
    console.log(points); //[ 1, 5, 10, 25, 40, 100 ]
```

### Clasificando Objetos

Ahora que conocemos la función de comparación, podemos usarla para indicar a la función sort cómo ordenar nuestros propios objetos especiales, como aquí, por ejemplo:

```javascript
var cars = [
    {type:"Volvo", year:2016},
    {type:"Saab", year:2001},
    {type:"BMW", year:2010}];
    cars.sort(function(a, b){return a.year – b.year});
    console.log(cars); //[ { type: 'Saab', year: 2001 },{ type: 'BMW', year: 2010 },{ type: 'Volvo', year: 2016 } ]
```

<iframe src="https://repl.it/F9YZ/1?lite=true" frameborder="0" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals" width="100%" height="400px" scrolling="no" allowtransparency="true" allowfullscreen="true"></iframe>

<div align="right"><small><a href="https://repl.it/@4GeeksAcademy/Sorting-Arrays">Click para abrir el demo en una ventana nueva</a></small></div>











<!--stackedit_data:
eyJoaXN0b3J5IjpbMTY2MjAwMTk3MSwtNDQyNDQ4NTM3LDE2Nj
IwMDE5NzFdfQ==
-->
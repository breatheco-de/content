---
title: "¿Cómo usar el método reduce en Javascript?"
subtitle: "Aprende a simplificar operaciones de datos complejas con el método reduce en JavaScript. Descubre ejemplos prácticos y mejora tus habilidades de programación."
tags: ["javascript","arrays"]
authors: ["diegorojas"]

---

El método `reduce()` en [JavaScript](https://4geeks.com/es/lesson/que-es-javascript-aprende-a-programar-en-javascript) te permite reducir los elementos de un array y retornar un valor único. A continuación veremos un ejemplo bastante común haciendo uso de este método para conseguir el valor total de la suma de un array de números.

```js runnable=true
const numeros = [1, 2, 3, 4, 5];
const sumaTotal = numeros.reduce((total, numero) => {
     return total + numero;
}, 0);

console.log("Suma total: ", sumaTotal);
```
>  ( output ) del código
```js
Suma total: 15
```

En este ejemplo el método `reduce()` de javascript suma todos los números del array **números** y luego guarda ese resultado en la constante **sumaTotal** para después mostrar el resultado en la consola.

## ¿Cómo funciona el método reduce en Javascript?   

El [método reduce](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) es un método de [arrays en JavaScript](https://4geeks.com/es/lesson/array-arreglo-en-javascript) que te permite reducir un array a un solo valor, este array puede contener cualquier tipo de dato un número, un cadena de texto, un objeto o incluso un nuevo array. Este método es muy útil para sumar los números de un array, conseguir el valor promedio de la suma de los números de un array y muchas cosas más! Básicamente lo puedes usar para reducir o incluso para filtrar los elementos de un array.

## Sintaxis del método reduce de Javascript

El método `reduce()` de Javascript recibe dos parámetros:

```js
Array.reduce(funcionReductora, valorInicial);
```

 - `funcionReductora`:  es la función reductora del array y recibe cuatro parámetros:
   -  `acumulador`: es la variable que guarda el valor único que se reduce.
   - `elemento`: es el elemento del array en cada iteración.
   - `indice`:  es el índice de los elemento del array ( opcional ).
   - `array`: es el array que deseas reducir ( opcional ).

 - `valorInicial `: es el valor inicial que toma la función reductora, este valor puede ser de cualquier tipo de dato un número, una cadena de texto, un objeto o un nuevo array.  

> Aunque este segundo parámetro es opcional es una buena práctica colocarlo siempre ya que de no colocarlo la función reductora del método toma como valor inicial el primer valor del array que recorremos y si le pasas un array vacío te arroja un error.

En el siguiente ejemplo verás un poco mejor cómo funcionan estos parámetros.

```js runnable=true
const numeros= [1, 2, 3, 4, 5];

numeros.reduce((acumulador, elemento, indice, array) => {
    console.log(`${acumulador}: este es el valor del acumulador en cada iteración`);
    console.log(`${elemento}: este es el valor del elemento`);
    console.log(`${indice}: este es el índice del elemento en el array`);
    console.log(`${array}: este es el array que estamos recorriendo`);

    return acumulador + elemento;
}, 0);
```

En este ejemplo, la función reductora del método `reduce()` recibe los cuatro parámetros y simplemente muestra en la consola una cadena de texto que indica el valor de cada uno de los parámetros. Es importarte resaltar que de todos los parámetros que recibe la función reductora solo los parámetros **acumulador** y **elemento** se utilizan siempre, los parámetros **indice** y **array** son opcionales y solo se utilizan en ocasiones específicas.

## Ejemplos de uso del método reduce en Javascript

El método `reduce()` de Javascript tiene diversos casos de uso, desde obtener la suma total de los números de un array, obtener el valor promedio de la suma de los números de un array, filtrar los valores de un array entre muchas cosas más, veremos algunos ejemplos a continuación.

### 1. Obtener el valor promedio de un array

Como mencionamos anteriormente el método `reduce()` de javascript te permite obtener el valor promedio de un array de elementos.

```js 
const ciudades = [
  { id: 1, nombre: "New york", temperatura: 25 },
  { id: 2, nombre: "Los Ángeles", temperatura: 30 },
  { id: 3, nombre: "Chicago", temperatura: 15 },
  { id: 4, nombre: "Queens", temperatura: 27 }
];

const sumaDeLasTemperaturas = ciudades.reduce((acumulador, ciudad, indice) => {
  console.log(`La temperatura de la ciudad de ${ciudad.nombre} es de ${ciudad.temperatura} grados`);

  const temperaturaCiudad = ciudad.temperatura;
  return acumulador + temperaturaCiudad;
}, 0);

const temperaturaPromedio = sumaDeLasTemperaturas / ciudades.length;

console.log(`La temperatura promedio de los Estados Unidos es de ${temperaturaPromedio} grados`);
```
> ( output ) del código
```js
La temperatura de la ciudad de New york es de 25 grados
La temperatura de la ciudad de Los Ángeles es de 30 grados      
La temperatura de la ciudad de Chicago es de 15 grados
La temperatura de la ciudad de Queens es de 27 grados

La temperatura promedio de los Estados Unidos es de 24.25 grados
```

Supongamos que queremos buscar la temperatura promedio del país de los **Estados Unidos**, en este caso el método  `reduce()` nos permite sumar todos los valores de las temperaturas de cada una de la ciudades y guarda el total en la constante **sumaDeLasTemperaturas**.

Luego guardamos el valor de esta constante dividido por la cantidad de ciudades presentes en el array **ciudades**, este valor se guarda en la constante **temperaturaPromedio** que tendrá como valor la temperatura promedio de este país.


### 2. Contar cuantas veces aparece un elemento en un array

Otro de los usos del método  `reduce()` de Javascript es para contar cuantas veces aparece un elemento en un array.

```js
const  frutas  = ["manzana", "banano", "limón", "manzana", "limón", "coco", "banano", "limón"];

const contador = frutas.reduce((acumulador, fruta) => {
    if (!acumulador.hasOwnProperty(fruta)) {
        acumulador[fruta] = 1;
    } else {
        acumulador[fruta]++;
    }
    return acumulador;
}, {});

console.log(contador);
```
> ( output) del código
```js
{ 
  manzana: 2, 
  banano: 2,  
  limón: 3, 
  coco: 1 
}
```

En este ejemplo usamos el método `reduce()` para contar cuántas veces aparecen cada uno de los elementos del array, primero le pasamos la función reductora y luego como segundo parámetro le pasamos un objeto vacío como valor inicial `{}`, creamos una estructura condicional **if** en la función reductora y verificamos si el objeto **acumulador** no contiene la propiedad actual en la iteración `!acumulador.hasOwnProperty(fruta)` de ser así creamos esa propiedad en el objeto y le asignamos el valor de 1 `acumulador[fruta] = 1`, de lo contrario si el objeto ya contiene esa propiedad incrementamos el valor en esa propiedad `acumulador[fruta]++`, de esta forma contamos cuántas veces aparecen cada uno de los elementos en el array **frutas**.

### 3. Obtener el valor máximo de un array

Otro uso que le podemos dar al método `reduce()` de Javascript en para obtener el número más grande de un array.

```js runnable=true
const numeros = [0, 2, 4, 500, 5, -2, -6, -1000, 2000];

const numeroMaximo = numeros.reduce((numMax, numero) => {
    if (numero > numMax) {
        numMax = numero;
    }

    return numMax;
}, Number.NEGATIVE_INFINITY);

console.log("El número más grande del array es", numeroMaximo);
```
> ( output ) del código
```js
El número más grande del array es 2000
```

En este ejemplo hacemos uso del método `reduce()` de Javascript para encontrar el número más grande de un array, en la función reductora del array creamos una estructura condicional **if** para verificar si el valor actual en la iteración es más grande que el valor inicial **numMax** el cual tiene un valor de `Number.NEGATIVE_INFINITY` que es el número negativo más grande con el que puede trabajar Javascript, si el valor actual es más grande que la variable **numMax** entonces a esta variable le asignamos el valor actual, de esta forma la variable **numMax** tendrá como valor el número más grande del array el cual retorna en la última iteración y se guarda en la constante **numeroMaximo**.

## Conclusión

En conclusión el método `reduce()` de Javascript te permite reducir o filtrar un array de elementos y te devuelve un único valor, este método es muy útil y tiene muchas aplicación en la programación con Javascript, además de ser uno de los métodos más importantes de este lenguaje. Si quieres conocer más información sobre este método te recomiendo que visites la [página oficial de Mozilla Javascript sobre el metodo reduce](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce).

Si estas interesado en conocer más información sobre el lenguaje de programación Javascript te invito a que visites el siguiente articulo sobre [aprender a programar en JavaScript](https://4geeks.com/es/lesson/que-es-javascript-aprende-a-programar-en-javascript) de 4Geeks Academy en el cual encontrarás una gran cantidad de información sobre este lenguaje con ejemplos de código, videotutoriales y muchas cosas más que te ayudarán a mejorar tus habilidades en Javascript.



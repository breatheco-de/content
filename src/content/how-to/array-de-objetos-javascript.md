---
title: "¿Qué es y Cómo hacer un Array de objetos en Javascript?"
subtitle: "Aprende cómo trabajar con Array de Objetos en Javascript con 4Geeks. Domina las técnicas para manipular datos complejos y mejorar tus habilidades."
tags: ["javascript"]
authors: ["diegorojas"]

---

## Que es un array de objetos

En JavaScript, un array es una estructura de datos que se utiliza para almacenar una colección de elementos del mismo tipo. Los elementos dentro de un array se organizan en una secuencia ordenada y se acceden mediante un índice numérico.Los [arrays en JavaScript](https://4geeks.com/es/lesson/array-arreglo-en-javascript) pueden contener cualquier tipo de dato, incluso otros arrays. 

Un array de objetos en JavaScript es una estructura de datos muy útil que te permite almacenar varios objetos en una sola variable, cada uno con sus propios métodos. Esto convierte a esta estructura de almacenamiento en una herramienta muy útil y ampliamente utilizada a la hora de trabajar con datos complejos.

Por ejemplo: si deseas crear una aplicación que te permita enviar y recibir mensajes, puedes crear un array de objetos para almacenar los mensajes junto con sus propiedades en el mismo.

En este ejemplo se muestra como se crearía esta estructura:

```js
var usersConversation = [
  {
    id: 1,
    user_name: "Paul",
    send: "02/03/2023",
    send_by: "alex@email.com",
    received: "03/03/2023",
    viewed: true,
    message: "Hola Paul, ¿Cómo estás?",
  },
  {
    id: 2,
    user_name: "Alex",
    send: "03/03/2023",
    send_by: "paul@email.com",
    received: "04/03/2023",
    viewed: false,
    message: "Hola Alex, muy bien gracias y tú",
  },
];
```

En el ejemplo anterior podemos ver como se debería crear un array de objetos donde cada objeto representa un mensaje, en el array se ve la conversación entre dos personas **Paul** y **Alex**, cada objeto contiene información relevante sobre el mensaje como **id**, para identificar cada mensaje, **user_name** es el usuario que recibe el mensaje, **send**, indica el día en que se envió el mensaje, **send_by** es el usuario que envió el mensaje, **received** indica la fecha en la que se recibió el mensaje, **viewed** indica si ya se leyó el mensaje y por último la propiedad **message** que es el mensaje en sí.

Como vemos en el ejemplo un array de objetos puede ser un estructura de almacenaje muy útil a la hora de guardar información y trabajar con una amplia cantidad de datos.

## Crear un array de objetos

Para crear un array de objetos en javascript primero necesitas saber como crear un array.

#### Crear un array

Para crear un array existen dos formas de hacerlo.

Ejemplo:

```js
var arrayOne = [1, 2, 3, 4, 5];
var arrayTwo = new Array(1, 2, 3, 4, 5);

console.log(arrayOne); // --> [1, 2, 3, 4, 5]
console.log(arrayTwo); // --> [1, 2, 3, 4, 5]
```

En este ejemplo vemos como para crear un [array en javascript](https://4geeks.com/es/lesson/array-arreglo-en-javascript) existen dos formas, la primera es crear una variable y asignarle como valor un par de corchetes `[]`esto creará un array por defecto, la segunda forma es crear una variable y asignarle como valor la palabra reservada de javascript **`new Array()`** esto también creará un array.

Es importante resaltar que ya no se suele utilizar la palabra reservada **`new Array()`** para crear un array es más común hacerlo usando los corchetes `[]` ya que es más sencillo, fácil de entender y funcionan igual.

#### Crear un objéto

Para crear un objeto también existen dos formas de hacer.

Ejemplo:

<div style=" background: #ccc2; border-radius: .5rem;">

```js
const objectOne = { name: "Paul", age: 23 };
const objectTwo = new Object();
objectTwo.name = "Alex";
objectTwo.age = 40;

console.log(objectOne); // --> { name: "Paul", age: 23: }
console.log(objectTwo); // --> { name: "Alex": age: 40 }
```

</div>

En este ejemplo vemos las dos formas en las que puedes crear un objeto en javascript, la primera es crear una variable y asignarle como valor un par de llaves **{}** esto creará un objeto por defecto, la segunda forma es crear un variable y asignarle como valor la palabra reservada de [javascript](https://4geeks.com/es/lesson/que-es-javascript-aprende-a-programar-en-javascript) **`new Object()`** esto también creará un objeto.

Es importante señalar que la palabra reservada **`new Object()`** ya no se suele utilizar para crear un objeto ya que como vimos en el ejemplo anterior es más sencillo, y fácil de entender hacerlo utilizando la sintaxis de llaves.


#### Crear array de objétos

Ahora que ya sabes como crear un array y un objeto pasemos a ver como crear un array de objetos en javascript.

<div style=" background: #ccc2; border-radius: .5rem;">

```js
const newChat = [
  {
    id: 105,
    user_name: "Paul",
    send: "07/03/2023",
    send_by: "alex@email.com",
    received: "07/03/2023",
    viewed: true,
    message: "Hola Paul, ¿puedes decirme a que hora es la reunion de hoy?",
    group_name: "work",
    group_users: ["alex@email.com", "paul@email.com"],
  },
  {
    id: 175,
    user_name: "Alex",
    send: "07/03/2023",
    send_by: "paul@email.com",
    received: "07/03/2023",
    viewed: true,
    message: "Hola Alex, claro! la reunion es a la 7:00am.",
    group_name: "work",
    group_users: ["alex@email.com", "paul@email.com"],
  },
  {
    id: 133,
    user_name: "Paul",
    send: "07/03/2023",
    send_by: "alex@email.com",
    received: "07/03/2023",
    viewed: true,
    message: "Okey perfeco, gracias.",
    group_name: "work",
    group_users: ["alex@email.com", "paul@email.com"],
  },
];
```

</div>

En este ejemplo vemos cómo se creá un **array** que representa un chat con **objetos** dentro donde cada uno representa un mensaje. Dentro de los corchetes `{}` se colocar la **propiedad** que sería el equivalente a una **variable** y a la **propiedad** se le asigna un valor como vemos en el ejemplo anterior. Este valor puede ser cualquier cosa ya sea un **string**, **number**, **boolean**, un **método** que sería el equivalente a una **función** o incluso un nuevo **array de objetos**.

Si te interesa conocer más información sobre arrays u objetos, abajo podrás ver los links a la documentación oficial de javascript.

- [javascript arrays](https://www.google.com/url?q=https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [javascript objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)

## Ordenar array de objetos

Existen diferentes formas para ordenar un array de objetos en javascripts.

#### Método sort

<div style=" background: #ccc2; border-radius: .5rem;">

```js
const arrayExample = [
  { id: 2, name: "example one" },
  { id: 1, name: "example two" },
  { id: 4, name: "example three" },
  { id: 3, name: "example three" },
];

const arrayOrdered = arrayExample.sort((a, b) => a.id - b.id);
```

</div>

En este ejemplo vemos una de las formas más utilizadas para ordenar un array de objetos que es haciendo uso del método `sort()` de javascript. Si queremos ordenar un array de **números** o de **strings** el método `sort()` no necesita parámetros ya que este los ordena por defecto de forma ascendente en el caso de los **números** y de forma alfabética ascendente de la `A` a la `Z` en el caso de los **strings**. Por otro lado, para ordenar un **array de objetos** si es necesário pasarle argumentos. Este método recibe una función de comparación como parámetro para indicar cómo se debe hacer la comparación. Esta función recibe dos parámetros usualmente llamados **`a y b`** que representan los elementos que serán comparados. La función debe devolver un valor **negativo** si **`a`** deve ir antes que **`b`**, un valor **positivo** si **`b`** deve ir antes que **`a`**, o **cero** si los dos elementos son iguales.

Si quieres conocer más información sobre el [método **`sort()`** de javascript]((https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) en este link encontrarás la documentación oficial.


#### Algoritmo Bubble sort

Otra forma de ordenar un array de objetos es haciendo uso del algoritmo de ordenamiento conocido como **Bubble Sort**.

Ejemplo:

<div style=" background: #ccc2; border-radius: .5rem;">

```javascript
const arrayExample = [
  { id: 2, name: "example two" },
  { id: 1, name: "example one" },
  { id: 4, name: "example four" },
  { id: 3, name: "example three" },
];

function sortArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      console.log("i", i);
      console.log("j", j);
      if (arr[j].id > arr[j + 1].id) {
        const aux = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = aux;
      }
    }
  }
  return arr;
}

const arrayOrdered = sortArray(arrayExample);
```

</div>

En este ejemplo creamos una función y le pasamos el array que queremos ordenar, en la función iteramos el array dos veces usan un `for loop` que usualmente se utiliza para recorrer arrays, esta es la sintaxis más común para crear un bubble sort pero hay varias formas de hacerlo, esta función retorna el array ordenado que se guarda en la constante `arrayOrdered`.

El algoritmo **Bubble sort** compara cada par de elementos adyacentes y los intercambia si están en el orden incorrecto. Este proceso se repite varias veces hasta que se recorre todo el array y no se hacen intercambios en la última iteración.

#### Algoritmo Quick Sort

Otro algoritmo que puedes usar para ordenar un array de objetos en javascript es el algoritmo **Quick Sort**

Ejemplo:

<div style=" background: #ccc2; border-radius: .5rem;">

```javascript
const arrayExample = [
  { id: 2, name: "example two" },
  { id: 1, name: "example one" },
  { id: 4, name: "example four" },
  { id: 3, name: "example three" },
];

const quickSort = (array) => {
  if (array.length <= 1) return array;

  const left = [];
  const right = [];

  const firstValue = array.shift();

  array.forEach((element) => {
    if (element.id < firstValue.id) {
      left.push(element);
    } else if (element.id >= firstValue.id) {
      right.push(element);
    }
  });

  return [...quickSort(left), firstValue, ...quickSort(right)];
};

const arrayOrded = quickSort(arrayExample);
```

</div>

Este algoritmo ordena los array de una forma muy interesante, Para ordenar un array lo que hace el **Quick sort** es hacer uso de la técnica divide y conquista. Primero selecciona un valor del array, luego divide el array en dos sub-arrays: uno con los elementos mayores que el valor seleccionado y otro con los elementos menores que este. Luego, aplica recursivamente el mismo proceso a cada sub-array hasta que todos los elementos estén ordenados.

El algoritmo the **Quick sort** es un algoritmo que te permite ordenar un array de una forma más eficiente que el **Bubble sort** en algunos casos. ya que el algoritmo **Bubble sort** tiene un complejidad de tiempo de **`O(n^2)`** lo que significa que el tiempo de ejecución aumenta proporcionalmente al cuadrado del tamaño del array. Por otro lado, el algoritmo **Quick sort** tiene una complejidad de tiempo de **`O(n log n)`**, lo que significa que el tiempo de ejecución aumenta proporcionalmente al del tamaño del array. Sin embargo hay casos en los que el **Bubble sort** puede ser más eficiente, especialmente en arrays pequeños.

Es importante señalar que el método **`sort()`** de javascript hace uso del algoritmo **Quick sort** o **Merge sort** dependiendo del navegador para ordenar los array.

## Recorrer Array de objetos Javascript

Para recorrer un array de objetos tenemos varias formas de hacerlo

#### Método forEach

El método **`forEach()`** es una de las formas más utilizadas a la hora de recorrer un array en javascript.

<div style=" background: #ccc2; border-radius: .5rem;">

```js
const array = [
  { id: 1, name: "exp one" },
  { id: 2, name: "exp two" },
  { id: 3, name: "exp three" },
  { id: 4, name: "exp four" },
];

array.forEach((item, index) => {
  console.log(item); // { id: 1, name: "exp one" } en la primera iteración
  console.log(index); // 0, 1, 2, 3
});
```

</div>

En el ejemplo anterior vemos como el método **`forEach()`** te permite recorrer un array. este método recibe una función como parámetro, esta función recibe dos parámetros generalmente llamados **ítem** y **index**, el parámetro **ítem** representa el objeto del array en cada iteración, el parámetro **index** es un variable que aumenta de valor en cada iteración lo cual puede ser muy útil en algunos casos, por ejemplo: si quisiera modificar cada uno de los objetos en el array podrías hacerlo de la siguiente manera.

<div style=" background: #ccc2; border-radius: .5rem;" >

```js
const array = [
  { id: 1, name: "exp one" },
  { id: 2, name: "exp two" },
  { id: 3, name: "exp three" },
  { id: 4, name: "exp four" },
];

array.forEach((item, index) => {
  array[index].name = array[index].name + " " + "modified";
});
```

</div>

En este ejemplo la constante **array** quedaría de la siguiente manera.

<div style=" background: #ccc2; border-radius: .5rem;" >

```js
const array = [
  { id: 1, name: "exp one modified" },
  { id: 2, name: "exp two modified" },
  { id: 3, name: "exp three modified" },
  { id: 4, name: "exp four modified" },
];
```

</div>

Con este ejemplo hacemos uso de método **`forEach()`** y le pasamos una función con dos parámetros, el objeto **"ítem"** y la variable autoincremental **"index"**. Para modificar el array accedemos al array en la posición **index**, en la primera iteración **index** sería **0** luego **1**, **2** etc..., y luego para modificarlo accedemos al **objeto** en la propiedad **name**, recordemos que para acceder a la propiedad de un objeto en javascript hay dos formas de hacerlo una de ellas es **dot notation** **`objeto.name`**, y la otra es **bracket notation** **`objeto["name"]`**. de esta forma **`array[index].name`** en la primera iteración sería **"exp one"**.

####  For loop

Otra forma de recorrer un array es haciendo uso de un **for loop**.

<div style=" background: #ccc2;border-radius: .5rem;">

```js
const array = [
  { id: 2, name: "exp one" },
  { id: 1, name: "exp two" },
  { id: 4, name: "exp three" },
  { id: 3, name: "exp three" },
];

for (let i = 0; i < array.length; i++) {
  // Aquí va tu código

  console.log(array[i]); // { id: 2, name: "exp one" } en la primera iteración
  console.log(i); // 0, 1, 2, 3
}
```

</div>

El **for loop** necesita varios parámetros, el primero es la variable de control autoincremental usualmente llamada **i**, luego necesita una condición de salida en este caso que **i** sea menor que el **lago del array**, y luego recibe el parámetro que aumenta de valor a la variable de control **i**, generalmente **`i++`** que es lo mismo que **`i = i + 1`**, luego dentro de la llaves `{}` puedes escribir el código que deseas realizar en cada iteración como se muestra en el ejemplo anterior.

Si deseas conocer más información sobre el método **forEach** o el **for loop** abajo encontrarás los links a la documentación oficial de javascript.

- [método forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
- [for loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)

## Ordenar Alfabéticamente un Array de Objetos

Para ordenar un array de objetos alfabéticamente podemos hacerlo de varias formas:

#### Ordenar alfabéticamente con el método sort

Una de las formas más óptimas para ordenar un array de objetos alfabéticamente en javascript es haciendo uso del método **`sort()`**.

<div style=" background: #ccc2;border-radius: .5rem;">

```javascript
const arrayFruits = [
  { id: 1, name: "manzana", sabor: "dulce" },
  { id: 3, name: "naranja", sabor: "ácido o cítrico" },
  { id: 4, name: "pera", sabor: "dulce" },
  { id: 2, name: "limón", sabor: "ácido o cítrico" },
  { id: 5, name: "coco", sabor: "ligeramente dulce" },
];

const arrayFruitsOrdered = arrayFruits.sort((a, b) => {
  if (a.name < b.name) {
    return -1;
  } else if (a.name > b.name) {
    return 1;
  } else {
    return 0;
  }
});
```

</div>

Este código retornaría el array ordenado que sería guardado en la variable **arrayFruitsOrdered** la cual se vería de la siguiente forma.

<div style=" background: #ccc2;border-radius: .5rem;">

```js
[
  { id: 5, name: "coco", sabor: "ligeramente dulce" },
  { id: 2, name: "limón", sabor: "ácido o cítrico" },
  { id: 1, name: "manzana", sabor: "dulce" },
  { id: 3, name: "naranja", sabor: "ácido o cítrico" },
  { id: 4, name: "pera", sabor: "dulce" },
];
```

</div>

En este ejemplo vemos cómo para ordenar alfabéticamente un array de objetos haciendo uso del método **`sort()`**. Debemos pasarle una función con dos parámetros, `(a, b)` donde **`a`** y **`b`** representan los elementos que serán comparados. Ponemos una condición: si `(a.name)` es menor que `(b.name)` retornamos **-1**, esto indica que **`a`** debe aparecer antes que **`b`**. Ahora si `(a.name)` es mayor a `(b.name)` retornamos **1**, ya que esto indica que **`b`** debe aparecer antes que **`a`** Y si ambos son iguales retornamos **0**, esto indica que no es necesario hacer ningún cambio.

</br>

#### Ordenar alfabéticamente con un algoritmo

Otra forma de ordenar un array de objetos alfabéticamente es haciendo uso nuevamente de los algoritmos **Bubble sort** y **Quick sort**.

<div style=" background: #ccc2;border-radius: .5rem;">

```js
const arrayFruits = [
  { id: 1, name: "manzana", sabor: "dulce" },
  { id: 3, name: "naranja", sabor: "ácido o cítrico" },
  { id: 4, name: "pera", sabor: "dulce" },
  { id: 2, name: "limón", sabor: "ácido o cítrico" },
  { id: 5, name: "coco", sabor: "ligeramente dulce" },
];
```

</div>

Suponiendo el anterior array de objetos, la forma de ordenarlo alfabéticamente haciendo uso del algoritmo **Bubble sort** sería la siguiente.

<div style=" background: #ccc2;border-radius: .5rem;">

```js
function sortArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      console.log("i", i);
      console.log("j", j);
      if (arr[j].name > arr[j + 1].name) {
        const aux = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = aux;
      }
    }
  }
  return arr;
}

const arrayOrdered = sortArray(arrayFruits);
```

</div>

Y para ordenarlo alfabéticamente usando el algoritmo **Quick sort** sería de la siguiente forma.

<div style=" background: #ccc2;border-radius: .5rem;">

```js
const quickSort = (array) => {
  if (array.length <= 1) return array;

  const left = [];
  const right = [];

  const firstValue = array.shift();

  array.forEach((element) => {
    if (element.name < firstValue.name) {
      left.push(element);
    } else if (element.id >= firstValue.id) {
      right.push(element);
    }
  });

  return [...quickSort(left), firstValue, ...quickSort(right)];
};

quickSort(arrayFruits);
```

</div>

En estos ejemplos vemos como para ordenar el array accedemos al objeto en la propiedad **name** y le preguntamos si es menor o mayor al siguiente objeto en la propiedad **name**. Cuando preguntamos si un **string** es mayor o menor que otro **string** la comparación se hace de la siguiente manera. Si la primera letra del **string** del primer objeto aparece primero en el abecedario que la primera letra del **string** del segundo objeto, entonces el primer **string** es mayor que el segundo y viceversa, y si las dos son iguales entonces toma en cuenta la segunda letra y así sucesivamente.

De esta forma logramos ordenar el array alfabéticamente basándonos en la propiedad **`name`** en el objeto del array.


En resumen un array de objetos es una estructura de datos muy útil que te permite almacenar y manipular conjuntos de datos complejos en tu código. Con un array de objetos puedes acceder a cada elemento individualmente, iterar sobre el array, filtrar los datos y muchas cosas más. Es importante resaltar que hay mas formas de trabajar con arrays de objetos que las mencionadas en este articulo. Puedes encontrar mas información en la [pagina oficial de Javascript](https://developer.mozilla.org/es/docs/Web/JavaScript). Puedes leer más sobre esto y muchos otros temaas en el blog de [4Geeks](https://4geeks.com/).

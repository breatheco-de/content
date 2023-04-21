---
title: "¿Qué es y Cómo hacer un Array de objetos en Javascript?"
subtitle: "Aprende cómo trabajar con Array de Objetos en Javascript con 4Geeks. Domina las técnicas para manipular datos complejos y mejorar tus habilidades."
tags: ["javascript"]
authors: ["diegorojas"]

---

## Que es un array de objetos

En JavaScript, un array es una estructura de datos que se utiliza para almacenar una colección de elementos del mismo tipo. Los elementos dentro de un array se organizan en una secuencia ordenada y se acceden mediante un índice numérico. Los [arrays en Javascript](https://4geeks.com/es/lesson/array-arreglo-en-javascript) pueden contener cualquier tipo de dato, incluso otros arrays. 

En javascript un array de objetos es una estructura de datos muy útil que permite almacenar varios objetos en una sola variable, cada uno de estos objetos con sus propios valores y métodos. Esto convierte a esta estructura de datos en una herramienta muy útil y ampliamente utilizada en la programación.

Por ejemplo. Si deseas crear una aplicación de chat que te permite enviar y recibir mensajes, puedes hacer uso de esta estructura de datos para almacenar los diferentes mensajes y los usuarios que están conversando.

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

En el ejemplo anterior vemos cómo podemos crear un array de objetos para representar una conversación. En el array se muestra la conversación entre dos personas **Paul** y **Alex**, cada uno de los objetos contiene información sobre el mensaje, la propiedad **Id** te permite identificar cada uno de los mensajes individualmente, la propiedad **user_name** te permite saber quién es el usuario que recibe el mensaje, la propiedad **send** indica la fecha en que se envió el mensaje, la propiedad **send_by** indica el usuario que envió el mensaje, la propiedad **received** indica la fecha en que se recibió el mensaje, la propiedad **viewed** indica si ya se leyó el mensaje, y por último la propiedad **message** que indica el mensaje enviado.

Como vemos en el ejemplo un array de objetos puede ser un estructura de almacenaje muy útil a la hora de guardar información y trabajar con una amplia cantidad de datos. En este caso en particular una conversación entre dos personas puede llegar a tener cientos o hasta miles de mensajes y al almacenarlos en un array de objetos nos permite trabajar con ellos y modificarlos de una forma más sencilla.

## Crear un array de objetos

Para crear un array de objetos en [javascript](https://4geeks.com/es/lesson/para-que-sirve-javascript) primero necesitas saber como crear un array y un objeto. A continuación veremos una corta explicación sobre cómo se pueden crear estas estructuras en javascript.

#### Crear un array

Para crear un array existen dos formas de hacerlo.

Ejemplo:

```js
var arrayOne = [1, 2, 3, 4, 5];
var arrayTwo = new Array(1, 2, 3, 4, 5);


console.log(arrayOne); // --> [1, 2, 3, 4, 5]
console.log(arrayTwo); // --> [1, 2, 3, 4, 5]
```


En este ejemplo vemos como para crear un array en javascript existen dos formas, la primera es crear una variable y asignarle como valor un par de corchetes `[]`esto creará un array por defecto, la segunda forma es crear una variable y asignarle como valor la palabra reservada de javascript **`new Array()`** esto también creará un array.


Es importante resaltar que ya no se suele utilizar la palabra reservada **`new Array()`**, para crear un array es más común hacerlo usando los corchetes `[]` ya que es más sencillo, fácil de entender y funcionan de la misma manera.


#### Crear un objéto


Para crear un objeto también existen dos formas de hacer.


Ejemplo:


```js
const objectOne = { name: "Paul", age: 23 };
const objectTwo = new Object();
objectTwo.name = "Alex";
objectTwo.age = 40;


console.log(objectOne); // --> { name: "Paul", age: 23: }
console.log(objectTwo); // --> { name: "Alex": age: 40 }
```


En este ejemplo vemos las dos formas en las que puedes crear un objeto en javascript, la primera es crear una variable y asignarle como valor un par de llaves **{}** esto creará un objeto por defecto, la segunda forma es crear una variable y asignarle como valor la palabra reservada de javascript **`new Object()`** esto también creará un objeto.

Es importante señalar que la palabra reservada **`new Object()`** ya no se suele utilizar para crear un objeto ya que como vimos en el ejemplo anterior es más sencillo, y fácil de entender hacerlo utilizando la sintaxis de llaves.

#### Crear array de objétos

Ahora veamos cómo crear un array de objetos.

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
    group_users: [
      { id: 1, email: "alex@email.com" },
      { id: 2, email: "paul@email.com" },
    ],
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
    group_users: [
      { id: 1, email: "alex@email.com" },
      { id: 2, email: "paul@email.com" },
    ],
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
    group_users: [
      { id: 1, email: "alex@email.com" },
      { id: 2, email: "paul@email.com" },
    ],
  },
];
```

En este ejemplo podemos ver cómo se creá un array de objetos que representa una conversación entre dos personas donde cada uno de los objetos representa cada mensaje con sus propiedades y valores. Las propiedades en un objeto son el equivalente a variables a las cuales se les puede asignar un valor. Este valor puede ser de cualquier tipo desde un valor **numérico**, una **cadena de texto**, un valor **booleano** o incluso un nuevo **array de objetos**


## Ordenar array de objetos

Existen diferentes formas para ordenar un array de objetos en javascripts.

#### Método sort


```js
const arrayExample = [
  { id: 2, name: "example one" },
  { id: 1, name: "example two" },
  { id: 4, name: "example three" },
  { id: 3, name: "example three" },
];

const arrayOrdered = arrayExample.sort((a, b) => a.id - b.id);
```

En este ejemplo vemos una de las formas más utilizadas para ordenar un array de objetos que es haciendo uso del método `sort()` de javascript. Para ordenar un array de objetos este método recibe un función de comparación como parámetro. Esta función recibe dos parámetros usualmente llamados **a** y **b** estos parámetros representan los elementos que serán comparados. La función de comparación debe retornar un valor **negativo** en el caso de que **a** tenga que aparecer antes que **b**, en el caso de que **b** tenga que aparecer antes que **a** esta función debe retornar un valor **positivo**, y si los dos elementos son iguales entonces debe retornar **cero**.

En el ejemplo vemos como para ordenar el array accedemos al objeto en la propiedad **Id** para ordenarlo de forma numérica ascendente.

#### Algoritmo Bubble sort

Otra forma de ordenar un array de objetos es haciendo uso del algoritmo de ordenamiento conocido como **Bubble Sort**.

Ejemplo:

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
console.log(arrayOrdered);
```

En este ejemplo creamos una función y le pasamos el array que queremos ordenar, en la función iteramos el array dos veces haciendo uso de un `for loop`, en cada iteración pregunta si el valor actual es mayor que el siguiente, de ser así realiza el intercambio. Esta una de las sintaxis más comunes para crear un **Bubble sort** pero hay varias formas de hacerlo, esta función retorna el array ordenado que se guarda en la constante `arrayOrdered`.

El algoritmo **Bubble sort** compara cada par de elementos, en el caso de que los elementos estén en el orden incorrecto hace el intercambio de lo contrario el algoritmo los deja como estaban. Este proceso se repite varias veces hasta que se recorre el array por completo y todos los elementos están bien ordenados.

#### Algoritmo Quick Sort


Otro algoritmo que puedes usar para ordenar un array de objetos en javascript es el algoritmo **Quick Sort**


Ejemplo:


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


Este algoritmo ordena los array de una forma muy interesante, Para ordenar un array lo que hace el **Quick sort** es hacer uso de la técnica divide y conquista. Primero selecciona un valor del array, luego divide el array en dos sub-arrays: uno con los elementos mayores que el valor seleccionado y otro con los elementos menores que este. Luego, aplica recursivamente el mismo proceso a cada sub-array hasta que todos los elementos estén ordenados.


El algoritmo the **Quick sort** es un algoritmo que te permite ordenar un array de una forma más eficiente que el **Bubble sort** en la mayoría de los casos. ya que el algoritmo **Bubble sort** tiene un complejidad de tiempo de **`O(n^2)`** lo que significa que el tiempo de ejecución aumenta proporcionalmente al cuadrado del tamaño del array. Por otro lado, el algoritmo **Quick sort** tiene una complejidad de tiempo de **`O(n log n)`**, lo que significa que el tiempo de ejecución aumenta proporcionalmente al del tamaño del array. Sin embargo hay casos en los que el **Bubble sort** puede ser más eficiente, especialmente en arrays pequeños.

## Recorrer Array de objetos Javascript

Para recorrer un array de objetos en javascript tenemos varias formas de hacerlo.

#### Método forEach

El método **`forEach()`** es una de las formas usualmente más utilizadas a la hora de recorrer un array en javascript.

```js
const array = [
  { id: 1, name: "exp one" },
  { id: 2, name: "exp two" },
  { id: 3, name: "exp three" },
  { id: 4, name: "exp four" },
];


array.forEach((item, index) => {
  // Aquí va tu código
});
```

En el ejemplo anterior vemos como el método `forEach()` te permite recorrer un array. Este método recibe una función como parámetro, esta función recibe dos parámetros generalmente llamados **ítem** e **index**. Es importante resaltar que estos parámetros puede llamarse de cualquier forma no tienen que tener estos nombres. El parámetro **ítem** representa el objeto dentro del array y el parámetro **index** representa una variable que aumenta de valor en cada iteración lo cual puede ser muy útil en algunos casos.

#### For loop

Otra forma de recorrer un array es haciendo uso de un **for loop**.

```js
const array = [
  { id: 2, name: "exp one" },
  { id: 1, name: "exp two" },
  { id: 4, name: "exp three" },
  { id: 3, name: "exp three" },
];


for (let i = 0; i < array.length; i++) {
  // Aquí va tu código
}
```

El **for loop** necesita varios parámetros, el primero es la variable de control usualmente llamada **I**, luego necesita una condición de salida, en este caso que la variable **i** sea menor que el lago del array, y por último recibe el parámetro que aumenta de valor a la variable de control **I**, luego dentro de la llaves `{}` puedes escribir el código que deseas realizar en cada iteración como se muestra en el ejemplo anterior.

El **for loop** es una estructura de código muy útil y ampliamente utilizada que te permite recorrer arrays de una forma muy eficiente.


## Ordenar Alfabéticamente un Array de Objetos

Para ordenar un array de objetos alfabéticamente tambien podemos hacerlo de varias formas.

#### Ordenar alfabéticamente con el método sort

Una de las formas más óptimas para ordenar un array de objetos alfabéticamente en javascript es haciendo uso del método **`sort()`**.

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

Este código retornaría el array ordenado que sería guardado en la variable **arrayFruitsOrdered** la cual se vería de la siguiente forma.

```js
[
  { id: 5, name: "coco", sabor: "ligeramente dulce" },
  { id: 2, name: "limón", sabor: "ácido o cítrico" },
  { id: 1, name: "manzana", sabor: "dulce" },
  { id: 3, name: "naranja", sabor: "ácido o cítrico" },
  { id: 4, name: "pera", sabor: "dulce" },
];
```

En este ejemplo vemos cómo para ordenar alfabéticamente un array de objetos haciendo uso del método `sort()`. Debemos pasarle una función como parámetro. Esta función recibe dos parámetros usualmente llamados **(a, b)** ,estos parámetros representan los elementos que serán comparados. En cada iteración compara los elementos, si los elementos no están en la posición correcta entonces procede a hacer el intercambio.

Otra forma de ordenar un array de objetos alfabéticamente es haciendo uso nuevamente de los algoritmos **Bubble sort** y **Quick sort**.

#### Ordenar alfabéticamente Bubble sort

```js
const arrayFruits = [
  { id: 1, name: "manzana", sabor: "dulce" },
  { id: 3, name: "naranja", sabor: "ácido o cítrico" },
  { id: 4, name: "pera", sabor: "dulce" },
  { id: 2, name: "limón", sabor: "ácido o cítrico" },
  { id: 5, name: "coco", sabor: "ligeramente dulce" },
];


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

En este ejemplo para ordenar alfabéticamente el array de frutas que se encuentra en la parte superior. Creamos una función y le pasamos ese arreglo, esta función realiza la iteración del array y retorna el array ordenado alfabéticamente de la **A** a la **Z**. Luego este array ordenado se guarda en la constante **arrayOrdered**.

#### Ordenar alfabéticamente Quick sort

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

const arrayOrdered = quickSort(arrayFruits);
```

En este ejemplo creamos una función que recibe como parámetro el array que queremos ordenar. Esta función realiza la iteración y retorna el array ordenado alfabéticamente el cual se guarda en la constante **arrayOrdered**.

Para ordenar un array de strings la comparación se realiza de esta forma. Compara la primera letra del **string** actual con la primera letra del siguiente **string**. Ejemplo, en la palabra **coco** y la palabra **mango** compara la letra **c** con la letra **m**, en este caso como la letra **c** aparece primero en el alfabeto que la letra **m** entonces la palabra **coco** es mayor que la palabra **mango**.


En resumen un array de objetos es una estructura de datos muy útil que te permite almacenar y manipular una amplia cantidad de datos complejos en tu código. Con un array de objetos puedes acceder a cada elemento individualmente, iterar el array, filtrar cada uno los datos y muchas otras cosas más. Es importante resaltar que existen más formas de manipular un array de objetos que las mencionadas en este artículo. Puedes encontrar más información sobre este tema en la [página oficial de javascript ](https://developer.mozilla.org/es/docs/Web/JavaScript). Puedes leer sobre este tema y muchos mas en el blog de [4Geeks](https://4geeks.com/).

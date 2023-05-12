---
title: "Todo lo que necesitas saber sobre Javascript Empty Array"
subtitle: "Descubre cómo trabajar con arrays vacíos en Javascript. Aprende cómo crearlos, verificar si están vacíos y manipularlos de manera efectiva."
tags: ["JavaScript","arrays"]
authors: ["DF27ARTS"]

---

##  Array Vacío Javascript

```js
// Array ejemplo
let n = [ 1, 2, 3, "a", "b", "c" ];

// Comprobar si un array está vacío en javascript
if (Array.isArray(n) && n.length === 0) {
   console.log(“El array n está vacío”);
   
} else {
   console.log(“El array n NO esta vacío”);
};

// Vaciar un array en javascript reescribiendo la propiedad length
n.length = 0;
console.log(n) // output []
```

Existen ocasiones en Javascript en las que necesitamos vaciar un array o verificar si el array está vacío para poder trabajar con él. Tenemos varías formas de lograr este objetivo, veremos algunas de ellas a continuación. Si quieres conocer más sobre [qué es un array en Javascript](https://4geeks.com/es/lesson/array-arreglo-en-javascript) puedes leer nuestra guía en el Blog de [4Geeks](https://4geeks.com/).

## ¿Cómo comprobar que un array está vacío en Javascript?

Sin duda la forma más segura de comprobar si un array está vacío es accediendo a la propiedad **length** del array. 

```js
let n = [];

if ( Array.isArray(n) && n.length === 0 ) {
   console.log(“El array n está vacío”);
} else {
   console.log(“El array n NO está vacío”);
};
```

En este ejemplo primero verificamos que el array sea de **tipo** array con la expresión `Array.isArray(n)` ya que si fuese de otro tipo de dato por ejemplo un objeto **no** podríamos acceder a la propiedad **length**, luego verificamos que el array está vacío con la expresión `n.length === 0`.

## ¿Cómo vaciar un array en Javascript?

Existen diferentes formas en las que podemos vaciar un array en [Javascript](https://4geeks.com/es/lesson/que-es-javascript-aprende-a-programar-en-javascript). A continuación veremos algunas de ellas.

### Reescribir la propiedad length
 
```js
let n = [ 1, 2, 3, 4, 5 ];
n.length = 0

console.log( n ) // []
```

la forma mas eficiente en terminos de ejecución a la hora de vaciar un array en Javascript es accediendo a la propiedad **length** del array y asignando el valor 0 esto borra todos los elementos del array y lo deja completamente vacío.

### Asignarle un nuevo array vacío

Otra forma de vaciar un array en Javascript es asignándole un **nuevo** array vacío.

```js
let n = [1, 2, 3];
const m = ["a", "b", "c"];

n = [];
m = [];

console.log(n) // (output) []
console.log(m) // (output) TypeError: Assignment to constant variable.
```

En este ejemplo le asignamos un nuevo array vacío ` [] ` a el array **n** lo cual elimina todos los elementos que tenía.

> Es importante tener en cuenta que si usas la palabra reservada **const** para crear el array, esta sintaxis no funcionará para vaciar el array ya que las **constantes** no pueden ser modificadas como en el ejemplo del array **m**.

### Haciendo uso del método splice()

También podemos usar del método **splice()** para vaciar un array en Javascript.

```js
let n = [1, 2, 3];
let m = ["a", "b", "c"];

n.splice(0, n.length);
m.splice(0, 1);

console.log(n);  // (output) []
console.log(m);  // (output) ["b", "c"]
```

El método [splice](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) te permite eliminar elementos de un array desde un índice específico, este método recibe dos parámetros numéricos, el primero es el índice desde el cual quieres empezar a eliminar elementos, el segundo parámetro es la cantidad de elementos que deseas eliminar.

### Haciendo uso del método pop()

y por último otra opción para vaciar un array es haciendo uso el método ` pop() `

```js
let n = [1, 2, 3, 4, 5];

while (n.length > 0) {
  n.pop();
};

console.log(n)  // (output) [];
```

Esta es otra forma en la que puedes vaciar un array en Javascript. Haciendo uso del método [pop](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/pop) y la estructura de bucle `while()` elimina todos los elementos del array uno por uno.

En todos los ejemplos anteriores los elementos se eliminan del array pero no del espacio en memoria, estos elemento siguen estando en la memoría local pero al no tener ninguna referencia el recolector de basura **garbage collection** de javascript los termina eliminando. Es importante tener esto en cuenta ya que tener elementos en memoría pero sin referencia podría ralentizar la ejecución de tu código.

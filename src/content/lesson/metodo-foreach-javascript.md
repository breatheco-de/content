# Foreach JavaScript

El método `forEach` en JavaScript permite recorrer un array y aplicar en cada uno de sus elementos una acción en particular a través de una función. Veamos un ejemplo.

```js
const animales = ["perro", "gato", "elefante"];

animales.forEach(function (animal) {
  console.log(animal);
});
/*
'perro'
'gato'
'elefante'
*/
```

Podemos ver como el método `forEach` itera el array `animales` y aplica a cada uno de sus elementos la función que recibe como parámetro. Para este ejemplo la función simplemente muestra el valor de cada elemento del array en la consola.

## Sintaxis del método forEach en JavaScript

Como se mencionó anteriormente, el método `forEach` recibe como parámetro una función que se ejecutará en cada uno de los elementos del array. Esta función también conocida como [función callback](https://developer.mozilla.org/es/docs/Glossary/Callback_function) puede recibir hasta tres parámetros: el valor del elemento actual, el índice del elemento actual y el array que se esta recorriendo.

```js
  array.forEach(function(elementoActual, indice, array))
```

- `elmentoActual`: es el valor del elemento actual del array.
- `índice`: es el índice del elemento actual del array (opcional).
- `array`: es el array que se está recorriendo (opcional).

A continuación, veamos un ejemplo de cómo utilizar los tres parámetros que recibe el método `forEach`:

```js
const vocales = ["a", "e", "i", "o". "u"];

vocales.forEach(function (vocal, indice, arr) {
  console.log(`El valor del elemento en la posición ${indice} es ${vocal} del array que estamos recorriendo que es ${arr}`);
});
```

En este ejemplo podemos observar, como hacer uso de los parámetros que recibe la función callback del método `forEach`, en este caso se imprime por consola una cadena de texto que indica el valor del elemento actual, su posición en el array y el array que se esta iterando.

## Casos de uso del método forEach en JavaScript

El método `forEach` en JavaScript se utiliza comúnmente para ejecutar un bloque de código para cada elemento de un array. A continuación, veremos algunos casos de uso:

1. **Modificar los valores de un array:** Podemos utilizar el método `forEach` para modificar los valores de un array. Por ejemplo, podríamos a partir de un array de nombres de personas generar un saludo para cada una.

```js
let nombresPersonas = ["Ricardo", "Pepe", "Mauricio"];

nombresPersonas.forEach(function (nombre) {
  console.log(`Hola ${nombre}`);
});
/*
'Hola Ricardo'
'Hola Pepe'
'Hola Mauricio'
*/
```

2. **Manipulación del DOM:** Podemos generar una lista de productos de forma dinámica haciendo uso del método `forEach`

```html
<!DOCTYPE html>
<html>
  <head> </head>
  <body>
    <h1>Mi lista de Productos</h1>
    <ul id="miLista"></ul>

    <script>
      const listaProductos = ["Celular", "Laptop", "Audifonos", "TV"];
      let ul = document.querySelector("#miLista");

      listaProductos.forEach(function (producto) {
        let li = document.createElement("li");
        li.textContent = producto;
        ul.appendChild(li);
      });
    </script>
  </body>
</html>
```

Podemos observar que originalmente nuestro documento HTML solo cuenta con una lista desordenada `<ul>` vacia. Haciendo uso del método `forEach`, creamos una etiqueta `<li>` a partir del método `createElement()`, luego le añadimos texto a través de la propiedad `textContent` que en este caso sera el nombre del producto actual que se te iterando y por último añadimos la etiqueta `<li>` como hijo a la etiqueta `<ul>` haciendo uso de `appendChild`, obteniendo asi una lista dinámica en nuestro documento HTML.

3. **Filtrar los elementos de un array:** El método `forEach` nos puede ayudar a la hora que necesitemos filtrar los elementos de un array. Por ejemplo, necesitamos filtrar todos los productos que tengan un precio superior a $100.

```js
// Array de productos
const productos = [
  { nombre: "Camiseta", precio: 25 },
  { nombre: "Zapatos", precio: 150 },
  { nombre: "Pantalones", precio: 80 },
  { nombre: "Gorra", precio: 30 },
  { nombre: "Bolso", precio: 200 },
];

// Array auxiliar para almacenar los productos filtrados
const productosFiltrados = [];

// Filtrar productos con precio mayor a $100 utilizando forEach
productos.forEach((producto) => {
  if (producto.precio > 100) {
    productosFiltrados.push(producto);
  }
});

// Imprimir los productos filtrados por consola
console.log(productosFiltrados);
/*
[
  { nombre: 'Zapatos', precio: 150 },
  { nombre: 'Bolso', precio: 200 }
]
*/
```

4. **Actualizar propiedades de objetos en un array:** Podemos hacer uso del método `forEach` para modificar propiedades de un grupo de objetos que se encuentran dentro de un array. Por ejemplo, de un arrays de estudiantes podemos modificar la nota de cada uno de ellos.

```js
const estudiantes = [
  { nombre: "Juan", nota: 80 },
  { nombre: "Pedro", nota: 90 },
  { nombre: "Carlos", nota: 75 },
];

estudiantes.forEach((estudiante) => {
  estudiante.nota += 5;
});

console.log(estudiantes);
/* Resultado:
[
  { nombre: 'Juan', nota: 85 },
  { nombre: 'Pedro', nota: 95 },
  { nombre: 'Carlos', nota: 80 }
]
*/
```

5. **Calcular la suma de todos los elementos de un array:** Podemos utilizar el método `forEach` para sumar todos los elementos de un array.

```js
const numeros = [1, 2, 3, 4, 5];
let total = 0;

numeros.forEach((numero) => {
  total += numero;
});

console.log(total); // 15
```

Es importante conocer que el método `forEach` no retorna un array nuevo. Este tiene como función principal iterar y ejecutar una función sobre cada elemento del array. Si necesitas crear un nuevo array a partir de los elementos originales, podemos utilizar otros métodos como `map` o `filter`.

Si te gustaría saber mas acerca de este método puedes visitar la documentación oficial de JavaScript [método forEach](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach).

Si leyendo este articulo te llamo la atención y te gustaría saber más sobre el lenguaje de programación JavaScript, puedes visitar este link [aprende a programar](https://4geeks.com/es/lesson/que-es-javascript-aprende-a-programar-en-javascript), donde podrás aprender las bases del lenguaje, a través de conceptos simples, ejemplos de código, videotutoriales y muchos otros recursos que serán útiles para tu aprendizaje.

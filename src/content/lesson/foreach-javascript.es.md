# Foreach JavaScript

El método `forEach` en JavaScript permite recorrer un array y aplicar en cada uno de sus elementos una acción en particular a través de una función.

```js
const letras = ["a", "b", "c"];

letras.forEach(function (letra) {
  console.log(letra);
});
```

En este ejemplo, el método `forEach` recorre el array `letras` y aplica la función que se le pasó como parámetro a cada uno de sus elementos. En este caso, la función simplemente muestra el valor de cada elemento en la consola.

Foreach en JavaScript recibe como parámetro una función,también conocida como [función callback](https://developer.mozilla.org/es/docs/Glossary/Callback_function). Esta función puede recibir hasta tres parámetros, los cuales son en este mismo orden: el valor del elemento actual, el índice del elemento actual y el array donde estamos ejecutando el método.

## Sintaxis del método forEach en JavaScript

Como se mencionó anteriormente, el método `forEach` recibe como parámetro una función que se ejecutará en cada uno de los elementos del array. Esta función puede recibir hasta tres parámetros:

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

Para este ejemplo, la función que se le pasó como parámetro al método `forEach` en JavaScript recibe los tres parámetros que puede recibir. La función simplemente muestra en la consola una cadena de texto que indica el valor del elemento, su índice y el array completo. Sin embargo, cuando utilizamos el método forEach el parámetro que más se utiliza es el valor del elemento actual. Los parámetros del índice y el array son opcionales y son usados para casos específicos donde se requiere un mayor control o información adicional.

## Casos de uso del método forEach en JavaScript

El método `forEach` en JavaScript se utiliza comúnmente para ejecutar un bloque de código para cada elemento de un array. A continuación, veremos algunos casos de uso:

1. **Modificar los valores de un array:** Podemos utilizar el método forEach para modificar los valores de un array. Por ejemplo, multiplicar por dos cada uno de los elementos de un array:

```js
let numeros = [1, 2, 3];

numeros.forEach(function (numero) {
  numero = numero * 2;
});

console.log(numeros); // [2, 4, 6]
```

2. **Acciones en el DOM:** Si estamos trabajando con elementos del DOM, como una lista de elementos `<li>`, podemos utilizar `forEach` para agregar o eliminar clases, aplicar estilos o interactuar con ellos de alguna manera.

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      .resaltado {
        background-color: yellow;
        font-weight: bold;
      }
    </style>
  </head>
  <body>
    <h1>Mi lista de compras</h1>
    <ul id="miLista">
      <li>Manzanas</li>
      <li>Pasta</li>
      <li>Arroz</li>
      <li>Mantequilla</li>
    </ul>

    <script>
      // Obtenemos todos los elementos <li> dentro de la lista
      const listaElementos = document.querySelectorAll("#miLista");

      // Utilizamos forEach para recorrer cada elemento y agregar una clase
      listaElementos.forEach(function (elemento) {
        elemento.classList.add("resaltado");
      });
    </script>
  </body>
</html>
```

Podemos observar que tenemos una lista desordenada `<ul>` con tres elementos de lista `<li>`. Aplicamos el método `forEach` a la colección de elementos seleccionados y dentro de la función callback usamos `classList.add()` para agregar la clase "resaltado" a cada elemento.

La clase `resaltado` está definida en el bloque de estilos CSS. Agrega un fondo amarillo y un texto en negrita a los elementos con esta clase. Así que al ejecutar el código, cada elemento de la lista tendrá esos estilos.

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

4. **Actualizar propiedades de objetos en un array:** A través del método `forEach` podemos modificar propiedades de un grupo de objetos que se encuentran dentro de un array. Por ejemplo, de un arrays de estudiantes podemos modificar la nota de cada uno de ellos

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

En este ejemplo, la función callback del método `forEach` le suma 5 a la nota de cada estudiante.

5. **Calcular la suma de todos los elementos de un array:** Podemos utilizar el método `forEach` para sumar todos los elementos de un array.

```js
const numeros = [1, 2, 3, 4, 5];
let total = 0;

numeros.forEach((elemento) => {
  total += elemento;
});

console.log(total); // 15
```

Es importante mencionar que el método `forEach` no devuelve un array nuevo. Su propósito principal es realizar acciones sobre los elementos existentes en el array. Si necesitamos crear un nuevo array basado en la transformación de los elementos originales, podemos utilizar otros métodos como `map`, `filter` o `reduce`.

El método `forEach` es una herramienta muy útil en JavaScript ya que nos permite iterar a través de arrays y realizar una acción especifica en cada elemento. Al comprender cómo utilizar el método y sus parámetros, puedes escribir un código más eficiente. Si te gustaría saber mas acerca de este método puedes visitar la documentación oficial de JavaScript [método forEach](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach).

Si leyendo este articulo te llamo la atención y te gustaría saber más sobre el lenguaje de programación JavaScript, puedes visitar este link [aprende a programar](https://4geeks.com/es/lesson/que-es-javascript-aprende-a-programar-en-javascript), donde podrás aprender las bases del lenguaje, a través de conceptos simples, ejemplos de código, videotutoriales y muchos otros recursos que serán útiles para tu aprendizaje.

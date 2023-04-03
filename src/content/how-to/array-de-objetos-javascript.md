# Array de objetos en Javascript

</br>

Un array de objetos en JavaScript es una estructura de datos muy útil que te permite almacenar varios objetos en una sola variable, cada uno con sus propios métodos. Esto convierte a esta estructura de almacenamiento en una herramienta muy útil y ampliamente utilizada a la hora de trabajar con datos complejos.

Por ejemplo, si deseas crear una aplicación de chat, puedes crear un array de objetos para almacenar los mensajes junto con sus propiedades en el mismo.

</br>
</br>

## Crear un Array de Objetos

Para crear un array en JavaScript puedes hacerlo de dos formas, una es declarar una variable asignarle como valor un par de corchetes <code>[]</code>, esto creará un array por defecto, otra forma es usar la palabra reservada de Javascript, <code><strong>new</strong> Array()</code> , de esta forma también puedes crear un array como se muestra en el siguiente ejemplo:

```javascript
const arrayOne = [1, 2, 3, 4, 5];
const arrayTwo = new Array(1, 2, 3, 4, 5);

console.log(arrayOne); // --> [1, 2, 3, 4, 5]
console.log(arrayTwo); // --> [1, 2, 3, 4, 5]
```

</br>

Para crear un objeto en JavaScript, también puedes hacerlo de dos formas, la primera es crear una variable y asignarle como valor un par de llave <code>{}</code>, esto creará un objeto por defecto, la segunda forma es utilizar la palabra reservada de JavaScript <code><strong>new</strong> Object()</code>, como se muestra en el siguiente ejemplo:

```javascript
const objectOne = { name: "name", age: "age" };
const objectTwo = new Object();
objectTwo.name = "name";
objectTwo.age = "age";

console.log(objectOne); // --> { name: "name": age: "age: }
console.log(objectTwo); // --> { name: "name": age: "age: }
```

Hay que señalar que las palabras reservadas, <code><strong>new</strong> Array()</code> y, <code><strong>new</strong> Object()</code> ya no se suelen utilizar para crear arrays y objetos respectivamente, es más común crearlos con corchetes y llaves.

Un array de objetos en Javascript se vería de la sieguiente forma.

```javascript
const chat = [
  { id: 1, name, "user name", message, "message example one", delivered: false },
  { id: 2, name, "user name", message, "message example two", delivered: true },
  { id: 3, name, "user name", message, "message example three", delivered: false },
  { id: 4, name, "user name", message, "message example four", delivered: false },
]
```

En este ejemplo vemos como se crea un array de objetos cada uno con sus propios metodos, para acceder a alguno de ellos puedes hacerlo de la siguiente forma <code> chat[1].message </code>, de esta manera accedes al array en la segunda posición y despues a el objeto en la propiedad message, otra forma de hacerlo sería <code>chat[1]["message"]</code> esto devolvería lo mismo que el ejemplo anterior <code> "message example two" </code>.

Te comparto el link a la documentación oficial de JavaScript, <a href="https://www.google.com/url?q=https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array" >javascript arrays</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" >javascript objects</a>

</br>

## Ordenar Array de objetos

Existen diferentes formas para ordenar un array de objetos en javascripts, suponiendo el siguiente array de objetos.

```javascript
const arrayExample = [
  { id: 2, name: "example two" },
  { id: 1, name: "example one" },
  { id: 4, name: "example four" },
  { id: 3, name: "example three" },
];
```

Una forma de ordenarlo sería haciendo uso de un algoritmo de ordenamiento conocido como bubble sort, para esto puedes crear una función y pasarle el arreglo que deseas ordenar.
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
    for (let j = 0; j < arr.length - 1; j++) {
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

En este ejemplo creamos una función y le pasamos el array que queremos ordenar, en la función iteramos el array dos veces usan un <code> for loop </code> que usualmente se utiliza para recorrer arrays, esta es la sintaxis mas comúm para crear un bubble sort pero hay varias formas de hacerlo, esta función retorna el array ordenado que se guarda en la constante <code> arrayOrdered </code>.

Te dejo el enlace a la documentación de el algoritmo de bubble sort por si te interesa aprender más sobre este, <a href="https://www.google.com/url?q=https://3con14.biz/js/tips-and-tricks/17-ordenamiento-por-burbuja.html&sa=D&source=docs&ust=1680028109981729&usg=AOvVaw3jkBU6eF2LiKnfpwa9OvdD" > algoritmo bubble sort</a>.

Otra forma de ordenar un array es haciendo uso del método de arrays de JavaScript llamado <code>sort()</code>.

Ejemplo:

```javascript
const arrayExample = [
  { id: 2, name: "example one" },
  { id: 1, name: "example two" },
  { id: 4, name: "example three" },
  { id: 3, name: "example three" },
];

const arrayOrdered = arrayExample.sort((a, b) => a.id - b.id);
```

En este ejemplo podemos apreciar que es más sencillo hacer uso de este método para ordenar un array ya que requiere mucho menos código y es más eficiente esto porque el método <code> sort() </code> hace uso del algoritmo <strong> Quicksort </strong> o <strong> Mergesort </strong> para ordenarlo. Este tiene una complejidad de tiempo de O(n log n), lo que significa que el tiempo de ejecución aumenta proporcionalmente al algoritmo del tamaño del array. Por otro lado el Bubble sort tiene una complejidad de tiempo de O(n^2), lo que significa que el tiempo de ejecución aumenta proporcionalmente al cuadrado del tamaño del array.

Te comparto el link a la documentación oficial de JavaScript, <a href="https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/sort" > metódo sort </a>

</br>

## Recorrer Array de objetos Javascript

Para recorrer un array de objetos tenemos varias formas de hacerlo, como vimos anteriormente podemos hacer uso de un bucle <code>for</code>, estos bucles te permiten recorrer un array. Este recive una variable que aumenta de valor en cada iteración usualmente declarada con el monbre <code>i</code>, como se muestra en siguiente ejemplo.

```javascript
const array = [
  { id: 2, name: "exp one" },
  { id: 1, name: "exp two" },
  { id: 4, name: "exp three" },
  { id: 3, name: "exp three" },
];

for (let i = 0; i < array.length; i++) {
  console.log(i); // 0, 1, 2, 3
  console.log(array[i].name); // exp one, exp two, exp three, exp four
}
```

En este ejemplo vemos que la variable <code>i</code> aumenta de valor en cada iteración esto nos permite acceder al array en esa posición en particular,<code> array[0]</code> sería igual a <code>{ id: 2, name: "exp one" }</code>.

Otra forma de recorrer un array es hacer uso de el metodo de arrays de JavaScript llamado <code>forEach()</code>, este método te permite recorrer un array como se muestra en el siguiente ejemplo:

```javascript
const array = [
  { id: 2, name: "exp one" },
  { id: 1, name: "exp two" },
  { id: 4, name: "exp three" },
  { id: 3, name: "exp three" },
];

array.forEach(function (object, index) {
  console.log(index); // 0, 1, 2, 3
  console.log(object); // objeto
});
```

En este ejemplo vemos como se invoca el método <cod>forEach()</code>, el mismo recibe una función que hace una iteración en el array, además recibe un index que se incrementa en cada iteración esto puede ser muy útil en algunos casos.

Es posible que hayas oído que otro metodo que te puede servir es el método <code>.map()</code> pero ten en cuenta que este método no esta diseñado para recorrer un array. El método <code>.map()</code> fue creado para alterar o modificar los elementos en un array y retornar un nuevo array con los cambios realizádos no para recorrerlo y aunque si te sirve para recorrer un array se considera una mala práctica en estos casos es mejor usar el método <code>forEach()</code>.

Aquí te encontraras la documentación oficial de JavaScript, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for"> for loop </a>, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach"> metodo foreach</a>

## Ordenar Alfabéticamente Array de Objetos Javascript

Para ordenar un array alfabéticamente, podemos hacer uso nuevamente de el método <code>sort()</code>, este método ordena un array de texto en orden alfabético de la <code>a</code> a la <code>z</code> por defecto, como se muestra en el ejemplo:

```javascript
const arrayFruits = ["manzana", "naranja", "pera", "limón", "coco"];
const arrayFruitsOrdered = arrayFruits.sort();
console.log(arrayFruitsOrdered); // [ 'coco', 'limón','manzana', 'naranja', 'pera' ]
```

Como vemos, para ordenar alfabéticamente un array de string, no es necesario pasarle argumentos a este método. Por otro lado, para ordenar un array de objetos si es necesario pasarle algunos argumentos a este método.

Hay varias formas de hacerlo, una de ellas es la siguiente:

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

// Este codigo retornaría el array ordenado que sería guardado en la variable arrayFruitsOrdered

[
  { id: 5, name: "coco", sabor: "ligeramente dulce" },
  { id: 2, name: "limón", sabor: "ácido o cítrico" },
  { id: 1, name: "manzana", sabor: "dulce" },
  { id: 3, name: "naranja", sabor: "ácido o cítrico" },
  { id: 4, name: "pera", sabor: "dulce" },
];
```

En este ejemplo vemos cómo para ordenar alfabéticamente un array de objetos haciendo uso del método <code>sort()</code>. Debemos pasarle una función con dos parámetros, <code>(a, b)</code> donde <code>a</code> representa el primer elemento y <code>b</code> representa el siguiente. Ponemos una condición: si <code>(a.name)</code> es menor que <code>(b.name)</code> retornamos -1, esto indica que <code>a</code> debe aparecer antes que <code>b</code>. Ahora si <code>(a.name)</code> es mayor a <code>(b.name)</code> retornamos 1, ya que esto indica que <code>b</code> debe aparecer antes que <code>a</code> Y si ambos son iguales retornamos 0, esto indica que no es necesario hacer ningun cambio.

</br>

## Conclusión

En resumen un array de objetos es una estructura de datos muy poderosa que te permite almacenar y manipular conjuntos de datos complejos en tu código. Con un array de objetos puedes acceder a cada elemento individualmente, iterar sobre el array, filtrar los datos y muchas cosas más. Es importante resaltar que hay mas formas de trabajar con arrays de objetos que las mencionadas en este articulo. Puedes encontrar mas información en la pagina oficial de Javascript, <a href="https://developer.mozilla.org/es/docs/Web/JavaScript"> documentación javascript </a>

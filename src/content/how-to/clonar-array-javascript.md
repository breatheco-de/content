---
title: "¿Cómo clonar un arreglo o array en Javascript"
subtitle: "Aprende cómo clonar un array en Javascript con diferentes métodos. Descubre la importancia de clonar un array y cómo hacerlo de forma eficiente para evitar efectos secundarios no deseados."
tags: ["javascript", "arrays"]
authors: ["valerybriz"]

---

La manera más utilizada para clonar un [array en Javascript](https://4geeks.com/es/lesson/array-arreglo-en-javascript) es usando el operador de propagación, ya que clona correctamente los elementos en arrays con más de un nivel de profundidad. Por ejemplo:

```js
names = [["Ana", "Clara", "Juan"],["Luis", "Alba", "Pilar"]];
namesClone = [...names];

console.log(names); // Consola: [["Alejandro", "Clara", "Juan"],["Luis", "Alba", "Pilar"]]
console.log(namesClone); // Consola: [["Alejandro", "Clara", "Juan"], ["Luis", "Alba", "Pilar"]]
```

Clonar un array en Javascript es una operación muy utilizada que permite crear un nuevo array con los mismos valores que el original. Sin embargo, existen muchas formas de clonar un array en Javascript, y cada método tiene sus propias ventajas y desventajas. En este artículo, exploraremos diferentes métodos y sus implicaciones en los objetos resultantes.

## Clonar un array en Javascript usando el Spread Operator

La forma más moderna y simple de clonar un array en [Javascript](https://4geeks.com/es/lesson/para-que-sirve-javascript) es mediante el método ES6. Este método utiliza la sintaxis de propagación para crear un nuevo array copiando los valores que contiene el array original.

```js
names = ["Ana", "Clara", "Juan"];
namesClone = [...names];
```

Este método es muy útil para clonar un array con un solo nivel de profundidad. Sin embargo, es importante tener en cuenta que **los arrays son objetos mutables, lo que significa que se pueden cambiar incluso después de su creación**. 

Un array con un solo nivel de profundidad se ve de la siguiente forma:

```js
namesNoDeep = ["Ana", "Clara", "Juan"];
```

Si queremos referirnos al segundo elemento del array podemos hacerlo por medio del index 1:

```js
console.log(namesNoDeep[1]); //Consola: Clara
```

Mientras que un array con dos niveles de profundidad se ve de la siguiente forma:

```js
namesDeep = [ ["Ana", "Clara"], ["Juan", "Alberto"], ["Pedro", "Alba"] ];
```

Si queremos referirnos al segundo elemento del primer array podemos hacerlo por medio del index 0,1:

```js
console.log(namesDeep[0][1]); //Consola: Clara
```

Si utilizamos el método del operador de propagación para clonar un array en Javascript con más de un nivel de profundidad, entonces el array resultante en su segundo nivel de profundidad no almacenará los valores, sino las referencias a estos arrays. 

Esto significa que si se cambia el array resultante, entonces el array original, en su segundo nivel, también sufrirá ese cambio. Por ejemplo:

```js
names = [["Ana", "Clara", "Juan"],["Luis", "Alba", "Pilar"]];
namesClone = [...names];

namesClone[1] = "Alberto"
namesClone[0][0] = "Alejandro"

console.log(names); // Consola: [["Alejandro", "Clara", "Juan"],["Luis", "Alba", "Pilar"]]
console.log(namesClone); // Consola: [["Alejandro", "Clara", "Juan"], "Alberto"]
```

## Clonar un array en Javascript usando JSON.parse y JSON.stringify

Utilizar los métodos JSON.parse y JSON.stringify para clonar un array en Javascript es la única forma de lograr un clon de multiples niveles de profundidad, sin preocuparse por el problema de la mutabilidad.

Ha esta técnica se le llama “deep copy” ó copia profunda, ya que no solo se copian las referencias a los objetos sino que se copian directamente los valores contenidos en el objeto original.

```js
names = [["Ana"], ["Clara"], ["Juan"]];
namesClone = JSON.parse(JSON.stringify(names));

namesClone[0][0] = "Alejandro"

console.log(names); // Consola: [["Ana"], ["Clara"], ["Juan"]]
console.log(namesClone); // Consola: [["Alejandro"], ["Clara"], ["Juan"]]
```

Para lograrlo, el método JSON.stringify convierte el array en un objeto de tipo string, y luego el método JSON.parse convierte esa string nuevamente en un array. Por lo que se pierden por completo las referencias a los niveles de profundidad y únicamente se conservan los valores del objeto.

## Clonar un array en Javascript usando map()

El método `map()` es básicamente la forma abstracta de crear una función, por lo que siempre devuelve el mismo valor que se utilizó como argumento a menos de que se le aplique una transformación en el proceso. 

 `f( x ) = x    para todo x`

Por ejemplo:

```js
names = ["Ana", "Clara", "Juan"];
namesClone = names.map((x) => x);
console.log(namesClone); // Consola: ["Ana", "Clara", "Juan"]
```

Este método puede ser bastante útil cuando deseamos realizar un clon de un array y modificar sus elementos al mismo tiempo. Para ello, es necesario aplicar una función a cada elemento durante el proceso de clonado.

Por ejemplo si queremos convertir en minúsculas cada palabra dentro del array:

```js
names = ["Ana", "Clara", "Juan"];
namesClone = names.map(x => x.toLowerCase());
console.log(namesClone); // Consola: ["Ana", "Clara", "Juan"]
```

## Clonar un array en Javascript usando slice()

El [método `slice()` en Javascript](https://4geeks.com/lesson/javascript-array-slice) funciona de una forma muy similar a los anteriores, excepto porque es posible indicarle la posición o índice inicial y el índice final de los objetos que queremos copiar dentro del array, de lo contrario si no le indicamos estos indices entonce realizará un clon incluyendo todos los objetos, por ejemplo:

```js
names = ["Ana", "Clara", "Juan"];
namesClone = names.slice()
console.log(namesClone); // Consola: ["Ana", "Clara", "Juan"]
```

Ahora si le indicamos los indices:

```js
names = ["Luis", "Alba", "Ana", "Pilar", "Clara", "Juan"];
namesClone = names.slice(0,3)
console.log(namesClone); // Consola: ["Luis", "Alba", "Ana"]
```

## Clonar un array en Javascript usando concat()

El método `concat()` es uno de los menos populares ya que está más enfocado en agregar elementos al array resultante, sin embargo también es posible utilizarlo para generar un clon del array original, simplemente tendremos que omitir el paso de agregar nuevos elementos al `concat()`, por ejemplo:

```js
names = ["Luis", "Alba", "Ana"];
namesClone = names.concat()
console.log(namesClone); // Consola: ["Luis", "Alba", "Ana"]
```

Ahora bien , si a demás de realizar la copia, también queremos agregar nuevos elementos al array clonado entonces podemos hacerlo de la siguiente forma:

```js
names = ["Luis", "Alba", "Ana"];
namesClone = names.concat(["Pilar", "Clara", "Juan"])
console.log(namesClone); // Consola: ["Luis", "Alba", "Ana", "Pilar", "Clara", "Juan"]
```

### Conclusión

Clonar un array en Javascript puede realizarse de muchas maneras por lo que elegír el método adecuado siempre va a depender de qué es lo que queremos hacer con el array clonado y de qué tan idependientes queremos que sean el array original y el array clonado y así evitar errores silenciosos dentro del código. Puedes leer sobre este tema y mucho mas en el blog de [4Geeks](https://4geeks.com/es/how-to).

---  
title: "¿Cómo clonar un arreglo o array en Javascript"
subtitle: "Aprende cómo clonar un array en Javascript con diferentes métodos. Descubre la importancia de clonar un array y cómo hacerlo de forma eficiente para evitar efectos secundarios no deseados."
tags: ["javascript", "arrays"]
authors: ["valerybriz"]

---

Clonar un [arreglo](https://4geeks.com/es/lesson/array-arreglo-en-javascript) en JavaScript es una operación muy común en diversos escenarios. En este artículo, aprenderemos cómo clonar un arreglo y algunos casos en los que esta técnica puede ser útil. Aquí tienes un ejemplo sencillo de cómo clonar un arreglo en JavaScript:

```js runable=true
let originalArray = [1, 2, 3, 4, 5];
let arrayCloned = [...originalArray];

originalArray = ["Hola", "Mundo!"];

console.log(originalArray); // salida: [ 'Hola', 'Mundo!' ]
console.log(arrayCloned); // salida: [ 1, 2, 3, 4, 5 ]
```

En este ejemplo, usamos el operador de propagación (`...arrayName`) para crear una copia superficial del `originalArray`, lo que genera un nuevo arreglo `arrayCloned` con los mismos elementos. Si después de clonar el arreglo cambias los valores del arreglo original, esto no afectará los valores del arreglo clonado porque apuntan a un espacio diferente en la memoria del sistema.

## ¿Qué es clonar un arreglo?

Clonar un arreglo significa crear un nuevo arreglo con los mismos elementos que el arreglo original, pero que sea un objeto diferente en memoria. De esta forma, si modificas el arreglo original, no afectará al arreglo clonado y viceversa. En JavaScript, los arreglos son tipos por referencia, por lo que, sin una clonación adecuada, modificar un arreglo puede afectar involuntariamente otras partes del código.

## Diferentes maneras de clonar un arreglo en JavaScript

### 1. Usando el operador de propagación

Probablemente, la mejor forma de clonar un arreglo en [JavaScript](https://4geeks.com/es/technology/javascript) sea utilizando el operador de propagación. Este crea un nuevo arreglo con los mismos valores que el arreglo original pero con un espacio diferente en la memoria, como se muestra en el siguiente ejemplo:

```js runable=true
let originalArray = [1, 2, 3, 4, 5];
let clonedArray = [...originalArray];

console.log(originalArray); // salida: [ 1, 2, 3, 4, 5 ]
console.log(clonedArray); // salida: [ 1, 2, 3, 4, 5 ]

originalArray = ["A", "B", "C", "D", "E"];

console.log(originalArray); // salida: [ 'A', 'B', 'C', 'D', 'E' ]
console.log(clonedArray); // salida: [ 1, 2, 3, 4, 5 ]
```

Aquí clonamos el Array `originalArray` utilizando el operador de propagación, lo que crea un nuevo Array `clonedArray` con los mismos valores que el Array original, pero con un espacio diferente en la memoria.

### 2. Usando el método `Array.from()`

Otra manera útil de clonar un arreglo es con el método `Array.from()`, que toma un arreglo o un objeto iterable y devuelve un nuevo arreglo.

```js runable=true
let originalArray = ["Manzana", "Banana", "Sandía", "Naranja", "Fresa"];
let clonedArray = Array.from(originalArray);

originalArray = ["A", "B", "C", "D", "E"];

console.log(originalArray); // salida: [ 'A', 'B', 'C', 'D', 'E' ]
console.log(clonedArray); // salida: [ 'Manzana', 'Banana', 'Sandía', 'Naranja', 'Fresa' ]
```

El método `Array.from()` crea un clon del Array original de manera similar al operador de propagación. Este método recibe un Array o un objeto iterable y devuelve un Array con los mismos valores.

### 3. Usando el método `concat()`

El método `concat()` también se puede utilizar para clonar un arreglo en JavaScript.

```js runable=true
let originalArray = ["Apple", "Windows", "Linux"];
let clonedArray = [].concat(originalArray);

originalArray = [3, 1, 4];

console.log(originalArray); // salida: [ 3, 1, 4 ]
console.log(clonedArray); // salida: [ 'Apple', 'Windows', 'Linux' ]
```

El método `concat()` concatena dos Arrays y devuelve uno nuevo. Al concatenar un Array vacío con el Array original, se crea una copia del Array original que puede almacenarse en una nueva variable.

### 4. Usando el método `slice()`

Otro método que puedes utilizar para crear una copia de un Array en JavaScript es el método [slice](https://4geeks.com/how-to/javascript-array-slice). A continuación, se muestra un ejemplo de cómo hacerlo:

```js runable=true
let originalArray = ["OpenAI", "Google", "Microsoft"];
let clonedArray = originalArray.slice();

originalArray = [2, 9, 9];

console.log(originalArray); // salida: [ 2, 9, 9 ]
console.log(clonedArray); // salida: [ 'OpenAI', 'Google', 'Microsoft' ]
```

El método `slice()` es un método que devuelve una copia de una porción del Array original. Este método recibe dos parámetros: el primero representa el índice en el que comenzará a cortar el Array, y el segundo representa el índice en el que terminará. Sin embargo, si no se especifica ningún parámetro, copiará todo el Array original y devolverá una copia con los mismos valores.

### 5. Usando `JSON.parse()`

Si necesitas hacer una copia profunda de un arreglo, una buena opción es usar `JSON.parse(JSON.stringify(originalArray))`.

```js runable=true
const originalArrayOne = [1, 2, 3, 4, 5, { name: "Thomas" }];
const originalArrayTwo = ["a", "b", "c", { name: "Andrew" }];

const shallowClone = [...originalArrayOne];
const deepClone = JSON.parse(JSON.stringify(originalArrayTwo));

// Modificando para mostrar cómo no afecta el arreglo original.
shallowClone[0] = "X";
shallowClone[5].name = "Jane";

deepClone[0] = 20;
deepClone[3].name = "John";

console.log("Copia superficial");
console.log(originalArrayOne); // salida: [ 1, 2, 3, 4, 5, { name: 'Jane' } ]
console.log(shallowClone); // salida: [ 'X', 2, 3, 4, 5, { name: 'Jane' } ]

console.log("\nCopia profunda");
console.log(originalArrayTwo); // salida: [ 'a', 'b', 'c', { name: 'Andrew' } ]
console.log(deepClone); // salida: [ 20, 'b', 'c', { name: 'John' } ]
```

Una copia superficial solo copia los valores primitivos (números, cadenas, booleanos, etc.), pero no copia los objetos ni los arreglos anidados. Si deseas crear una copia profunda del arreglo original que también copie los objetos o los arreglos anidados, puedes usar la sintaxis `JSON.parse(JSON.stringify(originalArray)`.

Como se muestra en el ejemplo anterior, si creas una copia superficial de un arreglo utilizando el operador de propagación o cualquiera de los otros métodos y cambias uno de los valores primitivos del arreglo clonado, no afectará al arreglo original, pero si cambias los valores de un objeto o un arreglo anidado, sí afectará al arreglo original. Este problema se puede resolver haciendo una copia profunda del arreglo; de esta manera, sin importar qué valores cambies en el arreglo clonado, nunca afectará al arreglo original y viceversa.

## ¿Cuándo clonar un arreglo en JavaScript?

1. **Funcionalidad de deshacer/rehacer**: En una aplicación de dibujo en línea donde los usuarios pueden dibujar formas en un lienzo. Clonar el arreglo que representa el estado del lienzo antes de cada modificación puede ser una buena idea, ya que permite al usuario deshacer o rehacer sus acciones de dibujo.
2. **Gestión de estado inmutable**: En una aplicación de panel de control financiero, donde los gráficos muestran información en tiempo real, clonar el arreglo que contiene los datos financieros antes de actualizar el estado asegura que los registros financieros históricos permanezcan sin cambios para fines de auditoría.
3. **Manejo de datos de formularios**: En un proceso de pago de comercio electrónico, cuando un usuario edita sus datos de envío, clonar el arreglo original que contiene la información de envío permite al sistema comparar la versión editada con la original para validación. Esto asegura un procesamiento preciso y seguro de los datos ingresados por el usuario.

Estos son solo algunos ejemplos, pero existen muchas situaciones diferentes en las que puede ser útil clonar un arreglo, ya sea por seguridad o por simplicidad al analizar o simplemente trabajar con datos.

## Conclusión

Clonar un arreglo puede ser muy útil en muchas situaciones diferentes, en este artículo cubrimos algunas de las formas más comunes de clonar un arreglo en JavaScript, una habilidad fundamental para una manipulación eficiente de datos. Comprender las sutilezas de la clonación de arreglos es crucial para evitar efectos secundarios no deseados en tu código. Profundiza en JavaScript y manipulación de arreglos explorando más artículos y recursos en nuestro blog. Si estás ansioso por avanzar en tus habilidades en desarrollo web, considera [registrarte gratis](https://4geeks.com/es/pricing) en 4Geeks.com.

¡Diviértete en tu viaje de desarrollo de software! 😀👋

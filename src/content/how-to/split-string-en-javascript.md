---
title: "¿Cómo usar el método Split de Strings Javascript?"
subtitle: "Aprende a utilizar el método split en JavaScript para dividir cadenas de texto en elementos individuales."
tags: ["javascript","string-concatenation"]
authors: ["danielmoret"]

---

El método `split()` en JavaScript nos permite dividir una cadena de texto en subcadenas. Veamos un ejemplo:

```js
let sentence = 'Aprendamos sobre el método split() en JS';

let sentenceArray = text.split(' ');

console.log(textArray); // output: [ 'Aprendamos', 'sobre', 'el', 'método', 'split()', 'en', 'JS' ]
```

Podemos ver que se utiliza el método `split()` sobre la variable `sentence`. En este caso al método `split()` se le pasa como argumento `' '`, lo que indica que la cadena de texto se dividirá en cada espacio en blanco que encuentre, el resultado se almacena en la variable `sentenceArray`, donde cada uno de sus elementos es una palabra de la cadena de texto `sentence`. Si te interesa conocer más sobre este tema tenemos un artículo de [strings en JavaScript](https://4geeks.com/es/lesson/strings-en-javascript) que explica en más detalle este tipo de dato.

Si todavía no tienes un dominio total sobre [cómo programar en JavaScript](https://4geeks.com/es/lesson/que-es-javascript-aprende-a-programar-en-javascript) o [para qué sirve Javascript](https://4geeks.com/es/lesson/para-que-sirve-javascript) te recomendamos leer sobre ello en el [Blog de 4Geeks](https://4geeks.com/).

## Sintaxis del método split en JavaScript

Como se mencionó anteriormente, el método `split()` nos permite dividir una cadena de texto en subcadenas, retornando un array de las subcadenas antes mencionadas. Este método puede recibir dos parámetros, el separador o delimitador y el límite, ambos opcionales. También es importante mencionar que el método `split()` no muta la cadena de texto original. En caso de no especificar ningún parámetro, el método split tomará como separador cada caracter.

```js
string.split(separator, limit)
```

- `separator`: específica donde se dividirá la cadena de texto, este puede ser un caracter, una expresión regular o una cadena de texto. (Opcional)
- `limit`: número entero que limita el máximo de divisiones, el `Array` devuelto por el método `split()`, solo contendrá la cantidad de elementos indicadas en el `limit`. (Opcional)

A continuación, veamos un ejemplo de cómo utilizar los dos parámetros que recibe el método `split()`:

```js
const userLanguages = 'JavaScript, Python, Java, C++, Ruby';
const topThreeLanguages = userLanguages.split(', ', 3);

console.log(topThreeLanguages); // output: [ 'JavaScript', 'Python', 'Java' ]
```

En este ejemplo, podemos observar como funcionan los parámetros que recibe el método `split()`, el `separator` utilizado es `', '` (coma seguida de un espacio), lo que significa que cada vez que se encuentre este separador, se dividirá la cadena. Además, se utiliza como `limit` el número 3, para limitar el resultado a los primeros 3 elementos del arreglo.

## Ejemplos de uso del método split() en javaScript

### Dividir una cadena sin especificar un separador

```js
let sentence = 'El método split() es muy útil.'
let sentenceArray = sentence.split()
console.log(sentenceArray) // output: [ 'El método split() es muy útil.' ]
```

Si al método `split()` no se le proporciona ningún argumento como separador, retornará un `Array` que contendrá la cadena de texto, en este caso `sentence` como único elemento.

### Dividir una cadena utilizando un caracter específico

```js
let url = 'https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/split';
let path = url.split('/');
console.log(path); //output: [ 'https:', '', 'developer.mozilla.org', 'es', 'docs', 'Web', 'JavaScript', 'Reference', 'Global_Objects', 'String', 'split' ]
```

En este ejemplo, podemos observar que haciendo uso del método `split()` y utilizando como separador el caracter `/`, nos permite dividir una url en cada una de sus partes.

### Dividir una cadena en cada uno de los caracteres individuales

```js
let sentence = 'El murcielago come naranjas y uvas rojas en la oscuridad';
let characters = sentence.split(''); // Convertir la cadena a minúsculas
let vowels = ['a', 'e', 'i', 'o', 'u'];
let vowelCount = 0;

characters.forEach((character) => {
  if (vowels.includes(character.toLowerCase())) {
    vowelCount++;
  }
})

console.log('El número de vocales en la cadena es: ' + vowelCount); // output:  El número de vocales en la cadena es: 21.
```

En este ejemplo, vemos como podemos utilizar el método `split()` para contar la cantidad de caracteres de una cadena de texto, en este caso en específico para saber cuantas vocales tiene una oración, para ello le pasamos como argumento separador `''` (comillas vacías), lo que dividirá la variable `sentence` en cada caracter, creando un `Array` de caracteres. Luego utilizando el [método forEach()](https://4geeks.com/es/how-to/metodo-foreach-javascript) , recorremos el array `characters` y verificamos si el `character` actual es una vocal o no, incrementando la variable `vowelCount` en 1 de ser asi.

### Dividir una cadena utilizando una expresión regular

```js
let dates = '2022-01-01/2022-12-31/2023-01-01/2023-12-31';
let resultDates = dates.split(/[-/]/);
console.log(resultDates); // output: ['2022', '01', '01','2022', '12', '31','2023', '01', '01','2023', '12', '31']
```

En este ejemplo, se observa como se puede utilizar el método `split()` pasándole como argumento separador una expresión regular, la expresión regular `/[-/]/`, dividirá la cadena donde encuentre un guión o una barra diagonal. Este código puede ser útil para análisis de fechas, donde el formato sea `año-mes-día`.

### Dividir una cadena en líneas separadas por saltos de línea

```js
let scientists = `Isaac Newton,Reino Unido,1642
Marie Curie,Polonia,1867
Nikola Tesla,Croacia,1856`;
let scientistsArray = scientists.split('\n');
console.log(scientistsArray); // output: ['Isaac Newton,Reino Unido,1642','Marie Curie,Polonia,1867','Nikola Tesla,Croacia,1856']
```

En ocasiones, podemos tener archivos con información que está separada por saltos de línea, en estos casos pudiéramos hacer uso del método `split()` y dividir esa información en un `Array`, donde cada uno de sus elementos representa cada línea del archivo, permitiendo que la información pueda ser manipulada de manera más sencilla.

### Dividir una cadena utilizando desestructuración de un arreglo

```js
let person = 'Miguel Angel, 20, 1.80';
let [fullName, age, height] = person.split(',');

console.log(fullName, age, height);
```

En este ejemplo, podemos observar si tienes una cadena de texto con elementos separados por un carácter específico, en este caso `','` y deseas extraer esos elementos en variables separadas para realizar alguna operación o manipularlos de forma individual, puede hacer uso de la [desestructuración](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment).

Dominar el método `split()` te abrirá un abanico de posibilidades a la hora de manipular cadenas de texto, como hemos podido observar en el artículo, es una herramienta muy útil cuando necesitamos dividir una cadena de texto en partes más pequeñas. Su versatilidad nos permite abordar una amplia variedad de casos de uso, como separar una cadena por caracteres específicos, cada vez que hay un salto de línea en la cadena de texto e incluso utilizar expresiones regulares como delimitador.

El método de Javascript `substring()` es utilizado para devolver únicamente una parte de la cadena original partiendo desde el índice inicial establecido y continua hasta el final de la cadena. Opcionalmente se puede especificar el índice final como parámetro.

```js
let myString = "4geeks Academy";

console.log(myString.substring(7)); //Consola: Academy

console.log(myString.substring(0, 6)); // Consola: 4geeks

```

Usualmente cuando manejamos variables que contienen texto en Javascript, tenemos la necesidad de aplicarle distintas transformaciones o métodos hasta lograr el resultado que esperamos. `substring()` es uno de los métodos más utilizados debido a su flexibilidad al momento de manipular o extraer porciones específicas del texto sin necesidad de modificar la variable original. En este artículo aprenderemos la forma correcta para invocar el método y los detalles que debemos tomar en cuenta para obtener el resultado que necesitamos.

## Utilizando el método de Javascript Substring

El método `substring()` es inherente de la clase String, por lo que para poder invocarlo debemos hacerlo necesariamente desde un objeto de tipo String.

### Sintaxis de Javascript substring()

```js
myString.substring(indiceInicial)
ó
myString.substring(indiceInicial, indiceFinal)

```

### Donde:

`indiceInicial` : Es la posición inicial de la porción que se desea extraer

`indiceFinal` : Es la posición final de la porción que se desea extraer. Este parametro es opcional.

```js
let myString = "4geeks Academy"; 

let indiceInicial = 0
let indiceFinal = 6
  
let result = myString.substring(indiceInicial, indiceFinal); 
  
console.log(result); // Consola: 4geeks

```

Algo importante a tomar en cuenta al momento de utilizar este método es que **el parametro indiceFinal es "exclusivo"** lo cual significa que debemos utilizar el ídice del último caracter que queremos incluir en la **substring más 1**.

En el siguiente ejemplo podremos notar como esto puede afectar el resultado, si tomamos en cuenta que los indices de la string `"4geeks"` llegan hasta el 5, donde el caracter `"4"` se ubica en el índice 0 y el último caracter `"s"` se ubica en el índice 5 quedando de la siguiente forma:

```js
let myString = "4geeks"; 

// Entonces si utilizamos 5 como indiceFinal obtendremos:
console.log(myString.substring(1, 5)); // Consola: geek

//Mientras que si le sumamos: 5 + 1 el resultado será:
console.log(myString.substring(1, 6)); // Consola: geeks

```

## Utilizando `substring()` de Javascript con la propiedad `length`

La propiedad length, que tienen todos los objetos de tipo String, puede ser de mucha utilidad cuando estamos aplicando el método `substring()` ya que no necesitamos saber cual es la cantidad de posiciones entre el inicio de la cadena y la posición donde queremos iniciar la extracción, sino únicamente la cantidad de caracteres que queremos extraer al final de la cadena.

Por ejemplo, si únicamente me interesan los últimos 6 caracteres :

```js
let firstString = "Academia 4geeks";
let secondString = "Es una excelente academia 4geeks";
let thirdString = "Ven a aprender en 4geeks";

let indiceInicial = 6;

console.log(firstString.substring(firstString.length - indiceInicial)); // Consola: 4geeks

console.log(secondString.substring(secondString.length - indiceInicial)); // Consola: 4geeks

console.log(thirdString.substring(thirdString.length - indiceInicial)); // Consola: 4geeks

```


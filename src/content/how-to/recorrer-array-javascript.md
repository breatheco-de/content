# Recorrer Arrays Javascript

## Arrays y for loops

Los _Arrays_ o arrays en Javascript ayudan a agrupar múltiples elementos de manera secuencial y proporcionan maneras de acceder a la información en base a su posición, iniciando desde el 0. 
Los _for loops_ son una herramienta particularmente útil para realizar acciones sobre valores almacenados en un array. Los _for loops_ permiten programar bloques de código que se ejecutan de manera iterativa.
Un ejemplo sencillo para visualizar estos dos conceptos en conjunto, podemos imaginarnos un array llamada `years` que contiene años donde ha ocurrido una operación.

```js
const years = [2018, 2019, 2020, 2021, 2022];

for (let i = 0; i < years.length; i++) {
    console.log(years[i]);
}

// Output:
// 2018
// 2019
// 2020
// 2021
// 2022
```
Este código imprime en la consola todos los valores guardados adentro de `years`.

## Funciones para recorrer Arrays

Javascript provee muchas herramientas para recorrer arrays, optimizando acciones sobre los mismos, a continuación, se mencionan los mas comunes y versátiles.

### For Loop

Es el mas sencillo y genérico. Como se menciona anteriormente, permite ejecutar un bloque de código un numero determinado de veces. La sintaxis básica de un _for loop_ es el siguiente:

```js
for (inicialización; condición; iteración) {
    código a ejecutar; 
}
```

El for loop tiene 4 elementos principales:

1. Inicialización: se especifica la variable que controla la operación del for.
2. Condición: la condición controla cuando se deja de ejecutar el for.
3. Iteración: determina la modificación sobre la variable control para controlar el flujo.
4. Código: se programa el código que se va a ejecutar cada vez que la condición se siga cumpliendo.

En este ejemplo se pondrá todo en práctica:

Se tienen unos números guardados dentro de un array `numeros` y se quiere sumar 1 a todos los elementos dentro del array y luego imprimirlos a la consola 

```js 
let numeros = [5,8,13,6,9]

for (let index = 0; index < numeros.length; index++) {
    console.log(numeros[index]+1)
}

//output
//6
//9
//14
//7
//10
```

### For In

For… In se utiliza principalmente para iterar sobre las propiedades enumerables de un objeto o arreglo. 

```js
const marcas = ['apple', 'google', 'meta'];

for (let prop in vehiculo) {
  console.log(prop + ': ' + marcas [prop]);
}

//output
//"0: apple"
//"1: google"
//"2: meta"
```

### For Of
Es muy similar al for loop, sin embargo, es más amigable en su sintaxis, sin tener que lidiar con la inicialización, condiciones o iteraciones. For of itera sobre cada elemento iterable uno por uno, y ejecuta el código dentro del bloque. Por ejemplo, si queremos imprimir en consola los elementos de un array, podemos hacer lo siguiente: 
```js
const marcas = ['apple', 'google', 'meta'];
for (let marca of marcas) {
  console.log(marca);
}

//output
//"apple"
//"google"
//"meta"

```


### While
While es muy similar a un for, con un detalle muy importante. While se controla mediante una condición únicamente. Es decir, mientras la condición se cumpla el while nunca deja de correr.
```js
let contador = 10
while (contador > 0) {
  console.log(contador);
  contador--;
}

//output
//10
//9
//8
//7
//6
//5
//4
//3
//2
//1
```
Esto hace que se pueda utilizar hasta lograr encontrar un valor o programarlo para una condición muy específica y dejar de correr hasta entonces, sin pensar en contadores necesariamente.

Existe una variación llamada do…while, que funcionalmente es igual a while, solo que se asegura que el bloque de código se ejecute al menos 1 vez. Tomando el ejemplo anterior y modificando la sintaxis se utiliza de la siguiente manera: 
```js
let contador = 10
do {
  console.log(contador);
  contador--;
} while (contador > 0);

//output
//10
//9
//8
//7
//6
//5
//4
//3
//2
//1
```

### Map
Map es un método que se utiliza para transformar un arreglo existente, guardándolo en un nuevo arreglo. Se itera sobre cada elemento dentro del arreglo, ejecutando una función para realizar la transformación.
```js
const marcas = ['apple', 'google', 'meta'];
const marcas_descritas = marcas.map(function(marca) {
  return `${marca} es increíble`
});

console.log(marcas_descritas)

//output
//["apple es increíble", "google es increíble", "meta es increíble"]
```

### For Each
For each es un metodo que toma como base un array y para cada elemento existente dentro del array se ejecuta una función. Dentro de la función se pasa como parámetro el elemento del array.
```js
const marcas = ['apple', 'google', 'meta'];
marcas.forEach(function(marca) {
  console.log(marca)
});

//output
//"apple"
//"google"
//"meta"
```

## Ejemplos de uso
### Modificar precios debido a inflación
Se tiene un sitio que muestra el menú de un restaurante junto con sus precios. Todos los precios se guardan en un array llamado `precios`, se necesita incrementar los precios de todos los productos por un 10% debido a inflación. Para este ejemplo la herramienta ideal es map, ya que permite realizar modificaciones sobre todos los elementos del arreglo, ahorrando el trabajo de hacerlo manual.

```js
const precios = [20.00, 30.00, 28.00, 36.00, 23.00, 55.00]

const precios_ajustados = precios.map(function(precio){
  return precio*1.1
})

console.log(precios_ajustados)

//output
//[22, 33, 30.80, 39.6, 25.3, 60.50]
```

### Sumar valores positivos
Se quiere permitir a un usuario sumar números positivos, sin embargo, en caso que el usuario introduzca un numero negativo, se toma como terminada la operación y se devuelve el resultado. Para lograr esto, se utiliza un while loop principalmente por que no se tiene un numero definido de iteraciones a realizar.
```js
let suma = 0;
let numero = parseInt(prompt('Ingrese un número: '));

while(numero >= 0) {
    suma += numero;
    numero = parseInt(prompt('Ingrese un número: '));
}

console.log(`La suma es ${suma}.`);

//output
//Para este ejemplo imaginemos que el usuario ingresa 15 y -6
//la suma es 15
```

Existen muchas maneras de utilizar estas herramientas iterativas en Javascript, desde recorrer arrays hasta objetos y para el caso particular de los while loops, repetir un bloque de código hasta que se cumpla una condición deseada.

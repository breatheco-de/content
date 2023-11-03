---
subtitle: "Las funciones no son opcionales - Es probable que sean la característica más utilizada en cualquier lenguaje de programación. Te permiten separar tu código en miniprogramas más pequeños, donde cada uno se ocupa de lo suyo. ¡Divide y conquistarás!"
title: "Trabajando con Funciones"
cover_local: "../../assets/images/4cc6fa0b-2530-4052-aa7e-8dac03788ac3.png"
textColor: "white"
date: "2020-10-19T16:36:31+00:00"
tags: ["javascript","functions"]
status: "published"

---

Dominar el uso de las funciones es una de las 5 habilidades fundamentales para construir algoritmos:

1. Variables.
2. Condicionales.
3. Listas.
4. Bucles.
5. `Funciones`.

## ¿Qué son las Funciones?

Básicamente, una función es un montón de código envuelto entre llaves que puedes ejecutar en cualquier momento cada vez que quieras. Por ejemplo:

```javascript 
//el nombre de la función es "multiply" y recibe 2 parámetros: a & b
function multiply(a, b) {
    //la función devuelve la multiplicación de esos 2 parámetros
   return a * b;
}
```

+ **Cada función debe tener un propósito** (un objetivo) (como nuestra función "multiplicar"). El propósito de la función es calcular la multiplicación entre dos números dados.
+ **Debe tener un nombre único.** En este caso particular, nuestra función se llama "multiply", que es un gran nombre porque sabes exactamente de qué se trata la función, es explícito.
+ **Debe devolver algo.** De forma predeterminada, en javascript, todas las funciones devuelven "undefined", pero debes reemplazarlo y siempre devolver algo útil. En este ejemplo, queremos devolver el resultado de una multiplicación de a & b.
+ **Las funciones pueden tener parámetros.** Un "parámetro" es una variable que la función puede recibir al principio de su código (como a & b en nuestro ejemplo).

La idea es tener una librería con cientos de funciones y usarlas como nos plazca, declaras todas tus funciones y luego las puedes usar y reutilizar todo el tiempo.

```javascript
let resultOfMultiplication = multiply(2,4);
// resultOfMultiplication será 8
```

## Pero, ¿Por qué usar Funciones en lugar de simplemente hacer todo en una gran fragmento de código?

La programación es muy abstracta y sucede mucho que no tienes idea de lo que escribiste ayer. Antes de que existieran las funciones, los algoritmos eran esta enorme serie interminable de líneas de código donde los desarrolladores tenían dificultades y se perderían. Es difícil para tu cerebro seguir un procedimiento/algoritmo de gran longitud; mientras más líneas de código, más abstracto se vuelve.

Al utilizar funciones tienes las siguientes ventajas:

+ Dividir y conquistar: divide tu algoritmo en sub-algoritmos más pequeños y concéntrate en un problema a la vez.
+ Reutiliza tu código llamando a la función varias veces, reduciendo así drásticamente la longitud de tu código.
+ Organiza tu código: los nombres de las funciones te dirán qué hace esa parte del código, puede tener todas las funciones en un archivo separado y reutilizarlo en todos sus desarrollos futuros.

Si lo piensas bien, las funciones son equivalentes a los libros. Almacenan conocimiento y la forma de hacer las cosas y en futuros desarrollos simplemente los reutilizas en lugar de tener que resolver todo de nuevo.

## Alcance de la Función

Todas las funciones deben comenzar y terminar en algún lugar, esto se llama **el alcance de la función**. Puedes delimitar el alcance usando llaves de esta forma:

```javascript 

//esta parte del código está FUERA de la función "multiply"

function multiply(a, b) {

    //esta parte del código está DENTRO de mi función "multiply" 
   
   return a * b;

    //esta parte del código está DENTRO de mi función pero nunca se ejecutará porque se encuentra DESPUÉS del return
}

//esta parte del código está FUERA de la función "multiply"
```

Cualquier variable que se declare dentro de la función, no estará disponible fuera de ella.

```javascript
function multiply(a, b) {

   let myVariable = 'hello';
   
   return a * b;
}

console.log(myVariable); 
// este console.log no funcionará, generará un error, porque myVariable está declarada dentro de la función "multiply", por lo tanto no está disponible fuera.

```

> ☝️ Es muy importante recordar que una vez que use la instrucción `return`, la función dejará de ejecutarse, si hay algún código después de esa instrucción, nunca se ejecutará.

## Funciones Anónimas

Puedes declarar funciones sin nombres, pero solo si las almacenas en variables, de esta manera:

```javascript
const multiply = function(a, b) {
   return a * b;
}
```

## Llamar una Función 

La única forma de llamar (usar) una función es poner paréntesis después de nombrar la función:

```javascript
//Así es como se llama a una función sin parámetros.
multiply();

//Así es como llamas a una función con parámetros.
multiply(<primer parámetro>,<segundo parámetro>);

//por ejemplo, para multiplicar 3 por 9
multiply(3,9);
```

Recuerda asignarle a la función los parámetros que debe recibir. En nuestro ejemplo, la función de multiplicación fue declarada pidiendo que se multipliquen dos números. Juega con el siguiente ejemplo como quieras:

<iframe height="400px" width="100%" src="https://repl.it/@4GeeksAcademy/Calling-Functions-Example?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

## Llamada Anidada

Puedes combinar funciones como quieras y tener llamadas encadenadas como esta:

```javascript 
function sum(a,b){
   return a+b;
}
function multiply(a,b){
   return a*b;
}

console.log(multiply(sum(3,5),sum(1,1)));

// Las ejecuciones van de adentro hacia afuera. 
// Primero, se calculará la suma de 3 + 5 y 1 + 1. 
// A continuación, se multiplicarán sus respectivos resultados. 
let firstSum = sum(3,5);
let secondSum = sum(1,1);
console.log(multiply(firstSum, secondSum));
```

> ☝️ [Ver este ejemplo en vivo en replit](https://repl.it/@4GeeksAcademy/Nested-Function-Calling)

## Veamos un ejemplo:

El siguiente código tiene 3 funciones declaradas:

*function <span style="color:purple">getAverage</span>(**array: ages**){*
     ...
*}*

*function <span style="color:purple">getYoungest</span>(**array: ages**){*
     ...
*}*

*function <span style="color:purple">getPersonInfo</span>(**string: name**){*
     ...
*}*

Como puedes ver, los nombres de las funciones son bastante específicos sobre lo que hacen las funciones, así como los parámetros asignados a ellas.

Aqui podemos ver el ejemplo más en detalle:

<iframe height="400px" width="100%" src="https://repl.it/@4GeeksAcademy/FunctionsExample?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

Otras cosas importantes a tener en cuenta:

+ Estamos llamando a la función `getPersonInfo` dos veces, sin usar funciones tendríamos que usar más código porque no tendríamos ninguna opción para reutilizar la función.
+ La función `getAverage` obtiene el valor promedio en un array dado ¡No sabe nada más y eso es genial! Al separar su código en pequeñas funciones, puede concentrarse en una cosa a la vez.

---
title: "¿Qué es JavaScript? Aprende a Programar en JavaScript"
subtitle: "Aprende qué es JavaScript, todos están hablando de ello y, probablemente, ya sepas que es hora de aprender a programar en JavaScript para llevar las cosas al siguiente nivel."
cover_local: "../../assets/images/4cc6fa0b-2530-4052-aa7e-8dac03788ac3.png"
textColor: "white"
date: "2020-10-19T16:36:31+00:00"
tags: ["javascript","variables"]
status: "published"

---

## ¿Qué es programar?

**La programación no es HTML, CSS o Position y Display...** Esos lenguajes no fueron diseñados para desarrolladores, son la única forma en que tenemos que renderizar cosas en un navegador.

**La Programación es hacer *que el computador* "obedezca"...**

Todo el mundo usa los computadores por diferentes razones. Algunos computadores se crean para ayudar a las personas en su oficina (como los computadores personales), otros para mantener una habitación a una temperatura específica (como [NEST](https://nest.com/es/)), otros están hechos para caminar en Marte, etc.

No importa para qué está hecho el computador, la base de su existencia es la misma: seguir los comandos. En este capítulo, aprenderás 5 cosas básicas que necesitarás para entender cualquier computador moderno a través del código.

## Variables

<iframe width="830" height="467" src="https://www.youtube.com/embed/Q-eob0WBKs0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<div align="right"><small><a href="https://www.youtube.com/embed/Q-eob0WBKs0">Haz clic aquí para abrir el video en una nueva ventana</a></small></div>

Las variables no son un concepto nuevo, cualquiera que sepa matemáticas está familiarizado con el concepto de variables.

Una variable es un contenedor en el que se puede almacenar cualquier dato. Por ejemplo, puedes tener la siguiente variable:

```javascript
let age = 24;
```

![what is javascript](https://github.com/breatheco-de/content/blob/master/src/assets/images/ecb49b67-f513-49b3-bd4a-dd7cc44e9bce.gif?raw=true)

Prácticamente con cualquier lenguaje de programación, puedes crear tantas variables como desees o necesites. Para comenzar, debes **declarar el nombre de esa variable** usando el término: `var` seguido de un nombre _único_ (relativo al documento/proyecto).

El **nombre de la variable** es la forma más efectiva que tenemos de describir el contenido de la variable, así que úsalo sabiamente. Es importante elegir un nombre que te indique claramente (a ti y los otros programadores) los datos que se almacenan en la variable. Si elegimos un nombre malo o ambiguo, nuestro código será casi imposible de entender, y se volverá inutilizable. Por ejemplo, digamos que cambiamos el nombre de nuestra variable "age" a `a`, sería:

```javascript
let a = 24 ;
```

Como puedes ver arriba, el nuevo nombre de la variable no nos dice nada sobre los datos que se almacenan y por qué los estamos utilizando.

La elección del nombre para tu variable realmente importa, por lo que por favor no uses nombres genéricos. ¡Sé descriptivo! Un nombre vago hará que sea difícil comprender el propósito de la variable, especialmente para otros programadores (incluido tu futuro yo).

## Asignando un valor a las variables


Como desarrolladores, podemos establecer el valor de una variable en cualquier momento utilizando el operador `=`. No es necesario establecer un valor cuando declaras una variable por primera vez. Puedes establecer, o restablecer (reasignar) el valor tantas veces como quieras, cuando lo quieras. El valor siempre será el último que establezcas. A continuación se muestran algunos ejemplos sobre cómo establecer valores en variables:

```javascript
let a = 24;
  a = 25;
  a = 80;

let b ;
  b = 9 ;
  b = 108 ;
```

### `var` vs.  `let`  vs. `const`

Como aprendimos anteriormente, usamos la palabra clave `var` para declarar una variable. Hay otras dos palabras claves que también podemos usar para declarar variables: **const & let**. Las principales diferencias entre estos tipos de variables tienen que ver con el alcance.

**Const**: Esta palabra clave se utiliza cuando el valor permanece constante durante toda la vida del script. El valor de la variable declarada con esta palabra clave nunca se puede cambiar. Si intentas cambiarlo, se producirá un error.

**Let**: Los valores solo están limitados al alcance del bloque de código (cualquier cosa entre llaves) en el que se declara. Si una función tiene más de un bloque de código, la variable se considerará una variable diferente en cada bloque.

**Var**: Las variables declaradas con `var` dentro de una función solo son accesibles dentro de esa misma función. Esto significa que la variable se mantendrá  durante toda la función, incluso si hay más de un bloque de código en la función.
Si declaras una variable con `var` fuera de cualquier función, se convierte en una variable global. Se puede acceder a ella desde cualquier lugar en tu código.

> :link: [Lee más sobre `var`, `let` y `const`](http://wesbos.com/let-vs-const/)

Los valores de las variables están sujetos a cambios en el tiempo. Para recuperar un valor variable, puede imprimir el valor en la pantalla en cualquier momento. Cada lenguaje de programación tiene sus propios métodos para imprimir; así es como lo haces en JavaScript:

```js runable=true
var age = 24;
age = 30;

// Para imprimir una variable en la consola escribimos console.log
console.log(age);

// o escribimos document.write si estamos en un website
// document.write(age);
```



## Tipos de Datos

Las variables pueden tener diferentes tipos de valores. Algunos de ellos están disponibles solo en lenguajes de programación específicos, pero casi todos tienen los siguientes tipos:

|**Data-Type**   |**Posibles Valores**   |**Descripción**   |
|:---------------|:--------------------|:-----------------|
|Booleano         |True \| False         |Los booleanos están destinados para operaciones lógicas. Si le preguntas a una computadora algo como: "¿X es igual a 3?" Responderá con un booleano (verdadero o falso).   |
|String       |Cualquier serie de caracteres     |Los strings son la única forma en que tenemos que almacenar palabras (series de caracteres). Nota: los strings deben estar encerrados entre comillas.  |
|Número    |Solo números     |Números enteros, números negativos, números decimales, etc. Todos los tipos posibles de números. <br> Nota: Si incluye un número entre comillas, JavaScript lo tratará como una cadena (string). |
|Undefined     |El vacío     |Cuando una variable no tiene un valor asignado, queda indefinida.   |
|Array    |Una lista con cualquier tipo de valores   |Una sucesión de cualquier tipo de valores. Pueden ser tipos mixtos de valores; por ejemplo: [2, 3, ‘Word’, 2, 1, null, 232, 5, 3, 23, 234, 5, ‘hello’].     |
|Objetos    |Cualquier objeto    |Puedes crear tus propios tipos de datos con operaciones más complejas. Hablaremos sobre este tema a mayor profundidad más adelante.  |
|Null    |Solo null    |Se utiliza para especificar cuándo la base de datos o cualquier otra función no devuelve nada.   |

```js runable=true
var myFirstBoolean = true;//Boolean
var myFirstInteger = 35;//Number
var myFirstFloat = 2323.4545; //Number (with decimals)

var myFirstString = 'Hello World'; //String
var myFirstObject = {'name' : 'Ramon', 'Age': 32}; //Object with 2 properties
var myFirstArray = [23,'Hello',8.54,null,544]; //Array of 5 items
var myFirstNull = null;//Null
var myFirstUndefined; //Undefined

console.log(myFirstBoolean);

console.log(myFirstInteger);
console.log(myFirstFloat);
console.log(myFirstFloat+myFirstInteger);

console.log(myFirstObject);
console.log(myFirstString);
console.log(myFirstString+'...'+myFirstObject.name);//String concatenation

console.log(myFirstArray);
console.log(myFirstNull);
console.log(myFirstUndefined);
```

## Operaciones

¿Qué operaciones puedo hacer con las variables? Dependiendo del tipo de dato tienes varias posibilidades:

+ Los números son fáciles - puedes hacer cualquier operación matemática que desees.
+ Los strings se pueden concatenar (fusionar), dividir, convertir a mayúsculas o minúsculas, etc.
+ No se puede hacer mucho con los tipos de datos nulos, booleanos o indefinidos.
+ Hablaremos de Arrays y Objetos en otra sección. Requieren de mucha más atención.

## Funciones

Las funciones son fragmentos de código que se pueden reutilizar varias veces durante el tiempo de ejecución, independiente de su posición en el código. Hay cientos de razones para usar funciones, pero aquí están las 2 más importantes:

+ Dividir para conquistar: siempre es más fácil dividir tus problemas en varios problemas más pequeños. Esto se convertirá en tu mayor desafío a la hora de resolver problemas complejos. Las funciones serán tus mejores herramientas para la abstracción.
+ Reutilización: cualquier desarrollo normal tomará al menos 5,000 líneas de código. Es redundante e ineficiente seguir escribiendo el mismo código una y otra vez.

## Declarar una Función

Para declarar una función en JavaScript, debes comenzar a utilizar la palabra `function` seguida del nombre que le quieres dar a esa función.

Luego debes especificar los parámetros (entradas) que tendrá la función entre paréntesis.

Luego, abrirás una llave y escribirás el código que tu función siempre debe realizar. Una vez que hayas terminado, cierra la llave y ahora tu función está lista para ser utilizada.

**Nota:** Para retornar algo, usa la palabra `return` en cualquier momento dentro del contenido de tu función (dentro de las llaves).

![learn to code in javascript](https://github.com/breatheco-de/content/blob/master/src/assets/images/0c4fa020-02f6-4ec0-bfeb-a6292145a153.gif?raw=true)

```javascript
function multiplicar (param1, param2) {
    return (param1 * param2);
}
```

## Parámetros y alcance de la Función

El alcance de una variable determina dónde está disponible esa variable para ser utilizada. Hay dos tipos principales de alcances:

### Variables Locales

Una variable local solo está disponible dentro del alcance de las llaves más cercanas. Por ejemplo, las variables que se pasan como parámetros a funciones, solo están disponibles dentro del contenido de esa función en particular.

### Variables Globales

Si declaras una variable al comienzo de tu código, estará disponible a lo largo de todo el código, incluso durante el contenido de cualquier función en particular.

```js runable=true
var age = 24;

function printAge(){
  // La variable age fue declarada afuera de la funcion
  // pero igualmente esta disponible adentro
  console.log(age);
}

printAge();
```

## Operaciones lógicas

Los computadores piensan todo en blanco o negro. Todo es verdadero o falso. Todas las decisiones en un computador se reducen a un simple **booleano**. Puedes preparar un computador para resolver problemas particulares si escribes un código que haga las preguntas adecuadas para resolver ese problema.

Por ejemplo, si quiero un computador para dar dulces solo a niños mayores de 13 años de edad, puedo indicarle al computador que pregunte:

**¿La edad de este niño es mayor de 13 años? ¿Sí o no?**

**En JavaScript, puedes indicarle a la computadora que realice las siguientes operaciones lógicas:**

|**Operación**  |**Sintaxis**   |**Ejemplos**   |
|:--------------|:--------------|:--------------|
|Igual a     |==             |Es 5 == 5? True!<br>Es 5 == 4? False!<br>Es 5 == '5'? True!    |
|No Igual a    |!=             |Es 5 != 5? False!<br>Es 5 != '5'? False!<br>Es 1 != 'Hello' True!   |
|Mayor que   |>              |Es 5 > 5? False!<br>Es 6 > 3? True!    |
|Menor que    |<              |Es 6 < 12? True            |
|Mayor o igual |>=             |Es 6 <= 6? True<br>Es 3 <= 6? True    |
|Menor o igual  |<=            |Tienes la idea 🙂       |

Para crear operaciones realmente útiles, puedes combinar varias operaciones en la misma pregunta usando AND, OR y NOT (y, o y no respectivamente).

Puedes agrupar las operaciones lógicas entre paréntesis y también usar paréntesis anidados para realizar varias operaciones al mismo tiempo.

|**Operación**   |**Sintaxis**   |**Ejemplos**   |
|:---------------|:--------------|:--------------|
|AND             |&&             |Con AND, ambos lados TIENEN QUE SER TRUE/VERDADERO para que todo se convierta en verdadero.<br>Es (5 == 5 && 3 > 1) ? True!<br>Es ('Ramon' == 'Pedro' && 2 == 2) ? False!    |
|OR     |\|\|     |Con OR, si cualquiera de las operaciones devuelve TRUE, entonces el resultado final será TRUE.<br>Es ('Oscar' != 'Maria' OR 2 != 2)? True!<br>Es (5 == '5' AND 'Ramon' != 'Pedro') OR (2 == 2)? True!   |
|NOT     |!     |NOT será exactamente lo contrario del resultado del operador lógico:<br>Es !(5 > 5)? True!<br>Is !(True)? False!    |

## Controla el Flujo de Tu Código

Bien, ¡ahora es cuando todo empieza a ponerse divertido! Para controlar el flujo de tu aplicación, tienes varias opciones y las utilizarás cada día. Por lo tanto, debes sentirte cómodo usándolas.

### If…else…

La primera herramienta que tienes es el condicional `if…else`. Es muy fácil. Puedes decirle a la computadora que omita cualquier parte de tu código dependiendo del valor actual de tus variables.

La instrucción `if` te permite ejecutar un fragmento de código si se cumplen ciertas condiciones (o si son verdaderas). La declaración "else" ejecutará un fragmento de código alternativo en caso de que la condición sea falsa.

```javascript
if (number > 18) {
    document.write("Hola");
} else {
     document.write("Adiós");
}
```

## Switch


Similar a if…else… pero un poco más organizado. Aquí especificarás todos los escenarios de casos posibles, incluido el "escenario predeterminado" que ocurrirá si no sucede ninguno de los otros escenarios.

```js runable=true
var weekday = 'monday';

switch(weekday)
{
	case "monday":
		console.log('Its going to be a long week');
	break;
	case "friday":
		console.log('Party time!');
	break;
	default:
		console.log('Just another boring day....');
	break;
}
```

> Usa `switch` en lugar de `if` cuando: <br><br> • Estés comparando varias condiciones posibles de una expresión y la expresión en sí no es trivial.<br>• Si tienes múltiples valores que pueden requerir el mismo código. <br> • Si tienes algunos valores que requerirán esencialmente toda la ejecución de otro valor, además de unas pocas declaraciones. <br><br> Utiliza `if` en lugar de `switch` cuando: <br><br> • Deseas probar la veracidad de una expresión. <br> • Solo tienes una única prueba afirmativa. <br> • Necesitas evaluar diferentes expresiones para cada rama.


## While


Es posible hacer un bucle de un segmento de su código tantas veces como desees o necesites. Los bucles son una de las herramientas más importantes para los desarrolladores en estos días.

Imagina que estás dentro de un ascensor: el ascensor debe girar en bucle por los pisos hasta que alcance el piso específico que deseas.

Un bucle `while` ejecutará un bloque de código siempre que una condición sea verdadera. Una vez que la condición sea falsa, el bucle dejará de ejecutar el bloque de código.

```javascript runable=true
let sum = 0;
let number = 1;
while (number <= 50) {
  sum += number;
  number++;
}
console.log("Sum = " + sum);
```

## For

El `for` es similar a `while`, con la única diferencia de que debes especificar la condición para que se detenga desde un principio. Por esa razón, `for` es un poco más organizado y más fácil de entender.


***Nota: cuando realices un bucle, asegúrate de que la declaración finalmente devuelva false para evitar un bucle infinito. En un bucle infinito, el código se ejecuta indefinidamente y hará que tu navegador se bloquee.***

<iframe src="https://www.youtube.com/embed/TSMzvFwpE_A" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<div align="right"><small><a href="https://www.youtube.com/embed/TSMzvFwpE_A">Haz clic aquí para abrir el video en una nueva ventana</a></small></div>
<br>

```javascript runable=true
for (let i = 0; i < 10; i++) {
    console.log("This is number" + " " + i);
}
```

## For…in

Los bucles `For…in` pueden usarse para recorrer con un bucle las propiedades de un objeto. Dentro de los paréntesis, puedes establecer cualquier nombre para representar la información dentro del objeto, y luego incluir el nombre del objeto:

> for (*property* in *object*) {<br>
bloque de código a ejecutarse<br>
}

```js runable=true
const perro = {
  razas: "Gran Danés",
  dimension : "Extra grande",
  edad: 3,
  nombre: "Rocky"

}

for(items in perro){
  console.log(perro[items]);
}
```

## Entonces... Dime, ¿te gustó la programación?

La programación es como Taco Bell: siempre se usan los mismos ingredientes pero se mezclan de diferentes maneras. Sabes cómo escribir código, pero... ¿Sabes cómo resolver problemas reales?

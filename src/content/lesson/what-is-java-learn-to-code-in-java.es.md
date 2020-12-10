---
title: "¿Qué es Java? Aprende a Programar en Java"
subtitle: "Conozca qué es Java, todos están hablando de ello y, probablemente, ya sepa que es hora de aprender a programar en Java para llevar las cosas al siguiente nivel."
cover_local: "../../assets/images/4cc6fa0b-2530-4052-aa7e-8dac03788ac3.png"
textColor: "white"
date: "2020-10-19T16:36:31+00:00"
tags: ["java"]
status: "draft"

---

## Pero, Qué es java?
***
“Java es un lenguaje de programación y una plataforma informática comercializada por primera vez en 1995 por Sun Microsystems”, así de fácil resume la propia web de Java qué es esta tecnología.

Nació con el objetivo de ser un lenguaje de programación de estructura sencilla que pudiera ser ejecutado en diversos sistemas operativos. 

## Pero, Qué que sirve?
***
+ Java sirve para crear aplicaciones y procesos en una gran diversidad de dispositivos.
+ Se base en **programación orientada a objetivos**
+ permite ejecutar un mismo programa en diversos sistemas operativos y ejecutar el código en sistemas remotos de manera segura.

## Diferencias entre Java y JavaScript
***
La similitud en el nombre entre Java y JavaScript genera que en ocasiones se confundan. En cambio, ambos son totalmente diferentes. 

Mostrando algunas de sus diferencias

|**Java**  |**JavaScript**   |
|:--------------|:--------------|
|Es un lenguaje complilado     |Es un lenguaje interpretado            |
|Se depura en dos fases  |Se depura en una fase|
|Es un lenguaje orientado a objetos puro   |Está basado en prototipos|
|Es fuertemente tipado |Es débilmente tipado|

## Variables
***

<iframe width="830" height="467" src="https://www.youtube.com/embed/Q-eob0WBKs0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<div align="right"><small><a href="https://www.youtube.com/embed/Q-eob0WBKs0">Click aquí para abrir el video en una nueva ventana</a></small></div>

Las variables no son un concepto nuevo, cualquiera que sepa matemáticas está familiarizado con el concepto de variables.

Una variable es un contenedor en el que puede almacenar cualquier dato. Por ejemplo, puedes tener la siguiente variable:

**Variables en Java**

Las variables Java son un espacio de memoria en el que guardamos un determinado valor (o dato). Para definir una variable seguiremos la estructura:

```java
[privacidad] tipo_variable identificador;
```

Java es un lenguaje de tipado estático. Por lo cual todas las variables tendrán un tipo de dato (ya sea un tipo de dato primitivo o una clase) y un nombre de identificador.

El tipo de dato se asignará a la hora de definir la variable. Además, en el caso de que las variables sean propiedades de objetos tendrán una privacidad.

Ejemplos de variables serían…
```java
int numero = 2;
String cadena = "Hola";
long decimal = 2.4;
boolean flag = true;
```

Las variables son utilizadas como propiedades dentro de los objetos.
```java
class Triangulo {
    private long base;
    private long altura;
}
```
> No te preocupes por el concepto de objeto, ya que lo revisaremos más adelante cuando hablemos de la Programación Orientada a Objetos

**Tipos de variables en Java**

Dentro de Java podemos encontrar los siguientes tipos de variables:

+ **Variables de instancia (campos no estáticos):**, son las variables que están definidas dentro de un objeto pero que no tienen un modificador de estáticas (static). Suelen llevar un modificador de visibilidad (public, private, protected) definiéndose.

```java
class Triangulo {
    private long base;
    private long altura;
}
```

+ **Variables de clase (campos estáticos):** son aquellas variables que están precedidas del modificador static. Esto indica que solo hay una instancia de dicha variable. Es decir, aunque tengamos N objetos de la clase, la variable estática solo se instancia una vez.

```java
class Triangulo {
    static long lados = 3;
}
```
Si además queremos que el valor no pueda cambiar nunca la definiremos como final.

```java
class Matematicas {
    final static long PI = 3.14159;
}
```

+ **Variables locales:** son variables temporales cuyo ámbito de visibilidad es el método sobre el que están definidas. No pueden ser accedidas desde otra parte del código. Se las distingue de las variables de instancia ya que estas no llevan modificadores de visibilidad delante.

```java
int variable = 2;
```

+ **Parámetros:** son las variables recibidas como parámetros de los métodos. Su visibilidad será el código que contenga dicho método.

```java
public Triangulo(long base, long altura){...}
```

## Nombres de las variables Java

Cuando vayamos a dar un nombre a una variable deberemos de tener en cuenta una serie de normas. Es decir, no podemos colocar el nombre que queramos a una variable.

Los identificadores son secuencias de texto unicode, sensibles a mayúsculas cuya primer carácter solo puede ser una letra, número, símbolo dolar $ o subrayado _ . Si bien es verdad que el símbolo dolar no es utilizado por convención.
Es recomendable que los nombres de los identificadores sean legibles y no acrónimos que no podamos leer. De tal manera que a la hora de verlos se auto-documenten por sí mismos. Además estos identificadores nunca podrán coincidir con las palabras reservadas.

Algunas reglas no escritas, pero que se han asumido por convención son:

+ Los identificadores siempre se escriben en minúsculas. **(pe. nombre)**. 
+ Si son dos o más palabras el inicio de cada siguiente palabra se escriba en mayúsculas **(pe. nombrePersona)**.
+ Si el identificador implica que sea una constante. Es decir que hayamos utilizado los modificadores **final static**, dicho nombre se suele escribir en mayúsculas **(pe. LETRA)**. 
+ Si la constante está compuesta de dos palabras, estas se separan con un subrayado **(pe. LETRA_PI)**.

## Literales en Java
***

Los valores literales son aquellos que podemos asignar a las variables. Dependiendo del tipo de variable podremos asignar unos valores u otros.

**Literales de enteros**

Los enteros que podemos utilizar serán byte, short, int y long. Los literales que les asignemos siempre será un número entero.

```java
byte variableByte = 12;
short variableShort = 12;
int variableInt = 12;
long variableLong = 12;
```

Si bien para el caso del tipo long podemos crear literales de enteros que acaben en L (mayúscula o minúscula, aunque por legilibilidad se recomienda la primera)

```java
long variableLong = 12D;
```

Hay otros valores que pueden ser manejados por los literales enteros, para cuando representemos el número en diferentes bases. Por ejemplo cuando los manejemos como binarios o hexadecimales. Para este caso habrá que manejar literales de enteros que tengan dicho formato.

```java
int variableBinaria = 011010;
int variableHexadecimal = 0x1a;
```

**Literales de decimales**
Los dos tipos de datos de decimales que podemos manejar son float y double. Para estos casos la representación del literal de decimales serán con separación de un punto entre la parte entera y la parte decimal.

```java
float variableFloat = 12.2;
double variableDouble = 12.2;
```
De igual manera podemos utilizar las letras F o f para el tipo de dato float y D o d para el tipo de dato double. Siempre, por legilibilidad se recomienda la letra en mayúsculas.

```java
float variableFloat = 12.2F;
double variableDouble = 12.2D;
```

**Literales de caracteres y cadenas**

Tanto los caracteres del tipo de dato char, como las cadenas del tipo de datos String contienen caracteres Unicode UTF-16.

Los caracteres UTF-16 se pueden escribir directamente en la cadena o si nuestro editor de textos no nos permite el manejo de esa codificación los podemos poner escapados en el formato.

```java
'uCODIGOUNICODE'
```
Por ejemplo la letra como la ñ se escaparía de la siguiente forma:

```java
'u00F1'
```

Para utilizarla en una cadena de texto “España” podríamos poner

```java
String pais = "Espau00F1a";
```
Para los caracteres utilizaremos comillas simples para delimitarlos, mientras que para las cadenas utilizaremos comillas dobles.

```java
char variableChar = ‘a’;
String variableString = “cadena”;
```

## Tipos de Datos Primitivos en Java
***

Como ya hemos comentado Java es un lenguaje de tipado estático. Es decir, se define el tipo de dato de la variable a la hora de definir esta. Es por ello que todas las variables tendrán un tipo de dato asignado.

El lenguaje Java da de base una serie de tipos de datos primitivos.

|**Tipo**   |**Posible Valores**   |**Descripción**   |**Valor por defecto**|
|:---------------|:--------------------|:-----------------|:-----------------|
|byte|valores numéricos de -128 a 127 (ambos inclusive)|Representa un tipo de dato de 8 bits con signo. De tal manera que puede almacenar los valores numéricos de -128 a 127 (ambos inclusive).|	0|
|short|valores numéricos de -32.768 a 32.767|Representa un tipo de dato de 16 bits con signo. De esta manera almacena valores numéricos de -32.768 a 32.767.|	0|
|int| valores numéricos|Es un tipo de dato de 32 bits con signo para almacenar valores numéricos. Cuyo valor mínimo es -231 y el valor máximo 231-1.|	0|
|long|valores numéricos entre -263 a 263-1|Es un tipo de dato de 64 bits con signo que almacena valores numéricos entre -263 a 263-1|	0L|
|float|Valores numericos |Es un tipo dato para almacenar números en coma flotante con precisión simple de 32 bits.|	0.0f|
|double|Valores numericos|Es un tipo de dato para almacenar números en coma flotante con doble precisión de 64 bits.|	0.0d|
|char|carácter Unicode|Es un tipo de datos que representa a un carácter Unicode sencillo de 16 bits. Nota: el carácter Unicode deben estar encerradas entre comillas simples|	'u0000'|
|String (o cualquier objeto)|Cualquier serie de caracteres|Las cadenas son la única forma en que tenemos que almacenar palabras (series de caracteres). Nota: las cadenas deben estar encerradas entre comillas.|	null|
|boolean|true \|	false | Sirve para definir tipos de datos booleanos. Es decir, aquellos que tienen un valor de true o false. Ocupa 1 bit de información.  |false|

<iframe height="400px" width="100%" src="https://repl.it/repls/TreasuredHeartyProfessionals?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

## Expresiones, sentencias y bloques en Java
***

Un programa en Java se compone de un conjunto de sentencias que se ejecutan para resolver un problema. Las sentencias son el elemento básico de ejecución de los programa Java.

A parte de las sentencias, en un programa Java nos encontraremos con expresiones y bloques.

**Expresiones**

Una expresión es un conjunto de variables, operadores e invocaciones de métodos que se construyen para poder ser evaluadas retornando un resultado.

Ejemplos de expresiones son:

```java
int valor = 1;
if (valor 1 > valor2) { ... }
```

Cuando tengamos expresiones de evaluación complejas es recomendable que utilicemos paréntesis para saber cual es el orden de ejecución de operaciones.

Ya que si tenemos una expresión como
```java
2 + 10 / 5
```

No será la misma si ponemos
Ya que si tenemos una expresión como
```java
(2 + 10) / 5 ó 2 + (10 / 5)
```
En el caso de no utilizar paréntesis se ejecutará el orden de preferencia de operadores. En este caso la división tiene más preferencia que la suma.

**Sentencias**

Una sentencia es la unidad mínima de ejecución de un programa. Un programa se compone de conjunto de sentencias que acaban resolviendo un problema. **Al final de cada una de las sentencias encontraremos un punto y coma (;)**.

Tenemos los siguientes tipos de sentencias.


> Sentencias de declaración
```java
int valor = 2;
```

> Sentencias de asignación
```java
valor = 2;
```

> Sentencias de incremento o decremento
```java
valor++;
```
> Invocaciones a métodos
```java
System.out.println("Hola Mundo");
```
> Creaciones de objetos
```java
Circulo miCirculo = new Circulo(2,3);
```

> Sentencias de control de flujo
```java
if (valor>1) { … }
```

**Bloques**

Un bloque es un conjunto de sentencias los cuales están delimitados por llaves.

```java
if (expresion) {
    // Bloque 1
} else {
    // Bloque 2
}
```

## Operadores de Asignación y Aritméticos Java
***

+ **Operador de Asignación**

El operador Java más sencillo es el operador de asignación. Mediante este operador se asigna un valor a una variable. **El operador de asignación es el símbolo igual**.

La estructura del operador de asignación es:

**variable = valor;**

Así podemos asignar valores a variables de tipo entero, cadena,…

```java
int numero = 3;
String cadena = "Hola Mundo";
double decimal = 4.5;
boolean verdad = true;
```

+ **Operadores Aritméticos**

Los operadores aritméticos en Java son los operadores que nos permiten realizar operaciones matemáticas: suma, resta, multiplicación, división y resto.

Los operadores aritméticos en Java son:

|**Operador**  |**Descripción**   |
|:--------------|:--------------|
|+	|Operador de Suma. Concatena cadenas para la suma de String|
|-	|Operador de Resta|
|*	|Operador de Multiplicación|
|/	|Operador de División|
|%	|Operador de Resto|

Los operadores aritméticos en Java los utilizaremos entre dos literales o variables y el resultado, normalmente lo asignaremos a una variable o bien lo evaluamos.

**variable** = (valor1|variable1) **operador** (valor2|variable2);

Así podemos tener los siguientes usos en el caso de que queramos asignar su valor.

```java
suma = 3 + 7;             // Retorna 10
resta = 5 - 2;            // Retorna 3
multiplicacion = 3 * 2;   // Retorna 6
division = 4 / 2;         // Retorna 2
resto = 5 % 3;            // Retorna 2
```

Ten en cuenta que pueden ser valores o variables:
```java
suma = vble1 + 3;   // Sumamos 3 al valor de la variable vble1
resta = vble1 - 4;  // Restamos 4 al valor de la variable vble1
```
O podríamos utilizarlo en una condición
```java
if (variable > suma + 3) { ... }
```
En este caso no asignamos el resultado de la suma a una variable, solo lo evaluamos.

+ **Operadores Unarios en Java**

Los operadores unarios en Java son aquellos que solo requieren un operando para funcionar.

Los operadores unitarios que tenemos en Java son:

|**Operador**  |**Descripción**   |
|:--------------|:--------------|
|+	|Operador unario suma. Indica un número positivo.|
|-	|Operador unario resta. Niega una expresión.|
|++	|Operador de incremento. Incrementa el valor en 1.|
|–	|Operador de decremento. Decrementa el valor en 1.|
|!	|Operador de complemento lógico. Invierte el valor de un booleano|

+ **Operadores unarios suma o resta**
Los operadores unitarios de suma o resta son muy sencillos de utilizar. En el caso del operador unitario suma su uso es redundante. Con el operador unitario resta podemos invertir un valor.

Por ejemplo podríamos tener el siguiente código:

```java
int valor = 2;
System.out.println(-valor); // Imprimirá por pantalla un -2
```
+ **Operadores de incremento y decremento**

Los operadores de incremento se pueden aplicar como prefijo o como sufijo.

```java
++ variable;
variable ++;
-- variable;
variable --;
```

+ **Operador de complemento lógico**

El operador de complemento lógico sirve para negar un valor lógico. Se suele utilizar delante de una operación de evaluación booleana. Normalmente en sentencias de decisión o bucles.

La estructura es:

**! (expresion)**

Si la expresión era un true la convierte en false y si era false la convierte en true.

Podemos verlo en el siguiente ejemplo:
```java
int vble1 = 2;
int vble2 = 3;

if !(vble1 > vble2)
    System.out.println("variable 1 es más pequeña que la variable 2");
```
Como podemos observar el valor de la expresión evaluada es convertido.

+ **Operadores Igualdad y Relacionales en Java**

Los operadores de igualdad y relacionales en Java son aquellos que nos permiten comparar el contenido de una variable contra otra atendiendo a si son variables con un valor igual o distinto o bien si los valores son mayores o menores.


|**Operación**  |**Sintaxis**   |**Ejemplos**   |
|:--------------|:--------------|:--------------|
|Igual a     |==             |Es 5 == 5? True!<br>Es 5 == 4? False!<br>Es 5 == '5'? True!    |
|No Igual a    |!=             |Es 5 != 5? False!<br>Es 5 != '5'? False!<br>Es 1 != 'Hello' True!   |
|Mayor que   |>              |Es 5 > 5? False!<br>Es 6 > 3? True!    |
|Menos que    |<              |Es 6 < 12? True            |
|Mayor o igual |>=             |Es 6 <= 6? True<br>Es 3 <= 6? True    |
|Menor o igual  |<=            |Tienes la idea 🙂       |

+ **Operadores Condicionales Java**

Los operadores condicionales en Java son aquellos que evalúan dos expresiones booleanas.

|**Operación**   |**Sintaxis**   |**Ejemplos**   |
|:---------------|:--------------|:--------------|
|AND             |&&             |Con AND, ambos lados TIENEN QUE SER TRUE para que todo se convierta en realidad.<br>Es (5 == 5 && 3 > 1) ? True!<br>Es ('Ramon' == 'Pedro' && 2 == 2) ? False!    |
|OR     |\|\|     |Es ('Oscar' != 'Maria' OR 2 != 2)? True!<br>Es (5 == '5' AND 'Ramon' != 'Pedro') OR (2 == 2)? True!   |
|NOT     |!     |NOT será exactamente lo contrario del resultado del operador lógico:<br>Es !(5 > 5)? True!<br>Is !(True)? False!    |
|Temerario|?:  |con operador temerario podras hacer condiciones en una sola linea **(5 == 5) ? 5 :0** |


## Sentencias Control en Java
Bien, ahora es cuando todo empieza a ponerse divertido! Para controlar el flujo de tu aplicación, tendrás varias opciones y las utilizarás cada día. Por lo tanto, debes sentirte cómodo usándolas.

Un programa en Java se ejecuta en orden desde la primera sentencia hasta la última.

Si bien existen las **sentencias de control de flujo** las cuales permiten alterar el fujo de ejecución para tomar decisiones o repetir sentencias.

Dentro de las sentencias de control de flujo tenemos las siguientes:

+ **Sentencias de Decisión**

Son sentencias que nos permiten tomar una decisión para poder ejecutar un bloque de sentencias u otro.

Las sentencias de decisión son: `if-then-else` y `switch`.

Mediante `if-then-else` podremos evaluar una decisión y elegir por un bloque u otro.

```java
if (expresion) {
  // Bloque then
} else {
  // Bloque else
}
```
Mientras que con switch podremos evaluar múltiples decisiones y ejecutar un bloque asociado a cada una de ellas.

```java
switch (expresion) {
  case valor1:
    bloque1;
    break;
  case valor2:
    bloque2;
    break;
  case valor3:
    bloque3;
    break;
  …
  default:
      bloque_por_defecto;
}
```
[[info]]
|Usa `switch` en lugar de` if` cuando: <br> <br> • Estás comparando varias condiciones posibles de una expresión y la expresión en sí no es trivial. • Tienes múltiples valores que pueden requerir el mismo código . <br> • Tienes algunos valores que requerirán esencialmente toda la ejecución de otro valor, más solo unas pocas declaraciones. <br> <br> Utiliza `if` en lugar de` switch` cuando: <br> <br> • Deseas probar la veracidad de una expresión. <br> • Solo tienes una única prueba afirmativa. <br> • Necesitas evaluar diferentes expresiones para cada rama.


+ **Sentencias de Bucle**

Las sentencias de bucle nos van a permitir ejecutar un bloque de sentencias tantas veces como queramos, o tantas veces como se cumpla una condición.

En el momento que se cumpla esta condición será cuando salgamos del bucle.

Las sentencias de bucle en Java son: `while`, `do-while` y `for`.

En el caso de la sentencia while tenemos un bucle que se ejecuta mientas se cumple la condición, pero puede que no se llegue a ejecutar nunca, si no se cumple la condición la primera vez.
```java
while (expresion) {
  bloque_sentencias;
}
```

Por otro lado, si utilizamos do-while, lo que vamos a conseguir es que el bloque de sentencias se ejecute, al menos, una vez.
```java
do {
  bloque_sentencias;
} while (expresion)
```

La sentencia for nos permite escribir toda la estructura del bucle de una forma más acotada. Si bien, su cometido es el mismo.
```java
for (sentencias_inicio;expresion;incremento) {
  bloque_sentencias;
}
```

`For Extendido o bucles for each`

En las últimas versiones de Java se introdujo una nueva forma de uso del for, a la que se denomina “for extendido” o “for each”. Esta forma de uso del for, que ya existía en otros lenguajes, facilita el recorrido de objetos existentes en una colección sin necesidad de definir el número de elementos a recorrer. La sintaxis que se emplea es:
```java
 for (TipoARecorrer nombreVariableTemporal : nombreDeLaColección ) {
    Instrucciones;
 }
```

+ **Sentencias de ramificación**

Las sentencias de ramificación son aquellas que nos permiten romper con la ejecución lineal de un programa.

El programa se va ejecutando de forma lineal, sentencia a sentencia. Si queremos romper esta linealidad tenemos las sentencias de ramificación.

Las sentencias de ramificación en Java son: `break` y `continue`.

En el caso de break nos sirve para salir de bloque de sentencias, mientras que continue sirve para ir directamente al siguiente bloque.

## Entonces ... dime, ¿te gustó El lenguaje Java?
***
Java es mas que otro lenguaje de programacion con instrucciones divertidas que podemos ir descubriendo duranto a lo largo del curso
---
title: Condicionales en la programación con JavaScript
author:
  - alesanchezr
tags:
  - conditionals
  - logical operations
  - if else
  - conditions
  - javascript
description: >-
  Domina los condicionales de JavaScript para controlar el flujo de su código. Aprende sobre
  las sentencias if-else, los operadores lógicos y mucho más. Descubre el poder de las
  condiciones.
---
Dominar el uso de las condiciones es una de las 5 habilidades fundamentales de construir algoritmos:

1. Variables.
2. `Condicionales`.
3. Arrays.
4. Loops(Bucles).
5. Funciones.

Las condiciones son la única forma en que los desarrolladores tienen para decirle a la computadora cómo tomar decisiones en tiempo real, muy similar a cómo funcionan los cerebros.

Digamos que estamos construyendo un programa que nos ayudará a optimizar nuestras elecciones de vestimenta, pero en nuestras preferencias el color azul no es una opción, para ello podemos ordenarle a la computadora que evite el color azul usando la siguiente condición:
  
`if` **color** is not **blue**, then... do something.  
`else`... do nothing or exit.
  
![Condicionales](https://github.com/breatheco-de/content/blob/master/src/assets/images/e73b673e-d744-45a7-a1ed-61a1dae49560.png?raw=true)

Y así es como escribiríamos esto en JavaScript:

```js
if(color != 'blue') {
    // Cualquier código aquí se ejecutará cuando el color sea diferente del azul
}
else {
    // Solo ejecutará este código si el color es azul
}
```

## Todo se trata sobre: ¿Qué preguntas hacer?

El ejemplo anterior era una condición simple, pero en la vida real elegir qué ponerse implica una combinación de varias condiciones para tomar la decisión final, por ejemplo: veamos este algoritmo que indica si tienes gripe.

![Algoritmo de la gripe](https://github.com/breatheco-de/content/blob/master/src/assets/images/03ed6b76-0ee0-4b04-bd45-0fb58ae6f800.jpeg?raw=true)

Si desea representar este algoritmo en JavaScript, se verá más o menos así:

```js
let sientoQueMeAtropelloUnTren = true;
let meAtropelloUnTren = false;

if(sientoQueMeAtropelloUnTren == true) {
  if(meAtropelloUnTren == true) {
    console.log("No tienes gripe");
  }
  else{
    console.log("Tienes gripe");
  }
}
else{
  console.log("No tienes gripe");
}
```

Básicamente, este algoritmo tiene dos variables a considerar: `sientoQueMeAtropelloUnTren` y `meAtropelloUnTren`.

Nuestro trabajo como desarrolladores es intentar preparar una estrategia y crear un algoritmo que resuelva un problema.

## Operadores `AND` y `OR`

Otra forma de escribir el algoritmo es combinar preguntas en la misma condición utilizando los operadores `AND` y` OR` que en JavaScript se representan con `&&` para **AND** y `||` para **OR**:

```js
if(sientoQueMeAtropelloUnTren == false || meAtropelloUnTren == true) {
  console.log("No tienes gripe");
}
else if(sientoQueMeAtropelloUnTren == true && meAtropelloUnTren == false) {
  console.log("Tienes gripe")
}
else{
  console.log("No tengo idea");
}
```

Como puedes ver aquí, estamos usando `else if` juntos por primera vez, para una programación más rápida. Otro truco que puedes usar para programar más rápido:

| Original | Equivalente |
| --- | --- |
| en lugar de `if(sientoQueMeAtropelloUnTren == true)` | escribes `if(sientoQueMeAtropelloUnTren)`  |
| en lugar de `if(sientoQueMeAtropelloUnTren == false)` | escribes `if(!sientoQueMeAtropelloUnTren)` |

## Operadores mayor que o menor que `>` y `<`

Si queremos comparar números y saber si uno es mayor o menor que el otro podemos escribir el siguiente código en JavaScript:

```js
if(age < 16) {
  console.log("No puedes conducir");
}
else if(age >= 16) {
  console.log("Puedes conducir");
}
```

## Operador Ternario (condiciones en línea)

Otro gran truco para programar más rápido es usar ternarios que básicamente nos permiten codificar todo en una sola línea:

```js
const flu = (sientoQueMeAtropelloUnTren && !meAtropelloUnTren) ? true : false;
```

En este ejemplo, la variable `flu` solo será verdadera si `sientoQueMeAtropelloUnTren == true` y `meAtropelloUnTren == false` al mismo tiempo. Si esa pregunta no es cierta, entonces `flu` será falso.

Los ternarios se usan MUCHO hoy día porque te ahorran mucho tiempo, y también podremos usarlos más adelante en código `jsx` (React).

## Renderizado Condicional

Otro gran uso de las condicionales es generar HTML basado en ciertas condiciones. Por ejemplo, digamos que tenemos una alerta de bootstrap que vamos a renderizar en el sitio web:

```js
let alertHTMLCode = "<div>¡Advertencia! No puedes conducir</div>";
```

Si queremos que esta alerta se muestre solo si el usuario es menor de 16 años, podríamos hacer algo como:

```js
let age = 14;
let alertHTMLCode = (age < 16) ? "<div>¡Advertencia! No puedes conducir</div>" : "";
```

Ahora nuestra variable `alertHTMLCode` estará vacía si la edad del usuario es mayor de 16 años, si es menor, contendrá todo el HTML.

<iframe width="100%" height="300" src="//jsfiddle.net/BreatheCode/bycgsnqt/7/embedded/html,css,js,result" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

<div align="right"><small><a href="//jsfiddle.net/BreatheCode/bycgsnqt/7/embedded/html,css,js,result">Haz clic aquí para abrir demo en una nueva ventana</a></small></div>


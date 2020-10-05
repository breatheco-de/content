---
title: "Condicionales en la programación en Java"
subtitle: "Uso de condiciones para controlar el flujo de su código en java"
date: "2019-11-11"
cover: "https://ucarecdn.com/4cc6fa0b-2530-4052-aa7e-8dac03788ac3/"
textColor: "white"
syntaxis: ["java"]
tags: ["Condicionales","Operaciones Logicas","Si de lo contrario","Condicion","Java"]
status: "draft"

---

Dominar el uso de las condiciones es una de las 5 habilidades fundamentales de construir algoritmos:

1. Variables.
2. `Condicionales`.
3. Arrays(Arreglos).
4. Loops(Bucles).
5. Funciones.

Las condiciones son la única forma en que los desarrolladores tienen que decirle a la computadora cómo tomar decisiones en tiempo real, muy similar a cómo funcionan los cerebros humanos.

Digamos que estamos construyendo un programa para ayudarnos a elegir qué almacenar y odiamos el color azul, podemos decirle a la computadora que evite el azul usando una condición como esta:
  
  
`If` ***color*** is not **blue**, then... do something.  
`Else`... do nothing or exit.
  
![Condicionales](https://ucarecdn.com/e73b673e-d744-45a7-a1ed-61a1dae49560/)

Las sentencias de decisión son: `if-then-else` y `switch`.

## Utilizando `if... then... else`

La estructura de las sentencias `if-then-else` es:

```java
if (expresion) {
  // Bloque then
} else {
  // Bloque else
}
```

Se evalua la expresión indicada en la sentencia if. En el caso de que la expresión sea true se ejecutará el bloque de sentencias then y en el caso de que la expresión sea false se ejecutará el bloque de sentencias else.

La parte del else no tiene por qué existir. En este caso tendríamos una sentencia if-then.

```java
if (expresion) {
  // Bloque then
}
```

De esta forma podríamos tener el siguiente código fuente:

```java
int valor = 4;

if (valor < 10) {
  System.out.println("El número es menor de 10");
} else {
  System.out.println("El número es mayor de 10");
}
```

Las sentencias if-then-else pueden estar anidadas y así nos encontraríamos con una sentencia if-then-elseif, la cual tendría la siguiente estructura:

```java
if (expresion) {
  // Bloque then
} else if {
  // Bloque else
} else if {
  // Bloque else
} else if {
  // Bloque else
} ...
```

De esta forma podemos tener el siguiente código:

```java
int valor = 14;

if (valor < 10) {
  System.out.println("El valor es una unidad");
} else if (valor < 100) {
  System.out.println("El valor es una decena");
} else if (valor < 1000) {
  System.out.println("El valor es una centena");
} else if (valor < 10000) {
  System.out.println("El valor es un millar");
} else {
  System.out.println("Es un número grande");
}
```

## Utilizando `switch`

Para los casos en los que se tienen muchas ramas o caminos de ejecución en una sentencia if tenemos la sentencia switch. La sentencia switch evalúa una expresión y ejecutará el bloque de sentencias que coincida con el valor de la expresión.

El valor de la expresión tiene que ser numérico. Aunque a partir de Java SE 7 ya se pueden utilizar expresiones cuya evaluación sean cadenas.

La estructura de la sentencia switch es:
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
  ...
  default:
      bloque_por_defecto;
}
```

Es importante ver que se utiliza la sentencia break. La sentencia break hace que se salga de la sentencia switch y por lo tanto no se evalúe el resto de sentencias. Por lo tanto su uso es obligatorio al final de cada uno de los bloques.

Un ejemplo claro en el que podemos utilizar la sentencia switch es para evaluar el valor de un mes en numérico y convertirlo a cadena. Este código quedaría de la siguiente forma:

```java
int iMes = 3;
String sMes;

switch (iMes) {
    case 1:
        sMes = "Enero";
        break;
    case 2:
        sMes = "Febrero";
        break;
    case 3:
        sMes = "Marzo";
        break;
    case 4:
        sMes = "Abril";
        break;
    case 5:
        sMes = "Mayo";
        break;
    case 6:
        sMes = "Junio";
        break;
    case 7:
        sMes = "Julio";
        break;
    case 8:
        sMes = "Agosto";
        break;
    case 9:
        sMes = "Septiembre";
        break;
    case 10:
        sMes = "Octubre";
        break;
    case 11:
        sMes = "Noviembre";
        break;
    case 12:
        sMes = "Diciembre";
        break;
    default:
        sMes = "Mes incorrecto";
}

System.out.println(sMes);
```

## Se trata de qué preguntas hacer

El ejemplo anterior era una condición simple, pero en la vida real, elegir qué hacer implica una combinación de varias condiciones para tomar la decisión final, por ejemplo: Veamos este algoritmo que le dice a una computadora cómo decidir qué ponerse durante el día de San Valentín:

![What ot ware in valentines day](https://ucarecdn.com/87f2be86-32c3-4bfc-8db4-dbd0d979e4d3/)

Si quieres representar este algoritmo en Java, se verá algo así:

```java
if (goingOut){
  if (canIGetBurger){
    if (placeBotleWine){
      if (coolMix){
            /* do something */
      }
    }else{
      if (blazers > 3){
          /* do something */
      }else{
          /* do something */
      }
    }
  }else if (shePants){
      /* do something */
  }else{
      /* do something */
  }
}else{
  if (nakedSheDoor){
      /* do something */
  }else if (blazers > 3){
      /* do something */
  }else{
      /* do something */
  }
}
```
